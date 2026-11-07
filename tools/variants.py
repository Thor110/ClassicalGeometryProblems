"""Variants of the historical constructions: the same steps, with the fractions changed.

Most historical approximations are a skeleton of steps with a few fractions in it: Hayden takes a third
of CD, Hobson 3/5, 1/2 and 3/2 of the radius, the Rhind papyrus 8/9 of the diameter, Lambert a fifth of
the versine. Keep the skeleton, change the fractions, and the construction lands somewhere else. This
script tries every small fraction in each skeleton and lists, for each one, the variants that beat the
original, with what they cost: a fraction p/q of a length costs about q compass steps and two lines
(stepping it out and drawing a parallel), except halving fractions (halves, quarters, eighths, ... down to
1/64), which are midpoints and free under the counting rules.

  python tools/variants.py              print the findings and write Variants/README.md and variants.json
  python tools/variants.py --max-q 16   allow larger denominators (default 12)

Nothing here is charted by itself: a variant worth charting is drawn as a GeoGebra file and added like
any other entry, credited to the original's author and to whoever found the variant.
"""
import itertools, json, math, os, sys
from fractions import Fraction as Fr

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'Variants')
PI, CBRT2 = math.pi, 2 ** (1 / 3)


def acc(c, t): return 100 - abs(c - t) / t * 100


def cost(f):
    """Rough cost of laying off the fraction f of a length: (circles, lines)."""
    f = Fr(f)
    if f.denominator & (f.denominator - 1) == 0: return (0, 0)          # a power of two: midpoints, free
    return (f.denominator, 2)


def fractions(max_q, lo, hi):
    """Every p/q in [lo, hi] with q up to max_q, and every halving fraction (q a power of two) up to 1/64,
    since those are midpoints and cost nothing."""
    seen = set()
    for q in [x for x in range(1, max_q + 1)] + [16, 32, 64]:
        for p in range(0, int(hi * q) + 1):
            f = Fr(p, q)
            if lo <= f <= hi and f not in seen: seen.add(f); yield f


def worst_angle(f, lo=5, hi=90, step=1):
    """The worst accuracy of an arc method over angles lo..hi degrees (the range the sources tabulate)."""
    return min(f(math.radians(d)) for d in range(lo, hi + 1, step))


# Each skeleton: what it is, who it is from, the entry it varies, its slots (name, original value, range),
# and the accuracy for given slot values.
def hayden_dtc(f):
    # AB = 1: C the midpoint, E the apex of the equilateral triangle on CB, D its foot; F a fraction f of the
    # way from C to D; the circle about E with radius BF meets the perpendicular at B in L. AL is the edge.
    BF, BD = 0.5 - 0.25 * f, 0.25
    if BF <= BD: return None
    BL = math.sqrt(3) / 4 + math.sqrt(BF * BF - BD * BD)
    return acc((1 + BL * BL) ** 1.5, 2)


def hobson_stc(a, b, c):
    # OD = a, OE = b, OF = c radii; the square on GH, GH = √(ab) + √c.
    s = math.sqrt(a * b) + math.sqrt(c)
    return acc(s * s, PI)


def rhind_stc(f):
    # The square on the fraction f of the diameter.
    return acc((2 * f) ** 2, PI)


def kunze_rtc(a, b):
    # The right triangle with legs a and b diameters: its perimeter against π diameters.
    return acc(a + b + math.hypot(a, b), PI)


def lambert_ar(p, k):
    # The rectification point P at p radii beyond O, moved towards O by k versines: BD = sin x (P+1)/(P+cos x).
    def one(x):
        P = p - k * (1 - math.cos(x))
        return acc(math.sin(x) * (P + 1) / (P + math.cos(x)), x)
    return worst_angle(one)


def buonafalce1_dtc(f):
    # In the square on the edge, lay off the fraction f of the diagonal from D along DA; BE is the edge.
    return acc((1 + (1 - math.sqrt(2) * f) ** 2) ** 1.5, 2)


