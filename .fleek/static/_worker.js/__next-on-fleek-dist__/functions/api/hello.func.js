// <stdin>
import { __getNamedExports as __getNamedExports_0 } from "../../../__next-on-fleek-dist__/webpack/b12263b14085e367839627720eb766f5.js";
import { __getNamedExports as __getNamedExports_1 } from "../../../__next-on-fleek-dist__/webpack/79eddb9279962b952beace5d53ea27b1.js";
var proxy = globalThis.__nextOnPagesRoutesIsolation.getProxyFor("/api/hello");
var __exportsOf__getNamedExports_0 = __getNamedExports_0(proxy, proxy, proxy);
var __chunk_26195 = __exportsOf__getNamedExports_0["__chunk_26195"];
var __chunk_2067 = __exportsOf__getNamedExports_0["__chunk_2067"];
var __exportsOf__getNamedExports_1 = __getNamedExports_1(proxy, proxy, proxy);
var __chunk_8074 = __exportsOf__getNamedExports_1["__chunk_8074"];
var __chunk_66349 = __exportsOf__getNamedExports_1["__chunk_66349"];
var __chunk_28844 = __exportsOf__getNamedExports_1["__chunk_28844"];
var __chunk_84525 = __exportsOf__getNamedExports_1["__chunk_84525"];
var __chunk_23652 = __exportsOf__getNamedExports_1["__chunk_23652"];
var __chunk_81483 = __exportsOf__getNamedExports_1["__chunk_81483"];
var __chunk_18777 = __exportsOf__getNamedExports_1["__chunk_18777"];
var __chunk_63946 = __exportsOf__getNamedExports_1["__chunk_63946"];
var __chunk_33078 = __exportsOf__getNamedExports_1["__chunk_33078"];
var __chunk_48084 = __exportsOf__getNamedExports_1["__chunk_48084"];
var __chunk_77442 = __exportsOf__getNamedExports_1["__chunk_77442"];
var __chunk_36000 = __exportsOf__getNamedExports_1["__chunk_36000"];
var __chunk_93277 = __exportsOf__getNamedExports_1["__chunk_93277"];
var __chunk_19278 = __exportsOf__getNamedExports_1["__chunk_19278"];
var __chunk_81565 = __exportsOf__getNamedExports_1["__chunk_81565"];
var __chunk_14006 = __exportsOf__getNamedExports_1["__chunk_14006"];
var __chunk_43334 = __exportsOf__getNamedExports_1["__chunk_43334"];
var __chunk_22642 = __exportsOf__getNamedExports_1["__chunk_22642"];
var __chunk_92486 = __exportsOf__getNamedExports_1["__chunk_92486"];
var __chunk_50675 = __exportsOf__getNamedExports_1["__chunk_50675"];
var stdin_default = ((self, globalThis2, global) => {
  globalThis2._ENTRIES = {};
  ;
  (() => {
    "use strict";
    var e = {}, r = {};
    function t(o) {
      var n = r[o];
      if (void 0 !== n)
        return n.exports;
      var a = r[o] = { id: o, loaded: false, exports: {} }, l = true;
      try {
        e[o].call(a.exports, a, a.exports, t), l = false;
      } finally {
        l && delete r[o];
      }
      return a.loaded = true, a.exports;
    }
    t.m = e, t.amdO = {}, (() => {
      var e2 = [];
      t.O = (r2, o, n, a) => {
        if (o) {
          a = a || 0;
          for (var l = e2.length; l > 0 && e2[l - 1][2] > a; l--)
            e2[l] = e2[l - 1];
          e2[l] = [o, n, a];
          return;
        }
        for (var i = 1 / 0, l = 0; l < e2.length; l++) {
          for (var [o, n, a] = e2[l], f = true, u = 0; u < o.length; u++)
            i >= a && Object.keys(t.O).every((e3) => t.O[e3](o[u])) ? o.splice(u--, 1) : (f = false, a < i && (i = a));
          if (f) {
            e2.splice(l--, 1);
            var c = n();
            void 0 !== c && (r2 = c);
          }
        }
        return r2;
      };
    })(), t.n = (e2) => {
      var r2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return t.d(r2, { a: r2 }), r2;
    }, (() => {
      var e2, r2 = Object.getPrototypeOf ? (e3) => Object.getPrototypeOf(e3) : (e3) => e3.__proto__;
      t.t = function(o, n) {
        if (1 & n && (o = this(o)), 8 & n || "object" == typeof o && o && (4 & n && o.__esModule || 16 & n && "function" == typeof o.then))
          return o;
        var a = /* @__PURE__ */ Object.create(null);
        t.r(a);
        var l = {};
        e2 = e2 || [null, r2({}), r2([]), r2(r2)];
        for (var i = 2 & n && o; "object" == typeof i && !~e2.indexOf(i); i = r2(i))
          Object.getOwnPropertyNames(i).forEach((e3) => l[e3] = () => o[e3]);
        return l.default = () => o, t.d(a, l), a;
      };
    })(), t.d = (e2, r2) => {
      for (var o in r2)
        t.o(r2, o) && !t.o(e2, o) && Object.defineProperty(e2, o, { enumerable: true, get: r2[o] });
    }, t.g = function() {
      if ("object" == typeof globalThis2)
        return globalThis2;
      try {
        return this || Function("return this")();
      } catch (e2) {
        if ("object" == typeof window)
          return window;
      }
    }(), t.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2), t.r = (e2) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    }, t.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2), (() => {
      var e2 = { 993: 0 };
      t.O.j = (r3) => 0 === e2[r3];
      var r2 = (r3, o2) => {
        var n, a, [l, i, f] = o2, u = 0;
        if (l.some((r4) => 0 !== e2[r4])) {
          for (n in i)
            t.o(i, n) && (t.m[n] = i[n]);
          if (f)
            var c = f(t);
        }
        for (r3 && r3(o2); u < l.length; u++)
          a = l[u], t.o(e2, a) && e2[a] && e2[a][0](), e2[a] = 0;
        return t.O(c);
      }, o = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
      o.forEach(r2.bind(null, 0)), o.push = r2.bind(null, o.push.bind(o));
    })(), t.nc = void 0;
  })();
  ;
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], { 50675: __chunk_50675, 92486: __chunk_92486, 22642: __chunk_22642, 43334: __chunk_43334, 14006: __chunk_14006, 81565: __chunk_81565, 19278: __chunk_19278, 93277: __chunk_93277, 36e3: __chunk_36000, 77442: __chunk_77442, 48084: __chunk_48084, 33078: __chunk_33078, 63946: __chunk_63946, 18777: __chunk_18777, 81483: __chunk_81483, 23652: __chunk_23652, 84525: __chunk_84525, 28844: __chunk_28844, 66349: __chunk_66349, 8074: __chunk_8074 }]);
  ;
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[453], { 2067: __chunk_2067, 26195: __chunk_26195, 5753: (e, r, a) => {
    "use strict";
    a.r(r), a.d(r, { default: () => u }), a(33078);
    var n = a(48084), s = a(93277), t = a(19278);
    function o(e2, r2) {
      r2.status(200).json({ name: "John Doe" });
    }
    function u(e2) {
      return (0, n.C)({ ...e2, IncrementalCache: s.k, page: "/api/hello", handler: (0, t.fd)("/api/hello", o) });
    }
  } }, (e) => {
    var r = (r2) => e(e.s = r2);
    e.O(0, [888], () => r(5753));
    var a = e.O();
    (globalThis2._ENTRIES = "undefined" == typeof globalThis2._ENTRIES ? {} : globalThis2._ENTRIES)["middleware_pages/api/hello"] = a;
  }]);
  return function() {
    const module = { exports: {}, loaded: false };
    const fn = function(module2, exports) {
      var d = Object.defineProperty;
      var m = (e) => d(e, "__esModule", { value: true });
      var y = (e, r) => {
        m(e);
        for (var t in r)
          d(e, t, { get: r[t], enumerable: true });
      };
      y(exports, { default: () => x });
      function h(e) {
        let r = {};
        return e && e.forEach((t, i) => {
          r[i] = t, i.toLowerCase() === "set-cookie" && (r[i] = C(t));
        }), r;
      }
      function C(e) {
        let r = [], t = 0, i, a, p, n, s;
        function c() {
          for (; t < e.length && /\s/.test(e.charAt(t)); )
            t += 1;
          return t < e.length;
        }
        function o() {
          return a = e.charAt(t), a !== "=" && a !== ";" && a !== ",";
        }
        for (; t < e.length; ) {
          for (i = t, s = false; c(); )
            if (a = e.charAt(t), a === ",") {
              for (p = t, t += 1, c(), n = t; t < e.length && o(); )
                t += 1;
              t < e.length && e.charAt(t) === "=" ? (s = true, t = n, r.push(e.substring(i, p)), i = t) : t = p + 1;
            } else
              t += 1;
          (!s || t >= e.length) && r.push(e.substring(i, e.length));
        }
        return r;
      }
      function x(e) {
        let r = e.staticRoutes.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })), t = e.dynamicRoutes?.map((i) => ({ regexp: new RegExp(i.namedRegex), page: i.page })) || [];
        return async function(a, p) {
          let n = new URL(a.url).pathname, s = {};
          if (e.nextConfig?.basePath && n.startsWith(e.nextConfig.basePath) && (n = n.replace(e.nextConfig.basePath, "") || "/"), e.nextConfig?.i18n)
            for (let o of e.nextConfig.i18n.locales) {
              let g = new RegExp(`^/${o}($|/)`, "i");
              if (n.match(g)) {
                n = n.replace(g, "/") || "/";
                break;
              }
            }
          for (let o of r)
            if (o.regexp.exec(n)) {
              s.name = o.page;
              break;
            }
          if (!s.name) {
            let o = R(n);
            for (let g of t || []) {
              if (o && !R(g.page))
                continue;
              let f = g.regexp.exec(n);
              if (f) {
                s = { name: g.page, params: f.groups };
                break;
              }
            }
          }
          let c = await globalThis2._ENTRIES[`middleware_${e.name}`].default.call({}, { request: { url: a.url, method: a.method, headers: h(a.headers), ip: u(a.headers, l.Ip), geo: { city: u(a.headers, l.City, true), country: u(a.headers, l.Country, true), latitude: u(a.headers, l.Latitude), longitude: u(a.headers, l.Longitude), region: u(a.headers, l.Region, true) }, nextConfig: e.nextConfig, page: s, body: a.body } });
          return p.waitUntil(c.waitUntil), c.response;
        };
      }
      function u(e, r, t = false) {
        let i = e.get(r) || void 0;
        return t && i ? decodeURIComponent(i) : i;
      }
      function R(e) {
        return e === "/api" || e.startsWith("/api/");
      }
      var l;
      (function(n) {
        n.City = "x-vercel-ip-city", n.Country = "x-vercel-ip-country", n.Ip = "x-real-ip", n.Latitude = "x-vercel-ip-latitude", n.Longitude = "x-vercel-ip-longitude", n.Region = "x-vercel-ip-country-region";
      })(l || (l = {}));
    };
    fn(module, module.exports);
    return module.exports;
  }.call({}).default(
    { "name": "pages/api/hello", "staticRoutes": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }], "dynamicRoutes": [{ "page": "/api/redirect/[shortCode]", "regex": "^/api/redirect/([^/]+?)(?:/)?$", "routeKeys": { "nxtPshortCode": "nxtPshortCode" }, "namedRegex": "^/api/redirect/(?<nxtPshortCode>[^/]+?)(?:/)?$" }, { "page": "/[shortCode]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPshortCode": "nxtPshortCode" }, "namedRegex": "^/(?<nxtPshortCode>[^/]+?)(?:/)?$" }], "nextConfig": { "basePath": "" } }
  );
})(proxy, proxy, proxy);
export {
  stdin_default as default
};
