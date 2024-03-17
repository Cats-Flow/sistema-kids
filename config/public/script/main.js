function Vk(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Rs =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function _o(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fv = { exports: {} },
  Su = {},
  Vv = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = Symbol.for("react.element"),
  $k = Symbol.for("react.portal"),
  Bk = Symbol.for("react.fragment"),
  Hk = Symbol.for("react.strict_mode"),
  zk = Symbol.for("react.profiler"),
  Uk = Symbol.for("react.provider"),
  Wk = Symbol.for("react.context"),
  Kk = Symbol.for("react.forward_ref"),
  Zk = Symbol.for("react.suspense"),
  Gk = Symbol.for("react.memo"),
  Yk = Symbol.for("react.lazy"),
  Pm = Symbol.iterator;
function Xk(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pm && e[Pm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $v = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bv = Object.assign,
  Hv = {};
function Ri(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hv),
    (this.updater = n || $v);
}
Ri.prototype.isReactComponent = {};
Ri.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ri.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zv() {}
zv.prototype = Ri.prototype;
function vh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hv),
    (this.updater = n || $v);
}
var yh = (vh.prototype = new zv());
yh.constructor = vh;
Bv(yh, Ri.prototype);
yh.isPureReactComponent = !0;
var Om = Array.isArray,
  Uv = Object.prototype.hasOwnProperty,
  wh = { current: null },
  Wv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Uv.call(t, r) && !Wv.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: is,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: wh.current,
  };
}
function qk(e, t) {
  return {
    $$typeof: is,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
}
function Jk(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _m = /\/+/g;
function _c(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jk("" + e.key)
    : t.toString(36);
}
function il(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case is:
          case $k:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + _c(a, 0) : r),
      Om(o)
        ? ((n = ""),
          e != null && (n = e.replace(_m, "$&/") + "/"),
          il(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (xh(o) &&
            (o = qk(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(_m, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Om(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + _c(i, s);
      a += il(i, t, n, l, o);
    }
  else if (((l = Xk(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + _c(i, s++)), (a += il(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Is(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    il(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Qk(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ht = { current: null },
  al = { transition: null },
  eE = {
    ReactCurrentDispatcher: ht,
    ReactCurrentBatchConfig: al,
    ReactCurrentOwner: wh,
  };
ee.Children = {
  map: Is,
  forEach: function (e, t, n) {
    Is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Ri;
ee.Fragment = Bk;
ee.Profiler = zk;
ee.PureComponent = vh;
ee.StrictMode = Hk;
ee.Suspense = Zk;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eE;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bv({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = wh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Uv.call(t, l) &&
        !Wv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: is, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uk, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Kv;
ee.createFactory = function (e) {
  var t = Kv.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: Kk, render: e };
};
ee.isValidElement = xh;
ee.lazy = function (e) {
  return { $$typeof: Yk, _payload: { _status: -1, _result: e }, _init: Qk };
};
ee.memo = function (e, t) {
  return { $$typeof: Gk, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = al.transition;
  al.transition = {};
  try {
    e();
  } finally {
    al.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return ht.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
ee.useId = function () {
  return ht.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return ht.current.useRef(e);
};
ee.useState = function (e) {
  return ht.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return ht.current.useTransition();
};
ee.version = "18.2.0";
Vv.exports = ee;
var k = Vv.exports;
const T = _o(k),
  Md = Vk({ __proto__: null, default: T }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tE = k,
  nE = Symbol.for("react.element"),
  rE = Symbol.for("react.fragment"),
  oE = Object.prototype.hasOwnProperty,
  iE = tE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  aE = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zv(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) oE.call(t, r) && !aE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: nE,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: iE.current,
  };
}
Su.Fragment = rE;
Su.jsx = Zv;
Su.jsxs = Zv;
Fv.exports = Su;
var y = Fv.exports,
  Rd = {},
  Gv = { exports: {} },
  $t = {},
  Yv = { exports: {} },
  Xv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, $) {
    var W = D.length;
    D.push($);
    e: for (; 0 < W; ) {
      var z = (W - 1) >>> 1,
        J = D[z];
      if (0 < o(J, $)) (D[z] = $), (D[W] = J), (W = z);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var $ = D[0],
      W = D.pop();
    if (W !== $) {
      D[0] = W;
      e: for (var z = 0, J = D.length, H = J >>> 1; z < H; ) {
        var Z = 2 * (z + 1) - 1,
          ve = D[Z],
          ce = Z + 1,
          He = D[ce];
        if (0 > o(ve, W))
          ce < J && 0 > o(He, ve)
            ? ((D[z] = He), (D[ce] = W), (z = ce))
            : ((D[z] = ve), (D[Z] = W), (z = Z));
        else if (ce < J && 0 > o(He, W)) (D[z] = He), (D[ce] = W), (z = ce);
        else break e;
      }
    }
    return $;
  }
  function o(D, $) {
    var W = D.sortIndex - $.sortIndex;
    return W !== 0 ? W : D.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    m = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(D) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= D)
        r(u), ($.sortIndex = $.expirationTime), t(l, $);
      else break;
      $ = n(u);
    }
  }
  function S(D) {
    if (((v = !1), w(D), !m))
      if (n(l) !== null) (m = !0), U(C);
      else {
        var $ = n(u);
        $ !== null && N(S, $.startTime - D);
      }
  }
  function C(D, $) {
    (m = !1), v && ((v = !1), g(A), (A = -1)), (h = !0);
    var W = f;
    try {
      for (
        w($), d = n(l);
        d !== null && (!(d.expirationTime > $) || (D && !B()));

      ) {
        var z = d.callback;
        if (typeof z == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var J = z(d.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof J == "function" ? (d.callback = J) : d === n(l) && r(l),
            w($);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var H = !0;
      else {
        var Z = n(u);
        Z !== null && N(S, Z.startTime - $), (H = !1);
      }
      return H;
    } finally {
      (d = null), (f = W), (h = !1);
    }
  }
  var _ = !1,
    E = null,
    A = -1,
    R = 5,
    M = -1;
  function B() {
    return !(e.unstable_now() - M < R);
  }
  function K() {
    if (E !== null) {
      var D = e.unstable_now();
      M = D;
      var $ = !0;
      try {
        $ = E(!0, D);
      } finally {
        $ ? Y() : ((_ = !1), (E = null));
      }
    } else _ = !1;
  }
  var Y;
  if (typeof p == "function")
    Y = function () {
      p(K);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      de = X.port2;
    (X.port1.onmessage = K),
      (Y = function () {
        de.postMessage(null);
      });
  } else
    Y = function () {
      x(K, 0);
    };
  function U(D) {
    (E = D), _ || ((_ = !0), Y());
  }
  function N(D, $) {
    A = x(function () {
      D(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || h || ((m = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = f;
      }
      var W = f;
      f = $;
      try {
        return D();
      } finally {
        f = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, $) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = f;
      f = D;
      try {
        return $();
      } finally {
        f = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, $, W) {
      var z = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? z + W : z))
          : (W = z),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = W + J),
        (D = {
          id: c++,
          callback: $,
          priorityLevel: D,
          startTime: W,
          expirationTime: J,
          sortIndex: -1,
        }),
        W > z
          ? ((D.sortIndex = W),
            t(u, D),
            n(l) === null &&
              D === n(u) &&
              (v ? (g(A), (A = -1)) : (v = !0), N(S, W - z)))
          : ((D.sortIndex = J), t(l, D), m || h || ((m = !0), U(C))),
        D
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (D) {
      var $ = f;
      return function () {
        var W = f;
        f = $;
        try {
          return D.apply(this, arguments);
        } finally {
          f = W;
        }
      };
    });
})(Xv);
Yv.exports = Xv;
var sE = Yv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qv = k,
  Dt = sE;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jv = new Set(),
  ja = {};
function Ao(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (ja[e] = t, e = 0; e < t.length; e++) Jv.add(t[e]);
}
var or = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Id = Object.prototype.hasOwnProperty,
  lE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Am = {},
  jm = {};
function uE(e) {
  return Id.call(jm, e)
    ? !0
    : Id.call(Am, e)
    ? !1
    : lE.test(e)
    ? (jm[e] = !0)
    : ((Am[e] = !0), !1);
}
function cE(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dE(e, t, n, r) {
  if (t === null || typeof t > "u" || cE(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var et = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    et[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  et[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  et[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  et[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    et[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  et[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  et[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  et[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  et[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sh = /[\-:]([a-z])/g;
function bh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sh, bh);
    et[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sh, bh);
    et[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sh, bh);
  et[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  et[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
et.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  et[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kh(e, t, n, r) {
  var o = et.hasOwnProperty(t) ? et[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (dE(t, n, o, r) && (n = null),
    r || o === null
      ? uE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cr = qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ns = Symbol.for("react.element"),
  Uo = Symbol.for("react.portal"),
  Wo = Symbol.for("react.fragment"),
  Eh = Symbol.for("react.strict_mode"),
  Nd = Symbol.for("react.profiler"),
  Qv = Symbol.for("react.provider"),
  ey = Symbol.for("react.context"),
  Ch = Symbol.for("react.forward_ref"),
  Dd = Symbol.for("react.suspense"),
  Ld = Symbol.for("react.suspense_list"),
  Th = Symbol.for("react.memo"),
  yr = Symbol.for("react.lazy"),
  ty = Symbol.for("react.offscreen"),
  Mm = Symbol.iterator;
function Ui(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mm && e[Mm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Me = Object.assign,
  Ac;
function sa(e) {
  if (Ac === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ac = (t && t[1]) || "";
    }
  return (
    `
` +
    Ac +
    e
  );
}
var jc = !1;
function Mc(e, t) {
  if (!e || jc) return "";
  jc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (jc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? sa(e) : "";
}
function fE(e) {
  switch (e.tag) {
    case 5:
      return sa(e.type);
    case 16:
      return sa("Lazy");
    case 13:
      return sa("Suspense");
    case 19:
      return sa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Mc(e.type, !1)), e;
    case 11:
      return (e = Mc(e.type.render, !1)), e;
    case 1:
      return (e = Mc(e.type, !0)), e;
    default:
      return "";
  }
}
function Fd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wo:
      return "Fragment";
    case Uo:
      return "Portal";
    case Nd:
      return "Profiler";
    case Eh:
      return "StrictMode";
    case Dd:
      return "Suspense";
    case Ld:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ey:
        return (e.displayName || "Context") + ".Consumer";
      case Qv:
        return (e._context.displayName || "Context") + ".Provider";
      case Ch:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Th:
        return (
          (t = e.displayName || null), t !== null ? t : Fd(e.type) || "Memo"
        );
      case yr:
        (t = e._payload), (e = e._init);
        try {
          return Fd(e(t));
        } catch {}
    }
  return null;
}
function hE(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fd(t);
    case 8:
      return t === Eh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ny(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function pE(e) {
  var t = ny(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ds(e) {
  e._valueTracker || (e._valueTracker = pE(e));
}
function ry(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ny(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vd(e, t) {
  var n = t.checked;
  return Me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function oy(e, t) {
  (t = t.checked), t != null && kh(e, "checked", t, !1);
}
function $d(e, t) {
  oy(e, t);
  var n = Lr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bd(e, t.type, Lr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Im(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bd(e, t, n) {
  (t !== "number" || Al(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var la = Array.isArray;
function ai(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (la(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lr(n) };
}
function iy(e, t) {
  var n = Lr(t.value),
    r = Lr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Dm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ay(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ay(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ls,
  sy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ls = Ls || document.createElement("div"),
          Ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ma(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  mE = ["Webkit", "ms", "Moz", "O"];
Object.keys(pa).forEach(function (e) {
  mE.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pa[t] = pa[e]);
  });
});
function ly(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pa.hasOwnProperty(e) && pa[e])
    ? ("" + t).trim()
    : t + "px";
}
function uy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ly(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var gE = Me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
    wbr: !0,
  }
);
function Ud(e, t) {
  if (t) {
    if (gE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Wd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Kd = null;
function Ph(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zd = null,
  si = null,
  li = null;
function Lm(e) {
  if ((e = ls(e))) {
    if (typeof Zd != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Tu(t)), Zd(e.stateNode, e.type, t));
  }
}
function cy(e) {
  si ? (li ? li.push(e) : (li = [e])) : (si = e);
}
function dy() {
  if (si) {
    var e = si,
      t = li;
    if (((li = si = null), Lm(e), t)) for (e = 0; e < t.length; e++) Lm(t[e]);
  }
}
function fy(e, t) {
  return e(t);
}
function hy() {}
var Rc = !1;
function py(e, t, n) {
  if (Rc) return e(t, n);
  Rc = !0;
  try {
    return fy(e, t, n);
  } finally {
    (Rc = !1), (si !== null || li !== null) && (hy(), dy());
  }
}
function Ra(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Tu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Gd = !1;
if (or)
  try {
    var Wi = {};
    Object.defineProperty(Wi, "passive", {
      get: function () {
        Gd = !0;
      },
    }),
      window.addEventListener("test", Wi, Wi),
      window.removeEventListener("test", Wi, Wi);
  } catch {
    Gd = !1;
  }
function vE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ma = !1,
  jl = null,
  Ml = !1,
  Yd = null,
  yE = {
    onError: function (e) {
      (ma = !0), (jl = e);
    },
  };
function wE(e, t, n, r, o, i, a, s, l) {
  (ma = !1), (jl = null), vE.apply(yE, arguments);
}
function xE(e, t, n, r, o, i, a, s, l) {
  if ((wE.apply(this, arguments), ma)) {
    if (ma) {
      var u = jl;
      (ma = !1), (jl = null);
    } else throw Error(L(198));
    Ml || ((Ml = !0), (Yd = u));
  }
}
function jo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function my(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Fm(e) {
  if (jo(e) !== e) throw Error(L(188));
}
function SE(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jo(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Fm(o), e;
        if (i === r) return Fm(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function gy(e) {
  return (e = SE(e)), e !== null ? vy(e) : null;
}
function vy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yy = Dt.unstable_scheduleCallback,
  Vm = Dt.unstable_cancelCallback,
  bE = Dt.unstable_shouldYield,
  kE = Dt.unstable_requestPaint,
  Fe = Dt.unstable_now,
  EE = Dt.unstable_getCurrentPriorityLevel,
  Oh = Dt.unstable_ImmediatePriority,
  wy = Dt.unstable_UserBlockingPriority,
  Rl = Dt.unstable_NormalPriority,
  CE = Dt.unstable_LowPriority,
  xy = Dt.unstable_IdlePriority,
  bu = null,
  In = null;
function TE(e) {
  if (In && typeof In.onCommitFiberRoot == "function")
    try {
      In.onCommitFiberRoot(bu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vn = Math.clz32 ? Math.clz32 : _E,
  PE = Math.log,
  OE = Math.LN2;
function _E(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((PE(e) / OE) | 0)) | 0;
}
var Fs = 64,
  Vs = 4194304;
function ua(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = ua(s)) : ((i &= a), i !== 0 && (r = ua(i)));
  } else (a = n & ~o), a !== 0 ? (r = ua(a)) : i !== 0 && (r = ua(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function AE(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jE(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - vn(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = AE(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Xd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sy() {
  var e = Fs;
  return (Fs <<= 1), !(Fs & 4194240) && (Fs = 64), e;
}
function Ic(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function as(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vn(t)),
    (e[t] = n);
}
function ME(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function _h(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function by(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ky,
  Ah,
  Ey,
  Cy,
  Ty,
  qd = !1,
  $s = [],
  _r = null,
  Ar = null,
  jr = null,
  Ia = new Map(),
  Na = new Map(),
  kr = [],
  RE =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $m(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _r = null;
      break;
    case "dragenter":
    case "dragleave":
      Ar = null;
      break;
    case "mouseover":
    case "mouseout":
      jr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ia.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Na.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ls(t)), t !== null && Ah(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function IE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (_r = Ki(_r, e, t, n, r, o)), !0;
    case "dragenter":
      return (Ar = Ki(Ar, e, t, n, r, o)), !0;
    case "mouseover":
      return (jr = Ki(jr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ia.set(i, Ki(Ia.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Na.set(i, Ki(Na.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Py(e) {
  var t = so(e.target);
  if (t !== null) {
    var n = jo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = my(n)), t !== null)) {
          (e.blockedOn = t),
            Ty(e.priority, function () {
              Ey(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function sl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Kd = r), n.target.dispatchEvent(r), (Kd = null);
    } else return (t = ls(n)), t !== null && Ah(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bm(e, t, n) {
  sl(e) && n.delete(t);
}
function NE() {
  (qd = !1),
    _r !== null && sl(_r) && (_r = null),
    Ar !== null && sl(Ar) && (Ar = null),
    jr !== null && sl(jr) && (jr = null),
    Ia.forEach(Bm),
    Na.forEach(Bm);
}
function Zi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qd ||
      ((qd = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, NE)));
}
function Da(e) {
  function t(o) {
    return Zi(o, e);
  }
  if (0 < $s.length) {
    Zi($s[0], e);
    for (var n = 1; n < $s.length; n++) {
      var r = $s[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _r !== null && Zi(_r, e),
      Ar !== null && Zi(Ar, e),
      jr !== null && Zi(jr, e),
      Ia.forEach(t),
      Na.forEach(t),
      n = 0;
    n < kr.length;
    n++
  )
    (r = kr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kr.length && ((n = kr[0]), n.blockedOn === null); )
    Py(n), n.blockedOn === null && kr.shift();
}
var ui = cr.ReactCurrentBatchConfig,
  Nl = !0;
function DE(e, t, n, r) {
  var o = he,
    i = ui.transition;
  ui.transition = null;
  try {
    (he = 1), jh(e, t, n, r);
  } finally {
    (he = o), (ui.transition = i);
  }
}
function LE(e, t, n, r) {
  var o = he,
    i = ui.transition;
  ui.transition = null;
  try {
    (he = 4), jh(e, t, n, r);
  } finally {
    (he = o), (ui.transition = i);
  }
}
function jh(e, t, n, r) {
  if (Nl) {
    var o = Jd(e, t, n, r);
    if (o === null) Uc(e, t, r, Dl, n), $m(e, r);
    else if (IE(o, e, t, n, r)) r.stopPropagation();
    else if (($m(e, r), t & 4 && -1 < RE.indexOf(e))) {
      for (; o !== null; ) {
        var i = ls(o);
        if (
          (i !== null && ky(i),
          (i = Jd(e, t, n, r)),
          i === null && Uc(e, t, r, Dl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Uc(e, t, r, null, n);
  }
}
var Dl = null;
function Jd(e, t, n, r) {
  if (((Dl = null), (e = Ph(r)), (e = so(e)), e !== null))
    if (((t = jo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = my(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dl = e), null;
}
function Oy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (EE()) {
        case Oh:
          return 1;
        case wy:
          return 4;
        case Rl:
        case CE:
          return 16;
        case xy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Cr = null,
  Mh = null,
  ll = null;
function _y() {
  if (ll) return ll;
  var e,
    t = Mh,
    n = t.length,
    r,
    o = "value" in Cr ? Cr.value : Cr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (ll = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ul(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bs() {
  return !0;
}
function Hm() {
  return !1;
}
function Bt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Bs
        : Hm),
      (this.isPropagationStopped = Hm),
      this
    );
  }
  return (
    Me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bs));
      },
      persist: function () {},
      isPersistent: Bs,
    }),
    t
  );
}
var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rh = Bt(Ii),
  ss = Me({}, Ii, { view: 0, detail: 0 }),
  FE = Bt(ss),
  Nc,
  Dc,
  Gi,
  ku = Me({}, ss, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ih,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gi &&
            (Gi && e.type === "mousemove"
              ? ((Nc = e.screenX - Gi.screenX), (Dc = e.screenY - Gi.screenY))
              : (Dc = Nc = 0),
            (Gi = e)),
          Nc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Dc;
    },
  }),
  zm = Bt(ku),
  VE = Me({}, ku, { dataTransfer: 0 }),
  $E = Bt(VE),
  BE = Me({}, ss, { relatedTarget: 0 }),
  Lc = Bt(BE),
  HE = Me({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zE = Bt(HE),
  UE = Me({}, Ii, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  WE = Bt(UE),
  KE = Me({}, Ii, { data: 0 }),
  Um = Bt(KE),
  ZE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  GE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  YE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function XE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = YE[e]) ? !!t[e] : !1;
}
function Ih() {
  return XE;
}
var qE = Me({}, ss, {
    key: function (e) {
      if (e.key) {
        var t = ZE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ul(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? GE[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ih,
    charCode: function (e) {
      return e.type === "keypress" ? ul(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ul(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  JE = Bt(qE),
  QE = Me({}, ku, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wm = Bt(QE),
  eC = Me({}, ss, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ih,
  }),
  tC = Bt(eC),
  nC = Me({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rC = Bt(nC),
  oC = Me({}, ku, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  iC = Bt(oC),
  aC = [9, 13, 27, 32],
  Nh = or && "CompositionEvent" in window,
  ga = null;
or && "documentMode" in document && (ga = document.documentMode);
var sC = or && "TextEvent" in window && !ga,
  Ay = or && (!Nh || (ga && 8 < ga && 11 >= ga)),
  Km = " ",
  Zm = !1;
function jy(e, t) {
  switch (e) {
    case "keyup":
      return aC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function My(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ko = !1;
function lC(e, t) {
  switch (e) {
    case "compositionend":
      return My(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zm = !0), Km);
    case "textInput":
      return (e = t.data), e === Km && Zm ? null : e;
    default:
      return null;
  }
}
function uC(e, t) {
  if (Ko)
    return e === "compositionend" || (!Nh && jy(e, t))
      ? ((e = _y()), (ll = Mh = Cr = null), (Ko = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ay && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cC[e.type] : t === "textarea";
}
function Ry(e, t, n, r) {
  cy(r),
    (t = Ll(t, "onChange")),
    0 < t.length &&
      ((n = new Rh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var va = null,
  La = null;
function dC(e) {
  Uy(e, 0);
}
function Eu(e) {
  var t = Yo(e);
  if (ry(t)) return e;
}
function fC(e, t) {
  if (e === "change") return t;
}
var Iy = !1;
if (or) {
  var Fc;
  if (or) {
    var Vc = "oninput" in document;
    if (!Vc) {
      var Ym = document.createElement("div");
      Ym.setAttribute("oninput", "return;"),
        (Vc = typeof Ym.oninput == "function");
    }
    Fc = Vc;
  } else Fc = !1;
  Iy = Fc && (!document.documentMode || 9 < document.documentMode);
}
function Xm() {
  va && (va.detachEvent("onpropertychange", Ny), (La = va = null));
}
function Ny(e) {
  if (e.propertyName === "value" && Eu(La)) {
    var t = [];
    Ry(t, La, e, Ph(e)), py(dC, t);
  }
}
function hC(e, t, n) {
  e === "focusin"
    ? (Xm(), (va = t), (La = n), va.attachEvent("onpropertychange", Ny))
    : e === "focusout" && Xm();
}
function pC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Eu(La);
}
function mC(e, t) {
  if (e === "click") return Eu(t);
}
function gC(e, t) {
  if (e === "input" || e === "change") return Eu(t);
}
function vC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wn = typeof Object.is == "function" ? Object.is : vC;
function Fa(e, t) {
  if (wn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Id.call(t, o) || !wn(e[o], t[o])) return !1;
  }
  return !0;
}
function qm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jm(e, t) {
  var n = qm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qm(n);
  }
}
function Dy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ly() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Al(e.document);
  }
  return t;
}
function Dh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function yC(e) {
  var t = Ly(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Jm(n, i));
        var a = Jm(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var wC = or && "documentMode" in document && 11 >= document.documentMode,
  Zo = null,
  Qd = null,
  ya = null,
  ef = !1;
function Qm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ef ||
    Zo == null ||
    Zo !== Al(r) ||
    ((r = Zo),
    "selectionStart" in r && Dh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ya && Fa(ya, r)) ||
      ((ya = r),
      (r = Ll(Qd, "onSelect")),
      0 < r.length &&
        ((t = new Rh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zo))));
}
function Hs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Go = {
    animationend: Hs("Animation", "AnimationEnd"),
    animationiteration: Hs("Animation", "AnimationIteration"),
    animationstart: Hs("Animation", "AnimationStart"),
    transitionend: Hs("Transition", "TransitionEnd"),
  },
  $c = {},
  Fy = {};
or &&
  ((Fy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Go.animationend.animation,
    delete Go.animationiteration.animation,
    delete Go.animationstart.animation),
  "TransitionEvent" in window || delete Go.transitionend.transition);
function Cu(e) {
  if ($c[e]) return $c[e];
  if (!Go[e]) return e;
  var t = Go[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fy) return ($c[e] = t[n]);
  return e;
}
var Vy = Cu("animationend"),
  $y = Cu("animationiteration"),
  By = Cu("animationstart"),
  Hy = Cu("transitionend"),
  zy = new Map(),
  e0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Br(e, t) {
  zy.set(e, t), Ao(t, [e]);
}
for (var Bc = 0; Bc < e0.length; Bc++) {
  var Hc = e0[Bc],
    xC = Hc.toLowerCase(),
    SC = Hc[0].toUpperCase() + Hc.slice(1);
  Br(xC, "on" + SC);
}
Br(Vy, "onAnimationEnd");
Br($y, "onAnimationIteration");
Br(By, "onAnimationStart");
Br("dblclick", "onDoubleClick");
Br("focusin", "onFocus");
Br("focusout", "onBlur");
Br(Hy, "onTransitionEnd");
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
Ao(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ao(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ao("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ao(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ao(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ao(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ca =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bC = new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));
function t0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xE(r, t, void 0, e), (e.currentTarget = null);
}
function Uy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          t0(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          t0(o, s, u), (i = l);
        }
    }
  }
  if (Ml) throw ((e = Yd), (Ml = !1), (Yd = null), e);
}
function ye(e, t) {
  var n = t[af];
  n === void 0 && (n = t[af] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wy(t, e, 2, !1), n.add(r));
}
function zc(e, t, n) {
  var r = 0;
  t && (r |= 4), Wy(n, e, r, t);
}
var zs = "_reactListening" + Math.random().toString(36).slice(2);
function Va(e) {
  if (!e[zs]) {
    (e[zs] = !0),
      Jv.forEach(function (n) {
        n !== "selectionchange" && (bC.has(n) || zc(n, !1, e), zc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zs] || ((t[zs] = !0), zc("selectionchange", !1, t));
  }
}
function Wy(e, t, n, r) {
  switch (Oy(t)) {
    case 1:
      var o = DE;
      break;
    case 4:
      o = LE;
      break;
    default:
      o = jh;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Gd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Uc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = so(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  py(function () {
    var u = i,
      c = Ph(n),
      d = [];
    e: {
      var f = zy.get(e);
      if (f !== void 0) {
        var h = Rh,
          m = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = JE;
            break;
          case "focusin":
            (m = "focus"), (h = Lc);
            break;
          case "focusout":
            (m = "blur"), (h = Lc);
            break;
          case "beforeblur":
          case "afterblur":
            h = Lc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = zm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = $E;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = tC;
            break;
          case Vy:
          case $y:
          case By:
            h = zE;
            break;
          case Hy:
            h = rC;
            break;
          case "scroll":
            h = FE;
            break;
          case "wheel":
            h = iC;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = WE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Wm;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          g = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = u, w; p !== null; ) {
          w = p;
          var S = w.stateNode;
          if (
            (w.tag === 5 &&
              S !== null &&
              ((w = S),
              g !== null && ((S = Ra(p, g)), S != null && v.push($a(p, S, w)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new h(f, m, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Kd &&
            (m = n.relatedTarget || n.fromElement) &&
            (so(m) || m[ir]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((m = n.relatedTarget || n.toElement),
              (h = u),
              (m = m ? so(m) : null),
              m !== null &&
                ((x = jo(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((h = null), (m = u)),
          h !== m)
        ) {
          if (
            ((v = zm),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Wm),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (x = h == null ? f : Yo(h)),
            (w = m == null ? f : Yo(m)),
            (f = new v(S, p + "leave", h, n, c)),
            (f.target = x),
            (f.relatedTarget = w),
            (S = null),
            so(c) === u &&
              ((v = new v(g, p + "enter", m, n, c)),
              (v.target = w),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            h && m)
          )
            t: {
              for (v = h, g = m, p = 0, w = v; w; w = Lo(w)) p++;
              for (w = 0, S = g; S; S = Lo(S)) w++;
              for (; 0 < p - w; ) (v = Lo(v)), p--;
              for (; 0 < w - p; ) (g = Lo(g)), w--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Lo(v)), (g = Lo(g));
              }
              v = null;
            }
          else v = null;
          h !== null && n0(d, f, h, v, !1),
            m !== null && x !== null && n0(d, x, m, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Yo(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = fC;
        else if (Gm(f))
          if (Iy) C = gC;
          else {
            C = pC;
            var _ = hC;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = mC);
        if (C && (C = C(e, u))) {
          Ry(d, C, n, c);
          break e;
        }
        _ && _(e, f, u),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            Bd(f, "number", f.value);
      }
      switch (((_ = u ? Yo(u) : window), e)) {
        case "focusin":
          (Gm(_) || _.contentEditable === "true") &&
            ((Zo = _), (Qd = u), (ya = null));
          break;
        case "focusout":
          ya = Qd = Zo = null;
          break;
        case "mousedown":
          ef = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ef = !1), Qm(d, n, c);
          break;
        case "selectionchange":
          if (wC) break;
        case "keydown":
        case "keyup":
          Qm(d, n, c);
      }
      var E;
      if (Nh)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Ko
          ? jy(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (Ay &&
          n.locale !== "ko" &&
          (Ko || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Ko && (E = _y())
            : ((Cr = c),
              (Mh = "value" in Cr ? Cr.value : Cr.textContent),
              (Ko = !0))),
        (_ = Ll(u, A)),
        0 < _.length &&
          ((A = new Um(A, e, null, n, c)),
          d.push({ event: A, listeners: _ }),
          E ? (A.data = E) : ((E = My(n)), E !== null && (A.data = E)))),
        (E = sC ? lC(e, n) : uC(e, n)) &&
          ((u = Ll(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Um("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Uy(d, t);
  });
}
function $a(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ra(e, n)),
      i != null && r.unshift($a(e, i, o)),
      (i = Ra(e, t)),
      i != null && r.push($a(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Lo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function n0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Ra(n, i)), l != null && a.unshift($a(n, l, s)))
        : o || ((l = Ra(n, i)), l != null && a.push($a(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var kC = /\r\n?/g,
  EC = /\u0000|\uFFFD/g;
function r0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      kC,
      `
`
    )
    .replace(EC, "");
}
function Us(e, t, n) {
  if (((t = r0(t)), r0(e) !== t && n)) throw Error(L(425));
}
function Fl() {}
var tf = null,
  nf = null;
function rf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var of = typeof setTimeout == "function" ? setTimeout : void 0,
  CC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  o0 = typeof Promise == "function" ? Promise : void 0,
  TC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof o0 < "u"
      ? function (e) {
          return o0.resolve(null).then(e).catch(PC);
        }
      : of;
function PC(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Da(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Da(t);
}
function Mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function i0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ni = Math.random().toString(36).slice(2),
  _n = "__reactFiber$" + Ni,
  Ba = "__reactProps$" + Ni,
  ir = "__reactContainer$" + Ni,
  af = "__reactEvents$" + Ni,
  OC = "__reactListeners$" + Ni,
  _C = "__reactHandles$" + Ni;
function so(e) {
  var t = e[_n];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ir] || n[_n])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = i0(e); e !== null; ) {
          if ((n = e[_n])) return n;
          e = i0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ls(e) {
  return (
    (e = e[_n] || e[ir]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Tu(e) {
  return e[Ba] || null;
}
var sf = [],
  Xo = -1;
function Hr(e) {
  return { current: e };
}
function xe(e) {
  0 > Xo || ((e.current = sf[Xo]), (sf[Xo] = null), Xo--);
}
function ge(e, t) {
  Xo++, (sf[Xo] = e.current), (e.current = t);
}
var Fr = {},
  lt = Hr(Fr),
  xt = Hr(!1),
  So = Fr;
function vi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Fr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function St(e) {
  return (e = e.childContextTypes), e != null;
}
function Vl() {
  xe(xt), xe(lt);
}
function a0(e, t, n) {
  if (lt.current !== Fr) throw Error(L(168));
  ge(lt, t), ge(xt, n);
}
function Ky(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, hE(e) || "Unknown", o));
  return Me({}, n, r);
}
function $l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fr),
    (So = lt.current),
    ge(lt, e),
    ge(xt, xt.current),
    !0
  );
}
function s0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Ky(e, t, So)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      xe(xt),
      xe(lt),
      ge(lt, e))
    : xe(xt),
    ge(xt, n);
}
var Zn = null,
  Pu = !1,
  Kc = !1;
function Zy(e) {
  Zn === null ? (Zn = [e]) : Zn.push(e);
}
function AC(e) {
  (Pu = !0), Zy(e);
}
function zr() {
  if (!Kc && Zn !== null) {
    Kc = !0;
    var e = 0,
      t = he;
    try {
      var n = Zn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Zn = null), (Pu = !1);
    } catch (o) {
      throw (Zn !== null && (Zn = Zn.slice(e + 1)), yy(Oh, zr), o);
    } finally {
      (he = t), (Kc = !1);
    }
  }
  return null;
}
var qo = [],
  Jo = 0,
  Bl = null,
  Hl = 0,
  Jt = [],
  Qt = 0,
  bo = null,
  Yn = 1,
  Xn = "";
function eo(e, t) {
  (qo[Jo++] = Hl), (qo[Jo++] = Bl), (Bl = e), (Hl = t);
}
function Gy(e, t, n) {
  (Jt[Qt++] = Yn), (Jt[Qt++] = Xn), (Jt[Qt++] = bo), (bo = e);
  var r = Yn;
  e = Xn;
  var o = 32 - vn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - vn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Yn = (1 << (32 - vn(t) + o)) | (n << o) | r),
      (Xn = i + e);
  } else (Yn = (1 << i) | (n << o) | r), (Xn = e);
}
function Lh(e) {
  e.return !== null && (eo(e, 1), Gy(e, 1, 0));
}
function Fh(e) {
  for (; e === Bl; )
    (Bl = qo[--Jo]), (qo[Jo] = null), (Hl = qo[--Jo]), (qo[Jo] = null);
  for (; e === bo; )
    (bo = Jt[--Qt]),
      (Jt[Qt] = null),
      (Xn = Jt[--Qt]),
      (Jt[Qt] = null),
      (Yn = Jt[--Qt]),
      (Jt[Qt] = null);
}
var It = null,
  Rt = null,
  Ce = !1,
  mn = null;
function Yy(e, t) {
  var n = en(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function l0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (It = e), (Rt = Mr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (It = e), (Rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bo !== null ? { id: Yn, overflow: Xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = en(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (It = e),
            (Rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function lf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uf(e) {
  if (Ce) {
    var t = Rt;
    if (t) {
      var n = t;
      if (!l0(e, t)) {
        if (lf(e)) throw Error(L(418));
        t = Mr(n.nextSibling);
        var r = It;
        t && l0(e, t)
          ? Yy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ce = !1), (It = e));
      }
    } else {
      if (lf(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Ce = !1), (It = e);
    }
  }
}
function u0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  It = e;
}
function Ws(e) {
  if (e !== It) return !1;
  if (!Ce) return u0(e), (Ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rf(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (lf(e)) throw (Xy(), Error(L(418)));
    for (; t; ) Yy(e, t), (t = Mr(t.nextSibling));
  }
  if ((u0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Rt = Mr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Rt = null;
    }
  } else Rt = It ? Mr(e.stateNode.nextSibling) : null;
  return !0;
}
function Xy() {
  for (var e = Rt; e; ) e = Mr(e.nextSibling);
}
function yi() {
  (Rt = It = null), (Ce = !1);
}
function Vh(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
var jC = cr.ReactCurrentBatchConfig;
function hn(e, t) {
  if (e && e.defaultProps) {
    (t = Me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var zl = Hr(null),
  Ul = null,
  Qo = null,
  $h = null;
function Bh() {
  $h = Qo = Ul = null;
}
function Hh(e) {
  var t = zl.current;
  xe(zl), (e._currentValue = t);
}
function cf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ci(e, t) {
  (Ul = e),
    ($h = Qo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (wt = !0), (e.firstContext = null));
}
function on(e) {
  var t = e._currentValue;
  if ($h !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qo === null)) {
      if (Ul === null) throw Error(L(308));
      (Qo = e), (Ul.dependencies = { lanes: 0, firstContext: e });
    } else Qo = Qo.next = e;
  return t;
}
var lo = null;
function zh(e) {
  lo === null ? (lo = [e]) : lo.push(e);
}
function qy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), zh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ar(e, r)
  );
}
function ar(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wr = !1;
function Uh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Rr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ar(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), zh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ar(e, n)
  );
}
function cl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _h(e, n);
  }
}
function c0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Wl(e, t, n, r) {
  var o = e.updateQueue;
  wr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            v = s;
          switch (((f = t), (h = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                d = m.call(h, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (f = typeof m == "function" ? m.call(h, d, f) : m),
                f == null)
              )
                break e;
              d = Me({}, d, f);
              break e;
            case 2:
              wr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Eo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function d0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Qy = new qv.Component().refs;
function df(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ou = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = Nr(e),
      i = Qn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Rr(e, i, o)),
      t !== null && (yn(t, e, o, r), cl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = Nr(e),
      i = Qn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Rr(e, i, o)),
      t !== null && (yn(t, e, o, r), cl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ft(),
      r = Nr(e),
      o = Qn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Rr(e, o, r)),
      t !== null && (yn(t, e, r, n), cl(t, e, r));
  },
};
function f0(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fa(n, r) || !Fa(o, i)
      : !0
  );
}
function ew(e, t, n) {
  var r = !1,
    o = Fr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = on(i))
      : ((o = St(t) ? So : lt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? vi(e, o) : Fr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ou),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function h0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ou.enqueueReplaceState(t, t.state, null);
}
function ff(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Qy), Uh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = on(i))
    : ((i = St(t) ? So : lt.current), (o.context = vi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (df(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ou.enqueueReplaceState(o, o.state, null),
      Wl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === Qy && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ks(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function p0(e) {
  var t = e._init;
  return t(e._payload);
}
function tw(e) {
  function t(g, p) {
    if (e) {
      var w = g.deletions;
      w === null ? ((g.deletions = [p]), (g.flags |= 16)) : w.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function o(g, p) {
    return (g = Dr(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, p, w) {
    return (
      (g.index = w),
      e
        ? ((w = g.alternate),
          w !== null
            ? ((w = w.index), w < p ? ((g.flags |= 2), p) : w)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, p, w, S) {
    return p === null || p.tag !== 6
      ? ((p = Qc(w, g.mode, S)), (p.return = g), p)
      : ((p = o(p, w)), (p.return = g), p);
  }
  function l(g, p, w, S) {
    var C = w.type;
    return C === Wo
      ? c(g, p, w.props.children, S, w.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === yr &&
            p0(C) === p.type))
      ? ((S = o(p, w.props)), (S.ref = Yi(g, p, w)), (S.return = g), S)
      : ((S = gl(w.type, w.key, w.props, null, g.mode, S)),
        (S.ref = Yi(g, p, w)),
        (S.return = g),
        S);
  }
  function u(g, p, w, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== w.containerInfo ||
      p.stateNode.implementation !== w.implementation
      ? ((p = ed(w, g.mode, S)), (p.return = g), p)
      : ((p = o(p, w.children || [])), (p.return = g), p);
  }
  function c(g, p, w, S, C) {
    return p === null || p.tag !== 7
      ? ((p = po(w, g.mode, S, C)), (p.return = g), p)
      : ((p = o(p, w)), (p.return = g), p);
  }
  function d(g, p, w) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Qc("" + p, g.mode, w)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ns:
          return (
            (w = gl(p.type, p.key, p.props, null, g.mode, w)),
            (w.ref = Yi(g, null, p)),
            (w.return = g),
            w
          );
        case Uo:
          return (p = ed(p, g.mode, w)), (p.return = g), p;
        case yr:
          var S = p._init;
          return d(g, S(p._payload), w);
      }
      if (la(p) || Ui(p))
        return (p = po(p, g.mode, w, null)), (p.return = g), p;
      Ks(g, p);
    }
    return null;
  }
  function f(g, p, w, S) {
    var C = p !== null ? p.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return C !== null ? null : s(g, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ns:
          return w.key === C ? l(g, p, w, S) : null;
        case Uo:
          return w.key === C ? u(g, p, w, S) : null;
        case yr:
          return (C = w._init), f(g, p, C(w._payload), S);
      }
      if (la(w) || Ui(w)) return C !== null ? null : c(g, p, w, S, null);
      Ks(g, w);
    }
    return null;
  }
  function h(g, p, w, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(w) || null), s(p, g, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ns:
          return (g = g.get(S.key === null ? w : S.key) || null), l(p, g, S, C);
        case Uo:
          return (g = g.get(S.key === null ? w : S.key) || null), u(p, g, S, C);
        case yr:
          var _ = S._init;
          return h(g, p, w, _(S._payload), C);
      }
      if (la(S) || Ui(S)) return (g = g.get(w) || null), c(p, g, S, C, null);
      Ks(p, S);
    }
    return null;
  }
  function m(g, p, w, S) {
    for (
      var C = null, _ = null, E = p, A = (p = 0), R = null;
      E !== null && A < w.length;
      A++
    ) {
      E.index > A ? ((R = E), (E = null)) : (R = E.sibling);
      var M = f(g, E, w[A], S);
      if (M === null) {
        E === null && (E = R);
        break;
      }
      e && E && M.alternate === null && t(g, E),
        (p = i(M, p, A)),
        _ === null ? (C = M) : (_.sibling = M),
        (_ = M),
        (E = R);
    }
    if (A === w.length) return n(g, E), Ce && eo(g, A), C;
    if (E === null) {
      for (; A < w.length; A++)
        (E = d(g, w[A], S)),
          E !== null &&
            ((p = i(E, p, A)), _ === null ? (C = E) : (_.sibling = E), (_ = E));
      return Ce && eo(g, A), C;
    }
    for (E = r(g, E); A < w.length; A++)
      (R = h(E, g, A, w[A], S)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? A : R.key),
          (p = i(R, p, A)),
          _ === null ? (C = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        E.forEach(function (B) {
          return t(g, B);
        }),
      Ce && eo(g, A),
      C
    );
  }
  function v(g, p, w, S) {
    var C = Ui(w);
    if (typeof C != "function") throw Error(L(150));
    if (((w = C.call(w)), w == null)) throw Error(L(151));
    for (
      var _ = (C = null), E = p, A = (p = 0), R = null, M = w.next();
      E !== null && !M.done;
      A++, M = w.next()
    ) {
      E.index > A ? ((R = E), (E = null)) : (R = E.sibling);
      var B = f(g, E, M.value, S);
      if (B === null) {
        E === null && (E = R);
        break;
      }
      e && E && B.alternate === null && t(g, E),
        (p = i(B, p, A)),
        _ === null ? (C = B) : (_.sibling = B),
        (_ = B),
        (E = R);
    }
    if (M.done) return n(g, E), Ce && eo(g, A), C;
    if (E === null) {
      for (; !M.done; A++, M = w.next())
        (M = d(g, M.value, S)),
          M !== null &&
            ((p = i(M, p, A)), _ === null ? (C = M) : (_.sibling = M), (_ = M));
      return Ce && eo(g, A), C;
    }
    for (E = r(g, E); !M.done; A++, M = w.next())
      (M = h(E, g, A, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? A : M.key),
          (p = i(M, p, A)),
          _ === null ? (C = M) : (_.sibling = M),
          (_ = M));
    return (
      e &&
        E.forEach(function (K) {
          return t(g, K);
        }),
      Ce && eo(g, A),
      C
    );
  }
  function x(g, p, w, S) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Wo &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ns:
          e: {
            for (var C = w.key, _ = p; _ !== null; ) {
              if (_.key === C) {
                if (((C = w.type), C === Wo)) {
                  if (_.tag === 7) {
                    n(g, _.sibling),
                      (p = o(_, w.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === yr &&
                    p0(C) === _.type)
                ) {
                  n(g, _.sibling),
                    (p = o(_, w.props)),
                    (p.ref = Yi(g, _, w)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            w.type === Wo
              ? ((p = po(w.props.children, g.mode, S, w.key)),
                (p.return = g),
                (g = p))
              : ((S = gl(w.type, w.key, w.props, null, g.mode, S)),
                (S.ref = Yi(g, p, w)),
                (S.return = g),
                (g = S));
          }
          return a(g);
        case Uo:
          e: {
            for (_ = w.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === w.containerInfo &&
                  p.stateNode.implementation === w.implementation
                ) {
                  n(g, p.sibling),
                    (p = o(p, w.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = ed(w, g.mode, S)), (p.return = g), (g = p);
          }
          return a(g);
        case yr:
          return (_ = w._init), x(g, p, _(w._payload), S);
      }
      if (la(w)) return m(g, p, w, S);
      if (Ui(w)) return v(g, p, w, S);
      Ks(g, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = o(p, w)), (p.return = g), (g = p))
          : (n(g, p), (p = Qc(w, g.mode, S)), (p.return = g), (g = p)),
        a(g))
      : n(g, p);
  }
  return x;
}
var wi = tw(!0),
  nw = tw(!1),
  us = {},
  Nn = Hr(us),
  Ha = Hr(us),
  za = Hr(us);
function uo(e) {
  if (e === us) throw Error(L(174));
  return e;
}
function Wh(e, t) {
  switch ((ge(za, t), ge(Ha, e), ge(Nn, us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zd(t, e));
  }
  xe(Nn), ge(Nn, t);
}
function xi() {
  xe(Nn), xe(Ha), xe(za);
}
function rw(e) {
  uo(za.current);
  var t = uo(Nn.current),
    n = zd(t, e.type);
  t !== n && (ge(Ha, e), ge(Nn, n));
}
function Kh(e) {
  Ha.current === e && (xe(Nn), xe(Ha));
}
var Pe = Hr(0);
function Kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Zc = [];
function Zh() {
  for (var e = 0; e < Zc.length; e++)
    Zc[e]._workInProgressVersionPrimary = null;
  Zc.length = 0;
}
var dl = cr.ReactCurrentDispatcher,
  Gc = cr.ReactCurrentBatchConfig,
  ko = 0,
  Ae = null,
  ze = null,
  We = null,
  Zl = !1,
  wa = !1,
  Ua = 0,
  MC = 0;
function nt() {
  throw Error(L(321));
}
function Gh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wn(e[n], t[n])) return !1;
  return !0;
}
function Yh(e, t, n, r, o, i) {
  if (
    ((ko = i),
    (Ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (dl.current = e === null || e.memoizedState === null ? DC : LC),
    (e = n(r, o)),
    wa)
  ) {
    i = 0;
    do {
      if (((wa = !1), (Ua = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (We = ze = null),
        (t.updateQueue = null),
        (dl.current = FC),
        (e = n(r, o));
    } while (wa);
  }
  if (
    ((dl.current = Gl),
    (t = ze !== null && ze.next !== null),
    (ko = 0),
    (We = ze = Ae = null),
    (Zl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Xh() {
  var e = Ua !== 0;
  return (Ua = 0), e;
}
function Cn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return We === null ? (Ae.memoizedState = We = e) : (We = We.next = e), We;
}
function an() {
  if (ze === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ze.next;
  var t = We === null ? Ae.memoizedState : We.next;
  if (t !== null) (We = t), (ze = e);
  else {
    if (e === null) throw Error(L(310));
    (ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      We === null ? (Ae.memoizedState = We = e) : (We = We.next = e);
  }
  return We;
}
function Wa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yc(e) {
  var t = an(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ze,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((ko & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Ae.lanes |= c),
          (Eo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      wn(r, t.memoizedState) || (wt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ae.lanes |= i), (Eo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xc(e) {
  var t = an(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    wn(i, t.memoizedState) || (wt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ow() {}
function iw(e, t) {
  var n = Ae,
    r = an(),
    o = t(),
    i = !wn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (wt = !0)),
    (r = r.queue),
    qh(lw.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ka(9, sw.bind(null, n, r, o, t), void 0, null),
      Ke === null)
    )
      throw Error(L(349));
    ko & 30 || aw(n, t, o);
  }
  return o;
}
function aw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uw(t) && cw(e);
}
function lw(e, t, n) {
  return n(function () {
    uw(t) && cw(e);
  });
}
function uw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wn(e, n);
  } catch {
    return !0;
  }
}
function cw(e) {
  var t = ar(e, 1);
  t !== null && yn(t, e, 1, -1);
}
function m0(e) {
  var t = Cn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = NC.bind(null, Ae, e)),
    [t.memoizedState, e]
  );
}
function Ka(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dw() {
  return an().memoizedState;
}
function fl(e, t, n, r) {
  var o = Cn();
  (Ae.flags |= e),
    (o.memoizedState = Ka(1 | t, n, void 0, r === void 0 ? null : r));
}
function _u(e, t, n, r) {
  var o = an();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ze !== null) {
    var a = ze.memoizedState;
    if (((i = a.destroy), r !== null && Gh(r, a.deps))) {
      o.memoizedState = Ka(t, n, i, r);
      return;
    }
  }
  (Ae.flags |= e), (o.memoizedState = Ka(1 | t, n, i, r));
}
function g0(e, t) {
  return fl(8390656, 8, e, t);
}
function qh(e, t) {
  return _u(2048, 8, e, t);
}
function fw(e, t) {
  return _u(4, 2, e, t);
}
function hw(e, t) {
  return _u(4, 4, e, t);
}
function pw(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _u(4, 4, pw.bind(null, t, e), n)
  );
}
function Jh() {}
function gw(e, t) {
  var n = an();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vw(e, t) {
  var n = an();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yw(e, t, n) {
  return ko & 21
    ? (wn(n, t) || ((n = Sy()), (Ae.lanes |= n), (Eo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
}
function RC(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gc.transition;
  Gc.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (Gc.transition = r);
  }
}
function ww() {
  return an().memoizedState;
}
function IC(e, t, n) {
  var r = Nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xw(e))
  )
    Sw(t, n);
  else if (((n = qy(e, t, n, r)), n !== null)) {
    var o = ft();
    yn(n, e, r, o), bw(n, t, r);
  }
}
function NC(e, t, n) {
  var r = Nr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xw(e)) Sw(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), wn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), zh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = qy(e, t, o, r)),
      n !== null && ((o = ft()), yn(n, e, r, o), bw(n, t, r));
  }
}
function xw(e) {
  var t = e.alternate;
  return e === Ae || (t !== null && t === Ae);
}
function Sw(e, t) {
  wa = Zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _h(e, n);
  }
}
var Gl = {
    readContext: on,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useInsertionEffect: nt,
    useLayoutEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useMutableSource: nt,
    useSyncExternalStore: nt,
    useId: nt,
    unstable_isNewReconciler: !1,
  },
  DC = {
    readContext: on,
    useCallback: function (e, t) {
      return (Cn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: on,
    useEffect: g0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fl(4194308, 4, pw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Cn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Cn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = IC.bind(null, Ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Cn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: m0,
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      return (Cn().memoizedState = e);
    },
    useTransition: function () {
      var e = m0(!1),
        t = e[0];
      return (e = RC.bind(null, e[1])), (Cn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ae,
        o = Cn();
      if (Ce) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ke === null)) throw Error(L(349));
        ko & 30 || aw(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        g0(lw.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ka(9, sw.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Cn(),
        t = Ke.identifierPrefix;
      if (Ce) {
        var n = Xn,
          r = Yn;
        (n = (r & ~(1 << (32 - vn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ua++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = MC++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  LC = {
    readContext: on,
    useCallback: gw,
    useContext: on,
    useEffect: qh,
    useImperativeHandle: mw,
    useInsertionEffect: fw,
    useLayoutEffect: hw,
    useMemo: vw,
    useReducer: Yc,
    useRef: dw,
    useState: function () {
      return Yc(Wa);
    },
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      var t = an();
      return yw(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Yc(Wa)[0],
        t = an().memoizedState;
      return [e, t];
    },
    useMutableSource: ow,
    useSyncExternalStore: iw,
    useId: ww,
    unstable_isNewReconciler: !1,
  },
  FC = {
    readContext: on,
    useCallback: gw,
    useContext: on,
    useEffect: qh,
    useImperativeHandle: mw,
    useInsertionEffect: fw,
    useLayoutEffect: hw,
    useMemo: vw,
    useReducer: Xc,
    useRef: dw,
    useState: function () {
      return Xc(Wa);
    },
    useDebugValue: Jh,
    useDeferredValue: function (e) {
      var t = an();
      return ze === null ? (t.memoizedState = e) : yw(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Xc(Wa)[0],
        t = an().memoizedState;
      return [e, t];
    },
    useMutableSource: ow,
    useSyncExternalStore: iw,
    useId: ww,
    unstable_isNewReconciler: !1,
  };
function Si(e, t) {
  try {
    var n = "",
      r = t;
    do (n += fE(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function qc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var VC = typeof WeakMap == "function" ? WeakMap : Map;
function kw(e, t, n) {
  (n = Qn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xl || ((Xl = !0), (kf = r)), hf(e, t);
    }),
    n
  );
}
function Ew(e, t, n) {
  (n = Qn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        hf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        hf(e, t),
          typeof r != "function" &&
            (Ir === null ? (Ir = new Set([this])) : Ir.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function v0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new VC();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = QC.bind(null, e, t, n)), t.then(e, e));
}
function y0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function w0(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qn(-1, 1)), (t.tag = 2), Rr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $C = cr.ReactCurrentOwner,
  wt = !1;
function dt(e, t, n, r) {
  t.child = e === null ? nw(t, null, n, r) : wi(t, e.child, n, r);
}
function x0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ci(t, o),
    (r = Yh(e, t, n, r, i, o)),
    (n = Xh()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        sr(e, t, o))
      : (Ce && n && Lh(t), (t.flags |= 1), dt(e, t, r, o), t.child)
  );
}
function S0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ap(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cw(e, t, i, r, o))
      : ((e = gl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fa), n(a, r) && e.ref === t.ref)
    )
      return sr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Dr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fa(i, r) && e.ref === t.ref)
      if (((wt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (wt = !0);
      else return (t.lanes = e.lanes), sr(e, t, o);
  }
  return pf(e, t, n, r, o);
}
function Tw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ge(ti, At),
        (At |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ge(ti, At),
          (At |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ge(ti, At),
        (At |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ge(ti, At),
      (At |= r);
  return dt(e, t, o, n), t.child;
}
function Pw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function pf(e, t, n, r, o) {
  var i = St(n) ? So : lt.current;
  return (
    (i = vi(t, i)),
    ci(t, o),
    (n = Yh(e, t, n, r, i, o)),
    (r = Xh()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        sr(e, t, o))
      : (Ce && r && Lh(t), (t.flags |= 1), dt(e, t, n, o), t.child)
  );
}
function b0(e, t, n, r, o) {
  if (St(n)) {
    var i = !0;
    $l(t);
  } else i = !1;
  if ((ci(t, o), t.stateNode === null))
    hl(e, t), ew(t, n, r), ff(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = on(u))
      : ((u = St(n) ? So : lt.current), (u = vi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && h0(t, a, r, u)),
      (wr = !1);
    var f = t.memoizedState;
    (a.state = f),
      Wl(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || xt.current || wr
        ? (typeof c == "function" && (df(t, n, c, r), (l = t.memoizedState)),
          (s = wr || f0(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Jy(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : hn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = on(l))
        : ((l = St(n) ? So : lt.current), (l = vi(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && h0(t, a, r, l)),
      (wr = !1),
      (f = t.memoizedState),
      (a.state = f),
      Wl(t, r, a, o);
    var m = t.memoizedState;
    s !== d || f !== m || xt.current || wr
      ? (typeof h == "function" && (df(t, n, h, r), (m = t.memoizedState)),
        (u = wr || f0(t, n, u, r, f, m, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, m, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, m, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (a.props = r),
        (a.state = m),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mf(e, t, n, r, i, o);
}
function mf(e, t, n, r, o, i) {
  Pw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && s0(t, n, !1), sr(e, t, i);
  (r = t.stateNode), ($C.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = wi(t, e.child, null, i)), (t.child = wi(t, null, s, i)))
      : dt(e, t, s, i),
    (t.memoizedState = r.state),
    o && s0(t, n, !0),
    t.child
  );
}
function Ow(e) {
  var t = e.stateNode;
  t.pendingContext
    ? a0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && a0(e, t.context, !1),
    Wh(e, t.containerInfo);
}
function k0(e, t, n, r, o) {
  return yi(), Vh(o), (t.flags |= 256), dt(e, t, n, r), t.child;
}
var gf = { dehydrated: null, treeContext: null, retryLane: 0 };
function vf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _w(e, t, n) {
  var r = t.pendingProps,
    o = Pe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ge(Pe, o & 1),
    e === null)
  )
    return (
      uf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Mu(a, r, 0, null)),
              (e = po(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = vf(n)),
              (t.memoizedState = gf),
              e)
            : Qh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return BC(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Dr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Dr(s, i)) : ((i = po(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? vf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = gf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qh(e, t) {
  return (
    (t = Mu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zs(e, t, n, r) {
  return (
    r !== null && Vh(r),
    wi(t, e.child, null, n),
    (e = Qh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function BC(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qc(Error(L(422)))), Zs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Mu({ mode: "visible", children: r.children }, o, 0, null)),
        (i = po(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && wi(t, e.child, null, a),
        (t.child.memoizedState = vf(a)),
        (t.memoizedState = gf),
        i);
  if (!(t.mode & 1)) return Zs(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(L(419))), (r = qc(i, r, void 0)), Zs(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), wt || s)) {
    if (((r = Ke), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ar(e, o), yn(r, e, o, -1));
    }
    return ip(), (r = qc(Error(L(421)))), Zs(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = eT.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Rt = Mr(o.nextSibling)),
      (It = t),
      (Ce = !0),
      (mn = null),
      e !== null &&
        ((Jt[Qt++] = Yn),
        (Jt[Qt++] = Xn),
        (Jt[Qt++] = bo),
        (Yn = e.id),
        (Xn = e.overflow),
        (bo = t)),
      (t = Qh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function E0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cf(e.return, t, n);
}
function Jc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Aw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((dt(e, t, r.children, n), (r = Pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && E0(e, n, t);
        else if (e.tag === 19) E0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ge(Pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Kl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Jc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Kl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Jc(t, !0, n, null, i);
        break;
      case "together":
        Jc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function sr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Eo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function HC(e, t, n) {
  switch (t.tag) {
    case 3:
      Ow(t), yi();
      break;
    case 5:
      rw(t);
      break;
    case 1:
      St(t.type) && $l(t);
      break;
    case 4:
      Wh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ge(zl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ge(Pe, Pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? _w(e, t, n)
          : (ge(Pe, Pe.current & 1),
            (e = sr(e, t, n)),
            e !== null ? e.sibling : null);
      ge(Pe, Pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Aw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ge(Pe, Pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tw(e, t, n);
  }
  return sr(e, t, n);
}
var jw, yf, Mw, Rw;
jw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yf = function () {};
Mw = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), uo(Nn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Vd(e, o)), (r = Vd(e, r)), (i = []);
        break;
      case "select":
        (o = Me({}, o, { value: void 0 })),
          (r = Me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Hd(e, o)), (r = Hd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fl);
    }
    Ud(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ja.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ja.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ye("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Rw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xi(e, t) {
  if (!Ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zC(e, t, n) {
  var r = t.pendingProps;
  switch ((Fh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return rt(t), null;
    case 1:
      return St(t.type) && Vl(), rt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xi(),
        xe(xt),
        xe(lt),
        Zh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ws(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mn !== null && (Tf(mn), (mn = null)))),
        yf(e, t),
        rt(t),
        null
      );
    case 5:
      Kh(t);
      var o = uo(za.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mw(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return rt(t), null;
        }
        if (((e = uo(Nn.current)), Ws(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[_n] = t), (r[Ba] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ca.length; o++) ye(ca[o], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              Rm(r, i), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              Nm(r, i), ye("invalid", r);
          }
          Ud(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Us(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Us(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ja.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              Ds(r), Im(r, i, !0);
              break;
            case "textarea":
              Ds(r), Dm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Fl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ay(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[_n] = t),
            (e[Ba] = r),
            jw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Wd(n, r)), n)) {
              case "dialog":
                ye("cancel", e), ye("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ca.length; o++) ye(ca[o], e);
                o = r;
                break;
              case "source":
                ye("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", e), ye("load", e), (o = r);
                break;
              case "details":
                ye("toggle", e), (o = r);
                break;
              case "input":
                Rm(e, r), (o = Vd(e, r)), ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Me({}, r, { value: void 0 })),
                  ye("invalid", e);
                break;
              case "textarea":
                Nm(e, r), (o = Hd(e, r)), ye("invalid", e);
                break;
              default:
                o = r;
            }
            Ud(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? uy(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && sy(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ma(e, l)
                    : typeof l == "number" && Ma(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ja.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ye("scroll", e)
                      : l != null && kh(e, i, l, a));
              }
            switch (n) {
              case "input":
                Ds(e), Im(e, r, !1);
                break;
              case "textarea":
                Ds(e), Dm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ai(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ai(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return rt(t), null;
    case 6:
      if (e && t.stateNode != null) Rw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = uo(za.current)), uo(Nn.current), Ws(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_n] = t),
            (i = r.nodeValue !== n) && ((e = It), e !== null))
          )
            switch (e.tag) {
              case 3:
                Us(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Us(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_n] = t),
            (t.stateNode = r);
      }
      return rt(t), null;
    case 13:
      if (
        (xe(Pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ce && Rt !== null && t.mode & 1 && !(t.flags & 128))
          Xy(), yi(), (t.flags |= 98560), (i = !1);
        else if (((i = Ws(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[_n] = t;
          } else
            yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          rt(t), (i = !1);
        } else mn !== null && (Tf(mn), (mn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Pe.current & 1 ? Ue === 0 && (Ue = 3) : ip())),
          t.updateQueue !== null && (t.flags |= 4),
          rt(t),
          null);
    case 4:
      return (
        xi(), yf(e, t), e === null && Va(t.stateNode.containerInfo), rt(t), null
      );
    case 10:
      return Hh(t.type._context), rt(t), null;
    case 17:
      return St(t.type) && Vl(), rt(t), null;
    case 19:
      if ((xe(Pe), (i = t.memoizedState), i === null)) return rt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Xi(i, !1);
        else {
          if (Ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Kl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Xi(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ge(Pe, (Pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Fe() > bi &&
            ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ce)
            )
              return rt(t), null;
          } else
            2 * Fe() - i.renderingStartTime > bi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Fe()),
          (t.sibling = null),
          (n = Pe.current),
          ge(Pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (rt(t), null);
    case 22:
    case 23:
      return (
        op(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? At & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : rt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function UC(e, t) {
  switch ((Fh(t), t.tag)) {
    case 1:
      return (
        St(t.type) && Vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xi(),
        xe(xt),
        xe(lt),
        Zh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Kh(t), null;
    case 13:
      if (
        (xe(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        yi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return xe(Pe), null;
    case 4:
      return xi(), null;
    case 10:
      return Hh(t.type._context), null;
    case 22:
    case 23:
      return op(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gs = !1,
  st = !1,
  WC = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function ei(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(e, t, r);
      }
    else n.current = null;
}
function wf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ne(e, t, r);
  }
}
var C0 = !1;
function KC(e, t) {
  if (((tf = Nl), (e = Ly()), Dh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nf = { focusedElem: e, selectionRange: n }, Nl = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    x = m.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : hn(t.type, v),
                      x
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          Ne(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (m = C0), (C0 = !1), m;
}
function xa(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Au(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Iw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Iw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_n], delete t[Ba], delete t[af], delete t[OC], delete t[_C])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function T0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nw(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sf(e, t, n), e = e.sibling; e !== null; ) Sf(e, t, n), (e = e.sibling);
}
function bf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bf(e, t, n), e = e.sibling; e !== null; ) bf(e, t, n), (e = e.sibling);
}
var Xe = null,
  pn = !1;
function hr(e, t, n) {
  for (n = n.child; n !== null; ) Dw(e, t, n), (n = n.sibling);
}
function Dw(e, t, n) {
  if (In && typeof In.onCommitFiberUnmount == "function")
    try {
      In.onCommitFiberUnmount(bu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || ei(n, t);
    case 6:
      var r = Xe,
        o = pn;
      (Xe = null),
        hr(e, t, n),
        (Xe = r),
        (pn = o),
        Xe !== null &&
          (pn
            ? ((e = Xe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null &&
        (pn
          ? ((e = Xe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wc(e.parentNode, n)
              : e.nodeType === 1 && Wc(e, n),
            Da(e))
          : Wc(Xe, n.stateNode));
      break;
    case 4:
      (r = Xe),
        (o = pn),
        (Xe = n.stateNode.containerInfo),
        (pn = !0),
        hr(e, t, n),
        (Xe = r),
        (pn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && wf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      hr(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (ei(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ne(n, t, s);
        }
      hr(e, t, n);
      break;
    case 21:
      hr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), hr(e, t, n), (st = r))
        : hr(e, t, n);
      break;
    default:
      hr(e, t, n);
  }
}
function P0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new WC()),
      t.forEach(function (r) {
        var o = tT.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function fn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Xe = s.stateNode), (pn = !1);
              break e;
            case 3:
              (Xe = s.stateNode.containerInfo), (pn = !0);
              break e;
            case 4:
              (Xe = s.stateNode.containerInfo), (pn = !0);
              break e;
          }
          s = s.return;
        }
        if (Xe === null) throw Error(L(160));
        Dw(i, a, o), (Xe = null), (pn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Lw(t, e), (t = t.sibling);
}
function Lw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((fn(t, e), bn(e), r & 4)) {
        try {
          xa(3, e, e.return), Au(3, e);
        } catch (v) {
          Ne(e, e.return, v);
        }
        try {
          xa(5, e, e.return);
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 1:
      fn(t, e), bn(e), r & 512 && n !== null && ei(n, n.return);
      break;
    case 5:
      if (
        (fn(t, e),
        bn(e),
        r & 512 && n !== null && ei(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ma(o, "");
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && oy(o, i),
              Wd(s, a);
            var u = Wd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? uy(o, d)
                : c === "dangerouslySetInnerHTML"
                ? sy(o, d)
                : c === "children"
                ? Ma(o, d)
                : kh(o, c, d, u);
            }
            switch (s) {
              case "input":
                $d(o, i);
                break;
              case "textarea":
                iy(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? ai(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ai(o, !!i.multiple, i.defaultValue, !0)
                      : ai(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ba] = i;
          } catch (v) {
            Ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((fn(t, e), bn(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (fn(t, e), bn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Da(t.containerInfo);
        } catch (v) {
          Ne(e, e.return, v);
        }
      break;
    case 4:
      fn(t, e), bn(e);
      break;
    case 13:
      fn(t, e),
        bn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (np = Fe())),
        r & 4 && P0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((st = (u = st) || c), fn(t, e), (st = u)) : fn(t, e),
        bn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xa(4, f, f.return);
                  break;
                case 1:
                  ei(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      Ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ei(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    _0(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (V = h)) : _0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = ly("display", a)));
              } catch (v) {
                Ne(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                Ne(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      fn(t, e), bn(e), r & 4 && P0(e);
      break;
    case 21:
      break;
    default:
      fn(t, e), bn(e);
  }
}
function bn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ma(o, ""), (r.flags &= -33));
          var i = T0(e);
          bf(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = T0(e);
          Sf(e, s, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Ne(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ZC(e, t, n) {
  (V = e), Fw(e);
}
function Fw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Gs;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || st;
        s = Gs;
        var u = st;
        if (((Gs = a), (st = l) && !u))
          for (V = o; V !== null; )
            (a = V),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? A0(o)
                : l !== null
                ? ((l.return = a), (V = l))
                : A0(o);
        for (; i !== null; ) (V = i), Fw(i), (i = i.sibling);
        (V = o), (Gs = s), (st = u);
      }
      O0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : O0(e);
  }
}
function O0(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || Au(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : hn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && d0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                d0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Da(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        st || (t.flags & 512 && xf(t));
      } catch (f) {
        Ne(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function _0(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function A0(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Au(4, t);
          } catch (l) {
            Ne(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ne(t, o, l);
            }
          }
          var i = t.return;
          try {
            xf(t);
          } catch (l) {
            Ne(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            xf(t);
          } catch (l) {
            Ne(t, a, l);
          }
      }
    } catch (l) {
      Ne(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (V = s);
      break;
    }
    V = t.return;
  }
}
var GC = Math.ceil,
  Yl = cr.ReactCurrentDispatcher,
  ep = cr.ReactCurrentOwner,
  tn = cr.ReactCurrentBatchConfig,
  ae = 0,
  Ke = null,
  $e = null,
  Qe = 0,
  At = 0,
  ti = Hr(0),
  Ue = 0,
  Za = null,
  Eo = 0,
  ju = 0,
  tp = 0,
  Sa = null,
  yt = null,
  np = 0,
  bi = 1 / 0,
  Kn = null,
  Xl = !1,
  kf = null,
  Ir = null,
  Ys = !1,
  Tr = null,
  ql = 0,
  ba = 0,
  Ef = null,
  pl = -1,
  ml = 0;
function ft() {
  return ae & 6 ? Fe() : pl !== -1 ? pl : (pl = Fe());
}
function Nr(e) {
  return e.mode & 1
    ? ae & 2 && Qe !== 0
      ? Qe & -Qe
      : jC.transition !== null
      ? (ml === 0 && (ml = Sy()), ml)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Oy(e.type))),
        e)
    : 1;
}
function yn(e, t, n, r) {
  if (50 < ba) throw ((ba = 0), (Ef = null), Error(L(185)));
  as(e, n, r),
    (!(ae & 2) || e !== Ke) &&
      (e === Ke && (!(ae & 2) && (ju |= n), Ue === 4 && Er(e, Qe)),
      bt(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((bi = Fe() + 500), Pu && zr()));
}
function bt(e, t) {
  var n = e.callbackNode;
  jE(e, t);
  var r = Il(e, e === Ke ? Qe : 0);
  if (r === 0)
    n !== null && Vm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vm(n), t === 1))
      e.tag === 0 ? AC(j0.bind(null, e)) : Zy(j0.bind(null, e)),
        TC(function () {
          !(ae & 6) && zr();
        }),
        (n = null);
    else {
      switch (by(r)) {
        case 1:
          n = Oh;
          break;
        case 4:
          n = wy;
          break;
        case 16:
          n = Rl;
          break;
        case 536870912:
          n = xy;
          break;
        default:
          n = Rl;
      }
      n = Kw(n, Vw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vw(e, t) {
  if (((pl = -1), (ml = 0), ae & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (di() && e.callbackNode !== n) return null;
  var r = Il(e, e === Ke ? Qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var i = Bw();
    (Ke !== e || Qe !== t) && ((Kn = null), (bi = Fe() + 500), ho(e, t));
    do
      try {
        qC();
        break;
      } catch (s) {
        $w(e, s);
      }
    while (!0);
    Bh(),
      (Yl.current = i),
      (ae = o),
      $e !== null ? (t = 0) : ((Ke = null), (Qe = 0), (t = Ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Xd(e)), o !== 0 && ((r = o), (t = Cf(e, o)))), t === 1)
    )
      throw ((n = Za), ho(e, 0), Er(e, r), bt(e, Fe()), n);
    if (t === 6) Er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !YC(o) &&
          ((t = Jl(e, r)),
          t === 2 && ((i = Xd(e)), i !== 0 && ((r = i), (t = Cf(e, i)))),
          t === 1))
      )
        throw ((n = Za), ho(e, 0), Er(e, r), bt(e, Fe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          to(e, yt, Kn);
          break;
        case 3:
          if (
            (Er(e, r), (r & 130023424) === r && ((t = np + 500 - Fe()), 10 < t))
          ) {
            if (Il(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ft(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = of(to.bind(null, e, yt, Kn), t);
            break;
          }
          to(e, yt, Kn);
          break;
        case 4:
          if ((Er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - vn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * GC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = of(to.bind(null, e, yt, Kn), r);
            break;
          }
          to(e, yt, Kn);
          break;
        case 5:
          to(e, yt, Kn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return bt(e, Fe()), e.callbackNode === n ? Vw.bind(null, e) : null;
}
function Cf(e, t) {
  var n = Sa;
  return (
    e.current.memoizedState.isDehydrated && (ho(e, t).flags |= 256),
    (e = Jl(e, t)),
    e !== 2 && ((t = yt), (yt = n), t !== null && Tf(t)),
    e
  );
}
function Tf(e) {
  yt === null ? (yt = e) : yt.push.apply(yt, e);
}
function YC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Er(e, t) {
  for (
    t &= ~tp,
      t &= ~ju,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function j0(e) {
  if (ae & 6) throw Error(L(327));
  di();
  var t = Il(e, 0);
  if (!(t & 1)) return bt(e, Fe()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xd(e);
    r !== 0 && ((t = r), (n = Cf(e, r)));
  }
  if (n === 1) throw ((n = Za), ho(e, 0), Er(e, t), bt(e, Fe()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    to(e, yt, Kn),
    bt(e, Fe()),
    null
  );
}
function rp(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = n), ae === 0 && ((bi = Fe() + 500), Pu && zr());
  }
}
function Co(e) {
  Tr !== null && Tr.tag === 0 && !(ae & 6) && di();
  var t = ae;
  ae |= 1;
  var n = tn.transition,
    r = he;
  try {
    if (((tn.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (tn.transition = n), (ae = t), !(ae & 6) && zr();
  }
}
function op() {
  (At = ti.current), xe(ti);
}
function ho(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), CC(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var r = n;
      switch ((Fh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vl();
          break;
        case 3:
          xi(), xe(xt), xe(lt), Zh();
          break;
        case 5:
          Kh(r);
          break;
        case 4:
          xi();
          break;
        case 13:
          xe(Pe);
          break;
        case 19:
          xe(Pe);
          break;
        case 10:
          Hh(r.type._context);
          break;
        case 22:
        case 23:
          op();
      }
      n = n.return;
    }
  if (
    ((Ke = e),
    ($e = e = Dr(e.current, null)),
    (Qe = At = t),
    (Ue = 0),
    (Za = null),
    (tp = ju = Eo = 0),
    (yt = Sa = null),
    lo !== null)
  ) {
    for (t = 0; t < lo.length; t++)
      if (((n = lo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    lo = null;
  }
  return e;
}
function $w(e, t) {
  do {
    var n = $e;
    try {
      if ((Bh(), (dl.current = Gl), Zl)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Zl = !1;
      }
      if (
        ((ko = 0),
        (We = ze = Ae = null),
        (wa = !1),
        (Ua = 0),
        (ep.current = null),
        n === null || n.return === null)
      ) {
        (Ue = 1), (Za = t), ($e = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Qe),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = y0(a);
          if (h !== null) {
            (h.flags &= -257),
              w0(h, a, s, i, t),
              h.mode & 1 && v0(i, u, t),
              (t = h),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              v0(i, u, t), ip();
              break e;
            }
            l = Error(L(426));
          }
        } else if (Ce && s.mode & 1) {
          var x = y0(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              w0(x, a, s, i, t),
              Vh(Si(l, s));
            break e;
          }
        }
        (i = l = Si(l, s)),
          Ue !== 4 && (Ue = 2),
          Sa === null ? (Sa = [i]) : Sa.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = kw(i, l, t);
              c0(i, g);
              break e;
            case 1:
              s = l;
              var p = i.type,
                w = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Ir === null || !Ir.has(w))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Ew(i, s, t);
                c0(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zw(n);
    } catch (C) {
      (t = C), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bw() {
  var e = Yl.current;
  return (Yl.current = Gl), e === null ? Gl : e;
}
function ip() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
    Ke === null || (!(Eo & 268435455) && !(ju & 268435455)) || Er(Ke, Qe);
}
function Jl(e, t) {
  var n = ae;
  ae |= 2;
  var r = Bw();
  (Ke !== e || Qe !== t) && ((Kn = null), ho(e, t));
  do
    try {
      XC();
      break;
    } catch (o) {
      $w(e, o);
    }
  while (!0);
  if ((Bh(), (ae = n), (Yl.current = r), $e !== null)) throw Error(L(261));
  return (Ke = null), (Qe = 0), Ue;
}
function XC() {
  for (; $e !== null; ) Hw($e);
}
function qC() {
  for (; $e !== null && !bE(); ) Hw($e);
}
function Hw(e) {
  var t = Ww(e.alternate, e, At);
  (e.memoizedProps = e.pendingProps),
    t === null ? zw(e) : ($e = t),
    (ep.current = null);
}
function zw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = UC(n, t)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ue = 6), ($e = null);
        return;
      }
    } else if (((n = zC(n, t, At)), n !== null)) {
      $e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  Ue === 0 && (Ue = 5);
}
function to(e, t, n) {
  var r = he,
    o = tn.transition;
  try {
    (tn.transition = null), (he = 1), JC(e, t, n, r);
  } finally {
    (tn.transition = o), (he = r);
  }
  return null;
}
function JC(e, t, n, r) {
  do di();
  while (Tr !== null);
  if (ae & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ME(e, i),
    e === Ke && (($e = Ke = null), (Qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ys ||
      ((Ys = !0),
      Kw(Rl, function () {
        return di(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = tn.transition), (tn.transition = null);
    var a = he;
    he = 1;
    var s = ae;
    (ae |= 4),
      (ep.current = null),
      KC(e, n),
      Lw(n, e),
      yC(nf),
      (Nl = !!tf),
      (nf = tf = null),
      (e.current = n),
      ZC(n),
      kE(),
      (ae = s),
      (he = a),
      (tn.transition = i);
  } else e.current = n;
  if (
    (Ys && ((Ys = !1), (Tr = e), (ql = o)),
    (i = e.pendingLanes),
    i === 0 && (Ir = null),
    TE(n.stateNode),
    bt(e, Fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Xl) throw ((Xl = !1), (e = kf), (kf = null), e);
  return (
    ql & 1 && e.tag !== 0 && di(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ef ? ba++ : ((ba = 0), (Ef = e))) : (ba = 0),
    zr(),
    null
  );
}
function di() {
  if (Tr !== null) {
    var e = by(ql),
      t = tn.transition,
      n = he;
    try {
      if (((tn.transition = null), (he = 16 > e ? 16 : e), Tr === null))
        var r = !1;
      else {
        if (((e = Tr), (Tr = null), (ql = 0), ae & 6)) throw Error(L(331));
        var o = ae;
        for (ae |= 4, V = e.current; V !== null; ) {
          var i = V,
            a = i.child;
          if (V.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xa(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        h = c.return;
                      if ((Iw(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (V = f);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (V = a);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xa(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (V = g);
                break e;
              }
              V = i.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          a = V;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (V = w);
          else
            e: for (a = p; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Au(9, s);
                  }
                } catch (C) {
                  Ne(s, s.return, C);
                }
              if (s === a) {
                V = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (V = S);
                break e;
              }
              V = s.return;
            }
        }
        if (
          ((ae = o), zr(), In && typeof In.onPostCommitFiberRoot == "function")
        )
          try {
            In.onPostCommitFiberRoot(bu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (tn.transition = t);
    }
  }
  return !1;
}
function M0(e, t, n) {
  (t = Si(n, t)),
    (t = kw(e, t, 1)),
    (e = Rr(e, t, 1)),
    (t = ft()),
    e !== null && (as(e, 1, t), bt(e, t));
}
function Ne(e, t, n) {
  if (e.tag === 3) M0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        M0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ir === null || !Ir.has(r)))
        ) {
          (e = Si(n, e)),
            (e = Ew(t, e, 1)),
            (t = Rr(t, e, 1)),
            (e = ft()),
            t !== null && (as(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function QC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ft()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ke === e &&
      (Qe & n) === n &&
      (Ue === 4 || (Ue === 3 && (Qe & 130023424) === Qe && 500 > Fe() - np)
        ? ho(e, 0)
        : (tp |= n)),
    bt(e, t);
}
function Uw(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vs), (Vs <<= 1), !(Vs & 130023424) && (Vs = 4194304))
      : (t = 1));
  var n = ft();
  (e = ar(e, t)), e !== null && (as(e, t, n), bt(e, n));
}
function eT(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Uw(e, n);
}
function tT(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Uw(e, n);
}
var Ww;
Ww = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), HC(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else (wt = !1), Ce && t.flags & 1048576 && Gy(t, Hl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hl(e, t), (e = t.pendingProps);
      var o = vi(t, lt.current);
      ci(t, n), (o = Yh(null, t, r, e, o, n));
      var i = Xh();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            St(r) ? ((i = !0), $l(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Uh(t),
            (o.updater = Ou),
            (t.stateNode = o),
            (o._reactInternals = t),
            ff(t, r, e, n),
            (t = mf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ce && i && Lh(t), dt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = rT(r)),
          (e = hn(r, e)),
          o)
        ) {
          case 0:
            t = pf(null, t, r, e, n);
            break e;
          case 1:
            t = b0(null, t, r, e, n);
            break e;
          case 11:
            t = x0(null, t, r, e, n);
            break e;
          case 14:
            t = S0(null, t, r, hn(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : hn(r, o)),
        pf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : hn(r, o)),
        b0(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ow(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Jy(e, t),
          Wl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Si(Error(L(423)), t)), (t = k0(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Si(Error(L(424)), t)), (t = k0(e, t, r, n, o));
            break e;
          } else
            for (
              Rt = Mr(t.stateNode.containerInfo.firstChild),
                It = t,
                Ce = !0,
                mn = null,
                n = nw(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yi(), r === o)) {
            t = sr(e, t, n);
            break e;
          }
          dt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        rw(t),
        e === null && uf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        rf(r, o) ? (a = null) : i !== null && rf(r, i) && (t.flags |= 32),
        Pw(e, t),
        dt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && uf(t), null;
    case 13:
      return _w(e, t, n);
    case 4:
      return (
        Wh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wi(t, null, r, n)) : dt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : hn(r, o)),
        x0(e, t, r, o, n)
      );
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ge(zl, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (wn(i.value, a)) {
            if (i.children === o.children && !xt.current) {
              t = sr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Qn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      cf(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(L(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  cf(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        dt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ci(t, n),
        (o = on(o)),
        (r = r(o)),
        (t.flags |= 1),
        dt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = hn(r, t.pendingProps)),
        (o = hn(r.type, o)),
        S0(e, t, r, o, n)
      );
    case 15:
      return Cw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : hn(r, o)),
        hl(e, t),
        (t.tag = 1),
        St(r) ? ((e = !0), $l(t)) : (e = !1),
        ci(t, n),
        ew(t, r, o),
        ff(t, r, o, n),
        mf(null, t, r, !0, e, n)
      );
    case 19:
      return Aw(e, t, n);
    case 22:
      return Tw(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Kw(e, t) {
  return yy(e, t);
}
function nT(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function en(e, t, n, r) {
  return new nT(e, t, n, r);
}
function ap(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rT(e) {
  if (typeof e == "function") return ap(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ch)) return 11;
    if (e === Th) return 14;
  }
  return 2;
}
function Dr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = en(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function gl(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) ap(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Wo:
        return po(n.children, o, i, t);
      case Eh:
        (a = 8), (o |= 8);
        break;
      case Nd:
        return (
          (e = en(12, n, t, o | 2)), (e.elementType = Nd), (e.lanes = i), e
        );
      case Dd:
        return (e = en(13, n, t, o)), (e.elementType = Dd), (e.lanes = i), e;
      case Ld:
        return (e = en(19, n, t, o)), (e.elementType = Ld), (e.lanes = i), e;
      case ty:
        return Mu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qv:
              a = 10;
              break e;
            case ey:
              a = 9;
              break e;
            case Ch:
              a = 11;
              break e;
            case Th:
              a = 14;
              break e;
            case yr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = en(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function po(e, t, n, r) {
  return (e = en(7, e, r, t)), (e.lanes = n), e;
}
function Mu(e, t, n, r) {
  return (
    (e = en(22, e, r, t)),
    (e.elementType = ty),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qc(e, t, n) {
  return (e = en(6, e, null, t)), (e.lanes = n), e;
}
function ed(e, t, n) {
  return (
    (t = en(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function oT(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ic(0)),
    (this.expirationTimes = Ic(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ic(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function sp(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new oT(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = en(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uh(i),
    e
  );
}
function iT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Uo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zw(e) {
  if (!e) return Fr;
  e = e._reactInternals;
  e: {
    if (jo(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (St(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (St(n)) return Ky(e, n, t);
  }
  return t;
}
function Gw(e, t, n, r, o, i, a, s, l) {
  return (
    (e = sp(n, r, !0, e, o, i, a, s, l)),
    (e.context = Zw(null)),
    (n = e.current),
    (r = ft()),
    (o = Nr(n)),
    (i = Qn(r, o)),
    (i.callback = t ?? null),
    Rr(n, i, o),
    (e.current.lanes = o),
    as(e, o, r),
    bt(e, r),
    e
  );
}
function Ru(e, t, n, r) {
  var o = t.current,
    i = ft(),
    a = Nr(o);
  return (
    (n = Zw(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rr(o, t, a)),
    e !== null && (yn(e, o, a, i), cl(e, o, a)),
    a
  );
}
function Ql(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function R0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lp(e, t) {
  R0(e, t), (e = e.alternate) && R0(e, t);
}
function aT() {
  return null;
}
var Yw =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function up(e) {
  this._internalRoot = e;
}
Iu.prototype.render = up.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ru(e, t, null, null);
};
Iu.prototype.unmount = up.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Co(function () {
      Ru(null, e, null, null);
    }),
      (t[ir] = null);
  }
};
function Iu(e) {
  this._internalRoot = e;
}
Iu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kr.length && t !== 0 && t < kr[n].priority; n++);
    kr.splice(n, 0, e), n === 0 && Py(e);
  }
};
function cp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function I0() {}
function sT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ql(a);
        i.call(u);
      };
    }
    var a = Gw(t, r, e, 0, null, !1, !1, "", I0);
    return (
      (e._reactRootContainer = a),
      (e[ir] = a.current),
      Va(e.nodeType === 8 ? e.parentNode : e),
      Co(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ql(l);
      s.call(u);
    };
  }
  var l = sp(e, 0, !1, null, null, !1, !1, "", I0);
  return (
    (e._reactRootContainer = l),
    (e[ir] = l.current),
    Va(e.nodeType === 8 ? e.parentNode : e),
    Co(function () {
      Ru(t, l, n, r);
    }),
    l
  );
}
function Du(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = Ql(a);
        s.call(l);
      };
    }
    Ru(t, a, e, o);
  } else a = sT(n, t, e, o, r);
  return Ql(a);
}
ky = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ua(t.pendingLanes);
        n !== 0 &&
          (_h(t, n | 1), bt(t, Fe()), !(ae & 6) && ((bi = Fe() + 500), zr()));
      }
      break;
    case 13:
      Co(function () {
        var r = ar(e, 1);
        if (r !== null) {
          var o = ft();
          yn(r, e, 1, o);
        }
      }),
        lp(e, 1);
  }
};
Ah = function (e) {
  if (e.tag === 13) {
    var t = ar(e, 134217728);
    if (t !== null) {
      var n = ft();
      yn(t, e, 134217728, n);
    }
    lp(e, 134217728);
  }
};
Ey = function (e) {
  if (e.tag === 13) {
    var t = Nr(e),
      n = ar(e, t);
    if (n !== null) {
      var r = ft();
      yn(n, e, t, r);
    }
    lp(e, t);
  }
};
Cy = function () {
  return he;
};
Ty = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
Zd = function (e, t, n) {
  switch (t) {
    case "input":
      if (($d(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Tu(r);
            if (!o) throw Error(L(90));
            ry(r), $d(r, o);
          }
        }
      }
      break;
    case "textarea":
      iy(e, n);
      break;
    case "select":
      (t = n.value), t != null && ai(e, !!n.multiple, t, !1);
  }
};
fy = rp;
hy = Co;
var lT = { usingClientEntryPoint: !1, Events: [ls, Yo, Tu, cy, dy, rp] },
  qi = {
    findFiberByHostInstance: so,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  uT = {
    bundleType: qi.bundleType,
    version: qi.version,
    rendererPackageName: qi.rendererPackageName,
    rendererConfig: qi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qi.findFiberByHostInstance || aT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xs.isDisabled && Xs.supportsFiber)
    try {
      (bu = Xs.inject(uT)), (In = Xs);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lT;
$t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cp(t)) throw Error(L(200));
  return iT(e, t, null, n);
};
$t.createRoot = function (e, t) {
  if (!cp(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Yw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = sp(e, 1, !1, null, null, n, !1, r, o)),
    (e[ir] = t.current),
    Va(e.nodeType === 8 ? e.parentNode : e),
    new up(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = gy(t)), (e = e === null ? null : e.stateNode), e;
};
$t.flushSync = function (e) {
  return Co(e);
};
$t.hydrate = function (e, t, n) {
  if (!Nu(t)) throw Error(L(200));
  return Du(null, e, t, !0, n);
};
$t.hydrateRoot = function (e, t, n) {
  if (!cp(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Yw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Gw(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[ir] = t.current),
    Va(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Iu(t);
};
$t.render = function (e, t, n) {
  if (!Nu(t)) throw Error(L(200));
  return Du(null, e, t, !1, n);
};
$t.unmountComponentAtNode = function (e) {
  if (!Nu(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Co(function () {
        Du(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ir] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = rp;
$t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nu(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Du(e, t, n, !1, r);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function Xw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw);
    } catch (e) {
      console.error(e);
    }
}
Xw(), (Gv.exports = $t);
var qw = Gv.exports,
  N0 = qw;
(Rd.createRoot = N0.createRoot), (Rd.hydrateRoot = N0.hydrateRoot);
var Pf = function (e, t) {
  return (
    (Pf =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    Pf(e, t)
  );
};
function cT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Pf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var Te = function () {
  return (
    (Te =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Te.apply(this, arguments)
  );
};
function dT(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function xr(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (d) {
        a(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Sr(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    a;
  return (
    (a = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(u) {
    return function (c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = u);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Tn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
var ao =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function dp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function fp(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var no = fp(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = (function () {
    function r() {
      var o = this;
      (this.locked = new Map()),
        (this.addToLocked = function (i, a) {
          var s = o.locked.get(i);
          s === void 0
            ? a === void 0
              ? o.locked.set(i, [])
              : o.locked.set(i, [a])
            : a !== void 0 && (s.unshift(a), o.locked.set(i, s));
        }),
        (this.isLocked = function (i) {
          return o.locked.has(i);
        }),
        (this.lock = function (i) {
          return new Promise(function (a, s) {
            o.isLocked(i) ? o.addToLocked(i, a) : (o.addToLocked(i), a());
          });
        }),
        (this.unlock = function (i) {
          var a = o.locked.get(i);
          if (a !== void 0 && a.length !== 0) {
            var s = a.pop();
            o.locked.set(i, a), s !== void 0 && setTimeout(s, 0);
          } else o.locked.delete(i);
        });
    }
    return (
      (r.getInstance = function () {
        return r.instance === void 0 && (r.instance = new r()), r.instance;
      }),
      r
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
dp(no);
var fT = dp(
  fp(function (e, t) {
    var n =
        (ao && ao.__awaiter) ||
        function (c, d, f, h) {
          return new (f || (f = Promise))(function (m, v) {
            function x(w) {
              try {
                p(h.next(w));
              } catch (S) {
                v(S);
              }
            }
            function g(w) {
              try {
                p(h.throw(w));
              } catch (S) {
                v(S);
              }
            }
            function p(w) {
              w.done
                ? m(w.value)
                : new f(function (S) {
                    S(w.value);
                  }).then(x, g);
            }
            p((h = h.apply(c, d || [])).next());
          });
        },
      r =
        (ao && ao.__generator) ||
        function (c, d) {
          var f,
            h,
            m,
            v,
            x = {
              label: 0,
              sent: function () {
                if (1 & m[0]) throw m[1];
                return m[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (v = { next: g(0), throw: g(1), return: g(2) }),
            typeof Symbol == "function" &&
              (v[Symbol.iterator] = function () {
                return this;
              }),
            v
          );
          function g(p) {
            return function (w) {
              return (function (S) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; x; )
                  try {
                    if (
                      ((f = 1),
                      h &&
                        (m =
                          2 & S[0]
                            ? h.return
                            : S[0]
                            ? h.throw || ((m = h.return) && m.call(h), 0)
                            : h.next) &&
                        !(m = m.call(h, S[1])).done)
                    )
                      return m;
                    switch (((h = 0), m && (S = [2 & S[0], m.value]), S[0])) {
                      case 0:
                      case 1:
                        m = S;
                        break;
                      case 4:
                        return x.label++, { value: S[1], done: !1 };
                      case 5:
                        x.label++, (h = S[1]), (S = [0]);
                        continue;
                      case 7:
                        (S = x.ops.pop()), x.trys.pop();
                        continue;
                      default:
                        if (
                          ((m = x.trys),
                          !(
                            (m = m.length > 0 && m[m.length - 1]) ||
                            (S[0] !== 6 && S[0] !== 2)
                          ))
                        ) {
                          x = 0;
                          continue;
                        }
                        if (
                          S[0] === 3 &&
                          (!m || (S[1] > m[0] && S[1] < m[3]))
                        ) {
                          x.label = S[1];
                          break;
                        }
                        if (S[0] === 6 && x.label < m[1]) {
                          (x.label = m[1]), (m = S);
                          break;
                        }
                        if (m && x.label < m[2]) {
                          (x.label = m[2]), x.ops.push(S);
                          break;
                        }
                        m[2] && x.ops.pop(), x.trys.pop();
                        continue;
                    }
                    S = d.call(c, x);
                  } catch (C) {
                    (S = [6, C]), (h = 0);
                  } finally {
                    f = m = 0;
                  }
                if (5 & S[0]) throw S[1];
                return { value: S[0] ? S[1] : void 0, done: !0 };
              })([p, w]);
            };
          }
        },
      o = ao;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = "browser-tabs-lock-key",
      a = {
        key: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        getItem: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        clear: function () {
          return n(o, void 0, void 0, function () {
            return r(this, function (c) {
              return [2, window.localStorage.clear()];
            });
          });
        },
        removeItem: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        setItem: function (c, d) {
          return n(o, void 0, void 0, function () {
            return r(this, function (f) {
              throw new Error("Unsupported");
            });
          });
        },
        keySync: function (c) {
          return window.localStorage.key(c);
        },
        getItemSync: function (c) {
          return window.localStorage.getItem(c);
        },
        clearSync: function () {
          return window.localStorage.clear();
        },
        removeItemSync: function (c) {
          return window.localStorage.removeItem(c);
        },
        setItemSync: function (c, d) {
          return window.localStorage.setItem(c, d);
        },
      };
    function s(c) {
      return new Promise(function (d) {
        return setTimeout(d, c);
      });
    }
    function l(c) {
      for (
        var d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          f = "",
          h = 0;
        h < c;
        h++
      )
        f += d[Math.floor(Math.random() * d.length)];
      return f;
    }
    var u = (function () {
      function c(d) {
        (this.acquiredIatSet = new Set()),
          (this.storageHandler = void 0),
          (this.id = Date.now().toString() + l(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          (this.storageHandler = d),
          c.waiters === void 0 && (c.waiters = []);
      }
      return (
        (c.prototype.acquireLock = function (d, f) {
          return (
            f === void 0 && (f = 5e3),
            n(this, void 0, void 0, function () {
              var h, m, v, x, g, p, w;
              return r(this, function (S) {
                switch (S.label) {
                  case 0:
                    (h = Date.now() + l(4)),
                      (m = Date.now() + f),
                      (v = i + "-" + d),
                      (x =
                        this.storageHandler === void 0
                          ? a
                          : this.storageHandler),
                      (S.label = 1);
                  case 1:
                    return Date.now() < m ? [4, s(30)] : [3, 8];
                  case 2:
                    return (
                      S.sent(),
                      x.getItemSync(v) !== null
                        ? [3, 5]
                        : ((g = this.id + "-" + d + "-" + h),
                          [4, s(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      S.sent(),
                      x.setItemSync(
                        v,
                        JSON.stringify({
                          id: this.id,
                          iat: h,
                          timeoutKey: g,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, s(30)]
                    );
                  case 4:
                    return (
                      S.sent(),
                      (p = x.getItemSync(v)) !== null &&
                      (w = JSON.parse(p)).id === this.id &&
                      w.iat === h
                        ? (this.acquiredIatSet.add(h),
                          this.refreshLockWhileAcquired(v, h),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      c.lockCorrector(
                        this.storageHandler === void 0 ? a : this.storageHandler
                      ),
                      [4, this.waitForSomethingToChange(m)]
                    );
                  case 6:
                    S.sent(), (S.label = 7);
                  case 7:
                    return (h = Date.now() + l(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (c.prototype.refreshLockWhileAcquired = function (d, f) {
          return n(this, void 0, void 0, function () {
            var h = this;
            return r(this, function (m) {
              return (
                setTimeout(function () {
                  return n(h, void 0, void 0, function () {
                    var v, x, g;
                    return r(this, function (p) {
                      switch (p.label) {
                        case 0:
                          return [4, no.default().lock(f)];
                        case 1:
                          return (
                            p.sent(),
                            this.acquiredIatSet.has(f)
                              ? ((v =
                                  this.storageHandler === void 0
                                    ? a
                                    : this.storageHandler),
                                (x = v.getItemSync(d)) === null
                                  ? (no.default().unlock(f), [2])
                                  : (((g = JSON.parse(x)).timeRefreshed =
                                      Date.now()),
                                    v.setItemSync(d, JSON.stringify(g)),
                                    no.default().unlock(f),
                                    this.refreshLockWhileAcquired(d, f),
                                    [2]))
                              : (no.default().unlock(f), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (c.prototype.waitForSomethingToChange = function (d) {
          return n(this, void 0, void 0, function () {
            return r(this, function (f) {
              switch (f.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (h) {
                      var m = !1,
                        v = Date.now(),
                        x = !1;
                      function g() {
                        if (
                          (x ||
                            (window.removeEventListener("storage", g),
                            c.removeFromWaiting(g),
                            clearTimeout(p),
                            (x = !0)),
                          !m)
                        ) {
                          m = !0;
                          var w = 50 - (Date.now() - v);
                          w > 0 ? setTimeout(h, w) : h(null);
                        }
                      }
                      window.addEventListener("storage", g), c.addToWaiting(g);
                      var p = setTimeout(g, Math.max(0, d - Date.now()));
                    }),
                  ];
                case 1:
                  return f.sent(), [2];
              }
            });
          });
        }),
        (c.addToWaiting = function (d) {
          this.removeFromWaiting(d), c.waiters !== void 0 && c.waiters.push(d);
        }),
        (c.removeFromWaiting = function (d) {
          c.waiters !== void 0 &&
            (c.waiters = c.waiters.filter(function (f) {
              return f !== d;
            }));
        }),
        (c.notifyWaiters = function () {
          c.waiters !== void 0 &&
            c.waiters.slice().forEach(function (d) {
              return d();
            });
        }),
        (c.prototype.releaseLock = function (d) {
          return n(this, void 0, void 0, function () {
            return r(this, function (f) {
              switch (f.label) {
                case 0:
                  return [4, this.releaseLock__private__(d)];
                case 1:
                  return [2, f.sent()];
              }
            });
          });
        }),
        (c.prototype.releaseLock__private__ = function (d) {
          return n(this, void 0, void 0, function () {
            var f, h, m, v;
            return r(this, function (x) {
              switch (x.label) {
                case 0:
                  return (
                    (f =
                      this.storageHandler === void 0 ? a : this.storageHandler),
                    (h = i + "-" + d),
                    (m = f.getItemSync(h)) === null
                      ? [2]
                      : (v = JSON.parse(m)).id !== this.id
                      ? [3, 2]
                      : [4, no.default().lock(v.iat)]
                  );
                case 1:
                  x.sent(),
                    this.acquiredIatSet.delete(v.iat),
                    f.removeItemSync(h),
                    no.default().unlock(v.iat),
                    c.notifyWaiters(),
                    (x.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (c.lockCorrector = function (d) {
          for (var f = Date.now() - 5e3, h = d, m = [], v = 0; ; ) {
            var x = h.keySync(v);
            if (x === null) break;
            m.push(x), v++;
          }
          for (var g = !1, p = 0; p < m.length; p++) {
            var w = m[p];
            if (w.includes(i)) {
              var S = h.getItemSync(w);
              if (S !== null) {
                var C = JSON.parse(S);
                ((C.timeRefreshed === void 0 && C.timeAcquired < f) ||
                  (C.timeRefreshed !== void 0 && C.timeRefreshed < f)) &&
                  (h.removeItemSync(w), (g = !0));
              }
            }
          }
          g && c.notifyWaiters();
        }),
        (c.waiters = void 0),
        c
      );
    })();
    t.default = u;
  })
);
const hT = { timeoutInSeconds: 60 },
  Jw = { name: "auth0-spa-js", version: "2.1.3" },
  Qw = () => Date.now();
let jt = class Of extends Error {
    constructor(t, n) {
      super(n),
        (this.error = t),
        (this.error_description = n),
        Object.setPrototypeOf(this, Of.prototype);
    }
    static fromPayload({ error: t, error_description: n }) {
      return new Of(t, n);
    }
  },
  pT = class e2 extends jt {
    constructor(t, n, r, o = null) {
      super(t, n),
        (this.state = r),
        (this.appState = o),
        Object.setPrototypeOf(this, e2.prototype);
    }
  },
  _f = class t2 extends jt {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, t2.prototype);
    }
  },
  mT = class n2 extends _f {
    constructor(t) {
      super(), (this.popup = t), Object.setPrototypeOf(this, n2.prototype);
    }
  },
  gT = class r2 extends jt {
    constructor(t) {
      super("cancelled", "Popup closed"),
        (this.popup = t),
        Object.setPrototypeOf(this, r2.prototype);
    }
  },
  vT = class o2 extends jt {
    constructor(t, n, r) {
      super(t, n),
        (this.mfa_token = r),
        Object.setPrototypeOf(this, o2.prototype);
    }
  },
  i2 = class a2 extends jt {
    constructor(t, n) {
      super(
        "missing_refresh_token",
        `Missing Refresh Token (audience: '${D0(t, ["default"])}', scope: '${D0(
          n
        )}')`
      ),
        (this.audience = t),
        (this.scope = n),
        Object.setPrototypeOf(this, a2.prototype);
    }
  };
function D0(e, t = []) {
  return e && !t.includes(e) ? e : "";
}
const vl = () => window.crypto,
  td = () => {
    const e =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t = "";
    return (
      Array.from(vl().getRandomValues(new Uint8Array(43))).forEach(
        (n) => (t += e[n % e.length])
      ),
      t
    );
  },
  L0 = (e) => btoa(e),
  Af = (e) => {
    var { clientId: t } = e,
      n = Tn(e, ["clientId"]);
    return new URLSearchParams(
      ((r) =>
        Object.keys(r)
          .filter((o) => r[o] !== void 0)
          .reduce(
            (o, i) => Object.assign(Object.assign({}, o), { [i]: r[i] }),
            {}
          ))(Object.assign({ client_id: t }, n))
    ).toString();
  },
  F0 = (e) =>
    ((t) =>
      decodeURIComponent(
        atob(t)
          .split("")
          .map((n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      ))(e.replace(/_/g, "/").replace(/-/g, "+")),
  yT = async (e, t) => {
    const n = await fetch(e, t);
    return { ok: n.ok, json: await n.json() };
  },
  wT = async (e, t, n) => {
    const r = new AbortController();
    let o;
    return (
      (t.signal = r.signal),
      Promise.race([
        yT(e, t),
        new Promise((i, a) => {
          o = setTimeout(() => {
            r.abort(), a(new Error("Timeout when executing 'fetch'"));
          }, n);
        }),
      ]).finally(() => {
        clearTimeout(o);
      })
    );
  },
  xT = async (e, t, n, r, o, i, a) => {
    return (
      (s = {
        auth: { audience: t, scope: n },
        timeout: o,
        fetchUrl: e,
        fetchOptions: r,
        useFormData: a,
      }),
      (l = i),
      new Promise(function (u, c) {
        const d = new MessageChannel();
        (d.port1.onmessage = function (f) {
          f.data.error ? c(new Error(f.data.error)) : u(f.data),
            d.port1.close();
        }),
          l.postMessage(s, [d.port2]);
      })
    );
    var s, l;
  },
  ST = async (e, t, n, r, o, i, a = 1e4) =>
    o ? xT(e, t, n, r, a, o, i) : wT(e, r, a);
async function bT(e, t) {
  var {
      baseUrl: n,
      timeout: r,
      audience: o,
      scope: i,
      auth0Client: a,
      useFormData: s,
    } = e,
    l = Tn(e, [
      "baseUrl",
      "timeout",
      "audience",
      "scope",
      "auth0Client",
      "useFormData",
    ]);
  const u = s ? Af(l) : JSON.stringify(l);
  return await (async function (c, d, f, h, m, v, x) {
    let g,
      p = null;
    for (let A = 0; A < 3; A++)
      try {
        (g = await ST(c, f, h, m, v, x, d)), (p = null);
        break;
      } catch (R) {
        p = R;
      }
    if (p) throw p;
    const w = g.json,
      { error: S, error_description: C } = w,
      _ = Tn(w, ["error", "error_description"]),
      { ok: E } = g;
    if (!E) {
      const A = C || `HTTP error. Unable to fetch ${c}`;
      throw S === "mfa_required"
        ? new vT(S, A, _.mfa_token)
        : S === "missing_refresh_token"
        ? new i2(f, h)
        : new jt(S || "request_error", A);
    }
    return _;
  })(
    `${n}/oauth/token`,
    r,
    o || "default",
    i,
    {
      method: "POST",
      body: u,
      headers: {
        "Content-Type": s
          ? "application/x-www-form-urlencoded"
          : "application/json",
        "Auth0-Client": btoa(JSON.stringify(a || Jw)),
      },
    },
    t,
    s
  );
}
const qs = (...e) => {
  return ((t = e.filter(Boolean).join(" ").trim().split(/\s+/)),
  Array.from(new Set(t))).join(" ");
  var t;
};
class Mn {
  constructor(t, n = "@@auth0spajs@@", r) {
    (this.prefix = n),
      (this.suffix = r),
      (this.clientId = t.clientId),
      (this.scope = t.scope),
      (this.audience = t.audience);
  }
  toKey() {
    return [this.prefix, this.clientId, this.audience, this.scope, this.suffix]
      .filter(Boolean)
      .join("::");
  }
  static fromKey(t) {
    const [n, r, o, i] = t.split("::");
    return new Mn({ clientId: r, scope: i, audience: o }, n);
  }
  static fromCacheEntry(t) {
    const { scope: n, audience: r, client_id: o } = t;
    return new Mn({ scope: n, audience: r, clientId: o });
  }
}
let kT = class {
    set(t, n) {
      localStorage.setItem(t, JSON.stringify(n));
    }
    get(t) {
      const n = window.localStorage.getItem(t);
      if (n)
        try {
          return JSON.parse(n);
        } catch {
          return;
        }
    }
    remove(t) {
      localStorage.removeItem(t);
    }
    allKeys() {
      return Object.keys(window.localStorage).filter((t) =>
        t.startsWith("@@auth0spajs@@")
      );
    }
  },
  s2 = class {
    constructor() {
      this.enclosedCache = (function () {
        let t = {};
        return {
          set(n, r) {
            t[n] = r;
          },
          get(n) {
            const r = t[n];
            if (r) return r;
          },
          remove(n) {
            delete t[n];
          },
          allKeys: () => Object.keys(t),
        };
      })();
    }
  },
  ET = class {
    constructor(t, n, r) {
      (this.cache = t), (this.keyManifest = n), (this.nowProvider = r || Qw);
    }
    async setIdToken(t, n, r) {
      var o;
      const i = this.getIdTokenCacheKey(t);
      await this.cache.set(i, { id_token: n, decodedToken: r }),
        await ((o = this.keyManifest) === null || o === void 0
          ? void 0
          : o.add(i));
    }
    async getIdToken(t) {
      const n = await this.cache.get(this.getIdTokenCacheKey(t.clientId));
      if (!n && t.scope && t.audience) {
        const r = await this.get(t);
        return !r || !r.id_token || !r.decodedToken
          ? void 0
          : { id_token: r.id_token, decodedToken: r.decodedToken };
      }
      if (n) return { id_token: n.id_token, decodedToken: n.decodedToken };
    }
    async get(t, n = 0) {
      var r;
      let o = await this.cache.get(t.toKey());
      if (!o) {
        const s = await this.getCacheKeys();
        if (!s) return;
        const l = this.matchExistingCacheKey(t, s);
        l && (o = await this.cache.get(l));
      }
      if (!o) return;
      const i = await this.nowProvider(),
        a = Math.floor(i / 1e3);
      return o.expiresAt - n < a
        ? o.body.refresh_token
          ? ((o.body = { refresh_token: o.body.refresh_token }),
            await this.cache.set(t.toKey(), o),
            o.body)
          : (await this.cache.remove(t.toKey()),
            void (await ((r = this.keyManifest) === null || r === void 0
              ? void 0
              : r.remove(t.toKey()))))
        : o.body;
    }
    async set(t) {
      var n;
      const r = new Mn({
          clientId: t.client_id,
          scope: t.scope,
          audience: t.audience,
        }),
        o = await this.wrapCacheEntry(t);
      await this.cache.set(r.toKey(), o),
        await ((n = this.keyManifest) === null || n === void 0
          ? void 0
          : n.add(r.toKey()));
    }
    async clear(t) {
      var n;
      const r = await this.getCacheKeys();
      r &&
        (await r
          .filter((o) => !t || o.includes(t))
          .reduce(async (o, i) => {
            await o, await this.cache.remove(i);
          }, Promise.resolve()),
        await ((n = this.keyManifest) === null || n === void 0
          ? void 0
          : n.clear()));
    }
    async wrapCacheEntry(t) {
      const n = await this.nowProvider();
      return { body: t, expiresAt: Math.floor(n / 1e3) + t.expires_in };
    }
    async getCacheKeys() {
      var t;
      return this.keyManifest
        ? (t = await this.keyManifest.get()) === null || t === void 0
          ? void 0
          : t.keys
        : this.cache.allKeys
        ? this.cache.allKeys()
        : void 0;
    }
    getIdTokenCacheKey(t) {
      return new Mn({ clientId: t }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(t, n) {
      return n.filter((r) => {
        var o;
        const i = Mn.fromKey(r),
          a = new Set(i.scope && i.scope.split(" ")),
          s =
            ((o = t.scope) === null || o === void 0 ? void 0 : o.split(" ")) ||
            [],
          l = i.scope && s.reduce((u, c) => u && a.has(c), !0);
        return (
          i.prefix === "@@auth0spajs@@" &&
          i.clientId === t.clientId &&
          i.audience === t.audience &&
          l
        );
      })[0];
    }
  };
class CT {
  constructor(t, n, r) {
    (this.storage = t),
      (this.clientId = n),
      (this.cookieDomain = r),
      (this.storageKey = `a0.spajs.txs.${this.clientId}`);
  }
  create(t) {
    this.storage.save(this.storageKey, t, {
      daysUntilExpire: 1,
      cookieDomain: this.cookieDomain,
    });
  }
  get() {
    return this.storage.get(this.storageKey);
  }
  remove() {
    this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
  }
}
const Ji = (e) => typeof e == "number",
  TT = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm",
  ],
  PT = (e) => {
    if (!e.id_token) throw new Error("ID token is required but missing");
    const t = ((i) => {
      const a = i.split("."),
        [s, l, u] = a;
      if (a.length !== 3 || !s || !l || !u)
        throw new Error("ID token could not be decoded");
      const c = JSON.parse(F0(l)),
        d = { __raw: i },
        f = {};
      return (
        Object.keys(c).forEach((h) => {
          (d[h] = c[h]), TT.includes(h) || (f[h] = c[h]);
        }),
        {
          encoded: { header: s, payload: l, signature: u },
          header: JSON.parse(F0(s)),
          claims: d,
          user: f,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        "Issuer (iss) claim must be a string present in the ID token"
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        `Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`
      );
    if (!t.user.sub)
      throw new Error(
        "Subject (sub) claim must be a string present in the ID token"
      );
    if (t.header.alg !== "RS256")
      throw new Error(
        `Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`
      );
    if (
      !t.claims.aud ||
      (typeof t.claims.aud != "string" && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        "Audience (aud) claim must be a string or array of strings present in the ID token"
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          `Audience (aud) claim mismatch in the ID token; expected "${
            e.aud
          }" but was not one of "${t.claims.aud.join(", ")}"`
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            `Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        `Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          "Nonce (nonce) claim must be a string present in the ID token"
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          `Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`
        );
    }
    if (e.max_age && !Ji(t.claims.auth_time))
      throw new Error(
        "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
      );
    if (t.claims.exp == null || !Ji(t.claims.exp))
      throw new Error(
        "Expiration Time (exp) claim must be a number present in the ID token"
      );
    if (!Ji(t.claims.iat))
      throw new Error(
        "Issued At (iat) claim must be a number present in the ID token"
      );
    const n = e.leeway || 60,
      r = new Date(e.now || Date.now()),
      o = new Date(0);
    if ((o.setUTCSeconds(t.claims.exp + n), r > o))
      throw new Error(
        `Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${o})`
      );
    if (t.claims.nbf != null && Ji(t.claims.nbf)) {
      const i = new Date(0);
      if ((i.setUTCSeconds(t.claims.nbf - n), r < i))
        throw new Error(
          `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${i}`
        );
    }
    if (t.claims.auth_time != null && Ji(t.claims.auth_time)) {
      const i = new Date(0);
      if (
        (i.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n), r > i)
      )
        throw new Error(
          `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${i}`
        );
    }
    if (e.organization) {
      const i = e.organization.trim();
      if (i.startsWith("org_")) {
        const a = i;
        if (!t.claims.org_id)
          throw new Error(
            "Organization ID (org_id) claim must be a string present in the ID token"
          );
        if (a !== t.claims.org_id)
          throw new Error(
            `Organization ID (org_id) claim mismatch in the ID token; expected "${a}", found "${t.claims.org_id}"`
          );
      } else {
        const a = i.toLowerCase();
        if (!t.claims.org_name)
          throw new Error(
            "Organization Name (org_name) claim must be a string present in the ID token"
          );
        if (a !== t.claims.org_name)
          throw new Error(
            `Organization Name (org_name) claim mismatch in the ID token; expected "${a}", found "${t.claims.org_name}"`
          );
      }
    }
    return t;
  };
var co = fp(function (e, t) {
  var n =
    (ao && ao.__assign) ||
    function () {
      return (
        (n =
          Object.assign ||
          function (l) {
            for (var u, c = 1, d = arguments.length; c < d; c++)
              for (var f in (u = arguments[c]))
                Object.prototype.hasOwnProperty.call(u, f) && (l[f] = u[f]);
            return l;
          }),
        n.apply(this, arguments)
      );
    };
  function r(l, u) {
    if (!u) return "";
    var c = "; " + l;
    return u === !0 ? c : c + "=" + u;
  }
  function o(l, u, c) {
    return (
      encodeURIComponent(l)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29") +
      "=" +
      encodeURIComponent(u).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent
      ) +
      (function (d) {
        if (typeof d.expires == "number") {
          var f = new Date();
          f.setMilliseconds(f.getMilliseconds() + 864e5 * d.expires),
            (d.expires = f);
        }
        return (
          r("Expires", d.expires ? d.expires.toUTCString() : "") +
          r("Domain", d.domain) +
          r("Path", d.path) +
          r("Secure", d.secure) +
          r("SameSite", d.sameSite)
        );
      })(c)
    );
  }
  function i(l) {
    for (
      var u = {}, c = l ? l.split("; ") : [], d = /(%[\dA-F]{2})+/gi, f = 0;
      f < c.length;
      f++
    ) {
      var h = c[f].split("="),
        m = h.slice(1).join("=");
      m.charAt(0) === '"' && (m = m.slice(1, -1));
      try {
        u[h[0].replace(d, decodeURIComponent)] = m.replace(
          d,
          decodeURIComponent
        );
      } catch {}
    }
    return u;
  }
  function a() {
    return i(document.cookie);
  }
  function s(l, u, c) {
    document.cookie = o(l, u, n({ path: "/" }, c));
  }
  (t.__esModule = !0),
    (t.encode = o),
    (t.parse = i),
    (t.getAll = a),
    (t.get = function (l) {
      return a()[l];
    }),
    (t.set = s),
    (t.remove = function (l, u) {
      s(l, "", n(n({}, u), { expires: -1 }));
    });
});
dp(co), co.encode, co.parse, co.getAll;
var OT = co.get,
  l2 = co.set,
  u2 = co.remove;
const zo = {
    get(e) {
      const t = OT(e);
      if (t !== void 0) return JSON.parse(t);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" &&
        (r = { secure: !0, sameSite: "none" }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        l2(e, JSON.stringify(t), r);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain), u2(e, n);
    },
  },
  _T = {
    get(e) {
      return zo.get(e) || zo.get(`_legacy_${e}`);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" && (r = { secure: !0 }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        l2(`_legacy_${e}`, JSON.stringify(t), r),
        zo.save(e, t, n);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain),
        u2(e, n),
        zo.remove(e, t),
        zo.remove(`_legacy_${e}`, t);
    },
  },
  AT = {
    get(e) {
      if (typeof sessionStorage > "u") return;
      const t = sessionStorage.getItem(e);
      return t != null ? JSON.parse(t) : void 0;
    },
    save(e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove(e) {
      sessionStorage.removeItem(e);
    },
  };
function jT(e, t, n) {
  var r = t === void 0 ? null : t,
    o = (function (l, u) {
      var c = atob(l);
      if (u) {
        for (var d = new Uint8Array(c.length), f = 0, h = c.length; f < h; ++f)
          d[f] = c.charCodeAt(f);
        return String.fromCharCode.apply(null, new Uint16Array(d.buffer));
      }
      return c;
    })(e, n !== void 0 && n),
    i =
      o.indexOf(
        `
`,
        10
      ) + 1,
    a = o.substring(i) + (r ? "//# sourceMappingURL=" + r : ""),
    s = new Blob([a], { type: "application/javascript" });
  return URL.createObjectURL(s);
}
var V0,
  $0,
  B0,
  nd,
  MT =
    ((V0 =
      "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
    ($0 = null),
    (B0 = !1),
    function (e) {
      return (nd = nd || jT(V0, $0, B0)), new Worker(nd, e);
    });
const rd = {};
class RT {
  constructor(t, n) {
    (this.cache = t),
      (this.clientId = n),
      (this.manifestKey = this.createManifestKeyFrom(this.clientId));
  }
  async add(t) {
    var n;
    const r = new Set(
      ((n = await this.cache.get(this.manifestKey)) === null || n === void 0
        ? void 0
        : n.keys) || []
    );
    r.add(t), await this.cache.set(this.manifestKey, { keys: [...r] });
  }
  async remove(t) {
    const n = await this.cache.get(this.manifestKey);
    if (n) {
      const r = new Set(n.keys);
      return (
        r.delete(t),
        r.size > 0
          ? await this.cache.set(this.manifestKey, { keys: [...r] })
          : await this.cache.remove(this.manifestKey)
      );
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(t) {
    return `@@auth0spajs@@::${t}`;
  }
}
const IT = {
    memory: () => new s2().enclosedCache,
    localstorage: () => new kT(),
  },
  H0 = (e) => IT[e],
  z0 = (e) => {
    const { openUrl: t, onRedirect: n } = e,
      r = Tn(e, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, r), {
      openUrl: t === !1 || t ? t : n,
    });
  },
  od = new fT();
class NT {
  constructor(t) {
    let n, r;
    if (
      ((this.userCache = new s2().enclosedCache),
      (this.defaultOptions = {
        authorizationParams: { scope: "openid profile email" },
        useRefreshTokensFallback: !1,
        useFormData: !0,
      }),
      (this._releaseLockOnPageHide = async () => {
        await od.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }),
      (this.options = Object.assign(
        Object.assign(Object.assign({}, this.defaultOptions), t),
        {
          authorizationParams: Object.assign(
            Object.assign({}, this.defaultOptions.authorizationParams),
            t.authorizationParams
          ),
        }
      )),
      typeof window < "u" &&
        (() => {
          if (!vl())
            throw new Error(
              "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
            );
          if (vl().subtle === void 0)
            throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
        })(),
      t.cache &&
        t.cacheLocation &&
        console.warn(
          "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
        ),
      t.cache)
    )
      r = t.cache;
    else {
      if (((n = t.cacheLocation || "memory"), !H0(n)))
        throw new Error(`Invalid cache location "${n}"`);
      r = H0(n)();
    }
    (this.httpTimeoutMs = t.httpTimeoutInSeconds
      ? 1e3 * t.httpTimeoutInSeconds
      : 1e4),
      (this.cookieStorage = t.legacySameSiteCookie === !1 ? zo : _T),
      (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
      (this.isAuthenticatedCookieName = ((a) => `auth0.${a}.is.authenticated`)(
        this.options.clientId
      )),
      (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1);
    const o = t.useCookiesForTransactions ? this.cookieStorage : AT;
    var i;
    (this.scope = qs(
      "openid",
      this.options.authorizationParams.scope,
      this.options.useRefreshTokens ? "offline_access" : ""
    )),
      (this.transactionManager = new CT(
        o,
        this.options.clientId,
        this.options.cookieDomain
      )),
      (this.nowProvider = this.options.nowProvider || Qw),
      (this.cacheManager = new ET(
        r,
        r.allKeys ? void 0 : new RT(r, this.options.clientId),
        this.nowProvider
      )),
      (this.domainUrl =
        ((i = this.options.domain),
        /^https?:\/\//.test(i) ? i : `https://${i}`)),
      (this.tokenIssuer = ((a, s) =>
        a ? (a.startsWith("https://") ? a : `https://${a}/`) : `${s}/`)(
        this.options.issuer,
        this.domainUrl
      )),
      typeof window < "u" &&
        window.Worker &&
        this.options.useRefreshTokens &&
        n === "memory" &&
        (this.options.workerUrl
          ? (this.worker = new Worker(this.options.workerUrl))
          : (this.worker = new MT()));
  }
  _url(t) {
    const n = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || Jw))
    );
    return `${this.domainUrl}${t}&auth0Client=${n}`;
  }
  _authorizeUrl(t) {
    return this._url(`/authorize?${Af(t)}`);
  }
  async _verifyIdToken(t, n, r) {
    const o = await this.nowProvider();
    return PT({
      iss: this.tokenIssuer,
      aud: this.options.clientId,
      id_token: t,
      nonce: n,
      organization: r,
      leeway: this.options.leeway,
      max_age:
        ((i = this.options.authorizationParams.max_age),
        typeof i != "string" ? i : parseInt(i, 10) || void 0),
      now: o,
    });
    var i;
  }
  _processOrgHint(t) {
    t
      ? this.cookieStorage.save(this.orgHintCookieName, t, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        })
      : this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        });
  }
  async _prepareAuthorizeUrl(t, n, r) {
    const o = L0(td()),
      i = L0(td()),
      a = td(),
      s = ((c) => {
        const d = new Uint8Array(c);
        return ((f) => {
          const h = { "+": "-", "/": "_", "=": "" };
          return f.replace(/[+/=]/g, (m) => h[m]);
        })(window.btoa(String.fromCharCode(...Array.from(d))));
      })(
        await (async (c) =>
          await vl().subtle.digest(
            { name: "SHA-256" },
            new TextEncoder().encode(c)
          ))(a)
      ),
      l = ((c, d, f, h, m, v, x, g) =>
        Object.assign(
          Object.assign(
            Object.assign({ client_id: c.clientId }, c.authorizationParams),
            f
          ),
          {
            scope: qs(d, f.scope),
            response_type: "code",
            response_mode: g || "query",
            state: h,
            nonce: m,
            redirect_uri: x || c.authorizationParams.redirect_uri,
            code_challenge: v,
            code_challenge_method: "S256",
          }
        ))(
        this.options,
        this.scope,
        t,
        o,
        i,
        s,
        t.redirect_uri || this.options.authorizationParams.redirect_uri || r,
        n == null ? void 0 : n.response_mode
      ),
      u = this._authorizeUrl(l);
    return {
      nonce: i,
      code_verifier: a,
      scope: l.scope,
      audience: l.audience || "default",
      redirect_uri: l.redirect_uri,
      state: o,
      url: u,
    };
  }
  async loginWithPopup(t, n) {
    var r;
    if (
      ((t = t || {}),
      !(n = n || {}).popup &&
        ((n.popup = ((s) => {
          const l = window.screenX + (window.innerWidth - 400) / 2,
            u = window.screenY + (window.innerHeight - 600) / 2;
          return window.open(
            s,
            "auth0:authorize:popup",
            `left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`
          );
        })("")),
        !n.popup))
    )
      throw new Error(
        "Unable to open a popup for loginWithPopup - window.open returned `null`"
      );
    const o = await this._prepareAuthorizeUrl(
      t.authorizationParams || {},
      { response_mode: "web_message" },
      window.location.origin
    );
    n.popup.location.href = o.url;
    const i = await ((s) =>
      new Promise((l, u) => {
        let c;
        const d = setInterval(() => {
            s.popup &&
              s.popup.closed &&
              (clearInterval(d),
              clearTimeout(f),
              window.removeEventListener("message", c, !1),
              u(new gT(s.popup)));
          }, 1e3),
          f = setTimeout(() => {
            clearInterval(d),
              u(new mT(s.popup)),
              window.removeEventListener("message", c, !1);
          }, 1e3 * (s.timeoutInSeconds || 60));
        (c = function (h) {
          if (h.data && h.data.type === "authorization_response") {
            if (
              (clearTimeout(f),
              clearInterval(d),
              window.removeEventListener("message", c, !1),
              s.popup.close(),
              h.data.response.error)
            )
              return u(jt.fromPayload(h.data.response));
            l(h.data.response);
          }
        }),
          window.addEventListener("message", c);
      }))(
      Object.assign(Object.assign({}, n), {
        timeoutInSeconds:
          n.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
      })
    );
    if (o.state !== i.state) throw new jt("state_mismatch", "Invalid state");
    const a =
      ((r = t.authorizationParams) === null || r === void 0
        ? void 0
        : r.organization) || this.options.authorizationParams.organization;
    await this._requestToken(
      {
        audience: o.audience,
        scope: o.scope,
        code_verifier: o.code_verifier,
        grant_type: "authorization_code",
        code: i.code,
        redirect_uri: o.redirect_uri,
      },
      { nonceIn: o.nonce, organization: a }
    );
  }
  async getUser() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.user;
  }
  async getIdTokenClaims() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.claims;
  }
  async loginWithRedirect(t = {}) {
    var n;
    const r = z0(t),
      { openUrl: o, fragment: i, appState: a } = r,
      s = Tn(r, ["openUrl", "fragment", "appState"]),
      l =
        ((n = s.authorizationParams) === null || n === void 0
          ? void 0
          : n.organization) || this.options.authorizationParams.organization,
      u = await this._prepareAuthorizeUrl(s.authorizationParams || {}),
      { url: c } = u,
      d = Tn(u, ["url"]);
    this.transactionManager.create(
      Object.assign(
        Object.assign(Object.assign({}, d), { appState: a }),
        l && { organization: l }
      )
    );
    const f = i ? `${c}#${i}` : c;
    o ? await o(f) : window.location.assign(f);
  }
  async handleRedirectCallback(t = window.location.href) {
    const n = t.split("?").slice(1);
    if (n.length === 0)
      throw new Error("There are no query params available for parsing.");
    const {
        state: r,
        code: o,
        error: i,
        error_description: a,
      } = ((d) => {
        d.indexOf("#") > -1 && (d = d.substring(0, d.indexOf("#")));
        const f = new URLSearchParams(d);
        return {
          state: f.get("state"),
          code: f.get("code") || void 0,
          error: f.get("error") || void 0,
          error_description: f.get("error_description") || void 0,
        };
      })(n.join("")),
      s = this.transactionManager.get();
    if (!s) throw new jt("missing_transaction", "Invalid state");
    if ((this.transactionManager.remove(), i))
      throw new pT(i, a || i, r, s.appState);
    if (!s.code_verifier || (s.state && s.state !== r))
      throw new jt("state_mismatch", "Invalid state");
    const l = s.organization,
      u = s.nonce,
      c = s.redirect_uri;
    return (
      await this._requestToken(
        Object.assign(
          {
            audience: s.audience,
            scope: s.scope,
            code_verifier: s.code_verifier,
            grant_type: "authorization_code",
            code: o,
          },
          c ? { redirect_uri: c } : {}
        ),
        { nonceIn: u, organization: l }
      ),
      { appState: s.appState }
    );
  }
  async checkSession(t) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
        this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(t);
    } catch {}
  }
  async getTokenSilently(t = {}) {
    var n;
    const r = Object.assign(Object.assign({ cacheMode: "on" }, t), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            t.authorizationParams
          ),
          {
            scope: qs(
              this.scope,
              (n = t.authorizationParams) === null || n === void 0
                ? void 0
                : n.scope
            ),
          }
        ),
      }),
      o = await ((i, a) => {
        let s = rd[a];
        return (
          s ||
            ((s = i().finally(() => {
              delete rd[a], (s = null);
            })),
            (rd[a] = s)),
          s
        );
      })(
        () => this._getTokenSilently(r),
        `${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`
      );
    return t.detailedResponse ? o : o == null ? void 0 : o.access_token;
  }
  async _getTokenSilently(t) {
    const { cacheMode: n } = t,
      r = Tn(t, ["cacheMode"]);
    if (n !== "off") {
      const o = await this._getEntryFromCache({
        scope: r.authorizationParams.scope,
        audience: r.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      });
      if (o) return o;
    }
    if (n !== "cache-only") {
      if (
        !(await (async (o, i = 3) => {
          for (let a = 0; a < i; a++) if (await o()) return !0;
          return !1;
        })(() => od.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
      )
        throw new _f();
      try {
        if (
          (window.addEventListener("pagehide", this._releaseLockOnPageHide),
          n !== "off")
        ) {
          const u = await this._getEntryFromCache({
            scope: r.authorizationParams.scope,
            audience: r.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          });
          if (u) return u;
        }
        const o = this.options.useRefreshTokens
            ? await this._getTokenUsingRefreshToken(r)
            : await this._getTokenFromIFrame(r),
          {
            id_token: i,
            access_token: a,
            oauthTokenScope: s,
            expires_in: l,
          } = o;
        return Object.assign(
          Object.assign(
            { id_token: i, access_token: a },
            s ? { scope: s } : null
          ),
          { expires_in: l }
        );
      } finally {
        await od.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(t = {}, n = {}) {
    var r;
    const o = Object.assign(Object.assign({}, t), {
      authorizationParams: Object.assign(
        Object.assign(
          Object.assign({}, this.options.authorizationParams),
          t.authorizationParams
        ),
        {
          scope: qs(
            this.scope,
            (r = t.authorizationParams) === null || r === void 0
              ? void 0
              : r.scope
          ),
        }
      ),
    });
    return (
      (n = Object.assign(Object.assign({}, hT), n)),
      await this.loginWithPopup(o, n),
      (
        await this.cacheManager.get(
          new Mn({
            scope: o.authorizationParams.scope,
            audience: o.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          })
        )
      ).access_token
    );
  }
  async isAuthenticated() {
    return !!(await this.getUser());
  }
  _buildLogoutUrl(t) {
    t.clientId !== null
      ? (t.clientId = t.clientId || this.options.clientId)
      : delete t.clientId;
    const n = t.logoutParams || {},
      { federated: r } = n,
      o = Tn(n, ["federated"]),
      i = r ? "&federated" : "";
    return (
      this._url(
        `/v2/logout?${Af(Object.assign({ clientId: t.clientId }, o))}`
      ) + i
    );
  }
  async logout(t = {}) {
    const n = z0(t),
      { openUrl: r } = n,
      o = Tn(n, ["openUrl"]);
    t.clientId === null
      ? await this.cacheManager.clear()
      : await this.cacheManager.clear(t.clientId || this.options.clientId),
      this.cookieStorage.remove(this.orgHintCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.cookieStorage.remove(this.isAuthenticatedCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.userCache.remove("@@user@@");
    const i = this._buildLogoutUrl(o);
    r ? await r(i) : r !== !1 && window.location.assign(i);
  }
  async _getTokenFromIFrame(t) {
    const n = Object.assign(Object.assign({}, t.authorizationParams), {
        prompt: "none",
      }),
      r = this.cookieStorage.get(this.orgHintCookieName);
    r && !n.organization && (n.organization = r);
    const {
      url: o,
      state: i,
      nonce: a,
      code_verifier: s,
      redirect_uri: l,
      scope: u,
      audience: c,
    } = await this._prepareAuthorizeUrl(
      n,
      { response_mode: "web_message" },
      window.location.origin
    );
    try {
      if (window.crossOriginIsolated)
        throw new jt(
          "login_required",
          "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
        );
      const d = t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
        f = await ((m, v, x = 60) =>
          new Promise((g, p) => {
            const w = window.document.createElement("iframe");
            w.setAttribute("width", "0"),
              w.setAttribute("height", "0"),
              (w.style.display = "none");
            const S = () => {
              window.document.body.contains(w) &&
                (window.document.body.removeChild(w),
                window.removeEventListener("message", C, !1));
            };
            let C;
            const _ = setTimeout(() => {
              p(new _f()), S();
            }, 1e3 * x);
            (C = function (E) {
              if (
                E.origin != v ||
                !E.data ||
                E.data.type !== "authorization_response"
              )
                return;
              const A = E.source;
              A && A.close(),
                E.data.response.error
                  ? p(jt.fromPayload(E.data.response))
                  : g(E.data.response),
                clearTimeout(_),
                window.removeEventListener("message", C, !1),
                setTimeout(S, 2e3);
            }),
              window.addEventListener("message", C, !1),
              window.document.body.appendChild(w),
              w.setAttribute("src", m);
          }))(o, this.domainUrl, d);
      if (i !== f.state) throw new jt("state_mismatch", "Invalid state");
      const h = await this._requestToken(
        Object.assign(Object.assign({}, t.authorizationParams), {
          code_verifier: s,
          code: f.code,
          grant_type: "authorization_code",
          redirect_uri: l,
          timeout: t.authorizationParams.timeout || this.httpTimeoutMs,
        }),
        { nonceIn: a, organization: n.organization }
      );
      return Object.assign(Object.assign({}, h), {
        scope: u,
        oauthTokenScope: h.scope,
        audience: c,
      });
    } catch (d) {
      throw (d.error === "login_required" && this.logout({ openUrl: !1 }), d);
    }
  }
  async _getTokenUsingRefreshToken(t) {
    const n = await this.cacheManager.get(
      new Mn({
        scope: t.authorizationParams.scope,
        audience: t.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      })
    );
    if (!((n && n.refresh_token) || this.worker)) {
      if (this.options.useRefreshTokensFallback)
        return await this._getTokenFromIFrame(t);
      throw new i2(
        t.authorizationParams.audience || "default",
        t.authorizationParams.scope
      );
    }
    const r =
        t.authorizationParams.redirect_uri ||
        this.options.authorizationParams.redirect_uri ||
        window.location.origin,
      o =
        typeof t.timeoutInSeconds == "number" ? 1e3 * t.timeoutInSeconds : null;
    try {
      const i = await this._requestToken(
        Object.assign(
          Object.assign(Object.assign({}, t.authorizationParams), {
            grant_type: "refresh_token",
            refresh_token: n && n.refresh_token,
            redirect_uri: r,
          }),
          o && { timeout: o }
        )
      );
      return Object.assign(Object.assign({}, i), {
        scope: t.authorizationParams.scope,
        oauthTokenScope: i.scope,
        audience: t.authorizationParams.audience || "default",
      });
    } catch (i) {
      if (
        (i.message.indexOf("Missing Refresh Token") > -1 ||
          (i.message && i.message.indexOf("invalid refresh token") > -1)) &&
        this.options.useRefreshTokensFallback
      )
        return await this._getTokenFromIFrame(t);
      throw i;
    }
  }
  async _saveEntryInCache(t) {
    const { id_token: n, decodedToken: r } = t,
      o = Tn(t, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: n, decodedToken: r }),
      await this.cacheManager.setIdToken(
        this.options.clientId,
        t.id_token,
        t.decodedToken
      ),
      await this.cacheManager.set(o);
  }
  async _getIdTokenFromCache() {
    const t = this.options.authorizationParams.audience || "default",
      n = await this.cacheManager.getIdToken(
        new Mn({
          clientId: this.options.clientId,
          audience: t,
          scope: this.scope,
        })
      ),
      r = this.userCache.get("@@user@@");
    return n && n.id_token === (r == null ? void 0 : r.id_token)
      ? r
      : (this.userCache.set("@@user@@", n), n);
  }
  async _getEntryFromCache({ scope: t, audience: n, clientId: r }) {
    const o = await this.cacheManager.get(
      new Mn({ scope: t, audience: n, clientId: r }),
      60
    );
    if (o && o.access_token) {
      const { access_token: i, oauthTokenScope: a, expires_in: s } = o,
        l = await this._getIdTokenFromCache();
      return (
        l &&
        Object.assign(
          Object.assign(
            { id_token: l.id_token, access_token: i },
            a ? { scope: a } : null
          ),
          { expires_in: s }
        )
      );
    }
  }
  async _requestToken(t, n) {
    const { nonceIn: r, organization: o } = n || {},
      i = await bT(
        Object.assign(
          {
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
          },
          t
        ),
        this.worker
      ),
      a = await this._verifyIdToken(i.id_token, r, o);
    return (
      await this._saveEntryInCache(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, i), {
              decodedToken: a,
              scope: t.scope,
              audience: t.audience || "default",
            }),
            i.scope ? { oauthTokenScope: i.scope } : null
          ),
          { client_id: this.options.clientId }
        )
      ),
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
      this._processOrgHint(o || a.claims.org_id),
      Object.assign(Object.assign({}, i), { decodedToken: a })
    );
  }
}
var c2 = { isAuthenticated: !1, isLoading: !0 },
  zn = function () {
    throw new Error("You forgot to wrap your component in <Auth0Provider>.");
  },
  DT = Te(Te({}, c2), {
    buildAuthorizeUrl: zn,
    buildLogoutUrl: zn,
    getAccessTokenSilently: zn,
    getAccessTokenWithPopup: zn,
    getIdTokenClaims: zn,
    loginWithRedirect: zn,
    loginWithPopup: zn,
    logout: zn,
    handleRedirectCallback: zn,
  }),
  hp = k.createContext(DT),
  U0 = (function (e) {
    cT(t, e);
    function t(n, r) {
      var o = e.call(this, r || n) || this;
      return (
        (o.error = n),
        (o.error_description = r),
        Object.setPrototypeOf(o, t.prototype),
        o
      );
    }
    return t;
  })(Error),
  LT = /[?&]code=[^&]+/,
  FT = /[?&]state=[^&]+/,
  VT = /[?&]error=[^&]+/,
  $T = function (e) {
    return (
      e === void 0 && (e = window.location.search),
      (LT.test(e) || VT.test(e)) && FT.test(e)
    );
  },
  d2 = function (e) {
    return function (t) {
      return t instanceof Error
        ? t
        : t !== null &&
          typeof t == "object" &&
          "error" in t &&
          typeof t.error == "string"
        ? "error_description" in t && typeof t.error_description == "string"
          ? new U0(t.error, t.error_description)
          : new U0(t.error)
        : new Error(e);
    };
  },
  W0 = d2("Login failed"),
  id = d2("Get access token failed"),
  f2 = function (e) {
    var t;
    e != null &&
      e.redirectUri &&
      (console.warn(
        "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"
      ),
      (e.authorizationParams = e.authorizationParams || {}),
      (e.authorizationParams.redirect_uri = e.redirectUri),
      delete e.redirectUri),
      !(
        (t = e == null ? void 0 : e.authorizationParams) === null ||
        t === void 0
      ) &&
        t.redirectUri &&
        (console.warn(
          "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"
        ),
        (e.authorizationParams.redirect_uri =
          e.authorizationParams.redirectUri),
        delete e.authorizationParams.redirectUri);
  },
  BT = function (e, t) {
    switch (t.type) {
      case "LOGIN_POPUP_STARTED":
        return Te(Te({}, e), { isLoading: !0 });
      case "LOGIN_POPUP_COMPLETE":
      case "INITIALISED":
        return Te(Te({}, e), {
          isAuthenticated: !!t.user,
          user: t.user,
          isLoading: !1,
          error: void 0,
        });
      case "HANDLE_REDIRECT_COMPLETE":
      case "GET_ACCESS_TOKEN_COMPLETE":
        return e.user === t.user
          ? e
          : Te(Te({}, e), { isAuthenticated: !!t.user, user: t.user });
      case "LOGOUT":
        return Te(Te({}, e), { isAuthenticated: !1, user: void 0 });
      case "ERROR":
        return Te(Te({}, e), { isLoading: !1, error: t.error });
    }
  },
  HT = function (e) {
    return (
      f2(e),
      Te(Te({}, e), { auth0Client: { name: "auth0-react", version: "2.2.4" } })
    );
  },
  zT = function (e) {
    window.history.replaceState(
      {},
      document.title,
      (e == null ? void 0 : e.returnTo) || window.location.pathname
    );
  },
  UT = function (e) {
    var t = e.children,
      n = e.skipRedirectCallback,
      r = e.onRedirectCallback,
      o = r === void 0 ? zT : r,
      i = e.context,
      a = i === void 0 ? hp : i,
      s = dT(e, [
        "children",
        "skipRedirectCallback",
        "onRedirectCallback",
        "context",
      ]),
      l = k.useState(function () {
        return new NT(HT(s));
      })[0],
      u = k.useReducer(BT, c2),
      c = u[0],
      d = u[1],
      f = k.useRef(!1);
    k.useEffect(
      function () {
        f.current ||
          ((f.current = !0),
          (function () {
            return xr(void 0, void 0, void 0, function () {
              var C, _, E;
              return Sr(this, function (A) {
                switch (A.label) {
                  case 0:
                    return (
                      A.trys.push([0, 7, , 8]),
                      (C = void 0),
                      $T() && !n ? [4, l.handleRedirectCallback()] : [3, 3]
                    );
                  case 1:
                    return (_ = A.sent().appState), [4, l.getUser()];
                  case 2:
                    return (C = A.sent()), o(_, C), [3, 6];
                  case 3:
                    return [4, l.checkSession()];
                  case 4:
                    return A.sent(), [4, l.getUser()];
                  case 5:
                    (C = A.sent()), (A.label = 6);
                  case 6:
                    return d({ type: "INITIALISED", user: C }), [3, 8];
                  case 7:
                    return (
                      (E = A.sent()), d({ type: "ERROR", error: W0(E) }), [3, 8]
                    );
                  case 8:
                    return [2];
                }
              });
            });
          })());
      },
      [l, o, n]
    );
    var h = k.useCallback(
        function (C) {
          return f2(C), l.loginWithRedirect(C);
        },
        [l]
      ),
      m = k.useCallback(
        function (C, _) {
          return xr(void 0, void 0, void 0, function () {
            var E, A;
            return Sr(this, function (R) {
              switch (R.label) {
                case 0:
                  d({ type: "LOGIN_POPUP_STARTED" }), (R.label = 1);
                case 1:
                  return R.trys.push([1, 3, , 4]), [4, l.loginWithPopup(C, _)];
                case 2:
                  return R.sent(), [3, 4];
                case 3:
                  return (
                    (E = R.sent()), d({ type: "ERROR", error: W0(E) }), [2]
                  );
                case 4:
                  return [4, l.getUser()];
                case 5:
                  return (
                    (A = R.sent()),
                    d({ type: "LOGIN_POPUP_COMPLETE", user: A }),
                    [2]
                  );
              }
            });
          });
        },
        [l]
      ),
      v = k.useCallback(
        function (C) {
          return (
            C === void 0 && (C = {}),
            xr(void 0, void 0, void 0, function () {
              return Sr(this, function (_) {
                switch (_.label) {
                  case 0:
                    return [4, l.logout(C)];
                  case 1:
                    return (
                      _.sent(),
                      (C.openUrl || C.openUrl === !1) && d({ type: "LOGOUT" }),
                      [2]
                    );
                }
              });
            })
          );
        },
        [l]
      ),
      x = k.useCallback(
        function (C) {
          return xr(void 0, void 0, void 0, function () {
            var _, E, A, R;
            return Sr(this, function (M) {
              switch (M.label) {
                case 0:
                  return M.trys.push([0, 2, 3, 5]), [4, l.getTokenSilently(C)];
                case 1:
                  return (_ = M.sent()), [3, 5];
                case 2:
                  throw ((E = M.sent()), id(E));
                case 3:
                  return (
                    (A = d),
                    (R = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return A.apply(void 0, [((R.user = M.sent()), R)]), [7];
                case 5:
                  return [2, _];
              }
            });
          });
        },
        [l]
      ),
      g = k.useCallback(
        function (C, _) {
          return xr(void 0, void 0, void 0, function () {
            var E, A, R, M;
            return Sr(this, function (B) {
              switch (B.label) {
                case 0:
                  return (
                    B.trys.push([0, 2, 3, 5]), [4, l.getTokenWithPopup(C, _)]
                  );
                case 1:
                  return (E = B.sent()), [3, 5];
                case 2:
                  throw ((A = B.sent()), id(A));
                case 3:
                  return (
                    (R = d),
                    (M = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return R.apply(void 0, [((M.user = B.sent()), M)]), [7];
                case 5:
                  return [2, E];
              }
            });
          });
        },
        [l]
      ),
      p = k.useCallback(
        function () {
          return l.getIdTokenClaims();
        },
        [l]
      ),
      w = k.useCallback(
        function (C) {
          return xr(void 0, void 0, void 0, function () {
            var _, E, A;
            return Sr(this, function (R) {
              switch (R.label) {
                case 0:
                  return (
                    R.trys.push([0, 2, 3, 5]), [4, l.handleRedirectCallback(C)]
                  );
                case 1:
                  return [2, R.sent()];
                case 2:
                  throw ((_ = R.sent()), id(_));
                case 3:
                  return (
                    (E = d),
                    (A = { type: "HANDLE_REDIRECT_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return E.apply(void 0, [((A.user = R.sent()), A)]), [7];
                case 5:
                  return [2];
              }
            });
          });
        },
        [l]
      ),
      S = k.useMemo(
        function () {
          return Te(Te({}, c), {
            getAccessTokenSilently: x,
            getAccessTokenWithPopup: g,
            getIdTokenClaims: p,
            loginWithRedirect: h,
            loginWithPopup: m,
            logout: v,
            handleRedirectCallback: w,
          });
        },
        [c, x, g, p, h, m, v, w]
      );
    return T.createElement(a.Provider, { value: S }, t);
  },
  ki = function (e) {
    return e === void 0 && (e = hp), k.useContext(e);
  },
  WT = function () {
    return T.createElement(T.Fragment, null);
  },
  KT = function () {
    return xr(void 0, void 0, void 0, function () {
      return Sr(this, function (e) {
        return [2];
      });
    });
  },
  ZT = function () {
    return "".concat(window.location.pathname).concat(window.location.search);
  },
  GT = function (e, t) {
    return (
      t === void 0 && (t = {}),
      function (r) {
        var o = this,
          i = t.returnTo,
          a = i === void 0 ? ZT : i,
          s = t.onRedirecting,
          l = s === void 0 ? WT : s,
          u = t.onBeforeAuthentication,
          c = u === void 0 ? KT : u,
          d = t.loginOptions,
          f = t.context,
          h = f === void 0 ? hp : f,
          m = ki(h),
          v = m.isAuthenticated,
          x = m.isLoading,
          g = m.loginWithRedirect;
        return (
          k.useEffect(
            function () {
              if (!(x || v)) {
                var p = Te(Te({}, d), {
                  appState: Te(Te({}, d && d.appState), {
                    returnTo: typeof a == "function" ? a() : a,
                  }),
                });
                (function () {
                  return xr(o, void 0, void 0, function () {
                    return Sr(this, function (w) {
                      switch (w.label) {
                        case 0:
                          return [4, c()];
                        case 1:
                          return w.sent(), [4, g(p)];
                        case 2:
                          return w.sent(), [2];
                      }
                    });
                  });
                })();
              }
            },
            [x, v, g, c, d, a]
          ),
          v ? T.createElement(e, Te({}, r)) : l()
        );
      }
    );
  },
  h2 = { exports: {} },
  YT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  XT = YT,
  qT = XT;
function p2() {}
function m2() {}
m2.resetWarningCache = p2;
var JT = function () {
  function e(r, o, i, a, s, l) {
    if (l !== qT) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: m2,
    resetWarningCache: p2,
  };
  return (n.PropTypes = n), n;
};
h2.exports = JT();
var QT = h2.exports;
const ke = _o(QT);
function eP(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var g2 = k,
  tP = eP(g2);
function K0(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nP(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var rP = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function oP(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [],
      s;
    function l() {
      (s = e(
        a.map(function (c) {
          return c.props;
        })
      )),
        u.canUseDOM ? t(s) : n && (s = n(s));
    }
    var u = (function (c) {
      nP(d, c);
      function d() {
        return c.apply(this, arguments) || this;
      }
      (d.peek = function () {
        return s;
      }),
        (d.rewind = function () {
          if (d.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var m = s;
          return (s = void 0), (a = []), m;
        });
      var f = d.prototype;
      return (
        (f.UNSAFE_componentWillMount = function () {
          a.push(this), l();
        }),
        (f.componentDidUpdate = function () {
          l();
        }),
        (f.componentWillUnmount = function () {
          var m = a.indexOf(this);
          a.splice(m, 1), l();
        }),
        (f.render = function () {
          return tP.createElement(i, this.props);
        }),
        d
      );
    })(g2.PureComponent);
    return (
      K0(u, "displayName", "SideEffect(" + r(i) + ")"),
      K0(u, "canUseDOM", rP),
      u
    );
  };
}
var iP = oP;
const aP = _o(iP);
var sP = typeof Element < "u",
  lP = typeof Map == "function",
  uP = typeof Set == "function",
  cP = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function yl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!yl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (lP && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!yl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (uP && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (cP && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (sP && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !yl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var dP = function (t, n) {
  try {
    return yl(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const v2 = _o(dP);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Z0 = Object.getOwnPropertySymbols,
  fP = Object.prototype.hasOwnProperty,
  hP = Object.prototype.propertyIsEnumerable;
function pP(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function mP() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var gP = mP()
  ? Object.assign
  : function (e, t) {
      for (var n, r = pP(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var a in n) fP.call(n, a) && (r[a] = n[a]);
        if (Z0) {
          o = Z0(n);
          for (var s = 0; s < o.length; s++)
            hP.call(n, o[s]) && (r[o[s]] = n[o[s]]);
        }
      }
      return r;
    };
const vP = _o(gP);
var mo = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  q = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(q).map(function (e) {
  return q[e];
});
var Ee = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  eu = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Ga = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  yP = Object.keys(eu).reduce(function (e, t) {
    return (e[eu[t]] = t), e;
  }, {}),
  wP = [q.NOSCRIPT, q.SCRIPT, q.STYLE],
  gn = "data-react-helmet",
  xP =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  SP = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  bP = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  gt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  kP = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  G0 = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  EP = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  jf = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  CP = function (t) {
    var n = fi(t, q.TITLE),
      r = fi(t, Ga.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = fi(t, Ga.DEFAULT_TITLE);
    return n || o || void 0;
  },
  TP = function (t) {
    return fi(t, Ga.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  ad = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return gt({}, r, o);
      }, {});
  },
  PP = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[q.BASE] < "u";
      })
      .map(function (r) {
        return r[q.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var i = Object.keys(o), a = 0; a < i.length; a++) {
            var s = i[a],
              l = s.toLowerCase();
            if (t.indexOf(l) !== -1 && o[l]) return r.concat(o);
          }
        return r;
      }, []);
  },
  Qi = function (t, n, r) {
    var o = {};
    return r
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] < "u" &&
              jP(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  xP(i[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[t];
      })
      .reverse()
      .reduce(function (i, a) {
        var s = {};
        a.filter(function (f) {
          for (var h = void 0, m = Object.keys(f), v = 0; v < m.length; v++) {
            var x = m[v],
              g = x.toLowerCase();
            n.indexOf(g) !== -1 &&
              !(h === Ee.REL && f[h].toLowerCase() === "canonical") &&
              !(g === Ee.REL && f[g].toLowerCase() === "stylesheet") &&
              (h = g),
              n.indexOf(x) !== -1 &&
                (x === Ee.INNER_HTML ||
                  x === Ee.CSS_TEXT ||
                  x === Ee.ITEM_PROP) &&
                (h = x);
          }
          if (!h || !f[h]) return !1;
          var p = f[h].toLowerCase();
          return (
            o[h] || (o[h] = {}),
            s[h] || (s[h] = {}),
            o[h][p] ? !1 : ((s[h][p] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (f) {
            return i.push(f);
          });
        for (var l = Object.keys(s), u = 0; u < l.length; u++) {
          var c = l[u],
            d = vP({}, o[c], s[c]);
          o[c] = d;
        }
        return i;
      }, [])
      .reverse();
  },
  fi = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  OP = function (t) {
    return {
      baseTag: PP([Ee.HREF, Ee.TARGET], t),
      bodyAttributes: ad(mo.BODY, t),
      defer: fi(t, Ga.DEFER),
      encode: fi(t, Ga.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: ad(mo.HTML, t),
      linkTags: Qi(q.LINK, [Ee.REL, Ee.HREF], t),
      metaTags: Qi(
        q.META,
        [Ee.NAME, Ee.CHARSET, Ee.HTTPEQUIV, Ee.PROPERTY, Ee.ITEM_PROP],
        t
      ),
      noscriptTags: Qi(q.NOSCRIPT, [Ee.INNER_HTML], t),
      onChangeClientState: TP(t),
      scriptTags: Qi(q.SCRIPT, [Ee.SRC, Ee.INNER_HTML], t),
      styleTags: Qi(q.STYLE, [Ee.CSS_TEXT], t),
      title: CP(t),
      titleAttributes: ad(mo.TITLE, t),
    };
  },
  Mf = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            Mf(t);
          }, 0);
    };
  })(),
  Y0 = function (t) {
    return clearTimeout(t);
  },
  _P =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        Mf
      : global.requestAnimationFrame || Mf,
  AP =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        Y0
      : global.cancelAnimationFrame || Y0,
  jP = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  ea = null,
  MP = function (t) {
    ea && AP(ea),
      t.defer
        ? (ea = _P(function () {
            X0(t, function () {
              ea = null;
            });
          }))
        : (X0(t), (ea = null));
  },
  X0 = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      c = t.scriptTags,
      d = t.styleTags,
      f = t.title,
      h = t.titleAttributes;
    Rf(q.BODY, o), Rf(q.HTML, i), RP(f, h);
    var m = {
        baseTag: Fo(q.BASE, r),
        linkTags: Fo(q.LINK, a),
        metaTags: Fo(q.META, s),
        noscriptTags: Fo(q.NOSCRIPT, l),
        scriptTags: Fo(q.SCRIPT, c),
        styleTags: Fo(q.STYLE, d),
      },
      v = {},
      x = {};
    Object.keys(m).forEach(function (g) {
      var p = m[g],
        w = p.newTags,
        S = p.oldTags;
      w.length && (v[g] = w), S.length && (x[g] = m[g].oldTags);
    }),
      n && n(),
      u(t, v, x);
  },
  y2 = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  RP = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = y2(t)),
      Rf(q.TITLE, n);
  },
  Rf = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(gn),
          i = o ? o.split(",") : [],
          a = [].concat(i),
          s = Object.keys(n),
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l],
          c = n[u] || "";
        r.getAttribute(u) !== c && r.setAttribute(u, c),
          i.indexOf(u) === -1 && i.push(u);
        var d = a.indexOf(u);
        d !== -1 && a.splice(d, 1);
      }
      for (var f = a.length - 1; f >= 0; f--) r.removeAttribute(a[f]);
      i.length === a.length
        ? r.removeAttribute(gn)
        : r.getAttribute(gn) !== s.join(",") && r.setAttribute(gn, s.join(","));
    }
  },
  Fo = function (t, n) {
    var r = document.head || document.querySelector(q.HEAD),
      o = r.querySelectorAll(t + "[" + gn + "]"),
      i = Array.prototype.slice.call(o),
      a = [],
      s = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var c in l)
            if (l.hasOwnProperty(c))
              if (c === Ee.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (c === Ee.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var d = typeof l[c] > "u" ? "" : l[c];
                u.setAttribute(c, d);
              }
          u.setAttribute(gn, "true"),
            i.some(function (f, h) {
              return (s = h), u.isEqualNode(f);
            })
              ? i.splice(s, 1)
              : a.push(u);
        }),
      i.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      a.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: i, newTags: a }
    );
  },
  w2 = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  IP = function (t, n, r, o) {
    var i = w2(r),
      a = y2(n);
    return i
      ? "<" + t + " " + gn + '="true" ' + i + ">" + jf(a, o) + "</" + t + ">"
      : "<" + t + " " + gn + '="true">' + jf(a, o) + "</" + t + ">";
  },
  NP = function (t, n, r) {
    return n.reduce(function (o, i) {
      var a = Object.keys(i)
          .filter(function (u) {
            return !(u === Ee.INNER_HTML || u === Ee.CSS_TEXT);
          })
          .reduce(function (u, c) {
            var d = typeof i[c] > "u" ? c : c + '="' + jf(i[c], r) + '"';
            return u ? u + " " + d : d;
          }, ""),
        s = i.innerHTML || i.cssText || "",
        l = wP.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        gn +
        '="true" ' +
        a +
        (l ? "/>" : ">" + s + "</" + t + ">")
      );
    }, "");
  },
  x2 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[eu[o] || o] = t[o]), r;
    }, n);
  },
  DP = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[yP[o] || o] = t[o]), r;
    }, n);
  },
  LP = function (t, n, r) {
    var o,
      i = ((o = { key: n }), (o[gn] = !0), o),
      a = x2(r, i);
    return [T.createElement(q.TITLE, a, n)];
  },
  FP = function (t, n) {
    return n.map(function (r, o) {
      var i,
        a = ((i = { key: o }), (i[gn] = !0), i);
      return (
        Object.keys(r).forEach(function (s) {
          var l = eu[s] || s;
          if (l === Ee.INNER_HTML || l === Ee.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            a.dangerouslySetInnerHTML = { __html: u };
          } else a[l] = r[s];
        }),
        T.createElement(t, a)
      );
    });
  },
  Un = function (t, n, r) {
    switch (t) {
      case q.TITLE:
        return {
          toComponent: function () {
            return LP(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return IP(t, n.title, n.titleAttributes, r);
          },
        };
      case mo.BODY:
      case mo.HTML:
        return {
          toComponent: function () {
            return x2(n);
          },
          toString: function () {
            return w2(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return FP(t, n);
          },
          toString: function () {
            return NP(t, n, r);
          },
        };
    }
  },
  S2 = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      c = t.styleTags,
      d = t.title,
      f = d === void 0 ? "" : d,
      h = t.titleAttributes;
    return {
      base: Un(q.BASE, n, o),
      bodyAttributes: Un(mo.BODY, r, o),
      htmlAttributes: Un(mo.HTML, i, o),
      link: Un(q.LINK, a, o),
      meta: Un(q.META, s, o),
      noscript: Un(q.NOSCRIPT, l, o),
      script: Un(q.SCRIPT, u, o),
      style: Un(q.STYLE, c, o),
      title: Un(q.TITLE, { title: f, titleAttributes: h }, o),
    };
  },
  VP = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          kP(i, o);
          function i() {
            return SP(this, i), EP(this, o.apply(this, arguments));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (s) {
              return !v2(this.props, s);
            }),
            (i.prototype.mapNestedChildrenToProps = function (s, l) {
              if (!l) return null;
              switch (s.type) {
                case q.SCRIPT:
                case q.NOSCRIPT:
                  return { innerHTML: l };
                case q.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  s.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (s) {
              var l,
                u = s.child,
                c = s.arrayTypeChildren,
                d = s.newChildProps,
                f = s.nestedChildren;
              return gt(
                {},
                c,
                ((l = {}),
                (l[u.type] = [].concat(c[u.type] || [], [
                  gt({}, d, this.mapNestedChildrenToProps(u, f)),
                ])),
                l)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (s) {
              var l,
                u,
                c = s.child,
                d = s.newProps,
                f = s.newChildProps,
                h = s.nestedChildren;
              switch (c.type) {
                case q.TITLE:
                  return gt(
                    {},
                    d,
                    ((l = {}),
                    (l[c.type] = h),
                    (l.titleAttributes = gt({}, f)),
                    l)
                  );
                case q.BODY:
                  return gt({}, d, { bodyAttributes: gt({}, f) });
                case q.HTML:
                  return gt({}, d, { htmlAttributes: gt({}, f) });
              }
              return gt({}, d, ((u = {}), (u[c.type] = gt({}, f)), u));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (s, l) {
              var u = gt({}, l);
              return (
                Object.keys(s).forEach(function (c) {
                  var d;
                  u = gt({}, u, ((d = {}), (d[c] = s[c]), d));
                }),
                u
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (s, l) {
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (s, l) {
              var u = this,
                c = {};
              return (
                T.Children.forEach(s, function (d) {
                  if (!(!d || !d.props)) {
                    var f = d.props,
                      h = f.children,
                      m = G0(f, ["children"]),
                      v = DP(m);
                    switch ((u.warnOnInvalidChildren(d, h), d.type)) {
                      case q.LINK:
                      case q.META:
                      case q.NOSCRIPT:
                      case q.SCRIPT:
                      case q.STYLE:
                        c = u.flattenArrayTypeChildren({
                          child: d,
                          arrayTypeChildren: c,
                          newChildProps: v,
                          nestedChildren: h,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: d,
                          newProps: l,
                          newChildProps: v,
                          nestedChildren: h,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(c, l)),
                l
              );
            }),
            (i.prototype.render = function () {
              var s = this.props,
                l = s.children,
                u = G0(s, ["children"]),
                c = gt({}, u);
              return (
                l && (c = this.mapChildrenToProps(l, c)), T.createElement(t, c)
              );
            }),
            bP(i, null, [
              {
                key: "canUseDOM",
                set: function (s) {
                  t.canUseDOM = s;
                },
              },
            ]),
            i
          );
        })(T.Component)),
      (n.propTypes = {
        base: ke.object,
        bodyAttributes: ke.object,
        children: ke.oneOfType([ke.arrayOf(ke.node), ke.node]),
        defaultTitle: ke.string,
        defer: ke.bool,
        encodeSpecialCharacters: ke.bool,
        htmlAttributes: ke.object,
        link: ke.arrayOf(ke.object),
        meta: ke.arrayOf(ke.object),
        noscript: ke.arrayOf(ke.object),
        onChangeClientState: ke.func,
        script: ke.arrayOf(ke.object),
        style: ke.arrayOf(ke.object),
        title: ke.string,
        titleAttributes: ke.object,
        titleTemplate: ke.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = S2({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  $P = function () {
    return null;
  },
  BP = aP(OP, MP, S2)($P),
  ut = VP(BP);
ut.renderStatic = ut.rewind;
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tu() {
  return (
    (tu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tu.apply(this, arguments)
  );
}
var Pr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Pr || (Pr = {}));
const q0 = "popstate";
function HP(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return If(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : k2(o);
  }
  return UP(t, n, null, e);
}
function Ct(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function b2(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zP() {
  return Math.random().toString(36).substr(2, 8);
}
function J0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function If(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    tu(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Lu(t) : t,
      { state: n, key: (t && t.key) || r || zP() }
    )
  );
}
function k2(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Lu(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function UP(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Pr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(tu({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = Pr.Pop;
    let x = c(),
      g = x == null ? null : x - u;
    (u = x), l && l({ action: s, location: v.location, delta: g });
  }
  function f(x, g) {
    s = Pr.Push;
    let p = If(v.location, x, g);
    n && n(p, x), (u = c() + 1);
    let w = J0(p, u),
      S = v.createHref(p);
    try {
      a.pushState(w, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    i && l && l({ action: s, location: v.location, delta: 1 });
  }
  function h(x, g) {
    s = Pr.Replace;
    let p = If(v.location, x, g);
    n && n(p, x), (u = c());
    let w = J0(p, u),
      S = v.createHref(p);
    a.replaceState(w, "", S),
      i && l && l({ action: s, location: v.location, delta: 0 });
  }
  function m(x) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof x == "string" ? x : k2(x);
    return (
      (p = p.replace(/ $/, "%20")),
      Ct(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, g)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(q0, d),
        (l = x),
        () => {
          o.removeEventListener(q0, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: m,
    encodeLocation(x) {
      let g = m(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return a.go(x);
    },
  };
  return v;
}
var Q0;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Q0 || (Q0 = {}));
function WP(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Lu(t) : t,
    o = T2(r.pathname || "/", n);
  if (o == null) return null;
  let i = E2(e);
  KP(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = o4(o);
    a = t4(i[s], l);
  }
  return a;
}
function E2(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ct(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = hi([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ct(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      E2(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: QP(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of C2(i.path)) o(i, a, l);
    }),
    t
  );
}
function C2(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = C2(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function KP(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : e4(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ZP = /^:[\w-]+$/,
  GP = 3,
  YP = 2,
  XP = 1,
  qP = 10,
  JP = -2,
  eg = (e) => e === "*";
function QP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(eg) && (r += JP),
    t && (r += YP),
    n
      .filter((o) => !eg(o))
      .reduce((o, i) => o + (ZP.test(i) ? GP : i === "" ? XP : qP), r)
  );
}
function e4(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function t4(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = n4(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: hi([o, c.pathname]),
      pathnameBase: i4(hi([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = hi([o, c.pathnameBase]));
  }
  return i;
}
function n4(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = r4(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let v = s[d] || "";
        a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const m = s[d];
      return (
        h && !m ? (u[f] = void 0) : (u[f] = (m || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function r4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    b2(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function o4(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      b2(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function T2(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const hi = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i4 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function a4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const P2 = ["post", "put", "patch", "delete"];
new Set(P2);
const s4 = ["get", ...P2];
new Set(s4);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nu.apply(this, arguments)
  );
}
const l4 = k.createContext(null),
  u4 = k.createContext(null),
  O2 = k.createContext(null),
  Fu = k.createContext(null),
  cs = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _2 = k.createContext(null);
function pp() {
  return k.useContext(Fu) != null;
}
function c4() {
  return pp() || Ct(!1), k.useContext(Fu).location;
}
function A2() {
  let { matches: e } = k.useContext(cs),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function d4(e, t) {
  return f4(e, t);
}
function f4(e, t, n, r) {
  pp() || Ct(!1);
  let { navigator: o } = k.useContext(O2),
    { matches: i } = k.useContext(cs),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = c4(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? Lu(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || Ct(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let m = WP(e, { pathname: h }),
    v = v4(
      m &&
        m.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: hi([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : hi([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? k.createElement(
        Fu.Provider,
        {
          value: {
            location: nu(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Pr.Pop,
          },
        },
        v
      )
    : v;
}
function h4() {
  let e = S4(),
    t = a4(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: o }, n) : null,
    null
  );
}
const p4 = k.createElement(h4, null);
class m4 extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          cs.Provider,
          { value: this.props.routeContext },
          k.createElement(_2.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function g4(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(l4);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(cs.Provider, { value: t }, r)
  );
}
function v4(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    c >= 0 || Ct(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          m =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let h,
      m = !1,
      v = null,
      x = null;
    n &&
      ((h = s && d.route.id ? s[d.route.id] : void 0),
      (v = d.route.errorElement || p4),
      l &&
        (u < 0 && f === 0
          ? (b4("route-fallback", !1), (m = !0), (x = null))
          : u === f &&
            ((m = !0), (x = d.route.hydrateFallbackElement || null))));
    let g = t.concat(a.slice(0, f + 1)),
      p = () => {
        let w;
        return (
          h
            ? (w = v)
            : m
            ? (w = x)
            : d.route.Component
            ? (w = k.createElement(d.route.Component, null))
            : d.route.element
            ? (w = d.route.element)
            : (w = c),
          k.createElement(g4, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? k.createElement(m4, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Nf = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Nf || {});
function y4(e) {
  let t = k.useContext(u4);
  return t || Ct(!1), t;
}
function w4(e) {
  let t = k.useContext(cs);
  return t || Ct(!1), t;
}
function x4(e) {
  let t = w4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ct(!1), n.route.id;
}
function S4() {
  var e;
  let t = k.useContext(_2),
    n = y4(Nf.UseRouteError),
    r = x4(Nf.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const tg = {};
function b4(e, t, n) {
  !t && !tg[e] && (tg[e] = !0);
}
function vt(e) {
  Ct(!1);
}
function k4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Pr.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  pp() && Ct(!1);
  let l = t.replace(/^\/*/, "/"),
    u = k.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: nu({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof r == "string" && (r = Lu(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: m = "default",
    } = r,
    v = k.useMemo(() => {
      let x = T2(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: h, key: m },
            navigationType: o,
          };
    }, [l, c, d, f, h, m, o]);
  return v == null
    ? null
    : k.createElement(
        O2.Provider,
        { value: u },
        k.createElement(Fu.Provider, { children: n, value: v })
      );
}
function E4(e) {
  let { children: t, location: n } = e;
  return d4(Df(t), n);
}
new Promise(() => {});
function Df(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, o) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === k.Fragment) {
        n.push.apply(n, Df(r.props.children, i));
        return;
      }
      r.type !== vt && Ct(!1), !r.props.index || !r.props.children || Ct(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Df(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const C4 = "6";
try {
  window.__reactRouterVersion = C4;
} catch {}
const T4 = "startTransition",
  ng = Md[T4];
function P4(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = k.useRef();
  i.current == null && (i.current = HP({ window: o, v5Compat: !0 }));
  let a = i.current,
    [s, l] = k.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = k.useCallback(
      (d) => {
        u && ng ? ng(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    k.useLayoutEffect(() => a.listen(c), [a, c]),
    k.createElement(k4, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  );
}
var rg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(rg || (rg = {}));
var og;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(og || (og = {}));
function O4() {
  return (
    k.useEffect(() => {
      const e = setTimeout(() => {
        window.location.href = "/sistemalogin";
      }, 3e3);
      return () => clearTimeout(e);
    }, []),
    y.jsxs("main", {
      className: "_home",
      children: [
        y.jsx("img", {
          src: "./config/assets/logo.svg",
          alt: "Logo do Ministério Kids",
          width: "196px",
          height: "246px",
        }),
        y.jsx("img", {
          src: "./config/assets/logotipo.svg",
          alt: "Logotipo do Ministério Kids",
          width: "199px",
          height: "133px",
        }),
      ],
    })
  );
}
const _4 = k.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var A4 = Object.defineProperty,
  ru = Object.getOwnPropertySymbols,
  j2 = Object.prototype.hasOwnProperty,
  M2 = Object.prototype.propertyIsEnumerable,
  ig = (e, t, n) =>
    t in e
      ? A4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ag = (e, t) => {
    for (var n in t || (t = {})) j2.call(t, n) && ig(e, n, t[n]);
    if (ru) for (var n of ru(t)) M2.call(t, n) && ig(e, n, t[n]);
    return e;
  },
  sg = (e, t) => {
    var n = {};
    for (var r in e) j2.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ru)
      for (var r of ru(e)) t.indexOf(r) < 0 && M2.call(e, r) && (n[r] = e[r]);
    return n;
  };
const $n = k.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o,
      size: i,
      weight: a,
      mirrored: s,
      children: l,
      weights: u,
    } = n,
    c = sg(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    d = k.useContext(_4),
    {
      color: f = "currentColor",
      size: h,
      weight: m = "regular",
      mirrored: v = !1,
    } = d,
    x = sg(d, ["color", "size", "weight", "mirrored"]);
  return T.createElement(
    "svg",
    ag(
      ag(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: i ?? h,
          height: i ?? h,
          fill: o ?? f,
          viewBox: "0 0 256 256",
          transform: s || v ? "scale(-1, 1)" : void 0,
        },
        x
      ),
      c
    ),
    !!r && T.createElement("title", null, r),
    l,
    u.get(a ?? m)
  );
});
$n.displayName = "IconBase";
const j4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M236,144a68.07,68.07,0,0,1-68,68H80a12,12,0,0,1,0-24h88a44,44,0,0,0,0-88H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,76H168A68.08,68.08,0,0,1,236,144Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", { d: "M80,40v96L32,88Z", opacity: "0.2" }),
        T.createElement("path", {
          d: "M168,80H88V40a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,136V96h80a48,48,0,0,1,0,96H80a8,8,0,0,0,0,16h88a64,64,0,0,0,0-128ZM72,116.69,43.31,88,72,59.31Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,40V80h80A64.07,64.07,0,0,1,232,144Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M230,144a62.07,62.07,0,0,1-62,62H80a6,6,0,0,1,0-12h88a50,50,0,0,0,0-100H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,82H168A62.07,62.07,0,0,1,230,144Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M228,144a60.07,60.07,0,0,1-60,60H80a4,4,0,0,1,0-8h88a52,52,0,0,0,0-104H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,84H168A60.07,60.07,0,0,1,228,144Z",
        })
      ),
    ],
  ]),
  M4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M92,144a16,16,0,1,1,16-16A16,16,0,0,1,92,144Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,112Zm-14.4,49.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84.1,84.1,0,0,0-78.08-83.77c-9.31,14.09-9.89,27-9.92,27.83a4,4,0,0,0,8-.06,12,12,0,0,1,24,0,28,28,0,0,1-56,0c0-.65.1-11.19,5.52-24.92A84,84,0,1,0,212,128Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M92,140a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,116Zm-12.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.11,88.11,0,0,0-84.09-87.91C120.32,56.38,120,71.88,120,72a8,8,0,0,0,16,0,8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.73.13-14.3,8.46-30.63A88,88,0,1,0,216,128Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M92,138a10,10,0,1,1,10-10A10,10,0,0,1,92,138Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,118Zm-11.2,44.92a47,47,0,0,1-49.6,0,6,6,0,0,0-6.4,10.16,59,59,0,0,0,62.4,0,6,6,0,1,0-6.4-10.16ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90.11,90.11,0,0,0-87.07-89.95C118.3,55.23,118,71.85,118,72a10,10,0,0,0,20,0,6,6,0,0,1,12,0,22,22,0,0,1-44,0c0-.75.15-15.82,10.14-33.22A90,90,0,1,0,218,128Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M92,140a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,116Zm-12.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.11,88.11,0,0,0-84.09-87.91C120.32,56.38,120,71.88,120,72a8,8,0,0,0,16,0,8,8,0,0,1,16,0,24,24,0,0,1-48,0c0-.73.13-14.3,8.46-30.63A88,88,0,1,0,216,128Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M92,136a8,8,0,1,1,8-8A8,8,0,0,1,92,136Zm72-16a8,8,0,1,0,8,8A8,8,0,0,0,164,120Zm-10.13,44.62a49,49,0,0,1-51.74,0,4,4,0,0,0-4.26,6.76,57,57,0,0,0,60.26,0,4,4,0,1,0-4.26-6.76ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92.11,92.11,0,0,0-90.06-92C116.26,54.07,116,71.83,116,72a12,12,0,0,0,24,0,4,4,0,0,1,8,0,20,20,0,0,1-40,0c0-.78.16-17.31,12-35.64A92,92,0,1,0,220,128Z",
        })
      ),
    ],
  ]),
  R4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M172,48.55V36A28,28,0,0,0,144,8H112A28,28,0,0,0,84,36V48.55A60.08,60.08,0,0,0,32,108V220a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V108A60.08,60.08,0,0,0,172,48.55ZM112,32h32a4,4,0,0,1,4,4V48H108V36A4,4,0,0,1,112,32Zm48,128H96v-8a4,4,0,0,1,4-4h56a4,4,0,0,1,4,4ZM96,184h32v4a12,12,0,0,0,24,0v-4h8v32H96Zm104,32H184V152a28,28,0,0,0-28-28H100a28,28,0,0,0-28,28v64H56V108A36,36,0,0,1,92,72h72a36,36,0,0,1,36,36ZM160,100a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h40A12,12,0,0,1,160,100Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M208,96V216a8,8,0,0,1-8,8H176V152a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v72H56a8,8,0,0,1-8-8V96A48,48,0,0,1,96,48h64A48,48,0,0,1,208,96Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM104,32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v8H104Zm8,40h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16Zm64,144H80V176h56v8a8,8,0,0,0,16,0v-8h24Zm0-56H80v-8a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M166,42.34V32a22,22,0,0,0-22-22H112A22,22,0,0,0,90,32V42.34A54.07,54.07,0,0,0,42,96V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V96A54.07,54.07,0,0,0,166,42.34ZM112,22h32a10,10,0,0,1,10,10V42H102V32A10,10,0,0,1,112,22Zm58,140H86V152a10,10,0,0,1,10-10h64a10,10,0,0,1,10,10ZM86,174h52v10a6,6,0,0,0,12,0V174h20v44H86Zm116,42a2,2,0,0,1-2,2H182V152a22,22,0,0,0-22-22H96a22,22,0,0,0-22,22v66H56a2,2,0,0,1-2-2V96A42,42,0,0,1,96,54h64a42,42,0,0,1,42,42ZM150,88a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,88Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M168,40.58V32A24,24,0,0,0,144,8H112A24,24,0,0,0,88,32v8.58A56.09,56.09,0,0,0,40,96V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V96A56.09,56.09,0,0,0,168,40.58ZM112,24h32a8,8,0,0,1,8,8v8H104V32A8,8,0,0,1,112,24Zm56,136H88v-8a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8ZM88,176h48v8a8,8,0,0,0,16,0v-8h16v40H88Zm112,40H184V152a24,24,0,0,0-24-24H96a24,24,0,0,0-24,24v64H56V96A40,40,0,0,1,96,56h64a40,40,0,0,1,40,40V216ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M164,44.17V32a20,20,0,0,0-20-20H112A20,20,0,0,0,92,32V44.17A52.05,52.05,0,0,0,44,96V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V96A52.05,52.05,0,0,0,164,44.17ZM112,20h32a12,12,0,0,1,12,12V44H100V32A12,12,0,0,1,112,20Zm60,144H84V152a12,12,0,0,1,12-12h64a12,12,0,0,1,12,12Zm-88,8h56v12a4,4,0,0,0,8,0V172h24v48H84Zm120,44a4,4,0,0,1-4,4H180V152a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20v68H56a4,4,0,0,1-4-4V96A44.05,44.05,0,0,1,96,52h64a44.05,44.05,0,0,1,44,44ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z",
        })
      ),
    ],
  ]),
  I4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M228,160a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,160ZM40,108H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,160H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm0-48H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M222,160a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,160ZM40,102H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M224,160a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,160ZM40,104H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M220,160a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,160ZM40,100H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Z",
        })
      ),
    ],
  ]),
  N4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M228,64a36,36,0,1,0-48,33.94V104a12,12,0,0,1-12,12H96a35.88,35.88,0,0,0-12,2.06V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V152a12,12,0,0,1,12-12h72a36,36,0,0,0,36-36V97.94A36.07,36.07,0,0,0,228,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M216,64a24,24,0,1,1-24-24A24,24,0,0,1,216,64Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M222,64a30,30,0,1,0-36,29.4V104a18,18,0,0,1-18,18H96a29.82,29.82,0,0,0-18,6V93.4a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V152a18,18,0,0,1,18-18h72a30,30,0,0,0,30-30V93.4A30.05,30.05,0,0,0,222,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M220,64a28,28,0,1,0-32,27.71V104a20,20,0,0,1-20,20H96a27.9,27.9,0,0,0-20,8.43V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V152a20,20,0,0,1,20-20h72a28,28,0,0,0,28-28V91.71A28,28,0,0,0,220,64ZM52,64A20,20,0,1,1,72,84,20,20,0,0,1,52,64ZM92,192a20,20,0,1,1-20-20A20,20,0,0,1,92,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z",
        })
      ),
    ],
  ]),
  D4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z",
        })
      ),
    ],
  ]),
  L4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M182,112a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h64A6,6,0,0,1,182,112Zm-6,26H112a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-90V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H74V46H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210ZM210,48a2,2,0,0,0-2-2H86V210H208a2,2,0,0,0,2-2Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M180,112a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h64A4,4,0,0,1,180,112Zm-4,28H112a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-92V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H76V44H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212ZM212,48a4,4,0,0,0-4-4H84V212H208a4,4,0,0,0,4-4Z",
        })
      ),
    ],
  ]),
  F4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M172,124a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,124Zm-12,28H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM220,48V200a36,36,0,0,1-36,36H72a36,36,0,0,1-36-36V48A20,20,0,0,1,56,28H72V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h20V24a12,12,0,0,1,24,0v4h16A20,20,0,0,1,220,48Zm-24,4H184v4a12,12,0,0,1-24,0V52H140v4a12,12,0,0,1-24,0V52H96v4a12,12,0,0,1-24,0V52H60V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M208,48V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48a8,8,0,0,1,8-8H200A8,8,0,0,1,208,48Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,48V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V48A16,16,0,0,1,56,32H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h16A16,16,0,0,1,216,48Zm-16,0H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M200,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H56A16,16,0,0,0,40,48V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V48A16,16,0,0,0,200,32ZM160,168H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,48V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V48A14,14,0,0,1,56,34H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h18A14,14,0,0,1,214,48Zm-12,0a2,2,0,0,0-2-2H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H56a2,2,0,0,0-2,2V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,48V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V48A16,16,0,0,1,56,32H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h16A16,16,0,0,1,216,48Zm-16,0H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M164,128a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,128Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8ZM212,48V200a28,28,0,0,1-28,28H72a28,28,0,0,1-28-28V48A12,12,0,0,1,56,36H76V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h40V24a4,4,0,0,1,8,0V36h20A12,12,0,0,1,212,48Zm-8,0a4,4,0,0,0-4-4H180V56a4,4,0,0,1-8,0V44H132V56a4,4,0,0,1-8,0V44H84V56a4,4,0,0,1-8,0V44H56a4,4,0,0,0-4,4V200a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20Z",
        })
      ),
    ],
  ]),
  V4 = new Map([
    [
      "bold",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z",
        })
      ),
    ],
    [
      "duotone",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
          opacity: "0.2",
        }),
        T.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "fill",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z",
        })
      ),
    ],
    [
      "light",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z",
        })
      ),
    ],
    [
      "regular",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "thin",
      T.createElement(
        T.Fragment,
        null,
        T.createElement("path", {
          d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z",
        })
      ),
    ],
  ]);
var $4 = Object.defineProperty,
  B4 = Object.defineProperties,
  H4 = Object.getOwnPropertyDescriptors,
  lg = Object.getOwnPropertySymbols,
  z4 = Object.prototype.hasOwnProperty,
  U4 = Object.prototype.propertyIsEnumerable,
  ug = (e, t, n) =>
    t in e
      ? $4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  W4 = (e, t) => {
    for (var n in t || (t = {})) z4.call(t, n) && ug(e, n, t[n]);
    if (lg) for (var n of lg(t)) U4.call(t, n) && ug(e, n, t[n]);
    return e;
  },
  K4 = (e, t) => B4(e, H4(t));
const mp = k.forwardRef((e, t) =>
  T.createElement($n, K4(W4({ ref: t }, e), { weights: j4 }))
);
mp.displayName = "ArrowUUpLeft";
var Z4 = Object.defineProperty,
  G4 = Object.defineProperties,
  Y4 = Object.getOwnPropertyDescriptors,
  cg = Object.getOwnPropertySymbols,
  X4 = Object.prototype.hasOwnProperty,
  q4 = Object.prototype.propertyIsEnumerable,
  dg = (e, t, n) =>
    t in e
      ? Z4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  J4 = (e, t) => {
    for (var n in t || (t = {})) X4.call(t, n) && dg(e, n, t[n]);
    if (cg) for (var n of cg(t)) q4.call(t, n) && dg(e, n, t[n]);
    return e;
  },
  Q4 = (e, t) => G4(e, Y4(t));
const R2 = k.forwardRef((e, t) =>
  T.createElement($n, Q4(J4({ ref: t }, e), { weights: M4 }))
);
R2.displayName = "Baby";
var e6 = Object.defineProperty,
  t6 = Object.defineProperties,
  n6 = Object.getOwnPropertyDescriptors,
  fg = Object.getOwnPropertySymbols,
  r6 = Object.prototype.hasOwnProperty,
  o6 = Object.prototype.propertyIsEnumerable,
  hg = (e, t, n) =>
    t in e
      ? e6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  i6 = (e, t) => {
    for (var n in t || (t = {})) r6.call(t, n) && hg(e, n, t[n]);
    if (fg) for (var n of fg(t)) o6.call(t, n) && hg(e, n, t[n]);
    return e;
  },
  a6 = (e, t) => t6(e, n6(t));
const I2 = k.forwardRef((e, t) =>
  T.createElement($n, a6(i6({ ref: t }, e), { weights: R4 }))
);
I2.displayName = "Backpack";
var s6 = Object.defineProperty,
  l6 = Object.defineProperties,
  u6 = Object.getOwnPropertyDescriptors,
  pg = Object.getOwnPropertySymbols,
  c6 = Object.prototype.hasOwnProperty,
  d6 = Object.prototype.propertyIsEnumerable,
  mg = (e, t, n) =>
    t in e
      ? s6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  f6 = (e, t) => {
    for (var n in t || (t = {})) c6.call(t, n) && mg(e, n, t[n]);
    if (pg) for (var n of pg(t)) d6.call(t, n) && mg(e, n, t[n]);
    return e;
  },
  h6 = (e, t) => l6(e, u6(t));
const N2 = k.forwardRef((e, t) =>
  T.createElement($n, h6(f6({ ref: t }, e), { weights: I4 }))
);
N2.displayName = "Equals";
var p6 = Object.defineProperty,
  m6 = Object.defineProperties,
  g6 = Object.getOwnPropertyDescriptors,
  gg = Object.getOwnPropertySymbols,
  v6 = Object.prototype.hasOwnProperty,
  y6 = Object.prototype.propertyIsEnumerable,
  vg = (e, t, n) =>
    t in e
      ? p6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  w6 = (e, t) => {
    for (var n in t || (t = {})) v6.call(t, n) && vg(e, n, t[n]);
    if (gg) for (var n of gg(t)) y6.call(t, n) && vg(e, n, t[n]);
    return e;
  },
  x6 = (e, t) => m6(e, g6(t));
const D2 = k.forwardRef((e, t) =>
  T.createElement($n, x6(w6({ ref: t }, e), { weights: N4 }))
);
D2.displayName = "GitBranch";
var S6 = Object.defineProperty,
  b6 = Object.defineProperties,
  k6 = Object.getOwnPropertyDescriptors,
  yg = Object.getOwnPropertySymbols,
  E6 = Object.prototype.hasOwnProperty,
  C6 = Object.prototype.propertyIsEnumerable,
  wg = (e, t, n) =>
    t in e
      ? S6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  T6 = (e, t) => {
    for (var n in t || (t = {})) E6.call(t, n) && wg(e, n, t[n]);
    if (yg) for (var n of yg(t)) C6.call(t, n) && wg(e, n, t[n]);
    return e;
  },
  P6 = (e, t) => b6(e, k6(t));
const L2 = k.forwardRef((e, t) =>
  T.createElement($n, P6(T6({ ref: t }, e), { weights: D4 }))
);
L2.displayName = "House";
var O6 = Object.defineProperty,
  _6 = Object.defineProperties,
  A6 = Object.getOwnPropertyDescriptors,
  xg = Object.getOwnPropertySymbols,
  j6 = Object.prototype.hasOwnProperty,
  M6 = Object.prototype.propertyIsEnumerable,
  Sg = (e, t, n) =>
    t in e
      ? O6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  R6 = (e, t) => {
    for (var n in t || (t = {})) j6.call(t, n) && Sg(e, n, t[n]);
    if (xg) for (var n of xg(t)) M6.call(t, n) && Sg(e, n, t[n]);
    return e;
  },
  I6 = (e, t) => _6(e, A6(t));
const F2 = k.forwardRef((e, t) =>
  T.createElement($n, I6(R6({ ref: t }, e), { weights: L4 }))
);
F2.displayName = "Notebook";
var N6 = Object.defineProperty,
  D6 = Object.defineProperties,
  L6 = Object.getOwnPropertyDescriptors,
  bg = Object.getOwnPropertySymbols,
  F6 = Object.prototype.hasOwnProperty,
  V6 = Object.prototype.propertyIsEnumerable,
  kg = (e, t, n) =>
    t in e
      ? N6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  $6 = (e, t) => {
    for (var n in t || (t = {})) F6.call(t, n) && kg(e, n, t[n]);
    if (bg) for (var n of bg(t)) V6.call(t, n) && kg(e, n, t[n]);
    return e;
  },
  B6 = (e, t) => D6(e, L6(t));
const V2 = k.forwardRef((e, t) =>
  T.createElement($n, B6($6({ ref: t }, e), { weights: F4 }))
);
V2.displayName = "Notepad";
var H6 = Object.defineProperty,
  z6 = Object.defineProperties,
  U6 = Object.getOwnPropertyDescriptors,
  Eg = Object.getOwnPropertySymbols,
  W6 = Object.prototype.hasOwnProperty,
  K6 = Object.prototype.propertyIsEnumerable,
  Cg = (e, t, n) =>
    t in e
      ? H6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Z6 = (e, t) => {
    for (var n in t || (t = {})) W6.call(t, n) && Cg(e, n, t[n]);
    if (Eg) for (var n of Eg(t)) K6.call(t, n) && Cg(e, n, t[n]);
    return e;
  },
  G6 = (e, t) => z6(e, U6(t));
const $2 = k.forwardRef((e, t) =>
  T.createElement($n, G6(Z6({ ref: t }, e), { weights: V4 }))
);
$2.displayName = "User";
function Y6(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function X6(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var q6 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(X6(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Y6(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ot = "-ms-",
  ou = "-moz-",
  le = "-webkit-",
  B2 = "comm",
  gp = "rule",
  vp = "decl",
  J6 = "@import",
  H2 = "@keyframes",
  Q6 = "@layer",
  e8 = Math.abs,
  Vu = String.fromCharCode,
  t8 = Object.assign;
function n8(e, t) {
  return Je(e, 0) ^ 45
    ? (((((((t << 2) ^ Je(e, 0)) << 2) ^ Je(e, 1)) << 2) ^ Je(e, 2)) << 2) ^
        Je(e, 3)
    : 0;
}
function z2(e) {
  return e.trim();
}
function r8(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ue(e, t, n) {
  return e.replace(t, n);
}
function Lf(e, t) {
  return e.indexOf(t);
}
function Je(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ya(e, t, n) {
  return e.slice(t, n);
}
function Pn(e) {
  return e.length;
}
function yp(e) {
  return e.length;
}
function Js(e, t) {
  return t.push(e), e;
}
function o8(e, t) {
  return e.map(t).join("");
}
var $u = 1,
  Ei = 1,
  U2 = 0,
  Tt = 0,
  Ve = 0,
  Di = "";
function Bu(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: $u,
    column: Ei,
    length: a,
    return: "",
  };
}
function ta(e, t) {
  return t8(Bu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function i8() {
  return Ve;
}
function a8() {
  return (
    (Ve = Tt > 0 ? Je(Di, --Tt) : 0), Ei--, Ve === 10 && ((Ei = 1), $u--), Ve
  );
}
function Nt() {
  return (
    (Ve = Tt < U2 ? Je(Di, Tt++) : 0), Ei++, Ve === 10 && ((Ei = 1), $u++), Ve
  );
}
function Dn() {
  return Je(Di, Tt);
}
function wl() {
  return Tt;
}
function ds(e, t) {
  return Ya(Di, e, t);
}
function Xa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function W2(e) {
  return ($u = Ei = 1), (U2 = Pn((Di = e))), (Tt = 0), [];
}
function K2(e) {
  return (Di = ""), e;
}
function xl(e) {
  return z2(ds(Tt - 1, Ff(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function s8(e) {
  for (; (Ve = Dn()) && Ve < 33; ) Nt();
  return Xa(e) > 2 || Xa(Ve) > 3 ? "" : " ";
}
function l8(e, t) {
  for (
    ;
    --t &&
    Nt() &&
    !(Ve < 48 || Ve > 102 || (Ve > 57 && Ve < 65) || (Ve > 70 && Ve < 97));

  );
  return ds(e, wl() + (t < 6 && Dn() == 32 && Nt() == 32));
}
function Ff(e) {
  for (; Nt(); )
    switch (Ve) {
      case e:
        return Tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ff(Ve);
        break;
      case 40:
        e === 41 && Ff(e);
        break;
      case 92:
        Nt();
        break;
    }
  return Tt;
}
function u8(e, t) {
  for (; Nt() && e + Ve !== 57; ) if (e + Ve === 84 && Dn() === 47) break;
  return "/*" + ds(t, Tt - 1) + "*" + Vu(e === 47 ? e : Nt());
}
function c8(e) {
  for (; !Xa(Dn()); ) Nt();
  return ds(e, Tt);
}
function d8(e) {
  return K2(Sl("", null, null, null, [""], (e = W2(e)), 0, [0], e));
}
function Sl(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      m = 0,
      v = 1,
      x = 1,
      g = 1,
      p = 0,
      w = "",
      S = o,
      C = i,
      _ = r,
      E = w;
    x;

  )
    switch (((m = p), (p = Nt()))) {
      case 40:
        if (m != 108 && Je(E, d - 1) == 58) {
          Lf((E += ue(xl(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += xl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += s8(m);
        break;
      case 92:
        E += l8(wl() - 1, 7);
        continue;
      case 47:
        switch (Dn()) {
          case 42:
          case 47:
            Js(f8(u8(Nt(), wl()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        s[u++] = Pn(E) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            g == -1 && (E = ue(E, /\f/g, "")),
              h > 0 &&
                Pn(E) - d &&
                Js(
                  h > 32
                    ? Pg(E + ";", r, n, d - 1)
                    : Pg(ue(E, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Js((_ = Tg(E, t, n, u, c, o, s, w, (S = []), (C = []), d)), i),
              p === 123)
            )
              if (c === 0) Sl(E, t, _, _, S, i, d, s, C);
              else
                switch (f === 99 && Je(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sl(
                      e,
                      _,
                      _,
                      r && Js(Tg(e, _, _, 0, 0, o, s, w, o, (S = []), d), C),
                      o,
                      C,
                      d,
                      s,
                      r ? S : C
                    );
                    break;
                  default:
                    Sl(E, _, _, _, [""], C, 0, s, C);
                }
        }
        (u = c = h = 0), (v = g = 1), (w = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + Pn(E)), (h = m);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && a8() == 125) continue;
        }
        switch (((E += Vu(p)), p * v)) {
          case 38:
            g = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Pn(E) - 1) * g), (g = 1);
            break;
          case 64:
            Dn() === 45 && (E += xl(Nt())),
              (f = Dn()),
              (c = d = Pn((w = E += c8(wl())))),
              p++;
            break;
          case 45:
            m === 45 && Pn(E) == 2 && (v = 0);
        }
    }
  return i;
}
function Tg(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = yp(f), m = 0, v = 0, x = 0;
    m < r;
    ++m
  )
    for (var g = 0, p = Ya(e, d + 1, (d = e8((v = a[m])))), w = e; g < h; ++g)
      (w = z2(v > 0 ? f[g] + " " + p : ue(p, /&\f/g, f[g]))) && (l[x++] = w);
  return Bu(e, t, n, o === 0 ? gp : s, l, u, c);
}
function f8(e, t, n) {
  return Bu(e, t, n, B2, Vu(i8()), Ya(e, 2, -2), 0);
}
function Pg(e, t, n, r) {
  return Bu(e, t, n, vp, Ya(e, 0, r), Ya(e, r + 1, -1), r);
}
function pi(e, t) {
  for (var n = "", r = yp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function h8(e, t, n, r) {
  switch (e.type) {
    case Q6:
      if (e.children.length) break;
    case J6:
    case vp:
      return (e.return = e.return || e.value);
    case B2:
      return "";
    case H2:
      return (e.return = e.value + "{" + pi(e.children, r) + "}");
    case gp:
      e.value = e.props.join(",");
  }
  return Pn((n = pi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function p8(e) {
  var t = yp(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function m8(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Z2(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var g8 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Dn()), o === 38 && i === 12 && (n[r] = 1), !Xa(i);

    )
      Nt();
    return ds(t, Tt);
  },
  v8 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Xa(o)) {
        case 0:
          o === 38 && Dn() === 12 && (n[r] = 1), (t[r] += g8(Tt - 1, n, r));
          break;
        case 2:
          t[r] += xl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Dn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Vu(o);
      }
    while ((o = Nt()));
    return t;
  },
  y8 = function (t, n) {
    return K2(v8(W2(t), n));
  },
  Og = new WeakMap(),
  w8 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Og.get(r)) &&
        !o
      ) {
        Og.set(t, !0);
        for (
          var i = [], a = y8(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  x8 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function G2(e, t) {
  switch (n8(e, t)) {
    case 5103:
      return le + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return le + e + ou + e + ot + e + e;
    case 6828:
    case 4268:
      return le + e + ot + e + e;
    case 6165:
      return le + e + ot + "flex-" + e + e;
    case 5187:
      return (
        le + e + ue(e, /(\w+).+(:[^]+)/, le + "box-$1$2" + ot + "flex-$1$2") + e
      );
    case 5443:
      return le + e + ot + "flex-item-" + ue(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        le +
        e +
        ot +
        "flex-line-pack" +
        ue(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return le + e + ot + ue(e, "shrink", "negative") + e;
    case 5292:
      return le + e + ot + ue(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        le +
        "box-" +
        ue(e, "-grow", "") +
        le +
        e +
        ot +
        ue(e, "grow", "positive") +
        e
      );
    case 4554:
      return le + ue(e, /([^-])(transform)/g, "$1" + le + "$2") + e;
    case 6187:
      return (
        ue(
          ue(ue(e, /(zoom-|grab)/, le + "$1"), /(image-set)/, le + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, le + "$1$`$1");
    case 4968:
      return (
        ue(
          ue(e, /(.+:)(flex-)?(.*)/, le + "box-pack:$3" + ot + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        le +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, le + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pn(e) - 1 - t > 6)
        switch (Je(e, t + 1)) {
          case 109:
            if (Je(e, t + 4) !== 45) break;
          case 102:
            return (
              ue(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  le +
                  "$2-$3$1" +
                  ou +
                  (Je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Lf(e, "stretch")
              ? G2(ue(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Je(e, t + 1) !== 115) break;
    case 6444:
      switch (Je(e, Pn(e) - 3 - (~Lf(e, "!important") && 10))) {
        case 107:
          return ue(e, ":", ":" + le) + e;
        case 101:
          return (
            ue(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                le +
                (Je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                le +
                "$2$3$1" +
                ot +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Je(e, t + 11)) {
        case 114:
          return le + e + ot + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return le + e + ot + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return le + e + ot + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return le + e + ot + e + e;
  }
  return e;
}
var S8 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case vp:
          t.return = G2(t.value, t.length);
          break;
        case H2:
          return pi([ta(t, { value: ue(t.value, "@", "@" + le) })], o);
        case gp:
          if (t.length)
            return o8(t.props, function (i) {
              switch (r8(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return pi(
                    [ta(t, { props: [ue(i, /:(read-\w+)/, ":" + ou + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return pi(
                    [
                      ta(t, {
                        props: [ue(i, /:(plac\w+)/, ":" + le + "input-$1")],
                      }),
                      ta(t, { props: [ue(i, /:(plac\w+)/, ":" + ou + "$1")] }),
                      ta(t, { props: [ue(i, /:(plac\w+)/, ot + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  b8 = [S8],
  k8 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var x = v.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || b8,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var x = v.getAttribute("data-emotion").split(" "), g = 1;
            g < x.length;
            g++
          )
            i[x[g]] = !0;
          s.push(v);
        }
      );
    var l,
      u = [w8, x8];
    {
      var c,
        d = [
          h8,
          m8(function (v) {
            c.insert(v);
          }),
        ],
        f = p8(u.concat(o, d)),
        h = function (x) {
          return pi(d8(x), f);
        };
      l = function (x, g, p, w) {
        (c = p),
          h(x ? x + "{" + g.styles + "}" : g.styles),
          w && (m.inserted[g.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new q6({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(s), m;
  };
function Vf() {
  return (
    (Vf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vf.apply(this, arguments)
  );
}
var Y2 = { exports: {} },
  pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze = typeof Symbol == "function" && Symbol.for,
  wp = Ze ? Symbol.for("react.element") : 60103,
  xp = Ze ? Symbol.for("react.portal") : 60106,
  Hu = Ze ? Symbol.for("react.fragment") : 60107,
  zu = Ze ? Symbol.for("react.strict_mode") : 60108,
  Uu = Ze ? Symbol.for("react.profiler") : 60114,
  Wu = Ze ? Symbol.for("react.provider") : 60109,
  Ku = Ze ? Symbol.for("react.context") : 60110,
  Sp = Ze ? Symbol.for("react.async_mode") : 60111,
  Zu = Ze ? Symbol.for("react.concurrent_mode") : 60111,
  Gu = Ze ? Symbol.for("react.forward_ref") : 60112,
  Yu = Ze ? Symbol.for("react.suspense") : 60113,
  E8 = Ze ? Symbol.for("react.suspense_list") : 60120,
  Xu = Ze ? Symbol.for("react.memo") : 60115,
  qu = Ze ? Symbol.for("react.lazy") : 60116,
  C8 = Ze ? Symbol.for("react.block") : 60121,
  T8 = Ze ? Symbol.for("react.fundamental") : 60117,
  P8 = Ze ? Symbol.for("react.responder") : 60118,
  O8 = Ze ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wp:
        switch (((e = e.type), e)) {
          case Sp:
          case Zu:
          case Hu:
          case Uu:
          case zu:
          case Yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ku:
              case Gu:
              case qu:
              case Xu:
              case Wu:
                return e;
              default:
                return t;
            }
        }
      case xp:
        return t;
    }
  }
}
function X2(e) {
  return Ht(e) === Zu;
}
pe.AsyncMode = Sp;
pe.ConcurrentMode = Zu;
pe.ContextConsumer = Ku;
pe.ContextProvider = Wu;
pe.Element = wp;
pe.ForwardRef = Gu;
pe.Fragment = Hu;
pe.Lazy = qu;
pe.Memo = Xu;
pe.Portal = xp;
pe.Profiler = Uu;
pe.StrictMode = zu;
pe.Suspense = Yu;
pe.isAsyncMode = function (e) {
  return X2(e) || Ht(e) === Sp;
};
pe.isConcurrentMode = X2;
pe.isContextConsumer = function (e) {
  return Ht(e) === Ku;
};
pe.isContextProvider = function (e) {
  return Ht(e) === Wu;
};
pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === wp;
};
pe.isForwardRef = function (e) {
  return Ht(e) === Gu;
};
pe.isFragment = function (e) {
  return Ht(e) === Hu;
};
pe.isLazy = function (e) {
  return Ht(e) === qu;
};
pe.isMemo = function (e) {
  return Ht(e) === Xu;
};
pe.isPortal = function (e) {
  return Ht(e) === xp;
};
pe.isProfiler = function (e) {
  return Ht(e) === Uu;
};
pe.isStrictMode = function (e) {
  return Ht(e) === zu;
};
pe.isSuspense = function (e) {
  return Ht(e) === Yu;
};
pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Hu ||
    e === Zu ||
    e === Uu ||
    e === zu ||
    e === Yu ||
    e === E8 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qu ||
        e.$$typeof === Xu ||
        e.$$typeof === Wu ||
        e.$$typeof === Ku ||
        e.$$typeof === Gu ||
        e.$$typeof === T8 ||
        e.$$typeof === P8 ||
        e.$$typeof === O8 ||
        e.$$typeof === C8))
  );
};
pe.typeOf = Ht;
Y2.exports = pe;
var _8 = Y2.exports,
  q2 = _8,
  A8 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  j8 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  J2 = {};
J2[q2.ForwardRef] = A8;
J2[q2.Memo] = j8;
var M8 = !0;
function R8(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Q2 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || M8 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  I8 = function (t, n, r) {
    Q2(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function N8(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var D8 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  L8 = /[A-Z]|^ms/g,
  F8 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ex = function (t) {
    return t.charCodeAt(1) === 45;
  },
  _g = function (t) {
    return t != null && typeof t != "boolean";
  },
  sd = Z2(function (e) {
    return ex(e) ? e : e.replace(L8, "-$&").toLowerCase();
  }),
  Ag = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(F8, function (r, o, i) {
            return (On = { name: o, styles: i, next: On }), o;
          });
    }
    return D8[t] !== 1 && !ex(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function qa(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (On = { name: n.name, styles: n.styles, next: On }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (On = { name: r.name, styles: r.styles, next: On }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return V8(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = On,
          a = n(e);
        return (On = i), qa(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function V8(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += qa(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : _g(a) && (r += sd(i) + ":" + Ag(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          _g(a[s]) && (r += sd(i) + ":" + Ag(i, a[s]) + ";");
      else {
        var l = qa(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += sd(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var jg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  On,
  tx = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    On = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += qa(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += qa(r, n, t[s])), o && (i += a[s]);
    jg.lastIndex = 0;
    for (var l = "", u; (u = jg.exec(i)) !== null; ) l += "-" + u[1];
    var c = N8(i) + l;
    return { name: c, styles: i, next: On };
  },
  $8 = function (t) {
    return t();
  },
  B8 = Md.useInsertionEffect ? Md.useInsertionEffect : !1,
  H8 = B8 || $8,
  nx = k.createContext(typeof HTMLElement < "u" ? k8({ key: "css" }) : null);
nx.Provider;
var z8 = function (t) {
    return k.forwardRef(function (n, r) {
      var o = k.useContext(nx);
      return t(n, o, r);
    });
  },
  rx = k.createContext({});
function U8() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return tx(t);
}
var Ju = function () {
  var t = U8.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function W8(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ur(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = k.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = k.useContext(s);
    if (!c && n) {
      const d = new Error(i ?? W8(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var ld =
  globalThis != null && globalThis.document ? k.useLayoutEffect : k.useEffect;
function ox() {
  const e = k.useContext(rx);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var ix = k.createContext({});
ix.displayName = "ColorModeContext";
function ax() {
  const e = k.useContext(ix);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function K8() {
  const e = ax(),
    t = ox();
  return { ...e, theme: t };
}
var sn = (...e) => e.filter(Boolean).join(" ");
function go(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Or(e, ...t) {
  return Z8(e) ? e(...t) : e;
}
var Z8 = (e) => typeof e == "function",
  ne = (e) => (e ? "" : void 0),
  ud = (e) => (e ? !0 : void 0);
function it(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function sx(...e) {
  return function (n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var iu = { exports: {} };
iu.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    h = "[object Function]",
    m = "[object GeneratorFunction]",
    v = "[object Map]",
    x = "[object Number]",
    g = "[object Null]",
    p = "[object Object]",
    w = "[object Proxy]",
    S = "[object RegExp]",
    C = "[object Set]",
    _ = "[object String]",
    E = "[object Undefined]",
    A = "[object WeakMap]",
    R = "[object ArrayBuffer]",
    M = "[object DataView]",
    B = "[object Float32Array]",
    K = "[object Float64Array]",
    Y = "[object Int8Array]",
    X = "[object Int16Array]",
    de = "[object Int32Array]",
    U = "[object Uint8Array]",
    N = "[object Uint8ClampedArray]",
    D = "[object Uint16Array]",
    $ = "[object Uint32Array]",
    W = /[\\^$.*+?()[\]{}|]/g,
    z = /^\[object .+?Constructor\]$/,
    J = /^(?:0|[1-9]\d*)$/,
    H = {};
  (H[B] = H[K] = H[Y] = H[X] = H[de] = H[U] = H[N] = H[D] = H[$] = !0),
    (H[s] =
      H[l] =
      H[R] =
      H[c] =
      H[M] =
      H[d] =
      H[f] =
      H[h] =
      H[v] =
      H[x] =
      H[p] =
      H[S] =
      H[C] =
      H[_] =
      H[A] =
        !1);
  var Z = typeof Rs == "object" && Rs && Rs.Object === Object && Rs,
    ve = typeof self == "object" && self && self.Object === Object && self,
    ce = Z || ve || Function("return this")(),
    He = t && !t.nodeType && t,
    De = He && !0 && e && !e.nodeType && e,
    zt = De && De.exports === He,
    Ut = zt && Z.process,
    tt = (function () {
      try {
        var b = De && De.require && De.require("util").types;
        return b || (Ut && Ut.binding && Ut.binding("util"));
      } catch {}
    })(),
    Zr = tt && tt.isTypedArray;
  function Ro(b, P, j) {
    switch (j.length) {
      case 0:
        return b.call(P);
      case 1:
        return b.call(P, j[0]);
      case 2:
        return b.call(P, j[0], j[1]);
      case 3:
        return b.call(P, j[0], j[1], j[2]);
    }
    return b.apply(P, j);
  }
  function Cs(b, P) {
    for (var j = -1, F = Array(b); ++j < b; ) F[j] = P(j);
    return F;
  }
  function Q(b) {
    return function (P) {
      return b(P);
    };
  }
  function Ge(b, P) {
    return b == null ? void 0 : b[P];
  }
  function ct(b, P) {
    return function (j) {
      return b(P(j));
    };
  }
  var dr = Array.prototype,
    yc = Function.prototype,
    Wt = Object.prototype,
    fr = ce["__core-js_shared__"],
    Gr = yc.toString,
    Kt = Wt.hasOwnProperty,
    Io = (function () {
      var b = /[^.]+$/.exec((fr && fr.keys && fr.keys.IE_PROTO) || "");
      return b ? "Symbol(src)_1." + b : "";
    })(),
    $i = Wt.toString,
    Ts = Gr.call(Object),
    Ps = RegExp(
      "^" +
        Gr.call(Kt)
          .replace(W, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Yr = zt ? ce.Buffer : void 0,
    cm = ce.Symbol,
    dm = ce.Uint8Array,
    fm = Yr ? Yr.allocUnsafe : void 0,
    hm = ct(Object.getPrototypeOf, Object),
    pm = Object.create,
    Nb = Wt.propertyIsEnumerable,
    Db = dr.splice,
    Xr = cm ? cm.toStringTag : void 0,
    Os = (function () {
      try {
        var b = Sc(Object, "defineProperty");
        return b({}, "", {}), b;
      } catch {}
    })(),
    Lb = Yr ? Yr.isBuffer : void 0,
    mm = Math.max,
    Fb = Date.now,
    gm = Sc(ce, "Map"),
    Bi = Sc(Object, "create"),
    Vb = (function () {
      function b() {}
      return function (P) {
        if (!Jr(P)) return {};
        if (pm) return pm(P);
        b.prototype = P;
        var j = new b();
        return (b.prototype = void 0), j;
      };
    })();
  function qr(b) {
    var P = -1,
      j = b == null ? 0 : b.length;
    for (this.clear(); ++P < j; ) {
      var F = b[P];
      this.set(F[0], F[1]);
    }
  }
  function $b() {
    (this.__data__ = Bi ? Bi(null) : {}), (this.size = 0);
  }
  function Bb(b) {
    var P = this.has(b) && delete this.__data__[b];
    return (this.size -= P ? 1 : 0), P;
  }
  function Hb(b) {
    var P = this.__data__;
    if (Bi) {
      var j = P[b];
      return j === r ? void 0 : j;
    }
    return Kt.call(P, b) ? P[b] : void 0;
  }
  function zb(b) {
    var P = this.__data__;
    return Bi ? P[b] !== void 0 : Kt.call(P, b);
  }
  function Ub(b, P) {
    var j = this.__data__;
    return (
      (this.size += this.has(b) ? 0 : 1),
      (j[b] = Bi && P === void 0 ? r : P),
      this
    );
  }
  (qr.prototype.clear = $b),
    (qr.prototype.delete = Bb),
    (qr.prototype.get = Hb),
    (qr.prototype.has = zb),
    (qr.prototype.set = Ub);
  function Hn(b) {
    var P = -1,
      j = b == null ? 0 : b.length;
    for (this.clear(); ++P < j; ) {
      var F = b[P];
      this.set(F[0], F[1]);
    }
  }
  function Wb() {
    (this.__data__ = []), (this.size = 0);
  }
  function Kb(b) {
    var P = this.__data__,
      j = _s(P, b);
    if (j < 0) return !1;
    var F = P.length - 1;
    return j == F ? P.pop() : Db.call(P, j, 1), --this.size, !0;
  }
  function Zb(b) {
    var P = this.__data__,
      j = _s(P, b);
    return j < 0 ? void 0 : P[j][1];
  }
  function Gb(b) {
    return _s(this.__data__, b) > -1;
  }
  function Yb(b, P) {
    var j = this.__data__,
      F = _s(j, b);
    return F < 0 ? (++this.size, j.push([b, P])) : (j[F][1] = P), this;
  }
  (Hn.prototype.clear = Wb),
    (Hn.prototype.delete = Kb),
    (Hn.prototype.get = Zb),
    (Hn.prototype.has = Gb),
    (Hn.prototype.set = Yb);
  function No(b) {
    var P = -1,
      j = b == null ? 0 : b.length;
    for (this.clear(); ++P < j; ) {
      var F = b[P];
      this.set(F[0], F[1]);
    }
  }
  function Xb() {
    (this.size = 0),
      (this.__data__ = {
        hash: new qr(),
        map: new (gm || Hn)(),
        string: new qr(),
      });
  }
  function qb(b) {
    var P = js(this, b).delete(b);
    return (this.size -= P ? 1 : 0), P;
  }
  function Jb(b) {
    return js(this, b).get(b);
  }
  function Qb(b) {
    return js(this, b).has(b);
  }
  function ek(b, P) {
    var j = js(this, b),
      F = j.size;
    return j.set(b, P), (this.size += j.size == F ? 0 : 1), this;
  }
  (No.prototype.clear = Xb),
    (No.prototype.delete = qb),
    (No.prototype.get = Jb),
    (No.prototype.has = Qb),
    (No.prototype.set = ek);
  function Do(b) {
    var P = (this.__data__ = new Hn(b));
    this.size = P.size;
  }
  function tk() {
    (this.__data__ = new Hn()), (this.size = 0);
  }
  function nk(b) {
    var P = this.__data__,
      j = P.delete(b);
    return (this.size = P.size), j;
  }
  function rk(b) {
    return this.__data__.get(b);
  }
  function ok(b) {
    return this.__data__.has(b);
  }
  function ik(b, P) {
    var j = this.__data__;
    if (j instanceof Hn) {
      var F = j.__data__;
      if (!gm || F.length < n - 1)
        return F.push([b, P]), (this.size = ++j.size), this;
      j = this.__data__ = new No(F);
    }
    return j.set(b, P), (this.size = j.size), this;
  }
  (Do.prototype.clear = tk),
    (Do.prototype.delete = nk),
    (Do.prototype.get = rk),
    (Do.prototype.has = ok),
    (Do.prototype.set = ik);
  function ak(b, P) {
    var j = Ec(b),
      F = !j && kc(b),
      oe = !j && !F && Sm(b),
      me = !j && !F && !oe && km(b),
      Se = j || F || oe || me,
      te = Se ? Cs(b.length, String) : [],
      be = te.length;
    for (var Zt in b)
      (P || Kt.call(b, Zt)) &&
        !(
          Se &&
          (Zt == "length" ||
            (oe && (Zt == "offset" || Zt == "parent")) ||
            (me &&
              (Zt == "buffer" || Zt == "byteLength" || Zt == "byteOffset")) ||
            wm(Zt, be))
        ) &&
        te.push(Zt);
    return te;
  }
  function wc(b, P, j) {
    ((j !== void 0 && !Ms(b[P], j)) || (j === void 0 && !(P in b))) &&
      xc(b, P, j);
  }
  function sk(b, P, j) {
    var F = b[P];
    (!(Kt.call(b, P) && Ms(F, j)) || (j === void 0 && !(P in b))) &&
      xc(b, P, j);
  }
  function _s(b, P) {
    for (var j = b.length; j--; ) if (Ms(b[j][0], P)) return j;
    return -1;
  }
  function xc(b, P, j) {
    P == "__proto__" && Os
      ? Os(b, P, { configurable: !0, enumerable: !0, value: j, writable: !0 })
      : (b[P] = j);
  }
  var lk = Sk();
  function As(b) {
    return b == null
      ? b === void 0
        ? E
        : g
      : Xr && Xr in Object(b)
      ? bk(b)
      : Ok(b);
  }
  function vm(b) {
    return Hi(b) && As(b) == s;
  }
  function uk(b) {
    if (!Jr(b) || Tk(b)) return !1;
    var P = Tc(b) ? Ps : z;
    return P.test(Mk(b));
  }
  function ck(b) {
    return Hi(b) && bm(b.length) && !!H[As(b)];
  }
  function dk(b) {
    if (!Jr(b)) return Pk(b);
    var P = xm(b),
      j = [];
    for (var F in b) (F == "constructor" && (P || !Kt.call(b, F))) || j.push(F);
    return j;
  }
  function ym(b, P, j, F, oe) {
    b !== P &&
      lk(
        P,
        function (me, Se) {
          if ((oe || (oe = new Do()), Jr(me))) fk(b, P, Se, j, ym, F, oe);
          else {
            var te = F ? F(bc(b, Se), me, Se + "", b, P, oe) : void 0;
            te === void 0 && (te = me), wc(b, Se, te);
          }
        },
        Em
      );
  }
  function fk(b, P, j, F, oe, me, Se) {
    var te = bc(b, j),
      be = bc(P, j),
      Zt = Se.get(be);
    if (Zt) {
      wc(b, j, Zt);
      return;
    }
    var _t = me ? me(te, be, j + "", b, P, Se) : void 0,
      zi = _t === void 0;
    if (zi) {
      var Pc = Ec(be),
        Oc = !Pc && Sm(be),
        Tm = !Pc && !Oc && km(be);
      (_t = be),
        Pc || Oc || Tm
          ? Ec(te)
            ? (_t = te)
            : Rk(te)
            ? (_t = yk(te))
            : Oc
            ? ((zi = !1), (_t = mk(be, !0)))
            : Tm
            ? ((zi = !1), (_t = vk(be, !0)))
            : (_t = [])
          : Ik(be) || kc(be)
          ? ((_t = te),
            kc(te) ? (_t = Nk(te)) : (!Jr(te) || Tc(te)) && (_t = kk(be)))
          : (zi = !1);
    }
    zi && (Se.set(be, _t), oe(_t, be, F, me, Se), Se.delete(be)), wc(b, j, _t);
  }
  function hk(b, P) {
    return Ak(_k(b, P, Cm), b + "");
  }
  var pk = Os
    ? function (b, P) {
        return Os(b, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Lk(P),
          writable: !0,
        });
      }
    : Cm;
  function mk(b, P) {
    if (P) return b.slice();
    var j = b.length,
      F = fm ? fm(j) : new b.constructor(j);
    return b.copy(F), F;
  }
  function gk(b) {
    var P = new b.constructor(b.byteLength);
    return new dm(P).set(new dm(b)), P;
  }
  function vk(b, P) {
    var j = P ? gk(b.buffer) : b.buffer;
    return new b.constructor(j, b.byteOffset, b.length);
  }
  function yk(b, P) {
    var j = -1,
      F = b.length;
    for (P || (P = Array(F)); ++j < F; ) P[j] = b[j];
    return P;
  }
  function wk(b, P, j, F) {
    var oe = !j;
    j || (j = {});
    for (var me = -1, Se = P.length; ++me < Se; ) {
      var te = P[me],
        be = F ? F(j[te], b[te], te, j, b) : void 0;
      be === void 0 && (be = b[te]), oe ? xc(j, te, be) : sk(j, te, be);
    }
    return j;
  }
  function xk(b) {
    return hk(function (P, j) {
      var F = -1,
        oe = j.length,
        me = oe > 1 ? j[oe - 1] : void 0,
        Se = oe > 2 ? j[2] : void 0;
      for (
        me = b.length > 3 && typeof me == "function" ? (oe--, me) : void 0,
          Se && Ek(j[0], j[1], Se) && ((me = oe < 3 ? void 0 : me), (oe = 1)),
          P = Object(P);
        ++F < oe;

      ) {
        var te = j[F];
        te && b(P, te, F, me);
      }
      return P;
    });
  }
  function Sk(b) {
    return function (P, j, F) {
      for (var oe = -1, me = Object(P), Se = F(P), te = Se.length; te--; ) {
        var be = Se[b ? te : ++oe];
        if (j(me[be], be, me) === !1) break;
      }
      return P;
    };
  }
  function js(b, P) {
    var j = b.__data__;
    return Ck(P) ? j[typeof P == "string" ? "string" : "hash"] : j.map;
  }
  function Sc(b, P) {
    var j = Ge(b, P);
    return uk(j) ? j : void 0;
  }
  function bk(b) {
    var P = Kt.call(b, Xr),
      j = b[Xr];
    try {
      b[Xr] = void 0;
      var F = !0;
    } catch {}
    var oe = $i.call(b);
    return F && (P ? (b[Xr] = j) : delete b[Xr]), oe;
  }
  function kk(b) {
    return typeof b.constructor == "function" && !xm(b) ? Vb(hm(b)) : {};
  }
  function wm(b, P) {
    var j = typeof b;
    return (
      (P = P ?? a),
      !!P &&
        (j == "number" || (j != "symbol" && J.test(b))) &&
        b > -1 &&
        b % 1 == 0 &&
        b < P
    );
  }
  function Ek(b, P, j) {
    if (!Jr(j)) return !1;
    var F = typeof P;
    return (F == "number" ? Cc(j) && wm(P, j.length) : F == "string" && P in j)
      ? Ms(j[P], b)
      : !1;
  }
  function Ck(b) {
    var P = typeof b;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean"
      ? b !== "__proto__"
      : b === null;
  }
  function Tk(b) {
    return !!Io && Io in b;
  }
  function xm(b) {
    var P = b && b.constructor,
      j = (typeof P == "function" && P.prototype) || Wt;
    return b === j;
  }
  function Pk(b) {
    var P = [];
    if (b != null) for (var j in Object(b)) P.push(j);
    return P;
  }
  function Ok(b) {
    return $i.call(b);
  }
  function _k(b, P, j) {
    return (
      (P = mm(P === void 0 ? b.length - 1 : P, 0)),
      function () {
        for (
          var F = arguments, oe = -1, me = mm(F.length - P, 0), Se = Array(me);
          ++oe < me;

        )
          Se[oe] = F[P + oe];
        oe = -1;
        for (var te = Array(P + 1); ++oe < P; ) te[oe] = F[oe];
        return (te[P] = j(Se)), Ro(b, this, te);
      }
    );
  }
  function bc(b, P) {
    if (!(P === "constructor" && typeof b[P] == "function") && P != "__proto__")
      return b[P];
  }
  var Ak = jk(pk);
  function jk(b) {
    var P = 0,
      j = 0;
    return function () {
      var F = Fb(),
        oe = i - (F - j);
      if (((j = F), oe > 0)) {
        if (++P >= o) return arguments[0];
      } else P = 0;
      return b.apply(void 0, arguments);
    };
  }
  function Mk(b) {
    if (b != null) {
      try {
        return Gr.call(b);
      } catch {}
      try {
        return b + "";
      } catch {}
    }
    return "";
  }
  function Ms(b, P) {
    return b === P || (b !== b && P !== P);
  }
  var kc = vm(
      (function () {
        return arguments;
      })()
    )
      ? vm
      : function (b) {
          return Hi(b) && Kt.call(b, "callee") && !Nb.call(b, "callee");
        },
    Ec = Array.isArray;
  function Cc(b) {
    return b != null && bm(b.length) && !Tc(b);
  }
  function Rk(b) {
    return Hi(b) && Cc(b);
  }
  var Sm = Lb || Fk;
  function Tc(b) {
    if (!Jr(b)) return !1;
    var P = As(b);
    return P == h || P == m || P == u || P == w;
  }
  function bm(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= a;
  }
  function Jr(b) {
    var P = typeof b;
    return b != null && (P == "object" || P == "function");
  }
  function Hi(b) {
    return b != null && typeof b == "object";
  }
  function Ik(b) {
    if (!Hi(b) || As(b) != p) return !1;
    var P = hm(b);
    if (P === null) return !0;
    var j = Kt.call(P, "constructor") && P.constructor;
    return typeof j == "function" && j instanceof j && Gr.call(j) == Ts;
  }
  var km = Zr ? Q(Zr) : ck;
  function Nk(b) {
    return wk(b, Em(b));
  }
  function Em(b) {
    return Cc(b) ? ak(b, !0) : dk(b);
  }
  var Dk = xk(function (b, P, j, F) {
    ym(b, P, j, F);
  });
  function Lk(b) {
    return function () {
      return b;
    };
  }
  function Cm(b) {
    return b;
  }
  function Fk() {
    return !1;
  }
  e.exports = Dk;
})(iu, iu.exports);
var G8 = iu.exports;
const qn = _o(G8);
var Y8 = (e) => /!(important)?$/.test(e),
  Mg = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  X8 = (e, t) => (n) => {
    const r = String(t),
      o = Y8(r),
      i = Mg(r),
      a = e ? `${e}.${i}` : i;
    let s = go(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
    return (s = Mg(s)), o ? `${s} !important` : s;
  };
function bp(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = X8(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Qs =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Gt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = bp({ scale: e, transform: t })), r;
  };
}
var q8 =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function J8(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: q8(t),
    transform: n ? bp({ scale: n, compose: r }) : r,
  };
}
var lx = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function Q8() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...lx,
  ].join(" ");
}
function eO() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...lx,
  ].join(" ");
}
var tO = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  nO = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function rO(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var oO = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  $f = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  iO = new Set(Object.values($f)),
  Bf = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  aO = (e) => e.trim();
function sO(e, t) {
  if (e == null || Bf.has(e)) return e;
  if (!(Hf(e) || Bf.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(aO).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in $f ? $f[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (iO.has(f)) return f;
    const h = f.indexOf(" "),
      [m, v] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      x = Hf(v) ? v : v && v.split(" "),
      g = `colors.${m}`,
      p = g in t.__cssMap ? t.__cssMap[g].varRef : m;
    return x ? [p, ...(Array.isArray(x) ? x : [x])].join(" ") : p;
  });
  return `${s}(${d.join(", ")})`;
}
var Hf = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  lO = (e, t) => sO(e, t ?? {});
function uO(e) {
  return /^var\(--.+\)$/.test(e);
}
var cO = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  kn = (e) => (t) => `${e}(${t})`,
  re = {
    filter(e) {
      return e !== "auto" ? e : tO;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : nO;
    },
    ring(e) {
      return rO(re.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? Q8() : e === "auto-gpu" ? eO() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = cO(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (uO(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: lO,
    blur: kn("blur"),
    opacity: kn("opacity"),
    brightness: kn("brightness"),
    contrast: kn("contrast"),
    dropShadow: kn("drop-shadow"),
    grayscale: kn("grayscale"),
    hueRotate: (e) => kn("hue-rotate")(re.degree(e)),
    invert: kn("invert"),
    saturate: kn("saturate"),
    sepia: kn("sepia"),
    bgImage(e) {
      return e == null || Hf(e) || Bf.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = oO[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  O = {
    borderWidths: Gt("borderWidths"),
    borderStyles: Gt("borderStyles"),
    colors: Gt("colors"),
    borders: Gt("borders"),
    gradients: Gt("gradients", re.gradient),
    radii: Gt("radii", re.px),
    space: Gt("space", Qs(re.vh, re.px)),
    spaceT: Gt("space", Qs(re.vh, re.px)),
    degreeT(e) {
      return { property: e, transform: re.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: bp({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Gt("sizes", Qs(re.vh, re.px)),
    sizesT: Gt("sizes", Qs(re.vh, re.fraction)),
    shadows: Gt("shadows"),
    logical: J8,
    blur: Gt("blur", re.blur),
  },
  bl = {
    background: O.colors("background"),
    backgroundColor: O.colors("backgroundColor"),
    backgroundImage: O.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: re.bgClip },
    bgSize: O.prop("backgroundSize"),
    bgPosition: O.prop("backgroundPosition"),
    bg: O.colors("background"),
    bgColor: O.colors("backgroundColor"),
    bgPos: O.prop("backgroundPosition"),
    bgRepeat: O.prop("backgroundRepeat"),
    bgAttachment: O.prop("backgroundAttachment"),
    bgGradient: O.gradients("backgroundImage"),
    bgClip: { transform: re.bgClip },
  };
Object.assign(bl, { bgImage: bl.backgroundImage, bgImg: bl.backgroundImage });
var se = {
  border: O.borders("border"),
  borderWidth: O.borderWidths("borderWidth"),
  borderStyle: O.borderStyles("borderStyle"),
  borderColor: O.colors("borderColor"),
  borderRadius: O.radii("borderRadius"),
  borderTop: O.borders("borderTop"),
  borderBlockStart: O.borders("borderBlockStart"),
  borderTopLeftRadius: O.radii("borderTopLeftRadius"),
  borderStartStartRadius: O.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: O.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: O.radii("borderTopRightRadius"),
  borderStartEndRadius: O.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: O.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: O.borders("borderRight"),
  borderInlineEnd: O.borders("borderInlineEnd"),
  borderBottom: O.borders("borderBottom"),
  borderBlockEnd: O.borders("borderBlockEnd"),
  borderBottomLeftRadius: O.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: O.radii("borderBottomRightRadius"),
  borderLeft: O.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: O.borders(["borderLeft", "borderRight"]),
  borderInline: O.borders("borderInline"),
  borderY: O.borders(["borderTop", "borderBottom"]),
  borderBlock: O.borders("borderBlock"),
  borderTopWidth: O.borderWidths("borderTopWidth"),
  borderBlockStartWidth: O.borderWidths("borderBlockStartWidth"),
  borderTopColor: O.colors("borderTopColor"),
  borderBlockStartColor: O.colors("borderBlockStartColor"),
  borderTopStyle: O.borderStyles("borderTopStyle"),
  borderBlockStartStyle: O.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: O.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: O.borderWidths("borderBlockEndWidth"),
  borderBottomColor: O.colors("borderBottomColor"),
  borderBlockEndColor: O.colors("borderBlockEndColor"),
  borderBottomStyle: O.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: O.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: O.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: O.borderWidths("borderInlineStartWidth"),
  borderLeftColor: O.colors("borderLeftColor"),
  borderInlineStartColor: O.colors("borderInlineStartColor"),
  borderLeftStyle: O.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: O.borderStyles("borderInlineStartStyle"),
  borderRightWidth: O.borderWidths("borderRightWidth"),
  borderInlineEndWidth: O.borderWidths("borderInlineEndWidth"),
  borderRightColor: O.colors("borderRightColor"),
  borderInlineEndColor: O.colors("borderInlineEndColor"),
  borderRightStyle: O.borderStyles("borderRightStyle"),
  borderInlineEndStyle: O.borderStyles("borderInlineEndStyle"),
  borderTopRadius: O.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: O.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: O.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: O.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(se, {
  rounded: se.borderRadius,
  roundedTop: se.borderTopRadius,
  roundedTopLeft: se.borderTopLeftRadius,
  roundedTopRight: se.borderTopRightRadius,
  roundedTopStart: se.borderStartStartRadius,
  roundedTopEnd: se.borderStartEndRadius,
  roundedBottom: se.borderBottomRadius,
  roundedBottomLeft: se.borderBottomLeftRadius,
  roundedBottomRight: se.borderBottomRightRadius,
  roundedBottomStart: se.borderEndStartRadius,
  roundedBottomEnd: se.borderEndEndRadius,
  roundedLeft: se.borderLeftRadius,
  roundedRight: se.borderRightRadius,
  roundedStart: se.borderInlineStartRadius,
  roundedEnd: se.borderInlineEndRadius,
  borderStart: se.borderInlineStart,
  borderEnd: se.borderInlineEnd,
  borderTopStartRadius: se.borderStartStartRadius,
  borderTopEndRadius: se.borderStartEndRadius,
  borderBottomStartRadius: se.borderEndStartRadius,
  borderBottomEndRadius: se.borderEndEndRadius,
  borderStartRadius: se.borderInlineStartRadius,
  borderEndRadius: se.borderInlineEndRadius,
  borderStartWidth: se.borderInlineStartWidth,
  borderEndWidth: se.borderInlineEndWidth,
  borderStartColor: se.borderInlineStartColor,
  borderEndColor: se.borderInlineEndColor,
  borderStartStyle: se.borderInlineStartStyle,
  borderEndStyle: se.borderInlineEndStyle,
});
var dO = {
    color: O.colors("color"),
    textColor: O.colors("color"),
    fill: O.colors("fill"),
    stroke: O.colors("stroke"),
  },
  zf = {
    boxShadow: O.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: O.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: O.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(zf, { shadow: zf.boxShadow });
var fO = {
    filter: { transform: re.filter },
    blur: O.blur("--chakra-blur"),
    brightness: O.propT("--chakra-brightness", re.brightness),
    contrast: O.propT("--chakra-contrast", re.contrast),
    hueRotate: O.propT("--chakra-hue-rotate", re.hueRotate),
    invert: O.propT("--chakra-invert", re.invert),
    saturate: O.propT("--chakra-saturate", re.saturate),
    dropShadow: O.propT("--chakra-drop-shadow", re.dropShadow),
    backdropFilter: { transform: re.backdropFilter },
    backdropBlur: O.blur("--chakra-backdrop-blur"),
    backdropBrightness: O.propT("--chakra-backdrop-brightness", re.brightness),
    backdropContrast: O.propT("--chakra-backdrop-contrast", re.contrast),
    backdropHueRotate: O.propT("--chakra-backdrop-hue-rotate", re.hueRotate),
    backdropInvert: O.propT("--chakra-backdrop-invert", re.invert),
    backdropSaturate: O.propT("--chakra-backdrop-saturate", re.saturate),
  },
  au = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: re.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: O.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: O.space("gap"),
    rowGap: O.space("rowGap"),
    columnGap: O.space("columnGap"),
  };
Object.assign(au, { flexDir: au.flexDirection });
var ux = {
    gridGap: O.space("gridGap"),
    gridColumnGap: O.space("gridColumnGap"),
    gridRowGap: O.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  hO = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: re.outline },
    outlineOffset: !0,
    outlineColor: O.colors("outlineColor"),
  },
  Xt = {
    width: O.sizesT("width"),
    inlineSize: O.sizesT("inlineSize"),
    height: O.sizes("height"),
    blockSize: O.sizes("blockSize"),
    boxSize: O.sizes(["width", "height"]),
    minWidth: O.sizes("minWidth"),
    minInlineSize: O.sizes("minInlineSize"),
    minHeight: O.sizes("minHeight"),
    minBlockSize: O.sizes("minBlockSize"),
    maxWidth: O.sizes("maxWidth"),
    maxInlineSize: O.sizes("maxInlineSize"),
    maxHeight: O.sizes("maxHeight"),
    maxBlockSize: O.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: O.propT("float", re.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Xt, {
  w: Xt.width,
  h: Xt.height,
  minW: Xt.minWidth,
  maxW: Xt.maxWidth,
  minH: Xt.minHeight,
  maxH: Xt.maxHeight,
  overscroll: Xt.overscrollBehavior,
  overscrollX: Xt.overscrollBehaviorX,
  overscrollY: Xt.overscrollBehaviorY,
});
var pO = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage"),
};
function mO(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var gO = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  vO = gO(mO),
  yO = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  wO = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  cd = (e, t, n) => {
    const r = {},
      o = vO(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  xO = {
    srOnly: {
      transform(e) {
        return e === !0 ? yO : e === "focusable" ? wO : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => cd(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => cd(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => cd(t, e, n) },
  },
  ka = {
    position: !0,
    pos: O.prop("position"),
    zIndex: O.prop("zIndex", "zIndices"),
    inset: O.spaceT("inset"),
    insetX: O.spaceT(["left", "right"]),
    insetInline: O.spaceT("insetInline"),
    insetY: O.spaceT(["top", "bottom"]),
    insetBlock: O.spaceT("insetBlock"),
    top: O.spaceT("top"),
    insetBlockStart: O.spaceT("insetBlockStart"),
    bottom: O.spaceT("bottom"),
    insetBlockEnd: O.spaceT("insetBlockEnd"),
    left: O.spaceT("left"),
    insetInlineStart: O.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: O.spaceT("right"),
    insetInlineEnd: O.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(ka, {
  insetStart: ka.insetInlineStart,
  insetEnd: ka.insetInlineEnd,
});
var SO = {
    ring: { transform: re.ring },
    ringColor: O.colors("--chakra-ring-color"),
    ringOffset: O.prop("--chakra-ring-offset-width"),
    ringOffsetColor: O.colors("--chakra-ring-offset-color"),
    ringInset: O.prop("--chakra-ring-inset"),
  },
  we = {
    margin: O.spaceT("margin"),
    marginTop: O.spaceT("marginTop"),
    marginBlockStart: O.spaceT("marginBlockStart"),
    marginRight: O.spaceT("marginRight"),
    marginInlineEnd: O.spaceT("marginInlineEnd"),
    marginBottom: O.spaceT("marginBottom"),
    marginBlockEnd: O.spaceT("marginBlockEnd"),
    marginLeft: O.spaceT("marginLeft"),
    marginInlineStart: O.spaceT("marginInlineStart"),
    marginX: O.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: O.spaceT("marginInline"),
    marginY: O.spaceT(["marginTop", "marginBottom"]),
    marginBlock: O.spaceT("marginBlock"),
    padding: O.space("padding"),
    paddingTop: O.space("paddingTop"),
    paddingBlockStart: O.space("paddingBlockStart"),
    paddingRight: O.space("paddingRight"),
    paddingBottom: O.space("paddingBottom"),
    paddingBlockEnd: O.space("paddingBlockEnd"),
    paddingLeft: O.space("paddingLeft"),
    paddingInlineStart: O.space("paddingInlineStart"),
    paddingInlineEnd: O.space("paddingInlineEnd"),
    paddingX: O.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: O.space("paddingInline"),
    paddingY: O.space(["paddingTop", "paddingBottom"]),
    paddingBlock: O.space("paddingBlock"),
  };
Object.assign(we, {
  m: we.margin,
  mt: we.marginTop,
  mr: we.marginRight,
  me: we.marginInlineEnd,
  marginEnd: we.marginInlineEnd,
  mb: we.marginBottom,
  ml: we.marginLeft,
  ms: we.marginInlineStart,
  marginStart: we.marginInlineStart,
  mx: we.marginX,
  my: we.marginY,
  p: we.padding,
  pt: we.paddingTop,
  py: we.paddingY,
  px: we.paddingX,
  pb: we.paddingBottom,
  pl: we.paddingLeft,
  ps: we.paddingInlineStart,
  paddingStart: we.paddingInlineStart,
  pr: we.paddingRight,
  pe: we.paddingInlineEnd,
  paddingEnd: we.paddingInlineEnd,
});
var bO = {
    textDecorationColor: O.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: O.shadows("textShadow"),
  },
  kO = {
    clipPath: !0,
    transform: O.propT("transform", re.transform),
    transformOrigin: !0,
    translateX: O.spaceT("--chakra-translate-x"),
    translateY: O.spaceT("--chakra-translate-y"),
    skewX: O.degreeT("--chakra-skew-x"),
    skewY: O.degreeT("--chakra-skew-y"),
    scaleX: O.prop("--chakra-scale-x"),
    scaleY: O.prop("--chakra-scale-y"),
    scale: O.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: O.degreeT("--chakra-rotate"),
  },
  EO = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: O.prop("transitionDuration", "transition.duration"),
    transitionProperty: O.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: O.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  CO = {
    fontFamily: O.prop("fontFamily", "fonts"),
    fontSize: O.prop("fontSize", "fontSizes", re.px),
    fontWeight: O.prop("fontWeight", "fontWeights"),
    lineHeight: O.prop("lineHeight", "lineHeights"),
    letterSpacing: O.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  TO = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: O.spaceT("scrollMargin"),
    scrollMarginTop: O.spaceT("scrollMarginTop"),
    scrollMarginBottom: O.spaceT("scrollMarginBottom"),
    scrollMarginLeft: O.spaceT("scrollMarginLeft"),
    scrollMarginRight: O.spaceT("scrollMarginRight"),
    scrollMarginX: O.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: O.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: O.spaceT("scrollPadding"),
    scrollPaddingTop: O.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: O.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: O.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: O.spaceT("scrollPaddingRight"),
    scrollPaddingX: O.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: O.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function cx(e) {
  return go(e) && e.reference ? e.reference : String(e);
}
var Qu = (e, ...t) => t.map(cx).join(` ${e} `).replace(/calc/g, ""),
  Rg = (...e) => `calc(${Qu("+", ...e)})`,
  Ig = (...e) => `calc(${Qu("-", ...e)})`,
  Uf = (...e) => `calc(${Qu("*", ...e)})`,
  Ng = (...e) => `calc(${Qu("/", ...e)})`,
  Dg = (e) => {
    const t = cx(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Uf(t, -1);
  },
  na = Object.assign(
    (e) => ({
      add: (...t) => na(Rg(e, ...t)),
      subtract: (...t) => na(Ig(e, ...t)),
      multiply: (...t) => na(Uf(e, ...t)),
      divide: (...t) => na(Ng(e, ...t)),
      negate: () => na(Dg(e)),
      toString: () => e.toString(),
    }),
    { add: Rg, subtract: Ig, multiply: Uf, divide: Ng, negate: Dg }
  );
function PO(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Lg(e) {
  if (e == null) return e;
  const { unitless: t } = PO(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
function OO(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${Lg(e)})`),
    t && n.push("and", `(max-width: ${Lg(t)})`),
    n.join(" ")
  );
}
var Ye = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  pr = (e) => dx((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Wn = (e) => dx((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  dx = (e, ...t) => t.map(e).join(", "),
  kp = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: pr(Ye.hover),
    _peerHover: Wn(Ye.hover),
    _groupFocus: pr(Ye.focus),
    _peerFocus: Wn(Ye.focus),
    _groupFocusVisible: pr(Ye.focusVisible),
    _peerFocusVisible: Wn(Ye.focusVisible),
    _groupActive: pr(Ye.active),
    _peerActive: Wn(Ye.active),
    _groupDisabled: pr(Ye.disabled),
    _peerDisabled: Wn(Ye.disabled),
    _groupInvalid: pr(Ye.invalid),
    _peerInvalid: Wn(Ye.invalid),
    _groupChecked: pr(Ye.checked),
    _peerChecked: Wn(Ye.checked),
    _groupFocusWithin: pr(Ye.focusWithin),
    _peerFocusWithin: Wn(Ye.focusWithin),
    _peerPlaceholderShown: Wn(Ye.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  _O = Object.keys(kp);
function AO(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var Ep = qn(
    {},
    bl,
    se,
    dO,
    au,
    Xt,
    fO,
    SO,
    hO,
    ux,
    xO,
    ka,
    zf,
    we,
    TO,
    CO,
    bO,
    kO,
    pO,
    EO
  ),
  jO = Object.assign({}, we, Xt, au, ux, ka),
  MO = Object.keys(jO),
  RO = [...Object.keys(Ep), ..._O],
  IO = { ...Ep, ...kp },
  NO = (e) => e in IO,
  DO = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = Or(e[a], t);
      if (s == null) continue;
      if (((s = go(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function LO(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function FO(e) {
  return /^var\(--.+\)$/.test(e);
}
var VO = (e, t) => e.startsWith("--") && typeof t == "string" && !FO(t),
  $O = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = LO(t);
    return (t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t)), t;
  };
function BO(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = Or(i, r),
        d = DO(c)(r);
      let f = {};
      for (let h in d) {
        const m = d[h];
        let v = Or(m, r);
        h in n && (h = n[h]), VO(h, v) && (v = $O(r, v));
        let x = t[h];
        if ((x === !0 && (x = { property: h }), go(v))) {
          (f[h] = (s = f[h]) != null ? s : {}), (f[h] = qn({}, f[h], o(v, !0)));
          continue;
        }
        let g =
          (u =
            (l = x == null ? void 0 : x.transform) == null
              ? void 0
              : l.call(x, v, r, c)) != null
            ? u
            : v;
        g = x != null && x.processResult ? o(g, !0) : g;
        const p = Or(x == null ? void 0 : x.property, r);
        if (!a && x != null && x.static) {
          const w = Or(x.static, r);
          f = qn({}, f, w);
        }
        if (p && Array.isArray(p)) {
          for (const w of p) f[w] = g;
          continue;
        }
        if (p) {
          p === "&" && go(g) ? (f = qn({}, f, g)) : (f[p] = g);
          continue;
        }
        if (go(g)) {
          f = qn({}, f, g);
          continue;
        }
        f[h] = g;
      }
      return f;
    };
  return o;
}
var HO = (e) => (t) => BO({ theme: t, pseudos: kp, configs: Ep })(e);
function zO(e, t) {
  if (Array.isArray(e)) return e;
  if (go(e)) return t(e);
  if (e != null) return [e];
}
function UO(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function WO(e) {
  const t = e.__breakpoints;
  return function (r, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = zO(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      h = !!r.parts;
    for (let m = 0; m < d; m++) {
      const v = t.details[m],
        x = t.details[UO(c, m)],
        g = OO(v.minW, x == null ? void 0 : x._minW),
        p = Or((s = r[o]) == null ? void 0 : s[c[m]], a);
      if (p) {
        if (h) {
          (l = r.parts) == null ||
            l.forEach((w) => {
              qn(u, { [w]: f ? p[w] : { [g]: p[w] } });
            });
          continue;
        }
        if (!h) {
          f ? qn(u, p) : (u[g] = p);
          continue;
        }
        u[g] = p;
      }
    }
    return u;
  };
}
function KO(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      a = WO(i);
    return qn(
      {},
      Or((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Li(e) {
  return AO(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function ZO(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function GO(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var YO = (e) => {
    const t = new WeakMap();
    return (r, o, i, a) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(o)) return s.get(o);
      const l = e(r, o, i, a);
      return s.set(o, l), l;
    };
  },
  XO = YO(GO);
function fx(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var hx = (e) => fx(e, (t) => t != null);
function qO(e) {
  return typeof e == "function";
}
function JO(e, ...t) {
  return qO(e) ? e(...t) : e;
}
function px(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: a } = K8(),
    s = e ? XO(i, `components.${e}`) : void 0,
    l = r || s,
    u = qn(
      { theme: i, colorMode: a },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      hx(ZO(o, ["children"]))
    ),
    c = k.useRef({});
  if (l) {
    const f = KO(l)(u);
    v2(c.current, f) || (c.current = f);
  }
  return c.current;
}
function mx(e, t = {}) {
  return px(e, t);
}
function fs(e, t = {}) {
  return px(e, t);
}
var QO = new Set([
    ...RO,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  e_ = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function t_(e) {
  return e_.has(e) || !QO.has(e);
}
function n_(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
var r_ =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  o_ = Z2(function (e) {
    return (
      r_.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  i_ = o_,
  a_ = function (t) {
    return t !== "theme";
  },
  Fg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? i_ : a_;
  },
  Vg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  s_ = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Q2(n, r, o),
      H8(function () {
        return I8(n, r, o);
      }),
      null
    );
  },
  l_ = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = Vg(t, n, r),
      l = s || Fg(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var m = z8(function (v, x, g) {
        var p = (u && v.as) || o,
          w = "",
          S = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var _ in v) C[_] = v[_];
          C.theme = k.useContext(rx);
        }
        typeof v.className == "string"
          ? (w = R8(x.registered, S, v.className))
          : v.className != null && (w = v.className + " ");
        var E = tx(d.concat(S), x.registered, C);
        (w += x.key + "-" + E.name), a !== void 0 && (w += " " + a);
        var A = u && s === void 0 ? Fg(p) : l,
          R = {};
        for (var M in v) (u && M === "as") || (A(M) && (R[M] = v[M]));
        return (
          (R.className = w),
          (R.ref = g),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(s_, {
              cache: x,
              serialized: E,
              isStringTag: typeof p == "string",
            }),
            k.createElement(p, R)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = s),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (m.withComponent = function (v, x) {
          return e(v, Vf({}, n, x, { shouldForwardProp: Vg(m, x, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  u_ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  su = l_.bind();
u_.forEach(function (e) {
  su[e] = su(e);
});
var $g,
  c_ = ($g = su.default) != null ? $g : su,
  d_ =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...a } = t,
        s = fx(a, (d, f) => NO(f)),
        l = JO(e, t),
        u = n_({}, o, l, hx(s), i),
        c = HO(u)(t.theme);
      return r ? [c, r] : c;
    };
function dd(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = t_);
  const o = d_({ baseStyle: n }),
    i = c_(e, r)(o);
  return T.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = ax();
    return T.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function f_() {
  const e = new Map();
  return new Proxy(dd, {
    apply(t, n, r) {
      return dd(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, dd(n)), e.get(n);
    },
  });
}
var je = f_();
function Ot(e) {
  return k.forwardRef(e);
}
function vo(e, t = []) {
  const n = k.useRef(e);
  return (
    k.useEffect(() => {
      n.current = e;
    }),
    k.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function ec(e, t) {
  const n = k.useRef(!1),
    r = k.useRef(!1);
  k.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    k.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const gx = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  tc = k.createContext({}),
  Cp = k.createContext(null),
  nc = typeof document < "u",
  h_ = nc ? k.useLayoutEffect : k.useEffect,
  vx = k.createContext({ strict: !1 }),
  Tp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  p_ = "framerAppearId",
  yx = "data-" + Tp(p_),
  wx = { skipAnimations: !1, useManualTiming: !1 };
class Bg {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function m_(e) {
  let t = new Bg(),
    n = new Bg(),
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            a.has(c) && (s.schedule(c), e()), c(l);
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const el = ["prepare", "read", "update", "preRender", "render", "postRender"],
  g_ = 40;
function xx(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = el.reduce((d, f) => ((d[f] = m_(() => (n = !0))), d), {}),
    a = (d) => {
      i[d].process(o);
    },
    s = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, g_), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        el.forEach(a),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(s);
    };
  return {
    schedule: el.reduce((d, f) => {
      const h = i[f];
      return (d[f] = (m, v = !1, x = !1) => (n || l(), h.schedule(m, v, x))), d;
    }, {}),
    cancel: (d) => el.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const { schedule: Pp, cancel: uF } = xx(queueMicrotask, !1);
function v_(e, t, n, r) {
  const { visualElement: o } = k.useContext(tc),
    i = k.useContext(vx),
    a = k.useContext(Cp),
    s = k.useContext(gx).reducedMotion,
    l = k.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  k.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = k.useRef(!!(n[yx] && !window.HandoffComplete));
  return (
    h_(() => {
      u &&
        (Pp.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    k.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function ni(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function y_(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ni(n) && (n.current = r));
    },
    [t]
  );
}
function Ja(e) {
  return typeof e == "string" || Array.isArray(e);
}
function rc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Op = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  _p = ["initial", ...Op];
function oc(e) {
  return rc(e.animate) || _p.some((t) => Ja(e[t]));
}
function Sx(e) {
  return !!(oc(e) || e.variants);
}
function w_(e, t) {
  if (oc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ja(n) ? n : void 0,
      animate: Ja(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function x_(e) {
  const { initial: t, animate: n } = w_(e, k.useContext(tc));
  return k.useMemo(() => ({ initial: t, animate: n }), [Hg(t), Hg(n)]);
}
function Hg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Qa = {};
for (const e in zg) Qa[e] = { isEnabled: (t) => zg[e].some((n) => !!t[n]) };
function S_(e) {
  for (const t in e) Qa[t] = { ...Qa[t], ...e[t] };
}
const bx = k.createContext({}),
  kx = k.createContext({}),
  b_ = Symbol.for("motionComponentSymbol");
function k_({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && S_(e);
  function i(s, l) {
    let u;
    const c = { ...k.useContext(gx), ...s, layoutId: E_(s) },
      { isStatic: d } = c,
      f = x_(s),
      h = r(s, d);
    if (!d && nc) {
      f.visualElement = v_(o, h, c, t);
      const m = k.useContext(kx),
        v = k.useContext(vx).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, v, e, m));
    }
    return k.createElement(
      tc.Provider,
      { value: f },
      u && f.visualElement
        ? k.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, s, y_(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const a = k.forwardRef(i);
  return (a[b_] = o), a;
}
function E_({ layoutId: e }) {
  const t = k.useContext(bx).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function C_(e) {
  function t(r, o = {}) {
    return k_(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const T_ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ap(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(T_.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const lu = {};
function P_(e) {
  Object.assign(lu, e);
}
const hs = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Mo = new Set(hs);
function Ex(e, { layout: t, layoutId: n }) {
  return (
    Mo.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!lu[e] || e === "opacity"))
  );
}
const Pt = (e) => !!(e && e.getVelocity),
  O_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  __ = hs.length;
function A_(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let a = 0; a < __; a++) {
    const s = hs[a];
    if (e[s] !== void 0) {
      const l = O_[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const Cx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Tx = Cx("--"),
  j_ = Cx("var(--"),
  uu = (e) => (j_(e) ? M_.test(e.split("/*")[0].trim()) : !1),
  M_ =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,
  R_ = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Vr = (e, t, n) => (n > t ? t : n < e ? e : n),
  Fi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ea = { ...Fi, transform: (e) => Vr(0, 1, e) },
  tl = { ...Fi, default: 1 },
  Ca = (e) => Math.round(e * 1e5) / 1e5,
  jp = /(-)?([\d]*\.?[\d])+/g,
  I_ =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  N_ =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ps(e) {
  return typeof e == "string";
}
const ms = (e) => ({
    test: (t) => ps(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  vr = ms("deg"),
  Ln = ms("%"),
  G = ms("px"),
  D_ = ms("vh"),
  L_ = ms("vw"),
  Ug = {
    ...Ln,
    parse: (e) => Ln.parse(e) / 100,
    transform: (e) => Ln.transform(e * 100),
  },
  Wg = { ...Fi, transform: Math.round },
  Px = {
    borderWidth: G,
    borderTopWidth: G,
    borderRightWidth: G,
    borderBottomWidth: G,
    borderLeftWidth: G,
    borderRadius: G,
    radius: G,
    borderTopLeftRadius: G,
    borderTopRightRadius: G,
    borderBottomRightRadius: G,
    borderBottomLeftRadius: G,
    width: G,
    maxWidth: G,
    height: G,
    maxHeight: G,
    size: G,
    top: G,
    right: G,
    bottom: G,
    left: G,
    padding: G,
    paddingTop: G,
    paddingRight: G,
    paddingBottom: G,
    paddingLeft: G,
    margin: G,
    marginTop: G,
    marginRight: G,
    marginBottom: G,
    marginLeft: G,
    rotate: vr,
    rotateX: vr,
    rotateY: vr,
    rotateZ: vr,
    scale: tl,
    scaleX: tl,
    scaleY: tl,
    scaleZ: tl,
    skew: vr,
    skewX: vr,
    skewY: vr,
    distance: G,
    translateX: G,
    translateY: G,
    translateZ: G,
    x: G,
    y: G,
    z: G,
    perspective: G,
    transformPerspective: G,
    opacity: Ea,
    originX: Ug,
    originY: Ug,
    originZ: G,
    zIndex: Wg,
    fillOpacity: Ea,
    strokeOpacity: Ea,
    numOctaves: Wg,
  };
function Mp(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Tx(d)) {
      i[d] = f;
      continue;
    }
    const h = Px[d],
      m = R_(f, h);
    if (Mo.has(d)) {
      if (((l = !0), (a[d] = m), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = m)) : (o[d] = m);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = A_(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Rp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ox(e, t, n) {
  for (const r in t) !Pt(t[r]) && !Ex(r, n) && (e[r] = t[r]);
}
function F_({ transformTemplate: e }, t, n) {
  return k.useMemo(() => {
    const r = Rp();
    return (
      Mp(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function V_(e, t, n) {
  const r = e.style || {},
    o = {};
  return Ox(o, r, e), Object.assign(o, F_(e, t, n)), o;
}
function $_(e, t, n) {
  const r = {},
    o = V_(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const B_ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function cu(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    B_.has(e)
  );
}
let _x = (e) => !cu(e);
function H_(e) {
  e && (_x = (t) => (t.startsWith("on") ? !cu(t) : e(t)));
}
try {
  H_(require("@emotion/is-prop-valid").default);
} catch {}
function z_(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((_x(o) ||
        (n === !0 && cu(o)) ||
        (!t && !cu(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Kg(e, t, n) {
  return typeof e == "string" ? e : G.transform(t + n * e);
}
function U_(e, t, n) {
  const r = Kg(t, e.x, e.width),
    o = Kg(n, e.y, e.height);
  return `${r} ${o}`;
}
const W_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  K_ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Z_(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? W_ : K_;
  e[i.offset] = G.transform(-r);
  const a = G.transform(t),
    s = G.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Ip(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Mp(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: m, dimensions: v } = e;
  h.transform && (v && (m.transform = h.transform), delete h.transform),
    v &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = U_(
        v,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    a !== void 0 && Z_(h, a, s, l, !1);
}
const Ax = () => ({ ...Rp(), attrs: {} }),
  Np = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function G_(e, t, n, r) {
  const o = k.useMemo(() => {
    const i = Ax();
    return (
      Ip(i, t, { enableHardwareAcceleration: !1 }, Np(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Ox(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Y_(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Ap(n) ? G_ : $_)(r, i, a, n),
      u = z_(r, typeof n == "string", e),
      c = n !== k.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = k.useMemo(() => (Pt(d) ? d.get() : d), [d]);
    return k.createElement(n, { ...c, children: f });
  };
}
function jx(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Mx = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Rx(e, t, n, r) {
  jx(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Mx.has(o) ? o : Tp(o), t.attrs[o]);
}
function Dp(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Pt(n[o]) || (t.style && Pt(t.style[o])) || Ex(o, e)) && (r[o] = n[o]);
  return r;
}
function Ix(e, t) {
  const n = Dp(e, t);
  for (const r in e)
    if (Pt(e[r]) || Pt(t[r])) {
      const o =
        hs.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Lp(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function X_(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const du = (e) => Array.isArray(e),
  q_ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  J_ = (e) => (du(e) ? e[e.length - 1] || 0 : e);
function kl(e) {
  const t = Pt(e) ? e.get() : e;
  return q_(t) ? t.toValue() : t;
}
function Q_(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const a = { latestValues: eA(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const Nx = (e) => (t, n) => {
  const r = k.useContext(tc),
    o = k.useContext(Cp),
    i = () => Q_(e, t, r, o);
  return n ? i() : X_(i);
};
function eA(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = kl(i[f]);
  let { initial: a, animate: s } = e;
  const l = oc(e),
    u = Sx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !rc(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const m = Lp(e, h);
        if (!m) return;
        const { transitionEnd: v, transition: x, ...g } = m;
        for (const p in g) {
          let w = g[p];
          if (Array.isArray(w)) {
            const S = c ? w.length - 1 : 0;
            w = w[S];
          }
          w !== null && (o[p] = w);
        }
        for (const p in v) o[p] = v[p];
      }),
    o
  );
}
const Be = (e) => e,
  {
    schedule: _e,
    cancel: lr,
    state: qe,
    steps: fd,
  } = xx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0),
  tA = {
    useVisualState: Nx({
      scrapeMotionValuesFromProps: Ix,
      createRenderState: Ax,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        _e.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          _e.render(() => {
            Ip(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Np(t.tagName),
              e.transformTemplate
            ),
              Rx(t, n);
          });
      },
    }),
  },
  nA = {
    useVisualState: Nx({
      scrapeMotionValuesFromProps: Dp,
      createRenderState: Rp,
    }),
  };
function rA(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ap(e) ? tA : nA),
    preloadedFeatures: n,
    useRender: Y_(t),
    createVisualElement: r,
    Component: e,
  };
}
function Jn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Dx = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function ic(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const oA = (e) => (t) => Dx(t) && e(t, ic(t));
function er(e, t, n, r) {
  return Jn(e, t, oA(n), r);
}
const iA = (e, t) => (n) => t(e(n)),
  tr = (...e) => e.reduce(iA);
function Lx(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Zg = Lx("dragHorizontal"),
  Gg = Lx("dragVertical");
function Fx(e) {
  let t = !1;
  if (e === "y") t = Gg();
  else if (e === "x") t = Zg();
  else {
    const n = Zg(),
      r = Gg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Vx() {
  const e = Fx(!0);
  return e ? (e(), !1) : !0;
}
class Wr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Yg(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.pointerType === "touch" || Vx()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && _e.update(() => s[r](i, a));
    };
  return er(e.current, n, o, { passive: !e.getProps()[r] });
}
class aA extends Wr {
  mount() {
    this.unmount = tr(Yg(this.node, !0), Yg(this.node, !1));
  }
  unmount() {}
}
class sA extends Wr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = tr(
      Jn(this.node.current, "focus", () => this.onFocus()),
      Jn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const $x = (e, t) => (t ? (e === t ? !0 : $x(e, t.parentElement)) : !1);
function hd(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, ic(n));
}
class lA extends Wr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Be),
      (this.removeEndListeners = Be),
      (this.removeAccessibleListeners = Be),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = er(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              _e.update(() => {
                !d && !$x(this.node.current, s.target)
                  ? c && c(s, l)
                  : u && u(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = er(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = tr(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                hd("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && _e.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Jn(this.node.current, "keyup", a)),
              hd("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = Jn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && hd("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = Jn(this.node.current, "blur", r);
        this.removeAccessibleListeners = tr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && _e.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Vx()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = er(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Jn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = tr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Wf = new WeakMap(),
  pd = new WeakMap(),
  uA = (e) => {
    const t = Wf.get(e.target);
    t && t(e);
  },
  cA = (e) => {
    e.forEach(uA);
  };
function dA({ root: e, ...t }) {
  const n = e || document;
  pd.has(n) || pd.set(n, {});
  const r = pd.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(cA, { root: e, ...t })), r[o];
}
function fA(e, t, n) {
  const r = dA(t);
  return (
    Wf.set(e, n),
    r.observe(e),
    () => {
      Wf.delete(e), r.unobserve(e);
    }
  );
}
const hA = { some: 0, all: 1 };
class pA extends Wr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : hA[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return fA(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(mA(t, n)) && this.startObserver();
  }
  unmount() {}
}
function mA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const gA = {
  inView: { Feature: pA },
  tap: { Feature: lA },
  focus: { Feature: sA },
  hover: { Feature: aA },
};
function Bx(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function vA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function yA(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function ac(e, t, n) {
  const r = e.getProps();
  return Lp(r, t, n !== void 0 ? n : r.custom, vA(e), yA(e));
}
let Fp = Be;
const yo = (e) => e * 1e3,
  nr = (e) => e / 1e3,
  wA = { current: !1 },
  Hx = (e) => Array.isArray(e) && typeof e[0] == "number";
function zx(e) {
  return !!(
    !e ||
    (typeof e == "string" && Ux[e]) ||
    Hx(e) ||
    (Array.isArray(e) && e.every(zx))
  );
}
const da = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ux = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: da([0, 0.65, 0.55, 1]),
    circOut: da([0.55, 0, 1, 0.45]),
    backIn: da([0.31, 0.01, 0.66, -0.59]),
    backOut: da([0.33, 1.53, 0.69, 0.99]),
  };
function Wx(e) {
  if (e) return Hx(e) ? da(e) : Array.isArray(e) ? e.map(Wx) : Ux[e];
}
function xA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Wx(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function SA(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Kx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  bA = 1e-7,
  kA = 12;
function EA(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = Kx(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > bA && ++s < kA);
  return a;
}
function gs(e, t, n, r) {
  if (e === t && n === r) return Be;
  const o = (i) => EA(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Kx(o(i), t, r));
}
const CA = gs(0.42, 0, 1, 1),
  TA = gs(0, 0, 0.58, 1),
  Zx = gs(0.42, 0, 0.58, 1),
  PA = (e) => Array.isArray(e) && typeof e[0] != "number",
  Gx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Yx = (e) => (t) => 1 - e(1 - t),
  Vp = (e) => 1 - Math.sin(Math.acos(e)),
  Xx = Yx(Vp),
  OA = Gx(Vp),
  qx = gs(0.33, 1.53, 0.69, 0.99),
  $p = Yx(qx),
  _A = Gx($p),
  AA = (e) =>
    (e *= 2) < 1 ? 0.5 * $p(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  jA = {
    linear: Be,
    easeIn: CA,
    easeInOut: Zx,
    easeOut: TA,
    circIn: Vp,
    circInOut: OA,
    circOut: Xx,
    backIn: $p,
    backInOut: _A,
    backOut: qx,
    anticipate: AA,
  },
  Xg = (e) => {
    if (Array.isArray(e)) {
      Fp(e.length === 4);
      const [t, n, r, o] = e;
      return gs(t, n, r, o);
    } else if (typeof e == "string") return jA[e];
    return e;
  },
  es = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Oe = (e, t, n) => e + (t - e) * n;
function md(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function MA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = md(l, s, e + 1 / 3)), (i = md(l, s, e)), (a = md(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const Bp = (e, t) => (n) =>
    !!(
      (ps(n) && N_.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Jx = (e, t, n) => (r) => {
    if (!ps(r)) return r;
    const [o, i, a, s] = r.match(jp);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  RA = (e) => Vr(0, 255, e),
  gd = { ...Fi, transform: (e) => Math.round(RA(e)) },
  fo = {
    test: Bp("rgb", "red"),
    parse: Jx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      gd.transform(e) +
      ", " +
      gd.transform(t) +
      ", " +
      gd.transform(n) +
      ", " +
      Ca(Ea.transform(r)) +
      ")",
  };
function IA(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Kf = { test: Bp("#"), parse: IA, transform: fo.transform },
  ri = {
    test: Bp("hsl", "hue"),
    parse: Jx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ln.transform(Ca(t)) +
      ", " +
      Ln.transform(Ca(n)) +
      ", " +
      Ca(Ea.transform(r)) +
      ")",
  },
  vd = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  NA = [Kf, fo, ri],
  DA = (e) => NA.find((t) => t.test(e));
function qg(e) {
  const t = DA(e);
  let n = t.parse(e);
  return t === ri && (n = MA(n)), n;
}
const Jg = (e, t) => {
    const n = qg(e),
      r = qg(t),
      o = { ...n };
    return (i) => (
      (o.red = vd(n.red, r.red, i)),
      (o.green = vd(n.green, r.green, i)),
      (o.blue = vd(n.blue, r.blue, i)),
      (o.alpha = Oe(n.alpha, r.alpha, i)),
      fo.transform(o)
    );
  },
  at = {
    test: (e) => fo.test(e) || Kf.test(e) || ri.test(e),
    parse: (e) =>
      fo.test(e) ? fo.parse(e) : ri.test(e) ? ri.parse(e) : Kf.parse(e),
    transform: (e) =>
      ps(e) ? e : e.hasOwnProperty("red") ? fo.transform(e) : ri.transform(e),
  };
function LA(e) {
  var t, n;
  return (
    isNaN(e) &&
    ps(e) &&
    (((t = e.match(jp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(I_)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Qx = "number",
  eS = "color",
  FA = "var",
  VA = "var(",
  Qg = "${}",
  e1 =
    /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function fu(e) {
  const t = e.toString(),
    n = t.match(e1) || [],
    r = [],
    o = { color: [], number: [], var: [] },
    i = [];
  for (let l = 0; l < n.length; l++) {
    const u = n[l];
    at.test(u)
      ? (o.color.push(l), i.push(eS), r.push(at.parse(u)))
      : u.startsWith(VA)
      ? (o.var.push(l), i.push(FA), r.push(u))
      : (o.number.push(l), i.push(Qx), r.push(parseFloat(u)));
  }
  const s = t.replace(e1, Qg).split(Qg);
  return { values: r, split: s, indexes: o, types: i };
}
function tS(e) {
  return fu(e).values;
}
function nS(e) {
  const { split: t, types: n } = fu(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < r; a++)
      if (((i += t[a]), o[a] !== void 0)) {
        const s = n[a];
        s === Qx
          ? (i += Ca(o[a]))
          : s === eS
          ? (i += at.transform(o[a]))
          : (i += o[a]);
      }
    return i;
  };
}
const $A = (e) => (typeof e == "number" ? 0 : e);
function BA(e) {
  const t = tS(e);
  return nS(e)(t.map($A));
}
const $r = {
  test: LA,
  parse: tS,
  createTransformer: nS,
  getAnimatableNone: BA,
};
function Zf(e, t) {
  return (n) => (n > 0 ? t : e);
}
function HA(e, t) {
  return (n) => Oe(e, t, n);
}
function Hp(e) {
  return typeof e == "number"
    ? HA
    : typeof e == "string"
    ? uu(e)
      ? Zf
      : at.test(e)
      ? Jg
      : WA
    : Array.isArray(e)
    ? rS
    : typeof e == "object"
    ? at.test(e)
      ? Jg
      : zA
    : Zf;
}
function rS(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, a) => Hp(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++) n[a] = o[a](i);
    return n;
  };
}
function zA(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Hp(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function UA(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i],
      s = e.indexes[a][o[a]],
      l = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[a]++;
  }
  return r;
}
const WA = (e, t) => {
  const n = $r.createTransformer(t),
    r = fu(e),
    o = fu(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? tr(rS(UA(r, o), o.values), n)
    : Zf(e, t);
};
function oS(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Oe(e, t, n)
    : Hp(e)(e, t);
}
function KA(e, t, n) {
  const r = [],
    o = n || oS,
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Be : t;
      s = tr(l, s);
    }
    r.push(s);
  }
  return r;
}
function ZA(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Fp(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = KA(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = es(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(Vr(e[0], e[i - 1], u)) : l;
}
function GA(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = es(0, t, r);
    e.push(Oe(n, 1, o));
  }
}
function YA(e) {
  const t = [0];
  return GA(t, e.length - 1), t;
}
function XA(e, t) {
  return e.map((n) => n * t);
}
function qA(e, t) {
  return e.map(() => t || Zx).splice(0, e.length - 1);
}
function hu({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = PA(r) ? r.map(Xg) : Xg(r),
    i = { done: !1, value: t[0] },
    a = XA(n && n.length === t.length ? n : YA(t), e),
    s = ZA(a, t, { ease: Array.isArray(o) ? o : qA(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function iS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const JA = 5;
function aS(e, t, n) {
  const r = Math.max(t - JA, 0);
  return iS(n - e(r), t - r);
}
const yd = 0.001,
  QA = 0.01,
  ej = 10,
  tj = 0.05,
  nj = 1;
function rj({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = Vr(tj, nj, a)),
    (e = Vr(QA, ej, nr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - n,
            h = Gf(u, a),
            m = Math.exp(-d);
          return yd - (f / h) * m;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * n + n,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-d),
            v = Gf(Math.pow(u, 2), a);
          return ((-o(u) + yd > 0 ? -1 : 1) * ((f - h) * m)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -yd + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = ij(o, i, s);
  if (((e = yo(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const oj = 12;
function ij(e, t, n) {
  let r = n;
  for (let o = 1; o < oj; o++) r = r - e(r) / t(r);
  return r;
}
function Gf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const aj = ["duration", "bounce"],
  sj = ["stiffness", "damping", "mass"];
function t1(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lj(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!t1(e, sj) && t1(e, aj)) {
    const n = rj(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function sS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = lj({ ...r, velocity: -nr(r.velocity || 0) }),
    h = d || 0,
    m = l / (2 * Math.sqrt(s * u)),
    v = i - o,
    x = nr(Math.sqrt(s / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let p;
  if (m < 1) {
    const w = Gf(x, m);
    p = (S) => {
      const C = Math.exp(-m * x * S);
      return (
        i - C * (((h + m * x * v) / w) * Math.sin(w * S) + v * Math.cos(w * S))
      );
    };
  } else if (m === 1) p = (w) => i - Math.exp(-x * w) * (v + (h + x * v) * w);
  else {
    const w = x * Math.sqrt(m * m - 1);
    p = (S) => {
      const C = Math.exp(-m * x * S),
        _ = Math.min(w * S, 300);
      return (
        i - (C * ((h + m * x * v) * Math.sinh(_) + w * v * Math.cosh(_))) / w
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (w) => {
      const S = p(w);
      if (f) a.done = w >= c;
      else {
        let C = h;
        w !== 0 && (m < 1 ? (C = aS(p, w, S)) : (C = 0));
        const _ = Math.abs(C) <= n,
          E = Math.abs(i - S) <= t;
        a.done = _ && E;
      }
      return (a.value = a.done ? i : S), a;
    },
  };
}
function n1({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (A) => (s !== void 0 && A < s) || (l !== void 0 && A > l),
    m = (A) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - A) < Math.abs(l - A)
        ? s
        : l;
  let v = n * t;
  const x = d + v,
    g = a === void 0 ? x : a(x);
  g !== x && (v = g - d);
  const p = (A) => -v * Math.exp(-A / r),
    w = (A) => g + p(A),
    S = (A) => {
      const R = p(A),
        M = w(A);
      (f.done = Math.abs(R) <= u), (f.value = f.done ? g : M);
    };
  let C, _;
  const E = (A) => {
    h(f.value) &&
      ((C = A),
      (_ = sS({
        keyframes: [f.value, m(f.value)],
        velocity: aS(w, A, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let R = !1;
        return (
          !_ && C === void 0 && ((R = !0), S(A), E(A)),
          C !== void 0 && A > C ? _.next(A - C) : (!R && S(A), f)
        );
      },
    }
  );
}
let El;
function uj() {
  El = void 0;
}
const wo = {
    now: () => (
      El === void 0 &&
        wo.set(
          qe.isProcessing || wx.useManualTiming
            ? qe.timestamp
            : performance.now()
        ),
      El
    ),
    set: (e) => {
      (El = e), queueMicrotask(uj);
    },
  },
  cj = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => _e.update(t, !0),
      stop: () => lr(t),
      now: () => (qe.isProcessing ? qe.timestamp : wo.now()),
    };
  },
  r1 = 2e4;
function o1(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < r1; ) (t += n), (r = e.next(t));
  return t >= r1 ? 1 / 0 : t;
}
const dj = { decay: n1, inertia: n1, tween: hu, keyframes: hu, spring: sS },
  fj = (e) => e / 100;
function pu({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = cj,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    m = !1,
    v,
    x;
  const g = () => {
    x = new Promise((z) => {
      v = z;
    });
  };
  g();
  let p;
  const w = dj[o] || hu;
  let S;
  w !== hu &&
    typeof r[0] != "number" &&
    ((S = tr(fj, oS(r[0], r[1]))), (r = [0, 100]));
  const C = w({ ...f, keyframes: r });
  let _;
  s === "mirror" &&
    (_ = w({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let E = "idle",
    A = null,
    R = null,
    M = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = o1(C));
  const { calculatedDuration: B } = C;
  let K = 1 / 0,
    Y = 1 / 0;
  B !== null && ((K = B + a), (Y = K * (i + 1) - a));
  let X = 0;
  const de = (z) => {
      if (R === null) return;
      h > 0 && (R = Math.min(R, z)),
        h < 0 && (R = Math.min(z - Y / h, R)),
        A !== null ? (X = A) : (X = Math.round(z - R) * h);
      const J = X - t * (h >= 0 ? 1 : -1),
        H = h >= 0 ? J < 0 : J > Y;
      (X = Math.max(J, 0)), E === "finished" && A === null && (X = Y);
      let Z = X,
        ve = C;
      if (i) {
        const zt = Math.min(X, Y) / K;
        let Ut = Math.floor(zt),
          tt = zt % 1;
        !tt && zt >= 1 && (tt = 1),
          tt === 1 && Ut--,
          (Ut = Math.min(Ut, i + 1)),
          !!(Ut % 2) &&
            (s === "reverse"
              ? ((tt = 1 - tt), a && (tt -= a / K))
              : s === "mirror" && (ve = _)),
          (Z = Vr(0, 1, tt) * K);
      }
      const ce = H ? { done: !1, value: r[0] } : ve.next(Z);
      S && (ce.value = S(ce.value));
      let { done: He } = ce;
      !H && B !== null && (He = h >= 0 ? X >= Y : X <= 0);
      const De = A === null && (E === "finished" || (E === "running" && He));
      return d && d(ce.value), De && D(), ce;
    },
    U = () => {
      p && p.stop(), (p = void 0);
    },
    N = () => {
      (E = "idle"), U(), v(), g(), (R = M = null);
    },
    D = () => {
      (E = "finished"), c && c(), U(), v();
    },
    $ = () => {
      if (m) return;
      p || (p = n(de));
      const z = p.now();
      l && l(),
        A !== null ? (R = z - A) : (!R || E === "finished") && (R = z),
        E === "finished" && g(),
        (M = R),
        (A = null),
        (E = "running"),
        p.start();
    };
  e && $();
  const W = {
    then(z, J) {
      return x.then(z, J);
    },
    get time() {
      return nr(X);
    },
    set time(z) {
      (z = yo(z)),
        (X = z),
        A !== null || !p || h === 0 ? (A = z) : (R = p.now() - z / h);
    },
    get duration() {
      const z = C.calculatedDuration === null ? o1(C) : C.calculatedDuration;
      return nr(z);
    },
    get speed() {
      return h;
    },
    set speed(z) {
      z === h || !p || ((h = z), (W.time = nr(X)));
    },
    get state() {
      return E;
    },
    play: $,
    pause: () => {
      (E = "paused"), (A = X);
    },
    stop: () => {
      (m = !0), E !== "idle" && ((E = "idle"), u && u(), N());
    },
    cancel: () => {
      M !== null && de(M), N();
    },
    complete: () => {
      E = "finished";
    },
    sample: (z) => ((R = 0), de(z)),
  };
  return W;
}
function hj(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const pj = hj(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  mj = new Set(["opacity", "clipPath", "filter", "transform"]),
  nl = 10,
  gj = 2e4,
  vj = (e, t) => t.type === "spring" || e === "backgroundColor" || !zx(t.ease);
function yj(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      pj() &&
      mj.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l,
    u = !1;
  const c = () => {
    l = new Promise((w) => {
      s = w;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: m } = o;
  if (vj(t, o)) {
    const w = pu({ ...o, repeat: 0, delay: 0 });
    let S = { done: !1, value: d[0] };
    const C = [];
    let _ = 0;
    for (; !S.done && _ < gj; ) (S = w.sample(_)), C.push(S.value), (_ += nl);
    (m = void 0), (d = C), (f = _ - nl), (h = "linear");
  }
  const v = xA(e.owner.current, t, d, { ...o, duration: f, ease: h, times: m }),
    x = () => {
      (u = !1), v.cancel();
    },
    g = () => {
      (u = !0), _e.update(x), s(), c();
    };
  return (
    (v.onfinish = () => {
      u || (e.set(SA(d, o)), r && r(), g());
    }),
    {
      then(w, S) {
        return l.then(w, S);
      },
      attachTimeline(w) {
        return (v.timeline = w), (v.onfinish = null), Be;
      },
      get time() {
        return nr(v.currentTime || 0);
      },
      set time(w) {
        v.currentTime = yo(w);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(w) {
        v.playbackRate = w;
      },
      get duration() {
        return nr(f);
      },
      play: () => {
        a || (v.play(), lr(x));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((a = !0), v.playState === "idle")) return;
        const { currentTime: w } = v;
        if (w) {
          const S = pu({ ...o, autoplay: !1 });
          e.setWithVelocity(S.sample(w - nl).value, S.sample(w).value, nl);
        }
        g();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: g,
    }
  );
}
function wj({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Be,
      pause: Be,
      stop: Be,
      then: (i) => (i(), Promise.resolve()),
      cancel: Be,
      complete: Be,
    }
  );
  return t
    ? pu({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const xj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Sj = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  bj = { type: "keyframes", duration: 0.8 },
  kj = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ej = (e, { keyframes: t }) =>
    t.length > 2
      ? bj
      : Mo.has(e)
      ? e.startsWith("scale")
        ? Sj(t[1])
        : xj
      : kj,
  Yf = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            ($r.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Cj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(jp) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Cj.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Pj = /([a-z-]*)\(.*?\)/g,
  Xf = {
    ...$r,
    getAnimatableNone: (e) => {
      const t = e.match(Pj);
      return t ? t.map(Tj).join(" ") : e;
    },
  },
  Oj = {
    ...Px,
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: Xf,
    WebkitFilter: Xf,
  },
  zp = (e) => Oj[e];
function lS(e, t) {
  let n = zp(e);
  return (
    n !== Xf && (n = $r), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const uS = (e) => /^0[^.\s]+$/.test(e);
function _j(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || uS(e);
}
function Aj(e, t, n, r) {
  const o = Yf(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      _j(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = lS(t, s);
    }
  return i;
}
function jj({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Up(e, t) {
  return e[t] || e.default || e;
}
const Wp =
  (e, t, n, r = {}) =>
  (o) => {
    const i = Up(r, e) || {},
      a = i.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - yo(a);
    const l = Aj(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      d = Yf(e, u),
      f = Yf(e, c);
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -s,
      onUpdate: (m) => {
        t.set(m), i.onUpdate && i.onUpdate(m);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (jj(i) || (h = { ...h, ...Ej(e, h) }),
      h.duration && (h.duration = yo(h.duration)),
      h.repeatDelay && (h.repeatDelay = yo(h.repeatDelay)),
      !d || !f || wA.current || i.type === !1 || wx.skipAnimations)
    )
      return wj(h);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const m = yj(t, e, h);
      if (m) return m;
    }
    return pu(h);
  };
function mu(e) {
  return !!(Pt(e) && e.add);
}
const cS = (e) => /^\-?\d*\.?\d+$/.test(e);
function Kp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Gp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kp(this.subscriptions, t), () => Zp(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const i1 = 30,
  Mj = (e) => !isNaN(parseFloat(e));
class Rj {
  constructor(t, n = {}) {
    (this.version = "11.0.8"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = wo.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = Mj(this.current)),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = wo.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Gp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            _e.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = wo.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > i1
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, i1);
    return iS(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ci(e, t) {
  return new Rj(e, t);
}
const dS = (e) => (t) => t.test(e),
  Ij = { test: (e) => e === "auto", parse: (e) => e },
  fS = [Fi, G, Ln, vr, L_, D_, Ij],
  ra = (e) => fS.find(dS(e)),
  Nj = [...fS, at, $r],
  Dj = (e) => Nj.find(dS(e));
function Lj(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ci(n));
}
function Fj(e, t) {
  const n = ac(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = J_(i[a]);
    Lj(e, a, s);
  }
}
function Vj(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (cS(c) || uS(c))
            ? (c = parseFloat(c))
            : !Dj(c) && $r.test(u) && (c = lS(l, u)),
          e.addValue(l, Ci(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function $j(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Bj(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = $j(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function Hj({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function zj(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function hS(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d];
    if (!f || h === void 0 || (c && Hj(c, d))) continue;
    const m = { delay: n, elapsed: 0, ...Up(i || {}, d) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[yx];
      if (g) {
        const p = window.HandoffAppearAnimations(g, d, f, _e);
        p !== null && ((m.elapsed = p), (m.isHandoff = !0));
      }
    }
    let v = !m.isHandoff && !zj(f, h);
    if (
      (m.type === "spring" && (f.getVelocity() || m.velocity) && (v = !1),
      f.animation && (v = !1),
      v)
    )
      continue;
    f.start(Wp(d, f, h, e.shouldReduceMotion && Mo.has(d) ? { type: !1 } : m));
    const x = f.animation;
    mu(l) && (l.add(d), x.then(() => l.remove(d))), u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && Fj(e, a);
      }),
    u
  );
}
function qf(e, t, n = {}) {
  const r = ac(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(hS(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return Uj(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function Uj(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Wj)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            qf(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function Wj(e, t) {
  return e.sortNodePosition(t);
}
function Kj(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => qf(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = qf(e, t, n);
  else {
    const o = typeof t == "function" ? ac(e, t, n.custom) : t;
    r = Promise.all(hS(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Zj = [...Op].reverse(),
  Gj = Op.length;
function Yj(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Kj(e, n, r)));
}
function Xj(e) {
  let t = Yj(e);
  const n = Jj();
  let r = !0;
  const o = (l, u) => {
    const c = ac(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let m = {},
      v = 1 / 0;
    for (let g = 0; g < Gj; g++) {
      const p = Zj[g],
        w = n[p],
        S = c[p] !== void 0 ? c[p] : d[p],
        C = Ja(S),
        _ = p === u ? w.isActive : null;
      _ === !1 && (v = g);
      let E = S === d[p] && S !== c[p] && C;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (w.protectedKeys = { ...m }),
        (!w.isActive && _ === null) ||
          (!S && !w.prevProp) ||
          rc(S) ||
          typeof S == "boolean")
      )
        continue;
      let R =
          qj(w.prevProp, S) ||
          (p === u && w.isActive && !E && C) ||
          (g > v && C),
        M = !1;
      const B = Array.isArray(S) ? S : [S];
      let K = B.reduce(o, {});
      _ === !1 && (K = {});
      const { prevResolvedValues: Y = {} } = w,
        X = { ...Y, ...K },
        de = (U) => {
          (R = !0),
            h.has(U) && ((M = !0), h.delete(U)),
            (w.needsAnimating[U] = !0);
        };
      for (const U in X) {
        const N = K[U],
          D = Y[U];
        if (m.hasOwnProperty(U)) continue;
        let $ = !1;
        du(N) && du(D) ? ($ = !Bx(N, D)) : ($ = N !== D),
          $
            ? N !== void 0
              ? de(U)
              : h.add(U)
            : N !== void 0 && h.has(U)
            ? de(U)
            : (w.protectedKeys[U] = !0);
      }
      (w.prevProp = S),
        (w.prevResolvedValues = K),
        w.isActive && (m = { ...m, ...K }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!E || M) &&
          f.push(
            ...B.map((U) => ({ animation: U, options: { type: p, ...l } }))
          );
    }
    if (h.size) {
      const g = {};
      h.forEach((p) => {
        const w = e.getBaseTarget(p);
        w !== void 0 && (g[p] = w);
      }),
        f.push({ animation: g });
    }
    let x = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var m;
        return (m = h.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = a(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function qj(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Bx(t, e) : !1;
}
function Qr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Jj() {
  return {
    animate: Qr(!0),
    whileInView: Qr(),
    whileHover: Qr(),
    whileTap: Qr(),
    whileDrag: Qr(),
    whileFocus: Qr(),
    exit: Qr(),
  };
}
class Qj extends Wr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Xj(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), rc(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let eM = 0;
class tM extends Wr {
  constructor() {
    super(...arguments), (this.id = eM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const nM = { animation: { Feature: Qj }, exit: { Feature: tM } },
  a1 = (e, t) => Math.abs(e - t);
function rM(e, t) {
  const n = a1(e.x, t.x),
    r = a1(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class pS {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = xd(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = rM(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !h) return;
        const { point: m } = d,
          { timestamp: v } = qe;
        this.history.push({ ...m, timestamp: v });
        const { onStart: x, onMove: g } = this.handlers;
        f ||
          (x && x(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = wd(f, this.transformPagePoint)),
          _e.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: h, onSessionEnd: m, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = xd(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : wd(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, x), m && m(d, x);
      }),
      !Dx(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const a = ic(t),
      s = wd(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = qe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, xd(s, this.history)),
      (this.removeListeners = tr(
        er(this.contextWindow, "pointermove", this.handlePointerMove),
        er(this.contextWindow, "pointerup", this.handlePointerUp),
        er(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), lr(this.updatePoint);
  }
}
function wd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function s1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function xd({ point: e }, t) {
  return {
    point: e,
    delta: s1(e, mS(t)),
    offset: s1(e, oM(t)),
    velocity: iM(t, 0.1),
  };
}
function oM(e) {
  return e[0];
}
function mS(e) {
  return e[e.length - 1];
}
function iM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = mS(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > yo(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = nr(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Lt(e) {
  return e.max - e.min;
}
function Jf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function l1(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Oe(t.min, t.max, e.origin)),
    (e.scale = Lt(n) / Lt(t)),
    (Jf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Oe(n.min, n.max, e.origin) - e.originPoint),
    (Jf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ta(e, t, n, r) {
  l1(e.x, t.x, n.x, r ? r.originX : void 0),
    l1(e.y, t.y, n.y, r ? r.originY : void 0);
}
function u1(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Lt(t));
}
function aM(e, t, n) {
  u1(e.x, t.x, n.x), u1(e.y, t.y, n.y);
}
function c1(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Lt(t));
}
function Pa(e, t, n) {
  c1(e.x, t.x, n.x), c1(e.y, t.y, n.y);
}
function sM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Oe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Oe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function d1(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function lM(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: d1(e.x, n, o), y: d1(e.y, t, r) };
}
function f1(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function uM(e, t) {
  return { x: f1(e.x, t.x), y: f1(e.y, t.y) };
}
function cM(e, t) {
  let n = 0.5;
  const r = Lt(e),
    o = Lt(t);
  return (
    o > r
      ? (n = es(t.min, t.max - r, e.min))
      : r > o && (n = es(e.min, e.max - o, t.min)),
    Vr(0, 1, n)
  );
}
function dM(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Qf = 0.35;
function fM(e = Qf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Qf),
    { x: h1(e, "left", "right"), y: h1(e, "top", "bottom") }
  );
}
function h1(e, t, n) {
  return { min: p1(e, t), max: p1(e, n) };
}
function p1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const m1 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  oi = () => ({ x: m1(), y: m1() }),
  g1 = () => ({ min: 0, max: 0 }),
  Le = () => ({ x: g1(), y: g1() });
function qt(e) {
  return [e("x"), e("y")];
}
function gS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function hM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function pM(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Sd(e) {
  return e === void 0 || e === 1;
}
function eh({ scale: e, scaleX: t, scaleY: n }) {
  return !Sd(e) || !Sd(t) || !Sd(n);
}
function ro(e) {
  return eh(e) || vS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function vS(e) {
  return v1(e.x) || v1(e.y);
}
function v1(e) {
  return e && e !== "0%";
}
function gu(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function y1(e, t, n, r, o) {
  return o !== void 0 && (e = gu(e, o, r)), gu(e, n, r) + t;
}
function th(e, t = 0, n = 1, r, o) {
  (e.min = y1(e.min, t, n, r, o)), (e.max = y1(e.max, t, n, r, o));
}
function yS(e, { x: t, y: n }) {
  th(e.x, t.translate, t.scale, t.originPoint),
    th(e.y, n.translate, n.scale, n.originPoint);
}
function mM(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ii(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), yS(e, a)),
      r && ro(i.latestValues) && ii(e, i.latestValues));
  }
  (t.x = w1(t.x)), (t.y = w1(t.y));
}
function w1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function br(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function x1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = Oe(e.min, e.max, i);
  th(e, t[n], t[r], a, t.scale);
}
const gM = ["x", "scaleX", "originX"],
  vM = ["y", "scaleY", "originY"];
function ii(e, t) {
  x1(e.x, t, gM), x1(e.y, t, vM);
}
function wS(e, t) {
  return gS(pM(e.getBoundingClientRect(), t));
}
function yM(e, t, n) {
  const r = wS(e, n),
    { scroll: o } = t;
  return o && (br(r.x, o.offset.x), br(r.y, o.offset.y)), r;
}
const xS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  wM = new WeakMap();
class xM {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Le()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ic(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: h, onDragStart: m } = this.getProps();
        if (
          f &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Fx(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          qt((x) => {
            let g = this.getAxisMotionValue(x).get() || 0;
            if (Ln.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const w = p.layout.layoutBox[x];
                w && (g = Lt(w) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[x] = g;
          }),
          m && _e.update(() => m(c, d), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: m,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: x } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = SM(x)),
            this.currentDirection !== null && m && m(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, x),
          this.updateAxis("y", d.point, x),
          this.visualElement.render(),
          v && v(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        qt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new pS(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: xS(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && _e.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !rl(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = sM(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && ni(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = lM(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = fM(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        qt((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = dM(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ni(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = yM(r, o.root, this.visualElement.getTransformPagePoint());
    let a = uM(o.layout.layoutBox, i);
    if (n) {
      const s = n(hM(a));
      (this.hasMutatedConstraints = !!s), s && (a = gS(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = qt((c) => {
        if (!rl(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Wp(t, r, 0, n));
  }
  stopAnimation() {
    qt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    qt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    qt((n) => {
      const { drag: r } = this.getProps();
      if (!rl(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Oe(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ni(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    qt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = cM({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      qt((a) => {
        if (!rl(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(Oe(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    wM.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = er(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        ni(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = Jn(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (qt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = Qf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function rl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function SM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class bM extends Wr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Be),
      (this.removeListeners = Be),
      (this.controls = new xM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Be);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const S1 = (e) => (t, n) => {
  e && _e.update(() => e(t, n));
};
class kM extends Wr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Be);
  }
  onPointerDown(t) {
    this.session = new pS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xS(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: S1(t),
      onStart: S1(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && _e.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = er(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function EM() {
  const e = k.useContext(Cp);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = k.useId();
  return k.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Cl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function b1(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const oa = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (G.test(e)) e = parseFloat(e);
        else return e;
      const n = b1(e, t.target.x),
        r = b1(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  CM = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = $r.parse(e);
      if (o.length > 5) return r;
      const i = $r.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = Oe(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class TM extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    P_(PM),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Cl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              _e.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Pp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function SS(e) {
  const [t, n] = EM(),
    r = k.useContext(bx);
  return T.createElement(TM, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(kx),
    isPresent: t,
    safeToRemove: n,
  });
}
const PM = {
    borderRadius: {
      ...oa,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: oa,
    borderTopRightRadius: oa,
    borderBottomLeftRadius: oa,
    borderBottomRightRadius: oa,
    boxShadow: CM,
  },
  bS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  OM = bS.length,
  k1 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  E1 = (e) => typeof e == "number" || G.test(e);
function _M(e, t, n, r, o, i) {
  o
    ? ((e.opacity = Oe(0, n.opacity !== void 0 ? n.opacity : 1, AM(r))),
      (e.opacityExit = Oe(t.opacity !== void 0 ? t.opacity : 1, 0, jM(r))))
    : i &&
      (e.opacity = Oe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < OM; a++) {
    const s = `border${bS[a]}Radius`;
    let l = C1(t, s),
      u = C1(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || E1(l) === E1(u)
        ? ((e[s] = Math.max(Oe(k1(l), k1(u), r), 0)),
          (Ln.test(u) || Ln.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Oe(t.rotate || 0, n.rotate || 0, r));
}
function C1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const AM = kS(0, 0.5, Xx),
  jM = kS(0.5, 0.95, Be);
function kS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(es(e, t, r)));
}
function T1(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Yt(e, t) {
  T1(e.x, t.x), T1(e.y, t.y);
}
function P1(e, t, n, r, o) {
  return (
    (e -= t), (e = gu(e, 1 / n, r)), o !== void 0 && (e = gu(e, 1 / o, r)), e
  );
}
function MM(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (Ln.test(t) &&
      ((t = parseFloat(t)), (t = Oe(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = Oe(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = P1(e.min, t, n, s, o)),
    (e.max = P1(e.max, t, n, s, o));
}
function O1(e, t, [n, r, o], i, a) {
  MM(e, t[n], t[r], t[o], t.scale, i, a);
}
const RM = ["x", "scaleX", "originX"],
  IM = ["y", "scaleY", "originY"];
function _1(e, t, n, r) {
  O1(e.x, t, RM, n ? n.x : void 0, r ? r.x : void 0),
    O1(e.y, t, IM, n ? n.y : void 0, r ? r.y : void 0);
}
function A1(e) {
  return e.translate === 0 && e.scale === 1;
}
function ES(e) {
  return A1(e.x) && A1(e.y);
}
function NM(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function CS(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function j1(e) {
  return Lt(e.x) / Lt(e.y);
}
class DM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Zp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function M1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const LM = (e, t) => e.depth - t.depth;
class FM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Kp(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Zp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(LM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function VM(e, t) {
  const n = wo.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (lr(r), e(i - t));
    };
  return _e.read(r, !0), () => lr(r);
}
function $M(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function BM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function HM(e, t, n) {
  const r = Pt(e) ? e : Ci(e);
  return r.start(Wp("", r, t, n)), r.animation;
}
const R1 = ["", "X", "Y", "Z"],
  zM = { visibility: "hidden" },
  I1 = 1e3;
let UM = 0;
const oo = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function TS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = UM++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (oo.totalNodes =
              oo.resolvedTargetDeltas =
              oo.recalculatedProjection =
                0),
            this.nodes.forEach(ZM),
            this.nodes.forEach(JM),
            this.nodes.forEach(QM),
            this.nodes.forEach(GM),
            $M(oo);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FM());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Gp()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = BM(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = VM(f, 250)),
            Cl.hasAnimatedSinceResize &&
              ((Cl.hasAnimatedSinceResize = !1), this.nodes.forEach(D1));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || oR,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: g } =
                  c.getProps(),
                p = !this.targetLayout || !CS(this.targetLayout, m) || h,
                w = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                w ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, w);
                const S = { ...Up(v, "layout"), onPlay: x, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                f || D1(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        lr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(eR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(N1);
        return;
      }
      this.isUpdating || this.nodes.forEach(XM),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(qM),
        this.nodes.forEach(WM),
        this.nodes.forEach(KM),
        this.clearAllSnapshots();
      const s = wo.now();
      (qe.delta = Vr(0, 1e3 / 60, s - qe.timestamp)),
        (qe.timestamp = s),
        (qe.isProcessing = !0),
        fd.update.process(qe),
        fd.preRender.process(qe),
        fd.render.process(qe),
        (qe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Pp.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YM), this.sharedNodes.forEach(tR);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _e.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !ES(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || ro(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        iR(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return Le();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (br(s.x, l.offset.x), br(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Le();
      Yt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Yt(s, a);
            const { scroll: f } = this.root;
            f && (br(s.x, -f.offset.x), br(s.y, -f.offset.y));
          }
          br(s.x, c.offset.x), br(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Le();
      Yt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ii(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ro(c.latestValues) && ii(l, c.latestValues);
      }
      return ro(this.latestValues) && ii(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Le();
      Yt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ro(u.latestValues)) continue;
        eh(u.latestValues) && u.updateSnapshot();
        const c = Le(),
          d = u.measurePageBox();
        Yt(c, d),
          _1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ro(this.latestValues) && _1(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== qe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = qe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Le()),
              (this.relativeTargetOrigin = Le()),
              Pa(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Yt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Le()), (this.targetWithTransforms = Le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                aM(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Yt(this.target, this.layout.layoutBox),
                yS(this.target, this.targetDelta))
              : Yt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Le()),
                (this.relativeTargetOrigin = Le()),
                Pa(this.relativeTargetOrigin, this.target, h.target),
                Yt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          oo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          eh(this.parent.latestValues) ||
          vS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === qe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Yt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      mM(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Le()));
      const { target: m } = s;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = oi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = oi()),
        (this.projectionDeltaWithTransform = oi()));
      const v = this.projectionTransform;
      Ta(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = M1(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        oo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = oi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = Le(),
        h = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        v = h !== m,
        x = this.getStack(),
        g = !x || x.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(rR));
      this.animationProgress = 0;
      let w;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        L1(d.x, a.x, C),
          L1(d.y, a.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nR(this.relativeTarget, this.relativeTargetOrigin, f, C),
            w && NM(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = Le()),
            Yt(w, this.relativeTarget)),
          v &&
            ((this.animationValues = c), _M(c, u, this.latestValues, C, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (lr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _e.update(() => {
          (Cl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = HM(0, I1, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(I1),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          PS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Le();
          const d = Lt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = Lt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        Yt(s, l),
          ii(s, c),
          Ta(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new DM()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < R1.length; c++) {
        const d = "rotate" + R1[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return zM;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = kl(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = kl(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !ro(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = M1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in lu) {
        if (f[v] === void 0) continue;
        const { correct: x, applyTo: g } = lu[v],
          p = u.transform === "none" ? f[v] : x(f[v], d);
        if (g) {
          const w = g.length;
          for (let S = 0; S < w; S++) u[g[S]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? kl(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(N1),
        this.root.sharedNodes.clear();
    }
  };
}
function WM(e) {
  e.updateLayout();
}
function KM(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === "size"
      ? qt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = Lt(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : PS(i, n.layoutBox, r) &&
        qt((d) => {
          const f = a ? n.measuredBox[d] : n.layoutBox[d],
            h = Lt(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = oi();
    Ta(s, r, n.layoutBox);
    const l = oi();
    a ? Ta(l, e.applyTransform(o, !0), n.measuredBox) : Ta(l, r, n.layoutBox);
    const u = !ES(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = Le();
          Pa(m, n.layoutBox, f.layoutBox);
          const v = Le();
          Pa(v, r, h.layoutBox),
            CS(m, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ZM(e) {
  oo.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function GM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YM(e) {
  e.clearSnapshot();
}
function N1(e) {
  e.clearMeasurements();
}
function XM(e) {
  e.isLayoutDirty = !1;
}
function qM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function D1(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function JM(e) {
  e.resolveTargetDelta();
}
function QM(e) {
  e.calcProjection();
}
function eR(e) {
  e.resetRotation();
}
function tR(e) {
  e.removeLeadSnapshot();
}
function L1(e, t, n) {
  (e.translate = Oe(t.translate, 0, n)),
    (e.scale = Oe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function F1(e, t, n, r) {
  (e.min = Oe(t.min, n.min, r)), (e.max = Oe(t.max, n.max, r));
}
function nR(e, t, n, r) {
  F1(e.x, t.x, n.x, r), F1(e.y, t.y, n.y, r);
}
function rR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const oR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  V1 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  $1 = V1("applewebkit/") && !V1("chrome/") ? Math.round : Be;
function B1(e) {
  (e.min = $1(e.min)), (e.max = $1(e.max));
}
function iR(e) {
  B1(e.x), B1(e.y);
}
function PS(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Jf(j1(t), j1(n), 0.2))
  );
}
const aR = TS({
    attachResizeListener: (e, t) => Jn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  bd = { current: void 0 },
  OS = TS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bd.current) {
        const e = new aR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bd.current = e);
      }
      return bd.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  sR = {
    pan: { Feature: kM },
    drag: { Feature: bM, ProjectionNode: OS, MeasureLayout: SS },
  },
  lR = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function uR(e) {
  const t = lR.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function nh(e, t, n = 1) {
  const [r, o] = uR(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return cS(a) ? parseFloat(a) : a;
  } else return uu(o) ? nh(o, t, n + 1) : o;
}
function cR(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!uu(i)) return;
      const a = nh(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!uu(i)) continue;
    const a = nh(i, r);
    a && ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const dR = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  _S = (e) => dR.has(e),
  fR = (e) => Object.keys(e).some(_S),
  H1 = (e) => e === Fi || e === G,
  z1 = (e, t) => parseFloat(e.split(", ")[t]),
  U1 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return z1(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? z1(i[1], e) : 0;
      }
    },
  hR = new Set(["x", "y", "z"]),
  pR = hs.filter((e) => !hR.has(e));
function mR(e) {
  const t = [];
  return (
    pR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Ti = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: U1(4, 13),
  y: U1(5, 14),
};
Ti.translateX = Ti.x;
Ti.translateY = Ti.y;
const gR = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = Ti[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = Ti[u](l, i));
      }),
      e
    );
  },
  vR = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(_S);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = ra(c);
        const f = t[l];
        let h;
        if (du(f)) {
          const m = f.length,
            v = f[0] === null ? 1 : 0;
          (c = f[v]), (d = ra(c));
          for (let x = v; x < m && f[x] !== null; x++)
            h ? Fp(ra(f[x]) === h) : (h = ra(f[x]));
        } else h = ra(f);
        if (d !== h)
          if (H1(d) && H1(h)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === G && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = mR(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = gR(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        nc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function yR(e, t, n, r) {
  return fR(t) ? vR(e, t, n, r) : { target: t, transitionEnd: r };
}
const wR = (e, t, n, r) => {
    const o = cR(e, t, r);
    return (t = o.target), (r = o.transitionEnd), yR(e, t, n, r);
  },
  rh = { current: null },
  AS = { current: !1 };
function xR() {
  if (((AS.current = !0), !!nc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rh.current = e.matches);
      e.addListener(t), t();
    } else rh.current = !1;
}
function SR(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (Pt(i)) e.addValue(o, i), mu(r) && r.add(o);
    else if (Pt(a)) e.addValue(o, Ci(i, { owner: e })), mu(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ci(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const W1 = new WeakMap(),
  jS = Object.keys(Qa),
  bR = jS.length,
  K1 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  kR = _p.length;
class ER {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => _e.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = oc(n)),
      (this.isVariantNode = Sx(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Pt(f) && (f.set(s[d], !1), mu(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      W1.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      AS.current || xR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : rh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    W1.delete(this.current),
      this.projection && this.projection.unmount(),
      lr(this.notifyUpdate),
      lr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Mo.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && _e.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < bR; l++) {
      const u = jS[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Qa[u];
      f && (a = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (s = h));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && ni(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Le();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < K1.length; r++) {
      const o = K1[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = SR(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < kR; r++) {
      const o = _p[r],
        i = this.props[o];
      (Ja(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ci(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = Lp(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Pt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Gp()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class MS extends ER {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    o
  ) {
    const i = Bj(r, t || {}, this);
    if (o) {
      Vj(this, r, i);
      const a = wR(this, r, i, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function CR(e) {
  return window.getComputedStyle(e);
}
class TR extends MS {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Mo.has(n)) {
      const r = zp(n);
      return (r && r.default) || 0;
    } else {
      const r = CR(t),
        o = (Tx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wS(t, n);
  }
  build(t, n, r, o) {
    Mp(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Dp(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Pt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    jx(t, n, r, o);
  }
}
class PR extends MS {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Mo.has(n)) {
      const r = zp(n);
      return (r && r.default) || 0;
    }
    return (n = Mx.has(n) ? n : Tp(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Le();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ix(t, n);
  }
  build(t, n, r, o) {
    Ip(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Rx(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Np(t.tagName)), super.mount(t);
  }
}
const OR = (e, t) =>
    Ap(e)
      ? new PR(t, { enableHardwareAcceleration: !1 })
      : new TR(t, { enableHardwareAcceleration: !0 }),
  _R = { layout: { ProjectionNode: OS, MeasureLayout: SS } },
  AR = { ...nM, ...gA, ...sR, ..._R },
  jR = C_((e, t) => rA(e, t, AR, OR));
var Z1 = {
    path: y.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        y.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        y.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        y.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  sc = Ot((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = sn("chakra-icon", s),
      d = mx("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      m = r ?? Z1.viewBox;
    if (n && typeof n != "string") return y.jsx(je.svg, { as: n, ...h, ...u });
    const v = a ?? Z1.path;
    return y.jsx(je.svg, {
      verticalAlign: "middle",
      viewBox: m,
      ...h,
      ...u,
      children: v,
    });
  });
sc.displayName = "Icon";
function MR(e) {
  return y.jsx(sc, {
    viewBox: "0 0 24 24",
    ...e,
    children: y.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function RR(e) {
  return y.jsx(sc, {
    viewBox: "0 0 24 24",
    ...e,
    children: y.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function G1(e) {
  return y.jsx(sc, {
    viewBox: "0 0 24 24",
    ...e,
    children: y.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var IR = Ju({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  RS = Ot((e, t) => {
    const n = mx("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = Li(e),
      u = sn("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${IR} ${i} linear infinite`,
        ...n,
      };
    return y.jsx(je.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && y.jsx(je.span, { srOnly: !0, children: r }),
    });
  });
RS.displayName = "Spinner";
var [NR, dF] = Ur({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [DR, fF] = Ur({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  LR = {
    info: { icon: RR, colorScheme: "blue" },
    warning: { icon: G1, colorScheme: "orange" },
    success: { icon: MR, colorScheme: "green" },
    error: { icon: G1, colorScheme: "red" },
    loading: { icon: RS, colorScheme: "blue" },
  };
function FR(e) {
  return LR[e].colorScheme;
}
var lc = Ot(function (t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Li(t),
    s = (r = t.colorScheme) != null ? r : FR(o),
    l = fs("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return y.jsx(NR, {
    value: { status: o },
    children: y.jsx(DR, {
      value: l,
      children: y.jsx(je.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: n,
        ...a,
        className: sn("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
lc.displayName = "Alert";
var VR = Object.defineProperty,
  $R = (e, t, n) =>
    t in e
      ? VR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ie = (e, t, n) => ($R(e, typeof t != "symbol" ? t + "" : t, n), n);
function Y1(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (
      r & Node.DOCUMENT_POSITION_FOLLOWING ||
      r & Node.DOCUMENT_POSITION_CONTAINED_BY
    )
      return -1;
    if (
      r & Node.DOCUMENT_POSITION_PRECEDING ||
      r & Node.DOCUMENT_POSITION_CONTAINS
    )
      return 1;
    if (
      r & Node.DOCUMENT_POSITION_DISCONNECTED ||
      r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    )
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var BR = (e) =>
  typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function X1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function q1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var oh = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
  vu = (e) => e,
  HR = class {
    constructor() {
      Ie(this, "descendants", new Map()),
        Ie(this, "register", (e) => {
          if (e != null)
            return BR(e)
              ? this.registerNode(e)
              : (t) => {
                  this.registerNode(t, e);
                };
        }),
        Ie(this, "unregister", (e) => {
          this.descendants.delete(e);
          const t = Y1(Array.from(this.descendants.keys()));
          this.assignIndex(t);
        }),
        Ie(this, "destroy", () => {
          this.descendants.clear();
        }),
        Ie(this, "assignIndex", (e) => {
          this.descendants.forEach((t) => {
            const n = e.indexOf(t.node);
            (t.index = n), (t.node.dataset.index = t.index.toString());
          });
        }),
        Ie(this, "count", () => this.descendants.size),
        Ie(this, "enabledCount", () => this.enabledValues().length),
        Ie(this, "values", () =>
          Array.from(this.descendants.values()).sort(
            (t, n) => t.index - n.index
          )
        ),
        Ie(this, "enabledValues", () =>
          this.values().filter((e) => !e.disabled)
        ),
        Ie(this, "item", (e) => {
          if (this.count() !== 0) return this.values()[e];
        }),
        Ie(this, "enabledItem", (e) => {
          if (this.enabledCount() !== 0) return this.enabledValues()[e];
        }),
        Ie(this, "first", () => this.item(0)),
        Ie(this, "firstEnabled", () => this.enabledItem(0)),
        Ie(this, "last", () => this.item(this.descendants.size - 1)),
        Ie(this, "lastEnabled", () => {
          const e = this.enabledValues().length - 1;
          return this.enabledItem(e);
        }),
        Ie(this, "indexOf", (e) => {
          var t, n;
          return e &&
            (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) !=
              null
            ? n
            : -1;
        }),
        Ie(this, "enabledIndexOf", (e) =>
          e == null
            ? -1
            : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
        ),
        Ie(this, "next", (e, t = !0) => {
          const n = X1(e, this.count(), t);
          return this.item(n);
        }),
        Ie(this, "nextEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = X1(r, this.enabledCount(), t);
          return this.enabledItem(o);
        }),
        Ie(this, "prev", (e, t = !0) => {
          const n = q1(e, this.count() - 1, t);
          return this.item(n);
        }),
        Ie(this, "prevEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = q1(r, this.enabledCount() - 1, t);
          return this.enabledItem(o);
        }),
        Ie(this, "registerNode", (e, t) => {
          if (!e || this.descendants.has(e)) return;
          const n = Array.from(this.descendants.keys()).concat(e),
            r = Y1(n);
          t != null && t.disabled && (t.disabled = !!t.disabled);
          const o = { node: e, index: -1, ...t };
          this.descendants.set(e, o), this.assignIndex(r);
        });
    }
  };
function zR(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function xn(...e) {
  return (t) => {
    e.forEach((n) => {
      zR(n, t);
    });
  };
}
function UR() {
  const e = k.useRef(new HR());
  return oh(() => () => e.current.destroy()), e.current;
}
var [WR, IS] = Ur({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider",
});
function KR(e) {
  const t = IS(),
    [n, r] = k.useState(-1),
    o = k.useRef(null);
  oh(
    () => () => {
      o.current && t.unregister(o.current);
    },
    []
  ),
    oh(() => {
      if (!o.current) return;
      const a = Number(o.current.dataset.index);
      n != a && !Number.isNaN(a) && r(a);
    });
  const i = vu(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: xn(i, o),
  };
}
function ZR() {
  return [vu(WR), () => vu(IS()), () => UR(), (o) => KR(o)];
}
var [hF, GR] = Ur({ name: "CheckboxGroupContext", strict: !1 });
function YR(e) {
  const [t, n] = k.useState(e),
    [r, o] = k.useState(!1);
  return e !== t && (o(!0), n(e)), r;
}
function XR(e) {
  return y.jsx(je.svg, {
    width: "1.2em",
    viewBox: "0 0 12 10",
    style: {
      fill: "none",
      strokeWidth: 2,
      stroke: "currentColor",
      strokeDasharray: 16,
    },
    ...e,
    children: y.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" }),
  });
}
function qR(e) {
  return y.jsx(je.svg, {
    width: "1.2em",
    viewBox: "0 0 24 24",
    style: { stroke: "currentColor", strokeWidth: 4 },
    ...e,
    children: y.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  });
}
function JR(e) {
  const { isIndeterminate: t, isChecked: n, ...r } = e,
    o = t ? qR : XR;
  return n || t
    ? y.jsx(je.div, {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        },
        children: y.jsx(o, { ...r }),
      })
    : null;
}
var [QR, e3] = Ur({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [t3, NS] = Ur({ strict: !1, name: "FormControlContext" });
function n3(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = k.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, h] = k.useState(!1),
    [m, v] = k.useState(!1),
    [x, g] = k.useState(!1),
    p = k.useCallback(
      (E = {}, A = null) => ({
        id: d,
        ...E,
        ref: xn(A, (R) => {
          R && v(!0);
        }),
      }),
      [d]
    ),
    w = k.useCallback(
      (E = {}, A = null) => ({
        ...E,
        ref: A,
        "data-focus": ne(x),
        "data-disabled": ne(o),
        "data-invalid": ne(r),
        "data-readonly": ne(i),
        id: E.id !== void 0 ? E.id : u,
        htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l,
      }),
      [l, o, x, r, i, u]
    ),
    S = k.useCallback(
      (E = {}, A = null) => ({
        id: c,
        ...E,
        ref: xn(A, (R) => {
          R && h(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    C = k.useCallback(
      (E = {}, A = null) => ({
        ...E,
        ...a,
        ref: A,
        role: "group",
        "data-focus": ne(x),
        "data-disabled": ne(o),
        "data-invalid": ne(r),
        "data-readonly": ne(i),
      }),
      [a, o, x, r, i]
    ),
    _ = k.useCallback(
      (E = {}, A = null) => ({
        ...E,
        ref: A,
        role: "presentation",
        "aria-hidden": !0,
        children: E.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!x,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: m,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: p,
    getErrorMessageProps: S,
    getRootProps: C,
    getLabelProps: w,
    getRequiredIndicatorProps: _,
  };
}
var r3 = Ot(function (t, n) {
  const r = fs("Form", t),
    o = Li(t),
    { getRootProps: i, htmlProps: a, ...s } = n3(o),
    l = sn("chakra-form-control", t.className);
  return y.jsx(t3, {
    value: s,
    children: y.jsx(QR, {
      value: r,
      children: y.jsx(je.div, {
        ...i({}, n),
        className: l,
        __css: r.container,
      }),
    }),
  });
});
r3.displayName = "FormControl";
var o3 = Ot(function (t, n) {
  const r = NS(),
    o = e3(),
    i = sn("chakra-form__helper-text", t.className);
  return y.jsx(je.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
o3.displayName = "FormHelperText";
function i3(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = DS(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": ud(n),
    "aria-required": ud(o),
    "aria-readonly": ud(r),
  };
}
function DS(e) {
  var t, n, r;
  const o = NS(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: h,
      onBlur: m,
      ...v
    } = e,
    x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      x.push(o.feedbackId),
    o != null && o.hasHelpText && x.push(o.helpTextId),
    {
      ...v,
      "aria-describedby": x.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: it(o == null ? void 0 : o.onFocus, h),
      onBlur: it(o == null ? void 0 : o.onBlur, m),
    }
  );
}
var a3 = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  s3 = () => typeof document < "u",
  J1 = !1,
  vs = null,
  To = !1,
  ih = !1,
  ah = new Set();
function Yp(e, t) {
  ah.forEach((n) => n(e, t));
}
var l3 =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function u3(e) {
  return !(
    e.metaKey ||
    (!l3 && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function Q1(e) {
  (To = !0), u3(e) && ((vs = "keyboard"), Yp("keyboard", e));
}
function Vo(e) {
  if (((vs = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    To = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {}
    if (n) return;
    Yp("pointer", e);
  }
}
function c3(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function d3(e) {
  c3(e) && ((To = !0), (vs = "virtual"));
}
function f3(e) {
  e.target === window ||
    e.target === document ||
    (!To && !ih && ((vs = "virtual"), Yp("virtual", e)), (To = !1), (ih = !1));
}
function h3() {
  (To = !1), (ih = !0);
}
function ev() {
  return vs !== "pointer";
}
function p3() {
  if (!s3() || J1) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (To = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", Q1, !0),
    document.addEventListener("keyup", Q1, !0),
    document.addEventListener("click", d3, !0),
    window.addEventListener("focus", f3, !0),
    window.addEventListener("blur", h3, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", Vo, !0),
        document.addEventListener("pointermove", Vo, !0),
        document.addEventListener("pointerup", Vo, !0))
      : (document.addEventListener("mousedown", Vo, !0),
        document.addEventListener("mousemove", Vo, !0),
        document.addEventListener("mouseup", Vo, !0)),
    (J1 = !0);
}
function m3(e) {
  p3(), e(ev());
  const t = () => e(ev());
  return (
    ah.add(t),
    () => {
      ah.delete(t);
    }
  );
}
function g3(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function v3(e = {}) {
  const t = DS(e),
    {
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
      isInvalid: i,
      id: a,
      onBlur: s,
      onFocus: l,
      "aria-describedby": u,
    } = t,
    {
      defaultChecked: c,
      isChecked: d,
      isFocusable: f,
      onChange: h,
      isIndeterminate: m,
      name: v,
      value: x,
      tabIndex: g = void 0,
      "aria-label": p,
      "aria-labelledby": w,
      "aria-invalid": S,
      ...C
    } = e,
    _ = g3(C, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    E = vo(h),
    A = vo(s),
    R = vo(l),
    [M, B] = k.useState(!1),
    [K, Y] = k.useState(!1),
    [X, de] = k.useState(!1),
    [U, N] = k.useState(!1);
  k.useEffect(() => m3(B), []);
  const D = k.useRef(null),
    [$, W] = k.useState(!0),
    [z, J] = k.useState(!!c),
    H = d !== void 0,
    Z = H ? d : z,
    ve = k.useCallback(
      (Q) => {
        if (r || n) {
          Q.preventDefault();
          return;
        }
        H || J(Z ? Q.target.checked : m ? !0 : Q.target.checked),
          E == null || E(Q);
      },
      [r, n, Z, H, m, E]
    );
  ld(() => {
    D.current && (D.current.indeterminate = !!m);
  }, [m]),
    ec(() => {
      n && Y(!1);
    }, [n, Y]),
    ld(() => {
      const Q = D.current;
      if (!(Q != null && Q.form)) return;
      const Ge = () => {
        J(!!c);
      };
      return (
        Q.form.addEventListener("reset", Ge),
        () => {
          var ct;
          return (ct = Q.form) == null
            ? void 0
            : ct.removeEventListener("reset", Ge);
        }
      );
    }, []);
  const ce = n && !f,
    He = k.useCallback(
      (Q) => {
        Q.key === " " && N(!0);
      },
      [N]
    ),
    De = k.useCallback(
      (Q) => {
        Q.key === " " && N(!1);
      },
      [N]
    );
  ld(() => {
    if (!D.current) return;
    D.current.checked !== Z && J(D.current.checked);
  }, [D.current]);
  const zt = k.useCallback(
      (Q = {}, Ge = null) => {
        const ct = (dr) => {
          K && dr.preventDefault(), N(!0);
        };
        return {
          ...Q,
          ref: Ge,
          "data-active": ne(U),
          "data-hover": ne(X),
          "data-checked": ne(Z),
          "data-focus": ne(K),
          "data-focus-visible": ne(K && M),
          "data-indeterminate": ne(m),
          "data-disabled": ne(n),
          "data-invalid": ne(i),
          "data-readonly": ne(r),
          "aria-hidden": !0,
          onMouseDown: it(Q.onMouseDown, ct),
          onMouseUp: it(Q.onMouseUp, () => N(!1)),
          onMouseEnter: it(Q.onMouseEnter, () => de(!0)),
          onMouseLeave: it(Q.onMouseLeave, () => de(!1)),
        };
      },
      [U, Z, n, K, M, X, m, i, r]
    ),
    Ut = k.useCallback(
      (Q = {}, Ge = null) => ({
        ...Q,
        ref: Ge,
        "data-active": ne(U),
        "data-hover": ne(X),
        "data-checked": ne(Z),
        "data-focus": ne(K),
        "data-focus-visible": ne(K && M),
        "data-indeterminate": ne(m),
        "data-disabled": ne(n),
        "data-invalid": ne(i),
        "data-readonly": ne(r),
      }),
      [U, Z, n, K, M, X, m, i, r]
    ),
    tt = k.useCallback(
      (Q = {}, Ge = null) => ({
        ..._,
        ...Q,
        ref: xn(Ge, (ct) => {
          ct && W(ct.tagName === "LABEL");
        }),
        onClick: it(Q.onClick, () => {
          var ct;
          $ ||
            ((ct = D.current) == null || ct.click(),
            requestAnimationFrame(() => {
              var dr;
              (dr = D.current) == null || dr.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": ne(n),
        "data-checked": ne(Z),
        "data-invalid": ne(i),
      }),
      [_, n, Z, i, $]
    ),
    Zr = k.useCallback(
      (Q = {}, Ge = null) => ({
        ...Q,
        ref: xn(D, Ge),
        type: "checkbox",
        name: v,
        value: x,
        id: a,
        tabIndex: g,
        onChange: it(Q.onChange, ve),
        onBlur: it(Q.onBlur, A, () => Y(!1)),
        onFocus: it(Q.onFocus, R, () => Y(!0)),
        onKeyDown: it(Q.onKeyDown, He),
        onKeyUp: it(Q.onKeyUp, De),
        required: o,
        checked: Z,
        disabled: ce,
        readOnly: r,
        "aria-label": p,
        "aria-labelledby": w,
        "aria-invalid": S ? !!S : i,
        "aria-describedby": u,
        "aria-disabled": n,
        style: a3,
      }),
      [v, x, a, ve, A, R, He, De, o, Z, ce, r, p, w, S, i, u, n, g]
    ),
    Ro = k.useCallback(
      (Q = {}, Ge = null) => ({
        ...Q,
        ref: Ge,
        onMouseDown: it(Q.onMouseDown, y3),
        "data-disabled": ne(n),
        "data-checked": ne(Z),
        "data-invalid": ne(i),
      }),
      [Z, n, i]
    );
  return {
    state: {
      isInvalid: i,
      isFocused: K,
      isChecked: Z,
      isActive: U,
      isHovered: X,
      isIndeterminate: m,
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
    },
    getRootProps: tt,
    getCheckboxProps: zt,
    getIndicatorProps: Ut,
    getInputProps: Zr,
    getLabelProps: Ro,
    htmlProps: _,
  };
}
function y3(e) {
  e.preventDefault(), e.stopPropagation();
}
var w3 = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "top",
    userSelect: "none",
    flexShrink: 0,
  },
  x3 = {
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    position: "relative",
  },
  S3 = Ju({
    from: { opacity: 0, strokeDashoffset: 16, transform: "scale(0.95)" },
    to: { opacity: 1, strokeDashoffset: 0, transform: "scale(1)" },
  }),
  b3 = Ju({ from: { opacity: 0 }, to: { opacity: 1 } }),
  k3 = Ju({
    from: { transform: "scaleX(0.65)" },
    to: { transform: "scaleX(1)" },
  }),
  ys = Ot(function (t, n) {
    const r = GR(),
      o = { ...r, ...t },
      i = fs("Checkbox", o),
      a = Li(t),
      {
        spacing: s = "0.5rem",
        className: l,
        children: u,
        iconColor: c,
        iconSize: d,
        icon: f = y.jsx(JR, {}),
        isChecked: h,
        isDisabled: m = r == null ? void 0 : r.isDisabled,
        onChange: v,
        inputProps: x,
        ...g
      } = a;
    let p = h;
    r != null && r.value && a.value && (p = r.value.includes(a.value));
    let w = v;
    r != null && r.onChange && a.value && (w = sx(r.onChange, v));
    const {
        state: S,
        getInputProps: C,
        getCheckboxProps: _,
        getLabelProps: E,
        getRootProps: A,
      } = v3({ ...g, isDisabled: m, isChecked: p, onChange: w }),
      R = YR(S.isChecked),
      M = k.useMemo(
        () => ({
          animation: R
            ? S.isIndeterminate
              ? `${b3} 20ms linear, ${k3} 200ms linear`
              : `${S3} 200ms linear`
            : void 0,
          fontSize: d,
          color: c,
          ...i.icon,
        }),
        [c, d, R, S.isIndeterminate, i.icon]
      ),
      B = k.cloneElement(f, {
        __css: M,
        isIndeterminate: S.isIndeterminate,
        isChecked: S.isChecked,
      });
    return y.jsxs(je.label, {
      __css: { ...x3, ...i.container },
      className: sn("chakra-checkbox", l),
      ...A(),
      children: [
        y.jsx("input", { className: "chakra-checkbox__input", ...C(x, n) }),
        y.jsx(je.span, {
          __css: { ...w3, ...i.control },
          className: "chakra-checkbox__control",
          ..._(),
          children: B,
        }),
        u &&
          y.jsx(je.span, {
            className: "chakra-checkbox__label",
            ...E(),
            __css: { marginStart: s, ...i.label },
            children: u,
          }),
      ],
    });
  });
ys.displayName = "Checkbox";
function E3(e, t, n, r) {
  const o = vo(n);
  return (
    k.useEffect(() => {
      const i = typeof e == "function" ? e() : e ?? document;
      if (!(!n || !i))
        return (
          i.addEventListener(t, o, r),
          () => {
            i.removeEventListener(t, o, r);
          }
        );
    }, [t, e, r, o, n]),
    () => {
      const i = typeof e == "function" ? e() : e ?? document;
      i == null || i.removeEventListener(t, o, r);
    }
  );
}
function LS(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function FS(e) {
  var t;
  if (!LS(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function C3(e) {
  var t, n;
  return (n = (t = VS(e)) == null ? void 0 : t.defaultView) != null
    ? n
    : window;
}
function VS(e) {
  return LS(e) ? e.ownerDocument : document;
}
function T3(e) {
  return VS(e).activeElement;
}
var $S = (e) => e.hasAttribute("tabindex"),
  P3 = (e) => $S(e) && e.tabIndex === -1;
function O3(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function BS(e) {
  return e.parentElement && BS(e.parentElement) ? !0 : e.hidden;
}
function _3(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function A3(e) {
  if (!FS(e) || BS(e) || O3(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : _3(e) ? !0 : $S(e);
}
function j3(e) {
  return e ? FS(e) && A3(e) && !P3(e) : !1;
}
function M3(e) {
  const { key: t } = e;
  return t.length === 1 || (t.length > 1 && /[^a-zA-Z0-9]/.test(t));
}
function R3(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e,
    [r, o] = k.useState([]),
    i = k.useRef(),
    a = () => {
      i.current && (clearTimeout(i.current), (i.current = null));
    },
    s = () => {
      a(),
        (i.current = setTimeout(() => {
          o([]), (i.current = null);
        }, t));
    };
  k.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (M3(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()),
          o(d),
          u(d.join("")),
          s();
      }
    };
  }
  return l;
}
function I3(e, t, n, r) {
  if (t == null) return r;
  if (!r) return e.find((a) => n(a).toLowerCase().startsWith(t.toLowerCase()));
  const o = e.filter((i) => n(i).toLowerCase().startsWith(t.toLowerCase()));
  if (o.length > 0) {
    let i;
    return o.includes(r)
      ? ((i = o.indexOf(r) + 1), i === o.length && (i = 0), o[i])
      : ((i = e.indexOf(o[0])), e[i]);
  }
  return r;
}
function N3() {
  const e = k.useRef(new Map()),
    t = e.current,
    n = k.useCallback((o, i, a, s) => {
      e.current.set(a, { type: i, el: o, options: s }),
        o.addEventListener(i, a, s);
    }, []),
    r = k.useCallback((o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    }, []);
  return (
    k.useEffect(
      () => () => {
        t.forEach((o, i) => {
          r(o.el, o.type, i, o.options);
        });
      },
      [r, t]
    ),
    { add: n, remove: r }
  );
}
function kd(e) {
  const t = e.target,
    { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function D3(e = {}) {
  const {
      ref: t,
      isDisabled: n,
      isFocusable: r,
      clickOnEnter: o = !0,
      clickOnSpace: i = !0,
      onMouseDown: a,
      onMouseUp: s,
      onClick: l,
      onKeyDown: u,
      onKeyUp: c,
      tabIndex: d,
      onMouseOver: f,
      onMouseLeave: h,
      ...m
    } = e,
    [v, x] = k.useState(!0),
    [g, p] = k.useState(!1),
    w = N3(),
    S = (N) => {
      N && N.tagName !== "BUTTON" && x(!1);
    },
    C = v ? d : d || 0,
    _ = n && !r,
    E = k.useCallback(
      (N) => {
        if (n) {
          N.stopPropagation(), N.preventDefault();
          return;
        }
        N.currentTarget.focus(), l == null || l(N);
      },
      [n, l]
    ),
    A = k.useCallback(
      (N) => {
        g &&
          kd(N) &&
          (N.preventDefault(),
          N.stopPropagation(),
          p(!1),
          w.remove(document, "keyup", A, !1));
      },
      [g, w]
    ),
    R = k.useCallback(
      (N) => {
        if (
          (u == null || u(N),
          n || N.defaultPrevented || N.metaKey || !kd(N.nativeEvent) || v)
        )
          return;
        const D = o && N.key === "Enter";
        i && N.key === " " && (N.preventDefault(), p(!0)),
          D && (N.preventDefault(), N.currentTarget.click()),
          w.add(document, "keyup", A, !1);
      },
      [n, v, u, o, i, w, A]
    ),
    M = k.useCallback(
      (N) => {
        if (
          (c == null || c(N),
          n || N.defaultPrevented || N.metaKey || !kd(N.nativeEvent) || v)
        )
          return;
        i &&
          N.key === " " &&
          (N.preventDefault(), p(!1), N.currentTarget.click());
      },
      [i, v, n, c]
    ),
    B = k.useCallback(
      (N) => {
        N.button === 0 && (p(!1), w.remove(document, "mouseup", B, !1));
      },
      [w]
    ),
    K = k.useCallback(
      (N) => {
        if (N.button !== 0) return;
        if (n) {
          N.stopPropagation(), N.preventDefault();
          return;
        }
        v || p(!0),
          N.currentTarget.focus({ preventScroll: !0 }),
          w.add(document, "mouseup", B, !1),
          a == null || a(N);
      },
      [n, v, a, w, B]
    ),
    Y = k.useCallback(
      (N) => {
        N.button === 0 && (v || p(!1), s == null || s(N));
      },
      [s, v]
    ),
    X = k.useCallback(
      (N) => {
        if (n) {
          N.preventDefault();
          return;
        }
        f == null || f(N);
      },
      [n, f]
    ),
    de = k.useCallback(
      (N) => {
        g && (N.preventDefault(), p(!1)), h == null || h(N);
      },
      [g, h]
    ),
    U = xn(t, S);
  return v
    ? {
        ...m,
        ref: U,
        type: "button",
        "aria-disabled": _ ? void 0 : n,
        disabled: _,
        onClick: E,
        onMouseDown: a,
        onMouseUp: s,
        onKeyUp: c,
        onKeyDown: u,
        onMouseOver: f,
        onMouseLeave: h,
      }
    : {
        ...m,
        ref: U,
        role: "button",
        "data-active": ne(g),
        "aria-disabled": n ? "true" : void 0,
        tabIndex: _ ? void 0 : C,
        onClick: E,
        onMouseDown: K,
        onMouseUp: Y,
        onKeyUp: M,
        onKeyDown: R,
        onMouseOver: X,
        onMouseLeave: de,
      };
}
function L3(e) {
  const t = e.current;
  if (!t) return !1;
  const n = T3(t);
  return !n || t.contains(n) ? !1 : !!j3(n);
}
function F3(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t,
    i = n && !r;
  ec(() => {
    if (!i || L3(e)) return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return (
        (s = requestAnimationFrame(() => {
          a.focus({ preventScroll: !0 });
        })),
        () => {
          cancelAnimationFrame(s);
        }
      );
  }, [i, e, o]);
}
var $o = (e, t) => ({ var: e, varRef: t ? `var(${e}, ${t})` : `var(${e})` }),
  Mt = {
    arrowShadowColor: $o("--popper-arrow-shadow-color"),
    arrowSize: $o("--popper-arrow-size", "8px"),
    arrowSizeHalf: $o("--popper-arrow-size-half"),
    arrowBg: $o("--popper-arrow-bg"),
    transformOrigin: $o("--popper-transform-origin"),
    arrowOffset: $o("--popper-arrow-offset"),
  };
function V3(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var $3 = {
    top: "bottom center",
    "top-start": "bottom left",
    "top-end": "bottom right",
    bottom: "top center",
    "bottom-start": "top left",
    "bottom-end": "top right",
    left: "right center",
    "left-start": "right top",
    "left-end": "right bottom",
    right: "left center",
    "right-start": "left top",
    "right-end": "left bottom",
  },
  B3 = (e) => $3[e],
  tv = { scroll: !0, resize: !0 };
function H3(e) {
  let t;
  return (
    typeof e == "object"
      ? (t = { enabled: !0, options: { ...tv, ...e } })
      : (t = { enabled: e, options: tv }),
    t
  );
}
var z3 = {
    name: "matchWidth",
    enabled: !0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state: e }) => {
      e.styles.popper.width = `${e.rects.reference.width}px`;
    },
    effect:
      ({ state: e }) =>
      () => {
        const t = e.elements.reference;
        e.elements.popper.style.width = `${t.offsetWidth}px`;
      },
  },
  U3 = {
    name: "transformOrigin",
    enabled: !0,
    phase: "write",
    fn: ({ state: e }) => {
      nv(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        nv(e);
      },
  },
  nv = (e) => {
    e.elements.popper.style.setProperty(
      Mt.transformOrigin.var,
      B3(e.placement)
    );
  },
  W3 = {
    name: "positionArrow",
    enabled: !0,
    phase: "afterWrite",
    fn: ({ state: e }) => {
      K3(e);
    },
  },
  K3 = (e) => {
    var t;
    if (!e.placement) return;
    const n = Z3(e.placement);
    if ((t = e.elements) != null && t.arrow && n) {
      Object.assign(e.elements.arrow.style, {
        [n.property]: n.value,
        width: Mt.arrowSize.varRef,
        height: Mt.arrowSize.varRef,
        zIndex: -1,
      });
      const r = {
        [Mt.arrowSizeHalf.var]: `calc(${Mt.arrowSize.varRef} / 2 - 1px)`,
        [Mt.arrowOffset.var]: `calc(${Mt.arrowSizeHalf.varRef} * -1)`,
      };
      for (const o in r) e.elements.arrow.style.setProperty(o, r[o]);
    }
  },
  Z3 = (e) => {
    if (e.startsWith("top"))
      return { property: "bottom", value: Mt.arrowOffset.varRef };
    if (e.startsWith("bottom"))
      return { property: "top", value: Mt.arrowOffset.varRef };
    if (e.startsWith("left"))
      return { property: "right", value: Mt.arrowOffset.varRef };
    if (e.startsWith("right"))
      return { property: "left", value: Mt.arrowOffset.varRef };
  },
  G3 = {
    name: "innerArrow",
    enabled: !0,
    phase: "main",
    requires: ["arrow"],
    fn: ({ state: e }) => {
      rv(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        rv(e);
      },
  },
  rv = (e) => {
    if (!e.elements.arrow) return;
    const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
    if (!t) return;
    const n = V3(e.placement);
    n && t.style.setProperty("--popper-arrow-default-shadow", n),
      Object.assign(t.style, {
        transform: "rotate(45deg)",
        background: Mt.arrowBg.varRef,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit",
        boxShadow:
          "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
      });
  },
  Y3 = {
    "start-start": { ltr: "left-start", rtl: "right-start" },
    "start-end": { ltr: "left-end", rtl: "right-end" },
    "end-start": { ltr: "right-start", rtl: "left-start" },
    "end-end": { ltr: "right-end", rtl: "left-end" },
    start: { ltr: "left", rtl: "right" },
    end: { ltr: "right", rtl: "left" },
  },
  X3 = {
    "auto-start": "auto-end",
    "auto-end": "auto-start",
    "top-start": "top-end",
    "top-end": "top-start",
    "bottom-start": "bottom-end",
    "bottom-end": "bottom-start",
  };
function q3(e, t = "ltr") {
  var n, r;
  const o = ((n = Y3[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = X3[e]) != null ? r : o;
}
var kt = "top",
  ln = "bottom",
  un = "right",
  Et = "left",
  Xp = "auto",
  ws = [kt, ln, un, Et],
  Pi = "start",
  ts = "end",
  J3 = "clippingParents",
  HS = "viewport",
  ia = "popper",
  Q3 = "reference",
  ov = ws.reduce(function (e, t) {
    return e.concat([t + "-" + Pi, t + "-" + ts]);
  }, []),
  zS = [].concat(ws, [Xp]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Pi, t + "-" + ts]);
  }, []),
  eI = "beforeRead",
  tI = "read",
  nI = "afterRead",
  rI = "beforeMain",
  oI = "main",
  iI = "afterMain",
  aI = "beforeWrite",
  sI = "write",
  lI = "afterWrite",
  uI = [eI, tI, nI, rI, oI, iI, aI, sI, lI];
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ft(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Po(e) {
  var t = Ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function nn(e) {
  var t = Ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qp(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cI(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !nn(i) ||
      !Vn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function dI(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !nn(o) ||
          !Vn(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const fI = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cI,
  effect: dI,
  requires: ["computeStyles"],
};
function Fn(e) {
  return e.split("-")[0];
}
var xo = Math.max,
  yu = Math.min,
  Oi = Math.round;
function sh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function US() {
  return !/^((?!chrome|android).)*safari/i.test(sh());
}
function _i(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    nn(e) &&
    ((o = (e.offsetWidth > 0 && Oi(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Oi(r.height) / e.offsetHeight) || 1));
  var a = Po(e) ? Ft(e) : window,
    s = a.visualViewport,
    l = !US() && n,
    u = (r.left + (l && s ? s.offsetLeft : 0)) / o,
    c = (r.top + (l && s ? s.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function Jp(e) {
  var t = _i(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function WS(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && qp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ur(e) {
  return Ft(e).getComputedStyle(e);
}
function hI(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function Kr(e) {
  return ((Po(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function uc(e) {
  return Vn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (qp(e) ? e.host : null) || Kr(e);
}
function iv(e) {
  return !nn(e) || ur(e).position === "fixed" ? null : e.offsetParent;
}
function pI(e) {
  var t = /firefox/i.test(sh()),
    n = /Trident/i.test(sh());
  if (n && nn(e)) {
    var r = ur(e);
    if (r.position === "fixed") return null;
  }
  var o = uc(e);
  for (qp(o) && (o = o.host); nn(o) && ["html", "body"].indexOf(Vn(o)) < 0; ) {
    var i = ur(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function xs(e) {
  for (var t = Ft(e), n = iv(e); n && hI(n) && ur(n).position === "static"; )
    n = iv(n);
  return n &&
    (Vn(n) === "html" || (Vn(n) === "body" && ur(n).position === "static"))
    ? t
    : n || pI(e) || t;
}
function Qp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Oa(e, t, n) {
  return xo(e, yu(t, n));
}
function mI(e, t, n) {
  var r = Oa(e, t, n);
  return r > n ? n : r;
}
function KS() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ZS(e) {
  return Object.assign({}, KS(), e);
}
function GS(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var gI = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    ZS(typeof t != "number" ? t : GS(t, ws))
  );
};
function vI(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = Fn(n.placement),
    l = Qp(s),
    u = [Et, un].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = gI(o.padding, n),
      f = Jp(i),
      h = l === "y" ? kt : Et,
      m = l === "y" ? ln : un,
      v =
        n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
      x = a[l] - n.rects.reference[l],
      g = xs(i),
      p = g ? (l === "y" ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      w = v / 2 - x / 2,
      S = d[h],
      C = p - f[c] - d[m],
      _ = p / 2 - f[c] / 2 + w,
      E = Oa(S, _, C),
      A = l;
    n.modifiersData[r] = ((t = {}), (t[A] = E), (t.centerOffset = E - _), t);
  }
}
function yI(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (WS(t.elements.popper, o) && (t.elements.arrow = o)));
}
const wI = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vI,
  effect: yI,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ai(e) {
  return e.split("-")[1];
}
var xI = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function SI(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Oi(n * o) / o || 0, y: Oi(r * o) / o || 0 };
}
function av(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    h = f === void 0 ? 0 : f,
    m = a.y,
    v = m === void 0 ? 0 : m,
    x = typeof c == "function" ? c({ x: h, y: v }) : { x: h, y: v };
  (h = x.x), (v = x.y);
  var g = a.hasOwnProperty("x"),
    p = a.hasOwnProperty("y"),
    w = Et,
    S = kt,
    C = window;
  if (u) {
    var _ = xs(n),
      E = "clientHeight",
      A = "clientWidth";
    if (
      (_ === Ft(n) &&
        ((_ = Kr(n)),
        ur(_).position !== "static" &&
          s === "absolute" &&
          ((E = "scrollHeight"), (A = "scrollWidth"))),
      (_ = _),
      o === kt || ((o === Et || o === un) && i === ts))
    ) {
      S = ln;
      var R = d && _ === C && C.visualViewport ? C.visualViewport.height : _[E];
      (v -= R - r.height), (v *= l ? 1 : -1);
    }
    if (o === Et || ((o === kt || o === ln) && i === ts)) {
      w = un;
      var M = d && _ === C && C.visualViewport ? C.visualViewport.width : _[A];
      (h -= M - r.width), (h *= l ? 1 : -1);
    }
  }
  var B = Object.assign({ position: s }, u && xI),
    K = c === !0 ? SI({ x: h, y: v }, Ft(n)) : { x: h, y: v };
  if (((h = K.x), (v = K.y), l)) {
    var Y;
    return Object.assign(
      {},
      B,
      ((Y = {}),
      (Y[S] = p ? "0" : ""),
      (Y[w] = g ? "0" : ""),
      (Y.transform =
        (C.devicePixelRatio || 1) <= 1
          ? "translate(" + h + "px, " + v + "px)"
          : "translate3d(" + h + "px, " + v + "px, 0)"),
      Y)
    );
  }
  return Object.assign(
    {},
    B,
    ((t = {}),
    (t[S] = p ? v + "px" : ""),
    (t[w] = g ? h + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function bI(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s,
    u = {
      placement: Fn(t.placement),
      variation: Ai(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      av(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        av(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const kI = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bI,
  data: {},
};
var ol = { passive: !0 };
function EI(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = Ft(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, ol);
      }),
    s && l.addEventListener("resize", n.update, ol),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, ol);
        }),
        s && l.removeEventListener("resize", n.update, ol);
    }
  );
}
const CI = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: EI,
  data: {},
};
var TI = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Tl(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return TI[t];
  });
}
var PI = { start: "end", end: "start" };
function sv(e) {
  return e.replace(/start|end/g, function (t) {
    return PI[t];
  });
}
function em(e) {
  var t = Ft(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function tm(e) {
  return _i(Kr(e)).left + em(e).scrollLeft;
}
function OI(e, t) {
  var n = Ft(e),
    r = Kr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var u = US();
    (u || (!u && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + tm(e), y: l };
}
function _I(e) {
  var t,
    n = Kr(e),
    r = em(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = xo(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = xo(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + tm(e),
    l = -r.scrollTop;
  return (
    ur(o || n).direction === "rtl" &&
      (s += xo(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function nm(e) {
  var t = ur(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function YS(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0
    ? e.ownerDocument.body
    : nn(e) && nm(e)
    ? e
    : YS(uc(e));
}
function _a(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = YS(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Ft(r),
    a = o ? [i].concat(i.visualViewport || [], nm(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(_a(uc(a)));
}
function lh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function AI(e, t) {
  var n = _i(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function lv(e, t, n) {
  return t === HS ? lh(OI(e, n)) : Po(t) ? AI(t, n) : lh(_I(Kr(e)));
}
function jI(e) {
  var t = _a(uc(e)),
    n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0,
    r = n && nn(e) ? xs(e) : e;
  return Po(r)
    ? t.filter(function (o) {
        return Po(o) && WS(o, r) && Vn(o) !== "body";
      })
    : [];
}
function MI(e, t, n, r) {
  var o = t === "clippingParents" ? jI(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(function (l, u) {
      var c = lv(e, u, r);
      return (
        (l.top = xo(c.top, l.top)),
        (l.right = yu(c.right, l.right)),
        (l.bottom = yu(c.bottom, l.bottom)),
        (l.left = xo(c.left, l.left)),
        l
      );
    }, lv(e, a, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function XS(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Fn(r) : null,
    i = r ? Ai(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case kt:
      l = { x: a, y: t.y - n.height };
      break;
    case ln:
      l = { x: a, y: t.y + t.height };
      break;
    case un:
      l = { x: t.x + t.width, y: s };
      break;
    case Et:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Qp(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Pi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ts:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function ns(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    l = s === void 0 ? J3 : s,
    u = n.rootBoundary,
    c = u === void 0 ? HS : u,
    d = n.elementContext,
    f = d === void 0 ? ia : d,
    h = n.altBoundary,
    m = h === void 0 ? !1 : h,
    v = n.padding,
    x = v === void 0 ? 0 : v,
    g = ZS(typeof x != "number" ? x : GS(x, ws)),
    p = f === ia ? Q3 : ia,
    w = e.rects.popper,
    S = e.elements[m ? p : f],
    C = MI(Po(S) ? S : S.contextElement || Kr(e.elements.popper), l, c, a),
    _ = _i(e.elements.reference),
    E = XS({ reference: _, element: w, strategy: "absolute", placement: o }),
    A = lh(Object.assign({}, w, E)),
    R = f === ia ? A : _,
    M = {
      top: C.top - R.top + g.top,
      bottom: R.bottom - C.bottom + g.bottom,
      left: C.left - R.left + g.left,
      right: R.right - C.right + g.right,
    },
    B = e.modifiersData.offset;
  if (f === ia && B) {
    var K = B[o];
    Object.keys(M).forEach(function (Y) {
      var X = [un, ln].indexOf(Y) >= 0 ? 1 : -1,
        de = [kt, ln].indexOf(Y) >= 0 ? "y" : "x";
      M[Y] += K[de] * X;
    });
  }
  return M;
}
function RI(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? zS : l,
    c = Ai(r),
    d = c
      ? s
        ? ov
        : ov.filter(function (m) {
            return Ai(m) === c;
          })
      : ws,
    f = d.filter(function (m) {
      return u.indexOf(m) >= 0;
    });
  f.length === 0 && (f = d);
  var h = f.reduce(function (m, v) {
    return (
      (m[v] = ns(e, { placement: v, boundary: o, rootBoundary: i, padding: a })[
        Fn(v)
      ]),
      m
    );
  }, {});
  return Object.keys(h).sort(function (m, v) {
    return h[m] - h[v];
  });
}
function II(e) {
  if (Fn(e) === Xp) return [];
  var t = Tl(e);
  return [sv(e), t, sv(t)];
}
function NI(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        h = n.flipVariations,
        m = h === void 0 ? !0 : h,
        v = n.allowedAutoPlacements,
        x = t.options.placement,
        g = Fn(x),
        p = g === x,
        w = l || (p || !m ? [Tl(x)] : II(x)),
        S = [x].concat(w).reduce(function (Z, ve) {
          return Z.concat(
            Fn(ve) === Xp
              ? RI(t, {
                  placement: ve,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: m,
                  allowedAutoPlacements: v,
                })
              : ve
          );
        }, []),
        C = t.rects.reference,
        _ = t.rects.popper,
        E = new Map(),
        A = !0,
        R = S[0],
        M = 0;
      M < S.length;
      M++
    ) {
      var B = S[M],
        K = Fn(B),
        Y = Ai(B) === Pi,
        X = [kt, ln].indexOf(K) >= 0,
        de = X ? "width" : "height",
        U = ns(t, {
          placement: B,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        N = X ? (Y ? un : Et) : Y ? ln : kt;
      C[de] > _[de] && (N = Tl(N));
      var D = Tl(N),
        $ = [];
      if (
        (i && $.push(U[K] <= 0),
        s && $.push(U[N] <= 0, U[D] <= 0),
        $.every(function (Z) {
          return Z;
        }))
      ) {
        (R = B), (A = !1);
        break;
      }
      E.set(B, $);
    }
    if (A)
      for (
        var W = m ? 3 : 1,
          z = function (ve) {
            var ce = S.find(function (He) {
              var De = E.get(He);
              if (De)
                return De.slice(0, ve).every(function (zt) {
                  return zt;
                });
            });
            if (ce) return (R = ce), "break";
          },
          J = W;
        J > 0;
        J--
      ) {
        var H = z(J);
        if (H === "break") break;
      }
    t.placement !== R &&
      ((t.modifiersData[r]._skip = !0), (t.placement = R), (t.reset = !0));
  }
}
const DI = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: NI,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function uv(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function cv(e) {
  return [kt, un, ln, Et].some(function (t) {
    return e[t] >= 0;
  });
}
function LI(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = ns(t, { elementContext: "reference" }),
    s = ns(t, { altBoundary: !0 }),
    l = uv(a, r),
    u = uv(s, o, i),
    c = cv(l),
    d = cv(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const FI = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: LI,
};
function VI(e, t, n) {
  var r = Fn(e),
    o = [Et, kt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [Et, un].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function $I(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = zS.reduce(function (c, d) {
      return (c[d] = VI(d, t.rects, i)), c;
    }, {}),
    s = a[t.placement],
    l = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = a);
}
const BI = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $I,
};
function HI(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = XS({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const zI = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: HI,
  data: {},
};
function UI(e) {
  return e === "x" ? "y" : "x";
}
function WI(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    h = f === void 0 ? !0 : f,
    m = n.tetherOffset,
    v = m === void 0 ? 0 : m,
    x = ns(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    g = Fn(t.placement),
    p = Ai(t.placement),
    w = !p,
    S = Qp(g),
    C = UI(S),
    _ = t.modifiersData.popperOffsets,
    E = t.rects.reference,
    A = t.rects.popper,
    R =
      typeof v == "function"
        ? v(Object.assign({}, t.rects, { placement: t.placement }))
        : v,
    M =
      typeof R == "number"
        ? { mainAxis: R, altAxis: R }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, R),
    B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    K = { x: 0, y: 0 };
  if (_) {
    if (i) {
      var Y,
        X = S === "y" ? kt : Et,
        de = S === "y" ? ln : un,
        U = S === "y" ? "height" : "width",
        N = _[S],
        D = N + x[X],
        $ = N - x[de],
        W = h ? -A[U] / 2 : 0,
        z = p === Pi ? E[U] : A[U],
        J = p === Pi ? -A[U] : -E[U],
        H = t.elements.arrow,
        Z = h && H ? Jp(H) : { width: 0, height: 0 },
        ve = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : KS(),
        ce = ve[X],
        He = ve[de],
        De = Oa(0, E[U], Z[U]),
        zt = w ? E[U] / 2 - W - De - ce - M.mainAxis : z - De - ce - M.mainAxis,
        Ut = w
          ? -E[U] / 2 + W + De + He + M.mainAxis
          : J + De + He + M.mainAxis,
        tt = t.elements.arrow && xs(t.elements.arrow),
        Zr = tt ? (S === "y" ? tt.clientTop || 0 : tt.clientLeft || 0) : 0,
        Ro = (Y = B == null ? void 0 : B[S]) != null ? Y : 0,
        Cs = N + zt - Ro - Zr,
        Q = N + Ut - Ro,
        Ge = Oa(h ? yu(D, Cs) : D, N, h ? xo($, Q) : $);
      (_[S] = Ge), (K[S] = Ge - N);
    }
    if (s) {
      var ct,
        dr = S === "x" ? kt : Et,
        yc = S === "x" ? ln : un,
        Wt = _[C],
        fr = C === "y" ? "height" : "width",
        Gr = Wt + x[dr],
        Kt = Wt - x[yc],
        Io = [kt, Et].indexOf(g) !== -1,
        $i = (ct = B == null ? void 0 : B[C]) != null ? ct : 0,
        Ts = Io ? Gr : Wt - E[fr] - A[fr] - $i + M.altAxis,
        Ps = Io ? Wt + E[fr] + A[fr] - $i - M.altAxis : Kt,
        Yr = h && Io ? mI(Ts, Wt, Ps) : Oa(h ? Ts : Gr, Wt, h ? Ps : Kt);
      (_[C] = Yr), (K[C] = Yr - Wt);
    }
    t.modifiersData[r] = K;
  }
}
const KI = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: WI,
  requiresIfExists: ["offset"],
};
function ZI(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function GI(e) {
  return e === Ft(e) || !nn(e) ? em(e) : ZI(e);
}
function YI(e) {
  var t = e.getBoundingClientRect(),
    n = Oi(t.width) / e.offsetWidth || 1,
    r = Oi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function XI(e, t, n) {
  n === void 0 && (n = !1);
  var r = nn(t),
    o = nn(t) && YI(t),
    i = Kr(t),
    a = _i(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Vn(t) !== "body" || nm(i)) && (s = GI(t)),
      nn(t)
        ? ((l = _i(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = tm(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function qI(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function JI(e) {
  var t = qI(e);
  return uI.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function QI(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function eN(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var dv = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function tN(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? dv : o;
  return function (s, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, dv, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      h = {
        state: c,
        setOptions: function (g) {
          var p = typeof g == "function" ? g(c.options) : g;
          v(),
            (c.options = Object.assign({}, i, c.options, p)),
            (c.scrollParents = {
              reference: Po(s)
                ? _a(s)
                : s.contextElement
                ? _a(s.contextElement)
                : [],
              popper: _a(l),
            });
          var w = JI(eN([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = w.filter(function (S) {
              return S.enabled;
            })),
            m(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var g = c.elements,
              p = g.reference,
              w = g.popper;
            if (fv(p, w)) {
              (c.rects = {
                reference: XI(p, xs(w), c.options.strategy === "fixed"),
                popper: Jp(w),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (M) {
                  return (c.modifiersData[M.name] = Object.assign({}, M.data));
                });
              for (var S = 0; S < c.orderedModifiers.length; S++) {
                if (c.reset === !0) {
                  (c.reset = !1), (S = -1);
                  continue;
                }
                var C = c.orderedModifiers[S],
                  _ = C.fn,
                  E = C.options,
                  A = E === void 0 ? {} : E,
                  R = C.name;
                typeof _ == "function" &&
                  (c = _({ state: c, options: A, name: R, instance: h }) || c);
              }
            }
          }
        },
        update: QI(function () {
          return new Promise(function (x) {
            h.forceUpdate(), x(c);
          });
        }),
        destroy: function () {
          v(), (f = !0);
        },
      };
    if (!fv(s, l)) return h;
    h.setOptions(u).then(function (x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function m() {
      c.orderedModifiers.forEach(function (x) {
        var g = x.name,
          p = x.options,
          w = p === void 0 ? {} : p,
          S = x.effect;
        if (typeof S == "function") {
          var C = S({ state: c, name: g, instance: h, options: w }),
            _ = function () {};
          d.push(C || _);
        }
      });
    }
    function v() {
      d.forEach(function (x) {
        return x();
      }),
        (d = []);
    }
    return h;
  };
}
var nN = [CI, zI, kI, fI, BI, DI, KI, wI, FI],
  rN = tN({ defaultModifiers: nN });
function oN(e = {}) {
  const {
      enabled: t = !0,
      modifiers: n,
      placement: r = "bottom",
      strategy: o = "absolute",
      arrowPadding: i = 8,
      eventListeners: a = !0,
      offset: s,
      gutter: l = 8,
      flip: u = !0,
      boundary: c = "clippingParents",
      preventOverflow: d = !0,
      matchWidth: f,
      direction: h = "ltr",
    } = e,
    m = k.useRef(null),
    v = k.useRef(null),
    x = k.useRef(null),
    g = q3(r, h),
    p = k.useRef(() => {}),
    w = k.useCallback(() => {
      var M;
      !t ||
        !m.current ||
        !v.current ||
        ((M = p.current) == null || M.call(p),
        (x.current = rN(m.current, v.current, {
          placement: g,
          modifiers: [
            G3,
            W3,
            U3,
            { ...z3, enabled: !!f },
            { name: "eventListeners", ...H3(a) },
            { name: "arrow", options: { padding: i } },
            { name: "offset", options: { offset: s ?? [0, l] } },
            { name: "flip", enabled: !!u, options: { padding: 8 } },
            { name: "preventOverflow", enabled: !!d, options: { boundary: c } },
            ...(n ?? []),
          ],
          strategy: o,
        })),
        x.current.forceUpdate(),
        (p.current = x.current.destroy));
    }, [g, t, n, f, a, i, s, l, u, d, c, o]);
  k.useEffect(
    () => () => {
      var M;
      !m.current &&
        !v.current &&
        ((M = x.current) == null || M.destroy(), (x.current = null));
    },
    []
  );
  const S = k.useCallback(
      (M) => {
        (m.current = M), w();
      },
      [w]
    ),
    C = k.useCallback((M = {}, B = null) => ({ ...M, ref: xn(S, B) }), [S]),
    _ = k.useCallback(
      (M) => {
        (v.current = M), w();
      },
      [w]
    ),
    E = k.useCallback(
      (M = {}, B = null) => ({
        ...M,
        ref: xn(_, B),
        style: {
          ...M.style,
          position: o,
          minWidth: f ? void 0 : "max-content",
          inset: "0 auto auto 0",
        },
      }),
      [o, _, f]
    ),
    A = k.useCallback((M = {}, B = null) => {
      const { size: K, shadowColor: Y, bg: X, style: de, ...U } = M;
      return { ...U, ref: B, "data-popper-arrow": "", style: iN(M) };
    }, []),
    R = k.useCallback(
      (M = {}, B = null) => ({ ...M, ref: B, "data-popper-arrow-inner": "" }),
      []
    );
  return {
    update() {
      var M;
      (M = x.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = x.current) == null || M.forceUpdate();
    },
    transformOrigin: Mt.transformOrigin.varRef,
    referenceRef: S,
    popperRef: _,
    getPopperProps: E,
    getArrowProps: A,
    getArrowInnerProps: R,
    getReferenceProps: C,
  };
}
function iN(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e,
    i = { ...o, position: "absolute" };
  return (
    t && (i["--popper-arrow-size"] = t),
    n && (i["--popper-arrow-shadow-color"] = n),
    r && (i["--popper-arrow-bg"] = r),
    i
  );
}
function aN(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = vo(n),
    a = vo(t),
    [s, l] = k.useState(e.defaultIsOpen || !1),
    u = r !== void 0 ? r : s,
    c = r !== void 0,
    d = k.useId(),
    f = o ?? `disclosure-${d}`,
    h = k.useCallback(() => {
      c || l(!1), a == null || a();
    }, [c, a]),
    m = k.useCallback(() => {
      c || l(!0), i == null || i();
    }, [c, i]),
    v = k.useCallback(() => {
      u ? h() : m();
    }, [u, m, h]);
  function x(p = {}) {
    return {
      ...p,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(w) {
        var S;
        (S = p.onClick) == null || S.call(p, w), v();
      },
    };
  }
  function g(p = {}) {
    return { ...p, hidden: !u, id: f };
  }
  return {
    isOpen: u,
    onOpen: m,
    onClose: h,
    onToggle: v,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: g,
  };
}
function sN(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e,
    o = vo(n),
    a = k.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }).current;
  k.useEffect(() => {
    if (!r) return;
    const s = (d) => {
        Ed(d, t) && (a.isPointerDown = !0);
      },
      l = (d) => {
        if (a.ignoreEmulatedMouseEvents) {
          a.ignoreEmulatedMouseEvents = !1;
          return;
        }
        a.isPointerDown && n && Ed(d, t) && ((a.isPointerDown = !1), o(d));
      },
      u = (d) => {
        (a.ignoreEmulatedMouseEvents = !0),
          n && a.isPointerDown && Ed(d, t) && ((a.isPointerDown = !1), o(d));
      },
      c = qS(t.current);
    return (
      c.addEventListener("mousedown", s, !0),
      c.addEventListener("mouseup", l, !0),
      c.addEventListener("touchstart", s, !0),
      c.addEventListener("touchend", u, !0),
      () => {
        c.removeEventListener("mousedown", s, !0),
          c.removeEventListener("mouseup", l, !0),
          c.removeEventListener("touchstart", s, !0),
          c.removeEventListener("touchend", u, !0);
      }
    );
  }, [n, t, o, a, r]);
}
function Ed(e, t) {
  var n;
  const r = e.target;
  return r && !qS(r).contains(r)
    ? !1
    : !((n = t.current) != null && n.contains(r));
}
function qS(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function lN(e) {
  const { isOpen: t, ref: n } = e,
    [r, o] = k.useState(t),
    [i, a] = k.useState(!1);
  return (
    k.useEffect(() => {
      i || (o(t), a(!0));
    }, [t, i, r]),
    E3(
      () => n.current,
      "animationend",
      () => {
        o(t);
      }
    ),
    {
      present: !(t ? !1 : !r),
      onComplete() {
        var l;
        const u = C3(n.current),
          c = new u.CustomEvent("animationend", { bubbles: !0 });
        (l = n.current) == null || l.dispatchEvent(c);
      },
    }
  );
}
function uN(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || (o === "keepMounted" && t));
}
var [cN, dN, fN, hN] = ZR(),
  [pN, Ss] = Ur({ strict: !1, name: "MenuContext" });
function mN(e, ...t) {
  const n = k.useId(),
    r = e || n;
  return k.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function JS(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function hv(e) {
  return JS(e).activeElement === e;
}
function gN(e = {}) {
  const {
      id: t,
      closeOnSelect: n = !0,
      closeOnBlur: r = !0,
      initialFocusRef: o,
      autoSelect: i = !0,
      isLazy: a,
      isOpen: s,
      defaultIsOpen: l,
      onClose: u,
      onOpen: c,
      placement: d = "bottom-start",
      lazyBehavior: f = "unmount",
      direction: h,
      computePositionOnMount: m = !1,
      ...v
    } = e,
    x = k.useRef(null),
    g = k.useRef(null),
    p = fN(),
    w = k.useCallback(() => {
      requestAnimationFrame(() => {
        var H;
        (H = x.current) == null || H.focus({ preventScroll: !1 });
      });
    }, []),
    S = k.useCallback(() => {
      const H = setTimeout(() => {
        var Z;
        if (o) (Z = o.current) == null || Z.focus();
        else {
          const ve = p.firstEnabled();
          ve && Y(ve.index);
        }
      });
      D.current.add(H);
    }, [p, o]),
    C = k.useCallback(() => {
      const H = setTimeout(() => {
        const Z = p.lastEnabled();
        Z && Y(Z.index);
      });
      D.current.add(H);
    }, [p]),
    _ = k.useCallback(() => {
      c == null || c(), i ? S() : w();
    }, [i, S, w, c]),
    {
      isOpen: E,
      onOpen: A,
      onClose: R,
      onToggle: M,
    } = aN({ isOpen: s, defaultIsOpen: l, onClose: u, onOpen: _ });
  sN({
    enabled: E && r,
    ref: x,
    handler: (H) => {
      var Z;
      ((Z = g.current) != null && Z.contains(H.target)) || R();
    },
  });
  const B = oN({ ...v, enabled: E || m, placement: d, direction: h }),
    [K, Y] = k.useState(-1);
  ec(() => {
    E || Y(-1);
  }, [E]),
    F3(x, { focusRef: g, visible: E, shouldFocus: !0 });
  const X = lN({ isOpen: E, ref: x }),
    [de, U] = mN(t, "menu-button", "menu-list"),
    N = k.useCallback(() => {
      A(), w();
    }, [A, w]),
    D = k.useRef(new Set([]));
  k.useEffect(() => {
    const H = D.current;
    return () => {
      H.forEach((Z) => clearTimeout(Z)), H.clear();
    };
  }, []);
  const $ = k.useCallback(() => {
      A(), S();
    }, [S, A]),
    W = k.useCallback(() => {
      A(), C();
    }, [A, C]),
    z = k.useCallback(() => {
      var H, Z;
      const ve = JS(x.current),
        ce = (H = x.current) == null ? void 0 : H.contains(ve.activeElement);
      if (!(E && !ce)) return;
      const De = (Z = p.item(K)) == null ? void 0 : Z.node;
      De == null || De.focus({ preventScroll: !0 });
    }, [E, K, p]),
    J = k.useRef(null);
  return {
    openAndFocusMenu: N,
    openAndFocusFirstItem: $,
    openAndFocusLastItem: W,
    onTransitionEnd: z,
    unstable__animationState: X,
    descendants: p,
    popper: B,
    buttonId: de,
    menuId: U,
    forceUpdate: B.forceUpdate,
    orientation: "vertical",
    isOpen: E,
    onToggle: M,
    onOpen: A,
    onClose: R,
    menuRef: x,
    buttonRef: g,
    focusedIndex: K,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: Y,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: J,
  };
}
function vN(e = {}, t = null) {
  const n = Ss(),
    {
      onToggle: r,
      popper: o,
      openAndFocusFirstItem: i,
      openAndFocusLastItem: a,
    } = n,
    s = k.useCallback(
      (l) => {
        const u = l.key,
          d = { Enter: i, ArrowDown: i, ArrowUp: a }[u];
        d && (l.preventDefault(), l.stopPropagation(), d(l));
      },
      [i, a]
    );
  return {
    ...e,
    ref: xn(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": ne(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: it(e.onClick, r),
    onKeyDown: it(e.onKeyDown, s),
  };
}
function uh(e) {
  var t;
  return (
    SN(e) &&
    !!(
      (t = e == null ? void 0 : e.getAttribute("role")) != null &&
      t.startsWith("menuitem")
    )
  );
}
function yN(e = {}, t = null) {
  const n = Ss();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
      focusedIndex: r,
      setFocusedIndex: o,
      menuRef: i,
      isOpen: a,
      onClose: s,
      menuId: l,
      isLazy: u,
      lazyBehavior: c,
      unstable__animationState: d,
    } = n,
    f = dN(),
    h = R3({ preventDefault: (g) => g.key !== " " && uh(g.target) }),
    m = k.useCallback(
      (g) => {
        if (!g.currentTarget.contains(g.target)) return;
        const p = g.key,
          S = {
            Tab: (_) => _.preventDefault(),
            Escape: s,
            ArrowDown: () => {
              const _ = f.nextEnabled(r);
              _ && o(_.index);
            },
            ArrowUp: () => {
              const _ = f.prevEnabled(r);
              _ && o(_.index);
            },
          }[p];
        if (S) {
          g.preventDefault(), S(g);
          return;
        }
        const C = h((_) => {
          const E = I3(
            f.values(),
            _,
            (A) => {
              var R, M;
              return (M =
                (R = A == null ? void 0 : A.node) == null
                  ? void 0
                  : R.textContent) != null
                ? M
                : "";
            },
            f.item(r)
          );
          if (E) {
            const A = f.indexOf(E.node);
            o(A);
          }
        });
        uh(g.target) && C(g);
      },
      [f, r, h, s, o]
    ),
    v = k.useRef(!1);
  a && (v.current = !0);
  const x = uN({
    wasSelected: v.current,
    enabled: u,
    mode: c,
    isSelected: d.present,
  });
  return {
    ...e,
    ref: xn(i, t),
    children: x ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: { ...e.style, transformOrigin: "var(--popper-transform-origin)" },
    "aria-orientation": "vertical",
    onKeyDown: it(e.onKeyDown, m),
  };
}
function wN(e = {}) {
  const { popper: t, isOpen: n } = Ss();
  return t.getPopperProps({
    ...e,
    style: { visibility: n ? "visible" : "hidden", ...e.style },
  });
}
function xN(e = {}, t = null) {
  const {
      onMouseEnter: n,
      onMouseMove: r,
      onMouseLeave: o,
      onClick: i,
      onFocus: a,
      isDisabled: s,
      isFocusable: l,
      closeOnSelect: u,
      type: c,
      ...d
    } = e,
    f = Ss(),
    {
      setFocusedIndex: h,
      focusedIndex: m,
      closeOnSelect: v,
      onClose: x,
      menuRef: g,
      isOpen: p,
      menuId: w,
      rafId: S,
    } = f,
    C = k.useRef(null),
    _ = `${w}-menuitem-${k.useId()}`,
    { index: E, register: A } = hN({ disabled: s && !l }),
    R = k.useCallback(
      (N) => {
        n == null || n(N), !s && h(E);
      },
      [h, E, s, n]
    ),
    M = k.useCallback(
      (N) => {
        r == null || r(N), C.current && !hv(C.current) && R(N);
      },
      [R, r]
    ),
    B = k.useCallback(
      (N) => {
        o == null || o(N), !s && h(-1);
      },
      [h, s, o]
    ),
    K = k.useCallback(
      (N) => {
        i == null || i(N), uh(N.currentTarget) && (u ?? v) && x();
      },
      [x, i, v, u]
    ),
    Y = k.useCallback(
      (N) => {
        a == null || a(N), h(E);
      },
      [h, a, E]
    ),
    X = E === m,
    de = s && !l;
  ec(() => {
    if (p)
      return (
        X && !de && C.current
          ? (S.current && cancelAnimationFrame(S.current),
            (S.current = requestAnimationFrame(() => {
              var N;
              (N = C.current) == null || N.focus({ preventScroll: !0 }),
                (S.current = null);
            })))
          : g.current &&
            !hv(g.current) &&
            g.current.focus({ preventScroll: !0 }),
        () => {
          S.current && cancelAnimationFrame(S.current);
        }
      );
  }, [X, de, g, p]);
  const U = D3({
    onClick: K,
    onFocus: Y,
    onMouseEnter: R,
    onMouseMove: M,
    onMouseLeave: B,
    ref: xn(A, C, t),
    isDisabled: s,
    isFocusable: l,
  });
  return {
    ...d,
    ...U,
    type: c ?? U.type,
    id: _,
    role: "menuitem",
    tabIndex: X ? 0 : -1,
  };
}
function SN(e) {
  var t;
  if (!bN(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function bN(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
var [kN, bs] = Ur({
    name: "MenuStylesContext",
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `,
  }),
  QS = (e) => {
    const { children: t } = e,
      n = fs("Menu", e),
      r = Li(e),
      { direction: o } = ox(),
      { descendants: i, ...a } = gN({ ...r, direction: o }),
      s = k.useMemo(() => a, [a]),
      { isOpen: l, onClose: u, forceUpdate: c } = s;
    return y.jsx(cN, {
      value: i,
      children: y.jsx(pN, {
        value: s,
        children: y.jsx(kN, {
          value: n,
          children: Or(t, { isOpen: l, onClose: u, forceUpdate: c }),
        }),
      }),
    });
  };
QS.displayName = "Menu";
var eb = Ot((e, t) => {
  const n = bs();
  return y.jsx(je.span, {
    ref: t,
    ...e,
    __css: n.command,
    className: "chakra-menu__command",
  });
});
eb.displayName = "MenuCommand";
var EN = Ot((e, t) => {
    const { type: n, ...r } = e,
      o = bs(),
      i = r.as || n ? n ?? void 0 : "button",
      a = k.useMemo(
        () => ({
          textDecoration: "none",
          color: "inherit",
          userSelect: "none",
          display: "flex",
          width: "100%",
          alignItems: "center",
          textAlign: "start",
          flex: "0 0 auto",
          outline: 0,
          ...o.item,
        }),
        [o.item]
      );
    return y.jsx(je.button, { ref: t, type: i, ...r, __css: a });
  }),
  tb = (e) => {
    const { className: t, children: n, ...r } = e,
      o = bs(),
      i = k.Children.only(n),
      a = k.isValidElement(i)
        ? k.cloneElement(i, {
            focusable: "false",
            "aria-hidden": !0,
            className: sn("chakra-menu__icon", i.props.className),
          })
        : null,
      s = sn("chakra-menu__icon-wrapper", t);
    return y.jsx(je.span, { className: s, ...r, __css: o.icon, children: a });
  };
tb.displayName = "MenuIcon";
var fa = Ot((e, t) => {
  const {
      icon: n,
      iconSpacing: r = "0.75rem",
      command: o,
      commandSpacing: i = "0.75rem",
      children: a,
      ...s
    } = e,
    l = xN(s, t),
    c =
      n || o
        ? y.jsx("span", {
            style: { pointerEvents: "none", flex: 1 },
            children: a,
          })
        : a;
  return y.jsxs(EN, {
    ...l,
    className: sn("chakra-menu__menuitem", l.className),
    children: [
      n && y.jsx(tb, { fontSize: "0.8em", marginEnd: r, children: n }),
      c,
      o && y.jsx(eb, { marginStart: i, children: o }),
    ],
  });
});
fa.displayName = "MenuItem";
var CN = {
    enter: {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      transitionEnd: { visibility: "hidden" },
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.1, easings: "easeOut" },
    },
  },
  TN = je(jR.div),
  nb = Ot(function (t, n) {
    var r, o;
    const { rootProps: i, motionProps: a, ...s } = t,
      { isOpen: l, onTransitionEnd: u, unstable__animationState: c } = Ss(),
      d = yN(s, n),
      f = wN(i),
      h = bs();
    return y.jsx(je.div, {
      ...f,
      __css: {
        zIndex:
          (o = t.zIndex) != null ? o : (r = h.list) == null ? void 0 : r.zIndex,
      },
      children: y.jsx(TN, {
        variants: CN,
        initial: !1,
        animate: l ? "enter" : "exit",
        __css: { outline: 0, ...h.list },
        ...a,
        className: sn("chakra-menu__menu-list", d.className),
        ...d,
        onUpdate: u,
        onAnimationComplete: sx(c.onComplete, d.onAnimationComplete),
      }),
    });
  });
nb.displayName = "MenuList";
var PN = Ot((e, t) => {
    const n = bs();
    return y.jsx(je.button, {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button,
      },
    });
  }),
  rb = Ot((e, t) => {
    const { children: n, as: r, ...o } = e,
      i = vN(o, t),
      a = r || PN;
    return y.jsx(a, {
      ...i,
      className: sn("chakra-menu__menu-button", e.className),
      children: y.jsx(je.span, {
        __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
        children: e.children,
      }),
    });
  });
rb.displayName = "MenuButton";
var ob = Ot(function (t, n) {
  const { children: r, placeholder: o, className: i, ...a } = t;
  return y.jsxs(je.select, {
    ...a,
    ref: n,
    className: sn("chakra-select", i),
    children: [o && y.jsx("option", { value: "", children: o }), r],
  });
});
ob.displayName = "SelectField";
function ON(e, t) {
  const n = {},
    r = {};
  for (const [o, i] of Object.entries(e))
    t.includes(o) ? (n[o] = i) : (r[o] = i);
  return [n, r];
}
var ji = Ot((e, t) => {
  var n;
  const r = fs("Select", e),
    {
      rootProps: o,
      placeholder: i,
      icon: a,
      color: s,
      height: l,
      h: u,
      minH: c,
      minHeight: d,
      iconColor: f,
      iconSize: h,
      ...m
    } = Li(e),
    [v, x] = ON(m, MO),
    g = i3(x),
    p = {
      width: "100%",
      height: "fit-content",
      position: "relative",
      color: s,
    },
    w = {
      paddingEnd: "2rem",
      ...r.field,
      _focus: {
        zIndex: "unset",
        ...((n = r.field) == null ? void 0 : n._focus),
      },
    };
  return y.jsxs(je.div, {
    className: "chakra-select__wrapper",
    __css: p,
    ...v,
    ...o,
    children: [
      y.jsx(ob, {
        ref: t,
        height: u ?? l,
        minH: c ?? d,
        placeholder: i,
        ...g,
        __css: w,
        children: e.children,
      }),
      y.jsx(ib, {
        "data-disabled": ne(g.disabled),
        ...((f || s) && { color: f || s }),
        __css: r.icon,
        ...(h && { fontSize: h }),
        children: a,
      }),
    ],
  });
});
ji.displayName = "Select";
var _N = (e) =>
    y.jsx("svg", {
      viewBox: "0 0 24 24",
      ...e,
      children: y.jsx("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      }),
    }),
  AN = je("div", {
    baseStyle: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }),
  ib = (e) => {
    const { children: t = y.jsx(_N, {}), ...n } = e,
      r = k.cloneElement(t, {
        role: "presentation",
        className: "chakra-select__icon",
        focusable: !1,
        "aria-hidden": !0,
        style: { width: "1em", height: "1em", color: "currentColor" },
      });
    return y.jsx(AN, {
      ...n,
      className: "chakra-select__icon-wrapper",
      children: k.isValidElement(t) ? r : null,
    });
  };
ib.displayName = "SelectIcon";
function cn() {
  const e = () => {
      window.history.back();
    },
    { logout: t } = ki(),
    n = () => {
      t({ logoutParams: { returnTo: window.location.origin } });
    };
  return y.jsx(y.Fragment, {
    children: y.jsxs("header", {
      className: "_header",
      children: [
        y.jsx("img", {
          src: "./config/assets/logotipo.svg",
          alt: "Logotipo do Ministério Kids",
          width: "112px",
          height: "78.84px",
        }),
        y.jsxs("nav", {
          children: [
            y.jsx("button", {
              type: "submit",
              title: "Retornar para página anterior",
              className: "_btn return",
              onClick: e,
              children: y.jsx(mp, {}),
            }),
            y.jsxs(QS, {
              children: [
                y.jsx(rb, {
                  as: "button",
                  className: "_btn menu",
                  title: "Menu lateral",
                  children: y.jsx(N2, {}),
                }),
                y.jsxs(nb, {
                  className: "_menu",
                  children: [
                    y.jsx(fa, {
                      className: "_opt p1",
                      as: "a",
                      href: "./dash",
                      title: "Acessar o painel inicial",
                      children: "Painel",
                    }),
                    y.jsx(fa, {
                      className: "_opt p2",
                      as: "a",
                      href: "./user",
                      title: "Acessar informações da conta",
                      children: "Conta",
                    }),
                    y.jsx(fa, {
                      className: "_opt",
                      as: "a",
                      href: "./notes",
                      title: "Notas e informações",
                      children: "Notas",
                    }),
                    y.jsx(fa, {
                      className: "_opt u",
                      as: "button",
                      title: "Sair da conta",
                      onClick: n,
                      children: "Sair",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function dn() {
  return y.jsx(y.Fragment, {
    children: y.jsxs("footer", {
      className: "_footer",
      children: [
        y.jsx("p", { children: "© 2024 Cat`s Flow" }),
        y.jsxs("span", { children: [y.jsx(D2, {}), "B1.0.8"] }),
      ],
    }),
  });
}
function jN() {
  return y.jsxs("section", {
    className: "_dash",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Painel Inicial • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Painel Inicial • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Painel Inicial • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Painel Inicial • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/dash",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/dash",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsxs("main", {
        className: "_main",
        children: [
          y.jsxs("section", {
            className: "_card chamada",
            children: [
              y.jsx("h2", { children: "Chamada escolar" }),
              y.jsxs("nav", {
                className: "_div",
                children: [
                  y.jsxs("a", {
                    title: "Chamada escolar da turma maternal",
                    href: "./turmas/maternal",
                    className: "_btn icon",
                    children: [y.jsx(R2, {}), "Maternal"],
                  }),
                  y.jsxs("a", {
                    title: "Chamada escolar da turma juniores",
                    href: "./turmas/juniores",
                    className: "_btn icon",
                    children: [y.jsx(I2, {}), "Juniores"],
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card tool",
            children: [
              y.jsx("h2", { children: "Ferramentas" }),
              y.jsxs("nav", {
                className: "_div",
                children: [
                  y.jsxs("a", {
                    title: "Material de estudos",
                    href: "https://drive.google.com/drive/folders/11YmX-xli_EF8_DZ8pm9LPTDzCMquOfe-?usp=drive_link",
                    className: "_btn icon",
                    children: [y.jsx(F2, {}), "Material de estudo"],
                  }),
                  y.jsxs("a", {
                    title: "Informações das crianças",
                    href: "https://drive.google.com/drive/folders/1vzMSk5CtaKO_o64BbAeenDm3d9qhRr8K?usp=drive_link",
                    className: "_btn icon",
                    children: [y.jsx(V2, {}), "Cadastro infantil"],
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card admin",
            children: [
              y.jsx("h2", { children: "Administrador" }),
              y.jsx("nav", {
                className: "_row_div",
                children: y.jsx("a", {
                  title: "Registrar novo aluno",
                  className: "_btn",
                  href: "./registrar/aluno",
                  children: "Registrar aluno",
                }),
              }),
            ],
          }),
        ],
      }),
      y.jsx(dn, {}),
    ],
  });
}
function MN() {
  return y.jsxs("section", {
    className: "_notes",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Notas e Informações • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Notas e Informações • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Notas e Informações • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Notas e Informações • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/notes",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/notes",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsxs("main", {
        className: "_main",
        children: [
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsx("h2", { children: "Novos alunos" }),
              y.jsx("p", {
                className: "_tx",
                children:
                  "Para o cadastro de novos alunos o professor precisa solicitar ao responsavel do aluno que seja feito o cadastramento infantil.",
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsx("h2", { children: "Faltas e presença erradas" }),
              y.jsx("p", {
                className: "_tx",
                children:
                  "Caso aconteça de registrar faltas ou presenças erradas para alunos nas aulas o professor precisa entrar em contato com o lider ministerial informando os nomes dos alunos, turma, dia da aula e se estava presente ou não.",
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsx("h2", { children: "Melhorias e suporte" }),
              y.jsx("p", {
                className: "_tx",
                children:
                  "Caso precise ajuda ou falar sobre algum problema encontrado dentro do sistema entre em contato com o Henry Rodrigues.",
              }),
            ],
          }),
        ],
      }),
      y.jsx(dn, {}),
    ],
  });
}
function RN() {
  const { loginWithRedirect: e } = ki(),
    t = async () => {
      await e({ appState: { returnTo: "/sistema/dash" } });
    };
  return y.jsxs("section", {
    className: "_body _login",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Entrar no sistema • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Entrar no sistema • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Entrar no sistema • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Entrar no sistema • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/login",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/login",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsx("main", {
        className: "_main",
        children: y.jsxs("section", {
          className: "_card",
          children: [
            y.jsx("h2", { children: "Entre no sistema" }),
            y.jsx("button", {
              title: "Fazer login",
              className: "_btn",
              onClick: t,
              children: "Fazer login",
            }),
          ],
        }),
      }),
      y.jsx(dn, {}),
    ],
  });
}
function IN() {
  const { logout: e } = ki(),
    t = () => {
      e({ logoutParams: { returnTo: window.location.origin } });
    },
    { user: n } = ki();
  return n
    ? y.jsxs("section", {
        className: "_body _user",
        children: [
          y.jsxs(ut, {
            children: [
              y.jsx("title", {
                children: "Conta • Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                name: "title",
                content: "Conta • Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "og:title",
                content: "Conta • Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "twitter:title",
                content: "Conta • Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "og:url",
                content: "https://kids.catsflow.com/sistema/user",
              }),
              y.jsx("meta", {
                property: "twitter:url",
                content: "https://kids.catsflow.com/sistema/user",
              }),
            ],
          }),
          y.jsx(cn, {}),
          y.jsx("main", {
            className: "_main",
            children: y.jsxs("section", {
              className: "_card",
              children: [
                y.jsxs("div", {
                  className: "_div",
                  children: [
                    y.jsx("div", {
                      className: "_iconuser _btn orange",
                      children: y.jsx($2, {}),
                    }),
                    y.jsx("h1", { children: n.name }),
                    y.jsx("h4", { children: n.email }),
                  ],
                }),
                y.jsxs("div", {
                  className: "_div",
                  children: [
                    y.jsx("a", {
                      title: "Trocar a senha da conta",
                      className: "_btn",
                      href: "https://ministeriokids.us.auth0.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBZMEYzUm92V21UaVdBNUJSR3dQUVFLWjlzcUVPR1RKTqFurnJlc2V0LXBhc3N3b3Jko3RpZNkgRlVWODlDc2EwWmxkOFZLLXhnRjBRNU5FaGZlNkd4SXmjY2lk2SBzQlRURTB1NVBWcFU2VW54S1lvM0N0enZkT1hDNUtoRw",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Trocar a senha",
                    }),
                    y.jsx("button", {
                      className: "_btn orange",
                      title: "Sair da conta",
                      onClick: t,
                      children: "Sair",
                    }),
                  ],
                }),
              ],
            }),
          }),
          y.jsx(dn, {}),
        ],
      })
    : null;
}
function cc() {
  return y.jsxs("main", {
    className: "load",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", { children: "Sistema Kids | Ministério Kids" }),
          y.jsx("meta", {
            name: "title",
            content: "Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Sistema Kids | Ministério Kids",
          }),
        ],
      }),
      y.jsx("div", { className: "_load loader", id: "loader" }),
    ],
  });
}
const En = ({ component: e }) => {
  const t = GT(e, {
    onRedirecting: () =>
      y.jsx("div", { className: "page-layout", children: y.jsx(cc, {}) }),
  });
  return y.jsx(t, {});
};
function NN() {
  const e = () => {
    window.history.back();
  };
  return y.jsxs("section", {
    className: "_body _np",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Página não encontrada • Sistema Kids | Ministério Kids",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsx("main", {
        className: "_main",
        children: y.jsxs("section", {
          className: "_card _errpage",
          children: [
            y.jsxs("div", {
              className: "_div",
              children: [
                y.jsx("h1", { children: "404" }),
                y.jsx("p", { children: "Parece que a página não existe." }),
              ],
            }),
            y.jsxs("nav", {
              className: "_flex",
              children: [
                y.jsxs("a", {
                  title: "Página inicial",
                  className: "_btn",
                  href: "./",
                  children: [y.jsx(L2, {}), "Home"],
                }),
                y.jsxs("button", {
                  type: "submit",
                  title: "Retornar para página anterior",
                  className: "_btn return",
                  onClick: e,
                  children: [y.jsx(mp, {}), "Voltar"],
                }),
              ],
            }),
          ],
        }),
      }),
      y.jsx(dn, {}),
    ],
  });
}
var ab = { exports: {} };
function DN(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Cd = DN(k),
  LN = qw;
function FN(e, t) {
  for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = Object.getOwnPropertyDescriptor(t, o);
    i && i.configurable && e[o] === void 0 && Object.defineProperty(e, o, i);
  }
  return e;
}
function ch() {
  return (ch =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function VN(e, t) {
  (e.prototype = Object.create(t.prototype)),
    FN((e.prototype.constructor = e), t);
}
function $N(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
  return o;
}
function Bo(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
var BN = function (e, t, n, r, o, i, a, s) {
    if (!e) {
      var l;
      if (t === void 0)
        l = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [n, r, o, i, a, s],
          c = 0;
        (l = new Error(
          t.replace(/%s/g, function () {
            return u[c++];
          })
        )).name = "Invariant Violation";
      }
      throw ((l.framesToPop = 1), l);
    }
  },
  pv = BN;
function mv(e, t, n) {
  if ("selectionStart" in e && "selectionEnd" in e)
    (e.selectionStart = t), (e.selectionEnd = n);
  else {
    var r = e.createTextRange();
    r.collapse(!0),
      r.moveStart("character", t),
      r.moveEnd("character", n - t),
      r.select();
  }
}
function HN(e) {
  var t = 0,
    n = 0;
  if ("selectionStart" in e && "selectionEnd" in e)
    (t = e.selectionStart), (n = e.selectionEnd);
  else {
    var r = document.selection.createRange();
    r.parentElement() === e &&
      ((t = -r.moveStart("character", -e.value.length)),
      (n = -r.moveEnd("character", -e.value.length)));
  }
  return { start: t, end: n, length: n - t };
}
var zN = { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
  UN = "_";
function gv(e, t, n) {
  var r = "",
    o = "",
    i = null,
    a = [];
  if (
    (t === void 0 && (t = UN),
    n == null && (n = zN),
    !e || typeof e != "string")
  )
    return {
      maskChar: t,
      formatChars: n,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: [],
    };
  var s = !1;
  return (
    e.split("").forEach(function (l) {
      s =
        (!s && l === "\\") ||
        (s || !n[l]
          ? (a.push(r.length), r.length === a.length - 1 && (o += l))
          : (i = r.length + 1),
        (r += l),
        !1);
    }),
    {
      maskChar: t,
      formatChars: n,
      prefix: o,
      mask: r,
      lastEditablePosition: i,
      permanents: a,
    }
  );
}
function Vt(e, t) {
  return e.permanents.indexOf(t) !== -1;
}
function dc(e, t, n) {
  var r = e.mask,
    o = e.formatChars;
  if (!n) return !1;
  if (Vt(e, t)) return r[t] === n;
  var i = o[r[t]];
  return new RegExp(i).test(n);
}
function vv(e, t) {
  return t.split("").every(function (n, r) {
    return Vt(e, r) || !dc(e, r, n);
  });
}
function ha(e, t) {
  var n = e.maskChar,
    r = e.prefix;
  if (!n) {
    for (; t.length > r.length && Vt(e, t.length - 1); )
      t = t.slice(0, t.length - 1);
    return t.length;
  }
  for (var o = r.length, i = t.length; i >= r.length; i--) {
    var a = t[i];
    if (!Vt(e, i) && dc(e, i, a)) {
      o = i + 1;
      break;
    }
  }
  return o;
}
function sb(e, t) {
  return ha(e, t) === e.mask.length;
}
function Gn(e, t) {
  var n = e.maskChar,
    r = e.mask,
    o = e.prefix;
  if (!n) {
    for (
      (t = dh(e, "", t, 0)).length < o.length && (t = o);
      t.length < r.length && Vt(e, t.length);

    )
      t += r[t.length];
    return t;
  }
  if (t) return dh(e, Gn(e, ""), t, 0);
  for (var i = 0; i < r.length; i++) Vt(e, i) ? (t += r[i]) : (t += n);
  return t;
}
function WN(e, t, n, r) {
  var o = n + r,
    i = e.maskChar,
    a = e.mask,
    s = e.prefix,
    l = t.split("");
  if (i)
    return l
      .map(function (c, d) {
        return d < n || o <= d ? c : Vt(e, d) ? a[d] : i;
      })
      .join("");
  for (var u = o; u < l.length; u++) Vt(e, u) && (l[u] = "");
  return (
    (n = Math.max(s.length, n)), l.splice(n, o - n), (t = l.join("")), Gn(e, t)
  );
}
function dh(e, t, n, r) {
  var o = e.mask,
    i = e.maskChar,
    a = e.prefix,
    s = n.split(""),
    l = sb(e, t);
  return (
    !i && r > t.length && (t += o.slice(t.length, r)),
    s.every(function (u) {
      for (; (h = u), Vt(e, (f = r)) && h !== o[f]; ) {
        if (
          (r >= t.length && (t += o[r]),
          (c = u),
          (d = r),
          i && Vt(e, d) && c === i)
        )
          return !0;
        if (++r >= o.length) return !1;
      }
      var c, d, f, h;
      return (
        (!dc(e, r, u) && u !== i) ||
        (r < t.length
          ? (t =
              i || l || r < a.length
                ? t.slice(0, r) + u + t.slice(r + 1)
                : ((t = t.slice(0, r) + u + t.slice(r)), Gn(e, t)))
          : i || (t += u),
        ++r < o.length)
      );
    }),
    t
  );
}
function KN(e, t, n, r) {
  var o = e.mask,
    i = e.maskChar,
    a = n.split(""),
    s = r;
  return (
    a.every(function (l) {
      for (; (c = l), Vt(e, (u = r)) && c !== o[u]; )
        if (++r >= o.length) return !1;
      var u, c;
      return (dc(e, r, l) || l === i) && r++, r < o.length;
    }),
    r - s
  );
}
function ZN(e, t) {
  for (var n = t; 0 <= n; --n) if (!Vt(e, n)) return n;
  return null;
}
function Aa(e, t) {
  for (var n = e.mask, r = t; r < n.length; ++r) if (!Vt(e, r)) return r;
  return null;
}
function Td(e) {
  return e || e === 0 ? e + "" : "";
}
function GN(e, t, n, r, o) {
  var i = e.mask,
    a = e.prefix,
    s = e.lastEditablePosition,
    l = t,
    u = "",
    c = 0,
    d = 0,
    f = Math.min(o.start, n.start);
  return (
    n.end > o.start
      ? (d = (c = KN(e, r, (u = l.slice(o.start, n.end)), f)) ? o.length : 0)
      : l.length < r.length && (d = r.length - l.length),
    (l = r),
    d &&
      (d === 1 &&
        !o.length &&
        (f = o.start === n.start ? Aa(e, n.start) : ZN(e, n.start)),
      (l = WN(e, l, f, d))),
    (l = dh(e, l, u, f)),
    (f += c) >= i.length
      ? (f = i.length)
      : f < a.length && !c
      ? (f = a.length)
      : f >= a.length && f < s && c && (f = Aa(e, f)),
    u || (u = null),
    { value: (l = Gn(e, l)), enteredString: u, selection: { start: f, end: f } }
  );
}
function YN() {
  var e = new RegExp("windows", "i"),
    t = new RegExp("phone", "i"),
    n = navigator.userAgent;
  return e.test(n) && t.test(n);
}
function mt(e) {
  return typeof e == "function";
}
function XN() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame
  );
}
function lb() {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame
  );
}
function yv(e) {
  return (
    lb()
      ? XN()
      : function () {
          return setTimeout(e, 1e3 / 60);
        }
  )(e);
}
function Pd(e) {
  (lb() || clearTimeout)(e);
}
var qN = (function (e) {
    function t(r) {
      var o = e.call(this, r) || this;
      (o.focused = !1),
        (o.mounted = !1),
        (o.previousSelection = null),
        (o.selectionDeferId = null),
        (o.saveSelectionLoopDeferId = null),
        (o.saveSelectionLoop = function () {
          (o.previousSelection = o.getSelection()),
            (o.saveSelectionLoopDeferId = yv(o.saveSelectionLoop));
        }),
        (o.runSaveSelectionLoop = function () {
          o.saveSelectionLoopDeferId === null && o.saveSelectionLoop();
        }),
        (o.stopSaveSelectionLoop = function () {
          o.saveSelectionLoopDeferId !== null &&
            (Pd(o.saveSelectionLoopDeferId),
            (o.saveSelectionLoopDeferId = null),
            (o.previousSelection = null));
        }),
        (o.getInputDOMNode = function () {
          if (!o.mounted) return null;
          var m = LN.findDOMNode(Bo(Bo(o))),
            v = typeof window < "u" && m instanceof window.Element;
          if (m && !v) return null;
          if ((m.nodeName !== "INPUT" && (m = m.querySelector("input")), !m))
            throw new Error(
              "react-input-mask: inputComponent doesn't contain input node"
            );
          return m;
        }),
        (o.getInputValue = function () {
          var m = o.getInputDOMNode();
          return m ? m.value : null;
        }),
        (o.setInputValue = function (m) {
          var v = o.getInputDOMNode();
          v && ((o.value = m), (v.value = m));
        }),
        (o.setCursorToEnd = function () {
          var m = ha(o.maskOptions, o.value),
            v = Aa(o.maskOptions, m);
          v !== null && o.setCursorPosition(v);
        }),
        (o.setSelection = function (m, v, x) {
          x === void 0 && (x = {});
          var g = o.getInputDOMNode(),
            p = o.isFocused();
          g &&
            p &&
            (x.deferred || mv(g, m, v),
            o.selectionDeferId !== null && Pd(o.selectionDeferId),
            (o.selectionDeferId = yv(function () {
              (o.selectionDeferId = null), mv(g, m, v);
            })),
            (o.previousSelection = {
              start: m,
              end: v,
              length: Math.abs(v - m),
            }));
        }),
        (o.getSelection = function () {
          return HN(o.getInputDOMNode());
        }),
        (o.getCursorPosition = function () {
          return o.getSelection().start;
        }),
        (o.setCursorPosition = function (m) {
          o.setSelection(m, m);
        }),
        (o.isFocused = function () {
          return o.focused;
        }),
        (o.getBeforeMaskedValueChangeConfig = function () {
          var m = o.maskOptions,
            v = m.mask,
            x = m.maskChar,
            g = m.permanents,
            p = m.formatChars;
          return {
            mask: v,
            maskChar: x,
            permanents: g,
            alwaysShowMask: !!o.props.alwaysShowMask,
            formatChars: p,
          };
        }),
        (o.isInputAutofilled = function (m, v, x, g) {
          var p = o.getInputDOMNode();
          try {
            if (p.matches(":-webkit-autofill")) return !0;
          } catch {}
          return !o.focused || (g.end < x.length && v.end === m.length);
        }),
        (o.onChange = function (m) {
          var v = Bo(Bo(o)).beforePasteState,
            x = Bo(Bo(o)).previousSelection,
            g = o.props.beforeMaskedValueChange,
            p = o.getInputValue(),
            w = o.value,
            S = o.getSelection();
          o.isInputAutofilled(p, S, w, x) &&
            ((w = Gn(o.maskOptions, "")),
            (x = { start: 0, end: 0, length: 0 })),
            v &&
              ((x = v.selection),
              (w = v.value),
              (S = {
                start: x.start + p.length,
                end: x.start + p.length,
                length: 0,
              }),
              (p = w.slice(0, x.start) + p + w.slice(x.end)),
              (o.beforePasteState = null));
          var C = GN(o.maskOptions, p, S, w, x),
            _ = C.enteredString,
            E = C.selection,
            A = C.value;
          if (mt(g)) {
            var R = g(
              { value: A, selection: E },
              { value: w, selection: x },
              _,
              o.getBeforeMaskedValueChangeConfig()
            );
            (A = R.value), (E = R.selection);
          }
          o.setInputValue(A),
            mt(o.props.onChange) && o.props.onChange(m),
            o.isWindowsPhoneBrowser
              ? o.setSelection(E.start, E.end, { deferred: !0 })
              : o.setSelection(E.start, E.end);
        }),
        (o.onFocus = function (m) {
          var v = o.props.beforeMaskedValueChange,
            x = o.maskOptions,
            g = x.mask,
            p = x.prefix;
          if (((o.focused = !0), (o.mounted = !0), g)) {
            if (o.value)
              ha(o.maskOptions, o.value) < o.maskOptions.mask.length &&
                o.setCursorToEnd();
            else {
              var w = Gn(o.maskOptions, p),
                S = Gn(o.maskOptions, w),
                C = ha(o.maskOptions, S),
                _ = Aa(o.maskOptions, C),
                E = { start: _, end: _ };
              if (mt(v)) {
                var A = v(
                  { value: S, selection: E },
                  { value: o.value, selection: null },
                  null,
                  o.getBeforeMaskedValueChangeConfig()
                );
                (S = A.value), (E = A.selection);
              }
              var R = S !== o.getInputValue();
              R && o.setInputValue(S),
                R && mt(o.props.onChange) && o.props.onChange(m),
                o.setSelection(E.start, E.end);
            }
            o.runSaveSelectionLoop();
          }
          mt(o.props.onFocus) && o.props.onFocus(m);
        }),
        (o.onBlur = function (m) {
          var v = o.props.beforeMaskedValueChange,
            x = o.maskOptions.mask;
          if (
            (o.stopSaveSelectionLoop(),
            (o.focused = !1),
            x && !o.props.alwaysShowMask && vv(o.maskOptions, o.value))
          ) {
            var g = "";
            mt(v) &&
              (g = v(
                { value: g, selection: null },
                { value: o.value, selection: o.previousSelection },
                null,
                o.getBeforeMaskedValueChangeConfig()
              ).value);
            var p = g !== o.getInputValue();
            p && o.setInputValue(g),
              p && mt(o.props.onChange) && o.props.onChange(m);
          }
          mt(o.props.onBlur) && o.props.onBlur(m);
        }),
        (o.onMouseDown = function (m) {
          if (!o.focused && document.addEventListener) {
            (o.mouseDownX = m.clientX),
              (o.mouseDownY = m.clientY),
              (o.mouseDownTime = new Date().getTime());
            var v = function x(g) {
              if ((document.removeEventListener("mouseup", x), o.focused)) {
                var p = Math.abs(g.clientX - o.mouseDownX),
                  w = Math.abs(g.clientY - o.mouseDownY),
                  S = Math.max(p, w),
                  C = new Date().getTime() - o.mouseDownTime;
                ((S <= 10 && C <= 200) || (S <= 5 && C <= 300)) &&
                  o.setCursorToEnd();
              }
            };
            document.addEventListener("mouseup", v);
          }
          mt(o.props.onMouseDown) && o.props.onMouseDown(m);
        }),
        (o.onPaste = function (m) {
          mt(o.props.onPaste) && o.props.onPaste(m),
            m.defaultPrevented ||
              ((o.beforePasteState = {
                value: o.getInputValue(),
                selection: o.getSelection(),
              }),
              o.setInputValue(""));
        }),
        (o.handleRef = function (m) {
          o.props.children == null &&
            mt(o.props.inputRef) &&
            o.props.inputRef(m);
        });
      var i = r.mask,
        a = r.maskChar,
        s = r.formatChars,
        l = r.alwaysShowMask,
        u = r.beforeMaskedValueChange,
        c = r.defaultValue,
        d = r.value;
      (o.maskOptions = gv(i, a, s)),
        c == null && (c = ""),
        d == null && (d = c);
      var f = Td(d);
      if (
        o.maskOptions.mask &&
        (l || f) &&
        ((f = Gn(o.maskOptions, f)), mt(u))
      ) {
        var h = r.value;
        r.value == null && (h = c),
          (f = u(
            { value: f, selection: null },
            { value: (h = Td(h)), selection: null },
            null,
            o.getBeforeMaskedValueChangeConfig()
          ).value);
      }
      return (o.value = f), o;
    }
    VN(t, e);
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.getInputDOMNode() &&
            ((this.isWindowsPhoneBrowser = YN()),
            this.maskOptions.mask &&
              this.getInputValue() !== this.value &&
              this.setInputValue(this.value));
      }),
      (n.componentDidUpdate = function () {
        var r = this.previousSelection,
          o = this.props,
          i = o.beforeMaskedValueChange,
          a = o.alwaysShowMask,
          s = o.mask,
          l = o.maskChar,
          u = o.formatChars,
          c = this.maskOptions,
          d = a || this.isFocused(),
          f = this.props.value != null,
          h = f ? Td(this.props.value) : this.value,
          m = r ? r.start : null;
        if (((this.maskOptions = gv(s, l, u)), this.maskOptions.mask)) {
          !c.mask && this.isFocused() && this.runSaveSelectionLoop();
          var v = this.maskOptions.mask && this.maskOptions.mask !== c.mask;
          if (
            (c.mask || f || (h = this.getInputValue()),
            (v || (this.maskOptions.mask && (h || d))) &&
              (h = Gn(this.maskOptions, h)),
            v)
          ) {
            var x = ha(this.maskOptions, h);
            (m === null || x < m) &&
              (m = sb(this.maskOptions, h) ? x : Aa(this.maskOptions, x));
          }
          !this.maskOptions.mask ||
            !vv(this.maskOptions, h) ||
            d ||
            (f && this.props.value) ||
            (h = "");
          var g = { start: m, end: m };
          if (mt(i)) {
            var p = i(
              { value: h, selection: g },
              { value: this.value, selection: this.previousSelection },
              null,
              this.getBeforeMaskedValueChangeConfig()
            );
            (h = p.value), (g = p.selection);
          }
          this.value = h;
          var w = this.getInputValue() !== this.value;
          w
            ? (this.setInputValue(this.value), this.forceUpdate())
            : v && this.forceUpdate();
          var S = !1;
          g.start != null &&
            g.end != null &&
            (S = !r || r.start !== g.start || r.end !== g.end),
            (S || w) && this.setSelection(g.start, g.end);
        } else c.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
      }),
      (n.componentWillUnmount = function () {
        (this.mounted = !1),
          this.selectionDeferId !== null && Pd(this.selectionDeferId),
          this.stopSaveSelectionLoop();
      }),
      (n.render = function () {
        var r,
          o = this.props,
          i =
            (o.mask,
            o.alwaysShowMask,
            o.maskChar,
            o.formatChars,
            o.inputRef,
            o.beforeMaskedValueChange,
            o.children),
          a = $N(o, [
            "mask",
            "alwaysShowMask",
            "maskChar",
            "formatChars",
            "inputRef",
            "beforeMaskedValueChange",
            "children",
          ]);
        if (i) {
          mt(i) || pv(!1);
          var s = [
              "onChange",
              "onPaste",
              "onMouseDown",
              "onFocus",
              "onBlur",
              "value",
              "disabled",
              "readOnly",
            ],
            l = ch({}, a);
          s.forEach(function (c) {
            return delete l[c];
          }),
            (r = i(l)),
            s.filter(function (c) {
              return r.props[c] != null && r.props[c] !== a[c];
            }).length && pv(!1);
        } else r = Cd.createElement("input", ch({ ref: this.handleRef }, a));
        var u = { onFocus: this.onFocus, onBlur: this.onBlur };
        return (
          this.maskOptions.mask &&
            (a.disabled ||
              a.readOnly ||
              ((u.onChange = this.onChange),
              (u.onPaste = this.onPaste),
              (u.onMouseDown = this.onMouseDown)),
            a.value != null && (u.value = this.value)),
          (r = Cd.cloneElement(r, u))
        );
      }),
      t
    );
  })(Cd.Component),
  JN = qN;
ab.exports = JN;
var QN = ab.exports;
const eD = _o(QN);
function ub(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: tD } = Object.prototype,
  { getPrototypeOf: rm } = Object,
  fc = ((e) => (t) => {
    const n = tD.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Bn = (e) => ((e = e.toLowerCase()), (t) => fc(t) === e),
  hc = (e) => (t) => typeof t === e,
  { isArray: Vi } = Array,
  rs = hc("undefined");
function nD(e) {
  return (
    e !== null &&
    !rs(e) &&
    e.constructor !== null &&
    !rs(e.constructor) &&
    rn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const cb = Bn("ArrayBuffer");
function rD(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && cb(e.buffer)),
    t
  );
}
const oD = hc("string"),
  rn = hc("function"),
  db = hc("number"),
  pc = (e) => e !== null && typeof e == "object",
  iD = (e) => e === !0 || e === !1,
  Pl = (e) => {
    if (fc(e) !== "object") return !1;
    const t = rm(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  aD = Bn("Date"),
  sD = Bn("File"),
  lD = Bn("Blob"),
  uD = Bn("FileList"),
  cD = (e) => pc(e) && rn(e.pipe),
  dD = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (rn(e.append) &&
          ((t = fc(e)) === "formdata" ||
            (t === "object" &&
              rn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  fD = Bn("URLSearchParams"),
  hD = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ks(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Vi(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function fb(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const hb =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  pb = (e) => !rs(e) && e !== hb;
function fh() {
  const { caseless: e } = (pb(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && fb(t, o)) || o;
      Pl(t[i]) && Pl(r)
        ? (t[i] = fh(t[i], r))
        : Pl(r)
        ? (t[i] = fh({}, r))
        : Vi(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ks(arguments[r], n);
  return t;
}
const pD = (e, t, n, { allOwnKeys: r } = {}) => (
    ks(
      t,
      (o, i) => {
        n && rn(o) ? (e[i] = ub(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  mD = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  gD = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  vD = (e, t, n, r) => {
    let o, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && rm(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  yD = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  wD = (e) => {
    if (!e) return null;
    if (Vi(e)) return e;
    let t = e.length;
    if (!db(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  xD = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && rm(Uint8Array)),
  SD = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  bD = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  kD = Bn("HTMLFormElement"),
  ED = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  wv = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  CD = Bn("RegExp"),
  mb = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ks(n, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  TD = (e) => {
    mb(e, (t, n) => {
      if (rn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (rn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  PD = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Vi(e) ? r(e) : r(String(e).split(t)), n;
  },
  OD = () => {},
  _D = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Od = "abcdefghijklmnopqrstuvwxyz",
  xv = "0123456789",
  gb = { DIGIT: xv, ALPHA: Od, ALPHA_DIGIT: Od + Od.toUpperCase() + xv },
  AD = (e = 16, t = gb.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function jD(e) {
  return !!(
    e &&
    rn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const MD = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (pc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Vi(r) ? [] : {};
            return (
              ks(r, (a, s) => {
                const l = n(a, o + 1);
                !rs(l) && (i[s] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  RD = Bn("AsyncFunction"),
  ID = (e) => e && (pc(e) || rn(e)) && rn(e.then) && rn(e.catch),
  I = {
    isArray: Vi,
    isArrayBuffer: cb,
    isBuffer: nD,
    isFormData: dD,
    isArrayBufferView: rD,
    isString: oD,
    isNumber: db,
    isBoolean: iD,
    isObject: pc,
    isPlainObject: Pl,
    isUndefined: rs,
    isDate: aD,
    isFile: sD,
    isBlob: lD,
    isRegExp: CD,
    isFunction: rn,
    isStream: cD,
    isURLSearchParams: fD,
    isTypedArray: xD,
    isFileList: uD,
    forEach: ks,
    merge: fh,
    extend: pD,
    trim: hD,
    stripBOM: mD,
    inherits: gD,
    toFlatObject: vD,
    kindOf: fc,
    kindOfTest: Bn,
    endsWith: yD,
    toArray: wD,
    forEachEntry: SD,
    matchAll: bD,
    isHTMLForm: kD,
    hasOwnProperty: wv,
    hasOwnProp: wv,
    reduceDescriptors: mb,
    freezeMethods: TD,
    toObjectSet: PD,
    toCamelCase: ED,
    noop: OD,
    toFiniteNumber: _D,
    findKey: fb,
    global: hb,
    isContextDefined: pb,
    ALPHABET: gb,
    generateString: AD,
    isSpecCompliantForm: jD,
    toJSONObject: MD,
    isAsyncFn: RD,
    isThenable: ID,
  };
function ie(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
I.inherits(ie, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: I.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const vb = ie.prototype,
  yb = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  yb[e] = { value: e };
});
Object.defineProperties(ie, yb);
Object.defineProperty(vb, "isAxiosError", { value: !0 });
ie.from = (e, t, n, r, o, i) => {
  const a = Object.create(vb);
  return (
    I.toFlatObject(
      e,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    ie.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const ND = null;
function hh(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function wb(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sv(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = wb(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function DD(e) {
  return I.isArray(e) && !e.some(hh);
}
const LD = I.toFlatObject(I, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function mc(e, t, n) {
  if (!I.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = I.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !I.isUndefined(x[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (I.isDate(m)) return m.toISOString();
    if (!l && I.isBlob(m))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(m) || I.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, v, x) {
    let g = m;
    if (m && !x && typeof m == "object") {
      if (I.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (I.isArray(m) && DD(m)) ||
        ((I.isFileList(m) || I.endsWith(v, "[]")) && (g = I.toArray(m)))
      )
        return (
          (v = wb(v)),
          g.forEach(function (w, S) {
            !(I.isUndefined(w) || w === null) &&
              t.append(
                a === !0 ? Sv([v], S, i) : a === null ? v : v + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return hh(m) ? !0 : (t.append(Sv(x, v, i), u(m)), !1);
  }
  const d = [],
    f = Object.assign(LD, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: hh,
    });
  function h(m, v) {
    if (!I.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(m),
        I.forEach(m, function (g, p) {
          (!(I.isUndefined(g) || g === null) &&
            o.call(t, g, I.isString(p) ? p.trim() : p, v, f)) === !0 &&
            h(g, v ? v.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!I.isObject(e)) throw new TypeError("data must be an object");
  return h(e), t;
}
function bv(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function om(e, t) {
  (this._pairs = []), e && mc(e, this, t);
}
const xb = om.prototype;
xb.append = function (t, n) {
  this._pairs.push([t, n]);
};
xb.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, bv);
      }
    : bv;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function FD(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Sb(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || FD,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = I.isURLSearchParams(t) ? t.toString() : new om(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class kv {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    I.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const bb = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  VD = typeof URLSearchParams < "u" ? URLSearchParams : om,
  $D = typeof FormData < "u" ? FormData : null,
  BD = typeof Blob < "u" ? Blob : null,
  HD = {
    isBrowser: !0,
    classes: { URLSearchParams: VD, FormData: $D, Blob: BD },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  kb = typeof window < "u" && typeof document < "u",
  zD = ((e) => kb && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  UD =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  WD = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: kb,
        hasStandardBrowserEnv: zD,
        hasStandardBrowserWebWorkerEnv: UD,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rn = { ...WD, ...HD };
function KD(e, t) {
  return mc(
    e,
    new Rn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Rn.isNode && I.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function ZD(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function GD(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Eb(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a),
      l = i >= n.length;
    return (
      (a = !a && I.isArray(o) ? o.length : a),
      l
        ? (I.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !I.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && I.isArray(o[a]) && (o[a] = GD(o[a])),
          !s)
    );
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return (
      I.forEachEntry(e, (r, o) => {
        t(ZD(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function YD(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const im = {
  transitional: bb,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = I.isObject(t);
      if ((i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t)))
        return o ? JSON.stringify(Eb(t)) : t;
      if (
        I.isArrayBuffer(t) ||
        I.isBuffer(t) ||
        I.isStream(t) ||
        I.isFile(t) ||
        I.isBlob(t)
      )
        return t;
      if (I.isArrayBufferView(t)) return t.buffer;
      if (I.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return KD(t, this.formSerializer).toString();
        if ((s = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return mc(
            s ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), YD(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || im.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && I.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError"
              ? ie.from(s, ie.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Rn.classes.FormData, Blob: Rn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  im.headers[e] = {};
});
const am = im,
  XD = I.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  qD = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && XD[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ev = Symbol("internals");
function aa(e) {
  return e && String(e).trim().toLowerCase();
}
function Ol(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Ol) : String(e);
}
function JD(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const QD = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _d(e, t, n, r, o) {
  if (I.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!I.isString(t))) {
    if (I.isString(r)) return t.indexOf(r) !== -1;
    if (I.isRegExp(r)) return r.test(t);
  }
}
function eL(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function tL(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class gc {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, l, u) {
      const c = aa(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = Ol(s));
    }
    const a = (s, l) => I.forEach(s, (u, c) => i(u, c, l));
    return (
      I.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : I.isString(t) && (t = t.trim()) && !QD(t)
        ? a(qD(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = aa(t)), t)) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return JD(o);
        if (I.isFunction(n)) return n.call(this, o, r);
        if (I.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = aa(t)), t)) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _d(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = aa(a)), a)) {
        const s = I.findKey(r, a);
        s && (!n || _d(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return I.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || _d(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      I.forEach(this, (o, i) => {
        const a = I.findKey(r, i);
        if (a) {
          (n[a] = Ol(o)), delete n[i];
          return;
        }
        const s = t ? eL(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = Ol(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      I.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && I.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Ev] = this[Ev] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = aa(a);
      r[s] || (tL(o, a), (r[s] = !0));
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
gc.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
I.reduceDescriptors(gc.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
I.freezeMethods(gc);
const rr = gc;
function Ad(e, t) {
  const n = this || am,
    r = t || n,
    o = rr.from(r.headers);
  let i = r.data;
  return (
    I.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Cb(e) {
  return !!(e && e.__CANCEL__);
}
function Es(e, t, n) {
  ie.call(this, e ?? "canceled", ie.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
I.inherits(Es, ie, { __CANCEL__: !0 });
function nL(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ie(
          "Request failed with status code " + n.status,
          [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const rL = Rn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const a = [e + "=" + encodeURIComponent(t)];
        I.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          I.isString(r) && a.push("path=" + r),
          I.isString(o) && a.push("domain=" + o),
          i === !0 && a.push("secure"),
          (document.cookie = a.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function oL(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function iL(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tb(e, t) {
  return e && !oL(t) ? iL(e, t) : t;
}
const aL = Rn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const s = I.isString(a) ? o(a) : a;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function sL(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function lL(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      a || (a = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const h = c && u - c;
      return h ? Math.round((f * 1e3) / h) : void 0;
    }
  );
}
function Cv(e, t) {
  let n = 0;
  const r = lL(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      s = i - n,
      l = r(s),
      u = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const uL = typeof XMLHttpRequest < "u",
  cL =
    uL &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = rr.from(e.headers).normalize();
        let { responseType: a, withXSRFToken: s } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let c;
        if (I.isFormData(o)) {
          if (Rn.hasStandardBrowserEnv || Rn.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [v, ...x] = c
              ? c
                  .split(";")
                  .map((g) => g.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([v || "multipart/form-data", ...x].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(v + ":" + x));
        }
        const f = Tb(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), Sb(f, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function h() {
          if (!d) return;
          const v = rr.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            g = {
              data:
                !a || a === "text" || a === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: v,
              config: e,
              request: d,
            };
          nL(
            function (w) {
              n(w), u();
            },
            function (w) {
              r(w), u();
            },
            g
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = h)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (d.onabort = function () {
            d &&
              (r(new ie("Request aborted", ie.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new ie("Network Error", ie.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let x = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || bb;
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
              r(
                new ie(
                  x,
                  g.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Rn.hasStandardBrowserEnv &&
            (s && I.isFunction(s) && (s = s(e)), s || (s !== !1 && aL(f))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && rL.read(e.xsrfCookieName);
          v && i.set(e.xsrfHeaderName, v);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            I.forEach(i.toJSON(), function (x, g) {
              d.setRequestHeader(g, x);
            }),
          I.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          a && a !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", Cv(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", Cv(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (v) => {
              d &&
                (r(!v || v.type ? new Es(null, e, d) : v),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const m = sL(f);
        if (m && Rn.protocols.indexOf(m) === -1) {
          r(new ie("Unsupported protocol " + m + ":", ie.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  ph = { http: ND, xhr: cL };
I.forEach(ph, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tv = (e) => `- ${e}`,
  dL = (e) => I.isFunction(e) || e === null || e === !1,
  Pb = {
    getAdapter: (e) => {
      e = I.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let a;
        if (
          ((r = n),
          !dL(n) && ((r = ph[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ie(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, l]) =>
            `adapter ${s} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(Tv).join(`
`)
            : " " + Tv(i[0])
          : "as no adapter specified";
        throw new ie(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ph,
  };
function jd(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Es(null, e);
}
function Pv(e) {
  return (
    jd(e),
    (e.headers = rr.from(e.headers)),
    (e.data = Ad.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Pb.getAdapter(e.adapter || am.adapter)(e).then(
      function (r) {
        return (
          jd(e),
          (r.data = Ad.call(e, e.transformResponse, r)),
          (r.headers = rr.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Cb(r) ||
            (jd(e),
            r &&
              r.response &&
              ((r.response.data = Ad.call(e, e.transformResponse, r.response)),
              (r.response.headers = rr.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ov = (e) => (e instanceof rr ? { ...e } : e);
function Mi(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return I.isPlainObject(u) && I.isPlainObject(c)
      ? I.merge.call({ caseless: d }, u, c)
      : I.isPlainObject(c)
      ? I.merge({}, c)
      : I.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!I.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, c) => o(Ov(u), Ov(c), !0),
  };
  return (
    I.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      (I.isUndefined(f) && d !== s) || (n[c] = f);
    }),
    n
  );
}
const Ob = "1.6.8",
  sm = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    sm[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const _v = {};
sm.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      Ob +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ie(
        o(a, " has been removed" + (n ? " in " + n : "")),
        ie.ERR_DEPRECATED
      );
    return (
      n &&
        !_v[a] &&
        ((_v[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function fL(e, t, n) {
  if (typeof e != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const s = e[i],
        l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new ie("option " + i + " must be " + l, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ie("Unknown option " + i, ie.ERR_BAD_OPTION);
  }
}
const mh = { assertOptions: fL, validators: sm },
  mr = mh.validators;
class wu {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new kv(), response: new kv() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Mi(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      mh.assertOptions(
        r,
        {
          silentJSONParsing: mr.transitional(mr.boolean),
          forcedJSONParsing: mr.transitional(mr.boolean),
          clarifyTimeoutError: mr.transitional(mr.boolean),
        },
        !1
      ),
      o != null &&
        (I.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : mh.assertOptions(
              o,
              { encode: mr.function, serialize: mr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = i && I.merge(i.common, i[n.method]);
    i &&
      I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = rr.concat(a, i));
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), s.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const m = [Pv.bind(this), void 0];
      for (
        m.unshift.apply(m, s),
          m.push.apply(m, u),
          f = m.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    f = s.length;
    let h = n;
    for (d = 0; d < f; ) {
      const m = s[d++],
        v = s[d++];
      try {
        h = m(h);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      c = Pv.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Mi(this.defaults, t);
    const n = Tb(t.baseURL, t.url);
    return Sb(n, t.params, t.paramsSerializer);
  }
}
I.forEach(["delete", "get", "head", "options"], function (t) {
  wu.prototype[t] = function (n, r) {
    return this.request(
      Mi(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
I.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, s) {
      return this.request(
        Mi(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (wu.prototype[t] = n()), (wu.prototype[t + "Form"] = n(!0));
});
const _l = wu;
class lm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, s) {
        r.reason || ((r.reason = new Es(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new lm(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const hL = lm;
function pL(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function mL(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const gh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(gh).forEach(([e, t]) => {
  gh[t] = e;
});
const gL = gh;
function _b(e) {
  const t = new _l(e),
    n = ub(_l.prototype.request, t);
  return (
    I.extend(n, _l.prototype, t, { allOwnKeys: !0 }),
    I.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return _b(Mi(e, o));
    }),
    n
  );
}
const Re = _b(am);
Re.Axios = _l;
Re.CanceledError = Es;
Re.CancelToken = hL;
Re.isCancel = Cb;
Re.VERSION = Ob;
Re.toFormData = mc;
Re.AxiosError = ie;
Re.Cancel = Re.CanceledError;
Re.all = function (t) {
  return Promise.all(t);
};
Re.spread = pL;
Re.isAxiosError = mL;
Re.mergeConfig = Mi;
Re.AxiosHeaders = rr;
Re.formToJSON = (e) => Eb(I.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = Pb.getAdapter;
Re.HttpStatusCode = gL;
Re.default = Re;
function vL() {
  const e = {
      nome: "",
      responsavel: "",
      dataNascimento: "",
      observacao: "",
      turma: "",
    },
    [t, n] = k.useState(e),
    [r, o] = k.useState({ status: "", mensagem: "" }),
    i = (l) => {
      const { name: u, value: c } = l.target;
      n({ ...t, [u]: c });
    },
    a = async (l) => {
      l.preventDefault();
      const u = s(t.dataNascimento);
      try {
        (
          await Re.post("http://localhost:3000/alunos", {
            ...t,
            dataNascimento: u,
          })
        ).status === 200
          ? (o({ status: "success", mensagem: "Aluno adicionado com sucesso" }),
            n(e))
          : o({ status: "error", mensagem: "Erro ao adicionar aluno" });
      } catch (c) {
        console.error("Erro ao enviar requisição:", c),
          o({ status: "error", mensagem: "Erro ao adicionar aluno" });
      }
    },
    s = (l) => {
      const [u, c, d] = l.split("/");
      return `${d}-${c.padStart(2, "0")}-${u.padStart(2, "0")}`;
    };
  return y.jsxs(y.Fragment, {
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Registrar novo aluno • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Registrar novo aluno • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Registrar novo aluno • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Registrar novo aluno • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/registrar/aluno",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/registrar/aluno",
          }),
        ],
      }),
      y.jsxs("section", {
        className: "_body _cadaluno",
        children: [
          y.jsx(cn, {}),
          y.jsxs("main", {
            className: "_main",
            children: [
              y.jsx("div", {
                className: "error-container",
                children:
                  r.status &&
                  y.jsxs(lc, {
                    status: r.status === "success" ? "success" : "error",
                    className: "_card alert",
                    children: [
                      y.jsx("div", {
                        children: r.status === "success" ? "✅" : "❌",
                      }),
                      y.jsx("p", { children: r.mensagem }),
                    ],
                  }),
              }),
              y.jsxs("section", {
                className: "_card _ca",
                children: [
                  y.jsx("h2", { children: "Cadastrar aluno" }),
                  y.jsxs("form", {
                    className: "_div",
                    onSubmit: a,
                    children: [
                      y.jsxs("div", {
                        className: "_div",
                        children: [
                          y.jsx("input", {
                            className: "_input",
                            type: "text",
                            placeholder: "Nome do aluno",
                            name: "nome",
                            value: t.nome,
                            onChange: i,
                            required: !0,
                          }),
                          y.jsx("input", {
                            className: "_input",
                            type: "text",
                            placeholder: "Nome do responsável",
                            name: "responsavel",
                            value: t.responsavel,
                            onChange: i,
                            required: !0,
                          }),
                          y.jsx(eD, {
                            className: "_input",
                            type: "text",
                            mask: "99/99/9999",
                            placeholder: "Data de nascimento",
                            name: "dataNascimento",
                            value: t.dataNascimento,
                            onChange: i,
                            required: !0,
                          }),
                          y.jsx("textarea", {
                            className: "_textarea",
                            name: "observacao",
                            placeholder: "Observação",
                            value: t.observacao,
                            onChange: i,
                          }),
                          y.jsx("label", {
                            className: "_select",
                            htmlFor: "selturma",
                            children: y.jsxs(ji, {
                              className: "camp",
                              name: "turma",
                              title: "Turma do aluno",
                              value: t.turma,
                              onChange: i,
                              required: !0,
                              children: [
                                y.jsx("option", {
                                  value: "",
                                  hidden: !0,
                                  children: "Selecionar turma",
                                }),
                                y.jsx("option", {
                                  value: "Maternal",
                                  children: "Maternal",
                                }),
                                y.jsx("option", {
                                  value: "Juniores",
                                  children: "Juniores",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      y.jsx("button", {
                        title: "Cadastrar aluno",
                        className: "_btn orange",
                        type: "submit",
                        children: "Cadastrar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsx(dn, {}),
        ],
      }),
    ],
  });
}
function um() {
  return y.jsx("main", {
    className: "_loading",
    children: y.jsx("div", { className: "_load loader", id: "loader" }),
  });
}
function yL() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0),
    [o, i] = k.useState(""),
    [a, s] = k.useState(""),
    [l, u] = k.useState(wL()),
    [c, d] = k.useState({ status: "", mensagem: "" });
  k.useEffect(() => {
    async function g() {
      try {
        const p = await fetch("http://localhost:3000/alunos/maternal");
        if (p.ok) {
          const w = await p.json();
          t(w);
        } else console.error("Erro ao buscar alunos do maternal");
      } catch (p) {
        console.error("Erro ao conectar-se ao servidor:", p);
      } finally {
        r(!1);
      }
    }
    g();
  }, []);
  const f = (g) => (p) => {
      const w = [...e];
      (w[g].presente = p.target.checked ? "presente" : "ausente"), t(w);
    },
    h = (g) => {
      i(g.target.value);
    },
    m = (g) => {
      u(g.target.value);
    },
    v = (g) => {
      s(g.target.value);
    },
    x = async (g) => {
      g.preventDefault();
      const [p, w, S] = l.split("/"),
        C = `${S}-${w.padStart(2, "0")}-${p.padStart(2, "0")}T00:00:00`,
        _ = e.map((E) => ({ nome: E.nome, presente: E.presente }));
      try {
        (
          await fetch("http://localhost:3000/chamada/maternal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              dataAula: C,
              professor: o,
              tituloAula: a,
              alunos: _,
            }),
          })
        ).ok
          ? d({ status: "success", mensagem: "Chamada salva com sucesso" })
          : d({ status: "error", mensagem: "Erro ao salvar chamada" });
      } catch (E) {
        console.error("Erro ao conectar-se ao servidor:", E),
          d({ status: "error", mensagem: "Erro ao conectar-se ao servidor" });
      }
    };
  return y.jsxs("section", {
    className: "_turma",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Turma do Maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Turma do Maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Turma do Maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Turma do Maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/turmas/maternal",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/turmas/maternal",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsxs("form", {
        onSubmit: x,
        className: "_main",
        children: [
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "dataAula",
                    children: "Data da aula:",
                  }),
                  y.jsx("input", {
                    type: "text",
                    id: "Data",
                    name: "dataAula",
                    value: l,
                    onChange: m,
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "professor",
                    children: "Professor:",
                  }),
                  y.jsxs("select", {
                    id: "professor",
                    name: "professor",
                    value: o,
                    onChange: h,
                    children: [
                      y.jsx("option", {
                        value: "",
                        children: "Selecione o professor",
                      }),
                      y.jsx("option", {
                        value: "Professor 1",
                        children: "Professor 1",
                      }),
                      y.jsx("option", {
                        value: "Professor 2",
                        children: "Professor 2",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "tituloAula",
                    children: "Título da aula:",
                  }),
                  y.jsx("input", {
                    type: "text",
                    id: "tituloAula",
                    name: "tituloAula",
                    value: a,
                    onChange: v,
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card alunos",
            children: [
              y.jsx("h2", { children: "Alunos do maternal" }),
              n
                ? y.jsx(um, {})
                : y.jsx("div", {
                    className: "_div",
                    children: e.map((g, p) =>
                      y.jsxs(
                        "div",
                        {
                          className: "_cnt",
                          children: [
                            y.jsx("p", { children: g.nome }),
                            y.jsx(ys, {
                              name: `presente_${p}`,
                              className: "_btn check",
                              checked: g.presente === "presente",
                              onChange: f(p),
                            }),
                          ],
                        },
                        g.id
                      )
                    ),
                  }),
              y.jsx("div", {
                className: "_div",
                children: y.jsx("button", {
                  type: "submit",
                  title: "Cadastrar aula",
                  className: "_btn orange cad",
                  children: "Cadastrar aula",
                }),
              }),
            ],
          }),
        ],
      }),
      c.status &&
        y.jsxs(lc, {
          status: c.status === "success" ? "success" : "error",
          className: "_card alert",
          children: [
            y.jsx("div", { children: c.status === "success" ? "✅" : "❌" }),
            y.jsx("p", { children: c.mensagem }),
          ],
        }),
      y.jsx(dn, {}),
    ],
  });
}
function wL() {
  return new Date().toLocaleDateString("pt-BR");
}
function xL() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0),
    [o, i] = k.useState(""),
    [a, s] = k.useState(""),
    [l, u] = k.useState(SL()),
    [c, d] = k.useState({ status: "", mensagem: "" });
  k.useEffect(() => {
    async function g() {
      try {
        const p = await fetch("http://localhost:3000/alunos/juniores");
        if (p.ok) {
          const w = await p.json();
          t(w);
        } else console.error("Erro ao buscar alunos do juniores");
      } catch (p) {
        console.error("Erro ao conectar-se ao servidor:", p);
      } finally {
        r(!1);
      }
    }
    g();
  }, []);
  const f = (g) => (p) => {
      const w = [...e];
      (w[g].presente = p.target.checked ? "presente" : "ausente"), t(w);
    },
    h = (g) => {
      i(g.target.value);
    },
    m = (g) => {
      u(g.target.value);
    },
    v = (g) => {
      s(g.target.value);
    },
    x = async (g) => {
      g.preventDefault();
      const [p, w, S] = l.split("/"),
        C = `${S}-${w.padStart(2, "0")}-${p.padStart(2, "0")}T00:00:00`,
        _ = e.map((E) => ({ nome: E.nome, presente: E.presente }));
      try {
        (
          await fetch("http://localhost:3000/chamada/juniores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              dataAula: C,
              professor: o,
              tituloAula: a,
              alunos: _,
            }),
          })
        ).ok
          ? d({ status: "success", mensagem: "Chamada salva com sucesso" })
          : d({ status: "error", mensagem: "Erro ao salvar chamada" });
      } catch (E) {
        console.error("Erro ao conectar-se ao servidor:", E),
          d({ status: "error", mensagem: "Erro ao conectar-se ao servidor" });
      }
    };
  return y.jsxs("section", {
    className: "_turma",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children: "Turma dos Juniores • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content: "Turma dos Juniores • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content: "Turma dos Juniores • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content: "Turma dos Juniores • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/turmas/juniores",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/turmas/juniores",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsxs("form", {
        onSubmit: x,
        className: "_main",
        children: [
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "dataAula",
                    children: "Data da aula:",
                  }),
                  y.jsx("input", {
                    type: "text",
                    id: "Data",
                    name: "dataAula",
                    value: l,
                    onChange: m,
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "professor",
                    children: "Professor:",
                  }),
                  y.jsxs("select", {
                    id: "professor",
                    name: "professor",
                    value: o,
                    onChange: h,
                    children: [
                      y.jsx("option", {
                        value: "",
                        children: "Selecione o professor",
                      }),
                      y.jsx("option", {
                        value: "Professor 1",
                        children: "Professor 1",
                      }),
                      y.jsx("option", {
                        value: "Professor 2",
                        children: "Professor 2",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    htmlFor: "tituloAula",
                    children: "Título da aula:",
                  }),
                  y.jsx("input", {
                    type: "text",
                    id: "tituloAula",
                    name: "tituloAula",
                    value: a,
                    onChange: v,
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card alunos",
            children: [
              y.jsx("h2", { children: "Alunos do juniores" }),
              n
                ? y.jsx(um, {})
                : y.jsx("div", {
                    className: "_div",
                    children: e.map((g, p) =>
                      y.jsxs(
                        "div",
                        {
                          className: "_cnt",
                          children: [
                            y.jsx("p", { children: g.nome }),
                            y.jsx(ys, {
                              name: `presente_${p}`,
                              className: "_btn check",
                              checked: g.presente === "presente",
                              onChange: f(p),
                            }),
                          ],
                        },
                        g.id
                      )
                    ),
                  }),
              y.jsx("div", {
                className: "_div",
                children: y.jsx("button", {
                  type: "submit",
                  title: "Cadastrar aula",
                  className: "_btn orange cad",
                  children: "Cadastrar aula",
                }),
              }),
            ],
          }),
        ],
      }),
      c.status &&
        y.jsxs(lc, {
          status: c.status === "success" ? "success" : "error",
          className: "_card alert",
          children: [
            y.jsx("div", { children: c.status === "success" ? "✅" : "❌" }),
            y.jsx("p", { children: c.mensagem }),
          ],
        }),
      y.jsx(dn, {}),
    ],
  });
}
function SL() {
  return new Date().toLocaleDateString("pt-BR");
}
function bL() {
  return y.jsxs("section", {
    className: "_turma",
    children: [
      y.jsxs(ut, {
        children: [
          y.jsx("title", {
            children:
              "Gerenciar aulas do maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            name: "title",
            content:
              "Gerenciar aulas do maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:title",
            content:
              "Gerenciar aulas do maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "twitter:title",
            content:
              "Gerenciar aulas do maternal • Sistema Kids | Ministério Kids",
          }),
          y.jsx("meta", {
            property: "og:url",
            content: "https://kids.catsflow.com/sistema/aulas/maternal",
          }),
          y.jsx("meta", {
            property: "twitter:url",
            content: "https://kids.catsflow.com/sistema/aulas/maternal",
          }),
        ],
      }),
      y.jsx(cn, {}),
      y.jsxs("main", {
        className: "_main",
        children: [
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsx("h2", { children: "Ferramentas" }),
              y.jsxs("div", {
                className: "_div",
                children: [
                  y.jsx("label", {
                    className: "_select",
                    htmlFor: "selturma",
                    children: y.jsx(ji, {
                      className: "camp",
                      name: "mesdaaula",
                      title: "Mês da aula",
                      required: !0,
                      children: y.jsx("option", {
                        value: "",
                        hidden: !0,
                        children: "Selecione o mês",
                      }),
                    }),
                  }),
                  y.jsx("label", {
                    className: "_select",
                    htmlFor: "selturma",
                    children: y.jsx(ji, {
                      className: "camp",
                      name: "professor",
                      title: "Professor",
                      required: !0,
                      children: y.jsx("option", {
                        value: "",
                        hidden: !0,
                        children: "Selecione o professor",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("section", {
            className: "_card",
            children: [
              y.jsx("h2", { children: "Aulas do maternal" }),
              y.jsx("nav", { className: "_div" }),
            ],
          }),
        ],
      }),
      y.jsx(dn, {}),
    ],
  });
}
function kL() {
  const { chamadaID: e } = A2(),
    [t, n] = k.useState(null);
  return (
    k.useEffect(() => {
      async function r() {
        try {
          const o = await Re.get(`http://localhost:3000/chamada/maternal/${e}`);
          n(o.data);
        } catch (o) {
          console.error("Erro ao buscar chamada maternal:", o);
        }
      }
      r();
    }, [e]),
    t
      ? y.jsxs("section", {
          className: "_turma",
          children: [
            y.jsxs(ut, {
              children: [
                y.jsx("title", {
                  children:
                    "Gerenciar chamada do maternal • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  name: "title",
                  content:
                    "Gerenciar chamada do maternal • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "og:title",
                  content:
                    "Gerenciar chamada do maternal • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "twitter:title",
                  content:
                    "Gerenciar chamada do maternal • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "og:url",
                  content:
                    "https://kids.catsflow.com/sistema/aulas/maternal/chamada",
                }),
                y.jsx("meta", {
                  property: "twitter:url",
                  content:
                    "https://kids.catsflow.com/sistema/aulas/maternal/chamada",
                }),
              ],
            }),
            y.jsx(cn, {}),
            y.jsxs("main", {
              className: "_main",
              children: [
                y.jsxs("section", {
                  className: "_card",
                  children: [
                    y.jsx("h2", { children: "Chamada maternal" }),
                    y.jsxs("div", {
                      className: "_div",
                      children: [
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Data da aula",
                          value: new Date(t.Data).toLocaleDateString("pt-BR"),
                          disabled: !0,
                          required: !0,
                        }),
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Professor",
                          value: t.Professor,
                          disabled: !0,
                          required: !0,
                        }),
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Título da aula",
                          value: t.Titulo,
                          disabled: !0,
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs("form", {
                  name: "Chamada maternal",
                  className: "_card alunos",
                  children: [
                    y.jsx("h2", { children: "Chamada do maternal" }),
                    y.jsx("div", {
                      className: "_div",
                      children: t.Alunos.map((r) =>
                        y.jsxs(
                          "div",
                          {
                            className: "_cnt",
                            children: [
                              y.jsx("p", { children: r.NomeAluno }),
                              y.jsx(ys, {
                                name: `presenca_${r.id}`,
                                className: "_btn check",
                                defaultChecked: r.Presenca === "presente",
                                disabled: !0,
                              }),
                            ],
                          },
                          r.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            y.jsx(dn, {}),
          ],
        })
      : y.jsx(cc, {})
  );
}
function EL() {
  const { chamadaID: e } = A2(),
    [t, n] = k.useState(null);
  return (
    k.useEffect(() => {
      async function r() {
        try {
          const o = await Re.get(`http://localhost:3000/chamada/juniores/${e}`);
          n(o.data);
        } catch (o) {
          console.error("Erro ao buscar chamada maternal:", o);
        }
      }
      r();
    }, [e]),
    t
      ? y.jsxs("section", {
          className: "_turma",
          children: [
            y.jsxs(ut, {
              children: [
                y.jsx("title", {
                  children:
                    "Gerenciar chamada do juniores • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  name: "title",
                  content:
                    "Gerenciar chamada do juniores • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "og:title",
                  content:
                    "Gerenciar chamada do juniores • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "twitter:title",
                  content:
                    "Gerenciar chamada do juniores • Sistema Kids | Ministério Kids",
                }),
                y.jsx("meta", {
                  property: "og:url",
                  content:
                    "https://kids.catsflow.com/sistema/aulas/juniores/chamada",
                }),
                y.jsx("meta", {
                  property: "twitter:url",
                  content:
                    "https://kids.catsflow.com/sistema/aulas/juniores/chamada",
                }),
              ],
            }),
            y.jsx(cn, {}),
            y.jsxs("main", {
              className: "_main",
              children: [
                y.jsxs("section", {
                  className: "_card",
                  children: [
                    y.jsx("h2", { children: "Chamada juniores" }),
                    y.jsxs("div", {
                      className: "_div",
                      children: [
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Data da aula",
                          value: new Date(t.Data).toLocaleDateString("pt-BR"),
                          disabled: !0,
                          required: !0,
                        }),
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Professor",
                          value: t.Professor,
                          disabled: !0,
                          required: !0,
                        }),
                        y.jsx("input", {
                          type: "text",
                          className: "_input",
                          placeholder: "Título da aula",
                          value: t.Titulo,
                          disabled: !0,
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs("form", {
                  name: "Chamada juniores",
                  className: "_card alunos",
                  children: [
                    y.jsx("h2", { children: "Chamada do juniores" }),
                    y.jsx("div", {
                      className: "_div",
                      children: t.Alunos.map((r) =>
                        y.jsxs(
                          "div",
                          {
                            className: "_cnt",
                            children: [
                              y.jsx("p", { children: r.NomeAluno }),
                              y.jsx(ys, {
                                name: `presenca_${r.id}`,
                                className: "_btn check",
                                defaultChecked: r.Presenca === "presente",
                                disabled: !0,
                              }),
                            ],
                          },
                          r.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            y.jsx(dn, {}),
          ],
        })
      : y.jsx(cc, {})
  );
}
function Sn(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function Oo(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Ab = 6048e5,
  CL = 864e5;
let TL = {};
function vc() {
  return TL;
}
function os(e, t) {
  var s, l, u, c;
  const n = vc(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    o = Sn(e),
    i = o.getDay(),
    a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function xu(e) {
  return os(e, { weekStartsOn: 1 });
}
function jb(e) {
  const t = Sn(e),
    n = t.getFullYear(),
    r = Oo(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = xu(r),
    i = Oo(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const a = xu(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
    ? n
    : n - 1;
}
function Av(e) {
  const t = Sn(e);
  return t.setHours(0, 0, 0, 0), t;
}
function jv(e) {
  const t = Sn(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function PL(e, t) {
  const n = Av(e),
    r = Av(t),
    o = +n - jv(n),
    i = +r - jv(r);
  return Math.round((o - i) / CL);
}
function OL(e) {
  const t = jb(e),
    n = Oo(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), xu(n);
}
function _L(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function AL(e) {
  if (!_L(e) && typeof e != "number") return !1;
  const t = Sn(e);
  return !isNaN(Number(t));
}
function jL(e) {
  const t = Sn(e),
    n = Oo(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ML = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  RL = (e, t, n) => {
    let r;
    const o = ML[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
        ? (r = o.one)
        : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function mi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const IL = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  NL = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  DL = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  LL = {
    date: mi({ formats: IL, defaultWidth: "full" }),
    time: mi({ formats: NL, defaultWidth: "full" }),
    dateTime: mi({ formats: DL, defaultWidth: "full" }),
  },
  FL = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  VL = (e, t, n, r) => FL[e];
function An(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const $L = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  BL = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  HL = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
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
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  zL = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  UL = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  WL = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  KL = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  ZL = {
    ordinalNumber: KL,
    era: An({ values: $L, defaultWidth: "wide" }),
    quarter: An({
      values: BL,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: An({ values: HL, defaultWidth: "wide" }),
    day: An({ values: zL, defaultWidth: "wide" }),
    dayPeriod: An({
      values: UL,
      defaultWidth: "wide",
      formattingValues: WL,
      defaultFormattingWidth: "wide",
    }),
  };
function jn(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    const a = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? YL(s, (d) => d.test(a)) : GL(s, (d) => d.test(a));
    let u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(a.length);
    return { value: u, rest: c };
  };
}
function GL(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function YL(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Mb(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const XL = /^(\d+)(th|st|nd|rd)?/i,
  qL = /\d+/i,
  JL = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  QL = { any: [/^b/i, /^(a|c)/i] },
  e5 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  t5 = { any: [/1/i, /2/i, /3/i, /4/i] },
  n5 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  r5 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  o5 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  i5 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  a5 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  s5 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  l5 = {
    ordinalNumber: Mb({
      matchPattern: XL,
      parsePattern: qL,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: jn({
      matchPatterns: JL,
      defaultMatchWidth: "wide",
      parsePatterns: QL,
      defaultParseWidth: "any",
    }),
    quarter: jn({
      matchPatterns: e5,
      defaultMatchWidth: "wide",
      parsePatterns: t5,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: jn({
      matchPatterns: n5,
      defaultMatchWidth: "wide",
      parsePatterns: r5,
      defaultParseWidth: "any",
    }),
    day: jn({
      matchPatterns: o5,
      defaultMatchWidth: "wide",
      parsePatterns: i5,
      defaultParseWidth: "any",
    }),
    dayPeriod: jn({
      matchPatterns: a5,
      defaultMatchWidth: "any",
      parsePatterns: s5,
      defaultParseWidth: "any",
    }),
  },
  u5 = {
    code: "en-US",
    formatDistance: RL,
    formatLong: LL,
    formatRelative: VL,
    localize: ZL,
    match: l5,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function c5(e) {
  const t = Sn(e);
  return PL(t, jL(t)) + 1;
}
function d5(e) {
  const t = Sn(e),
    n = +xu(t) - +OL(t);
  return Math.round(n / Ab) + 1;
}
function Rb(e, t) {
  var c, d, f, h;
  const n = Sn(e),
    r = n.getFullYear(),
    o = vc(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((h = (f = o.locale) == null ? void 0 : f.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      1,
    a = Oo(e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = os(a, t),
    l = Oo(e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const u = os(l, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function f5(e, t) {
  var s, l, u, c;
  const n = vc(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.firstWeekContainsDate) ??
      1,
    o = Rb(e, t),
    i = Oo(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), os(i, t);
}
function h5(e, t) {
  const n = Sn(e),
    r = +os(n, t) - +f5(n, t);
  return Math.round(r / Ab) + 1;
}
function fe(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const gr = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return fe(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : fe(n + 1, 2);
    },
    d(e, t) {
      return fe(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return fe(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return fe(e.getHours(), t.length);
    },
    m(e, t) {
      return fe(e.getMinutes(), t.length);
    },
    s(e, t) {
      return fe(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return fe(o, t.length);
    },
  },
  Ho = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Mv = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return gr.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Rb(e, r),
        i = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const a = i % 100;
        return fe(a, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(i, { unit: "year" })
        : fe(i, t.length);
    },
    R: function (e, t) {
      const n = jb(e);
      return fe(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return fe(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return fe(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return fe(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return gr.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return fe(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const o = h5(e, r);
      return t === "wo"
        ? n.ordinalNumber(o, { unit: "week" })
        : fe(o, t.length);
    },
    I: function (e, t, n) {
      const r = d5(e);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : fe(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : gr.d(e, t);
    },
    D: function (e, t, n) {
      const r = c5(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : fe(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return fe(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return fe(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return fe(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = Ho.noon)
          : r === 0
          ? (o = Ho.midnight)
          : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = Ho.evening)
          : r >= 12
          ? (o = Ho.afternoon)
          : r >= 4
          ? (o = Ho.morning)
          : (o = Ho.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return gr.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : gr.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : fe(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : gr.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : gr.s(e, t);
    },
    S: function (e, t) {
      return gr.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Iv(r);
        case "XXXX":
        case "XX":
          return io(r);
        case "XXXXX":
        case "XXX":
        default:
          return io(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Iv(r);
        case "xxxx":
        case "xx":
          return io(r);
        case "xxxxx":
        case "xxx":
        default:
          return io(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Rv(r, ":");
        case "OOOO":
        default:
          return "GMT" + io(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Rv(r, ":");
        case "zzzz":
        default:
          return "GMT" + io(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return fe(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return fe(r, t.length);
    },
  };
function Rv(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + fe(i, 2);
}
function Iv(e, t) {
  return e % 60 === 0
    ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2)
    : io(e, t);
}
function io(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = fe(Math.trunc(r / 60), 2),
    i = fe(r % 60, 2);
  return n + o + t + i;
}
const Nv = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Ib = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  p5 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return Nv(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Nv(r, t)).replace("{{time}}", Ib(o, t));
  },
  m5 = { p: Ib, P: p5 },
  g5 = /^D+$/,
  v5 = /^Y+$/,
  y5 = ["D", "DD", "YY", "YYYY"];
function w5(e) {
  return g5.test(e);
}
function x5(e) {
  return v5.test(e);
}
function S5(e, t, n) {
  const r = b5(e, t, n);
  if ((console.warn(r), y5.includes(e))) throw new RangeError(r);
}
function b5(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const k5 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  E5 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  C5 = /^'([^]*?)'?$/,
  T5 = /''/g,
  P5 = /[a-zA-Z]/;
function Dv(e, t, n) {
  var c, d, f, h, m, v, x, g;
  const r = vc(),
    o = (n == null ? void 0 : n.locale) ?? r.locale ?? u5,
    i =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((h = (f = r.locale) == null ? void 0 : f.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      1,
    a =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : v.weekStartsOn) ??
      r.weekStartsOn ??
      ((g = (x = r.locale) == null ? void 0 : x.options) == null
        ? void 0
        : g.weekStartsOn) ??
      0,
    s = Sn(e);
  if (!AL(s)) throw new RangeError("Invalid time value");
  let l = t
    .match(E5)
    .map((p) => {
      const w = p[0];
      if (w === "p" || w === "P") {
        const S = m5[w];
        return S(p, o.formatLong);
      }
      return p;
    })
    .join("")
    .match(k5)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const w = p[0];
      if (w === "'") return { isToken: !1, value: O5(p) };
      if (Mv[w]) return { isToken: !0, value: p };
      if (w.match(P5))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            w +
            "`"
        );
      return { isToken: !1, value: p };
    });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const u = { firstWeekContainsDate: i, weekStartsOn: a, locale: o };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const w = p.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && x5(w)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && w5(w))) &&
        S5(w, t, String(e));
      const S = Mv[w[0]];
      return S(s, w, o.localize, u);
    })
    .join("");
}
function O5(e) {
  const t = e.match(C5);
  return t ? t[1].replace(T5, "'") : e;
}
const _5 = {
    lessThanXSeconds: {
      one: "menos de um segundo",
      other: "menos de {{count}} segundos",
    },
    xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
      one: "menos de um minuto",
      other: "menos de {{count}} minutos",
    },
    xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
    aboutXHours: { one: "cerca de 1 hora", other: "cerca de {{count}} horas" },
    xHours: { one: "1 hora", other: "{{count}} horas" },
    xDays: { one: "1 dia", other: "{{count}} dias" },
    aboutXWeeks: {
      one: "cerca de 1 semana",
      other: "cerca de {{count}} semanas",
    },
    xWeeks: { one: "1 semana", other: "{{count}} semanas" },
    aboutXMonths: { one: "cerca de 1 mês", other: "cerca de {{count}} meses" },
    xMonths: { one: "1 mês", other: "{{count}} meses" },
    aboutXYears: { one: "cerca de 1 ano", other: "cerca de {{count}} anos" },
    xYears: { one: "1 ano", other: "{{count}} anos" },
    overXYears: { one: "mais de 1 ano", other: "mais de {{count}} anos" },
    almostXYears: { one: "quase 1 ano", other: "quase {{count}} anos" },
  },
  A5 = (e, t, n) => {
    let r;
    const o = _5[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
        ? (r = o.one)
        : (r = o.other.replace("{{count}}", String(t))),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "em " + r
          : "há " + r
        : r
    );
  },
  j5 = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy",
  },
  M5 = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm",
  },
  R5 = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  I5 = {
    date: mi({ formats: j5, defaultWidth: "full" }),
    time: mi({ formats: M5, defaultWidth: "full" }),
    dateTime: mi({ formats: R5, defaultWidth: "full" }),
  },
  N5 = {
    lastWeek: (e) => {
      const t = e.getDay();
      return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
    },
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: "P",
  },
  D5 = (e, t, n, r) => {
    const o = N5[e];
    return typeof o == "function" ? o(t) : o;
  },
  L5 = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "depois de cristo"],
  },
  F5 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"],
  },
  V5 = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ],
    wide: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ],
  },
  $5 = {
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    abbreviated: [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ],
    wide: [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado",
    ],
  },
  B5 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "manhã",
      afternoon: "tarde",
      evening: "tarde",
      night: "noite",
    },
  },
  H5 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mn",
      noon: "md",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "meia-noite",
      noon: "meio-dia",
      morning: "da manhã",
      afternoon: "da tarde",
      evening: "da tarde",
      night: "da noite",
    },
  },
  z5 = (e, t) => {
    const n = Number(e);
    return (t == null ? void 0 : t.unit) === "week" ? n + "ª" : n + "º";
  },
  U5 = {
    ordinalNumber: z5,
    era: An({ values: L5, defaultWidth: "wide" }),
    quarter: An({
      values: F5,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: An({ values: V5, defaultWidth: "wide" }),
    day: An({ values: $5, defaultWidth: "wide" }),
    dayPeriod: An({
      values: B5,
      defaultWidth: "wide",
      formattingValues: H5,
      defaultFormattingWidth: "wide",
    }),
  },
  W5 = /^(\d+)[ºªo]?/i,
  K5 = /\d+/i,
  Z5 = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i,
  },
  G5 = {
    any: [/^ac/i, /^dc/i],
    wide: [/^antes de cristo/i, /^depois de cristo/i],
  },
  Y5 = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i,
  },
  X5 = { any: [/1/i, /2/i, /3/i, /4/i] },
  q5 = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i,
  },
  J5 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^fev/i,
      /^mar/i,
      /^abr/i,
      /^mai/i,
      /^jun/i,
      /^jul/i,
      /^ago/i,
      /^set/i,
      /^out/i,
      /^nov/i,
      /^dez/i,
    ],
  },
  Q5 = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i,
  },
  eF = {
    short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i],
  },
  tF = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i,
  },
  nF = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mn|^meia[-\s]noite/i,
      noon: /^md|^meio[-\s]dia/i,
      morning: /manhã/i,
      afternoon: /tarde/i,
      evening: /tarde/i,
      night: /noite/i,
    },
  },
  rF = {
    ordinalNumber: Mb({
      matchPattern: W5,
      parsePattern: K5,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: jn({
      matchPatterns: Z5,
      defaultMatchWidth: "wide",
      parsePatterns: G5,
      defaultParseWidth: "any",
    }),
    quarter: jn({
      matchPatterns: Y5,
      defaultMatchWidth: "wide",
      parsePatterns: X5,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: jn({
      matchPatterns: q5,
      defaultMatchWidth: "wide",
      parsePatterns: J5,
      defaultParseWidth: "any",
    }),
    day: jn({
      matchPatterns: Q5,
      defaultMatchWidth: "wide",
      parsePatterns: eF,
      defaultParseWidth: "any",
    }),
    dayPeriod: jn({
      matchPatterns: tF,
      defaultMatchWidth: "any",
      parsePatterns: nF,
      defaultParseWidth: "any",
    }),
  },
  Lv = {
    code: "pt-BR",
    formatDistance: A5,
    formatLong: I5,
    formatRelative: D5,
    localize: U5,
    match: rF,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function oF() {
  const [e, t] = k.useState([]),
    [n, r] = k.useState(!0);
  return (
    k.useEffect(() => {
      async function o() {
        try {
          const i = await Re.get("http://localhost:3000/aulas/juniores/datas");
          t(i.data);
        } catch (i) {
          console.error("Erro ao buscar datas das aulas do maternal:", i);
        } finally {
          r(!1);
        }
      }
      o();
    }, []),
    y.jsxs("section", {
      className: "_turma",
      children: [
        y.jsxs(ut, {
          children: [
            y.jsx("title", {
              children:
                "Gerenciar aulas do juniores • Sistema Kids | Ministério Kids",
            }),
            y.jsx("meta", {
              name: "title",
              content:
                "Gerenciar aulas do juniores • Sistema Kids | Ministério Kids",
            }),
            y.jsx("meta", {
              property: "og:title",
              content:
                "Gerenciar aulas do juniores • Sistema Kids | Ministério Kids",
            }),
            y.jsx("meta", {
              property: "twitter:title",
              content:
                "Gerenciar aulas do juniores • Sistema Kids | Ministério Kids",
            }),
            y.jsx("meta", {
              property: "og:url",
              content: "https://kids.catsflow.com/sistema/aulas/juniores",
            }),
            y.jsx("meta", {
              property: "twitter:url",
              content: "https://kids.catsflow.com/sistema/aulas/juniores",
            }),
          ],
        }),
        y.jsx(cn, {}),
        y.jsxs("main", {
          className: "_main",
          children: [
            y.jsxs("section", {
              className: "_card",
              children: [
                y.jsx("h2", { children: "Ferramentas" }),
                y.jsxs("div", {
                  className: "_div",
                  children: [
                    y.jsx("label", {
                      className: "_select",
                      htmlFor: "selturma",
                      children: y.jsx(ji, {
                        className: "camp",
                        name: "mesdaaula",
                        title: "Mês da aula",
                        required: !0,
                        children: y.jsx("option", {
                          value: "",
                          hidden: !0,
                          children: "Selecione o mês",
                        }),
                      }),
                    }),
                    y.jsx("label", {
                      className: "_select",
                      htmlFor: "selturma",
                      children: y.jsx(ji, {
                        className: "camp",
                        name: "professor",
                        title: "Professor",
                        required: !0,
                        children: y.jsx("option", {
                          value: "",
                          hidden: !0,
                          children: "Selecione o professor",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("section", {
              className: "_card",
              children: [
                y.jsx("h2", { children: "Aulas do juniores" }),
                y.jsx("nav", {
                  className: "_div",
                  children: n
                    ? y.jsx(um, {})
                    : e.map((o, i) =>
                        y.jsx(
                          "a",
                          {
                            className: "_btn",
                            href: `/chamada/juniores/${o.id}`,
                            title: `Aula do juniores do dia ${Dv(
                              new Date(o.Data),
                              "dd 'de' MMMM 'de' yyyy",
                              { locale: Lv }
                            )}`,
                            children: `${Dv(
                              new Date(o.Data),
                              "dd 'de' MMMM 'de' yyyy",
                              { locale: Lv }
                            )}`,
                          },
                          i
                        )
                      ),
                }),
              ],
            }),
          ],
        }),
        y.jsx(dn, {}),
      ],
    })
  );
}
function iF() {
  const { isLoading: e } = ki();
  return e
    ? y.jsx("div", { className: "page-layout", children: y.jsx(cc, {}) })
    : y.jsxs(P4, {
        children: [
          y.jsxs(ut, {
            children: [
              y.jsx("title", { children: "Sistema Kids | Ministério Kids" }),
              y.jsx("meta", {
                name: "title",
                content: "Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "og:title",
                content: "Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "twitter:title",
                content: "Sistema Kids | Ministério Kids",
              }),
              y.jsx("meta", {
                property: "og:url",
                content: "https://kids.catsflow.com/sistema/",
              }),
              y.jsx("meta", {
                property: "twitter:url",
                content: "https://kids.catsflow.com/sistema/",
              }),
              y.jsx("link", {
                rel: "shortcut icon",
                href: "./config/assets/favicon.png",
                type: "image/png",
              }),
            ],
          }),
          y.jsxs(E4, {
            children: [
              y.jsx(vt, { path: "/sistema/", element: y.jsx(O4, {}) }),
              y.jsx(vt, { path: "/sistema/login", element: y.jsx(RN, {}) }),
              y.jsx(vt, {
                path: "/sistema/dash",
                element: y.jsx(En, { component: jN }),
              }),
              y.jsx(vt, {
                path: "/sistema/notes",
                element: y.jsx(En, { component: MN }),
              }),
              y.jsx(vt, {
                path: "/sistema/user",
                element: y.jsx(En, { component: IN }),
              }),
              y.jsx(vt, {
                path: "/sistema/registrar/aluno",
                element: y.jsx(En, { component: vL }),
              }),
              y.jsx(vt, {
                path: "/sistema/turmas/juniores",
                element: y.jsx(En, { component: xL }),
              }),
              y.jsx(vt, {
                path: "/sistema/turmas/maternal",
                element: y.jsx(En, { component: yL }),
              }),
              y.jsx(vt, {
                path: "/sistema/aulas/maternal",
                element: y.jsx(En, { component: bL }),
              }),
              y.jsx(vt, {
                path: "/sistema/aulas/juniores",
                element: y.jsx(En, { component: oF }),
              }),
              y.jsx(vt, {
                path: "/sistema/aulas/maternal/chamada",
                element: y.jsx(En, { component: kL }),
              }),
              y.jsx(vt, {
                path: "/sistema/aulas/juniores/:chamadaID",
                element: y.jsx(En, { component: EL }),
              }),
              y.jsx(vt, { path: "*", element: y.jsx(NN, {}) }),
            ],
          }),
        ],
      });
}
Rd.createRoot(document.getElementById("page")).render(
  y.jsx(T.StrictMode, {
    children: y.jsx(UT, {
      domain: "ministeriokids.us.auth0.com",
      clientId: "sBTTE0u5PVpU6UnxKYo3CtzvdOXC5KhG",
      authorizationParams: { redirect_uri: window.location.origin },
      children: y.jsx(iF, {}),
    }),
  })
);