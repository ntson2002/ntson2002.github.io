// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'convolutional.Conv2DTranspose.0': {
      input: {
        data: [
          -0.929961,
          -0.63673,
          0.945405,
          -0.573858,
          0.000985,
          0.681999,
          -0.080736,
          0.575131,
          -0.614662,
          -0.588668,
          0.80306,
          0.256132,
          -0.307227,
          -0.077013,
          0.21169,
          -0.678163,
          0.451697,
          -0.680262,
          -0.125876,
          -0.335162,
          -0.258573,
          0.105624,
          -0.63008,
          -0.384056,
          -0.816483,
          0.552606,
          0.332199,
          -0.201029,
          -0.480198,
          0.2547,
          0.712057,
          -0.072584
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          -0.45172,
          -1.006722,
          -0.390321,
          -1.367648,
          1.475372,
          0.978995,
          1.477713,
          0.927486,
          -2.23697,
          -0.920318,
          -0.477727,
          0.662369,
          1.109235,
          0.883865,
          -0.474294,
          -0.186551,
          0.242899,
          0.159019,
          -0.178758,
          -0.162181,
          -0.207762,
          -0.091648,
          0.0558,
          0.114037,
          0.05754,
          -0.371645,
          0.12254,
          -0.740767,
          0.020394,
          0.791051,
          0.075158,
          1.143817,
          -1.760339,
          -1.358067,
          -0.118497,
          0.199239,
          1.999675,
          -0.057364,
          0.894701,
          -0.96255,
          -0.582588,
          -0.395852,
          -0.002741,
          0.131907,
          0.601939,
          0.653744,
          -0.493777,
          -0.195456,
          0.42184,
          -0.24343,
          -0.250519,
          -0.461656,
          -0.576741,
          -0.652102,
          -0.118883,
          0.070342,
          0.822911,
          -1.271066,
          2.509899,
          -0.533334,
          -0.3811,
          0.117875,
          -1.214318,
          -0.122343,
          -0.728397,
          1.58929,
          -0.317988,
          0.795561,
          -1.008794,
          -0.420824,
          -0.020967,
          -0.505686,
          -2.163961,
          -0.90339,
          -1.186228,
          -0.692625,
          1.966407,
          2.131711,
          0.919721,
          0.198514,
          -1.511084,
          -1.281079,
          0.304343,
          -0.06039,
          0.418964,
          0.248102,
          0.714929,
          1.515878,
          -0.451173,
          -1.498029,
          -0.16266,
          -0.667201,
          0.424917,
          -0.984223,
          1.118021,
          1.065053,
          0.274201,
          0.207203,
          0.636561,
          0.858086,
          -0.442072,
          -2.209343,
          0.309056,
          -0.911916,
          0.792328,
          -0.450646,
          0.746286,
          0.925489,
          -0.17717,
          -0.779708,
          -0.427246,
          -0.540969,
          0.472643,
          0.691941,
          0.276602,
          -0.246223,
          1.01182,
          0.760581,
          0.174175,
          -0.622395,
          0.752969,
          -0.066968,
          -0.240558,
          -0.848737,
          0.041179,
          1.204985,
          -0.152167,
          0.963653,
          0.596008,
          0.328399,
          -0.268989,
          -1.674655,
          -0.202127,
          0.487297,
          0.272727,
          1.267001,
          -0.253252,
          -0.168362,
          -0.069828,
          -0.654585,
          -0.533027,
          -0.553337,
          -0.163624,
          0.533764
        ],
        shape: [6, 6, 4]
      },
      weights: [
        {
          data: [
            0.817168,
            -0.484057,
            0.75531,
            0.477931,
            0.396153,
            0.034417,
            0.904219,
            0.827289,
            -0.843651,
            0.564641,
            -0.772669,
            0.2817,
            -0.840474,
            -0.536068,
            -0.228097,
            -0.52653,
            0.996766,
            -0.221318,
            0.447674,
            -0.096508,
            -0.046254,
            0.090528,
            -0.13441,
            0.179412,
            -0.790058,
            0.722203,
            -0.383929,
            -0.026572,
            -0.579839,
            0.240175,
            -0.317323,
            -0.010873,
            -0.385402,
            -0.164789,
            0.520344,
            -0.918119,
            -0.000266,
            0.625388,
            0.040686,
            -0.136983,
            0.477384,
            0.485779,
            0.761687,
            0.965039,
            -0.560193,
            -0.813418,
            -0.708546,
            -0.178286,
            -0.283609,
            0.943543,
            0.314461,
            0.343435,
            0.480156,
            0.274123,
            0.794715,
            -0.361677,
            -0.763759,
            -0.54021,
            -0.794172,
            0.943047,
            -0.073416,
            -0.57276,
            -0.091824,
            0.998847,
            -0.802122,
            -0.525324,
            -0.731307,
            0.449204,
            -0.313752,
            -0.823668,
            0.671953,
            -0.761801
          ],
          shape: [3, 3, 4, 2]
        }
      ]
    },
    'convolutional.Conv2DTranspose.1': {
      input: {
        data: [
          0.148989,
          0.539942,
          0.901522,
          0.505578,
          -0.106529,
          0.052912,
          0.212682,
          0.154012,
          0.907638,
          -0.157428,
          -0.539244,
          0.908274,
          -0.805752,
          0.802096,
          0.832403,
          0.18143,
          0.805057,
          -0.915723,
          -0.056526,
          0.826083,
          -0.930412,
          0.568274,
          0.688561,
          0.945088,
          0.215499,
          -0.855602,
          0.23233,
          -0.568225,
          0.855135,
          0.162787,
          0.965045,
          0.048574
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          0.270987,
          -0.378457,
          -0.064845,
          1.007927,
          0.711954,
          -0.569145,
          0.078946,
          2.079053,
          0.691656,
          -0.082662,
          -0.00171,
          0.942018,
          0.24807,
          0.193279,
          -0.105947,
          1.342425,
          0.653358,
          -0.656478,
          -0.344002,
          0.675557,
          0.491752,
          -0.441377,
          -0.34839,
          0.715833,
          1.299308,
          -0.471645,
          -0.758222,
          1.067098,
          -0.779649,
          1.540695,
          0.56013,
          -0.621367,
          -0.135992,
          2.207442,
          0.141102,
          1.219351,
          2.733081,
          -0.390491,
          -3.184827,
          4.184479,
          1.850421,
          -0.740053,
          -0.911002,
          0.861553,
          0.188444,
          0.247709,
          -0.054618,
          0.930493,
          0.915697,
          -1.413564,
          -0.898085,
          0.775201,
          2.177532,
          0.691494,
          -0.785763,
          -1.500629,
          -0.373408,
          1.864835,
          -0.188503,
          -1.502463,
          -0.922299,
          -0.107305,
          -0.775615,
          1.52532,
          1.50623,
          0.532773,
          -0.122982,
          1.15573,
          1.417657,
          0.462458,
          -1.261492,
          1.962332,
          0.734929,
          -2.257271,
          -0.380853,
          0.284189,
          1.765985,
          0.809511,
          0.064657,
          -0.020006,
          0.494605,
          -1.540584,
          -0.662995,
          0.002932,
          0.244839,
          0.712761,
          -2.104895,
          -1.262,
          0.123499,
          2.987249,
          1.769682,
          -1.910215,
          -0.147863,
          0.771113,
          0.625813,
          1.187515,
          0.348288,
          -1.556858,
          0.463134,
          0.796249,
          0.758945,
          -1.304971,
          1.062863,
          0.981071,
          -1.734376,
          -0.478499,
          0.291964,
          2.721394,
          1.63561,
          0.014866,
          -2.812089,
          -0.2382,
          2.109688,
          2.666155,
          -1.685004,
          1.331514,
          1.318664,
          0.091707,
          -0.733749,
          0.627571,
          0.506911,
          -0.418796,
          0.057432,
          0.789578,
          1.176815,
          -1.004182,
          0.43896,
          0.315681,
          1.362667,
          -2.548908,
          -0.278765,
          0.080584,
          0.910921,
          -1.464939,
          -0.011232,
          -0.230981,
          -0.075059,
          -0.305537,
          1.371063,
          -0.01791,
          -0.013201,
          -1.107381,
          0.566799,
          0.419824
        ],
        shape: [6, 6, 4]
      },
      weights: [
        {
          data: [
            0.539589,
            -0.646357,
            -0.378579,
            0.600628,
            0.148989,
            0.539942,
            0.901522,
            0.505578,
            -0.106529,
            0.052912,
            0.212682,
            0.154012,
            0.907638,
            -0.157428,
            -0.539244,
            0.908274,
            -0.805752,
            0.802096,
            0.832403,
            0.18143,
            0.805057,
            -0.915723,
            -0.056526,
            0.826083,
            -0.930412,
            0.568274,
            0.688561,
            0.945088,
            0.215499,
            -0.855602,
            0.23233,
            -0.568225,
            0.855135,
            0.162787,
            0.965045,
            0.048574,
            0.23368,
            -0.215715,
            0.303608,
            -0.981652,
            0.943344,
            -0.172658,
            0.245129,
            0.753963,
            -0.941923,
            0.131806,
            0.860396,
            0.286018,
            0.92336,
            0.270758,
            -0.859684,
            -0.482492,
            -0.702331,
            -0.68649,
            -0.945042,
            -0.458865,
            -0.130765,
            -0.706792,
            0.634812,
            0.665099,
            0.984552,
            -0.442333,
            -0.395297,
            0.281599,
            -0.587822,
            0.298219,
            -0.52161,
            0.871918,
            0.986648,
            -0.139607,
            -0.149301,
            -0.75598
          ],
          shape: [3, 3, 4, 2]
        },
        { data: [0.539589, -0.646357, -0.378579, 0.600628], shape: [4] }
      ]
    },
    'convolutional.Conv2DTranspose.2': {
      input: {
        data: [
          -0.358135,
          -0.188918,
          -0.854928,
          -0.340478,
          0.552639,
          -0.654335,
          0.054774,
          -0.504375,
          -0.879382,
          -0.611747,
          -0.127514,
          0.302488,
          -0.190093,
          0.825193,
          0.313868,
          0.409695,
          0.074585,
          -0.158004,
          -0.796628,
          -0.238881,
          -0.386481,
          0.984118,
          0.835142,
          -0.393954,
          -0.594307,
          -0.446792,
          -0.88912,
          0.340353,
          -0.419182,
          0.636229,
          0.665132,
          -0.306754
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          0.483988,
          0.883949,
          0.0,
          0.021249,
          0.823152,
          0.562957,
          0.0,
          0.0,
          0.0,
          1.205786,
          0.0,
          0.828004,
          0.647776,
          0.612188,
          0.036754,
          0.0,
          0.95613,
          0.0,
          0.0,
          0.163461,
          1.63102,
          0.847588,
          0.0,
          0.0,
          0.055832,
          0.518244,
          0.0,
          0.0,
          1.257756,
          0.744682,
          0.0,
          0.0,
          0.470837,
          0.29784,
          0.0,
          0.0,
          0.84995,
          0.262619,
          0.0,
          0.0,
          0.927384,
          0.307032,
          0.0,
          0.0,
          1.050533,
          0.352252,
          0.0,
          0.610939,
          1.039204,
          0.02309,
          0.0,
          0.0,
          0.38485,
          2.184956,
          0.0,
          0.0,
          0.249492,
          1.055586,
          0.0,
          0.0,
          0.407169,
          0.760034,
          0.100396,
          0.0,
          0.553597,
          0.678439,
          0.0,
          0.0,
          1.025921,
          0.822201,
          0.0,
          0.0,
          0.0,
          1.718903,
          0.0,
          0.656054,
          0.496644,
          0.712335,
          0.0,
          0.0,
          0.557038,
          0.17149,
          0.0,
          0.301692,
          0.0,
          0.138295,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          1.014735,
          0.0,
          0.285019,
          2.393411,
          0.423071,
          0.0,
          0.019816,
          0.324521,
          0.8104,
          0.0,
          0.022054,
          1.282672,
          0.682776,
          0.0,
          0.0,
          0.635288,
          0.0,
          0.0,
          0.224413,
          0.876865,
          0.090038,
          0.0,
          0.0,
          1.674044,
          1.465587,
          0.0,
          0.745138,
          1.143359,
          0.309685,
          0.0,
          0.0,
          1.73337,
          0.0,
          0.0,
          0.0,
          1.502151,
          0.10772,
          0.0,
          0.0,
          0.998249,
          0.124817,
          0.0,
          0.0,
          1.026548,
          0.570376,
          0.0,
          0.0,
          0.689362,
          0.0,
          0.0,
          0.0,
          1.043046,
          0.932281,
          0.332907,
          0.0,
          0.12231,
          0.624931,
          0.0,
          0.0,
          0.0,
          0.61668,
          0.0,
          0.0,
          0.866382,
          0.19991,
          0.0,
          0.0,
          1.387174,
          0.523871,
          0.0,
          0.0,
          0.786401,
          0.0,
          0.0,
          0.0,
          2.117897,
          0.068817,
          0.0,
          0.0,
          2.133966,
          0.530525,
          0.0,
          0.0,
          0.673624,
          0.931067,
          0.0,
          0.0,
          0.713135,
          0.611823,
          0.0,
          0.0,
          0.765664,
          0.585365,
          0.0,
          0.0,
          0.993869,
          0.0,
          0.0,
          0.348454,
          1.079404,
          0.030702,
          0.0,
          0.0,
          2.314283,
          0.629242,
          0.0,
          0.906654,
          1.685585,
          0.0,
          0.0,
          0.0,
          0.01728,
          0.922314,
          0.0,
          0.0,
          0.296735,
          1.163614,
          0.0,
          0.0,
          0.768413,
          0.080564,
          0.0,
          0.0,
          0.018144,
          1.086293,
          0.0,
          0.369215,
          0.732151,
          0.87513,
          0.0,
          0.0,
          0.412466,
          1.359331,
          0.181926,
          1.017571,
          0.0,
          0.015858,
          0.0,
          0.024425,
          1.290881,
          0.424503,
          0.0,
          0.0,
          1.082357,
          0.0,
          0.0,
          0.0,
          0.788531,
          0.0,
          0.0,
          0.0,
          1.376671,
          1.55447,
          0.0,
          0.0,
          1.368029,
          1.146247,
          0.0,
          0.028444,
          0.687447,
          0.166972,
          0.0,
          0.02709,
          0.862316,
          0.22905,
          0.0,
          0.0,
          1.875925,
          0.449533,
          0.0,
          1.173613,
          1.486701,
          0.0,
          0.0,
          0.066596,
          1.845592,
          0.379319,
          0.0,
          0.464496,
          1.477957,
          0.013311,
          0.0,
          0.0,
          0.277812,
          1.036429,
          0.0,
          0.0,
          0.423479,
          1.023786,
          0.0,
          0.0,
          0.792679,
          0.15807,
          0.0,
          0.0,
          0.984363,
          0.786642,
          0.0,
          0.0,
          0.242929,
          0.555416,
          0.0,
          0.0,
          1.052915,
          0.681713,
          0.0,
          0.0,
          0.914235,
          0.0,
          0.0,
          0.0,
          0.583491,
          0.370554,
          0.0,
          0.0,
          1.375101,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.833422,
          1.178326,
          0.0,
          0.0,
          1.573786,
          0.947519,
          0.0,
          0.313512
        ],
        shape: [9, 9, 4]
      },
      weights: [
        {
          data: [
            0.897456,
            0.487288,
            -0.923342,
            -0.349253,
            -0.358135,
            -0.188918,
            -0.854928,
            -0.340478,
            0.552639,
            -0.654335,
            0.054774,
            -0.504375,
            -0.879382,
            -0.611747,
            -0.127514,
            0.302488,
            -0.190093,
            0.825193,
            0.313868,
            0.409695,
            0.074585,
            -0.158004,
            -0.796628,
            -0.238881,
            -0.386481,
            0.984118,
            0.835142,
            -0.393954,
            -0.594307,
            -0.446792,
            -0.88912,
            0.340353,
            -0.419182,
            0.636229,
            0.665132,
            -0.306754,
            0.068433,
            -0.062402,
            -0.41091,
            0.148379,
            -0.289494,
            -0.286142,
            -0.843449,
            -0.755613,
            0.440714,
            -0.89768,
            -0.517294,
            -0.691731,
            -0.558247,
            0.548046,
            -0.743271,
            0.318663,
            -0.951589,
            -0.680511,
            0.054639,
            -0.342901,
            0.359072,
            0.98732,
            0.60034,
            -0.951034,
            0.957127,
            -0.215193,
            -0.025811,
            -0.572621,
            0.967642,
            -0.106668,
            0.796646,
            0.227034,
            0.278936,
            0.737666,
            0.885642,
            -0.240247
          ],
          shape: [3, 3, 4, 2]
        },
        { data: [0.897456, 0.487288, -0.923342, -0.349253], shape: [4] }
      ]
    },
    'convolutional.Conv2DTranspose.3': {
      input: {
        data: [
          -0.007435,
          0.615048,
          -0.558658,
          -0.008729,
          0.041294,
          -0.438168,
          0.529679,
          0.266543,
          0.550212,
          -0.183091,
          0.3534,
          0.109289,
          -0.621224,
          -0.674319,
          0.15753,
          -0.648414,
          0.830683,
          -0.934728,
          0.16761,
          0.50837,
          0.086898,
          -0.035362,
          -0.851074,
          -0.016054,
          -0.545162,
          -0.344549,
          0.467416,
          0.926628,
          -0.560706,
          -0.569233,
          0.855837,
          -0.009762
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          0.0,
          0.662588,
          0.25427,
          0.0,
          0.117289,
          0.069607,
          0.33525,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          1.15034,
          0.25208,
          0.0,
          0.0,
          0.346514,
          0.084998,
          0.0,
          0.0,
          1.807031,
          1.722262,
          0.0,
          0.132415,
          0.0,
          0.926277,
          0.960665,
          0.15685,
          0.532586,
          0.457428,
          0.0,
          0.0,
          0.0,
          1.834585,
          0.0,
          0.0,
          2.389801,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.234034,
          0.510985,
          0.374524,
          0.3355,
          0.0,
          0.0,
          1.099249,
          0.813507,
          0.0,
          0.565056,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.056894,
          0.0
        ],
        shape: [4, 4, 4]
      },
      weights: [
        {
          data: [
            -0.7046,
            0.058369,
            -0.012661,
            -0.889136,
            -0.007435,
            0.615048,
            -0.558658,
            -0.008729,
            0.041294,
            -0.438168,
            0.529679,
            0.266543,
            0.550212,
            -0.183091,
            0.3534,
            0.109289,
            -0.621224,
            -0.674319,
            0.15753,
            -0.648414,
            0.830683,
            -0.934728,
            0.16761,
            0.50837,
            0.086898,
            -0.035362,
            -0.851074,
            -0.016054,
            -0.545162,
            -0.344549,
            0.467416,
            0.926628,
            -0.560706,
            -0.569233,
            0.855837,
            -0.009762,
            0.293612,
            -0.714253,
            -0.817222,
            0.023038,
            -0.85581,
            0.539004,
            0.741369,
            -0.823095,
            -0.859253,
            -0.035201,
            0.737323,
            0.025245,
            0.366923,
            -0.220199,
            0.028247,
            0.196676,
            0.835236,
            0.376875,
            0.771537,
            -0.449685,
            0.756239,
            0.813555,
            0.931644,
            0.659618,
            0.742881,
            -0.696761,
            0.246132,
            -0.088558,
            -0.595887,
            0.278583,
            -0.957392,
            -0.062303,
            -0.402006,
            0.976563,
            -0.887975,
            0.147616
          ],
          shape: [3, 3, 4, 2]
        },
        { data: [-0.7046, 0.058369, -0.012661, -0.889136], shape: [4] }
      ]
    },
    'convolutional.Conv2DTranspose.4': {
      input: {
        data: [
          0.656737,
          0.433335,
          0.19508,
          0.702874,
          0.204501,
          -0.719665,
          0.652834,
          -0.165006,
          0.065511,
          0.376121,
          0.755842,
          0.602262,
          -0.479869,
          -0.721179,
          0.979413,
          0.487952,
          0.353365,
          0.379881,
          -0.725052,
          0.794477,
          -0.748911,
          0.150616,
          -0.830063,
          0.781869,
          -0.467526,
          -0.294391,
          -0.927268,
          0.293802,
          0.49534,
          0.456641,
          0.610365,
          -0.549942
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          0.138737,
          0.925599,
          1.137169,
          1.340109,
          1.283317,
          0.0,
          0.181124,
          0.945677,
          1.15857,
          0.683885,
          0.675564,
          0.951274,
          1.17298,
          0.931858,
          1.324839,
          0.333915,
          0.274958,
          0.975767,
          0.751189,
          1.280812,
          0.174262,
          0.0,
          0.0,
          0.365164,
          0.553578,
          0.0,
          0.180212,
          0.0,
          1.439495,
          0.0,
          0.0,
          0.942651,
          1.442793,
          1.849862,
          1.654567,
          0.0,
          0.14257,
          0.491958,
          1.443345,
          0.100677,
          0.0,
          0.6687,
          0.935517,
          0.664487,
          0.666311,
          0.313203,
          0.137519,
          0.657096,
          0.338321,
          1.493975,
          0.0,
          0.306731,
          0.334833,
          1.198184,
          0.467674,
          0.183539,
          0.472428,
          0.431906,
          0.363894,
          1.336795,
          0.763193,
          0.0,
          0.0,
          0.611028,
          1.411248,
          0.0,
          0.0,
          0.496153,
          1.397886,
          0.407861,
          0.0,
          0.595885,
          0.843702,
          1.00962,
          1.366776,
          0.228791,
          0.0,
          0.680476,
          0.777022,
          1.097554,
          0.0,
          0.645168,
          1.424529,
          0.145043,
          0.078845,
          0.957896,
          0.0,
          0.614186,
          0.008579,
          0.618674,
          0.0,
          0.108555,
          2.296594,
          0.204382,
          0.0,
          0.48565,
          0.423824,
          0.786565,
          0.326262,
          0.662603,
          0.0,
          0.0,
          0.0,
          0.523901,
          0.0,
          0.0,
          0.0,
          0.07827,
          1.61616,
          0.21619,
          0.0,
          1.700373,
          2.109872,
          1.423686,
          1.510018,
          0.0,
          0.0,
          1.358806,
          1.098492,
          0.057051,
          0.0,
          0.466656,
          0.630617,
          0.98241,
          0.4478,
          0.091327,
          0.392586,
          0.385643,
          0.664846,
          1.027977,
          0.0,
          0.614417,
          0.854143,
          0.522623,
          0.543061,
          0.372497,
          0.163597,
          0.695892,
          0.167263,
          1.676902,
          0.893855,
          0.0,
          0.0,
          1.385384,
          1.375412,
          0.0,
          0.176635,
          0.17921,
          1.728608,
          0.0,
          0.0,
          1.212909,
          1.733265,
          0.476176,
          0.654994,
          0.437541,
          0.008416,
          0.804264,
          0.143036,
          1.763692,
          0.224515,
          0.611281,
          1.131711,
          0.864802,
          0.85201,
          0.315262,
          0.392242,
          0.608048,
          0.590861,
          0.815057,
          0.12495,
          0.456729,
          1.394459,
          0.0,
          0.0,
          1.984358,
          0.162893,
          0.568199,
          0.0,
          1.535372,
          0.0,
          0.0,
          0.0,
          0.630684,
          0.0,
          0.0,
          0.369296,
          0.465976,
          1.447306,
          1.729015,
          0.363531,
          0.829857,
          0.070725,
          0.0,
          0.0,
          2.122601,
          0.0,
          0.635608,
          0.0,
          1.444042,
          0.0,
          0.553091,
          0.764359,
          0.824581,
          0.574356,
          0.196011,
          0.25799,
          0.518822,
          0.52346,
          1.23901,
          0.0,
          0.190179,
          0.149787,
          1.543508,
          0.0,
          0.0,
          0.947431,
          0.001836,
          0.740187,
          0.730386,
          0.338871,
          0.011358,
          0.066153,
          0.621182,
          0.0,
          0.0,
          0.680571,
          0.017888,
          1.221731,
          0.289562,
          0.0,
          0.560791,
          0.763661,
          0.987829,
          0.0,
          0.0,
          0.991678,
          0.0,
          0.799968,
          0.646009,
          0.0,
          0.0,
          0.320843,
          0.105635,
          0.0,
          0.662273,
          0.24983,
          0.0,
          0.243855,
          0.551188,
          0.0,
          0.0,
          0.0,
          0.792024,
          0.0,
          0.939838,
          1.488467,
          0.0,
          0.0,
          2.201744,
          0.231932,
          0.367778,
          0.0,
          1.774431,
          0.67128,
          0.0,
          0.91035,
          0.635753,
          1.35016,
          1.335651,
          1.372691,
          0.0,
          0.0,
          1.308948,
          2.064499,
          0.0,
          1.258207,
          0.0,
          1.327754,
          0.3375,
          0.426062,
          0.0,
          0.0,
          1.190959,
          0.768841,
          0.0,
          0.355168,
          0.166961,
          1.411085,
          0.200705,
          0.0,
          0.384817,
          0.514308,
          1.337366,
          0.0,
          0.0,
          0.826831,
          0.0,
          1.203101,
          0.254526,
          0.0,
          0.784026,
          1.184253,
          0.046772,
          0.106399,
          0.258033,
          0.223965,
          0.581355,
          0.399041,
          1.392369,
          0.404455,
          0.0,
          0.0,
          0.699408,
          1.62618,
          0.160026,
          0.0,
          0.677009,
          1.0785,
          0.813569
        ],
        shape: [8, 8, 5]
      },
      weights: [
        {
          data: [
            0.015448,
            0.261101,
            0.371131,
            0.970987,
            0.733096,
            0.656737,
            0.433335,
            0.19508,
            0.702874,
            0.204501,
            -0.719665,
            0.652834,
            -0.165006,
            0.065511,
            0.376121,
            0.755842,
            0.602262,
            -0.479869,
            -0.721179,
            0.979413,
            0.487952,
            0.353365,
            0.379881,
            -0.725052,
            0.794477,
            -0.748911,
            0.150616,
            -0.830063,
            0.781869,
            -0.467526,
            -0.294391,
            -0.927268,
            0.293802,
            0.49534,
            0.456641,
            0.610365,
            -0.549942,
            0.126156,
            0.450587,
            -0.837003,
            0.361856,
            0.138717,
            -0.473225,
            0.432004,
            0.46321,
            -0.042096,
            -0.481635,
            -0.730053,
            0.724533,
            0.657809,
            -0.088475,
            0.224629,
            -0.287917,
            -0.394062,
            -0.498412,
            -0.523992,
            0.638287,
            -0.400103,
            0.456819,
            -0.150058,
            -0.459513,
            0.357662,
            0.287583,
            -0.448432,
            0.805097,
            0.529896,
            -0.935158,
            -0.723581,
            -0.926538,
            -0.389357,
            0.673302,
            0.696614,
            -0.819421,
            0.580246,
            0.249636,
            -0.53035,
            -0.599139,
            -0.987449,
            -0.679439,
            0.024594,
            -0.686301,
            -0.575677,
            -0.655428,
            -0.185761,
            0.946483,
            0.12546,
            -0.358746,
            0.039991,
            -0.701225,
            -0.987664
          ],
          shape: [3, 3, 5, 2]
        },
        { data: [0.015448, 0.261101, 0.371131, 0.970987, 0.733096], shape: [5] }
      ]
    },
    'convolutional.Conv2DTranspose.5': {
      input: {
        data: [
          0.24125,
          -0.786747,
          -0.629124,
          -0.519787,
          -0.038861,
          -0.715188,
          0.71707,
          -0.180419,
          0.054783,
          0.458147,
          0.631702,
          -0.028843,
          0.586737,
          -0.21045,
          0.463067,
          -0.16224,
          0.36397,
          -0.958481,
          -0.793514,
          -0.985689,
          -0.380946,
          -0.946773,
          -0.259217,
          0.266228,
          -0.671058,
          -0.358071,
          -0.200672,
          0.343247,
          0.883116,
          0.945544,
          8.8e-5,
          -0.43253
        ],
        shape: [4, 4, 2]
      },
      expected: {
        data: [
          0.0,
          0.391419,
          0.081638,
          0.0,
          0.303757,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.314941,
          2.319324,
          0.0,
          0.157828,
          1.216804,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.529495,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.0,
          0.693646,
          0.0,
          0.0,
          1.46094,
          0.0,
          0.569175,
          3.562228,
          0.609347,
          0.929883,
          2.602643,
          0.0,
          0.0,
          0.812183,
          0.165895,
          0.532854,
          0.453394,
          0.0
        ],
        shape: [4, 4, 3]
      },
      weights: [
        {
          data: [
            0.304653,
            0.842246,
            -0.653708,
            0.24125,
            -0.786747,
            -0.629124,
            -0.519787,
            -0.038861,
            -0.715188,
            0.71707,
            -0.180419,
            0.054783,
            0.458147,
            0.631702,
            -0.028843,
            0.586737,
            -0.21045,
            0.463067,
            -0.16224,
            0.36397,
            -0.958481,
            -0.793514,
            -0.985689,
            -0.380946,
            -0.946773,
            -0.259217,
            0.266228,
            -0.671058,
            -0.358071,
            -0.200672,
            0.343247,
            0.883116,
            0.945544,
            8.8e-5,
            -0.43253,
            0.375163
          ],
          shape: [2, 3, 3, 2]
        },
        { data: [0.304653, 0.842246, -0.653708], shape: [3] }
      ]
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
