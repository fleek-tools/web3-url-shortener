// <stdin>
import { __getNamedExports as __getNamedExports_0 } from "../../../__next-on-fleek-dist__/webpack/b12263b14085e367839627720eb766f5.js";
var proxy = globalThis.__nextOnPagesRoutesIsolation.getProxyFor("/api/hello");
var __exportsOf__getNamedExports_0 = __getNamedExports_0(proxy, proxy, proxy);
var __chunk_26195 = __exportsOf__getNamedExports_0["__chunk_26195"];
var __chunk_2067 = __exportsOf__getNamedExports_0["__chunk_2067"];
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
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[453], { 2067: __chunk_2067, 26195: __chunk_26195, 78195: (e, t, r) => {
    "use strict";
    let n, a, i, o;
    async function s() {
      let e10 = "globalThis._ENTRIES" in globalThis2 && globalThis2._ENTRIES.middleware_instrumentation && (await globalThis2._ENTRIES.middleware_instrumentation).register;
      if (e10)
        try {
          await e10();
        } catch (e11) {
          throw e11.message = `An error occurred while loading instrumentation hook: ${e11.message}`, e11;
        }
    }
    r.r(t), r.d(t, { default: () => te });
    let l = null;
    function u() {
      return l || (l = s()), l;
    }
    function c(e10) {
      return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
    }
    process !== r.g.process && (process.env = r.g.process.env, r.g.process = process), Object.defineProperty(globalThis2, "__import_unsupported", { value: function(e10) {
      let t2 = new Proxy(function() {
      }, { get(t3, r2) {
        if ("then" === r2)
          return {};
        throw Error(c(e10));
      }, construct() {
        throw Error(c(e10));
      }, apply(r2, n2, a2) {
        if ("function" == typeof a2[0])
          return a2[0](t2);
        throw Error(c(e10));
      } });
      return new Proxy({}, { get: () => t2 });
    }, enumerable: false, configurable: true }), u();
    class d extends Error {
      constructor({ page: e10 }) {
        super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    }
    class h extends Error {
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    }
    class p extends Error {
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    }
    function g(e10) {
      var t2, r2, n2, a2, i2, o2 = [], s2 = 0;
      function l2() {
        for (; s2 < e10.length && /\s/.test(e10.charAt(s2)); )
          s2 += 1;
        return s2 < e10.length;
      }
      for (; s2 < e10.length; ) {
        for (t2 = s2, i2 = false; l2(); )
          if ("," === (r2 = e10.charAt(s2))) {
            for (n2 = s2, s2 += 1, l2(), a2 = s2; s2 < e10.length && "=" !== (r2 = e10.charAt(s2)) && ";" !== r2 && "," !== r2; )
              s2 += 1;
            s2 < e10.length && "=" === e10.charAt(s2) ? (i2 = true, s2 = a2, o2.push(e10.substring(t2, n2)), t2 = s2) : s2 = n2 + 1;
          } else
            s2 += 1;
        (!i2 || s2 >= e10.length) && o2.push(e10.substring(t2, e10.length));
      }
      return o2;
    }
    function f(e10) {
      let t2 = {}, r2 = [];
      if (e10)
        for (let [n2, a2] of e10.entries())
          "set-cookie" === n2.toLowerCase() ? (r2.push(...g(a2)), t2[n2] = 1 === r2.length ? r2[0] : r2) : t2[n2] = a2;
      return t2;
    }
    function v(e10) {
      try {
        return String(new URL(String(e10)));
      } catch (t2) {
        throw Error(`URL is malformed "${String(e10)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t2 });
      }
    }
    let m = Symbol("response"), y = Symbol("passThrough"), _ = Symbol("waitUntil");
    class b {
      constructor(e10) {
        this[_] = [], this[y] = false;
      }
      respondWith(e10) {
        this[m] || (this[m] = Promise.resolve(e10));
      }
      passThroughOnException() {
        this[y] = true;
      }
      waitUntil(e10) {
        this[_].push(e10);
      }
    }
    class w extends b {
      constructor(e10) {
        super(e10.request), this.sourcePage = e10.page;
      }
      get request() {
        throw new d({ page: this.sourcePage });
      }
      respondWith() {
        throw new d({ page: this.sourcePage });
      }
    }
    function S(e10) {
      return e10.replace(/\/$/, "") || "/";
    }
    function x(e10) {
      let t2 = e10.indexOf("#"), r2 = e10.indexOf("?"), n2 = r2 > -1 && (t2 < 0 || r2 < t2);
      return n2 || t2 > -1 ? { pathname: e10.substring(0, n2 ? r2 : t2), query: n2 ? e10.substring(r2, t2 > -1 ? t2 : void 0) : "", hash: t2 > -1 ? e10.slice(t2) : "" } : { pathname: e10, query: "", hash: "" };
    }
    function E(e10, t2) {
      if (!e10.startsWith("/") || !t2)
        return e10;
      let { pathname: r2, query: n2, hash: a2 } = x(e10);
      return "" + t2 + r2 + n2 + a2;
    }
    function C(e10, t2) {
      if (!e10.startsWith("/") || !t2)
        return e10;
      let { pathname: r2, query: n2, hash: a2 } = x(e10);
      return "" + r2 + t2 + n2 + a2;
    }
    function P(e10, t2) {
      if ("string" != typeof e10)
        return false;
      let { pathname: r2 } = x(e10);
      return r2 === t2 || r2.startsWith(t2 + "/");
    }
    function T(e10, t2) {
      let r2;
      let n2 = e10.split("/");
      return (t2 || []).some((t3) => !!n2[1] && n2[1].toLowerCase() === t3.toLowerCase() && (r2 = t3, n2.splice(1, 1), e10 = n2.join("/") || "/", true)), { pathname: e10, detectedLocale: r2 };
    }
    let O = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
    function N(e10, t2) {
      return new URL(String(e10).replace(O, "localhost"), t2 && String(t2).replace(O, "localhost"));
    }
    let R = Symbol("NextURLInternal");
    class A {
      constructor(e10, t2, r2) {
        let n2, a2;
        "object" == typeof t2 && "pathname" in t2 || "string" == typeof t2 ? (n2 = t2, a2 = r2 || {}) : a2 = r2 || t2 || {}, this[R] = { url: N(e10, n2 ?? a2.base), options: a2, basePath: "" }, this.analyze();
      }
      analyze() {
        var e10, t2, r2, n2, a2;
        let i2 = function(e11, t3) {
          var r3, n3;
          let { basePath: a3, i18n: i3, trailingSlash: o3 } = null != (r3 = t3.nextConfig) ? r3 : {}, s3 = { pathname: e11, trailingSlash: "/" !== e11 ? e11.endsWith("/") : o3 };
          a3 && P(s3.pathname, a3) && (s3.pathname = function(e12, t4) {
            if (!P(e12, t4))
              return e12;
            let r4 = e12.slice(t4.length);
            return r4.startsWith("/") ? r4 : "/" + r4;
          }(s3.pathname, a3), s3.basePath = a3);
          let l2 = s3.pathname;
          if (s3.pathname.startsWith("/_next/data/") && s3.pathname.endsWith(".json")) {
            let e12 = s3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), r4 = e12[0];
            s3.buildId = r4, l2 = "index" !== e12[1] ? "/" + e12.slice(1).join("/") : "/", true === t3.parseData && (s3.pathname = l2);
          }
          if (i3) {
            let e12 = t3.i18nProvider ? t3.i18nProvider.analyze(s3.pathname) : T(s3.pathname, i3.locales);
            s3.locale = e12.detectedLocale, s3.pathname = null != (n3 = e12.pathname) ? n3 : s3.pathname, !e12.detectedLocale && s3.buildId && (e12 = t3.i18nProvider ? t3.i18nProvider.analyze(l2) : T(l2, i3.locales)).detectedLocale && (s3.locale = e12.detectedLocale);
          }
          return s3;
        }(this[R].url.pathname, { nextConfig: this[R].options.nextConfig, parseData: true, i18nProvider: this[R].options.i18nProvider }), o2 = function(e11, t3) {
          let r3;
          if ((null == t3 ? void 0 : t3.host) && !Array.isArray(t3.host))
            r3 = t3.host.toString().split(":", 1)[0];
          else {
            if (!e11.hostname)
              return;
            r3 = e11.hostname;
          }
          return r3.toLowerCase();
        }(this[R].url, this[R].options.headers);
        this[R].domainLocale = this[R].options.i18nProvider ? this[R].options.i18nProvider.detectDomainLocale(o2) : function(e11, t3, r3) {
          if (e11)
            for (let i3 of (r3 && (r3 = r3.toLowerCase()), e11)) {
              var n3, a3;
              if (t3 === (null == (n3 = i3.domain) ? void 0 : n3.split(":", 1)[0].toLowerCase()) || r3 === i3.defaultLocale.toLowerCase() || (null == (a3 = i3.locales) ? void 0 : a3.some((e12) => e12.toLowerCase() === r3)))
                return i3;
            }
        }(null == (t2 = this[R].options.nextConfig) ? void 0 : null == (e10 = t2.i18n) ? void 0 : e10.domains, o2);
        let s2 = (null == (r2 = this[R].domainLocale) ? void 0 : r2.defaultLocale) || (null == (a2 = this[R].options.nextConfig) ? void 0 : null == (n2 = a2.i18n) ? void 0 : n2.defaultLocale);
        this[R].url.pathname = i2.pathname, this[R].defaultLocale = s2, this[R].basePath = i2.basePath ?? "", this[R].buildId = i2.buildId, this[R].locale = i2.locale ?? s2, this[R].trailingSlash = i2.trailingSlash;
      }
      formatPathname() {
        var e10;
        let t2;
        return t2 = function(e11, t3, r2, n2) {
          if (!t3 || t3 === r2)
            return e11;
          let a2 = e11.toLowerCase();
          return !n2 && (P(a2, "/api") || P(a2, "/" + t3.toLowerCase())) ? e11 : E(e11, "/" + t3);
        }((e10 = { basePath: this[R].basePath, buildId: this[R].buildId, defaultLocale: this[R].options.forceLocale ? void 0 : this[R].defaultLocale, locale: this[R].locale, pathname: this[R].url.pathname, trailingSlash: this[R].trailingSlash }).pathname, e10.locale, e10.buildId ? void 0 : e10.defaultLocale, e10.ignorePrefix), (e10.buildId || !e10.trailingSlash) && (t2 = S(t2)), e10.buildId && (t2 = C(E(t2, "/_next/data/" + e10.buildId), "/" === e10.pathname ? "index.json" : ".json")), t2 = E(t2, e10.basePath), !e10.buildId && e10.trailingSlash ? t2.endsWith("/") ? t2 : C(t2, "/") : S(t2);
      }
      formatSearch() {
        return this[R].url.search;
      }
      get buildId() {
        return this[R].buildId;
      }
      set buildId(e10) {
        this[R].buildId = e10;
      }
      get locale() {
        return this[R].locale ?? "";
      }
      set locale(e10) {
        var t2, r2;
        if (!this[R].locale || !(null == (r2 = this[R].options.nextConfig) ? void 0 : null == (t2 = r2.i18n) ? void 0 : t2.locales.includes(e10)))
          throw TypeError(`The NextURL configuration includes no locale "${e10}"`);
        this[R].locale = e10;
      }
      get defaultLocale() {
        return this[R].defaultLocale;
      }
      get domainLocale() {
        return this[R].domainLocale;
      }
      get searchParams() {
        return this[R].url.searchParams;
      }
      get host() {
        return this[R].url.host;
      }
      set host(e10) {
        this[R].url.host = e10;
      }
      get hostname() {
        return this[R].url.hostname;
      }
      set hostname(e10) {
        this[R].url.hostname = e10;
      }
      get port() {
        return this[R].url.port;
      }
      set port(e10) {
        this[R].url.port = e10;
      }
      get protocol() {
        return this[R].url.protocol;
      }
      set protocol(e10) {
        this[R].url.protocol = e10;
      }
      get href() {
        let e10 = this.formatPathname(), t2 = this.formatSearch();
        return `${this.protocol}//${this.host}${e10}${t2}${this.hash}`;
      }
      set href(e10) {
        this[R].url = N(e10), this.analyze();
      }
      get origin() {
        return this[R].url.origin;
      }
      get pathname() {
        return this[R].url.pathname;
      }
      set pathname(e10) {
        this[R].url.pathname = e10;
      }
      get hash() {
        return this[R].url.hash;
      }
      set hash(e10) {
        this[R].url.hash = e10;
      }
      get search() {
        return this[R].url.search;
      }
      set search(e10) {
        this[R].url.search = e10;
      }
      get password() {
        return this[R].url.password;
      }
      set password(e10) {
        this[R].url.password = e10;
      }
      get username() {
        return this[R].url.username;
      }
      set username(e10) {
        this[R].url.username = e10;
      }
      get basePath() {
        return this[R].basePath;
      }
      set basePath(e10) {
        this[R].basePath = e10.startsWith("/") ? e10 : `/${e10}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
      }
      clone() {
        return new A(String(this), this[R].options);
      }
    }
    var M, I, D, L, k, j, H, $, B, U, V, q, F = r(50675);
    let G = Symbol("internal request");
    class X extends Request {
      constructor(e10, t2 = {}) {
        let r2 = "string" != typeof e10 && "url" in e10 ? e10.url : String(e10);
        v(r2), e10 instanceof Request ? super(e10, t2) : super(r2, t2);
        let n2 = new A(r2, { headers: f(this.headers), nextConfig: t2.nextConfig });
        this[G] = { cookies: new F.RequestCookies(this.headers), geo: t2.geo || {}, ip: t2.ip, nextUrl: n2, url: n2.toString() };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return { cookies: this.cookies, geo: this.geo, ip: this.ip, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
      }
      get cookies() {
        return this[G].cookies;
      }
      get geo() {
        return this[G].geo;
      }
      get ip() {
        return this[G].ip;
      }
      get nextUrl() {
        return this[G].nextUrl;
      }
      get page() {
        throw new h();
      }
      get ua() {
        throw new p();
      }
      get url() {
        return this[G].url;
      }
    }
    class K {
      static get(e10, t2, r2) {
        let n2 = Reflect.get(e10, t2, r2);
        return "function" == typeof n2 ? n2.bind(e10) : n2;
      }
      static set(e10, t2, r2, n2) {
        return Reflect.set(e10, t2, r2, n2);
      }
      static has(e10, t2) {
        return Reflect.has(e10, t2);
      }
      static deleteProperty(e10, t2) {
        return Reflect.deleteProperty(e10, t2);
      }
    }
    let W = Symbol("internal response"), z = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    function J(e10, t2) {
      var r2;
      if (null == e10 ? void 0 : null == (r2 = e10.request) ? void 0 : r2.headers) {
        if (!(e10.request.headers instanceof Headers))
          throw Error("request.headers must be an instance of Headers");
        let r3 = [];
        for (let [n2, a2] of e10.request.headers)
          t2.set("x-middleware-request-" + n2, a2), r3.push(n2);
        t2.set("x-middleware-override-headers", r3.join(","));
      }
    }
    class Y extends Response {
      constructor(e10, t2 = {}) {
        super(e10, t2);
        let r2 = this.headers, n2 = new Proxy(new F.ResponseCookies(r2), { get(e11, n3, a2) {
          switch (n3) {
            case "delete":
            case "set":
              return (...a3) => {
                let i2 = Reflect.apply(e11[n3], e11, a3), o2 = new Headers(r2);
                return i2 instanceof F.ResponseCookies && r2.set("x-middleware-set-cookie", i2.getAll().map((e12) => (0, F.stringifyCookie)(e12)).join(",")), J(t2, o2), i2;
              };
            default:
              return K.get(e11, n3, a2);
          }
        } });
        this[W] = { cookies: n2, url: t2.url ? new A(t2.url, { headers: f(r2), nextConfig: t2.nextConfig }) : void 0 };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
      }
      get cookies() {
        return this[W].cookies;
      }
      static json(e10, t2) {
        let r2 = Response.json(e10, t2);
        return new Y(r2.body, r2);
      }
      static redirect(e10, t2) {
        let r2 = "number" == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
        if (!z.has(r2))
          throw RangeError('Failed to execute "redirect" on "response": Invalid status code');
        let n2 = "object" == typeof t2 ? t2 : {}, a2 = new Headers(null == n2 ? void 0 : n2.headers);
        return a2.set("Location", v(e10)), new Y(null, { ...n2, headers: a2, status: r2 });
      }
      static rewrite(e10, t2) {
        let r2 = new Headers(null == t2 ? void 0 : t2.headers);
        return r2.set("x-middleware-rewrite", v(e10)), J(t2, r2), new Y(null, { ...t2, headers: r2 });
      }
      static next(e10) {
        let t2 = new Headers(null == e10 ? void 0 : e10.headers);
        return t2.set("x-middleware-next", "1"), J(e10, t2), new Y(null, { ...e10, headers: t2 });
      }
    }
    function Z(e10, t2) {
      let r2 = "string" == typeof t2 ? new URL(t2) : t2, n2 = new URL(e10, t2), a2 = r2.protocol + "//" + r2.host;
      return n2.protocol + "//" + n2.host === a2 ? n2.toString().replace(a2, "") : n2.toString();
    }
    let Q = [["RSC"], ["Next-Router-State-Tree"], ["Next-Router-Prefetch"]], ee = ["__nextFallback", "__nextLocale", "__nextInferredLocaleFromDefault", "__nextDefaultLocale", "__nextIsNotFound", "_rsc"], et = ["__nextDataReq"];
    function er(e10) {
      return e10.startsWith("/") ? e10 : "/" + e10;
    }
    let en = "nxtP", ea = "x-prerender-revalidate", ei = ".meta", eo = "x-next-revalidated-tags", es = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", api: "api", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", appMetadataRoute: "app-metadata-route", appRouteHandler: "app-route-handler" };
    ({ ...es, GROUP: { serverOnly: [es.reactServerComponents, es.actionBrowser, es.appMetadataRoute, es.appRouteHandler, es.instrument], clientOnly: [es.serverSideRendering, es.appPagesBrowser], nonClientServerTarget: [es.middleware, es.api], app: [es.reactServerComponents, es.actionBrowser, es.appMetadataRoute, es.appRouteHandler, es.serverSideRendering, es.appPagesBrowser, es.shared, es.instrument] } });
    class el extends Error {
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
      }
      static callable() {
        throw new el();
      }
    }
    class eu extends Headers {
      constructor(e10) {
        super(), this.headers = new Proxy(e10, { get(t2, r2, n2) {
          if ("symbol" == typeof r2)
            return K.get(t2, r2, n2);
          let a2 = r2.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === a2);
          if (void 0 !== i2)
            return K.get(t2, i2, n2);
        }, set(t2, r2, n2, a2) {
          if ("symbol" == typeof r2)
            return K.set(t2, r2, n2, a2);
          let i2 = r2.toLowerCase(), o2 = Object.keys(e10).find((e11) => e11.toLowerCase() === i2);
          return K.set(t2, o2 ?? r2, n2, a2);
        }, has(t2, r2) {
          if ("symbol" == typeof r2)
            return K.has(t2, r2);
          let n2 = r2.toLowerCase(), a2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
          return void 0 !== a2 && K.has(t2, a2);
        }, deleteProperty(t2, r2) {
          if ("symbol" == typeof r2)
            return K.deleteProperty(t2, r2);
          let n2 = r2.toLowerCase(), a2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
          return void 0 === a2 || K.deleteProperty(t2, a2);
        } });
      }
      static seal(e10) {
        return new Proxy(e10, { get(e11, t2, r2) {
          switch (t2) {
            case "append":
            case "delete":
            case "set":
              return el.callable;
            default:
              return K.get(e11, t2, r2);
          }
        } });
      }
      merge(e10) {
        return Array.isArray(e10) ? e10.join(", ") : e10;
      }
      static from(e10) {
        return e10 instanceof Headers ? e10 : new eu(e10);
      }
      append(e10, t2) {
        let r2 = this.headers[e10];
        "string" == typeof r2 ? this.headers[e10] = [r2, t2] : Array.isArray(r2) ? r2.push(t2) : this.headers[e10] = t2;
      }
      delete(e10) {
        delete this.headers[e10];
      }
      get(e10) {
        let t2 = this.headers[e10];
        return void 0 !== t2 ? this.merge(t2) : null;
      }
      has(e10) {
        return void 0 !== this.headers[e10];
      }
      set(e10, t2) {
        this.headers[e10] = t2;
      }
      forEach(e10, t2) {
        for (let [r2, n2] of this.entries())
          e10.call(t2, n2, r2, this);
      }
      *entries() {
        for (let e10 of Object.keys(this.headers)) {
          let t2 = e10.toLowerCase(), r2 = this.get(t2);
          yield [t2, r2];
        }
      }
      *keys() {
        for (let e10 of Object.keys(this.headers)) {
          let t2 = e10.toLowerCase();
          yield t2;
        }
      }
      *values() {
        for (let e10 of Object.keys(this.headers)) {
          let t2 = this.get(e10);
          yield t2;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    }
    let ec = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    class ed {
      disable() {
        throw ec;
      }
      getStore() {
      }
      run() {
        throw ec;
      }
      exit() {
        throw ec;
      }
      enterWith() {
        throw ec;
      }
    }
    let eh = globalThis2.AsyncLocalStorage;
    function ep() {
      return eh ? new eh() : new ed();
    }
    let eg = ep();
    class ef extends Error {
      constructor() {
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
      }
      static callable() {
        throw new ef();
      }
    }
    class ev {
      static seal(e10) {
        return new Proxy(e10, { get(e11, t2, r2) {
          switch (t2) {
            case "clear":
            case "delete":
            case "set":
              return ef.callable;
            default:
              return K.get(e11, t2, r2);
          }
        } });
      }
    }
    let em = Symbol.for("next.mutated.cookies");
    class ey {
      static wrap(e10, t2) {
        let r2 = new F.ResponseCookies(new Headers());
        for (let t3 of e10.getAll())
          r2.set(t3);
        let n2 = [], a2 = /* @__PURE__ */ new Set(), i2 = () => {
          let e11 = eg.getStore();
          if (e11 && (e11.pathWasRevalidated = true), n2 = r2.getAll().filter((e12) => a2.has(e12.name)), t2) {
            let e12 = [];
            for (let t3 of n2) {
              let r3 = new F.ResponseCookies(new Headers());
              r3.set(t3), e12.push(r3.toString());
            }
            t2(e12);
          }
        };
        return new Proxy(r2, { get(e11, t3, r3) {
          switch (t3) {
            case em:
              return n2;
            case "delete":
              return function(...t4) {
                a2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                try {
                  e11.delete(...t4);
                } finally {
                  i2();
                }
              };
            case "set":
              return function(...t4) {
                a2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                try {
                  return e11.set(...t4);
                } finally {
                  i2();
                }
              };
            default:
              return K.get(e11, t3, r3);
          }
        } });
      }
    }
    !function(e10) {
      e10.handleRequest = "BaseServer.handleRequest", e10.run = "BaseServer.run", e10.pipe = "BaseServer.pipe", e10.getStaticHTML = "BaseServer.getStaticHTML", e10.render = "BaseServer.render", e10.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", e10.renderToResponse = "BaseServer.renderToResponse", e10.renderToHTML = "BaseServer.renderToHTML", e10.renderError = "BaseServer.renderError", e10.renderErrorToResponse = "BaseServer.renderErrorToResponse", e10.renderErrorToHTML = "BaseServer.renderErrorToHTML", e10.render404 = "BaseServer.render404";
    }(M || (M = {})), function(e10) {
      e10.loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", e10.loadComponents = "LoadComponents.loadComponents";
    }(I || (I = {})), function(e10) {
      e10.getRequestHandler = "NextServer.getRequestHandler", e10.getServer = "NextServer.getServer", e10.getServerRequestHandler = "NextServer.getServerRequestHandler", e10.createServer = "createServer.createServer";
    }(D || (D = {})), function(e10) {
      e10.compression = "NextNodeServer.compression", e10.getBuildId = "NextNodeServer.getBuildId", e10.createComponentTree = "NextNodeServer.createComponentTree", e10.clientComponentLoading = "NextNodeServer.clientComponentLoading", e10.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", e10.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", e10.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", e10.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", e10.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", e10.sendRenderResult = "NextNodeServer.sendRenderResult", e10.proxyRequest = "NextNodeServer.proxyRequest", e10.runApi = "NextNodeServer.runApi", e10.render = "NextNodeServer.render", e10.renderHTML = "NextNodeServer.renderHTML", e10.imageOptimizer = "NextNodeServer.imageOptimizer", e10.getPagePath = "NextNodeServer.getPagePath", e10.getRoutesManifest = "NextNodeServer.getRoutesManifest", e10.findPageComponents = "NextNodeServer.findPageComponents", e10.getFontManifest = "NextNodeServer.getFontManifest", e10.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", e10.getRequestHandler = "NextNodeServer.getRequestHandler", e10.renderToHTML = "NextNodeServer.renderToHTML", e10.renderError = "NextNodeServer.renderError", e10.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", e10.render404 = "NextNodeServer.render404", e10.startResponse = "NextNodeServer.startResponse", e10.route = "route", e10.onProxyReq = "onProxyReq", e10.apiResolver = "apiResolver", e10.internalFetch = "internalFetch";
    }(L || (L = {})), (k || (k = {})).startServer = "startServer.startServer", function(e10) {
      e10.getServerSideProps = "Render.getServerSideProps", e10.getStaticProps = "Render.getStaticProps", e10.renderToString = "Render.renderToString", e10.renderDocument = "Render.renderDocument", e10.createBodyResult = "Render.createBodyResult";
    }(j || (j = {})), function(e10) {
      e10.renderToString = "AppRender.renderToString", e10.renderToReadableStream = "AppRender.renderToReadableStream", e10.getBodyResult = "AppRender.getBodyResult", e10.fetch = "AppRender.fetch";
    }(H || (H = {})), ($ || ($ = {})).executeRoute = "Router.executeRoute", (B || (B = {})).runHandler = "Node.runHandler", (U || (U = {})).runHandler = "AppRouteRouteHandlers.runHandler", function(e10) {
      e10.generateMetadata = "ResolveMetadata.generateMetadata", e10.generateViewport = "ResolveMetadata.generateViewport";
    }(V || (V = {})), (q || (q = {})).execute = "Middleware.execute";
    let e_ = ["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"], eb = ["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"], { context: ew, propagation: eS, trace: ex, SpanStatusCode: eE, SpanKind: eC, ROOT_CONTEXT: eP } = n = r(92486), eT = (e10) => null !== e10 && "object" == typeof e10 && "function" == typeof e10.then, eO = (e10, t2) => {
      (null == t2 ? void 0 : t2.bubble) === true ? e10.setAttribute("next.bubble", true) : (t2 && e10.recordException(t2), e10.setStatus({ code: eE.ERROR, message: null == t2 ? void 0 : t2.message })), e10.end();
    }, eN = /* @__PURE__ */ new Map(), eR = n.createContextKey("next.rootSpanId"), eA = 0, eM = () => eA++;
    class eI {
      getTracerInstance() {
        return ex.getTracer("next.js", "0.0.1");
      }
      getContext() {
        return ew;
      }
      getActiveScopeSpan() {
        return ex.getSpan(null == ew ? void 0 : ew.active());
      }
      withPropagatedContext(e10, t2, r2) {
        let n2 = ew.active();
        if (ex.getSpanContext(n2))
          return t2();
        let a2 = eS.extract(n2, e10, r2);
        return ew.with(a2, t2);
      }
      trace(...e10) {
        var t2;
        let [r2, n2, a2] = e10, { fn: i2, options: o2 } = "function" == typeof n2 ? { fn: n2, options: {} } : { fn: a2, options: { ...n2 } }, s2 = o2.spanName ?? r2;
        if (!e_.includes(r2) && "1" !== process.env.NEXT_OTEL_VERBOSE || o2.hideSpan)
          return i2();
        let l2 = this.getSpanContext((null == o2 ? void 0 : o2.parentSpan) ?? this.getActiveScopeSpan()), u2 = false;
        l2 ? (null == (t2 = ex.getSpanContext(l2)) ? void 0 : t2.isRemote) && (u2 = true) : (l2 = (null == ew ? void 0 : ew.active()) ?? eP, u2 = true);
        let c2 = eM();
        return o2.attributes = { "next.span_name": s2, "next.span_type": r2, ...o2.attributes }, ew.with(l2.setValue(eR, c2), () => this.getTracerInstance().startActiveSpan(s2, o2, (e11) => {
          let t3 = "performance" in globalThis2 ? globalThis2.performance.now() : void 0, n3 = () => {
            eN.delete(c2), t3 && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && eb.includes(r2 || "") && performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(r2.split(".").pop() || "").replace(/[A-Z]/g, (e12) => "-" + e12.toLowerCase())}`, { start: t3, end: performance.now() });
          };
          u2 && eN.set(c2, new Map(Object.entries(o2.attributes ?? {})));
          try {
            if (i2.length > 1)
              return i2(e11, (t5) => eO(e11, t5));
            let t4 = i2(e11);
            if (eT(t4))
              return t4.then((t5) => (e11.end(), t5)).catch((t5) => {
                throw eO(e11, t5), t5;
              }).finally(n3);
            return e11.end(), n3(), t4;
          } catch (t4) {
            throw eO(e11, t4), n3(), t4;
          }
        }));
      }
      wrap(...e10) {
        let t2 = this, [r2, n2, a2] = 3 === e10.length ? e10 : [e10[0], {}, e10[1]];
        return e_.includes(r2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
          let e11 = n2;
          "function" == typeof e11 && "function" == typeof a2 && (e11 = e11.apply(this, arguments));
          let i2 = arguments.length - 1, o2 = arguments[i2];
          if ("function" != typeof o2)
            return t2.trace(r2, e11, () => a2.apply(this, arguments));
          {
            let n3 = t2.getContext().bind(ew.active(), o2);
            return t2.trace(r2, e11, (e12, t3) => (arguments[i2] = function(e13) {
              return null == t3 || t3(e13), n3.apply(this, arguments);
            }, a2.apply(this, arguments)));
          }
        } : a2;
      }
      startSpan(...e10) {
        let [t2, r2] = e10, n2 = this.getSpanContext((null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(t2, r2, n2);
      }
      getSpanContext(e10) {
        return e10 ? ex.setSpan(ew.active(), e10) : void 0;
      }
      getRootSpanAttributes() {
        let e10 = ew.active().getValue(eR);
        return eN.get(e10);
      }
    }
    let eD = (() => {
      let e10 = new eI();
      return () => e10;
    })(), eL = "__prerender_bypass";
    Symbol("__next_preview_data"), Symbol(eL);
    class ek {
      constructor(e10, t2, r2, n2) {
        var a2;
        let i2 = e10 && function(e11, t3) {
          let r3 = eu.from(e11.headers);
          return { isOnDemandRevalidate: r3.get(ea) === t3.previewModeId, revalidateOnlyGenerated: r3.has("x-prerender-revalidate-if-generated") };
        }(t2, e10).isOnDemandRevalidate, o2 = null == (a2 = r2.get(eL)) ? void 0 : a2.value;
        this.isEnabled = !!(!i2 && o2 && e10 && o2 === e10.previewModeId), this._previewModeId = null == e10 ? void 0 : e10.previewModeId, this._mutableCookies = n2;
      }
      enable() {
        if (!this._previewModeId)
          throw Error("Invariant: previewProps missing previewModeId this should never happen");
        this._mutableCookies.set({ name: eL, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" });
      }
      disable() {
        this._mutableCookies.set({ name: eL, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: new Date(0) });
      }
    }
    function ej(e10, t2) {
      if ("x-middleware-set-cookie" in e10.headers && "string" == typeof e10.headers["x-middleware-set-cookie"]) {
        let r2 = e10.headers["x-middleware-set-cookie"], n2 = new Headers();
        for (let e11 of g(r2))
          n2.append("set-cookie", e11);
        for (let e11 of new F.ResponseCookies(n2).getAll())
          t2.set(e11);
      }
    }
    let eH = { wrap(e10, { req: t2, res: r2, renderOpts: n2 }, a2) {
      let i2;
      function o2(e11) {
        r2 && r2.setHeader("Set-Cookie", e11);
      }
      n2 && "previewProps" in n2 && (i2 = n2.previewProps);
      let s2 = {}, l2 = { get headers() {
        return s2.headers || (s2.headers = function(e11) {
          let t3 = eu.from(e11);
          for (let e12 of Q)
            t3.delete(e12.toString().toLowerCase());
          return eu.seal(t3);
        }(t2.headers)), s2.headers;
      }, get cookies() {
        if (!s2.cookies) {
          let e11 = new F.RequestCookies(eu.from(t2.headers));
          ej(t2, e11), s2.cookies = ev.seal(e11);
        }
        return s2.cookies;
      }, get mutableCookies() {
        if (!s2.mutableCookies) {
          let e11 = function(e12, t3) {
            let r3 = new F.RequestCookies(eu.from(e12));
            return ey.wrap(r3, t3);
          }(t2.headers, (null == n2 ? void 0 : n2.onUpdateCookies) || (r2 ? o2 : void 0));
          ej(t2, e11), s2.mutableCookies = e11;
        }
        return s2.mutableCookies;
      }, get draftMode() {
        return s2.draftMode || (s2.draftMode = new ek(i2, t2, this.cookies, this.mutableCookies)), s2.draftMode;
      }, reactLoadableManifest: (null == n2 ? void 0 : n2.reactLoadableManifest) || {}, assetPrefix: (null == n2 ? void 0 : n2.assetPrefix) || "" };
      return e10.run(l2, a2, l2);
    } }, e$ = ep();
    function eB() {
      return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID, previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
    }
    class eU extends X {
      constructor(e10) {
        super(e10.input, e10.init), this.sourcePage = e10.page;
      }
      get request() {
        throw new d({ page: this.sourcePage });
      }
      respondWith() {
        throw new d({ page: this.sourcePage });
      }
      waitUntil() {
        throw new d({ page: this.sourcePage });
      }
    }
    let eV = { keys: (e10) => Array.from(e10.keys()), get: (e10, t2) => e10.get(t2) ?? void 0 }, eq = (e10, t2) => eD().withPropagatedContext(e10.headers, t2, eV), eF = false;
    async function eG(e10) {
      let t2, n2;
      !function() {
        if (!eF && (eF = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
          let { interceptTestApis: e11, wrapRequestHandler: t3 } = r(8074);
          e11(), eq = t3(eq);
        }
      }(), await u();
      let a2 = void 0 !== self.__BUILD_MANIFEST;
      e10.request.url = e10.request.url.replace(/\.rsc($|\?)/, "$1");
      let i2 = new A(e10.request.url, { headers: e10.request.headers, nextConfig: e10.request.nextConfig });
      for (let e11 of [...i2.searchParams.keys()]) {
        let t3 = i2.searchParams.getAll(e11);
        if (e11 !== en && e11.startsWith(en)) {
          let r2 = e11.substring(en.length);
          for (let e12 of (i2.searchParams.delete(r2), t3))
            i2.searchParams.append(r2, e12);
          i2.searchParams.delete(e11);
        }
      }
      let o2 = i2.buildId;
      i2.buildId = "";
      let s2 = e10.request.headers["x-nextjs-data"];
      s2 && "/index" === i2.pathname && (i2.pathname = "/");
      let l2 = function(e11) {
        let t3 = new Headers();
        for (let [r2, n3] of Object.entries(e11))
          for (let e12 of Array.isArray(n3) ? n3 : [n3])
            void 0 !== e12 && ("number" == typeof e12 && (e12 = e12.toString()), t3.append(r2, e12));
        return t3;
      }(e10.request.headers), c2 = /* @__PURE__ */ new Map();
      if (!a2)
        for (let e11 of Q) {
          let t3 = e11.toString().toLowerCase();
          l2.get(t3) && (c2.set(t3, l2.get(t3)), l2.delete(t3));
        }
      let d2 = new eU({ page: e10.page, input: function(e11, t3) {
        let r2 = "string" == typeof e11, n3 = r2 ? new URL(e11) : e11;
        for (let e12 of ee)
          n3.searchParams.delete(e12);
        if (t3)
          for (let e12 of et)
            n3.searchParams.delete(e12);
        return r2 ? n3.toString() : n3;
      }(i2, true).toString(), init: { body: e10.request.body, geo: e10.request.geo, headers: l2, ip: e10.request.ip, method: e10.request.method, nextConfig: e10.request.nextConfig, signal: e10.request.signal } });
      s2 && Object.defineProperty(d2, "__isData", { enumerable: false, value: true }), !globalThis2.__incrementalCache && e10.IncrementalCache && (globalThis2.__incrementalCache = new e10.IncrementalCache({ appDir: true, fetchCache: true, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: e10.request.headers, requestProtocol: "https", getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: eB() }) }));
      let h2 = new w({ request: d2, page: e10.page });
      if ((t2 = await eq(d2, () => "/middleware" === e10.page || "/src/middleware" === e10.page ? eD().trace(q.execute, { spanName: `middleware ${d2.method} ${d2.nextUrl.pathname}`, attributes: { "http.target": d2.nextUrl.pathname, "http.method": d2.method } }, () => eH.wrap(e$, { req: d2, renderOpts: { onUpdateCookies: (e11) => {
        n2 = e11;
      }, previewProps: eB() } }, () => e10.handler(d2, h2))) : e10.handler(d2, h2))) && !(t2 instanceof Response))
        throw TypeError("Expected an instance of Response to be returned");
      t2 && n2 && t2.headers.set("set-cookie", n2);
      let p2 = null == t2 ? void 0 : t2.headers.get("x-middleware-rewrite");
      if (t2 && p2 && !a2) {
        let r2 = new A(p2, { forceLocale: true, headers: e10.request.headers, nextConfig: e10.request.nextConfig });
        r2.host === d2.nextUrl.host && (r2.buildId = o2 || r2.buildId, t2.headers.set("x-middleware-rewrite", String(r2)));
        let n3 = Z(String(r2), String(i2));
        s2 && t2.headers.set("x-nextjs-rewrite", n3);
      }
      let g2 = null == t2 ? void 0 : t2.headers.get("Location");
      if (t2 && g2 && !a2) {
        let r2 = new A(g2, { forceLocale: false, headers: e10.request.headers, nextConfig: e10.request.nextConfig });
        t2 = new Response(t2.body, t2), r2.host === d2.nextUrl.host && (r2.buildId = o2 || r2.buildId, t2.headers.set("Location", String(r2))), s2 && (t2.headers.delete("Location"), t2.headers.set("x-nextjs-redirect", Z(String(r2), String(i2))));
      }
      let f2 = t2 || Y.next(), v2 = f2.headers.get("x-middleware-override-headers"), m2 = [];
      if (v2) {
        for (let [e11, t3] of c2)
          f2.headers.set(`x-middleware-request-${e11}`, t3), m2.push(e11);
        m2.length > 0 && f2.headers.set("x-middleware-override-headers", v2 + "," + m2.join(","));
      }
      return { response: f2, waitUntil: Promise.all(h2[_]), fetchMetrics: d2.fetchMetrics };
    }
    var eX = r(43334), eK = r.n(eX);
    let eW = 0, ez = "x-vercel-cache-tags", eJ = "x-vercel-sc-headers", eY = "x-vercel-revalidate", eZ = "x-vercel-cache-item-name", eQ = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
    async function e0(e10, t2, r2 = 0) {
      let n2 = new AbortController(), a2 = setTimeout(() => {
        n2.abort();
      }, 500);
      return fetch(e10, { ...t2 || {}, signal: n2.signal }).catch((n3) => {
        if (3 !== r2)
          return eQ && console.log(`Fetch failed for ${e10} retry ${r2}`), e0(e10, t2, r2 + 1);
        throw n3;
      }).finally(() => {
        clearTimeout(a2);
      });
    }
    class e1 {
      hasMatchingTags(e10, t2) {
        if (e10.length !== t2.length)
          return false;
        let r2 = new Set(e10), n2 = new Set(t2);
        if (r2.size !== n2.size)
          return false;
        for (let e11 of r2)
          if (!n2.has(e11))
            return false;
        return true;
      }
      static isAvailable(e10) {
        return !!(e10._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL);
      }
      constructor(e10) {
        if (this.headers = {}, this.headers["Content-Type"] = "application/json", eJ in e10._requestHeaders) {
          let t3 = JSON.parse(e10._requestHeaders[eJ]);
          for (let e11 in t3)
            this.headers[e11] = t3[e11];
          delete e10._requestHeaders[eJ];
        }
        let t2 = e10._requestHeaders["x-vercel-sc-host"] || process.env.SUSPENSE_CACHE_URL, r2 = e10._requestHeaders["x-vercel-sc-basepath"] || process.env.SUSPENSE_CACHE_BASEPATH;
        if (process.env.SUSPENSE_CACHE_AUTH_TOKEN && (this.headers.Authorization = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`), t2) {
          let e11 = process.env.SUSPENSE_CACHE_PROTO || "https";
          this.cacheEndpoint = `${e11}://${t2}${r2 || ""}`, eQ && console.log("using cache endpoint", this.cacheEndpoint);
        } else
          eQ && console.log("no cache endpoint available");
        e10.maxMemoryCacheSize ? a || (eQ && console.log("using memory store for fetch cache"), a = new (eK())({ max: e10.maxMemoryCacheSize, length({ value: e11 }) {
          var t3;
          if (!e11)
            return 25;
          if ("REDIRECT" === e11.kind)
            return JSON.stringify(e11.props).length;
          if ("IMAGE" === e11.kind)
            throw Error("invariant image should not be incremental-cache");
          return "FETCH" === e11.kind ? JSON.stringify(e11.data || "").length : "ROUTE" === e11.kind ? e11.body.length : e11.html.length + ((null == (t3 = JSON.stringify("PAGE" === e11.kind && e11.pageData)) ? void 0 : t3.length) || 0);
        } })) : eQ && console.log("not using memory store for fetch cache");
      }
      resetRequestCache() {
        null == a || a.reset();
      }
      async revalidateTag(...e10) {
        let [t2] = e10;
        if (t2 = "string" == typeof t2 ? [t2] : t2, eQ && console.log("revalidateTag", t2), t2.length) {
          if (Date.now() < eW) {
            eQ && console.log("rate limited ", eW);
            return;
          }
          for (let e11 = 0; e11 < Math.ceil(t2.length / 64); e11++) {
            let r2 = t2.slice(64 * e11, 64 * e11 + 64);
            try {
              let e12 = await e0(`${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${r2.map((e13) => encodeURIComponent(e13)).join(",")}`, { method: "POST", headers: this.headers, next: { internal: true } });
              if (429 === e12.status) {
                let t3 = e12.headers.get("retry-after") || "60000";
                eW = Date.now() + parseInt(t3);
              }
              if (!e12.ok)
                throw Error(`Request failed with status ${e12.status}.`);
            } catch (e12) {
              console.warn("Failed to revalidate tag", r2, e12);
            }
          }
        }
      }
      async get(...e10) {
        var t2;
        let [r2, n2 = {}] = e10, { tags: i2, softTags: o2, kindHint: s2, fetchIdx: l2, fetchUrl: u2 } = n2;
        if ("fetch" !== s2)
          return null;
        if (Date.now() < eW)
          return eQ && console.log("rate limited"), null;
        let c2 = null == a ? void 0 : a.get(r2), d2 = (null == c2 ? void 0 : null == (t2 = c2.value) ? void 0 : t2.kind) === "FETCH" && this.hasMatchingTags(i2 ?? [], c2.value.tags ?? []);
        if (this.cacheEndpoint && (!c2 || !d2))
          try {
            let e11 = Date.now(), t3 = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${r2}`, { method: "GET", headers: { ...this.headers, [eZ]: u2, [ez]: (null == i2 ? void 0 : i2.join(",")) || "", "x-next-cache-soft-tags": (null == o2 ? void 0 : o2.join(",")) || "" }, next: { internal: true, fetchType: "cache-get", fetchUrl: u2, fetchIdx: l2 } });
            if (429 === t3.status) {
              let e12 = t3.headers.get("retry-after") || "60000";
              eW = Date.now() + parseInt(e12);
            }
            if (404 === t3.status)
              return eQ && console.log(`no fetch cache entry for ${r2}, duration: ${Date.now() - e11}ms`), null;
            if (!t3.ok)
              throw console.error(await t3.text()), Error(`invalid response from cache ${t3.status}`);
            let n3 = await t3.json();
            if (!n3 || "FETCH" !== n3.kind)
              throw eQ && console.log({ cached: n3 }), Error("invalid cache value");
            if ("FETCH" === n3.kind)
              for (let e12 of (n3.tags ??= [], i2 ?? []))
                n3.tags.includes(e12) || n3.tags.push(e12);
            let s3 = t3.headers.get("x-vercel-cache-state"), d3 = t3.headers.get("age");
            c2 = { value: n3, lastModified: "fresh" !== s3 ? Date.now() - 31536e3 : Date.now() - 1e3 * parseInt(d3 || "0", 10) }, eQ && console.log(`got fetch cache entry for ${r2}, duration: ${Date.now() - e11}ms, size: ${Object.keys(n3).length}, cache-state: ${s3} tags: ${null == i2 ? void 0 : i2.join(",")} softTags: ${null == o2 ? void 0 : o2.join(",")}`), c2 && (null == a || a.set(r2, c2));
          } catch (e11) {
            eQ && console.error("Failed to get from fetch-cache", e11);
          }
        return c2 || null;
      }
      async set(...e10) {
        let [t2, r2, n2] = e10, { fetchCache: i2, fetchIdx: o2, fetchUrl: s2, tags: l2 } = n2;
        if (i2) {
          if (Date.now() < eW) {
            eQ && console.log("rate limited");
            return;
          }
          if (null == a || a.set(t2, { value: r2, lastModified: Date.now() }), this.cacheEndpoint)
            try {
              let e11 = Date.now();
              null !== r2 && "revalidate" in r2 && (this.headers[eY] = r2.revalidate.toString()), !this.headers[eY] && null !== r2 && "data" in r2 && (this.headers["x-vercel-cache-control"] = r2.data.headers["cache-control"]);
              let n3 = JSON.stringify({ ...r2, tags: void 0 });
              eQ && console.log("set cache", t2);
              let a2 = await fetch(`${this.cacheEndpoint}/v1/suspense-cache/${t2}`, { method: "POST", headers: { ...this.headers, [eZ]: s2 || "", [ez]: (null == l2 ? void 0 : l2.join(",")) || "" }, body: n3, next: { internal: true, fetchType: "cache-set", fetchUrl: s2, fetchIdx: o2 } });
              if (429 === a2.status) {
                let e12 = a2.headers.get("retry-after") || "60000";
                eW = Date.now() + parseInt(e12);
              }
              if (!a2.ok)
                throw eQ && console.log(await a2.text()), Error(`invalid response ${a2.status}`);
              eQ && console.log(`successfully set to fetch-cache for ${t2}, duration: ${Date.now() - e11}ms, size: ${n3.length}`);
            } catch (e11) {
              eQ && console.error("Failed to update fetch cache", e11);
            }
        }
      }
    }
    var e4 = r(81483), e2 = r.n(e4);
    class e7 {
      constructor(e10) {
        this.fs = e10.fs, this.flushToDisk = e10.flushToDisk, this.serverDistDir = e10.serverDistDir, this.appDir = !!e10._appDir, this.pagesDir = !!e10._pagesDir, this.revalidatedTags = e10.revalidatedTags, this.experimental = e10.experimental, this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE, e10.maxMemoryCacheSize && !i ? (this.debug && console.log("using memory store for fetch cache"), i = new (eK())({ max: e10.maxMemoryCacheSize, length({ value: e11 }) {
          var t2;
          if (!e11)
            return 25;
          if ("REDIRECT" === e11.kind)
            return JSON.stringify(e11.props).length;
          if ("IMAGE" === e11.kind)
            throw Error("invariant image should not be incremental-cache");
          return "FETCH" === e11.kind ? JSON.stringify(e11.data || "").length : "ROUTE" === e11.kind ? e11.body.length : e11.html.length + ((null == (t2 = JSON.stringify(e11.pageData)) ? void 0 : t2.length) || 0);
        } })) : this.debug && console.log("not using memory store for fetch cache"), this.serverDistDir && this.fs && (this.tagsManifestPath = e2().join(this.serverDistDir, "..", "cache", "fetch-cache", "tags-manifest.json"), this.loadTagsManifest());
      }
      resetRequestCache() {
      }
      loadTagsManifest() {
        if (this.tagsManifestPath && this.fs && !o) {
          try {
            o = JSON.parse(this.fs.readFileSync(this.tagsManifestPath, "utf8"));
          } catch (e10) {
            o = { version: 1, items: {} };
          }
          this.debug && console.log("loadTagsManifest", o);
        }
      }
      async revalidateTag(...e10) {
        let [t2] = e10;
        if (t2 = "string" == typeof t2 ? [t2] : t2, this.debug && console.log("revalidateTag", t2), 0 !== t2.length && (await this.loadTagsManifest(), o && this.tagsManifestPath)) {
          for (let e11 of t2) {
            let t3 = o.items[e11] || {};
            t3.revalidatedAt = Date.now(), o.items[e11] = t3;
          }
          try {
            await this.fs.mkdir(e2().dirname(this.tagsManifestPath)), await this.fs.writeFile(this.tagsManifestPath, JSON.stringify(o || {})), this.debug && console.log("Updated tags manifest", o);
          } catch (e11) {
            console.warn("Failed to update tags manifest.", e11);
          }
        }
      }
      async get(...e10) {
        var t2, r2, n2;
        let [a2, s2 = {}] = e10, { tags: l2, softTags: u2, kindHint: c2 } = s2, d2 = null == i ? void 0 : i.get(a2);
        if (this.debug && console.log("get", a2, l2, c2, !!d2), (null == d2 ? void 0 : null == (t2 = d2.value) ? void 0 : t2.kind) === "PAGE") {
          let e11;
          let t3 = null == (n2 = d2.value.headers) ? void 0 : n2["x-next-cache-tags"];
          "string" == typeof t3 && (e11 = t3.split(",")), (null == e11 ? void 0 : e11.length) && (this.loadTagsManifest(), e11.some((e12) => {
            var t4;
            return (null == o ? void 0 : null == (t4 = o.items[e12]) ? void 0 : t4.revalidatedAt) && (null == o ? void 0 : o.items[e12].revalidatedAt) >= ((null == d2 ? void 0 : d2.lastModified) || Date.now());
          }) && (d2 = void 0));
        }
        return d2 && (null == d2 ? void 0 : null == (r2 = d2.value) ? void 0 : r2.kind) === "FETCH" && (this.loadTagsManifest(), [...l2 || [], ...u2 || []].some((e11) => {
          var t3;
          return !!this.revalidatedTags.includes(e11) || (null == o ? void 0 : null == (t3 = o.items[e11]) ? void 0 : t3.revalidatedAt) && (null == o ? void 0 : o.items[e11].revalidatedAt) >= ((null == d2 ? void 0 : d2.lastModified) || Date.now());
        }) && (d2 = void 0)), d2 ?? null;
      }
      async set(...e10) {
        let [t2, r2, n2] = e10;
        if (null == i || i.set(t2, { value: r2, lastModified: Date.now() }), this.debug && console.log("set", t2), this.flushToDisk) {
          if ((null == r2 ? void 0 : r2.kind) === "ROUTE") {
            let e11 = this.getFilePath(`${t2}.body`, "app");
            await this.fs.mkdir(e2().dirname(e11)), await this.fs.writeFile(e11, r2.body);
            let n3 = { headers: r2.headers, status: r2.status, postponed: void 0 };
            await this.fs.writeFile(e11.replace(/\.body$/, ei), JSON.stringify(n3, null, 2));
            return;
          }
          if ((null == r2 ? void 0 : r2.kind) === "PAGE") {
            let e11 = "string" == typeof r2.pageData, n3 = this.getFilePath(`${t2}.html`, e11 ? "app" : "pages");
            if (await this.fs.mkdir(e2().dirname(n3)), await this.fs.writeFile(n3, r2.html), await this.fs.writeFile(this.getFilePath(`${t2}${e11 ? this.experimental.ppr ? ".prefetch.rsc" : ".rsc" : ".json"}`, e11 ? "app" : "pages"), e11 ? r2.pageData : JSON.stringify(r2.pageData)), r2.headers || r2.status) {
              let e12 = { headers: r2.headers, status: r2.status, postponed: r2.postponed };
              await this.fs.writeFile(n3.replace(/\.html$/, ei), JSON.stringify(e12));
            }
          } else if ((null == r2 ? void 0 : r2.kind) === "FETCH") {
            let e11 = this.getFilePath(t2, "fetch");
            await this.fs.mkdir(e2().dirname(e11)), await this.fs.writeFile(e11, JSON.stringify({ ...r2, tags: n2.tags }));
          }
        }
      }
      detectFileKind(e10) {
        if (!this.appDir && !this.pagesDir)
          throw Error("Invariant: Can't determine file path kind, no page directory enabled");
        if (!this.appDir && this.pagesDir)
          return "pages";
        if (this.appDir && !this.pagesDir)
          return "app";
        let t2 = this.getFilePath(e10, "pages");
        if (this.fs.existsSync(t2))
          return "pages";
        if (t2 = this.getFilePath(e10, "app"), this.fs.existsSync(t2))
          return "app";
        throw Error(`Invariant: Unable to determine file path kind for ${e10}`);
      }
      getFilePath(e10, t2) {
        switch (t2) {
          case "fetch":
            return e2().join(this.serverDistDir, "..", "cache", "fetch-cache", e10);
          case "pages":
            return e2().join(this.serverDistDir, "pages", e10);
          case "app":
            return e2().join(this.serverDistDir, "app", e10);
          default:
            throw Error("Invariant: Can't determine file path kind");
        }
      }
    }
    let e3 = ["(..)(..)", "(.)", "(..)", "(...)"], e6 = /\/\[[^/]+?\](?=\/|$)/;
    function e9(e10) {
      return e10.replace(/(?:\/index)?\/?$/, "") || "/";
    }
    "undefined" != typeof performance && ["mark", "measure", "getEntriesByName"].every((e10) => "function" == typeof performance[e10]);
    class e8 {
      static #e = this.timings = /* @__PURE__ */ new Map();
      constructor(e10) {
        this.prerenderManifest = e10;
      }
      get(e10) {
        var t2;
        let r2 = e8.timings.get(e10);
        if (void 0 !== r2 || void 0 !== (r2 = null == (t2 = this.prerenderManifest.routes[e10]) ? void 0 : t2.initialRevalidateSeconds))
          return r2;
      }
      set(e10, t2) {
        e8.timings.set(e10, t2);
      }
      clear() {
        e8.timings.clear();
      }
    }
    class e5 {
      constructor({ fs: e10, dev: t2, appDir: r2, pagesDir: n2, flushToDisk: a2, fetchCache: i2, minimalMode: o2, serverDistDir: s2, requestHeaders: l2, requestProtocol: u2, maxMemoryCacheSize: c2, getPrerenderManifest: d2, fetchCacheKeyPrefix: h2, CurCacheHandler: p2, allowedRevalidateHeaderKeys: g2, experimental: f2 }) {
        var v2, m2, y2, _2;
        this.locks = /* @__PURE__ */ new Map(), this.unlocks = /* @__PURE__ */ new Map();
        let b2 = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        this.hasCustomCacheHandler = !!p2, p2 ? b2 && console.log("using custom cache handler", p2.name) : (e10 && s2 && (b2 && console.log("using filesystem cache handler"), p2 = e7), e1.isAvailable({ _requestHeaders: l2 }) && o2 && i2 && (b2 && console.log("using fetch cache handler"), p2 = e1)), process.env.__NEXT_TEST_MAX_ISR_CACHE && (c2 = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10)), this.dev = t2, this.disableForTestmode = "true" === process.env.NEXT_PRIVATE_TEST_PROXY, this.minimalMode = o2, this.requestHeaders = l2, this.requestProtocol = u2, this.allowedRevalidateHeaderKeys = g2, this.prerenderManifest = d2(), this.revalidateTimings = new e8(this.prerenderManifest), this.fetchCacheKeyPrefix = h2;
        let w2 = [];
        l2[ea] === (null == (m2 = this.prerenderManifest) ? void 0 : null == (v2 = m2.preview) ? void 0 : v2.previewModeId) && (this.isOnDemandRevalidate = true), o2 && "string" == typeof l2[eo] && l2["x-next-revalidate-tag-token"] === (null == (_2 = this.prerenderManifest) ? void 0 : null == (y2 = _2.preview) ? void 0 : y2.previewModeId) && (w2 = l2[eo].split(",")), p2 && (this.cacheHandler = new p2({ dev: t2, fs: e10, flushToDisk: a2, serverDistDir: s2, revalidatedTags: w2, maxMemoryCacheSize: c2, _pagesDir: !!n2, _appDir: !!r2, _requestHeaders: l2, fetchCacheKeyPrefix: h2, experimental: f2 }));
      }
      calculateRevalidate(e10, t2, r2) {
        if (r2)
          return new Date().getTime() - 1e3;
        let n2 = this.revalidateTimings.get(e9(e10)) ?? 1;
        return "number" == typeof n2 ? 1e3 * n2 + t2 : n2;
      }
      _getPathname(e10, t2) {
        var r2;
        return t2 ? e10 : /^\/index(\/|$)/.test(e10) && (void 0 !== (r2 = e10).split("/").find((e11) => e3.find((t3) => e11.startsWith(t3))) && (r2 = function(e11) {
          let t3, r3, n2;
          for (let a2 of e11.split("/"))
            if (r3 = e3.find((e12) => a2.startsWith(e12))) {
              [t3, n2] = e11.split(r3, 2);
              break;
            }
          if (!t3 || !r3 || !n2)
            throw Error(`Invalid interception route: ${e11}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
          switch (t3 = er(t3.split("/").reduce((e12, t4, r4, n3) => t4 ? "(" === t4[0] && t4.endsWith(")") || "@" === t4[0] || ("page" === t4 || "route" === t4) && r4 === n3.length - 1 ? e12 : e12 + "/" + t4 : e12, "")), r3) {
            case "(.)":
              n2 = "/" === t3 ? `/${n2}` : t3 + "/" + n2;
              break;
            case "(..)":
              if ("/" === t3)
                throw Error(`Invalid interception route: ${e11}. Cannot use (..) marker at the root level, use (.) instead.`);
              n2 = t3.split("/").slice(0, -1).concat(n2).join("/");
              break;
            case "(...)":
              n2 = "/" + n2;
              break;
            case "(..)(..)":
              let a2 = t3.split("/");
              if (a2.length <= 2)
                throw Error(`Invalid interception route: ${e11}. Cannot use (..)(..) marker at the root level or one level up.`);
              n2 = a2.slice(0, -2).concat(n2).join("/");
              break;
            default:
              throw Error("Invariant: unexpected marker");
          }
          return { interceptingRoute: t3, interceptedRoute: n2 };
        }(r2).interceptedRoute), !e6.test(r2)) ? "/index" + e10 : "/" === e10 ? "/index" : er(e10);
      }
      resetRequestCache() {
        var e10, t2;
        null == (t2 = this.cacheHandler) || null == (e10 = t2.resetRequestCache) || e10.call(t2);
      }
      async unlock(e10) {
        let t2 = this.unlocks.get(e10);
        t2 && (t2(), this.locks.delete(e10), this.unlocks.delete(e10));
      }
      async lock(e10) {
        process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY;
        let t2 = () => Promise.resolve(), r2 = this.locks.get(e10);
        if (r2)
          await r2;
        else {
          let r3 = new Promise((e11) => {
            t2 = async () => {
              e11();
            };
          });
          this.locks.set(e10, r3), this.unlocks.set(e10, t2);
        }
        return t2;
      }
      async revalidateTag(e10) {
        var t2, r2;
        return process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY, null == (r2 = this.cacheHandler) ? void 0 : null == (t2 = r2.revalidateTag) ? void 0 : t2.call(r2, e10);
      }
      async fetchCacheKey(e10, t2 = {}) {
        let r2 = [], n2 = new TextEncoder(), a2 = new TextDecoder();
        if (t2.body) {
          if ("function" == typeof t2.body.getReader) {
            let e11 = t2.body, i3 = [];
            try {
              await e11.pipeTo(new WritableStream({ write(e12) {
                "string" == typeof e12 ? (i3.push(n2.encode(e12)), r2.push(e12)) : (i3.push(e12), r2.push(a2.decode(e12, { stream: true })));
              } })), r2.push(a2.decode());
              let o3 = i3.reduce((e12, t3) => e12 + t3.length, 0), s3 = new Uint8Array(o3), l2 = 0;
              for (let e12 of i3)
                s3.set(e12, l2), l2 += e12.length;
              t2._ogBody = s3;
            } catch (e12) {
              console.error("Problem reading body", e12);
            }
          } else if ("function" == typeof t2.body.keys) {
            let e11 = t2.body;
            for (let n3 of (t2._ogBody = t2.body, /* @__PURE__ */ new Set([...e11.keys()]))) {
              let t3 = e11.getAll(n3);
              r2.push(`${n3}=${(await Promise.all(t3.map(async (e12) => "string" == typeof e12 ? e12 : await e12.text()))).join(",")}`);
            }
          } else if ("function" == typeof t2.body.arrayBuffer) {
            let e11 = t2.body, n3 = await e11.arrayBuffer();
            r2.push(await e11.text()), t2._ogBody = new Blob([n3], { type: e11.type });
          } else
            "string" == typeof t2.body && (r2.push(t2.body), t2._ogBody = t2.body);
        }
        let i2 = "function" == typeof (t2.headers || {}).keys ? Object.fromEntries(t2.headers) : Object.assign({}, t2.headers);
        "traceparent" in i2 && delete i2.traceparent;
        let o2 = JSON.stringify(["v3", this.fetchCacheKeyPrefix || "", e10, t2.method, i2, t2.mode, t2.redirect, t2.credentials, t2.referrer, t2.referrerPolicy, t2.integrity, t2.cache, r2]);
        {
          var s2;
          let e11 = n2.encode(o2);
          return s2 = await crypto.subtle.digest("SHA-256", e11), Array.prototype.map.call(new Uint8Array(s2), (e12) => e12.toString(16).padStart(2, "0")).join("");
        }
      }
      async get(e10, t2 = {}) {
        var r2, n2;
        let a2, i2;
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY, this.disableForTestmode || this.dev && ("fetch" !== t2.kindHint || "no-cache" === this.requestHeaders["cache-control"]))
          return null;
        e10 = this._getPathname(e10, "fetch" === t2.kindHint);
        let o2 = null, s2 = t2.revalidate, l2 = await (null == (r2 = this.cacheHandler) ? void 0 : r2.get(e10, t2));
        if ((null == l2 ? void 0 : null == (n2 = l2.value) ? void 0 : n2.kind) === "FETCH")
          return [...t2.tags || [], ...t2.softTags || []].some((e11) => {
            var t3;
            return null == (t3 = this.revalidatedTags) ? void 0 : t3.includes(e11);
          }) ? null : (s2 = s2 || l2.value.revalidate, { isStale: (Date.now() - (l2.lastModified || 0)) / 1e3 > s2, value: { kind: "FETCH", data: l2.value.data, revalidate: s2 }, revalidateAfter: Date.now() + 1e3 * s2 });
        let u2 = this.revalidateTimings.get(e9(e10));
        return (null == l2 ? void 0 : l2.lastModified) === -1 ? (a2 = -1, i2 = -31536e3) : a2 = !!(false !== (i2 = this.calculateRevalidate(e10, (null == l2 ? void 0 : l2.lastModified) || Date.now(), this.dev && "fetch" !== t2.kindHint)) && i2 < Date.now()) || void 0, l2 && (o2 = { isStale: a2, curRevalidate: u2, revalidateAfter: i2, value: l2.value }), !l2 && this.prerenderManifest.notFoundRoutes.includes(e10) && (o2 = { isStale: a2, value: null, curRevalidate: u2, revalidateAfter: i2 }, this.set(e10, o2.value, t2)), o2;
      }
      async set(e10, t2, r2) {
        if (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT && process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY, this.disableForTestmode || this.dev && !r2.fetchCache)
          return;
        let n2 = JSON.stringify(t2).length;
        if (r2.fetchCache && !this.hasCustomCacheHandler && n2 > 2097152) {
          if (this.dev)
            throw Error(`Failed to set Next.js data cache, items over 2MB can not be cached (${n2} bytes)`);
          return;
        }
        e10 = this._getPathname(e10, r2.fetchCache);
        try {
          var a2;
          void 0 === r2.revalidate || r2.fetchCache || this.revalidateTimings.set(e10, r2.revalidate), await (null == (a2 = this.cacheHandler) ? void 0 : a2.set(e10, t2, r2));
        } catch (t3) {
          console.warn("Failed to update prerender cache for", e10, t3);
        }
      }
    }
    function te(e10) {
      var t2;
      return eG({ ...e10, IncrementalCache: e5, page: "/api/hello", handler: (t2 = "/api/hello", (...e11) => {
        var r2;
        return null == (r2 = eD().getRootSpanAttributes()) || r2.set("next.route", t2), eD().trace(B.runHandler, { spanName: `executing api route (pages) ${t2}` }, () => function(e12, t3) {
          t3.status(200).json({ name: "John Doe" });
        }(...e11));
      }) });
    }
  }, 50675: (e) => {
    "use strict";
    var t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, i = {};
    function o(e2) {
      var t2;
      let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
      return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
    }
    function s(e2) {
      let t2 = /* @__PURE__ */ new Map();
      for (let r2 of e2.split(/; */)) {
        if (!r2)
          continue;
        let e3 = r2.indexOf("=");
        if (-1 === e3) {
          t2.set(r2, "true");
          continue;
        }
        let [n2, a2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
        try {
          t2.set(n2, decodeURIComponent(null != a2 ? a2 : "true"));
        } catch {
        }
      }
      return t2;
    }
    function l(e2) {
      var t2, r2;
      if (!e2)
        return;
      let [[n2, a2], ...i2] = s(e2), { domain: o2, expires: l2, httponly: d2, maxage: h2, path: p, samesite: g, secure: f, partitioned: v, priority: m } = Object.fromEntries(i2.map(([e3, t3]) => [e3.toLowerCase(), t3]));
      return function(e3) {
        let t3 = {};
        for (let r3 in e3)
          e3[r3] && (t3[r3] = e3[r3]);
        return t3;
      }({ name: n2, value: decodeURIComponent(a2), domain: o2, ...l2 && { expires: new Date(l2) }, ...d2 && { httpOnly: true }, ..."string" == typeof h2 && { maxAge: Number(h2) }, path: p, ...g && { sameSite: u.includes(t2 = (t2 = g).toLowerCase()) ? t2 : void 0 }, ...f && { secure: true }, ...m && { priority: c.includes(r2 = (r2 = m).toLowerCase()) ? r2 : void 0 }, ...v && { partitioned: true } });
    }
    ((e2, r2) => {
      for (var n2 in r2)
        t(e2, n2, { get: r2[n2], enumerable: true });
    })(i, { RequestCookies: () => d, ResponseCookies: () => h, parseCookie: () => s, parseSetCookie: () => l, stringifyCookie: () => o }), e.exports = ((e2, i2, o2, s2) => {
      if (i2 && "object" == typeof i2 || "function" == typeof i2)
        for (let l2 of n(i2))
          a.call(e2, l2) || l2 === o2 || t(e2, l2, { get: () => i2[l2], enumerable: !(s2 = r(i2, l2)) || s2.enumerable });
      return e2;
    })(t({}, "__esModule", { value: true }), i);
    var u = ["strict", "lax", "none"], c = ["low", "medium", "high"], d = class {
      constructor(e2) {
        this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
        let t2 = e2.get("cookie");
        if (t2)
          for (let [e3, r2] of s(t2))
            this._parsed.set(e3, { name: e3, value: r2 });
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      get size() {
        return this._parsed.size;
      }
      get(...e2) {
        let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
        return this._parsed.get(t2);
      }
      getAll(...e2) {
        var t2;
        let r2 = Array.from(this._parsed);
        if (!e2.length)
          return r2.map(([e3, t3]) => t3);
        let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
        return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
      }
      has(e2) {
        return this._parsed.has(e2);
      }
      set(...e2) {
        let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
        return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => o(t3)).join("; ")), this;
      }
      delete(e2) {
        let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
        return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => o(t3)).join("; ")), r2;
      }
      clear() {
        return this.delete(Array.from(this._parsed.keys())), this;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
      }
    }, h = class {
      constructor(e2) {
        var t2, r2, n2;
        this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
        let a2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
        for (let e3 of Array.isArray(a2) ? a2 : function(e4) {
          if (!e4)
            return [];
          var t3, r3, n3, a3, i2, o2 = [], s2 = 0;
          function l2() {
            for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); )
              s2 += 1;
            return s2 < e4.length;
          }
          for (; s2 < e4.length; ) {
            for (t3 = s2, i2 = false; l2(); )
              if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, l2(), a3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; )
                  s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (i2 = true, s2 = a3, o2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else
                s2 += 1;
            (!i2 || s2 >= e4.length) && o2.push(e4.substring(t3, e4.length));
          }
          return o2;
        }(a2)) {
          let t3 = l(e3);
          t3 && this._parsed.set(t3.name, t3);
        }
      }
      get(...e2) {
        let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
        return this._parsed.get(t2);
      }
      getAll(...e2) {
        var t2;
        let r2 = Array.from(this._parsed.values());
        if (!e2.length)
          return r2;
        let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
        return r2.filter((e3) => e3.name === n2);
      }
      has(e2) {
        return this._parsed.has(e2);
      }
      set(...e2) {
        let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, a2 = this._parsed;
        return a2.set(t2, function(e3 = { name: "", value: "" }) {
          return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
        }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
          for (let [, r3] of (t3.delete("set-cookie"), e3)) {
            let e4 = o(r3);
            t3.append("set-cookie", e4);
          }
        }(a2, this._headers), this;
      }
      delete(...e2) {
        let [t2, r2, n2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0].path, e2[0].domain];
        return this.set({ name: t2, path: r2, domain: n2, value: "", expires: new Date(0) });
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(o).join("; ");
      }
    };
  }, 92486: (e, t, r) => {
    (() => {
      "use strict";
      var t2 = { 491: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.ContextAPI = void 0;
        let n2 = r2(223), a2 = r2(172), i2 = r2(930), o = "context", s = new n2.NoopContextManager();
        class l {
          constructor() {
          }
          static getInstance() {
            return this._instance || (this._instance = new l()), this._instance;
          }
          setGlobalContextManager(e3) {
            return (0, a2.registerGlobal)(o, e3, i2.DiagAPI.instance());
          }
          active() {
            return this._getContextManager().active();
          }
          with(e3, t4, r3, ...n3) {
            return this._getContextManager().with(e3, t4, r3, ...n3);
          }
          bind(e3, t4) {
            return this._getContextManager().bind(e3, t4);
          }
          _getContextManager() {
            return (0, a2.getGlobal)(o) || s;
          }
          disable() {
            this._getContextManager().disable(), (0, a2.unregisterGlobal)(o, i2.DiagAPI.instance());
          }
        }
        t3.ContextAPI = l;
      }, 930: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagAPI = void 0;
        let n2 = r2(56), a2 = r2(912), i2 = r2(957), o = r2(172);
        class s {
          constructor() {
            function e3(e4) {
              return function(...t5) {
                let r3 = (0, o.getGlobal)("diag");
                if (r3)
                  return r3[e4](...t5);
              };
            }
            let t4 = this;
            t4.setLogger = (e4, r3 = { logLevel: i2.DiagLogLevel.INFO }) => {
              var n3, s2, l;
              if (e4 === t4) {
                let e5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                return t4.error(null !== (n3 = e5.stack) && void 0 !== n3 ? n3 : e5.message), false;
              }
              "number" == typeof r3 && (r3 = { logLevel: r3 });
              let u = (0, o.getGlobal)("diag"), c = (0, a2.createLogLevelDiagLogger)(null !== (s2 = r3.logLevel) && void 0 !== s2 ? s2 : i2.DiagLogLevel.INFO, e4);
              if (u && !r3.suppressOverrideMessage) {
                let e5 = null !== (l = Error().stack) && void 0 !== l ? l : "<failed to generate stacktrace>";
                u.warn(`Current logger will be overwritten from ${e5}`), c.warn(`Current logger will overwrite one already registered from ${e5}`);
              }
              return (0, o.registerGlobal)("diag", c, t4, true);
            }, t4.disable = () => {
              (0, o.unregisterGlobal)("diag", t4);
            }, t4.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t4.verbose = e3("verbose"), t4.debug = e3("debug"), t4.info = e3("info"), t4.warn = e3("warn"), t4.error = e3("error");
          }
          static instance() {
            return this._instance || (this._instance = new s()), this._instance;
          }
        }
        t3.DiagAPI = s;
      }, 653: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.MetricsAPI = void 0;
        let n2 = r2(660), a2 = r2(172), i2 = r2(930), o = "metrics";
        class s {
          constructor() {
          }
          static getInstance() {
            return this._instance || (this._instance = new s()), this._instance;
          }
          setGlobalMeterProvider(e3) {
            return (0, a2.registerGlobal)(o, e3, i2.DiagAPI.instance());
          }
          getMeterProvider() {
            return (0, a2.getGlobal)(o) || n2.NOOP_METER_PROVIDER;
          }
          getMeter(e3, t4, r3) {
            return this.getMeterProvider().getMeter(e3, t4, r3);
          }
          disable() {
            (0, a2.unregisterGlobal)(o, i2.DiagAPI.instance());
          }
        }
        t3.MetricsAPI = s;
      }, 181: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.PropagationAPI = void 0;
        let n2 = r2(172), a2 = r2(874), i2 = r2(194), o = r2(277), s = r2(369), l = r2(930), u = "propagation", c = new a2.NoopTextMapPropagator();
        class d {
          constructor() {
            this.createBaggage = s.createBaggage, this.getBaggage = o.getBaggage, this.getActiveBaggage = o.getActiveBaggage, this.setBaggage = o.setBaggage, this.deleteBaggage = o.deleteBaggage;
          }
          static getInstance() {
            return this._instance || (this._instance = new d()), this._instance;
          }
          setGlobalPropagator(e3) {
            return (0, n2.registerGlobal)(u, e3, l.DiagAPI.instance());
          }
          inject(e3, t4, r3 = i2.defaultTextMapSetter) {
            return this._getGlobalPropagator().inject(e3, t4, r3);
          }
          extract(e3, t4, r3 = i2.defaultTextMapGetter) {
            return this._getGlobalPropagator().extract(e3, t4, r3);
          }
          fields() {
            return this._getGlobalPropagator().fields();
          }
          disable() {
            (0, n2.unregisterGlobal)(u, l.DiagAPI.instance());
          }
          _getGlobalPropagator() {
            return (0, n2.getGlobal)(u) || c;
          }
        }
        t3.PropagationAPI = d;
      }, 997: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceAPI = void 0;
        let n2 = r2(172), a2 = r2(846), i2 = r2(139), o = r2(607), s = r2(930), l = "trace";
        class u {
          constructor() {
            this._proxyTracerProvider = new a2.ProxyTracerProvider(), this.wrapSpanContext = i2.wrapSpanContext, this.isSpanContextValid = i2.isSpanContextValid, this.deleteSpan = o.deleteSpan, this.getSpan = o.getSpan, this.getActiveSpan = o.getActiveSpan, this.getSpanContext = o.getSpanContext, this.setSpan = o.setSpan, this.setSpanContext = o.setSpanContext;
          }
          static getInstance() {
            return this._instance || (this._instance = new u()), this._instance;
          }
          setGlobalTracerProvider(e3) {
            let t4 = (0, n2.registerGlobal)(l, this._proxyTracerProvider, s.DiagAPI.instance());
            return t4 && this._proxyTracerProvider.setDelegate(e3), t4;
          }
          getTracerProvider() {
            return (0, n2.getGlobal)(l) || this._proxyTracerProvider;
          }
          getTracer(e3, t4) {
            return this.getTracerProvider().getTracer(e3, t4);
          }
          disable() {
            (0, n2.unregisterGlobal)(l, s.DiagAPI.instance()), this._proxyTracerProvider = new a2.ProxyTracerProvider();
          }
        }
        t3.TraceAPI = u;
      }, 277: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.deleteBaggage = t3.setBaggage = t3.getActiveBaggage = t3.getBaggage = void 0;
        let n2 = r2(491), a2 = (0, r2(780).createContextKey)("OpenTelemetry Baggage Key");
        function i2(e3) {
          return e3.getValue(a2) || void 0;
        }
        t3.getBaggage = i2, t3.getActiveBaggage = function() {
          return i2(n2.ContextAPI.getInstance().active());
        }, t3.setBaggage = function(e3, t4) {
          return e3.setValue(a2, t4);
        }, t3.deleteBaggage = function(e3) {
          return e3.deleteValue(a2);
        };
      }, 993: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.BaggageImpl = void 0;
        class r2 {
          constructor(e3) {
            this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
          }
          getEntry(e3) {
            let t4 = this._entries.get(e3);
            if (t4)
              return Object.assign({}, t4);
          }
          getAllEntries() {
            return Array.from(this._entries.entries()).map(([e3, t4]) => [e3, t4]);
          }
          setEntry(e3, t4) {
            let n2 = new r2(this._entries);
            return n2._entries.set(e3, t4), n2;
          }
          removeEntry(e3) {
            let t4 = new r2(this._entries);
            return t4._entries.delete(e3), t4;
          }
          removeEntries(...e3) {
            let t4 = new r2(this._entries);
            for (let r3 of e3)
              t4._entries.delete(r3);
            return t4;
          }
          clear() {
            return new r2();
          }
        }
        t3.BaggageImpl = r2;
      }, 830: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataSymbol = void 0, t3.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
      }, 369: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataFromString = t3.createBaggage = void 0;
        let n2 = r2(930), a2 = r2(993), i2 = r2(830), o = n2.DiagAPI.instance();
        t3.createBaggage = function(e3 = {}) {
          return new a2.BaggageImpl(new Map(Object.entries(e3)));
        }, t3.baggageEntryMetadataFromString = function(e3) {
          return "string" != typeof e3 && (o.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`), e3 = ""), { __TYPE__: i2.baggageEntryMetadataSymbol, toString: () => e3 };
        };
      }, 67: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.context = void 0;
        let n2 = r2(491);
        t3.context = n2.ContextAPI.getInstance();
      }, 223: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopContextManager = void 0;
        let n2 = r2(780);
        class a2 {
          active() {
            return n2.ROOT_CONTEXT;
          }
          with(e3, t4, r3, ...n3) {
            return t4.call(r3, ...n3);
          }
          bind(e3, t4) {
            return t4;
          }
          enable() {
            return this;
          }
          disable() {
            return this;
          }
        }
        t3.NoopContextManager = a2;
      }, 780: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.ROOT_CONTEXT = t3.createContextKey = void 0, t3.createContextKey = function(e3) {
          return Symbol.for(e3);
        };
        class r2 {
          constructor(e3) {
            let t4 = this;
            t4._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t4.getValue = (e4) => t4._currentContext.get(e4), t4.setValue = (e4, n2) => {
              let a2 = new r2(t4._currentContext);
              return a2._currentContext.set(e4, n2), a2;
            }, t4.deleteValue = (e4) => {
              let n2 = new r2(t4._currentContext);
              return n2._currentContext.delete(e4), n2;
            };
          }
        }
        t3.ROOT_CONTEXT = new r2();
      }, 506: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.diag = void 0;
        let n2 = r2(930);
        t3.diag = n2.DiagAPI.instance();
      }, 56: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagComponentLogger = void 0;
        let n2 = r2(172);
        class a2 {
          constructor(e3) {
            this._namespace = e3.namespace || "DiagComponentLogger";
          }
          debug(...e3) {
            return i2("debug", this._namespace, e3);
          }
          error(...e3) {
            return i2("error", this._namespace, e3);
          }
          info(...e3) {
            return i2("info", this._namespace, e3);
          }
          warn(...e3) {
            return i2("warn", this._namespace, e3);
          }
          verbose(...e3) {
            return i2("verbose", this._namespace, e3);
          }
        }
        function i2(e3, t4, r3) {
          let a3 = (0, n2.getGlobal)("diag");
          if (a3)
            return r3.unshift(t4), a3[e3](...r3);
        }
        t3.DiagComponentLogger = a2;
      }, 972: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagConsoleLogger = void 0;
        let r2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
        class n2 {
          constructor() {
            for (let e3 = 0; e3 < r2.length; e3++)
              this[r2[e3].n] = function(e4) {
                return function(...t4) {
                  if (console) {
                    let r3 = console[e4];
                    if ("function" != typeof r3 && (r3 = console.log), "function" == typeof r3)
                      return r3.apply(console, t4);
                  }
                };
              }(r2[e3].c);
          }
        }
        t3.DiagConsoleLogger = n2;
      }, 912: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.createLogLevelDiagLogger = void 0;
        let n2 = r2(957);
        t3.createLogLevelDiagLogger = function(e3, t4) {
          function r3(r4, n3) {
            let a2 = t4[r4];
            return "function" == typeof a2 && e3 >= n3 ? a2.bind(t4) : function() {
            };
          }
          return e3 < n2.DiagLogLevel.NONE ? e3 = n2.DiagLogLevel.NONE : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL), t4 = t4 || {}, { error: r3("error", n2.DiagLogLevel.ERROR), warn: r3("warn", n2.DiagLogLevel.WARN), info: r3("info", n2.DiagLogLevel.INFO), debug: r3("debug", n2.DiagLogLevel.DEBUG), verbose: r3("verbose", n2.DiagLogLevel.VERBOSE) };
        };
      }, 957: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagLogLevel = void 0, function(e3) {
          e3[e3.NONE = 0] = "NONE", e3[e3.ERROR = 30] = "ERROR", e3[e3.WARN = 50] = "WARN", e3[e3.INFO = 60] = "INFO", e3[e3.DEBUG = 70] = "DEBUG", e3[e3.VERBOSE = 80] = "VERBOSE", e3[e3.ALL = 9999] = "ALL";
        }(t3.DiagLogLevel || (t3.DiagLogLevel = {}));
      }, 172: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.unregisterGlobal = t3.getGlobal = t3.registerGlobal = void 0;
        let n2 = r2(200), a2 = r2(521), i2 = r2(130), o = a2.VERSION.split(".")[0], s = Symbol.for(`opentelemetry.js.api.${o}`), l = n2._globalThis;
        t3.registerGlobal = function(e3, t4, r3, n3 = false) {
          var i3;
          let o2 = l[s] = null !== (i3 = l[s]) && void 0 !== i3 ? i3 : { version: a2.VERSION };
          if (!n3 && o2[e3]) {
            let t5 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
            return r3.error(t5.stack || t5.message), false;
          }
          if (o2.version !== a2.VERSION) {
            let t5 = Error(`@opentelemetry/api: Registration of version v${o2.version} for ${e3} does not match previously registered API v${a2.VERSION}`);
            return r3.error(t5.stack || t5.message), false;
          }
          return o2[e3] = t4, r3.debug(`@opentelemetry/api: Registered a global for ${e3} v${a2.VERSION}.`), true;
        }, t3.getGlobal = function(e3) {
          var t4, r3;
          let n3 = null === (t4 = l[s]) || void 0 === t4 ? void 0 : t4.version;
          if (n3 && (0, i2.isCompatible)(n3))
            return null === (r3 = l[s]) || void 0 === r3 ? void 0 : r3[e3];
        }, t3.unregisterGlobal = function(e3, t4) {
          t4.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${a2.VERSION}.`);
          let r3 = l[s];
          r3 && delete r3[e3];
        };
      }, 130: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.isCompatible = t3._makeCompatibilityCheck = void 0;
        let n2 = r2(521), a2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
        function i2(e3) {
          let t4 = /* @__PURE__ */ new Set([e3]), r3 = /* @__PURE__ */ new Set(), n3 = e3.match(a2);
          if (!n3)
            return () => false;
          let i3 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
          if (null != i3.prerelease)
            return function(t5) {
              return t5 === e3;
            };
          function o(e4) {
            return r3.add(e4), false;
          }
          return function(e4) {
            if (t4.has(e4))
              return true;
            if (r3.has(e4))
              return false;
            let n4 = e4.match(a2);
            if (!n4)
              return o(e4);
            let s = { major: +n4[1], minor: +n4[2], patch: +n4[3], prerelease: n4[4] };
            return null != s.prerelease || i3.major !== s.major ? o(e4) : 0 === i3.major ? i3.minor === s.minor && i3.patch <= s.patch ? (t4.add(e4), true) : o(e4) : i3.minor <= s.minor ? (t4.add(e4), true) : o(e4);
          };
        }
        t3._makeCompatibilityCheck = i2, t3.isCompatible = i2(n2.VERSION);
      }, 886: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.metrics = void 0;
        let n2 = r2(653);
        t3.metrics = n2.MetricsAPI.getInstance();
      }, 901: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.ValueType = void 0, function(e3) {
          e3[e3.INT = 0] = "INT", e3[e3.DOUBLE = 1] = "DOUBLE";
        }(t3.ValueType || (t3.ValueType = {}));
      }, 102: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.createNoopMeter = t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t3.NOOP_OBSERVABLE_GAUGE_METRIC = t3.NOOP_OBSERVABLE_COUNTER_METRIC = t3.NOOP_UP_DOWN_COUNTER_METRIC = t3.NOOP_HISTOGRAM_METRIC = t3.NOOP_COUNTER_METRIC = t3.NOOP_METER = t3.NoopObservableUpDownCounterMetric = t3.NoopObservableGaugeMetric = t3.NoopObservableCounterMetric = t3.NoopObservableMetric = t3.NoopHistogramMetric = t3.NoopUpDownCounterMetric = t3.NoopCounterMetric = t3.NoopMetric = t3.NoopMeter = void 0;
        class r2 {
          constructor() {
          }
          createHistogram(e3, r3) {
            return t3.NOOP_HISTOGRAM_METRIC;
          }
          createCounter(e3, r3) {
            return t3.NOOP_COUNTER_METRIC;
          }
          createUpDownCounter(e3, r3) {
            return t3.NOOP_UP_DOWN_COUNTER_METRIC;
          }
          createObservableGauge(e3, r3) {
            return t3.NOOP_OBSERVABLE_GAUGE_METRIC;
          }
          createObservableCounter(e3, r3) {
            return t3.NOOP_OBSERVABLE_COUNTER_METRIC;
          }
          createObservableUpDownCounter(e3, r3) {
            return t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
          }
          addBatchObservableCallback(e3, t4) {
          }
          removeBatchObservableCallback(e3) {
          }
        }
        t3.NoopMeter = r2;
        class n2 {
        }
        t3.NoopMetric = n2;
        class a2 extends n2 {
          add(e3, t4) {
          }
        }
        t3.NoopCounterMetric = a2;
        class i2 extends n2 {
          add(e3, t4) {
          }
        }
        t3.NoopUpDownCounterMetric = i2;
        class o extends n2 {
          record(e3, t4) {
          }
        }
        t3.NoopHistogramMetric = o;
        class s {
          addCallback(e3) {
          }
          removeCallback(e3) {
          }
        }
        t3.NoopObservableMetric = s;
        class l extends s {
        }
        t3.NoopObservableCounterMetric = l;
        class u extends s {
        }
        t3.NoopObservableGaugeMetric = u;
        class c extends s {
        }
        t3.NoopObservableUpDownCounterMetric = c, t3.NOOP_METER = new r2(), t3.NOOP_COUNTER_METRIC = new a2(), t3.NOOP_HISTOGRAM_METRIC = new o(), t3.NOOP_UP_DOWN_COUNTER_METRIC = new i2(), t3.NOOP_OBSERVABLE_COUNTER_METRIC = new l(), t3.NOOP_OBSERVABLE_GAUGE_METRIC = new u(), t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new c(), t3.createNoopMeter = function() {
          return t3.NOOP_METER;
        };
      }, 660: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NOOP_METER_PROVIDER = t3.NoopMeterProvider = void 0;
        let n2 = r2(102);
        class a2 {
          getMeter(e3, t4, r3) {
            return n2.NOOP_METER;
          }
        }
        t3.NoopMeterProvider = a2, t3.NOOP_METER_PROVIDER = new a2();
      }, 200: function(e2, t3, r2) {
        var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
          void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
            return t4[r3];
          } });
        } : function(e3, t4, r3, n3) {
          void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
        }), a2 = this && this.__exportStar || function(e3, t4) {
          for (var r3 in e3)
            "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
        };
        Object.defineProperty(t3, "__esModule", { value: true }), a2(r2(46), t3);
      }, 651: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3._globalThis = void 0, t3._globalThis = "object" == typeof globalThis2 ? globalThis2 : r.g;
      }, 46: function(e2, t3, r2) {
        var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
          void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
            return t4[r3];
          } });
        } : function(e3, t4, r3, n3) {
          void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
        }), a2 = this && this.__exportStar || function(e3, t4) {
          for (var r3 in e3)
            "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
        };
        Object.defineProperty(t3, "__esModule", { value: true }), a2(r2(651), t3);
      }, 939: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.propagation = void 0;
        let n2 = r2(181);
        t3.propagation = n2.PropagationAPI.getInstance();
      }, 874: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTextMapPropagator = void 0;
        class r2 {
          inject(e3, t4) {
          }
          extract(e3, t4) {
            return e3;
          }
          fields() {
            return [];
          }
        }
        t3.NoopTextMapPropagator = r2;
      }, 194: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.defaultTextMapSetter = t3.defaultTextMapGetter = void 0, t3.defaultTextMapGetter = { get(e3, t4) {
          if (null != e3)
            return e3[t4];
        }, keys: (e3) => null == e3 ? [] : Object.keys(e3) }, t3.defaultTextMapSetter = { set(e3, t4, r2) {
          null != e3 && (e3[t4] = r2);
        } };
      }, 845: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.trace = void 0;
        let n2 = r2(997);
        t3.trace = n2.TraceAPI.getInstance();
      }, 403: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NonRecordingSpan = void 0;
        let n2 = r2(476);
        class a2 {
          constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
            this._spanContext = e3;
          }
          spanContext() {
            return this._spanContext;
          }
          setAttribute(e3, t4) {
            return this;
          }
          setAttributes(e3) {
            return this;
          }
          addEvent(e3, t4) {
            return this;
          }
          setStatus(e3) {
            return this;
          }
          updateName(e3) {
            return this;
          }
          end(e3) {
          }
          isRecording() {
            return false;
          }
          recordException(e3, t4) {
          }
        }
        t3.NonRecordingSpan = a2;
      }, 614: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracer = void 0;
        let n2 = r2(491), a2 = r2(607), i2 = r2(403), o = r2(139), s = n2.ContextAPI.getInstance();
        class l {
          startSpan(e3, t4, r3 = s.active()) {
            if (null == t4 ? void 0 : t4.root)
              return new i2.NonRecordingSpan();
            let n3 = r3 && (0, a2.getSpanContext)(r3);
            return "object" == typeof n3 && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && (0, o.isSpanContextValid)(n3) ? new i2.NonRecordingSpan(n3) : new i2.NonRecordingSpan();
          }
          startActiveSpan(e3, t4, r3, n3) {
            let i3, o2, l2;
            if (arguments.length < 2)
              return;
            2 == arguments.length ? l2 = t4 : 3 == arguments.length ? (i3 = t4, l2 = r3) : (i3 = t4, o2 = r3, l2 = n3);
            let u = null != o2 ? o2 : s.active(), c = this.startSpan(e3, i3, u), d = (0, a2.setSpan)(u, c);
            return s.with(d, l2, void 0, c);
          }
        }
        t3.NoopTracer = l;
      }, 124: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracerProvider = void 0;
        let n2 = r2(614);
        class a2 {
          getTracer(e3, t4, r3) {
            return new n2.NoopTracer();
          }
        }
        t3.NoopTracerProvider = a2;
      }, 125: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracer = void 0;
        let n2 = new (r2(614)).NoopTracer();
        class a2 {
          constructor(e3, t4, r3, n3) {
            this._provider = e3, this.name = t4, this.version = r3, this.options = n3;
          }
          startSpan(e3, t4, r3) {
            return this._getTracer().startSpan(e3, t4, r3);
          }
          startActiveSpan(e3, t4, r3, n3) {
            let a3 = this._getTracer();
            return Reflect.apply(a3.startActiveSpan, a3, arguments);
          }
          _getTracer() {
            if (this._delegate)
              return this._delegate;
            let e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return e3 ? (this._delegate = e3, this._delegate) : n2;
          }
        }
        t3.ProxyTracer = a2;
      }, 846: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracerProvider = void 0;
        let n2 = r2(125), a2 = new (r2(124)).NoopTracerProvider();
        class i2 {
          getTracer(e3, t4, r3) {
            var a3;
            return null !== (a3 = this.getDelegateTracer(e3, t4, r3)) && void 0 !== a3 ? a3 : new n2.ProxyTracer(this, e3, t4, r3);
          }
          getDelegate() {
            var e3;
            return null !== (e3 = this._delegate) && void 0 !== e3 ? e3 : a2;
          }
          setDelegate(e3) {
            this._delegate = e3;
          }
          getDelegateTracer(e3, t4, r3) {
            var n3;
            return null === (n3 = this._delegate) || void 0 === n3 ? void 0 : n3.getTracer(e3, t4, r3);
          }
        }
        t3.ProxyTracerProvider = i2;
      }, 996: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.SamplingDecision = void 0, function(e3) {
          e3[e3.NOT_RECORD = 0] = "NOT_RECORD", e3[e3.RECORD = 1] = "RECORD", e3[e3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
        }(t3.SamplingDecision || (t3.SamplingDecision = {}));
      }, 607: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.getSpanContext = t3.setSpanContext = t3.deleteSpan = t3.setSpan = t3.getActiveSpan = t3.getSpan = void 0;
        let n2 = r2(780), a2 = r2(403), i2 = r2(491), o = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
        function s(e3) {
          return e3.getValue(o) || void 0;
        }
        function l(e3, t4) {
          return e3.setValue(o, t4);
        }
        t3.getSpan = s, t3.getActiveSpan = function() {
          return s(i2.ContextAPI.getInstance().active());
        }, t3.setSpan = l, t3.deleteSpan = function(e3) {
          return e3.deleteValue(o);
        }, t3.setSpanContext = function(e3, t4) {
          return l(e3, new a2.NonRecordingSpan(t4));
        }, t3.getSpanContext = function(e3) {
          var t4;
          return null === (t4 = s(e3)) || void 0 === t4 ? void 0 : t4.spanContext();
        };
      }, 325: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceStateImpl = void 0;
        let n2 = r2(564);
        class a2 {
          constructor(e3) {
            this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
          }
          set(e3, t4) {
            let r3 = this._clone();
            return r3._internalState.has(e3) && r3._internalState.delete(e3), r3._internalState.set(e3, t4), r3;
          }
          unset(e3) {
            let t4 = this._clone();
            return t4._internalState.delete(e3), t4;
          }
          get(e3) {
            return this._internalState.get(e3);
          }
          serialize() {
            return this._keys().reduce((e3, t4) => (e3.push(t4 + "=" + this.get(t4)), e3), []).join(",");
          }
          _parse(e3) {
            !(e3.length > 512) && (this._internalState = e3.split(",").reverse().reduce((e4, t4) => {
              let r3 = t4.trim(), a3 = r3.indexOf("=");
              if (-1 !== a3) {
                let i2 = r3.slice(0, a3), o = r3.slice(a3 + 1, t4.length);
                (0, n2.validateKey)(i2) && (0, n2.validateValue)(o) && e4.set(i2, o);
              }
              return e4;
            }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
          }
          _keys() {
            return Array.from(this._internalState.keys()).reverse();
          }
          _clone() {
            let e3 = new a2();
            return e3._internalState = new Map(this._internalState), e3;
          }
        }
        t3.TraceStateImpl = a2;
      }, 564: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.validateValue = t3.validateKey = void 0;
        let r2 = "[_0-9a-z-*/]", n2 = `[a-z]${r2}{0,255}`, a2 = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`, i2 = RegExp(`^(?:${n2}|${a2})$`), o = /^[ -~]{0,255}[!-~]$/, s = /,|=/;
        t3.validateKey = function(e3) {
          return i2.test(e3);
        }, t3.validateValue = function(e3) {
          return o.test(e3) && !s.test(e3);
        };
      }, 98: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.createTraceState = void 0;
        let n2 = r2(325);
        t3.createTraceState = function(e3) {
          return new n2.TraceStateImpl(e3);
        };
      }, 476: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.INVALID_SPAN_CONTEXT = t3.INVALID_TRACEID = t3.INVALID_SPANID = void 0;
        let n2 = r2(475);
        t3.INVALID_SPANID = "0000000000000000", t3.INVALID_TRACEID = "00000000000000000000000000000000", t3.INVALID_SPAN_CONTEXT = { traceId: t3.INVALID_TRACEID, spanId: t3.INVALID_SPANID, traceFlags: n2.TraceFlags.NONE };
      }, 357: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanKind = void 0, function(e3) {
          e3[e3.INTERNAL = 0] = "INTERNAL", e3[e3.SERVER = 1] = "SERVER", e3[e3.CLIENT = 2] = "CLIENT", e3[e3.PRODUCER = 3] = "PRODUCER", e3[e3.CONSUMER = 4] = "CONSUMER";
        }(t3.SpanKind || (t3.SpanKind = {}));
      }, 139: (e2, t3, r2) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.wrapSpanContext = t3.isSpanContextValid = t3.isValidSpanId = t3.isValidTraceId = void 0;
        let n2 = r2(476), a2 = r2(403), i2 = /^([0-9a-f]{32})$/i, o = /^[0-9a-f]{16}$/i;
        function s(e3) {
          return i2.test(e3) && e3 !== n2.INVALID_TRACEID;
        }
        function l(e3) {
          return o.test(e3) && e3 !== n2.INVALID_SPANID;
        }
        t3.isValidTraceId = s, t3.isValidSpanId = l, t3.isSpanContextValid = function(e3) {
          return s(e3.traceId) && l(e3.spanId);
        }, t3.wrapSpanContext = function(e3) {
          return new a2.NonRecordingSpan(e3);
        };
      }, 847: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanStatusCode = void 0, function(e3) {
          e3[e3.UNSET = 0] = "UNSET", e3[e3.OK = 1] = "OK", e3[e3.ERROR = 2] = "ERROR";
        }(t3.SpanStatusCode || (t3.SpanStatusCode = {}));
      }, 475: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceFlags = void 0, function(e3) {
          e3[e3.NONE = 0] = "NONE", e3[e3.SAMPLED = 1] = "SAMPLED";
        }(t3.TraceFlags || (t3.TraceFlags = {}));
      }, 521: (e2, t3) => {
        Object.defineProperty(t3, "__esModule", { value: true }), t3.VERSION = void 0, t3.VERSION = "1.6.0";
      } }, n = {};
      function a(e2) {
        var r2 = n[e2];
        if (void 0 !== r2)
          return r2.exports;
        var i2 = n[e2] = { exports: {} }, o = true;
        try {
          t2[e2].call(i2.exports, i2, i2.exports, a), o = false;
        } finally {
          o && delete n[e2];
        }
        return i2.exports;
      }
      a.ab = "//";
      var i = {};
      (() => {
        Object.defineProperty(i, "__esModule", { value: true }), i.trace = i.propagation = i.metrics = i.diag = i.context = i.INVALID_SPAN_CONTEXT = i.INVALID_TRACEID = i.INVALID_SPANID = i.isValidSpanId = i.isValidTraceId = i.isSpanContextValid = i.createTraceState = i.TraceFlags = i.SpanStatusCode = i.SpanKind = i.SamplingDecision = i.ProxyTracerProvider = i.ProxyTracer = i.defaultTextMapSetter = i.defaultTextMapGetter = i.ValueType = i.createNoopMeter = i.DiagLogLevel = i.DiagConsoleLogger = i.ROOT_CONTEXT = i.createContextKey = i.baggageEntryMetadataFromString = void 0;
        var e2 = a(369);
        Object.defineProperty(i, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
          return e2.baggageEntryMetadataFromString;
        } });
        var t3 = a(780);
        Object.defineProperty(i, "createContextKey", { enumerable: true, get: function() {
          return t3.createContextKey;
        } }), Object.defineProperty(i, "ROOT_CONTEXT", { enumerable: true, get: function() {
          return t3.ROOT_CONTEXT;
        } });
        var r2 = a(972);
        Object.defineProperty(i, "DiagConsoleLogger", { enumerable: true, get: function() {
          return r2.DiagConsoleLogger;
        } });
        var n2 = a(957);
        Object.defineProperty(i, "DiagLogLevel", { enumerable: true, get: function() {
          return n2.DiagLogLevel;
        } });
        var o = a(102);
        Object.defineProperty(i, "createNoopMeter", { enumerable: true, get: function() {
          return o.createNoopMeter;
        } });
        var s = a(901);
        Object.defineProperty(i, "ValueType", { enumerable: true, get: function() {
          return s.ValueType;
        } });
        var l = a(194);
        Object.defineProperty(i, "defaultTextMapGetter", { enumerable: true, get: function() {
          return l.defaultTextMapGetter;
        } }), Object.defineProperty(i, "defaultTextMapSetter", { enumerable: true, get: function() {
          return l.defaultTextMapSetter;
        } });
        var u = a(125);
        Object.defineProperty(i, "ProxyTracer", { enumerable: true, get: function() {
          return u.ProxyTracer;
        } });
        var c = a(846);
        Object.defineProperty(i, "ProxyTracerProvider", { enumerable: true, get: function() {
          return c.ProxyTracerProvider;
        } });
        var d = a(996);
        Object.defineProperty(i, "SamplingDecision", { enumerable: true, get: function() {
          return d.SamplingDecision;
        } });
        var h = a(357);
        Object.defineProperty(i, "SpanKind", { enumerable: true, get: function() {
          return h.SpanKind;
        } });
        var p = a(847);
        Object.defineProperty(i, "SpanStatusCode", { enumerable: true, get: function() {
          return p.SpanStatusCode;
        } });
        var g = a(475);
        Object.defineProperty(i, "TraceFlags", { enumerable: true, get: function() {
          return g.TraceFlags;
        } });
        var f = a(98);
        Object.defineProperty(i, "createTraceState", { enumerable: true, get: function() {
          return f.createTraceState;
        } });
        var v = a(139);
        Object.defineProperty(i, "isSpanContextValid", { enumerable: true, get: function() {
          return v.isSpanContextValid;
        } }), Object.defineProperty(i, "isValidTraceId", { enumerable: true, get: function() {
          return v.isValidTraceId;
        } }), Object.defineProperty(i, "isValidSpanId", { enumerable: true, get: function() {
          return v.isValidSpanId;
        } });
        var m = a(476);
        Object.defineProperty(i, "INVALID_SPANID", { enumerable: true, get: function() {
          return m.INVALID_SPANID;
        } }), Object.defineProperty(i, "INVALID_TRACEID", { enumerable: true, get: function() {
          return m.INVALID_TRACEID;
        } }), Object.defineProperty(i, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
          return m.INVALID_SPAN_CONTEXT;
        } });
        let y = a(67);
        Object.defineProperty(i, "context", { enumerable: true, get: function() {
          return y.context;
        } });
        let _ = a(506);
        Object.defineProperty(i, "diag", { enumerable: true, get: function() {
          return _.diag;
        } });
        let b = a(886);
        Object.defineProperty(i, "metrics", { enumerable: true, get: function() {
          return b.metrics;
        } });
        let w = a(939);
        Object.defineProperty(i, "propagation", { enumerable: true, get: function() {
          return w.propagation;
        } });
        let S = a(845);
        Object.defineProperty(i, "trace", { enumerable: true, get: function() {
          return S.trace;
        } }), i.default = { context: y.context, diag: _.diag, metrics: b.metrics, propagation: w.propagation, trace: S.trace };
      })(), e.exports = i;
    })();
  }, 22642: (e) => {
    (() => {
      "use strict";
      "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//");
      var t = {};
      (() => {
        t.parse = function(t2, r2) {
          if ("string" != typeof t2)
            throw TypeError("argument str must be a string");
          for (var a2 = {}, i = t2.split(n), o = (r2 || {}).decode || e2, s = 0; s < i.length; s++) {
            var l = i[s], u = l.indexOf("=");
            if (!(u < 0)) {
              var c = l.substr(0, u).trim(), d = l.substr(++u, l.length).trim();
              '"' == d[0] && (d = d.slice(1, -1)), void 0 == a2[c] && (a2[c] = function(e3, t3) {
                try {
                  return t3(e3);
                } catch (t4) {
                  return e3;
                }
              }(d, o));
            }
          }
          return a2;
        }, t.serialize = function(e3, t2, n2) {
          var i = n2 || {}, o = i.encode || r;
          if ("function" != typeof o)
            throw TypeError("option encode is invalid");
          if (!a.test(e3))
            throw TypeError("argument name is invalid");
          var s = o(t2);
          if (s && !a.test(s))
            throw TypeError("argument val is invalid");
          var l = e3 + "=" + s;
          if (null != i.maxAge) {
            var u = i.maxAge - 0;
            if (isNaN(u) || !isFinite(u))
              throw TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (i.domain) {
            if (!a.test(i.domain))
              throw TypeError("option domain is invalid");
            l += "; Domain=" + i.domain;
          }
          if (i.path) {
            if (!a.test(i.path))
              throw TypeError("option path is invalid");
            l += "; Path=" + i.path;
          }
          if (i.expires) {
            if ("function" != typeof i.expires.toUTCString)
              throw TypeError("option expires is invalid");
            l += "; Expires=" + i.expires.toUTCString();
          }
          if (i.httpOnly && (l += "; HttpOnly"), i.secure && (l += "; Secure"), i.sameSite)
            switch ("string" == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
              case true:
              case "strict":
                l += "; SameSite=Strict";
                break;
              case "lax":
                l += "; SameSite=Lax";
                break;
              case "none":
                l += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return l;
        };
        var e2 = decodeURIComponent, r = encodeURIComponent, n = /; */, a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      })(), e.exports = t;
    })();
  }, 43334: (e) => {
    (() => {
      "use strict";
      var t = { 806: (e2, t2, r2) => {
        let n2 = r2(190), a2 = Symbol("max"), i = Symbol("length"), o = Symbol("lengthCalculator"), s = Symbol("allowStale"), l = Symbol("maxAge"), u = Symbol("dispose"), c = Symbol("noDisposeOnSet"), d = Symbol("lruList"), h = Symbol("cache"), p = Symbol("updateAgeOnGet"), g = () => 1;
        class f {
          constructor(e3) {
            if ("number" == typeof e3 && (e3 = { max: e3 }), e3 || (e3 = {}), e3.max && ("number" != typeof e3.max || e3.max < 0))
              throw TypeError("max must be a non-negative number");
            this[a2] = e3.max || 1 / 0;
            let t3 = e3.length || g;
            if (this[o] = "function" != typeof t3 ? g : t3, this[s] = e3.stale || false, e3.maxAge && "number" != typeof e3.maxAge)
              throw TypeError("maxAge must be a number");
            this[l] = e3.maxAge || 0, this[u] = e3.dispose, this[c] = e3.noDisposeOnSet || false, this[p] = e3.updateAgeOnGet || false, this.reset();
          }
          set max(e3) {
            if ("number" != typeof e3 || e3 < 0)
              throw TypeError("max must be a non-negative number");
            this[a2] = e3 || 1 / 0, y(this);
          }
          get max() {
            return this[a2];
          }
          set allowStale(e3) {
            this[s] = !!e3;
          }
          get allowStale() {
            return this[s];
          }
          set maxAge(e3) {
            if ("number" != typeof e3)
              throw TypeError("maxAge must be a non-negative number");
            this[l] = e3, y(this);
          }
          get maxAge() {
            return this[l];
          }
          set lengthCalculator(e3) {
            "function" != typeof e3 && (e3 = g), e3 !== this[o] && (this[o] = e3, this[i] = 0, this[d].forEach((e4) => {
              e4.length = this[o](e4.value, e4.key), this[i] += e4.length;
            })), y(this);
          }
          get lengthCalculator() {
            return this[o];
          }
          get length() {
            return this[i];
          }
          get itemCount() {
            return this[d].length;
          }
          rforEach(e3, t3) {
            t3 = t3 || this;
            for (let r3 = this[d].tail; null !== r3; ) {
              let n3 = r3.prev;
              w(this, e3, r3, t3), r3 = n3;
            }
          }
          forEach(e3, t3) {
            t3 = t3 || this;
            for (let r3 = this[d].head; null !== r3; ) {
              let n3 = r3.next;
              w(this, e3, r3, t3), r3 = n3;
            }
          }
          keys() {
            return this[d].toArray().map((e3) => e3.key);
          }
          values() {
            return this[d].toArray().map((e3) => e3.value);
          }
          reset() {
            this[u] && this[d] && this[d].length && this[d].forEach((e3) => this[u](e3.key, e3.value)), this[h] = /* @__PURE__ */ new Map(), this[d] = new n2(), this[i] = 0;
          }
          dump() {
            return this[d].map((e3) => !m(this, e3) && { k: e3.key, v: e3.value, e: e3.now + (e3.maxAge || 0) }).toArray().filter((e3) => e3);
          }
          dumpLru() {
            return this[d];
          }
          set(e3, t3, r3) {
            if ((r3 = r3 || this[l]) && "number" != typeof r3)
              throw TypeError("maxAge must be a number");
            let n3 = r3 ? Date.now() : 0, s2 = this[o](t3, e3);
            if (this[h].has(e3)) {
              if (s2 > this[a2])
                return _(this, this[h].get(e3)), false;
              let o2 = this[h].get(e3).value;
              return this[u] && !this[c] && this[u](e3, o2.value), o2.now = n3, o2.maxAge = r3, o2.value = t3, this[i] += s2 - o2.length, o2.length = s2, this.get(e3), y(this), true;
            }
            let p2 = new b(e3, t3, s2, n3, r3);
            return p2.length > this[a2] ? (this[u] && this[u](e3, t3), false) : (this[i] += p2.length, this[d].unshift(p2), this[h].set(e3, this[d].head), y(this), true);
          }
          has(e3) {
            return !!this[h].has(e3) && !m(this, this[h].get(e3).value);
          }
          get(e3) {
            return v(this, e3, true);
          }
          peek(e3) {
            return v(this, e3, false);
          }
          pop() {
            let e3 = this[d].tail;
            return e3 ? (_(this, e3), e3.value) : null;
          }
          del(e3) {
            _(this, this[h].get(e3));
          }
          load(e3) {
            this.reset();
            let t3 = Date.now();
            for (let r3 = e3.length - 1; r3 >= 0; r3--) {
              let n3 = e3[r3], a3 = n3.e || 0;
              if (0 === a3)
                this.set(n3.k, n3.v);
              else {
                let e4 = a3 - t3;
                e4 > 0 && this.set(n3.k, n3.v, e4);
              }
            }
          }
          prune() {
            this[h].forEach((e3, t3) => v(this, t3, false));
          }
        }
        let v = (e3, t3, r3) => {
          let n3 = e3[h].get(t3);
          if (n3) {
            let t4 = n3.value;
            if (m(e3, t4)) {
              if (_(e3, n3), !e3[s])
                return;
            } else
              r3 && (e3[p] && (n3.value.now = Date.now()), e3[d].unshiftNode(n3));
            return t4.value;
          }
        }, m = (e3, t3) => {
          if (!t3 || !t3.maxAge && !e3[l])
            return false;
          let r3 = Date.now() - t3.now;
          return t3.maxAge ? r3 > t3.maxAge : e3[l] && r3 > e3[l];
        }, y = (e3) => {
          if (e3[i] > e3[a2])
            for (let t3 = e3[d].tail; e3[i] > e3[a2] && null !== t3; ) {
              let r3 = t3.prev;
              _(e3, t3), t3 = r3;
            }
        }, _ = (e3, t3) => {
          if (t3) {
            let r3 = t3.value;
            e3[u] && e3[u](r3.key, r3.value), e3[i] -= r3.length, e3[h].delete(r3.key), e3[d].removeNode(t3);
          }
        };
        class b {
          constructor(e3, t3, r3, n3, a3) {
            this.key = e3, this.value = t3, this.length = r3, this.now = n3, this.maxAge = a3 || 0;
          }
        }
        let w = (e3, t3, r3, n3) => {
          let a3 = r3.value;
          m(e3, a3) && (_(e3, r3), e3[s] || (a3 = void 0)), a3 && t3.call(n3, a3.value, a3.key, e3);
        };
        e2.exports = f;
      }, 76: (e2) => {
        e2.exports = function(e3) {
          e3.prototype[Symbol.iterator] = function* () {
            for (let e4 = this.head; e4; e4 = e4.next)
              yield e4.value;
          };
        };
      }, 190: (e2, t2, r2) => {
        function n2(e3) {
          var t3 = this;
          if (t3 instanceof n2 || (t3 = new n2()), t3.tail = null, t3.head = null, t3.length = 0, e3 && "function" == typeof e3.forEach)
            e3.forEach(function(e4) {
              t3.push(e4);
            });
          else if (arguments.length > 0)
            for (var r3 = 0, a3 = arguments.length; r3 < a3; r3++)
              t3.push(arguments[r3]);
          return t3;
        }
        function a2(e3, t3, r3, n3) {
          if (!(this instanceof a2))
            return new a2(e3, t3, r3, n3);
          this.list = n3, this.value = e3, t3 ? (t3.next = this, this.prev = t3) : this.prev = null, r3 ? (r3.prev = this, this.next = r3) : this.next = null;
        }
        e2.exports = n2, n2.Node = a2, n2.create = n2, n2.prototype.removeNode = function(e3) {
          if (e3.list !== this)
            throw Error("removing node which does not belong to this list");
          var t3 = e3.next, r3 = e3.prev;
          return t3 && (t3.prev = r3), r3 && (r3.next = t3), e3 === this.head && (this.head = t3), e3 === this.tail && (this.tail = r3), e3.list.length--, e3.next = null, e3.prev = null, e3.list = null, t3;
        }, n2.prototype.unshiftNode = function(e3) {
          if (e3 !== this.head) {
            e3.list && e3.list.removeNode(e3);
            var t3 = this.head;
            e3.list = this, e3.next = t3, t3 && (t3.prev = e3), this.head = e3, this.tail || (this.tail = e3), this.length++;
          }
        }, n2.prototype.pushNode = function(e3) {
          if (e3 !== this.tail) {
            e3.list && e3.list.removeNode(e3);
            var t3 = this.tail;
            e3.list = this, e3.prev = t3, t3 && (t3.next = e3), this.tail = e3, this.head || (this.head = e3), this.length++;
          }
        }, n2.prototype.push = function() {
          for (var e3, t3 = 0, r3 = arguments.length; t3 < r3; t3++)
            e3 = arguments[t3], this.tail = new a2(e3, this.tail, null, this), this.head || (this.head = this.tail), this.length++;
          return this.length;
        }, n2.prototype.unshift = function() {
          for (var e3, t3 = 0, r3 = arguments.length; t3 < r3; t3++)
            e3 = arguments[t3], this.head = new a2(e3, null, this.head, this), this.tail || (this.tail = this.head), this.length++;
          return this.length;
        }, n2.prototype.pop = function() {
          if (this.tail) {
            var e3 = this.tail.value;
            return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e3;
          }
        }, n2.prototype.shift = function() {
          if (this.head) {
            var e3 = this.head.value;
            return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e3;
          }
        }, n2.prototype.forEach = function(e3, t3) {
          t3 = t3 || this;
          for (var r3 = this.head, n3 = 0; null !== r3; n3++)
            e3.call(t3, r3.value, n3, this), r3 = r3.next;
        }, n2.prototype.forEachReverse = function(e3, t3) {
          t3 = t3 || this;
          for (var r3 = this.tail, n3 = this.length - 1; null !== r3; n3--)
            e3.call(t3, r3.value, n3, this), r3 = r3.prev;
        }, n2.prototype.get = function(e3) {
          for (var t3 = 0, r3 = this.head; null !== r3 && t3 < e3; t3++)
            r3 = r3.next;
          if (t3 === e3 && null !== r3)
            return r3.value;
        }, n2.prototype.getReverse = function(e3) {
          for (var t3 = 0, r3 = this.tail; null !== r3 && t3 < e3; t3++)
            r3 = r3.prev;
          if (t3 === e3 && null !== r3)
            return r3.value;
        }, n2.prototype.map = function(e3, t3) {
          t3 = t3 || this;
          for (var r3 = new n2(), a3 = this.head; null !== a3; )
            r3.push(e3.call(t3, a3.value, this)), a3 = a3.next;
          return r3;
        }, n2.prototype.mapReverse = function(e3, t3) {
          t3 = t3 || this;
          for (var r3 = new n2(), a3 = this.tail; null !== a3; )
            r3.push(e3.call(t3, a3.value, this)), a3 = a3.prev;
          return r3;
        }, n2.prototype.reduce = function(e3, t3) {
          var r3, n3 = this.head;
          if (arguments.length > 1)
            r3 = t3;
          else if (this.head)
            n3 = this.head.next, r3 = this.head.value;
          else
            throw TypeError("Reduce of empty list with no initial value");
          for (var a3 = 0; null !== n3; a3++)
            r3 = e3(r3, n3.value, a3), n3 = n3.next;
          return r3;
        }, n2.prototype.reduceReverse = function(e3, t3) {
          var r3, n3 = this.tail;
          if (arguments.length > 1)
            r3 = t3;
          else if (this.tail)
            n3 = this.tail.prev, r3 = this.tail.value;
          else
            throw TypeError("Reduce of empty list with no initial value");
          for (var a3 = this.length - 1; null !== n3; a3--)
            r3 = e3(r3, n3.value, a3), n3 = n3.prev;
          return r3;
        }, n2.prototype.toArray = function() {
          for (var e3 = Array(this.length), t3 = 0, r3 = this.head; null !== r3; t3++)
            e3[t3] = r3.value, r3 = r3.next;
          return e3;
        }, n2.prototype.toArrayReverse = function() {
          for (var e3 = Array(this.length), t3 = 0, r3 = this.tail; null !== r3; t3++)
            e3[t3] = r3.value, r3 = r3.prev;
          return e3;
        }, n2.prototype.slice = function(e3, t3) {
          (t3 = t3 || this.length) < 0 && (t3 += this.length), (e3 = e3 || 0) < 0 && (e3 += this.length);
          var r3 = new n2();
          if (t3 < e3 || t3 < 0)
            return r3;
          e3 < 0 && (e3 = 0), t3 > this.length && (t3 = this.length);
          for (var a3 = 0, i = this.head; null !== i && a3 < e3; a3++)
            i = i.next;
          for (; null !== i && a3 < t3; a3++, i = i.next)
            r3.push(i.value);
          return r3;
        }, n2.prototype.sliceReverse = function(e3, t3) {
          (t3 = t3 || this.length) < 0 && (t3 += this.length), (e3 = e3 || 0) < 0 && (e3 += this.length);
          var r3 = new n2();
          if (t3 < e3 || t3 < 0)
            return r3;
          e3 < 0 && (e3 = 0), t3 > this.length && (t3 = this.length);
          for (var a3 = this.length, i = this.tail; null !== i && a3 > t3; a3--)
            i = i.prev;
          for (; null !== i && a3 > e3; a3--, i = i.prev)
            r3.push(i.value);
          return r3;
        }, n2.prototype.splice = function(e3, t3) {
          e3 > this.length && (e3 = this.length - 1), e3 < 0 && (e3 = this.length + e3);
          for (var r3 = 0, n3 = this.head; null !== n3 && r3 < e3; r3++)
            n3 = n3.next;
          for (var i = [], r3 = 0; n3 && r3 < t3; r3++)
            i.push(n3.value), n3 = this.removeNode(n3);
          null === n3 && (n3 = this.tail), n3 !== this.head && n3 !== this.tail && (n3 = n3.prev);
          for (var r3 = 2; r3 < arguments.length; r3++)
            n3 = function(e4, t4, r4) {
              var n4 = t4 === e4.head ? new a2(r4, null, t4, e4) : new a2(r4, t4, t4.next, e4);
              return null === n4.next && (e4.tail = n4), null === n4.prev && (e4.head = n4), e4.length++, n4;
            }(this, n3, arguments[r3]);
          return i;
        }, n2.prototype.reverse = function() {
          for (var e3 = this.head, t3 = this.tail, r3 = e3; null !== r3; r3 = r3.prev) {
            var n3 = r3.prev;
            r3.prev = r3.next, r3.next = n3;
          }
          return this.head = t3, this.tail = e3, this;
        };
        try {
          r2(76)(n2);
        } catch (e3) {
        }
      } }, r = {};
      function n(e2) {
        var a2 = r[e2];
        if (void 0 !== a2)
          return a2.exports;
        var i = r[e2] = { exports: {} }, o = true;
        try {
          t[e2](i, i.exports, n), o = false;
        } finally {
          o && delete r[e2];
        }
        return i.exports;
      }
      n.ab = "//";
      var a = n(806);
      e.exports = a;
    })();
  }, 14006: (e) => {
    !function() {
      "use strict";
      var t = { 114: function(e2) {
        function t2(e3) {
          if ("string" != typeof e3)
            throw TypeError("Path must be a string. Received " + JSON.stringify(e3));
        }
        function r2(e3, t3) {
          for (var r3, n3 = "", a2 = 0, i = -1, o = 0, s = 0; s <= e3.length; ++s) {
            if (s < e3.length)
              r3 = e3.charCodeAt(s);
            else if (47 === r3)
              break;
            else
              r3 = 47;
            if (47 === r3) {
              if (i === s - 1 || 1 === o)
                ;
              else if (i !== s - 1 && 2 === o) {
                if (n3.length < 2 || 2 !== a2 || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
                  if (n3.length > 2) {
                    var l = n3.lastIndexOf("/");
                    if (l !== n3.length - 1) {
                      -1 === l ? (n3 = "", a2 = 0) : a2 = (n3 = n3.slice(0, l)).length - 1 - n3.lastIndexOf("/"), i = s, o = 0;
                      continue;
                    }
                  } else if (2 === n3.length || 1 === n3.length) {
                    n3 = "", a2 = 0, i = s, o = 0;
                    continue;
                  }
                }
                t3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", a2 = 2);
              } else
                n3.length > 0 ? n3 += "/" + e3.slice(i + 1, s) : n3 = e3.slice(i + 1, s), a2 = s - i - 1;
              i = s, o = 0;
            } else
              46 === r3 && -1 !== o ? ++o : o = -1;
          }
          return n3;
        }
        var n2 = { resolve: function() {
          for (var e3, n3, a2 = "", i = false, o = arguments.length - 1; o >= -1 && !i; o--)
            o >= 0 ? n3 = arguments[o] : (void 0 === e3 && (e3 = ""), n3 = e3), t2(n3), 0 !== n3.length && (a2 = n3 + "/" + a2, i = 47 === n3.charCodeAt(0));
          return (a2 = r2(a2, !i), i) ? a2.length > 0 ? "/" + a2 : "/" : a2.length > 0 ? a2 : ".";
        }, normalize: function(e3) {
          if (t2(e3), 0 === e3.length)
            return ".";
          var n3 = 47 === e3.charCodeAt(0), a2 = 47 === e3.charCodeAt(e3.length - 1);
          return (0 !== (e3 = r2(e3, !n3)).length || n3 || (e3 = "."), e3.length > 0 && a2 && (e3 += "/"), n3) ? "/" + e3 : e3;
        }, isAbsolute: function(e3) {
          return t2(e3), e3.length > 0 && 47 === e3.charCodeAt(0);
        }, join: function() {
          if (0 == arguments.length)
            return ".";
          for (var e3, r3 = 0; r3 < arguments.length; ++r3) {
            var a2 = arguments[r3];
            t2(a2), a2.length > 0 && (void 0 === e3 ? e3 = a2 : e3 += "/" + a2);
          }
          return void 0 === e3 ? "." : n2.normalize(e3);
        }, relative: function(e3, r3) {
          if (t2(e3), t2(r3), e3 === r3 || (e3 = n2.resolve(e3)) === (r3 = n2.resolve(r3)))
            return "";
          for (var a2 = 1; a2 < e3.length && 47 === e3.charCodeAt(a2); ++a2)
            ;
          for (var i = e3.length, o = i - a2, s = 1; s < r3.length && 47 === r3.charCodeAt(s); ++s)
            ;
          for (var l = r3.length - s, u = o < l ? o : l, c = -1, d = 0; d <= u; ++d) {
            if (d === u) {
              if (l > u) {
                if (47 === r3.charCodeAt(s + d))
                  return r3.slice(s + d + 1);
                if (0 === d)
                  return r3.slice(s + d);
              } else
                o > u && (47 === e3.charCodeAt(a2 + d) ? c = d : 0 === d && (c = 0));
              break;
            }
            var h = e3.charCodeAt(a2 + d);
            if (h !== r3.charCodeAt(s + d))
              break;
            47 === h && (c = d);
          }
          var p = "";
          for (d = a2 + c + 1; d <= i; ++d)
            (d === i || 47 === e3.charCodeAt(d)) && (0 === p.length ? p += ".." : p += "/..");
          return p.length > 0 ? p + r3.slice(s + c) : (s += c, 47 === r3.charCodeAt(s) && ++s, r3.slice(s));
        }, _makeLong: function(e3) {
          return e3;
        }, dirname: function(e3) {
          if (t2(e3), 0 === e3.length)
            return ".";
          for (var r3 = e3.charCodeAt(0), n3 = 47 === r3, a2 = -1, i = true, o = e3.length - 1; o >= 1; --o)
            if (47 === (r3 = e3.charCodeAt(o))) {
              if (!i) {
                a2 = o;
                break;
              }
            } else
              i = false;
          return -1 === a2 ? n3 ? "/" : "." : n3 && 1 === a2 ? "//" : e3.slice(0, a2);
        }, basename: function(e3, r3) {
          if (void 0 !== r3 && "string" != typeof r3)
            throw TypeError('"ext" argument must be a string');
          t2(e3);
          var n3, a2 = 0, i = -1, o = true;
          if (void 0 !== r3 && r3.length > 0 && r3.length <= e3.length) {
            if (r3.length === e3.length && r3 === e3)
              return "";
            var s = r3.length - 1, l = -1;
            for (n3 = e3.length - 1; n3 >= 0; --n3) {
              var u = e3.charCodeAt(n3);
              if (47 === u) {
                if (!o) {
                  a2 = n3 + 1;
                  break;
                }
              } else
                -1 === l && (o = false, l = n3 + 1), s >= 0 && (u === r3.charCodeAt(s) ? -1 == --s && (i = n3) : (s = -1, i = l));
            }
            return a2 === i ? i = l : -1 === i && (i = e3.length), e3.slice(a2, i);
          }
          for (n3 = e3.length - 1; n3 >= 0; --n3)
            if (47 === e3.charCodeAt(n3)) {
              if (!o) {
                a2 = n3 + 1;
                break;
              }
            } else
              -1 === i && (o = false, i = n3 + 1);
          return -1 === i ? "" : e3.slice(a2, i);
        }, extname: function(e3) {
          t2(e3);
          for (var r3 = -1, n3 = 0, a2 = -1, i = true, o = 0, s = e3.length - 1; s >= 0; --s) {
            var l = e3.charCodeAt(s);
            if (47 === l) {
              if (!i) {
                n3 = s + 1;
                break;
              }
              continue;
            }
            -1 === a2 && (i = false, a2 = s + 1), 46 === l ? -1 === r3 ? r3 = s : 1 !== o && (o = 1) : -1 !== r3 && (o = -1);
          }
          return -1 === r3 || -1 === a2 || 0 === o || 1 === o && r3 === a2 - 1 && r3 === n3 + 1 ? "" : e3.slice(r3, a2);
        }, format: function(e3) {
          var t3, r3;
          if (null === e3 || "object" != typeof e3)
            throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e3);
          return t3 = e3.dir || e3.root, r3 = e3.base || (e3.name || "") + (e3.ext || ""), t3 ? t3 === e3.root ? t3 + r3 : t3 + "/" + r3 : r3;
        }, parse: function(e3) {
          t2(e3);
          var r3, n3 = { root: "", dir: "", base: "", ext: "", name: "" };
          if (0 === e3.length)
            return n3;
          var a2 = e3.charCodeAt(0), i = 47 === a2;
          i ? (n3.root = "/", r3 = 1) : r3 = 0;
          for (var o = -1, s = 0, l = -1, u = true, c = e3.length - 1, d = 0; c >= r3; --c) {
            if (47 === (a2 = e3.charCodeAt(c))) {
              if (!u) {
                s = c + 1;
                break;
              }
              continue;
            }
            -1 === l && (u = false, l = c + 1), 46 === a2 ? -1 === o ? o = c : 1 !== d && (d = 1) : -1 !== o && (d = -1);
          }
          return -1 === o || -1 === l || 0 === d || 1 === d && o === l - 1 && o === s + 1 ? -1 !== l && (0 === s && i ? n3.base = n3.name = e3.slice(1, l) : n3.base = n3.name = e3.slice(s, l)) : (0 === s && i ? (n3.name = e3.slice(1, o), n3.base = e3.slice(1, l)) : (n3.name = e3.slice(s, o), n3.base = e3.slice(s, l)), n3.ext = e3.slice(o, l)), s > 0 ? n3.dir = e3.slice(0, s - 1) : i && (n3.dir = "/"), n3;
        }, sep: "/", delimiter: ":", win32: null, posix: null };
        n2.posix = n2, e2.exports = n2;
      } }, r = {};
      function n(e2) {
        var a2 = r[e2];
        if (void 0 !== a2)
          return a2.exports;
        var i = r[e2] = { exports: {} }, o = true;
        try {
          t[e2](i, i.exports, n), o = false;
        } finally {
          o && delete r[e2];
        }
        return i.exports;
      }
      n.ab = "//";
      var a = n(114);
      e.exports = a;
    }();
  }, 81483: (e, t, r) => {
    "use strict";
    let n;
    n = r(14006), e.exports = n;
  }, 28844: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
      for (var r2 in t2)
        Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }(t, { getTestReqInfo: function() {
      return o;
    }, withRequest: function() {
      return i;
    } });
    let n = new (r(2067)).AsyncLocalStorage();
    function a(e2, t2) {
      let r2 = t2.header(e2, "next-test-proxy-port");
      if (r2)
        return { url: t2.url(e2), proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
    }
    function i(e2, t2, r2) {
      let i2 = a(e2, t2);
      return i2 ? n.run(i2, r2) : r2();
    }
    function o(e2, t2) {
      return n.getStore() || (e2 && t2 ? a(e2, t2) : void 0);
    }
  }, 66349: (e, t, r) => {
    "use strict";
    var n = r(26195).Buffer;
    Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
      for (var r2 in t2)
        Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }(t, { handleFetch: function() {
      return s;
    }, interceptFetch: function() {
      return l;
    }, reader: function() {
      return i;
    } });
    let a = r(28844), i = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
    async function o(e2, t2) {
      let { url: r2, method: a2, headers: i2, body: o2, cache: s2, credentials: l2, integrity: u, mode: c, redirect: d, referrer: h, referrerPolicy: p } = t2;
      return { testData: e2, api: "fetch", request: { url: r2, method: a2, headers: [...Array.from(i2), ["next-test-stack", function() {
        let e3 = (Error().stack ?? "").split("\n");
        for (let t3 = 1; t3 < e3.length; t3++)
          if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
        return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
      }()]], body: o2 ? n.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: l2, integrity: u, mode: c, redirect: d, referrer: h, referrerPolicy: p } };
    }
    async function s(e2, t2) {
      let r2 = (0, a.getTestReqInfo)(t2, i);
      if (!r2)
        return e2(t2);
      let { testData: s2, proxyPort: l2 } = r2, u = await o(s2, t2), c = await e2(`http://localhost:${l2}`, { method: "POST", body: JSON.stringify(u), next: { internal: true } });
      if (!c.ok)
        throw Error(`Proxy request failed: ${c.status}`);
      let d = await c.json(), { api: h } = d;
      switch (h) {
        case "continue":
          return e2(t2);
        case "abort":
        case "unhandled":
          throw Error(`Proxy request aborted [${t2.method} ${t2.url}]`);
      }
      return function(e3) {
        let { status: t3, headers: r3, body: a2 } = e3.response;
        return new Response(a2 ? n.from(a2, "base64") : null, { status: t3, headers: new Headers(r3) });
      }(d);
    }
    function l(e2) {
      return r.g.fetch = function(t2, r2) {
        var n2;
        return (null == r2 ? void 0 : null == (n2 = r2.next) ? void 0 : n2.internal) ? e2(t2, r2) : s(e2, new Request(t2, r2));
      }, () => {
        r.g.fetch = e2;
      };
    }
  }, 8074: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
      for (var r2 in t2)
        Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }(t, { interceptTestApis: function() {
      return i;
    }, wrapRequestHandler: function() {
      return o;
    } });
    let n = r(28844), a = r(66349);
    function i() {
      return (0, a.interceptFetch)(r.g.fetch);
    }
    function o(e2) {
      return (t2, r2) => (0, n.withRequest)(t2, a.reader, () => e2(t2, r2));
    }
  } }, (e) => {
    var t = e(e.s = 78195);
    (globalThis2._ENTRIES = "undefined" == typeof globalThis2._ENTRIES ? {} : globalThis2._ENTRIES)["middleware_pages/api/hello"] = t;
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
    { "name": "pages/api/hello", "staticRoutes": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }], "dynamicRoutes": [{ "page": "/[shortCode]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPshortCode": "nxtPshortCode" }, "namedRegex": "^/(?<nxtPshortCode>[^/]+?)(?:/)?$" }], "nextConfig": { "basePath": "" } }
  );
})(proxy, proxy, proxy);
export {
  stdin_default as default
};