def willich_stc(t):
    # A at the top, B a quadrant away, BD a chord of 60° on the far side; E the fraction t of the way from B
    # to D; AE meets the circle again at F; AF is the side.
    A, B, D = (0, 1), (1, 0), (0.5, -math.sqrt(3) / 2)
    E = (B[0] + t * (D[0] - B[0]), B[1] + t * (D[1] - B[1]))
    dx, dy = E[0] - A[0], E[1] - A[1]
    s = 2 * abs(A[0] * dx + A[1] * dy) / math.hypot(dx, dy)          # the chord through A in that direction
    return acc(s * s, PI)


# ---- More skeletons: the formulas reproduce each charted entry exactly when given its own fractions ----
def circ_line(P, d, C, R, pick):
    a = d[0]**2 + d[1]**2; b = 2*((P[0]-C[0])*d[0] + (P[1]-C[1])*d[1]); c = (P[0]-C[0])**2 + (P[1]-C[1])**2 - R*R
    disc = b*b - 4*a*c
    if disc < 0: return None
    ts = sorted([(-b - math.sqrt(disc))/(2*a), (-b + math.sqrt(disc))/(2*a)])
    t = ts[1] if pick == 'far' else ts[0]
    return (P[0] + t*d[0], P[1] + t*d[1])

def kochanski(n, ang):          # tangent steps n radii from C, angle ang degrees: AD = sqrt(4 + (n - tan ang)^2) ~ pi (x2 against 2 pi)
    return acc(math.sqrt(4 + (n - math.tan(math.radians(ang)))**2), PI)
def specht(a, b):               # AB = a, BC = b on the tangent: AE = (a+b) sqrt(1+a^2) ~ 2 pi
    return acc((a + b) * math.sqrt(1 + a*a), 2*PI)
def degelder(e, f, k=3):        # 3 + f^2/(1+e^2) ~ pi ; de Gelder e = 7/8, f = 1/2
    return acc(k + f*f/(1 + e*e), PI)
def buonafalce3(al, be):        # BE = al*AK on BA, CF = be*BC on CA; FE meets the arc about C at G; DG ~ cbrt 2
    C = (0, 0); B = (1, 0); D = (0, 1); A = (1, 1); AK = math.sqrt(2) - 1
    E = (1, al*AK); F = (be/math.sqrt(2), be/math.sqrt(2))
    if abs(E[0]-F[0]) + abs(E[1]-F[1]) < 1e-12: return None
    G = circ_line(F, (E[0]-F[0], E[1]-F[1]), C, 1, 'far')
    if not G: return None
    return acc(math.hypot(G[0]-D[0], G[1]-D[1])**3, 2)
def durer_third(th, t, dd=1/3):  # chord AB of angle th; D a fraction dd along; perpendicular meets arc at H; K on chord with AK = AH; X from K towards D by t; arc point m with Am = AX
    A = (1, 0); B = (math.cos(th), math.sin(th)); D = (A[0] + (B[0]-A[0])*dd, A[1] + (B[1]-A[1])*dd)
    u = ((B[0]-A[0]), (B[1]-A[1])); L = math.hypot(*u); u = (u[0]/L, u[1]/L); n = (-u[1], u[0])
    if n[0]*D[0] + n[1]*D[1] < 0: n = (-n[0], -n[1])
    H = circ_line(D, n, (0, 0), 1, 'far'); AH = math.hypot(H[0]-A[0], H[1]-A[1])
    K = (A[0] + u[0]*AH, A[1] + u[1]*AH); X = (K[0] + t*(D[0]-K[0]), K[1] + t*(D[1]-K[1]))
    AX = math.hypot(X[0]-A[0], X[1]-A[1]); return 2*math.asin(min(1, AX/2))
def durer(t, dd=Fr(1, 3), lo=30, hi=150):
    worst = 101
    for d in range(lo, hi + 1):
        th = math.radians(d); a = durer_third(th, float(t), float(dd)); parts = (a, th - 2*a, a)
        w = max(parts, key=lambda x: abs(x - th/3)); worst = min(worst, acc(w, th/3))
    return worst
def kara_third(p, k, a=0.5):     # C the point a of the way round the arc from B (a half: its midpoint)
    A = (math.cos(p), math.sin(p)); C = (math.cos(p*a), math.sin(p*a)); B = (1, 0)
    d = (C[0]-B[0], C[1]-B[1]); s = (1 - (B[0]*A[0] + B[1]*A[1]))/(d[0]*A[0] + d[1]*A[1]); y = B[1] + s*d[1]
    return math.asin(y/k) if abs(y/k) <= 1 else None
