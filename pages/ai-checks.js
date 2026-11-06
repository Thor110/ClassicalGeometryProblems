// Written by tools/verify.py --write. Do not edit by hand: run the script again.
const AI_CHECKS = {
 "tool": "tools/verify.py",
 "run": "2026-11-06",
 "results": {
  "stc-over-99.117": {
   "id": "stc-over-99.117",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.1092874150% does NOT reproduce the chart figure 99.117%"
   ],
   "tools": {
    "Circle": 1,
    "Line": 1,
    "Intersect": 35,
    "OrthogonalLine": 4,
    "LineBisector": 13,
    "Circumference": 3,
    "PointIn": 6,
    "Distance": 3,
    "Segment": 6,
    "Area": 2,
    "Polygon": 1
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.10928741499923,
   "measured": "square area 606117.891984 against circle area 600766.786609",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-over-99.139": {
   "id": "stc-over-99.139",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.1196146004% does NOT reproduce the chart figure 99.139%"
   ],
   "tools": {
    "Circle": 21,
    "Intersect": 45,
    "Area": 1,
    "PointIn": 2,
    "Segment": 7,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.11961460044009,
   "measured": "square area 453.437386 against circle area 449.480227",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-over-99.253": {
   "id": "stc-over-99.253",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.2830181111% does NOT reproduce the chart figure 99.253%"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 37,
    "Line": 3,
    "Area": 1,
    "PointIn": 2,
    "LineBisector": 2,
    "Segment": 8,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.28301811111724,
   "measured": "square area 241.051316 against circle area 239.335325",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-over-99.356": {
   "id": "stc-over-99.356",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.3563258916% reproduces the chart figure 99.356%"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 32,
    "Line": 15,
    "Polygon": 1,
    "PointIn": 2,
    "Area": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.35632589157363,
   "measured": "square area 163.990659 against circle area 162.941845",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "stc-over-99.563": {
   "id": "stc-over-99.563",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.5587087246% does NOT reproduce the chart figure 99.563%"
   ],
   "tools": {
    "Circle": 13,
    "Point": 1,
    "Intersect": 52,
    "Segment": 17,
    "Area": 1,
    "PointIn": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B",
    "c"
   ],
   "accuracy": 99.55870872457643,
   "measured": "square area 709.977651 against circle area 706.858347",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 3 given object(s); does not match the chart."
  },
  "stc-over-99.703": {
   "id": "stc-over-99.703",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.6961297384% does NOT reproduce the chart figure 99.703%"
   ],
   "tools": {
    "Circle": 25,
    "Point": 1,
    "Intersect": 43,
    "Segment": 9,
    "Area": 1,
    "PointIn": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B",
    "c"
   ],
   "accuracy": 99.69612973842727,
   "measured": "square area 709.006279 against circle area 706.858347",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 3 given object(s); does not match the chart."
  },
  "stc-over-99.816": {
   "id": "stc-over-99.816",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8095002634% does NOT reproduce the chart figure 99.816%"
   ],
   "tools": {
    "Circle": 13,
    "Point": 1,
    "Intersect": 58,
    "Segment": 28,
    "Area": 1,
    "PointIn": 2,
    "Line": 4,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B",
    "c"
   ],
   "accuracy": 99.80950026343882,
   "measured": "square area 708.204910 against circle area 706.858347",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 3 given object(s); does not match the chart."
  },
  "stc-over-99.999": {
   "id": "stc-over-99.999",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9999915086% reproduces the chart figure 99.999%"
   ],
   "tools": {
    "Circle": 9,
    "Line": 6,
    "Intersect": 15,
    "Midpoint": 2,
    "Segment": 8,
    "OrthogonalLine": 3,
    "Polygon": 1,
    "Area": 1,
    "PointIn": 2
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.99999150863208,
   "measured": "square area 215.726288 against circle area 215.726269",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "stc-under-99.929": {
   "id": "stc-under-99.929",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9321928003% does NOT reproduce the chart figure 99.929%"
   ],
   "tools": {
    "Circle": 13,
    "Point": 1,
    "Intersect": 43,
    "Segment": 21,
    "Area": 1,
    "PointIn": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B",
    "c"
   ],
   "accuracy": 99.93219280033432,
   "measured": "square area 706.379046 against circle area 706.858347",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 3 given object(s); does not match the chart."
  },
  "stc-under-99.644": {
   "id": "stc-under-99.644",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.6555673785% does NOT reproduce the chart figure 99.644%"
   ],
   "tools": {
    "Circle": 21,
    "Intersect": 53,
    "Area": 1,
    "PointIn": 2,
    "Segment": 11,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.65556737848478,
   "measured": "square area 447.932071 against circle area 449.480227",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-under-99.253": {
   "id": "stc-under-99.253",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.2830181111% does NOT reproduce the chart figure 99.253%",
    "the file is oversized but the chart lists it undersized"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 41,
    "Line": 3,
    "Segment": 12,
    "Area": 1,
    "PointIn": 2,
    "LineBisector": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.28301811111724,
   "measured": "square area 241.051316 against circle area 239.335325",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-under-99.164": {
   "id": "stc-under-99.164",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.1504732299% does NOT reproduce the chart figure 99.164%"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 39,
    "Line": 4,
    "Segment": 8,
    "LineBisector": 4,
    "Area": 1,
    "PointIn": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.15047322986365,
   "measured": "square area 237.302107 against circle area 239.335325",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "stc-under-99.009": {
   "id": "stc-under-99.009",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.0155645052% does NOT reproduce the chart figure 99.009%"
   ],
   "tools": {
    "Circle": 13,
    "Point": 1,
    "Intersect": 31,
    "Segment": 7,
    "Area": 1,
    "PointIn": 2,
    "Polygon": 1
   },
   "starting_points": [
    "A",
    "B",
    "c"
   ],
   "accuracy": 99.01556450524366,
   "measured": "square area 699.899783 against circle area 706.858347",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 3 given object(s); does not match the chart."
  },
  "stc-under-95.492": {
   "id": "stc-under-95.492",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 95.4929658551% reproduces the chart figure 95.492%"
   ],
   "tools": {
    "Circle": 7,
    "Intersect": 17,
    "Segment": 2,
    "Line": 4,
    "Polygon": 1,
    "Area": 1,
    "PointIn": 2
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 95.49296585513723,
   "measured": "square area 84.918000 against circle area 88.925922",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "taa-under-99.658": {
   "id": "taa-under-99.658",
   "checks": [
    "every rebuilt point matches the saved file",
    "the result depends on hand-placed point(s): A_1, F, Z",
    "accuracy 99.3179314974% does NOT reproduce the chart figure ~99.658%"
   ],
   "tools": {
    "Segment": 7,
    "AngularBisector": 1,
    "Circle": 11,
    "Intersect": 17,
    "Point": 3,
    "Distance": 4,
    "Line": 2,
    "Angle": 4
   },
   "starting_points": [
    "A",
    "B",
    "C",
    "D"
   ],
   "accuracy": 99.3179314974492,
   "measured": "thirds 13.0522°, 13.0522°, 13.1862° against 13.0969° (each 99.659%, 99.659%, 99.318%); the worst sets the accuracy",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 4 given object(s); does not match the chart."
  },
  "taa-under-95.538": {
   "id": "taa-under-95.538",
   "checks": [
    "every rebuilt point matches the saved file",
    "the result depends on hand-placed point(s): D",
    "accuracy 91.0774311712% does NOT reproduce the chart figure ~95.538%"
   ],
   "tools": {
    "Segment": 4,
    "AngularBisector": 1,
    "Point": 1,
    "Circle": 4,
    "Intersect": 5,
    "Angle": 4
   },
   "starting_points": [
    "A",
    "B",
    "C",
    "E"
   ],
   "accuracy": 91.07743117124372,
   "measured": "thirds 19.1556°, 21.8391°, 19.1556° against 20.0501° (each 95.539%, 91.077%, 95.539%); the worst sets the accuracy",
   "side": "over",
   "status": "attention",
   "summary": "Rebuilt from 4 given object(s); does not match the chart."
  },
  "dtc-over-99.227": {
   "id": "dtc-over-99.227",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 97.6562500000% does NOT reproduce the chart figure 99.227%",
    "the file is undersized but the chart lists it oversized"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 35,
    "Segment": 24,
    "Line": 3,
    "Distance": 2,
    "Midpoint": 2
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 97.65625,
   "measured": "edge 7.152797 against given edge 5.722237: volume ratio 1.953125 against 2",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "dtc-over-99.487": {
   "id": "dtc-over-99.487",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 98.9247891676% does NOT reproduce the chart figure 99.487%",
    "the file is undersized but the chart lists it oversized"
   ],
   "tools": {
    "Circle": 13,
    "Intersect": 48,
    "Segment": 30,
    "Line": 3,
    "Distance": 3,
    "Midpoint": 2
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 98.92478916755539,
   "measured": "edge 7.193806 against given edge 5.730339: volume ratio 1.978496 against 2",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "rtc-over-98.538": {
   "id": "rtc-over-98.538",
   "checks": [
    "every rebuilt point matches the saved file",
    "B is placed on a circle of typed radius (Circle[A, 1000])",
    "no hand-placed point feeds the result",
    "accuracy 98.5387237789% reproduces the chart figure 98.538%"
   ],
   "tools": {
    "Point": 1,
    "Segment": 6,
    "Circle": 6,
    "Line": 2,
    "Intersect": 17,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 98.53872377891679,
   "measured": "distance A-E_1 = 6375.000000 against circumference 6283.185307",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.596": {
   "id": "rtc-over-99.596",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.5961910430% reproduces the chart figure 99.596%"
   ],
   "tools": {
    "Circle": 12,
    "Line": 9,
    "Intersect": 22,
    "Midpoint": 3,
    "Circumference": 2,
    "PointIn": 2,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.59619104296507,
   "measured": "distance B_1-L = 51.376861 against circumference 51.170231",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.607": {
   "id": "rtc-over-99.607",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.6074651519% reproduces the chart figure 99.607%"
   ],
   "tools": {
    "Circle": 9,
    "Line": 2,
    "Intersect": 16,
    "Segment": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Midpoint": 5,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.60746515193159,
   "measured": "distance S-H = 52.328512 against circumference 52.123907",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.65": {
   "id": "rtc-over-99.65",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.6501619830% reproduces the chart figure 99.65%"
   ],
   "tools": {
    "Circle": 7,
    "Line": 3,
    "Intersect": 13,
    "Circumference": 1,
    "PointIn": 1,
    "Midpoint": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.6501619830063,
   "measured": "distance N-H = 52.306257 against circumference 52.123907",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.786": {
   "id": "rtc-over-99.786",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.7866711301% reproduces the chart figure 99.786%"
   ],
   "tools": {
    "Circle": 8,
    "Line": 5,
    "Intersect": 13,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.78667113012001,
   "measured": "distance M-P = 56.179691 against circumference 56.060099",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.802": {
   "id": "rtc-over-99.802",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8020024200% reproduces the chart figure 99.802%"
   ],
   "tools": {
    "Circle": 10,
    "Line": 4,
    "Intersect": 15,
    "Midpoint": 3,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.80200241995003,
   "measured": "distance S-N = 122.556611 against circumference 122.314431",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.806": {
   "id": "rtc-over-99.806",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8062730469% reproduces the chart figure 99.806%"
   ],
   "tools": {
    "Circle": 1,
    "Line": 2,
    "Intersect": 11,
    "OrthogonalLine": 4,
    "LineBisector": 3,
    "Circumference": 3,
    "PointIn": 3,
    "Distance": 5,
    "Segment": 2,
    "Midpoint": 1
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.80627304689229,
   "measured": "distance G-K = 2752.950616 against circumference 2747.627721",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.873": {
   "id": "rtc-over-99.873",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8733663968% reproduces the chart figure 99.873%"
   ],
   "tools": {
    "Circle": 16,
    "Line": 7,
    "Intersect": 25,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.87336639679413,
   "measured": "distance D_1-F = 151.182200 against circumference 150.990995",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.9343": {
   "id": "rtc-over-99.9343",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9343801693% reproduces the chart figure 99.9343%"
   ],
   "tools": {
    "Circle": 15,
    "Line": 8,
    "Intersect": 27,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.93438016929082,
   "measured": "distance F_1-Q = 63.754422 against circumference 63.712614",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.9347": {
   "id": "rtc-over-99.9347",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9347870772% reproduces the chart figure 99.9347%"
   ],
   "tools": {
    "Circle": 10,
    "Line": 4,
    "Intersect": 13,
    "Midpoint": 3,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.9347870772154,
   "measured": "distance R-I = 63.697371 against circumference 63.655859",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.971": {
   "id": "rtc-over-99.971",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9712143804% reproduces the chart figure 99.971%"
   ],
   "tools": {
    "Circle": 4,
    "Line": 4,
    "Intersect": 18,
    "OrthogonalLine": 4,
    "LineBisector": 3,
    "Circumference": 3,
    "PointIn": 3,
    "Distance": 8,
    "Segment": 3,
    "Midpoint": 4
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.97121438043841,
   "measured": "distance G-Z = 2748.418643 against circumference 2747.627721",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.997": {
   "id": "rtc-over-99.997",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9974744497% reproduces the chart figure 99.997%"
   ],
   "tools": {
    "Circle": 7,
    "Line": 5,
    "Intersect": 10,
    "Midpoint": 3,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.9974744497282,
   "measured": "distance P-K = 451.266877 against circumference 451.255480",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.9986": {
   "id": "rtc-over-99.9986",
   "checks": [
    "every rebuilt point matches the saved file",
    "O is placed on a circle of typed radius (Circle[M, 0.07644337898])",
    "no hand-placed point feeds the result",
    "accuracy 99.9986576027% reproduces the chart figure 99.9986%"
   ],
   "tools": {
    "Circle": 10,
    "Line": 5,
    "Intersect": 22,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 2,
    "Point": 1,
    "Segment": 2,
    "OrthogonalLine": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.99865760270623,
   "measured": "distance Z-N = 40.721295 against circumference 40.720748",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.9987": {
   "id": "rtc-over-99.9987",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9987046027% reproduces the chart figure 99.9987%"
   ],
   "tools": {
    "Circle": 7,
    "Line": 5,
    "Intersect": 22,
    "OrthogonalLine": 4,
    "LineBisector": 3,
    "Circumference": 3,
    "PointIn": 3,
    "Distance": 11,
    "Segment": 4,
    "Midpoint": 8
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.99870460269611,
   "measured": "distance H_1-G = 2747.663314 against circumference 2747.627721",
   "side": "over",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-over-99.9996": {
   "id": "rtc-over-99.9996",
   "checks": [],
   "status": "no-file",
   "summary": "No GeoGebra file in the repository yet, so it cannot be rebuilt here."
  },
  "rtc-under-99.999": {
   "id": "rtc-under-99.999",
   "checks": [
    "every rebuilt point matches the saved file",
    "B is placed on a circle of typed radius (Circle[A, 1000])",
    "no hand-placed point feeds the result",
    "accuracy 99.9994880548% reproduces the chart figure 99.999%"
   ],
   "tools": {
    "Point": 1,
    "Segment": 9,
    "Circle": 9,
    "Line": 3,
    "Intersect": 24,
    "Midpoint": 1,
    "LineBisector": 1,
    "Distance": 1,
    "Circumference": 1,
    "PointIn": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.99948805477463,
   "measured": "distance A-C_1 = 6283.153141 against circumference 6283.185307",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.998": {
   "id": "rtc-under-99.998",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9981119486% reproduces the chart figure 99.998%"
   ],
   "tools": {
    "Circle": 5,
    "Line": 3,
    "OrthogonalLine": 4,
    "Intersect": 9,
    "Segment": 1,
    "Distance": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Angle": 1,
    "Midpoint": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.99811194858026,
   "measured": "distance I-K = 35.814362 against circumference 35.815038",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.9875": {
   "id": "rtc-under-99.9875",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9875502862% reproduces the chart figure 99.9875%"
   ],
   "tools": {
    "Circle": 4,
    "Line": 4,
    "Intersect": 18,
    "OrthogonalLine": 4,
    "LineBisector": 3,
    "Circumference": 3,
    "PointIn": 3,
    "Distance": 10,
    "Segment": 3,
    "Midpoint": 7
   },
   "starting_points": [
    "B",
    "O"
   ],
   "accuracy": 99.98755028617505,
   "measured": "distance G-B_1 = 2747.285649 against circumference 2747.627721",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.9874": {
   "id": "rtc-under-99.9874",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.9874542947% reproduces the chart figure 99.9874%"
   ],
   "tools": {
    "Circle": 9,
    "Line": 7,
    "Intersect": 16,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.98745429467247,
   "measured": "distance S-M = 60.949743 against circumference 60.957390",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.812": {
   "id": "rtc-under-99.812",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8122741309% reproduces the chart figure 99.812%"
   ],
   "tools": {
    "Circle": 8,
    "Line": 4,
    "Intersect": 12,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.8122741308946,
   "measured": "distance M-N = 40.644305 against circumference 40.720748",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.809": {
   "id": "rtc-under-99.809",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.8091472850% reproduces the chart figure 99.809%"
   ],
   "tools": {
    "Circle": 9,
    "Line": 4,
    "Intersect": 12,
    "Midpoint": 2,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.80914728503554,
   "measured": "distance O-K = 41.563776 against circumference 41.643253",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.443": {
   "id": "rtc-under-99.443",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.4430337854% reproduces the chart figure 99.443%"
   ],
   "tools": {
    "Circle": 10,
    "Line": 5,
    "Intersect": 15,
    "Midpoint": 3,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.4430337854331,
   "measured": "distance M-S = 52.385028 against circumference 52.678429",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "rtc-under-99.374": {
   "id": "rtc-under-99.374",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 99.3768101361% does NOT reproduce the chart figure 99.374%"
   ],
   "tools": {
    "Circle": 8,
    "Line": 4,
    "Intersect": 12,
    "Circumference": 1,
    "PointIn": 1,
    "Midpoint": 2,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 99.37681013608419,
   "measured": "distance D-T = 363.595195 against circumference 365.875293",
   "side": "under",
   "status": "attention",
   "summary": "Rebuilt from 2 given object(s); does not match the chart."
  },
  "rtc-under-98.165": {
   "id": "rtc-under-98.165",
   "checks": [
    "every rebuilt point matches the saved file",
    "no hand-placed point feeds the result",
    "accuracy 98.1651850968% reproduces the chart figure 98.165%"
   ],
   "tools": {
    "Circle": 6,
    "Line": 5,
    "Intersect": 10,
    "Midpoint": 1,
    "Circumference": 1,
    "PointIn": 1,
    "Distance": 1
   },
   "starting_points": [
    "A",
    "B"
   ],
   "accuracy": 98.16518509675663,
   "measured": "distance M-L = 50.231352 against circumference 51.170231",
   "side": "under",
   "status": "reproduced",
   "summary": "Rebuilt from 2 given object(s); accuracy reproduced."
  },
  "ar-over-95": {
   "id": "ar-over-95",
   "checks": [
    "every rebuilt point matches the saved file",
    "D&apos; is made by rotating through an angle, which is not a compass step",
    "the file does not record a measurement this script can match to the result; it needs checking by hand"
   ],
   "tools": {
    "Circle": 1,
    "Line": 2,
    "Intersect": 4,
    "OrthogonalLine": 3,
    "LineBisector": 1,
    "Distance": 4,
    "Rotate": 1,
    "Angle": 1,
    "CircleArc": 1,
    "Length": 1,
    "PointIn": 1
   },
   "starting_points": [
    "A",
    "B",
    "D'"
   ],
   "manual": true,
   "status": "manual",
   "summary": "Rebuilt from 3 given object(s); needs checking by hand."
  }
 }
};
