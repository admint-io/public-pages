/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/ieee754@1.2.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
(exports.read = function (a, o, t, r, h) {
  var M,
    p,
    w = 8 * h - r - 1,
    f = (1 << w) - 1,
    e = f >> 1,
    i = -7,
    N = t ? h - 1 : 0,
    n = t ? -1 : 1,
    s = a[o + N];
  for (
    N += n, M = s & ((1 << -i) - 1), s >>= -i, i += w;
    i > 0;
    M = 256 * M + a[o + N], N += n, i -= 8
  );
  for (
    p = M & ((1 << -i) - 1), M >>= -i, i += r;
    i > 0;
    p = 256 * p + a[o + N], N += n, i -= 8
  );
  if (0 === M) M = 1 - e;
  else {
    if (M === f) return p ? NaN : (1 / 0) * (s ? -1 : 1);
    (p += Math.pow(2, r)), (M -= e);
  }
  return (s ? -1 : 1) * p * Math.pow(2, M - r);
}),
  (exports.write = function (a, o, t, r, h, M) {
    var p,
      w,
      f,
      e = 8 * M - h - 1,
      i = (1 << e) - 1,
      N = i >> 1,
      n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      s = r ? 0 : M - 1,
      u = r ? 1 : -1,
      l = o < 0 || (0 === o && 1 / o < 0) ? 1 : 0;
    for (
      o = Math.abs(o),
        isNaN(o) || o === 1 / 0
          ? ((w = isNaN(o) ? 1 : 0), (p = i))
          : ((p = Math.floor(Math.log(o) / Math.LN2)),
            o * (f = Math.pow(2, -p)) < 1 && (p--, (f *= 2)),
            (o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N)) * f >= 2 &&
              (p++, (f /= 2)),
            p + N >= i
              ? ((w = 0), (p = i))
              : p + N >= 1
              ? ((w = (o * f - 1) * Math.pow(2, h)), (p += N))
              : ((w = o * Math.pow(2, N - 1) * Math.pow(2, h)), (p = 0)));
      h >= 8;
      a[t + s] = 255 & w, s += u, w /= 256, h -= 8
    );
    for (
      p = (p << h) | w, e += h;
      e > 0;
      a[t + s] = 255 & p, s += u, p /= 256, e -= 8
    );
    a[t + s - u] |= 128 * l;
  });
//# sourceMappingURL=/sm/490e918ec7a9dc6baee21bee83aca37ee56af5353e1b2470b3ffbd1e7cdeda0d.map