def ocagne_third(p, c, a=0.5): return math.atan2(math.sin(p*a), math.cos(p*a) + c) * (1 / (3*a)) if a != 0.5 else math.atan2(math.sin(p/2), math.cos(p/2) + c)
def worst_bisected(f, lo=1, hi=90):
    worst = 101
    for i in range(lo*4, hi*4 + 1):
        p = math.radians(i/4); t = f(p)
        if t is None: return None
        parts = (t, (p - t)/2, (p - t)/2); w = max(parts, key=lambda x: abs(x - p/3)); worst = min(worst, acc(w, p/3))
    return worst
def willich_angles(qa, ca):      # A at qa degrees from B, the chord BD of ca degrees on the far side; E its midpoint
    A = (math.cos(math.radians(qa)), math.sin(math.radians(qa))); B = (1, 0); D = (math.cos(-math.radians(ca)), math.sin(-math.radians(ca)))
    E = ((B[0]+D[0])/2, (B[1]+D[1])/2); dx, dy = E[0]-A[0], E[1]-A[1]
    s = 2*abs(A[0]*dx + A[1]*dy)/math.hypot(dx, dy); return acc(s*s, PI)


def hayden_stc(u, a, b):        # C at u along the top half side; EG = a*DE on the tangent at E; DI = b*DE beyond D on AE
    h = 1/math.sqrt(2); E = (0, -1); D = (0, -h); DE = 1 - h
    G = (a*DE, -1); I = (0, -h + b*DE)
    dx, dy = I[0]-G[0], I[1]-G[1]; r = abs((E[0]-G[0])*dy - (E[1]-G[1])*dx)/math.hypot(dx, dy)
    C = (u, 1); CE = math.hypot(C[0]-E[0], C[1]-E[1])
    if r >= CE: return None
    # the tangent from C to the circle (E, r), on the side that leans towards the axis, meeting the unit circle near the top
    ang = math.atan2(E[1]-C[1], E[0]-C[0]); off = math.asin(r/CE)
    best = None
    for sgn in (1, -1):
        dd = (math.cos(ang + sgn*off), math.sin(ang + sgn*off))
        P = circ_line(C, dd, (0, 0), 1, 'near')
        if P and P[1] > 0:
            s = 2*abs(P[1])                                   # MN through P between the diagonals
            v = acc(s*s, PI)
            if best is None or abs(P[0]) < best[1]: best = (v, abs(P[0]))
    return best[0] if best else None


# Points of an arc that can be drawn exactly, by bisecting it: (circles, lines).
ARC = {Fr(1, 2): (0, 1), Fr(1, 4): (0, 2), Fr(3, 4): (0, 2), Fr(1, 8): (0, 3), Fr(3, 8): (0, 3), Fr(5, 8): (0, 3), Fr(7, 8): (0, 3)}
# Constructible angles for Willich's quadrant and chord: (circles, lines).
WANG = {Fr(90): (0, 1), Fr(60): (1, 0), Fr(45): (0, 2), Fr(30): (1, 1), Fr(120): (2, 0), Fr(135): (0, 3), Fr(72): (4, 3), Fr(36): (4, 4), Fr(150): (2, 1)}
# Constructible angles for Kochański's turn, with a rough cost of drawing each: (circles, lines).
ANGLES = {Fr(60): (1, 1), Fr(30): (2, 1), Fr(15): (2, 2), Fr(45): (1, 1), Fr(45, 2): (1, 2), Fr(36): (4, 3), Fr(18): (4, 4)}


def cusa_trisection(shift):
    # Snellius' point moved in by `shift` versines; PA meets the tangent in D; BM = BD/3; PM meets the circle at T.
    def third(x):
        P = -(2 - shift * (1 - math.cos(x))); BD = math.sin(x) * (1 - P) / (math.cos(x) - P)
        dx, dy = 1 - P, BD / 3; a = dx*dx + dy*dy; b = 2 * P * dx; c = P*P - 1
        t = (-b + math.sqrt(b*b - 4*a*c)) / (2*a); return math.atan2(t * dy, P + t * dx)
    return worst_bisected(third)


