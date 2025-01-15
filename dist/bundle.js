/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      799: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (l = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    '\n          :host {\n            display: block;\n          width: 100%;\n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n          margin-bottom: 20px;\n          }\n     \n          div {\n            text-align: center;\n          padding: 20px;\n          background-color: #6495ed; \n          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n          margin-bottom: 20px;\n          }\n     \n          .brand-name {\n            font-family: "Arial", sans-serif;\n          font-size: 28px;\n          color: white;\n          letter-spacing: 1px;\n          margin: 0;\n          }\n        ';
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '      \n          <div>\n            <h1 class="brand-name">Notes App</h1>\n          </div>\n        ');
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("app-bar", u);
      },
      283: () => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, c(r.key), r);
          }
        }
        function n(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var a = new (t.bind.apply(t, i))();
                  return n && o(a, n.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              );
            }),
            n(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, e, n) {
          return (
            (e = c(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function c(e) {
          var n = (function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == t(n) ? n : n + "";
        }
        var u = (function (n) {
          function c() {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              a(
                (e = (function (e, n, o) {
                  return (
                    (n = i(n)),
                    (function (e, n) {
                      if (n && ("object" == t(n) || "function" == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(e);
                    })(
                      e,
                      r()
                        ? Reflect.construct(n, o || [], i(e).constructor)
                        : n.apply(e, o),
                    )
                  );
                })(this, c)),
                "_shadowRoot",
                null,
              ),
              a(e, "_style", null),
              (e._shadowRoot = e.attachShadow({ mode: "open" })),
              (e._style = document.createElement("style")),
              e
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && o(t, e);
            })(c, n),
            (u = c),
            (l = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    '\n          :host {\n            display: block;\n          }\n     \n          div {\n          font-family: "Arial", sans-serif;\n            padding: 24px 20px;\n        background-color: #6495ed;     \n        text-align: center;\n        color: white;\n\n          }\n        ';
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      "      \n          <div>\n            Notes App &copy; 2023\n          </div>\n        ");
                },
              },
            ]) && e(u.prototype, l),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define("footer-bar", u);
      },
      159: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i)()(o());
        a.push([
          t.id,
          '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Arial", sans-serif;\n  background-color: #f4f4f9;\n  overflow-x: hidden;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  min-height: 100vh;\n  padding: 20px;\n}\n\n.note-list-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  width: 100%;\n  max-width: 800px;\n}\n\n@media (max-width: 600px) {\n  .note-list-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n.note-item {\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 16px;\n  background-color: #fff;\n  transition: transform 0.2s;\n  width: 100%;\n}\n\n.note-item h3 {\n  font-size: 1.5rem;\n  color: #333;\n  margin: 0;\n  text-align: center;\n  padding: 8px;\n}\n\n.note-item p {\n  font-size: 1rem;\n  color: #555;\n  margin-top: 8px;\n  line-height: 1.5;\n  text-align: center;\n}\n\n@media (max-width: 600px) {\n  .note-item h3 {\n    font-size: 1.2rem;\n  }\n\n  .note-item p {\n    font-size: 0.95rem;\n  }\n}\n',
          "",
        ]);
        const c = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var s = [].concat(t[l]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var i = {}, a = [], c = 0; c < t.length; c++) {
            var u = t[c],
              l = r.base ? u[0] + r.base : u[0],
              s = i[l] || 0,
              f = "".concat(l, " ").concat(s);
            i[l] = s + 1;
            var p = n(f),
              h = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(h);
            else {
              var y = o(h, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: f, updater: y, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              e[c].references--;
            }
            for (var u = r(t, o), l = 0; l < i.length; l++) {
              var s = n(i[l]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = u;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return t[r](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        l = n(540),
        s = n.n(l),
        f = n(113),
        p = n.n(f),
        h = n(159),
        y = {};
      function d(t) {
        return (
          (d =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          d(t)
        );
      }
      function v() {
        v = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new C(r || []);
          return o(a, "_invoke", { value: k(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          m = "completed",
          b = {};
        function g() {}
        function w() {}
        function x() {}
        var _ = {};
        l(_, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          O = E && E(E(N([])));
        O && O !== n && r.call(O, a) && (_ = O);
        var j = (x.prototype = g.prototype = Object.create(_));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == d(s) && r.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function k(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === m) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = P(c, r);
                if (u) {
                  if (u === b) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var l = f(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? m : h), l.arg === b)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = m), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function P(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                P(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              b
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), b
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                b)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              b);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function R(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(d(e) + " is not iterable");
        }
        return (
          (w.prototype = x),
          o(j, "constructor", { value: x, configurable: !0 }),
          o(x, "constructor", { value: w, configurable: !0 }),
          (w.displayName = l(x, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === w || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, x)
                : ((t.__proto__ = x), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(S.prototype),
          l(S.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(s(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(j),
          l(j, u, "Generator"),
          l(j, a, function () {
            return this;
          }),
          l(j, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(R),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                b
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), R(n), b;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    R(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                b
              );
            },
          }),
          e
        );
      }
      function m(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function b(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              m(i, r, o, a, c, "next", t);
            }
            function c(t) {
              m(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      function g(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, w(r.key), r);
        }
      }
      function w(t) {
        var e = (function (t) {
          if ("object" != d(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != d(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == d(e) ? e : e + "";
      }
      (y.styleTagTransform = p()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = s()),
        e()(h.A, y),
        h.A && h.A.locals && h.A.locals,
        n(799),
        n(283);
      var x = "https://notes-api.dicoding.dev/v2";
      const _ = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "createNote",
              value:
                ((o = b(
                  v().mark(function t(e, n) {
                    var r, o;
                    return v().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("".concat(x, "/notes"), {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({ title: e, body: n }),
                                })
                              );
                            case 3:
                              return (r = t.sent), (t.next = 6), r.json();
                            case 6:
                              if (((o = t.sent), !r.ok)) {
                                t.next = 13;
                                break;
                              }
                              return (
                                console.log(o.message),
                                console.log(o.data),
                                t.abrupt("return", o.data)
                              );
                            case 13:
                              throw (
                                (console.error(o.message),
                                new Error(o.message || "Note creation failed"))
                              );
                            case 15:
                              t.next = 20;
                              break;
                            case 17:
                              (t.prev = 17),
                                (t.t0 = t.catch(0)),
                                console.error("Error:", t.t0);
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 17]],
                    );
                  }),
                )),
                function (t, e) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "getNotes",
              value:
                ((r = b(
                  v().mark(function t() {
                    var e, n;
                    return v().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("".concat(x, "/notes"), { method: "GET" })
                              );
                            case 3:
                              return (e = t.sent), (t.next = 6), e.json();
                            case 6:
                              if (((n = t.sent), !e.ok)) {
                                t.next = 13;
                                break;
                              }
                              return (
                                console.log(n.message),
                                console.log(n.data),
                                t.abrupt("return", n.data)
                              );
                            case 13:
                              throw (
                                (console.error(n.message),
                                new Error(n.message || "Failed to fetch notes"))
                              );
                            case 15:
                              t.next = 20;
                              break;
                            case 17:
                              (t.prev = 17),
                                (t.t0 = t.catch(0)),
                                console.error("Error:", t.t0);
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 17]],
                    );
                  }),
                )),
                function () {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "deleteNote",
              value:
                ((n = b(
                  v().mark(function t(e) {
                    var n, r;
                    return v().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch("".concat(x, "/notes/").concat(e), {
                                  method: "DELETE",
                                })
                              );
                            case 3:
                              return (n = t.sent), (t.next = 6), n.json();
                            case 6:
                              if (((r = t.sent), !n.ok)) {
                                t.next = 12;
                                break;
                              }
                              return (
                                console.log(r.message),
                                t.abrupt("return", r.message)
                              );
                            case 12:
                              throw (
                                (console.error(r.message),
                                new Error(r.message || "Failed to delete note"))
                              );
                            case 14:
                              t.next = 19;
                              break;
                            case 16:
                              (t.prev = 16),
                                (t.t0 = t.catch(0)),
                                console.error("Error:", t.t0);
                            case 19:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 16]],
                    );
                  }),
                )),
                function (t) {
                  return n.apply(this, arguments);
                }),
            },
          ]),
          e && g(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e, n, r, o;
      })();
      function E(t) {
        return (
          (E =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          E(t)
        );
      }
      function O() {
        O = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new C(r || []);
          return o(a, "_invoke", { value: k(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          _ = x && x(x(N([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = m.prototype = Object.create(w));
        function L(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == E(s) && r.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function k(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === d) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = P(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = d), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var l = f(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? d : h), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = d), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function P(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                P(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function T(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function R(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function N(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(E(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(j, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          L(S.prototype),
          l(S.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(s(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          L(j),
          l(j, u, "Generator"),
          l(j, a, function () {
            return this;
          }),
          l(j, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = N),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(R),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), R(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    R(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function j(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function L(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, C(r.key), r);
        }
      }
      function S(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (S = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (k()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && P(o, n.prototype), o;
              })(t, arguments, T(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              P(n, t)
            );
          }),
          S(t)
        );
      }
      function k() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (k = function () {
          return !!t;
        })();
      }
      function P(t, e) {
        return (
          (P = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          P(t, e)
        );
      }
      function T(t) {
        return (
          (T = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          T(t)
        );
      }
      function R(t, e, n) {
        return (
          (e = C(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function C(t) {
        var e = (function (t) {
          if ("object" != E(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != E(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == E(e) ? e : e + "";
      }
      var N = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            R(
              (t = (function (t, e, n) {
                return (
                  (e = T(e)),
                  (function (t, e) {
                    if (e && ("object" == E(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    k()
                      ? Reflect.construct(e, n || [], T(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            R(t, "_style", null),
            R(t, "_note", { id: null, title: null, body: null }),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && P(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "note",
              get: function () {
                return this._note;
              },
              set: function (t) {
                (this._note = t), this.render();
              },
            },
            {
              key: "_updateStyle",
              value: function () {
                this._style.textContent =
                  '\n      /* Host element styling */\n      :host {\n        font-family: "Arial", sans-serif;\n        display: block;\n        width: 100%;\n        max-width: 600px; /* Restrict the maximum width */\n        margin: 10px auto;\n        box-sizing: border-box;\n        padding: 10px;\n      }\n\n      /* Card Container */\n      .card {\n        display: flex;\n        flex-direction: column;\n        border-radius: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        padding: 16px;\n        background-color: #fff;\n        transition: transform 0.2s;\n        box-sizing: border-box;\n        margin-bottom: 10px; /* Spacing between cards */\n      }\n\n      /* Title Styling */\n      .note-info__title h3 {\n        font-size: 1.3rem;\n        font-weight: bold;\n        color: #333;\n        margin: 0;\n        text-align: center;\n        padding: 8px;\n      }\n\n      /* Body Styling */\n      .note-info__body p {\n        font-size: 1rem;\n        color: #555;\n        margin-top: 8px;\n        line-height: 1.5;\n        text-align: center;\n      }\n\n      .delete-note {\n          background-color: #ff4d4f;\n          color: white;\n          border: none;\n          padding: 10px 15px;\n          text-align: center;\n          font-size: 16px;\n          border-radius: 4px;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          width: 100%;\n          box-sizing: border-box;\n        }\n\n        .delete-note:hover {\n          background-color: #ff7875;\n        }\n\n        .delete-note:active {\n          transform: scale(0.95);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        }\n\n      /* Responsive adjustments */\n      @media (max-width: 600px) {\n        .card {\n          padding: 12px;\n        }\n\n        .note-info__title h3 {\n          font-size: 1.2rem;\n          padding: 6px;\n        }\n\n        .note-info__body p {\n          font-size: 0.95rem;\n        }\n      }\n\n      @media (max-width: 400px) {\n        .card {\n          padding: 10px;\n          margin-bottom: 8px;\n        }\n\n        .note-info__title h3 {\n          font-size: 1rem;\n        }\n\n        .note-info__body p {\n          font-size: 0.85rem;\n        }\n      }\n    ';
              },
            },
            {
              key: "_handleDelete",
              value:
                ((o = O().mark(function t() {
                  return O().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              _.deleteNote(this._note.id)
                            );
                          case 3:
                            alert("Catatan berhasil dihapus!"),
                              this.dispatchEvent(
                                new CustomEvent("note-deleted", {
                                  detail: { id: this._note.id },
                                  bubbles: !0,
                                  composed: !0,
                                }),
                              ),
                              (t.next = 10);
                            break;
                          case 7:
                            (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              console.error("Failed to delete note:", t.t0);
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 7]],
                  );
                })),
                (i = function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (n, r) {
                    var i = o.apply(t, e);
                    function a(t) {
                      j(i, n, r, a, c, "next", t);
                    }
                    function c(t) {
                      j(i, n, r, a, c, "throw", t);
                    }
                    a(void 0);
                  });
                }),
                function () {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "render",
              value: function () {
                var t = this;
                this._emptyContent(),
                  this._updateStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="card">\n        <div class="note-info">\n          <div class="note-info__title">\n            <h3>'
                      .concat(
                        this._note.title,
                        '</h3>\n          </div>\n          <div class="note-info__body">\n            <p>',
                      )
                      .concat(
                        this._note.body,
                        '</p>\n          </div>\n          <button class="delete-note">Delete</button>\n        </div>\n      </div>\n    ',
                      )),
                  this._shadowRoot
                    .querySelector(".delete-note")
                    .addEventListener("click", function () {
                      return t._handleDelete();
                    });
              },
            },
          ]),
          r && L(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o, i;
      })(S(HTMLElement));
      function F(t) {
        return (
          (F =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          F(t)
        );
      }
      function G(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, M(r.key), r);
        }
      }
      function M(t) {
        var e = (function (t) {
          if ("object" != F(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != F(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == F(e) ? e : e + "";
      }
      customElements.define("note-item", N);
      const A = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }),
          (e = [
            {
              key: "showElement",
              value: function (t) {
                (t.style.display = "block"), (t.hidden = !1);
              },
            },
            {
              key: "hideElement",
              value: function (t) {
                (t.style.display = "none"), (t.hidden = !0);
              },
            },
          ]),
          null && G(t.prototype, null),
          e && G(t, e),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
        var t, e;
      })();
      function z(t) {
        return (
          (z =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          z(t)
        );
      }
      function I(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, J(r.key), r);
        }
      }
      function q(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (q = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (H()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && D(o, n.prototype), o;
              })(t, arguments, B(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              D(n, t)
            );
          }),
          q(t)
        );
      }
      function H() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (H = function () {
          return !!t;
        })();
      }
      function D(t, e) {
        return (
          (D = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          D(t, e)
        );
      }
      function B(t) {
        return (
          (B = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          B(t)
        );
      }
      function Y(t, e, n) {
        return (
          (e = J(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function J(t) {
        var e = (function (t) {
          if ("object" != z(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != z(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == z(e) ? e : e + "";
      }
      var U = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            Y(
              (t = (function (t, e, n) {
                return (
                  (e = B(e)),
                  (function (t, e) {
                    if (e && ("object" == z(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    H()
                      ? Reflect.construct(e, n || [], B(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            Y(t, "_style", null),
            Y(t, "_column", 3),
            Y(t, "_gutter", 5),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            t.render(),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && D(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: "observedAttributes",
              get: function () {
                return ["column", "gutter"];
              },
            },
          ]),
          (r = [
            {
              key: "_updateStyle",
              value: function () {
                this._style.textContent =
                  "\n      :host {\n        display: block;\n      }\n      \n      .list {\n        display: grid;\n        grid-template-columns: "
                    .concat("1fr ".repeat(this.column), ";\n        gap: ")
                    .concat(
                      this.gutter,
                      "px;\n      }\n\n      @media (max-width: 600px) {\n        .list {\n          grid-template-columns: 1fr; \n        }\n      }\n\n      @media (min-width: 601px) and (max-width: 900px) {\n        .list {\n          grid-template-columns: ",
                    )
                    .concat(
                      this.column > 2 ? "1fr 1fr" : "1fr",
                      " \n        }\n      }\n    ",
                    );
              },
            },
            {
              key: "column",
              get: function () {
                return this._column;
              },
              set: function (t) {
                var e = Number(t);
                A.isValidInteger(e) && (this._column = t);
              },
            },
            {
              key: "gutter",
              get: function () {
                return this._gutter;
              },
              set: function (t) {
                var e = Number(t);
                A.isValidInteger(e) && (this._gutter = t);
              },
            },
            {
              key: "_emptyContent",
              value: function () {
                this._shadowRoot.innerHTML = "";
              },
            },
            {
              key: "render",
              value: function () {
                this._emptyContent(),
                  this._updateStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    ' \n      <div class="list">\n        <slot></slot>\n      </div>\n    ');
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (t, e, n) {
                switch (t) {
                  case "column":
                    this.column = n;
                    break;
                  case "gutter":
                    this.gutter = n;
                }
                this.render();
              },
            },
          ]) && I(n.prototype, r),
          o && I(n, o),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o;
      })(q(HTMLElement));
      function V(t) {
        return (
          (V =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          V(t)
        );
      }
      function K() {
        K = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new T(r || []);
          return o(a, "_invoke", { value: L(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          _ = x && x(x(R([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var E = (g.prototype = m.prototype = Object.create(w));
        function O(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == V(s) && r.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function L(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === d) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = S(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = d), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var l = f(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? d : h), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = d), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                S(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function R(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(V(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(E, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          O(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(s(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          O(E),
          l(E, u, "Generator"),
          l(E, a, function () {
            return this;
          }),
          l(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = R),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: R(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Q(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function W(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, nt(r.key), r);
        }
      }
      function X(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (X = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf("[native code]")
                  );
                } catch (e) {
                  return "function" == typeof t;
                }
              })(t)
            )
              return t;
            if ("function" != typeof t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (Z()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, e);
                var o = new (t.bind.apply(t, r))();
                return n && $(o, n.prototype), o;
              })(t, arguments, tt(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              $(n, t)
            );
          }),
          X(t)
        );
      }
      function Z() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          );
        } catch (t) {}
        return (Z = function () {
          return !!t;
        })();
      }
      function $(t, e) {
        return (
          ($ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          $(t, e)
        );
      }
      function tt(t) {
        return (
          (tt = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          tt(t)
        );
      }
      function et(t, e, n) {
        return (
          (e = nt(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function nt(t) {
        var e = (function (t) {
          if ("object" != V(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, "string");
            if ("object" != V(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == V(e) ? e : e + "";
      }
      customElements.define("note-list", U);
      var rt = (function (t) {
        function e() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            et(
              (t = (function (t, e, n) {
                return (
                  (e = tt(e)),
                  (function (t, e) {
                    if (e && ("object" == V(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(t);
                  })(
                    t,
                    Z()
                      ? Reflect.construct(e, n || [], tt(t).constructor)
                      : e.apply(t, n),
                  )
                );
              })(this, e)),
              "_shadowRoot",
              null,
            ),
            et(t, "_style", null),
            et(t, "isLoading", !1),
            (t._shadowRoot = t.attachShadow({ mode: "open" })),
            (t._style = document.createElement("style")),
            (t._style.textContent =
              '\n      :host {\n        display: block;\n        width: 100%;\n        max-width: 100%; \n        margin: 0 auto;\n        font-family: "Arial", sans-serif;\n      }\n\n      .container {\n        width: 100%;\n        padding: 20px;\n        background-color: #fff;\n        border-radius: 10px; \n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        box-sizing: border-box;\n      }\n\n      h2 {\n        font-size: 24px;\n        margin-bottom: 20px;\n        text-align: center;\n        color: #333;\n      }\n\n      form {\n        display: flex;\n        flex-direction: column;\n        width: 100%; \n      }\n\n      form div {\n        margin-bottom: 15px;\n      }\n\n      label {\n        font-size: 16px;\n        color: #333;\n        margin-bottom: 5px;\n        display: block;\n      }\n\n      input[type="text"],\n      textarea {\n        width: 100%;\n        padding: 10px;\n        font-size: 16px;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        background-color: #f9f9f9;\n        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n        box-sizing: border-box;\n      }\n\n      .error-message {\n        color: red;\n        font-size: 14px;\n        margin-top: 5px;\n      }\n\n      textarea {\n        resize: vertical;\n        height: 120px;\n      }\n\n      .btnsubmit {\n        background-color: #6495ed;\n        color: white;\n        border: none;\n        padding: 10px 15px;\n        text-align: center;\n        font-size: 16px;\n        border-radius: 4px;\n        cursor: pointer;\n        transition: background-color 0.3s ease;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .btnsubmit:hover {\n        background-color: #4480f0;\n      }\n\n    '),
            t._shadowRoot.appendChild(t._style),
            t
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && $(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: "connectedCallback",
              value: function () {
                var t = this;
                this.render(),
                  this._shadowRoot
                    .querySelector("#notesForm")
                    .addEventListener("submit", function (e) {
                      return t._handleSubmit(e);
                    }),
                  this._shadowRoot
                    .querySelector("#title")
                    .addEventListener("input", function () {
                      return t.validateTitle();
                    });
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                var t = this;
                this._shadowRoot
                  .querySelector("#notesForm")
                  .removeEventListener("submit", function (e) {
                    return t._handleSubmit(e);
                  });
              },
            },
            {
              key: "validateTitle",
              value: function () {
                var t = this._shadowRoot.querySelector("#title").value,
                  e = this._shadowRoot.querySelector(".error-message");
                return t.length < 5
                  ? ((e.textContent =
                      "Judul harus memiliki minimal 5 karakter."),
                    !1)
                  : ((e.textContent = ""), !0);
              },
            },
            {
              key: "_handleSubmit",
              value:
                ((o = K().mark(function t(e) {
                  var n, r, o;
                  return K().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((e.preventDefault(), this.validateTitle())) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (n =
                                this._shadowRoot.querySelector("#title").value),
                              (r =
                                this._shadowRoot.querySelector(
                                  "#content",
                                ).value),
                              (o =
                                this._shadowRoot.querySelector(".btnsubmit")),
                              (this.isLoading = !0),
                              (o.textContent = "Loading..."),
                              o.classList.add("loading"),
                              (t.prev = 9),
                              (t.next = 12),
                              _.createNote(n, r)
                            );
                          case 12:
                            t.sent &&
                              (this.dispatchEvent(
                                new CustomEvent("note-added", {
                                  detail: { title: n, content: r },
                                  bubbles: !0,
                                  composed: !0,
                                }),
                              ),
                              alert("Catatan berhasil ditambahkan!"),
                              (this._shadowRoot.querySelector("#title").value =
                                ""),
                              (this._shadowRoot.querySelector(
                                "#content",
                              ).value = "")),
                              (t.next = 20);
                            break;
                          case 16:
                            (t.prev = 16),
                              (t.t0 = t.catch(9)),
                              console.error("Failed to add note:", t.t0),
                              alert(
                                "Gagal menambahkan catatan. Silakan coba lagi nanti.",
                              );
                          case 20:
                            return (
                              (t.prev = 20),
                              (this.isLoading = !1),
                              (o.textContent = "Selesai"),
                              t.finish(20)
                            );
                          case 24:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[9, 16, 20, 24]],
                  );
                })),
                (i = function () {
                  var t = this,
                    e = arguments;
                  return new Promise(function (n, r) {
                    var i = o.apply(t, e);
                    function a(t) {
                      Q(i, n, r, a, c, "next", t);
                    }
                    function c(t) {
                      Q(i, n, r, a, c, "throw", t);
                    }
                    a(void 0);
                  });
                }),
                function (t) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "render",
              value: function () {
                this._shadowRoot.innerHTML +=
                  '\n      <div class="container">\n        <section>\n          <h2>Tambah Notes</h2>\n          <form id="notesForm">\n            <div>\n              <label for="title">Judul</label>\n              <input type="text" id="title" name="title" required />\n              <div class="error-message"></div>\n            </div>\n            <div>\n              <label for="content">Isi</label>\n              <textarea id="content" name="content" required></textarea>\n            </div>\n            <button type="submit" class="btnsubmit">Selesai</button>\n          </form>\n        </section>\n      </div>\n    ';
              },
            },
          ]),
          r && W(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, r, o, i;
      })(X(HTMLElement));
      function ot(t) {
        return (
          (ot =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          ot(t)
        );
      }
      function it() {
        it = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function s(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new T(r || []);
          return o(a, "_invoke", { value: L(t, n, c) }), a;
        }
        function f(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var p = "suspendedStart",
          h = "suspendedYield",
          y = "executing",
          d = "completed",
          v = {};
        function m() {}
        function b() {}
        function g() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          _ = x && x(x(R([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var E = (g.prototype = m.prototype = Object.create(w));
        function O(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function n(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == ot(s) && r.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    },
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function L(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw Error("Generator is already running");
            if (o === d) {
              if ("throw" === i) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var c = r.delegate;
              if (c) {
                var u = S(c, r);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = d), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var l = f(e, n, r);
              if ("normal" === l.type) {
                if (((o = r.done ? d : h), l.arg === v)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((o = d), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function S(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                S(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              v
            );
          var i = f(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              v);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function R(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(ot(e) + " is not iterable");
        }
        return (
          (b.prototype = g),
          o(E, "constructor", { value: g, configurable: !0 }),
          o(g, "constructor", { value: b, configurable: !0 }),
          (b.displayName = l(g, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === b || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(E)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          O(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(s(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          O(E),
          l(E, u, "Generator"),
          l(E, a, function () {
            return this;
          }),
          l(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = R),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(P),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, "catchLoc"),
                    l = r.call(a, "finallyLoc");
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: R(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function at(t, e, n, r, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function ct(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              at(i, r, o, a, c, "next", t);
            }
            function c(t) {
              at(i, r, o, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
      customElements.define("add-notes", rt);
      document.addEventListener("DOMContentLoaded", function () {
        var t, e, n, r;
        (t = document
          .querySelector("#noteListContainer")
          .querySelector("note-list")
          .shadowRoot.querySelector(".list")),
          (e = document.querySelector("add-notes")),
          (n = (function () {
            var e = ct(
              it().mark(function e() {
                var n;
                return it().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (t.innerHTML = ""), (e.next = 3), _.getNotes();
                      case 3:
                        (n = e.sent), r(n);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (r = function (e) {
            e.forEach(function (e) {
              var r = document.createElement("note-item");
              (r.note = e),
                r.addEventListener(
                  "note-deleted",
                  ct(
                    it().mark(function t() {
                      return it().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), n();
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    }),
                  ),
                ),
                t.appendChild(r);
            });
          }),
          e.addEventListener(
            "note-added",
            (function () {
              var t = ct(
                it().mark(function t(e) {
                  var r, o, i;
                  return it().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = e.detail),
                            (o = r.title),
                            (i = r.content),
                            (t.next = 3),
                            _.createNote(o, i)
                          );
                        case 3:
                          n();
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          ),
          n();
      });
    })();
})();
