/*! For license information please see torusWalletConnectorPlugin.umd.min.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.TorusWalletConnectorPlugin = t())
    : (e.TorusWalletConnectorPlugin = t());
})(self, () =>
  (() => {
    var e = {
        4317: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ComposedStore = void 0);
          const n = r(7556);
          class i extends n.ObservableStore {
            constructor(e) {
              super({}),
                (this._children = e || {}),
                Object.keys(this._children).forEach((e) => {
                  const t = this._children[e];
                  this._addChild(e, t);
                });
            }
            _addChild(e, t) {
              const r = (t) => {
                const r = this.getState();
                (r[e] = t), this.putState(r);
              };
              t.subscribe(r), r(t.getState());
            }
          }
          t.ComposedStore = i;
        },
        4319: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.MergedStore = void 0);
          const n = r(7556);
          class i extends n.ObservableStore {
            constructor(e = []) {
              super({}),
                (this._children = e),
                e.forEach((e) => this._addChild(e)),
                this._updateWholeState();
            }
            _addChild(e) {
              e.subscribe(() => this._updateWholeState());
            }
            _updateWholeState() {
              const e = this._children.map((e) => e.getState()),
                t = Object.assign({}, ...e);
              this.putState(t);
            }
          }
          t.MergedStore = i;
        },
        7556: function (e, t, r) {
          "use strict";
          var n =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ObservableStore = void 0);
          const i = n(r(9381));
          class o extends i.default {
            constructor(e) {
              super(), (this._state = e || {});
            }
            getState() {
              return this._getState();
            }
            putState(e) {
              this._putState(e), this.emit("update", e);
            }
            updateState(e) {
              if (e && "object" == typeof e) {
                const t = this.getState();
                this.putState(Object.assign(Object.assign({}, t), e));
              } else this.putState(e);
            }
            subscribe(e) {
              this.on("update", e);
            }
            unsubscribe(e) {
              this.removeListener("update", e);
            }
            _getState() {
              return this._state;
            }
            _putState(e) {
              this._state = e;
            }
          }
          t.ObservableStore = o;
        },
        3294: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.storeAsStream = void 0);
          const n = r(3946);
          class i extends n.Duplex {
            constructor(e) {
              super({ objectMode: !0 }),
                this.resume(),
                (this.handler = (e) => this.push(e)),
                (this.obsStore = e),
                this.obsStore.subscribe(this.handler);
            }
            pipe(e, t) {
              const r = super.pipe(e, t);
              return e.write(this.obsStore.getState()), r;
            }
            _write(e, t, r) {
              this.obsStore.putState(e), r();
            }
            _read(e) {}
            _destroy(e, t) {
              this.obsStore.unsubscribe(this.handler), super._destroy(e, t);
            }
          }
          t.storeAsStream = function (e) {
            return new i(e);
          };
        },
        3249: function (e, t, r) {
          "use strict";
          var n =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, t, r, n) {
                    void 0 === n && (n = r),
                      Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function () {
                          return t[r];
                        },
                      });
                  }
                : function (e, t, r, n) {
                    void 0 === n && (n = r), (e[n] = t[r]);
                  }),
            i =
              (this && this.__exportStar) ||
              function (e, t) {
                for (var r in e)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(t, r) ||
                    n(t, e, r);
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            i(r(3294), t),
            i(r(4317), t),
            i(r(4319), t),
            i(r(7556), t),
            i(r(5024), t);
        },
        5024: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.storeTransformStream = void 0);
          const n = r(1950);
          t.storeTransformStream = function (e) {
            return n.obj((t, r, n) => {
              try {
                return void n(null, e(t));
              } catch (e) {
                return void n(e);
              }
            });
          };
        },
        5025: (e) => {
          var t = {}.toString;
          e.exports =
            Array.isArray ||
            function (e) {
              return "[object Array]" == t.call(e);
            };
        },
        3102: (e, t, r) => {
          "use strict";
          var n = r(2072),
            i =
              Object.keys ||
              function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t;
              };
          e.exports = d;
          var o = Object.create(r(5670));
          o.inherits = r(2111);
          var a = r(9598),
            s = r(3057);
          o.inherits(d, a);
          for (var f = i(s.prototype), c = 0; c < f.length; c++) {
            var u = f[c];
            d.prototype[u] || (d.prototype[u] = s.prototype[u]);
          }
          function d(e) {
            if (!(this instanceof d)) return new d(e);
            a.call(this, e),
              s.call(this, e),
              e && !1 === e.readable && (this.readable = !1),
              e && !1 === e.writable && (this.writable = !1),
              (this.allowHalfOpen = !0),
              e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
              this.once("end", h);
          }
          function h() {
            this.allowHalfOpen ||
              this._writableState.ended ||
              n.nextTick(l, this);
          }
          function l(e) {
            e.end();
          }
          Object.defineProperty(d.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
            Object.defineProperty(d.prototype, "destroyed", {
              get: function () {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  this._readableState.destroyed &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = e),
                  (this._writableState.destroyed = e));
              },
            }),
            (d.prototype._destroy = function (e, t) {
              this.push(null), this.end(), n.nextTick(t, e);
            });
        },
        836: (e, t, r) => {
          "use strict";
          e.exports = o;
          var n = r(8703),
            i = Object.create(r(5670));
          function o(e) {
            if (!(this instanceof o)) return new o(e);
            n.call(this, e);
          }
          (i.inherits = r(2111)),
            i.inherits(o, n),
            (o.prototype._transform = function (e, t, r) {
              r(null, e);
            });
        },
        9598: (e, t, r) => {
          "use strict";
          var n = r(3158),
            i = r(2072);
          e.exports = v;
          var o,
            a = r(5025);
          (v.ReadableState = m), r(7531).EventEmitter;
          var s = function (e, t) {
              return e.listeners(t).length;
            },
            f = r(7855),
            c = r(5094).Buffer,
            u =
              (void 0 !== r.g
                ? r.g
                : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                ? self
                : {}
              ).Uint8Array || function () {},
            d = Object.create(r(5670));
          d.inherits = r(2111);
          var h = r(1855),
            l = void 0;
          l = h && h.debuglog ? h.debuglog("stream") : function () {};
          var p,
            b = r(3339),
            y = r(3080);
          d.inherits(v, f);
          var g = ["error", "close", "destroy", "pause", "resume"];
          function m(e, t) {
            e = e || {};
            var n = t instanceof (o = o || r(3102));
            (this.objectMode = !!e.objectMode),
              n &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var i = e.highWaterMark,
              a = e.readableHighWaterMark,
              s = this.objectMode ? 16 : 16384;
            (this.highWaterMark =
              i || 0 === i ? i : n && (a || 0 === a) ? a : s),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.buffer = new b()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (p || (p = r(6712).s),
                (this.decoder = new p(e.encoding)),
                (this.encoding = e.encoding));
          }
          function v(e) {
            if (((o = o || r(3102)), !(this instanceof v))) return new v(e);
            (this._readableState = new m(e, this)),
              (this.readable = !0),
              e &&
                ("function" == typeof e.read && (this._read = e.read),
                "function" == typeof e.destroy && (this._destroy = e.destroy)),
              f.call(this);
          }
          function w(e, t, r, n, i) {
            var o,
              a = e._readableState;
            return (
              null === t
                ? ((a.reading = !1),
                  (function (e, t) {
                    if (!t.ended) {
                      if (t.decoder) {
                        var r = t.decoder.end();
                        r &&
                          r.length &&
                          (t.buffer.push(r),
                          (t.length += t.objectMode ? 1 : r.length));
                      }
                      (t.ended = !0), A(e);
                    }
                  })(e, a))
                : (i ||
                    (o = (function (e, t) {
                      var r, n;
                      return (
                        (n = t),
                        c.isBuffer(n) ||
                          n instanceof u ||
                          "string" == typeof t ||
                          void 0 === t ||
                          e.objectMode ||
                          (r = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                        r
                      );
                    })(a, t)),
                  o
                    ? e.emit("error", o)
                    : a.objectMode || (t && t.length > 0)
                    ? ("string" == typeof t ||
                        a.objectMode ||
                        Object.getPrototypeOf(t) === c.prototype ||
                        (t = (function (e) {
                          return c.from(e);
                        })(t)),
                      n
                        ? a.endEmitted
                          ? e.emit(
                              "error",
                              new Error("stream.unshift() after end event")
                            )
                          : _(e, a, t, !0)
                        : a.ended
                        ? e.emit("error", new Error("stream.push() after EOF"))
                        : ((a.reading = !1),
                          a.decoder && !r
                            ? ((t = a.decoder.write(t)),
                              a.objectMode || 0 !== t.length
                                ? _(e, a, t, !1)
                                : k(e, a))
                            : _(e, a, t, !1)))
                    : n || (a.reading = !1)),
              (function (e) {
                return (
                  !e.ended &&
                  (e.needReadable ||
                    e.length < e.highWaterMark ||
                    0 === e.length)
                );
              })(a)
            );
          }
          function _(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync
              ? (e.emit("data", r), e.read(0))
              : ((t.length += t.objectMode ? 1 : r.length),
                n ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && A(e)),
              k(e, t);
          }
          Object.defineProperty(v.prototype, "destroyed", {
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              );
            },
            set: function (e) {
              this._readableState && (this._readableState.destroyed = e);
            },
          }),
            (v.prototype.destroy = y.destroy),
            (v.prototype._undestroy = y.undestroy),
            (v.prototype._destroy = function (e, t) {
              this.push(null), t(e);
            }),
            (v.prototype.push = function (e, t) {
              var r,
                n = this._readableState;
              return (
                n.objectMode
                  ? (r = !0)
                  : "string" == typeof e &&
                    ((t = t || n.defaultEncoding) !== n.encoding &&
                      ((e = c.from(e, t)), (t = "")),
                    (r = !0)),
                w(this, e, t, !1, r)
              );
            }),
            (v.prototype.unshift = function (e) {
              return w(this, e, null, !0, !1);
            }),
            (v.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (v.prototype.setEncoding = function (e) {
              return (
                p || (p = r(6712).s),
                (this._readableState.decoder = new p(e)),
                (this._readableState.encoding = e),
                this
              );
            });
          var S = 8388608;
          function E(e, t) {
            return e <= 0 || (0 === t.length && t.ended)
              ? 0
              : t.objectMode
              ? 1
              : e != e
              ? t.flowing && t.length
                ? t.buffer.head.data.length
                : t.length
              : (e > t.highWaterMark &&
                  (t.highWaterMark = (function (e) {
                    return (
                      e >= S
                        ? (e = S)
                        : (e--,
                          (e |= e >>> 1),
                          (e |= e >>> 2),
                          (e |= e >>> 4),
                          (e |= e >>> 8),
                          (e |= e >>> 16),
                          e++),
                      e
                    );
                  })(e)),
                e <= t.length
                  ? e
                  : t.ended
                  ? t.length
                  : ((t.needReadable = !0), 0));
          }
          function A(e) {
            var t = e._readableState;
            (t.needReadable = !1),
              t.emittedReadable ||
                (l("emitReadable", t.flowing),
                (t.emittedReadable = !0),
                t.sync ? i.nextTick(M, e) : M(e));
          }
          function M(e) {
            l("emit readable"), e.emit("readable"), R(e);
          }
          function k(e, t) {
            t.readingMore || ((t.readingMore = !0), i.nextTick(O, e, t));
          }
          function O(e, t) {
            for (
              var r = t.length;
              !t.reading &&
              !t.flowing &&
              !t.ended &&
              t.length < t.highWaterMark &&
              (l("maybeReadMore read 0"), e.read(0), r !== t.length);

            )
              r = t.length;
            t.readingMore = !1;
          }
          function I(e) {
            l("readable nexttick read 0"), e.read(0);
          }
          function C(e, t) {
            t.reading || (l("resume read 0"), e.read(0)),
              (t.resumeScheduled = !1),
              (t.awaitDrain = 0),
              e.emit("resume"),
              R(e),
              t.flowing && !t.reading && e.read(0);
          }
          function R(e) {
            var t = e._readableState;
            for (l("flow", t.flowing); t.flowing && null !== e.read(); );
          }
          function P(e, t) {
            return 0 === t.length
              ? null
              : (t.objectMode
                  ? (r = t.buffer.shift())
                  : !e || e >= t.length
                  ? ((r = t.decoder
                      ? t.buffer.join("")
                      : 1 === t.buffer.length
                      ? t.buffer.head.data
                      : t.buffer.concat(t.length)),
                    t.buffer.clear())
                  : (r = (function (e, t, r) {
                      var n;
                      return (
                        e < t.head.data.length
                          ? ((n = t.head.data.slice(0, e)),
                            (t.head.data = t.head.data.slice(e)))
                          : (n =
                              e === t.head.data.length
                                ? t.shift()
                                : r
                                ? (function (e, t) {
                                    var r = t.head,
                                      n = 1,
                                      i = r.data;
                                    for (e -= i.length; (r = r.next); ) {
                                      var o = r.data,
                                        a = e > o.length ? o.length : e;
                                      if (
                                        (a === o.length
                                          ? (i += o)
                                          : (i += o.slice(0, e)),
                                        0 == (e -= a))
                                      ) {
                                        a === o.length
                                          ? (++n,
                                            r.next
                                              ? (t.head = r.next)
                                              : (t.head = t.tail = null))
                                          : ((t.head = r),
                                            (r.data = o.slice(a)));
                                        break;
                                      }
                                      ++n;
                                    }
                                    return (t.length -= n), i;
                                  })(e, t)
                                : (function (e, t) {
                                    var r = c.allocUnsafe(e),
                                      n = t.head,
                                      i = 1;
                                    for (
                                      n.data.copy(r), e -= n.data.length;
                                      (n = n.next);

                                    ) {
                                      var o = n.data,
                                        a = e > o.length ? o.length : e;
                                      if (
                                        (o.copy(r, r.length - e, 0, a),
                                        0 == (e -= a))
                                      ) {
                                        a === o.length
                                          ? (++i,
                                            n.next
                                              ? (t.head = n.next)
                                              : (t.head = t.tail = null))
                                          : ((t.head = n),
                                            (n.data = o.slice(a)));
                                        break;
                                      }
                                      ++i;
                                    }
                                    return (t.length -= i), r;
                                  })(e, t)),
                        n
                      );
                    })(e, t.buffer, t.decoder)),
                r);
            var r;
          }
          function x(e) {
            var t = e._readableState;
            if (t.length > 0)
              throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || ((t.ended = !0), i.nextTick(B, t, e));
          }
          function B(e, t) {
            e.endEmitted ||
              0 !== e.length ||
              ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
          }
          function T(e, t) {
            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
            return -1;
          }
          (v.prototype.read = function (e) {
            l("read", e), (e = parseInt(e, 10));
            var t = this._readableState,
              r = e;
            if (
              (0 !== e && (t.emittedReadable = !1),
              0 === e &&
                t.needReadable &&
                (t.length >= t.highWaterMark || t.ended))
            )
              return (
                l("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? x(this) : A(this),
                null
              );
            if (0 === (e = E(e, t)) && t.ended)
              return 0 === t.length && x(this), null;
            var n,
              i = t.needReadable;
            return (
              l("need readable", i),
              (0 === t.length || t.length - e < t.highWaterMark) &&
                l("length less than watermark", (i = !0)),
              t.ended || t.reading
                ? l("reading or ended", (i = !1))
                : i &&
                  (l("do read"),
                  (t.reading = !0),
                  (t.sync = !0),
                  0 === t.length && (t.needReadable = !0),
                  this._read(t.highWaterMark),
                  (t.sync = !1),
                  t.reading || (e = E(r, t))),
              null === (n = e > 0 ? P(e, t) : null)
                ? ((t.needReadable = !0), (e = 0))
                : (t.length -= e),
              0 === t.length &&
                (t.ended || (t.needReadable = !0),
                r !== e && t.ended && x(this)),
              null !== n && this.emit("data", n),
              n
            );
          }),
            (v.prototype._read = function (e) {
              this.emit("error", new Error("_read() is not implemented"));
            }),
            (v.prototype.pipe = function (e, t) {
              var r = this,
                o = this._readableState;
              switch (o.pipesCount) {
                case 0:
                  o.pipes = e;
                  break;
                case 1:
                  o.pipes = [o.pipes, e];
                  break;
                default:
                  o.pipes.push(e);
              }
              (o.pipesCount += 1), l("pipe count=%d opts=%j", o.pipesCount, t);
              var f =
                (t && !1 === t.end) || e === n.stdout || e === n.stderr ? m : c;
              function c() {
                l("onend"), e.end();
              }
              o.endEmitted ? i.nextTick(f) : r.once("end", f),
                e.on("unpipe", function t(n, i) {
                  l("onunpipe"),
                    n === r &&
                      i &&
                      !1 === i.hasUnpiped &&
                      ((i.hasUnpiped = !0),
                      l("cleanup"),
                      e.removeListener("close", y),
                      e.removeListener("finish", g),
                      e.removeListener("drain", u),
                      e.removeListener("error", b),
                      e.removeListener("unpipe", t),
                      r.removeListener("end", c),
                      r.removeListener("end", m),
                      r.removeListener("data", p),
                      (d = !0),
                      !o.awaitDrain ||
                        (e._writableState && !e._writableState.needDrain) ||
                        u());
                });
              var u = (function (e) {
                return function () {
                  var t = e._readableState;
                  l("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain &&
                      s(e, "data") &&
                      ((t.flowing = !0), R(e));
                };
              })(r);
              e.on("drain", u);
              var d = !1,
                h = !1;
              function p(t) {
                l("ondata"),
                  (h = !1),
                  !1 !== e.write(t) ||
                    h ||
                    (((1 === o.pipesCount && o.pipes === e) ||
                      (o.pipesCount > 1 && -1 !== T(o.pipes, e))) &&
                      !d &&
                      (l("false write response, pause", o.awaitDrain),
                      o.awaitDrain++,
                      (h = !0)),
                    r.pause());
              }
              function b(t) {
                l("onerror", t),
                  m(),
                  e.removeListener("error", b),
                  0 === s(e, "error") && e.emit("error", t);
              }
              function y() {
                e.removeListener("finish", g), m();
              }
              function g() {
                l("onfinish"), e.removeListener("close", y), m();
              }
              function m() {
                l("unpipe"), r.unpipe(e);
              }
              return (
                r.on("data", p),
                (function (e, t, r) {
                  if ("function" == typeof e.prependListener)
                    return e.prependListener(t, r);
                  e._events && e._events[t]
                    ? a(e._events[t])
                      ? e._events[t].unshift(r)
                      : (e._events[t] = [r, e._events[t]])
                    : e.on(t, r);
                })(e, "error", b),
                e.once("close", y),
                e.once("finish", g),
                e.emit("pipe", r),
                o.flowing || (l("pipe resume"), r.resume()),
                e
              );
            }),
            (v.prototype.unpipe = function (e) {
              var t = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === t.pipesCount) return this;
              if (1 === t.pipesCount)
                return (
                  (e && e !== t.pipes) ||
                    (e || (e = t.pipes),
                    (t.pipes = null),
                    (t.pipesCount = 0),
                    (t.flowing = !1),
                    e && e.emit("unpipe", this, r)),
                  this
                );
              if (!e) {
                var n = t.pipes,
                  i = t.pipesCount;
                (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                for (var o = 0; o < i; o++)
                  n[o].emit("unpipe", this, { hasUnpiped: !1 });
                return this;
              }
              var a = T(t.pipes, e);
              return (
                -1 === a ||
                  (t.pipes.splice(a, 1),
                  (t.pipesCount -= 1),
                  1 === t.pipesCount && (t.pipes = t.pipes[0]),
                  e.emit("unpipe", this, r)),
                this
              );
            }),
            (v.prototype.on = function (e, t) {
              var r = f.prototype.on.call(this, e, t);
              if ("data" === e)
                !1 !== this._readableState.flowing && this.resume();
              else if ("readable" === e) {
                var n = this._readableState;
                n.endEmitted ||
                  n.readableListening ||
                  ((n.readableListening = n.needReadable = !0),
                  (n.emittedReadable = !1),
                  n.reading ? n.length && A(this) : i.nextTick(I, this));
              }
              return r;
            }),
            (v.prototype.addListener = v.prototype.on),
            (v.prototype.resume = function () {
              var e = this._readableState;
              return (
                e.flowing ||
                  (l("resume"),
                  (e.flowing = !0),
                  (function (e, t) {
                    t.resumeScheduled ||
                      ((t.resumeScheduled = !0), i.nextTick(C, e, t));
                  })(this, e)),
                this
              );
            }),
            (v.prototype.pause = function () {
              return (
                l("call pause flowing=%j", this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (l("pause"),
                  (this._readableState.flowing = !1),
                  this.emit("pause")),
                this
              );
            }),
            (v.prototype.wrap = function (e) {
              var t = this,
                r = this._readableState,
                n = !1;
              for (var i in (e.on("end", function () {
                if ((l("wrapped end"), r.decoder && !r.ended)) {
                  var e = r.decoder.end();
                  e && e.length && t.push(e);
                }
                t.push(null);
              }),
              e.on("data", function (i) {
                l("wrapped data"),
                  r.decoder && (i = r.decoder.write(i)),
                  (r.objectMode && null == i) ||
                    ((r.objectMode || (i && i.length)) &&
                      (t.push(i) || ((n = !0), e.pause())));
              }),
              e))
                void 0 === this[i] &&
                  "function" == typeof e[i] &&
                  (this[i] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments);
                    };
                  })(i));
              for (var o = 0; o < g.length; o++)
                e.on(g[o], this.emit.bind(this, g[o]));
              return (
                (this._read = function (t) {
                  l("wrapped _read", t), n && ((n = !1), e.resume());
                }),
                this
              );
            }),
            Object.defineProperty(v.prototype, "readableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark;
              },
            }),
            (v._fromList = P);
        },
        8703: (e, t, r) => {
          "use strict";
          e.exports = a;
          var n = r(3102),
            i = Object.create(r(5670));
          function o(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (!n)
              return this.emit(
                "error",
                new Error("write callback called multiple times")
              );
            (r.writechunk = null),
              (r.writecb = null),
              null != t && this.push(t),
              n(e);
            var i = this._readableState;
            (i.reading = !1),
              (i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
          }
          function a(e) {
            if (!(this instanceof a)) return new a(e);
            n.call(this, e),
              (this._transformState = {
                afterTransform: o.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null,
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              e &&
                ("function" == typeof e.transform &&
                  (this._transform = e.transform),
                "function" == typeof e.flush && (this._flush = e.flush)),
              this.on("prefinish", s);
          }
          function s() {
            var e = this;
            "function" == typeof this._flush
              ? this._flush(function (t, r) {
                  f(e, t, r);
                })
              : f(this, null, null);
          }
          function f(e, t, r) {
            if (t) return e.emit("error", t);
            if ((null != r && e.push(r), e._writableState.length))
              throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming)
              throw new Error("Calling transform done when still transforming");
            return e.push(null);
          }
          (i.inherits = r(2111)),
            i.inherits(a, n),
            (a.prototype.push = function (e, t) {
              return (
                (this._transformState.needTransform = !1),
                n.prototype.push.call(this, e, t)
              );
            }),
            (a.prototype._transform = function (e, t, r) {
              throw new Error("_transform() is not implemented");
            }),
            (a.prototype._write = function (e, t, r) {
              var n = this._transformState;
              if (
                ((n.writecb = r),
                (n.writechunk = e),
                (n.writeencoding = t),
                !n.transforming)
              ) {
                var i = this._readableState;
                (n.needTransform ||
                  i.needReadable ||
                  i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
              }
            }),
            (a.prototype._read = function (e) {
              var t = this._transformState;
              null !== t.writechunk && t.writecb && !t.transforming
                ? ((t.transforming = !0),
                  this._transform(
                    t.writechunk,
                    t.writeencoding,
                    t.afterTransform
                  ))
                : (t.needTransform = !0);
            }),
            (a.prototype._destroy = function (e, t) {
              var r = this;
              n.prototype._destroy.call(this, e, function (e) {
                t(e), r.emit("close");
              });
            });
        },
        3057: (e, t, r) => {
          "use strict";
          var n = r(3158),
            i = r(2072);
          function o(e) {
            var t = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function (e, t, r) {
                  var n = e.entry;
                  for (e.entry = null; n; ) {
                    var i = n.callback;
                    t.pendingcb--, i(undefined), (n = n.next);
                  }
                  t.corkedRequestsFree.next = e;
                })(t, e);
              });
          }
          e.exports = g;
          var a,
            s =
              !n.browser &&
              ["v0.10", "v0.9."].indexOf(n.version.slice(0, 5)) > -1
                ? setImmediate
                : i.nextTick;
          g.WritableState = y;
          var f = Object.create(r(5670));
          f.inherits = r(2111);
          var c,
            u = { deprecate: r(737) },
            d = r(7855),
            h = r(5094).Buffer,
            l =
              (void 0 !== r.g
                ? r.g
                : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                ? self
                : {}
              ).Uint8Array || function () {},
            p = r(3080);
          function b() {}
          function y(e, t) {
            (a = a || r(3102)), (e = e || {});
            var n = t instanceof a;
            (this.objectMode = !!e.objectMode),
              n &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var f = e.highWaterMark,
              c = e.writableHighWaterMark,
              u = this.objectMode ? 16 : 16384;
            (this.highWaterMark =
              f || 0 === f ? f : n && (c || 0 === c) ? c : u),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var d = !1 === e.decodeStrings;
            (this.decodeStrings = !d),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (e) {
                !(function (e, t) {
                  var r = e._writableState,
                    n = r.sync,
                    o = r.writecb;
                  if (
                    ((function (e) {
                      (e.writing = !1),
                        (e.writecb = null),
                        (e.length -= e.writelen),
                        (e.writelen = 0);
                    })(r),
                    t)
                  )
                    !(function (e, t, r, n, o) {
                      --t.pendingcb,
                        r
                          ? (i.nextTick(o, n),
                            i.nextTick(E, e, t),
                            (e._writableState.errorEmitted = !0),
                            e.emit("error", n))
                          : (o(n),
                            (e._writableState.errorEmitted = !0),
                            e.emit("error", n),
                            E(e, t));
                    })(e, r, n, t, o);
                  else {
                    var a = _(r);
                    a ||
                      r.corked ||
                      r.bufferProcessing ||
                      !r.bufferedRequest ||
                      w(e, r),
                      n ? s(v, e, r, a, o) : v(e, r, a, o);
                  }
                })(t, e);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new o(this));
          }
          function g(e) {
            if (((a = a || r(3102)), !(c.call(g, this) || this instanceof a)))
              return new g(e);
            (this._writableState = new y(e, this)),
              (this.writable = !0),
              e &&
                ("function" == typeof e.write && (this._write = e.write),
                "function" == typeof e.writev && (this._writev = e.writev),
                "function" == typeof e.destroy && (this._destroy = e.destroy),
                "function" == typeof e.final && (this._final = e.final)),
              d.call(this);
          }
          function m(e, t, r, n, i, o, a) {
            (t.writelen = n),
              (t.writecb = a),
              (t.writing = !0),
              (t.sync = !0),
              r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
              (t.sync = !1);
          }
          function v(e, t, r, n) {
            r ||
              (function (e, t) {
                0 === t.length &&
                  t.needDrain &&
                  ((t.needDrain = !1), e.emit("drain"));
              })(e, t),
              t.pendingcb--,
              n(),
              E(e, t);
          }
          function w(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
              var n = t.bufferedRequestCount,
                i = new Array(n),
                a = t.corkedRequestsFree;
              a.entry = r;
              for (var s = 0, f = !0; r; )
                (i[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
              (i.allBuffers = f),
                m(e, t, !0, t.length, i, "", a.finish),
                t.pendingcb++,
                (t.lastBufferedRequest = null),
                a.next
                  ? ((t.corkedRequestsFree = a.next), (a.next = null))
                  : (t.corkedRequestsFree = new o(t)),
                (t.bufferedRequestCount = 0);
            } else {
              for (; r; ) {
                var c = r.chunk,
                  u = r.encoding,
                  d = r.callback;
                if (
                  (m(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
                  (r = r.next),
                  t.bufferedRequestCount--,
                  t.writing)
                )
                  break;
              }
              null === r && (t.lastBufferedRequest = null);
            }
            (t.bufferedRequest = r), (t.bufferProcessing = !1);
          }
          function _(e) {
            return (
              e.ending &&
              0 === e.length &&
              null === e.bufferedRequest &&
              !e.finished &&
              !e.writing
            );
          }
          function S(e, t) {
            e._final(function (r) {
              t.pendingcb--,
                r && e.emit("error", r),
                (t.prefinished = !0),
                e.emit("prefinish"),
                E(e, t);
            });
          }
          function E(e, t) {
            var r = _(t);
            return (
              r &&
                ((function (e, t) {
                  t.prefinished ||
                    t.finalCalled ||
                    ("function" == typeof e._final
                      ? (t.pendingcb++,
                        (t.finalCalled = !0),
                        i.nextTick(S, e, t))
                      : ((t.prefinished = !0), e.emit("prefinish")));
                })(e, t),
                0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
              r
            );
          }
          f.inherits(g, d),
            (y.prototype.getBuffer = function () {
              for (var e = this.bufferedRequest, t = []; e; )
                t.push(e), (e = e.next);
              return t;
            }),
            (function () {
              try {
                Object.defineProperty(y.prototype, "buffer", {
                  get: u.deprecate(
                    function () {
                      return this.getBuffer();
                    },
                    "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                    "DEP0003"
                  ),
                });
              } catch (e) {}
            })(),
            "function" == typeof Symbol &&
            Symbol.hasInstance &&
            "function" == typeof Function.prototype[Symbol.hasInstance]
              ? ((c = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(g, Symbol.hasInstance, {
                  value: function (e) {
                    return (
                      !!c.call(this, e) ||
                      (this === g && e && e._writableState instanceof y)
                    );
                  },
                }))
              : (c = function (e) {
                  return e instanceof this;
                }),
            (g.prototype.pipe = function () {
              this.emit("error", new Error("Cannot pipe, not readable"));
            }),
            (g.prototype.write = function (e, t, r) {
              var n,
                o = this._writableState,
                a = !1,
                s = !o.objectMode && ((n = e), h.isBuffer(n) || n instanceof l);
              return (
                s &&
                  !h.isBuffer(e) &&
                  (e = (function (e) {
                    return h.from(e);
                  })(e)),
                "function" == typeof t && ((r = t), (t = null)),
                s ? (t = "buffer") : t || (t = o.defaultEncoding),
                "function" != typeof r && (r = b),
                o.ended
                  ? (function (e, t) {
                      var r = new Error("write after end");
                      e.emit("error", r), i.nextTick(t, r);
                    })(this, r)
                  : (s ||
                      (function (e, t, r, n) {
                        var o = !0,
                          a = !1;
                        return (
                          null === r
                            ? (a = new TypeError(
                                "May not write null values to stream"
                              ))
                            : "string" == typeof r ||
                              void 0 === r ||
                              t.objectMode ||
                              (a = new TypeError(
                                "Invalid non-string/buffer chunk"
                              )),
                          a && (e.emit("error", a), i.nextTick(n, a), (o = !1)),
                          o
                        );
                      })(this, o, e, r)) &&
                    (o.pendingcb++,
                    (a = (function (e, t, r, n, i, o) {
                      if (!r) {
                        var a = (function (e, t, r) {
                          return (
                            e.objectMode ||
                              !1 === e.decodeStrings ||
                              "string" != typeof t ||
                              (t = h.from(t, r)),
                            t
                          );
                        })(t, n, i);
                        n !== a && ((r = !0), (i = "buffer"), (n = a));
                      }
                      var s = t.objectMode ? 1 : n.length;
                      t.length += s;
                      var f = t.length < t.highWaterMark;
                      if ((f || (t.needDrain = !0), t.writing || t.corked)) {
                        var c = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                          chunk: n,
                          encoding: i,
                          isBuf: r,
                          callback: o,
                          next: null,
                        }),
                          c
                            ? (c.next = t.lastBufferedRequest)
                            : (t.bufferedRequest = t.lastBufferedRequest),
                          (t.bufferedRequestCount += 1);
                      } else m(e, t, !1, s, n, i, o);
                      return f;
                    })(this, o, s, e, t, r))),
                a
              );
            }),
            (g.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (g.prototype.uncork = function () {
              var e = this._writableState;
              e.corked &&
                (e.corked--,
                e.writing ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  w(this, e));
            }),
            (g.prototype.setDefaultEncoding = function (e) {
              if (
                ("string" == typeof e && (e = e.toLowerCase()),
                !(
                  [
                    "hex",
                    "utf8",
                    "utf-8",
                    "ascii",
                    "binary",
                    "base64",
                    "ucs2",
                    "ucs-2",
                    "utf16le",
                    "utf-16le",
                    "raw",
                  ].indexOf((e + "").toLowerCase()) > -1
                ))
              )
                throw new TypeError("Unknown encoding: " + e);
              return (this._writableState.defaultEncoding = e), this;
            }),
            Object.defineProperty(g.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark;
              },
            }),
            (g.prototype._write = function (e, t, r) {
              r(new Error("_write() is not implemented"));
            }),
            (g.prototype._writev = null),
            (g.prototype.end = function (e, t, r) {
              var n = this._writableState;
              "function" == typeof e
                ? ((r = e), (e = null), (t = null))
                : "function" == typeof t && ((r = t), (t = null)),
                null != e && this.write(e, t),
                n.corked && ((n.corked = 1), this.uncork()),
                n.ending ||
                  (function (e, t, r) {
                    (t.ending = !0),
                      E(e, t),
                      r && (t.finished ? i.nextTick(r) : e.once("finish", r)),
                      (t.ended = !0),
                      (e.writable = !1);
                  })(this, n, r);
            }),
            Object.defineProperty(g.prototype, "destroyed", {
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                this._writableState && (this._writableState.destroyed = e);
              },
            }),
            (g.prototype.destroy = p.destroy),
            (g.prototype._undestroy = p.undestroy),
            (g.prototype._destroy = function (e, t) {
              this.end(), t(e);
            });
        },
        3339: (e, t, r) => {
          "use strict";
          var n = r(5094).Buffer,
            i = r(8009);
          (e.exports = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.head = null),
                (this.tail = null),
                (this.length = 0);
            }
            return (
              (e.prototype.push = function (e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              }),
              (e.prototype.unshift = function (e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              }),
              (e.prototype.shift = function () {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              }),
              (e.prototype.clear = function () {
                (this.head = this.tail = null), (this.length = 0);
              }),
              (e.prototype.join = function (e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              }),
              (e.prototype.concat = function (e) {
                if (0 === this.length) return n.alloc(0);
                for (
                  var t, r, i = n.allocUnsafe(e >>> 0), o = this.head, a = 0;
                  o;

                )
                  (t = i),
                    (r = a),
                    o.data.copy(t, r),
                    (a += o.data.length),
                    (o = o.next);
                return i;
              }),
              e
            );
          })()),
            i &&
              i.inspect &&
              i.inspect.custom &&
              (e.exports.prototype[i.inspect.custom] = function () {
                var e = i.inspect({ length: this.length });
                return this.constructor.name + " " + e;
              });
        },
        3080: (e, t, r) => {
          "use strict";
          var n = r(2072);
          function i(e, t) {
            e.emit("error", t);
          }
          e.exports = {
            destroy: function (e, t) {
              var r = this,
                o = this._readableState && this._readableState.destroyed,
                a = this._writableState && this._writableState.destroyed;
              return o || a
                ? (t
                    ? t(e)
                    : e &&
                      (this._writableState
                        ? this._writableState.errorEmitted ||
                          ((this._writableState.errorEmitted = !0),
                          n.nextTick(i, this, e))
                        : n.nextTick(i, this, e)),
                  this)
                : (this._readableState && (this._readableState.destroyed = !0),
                  this._writableState && (this._writableState.destroyed = !0),
                  this._destroy(e || null, function (e) {
                    !t && e
                      ? r._writableState
                        ? r._writableState.errorEmitted ||
                          ((r._writableState.errorEmitted = !0),
                          n.nextTick(i, r, e))
                        : n.nextTick(i, r, e)
                      : t && t(e);
                  }),
                  this);
            },
            undestroy: function () {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finalCalled = !1),
                  (this._writableState.prefinished = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1));
            },
          };
        },
        7855: (e, t, r) => {
          e.exports = r(7531).EventEmitter;
        },
        1182: (e, t, r) => {
          ((t = e.exports = r(9598)).Stream = t),
            (t.Readable = t),
            (t.Writable = r(3057)),
            (t.Duplex = r(3102)),
            (t.Transform = r(8703)),
            (t.PassThrough = r(836));
        },
        5094: (e, t, r) => {
          var n = r(5291),
            i = n.Buffer;
          function o(e, t) {
            for (var r in e) t[r] = e[r];
          }
          function a(e, t, r) {
            return i(e, t, r);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
            ? (e.exports = n)
            : (o(n, t), (t.Buffer = a)),
            o(i, a),
            (a.from = function (e, t, r) {
              if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
              return i(e, t, r);
            }),
            (a.alloc = function (e, t, r) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              var n = i(e);
              return (
                void 0 !== t
                  ? "string" == typeof r
                    ? n.fill(t, r)
                    : n.fill(t)
                  : n.fill(0),
                n
              );
            }),
            (a.allocUnsafe = function (e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return i(e);
            }),
            (a.allocUnsafeSlow = function (e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return n.SlowBuffer(e);
            });
        },
        6712: (e, t, r) => {
          "use strict";
          var n = r(5094).Buffer,
            i =
              n.isEncoding ||
              function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1;
                }
              };
          function o(e) {
            var t;
            switch (
              ((this.encoding = (function (e) {
                var t = (function (e) {
                  if (!e) return "utf8";
                  for (var t; ; )
                    switch (e) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return e;
                      default:
                        if (t) return;
                        (e = ("" + e).toLowerCase()), (t = !0);
                    }
                })(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                  throw new Error("Unknown encoding: " + e);
                return t || e;
              })(e)),
              this.encoding)
            ) {
              case "utf16le":
                (this.text = f), (this.end = c), (t = 4);
                break;
              case "utf8":
                (this.fillLast = s), (t = 4);
                break;
              case "base64":
                (this.text = u), (this.end = d), (t = 3);
                break;
              default:
                return (this.write = h), void (this.end = l);
            }
            (this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = n.allocUnsafe(t));
          }
          function a(e) {
            return e <= 127
              ? 0
              : e >> 5 == 6
              ? 2
              : e >> 4 == 14
              ? 3
              : e >> 3 == 30
              ? 4
              : e >> 6 == 2
              ? -1
              : -2;
          }
          function s(e) {
            var t = this.lastTotal - this.lastNeed,
              r = (function (e, t, r) {
                if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
                if (e.lastNeed > 1 && t.length > 1) {
                  if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
                  if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return (e.lastNeed = 2), "�";
                }
              })(this, e);
            return void 0 !== r
              ? r
              : this.lastNeed <= e.length
              ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : (e.copy(this.lastChar, t, 0, e.length),
                void (this.lastNeed -= e.length));
          }
          function f(e, t) {
            if ((e.length - t) % 2 == 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1]),
                    r.slice(0, -1)
                  );
              }
              return r;
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = e[e.length - 1]),
              e.toString("utf16le", t, e.length - 1)
            );
          }
          function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
          }
          function u(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r
              ? e.toString("base64", t)
              : ((this.lastNeed = 3 - r),
                (this.lastTotal = 3),
                1 === r
                  ? (this.lastChar[0] = e[e.length - 1])
                  : ((this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1])),
                e.toString("base64", t, e.length - r));
          }
          function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed
              ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
              : t;
          }
          function h(e) {
            return e.toString(this.encoding);
          }
          function l(e) {
            return e && e.length ? this.write(e) : "";
          }
          (t.s = o),
            (o.prototype.write = function (e) {
              if (0 === e.length) return "";
              var t, r;
              if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                (r = this.lastNeed), (this.lastNeed = 0);
              } else r = 0;
              return r < e.length
                ? t
                  ? t + this.text(e, r)
                  : this.text(e, r)
                : t || "";
            }),
            (o.prototype.end = function (e) {
              var t = e && e.length ? this.write(e) : "";
              return this.lastNeed ? t + "�" : t;
            }),
            (o.prototype.text = function (e, t) {
              var r = (function (e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = a(t[n]);
                return i >= 0
                  ? (i > 0 && (e.lastNeed = i - 1), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = a(t[n])) >= 0
                  ? (i > 0 && (e.lastNeed = i - 2), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = a(t[n])) >= 0
                  ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                  : 0;
              })(this, e, t);
              if (!this.lastNeed) return e.toString("utf8", t);
              this.lastTotal = r;
              var n = e.length - (r - this.lastNeed);
              return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
            }),
            (o.prototype.fillLast = function (e) {
              if (this.lastNeed <= e.length)
                return (
                  e.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                );
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                e.length
              ),
                (this.lastNeed -= e.length);
            });
        },
        1950: (e, t, r) => {
          var n = r(3158),
            i = r(1182).Transform,
            o = r(2019).inherits,
            a = r(8199);
          function s(e) {
            i.call(this, e), (this._destroyed = !1);
          }
          function f(e, t, r) {
            r(null, e);
          }
          function c(e) {
            return function (t, r, n) {
              return (
                "function" == typeof t && ((n = r), (r = t), (t = {})),
                "function" != typeof r && (r = f),
                "function" != typeof n && (n = null),
                e(t, r, n)
              );
            };
          }
          o(s, i),
            (s.prototype.destroy = function (e) {
              if (!this._destroyed) {
                this._destroyed = !0;
                var t = this;
                n.nextTick(function () {
                  e && t.emit("error", e), t.emit("close");
                });
              }
            }),
            (e.exports = c(function (e, t, r) {
              var n = new s(e);
              return (n._transform = t), r && (n._flush = r), n;
            })),
            (e.exports.ctor = c(function (e, t, r) {
              function n(t) {
                if (!(this instanceof n)) return new n(t);
                (this.options = a(e, t)), s.call(this, this.options);
              }
              return (
                o(n, s),
                (n.prototype._transform = t),
                r && (n.prototype._flush = r),
                n
              );
            })),
            (e.exports.obj = c(function (e, t, r) {
              var n = new s(a({ objectMode: !0, highWaterMark: 16 }, e));
              return (n._transform = t), r && (n._flush = r), n;
            }));
        },
        9381: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          const n = r(7531);
          function i(e, t, r) {
            try {
              Reflect.apply(e, t, r);
            } catch (e) {
              setTimeout(() => {
                throw e;
              });
            }
          }
          class o extends n.EventEmitter {
            emit(e, ...t) {
              let r = "error" === e;
              const n = this._events;
              if (void 0 !== n) r = r && void 0 === n.error;
              else if (!r) return !1;
              if (r) {
                let e;
                if ((t.length > 0 && ([e] = t), e instanceof Error)) throw e;
                const r = new Error(
                  "Unhandled error." + (e ? ` (${e.message})` : "")
                );
                throw ((r.context = e), r);
              }
              const o = n[e];
              if (void 0 === o) return !1;
              if ("function" == typeof o) i(o, this, t);
              else {
                const e = o.length,
                  r = (function (e) {
                    const t = e.length,
                      r = new Array(t);
                    for (let n = 0; n < t; n += 1) r[n] = e[n];
                    return r;
                  })(o);
                for (let n = 0; n < e; n += 1) i(r[n], this, t);
              }
              return !0;
            }
          }
          t.default = o;
        },
        7645: (e, t, r) => {
          "use strict";
          var n = r(5291).Buffer,
            i =
              (new (0, r(7919).ec)("secp256k1"),
              r.g.crypto || r.g.msCrypto || {}),
            o = i.subtle || i.webkitSubtle,
            a = r(3926);
          n.from(
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "hex"
          ),
            n.alloc(32, 0);
          function s(e) {
            return function (t, r, i) {
              return new Promise(function (s) {
                if (o)
                  return o
                    .importKey("raw", r, { name: "AES-CBC" }, !1, [e])
                    .then(function (r) {
                      var n = { name: "AES-CBC", iv: t };
                      return o[e](n, r, i);
                    })
                    .then(function (e) {
                      s(n.from(new Uint8Array(e)));
                    });
                if ("encrypt" === e) {
                  var f = a.createCipheriv("aes-256-cbc", r, t);
                  let e = f.update(i),
                    o = f.final();
                  s(n.concat([e, o]));
                } else if ("decrypt" === e) {
                  var c = a.createDecipheriv("aes-256-cbc", r, t);
                  let e = c.update(i),
                    o = c.final();
                  s(n.concat([e, o]));
                }
              });
            };
          }
          s("encrypt"), s("decrypt");
        },
        8651: (e) => {
          "use strict";
          const t = (e) =>
            null !== e && "object" == typeof e && "function" == typeof e.pipe;
          (t.writable = (e) =>
            t(e) &&
            !1 !== e.writable &&
            "function" == typeof e._write &&
            "object" == typeof e._writableState),
            (t.readable = (e) =>
              t(e) &&
              !1 !== e.readable &&
              "function" == typeof e._read &&
              "object" == typeof e._readableState),
            (t.duplex = (e) => t.writable(e) && t.readable(e)),
            (t.transform = (e) =>
              t.duplex(e) && "function" == typeof e._transform),
            (e.exports = t);
        },
        74: (e, t, r) => {
          "use strict";
          const n = t;
          (n.bignum = r(2693)),
            (n.define = r(5805).define),
            (n.base = r(1015)),
            (n.constants = r(18)),
            (n.decoders = r(1497)),
            (n.encoders = r(5189));
        },
        5805: (e, t, r) => {
          "use strict";
          const n = r(5189),
            i = r(1497),
            o = r(2111);
          function a(e, t) {
            (this.name = e),
              (this.body = t),
              (this.decoders = {}),
              (this.encoders = {});
          }
          (t.define = function (e, t) {
            return new a(e, t);
          }),
            (a.prototype._createNamed = function (e) {
              const t = this.name;
              function r(e) {
                this._initNamed(e, t);
              }
              return (
                o(r, e),
                (r.prototype._initNamed = function (t, r) {
                  e.call(this, t, r);
                }),
                new r(this)
              );
            }),
            (a.prototype._getDecoder = function (e) {
              return (
                (e = e || "der"),
                this.decoders.hasOwnProperty(e) ||
                  (this.decoders[e] = this._createNamed(i[e])),
                this.decoders[e]
              );
            }),
            (a.prototype.decode = function (e, t, r) {
              return this._getDecoder(t).decode(e, r);
            }),
            (a.prototype._getEncoder = function (e) {
              return (
                (e = e || "der"),
                this.encoders.hasOwnProperty(e) ||
                  (this.encoders[e] = this._createNamed(n[e])),
                this.encoders[e]
              );
            }),
            (a.prototype.encode = function (e, t, r) {
              return this._getEncoder(t).encode(e, r);
            });
        },
        6091: (e, t, r) => {
          "use strict";
          const n = r(2111),
            i = r(7181).b,
            o = r(3327).Buffer;
          function a(e, t) {
            i.call(this, t),
              o.isBuffer(e)
                ? ((this.base = e), (this.offset = 0), (this.length = e.length))
                : this.error("Input not Buffer");
          }
          function s(e, t) {
            if (Array.isArray(e))
              (this.length = 0),
                (this.value = e.map(function (e) {
                  return (
                    s.isEncoderBuffer(e) || (e = new s(e, t)),
                    (this.length += e.length),
                    e
                  );
                }, this));
            else if ("number" == typeof e) {
              if (!(0 <= e && e <= 255))
                return t.error("non-byte EncoderBuffer value");
              (this.value = e), (this.length = 1);
            } else if ("string" == typeof e)
              (this.value = e), (this.length = o.byteLength(e));
            else {
              if (!o.isBuffer(e))
                return t.error("Unsupported type: " + typeof e);
              (this.value = e), (this.length = e.length);
            }
          }
          n(a, i),
            (t.C = a),
            (a.isDecoderBuffer = function (e) {
              return (
                e instanceof a ||
                ("object" == typeof e &&
                  o.isBuffer(e.base) &&
                  "DecoderBuffer" === e.constructor.name &&
                  "number" == typeof e.offset &&
                  "number" == typeof e.length &&
                  "function" == typeof e.save &&
                  "function" == typeof e.restore &&
                  "function" == typeof e.isEmpty &&
                  "function" == typeof e.readUInt8 &&
                  "function" == typeof e.skip &&
                  "function" == typeof e.raw)
              );
            }),
            (a.prototype.save = function () {
              return {
                offset: this.offset,
                reporter: i.prototype.save.call(this),
              };
            }),
            (a.prototype.restore = function (e) {
              const t = new a(this.base);
              return (
                (t.offset = e.offset),
                (t.length = this.offset),
                (this.offset = e.offset),
                i.prototype.restore.call(this, e.reporter),
                t
              );
            }),
            (a.prototype.isEmpty = function () {
              return this.offset === this.length;
            }),
            (a.prototype.readUInt8 = function (e) {
              return this.offset + 1 <= this.length
                ? this.base.readUInt8(this.offset++, !0)
                : this.error(e || "DecoderBuffer overrun");
            }),
            (a.prototype.skip = function (e, t) {
              if (!(this.offset + e <= this.length))
                return this.error(t || "DecoderBuffer overrun");
              const r = new a(this.base);
              return (
                (r._reporterState = this._reporterState),
                (r.offset = this.offset),
                (r.length = this.offset + e),
                (this.offset += e),
                r
              );
            }),
            (a.prototype.raw = function (e) {
              return this.base.slice(e ? e.offset : this.offset, this.length);
            }),
            (t.R = s),
            (s.isEncoderBuffer = function (e) {
              return (
                e instanceof s ||
                ("object" == typeof e &&
                  "EncoderBuffer" === e.constructor.name &&
                  "number" == typeof e.length &&
                  "function" == typeof e.join)
              );
            }),
            (s.prototype.join = function (e, t) {
              return (
                e || (e = o.alloc(this.length)),
                t || (t = 0),
                0 === this.length ||
                  (Array.isArray(this.value)
                    ? this.value.forEach(function (r) {
                        r.join(e, t), (t += r.length);
                      })
                    : ("number" == typeof this.value
                        ? (e[t] = this.value)
                        : "string" == typeof this.value
                        ? e.write(this.value, t)
                        : o.isBuffer(this.value) && this.value.copy(e, t),
                      (t += this.length))),
                e
              );
            });
        },
        1015: (e, t, r) => {
          "use strict";
          const n = t;
          (n.Reporter = r(7181).b),
            (n.DecoderBuffer = r(6091).C),
            (n.EncoderBuffer = r(6091).R),
            (n.Node = r(7762));
        },
        7762: (e, t, r) => {
          "use strict";
          const n = r(7181).b,
            i = r(6091).R,
            o = r(6091).C,
            a = r(882),
            s = [
              "seq",
              "seqof",
              "set",
              "setof",
              "objid",
              "bool",
              "gentime",
              "utctime",
              "null_",
              "enum",
              "int",
              "objDesc",
              "bitstr",
              "bmpstr",
              "charstr",
              "genstr",
              "graphstr",
              "ia5str",
              "iso646str",
              "numstr",
              "octstr",
              "printstr",
              "t61str",
              "unistr",
              "utf8str",
              "videostr",
            ],
            f = [
              "key",
              "obj",
              "use",
              "optional",
              "explicit",
              "implicit",
              "def",
              "choice",
              "any",
              "contains",
            ].concat(s);
          function c(e, t, r) {
            const n = {};
            (this._baseState = n),
              (n.name = r),
              (n.enc = e),
              (n.parent = t || null),
              (n.children = null),
              (n.tag = null),
              (n.args = null),
              (n.reverseArgs = null),
              (n.choice = null),
              (n.optional = !1),
              (n.any = !1),
              (n.obj = !1),
              (n.use = null),
              (n.useDecoder = null),
              (n.key = null),
              (n.default = null),
              (n.explicit = null),
              (n.implicit = null),
              (n.contains = null),
              n.parent || ((n.children = []), this._wrap());
          }
          e.exports = c;
          const u = [
            "enc",
            "parent",
            "children",
            "tag",
            "args",
            "reverseArgs",
            "choice",
            "optional",
            "any",
            "obj",
            "use",
            "alteredUse",
            "key",
            "default",
            "explicit",
            "implicit",
            "contains",
          ];
          (c.prototype.clone = function () {
            const e = this._baseState,
              t = {};
            u.forEach(function (r) {
              t[r] = e[r];
            });
            const r = new this.constructor(t.parent);
            return (r._baseState = t), r;
          }),
            (c.prototype._wrap = function () {
              const e = this._baseState;
              f.forEach(function (t) {
                this[t] = function () {
                  const r = new this.constructor(this);
                  return e.children.push(r), r[t].apply(r, arguments);
                };
              }, this);
            }),
            (c.prototype._init = function (e) {
              const t = this._baseState;
              a(null === t.parent),
                e.call(this),
                (t.children = t.children.filter(function (e) {
                  return e._baseState.parent === this;
                }, this)),
                a.equal(
                  t.children.length,
                  1,
                  "Root node can have only one child"
                );
            }),
            (c.prototype._useArgs = function (e) {
              const t = this._baseState,
                r = e.filter(function (e) {
                  return e instanceof this.constructor;
                }, this);
              (e = e.filter(function (e) {
                return !(e instanceof this.constructor);
              }, this)),
                0 !== r.length &&
                  (a(null === t.children),
                  (t.children = r),
                  r.forEach(function (e) {
                    e._baseState.parent = this;
                  }, this)),
                0 !== e.length &&
                  (a(null === t.args),
                  (t.args = e),
                  (t.reverseArgs = e.map(function (e) {
                    if ("object" != typeof e || e.constructor !== Object)
                      return e;
                    const t = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        r == (0 | r) && (r |= 0);
                        const n = e[r];
                        t[n] = r;
                      }),
                      t
                    );
                  })));
            }),
            [
              "_peekTag",
              "_decodeTag",
              "_use",
              "_decodeStr",
              "_decodeObjid",
              "_decodeTime",
              "_decodeNull",
              "_decodeInt",
              "_decodeBool",
              "_decodeList",
              "_encodeComposite",
              "_encodeStr",
              "_encodeObjid",
              "_encodeTime",
              "_encodeNull",
              "_encodeInt",
              "_encodeBool",
            ].forEach(function (e) {
              c.prototype[e] = function () {
                const t = this._baseState;
                throw new Error(e + " not implemented for encoding: " + t.enc);
              };
            }),
            s.forEach(function (e) {
              c.prototype[e] = function () {
                const t = this._baseState,
                  r = Array.prototype.slice.call(arguments);
                return a(null === t.tag), (t.tag = e), this._useArgs(r), this;
              };
            }),
            (c.prototype.use = function (e) {
              a(e);
              const t = this._baseState;
              return a(null === t.use), (t.use = e), this;
            }),
            (c.prototype.optional = function () {
              return (this._baseState.optional = !0), this;
            }),
            (c.prototype.def = function (e) {
              const t = this._baseState;
              return (
                a(null === t.default), (t.default = e), (t.optional = !0), this
              );
            }),
            (c.prototype.explicit = function (e) {
              const t = this._baseState;
              return (
                a(null === t.explicit && null === t.implicit),
                (t.explicit = e),
                this
              );
            }),
            (c.prototype.implicit = function (e) {
              const t = this._baseState;
              return (
                a(null === t.explicit && null === t.implicit),
                (t.implicit = e),
                this
              );
            }),
            (c.prototype.obj = function () {
              const e = this._baseState,
                t = Array.prototype.slice.call(arguments);
              return (e.obj = !0), 0 !== t.length && this._useArgs(t), this;
            }),
            (c.prototype.key = function (e) {
              const t = this._baseState;
              return a(null === t.key), (t.key = e), this;
            }),
            (c.prototype.any = function () {
              return (this._baseState.any = !0), this;
            }),
            (c.prototype.choice = function (e) {
              const t = this._baseState;
              return (
                a(null === t.choice),
                (t.choice = e),
                this._useArgs(
                  Object.keys(e).map(function (t) {
                    return e[t];
                  })
                ),
                this
              );
            }),
            (c.prototype.contains = function (e) {
              const t = this._baseState;
              return a(null === t.use), (t.contains = e), this;
            }),
            (c.prototype._decode = function (e, t) {
              const r = this._baseState;
              if (null === r.parent)
                return e.wrapResult(r.children[0]._decode(e, t));
              let n,
                i = r.default,
                a = !0,
                s = null;
              if ((null !== r.key && (s = e.enterKey(r.key)), r.optional)) {
                let n = null;
                if (
                  (null !== r.explicit
                    ? (n = r.explicit)
                    : null !== r.implicit
                    ? (n = r.implicit)
                    : null !== r.tag && (n = r.tag),
                  null !== n || r.any)
                ) {
                  if (((a = this._peekTag(e, n, r.any)), e.isError(a)))
                    return a;
                } else {
                  const n = e.save();
                  try {
                    null === r.choice
                      ? this._decodeGeneric(r.tag, e, t)
                      : this._decodeChoice(e, t),
                      (a = !0);
                  } catch (e) {
                    a = !1;
                  }
                  e.restore(n);
                }
              }
              if ((r.obj && a && (n = e.enterObject()), a)) {
                if (null !== r.explicit) {
                  const t = this._decodeTag(e, r.explicit);
                  if (e.isError(t)) return t;
                  e = t;
                }
                const n = e.offset;
                if (null === r.use && null === r.choice) {
                  let t;
                  r.any && (t = e.save());
                  const n = this._decodeTag(
                    e,
                    null !== r.implicit ? r.implicit : r.tag,
                    r.any
                  );
                  if (e.isError(n)) return n;
                  r.any ? (i = e.raw(t)) : (e = n);
                }
                if (
                  (t &&
                    t.track &&
                    null !== r.tag &&
                    t.track(e.path(), n, e.length, "tagged"),
                  t &&
                    t.track &&
                    null !== r.tag &&
                    t.track(e.path(), e.offset, e.length, "content"),
                  r.any ||
                    (i =
                      null === r.choice
                        ? this._decodeGeneric(r.tag, e, t)
                        : this._decodeChoice(e, t)),
                  e.isError(i))
                )
                  return i;
                if (
                  (r.any ||
                    null !== r.choice ||
                    null === r.children ||
                    r.children.forEach(function (r) {
                      r._decode(e, t);
                    }),
                  r.contains && ("octstr" === r.tag || "bitstr" === r.tag))
                ) {
                  const n = new o(i);
                  i = this._getUse(r.contains, e._reporterState.obj)._decode(
                    n,
                    t
                  );
                }
              }
              return (
                r.obj && a && (i = e.leaveObject(n)),
                null === r.key || (null === i && !0 !== a)
                  ? null !== s && e.exitKey(s)
                  : e.leaveKey(s, r.key, i),
                i
              );
            }),
            (c.prototype._decodeGeneric = function (e, t, r) {
              const n = this._baseState;
              return "seq" === e || "set" === e
                ? null
                : "seqof" === e || "setof" === e
                ? this._decodeList(t, e, n.args[0], r)
                : /str$/.test(e)
                ? this._decodeStr(t, e, r)
                : "objid" === e && n.args
                ? this._decodeObjid(t, n.args[0], n.args[1], r)
                : "objid" === e
                ? this._decodeObjid(t, null, null, r)
                : "gentime" === e || "utctime" === e
                ? this._decodeTime(t, e, r)
                : "null_" === e
                ? this._decodeNull(t, r)
                : "bool" === e
                ? this._decodeBool(t, r)
                : "objDesc" === e
                ? this._decodeStr(t, e, r)
                : "int" === e || "enum" === e
                ? this._decodeInt(t, n.args && n.args[0], r)
                : null !== n.use
                ? this._getUse(n.use, t._reporterState.obj)._decode(t, r)
                : t.error("unknown tag: " + e);
            }),
            (c.prototype._getUse = function (e, t) {
              const r = this._baseState;
              return (
                (r.useDecoder = this._use(e, t)),
                a(null === r.useDecoder._baseState.parent),
                (r.useDecoder = r.useDecoder._baseState.children[0]),
                r.implicit !== r.useDecoder._baseState.implicit &&
                  ((r.useDecoder = r.useDecoder.clone()),
                  (r.useDecoder._baseState.implicit = r.implicit)),
                r.useDecoder
              );
            }),
            (c.prototype._decodeChoice = function (e, t) {
              const r = this._baseState;
              let n = null,
                i = !1;
              return (
                Object.keys(r.choice).some(function (o) {
                  const a = e.save(),
                    s = r.choice[o];
                  try {
                    const r = s._decode(e, t);
                    if (e.isError(r)) return !1;
                    (n = { type: o, value: r }), (i = !0);
                  } catch (t) {
                    return e.restore(a), !1;
                  }
                  return !0;
                }, this),
                i ? n : e.error("Choice not matched")
              );
            }),
            (c.prototype._createEncoderBuffer = function (e) {
              return new i(e, this.reporter);
            }),
            (c.prototype._encode = function (e, t, r) {
              const n = this._baseState;
              if (null !== n.default && n.default === e) return;
              const i = this._encodeValue(e, t, r);
              return void 0 === i || this._skipDefault(i, t, r) ? void 0 : i;
            }),
            (c.prototype._encodeValue = function (e, t, r) {
              const i = this._baseState;
              if (null === i.parent)
                return i.children[0]._encode(e, t || new n());
              let o = null;
              if (((this.reporter = t), i.optional && void 0 === e)) {
                if (null === i.default) return;
                e = i.default;
              }
              let a = null,
                s = !1;
              if (i.any) o = this._createEncoderBuffer(e);
              else if (i.choice) o = this._encodeChoice(e, t);
              else if (i.contains)
                (a = this._getUse(i.contains, r)._encode(e, t)), (s = !0);
              else if (i.children)
                (a = i.children
                  .map(function (r) {
                    if ("null_" === r._baseState.tag)
                      return r._encode(null, t, e);
                    if (null === r._baseState.key)
                      return t.error("Child should have a key");
                    const n = t.enterKey(r._baseState.key);
                    if ("object" != typeof e)
                      return t.error("Child expected, but input is not object");
                    const i = r._encode(e[r._baseState.key], t, e);
                    return t.leaveKey(n), i;
                  }, this)
                  .filter(function (e) {
                    return e;
                  })),
                  (a = this._createEncoderBuffer(a));
              else if ("seqof" === i.tag || "setof" === i.tag) {
                if (!i.args || 1 !== i.args.length)
                  return t.error("Too many args for : " + i.tag);
                if (!Array.isArray(e))
                  return t.error("seqof/setof, but data is not Array");
                const r = this.clone();
                (r._baseState.implicit = null),
                  (a = this._createEncoderBuffer(
                    e.map(function (r) {
                      const n = this._baseState;
                      return this._getUse(n.args[0], e)._encode(r, t);
                    }, r)
                  ));
              } else
                null !== i.use
                  ? (o = this._getUse(i.use, r)._encode(e, t))
                  : ((a = this._encodePrimitive(i.tag, e)), (s = !0));
              if (!i.any && null === i.choice) {
                const e = null !== i.implicit ? i.implicit : i.tag,
                  r = null === i.implicit ? "universal" : "context";
                null === e
                  ? null === i.use &&
                    t.error("Tag could be omitted only for .use()")
                  : null === i.use && (o = this._encodeComposite(e, s, r, a));
              }
              return (
                null !== i.explicit &&
                  (o = this._encodeComposite(i.explicit, !1, "context", o)),
                o
              );
            }),
            (c.prototype._encodeChoice = function (e, t) {
              const r = this._baseState,
                n = r.choice[e.type];
              return (
                n ||
                  a(
                    !1,
                    e.type +
                      " not found in " +
                      JSON.stringify(Object.keys(r.choice))
                  ),
                n._encode(e.value, t)
              );
            }),
            (c.prototype._encodePrimitive = function (e, t) {
              const r = this._baseState;
              if (/str$/.test(e)) return this._encodeStr(t, e);
              if ("objid" === e && r.args)
                return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
              if ("objid" === e) return this._encodeObjid(t, null, null);
              if ("gentime" === e || "utctime" === e)
                return this._encodeTime(t, e);
              if ("null_" === e) return this._encodeNull();
              if ("int" === e || "enum" === e)
                return this._encodeInt(t, r.args && r.reverseArgs[0]);
              if ("bool" === e) return this._encodeBool(t);
              if ("objDesc" === e) return this._encodeStr(t, e);
              throw new Error("Unsupported tag: " + e);
            }),
            (c.prototype._isNumstr = function (e) {
              return /^[0-9 ]*$/.test(e);
            }),
            (c.prototype._isPrintstr = function (e) {
              return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(e);
            });
        },
        7181: (e, t, r) => {
          "use strict";
          const n = r(2111);
          function i(e) {
            this._reporterState = {
              obj: null,
              path: [],
              options: e || {},
              errors: [],
            };
          }
          function o(e, t) {
            (this.path = e), this.rethrow(t);
          }
          (t.b = i),
            (i.prototype.isError = function (e) {
              return e instanceof o;
            }),
            (i.prototype.save = function () {
              const e = this._reporterState;
              return { obj: e.obj, pathLen: e.path.length };
            }),
            (i.prototype.restore = function (e) {
              const t = this._reporterState;
              (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
            }),
            (i.prototype.enterKey = function (e) {
              return this._reporterState.path.push(e);
            }),
            (i.prototype.exitKey = function (e) {
              const t = this._reporterState;
              t.path = t.path.slice(0, e - 1);
            }),
            (i.prototype.leaveKey = function (e, t, r) {
              const n = this._reporterState;
              this.exitKey(e), null !== n.obj && (n.obj[t] = r);
            }),
            (i.prototype.path = function () {
              return this._reporterState.path.join("/");
            }),
            (i.prototype.enterObject = function () {
              const e = this._reporterState,
                t = e.obj;
              return (e.obj = {}), t;
            }),
            (i.prototype.leaveObject = function (e) {
              const t = this._reporterState,
                r = t.obj;
              return (t.obj = e), r;
            }),
            (i.prototype.error = function (e) {
              let t;
              const r = this._reporterState,
                n = e instanceof o;
              if (
                ((t = n
                  ? e
                  : new o(
                      r.path
                        .map(function (e) {
                          return "[" + JSON.stringify(e) + "]";
                        })
                        .join(""),
                      e.message || e,
                      e.stack
                    )),
                !r.options.partial)
              )
                throw t;
              return n || r.errors.push(t), t;
            }),
            (i.prototype.wrapResult = function (e) {
              const t = this._reporterState;
              return t.options.partial
                ? { result: this.isError(e) ? null : e, errors: t.errors }
                : e;
            }),
            n(o, Error),
            (o.prototype.rethrow = function (e) {
              if (
                ((this.message = e + " at: " + (this.path || "(shallow)")),
                Error.captureStackTrace && Error.captureStackTrace(this, o),
                !this.stack)
              )
                try {
                  throw new Error(this.message);
                } catch (e) {
                  this.stack = e.stack;
                }
              return this;
            });
        },
        1065: (e, t) => {
          "use strict";
          function r(e) {
            const t = {};
            return (
              Object.keys(e).forEach(function (r) {
                (0 | r) == r && (r |= 0);
                const n = e[r];
                t[n] = r;
              }),
              t
            );
          }
          (t.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private",
          }),
            (t.tagClassByName = r(t.tagClass)),
            (t.tag = {
              0: "end",
              1: "bool",
              2: "int",
              3: "bitstr",
              4: "octstr",
              5: "null_",
              6: "objid",
              7: "objDesc",
              8: "external",
              9: "real",
              10: "enum",
              11: "embed",
              12: "utf8str",
              13: "relativeOid",
              16: "seq",
              17: "set",
              18: "numstr",
              19: "printstr",
              20: "t61str",
              21: "videostr",
              22: "ia5str",
              23: "utctime",
              24: "gentime",
              25: "graphstr",
              26: "iso646str",
              27: "genstr",
              28: "unistr",
              29: "charstr",
              30: "bmpstr",
            }),
            (t.tagByName = r(t.tag));
        },
        18: (e, t, r) => {
          "use strict";
          const n = t;
          (n._reverse = function (e) {
            const t = {};
            return (
              Object.keys(e).forEach(function (r) {
                (0 | r) == r && (r |= 0);
                const n = e[r];
                t[n] = r;
              }),
              t
            );
          }),
            (n.der = r(1065));
        },
        4716: (e, t, r) => {
          "use strict";
          const n = r(2111),
            i = r(2693),
            o = r(6091).C,
            a = r(7762),
            s = r(1065);
          function f(e) {
            (this.enc = "der"),
              (this.name = e.name),
              (this.entity = e),
              (this.tree = new c()),
              this.tree._init(e.body);
          }
          function c(e) {
            a.call(this, "der", e);
          }
          function u(e, t) {
            let r = e.readUInt8(t);
            if (e.isError(r)) return r;
            const n = s.tagClass[r >> 6],
              i = 0 == (32 & r);
            if (31 == (31 & r)) {
              let n = r;
              for (r = 0; 128 == (128 & n); ) {
                if (((n = e.readUInt8(t)), e.isError(n))) return n;
                (r <<= 7), (r |= 127 & n);
              }
            } else r &= 31;
            return { cls: n, primitive: i, tag: r, tagStr: s.tag[r] };
          }
          function d(e, t, r) {
            let n = e.readUInt8(r);
            if (e.isError(n)) return n;
            if (!t && 128 === n) return null;
            if (0 == (128 & n)) return n;
            const i = 127 & n;
            if (i > 4) return e.error("length octect is too long");
            n = 0;
            for (let t = 0; t < i; t++) {
              n <<= 8;
              const t = e.readUInt8(r);
              if (e.isError(t)) return t;
              n |= t;
            }
            return n;
          }
          (e.exports = f),
            (f.prototype.decode = function (e, t) {
              return (
                o.isDecoderBuffer(e) || (e = new o(e, t)),
                this.tree._decode(e, t)
              );
            }),
            n(c, a),
            (c.prototype._peekTag = function (e, t, r) {
              if (e.isEmpty()) return !1;
              const n = e.save(),
                i = u(e, 'Failed to peek tag: "' + t + '"');
              return e.isError(i)
                ? i
                : (e.restore(n),
                  i.tag === t || i.tagStr === t || i.tagStr + "of" === t || r);
            }),
            (c.prototype._decodeTag = function (e, t, r) {
              const n = u(e, 'Failed to decode tag of "' + t + '"');
              if (e.isError(n)) return n;
              let i = d(e, n.primitive, 'Failed to get length of "' + t + '"');
              if (e.isError(i)) return i;
              if (!r && n.tag !== t && n.tagStr !== t && n.tagStr + "of" !== t)
                return e.error('Failed to match tag: "' + t + '"');
              if (n.primitive || null !== i)
                return e.skip(i, 'Failed to match body of: "' + t + '"');
              const o = e.save(),
                a = this._skipUntilEnd(
                  e,
                  'Failed to skip indefinite length body: "' + this.tag + '"'
                );
              return e.isError(a)
                ? a
                : ((i = e.offset - o.offset),
                  e.restore(o),
                  e.skip(i, 'Failed to match body of: "' + t + '"'));
            }),
            (c.prototype._skipUntilEnd = function (e, t) {
              for (;;) {
                const r = u(e, t);
                if (e.isError(r)) return r;
                const n = d(e, r.primitive, t);
                if (e.isError(n)) return n;
                let i;
                if (
                  ((i =
                    r.primitive || null !== n
                      ? e.skip(n)
                      : this._skipUntilEnd(e, t)),
                  e.isError(i))
                )
                  return i;
                if ("end" === r.tagStr) break;
              }
            }),
            (c.prototype._decodeList = function (e, t, r, n) {
              const i = [];
              for (; !e.isEmpty(); ) {
                const t = this._peekTag(e, "end");
                if (e.isError(t)) return t;
                const o = r.decode(e, "der", n);
                if (e.isError(o) && t) break;
                i.push(o);
              }
              return i;
            }),
            (c.prototype._decodeStr = function (e, t) {
              if ("bitstr" === t) {
                const t = e.readUInt8();
                return e.isError(t) ? t : { unused: t, data: e.raw() };
              }
              if ("bmpstr" === t) {
                const t = e.raw();
                if (t.length % 2 == 1)
                  return e.error(
                    "Decoding of string type: bmpstr length mismatch"
                  );
                let r = "";
                for (let e = 0; e < t.length / 2; e++)
                  r += String.fromCharCode(t.readUInt16BE(2 * e));
                return r;
              }
              if ("numstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isNumstr(t)
                  ? t
                  : e.error(
                      "Decoding of string type: numstr unsupported characters"
                    );
              }
              if ("octstr" === t) return e.raw();
              if ("objDesc" === t) return e.raw();
              if ("printstr" === t) {
                const t = e.raw().toString("ascii");
                return this._isPrintstr(t)
                  ? t
                  : e.error(
                      "Decoding of string type: printstr unsupported characters"
                    );
              }
              return /str$/.test(t)
                ? e.raw().toString()
                : e.error("Decoding of string type: " + t + " unsupported");
            }),
            (c.prototype._decodeObjid = function (e, t, r) {
              let n;
              const i = [];
              let o = 0,
                a = 0;
              for (; !e.isEmpty(); )
                (a = e.readUInt8()),
                  (o <<= 7),
                  (o |= 127 & a),
                  0 == (128 & a) && (i.push(o), (o = 0));
              128 & a && i.push(o);
              const s = (i[0] / 40) | 0,
                f = i[0] % 40;
              if (((n = r ? i : [s, f].concat(i.slice(1))), t)) {
                let e = t[n.join(" ")];
                void 0 === e && (e = t[n.join(".")]), void 0 !== e && (n = e);
              }
              return n;
            }),
            (c.prototype._decodeTime = function (e, t) {
              const r = e.raw().toString();
              let n, i, o, a, s, f;
              if ("gentime" === t)
                (n = 0 | r.slice(0, 4)),
                  (i = 0 | r.slice(4, 6)),
                  (o = 0 | r.slice(6, 8)),
                  (a = 0 | r.slice(8, 10)),
                  (s = 0 | r.slice(10, 12)),
                  (f = 0 | r.slice(12, 14));
              else {
                if ("utctime" !== t)
                  return e.error(
                    "Decoding " + t + " time is not supported yet"
                  );
                (n = 0 | r.slice(0, 2)),
                  (i = 0 | r.slice(2, 4)),
                  (o = 0 | r.slice(4, 6)),
                  (a = 0 | r.slice(6, 8)),
                  (s = 0 | r.slice(8, 10)),
                  (f = 0 | r.slice(10, 12)),
                  (n = n < 70 ? 2e3 + n : 1900 + n);
              }
              return Date.UTC(n, i - 1, o, a, s, f, 0);
            }),
            (c.prototype._decodeNull = function () {
              return null;
            }),
            (c.prototype._decodeBool = function (e) {
              const t = e.readUInt8();
              return e.isError(t) ? t : 0 !== t;
            }),
            (c.prototype._decodeInt = function (e, t) {
              const r = e.raw();
              let n = new i(r);
              return t && (n = t[n.toString(10)] || n), n;
            }),
            (c.prototype._use = function (e, t) {
              return (
                "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
              );
            });
        },
        1497: (e, t, r) => {
          "use strict";
          const n = t;
          (n.der = r(4716)), (n.pem = r(4334));
        },
        4334: (e, t, r) => {
          "use strict";
          const n = r(2111),
            i = r(3327).Buffer,
            o = r(4716);
          function a(e) {
            o.call(this, e), (this.enc = "pem");
          }
          n(a, o),
            (e.exports = a),
            (a.prototype.decode = function (e, t) {
              const r = e.toString().split(/[\r\n]+/g),
                n = t.label.toUpperCase(),
                a = /^-----(BEGIN|END) ([^-]+)-----$/;
              let s = -1,
                f = -1;
              for (let e = 0; e < r.length; e++) {
                const t = r[e].match(a);
                if (null !== t && t[2] === n) {
                  if (-1 !== s) {
                    if ("END" !== t[1]) break;
                    f = e;
                    break;
                  }
                  if ("BEGIN" !== t[1]) break;
                  s = e;
                }
              }
              if (-1 === s || -1 === f)
                throw new Error("PEM section not found for: " + n);
              const c = r.slice(s + 1, f).join("");
              c.replace(/[^a-z0-9+/=]+/gi, "");
              const u = i.from(c, "base64");
              return o.prototype.decode.call(this, u, t);
            });
        },
        4563: (e, t, r) => {
          "use strict";
          const n = r(2111),
            i = r(3327).Buffer,
            o = r(7762),
            a = r(1065);
          function s(e) {
            (this.enc = "der"),
              (this.name = e.name),
              (this.entity = e),
              (this.tree = new f()),
              this.tree._init(e.body);
          }
          function f(e) {
            o.call(this, "der", e);
          }
          function c(e) {
            return e < 10 ? "0" + e : e;
          }
          (e.exports = s),
            (s.prototype.encode = function (e, t) {
              return this.tree._encode(e, t).join();
            }),
            n(f, o),
            (f.prototype._encodeComposite = function (e, t, r, n) {
              const o = (function (e, t, r, n) {
                let i;
                if (
                  ("seqof" === e ? (e = "seq") : "setof" === e && (e = "set"),
                  a.tagByName.hasOwnProperty(e))
                )
                  i = a.tagByName[e];
                else {
                  if ("number" != typeof e || (0 | e) !== e)
                    return n.error("Unknown tag: " + e);
                  i = e;
                }
                return i >= 31
                  ? n.error("Multi-octet tag encoding unsupported")
                  : (t || (i |= 32),
                    (i |= a.tagClassByName[r || "universal"] << 6),
                    i);
              })(e, t, r, this.reporter);
              if (n.length < 128) {
                const e = i.alloc(2);
                return (
                  (e[0] = o),
                  (e[1] = n.length),
                  this._createEncoderBuffer([e, n])
                );
              }
              let s = 1;
              for (let e = n.length; e >= 256; e >>= 8) s++;
              const f = i.alloc(2 + s);
              (f[0] = o), (f[1] = 128 | s);
              for (let e = 1 + s, t = n.length; t > 0; e--, t >>= 8)
                f[e] = 255 & t;
              return this._createEncoderBuffer([f, n]);
            }),
            (f.prototype._encodeStr = function (e, t) {
              if ("bitstr" === t)
                return this._createEncoderBuffer([0 | e.unused, e.data]);
              if ("bmpstr" === t) {
                const t = i.alloc(2 * e.length);
                for (let r = 0; r < e.length; r++)
                  t.writeUInt16BE(e.charCodeAt(r), 2 * r);
                return this._createEncoderBuffer(t);
              }
              return "numstr" === t
                ? this._isNumstr(e)
                  ? this._createEncoderBuffer(e)
                  : this.reporter.error(
                      "Encoding of string type: numstr supports only digits and space"
                    )
                : "printstr" === t
                ? this._isPrintstr(e)
                  ? this._createEncoderBuffer(e)
                  : this.reporter.error(
                      "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
                    )
                : /str$/.test(t) || "objDesc" === t
                ? this._createEncoderBuffer(e)
                : this.reporter.error(
                    "Encoding of string type: " + t + " unsupported"
                  );
            }),
            (f.prototype._encodeObjid = function (e, t, r) {
              if ("string" == typeof e) {
                if (!t)
                  return this.reporter.error(
                    "string objid given, but no values map found"
                  );
                if (!t.hasOwnProperty(e))
                  return this.reporter.error("objid not found in values map");
                e = t[e].split(/[\s.]+/g);
                for (let t = 0; t < e.length; t++) e[t] |= 0;
              } else if (Array.isArray(e)) {
                e = e.slice();
                for (let t = 0; t < e.length; t++) e[t] |= 0;
              }
              if (!Array.isArray(e))
                return this.reporter.error(
                  "objid() should be either array or string, got: " +
                    JSON.stringify(e)
                );
              if (!r) {
                if (e[1] >= 40)
                  return this.reporter.error("Second objid identifier OOB");
                e.splice(0, 2, 40 * e[0] + e[1]);
              }
              let n = 0;
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                for (n++; r >= 128; r >>= 7) n++;
              }
              const o = i.alloc(n);
              let a = o.length - 1;
              for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                for (o[a--] = 127 & r; (r >>= 7) > 0; )
                  o[a--] = 128 | (127 & r);
              }
              return this._createEncoderBuffer(o);
            }),
            (f.prototype._encodeTime = function (e, t) {
              let r;
              const n = new Date(e);
              return (
                "gentime" === t
                  ? (r = [
                      c(n.getUTCFullYear()),
                      c(n.getUTCMonth() + 1),
                      c(n.getUTCDate()),
                      c(n.getUTCHours()),
                      c(n.getUTCMinutes()),
                      c(n.getUTCSeconds()),
                      "Z",
                    ].join(""))
                  : "utctime" === t
                  ? (r = [
                      c(n.getUTCFullYear() % 100),
                      c(n.getUTCMonth() + 1),
                      c(n.getUTCDate()),
                      c(n.getUTCHours()),
                      c(n.getUTCMinutes()),
                      c(n.getUTCSeconds()),
                      "Z",
                    ].join(""))
                  : this.reporter.error(
                      "Encoding " + t + " time is not supported yet"
                    ),
                this._encodeStr(r, "octstr")
              );
            }),
            (f.prototype._encodeNull = function () {
              return this._createEncoderBuffer("");
            }),
            (f.prototype._encodeInt = function (e, t) {
              if ("string" == typeof e) {
                if (!t)
                  return this.reporter.error(
                    "String int or enum given, but no values map"
                  );
                if (!t.hasOwnProperty(e))
                  return this.reporter.error(
                    "Values map doesn't contain: " + JSON.stringify(e)
                  );
                e = t[e];
              }
              if ("number" != typeof e && !i.isBuffer(e)) {
                const t = e.toArray();
                !e.sign && 128 & t[0] && t.unshift(0), (e = i.from(t));
              }
              if (i.isBuffer(e)) {
                let t = e.length;
                0 === e.length && t++;
                const r = i.alloc(t);
                return (
                  e.copy(r),
                  0 === e.length && (r[0] = 0),
                  this._createEncoderBuffer(r)
                );
              }
              if (e < 128) return this._createEncoderBuffer(e);
              if (e < 256) return this._createEncoderBuffer([0, e]);
              let r = 1;
              for (let t = e; t >= 256; t >>= 8) r++;
              const n = new Array(r);
              for (let t = n.length - 1; t >= 0; t--)
                (n[t] = 255 & e), (e >>= 8);
              return (
                128 & n[0] && n.unshift(0), this._createEncoderBuffer(i.from(n))
              );
            }),
            (f.prototype._encodeBool = function (e) {
              return this._createEncoderBuffer(e ? 255 : 0);
            }),
            (f.prototype._use = function (e, t) {
              return (
                "function" == typeof e && (e = e(t)), e._getEncoder("der").tree
              );
            }),
            (f.prototype._skipDefault = function (e, t, r) {
              const n = this._baseState;
              let i;
              if (null === n.default) return !1;
              const o = e.join();
              if (
                (void 0 === n.defaultBuffer &&
                  (n.defaultBuffer = this._encodeValue(n.default, t, r).join()),
                o.length !== n.defaultBuffer.length)
              )
                return !1;
              for (i = 0; i < o.length; i++)
                if (o[i] !== n.defaultBuffer[i]) return !1;
              return !0;
            });
        },
        5189: (e, t, r) => {
          "use strict";
          const n = t;
          (n.der = r(4563)), (n.pem = r(1245));
        },
        1245: (e, t, r) => {
          "use strict";
          const n = r(2111),
            i = r(4563);
          function o(e) {
            i.call(this, e), (this.enc = "pem");
          }
          n(o, i),
            (e.exports = o),
            (o.prototype.encode = function (e, t) {
              const r = i.prototype.encode.call(this, e).toString("base64"),
                n = ["-----BEGIN " + t.label + "-----"];
              for (let e = 0; e < r.length; e += 64) n.push(r.slice(e, e + 64));
              return n.push("-----END " + t.label + "-----"), n.join("\n");
            });
        },
        5277: (e, t) => {
          "use strict";
          (t.byteLength = function (e) {
            var t = f(e),
              r = t[0],
              n = t[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (t.toByteArray = function (e) {
              var t,
                r,
                o = f(e),
                a = o[0],
                s = o[1],
                c = new i(
                  (function (e, t, r) {
                    return (3 * (t + r)) / 4 - r;
                  })(0, a, s)
                ),
                u = 0,
                d = s > 0 ? a - 4 : a;
              for (r = 0; r < d; r += 4)
                (t =
                  (n[e.charCodeAt(r)] << 18) |
                  (n[e.charCodeAt(r + 1)] << 12) |
                  (n[e.charCodeAt(r + 2)] << 6) |
                  n[e.charCodeAt(r + 3)]),
                  (c[u++] = (t >> 16) & 255),
                  (c[u++] = (t >> 8) & 255),
                  (c[u++] = 255 & t);
              return (
                2 === s &&
                  ((t =
                    (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
                  (c[u++] = 255 & t)),
                1 === s &&
                  ((t =
                    (n[e.charCodeAt(r)] << 10) |
                    (n[e.charCodeAt(r + 1)] << 4) |
                    (n[e.charCodeAt(r + 2)] >> 2)),
                  (c[u++] = (t >> 8) & 255),
                  (c[u++] = 255 & t)),
                c
              );
            }),
            (t.fromByteArray = function (e) {
              for (
                var t,
                  n = e.length,
                  i = n % 3,
                  o = [],
                  a = 16383,
                  s = 0,
                  f = n - i;
                s < f;
                s += a
              )
                o.push(c(e, s, s + a > f ? f : s + a));
              return (
                1 === i
                  ? ((t = e[n - 1]),
                    o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
                  : 2 === i &&
                    ((t = (e[n - 2] << 8) + e[n - 1]),
                    o.push(
                      r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="
                    )),
                o.join("")
              );
            });
          for (
            var r = [],
              n = [],
              i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              o =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              a = 0,
              s = o.length;
            a < s;
            ++a
          )
            (r[a] = o[a]), (n[o.charCodeAt(a)] = a);
          function f(e) {
            var t = e.length;
            if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
          }
          function c(e, t, n) {
            for (var i, o, a = [], s = t; s < n; s += 3)
              (i =
                ((e[s] << 16) & 16711680) +
                ((e[s + 1] << 8) & 65280) +
                (255 & e[s + 2])),
                a.push(
                  r[((o = i) >> 18) & 63] +
                    r[(o >> 12) & 63] +
                    r[(o >> 6) & 63] +
                    r[63 & o]
                );
            return a.join("");
          }
          (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
        },
        305: (e, t, r) => {
          "use strict";
          var n = r(5291).Buffer,
            i = r(8462);
          function o(e, t) {
            return (
              void 0 === t && (t = "utf8"),
              n.isBuffer(e)
                ? s(e.toString("base64"))
                : s(n.from(e, t).toString("base64"))
            );
          }
          function a(e) {
            return (
              (e = e.toString()),
              i.default(e).replace(/\-/g, "+").replace(/_/g, "/")
            );
          }
          function s(e) {
            return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
          }
          var f = o;
          (f.encode = o),
            (f.decode = function (e, t) {
              return (
                void 0 === t && (t = "utf8"), n.from(a(e), "base64").toString(t)
              );
            }),
            (f.toBase64 = a),
            (f.fromBase64 = s),
            (f.toBuffer = function (e) {
              return n.from(a(e), "base64");
            }),
            (t.default = f);
        },
        8462: (e, t, r) => {
          "use strict";
          var n = r(5291).Buffer;
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              var t = e.length,
                r = t % 4;
              if (!r) return e;
              var i = t,
                o = 4 - r,
                a = t + o,
                s = n.alloc(a);
              for (s.write(e); o--; ) s.write("=", i++);
              return s.toString();
            });
        },
        7375: (e, t, r) => {
          (e.exports = r(305).default), (e.exports.default = e.exports);
        },
        2693: function (e, t, r) {
          !(function (e, t) {
            "use strict";
            function n(e, t) {
              if (!e) throw new Error(t || "Assertion failed");
            }
            function i(e, t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
            function o(e, t, r) {
              if (o.isBN(e)) return e;
              (this.negative = 0),
                (this.words = null),
                (this.length = 0),
                (this.red = null),
                null !== e &&
                  (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                  this._init(e || 0, t || 10, r || "be"));
            }
            var a;
            "object" == typeof e ? (e.exports = o) : (t.BN = o),
              (o.BN = o),
              (o.wordSize = 26);
            try {
              a =
                "undefined" != typeof window && void 0 !== window.Buffer
                  ? window.Buffer
                  : r(1164).Buffer;
            } catch (e) {}
            function s(e, t) {
              var r = e.charCodeAt(t);
              return r >= 48 && r <= 57
                ? r - 48
                : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                ? r - 87
                : void n(!1, "Invalid character in " + e);
            }
            function f(e, t, r) {
              var n = s(e, r);
              return r - 1 >= t && (n |= s(e, r - 1) << 4), n;
            }
            function c(e, t, r, i) {
              for (
                var o = 0, a = 0, s = Math.min(e.length, r), f = t;
                f < s;
                f++
              ) {
                var c = e.charCodeAt(f) - 48;
                (o *= i),
                  (a = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c),
                  n(c >= 0 && a < i, "Invalid character"),
                  (o += a);
              }
              return o;
            }
            function u(e, t) {
              (e.words = t.words),
                (e.length = t.length),
                (e.negative = t.negative),
                (e.red = t.red);
            }
            if (
              ((o.isBN = function (e) {
                return (
                  e instanceof o ||
                  (null !== e &&
                    "object" == typeof e &&
                    e.constructor.wordSize === o.wordSize &&
                    Array.isArray(e.words))
                );
              }),
              (o.max = function (e, t) {
                return e.cmp(t) > 0 ? e : t;
              }),
              (o.min = function (e, t) {
                return e.cmp(t) < 0 ? e : t;
              }),
              (o.prototype._init = function (e, t, r) {
                if ("number" == typeof e) return this._initNumber(e, t, r);
                if ("object" == typeof e) return this._initArray(e, t, r);
                "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                var i = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
                  (i++, (this.negative = 1)),
                  i < e.length &&
                    (16 === t
                      ? this._parseHex(e, i, r)
                      : (this._parseBase(e, t, i),
                        "le" === r && this._initArray(this.toArray(), t, r)));
              }),
              (o.prototype._initNumber = function (e, t, r) {
                e < 0 && ((this.negative = 1), (e = -e)),
                  e < 67108864
                    ? ((this.words = [67108863 & e]), (this.length = 1))
                    : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                  "le" === r && this._initArray(this.toArray(), t, r);
              }),
              (o.prototype._initArray = function (e, t, r) {
                if ((n("number" == typeof e.length), e.length <= 0))
                  return (this.words = [0]), (this.length = 1), this;
                (this.length = Math.ceil(e.length / 3)),
                  (this.words = new Array(this.length));
                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                var o,
                  a,
                  s = 0;
                if ("be" === r)
                  for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                    (a = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                      (this.words[o] |= (a << s) & 67108863),
                      (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                      (s += 24) >= 26 && ((s -= 26), o++);
                else if ("le" === r)
                  for (i = 0, o = 0; i < e.length; i += 3)
                    (a = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                      (this.words[o] |= (a << s) & 67108863),
                      (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                      (s += 24) >= 26 && ((s -= 26), o++);
                return this._strip();
              }),
              (o.prototype._parseHex = function (e, t, r) {
                (this.length = Math.ceil((e.length - t) / 6)),
                  (this.words = new Array(this.length));
                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                var i,
                  o = 0,
                  a = 0;
                if ("be" === r)
                  for (n = e.length - 1; n >= t; n -= 2)
                    (i = f(e, t, n) << o),
                      (this.words[a] |= 67108863 & i),
                      o >= 18
                        ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                        : (o += 8);
                else
                  for (
                    n = (e.length - t) % 2 == 0 ? t + 1 : t;
                    n < e.length;
                    n += 2
                  )
                    (i = f(e, t, n) << o),
                      (this.words[a] |= 67108863 & i),
                      o >= 18
                        ? ((o -= 18), (a += 1), (this.words[a] |= i >>> 26))
                        : (o += 8);
                this._strip();
              }),
              (o.prototype._parseBase = function (e, t, r) {
                (this.words = [0]), (this.length = 1);
                for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                n--, (i = (i / t) | 0);
                for (
                  var o = e.length - r,
                    a = o % n,
                    s = Math.min(o, o - a) + r,
                    f = 0,
                    u = r;
                  u < s;
                  u += n
                )
                  (f = c(e, u, u + n, t)),
                    this.imuln(i),
                    this.words[0] + f < 67108864
                      ? (this.words[0] += f)
                      : this._iaddn(f);
                if (0 !== a) {
                  var d = 1;
                  for (f = c(e, u, e.length, t), u = 0; u < a; u++) d *= t;
                  this.imuln(d),
                    this.words[0] + f < 67108864
                      ? (this.words[0] += f)
                      : this._iaddn(f);
                }
                this._strip();
              }),
              (o.prototype.copy = function (e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                  e.words[t] = this.words[t];
                (e.length = this.length),
                  (e.negative = this.negative),
                  (e.red = this.red);
              }),
              (o.prototype._move = function (e) {
                u(e, this);
              }),
              (o.prototype.clone = function () {
                var e = new o(null);
                return this.copy(e), e;
              }),
              (o.prototype._expand = function (e) {
                for (; this.length < e; ) this.words[this.length++] = 0;
                return this;
              }),
              (o.prototype._strip = function () {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                  this.length--;
                return this._normSign();
              }),
              (o.prototype._normSign = function () {
                return (
                  1 === this.length &&
                    0 === this.words[0] &&
                    (this.negative = 0),
                  this
                );
              }),
              "undefined" != typeof Symbol && "function" == typeof Symbol.for)
            )
              try {
                o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d;
              } catch (e) {
                o.prototype.inspect = d;
              }
            else o.prototype.inspect = d;
            function d() {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }
            var h = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000",
              ],
              l = [
                0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
                6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
              ],
              p = [
                0, 0, 33554432, 43046721, 16777216, 48828125, 60466176,
                40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517,
                7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6,
                4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907,
                17210368, 20511149, 243e5, 28629151, 33554432, 39135393,
                45435424, 52521875, 60466176,
              ];
            function b(e, t, r) {
              r.negative = t.negative ^ e.negative;
              var n = (e.length + t.length) | 0;
              (r.length = n), (n = (n - 1) | 0);
              var i = 0 | e.words[0],
                o = 0 | t.words[0],
                a = i * o,
                s = 67108863 & a,
                f = (a / 67108864) | 0;
              r.words[0] = s;
              for (var c = 1; c < n; c++) {
                for (
                  var u = f >>> 26,
                    d = 67108863 & f,
                    h = Math.min(c, t.length - 1),
                    l = Math.max(0, c - e.length + 1);
                  l <= h;
                  l++
                ) {
                  var p = (c - l) | 0;
                  (u +=
                    ((a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + d) /
                      67108864) |
                    0),
                    (d = 67108863 & a);
                }
                (r.words[c] = 0 | d), (f = 0 | u);
              }
              return 0 !== f ? (r.words[c] = 0 | f) : r.length--, r._strip();
            }
            (o.prototype.toString = function (e, t) {
              var r;
              if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
                r = "";
                for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                  var s = this.words[a],
                    f = (16777215 & ((s << i) | o)).toString(16);
                  (o = (s >>> (24 - i)) & 16777215),
                    (i += 2) >= 26 && ((i -= 26), a--),
                    (r =
                      0 !== o || a !== this.length - 1
                        ? h[6 - f.length] + f + r
                        : f + r);
                }
                for (0 !== o && (r = o.toString(16) + r); r.length % t != 0; )
                  r = "0" + r;
                return 0 !== this.negative && (r = "-" + r), r;
              }
              if (e === (0 | e) && e >= 2 && e <= 36) {
                var c = l[e],
                  u = p[e];
                r = "";
                var d = this.clone();
                for (d.negative = 0; !d.isZero(); ) {
                  var b = d.modrn(u).toString(e);
                  r = (d = d.idivn(u)).isZero()
                    ? b + r
                    : h[c - b.length] + b + r;
                }
                for (this.isZero() && (r = "0" + r); r.length % t != 0; )
                  r = "0" + r;
                return 0 !== this.negative && (r = "-" + r), r;
              }
              n(!1, "Base should be between 2 and 36");
            }),
              (o.prototype.toNumber = function () {
                var e = this.words[0];
                return (
                  2 === this.length
                    ? (e += 67108864 * this.words[1])
                    : 3 === this.length && 1 === this.words[2]
                    ? (e += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                  0 !== this.negative ? -e : e
                );
              }),
              (o.prototype.toJSON = function () {
                return this.toString(16, 2);
              }),
              a &&
                (o.prototype.toBuffer = function (e, t) {
                  return this.toArrayLike(a, e, t);
                }),
              (o.prototype.toArray = function (e, t) {
                return this.toArrayLike(Array, e, t);
              }),
              (o.prototype.toArrayLike = function (e, t, r) {
                this._strip();
                var i = this.byteLength(),
                  o = r || Math.max(1, i);
                n(i <= o, "byte array longer than desired length"),
                  n(o > 0, "Requested array length <= 0");
                var a = (function (e, t) {
                  return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
                })(e, o);
                return (
                  this["_toArrayLike" + ("le" === t ? "LE" : "BE")](a, i), a
                );
              }),
              (o.prototype._toArrayLikeLE = function (e, t) {
                for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                  var a = (this.words[i] << o) | n;
                  (e[r++] = 255 & a),
                    r < e.length && (e[r++] = (a >> 8) & 255),
                    r < e.length && (e[r++] = (a >> 16) & 255),
                    6 === o
                      ? (r < e.length && (e[r++] = (a >> 24) & 255),
                        (n = 0),
                        (o = 0))
                      : ((n = a >>> 24), (o += 2));
                }
                if (r < e.length) for (e[r++] = n; r < e.length; ) e[r++] = 0;
              }),
              (o.prototype._toArrayLikeBE = function (e, t) {
                for (
                  var r = e.length - 1, n = 0, i = 0, o = 0;
                  i < this.length;
                  i++
                ) {
                  var a = (this.words[i] << o) | n;
                  (e[r--] = 255 & a),
                    r >= 0 && (e[r--] = (a >> 8) & 255),
                    r >= 0 && (e[r--] = (a >> 16) & 255),
                    6 === o
                      ? (r >= 0 && (e[r--] = (a >> 24) & 255), (n = 0), (o = 0))
                      : ((n = a >>> 24), (o += 2));
                }
                if (r >= 0) for (e[r--] = n; r >= 0; ) e[r--] = 0;
              }),
              Math.clz32
                ? (o.prototype._countBits = function (e) {
                    return 32 - Math.clz32(e);
                  })
                : (o.prototype._countBits = function (e) {
                    var t = e,
                      r = 0;
                    return (
                      t >= 4096 && ((r += 13), (t >>>= 13)),
                      t >= 64 && ((r += 7), (t >>>= 7)),
                      t >= 8 && ((r += 4), (t >>>= 4)),
                      t >= 2 && ((r += 2), (t >>>= 2)),
                      r + t
                    );
                  }),
              (o.prototype._zeroBits = function (e) {
                if (0 === e) return 26;
                var t = e,
                  r = 0;
                return (
                  0 == (8191 & t) && ((r += 13), (t >>>= 13)),
                  0 == (127 & t) && ((r += 7), (t >>>= 7)),
                  0 == (15 & t) && ((r += 4), (t >>>= 4)),
                  0 == (3 & t) && ((r += 2), (t >>>= 2)),
                  0 == (1 & t) && r++,
                  r
                );
              }),
              (o.prototype.bitLength = function () {
                var e = this.words[this.length - 1],
                  t = this._countBits(e);
                return 26 * (this.length - 1) + t;
              }),
              (o.prototype.zeroBits = function () {
                if (this.isZero()) return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                  var r = this._zeroBits(this.words[t]);
                  if (((e += r), 26 !== r)) break;
                }
                return e;
              }),
              (o.prototype.byteLength = function () {
                return Math.ceil(this.bitLength() / 8);
              }),
              (o.prototype.toTwos = function (e) {
                return 0 !== this.negative
                  ? this.abs().inotn(e).iaddn(1)
                  : this.clone();
              }),
              (o.prototype.fromTwos = function (e) {
                return this.testn(e - 1)
                  ? this.notn(e).iaddn(1).ineg()
                  : this.clone();
              }),
              (o.prototype.isNeg = function () {
                return 0 !== this.negative;
              }),
              (o.prototype.neg = function () {
                return this.clone().ineg();
              }),
              (o.prototype.ineg = function () {
                return this.isZero() || (this.negative ^= 1), this;
              }),
              (o.prototype.iuor = function (e) {
                for (; this.length < e.length; ) this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++)
                  this.words[t] = this.words[t] | e.words[t];
                return this._strip();
              }),
              (o.prototype.ior = function (e) {
                return n(0 == (this.negative | e.negative)), this.iuor(e);
              }),
              (o.prototype.or = function (e) {
                return this.length > e.length
                  ? this.clone().ior(e)
                  : e.clone().ior(this);
              }),
              (o.prototype.uor = function (e) {
                return this.length > e.length
                  ? this.clone().iuor(e)
                  : e.clone().iuor(this);
              }),
              (o.prototype.iuand = function (e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var r = 0; r < t.length; r++)
                  this.words[r] = this.words[r] & e.words[r];
                return (this.length = t.length), this._strip();
              }),
              (o.prototype.iand = function (e) {
                return n(0 == (this.negative | e.negative)), this.iuand(e);
              }),
              (o.prototype.and = function (e) {
                return this.length > e.length
                  ? this.clone().iand(e)
                  : e.clone().iand(this);
              }),
              (o.prototype.uand = function (e) {
                return this.length > e.length
                  ? this.clone().iuand(e)
                  : e.clone().iuand(this);
              }),
              (o.prototype.iuxor = function (e) {
                var t, r;
                this.length > e.length
                  ? ((t = this), (r = e))
                  : ((t = e), (r = this));
                for (var n = 0; n < r.length; n++)
                  this.words[n] = t.words[n] ^ r.words[n];
                if (this !== t)
                  for (; n < t.length; n++) this.words[n] = t.words[n];
                return (this.length = t.length), this._strip();
              }),
              (o.prototype.ixor = function (e) {
                return n(0 == (this.negative | e.negative)), this.iuxor(e);
              }),
              (o.prototype.xor = function (e) {
                return this.length > e.length
                  ? this.clone().ixor(e)
                  : e.clone().ixor(this);
              }),
              (o.prototype.uxor = function (e) {
                return this.length > e.length
                  ? this.clone().iuxor(e)
                  : e.clone().iuxor(this);
              }),
              (o.prototype.inotn = function (e) {
                n("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26),
                  r = e % 26;
                this._expand(t), r > 0 && t--;
                for (var i = 0; i < t; i++)
                  this.words[i] = 67108863 & ~this.words[i];
                return (
                  r > 0 &&
                    (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                  this._strip()
                );
              }),
              (o.prototype.notn = function (e) {
                return this.clone().inotn(e);
              }),
              (o.prototype.setn = function (e, t) {
                n("number" == typeof e && e >= 0);
                var r = (e / 26) | 0,
                  i = e % 26;
                return (
                  this._expand(r + 1),
                  (this.words[r] = t
                    ? this.words[r] | (1 << i)
                    : this.words[r] & ~(1 << i)),
                  this._strip()
                );
              }),
              (o.prototype.iadd = function (e) {
                var t, r, n;
                if (0 !== this.negative && 0 === e.negative)
                  return (
                    (this.negative = 0),
                    (t = this.isub(e)),
                    (this.negative ^= 1),
                    this._normSign()
                  );
                if (0 === this.negative && 0 !== e.negative)
                  return (
                    (e.negative = 0),
                    (t = this.isub(e)),
                    (e.negative = 1),
                    t._normSign()
                  );
                this.length > e.length
                  ? ((r = this), (n = e))
                  : ((r = e), (n = this));
                for (var i = 0, o = 0; o < n.length; o++)
                  (t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                    (this.words[o] = 67108863 & t),
                    (i = t >>> 26);
                for (; 0 !== i && o < r.length; o++)
                  (t = (0 | r.words[o]) + i),
                    (this.words[o] = 67108863 & t),
                    (i = t >>> 26);
                if (((this.length = r.length), 0 !== i))
                  (this.words[this.length] = i), this.length++;
                else if (r !== this)
                  for (; o < r.length; o++) this.words[o] = r.words[o];
                return this;
              }),
              (o.prototype.add = function (e) {
                var t;
                return 0 !== e.negative && 0 === this.negative
                  ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                  : 0 === e.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (t = e.sub(this)),
                    (this.negative = 1),
                    t)
                  : this.length > e.length
                  ? this.clone().iadd(e)
                  : e.clone().iadd(this);
              }),
              (o.prototype.isub = function (e) {
                if (0 !== e.negative) {
                  e.negative = 0;
                  var t = this.iadd(e);
                  return (e.negative = 1), t._normSign();
                }
                if (0 !== this.negative)
                  return (
                    (this.negative = 0),
                    this.iadd(e),
                    (this.negative = 1),
                    this._normSign()
                  );
                var r,
                  n,
                  i = this.cmp(e);
                if (0 === i)
                  return (
                    (this.negative = 0),
                    (this.length = 1),
                    (this.words[0] = 0),
                    this
                  );
                i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
                for (var o = 0, a = 0; a < n.length; a++)
                  (o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26),
                    (this.words[a] = 67108863 & t);
                for (; 0 !== o && a < r.length; a++)
                  (o = (t = (0 | r.words[a]) + o) >> 26),
                    (this.words[a] = 67108863 & t);
                if (0 === o && a < r.length && r !== this)
                  for (; a < r.length; a++) this.words[a] = r.words[a];
                return (
                  (this.length = Math.max(this.length, a)),
                  r !== this && (this.negative = 1),
                  this._strip()
                );
              }),
              (o.prototype.sub = function (e) {
                return this.clone().isub(e);
              });
            var y = function (e, t, r) {
              var n,
                i,
                o,
                a = e.words,
                s = t.words,
                f = r.words,
                c = 0,
                u = 0 | a[0],
                d = 8191 & u,
                h = u >>> 13,
                l = 0 | a[1],
                p = 8191 & l,
                b = l >>> 13,
                y = 0 | a[2],
                g = 8191 & y,
                m = y >>> 13,
                v = 0 | a[3],
                w = 8191 & v,
                _ = v >>> 13,
                S = 0 | a[4],
                E = 8191 & S,
                A = S >>> 13,
                M = 0 | a[5],
                k = 8191 & M,
                O = M >>> 13,
                I = 0 | a[6],
                C = 8191 & I,
                R = I >>> 13,
                P = 0 | a[7],
                x = 8191 & P,
                B = P >>> 13,
                T = 0 | a[8],
                j = 8191 & T,
                D = T >>> 13,
                L = 0 | a[9],
                N = 8191 & L,
                U = L >>> 13,
                q = 0 | s[0],
                z = 8191 & q,
                F = q >>> 13,
                W = 0 | s[1],
                K = 8191 & W,
                H = W >>> 13,
                V = 0 | s[2],
                G = 8191 & V,
                $ = V >>> 13,
                X = 0 | s[3],
                J = 8191 & X,
                Y = X >>> 13,
                Z = 0 | s[4],
                Q = 8191 & Z,
                ee = Z >>> 13,
                te = 0 | s[5],
                re = 8191 & te,
                ne = te >>> 13,
                ie = 0 | s[6],
                oe = 8191 & ie,
                ae = ie >>> 13,
                se = 0 | s[7],
                fe = 8191 & se,
                ce = se >>> 13,
                ue = 0 | s[8],
                de = 8191 & ue,
                he = ue >>> 13,
                le = 0 | s[9],
                pe = 8191 & le,
                be = le >>> 13;
              (r.negative = e.negative ^ t.negative), (r.length = 19);
              var ye =
                (((c + (n = Math.imul(d, z))) | 0) +
                  ((8191 &
                    (i = ((i = Math.imul(d, F)) + Math.imul(h, z)) | 0)) <<
                    13)) |
                0;
              (c =
                ((((o = Math.imul(h, F)) + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
                (ye &= 67108863),
                (n = Math.imul(p, z)),
                (i = ((i = Math.imul(p, F)) + Math.imul(b, z)) | 0),
                (o = Math.imul(b, F));
              var ge =
                (((c + (n = (n + Math.imul(d, K)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, H)) | 0) + Math.imul(h, K)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, H)) | 0) + (i >>> 13)) | 0) +
                  (ge >>> 26)) |
                0),
                (ge &= 67108863),
                (n = Math.imul(g, z)),
                (i = ((i = Math.imul(g, F)) + Math.imul(m, z)) | 0),
                (o = Math.imul(m, F)),
                (n = (n + Math.imul(p, K)) | 0),
                (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(b, K)) | 0),
                (o = (o + Math.imul(b, H)) | 0);
              var me =
                (((c + (n = (n + Math.imul(d, G)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, $)) | 0) + Math.imul(h, G)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, $)) | 0) + (i >>> 13)) | 0) +
                  (me >>> 26)) |
                0),
                (me &= 67108863),
                (n = Math.imul(w, z)),
                (i = ((i = Math.imul(w, F)) + Math.imul(_, z)) | 0),
                (o = Math.imul(_, F)),
                (n = (n + Math.imul(g, K)) | 0),
                (i = ((i = (i + Math.imul(g, H)) | 0) + Math.imul(m, K)) | 0),
                (o = (o + Math.imul(m, H)) | 0),
                (n = (n + Math.imul(p, G)) | 0),
                (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(b, G)) | 0),
                (o = (o + Math.imul(b, $)) | 0);
              var ve =
                (((c + (n = (n + Math.imul(d, J)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, Y)) | 0) + Math.imul(h, J)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, Y)) | 0) + (i >>> 13)) | 0) +
                  (ve >>> 26)) |
                0),
                (ve &= 67108863),
                (n = Math.imul(E, z)),
                (i = ((i = Math.imul(E, F)) + Math.imul(A, z)) | 0),
                (o = Math.imul(A, F)),
                (n = (n + Math.imul(w, K)) | 0),
                (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(_, K)) | 0),
                (o = (o + Math.imul(_, H)) | 0),
                (n = (n + Math.imul(g, G)) | 0),
                (i = ((i = (i + Math.imul(g, $)) | 0) + Math.imul(m, G)) | 0),
                (o = (o + Math.imul(m, $)) | 0),
                (n = (n + Math.imul(p, J)) | 0),
                (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, J)) | 0),
                (o = (o + Math.imul(b, Y)) | 0);
              var we =
                (((c + (n = (n + Math.imul(d, Q)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, ee)) | 0) + Math.imul(h, Q)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, ee)) | 0) + (i >>> 13)) | 0) +
                  (we >>> 26)) |
                0),
                (we &= 67108863),
                (n = Math.imul(k, z)),
                (i = ((i = Math.imul(k, F)) + Math.imul(O, z)) | 0),
                (o = Math.imul(O, F)),
                (n = (n + Math.imul(E, K)) | 0),
                (i = ((i = (i + Math.imul(E, H)) | 0) + Math.imul(A, K)) | 0),
                (o = (o + Math.imul(A, H)) | 0),
                (n = (n + Math.imul(w, G)) | 0),
                (i = ((i = (i + Math.imul(w, $)) | 0) + Math.imul(_, G)) | 0),
                (o = (o + Math.imul(_, $)) | 0),
                (n = (n + Math.imul(g, J)) | 0),
                (i = ((i = (i + Math.imul(g, Y)) | 0) + Math.imul(m, J)) | 0),
                (o = (o + Math.imul(m, Y)) | 0),
                (n = (n + Math.imul(p, Q)) | 0),
                (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, Q)) | 0),
                (o = (o + Math.imul(b, ee)) | 0);
              var _e =
                (((c + (n = (n + Math.imul(d, re)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, ne)) | 0) + Math.imul(h, re)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, ne)) | 0) + (i >>> 13)) | 0) +
                  (_e >>> 26)) |
                0),
                (_e &= 67108863),
                (n = Math.imul(C, z)),
                (i = ((i = Math.imul(C, F)) + Math.imul(R, z)) | 0),
                (o = Math.imul(R, F)),
                (n = (n + Math.imul(k, K)) | 0),
                (i = ((i = (i + Math.imul(k, H)) | 0) + Math.imul(O, K)) | 0),
                (o = (o + Math.imul(O, H)) | 0),
                (n = (n + Math.imul(E, G)) | 0),
                (i = ((i = (i + Math.imul(E, $)) | 0) + Math.imul(A, G)) | 0),
                (o = (o + Math.imul(A, $)) | 0),
                (n = (n + Math.imul(w, J)) | 0),
                (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(_, J)) | 0),
                (o = (o + Math.imul(_, Y)) | 0),
                (n = (n + Math.imul(g, Q)) | 0),
                (i = ((i = (i + Math.imul(g, ee)) | 0) + Math.imul(m, Q)) | 0),
                (o = (o + Math.imul(m, ee)) | 0),
                (n = (n + Math.imul(p, re)) | 0),
                (i = ((i = (i + Math.imul(p, ne)) | 0) + Math.imul(b, re)) | 0),
                (o = (o + Math.imul(b, ne)) | 0);
              var Se =
                (((c + (n = (n + Math.imul(d, oe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, ae)) | 0) + Math.imul(h, oe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, ae)) | 0) + (i >>> 13)) | 0) +
                  (Se >>> 26)) |
                0),
                (Se &= 67108863),
                (n = Math.imul(x, z)),
                (i = ((i = Math.imul(x, F)) + Math.imul(B, z)) | 0),
                (o = Math.imul(B, F)),
                (n = (n + Math.imul(C, K)) | 0),
                (i = ((i = (i + Math.imul(C, H)) | 0) + Math.imul(R, K)) | 0),
                (o = (o + Math.imul(R, H)) | 0),
                (n = (n + Math.imul(k, G)) | 0),
                (i = ((i = (i + Math.imul(k, $)) | 0) + Math.imul(O, G)) | 0),
                (o = (o + Math.imul(O, $)) | 0),
                (n = (n + Math.imul(E, J)) | 0),
                (i = ((i = (i + Math.imul(E, Y)) | 0) + Math.imul(A, J)) | 0),
                (o = (o + Math.imul(A, Y)) | 0),
                (n = (n + Math.imul(w, Q)) | 0),
                (i = ((i = (i + Math.imul(w, ee)) | 0) + Math.imul(_, Q)) | 0),
                (o = (o + Math.imul(_, ee)) | 0),
                (n = (n + Math.imul(g, re)) | 0),
                (i = ((i = (i + Math.imul(g, ne)) | 0) + Math.imul(m, re)) | 0),
                (o = (o + Math.imul(m, ne)) | 0),
                (n = (n + Math.imul(p, oe)) | 0),
                (i = ((i = (i + Math.imul(p, ae)) | 0) + Math.imul(b, oe)) | 0),
                (o = (o + Math.imul(b, ae)) | 0);
              var Ee =
                (((c + (n = (n + Math.imul(d, fe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, ce)) | 0) + Math.imul(h, fe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, ce)) | 0) + (i >>> 13)) | 0) +
                  (Ee >>> 26)) |
                0),
                (Ee &= 67108863),
                (n = Math.imul(j, z)),
                (i = ((i = Math.imul(j, F)) + Math.imul(D, z)) | 0),
                (o = Math.imul(D, F)),
                (n = (n + Math.imul(x, K)) | 0),
                (i = ((i = (i + Math.imul(x, H)) | 0) + Math.imul(B, K)) | 0),
                (o = (o + Math.imul(B, H)) | 0),
                (n = (n + Math.imul(C, G)) | 0),
                (i = ((i = (i + Math.imul(C, $)) | 0) + Math.imul(R, G)) | 0),
                (o = (o + Math.imul(R, $)) | 0),
                (n = (n + Math.imul(k, J)) | 0),
                (i = ((i = (i + Math.imul(k, Y)) | 0) + Math.imul(O, J)) | 0),
                (o = (o + Math.imul(O, Y)) | 0),
                (n = (n + Math.imul(E, Q)) | 0),
                (i = ((i = (i + Math.imul(E, ee)) | 0) + Math.imul(A, Q)) | 0),
                (o = (o + Math.imul(A, ee)) | 0),
                (n = (n + Math.imul(w, re)) | 0),
                (i = ((i = (i + Math.imul(w, ne)) | 0) + Math.imul(_, re)) | 0),
                (o = (o + Math.imul(_, ne)) | 0),
                (n = (n + Math.imul(g, oe)) | 0),
                (i = ((i = (i + Math.imul(g, ae)) | 0) + Math.imul(m, oe)) | 0),
                (o = (o + Math.imul(m, ae)) | 0),
                (n = (n + Math.imul(p, fe)) | 0),
                (i = ((i = (i + Math.imul(p, ce)) | 0) + Math.imul(b, fe)) | 0),
                (o = (o + Math.imul(b, ce)) | 0);
              var Ae =
                (((c + (n = (n + Math.imul(d, de)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, he)) | 0) + Math.imul(h, de)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, he)) | 0) + (i >>> 13)) | 0) +
                  (Ae >>> 26)) |
                0),
                (Ae &= 67108863),
                (n = Math.imul(N, z)),
                (i = ((i = Math.imul(N, F)) + Math.imul(U, z)) | 0),
                (o = Math.imul(U, F)),
                (n = (n + Math.imul(j, K)) | 0),
                (i = ((i = (i + Math.imul(j, H)) | 0) + Math.imul(D, K)) | 0),
                (o = (o + Math.imul(D, H)) | 0),
                (n = (n + Math.imul(x, G)) | 0),
                (i = ((i = (i + Math.imul(x, $)) | 0) + Math.imul(B, G)) | 0),
                (o = (o + Math.imul(B, $)) | 0),
                (n = (n + Math.imul(C, J)) | 0),
                (i = ((i = (i + Math.imul(C, Y)) | 0) + Math.imul(R, J)) | 0),
                (o = (o + Math.imul(R, Y)) | 0),
                (n = (n + Math.imul(k, Q)) | 0),
                (i = ((i = (i + Math.imul(k, ee)) | 0) + Math.imul(O, Q)) | 0),
                (o = (o + Math.imul(O, ee)) | 0),
                (n = (n + Math.imul(E, re)) | 0),
                (i = ((i = (i + Math.imul(E, ne)) | 0) + Math.imul(A, re)) | 0),
                (o = (o + Math.imul(A, ne)) | 0),
                (n = (n + Math.imul(w, oe)) | 0),
                (i = ((i = (i + Math.imul(w, ae)) | 0) + Math.imul(_, oe)) | 0),
                (o = (o + Math.imul(_, ae)) | 0),
                (n = (n + Math.imul(g, fe)) | 0),
                (i = ((i = (i + Math.imul(g, ce)) | 0) + Math.imul(m, fe)) | 0),
                (o = (o + Math.imul(m, ce)) | 0),
                (n = (n + Math.imul(p, de)) | 0),
                (i = ((i = (i + Math.imul(p, he)) | 0) + Math.imul(b, de)) | 0),
                (o = (o + Math.imul(b, he)) | 0);
              var Me =
                (((c + (n = (n + Math.imul(d, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(d, be)) | 0) + Math.imul(h, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(h, be)) | 0) + (i >>> 13)) | 0) +
                  (Me >>> 26)) |
                0),
                (Me &= 67108863),
                (n = Math.imul(N, K)),
                (i = ((i = Math.imul(N, H)) + Math.imul(U, K)) | 0),
                (o = Math.imul(U, H)),
                (n = (n + Math.imul(j, G)) | 0),
                (i = ((i = (i + Math.imul(j, $)) | 0) + Math.imul(D, G)) | 0),
                (o = (o + Math.imul(D, $)) | 0),
                (n = (n + Math.imul(x, J)) | 0),
                (i = ((i = (i + Math.imul(x, Y)) | 0) + Math.imul(B, J)) | 0),
                (o = (o + Math.imul(B, Y)) | 0),
                (n = (n + Math.imul(C, Q)) | 0),
                (i = ((i = (i + Math.imul(C, ee)) | 0) + Math.imul(R, Q)) | 0),
                (o = (o + Math.imul(R, ee)) | 0),
                (n = (n + Math.imul(k, re)) | 0),
                (i = ((i = (i + Math.imul(k, ne)) | 0) + Math.imul(O, re)) | 0),
                (o = (o + Math.imul(O, ne)) | 0),
                (n = (n + Math.imul(E, oe)) | 0),
                (i = ((i = (i + Math.imul(E, ae)) | 0) + Math.imul(A, oe)) | 0),
                (o = (o + Math.imul(A, ae)) | 0),
                (n = (n + Math.imul(w, fe)) | 0),
                (i = ((i = (i + Math.imul(w, ce)) | 0) + Math.imul(_, fe)) | 0),
                (o = (o + Math.imul(_, ce)) | 0),
                (n = (n + Math.imul(g, de)) | 0),
                (i = ((i = (i + Math.imul(g, he)) | 0) + Math.imul(m, de)) | 0),
                (o = (o + Math.imul(m, he)) | 0);
              var ke =
                (((c + (n = (n + Math.imul(p, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(p, be)) | 0) + Math.imul(b, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(b, be)) | 0) + (i >>> 13)) | 0) +
                  (ke >>> 26)) |
                0),
                (ke &= 67108863),
                (n = Math.imul(N, G)),
                (i = ((i = Math.imul(N, $)) + Math.imul(U, G)) | 0),
                (o = Math.imul(U, $)),
                (n = (n + Math.imul(j, J)) | 0),
                (i = ((i = (i + Math.imul(j, Y)) | 0) + Math.imul(D, J)) | 0),
                (o = (o + Math.imul(D, Y)) | 0),
                (n = (n + Math.imul(x, Q)) | 0),
                (i = ((i = (i + Math.imul(x, ee)) | 0) + Math.imul(B, Q)) | 0),
                (o = (o + Math.imul(B, ee)) | 0),
                (n = (n + Math.imul(C, re)) | 0),
                (i = ((i = (i + Math.imul(C, ne)) | 0) + Math.imul(R, re)) | 0),
                (o = (o + Math.imul(R, ne)) | 0),
                (n = (n + Math.imul(k, oe)) | 0),
                (i = ((i = (i + Math.imul(k, ae)) | 0) + Math.imul(O, oe)) | 0),
                (o = (o + Math.imul(O, ae)) | 0),
                (n = (n + Math.imul(E, fe)) | 0),
                (i = ((i = (i + Math.imul(E, ce)) | 0) + Math.imul(A, fe)) | 0),
                (o = (o + Math.imul(A, ce)) | 0),
                (n = (n + Math.imul(w, de)) | 0),
                (i = ((i = (i + Math.imul(w, he)) | 0) + Math.imul(_, de)) | 0),
                (o = (o + Math.imul(_, he)) | 0);
              var Oe =
                (((c + (n = (n + Math.imul(g, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(g, be)) | 0) + Math.imul(m, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(m, be)) | 0) + (i >>> 13)) | 0) +
                  (Oe >>> 26)) |
                0),
                (Oe &= 67108863),
                (n = Math.imul(N, J)),
                (i = ((i = Math.imul(N, Y)) + Math.imul(U, J)) | 0),
                (o = Math.imul(U, Y)),
                (n = (n + Math.imul(j, Q)) | 0),
                (i = ((i = (i + Math.imul(j, ee)) | 0) + Math.imul(D, Q)) | 0),
                (o = (o + Math.imul(D, ee)) | 0),
                (n = (n + Math.imul(x, re)) | 0),
                (i = ((i = (i + Math.imul(x, ne)) | 0) + Math.imul(B, re)) | 0),
                (o = (o + Math.imul(B, ne)) | 0),
                (n = (n + Math.imul(C, oe)) | 0),
                (i = ((i = (i + Math.imul(C, ae)) | 0) + Math.imul(R, oe)) | 0),
                (o = (o + Math.imul(R, ae)) | 0),
                (n = (n + Math.imul(k, fe)) | 0),
                (i = ((i = (i + Math.imul(k, ce)) | 0) + Math.imul(O, fe)) | 0),
                (o = (o + Math.imul(O, ce)) | 0),
                (n = (n + Math.imul(E, de)) | 0),
                (i = ((i = (i + Math.imul(E, he)) | 0) + Math.imul(A, de)) | 0),
                (o = (o + Math.imul(A, he)) | 0);
              var Ie =
                (((c + (n = (n + Math.imul(w, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(w, be)) | 0) + Math.imul(_, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(_, be)) | 0) + (i >>> 13)) | 0) +
                  (Ie >>> 26)) |
                0),
                (Ie &= 67108863),
                (n = Math.imul(N, Q)),
                (i = ((i = Math.imul(N, ee)) + Math.imul(U, Q)) | 0),
                (o = Math.imul(U, ee)),
                (n = (n + Math.imul(j, re)) | 0),
                (i = ((i = (i + Math.imul(j, ne)) | 0) + Math.imul(D, re)) | 0),
                (o = (o + Math.imul(D, ne)) | 0),
                (n = (n + Math.imul(x, oe)) | 0),
                (i = ((i = (i + Math.imul(x, ae)) | 0) + Math.imul(B, oe)) | 0),
                (o = (o + Math.imul(B, ae)) | 0),
                (n = (n + Math.imul(C, fe)) | 0),
                (i = ((i = (i + Math.imul(C, ce)) | 0) + Math.imul(R, fe)) | 0),
                (o = (o + Math.imul(R, ce)) | 0),
                (n = (n + Math.imul(k, de)) | 0),
                (i = ((i = (i + Math.imul(k, he)) | 0) + Math.imul(O, de)) | 0),
                (o = (o + Math.imul(O, he)) | 0);
              var Ce =
                (((c + (n = (n + Math.imul(E, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(E, be)) | 0) + Math.imul(A, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(A, be)) | 0) + (i >>> 13)) | 0) +
                  (Ce >>> 26)) |
                0),
                (Ce &= 67108863),
                (n = Math.imul(N, re)),
                (i = ((i = Math.imul(N, ne)) + Math.imul(U, re)) | 0),
                (o = Math.imul(U, ne)),
                (n = (n + Math.imul(j, oe)) | 0),
                (i = ((i = (i + Math.imul(j, ae)) | 0) + Math.imul(D, oe)) | 0),
                (o = (o + Math.imul(D, ae)) | 0),
                (n = (n + Math.imul(x, fe)) | 0),
                (i = ((i = (i + Math.imul(x, ce)) | 0) + Math.imul(B, fe)) | 0),
                (o = (o + Math.imul(B, ce)) | 0),
                (n = (n + Math.imul(C, de)) | 0),
                (i = ((i = (i + Math.imul(C, he)) | 0) + Math.imul(R, de)) | 0),
                (o = (o + Math.imul(R, he)) | 0);
              var Re =
                (((c + (n = (n + Math.imul(k, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(k, be)) | 0) + Math.imul(O, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(O, be)) | 0) + (i >>> 13)) | 0) +
                  (Re >>> 26)) |
                0),
                (Re &= 67108863),
                (n = Math.imul(N, oe)),
                (i = ((i = Math.imul(N, ae)) + Math.imul(U, oe)) | 0),
                (o = Math.imul(U, ae)),
                (n = (n + Math.imul(j, fe)) | 0),
                (i = ((i = (i + Math.imul(j, ce)) | 0) + Math.imul(D, fe)) | 0),
                (o = (o + Math.imul(D, ce)) | 0),
                (n = (n + Math.imul(x, de)) | 0),
                (i = ((i = (i + Math.imul(x, he)) | 0) + Math.imul(B, de)) | 0),
                (o = (o + Math.imul(B, he)) | 0);
              var Pe =
                (((c + (n = (n + Math.imul(C, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(C, be)) | 0) + Math.imul(R, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(R, be)) | 0) + (i >>> 13)) | 0) +
                  (Pe >>> 26)) |
                0),
                (Pe &= 67108863),
                (n = Math.imul(N, fe)),
                (i = ((i = Math.imul(N, ce)) + Math.imul(U, fe)) | 0),
                (o = Math.imul(U, ce)),
                (n = (n + Math.imul(j, de)) | 0),
                (i = ((i = (i + Math.imul(j, he)) | 0) + Math.imul(D, de)) | 0),
                (o = (o + Math.imul(D, he)) | 0);
              var xe =
                (((c + (n = (n + Math.imul(x, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(x, be)) | 0) + Math.imul(B, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(B, be)) | 0) + (i >>> 13)) | 0) +
                  (xe >>> 26)) |
                0),
                (xe &= 67108863),
                (n = Math.imul(N, de)),
                (i = ((i = Math.imul(N, he)) + Math.imul(U, de)) | 0),
                (o = Math.imul(U, he));
              var Be =
                (((c + (n = (n + Math.imul(j, pe)) | 0)) | 0) +
                  ((8191 &
                    (i =
                      ((i = (i + Math.imul(j, be)) | 0) + Math.imul(D, pe)) |
                      0)) <<
                    13)) |
                0;
              (c =
                ((((o = (o + Math.imul(D, be)) | 0) + (i >>> 13)) | 0) +
                  (Be >>> 26)) |
                0),
                (Be &= 67108863);
              var Te =
                (((c + (n = Math.imul(N, pe))) | 0) +
                  ((8191 &
                    (i = ((i = Math.imul(N, be)) + Math.imul(U, pe)) | 0)) <<
                    13)) |
                0;
              return (
                (c =
                  ((((o = Math.imul(U, be)) + (i >>> 13)) | 0) + (Te >>> 26)) |
                  0),
                (Te &= 67108863),
                (f[0] = ye),
                (f[1] = ge),
                (f[2] = me),
                (f[3] = ve),
                (f[4] = we),
                (f[5] = _e),
                (f[6] = Se),
                (f[7] = Ee),
                (f[8] = Ae),
                (f[9] = Me),
                (f[10] = ke),
                (f[11] = Oe),
                (f[12] = Ie),
                (f[13] = Ce),
                (f[14] = Re),
                (f[15] = Pe),
                (f[16] = xe),
                (f[17] = Be),
                (f[18] = Te),
                0 !== c && ((f[19] = c), r.length++),
                r
              );
            };
            function g(e, t, r) {
              (r.negative = t.negative ^ e.negative),
                (r.length = e.length + t.length);
              for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                var a = i;
                i = 0;
                for (
                  var s = 67108863 & n,
                    f = Math.min(o, t.length - 1),
                    c = Math.max(0, o - e.length + 1);
                  c <= f;
                  c++
                ) {
                  var u = o - c,
                    d = (0 | e.words[u]) * (0 | t.words[c]),
                    h = 67108863 & d;
                  (s = 67108863 & (h = (h + s) | 0)),
                    (i +=
                      (a =
                        ((a = (a + ((d / 67108864) | 0)) | 0) + (h >>> 26)) |
                        0) >>> 26),
                    (a &= 67108863);
                }
                (r.words[o] = s), (n = a), (a = i);
              }
              return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
            }
            function m(e, t, r) {
              return g(e, t, r);
            }
            function v(e, t) {
              (this.x = e), (this.y = t);
            }
            Math.imul || (y = b),
              (o.prototype.mulTo = function (e, t) {
                var r = this.length + e.length;
                return 10 === this.length && 10 === e.length
                  ? y(this, e, t)
                  : r < 63
                  ? b(this, e, t)
                  : r < 1024
                  ? g(this, e, t)
                  : m(this, e, t);
              }),
              (v.prototype.makeRBT = function (e) {
                for (
                  var t = new Array(e),
                    r = o.prototype._countBits(e) - 1,
                    n = 0;
                  n < e;
                  n++
                )
                  t[n] = this.revBin(n, r, e);
                return t;
              }),
              (v.prototype.revBin = function (e, t, r) {
                if (0 === e || e === r - 1) return e;
                for (var n = 0, i = 0; i < t; i++)
                  (n |= (1 & e) << (t - i - 1)), (e >>= 1);
                return n;
              }),
              (v.prototype.permute = function (e, t, r, n, i, o) {
                for (var a = 0; a < o; a++) (n[a] = t[e[a]]), (i[a] = r[e[a]]);
              }),
              (v.prototype.transform = function (e, t, r, n, i, o) {
                this.permute(o, e, t, r, n, i);
                for (var a = 1; a < i; a <<= 1)
                  for (
                    var s = a << 1,
                      f = Math.cos((2 * Math.PI) / s),
                      c = Math.sin((2 * Math.PI) / s),
                      u = 0;
                    u < i;
                    u += s
                  )
                    for (var d = f, h = c, l = 0; l < a; l++) {
                      var p = r[u + l],
                        b = n[u + l],
                        y = r[u + l + a],
                        g = n[u + l + a],
                        m = d * y - h * g;
                      (g = d * g + h * y),
                        (y = m),
                        (r[u + l] = p + y),
                        (n[u + l] = b + g),
                        (r[u + l + a] = p - y),
                        (n[u + l + a] = b - g),
                        l !== s &&
                          ((m = f * d - c * h), (h = f * h + c * d), (d = m));
                    }
              }),
              (v.prototype.guessLen13b = function (e, t) {
                var r = 1 | Math.max(t, e),
                  n = 1 & r,
                  i = 0;
                for (r = (r / 2) | 0; r; r >>>= 1) i++;
                return 1 << (i + 1 + n);
              }),
              (v.prototype.conjugate = function (e, t, r) {
                if (!(r <= 1))
                  for (var n = 0; n < r / 2; n++) {
                    var i = e[n];
                    (e[n] = e[r - n - 1]),
                      (e[r - n - 1] = i),
                      (i = t[n]),
                      (t[n] = -t[r - n - 1]),
                      (t[r - n - 1] = -i);
                  }
              }),
              (v.prototype.normalize13b = function (e, t) {
                for (var r = 0, n = 0; n < t / 2; n++) {
                  var i =
                    8192 * Math.round(e[2 * n + 1] / t) +
                    Math.round(e[2 * n] / t) +
                    r;
                  (e[n] = 67108863 & i),
                    (r = i < 67108864 ? 0 : (i / 67108864) | 0);
                }
                return e;
              }),
              (v.prototype.convert13b = function (e, t, r, i) {
                for (var o = 0, a = 0; a < t; a++)
                  (o += 0 | e[a]),
                    (r[2 * a] = 8191 & o),
                    (o >>>= 13),
                    (r[2 * a + 1] = 8191 & o),
                    (o >>>= 13);
                for (a = 2 * t; a < i; ++a) r[a] = 0;
                n(0 === o), n(0 == (-8192 & o));
              }),
              (v.prototype.stub = function (e) {
                for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                return t;
              }),
              (v.prototype.mulp = function (e, t, r) {
                var n = 2 * this.guessLen13b(e.length, t.length),
                  i = this.makeRBT(n),
                  o = this.stub(n),
                  a = new Array(n),
                  s = new Array(n),
                  f = new Array(n),
                  c = new Array(n),
                  u = new Array(n),
                  d = new Array(n),
                  h = r.words;
                (h.length = n),
                  this.convert13b(e.words, e.length, a, n),
                  this.convert13b(t.words, t.length, c, n),
                  this.transform(a, o, s, f, n, i),
                  this.transform(c, o, u, d, n, i);
                for (var l = 0; l < n; l++) {
                  var p = s[l] * u[l] - f[l] * d[l];
                  (f[l] = s[l] * d[l] + f[l] * u[l]), (s[l] = p);
                }
                return (
                  this.conjugate(s, f, n),
                  this.transform(s, f, h, o, n, i),
                  this.conjugate(h, o, n),
                  this.normalize13b(h, n),
                  (r.negative = e.negative ^ t.negative),
                  (r.length = e.length + t.length),
                  r._strip()
                );
              }),
              (o.prototype.mul = function (e) {
                var t = new o(null);
                return (
                  (t.words = new Array(this.length + e.length)),
                  this.mulTo(e, t)
                );
              }),
              (o.prototype.mulf = function (e) {
                var t = new o(null);
                return (
                  (t.words = new Array(this.length + e.length)), m(this, e, t)
                );
              }),
              (o.prototype.imul = function (e) {
                return this.clone().mulTo(e, this);
              }),
              (o.prototype.imuln = function (e) {
                var t = e < 0;
                t && (e = -e), n("number" == typeof e), n(e < 67108864);
                for (var r = 0, i = 0; i < this.length; i++) {
                  var o = (0 | this.words[i]) * e,
                    a = (67108863 & o) + (67108863 & r);
                  (r >>= 26),
                    (r += (o / 67108864) | 0),
                    (r += a >>> 26),
                    (this.words[i] = 67108863 & a);
                }
                return (
                  0 !== r && ((this.words[i] = r), this.length++),
                  t ? this.ineg() : this
                );
              }),
              (o.prototype.muln = function (e) {
                return this.clone().imuln(e);
              }),
              (o.prototype.sqr = function () {
                return this.mul(this);
              }),
              (o.prototype.isqr = function () {
                return this.imul(this.clone());
              }),
              (o.prototype.pow = function (e) {
                var t = (function (e) {
                  for (
                    var t = new Array(e.bitLength()), r = 0;
                    r < t.length;
                    r++
                  ) {
                    var n = (r / 26) | 0,
                      i = r % 26;
                    t[r] = (e.words[n] >>> i) & 1;
                  }
                  return t;
                })(e);
                if (0 === t.length) return new o(1);
                for (
                  var r = this, n = 0;
                  n < t.length && 0 === t[n];
                  n++, r = r.sqr()
                );
                if (++n < t.length)
                  for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                    0 !== t[n] && (r = r.mul(i));
                return r;
              }),
              (o.prototype.iushln = function (e) {
                n("number" == typeof e && e >= 0);
                var t,
                  r = e % 26,
                  i = (e - r) / 26,
                  o = (67108863 >>> (26 - r)) << (26 - r);
                if (0 !== r) {
                  var a = 0;
                  for (t = 0; t < this.length; t++) {
                    var s = this.words[t] & o,
                      f = ((0 | this.words[t]) - s) << r;
                    (this.words[t] = f | a), (a = s >>> (26 - r));
                  }
                  a && ((this.words[t] = a), this.length++);
                }
                if (0 !== i) {
                  for (t = this.length - 1; t >= 0; t--)
                    this.words[t + i] = this.words[t];
                  for (t = 0; t < i; t++) this.words[t] = 0;
                  this.length += i;
                }
                return this._strip();
              }),
              (o.prototype.ishln = function (e) {
                return n(0 === this.negative), this.iushln(e);
              }),
              (o.prototype.iushrn = function (e, t, r) {
                var i;
                n("number" == typeof e && e >= 0),
                  (i = t ? (t - (t % 26)) / 26 : 0);
                var o = e % 26,
                  a = Math.min((e - o) / 26, this.length),
                  s = 67108863 ^ ((67108863 >>> o) << o),
                  f = r;
                if (((i -= a), (i = Math.max(0, i)), f)) {
                  for (var c = 0; c < a; c++) f.words[c] = this.words[c];
                  f.length = a;
                }
                if (0 === a);
                else if (this.length > a)
                  for (this.length -= a, c = 0; c < this.length; c++)
                    this.words[c] = this.words[c + a];
                else (this.words[0] = 0), (this.length = 1);
                var u = 0;
                for (c = this.length - 1; c >= 0 && (0 !== u || c >= i); c--) {
                  var d = 0 | this.words[c];
                  (this.words[c] = (u << (26 - o)) | (d >>> o)), (u = d & s);
                }
                return (
                  f && 0 !== u && (f.words[f.length++] = u),
                  0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                  this._strip()
                );
              }),
              (o.prototype.ishrn = function (e, t, r) {
                return n(0 === this.negative), this.iushrn(e, t, r);
              }),
              (o.prototype.shln = function (e) {
                return this.clone().ishln(e);
              }),
              (o.prototype.ushln = function (e) {
                return this.clone().iushln(e);
              }),
              (o.prototype.shrn = function (e) {
                return this.clone().ishrn(e);
              }),
              (o.prototype.ushrn = function (e) {
                return this.clone().iushrn(e);
              }),
              (o.prototype.testn = function (e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                  r = (e - t) / 26,
                  i = 1 << t;
                return !(this.length <= r || !(this.words[r] & i));
              }),
              (o.prototype.imaskn = function (e) {
                n("number" == typeof e && e >= 0);
                var t = e % 26,
                  r = (e - t) / 26;
                if (
                  (n(
                    0 === this.negative,
                    "imaskn works only with positive numbers"
                  ),
                  this.length <= r)
                )
                  return this;
                if (
                  (0 !== t && r++,
                  (this.length = Math.min(r, this.length)),
                  0 !== t)
                ) {
                  var i = 67108863 ^ ((67108863 >>> t) << t);
                  this.words[this.length - 1] &= i;
                }
                return this._strip();
              }),
              (o.prototype.maskn = function (e) {
                return this.clone().imaskn(e);
              }),
              (o.prototype.iaddn = function (e) {
                return (
                  n("number" == typeof e),
                  n(e < 67108864),
                  e < 0
                    ? this.isubn(-e)
                    : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1),
                        this)
                    : this._iaddn(e)
                );
              }),
              (o.prototype._iaddn = function (e) {
                this.words[0] += e;
                for (
                  var t = 0;
                  t < this.length && this.words[t] >= 67108864;
                  t++
                )
                  (this.words[t] -= 67108864),
                    t === this.length - 1
                      ? (this.words[t + 1] = 1)
                      : this.words[t + 1]++;
                return (this.length = Math.max(this.length, t + 1)), this;
              }),
              (o.prototype.isubn = function (e) {
                if ((n("number" == typeof e), n(e < 67108864), e < 0))
                  return this.iaddn(-e);
                if (0 !== this.negative)
                  return (
                    (this.negative = 0),
                    this.iaddn(e),
                    (this.negative = 1),
                    this
                  );
                if (
                  ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
                )
                  (this.words[0] = -this.words[0]), (this.negative = 1);
                else
                  for (var t = 0; t < this.length && this.words[t] < 0; t++)
                    (this.words[t] += 67108864), (this.words[t + 1] -= 1);
                return this._strip();
              }),
              (o.prototype.addn = function (e) {
                return this.clone().iaddn(e);
              }),
              (o.prototype.subn = function (e) {
                return this.clone().isubn(e);
              }),
              (o.prototype.iabs = function () {
                return (this.negative = 0), this;
              }),
              (o.prototype.abs = function () {
                return this.clone().iabs();
              }),
              (o.prototype._ishlnsubmul = function (e, t, r) {
                var i,
                  o,
                  a = e.length + r;
                this._expand(a);
                var s = 0;
                for (i = 0; i < e.length; i++) {
                  o = (0 | this.words[i + r]) + s;
                  var f = (0 | e.words[i]) * t;
                  (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                    (this.words[i + r] = 67108863 & o);
                }
                for (; i < this.length - r; i++)
                  (s = (o = (0 | this.words[i + r]) + s) >> 26),
                    (this.words[i + r] = 67108863 & o);
                if (0 === s) return this._strip();
                for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                  (s = (o = -(0 | this.words[i]) + s) >> 26),
                    (this.words[i] = 67108863 & o);
                return (this.negative = 1), this._strip();
              }),
              (o.prototype._wordDiv = function (e, t) {
                var r = (this.length, e.length),
                  n = this.clone(),
                  i = e,
                  a = 0 | i.words[i.length - 1];
                0 != (r = 26 - this._countBits(a)) &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (a = 0 | i.words[i.length - 1]));
                var s,
                  f = n.length - i.length;
                if ("mod" !== t) {
                  ((s = new o(null)).length = f + 1),
                    (s.words = new Array(s.length));
                  for (var c = 0; c < s.length; c++) s.words[c] = 0;
                }
                var u = n.clone()._ishlnsubmul(i, 1, f);
                0 === u.negative && ((n = u), s && (s.words[f] = 1));
                for (var d = f - 1; d >= 0; d--) {
                  var h =
                    67108864 * (0 | n.words[i.length + d]) +
                    (0 | n.words[i.length + d - 1]);
                  for (
                    h = Math.min((h / a) | 0, 67108863),
                      n._ishlnsubmul(i, h, d);
                    0 !== n.negative;

                  )
                    h--,
                      (n.negative = 0),
                      n._ishlnsubmul(i, 1, d),
                      n.isZero() || (n.negative ^= 1);
                  s && (s.words[d] = h);
                }
                return (
                  s && s._strip(),
                  n._strip(),
                  "div" !== t && 0 !== r && n.iushrn(r),
                  { div: s || null, mod: n }
                );
              }),
              (o.prototype.divmod = function (e, t, r) {
                return (
                  n(!e.isZero()),
                  this.isZero()
                    ? { div: new o(0), mod: new o(0) }
                    : 0 !== this.negative && 0 === e.negative
                    ? ((s = this.neg().divmod(e, t)),
                      "mod" !== t && (i = s.div.neg()),
                      "div" !== t &&
                        ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                      { div: i, mod: a })
                    : 0 === this.negative && 0 !== e.negative
                    ? ((s = this.divmod(e.neg(), t)),
                      "mod" !== t && (i = s.div.neg()),
                      { div: i, mod: s.mod })
                    : 0 != (this.negative & e.negative)
                    ? ((s = this.neg().divmod(e.neg(), t)),
                      "div" !== t &&
                        ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                      { div: s.div, mod: a })
                    : e.length > this.length || this.cmp(e) < 0
                    ? { div: new o(0), mod: this }
                    : 1 === e.length
                    ? "div" === t
                      ? { div: this.divn(e.words[0]), mod: null }
                      : "mod" === t
                      ? { div: null, mod: new o(this.modrn(e.words[0])) }
                      : {
                          div: this.divn(e.words[0]),
                          mod: new o(this.modrn(e.words[0])),
                        }
                    : this._wordDiv(e, t)
                );
                var i, a, s;
              }),
              (o.prototype.div = function (e) {
                return this.divmod(e, "div", !1).div;
              }),
              (o.prototype.mod = function (e) {
                return this.divmod(e, "mod", !1).mod;
              }),
              (o.prototype.umod = function (e) {
                return this.divmod(e, "mod", !0).mod;
              }),
              (o.prototype.divRound = function (e) {
                var t = this.divmod(e);
                if (t.mod.isZero()) return t.div;
                var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                  n = e.ushrn(1),
                  i = e.andln(1),
                  o = r.cmp(n);
                return o < 0 || (1 === i && 0 === o)
                  ? t.div
                  : 0 !== t.div.negative
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
              }),
              (o.prototype.modrn = function (e) {
                var t = e < 0;
                t && (e = -e), n(e <= 67108863);
                for (
                  var r = (1 << 26) % e, i = 0, o = this.length - 1;
                  o >= 0;
                  o--
                )
                  i = (r * i + (0 | this.words[o])) % e;
                return t ? -i : i;
              }),
              (o.prototype.modn = function (e) {
                return this.modrn(e);
              }),
              (o.prototype.idivn = function (e) {
                var t = e < 0;
                t && (e = -e), n(e <= 67108863);
                for (var r = 0, i = this.length - 1; i >= 0; i--) {
                  var o = (0 | this.words[i]) + 67108864 * r;
                  (this.words[i] = (o / e) | 0), (r = o % e);
                }
                return this._strip(), t ? this.ineg() : this;
              }),
              (o.prototype.divn = function (e) {
                return this.clone().idivn(e);
              }),
              (o.prototype.egcd = function (e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                  r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (
                  var i = new o(1),
                    a = new o(0),
                    s = new o(0),
                    f = new o(1),
                    c = 0;
                  t.isEven() && r.isEven();

                )
                  t.iushrn(1), r.iushrn(1), ++c;
                for (var u = r.clone(), d = t.clone(); !t.isZero(); ) {
                  for (
                    var h = 0, l = 1;
                    0 == (t.words[0] & l) && h < 26;
                    ++h, l <<= 1
                  );
                  if (h > 0)
                    for (t.iushrn(h); h-- > 0; )
                      (i.isOdd() || a.isOdd()) && (i.iadd(u), a.isub(d)),
                        i.iushrn(1),
                        a.iushrn(1);
                  for (
                    var p = 0, b = 1;
                    0 == (r.words[0] & b) && p < 26;
                    ++p, b <<= 1
                  );
                  if (p > 0)
                    for (r.iushrn(p); p-- > 0; )
                      (s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(d)),
                        s.iushrn(1),
                        f.iushrn(1);
                  t.cmp(r) >= 0
                    ? (t.isub(r), i.isub(s), a.isub(f))
                    : (r.isub(t), s.isub(i), f.isub(a));
                }
                return { a: s, b: f, gcd: r.iushln(c) };
              }),
              (o.prototype._invmp = function (e) {
                n(0 === e.negative), n(!e.isZero());
                var t = this,
                  r = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (
                  var i, a = new o(1), s = new o(0), f = r.clone();
                  t.cmpn(1) > 0 && r.cmpn(1) > 0;

                ) {
                  for (
                    var c = 0, u = 1;
                    0 == (t.words[0] & u) && c < 26;
                    ++c, u <<= 1
                  );
                  if (c > 0)
                    for (t.iushrn(c); c-- > 0; )
                      a.isOdd() && a.iadd(f), a.iushrn(1);
                  for (
                    var d = 0, h = 1;
                    0 == (r.words[0] & h) && d < 26;
                    ++d, h <<= 1
                  );
                  if (d > 0)
                    for (r.iushrn(d); d-- > 0; )
                      s.isOdd() && s.iadd(f), s.iushrn(1);
                  t.cmp(r) >= 0
                    ? (t.isub(r), a.isub(s))
                    : (r.isub(t), s.isub(a));
                }
                return (
                  (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i
                );
              }),
              (o.prototype.gcd = function (e) {
                if (this.isZero()) return e.abs();
                if (e.isZero()) return this.abs();
                var t = this.clone(),
                  r = e.clone();
                (t.negative = 0), (r.negative = 0);
                for (var n = 0; t.isEven() && r.isEven(); n++)
                  t.iushrn(1), r.iushrn(1);
                for (;;) {
                  for (; t.isEven(); ) t.iushrn(1);
                  for (; r.isEven(); ) r.iushrn(1);
                  var i = t.cmp(r);
                  if (i < 0) {
                    var o = t;
                    (t = r), (r = o);
                  } else if (0 === i || 0 === r.cmpn(1)) break;
                  t.isub(r);
                }
                return r.iushln(n);
              }),
              (o.prototype.invm = function (e) {
                return this.egcd(e).a.umod(e);
              }),
              (o.prototype.isEven = function () {
                return 0 == (1 & this.words[0]);
              }),
              (o.prototype.isOdd = function () {
                return 1 == (1 & this.words[0]);
              }),
              (o.prototype.andln = function (e) {
                return this.words[0] & e;
              }),
              (o.prototype.bincn = function (e) {
                n("number" == typeof e);
                var t = e % 26,
                  r = (e - t) / 26,
                  i = 1 << t;
                if (this.length <= r)
                  return this._expand(r + 1), (this.words[r] |= i), this;
                for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                  var s = 0 | this.words[a];
                  (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
                }
                return 0 !== o && ((this.words[a] = o), this.length++), this;
              }),
              (o.prototype.isZero = function () {
                return 1 === this.length && 0 === this.words[0];
              }),
              (o.prototype.cmpn = function (e) {
                var t,
                  r = e < 0;
                if (0 !== this.negative && !r) return -1;
                if (0 === this.negative && r) return 1;
                if ((this._strip(), this.length > 1)) t = 1;
                else {
                  r && (e = -e), n(e <= 67108863, "Number is too big");
                  var i = 0 | this.words[0];
                  t = i === e ? 0 : i < e ? -1 : 1;
                }
                return 0 !== this.negative ? 0 | -t : t;
              }),
              (o.prototype.cmp = function (e) {
                if (0 !== this.negative && 0 === e.negative) return -1;
                if (0 === this.negative && 0 !== e.negative) return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t;
              }),
              (o.prototype.ucmp = function (e) {
                if (this.length > e.length) return 1;
                if (this.length < e.length) return -1;
                for (var t = 0, r = this.length - 1; r >= 0; r--) {
                  var n = 0 | this.words[r],
                    i = 0 | e.words[r];
                  if (n !== i) {
                    n < i ? (t = -1) : n > i && (t = 1);
                    break;
                  }
                }
                return t;
              }),
              (o.prototype.gtn = function (e) {
                return 1 === this.cmpn(e);
              }),
              (o.prototype.gt = function (e) {
                return 1 === this.cmp(e);
              }),
              (o.prototype.gten = function (e) {
                return this.cmpn(e) >= 0;
              }),
              (o.prototype.gte = function (e) {
                return this.cmp(e) >= 0;
              }),
              (o.prototype.ltn = function (e) {
                return -1 === this.cmpn(e);
              }),
              (o.prototype.lt = function (e) {
                return -1 === this.cmp(e);
              }),
              (o.prototype.lten = function (e) {
                return this.cmpn(e) <= 0;
              }),
              (o.prototype.lte = function (e) {
                return this.cmp(e) <= 0;
              }),
              (o.prototype.eqn = function (e) {
                return 0 === this.cmpn(e);
              }),
              (o.prototype.eq = function (e) {
                return 0 === this.cmp(e);
              }),
              (o.red = function (e) {
                return new k(e);
              }),
              (o.prototype.toRed = function (e) {
                return (
                  n(!this.red, "Already a number in reduction context"),
                  n(0 === this.negative, "red works only with positives"),
                  e.convertTo(this)._forceRed(e)
                );
              }),
              (o.prototype.fromRed = function () {
                return (
                  n(
                    this.red,
                    "fromRed works only with numbers in reduction context"
                  ),
                  this.red.convertFrom(this)
                );
              }),
              (o.prototype._forceRed = function (e) {
                return (this.red = e), this;
              }),
              (o.prototype.forceRed = function (e) {
                return (
                  n(!this.red, "Already a number in reduction context"),
                  this._forceRed(e)
                );
              }),
              (o.prototype.redAdd = function (e) {
                return (
                  n(this.red, "redAdd works only with red numbers"),
                  this.red.add(this, e)
                );
              }),
              (o.prototype.redIAdd = function (e) {
                return (
                  n(this.red, "redIAdd works only with red numbers"),
                  this.red.iadd(this, e)
                );
              }),
              (o.prototype.redSub = function (e) {
                return (
                  n(this.red, "redSub works only with red numbers"),
                  this.red.sub(this, e)
                );
              }),
              (o.prototype.redISub = function (e) {
                return (
                  n(this.red, "redISub works only with red numbers"),
                  this.red.isub(this, e)
                );
              }),
              (o.prototype.redShl = function (e) {
                return (
                  n(this.red, "redShl works only with red numbers"),
                  this.red.shl(this, e)
                );
              }),
              (o.prototype.redMul = function (e) {
                return (
                  n(this.red, "redMul works only with red numbers"),
                  this.red._verify2(this, e),
                  this.red.mul(this, e)
                );
              }),
              (o.prototype.redIMul = function (e) {
                return (
                  n(this.red, "redMul works only with red numbers"),
                  this.red._verify2(this, e),
                  this.red.imul(this, e)
                );
              }),
              (o.prototype.redSqr = function () {
                return (
                  n(this.red, "redSqr works only with red numbers"),
                  this.red._verify1(this),
                  this.red.sqr(this)
                );
              }),
              (o.prototype.redISqr = function () {
                return (
                  n(this.red, "redISqr works only with red numbers"),
                  this.red._verify1(this),
                  this.red.isqr(this)
                );
              }),
              (o.prototype.redSqrt = function () {
                return (
                  n(this.red, "redSqrt works only with red numbers"),
                  this.red._verify1(this),
                  this.red.sqrt(this)
                );
              }),
              (o.prototype.redInvm = function () {
                return (
                  n(this.red, "redInvm works only with red numbers"),
                  this.red._verify1(this),
                  this.red.invm(this)
                );
              }),
              (o.prototype.redNeg = function () {
                return (
                  n(this.red, "redNeg works only with red numbers"),
                  this.red._verify1(this),
                  this.red.neg(this)
                );
              }),
              (o.prototype.redPow = function (e) {
                return (
                  n(this.red && !e.red, "redPow(normalNum)"),
                  this.red._verify1(this),
                  this.red.pow(this, e)
                );
              });
            var w = { k256: null, p224: null, p192: null, p25519: null };
            function _(e, t) {
              (this.name = e),
                (this.p = new o(t, 16)),
                (this.n = this.p.bitLength()),
                (this.k = new o(1).iushln(this.n).isub(this.p)),
                (this.tmp = this._tmp());
            }
            function S() {
              _.call(
                this,
                "k256",
                "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
              );
            }
            function E() {
              _.call(
                this,
                "p224",
                "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
              );
            }
            function A() {
              _.call(
                this,
                "p192",
                "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
              );
            }
            function M() {
              _.call(
                this,
                "25519",
                "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
              );
            }
            function k(e) {
              if ("string" == typeof e) {
                var t = o._prime(e);
                (this.m = t.p), (this.prime = t);
              } else
                n(e.gtn(1), "modulus must be greater than 1"),
                  (this.m = e),
                  (this.prime = null);
            }
            function O(e) {
              k.call(this, e),
                (this.shift = this.m.bitLength()),
                this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
                (this.r = new o(1).iushln(this.shift)),
                (this.r2 = this.imod(this.r.sqr())),
                (this.rinv = this.r._invmp(this.m)),
                (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                (this.minv = this.minv.umod(this.r)),
                (this.minv = this.r.sub(this.minv));
            }
            (_.prototype._tmp = function () {
              var e = new o(null);
              return (e.words = new Array(Math.ceil(this.n / 13))), e;
            }),
              (_.prototype.ireduce = function (e) {
                var t,
                  r = e;
                do {
                  this.split(r, this.tmp),
                    (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
                } while (t > this.n);
                var n = t < this.n ? -1 : r.ucmp(this.p);
                return (
                  0 === n
                    ? ((r.words[0] = 0), (r.length = 1))
                    : n > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                    ? r.strip()
                    : r._strip(),
                  r
                );
              }),
              (_.prototype.split = function (e, t) {
                e.iushrn(this.n, 0, t);
              }),
              (_.prototype.imulK = function (e) {
                return e.imul(this.k);
              }),
              i(S, _),
              (S.prototype.split = function (e, t) {
                for (
                  var r = 4194303, n = Math.min(e.length, 9), i = 0;
                  i < n;
                  i++
                )
                  t.words[i] = e.words[i];
                if (((t.length = n), e.length <= 9))
                  return (e.words[0] = 0), void (e.length = 1);
                var o = e.words[9];
                for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
                  var a = 0 | e.words[i];
                  (e.words[i - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
                }
                (o >>>= 22),
                  (e.words[i - 10] = o),
                  0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
              }),
              (S.prototype.imulK = function (e) {
                (e.words[e.length] = 0),
                  (e.words[e.length + 1] = 0),
                  (e.length += 2);
                for (var t = 0, r = 0; r < e.length; r++) {
                  var n = 0 | e.words[r];
                  (t += 977 * n),
                    (e.words[r] = 67108863 & t),
                    (t = 64 * n + ((t / 67108864) | 0));
                }
                return (
                  0 === e.words[e.length - 1] &&
                    (e.length--, 0 === e.words[e.length - 1] && e.length--),
                  e
                );
              }),
              i(E, _),
              i(A, _),
              i(M, _),
              (M.prototype.imulK = function (e) {
                for (var t = 0, r = 0; r < e.length; r++) {
                  var n = 19 * (0 | e.words[r]) + t,
                    i = 67108863 & n;
                  (n >>>= 26), (e.words[r] = i), (t = n);
                }
                return 0 !== t && (e.words[e.length++] = t), e;
              }),
              (o._prime = function (e) {
                if (w[e]) return w[e];
                var t;
                if ("k256" === e) t = new S();
                else if ("p224" === e) t = new E();
                else if ("p192" === e) t = new A();
                else {
                  if ("p25519" !== e) throw new Error("Unknown prime " + e);
                  t = new M();
                }
                return (w[e] = t), t;
              }),
              (k.prototype._verify1 = function (e) {
                n(0 === e.negative, "red works only with positives"),
                  n(e.red, "red works only with red numbers");
              }),
              (k.prototype._verify2 = function (e, t) {
                n(
                  0 == (e.negative | t.negative),
                  "red works only with positives"
                ),
                  n(
                    e.red && e.red === t.red,
                    "red works only with red numbers"
                  );
              }),
              (k.prototype.imod = function (e) {
                return this.prime
                  ? this.prime.ireduce(e)._forceRed(this)
                  : (u(e, e.umod(this.m)._forceRed(this)), e);
              }),
              (k.prototype.neg = function (e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
              }),
              (k.prototype.add = function (e, t) {
                this._verify2(e, t);
                var r = e.add(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
              }),
              (k.prototype.iadd = function (e, t) {
                this._verify2(e, t);
                var r = e.iadd(t);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r;
              }),
              (k.prototype.sub = function (e, t) {
                this._verify2(e, t);
                var r = e.sub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
              }),
              (k.prototype.isub = function (e, t) {
                this._verify2(e, t);
                var r = e.isub(t);
                return r.cmpn(0) < 0 && r.iadd(this.m), r;
              }),
              (k.prototype.shl = function (e, t) {
                return this._verify1(e), this.imod(e.ushln(t));
              }),
              (k.prototype.imul = function (e, t) {
                return this._verify2(e, t), this.imod(e.imul(t));
              }),
              (k.prototype.mul = function (e, t) {
                return this._verify2(e, t), this.imod(e.mul(t));
              }),
              (k.prototype.isqr = function (e) {
                return this.imul(e, e.clone());
              }),
              (k.prototype.sqr = function (e) {
                return this.mul(e, e);
              }),
              (k.prototype.sqrt = function (e) {
                if (e.isZero()) return e.clone();
                var t = this.m.andln(3);
                if ((n(t % 2 == 1), 3 === t)) {
                  var r = this.m.add(new o(1)).iushrn(2);
                  return this.pow(e, r);
                }
                for (
                  var i = this.m.subn(1), a = 0;
                  !i.isZero() && 0 === i.andln(1);

                )
                  a++, i.iushrn(1);
                n(!i.isZero());
                var s = new o(1).toRed(this),
                  f = s.redNeg(),
                  c = this.m.subn(1).iushrn(1),
                  u = this.m.bitLength();
                for (
                  u = new o(2 * u * u).toRed(this);
                  0 !== this.pow(u, c).cmp(f);

                )
                  u.redIAdd(f);
                for (
                  var d = this.pow(u, i),
                    h = this.pow(e, i.addn(1).iushrn(1)),
                    l = this.pow(e, i),
                    p = a;
                  0 !== l.cmp(s);

                ) {
                  for (var b = l, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
                  n(y < p);
                  var g = this.pow(d, new o(1).iushln(p - y - 1));
                  (h = h.redMul(g)),
                    (d = g.redSqr()),
                    (l = l.redMul(d)),
                    (p = y);
                }
                return h;
              }),
              (k.prototype.invm = function (e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative
                  ? ((t.negative = 0), this.imod(t).redNeg())
                  : this.imod(t);
              }),
              (k.prototype.pow = function (e, t) {
                if (t.isZero()) return new o(1).toRed(this);
                if (0 === t.cmpn(1)) return e.clone();
                var r = new Array(16);
                (r[0] = new o(1).toRed(this)), (r[1] = e);
                for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                var i = r[0],
                  a = 0,
                  s = 0,
                  f = t.bitLength() % 26;
                for (0 === f && (f = 26), n = t.length - 1; n >= 0; n--) {
                  for (var c = t.words[n], u = f - 1; u >= 0; u--) {
                    var d = (c >> u) & 1;
                    i !== r[0] && (i = this.sqr(i)),
                      0 !== d || 0 !== a
                        ? ((a <<= 1),
                          (a |= d),
                          (4 == ++s || (0 === n && 0 === u)) &&
                            ((i = this.mul(i, r[a])), (s = 0), (a = 0)))
                        : (s = 0);
                  }
                  f = 26;
                }
                return i;
              }),
              (k.prototype.convertTo = function (e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t;
              }),
              (k.prototype.convertFrom = function (e) {
                var t = e.clone();
                return (t.red = null), t;
              }),
              (o.mont = function (e) {
                return new O(e);
              }),
              i(O, k),
              (O.prototype.convertTo = function (e) {
                return this.imod(e.ushln(this.shift));
              }),
              (O.prototype.convertFrom = function (e) {
                var t = this.imod(e.mul(this.rinv));
                return (t.red = null), t;
              }),
              (O.prototype.imul = function (e, t) {
                if (e.isZero() || t.isZero())
                  return (e.words[0] = 0), (e.length = 1), e;
                var r = e.imul(t),
                  n = r
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m),
                  i = r.isub(n).iushrn(this.shift),
                  o = i;
                return (
                  i.cmp(this.m) >= 0
                    ? (o = i.isub(this.m))
                    : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                  o._forceRed(this)
                );
              }),
              (O.prototype.mul = function (e, t) {
                if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                var r = e.mul(t),
                  n = r
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m),
                  i = r.isub(n).iushrn(this.shift),
                  a = i;
                return (
                  i.cmp(this.m) >= 0
                    ? (a = i.isub(this.m))
                    : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                  a._forceRed(this)
                );
              }),
              (O.prototype.invm = function (e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
              });
          })((e = r.nmd(e)), this);
        },
        5552: (e, t, r) => {
          var n;
          function i(e) {
            this.rand = e;
          }
          if (
            ((e.exports = function (e) {
              return n || (n = new i(null)), n.generate(e);
            }),
            (e.exports.Rand = i),
            (i.prototype.generate = function (e) {
              return this._rand(e);
            }),
            (i.prototype._rand = function (e) {
              if (this.rand.getBytes) return this.rand.getBytes(e);
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                t[r] = this.rand.getByte();
              return t;
            }),
            "object" == typeof self)
          )
            self.crypto && self.crypto.getRandomValues
              ? (i.prototype._rand = function (e) {
                  var t = new Uint8Array(e);
                  return self.crypto.getRandomValues(t), t;
                })
              : self.msCrypto && self.msCrypto.getRandomValues
              ? (i.prototype._rand = function (e) {
                  var t = new Uint8Array(e);
                  return self.msCrypto.getRandomValues(t), t;
                })
              : "object" == typeof window &&
                (i.prototype._rand = function () {
                  throw new Error("Not implemented yet");
                });
          else
            try {
              var o = r(3907);
              if ("function" != typeof o.randomBytes)
                throw new Error("Not supported");
              i.prototype._rand = function (e) {
                return o.randomBytes(e);
              };
            } catch (e) {}
        },
        889: (e, t, r) => {
          var n = r(707).Buffer;
          function i(e) {
            n.isBuffer(e) || (e = n.from(e));
            for (
              var t = (e.length / 4) | 0, r = new Array(t), i = 0;
              i < t;
              i++
            )
              r[i] = e.readUInt32BE(4 * i);
            return r;
          }
          function o(e) {
            for (; 0 < e.length; e++) e[0] = 0;
          }
          function a(e, t, r, n, i) {
            for (
              var o,
                a,
                s,
                f,
                c = r[0],
                u = r[1],
                d = r[2],
                h = r[3],
                l = e[0] ^ t[0],
                p = e[1] ^ t[1],
                b = e[2] ^ t[2],
                y = e[3] ^ t[3],
                g = 4,
                m = 1;
              m < i;
              m++
            )
              (o =
                c[l >>> 24] ^
                u[(p >>> 16) & 255] ^
                d[(b >>> 8) & 255] ^
                h[255 & y] ^
                t[g++]),
                (a =
                  c[p >>> 24] ^
                  u[(b >>> 16) & 255] ^
                  d[(y >>> 8) & 255] ^
                  h[255 & l] ^
                  t[g++]),
                (s =
                  c[b >>> 24] ^
                  u[(y >>> 16) & 255] ^
                  d[(l >>> 8) & 255] ^
                  h[255 & p] ^
                  t[g++]),
                (f =
                  c[y >>> 24] ^
                  u[(l >>> 16) & 255] ^
                  d[(p >>> 8) & 255] ^
                  h[255 & b] ^
                  t[g++]),
                (l = o),
                (p = a),
                (b = s),
                (y = f);
            return (
              (o =
                ((n[l >>> 24] << 24) |
                  (n[(p >>> 16) & 255] << 16) |
                  (n[(b >>> 8) & 255] << 8) |
                  n[255 & y]) ^
                t[g++]),
              (a =
                ((n[p >>> 24] << 24) |
                  (n[(b >>> 16) & 255] << 16) |
                  (n[(y >>> 8) & 255] << 8) |
                  n[255 & l]) ^
                t[g++]),
              (s =
                ((n[b >>> 24] << 24) |
                  (n[(y >>> 16) & 255] << 16) |
                  (n[(l >>> 8) & 255] << 8) |
                  n[255 & p]) ^
                t[g++]),
              (f =
                ((n[y >>> 24] << 24) |
                  (n[(l >>> 16) & 255] << 16) |
                  (n[(p >>> 8) & 255] << 8) |
                  n[255 & b]) ^
                t[g++]),
              [(o >>>= 0), (a >>>= 0), (s >>>= 0), (f >>>= 0)]
            );
          }
          var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            f = (function () {
              for (var e = new Array(256), t = 0; t < 256; t++)
                e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
              for (
                var r = [],
                  n = [],
                  i = [[], [], [], []],
                  o = [[], [], [], []],
                  a = 0,
                  s = 0,
                  f = 0;
                f < 256;
                ++f
              ) {
                var c = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
                (c = (c >>> 8) ^ (255 & c) ^ 99), (r[a] = c), (n[c] = a);
                var u = e[a],
                  d = e[u],
                  h = e[d],
                  l = (257 * e[c]) ^ (16843008 * c);
                (i[0][a] = (l << 24) | (l >>> 8)),
                  (i[1][a] = (l << 16) | (l >>> 16)),
                  (i[2][a] = (l << 8) | (l >>> 24)),
                  (i[3][a] = l),
                  (l =
                    (16843009 * h) ^ (65537 * d) ^ (257 * u) ^ (16843008 * a)),
                  (o[0][c] = (l << 24) | (l >>> 8)),
                  (o[1][c] = (l << 16) | (l >>> 16)),
                  (o[2][c] = (l << 8) | (l >>> 24)),
                  (o[3][c] = l),
                  0 === a
                    ? (a = s = 1)
                    : ((a = u ^ e[e[e[h ^ u]]]), (s ^= e[e[s]]));
              }
              return { SBOX: r, INV_SBOX: n, SUB_MIX: i, INV_SUB_MIX: o };
            })();
          function c(e) {
            (this._key = i(e)), this._reset();
          }
          (c.blockSize = 16),
            (c.keySize = 32),
            (c.prototype.blockSize = c.blockSize),
            (c.prototype.keySize = c.keySize),
            (c.prototype._reset = function () {
              for (
                var e = this._key,
                  t = e.length,
                  r = t + 6,
                  n = 4 * (r + 1),
                  i = [],
                  o = 0;
                o < t;
                o++
              )
                i[o] = e[o];
              for (o = t; o < n; o++) {
                var a = i[o - 1];
                o % t == 0
                  ? ((a = (a << 8) | (a >>> 24)),
                    (a =
                      (f.SBOX[a >>> 24] << 24) |
                      (f.SBOX[(a >>> 16) & 255] << 16) |
                      (f.SBOX[(a >>> 8) & 255] << 8) |
                      f.SBOX[255 & a]),
                    (a ^= s[(o / t) | 0] << 24))
                  : t > 6 &&
                    o % t == 4 &&
                    (a =
                      (f.SBOX[a >>> 24] << 24) |
                      (f.SBOX[(a >>> 16) & 255] << 16) |
                      (f.SBOX[(a >>> 8) & 255] << 8) |
                      f.SBOX[255 & a]),
                  (i[o] = i[o - t] ^ a);
              }
              for (var c = [], u = 0; u < n; u++) {
                var d = n - u,
                  h = i[d - (u % 4 ? 0 : 4)];
                c[u] =
                  u < 4 || d <= 4
                    ? h
                    : f.INV_SUB_MIX[0][f.SBOX[h >>> 24]] ^
                      f.INV_SUB_MIX[1][f.SBOX[(h >>> 16) & 255]] ^
                      f.INV_SUB_MIX[2][f.SBOX[(h >>> 8) & 255]] ^
                      f.INV_SUB_MIX[3][f.SBOX[255 & h]];
              }
              (this._nRounds = r),
                (this._keySchedule = i),
                (this._invKeySchedule = c);
            }),
            (c.prototype.encryptBlockRaw = function (e) {
              return a(
                (e = i(e)),
                this._keySchedule,
                f.SUB_MIX,
                f.SBOX,
                this._nRounds
              );
            }),
            (c.prototype.encryptBlock = function (e) {
              var t = this.encryptBlockRaw(e),
                r = n.allocUnsafe(16);
              return (
                r.writeUInt32BE(t[0], 0),
                r.writeUInt32BE(t[1], 4),
                r.writeUInt32BE(t[2], 8),
                r.writeUInt32BE(t[3], 12),
                r
              );
            }),
            (c.prototype.decryptBlock = function (e) {
              var t = (e = i(e))[1];
              (e[1] = e[3]), (e[3] = t);
              var r = a(
                  e,
                  this._invKeySchedule,
                  f.INV_SUB_MIX,
                  f.INV_SBOX,
                  this._nRounds
                ),
                o = n.allocUnsafe(16);
              return (
                o.writeUInt32BE(r[0], 0),
                o.writeUInt32BE(r[3], 4),
                o.writeUInt32BE(r[2], 8),
                o.writeUInt32BE(r[1], 12),
                o
              );
            }),
            (c.prototype.scrub = function () {
              o(this._keySchedule), o(this._invKeySchedule), o(this._key);
            }),
            (e.exports.AES = c);
        },
        6120: (e, t, r) => {
          var n = r(889),
            i = r(707).Buffer,
            o = r(7752),
            a = r(2111),
            s = r(1145),
            f = r(7714),
            c = r(5430);
          function u(e, t, r, a) {
            o.call(this);
            var f = i.alloc(4, 0);
            this._cipher = new n.AES(t);
            var u = this._cipher.encryptBlock(f);
            (this._ghash = new s(u)),
              (r = (function (e, t, r) {
                if (12 === t.length)
                  return (
                    (e._finID = i.concat([t, i.from([0, 0, 0, 1])])),
                    i.concat([t, i.from([0, 0, 0, 2])])
                  );
                var n = new s(r),
                  o = t.length,
                  a = o % 16;
                n.update(t),
                  a && ((a = 16 - a), n.update(i.alloc(a, 0))),
                  n.update(i.alloc(8, 0));
                var f = 8 * o,
                  u = i.alloc(8);
                u.writeUIntBE(f, 0, 8), n.update(u), (e._finID = n.state);
                var d = i.from(e._finID);
                return c(d), d;
              })(this, r, u)),
              (this._prev = i.from(r)),
              (this._cache = i.allocUnsafe(0)),
              (this._secCache = i.allocUnsafe(0)),
              (this._decrypt = a),
              (this._alen = 0),
              (this._len = 0),
              (this._mode = e),
              (this._authTag = null),
              (this._called = !1);
          }
          a(u, o),
            (u.prototype._update = function (e) {
              if (!this._called && this._alen) {
                var t = 16 - (this._alen % 16);
                t < 16 && ((t = i.alloc(t, 0)), this._ghash.update(t));
              }
              this._called = !0;
              var r = this._mode.encrypt(this, e);
              return (
                this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
                (this._len += e.length),
                r
              );
            }),
            (u.prototype._final = function () {
              if (this._decrypt && !this._authTag)
                throw new Error(
                  "Unsupported state or unable to authenticate data"
                );
              var e = f(
                this._ghash.final(8 * this._alen, 8 * this._len),
                this._cipher.encryptBlock(this._finID)
              );
              if (
                this._decrypt &&
                (function (e, t) {
                  var r = 0;
                  e.length !== t.length && r++;
                  for (var n = Math.min(e.length, t.length), i = 0; i < n; ++i)
                    r += e[i] ^ t[i];
                  return r;
                })(e, this._authTag)
              )
                throw new Error(
                  "Unsupported state or unable to authenticate data"
                );
              (this._authTag = e), this._cipher.scrub();
            }),
            (u.prototype.getAuthTag = function () {
              if (this._decrypt || !i.isBuffer(this._authTag))
                throw new Error(
                  "Attempting to get auth tag in unsupported state"
                );
              return this._authTag;
            }),
            (u.prototype.setAuthTag = function (e) {
              if (!this._decrypt)
                throw new Error(
                  "Attempting to set auth tag in unsupported state"
                );
              this._authTag = e;
            }),
            (u.prototype.setAAD = function (e) {
              if (this._called)
                throw new Error("Attempting to set AAD in unsupported state");
              this._ghash.update(e), (this._alen += e.length);
            }),
            (e.exports = u);
        },
        1908: (e, t, r) => {
          var n = r(8218),
            i = r(2550),
            o = r(1978);
          (t.createCipher = t.Cipher = n.createCipher),
            (t.createCipheriv = t.Cipheriv = n.createCipheriv),
            (t.createDecipher = t.Decipher = i.createDecipher),
            (t.createDecipheriv = t.Decipheriv = i.createDecipheriv),
            (t.listCiphers = t.getCiphers =
              function () {
                return Object.keys(o);
              });
        },
        2550: (e, t, r) => {
          var n = r(6120),
            i = r(707).Buffer,
            o = r(4468),
            a = r(8812),
            s = r(7752),
            f = r(889),
            c = r(4642);
          function u(e, t, r) {
            s.call(this),
              (this._cache = new d()),
              (this._last = void 0),
              (this._cipher = new f.AES(t)),
              (this._prev = i.from(r)),
              (this._mode = e),
              (this._autopadding = !0);
          }
          function d() {
            this.cache = i.allocUnsafe(0);
          }
          function h(e, t, r) {
            var s = o[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if (
              ("string" == typeof r && (r = i.from(r)),
              "GCM" !== s.mode && r.length !== s.iv)
            )
              throw new TypeError("invalid iv length " + r.length);
            if (
              ("string" == typeof t && (t = i.from(t)), t.length !== s.key / 8)
            )
              throw new TypeError("invalid key length " + t.length);
            return "stream" === s.type
              ? new a(s.module, t, r, !0)
              : "auth" === s.type
              ? new n(s.module, t, r, !0)
              : new u(s.module, t, r);
          }
          r(2111)(u, s),
            (u.prototype._update = function (e) {
              var t, r;
              this._cache.add(e);
              for (var n = []; (t = this._cache.get(this._autopadding)); )
                (r = this._mode.decrypt(this, t)), n.push(r);
              return i.concat(n);
            }),
            (u.prototype._final = function () {
              var e = this._cache.flush();
              if (this._autopadding)
                return (function (e) {
                  var t = e[15];
                  if (t < 1 || t > 16)
                    throw new Error("unable to decrypt data");
                  for (var r = -1; ++r < t; )
                    if (e[r + (16 - t)] !== t)
                      throw new Error("unable to decrypt data");
                  if (16 !== t) return e.slice(0, 16 - t);
                })(this._mode.decrypt(this, e));
              if (e) throw new Error("data not multiple of block length");
            }),
            (u.prototype.setAutoPadding = function (e) {
              return (this._autopadding = !!e), this;
            }),
            (d.prototype.add = function (e) {
              this.cache = i.concat([this.cache, e]);
            }),
            (d.prototype.get = function (e) {
              var t;
              if (e) {
                if (this.cache.length > 16)
                  return (
                    (t = this.cache.slice(0, 16)),
                    (this.cache = this.cache.slice(16)),
                    t
                  );
              } else if (this.cache.length >= 16)
                return (
                  (t = this.cache.slice(0, 16)),
                  (this.cache = this.cache.slice(16)),
                  t
                );
              return null;
            }),
            (d.prototype.flush = function () {
              if (this.cache.length) return this.cache;
            }),
            (t.createDecipher = function (e, t) {
              var r = o[e.toLowerCase()];
              if (!r) throw new TypeError("invalid suite type");
              var n = c(t, !1, r.key, r.iv);
              return h(e, n.key, n.iv);
            }),
            (t.createDecipheriv = h);
        },
        8218: (e, t, r) => {
          var n = r(4468),
            i = r(6120),
            o = r(707).Buffer,
            a = r(8812),
            s = r(7752),
            f = r(889),
            c = r(4642);
          function u(e, t, r) {
            s.call(this),
              (this._cache = new h()),
              (this._cipher = new f.AES(t)),
              (this._prev = o.from(r)),
              (this._mode = e),
              (this._autopadding = !0);
          }
          r(2111)(u, s),
            (u.prototype._update = function (e) {
              var t, r;
              this._cache.add(e);
              for (var n = []; (t = this._cache.get()); )
                (r = this._mode.encrypt(this, t)), n.push(r);
              return o.concat(n);
            });
          var d = o.alloc(16, 16);
          function h() {
            this.cache = o.allocUnsafe(0);
          }
          function l(e, t, r) {
            var s = n[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if (
              ("string" == typeof t && (t = o.from(t)), t.length !== s.key / 8)
            )
              throw new TypeError("invalid key length " + t.length);
            if (
              ("string" == typeof r && (r = o.from(r)),
              "GCM" !== s.mode && r.length !== s.iv)
            )
              throw new TypeError("invalid iv length " + r.length);
            return "stream" === s.type
              ? new a(s.module, t, r)
              : "auth" === s.type
              ? new i(s.module, t, r)
              : new u(s.module, t, r);
          }
          (u.prototype._final = function () {
            var e = this._cache.flush();
            if (this._autopadding)
              return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
            if (!e.equals(d))
              throw (
                (this._cipher.scrub(),
                new Error("data not multiple of block length"))
              );
          }),
            (u.prototype.setAutoPadding = function (e) {
              return (this._autopadding = !!e), this;
            }),
            (h.prototype.add = function (e) {
              this.cache = o.concat([this.cache, e]);
            }),
            (h.prototype.get = function () {
              if (this.cache.length > 15) {
                var e = this.cache.slice(0, 16);
                return (this.cache = this.cache.slice(16)), e;
              }
              return null;
            }),
            (h.prototype.flush = function () {
              for (
                var e = 16 - this.cache.length, t = o.allocUnsafe(e), r = -1;
                ++r < e;

              )
                t.writeUInt8(e, r);
              return o.concat([this.cache, t]);
            }),
            (t.createCipheriv = l),
            (t.createCipher = function (e, t) {
              var r = n[e.toLowerCase()];
              if (!r) throw new TypeError("invalid suite type");
              var i = c(t, !1, r.key, r.iv);
              return l(e, i.key, i.iv);
            });
        },
        1145: (e, t, r) => {
          var n = r(707).Buffer,
            i = n.alloc(16, 0);
          function o(e) {
            var t = n.allocUnsafe(16);
            return (
              t.writeUInt32BE(e[0] >>> 0, 0),
              t.writeUInt32BE(e[1] >>> 0, 4),
              t.writeUInt32BE(e[2] >>> 0, 8),
              t.writeUInt32BE(e[3] >>> 0, 12),
              t
            );
          }
          function a(e) {
            (this.h = e),
              (this.state = n.alloc(16, 0)),
              (this.cache = n.allocUnsafe(0));
          }
          (a.prototype.ghash = function (e) {
            for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
            this._multiply();
          }),
            (a.prototype._multiply = function () {
              for (
                var e,
                  t,
                  r,
                  n = [
                    (e = this.h).readUInt32BE(0),
                    e.readUInt32BE(4),
                    e.readUInt32BE(8),
                    e.readUInt32BE(12),
                  ],
                  i = [0, 0, 0, 0],
                  a = -1;
                ++a < 128;

              ) {
                for (
                  0 != (this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) &&
                    ((i[0] ^= n[0]),
                    (i[1] ^= n[1]),
                    (i[2] ^= n[2]),
                    (i[3] ^= n[3])),
                    r = 0 != (1 & n[3]),
                    t = 3;
                  t > 0;
                  t--
                )
                  n[t] = (n[t] >>> 1) | ((1 & n[t - 1]) << 31);
                (n[0] = n[0] >>> 1), r && (n[0] = n[0] ^ (225 << 24));
              }
              this.state = o(i);
            }),
            (a.prototype.update = function (e) {
              var t;
              for (
                this.cache = n.concat([this.cache, e]);
                this.cache.length >= 16;

              )
                (t = this.cache.slice(0, 16)),
                  (this.cache = this.cache.slice(16)),
                  this.ghash(t);
            }),
            (a.prototype.final = function (e, t) {
              return (
                this.cache.length && this.ghash(n.concat([this.cache, i], 16)),
                this.ghash(o([0, e, 0, t])),
                this.state
              );
            }),
            (e.exports = a);
        },
        5430: (e) => {
          e.exports = function (e) {
            for (var t, r = e.length; r--; ) {
              if (255 !== (t = e.readUInt8(r))) {
                t++, e.writeUInt8(t, r);
                break;
              }
              e.writeUInt8(0, r);
            }
          };
        },
        2167: (e, t, r) => {
          var n = r(7714);
          (t.encrypt = function (e, t) {
            var r = n(t, e._prev);
            return (e._prev = e._cipher.encryptBlock(r)), e._prev;
          }),
            (t.decrypt = function (e, t) {
              var r = e._prev;
              e._prev = t;
              var i = e._cipher.decryptBlock(t);
              return n(i, r);
            });
        },
        9907: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(7714);
          function o(e, t, r) {
            var o = t.length,
              a = i(t, e._cache);
            return (
              (e._cache = e._cache.slice(o)),
              (e._prev = n.concat([e._prev, r ? t : a])),
              a
            );
          }
          t.encrypt = function (e, t, r) {
            for (var i, a = n.allocUnsafe(0); t.length; ) {
              if (
                (0 === e._cache.length &&
                  ((e._cache = e._cipher.encryptBlock(e._prev)),
                  (e._prev = n.allocUnsafe(0))),
                !(e._cache.length <= t.length))
              ) {
                a = n.concat([a, o(e, t, r)]);
                break;
              }
              (i = e._cache.length),
                (a = n.concat([a, o(e, t.slice(0, i), r)])),
                (t = t.slice(i));
            }
            return a;
          };
        },
        40: (e, t, r) => {
          var n = r(707).Buffer;
          function i(e, t, r) {
            for (var n, i, a = -1, s = 0; ++a < 8; )
              (n = t & (1 << (7 - a)) ? 128 : 0),
                (s +=
                  (128 & (i = e._cipher.encryptBlock(e._prev)[0] ^ n)) >>
                  a % 8),
                (e._prev = o(e._prev, r ? n : i));
            return s;
          }
          function o(e, t) {
            var r = e.length,
              i = -1,
              o = n.allocUnsafe(e.length);
            for (e = n.concat([e, n.from([t])]); ++i < r; )
              o[i] = (e[i] << 1) | (e[i + 1] >> 7);
            return o;
          }
          t.encrypt = function (e, t, r) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o; )
              a[s] = i(e, t[s], r);
            return a;
          };
        },
        2165: (e, t, r) => {
          var n = r(707).Buffer;
          function i(e, t, r) {
            var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return (
              (e._prev = n.concat([e._prev.slice(1), n.from([r ? t : i])])), i
            );
          }
          t.encrypt = function (e, t, r) {
            for (var o = t.length, a = n.allocUnsafe(o), s = -1; ++s < o; )
              a[s] = i(e, t[s], r);
            return a;
          };
        },
        4670: (e, t, r) => {
          var n = r(7714),
            i = r(707).Buffer,
            o = r(5430);
          function a(e) {
            var t = e._cipher.encryptBlockRaw(e._prev);
            return o(e._prev), t;
          }
          t.encrypt = function (e, t) {
            var r = Math.ceil(t.length / 16),
              o = e._cache.length;
            e._cache = i.concat([e._cache, i.allocUnsafe(16 * r)]);
            for (var s = 0; s < r; s++) {
              var f = a(e),
                c = o + 16 * s;
              e._cache.writeUInt32BE(f[0], c + 0),
                e._cache.writeUInt32BE(f[1], c + 4),
                e._cache.writeUInt32BE(f[2], c + 8),
                e._cache.writeUInt32BE(f[3], c + 12);
            }
            var u = e._cache.slice(0, t.length);
            return (e._cache = e._cache.slice(t.length)), n(t, u);
          };
        },
        2956: (e, t) => {
          (t.encrypt = function (e, t) {
            return e._cipher.encryptBlock(t);
          }),
            (t.decrypt = function (e, t) {
              return e._cipher.decryptBlock(t);
            });
        },
        4468: (e, t, r) => {
          var n = {
              ECB: r(2956),
              CBC: r(2167),
              CFB: r(9907),
              CFB8: r(2165),
              CFB1: r(40),
              OFB: r(513),
              CTR: r(4670),
              GCM: r(4670),
            },
            i = r(1978);
          for (var o in i) i[o].module = n[i[o].mode];
          e.exports = i;
        },
        513: (e, t, r) => {
          var n = r(5291).Buffer,
            i = r(7714);
          function o(e) {
            return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
          }
          t.encrypt = function (e, t) {
            for (; e._cache.length < t.length; )
              e._cache = n.concat([e._cache, o(e)]);
            var r = e._cache.slice(0, t.length);
            return (e._cache = e._cache.slice(t.length)), i(t, r);
          };
        },
        8812: (e, t, r) => {
          var n = r(889),
            i = r(707).Buffer,
            o = r(7752);
          function a(e, t, r, a) {
            o.call(this),
              (this._cipher = new n.AES(t)),
              (this._prev = i.from(r)),
              (this._cache = i.allocUnsafe(0)),
              (this._secCache = i.allocUnsafe(0)),
              (this._decrypt = a),
              (this._mode = e);
          }
          r(2111)(a, o),
            (a.prototype._update = function (e) {
              return this._mode.encrypt(this, e, this._decrypt);
            }),
            (a.prototype._final = function () {
              this._cipher.scrub();
            }),
            (e.exports = a);
        },
        1459: (e, t, r) => {
          var n = r(1235),
            i = r(1908),
            o = r(4468),
            a = r(5791),
            s = r(4642);
          function f(e, t, r) {
            if (((e = e.toLowerCase()), o[e])) return i.createCipheriv(e, t, r);
            if (a[e]) return new n({ key: t, iv: r, mode: e });
            throw new TypeError("invalid suite type");
          }
          function c(e, t, r) {
            if (((e = e.toLowerCase()), o[e]))
              return i.createDecipheriv(e, t, r);
            if (a[e]) return new n({ key: t, iv: r, mode: e, decrypt: !0 });
            throw new TypeError("invalid suite type");
          }
          (t.createCipher = t.Cipher =
            function (e, t) {
              var r, n;
              if (((e = e.toLowerCase()), o[e])) (r = o[e].key), (n = o[e].iv);
              else {
                if (!a[e]) throw new TypeError("invalid suite type");
                (r = 8 * a[e].key), (n = a[e].iv);
              }
              var i = s(t, !1, r, n);
              return f(e, i.key, i.iv);
            }),
            (t.createCipheriv = t.Cipheriv = f),
            (t.createDecipher = t.Decipher =
              function (e, t) {
                var r, n;
                if (((e = e.toLowerCase()), o[e]))
                  (r = o[e].key), (n = o[e].iv);
                else {
                  if (!a[e]) throw new TypeError("invalid suite type");
                  (r = 8 * a[e].key), (n = a[e].iv);
                }
                var i = s(t, !1, r, n);
                return c(e, i.key, i.iv);
              }),
            (t.createDecipheriv = t.Decipheriv = c),
            (t.listCiphers = t.getCiphers =
              function () {
                return Object.keys(a).concat(i.getCiphers());
              });
        },
        1235: (e, t, r) => {
          var n = r(7752),
            i = r(9129),
            o = r(2111),
            a = r(707).Buffer,
            s = {
              "des-ede3-cbc": i.CBC.instantiate(i.EDE),
              "des-ede3": i.EDE,
              "des-ede-cbc": i.CBC.instantiate(i.EDE),
              "des-ede": i.EDE,
              "des-cbc": i.CBC.instantiate(i.DES),
              "des-ecb": i.DES,
            };
          function f(e) {
            n.call(this);
            var t,
              r = e.mode.toLowerCase(),
              i = s[r];
            t = e.decrypt ? "decrypt" : "encrypt";
            var o = e.key;
            a.isBuffer(o) || (o = a.from(o)),
              ("des-ede" !== r && "des-ede-cbc" !== r) ||
                (o = a.concat([o, o.slice(0, 8)]));
            var f = e.iv;
            a.isBuffer(f) || (f = a.from(f)),
              (this._des = i.create({ key: o, iv: f, type: t }));
          }
          (s.des = s["des-cbc"]),
            (s.des3 = s["des-ede3-cbc"]),
            (e.exports = f),
            o(f, n),
            (f.prototype._update = function (e) {
              return a.from(this._des.update(e));
            }),
            (f.prototype._final = function () {
              return a.from(this._des.final());
            });
        },
        5791: (e, t) => {
          (t["des-ecb"] = { key: 8, iv: 0 }),
            (t["des-cbc"] = t.des = { key: 8, iv: 8 }),
            (t["des-ede3-cbc"] = t.des3 = { key: 24, iv: 8 }),
            (t["des-ede3"] = { key: 24, iv: 0 }),
            (t["des-ede-cbc"] = { key: 16, iv: 8 }),
            (t["des-ede"] = { key: 16, iv: 0 });
        },
        200: (e, t, r) => {
          var n = r(5291).Buffer,
            i = r(2693),
            o = r(9631);
          function a(e) {
            var t,
              r = e.modulus.byteLength();
            do {
              t = new i(o(r));
            } while (
              t.cmp(e.modulus) >= 0 ||
              !t.umod(e.prime1) ||
              !t.umod(e.prime2)
            );
            return t;
          }
          function s(e, t) {
            var r = (function (e) {
                var t = a(e);
                return {
                  blinder: t
                    .toRed(i.mont(e.modulus))
                    .redPow(new i(e.publicExponent))
                    .fromRed(),
                  unblinder: t.invm(e.modulus),
                };
              })(t),
              o = t.modulus.byteLength(),
              s = new i(e).mul(r.blinder).umod(t.modulus),
              f = s.toRed(i.mont(t.prime1)),
              c = s.toRed(i.mont(t.prime2)),
              u = t.coefficient,
              d = t.prime1,
              h = t.prime2,
              l = f.redPow(t.exponent1).fromRed(),
              p = c.redPow(t.exponent2).fromRed(),
              b = l.isub(p).imul(u).umod(d).imul(h);
            return p
              .iadd(b)
              .imul(r.unblinder)
              .umod(t.modulus)
              .toArrayLike(n, "be", o);
          }
          (s.getr = a), (e.exports = s);
        },
        1614: (e, t, r) => {
          e.exports = r(5050);
        },
        2748: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(3470),
            o = r(6310),
            a = r(2111),
            s = r(6812),
            f = r(3255),
            c = r(5050);
          function u(e) {
            o.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            (this._hashType = t.hash),
              (this._hash = i(t.hash)),
              (this._tag = t.id),
              (this._signType = t.sign);
          }
          function d(e) {
            o.Writable.call(this);
            var t = c[e];
            if (!t) throw new Error("Unknown message digest");
            (this._hash = i(t.hash)),
              (this._tag = t.id),
              (this._signType = t.sign);
          }
          function h(e) {
            return new u(e);
          }
          function l(e) {
            return new d(e);
          }
          Object.keys(c).forEach(function (e) {
            (c[e].id = n.from(c[e].id, "hex")), (c[e.toLowerCase()] = c[e]);
          }),
            a(u, o.Writable),
            (u.prototype._write = function (e, t, r) {
              this._hash.update(e), r();
            }),
            (u.prototype.update = function (e, t) {
              return (
                "string" == typeof e && (e = n.from(e, t)),
                this._hash.update(e),
                this
              );
            }),
            (u.prototype.sign = function (e, t) {
              this.end();
              var r = this._hash.digest(),
                n = s(r, e, this._hashType, this._signType, this._tag);
              return t ? n.toString(t) : n;
            }),
            a(d, o.Writable),
            (d.prototype._write = function (e, t, r) {
              this._hash.update(e), r();
            }),
            (d.prototype.update = function (e, t) {
              return (
                "string" == typeof e && (e = n.from(e, t)),
                this._hash.update(e),
                this
              );
            }),
            (d.prototype.verify = function (e, t, r) {
              "string" == typeof t && (t = n.from(t, r)), this.end();
              var i = this._hash.digest();
              return f(t, i, e, this._signType, this._tag);
            }),
            (e.exports = {
              Sign: h,
              Verify: l,
              createSign: h,
              createVerify: l,
            });
        },
        6812: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(6931),
            o = r(200),
            a = r(7919).ec,
            s = r(2693),
            f = r(6126),
            c = r(6664);
          function u(e, t, r, o) {
            if ((e = n.from(e.toArray())).length < t.byteLength()) {
              var a = n.alloc(t.byteLength() - e.length);
              e = n.concat([a, e]);
            }
            var s = r.length,
              f = (function (e, t) {
                e = (e = d(e, t)).mod(t);
                var r = n.from(e.toArray());
                if (r.length < t.byteLength()) {
                  var i = n.alloc(t.byteLength() - r.length);
                  r = n.concat([i, r]);
                }
                return r;
              })(r, t),
              c = n.alloc(s);
            c.fill(1);
            var u = n.alloc(s);
            return (
              (u = i(o, u)
                .update(c)
                .update(n.from([0]))
                .update(e)
                .update(f)
                .digest()),
              (c = i(o, u).update(c).digest()),
              {
                k: (u = i(o, u)
                  .update(c)
                  .update(n.from([1]))
                  .update(e)
                  .update(f)
                  .digest()),
                v: (c = i(o, u).update(c).digest()),
              }
            );
          }
          function d(e, t) {
            var r = new s(e),
              n = (e.length << 3) - t.bitLength();
            return n > 0 && r.ishrn(n), r;
          }
          function h(e, t, r) {
            var o, a;
            do {
              for (o = n.alloc(0); 8 * o.length < e.bitLength(); )
                (t.v = i(r, t.k).update(t.v).digest()),
                  (o = n.concat([o, t.v]));
              (a = d(o, e)),
                (t.k = i(r, t.k)
                  .update(t.v)
                  .update(n.from([0]))
                  .digest()),
                (t.v = i(r, t.k).update(t.v).digest());
            } while (-1 !== a.cmp(e));
            return a;
          }
          function l(e, t, r, n) {
            return e.toRed(s.mont(r)).redPow(t).fromRed().mod(n);
          }
          (e.exports = function (e, t, r, i, p) {
            var b = f(t);
            if (b.curve) {
              if ("ecdsa" !== i && "ecdsa/rsa" !== i)
                throw new Error("wrong private key type");
              return (function (e, t) {
                var r = c[t.curve.join(".")];
                if (!r) throw new Error("unknown curve " + t.curve.join("."));
                var i = new a(r).keyFromPrivate(t.privateKey).sign(e);
                return n.from(i.toDER());
              })(e, b);
            }
            if ("dsa" === b.type) {
              if ("dsa" !== i) throw new Error("wrong private key type");
              return (function (e, t, r) {
                for (
                  var i,
                    o = t.params.priv_key,
                    a = t.params.p,
                    f = t.params.q,
                    c = t.params.g,
                    p = new s(0),
                    b = d(e, f).mod(f),
                    y = !1,
                    g = u(o, f, e, r);
                  !1 === y;

                )
                  (p = l(c, (i = h(f, g, r)), a, f)),
                    0 ===
                      (y = i
                        .invm(f)
                        .imul(b.add(o.mul(p)))
                        .mod(f)).cmpn(0) && ((y = !1), (p = new s(0)));
                return (function (e, t) {
                  (e = e.toArray()),
                    (t = t.toArray()),
                    128 & e[0] && (e = [0].concat(e)),
                    128 & t[0] && (t = [0].concat(t));
                  var r = [48, e.length + t.length + 4, 2, e.length];
                  return (r = r.concat(e, [2, t.length], t)), n.from(r);
                })(p, y);
              })(e, b, r);
            }
            if ("rsa" !== i && "ecdsa/rsa" !== i)
              throw new Error("wrong private key type");
            e = n.concat([p, e]);
            for (
              var y = b.modulus.byteLength(), g = [0, 1];
              e.length + g.length + 1 < y;

            )
              g.push(255);
            g.push(0);
            for (var m = -1; ++m < e.length; ) g.push(e[m]);
            return o(g, b);
          }),
            (e.exports.getKey = u),
            (e.exports.makeKey = h);
        },
        3255: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(2693),
            o = r(7919).ec,
            a = r(6126),
            s = r(6664);
          function f(e, t) {
            if (e.cmpn(0) <= 0) throw new Error("invalid sig");
            if (e.cmp(t) >= t) throw new Error("invalid sig");
          }
          e.exports = function (e, t, r, c, u) {
            var d = a(r);
            if ("ec" === d.type) {
              if ("ecdsa" !== c && "ecdsa/rsa" !== c)
                throw new Error("wrong public key type");
              return (function (e, t, r) {
                var n = s[r.data.algorithm.curve.join(".")];
                if (!n)
                  throw new Error(
                    "unknown curve " + r.data.algorithm.curve.join(".")
                  );
                var i = new o(n),
                  a = r.data.subjectPrivateKey.data;
                return i.verify(t, e, a);
              })(e, t, d);
            }
            if ("dsa" === d.type) {
              if ("dsa" !== c) throw new Error("wrong public key type");
              return (function (e, t, r) {
                var n = r.data.p,
                  o = r.data.q,
                  s = r.data.g,
                  c = r.data.pub_key,
                  u = a.signature.decode(e, "der"),
                  d = u.s,
                  h = u.r;
                f(d, o), f(h, o);
                var l = i.mont(n),
                  p = d.invm(o);
                return (
                  0 ===
                  s
                    .toRed(l)
                    .redPow(new i(t).mul(p).mod(o))
                    .fromRed()
                    .mul(c.toRed(l).redPow(h.mul(p).mod(o)).fromRed())
                    .mod(n)
                    .mod(o)
                    .cmp(h)
                );
              })(e, t, d);
            }
            if ("rsa" !== c && "ecdsa/rsa" !== c)
              throw new Error("wrong public key type");
            t = n.concat([u, t]);
            for (
              var h = d.modulus.byteLength(), l = [1], p = 0;
              t.length + l.length + 2 < h;

            )
              l.push(255), p++;
            l.push(0);
            for (var b = -1; ++b < t.length; ) l.push(t[b]);
            l = n.from(l);
            var y = i.mont(d.modulus);
            (e = (e = new i(e).toRed(y)).redPow(new i(d.publicExponent))),
              (e = n.from(e.fromRed().toArray()));
            var g = p < 8 ? 1 : 0;
            for (
              h = Math.min(e.length, l.length),
                e.length !== l.length && (g = 1),
                b = -1;
              ++b < h;

            )
              g |= e[b] ^ l[b];
            return 0 === g;
          };
        },
        7714: (e, t, r) => {
          var n = r(5291).Buffer;
          e.exports = function (e, t) {
            for (
              var r = Math.min(e.length, t.length), i = new n(r), o = 0;
              o < r;
              ++o
            )
              i[o] = e[o] ^ t[o];
            return i;
          };
        },
        5291: (e, t, r) => {
          "use strict";
          const n = r(5277),
            i = r(2608),
            o =
              "function" == typeof Symbol && "function" == typeof Symbol.for
                ? Symbol.for("nodejs.util.inspect.custom")
                : null;
          (t.Buffer = f),
            (t.SlowBuffer = function (e) {
              return +e != e && (e = 0), f.alloc(+e);
            }),
            (t.INSPECT_MAX_BYTES = 50);
          const a = 2147483647;
          function s(e) {
            if (e > a)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
              );
            const t = new Uint8Array(e);
            return Object.setPrototypeOf(t, f.prototype), t;
          }
          function f(e, t, r) {
            if ("number" == typeof e) {
              if ("string" == typeof t)
                throw new TypeError(
                  'The "string" argument must be of type string. Received type number'
                );
              return d(e);
            }
            return c(e, t, r);
          }
          function c(e, t, r) {
            if ("string" == typeof e)
              return (function (e, t) {
                if (
                  (("string" == typeof t && "" !== t) || (t = "utf8"),
                  !f.isEncoding(t))
                )
                  throw new TypeError("Unknown encoding: " + t);
                const r = 0 | b(e, t);
                let n = s(r);
                const i = n.write(e, t);
                return i !== r && (n = n.slice(0, i)), n;
              })(e, t);
            if (ArrayBuffer.isView(e))
              return (function (e) {
                if (X(e, Uint8Array)) {
                  const t = new Uint8Array(e);
                  return l(t.buffer, t.byteOffset, t.byteLength);
                }
                return h(e);
              })(e);
            if (null == e)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof e
              );
            if (X(e, ArrayBuffer) || (e && X(e.buffer, ArrayBuffer)))
              return l(e, t, r);
            if (
              "undefined" != typeof SharedArrayBuffer &&
              (X(e, SharedArrayBuffer) || (e && X(e.buffer, SharedArrayBuffer)))
            )
              return l(e, t, r);
            if ("number" == typeof e)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
              );
            const n = e.valueOf && e.valueOf();
            if (null != n && n !== e) return f.from(n, t, r);
            const i = (function (e) {
              if (f.isBuffer(e)) {
                const t = 0 | p(e.length),
                  r = s(t);
                return 0 === r.length || e.copy(r, 0, 0, t), r;
              }
              return void 0 !== e.length
                ? "number" != typeof e.length || J(e.length)
                  ? s(0)
                  : h(e)
                : "Buffer" === e.type && Array.isArray(e.data)
                ? h(e.data)
                : void 0;
            })(e);
            if (i) return i;
            if (
              "undefined" != typeof Symbol &&
              null != Symbol.toPrimitive &&
              "function" == typeof e[Symbol.toPrimitive]
            )
              return f.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e
            );
          }
          function u(e) {
            if ("number" != typeof e)
              throw new TypeError('"size" argument must be of type number');
            if (e < 0)
              throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
              );
          }
          function d(e) {
            return u(e), s(e < 0 ? 0 : 0 | p(e));
          }
          function h(e) {
            const t = e.length < 0 ? 0 : 0 | p(e.length),
              r = s(t);
            for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
            return r;
          }
          function l(e, t, r) {
            if (t < 0 || e.byteLength < t)
              throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0))
              throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return (
              (n =
                void 0 === t && void 0 === r
                  ? new Uint8Array(e)
                  : void 0 === r
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, r)),
              Object.setPrototypeOf(n, f.prototype),
              n
            );
          }
          function p(e) {
            if (e >= a)
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  a.toString(16) +
                  " bytes"
              );
            return 0 | e;
          }
          function b(e, t) {
            if (f.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || X(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                  typeof e
              );
            const r = e.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let i = !1;
            for (;;)
              switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                  return V(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return G(e).length;
                default:
                  if (i) return n ? -1 : V(e).length;
                  (t = ("" + t).toLowerCase()), (i = !0);
              }
          }
          function y(e, t, r) {
            let n = !1;
            if (((void 0 === t || t < 0) && (t = 0), t > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ; )
              switch (e) {
                case "hex":
                  return R(this, t, r);
                case "utf8":
                case "utf-8":
                  return k(this, t, r);
                case "ascii":
                  return I(this, t, r);
                case "latin1":
                case "binary":
                  return C(this, t, r);
                case "base64":
                  return M(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return P(this, t, r);
                default:
                  if (n) throw new TypeError("Unknown encoding: " + e);
                  (e = (e + "").toLowerCase()), (n = !0);
              }
          }
          function g(e, t, r) {
            const n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          function m(e, t, r, n, i) {
            if (0 === e.length) return -1;
            if (
              ("string" == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              J((r = +r)) && (r = i ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length)
            ) {
              if (i) return -1;
              r = e.length - 1;
            } else if (r < 0) {
              if (!i) return -1;
              r = 0;
            }
            if (("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
              return 0 === t.length ? -1 : v(e, t, r, n, i);
            if ("number" == typeof t)
              return (
                (t &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? i
                    ? Uint8Array.prototype.indexOf.call(e, t, r)
                    : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                  : v(e, [t], r, n, i)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function v(e, t, r, n, i) {
            let o,
              a = 1,
              s = e.length,
              f = t.length;
            if (
              void 0 !== n &&
              ("ucs2" === (n = String(n).toLowerCase()) ||
                "ucs-2" === n ||
                "utf16le" === n ||
                "utf-16le" === n)
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              (a = 2), (s /= 2), (f /= 2), (r /= 2);
            }
            function c(e, t) {
              return 1 === a ? e[t] : e.readUInt16BE(t * a);
            }
            if (i) {
              let n = -1;
              for (o = r; o < s; o++)
                if (c(e, o) === c(t, -1 === n ? 0 : o - n)) {
                  if ((-1 === n && (n = o), o - n + 1 === f)) return n * a;
                } else -1 !== n && (o -= o - n), (n = -1);
            } else
              for (r + f > s && (r = s - f), o = r; o >= 0; o--) {
                let r = !0;
                for (let n = 0; n < f; n++)
                  if (c(e, o + n) !== c(t, n)) {
                    r = !1;
                    break;
                  }
                if (r) return o;
              }
            return -1;
          }
          function w(e, t, r, n) {
            r = Number(r) || 0;
            const i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : (n = i);
            const o = t.length;
            let a;
            for (n > o / 2 && (n = o / 2), a = 0; a < n; ++a) {
              const n = parseInt(t.substr(2 * a, 2), 16);
              if (J(n)) return a;
              e[r + a] = n;
            }
            return a;
          }
          function _(e, t, r, n) {
            return $(V(t, e.length - r), e, r, n);
          }
          function S(e, t, r, n) {
            return $(
              (function (e) {
                const t = [];
                for (let r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              })(t),
              e,
              r,
              n
            );
          }
          function E(e, t, r, n) {
            return $(G(t), e, r, n);
          }
          function A(e, t, r, n) {
            return $(
              (function (e, t) {
                let r, n, i;
                const o = [];
                for (let a = 0; a < e.length && !((t -= 2) < 0); ++a)
                  (r = e.charCodeAt(a)),
                    (n = r >> 8),
                    (i = r % 256),
                    o.push(i),
                    o.push(n);
                return o;
              })(t, e.length - r),
              e,
              r,
              n
            );
          }
          function M(e, t, r) {
            return 0 === t && r === e.length
              ? n.fromByteArray(e)
              : n.fromByteArray(e.slice(t, r));
          }
          function k(e, t, r) {
            r = Math.min(e.length, r);
            const n = [];
            let i = t;
            for (; i < r; ) {
              const t = e[i];
              let o = null,
                a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
              if (i + a <= r) {
                let r, n, s, f;
                switch (a) {
                  case 1:
                    t < 128 && (o = t);
                    break;
                  case 2:
                    (r = e[i + 1]),
                      128 == (192 & r) &&
                        ((f = ((31 & t) << 6) | (63 & r)), f > 127 && (o = f));
                    break;
                  case 3:
                    (r = e[i + 1]),
                      (n = e[i + 2]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        ((f = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                        f > 2047 && (f < 55296 || f > 57343) && (o = f));
                    break;
                  case 4:
                    (r = e[i + 1]),
                      (n = e[i + 2]),
                      (s = e[i + 3]),
                      128 == (192 & r) &&
                        128 == (192 & n) &&
                        128 == (192 & s) &&
                        ((f =
                          ((15 & t) << 18) |
                          ((63 & r) << 12) |
                          ((63 & n) << 6) |
                          (63 & s)),
                        f > 65535 && f < 1114112 && (o = f));
                }
              }
              null === o
                ? ((o = 65533), (a = 1))
                : o > 65535 &&
                  ((o -= 65536),
                  n.push(((o >>> 10) & 1023) | 55296),
                  (o = 56320 | (1023 & o))),
                n.push(o),
                (i += a);
            }
            return (function (e) {
              const t = e.length;
              if (t <= O) return String.fromCharCode.apply(String, e);
              let r = "",
                n = 0;
              for (; n < t; )
                r += String.fromCharCode.apply(String, e.slice(n, (n += O)));
              return r;
            })(n);
          }
          (t.kMaxLength = a),
            (f.TYPED_ARRAY_SUPPORT = (function () {
              try {
                const e = new Uint8Array(1),
                  t = {
                    foo: function () {
                      return 42;
                    },
                  };
                return (
                  Object.setPrototypeOf(t, Uint8Array.prototype),
                  Object.setPrototypeOf(e, t),
                  42 === e.foo()
                );
              } catch (e) {
                return !1;
              }
            })()),
            f.TYPED_ARRAY_SUPPORT ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(f.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (f.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(f.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (f.isBuffer(this)) return this.byteOffset;
              },
            }),
            (f.poolSize = 8192),
            (f.from = function (e, t, r) {
              return c(e, t, r);
            }),
            Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(f, Uint8Array),
            (f.alloc = function (e, t, r) {
              return (function (e, t, r) {
                return (
                  u(e),
                  e <= 0
                    ? s(e)
                    : void 0 !== t
                    ? "string" == typeof r
                      ? s(e).fill(t, r)
                      : s(e).fill(t)
                    : s(e)
                );
              })(e, t, r);
            }),
            (f.allocUnsafe = function (e) {
              return d(e);
            }),
            (f.allocUnsafeSlow = function (e) {
              return d(e);
            }),
            (f.isBuffer = function (e) {
              return null != e && !0 === e._isBuffer && e !== f.prototype;
            }),
            (f.compare = function (e, t) {
              if (
                (X(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                X(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
                !f.isBuffer(e) || !f.isBuffer(t))
              )
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              if (e === t) return 0;
              let r = e.length,
                n = t.length;
              for (let i = 0, o = Math.min(r, n); i < o; ++i)
                if (e[i] !== t[i]) {
                  (r = e[i]), (n = t[i]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (f.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (f.concat = function (e, t) {
              if (!Array.isArray(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              if (0 === e.length) return f.alloc(0);
              let r;
              if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
              const n = f.allocUnsafe(t);
              let i = 0;
              for (r = 0; r < e.length; ++r) {
                let t = e[r];
                if (X(t, Uint8Array))
                  i + t.length > n.length
                    ? (f.isBuffer(t) || (t = f.from(t)), t.copy(n, i))
                    : Uint8Array.prototype.set.call(n, t, i);
                else {
                  if (!f.isBuffer(t))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  t.copy(n, i);
                }
                i += t.length;
              }
              return n;
            }),
            (f.byteLength = b),
            (f.prototype._isBuffer = !0),
            (f.prototype.swap16 = function () {
              const e = this.length;
              if (e % 2 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits"
                );
              for (let t = 0; t < e; t += 2) g(this, t, t + 1);
              return this;
            }),
            (f.prototype.swap32 = function () {
              const e = this.length;
              if (e % 4 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits"
                );
              for (let t = 0; t < e; t += 4)
                g(this, t, t + 3), g(this, t + 1, t + 2);
              return this;
            }),
            (f.prototype.swap64 = function () {
              const e = this.length;
              if (e % 8 != 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits"
                );
              for (let t = 0; t < e; t += 8)
                g(this, t, t + 7),
                  g(this, t + 1, t + 6),
                  g(this, t + 2, t + 5),
                  g(this, t + 3, t + 4);
              return this;
            }),
            (f.prototype.toString = function () {
              const e = this.length;
              return 0 === e
                ? ""
                : 0 === arguments.length
                ? k(this, 0, e)
                : y.apply(this, arguments);
            }),
            (f.prototype.toLocaleString = f.prototype.toString),
            (f.prototype.equals = function (e) {
              if (!f.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
              return this === e || 0 === f.compare(this, e);
            }),
            (f.prototype.inspect = function () {
              let e = "";
              const r = t.INSPECT_MAX_BYTES;
              return (
                (e = this.toString("hex", 0, r)
                  .replace(/(.{2})/g, "$1 ")
                  .trim()),
                this.length > r && (e += " ... "),
                "<Buffer " + e + ">"
              );
            }),
            o && (f.prototype[o] = f.prototype.inspect),
            (f.prototype.compare = function (e, t, r, n, i) {
              if (
                (X(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                !f.isBuffer(e))
              )
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof e
                );
              if (
                (void 0 === t && (t = 0),
                void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                t < 0 || r > e.length || n < 0 || i > this.length)
              )
                throw new RangeError("out of range index");
              if (n >= i && t >= r) return 0;
              if (n >= i) return -1;
              if (t >= r) return 1;
              if (this === e) return 0;
              let o = (i >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (t >>>= 0);
              const s = Math.min(o, a),
                c = this.slice(n, i),
                u = e.slice(t, r);
              for (let e = 0; e < s; ++e)
                if (c[e] !== u[e]) {
                  (o = c[e]), (a = u[e]);
                  break;
                }
              return o < a ? -1 : a < o ? 1 : 0;
            }),
            (f.prototype.includes = function (e, t, r) {
              return -1 !== this.indexOf(e, t, r);
            }),
            (f.prototype.indexOf = function (e, t, r) {
              return m(this, e, t, r, !0);
            }),
            (f.prototype.lastIndexOf = function (e, t, r) {
              return m(this, e, t, r, !1);
            }),
            (f.prototype.write = function (e, t, r, n) {
              if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
              else if (void 0 === r && "string" == typeof t)
                (n = t), (r = this.length), (t = 0);
              else {
                if (!isFinite(t))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                  );
                (t >>>= 0),
                  isFinite(r)
                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                    : ((n = r), (r = void 0));
              }
              const i = this.length - t;
              if (
                ((void 0 === r || r > i) && (r = i),
                (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              n || (n = "utf8");
              let o = !1;
              for (;;)
                switch (n) {
                  case "hex":
                    return w(this, e, t, r);
                  case "utf8":
                  case "utf-8":
                    return _(this, e, t, r);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return S(this, e, t, r);
                  case "base64":
                    return E(this, e, t, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return A(this, e, t, r);
                  default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (o = !0);
                }
            }),
            (f.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          const O = 4096;
          function I(e, t, r) {
            let n = "";
            r = Math.min(e.length, r);
            for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
            return n;
          }
          function C(e, t, r) {
            let n = "";
            r = Math.min(e.length, r);
            for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
            return n;
          }
          function R(e, t, r) {
            const n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
            let i = "";
            for (let n = t; n < r; ++n) i += Y[e[n]];
            return i;
          }
          function P(e, t, r) {
            const n = e.slice(t, r);
            let i = "";
            for (let e = 0; e < n.length - 1; e += 2)
              i += String.fromCharCode(n[e] + 256 * n[e + 1]);
            return i;
          }
          function x(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function B(e, t, r, n, i, o) {
            if (!f.isBuffer(e))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance'
              );
            if (t > i || t < o)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range");
          }
          function T(e, t, r, n, i) {
            F(t, n, i, e, r, 7);
            let o = Number(t & BigInt(4294967295));
            (e[r++] = o),
              (o >>= 8),
              (e[r++] = o),
              (o >>= 8),
              (e[r++] = o),
              (o >>= 8),
              (e[r++] = o);
            let a = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              (a >>= 8),
              (e[r++] = a),
              r
            );
          }
          function j(e, t, r, n, i) {
            F(t, n, i, e, r, 7);
            let o = Number(t & BigInt(4294967295));
            (e[r + 7] = o),
              (o >>= 8),
              (e[r + 6] = o),
              (o >>= 8),
              (e[r + 5] = o),
              (o >>= 8),
              (e[r + 4] = o);
            let a = Number((t >> BigInt(32)) & BigInt(4294967295));
            return (
              (e[r + 3] = a),
              (a >>= 8),
              (e[r + 2] = a),
              (a >>= 8),
              (e[r + 1] = a),
              (a >>= 8),
              (e[r] = a),
              r + 8
            );
          }
          function D(e, t, r, n, i, o) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function L(e, t, r, n, o) {
            return (
              (t = +t),
              (r >>>= 0),
              o || D(e, 0, r, 4),
              i.write(e, t, r, n, 23, 4),
              r + 4
            );
          }
          function N(e, t, r, n, o) {
            return (
              (t = +t),
              (r >>>= 0),
              o || D(e, 0, r, 8),
              i.write(e, t, r, n, 52, 8),
              r + 8
            );
          }
          (f.prototype.slice = function (e, t) {
            const r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
              (t = void 0 === t ? r : ~~t) < 0
                ? (t += r) < 0 && (t = 0)
                : t > r && (t = r),
              t < e && (t = e);
            const n = this.subarray(e, t);
            return Object.setPrototypeOf(n, f.prototype), n;
          }),
            (f.prototype.readUintLE = f.prototype.readUIntLE =
              function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || x(e, t, this.length);
                let n = this[e],
                  i = 1,
                  o = 0;
                for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
                return n;
              }),
            (f.prototype.readUintBE = f.prototype.readUIntBE =
              function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || x(e, t, this.length);
                let n = this[e + --t],
                  i = 1;
                for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
                return n;
              }),
            (f.prototype.readUint8 = f.prototype.readUInt8 =
              function (e, t) {
                return (e >>>= 0), t || x(e, 1, this.length), this[e];
              }),
            (f.prototype.readUint16LE = f.prototype.readUInt16LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || x(e, 2, this.length),
                  this[e] | (this[e + 1] << 8)
                );
              }),
            (f.prototype.readUint16BE = f.prototype.readUInt16BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || x(e, 2, this.length),
                  (this[e] << 8) | this[e + 1]
                );
              }),
            (f.prototype.readUint32LE = f.prototype.readUInt32LE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || x(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                );
              }),
            (f.prototype.readUint32BE = f.prototype.readUInt32BE =
              function (e, t) {
                return (
                  (e >>>= 0),
                  t || x(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                );
              }),
            (f.prototype.readBigUInt64LE = Z(function (e) {
              W((e >>>= 0), "offset");
              const t = this[e],
                r = this[e + 7];
              (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
              const n =
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                i =
                  this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
              return BigInt(n) + (BigInt(i) << BigInt(32));
            })),
            (f.prototype.readBigUInt64BE = Z(function (e) {
              W((e >>>= 0), "offset");
              const t = this[e],
                r = this[e + 7];
              (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
              const n =
                  t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                i =
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
              return (BigInt(n) << BigInt(32)) + BigInt(i);
            })),
            (f.prototype.readIntLE = function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || x(e, t, this.length);
              let n = this[e],
                i = 1,
                o = 0;
              for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
              return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
            }),
            (f.prototype.readIntBE = function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || x(e, t, this.length);
              let n = t,
                i = 1,
                o = this[e + --n];
              for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
              return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
            }),
            (f.prototype.readInt8 = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
              );
            }),
            (f.prototype.readInt16LE = function (e, t) {
              (e >>>= 0), t || x(e, 2, this.length);
              const r = this[e] | (this[e + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt16BE = function (e, t) {
              (e >>>= 0), t || x(e, 2, this.length);
              const r = this[e + 1] | (this[e] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt32LE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 4, this.length),
                this[e] |
                  (this[e + 1] << 8) |
                  (this[e + 2] << 16) |
                  (this[e + 3] << 24)
              );
            }),
            (f.prototype.readInt32BE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 4, this.length),
                (this[e] << 24) |
                  (this[e + 1] << 16) |
                  (this[e + 2] << 8) |
                  this[e + 3]
              );
            }),
            (f.prototype.readBigInt64LE = Z(function (e) {
              W((e >>>= 0), "offset");
              const t = this[e],
                r = this[e + 7];
              (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
              const n =
                this[e + 4] +
                256 * this[e + 5] +
                65536 * this[e + 6] +
                (r << 24);
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24
                )
              );
            })),
            (f.prototype.readBigInt64BE = Z(function (e) {
              W((e >>>= 0), "offset");
              const t = this[e],
                r = this[e + 7];
              (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
              const n =
                (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
              return (
                (BigInt(n) << BigInt(32)) +
                BigInt(
                  this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
                )
              );
            })),
            (f.prototype.readFloatLE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 4, this.length),
                i.read(this, e, !0, 23, 4)
              );
            }),
            (f.prototype.readFloatBE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 4, this.length),
                i.read(this, e, !1, 23, 4)
              );
            }),
            (f.prototype.readDoubleLE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 8, this.length),
                i.read(this, e, !0, 52, 8)
              );
            }),
            (f.prototype.readDoubleBE = function (e, t) {
              return (
                (e >>>= 0),
                t || x(e, 8, this.length),
                i.read(this, e, !1, 52, 8)
              );
            }),
            (f.prototype.writeUintLE = f.prototype.writeUIntLE =
              function (e, t, r, n) {
                (e = +e),
                  (t >>>= 0),
                  (r >>>= 0),
                  n || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1,
                  o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256); )
                  this[t + o] = (e / i) & 255;
                return t + r;
              }),
            (f.prototype.writeUintBE = f.prototype.writeUIntBE =
              function (e, t, r, n) {
                (e = +e),
                  (t >>>= 0),
                  (r >>>= 0),
                  n || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1,
                  o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                  this[t + i] = (e / o) & 255;
                return t + r;
              }),
            (f.prototype.writeUint8 = f.prototype.writeUInt8 =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 1, 255, 0),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
            (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 65535, 0),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  t + 2
                );
              }),
            (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 65535, 0),
                  (this[t] = e >>> 8),
                  (this[t + 1] = 255 & e),
                  t + 2
                );
              }),
            (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 4294967295, 0),
                  (this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e),
                  t + 4
                );
              }),
            (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 4294967295, 0),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
            (f.prototype.writeBigUInt64LE = Z(function (e, t = 0) {
              return T(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (f.prototype.writeBigUInt64BE = Z(function (e, t = 0) {
              return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            })),
            (f.prototype.writeIntLE = function (e, t, r, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                B(this, e, t, r, n - 1, -n);
              }
              let i = 0,
                o = 1,
                a = 0;
              for (this[t] = 255 & e; ++i < r && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                  (this[t + i] = (((e / o) >> 0) - a) & 255);
              return t + r;
            }),
            (f.prototype.writeIntBE = function (e, t, r, n) {
              if (((e = +e), (t >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                B(this, e, t, r, n - 1, -n);
              }
              let i = r - 1,
                o = 1,
                a = 0;
              for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                  (this[t + i] = (((e / o) >> 0) - a) & 255);
              return t + r;
            }),
            (f.prototype.writeInt8 = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || B(this, e, t, 1, 127, -128),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (f.prototype.writeInt16LE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || B(this, e, t, 2, 32767, -32768),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
            (f.prototype.writeInt16BE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || B(this, e, t, 2, 32767, -32768),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
            (f.prototype.writeInt32LE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || B(this, e, t, 4, 2147483647, -2147483648),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24),
                t + 4
              );
            }),
            (f.prototype.writeInt32BE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || B(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
            (f.prototype.writeBigInt64LE = Z(function (e, t = 0) {
              return T(
                this,
                e,
                t,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            })),
            (f.prototype.writeBigInt64BE = Z(function (e, t = 0) {
              return j(
                this,
                e,
                t,
                -BigInt("0x8000000000000000"),
                BigInt("0x7fffffffffffffff")
              );
            })),
            (f.prototype.writeFloatLE = function (e, t, r) {
              return L(this, e, t, !0, r);
            }),
            (f.prototype.writeFloatBE = function (e, t, r) {
              return L(this, e, t, !1, r);
            }),
            (f.prototype.writeDoubleLE = function (e, t, r) {
              return N(this, e, t, !0, r);
            }),
            (f.prototype.writeDoubleBE = function (e, t, r) {
              return N(this, e, t, !1, r);
            }),
            (f.prototype.copy = function (e, t, r, n) {
              if (!f.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
              if (
                (r || (r = 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                n > 0 && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length),
                e.length - t < n - r && (n = e.length - t + r);
              const i = n - r;
              return (
                this === e &&
                "function" == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(t, r, n)
                  : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                i
              );
            }),
            (f.prototype.fill = function (e, t, r, n) {
              if ("string" == typeof e) {
                if (
                  ("string" == typeof t
                    ? ((n = t), (t = 0), (r = this.length))
                    : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !f.isEncoding(n))
                  throw new TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                  const t = e.charCodeAt(0);
                  (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
                }
              } else
                "number" == typeof e
                  ? (e &= 255)
                  : "boolean" == typeof e && (e = Number(e));
              if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= t) return this;
              let i;
              if (
                ((t >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                e || (e = 0),
                "number" == typeof e)
              )
                for (i = t; i < r; ++i) this[i] = e;
              else {
                const o = f.isBuffer(e) ? e : f.from(e, n),
                  a = o.length;
                if (0 === a)
                  throw new TypeError(
                    'The value "' + e + '" is invalid for argument "value"'
                  );
                for (i = 0; i < r - t; ++i) this[i + t] = o[i % a];
              }
              return this;
            });
          const U = {};
          function q(e, t, r) {
            U[e] = class extends r {
              constructor() {
                super(),
                  Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${e}]`),
                  this.stack,
                  delete this.name;
              }
              get code() {
                return e;
              }
              set code(e) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0,
                });
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`;
              }
            };
          }
          function z(e) {
            let t = "",
              r = e.length;
            const n = "-" === e[0] ? 1 : 0;
            for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
            return `${e.slice(0, r)}${t}`;
          }
          function F(e, t, r, n, i, o) {
            if (e > r || e < t) {
              const n = "bigint" == typeof t ? "n" : "";
              let i;
              throw (
                ((i =
                  o > 3
                    ? 0 === t || t === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                          8 * (o + 1) - 1
                        }${n}`
                    : `>= ${t}${n} and <= ${r}${n}`),
                new U.ERR_OUT_OF_RANGE("value", i, e))
              );
            }
            !(function (e, t, r) {
              W(t, "offset"),
                (void 0 !== e[t] && void 0 !== e[t + r]) ||
                  K(t, e.length - (r + 1));
            })(n, i, o);
          }
          function W(e, t) {
            if ("number" != typeof e)
              throw new U.ERR_INVALID_ARG_TYPE(t, "number", e);
          }
          function K(e, t, r) {
            if (Math.floor(e) !== e)
              throw (
                (W(e, r),
                new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
              );
            if (t < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new U.ERR_OUT_OF_RANGE(
              r || "offset",
              `>= ${r ? 1 : 0} and <= ${t}`,
              e
            );
          }
          q(
            "ERR_BUFFER_OUT_OF_BOUNDS",
            function (e) {
              return e
                ? `${e} is outside of buffer bounds`
                : "Attempt to access memory outside buffer bounds";
            },
            RangeError
          ),
            q(
              "ERR_INVALID_ARG_TYPE",
              function (e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`;
              },
              TypeError
            ),
            q(
              "ERR_OUT_OF_RANGE",
              function (e, t, r) {
                let n = `The value of "${e}" is out of range.`,
                  i = r;
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (i = z(String(r)))
                    : "bigint" == typeof r &&
                      ((i = String(r)),
                      (r > BigInt(2) ** BigInt(32) ||
                        r < -(BigInt(2) ** BigInt(32))) &&
                        (i = z(i)),
                      (i += "n")),
                  (n += ` It must be ${t}. Received ${i}`),
                  n
                );
              },
              RangeError
            );
          const H = /[^+/0-9A-Za-z-_]/g;
          function V(e, t) {
            let r;
            t = t || 1 / 0;
            const n = e.length;
            let i = null;
            const o = [];
            for (let a = 0; a < n; ++a) {
              if (((r = e.charCodeAt(a)), r > 55295 && r < 57344)) {
                if (!i) {
                  if (r > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (a + 1 === n) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                  continue;
                }
                r = 65536 + (((i - 55296) << 10) | (r - 56320));
              } else i && (t -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((t -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                o.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128
                );
              }
            }
            return o;
          }
          function G(e) {
            return n.toByteArray(
              (function (e) {
                if (
                  (e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2
                )
                  return "";
                for (; e.length % 4 != 0; ) e += "=";
                return e;
              })(e)
            );
          }
          function $(e, t, r, n) {
            let i;
            for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
              t[i + r] = e[i];
            return i;
          }
          function X(e, t) {
            return (
              e instanceof t ||
              (null != e &&
                null != e.constructor &&
                null != e.constructor.name &&
                e.constructor.name === t.name)
            );
          }
          function J(e) {
            return e != e;
          }
          const Y = (function () {
            const e = "0123456789abcdef",
              t = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r;
              for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
            }
            return t;
          })();
          function Z(e) {
            return "undefined" == typeof BigInt ? Q : e;
          }
          function Q() {
            throw new Error("BigInt not supported");
          }
        },
        7737: (e, t, r) => {
          "use strict";
          var n = r(1528),
            i = r(3235),
            o = i(n("String.prototype.indexOf"));
          e.exports = function (e, t) {
            var r = n(e, !!t);
            return "function" == typeof r && o(e, ".prototype.") > -1
              ? i(r)
              : r;
          };
        },
        3235: (e, t, r) => {
          "use strict";
          var n = r(7156),
            i = r(1528),
            o = i("%Function.prototype.apply%"),
            a = i("%Function.prototype.call%"),
            s = i("%Reflect.apply%", !0) || n.call(a, o),
            f = i("%Object.getOwnPropertyDescriptor%", !0),
            c = i("%Object.defineProperty%", !0),
            u = i("%Math.max%");
          if (c)
            try {
              c({}, "a", { value: 1 });
            } catch (e) {
              c = null;
            }
          e.exports = function (e) {
            var t = s(n, a, arguments);
            return (
              f &&
                c &&
                f(t, "length").configurable &&
                c(t, "length", {
                  value: 1 + u(0, e.length - (arguments.length - 1)),
                }),
              t
            );
          };
          var d = function () {
            return s(n, o, arguments);
          };
          c ? c(e.exports, "apply", { value: d }) : (e.exports.apply = d);
        },
        7752: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(3946).Transform,
            o = r(7682).s;
          function a(e) {
            i.call(this),
              (this.hashMode = "string" == typeof e),
              this.hashMode
                ? (this[e] = this._finalOrDigest)
                : (this.final = this._finalOrDigest),
              this._final &&
                ((this.__final = this._final), (this._final = null)),
              (this._decoder = null),
              (this._encoding = null);
          }
          r(2111)(a, i),
            (a.prototype.update = function (e, t, r) {
              "string" == typeof e && (e = n.from(e, t));
              var i = this._update(e);
              return this.hashMode
                ? this
                : (r && (i = this._toString(i, r)), i);
            }),
            (a.prototype.setAutoPadding = function () {}),
            (a.prototype.getAuthTag = function () {
              throw new Error("trying to get auth tag in unsupported state");
            }),
            (a.prototype.setAuthTag = function () {
              throw new Error("trying to set auth tag in unsupported state");
            }),
            (a.prototype.setAAD = function () {
              throw new Error("trying to set aad in unsupported state");
            }),
            (a.prototype._transform = function (e, t, r) {
              var n;
              try {
                this.hashMode ? this._update(e) : this.push(this._update(e));
              } catch (e) {
                n = e;
              } finally {
                r(n);
              }
            }),
            (a.prototype._flush = function (e) {
              var t;
              try {
                this.push(this.__final());
              } catch (e) {
                t = e;
              }
              e(t);
            }),
            (a.prototype._finalOrDigest = function (e) {
              var t = this.__final() || n.alloc(0);
              return e && (t = this._toString(t, e, !0)), t;
            }),
            (a.prototype._toString = function (e, t, r) {
              if (
                (this._decoder ||
                  ((this._decoder = new o(t)), (this._encoding = t)),
                this._encoding !== t)
              )
                throw new Error("can't switch encodings");
              var n = this._decoder.write(e);
              return r && (n += this._decoder.end()), n;
            }),
            (e.exports = a);
        },
        5670: (e, t, r) => {
          function n(e) {
            return Object.prototype.toString.call(e);
          }
          (t.isArray = function (e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
          }),
            (t.isBoolean = function (e) {
              return "boolean" == typeof e;
            }),
            (t.isNull = function (e) {
              return null === e;
            }),
            (t.isNullOrUndefined = function (e) {
              return null == e;
            }),
            (t.isNumber = function (e) {
              return "number" == typeof e;
            }),
            (t.isString = function (e) {
              return "string" == typeof e;
            }),
            (t.isSymbol = function (e) {
              return "symbol" == typeof e;
            }),
            (t.isUndefined = function (e) {
              return void 0 === e;
            }),
            (t.isRegExp = function (e) {
              return "[object RegExp]" === n(e);
            }),
            (t.isObject = function (e) {
              return "object" == typeof e && null !== e;
            }),
            (t.isDate = function (e) {
              return "[object Date]" === n(e);
            }),
            (t.isError = function (e) {
              return "[object Error]" === n(e) || e instanceof Error;
            }),
            (t.isFunction = function (e) {
              return "function" == typeof e;
            }),
            (t.isPrimitive = function (e) {
              return (
                null === e ||
                "boolean" == typeof e ||
                "number" == typeof e ||
                "string" == typeof e ||
                "symbol" == typeof e ||
                void 0 === e
              );
            }),
            (t.isBuffer = r(5291).Buffer.isBuffer);
        },
        2597: (e, t, r) => {
          var n = r(5291).Buffer,
            i = r(7919),
            o = r(2693);
          e.exports = function (e) {
            return new s(e);
          };
          var a = {
            secp256k1: { name: "secp256k1", byteLength: 32 },
            secp224r1: { name: "p224", byteLength: 28 },
            prime256v1: { name: "p256", byteLength: 32 },
            prime192v1: { name: "p192", byteLength: 24 },
            ed25519: { name: "ed25519", byteLength: 32 },
            secp384r1: { name: "p384", byteLength: 48 },
            secp521r1: { name: "p521", byteLength: 66 },
          };
          function s(e) {
            (this.curveType = a[e]),
              this.curveType || (this.curveType = { name: e }),
              (this.curve = new i.ec(this.curveType.name)),
              (this.keys = void 0);
          }
          function f(e, t, r) {
            Array.isArray(e) || (e = e.toArray());
            var i = new n(e);
            if (r && i.length < r) {
              var o = new n(r - i.length);
              o.fill(0), (i = n.concat([o, i]));
            }
            return t ? i.toString(t) : i;
          }
          (a.p224 = a.secp224r1),
            (a.p256 = a.secp256r1 = a.prime256v1),
            (a.p192 = a.secp192r1 = a.prime192v1),
            (a.p384 = a.secp384r1),
            (a.p521 = a.secp521r1),
            (s.prototype.generateKeys = function (e, t) {
              return (
                (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t)
              );
            }),
            (s.prototype.computeSecret = function (e, t, r) {
              return (
                (t = t || "utf8"),
                n.isBuffer(e) || (e = new n(e, t)),
                f(
                  this.curve
                    .keyFromPublic(e)
                    .getPublic()
                    .mul(this.keys.getPrivate())
                    .getX(),
                  r,
                  this.curveType.byteLength
                )
              );
            }),
            (s.prototype.getPublicKey = function (e, t) {
              var r = this.keys.getPublic("compressed" === t, !0);
              return (
                "hybrid" === t &&
                  (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
                f(r, e)
              );
            }),
            (s.prototype.getPrivateKey = function (e) {
              return f(this.keys.getPrivate(), e);
            }),
            (s.prototype.setPublicKey = function (e, t) {
              return (
                (t = t || "utf8"),
                n.isBuffer(e) || (e = new n(e, t)),
                this.keys._importPublic(e),
                this
              );
            }),
            (s.prototype.setPrivateKey = function (e, t) {
              (t = t || "utf8"), n.isBuffer(e) || (e = new n(e, t));
              var r = new o(e);
              return (
                (r = r.toString(16)),
                (this.keys = this.curve.genKeyPair()),
                this.keys._importPrivate(r),
                this
              );
            });
        },
        3470: (e, t, r) => {
          "use strict";
          var n = r(2111),
            i = r(8054),
            o = r(4454),
            a = r(6065),
            s = r(7752);
          function f(e) {
            s.call(this, "digest"), (this._hash = e);
          }
          n(f, s),
            (f.prototype._update = function (e) {
              this._hash.update(e);
            }),
            (f.prototype._final = function () {
              return this._hash.digest();
            }),
            (e.exports = function (e) {
              return "md5" === (e = e.toLowerCase())
                ? new i()
                : "rmd160" === e || "ripemd160" === e
                ? new o()
                : new f(a(e));
            });
        },
        414: (e, t, r) => {
          var n = r(8054);
          e.exports = function (e) {
            return new n().update(e).digest();
          };
        },
        6931: (e, t, r) => {
          "use strict";
          var n = r(2111),
            i = r(9415),
            o = r(7752),
            a = r(707).Buffer,
            s = r(414),
            f = r(4454),
            c = r(6065),
            u = a.alloc(128);
          function d(e, t) {
            o.call(this, "digest"), "string" == typeof t && (t = a.from(t));
            var r = "sha512" === e || "sha384" === e ? 128 : 64;
            (this._alg = e),
              (this._key = t),
              t.length > r
                ? (t = ("rmd160" === e ? new f() : c(e)).update(t).digest())
                : t.length < r && (t = a.concat([t, u], r));
            for (
              var n = (this._ipad = a.allocUnsafe(r)),
                i = (this._opad = a.allocUnsafe(r)),
                s = 0;
              s < r;
              s++
            )
              (n[s] = 54 ^ t[s]), (i[s] = 92 ^ t[s]);
            (this._hash = "rmd160" === e ? new f() : c(e)),
              this._hash.update(n);
          }
          n(d, o),
            (d.prototype._update = function (e) {
              this._hash.update(e);
            }),
            (d.prototype._final = function () {
              var e = this._hash.digest();
              return ("rmd160" === this._alg ? new f() : c(this._alg))
                .update(this._opad)
                .update(e)
                .digest();
            }),
            (e.exports = function (e, t) {
              return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e
                ? new d("rmd160", t)
                : "md5" === e
                ? new i(s, t)
                : new d(e, t);
            });
        },
        9415: (e, t, r) => {
          "use strict";
          var n = r(2111),
            i = r(707).Buffer,
            o = r(7752),
            a = i.alloc(128),
            s = 64;
          function f(e, t) {
            o.call(this, "digest"),
              "string" == typeof t && (t = i.from(t)),
              (this._alg = e),
              (this._key = t),
              t.length > s
                ? (t = e(t))
                : t.length < s && (t = i.concat([t, a], s));
            for (
              var r = (this._ipad = i.allocUnsafe(s)),
                n = (this._opad = i.allocUnsafe(s)),
                f = 0;
              f < s;
              f++
            )
              (r[f] = 54 ^ t[f]), (n[f] = 92 ^ t[f]);
            this._hash = [r];
          }
          n(f, o),
            (f.prototype._update = function (e) {
              this._hash.push(e);
            }),
            (f.prototype._final = function () {
              var e = this._alg(i.concat(this._hash));
              return this._alg(i.concat([this._opad, e]));
            }),
            (e.exports = f);
        },
        3926: (e, t, r) => {
          "use strict";
          (t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(9631)),
            (t.createHash = t.Hash = r(3470)),
            (t.createHmac = t.Hmac = r(6931));
          var n = r(1614),
            i = Object.keys(n),
            o = [
              "sha1",
              "sha224",
              "sha256",
              "sha384",
              "sha512",
              "md5",
              "rmd160",
            ].concat(i);
          t.getHashes = function () {
            return o;
          };
          var a = r(5778);
          (t.pbkdf2 = a.pbkdf2), (t.pbkdf2Sync = a.pbkdf2Sync);
          var s = r(1459);
          (t.Cipher = s.Cipher),
            (t.createCipher = s.createCipher),
            (t.Cipheriv = s.Cipheriv),
            (t.createCipheriv = s.createCipheriv),
            (t.Decipher = s.Decipher),
            (t.createDecipher = s.createDecipher),
            (t.Decipheriv = s.Decipheriv),
            (t.createDecipheriv = s.createDecipheriv),
            (t.getCiphers = s.getCiphers),
            (t.listCiphers = s.listCiphers);
          var f = r(4616);
          (t.DiffieHellmanGroup = f.DiffieHellmanGroup),
            (t.createDiffieHellmanGroup = f.createDiffieHellmanGroup),
            (t.getDiffieHellman = f.getDiffieHellman),
            (t.createDiffieHellman = f.createDiffieHellman),
            (t.DiffieHellman = f.DiffieHellman);
          var c = r(2748);
          (t.createSign = c.createSign),
            (t.Sign = c.Sign),
            (t.createVerify = c.createVerify),
            (t.Verify = c.Verify),
            (t.createECDH = r(2597));
          var u = r(5250);
          (t.publicEncrypt = u.publicEncrypt),
            (t.privateEncrypt = u.privateEncrypt),
            (t.publicDecrypt = u.publicDecrypt),
            (t.privateDecrypt = u.privateDecrypt);
          var d = r(6644);
          (t.randomFill = d.randomFill),
            (t.randomFillSync = d.randomFillSync),
            (t.createCredentials = function () {
              throw new Error(
                [
                  "sorry, createCredentials is not implemented yet",
                  "we accept pull requests",
                  "https://github.com/crypto-browserify/crypto-browserify",
                ].join("\n")
              );
            }),
            (t.constants = {
              DH_CHECK_P_NOT_SAFE_PRIME: 2,
              DH_CHECK_P_NOT_PRIME: 1,
              DH_UNABLE_TO_CHECK_GENERATOR: 4,
              DH_NOT_SUITABLE_GENERATOR: 8,
              NPN_ENABLED: 1,
              ALPN_ENABLED: 1,
              RSA_PKCS1_PADDING: 1,
              RSA_SSLV23_PADDING: 2,
              RSA_NO_PADDING: 3,
              RSA_PKCS1_OAEP_PADDING: 4,
              RSA_X931_PADDING: 5,
              RSA_PKCS1_PSS_PADDING: 6,
              POINT_CONVERSION_COMPRESSED: 2,
              POINT_CONVERSION_UNCOMPRESSED: 4,
              POINT_CONVERSION_HYBRID: 6,
            });
        },
        9129: (e, t, r) => {
          "use strict";
          (t.utils = r(2576)),
            (t.Cipher = r(4723)),
            (t.DES = r(4535)),
            (t.CBC = r(6541)),
            (t.EDE = r(1828));
        },
        6541: (e, t, r) => {
          "use strict";
          var n = r(882),
            i = r(2111),
            o = {};
          function a(e) {
            n.equal(e.length, 8, "Invalid IV length"), (this.iv = new Array(8));
            for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
          }
          (t.instantiate = function (e) {
            function t(t) {
              e.call(this, t), this._cbcInit();
            }
            i(t, e);
            for (var r = Object.keys(o), n = 0; n < r.length; n++) {
              var a = r[n];
              t.prototype[a] = o[a];
            }
            return (
              (t.create = function (e) {
                return new t(e);
              }),
              t
            );
          }),
            (o._cbcInit = function () {
              var e = new a(this.options.iv);
              this._cbcState = e;
            }),
            (o._update = function (e, t, r, n) {
              var i = this._cbcState,
                o = this.constructor.super_.prototype,
                a = i.iv;
              if ("encrypt" === this.type) {
                for (var s = 0; s < this.blockSize; s++) a[s] ^= e[t + s];
                for (
                  o._update.call(this, a, 0, r, n), s = 0;
                  s < this.blockSize;
                  s++
                )
                  a[s] = r[n + s];
              } else {
                for (
                  o._update.call(this, e, t, r, n), s = 0;
                  s < this.blockSize;
                  s++
                )
                  r[n + s] ^= a[s];
                for (s = 0; s < this.blockSize; s++) a[s] = e[t + s];
              }
            });
        },
        4723: (e, t, r) => {
          "use strict";
          var n = r(882);
          function i(e) {
            (this.options = e),
              (this.type = this.options.type),
              (this.blockSize = 8),
              this._init(),
              (this.buffer = new Array(this.blockSize)),
              (this.bufferOff = 0);
          }
          (e.exports = i),
            (i.prototype._init = function () {}),
            (i.prototype.update = function (e) {
              return 0 === e.length
                ? []
                : "decrypt" === this.type
                ? this._updateDecrypt(e)
                : this._updateEncrypt(e);
            }),
            (i.prototype._buffer = function (e, t) {
              for (
                var r = Math.min(
                    this.buffer.length - this.bufferOff,
                    e.length - t
                  ),
                  n = 0;
                n < r;
                n++
              )
                this.buffer[this.bufferOff + n] = e[t + n];
              return (this.bufferOff += r), r;
            }),
            (i.prototype._flushBuffer = function (e, t) {
              return (
                this._update(this.buffer, 0, e, t),
                (this.bufferOff = 0),
                this.blockSize
              );
            }),
            (i.prototype._updateEncrypt = function (e) {
              var t = 0,
                r = 0,
                n = ((this.bufferOff + e.length) / this.blockSize) | 0,
                i = new Array(n * this.blockSize);
              0 !== this.bufferOff &&
                ((t += this._buffer(e, t)),
                this.bufferOff === this.buffer.length &&
                  (r += this._flushBuffer(i, r)));
              for (
                var o = e.length - ((e.length - t) % this.blockSize);
                t < o;
                t += this.blockSize
              )
                this._update(e, t, i, r), (r += this.blockSize);
              for (; t < e.length; t++, this.bufferOff++)
                this.buffer[this.bufferOff] = e[t];
              return i;
            }),
            (i.prototype._updateDecrypt = function (e) {
              for (
                var t = 0,
                  r = 0,
                  n =
                    Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1,
                  i = new Array(n * this.blockSize);
                n > 0;
                n--
              )
                (t += this._buffer(e, t)), (r += this._flushBuffer(i, r));
              return (t += this._buffer(e, t)), i;
            }),
            (i.prototype.final = function (e) {
              var t, r;
              return (
                e && (t = this.update(e)),
                (r =
                  "encrypt" === this.type
                    ? this._finalEncrypt()
                    : this._finalDecrypt()),
                t ? t.concat(r) : r
              );
            }),
            (i.prototype._pad = function (e, t) {
              if (0 === t) return !1;
              for (; t < e.length; ) e[t++] = 0;
              return !0;
            }),
            (i.prototype._finalEncrypt = function () {
              if (!this._pad(this.buffer, this.bufferOff)) return [];
              var e = new Array(this.blockSize);
              return this._update(this.buffer, 0, e, 0), e;
            }),
            (i.prototype._unpad = function (e) {
              return e;
            }),
            (i.prototype._finalDecrypt = function () {
              n.equal(
                this.bufferOff,
                this.blockSize,
                "Not enough data to decrypt"
              );
              var e = new Array(this.blockSize);
              return this._flushBuffer(e, 0), this._unpad(e);
            });
        },
        4535: (e, t, r) => {
          "use strict";
          var n = r(882),
            i = r(2111),
            o = r(2576),
            a = r(4723);
          function s() {
            (this.tmp = new Array(2)), (this.keys = null);
          }
          function f(e) {
            a.call(this, e);
            var t = new s();
            (this._desState = t), this.deriveKeys(t, e.key);
          }
          i(f, a),
            (e.exports = f),
            (f.create = function (e) {
              return new f(e);
            });
          var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
          (f.prototype.deriveKeys = function (e, t) {
            (e.keys = new Array(32)),
              n.equal(t.length, this.blockSize, "Invalid key length");
            var r = o.readUInt32BE(t, 0),
              i = o.readUInt32BE(t, 4);
            o.pc1(r, i, e.tmp, 0), (r = e.tmp[0]), (i = e.tmp[1]);
            for (var a = 0; a < e.keys.length; a += 2) {
              var s = c[a >>> 1];
              (r = o.r28shl(r, s)),
                (i = o.r28shl(i, s)),
                o.pc2(r, i, e.keys, a);
            }
          }),
            (f.prototype._update = function (e, t, r, n) {
              var i = this._desState,
                a = o.readUInt32BE(e, t),
                s = o.readUInt32BE(e, t + 4);
              o.ip(a, s, i.tmp, 0),
                (a = i.tmp[0]),
                (s = i.tmp[1]),
                "encrypt" === this.type
                  ? this._encrypt(i, a, s, i.tmp, 0)
                  : this._decrypt(i, a, s, i.tmp, 0),
                (a = i.tmp[0]),
                (s = i.tmp[1]),
                o.writeUInt32BE(r, a, n),
                o.writeUInt32BE(r, s, n + 4);
            }),
            (f.prototype._pad = function (e, t) {
              for (var r = e.length - t, n = t; n < e.length; n++) e[n] = r;
              return !0;
            }),
            (f.prototype._unpad = function (e) {
              for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
                n.equal(e[r], t);
              return e.slice(0, e.length - t);
            }),
            (f.prototype._encrypt = function (e, t, r, n, i) {
              for (var a = t, s = r, f = 0; f < e.keys.length; f += 2) {
                var c = e.keys[f],
                  u = e.keys[f + 1];
                o.expand(s, e.tmp, 0), (c ^= e.tmp[0]), (u ^= e.tmp[1]);
                var d = o.substitute(c, u),
                  h = s;
                (s = (a ^ o.permute(d)) >>> 0), (a = h);
              }
              o.rip(s, a, n, i);
            }),
            (f.prototype._decrypt = function (e, t, r, n, i) {
              for (var a = r, s = t, f = e.keys.length - 2; f >= 0; f -= 2) {
                var c = e.keys[f],
                  u = e.keys[f + 1];
                o.expand(a, e.tmp, 0), (c ^= e.tmp[0]), (u ^= e.tmp[1]);
                var d = o.substitute(c, u),
                  h = a;
                (a = (s ^ o.permute(d)) >>> 0), (s = h);
              }
              o.rip(a, s, n, i);
            });
        },
        1828: (e, t, r) => {
          "use strict";
          var n = r(882),
            i = r(2111),
            o = r(4723),
            a = r(4535);
          function s(e, t) {
            n.equal(t.length, 24, "Invalid key length");
            var r = t.slice(0, 8),
              i = t.slice(8, 16),
              o = t.slice(16, 24);
            this.ciphers =
              "encrypt" === e
                ? [
                    a.create({ type: "encrypt", key: r }),
                    a.create({ type: "decrypt", key: i }),
                    a.create({ type: "encrypt", key: o }),
                  ]
                : [
                    a.create({ type: "decrypt", key: o }),
                    a.create({ type: "encrypt", key: i }),
                    a.create({ type: "decrypt", key: r }),
                  ];
          }
          function f(e) {
            o.call(this, e);
            var t = new s(this.type, this.options.key);
            this._edeState = t;
          }
          i(f, o),
            (e.exports = f),
            (f.create = function (e) {
              return new f(e);
            }),
            (f.prototype._update = function (e, t, r, n) {
              var i = this._edeState;
              i.ciphers[0]._update(e, t, r, n),
                i.ciphers[1]._update(r, n, r, n),
                i.ciphers[2]._update(r, n, r, n);
            }),
            (f.prototype._pad = a.prototype._pad),
            (f.prototype._unpad = a.prototype._unpad);
        },
        2576: (e, t) => {
          "use strict";
          (t.readUInt32BE = function (e, t) {
            return (
              ((e[0 + t] << 24) |
                (e[1 + t] << 16) |
                (e[2 + t] << 8) |
                e[3 + t]) >>>
              0
            );
          }),
            (t.writeUInt32BE = function (e, t, r) {
              (e[0 + r] = t >>> 24),
                (e[1 + r] = (t >>> 16) & 255),
                (e[2 + r] = (t >>> 8) & 255),
                (e[3 + r] = 255 & t);
            }),
            (t.ip = function (e, t, r, n) {
              for (var i = 0, o = 0, a = 6; a >= 0; a -= 2) {
                for (var s = 0; s <= 24; s += 8)
                  (i <<= 1), (i |= (t >>> (s + a)) & 1);
                for (s = 0; s <= 24; s += 8)
                  (i <<= 1), (i |= (e >>> (s + a)) & 1);
              }
              for (a = 6; a >= 0; a -= 2) {
                for (s = 1; s <= 25; s += 8)
                  (o <<= 1), (o |= (t >>> (s + a)) & 1);
                for (s = 1; s <= 25; s += 8)
                  (o <<= 1), (o |= (e >>> (s + a)) & 1);
              }
              (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
            }),
            (t.rip = function (e, t, r, n) {
              for (var i = 0, o = 0, a = 0; a < 4; a++)
                for (var s = 24; s >= 0; s -= 8)
                  (i <<= 1),
                    (i |= (t >>> (s + a)) & 1),
                    (i <<= 1),
                    (i |= (e >>> (s + a)) & 1);
              for (a = 4; a < 8; a++)
                for (s = 24; s >= 0; s -= 8)
                  (o <<= 1),
                    (o |= (t >>> (s + a)) & 1),
                    (o <<= 1),
                    (o |= (e >>> (s + a)) & 1);
              (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
            }),
            (t.pc1 = function (e, t, r, n) {
              for (var i = 0, o = 0, a = 7; a >= 5; a--) {
                for (var s = 0; s <= 24; s += 8)
                  (i <<= 1), (i |= (t >> (s + a)) & 1);
                for (s = 0; s <= 24; s += 8)
                  (i <<= 1), (i |= (e >> (s + a)) & 1);
              }
              for (s = 0; s <= 24; s += 8) (i <<= 1), (i |= (t >> (s + a)) & 1);
              for (a = 1; a <= 3; a++) {
                for (s = 0; s <= 24; s += 8)
                  (o <<= 1), (o |= (t >> (s + a)) & 1);
                for (s = 0; s <= 24; s += 8)
                  (o <<= 1), (o |= (e >> (s + a)) & 1);
              }
              for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (e >> (s + a)) & 1);
              (r[n + 0] = i >>> 0), (r[n + 1] = o >>> 0);
            }),
            (t.r28shl = function (e, t) {
              return ((e << t) & 268435455) | (e >>> (28 - t));
            });
          var r = [
            14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20,
            12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12,
            7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24,
          ];
          (t.pc2 = function (e, t, n, i) {
            for (var o = 0, a = 0, s = r.length >>> 1, f = 0; f < s; f++)
              (o <<= 1), (o |= (e >>> r[f]) & 1);
            for (f = s; f < r.length; f++) (a <<= 1), (a |= (t >>> r[f]) & 1);
            (n[i + 0] = o >>> 0), (n[i + 1] = a >>> 0);
          }),
            (t.expand = function (e, t, r) {
              var n = 0,
                i = 0;
              n = ((1 & e) << 5) | (e >>> 27);
              for (var o = 23; o >= 15; o -= 4)
                (n <<= 6), (n |= (e >>> o) & 63);
              for (o = 11; o >= 3; o -= 4) (i |= (e >>> o) & 63), (i <<= 6);
              (i |= ((31 & e) << 1) | (e >>> 31)),
                (t[r + 0] = n >>> 0),
                (t[r + 1] = i >>> 0);
            });
          var n = [
            14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6,
            6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2,
            13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0,
            5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14,
            9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8,
            7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12,
            9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15,
            6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13,
            1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14,
            12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6,
            6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14,
            15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9,
            1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2,
            1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3,
            0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2,
            8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10,
            1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4,
            14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8,
            5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6,
            13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14,
            12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13,
            13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14,
            5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7,
            1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2,
            11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9,
            13, 0, 15, 3, 3, 5, 5, 6, 8, 11,
          ];
          t.substitute = function (e, t) {
            for (var r = 0, i = 0; i < 4; i++)
              (r <<= 4), (r |= n[64 * i + ((e >>> (18 - 6 * i)) & 63)]);
            for (i = 0; i < 4; i++)
              (r <<= 4), (r |= n[256 + 64 * i + ((t >>> (18 - 6 * i)) & 63)]);
            return r >>> 0;
          };
          var i = [
            16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24,
            8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
          ];
          (t.permute = function (e) {
            for (var t = 0, r = 0; r < i.length; r++)
              (t <<= 1), (t |= (e >>> i[r]) & 1);
            return t >>> 0;
          }),
            (t.padSplit = function (e, t, r) {
              for (var n = e.toString(2); n.length < t; ) n = "0" + n;
              for (var i = [], o = 0; o < t; o += r) i.push(n.slice(o, o + r));
              return i.join(" ");
            });
        },
        4616: (e, t, r) => {
          var n = r(5291).Buffer,
            i = r(7435),
            o = r(5373),
            a = r(4971),
            s = { binary: !0, hex: !0, base64: !0 };
          (t.DiffieHellmanGroup =
            t.createDiffieHellmanGroup =
            t.getDiffieHellman =
              function (e) {
                var t = new n(o[e].prime, "hex"),
                  r = new n(o[e].gen, "hex");
                return new a(t, r);
              }),
            (t.createDiffieHellman = t.DiffieHellman =
              function e(t, r, o, f) {
                return n.isBuffer(r) || void 0 === s[r]
                  ? e(t, "binary", r, o)
                  : ((r = r || "binary"),
                    (f = f || "binary"),
                    (o = o || new n([2])),
                    n.isBuffer(o) || (o = new n(o, f)),
                    "number" == typeof t
                      ? new a(i(t, o), o, !0)
                      : (n.isBuffer(t) || (t = new n(t, r)), new a(t, o, !0)));
              });
        },
        4971: (e, t, r) => {
          var n = r(5291).Buffer,
            i = r(2693),
            o = new (r(2805))(),
            a = new i(24),
            s = new i(11),
            f = new i(10),
            c = new i(3),
            u = new i(7),
            d = r(7435),
            h = r(9631);
          function l(e, t) {
            return (
              (t = t || "utf8"),
              n.isBuffer(e) || (e = new n(e, t)),
              (this._pub = new i(e)),
              this
            );
          }
          function p(e, t) {
            return (
              (t = t || "utf8"),
              n.isBuffer(e) || (e = new n(e, t)),
              (this._priv = new i(e)),
              this
            );
          }
          e.exports = y;
          var b = {};
          function y(e, t, r) {
            this.setGenerator(t),
              (this.__prime = new i(e)),
              (this._prime = i.mont(this.__prime)),
              (this._primeLen = e.length),
              (this._pub = void 0),
              (this._priv = void 0),
              (this._primeCode = void 0),
              r
                ? ((this.setPublicKey = l), (this.setPrivateKey = p))
                : (this._primeCode = 8);
          }
          function g(e, t) {
            var r = new n(e.toArray());
            return t ? r.toString(t) : r;
          }
          Object.defineProperty(y.prototype, "verifyError", {
            enumerable: !0,
            get: function () {
              return (
                "number" != typeof this._primeCode &&
                  (this._primeCode = (function (e, t) {
                    var r = t.toString("hex"),
                      n = [r, e.toString(16)].join("_");
                    if (n in b) return b[n];
                    var i,
                      h = 0;
                    if (
                      e.isEven() ||
                      !d.simpleSieve ||
                      !d.fermatTest(e) ||
                      !o.test(e)
                    )
                      return (
                        (h += 1),
                        (h += "02" === r || "05" === r ? 8 : 4),
                        (b[n] = h),
                        h
                      );
                    switch ((o.test(e.shrn(1)) || (h += 2), r)) {
                      case "02":
                        e.mod(a).cmp(s) && (h += 8);
                        break;
                      case "05":
                        (i = e.mod(f)).cmp(c) && i.cmp(u) && (h += 8);
                        break;
                      default:
                        h += 4;
                    }
                    return (b[n] = h), h;
                  })(this.__prime, this.__gen)),
                this._primeCode
              );
            },
          }),
            (y.prototype.generateKeys = function () {
              return (
                this._priv || (this._priv = new i(h(this._primeLen))),
                (this._pub = this._gen
                  .toRed(this._prime)
                  .redPow(this._priv)
                  .fromRed()),
                this.getPublicKey()
              );
            }),
            (y.prototype.computeSecret = function (e) {
              var t = (e = (e = new i(e)).toRed(this._prime))
                  .redPow(this._priv)
                  .fromRed(),
                r = new n(t.toArray()),
                o = this.getPrime();
              if (r.length < o.length) {
                var a = new n(o.length - r.length);
                a.fill(0), (r = n.concat([a, r]));
              }
              return r;
            }),
            (y.prototype.getPublicKey = function (e) {
              return g(this._pub, e);
            }),
            (y.prototype.getPrivateKey = function (e) {
              return g(this._priv, e);
            }),
            (y.prototype.getPrime = function (e) {
              return g(this.__prime, e);
            }),
            (y.prototype.getGenerator = function (e) {
              return g(this._gen, e);
            }),
            (y.prototype.setGenerator = function (e, t) {
              return (
                (t = t || "utf8"),
                n.isBuffer(e) || (e = new n(e, t)),
                (this.__gen = e),
                (this._gen = new i(e)),
                this
              );
            });
        },
        7435: (e, t, r) => {
          var n = r(9631);
          (e.exports = m), (m.simpleSieve = y), (m.fermatTest = g);
          var i = r(2693),
            o = new i(24),
            a = new (r(2805))(),
            s = new i(1),
            f = new i(2),
            c = new i(5),
            u = (new i(16), new i(8), new i(10)),
            d = new i(3),
            h = (new i(7), new i(11)),
            l = new i(4),
            p = (new i(12), null);
          function b() {
            if (null !== p) return p;
            var e = [];
            e[0] = 2;
            for (var t = 1, r = 3; r < 1048576; r += 2) {
              for (
                var n = Math.ceil(Math.sqrt(r)), i = 0;
                i < t && e[i] <= n && r % e[i] != 0;
                i++
              );
              (t !== i && e[i] <= n) || (e[t++] = r);
            }
            return (p = e), e;
          }
          function y(e) {
            for (var t = b(), r = 0; r < t.length; r++)
              if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
            return !0;
          }
          function g(e) {
            var t = i.mont(e);
            return 0 === f.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
          }
          function m(e, t) {
            if (e < 16)
              return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
            var r, p;
            for (t = new i(t); ; ) {
              for (r = new i(n(Math.ceil(e / 8))); r.bitLength() > e; )
                r.ishrn(1);
              if (
                (r.isEven() && r.iadd(s), r.testn(1) || r.iadd(f), t.cmp(f))
              ) {
                if (!t.cmp(c)) for (; r.mod(u).cmp(d); ) r.iadd(l);
              } else for (; r.mod(o).cmp(h); ) r.iadd(l);
              if (
                y((p = r.shrn(1))) &&
                y(r) &&
                g(p) &&
                g(r) &&
                a.test(p) &&
                a.test(r)
              )
                return r;
            }
          }
        },
        7919: (e, t, r) => {
          "use strict";
          var n = t;
          (n.version = r(7779).i8),
            (n.utils = r(2808)),
            (n.rand = r(5552)),
            (n.curve = r(3778)),
            (n.curves = r(8838)),
            (n.ec = r(2594)),
            (n.eddsa = r(7245));
        },
        1691: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(2808),
            o = i.getNAF,
            a = i.getJSF,
            s = i.assert;
          function f(e, t) {
            (this.type = e),
              (this.p = new n(t.p, 16)),
              (this.red = t.prime ? n.red(t.prime) : n.mont(this.p)),
              (this.zero = new n(0).toRed(this.red)),
              (this.one = new n(1).toRed(this.red)),
              (this.two = new n(2).toRed(this.red)),
              (this.n = t.n && new n(t.n, 16)),
              (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
              (this._wnafT1 = new Array(4)),
              (this._wnafT2 = new Array(4)),
              (this._wnafT3 = new Array(4)),
              (this._wnafT4 = new Array(4)),
              (this._bitLength = this.n ? this.n.bitLength() : 0);
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0
              ? (this.redN = null)
              : ((this._maxwellTrick = !0),
                (this.redN = this.n.toRed(this.red)));
          }
          function c(e, t) {
            (this.curve = e), (this.type = t), (this.precomputed = null);
          }
          (e.exports = f),
            (f.prototype.point = function () {
              throw new Error("Not implemented");
            }),
            (f.prototype.validate = function () {
              throw new Error("Not implemented");
            }),
            (f.prototype._fixedNafMul = function (e, t) {
              s(e.precomputed);
              var r = e._getDoubles(),
                n = o(t, 1, this._bitLength),
                i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
              i /= 3;
              var a,
                f,
                c = [];
              for (a = 0; a < n.length; a += r.step) {
                f = 0;
                for (var u = a + r.step - 1; u >= a; u--) f = (f << 1) + n[u];
                c.push(f);
              }
              for (
                var d = this.jpoint(null, null, null),
                  h = this.jpoint(null, null, null),
                  l = i;
                l > 0;
                l--
              ) {
                for (a = 0; a < c.length; a++)
                  (f = c[a]) === l
                    ? (h = h.mixedAdd(r.points[a]))
                    : f === -l && (h = h.mixedAdd(r.points[a].neg()));
                d = d.add(h);
              }
              return d.toP();
            }),
            (f.prototype._wnafMul = function (e, t) {
              var r = 4,
                n = e._getNAFPoints(r);
              r = n.wnd;
              for (
                var i = n.points,
                  a = o(t, r, this._bitLength),
                  f = this.jpoint(null, null, null),
                  c = a.length - 1;
                c >= 0;
                c--
              ) {
                for (var u = 0; c >= 0 && 0 === a[c]; c--) u++;
                if ((c >= 0 && u++, (f = f.dblp(u)), c < 0)) break;
                var d = a[c];
                s(0 !== d),
                  (f =
                    "affine" === e.type
                      ? d > 0
                        ? f.mixedAdd(i[(d - 1) >> 1])
                        : f.mixedAdd(i[(-d - 1) >> 1].neg())
                      : d > 0
                      ? f.add(i[(d - 1) >> 1])
                      : f.add(i[(-d - 1) >> 1].neg()));
              }
              return "affine" === e.type ? f.toP() : f;
            }),
            (f.prototype._wnafMulAdd = function (e, t, r, n, i) {
              var s,
                f,
                c,
                u = this._wnafT1,
                d = this._wnafT2,
                h = this._wnafT3,
                l = 0;
              for (s = 0; s < n; s++) {
                var p = (c = t[s])._getNAFPoints(e);
                (u[s] = p.wnd), (d[s] = p.points);
              }
              for (s = n - 1; s >= 1; s -= 2) {
                var b = s - 1,
                  y = s;
                if (1 === u[b] && 1 === u[y]) {
                  var g = [t[b], null, null, t[y]];
                  0 === t[b].y.cmp(t[y].y)
                    ? ((g[1] = t[b].add(t[y])),
                      (g[2] = t[b].toJ().mixedAdd(t[y].neg())))
                    : 0 === t[b].y.cmp(t[y].y.redNeg())
                    ? ((g[1] = t[b].toJ().mixedAdd(t[y])),
                      (g[2] = t[b].add(t[y].neg())))
                    : ((g[1] = t[b].toJ().mixedAdd(t[y])),
                      (g[2] = t[b].toJ().mixedAdd(t[y].neg())));
                  var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                    v = a(r[b], r[y]);
                  for (
                    l = Math.max(v[0].length, l),
                      h[b] = new Array(l),
                      h[y] = new Array(l),
                      f = 0;
                    f < l;
                    f++
                  ) {
                    var w = 0 | v[0][f],
                      _ = 0 | v[1][f];
                    (h[b][f] = m[3 * (w + 1) + (_ + 1)]),
                      (h[y][f] = 0),
                      (d[b] = g);
                  }
                } else
                  (h[b] = o(r[b], u[b], this._bitLength)),
                    (h[y] = o(r[y], u[y], this._bitLength)),
                    (l = Math.max(h[b].length, l)),
                    (l = Math.max(h[y].length, l));
              }
              var S = this.jpoint(null, null, null),
                E = this._wnafT4;
              for (s = l; s >= 0; s--) {
                for (var A = 0; s >= 0; ) {
                  var M = !0;
                  for (f = 0; f < n; f++)
                    (E[f] = 0 | h[f][s]), 0 !== E[f] && (M = !1);
                  if (!M) break;
                  A++, s--;
                }
                if ((s >= 0 && A++, (S = S.dblp(A)), s < 0)) break;
                for (f = 0; f < n; f++) {
                  var k = E[f];
                  0 !== k &&
                    (k > 0
                      ? (c = d[f][(k - 1) >> 1])
                      : k < 0 && (c = d[f][(-k - 1) >> 1].neg()),
                    (S = "affine" === c.type ? S.mixedAdd(c) : S.add(c)));
                }
              }
              for (s = 0; s < n; s++) d[s] = null;
              return i ? S : S.toP();
            }),
            (f.BasePoint = c),
            (c.prototype.eq = function () {
              throw new Error("Not implemented");
            }),
            (c.prototype.validate = function () {
              return this.curve.validate(this);
            }),
            (f.prototype.decodePoint = function (e, t) {
              e = i.toArray(e, t);
              var r = this.p.byteLength();
              if (
                (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
                e.length - 1 == 2 * r
              )
                return (
                  6 === e[0]
                    ? s(e[e.length - 1] % 2 == 0)
                    : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
                  this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
                );
              if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
              throw new Error("Unknown point format");
            }),
            (c.prototype.encodeCompressed = function (e) {
              return this.encode(e, !0);
            }),
            (c.prototype._encode = function (e) {
              var t = this.curve.p.byteLength(),
                r = this.getX().toArray("be", t);
              return e
                ? [this.getY().isEven() ? 2 : 3].concat(r)
                : [4].concat(r, this.getY().toArray("be", t));
            }),
            (c.prototype.encode = function (e, t) {
              return i.encode(this._encode(t), e);
            }),
            (c.prototype.precompute = function (e) {
              if (this.precomputed) return this;
              var t = { doubles: null, naf: null, beta: null };
              return (
                (t.naf = this._getNAFPoints(8)),
                (t.doubles = this._getDoubles(4, e)),
                (t.beta = this._getBeta()),
                (this.precomputed = t),
                this
              );
            }),
            (c.prototype._hasDoubles = function (e) {
              if (!this.precomputed) return !1;
              var t = this.precomputed.doubles;
              return (
                !!t &&
                t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
              );
            }),
            (c.prototype._getDoubles = function (e, t) {
              if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
              for (var r = [this], n = this, i = 0; i < t; i += e) {
                for (var o = 0; o < e; o++) n = n.dbl();
                r.push(n);
              }
              return { step: e, points: r };
            }),
            (c.prototype._getNAFPoints = function (e) {
              if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
              for (
                var t = [this],
                  r = (1 << e) - 1,
                  n = 1 === r ? null : this.dbl(),
                  i = 1;
                i < r;
                i++
              )
                t[i] = t[i - 1].add(n);
              return { wnd: e, points: t };
            }),
            (c.prototype._getBeta = function () {
              return null;
            }),
            (c.prototype.dblp = function (e) {
              for (var t = this, r = 0; r < e; r++) t = t.dbl();
              return t;
            });
        },
        1311: (e, t, r) => {
          "use strict";
          var n = r(2808),
            i = r(2693),
            o = r(2111),
            a = r(1691),
            s = n.assert;
          function f(e) {
            (this.twisted = 1 != (0 | e.a)),
              (this.mOneA = this.twisted && -1 == (0 | e.a)),
              (this.extended = this.mOneA),
              a.call(this, "edwards", e),
              (this.a = new i(e.a, 16).umod(this.red.m)),
              (this.a = this.a.toRed(this.red)),
              (this.c = new i(e.c, 16).toRed(this.red)),
              (this.c2 = this.c.redSqr()),
              (this.d = new i(e.d, 16).toRed(this.red)),
              (this.dd = this.d.redAdd(this.d)),
              s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
              (this.oneC = 1 == (0 | e.c));
          }
          function c(e, t, r, n, o) {
            a.BasePoint.call(this, e, "projective"),
              null === t && null === r && null === n
                ? ((this.x = this.curve.zero),
                  (this.y = this.curve.one),
                  (this.z = this.curve.one),
                  (this.t = this.curve.zero),
                  (this.zOne = !0))
                : ((this.x = new i(t, 16)),
                  (this.y = new i(r, 16)),
                  (this.z = n ? new i(n, 16) : this.curve.one),
                  (this.t = o && new i(o, 16)),
                  this.x.red || (this.x = this.x.toRed(this.curve.red)),
                  this.y.red || (this.y = this.y.toRed(this.curve.red)),
                  this.z.red || (this.z = this.z.toRed(this.curve.red)),
                  this.t &&
                    !this.t.red &&
                    (this.t = this.t.toRed(this.curve.red)),
                  (this.zOne = this.z === this.curve.one),
                  this.curve.extended &&
                    !this.t &&
                    ((this.t = this.x.redMul(this.y)),
                    this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
          }
          o(f, a),
            (e.exports = f),
            (f.prototype._mulA = function (e) {
              return this.mOneA ? e.redNeg() : this.a.redMul(e);
            }),
            (f.prototype._mulC = function (e) {
              return this.oneC ? e : this.c.redMul(e);
            }),
            (f.prototype.jpoint = function (e, t, r, n) {
              return this.point(e, t, r, n);
            }),
            (f.prototype.pointFromX = function (e, t) {
              (e = new i(e, 16)).red || (e = e.toRed(this.red));
              var r = e.redSqr(),
                n = this.c2.redSub(this.a.redMul(r)),
                o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                a = n.redMul(o.redInvm()),
                s = a.redSqrt();
              if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
              var f = s.fromRed().isOdd();
              return (
                ((t && !f) || (!t && f)) && (s = s.redNeg()), this.point(e, s)
              );
            }),
            (f.prototype.pointFromY = function (e, t) {
              (e = new i(e, 16)).red || (e = e.toRed(this.red));
              var r = e.redSqr(),
                n = r.redSub(this.c2),
                o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                a = n.redMul(o.redInvm());
              if (0 === a.cmp(this.zero)) {
                if (t) throw new Error("invalid point");
                return this.point(this.zero, e);
              }
              var s = a.redSqrt();
              if (0 !== s.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
              return (
                s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
              );
            }),
            (f.prototype.validate = function (e) {
              if (e.isInfinity()) return !0;
              e.normalize();
              var t = e.x.redSqr(),
                r = e.y.redSqr(),
                n = t.redMul(this.a).redAdd(r),
                i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
              return 0 === n.cmp(i);
            }),
            o(c, a.BasePoint),
            (f.prototype.pointFromJSON = function (e) {
              return c.fromJSON(this, e);
            }),
            (f.prototype.point = function (e, t, r, n) {
              return new c(this, e, t, r, n);
            }),
            (c.fromJSON = function (e, t) {
              return new c(e, t[0], t[1], t[2]);
            }),
            (c.prototype.inspect = function () {
              return this.isInfinity()
                ? "<EC Point Infinity>"
                : "<EC Point x: " +
                    this.x.fromRed().toString(16, 2) +
                    " y: " +
                    this.y.fromRed().toString(16, 2) +
                    " z: " +
                    this.z.fromRed().toString(16, 2) +
                    ">";
            }),
            (c.prototype.isInfinity = function () {
              return (
                0 === this.x.cmpn(0) &&
                (0 === this.y.cmp(this.z) ||
                  (this.zOne && 0 === this.y.cmp(this.curve.c)))
              );
            }),
            (c.prototype._extDbl = function () {
              var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr();
              r = r.redIAdd(r);
              var n = this.curve._mulA(e),
                i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                o = n.redAdd(t),
                a = o.redSub(r),
                s = n.redSub(t),
                f = i.redMul(a),
                c = o.redMul(s),
                u = i.redMul(s),
                d = a.redMul(o);
              return this.curve.point(f, c, d, u);
            }),
            (c.prototype._projDbl = function () {
              var e,
                t,
                r,
                n,
                i,
                o,
                a = this.x.redAdd(this.y).redSqr(),
                s = this.x.redSqr(),
                f = this.y.redSqr();
              if (this.curve.twisted) {
                var c = (n = this.curve._mulA(s)).redAdd(f);
                this.zOne
                  ? ((e = a
                      .redSub(s)
                      .redSub(f)
                      .redMul(c.redSub(this.curve.two))),
                    (t = c.redMul(n.redSub(f))),
                    (r = c.redSqr().redSub(c).redSub(c)))
                  : ((i = this.z.redSqr()),
                    (o = c.redSub(i).redISub(i)),
                    (e = a.redSub(s).redISub(f).redMul(o)),
                    (t = c.redMul(n.redSub(f))),
                    (r = c.redMul(o)));
              } else
                (n = s.redAdd(f)),
                  (i = this.curve._mulC(this.z).redSqr()),
                  (o = n.redSub(i).redSub(i)),
                  (e = this.curve._mulC(a.redISub(n)).redMul(o)),
                  (t = this.curve._mulC(n).redMul(s.redISub(f))),
                  (r = n.redMul(o));
              return this.curve.point(e, t, r);
            }),
            (c.prototype.dbl = function () {
              return this.isInfinity()
                ? this
                : this.curve.extended
                ? this._extDbl()
                : this._projDbl();
            }),
            (c.prototype._extAdd = function (e) {
              var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                n = this.t.redMul(this.curve.dd).redMul(e.t),
                i = this.z.redMul(e.z.redAdd(e.z)),
                o = r.redSub(t),
                a = i.redSub(n),
                s = i.redAdd(n),
                f = r.redAdd(t),
                c = o.redMul(a),
                u = s.redMul(f),
                d = o.redMul(f),
                h = a.redMul(s);
              return this.curve.point(c, u, h, d);
            }),
            (c.prototype._projAdd = function (e) {
              var t,
                r,
                n = this.z.redMul(e.z),
                i = n.redSqr(),
                o = this.x.redMul(e.x),
                a = this.y.redMul(e.y),
                s = this.curve.d.redMul(o).redMul(a),
                f = i.redSub(s),
                c = i.redAdd(s),
                u = this.x
                  .redAdd(this.y)
                  .redMul(e.x.redAdd(e.y))
                  .redISub(o)
                  .redISub(a),
                d = n.redMul(f).redMul(u);
              return (
                this.curve.twisted
                  ? ((t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o)))),
                    (r = f.redMul(c)))
                  : ((t = n.redMul(c).redMul(a.redSub(o))),
                    (r = this.curve._mulC(f).redMul(c))),
                this.curve.point(d, t, r)
              );
            }),
            (c.prototype.add = function (e) {
              return this.isInfinity()
                ? e
                : e.isInfinity()
                ? this
                : this.curve.extended
                ? this._extAdd(e)
                : this._projAdd(e);
            }),
            (c.prototype.mul = function (e) {
              return this._hasDoubles(e)
                ? this.curve._fixedNafMul(this, e)
                : this.curve._wnafMul(this, e);
            }),
            (c.prototype.mulAdd = function (e, t, r) {
              return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
            }),
            (c.prototype.jmulAdd = function (e, t, r) {
              return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
            }),
            (c.prototype.normalize = function () {
              if (this.zOne) return this;
              var e = this.z.redInvm();
              return (
                (this.x = this.x.redMul(e)),
                (this.y = this.y.redMul(e)),
                this.t && (this.t = this.t.redMul(e)),
                (this.z = this.curve.one),
                (this.zOne = !0),
                this
              );
            }),
            (c.prototype.neg = function () {
              return this.curve.point(
                this.x.redNeg(),
                this.y,
                this.z,
                this.t && this.t.redNeg()
              );
            }),
            (c.prototype.getX = function () {
              return this.normalize(), this.x.fromRed();
            }),
            (c.prototype.getY = function () {
              return this.normalize(), this.y.fromRed();
            }),
            (c.prototype.eq = function (e) {
              return (
                this === e ||
                (0 === this.getX().cmp(e.getX()) &&
                  0 === this.getY().cmp(e.getY()))
              );
            }),
            (c.prototype.eqXToP = function (e) {
              var t = e.toRed(this.curve.red).redMul(this.z);
              if (0 === this.x.cmp(t)) return !0;
              for (var r = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
                if ((t.redIAdd(n), 0 === this.x.cmp(t))) return !0;
              }
            }),
            (c.prototype.toP = c.prototype.normalize),
            (c.prototype.mixedAdd = c.prototype.add);
        },
        3778: (e, t, r) => {
          "use strict";
          var n = t;
          (n.base = r(1691)),
            (n.short = r(239)),
            (n.mont = r(3884)),
            (n.edwards = r(1311));
        },
        3884: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(2111),
            o = r(1691),
            a = r(2808);
          function s(e) {
            o.call(this, "mont", e),
              (this.a = new n(e.a, 16).toRed(this.red)),
              (this.b = new n(e.b, 16).toRed(this.red)),
              (this.i4 = new n(4).toRed(this.red).redInvm()),
              (this.two = new n(2).toRed(this.red)),
              (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
          }
          function f(e, t, r) {
            o.BasePoint.call(this, e, "projective"),
              null === t && null === r
                ? ((this.x = this.curve.one), (this.z = this.curve.zero))
                : ((this.x = new n(t, 16)),
                  (this.z = new n(r, 16)),
                  this.x.red || (this.x = this.x.toRed(this.curve.red)),
                  this.z.red || (this.z = this.z.toRed(this.curve.red)));
          }
          i(s, o),
            (e.exports = s),
            (s.prototype.validate = function (e) {
              var t = e.normalize().x,
                r = t.redSqr(),
                n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
              return 0 === n.redSqrt().redSqr().cmp(n);
            }),
            i(f, o.BasePoint),
            (s.prototype.decodePoint = function (e, t) {
              return this.point(a.toArray(e, t), 1);
            }),
            (s.prototype.point = function (e, t) {
              return new f(this, e, t);
            }),
            (s.prototype.pointFromJSON = function (e) {
              return f.fromJSON(this, e);
            }),
            (f.prototype.precompute = function () {}),
            (f.prototype._encode = function () {
              return this.getX().toArray("be", this.curve.p.byteLength());
            }),
            (f.fromJSON = function (e, t) {
              return new f(e, t[0], t[1] || e.one);
            }),
            (f.prototype.inspect = function () {
              return this.isInfinity()
                ? "<EC Point Infinity>"
                : "<EC Point x: " +
                    this.x.fromRed().toString(16, 2) +
                    " z: " +
                    this.z.fromRed().toString(16, 2) +
                    ">";
            }),
            (f.prototype.isInfinity = function () {
              return 0 === this.z.cmpn(0);
            }),
            (f.prototype.dbl = function () {
              var e = this.x.redAdd(this.z).redSqr(),
                t = this.x.redSub(this.z).redSqr(),
                r = e.redSub(t),
                n = e.redMul(t),
                i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
              return this.curve.point(n, i);
            }),
            (f.prototype.add = function () {
              throw new Error("Not supported on Montgomery curve");
            }),
            (f.prototype.diffAdd = function (e, t) {
              var r = this.x.redAdd(this.z),
                n = this.x.redSub(this.z),
                i = e.x.redAdd(e.z),
                o = e.x.redSub(e.z).redMul(r),
                a = i.redMul(n),
                s = t.z.redMul(o.redAdd(a).redSqr()),
                f = t.x.redMul(o.redISub(a).redSqr());
              return this.curve.point(s, f);
            }),
            (f.prototype.mul = function (e) {
              for (
                var t = e.clone(),
                  r = this,
                  n = this.curve.point(null, null),
                  i = [];
                0 !== t.cmpn(0);
                t.iushrn(1)
              )
                i.push(t.andln(1));
              for (var o = i.length - 1; o >= 0; o--)
                0 === i[o]
                  ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
                  : ((n = r.diffAdd(n, this)), (r = r.dbl()));
              return n;
            }),
            (f.prototype.mulAdd = function () {
              throw new Error("Not supported on Montgomery curve");
            }),
            (f.prototype.jumlAdd = function () {
              throw new Error("Not supported on Montgomery curve");
            }),
            (f.prototype.eq = function (e) {
              return 0 === this.getX().cmp(e.getX());
            }),
            (f.prototype.normalize = function () {
              return (
                (this.x = this.x.redMul(this.z.redInvm())),
                (this.z = this.curve.one),
                this
              );
            }),
            (f.prototype.getX = function () {
              return this.normalize(), this.x.fromRed();
            });
        },
        239: (e, t, r) => {
          "use strict";
          var n = r(2808),
            i = r(2693),
            o = r(2111),
            a = r(1691),
            s = n.assert;
          function f(e) {
            a.call(this, "short", e),
              (this.a = new i(e.a, 16).toRed(this.red)),
              (this.b = new i(e.b, 16).toRed(this.red)),
              (this.tinv = this.two.redInvm()),
              (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
              (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
              (this.endo = this._getEndomorphism(e)),
              (this._endoWnafT1 = new Array(4)),
              (this._endoWnafT2 = new Array(4));
          }
          function c(e, t, r, n) {
            a.BasePoint.call(this, e, "affine"),
              null === t && null === r
                ? ((this.x = null), (this.y = null), (this.inf = !0))
                : ((this.x = new i(t, 16)),
                  (this.y = new i(r, 16)),
                  n &&
                    (this.x.forceRed(this.curve.red),
                    this.y.forceRed(this.curve.red)),
                  this.x.red || (this.x = this.x.toRed(this.curve.red)),
                  this.y.red || (this.y = this.y.toRed(this.curve.red)),
                  (this.inf = !1));
          }
          function u(e, t, r, n) {
            a.BasePoint.call(this, e, "jacobian"),
              null === t && null === r && null === n
                ? ((this.x = this.curve.one),
                  (this.y = this.curve.one),
                  (this.z = new i(0)))
                : ((this.x = new i(t, 16)),
                  (this.y = new i(r, 16)),
                  (this.z = new i(n, 16))),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one);
          }
          o(f, a),
            (e.exports = f),
            (f.prototype._getEndomorphism = function (e) {
              if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, r;
                if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                else {
                  var n = this._getEndoRoots(this.p);
                  t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
                }
                if (e.lambda) r = new i(e.lambda, 16);
                else {
                  var o = this._getEndoRoots(this.n);
                  0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t))
                    ? (r = o[0])
                    : ((r = o[1]),
                      s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
                }
                return {
                  beta: t,
                  lambda: r,
                  basis: e.basis
                    ? e.basis.map(function (e) {
                        return { a: new i(e.a, 16), b: new i(e.b, 16) };
                      })
                    : this._getEndoBasis(r),
                };
              }
            }),
            (f.prototype._getEndoRoots = function (e) {
              var t = e === this.p ? this.red : i.mont(e),
                r = new i(2).toRed(t).redInvm(),
                n = r.redNeg(),
                o = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
              return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
            }),
            (f.prototype._getEndoBasis = function (e) {
              for (
                var t,
                  r,
                  n,
                  o,
                  a,
                  s,
                  f,
                  c,
                  u,
                  d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
                  h = e,
                  l = this.n.clone(),
                  p = new i(1),
                  b = new i(0),
                  y = new i(0),
                  g = new i(1),
                  m = 0;
                0 !== h.cmpn(0);

              ) {
                var v = l.div(h);
                (c = l.sub(v.mul(h))), (u = y.sub(v.mul(p)));
                var w = g.sub(v.mul(b));
                if (!n && c.cmp(d) < 0)
                  (t = f.neg()), (r = p), (n = c.neg()), (o = u);
                else if (n && 2 == ++m) break;
                (f = c), (l = h), (h = c), (y = p), (p = u), (g = b), (b = w);
              }
              (a = c.neg()), (s = u);
              var _ = n.sqr().add(o.sqr());
              return (
                a.sqr().add(s.sqr()).cmp(_) >= 0 && ((a = t), (s = r)),
                n.negative && ((n = n.neg()), (o = o.neg())),
                a.negative && ((a = a.neg()), (s = s.neg())),
                [
                  { a: n, b: o },
                  { a, b: s },
                ]
              );
            }),
            (f.prototype._endoSplit = function (e) {
              var t = this.endo.basis,
                r = t[0],
                n = t[1],
                i = n.b.mul(e).divRound(this.n),
                o = r.b.neg().mul(e).divRound(this.n),
                a = i.mul(r.a),
                s = o.mul(n.a),
                f = i.mul(r.b),
                c = o.mul(n.b);
              return { k1: e.sub(a).sub(s), k2: f.add(c).neg() };
            }),
            (f.prototype.pointFromX = function (e, t) {
              (e = new i(e, 16)).red || (e = e.toRed(this.red));
              var r = e
                  .redSqr()
                  .redMul(e)
                  .redIAdd(e.redMul(this.a))
                  .redIAdd(this.b),
                n = r.redSqrt();
              if (0 !== n.redSqr().redSub(r).cmp(this.zero))
                throw new Error("invalid point");
              var o = n.fromRed().isOdd();
              return (
                ((t && !o) || (!t && o)) && (n = n.redNeg()), this.point(e, n)
              );
            }),
            (f.prototype.validate = function (e) {
              if (e.inf) return !0;
              var t = e.x,
                r = e.y,
                n = this.a.redMul(t),
                i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
              return 0 === r.redSqr().redISub(i).cmpn(0);
            }),
            (f.prototype._endoWnafMulAdd = function (e, t, r) {
              for (
                var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
                o < e.length;
                o++
              ) {
                var a = this._endoSplit(t[o]),
                  s = e[o],
                  f = s._getBeta();
                a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))),
                  a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
                  (n[2 * o] = s),
                  (n[2 * o + 1] = f),
                  (i[2 * o] = a.k1),
                  (i[2 * o + 1] = a.k2);
              }
              for (
                var c = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0;
                u < 2 * o;
                u++
              )
                (n[u] = null), (i[u] = null);
              return c;
            }),
            o(c, a.BasePoint),
            (f.prototype.point = function (e, t, r) {
              return new c(this, e, t, r);
            }),
            (f.prototype.pointFromJSON = function (e, t) {
              return c.fromJSON(this, e, t);
            }),
            (c.prototype._getBeta = function () {
              if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta) return e.beta;
                var t = this.curve.point(
                  this.x.redMul(this.curve.endo.beta),
                  this.y
                );
                if (e) {
                  var r = this.curve,
                    n = function (e) {
                      return r.point(e.x.redMul(r.endo.beta), e.y);
                    };
                  (e.beta = t),
                    (t.precomputed = {
                      beta: null,
                      naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(n),
                      },
                      doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(n),
                      },
                    });
                }
                return t;
              }
            }),
            (c.prototype.toJSON = function () {
              return this.precomputed
                ? [
                    this.x,
                    this.y,
                    this.precomputed && {
                      doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1),
                      },
                      naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1),
                      },
                    },
                  ]
                : [this.x, this.y];
            }),
            (c.fromJSON = function (e, t, r) {
              "string" == typeof t && (t = JSON.parse(t));
              var n = e.point(t[0], t[1], r);
              if (!t[2]) return n;
              function i(t) {
                return e.point(t[0], t[1], r);
              }
              var o = t[2];
              return (
                (n.precomputed = {
                  beta: null,
                  doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [n].concat(o.doubles.points.map(i)),
                  },
                  naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [n].concat(o.naf.points.map(i)),
                  },
                }),
                n
              );
            }),
            (c.prototype.inspect = function () {
              return this.isInfinity()
                ? "<EC Point Infinity>"
                : "<EC Point x: " +
                    this.x.fromRed().toString(16, 2) +
                    " y: " +
                    this.y.fromRed().toString(16, 2) +
                    ">";
            }),
            (c.prototype.isInfinity = function () {
              return this.inf;
            }),
            (c.prototype.add = function (e) {
              if (this.inf) return e;
              if (e.inf) return this;
              if (this.eq(e)) return this.dbl();
              if (this.neg().eq(e)) return this.curve.point(null, null);
              if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
              var t = this.y.redSub(e.y);
              0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
              var r = t.redSqr().redISub(this.x).redISub(e.x),
                n = t.redMul(this.x.redSub(r)).redISub(this.y);
              return this.curve.point(r, n);
            }),
            (c.prototype.dbl = function () {
              if (this.inf) return this;
              var e = this.y.redAdd(this.y);
              if (0 === e.cmpn(0)) return this.curve.point(null, null);
              var t = this.curve.a,
                r = this.x.redSqr(),
                n = e.redInvm(),
                i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
                o = i.redSqr().redISub(this.x.redAdd(this.x)),
                a = i.redMul(this.x.redSub(o)).redISub(this.y);
              return this.curve.point(o, a);
            }),
            (c.prototype.getX = function () {
              return this.x.fromRed();
            }),
            (c.prototype.getY = function () {
              return this.y.fromRed();
            }),
            (c.prototype.mul = function (e) {
              return (
                (e = new i(e, 16)),
                this.isInfinity()
                  ? this
                  : this._hasDoubles(e)
                  ? this.curve._fixedNafMul(this, e)
                  : this.curve.endo
                  ? this.curve._endoWnafMulAdd([this], [e])
                  : this.curve._wnafMul(this, e)
              );
            }),
            (c.prototype.mulAdd = function (e, t, r) {
              var n = [this, t],
                i = [e, r];
              return this.curve.endo
                ? this.curve._endoWnafMulAdd(n, i)
                : this.curve._wnafMulAdd(1, n, i, 2);
            }),
            (c.prototype.jmulAdd = function (e, t, r) {
              var n = [this, t],
                i = [e, r];
              return this.curve.endo
                ? this.curve._endoWnafMulAdd(n, i, !0)
                : this.curve._wnafMulAdd(1, n, i, 2, !0);
            }),
            (c.prototype.eq = function (e) {
              return (
                this === e ||
                (this.inf === e.inf &&
                  (this.inf ||
                    (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
              );
            }),
            (c.prototype.neg = function (e) {
              if (this.inf) return this;
              var t = this.curve.point(this.x, this.y.redNeg());
              if (e && this.precomputed) {
                var r = this.precomputed,
                  n = function (e) {
                    return e.neg();
                  };
                t.precomputed = {
                  naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
                  doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(n),
                  },
                };
              }
              return t;
            }),
            (c.prototype.toJ = function () {
              return this.inf
                ? this.curve.jpoint(null, null, null)
                : this.curve.jpoint(this.x, this.y, this.curve.one);
            }),
            o(u, a.BasePoint),
            (f.prototype.jpoint = function (e, t, r) {
              return new u(this, e, t, r);
            }),
            (u.prototype.toP = function () {
              if (this.isInfinity()) return this.curve.point(null, null);
              var e = this.z.redInvm(),
                t = e.redSqr(),
                r = this.x.redMul(t),
                n = this.y.redMul(t).redMul(e);
              return this.curve.point(r, n);
            }),
            (u.prototype.neg = function () {
              return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
            }),
            (u.prototype.add = function (e) {
              if (this.isInfinity()) return e;
              if (e.isInfinity()) return this;
              var t = e.z.redSqr(),
                r = this.z.redSqr(),
                n = this.x.redMul(t),
                i = e.x.redMul(r),
                o = this.y.redMul(t.redMul(e.z)),
                a = e.y.redMul(r.redMul(this.z)),
                s = n.redSub(i),
                f = o.redSub(a);
              if (0 === s.cmpn(0))
                return 0 !== f.cmpn(0)
                  ? this.curve.jpoint(null, null, null)
                  : this.dbl();
              var c = s.redSqr(),
                u = c.redMul(s),
                d = n.redMul(c),
                h = f.redSqr().redIAdd(u).redISub(d).redISub(d),
                l = f.redMul(d.redISub(h)).redISub(o.redMul(u)),
                p = this.z.redMul(e.z).redMul(s);
              return this.curve.jpoint(h, l, p);
            }),
            (u.prototype.mixedAdd = function (e) {
              if (this.isInfinity()) return e.toJ();
              if (e.isInfinity()) return this;
              var t = this.z.redSqr(),
                r = this.x,
                n = e.x.redMul(t),
                i = this.y,
                o = e.y.redMul(t).redMul(this.z),
                a = r.redSub(n),
                s = i.redSub(o);
              if (0 === a.cmpn(0))
                return 0 !== s.cmpn(0)
                  ? this.curve.jpoint(null, null, null)
                  : this.dbl();
              var f = a.redSqr(),
                c = f.redMul(a),
                u = r.redMul(f),
                d = s.redSqr().redIAdd(c).redISub(u).redISub(u),
                h = s.redMul(u.redISub(d)).redISub(i.redMul(c)),
                l = this.z.redMul(a);
              return this.curve.jpoint(d, h, l);
            }),
            (u.prototype.dblp = function (e) {
              if (0 === e) return this;
              if (this.isInfinity()) return this;
              if (!e) return this.dbl();
              var t;
              if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (t = 0; t < e; t++) r = r.dbl();
                return r;
              }
              var n = this.curve.a,
                i = this.curve.tinv,
                o = this.x,
                a = this.y,
                s = this.z,
                f = s.redSqr().redSqr(),
                c = a.redAdd(a);
              for (t = 0; t < e; t++) {
                var u = o.redSqr(),
                  d = c.redSqr(),
                  h = d.redSqr(),
                  l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(f)),
                  p = o.redMul(d),
                  b = l.redSqr().redISub(p.redAdd(p)),
                  y = p.redISub(b),
                  g = l.redMul(y);
                g = g.redIAdd(g).redISub(h);
                var m = c.redMul(s);
                t + 1 < e && (f = f.redMul(h)), (o = b), (s = m), (c = g);
              }
              return this.curve.jpoint(o, c.redMul(i), s);
            }),
            (u.prototype.dbl = function () {
              return this.isInfinity()
                ? this
                : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
            }),
            (u.prototype._zeroDbl = function () {
              var e, t, r;
              if (this.zOne) {
                var n = this.x.redSqr(),
                  i = this.y.redSqr(),
                  o = i.redSqr(),
                  a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n),
                  f = s.redSqr().redISub(a).redISub(a),
                  c = o.redIAdd(o);
                (c = (c = c.redIAdd(c)).redIAdd(c)),
                  (e = f),
                  (t = s.redMul(a.redISub(f)).redISub(c)),
                  (r = this.y.redAdd(this.y));
              } else {
                var u = this.x.redSqr(),
                  d = this.y.redSqr(),
                  h = d.redSqr(),
                  l = this.x.redAdd(d).redSqr().redISub(u).redISub(h);
                l = l.redIAdd(l);
                var p = u.redAdd(u).redIAdd(u),
                  b = p.redSqr(),
                  y = h.redIAdd(h);
                (y = (y = y.redIAdd(y)).redIAdd(y)),
                  (e = b.redISub(l).redISub(l)),
                  (t = p.redMul(l.redISub(e)).redISub(y)),
                  (r = (r = this.y.redMul(this.z)).redIAdd(r));
              }
              return this.curve.jpoint(e, t, r);
            }),
            (u.prototype._threeDbl = function () {
              var e, t, r;
              if (this.zOne) {
                var n = this.x.redSqr(),
                  i = this.y.redSqr(),
                  o = i.redSqr(),
                  a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                a = a.redIAdd(a);
                var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                  f = s.redSqr().redISub(a).redISub(a);
                e = f;
                var c = o.redIAdd(o);
                (c = (c = c.redIAdd(c)).redIAdd(c)),
                  (t = s.redMul(a.redISub(f)).redISub(c)),
                  (r = this.y.redAdd(this.y));
              } else {
                var u = this.z.redSqr(),
                  d = this.y.redSqr(),
                  h = this.x.redMul(d),
                  l = this.x.redSub(u).redMul(this.x.redAdd(u));
                l = l.redAdd(l).redIAdd(l);
                var p = h.redIAdd(h),
                  b = (p = p.redIAdd(p)).redAdd(p);
                (e = l.redSqr().redISub(b)),
                  (r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u));
                var y = d.redSqr();
                (y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)),
                  (t = l.redMul(p.redISub(e)).redISub(y));
              }
              return this.curve.jpoint(e, t, r);
            }),
            (u.prototype._dbl = function () {
              var e = this.curve.a,
                t = this.x,
                r = this.y,
                n = this.z,
                i = n.redSqr().redSqr(),
                o = t.redSqr(),
                a = r.redSqr(),
                s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
                f = t.redAdd(t),
                c = (f = f.redIAdd(f)).redMul(a),
                u = s.redSqr().redISub(c.redAdd(c)),
                d = c.redISub(u),
                h = a.redSqr();
              h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
              var l = s.redMul(d).redISub(h),
                p = r.redAdd(r).redMul(n);
              return this.curve.jpoint(u, l, p);
            }),
            (u.prototype.trpl = function () {
              if (!this.curve.zeroA) return this.dbl().add(this);
              var e = this.x.redSqr(),
                t = this.y.redSqr(),
                r = this.z.redSqr(),
                n = t.redSqr(),
                i = e.redAdd(e).redIAdd(e),
                o = i.redSqr(),
                a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
                s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
                  o
                )).redSqr(),
                f = n.redIAdd(n);
              f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
              var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
                u = t.redMul(c);
              u = (u = u.redIAdd(u)).redIAdd(u);
              var d = this.x.redMul(s).redISub(u);
              d = (d = d.redIAdd(d)).redIAdd(d);
              var h = this.y.redMul(
                c.redMul(f.redISub(c)).redISub(a.redMul(s))
              );
              h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
              var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
              return this.curve.jpoint(d, h, l);
            }),
            (u.prototype.mul = function (e, t) {
              return (e = new i(e, t)), this.curve._wnafMul(this, e);
            }),
            (u.prototype.eq = function (e) {
              if ("affine" === e.type) return this.eq(e.toJ());
              if (this === e) return !0;
              var t = this.z.redSqr(),
                r = e.z.redSqr();
              if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
                return !1;
              var n = t.redMul(this.z),
                i = r.redMul(e.z);
              return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
            }),
            (u.prototype.eqXToP = function (e) {
              var t = this.z.redSqr(),
                r = e.toRed(this.curve.red).redMul(t);
              if (0 === this.x.cmp(r)) return !0;
              for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
                if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
                if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
              }
            }),
            (u.prototype.inspect = function () {
              return this.isInfinity()
                ? "<EC JPoint Infinity>"
                : "<EC JPoint x: " +
                    this.x.toString(16, 2) +
                    " y: " +
                    this.y.toString(16, 2) +
                    " z: " +
                    this.z.toString(16, 2) +
                    ">";
            }),
            (u.prototype.isInfinity = function () {
              return 0 === this.z.cmpn(0);
            });
        },
        8838: (e, t, r) => {
          "use strict";
          var n,
            i = t,
            o = r(9e3),
            a = r(3778),
            s = r(2808).assert;
          function f(e) {
            "short" === e.type
              ? (this.curve = new a.short(e))
              : "edwards" === e.type
              ? (this.curve = new a.edwards(e))
              : (this.curve = new a.mont(e)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = e.hash),
              s(this.g.validate(), "Invalid curve"),
              s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function c(e, t) {
            Object.defineProperty(i, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new f(t);
                return (
                  Object.defineProperty(i, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                  }),
                  r
                );
              },
            });
          }
          (i.PresetCurve = f),
            c("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: o.sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            c("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: o.sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            c("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: o.sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            c("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: o.sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            c("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: o.sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            c("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: o.sha256,
              gRed: !1,
              g: ["9"],
            }),
            c("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: o.sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            n = r(8729);
          } catch (e) {
            n = void 0;
          }
          c("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: o.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              n,
            ],
          });
        },
        2594: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(812),
            o = r(2808),
            a = r(8838),
            s = r(5552),
            f = o.assert,
            c = r(7415),
            u = r(1135);
          function d(e) {
            if (!(this instanceof d)) return new d(e);
            "string" == typeof e &&
              (f(
                Object.prototype.hasOwnProperty.call(a, e),
                "Unknown curve " + e
              ),
              (e = a[e])),
              e instanceof a.PresetCurve && (e = { curve: e }),
              (this.curve = e.curve.curve),
              (this.n = this.curve.n),
              (this.nh = this.n.ushrn(1)),
              (this.g = this.curve.g),
              (this.g = e.curve.g),
              this.g.precompute(e.curve.n.bitLength() + 1),
              (this.hash = e.hash || e.curve.hash);
          }
          (e.exports = d),
            (d.prototype.keyPair = function (e) {
              return new c(this, e);
            }),
            (d.prototype.keyFromPrivate = function (e, t) {
              return c.fromPrivate(this, e, t);
            }),
            (d.prototype.keyFromPublic = function (e, t) {
              return c.fromPublic(this, e, t);
            }),
            (d.prototype.genKeyPair = function (e) {
              e || (e = {});
              for (
                var t = new i({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || "utf8",
                    entropy: e.entropy || s(this.hash.hmacStrength),
                    entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                    nonce: this.n.toArray(),
                  }),
                  r = this.n.byteLength(),
                  o = this.n.sub(new n(2));
                ;

              ) {
                var a = new n(t.generate(r));
                if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
              }
            }),
            (d.prototype._truncateToN = function (e, t) {
              var r = 8 * e.byteLength() - this.n.bitLength();
              return (
                r > 0 && (e = e.ushrn(r)),
                !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
              );
            }),
            (d.prototype.sign = function (e, t, r, o) {
              "object" == typeof r && ((o = r), (r = null)),
                o || (o = {}),
                (t = this.keyFromPrivate(t, r)),
                (e = this._truncateToN(new n(e, 16)));
              for (
                var a = this.n.byteLength(),
                  s = t.getPrivate().toArray("be", a),
                  f = e.toArray("be", a),
                  c = new i({
                    hash: this.hash,
                    entropy: s,
                    nonce: f,
                    pers: o.pers,
                    persEnc: o.persEnc || "utf8",
                  }),
                  d = this.n.sub(new n(1)),
                  h = 0;
                ;
                h++
              ) {
                var l = o.k ? o.k(h) : new n(c.generate(this.n.byteLength()));
                if (
                  !(
                    (l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(d) >= 0
                  )
                ) {
                  var p = this.g.mul(l);
                  if (!p.isInfinity()) {
                    var b = p.getX(),
                      y = b.umod(this.n);
                    if (0 !== y.cmpn(0)) {
                      var g = l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                      if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                        var m =
                          (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                        return (
                          o.canonical &&
                            g.cmp(this.nh) > 0 &&
                            ((g = this.n.sub(g)), (m ^= 1)),
                          new u({ r: y, s: g, recoveryParam: m })
                        );
                      }
                    }
                  }
                }
              }
            }),
            (d.prototype.verify = function (e, t, r, i) {
              (e = this._truncateToN(new n(e, 16))),
                (r = this.keyFromPublic(r, i));
              var o = (t = new u(t, "hex")).r,
                a = t.s;
              if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
              if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
              var s,
                f = a.invm(this.n),
                c = f.mul(e).umod(this.n),
                d = f.mul(o).umod(this.n);
              return this.curve._maxwellTrick
                ? !(s = this.g.jmulAdd(c, r.getPublic(), d)).isInfinity() &&
                    s.eqXToP(o)
                : !(s = this.g.mulAdd(c, r.getPublic(), d)).isInfinity() &&
                    0 === s.getX().umod(this.n).cmp(o);
            }),
            (d.prototype.recoverPubKey = function (e, t, r, i) {
              f((3 & r) === r, "The recovery param is more than two bits"),
                (t = new u(t, i));
              var o = this.n,
                a = new n(e),
                s = t.r,
                c = t.s,
                d = 1 & r,
                h = r >> 1;
              if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
                throw new Error("Unable to find sencond key candinate");
              s = h
                ? this.curve.pointFromX(s.add(this.curve.n), d)
                : this.curve.pointFromX(s, d);
              var l = t.r.invm(o),
                p = o.sub(a).mul(l).umod(o),
                b = c.mul(l).umod(o);
              return this.g.mulAdd(p, s, b);
            }),
            (d.prototype.getKeyRecoveryParam = function (e, t, r, n) {
              if (null !== (t = new u(t, n)).recoveryParam)
                return t.recoveryParam;
              for (var i = 0; i < 4; i++) {
                var o;
                try {
                  o = this.recoverPubKey(e, t, i);
                } catch (e) {
                  continue;
                }
                if (o.eq(r)) return i;
              }
              throw new Error("Unable to find valid recovery factor");
            });
        },
        7415: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(2808).assert;
          function o(e, t) {
            (this.ec = e),
              (this.priv = null),
              (this.pub = null),
              t.priv && this._importPrivate(t.priv, t.privEnc),
              t.pub && this._importPublic(t.pub, t.pubEnc);
          }
          (e.exports = o),
            (o.fromPublic = function (e, t, r) {
              return t instanceof o ? t : new o(e, { pub: t, pubEnc: r });
            }),
            (o.fromPrivate = function (e, t, r) {
              return t instanceof o ? t : new o(e, { priv: t, privEnc: r });
            }),
            (o.prototype.validate = function () {
              var e = this.getPublic();
              return e.isInfinity()
                ? { result: !1, reason: "Invalid public key" }
                : e.validate()
                ? e.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
            }),
            (o.prototype.getPublic = function (e, t) {
              return (
                "string" == typeof e && ((t = e), (e = null)),
                this.pub || (this.pub = this.ec.g.mul(this.priv)),
                t ? this.pub.encode(t, e) : this.pub
              );
            }),
            (o.prototype.getPrivate = function (e) {
              return "hex" === e ? this.priv.toString(16, 2) : this.priv;
            }),
            (o.prototype._importPrivate = function (e, t) {
              (this.priv = new n(e, t || 16)),
                (this.priv = this.priv.umod(this.ec.curve.n));
            }),
            (o.prototype._importPublic = function (e, t) {
              if (e.x || e.y)
                return (
                  "mont" === this.ec.curve.type
                    ? i(e.x, "Need x coordinate")
                    : ("short" !== this.ec.curve.type &&
                        "edwards" !== this.ec.curve.type) ||
                      i(e.x && e.y, "Need both x and y coordinate"),
                  void (this.pub = this.ec.curve.point(e.x, e.y))
                );
              this.pub = this.ec.curve.decodePoint(e, t);
            }),
            (o.prototype.derive = function (e) {
              return (
                e.validate() || i(e.validate(), "public point not validated"),
                e.mul(this.priv).getX()
              );
            }),
            (o.prototype.sign = function (e, t, r) {
              return this.ec.sign(e, this, t, r);
            }),
            (o.prototype.verify = function (e, t) {
              return this.ec.verify(e, t, this);
            }),
            (o.prototype.inspect = function () {
              return (
                "<Key priv: " +
                (this.priv && this.priv.toString(16, 2)) +
                " pub: " +
                (this.pub && this.pub.inspect()) +
                " >"
              );
            });
        },
        1135: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(2808),
            o = i.assert;
          function a(e, t) {
            if (e instanceof a) return e;
            this._importDER(e, t) ||
              (o(e.r && e.s, "Signature without r or s"),
              (this.r = new n(e.r, 16)),
              (this.s = new n(e.s, 16)),
              void 0 === e.recoveryParam
                ? (this.recoveryParam = null)
                : (this.recoveryParam = e.recoveryParam));
          }
          function s() {
            this.place = 0;
          }
          function f(e, t) {
            var r = e[t.place++];
            if (!(128 & r)) return r;
            var n = 15 & r;
            if (0 === n || n > 4) return !1;
            for (var i = 0, o = 0, a = t.place; o < n; o++, a++)
              (i <<= 8), (i |= e[a]), (i >>>= 0);
            return !(i <= 127) && ((t.place = a), i);
          }
          function c(e) {
            for (
              var t = 0, r = e.length - 1;
              !e[t] && !(128 & e[t + 1]) && t < r;

            )
              t++;
            return 0 === t ? e : e.slice(t);
          }
          function u(e, t) {
            if (t < 128) e.push(t);
            else {
              var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
              for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
              e.push(t);
            }
          }
          (e.exports = a),
            (a.prototype._importDER = function (e, t) {
              e = i.toArray(e, t);
              var r = new s();
              if (48 !== e[r.place++]) return !1;
              var o = f(e, r);
              if (!1 === o) return !1;
              if (o + r.place !== e.length) return !1;
              if (2 !== e[r.place++]) return !1;
              var a = f(e, r);
              if (!1 === a) return !1;
              var c = e.slice(r.place, a + r.place);
              if (((r.place += a), 2 !== e[r.place++])) return !1;
              var u = f(e, r);
              if (!1 === u) return !1;
              if (e.length !== u + r.place) return !1;
              var d = e.slice(r.place, u + r.place);
              if (0 === c[0]) {
                if (!(128 & c[1])) return !1;
                c = c.slice(1);
              }
              if (0 === d[0]) {
                if (!(128 & d[1])) return !1;
                d = d.slice(1);
              }
              return (
                (this.r = new n(c)),
                (this.s = new n(d)),
                (this.recoveryParam = null),
                !0
              );
            }),
            (a.prototype.toDER = function (e) {
              var t = this.r.toArray(),
                r = this.s.toArray();
              for (
                128 & t[0] && (t = [0].concat(t)),
                  128 & r[0] && (r = [0].concat(r)),
                  t = c(t),
                  r = c(r);
                !(r[0] || 128 & r[1]);

              )
                r = r.slice(1);
              var n = [2];
              u(n, t.length), (n = n.concat(t)).push(2), u(n, r.length);
              var o = n.concat(r),
                a = [48];
              return u(a, o.length), (a = a.concat(o)), i.encode(a, e);
            });
        },
        7245: (e, t, r) => {
          "use strict";
          var n = r(9e3),
            i = r(8838),
            o = r(2808),
            a = o.assert,
            s = o.parseBytes,
            f = r(4841),
            c = r(564);
          function u(e) {
            if (
              (a("ed25519" === e, "only tested with ed25519 so far"),
              !(this instanceof u))
            )
              return new u(e);
            (e = i[e].curve),
              (this.curve = e),
              (this.g = e.g),
              this.g.precompute(e.n.bitLength() + 1),
              (this.pointClass = e.point().constructor),
              (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
              (this.hash = n.sha512);
          }
          (e.exports = u),
            (u.prototype.sign = function (e, t) {
              e = s(e);
              var r = this.keyFromSecret(t),
                n = this.hashInt(r.messagePrefix(), e),
                i = this.g.mul(n),
                o = this.encodePoint(i),
                a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
                f = n.add(a).umod(this.curve.n);
              return this.makeSignature({ R: i, S: f, Rencoded: o });
            }),
            (u.prototype.verify = function (e, t, r) {
              (e = s(e)), (t = this.makeSignature(t));
              var n = this.keyFromPublic(r),
                i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
                o = this.g.mul(t.S());
              return t.R().add(n.pub().mul(i)).eq(o);
            }),
            (u.prototype.hashInt = function () {
              for (var e = this.hash(), t = 0; t < arguments.length; t++)
                e.update(arguments[t]);
              return o.intFromLE(e.digest()).umod(this.curve.n);
            }),
            (u.prototype.keyFromPublic = function (e) {
              return f.fromPublic(this, e);
            }),
            (u.prototype.keyFromSecret = function (e) {
              return f.fromSecret(this, e);
            }),
            (u.prototype.makeSignature = function (e) {
              return e instanceof c ? e : new c(this, e);
            }),
            (u.prototype.encodePoint = function (e) {
              var t = e.getY().toArray("le", this.encodingLength);
              return (
                (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t
              );
            }),
            (u.prototype.decodePoint = function (e) {
              var t = (e = o.parseBytes(e)).length - 1,
                r = e.slice(0, t).concat(-129 & e[t]),
                n = 0 != (128 & e[t]),
                i = o.intFromLE(r);
              return this.curve.pointFromY(i, n);
            }),
            (u.prototype.encodeInt = function (e) {
              return e.toArray("le", this.encodingLength);
            }),
            (u.prototype.decodeInt = function (e) {
              return o.intFromLE(e);
            }),
            (u.prototype.isPoint = function (e) {
              return e instanceof this.pointClass;
            });
        },
        4841: (e, t, r) => {
          "use strict";
          var n = r(2808),
            i = n.assert,
            o = n.parseBytes,
            a = n.cachedProperty;
          function s(e, t) {
            (this.eddsa = e),
              (this._secret = o(t.secret)),
              e.isPoint(t.pub)
                ? (this._pub = t.pub)
                : (this._pubBytes = o(t.pub));
          }
          (s.fromPublic = function (e, t) {
            return t instanceof s ? t : new s(e, { pub: t });
          }),
            (s.fromSecret = function (e, t) {
              return t instanceof s ? t : new s(e, { secret: t });
            }),
            (s.prototype.secret = function () {
              return this._secret;
            }),
            a(s, "pubBytes", function () {
              return this.eddsa.encodePoint(this.pub());
            }),
            a(s, "pub", function () {
              return this._pubBytes
                ? this.eddsa.decodePoint(this._pubBytes)
                : this.eddsa.g.mul(this.priv());
            }),
            a(s, "privBytes", function () {
              var e = this.eddsa,
                t = this.hash(),
                r = e.encodingLength - 1,
                n = t.slice(0, e.encodingLength);
              return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
            }),
            a(s, "priv", function () {
              return this.eddsa.decodeInt(this.privBytes());
            }),
            a(s, "hash", function () {
              return this.eddsa.hash().update(this.secret()).digest();
            }),
            a(s, "messagePrefix", function () {
              return this.hash().slice(this.eddsa.encodingLength);
            }),
            (s.prototype.sign = function (e) {
              return (
                i(this._secret, "KeyPair can only verify"),
                this.eddsa.sign(e, this)
              );
            }),
            (s.prototype.verify = function (e, t) {
              return this.eddsa.verify(e, t, this);
            }),
            (s.prototype.getSecret = function (e) {
              return (
                i(this._secret, "KeyPair is public only"),
                n.encode(this.secret(), e)
              );
            }),
            (s.prototype.getPublic = function (e) {
              return n.encode(this.pubBytes(), e);
            }),
            (e.exports = s);
        },
        564: (e, t, r) => {
          "use strict";
          var n = r(2693),
            i = r(2808),
            o = i.assert,
            a = i.cachedProperty,
            s = i.parseBytes;
          function f(e, t) {
            (this.eddsa = e),
              "object" != typeof t && (t = s(t)),
              Array.isArray(t) &&
                (t = {
                  R: t.slice(0, e.encodingLength),
                  S: t.slice(e.encodingLength),
                }),
              o(t.R && t.S, "Signature without R or S"),
              e.isPoint(t.R) && (this._R = t.R),
              t.S instanceof n && (this._S = t.S),
              (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
              (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
          }
          a(f, "S", function () {
            return this.eddsa.decodeInt(this.Sencoded());
          }),
            a(f, "R", function () {
              return this.eddsa.decodePoint(this.Rencoded());
            }),
            a(f, "Rencoded", function () {
              return this.eddsa.encodePoint(this.R());
            }),
            a(f, "Sencoded", function () {
              return this.eddsa.encodeInt(this.S());
            }),
            (f.prototype.toBytes = function () {
              return this.Rencoded().concat(this.Sencoded());
            }),
            (f.prototype.toHex = function () {
              return i.encode(this.toBytes(), "hex").toUpperCase();
            }),
            (e.exports = f);
        },
        8729: (e) => {
          e.exports = {
            doubles: {
              step: 4,
              points: [
                [
                  "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                  "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
                ],
                [
                  "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                  "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
                ],
                [
                  "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                  "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
                ],
                [
                  "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                  "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
                ],
                [
                  "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                  "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
                ],
                [
                  "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                  "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
                ],
                [
                  "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                  "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
                ],
                [
                  "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                  "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
                ],
                [
                  "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                  "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
                ],
                [
                  "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                  "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
                ],
                [
                  "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                  "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
                ],
                [
                  "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                  "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
                ],
                [
                  "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                  "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
                ],
                [
                  "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                  "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
                ],
                [
                  "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                  "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
                ],
                [
                  "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                  "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
                ],
                [
                  "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                  "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
                ],
                [
                  "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                  "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
                ],
                [
                  "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                  "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
                ],
                [
                  "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                  "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
                ],
                [
                  "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                  "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
                ],
                [
                  "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                  "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
                ],
                [
                  "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                  "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
                ],
                [
                  "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                  "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
                ],
                [
                  "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                  "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
                ],
                [
                  "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                  "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
                ],
                [
                  "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                  "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
                ],
                [
                  "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                  "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
                ],
                [
                  "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                  "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
                ],
                [
                  "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                  "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
                ],
                [
                  "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                  "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
                ],
                [
                  "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                  "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
                ],
                [
                  "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                  "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
                ],
                [
                  "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                  "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
                ],
                [
                  "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                  "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
                ],
                [
                  "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                  "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
                ],
                [
                  "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                  "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
                ],
                [
                  "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                  "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
                ],
                [
                  "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                  "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
                ],
                [
                  "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                  "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
                ],
                [
                  "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                  "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
                ],
                [
                  "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                  "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
                ],
                [
                  "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                  "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
                ],
                [
                  "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                  "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
                ],
                [
                  "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                  "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
                ],
                [
                  "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                  "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
                ],
                [
                  "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                  "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
                ],
                [
                  "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                  "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
                ],
                [
                  "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                  "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
                ],
                [
                  "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                  "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
                ],
                [
                  "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                  "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
                ],
                [
                  "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                  "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
                ],
                [
                  "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                  "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
                ],
                [
                  "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                  "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
                ],
                [
                  "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                  "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
                ],
                [
                  "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                  "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
                ],
                [
                  "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                  "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
                ],
                [
                  "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                  "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
                ],
                [
                  "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                  "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
                ],
                [
                  "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                  "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
                ],
                [
                  "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                  "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
                ],
                [
                  "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                  "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
                ],
                [
                  "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                  "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
                ],
                [
                  "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                  "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
                ],
                [
                  "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                  "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
                ],
              ],
            },
            naf: {
              wnd: 7,
              points: [
                [
                  "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                  "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
                ],
                [
                  "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                  "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
                ],
                [
                  "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                  "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
                ],
                [
                  "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                  "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
                ],
                [
                  "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                  "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
                ],
                [
                  "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                  "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
                ],
                [
                  "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                  "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
                ],
                [
                  "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                  "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
                ],
                [
                  "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                  "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
                ],
                [
                  "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                  "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
                ],
                [
                  "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                  "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
                ],
                [
                  "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                  "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
                ],
                [
                  "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                  "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
                ],
                [
                  "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                  "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
                ],
                [
                  "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                  "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
                ],
                [
                  "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                  "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
                ],
                [
                  "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                  "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
                ],
                [
                  "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                  "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
                ],
                [
                  "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                  "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
                ],
                [
                  "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                  "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
                ],
                [
                  "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                  "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
                ],
                [
                  "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                  "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
                ],
                [
                  "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                  "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
                ],
                [
                  "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                  "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
                ],
                [
                  "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                  "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
                ],
                [
                  "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                  "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
                ],
                [
                  "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                  "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
                ],
                [
                  "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                  "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
                ],
                [
                  "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                  "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
                ],
                [
                  "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                  "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
                ],
                [
                  "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                  "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
                ],
                [
                  "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                  "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
                ],
                [
                  "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                  "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
                ],
                [
                  "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                  "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
                ],
                [
                  "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                  "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
                ],
                [
                  "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                  "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
                ],
                [
                  "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                  "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
                ],
                [
                  "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                  "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
                ],
                [
                  "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                  "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
                ],
                [
                  "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                  "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
                ],
                [
                  "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                  "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
                ],
                [
                  "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                  "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
                ],
                [
                  "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                  "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
                ],
                [
                  "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                  "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
                ],
                [
                  "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                  "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
                ],
                [
                  "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                  "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
                ],
                [
                  "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                  "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
                ],
                [
                  "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                  "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
                ],
                [
                  "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                  "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
                ],
                [
                  "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                  "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
                ],
                [
                  "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                  "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
                ],
                [
                  "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                  "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
                ],
                [
                  "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                  "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
                ],
                [
                  "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                  "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
                ],
                [
                  "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                  "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
                ],
                [
                  "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                  "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
                ],
                [
                  "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                  "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
                ],
                [
                  "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                  "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
                ],
                [
                  "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                  "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
                ],
                [
                  "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                  "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
                ],
                [
                  "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                  "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
                ],
                [
                  "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                  "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
                ],
                [
                  "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                  "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
                ],
                [
                  "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                  "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
                ],
                [
                  "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                  "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
                ],
                [
                  "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                  "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
                ],
                [
                  "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                  "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
                ],
                [
                  "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                  "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
                ],
                [
                  "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                  "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
                ],
                [
                  "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                  "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
                ],
                [
                  "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                  "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
                ],
                [
                  "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                  "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
                ],
                [
                  "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                  "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
                ],
                [
                  "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                  "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
                ],
                [
                  "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                  "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
                ],
                [
                  "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                  "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
                ],
                [
                  "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                  "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
                ],
                [
                  "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                  "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
                ],
                [
                  "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                  "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
                ],
                [
                  "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                  "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
                ],
                [
                  "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                  "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
                ],
                [
                  "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                  "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
                ],
                [
                  "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                  "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
                ],
                [
                  "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                  "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
                ],
                [
                  "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                  "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
                ],
                [
                  "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                  "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
                ],
                [
                  "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                  "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
                ],
                [
                  "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                  "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
                ],
                [
                  "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                  "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
                ],
                [
                  "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                  "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
                ],
                [
                  "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                  "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
                ],
                [
                  "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                  "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
                ],
                [
                  "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                  "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
                ],
                [
                  "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                  "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
                ],
                [
                  "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                  "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
                ],
                [
                  "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                  "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
                ],
                [
                  "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                  "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
                ],
                [
                  "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                  "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
                ],
                [
                  "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                  "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
                ],
                [
                  "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                  "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
                ],
                [
                  "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                  "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
                ],
                [
                  "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                  "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
                ],
                [
                  "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                  "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
                ],
                [
                  "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                  "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
                ],
                [
                  "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                  "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
                ],
                [
                  "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                  "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
                ],
                [
                  "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                  "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
                ],
                [
                  "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                  "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
                ],
                [
                  "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                  "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
                ],
                [
                  "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                  "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
                ],
                [
                  "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                  "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
                ],
                [
                  "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                  "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
                ],
                [
                  "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                  "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
                ],
                [
                  "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                  "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
                ],
                [
                  "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                  "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
                ],
                [
                  "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                  "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
                ],
                [
                  "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                  "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
                ],
                [
                  "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                  "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
                ],
                [
                  "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                  "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
                ],
                [
                  "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                  "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
                ],
                [
                  "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                  "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
                ],
                [
                  "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                  "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
                ],
                [
                  "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                  "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
                ],
                [
                  "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                  "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
                ],
                [
                  "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                  "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
                ],
                [
                  "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                  "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
                ],
                [
                  "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                  "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
                ],
              ],
            },
          };
        },
        2808: (e, t, r) => {
          "use strict";
          var n = t,
            i = r(2693),
            o = r(882),
            a = r(179);
          (n.assert = o),
            (n.toArray = a.toArray),
            (n.zero2 = a.zero2),
            (n.toHex = a.toHex),
            (n.encode = a.encode),
            (n.getNAF = function (e, t, r) {
              var n = new Array(Math.max(e.bitLength(), r) + 1);
              n.fill(0);
              for (
                var i = 1 << (t + 1), o = e.clone(), a = 0;
                a < n.length;
                a++
              ) {
                var s,
                  f = o.andln(i - 1);
                o.isOdd()
                  ? ((s = f > (i >> 1) - 1 ? (i >> 1) - f : f), o.isubn(s))
                  : (s = 0),
                  (n[a] = s),
                  o.iushrn(1);
              }
              return n;
            }),
            (n.getJSF = function (e, t) {
              var r = [[], []];
              (e = e.clone()), (t = t.clone());
              for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0; ) {
                var a,
                  s,
                  f = (e.andln(3) + i) & 3,
                  c = (t.andln(3) + o) & 3;
                3 === f && (f = -1),
                  3 === c && (c = -1),
                  (a =
                    0 == (1 & f)
                      ? 0
                      : (3 != (n = (e.andln(7) + i) & 7) && 5 !== n) || 2 !== c
                      ? f
                      : -f),
                  r[0].push(a),
                  (s =
                    0 == (1 & c)
                      ? 0
                      : (3 != (n = (t.andln(7) + o) & 7) && 5 !== n) || 2 !== f
                      ? c
                      : -c),
                  r[1].push(s),
                  2 * i === a + 1 && (i = 1 - i),
                  2 * o === s + 1 && (o = 1 - o),
                  e.iushrn(1),
                  t.iushrn(1);
              }
              return r;
            }),
            (n.cachedProperty = function (e, t, r) {
              var n = "_" + t;
              e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }),
            (n.parseBytes = function (e) {
              return "string" == typeof e ? n.toArray(e, "hex") : e;
            }),
            (n.intFromLE = function (e) {
              return new i(e, "hex", "le");
            });
        },
        9633: (e, t, r) => {
          var n = r(3158),
            i = r(1744),
            o = function () {},
            a = function (e, t, r) {
              if ("function" == typeof t) return a(e, null, t);
              t || (t = {}), (r = i(r || o));
              var s = e._writableState,
                f = e._readableState,
                c = t.readable || (!1 !== t.readable && e.readable),
                u = t.writable || (!1 !== t.writable && e.writable),
                d = !1,
                h = function () {
                  e.writable || l();
                },
                l = function () {
                  (u = !1), c || r.call(e);
                },
                p = function () {
                  (c = !1), u || r.call(e);
                },
                b = function (t) {
                  r.call(
                    e,
                    t ? new Error("exited with error code: " + t) : null
                  );
                },
                y = function (t) {
                  r.call(e, t);
                },
                g = function () {
                  n.nextTick(m);
                },
                m = function () {
                  if (!d)
                    return (!c || (f && f.ended && !f.destroyed)) &&
                      (!u || (s && s.ended && !s.destroyed))
                      ? void 0
                      : r.call(e, new Error("premature close"));
                },
                v = function () {
                  e.req.on("finish", l);
                };
              return (
                (function (e) {
                  return e.setHeader && "function" == typeof e.abort;
                })(e)
                  ? (e.on("complete", l),
                    e.on("abort", g),
                    e.req ? v() : e.on("request", v))
                  : u && !s && (e.on("end", h), e.on("close", h)),
                (function (e) {
                  return (
                    e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
                  );
                })(e) && e.on("exit", b),
                e.on("end", p),
                e.on("finish", l),
                !1 !== t.error && e.on("error", y),
                e.on("close", g),
                function () {
                  (d = !0),
                    e.removeListener("complete", l),
                    e.removeListener("abort", g),
                    e.removeListener("request", v),
                    e.req && e.req.removeListener("finish", l),
                    e.removeListener("end", h),
                    e.removeListener("close", h),
                    e.removeListener("finish", l),
                    e.removeListener("exit", b),
                    e.removeListener("end", p),
                    e.removeListener("error", y),
                    e.removeListener("close", g);
                }
              );
            };
          e.exports = a;
        },
        2247: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.EthereumProviderError = t.EthereumRpcError = void 0);
          const n = r(3641);
          class i extends Error {
            constructor(e, t, r) {
              if (!Number.isInteger(e))
                throw new Error('"code" must be an integer.');
              if (!t || "string" != typeof t)
                throw new Error('"message" must be a nonempty string.');
              super(t), (this.code = e), void 0 !== r && (this.data = r);
            }
            serialize() {
              const e = { code: this.code, message: this.message };
              return (
                void 0 !== this.data && (e.data = this.data),
                this.stack && (e.stack = this.stack),
                e
              );
            }
            toString() {
              return n.default(this.serialize(), o, 2);
            }
          }
          function o(e, t) {
            if ("[Circular]" !== t) return t;
          }
          (t.EthereumRpcError = i),
            (t.EthereumProviderError = class extends i {
              constructor(e, t, r) {
                if (
                  !(function (e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999;
                  })(e)
                )
                  throw new Error(
                    '"code" must be an integer such that: 1000 <= code <= 4999'
                  );
                super(e, t, r);
              }
            });
        },
        217: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.errorValues = t.errorCodes = void 0),
            (t.errorCodes = {
              rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603,
              },
              provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901,
              },
            }),
            (t.errorValues = {
              "-32700": {
                standard: "JSON RPC 2.0",
                message:
                  "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
              },
              "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object.",
              },
              "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available.",
              },
              "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s).",
              },
              "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error.",
              },
              "-32000": { standard: "EIP-1474", message: "Invalid input." },
              "-32001": {
                standard: "EIP-1474",
                message: "Resource not found.",
              },
              "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable.",
              },
              "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected.",
              },
              "-32004": {
                standard: "EIP-1474",
                message: "Method not supported.",
              },
              "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded.",
              },
              4001: {
                standard: "EIP-1193",
                message: "User rejected the request.",
              },
              4100: {
                standard: "EIP-1193",
                message:
                  "The requested account and/or method has not been authorized by the user.",
              },
              4200: {
                standard: "EIP-1193",
                message:
                  "The requested method is not supported by this Ethereum provider.",
              },
              4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains.",
              },
              4901: {
                standard: "EIP-1193",
                message:
                  "The provider is disconnected from the specified chain.",
              },
            });
        },
        2897: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.ethErrors = void 0);
          const n = r(2247),
            i = r(9009),
            o = r(217);
          function a(e, t) {
            const [r, o] = f(t);
            return new n.EthereumRpcError(e, r || i.getMessageFromCode(e), o);
          }
          function s(e, t) {
            const [r, o] = f(t);
            return new n.EthereumProviderError(
              e,
              r || i.getMessageFromCode(e),
              o
            );
          }
          function f(e) {
            if (e) {
              if ("string" == typeof e) return [e];
              if ("object" == typeof e && !Array.isArray(e)) {
                const { message: t, data: r } = e;
                if (t && "string" != typeof t)
                  throw new Error("Must specify string message.");
                return [t || void 0, r];
              }
            }
            return [];
          }
          t.ethErrors = {
            rpc: {
              parse: (e) => a(o.errorCodes.rpc.parse, e),
              invalidRequest: (e) => a(o.errorCodes.rpc.invalidRequest, e),
              invalidParams: (e) => a(o.errorCodes.rpc.invalidParams, e),
              methodNotFound: (e) => a(o.errorCodes.rpc.methodNotFound, e),
              internal: (e) => a(o.errorCodes.rpc.internal, e),
              server: (e) => {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw new Error(
                    "Ethereum RPC Server errors must provide single object argument."
                  );
                const { code: t } = e;
                if (!Number.isInteger(t) || t > -32005 || t < -32099)
                  throw new Error(
                    '"code" must be an integer such that: -32099 <= code <= -32005'
                  );
                return a(t, e);
              },
              invalidInput: (e) => a(o.errorCodes.rpc.invalidInput, e),
              resourceNotFound: (e) => a(o.errorCodes.rpc.resourceNotFound, e),
              resourceUnavailable: (e) =>
                a(o.errorCodes.rpc.resourceUnavailable, e),
              transactionRejected: (e) =>
                a(o.errorCodes.rpc.transactionRejected, e),
              methodNotSupported: (e) =>
                a(o.errorCodes.rpc.methodNotSupported, e),
              limitExceeded: (e) => a(o.errorCodes.rpc.limitExceeded, e),
            },
            provider: {
              userRejectedRequest: (e) =>
                s(o.errorCodes.provider.userRejectedRequest, e),
              unauthorized: (e) => s(o.errorCodes.provider.unauthorized, e),
              unsupportedMethod: (e) =>
                s(o.errorCodes.provider.unsupportedMethod, e),
              disconnected: (e) => s(o.errorCodes.provider.disconnected, e),
              chainDisconnected: (e) =>
                s(o.errorCodes.provider.chainDisconnected, e),
              custom: (e) => {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw new Error(
                    "Ethereum Provider custom errors must provide single object argument."
                  );
                const { code: t, message: r, data: i } = e;
                if (!r || "string" != typeof r)
                  throw new Error('"message" must be a nonempty string');
                return new n.EthereumProviderError(t, r, i);
              },
            },
          };
        },
        5641: (e, t, r) => {
          "use strict";
          t.Xy = t.Cg = t.Sy = void 0;
          const n = r(2247);
          Object.defineProperty(t, "Cg", {
            enumerable: !0,
            get: function () {
              return n.EthereumRpcError;
            },
          });
          const i = r(9009);
          Object.defineProperty(t, "Xy", {
            enumerable: !0,
            get: function () {
              return i.serializeError;
            },
          });
          const o = r(2897);
          Object.defineProperty(t, "Sy", {
            enumerable: !0,
            get: function () {
              return o.ethErrors;
            },
          });
          r(217);
        },
        9009: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.serializeError =
              t.isValidCode =
              t.getMessageFromCode =
              t.JSON_RPC_SERVER_ERROR_MESSAGE =
                void 0);
          const n = r(217),
            i = r(2247),
            o = n.errorCodes.rpc.internal,
            a = "Unspecified error message. This is a bug, please report it.",
            s = { code: o, message: f(o) };
          function f(e, r = a) {
            if (Number.isInteger(e)) {
              const r = e.toString();
              if (h(n.errorValues, r)) return n.errorValues[r].message;
              if (u(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
            }
            return r;
          }
          function c(e) {
            if (!Number.isInteger(e)) return !1;
            const t = e.toString();
            return !!n.errorValues[t] || !!u(e);
          }
          function u(e) {
            return e >= -32099 && e <= -32e3;
          }
          function d(e) {
            return e && "object" == typeof e && !Array.isArray(e)
              ? Object.assign({}, e)
              : e;
          }
          function h(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          (t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
            (t.getMessageFromCode = f),
            (t.isValidCode = c),
            (t.serializeError = function (
              e,
              { fallbackError: t = s, shouldIncludeStack: r = !1 } = {}
            ) {
              var n, o;
              if (
                !t ||
                !Number.isInteger(t.code) ||
                "string" != typeof t.message
              )
                throw new Error(
                  "Must provide fallback error with integer number code and string message."
                );
              if (e instanceof i.EthereumRpcError) return e.serialize();
              const a = {};
              if (
                e &&
                "object" == typeof e &&
                !Array.isArray(e) &&
                h(e, "code") &&
                c(e.code)
              ) {
                const t = e;
                (a.code = t.code),
                  t.message && "string" == typeof t.message
                    ? ((a.message = t.message),
                      h(t, "data") && (a.data = t.data))
                    : ((a.message = f(a.code)),
                      (a.data = { originalError: d(e) }));
              } else {
                a.code = t.code;
                const r = null === (n = e) || void 0 === n ? void 0 : n.message;
                (a.message = r && "string" == typeof r ? r : t.message),
                  (a.data = { originalError: d(e) });
              }
              const u = null === (o = e) || void 0 === o ? void 0 : o.stack;
              return r && e && u && "string" == typeof u && (a.stack = u), a;
            });
        },
        7531: (e) => {
          "use strict";
          var t,
            r = "object" == typeof Reflect ? Reflect : null,
            n =
              r && "function" == typeof r.apply
                ? r.apply
                : function (e, t, r) {
                    return Function.prototype.apply.call(e, t, r);
                  };
          t =
            r && "function" == typeof r.ownKeys
              ? r.ownKeys
              : Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e)
                  );
                }
              : function (e) {
                  return Object.getOwnPropertyNames(e);
                };
          var i =
            Number.isNaN ||
            function (e) {
              return e != e;
            };
          function o() {
            o.init.call(this);
          }
          (e.exports = o),
            (e.exports.once = function (e, t) {
              return new Promise(function (r, n) {
                function i(r) {
                  e.removeListener(t, o), n(r);
                }
                function o() {
                  "function" == typeof e.removeListener &&
                    e.removeListener("error", i),
                    r([].slice.call(arguments));
                }
                b(e, t, o, { once: !0 }),
                  "error" !== t &&
                    (function (e, t, r) {
                      "function" == typeof e.on &&
                        b(e, "error", t, { once: !0 });
                    })(e, i);
              });
            }),
            (o.EventEmitter = o),
            (o.prototype._events = void 0),
            (o.prototype._eventsCount = 0),
            (o.prototype._maxListeners = void 0);
          var a = 10;
          function s(e) {
            if ("function" != typeof e)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof e
              );
          }
          function f(e) {
            return void 0 === e._maxListeners
              ? o.defaultMaxListeners
              : e._maxListeners;
          }
          function c(e, t, r, n) {
            var i, o, a, c;
            if (
              (s(r),
              void 0 === (o = e._events)
                ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
                : (void 0 !== o.newListener &&
                    (e.emit("newListener", t, r.listener ? r.listener : r),
                    (o = e._events)),
                  (a = o[t])),
              void 0 === a)
            )
              (a = o[t] = r), ++e._eventsCount;
            else if (
              ("function" == typeof a
                ? (a = o[t] = n ? [r, a] : [a, r])
                : n
                ? a.unshift(r)
                : a.push(r),
              (i = f(e)) > 0 && a.length > i && !a.warned)
            ) {
              a.warned = !0;
              var u = new Error(
                "Possible EventEmitter memory leak detected. " +
                  a.length +
                  " " +
                  String(t) +
                  " listeners added. Use emitter.setMaxListeners() to increase limit"
              );
              (u.name = "MaxListenersExceededWarning"),
                (u.emitter = e),
                (u.type = t),
                (u.count = a.length),
                (c = u),
                console && console.warn && console.warn(c);
            }
            return e;
          }
          function u() {
            if (!this.fired)
              return (
                this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                0 === arguments.length
                  ? this.listener.call(this.target)
                  : this.listener.apply(this.target, arguments)
              );
          }
          function d(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r,
              },
              i = u.bind(n);
            return (i.listener = r), (n.wrapFn = i), i;
          }
          function h(e, t, r) {
            var n = e._events;
            if (void 0 === n) return [];
            var i = n[t];
            return void 0 === i
              ? []
              : "function" == typeof i
              ? r
                ? [i.listener || i]
                : [i]
              : r
              ? (function (e) {
                  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                  return t;
                })(i)
              : p(i, i.length);
          }
          function l(e) {
            var t = this._events;
            if (void 0 !== t) {
              var r = t[e];
              if ("function" == typeof r) return 1;
              if (void 0 !== r) return r.length;
            }
            return 0;
          }
          function p(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r;
          }
          function b(e, t, r, n) {
            if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
            else {
              if ("function" != typeof e.addEventListener)
                throw new TypeError(
                  'The "emitter" argument must be of type EventEmitter. Received type ' +
                    typeof e
                );
              e.addEventListener(t, function i(o) {
                n.once && e.removeEventListener(t, i), r(o);
              });
            }
          }
          Object.defineProperty(o, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
              return a;
            },
            set: function (e) {
              if ("number" != typeof e || e < 0 || i(e))
                throw new RangeError(
                  'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    "."
                );
              a = e;
            },
          }),
            (o.init = function () {
              (void 0 !== this._events &&
                this._events !== Object.getPrototypeOf(this)._events) ||
                ((this._events = Object.create(null)), (this._eventsCount = 0)),
                (this._maxListeners = this._maxListeners || void 0);
            }),
            (o.prototype.setMaxListeners = function (e) {
              if ("number" != typeof e || e < 0 || i(e))
                throw new RangeError(
                  'The value of "n" is out of range. It must be a non-negative number. Received ' +
                    e +
                    "."
                );
              return (this._maxListeners = e), this;
            }),
            (o.prototype.getMaxListeners = function () {
              return f(this);
            }),
            (o.prototype.emit = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
              var i = "error" === e,
                o = this._events;
              if (void 0 !== o) i = i && void 0 === o.error;
              else if (!i) return !1;
              if (i) {
                var a;
                if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
                var s = new Error(
                  "Unhandled error." + (a ? " (" + a.message + ")" : "")
                );
                throw ((s.context = a), s);
              }
              var f = o[e];
              if (void 0 === f) return !1;
              if ("function" == typeof f) n(f, this, t);
              else {
                var c = f.length,
                  u = p(f, c);
                for (r = 0; r < c; ++r) n(u[r], this, t);
              }
              return !0;
            }),
            (o.prototype.addListener = function (e, t) {
              return c(this, e, t, !1);
            }),
            (o.prototype.on = o.prototype.addListener),
            (o.prototype.prependListener = function (e, t) {
              return c(this, e, t, !0);
            }),
            (o.prototype.once = function (e, t) {
              return s(t), this.on(e, d(this, e, t)), this;
            }),
            (o.prototype.prependOnceListener = function (e, t) {
              return s(t), this.prependListener(e, d(this, e, t)), this;
            }),
            (o.prototype.removeListener = function (e, t) {
              var r, n, i, o, a;
              if ((s(t), void 0 === (n = this._events))) return this;
              if (void 0 === (r = n[e])) return this;
              if (r === t || r.listener === t)
                0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : (delete n[e],
                    n.removeListener &&
                      this.emit("removeListener", e, r.listener || t));
              else if ("function" != typeof r) {
                for (i = -1, o = r.length - 1; o >= 0; o--)
                  if (r[o] === t || r[o].listener === t) {
                    (a = r[o].listener), (i = o);
                    break;
                  }
                if (i < 0) return this;
                0 === i
                  ? r.shift()
                  : (function (e, t) {
                      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                      e.pop();
                    })(r, i),
                  1 === r.length && (n[e] = r[0]),
                  void 0 !== n.removeListener &&
                    this.emit("removeListener", e, a || t);
              }
              return this;
            }),
            (o.prototype.off = o.prototype.removeListener),
            (o.prototype.removeAllListeners = function (e) {
              var t, r, n;
              if (void 0 === (r = this._events)) return this;
              if (void 0 === r.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = Object.create(null)),
                      (this._eventsCount = 0))
                    : void 0 !== r[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = Object.create(null))
                        : delete r[e]),
                  this
                );
              if (0 === arguments.length) {
                var i,
                  o = Object.keys(r);
                for (n = 0; n < o.length; ++n)
                  "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = Object.create(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = r[e])) this.removeListener(e, t);
              else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                  this.removeListener(e, t[n]);
              return this;
            }),
            (o.prototype.listeners = function (e) {
              return h(this, e, !0);
            }),
            (o.prototype.rawListeners = function (e) {
              return h(this, e, !1);
            }),
            (o.listenerCount = function (e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : l.call(e, t);
            }),
            (o.prototype.listenerCount = l),
            (o.prototype.eventNames = function () {
              return this._eventsCount > 0 ? t(this._events) : [];
            });
        },
        4642: (e, t, r) => {
          var n = r(707).Buffer,
            i = r(8054);
          e.exports = function (e, t, r, o) {
            if (
              (n.isBuffer(e) || (e = n.from(e, "binary")),
              t && (n.isBuffer(t) || (t = n.from(t, "binary")), 8 !== t.length))
            )
              throw new RangeError("salt should be Buffer with 8 byte length");
            for (
              var a = r / 8,
                s = n.alloc(a),
                f = n.alloc(o || 0),
                c = n.alloc(0);
              a > 0 || o > 0;

            ) {
              var u = new i();
              u.update(c), u.update(e), t && u.update(t), (c = u.digest());
              var d = 0;
              if (a > 0) {
                var h = s.length - a;
                (d = Math.min(a, c.length)), c.copy(s, h, 0, d), (a -= d);
              }
              if (d < c.length && o > 0) {
                var l = f.length - o,
                  p = Math.min(o, c.length - d);
                c.copy(f, l, d, d + p), (o -= p);
              }
            }
            return c.fill(0), { key: s, iv: f };
          };
        },
        9507: (e) => {
          "use strict";
          e.exports = function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              if (t.constructor !== r.constructor) return !1;
              var n, i, o;
              if (Array.isArray(t)) {
                if ((n = t.length) != r.length) return !1;
                for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                return !0;
              }
              if (t.constructor === RegExp)
                return t.source === r.source && t.flags === r.flags;
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === r.toString();
              if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length)
                return !1;
              for (i = n; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
              for (i = n; 0 != i--; ) {
                var a = o[i];
                if (!e(t[a], r[a])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          };
        },
        3641: (e) => {
          (e.exports = a),
            (a.default = a),
            (a.stable = u),
            (a.stableStringify = u);
          var t = "[...]",
            r = "[Circular]",
            n = [],
            i = [];
          function o() {
            return {
              depthLimit: Number.MAX_SAFE_INTEGER,
              edgesLimit: Number.MAX_SAFE_INTEGER,
            };
          }
          function a(e, t, r, a) {
            var s;
            void 0 === a && (a = o()), f(e, "", 0, [], void 0, 0, a);
            try {
              s =
                0 === i.length
                  ? JSON.stringify(e, t, r)
                  : JSON.stringify(e, h(t), r);
            } catch (e) {
              return JSON.stringify(
                "[unable to serialize, circular reference is too complex to analyze]"
              );
            } finally {
              for (; 0 !== n.length; ) {
                var c = n.pop();
                4 === c.length
                  ? Object.defineProperty(c[0], c[1], c[3])
                  : (c[0][c[1]] = c[2]);
              }
            }
            return s;
          }
          function s(e, t, r, o) {
            var a = Object.getOwnPropertyDescriptor(o, r);
            void 0 !== a.get
              ? a.configurable
                ? (Object.defineProperty(o, r, { value: e }),
                  n.push([o, r, t, a]))
                : i.push([t, r, e])
              : ((o[r] = e), n.push([o, r, t]));
          }
          function f(e, n, i, o, a, c, u) {
            var d;
            if (((c += 1), "object" == typeof e && null !== e)) {
              for (d = 0; d < o.length; d++)
                if (o[d] === e) return void s(r, e, n, a);
              if (void 0 !== u.depthLimit && c > u.depthLimit)
                return void s(t, e, n, a);
              if (void 0 !== u.edgesLimit && i + 1 > u.edgesLimit)
                return void s(t, e, n, a);
              if ((o.push(e), Array.isArray(e)))
                for (d = 0; d < e.length; d++) f(e[d], d, d, o, e, c, u);
              else {
                var h = Object.keys(e);
                for (d = 0; d < h.length; d++) {
                  var l = h[d];
                  f(e[l], l, d, o, e, c, u);
                }
              }
              o.pop();
            }
          }
          function c(e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }
          function u(e, t, r, a) {
            void 0 === a && (a = o());
            var s,
              f = d(e, "", 0, [], void 0, 0, a) || e;
            try {
              s =
                0 === i.length
                  ? JSON.stringify(f, t, r)
                  : JSON.stringify(f, h(t), r);
            } catch (e) {
              return JSON.stringify(
                "[unable to serialize, circular reference is too complex to analyze]"
              );
            } finally {
              for (; 0 !== n.length; ) {
                var c = n.pop();
                4 === c.length
                  ? Object.defineProperty(c[0], c[1], c[3])
                  : (c[0][c[1]] = c[2]);
              }
            }
            return s;
          }
          function d(e, i, o, a, f, u, h) {
            var l;
            if (((u += 1), "object" == typeof e && null !== e)) {
              for (l = 0; l < a.length; l++)
                if (a[l] === e) return void s(r, e, i, f);
              try {
                if ("function" == typeof e.toJSON) return;
              } catch (e) {
                return;
              }
              if (void 0 !== h.depthLimit && u > h.depthLimit)
                return void s(t, e, i, f);
              if (void 0 !== h.edgesLimit && o + 1 > h.edgesLimit)
                return void s(t, e, i, f);
              if ((a.push(e), Array.isArray(e)))
                for (l = 0; l < e.length; l++) d(e[l], l, l, a, e, u, h);
              else {
                var p = {},
                  b = Object.keys(e).sort(c);
                for (l = 0; l < b.length; l++) {
                  var y = b[l];
                  d(e[y], y, l, a, e, u, h), (p[y] = e[y]);
                }
                if (void 0 === f) return p;
                n.push([f, i, e]), (f[i] = p);
              }
              a.pop();
            }
          }
          function h(e) {
            return (
              (e =
                void 0 !== e
                  ? e
                  : function (e, t) {
                      return t;
                    }),
              function (t, r) {
                if (i.length > 0)
                  for (var n = 0; n < i.length; n++) {
                    var o = i[n];
                    if (o[1] === t && o[0] === r) {
                      (r = o[2]), i.splice(n, 1);
                      break;
                    }
                  }
                return e.call(this, t, r);
              }
            );
          }
        },
        7025: (e, t, r) => {
          "use strict";
          var n = r(3765),
            i = Object.prototype.toString,
            o = Object.prototype.hasOwnProperty;
          e.exports = function (e, t, r) {
            if (!n(t)) throw new TypeError("iterator must be a function");
            var a;
            arguments.length >= 3 && (a = r),
              "[object Array]" === i.call(e)
                ? (function (e, t, r) {
                    for (var n = 0, i = e.length; n < i; n++)
                      o.call(e, n) &&
                        (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
                  })(e, t, a)
                : "string" == typeof e
                ? (function (e, t, r) {
                    for (var n = 0, i = e.length; n < i; n++)
                      null == r
                        ? t(e.charAt(n), n, e)
                        : t.call(r, e.charAt(n), n, e);
                  })(e, t, a)
                : (function (e, t, r) {
                    for (var n in e)
                      o.call(e, n) &&
                        (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
                  })(e, t, a);
          };
        },
        2521: (e) => {
          "use strict";
          var t = Array.prototype.slice,
            r = Object.prototype.toString;
          e.exports = function (e) {
            var n = this;
            if ("function" != typeof n || "[object Function]" !== r.call(n))
              throw new TypeError(
                "Function.prototype.bind called on incompatible " + n
              );
            for (
              var i,
                o = t.call(arguments, 1),
                a = Math.max(0, n.length - o.length),
                s = [],
                f = 0;
              f < a;
              f++
            )
              s.push("$" + f);
            if (
              ((i = Function(
                "binder",
                "return function (" +
                  s.join(",") +
                  "){ return binder.apply(this,arguments); }"
              )(function () {
                if (this instanceof i) {
                  var r = n.apply(this, o.concat(t.call(arguments)));
                  return Object(r) === r ? r : this;
                }
                return n.apply(e, o.concat(t.call(arguments)));
              })),
              n.prototype)
            ) {
              var c = function () {};
              (c.prototype = n.prototype),
                (i.prototype = new c()),
                (c.prototype = null);
            }
            return i;
          };
        },
        7156: (e, t, r) => {
          "use strict";
          var n = r(2521);
          e.exports = Function.prototype.bind || n;
        },
        1528: (e, t, r) => {
          "use strict";
          var n,
            i = SyntaxError,
            o = Function,
            a = TypeError,
            s = function (e) {
              try {
                return o('"use strict"; return (' + e + ").constructor;")();
              } catch (e) {}
            },
            f = Object.getOwnPropertyDescriptor;
          if (f)
            try {
              f({}, "");
            } catch (e) {
              f = null;
            }
          var c = function () {
              throw new a();
            },
            u = f
              ? (function () {
                  try {
                    return c;
                  } catch (e) {
                    try {
                      return f(arguments, "callee").get;
                    } catch (e) {
                      return c;
                    }
                  }
                })()
              : c,
            d = r(465)(),
            h =
              Object.getPrototypeOf ||
              function (e) {
                return e.__proto__;
              },
            l = {},
            p = "undefined" == typeof Uint8Array ? n : h(Uint8Array),
            b = {
              "%AggregateError%":
                "undefined" == typeof AggregateError ? n : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%":
                "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
              "%ArrayIteratorPrototype%": d ? h([][Symbol.iterator]()) : n,
              "%AsyncFromSyncIteratorPrototype%": n,
              "%AsyncFunction%": l,
              "%AsyncGenerator%": l,
              "%AsyncGeneratorFunction%": l,
              "%AsyncIteratorPrototype%": l,
              "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
              "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
              "%BigInt64Array%":
                "undefined" == typeof BigInt64Array ? n : BigInt64Array,
              "%BigUint64Array%":
                "undefined" == typeof BigUint64Array ? n : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%": "undefined" == typeof DataView ? n : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": Error,
              "%eval%": eval,
              "%EvalError%": EvalError,
              "%Float32Array%":
                "undefined" == typeof Float32Array ? n : Float32Array,
              "%Float64Array%":
                "undefined" == typeof Float64Array ? n : Float64Array,
              "%FinalizationRegistry%":
                "undefined" == typeof FinalizationRegistry
                  ? n
                  : FinalizationRegistry,
              "%Function%": o,
              "%GeneratorFunction%": l,
              "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
              "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
              "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": d ? h(h([][Symbol.iterator]())) : n,
              "%JSON%": "object" == typeof JSON ? JSON : n,
              "%Map%": "undefined" == typeof Map ? n : Map,
              "%MapIteratorPrototype%":
                "undefined" != typeof Map && d
                  ? h(new Map()[Symbol.iterator]())
                  : n,
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": Object,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": "undefined" == typeof Promise ? n : Promise,
              "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
              "%RangeError%": RangeError,
              "%ReferenceError%": ReferenceError,
              "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
              "%RegExp%": RegExp,
              "%Set%": "undefined" == typeof Set ? n : Set,
              "%SetIteratorPrototype%":
                "undefined" != typeof Set && d
                  ? h(new Set()[Symbol.iterator]())
                  : n,
              "%SharedArrayBuffer%":
                "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%": d ? h(""[Symbol.iterator]()) : n,
              "%Symbol%": d ? Symbol : n,
              "%SyntaxError%": i,
              "%ThrowTypeError%": u,
              "%TypedArray%": p,
              "%TypeError%": a,
              "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
              "%Uint8ClampedArray%":
                "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
              "%Uint16Array%":
                "undefined" == typeof Uint16Array ? n : Uint16Array,
              "%Uint32Array%":
                "undefined" == typeof Uint32Array ? n : Uint32Array,
              "%URIError%": URIError,
              "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
              "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
              "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet,
            };
          try {
            null.error;
          } catch (e) {
            var y = h(h(e));
            b["%Error.prototype%"] = y;
          }
          var g = function e(t) {
              var r;
              if ("%AsyncFunction%" === t) r = s("async function () {}");
              else if ("%GeneratorFunction%" === t) r = s("function* () {}");
              else if ("%AsyncGeneratorFunction%" === t)
                r = s("async function* () {}");
              else if ("%AsyncGenerator%" === t) {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype);
              } else if ("%AsyncIteratorPrototype%" === t) {
                var i = e("%AsyncGenerator%");
                i && (r = h(i.prototype));
              }
              return (b[t] = r), r;
            },
            m = {
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": [
                "AsyncGeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": [
                "GeneratorFunction",
                "prototype",
                "prototype",
              ],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": [
                "SharedArrayBuffer",
                "prototype",
              ],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": [
                "Uint8ClampedArray",
                "prototype",
              ],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"],
            },
            v = r(7156),
            w = r(8776),
            _ = v.call(Function.call, Array.prototype.concat),
            S = v.call(Function.apply, Array.prototype.splice),
            E = v.call(Function.call, String.prototype.replace),
            A = v.call(Function.call, String.prototype.slice),
            M = v.call(Function.call, RegExp.prototype.exec),
            k =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            O = /\\(\\)?/g,
            I = function (e, t) {
              var r,
                n = e;
              if ((w(m, n) && (n = "%" + (r = m[n])[0] + "%"), w(b, n))) {
                var o = b[n];
                if ((o === l && (o = g(n)), void 0 === o && !t))
                  throw new a(
                    "intrinsic " +
                      e +
                      " exists, but is not available. Please file an issue!"
                  );
                return { alias: r, name: n, value: o };
              }
              throw new i("intrinsic " + e + " does not exist!");
            };
          e.exports = function (e, t) {
            if ("string" != typeof e || 0 === e.length)
              throw new a("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t)
              throw new a('"allowMissing" argument must be a boolean');
            if (null === M(/^%?[^%]*%?$/, e))
              throw new i(
                "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
              );
            var r = (function (e) {
                var t = A(e, 0, 1),
                  r = A(e, -1);
                if ("%" === t && "%" !== r)
                  throw new i("invalid intrinsic syntax, expected closing `%`");
                if ("%" === r && "%" !== t)
                  throw new i("invalid intrinsic syntax, expected opening `%`");
                var n = [];
                return (
                  E(e, k, function (e, t, r, i) {
                    n[n.length] = r ? E(i, O, "$1") : t || e;
                  }),
                  n
                );
              })(e),
              n = r.length > 0 ? r[0] : "",
              o = I("%" + n + "%", t),
              s = o.name,
              c = o.value,
              u = !1,
              d = o.alias;
            d && ((n = d[0]), S(r, _([0, 1], d)));
            for (var h = 1, l = !0; h < r.length; h += 1) {
              var p = r[h],
                y = A(p, 0, 1),
                g = A(p, -1);
              if (
                ('"' === y ||
                  "'" === y ||
                  "`" === y ||
                  '"' === g ||
                  "'" === g ||
                  "`" === g) &&
                y !== g
              )
                throw new i(
                  "property names with quotes must have matching quotes"
                );
              if (
                (("constructor" !== p && l) || (u = !0),
                w(b, (s = "%" + (n += "." + p) + "%")))
              )
                c = b[s];
              else if (null != c) {
                if (!(p in c)) {
                  if (!t)
                    throw new a(
                      "base intrinsic for " +
                        e +
                        " exists, but the property is not available."
                    );
                  return;
                }
                if (f && h + 1 >= r.length) {
                  var m = f(c, p);
                  c =
                    (l = !!m) && "get" in m && !("originalValue" in m.get)
                      ? m.get
                      : c[p];
                } else (l = w(c, p)), (c = c[p]);
                l && !u && (b[s] = c);
              }
            }
            return c;
          };
        },
        1455: (e, t, r) => {
          "use strict";
          var n = r(1528)("%Object.getOwnPropertyDescriptor%", !0);
          if (n)
            try {
              n([], "length");
            } catch (e) {
              n = null;
            }
          e.exports = n;
        },
        465: (e, t, r) => {
          "use strict";
          var n = "undefined" != typeof Symbol && Symbol,
            i = r(6073);
          e.exports = function () {
            return (
              "function" == typeof n &&
              "function" == typeof Symbol &&
              "symbol" == typeof n("foo") &&
              "symbol" == typeof Symbol("bar") &&
              i()
            );
          };
        },
        6073: (e) => {
          "use strict";
          e.exports = function () {
            if (
              "function" != typeof Symbol ||
              "function" != typeof Object.getOwnPropertySymbols
            )
              return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var e = {},
              t = Symbol("test"),
              r = Object(t);
            if ("string" == typeof t) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(t))
              return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(r))
              return !1;
            for (t in ((e[t] = 42), e)) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
              return !1;
            if (
              "function" == typeof Object.getOwnPropertyNames &&
              0 !== Object.getOwnPropertyNames(e).length
            )
              return !1;
            var n = Object.getOwnPropertySymbols(e);
            if (1 !== n.length || n[0] !== t) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
              var i = Object.getOwnPropertyDescriptor(e, t);
              if (42 !== i.value || !0 !== i.enumerable) return !1;
            }
            return !0;
          };
        },
        6686: (e, t, r) => {
          "use strict";
          var n = r(6073);
          e.exports = function () {
            return n() && !!Symbol.toStringTag;
          };
        },
        8776: (e, t, r) => {
          "use strict";
          var n = r(7156);
          e.exports = n.call(Function.call, Object.prototype.hasOwnProperty);
        },
        8262: (e, t, r) => {
          "use strict";
          var n = r(707).Buffer,
            i = r(6310).Transform;
          function o(e) {
            i.call(this),
              (this._block = n.allocUnsafe(e)),
              (this._blockSize = e),
              (this._blockOffset = 0),
              (this._length = [0, 0, 0, 0]),
              (this._finalized = !1);
          }
          r(2111)(o, i),
            (o.prototype._transform = function (e, t, r) {
              var n = null;
              try {
                this.update(e, t);
              } catch (e) {
                n = e;
              }
              r(n);
            }),
            (o.prototype._flush = function (e) {
              var t = null;
              try {
                this.push(this.digest());
              } catch (e) {
                t = e;
              }
              e(t);
            }),
            (o.prototype.update = function (e, t) {
              if (
                ((function (e, t) {
                  if (!n.isBuffer(e) && "string" != typeof e)
                    throw new TypeError("Data must be a string or a buffer");
                })(e),
                this._finalized)
              )
                throw new Error("Digest already called");
              n.isBuffer(e) || (e = n.from(e, t));
              for (
                var r = this._block, i = 0;
                this._blockOffset + e.length - i >= this._blockSize;

              ) {
                for (var o = this._blockOffset; o < this._blockSize; )
                  r[o++] = e[i++];
                this._update(), (this._blockOffset = 0);
              }
              for (; i < e.length; ) r[this._blockOffset++] = e[i++];
              for (var a = 0, s = 8 * e.length; s > 0; ++a)
                (this._length[a] += s),
                  (s = (this._length[a] / 4294967296) | 0) > 0 &&
                    (this._length[a] -= 4294967296 * s);
              return this;
            }),
            (o.prototype._update = function () {
              throw new Error("_update is not implemented");
            }),
            (o.prototype.digest = function (e) {
              if (this._finalized) throw new Error("Digest already called");
              this._finalized = !0;
              var t = this._digest();
              void 0 !== e && (t = t.toString(e)),
                this._block.fill(0),
                (this._blockOffset = 0);
              for (var r = 0; r < 4; ++r) this._length[r] = 0;
              return t;
            }),
            (o.prototype._digest = function () {
              throw new Error("_digest is not implemented");
            }),
            (e.exports = o);
        },
        9e3: (e, t, r) => {
          var n = t;
          (n.utils = r(7964)),
            (n.common = r(7530)),
            (n.sha = r(909)),
            (n.ripemd = r(628)),
            (n.hmac = r(1532)),
            (n.sha1 = n.sha.sha1),
            (n.sha256 = n.sha.sha256),
            (n.sha224 = n.sha.sha224),
            (n.sha384 = n.sha.sha384),
            (n.sha512 = n.sha.sha512),
            (n.ripemd160 = n.ripemd.ripemd160);
        },
        7530: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(882);
          function o() {
            (this.pending = null),
              (this.pendingTotal = 0),
              (this.blockSize = this.constructor.blockSize),
              (this.outSize = this.constructor.outSize),
              (this.hmacStrength = this.constructor.hmacStrength),
              (this.padLength = this.constructor.padLength / 8),
              (this.endian = "big"),
              (this._delta8 = this.blockSize / 8),
              (this._delta32 = this.blockSize / 32);
          }
          (t.BlockHash = o),
            (o.prototype.update = function (e, t) {
              if (
                ((e = n.toArray(e, t)),
                this.pending
                  ? (this.pending = this.pending.concat(e))
                  : (this.pending = e),
                (this.pendingTotal += e.length),
                this.pending.length >= this._delta8)
              ) {
                var r = (e = this.pending).length % this._delta8;
                (this.pending = e.slice(e.length - r, e.length)),
                  0 === this.pending.length && (this.pending = null),
                  (e = n.join32(e, 0, e.length - r, this.endian));
                for (var i = 0; i < e.length; i += this._delta32)
                  this._update(e, i, i + this._delta32);
              }
              return this;
            }),
            (o.prototype.digest = function (e) {
              return (
                this.update(this._pad()),
                i(null === this.pending),
                this._digest(e)
              );
            }),
            (o.prototype._pad = function () {
              var e = this.pendingTotal,
                t = this._delta8,
                r = t - ((e + this.padLength) % t),
                n = new Array(r + this.padLength);
              n[0] = 128;
              for (var i = 1; i < r; i++) n[i] = 0;
              if (((e <<= 3), "big" === this.endian)) {
                for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                (n[i++] = 0),
                  (n[i++] = 0),
                  (n[i++] = 0),
                  (n[i++] = 0),
                  (n[i++] = (e >>> 24) & 255),
                  (n[i++] = (e >>> 16) & 255),
                  (n[i++] = (e >>> 8) & 255),
                  (n[i++] = 255 & e);
              } else
                for (
                  n[i++] = 255 & e,
                    n[i++] = (e >>> 8) & 255,
                    n[i++] = (e >>> 16) & 255,
                    n[i++] = (e >>> 24) & 255,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    n[i++] = 0,
                    o = 8;
                  o < this.padLength;
                  o++
                )
                  n[i++] = 0;
              return n;
            });
        },
        1532: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(882);
          function o(e, t, r) {
            if (!(this instanceof o)) return new o(e, t, r);
            (this.Hash = e),
              (this.blockSize = e.blockSize / 8),
              (this.outSize = e.outSize / 8),
              (this.inner = null),
              (this.outer = null),
              this._init(n.toArray(t, r));
          }
          (e.exports = o),
            (o.prototype._init = function (e) {
              e.length > this.blockSize &&
                (e = new this.Hash().update(e).digest()),
                i(e.length <= this.blockSize);
              for (var t = e.length; t < this.blockSize; t++) e.push(0);
              for (t = 0; t < e.length; t++) e[t] ^= 54;
              for (
                this.inner = new this.Hash().update(e), t = 0;
                t < e.length;
                t++
              )
                e[t] ^= 106;
              this.outer = new this.Hash().update(e);
            }),
            (o.prototype.update = function (e, t) {
              return this.inner.update(e, t), this;
            }),
            (o.prototype.digest = function (e) {
              return (
                this.outer.update(this.inner.digest()), this.outer.digest(e)
              );
            });
        },
        628: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(7530),
            o = n.rotl32,
            a = n.sum32,
            s = n.sum32_3,
            f = n.sum32_4,
            c = i.BlockHash;
          function u() {
            if (!(this instanceof u)) return new u();
            c.call(this),
              (this.h = [
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]),
              (this.endian = "little");
          }
          function d(e, t, r, n) {
            return e <= 15
              ? t ^ r ^ n
              : e <= 31
              ? (t & r) | (~t & n)
              : e <= 47
              ? (t | ~r) ^ n
              : e <= 63
              ? (t & n) | (r & ~n)
              : t ^ (r | ~n);
          }
          function h(e) {
            return e <= 15
              ? 0
              : e <= 31
              ? 1518500249
              : e <= 47
              ? 1859775393
              : e <= 63
              ? 2400959708
              : 2840853838;
          }
          function l(e) {
            return e <= 15
              ? 1352829926
              : e <= 31
              ? 1548603684
              : e <= 47
              ? 1836072691
              : e <= 63
              ? 2053994217
              : 0;
          }
          n.inherits(u, c),
            (t.ripemd160 = u),
            (u.blockSize = 512),
            (u.outSize = 160),
            (u.hmacStrength = 192),
            (u.padLength = 64),
            (u.prototype._update = function (e, t) {
              for (
                var r = this.h[0],
                  n = this.h[1],
                  i = this.h[2],
                  c = this.h[3],
                  u = this.h[4],
                  m = r,
                  v = n,
                  w = i,
                  _ = c,
                  S = u,
                  E = 0;
                E < 80;
                E++
              ) {
                var A = a(o(f(r, d(E, n, i, c), e[p[E] + t], h(E)), y[E]), u);
                (r = u),
                  (u = c),
                  (c = o(i, 10)),
                  (i = n),
                  (n = A),
                  (A = a(
                    o(f(m, d(79 - E, v, w, _), e[b[E] + t], l(E)), g[E]),
                    S
                  )),
                  (m = S),
                  (S = _),
                  (_ = o(w, 10)),
                  (w = v),
                  (v = A);
              }
              (A = s(this.h[1], i, _)),
                (this.h[1] = s(this.h[2], c, S)),
                (this.h[2] = s(this.h[3], u, m)),
                (this.h[3] = s(this.h[4], r, v)),
                (this.h[4] = s(this.h[0], n, w)),
                (this.h[0] = A);
            }),
            (u.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h, "little")
                : n.split32(this.h, "little");
            });
          var p = [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
              10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8,
              1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7,
              15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15,
              13,
            ],
            b = [
              5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
              0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
              11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2,
              13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3,
              9, 11,
            ],
            y = [
              11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8,
              13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14,
              9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9,
              8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12,
              13, 14, 11, 8, 5, 6,
            ],
            g = [
              8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
              7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
              6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14,
              6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5,
              15, 13, 11, 11,
            ];
        },
        909: (e, t, r) => {
          "use strict";
          (t.sha1 = r(169)),
            (t.sha224 = r(677)),
            (t.sha256 = r(4510)),
            (t.sha384 = r(575)),
            (t.sha512 = r(2296));
        },
        169: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(7530),
            o = r(7266),
            a = n.rotl32,
            s = n.sum32,
            f = n.sum32_5,
            c = o.ft_1,
            u = i.BlockHash,
            d = [1518500249, 1859775393, 2400959708, 3395469782];
          function h() {
            if (!(this instanceof h)) return new h();
            u.call(this),
              (this.h = [
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]),
              (this.W = new Array(80));
          }
          n.inherits(h, u),
            (e.exports = h),
            (h.blockSize = 512),
            (h.outSize = 160),
            (h.hmacStrength = 80),
            (h.padLength = 64),
            (h.prototype._update = function (e, t) {
              for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
              for (; n < r.length; n++)
                r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
              var i = this.h[0],
                o = this.h[1],
                u = this.h[2],
                h = this.h[3],
                l = this.h[4];
              for (n = 0; n < r.length; n++) {
                var p = ~~(n / 20),
                  b = f(a(i, 5), c(p, o, u, h), l, r[n], d[p]);
                (l = h), (h = u), (u = a(o, 30)), (o = i), (i = b);
              }
              (this.h[0] = s(this.h[0], i)),
                (this.h[1] = s(this.h[1], o)),
                (this.h[2] = s(this.h[2], u)),
                (this.h[3] = s(this.h[3], h)),
                (this.h[4] = s(this.h[4], l));
            }),
            (h.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h, "big")
                : n.split32(this.h, "big");
            });
        },
        677: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(4510);
          function o() {
            if (!(this instanceof o)) return new o();
            i.call(this),
              (this.h = [
                3238371032, 914150663, 812702999, 4144912697, 4290775857,
                1750603025, 1694076839, 3204075428,
              ]);
          }
          n.inherits(o, i),
            (e.exports = o),
            (o.blockSize = 512),
            (o.outSize = 224),
            (o.hmacStrength = 192),
            (o.padLength = 64),
            (o.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h.slice(0, 7), "big")
                : n.split32(this.h.slice(0, 7), "big");
            });
        },
        4510: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(7530),
            o = r(7266),
            a = r(882),
            s = n.sum32,
            f = n.sum32_4,
            c = n.sum32_5,
            u = o.ch32,
            d = o.maj32,
            h = o.s0_256,
            l = o.s1_256,
            p = o.g0_256,
            b = o.g1_256,
            y = i.BlockHash,
            g = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ];
          function m() {
            if (!(this instanceof m)) return new m();
            y.call(this),
              (this.h = [
                1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
                2600822924, 528734635, 1541459225,
              ]),
              (this.k = g),
              (this.W = new Array(64));
          }
          n.inherits(m, y),
            (e.exports = m),
            (m.blockSize = 512),
            (m.outSize = 256),
            (m.hmacStrength = 192),
            (m.padLength = 64),
            (m.prototype._update = function (e, t) {
              for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
              for (; n < r.length; n++)
                r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
              var i = this.h[0],
                o = this.h[1],
                y = this.h[2],
                g = this.h[3],
                m = this.h[4],
                v = this.h[5],
                w = this.h[6],
                _ = this.h[7];
              for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
                var S = c(_, l(m), u(m, v, w), this.k[n], r[n]),
                  E = s(h(i), d(i, o, y));
                (_ = w),
                  (w = v),
                  (v = m),
                  (m = s(g, S)),
                  (g = y),
                  (y = o),
                  (o = i),
                  (i = s(S, E));
              }
              (this.h[0] = s(this.h[0], i)),
                (this.h[1] = s(this.h[1], o)),
                (this.h[2] = s(this.h[2], y)),
                (this.h[3] = s(this.h[3], g)),
                (this.h[4] = s(this.h[4], m)),
                (this.h[5] = s(this.h[5], v)),
                (this.h[6] = s(this.h[6], w)),
                (this.h[7] = s(this.h[7], _));
            }),
            (m.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h, "big")
                : n.split32(this.h, "big");
            });
        },
        575: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(2296);
          function o() {
            if (!(this instanceof o)) return new o();
            i.call(this),
              (this.h = [
                3418070365, 3238371032, 1654270250, 914150663, 2438529370,
                812702999, 355462360, 4144912697, 1731405415, 4290775857,
                2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
                3204075428,
              ]);
          }
          n.inherits(o, i),
            (e.exports = o),
            (o.blockSize = 1024),
            (o.outSize = 384),
            (o.hmacStrength = 192),
            (o.padLength = 128),
            (o.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h.slice(0, 12), "big")
                : n.split32(this.h.slice(0, 12), "big");
            });
        },
        2296: (e, t, r) => {
          "use strict";
          var n = r(7964),
            i = r(7530),
            o = r(882),
            a = n.rotr64_hi,
            s = n.rotr64_lo,
            f = n.shr64_hi,
            c = n.shr64_lo,
            u = n.sum64,
            d = n.sum64_hi,
            h = n.sum64_lo,
            l = n.sum64_4_hi,
            p = n.sum64_4_lo,
            b = n.sum64_5_hi,
            y = n.sum64_5_lo,
            g = i.BlockHash,
            m = [
              1116352408, 3609767458, 1899447441, 602891725, 3049323471,
              3964484399, 3921009573, 2173295548, 961987163, 4081628472,
              1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
              3664609560, 3624381080, 2734883394, 310598401, 1164996542,
              607225278, 1323610764, 1426881987, 3590304994, 1925078388,
              4068182383, 2162078206, 991336113, 2614888103, 633803317,
              3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
              944711139, 264347078, 2341262773, 604807628, 2007800933,
              770255983, 1495990901, 1249150122, 1856431235, 1555081692,
              3175218132, 1996064986, 2198950837, 2554220882, 3999719339,
              2821834349, 766784016, 2952996808, 2566594879, 3210313671,
              3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
              113926993, 3758326383, 338241895, 168717936, 666307205,
              1188179964, 773529912, 1546045734, 1294757372, 1522805485,
              1396182291, 2643833823, 1695183700, 2343527390, 1986661051,
              1014477480, 2177026350, 1206759142, 2456956037, 344077627,
              2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
              3505952657, 3345764771, 106217008, 3516065817, 3606008344,
              3600352804, 1432725776, 4094571909, 1467031594, 275423344,
              851169720, 430227734, 3100823752, 506948616, 1363258195,
              659060556, 3750685593, 883997877, 3785050280, 958139571,
              3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
              1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
              1125592928, 2227730452, 2716904306, 2361852424, 442776044,
              2428436474, 593698344, 2756734187, 3733110249, 3204031479,
              2999351573, 3329325298, 3815920427, 3391569614, 3928383900,
              3515267271, 566280711, 3940187606, 3454069534, 4118630271,
              4000239992, 116418474, 1914138554, 174292421, 2731055270,
              289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
              852142971, 1086792851, 1017036298, 365543100, 1126000580,
              2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
              1607167915, 987167468, 1816402316, 1246189591,
            ];
          function v() {
            if (!(this instanceof v)) return new v();
            g.call(this),
              (this.h = [
                1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
                4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
                2600822924, 725511199, 528734635, 4215389547, 1541459225,
                327033209,
              ]),
              (this.k = m),
              (this.W = new Array(160));
          }
          function w(e, t, r, n, i) {
            var o = (e & r) ^ (~e & i);
            return o < 0 && (o += 4294967296), o;
          }
          function _(e, t, r, n, i, o) {
            var a = (t & n) ^ (~t & o);
            return a < 0 && (a += 4294967296), a;
          }
          function S(e, t, r, n, i) {
            var o = (e & r) ^ (e & i) ^ (r & i);
            return o < 0 && (o += 4294967296), o;
          }
          function E(e, t, r, n, i, o) {
            var a = (t & n) ^ (t & o) ^ (n & o);
            return a < 0 && (a += 4294967296), a;
          }
          function A(e, t) {
            var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
            return r < 0 && (r += 4294967296), r;
          }
          function M(e, t) {
            var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
            return r < 0 && (r += 4294967296), r;
          }
          function k(e, t) {
            var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
            return r < 0 && (r += 4294967296), r;
          }
          function O(e, t) {
            var r = a(e, t, 1) ^ a(e, t, 8) ^ f(e, t, 7);
            return r < 0 && (r += 4294967296), r;
          }
          function I(e, t) {
            var r = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
            return r < 0 && (r += 4294967296), r;
          }
          function C(e, t) {
            var r = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
            return r < 0 && (r += 4294967296), r;
          }
          n.inherits(v, g),
            (e.exports = v),
            (v.blockSize = 1024),
            (v.outSize = 512),
            (v.hmacStrength = 192),
            (v.padLength = 128),
            (v.prototype._prepareBlock = function (e, t) {
              for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
              for (; n < r.length; n += 2) {
                var i =
                    ((y = r[n - 4]),
                    (g = r[n - 3]),
                    (m = void 0),
                    (m = a(y, g, 19) ^ a(g, y, 29) ^ f(y, g, 6)) < 0 &&
                      (m += 4294967296),
                    m),
                  o = C(r[n - 4], r[n - 3]),
                  s = r[n - 14],
                  c = r[n - 13],
                  u = O(r[n - 30], r[n - 29]),
                  d = I(r[n - 30], r[n - 29]),
                  h = r[n - 32],
                  b = r[n - 31];
                (r[n] = l(i, o, s, c, u, d, h, b)),
                  (r[n + 1] = p(i, o, s, c, u, d, h, b));
              }
              var y, g, m;
            }),
            (v.prototype._update = function (e, t) {
              this._prepareBlock(e, t);
              var r,
                n,
                i,
                s = this.W,
                f = this.h[0],
                c = this.h[1],
                l = this.h[2],
                p = this.h[3],
                g = this.h[4],
                m = this.h[5],
                v = this.h[6],
                O = this.h[7],
                I = this.h[8],
                C = this.h[9],
                R = this.h[10],
                P = this.h[11],
                x = this.h[12],
                B = this.h[13],
                T = this.h[14],
                j = this.h[15];
              o(this.k.length === s.length);
              for (var D = 0; D < s.length; D += 2) {
                var L = T,
                  N = j,
                  U =
                    ((i = void 0),
                    (i = a((r = I), (n = C), 14) ^ a(r, n, 18) ^ a(n, r, 9)) <
                      0 && (i += 4294967296),
                    i),
                  q = k(I, C),
                  z = w(I, 0, R, 0, x),
                  F = _(0, C, 0, P, 0, B),
                  W = this.k[D],
                  K = this.k[D + 1],
                  H = s[D],
                  V = s[D + 1],
                  G = b(L, N, U, q, z, F, W, K, H, V),
                  $ = y(L, N, U, q, z, F, W, K, H, V);
                (L = A(f, c)),
                  (N = M(f, c)),
                  (U = S(f, 0, l, 0, g)),
                  (q = E(0, c, 0, p, 0, m));
                var X = d(L, N, U, q),
                  J = h(L, N, U, q);
                (T = x),
                  (j = B),
                  (x = R),
                  (B = P),
                  (R = I),
                  (P = C),
                  (I = d(v, O, G, $)),
                  (C = h(O, O, G, $)),
                  (v = g),
                  (O = m),
                  (g = l),
                  (m = p),
                  (l = f),
                  (p = c),
                  (f = d(G, $, X, J)),
                  (c = h(G, $, X, J));
              }
              u(this.h, 0, f, c),
                u(this.h, 2, l, p),
                u(this.h, 4, g, m),
                u(this.h, 6, v, O),
                u(this.h, 8, I, C),
                u(this.h, 10, R, P),
                u(this.h, 12, x, B),
                u(this.h, 14, T, j);
            }),
            (v.prototype._digest = function (e) {
              return "hex" === e
                ? n.toHex32(this.h, "big")
                : n.split32(this.h, "big");
            });
        },
        7266: (e, t, r) => {
          "use strict";
          var n = r(7964).rotr32;
          function i(e, t, r) {
            return (e & t) ^ (~e & r);
          }
          function o(e, t, r) {
            return (e & t) ^ (e & r) ^ (t & r);
          }
          function a(e, t, r) {
            return e ^ t ^ r;
          }
          (t.ft_1 = function (e, t, r, n) {
            return 0 === e
              ? i(t, r, n)
              : 1 === e || 3 === e
              ? a(t, r, n)
              : 2 === e
              ? o(t, r, n)
              : void 0;
          }),
            (t.ch32 = i),
            (t.maj32 = o),
            (t.p32 = a),
            (t.s0_256 = function (e) {
              return n(e, 2) ^ n(e, 13) ^ n(e, 22);
            }),
            (t.s1_256 = function (e) {
              return n(e, 6) ^ n(e, 11) ^ n(e, 25);
            }),
            (t.g0_256 = function (e) {
              return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
            }),
            (t.g1_256 = function (e) {
              return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
            });
        },
        7964: (e, t, r) => {
          "use strict";
          var n = r(882),
            i = r(2111);
          function o(e, t) {
            return (
              55296 == (64512 & e.charCodeAt(t)) &&
              !(t < 0 || t + 1 >= e.length) &&
              56320 == (64512 & e.charCodeAt(t + 1))
            );
          }
          function a(e) {
            return (
              ((e >>> 24) |
                ((e >>> 8) & 65280) |
                ((e << 8) & 16711680) |
                ((255 & e) << 24)) >>>
              0
            );
          }
          function s(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function f(e) {
            return 7 === e.length
              ? "0" + e
              : 6 === e.length
              ? "00" + e
              : 5 === e.length
              ? "000" + e
              : 4 === e.length
              ? "0000" + e
              : 3 === e.length
              ? "00000" + e
              : 2 === e.length
              ? "000000" + e
              : 1 === e.length
              ? "0000000" + e
              : e;
          }
          (t.inherits = i),
            (t.toArray = function (e, t) {
              if (Array.isArray(e)) return e.slice();
              if (!e) return [];
              var r = [];
              if ("string" == typeof e)
                if (t) {
                  if ("hex" === t)
                    for (
                      (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                        (e = "0" + e),
                        i = 0;
                      i < e.length;
                      i += 2
                    )
                      r.push(parseInt(e[i] + e[i + 1], 16));
                } else
                  for (var n = 0, i = 0; i < e.length; i++) {
                    var a = e.charCodeAt(i);
                    a < 128
                      ? (r[n++] = a)
                      : a < 2048
                      ? ((r[n++] = (a >> 6) | 192), (r[n++] = (63 & a) | 128))
                      : o(e, i)
                      ? ((a =
                          65536 +
                          ((1023 & a) << 10) +
                          (1023 & e.charCodeAt(++i))),
                        (r[n++] = (a >> 18) | 240),
                        (r[n++] = ((a >> 12) & 63) | 128),
                        (r[n++] = ((a >> 6) & 63) | 128),
                        (r[n++] = (63 & a) | 128))
                      : ((r[n++] = (a >> 12) | 224),
                        (r[n++] = ((a >> 6) & 63) | 128),
                        (r[n++] = (63 & a) | 128));
                  }
              else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
              return r;
            }),
            (t.toHex = function (e) {
              for (var t = "", r = 0; r < e.length; r++)
                t += s(e[r].toString(16));
              return t;
            }),
            (t.htonl = a),
            (t.toHex32 = function (e, t) {
              for (var r = "", n = 0; n < e.length; n++) {
                var i = e[n];
                "little" === t && (i = a(i)), (r += f(i.toString(16)));
              }
              return r;
            }),
            (t.zero2 = s),
            (t.zero8 = f),
            (t.join32 = function (e, t, r, i) {
              var o = r - t;
              n(o % 4 == 0);
              for (
                var a = new Array(o / 4), s = 0, f = t;
                s < a.length;
                s++, f += 4
              ) {
                var c;
                (c =
                  "big" === i
                    ? (e[f] << 24) |
                      (e[f + 1] << 16) |
                      (e[f + 2] << 8) |
                      e[f + 3]
                    : (e[f + 3] << 24) |
                      (e[f + 2] << 16) |
                      (e[f + 1] << 8) |
                      e[f]),
                  (a[s] = c >>> 0);
              }
              return a;
            }),
            (t.split32 = function (e, t) {
              for (
                var r = new Array(4 * e.length), n = 0, i = 0;
                n < e.length;
                n++, i += 4
              ) {
                var o = e[n];
                "big" === t
                  ? ((r[i] = o >>> 24),
                    (r[i + 1] = (o >>> 16) & 255),
                    (r[i + 2] = (o >>> 8) & 255),
                    (r[i + 3] = 255 & o))
                  : ((r[i + 3] = o >>> 24),
                    (r[i + 2] = (o >>> 16) & 255),
                    (r[i + 1] = (o >>> 8) & 255),
                    (r[i] = 255 & o));
              }
              return r;
            }),
            (t.rotr32 = function (e, t) {
              return (e >>> t) | (e << (32 - t));
            }),
            (t.rotl32 = function (e, t) {
              return (e << t) | (e >>> (32 - t));
            }),
            (t.sum32 = function (e, t) {
              return (e + t) >>> 0;
            }),
            (t.sum32_3 = function (e, t, r) {
              return (e + t + r) >>> 0;
            }),
            (t.sum32_4 = function (e, t, r, n) {
              return (e + t + r + n) >>> 0;
            }),
            (t.sum32_5 = function (e, t, r, n, i) {
              return (e + t + r + n + i) >>> 0;
            }),
            (t.sum64 = function (e, t, r, n) {
              var i = e[t],
                o = (n + e[t + 1]) >>> 0,
                a = (o < n ? 1 : 0) + r + i;
              (e[t] = a >>> 0), (e[t + 1] = o);
            }),
            (t.sum64_hi = function (e, t, r, n) {
              return (((t + n) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
            }),
            (t.sum64_lo = function (e, t, r, n) {
              return (t + n) >>> 0;
            }),
            (t.sum64_4_hi = function (e, t, r, n, i, o, a, s) {
              var f = 0,
                c = t;
              return (
                (f += (c = (c + n) >>> 0) < t ? 1 : 0),
                (f += (c = (c + o) >>> 0) < o ? 1 : 0),
                (e + r + i + a + (f += (c = (c + s) >>> 0) < s ? 1 : 0)) >>> 0
              );
            }),
            (t.sum64_4_lo = function (e, t, r, n, i, o, a, s) {
              return (t + n + o + s) >>> 0;
            }),
            (t.sum64_5_hi = function (e, t, r, n, i, o, a, s, f, c) {
              var u = 0,
                d = t;
              return (
                (u += (d = (d + n) >>> 0) < t ? 1 : 0),
                (u += (d = (d + o) >>> 0) < o ? 1 : 0),
                (u += (d = (d + s) >>> 0) < s ? 1 : 0),
                (e + r + i + a + f + (u += (d = (d + c) >>> 0) < c ? 1 : 0)) >>>
                  0
              );
            }),
            (t.sum64_5_lo = function (e, t, r, n, i, o, a, s, f, c) {
              return (t + n + o + s + c) >>> 0;
            }),
            (t.rotr64_hi = function (e, t, r) {
              return ((t << (32 - r)) | (e >>> r)) >>> 0;
            }),
            (t.rotr64_lo = function (e, t, r) {
              return ((e << (32 - r)) | (t >>> r)) >>> 0;
            }),
            (t.shr64_hi = function (e, t, r) {
              return e >>> r;
            }),
            (t.shr64_lo = function (e, t, r) {
              return ((e << (32 - r)) | (t >>> r)) >>> 0;
            });
        },
        812: (e, t, r) => {
          "use strict";
          var n = r(9e3),
            i = r(179),
            o = r(882);
          function a(e) {
            if (!(this instanceof a)) return new a(e);
            (this.hash = e.hash),
              (this.predResist = !!e.predResist),
              (this.outLen = this.hash.outSize),
              (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
              (this._reseed = null),
              (this.reseedInterval = null),
              (this.K = null),
              (this.V = null);
            var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
              r = i.toArray(e.nonce, e.nonceEnc || "hex"),
              n = i.toArray(e.pers, e.persEnc || "hex");
            o(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
              this._init(t, r, n);
          }
          (e.exports = a),
            (a.prototype._init = function (e, t, r) {
              var n = e.concat(t).concat(r);
              (this.K = new Array(this.outLen / 8)),
                (this.V = new Array(this.outLen / 8));
              for (var i = 0; i < this.V.length; i++)
                (this.K[i] = 0), (this.V[i] = 1);
              this._update(n),
                (this._reseed = 1),
                (this.reseedInterval = 281474976710656);
            }),
            (a.prototype._hmac = function () {
              return new n.hmac(this.hash, this.K);
            }),
            (a.prototype._update = function (e) {
              var t = this._hmac().update(this.V).update([0]);
              e && (t = t.update(e)),
                (this.K = t.digest()),
                (this.V = this._hmac().update(this.V).digest()),
                e &&
                  ((this.K = this._hmac()
                    .update(this.V)
                    .update([1])
                    .update(e)
                    .digest()),
                  (this.V = this._hmac().update(this.V).digest()));
            }),
            (a.prototype.reseed = function (e, t, r, n) {
              "string" != typeof t && ((n = r), (r = t), (t = null)),
                (e = i.toArray(e, t)),
                (r = i.toArray(r, n)),
                o(
                  e.length >= this.minEntropy / 8,
                  "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
                ),
                this._update(e.concat(r || [])),
                (this._reseed = 1);
            }),
            (a.prototype.generate = function (e, t, r, n) {
              if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
              "string" != typeof t && ((n = r), (r = t), (t = null)),
                r && ((r = i.toArray(r, n || "hex")), this._update(r));
              for (var o = []; o.length < e; )
                (this.V = this._hmac().update(this.V).digest()),
                  (o = o.concat(this.V));
              var a = o.slice(0, e);
              return this._update(r), this._reseed++, i.encode(a, t);
            });
        },
        2608: (e, t) => {
          (t.read = function (e, t, r, n, i) {
            var o,
              a,
              s = 8 * i - n - 1,
              f = (1 << s) - 1,
              c = f >> 1,
              u = -7,
              d = r ? i - 1 : 0,
              h = r ? -1 : 1,
              l = e[t + d];
            for (
              d += h, o = l & ((1 << -u) - 1), l >>= -u, u += s;
              u > 0;
              o = 256 * o + e[t + d], d += h, u -= 8
            );
            for (
              a = o & ((1 << -u) - 1), o >>= -u, u += n;
              u > 0;
              a = 256 * a + e[t + d], d += h, u -= 8
            );
            if (0 === o) o = 1 - c;
            else {
              if (o === f) return a ? NaN : (1 / 0) * (l ? -1 : 1);
              (a += Math.pow(2, n)), (o -= c);
            }
            return (l ? -1 : 1) * a * Math.pow(2, o - n);
          }),
            (t.write = function (e, t, r, n, i, o) {
              var a,
                s,
                f,
                c = 8 * o - i - 1,
                u = (1 << c) - 1,
                d = u >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = n ? 0 : o - 1,
                p = n ? 1 : -1,
                b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((s = isNaN(t) ? 1 : 0), (a = u))
                    : ((a = Math.floor(Math.log(t) / Math.LN2)),
                      t * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                      (t += a + d >= 1 ? h / f : h * Math.pow(2, 1 - d)) * f >=
                        2 && (a++, (f /= 2)),
                      a + d >= u
                        ? ((s = 0), (a = u))
                        : a + d >= 1
                        ? ((s = (t * f - 1) * Math.pow(2, i)), (a += d))
                        : ((s = t * Math.pow(2, d - 1) * Math.pow(2, i)),
                          (a = 0)));
                i >= 8;
                e[r + l] = 255 & s, l += p, s /= 256, i -= 8
              );
              for (
                a = (a << i) | s, c += i;
                c > 0;
                e[r + l] = 255 & a, l += p, a /= 256, c -= 8
              );
              e[r + l - p] |= 128 * b;
            });
        },
        2111: (e) => {
          "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function () {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        },
        4043: (e, t, r) => {
          "use strict";
          var n = r(6686)(),
            i = r(7737)("Object.prototype.toString"),
            o = function (e) {
              return (
                !(n && e && "object" == typeof e && Symbol.toStringTag in e) &&
                "[object Arguments]" === i(e)
              );
            },
            a = function (e) {
              return (
                !!o(e) ||
                (null !== e &&
                  "object" == typeof e &&
                  "number" == typeof e.length &&
                  e.length >= 0 &&
                  "[object Array]" !== i(e) &&
                  "[object Function]" === i(e.callee))
              );
            },
            s = (function () {
              return o(arguments);
            })();
          (o.isLegacyArguments = a), (e.exports = s ? o : a);
        },
        3765: (e) => {
          "use strict";
          var t,
            r,
            n = Function.prototype.toString,
            i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
          if (
            "function" == typeof i &&
            "function" == typeof Object.defineProperty
          )
            try {
              (t = Object.defineProperty({}, "length", {
                get: function () {
                  throw r;
                },
              })),
                (r = {}),
                i(
                  function () {
                    throw 42;
                  },
                  null,
                  t
                );
            } catch (e) {
              e !== r && (i = null);
            }
          else i = null;
          var o = /^\s*class\b/,
            a = function (e) {
              try {
                var t = n.call(e);
                return o.test(t);
              } catch (e) {
                return !1;
              }
            },
            s = function (e) {
              try {
                return !a(e) && (n.call(e), !0);
              } catch (e) {
                return !1;
              }
            },
            f = Object.prototype.toString,
            c = "function" == typeof Symbol && !!Symbol.toStringTag,
            u = !(0 in [,]),
            d = function () {
              return !1;
            };
          if ("object" == typeof document) {
            var h = document.all;
            f.call(h) === f.call(document.all) &&
              (d = function (e) {
                if ((u || !e) && (void 0 === e || "object" == typeof e))
                  try {
                    var t = f.call(e);
                    return (
                      ("[object HTMLAllCollection]" === t ||
                        "[object HTML document.all class]" === t ||
                        "[object HTMLCollection]" === t ||
                        "[object Object]" === t) &&
                      null == e("")
                    );
                  } catch (e) {}
                return !1;
              });
          }
          e.exports = i
            ? function (e) {
                if (d(e)) return !0;
                if (!e) return !1;
                if ("function" != typeof e && "object" != typeof e) return !1;
                try {
                  i(e, null, t);
                } catch (e) {
                  if (e !== r) return !1;
                }
                return !a(e) && s(e);
              }
            : function (e) {
                if (d(e)) return !0;
                if (!e) return !1;
                if ("function" != typeof e && "object" != typeof e) return !1;
                if (c) return s(e);
                if (a(e)) return !1;
                var t = f.call(e);
                return (
                  !(
                    "[object Function]" !== t &&
                    "[object GeneratorFunction]" !== t &&
                    !/^\[object HTML/.test(t)
                  ) && s(e)
                );
              };
        },
        6936: (e, t, r) => {
          "use strict";
          var n,
            i = Object.prototype.toString,
            o = Function.prototype.toString,
            a = /^\s*(?:function)?\*/,
            s = r(6686)(),
            f = Object.getPrototypeOf;
          e.exports = function (e) {
            if ("function" != typeof e) return !1;
            if (a.test(o.call(e))) return !0;
            if (!s) return "[object GeneratorFunction]" === i.call(e);
            if (!f) return !1;
            if (void 0 === n) {
              var t = (function () {
                if (!s) return !1;
                try {
                  return Function("return function*() {}")();
                } catch (e) {}
              })();
              n = !!t && f(t);
            }
            return f(e) === n;
          };
        },
        6421: (e, t, r) => {
          "use strict";
          var n = r(7025),
            i = r(3206),
            o = r(7737),
            a = o("Object.prototype.toString"),
            s = r(6686)(),
            f = r(1455),
            c = "undefined" == typeof globalThis ? r.g : globalThis,
            u = i(),
            d =
              o("Array.prototype.indexOf", !0) ||
              function (e, t) {
                for (var r = 0; r < e.length; r += 1) if (e[r] === t) return r;
                return -1;
              },
            h = o("String.prototype.slice"),
            l = {},
            p = Object.getPrototypeOf;
          s &&
            f &&
            p &&
            n(u, function (e) {
              var t = new c[e]();
              if (Symbol.toStringTag in t) {
                var r = p(t),
                  n = f(r, Symbol.toStringTag);
                if (!n) {
                  var i = p(r);
                  n = f(i, Symbol.toStringTag);
                }
                l[e] = n.get;
              }
            }),
            (e.exports = function (e) {
              if (!e || "object" != typeof e) return !1;
              if (!s || !(Symbol.toStringTag in e)) {
                var t = h(a(e), 8, -1);
                return d(u, t) > -1;
              }
              return (
                !!f &&
                (function (e) {
                  var t = !1;
                  return (
                    n(l, function (r, n) {
                      if (!t)
                        try {
                          t = r.call(e) === n;
                        } catch (e) {}
                    }),
                    t
                  );
                })(e)
              );
            });
        },
        1214: (e, t, r) => {
          e.exports = r(8731)(r(9964));
        },
        8731: (e, t, r) => {
          const n = r(4511),
            i = r(4052);
          e.exports = function (e) {
            const t = n(e),
              r = i(e);
            return function (e, n) {
              switch ("string" == typeof e ? e.toLowerCase() : e) {
                case "keccak224":
                  return new t(1152, 448, null, 224, n);
                case "keccak256":
                  return new t(1088, 512, null, 256, n);
                case "keccak384":
                  return new t(832, 768, null, 384, n);
                case "keccak512":
                  return new t(576, 1024, null, 512, n);
                case "sha3-224":
                  return new t(1152, 448, 6, 224, n);
                case "sha3-256":
                  return new t(1088, 512, 6, 256, n);
                case "sha3-384":
                  return new t(832, 768, 6, 384, n);
                case "sha3-512":
                  return new t(576, 1024, 6, 512, n);
                case "shake128":
                  return new r(1344, 256, 31, n);
                case "shake256":
                  return new r(1088, 512, 31, n);
                default:
                  throw new Error("Invald algorithm: " + e);
              }
            };
          };
        },
        4511: (e, t, r) => {
          var n = r(5291).Buffer;
          const { Transform: i } = r(6310);
          e.exports = (e) =>
            (class t extends i {
              constructor(t, r, n, i, o) {
                super(o),
                  (this._rate = t),
                  (this._capacity = r),
                  (this._delimitedSuffix = n),
                  (this._hashBitLength = i),
                  (this._options = o),
                  (this._state = new e()),
                  this._state.initialize(t, r),
                  (this._finalized = !1);
              }
              _transform(e, t, r) {
                let n = null;
                try {
                  this.update(e, t);
                } catch (e) {
                  n = e;
                }
                r(n);
              }
              _flush(e) {
                let t = null;
                try {
                  this.push(this.digest());
                } catch (e) {
                  t = e;
                }
                e(t);
              }
              update(e, t) {
                if (!n.isBuffer(e) && "string" != typeof e)
                  throw new TypeError("Data must be a string or a buffer");
                if (this._finalized) throw new Error("Digest already called");
                return (
                  n.isBuffer(e) || (e = n.from(e, t)),
                  this._state.absorb(e),
                  this
                );
              }
              digest(e) {
                if (this._finalized) throw new Error("Digest already called");
                (this._finalized = !0),
                  this._delimitedSuffix &&
                    this._state.absorbLastFewBits(this._delimitedSuffix);
                let t = this._state.squeeze(this._hashBitLength / 8);
                return (
                  void 0 !== e && (t = t.toString(e)), this._resetState(), t
                );
              }
              _resetState() {
                return this._state.initialize(this._rate, this._capacity), this;
              }
              _clone() {
                const e = new t(
                  this._rate,
                  this._capacity,
                  this._delimitedSuffix,
                  this._hashBitLength,
                  this._options
                );
                return (
                  this._state.copy(e._state),
                  (e._finalized = this._finalized),
                  e
                );
              }
            });
        },
        4052: (e, t, r) => {
          var n = r(5291).Buffer;
          const { Transform: i } = r(6310);
          e.exports = (e) =>
            (class t extends i {
              constructor(t, r, n, i) {
                super(i),
                  (this._rate = t),
                  (this._capacity = r),
                  (this._delimitedSuffix = n),
                  (this._options = i),
                  (this._state = new e()),
                  this._state.initialize(t, r),
                  (this._finalized = !1);
              }
              _transform(e, t, r) {
                let n = null;
                try {
                  this.update(e, t);
                } catch (e) {
                  n = e;
                }
                r(n);
              }
              _flush() {}
              _read(e) {
                this.push(this.squeeze(e));
              }
              update(e, t) {
                if (!n.isBuffer(e) && "string" != typeof e)
                  throw new TypeError("Data must be a string or a buffer");
                if (this._finalized) throw new Error("Squeeze already called");
                return (
                  n.isBuffer(e) || (e = n.from(e, t)),
                  this._state.absorb(e),
                  this
                );
              }
              squeeze(e, t) {
                this._finalized ||
                  ((this._finalized = !0),
                  this._state.absorbLastFewBits(this._delimitedSuffix));
                let r = this._state.squeeze(e);
                return void 0 !== t && (r = r.toString(t)), r;
              }
              _resetState() {
                return this._state.initialize(this._rate, this._capacity), this;
              }
              _clone() {
                const e = new t(
                  this._rate,
                  this._capacity,
                  this._delimitedSuffix,
                  this._options
                );
                return (
                  this._state.copy(e._state),
                  (e._finalized = this._finalized),
                  e
                );
              }
            });
        },
        7926: (e, t) => {
          const r = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ];
          t.p1600 = function (e) {
            for (let t = 0; t < 24; ++t) {
              const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
              let l = d ^ ((o << 1) | (a >>> 31)),
                p = h ^ ((a << 1) | (o >>> 31));
              const b = e[0] ^ l,
                y = e[1] ^ p,
                g = e[10] ^ l,
                m = e[11] ^ p,
                v = e[20] ^ l,
                w = e[21] ^ p,
                _ = e[30] ^ l,
                S = e[31] ^ p,
                E = e[40] ^ l,
                A = e[41] ^ p;
              (l = n ^ ((s << 1) | (f >>> 31))),
                (p = i ^ ((f << 1) | (s >>> 31)));
              const M = e[2] ^ l,
                k = e[3] ^ p,
                O = e[12] ^ l,
                I = e[13] ^ p,
                C = e[22] ^ l,
                R = e[23] ^ p,
                P = e[32] ^ l,
                x = e[33] ^ p,
                B = e[42] ^ l,
                T = e[43] ^ p;
              (l = o ^ ((c << 1) | (u >>> 31))),
                (p = a ^ ((u << 1) | (c >>> 31)));
              const j = e[4] ^ l,
                D = e[5] ^ p,
                L = e[14] ^ l,
                N = e[15] ^ p,
                U = e[24] ^ l,
                q = e[25] ^ p,
                z = e[34] ^ l,
                F = e[35] ^ p,
                W = e[44] ^ l,
                K = e[45] ^ p;
              (l = s ^ ((d << 1) | (h >>> 31))),
                (p = f ^ ((h << 1) | (d >>> 31)));
              const H = e[6] ^ l,
                V = e[7] ^ p,
                G = e[16] ^ l,
                $ = e[17] ^ p,
                X = e[26] ^ l,
                J = e[27] ^ p,
                Y = e[36] ^ l,
                Z = e[37] ^ p,
                Q = e[46] ^ l,
                ee = e[47] ^ p;
              (l = c ^ ((n << 1) | (i >>> 31))),
                (p = u ^ ((i << 1) | (n >>> 31)));
              const te = e[8] ^ l,
                re = e[9] ^ p,
                ne = e[18] ^ l,
                ie = e[19] ^ p,
                oe = e[28] ^ l,
                ae = e[29] ^ p,
                se = e[38] ^ l,
                fe = e[39] ^ p,
                ce = e[48] ^ l,
                ue = e[49] ^ p,
                de = b,
                he = y,
                le = (m << 4) | (g >>> 28),
                pe = (g << 4) | (m >>> 28),
                be = (v << 3) | (w >>> 29),
                ye = (w << 3) | (v >>> 29),
                ge = (S << 9) | (_ >>> 23),
                me = (_ << 9) | (S >>> 23),
                ve = (E << 18) | (A >>> 14),
                we = (A << 18) | (E >>> 14),
                _e = (M << 1) | (k >>> 31),
                Se = (k << 1) | (M >>> 31),
                Ee = (I << 12) | (O >>> 20),
                Ae = (O << 12) | (I >>> 20),
                Me = (C << 10) | (R >>> 22),
                ke = (R << 10) | (C >>> 22),
                Oe = (x << 13) | (P >>> 19),
                Ie = (P << 13) | (x >>> 19),
                Ce = (B << 2) | (T >>> 30),
                Re = (T << 2) | (B >>> 30),
                Pe = (D << 30) | (j >>> 2),
                xe = (j << 30) | (D >>> 2),
                Be = (L << 6) | (N >>> 26),
                Te = (N << 6) | (L >>> 26),
                je = (q << 11) | (U >>> 21),
                De = (U << 11) | (q >>> 21),
                Le = (z << 15) | (F >>> 17),
                Ne = (F << 15) | (z >>> 17),
                Ue = (K << 29) | (W >>> 3),
                qe = (W << 29) | (K >>> 3),
                ze = (H << 28) | (V >>> 4),
                Fe = (V << 28) | (H >>> 4),
                We = ($ << 23) | (G >>> 9),
                Ke = (G << 23) | ($ >>> 9),
                He = (X << 25) | (J >>> 7),
                Ve = (J << 25) | (X >>> 7),
                Ge = (Y << 21) | (Z >>> 11),
                $e = (Z << 21) | (Y >>> 11),
                Xe = (ee << 24) | (Q >>> 8),
                Je = (Q << 24) | (ee >>> 8),
                Ye = (te << 27) | (re >>> 5),
                Ze = (re << 27) | (te >>> 5),
                Qe = (ne << 20) | (ie >>> 12),
                et = (ie << 20) | (ne >>> 12),
                tt = (ae << 7) | (oe >>> 25),
                rt = (oe << 7) | (ae >>> 25),
                nt = (se << 8) | (fe >>> 24),
                it = (fe << 8) | (se >>> 24),
                ot = (ce << 14) | (ue >>> 18),
                at = (ue << 14) | (ce >>> 18);
              (e[0] = de ^ (~Ee & je)),
                (e[1] = he ^ (~Ae & De)),
                (e[10] = ze ^ (~Qe & be)),
                (e[11] = Fe ^ (~et & ye)),
                (e[20] = _e ^ (~Be & He)),
                (e[21] = Se ^ (~Te & Ve)),
                (e[30] = Ye ^ (~le & Me)),
                (e[31] = Ze ^ (~pe & ke)),
                (e[40] = Pe ^ (~We & tt)),
                (e[41] = xe ^ (~Ke & rt)),
                (e[2] = Ee ^ (~je & Ge)),
                (e[3] = Ae ^ (~De & $e)),
                (e[12] = Qe ^ (~be & Oe)),
                (e[13] = et ^ (~ye & Ie)),
                (e[22] = Be ^ (~He & nt)),
                (e[23] = Te ^ (~Ve & it)),
                (e[32] = le ^ (~Me & Le)),
                (e[33] = pe ^ (~ke & Ne)),
                (e[42] = We ^ (~tt & ge)),
                (e[43] = Ke ^ (~rt & me)),
                (e[4] = je ^ (~Ge & ot)),
                (e[5] = De ^ (~$e & at)),
                (e[14] = be ^ (~Oe & Ue)),
                (e[15] = ye ^ (~Ie & qe)),
                (e[24] = He ^ (~nt & ve)),
                (e[25] = Ve ^ (~it & we)),
                (e[34] = Me ^ (~Le & Xe)),
                (e[35] = ke ^ (~Ne & Je)),
                (e[44] = tt ^ (~ge & Ce)),
                (e[45] = rt ^ (~me & Re)),
                (e[6] = Ge ^ (~ot & de)),
                (e[7] = $e ^ (~at & he)),
                (e[16] = Oe ^ (~Ue & ze)),
                (e[17] = Ie ^ (~qe & Fe)),
                (e[26] = nt ^ (~ve & _e)),
                (e[27] = it ^ (~we & Se)),
                (e[36] = Le ^ (~Xe & Ye)),
                (e[37] = Ne ^ (~Je & Ze)),
                (e[46] = ge ^ (~Ce & Pe)),
                (e[47] = me ^ (~Re & xe)),
                (e[8] = ot ^ (~de & Ee)),
                (e[9] = at ^ (~he & Ae)),
                (e[18] = Ue ^ (~ze & Qe)),
                (e[19] = qe ^ (~Fe & et)),
                (e[28] = ve ^ (~_e & Be)),
                (e[29] = we ^ (~Se & Te)),
                (e[38] = Xe ^ (~Ye & le)),
                (e[39] = Je ^ (~Ze & pe)),
                (e[48] = Ce ^ (~Pe & We)),
                (e[49] = Re ^ (~xe & Ke)),
                (e[0] ^= r[2 * t]),
                (e[1] ^= r[2 * t + 1]);
            }
          };
        },
        9964: (e, t, r) => {
          var n = r(5291).Buffer;
          const i = r(7926);
          function o() {
            (this.state = [
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0,
            ]),
              (this.blockSize = null),
              (this.count = 0),
              (this.squeezing = !1);
          }
          (o.prototype.initialize = function (e, t) {
            for (let e = 0; e < 50; ++e) this.state[e] = 0;
            (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
          }),
            (o.prototype.absorb = function (e) {
              for (let t = 0; t < e.length; ++t)
                (this.state[~~(this.count / 4)] ^=
                  e[t] << ((this.count % 4) * 8)),
                  (this.count += 1),
                  this.count === this.blockSize &&
                    (i.p1600(this.state), (this.count = 0));
            }),
            (o.prototype.absorbLastFewBits = function (e) {
              (this.state[~~(this.count / 4)] ^= e << ((this.count % 4) * 8)),
                0 != (128 & e) &&
                  this.count === this.blockSize - 1 &&
                  i.p1600(this.state),
                (this.state[~~((this.blockSize - 1) / 4)] ^=
                  128 << (((this.blockSize - 1) % 4) * 8)),
                i.p1600(this.state),
                (this.count = 0),
                (this.squeezing = !0);
            }),
            (o.prototype.squeeze = function (e) {
              this.squeezing || this.absorbLastFewBits(1);
              const t = n.alloc(e);
              for (let r = 0; r < e; ++r)
                (t[r] =
                  (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                  255),
                  (this.count += 1),
                  this.count === this.blockSize &&
                    (i.p1600(this.state), (this.count = 0));
              return t;
            }),
            (o.prototype.copy = function (e) {
              for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
              (e.blockSize = this.blockSize),
                (e.count = this.count),
                (e.squeezing = this.squeezing);
            }),
            (e.exports = o);
        },
        2005: (e, t, r) => {
          e = r.nmd(e);
          var n = "__lodash_hash_undefined__",
            i = 9007199254740991,
            o = "[object Arguments]",
            a = "[object AsyncFunction]",
            s = "[object Function]",
            f = "[object GeneratorFunction]",
            c = "[object Null]",
            u = "[object Object]",
            d = "[object Proxy]",
            h = "[object Undefined]",
            l = /^\[object .+?Constructor\]$/,
            p = /^(?:0|[1-9]\d*)$/,
            b = {};
          (b["[object Float32Array]"] =
            b["[object Float64Array]"] =
            b["[object Int8Array]"] =
            b["[object Int16Array]"] =
            b["[object Int32Array]"] =
            b["[object Uint8Array]"] =
            b["[object Uint8ClampedArray]"] =
            b["[object Uint16Array]"] =
            b["[object Uint32Array]"] =
              !0),
            (b[o] =
              b["[object Array]"] =
              b["[object ArrayBuffer]"] =
              b["[object Boolean]"] =
              b["[object DataView]"] =
              b["[object Date]"] =
              b["[object Error]"] =
              b[s] =
              b["[object Map]"] =
              b["[object Number]"] =
              b[u] =
              b["[object RegExp]"] =
              b["[object Set]"] =
              b["[object String]"] =
              b["[object WeakMap]"] =
                !1);
          var y,
            g,
            m,
            v = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
            w =
              "object" == typeof self && self && self.Object === Object && self,
            _ = v || w || Function("return this")(),
            S = t && !t.nodeType && t,
            E = S && e && !e.nodeType && e,
            A = E && E.exports === S,
            M = A && v.process,
            k = (function () {
              try {
                return (
                  (E && E.require && E.require("util").types) ||
                  (M && M.binding && M.binding("util"))
                );
              } catch (e) {}
            })(),
            O = k && k.isTypedArray,
            I = Array.prototype,
            C = Function.prototype,
            R = Object.prototype,
            P = _["__core-js_shared__"],
            x = C.toString,
            B = R.hasOwnProperty,
            T = (y = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + y
              : "",
            j = R.toString,
            D = x.call(Object),
            L = RegExp(
              "^" +
                x
                  .call(B)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            N = A ? _.Buffer : void 0,
            U = _.Symbol,
            q = _.Uint8Array,
            z =
              (N && N.allocUnsafe,
              (g = Object.getPrototypeOf),
              (m = Object),
              function (e) {
                return g(m(e));
              }),
            F = Object.create,
            W = R.propertyIsEnumerable,
            K = I.splice,
            H = U ? U.toStringTag : void 0,
            V = (function () {
              try {
                var e = le(Object, "defineProperty");
                return e({}, "", {}), e;
              } catch (e) {}
            })(),
            G = N ? N.isBuffer : void 0,
            $ = Math.max,
            X = Date.now,
            J = le(_, "Map"),
            Y = le(Object, "create"),
            Z = (function () {
              function e() {}
              return function (t) {
                if (!Me(t)) return {};
                if (F) return F(t);
                e.prototype = t;
                var r = new e();
                return (e.prototype = void 0), r;
              };
            })();
          function Q(e) {
            var t = -1,
              r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function ee(e) {
            var t = -1,
              r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function te(e) {
            var t = -1,
              r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function re(e) {
            var t = (this.__data__ = new ee(e));
            this.size = t.size;
          }
          function ne(e, t, r) {
            ((void 0 !== r && !me(e[t], r)) || (void 0 === r && !(t in e))) &&
              ae(e, t, r);
          }
          function ie(e, t, r) {
            var n = e[t];
            (B.call(e, t) && me(n, r) && (void 0 !== r || t in e)) ||
              ae(e, t, r);
          }
          function oe(e, t) {
            for (var r = e.length; r--; ) if (me(e[r][0], t)) return r;
            return -1;
          }
          function ae(e, t, r) {
            "__proto__" == t && V
              ? V(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: r,
                  writable: !0,
                })
              : (e[t] = r);
          }
          (Q.prototype.clear = function () {
            (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
          }),
            (Q.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (Q.prototype.get = function (e) {
              var t = this.__data__;
              if (Y) {
                var r = t[e];
                return r === n ? void 0 : r;
              }
              return B.call(t, e) ? t[e] : void 0;
            }),
            (Q.prototype.has = function (e) {
              var t = this.__data__;
              return Y ? void 0 !== t[e] : B.call(t, e);
            }),
            (Q.prototype.set = function (e, t) {
              var r = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (r[e] = Y && void 0 === t ? n : t),
                this
              );
            }),
            (ee.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (ee.prototype.delete = function (e) {
              var t = this.__data__,
                r = oe(t, e);
              return !(
                r < 0 ||
                (r == t.length - 1 ? t.pop() : K.call(t, r, 1), --this.size, 0)
              );
            }),
            (ee.prototype.get = function (e) {
              var t = this.__data__,
                r = oe(t, e);
              return r < 0 ? void 0 : t[r][1];
            }),
            (ee.prototype.has = function (e) {
              return oe(this.__data__, e) > -1;
            }),
            (ee.prototype.set = function (e, t) {
              var r = this.__data__,
                n = oe(r, e);
              return (
                n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
              );
            }),
            (te.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Q(),
                  map: new (J || ee)(),
                  string: new Q(),
                });
            }),
            (te.prototype.delete = function (e) {
              var t = he(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (te.prototype.get = function (e) {
              return he(this, e).get(e);
            }),
            (te.prototype.has = function (e) {
              return he(this, e).has(e);
            }),
            (te.prototype.set = function (e, t) {
              var r = he(this, e),
                n = r.size;
              return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
            }),
            (re.prototype.clear = function () {
              (this.__data__ = new ee()), (this.size = 0);
            }),
            (re.prototype.delete = function (e) {
              var t = this.__data__,
                r = t.delete(e);
              return (this.size = t.size), r;
            }),
            (re.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (re.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (re.prototype.set = function (e, t) {
              var r = this.__data__;
              if (r instanceof ee) {
                var n = r.__data__;
                if (!J || n.length < 199)
                  return n.push([e, t]), (this.size = ++r.size), this;
                r = this.__data__ = new te(n);
              }
              return r.set(e, t), (this.size = r.size), this;
            });
          var se = function (e, t, r) {
            for (var n = -1, i = Object(e), o = r(e), a = o.length; a--; ) {
              var s = o[++n];
              if (!1 === t(i[s], s, i)) break;
            }
            return e;
          };
          function fe(e) {
            return null == e
              ? void 0 === e
                ? h
                : c
              : H && H in Object(e)
              ? (function (e) {
                  var t = B.call(e, H),
                    r = e[H];
                  try {
                    e[H] = void 0;
                    var n = !0;
                  } catch (e) {}
                  var i = j.call(e);
                  return n && (t ? (e[H] = r) : delete e[H]), i;
                })(e)
              : (function (e) {
                  return j.call(e);
                })(e);
          }
          function ce(e) {
            return ke(e) && fe(e) == o;
          }
          function ue(e, t, r, n, i) {
            e !== t &&
              se(
                t,
                function (o, a) {
                  if ((i || (i = new re()), Me(o)))
                    !(function (e, t, r, n, i, o, a) {
                      var s = ye(e, r),
                        f = ye(t, r),
                        c = a.get(f);
                      if (c) ne(e, r, c);
                      else {
                        var d,
                          h,
                          l,
                          p,
                          b,
                          y = o ? o(s, f, r + "", e, t, a) : void 0,
                          g = void 0 === y;
                        if (g) {
                          var m = we(f),
                            v = !m && Se(f),
                            w = !m && !v && Oe(f);
                          (y = f),
                            m || v || w
                              ? we(s)
                                ? (y = s)
                                : ke((b = s)) && _e(b)
                                ? (y = (function (e, t) {
                                    var r = -1,
                                      n = e.length;
                                    for (t || (t = Array(n)); ++r < n; )
                                      t[r] = e[r];
                                    return t;
                                  })(s))
                                : v
                                ? ((g = !1),
                                  (y = (function (e, t) {
                                    return e.slice();
                                  })(f)))
                                : w
                                ? ((g = !1),
                                  (p = new (l = (d = f).buffer).constructor(
                                    l.byteLength
                                  )),
                                  new q(p).set(new q(l)),
                                  (h = p),
                                  (y = new d.constructor(
                                    h,
                                    d.byteOffset,
                                    d.length
                                  )))
                                : (y = [])
                              : (function (e) {
                                  if (!ke(e) || fe(e) != u) return !1;
                                  var t = z(e);
                                  if (null === t) return !0;
                                  var r =
                                    B.call(t, "constructor") && t.constructor;
                                  return (
                                    "function" == typeof r &&
                                    r instanceof r &&
                                    x.call(r) == D
                                  );
                                })(f) || ve(f)
                              ? ((y = s),
                                ve(s)
                                  ? (y = (function (e) {
                                      return (function (e, t, r, n) {
                                        var i = !r;
                                        r || (r = {});
                                        for (
                                          var o = -1, a = t.length;
                                          ++o < a;

                                        ) {
                                          var s = t[o],
                                            f = void 0;
                                          void 0 === f && (f = e[s]),
                                            i ? ae(r, s, f) : ie(r, s, f);
                                        }
                                        return r;
                                      })(e, Ie(e));
                                    })(s))
                                  : (Me(s) && !Ee(s)) ||
                                    (y = (function (e) {
                                      return "function" !=
                                        typeof e.constructor || be(e)
                                        ? {}
                                        : Z(z(e));
                                    })(f)))
                              : (g = !1);
                        }
                        g && (a.set(f, y), i(y, f, n, o, a), a.delete(f)),
                          ne(e, r, y);
                      }
                    })(e, t, a, r, ue, n, i);
                  else {
                    var s = n ? n(ye(e, a), o, a + "", e, t, i) : void 0;
                    void 0 === s && (s = o), ne(e, a, s);
                  }
                },
                Ie
              );
          }
          var de = V
            ? function (e, t) {
                return V(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value:
                    ((r = t),
                    function () {
                      return r;
                    }),
                  writable: !0,
                });
                var r;
              }
            : Pe;
          function he(e, t) {
            var r,
              n,
              i = e.__data__;
            return (
              "string" == (n = typeof (r = t)) ||
              "number" == n ||
              "symbol" == n ||
              "boolean" == n
                ? "__proto__" !== r
                : null === r
            )
              ? i["string" == typeof t ? "string" : "hash"]
              : i.map;
          }
          function le(e, t) {
            var r = (function (e, t) {
              return null == e ? void 0 : e[t];
            })(e, t);
            return (function (e) {
              return (
                !(
                  !Me(e) ||
                  (function (e) {
                    return !!T && T in e;
                  })(e)
                ) &&
                (Ee(e) ? L : l).test(
                  (function (e) {
                    if (null != e) {
                      try {
                        return x.call(e);
                      } catch (e) {}
                      try {
                        return e + "";
                      } catch (e) {}
                    }
                    return "";
                  })(e)
                )
              );
            })(r)
              ? r
              : void 0;
          }
          function pe(e, t) {
            var r = typeof e;
            return (
              !!(t = null == t ? i : t) &&
              ("number" == r || ("symbol" != r && p.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function be(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || R);
          }
          function ye(e, t) {
            if (
              ("constructor" !== t || "function" != typeof e[t]) &&
              "__proto__" != t
            )
              return e[t];
          }
          var ge = (function (e) {
            var t = 0,
              r = 0;
            return function () {
              var n = X(),
                i = 16 - (n - r);
              if (((r = n), i > 0)) {
                if (++t >= 800) return arguments[0];
              } else t = 0;
              return e.apply(void 0, arguments);
            };
          })(de);
          function me(e, t) {
            return e === t || (e != e && t != t);
          }
          var ve = ce(
              (function () {
                return arguments;
              })()
            )
              ? ce
              : function (e) {
                  return ke(e) && B.call(e, "callee") && !W.call(e, "callee");
                },
            we = Array.isArray;
          function _e(e) {
            return null != e && Ae(e.length) && !Ee(e);
          }
          var Se =
            G ||
            function () {
              return !1;
            };
          function Ee(e) {
            if (!Me(e)) return !1;
            var t = fe(e);
            return t == s || t == f || t == a || t == d;
          }
          function Ae(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
          }
          function Me(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function ke(e) {
            return null != e && "object" == typeof e;
          }
          var Oe = O
            ? (function (e) {
                return function (t) {
                  return e(t);
                };
              })(O)
            : function (e) {
                return ke(e) && Ae(e.length) && !!b[fe(e)];
              };
          function Ie(e) {
            return _e(e)
              ? (function (e, t) {
                  var r = we(e),
                    n = !r && ve(e),
                    i = !r && !n && Se(e),
                    o = !r && !n && !i && Oe(e),
                    a = r || n || i || o,
                    s = a
                      ? (function (e, t) {
                          for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                          return n;
                        })(e.length, String)
                      : [],
                    f = s.length;
                  for (var c in e)
                    (!t && !B.call(e, c)) ||
                      (a &&
                        ("length" == c ||
                          (i && ("offset" == c || "parent" == c)) ||
                          (o &&
                            ("buffer" == c ||
                              "byteLength" == c ||
                              "byteOffset" == c)) ||
                          pe(c, f))) ||
                      s.push(c);
                  return s;
                })(e, !0)
              : (function (e) {
                  if (!Me(e))
                    return (function (e) {
                      var t = [];
                      if (null != e) for (var r in Object(e)) t.push(r);
                      return t;
                    })(e);
                  var t = be(e),
                    r = [];
                  for (var n in e)
                    ("constructor" != n || (!t && B.call(e, n))) && r.push(n);
                  return r;
                })(e);
          }
          var Ce,
            Re =
              ((Ce = function (e, t, r) {
                ue(e, t, r);
              }),
              (function (e, t) {
                return ge(
                  (function (e, t, r) {
                    return (
                      (t = $(void 0 === t ? e.length - 1 : t, 0)),
                      function () {
                        for (
                          var n = arguments,
                            i = -1,
                            o = $(n.length - t, 0),
                            a = Array(o);
                          ++i < o;

                        )
                          a[i] = n[t + i];
                        i = -1;
                        for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
                        return (
                          (s[t] = r(a)),
                          (function (e, t, r) {
                            switch (r.length) {
                              case 0:
                                return e.call(t);
                              case 1:
                                return e.call(t, r[0]);
                              case 2:
                                return e.call(t, r[0], r[1]);
                              case 3:
                                return e.call(t, r[0], r[1], r[2]);
                            }
                            return e.apply(t, r);
                          })(e, this, s)
                        );
                      }
                    );
                  })(e, t, Pe),
                  e + ""
                );
              })(function (e, t) {
                var r = -1,
                  n = t.length,
                  i = n > 1 ? t[n - 1] : void 0,
                  o = n > 2 ? t[2] : void 0;
                for (
                  i =
                    Ce.length > 3 && "function" == typeof i ? (n--, i) : void 0,
                    o &&
                      (function (e, t, r) {
                        if (!Me(r)) return !1;
                        var n = typeof t;
                        return (
                          !!("number" == n
                            ? _e(r) && pe(t, r.length)
                            : "string" == n && (t in r)) && me(r[t], e)
                        );
                      })(t[0], t[1], o) &&
                      ((i = n < 3 ? void 0 : i), (n = 1)),
                    e = Object(e);
                  ++r < n;

                ) {
                  var a = t[r];
                  a && Ce(e, a, r);
                }
                return e;
              }));
          function Pe(e) {
            return e;
          }
          e.exports = Re;
        },
        3108: function (e, t, r) {
          var n, i;
          !(function (o, a) {
            "use strict";
            (n = function () {
              var e = function () {},
                t = "undefined",
                r =
                  typeof window !== t &&
                  typeof window.navigator !== t &&
                  /Trident\/|MSIE /.test(window.navigator.userAgent),
                n = ["trace", "debug", "info", "warn", "error"];
              function i(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind) return r.bind(e);
                try {
                  return Function.prototype.bind.call(r, e);
                } catch (t) {
                  return function () {
                    return Function.prototype.apply.apply(r, [e, arguments]);
                  };
                }
              }
              function o() {
                console.log &&
                  (console.log.apply
                    ? console.log.apply(console, arguments)
                    : Function.prototype.apply.apply(console.log, [
                        console,
                        arguments,
                      ])),
                  console.trace && console.trace();
              }
              function a(t, r) {
                for (var i = 0; i < n.length; i++) {
                  var o = n[i];
                  this[o] = i < t ? e : this.methodFactory(o, t, r);
                }
                this.log = this.debug;
              }
              function s(e, r, n) {
                return function () {
                  typeof console !== t &&
                    (a.call(this, r, n), this[e].apply(this, arguments));
                };
              }
              function f(n, a, f) {
                return (
                  (function (n) {
                    return (
                      "debug" === n && (n = "log"),
                      typeof console !== t &&
                        ("trace" === n && r
                          ? o
                          : void 0 !== console[n]
                          ? i(console, n)
                          : void 0 !== console.log
                          ? i(console, "log")
                          : e)
                    );
                  })(n) || s.apply(this, arguments)
                );
              }
              function c(e, r, i) {
                var o,
                  s = this;
                r = null == r ? "WARN" : r;
                var c = "loglevel";
                function u() {
                  var e;
                  if (typeof window !== t && c) {
                    try {
                      e = window.localStorage[c];
                    } catch (e) {}
                    if (typeof e === t)
                      try {
                        var r = window.document.cookie,
                          n = r.indexOf(encodeURIComponent(c) + "=");
                        -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1]);
                      } catch (e) {}
                    return void 0 === s.levels[e] && (e = void 0), e;
                  }
                }
                "string" == typeof e
                  ? (c += ":" + e)
                  : "symbol" == typeof e && (c = void 0),
                  (s.name = e),
                  (s.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5,
                  }),
                  (s.methodFactory = i || f),
                  (s.getLevel = function () {
                    return o;
                  }),
                  (s.setLevel = function (r, i) {
                    if (
                      ("string" == typeof r &&
                        void 0 !== s.levels[r.toUpperCase()] &&
                        (r = s.levels[r.toUpperCase()]),
                      !("number" == typeof r && r >= 0 && r <= s.levels.SILENT))
                    )
                      throw "log.setLevel() called with invalid level: " + r;
                    if (
                      ((o = r),
                      !1 !== i &&
                        (function (e) {
                          var r = (n[e] || "silent").toUpperCase();
                          if (typeof window !== t && c) {
                            try {
                              return void (window.localStorage[c] = r);
                            } catch (e) {}
                            try {
                              window.document.cookie =
                                encodeURIComponent(c) + "=" + r + ";";
                            } catch (e) {}
                          }
                        })(r),
                      a.call(s, r, e),
                      typeof console === t && r < s.levels.SILENT)
                    )
                      return "No console available for logging";
                  }),
                  (s.setDefaultLevel = function (e) {
                    (r = e), u() || s.setLevel(e, !1);
                  }),
                  (s.resetLevel = function () {
                    s.setLevel(r, !1),
                      (function () {
                        if (typeof window !== t && c) {
                          try {
                            return void window.localStorage.removeItem(c);
                          } catch (e) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(c) +
                              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                          } catch (e) {}
                        }
                      })();
                  }),
                  (s.enableAll = function (e) {
                    s.setLevel(s.levels.TRACE, e);
                  }),
                  (s.disableAll = function (e) {
                    s.setLevel(s.levels.SILENT, e);
                  });
                var d = u();
                null == d && (d = r), s.setLevel(d, !1);
              }
              var u = new c(),
                d = {};
              u.getLogger = function (e) {
                if (("symbol" != typeof e && "string" != typeof e) || "" === e)
                  throw new TypeError(
                    "You must supply a name when creating a logger."
                  );
                var t = d[e];
                return (
                  t || (t = d[e] = new c(e, u.getLevel(), u.methodFactory)), t
                );
              };
              var h = typeof window !== t ? window.log : void 0;
              return (
                (u.noConflict = function () {
                  return (
                    typeof window !== t && window.log === u && (window.log = h),
                    u
                  );
                }),
                (u.getLoggers = function () {
                  return d;
                }),
                (u.default = u),
                u
              );
            }),
              void 0 === (i = n.call(t, r, t, e)) || (e.exports = i);
          })();
        },
        8054: (e, t, r) => {
          "use strict";
          var n = r(2111),
            i = r(8262),
            o = r(707).Buffer,
            a = new Array(16);
          function s() {
            i.call(this, 64),
              (this._a = 1732584193),
              (this._b = 4023233417),
              (this._c = 2562383102),
              (this._d = 271733878);
          }
          function f(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          function c(e, t, r, n, i, o, a) {
            return (f((e + ((t & r) | (~t & n)) + i + o) | 0, a) + t) | 0;
          }
          function u(e, t, r, n, i, o, a) {
            return (f((e + ((t & n) | (r & ~n)) + i + o) | 0, a) + t) | 0;
          }
          function d(e, t, r, n, i, o, a) {
            return (f((e + (t ^ r ^ n) + i + o) | 0, a) + t) | 0;
          }
          function h(e, t, r, n, i, o, a) {
            return (f((e + (r ^ (t | ~n)) + i + o) | 0, a) + t) | 0;
          }
          n(s, i),
            (s.prototype._update = function () {
              for (var e = a, t = 0; t < 16; ++t)
                e[t] = this._block.readInt32LE(4 * t);
              var r = this._a,
                n = this._b,
                i = this._c,
                o = this._d;
              (r = c(r, n, i, o, e[0], 3614090360, 7)),
                (o = c(o, r, n, i, e[1], 3905402710, 12)),
                (i = c(i, o, r, n, e[2], 606105819, 17)),
                (n = c(n, i, o, r, e[3], 3250441966, 22)),
                (r = c(r, n, i, o, e[4], 4118548399, 7)),
                (o = c(o, r, n, i, e[5], 1200080426, 12)),
                (i = c(i, o, r, n, e[6], 2821735955, 17)),
                (n = c(n, i, o, r, e[7], 4249261313, 22)),
                (r = c(r, n, i, o, e[8], 1770035416, 7)),
                (o = c(o, r, n, i, e[9], 2336552879, 12)),
                (i = c(i, o, r, n, e[10], 4294925233, 17)),
                (n = c(n, i, o, r, e[11], 2304563134, 22)),
                (r = c(r, n, i, o, e[12], 1804603682, 7)),
                (o = c(o, r, n, i, e[13], 4254626195, 12)),
                (i = c(i, o, r, n, e[14], 2792965006, 17)),
                (r = u(
                  r,
                  (n = c(n, i, o, r, e[15], 1236535329, 22)),
                  i,
                  o,
                  e[1],
                  4129170786,
                  5
                )),
                (o = u(o, r, n, i, e[6], 3225465664, 9)),
                (i = u(i, o, r, n, e[11], 643717713, 14)),
                (n = u(n, i, o, r, e[0], 3921069994, 20)),
                (r = u(r, n, i, o, e[5], 3593408605, 5)),
                (o = u(o, r, n, i, e[10], 38016083, 9)),
                (i = u(i, o, r, n, e[15], 3634488961, 14)),
                (n = u(n, i, o, r, e[4], 3889429448, 20)),
                (r = u(r, n, i, o, e[9], 568446438, 5)),
                (o = u(o, r, n, i, e[14], 3275163606, 9)),
                (i = u(i, o, r, n, e[3], 4107603335, 14)),
                (n = u(n, i, o, r, e[8], 1163531501, 20)),
                (r = u(r, n, i, o, e[13], 2850285829, 5)),
                (o = u(o, r, n, i, e[2], 4243563512, 9)),
                (i = u(i, o, r, n, e[7], 1735328473, 14)),
                (r = d(
                  r,
                  (n = u(n, i, o, r, e[12], 2368359562, 20)),
                  i,
                  o,
                  e[5],
                  4294588738,
                  4
                )),
                (o = d(o, r, n, i, e[8], 2272392833, 11)),
                (i = d(i, o, r, n, e[11], 1839030562, 16)),
                (n = d(n, i, o, r, e[14], 4259657740, 23)),
                (r = d(r, n, i, o, e[1], 2763975236, 4)),
                (o = d(o, r, n, i, e[4], 1272893353, 11)),
                (i = d(i, o, r, n, e[7], 4139469664, 16)),
                (n = d(n, i, o, r, e[10], 3200236656, 23)),
                (r = d(r, n, i, o, e[13], 681279174, 4)),
                (o = d(o, r, n, i, e[0], 3936430074, 11)),
                (i = d(i, o, r, n, e[3], 3572445317, 16)),
                (n = d(n, i, o, r, e[6], 76029189, 23)),
                (r = d(r, n, i, o, e[9], 3654602809, 4)),
                (o = d(o, r, n, i, e[12], 3873151461, 11)),
                (i = d(i, o, r, n, e[15], 530742520, 16)),
                (r = h(
                  r,
                  (n = d(n, i, o, r, e[2], 3299628645, 23)),
                  i,
                  o,
                  e[0],
                  4096336452,
                  6
                )),
                (o = h(o, r, n, i, e[7], 1126891415, 10)),
                (i = h(i, o, r, n, e[14], 2878612391, 15)),
                (n = h(n, i, o, r, e[5], 4237533241, 21)),
                (r = h(r, n, i, o, e[12], 1700485571, 6)),
                (o = h(o, r, n, i, e[3], 2399980690, 10)),
                (i = h(i, o, r, n, e[10], 4293915773, 15)),
                (n = h(n, i, o, r, e[1], 2240044497, 21)),
                (r = h(r, n, i, o, e[8], 1873313359, 6)),
                (o = h(o, r, n, i, e[15], 4264355552, 10)),
                (i = h(i, o, r, n, e[6], 2734768916, 15)),
                (n = h(n, i, o, r, e[13], 1309151649, 21)),
                (r = h(r, n, i, o, e[4], 4149444226, 6)),
                (o = h(o, r, n, i, e[11], 3174756917, 10)),
                (i = h(i, o, r, n, e[2], 718787259, 15)),
                (n = h(n, i, o, r, e[9], 3951481745, 21)),
                (this._a = (this._a + r) | 0),
                (this._b = (this._b + n) | 0),
                (this._c = (this._c + i) | 0),
                (this._d = (this._d + o) | 0);
            }),
            (s.prototype._digest = function () {
              (this._block[this._blockOffset++] = 128),
                this._blockOffset > 56 &&
                  (this._block.fill(0, this._blockOffset, 64),
                  this._update(),
                  (this._blockOffset = 0)),
                this._block.fill(0, this._blockOffset, 56),
                this._block.writeUInt32LE(this._length[0], 56),
                this._block.writeUInt32LE(this._length[1], 60),
                this._update();
              var e = o.allocUnsafe(16);
              return (
                e.writeInt32LE(this._a, 0),
                e.writeInt32LE(this._b, 4),
                e.writeInt32LE(this._c, 8),
                e.writeInt32LE(this._d, 12),
                e
              );
            }),
            (e.exports = s);
        },
        2805: (e, t, r) => {
          var n = r(2693),
            i = r(5552);
          function o(e) {
            this.rand = e || new i.Rand();
          }
          (e.exports = o),
            (o.create = function (e) {
              return new o(e);
            }),
            (o.prototype._randbelow = function (e) {
              var t = e.bitLength(),
                r = Math.ceil(t / 8);
              do {
                var i = new n(this.rand.generate(r));
              } while (i.cmp(e) >= 0);
              return i;
            }),
            (o.prototype._randrange = function (e, t) {
              var r = t.sub(e);
              return e.add(this._randbelow(r));
            }),
            (o.prototype.test = function (e, t, r) {
              var i = e.bitLength(),
                o = n.mont(e),
                a = new n(1).toRed(o);
              t || (t = Math.max(1, (i / 48) | 0));
              for (var s = e.subn(1), f = 0; !s.testn(f); f++);
              for (var c = e.shrn(f), u = s.toRed(o); t > 0; t--) {
                var d = this._randrange(new n(2), s);
                r && r(d);
                var h = d.toRed(o).redPow(c);
                if (0 !== h.cmp(a) && 0 !== h.cmp(u)) {
                  for (var l = 1; l < f; l++) {
                    if (0 === (h = h.redSqr()).cmp(a)) return !1;
                    if (0 === h.cmp(u)) break;
                  }
                  if (l === f) return !1;
                }
              }
              return !0;
            }),
            (o.prototype.getDivisor = function (e, t) {
              var r = e.bitLength(),
                i = n.mont(e),
                o = new n(1).toRed(i);
              t || (t = Math.max(1, (r / 48) | 0));
              for (var a = e.subn(1), s = 0; !a.testn(s); s++);
              for (var f = e.shrn(s), c = a.toRed(i); t > 0; t--) {
                var u = this._randrange(new n(2), a),
                  d = e.gcd(u);
                if (0 !== d.cmpn(1)) return d;
                var h = u.toRed(i).redPow(f);
                if (0 !== h.cmp(o) && 0 !== h.cmp(c)) {
                  for (var l = 1; l < s; l++) {
                    if (0 === (h = h.redSqr()).cmp(o))
                      return h.fromRed().subn(1).gcd(e);
                    if (0 === h.cmp(c)) break;
                  }
                  if (l === s) return (h = h.redSqr()).fromRed().subn(1).gcd(e);
                }
              }
              return !1;
            });
        },
        882: (e) => {
          function t(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          (e.exports = t),
            (t.equal = function (e, t, r) {
              if (e != t)
                throw new Error(r || "Assertion failed: " + e + " != " + t);
            });
        },
        179: (e, t) => {
          "use strict";
          var r = t;
          function n(e) {
            return 1 === e.length ? "0" + e : e;
          }
          function i(e) {
            for (var t = "", r = 0; r < e.length; r++)
              t += n(e[r].toString(16));
            return t;
          }
          (r.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" != typeof e) {
              for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
              return r;
            }
            if ("hex" === t)
              for (
                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                  (e = "0" + e),
                  n = 0;
                n < e.length;
                n += 2
              )
                r.push(parseInt(e[n] + e[n + 1], 16));
            else
              for (n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  a = 255 & i;
                o ? r.push(o, a) : r.push(a);
              }
            return r;
          }),
            (r.zero2 = n),
            (r.toHex = i),
            (r.encode = function (e, t) {
              return "hex" === t ? i(e) : e;
            });
        },
        1744: (e, t, r) => {
          var n = r(1993);
          function i(e) {
            var t = function () {
              return t.called
                ? t.value
                : ((t.called = !0), (t.value = e.apply(this, arguments)));
            };
            return (t.called = !1), t;
          }
          function o(e) {
            var t = function () {
                if (t.called) throw new Error(t.onceError);
                return (t.called = !0), (t.value = e.apply(this, arguments));
              },
              r = e.name || "Function wrapped with `once`";
            return (
              (t.onceError = r + " shouldn't be called more than once"),
              (t.called = !1),
              t
            );
          }
          (e.exports = n(i)),
            (e.exports.strict = n(o)),
            (i.proto = i(function () {
              Object.defineProperty(Function.prototype, "once", {
                value: function () {
                  return i(this);
                },
                configurable: !0,
              }),
                Object.defineProperty(Function.prototype, "onceStrict", {
                  value: function () {
                    return o(this);
                  },
                  configurable: !0,
                });
            }));
        },
        3329: (e, t, r) => {
          "use strict";
          var n = r(74);
          t.certificate = r(4239);
          var i = n.define("RSAPrivateKey", function () {
            this.seq().obj(
              this.key("version").int(),
              this.key("modulus").int(),
              this.key("publicExponent").int(),
              this.key("privateExponent").int(),
              this.key("prime1").int(),
              this.key("prime2").int(),
              this.key("exponent1").int(),
              this.key("exponent2").int(),
              this.key("coefficient").int()
            );
          });
          t.RSAPrivateKey = i;
          var o = n.define("RSAPublicKey", function () {
            this.seq().obj(
              this.key("modulus").int(),
              this.key("publicExponent").int()
            );
          });
          t.RSAPublicKey = o;
          var a = n.define("SubjectPublicKeyInfo", function () {
            this.seq().obj(
              this.key("algorithm").use(s),
              this.key("subjectPublicKey").bitstr()
            );
          });
          t.PublicKey = a;
          var s = n.define("AlgorithmIdentifier", function () {
              this.seq().obj(
                this.key("algorithm").objid(),
                this.key("none").null_().optional(),
                this.key("curve").objid().optional(),
                this.key("params")
                  .seq()
                  .obj(
                    this.key("p").int(),
                    this.key("q").int(),
                    this.key("g").int()
                  )
                  .optional()
              );
            }),
            f = n.define("PrivateKeyInfo", function () {
              this.seq().obj(
                this.key("version").int(),
                this.key("algorithm").use(s),
                this.key("subjectPrivateKey").octstr()
              );
            });
          t.PrivateKey = f;
          var c = n.define("EncryptedPrivateKeyInfo", function () {
            this.seq().obj(
              this.key("algorithm")
                .seq()
                .obj(
                  this.key("id").objid(),
                  this.key("decrypt")
                    .seq()
                    .obj(
                      this.key("kde")
                        .seq()
                        .obj(
                          this.key("id").objid(),
                          this.key("kdeparams")
                            .seq()
                            .obj(
                              this.key("salt").octstr(),
                              this.key("iters").int()
                            )
                        ),
                      this.key("cipher")
                        .seq()
                        .obj(this.key("algo").objid(), this.key("iv").octstr())
                    )
                ),
              this.key("subjectPrivateKey").octstr()
            );
          });
          t.EncryptedPrivateKey = c;
          var u = n.define("DSAPrivateKey", function () {
            this.seq().obj(
              this.key("version").int(),
              this.key("p").int(),
              this.key("q").int(),
              this.key("g").int(),
              this.key("pub_key").int(),
              this.key("priv_key").int()
            );
          });
          (t.DSAPrivateKey = u),
            (t.DSAparam = n.define("DSAparam", function () {
              this.int();
            }));
          var d = n.define("ECPrivateKey", function () {
            this.seq().obj(
              this.key("version").int(),
              this.key("privateKey").octstr(),
              this.key("parameters").optional().explicit(0).use(h),
              this.key("publicKey").optional().explicit(1).bitstr()
            );
          });
          t.ECPrivateKey = d;
          var h = n.define("ECParameters", function () {
            this.choice({ namedCurve: this.objid() });
          });
          t.signature = n.define("signature", function () {
            this.seq().obj(this.key("r").int(), this.key("s").int());
          });
        },
        4239: (e, t, r) => {
          "use strict";
          var n = r(74),
            i = n.define("Time", function () {
              this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime(),
              });
            }),
            o = n.define("AttributeTypeValue", function () {
              this.seq().obj(this.key("type").objid(), this.key("value").any());
            }),
            a = n.define("AlgorithmIdentifier", function () {
              this.seq().obj(
                this.key("algorithm").objid(),
                this.key("parameters").optional(),
                this.key("curve").objid().optional()
              );
            }),
            s = n.define("SubjectPublicKeyInfo", function () {
              this.seq().obj(
                this.key("algorithm").use(a),
                this.key("subjectPublicKey").bitstr()
              );
            }),
            f = n.define("RelativeDistinguishedName", function () {
              this.setof(o);
            }),
            c = n.define("RDNSequence", function () {
              this.seqof(f);
            }),
            u = n.define("Name", function () {
              this.choice({ rdnSequence: this.use(c) });
            }),
            d = n.define("Validity", function () {
              this.seq().obj(
                this.key("notBefore").use(i),
                this.key("notAfter").use(i)
              );
            }),
            h = n.define("Extension", function () {
              this.seq().obj(
                this.key("extnID").objid(),
                this.key("critical").bool().def(!1),
                this.key("extnValue").octstr()
              );
            }),
            l = n.define("TBSCertificate", function () {
              this.seq().obj(
                this.key("version").explicit(0).int().optional(),
                this.key("serialNumber").int(),
                this.key("signature").use(a),
                this.key("issuer").use(u),
                this.key("validity").use(d),
                this.key("subject").use(u),
                this.key("subjectPublicKeyInfo").use(s),
                this.key("issuerUniqueID").implicit(1).bitstr().optional(),
                this.key("subjectUniqueID").implicit(2).bitstr().optional(),
                this.key("extensions").explicit(3).seqof(h).optional()
              );
            }),
            p = n.define("X509Certificate", function () {
              this.seq().obj(
                this.key("tbsCertificate").use(l),
                this.key("signatureAlgorithm").use(a),
                this.key("signatureValue").bitstr()
              );
            });
          e.exports = p;
        },
        3475: (e, t, r) => {
          var n =
              /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
            i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
            o =
              /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
            a = r(4642),
            s = r(1908),
            f = r(707).Buffer;
          e.exports = function (e, t) {
            var r,
              c = e.toString(),
              u = c.match(n);
            if (u) {
              var d = "aes" + u[1],
                h = f.from(u[2], "hex"),
                l = f.from(u[3].replace(/[\r\n]/g, ""), "base64"),
                p = a(t, h.slice(0, 8), parseInt(u[1], 10)).key,
                b = [],
                y = s.createDecipheriv(d, p, h);
              b.push(y.update(l)), b.push(y.final()), (r = f.concat(b));
            } else {
              var g = c.match(o);
              r = f.from(g[2].replace(/[\r\n]/g, ""), "base64");
            }
            return { tag: c.match(i)[1], data: r };
          };
        },
        6126: (e, t, r) => {
          var n = r(3329),
            i = r(4057),
            o = r(3475),
            a = r(1908),
            s = r(5778),
            f = r(707).Buffer;
          function c(e) {
            var t;
            "object" != typeof e ||
              f.isBuffer(e) ||
              ((t = e.passphrase), (e = e.key)),
              "string" == typeof e && (e = f.from(e));
            var r,
              c,
              u = o(e, t),
              d = u.tag,
              h = u.data;
            switch (d) {
              case "CERTIFICATE":
                c = n.certificate.decode(h, "der").tbsCertificate
                  .subjectPublicKeyInfo;
              case "PUBLIC KEY":
                switch (
                  (c || (c = n.PublicKey.decode(h, "der")),
                  (r = c.algorithm.algorithm.join(".")))
                ) {
                  case "1.2.840.113549.1.1.1":
                    return n.RSAPublicKey.decode(
                      c.subjectPublicKey.data,
                      "der"
                    );
                  case "1.2.840.10045.2.1":
                    return (
                      (c.subjectPrivateKey = c.subjectPublicKey),
                      { type: "ec", data: c }
                    );
                  case "1.2.840.10040.4.1":
                    return (
                      (c.algorithm.params.pub_key = n.DSAparam.decode(
                        c.subjectPublicKey.data,
                        "der"
                      )),
                      { type: "dsa", data: c.algorithm.params }
                    );
                  default:
                    throw new Error("unknown key id " + r);
                }
              case "ENCRYPTED PRIVATE KEY":
                h = (function (e, t) {
                  var r = e.algorithm.decrypt.kde.kdeparams.salt,
                    n = parseInt(
                      e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                      10
                    ),
                    o = i[e.algorithm.decrypt.cipher.algo.join(".")],
                    c = e.algorithm.decrypt.cipher.iv,
                    u = e.subjectPrivateKey,
                    d = parseInt(o.split("-")[1], 10) / 8,
                    h = s.pbkdf2Sync(t, r, n, d, "sha1"),
                    l = a.createDecipheriv(o, h, c),
                    p = [];
                  return p.push(l.update(u)), p.push(l.final()), f.concat(p);
                })((h = n.EncryptedPrivateKey.decode(h, "der")), t);
              case "PRIVATE KEY":
                switch (
                  (r = (c = n.PrivateKey.decode(
                    h,
                    "der"
                  )).algorithm.algorithm.join("."))
                ) {
                  case "1.2.840.113549.1.1.1":
                    return n.RSAPrivateKey.decode(c.subjectPrivateKey, "der");
                  case "1.2.840.10045.2.1":
                    return {
                      curve: c.algorithm.curve,
                      privateKey: n.ECPrivateKey.decode(
                        c.subjectPrivateKey,
                        "der"
                      ).privateKey,
                    };
                  case "1.2.840.10040.4.1":
                    return (
                      (c.algorithm.params.priv_key = n.DSAparam.decode(
                        c.subjectPrivateKey,
                        "der"
                      )),
                      { type: "dsa", params: c.algorithm.params }
                    );
                  default:
                    throw new Error("unknown key id " + r);
                }
              case "RSA PUBLIC KEY":
                return n.RSAPublicKey.decode(h, "der");
              case "RSA PRIVATE KEY":
                return n.RSAPrivateKey.decode(h, "der");
              case "DSA PRIVATE KEY":
                return {
                  type: "dsa",
                  params: n.DSAPrivateKey.decode(h, "der"),
                };
              case "EC PRIVATE KEY":
                return {
                  curve: (h = n.ECPrivateKey.decode(h, "der")).parameters.value,
                  privateKey: h.privateKey,
                };
              default:
                throw new Error("unknown key type " + d);
            }
          }
          (e.exports = c), (c.signature = n.signature);
        },
        5778: (e, t, r) => {
          (t.pbkdf2 = r(6562)), (t.pbkdf2Sync = r(4591));
        },
        6562: (e, t, r) => {
          var n,
            i,
            o = r(707).Buffer,
            a = r(3839),
            s = r(6539),
            f = r(4591),
            c = r(1918),
            u = r.g.crypto && r.g.crypto.subtle,
            d = {
              sha: "SHA-1",
              "sha-1": "SHA-1",
              sha1: "SHA-1",
              sha256: "SHA-256",
              "sha-256": "SHA-256",
              sha384: "SHA-384",
              "sha-384": "SHA-384",
              "sha-512": "SHA-512",
              sha512: "SHA-512",
            },
            h = [];
          function l() {
            return (
              i ||
              (i =
                r.g.process && r.g.process.nextTick
                  ? r.g.process.nextTick
                  : r.g.queueMicrotask
                  ? r.g.queueMicrotask
                  : r.g.setImmediate
                  ? r.g.setImmediate
                  : r.g.setTimeout)
            );
          }
          function p(e, t, r, n, i) {
            return u
              .importKey("raw", e, { name: "PBKDF2" }, !1, ["deriveBits"])
              .then(function (e) {
                return u.deriveBits(
                  { name: "PBKDF2", salt: t, iterations: r, hash: { name: i } },
                  e,
                  n << 3
                );
              })
              .then(function (e) {
                return o.from(e);
              });
          }
          e.exports = function (e, t, i, b, y, g) {
            "function" == typeof y && ((g = y), (y = void 0));
            var m = d[(y = y || "sha1").toLowerCase()];
            if (m && "function" == typeof r.g.Promise) {
              if (
                (a(i, b),
                (e = c(e, s, "Password")),
                (t = c(t, s, "Salt")),
                "function" != typeof g)
              )
                throw new Error("No callback provided to pbkdf2");
              !(function (e, t) {
                e.then(
                  function (e) {
                    l()(function () {
                      t(null, e);
                    });
                  },
                  function (e) {
                    l()(function () {
                      t(e);
                    });
                  }
                );
              })(
                (function (e) {
                  if (r.g.process && !r.g.process.browser)
                    return Promise.resolve(!1);
                  if (!u || !u.importKey || !u.deriveBits)
                    return Promise.resolve(!1);
                  if (void 0 !== h[e]) return h[e];
                  var t = p((n = n || o.alloc(8)), n, 10, 128, e)
                    .then(function () {
                      return !0;
                    })
                    .catch(function () {
                      return !1;
                    });
                  return (h[e] = t), t;
                })(m).then(function (r) {
                  return r ? p(e, t, i, b, m) : f(e, t, i, b, y);
                }),
                g
              );
            } else
              l()(function () {
                var r;
                try {
                  r = f(e, t, i, b, y);
                } catch (e) {
                  return g(e);
                }
                g(null, r);
              });
          };
        },
        6539: (e, t, r) => {
          var n,
            i = r(3158);
          (n =
            r.g.process && r.g.process.browser
              ? "utf-8"
              : r.g.process && r.g.process.version
              ? parseInt(i.version.split(".")[0].slice(1), 10) >= 6
                ? "utf-8"
                : "binary"
              : "utf-8"),
            (e.exports = n);
        },
        3839: (e) => {
          var t = Math.pow(2, 30) - 1;
          e.exports = function (e, r) {
            if ("number" != typeof e)
              throw new TypeError("Iterations not a number");
            if (e < 0) throw new TypeError("Bad iterations");
            if ("number" != typeof r)
              throw new TypeError("Key length not a number");
            if (r < 0 || r > t || r != r) throw new TypeError("Bad key length");
          };
        },
        4591: (e, t, r) => {
          var n = r(414),
            i = r(4454),
            o = r(6065),
            a = r(707).Buffer,
            s = r(3839),
            f = r(6539),
            c = r(1918),
            u = a.alloc(128),
            d = {
              md5: 16,
              sha1: 20,
              sha224: 28,
              sha256: 32,
              sha384: 48,
              sha512: 64,
              rmd160: 20,
              ripemd160: 20,
            };
          function h(e, t, r) {
            var s = (function (e) {
                return "rmd160" === e || "ripemd160" === e
                  ? function (e) {
                      return new i().update(e).digest();
                    }
                  : "md5" === e
                  ? n
                  : function (t) {
                      return o(e).update(t).digest();
                    };
              })(e),
              f = "sha512" === e || "sha384" === e ? 128 : 64;
            t.length > f
              ? (t = s(t))
              : t.length < f && (t = a.concat([t, u], f));
            for (
              var c = a.allocUnsafe(f + d[e]),
                h = a.allocUnsafe(f + d[e]),
                l = 0;
              l < f;
              l++
            )
              (c[l] = 54 ^ t[l]), (h[l] = 92 ^ t[l]);
            var p = a.allocUnsafe(f + r + 4);
            c.copy(p, 0, 0, f),
              (this.ipad1 = p),
              (this.ipad2 = c),
              (this.opad = h),
              (this.alg = e),
              (this.blocksize = f),
              (this.hash = s),
              (this.size = d[e]);
          }
          (h.prototype.run = function (e, t) {
            return (
              e.copy(t, this.blocksize),
              this.hash(t).copy(this.opad, this.blocksize),
              this.hash(this.opad)
            );
          }),
            (e.exports = function (e, t, r, n, i) {
              s(r, n);
              var o = new h(
                  (i = i || "sha1"),
                  (e = c(e, f, "Password")),
                  (t = c(t, f, "Salt")).length
                ),
                u = a.allocUnsafe(n),
                l = a.allocUnsafe(t.length + 4);
              t.copy(l, 0, 0, t.length);
              for (
                var p = 0, b = d[i], y = Math.ceil(n / b), g = 1;
                g <= y;
                g++
              ) {
                l.writeUInt32BE(g, t.length);
                for (var m = o.run(l, o.ipad1), v = m, w = 1; w < r; w++) {
                  v = o.run(v, o.ipad2);
                  for (var _ = 0; _ < b; _++) m[_] ^= v[_];
                }
                m.copy(u, p), (p += b);
              }
              return u;
            });
        },
        1918: (e, t, r) => {
          var n = r(707).Buffer;
          e.exports = function (e, t, r) {
            if (n.isBuffer(e)) return e;
            if ("string" == typeof e) return n.from(e, t);
            if (ArrayBuffer.isView(e)) return n.from(e.buffer);
            throw new TypeError(
              r + " must be a string, a Buffer, a typed array or a DataView"
            );
          };
        },
        2072: (e, t, r) => {
          "use strict";
          var n = r(3158);
          void 0 === n ||
          !n.version ||
          0 === n.version.indexOf("v0.") ||
          (0 === n.version.indexOf("v1.") && 0 !== n.version.indexOf("v1.8."))
            ? (e.exports = {
                nextTick: function (e, t, r, i) {
                  if ("function" != typeof e)
                    throw new TypeError(
                      '"callback" argument must be a function'
                    );
                  var o,
                    a,
                    s = arguments.length;
                  switch (s) {
                    case 0:
                    case 1:
                      return n.nextTick(e);
                    case 2:
                      return n.nextTick(function () {
                        e.call(null, t);
                      });
                    case 3:
                      return n.nextTick(function () {
                        e.call(null, t, r);
                      });
                    case 4:
                      return n.nextTick(function () {
                        e.call(null, t, r, i);
                      });
                    default:
                      for (o = new Array(s - 1), a = 0; a < o.length; )
                        o[a++] = arguments[a];
                      return n.nextTick(function () {
                        e.apply(null, o);
                      });
                  }
                },
              })
            : (e.exports = n);
        },
        3158: (e) => {
          var t,
            r,
            n = (e.exports = {});
          function i() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function a(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === i || !t) && setTimeout)
              return (t = setTimeout), setTimeout(e, 0);
            try {
              return t(e, 0);
            } catch (r) {
              try {
                return t.call(null, e, 0);
              } catch (r) {
                return t.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              t = "function" == typeof setTimeout ? setTimeout : i;
            } catch (e) {
              t = i;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (e) {
              r = o;
            }
          })();
          var s,
            f = [],
            c = !1,
            u = -1;
          function d() {
            c &&
              s &&
              ((c = !1),
              s.length ? (f = s.concat(f)) : (u = -1),
              f.length && h());
          }
          function h() {
            if (!c) {
              var e = a(d);
              c = !0;
              for (var t = f.length; t; ) {
                for (s = f, f = []; ++u < t; ) s && s[u].run();
                (u = -1), (t = f.length);
              }
              (s = null),
                (c = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e);
                  if ((r === o || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(e);
                  try {
                    return r(e);
                  } catch (t) {
                    try {
                      return r.call(null, e);
                    } catch (t) {
                      return r.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function l(e, t) {
            (this.fun = e), (this.array = t);
          }
          function p() {}
          (n.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            f.push(new l(e, t)), 1 !== f.length || c || a(h);
          }),
            (l.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = p),
            (n.addListener = p),
            (n.once = p),
            (n.off = p),
            (n.removeListener = p),
            (n.removeAllListeners = p),
            (n.emit = p),
            (n.prependListener = p),
            (n.prependOnceListener = p),
            (n.listeners = function (e) {
              return [];
            }),
            (n.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (n.cwd = function () {
              return "/";
            }),
            (n.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (n.umask = function () {
              return 0;
            });
        },
        5250: (e, t, r) => {
          (t.publicEncrypt = r(9320)),
            (t.privateDecrypt = r(6095)),
            (t.privateEncrypt = function (e, r) {
              return t.publicEncrypt(e, r, !0);
            }),
            (t.publicDecrypt = function (e, r) {
              return t.privateDecrypt(e, r, !0);
            });
        },
        5458: (e, t, r) => {
          var n = r(3470),
            i = r(707).Buffer;
          function o(e) {
            var t = i.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t;
          }
          e.exports = function (e, t) {
            for (var r, a = i.alloc(0), s = 0; a.length < t; )
              (r = o(s++)),
                (a = i.concat([a, n("sha1").update(e).update(r).digest()]));
            return a.slice(0, t);
          };
        },
        6095: (e, t, r) => {
          var n = r(6126),
            i = r(5458),
            o = r(1505),
            a = r(2693),
            s = r(200),
            f = r(3470),
            c = r(9688),
            u = r(707).Buffer;
          e.exports = function (e, t, r) {
            var d;
            d = e.padding ? e.padding : r ? 1 : 4;
            var h,
              l = n(e),
              p = l.modulus.byteLength();
            if (t.length > p || new a(t).cmp(l.modulus) >= 0)
              throw new Error("decryption error");
            h = r ? c(new a(t), l) : s(t, l);
            var b = u.alloc(p - h.length);
            if (((h = u.concat([b, h], p)), 4 === d))
              return (function (e, t) {
                var r = e.modulus.byteLength(),
                  n = f("sha1").update(u.alloc(0)).digest(),
                  a = n.length;
                if (0 !== t[0]) throw new Error("decryption error");
                var s = t.slice(1, a + 1),
                  c = t.slice(a + 1),
                  d = o(s, i(c, a)),
                  h = o(c, i(d, r - a - 1));
                if (
                  (function (e, t) {
                    (e = u.from(e)), (t = u.from(t));
                    var r = 0,
                      n = e.length;
                    e.length !== t.length &&
                      (r++, (n = Math.min(e.length, t.length)));
                    for (var i = -1; ++i < n; ) r += e[i] ^ t[i];
                    return r;
                  })(n, h.slice(0, a))
                )
                  throw new Error("decryption error");
                for (var l = a; 0 === h[l]; ) l++;
                if (1 !== h[l++]) throw new Error("decryption error");
                return h.slice(l);
              })(l, h);
            if (1 === d)
              return (function (e, t, r) {
                for (var n = t.slice(0, 2), i = 2, o = 0; 0 !== t[i++]; )
                  if (i >= t.length) {
                    o++;
                    break;
                  }
                var a = t.slice(2, i - 1);
                if (
                  ((("0002" !== n.toString("hex") && !r) ||
                    ("0001" !== n.toString("hex") && r)) &&
                    o++,
                  a.length < 8 && o++,
                  o)
                )
                  throw new Error("decryption error");
                return t.slice(i);
              })(0, h, r);
            if (3 === d) return h;
            throw new Error("unknown padding");
          };
        },
        9320: (e, t, r) => {
          var n = r(6126),
            i = r(9631),
            o = r(3470),
            a = r(5458),
            s = r(1505),
            f = r(2693),
            c = r(9688),
            u = r(200),
            d = r(707).Buffer;
          e.exports = function (e, t, r) {
            var h;
            h = e.padding ? e.padding : r ? 1 : 4;
            var l,
              p = n(e);
            if (4 === h)
              l = (function (e, t) {
                var r = e.modulus.byteLength(),
                  n = t.length,
                  c = o("sha1").update(d.alloc(0)).digest(),
                  u = c.length,
                  h = 2 * u;
                if (n > r - h - 2) throw new Error("message too long");
                var l = d.alloc(r - n - h - 2),
                  p = r - u - 1,
                  b = i(u),
                  y = s(d.concat([c, l, d.alloc(1, 1), t], p), a(b, p)),
                  g = s(b, a(y, u));
                return new f(d.concat([d.alloc(1), g, y], r));
              })(p, t);
            else if (1 === h)
              l = (function (e, t, r) {
                var n,
                  o = t.length,
                  a = e.modulus.byteLength();
                if (o > a - 11) throw new Error("message too long");
                return (
                  (n = r
                    ? d.alloc(a - o - 3, 255)
                    : (function (e) {
                        for (
                          var t,
                            r = d.allocUnsafe(e),
                            n = 0,
                            o = i(2 * e),
                            a = 0;
                          n < e;

                        )
                          a === o.length && ((o = i(2 * e)), (a = 0)),
                            (t = o[a++]) && (r[n++] = t);
                        return r;
                      })(a - o - 3)),
                  new f(d.concat([d.from([0, r ? 1 : 2]), n, d.alloc(1), t], a))
                );
              })(p, t, r);
            else {
              if (3 !== h) throw new Error("unknown padding");
              if ((l = new f(t)).cmp(p.modulus) >= 0)
                throw new Error("data too long for modulus");
            }
            return r ? u(l, p) : c(l, p);
          };
        },
        9688: (e, t, r) => {
          var n = r(2693),
            i = r(707).Buffer;
          e.exports = function (e, t) {
            return i.from(
              e
                .toRed(n.mont(t.modulus))
                .redPow(new n(t.publicExponent))
                .fromRed()
                .toArray()
            );
          };
        },
        1505: (e) => {
          e.exports = function (e, t) {
            for (var r = e.length, n = -1; ++n < r; ) e[n] ^= t[n];
            return e;
          };
        },
        4303: (e, t, r) => {
          var n = r(3158),
            i = r(1744),
            o = r(9633),
            a = r(7876),
            s = function () {},
            f = /^v?\.0/.test(n.version),
            c = function (e) {
              return "function" == typeof e;
            },
            u = function (e) {
              e();
            },
            d = function (e, t) {
              return e.pipe(t);
            };
          e.exports = function () {
            var e,
              t = Array.prototype.slice.call(arguments),
              r = (c(t[t.length - 1] || s) && t.pop()) || s;
            if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
              throw new Error("pump requires two streams per minimum");
            var n = t.map(function (d, h) {
              var l = h < t.length - 1;
              return (function (e, t, r, n) {
                n = i(n);
                var u = !1;
                e.on("close", function () {
                  u = !0;
                }),
                  o(e, { readable: t, writable: r }, function (e) {
                    if (e) return n(e);
                    (u = !0), n();
                  });
                var d = !1;
                return function (t) {
                  if (!u && !d)
                    return (
                      (d = !0),
                      (function (e) {
                        return (
                          !!f &&
                          !!a &&
                          (e instanceof (a.ReadStream || s) ||
                            e instanceof (a.WriteStream || s)) &&
                          c(e.close)
                        );
                      })(e)
                        ? e.close(s)
                        : (function (e) {
                            return e.setHeader && c(e.abort);
                          })(e)
                        ? e.abort()
                        : c(e.destroy)
                        ? e.destroy()
                        : void n(t || new Error("stream was destroyed"))
                    );
                };
              })(d, l, h > 0, function (t) {
                e || (e = t), t && n.forEach(u), l || (n.forEach(u), r(e));
              });
            });
            return t.reduce(d);
          };
        },
        9631: (e, t, r) => {
          "use strict";
          var n = r(3158),
            i = 65536,
            o = r(707).Buffer,
            a = r.g.crypto || r.g.msCrypto;
          a && a.getRandomValues
            ? (e.exports = function (e, t) {
                if (e > 4294967295)
                  throw new RangeError("requested too many random bytes");
                var r = o.allocUnsafe(e);
                if (e > 0)
                  if (e > i)
                    for (var s = 0; s < e; s += i)
                      a.getRandomValues(r.slice(s, s + i));
                  else a.getRandomValues(r);
                return "function" == typeof t
                  ? n.nextTick(function () {
                      t(null, r);
                    })
                  : r;
              })
            : (e.exports = function () {
                throw new Error(
                  "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
                );
              });
        },
        6644: (e, t, r) => {
          "use strict";
          var n = r(3158);
          function i() {
            throw new Error(
              "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11"
            );
          }
          var o = r(707),
            a = r(9631),
            s = o.Buffer,
            f = o.kMaxLength,
            c = r.g.crypto || r.g.msCrypto,
            u = Math.pow(2, 32) - 1;
          function d(e, t) {
            if ("number" != typeof e || e != e)
              throw new TypeError("offset must be a number");
            if (e > u || e < 0) throw new TypeError("offset must be a uint32");
            if (e > f || e > t) throw new RangeError("offset out of range");
          }
          function h(e, t, r) {
            if ("number" != typeof e || e != e)
              throw new TypeError("size must be a number");
            if (e > u || e < 0) throw new TypeError("size must be a uint32");
            if (e + t > r || e > f) throw new RangeError("buffer too small");
          }
          function l(e, t, r, i) {
            if (n.browser) {
              var o = e.buffer,
                s = new Uint8Array(o, t, r);
              return (
                c.getRandomValues(s),
                i
                  ? void n.nextTick(function () {
                      i(null, e);
                    })
                  : e
              );
            }
            if (!i) return a(r).copy(e, t), e;
            a(r, function (r, n) {
              if (r) return i(r);
              n.copy(e, t), i(null, e);
            });
          }
          (c && c.getRandomValues) || !n.browser
            ? ((t.randomFill = function (e, t, n, i) {
                if (!(s.isBuffer(e) || e instanceof r.g.Uint8Array))
                  throw new TypeError(
                    '"buf" argument must be a Buffer or Uint8Array'
                  );
                if ("function" == typeof t) (i = t), (t = 0), (n = e.length);
                else if ("function" == typeof n) (i = n), (n = e.length - t);
                else if ("function" != typeof i)
                  throw new TypeError('"cb" argument must be a function');
                return d(t, e.length), h(n, t, e.length), l(e, t, n, i);
              }),
              (t.randomFillSync = function (e, t, n) {
                if (
                  (void 0 === t && (t = 0),
                  !(s.isBuffer(e) || e instanceof r.g.Uint8Array))
                )
                  throw new TypeError(
                    '"buf" argument must be a Buffer or Uint8Array'
                  );
                return (
                  d(t, e.length),
                  void 0 === n && (n = e.length - t),
                  h(n, t, e.length),
                  l(e, t, n)
                );
              }))
            : ((t.randomFill = i), (t.randomFillSync = i));
        },
        5386: (e) => {
          "use strict";
          var t = {};
          function r(e, r, n) {
            n || (n = Error);
            var i = (function (e) {
              var t, n;
              function i(t, n, i) {
                return (
                  e.call(
                    this,
                    (function (e, t, n) {
                      return "string" == typeof r ? r : r(e, t, n);
                    })(t, n, i)
                  ) || this
                );
              }
              return (
                (n = e),
                ((t = i).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                i
              );
            })(n);
            (i.prototype.name = n.name), (i.prototype.code = e), (t[e] = i);
          }
          function n(e, t) {
            if (Array.isArray(e)) {
              var r = e.length;
              return (
                (e = e.map(function (e) {
                  return String(e);
                })),
                r > 2
                  ? "one of "
                      .concat(t, " ")
                      .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
                  : 2 === r
                  ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
                  : "of ".concat(t, " ").concat(e[0])
              );
            }
            return "of ".concat(t, " ").concat(String(e));
          }
          r(
            "ERR_INVALID_OPT_VALUE",
            function (e, t) {
              return 'The value "' + t + '" is invalid for option "' + e + '"';
            },
            TypeError
          ),
            r(
              "ERR_INVALID_ARG_TYPE",
              function (e, t, r) {
                var i, o, a, s, f;
                if (
                  ("string" == typeof t &&
                  ((o = "not "), t.substr(0, o.length) === o)
                    ? ((i = "must not be"), (t = t.replace(/^not /, "")))
                    : (i = "must be"),
                  (function (e, t, r) {
                    return (
                      (void 0 === r || r > e.length) && (r = e.length),
                      e.substring(r - t.length, r) === t
                    );
                  })(e, " argument"))
                )
                  a = "The ".concat(e, " ").concat(i, " ").concat(n(t, "type"));
                else {
                  var c =
                    ("number" != typeof f && (f = 0),
                    f + ".".length > (s = e).length || -1 === s.indexOf(".", f)
                      ? "argument"
                      : "property");
                  a = 'The "'
                    .concat(e, '" ')
                    .concat(c, " ")
                    .concat(i, " ")
                    .concat(n(t, "type"));
                }
                return a + ". Received type ".concat(typeof r);
              },
              TypeError
            ),
            r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
            r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
              return "The " + e + " method is not implemented";
            }),
            r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
            r("ERR_STREAM_DESTROYED", function (e) {
              return "Cannot call " + e + " after a stream was destroyed";
            }),
            r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
            r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
            r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
            r(
              "ERR_STREAM_NULL_VALUES",
              "May not write null values to stream",
              TypeError
            ),
            r(
              "ERR_UNKNOWN_ENCODING",
              function (e) {
                return "Unknown encoding: " + e;
              },
              TypeError
            ),
            r(
              "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
              "stream.unshift() after end event"
            ),
            (e.exports.q = t);
        },
        7879: (e, t, r) => {
          "use strict";
          var n = r(3158),
            i =
              Object.keys ||
              function (e) {
                var t = [];
                for (var r in e) t.push(r);
                return t;
              };
          e.exports = u;
          var o = r(2070),
            a = r(2501);
          r(2111)(u, o);
          for (var s = i(a.prototype), f = 0; f < s.length; f++) {
            var c = s[f];
            u.prototype[c] || (u.prototype[c] = a.prototype[c]);
          }
          function u(e) {
            if (!(this instanceof u)) return new u(e);
            o.call(this, e),
              a.call(this, e),
              (this.allowHalfOpen = !0),
              e &&
                (!1 === e.readable && (this.readable = !1),
                !1 === e.writable && (this.writable = !1),
                !1 === e.allowHalfOpen &&
                  ((this.allowHalfOpen = !1), this.once("end", d)));
          }
          function d() {
            this._writableState.ended || n.nextTick(h, this);
          }
          function h(e) {
            e.end();
          }
          Object.defineProperty(u.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
            Object.defineProperty(u.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(u.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(u.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  this._readableState.destroyed &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = e),
                  (this._writableState.destroyed = e));
              },
            });
        },
        4100: (e, t, r) => {
          "use strict";
          e.exports = i;
          var n = r(6269);
          function i(e) {
            if (!(this instanceof i)) return new i(e);
            n.call(this, e);
          }
          r(2111)(i, n),
            (i.prototype._transform = function (e, t, r) {
              r(null, e);
            });
        },
        2070: (e, t, r) => {
          "use strict";
          var n,
            i = r(3158);
          (e.exports = M), (M.ReadableState = A), r(7531).EventEmitter;
          var o,
            a = function (e, t) {
              return e.listeners(t).length;
            },
            s = r(5072),
            f = r(5291).Buffer,
            c =
              (void 0 !== r.g
                ? r.g
                : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                ? self
                : {}
              ).Uint8Array || function () {},
            u = r(6072);
          o = u && u.debuglog ? u.debuglog("stream") : function () {};
          var d,
            h,
            l,
            p = r(9799),
            b = r(4204),
            y = r(2044).getHighWaterMark,
            g = r(5386).q,
            m = g.ERR_INVALID_ARG_TYPE,
            v = g.ERR_STREAM_PUSH_AFTER_EOF,
            w = g.ERR_METHOD_NOT_IMPLEMENTED,
            _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
          r(2111)(M, s);
          var S = b.errorOrDestroy,
            E = ["error", "close", "destroy", "pause", "resume"];
          function A(e, t, i) {
            (n = n || r(7879)),
              (e = e || {}),
              "boolean" != typeof i && (i = t instanceof n),
              (this.objectMode = !!e.objectMode),
              i &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode),
              (this.highWaterMark = y(this, e, "readableHighWaterMark", i)),
              (this.buffer = new p()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.paused = !0),
              (this.emitClose = !1 !== e.emitClose),
              (this.autoDestroy = !!e.autoDestroy),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                (d || (d = r(7682).s),
                (this.decoder = new d(e.encoding)),
                (this.encoding = e.encoding));
          }
          function M(e) {
            if (((n = n || r(7879)), !(this instanceof M))) return new M(e);
            var t = this instanceof n;
            (this._readableState = new A(e, this, t)),
              (this.readable = !0),
              e &&
                ("function" == typeof e.read && (this._read = e.read),
                "function" == typeof e.destroy && (this._destroy = e.destroy)),
              s.call(this);
          }
          function k(e, t, r, n, i) {
            o("readableAddChunk", t);
            var a,
              s = e._readableState;
            if (null === t)
              (s.reading = !1),
                (function (e, t) {
                  if ((o("onEofChunk"), !t.ended)) {
                    if (t.decoder) {
                      var r = t.decoder.end();
                      r &&
                        r.length &&
                        (t.buffer.push(r),
                        (t.length += t.objectMode ? 1 : r.length));
                    }
                    (t.ended = !0),
                      t.sync
                        ? R(e)
                        : ((t.needReadable = !1),
                          t.emittedReadable ||
                            ((t.emittedReadable = !0), P(e)));
                  }
                })(e, s);
            else if (
              (i ||
                (a = (function (e, t) {
                  var r, n;
                  return (
                    (n = t),
                    f.isBuffer(n) ||
                      n instanceof c ||
                      "string" == typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new m(
                        "chunk",
                        ["string", "Buffer", "Uint8Array"],
                        t
                      )),
                    r
                  );
                })(s, t)),
              a)
            )
              S(e, a);
            else if (s.objectMode || (t && t.length > 0))
              if (
                ("string" == typeof t ||
                  s.objectMode ||
                  Object.getPrototypeOf(t) === f.prototype ||
                  (t = (function (e) {
                    return f.from(e);
                  })(t)),
                n)
              )
                s.endEmitted ? S(e, new _()) : O(e, s, t, !0);
              else if (s.ended) S(e, new v());
              else {
                if (s.destroyed) return !1;
                (s.reading = !1),
                  s.decoder && !r
                    ? ((t = s.decoder.write(t)),
                      s.objectMode || 0 !== t.length ? O(e, s, t, !1) : x(e, s))
                    : O(e, s, t, !1);
              }
            else n || ((s.reading = !1), x(e, s));
            return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
          }
          function O(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync
              ? ((t.awaitDrain = 0), e.emit("data", r))
              : ((t.length += t.objectMode ? 1 : r.length),
                n ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && R(e)),
              x(e, t);
          }
          Object.defineProperty(M.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              );
            },
            set: function (e) {
              this._readableState && (this._readableState.destroyed = e);
            },
          }),
            (M.prototype.destroy = b.destroy),
            (M.prototype._undestroy = b.undestroy),
            (M.prototype._destroy = function (e, t) {
              t(e);
            }),
            (M.prototype.push = function (e, t) {
              var r,
                n = this._readableState;
              return (
                n.objectMode
                  ? (r = !0)
                  : "string" == typeof e &&
                    ((t = t || n.defaultEncoding) !== n.encoding &&
                      ((e = f.from(e, t)), (t = "")),
                    (r = !0)),
                k(this, e, t, !1, r)
              );
            }),
            (M.prototype.unshift = function (e) {
              return k(this, e, null, !0, !1);
            }),
            (M.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (M.prototype.setEncoding = function (e) {
              d || (d = r(7682).s);
              var t = new d(e);
              (this._readableState.decoder = t),
                (this._readableState.encoding =
                  this._readableState.decoder.encoding);
              for (
                var n = this._readableState.buffer.head, i = "";
                null !== n;

              )
                (i += t.write(n.data)), (n = n.next);
              return (
                this._readableState.buffer.clear(),
                "" !== i && this._readableState.buffer.push(i),
                (this._readableState.length = i.length),
                this
              );
            });
          var I = 1073741824;
          function C(e, t) {
            return e <= 0 || (0 === t.length && t.ended)
              ? 0
              : t.objectMode
              ? 1
              : e != e
              ? t.flowing && t.length
                ? t.buffer.head.data.length
                : t.length
              : (e > t.highWaterMark &&
                  (t.highWaterMark = (function (e) {
                    return (
                      e >= I
                        ? (e = I)
                        : (e--,
                          (e |= e >>> 1),
                          (e |= e >>> 2),
                          (e |= e >>> 4),
                          (e |= e >>> 8),
                          (e |= e >>> 16),
                          e++),
                      e
                    );
                  })(e)),
                e <= t.length
                  ? e
                  : t.ended
                  ? t.length
                  : ((t.needReadable = !0), 0));
          }
          function R(e) {
            var t = e._readableState;
            o("emitReadable", t.needReadable, t.emittedReadable),
              (t.needReadable = !1),
              t.emittedReadable ||
                (o("emitReadable", t.flowing),
                (t.emittedReadable = !0),
                i.nextTick(P, e));
          }
          function P(e) {
            var t = e._readableState;
            o("emitReadable_", t.destroyed, t.length, t.ended),
              t.destroyed ||
                (!t.length && !t.ended) ||
                (e.emit("readable"), (t.emittedReadable = !1)),
              (t.needReadable =
                !t.flowing && !t.ended && t.length <= t.highWaterMark),
              L(e);
          }
          function x(e, t) {
            t.readingMore || ((t.readingMore = !0), i.nextTick(B, e, t));
          }
          function B(e, t) {
            for (
              ;
              !t.reading &&
              !t.ended &&
              (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

            ) {
              var r = t.length;
              if ((o("maybeReadMore read 0"), e.read(0), r === t.length)) break;
            }
            t.readingMore = !1;
          }
          function T(e) {
            var t = e._readableState;
            (t.readableListening = e.listenerCount("readable") > 0),
              t.resumeScheduled && !t.paused
                ? (t.flowing = !0)
                : e.listenerCount("data") > 0 && e.resume();
          }
          function j(e) {
            o("readable nexttick read 0"), e.read(0);
          }
          function D(e, t) {
            o("resume", t.reading),
              t.reading || e.read(0),
              (t.resumeScheduled = !1),
              e.emit("resume"),
              L(e),
              t.flowing && !t.reading && e.read(0);
          }
          function L(e) {
            var t = e._readableState;
            for (o("flow", t.flowing); t.flowing && null !== e.read(); );
          }
          function N(e, t) {
            return 0 === t.length
              ? null
              : (t.objectMode
                  ? (r = t.buffer.shift())
                  : !e || e >= t.length
                  ? ((r = t.decoder
                      ? t.buffer.join("")
                      : 1 === t.buffer.length
                      ? t.buffer.first()
                      : t.buffer.concat(t.length)),
                    t.buffer.clear())
                  : (r = t.buffer.consume(e, t.decoder)),
                r);
            var r;
          }
          function U(e) {
            var t = e._readableState;
            o("endReadable", t.endEmitted),
              t.endEmitted || ((t.ended = !0), i.nextTick(q, t, e));
          }
          function q(e, t) {
            if (
              (o("endReadableNT", e.endEmitted, e.length),
              !e.endEmitted &&
                0 === e.length &&
                ((e.endEmitted = !0),
                (t.readable = !1),
                t.emit("end"),
                e.autoDestroy))
            ) {
              var r = t._writableState;
              (!r || (r.autoDestroy && r.finished)) && t.destroy();
            }
          }
          function z(e, t) {
            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
            return -1;
          }
          (M.prototype.read = function (e) {
            o("read", e), (e = parseInt(e, 10));
            var t = this._readableState,
              r = e;
            if (
              (0 !== e && (t.emittedReadable = !1),
              0 === e &&
                t.needReadable &&
                ((0 !== t.highWaterMark
                  ? t.length >= t.highWaterMark
                  : t.length > 0) ||
                  t.ended))
            )
              return (
                o("read: emitReadable", t.length, t.ended),
                0 === t.length && t.ended ? U(this) : R(this),
                null
              );
            if (0 === (e = C(e, t)) && t.ended)
              return 0 === t.length && U(this), null;
            var n,
              i = t.needReadable;
            return (
              o("need readable", i),
              (0 === t.length || t.length - e < t.highWaterMark) &&
                o("length less than watermark", (i = !0)),
              t.ended || t.reading
                ? o("reading or ended", (i = !1))
                : i &&
                  (o("do read"),
                  (t.reading = !0),
                  (t.sync = !0),
                  0 === t.length && (t.needReadable = !0),
                  this._read(t.highWaterMark),
                  (t.sync = !1),
                  t.reading || (e = C(r, t))),
              null === (n = e > 0 ? N(e, t) : null)
                ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
                : ((t.length -= e), (t.awaitDrain = 0)),
              0 === t.length &&
                (t.ended || (t.needReadable = !0),
                r !== e && t.ended && U(this)),
              null !== n && this.emit("data", n),
              n
            );
          }),
            (M.prototype._read = function (e) {
              S(this, new w("_read()"));
            }),
            (M.prototype.pipe = function (e, t) {
              var r = this,
                n = this._readableState;
              switch (n.pipesCount) {
                case 0:
                  n.pipes = e;
                  break;
                case 1:
                  n.pipes = [n.pipes, e];
                  break;
                default:
                  n.pipes.push(e);
              }
              (n.pipesCount += 1), o("pipe count=%d opts=%j", n.pipesCount, t);
              var s =
                (t && !1 === t.end) || e === i.stdout || e === i.stderr ? b : f;
              function f() {
                o("onend"), e.end();
              }
              n.endEmitted ? i.nextTick(s) : r.once("end", s),
                e.on("unpipe", function t(i, a) {
                  o("onunpipe"),
                    i === r &&
                      a &&
                      !1 === a.hasUnpiped &&
                      ((a.hasUnpiped = !0),
                      o("cleanup"),
                      e.removeListener("close", l),
                      e.removeListener("finish", p),
                      e.removeListener("drain", c),
                      e.removeListener("error", h),
                      e.removeListener("unpipe", t),
                      r.removeListener("end", f),
                      r.removeListener("end", b),
                      r.removeListener("data", d),
                      (u = !0),
                      !n.awaitDrain ||
                        (e._writableState && !e._writableState.needDrain) ||
                        c());
                });
              var c = (function (e) {
                return function () {
                  var t = e._readableState;
                  o("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain &&
                      a(e, "data") &&
                      ((t.flowing = !0), L(e));
                };
              })(r);
              e.on("drain", c);
              var u = !1;
              function d(t) {
                o("ondata");
                var i = e.write(t);
                o("dest.write", i),
                  !1 === i &&
                    (((1 === n.pipesCount && n.pipes === e) ||
                      (n.pipesCount > 1 && -1 !== z(n.pipes, e))) &&
                      !u &&
                      (o("false write response, pause", n.awaitDrain),
                      n.awaitDrain++),
                    r.pause());
              }
              function h(t) {
                o("onerror", t),
                  b(),
                  e.removeListener("error", h),
                  0 === a(e, "error") && S(e, t);
              }
              function l() {
                e.removeListener("finish", p), b();
              }
              function p() {
                o("onfinish"), e.removeListener("close", l), b();
              }
              function b() {
                o("unpipe"), r.unpipe(e);
              }
              return (
                r.on("data", d),
                (function (e, t, r) {
                  if ("function" == typeof e.prependListener)
                    return e.prependListener(t, r);
                  e._events && e._events[t]
                    ? Array.isArray(e._events[t])
                      ? e._events[t].unshift(r)
                      : (e._events[t] = [r, e._events[t]])
                    : e.on(t, r);
                })(e, "error", h),
                e.once("close", l),
                e.once("finish", p),
                e.emit("pipe", r),
                n.flowing || (o("pipe resume"), r.resume()),
                e
              );
            }),
            (M.prototype.unpipe = function (e) {
              var t = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === t.pipesCount) return this;
              if (1 === t.pipesCount)
                return (
                  (e && e !== t.pipes) ||
                    (e || (e = t.pipes),
                    (t.pipes = null),
                    (t.pipesCount = 0),
                    (t.flowing = !1),
                    e && e.emit("unpipe", this, r)),
                  this
                );
              if (!e) {
                var n = t.pipes,
                  i = t.pipesCount;
                (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                for (var o = 0; o < i; o++)
                  n[o].emit("unpipe", this, { hasUnpiped: !1 });
                return this;
              }
              var a = z(t.pipes, e);
              return (
                -1 === a ||
                  (t.pipes.splice(a, 1),
                  (t.pipesCount -= 1),
                  1 === t.pipesCount && (t.pipes = t.pipes[0]),
                  e.emit("unpipe", this, r)),
                this
              );
            }),
            (M.prototype.on = function (e, t) {
              var r = s.prototype.on.call(this, e, t),
                n = this._readableState;
              return (
                "data" === e
                  ? ((n.readableListening = this.listenerCount("readable") > 0),
                    !1 !== n.flowing && this.resume())
                  : "readable" === e &&
                    (n.endEmitted ||
                      n.readableListening ||
                      ((n.readableListening = n.needReadable = !0),
                      (n.flowing = !1),
                      (n.emittedReadable = !1),
                      o("on readable", n.length, n.reading),
                      n.length ? R(this) : n.reading || i.nextTick(j, this))),
                r
              );
            }),
            (M.prototype.addListener = M.prototype.on),
            (M.prototype.removeListener = function (e, t) {
              var r = s.prototype.removeListener.call(this, e, t);
              return "readable" === e && i.nextTick(T, this), r;
            }),
            (M.prototype.removeAllListeners = function (e) {
              var t = s.prototype.removeAllListeners.apply(this, arguments);
              return (
                ("readable" !== e && void 0 !== e) || i.nextTick(T, this), t
              );
            }),
            (M.prototype.resume = function () {
              var e = this._readableState;
              return (
                e.flowing ||
                  (o("resume"),
                  (e.flowing = !e.readableListening),
                  (function (e, t) {
                    t.resumeScheduled ||
                      ((t.resumeScheduled = !0), i.nextTick(D, e, t));
                  })(this, e)),
                (e.paused = !1),
                this
              );
            }),
            (M.prototype.pause = function () {
              return (
                o("call pause flowing=%j", this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (o("pause"),
                  (this._readableState.flowing = !1),
                  this.emit("pause")),
                (this._readableState.paused = !0),
                this
              );
            }),
            (M.prototype.wrap = function (e) {
              var t = this,
                r = this._readableState,
                n = !1;
              for (var i in (e.on("end", function () {
                if ((o("wrapped end"), r.decoder && !r.ended)) {
                  var e = r.decoder.end();
                  e && e.length && t.push(e);
                }
                t.push(null);
              }),
              e.on("data", function (i) {
                o("wrapped data"),
                  r.decoder && (i = r.decoder.write(i)),
                  (r.objectMode && null == i) ||
                    ((r.objectMode || (i && i.length)) &&
                      (t.push(i) || ((n = !0), e.pause())));
              }),
              e))
                void 0 === this[i] &&
                  "function" == typeof e[i] &&
                  (this[i] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments);
                    };
                  })(i));
              for (var a = 0; a < E.length; a++)
                e.on(E[a], this.emit.bind(this, E[a]));
              return (
                (this._read = function (t) {
                  o("wrapped _read", t), n && ((n = !1), e.resume());
                }),
                this
              );
            }),
            "function" == typeof Symbol &&
              (M.prototype[Symbol.asyncIterator] = function () {
                return void 0 === h && (h = r(5978)), h(this);
              }),
            Object.defineProperty(M.prototype, "readableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._readableState.highWaterMark;
              },
            }),
            Object.defineProperty(M.prototype, "readableBuffer", {
              enumerable: !1,
              get: function () {
                return this._readableState && this._readableState.buffer;
              },
            }),
            Object.defineProperty(M.prototype, "readableFlowing", {
              enumerable: !1,
              get: function () {
                return this._readableState.flowing;
              },
              set: function (e) {
                this._readableState && (this._readableState.flowing = e);
              },
            }),
            (M._fromList = N),
            Object.defineProperty(M.prototype, "readableLength", {
              enumerable: !1,
              get: function () {
                return this._readableState.length;
              },
            }),
            "function" == typeof Symbol &&
              (M.from = function (e, t) {
                return void 0 === l && (l = r(1625)), l(M, e, t);
              });
        },
        6269: (e, t, r) => {
          "use strict";
          e.exports = u;
          var n = r(5386).q,
            i = n.ERR_METHOD_NOT_IMPLEMENTED,
            o = n.ERR_MULTIPLE_CALLBACK,
            a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
            s = n.ERR_TRANSFORM_WITH_LENGTH_0,
            f = r(7879);
          function c(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n) return this.emit("error", new o());
            (r.writechunk = null),
              (r.writecb = null),
              null != t && this.push(t),
              n(e);
            var i = this._readableState;
            (i.reading = !1),
              (i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
          }
          function u(e) {
            if (!(this instanceof u)) return new u(e);
            f.call(this, e),
              (this._transformState = {
                afterTransform: c.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null,
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              e &&
                ("function" == typeof e.transform &&
                  (this._transform = e.transform),
                "function" == typeof e.flush && (this._flush = e.flush)),
              this.on("prefinish", d);
          }
          function d() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed
              ? h(this, null, null)
              : this._flush(function (t, r) {
                  h(e, t, r);
                });
          }
          function h(e, t, r) {
            if (t) return e.emit("error", t);
            if ((null != r && e.push(r), e._writableState.length))
              throw new s();
            if (e._transformState.transforming) throw new a();
            return e.push(null);
          }
          r(2111)(u, f),
            (u.prototype.push = function (e, t) {
              return (
                (this._transformState.needTransform = !1),
                f.prototype.push.call(this, e, t)
              );
            }),
            (u.prototype._transform = function (e, t, r) {
              r(new i("_transform()"));
            }),
            (u.prototype._write = function (e, t, r) {
              var n = this._transformState;
              if (
                ((n.writecb = r),
                (n.writechunk = e),
                (n.writeencoding = t),
                !n.transforming)
              ) {
                var i = this._readableState;
                (n.needTransform ||
                  i.needReadable ||
                  i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
              }
            }),
            (u.prototype._read = function (e) {
              var t = this._transformState;
              null === t.writechunk || t.transforming
                ? (t.needTransform = !0)
                : ((t.transforming = !0),
                  this._transform(
                    t.writechunk,
                    t.writeencoding,
                    t.afterTransform
                  ));
            }),
            (u.prototype._destroy = function (e, t) {
              f.prototype._destroy.call(this, e, function (e) {
                t(e);
              });
            });
        },
        2501: (e, t, r) => {
          "use strict";
          var n,
            i = r(3158);
          function o(e) {
            var t = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function (e, t, r) {
                  var n = e.entry;
                  for (e.entry = null; n; ) {
                    var i = n.callback;
                    t.pendingcb--, i(undefined), (n = n.next);
                  }
                  t.corkedRequestsFree.next = e;
                })(t, e);
              });
          }
          (e.exports = M), (M.WritableState = A);
          var a,
            s = { deprecate: r(737) },
            f = r(5072),
            c = r(5291).Buffer,
            u =
              (void 0 !== r.g
                ? r.g
                : "undefined" != typeof window
                ? window
                : "undefined" != typeof self
                ? self
                : {}
              ).Uint8Array || function () {},
            d = r(4204),
            h = r(2044).getHighWaterMark,
            l = r(5386).q,
            p = l.ERR_INVALID_ARG_TYPE,
            b = l.ERR_METHOD_NOT_IMPLEMENTED,
            y = l.ERR_MULTIPLE_CALLBACK,
            g = l.ERR_STREAM_CANNOT_PIPE,
            m = l.ERR_STREAM_DESTROYED,
            v = l.ERR_STREAM_NULL_VALUES,
            w = l.ERR_STREAM_WRITE_AFTER_END,
            _ = l.ERR_UNKNOWN_ENCODING,
            S = d.errorOrDestroy;
          function E() {}
          function A(e, t, a) {
            (n = n || r(7879)),
              (e = e || {}),
              "boolean" != typeof a && (a = t instanceof n),
              (this.objectMode = !!e.objectMode),
              a &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode),
              (this.highWaterMark = h(this, e, "writableHighWaterMark", a)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1),
              (this.destroyed = !1);
            var s = !1 === e.decodeStrings;
            (this.decodeStrings = !s),
              (this.defaultEncoding = e.defaultEncoding || "utf8"),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (e) {
                !(function (e, t) {
                  var r = e._writableState,
                    n = r.sync,
                    o = r.writecb;
                  if ("function" != typeof o) throw new y();
                  if (
                    ((function (e) {
                      (e.writing = !1),
                        (e.writecb = null),
                        (e.length -= e.writelen),
                        (e.writelen = 0);
                    })(r),
                    t)
                  )
                    !(function (e, t, r, n, o) {
                      --t.pendingcb,
                        r
                          ? (i.nextTick(o, n),
                            i.nextTick(P, e, t),
                            (e._writableState.errorEmitted = !0),
                            S(e, n))
                          : (o(n),
                            (e._writableState.errorEmitted = !0),
                            S(e, n),
                            P(e, t));
                    })(e, r, n, t, o);
                  else {
                    var a = C(r) || e.destroyed;
                    a ||
                      r.corked ||
                      r.bufferProcessing ||
                      !r.bufferedRequest ||
                      I(e, r),
                      n ? i.nextTick(O, e, r, a, o) : O(e, r, a, o);
                  }
                })(t, e);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.emitClose = !1 !== e.emitClose),
              (this.autoDestroy = !!e.autoDestroy),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new o(this));
          }
          function M(e) {
            var t = this instanceof (n = n || r(7879));
            if (!t && !a.call(M, this)) return new M(e);
            (this._writableState = new A(e, this, t)),
              (this.writable = !0),
              e &&
                ("function" == typeof e.write && (this._write = e.write),
                "function" == typeof e.writev && (this._writev = e.writev),
                "function" == typeof e.destroy && (this._destroy = e.destroy),
                "function" == typeof e.final && (this._final = e.final)),
              f.call(this);
          }
          function k(e, t, r, n, i, o, a) {
            (t.writelen = n),
              (t.writecb = a),
              (t.writing = !0),
              (t.sync = !0),
              t.destroyed
                ? t.onwrite(new m("write"))
                : r
                ? e._writev(i, t.onwrite)
                : e._write(i, o, t.onwrite),
              (t.sync = !1);
          }
          function O(e, t, r, n) {
            r ||
              (function (e, t) {
                0 === t.length &&
                  t.needDrain &&
                  ((t.needDrain = !1), e.emit("drain"));
              })(e, t),
              t.pendingcb--,
              n(),
              P(e, t);
          }
          function I(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
              var n = t.bufferedRequestCount,
                i = new Array(n),
                a = t.corkedRequestsFree;
              a.entry = r;
              for (var s = 0, f = !0; r; )
                (i[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
              (i.allBuffers = f),
                k(e, t, !0, t.length, i, "", a.finish),
                t.pendingcb++,
                (t.lastBufferedRequest = null),
                a.next
                  ? ((t.corkedRequestsFree = a.next), (a.next = null))
                  : (t.corkedRequestsFree = new o(t)),
                (t.bufferedRequestCount = 0);
            } else {
              for (; r; ) {
                var c = r.chunk,
                  u = r.encoding,
                  d = r.callback;
                if (
                  (k(e, t, !1, t.objectMode ? 1 : c.length, c, u, d),
                  (r = r.next),
                  t.bufferedRequestCount--,
                  t.writing)
                )
                  break;
              }
              null === r && (t.lastBufferedRequest = null);
            }
            (t.bufferedRequest = r), (t.bufferProcessing = !1);
          }
          function C(e) {
            return (
              e.ending &&
              0 === e.length &&
              null === e.bufferedRequest &&
              !e.finished &&
              !e.writing
            );
          }
          function R(e, t) {
            e._final(function (r) {
              t.pendingcb--,
                r && S(e, r),
                (t.prefinished = !0),
                e.emit("prefinish"),
                P(e, t);
            });
          }
          function P(e, t) {
            var r = C(t);
            if (
              r &&
              ((function (e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ("function" != typeof e._final || t.destroyed
                    ? ((t.prefinished = !0), e.emit("prefinish"))
                    : (t.pendingcb++,
                      (t.finalCalled = !0),
                      i.nextTick(R, e, t)));
              })(e, t),
              0 === t.pendingcb &&
                ((t.finished = !0), e.emit("finish"), t.autoDestroy))
            ) {
              var n = e._readableState;
              (!n || (n.autoDestroy && n.endEmitted)) && e.destroy();
            }
            return r;
          }
          r(2111)(M, f),
            (A.prototype.getBuffer = function () {
              for (var e = this.bufferedRequest, t = []; e; )
                t.push(e), (e = e.next);
              return t;
            }),
            (function () {
              try {
                Object.defineProperty(A.prototype, "buffer", {
                  get: s.deprecate(
                    function () {
                      return this.getBuffer();
                    },
                    "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                    "DEP0003"
                  ),
                });
              } catch (e) {}
            })(),
            "function" == typeof Symbol &&
            Symbol.hasInstance &&
            "function" == typeof Function.prototype[Symbol.hasInstance]
              ? ((a = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(M, Symbol.hasInstance, {
                  value: function (e) {
                    return (
                      !!a.call(this, e) ||
                      (this === M && e && e._writableState instanceof A)
                    );
                  },
                }))
              : (a = function (e) {
                  return e instanceof this;
                }),
            (M.prototype.pipe = function () {
              S(this, new g());
            }),
            (M.prototype.write = function (e, t, r) {
              var n,
                o = this._writableState,
                a = !1,
                s = !o.objectMode && ((n = e), c.isBuffer(n) || n instanceof u);
              return (
                s &&
                  !c.isBuffer(e) &&
                  (e = (function (e) {
                    return c.from(e);
                  })(e)),
                "function" == typeof t && ((r = t), (t = null)),
                s ? (t = "buffer") : t || (t = o.defaultEncoding),
                "function" != typeof r && (r = E),
                o.ending
                  ? (function (e, t) {
                      var r = new w();
                      S(e, r), i.nextTick(t, r);
                    })(this, r)
                  : (s ||
                      (function (e, t, r, n) {
                        var o;
                        return (
                          null === r
                            ? (o = new v())
                            : "string" == typeof r ||
                              t.objectMode ||
                              (o = new p("chunk", ["string", "Buffer"], r)),
                          !o || (S(e, o), i.nextTick(n, o), !1)
                        );
                      })(this, o, e, r)) &&
                    (o.pendingcb++,
                    (a = (function (e, t, r, n, i, o) {
                      if (!r) {
                        var a = (function (e, t, r) {
                          return (
                            e.objectMode ||
                              !1 === e.decodeStrings ||
                              "string" != typeof t ||
                              (t = c.from(t, r)),
                            t
                          );
                        })(t, n, i);
                        n !== a && ((r = !0), (i = "buffer"), (n = a));
                      }
                      var s = t.objectMode ? 1 : n.length;
                      t.length += s;
                      var f = t.length < t.highWaterMark;
                      if ((f || (t.needDrain = !0), t.writing || t.corked)) {
                        var u = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                          chunk: n,
                          encoding: i,
                          isBuf: r,
                          callback: o,
                          next: null,
                        }),
                          u
                            ? (u.next = t.lastBufferedRequest)
                            : (t.bufferedRequest = t.lastBufferedRequest),
                          (t.bufferedRequestCount += 1);
                      } else k(e, t, !1, s, n, i, o);
                      return f;
                    })(this, o, s, e, t, r))),
                a
              );
            }),
            (M.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (M.prototype.uncork = function () {
              var e = this._writableState;
              e.corked &&
                (e.corked--,
                e.writing ||
                  e.corked ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  I(this, e));
            }),
            (M.prototype.setDefaultEncoding = function (e) {
              if (
                ("string" == typeof e && (e = e.toLowerCase()),
                !(
                  [
                    "hex",
                    "utf8",
                    "utf-8",
                    "ascii",
                    "binary",
                    "base64",
                    "ucs2",
                    "ucs-2",
                    "utf16le",
                    "utf-16le",
                    "raw",
                  ].indexOf((e + "").toLowerCase()) > -1
                ))
              )
                throw new _(e);
              return (this._writableState.defaultEncoding = e), this;
            }),
            Object.defineProperty(M.prototype, "writableBuffer", {
              enumerable: !1,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              },
            }),
            Object.defineProperty(M.prototype, "writableHighWaterMark", {
              enumerable: !1,
              get: function () {
                return this._writableState.highWaterMark;
              },
            }),
            (M.prototype._write = function (e, t, r) {
              r(new b("_write()"));
            }),
            (M.prototype._writev = null),
            (M.prototype.end = function (e, t, r) {
              var n = this._writableState;
              return (
                "function" == typeof e
                  ? ((r = e), (e = null), (t = null))
                  : "function" == typeof t && ((r = t), (t = null)),
                null != e && this.write(e, t),
                n.corked && ((n.corked = 1), this.uncork()),
                n.ending ||
                  (function (e, t, r) {
                    (t.ending = !0),
                      P(e, t),
                      r && (t.finished ? i.nextTick(r) : e.once("finish", r)),
                      (t.ended = !0),
                      (e.writable = !1);
                  })(this, n, r),
                this
              );
            }),
            Object.defineProperty(M.prototype, "writableLength", {
              enumerable: !1,
              get: function () {
                return this._writableState.length;
              },
            }),
            Object.defineProperty(M.prototype, "destroyed", {
              enumerable: !1,
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                this._writableState && (this._writableState.destroyed = e);
              },
            }),
            (M.prototype.destroy = d.destroy),
            (M.prototype._undestroy = d.undestroy),
            (M.prototype._destroy = function (e, t) {
              t(e);
            });
        },
        5978: (e, t, r) => {
          "use strict";
          var n,
            i = r(3158);
          function o(e, t, r) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" != typeof e || null === e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" != typeof n) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == typeof t ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          var a = r(6738),
            s = Symbol("lastResolve"),
            f = Symbol("lastReject"),
            c = Symbol("error"),
            u = Symbol("ended"),
            d = Symbol("lastPromise"),
            h = Symbol("handlePromise"),
            l = Symbol("stream");
          function p(e, t) {
            return { value: e, done: t };
          }
          function b(e) {
            var t = e[s];
            if (null !== t) {
              var r = e[l].read();
              null !== r &&
                ((e[d] = null), (e[s] = null), (e[f] = null), t(p(r, !1)));
            }
          }
          function y(e) {
            i.nextTick(b, e);
          }
          var g = Object.getPrototypeOf(function () {}),
            m = Object.setPrototypeOf(
              (o(
                (n = {
                  get stream() {
                    return this[l];
                  },
                  next: function () {
                    var e = this,
                      t = this[c];
                    if (null !== t) return Promise.reject(t);
                    if (this[u]) return Promise.resolve(p(void 0, !0));
                    if (this[l].destroyed)
                      return new Promise(function (t, r) {
                        i.nextTick(function () {
                          e[c] ? r(e[c]) : t(p(void 0, !0));
                        });
                      });
                    var r,
                      n = this[d];
                    if (n)
                      r = new Promise(
                        (function (e, t) {
                          return function (r, n) {
                            e.then(function () {
                              t[u] ? r(p(void 0, !0)) : t[h](r, n);
                            }, n);
                          };
                        })(n, this)
                      );
                    else {
                      var o = this[l].read();
                      if (null !== o) return Promise.resolve(p(o, !1));
                      r = new Promise(this[h]);
                    }
                    return (this[d] = r), r;
                  },
                }),
                Symbol.asyncIterator,
                function () {
                  return this;
                }
              ),
              o(n, "return", function () {
                var e = this;
                return new Promise(function (t, r) {
                  e[l].destroy(null, function (e) {
                    e ? r(e) : t(p(void 0, !0));
                  });
                });
              }),
              n),
              g
            );
          e.exports = function (e) {
            var t,
              r = Object.create(
                m,
                (o((t = {}), l, { value: e, writable: !0 }),
                o(t, s, { value: null, writable: !0 }),
                o(t, f, { value: null, writable: !0 }),
                o(t, c, { value: null, writable: !0 }),
                o(t, u, { value: e._readableState.endEmitted, writable: !0 }),
                o(t, h, {
                  value: function (e, t) {
                    var n = r[l].read();
                    n
                      ? ((r[d] = null),
                        (r[s] = null),
                        (r[f] = null),
                        e(p(n, !1)))
                      : ((r[s] = e), (r[f] = t));
                  },
                  writable: !0,
                }),
                t)
              );
            return (
              (r[d] = null),
              a(e, function (e) {
                if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                  var t = r[f];
                  return (
                    null !== t &&
                      ((r[d] = null), (r[s] = null), (r[f] = null), t(e)),
                    void (r[c] = e)
                  );
                }
                var n = r[s];
                null !== n &&
                  ((r[d] = null),
                  (r[s] = null),
                  (r[f] = null),
                  n(p(void 0, !0))),
                  (r[u] = !0);
              }),
              e.on("readable", y.bind(null, r)),
              r
            );
          };
        },
        9799: (e, t, r) => {
          "use strict";
          function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function i(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? n(Object(r), !0).forEach(function (t) {
                    o(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : n(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          }
          function o(e, t, r) {
            return (
              (t = s(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function a(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, s(n.key), n);
            }
          }
          function s(e) {
            var t = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != typeof n) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == typeof t ? t : String(t);
          }
          var f = r(5291).Buffer,
            c = r(7015).inspect,
            u = (c && c.custom) || "inspect";
          e.exports = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.head = null),
                (this.tail = null),
                (this.length = 0);
            }
            var t, r;
            return (
              (t = e),
              (r = [
                {
                  key: "push",
                  value: function (e) {
                    var t = { data: e, next: null };
                    this.length > 0 ? (this.tail.next = t) : (this.head = t),
                      (this.tail = t),
                      ++this.length;
                  },
                },
                {
                  key: "unshift",
                  value: function (e) {
                    var t = { data: e, next: this.head };
                    0 === this.length && (this.tail = t),
                      (this.head = t),
                      ++this.length;
                  },
                },
                {
                  key: "shift",
                  value: function () {
                    if (0 !== this.length) {
                      var e = this.head.data;
                      return (
                        1 === this.length
                          ? (this.head = this.tail = null)
                          : (this.head = this.head.next),
                        --this.length,
                        e
                      );
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this.head = this.tail = null), (this.length = 0);
                  },
                },
                {
                  key: "join",
                  value: function (e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, r = "" + t.data; (t = t.next); )
                      r += e + t.data;
                    return r;
                  },
                },
                {
                  key: "concat",
                  value: function (e) {
                    if (0 === this.length) return f.alloc(0);
                    for (
                      var t,
                        r,
                        n,
                        i = f.allocUnsafe(e >>> 0),
                        o = this.head,
                        a = 0;
                      o;

                    )
                      (t = o.data),
                        (r = i),
                        (n = a),
                        f.prototype.copy.call(t, r, n),
                        (a += o.data.length),
                        (o = o.next);
                    return i;
                  },
                },
                {
                  key: "consume",
                  value: function (e, t) {
                    var r;
                    return (
                      e < this.head.data.length
                        ? ((r = this.head.data.slice(0, e)),
                          (this.head.data = this.head.data.slice(e)))
                        : (r =
                            e === this.head.data.length
                              ? this.shift()
                              : t
                              ? this._getString(e)
                              : this._getBuffer(e)),
                      r
                    );
                  },
                },
                {
                  key: "first",
                  value: function () {
                    return this.head.data;
                  },
                },
                {
                  key: "_getString",
                  value: function (e) {
                    var t = this.head,
                      r = 1,
                      n = t.data;
                    for (e -= n.length; (t = t.next); ) {
                      var i = t.data,
                        o = e > i.length ? i.length : e;
                      if (
                        (o === i.length ? (n += i) : (n += i.slice(0, e)),
                        0 == (e -= o))
                      ) {
                        o === i.length
                          ? (++r,
                            t.next
                              ? (this.head = t.next)
                              : (this.head = this.tail = null))
                          : ((this.head = t), (t.data = i.slice(o)));
                        break;
                      }
                      ++r;
                    }
                    return (this.length -= r), n;
                  },
                },
                {
                  key: "_getBuffer",
                  value: function (e) {
                    var t = f.allocUnsafe(e),
                      r = this.head,
                      n = 1;
                    for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                      var i = r.data,
                        o = e > i.length ? i.length : e;
                      if ((i.copy(t, t.length - e, 0, o), 0 == (e -= o))) {
                        o === i.length
                          ? (++n,
                            r.next
                              ? (this.head = r.next)
                              : (this.head = this.tail = null))
                          : ((this.head = r), (r.data = i.slice(o)));
                        break;
                      }
                      ++n;
                    }
                    return (this.length -= n), t;
                  },
                },
                {
                  key: u,
                  value: function (e, t) {
                    return c(
                      this,
                      i(i({}, t), {}, { depth: 0, customInspect: !1 })
                    );
                  },
                },
              ]) && a(t.prototype, r),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e
            );
          })();
        },
        4204: (e, t, r) => {
          "use strict";
          var n = r(3158);
          function i(e, t) {
            a(e, t), o(e);
          }
          function o(e) {
            (e._writableState && !e._writableState.emitClose) ||
              (e._readableState && !e._readableState.emitClose) ||
              e.emit("close");
          }
          function a(e, t) {
            e.emit("error", t);
          }
          e.exports = {
            destroy: function (e, t) {
              var r = this,
                s = this._readableState && this._readableState.destroyed,
                f = this._writableState && this._writableState.destroyed;
              return s || f
                ? (t
                    ? t(e)
                    : e &&
                      (this._writableState
                        ? this._writableState.errorEmitted ||
                          ((this._writableState.errorEmitted = !0),
                          n.nextTick(a, this, e))
                        : n.nextTick(a, this, e)),
                  this)
                : (this._readableState && (this._readableState.destroyed = !0),
                  this._writableState && (this._writableState.destroyed = !0),
                  this._destroy(e || null, function (e) {
                    !t && e
                      ? r._writableState
                        ? r._writableState.errorEmitted
                          ? n.nextTick(o, r)
                          : ((r._writableState.errorEmitted = !0),
                            n.nextTick(i, r, e))
                        : n.nextTick(i, r, e)
                      : t
                      ? (n.nextTick(o, r), t(e))
                      : n.nextTick(o, r);
                  }),
                  this);
            },
            undestroy: function () {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finalCalled = !1),
                  (this._writableState.prefinished = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1));
            },
            errorOrDestroy: function (e, t) {
              var r = e._readableState,
                n = e._writableState;
              (r && r.autoDestroy) || (n && n.autoDestroy)
                ? e.destroy(t)
                : e.emit("error", t);
            },
          };
        },
        6738: (e, t, r) => {
          "use strict";
          var n = r(5386).q.ERR_STREAM_PREMATURE_CLOSE;
          function i() {}
          e.exports = function e(t, r, o) {
            if ("function" == typeof r) return e(t, null, r);
            r || (r = {}),
              (o = (function (e) {
                var t = !1;
                return function () {
                  if (!t) {
                    t = !0;
                    for (
                      var r = arguments.length, n = new Array(r), i = 0;
                      i < r;
                      i++
                    )
                      n[i] = arguments[i];
                    e.apply(this, n);
                  }
                };
              })(o || i));
            var a = r.readable || (!1 !== r.readable && t.readable),
              s = r.writable || (!1 !== r.writable && t.writable),
              f = function () {
                t.writable || u();
              },
              c = t._writableState && t._writableState.finished,
              u = function () {
                (s = !1), (c = !0), a || o.call(t);
              },
              d = t._readableState && t._readableState.endEmitted,
              h = function () {
                (a = !1), (d = !0), s || o.call(t);
              },
              l = function (e) {
                o.call(t, e);
              },
              p = function () {
                var e;
                return a && !d
                  ? ((t._readableState && t._readableState.ended) ||
                      (e = new n()),
                    o.call(t, e))
                  : s && !c
                  ? ((t._writableState && t._writableState.ended) ||
                      (e = new n()),
                    o.call(t, e))
                  : void 0;
              },
              b = function () {
                t.req.on("finish", u);
              };
            return (
              (function (e) {
                return e.setHeader && "function" == typeof e.abort;
              })(t)
                ? (t.on("complete", u),
                  t.on("abort", p),
                  t.req ? b() : t.on("request", b))
                : s && !t._writableState && (t.on("end", f), t.on("close", f)),
              t.on("end", h),
              t.on("finish", u),
              !1 !== r.error && t.on("error", l),
              t.on("close", p),
              function () {
                t.removeListener("complete", u),
                  t.removeListener("abort", p),
                  t.removeListener("request", b),
                  t.req && t.req.removeListener("finish", u),
                  t.removeListener("end", f),
                  t.removeListener("close", f),
                  t.removeListener("finish", u),
                  t.removeListener("end", h),
                  t.removeListener("error", l),
                  t.removeListener("close", p);
              }
            );
          };
        },
        1625: (e) => {
          e.exports = function () {
            throw new Error("Readable.from is not available in the browser");
          };
        },
        6718: (e, t, r) => {
          "use strict";
          var n,
            i = r(5386).q,
            o = i.ERR_MISSING_ARGS,
            a = i.ERR_STREAM_DESTROYED;
          function s(e) {
            if (e) throw e;
          }
          function f(e) {
            e();
          }
          function c(e, t) {
            return e.pipe(t);
          }
          e.exports = function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            var u,
              d = (function (e) {
                return e.length
                  ? "function" != typeof e[e.length - 1]
                    ? s
                    : e.pop()
                  : s;
              })(t);
            if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
              throw new o("streams");
            var h = t.map(function (e, i) {
              var o = i < t.length - 1;
              return (function (e, t, i, o) {
                o = (function (e) {
                  var t = !1;
                  return function () {
                    t || ((t = !0), e.apply(void 0, arguments));
                  };
                })(o);
                var s = !1;
                e.on("close", function () {
                  s = !0;
                }),
                  void 0 === n && (n = r(6738)),
                  n(e, { readable: t, writable: i }, function (e) {
                    if (e) return o(e);
                    (s = !0), o();
                  });
                var f = !1;
                return function (t) {
                  if (!s && !f)
                    return (
                      (f = !0),
                      (function (e) {
                        return e.setHeader && "function" == typeof e.abort;
                      })(e)
                        ? e.abort()
                        : "function" == typeof e.destroy
                        ? e.destroy()
                        : void o(t || new a("pipe"))
                    );
                };
              })(e, o, i > 0, function (e) {
                u || (u = e), e && h.forEach(f), o || (h.forEach(f), d(u));
              });
            });
            return t.reduce(c);
          };
        },
        2044: (e, t, r) => {
          "use strict";
          var n = r(5386).q.ERR_INVALID_OPT_VALUE;
          e.exports = {
            getHighWaterMark: function (e, t, r, i) {
              var o = (function (e, t, r) {
                return null != e.highWaterMark
                  ? e.highWaterMark
                  : t
                  ? e[r]
                  : null;
              })(t, i, r);
              if (null != o) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                  throw new n(i ? r : "highWaterMark", o);
                return Math.floor(o);
              }
              return e.objectMode ? 16 : 16384;
            },
          };
        },
        5072: (e, t, r) => {
          e.exports = r(7531).EventEmitter;
        },
        6310: (e, t, r) => {
          ((t = e.exports = r(2070)).Stream = t),
            (t.Readable = t),
            (t.Writable = r(2501)),
            (t.Duplex = r(7879)),
            (t.Transform = r(6269)),
            (t.PassThrough = r(4100)),
            (t.finished = r(6738)),
            (t.pipeline = r(6718));
        },
        4454: (e, t, r) => {
          "use strict";
          var n = r(5291).Buffer,
            i = r(2111),
            o = r(8262),
            a = new Array(16),
            s = [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
              10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8,
              1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7,
              15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15,
              13,
            ],
            f = [
              5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
              0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
              11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2,
              13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3,
              9, 11,
            ],
            c = [
              11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8,
              13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14,
              9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9,
              8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12,
              13, 14, 11, 8, 5, 6,
            ],
            u = [
              8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
              7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
              6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14,
              6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5,
              15, 13, 11, 11,
            ],
            d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
          function l() {
            o.call(this, 64),
              (this._a = 1732584193),
              (this._b = 4023233417),
              (this._c = 2562383102),
              (this._d = 271733878),
              (this._e = 3285377520);
          }
          function p(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          function b(e, t, r, n, i, o, a, s) {
            return (p((e + (t ^ r ^ n) + o + a) | 0, s) + i) | 0;
          }
          function y(e, t, r, n, i, o, a, s) {
            return (p((e + ((t & r) | (~t & n)) + o + a) | 0, s) + i) | 0;
          }
          function g(e, t, r, n, i, o, a, s) {
            return (p((e + ((t | ~r) ^ n) + o + a) | 0, s) + i) | 0;
          }
          function m(e, t, r, n, i, o, a, s) {
            return (p((e + ((t & n) | (r & ~n)) + o + a) | 0, s) + i) | 0;
          }
          function v(e, t, r, n, i, o, a, s) {
            return (p((e + (t ^ (r | ~n)) + o + a) | 0, s) + i) | 0;
          }
          i(l, o),
            (l.prototype._update = function () {
              for (var e = a, t = 0; t < 16; ++t)
                e[t] = this._block.readInt32LE(4 * t);
              for (
                var r = 0 | this._a,
                  n = 0 | this._b,
                  i = 0 | this._c,
                  o = 0 | this._d,
                  l = 0 | this._e,
                  w = 0 | this._a,
                  _ = 0 | this._b,
                  S = 0 | this._c,
                  E = 0 | this._d,
                  A = 0 | this._e,
                  M = 0;
                M < 80;
                M += 1
              ) {
                var k, O;
                M < 16
                  ? ((k = b(r, n, i, o, l, e[s[M]], d[0], c[M])),
                    (O = v(w, _, S, E, A, e[f[M]], h[0], u[M])))
                  : M < 32
                  ? ((k = y(r, n, i, o, l, e[s[M]], d[1], c[M])),
                    (O = m(w, _, S, E, A, e[f[M]], h[1], u[M])))
                  : M < 48
                  ? ((k = g(r, n, i, o, l, e[s[M]], d[2], c[M])),
                    (O = g(w, _, S, E, A, e[f[M]], h[2], u[M])))
                  : M < 64
                  ? ((k = m(r, n, i, o, l, e[s[M]], d[3], c[M])),
                    (O = y(w, _, S, E, A, e[f[M]], h[3], u[M])))
                  : ((k = v(r, n, i, o, l, e[s[M]], d[4], c[M])),
                    (O = b(w, _, S, E, A, e[f[M]], h[4], u[M]))),
                  (r = l),
                  (l = o),
                  (o = p(i, 10)),
                  (i = n),
                  (n = k),
                  (w = A),
                  (A = E),
                  (E = p(S, 10)),
                  (S = _),
                  (_ = O);
              }
              var I = (this._b + i + E) | 0;
              (this._b = (this._c + o + A) | 0),
                (this._c = (this._d + l + w) | 0),
                (this._d = (this._e + r + _) | 0),
                (this._e = (this._a + n + S) | 0),
                (this._a = I);
            }),
            (l.prototype._digest = function () {
              (this._block[this._blockOffset++] = 128),
                this._blockOffset > 56 &&
                  (this._block.fill(0, this._blockOffset, 64),
                  this._update(),
                  (this._blockOffset = 0)),
                this._block.fill(0, this._blockOffset, 56),
                this._block.writeUInt32LE(this._length[0], 56),
                this._block.writeUInt32LE(this._length[1], 60),
                this._update();
              var e = n.alloc ? n.alloc(20) : new n(20);
              return (
                e.writeInt32LE(this._a, 0),
                e.writeInt32LE(this._b, 4),
                e.writeInt32LE(this._c, 8),
                e.writeInt32LE(this._d, 12),
                e.writeInt32LE(this._e, 16),
                e
              );
            }),
            (e.exports = l);
        },
        707: (e, t, r) => {
          var n = r(5291),
            i = n.Buffer;
          function o(e, t) {
            for (var r in e) t[r] = e[r];
          }
          function a(e, t, r) {
            return i(e, t, r);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
            ? (e.exports = n)
            : (o(n, t), (t.Buffer = a)),
            (a.prototype = Object.create(i.prototype)),
            o(i, a),
            (a.from = function (e, t, r) {
              if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
              return i(e, t, r);
            }),
            (a.alloc = function (e, t, r) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              var n = i(e);
              return (
                void 0 !== t
                  ? "string" == typeof r
                    ? n.fill(t, r)
                    : n.fill(t)
                  : n.fill(0),
                n
              );
            }),
            (a.allocUnsafe = function (e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return i(e);
            }),
            (a.allocUnsafeSlow = function (e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return n.SlowBuffer(e);
            });
        },
        3327: (e, t, r) => {
          "use strict";
          var n,
            i = r(3158),
            o = r(5291),
            a = o.Buffer,
            s = {};
          for (n in o)
            o.hasOwnProperty(n) &&
              "SlowBuffer" !== n &&
              "Buffer" !== n &&
              (s[n] = o[n]);
          var f = (s.Buffer = {});
          for (n in a)
            a.hasOwnProperty(n) &&
              "allocUnsafe" !== n &&
              "allocUnsafeSlow" !== n &&
              (f[n] = a[n]);
          if (
            ((s.Buffer.prototype = a.prototype),
            (f.from && f.from !== Uint8Array.from) ||
              (f.from = function (e, t, r) {
                if ("number" == typeof e)
                  throw new TypeError(
                    'The "value" argument must not be of type number. Received type ' +
                      typeof e
                  );
                if (e && void 0 === e.length)
                  throw new TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                return a(e, t, r);
              }),
            f.alloc ||
              (f.alloc = function (e, t, r) {
                if ("number" != typeof e)
                  throw new TypeError(
                    'The "size" argument must be of type number. Received type ' +
                      typeof e
                  );
                if (e < 0 || e >= 2 * (1 << 30))
                  throw new RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var n = a(e);
                return (
                  t && 0 !== t.length
                    ? "string" == typeof r
                      ? n.fill(t, r)
                      : n.fill(t)
                    : n.fill(0),
                  n
                );
              }),
            !s.kStringMaxLength)
          )
            try {
              s.kStringMaxLength = i.binding("buffer").kStringMaxLength;
            } catch (e) {}
          s.constants ||
            ((s.constants = { MAX_LENGTH: s.kMaxLength }),
            s.kStringMaxLength &&
              (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)),
            (e.exports = s);
        },
        1594: (e, t, r) => {
          var n = r(707).Buffer;
          function i(e, t) {
            (this._block = n.alloc(e)),
              (this._finalSize = t),
              (this._blockSize = e),
              (this._len = 0);
          }
          (i.prototype.update = function (e, t) {
            "string" == typeof e && ((t = t || "utf8"), (e = n.from(e, t)));
            for (
              var r = this._block,
                i = this._blockSize,
                o = e.length,
                a = this._len,
                s = 0;
              s < o;

            ) {
              for (var f = a % i, c = Math.min(o - s, i - f), u = 0; u < c; u++)
                r[f + u] = e[s + u];
              (s += c), (a += c) % i == 0 && this._update(r);
            }
            return (this._len += o), this;
          }),
            (i.prototype.digest = function (e) {
              var t = this._len % this._blockSize;
              (this._block[t] = 128),
                this._block.fill(0, t + 1),
                t >= this._finalSize &&
                  (this._update(this._block), this._block.fill(0));
              var r = 8 * this._len;
              if (r <= 4294967295)
                this._block.writeUInt32BE(r, this._blockSize - 4);
              else {
                var n = (4294967295 & r) >>> 0,
                  i = (r - n) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8),
                  this._block.writeUInt32BE(n, this._blockSize - 4);
              }
              this._update(this._block);
              var o = this._hash();
              return e ? o.toString(e) : o;
            }),
            (i.prototype._update = function () {
              throw new Error("_update must be implemented by subclass");
            }),
            (e.exports = i);
        },
        6065: (e, t, r) => {
          var n = (e.exports = function (e) {
            e = e.toLowerCase();
            var t = n[e];
            if (!t)
              throw new Error(
                e + " is not supported (we accept pull requests)"
              );
            return new t();
          });
          (n.sha = r(5299)),
            (n.sha1 = r(9510)),
            (n.sha224 = r(5907)),
            (n.sha256 = r(7564)),
            (n.sha384 = r(1559)),
            (n.sha512 = r(5932));
        },
        5299: (e, t, r) => {
          var n = r(2111),
            i = r(1594),
            o = r(707).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);
          function f() {
            this.init(), (this._w = s), i.call(this, 64, 56);
          }
          function c(e) {
            return (e << 30) | (e >>> 2);
          }
          function u(e, t, r, n) {
            return 0 === e
              ? (t & r) | (~t & n)
              : 2 === e
              ? (t & r) | (t & n) | (r & n)
              : t ^ r ^ n;
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._a = 1732584193),
                (this._b = 4023233417),
                (this._c = 2562383102),
                (this._d = 271733878),
                (this._e = 3285377520),
                this
              );
            }),
            (f.prototype._update = function (e) {
              for (
                var t,
                  r = this._w,
                  n = 0 | this._a,
                  i = 0 | this._b,
                  o = 0 | this._c,
                  s = 0 | this._d,
                  f = 0 | this._e,
                  d = 0;
                d < 16;
                ++d
              )
                r[d] = e.readInt32BE(4 * d);
              for (; d < 80; ++d)
                r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
              for (var h = 0; h < 80; ++h) {
                var l = ~~(h / 20),
                  p =
                    0 |
                    ((((t = n) << 5) | (t >>> 27)) +
                      u(l, i, o, s) +
                      f +
                      r[h] +
                      a[l]);
                (f = s), (s = o), (o = c(i)), (i = n), (n = p);
              }
              (this._a = (n + this._a) | 0),
                (this._b = (i + this._b) | 0),
                (this._c = (o + this._c) | 0),
                (this._d = (s + this._d) | 0),
                (this._e = (f + this._e) | 0);
            }),
            (f.prototype._hash = function () {
              var e = o.allocUnsafe(20);
              return (
                e.writeInt32BE(0 | this._a, 0),
                e.writeInt32BE(0 | this._b, 4),
                e.writeInt32BE(0 | this._c, 8),
                e.writeInt32BE(0 | this._d, 12),
                e.writeInt32BE(0 | this._e, 16),
                e
              );
            }),
            (e.exports = f);
        },
        9510: (e, t, r) => {
          var n = r(2111),
            i = r(1594),
            o = r(707).Buffer,
            a = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);
          function f() {
            this.init(), (this._w = s), i.call(this, 64, 56);
          }
          function c(e) {
            return (e << 5) | (e >>> 27);
          }
          function u(e) {
            return (e << 30) | (e >>> 2);
          }
          function d(e, t, r, n) {
            return 0 === e
              ? (t & r) | (~t & n)
              : 2 === e
              ? (t & r) | (t & n) | (r & n)
              : t ^ r ^ n;
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._a = 1732584193),
                (this._b = 4023233417),
                (this._c = 2562383102),
                (this._d = 271733878),
                (this._e = 3285377520),
                this
              );
            }),
            (f.prototype._update = function (e) {
              for (
                var t,
                  r = this._w,
                  n = 0 | this._a,
                  i = 0 | this._b,
                  o = 0 | this._c,
                  s = 0 | this._d,
                  f = 0 | this._e,
                  h = 0;
                h < 16;
                ++h
              )
                r[h] = e.readInt32BE(4 * h);
              for (; h < 80; ++h)
                r[h] =
                  ((t = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1) |
                  (t >>> 31);
              for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20),
                  b = (c(n) + d(p, i, o, s) + f + r[l] + a[p]) | 0;
                (f = s), (s = o), (o = u(i)), (i = n), (n = b);
              }
              (this._a = (n + this._a) | 0),
                (this._b = (i + this._b) | 0),
                (this._c = (o + this._c) | 0),
                (this._d = (s + this._d) | 0),
                (this._e = (f + this._e) | 0);
            }),
            (f.prototype._hash = function () {
              var e = o.allocUnsafe(20);
              return (
                e.writeInt32BE(0 | this._a, 0),
                e.writeInt32BE(0 | this._b, 4),
                e.writeInt32BE(0 | this._c, 8),
                e.writeInt32BE(0 | this._d, 12),
                e.writeInt32BE(0 | this._e, 16),
                e
              );
            }),
            (e.exports = f);
        },
        5907: (e, t, r) => {
          var n = r(2111),
            i = r(7564),
            o = r(1594),
            a = r(707).Buffer,
            s = new Array(64);
          function f() {
            this.init(), (this._w = s), o.call(this, 64, 56);
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._a = 3238371032),
                (this._b = 914150663),
                (this._c = 812702999),
                (this._d = 4144912697),
                (this._e = 4290775857),
                (this._f = 1750603025),
                (this._g = 1694076839),
                (this._h = 3204075428),
                this
              );
            }),
            (f.prototype._hash = function () {
              var e = a.allocUnsafe(28);
              return (
                e.writeInt32BE(this._a, 0),
                e.writeInt32BE(this._b, 4),
                e.writeInt32BE(this._c, 8),
                e.writeInt32BE(this._d, 12),
                e.writeInt32BE(this._e, 16),
                e.writeInt32BE(this._f, 20),
                e.writeInt32BE(this._g, 24),
                e
              );
            }),
            (e.exports = f);
        },
        7564: (e, t, r) => {
          var n = r(2111),
            i = r(1594),
            o = r(707).Buffer,
            a = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            s = new Array(64);
          function f() {
            this.init(), (this._w = s), i.call(this, 64, 56);
          }
          function c(e, t, r) {
            return r ^ (e & (t ^ r));
          }
          function u(e, t, r) {
            return (e & t) | (r & (e | t));
          }
          function d(e) {
            return (
              ((e >>> 2) | (e << 30)) ^
              ((e >>> 13) | (e << 19)) ^
              ((e >>> 22) | (e << 10))
            );
          }
          function h(e) {
            return (
              ((e >>> 6) | (e << 26)) ^
              ((e >>> 11) | (e << 21)) ^
              ((e >>> 25) | (e << 7))
            );
          }
          function l(e) {
            return (
              ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3)
            );
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._a = 1779033703),
                (this._b = 3144134277),
                (this._c = 1013904242),
                (this._d = 2773480762),
                (this._e = 1359893119),
                (this._f = 2600822924),
                (this._g = 528734635),
                (this._h = 1541459225),
                this
              );
            }),
            (f.prototype._update = function (e) {
              for (
                var t,
                  r = this._w,
                  n = 0 | this._a,
                  i = 0 | this._b,
                  o = 0 | this._c,
                  s = 0 | this._d,
                  f = 0 | this._e,
                  p = 0 | this._f,
                  b = 0 | this._g,
                  y = 0 | this._h,
                  g = 0;
                g < 16;
                ++g
              )
                r[g] = e.readInt32BE(4 * g);
              for (; g < 64; ++g)
                r[g] =
                  0 |
                  (((((t = r[g - 2]) >>> 17) | (t << 15)) ^
                    ((t >>> 19) | (t << 13)) ^
                    (t >>> 10)) +
                    r[g - 7] +
                    l(r[g - 15]) +
                    r[g - 16]);
              for (var m = 0; m < 64; ++m) {
                var v = (y + h(f) + c(f, p, b) + a[m] + r[m]) | 0,
                  w = (d(n) + u(n, i, o)) | 0;
                (y = b),
                  (b = p),
                  (p = f),
                  (f = (s + v) | 0),
                  (s = o),
                  (o = i),
                  (i = n),
                  (n = (v + w) | 0);
              }
              (this._a = (n + this._a) | 0),
                (this._b = (i + this._b) | 0),
                (this._c = (o + this._c) | 0),
                (this._d = (s + this._d) | 0),
                (this._e = (f + this._e) | 0),
                (this._f = (p + this._f) | 0),
                (this._g = (b + this._g) | 0),
                (this._h = (y + this._h) | 0);
            }),
            (f.prototype._hash = function () {
              var e = o.allocUnsafe(32);
              return (
                e.writeInt32BE(this._a, 0),
                e.writeInt32BE(this._b, 4),
                e.writeInt32BE(this._c, 8),
                e.writeInt32BE(this._d, 12),
                e.writeInt32BE(this._e, 16),
                e.writeInt32BE(this._f, 20),
                e.writeInt32BE(this._g, 24),
                e.writeInt32BE(this._h, 28),
                e
              );
            }),
            (e.exports = f);
        },
        1559: (e, t, r) => {
          var n = r(2111),
            i = r(5932),
            o = r(1594),
            a = r(707).Buffer,
            s = new Array(160);
          function f() {
            this.init(), (this._w = s), o.call(this, 128, 112);
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._ah = 3418070365),
                (this._bh = 1654270250),
                (this._ch = 2438529370),
                (this._dh = 355462360),
                (this._eh = 1731405415),
                (this._fh = 2394180231),
                (this._gh = 3675008525),
                (this._hh = 1203062813),
                (this._al = 3238371032),
                (this._bl = 914150663),
                (this._cl = 812702999),
                (this._dl = 4144912697),
                (this._el = 4290775857),
                (this._fl = 1750603025),
                (this._gl = 1694076839),
                (this._hl = 3204075428),
                this
              );
            }),
            (f.prototype._hash = function () {
              var e = a.allocUnsafe(48);
              function t(t, r, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
              }
              return (
                t(this._ah, this._al, 0),
                t(this._bh, this._bl, 8),
                t(this._ch, this._cl, 16),
                t(this._dh, this._dl, 24),
                t(this._eh, this._el, 32),
                t(this._fh, this._fl, 40),
                e
              );
            }),
            (e.exports = f);
        },
        5932: (e, t, r) => {
          var n = r(2111),
            i = r(1594),
            o = r(707).Buffer,
            a = [
              1116352408, 3609767458, 1899447441, 602891725, 3049323471,
              3964484399, 3921009573, 2173295548, 961987163, 4081628472,
              1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
              3664609560, 3624381080, 2734883394, 310598401, 1164996542,
              607225278, 1323610764, 1426881987, 3590304994, 1925078388,
              4068182383, 2162078206, 991336113, 2614888103, 633803317,
              3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
              944711139, 264347078, 2341262773, 604807628, 2007800933,
              770255983, 1495990901, 1249150122, 1856431235, 1555081692,
              3175218132, 1996064986, 2198950837, 2554220882, 3999719339,
              2821834349, 766784016, 2952996808, 2566594879, 3210313671,
              3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
              113926993, 3758326383, 338241895, 168717936, 666307205,
              1188179964, 773529912, 1546045734, 1294757372, 1522805485,
              1396182291, 2643833823, 1695183700, 2343527390, 1986661051,
              1014477480, 2177026350, 1206759142, 2456956037, 344077627,
              2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
              3505952657, 3345764771, 106217008, 3516065817, 3606008344,
              3600352804, 1432725776, 4094571909, 1467031594, 275423344,
              851169720, 430227734, 3100823752, 506948616, 1363258195,
              659060556, 3750685593, 883997877, 3785050280, 958139571,
              3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
              1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
              1125592928, 2227730452, 2716904306, 2361852424, 442776044,
              2428436474, 593698344, 2756734187, 3733110249, 3204031479,
              2999351573, 3329325298, 3815920427, 3391569614, 3928383900,
              3515267271, 566280711, 3940187606, 3454069534, 4118630271,
              4000239992, 116418474, 1914138554, 174292421, 2731055270,
              289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
              852142971, 1086792851, 1017036298, 365543100, 1126000580,
              2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
              1607167915, 987167468, 1816402316, 1246189591,
            ],
            s = new Array(160);
          function f() {
            this.init(), (this._w = s), i.call(this, 128, 112);
          }
          function c(e, t, r) {
            return r ^ (e & (t ^ r));
          }
          function u(e, t, r) {
            return (e & t) | (r & (e | t));
          }
          function d(e, t) {
            return (
              ((e >>> 28) | (t << 4)) ^
              ((t >>> 2) | (e << 30)) ^
              ((t >>> 7) | (e << 25))
            );
          }
          function h(e, t) {
            return (
              ((e >>> 14) | (t << 18)) ^
              ((e >>> 18) | (t << 14)) ^
              ((t >>> 9) | (e << 23))
            );
          }
          function l(e, t) {
            return (
              ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7)
            );
          }
          function p(e, t) {
            return (
              ((e >>> 1) | (t << 31)) ^
              ((e >>> 8) | (t << 24)) ^
              ((e >>> 7) | (t << 25))
            );
          }
          function b(e, t) {
            return (
              ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6)
            );
          }
          function y(e, t) {
            return (
              ((e >>> 19) | (t << 13)) ^
              ((t >>> 29) | (e << 3)) ^
              ((e >>> 6) | (t << 26))
            );
          }
          function g(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0;
          }
          n(f, i),
            (f.prototype.init = function () {
              return (
                (this._ah = 1779033703),
                (this._bh = 3144134277),
                (this._ch = 1013904242),
                (this._dh = 2773480762),
                (this._eh = 1359893119),
                (this._fh = 2600822924),
                (this._gh = 528734635),
                (this._hh = 1541459225),
                (this._al = 4089235720),
                (this._bl = 2227873595),
                (this._cl = 4271175723),
                (this._dl = 1595750129),
                (this._el = 2917565137),
                (this._fl = 725511199),
                (this._gl = 4215389547),
                (this._hl = 327033209),
                this
              );
            }),
            (f.prototype._update = function (e) {
              for (
                var t = this._w,
                  r = 0 | this._ah,
                  n = 0 | this._bh,
                  i = 0 | this._ch,
                  o = 0 | this._dh,
                  s = 0 | this._eh,
                  f = 0 | this._fh,
                  m = 0 | this._gh,
                  v = 0 | this._hh,
                  w = 0 | this._al,
                  _ = 0 | this._bl,
                  S = 0 | this._cl,
                  E = 0 | this._dl,
                  A = 0 | this._el,
                  M = 0 | this._fl,
                  k = 0 | this._gl,
                  O = 0 | this._hl,
                  I = 0;
                I < 32;
                I += 2
              )
                (t[I] = e.readInt32BE(4 * I)),
                  (t[I + 1] = e.readInt32BE(4 * I + 4));
              for (; I < 160; I += 2) {
                var C = t[I - 30],
                  R = t[I - 30 + 1],
                  P = l(C, R),
                  x = p(R, C),
                  B = b((C = t[I - 4]), (R = t[I - 4 + 1])),
                  T = y(R, C),
                  j = t[I - 14],
                  D = t[I - 14 + 1],
                  L = t[I - 32],
                  N = t[I - 32 + 1],
                  U = (x + D) | 0,
                  q = (P + j + g(U, x)) | 0;
                (q =
                  ((q = (q + B + g((U = (U + T) | 0), T)) | 0) +
                    L +
                    g((U = (U + N) | 0), N)) |
                  0),
                  (t[I] = q),
                  (t[I + 1] = U);
              }
              for (var z = 0; z < 160; z += 2) {
                (q = t[z]), (U = t[z + 1]);
                var F = u(r, n, i),
                  W = u(w, _, S),
                  K = d(r, w),
                  H = d(w, r),
                  V = h(s, A),
                  G = h(A, s),
                  $ = a[z],
                  X = a[z + 1],
                  J = c(s, f, m),
                  Y = c(A, M, k),
                  Z = (O + G) | 0,
                  Q = (v + V + g(Z, O)) | 0;
                Q =
                  ((Q =
                    ((Q = (Q + J + g((Z = (Z + Y) | 0), Y)) | 0) +
                      $ +
                      g((Z = (Z + X) | 0), X)) |
                    0) +
                    q +
                    g((Z = (Z + U) | 0), U)) |
                  0;
                var ee = (H + W) | 0,
                  te = (K + F + g(ee, H)) | 0;
                (v = m),
                  (O = k),
                  (m = f),
                  (k = M),
                  (f = s),
                  (M = A),
                  (s = (o + Q + g((A = (E + Z) | 0), E)) | 0),
                  (o = i),
                  (E = S),
                  (i = n),
                  (S = _),
                  (n = r),
                  (_ = w),
                  (r = (Q + te + g((w = (Z + ee) | 0), Z)) | 0);
              }
              (this._al = (this._al + w) | 0),
                (this._bl = (this._bl + _) | 0),
                (this._cl = (this._cl + S) | 0),
                (this._dl = (this._dl + E) | 0),
                (this._el = (this._el + A) | 0),
                (this._fl = (this._fl + M) | 0),
                (this._gl = (this._gl + k) | 0),
                (this._hl = (this._hl + O) | 0),
                (this._ah = (this._ah + r + g(this._al, w)) | 0),
                (this._bh = (this._bh + n + g(this._bl, _)) | 0),
                (this._ch = (this._ch + i + g(this._cl, S)) | 0),
                (this._dh = (this._dh + o + g(this._dl, E)) | 0),
                (this._eh = (this._eh + s + g(this._el, A)) | 0),
                (this._fh = (this._fh + f + g(this._fl, M)) | 0),
                (this._gh = (this._gh + m + g(this._gl, k)) | 0),
                (this._hh = (this._hh + v + g(this._hl, O)) | 0);
            }),
            (f.prototype._hash = function () {
              var e = o.allocUnsafe(64);
              function t(t, r, n) {
                e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4);
              }
              return (
                t(this._ah, this._al, 0),
                t(this._bh, this._bl, 8),
                t(this._ch, this._cl, 16),
                t(this._dh, this._dl, 24),
                t(this._eh, this._el, 32),
                t(this._fh, this._fl, 40),
                t(this._gh, this._gl, 48),
                t(this._hh, this._hl, 56),
                e
              );
            }),
            (e.exports = f);
        },
        3946: (e, t, r) => {
          e.exports = i;
          var n = r(7531).EventEmitter;
          function i() {
            n.call(this);
          }
          r(2111)(i, n),
            (i.Readable = r(2070)),
            (i.Writable = r(2501)),
            (i.Duplex = r(7879)),
            (i.Transform = r(6269)),
            (i.PassThrough = r(4100)),
            (i.finished = r(6738)),
            (i.pipeline = r(6718)),
            (i.Stream = i),
            (i.prototype.pipe = function (e, t) {
              var r = this;
              function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause();
              }
              function o() {
                r.readable && r.resume && r.resume();
              }
              r.on("data", i),
                e.on("drain", o),
                e._isStdio ||
                  (t && !1 === t.end) ||
                  (r.on("end", s), r.on("close", f));
              var a = !1;
              function s() {
                a || ((a = !0), e.end());
              }
              function f() {
                a || ((a = !0), "function" == typeof e.destroy && e.destroy());
              }
              function c(e) {
                if ((u(), 0 === n.listenerCount(this, "error"))) throw e;
              }
              function u() {
                r.removeListener("data", i),
                  e.removeListener("drain", o),
                  r.removeListener("end", s),
                  r.removeListener("close", f),
                  r.removeListener("error", c),
                  e.removeListener("error", c),
                  r.removeListener("end", u),
                  r.removeListener("close", u),
                  e.removeListener("close", u);
              }
              return (
                r.on("error", c),
                e.on("error", c),
                r.on("end", u),
                r.on("close", u),
                e.on("close", u),
                e.emit("pipe", r),
                e
              );
            });
        },
        7682: (e, t, r) => {
          "use strict";
          var n = r(707).Buffer,
            i =
              n.isEncoding ||
              function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1;
                }
              };
          function o(e) {
            var t;
            switch (
              ((this.encoding = (function (e) {
                var t = (function (e) {
                  if (!e) return "utf8";
                  for (var t; ; )
                    switch (e) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return e;
                      default:
                        if (t) return;
                        (e = ("" + e).toLowerCase()), (t = !0);
                    }
                })(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                  throw new Error("Unknown encoding: " + e);
                return t || e;
              })(e)),
              this.encoding)
            ) {
              case "utf16le":
                (this.text = f), (this.end = c), (t = 4);
                break;
              case "utf8":
                (this.fillLast = s), (t = 4);
                break;
              case "base64":
                (this.text = u), (this.end = d), (t = 3);
                break;
              default:
                return (this.write = h), void (this.end = l);
            }
            (this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = n.allocUnsafe(t));
          }
          function a(e) {
            return e <= 127
              ? 0
              : e >> 5 == 6
              ? 2
              : e >> 4 == 14
              ? 3
              : e >> 3 == 30
              ? 4
              : e >> 6 == 2
              ? -1
              : -2;
          }
          function s(e) {
            var t = this.lastTotal - this.lastNeed,
              r = (function (e, t, r) {
                if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
                if (e.lastNeed > 1 && t.length > 1) {
                  if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
                  if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return (e.lastNeed = 2), "�";
                }
              })(this, e);
            return void 0 !== r
              ? r
              : this.lastNeed <= e.length
              ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : (e.copy(this.lastChar, t, 0, e.length),
                void (this.lastNeed -= e.length));
          }
          function f(e, t) {
            if ((e.length - t) % 2 == 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1]),
                    r.slice(0, -1)
                  );
              }
              return r;
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = e[e.length - 1]),
              e.toString("utf16le", t, e.length - 1)
            );
          }
          function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
          }
          function u(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r
              ? e.toString("base64", t)
              : ((this.lastNeed = 3 - r),
                (this.lastTotal = 3),
                1 === r
                  ? (this.lastChar[0] = e[e.length - 1])
                  : ((this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1])),
                e.toString("base64", t, e.length - r));
          }
          function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed
              ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
              : t;
          }
          function h(e) {
            return e.toString(this.encoding);
          }
          function l(e) {
            return e && e.length ? this.write(e) : "";
          }
          (t.s = o),
            (o.prototype.write = function (e) {
              if (0 === e.length) return "";
              var t, r;
              if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                (r = this.lastNeed), (this.lastNeed = 0);
              } else r = 0;
              return r < e.length
                ? t
                  ? t + this.text(e, r)
                  : this.text(e, r)
                : t || "";
            }),
            (o.prototype.end = function (e) {
              var t = e && e.length ? this.write(e) : "";
              return this.lastNeed ? t + "�" : t;
            }),
            (o.prototype.text = function (e, t) {
              var r = (function (e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = a(t[n]);
                return i >= 0
                  ? (i > 0 && (e.lastNeed = i - 1), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = a(t[n])) >= 0
                  ? (i > 0 && (e.lastNeed = i - 2), i)
                  : --n < r || -2 === i
                  ? 0
                  : (i = a(t[n])) >= 0
                  ? (i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i)
                  : 0;
              })(this, e, t);
              if (!this.lastNeed) return e.toString("utf8", t);
              this.lastTotal = r;
              var n = e.length - (r - this.lastNeed);
              return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
            }),
            (o.prototype.fillLast = function (e) {
              if (this.lastNeed <= e.length)
                return (
                  e.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                );
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                e.length
              ),
                (this.lastNeed -= e.length);
            });
        },
        737: (e, t, r) => {
          function n(e) {
            try {
              if (!r.g.localStorage) return !1;
            } catch (e) {
              return !1;
            }
            var t = r.g.localStorage[e];
            return null != t && "true" === String(t).toLowerCase();
          }
          e.exports = function (e, t) {
            if (n("noDeprecation")) return e;
            var r = !1;
            return function () {
              if (!r) {
                if (n("throwDeprecation")) throw new Error(t);
                n("traceDeprecation") ? console.trace(t) : console.warn(t),
                  (r = !0);
              }
              return e.apply(this, arguments);
            };
          };
        },
        7502: (e) => {
          e.exports = function (e) {
            return (
              e &&
              "object" == typeof e &&
              "function" == typeof e.copy &&
              "function" == typeof e.fill &&
              "function" == typeof e.readUInt8
            );
          };
        },
        1268: (e, t, r) => {
          "use strict";
          var n = r(4043),
            i = r(6936),
            o = r(9154),
            a = r(6421);
          function s(e) {
            return e.call.bind(e);
          }
          var f = "undefined" != typeof BigInt,
            c = "undefined" != typeof Symbol,
            u = s(Object.prototype.toString),
            d = s(Number.prototype.valueOf),
            h = s(String.prototype.valueOf),
            l = s(Boolean.prototype.valueOf);
          if (f) var p = s(BigInt.prototype.valueOf);
          if (c) var b = s(Symbol.prototype.valueOf);
          function y(e, t) {
            if ("object" != typeof e) return !1;
            try {
              return t(e), !0;
            } catch (e) {
              return !1;
            }
          }
          function g(e) {
            return "[object Map]" === u(e);
          }
          function m(e) {
            return "[object Set]" === u(e);
          }
          function v(e) {
            return "[object WeakMap]" === u(e);
          }
          function w(e) {
            return "[object WeakSet]" === u(e);
          }
          function _(e) {
            return "[object ArrayBuffer]" === u(e);
          }
          function S(e) {
            return (
              "undefined" != typeof ArrayBuffer &&
              (_.working ? _(e) : e instanceof ArrayBuffer)
            );
          }
          function E(e) {
            return "[object DataView]" === u(e);
          }
          function A(e) {
            return (
              "undefined" != typeof DataView &&
              (E.working ? E(e) : e instanceof DataView)
            );
          }
          (t.isArgumentsObject = n),
            (t.isGeneratorFunction = i),
            (t.isTypedArray = a),
            (t.isPromise = function (e) {
              return (
                ("undefined" != typeof Promise && e instanceof Promise) ||
                (null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.then &&
                  "function" == typeof e.catch)
              );
            }),
            (t.isArrayBufferView = function (e) {
              return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : a(e) || A(e);
            }),
            (t.isUint8Array = function (e) {
              return "Uint8Array" === o(e);
            }),
            (t.isUint8ClampedArray = function (e) {
              return "Uint8ClampedArray" === o(e);
            }),
            (t.isUint16Array = function (e) {
              return "Uint16Array" === o(e);
            }),
            (t.isUint32Array = function (e) {
              return "Uint32Array" === o(e);
            }),
            (t.isInt8Array = function (e) {
              return "Int8Array" === o(e);
            }),
            (t.isInt16Array = function (e) {
              return "Int16Array" === o(e);
            }),
            (t.isInt32Array = function (e) {
              return "Int32Array" === o(e);
            }),
            (t.isFloat32Array = function (e) {
              return "Float32Array" === o(e);
            }),
            (t.isFloat64Array = function (e) {
              return "Float64Array" === o(e);
            }),
            (t.isBigInt64Array = function (e) {
              return "BigInt64Array" === o(e);
            }),
            (t.isBigUint64Array = function (e) {
              return "BigUint64Array" === o(e);
            }),
            (g.working = "undefined" != typeof Map && g(new Map())),
            (t.isMap = function (e) {
              return (
                "undefined" != typeof Map &&
                (g.working ? g(e) : e instanceof Map)
              );
            }),
            (m.working = "undefined" != typeof Set && m(new Set())),
            (t.isSet = function (e) {
              return (
                "undefined" != typeof Set &&
                (m.working ? m(e) : e instanceof Set)
              );
            }),
            (v.working = "undefined" != typeof WeakMap && v(new WeakMap())),
            (t.isWeakMap = function (e) {
              return (
                "undefined" != typeof WeakMap &&
                (v.working ? v(e) : e instanceof WeakMap)
              );
            }),
            (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
            (t.isWeakSet = function (e) {
              return w(e);
            }),
            (_.working =
              "undefined" != typeof ArrayBuffer && _(new ArrayBuffer())),
            (t.isArrayBuffer = S),
            (E.working =
              "undefined" != typeof ArrayBuffer &&
              "undefined" != typeof DataView &&
              E(new DataView(new ArrayBuffer(1), 0, 1))),
            (t.isDataView = A);
          var M =
            "undefined" != typeof SharedArrayBuffer
              ? SharedArrayBuffer
              : void 0;
          function k(e) {
            return "[object SharedArrayBuffer]" === u(e);
          }
          function O(e) {
            return (
              void 0 !== M &&
              (void 0 === k.working && (k.working = k(new M())),
              k.working ? k(e) : e instanceof M)
            );
          }
          function I(e) {
            return y(e, d);
          }
          function C(e) {
            return y(e, h);
          }
          function R(e) {
            return y(e, l);
          }
          function P(e) {
            return f && y(e, p);
          }
          function x(e) {
            return c && y(e, b);
          }
          (t.isSharedArrayBuffer = O),
            (t.isAsyncFunction = function (e) {
              return "[object AsyncFunction]" === u(e);
            }),
            (t.isMapIterator = function (e) {
              return "[object Map Iterator]" === u(e);
            }),
            (t.isSetIterator = function (e) {
              return "[object Set Iterator]" === u(e);
            }),
            (t.isGeneratorObject = function (e) {
              return "[object Generator]" === u(e);
            }),
            (t.isWebAssemblyCompiledModule = function (e) {
              return "[object WebAssembly.Module]" === u(e);
            }),
            (t.isNumberObject = I),
            (t.isStringObject = C),
            (t.isBooleanObject = R),
            (t.isBigIntObject = P),
            (t.isSymbolObject = x),
            (t.isBoxedPrimitive = function (e) {
              return I(e) || C(e) || R(e) || P(e) || x(e);
            }),
            (t.isAnyArrayBuffer = function (e) {
              return "undefined" != typeof Uint8Array && (S(e) || O(e));
            }),
            ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
              function (e) {
                Object.defineProperty(t, e, {
                  enumerable: !1,
                  value: function () {
                    throw new Error(e + " is not supported in userland");
                  },
                });
              }
            );
        },
        2019: (e, t, r) => {
          var n = r(3158),
            i =
              Object.getOwnPropertyDescriptors ||
              function (e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                  r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                return r;
              },
            o = /%[sdj%]/g;
          (t.format = function (e) {
            if (!v(e)) {
              for (var t = [], r = 0; r < arguments.length; r++)
                t.push(c(arguments[r]));
              return t.join(" ");
            }
            r = 1;
            for (
              var n = arguments,
                i = n.length,
                a = String(e).replace(o, function (e) {
                  if ("%%" === e) return "%";
                  if (r >= i) return e;
                  switch (e) {
                    case "%s":
                      return String(n[r++]);
                    case "%d":
                      return Number(n[r++]);
                    case "%j":
                      try {
                        return JSON.stringify(n[r++]);
                      } catch (e) {
                        return "[Circular]";
                      }
                    default:
                      return e;
                  }
                }),
                s = n[r];
              r < i;
              s = n[++r]
            )
              g(s) || !S(s) ? (a += " " + s) : (a += " " + c(s));
            return a;
          }),
            (t.deprecate = function (e, r) {
              if (void 0 !== n && !0 === n.noDeprecation) return e;
              if (void 0 === n)
                return function () {
                  return t.deprecate(e, r).apply(this, arguments);
                };
              var i = !1;
              return function () {
                if (!i) {
                  if (n.throwDeprecation) throw new Error(r);
                  n.traceDeprecation ? console.trace(r) : console.error(r),
                    (i = !0);
                }
                return e.apply(this, arguments);
              };
            });
          var a = {},
            s = /^$/;
          if (n.env.NODE_DEBUG) {
            var f = n.env.NODE_DEBUG;
            (f = f
              .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
              .replace(/\*/g, ".*")
              .replace(/,/g, "$|^")
              .toUpperCase()),
              (s = new RegExp("^" + f + "$", "i"));
          }
          function c(e, r) {
            var n = { seen: [], stylize: d };
            return (
              arguments.length >= 3 && (n.depth = arguments[2]),
              arguments.length >= 4 && (n.colors = arguments[3]),
              y(r) ? (n.showHidden = r) : r && t._extend(n, r),
              w(n.showHidden) && (n.showHidden = !1),
              w(n.depth) && (n.depth = 2),
              w(n.colors) && (n.colors = !1),
              w(n.customInspect) && (n.customInspect = !0),
              n.colors && (n.stylize = u),
              h(n, e, n.depth)
            );
          }
          function u(e, t) {
            var r = c.styles[t];
            return r
              ? "[" + c.colors[r][0] + "m" + e + "[" + c.colors[r][1] + "m"
              : e;
          }
          function d(e, t) {
            return e;
          }
          function h(e, r, n) {
            if (
              e.customInspect &&
              r &&
              M(r.inspect) &&
              r.inspect !== t.inspect &&
              (!r.constructor || r.constructor.prototype !== r)
            ) {
              var i = r.inspect(n, e);
              return v(i) || (i = h(e, i, n)), i;
            }
            var o = (function (e, t) {
              if (w(t)) return e.stylize("undefined", "undefined");
              if (v(t)) {
                var r =
                  "'" +
                  JSON.stringify(t)
                    .replace(/^"|"$/g, "")
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return e.stylize(r, "string");
              }
              return m(t)
                ? e.stylize("" + t, "number")
                : y(t)
                ? e.stylize("" + t, "boolean")
                : g(t)
                ? e.stylize("null", "null")
                : void 0;
            })(e, r);
            if (o) return o;
            var a = Object.keys(r),
              s = (function (e) {
                var t = {};
                return (
                  e.forEach(function (e, r) {
                    t[e] = !0;
                  }),
                  t
                );
              })(a);
            if (
              (e.showHidden && (a = Object.getOwnPropertyNames(r)),
              A(r) &&
                (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
            )
              return l(r);
            if (0 === a.length) {
              if (M(r)) {
                var f = r.name ? ": " + r.name : "";
                return e.stylize("[Function" + f + "]", "special");
              }
              if (_(r))
                return e.stylize(RegExp.prototype.toString.call(r), "regexp");
              if (E(r))
                return e.stylize(Date.prototype.toString.call(r), "date");
              if (A(r)) return l(r);
            }
            var c,
              u = "",
              d = !1,
              S = ["{", "}"];
            return (
              b(r) && ((d = !0), (S = ["[", "]"])),
              M(r) && (u = " [Function" + (r.name ? ": " + r.name : "") + "]"),
              _(r) && (u = " " + RegExp.prototype.toString.call(r)),
              E(r) && (u = " " + Date.prototype.toUTCString.call(r)),
              A(r) && (u = " " + l(r)),
              0 !== a.length || (d && 0 != r.length)
                ? n < 0
                  ? _(r)
                    ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                    : e.stylize("[Object]", "special")
                  : (e.seen.push(r),
                    (c = d
                      ? (function (e, t, r, n, i) {
                          for (var o = [], a = 0, s = t.length; a < s; ++a)
                            C(t, String(a))
                              ? o.push(p(e, t, r, n, String(a), !0))
                              : o.push("");
                          return (
                            i.forEach(function (i) {
                              i.match(/^\d+$/) || o.push(p(e, t, r, n, i, !0));
                            }),
                            o
                          );
                        })(e, r, n, s, a)
                      : a.map(function (t) {
                          return p(e, r, n, s, t, d);
                        })),
                    e.seen.pop(),
                    (function (e, t, r) {
                      return e.reduce(function (e, t) {
                        return (
                          t.indexOf("\n"),
                          e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                        ? r[0] +
                            ("" === t ? "" : t + "\n ") +
                            " " +
                            e.join(",\n  ") +
                            " " +
                            r[1]
                        : r[0] + t + " " + e.join(", ") + " " + r[1];
                    })(c, u, S))
                : S[0] + u + S[1]
            );
          }
          function l(e) {
            return "[" + Error.prototype.toString.call(e) + "]";
          }
          function p(e, t, r, n, i, o) {
            var a, s, f;
            if (
              ((f = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] })
                .get
                ? (s = f.set
                    ? e.stylize("[Getter/Setter]", "special")
                    : e.stylize("[Getter]", "special"))
                : f.set && (s = e.stylize("[Setter]", "special")),
              C(n, i) || (a = "[" + i + "]"),
              s ||
                (e.seen.indexOf(f.value) < 0
                  ? (s = g(r)
                      ? h(e, f.value, null)
                      : h(e, f.value, r - 1)).indexOf("\n") > -1 &&
                    (s = o
                      ? s
                          .split("\n")
                          .map(function (e) {
                            return "  " + e;
                          })
                          .join("\n")
                          .slice(2)
                      : "\n" +
                        s
                          .split("\n")
                          .map(function (e) {
                            return "   " + e;
                          })
                          .join("\n"))
                  : (s = e.stylize("[Circular]", "special"))),
              w(a))
            ) {
              if (o && i.match(/^\d+$/)) return s;
              (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                ? ((a = a.slice(1, -1)), (a = e.stylize(a, "name")))
                : ((a = a
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  (a = e.stylize(a, "string")));
            }
            return a + ": " + s;
          }
          function b(e) {
            return Array.isArray(e);
          }
          function y(e) {
            return "boolean" == typeof e;
          }
          function g(e) {
            return null === e;
          }
          function m(e) {
            return "number" == typeof e;
          }
          function v(e) {
            return "string" == typeof e;
          }
          function w(e) {
            return void 0 === e;
          }
          function _(e) {
            return S(e) && "[object RegExp]" === k(e);
          }
          function S(e) {
            return "object" == typeof e && null !== e;
          }
          function E(e) {
            return S(e) && "[object Date]" === k(e);
          }
          function A(e) {
            return S(e) && ("[object Error]" === k(e) || e instanceof Error);
          }
          function M(e) {
            return "function" == typeof e;
          }
          function k(e) {
            return Object.prototype.toString.call(e);
          }
          function O(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10);
          }
          (t.debuglog = function (e) {
            if (((e = e.toUpperCase()), !a[e]))
              if (s.test(e)) {
                var r = n.pid;
                a[e] = function () {
                  var n = t.format.apply(t, arguments);
                  console.error("%s %d: %s", e, r, n);
                };
              } else a[e] = function () {};
            return a[e];
          }),
            (t.inspect = c),
            (c.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (c.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red",
            }),
            (t.types = r(1268)),
            (t.isArray = b),
            (t.isBoolean = y),
            (t.isNull = g),
            (t.isNullOrUndefined = function (e) {
              return null == e;
            }),
            (t.isNumber = m),
            (t.isString = v),
            (t.isSymbol = function (e) {
              return "symbol" == typeof e;
            }),
            (t.isUndefined = w),
            (t.isRegExp = _),
            (t.types.isRegExp = _),
            (t.isObject = S),
            (t.isDate = E),
            (t.types.isDate = E),
            (t.isError = A),
            (t.types.isNativeError = A),
            (t.isFunction = M),
            (t.isPrimitive = function (e) {
              return (
                null === e ||
                "boolean" == typeof e ||
                "number" == typeof e ||
                "string" == typeof e ||
                "symbol" == typeof e ||
                void 0 === e
              );
            }),
            (t.isBuffer = r(7502));
          var I = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          function C(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          (t.log = function () {
            var e, r;
            console.log(
              "%s - %s",
              ((r = [
                O((e = new Date()).getHours()),
                O(e.getMinutes()),
                O(e.getSeconds()),
              ].join(":")),
              [e.getDate(), I[e.getMonth()], r].join(" ")),
              t.format.apply(t, arguments)
            );
          }),
            (t.inherits = r(2111)),
            (t._extend = function (e, t) {
              if (!t || !S(t)) return e;
              for (var r = Object.keys(t), n = r.length; n--; )
                e[r[n]] = t[r[n]];
              return e;
            });
          var R =
            "undefined" != typeof Symbol
              ? Symbol("util.promisify.custom")
              : void 0;
          function P(e, t) {
            if (!e) {
              var r = new Error("Promise was rejected with a falsy value");
              (r.reason = e), (e = r);
            }
            return t(e);
          }
          (t.promisify = function (e) {
            if ("function" != typeof e)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            if (R && e[R]) {
              var t;
              if ("function" != typeof (t = e[R]))
                throw new TypeError(
                  'The "util.promisify.custom" argument must be of type Function'
                );
              return (
                Object.defineProperty(t, R, {
                  value: t,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
                t
              );
            }
            function t() {
              for (
                var t,
                  r,
                  n = new Promise(function (e, n) {
                    (t = e), (r = n);
                  }),
                  i = [],
                  o = 0;
                o < arguments.length;
                o++
              )
                i.push(arguments[o]);
              i.push(function (e, n) {
                e ? r(e) : t(n);
              });
              try {
                e.apply(this, i);
              } catch (e) {
                r(e);
              }
              return n;
            }
            return (
              Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
              R &&
                Object.defineProperty(t, R, {
                  value: t,
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                }),
              Object.defineProperties(t, i(e))
            );
          }),
            (t.promisify.custom = R),
            (t.callbackify = function (e) {
              if ("function" != typeof e)
                throw new TypeError(
                  'The "original" argument must be of type Function'
                );
              function t() {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t.push(arguments[r]);
                var i = t.pop();
                if ("function" != typeof i)
                  throw new TypeError(
                    "The last argument must be of type Function"
                  );
                var o = this,
                  a = function () {
                    return i.apply(o, arguments);
                  };
                e.apply(this, t).then(
                  function (e) {
                    n.nextTick(a.bind(null, null, e));
                  },
                  function (e) {
                    n.nextTick(P.bind(null, e, a));
                  }
                );
              }
              return (
                Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
                Object.defineProperties(t, i(e)),
                t
              );
            });
        },
        9154: (e, t, r) => {
          "use strict";
          var n = r(7025),
            i = r(3206),
            o = r(7737),
            a = r(1455),
            s = o("Object.prototype.toString"),
            f = r(6686)(),
            c = "undefined" == typeof globalThis ? r.g : globalThis,
            u = i(),
            d = o("String.prototype.slice"),
            h = {},
            l = Object.getPrototypeOf;
          f &&
            a &&
            l &&
            n(u, function (e) {
              if ("function" == typeof c[e]) {
                var t = new c[e]();
                if (Symbol.toStringTag in t) {
                  var r = l(t),
                    n = a(r, Symbol.toStringTag);
                  if (!n) {
                    var i = l(r);
                    n = a(i, Symbol.toStringTag);
                  }
                  h[e] = n.get;
                }
              }
            });
          var p = r(6421);
          e.exports = function (e) {
            return (
              !!p(e) &&
              (f && Symbol.toStringTag in e
                ? (function (e) {
                    var t = !1;
                    return (
                      n(h, function (r, n) {
                        if (!t)
                          try {
                            var i = r.call(e);
                            i === n && (t = i);
                          } catch (e) {}
                      }),
                      t
                    );
                  })(e)
                : d(s(e), 8, -1))
            );
          };
        },
        1993: (e) => {
          e.exports = function e(t, r) {
            if (t && r) return e(t)(r);
            if ("function" != typeof t)
              throw new TypeError("need wrapper function");
            return (
              Object.keys(t).forEach(function (e) {
                n[e] = t[e];
              }),
              n
            );
            function n() {
              for (
                var e = new Array(arguments.length), r = 0;
                r < e.length;
                r++
              )
                e[r] = arguments[r];
              var n = t.apply(this, e),
                i = e[e.length - 1];
              return (
                "function" == typeof n &&
                  n !== i &&
                  Object.keys(i).forEach(function (e) {
                    n[e] = i[e];
                  }),
                n
              );
            }
          };
        },
        8199: (e) => {
          e.exports = function () {
            for (var e = {}, r = 0; r < arguments.length; r++) {
              var n = arguments[r];
              for (var i in n) t.call(n, i) && (e[i] = n[i]);
            }
            return e;
          };
          var t = Object.prototype.hasOwnProperty;
        },
        8009: () => {},
        1855: () => {},
        1164: () => {},
        3907: () => {},
        7876: () => {},
        7015: () => {},
        6072: () => {},
        3206: (e, t, r) => {
          "use strict";
          var n = [
              "BigInt64Array",
              "BigUint64Array",
              "Float32Array",
              "Float64Array",
              "Int16Array",
              "Int32Array",
              "Int8Array",
              "Uint16Array",
              "Uint32Array",
              "Uint8Array",
              "Uint8ClampedArray",
            ],
            i = "undefined" == typeof globalThis ? r.g : globalThis;
          e.exports = function () {
            for (var e = [], t = 0; t < n.length; t++)
              "function" == typeof i[n[t]] && (e[e.length] = n[t]);
            return e;
          };
        },
        1978: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
          );
        },
        5050: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
          );
        },
        6664: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
          );
        },
        5373: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
          );
        },
        7779: (e) => {
          "use strict";
          e.exports = { i8: "6.5.4" };
        },
        4057: (e) => {
          "use strict";
          e.exports = JSON.parse(
            '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
          );
        },
      },
      t = {};
    function r(n) {
      var i = t[n];
      if (void 0 !== i) return i.exports;
      var o = (t[n] = { id: n, loaded: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
    }
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
    var n = {};
    return (
      (() => {
        "use strict";
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(t, r, n) {
          return (
            (r = (function (t) {
              var r = (function (t, r) {
                if ("object" !== e(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var i = n.call(t, "string");
                  if ("object" !== e(i)) return i;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" === e(r) ? r : String(r);
            })(r)) in t
              ? Object.defineProperty(t, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[r] = n),
            t
          );
        }
        r.r(n), r.d(n, { TorusWalletConnectorPlugin: () => Mt });
        var i = r(2005),
          o = r.n(i),
          a = r(3108),
          s = r.n(a);
        function f(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function c(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? f(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const u = s().getLogger("http-helpers");
        u.setLevel(a.levels.INFO);
        let d = "torus-default",
          h = "";
        const l = "x-api-key",
          p = "x-embed-host";
        let b = null;
        const y = [],
          g = [];
        function m(e) {
          d = e;
        }
        const v = async function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = { mode: "cors", headers: {} };
          (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
            .useAPIKey &&
            (r.headers = c(
              c({}, r.headers),
              (function () {
                const e = {};
                return d && (e[l] = d), h && (e[p] = h), e;
              })()
            ));
          const n = o()(r, t, { method: "GET" }),
            i = await (async function (e, t) {
              let r = null;
              try {
                r = new URL(e);
              } catch (e) {}
              if (b && r && (y.includes(r.origin) || g.includes(r.pathname))) {
                const r = b.startTransaction({ name: e }),
                  n = r.startChild({ op: "http" }),
                  i = await fetch(e, t);
                return n.finish(), r.finish(), i;
              }
              return fetch(e, t);
            })(e, n);
          if (i.ok) return i.json();
          throw (
            ((function (e) {
              u.info(`Response: ${e.status} ${e.statusText}`),
                u.info(`Url: ${e.url}`);
            })(i),
            i)
          );
        };
        var w = r(6310),
          _ = r(9631),
          S = r.n(_);
        r(7375), r(1214), r(5291).Buffer;
        class E extends URL {
          constructor() {
            super(...arguments),
              _defineProperty(this, "hashParams", new URLSearchParams());
          }
          toString() {
            return (
              (this.hash = this.hashParams.toString()),
              super.toString.call(this)
            );
          }
        }
        var A = r(7531),
          M = r(3641),
          k = r.n(M),
          O = r(5641),
          I = r(9633),
          C = r.n(I),
          R = r(1744),
          P = r.n(R),
          x = r(4303),
          B = r.n(x);
        function T() {}
        const j = "ACK";
        class D extends w.Duplex {
          constructor(e) {
            let {
              name: r,
              target: n,
              targetWindow: i = window,
              targetOrigin: o = "*",
            } = e;
            if (
              (super({ objectMode: !0 }),
              t(this, "_init", void 0),
              t(this, "_haveSyn", void 0),
              t(this, "_name", void 0),
              t(this, "_target", void 0),
              t(this, "_targetWindow", void 0),
              t(this, "_targetOrigin", void 0),
              t(this, "_onMessage", void 0),
              t(this, "_synIntervalId", void 0),
              !r || !n)
            )
              throw new Error("Invalid input.");
            (this._init = !1),
              (this._haveSyn = !1),
              (this._name = r),
              (this._target = n),
              (this._targetWindow = i),
              (this._targetOrigin = o),
              (this._onMessage = this.onMessage.bind(this)),
              (this._synIntervalId = null),
              window.addEventListener("message", this._onMessage, !1),
              this._handShake();
          }
          _break() {
            this.cork(),
              this._write("BRK", null, T),
              (this._haveSyn = !1),
              (this._init = !1);
          }
          _handShake() {
            this._write("SYN", null, T), this.cork();
          }
          _onData(e) {
            if (this._init)
              if ("BRK" === e) this._break();
              else
                try {
                  this.push(e);
                } catch (e) {
                  this.emit("error", e);
                }
            else
              "SYN" === e
                ? ((this._haveSyn = !0), this._write(j, null, T))
                : e === j &&
                  ((this._init = !0),
                  this._haveSyn || this._write(j, null, T),
                  this.uncork());
          }
          _postMessage(e) {
            const t = this._targetOrigin;
            this._targetWindow.postMessage(
              { target: this._target, data: e },
              t
            );
          }
          onMessage(e) {
            const t = e.data;
            ("*" !== this._targetOrigin && e.origin !== this._targetOrigin) ||
              e.source !== this._targetWindow ||
              "object" != typeof t ||
              t.target !== this._name ||
              !t.data ||
              this._onData(t.data);
          }
          _read() {}
          _write(e, t, r) {
            this._postMessage(e), r();
          }
          _destroy() {
            window.removeEventListener("message", this._onMessage, !1);
          }
        }
        function L(e, t, r) {
          try {
            Reflect.apply(e, t, r);
          } catch (e) {
            setTimeout(() => {
              throw e;
            });
          }
        }
        class N extends A.EventEmitter {
          emit(e) {
            let t = "error" === e;
            const r = this._events;
            if (void 0 !== r) t = t && void 0 === r.error;
            else if (!t) return !1;
            for (
              var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              i[o - 1] = arguments[o];
            if (t) {
              let e;
              if ((i.length > 0 && ([e] = i), e instanceof Error)) throw e;
              const t = new Error(
                "Unhandled error." + (e ? ` (${e.message})` : "")
              );
              throw ((t.context = e), t);
            }
            const a = r[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) L(a, this, i);
            else {
              const e = a.length,
                t = (function (e) {
                  const t = e.length,
                    r = new Array(t);
                  for (let n = 0; n < t; n += 1) r[n] = e[n];
                  return r;
                })(a);
              for (let r = 0; r < e; r += 1) L(t[r], this, i);
            }
            return !0;
          }
        }
        class U extends Error {
          constructor(e) {
            let { code: r, message: n, data: i } = e;
            if (!Number.isInteger(r))
              throw new Error("code must be an integer");
            if (!n || "string" != typeof n)
              throw new Error("message must be string");
            super(n),
              t(this, "code", void 0),
              t(this, "data", void 0),
              (this.code = r),
              void 0 !== i && (this.data = i);
          }
          toString() {
            return k()({
              code: this.code,
              message: this.message,
              data: this.data,
              stack: this.stack,
            });
          }
        }
        function q(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        class z extends N {
          constructor() {
            super(), t(this, "_middleware", void 0), (this._middleware = []);
          }
          static async _runAllMiddleware(e, t, r) {
            const n = [];
            let i = null,
              o = !1;
            for (const a of r)
              if ((([i, o] = await z._runMiddleware(e, t, a, n)), o)) break;
            return [i, o, n.reverse()];
          }
          static _runMiddleware(e, t, r, n) {
            return new Promise((i) => {
              const o = (e) => {
                  const r = e || t.error;
                  r && (t.error = (0, O.Xy)(r)), i([r, !0]);
                },
                a = (e) => {
                  t.error
                    ? o(t.error)
                    : (e &&
                        ("function" != typeof e &&
                          o(
                            new U({
                              code: -32603,
                              message:
                                "JRPCEngine: 'next' return handlers must be functions",
                            })
                          ),
                        n.push(e)),
                      i([null, !1]));
                };
              try {
                r(e, t, a, o);
              } catch (e) {
                o(e);
              }
            });
          }
          static async _runReturnHandlers(e) {
            for (const t of e)
              await new Promise((e, r) => {
                t((t) => (t ? r(t) : e()));
              });
          }
          static _checkForCompletion(e, t, r) {
            if (!("result" in t) && !("error" in t))
              throw new U({
                code: -32603,
                message: "Response has no error or result for request",
              });
            if (!r)
              throw new U({ code: -32603, message: "Nothing ended request" });
          }
          push(e) {
            this._middleware.push(e);
          }
          handle(e, t) {
            if (t && "function" != typeof t)
              throw new Error('"callback" must be a function if provided.');
            return Array.isArray(e)
              ? t
                ? this._handleBatch(e, t)
                : this._handleBatch(e)
              : t
              ? this._handle(e, t)
              : this._promiseHandle(e);
          }
          asMiddleware() {
            return async (e, t, r, n) => {
              try {
                const [i, o, a] = await z._runAllMiddleware(
                  e,
                  t,
                  this._middleware
                );
                return o
                  ? (await z._runReturnHandlers(a), n(i))
                  : r(async (e) => {
                      try {
                        await z._runReturnHandlers(a);
                      } catch (t) {
                        return e(t);
                      }
                      return e();
                    });
              } catch (e) {
                return n(e);
              }
            };
          }
          async _handleBatch(e, t) {
            try {
              const r = await Promise.all(
                e.map(this._promiseHandle.bind(this))
              );
              return t ? t(null, r) : r;
            } catch (e) {
              if (t) return t(e);
              throw e;
            }
          }
          _promiseHandle(e) {
            return new Promise((t) => {
              this._handle(e, (e, r) => {
                t(r);
              });
            });
          }
          async _handle(e, r) {
            if (!e || Array.isArray(e) || "object" != typeof e) {
              const e = new U({
                code: -32603,
                message: "request must be plain object",
              });
              return r(e, { id: void 0, jsonrpc: "2.0", error: e });
            }
            if ("string" != typeof e.method) {
              const t = new U({
                code: -32603,
                message: "method must be string",
              });
              return r(t, { id: e.id, jsonrpc: "2.0", error: t });
            }
            const n = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? q(Object(n), !0).forEach(function (r) {
                        t(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : q(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e),
              i = { id: n.id, jsonrpc: n.jsonrpc };
            let o = null;
            try {
              await this._processRequest(n, i);
            } catch (e) {
              o = e;
            }
            return (
              o && (delete i.result, i.error || (i.error = (0, O.Xy)(o))),
              r(o, i)
            );
          }
          async _processRequest(e, t) {
            const [r, n, i] = await z._runAllMiddleware(e, t, this._middleware);
            if (
              (z._checkForCompletion(e, t, n), await z._runReturnHandlers(i), r)
            )
              throw r;
          }
        }
        class F extends w.Duplex {
          constructor(e) {
            let { parent: r, name: n } = e;
            super({ objectMode: !0 }),
              t(this, "_parent", void 0),
              t(this, "_name", void 0),
              (this._parent = r),
              (this._name = n);
          }
          _read() {}
          _write(e, t, r) {
            this._parent.push({ name: this._name, data: e }), r();
          }
        }
        function W(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function K(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? W(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : W(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const H = Symbol("IGNORE_SUBSTREAM");
        class V extends w.Duplex {
          constructor() {
            super(
              K(
                K(
                  {},
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                ),
                {},
                { objectMode: !0 }
              )
            ),
              t(this, "_substreams", void 0),
              t(this, "getStream", void 0),
              (this._substreams = {});
          }
          createStream(e) {
            if (!e) throw new Error("ObjectMultiplex - name must not be empty");
            if (this._substreams[e])
              throw new Error(
                `ObjectMultiplex - Substream for name "${e}" already exists`
              );
            const t = new F({ parent: this, name: e });
            return (
              (this._substreams[e] = t),
              (function (e, r) {
                const n = P()((e) => t.destroy(e || void 0));
                C()(e, { readable: !1 }, n), C()(e, { writable: !1 }, n);
              })(this),
              t
            );
          }
          ignoreStream(e) {
            if (!e) throw new Error("ObjectMultiplex - name must not be empty");
            if (this._substreams[e])
              throw new Error(
                `ObjectMultiplex - Substream for name "${e}" already exists`
              );
            this._substreams[e] = H;
          }
          _read() {}
          _write(e, t, r) {
            const { name: n, data: i } = e;
            if (!n)
              return (
                window.console.warn(
                  `ObjectMultiplex - malformed chunk without name "${e}"`
                ),
                r()
              );
            const o = this._substreams[n];
            return o
              ? (o !== H && o.push(i), r())
              : (window.console.warn(
                  `ObjectMultiplex - orphaned data for stream "${n}"`
                ),
                r());
          }
        }
        var G = r(3249),
          $ = r(9507),
          X = r.n($),
          J = r(8651),
          Y = r(3470),
          Z = r.n(Y),
          Q = r(5291).Buffer;
        const ee = {
            GOOGLE: "google",
            FACEBOOK: "facebook",
            TWITCH: "twitch",
            REDDIT: "reddit",
            DISCORD: "discord",
            EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless",
          },
          te = {
            [ee.GOOGLE]: "tkey-google",
            [ee.FACEBOOK]: "tkey-facebook",
            [ee.TWITCH]: "tkey-twitch",
            [ee.REDDIT]: "tkey-reddit",
            [ee.DISCORD]: "tkey-discord",
            [ee.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless",
          },
          re = "moonpay",
          ne = "wyre",
          ie = "rampnetwork",
          oe = "xanpool",
          ae = "mercuryo",
          se = "transak",
          fe = "banxa",
          ce = "mainnet",
          ue = "matic",
          de = "bsc_mainnet",
          he = "avalanche_mainnet",
          le = {
            PRODUCTION: "production",
            DEVELOPMENT: "development",
            BINANCE: "binance",
            TESTING: "testing",
            LRC: "lrc",
            BETA: "beta",
            BNB: "bnb",
            POLYGON: "polygon",
          },
          pe = {
            BOTTOM_LEFT: "bottom-left",
            TOP_LEFT: "top-left",
            BOTTOM_RIGHT: "bottom-right",
            TOP_RIGHT: "top-right",
          },
          be = {
            [re]: [
              "AUD",
              "BGN",
              "BRL",
              "CAD",
              "CHF",
              "CNY",
              "COP",
              "CZK",
              "DKK",
              "DOP",
              "EGP",
              "EUR",
              "GBP",
              "HKD",
              "HRK",
              "IDR",
              "ILS",
              "JPY",
              "JOD",
              "KES",
              "KRW",
              "KWD",
              "LKR",
              "MAD",
              "MXN",
              "MYR",
              "NGN",
              "NOK",
              "NZD",
              "OMR",
              "PEN",
              "PKR",
              "PLN",
              "RON",
              "RUB",
              "SEK",
              "SGD",
              "THB",
              "TRY",
              "TWD",
              "USD",
              "VND",
              "ZAR",
            ],
            [ne]: [
              "USD",
              "EUR",
              "GBP",
              "AUD",
              "CAD",
              "NZD",
              "ARS",
              "BRL",
              "CHF",
              "CLP",
              "COP",
              "CZK",
              "DKK",
              "HKD",
              "ILS",
              "INR",
              "ISK",
              "JPY",
              "KRW",
              "MXN",
              "MYR",
              "NOK",
              "PHP",
              "PLN",
              "SEK",
              "THB",
              "VND",
              "ZAR",
            ],
            [ie]: ["USD", "EUR", "GBP"],
            [oe]: [
              "SGD",
              "HKD",
              "THB",
              "PHP",
              "INR",
              "IDR",
              "MYR",
              "AUD",
              "NZD",
              "KRW",
            ],
            [ae]: [
              "EUR",
              "USD",
              "GBP",
              "TRY",
              "JPY",
              "BRL",
              "NGN",
              "VND",
              "MXN",
              "KRW",
            ],
            [se]: [
              "ARS",
              "AUD",
              "BBD",
              "BGN",
              "BMD",
              "BRL",
              "CAD",
              "CHF",
              "CLP",
              "CRC",
              "CZK",
              "DKK",
              "DOP",
              "EUR",
              "FJD",
              "FKP",
              "GBP",
              "GIP",
              "HRK",
              "HUF",
              "IDR",
              "ILS",
              "ISK",
              "JMD",
              "JPY",
              "KES",
              "KRW",
              "MDL",
              "MXN",
              "MYR",
              "NOK",
              "NZD",
              "PEN",
              "PHP",
              "PLN",
              "PYG",
              "RON",
              "SEK",
              "SGD",
              "THB",
              "TRY",
              "TZS",
              "USD",
              "ZAR",
            ],
            [fe]: ["EUR", "GBP", "USD"],
          },
          ye = new Set([
            "ETH",
            "USDT",
            "USDC",
            "TUSD",
            "EOSDT",
            "USD",
            "DAI",
            "GUSD",
            "DKKT",
            "PAX",
            "ILS",
            "RUB",
            "BYN",
            "EUR",
            "GBP",
            "JPY",
            "KRW",
            "PLN",
            "MXN",
            "AUD",
            "BRL",
            "CAD",
            "CHF",
            "KPW",
            "LAK",
            "LBP",
            "LKR",
            "XOF",
            "CNHT",
            "DOGE",
            "UAH",
            "TRY",
            "HKD",
            "XJP",
            "SGD",
            "USC",
            "NZD",
            "NGN",
            "RUR",
            "COP",
            "GHS",
            "EGP",
            "IDR",
            "BHD",
            "CRC",
            "PEN",
            "AED",
            "DOP",
            "PKR",
            "HUF",
            "VND",
            "XAR",
            "LTC",
            "RON",
            "OMR",
            "MYR",
            "DKK",
            "UGX",
            "ZMW",
            "SAR",
            "SEK",
            "GEL",
            "RWF",
            "IRR",
            "TZS",
            "CNY",
            "VEF",
            "BDT",
            "HRK",
            "CLP",
            "THB",
            "XAF",
            "ARS",
            "UYU",
            "SZL",
            "KZT",
            "NOK",
            "KES",
            "PAB",
            "INR",
            "CZK",
            "MAD",
            "TWD",
            "PHP",
            "ZAR",
            "BOB",
            "CDF",
            "DASH",
            "VES",
            "ISK",
            "MWK",
            "BAM",
            "TTD",
            "XRP",
            "JOD",
            "RSD",
            "HNL",
            "BGN",
            "GTQ",
            "BWP",
            "XMR",
            "MMK",
            "QAR",
            "AOA",
            "KWD",
            "MUR",
            "WUSD",
            "WEUR",
            "WAVES",
            "WTRY",
            "LRD",
            "LSL",
            "LYD",
            "AWG",
            "MDL",
            "BTO",
            "EURS",
            "CHFT",
            "MKD",
            "MNT",
            "MOP",
            "MRO",
            "MVR",
            "VOLLAR",
            "CKUSD",
            "KHR",
            "VUV",
            "BITCNY",
            "QC",
            "BBD",
            "NAD",
            "NPR",
            "PGK",
            "PYG",
            "BIF",
            "BMD",
            "BND",
            "XLM",
            "BNB",
            "SCR",
            "BAT",
            "CRO",
            "HT",
            "KCS",
            "LEO",
            "LINK",
            "MKR",
            "NPXS",
            "OMG",
            "REP",
            "ZB",
            "ZIL",
            "ZRX",
            "BCH",
            "BZD",
            "CUP",
            "CVE",
            "DJF",
            "DZD",
            "ERN",
            "ETB",
            "FJD",
            "FKP",
            "BUSD",
            "ANCT",
            "ALL",
            "AMD",
            "ANG",
            "CNYX",
            "IQD",
            "UZS",
            "TND",
            "GGP",
            "XAU",
            "KGS",
            "GIP",
            "JMD",
            "ZEC",
            "USDP",
            "BSV",
            "EMC2",
            "SNT",
            "GTO",
            "POWR",
            "EUSD",
            "EURT",
            "BCY",
            "BTS",
            "ATM",
            "BLOCKPAY",
            "ARDR",
            "AMP",
            "B2X",
            "BITGOLD",
            "BITEUR",
            "ATB",
            "BITUSD",
            "AGRS",
            "DFXT",
            "HIKEN",
            "BIX",
            "KNC",
            "EOS",
            "COB",
            "COSS",
            "BMH",
            "NANO",
            "BDG",
            "BNT",
            "XVG",
            "LKK1Y",
            "LKK",
            "USDK",
            "EURN",
            "NZDT",
            "JSE",
            "GMD",
            "GNF",
            "GYD",
            "YER",
            "XPF",
            "HTG",
            "SLL",
            "SOS",
            "WST",
            "SVC",
            "SYP",
            "NEO",
            "KMF",
            "JUMP",
            "AYA",
            "BLAST",
            "WGR",
            "BCN",
            "BTG",
            "URALS",
            "INN",
            "USDQ",
            "CNH",
            "HUSD",
            "BKRW",
            "NZDX",
            "EURX",
            "CADX",
            "USDEX",
            "JPYX",
            "AUDX",
            "VNDC",
            "EON",
            "GBPX",
            "CHFX",
            "USDJ",
            "IDRT",
            "USDS",
            "USDN",
            "BIDR",
            "IDK",
            "BSD",
            "BTN",
            "KYD",
            "NIO",
            "SBD",
            "SDG",
            "SHP",
            "TOP",
            "XCD",
            "XCHF",
            "CNYT",
            "GYEN",
            "ZUSD",
            "GOLD",
            "TRX",
            "TRYB",
            "PLATC",
            "STRAX",
            "UST",
            "GLM",
            "VAI",
            "BRZ",
            "DDRST",
            "XAUT",
            "MIM",
          ]);
        function ge(e) {
          return be[e].filter((e) => ye.has(e));
        }
        const me = {
          [re]: {
            line1: "Credit/ Debit Card/ Apple Pay",
            line2: "4.5% or 5 USD",
            line3: "2,000€/day, 10,000€/mo",
            supportPage: "https://help.moonpay.io/en/",
            minOrderValue: 24.99,
            maxOrderValue: 5e4,
            validCurrencies: ge(re),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "aave", display: "AAVE" },
                { value: "bat", display: "BAT" },
                { value: "dai", display: "DAI" },
                { value: "eth", display: "ETH" },
                { value: "mkr", display: "MKR" },
                { value: "matic", display: "MATIC" },
                { value: "usdt", display: "USDT" },
                { value: "usdc", display: "USDC" },
              ],
              [ue]: [
                { value: "eth_polygon", display: "ETH" },
                { value: "matic_polygon", display: "MATIC" },
                { value: "usdc_polygon", display: "USDC" },
              ],
              [de]: [
                { value: "bnb_bsc", display: "BNB" },
                { value: "busd_bsc", display: "BUSD" },
              ],
              [he]: [{ value: "avax_cchain", display: "AVAX" }],
            },
            includeFees: !0,
            api: !0,
            enforceMax: !1,
          },
          [ne]: {
            line1: "Apple Pay/ Debit/ Credit Card",
            line2: "4.9% + 30¢ or 5 USD",
            line3: "$250/day",
            supportPage: "https://support.sendwyre.com/en/",
            minOrderValue: 5,
            maxOrderValue: 500,
            validCurrencies: ge(ne),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "AAVE", display: "AAVE" },
                { value: "BAT", display: "BAT" },
                { value: "BUSD", display: "BUSD" },
                { value: "DAI", display: "DAI" },
                { value: "ETH", display: "ETH" },
                { value: "MKR", display: "MKR" },
                { value: "UNI", display: "UNI" },
                { value: "USDC", display: "USDC" },
                { value: "USDT", display: "USDT" },
              ],
              [ue]: [{ value: "MUSDC", display: "USDC" }],
              [he]: [{ value: "AVAXC", display: "AVAXC" }],
            },
            includeFees: !1,
            api: !0,
            enforceMax: !1,
          },
          [ie]: {
            line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
            line2: "0.49% - 2.9%",
            line3: "5,000€/purchase, 20,000€/mo",
            supportPage: "https://instant.ramp.network/",
            minOrderValue: 50,
            maxOrderValue: 2e4,
            validCurrencies: ge(ie),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "ETH", display: "ETH" },
                { value: "DAI", display: "DAI" },
                { value: "USDC", display: "USDC" },
                { value: "USDT", display: "USDT" },
              ],
              [ue]: [
                { value: "MATIC_DAI", display: "DAI" },
                { value: "MATIC_MATIC", display: "MATIC" },
                { value: "MATIC_USDC", display: "USDC" },
              ],
              [he]: [{ value: "AVAX", display: "AVAX" }],
            },
            includeFees: !0,
            api: !0,
            receiveHint: "walletTopUp.receiveHintRamp",
            enforceMax: !1,
          },
          [oe]: {
            line1:
              "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
            line2: "2.5% buying, 3% selling",
            line3: "$2,500 / day",
            supportPage: "mailto:support@xanpool.com",
            minOrderValue: 100,
            maxOrderValue: 2500,
            validCurrencies: ge(oe),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "ETH", display: "ETH" },
                { value: "USDT", display: "USDT" },
              ],
            },
            includeFees: !0,
            api: !0,
            sell: !0,
            enforceMax: !1,
          },
          [ae]: {
            line1: "Credit/ Debit Card/ Apple Pay",
            line2: "3.95% or 4 USD",
            line3: "10,000€/day, 25,000€/mo",
            supportPage: "mailto:support@mercuryo.io",
            minOrderValue: 30,
            maxOrderValue: 5e3,
            validCurrencies: ge(ae),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "ETH", display: "ETH" },
                { value: "BAT", display: "BAT" },
                { value: "USDT", display: "USDT" },
                { value: "DAI", display: "DAI" },
              ],
              [de]: [
                { value: "BNB", display: "BNB" },
                { value: "BUSD", display: "BUSD" },
                { value: "1INCH", display: "1INCH" },
              ],
            },
            includeFees: !0,
            api: !0,
            enforceMax: !1,
          },
          [se]: {
            line1:
              "Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy",
            line2: "0.99% - 5.5% or 5 USD",
            line3: "$5,000/day, $28,000/mo",
            supportPage: "https://support.transak.com/hc/en-US",
            minOrderValue: 30,
            maxOrderValue: 500,
            validCurrencies: ge(se),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "AAVE", display: "AAVE" },
                { value: "DAI", display: "DAI" },
                { value: "ETH", display: "ETH" },
                { value: "USDC", display: "USDC" },
                { value: "USDT", display: "USDT" },
              ],
              [ue]: [
                { value: "AAVE", display: "AAVE" },
                { value: "DAI", display: "DAI" },
                { value: "MATIC", display: "MATIC" },
                { value: "USDC", display: "USDC" },
                { value: "USDT", display: "USDT" },
                { value: "WETH", display: "WETH" },
              ],
              [de]: [
                { value: "BNB", display: "BNB" },
                { value: "BUSD", display: "BUSD" },
              ],
              [he]: [{ value: "AVAX", display: "AVAX" }],
            },
            includeFees: !0,
            enforceMax: !0,
          },
          [fe]: {
            line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
            line2: "0.49% - 2.9%",
            line3: "5,000€/purchase, 20,000€/mo",
            supportPage: "https://support.banxa.com",
            minOrderValue: 20,
            maxOrderValue: 15e3,
            validCurrencies: ge(fe),
            validCryptoCurrenciesByChain: {
              [ce]: [
                { value: "ETH", display: "ETH" },
                { value: "USDT", display: "USDT" },
                { value: "BUSD", display: "BUSD" },
                { value: "LINK", display: "LINK" },
                { value: "USDC", display: "USDC" },
                { value: "CHZ", display: "CHZ" },
                { value: "BAT", display: "BAT" },
                { value: "MANA", display: "MANA" },
                { value: "AAVE", display: "AAVE" },
                { value: "COMP", display: "COMP" },
                { value: "ENJ", display: "ENJ" },
              ],
              [ue]: [{ value: "MATIC", display: "MATIC" }],
            },
            includeFees: !0,
            enforceMax: !0,
          },
        };
        var ve = {
          supportedVerifierList: Object.values(ee),
          paymentProviders: me,
          api: "https://api.tor.us",
          translations: {
            en: {
              embed: {
                continue: "Continue",
                actionRequired: "Authorization required",
                pendingAction:
                  "Click continue to proceed with your request in a popup",
                cookiesRequired: "Cookies Required",
                enableCookies:
                  "Please enable cookies in your browser preferences to access Torus",
                clickHere: "More Info",
              },
            },
            de: {
              embed: {
                continue: "Fortsetzen",
                actionRequired: "Autorisierung erforderlich",
                pendingAction:
                  "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
                cookiesRequired: "Cookies benötigt",
                enableCookies:
                  "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
                clickHere: "Mehr Info",
              },
            },
            ja: {
              embed: {
                continue: "継続する",
                actionRequired: "認証が必要です",
                pendingAction:
                  "続行をクリックして、ポップアップでリクエストを続行します",
                cookiesRequired: "必要なクッキー",
                enableCookies:
                  "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
                clickHere: "詳しくは",
              },
            },
            ko: {
              embed: {
                continue: "계속하다",
                actionRequired: "승인 필요",
                pendingAction:
                  "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
                cookiesRequired: "쿠키 필요",
                enableCookies:
                  "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
                clickHere: "더 많은 정보",
              },
            },
            zh: {
              embed: {
                continue: "继续",
                actionRequired: "需要授权",
                pendingAction: "单击继续以在弹出窗口中继续您的请求",
                cookiesRequired: "必填Cookie",
                enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
                clickHere: "更多信息",
              },
            },
          },
          prodTorusUrl: "",
          localStorageKeyPrefix: "torus-",
        };
        const we = (e) =>
            new Promise((t, r) => {
              null != window.document.body
                ? Promise.resolve(e()).then(t).catch(r)
                : window.document.addEventListener("DOMContentLoaded", () => {
                    Promise.resolve(e()).then(t).catch(r);
                  });
            }),
          _e = (e) => {
            const t = window.document.createElement("template"),
              r = e.trim();
            return (t.innerHTML = r), t.content.firstChild;
          },
          Se = (e, t, r) => {
            const n = (i) => {
              r(i), e.removeListener(t, n);
            };
            e.on(t, n);
          };
        var Ee = s().getLogger("torus-embed"),
          Ae = {
            errors: {
              disconnected: () => "Torus: Lost connection to Torus.",
              permanentlyDisconnected: () =>
                "Torus: Disconnected from iframe. Page reload required.",
              sendSiteMetadata: () =>
                "Torus: Failed to send site metadata. This is an internal error, please report this bug.",
              unsupportedSync: (e) =>
                `Torus: The Torus Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
              invalidDuplexStream: () =>
                "Must provide a Node.js-style duplex stream.",
              invalidOptions: (e, t) =>
                `Invalid options. Received: { maxEventListeners: ${e}, shouldSendMetadata: ${t} }`,
              invalidRequestArgs: () =>
                "Expected a single, non-array, object argument.",
              invalidRequestMethod: () =>
                "'args.method' must be a non-empty string.",
              invalidRequestParams: () =>
                "'args.params' must be an object or array if provided.",
              invalidLoggerObject: () =>
                "'args.logger' must be an object if provided.",
              invalidLoggerMethod: (e) =>
                `'args.logger' must include required method '${e}'.`,
            },
            info: {
              connected: (e) => `Torus: Connected to chain with ID "${e}".`,
            },
            warnings: {
              enableDeprecation:
                'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
              sendDeprecation:
                'Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              events: {
                close:
                  'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                data: 'Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
                networkChanged:
                  'Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
                notification:
                  'Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              },
              publicConfigStore:
                'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.',
            },
          };
        const { paymentProviders: Me } = ve;
        function ke(e, t, r) {
          let n = `MetaMask: Lost connection to "${e}".`;
          t?.stack && (n += `\n${t.stack}`),
            Ee.warn(n),
            r && r.listenerCount("error") > 0 && r.emit("error", n);
        }
        const Oe = () => Math.random().toString(36).slice(2),
          Ie = async (e, t) => {
            let r, n;
            const i = "1.41.1";
            let o = t.version || i;
            try {
              if (("binance" === e || "production" === e) && !t.version) {
                let e;
                (e = ve.prodTorusUrl
                  ? { data: ve.prodTorusUrl }
                  : await v(
                      `${ve.api}/latestversion?name=@toruslabs/torus-embed&version=${i}`,
                      {},
                      { useAPIKey: !0 }
                    )),
                  (o = e.data),
                  (ve.prodTorusUrl = e.data);
              }
            } catch (e) {
              Ee.error(e, "unable to fetch latest version");
            }
            switch ((Ee.info("version used: ", o), e)) {
              case "binance":
                (r = `https://binance.tor.us/v${o}`), (n = "info");
                break;
              case "testing":
                (r = "https://testing.tor.us"), (n = "debug");
                break;
              case "bnb":
                (r = "https://bnb.tor.us"), (n = "error");
                break;
              case "polygon":
                (r = "https://polygon.tor.us"), (n = "error");
                break;
              case "lrc":
                (r = "https://lrc.tor.us"), (n = "debug");
                break;
              case "beta":
                (r = "https://beta.tor.us"), (n = "debug");
                break;
              case "development":
                (r = "http://localhost:4050"), (n = "debug");
                break;
              default:
                (r = `https://app.tor.us/v${o}`), (n = "error");
            }
            return { torusUrl: r, logLevel: n };
          },
          Ce = () => {
            let e = window.navigator.language || "en-US";
            const t = e.split("-");
            return (
              (e = Object.prototype.hasOwnProperty.call(ve.translations, t[0])
                ? t[0]
                : "en"),
              e
            );
          },
          Re = ["eth_subscription"],
          Pe = () => {},
          xe =
            "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375",
          Be =
            "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
        function Te(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        N.defaultMaxListeners = 100;
        const je = function (e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return (n, i) =>
            n || i.error
              ? t(n || i.error)
              : !r || Array.isArray(i)
              ? e(i)
              : e(i.result);
        };
        class De extends N {
          constructor(e) {
            let {
              maxEventListeners: r = 100,
              shouldSendMetadata: n = !0,
              jsonRpcStreamName: i = "provider",
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            if (
              (super(),
              t(this, "chainId", void 0),
              t(this, "selectedAddress", void 0),
              t(this, "_rpcEngine", void 0),
              t(this, "networkVersion", void 0),
              t(this, "shouldSendMetadata", void 0),
              t(this, "isTorus", void 0),
              t(this, "_publicConfigStore", void 0),
              t(this, "tryPreopenHandle", void 0),
              t(this, "enable", void 0),
              t(this, "_state", void 0),
              t(this, "_jsonRpcConnection", void 0),
              t(this, "_sentWarnings", {
                enable: !1,
                experimentalMethods: !1,
                send: !1,
                publicConfigStore: !1,
                events: {
                  close: !1,
                  data: !1,
                  networkChanged: !1,
                  notification: !1,
                },
              }),
              !(0, J.duplex)(e))
            )
              throw new Error(Ae.errors.invalidDuplexStream());
            (this.isTorus = !0),
              this.setMaxListeners(r),
              (this._state = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {};
                  r % 2
                    ? Te(Object(n), !0).forEach(function (r) {
                        t(e, r, n[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : Te(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, De._defaultState)),
              (this.selectedAddress = null),
              (this.networkVersion = null),
              (this.chainId = null),
              (this.shouldSendMetadata = n),
              (this._handleAccountsChanged =
                this._handleAccountsChanged.bind(this)),
              (this._handleChainChanged = this._handleChainChanged.bind(this)),
              (this._handleUnlockStateChanged =
                this._handleUnlockStateChanged.bind(this)),
              (this._handleConnect = this._handleConnect.bind(this)),
              (this._handleDisconnect = this._handleDisconnect.bind(this)),
              (this._handleStreamDisconnect =
                this._handleStreamDisconnect.bind(this)),
              (this._sendSync = this._sendSync.bind(this)),
              (this._rpcRequest = this._rpcRequest.bind(this)),
              (this._warnOfDeprecation = this._warnOfDeprecation.bind(this)),
              (this._initializeState = this._initializeState.bind(this)),
              (this.request = this.request.bind(this)),
              (this.send = this.send.bind(this)),
              (this.sendAsync = this.sendAsync.bind(this));
            const o = new V();
            B()(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")),
              (this._publicConfigStore = new G.ObservableStore({
                storageKey: "Metamask-Config",
              })),
              B()(
                o.createStream("publicConfig"),
                (0, G.storeAsStream)(this._publicConfigStore),
                ke.bind(this, "MetaMask PublicConfigStore")
              ),
              o.ignoreStream("phishing"),
              this.on("connect", () => {
                this._state.isConnected = !0;
              });
            const a = (function () {
              const e = {},
                t = new N(),
                r = new w.Duplex({
                  objectMode: !0,
                  read: function () {
                    return !1;
                  },
                  write: function (r, n, i) {
                    let o;
                    try {
                      r.id
                        ? (function (t) {
                            const r = e[t.id];
                            if (!r)
                              throw new Error(
                                `StreamMiddleware - Unknown response id "${t.id}"`
                              );
                            delete e[t.id],
                              Object.assign(r.res, t),
                              setTimeout(r.end);
                          })(r)
                        : (function (e) {
                            t.emit("notification", e);
                          })(r);
                    } catch (e) {
                      o = e;
                    }
                    i(o);
                  },
                });
              return {
                events: t,
                middleware: (t, n, i, o) => {
                  r.push(t), (e[t.id] = { req: t, res: n, next: i, end: o });
                },
                stream: r,
              };
            })();
            B()(
              a.stream,
              o.createStream(i),
              a.stream,
              this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")
            );
            const s = new z();
            s.push((e, t, r, n) => {
              const i = e.id,
                o = S()(32).toString("hex");
              (e.id = o),
                (t.id = o),
                r((r) => {
                  (e.id = i), (t.id = i), r();
                });
            }),
              s.push((e, t, r) => {
                ("string" == typeof e.method && e.method) ||
                  (t.error = O.Sy.rpc.invalidRequest({
                    message: "The request 'method' must be a non-empty string.",
                    data: e,
                  })),
                  r((e) => {
                    const { error: r } = t;
                    return r
                      ? (Ee.error(`MetaMask - RPC Error: ${r.message}`, r), e())
                      : e();
                  });
              }),
              s.push(a.middleware),
              (this._rpcEngine = s),
              a.events.on("notification", (e) => {
                const { method: t, params: r } = e;
                "wallet_accountsChanged" === t
                  ? this._handleAccountsChanged(r)
                  : "wallet_unlockStateChanged" === t
                  ? this._handleUnlockStateChanged(r)
                  : "wallet_chainChanged" === t
                  ? this._handleChainChanged(r)
                  : Re.includes(e.method) &&
                    (this.emit("data", e),
                    this.emit("notification", r.result),
                    this.emit("message", { type: t, data: r }));
              });
          }
          get publicConfigStore() {
            return (
              this._sentWarnings.publicConfigStore ||
                (Ee.warn(Ae.warnings.publicConfigStore),
                (this._sentWarnings.publicConfigStore = !0)),
              this._publicConfigStore
            );
          }
          isConnected() {
            return this._state.isConnected;
          }
          async request(e) {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw O.Sy.rpc.invalidRequest({
                message: Ae.errors.invalidRequestArgs(),
                data: e,
              });
            const { method: t, params: r } = e;
            if ("string" != typeof t || 0 === t.length)
              throw O.Sy.rpc.invalidRequest({
                message: Ae.errors.invalidRequestMethod(),
                data: e,
              });
            if (
              void 0 !== r &&
              !Array.isArray(r) &&
              ("object" != typeof r || null === r)
            )
              throw O.Sy.rpc.invalidRequest({
                message: Ae.errors.invalidRequestParams(),
                data: e,
              });
            return new Promise((e, n) => {
              this._rpcRequest({ method: t, params: r }, je(e, n));
            });
          }
          sendAsync(e, t) {
            this._rpcRequest(e, t);
          }
          addListener(e, t) {
            return this._warnOfDeprecation(e), super.addListener(e, t);
          }
          on(e, t) {
            return this._warnOfDeprecation(e), super.on(e, t);
          }
          once(e, t) {
            return this._warnOfDeprecation(e), super.once(e, t);
          }
          prependListener(e, t) {
            return this._warnOfDeprecation(e), super.prependListener(e, t);
          }
          prependOnceListener(e, t) {
            return this._warnOfDeprecation(e), super.prependOnceListener(e, t);
          }
          async _initializeState() {
            try {
              const {
                accounts: e,
                chainId: t,
                isUnlocked: r,
                networkVersion: n,
              } = await this.request({ method: "wallet_getProviderState" });
              this.emit("connect", { chainId: t }),
                this._handleChainChanged({ chainId: t, networkVersion: n }),
                this._handleUnlockStateChanged({ accounts: e, isUnlocked: r }),
                this._handleAccountsChanged(e);
            } catch (e) {
              Ee.error(
                "MetaMask: Failed to get initial state. Please report this bug.",
                e
              );
            } finally {
              Ee.info("initialized state"),
                (this._state.initialized = !0),
                this.emit("_initialized");
            }
          }
          _rpcRequest(e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = t;
            const i = e;
            if (!Array.isArray(i))
              if (
                (i.jsonrpc || (i.jsonrpc = "2.0"),
                "eth_accounts" === i.method ||
                  "eth_requestAccounts" === i.method)
              )
                n = (e, n) => {
                  this._handleAccountsChanged(
                    n.result || [],
                    "eth_accounts" === i.method,
                    r
                  ),
                    t(e, n);
                };
              else if ("wallet_getProviderState" === i.method)
                return void this._rpcEngine.handle(e, n);
            this.tryPreopenHandle(i, n);
          }
          send(e, t) {
            return (
              this._sentWarnings.send ||
                (Ee.warn(Ae.warnings.sendDeprecation),
                (this._sentWarnings.send = !0)),
              "string" != typeof e || (t && !Array.isArray(t))
                ? e && "object" == typeof e && "function" == typeof t
                  ? this._rpcRequest(e, t)
                  : this._sendSync(e)
                : new Promise((r, n) => {
                    try {
                      this._rpcRequest({ method: e, params: t }, je(r, n, !1));
                    } catch (e) {
                      n(e);
                    }
                  })
            );
          }
          _sendSync(e) {
            let t;
            switch (e.method) {
              case "eth_accounts":
                t = this.selectedAddress ? [this.selectedAddress] : [];
                break;
              case "eth_coinbase":
                t = this.selectedAddress || null;
                break;
              case "eth_uninstallFilter":
                this._rpcRequest(e, Pe), (t = !0);
                break;
              case "net_version":
                t = this.networkVersion || null;
                break;
              default:
                throw new Error(Ae.errors.unsupportedSync(e.method));
            }
            return { id: e.id, jsonrpc: e.jsonrpc, result: t };
          }
          _handleConnect(e) {
            this._state.isConnected ||
              ((this._state.isConnected = !0),
              this.emit("connect", { chainId: e }),
              Ee.debug(Ae.info.connected(e)));
          }
          _handleDisconnect(e, t) {
            if (
              this._state.isConnected ||
              (!this._state.isPermanentlyDisconnected && !e)
            ) {
              let r;
              (this._state.isConnected = !1),
                e
                  ? ((r = new O.Cg(1013, t || Ae.errors.disconnected())),
                    Ee.debug(r))
                  : ((r = new O.Cg(
                      1011,
                      t || Ae.errors.permanentlyDisconnected()
                    )),
                    Ee.error(r),
                    (this.chainId = null),
                    (this._state.accounts = null),
                    (this.selectedAddress = null),
                    (this._state.isUnlocked = !1),
                    (this._state.isPermanentlyDisconnected = !0)),
                this.emit("disconnect", r);
            }
          }
          _handleStreamDisconnect(e, t) {
            ke(e, t, this), this._handleDisconnect(!1, t ? t.message : void 0);
          }
          _handleAccountsChanged(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = e;
            Array.isArray(n) ||
              (Ee.error(
                "MetaMask: Received non-array accounts parameter. Please report this bug.",
                n
              ),
              (n = []));
            for (const t of e)
              if ("string" != typeof t) {
                Ee.error(
                  "MetaMask: Received non-string account. Please report this bug.",
                  e
                ),
                  (n = []);
                break;
              }
            X()(this._state.accounts, n) ||
              (t &&
                Array.isArray(this._state.accounts) &&
                this._state.accounts.length > 0 &&
                !r &&
                Ee.error(
                  'MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.',
                  n
                ),
              (this._state.accounts = n),
              this.emit("accountsChanged", n)),
              this.selectedAddress !== n[0] &&
                (this.selectedAddress = n[0] || null);
          }
          _handleChainChanged() {
            let { chainId: e, networkVersion: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            e && t
              ? "loading" === t
                ? this._handleDisconnect(!0)
                : (this._handleConnect(e),
                  e !== this.chainId &&
                    ((this.chainId = e),
                    this._state.initialized &&
                      this.emit("chainChanged", this.chainId)))
              : Ee.error(
                  "MetaMask: Received invalid network parameters. Please report this bug.",
                  { chainId: e, networkVersion: t }
                );
          }
          _handleUnlockStateChanged() {
            let { accounts: e, isUnlocked: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            "boolean" == typeof t
              ? t !== this._state.isUnlocked &&
                ((this._state.isUnlocked = t),
                this._handleAccountsChanged(e || []))
              : Ee.error(
                  "MetaMask: Received invalid isUnlocked parameter. Please report this bug.",
                  { isUnlocked: t }
                );
          }
          _warnOfDeprecation(e) {
            !1 === this._sentWarnings.events[e] &&
              (Ee.warn(Ae.warnings.events[e]),
              (this._sentWarnings.events[e] = !0));
          }
        }
        t(De, "_defaultState", {
          accounts: null,
          isConnected: !1,
          isUnlocked: !1,
          initialized: !1,
          isPermanentlyDisconnected: !1,
          hasEmittedConnection: !1,
        });
        const Le = (e, t) => {
          const r = {};
          return (
            e.algorithms.forEach((e) => {
              r[e] = Z()(e).update(t, "utf8").digest("base64");
            }),
            r
          );
        };
        class Ne extends A.EventEmitter {
          constructor(e) {
            let { url: r, target: n, features: i } = e;
            super(),
              t(this, "url", void 0),
              t(this, "target", void 0),
              t(this, "features", void 0),
              t(this, "window", void 0),
              t(this, "windowTimer", void 0),
              t(this, "iClosedWindow", void 0),
              (this.url = r),
              (this.target = n || "_blank"),
              (this.features =
                i ||
                (function () {
                  const e =
                      void 0 !== window.screenLeft
                        ? window.screenLeft
                        : window.screenX,
                    t =
                      void 0 !== window.screenTop
                        ? window.screenTop
                        : window.screenY,
                    r = window.innerWidth
                      ? window.innerWidth
                      : document.documentElement.clientWidth
                      ? document.documentElement.clientWidth
                      : window.screen.width,
                    n = window.innerHeight
                      ? window.innerHeight
                      : document.documentElement.clientHeight
                      ? document.documentElement.clientHeight
                      : window.screen.height,
                    i = Math.abs((r - 1200) / 2 / 1 + e);
                  return `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200,top=${Math.abs(
                    (n - 700) / 2 / 1 + t
                  )},left=${i}`;
                })()),
              (this.window = void 0),
              (this.windowTimer = void 0),
              (this.iClosedWindow = !1),
              this._setupTimer();
          }
          _setupTimer() {
            this.windowTimer = Number(
              setInterval(() => {
                this.window &&
                  this.window.closed &&
                  (clearInterval(this.windowTimer),
                  this.iClosedWindow || this.emit("close"),
                  (this.iClosedWindow = !1),
                  (this.window = void 0)),
                  void 0 === this.window && clearInterval(this.windowTimer);
              }, 500)
            );
          }
          open() {
            (this.window = window.open(
              this.url.href,
              this.target,
              this.features
            )),
              this.window?.focus && this.window.focus();
          }
          close() {
            (this.iClosedWindow = !0), this.window && this.window.close();
          }
          redirect(e) {
            e
              ? window.location.replace(this.url.href)
              : (window.location.href = this.url.href);
          }
        }
        function Ue(e) {
          return new Promise((t, r) => {
            try {
              const r = document.createElement("img");
              (r.onload = () => t(!0)), (r.onerror = () => t(!1)), (r.src = e);
            } catch (e) {
              r(e);
            }
          });
        }
        const qe = (e) => {
          const { document: t } = e,
            r = t.querySelector('head > meta[property="og:site_name"]');
          if (r) return r.content;
          const n = t.querySelector('head > meta[name="title"]');
          return n
            ? n.content
            : t.title && t.title.length > 0
            ? t.title
            : e.location.hostname;
        };
        async function ze(e) {
          const { document: t } = e;
          let r = t.querySelector('head > link[rel="shortcut icon"]');
          return r && (await Ue(r.href))
            ? r.href
            : ((r = Array.from(
                t.querySelectorAll('head > link[rel="icon"]')
              ).find((e) => Boolean(e.href))),
              r && (await Ue(r.href)) ? r.href : null);
        }
        const Fe = ["host", "chainId", "networkName"];
        function We(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function Ke(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? We(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : We(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        const He = {
            google: !0,
            facebook: !0,
            reddit: !0,
            twitch: !0,
            discord: !0,
          },
          Ve =
            "sha384-TyJix2beanZzcdkcboa6uCUYMyLD0sGfvLb2m9+BJABgk4/kEutoxLOLL4Xex+DM",
          Ge = [
            "eth_sendTransaction",
            "eth_signTypedData",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "personal_sign",
            "eth_getEncryptionPublicKey",
            "eth_decrypt",
            "wallet_addEthereumChain",
            "wallet_switchEthereumChain",
          ];
        !(async function () {
          try {
            if ("undefined" == typeof document) return;
            const e = document.createElement("link"),
              { torusUrl: t } = await Ie("production", {
                check: !1,
                hash: Ve,
                version: "",
              });
            (e.href = `${t}/popup`),
              (e.crossOrigin = "anonymous"),
              (e.type = "text/html"),
              (e.rel = "prefetch"),
              e.relList &&
                e.relList.supports &&
                e.relList.supports("prefetch") &&
                document.head.appendChild(e);
          } catch (e) {
            Ee.warn(e);
          }
        })();
        class $e {
          constructor() {
            let {
              buttonPosition: e = pe.BOTTOM_LEFT,
              buttonSize: r = 56,
              modalZIndex: n = 99999,
              apiKey: i = "torus-default",
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            t(this, "buttonPosition", pe.BOTTOM_LEFT),
              t(this, "buttonSize", void 0),
              t(this, "torusUrl", void 0),
              t(this, "torusIframe", void 0),
              t(this, "styleLink", void 0),
              t(this, "isLoggedIn", void 0),
              t(this, "isInitialized", void 0),
              t(this, "torusWidgetVisibility", void 0),
              t(this, "torusAlert", void 0),
              t(this, "apiKey", void 0),
              t(this, "modalZIndex", void 0),
              t(this, "alertZIndex", void 0),
              t(this, "torusAlertContainer", void 0),
              t(this, "isIframeFullScreen", void 0),
              t(this, "whiteLabel", void 0),
              t(this, "requestedVerifier", void 0),
              t(this, "currentVerifier", void 0),
              t(this, "embedTranslations", void 0),
              t(this, "ethereum", void 0),
              t(this, "provider", void 0),
              t(this, "communicationMux", void 0),
              t(this, "isLoginCallback", void 0),
              t(this, "paymentProviders", ve.paymentProviders),
              t(this, "loginHint", ""),
              t(this, "useWalletConnect", void 0),
              t(this, "isCustomLogin", !1),
              (this.buttonPosition = e),
              (this.buttonSize = r),
              (this.torusUrl = ""),
              (this.isLoggedIn = !1),
              (this.isInitialized = !1),
              (this.torusWidgetVisibility = !0),
              (this.requestedVerifier = ""),
              (this.currentVerifier = ""),
              (this.apiKey = i),
              m(i),
              (this.modalZIndex = n),
              (this.alertZIndex = n + 1e3),
              (this.isIframeFullScreen = !1);
          }
          async init() {
            let {
              buildEnv: e = le.PRODUCTION,
              enableLogging: t = !1,
              enabledVerifiers: r = He,
              network: n = {
                host: "mainnet",
                chainId: null,
                networkName: "",
                blockExplorer: "",
                ticker: "",
                tickerName: "",
              },
              loginConfig: i = {},
              showTorusButton: a = !0,
              integrity: s = { check: !1, hash: Ve, version: "" },
              whiteLabel: f,
              skipTKey: c = !1,
              useWalletConnect: u = !1,
              mfaLevel: d = "default",
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            if (this.isInitialized) throw new Error("Already initialized");
            const { torusUrl: h, logLevel: l } = await Ie(e, s);
            Ee.info(h, "url loaded"),
              (this.torusUrl = h),
              (this.whiteLabel = f),
              (this.useWalletConnect = u),
              (this.isCustomLogin =
                !!(i && Object.keys(i).length > 0) ||
                !!(f && Object.keys(f).length > 0)),
              Ee.setDefaultLevel(l),
              t ? Ee.enableAll() : Ee.disableAll(),
              (this.torusWidgetVisibility = a);
            const p = new URL(h);
            p.pathname.endsWith("/")
              ? (p.pathname += "popup")
              : (p.pathname += "/popup"),
              (p.hash = `#isCustomLogin=${this.isCustomLogin}`),
              (this.torusIframe = _e(
                `<iframe\n        id="torusIframe"\n        allow=${
                  u ? "camera" : ""
                }\n        class="torusIframe"\n        src="${
                  p.href
                }"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%; color-scheme: none;\n        height: 100%; border: none; border-radius: 0; z-index: ${
                  this.modalZIndex
                }"\n      ></iframe>`
              )),
              (this.torusAlertContainer = _e(
                '<div id="torusAlertContainer"></div>'
              )),
              (this.torusAlertContainer.style.display = "none"),
              this.torusAlertContainer.style.setProperty(
                "z-index",
                this.alertZIndex.toString()
              );
            const b = window.document.createElement("link");
            b.setAttribute("rel", "stylesheet"),
              b.setAttribute("type", "text/css"),
              b.setAttribute("href", `${h}/css/widget.css`),
              (this.styleLink = b);
            const { defaultLanguage: y = Ce(), customTranslations: g = {} } =
                this.whiteLabel || {},
              m = o()(ve.translations, g)[y] || ve.translations[Ce()];
            this.embedTranslations = m.embed;
            const v = async () => (
              await (async function () {
                return new Promise((e) => {
                  "loading" !== document.readyState
                    ? e()
                    : (function (e, t, r) {
                        for (
                          var n = arguments.length,
                            i = new Array(n > 3 ? n - 3 : 0),
                            o = 3;
                          o < n;
                          o++
                        )
                          i[o - 3] = arguments[o];
                        const a = () => {
                          r(...i), e.removeEventListener(t, a);
                        };
                        e.addEventListener(t, a);
                      })(document, "DOMContentLoaded", e);
                });
              })(),
              new Promise((e, t) => {
                (this.torusIframe.onload = async () => {
                  this._setupWeb3();
                  const o = this.communicationMux.getStream("init_stream");
                  o.on("data", (r) => {
                    const { name: n, data: i, error: o } = r;
                    "init_complete" === n && i.success
                      ? ((this.isInitialized = !0),
                        this._displayIframe(this.isIframeFullScreen),
                        e(void 0))
                      : o && t(new Error(o));
                  }),
                    o.write({
                      name: "init_stream",
                      data: {
                        enabledVerifiers: r,
                        loginConfig: i,
                        whiteLabel: this.whiteLabel,
                        buttonPosition: this.buttonPosition,
                        buttonSize: this.buttonSize,
                        torusWidgetVisibility: this.torusWidgetVisibility,
                        apiKey: this.apiKey,
                        skipTKey: c,
                        network: n,
                        mfaLevel: d,
                      },
                    });
                }),
                  window.document.head.appendChild(this.styleLink),
                  window.document.body.appendChild(this.torusIframe),
                  window.document.body.appendChild(this.torusAlertContainer);
              })
            );
            if ("production" === e && s.check) {
              const e = `${h}/popup`,
                t = await fetch(e, { cache: "reload" });
              if ("max-age=3600" !== t.headers.get("Cache-Control"))
                throw new Error(
                  `Unexpected Cache-Control headers, got ${t.headers.get(
                    "Cache-Control"
                  )}`
                );
              const r = ((e, t) => {
                const r = ((e) => ({
                    algorithms: e.algorithms || ["sha256"],
                    delimiter: e.delimiter || " ",
                    full: e.full || !1,
                  }))(e),
                  n = { hashes: Le(r, t), integrity: void 0 };
                return (
                  (n.integrity = ((e, t) => {
                    let r = "";
                    return (
                      (r += Object.keys(t.hashes)
                        .map((e) => `${e}-${t.hashes[e]}`)
                        .join(e.delimiter)),
                      r
                    );
                  })(r, n)),
                  r.full ? n : n.integrity
                );
              })({ algorithms: ["sha384"] }, await t.text());
              if ((Ee.info(r, "integrity"), r !== s.hash))
                throw (this.clearInit(), new Error("Integrity check failed"));
              await v();
            } else await v();
          }
          login() {
            let { verifier: e = "", login_hint: t = "" } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!this.isInitialized) throw new Error("Call init() first");
            return (
              (this.requestedVerifier = e),
              (this.loginHint = t),
              this.ethereum.enable()
            );
          }
          logout() {
            return new Promise((e, t) => {
              if (!this.isLoggedIn)
                return void t(new Error("User has not logged in yet"));
              this.communicationMux
                .getStream("logout")
                .write({ name: "logOut" });
              const r = this.communicationMux.getStream("status");
              Se(r, "data", (r) => {
                r.loggedIn
                  ? t(new Error("Some Error Occured"))
                  : ((this.isLoggedIn = !1),
                    (this.currentVerifier = ""),
                    (this.requestedVerifier = ""),
                    e());
              });
            });
          }
          async cleanUp() {
            this.isLoggedIn && (await this.logout()), this.clearInit();
          }
          clearInit() {
            function e(e) {
              return e instanceof Element || e instanceof HTMLDocument;
            }
            e(this.styleLink) &&
              window.document.body.contains(this.styleLink) &&
              (this.styleLink.remove(), (this.styleLink = void 0)),
              e(this.torusIframe) &&
                window.document.body.contains(this.torusIframe) &&
                (this.torusIframe.remove(), (this.torusIframe = void 0)),
              e(this.torusAlertContainer) &&
                window.document.body.contains(this.torusAlertContainer) &&
                ((this.torusAlert = void 0),
                this.torusAlertContainer.remove(),
                (this.torusAlertContainer = void 0)),
              (this.isInitialized = !1);
          }
          hideTorusButton() {
            (this.torusWidgetVisibility = !1),
              this._sendWidgetVisibilityStatus(!1),
              this._displayIframe();
          }
          showTorusButton() {
            (this.torusWidgetVisibility = !0),
              this._sendWidgetVisibilityStatus(!0),
              this._displayIframe();
          }
          setProvider(e) {
            let {
                host: t = "mainnet",
                chainId: r = null,
                networkName: n = "",
              } = e,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      i = {},
                      o = Object.keys(e);
                    for (n = 0; n < o.length; n++)
                      (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]),
                      t.indexOf(r) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(e, r) &&
                          (i[r] = e[r]));
                }
                return i;
              })(e, Fe);
            return new Promise((e, o) => {
              const a = this.communicationMux.getStream("provider_change");
              Se(a, "data", (t) => {
                const { err: r, success: n } = t.data;
                Ee.info(t),
                  r ? o(r) : n ? e() : o(new Error("some error occured"));
              });
              const s = Oe();
              this._handleWindow(s, { target: "_blank", features: xe }),
                a.write({
                  name: "show_provider_change",
                  data: {
                    network: Ke({ host: t, chainId: r, networkName: n }, i),
                    preopenInstanceId: s,
                    override: !1,
                  },
                });
            });
          }
          showWallet(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const r = this.communicationMux.getStream("show_wallet"),
              n = e ? `/${e}` : "";
            r.write({ name: "show_wallet", data: { path: n } }),
              Se(r, "data", (e) => {
                if ("show_wallet_instance" === e.name) {
                  const { instanceId: r } = e.data,
                    i = new URL(`${this.torusUrl}/wallet${n}`);
                  i.searchParams.append("integrity", "true"),
                    i.searchParams.append("instanceId", r),
                    Object.keys(t).forEach((e) => {
                      i.searchParams.append(e, t[e]);
                    }),
                    (i.hash = `#isCustomLogin=${this.isCustomLogin}`),
                    new Ne({
                      url: i,
                      features:
                        "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315",
                    }).open();
                }
              });
          }
          async getPublicAddress(e) {
            let { verifier: t, verifierId: r, isExtended: n = !1 } = e;
            if (!ve.supportedVerifierList.includes(t) || !te[t])
              throw new Error("Unsupported verifier");
            const i = t,
              o = te[t],
              a = new URL("https://api.tor.us/lookup/torus");
            return (
              a.searchParams.append("verifier", o),
              a.searchParams.append("verifierId", r),
              a.searchParams.append("walletVerifier", i),
              a.searchParams.append("network", "mainnet"),
              a.searchParams.append("isExtended", n.toString()),
              v(
                a.href,
                {
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                  },
                },
                { useAPIKey: !0 }
              )
            );
          }
          getUserInfo(e) {
            return new Promise((t, r) => {
              if (this.isLoggedIn) {
                const n = this.communicationMux.getStream("user_info_access");
                n.write({ name: "user_info_access_request" });
                const i = (n) => {
                  const {
                    name: i,
                    data: {
                      approved: o,
                      payload: a,
                      rejected: s,
                      newRequest: f,
                    },
                  } = n;
                  if ("user_info_access_response" === i)
                    if (o) t(a);
                    else if (s) r(new Error("User rejected the request"));
                    else if (f) {
                      const n = this.communicationMux.getStream("user_info");
                      Se(n, "data", (e) => {
                        "user_info_response" === e.name &&
                          (e.data.approved
                            ? t(e.data.payload)
                            : r(new Error("User rejected the request")));
                      });
                      const i = Oe();
                      this._handleWindow(i, { target: "_blank", features: xe }),
                        n.write({
                          name: "user_info_request",
                          data: { message: e, preopenInstanceId: i },
                        });
                    }
                };
                Se(n, "data", i);
              } else r(new Error("User has not logged in yet"));
            });
          }
          initiateTopup(e, t) {
            return new Promise((r, n) => {
              if (this.isInitialized) {
                const { errors: i, isValid: o } = ((e, t) => {
                  const r = {};
                  if (!e) return { errors: r, isValid: !0 };
                  if (e && !Me[e])
                    return (
                      (r.provider = "Invalid Provider"),
                      { errors: r, isValid: 0 === Object.keys(r).length }
                    );
                  const n = Me[e],
                    i = t || {};
                  if (i.fiatValue) {
                    const e = +parseFloat(i.fiatValue.toString()) || 0;
                    e < n.minOrderValue &&
                      (r.fiatValue =
                        "Requested amount is lower than supported"),
                      e > n.maxOrderValue &&
                        n.enforceMax &&
                        (r.fiatValue =
                          "Requested amount is higher than supported");
                  }
                  if (
                    (i.selectedCurrency &&
                      !n.validCurrencies.includes(i.selectedCurrency) &&
                      (r.selectedCurrency = "Unsupported currency"),
                    i.selectedCryptoCurrency)
                  ) {
                    const t = Object.values(n.validCryptoCurrenciesByChain)
                        .flat()
                        .map((e) => e.value),
                      o =
                        e === re
                          ? i.selectedCryptoCurrency.toLowerCase()
                          : i.selectedCryptoCurrency;
                    t &&
                      !t.includes(o) &&
                      (r.selectedCryptoCurrency = "Unsupported cryptoCurrency");
                  }
                  return { errors: r, isValid: 0 === Object.keys(r).length };
                })(e, t);
                if (!o) return void n(new Error(JSON.stringify(i)));
                const a = this.communicationMux.getStream("topup");
                Se(a, "data", (e) => {
                  "topup_response" === e.name &&
                    (e.data.success
                      ? r(e.data.success)
                      : n(new Error(e.data.error)));
                });
                const s = Oe();
                this._handleWindow(s),
                  a.write({
                    name: "topup_request",
                    data: { provider: e, params: t, preopenInstanceId: s },
                  });
              } else n(new Error("Torus is not initialized yet"));
            });
          }
          async loginWithPrivateKey(e) {
            const { privateKey: t, userInfo: r } = e;
            return new Promise((e, n) => {
              if (this.isInitialized) {
                if (32 !== Q.from(t, "hex").length)
                  return void n(
                    new Error(
                      "Invalid private key, Please provide a 32 byte valid secp25k1 private key"
                    )
                  );
                const i = this.communicationMux.getStream(
                  "login_with_private_key"
                );
                Se(i, "data", (t) => {
                  "login_with_private_key_response" === t.name &&
                    (t.data.success
                      ? e(t.data.success)
                      : n(new Error(t.data.error)));
                }),
                  i.write({
                    name: "login_with_private_key_request",
                    data: { privateKey: t, userInfo: r },
                  });
              } else n(new Error("Torus is not initialized yet"));
            });
          }
          async showWalletConnectScanner() {
            if (!this.useWalletConnect)
              throw new Error(
                "Set `useWalletConnect` as true in init function options to use wallet connect scanner"
              );
            return new Promise((e, t) => {
              if (this.isLoggedIn) {
                const r = this.communicationMux.getStream(
                  "wallet_connect_stream"
                );
                Se(r, "data", (r) => {
                  "wallet_connect_stream_res" === r.name &&
                    (r.data.success
                      ? e(r.data.success)
                      : t(new Error(r.data.error)),
                    this._displayIframe());
                }),
                  r.write({ name: "wallet_connect_stream_req" }),
                  this._displayIframe(!0);
              } else t(new Error("User has not logged in yet"));
            });
          }
          _handleWindow(e) {
            let {
              url: t,
              target: r,
              features: n,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            if (e) {
              const i = this.communicationMux.getStream("window"),
                o = new URL(
                  t || `${this.torusUrl}/redirect?preopenInstanceId=${e}`
                );
              o.hash
                ? (o.hash += `&isCustomLogin=${this.isCustomLogin}`)
                : (o.hash = `#isCustomLogin=${this.isCustomLogin}`);
              const a = new Ne({ url: o, target: r, features: n });
              if ((a.open(), !a.window))
                return void this._createPopupBlockAlert(e, o.href);
              i.write({
                name: "opened_window",
                data: { preopenInstanceId: e },
              });
              const s = (t) => {
                let { preopenInstanceId: r, close: n } = t;
                r === e && n && (a.close(), i.removeListener("data", s));
              };
              i.on("data", s),
                a.once("close", () => {
                  i.write({ data: { preopenInstanceId: e, closed: !0 } }),
                    i.removeListener("data", s);
                });
            }
          }
          _setEmbedWhiteLabel(e) {
            const { theme: t } = this.whiteLabel || {};
            if (t) {
              const { isDark: r = !1, colors: n = {} } = t;
              r && e.classList.add("torus-dark"),
                n.torusBrand1 &&
                  e.style.setProperty("--torus-brand-1", n.torusBrand1),
                n.torusGray2 &&
                  e.style.setProperty("--torus-gray-2", n.torusGray2);
            }
          }
          _getLogoUrl() {
            let e = `${this.torusUrl}/images/torus_icon-blue.svg`;
            return (
              (e = this.whiteLabel?.theme?.isDark
                ? this.whiteLabel?.logoLight || e
                : this.whiteLabel?.logoDark || e),
              e
            );
          }
          _sendWidgetVisibilityStatus(e) {
            this.communicationMux
              .getStream("torus-widget-visibility")
              .write({ data: e });
          }
          _displayIframe() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const t = {},
              r = this.buttonSize + 14;
            if (e)
              (t.display = "block"),
                (t.width = "100%"),
                (t.height = "100%"),
                (t.top = "0px"),
                (t.right = "0px"),
                (t.left = "0px"),
                (t.bottom = "0px");
            else
              switch (
                ((t.display = this.torusWidgetVisibility ? "block" : "none"),
                (t.height = `${r}px`),
                (t.width = `${r}px`),
                this.buttonPosition)
              ) {
                case pe.TOP_LEFT:
                  (t.top = "0px"),
                    (t.left = "0px"),
                    (t.right = "auto"),
                    (t.bottom = "auto");
                  break;
                case pe.TOP_RIGHT:
                  (t.top = "0px"),
                    (t.right = "0px"),
                    (t.left = "auto"),
                    (t.bottom = "auto");
                  break;
                case pe.BOTTOM_RIGHT:
                  (t.bottom = "0px"),
                    (t.right = "0px"),
                    (t.top = "auto"),
                    (t.left = "auto");
                  break;
                case pe.BOTTOM_LEFT:
                default:
                  (t.bottom = "0px"),
                    (t.left = "0px"),
                    (t.top = "auto"),
                    (t.right = "auto");
              }
            Object.assign(this.torusIframe.style, t),
              (this.isIframeFullScreen = e);
          }
          _setupWeb3() {
            Ee.info("setupWeb3 running");
            const e = new D({
                name: "embed_metamask",
                target: "iframe_metamask",
                targetWindow: this.torusIframe.contentWindow,
                targetOrigin: new URL(this.torusUrl).origin,
              }),
              t = new D({
                name: "embed_comm",
                target: "iframe_comm",
                targetWindow: this.torusIframe.contentWindow,
                targetOrigin: new URL(this.torusUrl).origin,
              }),
              r = new De(e),
              n = (e) => {
                const t = r[e];
                r[e] = function (e) {
                  if (e && "eth_requestAccounts" === e) return r.enable();
                  for (
                    var n = arguments.length,
                      i = new Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  return t.apply(this, [e, ...i]);
                };
              };
            n("send"),
              n("sendAsync"),
              (r.enable = () =>
                new Promise((e, t) => {
                  r.sendAsync(
                    {
                      jsonrpc: "2.0",
                      id: Oe(),
                      method: "eth_requestAccounts",
                      params: [],
                    },
                    (r, n) => {
                      const { result: i } = n || {};
                      if (r)
                        setTimeout(() => {
                          t(r);
                        }, 50);
                      else if (Array.isArray(i) && i.length > 0) {
                        const r = () => {
                          if (
                            "" !== this.requestedVerifier &&
                            this.currentVerifier !== this.requestedVerifier
                          ) {
                            const { requestedVerifier: r } = this;
                            this.logout()
                              .then((n) => {
                                (this.requestedVerifier = r),
                                  this._showLoginPopup(!0, e, t);
                              })
                              .catch((e) => t(e));
                          } else e(i);
                        };
                        this.isLoggedIn ? r() : (this.isLoginCallback = r);
                      } else this._showLoginPopup(!0, e, t);
                    }
                  );
                })),
              (r.tryPreopenHandle = (e, t) => {
                const n = e;
                if (!Array.isArray(n) && Ge.includes(n.method)) {
                  const e = Oe();
                  this._handleWindow(e, { target: "_blank", features: Be }),
                    (n.preopenInstanceId = e);
                }
                r._rpcEngine.handle(n, t);
              });
            const i = new Proxy(r, { deleteProperty: () => !0 });
            this.ethereum = i;
            const o = (function (e) {
              const t = new V();
              return (
                (t.getStream = function (e) {
                  return this._substreams[e]
                    ? this._substreams[e]
                    : this.createStream(e);
                }),
                B()(e, t, e, (e) => {
                  e && window.console.error(e);
                }),
                t
              );
            })(t);
            (this.communicationMux = o),
              o.getStream("window").on("data", (e) => {
                "create_window" === e.name &&
                  this._createPopupBlockAlert(
                    e.data.preopenInstanceId,
                    e.data.url
                  );
              }),
              o.getStream("widget").on("data", (e) => {
                const { data: t } = e;
                this._displayIframe(t);
              }),
              o.getStream("status").on("data", (e) => {
                e.loggedIn
                  ? ((this.isLoggedIn = e.loggedIn),
                    (this.currentVerifier = e.verifier))
                  : this._displayIframe(),
                  this.isLoginCallback &&
                    (this.isLoginCallback(), delete this.isLoginCallback);
              }),
              (this.provider = i),
              this.provider.shouldSendMetadata &&
                (async function (e) {
                  try {
                    const t = await (async () => ({
                      name: qe(window),
                      icon: await ze(window),
                    }))();
                    e.handle(
                      {
                        jsonrpc: "2.0",
                        id: Oe(),
                        method: "wallet_sendDomainMetadata",
                        params: t,
                      },
                      Pe
                    );
                  } catch (e) {
                    Ee.error({
                      message: Ae.errors.sendSiteMetadata(),
                      originalError: e,
                    });
                  }
                })(this.provider._rpcEngine),
              r._initializeState(),
              Ee.debug("Torus - injected provider");
          }
          _showLoginPopup(e, t, r) {
            const n = (e) => {
                const { err: n, selectedAddress: i } = e;
                n ? (Ee.error(n), r && r(n)) : t && t([i]),
                  this.isIframeFullScreen && this._displayIframe();
              },
              i = this.communicationMux.getStream("oauth");
            if (this.requestedVerifier) {
              Se(i, "data", n);
              const t = Oe();
              this._handleWindow(t),
                i.write({
                  name: "oauth",
                  data: {
                    calledFromEmbed: e,
                    verifier: this.requestedVerifier,
                    preopenInstanceId: t,
                    login_hint: this.loginHint,
                  },
                });
            } else
              this._displayIframe(!0),
                Se(i, "data", n),
                i.write({ name: "oauth_modal", data: { calledFromEmbed: e } });
          }
          _createPopupBlockAlert(e, t) {
            const r = this._getLogoUrl(),
              n = _e(
                `<div id="torusAlert" class="torus-alert--v2"><div id="torusAlert__logo"><img src="${r}" /></div><div><h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1><p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p></div></div>`
              ),
              i = _e(
                `<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`
              ),
              o = _e('<div id="torusAlert__btn-container"></div>');
            o.appendChild(i),
              n.appendChild(o),
              this._setEmbedWhiteLabel(n),
              we(() => {
                (this.torusAlertContainer.style.display = "block"),
                  this.torusAlertContainer.appendChild(n);
              }),
              we(() => {
                i.addEventListener("click", () => {
                  this._handleWindow(e, {
                    url: t,
                    target: "_blank",
                    features: Be,
                  }),
                    n.remove(),
                    0 === this.torusAlertContainer.children.length &&
                      (this.torusAlertContainer.style.display = "none");
                });
              });
          }
        }
        r(7645), r(5291).Buffer;
        const Xe = "openlogin_store";
        s().setLevel("error"), s().getLogger("openlogin");
        class Je {
          constructor() {
            t(this, "store", {});
          }
          getItem(e) {
            return this.store[e] || null;
          }
          setItem(e, t) {
            this.store[e] = t;
          }
        }
        function Ye(e) {
          let t,
            r = !1,
            n = 0;
          try {
            (t = window[e]), (r = !0), (n = t.length);
            const i = "__storage_test__";
            return t.setItem(i, i), t.removeItem(i), !0;
          } catch (e) {
            return (
              e &&
              (22 === e.code ||
                1014 === e.code ||
                "QuotaExceededErro r" === e.name ||
                "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
              r &&
              0 !== n
            );
          }
        }
        const Ze = Ye("sessionStorage"),
          Qe = Ye("localStorage");
        t(
          class {
            constructor(e, r) {
              t(this, "storage", void 0),
                t(this, "_storeKey", Xe),
                (this.storage = e),
                (this._storeKey = r || Xe);
              try {
                e.getItem(r || Xe) || this.resetStore();
              } catch (e) {}
            }
            static getInstance(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "local";
              if (!this.instance) {
                let r = new Je();
                "local" === t && Qe && (r = localStorage),
                  "session" === t && Ze && (r = sessionStorage);
                const n = e ? `${Xe}_${e}` : Xe;
                this.instance = new this(r, n);
              }
              return this.instance;
            }
            toJSON() {
              return this.storage.getItem(this._storeKey);
            }
            resetStore() {
              const e = this.getStore();
              return (
                this.storage.setItem(this._storeKey, JSON.stringify({})), e
              );
            }
            getStore() {
              return JSON.parse(this.storage.getItem(this._storeKey));
            }
            get(e) {
              return JSON.parse(this.storage.getItem(this._storeKey))[e];
            }
            set(e, t) {
              const r = JSON.parse(this.storage.getItem(this._storeKey));
              (r[e] = t),
                this.storage.setItem(this._storeKey, JSON.stringify(r));
            }
          },
          "instance",
          void 0
        );
        var et,
          tt =
            ((et = function (e, t) {
              return (
                (et =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        (e[r] = t[r]);
                  }),
                et(e, t)
              );
            }),
            function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = e;
              }
              et(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            }),
          rt = (function (e) {
            function t(t, r) {
              var n,
                i,
                o,
                a = this.constructor,
                s = e.call(this, t, r) || this;
              return (
                Object.defineProperty(s, "name", {
                  value: a.name,
                  enumerable: !1,
                  configurable: !0,
                }),
                (n = s),
                (i = a.prototype),
                (o = Object.setPrototypeOf) ? o(n, i) : (n.__proto__ = i),
                (function (e, t) {
                  void 0 === t && (t = e.constructor);
                  var r = Error.captureStackTrace;
                  r && r(e, t);
                })(s),
                s
              );
            }
            return tt(t, e), t;
          })(Error);
        class nt extends rt {
          constructor(e, r) {
            super(r),
              t(this, "code", void 0),
              t(this, "message", void 0),
              (this.code = e),
              (this.message = r || ""),
              Object.defineProperty(this, "name", { value: "Web3AuthError" });
          }
          toJSON() {
            return { name: this.name, code: this.code, message: this.message };
          }
          toString() {
            return JSON.stringify(this.toJSON());
          }
        }
        class it extends nt {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "name", {
                value: "WalletInitializationError",
              });
          }
          static fromCode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            return new it(e, `${it.messages[e]}, ${t}`);
          }
          static notFound() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5001, e);
          }
          static notInstalled() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5002, e);
          }
          static notReady() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5003, e);
          }
          static windowBlocked() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5004, e);
          }
          static windowClosed() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5005, e);
          }
          static incompatibleChainNameSpace() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5006, e);
          }
          static duplicateAdapterError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5007, e);
          }
          static invalidProviderConfigError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5008, e);
          }
          static providerNotReadyError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5009, e);
          }
          static rpcConnectionError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5010, e);
          }
          static invalidParams() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5011, e);
          }
          static invalidNetwork() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return it.fromCode(5013, e);
          }
        }
        t(it, "messages", {
          5e3: "Custom",
          5001: "Wallet is not found",
          5002: "Wallet is not installed",
          5003: "Wallet is not ready yet",
          5004: "Wallet window is blocked",
          5005: "Wallet window has been closed by the user",
          5006: "Incompatible chain namespace provided",
          5007: "Adapter has already been included",
          5008: "Invalid provider Config",
          5009: "Provider is not ready yet",
          5010: "Failed to connect with rpc url",
          5011: "Invalid params passed in",
          5013: "Invalid network provided",
        });
        class ot extends nt {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "name", {
                value: "WalletLoginError",
              });
          }
          static fromCode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            return new ot(e, `${ot.messages[e]}. ${t}`);
          }
          static connectionError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5111, e);
          }
          static disconnectionError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5112, e);
          }
          static notConnectedError() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5113, e);
          }
          static popupClosed() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5114, e);
          }
          static mfaEnabled() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5115, e);
          }
          static chainConfigNotAdded() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5116, e);
          }
          static unsupportedOperation() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5117, e);
          }
          static coreKitKeyNotFound() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5118, e);
          }
          static userNotLoggedIn() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return ot.fromCode(5119, e);
          }
        }
        t(ot, "messages", {
          5e3: "Custom",
          5111: "Failed to connect with wallet",
          5112: "Failed to disconnect from wallet",
          5113: "Wallet is not connected",
          5114: "Wallet popup has been closed by the user",
          5115: "User has already enabled mfa, please use the @web3auth/web3auth-web sdk for login with mfa",
          5116: "Chain config has not been added. Please add the chain config before calling switchChain",
          5117: "Unsupported operation",
          5118: "useCoreKitKey flag is enabled but coreKitKey is not available",
          5119: "User not logged in.",
        });
        class at extends nt {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "name", {
                value: "WalletOperationsError",
              });
          }
          static fromCode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            return new at(e, `${at.messages[e]}, ${t}`);
          }
          static chainIDNotAllowed() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return at.fromCode(5201, e);
          }
          static operationNotAllowed() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return at.fromCode(5202, e);
          }
        }
        function st(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function ft(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? st(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : st(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        t(at, "messages", {
          5e3: "Custom",
          5201: "Provided chainId is not allowed",
          5202: "This operation is not allowed",
        });
        const ct = {
            OPENLOGIN: "openlogin",
            WALLET_CONNECT_V1: "wallet-connect-v1",
            WALLET_CONNECT_V2: "wallet-connect-v2",
          },
          ut = ft(
            {
              TORUS_SOLANA: "torus-solana",
              PHANTOM: "phantom",
              SOLFLARE: "solflare",
              SLOPE: "slope",
            },
            ct
          ),
          dt = ft(
            {
              TORUS_EVM: "torus-evm",
              METAMASK: "metamask",
              COINBASE: "coinbase",
            },
            ct
          ),
          ht = ft(ft({}, dt), ut);
        function lt(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function pt(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? lt(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : lt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        ut.TORUS_SOLANA,
          ut.PHANTOM,
          ut.SOLFLARE,
          ut.SLOPE,
          dt.TORUS_EVM,
          dt.METAMASK,
          dt.COINBASE;
        const bt = {
            NOT_READY: "not_ready",
            READY: "ready",
            CONNECTING: "connecting",
            CONNECTED: "connected",
            DISCONNECTED: "disconnected",
            ERRORED: "errored",
          },
          yt = pt(
            pt({}, bt),
            {},
            {
              ADAPTER_DATA_UPDATED: "adapter_data_updated",
              CACHE_CLEAR: "cache_clear",
            }
          );
        function gt(e) {
          this.message = e;
        }
        function mt(e) {
          this.message = e;
        }
        function vt(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function wt(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? vt(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : vt(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        (gt.prototype = new Error()),
          (gt.prototype.name = "InvalidCharacterError"),
          "undefined" != typeof window &&
            window.atob &&
            window.atob.bind(window),
          (mt.prototype = new Error()),
          (mt.prototype.name = "InvalidTokenError"),
          s().getLogger("web3auth-logger");
        const _t = wt(
          wt({}, { EIP155: "eip155", SOLANA: "solana", OTHER: "other" }),
          {},
          { MULTICHAIN: "multichain" }
        );
        class St extends nt {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "name", {
                value: "TorusWalletPluginError",
              });
          }
          static fromCode(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            return new St(e, `${St.messages[e]}${t}`);
          }
          static notInitialized() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5210, e);
          }
          static unsupportedAdapter() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5211, e);
          }
          static providerRequired() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5212, e);
          }
          static web3authRequired() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5213, e);
          }
          static web3AuthNotConnected() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5214, e);
          }
          static userInfoRequired() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5215, e);
          }
          static alreadyInitialized() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5216, e);
          }
          static torusWalletNotSet() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return St.fromCode(5217, e);
          }
        }
        function Et(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function At(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? Et(Object(n), !0).forEach(function (r) {
                  t(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Et(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        t(St, "messages", {
          5210: "Torus Wallet Plugin is not initialized",
          5211: "Web3Auth is connected to unsupported adapter. Torus wallet connector plugin requires web3auth connected to openlogin adapter.",
          5212: "Provider is required..",
          5213: "Web3Auth instance is required while initialization.",
          5214: "Web3Auth is not connected.",
          5215: "UserInfo is required.",
          5216: "Plugin is already initialized",
          5217: "Torus wallet instance is not set.",
        });
        class Mt {
          constructor(e) {
            t(this, "name", "TORUS_WALLET_CONNECTOR_PLUGIN"),
              t(this, "SUPPORTED_ADAPTERS", [ht.OPENLOGIN]),
              t(this, "pluginNamespace", _t.EIP155),
              t(this, "torusWalletInstance", void 0),
              t(this, "provider", null),
              t(this, "web3auth", null),
              t(this, "userInfo", null),
              t(this, "isInitialized", !1),
              t(this, "walletInitOptions", null);
            const { torusWalletOpts: r = {}, walletInitOptions: n } = e,
              i = null == n ? void 0 : n.whiteLabel;
            if (!i) throw new Error("whiteLabel is required");
            const { logoDark: o, logoLight: a } = i;
            if (!o || !a)
              throw new Error(
                "logoDark and logoLight are required in whiteLabel config"
              );
            (this.torusWalletInstance = new $e(r)),
              (this.walletInitOptions = n);
          }
          get proxyProvider() {
            return this.torusWalletInstance.isLoggedIn
              ? this.torusWalletInstance.provider
              : null;
          }
          async initWithWeb3Auth(e) {
            if (this.isInitialized) return;
            if (!e) throw St.web3authRequired();
            if (e.provider && e.connectedAdapterName !== ht.OPENLOGIN)
              throw St.unsupportedAdapter();
            e.provider &&
              ((this.provider = e.provider),
              (this.userInfo = await e.getUserInfo())),
              (this.web3auth = e),
              this.subscribeToWeb3AuthNoModalEvents(e);
            const t = e.coreOptions.chainConfig,
              r = At(
                At({}, e.coreOptions.chainConfig),
                {},
                {
                  networkName: t.displayName,
                  host: t.rpcTarget,
                  chainId: parseInt(t.chainId, 16),
                }
              );
            await this.torusWalletInstance.init(
              At(
                At({}, this.walletInitOptions || {}),
                {},
                { network: r, showTorusButton: !1 }
              )
            ),
              (this.isInitialized = !0);
          }
          async initWithProvider(e, t) {
            if (!this.isInitialized) {
              if (!t) throw St.userInfoRequired();
              if (!e) throw St.providerRequired();
              (this.provider = e),
                (this.userInfo = t),
                await this.torusWalletInstance.init(
                  this.walletInitOptions || {}
                ),
                (this.isInitialized = !0);
            }
          }
          async connect() {
            if (
              this.web3auth &&
              this.web3auth.connectedAdapterName !== ht.OPENLOGIN
            )
              throw St.unsupportedAdapter();
            if (!this.isInitialized) throw St.notInitialized();
            if (!this.provider) {
              var e;
              if (null === (e = this.web3auth) || void 0 === e || !e.provider)
                throw this.web3auth
                  ? St.web3AuthNotConnected()
                  : St.providerRequired();
              (this.provider = this.web3auth.provider),
                (this.userInfo = await this.web3auth.getUserInfo());
            }
            let t;
            try {
              t = await this.provider.request({ method: "eth_private_key" });
            } catch (e) {
              if (
                (s().warn("unsupported method", e, St.unsupportedAdapter()),
                -32004 === (null == e ? void 0 : e.code))
              )
                throw St.unsupportedAdapter();
              throw e;
            }
            if (!t) throw St.web3AuthNotConnected();
            try {
              var r;
              await this.torusWalletInstance.loginWithPrivateKey({
                privateKey: t,
                userInfo: At(
                  At({}, this.userInfo),
                  {},
                  {
                    typeOfLogin:
                      null === (r = this.userInfo) || void 0 === r
                        ? void 0
                        : r.typeOfLogin,
                  }
                ),
              }),
                this.torusWalletInstance.showTorusButton(),
                this.subscribeToProviderEvents(this.provider),
                this.subscribeToWalletEvents();
            } catch (e) {
              s().error(e);
            }
          }
          async showWalletConnectScanner() {
            if (!this.torusWalletInstance.isLoggedIn)
              throw St.web3AuthNotConnected();
            await this.torusWalletInstance.showWalletConnectScanner();
          }
          async initiateTopup(e, t) {
            if (!this.torusWalletInstance.isLoggedIn)
              throw St.web3AuthNotConnected();
            await this.torusWalletInstance.initiateTopup(e, t);
          }
          async disconnect() {
            var e;
            if (
              (null === (e = this.web3auth) || void 0 === e
                ? void 0
                : e.connectedAdapterName) !== ht.OPENLOGIN
            )
              throw St.unsupportedAdapter();
            if (!this.torusWalletInstance.isLoggedIn)
              throw new Error("Torus Wallet plugin is not connected");
            await this.torusWalletInstance.logout();
          }
          subscribeToWalletEvents() {
            var e,
              t = this;
            null === (e = this.torusWalletInstance) ||
              void 0 === e ||
              e.provider.on("accountsChanged", function () {
                var e, r;
                0 ===
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : []
                  ).length &&
                  (t.torusWalletInstance.hideTorusButton(),
                  (null === (e = t.web3auth) || void 0 === e
                    ? void 0
                    : e.status) === bt.CONNECTED &&
                    (null === (r = t.web3auth) || void 0 === r || r.logout()));
              });
          }
          subscribeToProviderEvents(e) {
            var t = this;
            e.on("accountsChanged", function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { accounts: [] };
              t.setSelectedAddress(e.accounts[0]);
            }),
              e.on("chainChanged", (e) => {
                this.setChainID(parseInt(e.chainId, 16));
              }),
              e.on("disconnect", () => {
                this.torusWalletInstance.hideTorusButton();
              }),
              e.on("connect", () => {
                this.torusWalletInstance.showTorusButton();
              });
          }
          subscribeToWeb3AuthNoModalEvents(e) {
            e.on(yt.CONNECTED, async () => {
              if (e.connectedAdapterName === ht.OPENLOGIN) {
                if (
                  ((this.provider = e.provider),
                  (this.userInfo = await e.getUserInfo()),
                  !this.provider)
                )
                  throw St.web3AuthNotConnected();
                this.subscribeToProviderEvents(this.provider);
              } else
                s().warn(
                  `${e.connectedAdapterName} is not compatible with torus wallet connector plugin`
                );
            }),
              e.on(yt.DISCONNECTED, async () => {
                (this.provider = null),
                  (this.userInfo = null),
                  this.torusWalletInstance.isLoggedIn &&
                    (await this.torusWalletInstance.logout()),
                  this.torusWalletInstance.hideTorusButton();
              });
          }
          async sessionConfig() {
            if (!this.provider) throw St.web3AuthNotConnected();
            const [e, t, r, n] = await Promise.all([
              this.provider.request({ method: "eth_accounts" }),
              this.provider.request({ method: "eth_chainId" }),
              this.provider.request({ method: "eth_private_key" }),
              this.provider.request({ method: "eth_provider_config" }),
            ]);
            return {
              chainId: parseInt(t, 16),
              accounts: e,
              privateKey: r,
              chainConfig: n,
            };
          }
          async setSelectedAddress(e) {
            var t;
            if (!this.torusWalletInstance.isLoggedIn || !this.userInfo)
              throw St.web3AuthNotConnected();
            const r = await this.sessionConfig();
            var n;
            e !== (null === (t = r.accounts) || void 0 === t ? void 0 : t[0]) &&
              (await this.torusWalletInstance.loginWithPrivateKey({
                privateKey: r.privateKey,
                userInfo: At(
                  At({}, this.userInfo),
                  {},
                  {
                    typeOfLogin:
                      null === (n = this.userInfo) || void 0 === n
                        ? void 0
                        : n.typeOfLogin,
                  }
                ),
              }));
          }
          async setChainID(e) {
            const t = await this.sessionConfig(),
              { chainConfig: r } = t || {};
            e !== t.chainId &&
              r &&
              (await this.torusWalletInstance.setProvider(
                At(
                  At({}, r),
                  {},
                  { chainId: e, host: r.rpcTarget, networkName: r.displayName }
                )
              ));
          }
        }
      })(),
      n
    );
  })()
);
//# sourceMappingURL=torusWalletConnectorPlugin.umd.min.js.map