def ramanujan1914(t, a, b):
    # A, O, B on the diameter, C the middle of the arc; AT = t; CM = a and MN = b along CB; AP = AM on AN; PQ parallel
    # to MN; TR parallel to OQ: AR = t AM²/AN; AS = AR on the perpendicular at A. √OS against a sixth of the circumference.
    A, B, C = (-1, 0), (1, 0), (0, 1)
    L = math.dist(B, C); u = ((B[0]-C[0])/L, (B[1]-C[1])/L)
    M = (C[0]+a*u[0], C[1]+a*u[1]); N = (C[0]+(a+b)*u[0], C[1]+(a+b)*u[1])
    AR = t * math.dist(A, M)**2 / math.dist(A, N)
    return acc(math.sqrt(math.sqrt(1 + AR*AR)), PI/3)


def _meet(P, d, Q, e):
    det = d[0]*(-e[1]) - d[1]*(-e[0]); s = ((Q[0]-P[0])*(-e[1]) - (Q[1]-P[1])*(-e[0]))/det; return (P[0]+s*d[0], P[1]+s*d[1])


def ramanujan1913(h, t):
    # PR a diameter, O the centre; OH = h towards P; OT = t towards R; TQ perpendicular; the chord RS = TQ; OM and TN
    # parallel to RS meet PS; the chord PK = PM; the tangent PL = MN; RC = RH on RK; CD parallel to KL meets RL at D.
    if not 0 < t < 1: return None
    O, P, R = (0, 0), (-1, 0), (1, 0)
    TQ = math.sqrt(1 - t*t); a = 2*math.asin(TQ/2); S = (math.cos(a), math.sin(a))
    d = (S[0]-R[0], S[1]-R[1]); e = (S[0]-P[0], S[1]-P[1])
    M = _meet(O, d, P, e); N = _meet((t, 0), d, P, e)
    PM, MN = math.dist(P, M), math.dist(M, N)
    if PM >= 2: return None
    k = math.pi - 2*math.asin(PM/2); K = (math.cos(k), math.sin(k)); L = (-1, MN)
    RH = 1 + h; u = ((K[0]-R[0])/math.dist(R, K), (K[1]-R[1])/math.dist(R, K)); Cp = (R[0]+RH*u[0], R[1]+RH*u[1])
    D = _meet(Cp, (L[0]-K[0], L[1]-K[1]), R, (L[0]-R[0], L[1]-R[1]))
    return acc(math.dist(R, D)**2, PI)


def worst_halved(shift, lo=30, hi=150):
    """Cusa's trisection with the shifted point, on half the angle and doubled; the rest bisected."""
    def third(x):
        P = -(2 - shift * (1 - math.cos(x))); BD = math.sin(x) * (1 - P) / (math.cos(x) - P)
        dx, dy = 1 - P, BD / 3; a = dx*dx + dy*dy; b = 2 * P * dx; c = P*P - 1
        t = (-b + math.sqrt(b*b - 4*a*c)) / (2*a); return math.atan2(t * dy, P + t * dx)
    worst = 101
    for i in range(lo * 4, hi * 4 + 1):
        p = math.radians(i / 4); t = 2 * third(p / 2)
        parts = (t, (p - t) / 2, (p - t) / 2); w = max(parts, key=lambda x: abs(x - p / 3)); worst = min(worst, acc(w, p / 3))
    return worst


def _cusa(x, shift):
    P = -(2 - shift * (1 - math.cos(x))); BD = math.sin(x) * (1 - P) / (math.cos(x) - P)
    dx, dy = 1 - P, BD / 3; a = dx*dx + dy*dy; b = 2 * P * dx; c = P*P - 1
    t = (-b + math.sqrt(b*b - 4*a*c)) / (2*a); return math.atan2(t * dy, P + t * dx)


def worst_over(third, lo=30, hi=150):
    """The worst of a one-line trisection (the rest bisected) over lo..hi degrees, every quarter degree."""
    worst = 101
    for i in range(lo * 4, hi * 4 + 1):
        p = math.radians(i / 4); t = third(p)
        if t is None: return float('nan')
        parts = (t, (p - t) / 2, (p - t) / 2); w = max(parts, key=lambda x: abs(x - p / 3)); worst = min(worst, acc(w, p / 3))
    return worst


