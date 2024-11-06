!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.UcodeSdk = e())
    : (t.UcodeSdk = e());
})(this, () =>
  (() => {
    "use strict";
    var t = {
        d: (e, o) => {
          for (var r in o)
            t.o(o, r) &&
              !t.o(e, r) &&
              Object.defineProperty(e, r, {enumerable: !0, get: o[r]});
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}),
            Object.defineProperty(t, "__esModule", {value: !0});
        },
      },
      e = {};
    t.r(e), t.d(e, {default: () => s});
    class o {
      constructor(t) {
        this.config = t;
      }
      async login(t, e = {}) {
        const o = `${this.config.baseURL}/v2/login`;
        return (
          t.project_id || (t.project_id = this.config.projectId),
          this.request(o, "POST", t, e)
        );
      }
      async request(t, e, o, r = {}) {
        const s = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.config.token || ""}`,
          },
          n = await fetch(t, {
            method: e,
            headers: {...s, ...r},
            body: JSON.stringify(o),
          });
        return n.ok
          ? {status: "done", data: await n.json()}
          : {
              status: "error",
              data: {
                description: await n.json(),
                message: `Error ${e} ${t}`,
                error: n.statusText,
              },
            };
      }
    }
    class r {
      constructor(t) {
        this.config = t;
      }
    }
    const s = class {
      static Auth = o;
      static Items = r;
      constructor(t) {
        this.config = t;
      }
    };
    return e;
  })()
);
