"""Write a GeoGebra file from a list of straightedge and compass steps (used by the search tools).

The header (window, views, settings) is copied from an existing GeoGebra file of the archive, and
every object is written the way GeoGebra writes it, with its coordinates worked out here, so the
file opens with each intersection already where it belongs.
"""
import sys, math, zipfile, re, io
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import verify as v

POINT = '''<element type="point" label="{l}">
	<show object="true" label="{showlabel}"/>
	<objColor r="{r}" g="{g}" b="{b}" alpha="0"/>
	<layer val="0"/>
	<labelMode val="0"/>
	<pointSize val="{size}"/>
	<pointStyle val="0"/>
	<coords x="{x!r}" y="{y!r}" z="1"/>
</element>
'''
LINE = '''<element type="{t}" label="{l}">
	<show object="true" label="false"/>
	<objColor r="{r}" g="{g}" b="{b}" alpha="0"/>
	<layer val="0"/>
	<labelMode val="0"/>
	<lineStyle thickness="{th}" type="0" typeHidden="1" opacity="204"/>
	<eqnStyle style="implicit"/>
	<coords x="{x!r}" y="{y!r}" z="{z!r}"/>
</element>
'''
CONIC = '''<element type="conic" label="{l}">
	<show object="true" label="false"/>
	<objColor r="{r}" g="{g}" b="{b}" alpha="0"/>
	<layer val="0"/>
	<labelMode val="0"/>
	<lineStyle thickness="5" type="0" typeHidden="1" opacity="204"/>
	<eqnStyle style="specific"/>
	<eigenvectors x0="1" y0="0" z0="1.0" x1="0" y1="1" z1="1.0"/>
	<matrix A0="1" A1="1" A2="{a2!r}" A3="0" A4="{a4!r}" A5="{a5!r}"/>
</element>
'''
NUMERIC = '''<element type="numeric" label="{l}">
	<value val="{v!r}"/>
</element>
'''
TEXT = '''<expression label="{l}" exp="{exp}" />
<element type="text" label="{l}">
	<show object="true" label="false" ev="20"/>
	<objColor r="0" g="0" b="0" alpha="0"/>
	<bgColor r="255" g="255" b="255" alpha="255"/>
	<layer val="0"/>
	<labelMode val="0"/>
	<absoluteScreenLocation x="{sx}" y="{sy}"/>
</element>
'''
GIVEN, STEP, RESULT = (21, 101, 192), (110, 109, 115), (0, 140, 90)