SKELETONS = [
    dict(id='hayden-dtc', name="Hayden's duplication (1871)", entry='dtc-under-99.989', problem='dtc',
         slots=[('f', Fr(1, 3), (Fr(0), Fr(1)))], fn=hayden_dtc,
         about='F a fraction f of the way from C to D (Hayden: a third).'),
    dict(id='hobson-stc', name="Hobson's quadrature (1913)", entry='stc-over-99.998', problem='stc',
         slots=[('OD', Fr(3, 5), (Fr(0), Fr(2))), ('OE', Fr(1, 2), (Fr(0), Fr(2))), ('OF', Fr(3, 2), (Fr(1, 2), Fr(3)))], fn=hobson_stc,
         about='OD, OE and OF as fractions of the radius (Hobson: 3/5, 1/2, 3/2).'),
    dict(id='rhind-stc', name='Rhind papyrus (about 1700 BC)', entry='stc-over-99.398', problem='stc',
         slots=[('side', Fr(8, 9), (Fr(1, 2), Fr(1)))], fn=rhind_stc,
         about='The square on a fraction of the diameter (Ahmes: 8/9).'),
    dict(id='kunze-rtc', name="Kunze's triangle (1851)", entry='rtc-over-99.998', problem='rtc',
         slots=[('leg 1', Fr(3, 5), (Fr(0), Fr(2))), ('leg 2', Fr(6, 5), (Fr(0), Fr(2)))], fn=kunze_rtc,
         about='The legs of the right triangle as fractions of the diameter (Kunze: 3/5 and 6/5).'),
    dict(id='lambert-ar', name="Cusa's and Lambert's rectification (1765)", entry='ar-under-99.029', problem='ar',
         slots=[('OP', Fr(2), (Fr(1), Fr(4))), ('shift', Fr(1, 5), (Fr(0), Fr(1)))], fn=lambert_ar,
         about='Where the rectification point sits (OP radii beyond O) and how many versines it moves in (Cusa: 2 and 0; Lambert: 2 and 1/5). Scored at its worst up to 90°.'),
    dict(id='buonafalce1-dtc', name="Buonafalce's first solution (1876)", entry='dtc-under-99.693', problem='dtc',
         slots=[('DE', Fr(1, 6), (Fr(0), Fr(1)))], fn=buonafalce1_dtc,
         about='DE as a fraction of the diagonal BD (Buonafalce: a sixth).'),
    dict(id='willich-stc', name="Willich's quadrature (1855)", entry='stc-under-99.946', problem='stc',
         slots=[('E', Fr(1, 2), (Fr(0), Fr(1)))], fn=willich_stc,
         about='E as a fraction of the way from B to D (Willich: the midpoint).'),
    dict(id='willich-angles-stc', name="Willich's quadrature: its two angles", entry='stc-under-99.946', problem='stc',
         slots=[('arc AB', Fr(90), None, WANG), ('chord BD', Fr(60), None, WANG)], fn=lambda q, c: willich_angles(float(q), float(c)),
         about='The arc from A to B and the chord BD, in degrees, from the angles that can be drawn exactly (Willich: 90° and 60°).'),
    dict(id='kochanski-rtc', name="Kochański's rectification (1685)", entry='rtc-under-99.998', problem='rtc',
         slots=[('steps', Fr(3), (Fr(1), Fr(5))), ('angle', Fr(30), None, ANGLES)], fn=lambda n, a: kochanski(n, a),
         about='How many radii are stepped along the tangent from C (Kochański: 3), and the angle of the line from O (Kochański: 30°).'),
    dict(id='specht-rtc', name="Specht's rectification (1828)", entry='rtc-under-99.99997', problem='rtc',
         slots=[('AB', Fr(11, 5), (Fr(1), Fr(4))), ('BC', Fr(2, 5), (Fr(0), Fr(2)))], fn=specht,
         about='AB and BC on the tangent at A, in radii (Specht: 11/5 and 2/5).'),
    dict(id='degelder-rtc', name="de Gelder's 355/113 (1849)", entry='rtc-over-99.999991', problem='rtc',
         slots=[('CE', Fr(7, 8), (Fr(0), Fr(2))), ('AF', Fr(1, 2), (Fr(0), Fr(1)))], fn=degelder,
         about='CE and AF, in radii (de Gelder: 7/8 and 1/2), giving AH = AF² / (1 + CE²) beyond three radii.'),
    dict(id='buonafalce3-dtc', name="Buonafalce's third solution (1876)", entry='dtc-under-99.997', problem='dtc',
         slots=[('BE', Fr(1, 2), (Fr(0), Fr(2))), ('CF', Fr(1, 4), (Fr(0), Fr(1)))], fn=buonafalce3,
         about='BE as a fraction of AK, and CF as a fraction of the edge (Buonafalce: 1/2 and 1/4).'),
    dict(id='durer-taa', name="Dürer's trisection (1525)", entry='taa-over-99.395', problem='taa',
         slots=[('X', Fr(1, 3), (Fr(0), Fr(1))), ('D', Fr(1, 3), (Fr(1, 6), Fr(1, 2)))], fn=durer,
         about='How far X goes from K back towards D, and where D sits on the chord (Dürer: a third each). Scored at its worst from 30° to 150°, as charted.'),
    dict(id='karajordanoff-taa', name="Karajordanoff's trisection (1928)", entry='taa-under-99.838', problem='taa',
         slots=[('outer circle', Fr(2), (Fr(3, 2), Fr(4))), ('C on the arc', Fr(1, 2), None, ARC)], fn=lambda k, a: worst_bisected(lambda p: kara_third(p, float(k), float(a))),
         about='The radius of the larger circle, in radii, and which point of the arc the chord from B goes to (Karajordanoff: 2, and the middle). Scored at its worst up to 90°, the rest bisected, as charted.'),
    dict(id='ocagne-taa', name="d'Ocagne's trisection (1934)", entry='taa-over-98.796', problem='taa',
         slots=[('OC', Fr(1, 2), (Fr(0), Fr(2)))], fn=lambda c: worst_bisected(lambda p: ocagne_third(p, float(c))),
         about="How far behind the centre C is, in radii (d'Ocagne: a half). Scored at its worst up to 90°, the rest bisected, as charted."),
    dict(id='cusa-taa', name="Cusa's trisection, and Vahlen's (1911)", entry='taa-under-95.527', problem='taa',
         slots=[('shift', Fr(0), (Fr(0), Fr(1, 2)))], fn=lambda k: cusa_trisection(float(k)),
         about="How many versines Snellius' point is moved in towards O (Cusa: none; Vahlen: 2/9). Scored at its worst up to 90°, the rest bisected, as charted."),
    dict(id='ramanujan1913-stc', name="Ramanujan's 355/113 (1913)", entry='stc-over-99.999', problem='stc',
         slots=[('OH', Fr(1, 2), (Fr(1, 8), Fr(1))), ('OT', Fr(2, 3), (Fr(1, 8), Fr(15, 16)))], fn=ramanujan1913,
         about='Where H and T sit on the diameter (Ramanujan: OH = 1/2 towards P, OT = 2/3 towards R).'),
    dict(id='ramanujan1914-rtc', name="Ramanujan's 1914 construction", entry='rtc-under-99.99999', problem='rtc',
         slots=[('AT', Fr(1, 3), (Fr(1, 8), Fr(2, 3))), ('CM', Fr(1, 3), (Fr(1, 8), Fr(1))), ('MN', Fr(1, 3), (Fr(1, 8), Fr(1)))], fn=ramanujan1914,
         about='AT, and the two steps CM and MN along CB, as fractions of the radius (Ramanujan: a third each).'),
    dict(id='cusa-half-taa', name="Cusa's trisection on half the angle", entry='taa-over-99.971', problem='taa',
         slots=[('shift', Fr(1, 4), (Fr(0), Fr(1, 2)))], fn=lambda k: worst_halved(float(k)),
         about="Cusa's trisection worked on half the angle and doubled, with Snellius' point moved in by `shift` versines (Cusa: none; Vahlen: 2/9; the charted variant: 1/4). Scored at its worst from 30° to 150°, as charted."),
    dict(id='hayden-stc', name="Hayden's quadrature (1871)", entry='stc-over-99.999998', problem='stc',
         slots=[('C', Fr(1, 2), (Fr(1, 8), Fr(1))), ('EG', Fr(1, 2), (Fr(1, 8), Fr(2))), ('DI', Fr(1, 2), (Fr(1, 8), Fr(2)))], fn=hayden_stc,
         about='Where C sits along the top half side, and EG and DI as fractions of DE (Hayden: a half each).'),
]


