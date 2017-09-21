// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'convolutional.UpSampling3D.0': {
      input: {
        shape: [2, 2, 2, 3],
        data: [
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858
        ]
      },
      expected: {
        shape: [4, 4, 4, 3],
        data: [
          -0.806777,
          -0.564841,
          -0.481331,
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          0.559626,
          0.274958,
          -0.659222,
          -0.806777,
          -0.564841,
          -0.481331,
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          0.559626,
          0.274958,
          -0.659222,
          -0.178541,
          0.689453,
          -0.028873,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.053859,
          -0.446394,
          -0.53406,
          -0.178541,
          0.689453,
          -0.028873,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.053859,
          -0.446394,
          -0.53406,
          -0.806777,
          -0.564841,
          -0.481331,
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          0.559626,
          0.274958,
          -0.659222,
          -0.806777,
          -0.564841,
          -0.481331,
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          0.559626,
          0.274958,
          -0.659222,
          -0.178541,
          0.689453,
          -0.028873,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.053859,
          -0.446394,
          -0.53406,
          -0.178541,
          0.689453,
          -0.028873,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.053859,
          -0.446394,
          -0.53406,
          0.776897,
          -0.700858,
          -0.802179,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.616515,
          0.718677,
          0.303042,
          0.776897,
          -0.700858,
          -0.802179,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.616515,
          0.718677,
          0.303042,
          -0.080606,
          -0.850593,
          -0.795971,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858,
          0.860487,
          -0.90685,
          0.89858,
          -0.080606,
          -0.850593,
          -0.795971,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858,
          0.860487,
          -0.90685,
          0.89858,
          0.776897,
          -0.700858,
          -0.802179,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.616515,
          0.718677,
          0.303042,
          0.776897,
          -0.700858,
          -0.802179,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.616515,
          0.718677,
          0.303042,
          -0.080606,
          -0.850593,
          -0.795971,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858,
          0.860487,
          -0.90685,
          0.89858,
          -0.080606,
          -0.850593,
          -0.795971,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858,
          0.860487,
          -0.90685,
          0.89858
        ]
      }
    },
    'convolutional.UpSampling3D.1': {
      input: {
        shape: [2, 2, 2, 3],
        data: [
          0.601872,
          -0.028379,
          0.654213,
          0.217731,
          -0.864161,
          0.422013,
          0.888312,
          -0.714141,
          -0.184753,
          0.224845,
          -0.221123,
          -0.847943,
          -0.511334,
          -0.871723,
          -0.597589,
          -0.889034,
          -0.544887,
          -0.004798,
          0.406639,
          -0.35285,
          0.648562,
          0.325102,
          -0.691014,
          -0.77342
        ]
      },
      expected: {
        shape: [2, 4, 4, 6],
        data: [
          0.601872,
          0.601872,
          -0.028379,
          -0.028379,
          0.654213,
          0.654213,
          0.601872,
          0.601872,
          -0.028379,
          -0.028379,
          0.654213,
          0.654213,
          0.217731,
          0.217731,
          -0.864161,
          -0.864161,
          0.422013,
          0.422013,
          0.217731,
          0.217731,
          -0.864161,
          -0.864161,
          0.422013,
          0.422013,
          0.601872,
          0.601872,
          -0.028379,
          -0.028379,
          0.654213,
          0.654213,
          0.601872,
          0.601872,
          -0.028379,
          -0.028379,
          0.654213,
          0.654213,
          0.217731,
          0.217731,
          -0.864161,
          -0.864161,
          0.422013,
          0.422013,
          0.217731,
          0.217731,
          -0.864161,
          -0.864161,
          0.422013,
          0.422013,
          0.888312,
          0.888312,
          -0.714141,
          -0.714141,
          -0.184753,
          -0.184753,
          0.888312,
          0.888312,
          -0.714141,
          -0.714141,
          -0.184753,
          -0.184753,
          0.224845,
          0.224845,
          -0.221123,
          -0.221123,
          -0.847943,
          -0.847943,
          0.224845,
          0.224845,
          -0.221123,
          -0.221123,
          -0.847943,
          -0.847943,
          0.888312,
          0.888312,
          -0.714141,
          -0.714141,
          -0.184753,
          -0.184753,
          0.888312,
          0.888312,
          -0.714141,
          -0.714141,
          -0.184753,
          -0.184753,
          0.224845,
          0.224845,
          -0.221123,
          -0.221123,
          -0.847943,
          -0.847943,
          0.224845,
          0.224845,
          -0.221123,
          -0.221123,
          -0.847943,
          -0.847943,
          -0.511334,
          -0.511334,
          -0.871723,
          -0.871723,
          -0.597589,
          -0.597589,
          -0.511334,
          -0.511334,
          -0.871723,
          -0.871723,
          -0.597589,
          -0.597589,
          -0.889034,
          -0.889034,
          -0.544887,
          -0.544887,
          -0.004798,
          -0.004798,
          -0.889034,
          -0.889034,
          -0.544887,
          -0.544887,
          -0.004798,
          -0.004798,
          -0.511334,
          -0.511334,
          -0.871723,
          -0.871723,
          -0.597589,
          -0.597589,
          -0.511334,
          -0.511334,
          -0.871723,
          -0.871723,
          -0.597589,
          -0.597589,
          -0.889034,
          -0.889034,
          -0.544887,
          -0.544887,
          -0.004798,
          -0.004798,
          -0.889034,
          -0.889034,
          -0.544887,
          -0.544887,
          -0.004798,
          -0.004798,
          0.406639,
          0.406639,
          -0.35285,
          -0.35285,
          0.648562,
          0.648562,
          0.406639,
          0.406639,
          -0.35285,
          -0.35285,
          0.648562,
          0.648562,
          0.325102,
          0.325102,
          -0.691014,
          -0.691014,
          -0.77342,
          -0.77342,
          0.325102,
          0.325102,
          -0.691014,
          -0.691014,
          -0.77342,
          -0.77342,
          0.406639,
          0.406639,
          -0.35285,
          -0.35285,
          0.648562,
          0.648562,
          0.406639,
          0.406639,
          -0.35285,
          -0.35285,
          0.648562,
          0.648562,
          0.325102,
          0.325102,
          -0.691014,
          -0.691014,
          -0.77342,
          -0.77342,
          0.325102,
          0.325102,
          -0.691014,
          -0.691014,
          -0.77342,
          -0.77342
        ]
      }
    },
    'convolutional.UpSampling3D.2': {
      input: {
        shape: [2, 1, 3, 2],
        data: [
          -0.989173,
          -0.133618,
          -0.505338,
          0.023259,
          0.503982,
          -0.303769,
          -0.436321,
          0.793911,
          0.416102,
          0.806405,
          -0.098342,
          -0.738022
        ]
      },
      expected: {
        shape: [2, 3, 6, 2],
        data: [
          -0.989173,
          -0.133618,
          -0.989173,
          -0.133618,
          -0.505338,
          0.023259,
          -0.505338,
          0.023259,
          0.503982,
          -0.303769,
          0.503982,
          -0.303769,
          -0.989173,
          -0.133618,
          -0.989173,
          -0.133618,
          -0.505338,
          0.023259,
          -0.505338,
          0.023259,
          0.503982,
          -0.303769,
          0.503982,
          -0.303769,
          -0.989173,
          -0.133618,
          -0.989173,
          -0.133618,
          -0.505338,
          0.023259,
          -0.505338,
          0.023259,
          0.503982,
          -0.303769,
          0.503982,
          -0.303769,
          -0.436321,
          0.793911,
          -0.436321,
          0.793911,
          0.416102,
          0.806405,
          0.416102,
          0.806405,
          -0.098342,
          -0.738022,
          -0.098342,
          -0.738022,
          -0.436321,
          0.793911,
          -0.436321,
          0.793911,
          0.416102,
          0.806405,
          0.416102,
          0.806405,
          -0.098342,
          -0.738022,
          -0.098342,
          -0.738022,
          -0.436321,
          0.793911,
          -0.436321,
          0.793911,
          0.416102,
          0.806405,
          0.416102,
          0.806405,
          -0.098342,
          -0.738022,
          -0.098342,
          -0.738022
        ]
      }
    },
    'convolutional.UpSampling3D.3': {
      input: {
        shape: [2, 1, 3, 3],
        data: [
          -0.47588,
          0.366985,
          0.040173,
          0.015578,
          -0.906159,
          0.241982,
          -0.771299,
          -0.443554,
          -0.56404,
          -0.17751,
          0.541277,
          -0.233327,
          0.024369,
          0.858275,
          0.496191,
          0.980574,
          -0.59522,
          0.480899
        ]
      },
      expected: {
        shape: [2, 2, 3, 6],
        data: [
          -0.47588,
          -0.47588,
          0.366985,
          0.366985,
          0.040173,
          0.040173,
          0.015578,
          0.015578,
          -0.906159,
          -0.906159,
          0.241982,
          0.241982,
          -0.771299,
          -0.771299,
          -0.443554,
          -0.443554,
          -0.56404,
          -0.56404,
          -0.47588,
          -0.47588,
          0.366985,
          0.366985,
          0.040173,
          0.040173,
          0.015578,
          0.015578,
          -0.906159,
          -0.906159,
          0.241982,
          0.241982,
          -0.771299,
          -0.771299,
          -0.443554,
          -0.443554,
          -0.56404,
          -0.56404,
          -0.17751,
          -0.17751,
          0.541277,
          0.541277,
          -0.233327,
          -0.233327,
          0.024369,
          0.024369,
          0.858275,
          0.858275,
          0.496191,
          0.496191,
          0.980574,
          0.980574,
          -0.59522,
          -0.59522,
          0.480899,
          0.480899,
          -0.17751,
          -0.17751,
          0.541277,
          0.541277,
          -0.233327,
          -0.233327,
          0.024369,
          0.024369,
          0.858275,
          0.858275,
          0.496191,
          0.496191,
          0.980574,
          0.980574,
          -0.59522,
          -0.59522,
          0.480899,
          0.480899
        ]
      }
    },
    'convolutional.UpSampling3D.4': {
      input: {
        shape: [2, 1, 3, 2],
        data: [
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252
        ]
      },
      expected: {
        shape: [4, 2, 6, 2],
        data: [
          0.024124,
          0.280236,
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          -0.164273,
          0.358409,
          0.024124,
          0.280236,
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          -0.164273,
          0.358409,
          0.024124,
          0.280236,
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          -0.164273,
          0.358409,
          0.024124,
          0.280236,
          0.024124,
          0.280236,
          -0.680013,
          -0.042458,
          -0.680013,
          -0.042458,
          -0.164273,
          0.358409,
          -0.164273,
          0.358409,
          0.511014,
          -0.585272,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252,
          0.64189,
          -0.400252,
          0.511014,
          -0.585272,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252,
          0.64189,
          -0.400252,
          0.511014,
          -0.585272,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252,
          0.64189,
          -0.400252,
          0.511014,
          -0.585272,
          0.511014,
          -0.585272,
          -0.481578,
          0.692702,
          -0.481578,
          0.692702,
          0.64189,
          -0.400252,
          0.64189,
          -0.400252
        ]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()