class Builder:
    def __init__(self):
        self.xml, self.obj, self.ggb = [], {}, {}

    def cmd(self, name, ins, outs):
        self.xml.append('<command name="%s">\n\t<input %s/>\n\t<output %s/>\n</command>\n' % (
            name, ' '.join('a%d="%s"' % (i, a) for i, a in enumerate(ins)), ' '.join('a%d="%s"' % (i, a) for i, a in enumerate(outs))))

    def point(self, l, p, colour=STEP, show=True):
        self.obj[l] = ('point', p)
        self.xml.append(POINT.format(l=l, x=p[0], y=p[1], r=colour[0], g=colour[1], b=colour[2], size=5 if colour == GIVEN else 3, showlabel='true' if show else 'false'))

    def given(self, l, p): self.point(l, p, GIVEN)

    def line(self, l, kind, ins, geom, colour=STEP, t='line', th=3):
        # geom: GeoGebra line coords (x, y, z) meaning x X + y Y + z = 0
        self.cmd(kind, ins, [l]); self.obj[l] = ('line', geom[0], geom[1], geom[2])
        self.xml.append(LINE.format(t=t, l=l, x=geom[0], y=geom[1], z=geom[2], r=colour[0], g=colour[1], b=colour[2], th=th))

    def line2(self, l, a, b, colour=STEP):
        A, B = self.obj[a][1], self.obj[b][1]
        self.line(l, 'Line', [a, b], (A[1] - B[1], B[0] - A[0], A[0] * B[1] - A[1] * B[0]), colour)

    def segment(self, l, a, b, colour=STEP, th=3):
        A, B = self.obj[a][1], self.obj[b][1]
        self.line(l, 'Segment', [a, b], (A[1] - B[1], B[0] - A[0], A[0] * B[1] - A[1] * B[0]), colour, t='segment', th=th)

    def parallel(self, l, p, ln):
        P = self.obj[p][1]; _, a, b, _c = self.obj[ln]
        self.line(l, 'Line', [p, ln], (a, b, -(a * P[0] + b * P[1])))

    def perpendicular(self, l, p, ln):
        P = self.obj[p][1]; _, a, b, _c = self.obj[ln]
        self.line(l, 'OrthogonalLine', [p, ln], (-b, a, -(-b * P[0] + a * P[1])))

    def circle(self, l, centre, through=None, radius_of=None):
        C = self.obj[centre][1]
        if through:
            r = v.dist(C, self.obj[through][1]); ins = [centre, through]
        else:
            a, b = radius_of; r = v.dist(self.obj[a][1], self.obj[b][1]); ins = [centre, 'Segment[%s, %s]' % (a, b)]
        self.cmd('Circle', ins, [l]); self.obj[l] = ('circle', C, r)
        self.xml.append(CONIC.format(l=l, a2=C[0] ** 2 + C[1] ** 2 - r * r, a4=-C[0], a5=-C[1], r=STEP[0], g=STEP[1], b=STEP[2]))

    def intersect(self, l, o1, o2, near, colour=STEP, show=True):
        """The crossing of o1 and o2 nearest to `near`, with GeoGebra's index for it."""
        A, B = self.obj[o1], self.obj[o2]
        cands = v.intersections(A, B)
        pick = min(cands, key=lambda c: v.dist(c, near))
        if A[0] == 'circle' and B[0] == 'circle':
            (x1, y1), (x2, y2) = A[1], B[1]
            idx = 1 if (x2 - x1) * (pick[1] - y1) - (y2 - y1) * (pick[0] - x1) > 0 else 2
            ins = [o1, o2, str(idx)]
        elif 'circle' in (A[0], B[0]) and len(cands) == 2:
            L = A if A[0] == 'line' else B
            t = lambda c: c[0] * L[2] - c[1] * L[1]           # along GeoGebra's direction (y, -x)
            other = [c for c in cands if c is not pick][0]
            idx = 1 if t(pick) < t(other) else 2
            ins = [o1, o2, str(idx)]
        else:
            ins = [o1, o2]
        self.cmd('Intersect', ins, [l]); self.point(l, pick, colour, show)
        return pick

    def midpoint(self, l, a, b, show=False):
        A, B = self.obj[a][1], self.obj[b][1]
        self.cmd('Midpoint', [a, b], [l]); self.point(l, ((A[0] + B[0]) / 2, (A[1] + B[1]) / 2), show=show)

    def distance(self, l, a, b):
        self.cmd('Distance', [a, b], [l])
        self.xml.append(NUMERIC.format(l=l, v=v.dist(self.obj[a][1], self.obj[b][1])))

    def text(self, l, exp, sx, sy):
        self.xml.append(TEXT.format(l=l, exp=exp.replace('"', '&quot;'), sx=sx, sy=sy))

    def save(self, path, template, title):
        z = zipfile.ZipFile(template)
        x = z.read('geogebra.xml').decode('utf-8')
        head = x[:x.index('<construction')]; tail = x[x.index('</construction>'):]
        body = '<construction title="%s" author="" date="">\n' % title + ''.join(self.xml)
        out = io.BytesIO()
        with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as w:
            for name in z.namelist():
                if name == 'geogebra_thumbnail.png': continue
                w.writestr(name, (head + body + tail).encode('utf-8') if name == 'geogebra.xml' else z.read(name))
        open(path, 'wb').write(out.getvalue())

def _measure(self, tool, ins, label, value):
    self.cmd(tool, ins, [label]); self.xml.append(NUMERIC.format(l=label, v=value))
Builder.measure = _measure