def search(sk, max_q):
    names = [s[0] for s in sk['slots']]
    orig = tuple(s[1] for s in sk['slots'])
    base = sk['fn'](*[float(x) for x in orig])
    pools = [list(s[3]) if len(s) > 3 else list(fractions(max_q, s[2][0], s[2][1])) for s in sk['slots']]
    def price(slot, x):
        if len(slot) > 3: return slot[3][x]                       # a fixed choice with its own cost
        whole = int(x) if slot[0] == 'steps' else 0                # whole radii stepped along a line: one circle each
        return (whole + cost(x - whole)[0], cost(x - whole)[1])
    base_cost = tuple(map(sum, zip(*[price(sl, x) for sl, x in zip(sk['slots'], orig)])))
    found = []
    for combo in itertools.product(*pools):
        if combo == orig: continue
        try: a = sk['fn'](*[float(x) for x in combo])
        except (ValueError, ZeroDivisionError): continue
        if a is None or a <= base: continue
        c = tuple(map(sum, zip(*[price(sl, x) for sl, x in zip(sk['slots'], combo)])))
        found.append({'values': dict(zip(names, [str(x) for x in combo])), 'accuracy': a, 'cost': c,
                      'extra': (c[0] - base_cost[0], c[1] - base_cost[1])})
    # Keep the Pareto front: nothing both cheaper (or as cheap) and more accurate. Variants that need a
    # halving finer than a sixteenth are micro scale (a step under 5% of the given size, SUBMISSION_RULESET.md):
    # they get their own front, as the charts mark them µ.
    def pareto(xs):
        xs = sorted(xs, key=lambda x: (x['cost'][0] + x['cost'][1], -x['accuracy']))
        out, best = [], -1
        for x in xs:
            if x['accuracy'] > best: out.append(x); best = x['accuracy']
        return out[:8]
    for x in found:
        x['micro'] = any(Fr(v).denominator in (32, 64) for k, v in x['values'].items() if '/' in v or v.isdigit())
    return {'id': sk['id'], 'name': sk['name'], 'entry': sk['entry'], 'problem': sk['problem'], 'about': sk['about'],
            'original': {'values': dict(zip(names, [str(x) for x in orig])), 'accuracy': base, 'cost': base_cost},
            'better': len(found), 'front': pareto([x for x in found if not x['micro']]), 'micro_front': pareto([x for x in found if x['micro']])}


