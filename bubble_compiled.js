
(function () {/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var h, aa = aa || {}, n = this || self, p = function () {
    }, ba = function (a) {
        a.ab = void 0;
        a.K = function () {
            return a.ab ? a.ab : a.ab = new a
        }
    }, r = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" ==
                c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, da = function (a) {
        var b = r(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }, ea = function (a) {
        return "function" == r(a)
    }, t = function (a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }, ia = function (a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }, fa =
        "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0, ja = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ka = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, u = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? u = ja : u = ka;
        return u.apply(null,
            arguments)
    }, applyCallback = function (a, b) {

        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }, la = Date.now || function () {
        return +new Date
    }, w = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.s = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var ma = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ma); else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    w(ma, Error);
    ma.prototype.name = "CustomError";
    var na;
    var oa = function (a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        ma.call(this, c + a[d])
    };
    w(oa, ma);
    oa.prototype.name = "AssertionError";
    var pa = function (a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new oa("" + e, f || []);
    }, x = function (a, b, c) {
        a || pa("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }, y = function (a, b) {
        throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }, qa = function (a, b, c) {
        "number" !== typeof a && pa("Expected number but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, ra = function (a, b, c) {
        "string" !== typeof a && pa("Expected string but got %s: %s.",
            [r(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }, sa = function (a, b, c) {
        t(a) || pa("Expected object but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, ta = function (a, b, c) {
        t(a) && 1 == a.nodeType || pa("Expected Element but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2))
    }, va = function (a, b, c, d) {
        a instanceof b || pa("Expected instanceof %s but got %s.", [ua(b), ua(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    }, ua = function (a) {
        return a instanceof Function ? a.displayName ||
            a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var wa = Array.prototype.indexOf ? function (a, b) {
        x(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    }, A = Array.prototype.forEach ? function (a, b, c) {
        x(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, xa = Array.prototype.filter ?
        function (a, b) {
            x(null != a.length);
            return Array.prototype.filter.call(a, b, void 0)
        } : function (a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
                var l = f[g];
                b.call(void 0, l, g, a) && (d[e++] = l)
            }
            return d
        }, ya = Array.prototype.map ? function (a, b) {
        x(null != a.length);
        return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }, za = Array.prototype.some ? function (a,
                                             b) {
        x(null != a.length);
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }, Aa = Array.prototype.every ? function (a, b) {
        x(null != a.length);
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    }, Ca = function (a) {
        a:{
            var b = Ba;
            for (var c = a.length, d = "string" ===
            typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }, Da = function (a, b) {
        return 0 <= wa(a, b)
    }, Ea = function (a, b) {
        b = wa(a, b);
        var c;
        if (c = 0 <= b) x(null != a.length), Array.prototype.splice.call(a, b, 1);
        return c
    }, Fa = function (a) {
        return Array.prototype.concat.apply([], arguments)
    }, Ga = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    var Ha = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ia = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        }, Ja = function (a, b) {
            for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        }, Ka = function (a, b) {
            for (var c in a) if (a[c] == b) return !0;
            return !1
        }, La = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ma = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < La.length; f++) c = La[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }, Na = function (a) {
            var b =
                arguments.length;
            if (1 == b && Array.isArray(arguments[0])) return Na.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var Oa = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Ra = function (a, b) {
        this.a = a === Pa && b || "";
        this.b = Qa
    };
    Ra.prototype.ba = !0;
    Ra.prototype.R = function () {
        return this.a
    };
    Ra.prototype.toString = function () {
        return "Const{" + this.a + "}"
    };
    var Sa = function (a) {
        if (a instanceof Ra && a.constructor === Ra && a.b === Qa) return a.a;
        y("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }, Qa = {}, Pa = {};
    var Va = function (a, b) {
        this.a = a === Ta && b || "";
        this.b = Ua
    };
    h = Va.prototype;
    h.ba = !0;
    h.R = function () {
        return this.a.toString()
    };
    h.$a = !0;
    h.ha = function () {
        return 1
    };
    h.toString = function () {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var Ua = {}, Ta = {};
    var Wa = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }, db = function (a, b) {
        if (b) a = a.replace(Xa, "&amp;").replace(Ya, "&lt;").replace(Za, "&gt;").replace($a, "&quot;").replace(ab, "&#39;").replace(bb, "&#0;"); else {
            if (!cb.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Xa, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Ya, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Za, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace($a, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(ab,
                "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(bb, "&#0;"))
        }
        return a
    }, Xa = /&/g, Ya = /</g, Za = />/g, $a = /"/g, ab = /'/g, bb = /\x00/g, cb = /[\x00&<>"']/, fb = function (a, b) {
        var c = 0;
        a = Wa(String(a)).split(".");
        b = Wa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = eb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
                    eb(0 == f[2].length, 0 == g[2].length) || eb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }, eb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ib = function (a, b) {
        this.a = a === gb && b || "";
        this.b = hb
    };
    h = ib.prototype;
    h.ba = !0;
    h.R = function () {
        return this.a.toString()
    };
    h.$a = !0;
    h.ha = function () {
        return 1
    };
    h.toString = function () {
        return "SafeUrl{" + this.a + "}"
    };
    var jb = function (a) {
        if (a instanceof ib && a.constructor === ib && a.b === hb) return a.a;
        y("expected object of type SafeUrl, got '" + a + "' of type " + r(a));
        return "type_error:SafeUrl"
    }, kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, lb = function (a) {
        if (a instanceof ib) return a;
        a = "object" == typeof a && a.ba ? a.R() : String(a);
        kb.test(a) || (a = "about:invalid#zClosurez");
        return new ib(gb, a)
    }, hb = {}, gb = {};
    var nb = function () {
        this.a = "";
        this.b = mb
    };
    nb.prototype.ba = !0;
    var mb = {};
    nb.prototype.R = function () {
        return this.a
    };
    nb.prototype.toString = function () {
        return "SafeStyle{" + this.a + "}"
    };
    var ob = function (a) {
            var b = new nb;
            b.a = a;
            return b
        }, pb = ob(""), rb = function (a) {
            if (a instanceof ib) return 'url("' + jb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof Ra ? Sa(a) : qb(String(a));
            if (/[{;}]/.test(a)) throw new oa("Value does not allow [{;}], got: %s.", [a]);
            return a
        }, qb = function (a) {
            var b = a.replace(sb, "$1").replace(sb, "$1").replace(tb, "url");
            if (ub.test(b)) {
                if (vb.test(a)) return y("String value disallows comments, got: " + a), "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                if (!b || !c) return y("String value requires balanced quotes, got: " + a), "zClosurez";
                if (!wb(a)) return y("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
            } else return y("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
            return xb(a)
        }, wb = function (a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        }, ub = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        tb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        sb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        vb = /\/\*/, xb = function (a) {
            return a.replace(tb, function (b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function (g, l, k) {
                    f = l;
                    return k
                });
                b = lb(d).R();
                return c + f + b + f + e
            })
        };
    var C;
    a:{
        var yb = n.navigator;
        if (yb) {
            var zb = yb.userAgent;
            if (zb) {
                C = zb;
                break a
            }
        }
        C = ""
    }
    var E = function (a) {
        return -1 != C.indexOf(a)
    };
    var Ab = function () {
        return E("Firefox") || E("FxiOS")
    }, Bb = function () {
        return (E("Chrome") || E("CriOS")) && !E("Edge")
    };
    var Db = function () {
        this.a = "";
        this.g = Cb;
        this.b = null
    };
    h = Db.prototype;
    h.$a = !0;
    h.ha = function () {
        return this.b
    };
    h.ba = !0;
    h.R = function () {
        return this.a.toString()
    };
    h.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };
    var Eb = function (a) {
            if (a instanceof Db && a.constructor === Db && a.g === Cb) return a.a;
            y("expected object of type SafeHtml, got '" + a + "' of type " + r(a));
            return "type_error:SafeHtml"
        }, Gb = function (a) {
            if (a instanceof Db) return a;
            var b = "object" == typeof a, c = null;
            b && a.$a && (c = a.ha());
            return Fb(db(b && a.ba ? a.R() : String(a)), c)
        }, Hb = /^[a-zA-Z0-9-]+$/,
        Ib = {action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0}, Jb = {
            APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0,
            SVG: !0, TEMPLATE: !0
        }, Lb = function (a) {
            var b = Gb(Kb), c = b.ha(), d = [], e = function (f) {
                Array.isArray(f) ? A(f, e) : (f = Gb(f), d.push(Eb(f).toString()), f = f.ha(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
            A(a, e);
            return Fb(d.join(Eb(b).toString()), c)
        }, Mb = function (a) {
            return Lb(Array.prototype.slice.call(arguments))
        }, Cb = {}, Fb = function (a, b) {
            return Nb(a, b)
        }, Nb = function (a, b) {
            var c = new Db;
            c.a = a;
            c.b = b;
            return c
        };
    Nb("<!DOCTYPE html>", 0);
    var Kb = Nb("", 0);
    Nb("<br>", 0);
    var Ob = {MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0}, Pb = Ha(function () {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Eb(Kb);
        return !b.parentElement
    }), Qb = function (a, b) {
        if (Pb()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Eb(b)
    }, Rb = function (a, b) {
        if (Ob[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
            a.tagName + ".");
        Qb(a, b)
    };
    var Sb = function (a) {
        return a = db(a, void 0)
    }, Tb = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    }, Ub = function (a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Vb = function () {
        return E("iPhone") && !E("iPod") && !E("iPad")
    }, Wb = function () {
        return Vb() || E("iPad") || E("iPod")
    };
    var Xb = function (a) {
        Xb[" "](a);
        return a
    };
    Xb[" "] = p;
    var Yb = function (a, b) {
        try {
            return Xb(a[b]), !0
        } catch (c) {
        }
        return !1
    }, $b = function (a, b) {
        var c = Zb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ac = E("Opera"), F = E("Trident") || E("MSIE"), bc = E("Edge"), cc = bc || F,
        G = E("Gecko") && !(-1 != C.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        H = -1 != C.toLowerCase().indexOf("webkit") && !E("Edge"), dc = H && E("Mobile"), I = E("Macintosh"),
        ec = E("Windows"), fc = E("Android"), gc = Vb(), hc = E("iPad"), ic = E("iPod"), jc = Wb(), kc = function () {
            var a = n.document;
            return a ? a.documentMode : void 0
        }, lc;
    a:{
        var mc = "", nc = function () {
            var a = C;
            if (G) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (bc) return /Edge\/([\d\.]+)/.exec(a);
            if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (H) return /WebKit\/(\S+)/.exec(a);
            if (ac) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        nc && (mc = nc ? nc[1] : "");
        if (F) {
            var oc = kc();
            if (null != oc && oc > parseFloat(mc)) {
                lc = String(oc);
                break a
            }
        }
        lc = mc
    }
    var pc = lc, Zb = {}, J = function (a) {
        return $b(a, function () {
            return 0 <= fb(pc, a)
        })
    }, rc = function (a) {
        return Number(qc) >= a
    }, sc;
    if (n.document && F) {
        var tc = kc();
        sc = tc ? tc : parseInt(pc, 10) || void 0
    } else sc = void 0;
    var qc = sc;
    var uc = Ab(), vc = Vb() || E("iPod"), wc = E("iPad"),
        xc = E("Android") && !(Bb() || Ab() || E("Opera") || E("Silk")), yc = Bb(),
        zc = E("Safari") && !(Bb() || E("Coast") || E("Opera") || E("Edge") || E("Edg/") || E("OPR") || Ab() || E("Silk") || E("Android")) && !Wb();
    var Ac = function () {
    }, Bc = "function" == typeof Uint8Array, Ec = function (a, b, c) {
        a.b = null;
        b || (b = []);
        a.D = void 0;
        a.g = -1;
        a.a = b;
        a:{
            if (b = a.a.length) {
                --b;
                var d = a.a[b];
                if (!(null === d || "object" != typeof d || Array.isArray(d) || Bc && d instanceof Uint8Array)) {
                    a.i = b - a.g;
                    a.h = d;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.o = {};
        if (c) for (b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.g, a.a[d] = a.a[d] || Cc) : (Dc(a), a.h[d] = a.h[d] || Cc)
    }, Cc = Object.freeze ? Object.freeze([]) : [], Dc = function (a) {
        var b = a.i + a.g;
        a.a[b] || (a.h = a.a[b] = {})
    }, L = function (a, b, c) {
        va(a, Ac);
        b < a.i ? a.a[b + a.g] = c : (Dc(a), a.h[b] = c);
        return a
    }, Fc = function (a) {
        if (a.b) for (var b in a.b) {
            var c = a.b[b];
            if ("array" == r(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].na(); else c && c.na()
        }
    };
    Ac.prototype.na = function () {
        Fc(this);
        return this.a
    };
    Ac.prototype.toString = function () {
        Fc(this);
        return this.a.toString()
    };
    var Gc = function (a) {
        return function () {
            return a
        }
    }, Hc = function (a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    }, Ic = null, Jc = function (a) {
        if (null !== Ic) var b = Ic; else {
            b = Gc(String.fromCharCode(84));
            var c = Gc(String.fromCharCode(75));
            b = [b(), b()];
            b[1] = c();
            b = (Ic = window[b.join(c())] || "") || ""
        }
        var d = Gc(String.fromCharCode(116));
        c = Gc(String.fromCharCode(107));
        d = [d(), d()];
        d[1] = c();
        c = "&" + d.join("") +
            "=";
        d = b.split(".");
        b = Number(d[0]) || 0;
        for (var e = [], f = 0, g = 0; g < a.length; g++) {
            var l = a.charCodeAt(g);
            128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128)
        }
        a = b;
        for (f = 0; f < e.length; f++) a += e[f], a = Hc(a, "+-a^+6");
        a = Hc(a, "+-3^+b+-f");
        a ^= Number(d[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." +
            (a ^ b))
    };
    var Kc, Lc = {
        $b: "activedescendant",
        ec: "atomic",
        fc: "autocomplete",
        ic: "busy",
        lc: "checked",
        mc: "colindex",
        rc: "controls",
        tc: "describedby",
        DISABLED: "disabled",
        xc: "dropeffect",
        yc: "expanded",
        zc: "flowto",
        Bc: "grabbed",
        Fc: "haspopup",
        Hc: "hidden",
        Jc: "invalid",
        Kc: "label",
        Lc: "labelledby",
        Mc: "level",
        Rc: "live",
        fd: "multiline",
        gd: "multiselectable",
        ld: "orientation",
        md: "owns",
        nd: "posinset",
        pd: "pressed",
        td: "readonly",
        vd: "relevant",
        wd: "required",
        Ad: "rowindex",
        Cd: "selected",
        Ed: "setsize",
        Gd: "sort",
        Td: "valuemax",
        Ud: "valuemin",
        Vd: "valuenow",
        Wd: "valuetext"
    };
    var Mc = {
        ac: "alert",
        bc: "alertdialog",
        cc: "application",
        dc: "article",
        hc: "banner",
        jc: "button",
        kc: "checkbox",
        nc: "columnheader",
        oc: "combobox",
        pc: "complementary",
        qc: "contentinfo",
        sc: "definition",
        uc: "dialog",
        vc: "directory",
        wc: "document",
        Ac: "form",
        Cc: "grid",
        Dc: "gridcell",
        Ec: "group",
        Gc: "heading",
        Ic: "img",
        Nc: "link",
        Oc: "list",
        Pc: "listbox",
        Qc: "listitem",
        Sc: "log",
        Tc: "main",
        Uc: "marquee",
        Vc: "math",
        Wc: "menu",
        Xc: "menubar",
        Yc: "menuitem",
        Zc: "menuitemcheckbox",
        $c: "menuitemradio",
        hd: "navigation",
        jd: "note",
        kd: "option",
        od: "presentation",
        qd: "progressbar",
        rd: "radio",
        sd: "radiogroup",
        ud: "region",
        xd: "row",
        yd: "rowgroup",
        zd: "rowheader",
        Bd: "scrollbar",
        SEARCH: "search",
        Dd: "separator",
        Fd: "slider",
        Hd: "spinbutton",
        Id: "status",
        TAB: "tab",
        Jd: "tablist",
        Kd: "tabpanel",
        Ld: "textbox",
        Md: "textinfo",
        Nd: "timer",
        Od: "toolbar",
        Pd: "tooltip",
        Qd: "tree",
        Rd: "treegrid",
        Sd: "treeitem"
    };
    var Nc = !F || rc(9), Oc = !G && !F || F && rc(9) || G && J("1.9.1"), Pc = F && !J("9");
    var M = function (a, b) {
        this.a = void 0 !== a ? a : 0;
        this.b = void 0 !== b ? b : 0
    };
    M.prototype.toString = function () {
        return "(" + this.a + ", " + this.b + ")"
    };
    var Qc = function (a, b) {
        return new M(a.a - b.a, a.b - b.b)
    };
    M.prototype.ceil = function () {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    M.prototype.floor = function () {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    M.prototype.round = function () {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };
    M.prototype.translate = function (a, b) {
        a instanceof M ? (this.a += a.a, this.b += a.b) : (this.a += Number(a), "number" === typeof b && (this.b += b));
        return this
    };
    var Rc = function (a, b) {
        this.width = a;
        this.height = b
    };
    h = Rc.prototype;
    h.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    h.aspectRatio = function () {
        return this.width / this.height
    };
    h.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Tc = function (a) {
            return a ? new Sc(N(a)) : na || (na = new Sc)
        }, GetElement = function (a, b) {
            return "string" === typeof b ? a.getElementById(b) : b
        }, Vc = function (a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0]; else {
                c = document;
                var d = b || c;
                if (d.querySelectorAll && d.querySelector && a) a = d.querySelector(a ? "." + a : ""); else {
                    b = b || c;
                    if (b.querySelectorAll && b.querySelector && a) a = b.querySelectorAll(a ? "." + a : ""); else if (a && b.getElementsByClassName) {
                        var e = b.getElementsByClassName(a);
                        a = e
                    } else if (e = b.getElementsByTagName("*"),
                        a) {
                        var f = {};
                        for (c = d = 0; b = e[c]; c++) {
                            var g = b.className;
                            "function" == typeof g.split && Da(g.split(/\s+/), a) && (f[d++] = b)
                        }
                        f.length = d;
                        a = f
                    } else a = e;
                    a = a[0] || null
                }
            }
            return a || null
        }, Xc = function (a, b) {
            Ia(b, function (c, d) {
                c && "object" == typeof c && c.ba && (c = c.R());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Wc.hasOwnProperty(d) ? a.setAttribute(Wc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }, Wc = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, $c = function (a) {
            var b = Yc(a);
            a = Zc(a);
            return F && J("10") && a.pageYOffset != b.scrollTop ? new M(b.scrollLeft, b.scrollTop) : new M(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        }, Yc = function (a) {
            return a.scrollingElement ? a.scrollingElement : !H && ad(a) ? a.documentElement : a.body || a.documentElement
        }, Zc = function (a) {
            return a.parentWindow ||
                a.defaultView
        }, cd = function (a, b, c, d) {
            function e(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }

            for (; d < c.length; d++) {
                var f = c[d];
                !da(f) || t(f) && 0 < f.nodeType ? e(f) : A(bd(f) ? Ga(f) : f, e)
            }
        }, CreateElement = function (a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }, ad = function (a) {
            return "CSS1Compat" == a.compatMode
        }, ed = function (a, b) {
            x(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        }, RemoveChild = function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        gd = function (a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        }, N = function (a) {
            x(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }, hd = function (a, b) {
            x(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a) a.textContent = b; else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(x(a.lastChild));
                a.firstChild.data = String(b)
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                c = N(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        }, id = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, jd = {IMG: " ", BR: "\n"}, kd = function (a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        }, ld = function (a) {
            return F && !J("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
        },
        md = function (a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        }, od = function (a) {
            var b = [];
            nd(a, b, !1);
            return b.join("")
        }, nd = function (a, b, c) {
            if (!(a.nodeName in id)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in jd) b.push(jd[a.nodeName]); else for (a = a.firstChild; a;) nd(a, b, c), a = a.nextSibling
        }, bd = function (a) {
            if (a && "number" == typeof a.length) {
                if (t(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ea(a)) return "function" ==
                    typeof a.item
            }
            return !1
        }, Sc = function (a) {
            this.a = a || n.document || document
        };
    h = Sc.prototype;
    h.m = function (a) {
        return GetElement(this.a, a)
    };
    h.nb = function (a, b, c) {
        var d = this.a, e = arguments, f = String(e[0]), g = e[1];
        if (!Nc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Sb(g.name), '"');
            if (g.type) {
                f.push(' type="', Sb(g.type), '"');
                var l = {};
                Ma(l, g);
                delete l.type;
                g = l
            }
            f.push(">");
            f = f.join("")
        }
        f = CreateElement(d, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Xc(f, g));
        2 < e.length && cd(d, f, e, 2);
        return f
    };
    h.Jb = function (a, b) {
        cd(N(a), a, arguments, 1)
    };
    h.getChildren = function (a) {
        return Oc && void 0 != a.children ? a.children : xa(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    };
    h.contains = gd;
    var pd = function (a, b, c) {
        Array.isArray(c) && (c = c.join(" "));
        x(b, "ARIA attribute cannot be empty.");
        x(Ka(Lc, b), "No such ARIA attribute " + b);
        var d = "aria-" + b;
        "" === c || void 0 == c ? (Kc || (Kc = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Kc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var qd = function () {
    };
    ba(qd);
    var rd = function () {
        this.D = this.D;
        this.L = this.L
    };
    rd.prototype.D = !1;
    rd.prototype.V = function () {
        this.D || (this.D = !0, this.v())
    };
    var sd = function (a, b) {
        a.D ? b() : (a.L || (a.L = []), a.L.push(b))
    };
    rd.prototype.v = function () {
        if (this.L) for (; this.L.length;) this.L.shift()()
    };
    var td = function (a) {
        a && "function" == typeof a.V && a.V()
    };
    var ud = Object.freeze || function (a) {
        return a
    };
    var vd = !F || rc(9), wd = !F || rc(9), xd = F && !J("9"), yd = function () {
        if (!n.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            n.addEventListener("test", p, b), n.removeEventListener("test", p, b)
        } catch (c) {
        }
        return a
    }();
    var zd = function (a, b) {
        this.type = a;
        this.a = this.target = b;
        this.defaultPrevented = this.g = !1
    };
    zd.prototype.h = function () {
        this.g = !0
    };
    zd.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    };
    var O = function (a, b) {
        zd.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.i = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.b = null;
        if (a) {
            var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            (b = a.relatedTarget) ? G && (Yb(b, "nodeName") || (b = null)) : "mouseover" == c ?
                b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.i = I ? a.metaKey : a.ctrlKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Bd[a.pointerType] || "";
            this.b = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    w(O, zd);
    var Cd = ud([1, 4, 2]), Bd = ud({2: "touch", 3: "pen", 4: "mouse"}), Dd = function (a) {
        return (vd ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Cd[0])) && !(H && I && a.ctrlKey)
    };
    O.prototype.h = function () {
        O.s.h.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    O.prototype.preventDefault = function () {
        O.s.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault(); else if (a.returnValue = !1, xd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var Ed = "closure_listenable_" + (1E6 * Math.random() | 0), Fd = function (a) {
        return !(!a || !a[Ed])
    }, Gd = 0;
    var Hd = function (a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Ha = e;
        this.key = ++Gd;
        this.removed = this.Ca = !1
    }, Id = function (a) {
        a.removed = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Ha = null
    };
    var Jd = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    Jd.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = Kd(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Ca = !1)) : (b = new Hd(b, this.src, f, !!d, e), b.Ca = c, a.push(b));
        return b
    };
    Jd.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Kd(e, b, c, d);
        return -1 < b ? (Id(e[b]), x(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var Ld = function (a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Ea(a.a[c], b);
        d && (Id(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    };
    Jd.prototype.removeAll = function (a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.a) if (!a || c == a) {
            for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Id(d[e]);
            delete this.a[c];
            this.b--
        }
        return b
    };
    Jd.prototype.Fa = function (a, b) {
        a = this.a[a.toString()];
        var c = [];
        if (a) for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
        return c
    };
    Jd.prototype.va = function (a, b, c, d) {
        a = this.a[a.toString()];
        var e = -1;
        a && (e = Kd(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Jd.prototype.hasListener = function (a, b) {
        var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
        return Ja(this.a, function (f) {
            for (var g = 0; g < f.length; ++g) if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var Kd = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.listener == b && f.capture == !!c && f.Ha == d) return e
        }
        return -1
    };
    var Md = "closure_lm_" + (1E6 * Math.random() | 0), Nd = {}, Od = 0,
        Listen = function (a, b, c, d, e) {
            if (d && d.once) return Pd(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Listen(a, b[f], c, d, e);
                return null
            }
            c = Qd(c);
            return Fd(a) ? a.listen(b, c, t(d) ? !!d.capture : !!d, e) : Rd(a, b, c, !1, d, e)
        }, Rd = function (a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = t(e) ? !!e.capture : !!e, l = Sd(a);
            l || (a[Md] = l = new Jd(a));
            c = l.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = Td();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) yd || (e = g), void 0 ===
            e && (e = !1), a.addEventListener(b.toString(), d, e); else if (a.attachEvent) a.attachEvent(Ud(b.toString()), d); else if (a.addListener && a.removeListener) x("change" === b, "MediaQueryList only has a change event"), a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable.");
            Od++;
            return c
        }, Td = function () {
            var a = Vd, b = wd ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
            return b
        }, Pd = function (a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f <
                b.length; f++) Pd(a, b[f], c, d, e);
                return null
            }
            c = Qd(c);
            return Fd(a) ? a.eb(b, c, t(d) ? !!d.capture : !!d, e) : Rd(a, b, c, !0, d, e)
        }, Wd = function (a, b, c, d, e) {
            if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Wd(a, b[f], c, d, e); else d = t(d) ? !!d.capture : !!d, c = Qd(c), Fd(a) ? a.N(b, c, d, e) : a && (a = Sd(a)) && (b = a.va(b, c, d, e)) && Xd(b)
        }, Xd = function (a) {
            if ("number" === typeof a || !a || a.removed) return !1;
            var b = a.src;
            if (Fd(b)) return Ld(b.G, a);
            var c = a.type, d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ud(c),
                d) : b.addListener && b.removeListener && b.removeListener(d);
            Od--;
            (c = Sd(b)) ? (Ld(c, a), 0 == c.b && (c.src = null, b[Md] = null)) : Id(a);
            return !0
        }, RemoveAll = function (a) {
            if (a) if (Fd(a)) a.G && a.G.removeAll(void 0); else if (a = Sd(a)) {
                var b = 0, c;
                for (c in a.a) for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) Xd(d[e]) && ++b
            }
        }, Ud = function (a) {
            return a in Nd ? Nd[a] : Nd[a] = "on" + a
        }, ae = function (a, b, c, d) {
            var e = !0;
            if (a = Sd(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.capture == c && !f.removed && (f = $d(f, d), e = e && !1 !== f)
            }
            return e
        },
        $d = function (a, b) {
            var c = a.listener, d = a.Ha || a.src;
            a.Ca && Xd(a);
            return c.call(d, b)
        }, Vd = function (a, b) {
            if (a.removed) return !0;
            if (!wd) {
                if (!b) a:{
                    b = ["window", "event"];
                    for (var c = n, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    }
                    b = c
                }
                d = b;
                b = new O(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a:{
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.a; e; e = e.parentNode) d.push(e);
                    a = a.type;
                    for (e = d.length - 1; !b.g && 0 <= e; e--) {
                        b.a = d[e];
                        var f = ae(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.g && e < d.length; e++) b.a = d[e], f = ae(d[e], a, !1, b), c = c && f
                }
                return c
            }
            return $d(a, new O(b, this))
        }, Sd = function (a) {
            a = a[Md];
            return a instanceof Jd ? a : null
        }, be = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Qd = function (a) {
            x(a, "Listener can not be null.");
            if (ea(a)) return a;
            x(a.handleEvent, "An object listener must have handleEvent method.");
            a[be] || (a[be] = function (b) {
                return a.handleEvent(b)
            });
            return a[be]
        };
    var GetLanguage = function (a) {
        a = String(a).toLowerCase().replace("_", "-");
        if ("zh-cn" == a) return "zh-CN";
        if ("zh-tw" == a) return "zh-TW";
        var b = a.indexOf("-");
        a = 0 <= b ? a.substring(0, b) : a;
        return "zh" == a ? "zh-CN" : a
    }/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    var IsDetectLanguage = !!chrome.i18n.detectLanguage;

    var CheckLanguage = function (a) {
        a = GetLanguage(a);
        return !1//a == 'en' ? !1 : !0
    };

    var OpenPopupTranslate = function (a, b, c, d) {
            if ("" != a) {
                window.selection = a;
                AttachPopupTranslate(a, b, c, d);
            }
        },
        AttachPopupTranslate = function (a, b, c, d) {
            var element = GetElement(document, "ox-dictionary");
            (RemoveAll(element), RemoveChild(element));

            var divElement = CreateElement(document, "iframe");

            divElement.id = "ox-dictionary";
            divElement.style.position = "absolute";
            divElement.src = "https://oxd.mehrabisajad.ir/dictionary/"+a;
            /*b
            bottom: 27.4375
            height: 14
            left: 330.5
            right: 400.5
            top: 13.4375
            width: 70
            x: 330.5

            */

            let scrollLeft = Yc(document).scrollLeft;
            let left = (b.x - 460)/2 + scrollLeft;
            divElement.style.left = left<0?0:left + "px";
            let scrollTop = Yc(document).scrollTop;
            divElement.style.top = scrollTop + "px";
            divElement.style.width = "460px";
            divElement.style.height = "640px";
            document.body.appendChild(divElement);


        }
    ;

    var
        TranslateByIcon = function (a, b, c) {
            OpenPopupTranslate(b, a, "icon", c)
        },
        CheckForAppendIcon = function (a) {
            var b = window.getSelection(), c = b.toString().trim();
            CheckRegex(c) && (IsDetectLanguage ? ExecAfterDetectLanguage(b, function (d) {
                if (!CheckLanguage(d)) {
                    if ("zh" == d || "zh-Hant" == d) d = "zh-CN";
                    AppendIcon(a, b, c, d)
                }
            }) : !IsDetectLanguage && CheckLanguage(zj) || AppendIcon(a, b, c))
        },
        InnerDetectLanguage = function (a, b, c) {
            if (a) {
                var d = a.innerText || a.textContent || "";
                d = decodeURIComponent(encodeURIComponent(d.trim()));
                chrome.i18n.detectLanguage(d, function (e) {
                    e.isReliable ? c(e.languages[0].language) : 0 < b ? InnerDetectLanguage(a.parentNode,
                        b - 1, c) : c("")
                })
            } else c("")
        },
        AppendIcon = function (a, b, c, d) {
            b = b.getRangeAt(0).getBoundingClientRect();
            if (0 != b.top || 0 != b.left) {
                var e = CreateElement(document, "div");
                e.className = "ox-dictionary-icon";
                var divElement = CreateElement(document, "div");
                divElement.appendChild(e);
                divElement.id = "ox-dictionary";
                divElement.style.position = "absolute";
                divElement.style.left = a.clientX + Yc(document).scrollLeft + 20 + "px";
                a = a.clientY;
                a - b.top > b.height / 2 ? a = b.bottom + 1 : a = b.top - 1 - 27;
                divElement.style.top = a + Yc(document).scrollTop + "px";
                document.body.appendChild(divElement);
                Listen(divElement, "click", applyCallback(TranslateByIcon, b, c, d))
            }
        },
        ExecAfterDetectLanguage = function (text, func) {
            var c = text.toString().trim();
            c = decodeURIComponent(encodeURIComponent(c));
            chrome.i18n.detectLanguage(c, function (d) {
                var e = null;
                if (d.isReliable) return e = d.languages[0].language, func(e);
                InnerDetectLanguage(text.anchorNode, 3, function (f) {
                    func(f)
                })
            })
        },
        CheckRegex = function (a) {
            var b = /^[0-9!@#$\u20ac\u00a3%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
            return 0 < a.length && !Vc("gtx-bubble") && 1024 > a.length && !b.test(a) && 400 < window.innerWidth
        };
    chrome.runtime.onMessage.addListener(function (a) {
        a["gtx.detected"] && (zj = a["gtx.detected"], CheckForAppendIcon(Aj))
    });

    Listen(window, "mouseup", function (a) {
        if (0 == a.button && !GetElement(document, "ox-dictionary")) {
            try {
                chrome.runtime.sendMessage({test: 1})
            } catch (b) {
                return
            }
            IsDetectLanguage || zj ? window.setTimeout(applyCallback(CheckForAppendIcon, a), 0) : (Aj = a, chrome.runtime.sendMessage({detectLanguage: 1}))
        }
    });
    Listen(window, "mousedown", function (a) {
        var b = GetElement(document, "ox-dictionary");
        b && (gd(b, a.target) ? a.preventDefault() : (RemoveAll(b), RemoveChild(b)));
        a.target instanceof HTMLElement && -1 !== a.target.className.indexOf("jfk-bubble-closebtn") && a.preventDefault()
    }, !0);
})();
