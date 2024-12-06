// <stdin>
import { __getNamedExports as __getNamedExports_0 } from "../../../../__next-on-fleek-dist__/webpack/b12263b14085e367839627720eb766f5.js";
import { __getNamedExports as __getNamedExports_1 } from "../../../../__next-on-fleek-dist__/webpack/79eddb9279962b952beace5d53ea27b1.js";
var proxy = globalThis.__nextOnPagesRoutesIsolation.getProxyFor("/api/redirect/[shortCode]");
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
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[295], { 2067: __chunk_2067, 26195: __chunk_26195, 93805: (t, e, r) => {
    "use strict";
    let n, i, s, a, o, l, u, c, h, f, d, p, g, m, y, A;
    r.r(e), r.d(e, { default: () => aV });
    var b = {};
    r.r(b), r.d(b, { dQ: () => iK, ci: () => iL, bytesToNumberBE: () => iH, ty: () => iQ, eV: () => iz, n$: () => iY, ql: () => iJ, hexToBytes: () => iG, tL: () => ij, S5: () => iV, FF: () => iW }), r(33078);
    var w = r(48084), E = r(93277), v = r(19278);
    async function x(t10) {
      let e10 = Object.keys(t10);
      return (await Promise.all(e10.map((e11) => Promise.resolve(t10[e11])))).reduce((t11, r10, n10) => (t11[e10[n10]] = r10, t11), {});
    }
    function P(t10, e10, r10) {
      for (let n10 in e10) {
        let i10 = e10[n10], s10 = r10 ? r10[n10] : null;
        s10 && function(t11, e11, r11) {
          let n11 = e11.split("|").map((t12) => t12.trim());
          for (let r12 = 0; r12 < n11.length; r12++)
            switch (e11) {
              case "any":
                return;
              case "bigint":
              case "boolean":
              case "number":
              case "string":
                if (typeof t11 === e11)
                  return;
            }
          let i11 = Error(`invalid value for type ${e11}`);
          throw i11.code = "INVALID_ARGUMENT", i11.argument = `value.${r11}`, i11.value = t11, i11;
        }(i10, s10, n10), Object.defineProperty(t10, n10, { enumerable: true, value: i10, writable: false });
      }
    }
    function N(t10) {
      if (null == t10)
        return "null";
      if (Array.isArray(t10))
        return "[ " + t10.map(N).join(", ") + " ]";
      if (t10 instanceof Uint8Array) {
        let e10 = "0123456789abcdef", r10 = "0x";
        for (let n10 = 0; n10 < t10.length; n10++)
          r10 += e10[t10[n10] >> 4] + e10[15 & t10[n10]];
        return r10;
      }
      if ("object" == typeof t10 && "function" == typeof t10.toJSON)
        return N(t10.toJSON());
      switch (typeof t10) {
        case "boolean":
        case "symbol":
        case "number":
          return t10.toString();
        case "bigint":
          return BigInt(t10).toString();
        case "string":
          return JSON.stringify(t10);
        case "object": {
          let e10 = Object.keys(t10);
          return e10.sort(), "{ " + e10.map((e11) => `${N(e11)}: ${N(t10[e11])}`).join(", ") + " }";
        }
      }
      return "[ COULD NOT SERIALIZE ]";
    }
    function k(t10, e10) {
      return t10 && t10.code === e10;
    }
    function B(t10) {
      return k(t10, "CALL_EXCEPTION");
    }
    function C(t10, e10, r10) {
      let n10, i10 = t10;
      {
        let n11 = [];
        if (r10) {
          if ("message" in r10 || "code" in r10 || "name" in r10)
            throw Error(`value will overwrite populated values: ${N(r10)}`);
          for (let t11 in r10) {
            if ("shortMessage" === t11)
              continue;
            let e11 = r10[t11];
            n11.push(t11 + "=" + N(e11));
          }
        }
        n11.push(`code=${e10}`), n11.push("version=6.13.4"), n11.length && (t10 += " (" + n11.join(", ") + ")");
      }
      switch (e10) {
        case "INVALID_ARGUMENT":
          n10 = TypeError(t10);
          break;
        case "NUMERIC_FAULT":
        case "BUFFER_OVERRUN":
          n10 = RangeError(t10);
          break;
        default:
          n10 = Error(t10);
      }
      return P(n10, { code: e10 }), r10 && Object.assign(n10, r10), null == n10.shortMessage && P(n10, { shortMessage: i10 }), n10;
    }
    function I(t10, e10, r10, n10) {
      if (!t10)
        throw C(e10, r10, n10);
    }
    function O(t10, e10, r10, n10) {
      I(t10, e10, "INVALID_ARGUMENT", { argument: r10, value: n10 });
    }
    function R(t10, e10, r10) {
      null == r10 && (r10 = ""), r10 && (r10 = ": " + r10), I(t10 >= e10, "missing arguemnt" + r10, "MISSING_ARGUMENT", { count: t10, expectedCount: e10 }), I(t10 <= e10, "too many arguments" + r10, "UNEXPECTED_ARGUMENT", { count: t10, expectedCount: e10 });
    }
    let T = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t10, e10) => {
      try {
        if ("test" !== "test".normalize(e10))
          throw Error("bad");
        if ("NFD" === e10) {
          let t11 = String.fromCharCode(233).normalize("NFD"), e11 = String.fromCharCode(101, 769);
          if (t11 !== e11)
            throw Error("broken");
        }
        t10.push(e10);
      } catch (t11) {
      }
      return t10;
    }, []);
    function S(t10, e10, r10) {
      if (null == r10 && (r10 = ""), t10 !== e10) {
        let t11 = r10, e11 = "new";
        r10 && (t11 += ".", e11 += " " + r10), I(false, `private constructor; use ${t11}from* methods`, "UNSUPPORTED_OPERATION", { operation: e11 });
      }
    }
    function U(t10, e10, r10) {
      if (t10 instanceof Uint8Array)
        return r10 ? new Uint8Array(t10) : t10;
      if ("string" == typeof t10 && t10.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
        let e11 = new Uint8Array((t10.length - 2) / 2), r11 = 2;
        for (let n10 = 0; n10 < e11.length; n10++)
          e11[n10] = parseInt(t10.substring(r11, r11 + 2), 16), r11 += 2;
        return e11;
      }
      O(false, "invalid BytesLike value", e10 || "value", t10);
    }
    function F(t10, e10) {
      return U(t10, e10, false);
    }
    function D(t10, e10) {
      return U(t10, e10, true);
    }
    function L(t10, e10) {
      return !!("string" == typeof t10 && t10.match(/^0x[0-9A-Fa-f]*$/)) && ("number" != typeof e10 || t10.length === 2 + 2 * e10) && (true !== e10 || t10.length % 2 == 0);
    }
    function M(t10) {
      return L(t10, true) || t10 instanceof Uint8Array;
    }
    let G = "0123456789abcdef";
    function H(t10) {
      let e10 = F(t10), r10 = "0x";
      for (let t11 = 0; t11 < e10.length; t11++) {
        let n10 = e10[t11];
        r10 += G[(240 & n10) >> 4] + G[15 & n10];
      }
      return r10;
    }
    function Q(t10) {
      return "0x" + t10.map((t11) => H(t11).substring(2)).join("");
    }
    function j(t10) {
      return L(t10, true) ? (t10.length - 2) / 2 : F(t10).length;
    }
    function V(t10, e10, r10) {
      let n10 = F(t10);
      return null != r10 && r10 > n10.length && I(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", { buffer: n10, length: n10.length, offset: r10 }), H(n10.slice(null == e10 ? 0 : e10, null == r10 ? n10.length : r10));
    }
    function J(t10, e10, r10) {
      let n10 = F(t10);
      I(e10 >= n10.length, "padding exceeds data length", "BUFFER_OVERRUN", { buffer: new Uint8Array(n10), length: e10, offset: e10 + 1 });
      let i10 = new Uint8Array(e10);
      return i10.fill(0), r10 ? i10.set(n10, e10 - n10.length) : i10.set(n10, 0), H(i10);
    }
    function z(t10, e10) {
      return J(t10, e10, true);
    }
    let K = BigInt(0), q = BigInt(1);
    function Z(t10, e10) {
      let r10 = _(t10, "value"), n10 = BigInt(tt(e10, "width")), i10 = q << n10 - q;
      return r10 < K ? (I((r10 = -r10) <= i10, "too low", "NUMERIC_FAULT", { operation: "toTwos", fault: "overflow", value: t10 }), (~r10 & (q << n10) - q) + q) : (I(r10 < i10, "too high", "NUMERIC_FAULT", { operation: "toTwos", fault: "overflow", value: t10 }), r10);
    }
    function Y(t10, e10) {
      return W(t10, "value") & (q << BigInt(tt(e10, "bits"))) - q;
    }
    function _(t10, e10) {
      switch (typeof t10) {
        case "bigint":
          return t10;
        case "number":
          return O(Number.isInteger(t10), "underflow", e10 || "value", t10), O(t10 >= -9007199254740991 && t10 <= 9007199254740991, "overflow", e10 || "value", t10), BigInt(t10);
        case "string":
          try {
            if ("" === t10)
              throw Error("empty string");
            if ("-" === t10[0] && "-" !== t10[1])
              return -BigInt(t10.substring(1));
            return BigInt(t10);
          } catch (r10) {
            O(false, `invalid BigNumberish string: ${r10.message}`, e10 || "value", t10);
          }
      }
      O(false, "invalid BigNumberish value", e10 || "value", t10);
    }
    function W(t10, e10) {
      let r10 = _(t10, e10);
      return I(r10 >= K, "unsigned value cannot be negative", "NUMERIC_FAULT", { fault: "overflow", operation: "getUint", value: t10 }), r10;
    }
    let X = "0123456789abcdef";
    function $(t10) {
      if (t10 instanceof Uint8Array) {
        let e10 = "0x0";
        for (let r10 of t10)
          e10 += X[r10 >> 4] + X[15 & r10];
        return BigInt(e10);
      }
      return _(t10);
    }
    function tt(t10, e10) {
      switch (typeof t10) {
        case "bigint":
          return O(t10 >= -9007199254740991 && t10 <= 9007199254740991, "overflow", e10 || "value", t10), Number(t10);
        case "number":
          return O(Number.isInteger(t10), "underflow", e10 || "value", t10), O(t10 >= -9007199254740991 && t10 <= 9007199254740991, "overflow", e10 || "value", t10), t10;
        case "string":
          try {
            if ("" === t10)
              throw Error("empty string");
            return tt(BigInt(t10), e10);
          } catch (r10) {
            O(false, `invalid numeric string: ${r10.message}`, e10 || "value", t10);
          }
      }
      O(false, "invalid numeric value", e10 || "value", t10);
    }
    function te(t10, e10) {
      let r10 = W(t10, "value").toString(16);
      if (null == e10)
        r10.length % 2 && (r10 = "0" + r10);
      else {
        let n10 = tt(e10, "width");
        for (I(2 * n10 >= r10.length, `value exceeds width (${n10} bytes)`, "NUMERIC_FAULT", { operation: "toBeHex", fault: "overflow", value: t10 }); r10.length < 2 * n10; )
          r10 = "0" + r10;
      }
      return "0x" + r10;
    }
    function tr(t10) {
      let e10 = W(t10, "value");
      if (e10 === K)
        return new Uint8Array([]);
      let r10 = e10.toString(16);
      r10.length % 2 && (r10 = "0" + r10);
      let n10 = new Uint8Array(r10.length / 2);
      for (let t11 = 0; t11 < n10.length; t11++) {
        let e11 = 2 * t11;
        n10[t11] = parseInt(r10.substring(e11, e11 + 2), 16);
      }
      return n10;
    }
    function tn(t10) {
      let e10 = H(M(t10) ? t10 : tr(t10)).substring(2);
      for (; e10.startsWith("0"); )
        e10 = e10.substring(1);
      return "" === e10 && (e10 = "0"), "0x" + e10;
    }
    let ti = new Uint8Array(32), ts = ["then"], ta = {}, to = /* @__PURE__ */ new WeakMap();
    function tl(t10) {
      return to.get(t10);
    }
    function tu(t10, e10) {
      let r10 = Error(`deferred error during ABI decoding triggered accessing ${t10}`);
      throw r10.error = e10, r10;
    }
    class tc extends Array {
      #t;
      constructor(...t10) {
        var e10, r10;
        let n10 = t10[0], i10 = t10[1], s10 = (t10[2] || []).slice(), a2 = true;
        n10 !== ta && (i10 = t10, s10 = [], a2 = false), super(i10.length), i10.forEach((t11, e11) => {
          this[e11] = t11;
        });
        let o2 = s10.reduce((t11, e11) => ("string" == typeof e11 && t11.set(e11, (t11.get(e11) || 0) + 1), t11), /* @__PURE__ */ new Map());
        if (e10 = Object.freeze(i10.map((t11, e11) => {
          let r11 = s10[e11];
          return null != r11 && 1 === o2.get(r11) ? r11 : null;
        })), to.set(this, e10), this.#t = [], null == this.#t && this.#t, !a2)
          return;
        Object.freeze(this);
        let l2 = new Proxy(this, { get: (t11, e11, r11) => {
          if ("string" == typeof e11) {
            if (e11.match(/^[0-9]+$/)) {
              let r12 = tt(e11, "%index");
              if (r12 < 0 || r12 >= this.length)
                throw RangeError("out of result range");
              let n12 = t11[r12];
              return n12 instanceof Error && tu(`index ${r12}`, n12), n12;
            }
            if (ts.indexOf(e11) >= 0)
              return Reflect.get(t11, e11, r11);
            let n11 = t11[e11];
            if (n11 instanceof Function)
              return function(...e12) {
                return n11.apply(this === r11 ? t11 : this, e12);
              };
            if (!(e11 in t11))
              return t11.getValue.apply(this === r11 ? t11 : this, [e11]);
          }
          return Reflect.get(t11, e11, r11);
        } });
        return r10 = tl(this), to.set(l2, r10), l2;
      }
      toArray(t10) {
        let e10 = [];
        return this.forEach((r10, n10) => {
          r10 instanceof Error && tu(`index ${n10}`, r10), t10 && r10 instanceof tc && (r10 = r10.toArray(t10)), e10.push(r10);
        }), e10;
      }
      toObject(t10) {
        let e10 = tl(this);
        return e10.reduce((r10, n10, i10) => (I(null != n10, `value at index ${i10} unnamed`, "UNSUPPORTED_OPERATION", { operation: "toObject()" }), function t11(e11, r11, n11) {
          return e11.indexOf(null) >= 0 ? r11.map((e12, r12) => e12 instanceof tc ? t11(tl(e12), e12, n11) : e12) : e11.reduce((e12, i11, s10) => {
            let a2 = r11.getValue(i11);
            return i11 in e12 || (n11 && a2 instanceof tc && (a2 = t11(tl(a2), a2, n11)), e12[i11] = a2), e12;
          }, {});
        }(e10, this, t10)), {});
      }
      slice(t10, e10) {
        null == t10 && (t10 = 0), t10 < 0 && (t10 += this.length) < 0 && (t10 = 0), null == e10 && (e10 = this.length), e10 < 0 && (e10 += this.length) < 0 && (e10 = 0), e10 > this.length && (e10 = this.length);
        let r10 = tl(this), n10 = [], i10 = [];
        for (let s10 = t10; s10 < e10; s10++)
          n10.push(this[s10]), i10.push(r10[s10]);
        return new tc(ta, n10, i10);
      }
      filter(t10, e10) {
        let r10 = tl(this), n10 = [], i10 = [];
        for (let s10 = 0; s10 < this.length; s10++) {
          let a2 = this[s10];
          a2 instanceof Error && tu(`index ${s10}`, a2), t10.call(e10, a2, s10, this) && (n10.push(a2), i10.push(r10[s10]));
        }
        return new tc(ta, n10, i10);
      }
      map(t10, e10) {
        let r10 = [];
        for (let n10 = 0; n10 < this.length; n10++) {
          let i10 = this[n10];
          i10 instanceof Error && tu(`index ${n10}`, i10), r10.push(t10.call(e10, i10, n10, this));
        }
        return r10;
      }
      getValue(t10) {
        let e10 = tl(this).indexOf(t10);
        if (-1 === e10)
          return;
        let r10 = this[e10];
        return r10 instanceof Error && tu(`property ${JSON.stringify(t10)}`, r10.error), r10;
      }
      static fromItems(t10, e10) {
        return new tc(ta, t10, e10);
      }
    }
    function th(t10) {
      let e10 = tr(t10);
      return I(e10.length <= 32, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: e10, length: 32, offset: e10.length }), 32 !== e10.length && (e10 = D(Q([ti.slice(e10.length % 32), e10]))), e10;
    }
    class tf {
      name;
      type;
      localName;
      dynamic;
      constructor(t10, e10, r10, n10) {
        P(this, { name: t10, type: e10, localName: r10, dynamic: n10 }, { name: "string", type: "string", localName: "string", dynamic: "boolean" });
      }
      _throwError(t10, e10) {
        O(false, t10, this.localName, e10);
      }
    }
    class td {
      #e;
      #r;
      constructor() {
        this.#e = [], this.#r = 0;
      }
      get data() {
        return Q(this.#e);
      }
      get length() {
        return this.#r;
      }
      #n(t10) {
        return this.#e.push(t10), this.#r += t10.length, t10.length;
      }
      appendWriter(t10) {
        return this.#n(D(t10.data));
      }
      writeBytes(t10) {
        let e10 = D(t10), r10 = e10.length % 32;
        return r10 && (e10 = D(Q([e10, ti.slice(r10)]))), this.#n(e10);
      }
      writeValue(t10) {
        return this.#n(th(t10));
      }
      writeUpdatableValue() {
        let t10 = this.#e.length;
        return this.#e.push(ti), this.#r += 32, (e10) => {
          this.#e[t10] = th(e10);
        };
      }
    }
    class tp {
      allowLoose;
      #e;
      #i;
      #s;
      #a;
      #o;
      constructor(t10, e10, r10) {
        P(this, { allowLoose: !!e10 }), this.#e = D(t10), this.#s = 0, this.#a = null, this.#o = null != r10 ? r10 : 1024, this.#i = 0;
      }
      get data() {
        return H(this.#e);
      }
      get dataLength() {
        return this.#e.length;
      }
      get consumed() {
        return this.#i;
      }
      get bytes() {
        return new Uint8Array(this.#e);
      }
      #l(t10) {
        if (this.#a)
          return this.#a.#l(t10);
        this.#s += t10, I(this.#o < 1 || this.#s <= this.#o * this.dataLength, `compressed ABI data exceeds inflation ratio of ${this.#o} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", { buffer: D(this.#e), offset: this.#i, length: t10, info: { bytesRead: this.#s, dataLength: this.dataLength } });
      }
      #u(t10, e10, r10) {
        let n10 = 32 * Math.ceil(e10 / 32);
        return this.#i + n10 > this.#e.length && (this.allowLoose && r10 && this.#i + e10 <= this.#e.length ? n10 = e10 : I(false, "data out-of-bounds", "BUFFER_OVERRUN", { buffer: D(this.#e), length: this.#e.length, offset: this.#i + n10 })), this.#e.slice(this.#i, this.#i + n10);
      }
      subReader(t10) {
        let e10 = new tp(this.#e.slice(this.#i + t10), this.allowLoose, this.#o);
        return e10.#a = this, e10;
      }
      readBytes(t10, e10) {
        let r10 = this.#u(0, t10, !!e10);
        return this.#l(t10), this.#i += r10.length, r10.slice(0, t10);
      }
      readValue() {
        return $(this.readBytes(32));
      }
      readIndex() {
        return tt($(this.readBytes(32)));
      }
    }
    function tg(t10) {
      if (!Number.isSafeInteger(t10) || t10 < 0)
        throw Error(`Wrong positive integer: ${t10}`);
    }
    function tm(t10, ...e10) {
      if (!(t10 instanceof Uint8Array))
        throw Error("Expected Uint8Array");
      if (e10.length > 0 && !e10.includes(t10.length))
        throw Error(`Expected Uint8Array of length ${e10}, not of length=${t10.length}`);
    }
    function ty(t10, e10 = true) {
      if (t10.destroyed)
        throw Error("Hash instance has been destroyed");
      if (e10 && t10.finished)
        throw Error("Hash#digest() has already been called");
    }
    function tA(t10, e10) {
      tm(t10);
      let r10 = e10.outputLen;
      if (t10.length < r10)
        throw Error(`digestInto() expects output buffer of length at least ${r10}`);
    }
    let tb = BigInt(4294967296 - 1), tw = BigInt(32);
    function tE(t10, e10 = false) {
      let r10 = new Uint32Array(t10.length), n10 = new Uint32Array(t10.length);
      for (let i10 = 0; i10 < t10.length; i10++) {
        let { h: s10, l: a2 } = function(t11, e11 = false) {
          return e11 ? { h: Number(t11 & tb), l: Number(t11 >> tw & tb) } : { h: 0 | Number(t11 >> tw & tb), l: 0 | Number(t11 & tb) };
        }(t10[i10], e10);
        [r10[i10], n10[i10]] = [s10, a2];
      }
      return [r10, n10];
    }
    let tv = (t10, e10, r10) => t10 << r10 | e10 >>> 32 - r10, tx = (t10, e10, r10) => e10 << r10 | t10 >>> 32 - r10, tP = (t10, e10, r10) => e10 << r10 - 32 | t10 >>> 64 - r10, tN = (t10, e10, r10) => t10 << r10 - 32 | e10 >>> 64 - r10, tk = { split: tE, shrSH: (t10, e10, r10) => t10 >>> r10, shrSL: (t10, e10, r10) => t10 << 32 - r10 | e10 >>> r10, rotrSH: (t10, e10, r10) => t10 >>> r10 | e10 << 32 - r10, rotrSL: (t10, e10, r10) => t10 << 32 - r10 | e10 >>> r10, rotrBH: (t10, e10, r10) => t10 << 64 - r10 | e10 >>> r10 - 32, rotrBL: (t10, e10, r10) => t10 >>> r10 - 32 | e10 << 64 - r10, add: function(t10, e10, r10, n10) {
      let i10 = (e10 >>> 0) + (n10 >>> 0);
      return { h: t10 + r10 + (i10 / 4294967296 | 0) | 0, l: 0 | i10 };
    }, add3L: (t10, e10, r10) => (t10 >>> 0) + (e10 >>> 0) + (r10 >>> 0), add3H: (t10, e10, r10, n10) => e10 + r10 + n10 + (t10 / 4294967296 | 0) | 0, add4L: (t10, e10, r10, n10) => (t10 >>> 0) + (e10 >>> 0) + (r10 >>> 0) + (n10 >>> 0), add4H: (t10, e10, r10, n10, i10) => e10 + r10 + n10 + i10 + (t10 / 4294967296 | 0) | 0, add5H: (t10, e10, r10, n10, i10, s10) => e10 + r10 + n10 + i10 + s10 + (t10 / 4294967296 | 0) | 0, add5L: (t10, e10, r10, n10, i10) => (t10 >>> 0) + (e10 >>> 0) + (r10 >>> 0) + (n10 >>> 0) + (i10 >>> 0) }, tB = "object" == typeof globalThis2 && "crypto" in globalThis2 ? globalThis2.crypto : void 0, tC = (t10) => t10 instanceof Uint8Array, tI = (t10) => new Uint32Array(t10.buffer, t10.byteOffset, Math.floor(t10.byteLength / 4)), tO = (t10) => new DataView(t10.buffer, t10.byteOffset, t10.byteLength), tR = (t10, e10) => t10 << 32 - e10 | t10 >>> e10;
    if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
      throw Error("Non little-endian hardware is not supported");
    function tT(t10) {
      if ("string" == typeof t10 && (t10 = function(t11) {
        if ("string" != typeof t11)
          throw Error(`utf8ToBytes expected string, got ${typeof t11}`);
        return new Uint8Array(new TextEncoder().encode(t11));
      }(t10)), !tC(t10))
        throw Error(`expected Uint8Array, got ${typeof t10}`);
      return t10;
    }
    class tS {
      clone() {
        return this._cloneInto();
      }
    }
    function tU(t10) {
      let e10 = (e11) => t10().update(tT(e11)).digest(), r10 = t10();
      return e10.outputLen = r10.outputLen, e10.blockLen = r10.blockLen, e10.create = () => t10(), e10;
    }
    function tF(t10 = 32) {
      if (tB && "function" == typeof tB.getRandomValues)
        return tB.getRandomValues(new Uint8Array(t10));
      throw Error("crypto.getRandomValues must be defined");
    }
    let [tD, tL, tM] = [[], [], []], tG = BigInt(0), tH = BigInt(1), tQ = BigInt(2), tj = BigInt(7), tV = BigInt(256), tJ = BigInt(113);
    for (let t10 = 0, e10 = tH, r10 = 1, n10 = 0; t10 < 24; t10++) {
      [r10, n10] = [n10, (2 * r10 + 3 * n10) % 5], tD.push(2 * (5 * n10 + r10)), tL.push((t10 + 1) * (t10 + 2) / 2 % 64);
      let i10 = tG;
      for (let t11 = 0; t11 < 7; t11++)
        (e10 = (e10 << tH ^ (e10 >> tj) * tJ) % tV) & tQ && (i10 ^= tH << (tH << BigInt(t11)) - tH);
      tM.push(i10);
    }
    let [tz, tK] = tE(tM, true), tq = (t10, e10, r10) => r10 > 32 ? tP(t10, e10, r10) : tv(t10, e10, r10), tZ = (t10, e10, r10) => r10 > 32 ? tN(t10, e10, r10) : tx(t10, e10, r10);
    class tY extends tS {
      constructor(t10, e10, r10, n10 = false, i10 = 24) {
        if (super(), this.blockLen = t10, this.suffix = e10, this.outputLen = r10, this.enableXOF = n10, this.rounds = i10, this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, tg(r10), 0 >= this.blockLen || this.blockLen >= 200)
          throw Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200), this.state32 = tI(this.state);
      }
      keccak() {
        !function(t10, e10 = 24) {
          let r10 = new Uint32Array(10);
          for (let n10 = 24 - e10; n10 < 24; n10++) {
            for (let e12 = 0; e12 < 10; e12++)
              r10[e12] = t10[e12] ^ t10[e12 + 10] ^ t10[e12 + 20] ^ t10[e12 + 30] ^ t10[e12 + 40];
            for (let e12 = 0; e12 < 10; e12 += 2) {
              let n11 = (e12 + 8) % 10, i11 = (e12 + 2) % 10, s10 = r10[i11], a2 = r10[i11 + 1], o2 = tq(s10, a2, 1) ^ r10[n11], l2 = tZ(s10, a2, 1) ^ r10[n11 + 1];
              for (let r11 = 0; r11 < 50; r11 += 10)
                t10[e12 + r11] ^= o2, t10[e12 + r11 + 1] ^= l2;
            }
            let e11 = t10[2], i10 = t10[3];
            for (let r11 = 0; r11 < 24; r11++) {
              let n11 = tL[r11], s10 = tq(e11, i10, n11), a2 = tZ(e11, i10, n11), o2 = tD[r11];
              e11 = t10[o2], i10 = t10[o2 + 1], t10[o2] = s10, t10[o2 + 1] = a2;
            }
            for (let e12 = 0; e12 < 50; e12 += 10) {
              for (let n11 = 0; n11 < 10; n11++)
                r10[n11] = t10[e12 + n11];
              for (let n11 = 0; n11 < 10; n11++)
                t10[e12 + n11] ^= ~r10[(n11 + 2) % 10] & r10[(n11 + 4) % 10];
            }
            t10[0] ^= tz[n10], t10[1] ^= tK[n10];
          }
          r10.fill(0);
        }(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
      }
      update(t10) {
        ty(this);
        let { blockLen: e10, state: r10 } = this, n10 = (t10 = tT(t10)).length;
        for (let i10 = 0; i10 < n10; ) {
          let s10 = Math.min(e10 - this.pos, n10 - i10);
          for (let e11 = 0; e11 < s10; e11++)
            r10[this.pos++] ^= t10[i10++];
          this.pos === e10 && this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        let { state: t10, suffix: e10, pos: r10, blockLen: n10 } = this;
        t10[r10] ^= e10, (128 & e10) != 0 && r10 === n10 - 1 && this.keccak(), t10[n10 - 1] ^= 128, this.keccak();
      }
      writeInto(t10) {
        ty(this, false), tm(t10), this.finish();
        let e10 = this.state, { blockLen: r10 } = this;
        for (let n10 = 0, i10 = t10.length; n10 < i10; ) {
          this.posOut >= r10 && this.keccak();
          let s10 = Math.min(r10 - this.posOut, i10 - n10);
          t10.set(e10.subarray(this.posOut, this.posOut + s10), n10), this.posOut += s10, n10 += s10;
        }
        return t10;
      }
      xofInto(t10) {
        if (!this.enableXOF)
          throw Error("XOF is not possible for this instance");
        return this.writeInto(t10);
      }
      xof(t10) {
        return tg(t10), this.xofInto(new Uint8Array(t10));
      }
      digestInto(t10) {
        if (tA(t10, this), this.finished)
          throw Error("digest() was already called");
        return this.writeInto(t10), this.destroy(), t10;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true, this.state.fill(0);
      }
      _cloneInto(t10) {
        let { blockLen: e10, suffix: r10, outputLen: n10, rounds: i10, enableXOF: s10 } = this;
        return t10 || (t10 = new tY(e10, r10, n10, s10, i10)), t10.state32.set(this.state32), t10.pos = this.pos, t10.posOut = this.posOut, t10.finished = this.finished, t10.rounds = i10, t10.suffix = r10, t10.outputLen = n10, t10.enableXOF = s10, t10.destroyed = this.destroyed, t10;
      }
    }
    let t_ = tU(() => new tY(136, 1, 32)), tW = false, tX = function(t10) {
      return t_(t10);
    }, t$ = tX;
    function t0(t10) {
      let e10 = F(t10, "data");
      return H(t$(e10));
    }
    t0._ = tX, t0.lock = function() {
      tW = true;
    }, t0.register = function(t10) {
      if (tW)
        throw TypeError("keccak256 is locked");
      t$ = t10;
    }, Object.freeze(t0);
    let t1 = BigInt(0), t2 = BigInt(36);
    function t3(t10) {
      let e10 = (t10 = t10.toLowerCase()).substring(2).split(""), r10 = new Uint8Array(40);
      for (let t11 = 0; t11 < 40; t11++)
        r10[t11] = e10[t11].charCodeAt(0);
      let n10 = F(t0(r10));
      for (let t11 = 0; t11 < 40; t11 += 2)
        n10[t11 >> 1] >> 4 >= 8 && (e10[t11] = e10[t11].toUpperCase()), (15 & n10[t11 >> 1]) >= 8 && (e10[t11 + 1] = e10[t11 + 1].toUpperCase());
      return "0x" + e10.join("");
    }
    let t4 = {};
    for (let t10 = 0; t10 < 10; t10++)
      t4[String(t10)] = String(t10);
    for (let t10 = 0; t10 < 26; t10++)
      t4[String.fromCharCode(65 + t10)] = String(10 + t10);
    let t8 = function() {
      let t10 = {};
      for (let e10 = 0; e10 < 36; e10++)
        t10["0123456789abcdefghijklmnopqrstuvwxyz"[e10]] = BigInt(e10);
      return t10;
    }();
    function t5(t10) {
      if (O("string" == typeof t10, "invalid address", "address", t10), t10.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        t10.startsWith("0x") || (t10 = "0x" + t10);
        let e10 = t3(t10);
        return O(!t10.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e10 === t10, "bad address checksum", "address", t10), e10;
      }
      if (t10.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        O(t10.substring(2, 4) === function(t11) {
          let e11 = (t11 = (t11 = t11.toUpperCase()).substring(4) + t11.substring(0, 2) + "00").split("").map((t12) => t4[t12]).join("");
          for (; e11.length >= 15; ) {
            let t12 = e11.substring(0, 15);
            e11 = parseInt(t12, 10) % 97 + e11.substring(t12.length);
          }
          let r10 = String(98 - parseInt(e11, 10) % 97);
          for (; r10.length < 2; )
            r10 = "0" + r10;
          return r10;
        }(t10), "bad icap checksum", "address", t10);
        let e10 = function(t11) {
          t11 = t11.toLowerCase();
          let e11 = t1;
          for (let r10 = 0; r10 < t11.length; r10++)
            e11 = e11 * t2 + t8[t11[r10]];
          return e11;
        }(t10.substring(4)).toString(16);
        for (; e10.length < 40; )
          e10 = "0" + e10;
        return t3("0x" + e10);
      }
      O(false, "invalid address", "address", t10);
    }
    let t6 = {};
    function t9(t10, e10) {
      let r10 = false;
      return e10 < 0 && (r10 = true, e10 *= -1), new ee(t6, `${r10 ? "" : "u"}int${e10}`, t10, { signed: r10, width: e10 });
    }
    function t7(t10, e10) {
      return new ee(t6, `bytes${e10 || ""}`, t10, { size: e10 });
    }
    let et = Symbol.for("_ethers_typed");
    class ee {
      type;
      value;
      #c;
      _typedSymbol;
      constructor(t10, e10, r10, n10) {
        null == n10 && (n10 = null), S(t6, t10, "Typed"), P(this, { _typedSymbol: et, type: e10, value: r10 }), this.#c = n10, this.format();
      }
      format() {
        if ("array" === this.type || "dynamicArray" === this.type)
          throw Error("");
        return "tuple" === this.type ? `tuple(${this.value.map((t10) => t10.format()).join(",")})` : this.type;
      }
      defaultValue() {
        return 0;
      }
      minValue() {
        return 0;
      }
      maxValue() {
        return 0;
      }
      isBigInt() {
        return !!this.type.match(/^u?int[0-9]+$/);
      }
      isData() {
        return this.type.startsWith("bytes");
      }
      isString() {
        return "string" === this.type;
      }
      get tupleName() {
        if ("tuple" !== this.type)
          throw TypeError("not a tuple");
        return this.#c;
      }
      get arrayLength() {
        if ("array" !== this.type)
          throw TypeError("not an array");
        return true === this.#c ? -1 : false === this.#c ? this.value.length : null;
      }
      static from(t10, e10) {
        return new ee(t6, t10, e10);
      }
      static uint8(t10) {
        return t9(t10, 8);
      }
      static uint16(t10) {
        return t9(t10, 16);
      }
      static uint24(t10) {
        return t9(t10, 24);
      }
      static uint32(t10) {
        return t9(t10, 32);
      }
      static uint40(t10) {
        return t9(t10, 40);
      }
      static uint48(t10) {
        return t9(t10, 48);
      }
      static uint56(t10) {
        return t9(t10, 56);
      }
      static uint64(t10) {
        return t9(t10, 64);
      }
      static uint72(t10) {
        return t9(t10, 72);
      }
      static uint80(t10) {
        return t9(t10, 80);
      }
      static uint88(t10) {
        return t9(t10, 88);
      }
      static uint96(t10) {
        return t9(t10, 96);
      }
      static uint104(t10) {
        return t9(t10, 104);
      }
      static uint112(t10) {
        return t9(t10, 112);
      }
      static uint120(t10) {
        return t9(t10, 120);
      }
      static uint128(t10) {
        return t9(t10, 128);
      }
      static uint136(t10) {
        return t9(t10, 136);
      }
      static uint144(t10) {
        return t9(t10, 144);
      }
      static uint152(t10) {
        return t9(t10, 152);
      }
      static uint160(t10) {
        return t9(t10, 160);
      }
      static uint168(t10) {
        return t9(t10, 168);
      }
      static uint176(t10) {
        return t9(t10, 176);
      }
      static uint184(t10) {
        return t9(t10, 184);
      }
      static uint192(t10) {
        return t9(t10, 192);
      }
      static uint200(t10) {
        return t9(t10, 200);
      }
      static uint208(t10) {
        return t9(t10, 208);
      }
      static uint216(t10) {
        return t9(t10, 216);
      }
      static uint224(t10) {
        return t9(t10, 224);
      }
      static uint232(t10) {
        return t9(t10, 232);
      }
      static uint240(t10) {
        return t9(t10, 240);
      }
      static uint248(t10) {
        return t9(t10, 248);
      }
      static uint256(t10) {
        return t9(t10, 256);
      }
      static uint(t10) {
        return t9(t10, 256);
      }
      static int8(t10) {
        return t9(t10, -8);
      }
      static int16(t10) {
        return t9(t10, -16);
      }
      static int24(t10) {
        return t9(t10, -24);
      }
      static int32(t10) {
        return t9(t10, -32);
      }
      static int40(t10) {
        return t9(t10, -40);
      }
      static int48(t10) {
        return t9(t10, -48);
      }
      static int56(t10) {
        return t9(t10, -56);
      }
      static int64(t10) {
        return t9(t10, -64);
      }
      static int72(t10) {
        return t9(t10, -72);
      }
      static int80(t10) {
        return t9(t10, -80);
      }
      static int88(t10) {
        return t9(t10, -88);
      }
      static int96(t10) {
        return t9(t10, -96);
      }
      static int104(t10) {
        return t9(t10, -104);
      }
      static int112(t10) {
        return t9(t10, -112);
      }
      static int120(t10) {
        return t9(t10, -120);
      }
      static int128(t10) {
        return t9(t10, -128);
      }
      static int136(t10) {
        return t9(t10, -136);
      }
      static int144(t10) {
        return t9(t10, -144);
      }
      static int152(t10) {
        return t9(t10, -152);
      }
      static int160(t10) {
        return t9(t10, -160);
      }
      static int168(t10) {
        return t9(t10, -168);
      }
      static int176(t10) {
        return t9(t10, -176);
      }
      static int184(t10) {
        return t9(t10, -184);
      }
      static int192(t10) {
        return t9(t10, -192);
      }
      static int200(t10) {
        return t9(t10, -200);
      }
      static int208(t10) {
        return t9(t10, -208);
      }
      static int216(t10) {
        return t9(t10, -216);
      }
      static int224(t10) {
        return t9(t10, -224);
      }
      static int232(t10) {
        return t9(t10, -232);
      }
      static int240(t10) {
        return t9(t10, -240);
      }
      static int248(t10) {
        return t9(t10, -248);
      }
      static int256(t10) {
        return t9(t10, -256);
      }
      static int(t10) {
        return t9(t10, -256);
      }
      static bytes1(t10) {
        return t7(t10, 1);
      }
      static bytes2(t10) {
        return t7(t10, 2);
      }
      static bytes3(t10) {
        return t7(t10, 3);
      }
      static bytes4(t10) {
        return t7(t10, 4);
      }
      static bytes5(t10) {
        return t7(t10, 5);
      }
      static bytes6(t10) {
        return t7(t10, 6);
      }
      static bytes7(t10) {
        return t7(t10, 7);
      }
      static bytes8(t10) {
        return t7(t10, 8);
      }
      static bytes9(t10) {
        return t7(t10, 9);
      }
      static bytes10(t10) {
        return t7(t10, 10);
      }
      static bytes11(t10) {
        return t7(t10, 11);
      }
      static bytes12(t10) {
        return t7(t10, 12);
      }
      static bytes13(t10) {
        return t7(t10, 13);
      }
      static bytes14(t10) {
        return t7(t10, 14);
      }
      static bytes15(t10) {
        return t7(t10, 15);
      }
      static bytes16(t10) {
        return t7(t10, 16);
      }
      static bytes17(t10) {
        return t7(t10, 17);
      }
      static bytes18(t10) {
        return t7(t10, 18);
      }
      static bytes19(t10) {
        return t7(t10, 19);
      }
      static bytes20(t10) {
        return t7(t10, 20);
      }
      static bytes21(t10) {
        return t7(t10, 21);
      }
      static bytes22(t10) {
        return t7(t10, 22);
      }
      static bytes23(t10) {
        return t7(t10, 23);
      }
      static bytes24(t10) {
        return t7(t10, 24);
      }
      static bytes25(t10) {
        return t7(t10, 25);
      }
      static bytes26(t10) {
        return t7(t10, 26);
      }
      static bytes27(t10) {
        return t7(t10, 27);
      }
      static bytes28(t10) {
        return t7(t10, 28);
      }
      static bytes29(t10) {
        return t7(t10, 29);
      }
      static bytes30(t10) {
        return t7(t10, 30);
      }
      static bytes31(t10) {
        return t7(t10, 31);
      }
      static bytes32(t10) {
        return t7(t10, 32);
      }
      static address(t10) {
        return new ee(t6, "address", t10);
      }
      static bool(t10) {
        return new ee(t6, "bool", !!t10);
      }
      static bytes(t10) {
        return new ee(t6, "bytes", t10);
      }
      static string(t10) {
        return new ee(t6, "string", t10);
      }
      static array(t10, e10) {
        throw Error("not implemented yet");
      }
      static tuple(t10, e10) {
        throw Error("not implemented yet");
      }
      static overrides(t10) {
        return new ee(t6, "overrides", Object.assign({}, t10));
      }
      static isTyped(t10) {
        return t10 && "object" == typeof t10 && "_typedSymbol" in t10 && t10._typedSymbol === et;
      }
      static dereference(t10, e10) {
        if (ee.isTyped(t10)) {
          if (t10.type !== e10)
            throw Error(`invalid type: expecetd ${e10}, got ${t10.type}`);
          return t10.value;
        }
        return t10;
      }
    }
    class er extends tf {
      constructor(t10) {
        super("address", "address", t10, false);
      }
      defaultValue() {
        return "0x0000000000000000000000000000000000000000";
      }
      encode(t10, e10) {
        let r10 = ee.dereference(e10, "string");
        try {
          r10 = t5(r10);
        } catch (t11) {
          return this._throwError(t11.message, e10);
        }
        return t10.writeValue(r10);
      }
      decode(t10) {
        return t5(te(t10.readValue(), 20));
      }
    }
    class en extends tf {
      coder;
      constructor(t10) {
        super(t10.name, t10.type, "_", t10.dynamic), this.coder = t10;
      }
      defaultValue() {
        return this.coder.defaultValue();
      }
      encode(t10, e10) {
        return this.coder.encode(t10, e10);
      }
      decode(t10) {
        return this.coder.decode(t10);
      }
    }
    function ei(t10, e10, r10) {
      let n10 = [];
      if (Array.isArray(r10))
        n10 = r10;
      else if (r10 && "object" == typeof r10) {
        let t11 = {};
        n10 = e10.map((e11) => {
          let n11 = e11.localName;
          return I(n11, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder: e11 }, value: r10 }), I(!t11[n11], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder: e11 }, value: r10 }), t11[n11] = true, r10[n11];
        });
      } else
        O(false, "invalid tuple value", "tuple", r10);
      O(e10.length === n10.length, "types/value length mismatch", "tuple", r10);
      let i10 = new td(), s10 = new td(), a2 = [];
      return e10.forEach((t11, e11) => {
        let r11 = n10[e11];
        if (t11.dynamic) {
          let e12 = s10.length;
          t11.encode(s10, r11);
          let n11 = i10.writeUpdatableValue();
          a2.push((t12) => {
            n11(t12 + e12);
          });
        } else
          t11.encode(i10, r11);
      }), a2.forEach((t11) => {
        t11(i10.length);
      }), t10.appendWriter(i10) + t10.appendWriter(s10);
    }
    function es(t10, e10) {
      let r10 = [], n10 = [], i10 = t10.subReader(0);
      return e10.forEach((e11) => {
        let s10 = null;
        if (e11.dynamic) {
          let r11 = t10.readIndex(), n11 = i10.subReader(r11);
          try {
            s10 = e11.decode(n11);
          } catch (t11) {
            if (k(t11, "BUFFER_OVERRUN"))
              throw t11;
            (s10 = t11).baseType = e11.name, s10.name = e11.localName, s10.type = e11.type;
          }
        } else
          try {
            s10 = e11.decode(t10);
          } catch (t11) {
            if (k(t11, "BUFFER_OVERRUN"))
              throw t11;
            (s10 = t11).baseType = e11.name, s10.name = e11.localName, s10.type = e11.type;
          }
        if (void 0 == s10)
          throw Error("investigate");
        r10.push(s10), n10.push(e11.localName || null);
      }), tc.fromItems(r10, n10);
    }
    class ea extends tf {
      coder;
      length;
      constructor(t10, e10, r10) {
        super("array", t10.type + "[" + (e10 >= 0 ? e10 : "") + "]", r10, -1 === e10 || t10.dynamic), P(this, { coder: t10, length: e10 });
      }
      defaultValue() {
        let t10 = this.coder.defaultValue(), e10 = [];
        for (let r10 = 0; r10 < this.length; r10++)
          e10.push(t10);
        return e10;
      }
      encode(t10, e10) {
        let r10 = ee.dereference(e10, "array");
        Array.isArray(r10) || this._throwError("expected array value", r10);
        let n10 = this.length;
        -1 === n10 && (n10 = r10.length, t10.writeValue(r10.length)), R(r10.length, n10, "coder array" + (this.localName ? " " + this.localName : ""));
        let i10 = [];
        for (let t11 = 0; t11 < r10.length; t11++)
          i10.push(this.coder);
        return ei(t10, i10, r10);
      }
      decode(t10) {
        let e10 = this.length;
        -1 === e10 && I(32 * (e10 = t10.readIndex()) <= t10.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: t10.bytes, offset: 32 * e10, length: t10.dataLength });
        let r10 = [];
        for (let t11 = 0; t11 < e10; t11++)
          r10.push(new en(this.coder));
        return es(t10, r10);
      }
    }
    class eo extends tf {
      constructor(t10) {
        super("bool", "bool", t10, false);
      }
      defaultValue() {
        return false;
      }
      encode(t10, e10) {
        let r10 = ee.dereference(e10, "bool");
        return t10.writeValue(r10 ? 1 : 0);
      }
      decode(t10) {
        return !!t10.readValue();
      }
    }
    class el extends tf {
      constructor(t10, e10) {
        super(t10, t10, e10, true);
      }
      defaultValue() {
        return "0x";
      }
      encode(t10, e10) {
        return e10 = D(e10), t10.writeValue(e10.length) + t10.writeBytes(e10);
      }
      decode(t10) {
        return t10.readBytes(t10.readIndex(), true);
      }
    }
    class eu extends el {
      constructor(t10) {
        super("bytes", t10);
      }
      decode(t10) {
        return H(super.decode(t10));
      }
    }
    class ec extends tf {
      size;
      constructor(t10, e10) {
        let r10 = "bytes" + String(t10);
        super(r10, r10, e10, false), P(this, { size: t10 }, { size: "number" });
      }
      defaultValue() {
        return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size);
      }
      encode(t10, e10) {
        let r10 = D(ee.dereference(e10, this.type));
        return r10.length !== this.size && this._throwError("incorrect data length", e10), t10.writeBytes(r10);
      }
      decode(t10) {
        return H(t10.readBytes(this.size));
      }
    }
    let eh = new Uint8Array([]);
    class ef extends tf {
      constructor(t10) {
        super("null", "", t10, false);
      }
      defaultValue() {
        return null;
      }
      encode(t10, e10) {
        return null != e10 && this._throwError("not null", e10), t10.writeBytes(eh);
      }
      decode(t10) {
        return t10.readBytes(0), null;
      }
    }
    let ed = BigInt(0), ep = BigInt(1), eg = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    class em extends tf {
      size;
      signed;
      constructor(t10, e10, r10) {
        let n10 = (e10 ? "int" : "uint") + 8 * t10;
        super(n10, n10, r10, false), P(this, { size: t10, signed: e10 }, { size: "number", signed: "boolean" });
      }
      defaultValue() {
        return 0;
      }
      encode(t10, e10) {
        let r10 = _(ee.dereference(e10, this.type)), n10 = Y(eg, 256);
        if (this.signed) {
          let t11 = Y(n10, 8 * this.size - 1);
          (r10 > t11 || r10 < -(t11 + ep)) && this._throwError("value out-of-bounds", e10), r10 = Z(r10, 256);
        } else
          (r10 < ed || r10 > Y(n10, 8 * this.size)) && this._throwError("value out-of-bounds", e10);
        return t10.writeValue(r10);
      }
      decode(t10) {
        let e10 = Y(t10.readValue(), 8 * this.size);
        return this.signed && (e10 = function(t11, e11) {
          let r10 = W(t11, "value"), n10 = BigInt(tt(e11, "width"));
          return (I(r10 >> n10 === K, "overflow", "NUMERIC_FAULT", { operation: "fromTwos", fault: "overflow", value: t11 }), r10 >> n10 - q) ? -((~r10 & (q << n10) - q) + q) : r10;
        }(e10, 8 * this.size)), e10;
      }
    }
    function ey(t10, e10, r10, n10, i10) {
      if ("BAD_PREFIX" === t10 || "UNEXPECTED_CONTINUE" === t10) {
        let t11 = 0;
        for (let n11 = e10 + 1; n11 < r10.length && r10[n11] >> 6 == 2; n11++)
          t11++;
        return t11;
      }
      return "OVERRUN" === t10 ? r10.length - e10 - 1 : 0;
    }
    let eA = Object.freeze({ error: function(t10, e10, r10, n10, i10) {
      O(false, `invalid codepoint at offset ${e10}; ${t10}`, "bytes", r10);
    }, ignore: ey, replace: function(t10, e10, r10, n10, i10) {
      return "OVERLONG" === t10 ? (O("number" == typeof i10, "invalid bad code point for replacement", "badCodepoint", i10), n10.push(i10), 0) : (n10.push(65533), ey(t10, e10, r10, n10, i10));
    } });
    function eb(t10, e10) {
      O("string" == typeof t10, "invalid string value", "str", t10), null != e10 && (I(T.indexOf(e10) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", { operation: "String.prototype.normalize", info: { form: e10 } }), t10 = t10.normalize(e10));
      let r10 = [];
      for (let e11 = 0; e11 < t10.length; e11++) {
        let n10 = t10.charCodeAt(e11);
        if (n10 < 128)
          r10.push(n10);
        else if (n10 < 2048)
          r10.push(n10 >> 6 | 192), r10.push(63 & n10 | 128);
        else if ((64512 & n10) == 55296) {
          e11++;
          let i10 = t10.charCodeAt(e11);
          O(e11 < t10.length && (64512 & i10) == 56320, "invalid surrogate pair", "str", t10);
          let s10 = 65536 + ((1023 & n10) << 10) + (1023 & i10);
          r10.push(s10 >> 18 | 240), r10.push(s10 >> 12 & 63 | 128), r10.push(s10 >> 6 & 63 | 128), r10.push(63 & s10 | 128);
        } else
          r10.push(n10 >> 12 | 224), r10.push(n10 >> 6 & 63 | 128), r10.push(63 & n10 | 128);
      }
      return new Uint8Array(r10);
    }
    function ew(t10, e10) {
      return function(t11, e11) {
        null == e11 && (e11 = eA.error);
        let r10 = F(t11, "bytes"), n10 = [], i10 = 0;
        for (; i10 < r10.length; ) {
          let t12 = r10[i10++];
          if (t12 >> 7 == 0) {
            n10.push(t12);
            continue;
          }
          let s10 = null, a2 = null;
          if ((224 & t12) == 192)
            s10 = 1, a2 = 127;
          else if ((240 & t12) == 224)
            s10 = 2, a2 = 2047;
          else if ((248 & t12) == 240)
            s10 = 3, a2 = 65535;
          else {
            (192 & t12) == 128 ? i10 += e11("UNEXPECTED_CONTINUE", i10 - 1, r10, n10) : i10 += e11("BAD_PREFIX", i10 - 1, r10, n10);
            continue;
          }
          if (i10 - 1 + s10 >= r10.length) {
            i10 += e11("OVERRUN", i10 - 1, r10, n10);
            continue;
          }
          let o2 = t12 & (1 << 8 - s10 - 1) - 1;
          for (let t13 = 0; t13 < s10; t13++) {
            let t14 = r10[i10];
            if ((192 & t14) != 128) {
              i10 += e11("MISSING_CONTINUE", i10, r10, n10), o2 = null;
              break;
            }
            o2 = o2 << 6 | 63 & t14, i10++;
          }
          if (null !== o2) {
            if (o2 > 1114111) {
              i10 += e11("OUT_OF_RANGE", i10 - 1 - s10, r10, n10, o2);
              continue;
            }
            if (o2 >= 55296 && o2 <= 57343) {
              i10 += e11("UTF16_SURROGATE", i10 - 1 - s10, r10, n10, o2);
              continue;
            }
            if (o2 <= a2) {
              i10 += e11("OVERLONG", i10 - 1 - s10, r10, n10, o2);
              continue;
            }
            n10.push(o2);
          }
        }
        return n10;
      }(t10, e10).map((t11) => t11 <= 65535 ? String.fromCharCode(t11) : String.fromCharCode(((t11 -= 65536) >> 10 & 1023) + 55296, (1023 & t11) + 56320)).join("");
    }
    class eE extends el {
      constructor(t10) {
        super("string", t10);
      }
      defaultValue() {
        return "";
      }
      encode(t10, e10) {
        return super.encode(t10, eb(ee.dereference(e10, "string")));
      }
      decode(t10) {
        return ew(super.decode(t10));
      }
    }
    class ev extends tf {
      coders;
      constructor(t10, e10) {
        let r10 = false, n10 = [];
        t10.forEach((t11) => {
          t11.dynamic && (r10 = true), n10.push(t11.type);
        }), super("tuple", "tuple(" + n10.join(",") + ")", e10, r10), P(this, { coders: Object.freeze(t10.slice()) });
      }
      defaultValue() {
        let t10 = [];
        this.coders.forEach((e11) => {
          t10.push(e11.defaultValue());
        });
        let e10 = this.coders.reduce((t11, e11) => {
          let r10 = e11.localName;
          return r10 && (t11[r10] || (t11[r10] = 0), t11[r10]++), t11;
        }, {});
        return this.coders.forEach((r10, n10) => {
          let i10 = r10.localName;
          i10 && 1 === e10[i10] && ("length" === i10 && (i10 = "_length"), null == t10[i10] && (t10[i10] = t10[n10]));
        }), Object.freeze(t10);
      }
      encode(t10, e10) {
        let r10 = ee.dereference(e10, "tuple");
        return ei(t10, this.coders, r10);
      }
      decode(t10) {
        return es(t10, this.coders);
      }
    }
    function ex(t10) {
      return t0(eb(t10));
    }
    function eP(t10) {
      let e10 = /* @__PURE__ */ new Set();
      return t10.forEach((t11) => e10.add(t11)), Object.freeze(e10);
    }
    let eN = eP("external public payable override".split(" ")), ek = "constant external internal payable private public pure view override", eB = eP(ek.split(" ")), eC = "constructor error event fallback function receive struct", eI = eP(eC.split(" ")), eO = "calldata memory storage payable indexed", eR = eP(eO.split(" ")), eT = eP([eC, eO, "tuple returns", ek].join(" ").split(" ")), eS = { "(": "OPEN_PAREN", ")": "CLOSE_PAREN", "[": "OPEN_BRACKET", "]": "CLOSE_BRACKET", ",": "COMMA", "@": "AT" }, eU = RegExp("^(\\s*)"), eF = RegExp("^([0-9]+)"), eD = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"), eL = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"), eM = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
    class eG {
      #i;
      #h;
      get offset() {
        return this.#i;
      }
      get length() {
        return this.#h.length - this.#i;
      }
      constructor(t10) {
        this.#i = 0, this.#h = t10.slice();
      }
      clone() {
        return new eG(this.#h);
      }
      reset() {
        this.#i = 0;
      }
      #f(t10 = 0, e10 = 0) {
        return new eG(this.#h.slice(t10, e10).map((e11) => Object.freeze(Object.assign({}, e11, { match: e11.match - t10, linkBack: e11.linkBack - t10, linkNext: e11.linkNext - t10 }))));
      }
      popKeyword(t10) {
        let e10 = this.peek();
        if ("KEYWORD" !== e10.type || !t10.has(e10.text))
          throw Error(`expected keyword ${e10.text}`);
        return this.pop().text;
      }
      popType(t10) {
        if (this.peek().type !== t10) {
          let e10 = this.peek();
          throw Error(`expected ${t10}; got ${e10.type} ${JSON.stringify(e10.text)}`);
        }
        return this.pop().text;
      }
      popParen() {
        let t10 = this.peek();
        if ("OPEN_PAREN" !== t10.type)
          throw Error("bad start");
        let e10 = this.#f(this.#i + 1, t10.match + 1);
        return this.#i = t10.match + 1, e10;
      }
      popParams() {
        let t10 = this.peek();
        if ("OPEN_PAREN" !== t10.type)
          throw Error("bad start");
        let e10 = [];
        for (; this.#i < t10.match - 1; ) {
          let t11 = this.peek().linkNext;
          e10.push(this.#f(this.#i + 1, t11)), this.#i = t11;
        }
        return this.#i = t10.match + 1, e10;
      }
      peek() {
        if (this.#i >= this.#h.length)
          throw Error("out-of-bounds");
        return this.#h[this.#i];
      }
      peekKeyword(t10) {
        let e10 = this.peekType("KEYWORD");
        return null != e10 && t10.has(e10) ? e10 : null;
      }
      peekType(t10) {
        if (0 === this.length)
          return null;
        let e10 = this.peek();
        return e10.type === t10 ? e10.text : null;
      }
      pop() {
        let t10 = this.peek();
        return this.#i++, t10;
      }
      toString() {
        let t10 = [];
        for (let e10 = this.#i; e10 < this.#h.length; e10++) {
          let r10 = this.#h[e10];
          t10.push(`${r10.type}:${r10.text}`);
        }
        return `<TokenString ${t10.join(" ")}>`;
      }
    }
    function eH(t10) {
      let e10 = [], r10 = (e11) => {
        let r11 = s10 < t10.length ? JSON.stringify(t10[s10]) : "$EOI";
        throw Error(`invalid token ${r11} at ${s10}: ${e11}`);
      }, n10 = [], i10 = [], s10 = 0;
      for (; s10 < t10.length; ) {
        let a2 = t10.substring(s10), o2 = a2.match(eU);
        o2 && (s10 += o2[1].length, a2 = t10.substring(s10));
        let l2 = { depth: n10.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset: s10, value: -1 };
        e10.push(l2);
        let u2 = eS[a2[0]] || "";
        if (u2) {
          if (l2.type = u2, l2.text = a2[0], s10++, "OPEN_PAREN" === u2)
            n10.push(e10.length - 1), i10.push(e10.length - 1);
          else if ("CLOSE_PAREN" == u2)
            0 === n10.length && r10("no matching open bracket"), l2.match = n10.pop(), e10[l2.match].match = e10.length - 1, l2.depth--, l2.linkBack = i10.pop(), e10[l2.linkBack].linkNext = e10.length - 1;
          else if ("COMMA" === u2)
            l2.linkBack = i10.pop(), e10[l2.linkBack].linkNext = e10.length - 1, i10.push(e10.length - 1);
          else if ("OPEN_BRACKET" === u2)
            l2.type = "BRACKET";
          else if ("CLOSE_BRACKET" === u2) {
            let t11 = e10.pop().text;
            if (e10.length > 0 && "NUMBER" === e10[e10.length - 1].type) {
              let r11 = e10.pop().text;
              t11 = r11 + t11, e10[e10.length - 1].value = tt(r11);
            }
            if (0 === e10.length || "BRACKET" !== e10[e10.length - 1].type)
              throw Error("missing opening bracket");
            e10[e10.length - 1].text += t11;
          }
          continue;
        }
        if (o2 = a2.match(eD)) {
          if (l2.text = o2[1], s10 += l2.text.length, eT.has(l2.text)) {
            l2.type = "KEYWORD";
            continue;
          }
          if (l2.text.match(eM)) {
            l2.type = "TYPE";
            continue;
          }
          l2.type = "ID";
          continue;
        }
        if (o2 = a2.match(eF)) {
          l2.text = o2[1], l2.type = "NUMBER", s10 += l2.text.length;
          continue;
        }
        throw Error(`unexpected token ${JSON.stringify(a2[0])} at position ${s10}`);
      }
      return new eG(e10.map((t11) => Object.freeze(t11)));
    }
    function eQ(t10, e10) {
      let r10 = [];
      for (let n10 in e10.keys())
        t10.has(n10) && r10.push(n10);
      if (r10.length > 1)
        throw Error(`conflicting types: ${r10.join(", ")}`);
    }
    function ej(t10, e10) {
      if (e10.peekKeyword(eI)) {
        let r10 = e10.pop().text;
        if (r10 !== t10)
          throw Error(`expected ${t10}, got ${r10}`);
      }
      return e10.popType("ID");
    }
    function eV(t10, e10) {
      let r10 = /* @__PURE__ */ new Set();
      for (; ; ) {
        let n10 = t10.peekType("KEYWORD");
        if (null == n10 || e10 && !e10.has(n10))
          break;
        if (t10.pop(), r10.has(n10))
          throw Error(`duplicate keywords: ${JSON.stringify(n10)}`);
        r10.add(n10);
      }
      return Object.freeze(r10);
    }
    function eJ(t10) {
      let e10 = eV(t10, eB);
      return (eQ(e10, eP("constant payable nonpayable".split(" "))), eQ(e10, eP("pure view payable nonpayable".split(" "))), e10.has("view")) ? "view" : e10.has("pure") ? "pure" : e10.has("payable") ? "payable" : e10.has("nonpayable") ? "nonpayable" : e10.has("constant") ? "view" : "nonpayable";
    }
    function ez(t10, e10) {
      return t10.popParams().map((t11) => e8.from(t11, e10));
    }
    function eK(t10) {
      if (t10.peekType("AT")) {
        if (t10.pop(), t10.peekType("NUMBER"))
          return _(t10.pop().text);
        throw Error("invalid gas");
      }
      return null;
    }
    function eq(t10) {
      if (t10.length)
        throw Error(`unexpected tokens at offset ${t10.offset}: ${t10.toString()}`);
    }
    let eZ = new RegExp(/^(.*)\[([0-9]*)\]$/);
    function eY(t10) {
      let e10 = t10.match(eM);
      if (O(e10, "invalid type", "type", t10), "uint" === t10)
        return "uint256";
      if ("int" === t10)
        return "int256";
      if (e10[2]) {
        let r10 = parseInt(e10[2]);
        O(0 !== r10 && r10 <= 32, "invalid bytes length", "type", t10);
      } else if (e10[3]) {
        let r10 = parseInt(e10[3]);
        O(0 !== r10 && r10 <= 256 && r10 % 8 == 0, "invalid numeric width", "type", t10);
      }
      return t10;
    }
    let e_ = {}, eW = Symbol.for("_ethers_internal"), eX = "_ParamTypeInternal", e$ = "_ErrorInternal", e0 = "_EventInternal", e1 = "_ConstructorInternal", e2 = "_FallbackInternal", e3 = "_FunctionInternal", e4 = "_StructInternal";
    class e8 {
      name;
      type;
      baseType;
      indexed;
      components;
      arrayLength;
      arrayChildren;
      constructor(t10, e10, r10, n10, i10, s10, a2, o2) {
        if (S(t10, e_, "ParamType"), Object.defineProperty(this, eW, { value: eX }), s10 && (s10 = Object.freeze(s10.slice())), "array" === n10) {
          if (null == a2 || null == o2)
            throw Error("");
        } else if (null != a2 || null != o2)
          throw Error("");
        if ("tuple" === n10) {
          if (null == s10)
            throw Error("");
        } else if (null != s10)
          throw Error("");
        P(this, { name: e10, type: r10, baseType: n10, indexed: i10, components: s10, arrayLength: a2, arrayChildren: o2 });
      }
      format(t10) {
        if (null == t10 && (t10 = "sighash"), "json" === t10) {
          let e11 = this.name || "";
          if (this.isArray()) {
            let t11 = JSON.parse(this.arrayChildren.format("json"));
            return t11.name = e11, t11.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(t11);
          }
          let r10 = { type: "tuple" === this.baseType ? "tuple" : this.type, name: e11 };
          return "boolean" == typeof this.indexed && (r10.indexed = this.indexed), this.isTuple() && (r10.components = this.components.map((e12) => JSON.parse(e12.format(t10)))), JSON.stringify(r10);
        }
        let e10 = "";
        return this.isArray() ? e10 += this.arrayChildren.format(t10) + `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]` : this.isTuple() ? e10 += "(" + this.components.map((e11) => e11.format(t10)).join("full" === t10 ? ", " : ",") + ")" : e10 += this.type, "sighash" !== t10 && (true === this.indexed && (e10 += " indexed"), "full" === t10 && this.name && (e10 += " " + this.name)), e10;
      }
      isArray() {
        return "array" === this.baseType;
      }
      isTuple() {
        return "tuple" === this.baseType;
      }
      isIndexable() {
        return null != this.indexed;
      }
      walk(t10, e10) {
        if (this.isArray()) {
          if (!Array.isArray(t10))
            throw Error("invalid array value");
          if (-1 !== this.arrayLength && t10.length !== this.arrayLength)
            throw Error("array is wrong length");
          let r10 = this;
          return t10.map((t11) => r10.arrayChildren.walk(t11, e10));
        }
        if (this.isTuple()) {
          if (!Array.isArray(t10))
            throw Error("invalid tuple value");
          if (t10.length !== this.components.length)
            throw Error("array is wrong length");
          let r10 = this;
          return t10.map((t11, n10) => r10.components[n10].walk(t11, e10));
        }
        return e10(this.type, t10);
      }
      #d(t10, e10, r10, n10) {
        if (this.isArray()) {
          if (!Array.isArray(e10))
            throw Error("invalid array value");
          if (-1 !== this.arrayLength && e10.length !== this.arrayLength)
            throw Error("array is wrong length");
          let i11 = this.arrayChildren, s10 = e10.slice();
          s10.forEach((e11, n11) => {
            i11.#d(t10, e11, r10, (t11) => {
              s10[n11] = t11;
            });
          }), n10(s10);
          return;
        }
        if (this.isTuple()) {
          let i11;
          let s10 = this.components;
          if (Array.isArray(e10))
            i11 = e10.slice();
          else {
            if (null == e10 || "object" != typeof e10)
              throw Error("invalid tuple value");
            i11 = s10.map((t11) => {
              if (!t11.name)
                throw Error("cannot use object value with unnamed components");
              if (!(t11.name in e10))
                throw Error(`missing value for component ${t11.name}`);
              return e10[t11.name];
            });
          }
          if (i11.length !== this.components.length)
            throw Error("array is wrong length");
          i11.forEach((e11, n11) => {
            s10[n11].#d(t10, e11, r10, (t11) => {
              i11[n11] = t11;
            });
          }), n10(i11);
          return;
        }
        let i10 = r10(this.type, e10);
        i10.then ? t10.push(async function() {
          n10(await i10);
        }()) : n10(i10);
      }
      async walkAsync(t10, e10) {
        let r10 = [], n10 = [t10];
        return this.#d(r10, t10, e10, (t11) => {
          n10[0] = t11;
        }), r10.length && await Promise.all(r10), n10[0];
      }
      static from(t10, e10) {
        if (e8.isParamType(t10))
          return t10;
        if ("string" == typeof t10)
          try {
            return e8.from(eH(t10), e10);
          } catch (e11) {
            O(false, "invalid param type", "obj", t10);
          }
        else if (t10 instanceof eG) {
          let r11 = "", n11 = "", i11 = null;
          eV(t10, eP(["tuple"])).has("tuple") || t10.peekType("OPEN_PAREN") ? (n11 = "tuple", i11 = t10.popParams().map((t11) => e8.from(t11)), r11 = `tuple(${i11.map((t11) => t11.format()).join(",")})`) : n11 = r11 = eY(t10.popType("TYPE"));
          let s11 = null, a2 = null;
          for (; t10.length && t10.peekType("BRACKET"); ) {
            let e11 = t10.pop();
            s11 = new e8(e_, "", r11, n11, null, i11, a2, s11), a2 = e11.value, r11 += e11.text, n11 = "array", i11 = null;
          }
          let o2 = null;
          if (eV(t10, eR).has("indexed")) {
            if (!e10)
              throw Error("");
            o2 = true;
          }
          let l2 = t10.peekType("ID") ? t10.pop().text : "";
          if (t10.length)
            throw Error("leftover tokens");
          return new e8(e_, l2, r11, n11, o2, i11, a2, s11);
        }
        let r10 = t10.name;
        O(!r10 || "string" == typeof r10 && r10.match(eL), "invalid name", "obj.name", r10);
        let n10 = t10.indexed;
        null != n10 && (O(e10, "parameter cannot be indexed", "obj.indexed", t10.indexed), n10 = !!n10);
        let i10 = t10.type, s10 = i10.match(eZ);
        if (s10) {
          let e11 = parseInt(s10[2] || "-1"), a2 = e8.from({ type: s10[1], components: t10.components });
          return new e8(e_, r10 || "", i10, "array", n10, null, e11, a2);
        }
        if ("tuple" === i10 || i10.startsWith("tuple(") || i10.startsWith("(")) {
          let e11 = null != t10.components ? t10.components.map((t11) => e8.from(t11)) : null;
          return new e8(e_, r10 || "", i10, "tuple", n10, e11, null, null);
        }
        return new e8(e_, r10 || "", i10 = eY(t10.type), i10, n10, null, null, null);
      }
      static isParamType(t10) {
        return t10 && t10[eW] === eX;
      }
    }
    class e5 {
      type;
      inputs;
      constructor(t10, e10, r10) {
        S(t10, e_, "Fragment"), P(this, { type: e10, inputs: r10 = Object.freeze(r10.slice()) });
      }
      static from(t10) {
        if ("string" == typeof t10) {
          try {
            e5.from(JSON.parse(t10));
          } catch (t11) {
          }
          return e5.from(eH(t10));
        }
        if (t10 instanceof eG)
          switch (t10.peekKeyword(eI)) {
            case "constructor":
              return re.from(t10);
            case "error":
              return e7.from(t10);
            case "event":
              return rt.from(t10);
            case "fallback":
            case "receive":
              return rr.from(t10);
            case "function":
              return rn.from(t10);
            case "struct":
              return ri.from(t10);
          }
        else if ("object" == typeof t10) {
          switch (t10.type) {
            case "constructor":
              return re.from(t10);
            case "error":
              return e7.from(t10);
            case "event":
              return rt.from(t10);
            case "fallback":
            case "receive":
              return rr.from(t10);
            case "function":
              return rn.from(t10);
            case "struct":
              return ri.from(t10);
          }
          I(false, `unsupported type: ${t10.type}`, "UNSUPPORTED_OPERATION", { operation: "Fragment.from" });
        }
        O(false, "unsupported frgament object", "obj", t10);
      }
      static isConstructor(t10) {
        return re.isFragment(t10);
      }
      static isError(t10) {
        return e7.isFragment(t10);
      }
      static isEvent(t10) {
        return rt.isFragment(t10);
      }
      static isFunction(t10) {
        return rn.isFragment(t10);
      }
      static isStruct(t10) {
        return ri.isFragment(t10);
      }
    }
    class e6 extends e5 {
      name;
      constructor(t10, e10, r10, n10) {
        super(t10, e10, n10), O("string" == typeof r10 && r10.match(eL), "invalid identifier", "name", r10), n10 = Object.freeze(n10.slice()), P(this, { name: r10 });
      }
    }
    function e9(t10, e10) {
      return "(" + e10.map((e11) => e11.format(t10)).join("full" === t10 ? ", " : ",") + ")";
    }
    class e7 extends e6 {
      constructor(t10, e10, r10) {
        super(t10, "error", e10, r10), Object.defineProperty(this, eW, { value: e$ });
      }
      get selector() {
        return ex(this.format("sighash")).substring(0, 10);
      }
      format(t10) {
        if (null == t10 && (t10 = "sighash"), "json" === t10)
          return JSON.stringify({ type: "error", name: this.name, inputs: this.inputs.map((e11) => JSON.parse(e11.format(t10))) });
        let e10 = [];
        return "sighash" !== t10 && e10.push("error"), e10.push(this.name + e9(t10, this.inputs)), e10.join(" ");
      }
      static from(t10) {
        if (e7.isFragment(t10))
          return t10;
        if ("string" == typeof t10)
          return e7.from(eH(t10));
        if (t10 instanceof eG) {
          let e10 = ej("error", t10), r10 = ez(t10);
          return eq(t10), new e7(e_, e10, r10);
        }
        return new e7(e_, t10.name, t10.inputs ? t10.inputs.map(e8.from) : []);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e$;
      }
    }
    class rt extends e6 {
      anonymous;
      constructor(t10, e10, r10, n10) {
        super(t10, "event", e10, r10), Object.defineProperty(this, eW, { value: e0 }), P(this, { anonymous: n10 });
      }
      get topicHash() {
        return ex(this.format("sighash"));
      }
      format(t10) {
        if (null == t10 && (t10 = "sighash"), "json" === t10)
          return JSON.stringify({ type: "event", anonymous: this.anonymous, name: this.name, inputs: this.inputs.map((e11) => JSON.parse(e11.format(t10))) });
        let e10 = [];
        return "sighash" !== t10 && e10.push("event"), e10.push(this.name + e9(t10, this.inputs)), "sighash" !== t10 && this.anonymous && e10.push("anonymous"), e10.join(" ");
      }
      static getTopicHash(t10, e10) {
        return new rt(e_, t10, e10 = (e10 || []).map((t11) => e8.from(t11)), false).topicHash;
      }
      static from(t10) {
        if (rt.isFragment(t10))
          return t10;
        if ("string" == typeof t10)
          try {
            return rt.from(eH(t10));
          } catch (e10) {
            O(false, "invalid event fragment", "obj", t10);
          }
        else if (t10 instanceof eG) {
          let e10 = ej("event", t10), r10 = ez(t10, true), n10 = !!eV(t10, eP(["anonymous"])).has("anonymous");
          return eq(t10), new rt(e_, e10, r10, n10);
        }
        return new rt(e_, t10.name, t10.inputs ? t10.inputs.map((t11) => e8.from(t11, true)) : [], !!t10.anonymous);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e0;
      }
    }
    class re extends e5 {
      payable;
      gas;
      constructor(t10, e10, r10, n10, i10) {
        super(t10, e10, r10), Object.defineProperty(this, eW, { value: e1 }), P(this, { payable: n10, gas: i10 });
      }
      format(t10) {
        if (I(null != t10 && "sighash" !== t10, "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" }), "json" === t10)
          return JSON.stringify({ type: "constructor", stateMutability: this.payable ? "payable" : "undefined", payable: this.payable, gas: null != this.gas ? this.gas : void 0, inputs: this.inputs.map((e11) => JSON.parse(e11.format(t10))) });
        let e10 = [`constructor${e9(t10, this.inputs)}`];
        return this.payable && e10.push("payable"), null != this.gas && e10.push(`@${this.gas.toString()}`), e10.join(" ");
      }
      static from(t10) {
        if (re.isFragment(t10))
          return t10;
        if ("string" == typeof t10)
          try {
            return re.from(eH(t10));
          } catch (e10) {
            O(false, "invalid constuctor fragment", "obj", t10);
          }
        else if (t10 instanceof eG) {
          eV(t10, eP(["constructor"]));
          let e10 = ez(t10), r10 = !!eV(t10, eN).has("payable"), n10 = eK(t10);
          return eq(t10), new re(e_, "constructor", e10, r10, n10);
        }
        return new re(e_, "constructor", t10.inputs ? t10.inputs.map(e8.from) : [], !!t10.payable, null != t10.gas ? t10.gas : null);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e1;
      }
    }
    class rr extends e5 {
      payable;
      constructor(t10, e10, r10) {
        super(t10, "fallback", e10), Object.defineProperty(this, eW, { value: e2 }), P(this, { payable: r10 });
      }
      format(t10) {
        let e10 = 0 === this.inputs.length ? "receive" : "fallback";
        return "json" === t10 ? JSON.stringify({ type: e10, stateMutability: this.payable ? "payable" : "nonpayable" }) : `${e10}()${this.payable ? " payable" : ""}`;
      }
      static from(t10) {
        if (rr.isFragment(t10))
          return t10;
        if ("string" == typeof t10)
          try {
            return rr.from(eH(t10));
          } catch (e10) {
            O(false, "invalid fallback fragment", "obj", t10);
          }
        else if (t10 instanceof eG) {
          let e10 = t10.toString();
          if (O(t10.peekKeyword(eP(["fallback", "receive"])), "type must be fallback or receive", "obj", e10), "receive" === t10.popKeyword(eP(["fallback", "receive"]))) {
            let e11 = ez(t10);
            return O(0 === e11.length, "receive cannot have arguments", "obj.inputs", e11), eV(t10, eP(["payable"])), eq(t10), new rr(e_, [], true);
          }
          let r10 = ez(t10);
          r10.length ? O(1 === r10.length && "bytes" === r10[0].type, "invalid fallback inputs", "obj.inputs", r10.map((t11) => t11.format("minimal")).join(", ")) : r10 = [e8.from("bytes")];
          let n10 = eJ(t10);
          if (O("nonpayable" === n10 || "payable" === n10, "fallback cannot be constants", "obj.stateMutability", n10), eV(t10, eP(["returns"])).has("returns")) {
            let e11 = ez(t10);
            O(1 === e11.length && "bytes" === e11[0].type, "invalid fallback outputs", "obj.outputs", e11.map((t11) => t11.format("minimal")).join(", "));
          }
          return eq(t10), new rr(e_, r10, "payable" === n10);
        }
        return "receive" === t10.type ? new rr(e_, [], true) : "fallback" === t10.type ? new rr(e_, [e8.from("bytes")], "payable" === t10.stateMutability) : void O(false, "invalid fallback description", "obj", t10);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e2;
      }
    }
    class rn extends e6 {
      constant;
      outputs;
      stateMutability;
      payable;
      gas;
      constructor(t10, e10, r10, n10, i10, s10) {
        super(t10, "function", e10, n10), Object.defineProperty(this, eW, { value: e3 }), P(this, { constant: "view" === r10 || "pure" === r10, gas: s10, outputs: i10 = Object.freeze(i10.slice()), payable: "payable" === r10, stateMutability: r10 });
      }
      get selector() {
        return ex(this.format("sighash")).substring(0, 10);
      }
      format(t10) {
        if (null == t10 && (t10 = "sighash"), "json" === t10)
          return JSON.stringify({ type: "function", name: this.name, constant: this.constant, stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0, payable: this.payable, gas: null != this.gas ? this.gas : void 0, inputs: this.inputs.map((e11) => JSON.parse(e11.format(t10))), outputs: this.outputs.map((e11) => JSON.parse(e11.format(t10))) });
        let e10 = [];
        return "sighash" !== t10 && e10.push("function"), e10.push(this.name + e9(t10, this.inputs)), "sighash" !== t10 && ("nonpayable" !== this.stateMutability && e10.push(this.stateMutability), this.outputs && this.outputs.length && (e10.push("returns"), e10.push(e9(t10, this.outputs))), null != this.gas && e10.push(`@${this.gas.toString()}`)), e10.join(" ");
      }
      static getSelector(t10, e10) {
        return new rn(e_, t10, "view", e10 = (e10 || []).map((t11) => e8.from(t11)), [], null).selector;
      }
      static from(t10) {
        if (rn.isFragment(t10))
          return t10;
        if ("string" == typeof t10)
          try {
            return rn.from(eH(t10));
          } catch (e11) {
            O(false, "invalid function fragment", "obj", t10);
          }
        else if (t10 instanceof eG) {
          let e11 = ej("function", t10), r10 = ez(t10), n10 = eJ(t10), i10 = [];
          eV(t10, eP(["returns"])).has("returns") && (i10 = ez(t10));
          let s10 = eK(t10);
          return eq(t10), new rn(e_, e11, n10, r10, i10, s10);
        }
        let e10 = t10.stateMutability;
        return null != e10 || (e10 = "payable", "boolean" == typeof t10.constant ? (e10 = "view", t10.constant || (e10 = "payable", "boolean" != typeof t10.payable || t10.payable || (e10 = "nonpayable"))) : "boolean" != typeof t10.payable || t10.payable || (e10 = "nonpayable")), new rn(e_, t10.name, e10, t10.inputs ? t10.inputs.map(e8.from) : [], t10.outputs ? t10.outputs.map(e8.from) : [], null != t10.gas ? t10.gas : null);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e3;
      }
    }
    class ri extends e6 {
      constructor(t10, e10, r10) {
        super(t10, "struct", e10, r10), Object.defineProperty(this, eW, { value: e4 });
      }
      format() {
        throw Error("@TODO");
      }
      static from(t10) {
        if ("string" == typeof t10)
          try {
            return ri.from(eH(t10));
          } catch (e10) {
            O(false, "invalid struct fragment", "obj", t10);
          }
        else if (t10 instanceof eG) {
          let e10 = ej("struct", t10), r10 = ez(t10);
          return eq(t10), new ri(e_, e10, r10);
        }
        return new ri(e_, t10.name, t10.inputs ? t10.inputs.map(e8.from) : []);
      }
      static isFragment(t10) {
        return t10 && t10[eW] === e4;
      }
    }
    let rs = /* @__PURE__ */ new Map();
    rs.set(0, "GENERIC_PANIC"), rs.set(1, "ASSERT_FALSE"), rs.set(17, "OVERFLOW"), rs.set(18, "DIVIDE_BY_ZERO"), rs.set(33, "ENUM_RANGE_ERROR"), rs.set(34, "BAD_STORAGE_DATA"), rs.set(49, "STACK_UNDERFLOW"), rs.set(50, "ARRAY_RANGE_ERROR"), rs.set(65, "OUT_OF_MEMORY"), rs.set(81, "UNINITIALIZED_FUNCTION_CALL");
    let ra = new RegExp(/^bytes([0-9]*)$/), ro = new RegExp(/^(u?int)([0-9]*)$/), rl = null, ru = 1024;
    class rc {
      #p(t10) {
        if (t10.isArray())
          return new ea(this.#p(t10.arrayChildren), t10.arrayLength, t10.name);
        if (t10.isTuple())
          return new ev(t10.components.map((t11) => this.#p(t11)), t10.name);
        switch (t10.baseType) {
          case "address":
            return new er(t10.name);
          case "bool":
            return new eo(t10.name);
          case "string":
            return new eE(t10.name);
          case "bytes":
            return new eu(t10.name);
          case "":
            return new ef(t10.name);
        }
        let e10 = t10.type.match(ro);
        if (e10) {
          let r10 = parseInt(e10[2] || "256");
          return O(0 !== r10 && r10 <= 256 && r10 % 8 == 0, "invalid " + e10[1] + " bit length", "param", t10), new em(r10 / 8, "int" === e10[1], t10.name);
        }
        if (e10 = t10.type.match(ra)) {
          let r10 = parseInt(e10[1]);
          return O(0 !== r10 && r10 <= 32, "invalid bytes length", "param", t10), new ec(r10, t10.name);
        }
        O(false, "invalid type", "type", t10.type);
      }
      getDefaultValue(t10) {
        return new ev(t10.map((t11) => this.#p(e8.from(t11))), "_").defaultValue();
      }
      encode(t10, e10) {
        R(e10.length, t10.length, "types/values length mismatch");
        let r10 = new ev(t10.map((t11) => this.#p(e8.from(t11))), "_"), n10 = new td();
        return r10.encode(n10, e10), n10.data;
      }
      decode(t10, e10, r10) {
        return new ev(t10.map((t11) => this.#p(e8.from(t11))), "_").decode(new tp(e10, r10, ru));
      }
      static _setDefaultMaxInflation(t10) {
        O("number" == typeof t10 && Number.isInteger(t10), "invalid defaultMaxInflation factor", "value", t10), ru = t10;
      }
      static defaultAbiCoder() {
        return null == rl && (rl = new rc()), rl;
      }
      static getBuiltinCallException(t10, e10, r10) {
        return function(t11, e11, r11, n10) {
          let i10 = "missing revert data", s10 = null, a2 = null;
          if (r11) {
            i10 = "execution reverted";
            let t12 = F(r11);
            if (r11 = H(r11), 0 === t12.length)
              i10 += " (no data present; likely require(false) occurred", s10 = "require(false)";
            else if (t12.length % 32 != 4)
              i10 += " (could not decode reason; invalid data length)";
            else if ("0x08c379a0" === H(t12.slice(0, 4)))
              try {
                s10 = n10.decode(["string"], t12.slice(4))[0], a2 = { signature: "Error(string)", name: "Error", args: [s10] }, i10 += `: ${JSON.stringify(s10)}`;
              } catch (t13) {
                i10 += " (could not decode reason; invalid string data)";
              }
            else if ("0x4e487b71" === H(t12.slice(0, 4)))
              try {
                let e12 = Number(n10.decode(["uint256"], t12.slice(4))[0]);
                a2 = { signature: "Panic(uint256)", name: "Panic", args: [e12] }, s10 = `Panic due to ${rs.get(e12) || "UNKNOWN"}(${e12})`, i10 += `: ${s10}`;
              } catch (t13) {
                i10 += " (could not decode panic code)";
              }
            else
              i10 += " (unknown custom error)";
          }
          let o2 = { to: e11.to ? t5(e11.to) : null, data: e11.data || "0x" };
          return e11.from && (o2.from = t5(e11.from)), C(i10, "CALL_EXCEPTION", { action: t11, data: r11, reason: s10, transaction: o2, invocation: null, revert: a2 });
        }(t10, e10, r10, rc.defaultAbiCoder());
      }
    }
    function rh(t10) {
      return t10 && "function" == typeof t10.getAddress;
    }
    async function rf(t10, e10) {
      let r10 = await e10;
      return (null == r10 || "0x0000000000000000000000000000000000000000" === r10) && (I("string" != typeof t10, "unconfigured name", "UNCONFIGURED_NAME", { value: t10 }), O(false, "invalid AddressLike value; did not resolve to a value address", "target", t10)), t5(r10);
    }
    function rd(t10, e10) {
      return "string" == typeof t10 ? t10.match(/^0x[0-9a-f]{40}$/i) ? t5(t10) : (I(null != e10, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" }), rf(t10, e10.resolveName(t10))) : rh(t10) ? rf(t10, t10.getAddress()) : t10 && "function" == typeof t10.then ? rf(t10, t10) : void O(false, "unsupported addressable value", "target", t10);
    }
    let rp = new Uint8Array(32);
    rp.fill(0);
    let rg = BigInt(-1), rm = BigInt(0), ry = BigInt(1), rA = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), rb = te(ry, 32), rw = te(rm, 32), rE = { name: "string", version: "string", chainId: "uint256", verifyingContract: "address", salt: "bytes32" }, rv = ["name", "version", "chainId", "verifyingContract", "salt"];
    function rx(t10) {
      return function(e10) {
        return O("string" == typeof e10, `invalid domain value for ${JSON.stringify(t10)}`, `domain.${t10}`, e10), e10;
      };
    }
    let rP = { name: rx("name"), version: rx("version"), chainId: function(t10) {
      let e10 = _(t10, "domain.chainId");
      return (O(e10 >= 0, "invalid chain ID", "domain.chainId", t10), Number.isSafeInteger(e10)) ? Number(e10) : tn(e10);
    }, verifyingContract: function(t10) {
      try {
        return t5(t10).toLowerCase();
      } catch (t11) {
      }
      O(false, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t10);
    }, salt: function(t10) {
      let e10 = F(t10, "domain.salt");
      return O(32 === e10.length, 'invalid domain value "salt"', "domain.salt", t10), H(e10);
    } };
    function rN(t10) {
      {
        let e10 = t10.match(/^(u?)int(\d+)$/);
        if (e10) {
          let r10 = "" === e10[1], n10 = parseInt(e10[2]);
          O(n10 % 8 == 0 && 0 !== n10 && n10 <= 256 && e10[2] === String(n10), "invalid numeric width", "type", t10);
          let i10 = Y(rA, r10 ? n10 - 1 : n10), s10 = r10 ? (i10 + ry) * rg : rm;
          return function(e11) {
            let n11 = _(e11, "value");
            return O(n11 >= s10 && n11 <= i10, `value out-of-bounds for ${t10}`, "value", n11), te(r10 ? Z(n11, 256) : n11, 32);
          };
        }
      }
      {
        let e10 = t10.match(/^bytes(\d+)$/);
        if (e10) {
          let r10 = parseInt(e10[1]);
          return O(0 !== r10 && r10 <= 32 && e10[1] === String(r10), "invalid bytes width", "type", t10), function(e11) {
            return O(F(e11).length === r10, `invalid length for ${t10}`, "value", e11), function(t11) {
              let e12 = F(t11), r11 = e12.length % 32;
              return r11 ? Q([e12, rp.slice(r11)]) : H(e12);
            }(e11);
          };
        }
      }
      switch (t10) {
        case "address":
          return function(t11) {
            return z(t5(t11), 32);
          };
        case "bool":
          return function(t11) {
            return t11 ? rb : rw;
          };
        case "bytes":
          return function(t11) {
            return t0(t11);
          };
        case "string":
          return function(t11) {
            return ex(t11);
          };
      }
      return null;
    }
    function rk(t10, e10) {
      return `${t10}(${e10.map(({ name: t11, type: e11 }) => e11 + " " + t11).join(",")})`;
    }
    function rB(t10) {
      let e10 = t10.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
      return e10 ? { base: e10[1], index: e10[2] + e10[4], array: { base: e10[1], prefix: e10[1] + e10[2], count: e10[5] ? parseInt(e10[5]) : -1 } } : { base: t10 };
    }
    class rC {
      primaryType;
      #g;
      get types() {
        return JSON.parse(this.#g);
      }
      #m;
      #y;
      constructor(t10) {
        this.#m = /* @__PURE__ */ new Map(), this.#y = /* @__PURE__ */ new Map();
        let e10 = /* @__PURE__ */ new Map(), r10 = /* @__PURE__ */ new Map(), n10 = /* @__PURE__ */ new Map(), i10 = {};
        for (let s11 in Object.keys(t10).forEach((s12) => {
          i10[s12] = t10[s12].map(({ name: e11, type: r11 }) => {
            let { base: n11, index: i11 } = rB(r11);
            return "int" !== n11 || t10.int || (n11 = "int256"), "uint" !== n11 || t10.uint || (n11 = "uint256"), { name: e11, type: n11 + (i11 || "") };
          }), e10.set(s12, /* @__PURE__ */ new Set()), r10.set(s12, []), n10.set(s12, /* @__PURE__ */ new Set());
        }), this.#g = JSON.stringify(i10), i10) {
          let n11 = /* @__PURE__ */ new Set();
          for (let a2 of i10[s11]) {
            O(!n11.has(a2.name), `duplicate variable name ${JSON.stringify(a2.name)} in ${JSON.stringify(s11)}`, "types", t10), n11.add(a2.name);
            let i11 = rB(a2.type).base;
            O(i11 !== s11, `circular type reference to ${JSON.stringify(i11)}`, "types", t10), rN(i11) || (O(r10.has(i11), `unknown type ${JSON.stringify(i11)}`, "types", t10), r10.get(i11).push(s11), e10.get(s11).add(i11));
          }
        }
        let s10 = Array.from(r10.keys()).filter((t11) => 0 === r10.get(t11).length);
        for (let [a2, o2] of (O(0 !== s10.length, "missing primary type", "types", t10), O(1 === s10.length, `ambiguous primary types or unused types: ${s10.map((t11) => JSON.stringify(t11)).join(", ")}`, "types", t10), P(this, { primaryType: s10[0] }), !function i11(s11, a3) {
          for (let o3 of (O(!a3.has(s11), `circular type reference to ${JSON.stringify(s11)}`, "types", t10), a3.add(s11), e10.get(s11)))
            if (r10.has(o3))
              for (let t11 of (i11(o3, a3), a3))
                n10.get(t11).add(o3);
          a3.delete(s11);
        }(this.primaryType, /* @__PURE__ */ new Set()), n10)) {
          let t11 = Array.from(o2);
          t11.sort(), this.#m.set(a2, rk(a2, i10[a2]) + t11.map((t12) => rk(t12, i10[t12])).join(""));
        }
      }
      getEncoder(t10) {
        let e10 = this.#y.get(t10);
        return e10 || (e10 = this.#A(t10), this.#y.set(t10, e10)), e10;
      }
      #A(t10) {
        {
          let e11 = rN(t10);
          if (e11)
            return e11;
        }
        let e10 = rB(t10).array;
        if (e10) {
          let t11 = e10.prefix, r11 = this.getEncoder(t11);
          return (n10) => {
            O(-1 === e10.count || e10.count === n10.length, `array length mismatch; expected length ${e10.count}`, "value", n10);
            let i10 = n10.map(r11);
            return this.#m.has(t11) && (i10 = i10.map(t0)), t0(Q(i10));
          };
        }
        let r10 = this.types[t10];
        if (r10) {
          let e11 = ex(this.#m.get(t10));
          return (t11) => {
            let n10 = r10.map(({ name: e12, type: r11 }) => {
              let n11 = this.getEncoder(r11)(t11[e12]);
              return this.#m.has(r11) ? t0(n11) : n11;
            });
            return n10.unshift(e11), Q(n10);
          };
        }
        O(false, `unknown type: ${t10}`, "type", t10);
      }
      encodeType(t10) {
        let e10 = this.#m.get(t10);
        return O(e10, `unknown type: ${JSON.stringify(t10)}`, "name", t10), e10;
      }
      encodeData(t10, e10) {
        return this.getEncoder(t10)(e10);
      }
      hashStruct(t10, e10) {
        return t0(this.encodeData(t10, e10));
      }
      encode(t10) {
        return this.encodeData(this.primaryType, t10);
      }
      hash(t10) {
        return this.hashStruct(this.primaryType, t10);
      }
      _visit(t10, e10, r10) {
        if (rN(t10))
          return r10(t10, e10);
        let n10 = rB(t10).array;
        if (n10)
          return O(-1 === n10.count || n10.count === e10.length, `array length mismatch; expected length ${n10.count}`, "value", e10), e10.map((t11) => this._visit(n10.prefix, t11, r10));
        let i10 = this.types[t10];
        if (i10)
          return i10.reduce((t11, { name: n11, type: i11 }) => (t11[n11] = this._visit(i11, e10[n11], r10), t11), {});
        O(false, `unknown type: ${t10}`, "type", t10);
      }
      visit(t10, e10) {
        return this._visit(this.primaryType, t10, e10);
      }
      static from(t10) {
        return new rC(t10);
      }
      static getPrimaryType(t10) {
        return rC.from(t10).primaryType;
      }
      static hashStruct(t10, e10, r10) {
        return rC.from(e10).hashStruct(t10, r10);
      }
      static hashDomain(t10) {
        let e10 = [];
        for (let r10 in t10) {
          if (null == t10[r10])
            continue;
          let n10 = rE[r10];
          O(n10, `invalid typed-data domain key: ${JSON.stringify(r10)}`, "domain", t10), e10.push({ name: r10, type: n10 });
        }
        return e10.sort((t11, e11) => rv.indexOf(t11.name) - rv.indexOf(e11.name)), rC.hashStruct("EIP712Domain", { EIP712Domain: e10 }, t10);
      }
      static encode(t10, e10, r10) {
        return Q(["0x1901", rC.hashDomain(t10), rC.from(e10).hash(r10)]);
      }
      static hash(t10, e10, r10) {
        return t0(rC.encode(t10, e10, r10));
      }
      static async resolveNames(t10, e10, r10, n10) {
        for (let e11 in t10 = Object.assign({}, t10))
          null == t10[e11] && delete t10[e11];
        let i10 = {};
        t10.verifyingContract && !L(t10.verifyingContract, 20) && (i10[t10.verifyingContract] = "0x");
        let s10 = rC.from(e10);
        for (let t11 in s10.visit(r10, (t12, e11) => ("address" !== t12 || L(e11, 20) || (i10[e11] = "0x"), e11)), i10)
          i10[t11] = await n10(t11);
        return t10.verifyingContract && i10[t10.verifyingContract] && (t10.verifyingContract = i10[t10.verifyingContract]), r10 = s10.visit(r10, (t11, e11) => "address" === t11 && i10[e11] ? i10[e11] : e11), { domain: t10, value: r10 };
      }
      static getPayload(t10, e10, r10) {
        rC.hashDomain(t10);
        let n10 = {}, i10 = [];
        rv.forEach((e11) => {
          let r11 = t10[e11];
          null != r11 && (n10[e11] = rP[e11](r11), i10.push({ name: e11, type: rE[e11] }));
        });
        let s10 = rC.from(e10), a2 = Object.assign({}, e10 = s10.types);
        return O(null == a2.EIP712Domain, "types must not contain EIP712Domain type", "types.EIP712Domain", e10), a2.EIP712Domain = i10, s10.encode(r10), { types: a2, domain: n10, primaryType: s10.primaryType, message: s10.visit(r10, (t11, e11) => {
          if (t11.match(/^bytes(\d*)/))
            return H(F(e11));
          if (t11.match(/^u?int/))
            return _(e11).toString();
          switch (t11) {
            case "address":
              return e11.toLowerCase();
            case "bool":
              return !!e11;
            case "string":
              return O("string" == typeof e11, "invalid string", "value", e11), e11;
          }
          O(false, "unsupported type", "type", t11);
        }) };
      }
    }
    function rI(t10, e10) {
      return { address: t5(t10), storageKeys: e10.map((t11, e11) => (O(L(t11, 32), "invalid slot", `storageKeys[${e11}]`, t11), t11.toLowerCase())) };
    }
    function rO(t10) {
      if (Array.isArray(t10))
        return t10.map((e11, r10) => Array.isArray(e11) ? (O(2 === e11.length, "invalid slot set", `value[${r10}]`, e11), rI(e11[0], e11[1])) : (O(null != e11 && "object" == typeof e11, "invalid address-slot set", "value", t10), rI(e11.address, e11.storageKeys)));
      O(null != t10 && "object" == typeof t10, "invalid access list", "value", t10);
      let e10 = Object.keys(t10).map((e11) => {
        let r10 = t10[e11].reduce((t11, e12) => (t11[e12] = true, t11), {});
        return rI(e11, Object.keys(r10).sort());
      });
      return e10.sort((t11, e11) => t11.address.localeCompare(e11.address)), e10;
    }
    function rR(t10) {
      return async function(t11, e10) {
        let r10;
        I(null == e10 || !e10.cancelled, "request cancelled before sending", "CANCELLED");
        let n10 = t11.url.split(":")[0].toLowerCase();
        I("http" === n10 || "https" === n10, `unsupported protocol ${n10}`, "UNSUPPORTED_OPERATION", { info: { protocol: n10 }, operation: "request" }), I("https" === n10 || !t11.credentials || t11.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", { operation: "request" });
        let i10 = null, s10 = new AbortController(), a2 = setTimeout(() => {
          i10 = C("request timeout", "TIMEOUT"), s10.abort();
        }, t11.timeout);
        e10 && e10.addListener(() => {
          i10 = C("request cancelled", "CANCELLED"), s10.abort();
        });
        let o2 = { method: t11.method, headers: new Headers(Array.from(t11)), body: t11.body || void 0, signal: s10.signal };
        try {
          r10 = await fetch(t11.url, o2);
        } catch (t12) {
          if (clearTimeout(a2), i10)
            throw i10;
          throw t12;
        }
        clearTimeout(a2);
        let l2 = {};
        r10.headers.forEach((t12, e11) => {
          l2[e11.toLowerCase()] = t12;
        });
        let u2 = await r10.arrayBuffer(), c2 = null == u2 ? null : new Uint8Array(u2);
        return { statusCode: r10.status, statusMessage: r10.statusText, headers: l2, body: c2 };
      };
    }
    rR({});
    let rT = rR(), rS = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"), rU = RegExp("^ipfs://(ipfs/)?(.*)$", "i"), rF = false;
    async function rD(t10, e10) {
      try {
        var r10;
        let e11 = t10.match(rS);
        if (!e11)
          throw Error("invalid data");
        return new rV(200, "OK", { "content-type": e11[1] || "text/plain" }, e11[2] ? function(t11) {
          let e12 = new Uint8Array((t11 = atob(t11)).length);
          for (let r11 = 0; r11 < t11.length; r11++)
            e12[r11] = t11.charCodeAt(r11);
          return F(e12);
        }(e11[3]) : (r10 = e11[3], eb(r10.replace(/%([0-9a-f][0-9a-f])/gi, (t11, e12) => String.fromCharCode(parseInt(e12, 16))))));
      } catch (e11) {
        return new rV(599, "BAD REQUEST (invalid data: URI)", {}, null, new rj(t10));
      }
    }
    function rL(t10) {
      return async function(e10, r10) {
        try {
          let r11 = e10.match(rU);
          if (!r11)
            throw Error("invalid link");
          return new rj(`${t10}${r11[2]}`);
        } catch (t11) {
          return new rV(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new rj(e10));
        }
      };
    }
    let rM = { data: rD, ipfs: rL("https://gateway.ipfs.io/ipfs/") }, rG = /* @__PURE__ */ new WeakMap();
    class rH {
      #b;
      #w;
      constructor(t10) {
        this.#b = [], this.#w = false, rG.set(t10, () => {
          if (!this.#w) {
            for (let t11 of (this.#w = true, this.#b))
              setTimeout(() => {
                t11();
              }, 0);
            this.#b = [];
          }
        });
      }
      addListener(t10) {
        I(!this.#w, "singal already cancelled", "UNSUPPORTED_OPERATION", { operation: "fetchCancelSignal.addCancelListener" }), this.#b.push(t10);
      }
      get cancelled() {
        return this.#w;
      }
      checkSignal() {
        I(!this.cancelled, "cancelled", "CANCELLED", {});
      }
    }
    function rQ(t10) {
      if (null == t10)
        throw Error("missing signal; should not happen");
      return t10.checkSignal(), t10;
    }
    class rj {
      #E;
      #v;
      #x;
      #P;
      #N;
      #k;
      #B;
      #C;
      #I;
      #O;
      #R;
      #T;
      #S;
      #U;
      #F;
      get url() {
        return this.#k;
      }
      set url(t10) {
        this.#k = String(t10);
      }
      get body() {
        return null == this.#B ? null : new Uint8Array(this.#B);
      }
      set body(t10) {
        if (null == t10)
          this.#B = void 0, this.#C = void 0;
        else if ("string" == typeof t10)
          this.#B = eb(t10), this.#C = "text/plain";
        else if (t10 instanceof Uint8Array)
          this.#B = t10, this.#C = "application/octet-stream";
        else if ("object" == typeof t10)
          this.#B = eb(JSON.stringify(t10)), this.#C = "application/json";
        else
          throw Error("invalid body");
      }
      hasBody() {
        return null != this.#B;
      }
      get method() {
        return this.#P ? this.#P : this.hasBody() ? "POST" : "GET";
      }
      set method(t10) {
        null == t10 && (t10 = ""), this.#P = String(t10).toUpperCase();
      }
      get headers() {
        let t10 = Object.assign({}, this.#x);
        return this.#I && (t10.authorization = `Basic ${function(t11) {
          let e10 = F(t11), r10 = "";
          for (let t12 = 0; t12 < e10.length; t12++)
            r10 += String.fromCharCode(e10[t12]);
          return btoa(r10);
        }(eb(this.#I))}`), this.allowGzip && (t10["accept-encoding"] = "gzip"), null == t10["content-type"] && this.#C && (t10["content-type"] = this.#C), this.body && (t10["content-length"] = String(this.body.length)), t10;
      }
      getHeader(t10) {
        return this.headers[t10.toLowerCase()];
      }
      setHeader(t10, e10) {
        this.#x[String(t10).toLowerCase()] = String(e10);
      }
      clearHeaders() {
        this.#x = {};
      }
      [Symbol.iterator]() {
        let t10 = this.headers, e10 = Object.keys(t10), r10 = 0;
        return { next: () => {
          if (r10 < e10.length) {
            let n10 = e10[r10++];
            return { value: [n10, t10[n10]], done: false };
          }
          return { value: void 0, done: true };
        } };
      }
      get credentials() {
        return this.#I || null;
      }
      setCredentials(t10, e10) {
        O(!t10.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), this.#I = `${t10}:${e10}`;
      }
      get allowGzip() {
        return this.#v;
      }
      set allowGzip(t10) {
        this.#v = !!t10;
      }
      get allowInsecureAuthentication() {
        return !!this.#E;
      }
      set allowInsecureAuthentication(t10) {
        this.#E = !!t10;
      }
      get timeout() {
        return this.#N;
      }
      set timeout(t10) {
        O(t10 >= 0, "timeout must be non-zero", "timeout", t10), this.#N = t10;
      }
      get preflightFunc() {
        return this.#O || null;
      }
      set preflightFunc(t10) {
        this.#O = t10;
      }
      get processFunc() {
        return this.#R || null;
      }
      set processFunc(t10) {
        this.#R = t10;
      }
      get retryFunc() {
        return this.#T || null;
      }
      set retryFunc(t10) {
        this.#T = t10;
      }
      get getUrlFunc() {
        return this.#F || rT;
      }
      set getUrlFunc(t10) {
        this.#F = t10;
      }
      constructor(t10) {
        this.#k = String(t10), this.#E = false, this.#v = true, this.#x = {}, this.#P = "", this.#N = 3e5, this.#U = { slotInterval: 250, maxAttempts: 12 }, this.#F = null;
      }
      toString() {
        return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${this.#B ? H(this.#B) : "null"}>`;
      }
      setThrottleParams(t10) {
        null != t10.slotInterval && (this.#U.slotInterval = t10.slotInterval), null != t10.maxAttempts && (this.#U.maxAttempts = t10.maxAttempts);
      }
      async #D(t10, e10, r10, n10, i10) {
        if (t10 >= this.#U.maxAttempts)
          return i10.makeServerError("exceeded maximum retry limit");
        I(rJ() <= e10, "timeout", "TIMEOUT", { operation: "request.send", reason: "timeout", request: n10 }), r10 > 0 && await new Promise((t11) => setTimeout(t11, r10));
        let s10 = this.clone(), a2 = (s10.url.split(":")[0] || "").toLowerCase();
        if (a2 in rM) {
          let t11 = await rM[a2](s10.url, rQ(n10.#S));
          if (t11 instanceof rV) {
            let e11 = t11;
            if (this.processFunc) {
              rQ(n10.#S);
              try {
                e11 = await this.processFunc(s10, e11);
              } catch (t12) {
                (null == t12.throttle || "number" != typeof t12.stall) && e11.makeServerError("error in post-processing function", t12).assertOk();
              }
            }
            return e11;
          }
          s10 = t11;
        }
        this.preflightFunc && (s10 = await this.preflightFunc(s10));
        let o2 = await this.getUrlFunc(s10, rQ(n10.#S)), l2 = new rV(o2.statusCode, o2.statusMessage, o2.headers, o2.body, n10);
        if (301 === l2.statusCode || 302 === l2.statusCode) {
          try {
            let r11 = l2.headers.location || "";
            return s10.redirect(r11).#D(t10 + 1, e10, 0, n10, l2);
          } catch (t11) {
          }
          return l2;
        }
        if (429 === l2.statusCode && (null == this.retryFunc || await this.retryFunc(s10, l2, t10))) {
          let r11 = l2.headers["retry-after"], i11 = this.#U.slotInterval * Math.trunc(Math.random() * Math.pow(2, t10));
          return "string" == typeof r11 && r11.match(/^[1-9][0-9]*$/) && (i11 = parseInt(r11)), s10.clone().#D(t10 + 1, e10, i11, n10, l2);
        }
        if (this.processFunc) {
          rQ(n10.#S);
          try {
            l2 = await this.processFunc(s10, l2);
          } catch (i11) {
            (null == i11.throttle || "number" != typeof i11.stall) && l2.makeServerError("error in post-processing function", i11).assertOk();
            let r11 = this.#U.slotInterval * Math.trunc(Math.random() * Math.pow(2, t10));
            return i11.stall >= 0 && (r11 = i11.stall), s10.clone().#D(t10 + 1, e10, r11, n10, l2);
          }
        }
        return l2;
      }
      send() {
        return I(null == this.#S, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" }), this.#S = new rH(this), this.#D(0, rJ() + this.timeout, 0, this, new rV(0, "", {}, null, this));
      }
      cancel() {
        I(null != this.#S, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
        let t10 = rG.get(this);
        if (!t10)
          throw Error("missing signal; should not happen");
        t10();
      }
      redirect(t10) {
        let e10 = this.url.split(":")[0].toLowerCase(), r10 = t10.split(":")[0].toLowerCase();
        I("GET" === this.method && ("https" !== e10 || "http" !== r10) && t10.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", { operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t10)})` });
        let n10 = new rj(t10);
        return n10.method = "GET", n10.allowGzip = this.allowGzip, n10.timeout = this.timeout, n10.#x = Object.assign({}, this.#x), this.#B && (n10.#B = new Uint8Array(this.#B)), n10.#C = this.#C, n10;
      }
      clone() {
        let t10 = new rj(this.url);
        return t10.#P = this.#P, this.#B && (t10.#B = this.#B), t10.#C = this.#C, t10.#x = Object.assign({}, this.#x), t10.#I = this.#I, this.allowGzip && (t10.allowGzip = true), t10.timeout = this.timeout, this.allowInsecureAuthentication && (t10.allowInsecureAuthentication = true), t10.#O = this.#O, t10.#R = this.#R, t10.#T = this.#T, t10.#U = Object.assign({}, this.#U), t10.#F = this.#F, t10;
      }
      static lockConfig() {
        rF = true;
      }
      static getGateway(t10) {
        return rM[t10.toLowerCase()] || null;
      }
      static registerGateway(t10, e10) {
        if ("http" === (t10 = t10.toLowerCase()) || "https" === t10)
          throw Error(`cannot intercept ${t10}; use registerGetUrl`);
        if (rF)
          throw Error("gateways locked");
        rM[t10] = e10;
      }
      static registerGetUrl(t10) {
        if (rF)
          throw Error("gateways locked");
        rT = t10;
      }
      static createGetUrlFunc(t10) {
        return rR(t10);
      }
      static createDataGateway() {
        return rD;
      }
      static createIpfsGatewayFunc(t10) {
        return rL(t10);
      }
    }
    class rV {
      #L;
      #M;
      #x;
      #B;
      #G;
      #H;
      toString() {
        return `<FetchResponse status=${this.statusCode} body=${this.#B ? H(this.#B) : "null"}>`;
      }
      get statusCode() {
        return this.#L;
      }
      get statusMessage() {
        return this.#M;
      }
      get headers() {
        return Object.assign({}, this.#x);
      }
      get body() {
        return null == this.#B ? null : new Uint8Array(this.#B);
      }
      get bodyText() {
        try {
          return null == this.#B ? "" : ew(this.#B);
        } catch (t10) {
          I(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", { operation: "bodyText", info: { response: this } });
        }
      }
      get bodyJson() {
        try {
          return JSON.parse(this.bodyText);
        } catch (t10) {
          I(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", { operation: "bodyJson", info: { response: this } });
        }
      }
      [Symbol.iterator]() {
        let t10 = this.headers, e10 = Object.keys(t10), r10 = 0;
        return { next: () => {
          if (r10 < e10.length) {
            let n10 = e10[r10++];
            return { value: [n10, t10[n10]], done: false };
          }
          return { value: void 0, done: true };
        } };
      }
      constructor(t10, e10, r10, n10, i10) {
        this.#L = t10, this.#M = e10, this.#x = Object.keys(r10).reduce((t11, e11) => (t11[e11.toLowerCase()] = String(r10[e11]), t11), {}), this.#B = null == n10 ? null : new Uint8Array(n10), this.#G = i10 || null, this.#H = { message: "" };
      }
      makeServerError(t10, e10) {
        let r10;
        t10 ? r10 = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t10})` : (t10 = `${this.statusCode} ${this.statusMessage}`, r10 = `CLIENT ESCALATED SERVER ERROR (${t10})`);
        let n10 = new rV(599, r10, this.headers, this.body, this.#G || void 0);
        return n10.#H = { message: t10, error: e10 }, n10;
      }
      throwThrottleError(t10, e10) {
        null == e10 ? e10 = -1 : O(Number.isInteger(e10) && e10 >= 0, "invalid stall timeout", "stall", e10);
        let r10 = Error(t10 || "throttling requests");
        throw P(r10, { stall: e10, throttle: true }), r10;
      }
      getHeader(t10) {
        return this.headers[t10.toLowerCase()];
      }
      hasBody() {
        return null != this.#B;
      }
      get request() {
        return this.#G;
      }
      ok() {
        return "" === this.#H.message && this.statusCode >= 200 && this.statusCode < 300;
      }
      assertOk() {
        if (this.ok())
          return;
        let { message: t10, error: e10 } = this.#H;
        "" === t10 && (t10 = `server response ${this.statusCode} ${this.statusMessage}`);
        let r10 = null;
        this.request && (r10 = this.request.url);
        let n10 = null;
        try {
          this.#B && (n10 = ew(this.#B));
        } catch (t11) {
        }
        I(false, t10, "SERVER_ERROR", { request: this.request || "unknown request", response: this, error: e10, info: { requestUrl: r10, responseBody: n10, responseStatus: `${this.statusCode} ${this.statusMessage}` } });
      }
    }
    function rJ() {
      return new Date().getTime();
    }
    let rz = "0x0000000000000000000000000000000000000000";
    class rK {
      fragment;
      name;
      signature;
      topic;
      args;
      constructor(t10, e10, r10) {
        let n10 = t10.name, i10 = t10.format();
        P(this, { fragment: t10, name: n10, signature: i10, topic: e10, args: r10 });
      }
    }
    class rq {
      fragment;
      name;
      args;
      signature;
      selector;
      value;
      constructor(t10, e10, r10, n10) {
        let i10 = t10.name, s10 = t10.format();
        P(this, { fragment: t10, name: i10, args: r10, signature: s10, selector: e10, value: n10 });
      }
    }
    class rZ {
      fragment;
      name;
      args;
      signature;
      selector;
      constructor(t10, e10, r10) {
        let n10 = t10.name, i10 = t10.format();
        P(this, { fragment: t10, name: n10, args: r10, signature: i10, selector: e10 });
      }
    }
    class rY {
      hash;
      _isIndexed;
      static isIndexed(t10) {
        return !!(t10 && t10._isIndexed);
      }
      constructor(t10) {
        P(this, { hash: t10, _isIndexed: true });
      }
    }
    let r_ = { 0: "generic panic", 1: "assert(false)", 17: "arithmetic overflow", 18: "division or modulo by zero", 33: "enum overflow", 34: "invalid encoded storage byte array accessed", 49: "out-of-bounds array access; popping on an empty array", 50: "out-of-bounds access of an array or bytesN", 65: "out of memory", 81: "uninitialized function" }, rW = { "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: (t10) => `reverted with reason string ${JSON.stringify(t10)}` }, "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"], reason: (t10) => {
      let e10 = "unknown panic code";
      return t10 >= 0 && t10 <= 255 && r_[t10.toString()] && (e10 = r_[t10.toString()]), `reverted with panic code 0x${t10.toString(16)} (${e10})`;
    } } };
    class rX {
      fragments;
      deploy;
      fallback;
      receive;
      #Q;
      #j;
      #V;
      #J;
      constructor(t10) {
        let e10 = [];
        e10 = "string" == typeof t10 ? JSON.parse(t10) : t10, this.#V = /* @__PURE__ */ new Map(), this.#Q = /* @__PURE__ */ new Map(), this.#j = /* @__PURE__ */ new Map();
        let r10 = [];
        for (let t11 of e10)
          try {
            r10.push(e5.from(t11));
          } catch (e11) {
            console.log(`[Warning] Invalid Fragment ${JSON.stringify(t11)}:`, e11.message);
          }
        P(this, { fragments: Object.freeze(r10) });
        let n10 = null, i10 = false;
        this.#J = this.getAbiCoder(), this.fragments.forEach((t11, e11) => {
          let r11;
          switch (t11.type) {
            case "constructor":
              if (this.deploy) {
                console.log("duplicate definition - constructor");
                return;
              }
              P(this, { deploy: t11 });
              return;
            case "fallback":
              0 === t11.inputs.length ? i10 = true : (O(!n10 || t11.payable !== n10.payable, "conflicting fallback fragments", `fragments[${e11}]`, t11), i10 = (n10 = t11).payable);
              return;
            case "function":
              r11 = this.#V;
              break;
            case "event":
              r11 = this.#j;
              break;
            case "error":
              r11 = this.#Q;
              break;
            default:
              return;
          }
          let s10 = t11.format();
          r11.has(s10) || r11.set(s10, t11);
        }), this.deploy || P(this, { deploy: re.from("constructor()") }), P(this, { fallback: n10, receive: i10 });
      }
      format(t10) {
        let e10 = t10 ? "minimal" : "full";
        return this.fragments.map((t11) => t11.format(e10));
      }
      formatJson() {
        return JSON.stringify(this.fragments.map((t10) => t10.format("json")).map((t10) => JSON.parse(t10)));
      }
      getAbiCoder() {
        return rc.defaultAbiCoder();
      }
      #z(t10, e10, r10) {
        if (L(t10)) {
          let e11 = t10.toLowerCase();
          for (let t11 of this.#V.values())
            if (e11 === t11.selector)
              return t11;
          return null;
        }
        if (-1 === t10.indexOf("(")) {
          let n10 = [];
          for (let [e11, r11] of this.#V)
            e11.split("(")[0] === t10 && n10.push(r11);
          if (e10) {
            let t11 = e10.length > 0 ? e10[e10.length - 1] : null, r11 = e10.length, i10 = true;
            ee.isTyped(t11) && "overrides" === t11.type && (i10 = false, r11--);
            for (let t12 = n10.length - 1; t12 >= 0; t12--) {
              let e11 = n10[t12].inputs.length;
              e11 === r11 || i10 && e11 === r11 - 1 || n10.splice(t12, 1);
            }
            for (let t12 = n10.length - 1; t12 >= 0; t12--) {
              let r12 = n10[t12].inputs;
              for (let i11 = 0; i11 < e10.length; i11++)
                if (ee.isTyped(e10[i11])) {
                  if (i11 >= r12.length) {
                    if ("overrides" === e10[i11].type)
                      continue;
                    n10.splice(t12, 1);
                    break;
                  }
                  if (e10[i11].type !== r12[i11].baseType) {
                    n10.splice(t12, 1);
                    break;
                  }
                }
            }
          }
          if (1 === n10.length && e10 && e10.length !== n10[0].inputs.length) {
            let t11 = e10[e10.length - 1];
            (null == t11 || Array.isArray(t11) || "object" != typeof t11) && n10.splice(0, 1);
          }
          if (0 === n10.length)
            return null;
          if (n10.length > 1 && r10) {
            let e11 = n10.map((t11) => JSON.stringify(t11.format())).join(", ");
            O(false, `ambiguous function description (i.e. matches ${e11})`, "key", t10);
          }
          return n10[0];
        }
        return this.#V.get(rn.from(t10).format()) || null;
      }
      getFunctionName(t10) {
        let e10 = this.#z(t10, null, false);
        return O(e10, "no matching function", "key", t10), e10.name;
      }
      hasFunction(t10) {
        return !!this.#z(t10, null, false);
      }
      getFunction(t10, e10) {
        return this.#z(t10, e10 || null, true);
      }
      forEachFunction(t10) {
        let e10 = Array.from(this.#V.keys());
        e10.sort((t11, e11) => t11.localeCompare(e11));
        for (let r10 = 0; r10 < e10.length; r10++) {
          let n10 = e10[r10];
          t10(this.#V.get(n10), r10);
        }
      }
      #K(t10, e10, r10) {
        if (L(t10)) {
          let e11 = t10.toLowerCase();
          for (let t11 of this.#j.values())
            if (e11 === t11.topicHash)
              return t11;
          return null;
        }
        if (-1 === t10.indexOf("(")) {
          let n10 = [];
          for (let [e11, r11] of this.#j)
            e11.split("(")[0] === t10 && n10.push(r11);
          if (e10) {
            for (let t11 = n10.length - 1; t11 >= 0; t11--)
              n10[t11].inputs.length < e10.length && n10.splice(t11, 1);
            for (let t11 = n10.length - 1; t11 >= 0; t11--) {
              let r11 = n10[t11].inputs;
              for (let i10 = 0; i10 < e10.length; i10++)
                if (ee.isTyped(e10[i10]) && e10[i10].type !== r11[i10].baseType) {
                  n10.splice(t11, 1);
                  break;
                }
            }
          }
          if (0 === n10.length)
            return null;
          if (n10.length > 1 && r10) {
            let e11 = n10.map((t11) => JSON.stringify(t11.format())).join(", ");
            O(false, `ambiguous event description (i.e. matches ${e11})`, "key", t10);
          }
          return n10[0];
        }
        return this.#j.get(rt.from(t10).format()) || null;
      }
      getEventName(t10) {
        let e10 = this.#K(t10, null, false);
        return O(e10, "no matching event", "key", t10), e10.name;
      }
      hasEvent(t10) {
        return !!this.#K(t10, null, false);
      }
      getEvent(t10, e10) {
        return this.#K(t10, e10 || null, true);
      }
      forEachEvent(t10) {
        let e10 = Array.from(this.#j.keys());
        e10.sort((t11, e11) => t11.localeCompare(e11));
        for (let r10 = 0; r10 < e10.length; r10++) {
          let n10 = e10[r10];
          t10(this.#j.get(n10), r10);
        }
      }
      getError(t10, e10) {
        if (L(t10)) {
          let e11 = t10.toLowerCase();
          if (rW[e11])
            return e7.from(rW[e11].signature);
          for (let t11 of this.#Q.values())
            if (e11 === t11.selector)
              return t11;
          return null;
        }
        if (-1 === t10.indexOf("(")) {
          let e11 = [];
          for (let [r10, n10] of this.#Q)
            r10.split("(")[0] === t10 && e11.push(n10);
          if (0 === e11.length)
            return "Error" === t10 ? e7.from("error Error(string)") : "Panic" === t10 ? e7.from("error Panic(uint256)") : null;
          if (e11.length > 1) {
            let r10 = e11.map((t11) => JSON.stringify(t11.format())).join(", ");
            O(false, `ambiguous error description (i.e. ${r10})`, "name", t10);
          }
          return e11[0];
        }
        return "Error(string)" === (t10 = e7.from(t10).format()) ? e7.from("error Error(string)") : "Panic(uint256)" === t10 ? e7.from("error Panic(uint256)") : this.#Q.get(t10) || null;
      }
      forEachError(t10) {
        let e10 = Array.from(this.#Q.keys());
        e10.sort((t11, e11) => t11.localeCompare(e11));
        for (let r10 = 0; r10 < e10.length; r10++) {
          let n10 = e10[r10];
          t10(this.#Q.get(n10), r10);
        }
      }
      _decodeParams(t10, e10) {
        return this.#J.decode(t10, e10);
      }
      _encodeParams(t10, e10) {
        return this.#J.encode(t10, e10);
      }
      encodeDeploy(t10) {
        return this._encodeParams(this.deploy.inputs, t10 || []);
      }
      decodeErrorResult(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getError(t10);
          O(e11, "unknown error", "fragment", t10), t10 = e11;
        }
        return O(V(e10, 0, 4) === t10.selector, `data signature does not match error ${t10.name}.`, "data", e10), this._decodeParams(t10.inputs, V(e10, 4));
      }
      encodeErrorResult(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getError(t10);
          O(e11, "unknown error", "fragment", t10), t10 = e11;
        }
        return Q([t10.selector, this._encodeParams(t10.inputs, e10 || [])]);
      }
      decodeFunctionData(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getFunction(t10);
          O(e11, "unknown function", "fragment", t10), t10 = e11;
        }
        return O(V(e10, 0, 4) === t10.selector, `data signature does not match function ${t10.name}.`, "data", e10), this._decodeParams(t10.inputs, V(e10, 4));
      }
      encodeFunctionData(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getFunction(t10);
          O(e11, "unknown function", "fragment", t10), t10 = e11;
        }
        return Q([t10.selector, this._encodeParams(t10.inputs, e10 || [])]);
      }
      decodeFunctionResult(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getFunction(t10);
          O(e11, "unknown function", "fragment", t10), t10 = e11;
        }
        let r10 = "invalid length for result data", n10 = D(e10);
        if (n10.length % 32 == 0)
          try {
            return this.#J.decode(t10.outputs, n10);
          } catch (t11) {
            r10 = "could not decode result data";
          }
        I(false, r10, "BAD_DATA", { value: H(n10), info: { method: t10.name, signature: t10.format() } });
      }
      makeError(t10, e10) {
        let r10 = F(t10, "data"), n10 = rc.getBuiltinCallException("call", e10, r10);
        if (n10.message.startsWith("execution reverted (unknown custom error)")) {
          let t11 = H(r10.slice(0, 4)), e11 = this.getError(t11);
          if (e11)
            try {
              let t12 = this.#J.decode(e11.inputs, r10.slice(4));
              n10.revert = { name: e11.name, signature: e11.format(), args: t12 }, n10.reason = n10.revert.signature, n10.message = `execution reverted: ${n10.reason}`;
            } catch (t12) {
              n10.message = "execution reverted (coult not decode custom error)";
            }
        }
        let i10 = this.parseTransaction(e10);
        return i10 && (n10.invocation = { method: i10.name, signature: i10.signature, args: i10.args }), n10;
      }
      encodeFunctionResult(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getFunction(t10);
          O(e11, "unknown function", "fragment", t10), t10 = e11;
        }
        return H(this.#J.encode(t10.outputs, e10 || []));
      }
      encodeFilterTopics(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getEvent(t10);
          O(e11, "unknown event", "eventFragment", t10), t10 = e11;
        }
        I(e10.length <= t10.inputs.length, `too many arguments for ${t10.format()}`, "UNEXPECTED_ARGUMENT", { count: e10.length, expectedCount: t10.inputs.length });
        let r10 = [];
        t10.anonymous || r10.push(t10.topicHash);
        let n10 = (t11, e11) => "string" === t11.type ? ex(e11) : "bytes" === t11.type ? t0(H(e11)) : ("bool" === t11.type && "boolean" == typeof e11 ? e11 = e11 ? "0x01" : "0x00" : t11.type.match(/^u?int/) ? e11 = te(e11) : t11.type.match(/^bytes/) ? e11 = J(e11, 32, false) : "address" === t11.type && this.#J.encode(["address"], [e11]), z(H(e11), 32));
        for (e10.forEach((e11, i10) => {
          let s10 = t10.inputs[i10];
          if (!s10.indexed) {
            O(null == e11, "cannot filter non-indexed parameters; must be null", "contract." + s10.name, e11);
            return;
          }
          null == e11 ? r10.push(null) : "array" === s10.baseType || "tuple" === s10.baseType ? O(false, "filtering with tuples or arrays not supported", "contract." + s10.name, e11) : Array.isArray(e11) ? r10.push(e11.map((t11) => n10(s10, t11))) : r10.push(n10(s10, e11));
        }); r10.length && null === r10[r10.length - 1]; )
          r10.pop();
        return r10;
      }
      encodeEventLog(t10, e10) {
        if ("string" == typeof t10) {
          let e11 = this.getEvent(t10);
          O(e11, "unknown event", "eventFragment", t10), t10 = e11;
        }
        let r10 = [], n10 = [], i10 = [];
        return t10.anonymous || r10.push(t10.topicHash), O(e10.length === t10.inputs.length, "event arguments/values mismatch", "values", e10), t10.inputs.forEach((t11, s10) => {
          let a2 = e10[s10];
          if (t11.indexed) {
            if ("string" === t11.type)
              r10.push(ex(a2));
            else if ("bytes" === t11.type)
              r10.push(t0(a2));
            else if ("tuple" === t11.baseType || "array" === t11.baseType)
              throw Error("not implemented");
            else
              r10.push(this.#J.encode([t11.type], [a2]));
          } else
            n10.push(t11), i10.push(a2);
        }), { data: this.#J.encode(n10, i10), topics: r10 };
      }
      decodeEventLog(t10, e10, r10) {
        if ("string" == typeof t10) {
          let e11 = this.getEvent(t10);
          O(e11, "unknown event", "eventFragment", t10), t10 = e11;
        }
        if (null != r10 && !t10.anonymous) {
          let e11 = t10.topicHash;
          O(L(r10[0], 32) && r10[0].toLowerCase() === e11, "fragment/topic mismatch", "topics[0]", r10[0]), r10 = r10.slice(1);
        }
        let n10 = [], i10 = [], s10 = [];
        t10.inputs.forEach((t11, e11) => {
          t11.indexed ? "string" === t11.type || "bytes" === t11.type || "tuple" === t11.baseType || "array" === t11.baseType ? (n10.push(e8.from({ type: "bytes32", name: t11.name })), s10.push(true)) : (n10.push(t11), s10.push(false)) : (i10.push(t11), s10.push(false));
        });
        let a2 = null != r10 ? this.#J.decode(n10, Q(r10)) : null, o2 = this.#J.decode(i10, e10, true), l2 = [], u2 = [], c2 = 0, h2 = 0;
        return t10.inputs.forEach((t11, e11) => {
          let r11 = null;
          if (t11.indexed) {
            if (null == a2)
              r11 = new rY(null);
            else if (s10[e11])
              r11 = new rY(a2[h2++]);
            else
              try {
                r11 = a2[h2++];
              } catch (t12) {
                r11 = t12;
              }
          } else
            try {
              r11 = o2[c2++];
            } catch (t12) {
              r11 = t12;
            }
          l2.push(r11), u2.push(t11.name || null);
        }), tc.fromItems(l2, u2);
      }
      parseTransaction(t10) {
        let e10 = F(t10.data, "tx.data"), r10 = _(null != t10.value ? t10.value : 0, "tx.value"), n10 = this.getFunction(H(e10.slice(0, 4)));
        if (!n10)
          return null;
        let i10 = this.#J.decode(n10.inputs, e10.slice(4));
        return new rq(n10, n10.selector, i10, r10);
      }
      parseCallResult(t10) {
        throw Error("@TODO");
      }
      parseLog(t10) {
        let e10 = this.getEvent(t10.topics[0]);
        return !e10 || e10.anonymous ? null : new rK(e10, e10.topicHash, this.decodeEventLog(e10, t10.data, t10.topics));
      }
      parseError(t10) {
        let e10 = H(t10), r10 = this.getError(V(e10, 0, 4));
        if (!r10)
          return null;
        let n10 = this.#J.decode(r10.inputs, V(e10, 4));
        return new rZ(r10, r10.selector, n10);
      }
      static from(t10) {
        return t10 instanceof rX ? t10 : new rX("string" == typeof t10 ? JSON.parse(t10) : "function" == typeof t10.formatJson ? t10.formatJson() : "function" == typeof t10.format ? t10.format("json") : t10);
      }
    }
    let r$ = BigInt(0);
    function r0(t10) {
      return null == t10 ? null : t10;
    }
    function r1(t10) {
      return null == t10 ? null : t10.toString();
    }
    class r2 {
      gasPrice;
      maxFeePerGas;
      maxPriorityFeePerGas;
      constructor(t10, e10, r10) {
        P(this, { gasPrice: r0(t10), maxFeePerGas: r0(e10), maxPriorityFeePerGas: r0(r10) });
      }
      toJSON() {
        let { gasPrice: t10, maxFeePerGas: e10, maxPriorityFeePerGas: r10 } = this;
        return { _type: "FeeData", gasPrice: r1(t10), maxFeePerGas: r1(e10), maxPriorityFeePerGas: r1(r10) };
      }
    }
    function r3(t10) {
      let e10 = {};
      for (let r10 of (t10.to && (e10.to = t10.to), t10.from && (e10.from = t10.from), t10.data && (e10.data = H(t10.data)), "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/)))
        r10 in t10 && null != t10[r10] && (e10[r10] = _(t10[r10], `request.${r10}`));
      for (let r10 of "type,nonce".split(/,/))
        r10 in t10 && null != t10[r10] && (e10[r10] = tt(t10[r10], `request.${r10}`));
      return t10.accessList && (e10.accessList = rO(t10.accessList)), "blockTag" in t10 && (e10.blockTag = t10.blockTag), "enableCcipRead" in t10 && (e10.enableCcipRead = !!t10.enableCcipRead), "customData" in t10 && (e10.customData = t10.customData), "blobVersionedHashes" in t10 && t10.blobVersionedHashes && (e10.blobVersionedHashes = t10.blobVersionedHashes.slice()), "kzg" in t10 && (e10.kzg = t10.kzg), "blobs" in t10 && t10.blobs && (e10.blobs = t10.blobs.map((t11) => M(t11) ? H(t11) : Object.assign({}, t11))), e10;
    }
    class r4 {
      provider;
      number;
      hash;
      timestamp;
      parentHash;
      parentBeaconBlockRoot;
      nonce;
      difficulty;
      gasLimit;
      gasUsed;
      stateRoot;
      receiptsRoot;
      blobGasUsed;
      excessBlobGas;
      miner;
      prevRandao;
      extraData;
      baseFeePerGas;
      #q;
      constructor(t10, e10) {
        this.#q = t10.transactions.map((t11) => "string" != typeof t11 ? new r6(t11, e10) : t11), P(this, { provider: e10, hash: r0(t10.hash), number: t10.number, timestamp: t10.timestamp, parentHash: t10.parentHash, parentBeaconBlockRoot: t10.parentBeaconBlockRoot, nonce: t10.nonce, difficulty: t10.difficulty, gasLimit: t10.gasLimit, gasUsed: t10.gasUsed, blobGasUsed: t10.blobGasUsed, excessBlobGas: t10.excessBlobGas, miner: t10.miner, prevRandao: r0(t10.prevRandao), extraData: t10.extraData, baseFeePerGas: r0(t10.baseFeePerGas), stateRoot: t10.stateRoot, receiptsRoot: t10.receiptsRoot });
      }
      get transactions() {
        return this.#q.map((t10) => "string" == typeof t10 ? t10 : t10.hash);
      }
      get prefetchedTransactions() {
        let t10 = this.#q.slice();
        return 0 === t10.length ? [] : (I("object" == typeof t10[0], "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", { operation: "transactionResponses()" }), t10);
      }
      toJSON() {
        let { baseFeePerGas: t10, difficulty: e10, extraData: r10, gasLimit: n10, gasUsed: i10, hash: s10, miner: a2, prevRandao: o2, nonce: l2, number: u2, parentHash: c2, parentBeaconBlockRoot: h2, stateRoot: f2, receiptsRoot: d2, timestamp: p2, transactions: g2 } = this;
        return { _type: "Block", baseFeePerGas: r1(t10), difficulty: r1(e10), extraData: r10, gasLimit: r1(n10), gasUsed: r1(i10), blobGasUsed: r1(this.blobGasUsed), excessBlobGas: r1(this.excessBlobGas), hash: s10, miner: a2, prevRandao: o2, nonce: l2, number: u2, parentHash: c2, timestamp: p2, parentBeaconBlockRoot: h2, stateRoot: f2, receiptsRoot: d2, transactions: g2 };
      }
      [Symbol.iterator]() {
        let t10 = 0, e10 = this.transactions;
        return { next: () => t10 < this.length ? { value: e10[t10++], done: false } : { value: void 0, done: true } };
      }
      get length() {
        return this.#q.length;
      }
      get date() {
        return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
      }
      async getTransaction(t10) {
        let e10;
        if ("number" == typeof t10)
          e10 = this.#q[t10];
        else {
          let r10 = t10.toLowerCase();
          for (let t11 of this.#q) {
            if ("string" == typeof t11) {
              if (t11 !== r10)
                continue;
              e10 = t11;
              break;
            }
            if (t11.hash !== r10) {
              e10 = t11;
              break;
            }
          }
        }
        if (null == e10)
          throw Error("no such tx");
        return "string" == typeof e10 ? await this.provider.getTransaction(e10) : e10;
      }
      getPrefetchedTransaction(t10) {
        let e10 = this.prefetchedTransactions;
        if ("number" == typeof t10)
          return e10[t10];
        for (let r10 of (t10 = t10.toLowerCase(), e10))
          if (r10.hash === t10)
            return r10;
        O(false, "no matching transaction", "indexOrHash", t10);
      }
      isMined() {
        return !!this.hash;
      }
      isLondon() {
        return !!this.baseFeePerGas;
      }
      orphanedEvent() {
        if (!this.isMined())
          throw Error("");
        return { orphan: "drop-block", hash: this.hash, number: this.number };
      }
    }
    class r8 {
      provider;
      transactionHash;
      blockHash;
      blockNumber;
      removed;
      address;
      data;
      topics;
      index;
      transactionIndex;
      constructor(t10, e10) {
        this.provider = e10;
        let r10 = Object.freeze(t10.topics.slice());
        P(this, { transactionHash: t10.transactionHash, blockHash: t10.blockHash, blockNumber: t10.blockNumber, removed: t10.removed, address: t10.address, data: t10.data, topics: r10, index: t10.index, transactionIndex: t10.transactionIndex });
      }
      toJSON() {
        let { address: t10, blockHash: e10, blockNumber: r10, data: n10, index: i10, removed: s10, topics: a2, transactionHash: o2, transactionIndex: l2 } = this;
        return { _type: "log", address: t10, blockHash: e10, blockNumber: r10, data: n10, index: i10, removed: s10, topics: a2, transactionHash: o2, transactionIndex: l2 };
      }
      async getBlock() {
        let t10 = await this.provider.getBlock(this.blockHash);
        return I(!!t10, "failed to find transaction", "UNKNOWN_ERROR", {}), t10;
      }
      async getTransaction() {
        let t10 = await this.provider.getTransaction(this.transactionHash);
        return I(!!t10, "failed to find transaction", "UNKNOWN_ERROR", {}), t10;
      }
      async getTransactionReceipt() {
        let t10 = await this.provider.getTransactionReceipt(this.transactionHash);
        return I(!!t10, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t10;
      }
      removedEvent() {
        return { orphan: "drop-log", log: { transactionHash: this.transactionHash, blockHash: this.blockHash, blockNumber: this.blockNumber, address: this.address, data: this.data, topics: Object.freeze(this.topics.slice()), index: this.index } };
      }
    }
    class r5 {
      provider;
      to;
      from;
      contractAddress;
      hash;
      index;
      blockHash;
      blockNumber;
      logsBloom;
      gasUsed;
      blobGasUsed;
      cumulativeGasUsed;
      gasPrice;
      blobGasPrice;
      type;
      status;
      root;
      #Z;
      constructor(t10, e10) {
        this.#Z = Object.freeze(t10.logs.map((t11) => new r8(t11, e10)));
        let r10 = r$;
        null != t10.effectiveGasPrice ? r10 = t10.effectiveGasPrice : null != t10.gasPrice && (r10 = t10.gasPrice), P(this, { provider: e10, to: t10.to, from: t10.from, contractAddress: t10.contractAddress, hash: t10.hash, index: t10.index, blockHash: t10.blockHash, blockNumber: t10.blockNumber, logsBloom: t10.logsBloom, gasUsed: t10.gasUsed, cumulativeGasUsed: t10.cumulativeGasUsed, blobGasUsed: t10.blobGasUsed, gasPrice: r10, blobGasPrice: t10.blobGasPrice, type: t10.type, status: t10.status, root: t10.root });
      }
      get logs() {
        return this.#Z;
      }
      toJSON() {
        let { to: t10, from: e10, contractAddress: r10, hash: n10, index: i10, blockHash: s10, blockNumber: a2, logsBloom: o2, logs: l2, status: u2, root: c2 } = this;
        return { _type: "TransactionReceipt", blockHash: s10, blockNumber: a2, contractAddress: r10, cumulativeGasUsed: r1(this.cumulativeGasUsed), from: e10, gasPrice: r1(this.gasPrice), blobGasUsed: r1(this.blobGasUsed), blobGasPrice: r1(this.blobGasPrice), gasUsed: r1(this.gasUsed), hash: n10, index: i10, logs: l2, logsBloom: o2, root: c2, status: u2, to: t10 };
      }
      get length() {
        return this.logs.length;
      }
      [Symbol.iterator]() {
        let t10 = 0;
        return { next: () => t10 < this.length ? { value: this.logs[t10++], done: false } : { value: void 0, done: true } };
      }
      get fee() {
        return this.gasUsed * this.gasPrice;
      }
      async getBlock() {
        let t10 = await this.provider.getBlock(this.blockHash);
        if (null == t10)
          throw Error("TODO");
        return t10;
      }
      async getTransaction() {
        let t10 = await this.provider.getTransaction(this.hash);
        if (null == t10)
          throw Error("TODO");
        return t10;
      }
      async getResult() {
        return await this.provider.getTransactionResult(this.hash);
      }
      async confirmations() {
        return await this.provider.getBlockNumber() - this.blockNumber + 1;
      }
      removedEvent() {
        return r7(this);
      }
      reorderedEvent(t10) {
        return I(!t10 || t10.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" }), r9(this, t10);
      }
    }
    class r6 {
      provider;
      blockNumber;
      blockHash;
      index;
      hash;
      type;
      to;
      from;
      nonce;
      gasLimit;
      gasPrice;
      maxPriorityFeePerGas;
      maxFeePerGas;
      maxFeePerBlobGas;
      data;
      value;
      chainId;
      signature;
      accessList;
      blobVersionedHashes;
      #Y;
      constructor(t10, e10) {
        this.provider = e10, this.blockNumber = null != t10.blockNumber ? t10.blockNumber : null, this.blockHash = null != t10.blockHash ? t10.blockHash : null, this.hash = t10.hash, this.index = t10.index, this.type = t10.type, this.from = t10.from, this.to = t10.to || null, this.gasLimit = t10.gasLimit, this.nonce = t10.nonce, this.data = t10.data, this.value = t10.value, this.gasPrice = t10.gasPrice, this.maxPriorityFeePerGas = null != t10.maxPriorityFeePerGas ? t10.maxPriorityFeePerGas : null, this.maxFeePerGas = null != t10.maxFeePerGas ? t10.maxFeePerGas : null, this.maxFeePerBlobGas = null != t10.maxFeePerBlobGas ? t10.maxFeePerBlobGas : null, this.chainId = t10.chainId, this.signature = t10.signature, this.accessList = null != t10.accessList ? t10.accessList : null, this.blobVersionedHashes = null != t10.blobVersionedHashes ? t10.blobVersionedHashes : null, this.#Y = -1;
      }
      toJSON() {
        let { blockNumber: t10, blockHash: e10, index: r10, hash: n10, type: i10, to: s10, from: a2, nonce: o2, data: l2, signature: u2, accessList: c2, blobVersionedHashes: h2 } = this;
        return { _type: "TransactionResponse", accessList: c2, blockNumber: t10, blockHash: e10, blobVersionedHashes: h2, chainId: r1(this.chainId), data: l2, from: a2, gasLimit: r1(this.gasLimit), gasPrice: r1(this.gasPrice), hash: n10, maxFeePerGas: r1(this.maxFeePerGas), maxPriorityFeePerGas: r1(this.maxPriorityFeePerGas), maxFeePerBlobGas: r1(this.maxFeePerBlobGas), nonce: o2, signature: u2, to: s10, index: r10, type: i10, value: r1(this.value) };
      }
      async getBlock() {
        let t10 = this.blockNumber;
        if (null == t10) {
          let e11 = await this.getTransaction();
          e11 && (t10 = e11.blockNumber);
        }
        if (null == t10)
          return null;
        let e10 = this.provider.getBlock(t10);
        if (null == e10)
          throw Error("TODO");
        return e10;
      }
      async getTransaction() {
        return this.provider.getTransaction(this.hash);
      }
      async confirmations() {
        if (null == this.blockNumber) {
          let { tx: t10, blockNumber: e10 } = await x({ tx: this.getTransaction(), blockNumber: this.provider.getBlockNumber() });
          return null == t10 || null == t10.blockNumber ? 0 : e10 - t10.blockNumber + 1;
        }
        return await this.provider.getBlockNumber() - this.blockNumber + 1;
      }
      async wait(t10, e10) {
        let r10 = null == t10 ? 1 : t10, n10 = null == e10 ? 0 : e10, i10 = this.#Y, s10 = -1, a2 = -1 === i10, o2 = async () => {
          if (a2)
            return null;
          let { blockNumber: t11, nonce: e11 } = await x({ blockNumber: this.provider.getBlockNumber(), nonce: this.provider.getTransactionCount(this.from) });
          if (e11 < this.nonce) {
            i10 = t11;
            return;
          }
          if (a2)
            return null;
          let n11 = await this.getTransaction();
          if (!n11 || null == n11.blockNumber)
            for (-1 === s10 && (s10 = i10 - 3) < this.#Y && (s10 = this.#Y); s10 <= t11; ) {
              if (a2)
                return null;
              let e12 = await this.provider.getBlock(s10, true);
              if (null == e12)
                break;
              for (let t12 of e12)
                if (t12 === this.hash)
                  return;
              for (let n12 = 0; n12 < e12.length; n12++) {
                let s11 = await e12.getTransaction(n12);
                if (s11.from === this.from && s11.nonce === this.nonce) {
                  if (a2)
                    return null;
                  let e13 = await this.provider.getTransactionReceipt(s11.hash);
                  if (null == e13 || t11 - e13.blockNumber + 1 < r10)
                    return;
                  let n13 = "replaced";
                  s11.data === this.data && s11.to === this.to && s11.value === this.value ? n13 = "repriced" : "0x" === s11.data && s11.from === s11.to && s11.value === r$ && (n13 = "cancelled"), I(false, "transaction was replaced", "TRANSACTION_REPLACED", { cancelled: "replaced" === n13 || "cancelled" === n13, reason: n13, replacement: s11.replaceableTransaction(i10), hash: s11.hash, receipt: e13 });
                }
              }
              s10++;
            }
        }, l2 = (t11) => {
          if (null == t11 || 0 !== t11.status)
            return t11;
          I(false, "transaction execution reverted", "CALL_EXCEPTION", { action: "sendTransaction", data: null, reason: null, invocation: null, revert: null, transaction: { to: t11.to, from: t11.from, data: "" }, receipt: t11 });
        }, u2 = await this.provider.getTransactionReceipt(this.hash);
        if (0 === r10)
          return l2(u2);
        if (u2) {
          if (await u2.confirmations() >= r10)
            return l2(u2);
        } else if (await o2(), 0 === r10)
          return null;
        let c2 = new Promise((t11, e11) => {
          let s11 = [], u3 = () => {
            s11.forEach((t12) => t12());
          };
          if (s11.push(() => {
            a2 = true;
          }), n10 > 0) {
            let t12 = setTimeout(() => {
              u3(), e11(C("wait for transaction timeout", "TIMEOUT"));
            }, n10);
            s11.push(() => {
              clearTimeout(t12);
            });
          }
          let c3 = async (n11) => {
            if (await n11.confirmations() >= r10) {
              u3();
              try {
                t11(l2(n11));
              } catch (t12) {
                e11(t12);
              }
            }
          };
          if (s11.push(() => {
            this.provider.off(this.hash, c3);
          }), this.provider.on(this.hash, c3), i10 >= 0) {
            let t12 = async () => {
              try {
                await o2();
              } catch (t13) {
                if (k(t13, "TRANSACTION_REPLACED")) {
                  u3(), e11(t13);
                  return;
                }
              }
              a2 || this.provider.once("block", t12);
            };
            s11.push(() => {
              this.provider.off("block", t12);
            }), this.provider.once("block", t12);
          }
        });
        return await c2;
      }
      isMined() {
        return null != this.blockHash;
      }
      isLegacy() {
        return 0 === this.type;
      }
      isBerlin() {
        return 1 === this.type;
      }
      isLondon() {
        return 2 === this.type;
      }
      isCancun() {
        return 3 === this.type;
      }
      removedEvent() {
        return I(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), r7(this);
      }
      reorderedEvent(t10) {
        return I(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), I(!t10 || t10.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" }), r9(this, t10);
      }
      replaceableTransaction(t10) {
        O(Number.isInteger(t10) && t10 >= 0, "invalid startBlock", "startBlock", t10);
        let e10 = new r6(this, this.provider);
        return e10.#Y = t10, e10;
      }
    }
    function r9(t10, e10) {
      return { orphan: "reorder-transaction", tx: t10, other: e10 };
    }
    function r7(t10) {
      return { orphan: "drop-transaction", tx: t10 };
    }
    class nt {
      filter;
      emitter;
      #_;
      constructor(t10, e10, r10) {
        this.#_ = e10, P(this, { emitter: t10, filter: r10 });
      }
      async removeListener() {
        null != this.#_ && await this.emitter.off(this.filter, this.#_);
      }
    }
    class ne extends r8 {
      interface;
      fragment;
      args;
      constructor(t10, e10, r10) {
        super(t10, t10.provider), P(this, { args: e10.decodeEventLog(r10, t10.data, t10.topics), fragment: r10, interface: e10 });
      }
      get eventName() {
        return this.fragment.name;
      }
      get eventSignature() {
        return this.fragment.format();
      }
    }
    class nr extends r8 {
      error;
      constructor(t10, e10) {
        super(t10, t10.provider), P(this, { error: e10 });
      }
    }
    class nn extends r5 {
      #W;
      constructor(t10, e10, r10) {
        super(r10, e10), this.#W = t10;
      }
      get logs() {
        return super.logs.map((t10) => {
          let e10 = t10.topics.length ? this.#W.getEvent(t10.topics[0]) : null;
          if (e10)
            try {
              return new ne(t10, this.#W, e10);
            } catch (e11) {
              return new nr(t10, e11);
            }
          return t10;
        });
      }
    }
    class ni extends r6 {
      #W;
      constructor(t10, e10, r10) {
        super(r10, e10), this.#W = t10;
      }
      async wait(t10, e10) {
        let r10 = await super.wait(t10, e10);
        return null == r10 ? null : new nn(this.#W, this.provider, r10);
      }
    }
    class ns extends nt {
      log;
      constructor(t10, e10, r10, n10) {
        super(t10, e10, r10), P(this, { log: n10 });
      }
      async getBlock() {
        return await this.log.getBlock();
      }
      async getTransaction() {
        return await this.log.getTransaction();
      }
      async getTransactionReceipt() {
        return await this.log.getTransactionReceipt();
      }
    }
    class na extends ns {
      constructor(t10, e10, r10, n10, i10) {
        super(t10, e10, r10, new ne(i10, t10.interface, n10)), P(this, { args: t10.interface.decodeEventLog(n10, this.log.data, this.log.topics), fragment: n10 });
      }
      get eventName() {
        return this.fragment.name;
      }
      get eventSignature() {
        return this.fragment.format();
      }
    }
    let no = BigInt(0);
    function nl(t10) {
      return t10 && "function" == typeof t10.call;
    }
    function nu(t10) {
      return t10 && "function" == typeof t10.estimateGas;
    }
    function nc(t10) {
      return t10 && "function" == typeof t10.resolveName;
    }
    function nh(t10) {
      return t10 && "function" == typeof t10.sendTransaction;
    }
    function nf(t10) {
      if (null != t10) {
        if (nc(t10))
          return t10;
        if (t10.provider)
          return t10.provider;
      }
    }
    class nd {
      #X;
      fragment;
      constructor(t10, e10, r10) {
        if (P(this, { fragment: e10 }), e10.inputs.length < r10.length)
          throw Error("too many arguments");
        let n10 = np(t10.runner, "resolveName"), i10 = nc(n10) ? n10 : null;
        this.#X = async function() {
          let n11 = await Promise.all(e10.inputs.map((t11, e11) => null == r10[e11] ? null : t11.walkAsync(r10[e11], (t12, e12) => "address" === t12 ? Array.isArray(e12) ? Promise.all(e12.map((t13) => rd(t13, i10))) : rd(e12, i10) : e12)));
          return t10.interface.encodeFilterTopics(e10, n11);
        }();
      }
      getTopicFilter() {
        return this.#X;
      }
    }
    function np(t10, e10) {
      return null == t10 ? null : "function" == typeof t10[e10] ? t10 : t10.provider && "function" == typeof t10.provider[e10] ? t10.provider : null;
    }
    function ng(t10) {
      return null == t10 ? null : t10.provider || null;
    }
    async function nm(t10, e10) {
      let r10 = ee.dereference(t10, "overrides");
      O("object" == typeof r10, "invalid overrides parameter", "overrides", t10);
      let n10 = r3(r10);
      return O(null == n10.to || (e10 || []).indexOf("to") >= 0, "cannot override to", "overrides.to", n10.to), O(null == n10.data || (e10 || []).indexOf("data") >= 0, "cannot override data", "overrides.data", n10.data), n10.from && (n10.from = n10.from), n10;
    }
    async function ny(t10, e10, r10) {
      let n10 = np(t10, "resolveName"), i10 = nc(n10) ? n10 : null;
      return await Promise.all(e10.map((t11, e11) => t11.walkAsync(r10[e11], (t12, e12) => (e12 = ee.dereference(e12, t12), "address" === t12) ? rd(e12, i10) : e12)));
    }
    let nA = Symbol.for("_ethersInternal_contract"), nb = /* @__PURE__ */ new WeakMap();
    function nw(t10) {
      return nb.get(t10[nA]);
    }
    async function nE(t10, e10) {
      let r10;
      let n10 = null;
      if (Array.isArray(e10)) {
        let n11 = function(e11) {
          if (L(e11, 32))
            return e11;
          let r11 = t10.interface.getEvent(e11);
          return O(r11, "unknown fragment", "name", e11), r11.topicHash;
        };
        r10 = e10.map((t11) => null == t11 ? null : Array.isArray(t11) ? t11.map(n11) : n11(t11));
      } else
        "*" === e10 ? r10 = [null] : "string" == typeof e10 ? L(e10, 32) ? r10 = [e10] : (O(n10 = t10.interface.getEvent(e10), "unknown fragment", "event", e10), r10 = [n10.topicHash]) : e10 && "object" == typeof e10 && "getTopicFilter" in e10 && "function" == typeof e10.getTopicFilter && e10.fragment ? r10 = await e10.getTopicFilter() : "fragment" in e10 ? r10 = [(n10 = e10.fragment).topicHash] : O(false, "unknown event name", "event", e10);
      return { fragment: n10, tag: (r10 = r10.map((t11) => {
        if (null == t11)
          return null;
        if (Array.isArray(t11)) {
          let e11 = Array.from(new Set(t11.map((t12) => t12.toLowerCase())).values());
          return 1 === e11.length ? e11[0] : (e11.sort(), e11);
        }
        return t11.toLowerCase();
      })).map((t11) => null == t11 ? "null" : Array.isArray(t11) ? t11.join("|") : t11).join("&"), topics: r10 };
    }
    async function nv(t10, e10) {
      let { subs: r10 } = nw(t10);
      return r10.get((await nE(t10, e10)).tag) || null;
    }
    async function nx(t10, e10, r10) {
      let n10 = ng(t10.runner);
      I(n10, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation: e10 });
      let { fragment: i10, tag: s10, topics: a2 } = await nE(t10, r10), { addr: o2, subs: l2 } = nw(t10), u2 = l2.get(s10);
      if (!u2) {
        let e11 = { address: o2 || t10, topics: a2 }, c2 = (e12) => {
          let n11 = i10;
          if (null == n11)
            try {
              n11 = t10.interface.getEvent(e12.topics[0]);
            } catch (t11) {
            }
          if (n11) {
            let s11 = n11, a3 = i10 ? t10.interface.decodeEventLog(i10, e12.data, e12.topics) : [];
            nk(t10, r10, a3, (n12) => new na(t10, n12, r10, s11, e12));
          } else
            nk(t10, r10, [], (n12) => new ns(t10, n12, r10, e12));
        }, h2 = [];
        u2 = { tag: s10, listeners: [], start: () => {
          h2.length || h2.push(n10.on(e11, c2));
        }, stop: async () => {
          if (0 == h2.length)
            return;
          let t11 = h2;
          h2 = [], await Promise.all(t11), n10.off(e11, c2);
        } }, l2.set(s10, u2);
      }
      return u2;
    }
    let nP = Promise.resolve();
    async function nN(t10, e10, r10, n10) {
      await nP;
      let i10 = await nv(t10, e10);
      if (!i10)
        return false;
      let s10 = i10.listeners.length;
      return i10.listeners = i10.listeners.filter(({ listener: e11, once: i11 }) => {
        let s11 = Array.from(r10);
        n10 && s11.push(n10(i11 ? null : e11));
        try {
          e11.call(t10, ...s11);
        } catch (t11) {
        }
        return !i11;
      }), 0 === i10.listeners.length && (i10.stop(), nw(t10).subs.delete(i10.tag)), s10 > 0;
    }
    async function nk(t10, e10, r10, n10) {
      try {
        await nP;
      } catch (t11) {
      }
      let i10 = nN(t10, e10, r10, n10);
      return nP = i10, await i10;
    }
    let nB = ["then"];
    class nC {
      target;
      interface;
      runner;
      filters;
      [nA];
      fallback;
      constructor(t10, e10, r10, n10) {
        var i10;
        let s10;
        O("string" == typeof t10 || rh(t10), "invalid value for Contract target", "target", t10), null == r10 && (r10 = null);
        let a2 = rX.from(e10);
        P(this, { target: t10, runner: r10, interface: a2 }), Object.defineProperty(this, nA, { value: {} });
        let o2 = null, l2 = null;
        if (n10) {
          let t11 = ng(r10);
          l2 = new ni(this.interface, t11, n10);
        }
        let u2 = /* @__PURE__ */ new Map();
        if ("string" == typeof t10) {
          if (L(t10))
            o2 = t10, s10 = Promise.resolve(t10);
          else {
            let e11 = np(r10, "resolveName");
            if (!nc(e11))
              throw C("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
            s10 = e11.resolveName(t10).then((e12) => {
              if (null == e12)
                throw C("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", { value: t10 });
              return nw(this).addr = e12, e12;
            });
          }
        } else
          s10 = t10.getAddress().then((t11) => {
            if (null == t11)
              throw Error("TODO");
            return nw(this).addr = t11, t11;
          });
        return i10 = { addrPromise: s10, addr: o2, deployTx: l2, subs: u2 }, nb.set(this[nA], i10), P(this, { filters: new Proxy({}, { get: (t11, e11, r11) => {
          if ("symbol" == typeof e11 || nB.indexOf(e11) >= 0)
            return Reflect.get(t11, e11, r11);
          try {
            return this.getEvent(e11);
          } catch (t12) {
            if (!k(t12, "INVALID_ARGUMENT") || "key" !== t12.argument)
              throw t12;
          }
        }, has: (t11, e11) => nB.indexOf(e11) >= 0 ? Reflect.has(t11, e11) : Reflect.has(t11, e11) || this.interface.hasEvent(String(e11)) }) }), P(this, { fallback: a2.receive || a2.fallback ? function(t11) {
          let e11 = async function(e12) {
            let r12 = await nm(e12, ["data"]);
            r12.to = await t11.getAddress(), r12.from && (r12.from = await rd(r12.from, nf(t11.runner)));
            let n12 = t11.interface, i12 = _(r12.value || no, "overrides.value") === no, s12 = "0x" === (r12.data || "0x");
            return !n12.fallback || n12.fallback.payable || !n12.receive || s12 || i12 || O(false, "cannot send data to receive or send value to non-payable fallback", "overrides", e12), O(n12.fallback || s12, "cannot send data to receive-only contract", "overrides.data", r12.data), O(n12.receive || n12.fallback && n12.fallback.payable || i12, "cannot send value to non-payable fallback", "overrides.value", r12.value), O(n12.fallback || s12, "cannot send data to receive-only contract", "overrides.data", r12.data), r12;
          }, r11 = async function(r12) {
            let n12 = np(t11.runner, "call");
            I(nl(n12), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
            let i12 = await e11(r12);
            try {
              return await n12.call(i12);
            } catch (e12) {
              if (B(e12) && e12.data)
                throw t11.interface.makeError(e12.data, i12);
              throw e12;
            }
          }, n11 = async function(r12) {
            let n12 = t11.runner;
            I(nh(n12), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
            let i12 = await n12.sendTransaction(await e11(r12)), s12 = ng(t11.runner);
            return new ni(t11.interface, s12, i12);
          }, i11 = async function(r12) {
            let n12 = np(t11.runner, "estimateGas");
            return I(nu(n12), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await n12.estimateGas(await e11(r12));
          }, s11 = async (t12) => await n11(t12);
          return P(s11, { _contract: t11, estimateGas: i11, populateTransaction: e11, send: n11, staticCall: r11 }), s11;
        }(this) : null }), new Proxy(this, { get: (t11, e11, r11) => {
          if ("symbol" == typeof e11 || e11 in t11 || nB.indexOf(e11) >= 0)
            return Reflect.get(t11, e11, r11);
          try {
            return t11.getFunction(e11);
          } catch (t12) {
            if (!k(t12, "INVALID_ARGUMENT") || "key" !== t12.argument)
              throw t12;
          }
        }, has: (t11, e11) => "symbol" == typeof e11 || e11 in t11 || nB.indexOf(e11) >= 0 ? Reflect.has(t11, e11) : t11.interface.hasFunction(e11) });
      }
      connect(t10) {
        return new nC(this.target, this.interface, t10);
      }
      attach(t10) {
        return new nC(t10, this.interface, this.runner);
      }
      async getAddress() {
        return await nw(this).addrPromise;
      }
      async getDeployedCode() {
        let t10 = ng(this.runner);
        I(t10, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
        let e10 = await t10.getCode(await this.getAddress());
        return "0x" === e10 ? null : e10;
      }
      async waitForDeployment() {
        let t10 = this.deploymentTransaction();
        if (t10)
          return await t10.wait(), this;
        if (null != await this.getDeployedCode())
          return this;
        let e10 = ng(this.runner);
        return I(null != e10, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" }), new Promise((t11, r10) => {
          let n10 = async () => {
            try {
              let r11 = await this.getDeployedCode();
              if (null != r11)
                return t11(this);
              e10.once("block", n10);
            } catch (t12) {
              r10(t12);
            }
          };
          n10();
        });
      }
      deploymentTransaction() {
        return nw(this).deployTx;
      }
      getFunction(t10) {
        return "string" != typeof t10 && (t10 = t10.format()), function(t11, e10) {
          let r10 = function(...r11) {
            let n11 = t11.interface.getFunction(e10, r11);
            return I(n11, "no matching fragment", "UNSUPPORTED_OPERATION", { operation: "fragment", info: { key: e10, args: r11 } }), n11;
          }, n10 = async function(...e11) {
            let n11 = r10(...e11), i11 = {};
            if (n11.inputs.length + 1 === e11.length && (i11 = await nm(e11.pop())).from && (i11.from = await rd(i11.from, nf(t11.runner))), n11.inputs.length !== e11.length)
              throw Error("internal error: fragment inputs doesn't match arguments; should not happen");
            let s11 = await ny(t11.runner, n11.inputs, e11);
            return Object.assign({}, i11, await x({ to: t11.getAddress(), data: t11.interface.encodeFunctionData(n11, s11) }));
          }, i10 = async function(...t12) {
            let e11 = await o2(...t12);
            return 1 === e11.length ? e11[0] : e11;
          }, s10 = async function(...e11) {
            let r11 = t11.runner;
            I(nh(r11), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
            let i11 = await r11.sendTransaction(await n10(...e11)), s11 = ng(t11.runner);
            return new ni(t11.interface, s11, i11);
          }, a2 = async function(...e11) {
            let r11 = np(t11.runner, "estimateGas");
            return I(nu(r11), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" }), await r11.estimateGas(await n10(...e11));
          }, o2 = async function(...e11) {
            let i11 = np(t11.runner, "call");
            I(nl(i11), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
            let s11 = await n10(...e11), a3 = "0x";
            try {
              a3 = await i11.call(s11);
            } catch (e12) {
              if (B(e12) && e12.data)
                throw t11.interface.makeError(e12.data, s11);
              throw e12;
            }
            let o3 = r10(...e11);
            return t11.interface.decodeFunctionResult(o3, a3);
          }, l2 = async (...t12) => r10(...t12).constant ? await i10(...t12) : await s10(...t12);
          return P(l2, { name: t11.interface.getFunctionName(e10), _contract: t11, _key: e10, getFragment: r10, estimateGas: a2, populateTransaction: n10, send: s10, staticCall: i10, staticCallResult: o2 }), Object.defineProperty(l2, "fragment", { configurable: false, enumerable: true, get: () => {
            let r11 = t11.interface.getFunction(e10);
            return I(r11, "no matching fragment", "UNSUPPORTED_OPERATION", { operation: "fragment", info: { key: e10 } }), r11;
          } }), l2;
        }(this, t10);
      }
      getEvent(t10) {
        return "string" != typeof t10 && (t10 = t10.format()), function(t11, e10) {
          let r10 = function(...r11) {
            let n11 = t11.interface.getEvent(e10, r11);
            return I(n11, "no matching fragment", "UNSUPPORTED_OPERATION", { operation: "fragment", info: { key: e10, args: r11 } }), n11;
          }, n10 = function(...e11) {
            return new nd(t11, r10(...e11), e11);
          };
          return P(n10, { name: t11.interface.getEventName(e10), _contract: t11, _key: e10, getFragment: r10 }), Object.defineProperty(n10, "fragment", { configurable: false, enumerable: true, get: () => {
            let r11 = t11.interface.getEvent(e10);
            return I(r11, "no matching fragment", "UNSUPPORTED_OPERATION", { operation: "fragment", info: { key: e10 } }), r11;
          } }), n10;
        }(this, t10);
      }
      async queryTransaction(t10) {
        throw Error("@TODO");
      }
      async queryFilter(t10, e10, r10) {
        null == e10 && (e10 = 0), null == r10 && (r10 = "latest");
        let { addr: n10, addrPromise: i10 } = nw(this), s10 = n10 || await i10, { fragment: a2, topics: o2 } = await nE(this, t10), l2 = { address: s10, topics: o2, fromBlock: e10, toBlock: r10 }, u2 = ng(this.runner);
        return I(u2, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" }), (await u2.getLogs(l2)).map((t11) => {
          let e11 = a2;
          if (null == e11)
            try {
              e11 = this.interface.getEvent(t11.topics[0]);
            } catch (t12) {
            }
          if (e11)
            try {
              return new ne(t11, this.interface, e11);
            } catch (e12) {
              return new nr(t11, e12);
            }
          return new r8(t11, u2);
        });
      }
      async on(t10, e10) {
        let r10 = await nx(this, "on", t10);
        return r10.listeners.push({ listener: e10, once: false }), r10.start(), this;
      }
      async once(t10, e10) {
        let r10 = await nx(this, "once", t10);
        return r10.listeners.push({ listener: e10, once: true }), r10.start(), this;
      }
      async emit(t10, ...e10) {
        return await nk(this, t10, e10, null);
      }
      async listenerCount(t10) {
        if (t10) {
          let e11 = await nv(this, t10);
          return e11 ? e11.listeners.length : 0;
        }
        let { subs: e10 } = nw(this), r10 = 0;
        for (let { listeners: t11 } of e10.values())
          r10 += t11.length;
        return r10;
      }
      async listeners(t10) {
        if (t10) {
          let e11 = await nv(this, t10);
          return e11 ? e11.listeners.map(({ listener: t11 }) => t11) : [];
        }
        let { subs: e10 } = nw(this), r10 = [];
        for (let { listeners: t11 } of e10.values())
          r10 = r10.concat(t11.map(({ listener: t12 }) => t12));
        return r10;
      }
      async off(t10, e10) {
        let r10 = await nv(this, t10);
        if (!r10)
          return this;
        if (e10) {
          let t11 = r10.listeners.map(({ listener: t12 }) => t12).indexOf(e10);
          t11 >= 0 && r10.listeners.splice(t11, 1);
        }
        return (null == e10 || 0 === r10.listeners.length) && (r10.stop(), nw(this).subs.delete(r10.tag)), this;
      }
      async removeAllListeners(t10) {
        if (t10) {
          let e10 = await nv(this, t10);
          if (!e10)
            return this;
          e10.stop(), nw(this).subs.delete(e10.tag);
        } else {
          let { subs: t11 } = nw(this);
          for (let { tag: e10, stop: r10 } of t11.values())
            r10(), t11.delete(e10);
        }
        return this;
      }
      async addListener(t10, e10) {
        return await this.on(t10, e10);
      }
      async removeListener(t10, e10) {
        return await this.off(t10, e10);
      }
      static buildClass(t10) {
        class e10 extends nC {
          constructor(e11, r10 = null) {
            super(e11, t10, r10);
          }
        }
        return e10;
      }
      static from(t10, e10, r10) {
        return null == r10 && (r10 = null), new this(t10, e10, r10);
      }
    }
    function nI() {
      return nC;
    }
    class nO extends nI() {
    }
    let nR = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
    function nT(t10) {
      var e10;
      let r10;
      return e10 = function(t11) {
        let e11 = 0;
        function r11() {
          return t11[e11++] << 8 | t11[e11++];
        }
        let n10 = r11(), i10 = 1, s10 = [0, 1];
        for (let t12 = 1; t12 < n10; t12++)
          s10.push(i10 += r11());
        let a2 = r11(), o2 = e11;
        e11 += a2;
        let l2 = 0, u2 = 0;
        function c2() {
          return 0 == l2 && (u2 = u2 << 8 | t11[e11++], l2 = 8), u2 >> --l2 & 1;
        }
        let h2 = 2147483648 - 1, f2 = 0;
        for (let t12 = 0; t12 < 31; t12++)
          f2 = f2 << 1 | c2();
        let d2 = [], p2 = 0, g2 = 2147483648;
        for (; ; ) {
          let t12 = Math.floor(((f2 - p2 + 1) * i10 - 1) / g2), e12 = 0, r12 = n10;
          for (; r12 - e12 > 1; ) {
            let n11 = e12 + r12 >>> 1;
            t12 < s10[n11] ? r12 = n11 : e12 = n11;
          }
          if (0 == e12)
            break;
          d2.push(e12);
          let a3 = p2 + Math.floor(g2 * s10[e12] / i10), o3 = p2 + Math.floor(g2 * s10[e12 + 1] / i10) - 1;
          for (; ((a3 ^ o3) & 1073741824) == 0; )
            f2 = f2 << 1 & h2 | c2(), a3 = a3 << 1 & h2, o3 = o3 << 1 & h2 | 1;
          for (; a3 & ~o3 & 536870912; )
            f2 = 1073741824 & f2 | f2 << 1 & h2 >>> 1 | c2(), a3 = a3 << 1 ^ 1073741824, o3 = (1073741824 ^ o3) << 1 | 1073741825;
          p2 = a3, g2 = 1 + o3 - a3;
        }
        let m2 = n10 - 4;
        return d2.map((e12) => {
          switch (e12 - m2) {
            case 3:
              return m2 + 65792 + (t11[o2++] << 16 | t11[o2++] << 8 | t11[o2++]);
            case 2:
              return m2 + 256 + (t11[o2++] << 8 | t11[o2++]);
            case 1:
              return m2 + t11[o2++];
            default:
              return e12 - 1;
          }
        });
      }(function(t11) {
        let e11 = [];
        [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((t12, r12) => e11[t12.charCodeAt(0)] = r12);
        let r11 = t11.length, n10 = new Uint8Array(6 * r11 >> 3);
        for (let i10 = 0, s10 = 0, a2 = 0, o2 = 0; i10 < r11; i10++)
          o2 = o2 << 6 | e11[t11.charCodeAt(i10)], (a2 += 6) >= 8 && (n10[s10++] = o2 >> (a2 -= 8));
        return n10;
      }(t10)), r10 = 0, () => e10[r10++];
    }
    function nS(t10, e10 = 0) {
      let r10 = [];
      for (; ; ) {
        let n10 = t10(), i10 = t10();
        if (!i10)
          break;
        e10 += n10;
        for (let t11 = 0; t11 < i10; t11++)
          r10.push(e10 + t11);
        e10 += i10 + 1;
      }
      return r10;
    }
    function nU(t10) {
      return nD(() => {
        let e10 = nS(t10);
        if (e10.length)
          return e10;
      });
    }
    function nF(t10) {
      let e10 = [];
      for (; ; ) {
        let r10 = t10();
        if (0 == r10)
          break;
        e10.push(function(t11, e11) {
          let r11 = 1 + e11(), n10 = e11(), i10 = nD(e11);
          return nL(i10.length, 1 + t11, e11).flatMap((t12, e12) => {
            let [s10, ...a2] = t12;
            return Array(i10[e12]).fill().map((t13, e13) => {
              let i11 = e13 * n10;
              return [s10 + e13 * r11, a2.map((t14) => t14 + i11)];
            });
          });
        }(r10, t10));
      }
      for (; ; ) {
        let r10 = t10() - 1;
        if (r10 < 0)
          break;
        e10.push(nL(1 + t10(), 1 + r10, t10).map((t11) => [t11[0], t11.slice(1)]));
      }
      return e10.flat();
    }
    function nD(t10) {
      let e10 = [];
      for (; ; ) {
        let r10 = t10(e10.length);
        if (!r10)
          break;
        e10.push(r10);
      }
      return e10;
    }
    function nL(t10, e10, r10) {
      let n10 = Array(t10).fill().map(() => []);
      for (let i10 = 0; i10 < e10; i10++)
        (function(t11, e11) {
          let r11 = Array(t11);
          for (let i11 = 0, s10 = 0; i11 < t11; i11++) {
            var n11;
            r11[i11] = s10 += 1 & (n11 = e11()) ? ~n11 >> 1 : n11 >> 1;
          }
          return r11;
        })(t10, r10).forEach((t11, e11) => n10[e11].push(t11));
      return n10;
    }
    function nM(t10) {
      return `{${t10.toString(16).toUpperCase().padStart(2, "0")}}`;
    }
    function nG(t10) {
      let e10 = t10.length;
      if (e10 < 4096)
        return String.fromCodePoint(...t10);
      let r10 = [];
      for (let n10 = 0; n10 < e10; )
        r10.push(String.fromCodePoint(...t10.slice(n10, n10 += 4096)));
      return r10.join("");
    }
    function nH(t10, e10) {
      let r10 = t10.length, n10 = r10 - e10.length;
      for (let i10 = 0; 0 == n10 && i10 < r10; i10++)
        n10 = t10[i10] - e10[i10];
      return n10;
    }
    function nQ(t10) {
      return t10 >> 24 & 255;
    }
    function nj(t10) {
      return 16777215 & t10;
    }
    function nV(t10) {
      return t10 >= 44032 && t10 < 55204;
    }
    function nJ(t10) {
      n || function() {
        let t11 = nT("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");
        for (let [e11, r11] of (n = new Map(nU(t11).flatMap((t12, e12) => t12.map((t13) => [t13, e12 + 1 << 24]))), i = new Set(nS(t11)), s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), nF(t11))) {
          if (!i.has(e11) && 2 == r11.length) {
            let [t12, n10] = r11, i10 = a.get(t12);
            i10 || (i10 = /* @__PURE__ */ new Map(), a.set(t12, i10)), i10.set(n10, e11);
          }
          s.set(e11, r11.reverse());
        }
      }();
      let e10 = [], r10 = [], o2 = false;
      function l2(t11) {
        let r11 = n.get(t11);
        r11 && (o2 = true, t11 |= r11), e10.push(t11);
      }
      for (let n10 of t10)
        for (; ; ) {
          if (n10 < 128)
            e10.push(n10);
          else if (nV(n10)) {
            let t11 = n10 - 44032, e11 = t11 / 588 | 0, r11 = t11 % 588 / 28 | 0, i10 = t11 % 28;
            l2(4352 + e11), l2(4449 + r11), i10 > 0 && l2(4519 + i10);
          } else {
            let t11 = s.get(n10);
            t11 ? r10.push(...t11) : l2(n10);
          }
          if (!r10.length)
            break;
          n10 = r10.pop();
        }
      if (o2 && e10.length > 1) {
        let t11 = nQ(e10[0]);
        for (let r11 = 1; r11 < e10.length; r11++) {
          let n10 = nQ(e10[r11]);
          if (0 == n10 || t11 <= n10) {
            t11 = n10;
            continue;
          }
          let i10 = r11 - 1;
          for (; ; ) {
            let r12 = e10[i10 + 1];
            if (e10[i10 + 1] = e10[i10], e10[i10] = r12, !i10 || (t11 = nQ(e10[--i10])) <= n10)
              break;
          }
          t11 = nQ(e10[r11]);
        }
      }
      return e10;
    }
    function nz(t10) {
      return function(t11) {
        let e10 = [], r10 = [], n10 = -1, i10 = 0;
        for (let s10 of t11) {
          let t12 = nQ(s10), o2 = nj(s10);
          if (-1 == n10)
            0 == t12 ? n10 = o2 : e10.push(o2);
          else if (i10 > 0 && i10 >= t12)
            0 == t12 ? (e10.push(n10, ...r10), r10.length = 0, n10 = o2) : r10.push(o2), i10 = t12;
          else {
            let s11 = function(t13, e11) {
              if (t13 >= 4352 && t13 < 4371 && e11 >= 4449 && e11 < 4470)
                return 44032 + (t13 - 4352) * 588 + (e11 - 4449) * 28;
              if (nV(t13) && e11 > 4519 && e11 < 4547 && (t13 - 44032) % 28 == 0)
                return t13 + (e11 - 4519);
              {
                let r11 = a.get(t13);
                return r11 && (r11 = r11.get(e11)) ? r11 : -1;
              }
            }(n10, o2);
            s11 >= 0 ? n10 = s11 : 0 == i10 && 0 == t12 ? (e10.push(n10), n10 = o2) : (r10.push(o2), i10 = t12);
          }
        }
        return n10 >= 0 && e10.push(n10, ...r10), e10;
      }(nJ(t10));
    }
    let nK = (t10) => Array.from(t10);
    function nq(t10, e10) {
      return t10.P.has(e10) || t10.Q.has(e10);
    }
    class nZ extends Array {
      get is_emoji() {
        return true;
      }
    }
    function nY() {
      let t10, e10;
      if (o)
        return;
      let r10 = nT("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"), n10 = () => nS(r10), i10 = () => new Set(n10()), s10 = (t11, e11) => e11.forEach((e12) => t11.add(e12));
      o = new Map(nF(r10)), l = i10(), u = n10(), c = new Set(n10().map((t11) => u[t11])), u = new Set(u), h = i10(), i10();
      let a2 = nU(r10), f2 = r10(), b2 = () => {
        let t11 = /* @__PURE__ */ new Set();
        return n10().forEach((e11) => s10(t11, a2[e11])), s10(t11, n10()), t11;
      };
      d = nD((t11) => {
        let e11 = nD(r10).map((t12) => t12 + 96);
        if (e11.length) {
          let n11 = t11 >= f2;
          return e11[0] -= 32, e11 = nG(e11), n11 && (e11 = `Restricted[${e11}]`), { N: e11, P: b2(), Q: b2(), M: !r10(), R: n11 };
        }
      }), p = i10(), g = /* @__PURE__ */ new Map();
      let w2 = n10().concat(nK(p)).sort((t11, e11) => t11 - e11);
      for (let { V: t11, M: e11 } of (w2.forEach((t12, e12) => {
        let n11 = r10(), i11 = w2[e12] = n11 ? w2[e12 - n11] : { V: [], M: /* @__PURE__ */ new Map() };
        i11.V.push(t12), p.has(t12) || g.set(t12, i11);
      }), new Set(g.values()))) {
        let r11 = [];
        for (let e12 of t11) {
          let t12 = d.filter((t13) => nq(t13, e12)), n12 = r11.find(({ G: e13 }) => t12.some((t13) => e13.has(t13)));
          n12 || (n12 = { G: /* @__PURE__ */ new Set(), V: [] }, r11.push(n12)), n12.V.push(e12), s10(n12.G, t12);
        }
        let n11 = r11.flatMap((t12) => nK(t12.G));
        for (let { G: t12, V: i11 } of r11) {
          let r12 = new Set(n11.filter((e12) => !t12.has(e12)));
          for (let t13 of i11)
            e11.set(t13, r12);
        }
      }
      m = /* @__PURE__ */ new Set();
      let E2 = /* @__PURE__ */ new Set(), v2 = (t11) => m.has(t11) ? E2.add(t11) : m.add(t11);
      for (let t11 of d) {
        for (let e11 of t11.P)
          v2(e11);
        for (let e11 of t11.Q)
          v2(e11);
      }
      for (let t11 of m)
        g.has(t11) || E2.has(t11) || g.set(t11, 1);
      for (let n11 of (s10(m, nJ(m).map(nj)), y = (t10 = [], e10 = nS(r10), function e11({ S: r11, B: n12 }, i11, s11) {
        if (!(4 & r11) || s11 !== i11[i11.length - 1])
          for (let a3 of (2 & r11 && (s11 = i11[i11.length - 1]), 1 & r11 && t10.push(i11), n12))
            for (let t11 of a3.Q)
              e11(a3, [...i11, t11], s11);
      }(function t11(n12) {
        return { S: r10(), B: nD(() => {
          let n13 = nS(r10).map((t12) => e10[t12]);
          if (n13.length)
            return t11(n13);
        }), Q: n12 };
      }([]), []), t10).map((t11) => nZ.from(t11)).sort(nH), A = /* @__PURE__ */ new Map(), y)) {
        let t11 = [A];
        for (let e11 of n11) {
          let r11 = t11.map((t12) => {
            let r12 = t12.get(e11);
            return r12 || (r12 = /* @__PURE__ */ new Map(), t12.set(e11, r12)), r12;
          });
          65039 === e11 ? t11.push(...r11) : t11 = r11;
        }
        for (let e11 of t11)
          e11.V = n11;
      }
    }
    function n_(t10) {
      return (n$(t10) ? "" : `${nW(nX([t10]))} `) + nM(t10);
    }
    function nW(t10) {
      return `"${t10}"\u200E`;
    }
    function nX(t10, e10 = 1 / 0, r10 = nM) {
      var n10;
      let i10 = [];
      n10 = t10[0], nY(), u.has(n10) && i10.push("\u25CC"), t10.length > e10 && (e10 >>= 1, t10 = [...t10.slice(0, e10), 8230, ...t10.slice(-e10)]);
      let s10 = 0, a2 = t10.length;
      for (let e11 = 0; e11 < a2; e11++) {
        let n11 = t10[e11];
        n$(n11) && (i10.push(nG(t10.slice(s10, e11))), i10.push(r10(n11)), s10 = e11 + 1);
      }
      return i10.push(nG(t10.slice(s10, a2))), i10.join("");
    }
    function n$(t10) {
      return nY(), h.has(t10);
    }
    function n0(t10) {
      return Error(`disallowed character: ${n_(t10)}`);
    }
    function n1(t10, e10) {
      let r10 = n_(e10), n10 = d.find((t11) => t11.P.has(e10));
      return n10 && (r10 = `${n10.N} ${r10}`), Error(`illegal mixture: ${t10.N} + ${r10}`);
    }
    function n2(t10) {
      return Error(`illegal placement: ${t10}`);
    }
    function n3(t10) {
      return t10.filter((t11) => 65039 != t11);
    }
    let n4 = new Uint8Array(32);
    function n8(t10) {
      return O(0 !== t10.length, "invalid ENS name; empty component", "comp", t10), t10;
    }
    function n5(t10) {
      let e10 = eb(function(t11) {
        try {
          var e11;
          if (0 === t11.length)
            throw Error("empty label");
          return (e11 = function(t12, e12, r11) {
            if (!t12)
              return [];
            nY();
            let n11 = 0;
            return t12.split(".").map((t13) => {
              let i10 = function(t14) {
                let e13 = [];
                for (let r12 = 0, n12 = t14.length; r12 < n12; ) {
                  let n13 = t14.codePointAt(r12);
                  r12 += n13 < 65536 ? 1 : 2, e13.push(n13);
                }
                return e13;
              }(t13), s10 = { input: i10, offset: n11 };
              n11 += i10.length + 1;
              try {
                let t14, n12 = s10.tokens = function(t15, e13, r12) {
                  let n13 = [], i11 = [];
                  for (t15 = t15.slice().reverse(); t15.length; ) {
                    let s11 = function(t16, e14) {
                      let r13, n14 = A, i12 = t16.length;
                      for (; i12 && (n14 = n14.get(t16[--i12])); ) {
                        let { V: e15 } = n14;
                        e15 && (r13 = e15, t16.length = i12);
                      }
                      return r13;
                    }(t15);
                    if (s11)
                      i11.length && (n13.push(e13(i11)), i11 = []), n13.push(r12(s11));
                    else {
                      let e14 = t15.pop();
                      if (m.has(e14))
                        i11.push(e14);
                      else {
                        let t16 = o.get(e14);
                        if (t16)
                          i11.push(...t16);
                        else if (!l.has(e14))
                          throw n0(e14);
                      }
                    }
                  }
                  return i11.length && n13.push(e13(i11)), n13;
                }(i10, e12, r11), a2 = n12.length;
                if (!a2)
                  throw Error("empty label");
                let h2 = s10.output = n12.flat();
                if (!function(t15) {
                  for (let e13 = t15.lastIndexOf(95); e13 > 0; )
                    if (95 !== t15[--e13])
                      throw Error("underscore allowed only at start");
                }(h2), !(s10.emoji = a2 > 1 || n12[0].is_emoji) && h2.every((t15) => t15 < 128))
                  !function(t15) {
                    if (t15.length >= 4 && 45 == t15[2] && 45 == t15[3])
                      throw Error(`invalid label extension: "${nG(t15.slice(0, 4))}"`);
                  }(h2), t14 = "ASCII";
                else {
                  let e13 = n12.flatMap((t15) => t15.is_emoji ? [] : t15);
                  if (e13.length) {
                    if (u.has(h2[0]))
                      throw n2("leading combining mark");
                    for (let t15 = 1; t15 < a2; t15++) {
                      let e14 = n12[t15];
                      if (!e14.is_emoji && u.has(e14[0]))
                        throw n2(`emoji + combining mark: "${nG(n12[t15 - 1])} + ${nX([e14[0]])}"`);
                    }
                    !function(t15) {
                      let e14 = t15[0], r13 = nR.get(e14);
                      if (r13)
                        throw n2(`leading ${r13}`);
                      let n13 = t15.length, i12 = -1;
                      for (let s11 = 1; s11 < n13; s11++) {
                        e14 = t15[s11];
                        let n14 = nR.get(e14);
                        if (n14) {
                          if (i12 == s11)
                            throw n2(`${r13} + ${n14}`);
                          i12 = s11 + 1, r13 = n14;
                        }
                      }
                      if (i12 == n13)
                        throw n2(`trailing ${r13}`);
                    }(h2);
                    let r12 = nK(new Set(e13)), [i11] = function(t15) {
                      let e14 = d;
                      for (let r13 of t15) {
                        let t16 = e14.filter((t17) => nq(t17, r13));
                        if (!t16.length) {
                          if (d.some((t17) => nq(t17, r13)))
                            throw n1(e14[0], r13);
                          throw n0(r13);
                        }
                        if (e14 = t16, 1 == t16.length)
                          break;
                      }
                      return e14;
                    }(r12);
                    (function(t15, e14) {
                      for (let r13 of e14)
                        if (!nq(t15, r13))
                          throw n1(t15, r13);
                      if (t15.M) {
                        let t16 = nJ(e14).map(nj);
                        for (let e15 = 1, r13 = t16.length; e15 < r13; e15++)
                          if (c.has(t16[e15])) {
                            let n13 = e15 + 1;
                            for (let i12; n13 < r13 && c.has(i12 = t16[n13]); n13++)
                              for (let r14 = e15; r14 < n13; r14++)
                                if (t16[r14] == i12)
                                  throw Error(`duplicate non-spacing marks: ${n_(i12)}`);
                            if (n13 - e15 > 4)
                              throw Error(`excessive non-spacing marks: ${nW(nX(t16.slice(e15 - 1, n13)))} (${n13 - e15}/4)`);
                            e15 = n13;
                          }
                      }
                    })(i11, e13), function(t15, e14) {
                      let r13;
                      let n13 = [];
                      for (let t16 of e14) {
                        let e15 = g.get(t16);
                        if (1 === e15)
                          return;
                        if (e15) {
                          let n14 = e15.M.get(t16);
                          if (!(r13 = r13 ? r13.filter((t17) => n14.has(t17)) : nK(n14)).length)
                            return;
                        } else
                          n13.push(t16);
                      }
                      if (r13) {
                        for (let e15 of r13)
                          if (n13.every((t16) => nq(e15, t16)))
                            throw Error(`whole-script confusable: ${t15.N}/${e15.N}`);
                      }
                    }(i11, r12), t14 = i11.N;
                  } else
                    t14 = "Emoji";
                }
                s10.type = t14;
              } catch (t14) {
                s10.error = t14;
              }
              return s10;
            });
          }(t11, nz, n3)).map(({ input: t12, error: r11, output: n11 }) => {
            if (r11) {
              let n12 = r11.message;
              throw Error(1 == e11.length ? n12 : `Invalid label ${nW(nX(t12, 63))}: ${n12}`);
            }
            return nG(n11);
          }).join(".");
        } catch (e12) {
          O(false, `invalid ENS name (${e12.message})`, "name", t11);
        }
      }(t10)), r10 = [];
      if (0 === t10.length)
        return r10;
      let n10 = 0;
      for (let t11 = 0; t11 < e10.length; t11++)
        46 === e10[t11] && (r10.push(n8(e10.slice(n10, t11))), n10 = t11 + 1);
      return O(n10 < e10.length, "invalid ENS name; empty component", "name", t10), r10.push(n8(e10.slice(n10))), r10;
    }
    function n6(t10) {
      O("string" == typeof t10, "invalid ENS name; not a string", "name", t10), O(t10.length, "invalid ENS name (empty label)", "name", t10);
      let e10 = n4, r10 = n5(t10);
      for (; r10.length; )
        e10 = t0(Q([e10, t0(r10.pop())]));
      return H(e10);
    }
    n4.fill(0);
    class n9 extends tS {
      constructor(t10, e10, r10, n10) {
        super(), this.blockLen = t10, this.outputLen = e10, this.padOffset = r10, this.isLE = n10, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(t10), this.view = tO(this.buffer);
      }
      update(t10) {
        ty(this);
        let { view: e10, buffer: r10, blockLen: n10 } = this, i10 = (t10 = tT(t10)).length;
        for (let s10 = 0; s10 < i10; ) {
          let a2 = Math.min(n10 - this.pos, i10 - s10);
          if (a2 === n10) {
            let e11 = tO(t10);
            for (; n10 <= i10 - s10; s10 += n10)
              this.process(e11, s10);
            continue;
          }
          r10.set(t10.subarray(s10, s10 + a2), this.pos), this.pos += a2, s10 += a2, this.pos === n10 && (this.process(e10, 0), this.pos = 0);
        }
        return this.length += t10.length, this.roundClean(), this;
      }
      digestInto(t10) {
        ty(this), tA(t10, this), this.finished = true;
        let { buffer: e10, view: r10, blockLen: n10, isLE: i10 } = this, { pos: s10 } = this;
        e10[s10++] = 128, this.buffer.subarray(s10).fill(0), this.padOffset > n10 - s10 && (this.process(r10, 0), s10 = 0);
        for (let t11 = s10; t11 < n10; t11++)
          e10[t11] = 0;
        !function(t11, e11, r11, n11) {
          if ("function" == typeof t11.setBigUint64)
            return t11.setBigUint64(e11, r11, n11);
          let i11 = BigInt(32), s11 = BigInt(4294967295), a3 = Number(r11 >> i11 & s11), o3 = Number(r11 & s11), l3 = n11 ? 4 : 0, u3 = n11 ? 0 : 4;
          t11.setUint32(e11 + l3, a3, n11), t11.setUint32(e11 + u3, o3, n11);
        }(r10, n10 - 8, BigInt(8 * this.length), i10), this.process(r10, 0);
        let a2 = tO(t10), o2 = this.outputLen;
        if (o2 % 4)
          throw Error("_sha2: outputLen should be aligned to 32bit");
        let l2 = o2 / 4, u2 = this.get();
        if (l2 > u2.length)
          throw Error("_sha2: outputLen bigger than state");
        for (let t11 = 0; t11 < l2; t11++)
          a2.setUint32(4 * t11, u2[t11], i10);
      }
      digest() {
        let { buffer: t10, outputLen: e10 } = this;
        this.digestInto(t10);
        let r10 = t10.slice(0, e10);
        return this.destroy(), r10;
      }
      _cloneInto(t10) {
        t10 || (t10 = new this.constructor()), t10.set(...this.get());
        let { blockLen: e10, buffer: r10, length: n10, finished: i10, destroyed: s10, pos: a2 } = this;
        return t10.length = n10, t10.pos = a2, t10.finished = i10, t10.destroyed = s10, n10 % e10 && t10.buffer.set(r10), t10;
      }
    }
    let n7 = (t10, e10, r10) => t10 & e10 ^ ~t10 & r10, it = (t10, e10, r10) => t10 & e10 ^ t10 & r10 ^ e10 & r10, ie = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), ir = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), ii = new Uint32Array(64);
    class is extends n9 {
      constructor() {
        super(64, 32, 8, false), this.A = 0 | ir[0], this.B = 0 | ir[1], this.C = 0 | ir[2], this.D = 0 | ir[3], this.E = 0 | ir[4], this.F = 0 | ir[5], this.G = 0 | ir[6], this.H = 0 | ir[7];
      }
      get() {
        let { A: t10, B: e10, C: r10, D: n10, E: i10, F: s10, G: a2, H: o2 } = this;
        return [t10, e10, r10, n10, i10, s10, a2, o2];
      }
      set(t10, e10, r10, n10, i10, s10, a2, o2) {
        this.A = 0 | t10, this.B = 0 | e10, this.C = 0 | r10, this.D = 0 | n10, this.E = 0 | i10, this.F = 0 | s10, this.G = 0 | a2, this.H = 0 | o2;
      }
      process(t10, e10) {
        for (let r11 = 0; r11 < 16; r11++, e10 += 4)
          ii[r11] = t10.getUint32(e10, false);
        for (let t11 = 16; t11 < 64; t11++) {
          let e11 = ii[t11 - 15], r11 = ii[t11 - 2], n11 = tR(e11, 7) ^ tR(e11, 18) ^ e11 >>> 3, i11 = tR(r11, 17) ^ tR(r11, 19) ^ r11 >>> 10;
          ii[t11] = i11 + ii[t11 - 7] + n11 + ii[t11 - 16] | 0;
        }
        let { A: r10, B: n10, C: i10, D: s10, E: a2, F: o2, G: l2, H: u2 } = this;
        for (let t11 = 0; t11 < 64; t11++) {
          let e11 = u2 + (tR(a2, 6) ^ tR(a2, 11) ^ tR(a2, 25)) + n7(a2, o2, l2) + ie[t11] + ii[t11] | 0, c2 = (tR(r10, 2) ^ tR(r10, 13) ^ tR(r10, 22)) + it(r10, n10, i10) | 0;
          u2 = l2, l2 = o2, o2 = a2, a2 = s10 + e11 | 0, s10 = i10, i10 = n10, n10 = r10, r10 = e11 + c2 | 0;
        }
        r10 = r10 + this.A | 0, n10 = n10 + this.B | 0, i10 = i10 + this.C | 0, s10 = s10 + this.D | 0, a2 = a2 + this.E | 0, o2 = o2 + this.F | 0, l2 = l2 + this.G | 0, u2 = u2 + this.H | 0, this.set(r10, n10, i10, s10, a2, o2, l2, u2);
      }
      roundClean() {
        ii.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
      }
    }
    let ia = tU(() => new is()), [io, il] = tk.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t10) => BigInt(t10))), iu = new Uint32Array(80), ic = new Uint32Array(80);
    class ih extends n9 {
      constructor() {
        super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
      }
      get() {
        let { Ah: t10, Al: e10, Bh: r10, Bl: n10, Ch: i10, Cl: s10, Dh: a2, Dl: o2, Eh: l2, El: u2, Fh: c2, Fl: h2, Gh: f2, Gl: d2, Hh: p2, Hl: g2 } = this;
        return [t10, e10, r10, n10, i10, s10, a2, o2, l2, u2, c2, h2, f2, d2, p2, g2];
      }
      set(t10, e10, r10, n10, i10, s10, a2, o2, l2, u2, c2, h2, f2, d2, p2, g2) {
        this.Ah = 0 | t10, this.Al = 0 | e10, this.Bh = 0 | r10, this.Bl = 0 | n10, this.Ch = 0 | i10, this.Cl = 0 | s10, this.Dh = 0 | a2, this.Dl = 0 | o2, this.Eh = 0 | l2, this.El = 0 | u2, this.Fh = 0 | c2, this.Fl = 0 | h2, this.Gh = 0 | f2, this.Gl = 0 | d2, this.Hh = 0 | p2, this.Hl = 0 | g2;
      }
      process(t10, e10) {
        for (let r11 = 0; r11 < 16; r11++, e10 += 4)
          iu[r11] = t10.getUint32(e10), ic[r11] = t10.getUint32(e10 += 4);
        for (let t11 = 16; t11 < 80; t11++) {
          let e11 = 0 | iu[t11 - 15], r11 = 0 | ic[t11 - 15], n11 = tk.rotrSH(e11, r11, 1) ^ tk.rotrSH(e11, r11, 8) ^ tk.shrSH(e11, r11, 7), i11 = tk.rotrSL(e11, r11, 1) ^ tk.rotrSL(e11, r11, 8) ^ tk.shrSL(e11, r11, 7), s11 = 0 | iu[t11 - 2], a3 = 0 | ic[t11 - 2], o3 = tk.rotrSH(s11, a3, 19) ^ tk.rotrBH(s11, a3, 61) ^ tk.shrSH(s11, a3, 6), l3 = tk.rotrSL(s11, a3, 19) ^ tk.rotrBL(s11, a3, 61) ^ tk.shrSL(s11, a3, 6), u3 = tk.add4L(i11, l3, ic[t11 - 7], ic[t11 - 16]), c3 = tk.add4H(u3, n11, o3, iu[t11 - 7], iu[t11 - 16]);
          iu[t11] = 0 | c3, ic[t11] = 0 | u3;
        }
        let { Ah: r10, Al: n10, Bh: i10, Bl: s10, Ch: a2, Cl: o2, Dh: l2, Dl: u2, Eh: c2, El: h2, Fh: f2, Fl: d2, Gh: p2, Gl: g2, Hh: m2, Hl: y2 } = this;
        for (let t11 = 0; t11 < 80; t11++) {
          let e11 = tk.rotrSH(c2, h2, 14) ^ tk.rotrSH(c2, h2, 18) ^ tk.rotrBH(c2, h2, 41), A2 = tk.rotrSL(c2, h2, 14) ^ tk.rotrSL(c2, h2, 18) ^ tk.rotrBL(c2, h2, 41), b2 = c2 & f2 ^ ~c2 & p2, w2 = h2 & d2 ^ ~h2 & g2, E2 = tk.add5L(y2, A2, w2, il[t11], ic[t11]), v2 = tk.add5H(E2, m2, e11, b2, io[t11], iu[t11]), x2 = 0 | E2, P2 = tk.rotrSH(r10, n10, 28) ^ tk.rotrBH(r10, n10, 34) ^ tk.rotrBH(r10, n10, 39), N2 = tk.rotrSL(r10, n10, 28) ^ tk.rotrBL(r10, n10, 34) ^ tk.rotrBL(r10, n10, 39), k2 = r10 & i10 ^ r10 & a2 ^ i10 & a2, B2 = n10 & s10 ^ n10 & o2 ^ s10 & o2;
          m2 = 0 | p2, y2 = 0 | g2, p2 = 0 | f2, g2 = 0 | d2, f2 = 0 | c2, d2 = 0 | h2, { h: c2, l: h2 } = tk.add(0 | l2, 0 | u2, 0 | v2, 0 | x2), l2 = 0 | a2, u2 = 0 | o2, a2 = 0 | i10, o2 = 0 | s10, i10 = 0 | r10, s10 = 0 | n10;
          let C2 = tk.add3L(x2, N2, B2);
          r10 = tk.add3H(C2, v2, P2, k2), n10 = 0 | C2;
        }
        ({ h: r10, l: n10 } = tk.add(0 | this.Ah, 0 | this.Al, 0 | r10, 0 | n10)), { h: i10, l: s10 } = tk.add(0 | this.Bh, 0 | this.Bl, 0 | i10, 0 | s10), { h: a2, l: o2 } = tk.add(0 | this.Ch, 0 | this.Cl, 0 | a2, 0 | o2), { h: l2, l: u2 } = tk.add(0 | this.Dh, 0 | this.Dl, 0 | l2, 0 | u2), { h: c2, l: h2 } = tk.add(0 | this.Eh, 0 | this.El, 0 | c2, 0 | h2), { h: f2, l: d2 } = tk.add(0 | this.Fh, 0 | this.Fl, 0 | f2, 0 | d2), { h: p2, l: g2 } = tk.add(0 | this.Gh, 0 | this.Gl, 0 | p2, 0 | g2), { h: m2, l: y2 } = tk.add(0 | this.Hh, 0 | this.Hl, 0 | m2, 0 | y2), this.set(r10, n10, i10, s10, a2, o2, l2, u2, c2, h2, f2, d2, p2, g2, m2, y2);
      }
      roundClean() {
        iu.fill(0), ic.fill(0);
      }
      destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }
    let id = tU(() => new ih()), ip = function() {
      if ("undefined" != typeof self)
        return self;
      if ("undefined" != typeof window)
        return window;
      if ("undefined" != typeof global)
        return global;
      throw Error("unable to locate global object");
    }();
    function ig(t10) {
      switch (t10) {
        case "sha256":
          return ia.create();
        case "sha512":
          return id.create();
      }
      O(false, "invalid hashing algorithm name", "algorithm", t10);
    }
    ip.crypto || ip.msCrypto;
    let im = function(t10) {
      return ig("sha256").update(t10).digest();
    }, iy = function(t10) {
      return ig("sha512").update(t10).digest();
    }, iA = im, ib = iy, iw = false, iE = false;
    function iv(t10) {
      let e10 = F(t10, "data");
      return H(iA(e10));
    }
    function ix(t10) {
      let e10 = F(t10, "data");
      return H(ib(e10));
    }
    iv._ = im, iv.lock = function() {
      iw = true;
    }, iv.register = function(t10) {
      if (iw)
        throw Error("sha256 is locked");
      iA = t10;
    }, Object.freeze(iv), ix._ = iy, ix.lock = function() {
      iE = true;
    }, ix.register = function(t10) {
      if (iE)
        throw Error("sha512 is locked");
      ib = t10;
    }, Object.freeze(iv);
    let iP = "0x0000000000000000000000000000000000000000000000000000000000000000", iN = BigInt(0), ik = BigInt(1), iB = BigInt(2), iC = BigInt(27), iI = BigInt(28), iO = BigInt(35), iR = {};
    class iT {
      #$;
      #tt;
      #te;
      #tr;
      get r() {
        return this.#$;
      }
      set r(t10) {
        O(32 === j(t10), "invalid r", "value", t10), this.#$ = H(t10);
      }
      get s() {
        return this.#tt;
      }
      set s(t10) {
        O(32 === j(t10), "invalid s", "value", t10);
        let e10 = H(t10);
        O(8 > parseInt(e10.substring(0, 3)), "non-canonical s", "value", e10), this.#tt = e10;
      }
      get v() {
        return this.#te;
      }
      set v(t10) {
        let e10 = tt(t10, "value");
        O(27 === e10 || 28 === e10, "invalid v", "v", t10), this.#te = e10;
      }
      get networkV() {
        return this.#tr;
      }
      get legacyChainId() {
        let t10 = this.networkV;
        return null == t10 ? null : iT.getChainId(t10);
      }
      get yParity() {
        return 27 === this.v ? 0 : 1;
      }
      get yParityAndS() {
        let t10 = F(this.s);
        return this.yParity && (t10[0] |= 128), H(t10);
      }
      get compactSerialized() {
        return Q([this.r, this.yParityAndS]);
      }
      get serialized() {
        return Q([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
      }
      constructor(t10, e10, r10, n10) {
        S(t10, iR, "Signature"), this.#$ = e10, this.#tt = r10, this.#te = n10, this.#tr = null;
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
      }
      clone() {
        let t10 = new iT(iR, this.r, this.s, this.v);
        return this.networkV && (t10.#tr = this.networkV), t10;
      }
      toJSON() {
        let t10 = this.networkV;
        return { _type: "signature", networkV: null != t10 ? t10.toString() : null, r: this.r, s: this.s, v: this.v };
      }
      static getChainId(t10) {
        let e10 = _(t10, "v");
        return e10 == iC || e10 == iI ? iN : (O(e10 >= iO, "invalid EIP-155 v", "v", t10), (e10 - iO) / iB);
      }
      static getChainIdV(t10, e10) {
        return _(t10) * iB + BigInt(35 + e10 - 27);
      }
      static getNormalizedV(t10) {
        let e10 = _(t10);
        return e10 === iN || e10 === iC ? 27 : e10 === ik || e10 === iI ? 28 : (O(e10 >= iO, "invalid v", "v", t10), e10 & ik ? 27 : 28);
      }
      static from(t10) {
        function e10(e11, r11) {
          O(e11, r11, "signature", t10);
        }
        if (null == t10)
          return new iT(iR, iP, iP, 27);
        if ("string" == typeof t10) {
          let r11 = F(t10, "signature");
          if (64 === r11.length) {
            let t11 = H(r11.slice(0, 32)), e11 = r11.slice(32, 64), n11 = 128 & e11[0] ? 28 : 27;
            return e11[0] &= 127, new iT(iR, t11, H(e11), n11);
          }
          if (65 === r11.length) {
            let t11 = H(r11.slice(0, 32)), n11 = r11.slice(32, 64);
            e10((128 & n11[0]) == 0, "non-canonical s");
            let i11 = iT.getNormalizedV(r11[64]);
            return new iT(iR, t11, H(n11), i11);
          }
          e10(false, "invalid raw signature length");
        }
        if (t10 instanceof iT)
          return t10.clone();
        let r10 = t10.r;
        e10(null != r10, "missing r");
        let n10 = z(tr(r10), 32), i10 = function(t11, r11) {
          if (null != t11)
            return z(tr(t11), 32);
          if (null != r11) {
            e10(L(r11, 32), "invalid yParityAndS");
            let t12 = F(r11);
            return t12[0] &= 127, H(t12);
          }
          e10(false, "missing s");
        }(t10.s, t10.yParityAndS);
        e10((128 & F(i10)[0]) == 0, "non-canonical s");
        let { networkV: s10, v: a2 } = function(t11, r11, n11) {
          if (null != t11) {
            let e11 = _(t11);
            return { networkV: e11 >= iO ? e11 : void 0, v: iT.getNormalizedV(e11) };
          }
          if (null != r11)
            return e10(L(r11, 32), "invalid yParityAndS"), { v: 128 & F(r11)[0] ? 28 : 27 };
          if (null != n11) {
            switch (tt(n11, "sig.yParity")) {
              case 0:
                return { v: 27 };
              case 1:
                return { v: 28 };
            }
            e10(false, "invalid yParity");
          }
          e10(false, "missing v");
        }(t10.v, t10.yParityAndS, t10.yParity), o2 = new iT(iR, n10, i10, a2);
        return s10 && (o2.#tr = s10), e10(null == t10.yParity || tt(t10.yParity, "sig.yParity") === o2.yParity, "yParity mismatch"), e10(null == t10.yParityAndS || t10.yParityAndS === o2.yParityAndS, "yParityAndS mismatch"), o2;
      }
    }
    BigInt(0);
    let iS = BigInt(1), iU = BigInt(2), iF = (t10) => t10 instanceof Uint8Array, iD = Array.from({ length: 256 }, (t10, e10) => e10.toString(16).padStart(2, "0"));
    function iL(t10) {
      if (!iF(t10))
        throw Error("Uint8Array expected");
      let e10 = "";
      for (let r10 = 0; r10 < t10.length; r10++)
        e10 += iD[t10[r10]];
      return e10;
    }
    function iM(t10) {
      if ("string" != typeof t10)
        throw Error("hex string expected, got " + typeof t10);
      return BigInt("" === t10 ? "0" : `0x${t10}`);
    }
    function iG(t10) {
      if ("string" != typeof t10)
        throw Error("hex string expected, got " + typeof t10);
      let e10 = t10.length;
      if (e10 % 2)
        throw Error("padded hex string expected, got unpadded hex of length " + e10);
      let r10 = new Uint8Array(e10 / 2);
      for (let e11 = 0; e11 < r10.length; e11++) {
        let n10 = 2 * e11, i10 = Number.parseInt(t10.slice(n10, n10 + 2), 16);
        if (Number.isNaN(i10) || i10 < 0)
          throw Error("Invalid byte sequence");
        r10[e11] = i10;
      }
      return r10;
    }
    function iH(t10) {
      return iM(iL(t10));
    }
    function iQ(t10) {
      if (!iF(t10))
        throw Error("Uint8Array expected");
      return iM(iL(Uint8Array.from(t10).reverse()));
    }
    function ij(t10, e10) {
      return iG(t10.toString(16).padStart(2 * e10, "0"));
    }
    function iV(t10, e10) {
      return ij(t10, e10).reverse();
    }
    function iJ(t10, e10, r10) {
      let n10;
      if ("string" == typeof e10)
        try {
          n10 = iG(e10);
        } catch (r11) {
          throw Error(`${t10} must be valid hex string, got "${e10}". Cause: ${r11}`);
        }
      else if (iF(e10))
        n10 = Uint8Array.from(e10);
      else
        throw Error(`${t10} must be hex string or Uint8Array`);
      let i10 = n10.length;
      if ("number" == typeof r10 && i10 !== r10)
        throw Error(`${t10} expected ${r10} bytes, got ${i10}`);
      return n10;
    }
    function iz(...t10) {
      let e10 = new Uint8Array(t10.reduce((t11, e11) => t11 + e11.length, 0)), r10 = 0;
      return t10.forEach((t11) => {
        if (!iF(t11))
          throw Error("Uint8Array expected");
        e10.set(t11, r10), r10 += t11.length;
      }), e10;
    }
    let iK = (t10) => (iU << BigInt(t10 - 1)) - iS, iq = (t10) => new Uint8Array(t10), iZ = (t10) => Uint8Array.from(t10);
    function iY(t10, e10, r10) {
      if ("number" != typeof t10 || t10 < 2)
        throw Error("hashLen must be a number");
      if ("number" != typeof e10 || e10 < 2)
        throw Error("qByteLen must be a number");
      if ("function" != typeof r10)
        throw Error("hmacFn must be a function");
      let n10 = iq(t10), i10 = iq(t10), s10 = 0, a2 = () => {
        n10.fill(1), i10.fill(0), s10 = 0;
      }, o2 = (...t11) => r10(i10, n10, ...t11), l2 = (t11 = iq()) => {
        i10 = o2(iZ([0]), t11), n10 = o2(), 0 !== t11.length && (i10 = o2(iZ([1]), t11), n10 = o2());
      }, u2 = () => {
        if (s10++ >= 1e3)
          throw Error("drbg: tried 1000 values");
        let t11 = 0, r11 = [];
        for (; t11 < e10; ) {
          let e11 = (n10 = o2()).slice();
          r11.push(e11), t11 += n10.length;
        }
        return iz(...r11);
      };
      return (t11, e11) => {
        let r11;
        for (a2(), l2(t11); !(r11 = e11(u2())); )
          l2();
        return a2(), r11;
      };
    }
    let i_ = { bigint: (t10) => "bigint" == typeof t10, function: (t10) => "function" == typeof t10, boolean: (t10) => "boolean" == typeof t10, string: (t10) => "string" == typeof t10, stringOrUint8Array: (t10) => "string" == typeof t10 || t10 instanceof Uint8Array, isSafeInteger: (t10) => Number.isSafeInteger(t10), array: (t10) => Array.isArray(t10), field: (t10, e10) => e10.Fp.isValid(t10), hash: (t10) => "function" == typeof t10 && Number.isSafeInteger(t10.outputLen) };
    function iW(t10, e10, r10 = {}) {
      let n10 = (e11, r11, n11) => {
        let i10 = i_[r11];
        if ("function" != typeof i10)
          throw Error(`Invalid validator "${r11}", expected function`);
        let s10 = t10[e11];
        if ((!n11 || void 0 !== s10) && !i10(s10, t10))
          throw Error(`Invalid param ${String(e11)}=${s10} (${typeof s10}), expected ${r11}`);
      };
      for (let [t11, r11] of Object.entries(e10))
        n10(t11, r11, false);
      for (let [t11, e11] of Object.entries(r10))
        n10(t11, e11, true);
      return t10;
    }
    let iX = BigInt(0), i$ = BigInt(1), i0 = BigInt(2), i1 = BigInt(3), i2 = BigInt(4), i3 = BigInt(5), i4 = BigInt(8);
    function i8(t10, e10) {
      let r10 = t10 % e10;
      return r10 >= iX ? r10 : e10 + r10;
    }
    function i5(t10, e10, r10) {
      let n10 = t10;
      for (; e10-- > iX; )
        n10 *= n10, n10 %= r10;
      return n10;
    }
    function i6(t10, e10) {
      if (t10 === iX || e10 <= iX)
        throw Error(`invert: expected positive integers, got n=${t10} mod=${e10}`);
      let r10 = i8(t10, e10), n10 = e10, i10 = iX, s10 = i$, a2 = i$, o2 = iX;
      for (; r10 !== iX; ) {
        let t11 = n10 / r10, e11 = n10 % r10, l2 = i10 - a2 * t11, u2 = s10 - o2 * t11;
        n10 = r10, r10 = e11, i10 = a2, s10 = o2, a2 = l2, o2 = u2;
      }
      if (n10 !== i$)
        throw Error("invert: does not exist");
      return i8(i10, e10);
    }
    BigInt(9), BigInt(16);
    let i9 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
    function i7(t10, e10) {
      let r10 = void 0 !== e10 ? e10 : t10.toString(2).length;
      return { nBitLength: r10, nByteLength: Math.ceil(r10 / 8) };
    }
    function st(t10) {
      if ("bigint" != typeof t10)
        throw Error("field order must be bigint");
      return Math.ceil(t10.toString(2).length / 8);
    }
    function se(t10) {
      let e10 = st(t10);
      return e10 + Math.ceil(e10 / 2);
    }
    class sr extends tS {
      constructor(t10, e10) {
        super(), this.finished = false, this.destroyed = false, function(t11) {
          if ("function" != typeof t11 || "function" != typeof t11.create)
            throw Error("Hash should be wrapped by utils.wrapConstructor");
          tg(t11.outputLen), tg(t11.blockLen);
        }(t10);
        let r10 = tT(e10);
        if (this.iHash = t10.create(), "function" != typeof this.iHash.update)
          throw Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        let n10 = this.blockLen, i10 = new Uint8Array(n10);
        i10.set(r10.length > n10 ? t10.create().update(r10).digest() : r10);
        for (let t11 = 0; t11 < i10.length; t11++)
          i10[t11] ^= 54;
        this.iHash.update(i10), this.oHash = t10.create();
        for (let t11 = 0; t11 < i10.length; t11++)
          i10[t11] ^= 106;
        this.oHash.update(i10), i10.fill(0);
      }
      update(t10) {
        return ty(this), this.iHash.update(t10), this;
      }
      digestInto(t10) {
        ty(this), tm(t10, this.outputLen), this.finished = true, this.iHash.digestInto(t10), this.oHash.update(t10), this.oHash.digestInto(t10), this.destroy();
      }
      digest() {
        let t10 = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t10), t10;
      }
      _cloneInto(t10) {
        t10 || (t10 = Object.create(Object.getPrototypeOf(this), {}));
        let { oHash: e10, iHash: r10, finished: n10, destroyed: i10, blockLen: s10, outputLen: a2 } = this;
        return t10.finished = n10, t10.destroyed = i10, t10.blockLen = s10, t10.outputLen = a2, t10.oHash = e10._cloneInto(t10.oHash), t10.iHash = r10._cloneInto(t10.iHash), t10;
      }
      destroy() {
        this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
      }
    }
    let sn = (t10, e10, r10) => new sr(t10, e10).update(r10).digest();
    sn.create = (t10, e10) => new sr(t10, e10);
    let si = BigInt(0), ss = BigInt(1);
    function sa(t10) {
      return iW(t10.Fp, i9.reduce((t11, e10) => (t11[e10] = "function", t11), { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" })), iW(t10, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...i7(t10.n, t10.nBitLength), ...t10, p: t10.Fp.ORDER });
    }
    let { bytesToNumberBE: so, hexToBytes: sl } = b, su = { Err: class extends Error {
      constructor(t10 = "") {
        super(t10);
      }
    }, _parseInt(t10) {
      let { Err: e10 } = su;
      if (t10.length < 2 || 2 !== t10[0])
        throw new e10("Invalid signature integer tag");
      let r10 = t10[1], n10 = t10.subarray(2, r10 + 2);
      if (!r10 || n10.length !== r10)
        throw new e10("Invalid signature integer: wrong length");
      if (128 & n10[0])
        throw new e10("Invalid signature integer: negative");
      if (0 === n10[0] && !(128 & n10[1]))
        throw new e10("Invalid signature integer: unnecessary leading zero");
      return { d: so(n10), l: t10.subarray(r10 + 2) };
    }, toSig(t10) {
      let { Err: e10 } = su, r10 = "string" == typeof t10 ? sl(t10) : t10;
      if (!(r10 instanceof Uint8Array))
        throw Error("ui8a expected");
      let n10 = r10.length;
      if (n10 < 2 || 48 != r10[0])
        throw new e10("Invalid signature tag");
      if (r10[1] !== n10 - 2)
        throw new e10("Invalid signature: incorrect length");
      let { d: i10, l: s10 } = su._parseInt(r10.subarray(2)), { d: a2, l: o2 } = su._parseInt(s10);
      if (o2.length)
        throw new e10("Invalid signature: left bytes after parsing");
      return { r: i10, s: a2 };
    }, hexFromSig(t10) {
      let e10 = (t11) => 8 & Number.parseInt(t11[0], 16) ? "00" + t11 : t11, r10 = (t11) => {
        let e11 = t11.toString(16);
        return 1 & e11.length ? `0${e11}` : e11;
      }, n10 = e10(r10(t10.s)), i10 = e10(r10(t10.r)), s10 = n10.length / 2, a2 = i10.length / 2, o2 = r10(s10), l2 = r10(a2);
      return `30${r10(a2 + s10 + 4)}02${l2}${i10}02${o2}${n10}`;
    } }, sc = BigInt(0), sh = BigInt(1), sf = (BigInt(2), BigInt(3)), sd = (BigInt(4), BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")), sp = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), sg = BigInt(1), sm = BigInt(2), sy = (t10, e10) => (t10 + e10 / sm) / e10, sA = function(t10, e10, r10 = false, n10 = {}) {
      if (t10 <= iX)
        throw Error(`Expected Field ORDER > 0, got ${t10}`);
      let { nBitLength: i10, nByteLength: s10 } = i7(t10, e10);
      if (s10 > 2048)
        throw Error("Field lengths over 2048 bytes are not supported");
      let a2 = function(t11) {
        if (t11 % i2 === i1) {
          let e11 = (t11 + i$) / i2;
          return function(t12, r11) {
            let n11 = t12.pow(r11, e11);
            if (!t12.eql(t12.sqr(n11), r11))
              throw Error("Cannot find square root");
            return n11;
          };
        }
        if (t11 % i4 === i3) {
          let e11 = (t11 - i3) / i4;
          return function(t12, r11) {
            let n11 = t12.mul(r11, i0), i11 = t12.pow(n11, e11), s11 = t12.mul(r11, i11), a3 = t12.mul(t12.mul(s11, i0), i11), o3 = t12.mul(s11, t12.sub(a3, t12.ONE));
            if (!t12.eql(t12.sqr(o3), r11))
              throw Error("Cannot find square root");
            return o3;
          };
        }
        return function(t12) {
          let e11, r11, n11;
          let i11 = (t12 - i$) / i0;
          for (e11 = t12 - i$, r11 = 0; e11 % i0 === iX; e11 /= i0, r11++)
            ;
          for (n11 = i0; n11 < t12 && function(t13, e12, r12) {
            if (r12 <= iX || e12 < iX)
              throw Error("Expected power/modulo > 0");
            if (r12 === i$)
              return iX;
            let n12 = i$;
            for (; e12 > iX; )
              e12 & i$ && (n12 = n12 * t13 % r12), t13 = t13 * t13 % r12, e12 >>= i$;
            return n12;
          }(n11, i11, t12) !== t12 - i$; n11++)
            ;
          if (1 === r11) {
            let e12 = (t12 + i$) / i2;
            return function(t13, r12) {
              let n12 = t13.pow(r12, e12);
              if (!t13.eql(t13.sqr(n12), r12))
                throw Error("Cannot find square root");
              return n12;
            };
          }
          let s11 = (e11 + i$) / i0;
          return function(t13, a3) {
            if (t13.pow(a3, i11) === t13.neg(t13.ONE))
              throw Error("Cannot find square root");
            let o3 = r11, l2 = t13.pow(t13.mul(t13.ONE, n11), e11), u2 = t13.pow(a3, s11), c2 = t13.pow(a3, e11);
            for (; !t13.eql(c2, t13.ONE); ) {
              if (t13.eql(c2, t13.ZERO))
                return t13.ZERO;
              let e12 = 1;
              for (let r13 = t13.sqr(c2); e12 < o3 && !t13.eql(r13, t13.ONE); e12++)
                r13 = t13.sqr(r13);
              let r12 = t13.pow(l2, i$ << BigInt(o3 - e12 - 1));
              l2 = t13.sqr(r12), u2 = t13.mul(u2, r12), c2 = t13.mul(c2, l2), o3 = e12;
            }
            return u2;
          };
        }(t11);
      }(t10), o2 = Object.freeze({ ORDER: t10, BITS: i10, BYTES: s10, MASK: iK(i10), ZERO: iX, ONE: i$, create: (e11) => i8(e11, t10), isValid: (e11) => {
        if ("bigint" != typeof e11)
          throw Error(`Invalid field element: expected bigint, got ${typeof e11}`);
        return iX <= e11 && e11 < t10;
      }, is0: (t11) => t11 === iX, isOdd: (t11) => (t11 & i$) === i$, neg: (e11) => i8(-e11, t10), eql: (t11, e11) => t11 === e11, sqr: (e11) => i8(e11 * e11, t10), add: (e11, r11) => i8(e11 + r11, t10), sub: (e11, r11) => i8(e11 - r11, t10), mul: (e11, r11) => i8(e11 * r11, t10), pow: (t11, e11) => function(t12, e12, r11) {
        if (r11 < iX)
          throw Error("Expected power > 0");
        if (r11 === iX)
          return t12.ONE;
        if (r11 === i$)
          return e12;
        let n11 = t12.ONE, i11 = e12;
        for (; r11 > iX; )
          r11 & i$ && (n11 = t12.mul(n11, i11)), i11 = t12.sqr(i11), r11 >>= i$;
        return n11;
      }(o2, t11, e11), div: (e11, r11) => i8(e11 * i6(r11, t10), t10), sqrN: (t11) => t11 * t11, addN: (t11, e11) => t11 + e11, subN: (t11, e11) => t11 - e11, mulN: (t11, e11) => t11 * e11, inv: (e11) => i6(e11, t10), sqrt: n10.sqrt || ((t11) => a2(o2, t11)), invertBatch: (t11) => function(t12, e11) {
        let r11 = Array(e11.length), n11 = e11.reduce((e12, n12, i12) => t12.is0(n12) ? e12 : (r11[i12] = e12, t12.mul(e12, n12)), t12.ONE), i11 = t12.inv(n11);
        return e11.reduceRight((e12, n12, i12) => t12.is0(n12) ? e12 : (r11[i12] = t12.mul(e12, r11[i12]), t12.mul(e12, n12)), i11), r11;
      }(o2, t11), cmov: (t11, e11, r11) => r11 ? e11 : t11, toBytes: (t11) => r10 ? iV(t11, s10) : ij(t11, s10), fromBytes: (t11) => {
        if (t11.length !== s10)
          throw Error(`Fp.fromBytes: expected ${s10}, got ${t11.length}`);
        return r10 ? iQ(t11) : iH(t11);
      } });
      return Object.freeze(o2);
    }(sd, void 0, void 0, { sqrt: function(t10) {
      let e10 = BigInt(3), r10 = BigInt(6), n10 = BigInt(11), i10 = BigInt(22), s10 = BigInt(23), a2 = BigInt(44), o2 = BigInt(88), l2 = t10 * t10 * t10 % sd, u2 = l2 * l2 * t10 % sd, c2 = i5(u2, e10, sd) * u2 % sd, h2 = i5(c2, e10, sd) * u2 % sd, f2 = i5(h2, sm, sd) * l2 % sd, d2 = i5(f2, n10, sd) * f2 % sd, p2 = i5(d2, i10, sd) * d2 % sd, g2 = i5(p2, a2, sd) * p2 % sd, m2 = i5(g2, o2, sd) * g2 % sd, y2 = i5(m2, a2, sd) * p2 % sd, A2 = i5(y2, e10, sd) * u2 % sd, b2 = i5(A2, s10, sd) * d2 % sd, w2 = i5(b2, r10, sd) * l2 % sd, E2 = i5(w2, sm, sd);
      if (!sA.eql(sA.sqr(E2), t10))
        throw Error("Cannot find square root");
      return E2;
    } }), sb = function(t10, e10) {
      let r10 = (e11) => function(t11) {
        let e12 = function(t12) {
          let e13 = sa(t12);
          return iW(e13, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...e13 });
        }(t11), { Fp: r11, n: n10 } = e12, i10 = r11.BYTES + 1, s10 = 2 * r11.BYTES + 1;
        function a2(t12) {
          return i8(t12, n10);
        }
        let { ProjectivePoint: o2, normPrivateKeyToScalar: l2, weierstrassEquation: u2, isWithinCurveOrder: c2 } = function(t12) {
          let e13 = function(t13) {
            let e14 = sa(t13);
            iW(e14, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
            let { endo: r13, Fp: n12, a: i12 } = e14;
            if (r13) {
              if (!n12.eql(i12, n12.ZERO))
                throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
              if ("object" != typeof r13 || "bigint" != typeof r13.beta || "function" != typeof r13.splitScalar)
                throw Error("Expected endomorphism with beta: bigint and splitScalar: function");
            }
            return Object.freeze({ ...e14 });
          }(t12), { Fp: r12 } = e13, n11 = e13.toBytes || ((t13, e14, n12) => {
            let i12 = e14.toAffine();
            return iz(Uint8Array.from([4]), r12.toBytes(i12.x), r12.toBytes(i12.y));
          }), i11 = e13.fromBytes || ((t13) => {
            let e14 = t13.subarray(1);
            return { x: r12.fromBytes(e14.subarray(0, r12.BYTES)), y: r12.fromBytes(e14.subarray(r12.BYTES, 2 * r12.BYTES)) };
          });
          function s11(t13) {
            let { a: n12, b: i12 } = e13, s12 = r12.sqr(t13), a4 = r12.mul(s12, t13);
            return r12.add(r12.add(a4, r12.mul(t13, n12)), i12);
          }
          if (!r12.eql(r12.sqr(e13.Gy), s11(e13.Gx)))
            throw Error("bad generator point: equation left != right");
          function a3(t13) {
            return "bigint" == typeof t13 && sc < t13 && t13 < e13.n;
          }
          function o3(t13) {
            if (!a3(t13))
              throw Error("Expected valid bigint: 0 < bigint < curve.n");
          }
          function l3(t13) {
            let r13;
            let { allowedPrivateKeyLengths: n12, nByteLength: i12, wrapPrivateKey: s12, n: a4 } = e13;
            if (n12 && "bigint" != typeof t13) {
              if (t13 instanceof Uint8Array && (t13 = iL(t13)), "string" != typeof t13 || !n12.includes(t13.length))
                throw Error("Invalid key");
              t13 = t13.padStart(2 * i12, "0");
            }
            try {
              r13 = "bigint" == typeof t13 ? t13 : iH(iJ("private key", t13, i12));
            } catch (e14) {
              throw Error(`private key must be ${i12} bytes, hex or bigint, not ${typeof t13}`);
            }
            return s12 && (r13 = i8(r13, a4)), o3(r13), r13;
          }
          let u3 = /* @__PURE__ */ new Map();
          function c3(t13) {
            if (!(t13 instanceof h3))
              throw Error("ProjectivePoint expected");
          }
          class h3 {
            constructor(t13, e14, n12) {
              if (this.px = t13, this.py = e14, this.pz = n12, null == t13 || !r12.isValid(t13))
                throw Error("x required");
              if (null == e14 || !r12.isValid(e14))
                throw Error("y required");
              if (null == n12 || !r12.isValid(n12))
                throw Error("z required");
            }
            static fromAffine(t13) {
              let { x: e14, y: n12 } = t13 || {};
              if (!t13 || !r12.isValid(e14) || !r12.isValid(n12))
                throw Error("invalid affine point");
              if (t13 instanceof h3)
                throw Error("projective point not allowed");
              let i12 = (t14) => r12.eql(t14, r12.ZERO);
              return i12(e14) && i12(n12) ? h3.ZERO : new h3(e14, n12, r12.ONE);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static normalizeZ(t13) {
              let e14 = r12.invertBatch(t13.map((t14) => t14.pz));
              return t13.map((t14, r13) => t14.toAffine(e14[r13])).map(h3.fromAffine);
            }
            static fromHex(t13) {
              let e14 = h3.fromAffine(i11(iJ("pointHex", t13)));
              return e14.assertValidity(), e14;
            }
            static fromPrivateKey(t13) {
              return h3.BASE.multiply(l3(t13));
            }
            _setWindowSize(t13) {
              this._WINDOW_SIZE = t13, u3.delete(this);
            }
            assertValidity() {
              if (this.is0()) {
                if (e13.allowInfinityPoint && !r12.is0(this.py))
                  return;
                throw Error("bad point: ZERO");
              }
              let { x: t13, y: n12 } = this.toAffine();
              if (!r12.isValid(t13) || !r12.isValid(n12))
                throw Error("bad point: x or y not FE");
              let i12 = r12.sqr(n12), a4 = s11(t13);
              if (!r12.eql(i12, a4))
                throw Error("bad point: equation left != right");
              if (!this.isTorsionFree())
                throw Error("bad point: not in prime-order subgroup");
            }
            hasEvenY() {
              let { y: t13 } = this.toAffine();
              if (r12.isOdd)
                return !r12.isOdd(t13);
              throw Error("Field doesn't support isOdd");
            }
            equals(t13) {
              c3(t13);
              let { px: e14, py: n12, pz: i12 } = this, { px: s12, py: a4, pz: o4 } = t13, l4 = r12.eql(r12.mul(e14, o4), r12.mul(s12, i12)), u4 = r12.eql(r12.mul(n12, o4), r12.mul(a4, i12));
              return l4 && u4;
            }
            negate() {
              return new h3(this.px, r12.neg(this.py), this.pz);
            }
            double() {
              let { a: t13, b: n12 } = e13, i12 = r12.mul(n12, sf), { px: s12, py: a4, pz: o4 } = this, l4 = r12.ZERO, u4 = r12.ZERO, c4 = r12.ZERO, f4 = r12.mul(s12, s12), d4 = r12.mul(a4, a4), p3 = r12.mul(o4, o4), g3 = r12.mul(s12, a4);
              return g3 = r12.add(g3, g3), c4 = r12.mul(s12, o4), c4 = r12.add(c4, c4), l4 = r12.mul(t13, c4), u4 = r12.mul(i12, p3), u4 = r12.add(l4, u4), l4 = r12.sub(d4, u4), u4 = r12.add(d4, u4), u4 = r12.mul(l4, u4), l4 = r12.mul(g3, l4), c4 = r12.mul(i12, c4), p3 = r12.mul(t13, p3), g3 = r12.sub(f4, p3), g3 = r12.mul(t13, g3), g3 = r12.add(g3, c4), c4 = r12.add(f4, f4), f4 = r12.add(c4, f4), f4 = r12.add(f4, p3), f4 = r12.mul(f4, g3), u4 = r12.add(u4, f4), p3 = r12.mul(a4, o4), p3 = r12.add(p3, p3), f4 = r12.mul(p3, g3), l4 = r12.sub(l4, f4), c4 = r12.mul(p3, d4), c4 = r12.add(c4, c4), new h3(l4, u4, c4 = r12.add(c4, c4));
            }
            add(t13) {
              c3(t13);
              let { px: n12, py: i12, pz: s12 } = this, { px: a4, py: o4, pz: l4 } = t13, u4 = r12.ZERO, f4 = r12.ZERO, d4 = r12.ZERO, p3 = e13.a, g3 = r12.mul(e13.b, sf), m3 = r12.mul(n12, a4), y3 = r12.mul(i12, o4), A3 = r12.mul(s12, l4), b3 = r12.add(n12, i12), w3 = r12.add(a4, o4);
              b3 = r12.mul(b3, w3), w3 = r12.add(m3, y3), b3 = r12.sub(b3, w3), w3 = r12.add(n12, s12);
              let E2 = r12.add(a4, l4);
              return w3 = r12.mul(w3, E2), E2 = r12.add(m3, A3), w3 = r12.sub(w3, E2), E2 = r12.add(i12, s12), u4 = r12.add(o4, l4), E2 = r12.mul(E2, u4), u4 = r12.add(y3, A3), E2 = r12.sub(E2, u4), d4 = r12.mul(p3, w3), u4 = r12.mul(g3, A3), d4 = r12.add(u4, d4), u4 = r12.sub(y3, d4), d4 = r12.add(y3, d4), f4 = r12.mul(u4, d4), y3 = r12.add(m3, m3), y3 = r12.add(y3, m3), A3 = r12.mul(p3, A3), w3 = r12.mul(g3, w3), y3 = r12.add(y3, A3), A3 = r12.sub(m3, A3), A3 = r12.mul(p3, A3), w3 = r12.add(w3, A3), m3 = r12.mul(y3, w3), f4 = r12.add(f4, m3), m3 = r12.mul(E2, w3), u4 = r12.mul(b3, u4), u4 = r12.sub(u4, m3), m3 = r12.mul(b3, y3), d4 = r12.mul(E2, d4), new h3(u4, f4, d4 = r12.add(d4, m3));
            }
            subtract(t13) {
              return this.add(t13.negate());
            }
            is0() {
              return this.equals(h3.ZERO);
            }
            wNAF(t13) {
              return d3.wNAFCached(this, u3, t13, (t14) => {
                let e14 = r12.invertBatch(t14.map((t15) => t15.pz));
                return t14.map((t15, r13) => t15.toAffine(e14[r13])).map(h3.fromAffine);
              });
            }
            multiplyUnsafe(t13) {
              let n12 = h3.ZERO;
              if (t13 === sc)
                return n12;
              if (o3(t13), t13 === sh)
                return this;
              let { endo: i12 } = e13;
              if (!i12)
                return d3.unsafeLadder(this, t13);
              let { k1neg: s12, k1: a4, k2neg: l4, k2: u4 } = i12.splitScalar(t13), c4 = n12, f4 = n12, p3 = this;
              for (; a4 > sc || u4 > sc; )
                a4 & sh && (c4 = c4.add(p3)), u4 & sh && (f4 = f4.add(p3)), p3 = p3.double(), a4 >>= sh, u4 >>= sh;
              return s12 && (c4 = c4.negate()), l4 && (f4 = f4.negate()), f4 = new h3(r12.mul(f4.px, i12.beta), f4.py, f4.pz), c4.add(f4);
            }
            multiply(t13) {
              let n12, i12;
              o3(t13);
              let { endo: s12 } = e13;
              if (s12) {
                let { k1neg: e14, k1: a4, k2neg: o4, k2: l4 } = s12.splitScalar(t13), { p: u4, f: c4 } = this.wNAF(a4), { p: f4, f: p3 } = this.wNAF(l4);
                u4 = d3.constTimeNegate(e14, u4), f4 = d3.constTimeNegate(o4, f4), f4 = new h3(r12.mul(f4.px, s12.beta), f4.py, f4.pz), n12 = u4.add(f4), i12 = c4.add(p3);
              } else {
                let { p: e14, f: r13 } = this.wNAF(t13);
                n12 = e14, i12 = r13;
              }
              return h3.normalizeZ([n12, i12])[0];
            }
            multiplyAndAddUnsafe(t13, e14, r13) {
              let n12 = h3.BASE, i12 = (t14, e15) => e15 !== sc && e15 !== sh && t14.equals(n12) ? t14.multiply(e15) : t14.multiplyUnsafe(e15), s12 = i12(this, e14).add(i12(t13, r13));
              return s12.is0() ? void 0 : s12;
            }
            toAffine(t13) {
              let { px: e14, py: n12, pz: i12 } = this, s12 = this.is0();
              null == t13 && (t13 = s12 ? r12.ONE : r12.inv(i12));
              let a4 = r12.mul(e14, t13), o4 = r12.mul(n12, t13), l4 = r12.mul(i12, t13);
              if (s12)
                return { x: r12.ZERO, y: r12.ZERO };
              if (!r12.eql(l4, r12.ONE))
                throw Error("invZ was invalid");
              return { x: a4, y: o4 };
            }
            isTorsionFree() {
              let { h: t13, isTorsionFree: r13 } = e13;
              if (t13 === sh)
                return true;
              if (r13)
                return r13(h3, this);
              throw Error("isTorsionFree() has not been declared for the elliptic curve");
            }
            clearCofactor() {
              let { h: t13, clearCofactor: r13 } = e13;
              return t13 === sh ? this : r13 ? r13(h3, this) : this.multiplyUnsafe(e13.h);
            }
            toRawBytes(t13 = true) {
              return this.assertValidity(), n11(h3, this, t13);
            }
            toHex(t13 = true) {
              return iL(this.toRawBytes(t13));
            }
          }
          h3.BASE = new h3(e13.Gx, e13.Gy, r12.ONE), h3.ZERO = new h3(r12.ZERO, r12.ONE, r12.ZERO);
          let f3 = e13.nBitLength, d3 = function(t13, e14) {
            let r13 = (t14, e15) => {
              let r14 = e15.negate();
              return t14 ? r14 : e15;
            }, n12 = (t14) => ({ windows: Math.ceil(e14 / t14) + 1, windowSize: 2 ** (t14 - 1) });
            return { constTimeNegate: r13, unsafeLadder(e15, r14) {
              let n13 = t13.ZERO, i12 = e15;
              for (; r14 > si; )
                r14 & ss && (n13 = n13.add(i12)), i12 = i12.double(), r14 >>= ss;
              return n13;
            }, precomputeWindow(t14, e15) {
              let { windows: r14, windowSize: i12 } = n12(e15), s12 = [], a4 = t14, o4 = a4;
              for (let t15 = 0; t15 < r14; t15++) {
                o4 = a4, s12.push(o4);
                for (let t16 = 1; t16 < i12; t16++)
                  o4 = o4.add(a4), s12.push(o4);
                a4 = o4.double();
              }
              return s12;
            }, wNAF(e15, i12, s12) {
              let { windows: a4, windowSize: o4 } = n12(e15), l4 = t13.ZERO, u4 = t13.BASE, c4 = BigInt(2 ** e15 - 1), h4 = 2 ** e15, f4 = BigInt(e15);
              for (let t14 = 0; t14 < a4; t14++) {
                let e16 = t14 * o4, n13 = Number(s12 & c4);
                s12 >>= f4, n13 > o4 && (n13 -= h4, s12 += ss);
                let a5 = e16 + Math.abs(n13) - 1, d4 = t14 % 2 != 0, p3 = n13 < 0;
                0 === n13 ? u4 = u4.add(r13(d4, i12[e16])) : l4 = l4.add(r13(p3, i12[a5]));
              }
              return { p: l4, f: u4 };
            }, wNAFCached(t14, e15, r14, n13) {
              let i12 = t14._WINDOW_SIZE || 1, s12 = e15.get(t14);
              return s12 || (s12 = this.precomputeWindow(t14, i12), 1 !== i12 && e15.set(t14, n13(s12))), this.wNAF(i12, s12, r14);
            } };
          }(h3, e13.endo ? Math.ceil(f3 / 2) : f3);
          return { CURVE: e13, ProjectivePoint: h3, normPrivateKeyToScalar: l3, weierstrassEquation: s11, isWithinCurveOrder: a3 };
        }({ ...e12, toBytes(t12, e13, n11) {
          let i11 = e13.toAffine(), s11 = r11.toBytes(i11.x), a3 = iz;
          return n11 ? a3(Uint8Array.from([e13.hasEvenY() ? 2 : 3]), s11) : a3(Uint8Array.from([4]), s11, r11.toBytes(i11.y));
        }, fromBytes(t12) {
          let e13 = t12.length, n11 = t12[0], a3 = t12.subarray(1);
          if (e13 === i10 && (2 === n11 || 3 === n11)) {
            let t13 = iH(a3);
            if (!(sc < t13 && t13 < r11.ORDER))
              throw Error("Point is not on curve");
            let e14 = u2(t13), i11 = r11.sqrt(e14);
            return (1 & n11) == 1 != ((i11 & sh) === sh) && (i11 = r11.neg(i11)), { x: t13, y: i11 };
          }
          if (e13 === s10 && 4 === n11)
            return { x: r11.fromBytes(a3.subarray(0, r11.BYTES)), y: r11.fromBytes(a3.subarray(r11.BYTES, 2 * r11.BYTES)) };
          throw Error(`Point of length ${e13} was invalid. Expected ${i10} compressed bytes or ${s10} uncompressed bytes`);
        } }), h2 = (t12) => iL(ij(t12, e12.nByteLength)), f2 = (t12, e13, r12) => iH(t12.slice(e13, r12));
        class d2 {
          constructor(t12, e13, r12) {
            this.r = t12, this.s = e13, this.recovery = r12, this.assertValidity();
          }
          static fromCompact(t12) {
            let r12 = e12.nByteLength;
            return new d2(f2(t12 = iJ("compactSignature", t12, 2 * r12), 0, r12), f2(t12, r12, 2 * r12));
          }
          static fromDER(t12) {
            let { r: e13, s: r12 } = su.toSig(iJ("DER", t12));
            return new d2(e13, r12);
          }
          assertValidity() {
            if (!c2(this.r))
              throw Error("r must be 0 < r < CURVE.n");
            if (!c2(this.s))
              throw Error("s must be 0 < s < CURVE.n");
          }
          addRecoveryBit(t12) {
            return new d2(this.r, this.s, t12);
          }
          recoverPublicKey(t12) {
            let { r: i11, s: s11, recovery: l3 } = this, u3 = m2(iJ("msgHash", t12));
            if (null == l3 || ![0, 1, 2, 3].includes(l3))
              throw Error("recovery id invalid");
            let c3 = 2 === l3 || 3 === l3 ? i11 + e12.n : i11;
            if (c3 >= r11.ORDER)
              throw Error("recovery id 2 or 3 invalid");
            let f3 = (1 & l3) == 0 ? "02" : "03", d3 = o2.fromHex(f3 + h2(c3)), p3 = i6(c3, n10), g3 = a2(-u3 * p3), y3 = a2(s11 * p3), A3 = o2.BASE.multiplyAndAddUnsafe(d3, g3, y3);
            if (!A3)
              throw Error("point at infinify");
            return A3.assertValidity(), A3;
          }
          hasHighS() {
            return this.s > n10 >> sh;
          }
          normalizeS() {
            return this.hasHighS() ? new d2(this.r, a2(-this.s), this.recovery) : this;
          }
          toDERRawBytes() {
            return iG(this.toDERHex());
          }
          toDERHex() {
            return su.hexFromSig({ r: this.r, s: this.s });
          }
          toCompactRawBytes() {
            return iG(this.toCompactHex());
          }
          toCompactHex() {
            return h2(this.r) + h2(this.s);
          }
        }
        function p2(t12) {
          let e13 = t12 instanceof Uint8Array, r12 = "string" == typeof t12, n11 = (e13 || r12) && t12.length;
          return e13 ? n11 === i10 || n11 === s10 : r12 ? n11 === 2 * i10 || n11 === 2 * s10 : t12 instanceof o2;
        }
        let g2 = e12.bits2int || function(t12) {
          let r12 = iH(t12), n11 = 8 * t12.length - e12.nBitLength;
          return n11 > 0 ? r12 >> BigInt(n11) : r12;
        }, m2 = e12.bits2int_modN || function(t12) {
          return a2(g2(t12));
        }, y2 = iK(e12.nBitLength);
        function A2(t12) {
          if ("bigint" != typeof t12)
            throw Error("bigint expected");
          if (!(sc <= t12 && t12 < y2))
            throw Error(`bigint expected < 2^${e12.nBitLength}`);
          return ij(t12, e12.nByteLength);
        }
        let b2 = { lowS: e12.lowS, prehash: false }, w2 = { lowS: e12.lowS, prehash: false };
        return o2.BASE._setWindowSize(8), { CURVE: e12, getPublicKey: function(t12, e13 = true) {
          return o2.fromPrivateKey(t12).toRawBytes(e13);
        }, getSharedSecret: function(t12, e13, r12 = true) {
          if (p2(t12))
            throw Error("first arg must be private key");
          if (!p2(e13))
            throw Error("second arg must be public key");
          return o2.fromHex(e13).multiply(l2(t12)).toRawBytes(r12);
        }, sign: function(t12, i11, s11 = b2) {
          let { seed: u3, k2sig: h3 } = function(t13, i12, s12 = b2) {
            if (["recovered", "canonical"].some((t14) => t14 in s12))
              throw Error("sign() legacy options not supported");
            let { hash: u4, randomBytes: h4 } = e12, { lowS: f3, prehash: p3, extraEntropy: y3 } = s12;
            null == f3 && (f3 = true), t13 = iJ("msgHash", t13), p3 && (t13 = iJ("prehashed msgHash", u4(t13)));
            let w3 = m2(t13), E2 = l2(i12), v2 = [A2(E2), A2(w3)];
            if (null != y3) {
              let t14 = true === y3 ? h4(r11.BYTES) : y3;
              v2.push(iJ("extraEntropy", t14));
            }
            return { seed: iz(...v2), k2sig: function(t14) {
              let e13 = g2(t14);
              if (!c2(e13))
                return;
              let r12 = i6(e13, n10), i13 = o2.BASE.multiply(e13).toAffine(), s13 = a2(i13.x);
              if (s13 === sc)
                return;
              let l3 = a2(r12 * a2(w3 + s13 * E2));
              if (l3 === sc)
                return;
              let u5 = (i13.x === s13 ? 0 : 2) | Number(i13.y & sh), h5 = l3;
              if (f3 && l3 > n10 >> sh)
                h5 = l3 > n10 >> sh ? a2(-l3) : l3, u5 ^= 1;
              return new d2(s13, h5, u5);
            } };
          }(t12, i11, s11);
          return iY(e12.hash.outputLen, e12.nByteLength, e12.hmac)(u3, h3);
        }, verify: function(t12, r12, i11, s11 = w2) {
          let l3, u3;
          if (r12 = iJ("msgHash", r12), i11 = iJ("publicKey", i11), "strict" in s11)
            throw Error("options.strict was renamed to lowS");
          let { lowS: c3, prehash: h3 } = s11;
          try {
            if ("string" == typeof t12 || t12 instanceof Uint8Array)
              try {
                u3 = d2.fromDER(t12);
              } catch (e13) {
                if (!(e13 instanceof su.Err))
                  throw e13;
                u3 = d2.fromCompact(t12);
              }
            else if ("object" == typeof t12 && "bigint" == typeof t12.r && "bigint" == typeof t12.s) {
              let { r: e13, s: r13 } = t12;
              u3 = new d2(e13, r13);
            } else
              throw Error("PARSE");
            l3 = o2.fromHex(i11);
          } catch (t13) {
            if ("PARSE" === t13.message)
              throw Error("signature must be Signature instance, Uint8Array or hex string");
            return false;
          }
          if (c3 && u3.hasHighS())
            return false;
          h3 && (r12 = e12.hash(r12));
          let { r: f3, s: p3 } = u3, g3 = m2(r12), y3 = i6(p3, n10), A3 = a2(g3 * y3), b3 = a2(f3 * y3), E2 = o2.BASE.multiplyAndAddUnsafe(l3, A3, b3)?.toAffine();
          return !!E2 && a2(E2.x) === f3;
        }, ProjectivePoint: o2, Signature: d2, utils: { isValidPrivateKey(t12) {
          try {
            return l2(t12), true;
          } catch (t13) {
            return false;
          }
        }, normPrivateKeyToScalar: l2, randomPrivateKey: () => {
          let t12 = se(e12.n);
          return function(t13, e13, r12 = false) {
            let n11 = t13.length, i11 = st(e13), s11 = se(e13);
            if (n11 < 16 || n11 < s11 || n11 > 1024)
              throw Error(`expected ${s11}-1024 bytes of input, got ${n11}`);
            let a3 = i8(r12 ? iH(t13) : iQ(t13), e13 - i$) + i$;
            return r12 ? iV(a3, i11) : ij(a3, i11);
          }(e12.randomBytes(t12), e12.n);
        }, precompute: (t12 = 8, e13 = o2.BASE) => (e13._setWindowSize(t12), e13.multiply(BigInt(3)), e13) } };
      }({ ...t10, hash: e11, hmac: (t11, ...r11) => sn(e11, t11, function(...t12) {
        let e12 = new Uint8Array(t12.reduce((t13, e13) => t13 + e13.length, 0)), r12 = 0;
        return t12.forEach((t13) => {
          if (!tC(t13))
            throw Error("Uint8Array expected");
          e12.set(t13, r12), r12 += t13.length;
        }), e12;
      }(...r11)), randomBytes: tF });
      return Object.freeze({ ...r10(e10), create: r10 });
    }({ a: BigInt(0), b: BigInt(7), Fp: sA, n: sp, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (t10) => {
      let e10 = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r10 = -sg * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), n10 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i10 = BigInt("0x100000000000000000000000000000000"), s10 = sy(e10 * t10, sp), a2 = sy(-r10 * t10, sp), o2 = i8(t10 - s10 * e10 - a2 * n10, sp), l2 = i8(-s10 * r10 - a2 * e10, sp), u2 = o2 > i10, c2 = l2 > i10;
      if (u2 && (o2 = sp - o2), c2 && (l2 = sp - l2), o2 > i10 || l2 > i10)
        throw Error("splitScalar: Endomorphism failed, k=" + t10);
      return { k1neg: u2, k1: o2, k2neg: c2, k2: l2 };
    } } }, ia);
    BigInt(0), sb.ProjectivePoint;
    class sw {
      #tn;
      constructor(t10) {
        O(32 === j(t10), "invalid private key", "privateKey", "[REDACTED]"), this.#tn = H(t10);
      }
      get privateKey() {
        return this.#tn;
      }
      get publicKey() {
        return sw.computePublicKey(this.#tn);
      }
      get compressedPublicKey() {
        return sw.computePublicKey(this.#tn, true);
      }
      sign(t10) {
        O(32 === j(t10), "invalid digest length", "digest", t10);
        let e10 = sb.sign(D(t10), D(this.#tn), { lowS: true });
        return iT.from({ r: te(e10.r, 32), s: te(e10.s, 32), v: e10.recovery ? 28 : 27 });
      }
      computeSharedSecret(t10) {
        let e10 = sw.computePublicKey(t10);
        return H(sb.getSharedSecret(D(this.#tn), F(e10), false));
      }
      static computePublicKey(t10, e10) {
        let r10 = F(t10, "key");
        if (32 === r10.length)
          return H(sb.getPublicKey(r10, !!e10));
        if (64 === r10.length) {
          let t11 = new Uint8Array(65);
          t11[0] = 4, t11.set(r10, 1), r10 = t11;
        }
        return H(sb.ProjectivePoint.fromHex(r10).toRawBytes(e10));
      }
      static recoverPublicKey(t10, e10) {
        O(32 === j(t10), "invalid digest length", "digest", t10);
        let r10 = iT.from(e10), n10 = sb.Signature.fromCompact(D(Q([r10.r, r10.s]))), i10 = (n10 = n10.addRecoveryBit(r10.yParity)).recoverPublicKey(D(t10));
        return O(null != i10, "invalid signautre for digest", "signature", e10), "0x" + i10.toHex(false);
      }
      static addPoints(t10, e10, r10) {
        let n10 = sb.ProjectivePoint.fromHex(sw.computePublicKey(t10).substring(2)), i10 = sb.ProjectivePoint.fromHex(sw.computePublicKey(e10).substring(2));
        return "0x" + n10.add(i10).toHex(!!r10);
      }
    }
    function sE(t10, e10, r10) {
      let n10 = 0;
      for (let i10 = 0; i10 < r10; i10++)
        n10 = 256 * n10 + t10[e10 + i10];
      return n10;
    }
    function sv(t10, e10, r10, n10) {
      let i10 = [];
      for (; r10 < e10 + 1 + n10; ) {
        let s10 = sx(t10, r10);
        i10.push(s10.result), I((r10 += s10.consumed) <= e10 + 1 + n10, "child data too short", "BUFFER_OVERRUN", { buffer: t10, length: n10, offset: e10 });
      }
      return { consumed: 1 + n10, result: i10 };
    }
    function sx(t10, e10) {
      I(0 !== t10.length, "data too short", "BUFFER_OVERRUN", { buffer: t10, length: 0, offset: 1 });
      let r10 = (e11) => {
        I(e11 <= t10.length, "data short segment too short", "BUFFER_OVERRUN", { buffer: t10, length: t10.length, offset: e11 });
      };
      if (t10[e10] >= 248) {
        let n10 = t10[e10] - 247;
        r10(e10 + 1 + n10);
        let i10 = sE(t10, e10 + 1, n10);
        return r10(e10 + 1 + n10 + i10), sv(t10, e10, e10 + 1 + n10, n10 + i10);
      }
      if (t10[e10] >= 192) {
        let n10 = t10[e10] - 192;
        return r10(e10 + 1 + n10), sv(t10, e10, e10 + 1, n10);
      }
      if (t10[e10] >= 184) {
        let n10 = t10[e10] - 183;
        r10(e10 + 1 + n10);
        let i10 = sE(t10, e10 + 1, n10);
        r10(e10 + 1 + n10 + i10);
        let s10 = H(t10.slice(e10 + 1 + n10, e10 + 1 + n10 + i10));
        return { consumed: 1 + n10 + i10, result: s10 };
      }
      if (t10[e10] >= 128) {
        let n10 = t10[e10] - 128;
        r10(e10 + 1 + n10);
        let i10 = H(t10.slice(e10 + 1, e10 + 1 + n10));
        return { consumed: 1 + n10, result: i10 };
      }
      return { consumed: 1, result: function(t11) {
        let e11 = t11.toString(16);
        for (; e11.length < 2; )
          e11 = "0" + e11;
        return "0x" + e11;
      }(t10[e10]) };
    }
    function sP(t10) {
      let e10 = F(t10, "data"), r10 = sx(e10, 0);
      return O(r10.consumed === e10.length, "unexpected junk after rlp payload", "data", t10), r10.result;
    }
    function sN(t10) {
      let e10 = [];
      for (; t10; )
        e10.unshift(255 & t10), t10 >>= 8;
      return e10;
    }
    let sk = "0123456789abcdef";
    function sB(t10) {
      let e10 = "0x";
      for (let r10 of function t11(e11) {
        if (Array.isArray(e11)) {
          let r12 = [];
          if (e11.forEach(function(e12) {
            r12 = r12.concat(t11(e12));
          }), r12.length <= 55)
            return r12.unshift(192 + r12.length), r12;
          let n11 = sN(r12.length);
          return n11.unshift(247 + n11.length), n11.concat(r12);
        }
        let r11 = Array.prototype.slice.call(F(e11, "object"));
        if (1 === r11.length && r11[0] <= 127)
          return r11;
        if (r11.length <= 55)
          return r11.unshift(128 + r11.length), r11;
        let n10 = sN(r11.length);
        return n10.unshift(183 + n10.length), n10.concat(r11);
      }(t10))
        e10 += sk[r10 >> 4] + sk[15 & r10];
      return e10;
    }
    let sC = BigInt(0), sI = BigInt(2), sO = BigInt(27), sR = BigInt(28), sT = BigInt(35), sS = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    function sU(t10, e10) {
      let r10 = t10.toString(16);
      for (; r10.length < 2; )
        r10 = "0" + r10;
      return "0x" + (r10 += iv(e10).substring(4));
    }
    function sF(t10) {
      return "0x" === t10 ? null : t5(t10);
    }
    function sD(t10, e10) {
      try {
        return rO(t10);
      } catch (r10) {
        O(false, r10.message, e10, t10);
      }
    }
    function sL(t10, e10) {
      return "0x" === t10 ? 0 : tt(t10, e10);
    }
    function sM(t10, e10) {
      if ("0x" === t10)
        return sC;
      let r10 = _(t10, e10);
      return O(r10 <= sS, "value exceeds uint size", e10, r10), r10;
    }
    function sG(t10, e10) {
      let r10 = _(t10, "value"), n10 = tr(r10);
      return O(n10.length <= 32, "value too large", `tx.${e10}`, r10), n10;
    }
    function sH(t10) {
      return rO(t10).map((t11) => [t11.address, t11.storageKeys]);
    }
    function sQ(t10, e10) {
      let r10;
      try {
        if (r10 = sL(e10[0], "yParity"), 0 !== r10 && 1 !== r10)
          throw Error("bad yParity");
      } catch (t11) {
        O(false, "invalid yParity", "yParity", e10[0]);
      }
      let n10 = z(e10[1], 32), i10 = z(e10[2], 32), s10 = iT.from({ r: n10, s: i10, yParity: r10 });
      t10.signature = s10;
    }
    class sj {
      #ti;
      #ts;
      #e;
      #ta;
      #to;
      #tl;
      #tu;
      #tc;
      #th;
      #tf;
      #td;
      #tp;
      #tg;
      #tm;
      #ty;
      #tA;
      get type() {
        return this.#ti;
      }
      set type(t10) {
        switch (t10) {
          case null:
            this.#ti = null;
            break;
          case 0:
          case "legacy":
            this.#ti = 0;
            break;
          case 1:
          case "berlin":
          case "eip-2930":
            this.#ti = 1;
            break;
          case 2:
          case "london":
          case "eip-1559":
            this.#ti = 2;
            break;
          case 3:
          case "cancun":
          case "eip-4844":
            this.#ti = 3;
            break;
          default:
            O(false, "unsupported transaction type", "type", t10);
        }
      }
      get typeName() {
        switch (this.type) {
          case 0:
            return "legacy";
          case 1:
            return "eip-2930";
          case 2:
            return "eip-1559";
          case 3:
            return "eip-4844";
        }
        return null;
      }
      get to() {
        let t10 = this.#ts;
        return null == t10 && 3 === this.type ? rz : t10;
      }
      set to(t10) {
        this.#ts = null == t10 ? null : t5(t10);
      }
      get nonce() {
        return this.#ta;
      }
      set nonce(t10) {
        this.#ta = tt(t10, "value");
      }
      get gasLimit() {
        return this.#to;
      }
      set gasLimit(t10) {
        this.#to = _(t10);
      }
      get gasPrice() {
        let t10 = this.#tl;
        return null == t10 && (0 === this.type || 1 === this.type) ? sC : t10;
      }
      set gasPrice(t10) {
        this.#tl = null == t10 ? null : _(t10, "gasPrice");
      }
      get maxPriorityFeePerGas() {
        let t10 = this.#tu;
        return null == t10 ? 2 === this.type || 3 === this.type ? sC : null : t10;
      }
      set maxPriorityFeePerGas(t10) {
        this.#tu = null == t10 ? null : _(t10, "maxPriorityFeePerGas");
      }
      get maxFeePerGas() {
        let t10 = this.#tc;
        return null == t10 ? 2 === this.type || 3 === this.type ? sC : null : t10;
      }
      set maxFeePerGas(t10) {
        this.#tc = null == t10 ? null : _(t10, "maxFeePerGas");
      }
      get data() {
        return this.#e;
      }
      set data(t10) {
        this.#e = H(t10);
      }
      get value() {
        return this.#th;
      }
      set value(t10) {
        this.#th = _(t10, "value");
      }
      get chainId() {
        return this.#tf;
      }
      set chainId(t10) {
        this.#tf = _(t10);
      }
      get signature() {
        return this.#td || null;
      }
      set signature(t10) {
        this.#td = null == t10 ? null : iT.from(t10);
      }
      get accessList() {
        let t10 = this.#tp || null;
        return null == t10 ? 1 === this.type || 2 === this.type || 3 === this.type ? [] : null : t10;
      }
      set accessList(t10) {
        this.#tp = null == t10 ? null : rO(t10);
      }
      get maxFeePerBlobGas() {
        let t10 = this.#tg;
        return null == t10 && 3 === this.type ? sC : t10;
      }
      set maxFeePerBlobGas(t10) {
        this.#tg = null == t10 ? null : _(t10, "maxFeePerBlobGas");
      }
      get blobVersionedHashes() {
        let t10 = this.#tm;
        return null == t10 && 3 === this.type ? [] : t10;
      }
      set blobVersionedHashes(t10) {
        if (null != t10) {
          O(Array.isArray(t10), "blobVersionedHashes must be an Array", "value", t10), t10 = t10.slice();
          for (let e10 = 0; e10 < t10.length; e10++)
            O(L(t10[e10], 32), "invalid blobVersionedHash", `value[${e10}]`, t10[e10]);
        }
        this.#tm = t10;
      }
      get blobs() {
        return null == this.#tA ? null : this.#tA.map((t10) => Object.assign({}, t10));
      }
      set blobs(t10) {
        if (null == t10) {
          this.#tA = null;
          return;
        }
        let e10 = [], r10 = [];
        for (let n10 = 0; n10 < t10.length; n10++) {
          let i10 = t10[n10];
          if (M(i10)) {
            I(this.#ty, "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", { operation: "set blobs()" });
            let t11 = F(i10);
            if (O(t11.length <= 131072, "blob is too large", `blobs[${n10}]`, i10), 131072 !== t11.length) {
              let e11 = new Uint8Array(131072);
              e11.set(t11), t11 = e11;
            }
            let s10 = this.#ty.blobToKzgCommitment(t11), a2 = H(this.#ty.computeBlobKzgProof(t11, s10));
            e10.push({ data: H(t11), commitment: H(s10), proof: a2 }), r10.push(sU(1, s10));
          } else {
            let t11 = H(i10.commitment);
            e10.push({ data: H(i10.data), commitment: t11, proof: H(i10.proof) }), r10.push(sU(1, t11));
          }
        }
        this.#tA = e10, this.#tm = r10;
      }
      get kzg() {
        return this.#ty;
      }
      set kzg(t10) {
        this.#ty = t10;
      }
      constructor() {
        this.#ti = null, this.#ts = null, this.#ta = 0, this.#to = sC, this.#tl = null, this.#tu = null, this.#tc = null, this.#e = "0x", this.#th = sC, this.#tf = sC, this.#td = null, this.#tp = null, this.#tg = null, this.#tm = null, this.#tA = null, this.#ty = null;
      }
      get hash() {
        return null == this.signature ? null : t0(this.#tb(true, false));
      }
      get unsignedHash() {
        return t0(this.unsignedSerialized);
      }
      get from() {
        var t10, e10, r10;
        return null == this.signature ? null : (t10 = this.unsignedHash, e10 = this.signature, t5(t0("0x" + ("string" == typeof (r10 = sw.recoverPublicKey(t10, e10)) ? sw.computePublicKey(r10, false) : r10.publicKey).substring(4)).substring(26)));
      }
      get fromPublicKey() {
        return null == this.signature ? null : sw.recoverPublicKey(this.unsignedHash, this.signature);
      }
      isSigned() {
        return null != this.signature;
      }
      #tb(t10, e10) {
        I(!t10 || null != this.signature, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
        let r10 = t10 ? this.signature : null;
        switch (this.inferType()) {
          case 0:
            return function(t11, e11) {
              let r11 = [sG(t11.nonce, "nonce"), sG(t11.gasPrice || 0, "gasPrice"), sG(t11.gasLimit, "gasLimit"), t11.to || "0x", sG(t11.value, "value"), t11.data], n10 = sC;
              if (t11.chainId != sC)
                n10 = _(t11.chainId, "tx.chainId"), O(!e11 || null == e11.networkV || e11.legacyChainId === n10, "tx.chainId/sig.v mismatch", "sig", e11);
              else if (t11.signature) {
                let e12 = t11.signature.legacyChainId;
                null != e12 && (n10 = e12);
              }
              if (!e11)
                return n10 !== sC && (r11.push(tr(n10)), r11.push("0x"), r11.push("0x")), sB(r11);
              let i10 = BigInt(27 + e11.yParity);
              return n10 !== sC ? i10 = iT.getChainIdV(n10, e11.v) : BigInt(e11.v) !== i10 && O(false, "tx.chainId/sig.v mismatch", "sig", e11), r11.push(tr(i10)), r11.push(tr(e11.r)), r11.push(tr(e11.s)), sB(r11);
            }(this, r10);
          case 1:
            return function(t11, e11) {
              let r11 = [sG(t11.chainId, "chainId"), sG(t11.nonce, "nonce"), sG(t11.gasPrice || 0, "gasPrice"), sG(t11.gasLimit, "gasLimit"), t11.to || "0x", sG(t11.value, "value"), t11.data, sH(t11.accessList || [])];
              return e11 && (r11.push(sG(e11.yParity, "recoveryParam")), r11.push(tr(e11.r)), r11.push(tr(e11.s))), Q(["0x01", sB(r11)]);
            }(this, r10);
          case 2:
            return function(t11, e11) {
              let r11 = [sG(t11.chainId, "chainId"), sG(t11.nonce, "nonce"), sG(t11.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), sG(t11.maxFeePerGas || 0, "maxFeePerGas"), sG(t11.gasLimit, "gasLimit"), t11.to || "0x", sG(t11.value, "value"), t11.data, sH(t11.accessList || [])];
              return e11 && (r11.push(sG(e11.yParity, "yParity")), r11.push(tr(e11.r)), r11.push(tr(e11.s))), Q(["0x02", sB(r11)]);
            }(this, r10);
          case 3:
            return function(t11, e11, r11) {
              let n10 = [sG(t11.chainId, "chainId"), sG(t11.nonce, "nonce"), sG(t11.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), sG(t11.maxFeePerGas || 0, "maxFeePerGas"), sG(t11.gasLimit, "gasLimit"), t11.to || rz, sG(t11.value, "value"), t11.data, sH(t11.accessList || []), sG(t11.maxFeePerBlobGas || 0, "maxFeePerBlobGas"), function(t12, e12) {
                O(Array.isArray(t12), `invalid ${e12}`, "value", t12);
                for (let e13 = 0; e13 < t12.length; e13++)
                  O(L(t12[e13], 32), "invalid ${ param } hash", `value[${e13}]`, t12[e13]);
                return t12;
              }(t11.blobVersionedHashes || [], "blobVersionedHashes")];
              return e11 && (n10.push(sG(e11.yParity, "yParity")), n10.push(tr(e11.r)), n10.push(tr(e11.s)), r11) ? Q(["0x03", sB([n10, r11.map((t12) => t12.data), r11.map((t12) => t12.commitment), r11.map((t12) => t12.proof)])]) : Q(["0x03", sB(n10)]);
            }(this, r10, e10 ? this.blobs : null);
        }
        I(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
      }
      get serialized() {
        return this.#tb(true, true);
      }
      get unsignedSerialized() {
        return this.#tb(false, false);
      }
      inferType() {
        let t10 = this.inferTypes();
        return t10.indexOf(2) >= 0 ? 2 : t10.pop();
      }
      inferTypes() {
        let t10 = null != this.gasPrice, e10 = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas, r10 = null != this.accessList, n10 = null != this.#tg || this.#tm;
        null != this.maxFeePerGas && null != this.maxPriorityFeePerGas && I(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), I(!e10 || 0 !== this.type && 1 !== this.type, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), I(0 !== this.type || !r10, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
        let i10 = [];
        return null != this.type ? i10.push(this.type) : e10 ? i10.push(2) : t10 ? (i10.push(1), r10 || i10.push(0)) : r10 ? (i10.push(1), i10.push(2)) : (n10 && this.to || (i10.push(0), i10.push(1), i10.push(2)), i10.push(3)), i10.sort(), i10;
      }
      isLegacy() {
        return 0 === this.type;
      }
      isBerlin() {
        return 1 === this.type;
      }
      isLondon() {
        return 2 === this.type;
      }
      isCancun() {
        return 3 === this.type;
      }
      clone() {
        return sj.from(this);
      }
      toJSON() {
        let t10 = (t11) => null == t11 ? null : t11.toString();
        return { type: this.type, to: this.to, data: this.data, nonce: this.nonce, gasLimit: t10(this.gasLimit), gasPrice: t10(this.gasPrice), maxPriorityFeePerGas: t10(this.maxPriorityFeePerGas), maxFeePerGas: t10(this.maxFeePerGas), value: t10(this.value), chainId: t10(this.chainId), sig: this.signature ? this.signature.toJSON() : null, accessList: this.accessList };
      }
      static from(t10) {
        if (null == t10)
          return new sj();
        if ("string" == typeof t10) {
          let e11 = F(t10);
          if (e11[0] >= 127)
            return sj.from(function(t11) {
              let e12 = sP(t11);
              O(Array.isArray(e12) && (9 === e12.length || 6 === e12.length), "invalid field count for legacy transaction", "data", t11);
              let r10 = { type: 0, nonce: sL(e12[0], "nonce"), gasPrice: sM(e12[1], "gasPrice"), gasLimit: sM(e12[2], "gasLimit"), to: sF(e12[3]), value: sM(e12[4], "value"), data: H(e12[5]), chainId: sC };
              if (6 === e12.length)
                return r10;
              let n10 = sM(e12[6], "v"), i10 = sM(e12[7], "r"), s10 = sM(e12[8], "s");
              if (i10 === sC && s10 === sC)
                r10.chainId = n10;
              else {
                let t12 = (n10 - sT) / sI;
                t12 < sC && (t12 = sC), r10.chainId = t12, O(t12 !== sC || n10 === sO || n10 === sR, "non-canonical legacy v", "v", e12[6]), r10.signature = iT.from({ r: z(e12[7], 32), s: z(e12[8], 32), v: n10 });
              }
              return r10;
            }(e11));
          switch (e11[0]) {
            case 1:
              return sj.from(function(t11) {
                let e12 = sP(F(t11).slice(1));
                O(Array.isArray(e12) && (8 === e12.length || 11 === e12.length), "invalid field count for transaction type: 1", "data", H(t11));
                let r10 = { type: 1, chainId: sM(e12[0], "chainId"), nonce: sL(e12[1], "nonce"), gasPrice: sM(e12[2], "gasPrice"), gasLimit: sM(e12[3], "gasLimit"), to: sF(e12[4]), value: sM(e12[5], "value"), data: H(e12[6]), accessList: sD(e12[7], "accessList") };
                return 8 === e12.length || sQ(r10, e12.slice(8)), r10;
              }(e11));
            case 2:
              return sj.from(function(t11) {
                let e12 = sP(F(t11).slice(1));
                O(Array.isArray(e12) && (9 === e12.length || 12 === e12.length), "invalid field count for transaction type: 2", "data", H(t11));
                let r10 = { type: 2, chainId: sM(e12[0], "chainId"), nonce: sL(e12[1], "nonce"), maxPriorityFeePerGas: sM(e12[2], "maxPriorityFeePerGas"), maxFeePerGas: sM(e12[3], "maxFeePerGas"), gasPrice: null, gasLimit: sM(e12[4], "gasLimit"), to: sF(e12[5]), value: sM(e12[6], "value"), data: H(e12[7]), accessList: sD(e12[8], "accessList") };
                return 9 === e12.length || sQ(r10, e12.slice(9)), r10;
              }(e11));
            case 3:
              return sj.from(function(t11) {
                let e12 = sP(F(t11).slice(1)), r10 = "3", n10 = null;
                if (4 === e12.length && Array.isArray(e12[0])) {
                  r10 = "3 (network format)";
                  let t12 = e12[1], i11 = e12[2], s10 = e12[3];
                  O(Array.isArray(t12), "invalid network format: blobs not an array", "fields[1]", t12), O(Array.isArray(i11), "invalid network format: commitments not an array", "fields[2]", i11), O(Array.isArray(s10), "invalid network format: proofs not an array", "fields[3]", s10), O(t12.length === i11.length, "invalid network format: blobs/commitments length mismatch", "fields", e12), O(t12.length === s10.length, "invalid network format: blobs/proofs length mismatch", "fields", e12), n10 = [];
                  for (let r11 = 0; r11 < e12[1].length; r11++)
                    n10.push({ data: t12[r11], commitment: i11[r11], proof: s10[r11] });
                  e12 = e12[0];
                }
                O(Array.isArray(e12) && (11 === e12.length || 14 === e12.length), `invalid field count for transaction type: ${r10}`, "data", H(t11));
                let i10 = { type: 3, chainId: sM(e12[0], "chainId"), nonce: sL(e12[1], "nonce"), maxPriorityFeePerGas: sM(e12[2], "maxPriorityFeePerGas"), maxFeePerGas: sM(e12[3], "maxFeePerGas"), gasPrice: null, gasLimit: sM(e12[4], "gasLimit"), to: sF(e12[5]), value: sM(e12[6], "value"), data: H(e12[7]), accessList: sD(e12[8], "accessList"), maxFeePerBlobGas: sM(e12[9], "maxFeePerBlobGas"), blobVersionedHashes: e12[10] };
                n10 && (i10.blobs = n10), O(null != i10.to, `invalid address for transaction type: ${r10}`, "data", t11), O(Array.isArray(i10.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t11);
                for (let e13 = 0; e13 < i10.blobVersionedHashes.length; e13++)
                  O(L(i10.blobVersionedHashes[e13], 32), `invalid blobVersionedHash at index ${e13}: must be length 32`, "data", t11);
                return 11 === e12.length || sQ(i10, e12.slice(11)), i10;
              }(e11));
          }
          I(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
        }
        let e10 = new sj();
        return null != t10.type && (e10.type = t10.type), null != t10.to && (e10.to = t10.to), null != t10.nonce && (e10.nonce = t10.nonce), null != t10.gasLimit && (e10.gasLimit = t10.gasLimit), null != t10.gasPrice && (e10.gasPrice = t10.gasPrice), null != t10.maxPriorityFeePerGas && (e10.maxPriorityFeePerGas = t10.maxPriorityFeePerGas), null != t10.maxFeePerGas && (e10.maxFeePerGas = t10.maxFeePerGas), null != t10.maxFeePerBlobGas && (e10.maxFeePerBlobGas = t10.maxFeePerBlobGas), null != t10.data && (e10.data = t10.data), null != t10.value && (e10.value = t10.value), null != t10.chainId && (e10.chainId = t10.chainId), null != t10.signature && (e10.signature = iT.from(t10.signature)), null != t10.accessList && (e10.accessList = t10.accessList), null != t10.blobVersionedHashes && (e10.blobVersionedHashes = t10.blobVersionedHashes), null != t10.kzg && (e10.kzg = t10.kzg), null != t10.blobs && (e10.blobs = t10.blobs), null != t10.hash && (O(e10.isSigned(), "unsigned transaction cannot define '.hash'", "tx", t10), O(e10.hash === t10.hash, "hash mismatch", "tx", t10)), null != t10.from && (O(e10.isSigned(), "unsigned transaction cannot define '.from'", "tx", t10), O(e10.from.toLowerCase() === (t10.from || "").toLowerCase(), "from mismatch", "tx", t10)), e10;
      }
    }
    let sV = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    BigInt(0);
    let sJ = BigInt(58);
    function sz(t10) {
      return t10.match(/^ipfs:\/\/ipfs\//i) ? t10 = t10.substring(12) : t10.match(/^ipfs:\/\//i) ? t10 = t10.substring(7) : O(false, "unsupported IPFS format", "link", t10), `https://gateway.ipfs.io/ipfs/${t10}`;
    }
    class sK {
      name;
      constructor(t10) {
        P(this, { name: t10 });
      }
      connect(t10) {
        return this;
      }
      supportsCoinType(t10) {
        return false;
      }
      async encodeAddress(t10, e10) {
        throw Error("unsupported coin");
      }
      async decodeAddress(t10, e10) {
        throw Error("unsupported coin");
      }
    }
    let sq = RegExp("^(ipfs)://(.*)$", "i"), sZ = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), sq, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
    class sY {
      provider;
      address;
      name;
      #tw;
      #tE;
      constructor(t10, e10, r10) {
        P(this, { provider: t10, address: e10, name: r10 }), this.#tw = null, this.#tE = new nO(e10, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], t10);
      }
      async supportsWildcard() {
        return null == this.#tw && (this.#tw = (async () => {
          try {
            return await this.#tE.supportsInterface("0x9061b923");
          } catch (t10) {
            if (k(t10, "CALL_EXCEPTION"))
              return false;
            throw this.#tw = null, t10;
          }
        })()), await this.#tw;
      }
      async #tv(t10, e10) {
        var r10;
        e10 = (e10 || []).slice();
        let n10 = this.#tE.interface;
        e10.unshift(n6(this.name));
        let i10 = null;
        await this.supportsWildcard() && (I(i10 = n10.getFunction(t10), "missing fragment", "UNKNOWN_ERROR", { info: { funcName: t10 } }), e10 = [(r10 = this.name, O(true, "DNS encoded label cannot exceed 255", "length", 255), H(Q(n5(r10).map((t11) => {
          O(t11.length <= 255, `label ${JSON.stringify(r10)} exceeds 255 bytes`, "name", r10);
          let e11 = new Uint8Array(t11.length + 1);
          return e11.set(t11, 1), e11[0] = e11.length - 1, e11;
        }))) + "00"), n10.encodeFunctionData(i10, e10)], t10 = "resolve(bytes,bytes)"), e10.push({ enableCcipRead: true });
        try {
          let r11 = await this.#tE[t10](...e10);
          if (i10)
            return n10.decodeFunctionResult(i10, r11)[0];
          return r11;
        } catch (t11) {
          if (!k(t11, "CALL_EXCEPTION"))
            throw t11;
        }
        return null;
      }
      async getAddress(t10) {
        if (null == t10 && (t10 = 60), 60 === t10)
          try {
            let t11 = await this.#tv("addr(bytes32)");
            if (null == t11 || t11 === rz)
              return null;
            return t11;
          } catch (t11) {
            if (k(t11, "CALL_EXCEPTION"))
              return null;
            throw t11;
          }
        if (t10 >= 0 && t10 < 2147483648) {
          let e11 = t10 + 2147483648, r11 = await this.#tv("addr(bytes32,uint)", [e11]);
          if (L(r11, 20))
            return t5(r11);
        }
        let e10 = null;
        for (let r11 of this.provider.plugins)
          if (r11 instanceof sK && r11.supportsCoinType(t10)) {
            e10 = r11;
            break;
          }
        if (null == e10)
          return null;
        let r10 = await this.#tv("addr(bytes32,uint)", [t10]);
        if (null == r10 || "0x" === r10)
          return null;
        let n10 = await e10.decodeAddress(t10, r10);
        if (null != n10)
          return n10;
        I(false, "invalid coin data", "UNSUPPORTED_OPERATION", { operation: `getAddress(${t10})`, info: { coinType: t10, data: r10 } });
      }
      async getText(t10) {
        let e10 = await this.#tv("text(bytes32,string)", [t10]);
        return null == e10 || "0x" === e10 ? null : e10;
      }
      async getContentHash() {
        let t10 = await this.#tv("contenthash(bytes32)");
        if (null == t10 || "0x" === t10)
          return null;
        let e10 = t10.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
        if (e10) {
          let t11 = "e3010170" === e10[1] ? "ipfs" : "ipns", r11 = parseInt(e10[4], 16);
          if (e10[5].length === 2 * r11)
            return `${t11}://${function(t12) {
              let e11 = F(t12), r12 = $(e11), n10 = "";
              for (; r12; )
                n10 = sV[Number(r12 % sJ)] + n10, r12 /= sJ;
              for (let t13 = 0; t13 < e11.length && !e11[t13]; t13++)
                n10 = sV[0] + n10;
              return n10;
            }("0x" + e10[2])}`;
        }
        let r10 = t10.match(/^0xe40101fa011b20([0-9a-f]*)$/);
        if (r10 && 64 === r10[1].length)
          return `bzz://${r10[1]}`;
        I(false, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", { operation: "getContentHash()", info: { data: t10 } });
      }
      async getAvatar() {
        return (await this._getAvatar()).url;
      }
      async _getAvatar() {
        let t10 = [{ type: "name", value: this.name }];
        try {
          let e10 = await this.getText("avatar");
          if (null == e10)
            return t10.push({ type: "!avatar", value: "" }), { url: null, linkage: t10 };
          t10.push({ type: "avatar", value: e10 });
          for (let r10 = 0; r10 < sZ.length; r10++) {
            let n10 = e10.match(sZ[r10]);
            if (null == n10)
              continue;
            let i10 = n10[1].toLowerCase();
            switch (i10) {
              case "https":
              case "data":
                return t10.push({ type: "url", value: e10 }), { linkage: t10, url: e10 };
              case "ipfs": {
                let r11 = sz(e10);
                return t10.push({ type: "ipfs", value: e10 }), t10.push({ type: "url", value: r11 }), { linkage: t10, url: r11 };
              }
              case "erc721":
              case "erc1155": {
                let r11 = "erc721" === i10 ? "tokenURI(uint256)" : "uri(uint256)";
                t10.push({ type: i10, value: e10 });
                let s10 = await this.getAddress();
                if (null == s10)
                  return t10.push({ type: "!owner", value: "" }), { url: null, linkage: t10 };
                let a2 = (n10[2] || "").split("/");
                if (2 !== a2.length)
                  return t10.push({ type: `!${i10}caip`, value: n10[2] || "" }), { url: null, linkage: t10 };
                let o2 = a2[1], l2 = new nO(a2[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                if ("erc721" === i10) {
                  let e11 = await l2.ownerOf(o2);
                  if (s10 !== e11)
                    return t10.push({ type: "!owner", value: e11 }), { url: null, linkage: t10 };
                  t10.push({ type: "owner", value: e11 });
                } else if ("erc1155" === i10) {
                  let e11 = await l2.balanceOf(s10, o2);
                  if (!e11)
                    return t10.push({ type: "!balance", value: "0" }), { url: null, linkage: t10 };
                  t10.push({ type: "balance", value: e11.toString() });
                }
                let u2 = await l2[r11](o2);
                if (null == u2 || "0x" === u2)
                  return t10.push({ type: "!metadata-url", value: "" }), { url: null, linkage: t10 };
                t10.push({ type: "metadata-url-base", value: u2 }), "erc1155" === i10 && (u2 = u2.replace("{id}", te(o2, 32).substring(2)), t10.push({ type: "metadata-url-expanded", value: u2 })), u2.match(/^ipfs:/i) && (u2 = sz(u2)), t10.push({ type: "metadata-url", value: u2 });
                let c2 = {}, h2 = await new rj(u2).send();
                h2.assertOk();
                try {
                  c2 = h2.bodyJson;
                } catch (e11) {
                  try {
                    t10.push({ type: "!metadata", value: h2.bodyText });
                  } catch (r12) {
                    let e12 = h2.body;
                    e12 && t10.push({ type: "!metadata", value: H(e12) });
                  }
                  return { url: null, linkage: t10 };
                }
                if (!c2)
                  return t10.push({ type: "!metadata", value: "" }), { url: null, linkage: t10 };
                t10.push({ type: "metadata", value: JSON.stringify(c2) });
                let f2 = c2.image;
                if ("string" != typeof f2)
                  return t10.push({ type: "!imageUrl", value: "" }), { url: null, linkage: t10 };
                if (f2.match(/^(https:\/\/|data:)/i))
                  ;
                else {
                  let e11 = f2.match(sq);
                  if (null == e11)
                    return t10.push({ type: "!imageUrl-ipfs", value: f2 }), { url: null, linkage: t10 };
                  t10.push({ type: "imageUrl-ipfs", value: f2 }), f2 = sz(f2);
                }
                return t10.push({ type: "url", value: f2 }), { linkage: t10, url: f2 };
              }
            }
          }
        } catch (t11) {
        }
        return { linkage: t10, url: null };
      }
      static async getEnsAddress(t10) {
        let e10 = await t10.getNetwork(), r10 = e10.getPlugin("org.ethers.plugins.network.Ens");
        return I(r10, "network does not support ENS", "UNSUPPORTED_OPERATION", { operation: "getEnsAddress", info: { network: e10 } }), r10.address;
      }
      static async #tx(t10, e10) {
        let r10 = await sY.getEnsAddress(t10);
        try {
          let n10 = new nO(r10, ["function resolver(bytes32) view returns (address)"], t10), i10 = await n10.resolver(n6(e10), { enableCcipRead: true });
          if (i10 === rz)
            return null;
          return i10;
        } catch (t11) {
          throw t11;
        }
        return null;
      }
      static async fromName(t10, e10) {
        let r10 = e10;
        for (; ; ) {
          if ("" === r10 || "." === r10 || "eth" !== e10 && "eth" === r10)
            return null;
          let n10 = await sY.#tx(t10, r10);
          if (null != n10) {
            let i10 = new sY(t10, n10, e10);
            if (r10 !== e10 && !await i10.supportsWildcard())
              return null;
            return i10;
          }
          r10 = r10.split(".").slice(1).join(".");
        }
      }
    }
    let s_ = BigInt(0);
    function sW(t10, e10) {
      return function(r10) {
        return null == r10 ? e10 : t10(r10);
      };
    }
    function sX(t10, e10) {
      return (r10) => {
        if (e10 && null == r10)
          return null;
        if (!Array.isArray(r10))
          throw Error("not an array");
        return r10.map((e11) => t10(e11));
      };
    }
    function s$(t10, e10) {
      return (r10) => {
        let n10 = {};
        for (let i10 in t10) {
          let s10 = i10;
          if (e10 && i10 in e10 && !(s10 in r10)) {
            for (let t11 of e10[i10])
              if (t11 in r10) {
                s10 = t11;
                break;
              }
          }
          try {
            let e11 = t10[i10](r10[s10]);
            void 0 !== e11 && (n10[i10] = e11);
          } catch (e11) {
            let t11 = e11 instanceof Error ? e11.message : "not-an-error";
            I(false, `invalid value for value.${i10} (${t11})`, "BAD_DATA", { value: r10 });
          }
        }
        return n10;
      };
    }
    function s0(t10) {
      return O(L(t10, true), "invalid data", "value", t10), t10;
    }
    function s1(t10) {
      return O(L(t10, 32), "invalid hash", "value", t10), t10;
    }
    let s2 = s$({ address: t5, blockHash: s1, blockNumber: tt, data: s0, index: tt, removed: sW(function(t10) {
      switch (t10) {
        case true:
        case "true":
          return true;
        case false:
        case "false":
          return false;
      }
      O(false, `invalid boolean; ${JSON.stringify(t10)}`, "value", t10);
    }, false), topics: sX(s1), transactionHash: s1, transactionIndex: tt }, { index: ["logIndex"] }), s3 = s$({ hash: sW(s1), parentHash: s1, parentBeaconBlockRoot: sW(s1, null), number: tt, timestamp: tt, nonce: sW(s0), difficulty: _, gasLimit: _, gasUsed: _, stateRoot: sW(s1, null), receiptsRoot: sW(s1, null), blobGasUsed: sW(_, null), excessBlobGas: sW(_, null), miner: sW(t5), prevRandao: sW(s1, null), extraData: s0, baseFeePerGas: sW(_) }, { prevRandao: ["mixHash"] }), s4 = s$({ transactionIndex: tt, blockNumber: tt, transactionHash: s1, address: t5, topics: sX(s1), data: s0, index: tt, blockHash: s1 }, { index: ["logIndex"] }), s8 = s$({ to: sW(t5, null), from: sW(t5, null), contractAddress: sW(t5, null), index: tt, root: sW(H), gasUsed: _, blobGasUsed: sW(_, null), logsBloom: sW(s0), blockHash: s1, hash: s1, logs: sX(function(t10) {
      return s4(t10);
    }), blockNumber: tt, cumulativeGasUsed: _, effectiveGasPrice: sW(_), blobGasPrice: sW(_, null), status: sW(tt), type: sW(tt, 0) }, { effectiveGasPrice: ["gasPrice"], hash: ["transactionHash"], index: ["transactionIndex"] });
    function s5(t10) {
      t10.to && _(t10.to) === s_ && (t10.to = "0x0000000000000000000000000000000000000000");
      let e10 = s$({ hash: s1, index: sW(tt, void 0), type: (t11) => "0x" === t11 || null == t11 ? 0 : tt(t11), accessList: sW(rO, null), blobVersionedHashes: sW(sX(s1, true), null), blockHash: sW(s1, null), blockNumber: sW(tt, null), transactionIndex: sW(tt, null), from: t5, gasPrice: sW(_), maxPriorityFeePerGas: sW(_), maxFeePerGas: sW(_), maxFeePerBlobGas: sW(_, null), gasLimit: _, to: sW(t5, null), value: _, nonce: tt, data: s0, creates: sW(t5, null), chainId: sW(_, null) }, { data: ["input"], gasLimit: ["gas"], index: ["transactionIndex"] })(t10);
      if (null == e10.to && null == e10.creates && (e10.creates = function(t11) {
        let e11 = t5(t11.from), r10 = _(t11.nonce, "tx.nonce").toString(16);
        return t5(V(t0(sB([e11, r10 = "0" === r10 ? "0x" : r10.length % 2 ? "0x0" + r10 : "0x" + r10])), 12));
      }(e10)), (1 === t10.type || 2 === t10.type) && null == t10.accessList && (e10.accessList = []), t10.signature ? e10.signature = iT.from(t10.signature) : e10.signature = iT.from(t10), null == e10.chainId) {
        let t11 = e10.signature.legacyChainId;
        null != t11 && (e10.chainId = t11);
      }
      return e10.blockHash && _(e10.blockHash) === s_ && (e10.blockHash = null), e10;
    }
    class s6 {
      name;
      constructor(t10) {
        P(this, { name: t10 });
      }
      clone() {
        return new s6(this.name);
      }
    }
    class s9 extends s6 {
      effectiveBlock;
      txBase;
      txCreate;
      txDataZero;
      txDataNonzero;
      txAccessListStorageKey;
      txAccessListAddress;
      constructor(t10, e10) {
        null == t10 && (t10 = 0), super(`org.ethers.network.plugins.GasCost#${t10 || 0}`);
        let r10 = { effectiveBlock: t10 };
        function n10(t11, n11) {
          let i10 = (e10 || {})[t11];
          null == i10 && (i10 = n11), O("number" == typeof i10, `invalud value for ${t11}`, "costs", e10), r10[t11] = i10;
        }
        n10("txBase", 21e3), n10("txCreate", 32e3), n10("txDataZero", 4), n10("txDataNonzero", 16), n10("txAccessListStorageKey", 1900), n10("txAccessListAddress", 2400), P(this, r10);
      }
      clone() {
        return new s9(this.effectiveBlock, this);
      }
    }
    class s7 extends s6 {
      address;
      targetNetwork;
      constructor(t10, e10) {
        super("org.ethers.plugins.network.Ens"), P(this, { address: t10 || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", targetNetwork: null == e10 ? 1 : e10 });
      }
      clone() {
        return new s7(this.address, this.targetNetwork);
      }
    }
    class at extends s6 {
      #k;
      #tP;
      get url() {
        return this.#k;
      }
      get processFunc() {
        return this.#tP;
      }
      constructor(t10, e10) {
        super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"), this.#k = t10, this.#tP = e10;
      }
      clone() {
        return this;
      }
    }
    let ae = /* @__PURE__ */ new Map();
    class ar {
      #tN;
      #tf;
      #tk;
      constructor(t10, e10) {
        this.#tN = t10, this.#tf = _(e10), this.#tk = /* @__PURE__ */ new Map();
      }
      toJSON() {
        return { name: this.name, chainId: String(this.chainId) };
      }
      get name() {
        return this.#tN;
      }
      set name(t10) {
        this.#tN = t10;
      }
      get chainId() {
        return this.#tf;
      }
      set chainId(t10) {
        this.#tf = _(t10, "chainId");
      }
      matches(t10) {
        if (null == t10)
          return false;
        if ("string" == typeof t10) {
          try {
            return this.chainId === _(t10);
          } catch (t11) {
          }
          return this.name === t10;
        }
        if ("number" == typeof t10 || "bigint" == typeof t10) {
          try {
            return this.chainId === _(t10);
          } catch (t11) {
          }
          return false;
        }
        if ("object" == typeof t10) {
          if (null != t10.chainId) {
            try {
              return this.chainId === _(t10.chainId);
            } catch (t11) {
            }
            return false;
          }
          if (null != t10.name)
            return this.name === t10.name;
        }
        return false;
      }
      get plugins() {
        return Array.from(this.#tk.values());
      }
      attachPlugin(t10) {
        if (this.#tk.get(t10.name))
          throw Error(`cannot replace existing plugin: ${t10.name} `);
        return this.#tk.set(t10.name, t10.clone()), this;
      }
      getPlugin(t10) {
        return this.#tk.get(t10) || null;
      }
      getPlugins(t10) {
        return this.plugins.filter((e10) => e10.name.split("#")[0] === t10);
      }
      clone() {
        let t10 = new ar(this.name, this.chainId);
        return this.plugins.forEach((e10) => {
          t10.attachPlugin(e10.clone());
        }), t10;
      }
      computeIntrinsicGas(t10) {
        let e10 = this.getPlugin("org.ethers.plugins.network.GasCost") || new s9(), r10 = e10.txBase;
        if (null == t10.to && (r10 += e10.txCreate), t10.data)
          for (let n10 = 2; n10 < t10.data.length; n10 += 2)
            "00" === t10.data.substring(n10, n10 + 2) ? r10 += e10.txDataZero : r10 += e10.txDataNonzero;
        if (t10.accessList) {
          let n10 = rO(t10.accessList);
          for (let t11 in n10)
            r10 += e10.txAccessListAddress + e10.txAccessListStorageKey * n10[t11].storageKeys.length;
        }
        return r10;
      }
      static from(t10) {
        if (function() {
          as || (as = true, t11("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }), t11("ropsten", 3, { ensNetwork: 3 }), t11("rinkeby", 4, { ensNetwork: 4 }), t11("goerli", 5, { ensNetwork: 5 }), t11("kovan", 42, { ensNetwork: 42 }), t11("sepolia", 11155111, { ensNetwork: 11155111 }), t11("holesky", 17e3, { ensNetwork: 17e3 }), t11("classic", 61, {}), t11("classicKotti", 6, {}), t11("arbitrum", 42161, { ensNetwork: 1 }), t11("arbitrum-goerli", 421613, {}), t11("arbitrum-sepolia", 421614, {}), t11("base", 8453, { ensNetwork: 1 }), t11("base-goerli", 84531, {}), t11("base-sepolia", 84532, {}), t11("bnb", 56, { ensNetwork: 1 }), t11("bnbt", 97, {}), t11("linea", 59144, { ensNetwork: 1 }), t11("linea-goerli", 59140, {}), t11("linea-sepolia", 59141, {}), t11("matic", 137, { ensNetwork: 1, plugins: [ai("https://gasstation.polygon.technology/v2")] }), t11("matic-amoy", 80002, {}), t11("matic-mumbai", 80001, { altNames: ["maticMumbai", "maticmum"], plugins: [ai("https://gasstation-testnet.polygon.technology/v2")] }), t11("optimism", 10, { ensNetwork: 1, plugins: [] }), t11("optimism-goerli", 420, {}), t11("optimism-sepolia", 11155420, {}), t11("xdai", 100, { ensNetwork: 1 }));
          function t11(t12, e10, r10) {
            let n10 = function() {
              let n11 = new ar(t12, e10);
              return null != r10.ensNetwork && n11.attachPlugin(new s7(null, r10.ensNetwork)), n11.attachPlugin(new s9()), (r10.plugins || []).forEach((t13) => {
                n11.attachPlugin(t13);
              }), n11;
            };
            ar.register(t12, n10), ar.register(e10, n10), r10.altNames && r10.altNames.forEach((t13) => {
              ar.register(t13, n10);
            });
          }
        }(), null == t10)
          return ar.from("mainnet");
        if ("number" == typeof t10 && (t10 = BigInt(t10)), "string" == typeof t10 || "bigint" == typeof t10) {
          let e10 = ae.get(t10);
          if (e10)
            return e10();
          if ("bigint" == typeof t10)
            return new ar("unknown", t10);
          O(false, "unknown network", "network", t10);
        }
        if ("function" == typeof t10.clone)
          return t10.clone();
        if ("object" == typeof t10) {
          O("string" == typeof t10.name && "number" == typeof t10.chainId, "invalid network object name or chainId", "network", t10);
          let e10 = new ar(t10.name, t10.chainId);
          return (t10.ensAddress || null != t10.ensNetwork) && e10.attachPlugin(new s7(t10.ensAddress, t10.ensNetwork)), e10;
        }
        O(false, "invalid network", "network", t10);
      }
      static register(t10, e10) {
        "number" == typeof t10 && (t10 = BigInt(t10));
        let r10 = ae.get(t10);
        r10 && O(false, `conflicting network for ${JSON.stringify(r10.name)}`, "nameOrChainId", t10), ae.set(t10, e10);
      }
    }
    function an(t10, e10) {
      let r10 = String(t10);
      if (!r10.match(/^[0-9.]+$/))
        throw Error(`invalid gwei value: ${t10}`);
      let n10 = r10.split(".");
      if (1 === n10.length && n10.push(""), 2 !== n10.length)
        throw Error(`invalid gwei value: ${t10}`);
      for (; n10[1].length < e10; )
        n10[1] += "0";
      if (n10[1].length > 9) {
        let t11 = BigInt(n10[1].substring(0, 9));
        !n10[1].substring(9).match(/^0+$/) && t11++, n10[1] = t11.toString();
      }
      return BigInt(n10[0] + n10[1]);
    }
    function ai(t10) {
      return new at(t10, async (t11, e10, r10) => {
        let n10;
        r10.setHeader("User-Agent", "ethers");
        try {
          let [e11, i10] = await Promise.all([r10.send(), t11()]), s10 = (n10 = e11).bodyJson.standard;
          return { gasPrice: i10.gasPrice, maxFeePerGas: an(s10.maxFee, 9), maxPriorityFeePerGas: an(s10.maxPriorityFee, 9) };
        } catch (t12) {
          I(false, `error encountered with polygon gas station (${JSON.stringify(r10.url)})`, "SERVER_ERROR", { request: r10, response: n10, error: t12 });
        }
      });
    }
    let as = false;
    function aa(t10) {
      return JSON.parse(JSON.stringify(t10));
    }
    class ao {
      #tB;
      #tC;
      #tI;
      #tO;
      constructor(t10) {
        this.#tB = t10, this.#tC = null, this.#tI = 4e3, this.#tO = -2;
      }
      get pollingInterval() {
        return this.#tI;
      }
      set pollingInterval(t10) {
        this.#tI = t10;
      }
      async #tR() {
        try {
          let t10 = await this.#tB.getBlockNumber();
          if (-2 === this.#tO) {
            this.#tO = t10;
            return;
          }
          if (t10 !== this.#tO) {
            for (let e10 = this.#tO + 1; e10 <= t10; e10++) {
              if (null == this.#tC)
                return;
              await this.#tB.emit("block", e10);
            }
            this.#tO = t10;
          }
        } catch (t10) {
        }
        null != this.#tC && (this.#tC = this.#tB._setTimeout(this.#tR.bind(this), this.#tI));
      }
      start() {
        this.#tC || (this.#tC = this.#tB._setTimeout(this.#tR.bind(this), this.#tI), this.#tR());
      }
      stop() {
        this.#tC && (this.#tB._clearTimeout(this.#tC), this.#tC = null);
      }
      pause(t10) {
        this.stop(), t10 && (this.#tO = -2);
      }
      resume() {
        this.start();
      }
    }
    class al {
      #tB;
      #tR;
      #tT;
      constructor(t10) {
        this.#tB = t10, this.#tT = false, this.#tR = (t11) => {
          this._poll(t11, this.#tB);
        };
      }
      async _poll(t10, e10) {
        throw Error("sub-classes must override this");
      }
      start() {
        this.#tT || (this.#tT = true, this.#tR(-2), this.#tB.on("block", this.#tR));
      }
      stop() {
        this.#tT && (this.#tT = false, this.#tB.off("block", this.#tR));
      }
      pause(t10) {
        this.stop();
      }
      resume() {
        this.start();
      }
    }
    class au extends al {
      #tS;
      #tU;
      constructor(t10, e10) {
        super(t10), this.#tS = e10, this.#tU = -2;
      }
      pause(t10) {
        t10 && (this.#tU = -2), super.pause(t10);
      }
      async _poll(t10, e10) {
        let r10 = await e10.getBlock(this.#tS);
        null != r10 && (-2 === this.#tU ? this.#tU = r10.number : r10.number > this.#tU && (e10.emit(this.#tS, r10.number), this.#tU = r10.number));
      }
    }
    class ac extends al {
      #X;
      constructor(t10, e10) {
        super(t10), this.#X = aa(e10);
      }
      async _poll(t10, e10) {
        throw Error("@TODO");
      }
    }
    class ah extends al {
      #tF;
      constructor(t10, e10) {
        super(t10), this.#tF = e10;
      }
      async _poll(t10, e10) {
        let r10 = await e10.getTransactionReceipt(this.#tF);
        r10 && e10.emit(this.#tF, r10);
      }
    }
    class af {
      #tB;
      #X;
      #tC;
      #tT;
      #tO;
      constructor(t10, e10) {
        this.#tB = t10, this.#X = aa(e10), this.#tC = this.#tR.bind(this), this.#tT = false, this.#tO = -2;
      }
      async #tR(t10) {
        if (-2 === this.#tO)
          return;
        let e10 = aa(this.#X);
        e10.fromBlock = this.#tO + 1, e10.toBlock = t10;
        let r10 = await this.#tB.getLogs(e10);
        if (0 === r10.length) {
          this.#tO < t10 - 60 && (this.#tO = t10 - 60);
          return;
        }
        for (let t11 of r10)
          this.#tB.emit(this.#X, t11), this.#tO = t11.blockNumber;
      }
      start() {
        this.#tT || (this.#tT = true, -2 === this.#tO && this.#tB.getBlockNumber().then((t10) => {
          this.#tO = t10;
        }), this.#tB.on("block", this.#tC));
      }
      stop() {
        this.#tT && (this.#tT = false, this.#tB.off("block", this.#tC));
      }
      pause(t10) {
        this.stop(), t10 && (this.#tO = -2);
      }
      resume() {
        this.start();
      }
    }
    let ad = BigInt(2);
    function ap(t10) {
      return t10 && "function" == typeof t10.then;
    }
    function ag(t10, e10) {
      return t10 + ":" + JSON.stringify(e10, (t11, e11) => {
        if (null == e11)
          return "null";
        if ("bigint" == typeof e11)
          return `bigint:${e11.toString()}`;
        if ("string" == typeof e11)
          return e11.toLowerCase();
        if ("object" == typeof e11 && !Array.isArray(e11)) {
          let t12 = Object.keys(e11);
          return t12.sort(), t12.reduce((t13, r10) => (t13[r10] = e11[r10], t13), {});
        }
        return e11;
      });
    }
    class am {
      name;
      constructor(t10) {
        P(this, { name: t10 });
      }
      start() {
      }
      stop() {
      }
      pause(t10) {
      }
      resume() {
      }
    }
    function ay(t10) {
      return (t10 = Array.from(new Set(t10).values())).sort(), t10;
    }
    async function aA(t10, e10) {
      if (null == t10)
        throw Error("invalid event");
      if (Array.isArray(t10) && (t10 = { topics: t10 }), "string" == typeof t10)
        switch (t10) {
          case "block":
          case "debug":
          case "error":
          case "finalized":
          case "network":
          case "pending":
          case "safe":
            return { type: t10, tag: t10 };
        }
      if (L(t10, 32)) {
        let e11 = t10.toLowerCase();
        return { type: "transaction", tag: ag("tx", { hash: e11 }), hash: e11 };
      }
      if (t10.orphan) {
        let e11 = t10;
        return { type: "orphan", tag: ag("orphan", e11), filter: JSON.parse(JSON.stringify(e11)) };
      }
      if (t10.address || t10.topics) {
        let r10 = t10, n10 = { topics: (r10.topics || []).map((t11) => null == t11 ? null : Array.isArray(t11) ? ay(t11.map((t12) => t12.toLowerCase())) : t11.toLowerCase()) };
        if (r10.address) {
          let t11 = [], i10 = [], s10 = (r11) => {
            L(r11) ? t11.push(r11) : i10.push((async () => {
              t11.push(await rd(r11, e10));
            })());
          };
          Array.isArray(r10.address) ? r10.address.forEach(s10) : s10(r10.address), i10.length && await Promise.all(i10), n10.address = ay(t11.map((t12) => t12.toLowerCase()));
        }
        return { filter: n10, tag: ag("event", n10), type: "event" };
      }
      O(false, "unknown ProviderEvent", "event", t10);
    }
    function ab() {
      return new Date().getTime();
    }
    let aw = { cacheTimeout: 250, pollingInterval: 4e3 };
    class aE {
      #tD;
      #tk;
      #tL;
      #tM;
      #tG;
      #tH;
      #tQ;
      #tj;
      #tV;
      #tJ;
      #tz;
      #c;
      constructor(t10, e10) {
        if (this.#c = Object.assign({}, aw, e10 || {}), "any" === t10)
          this.#tH = true, this.#tG = null;
        else if (t10) {
          let e11 = ar.from(t10);
          this.#tH = false, this.#tG = Promise.resolve(e11), setTimeout(() => {
            this.emit("network", e11, null);
          }, 0);
        } else
          this.#tH = false, this.#tG = null;
        this.#tj = -1, this.#tQ = /* @__PURE__ */ new Map(), this.#tD = /* @__PURE__ */ new Map(), this.#tk = /* @__PURE__ */ new Map(), this.#tL = null, this.#tM = false, this.#tV = 1, this.#tJ = /* @__PURE__ */ new Map(), this.#tz = false;
      }
      get pollingInterval() {
        return this.#c.pollingInterval;
      }
      get provider() {
        return this;
      }
      get plugins() {
        return Array.from(this.#tk.values());
      }
      attachPlugin(t10) {
        if (this.#tk.get(t10.name))
          throw Error(`cannot replace existing plugin: ${t10.name} `);
        return this.#tk.set(t10.name, t10.connect(this)), this;
      }
      getPlugin(t10) {
        return this.#tk.get(t10) || null;
      }
      get disableCcipRead() {
        return this.#tz;
      }
      set disableCcipRead(t10) {
        this.#tz = !!t10;
      }
      async #tK(t10) {
        let e10 = this.#c.cacheTimeout;
        if (e10 < 0)
          return await this._perform(t10);
        let r10 = ag(t10.method, t10), n10 = this.#tQ.get(r10);
        return n10 || (n10 = this._perform(t10), this.#tQ.set(r10, n10), setTimeout(() => {
          this.#tQ.get(r10) === n10 && this.#tQ.delete(r10);
        }, e10)), await n10;
      }
      async ccipReadFetch(t10, e10, r10) {
        if (this.disableCcipRead || 0 === r10.length || null == t10.to)
          return null;
        let n10 = t10.to.toLowerCase(), i10 = e10.toLowerCase(), s10 = [];
        for (let e11 = 0; e11 < r10.length; e11++) {
          let a2;
          let o2 = r10[e11], l2 = new rj(o2.replace("{sender}", n10).replace("{data}", i10));
          -1 === o2.indexOf("{data}") && (l2.body = { data: i10, sender: n10 }), this.emit("debug", { action: "sendCcipReadFetchRequest", request: l2, index: e11, urls: r10 });
          let u2 = "unknown error";
          try {
            a2 = await l2.send();
          } catch (t11) {
            s10.push(t11.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: l2, result: { error: t11 } });
            continue;
          }
          try {
            let t11 = a2.bodyJson;
            if (t11.data)
              return this.emit("debug", { action: "receiveCcipReadFetchResult", request: l2, result: t11 }), t11.data;
            t11.message && (u2 = t11.message), this.emit("debug", { action: "receiveCcipReadFetchError", request: l2, result: t11 });
          } catch (t11) {
          }
          I(a2.statusCode < 400 || a2.statusCode >= 500, `response not found during CCIP fetch: ${u2}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: t10, info: { url: o2, errorMessage: u2 } }), s10.push(u2);
        }
        I(false, `error encountered during CCIP fetch: ${s10.map((t11) => JSON.stringify(t11)).join(", ")}`, "OFFCHAIN_FAULT", { reason: "500_SERVER_ERROR", transaction: t10, info: { urls: r10, errorMessages: s10 } });
      }
      _wrapBlock(t10, e10) {
        return new r4(function(t11) {
          let e11 = s3(t11);
          return e11.transactions = t11.transactions.map((t12) => "string" == typeof t12 ? t12 : s5(t12)), e11;
        }(t10), this);
      }
      _wrapLog(t10, e10) {
        return new r8(s2(t10), this);
      }
      _wrapTransactionReceipt(t10, e10) {
        return new r5(s8(t10), this);
      }
      _wrapTransactionResponse(t10, e10) {
        return new r6(s5(t10), this);
      }
      _detectNetwork() {
        I(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", { operation: "_detectNetwork" });
      }
      async _perform(t10) {
        I(false, `unsupported method: ${t10.method}`, "UNSUPPORTED_OPERATION", { operation: t10.method, info: t10 });
      }
      async getBlockNumber() {
        let t10 = tt(await this.#tK({ method: "getBlockNumber" }), "%response");
        return this.#tj >= 0 && (this.#tj = t10), t10;
      }
      _getAddress(t10) {
        return rd(t10, this);
      }
      _getBlockTag(t10) {
        if (null == t10)
          return "latest";
        switch (t10) {
          case "earliest":
            return "0x0";
          case "finalized":
          case "latest":
          case "pending":
          case "safe":
            return t10;
        }
        return L(t10) ? L(t10, 32) ? t10 : tn(t10) : ("bigint" == typeof t10 && (t10 = tt(t10, "blockTag")), "number" == typeof t10) ? t10 >= 0 ? tn(t10) : this.#tj >= 0 ? tn(this.#tj + t10) : this.getBlockNumber().then((e10) => tn(e10 + t10)) : void O(false, "invalid blockTag", "blockTag", t10);
      }
      _getFilter(t10) {
        let e10, r10;
        let n10 = (t10.topics || []).map((t11) => null == t11 ? null : Array.isArray(t11) ? ay(t11.map((t12) => t12.toLowerCase())) : t11.toLowerCase()), i10 = "blockHash" in t10 ? t10.blockHash : void 0, s10 = (t11, e11, r11) => {
          let s11;
          switch (t11.length) {
            case 0:
              break;
            case 1:
              s11 = t11[0];
              break;
            default:
              t11.sort(), s11 = t11;
          }
          if (i10 && (null != e11 || null != r11))
            throw Error("invalid filter");
          let a3 = {};
          return s11 && (a3.address = s11), n10.length && (a3.topics = n10), e11 && (a3.fromBlock = e11), r11 && (a3.toBlock = r11), i10 && (a3.blockHash = i10), a3;
        }, a2 = [];
        if (t10.address) {
          if (Array.isArray(t10.address))
            for (let e11 of t10.address)
              a2.push(this._getAddress(e11));
          else
            a2.push(this._getAddress(t10.address));
        }
        return "fromBlock" in t10 && (e10 = this._getBlockTag(t10.fromBlock)), ("toBlock" in t10 && (r10 = this._getBlockTag(t10.toBlock)), a2.filter((t11) => "string" != typeof t11).length || null != e10 && "string" != typeof e10 || null != r10 && "string" != typeof r10) ? Promise.all([Promise.all(a2), e10, r10]).then((t11) => s10(t11[0], t11[1], t11[2])) : s10(a2, e10, r10);
      }
      _getTransactionRequest(t10) {
        let e10 = r3(t10), r10 = [];
        if (["to", "from"].forEach((t11) => {
          if (null == e10[t11])
            return;
          let n10 = rd(e10[t11], this);
          ap(n10) ? r10.push(async function() {
            e10[t11] = await n10;
          }()) : e10[t11] = n10;
        }), null != e10.blockTag) {
          let t11 = this._getBlockTag(e10.blockTag);
          ap(t11) ? r10.push(async function() {
            e10.blockTag = await t11;
          }()) : e10.blockTag = t11;
        }
        return r10.length ? async function() {
          return await Promise.all(r10), e10;
        }() : e10;
      }
      async getNetwork() {
        if (null == this.#tG) {
          let t11 = (async () => {
            try {
              let t12 = await this._detectNetwork();
              return this.emit("network", t12, null), t12;
            } catch (e11) {
              throw this.#tG === t11 && (this.#tG = null), e11;
            }
          })();
          return this.#tG = t11, (await t11).clone();
        }
        let t10 = this.#tG, [e10, r10] = await Promise.all([t10, this._detectNetwork()]);
        return e10.chainId !== r10.chainId && (this.#tH ? (this.emit("network", r10, e10), this.#tG === t10 && (this.#tG = Promise.resolve(r10))) : I(false, `network changed: ${e10.chainId} => ${r10.chainId} `, "NETWORK_ERROR", { event: "changed" })), e10.clone();
      }
      async getFeeData() {
        let t10 = await this.getNetwork(), e10 = async () => {
          let { _block: e11, gasPrice: r11, priorityFee: n10 } = await x({ _block: this.#tq("latest", false), gasPrice: (async () => {
            try {
              let t11 = await this.#tK({ method: "getGasPrice" });
              return _(t11, "%response");
            } catch (t11) {
            }
            return null;
          })(), priorityFee: (async () => {
            try {
              let t11 = await this.#tK({ method: "getPriorityFee" });
              return _(t11, "%response");
            } catch (t11) {
            }
            return null;
          })() }), i10 = null, s10 = null, a2 = this._wrapBlock(e11, t10);
          return a2 && a2.baseFeePerGas && (s10 = null != n10 ? n10 : BigInt("1000000000"), i10 = a2.baseFeePerGas * ad + s10), new r2(r11, i10, s10);
        }, r10 = t10.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
        if (r10) {
          let t11 = new rj(r10.url), n10 = await r10.processFunc(e10, this, t11);
          return new r2(n10.gasPrice, n10.maxFeePerGas, n10.maxPriorityFeePerGas);
        }
        return await e10();
      }
      async estimateGas(t10) {
        let e10 = this._getTransactionRequest(t10);
        return ap(e10) && (e10 = await e10), _(await this.#tK({ method: "estimateGas", transaction: e10 }), "%response");
      }
      async #tZ(t10, e10, r10) {
        I(r10 < 10, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", { reason: "TOO_MANY_REDIRECTS", transaction: Object.assign({}, t10, { blockTag: e10, enableCcipRead: true }) });
        let n10 = r3(t10);
        try {
          return H(await this._perform({ method: "call", transaction: n10, blockTag: e10 }));
        } catch (t11) {
          if (!this.disableCcipRead && B(t11) && t11.data && r10 >= 0 && "latest" === e10 && null != n10.to && "0x556f1830" === V(t11.data, 0, 4)) {
            let i10;
            let s10 = t11.data, a2 = await rd(n10.to, this);
            try {
              i10 = function(t12) {
                let e11 = { sender: "", urls: [], calldata: "", selector: "", extraData: "", errorArgs: [] };
                I(j(t12) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", { reason: "insufficient OffchainLookup data" });
                let r11 = V(t12, 0, 32);
                I(V(r11, 0, 12) === V(aN, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", { reason: "corrupt OffchainLookup sender" }), e11.sender = V(r11, 12);
                try {
                  let r12 = [], n11 = tt(V(t12, 32, 64)), i11 = tt(V(t12, n11, n11 + 32)), s11 = V(t12, n11 + 32);
                  for (let t13 = 0; t13 < i11; t13++) {
                    let e12 = function(t14, e13) {
                      try {
                        let r13 = av(t14, e13);
                        if (r13)
                          return ew(r13);
                      } catch (t15) {
                      }
                      return null;
                    }(s11, 32 * t13);
                    if (null == e12)
                      throw Error("abort");
                    r12.push(e12);
                  }
                  e11.urls = r12;
                } catch (t13) {
                  I(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", { reason: "corrupt OffchainLookup urls" });
                }
                try {
                  let r12 = av(t12, 64);
                  if (null == r12)
                    throw Error("abort");
                  e11.calldata = r12;
                } catch (t13) {
                  I(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", { reason: "corrupt OffchainLookup calldata" });
                }
                I(V(t12, 100, 128) === V(aN, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", { reason: "corrupt OffchainLookup callbaackSelector" }), e11.selector = V(t12, 96, 100);
                try {
                  let r12 = av(t12, 128);
                  if (null == r12)
                    throw Error("abort");
                  e11.extraData = r12;
                } catch (t13) {
                  I(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", { reason: "corrupt OffchainLookup extraData" });
                }
                return e11.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((t13) => e11[t13]), e11;
              }(V(t11.data, 4));
            } catch (t12) {
              I(false, t12.message, "OFFCHAIN_FAULT", { reason: "BAD_DATA", transaction: n10, info: { data: s10 } });
            }
            I(i10.sender.toLowerCase() === a2.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", { action: "call", data: s10, reason: "OffchainLookup", transaction: n10, invocation: null, revert: { signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)", name: "OffchainLookup", args: i10.errorArgs } });
            let o2 = await this.ccipReadFetch(n10, i10.calldata, i10.urls);
            I(null != o2, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", { reason: "FETCH_FAILED", transaction: n10, info: { data: t11.data, errorArgs: i10.errorArgs } });
            let l2 = { to: a2, data: Q([i10.selector, function(t12) {
              let e11 = [], r11 = 0;
              for (let n11 = 0; n11 < t12.length; n11++)
                e11.push(aP), r11 += 32;
              for (let n11 = 0; n11 < t12.length; n11++) {
                let i11 = F(t12[n11]);
                e11[n11] = ax(r11), e11.push(ax(i11.length)), e11.push(function(t13) {
                  if (t13.length % 32 == 0)
                    return t13;
                  let e12 = new Uint8Array(32 * Math.ceil(t13.length / 32));
                  return e12.set(t13), e12;
                }(i11)), r11 += 32 + 32 * Math.ceil(i11.length / 32);
              }
              return Q(e11);
            }([o2, i10.extraData])]) };
            this.emit("debug", { action: "sendCcipReadCall", transaction: l2 });
            try {
              let t12 = await this.#tZ(l2, e10, r10 + 1);
              return this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, l2), result: t12 }), t12;
            } catch (t12) {
              throw this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, l2), error: t12 }), t12;
            }
          }
          throw t11;
        }
      }
      async #tY(t10) {
        let { value: e10 } = await x({ network: this.getNetwork(), value: t10 });
        return e10;
      }
      async call(t10) {
        let { tx: e10, blockTag: r10 } = await x({ tx: this._getTransactionRequest(t10), blockTag: this._getBlockTag(t10.blockTag) });
        return await this.#tY(this.#tZ(e10, r10, t10.enableCcipRead ? 0 : -1));
      }
      async #t_(t10, e10, r10) {
        let n10 = this._getAddress(e10), i10 = this._getBlockTag(r10);
        return ("string" != typeof n10 || "string" != typeof i10) && ([n10, i10] = await Promise.all([n10, i10])), await this.#tY(this.#tK(Object.assign(t10, { address: n10, blockTag: i10 })));
      }
      async getBalance(t10, e10) {
        return _(await this.#t_({ method: "getBalance" }, t10, e10), "%response");
      }
      async getTransactionCount(t10, e10) {
        return tt(await this.#t_({ method: "getTransactionCount" }, t10, e10), "%response");
      }
      async getCode(t10, e10) {
        return H(await this.#t_({ method: "getCode" }, t10, e10));
      }
      async getStorage(t10, e10, r10) {
        let n10 = _(e10, "position");
        return H(await this.#t_({ method: "getStorage", position: n10 }, t10, r10));
      }
      async broadcastTransaction(t10) {
        let { blockNumber: e10, hash: r10, network: n10 } = await x({ blockNumber: this.getBlockNumber(), hash: this._perform({ method: "broadcastTransaction", signedTransaction: t10 }), network: this.getNetwork() }), i10 = sj.from(t10);
        if (i10.hash !== r10)
          throw Error("@TODO: the returned hash did not match");
        return this._wrapTransactionResponse(i10, n10).replaceableTransaction(e10);
      }
      async #tq(t10, e10) {
        if (L(t10, 32))
          return await this.#tK({ method: "getBlock", blockHash: t10, includeTransactions: e10 });
        let r10 = this._getBlockTag(t10);
        return "string" != typeof r10 && (r10 = await r10), await this.#tK({ method: "getBlock", blockTag: r10, includeTransactions: e10 });
      }
      async getBlock(t10, e10) {
        let { network: r10, params: n10 } = await x({ network: this.getNetwork(), params: this.#tq(t10, !!e10) });
        return null == n10 ? null : this._wrapBlock(n10, r10);
      }
      async getTransaction(t10) {
        let { network: e10, params: r10 } = await x({ network: this.getNetwork(), params: this.#tK({ method: "getTransaction", hash: t10 }) });
        return null == r10 ? null : this._wrapTransactionResponse(r10, e10);
      }
      async getTransactionReceipt(t10) {
        let { network: e10, params: r10 } = await x({ network: this.getNetwork(), params: this.#tK({ method: "getTransactionReceipt", hash: t10 }) });
        if (null == r10)
          return null;
        if (null == r10.gasPrice && null == r10.effectiveGasPrice) {
          let e11 = await this.#tK({ method: "getTransaction", hash: t10 });
          if (null == e11)
            throw Error("report this; could not find tx or effectiveGasPrice");
          r10.effectiveGasPrice = e11.gasPrice;
        }
        return this._wrapTransactionReceipt(r10, e10);
      }
      async getTransactionResult(t10) {
        let { result: e10 } = await x({ network: this.getNetwork(), result: this.#tK({ method: "getTransactionResult", hash: t10 }) });
        return null == e10 ? null : H(e10);
      }
      async getLogs(t10) {
        let e10 = this._getFilter(t10);
        ap(e10) && (e10 = await e10);
        let { network: r10, params: n10 } = await x({ network: this.getNetwork(), params: this.#tK({ method: "getLogs", filter: e10 }) });
        return n10.map((t11) => this._wrapLog(t11, r10));
      }
      _getProvider(t10) {
        I(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", { operation: "_getProvider()" });
      }
      async getResolver(t10) {
        return await sY.fromName(this, t10);
      }
      async getAvatar(t10) {
        let e10 = await this.getResolver(t10);
        return e10 ? await e10.getAvatar() : null;
      }
      async resolveName(t10) {
        let e10 = await this.getResolver(t10);
        return e10 ? await e10.getAddress() : null;
      }
      async lookupAddress(t10) {
        let e10 = n6((t10 = t5(t10)).substring(2).toLowerCase() + ".addr.reverse");
        try {
          let r10 = await sY.getEnsAddress(this), n10 = new nO(r10, ["function resolver(bytes32) view returns (address)"], this), i10 = await n10.resolver(e10);
          if (null == i10 || i10 === rz)
            return null;
          let s10 = new nO(i10, ["function name(bytes32) view returns (string)"], this), a2 = await s10.name(e10);
          if (await this.resolveName(a2) !== t10)
            return null;
          return a2;
        } catch (t11) {
          if (k(t11, "BAD_DATA") && "0x" === t11.value || k(t11, "CALL_EXCEPTION"))
            return null;
          throw t11;
        }
        return null;
      }
      async waitForTransaction(t10, e10, r10) {
        let n10 = null != e10 ? e10 : 1;
        return 0 === n10 ? this.getTransactionReceipt(t10) : new Promise(async (e11, i10) => {
          let s10 = null, a2 = async (r11) => {
            try {
              let i11 = await this.getTransactionReceipt(t10);
              if (null != i11 && r11 - i11.blockNumber + 1 >= n10) {
                e11(i11), s10 && (clearTimeout(s10), s10 = null);
                return;
              }
            } catch (t11) {
              console.log("EEE", t11);
            }
            this.once("block", a2);
          };
          null != r10 && (s10 = setTimeout(() => {
            null != s10 && (s10 = null, this.off("block", a2), i10(C("timeout", "TIMEOUT", { reason: "timeout" })));
          }, r10)), a2(await this.getBlockNumber());
        });
      }
      async waitForBlock(t10) {
        I(false, "not implemented yet", "NOT_IMPLEMENTED", { operation: "waitForBlock" });
      }
      _clearTimeout(t10) {
        let e10 = this.#tJ.get(t10);
        e10 && (e10.timer && clearTimeout(e10.timer), this.#tJ.delete(t10));
      }
      _setTimeout(t10, e10) {
        null == e10 && (e10 = 0);
        let r10 = this.#tV++, n10 = () => {
          this.#tJ.delete(r10), t10();
        };
        if (this.paused)
          this.#tJ.set(r10, { timer: null, func: n10, time: e10 });
        else {
          let t11 = setTimeout(n10, e10);
          this.#tJ.set(r10, { timer: t11, func: n10, time: ab() });
        }
        return r10;
      }
      _forEachSubscriber(t10) {
        for (let e10 of this.#tD.values())
          t10(e10.subscriber);
      }
      _getSubscriber(t10) {
        switch (t10.type) {
          case "debug":
          case "error":
          case "network":
            return new am(t10.type);
          case "block": {
            let t11 = new ao(this);
            return t11.pollingInterval = this.pollingInterval, t11;
          }
          case "safe":
          case "finalized":
            return new au(this, t10.type);
          case "event":
            return new af(this, t10.filter);
          case "transaction":
            return new ah(this, t10.hash);
          case "orphan":
            return new ac(this, t10.filter);
        }
        throw Error(`unsupported event: ${t10.type}`);
      }
      _recoverSubscriber(t10, e10) {
        for (let r10 of this.#tD.values())
          if (r10.subscriber === t10) {
            r10.started && r10.subscriber.stop(), r10.subscriber = e10, r10.started && e10.start(), null != this.#tL && e10.pause(this.#tL);
            break;
          }
      }
      async #tW(t10, e10) {
        let r10 = await aA(t10, this);
        return "event" === r10.type && e10 && e10.length > 0 && true === e10[0].removed && (r10 = await aA({ orphan: "drop-log", log: e10[0] }, this)), this.#tD.get(r10.tag) || null;
      }
      async #tX(t10) {
        let e10 = await aA(t10, this), r10 = e10.tag, n10 = this.#tD.get(r10);
        return !n10 && (n10 = { subscriber: this._getSubscriber(e10), tag: r10, addressableMap: /* @__PURE__ */ new WeakMap(), nameMap: /* @__PURE__ */ new Map(), started: false, listeners: [] }, this.#tD.set(r10, n10)), n10;
      }
      async on(t10, e10) {
        let r10 = await this.#tX(t10);
        return r10.listeners.push({ listener: e10, once: false }), r10.started || (r10.subscriber.start(), r10.started = true, null != this.#tL && r10.subscriber.pause(this.#tL)), this;
      }
      async once(t10, e10) {
        let r10 = await this.#tX(t10);
        return r10.listeners.push({ listener: e10, once: true }), r10.started || (r10.subscriber.start(), r10.started = true, null != this.#tL && r10.subscriber.pause(this.#tL)), this;
      }
      async emit(t10, ...e10) {
        let r10 = await this.#tW(t10, e10);
        if (!r10 || 0 === r10.listeners.length)
          return false;
        let n10 = r10.listeners.length;
        return r10.listeners = r10.listeners.filter(({ listener: r11, once: n11 }) => {
          let i10 = new nt(this, n11 ? null : r11, t10);
          try {
            r11.call(this, ...e10, i10);
          } catch (t11) {
          }
          return !n11;
        }), 0 === r10.listeners.length && (r10.started && r10.subscriber.stop(), this.#tD.delete(r10.tag)), n10 > 0;
      }
      async listenerCount(t10) {
        if (t10) {
          let e11 = await this.#tW(t10);
          return e11 ? e11.listeners.length : 0;
        }
        let e10 = 0;
        for (let { listeners: t11 } of this.#tD.values())
          e10 += t11.length;
        return e10;
      }
      async listeners(t10) {
        if (t10) {
          let e11 = await this.#tW(t10);
          return e11 ? e11.listeners.map(({ listener: t11 }) => t11) : [];
        }
        let e10 = [];
        for (let { listeners: t11 } of this.#tD.values())
          e10 = e10.concat(t11.map(({ listener: t12 }) => t12));
        return e10;
      }
      async off(t10, e10) {
        let r10 = await this.#tW(t10);
        if (!r10)
          return this;
        if (e10) {
          let t11 = r10.listeners.map(({ listener: t12 }) => t12).indexOf(e10);
          t11 >= 0 && r10.listeners.splice(t11, 1);
        }
        return e10 && 0 !== r10.listeners.length || (r10.started && r10.subscriber.stop(), this.#tD.delete(r10.tag)), this;
      }
      async removeAllListeners(t10) {
        if (t10) {
          let { tag: e10, started: r10, subscriber: n10 } = await this.#tX(t10);
          r10 && n10.stop(), this.#tD.delete(e10);
        } else
          for (let [t11, { started: e10, subscriber: r10 }] of this.#tD)
            e10 && r10.stop(), this.#tD.delete(t11);
        return this;
      }
      async addListener(t10, e10) {
        return await this.on(t10, e10);
      }
      async removeListener(t10, e10) {
        return this.off(t10, e10);
      }
      get destroyed() {
        return this.#tM;
      }
      destroy() {
        for (let t10 of (this.removeAllListeners(), this.#tJ.keys()))
          this._clearTimeout(t10);
        this.#tM = true;
      }
      get paused() {
        return null != this.#tL;
      }
      set paused(t10) {
        !!t10 !== this.paused && (this.paused ? this.resume() : this.pause(false));
      }
      pause(t10) {
        if (this.#tj = -1, null != this.#tL) {
          if (!!t10 == this.#tL)
            return;
          I(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", { operation: "pause" });
        }
        for (let e10 of (this._forEachSubscriber((e11) => e11.pause(t10)), this.#tL = !!t10, this.#tJ.values()))
          e10.timer && clearTimeout(e10.timer), e10.time = ab() - e10.time;
      }
      resume() {
        if (null != this.#tL)
          for (let t10 of (this._forEachSubscriber((t11) => t11.resume()), this.#tL = null, this.#tJ.values())) {
            let e10 = t10.time;
            e10 < 0 && (e10 = 0), t10.time = ab(), setTimeout(t10.func, e10);
          }
      }
    }
    function av(t10, e10) {
      if ("0x" === t10)
        return null;
      try {
        let r10 = tt(V(t10, e10, e10 + 32)), n10 = tt(V(t10, r10, r10 + 32));
        return V(t10, r10 + 32, r10 + 32 + n10);
      } catch (t11) {
      }
      return null;
    }
    function ax(t10) {
      let e10 = tr(t10);
      if (e10.length > 32)
        throw Error("internal; should not happen");
      let r10 = new Uint8Array(32);
      return r10.set(e10, 32 - e10.length), r10;
    }
    let aP = new Uint8Array([]), aN = "0x0000000000000000000000000000000000000000000000000000000000000000";
    function ak(t10, e10) {
      if (t10.provider)
        return t10.provider;
      I(false, "missing provider", "UNSUPPORTED_OPERATION", { operation: e10 });
    }
    async function aB(t10, e10) {
      let r10 = r3(e10);
      if (null != r10.to && (r10.to = rd(r10.to, t10)), null != r10.from) {
        let e11 = r10.from;
        r10.from = Promise.all([t10.getAddress(), rd(e11, t10)]).then(([t11, e12]) => (O(t11.toLowerCase() === e12.toLowerCase(), "transaction from mismatch", "tx.from", e12), t11));
      } else
        r10.from = t10.getAddress();
      return await x(r10);
    }
    class aC {
      provider;
      constructor(t10) {
        P(this, { provider: t10 || null });
      }
      async getNonce(t10) {
        return ak(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t10);
      }
      async populateCall(t10) {
        return await aB(this, t10);
      }
      async populateTransaction(t10) {
        let e10 = ak(this, "populateTransaction"), r10 = await aB(this, t10);
        null == r10.nonce && (r10.nonce = await this.getNonce("pending")), null == r10.gasLimit && (r10.gasLimit = await this.estimateGas(r10));
        let n10 = await this.provider.getNetwork();
        null != r10.chainId ? O(_(r10.chainId) === n10.chainId, "transaction chainId mismatch", "tx.chainId", t10.chainId) : r10.chainId = n10.chainId;
        let i10 = null != r10.maxFeePerGas || null != r10.maxPriorityFeePerGas;
        if (null != r10.gasPrice && (2 === r10.type || i10) ? O(false, "eip-1559 transaction do not support gasPrice", "tx", t10) : (0 === r10.type || 1 === r10.type) && i10 && O(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t10), (2 === r10.type || null == r10.type) && null != r10.maxFeePerGas && null != r10.maxPriorityFeePerGas)
          r10.type = 2;
        else if (0 === r10.type || 1 === r10.type) {
          let t11 = await e10.getFeeData();
          I(null != t11.gasPrice, "network does not support gasPrice", "UNSUPPORTED_OPERATION", { operation: "getGasPrice" }), null == r10.gasPrice && (r10.gasPrice = t11.gasPrice);
        } else {
          let t11 = await e10.getFeeData();
          if (null == r10.type) {
            if (null != t11.maxFeePerGas && null != t11.maxPriorityFeePerGas) {
              if (r10.type = 2, null != r10.gasPrice) {
                let t12 = r10.gasPrice;
                delete r10.gasPrice, r10.maxFeePerGas = t12, r10.maxPriorityFeePerGas = t12;
              } else
                null == r10.maxFeePerGas && (r10.maxFeePerGas = t11.maxFeePerGas), null == r10.maxPriorityFeePerGas && (r10.maxPriorityFeePerGas = t11.maxPriorityFeePerGas);
            } else
              null != t11.gasPrice ? (I(!i10, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", { operation: "populateTransaction" }), null == r10.gasPrice && (r10.gasPrice = t11.gasPrice), r10.type = 0) : I(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", { operation: "signer.getFeeData" });
          } else
            (2 === r10.type || 3 === r10.type) && (null == r10.maxFeePerGas && (r10.maxFeePerGas = t11.maxFeePerGas), null == r10.maxPriorityFeePerGas && (r10.maxPriorityFeePerGas = t11.maxPriorityFeePerGas));
        }
        return await x(r10);
      }
      async estimateGas(t10) {
        return ak(this, "estimateGas").estimateGas(await this.populateCall(t10));
      }
      async call(t10) {
        return ak(this, "call").call(await this.populateCall(t10));
      }
      async resolveName(t10) {
        let e10 = ak(this, "resolveName");
        return await e10.resolveName(t10);
      }
      async sendTransaction(t10) {
        let e10 = ak(this, "sendTransaction"), r10 = await this.populateTransaction(t10);
        delete r10.from;
        let n10 = sj.from(r10);
        return await e10.broadcastTransaction(await this.signTransaction(n10));
      }
    }
    class aI {
      #tB;
      #t$;
      #tC;
      #tT;
      #t0;
      #t1;
      constructor(t10) {
        this.#tB = t10, this.#t$ = null, this.#tC = this.#tR.bind(this), this.#tT = false, this.#t0 = null, this.#t1 = false;
      }
      _subscribe(t10) {
        throw Error("subclasses must override this");
      }
      _emitResults(t10, e10) {
        throw Error("subclasses must override this");
      }
      _recover(t10) {
        throw Error("subclasses must override this");
      }
      async #tR(t10) {
        try {
          null == this.#t$ && (this.#t$ = this._subscribe(this.#tB));
          let t11 = null;
          try {
            t11 = await this.#t$;
          } catch (t12) {
            if (!k(t12, "UNSUPPORTED_OPERATION") || "eth_newFilter" !== t12.operation)
              throw t12;
          }
          if (null == t11) {
            this.#t$ = null, this.#tB._recoverSubscriber(this, this._recover(this.#tB));
            return;
          }
          let e10 = await this.#tB.getNetwork();
          if (this.#t0 || (this.#t0 = e10), this.#t0.chainId !== e10.chainId)
            throw Error("chaid changed");
          if (this.#t1)
            return;
          let r10 = await this.#tB.send("eth_getFilterChanges", [t11]);
          await this._emitResults(this.#tB, r10);
        } catch (t11) {
          console.log("@TODO", t11);
        }
        this.#tB.once("block", this.#tC);
      }
      #t2() {
        let t10 = this.#t$;
        t10 && (this.#t$ = null, t10.then((t11) => {
          this.#tB.destroyed || this.#tB.send("eth_uninstallFilter", [t11]);
        }));
      }
      start() {
        this.#tT || (this.#tT = true, this.#tR(-2));
      }
      stop() {
        this.#tT && (this.#tT = false, this.#t1 = true, this.#t2(), this.#tB.off("block", this.#tC));
      }
      pause(t10) {
        t10 && this.#t2(), this.#tB.off("block", this.#tC);
      }
      resume() {
        this.start();
      }
    }
    class aO extends aI {
      #t3;
      constructor(t10, e10) {
        super(t10), this.#t3 = JSON.parse(JSON.stringify(e10));
      }
      _recover(t10) {
        return new af(t10, this.#t3);
      }
      async _subscribe(t10) {
        return await t10.send("eth_newFilter", [this.#t3]);
      }
      async _emitResults(t10, e10) {
        for (let r10 of e10)
          t10.emit(this.#t3, t10._wrapLog(r10, t10._network));
      }
    }
    class aR extends aI {
      async _subscribe(t10) {
        return await t10.send("eth_newPendingTransactionFilter", []);
      }
      async _emitResults(t10, e10) {
        for (let r10 of e10)
          t10.emit("pending", r10);
      }
    }
    let aT = "bigint,boolean,function,number,string,symbol".split(/,/g);
    function aS(t10) {
      if (null == t10 || aT.indexOf(typeof t10) >= 0 || "function" == typeof t10.getAddress)
        return t10;
      if (Array.isArray(t10))
        return t10.map(aS);
      if ("object" == typeof t10)
        return Object.keys(t10).reduce((e10, r10) => (e10[r10] = t10[r10], e10), {});
      throw Error(`should not happen: ${t10} (${typeof t10})`);
    }
    function aU(t10) {
      return t10 ? t10.toLowerCase() : t10;
    }
    function aF(t10) {
      return t10 && "number" == typeof t10.pollingInterval;
    }
    let aD = { polling: false, staticNetwork: null, batchStallTime: 10, batchMaxSize: 1048576, batchMaxCount: 100, cacheTimeout: 250, pollingInterval: 4e3 };
    class aL extends aC {
      address;
      constructor(t10, e10) {
        super(t10), P(this, { address: e10 = t5(e10) });
      }
      connect(t10) {
        I(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", { operation: "signer.connect" });
      }
      async getAddress() {
        return this.address;
      }
      async populateTransaction(t10) {
        return await this.populateCall(t10);
      }
      async sendUncheckedTransaction(t10) {
        let e10 = aS(t10), r10 = [];
        if (e10.from) {
          let n11 = e10.from;
          r10.push((async () => {
            let r11 = await rd(n11, this.provider);
            O(null != r11 && r11.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t10), e10.from = r11;
          })());
        } else
          e10.from = this.address;
        if (null == e10.gasLimit && r10.push((async () => {
          e10.gasLimit = await this.provider.estimateGas({ ...e10, from: this.address });
        })()), null != e10.to) {
          let t11 = e10.to;
          r10.push((async () => {
            e10.to = await rd(t11, this.provider);
          })());
        }
        r10.length && await Promise.all(r10);
        let n10 = this.provider.getRpcTransaction(e10);
        return this.provider.send("eth_sendTransaction", [n10]);
      }
      async sendTransaction(t10) {
        let e10 = await this.provider.getBlockNumber(), r10 = await this.sendUncheckedTransaction(t10);
        return await new Promise((t11, n10) => {
          let i10 = [1e3, 100], s10 = 0, a2 = async () => {
            try {
              let n11 = await this.provider.getTransaction(r10);
              if (null != n11) {
                t11(n11.replaceableTransaction(e10));
                return;
              }
            } catch (t12) {
              if (k(t12, "CANCELLED") || k(t12, "BAD_DATA") || k(t12, "NETWORK_ERROR") || k(t12, "UNSUPPORTED_OPERATION")) {
                null == t12.info && (t12.info = {}), t12.info.sendTransactionHash = r10, n10(t12);
                return;
              }
              if (k(t12, "INVALID_ARGUMENT") && (s10++, null == t12.info && (t12.info = {}), t12.info.sendTransactionHash = r10, s10 > 10)) {
                n10(t12);
                return;
              }
              this.provider.emit("error", C("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", { error: t12 }));
            }
            this.provider._setTimeout(() => {
              a2();
            }, i10.pop() || 4e3);
          };
          a2();
        });
      }
      async signTransaction(t10) {
        let e10 = aS(t10);
        if (e10.from) {
          let r11 = await rd(e10.from, this.provider);
          O(null != r11 && r11.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t10), e10.from = r11;
        } else
          e10.from = this.address;
        let r10 = this.provider.getRpcTransaction(e10);
        return await this.provider.send("eth_signTransaction", [r10]);
      }
      async signMessage(t10) {
        let e10 = "string" == typeof t10 ? eb(t10) : t10;
        return await this.provider.send("personal_sign", [H(e10), this.address.toLowerCase()]);
      }
      async signTypedData(t10, e10, r10) {
        let n10 = aS(r10), i10 = await rC.resolveNames(t10, e10, n10, async (t11) => {
          let e11 = await rd(t11);
          return O(null != e11, "TypedData does not support null address", "value", t11), e11;
        });
        return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(rC.getPayload(i10.domain, e10, i10.value))]);
      }
      async unlock(t10) {
        return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), t10, null]);
      }
      async _legacySignMessage(t10) {
        let e10 = "string" == typeof t10 ? eb(t10) : t10;
        return await this.provider.send("eth_sign", [this.address.toLowerCase(), H(e10)]);
      }
    }
    class aM extends aE {
      #c;
      #t4;
      #t8;
      #t5;
      #t6;
      #t0;
      #t9;
      #t7() {
        if (this.#t5)
          return;
        let t10 = 1 === this._getOption("batchMaxCount") ? 0 : this._getOption("batchStallTime");
        this.#t5 = setTimeout(() => {
          this.#t5 = null;
          let t11 = this.#t8;
          for (this.#t8 = []; t11.length; ) {
            let e10 = [t11.shift()];
            for (; t11.length && e10.length !== this.#c.batchMaxCount; )
              if (e10.push(t11.shift()), JSON.stringify(e10.map((t12) => t12.payload)).length > this.#c.batchMaxSize) {
                t11.unshift(e10.pop());
                break;
              }
            (async () => {
              let t12 = 1 === e10.length ? e10[0].payload : e10.map((t13) => t13.payload);
              this.emit("debug", { action: "sendRpcPayload", payload: t12 });
              try {
                let r10 = await this._send(t12);
                for (let { resolve: t13, reject: n10, payload: i10 } of (this.emit("debug", { action: "receiveRpcResult", result: r10 }), e10)) {
                  if (this.destroyed) {
                    n10(C("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: i10.method }));
                    continue;
                  }
                  let e11 = r10.filter((t14) => t14.id === i10.id)[0];
                  if (null == e11) {
                    let t14 = C("missing response for request", "BAD_DATA", { value: r10, info: { payload: i10 } });
                    this.emit("error", t14), n10(t14);
                    continue;
                  }
                  if ("error" in e11) {
                    n10(this.getRpcError(i10, e11));
                    continue;
                  }
                  t13(e11.result);
                }
              } catch (t13) {
                for (let { reject: r10 } of (this.emit("debug", { action: "receiveRpcError", error: t13 }), e10))
                  r10(t13);
              }
            })();
          }
        }, t10);
      }
      constructor(t10, e10) {
        super(t10, e10), this.#t4 = 1, this.#c = Object.assign({}, aD, e10 || {}), this.#t8 = [], this.#t5 = null, this.#t0 = null, this.#t9 = null;
        {
          let t11 = null, e11 = new Promise((e12) => {
            t11 = e12;
          });
          this.#t6 = { promise: e11, resolve: t11 };
        }
        let r10 = this._getOption("staticNetwork");
        "boolean" == typeof r10 ? (O(!r10 || "any" !== t10, "staticNetwork cannot be used on special network 'any'", "options", e10), r10 && null != t10 && (this.#t0 = ar.from(t10))) : r10 && (O(null == t10 || r10.matches(t10), "staticNetwork MUST match network object", "options", e10), this.#t0 = r10);
      }
      _getOption(t10) {
        return this.#c[t10];
      }
      get _network() {
        return I(this.#t0, "network is not available yet", "NETWORK_ERROR"), this.#t0;
      }
      async _perform(t10) {
        if ("call" === t10.method || "estimateGas" === t10.method) {
          let e11 = t10.transaction;
          if (e11 && null != e11.type && _(e11.type) && null == e11.maxFeePerGas && null == e11.maxPriorityFeePerGas) {
            let r10 = await this.getFeeData();
            null == r10.maxFeePerGas && null == r10.maxPriorityFeePerGas && (t10 = Object.assign({}, t10, { transaction: Object.assign({}, e11, { type: void 0 }) }));
          }
        }
        let e10 = this.getRpcRequest(t10);
        return null != e10 ? await this.send(e10.method, e10.args) : super._perform(t10);
      }
      async _detectNetwork() {
        let t10 = this._getOption("staticNetwork");
        if (t10) {
          if (true !== t10)
            return t10;
          if (this.#t0)
            return this.#t0;
        }
        return this.#t9 || (this.ready ? this.#t9 = (async () => {
          try {
            let t11 = ar.from(_(await this.send("eth_chainId", [])));
            return this.#t9 = null, t11;
          } catch (t11) {
            throw this.#t9 = null, t11;
          }
        })() : this.#t9 = (async () => {
          let t11;
          let e10 = { id: this.#t4++, method: "eth_chainId", params: [], jsonrpc: "2.0" };
          this.emit("debug", { action: "sendRpcPayload", payload: e10 });
          try {
            t11 = (await this._send(e10))[0], this.#t9 = null;
          } catch (t12) {
            throw this.#t9 = null, this.emit("debug", { action: "receiveRpcError", error: t12 }), t12;
          }
          if (this.emit("debug", { action: "receiveRpcResult", result: t11 }), "result" in t11)
            return ar.from(_(t11.result));
          throw this.getRpcError(e10, t11);
        })()), await this.#t9;
      }
      _start() {
        null != this.#t6 && null != this.#t6.resolve && (this.#t6.resolve(), this.#t6 = null, (async () => {
          for (; null == this.#t0 && !this.destroyed; )
            try {
              this.#t0 = await this._detectNetwork();
            } catch (t10) {
              if (this.destroyed)
                break;
              console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", C("failed to bootstrap network detection", "NETWORK_ERROR", { event: "initial-network-discovery", info: { error: t10 } })), await new Promise((t11) => {
                setTimeout(t11, 1e3);
              });
            }
          this.#t7();
        })());
      }
      async _waitUntilReady() {
        if (null != this.#t6)
          return await this.#t6.promise;
      }
      _getSubscriber(t10) {
        return "pending" === t10.type ? new aR(this) : "event" === t10.type ? this._getOption("polling") ? new af(this, t10.filter) : new aO(this, t10.filter) : "orphan" === t10.type && "drop-log" === t10.filter.orphan ? new am("orphan") : super._getSubscriber(t10);
      }
      get ready() {
        return null == this.#t6;
      }
      getRpcTransaction(t10) {
        let e10 = {};
        return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((r10) => {
          if (null == t10[r10])
            return;
          let n10 = r10;
          "gasLimit" === r10 && (n10 = "gas"), e10[n10] = tn(_(t10[r10], `tx.${r10}`));
        }), ["from", "to", "data"].forEach((r10) => {
          null != t10[r10] && (e10[r10] = H(t10[r10]));
        }), t10.accessList && (e10.accessList = rO(t10.accessList)), t10.blobVersionedHashes && (e10.blobVersionedHashes = t10.blobVersionedHashes.map((t11) => t11.toLowerCase())), e10;
      }
      getRpcRequest(t10) {
        switch (t10.method) {
          case "chainId":
            return { method: "eth_chainId", args: [] };
          case "getBlockNumber":
            return { method: "eth_blockNumber", args: [] };
          case "getGasPrice":
            return { method: "eth_gasPrice", args: [] };
          case "getPriorityFee":
            return { method: "eth_maxPriorityFeePerGas", args: [] };
          case "getBalance":
            return { method: "eth_getBalance", args: [aU(t10.address), t10.blockTag] };
          case "getTransactionCount":
            return { method: "eth_getTransactionCount", args: [aU(t10.address), t10.blockTag] };
          case "getCode":
            return { method: "eth_getCode", args: [aU(t10.address), t10.blockTag] };
          case "getStorage":
            return { method: "eth_getStorageAt", args: [aU(t10.address), "0x" + t10.position.toString(16), t10.blockTag] };
          case "broadcastTransaction":
            return { method: "eth_sendRawTransaction", args: [t10.signedTransaction] };
          case "getBlock":
            if ("blockTag" in t10)
              return { method: "eth_getBlockByNumber", args: [t10.blockTag, !!t10.includeTransactions] };
            if ("blockHash" in t10)
              return { method: "eth_getBlockByHash", args: [t10.blockHash, !!t10.includeTransactions] };
            break;
          case "getTransaction":
            return { method: "eth_getTransactionByHash", args: [t10.hash] };
          case "getTransactionReceipt":
            return { method: "eth_getTransactionReceipt", args: [t10.hash] };
          case "call":
            return { method: "eth_call", args: [this.getRpcTransaction(t10.transaction), t10.blockTag] };
          case "estimateGas":
            return { method: "eth_estimateGas", args: [this.getRpcTransaction(t10.transaction)] };
          case "getLogs":
            return t10.filter && null != t10.filter.address && (Array.isArray(t10.filter.address) ? t10.filter.address = t10.filter.address.map(aU) : t10.filter.address = aU(t10.filter.address)), { method: "eth_getLogs", args: [t10.filter] };
        }
        return null;
      }
      getRpcError(t10, e10) {
        let { method: r10 } = t10, { error: n10 } = e10;
        if ("eth_estimateGas" === r10 && n10.message) {
          let e11 = n10.message;
          if (!e11.match(/revert/i) && e11.match(/insufficient funds/i))
            return C("insufficient funds", "INSUFFICIENT_FUNDS", { transaction: t10.params[0], info: { payload: t10, error: n10 } });
        }
        if ("eth_call" === r10 || "eth_estimateGas" === r10) {
          let e11 = function t11(e12) {
            if (null == e12)
              return null;
            if ("string" == typeof e12.message && e12.message.match(/revert/i) && L(e12.data))
              return { message: e12.message, data: e12.data };
            if ("object" == typeof e12) {
              for (let r11 in e12) {
                let n11 = t11(e12[r11]);
                if (n11)
                  return n11;
              }
              return null;
            }
            if ("string" == typeof e12)
              try {
                return t11(JSON.parse(e12));
              } catch (t12) {
              }
            return null;
          }(n10), i11 = rc.getBuiltinCallException("eth_call" === r10 ? "call" : "estimateGas", t10.params[0], e11 ? e11.data : null);
          return i11.info = { error: n10, payload: t10 }, i11;
        }
        let i10 = JSON.stringify(function(t11) {
          let e11 = [];
          return !function t12(e12, r11) {
            if (null != e12) {
              if ("string" == typeof e12.message && r11.push(e12.message), "object" == typeof e12)
                for (let n11 in e12)
                  t12(e12[n11], r11);
              if ("string" == typeof e12)
                try {
                  return t12(JSON.parse(e12), r11);
                } catch (t13) {
                }
            }
          }(t11, e11), e11;
        }(n10));
        if ("string" == typeof n10.message && n10.message.match(/user denied|ethers-user-denied/i))
          return C("user rejected action", "ACTION_REJECTED", { action: { eth_sign: "signMessage", personal_sign: "signMessage", eth_signTypedData_v4: "signTypedData", eth_signTransaction: "signTransaction", eth_sendTransaction: "sendTransaction", eth_requestAccounts: "requestAccess", wallet_requestAccounts: "requestAccess" }[r10] || "unknown", reason: "rejected", info: { payload: t10, error: n10 } });
        if ("eth_sendRawTransaction" === r10 || "eth_sendTransaction" === r10) {
          let e11 = t10.params[0];
          if (i10.match(/insufficient funds|base fee exceeds gas limit/i))
            return C("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", { transaction: e11, info: { error: n10 } });
          if (i10.match(/nonce/i) && i10.match(/too low/i))
            return C("nonce has already been used", "NONCE_EXPIRED", { transaction: e11, info: { error: n10 } });
          if (i10.match(/replacement transaction/i) && i10.match(/underpriced/i))
            return C("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction: e11, info: { error: n10 } });
          if (i10.match(/only replay-protected/i))
            return C("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", { operation: r10, info: { transaction: e11, info: { error: n10 } } });
        }
        let s10 = !!i10.match(/the method .* does not exist/i);
        return (!s10 && n10 && n10.details && n10.details.startsWith("Unauthorized method:") && (s10 = true), s10) ? C("unsupported operation", "UNSUPPORTED_OPERATION", { operation: t10.method, info: { error: n10, payload: t10 } }) : C("could not coalesce error", "UNKNOWN_ERROR", { error: n10, payload: t10 });
      }
      send(t10, e10) {
        if (this.destroyed)
          return Promise.reject(C("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t10 }));
        let r10 = this.#t4++, n10 = new Promise((n11, i10) => {
          this.#t8.push({ resolve: n11, reject: i10, payload: { method: t10, params: e10, id: r10, jsonrpc: "2.0" } });
        });
        return this.#t7(), n10;
      }
      async getSigner(t10) {
        null == t10 && (t10 = 0);
        let e10 = this.send("eth_accounts", []);
        if ("number" == typeof t10) {
          let r11 = await e10;
          if (t10 >= r11.length)
            throw Error("no such account");
          return new aL(this, r11[t10]);
        }
        let { accounts: r10 } = await x({ network: this.getNetwork(), accounts: e10 });
        for (let e11 of (t10 = t5(t10), r10))
          if (t5(e11) === t10)
            return new aL(this, t10);
        throw Error("invalid account");
      }
      async listAccounts() {
        return (await this.send("eth_accounts", [])).map((t10) => new aL(this, t10));
      }
      destroy() {
        for (let { payload: t10, reject: e10 } of (this.#t5 && (clearTimeout(this.#t5), this.#t5 = null), this.#t8))
          e10(C("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", { operation: t10.method }));
        this.#t8 = [], super.destroy();
      }
    }
    class aG extends aM {
      #et;
      constructor(t10, e10) {
        super(t10, e10);
        let r10 = this._getOption("pollingInterval");
        null == r10 && (r10 = aD.pollingInterval), this.#et = r10;
      }
      _getSubscriber(t10) {
        let e10 = super._getSubscriber(t10);
        return aF(e10) && (e10.pollingInterval = this.#et), e10;
      }
      get pollingInterval() {
        return this.#et;
      }
      set pollingInterval(t10) {
        if (!Number.isInteger(t10) || t10 < 0)
          throw Error("invalid interval");
        this.#et = t10, this._forEachSubscriber((t11) => {
          aF(t11) && (t11.pollingInterval = this.#et);
        });
      }
    }
    class aH extends aG {
      #ee;
      constructor(t10, e10, r10) {
        null == t10 && (t10 = "http://localhost:8545"), super(e10, r10), "string" == typeof t10 ? this.#ee = new rj(t10) : this.#ee = t10.clone();
      }
      _getConnection() {
        return this.#ee.clone();
      }
      async send(t10, e10) {
        return await this._start(), await super.send(t10, e10);
      }
      async _send(t10) {
        let e10 = this._getConnection();
        e10.body = JSON.stringify(t10), e10.setHeader("content-type", "application/json");
        let r10 = await e10.send();
        r10.assertOk();
        let n10 = r10.bodyJson;
        return Array.isArray(n10) || (n10 = [n10]), n10;
      }
    }
    let aQ = JSON.parse('{"M":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"shortCode","type":"string"},{"indexed":false,"internalType":"string","name":"longUrl","type":"string"}],"name":"URLShortened","type":"event"},{"inputs":[{"internalType":"string","name":"shortCode","type":"string"}],"name":"getURL","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"shortCode","type":"string"},{"internalType":"string","name":"longUrl","type":"string"}],"name":"setURL","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
    async function aj(t10, e10) {
      let { shortCode: r10 } = t10.query;
      if ("GET" !== t10.method)
        return e10.status(405).json({ error: "Method not allowed" });
      try {
        let t11 = new aH("https://arb-sepolia.g.alchemy.com/v2/NiaoOlWmEe3y5sU3a3c4artPHYXj2xYq"), n10 = new nO("0x2729D62B3cde6fd2263dF5e3c6509F87C6C05892", aQ.M, t11), i10 = await n10.getURL(r10);
        if (i10 && "" !== i10) {
          let t12 = i10.startsWith("http") ? i10 : `https://${i10}`;
          return e10.status(200).json({ url: t12 });
        }
        return e10.status(404).json({ error: "URL not found" });
      } catch (t11) {
        return console.error("Error:", t11), e10.status(500).json({ error: "Server error" });
      }
    }
    function aV(t10) {
      return (0, w.C)({ ...t10, IncrementalCache: E.k, page: "/api/redirect/[shortCode]", handler: (0, v.fd)("/api/redirect/[shortCode]", aj) });
    }
  } }, (t) => {
    var e = (e2) => t(t.s = e2);
    t.O(0, [888], () => e(93805));
    var r = t.O();
    (globalThis2._ENTRIES = "undefined" == typeof globalThis2._ENTRIES ? {} : globalThis2._ENTRIES)["middleware_pages/api/redirect/[shortCode]"] = r;
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
    { "name": "pages/api/redirect/[shortCode]", "staticRoutes": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }], "dynamicRoutes": [{ "page": "/api/redirect/[shortCode]", "regex": "^/api/redirect/([^/]+?)(?:/)?$", "routeKeys": { "nxtPshortCode": "nxtPshortCode" }, "namedRegex": "^/api/redirect/(?<nxtPshortCode>[^/]+?)(?:/)?$" }, { "page": "/[shortCode]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPshortCode": "nxtPshortCode" }, "namedRegex": "^/(?<nxtPshortCode>[^/]+?)(?:/)?$" }], "nextConfig": { "basePath": "" } }
  );
})(proxy, proxy, proxy);
export {
  stdin_default as default
};