def report(results, max_q):
    L = ['# Variants of the historical constructions', '',
         'Written by `tools/variants.py` (denominators up to %d). Each historical construction is kept step for step, and' % max_q,
         'only its fractions are changed. "Cost" is a rough count of the extra compass steps and lines a fraction takes to lay',
         'off (halves, quarters, eighths and so on are midpoints, and free); "extra" is that against the original. Every variant',
         'listed beats the original; the list keeps only those that nothing cheaper beats. Rows marked µ need a halving finer',
         'than a sixteenth: a step under 5% of the given size, micro scale under the counting rules, as the charts mark them.', '',
         'A variant is charted only once it is drawn in GeoGebra and added like any other entry, credited to the',
         "original's author and to whoever found the variant (Lambert's with a quarter versine is: `ar-over-99.831`).", '']
    L += ['## Halving the angle first', '',
          'The historical trisections and arc rectifications are best on small angles. Worked on the angle halved n times',
          'and multiplied back (n more lines and n more circles), they hold from 30° to 150° about as well as they did on',
          'the small angle. Each halving also makes the steps smaller, and in the end micro scale, so the archive charts',
          'each at the deepest halving whose steps all stay at macro scale (marked * below); the methods without small',
          'fractions of their own, like Cusa\'s, can go deepest. At their weakest from 30° to 150°:', '',
          '| Method | As it is | Halved once | Twice | Three times | Four times | Five times |', '|---|---|---|---|---|---|---|']
    charted = {"Dürer's trisection, from one side": 0, "Karajordanoff's trisection": 3, "d'Ocagne's trisection": 4, "Cusa's trisection": 4,
               "Vahlen's trisection": 1, "Cusa's trisection with a quarter versine": 2,
               "Cusa's rectification": 5, "Lambert's rectification": 1, "Lambert's with a quarter versine": 1}
    def rect(k):
        def f(x):
            P = 2 - k * (1 - math.cos(x)); return math.sin(x) * (P + 1) / (P + math.cos(x))
        return f
    def worst_rect(f, n, lo=30, hi=150):
        return min(acc(2 ** n * f(math.radians(i / 4) / 2 ** n), math.radians(i / 4)) for i in range(lo * 4, hi * 4 + 1))
    rows = [("Dürer's trisection, from one side", lambda p: durer_third(p, 1/3), 'taa'), ("Karajordanoff's trisection", lambda p: kara_third(p, 2), 'taa'),
            ("d'Ocagne's trisection", lambda p: ocagne_third(p, 0.5), 'taa'), ("Cusa's trisection", lambda p: _cusa(p, 0), 'taa'),
            ("Vahlen's trisection", lambda p: _cusa(p, 2/9), 'taa'), ("Cusa's trisection with a quarter versine", lambda p: _cusa(p, 0.25), 'taa'),
            ("Cusa's rectification", rect(0), 'ar'), ("Lambert's rectification", rect(0.2), 'ar'), ("Lambert's with a quarter versine", rect(0.25), 'ar')]
    for name, f, kind in rows:
        cells = []
        for n in range(6):
            a = worst_over(lambda p, f=f, n=n: 2 ** n * f(p / 2 ** n)) if kind == 'taa' else worst_rect(f, n)
            cells.append(('%.6f%%' % a if a > 0 else 'below 0') + (' *' if charted.get(name) == n else ''))
        L.append('| %s | %s |' % (name, ' | '.join(cells)))
    L += ['', 'Beyond the starred column the steps are micro scale: still better, and listed here, but not charted. Dürer\'s',
          'from one side, halved once, is charted with the µ mark (taa-under-99.995), as it was found first.', '']
    for r in results:
        o = r['original']
        L += ['## ' + r['name'], '', r['about'] + ' Chart entry: `%s`.' % r['entry'], '',
              '| Fractions | Accuracy | Cost (circles, lines) | Extra |', '|---|---|---|---|',
              '| %s (original) | %.9f%% | %d, %d | |' % (', '.join('%s = %s' % kv for kv in o['values'].items()), o['accuracy'], *o['cost'])]
        for x in r['front']:
            L.append('| %s | %.9f%% | %d, %d | %+d, %+d |' % (', '.join('%s = %s' % kv for kv in x['values'].items()), x['accuracy'], *x['cost'], *x['extra']))
        if not r['front']: L.append('| no variant with these denominators beats it | | | |')
        for x in r['micro_front'][:4]:
            L.append('| µ %s | %.9f%% | %d, %d | %+d, %+d |' % (', '.join('%s = %s' % kv for kv in x['values'].items()), x['accuracy'], *x['cost'], *x['extra']))
        L += ['', '%d variants beat the original in all.' % r['better'], '']
    return '\n'.join(L)


def main():
    max_q = int(sys.argv[sys.argv.index('--max-q') + 1]) if '--max-q' in sys.argv else 12
    results = [search(sk, max_q) for sk in SKELETONS]
    for r in results:
        o = r['original']
        print('%-44s original %.9f%%, %d better; best cheap ones:' % (r['name'], o['accuracy'], r['better']))
        for x in r['front'][:4]:
            print('    %-40s %.9f%%  cost %s' % (', '.join('%s=%s' % kv for kv in x['values'].items()), x['accuracy'], x['cost']))
        for x in r['micro_front'][:2]:
            print('  µ %-40s %.9f%%  cost %s' % (', '.join('%s=%s' % kv for kv in x['values'].items()), x['accuracy'], x['cost']))
    os.makedirs(OUT, exist_ok=True)
    open(os.path.join(OUT, 'README.md'), 'w', encoding='utf-8').write(report(results, max_q))
    json.dump({'max_q': max_q, 'results': results}, open(os.path.join(OUT, 'variants.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
    print('Written to Variants/README.md and Variants/variants.json')


if __name__ == '__main__':
    main()
