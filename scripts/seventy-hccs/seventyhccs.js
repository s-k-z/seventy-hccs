"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = function(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: function(k) {
          return from[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  );
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: true }), mod);
};

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js": function(exports, module2) {
    var check = function check2(it) {
      return it && it.Math == Math && it;
    };
    module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js": function(exports, module2) {
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js": function(exports, module2) {
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function get3() {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js": function(exports, module2) {
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js": function(exports, module2) {
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js": function(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js": function(exports, module2) {
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js": function(exports, module2) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js": function(exports, module2) {
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js": function(exports, module2) {
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js": function(exports, module2) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/document-all.js
var require_document_all = __commonJS({
  "node_modules/core-js/internals/document-all.js": function(exports, module2) {
    var documentAll = typeof document == "object" && document.all;
    var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
    module2.exports = {
      all: documentAll,
      IS_HTMLDDA: IS_HTMLDDA
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js": function(exports, module2) {
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module2.exports = $documentAll.IS_HTMLDDA ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js": function(exports, module2) {
    var isCallable = require_is_callable();
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module2.exports = $documentAll.IS_HTMLDDA ? function(it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js": function(exports, module2) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function aFunction2(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js": function(exports, module2) {
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js": function(exports, module2) {
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js": function(exports, module2) {
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js": function(exports, module2) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js": function(exports, module2) {
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js": function(exports, module2) {
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js": function(exports, module2) {
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js": function(exports, module2) {
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js": function(exports, module2) {
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js": function(exports, module2) {
    module2.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js": function(exports, module2) {
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value: value,
          configurable: true,
          writable: true
        });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js": function(exports, module2) {
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js": function(exports, module2) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.27.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js": function(exports, module2) {
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js": function(exports, module2) {
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global2.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js": function(exports, module2) {
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js": function(exports, module2) {
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js": function(exports, module2) {
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js": function(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function get3() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports) {
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js": function(exports, module2) {
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js": function(exports) {
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js": function(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js": function(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js": function(exports, module2) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap2 = global2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js": function(exports, module2) {
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js": function(exports, module2) {
    module2.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js": function(exports, module2) {
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap2 = global2.WeakMap;
    var set;
    var get3;
    var has;
    var enforce = function enforce2(it) {
      return has(it) ? get3(it) : set(it, {});
    };
    var getterFor = function getterFor2(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get3(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap2());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function set2(it, metadata) {
        if (store.has(it))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get3 = function get4(it) {
        return store.get(it) || {};
      };
      has = function has2(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function set2(it, metadata) {
        if (hasOwn(it, STATE))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get3 = function get4(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function has2(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set: set,
      get: get3,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js": function(exports, module2) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", {
            value: name,
            configurable: true
          });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", {
          value: options.arity
        });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", {
              writable: false
            });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js": function(exports, module2) {
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js": function(exports, module2) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js": function(exports, module2) {
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js": function(exports, module2) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js": function(exports, module2) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js": function(exports, module2) {
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js": function(exports, module2) {
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function createMethod2(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js": function(exports, module2) {
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js": function(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js": function(exports, module2) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys7(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js": function(exports, module2) {
    var hasOwn = require_has_own_property();
    var ownKeys7 = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys7(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js": function(exports, module2) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function isForced2(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js": function(exports, module2) {
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global2[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js": function(exports, module2) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/core-js/internals/object-to-array.js": function(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var objectKeys = require_object_keys();
    var toIndexedObject = require_to_indexed_object();
    var $propertyIsEnumerable = require_object_property_is_enumerable().f;
    var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
    var push = uncurryThis([].push);
    var createMethod = function createMethod2(TO_ENTRIES) {
      return function(it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
            push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };
    module2.exports = {
      entries: createMethod(true),
      values: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/internals/is-array.js": function(exports, module2) {
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js/internals/does-not-exceed-safe-integer.js": function(exports, module2) {
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-clause.js": function(exports, module2) {
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "node_modules/core-js/internals/flatten-into-array.js": function(exports, module2) {
    "use strict";
    var isArray = require_is_array();
    var lengthOfArrayLike = require_length_of_array_like();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var bind = require_function_bind_context();
    var flattenIntoArray = function flattenIntoArray2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? bind(mapper, thisArg) : false;
      var element, elementLen;
      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
          if (depth > 0 && isArray(element)) {
            elementLen = lengthOfArrayLike(element);
            targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1;
          } else {
            doesNotExceedSafeInteger(targetIndex + 1);
            target[targetIndex] = element;
          }
          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    };
    module2.exports = flattenIntoArray;
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js": function(exports, module2) {
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js": function(exports, module2) {
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function tryGet2(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js": function(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function noop2() {
    };
    var empty = [];
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js/internals/array-species-constructor.js": function(exports, module2) {
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject = require_is_object();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
          C = void 0;
        else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js/internals/array-species-create.js": function(exports, module2) {
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js/modules/es.array.flat.js
var require_es_array_flat = __commonJS({
  "node_modules/core-js/modules/es.array.flat.js": function() {
    "use strict";
    var $4 = require_export();
    var flattenIntoArray = require_flatten_into_array();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var arraySpeciesCreate = require_array_species_create();
    $4({
      target: "Array",
      proto: true
    }, {
      flat: function flat() {
        var depthArg = arguments.length ? arguments[0] : void 0;
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg));
        return A;
      }
    });
  }
});

// node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js/internals/object-define-properties.js": function(exports) {
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js": function(exports, module2) {
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js": function(exports, module2) {
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function EmptyConstructor2() {
    };
    var scriptTag = function scriptTag2(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX2(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame2() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var _NullProtoObject = function NullProtoObject() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create4(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = _NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/internals/add-to-unscopables.js": function(exports, module2) {
    var wellKnownSymbol = require_well_known_symbol();
    var create4 = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create4(null)
      });
    }
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/core-js/modules/es.array.unscopables.flat.js
var require_es_array_unscopables_flat = __commonJS({
  "node_modules/core-js/modules/es.array.unscopables.flat.js": function() {
    var addToUnscopables = require_add_to_unscopables();
    addToUnscopables("flat");
  }
});

// node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "node_modules/core-js/internals/entry-unbind.js": function(exports, module2) {
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

// node_modules/core-js/es/array/flat.js
var require_flat = __commonJS({
  "node_modules/core-js/es/array/flat.js": function(exports, module2) {
    require_es_array_flat();
    require_es_array_unscopables_flat();
    var entryUnbind = require_entry_unbind();
    module2.exports = entryUnbind("Array", "flat");
  }
});

// node_modules/core-js/stable/array/flat.js
var require_flat2 = __commonJS({
  "node_modules/core-js/stable/array/flat.js": function(exports, module2) {
    var parent = require_flat();
    module2.exports = parent;
  }
});

// node_modules/core-js/actual/array/flat.js
var require_flat3 = __commonJS({
  "node_modules/core-js/actual/array/flat.js": function(exports, module2) {
    var parent = require_flat2();
    module2.exports = parent;
  }
});

// node_modules/core-js/full/array/flat.js
var require_flat4 = __commonJS({
  "node_modules/core-js/full/array/flat.js": function(exports, module2) {
    var parent = require_flat3();
    module2.exports = parent;
  }
});

// node_modules/core-js/features/array/flat.js
var require_flat5 = __commonJS({
  "node_modules/core-js/features/array/flat.js": function(exports, module2) {
    module2.exports = require_flat4();
  }
});

// node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/internals/iterators.js": function(exports, module2) {
    module2.exports = {};
  }
});

// node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js/internals/is-array-iterator-method.js": function(exports, module2) {
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js/internals/get-iterator-method.js": function(exports, module2) {
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it))
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/internals/get-iterator.js": function(exports, module2) {
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js/internals/iterator-close.js": function(exports, module2) {
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js/internals/iterate.js": function(exports, module2) {
    var bind = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function Result2(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function stop2(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function callFn2(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js/internals/create-property.js": function(exports, module2) {
    "use strict";
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);

// node_modules/grimoire-kolmafia/dist/args.js
var import_kolmafia = require("kolmafia");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Args = /* @__PURE__ */ function() {
  function Args2() {
    _classCallCheck(this, Args2);
  }
  _createClass(Args2, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: function(value) {
          var parsed_value = _parser(value);
          if (parsed_value === void 0 || parsed_value instanceof ParseError)
            return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      var spec_without_default = _objectSpread({}, spec);
      if ("default" in spec_without_default)
        delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(function(option) {
        return option[0];
      });
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry))
              throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = function(value) {
        var values2 = value.split(separator);
        if (!spec.noTrim)
          values2 = values2.map(function(v) {
            return v.trim();
          });
        var result = values2.map(function(v) {
          return arg.parser(v);
        });
        var error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error)
          return error;
        var failure_index = result.indexOf(void 0);
        if (failure_index !== -1)
          return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values2[failure_index]));
        return result;
      };
      return _objectSpread(_objectSpread({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(function(a) {
          return ["".concat(a[0]), a[1]];
        })
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, function(value) {
        return value;
      }, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, function(value) {
        return isNaN(Number(value)) ? void 0 : Number(value);
      }, "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return true;
        if (value.toLowerCase() === "false")
          return false;
        return void 0;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, function(value) {
        if (value.toLowerCase() === "true")
          return true;
        if (value.toLowerCase() === "false")
          return false;
        return void 0;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, function(value) {
        var match = import_kolmafia.Class.get(value);
        if (match.toString().toUpperCase() === value.toString().toUpperCase())
          return match;
        if (!isNaN(Number(value)))
          return match;
        return void 0;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, import_kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, import_kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item4(spec) {
      return this.custom(spec, import_kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, import_kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, import_kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, import_kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, import_kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
  }, {
    key: "create",
    value: function create4(scriptName, scriptHelp, args, options) {
      var _objectSpread22;
      _traverse(args, function(keySpec, key) {
        if (key === "help" || keySpec.key === "help")
          throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread(_objectSpread({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      var res = _objectSpread(_objectSpread({}, _loadDefaultValues(argsWithHelp)), {}, (_objectSpread22 = {}, _defineProperty(_objectSpread22, specSymbol, argsWithHelp), _defineProperty(_objectSpread22, scriptSymbol, scriptName), _defineProperty(_objectSpread22, scriptHelpSymbol, scriptHelp), _defineProperty(_objectSpread22, optionsSymbol, options !== null && options !== void 0 ? options : {}), _objectSpread22));
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args2.getMetadata(res);
        metadata.traverse(function(keySpec, key) {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var arg = _step2.value;
            if (!keys.includes(arg))
              throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var _a;
      var metadata = Args2.getMetadata(args);
      var keys = /* @__PURE__ */ new Set();
      var flags = /* @__PURE__ */ new Set();
      metadata.traverse(function(keySpec, key) {
        var _a2;
        var name = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        if (flags.has(name) || keys.has(name))
          throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG")
          flags.add(name);
        else
          keys.add(name);
      });
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, function(keySpec, key) {
          var _a2, _b;
          var setting = (_a2 = keySpec.setting) !== null && _a2 !== void 0 ? _a2 : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "")
            return void 0;
          var value_str = (0, import_kolmafia.getProperty)(setting);
          if (value_str === "")
            return void 0;
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      if (command === void 0 || command === "")
        return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, function(keySpec, key) {
        var _a2;
        var argKey = (_a2 = keySpec.key) !== null && _a2 !== void 0 ? _a2 : key;
        var value_str = parsed.get(argKey);
        if (value_str === void 0)
          return void 0;
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args2.getMetadata(args);
      (0, import_kolmafia.printHtml)("".concat(metadata.scriptHelp));
      (0, import_kolmafia.printHtml)("");
      (0, import_kolmafia.printHtml)("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse(function(arg, key) {
        var _a2, _b, _c, _d, _e;
        if (arg.hidden)
          return;
        var nameText = "<font color='".concat((0, import_kolmafia.isDarkMode)() ? "yellow" : "blue", "'>").concat((_a2 = arg.key) !== null && _a2 !== void 0 ? _a2 : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        (0, import_kolmafia.printHtml)("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === void 0) {
                (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                (0, import_kolmafia.printHtml)("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, function(group) {
        (0, import_kolmafia.printHtml)("");
        (0, import_kolmafia.printHtml)("<b>".concat(group.name, ":</b>"));
      });
    }
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
  return Args2;
}();
var ParseError = /* @__PURE__ */ _createClass(function ParseError2(message) {
  _classCallCheck(this, ParseError2);
  this.message = message;
});
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = void 0;
  }
  if (parsed_value === void 0)
    throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError)
    throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
var WrappedArgMetadata = /* @__PURE__ */ function() {
  function WrappedArgMetadata2(args) {
    _classCallCheck(this, WrappedArgMetadata2);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  _createClass(WrappedArgMetadata2, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
  return WrappedArgMetadata2;
}();
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec)
        result[k] = argSpec.default;
      else
        result[k] = void 0;
    }
  }
  return result;
}
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === void 0)
        continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
var CommandParser = /* @__PURE__ */ function() {
  function CommandParser2(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser2);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  _createClass(CommandParser2, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0;
      var result = /* @__PURE__ */ new Map();
      while (!this.finished()) {
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=")
            throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished())
            this.consume([" "]);
          this.prevUnquotedKey = void 0;
        } else if (this.keys.has(key)) {
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : ""))
            this.prevUnquotedKey = void 0;
          else
            this.prevUnquotedKey = key;
          if (!this.finished())
            this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex;
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : ""))
            this.prevUnquotedKey = void 0;
          else
            this.prevUnquotedKey = key;
          if (!this.finished())
            this.consume([" "]);
          if (result.has(positionalKey))
            throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          if (this.prevUnquotedKey && this.peek() !== "=")
            throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");
          else
            throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length)
        return void 0;
      return this.command.charAt(this.index);
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0)
        return void 0;
      if (this.index >= this.command.length + 1)
        return void 0;
      return this.command.charAt(this.index - 1);
    }
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished())
        throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = _createForOfIteratorHelper(searchValue), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result)
            result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : "";
        this.consume([valueEnder]);
      }
      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      this.index = valueEnd;
      if (valueEnder !== " ")
        this.consume([valueEnder]);
      return value;
    }
  }]);
  return CommandParser2;
}();

// node_modules/grimoire-kolmafia/dist/combat.js
var import_kolmafia21 = require("kolmafia");

// node_modules/libram/dist/combat.js
var import_kolmafia5 = require("kolmafia");

// node_modules/core-js/modules/es.object.entries.js
var $ = require_export();
var $entries = require_object_to_array().entries;
$({
  target: "Object",
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

// node_modules/libram/dist/lib.js
var import_flat = __toESM(require_flat5());
var import_kolmafia4 = require("kolmafia");

// node_modules/core-js/modules/es.object.from-entries.js
var $2 = require_export();
var iterate = require_iterate();
var createProperty = require_create_property();
$2({
  target: "Object",
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function(k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

// node_modules/libram/dist/property.js
var import_kolmafia2 = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chilledToTheBone", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarElbowNC", "lastFriarHeartNC", "lastFriarNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chipBags", "_chocolateCigarsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_speakeasyFreeFights", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "scriptMRUList", "seahorseName", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_LastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum"];

// node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia2.getProperty)(property);
    if (default_ !== void 0 && value === "") {
      return default_;
    }
    return transform(value, property);
  };
};
var createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
    var v = toType(value);
    return v === Type.none ? null : v;
  });
};
var getString = createPropertyGetter(function(value) {
  return value;
});
var getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
});
var getBoolean = createPropertyGetter(function(value) {
  return value === "true";
});
var getNumber = createPropertyGetter(function(value) {
  return Number(value);
});
var getBounty = createMafiaClassPropertyGetter(import_kolmafia2.Bounty, import_kolmafia2.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia2.Class, import_kolmafia2.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia2.Coinmaster, import_kolmafia2.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia2.Effect, import_kolmafia2.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia2.Element, import_kolmafia2.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia2.Familiar, import_kolmafia2.toFamiliar);
var getItem = createMafiaClassPropertyGetter(import_kolmafia2.Item, import_kolmafia2.toItem);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia2.Location, import_kolmafia2.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia2.Monster, import_kolmafia2.toMonster);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia2.Phylum, import_kolmafia2.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia2.Servant, import_kolmafia2.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia2.Skill, import_kolmafia2.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia2.Slot, import_kolmafia2.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia2.Stat, import_kolmafia2.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia2.Thrall, import_kolmafia2.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : false;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isStringProperty(property)) {
    return value;
  }
  if (_default instanceof import_kolmafia2.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof import_kolmafia2.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof import_kolmafia2.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof import_kolmafia2.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof import_kolmafia2.Phylum) {
    return getPhylum(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === void 0 ? "" : _default;
  } else {
    return value;
  }
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, import_kolmafia2.setProperty)(property, stringValue);
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck2(this, PropertiesManager2);
    _defineProperty2(this, "properties", {});
  }
  _createClass2(PropertiesManager2, [{
    key: "storedValues",
    get: function get3() {
      return this.properties;
    }
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        if (this.properties[propertyName] === void 0) {
          this.properties[propertyName] = get(propertyName);
        }
        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty2({}, choiceToSet, value));
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        var value = this.properties[property];
        if (value) {
          _set(property, value);
        }
      }
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set(_defineProperty2({}, property, value));
        return true;
      }
      return false;
    }
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set(_defineProperty2({}, property, value));
        return true;
      }
      return false;
    }
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager2();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
  }, {
    key: "clamp",
    value: function clamp2(property, min, max) {
      if (max < min)
        return false;
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
    }
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return false;
      }
      return true;
    }
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager2();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0)
        return new PropertiesManager2();
      return mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]);
  return PropertiesManager2;
}();

// node_modules/libram/dist/template-string.js
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/utils.js
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  array.forEach(function(item4) {
    map.set(item4, (map.get(item4) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item4 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item4);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item4 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item4);
  }).join(", ");
}
function sum(addends, x) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + (typeof x === "function" ? x(element) : element[x]);
  }, 0);
}
function arrayContains(item4, array) {
  return array.includes(item4);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item4, index) {
    return item4 === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var createSingleConstant = function(Type) {
  var tagFunction = function tagFunction2(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
  tagFunction.none = Type.none;
  return tagFunction;
};
var createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    return Type.get(splitByCommasWithEscapes(input));
  };
};
var $bounty = createSingleConstant(import_kolmafia3.Bounty);
var $bounties = createPluralConstant(import_kolmafia3.Bounty);
var $class = createSingleConstant(import_kolmafia3.Class);
var $classes = createPluralConstant(import_kolmafia3.Class);
var $coinmaster = createSingleConstant(import_kolmafia3.Coinmaster);
var $coinmasters = createPluralConstant(import_kolmafia3.Coinmaster);
var $effect = createSingleConstant(import_kolmafia3.Effect);
var $effects = createPluralConstant(import_kolmafia3.Effect);
var $element = createSingleConstant(import_kolmafia3.Element);
var $elements = createPluralConstant(import_kolmafia3.Element);
var $familiar = createSingleConstant(import_kolmafia3.Familiar);
var $familiars = createPluralConstant(import_kolmafia3.Familiar);
var $item = createSingleConstant(import_kolmafia3.Item);
var $items = createPluralConstant(import_kolmafia3.Item);
var $location = createSingleConstant(import_kolmafia3.Location);
var $locations = createPluralConstant(import_kolmafia3.Location);
var $monster = createSingleConstant(import_kolmafia3.Monster);
var $monsters = createPluralConstant(import_kolmafia3.Monster);
var $phylum = createSingleConstant(import_kolmafia3.Phylum);
var $phyla = createPluralConstant(import_kolmafia3.Phylum);
var $servant = createSingleConstant(import_kolmafia3.Servant);
var $servants = createPluralConstant(import_kolmafia3.Servant);
var $skill = createSingleConstant(import_kolmafia3.Skill);
var $skills = createPluralConstant(import_kolmafia3.Skill);
var $slot = createSingleConstant(import_kolmafia3.Slot);
var $slots = createPluralConstant(import_kolmafia3.Slot);
var $stat = createSingleConstant(import_kolmafia3.Stat);
var $stats = createPluralConstant(import_kolmafia3.Stat);
var $thrall = createSingleConstant(import_kolmafia3.Thrall);
var $thralls = createPluralConstant(import_kolmafia3.Thrall);
var $path = createSingleConstant(import_kolmafia3.Path);
var $paths = createPluralConstant(import_kolmafia3.Path);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject9;
var _templateObject10;
var _templateObject11;
var _templateObject12;
var _templateObject13;
var _templateObject14;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
var _templateObject22;
var _templateObject23;
var _templateObject24;
var _templateObject25;
var _templateObject26;
var _templateObject27;
var _templateObject28;
var _templateObject29;
var _templateObject30;
var _templateObject31;
var _templateObject32;
var _templateObject33;
var _templateObject34;
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper(Class6) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper5(Class7) {
    if (Class7 === null || !_isNativeFunction(Class7))
      return Class7;
    if (typeof Class7 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class7))
        return _cache.get(Class7);
      _cache.set(Class7, Wrapper);
    }
    function Wrapper() {
      return _construct(Class7, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class7.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class7);
  };
  return _wrapNativeSuper(Class6);
}
function _construct(Parent, args, Class6) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct5(Parent2, args2, Class7) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class7)
        _setPrototypeOf(instance, Class7.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf6(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia4.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof import_kolmafia4.Effect ? (0, import_kolmafia4.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia4.Effect) {
    return (0, import_kolmafia4.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia4.Familiar) {
    return (0, import_kolmafia4.haveFamiliar)(thing);
  }
  if (thing instanceof import_kolmafia4.Item) {
    return (0, import_kolmafia4.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia4.Servant) {
    return (0, import_kolmafia4.haveServant)(thing);
  }
  if (thing instanceof import_kolmafia4.Skill) {
    return (0, import_kolmafia4.haveSkill)(thing);
  }
  if (thing instanceof import_kolmafia4.Thrall) {
    var thrall = (0, import_kolmafia4.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
function haveInCampground(item4) {
  return Object.keys((0, import_kolmafia4.getCampground)()).map(function(i) {
    return import_kolmafia4.Item.get(i);
  }).includes(item4);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2["Digitize"] = "Digitize Monster";
  Wanderer2["Enamorang"] = "Enamorang Monster";
  Wanderer2["Familiar"] = "Familiar";
  Wanderer2["Holiday"] = "Holiday Monster";
  Wanderer2["Kramco"] = "Kramco";
  Wanderer2["Nemesis"] = "Nemesis Assassin";
  Wanderer2["Portscan"] = "portscan.edu";
  Wanderer2["Romantic"] = "Romantic Monster";
  Wanderer2["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getFoldGroup(item4) {
  return Object.entries((0, import_kolmafia4.getRelated)(item4, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1];
    var _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia4.Item.get(i);
  });
}
function uneffect(effect) {
  return (0, import_kolmafia4.cliExecute)("uneffect ".concat(effect.name));
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    _classCallCheck3(this, EnsureError2);
    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }
  return _createClass3(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia4.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!(0, import_kolmafia4.cliExecute)(ef.default) || (0, import_kolmafia4.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0, import_kolmafia4.holiday)().split("/").map(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);

// node_modules/libram/dist/combat.js
var _templateObject2;
var _templateObject210;
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive4(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper2(Class6) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper2 = function _wrapNativeSuper5(Class7) {
    if (Class7 === null || !_isNativeFunction2(Class7))
      return Class7;
    if (typeof Class7 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class7))
        return _cache.get(Class7);
      _cache.set(Class7, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class7, arguments, _getPrototypeOf2(this).constructor);
    }
    Wrapper.prototype = Object.create(Class7.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf2(Wrapper, Class7);
  };
  return _wrapNativeSuper2(Class6);
}
function _construct2(Parent, args, Class6) {
  if (_isNativeReflectConstruct2()) {
    _construct2 = Reflect.construct.bind();
  } else {
    _construct2 = function _construct5(Parent2, args2, Class7) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class7)
        _setPrototypeOf2(instance, Class7.prototype);
      return instance;
    };
  }
  return _construct2.apply(null, arguments);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf6(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _taggedTemplateLiteral2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME;
  var macroMatches = (0, import_kolmafia5.xpath)((0, import_kolmafia5.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia5.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia5.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? import_kolmafia5.Item.get(itemOrName) : itemOrName;
}
var substringCombatItems = $items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, bowling ball, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = $skills(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Snipe, Cleave, Boil, Slice, Rainbow"])));
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item4 = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item4) ? item4.name : (0, import_kolmafia5.toInt)(item4).toString();
  }
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return import_kolmafia5.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0, import_kolmafia5.toInt)(skill);
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    _classCallCheck4(this, InvalidMacroError2);
    return _super.apply(this, arguments);
  }
  return _createClass4(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error));
var Macro = /* @__PURE__ */ function() {
  function Macro2() {
    _classCallCheck4(this, Macro2);
    _defineProperty3(this, "components", []);
    _defineProperty3(this, "name", MACRO_NAME);
  }
  _createClass4(Macro2, [{
    key: "toString",
    value: function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      _set(Macro2.SAVED_MACRO_PROPERTY, this.toString());
    }
  }, {
    key: "step",
    value: function step() {
      var _ref, _this$components;
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map(function(x) {
        return x instanceof Macro2 ? x.components : [x];
      })));
      (_this$components = this.components).push.apply(_this$components, _toConsumableArray2(nextStepsStrings.filter(function(s) {
        return s.length > 0;
      })));
      return this;
    }
  }, {
    key: "submit",
    value: function submit() {
      var final = this.toString();
      return (0, import_kolmafia5.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia5.urlEncode)(final)), true, true);
    }
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack5() {
      var id = Macro2.cachedMacroIds.get(this.name);
      if (id === void 0) {
        id = getMacroId(this.name);
        Macro2.cachedMacroIds.set(this.name, id);
      }
      if ((0, import_kolmafia5.getAutoAttack)() === 99e6 + id && this.toString() === Macro2.cachedAutoAttacks.get(this.name)) {
        return;
      }
      (0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia5.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia5.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, import_kolmafia5.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1"));
      Macro2.cachedAutoAttacks.set(this.name, this.toString());
    }
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
  }, {
    key: "abort",
    value: function abort() {
      return this.step("abort");
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return this.step("runaway");
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro2.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return this.step("if !(".concat(Macro2.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      if (condition)
        return this.step(ifTrue);
      else if (ifFalse)
        return this.step(ifFalse);
      else
        return this;
    }
  }, {
    key: "repeat",
    value: function repeat() {
      return this.step("repeat");
    }
  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill2) {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
        return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill));
      })));
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
        return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill).repeat());
      })));
    }
  }, {
    key: "item",
    value: function item4() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }
      return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, _toConsumableArray2(items.map(function(item4) {
        return Macro2.if_(itemOrItemsBallsMacroPredicate(item4), "use ".concat(itemOrItemsBallsMacroName(item4)));
      })));
    }
  }, {
    key: "attack",
    value: function attack() {
      return this.step("attack");
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0)
        return this;
      return this.if_(todaysWanderers.map(function(monster) {
        return "monsterid ".concat(monster.id);
      }).join(" || "), macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0)
        return this.step(macro);
      return this.if_(todaysWanderers.map(function(monster) {
        return "!monsterid ".concat(monster.id);
      }).join(" && "), macro);
    }
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro2.SAVED_MACRO_PROPERTY).split(";")));
    }
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, import_kolmafia5.removeProperty)(Macro2.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = _createForOfIteratorHelper3(Macro2.cachedAutoAttacks.keys()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _Macro$cachedMacroIds;
          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro2.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia5.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro2.cachedAutoAttacks.delete(name);
          Macro2.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      var ballsCondition = "";
      if (condition instanceof import_kolmafia5.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof import_kolmafia5.Effect) {
        ballsCondition = "haseffect ".concat((0, import_kolmafia5.toInt)(condition));
      } else if (condition instanceof import_kolmafia5.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia5.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia5.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia5.Class) {
        if ((0, import_kolmafia5.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof import_kolmafia5.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }
      return ballsCondition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item4() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
  return Macro2;
}();
_defineProperty3(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty3(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty3(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());

// node_modules/libram/dist/maximize.js
var import_kolmafia7 = require("kolmafia");

// node_modules/libram/dist/logger.js
var import_kolmafia6 = require("kolmafia");
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(arg) {
  var key = _toPrimitive5(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive5(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var defaultHandlers = {
  info: function(message) {
    (0, import_kolmafia6.printHtml)("<b>[Libram]</b> ".concat(message));
    (0, import_kolmafia6.logprint)("[Libram] ".concat(message));
  },
  warning: function(message) {
    (0, import_kolmafia6.printHtml)('<span style="background: orange; color: white;"><b>[Libram]</b> '.concat(message, "</span>"));
    (0, import_kolmafia6.logprint)("[Libram] ".concat(message));
  },
  error: function(_error) {
    (0, import_kolmafia6.printHtml)('<span style="background: red; color: white;"><b>[Libram]</b> '.concat(_error.toString(), "</span>"));
    (0, import_kolmafia6.logprint)("[Libram] ".concat(_error.toString()));
  }
};
var Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck5(this, Logger2);
    _defineProperty4(this, "handlers", defaultHandlers);
  }
  _createClass5(Logger2, [{
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: function log(level, message) {
      this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log("info", message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log("warning", message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log("error", message);
    }
  }]);
  return Logger2;
}();
var logger_default = new Logger();

// node_modules/libram/dist/maximize.js
var _templateObject3;
var _templateObject211;
var _templateObject35;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject92;
var _templateObject102;
var _templateObject112;
var _templateObject122;
var _templateObject132;
var _templateObject142;
var _templateObject152;
var _templateObject162;
var _templateObject172;
var _templateObject182;
var _templateObject192;
var _templateObject202;
var _templateObject212;
var _templateObject222;
var _templateObject232;
var _templateObject242;
var _templateObject252;
var _templateObject262;
var _templateObject272;
var _templateObject282;
var _templateObject292;
var _templateObject302;
var _templateObject312;
var _templateObject322;
var _templateObject332;
var _templateObject342;
var _templateObject352;
var _templateObject36;
var _templateObject37;
var _templateObject38;
var _templateObject39;
var _templateObject40;
var _templateObject41;
var _templateObject42;
var _templateObject43;
var _templateObject44;
var _templateObject45;
var _templateObject46;
var _templateObject47;
var _templateObject48;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey6(descriptor.key), descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(arg) {
  var key = _toPrimitive6(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive6(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item4) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item4) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item4));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray3(defaultOptions.bonusEquip), _toConsumableArray3((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray3(defaultOptions.preventSlot), _toConsumableArray3((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread3(_objectSpread3({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var modeableItems = {
  backupcamera: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral3(["backup camera"]))),
  umbrella: $item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral3(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral3(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral3(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral3(["Jurassic Parka"])))
};
var modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  }
};
function getCurrentModes() {
  var modes = {};
  var _iterator = _createForOfIteratorHelper4(modeableCommands), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      if ((0, import_kolmafia7.haveEquipped)(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper4(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      if ((0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0) {
        if (modeableState[command]() !== modes[command]) {
          (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral3(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /* @__PURE__ */ _createClass6(function CacheEntry2(equipment, rider, familiar, canEquipItemCount2, modes) {
  _classCallCheck6(this, CacheEntry2);
  _defineProperty5(this, "equipment", void 0);
  _defineProperty5(this, "rider", void 0);
  _defineProperty5(this, "familiar", void 0);
  _defineProperty5(this, "canEquipItemCount", void 0);
  _defineProperty5(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount2;
  this.modes = modes;
});
var _outfitSlots = /* @__PURE__ */ new WeakMap();
var _useHistory = /* @__PURE__ */ new WeakMap();
var _maxSize = /* @__PURE__ */ new WeakMap();
var OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck6(this, OutfitLRUCache2);
    _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _useHistory, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _maxSize, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  _createClass6(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray3(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value, index) {
        return value === index;
      })) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray3(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      }))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get3(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (index < 0)
        return void 0;
      this.promote(index);
      return "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop();
        if (lastUseIndex === void 0) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        _classPrivateFieldGet(this, _useHistory).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(this, _outfitSlots, []);
      _classPrivateFieldSet(this, _useHistory, []);
    }
  }]);
  return OutfitLRUCache2;
}();
_defineProperty5(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {};
var outfitCache = new OutfitLRUCache(6);
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral3(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  if (stats.every(function(value, index) {
    return value === cachedStats[index];
  })) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item4) {
    return (0, import_kolmafia7.canEquip)(item4);
  }).length;
  return cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar) {
    logger_default.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    logger_default.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    if (!(0, import_kolmafia7.isWearingOutfit)(outfitName)) {
      (0, import_kolmafia7.outfit)(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral3(["familiar"]))));
    if (familiarEquip)
      (0, import_kolmafia7.equip)($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral3(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper4(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item4 = _step3$value[1];
        if ((0, import_kolmafia7.equippedItem)(slot) !== item4 && (0, import_kolmafia7.availableAmount)(item4) > 0) {
          (0, import_kolmafia7.equip)(slot, item4);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral3(["Crown of Thrones"]))))) {
    (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral3(["Crown of Thrones"])))) || $familiar.none);
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral3(["Buddy Bjorn"]))))) {
    (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) || $familiar.none);
  }
  applyModes(_objectSpread3(_objectSpread3({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral3(["hat"]))), $slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral3(["back"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral3(["shirt"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral3(["weapon, off-hand"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral3(["pants"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral3(["acc1, acc2, acc3"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral3(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var success = true;
  var _iterator4 = _createForOfIteratorHelper4(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref) {
        var _ref2 = _slicedToArray4(_ref, 2), item4 = _ref2[1];
        return item4 !== null;
      });
      var desiredSet = desiredSlots.map(function(_ref3) {
        var _ref4 = _slicedToArray4(_ref3, 2), item4 = _ref4[1];
        return item4;
      });
      var equippedSet = desiredSlots.map(function(_ref5) {
        var _ref6 = _slicedToArray4(_ref5, 1), slot = _ref6[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral3(["Crown of Thrones"]))))) {
    if (entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral3(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)()) {
      if (warn) {
        logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral3(["Crown of Thrones"])))), " in ").concat($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral3(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral3(["Buddy Bjorn"]))))) {
    if (entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)()) {
      if (warn) {
        logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral3(["Buddy Bjorn"])))), " in ").concat($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral3(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map();
  var rider = /* @__PURE__ */ new Map();
  var _iterator5 = _createForOfIteratorHelper4(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral3(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral3(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral3(["card-sleeve"])))));
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral3(["Crown of Thrones"])))) > 0) {
    rider.set($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral3(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)());
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral3(["Buddy Bjorn"])))) > 0) {
    rider.set($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral3(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper4(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral3(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral3(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral3(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral3(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper4(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral3(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral3(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral3(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral3(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread3(_objectSpread3({}, getCurrentModes()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate;
  var objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item4) {
    return "equip ".concat(item4);
  }).sort()), _toConsumableArray3(preventEquip.map(function(item4) {
    return "-equip ".concat(item4);
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref7) {
    var _ref8 = _slicedToArray4(_ref7, 2), bonus = _ref8[1];
    return bonus !== 0;
  }).map(function(_ref9) {
    var _ref10 = _slicedToArray4(_ref9, 2), item4 = _ref10[0], bonus = _ref10[1];
    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item4);
  }).sort())))).join(", ");
  var untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  });
  var cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort())).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false))
      return true;
    logger_default.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      logger_default.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap();
var _maximizeOptions = /* @__PURE__ */ new WeakMap();
var Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck6(this, Requirement2);
    _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);
    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  _createClass6(Requirement2, [{
    key: "maximizeParameters",
    get: function get3() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get3() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      return new Requirement2([].concat(_toConsumableArray3(this.maximizeParameters), _toConsumableArray3(other.maximizeParameters)), {
        updateOnFamiliarChange: optionsA.updateOnFamiliarChange || other.maximizeOptions.updateOnFamiliarChange,
        updateOnCanEquipChanged: optionsA.updateOnCanEquipChanged || other.maximizeOptions.updateOnCanEquipChanged,
        forceEquip: [].concat(_toConsumableArray3((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray3((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray3((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray3((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray3((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray3((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray3((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray3((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray3((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray3((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : [])),
        forceUpdate: optionsA.forceUpdate || optionsB.forceUpdate
      });
    }
  }, {
    key: "maximize",
    value: function maximize2() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize2() {
      for (var _len = arguments.length, requirements = new Array(_len), _key = 0; _key < _len; _key++) {
        requirements[_key] = arguments[_key];
      }
      Requirement2.merge(requirements).maximize();
    }
  }]);
  return Requirement2;
}();

// node_modules/core-js/modules/es.object.values.js
var $3 = require_export();
var $values = require_object_to_array().values;
$3({
  target: "Object",
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

// node_modules/libram/dist/ascend.js
var import_kolmafia17 = require("kolmafia");

// node_modules/libram/dist/modifier.js
var import_kolmafia8 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
var booleanModifiers = ["Softcore Only", "Single Equip", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Attacks Can't Miss", "Pirate", "Breakable", "Drops Items", "Drops Meat"];
var classModifiers = ["Class"];
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Surgeonosity", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Clowniness", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water"];
var effectModifiers = ["Effect", "Rollover Effect"];
var monsterModifiers = ["Avatar"];
var skillModifiers = ["Skill"];
var statModifiers = ["Plumber Stat"];
var stringModifiers = ["Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie"];

// node_modules/libram/dist/modifier.js
function get2(name, subject) {
  if (arrayContains(name, booleanModifiers)) {
    return subject === void 0 ? (0, import_kolmafia8.booleanModifier)(name) : (0, import_kolmafia8.booleanModifier)(subject, name);
  }
  if (arrayContains(name, classModifiers)) {
    return (0, import_kolmafia8.classModifier)(subject, name);
  }
  if (arrayContains(name, effectModifiers)) {
    return (0, import_kolmafia8.effectModifier)(subject, name);
  }
  if (arrayContains(name, monsterModifiers)) {
    return (0, import_kolmafia8.monsterModifier)(subject, name);
  }
  if (arrayContains(name, numericModifiers)) {
    return subject === void 0 ? (0, import_kolmafia8.numericModifier)(name) : (0, import_kolmafia8.numericModifier)(subject, name);
  }
  if (arrayContains(name, skillModifiers)) {
    return (0, import_kolmafia8.skillModifier)(subject, name);
  }
  if (arrayContains(name, stringModifiers)) {
    return subject === void 0 ? (0, import_kolmafia8.stringModifier)(name) : (0, import_kolmafia8.stringModifier)(subject, name);
  }
  if (arrayContains(name, statModifiers)) {
    return (0, import_kolmafia8.statModifier)(subject, name);
  }
}

// node_modules/libram/dist/resources/2014/CrimboShrub.js
var CrimboShrub_exports = {};
__export(CrimboShrub_exports, {
  decorate: function() {
    return decorate;
  },
  have: function() {
    return have2;
  }
});
var import_kolmafia9 = require("kolmafia");
var _templateObject49;
var _templateObject213;
var _templateObject310;
var _templateObject410;
function _taggedTemplateLiteral4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have2() {
  return have($familiar(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral4(["Crimbo Shrub"]))));
}
var Toppers = {
  Muscle: 1,
  Mysticality: 2,
  Moxie: 3
};
var Lights = {
  "Prismatic Damage": 1,
  "Hot Damage": 2,
  "Cold Damage": 3,
  "Stench Damage": 4,
  "Spooky Damage": 5,
  "Sleaze Damage": 6
};
var Garland = {
  "HP Regen": 1,
  "PvP Fights": 2,
  Blocking: 3
};
var Gifts = {
  "Yellow Ray": 1,
  "Red Ray": 2,
  Gifts: 3
};
var Prefs = {
  Muscle: "Muscle",
  Mysticality: "Mysticality",
  Moxie: "Moxie",
  Prismatic: "Prismatic Damage",
  Hot: "Hot Damage",
  Cold: "Cold Damage",
  Stench: "Stench Damage",
  Spooky: "Spooky Damage",
  Sleaze: "Sleaze Damage",
  HP: "HP Regen",
  PvP: "PvP Fights",
  blocking: "Blocking",
  yellow: "Yellow Ray",
  meat: "Red Ray",
  gifts: "Gifts"
};
function isDecoratedWith(topper, lights, garland, gifts) {
  var decorations = [get("shrubTopper"), get("shrubLights"), get("shrubGarland"), get("shrubGifts")].map(function(x) {
    return Prefs[x];
  });
  return [topper, lights, garland, gifts].every(function(x, i) {
    return x === decorations[i];
  });
}
function decorate(topper, lights, garland, gifts) {
  if (!have2())
    return false;
  if (get("_shrubDecorated"))
    return isDecoratedWith(topper, lights, garland, gifts);
  if (!have($item(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral4(["box of old Crimbo decorations"]))))) {
    (0, import_kolmafia9.useFamiliar)($familiar(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral4(["Crimbo Shrub"]))));
  }
  (0, import_kolmafia9.visitUrl)("inv_use.php?pwd=&which=99&whichitem=".concat((0, import_kolmafia9.toInt)($item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral4(["box of old Crimbo decorations"]))))));
  (0, import_kolmafia9.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=".concat(Toppers[topper], "&lights=").concat(Lights[lights], "&garland=").concat(Garland[garland], "&gift=").concat(Gifts[gifts]));
  return true;
}

// node_modules/libram/dist/resources/2014/DNALab.js
var DNALab_exports = {};
__export(DNALab_exports, {
  getEffect: function() {
    return getEffect2;
  },
  getTonic: function() {
    return getTonic;
  },
  have: function() {
    return have3;
  },
  hybridize: function() {
    return hybridize;
  },
  installed: function() {
    return installed;
  },
  isHybridized: function() {
    return isHybridized;
  },
  makeTonic: function() {
    return makeTonic;
  },
  phylumFor: function() {
    return phylumFor;
  },
  tonicsLeft: function() {
    return tonicsLeft;
  }
});
var import_kolmafia10 = require("kolmafia");
var _templateObject50;
var _templateObject214;
var _templateObject311;
var _templateObject411;
var _templateObject52;
var _templateObject62;
var _templateObject72;
var _templateObject82;
var _templateObject93;
var _templateObject103;
var _templateObject113;
var _templateObject123;
var _templateObject133;
var _templateObject143;
var _templateObject153;
var _templateObject163;
var _templateObject173;
var _templateObject183;
var _templateObject193;
var _templateObject203;
var _templateObject215;
var _templateObject223;
var _templateObject233;
var _templateObject243;
var _templateObject253;
var _templateObject263;
var _templateObject273;
var _templateObject283;
var _templateObject293;
var _templateObject303;
var _templateObject313;
var _templateObject323;
var _templateObject333;
var _templateObject343;
var _templateObject353;
var _templateObject362;
var _templateObject372;
var _templateObject382;
var _templateObject392;
var _templateObject402;
var _templateObject412;
var _templateObject422;
var _templateObject432;
var _templateObject442;
var _templateObject452;
var _templateObject462;
var _templateObject472;
var _templateObject482;
var _templateObject492;
var _templateObject502;
var _templateObject51;
var _templateObject522;
var _templateObject53;
var _templateObject54;
var _templateObject55;
var _templateObject56;
var _templateObject57;
var _templateObject58;
var _templateObject59;
var _templateObject60;
var _templateObject61;
var _templateObject622;
var _templateObject63;
var _templateObject64;
var _templateObject65;
var _templateObject66;
var _templateObject67;
var _templateObject68;
var _templateObject69;
var _templateObject70;
var _templateObject71;
var _templateObject722;
var _templateObject73;
var _templateObject74;
var _templateObject75;
var _templateObject76;
var _templateObject77;
var _templateObject78;
var _templateObject79;
var _templateObject80;
var _templateObject81;
var _templateObject822;
var _templateObject83;
var _templateObject84;
var _templateObject85;
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral5(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var lab = $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral5(["Little Geneticist DNA-Splicing Lab"])));
function have3() {
  return have(lab) || (0, import_kolmafia10.getWorkshed)() === lab;
}
function installed() {
  return (0, import_kolmafia10.getWorkshed)() === lab;
}
var phylaEffects = /* @__PURE__ */ new Map([[$phylum(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral5(["beast"]))), $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral5(["Human-Beast Hybrid"])))], [$phylum(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral5(["bug"]))), $effect(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral5(["Human-Insect Hybrid"])))], [$phylum(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral5(["constellation"]))), $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral5(["Human-Constellation Hybrid"])))], [$phylum(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral5(["construct"]))), $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral5(["Human-Machine Hybrid"])))], [$phylum(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral5(["demon"]))), $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral5(["Human-Demon Hybrid"])))], [$phylum(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral5(["dude"]))), $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral5(["Human-Human Hybrid"])))], [$phylum(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral5(["elemental"]))), $effect(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral5(["Human-Elemental Hybrid"])))], [$phylum(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral5(["elf"]))), $effect(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral5(["Human-Elf Hybrid"])))], [$phylum(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral5(["fish"]))), $effect(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral5(["Human-Fish Hybrid"])))], [$phylum(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral5(["goblin"]))), $effect(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral5(["Human-Goblin Hybrid"])))], [$phylum(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral5(["hippy"]))), $effect(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral5(["Human-Hobo Hybrid"])))], [$phylum(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral5(["horror"]))), $effect(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral5(["Human-Horror Hybrid"])))], [$phylum(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral5(["humanoid"]))), $effect(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral5(["Human-Humanoid Hybrid"])))], [$phylum(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral5(["mer-kin"]))), $effect(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral5(["Human-Mer-kin Hybrid"])))], [$phylum(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral5(["orc"]))), $effect(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral5(["Human-Orc Hybrid"])))], [$phylum(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral5(["penguin"]))), $effect(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral5(["Human-Penguin Hybrid"])))], [$phylum(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral5(["pirate"]))), $effect(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral5(["Human-Pirate Hybrid"])))], [$phylum(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral5(["plant"]))), $effect(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral5(["Human-Plant Hybrid"])))], [$phylum(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral5(["slime"]))), $effect(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral5(["Human-Slime Hybrid"])))], [$phylum(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral5(["undead"]))), $effect(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral5(["Human-Undead Hybrid"])))], [$phylum(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral5(["weird"]))), $effect(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral5(["Human-Weird Thing Hybrid"])))]]);
var phylaTonics = /* @__PURE__ */ new Map([[$phylum(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral5(["beast"]))), $item(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral5(["Gene Tonic: Beast"])))], [$phylum(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral5(["bug"]))), $item(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral5(["Gene Tonic: Insect"])))], [$phylum(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral5(["constellation"]))), $item(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral5(["Gene Tonic: Constellation"])))], [$phylum(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral5(["construct"]))), $item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral5(["Gene Tonic: Construct"])))], [$phylum(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral5(["demon"]))), $item(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral5(["Gene Tonic: Demon"])))], [$phylum(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral5(["dude"]))), $item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral5(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral5(["elemental"]))), $item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral5(["Gene Tonic: Elemental"])))], [$phylum(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral5(["elf"]))), $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral5(["Gene Tonic: Elf"])))], [$phylum(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral5(["fish"]))), $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral5(["Gene Tonic: Fish"])))], [$phylum(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral5(["goblin"]))), $item(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral5(["Gene Tonic: Goblin"])))], [$phylum(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral5(["hippy"]))), $item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral5(["Gene Tonic: Hobo"])))], [$phylum(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral5(["horror"]))), $item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral5(["Gene Tonic: Horror"])))], [$phylum(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral5(["humanoid"]))), $item(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral5(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral5(["mer-kin"]))), $item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral5(["Gene Tonic: Mer-kin"])))], [$phylum(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral5(["orc"]))), $item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral5(["Gene Tonic: Orc"])))], [$phylum(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral5(["penguin"]))), $item(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral5(["Gene Tonic: Penguin"])))], [$phylum(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral5(["pirate"]))), $item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral5(["Gene Tonic: Pirate"])))], [$phylum(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral5(["plant"]))), $item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral5(["Gene Tonic: Plant"])))], [$phylum(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral5(["slime"]))), $item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral5(["Gene Tonic: Slime"])))], [$phylum(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral5(["undead"]))), $item(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral5(["Gene Tonic: Undead"])))], [$phylum(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral5(["weird"]))), $item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral5(["Gene Tonic: Weird"])))]]);
var tonicEffects = Array.from(phylaEffects.values());
function isHybridized(tonic) {
  if (!tonic)
    return installed() && get("_dnaHybrid");
  var tonicEffect = tonic instanceof import_kolmafia10.Effect ? tonic : tonic instanceof import_kolmafia10.Phylum ? getEffect2(tonic) : get2("Effect", tonic);
  return tonicEffects.includes(tonicEffect) && (0, import_kolmafia10.haveEffect)(tonicEffect) === 2147483647;
}
function getTonic(phylum) {
  var _phylaTonics$get;
  return (_phylaTonics$get = phylaTonics.get(phylum)) !== null && _phylaTonics$get !== void 0 ? _phylaTonics$get : $item.none;
}
function getEffect2(phylum) {
  var _phylaEffects$get;
  return (_phylaEffects$get = phylaEffects.get(phylum)) !== null && _phylaEffects$get !== void 0 ? _phylaEffects$get : $effect.none;
}
function phylumFor(dnatype) {
  if (dnatype instanceof import_kolmafia10.Effect) {
    var phylumPair = Array.from(phylaEffects.entries()).find(function(_ref) {
      var _ref2 = _slicedToArray5(_ref, 2), effect = _ref2[1];
      return effect === dnatype;
    });
    return phylumPair ? phylumPair[0] : null;
  } else {
    var _phylumPair = Array.from(phylaTonics.entries()).find(function(_ref3) {
      var _ref4 = _slicedToArray5(_ref3, 2), tonic = _ref4[1];
      return tonic === dnatype;
    });
    return _phylumPair ? _phylumPair[0] : null;
  }
}
function hybridize() {
  if (get("_dnaHybrid"))
    return false;
  if (!installed())
    return false;
  var currentSyringe = get("dnaSyringe");
  if (!currentSyringe)
    return false;
  var tonicPotion = getTonic(currentSyringe);
  var expectedEffect = get2("Effect", tonicPotion);
  (0, import_kolmafia10.cliExecute)("camp dnainject");
  return isHybridized(expectedEffect);
}
function makeTonic() {
  var amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
  if (!installed())
    return false;
  var currentSyringe = get("dnaSyringe");
  if (!currentSyringe)
    return false;
  var tonicPotion = getTonic(currentSyringe);
  var amountToMake = clamp(amount, 0, tonicsLeft());
  var startingAmount = (0, import_kolmafia10.itemAmount)(tonicPotion);
  (0, import_kolmafia10.cliExecute)("camp dnapotion ".concat(amountToMake));
  return (0, import_kolmafia10.itemAmount)(tonicPotion) - startingAmount === amountToMake;
}
function tonicsLeft() {
  return clamp(3 - get("_dnaPotionsMade"), 0, 3);
}

// node_modules/libram/dist/resources/2015/ChateauMantegna.js
var ChateauMantegna_exports = {};
__export(ChateauMantegna_exports, {
  ceilings: function() {
    return ceilings;
  },
  changeCeiling: function() {
    return changeCeiling;
  },
  changeDesk: function() {
    return changeDesk;
  },
  changeNightstand: function() {
    return changeNightstand;
  },
  desks: function() {
    return desks;
  },
  fightPainting: function() {
    return fightPainting;
  },
  getCeiling: function() {
    return getCeiling;
  },
  getDesk: function() {
    return getDesk;
  },
  getNightstand: function() {
    return getNightstand;
  },
  have: function() {
    return have4;
  },
  nightstands: function() {
    return nightstands;
  },
  paintingFought: function() {
    return paintingFought;
  },
  paintingMonster: function() {
    return paintingMonster;
  }
});
var import_kolmafia11 = require("kolmafia");
function have4() {
  return get("chateauAvailable");
}
function paintingMonster() {
  return get("chateauMonster");
}
function paintingFought() {
  return get("_chateauMonsterFought");
}
function fightPainting() {
  (0, import_kolmafia11.visitUrl)("place.php?whichplace=chateau&action=chateau_painting", false);
  return (0, import_kolmafia11.runCombat)();
}
var desks = ["fancy stationery set", "Swiss piggy bank", "continental juice bar"];
var ceilings = ["antler chandelier", "ceiling fan", "artificial skylight"];
var nightstands = ["foreign language tapes", "bowl of potpourri", "electric muscle stimulator"];
function getDesk() {
  var _desks$find;
  return (_desks$find = desks.find(function(desk) {
    return Object.keys((0, import_kolmafia11.getChateau)()).includes(desk);
  })) !== null && _desks$find !== void 0 ? _desks$find : null;
}
function getCeiling() {
  var _ceilings$find;
  return (_ceilings$find = ceilings.find(function(ceiling) {
    return Object.keys((0, import_kolmafia11.getChateau)()).includes(ceiling);
  })) !== null && _ceilings$find !== void 0 ? _ceilings$find : null;
}
function getNightstand() {
  var _nightstands$find;
  return (_nightstands$find = nightstands.find(function(nightstand) {
    return Object.keys((0, import_kolmafia11.getChateau)()).includes(nightstand);
  })) !== null && _nightstands$find !== void 0 ? _nightstands$find : null;
}
function changeDesk(desk) {
  if (getDesk() === desk)
    return true;
  if (!desks.includes(desk))
    return false;
  (0, import_kolmafia11.buy)(import_kolmafia11.Item.get(desk));
  return getDesk() === desk;
}
function changeCeiling(ceiling) {
  if (getCeiling() === ceiling)
    return true;
  if (!ceilings.includes(ceiling))
    return false;
  (0, import_kolmafia11.buy)(import_kolmafia11.Item.get(ceiling));
  return getCeiling() === ceiling;
}
function changeNightstand(nightstand) {
  if (getNightstand() === nightstand)
    return true;
  if (!nightstands.includes(nightstand))
    return false;
  (0, import_kolmafia11.buy)(import_kolmafia11.Item.get(nightstand));
  return getNightstand() === nightstand;
}

// node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_exports = {};
__export(Witchess_exports, {
  fightPiece: function() {
    return fightPiece;
  },
  fightsDone: function() {
    return fightsDone;
  },
  have: function() {
    return have5;
  },
  item: function() {
    return item;
  },
  pieces: function() {
    return pieces;
  }
});
var import_kolmafia12 = require("kolmafia");
var _templateObject86;
function _taggedTemplateLiteral6(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral6(["Witchess Set"])));
function have5() {
  return haveInCampground(item);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = import_kolmafia12.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece))
    throw new Error("That is not a valid piece.");
  if (!(0, import_kolmafia12.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!(0, import_kolmafia12.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!(0, import_kolmafia12.visitUrl)("choice.php?option=1&pwd=".concat((0, import_kolmafia12.myHash)(), "&whichchoice=1182&piece=").concat((0, import_kolmafia12.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  return (0, import_kolmafia12.runCombat)();
}

// node_modules/libram/dist/resources/2017/MummingTrunk.js
var MummingTrunk_exports = {};
__export(MummingTrunk_exports, {
  currentCostumes: function() {
    return currentCostumes;
  }
});
var import_kolmafia13 = require("kolmafia");
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function toModifier(input) {
  var regExp = new RegExp(/Experience \((.*?)\)/);
  var matcher = input.match(regExp);
  return matcher ? "".concat(matcher[2], " Experience") : input;
}
function currentCostumes() {
  var entries2 = get("_mummeryMods").split(",");
  var returnValue = /* @__PURE__ */ new Map();
  var regExp = new RegExp(/([^:]+): \[(d+)\*fam\(([^)]+)\)\]/);
  var _iterator = _createForOfIteratorHelper5(entries2), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var entry = _step.value;
      var matcher = entry.match(regExp);
      if (matcher) {
        returnValue.set((0, import_kolmafia13.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have6;
  },
  item: function() {
    return item2;
  },
  setSong: function() {
    return setSong;
  },
  song: function() {
    return song;
  },
  songBoomSongs: function() {
    return songBoomSongs;
  },
  songChangesLeft: function() {
    return songChangesLeft;
  }
});
var import_kolmafia14 = require("kolmafia");
var _templateObject87;
function _taggedTemplateLiteral7(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral7(["SongBoom\u2122 BoomBox"])));
function have6() {
  return have(item2);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
function song() {
  var stored = get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
function songChangesLeft() {
  return get("_boomBoxSongsLeft");
}
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0)
      throw new Error("Out of song changes!");
    (0, import_kolmafia14.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have7;
  },
  item: function() {
    return item3;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
var import_kolmafia15 = require("kolmafia");
var _templateObject88;
var _templateObject216;
var _templateObject314;
var _templateObject413;
var _templateObject510;
var _templateObject610;
var _templateObject710;
var _templateObject89;
var _templateObject94;
function _taggedTemplateLiteral8(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = import_kolmafia15.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia15.availableAmount)(item3) > 0;
}
function have7() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia15.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia15.toLocation)(name);
  });
}
var use = function() {
  return (0, import_kolmafia15.visitUrl)("inv_use.php?pwd&whichitem=10954");
};
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!available())
    return null;
  var pageHtml = use();
  if (upgrade2 && (0, import_kolmafia15.availableChoiceOptions)()[1])
    (0, import_kolmafia15.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof import_kolmafia15.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  if (!location)
    return null;
  if (!locationsAvailable.includes(location))
    return null;
  if (!(0, import_kolmafia15.handlingChoice)())
    use();
  (0, import_kolmafia15.runChoice)(2, "heythereprogrammer=".concat(location.id));
  if ((0, import_kolmafia15.handlingChoice)())
    (0, import_kolmafia15.visitUrl)("main.php");
  return location;
}
function upgrade() {
  use();
  var canUpgrade = (0, import_kolmafia15.availableChoiceOptions)()[1] !== void 0;
  if (canUpgrade)
    (0, import_kolmafia15.runChoice)(1);
  (0, import_kolmafia15.visitUrl)("main.php");
  return canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = use();
  (0, import_kolmafia15.visitUrl)("main.php");
  return checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia15.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"];
var UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral8(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral8(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral8(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral8(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral8(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral8(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral8(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral8(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral8(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment;
  var difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var import_kolmafia16 = require("kolmafia");
var _templateObject90;
function _taggedTemplateLiteral9(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var locket = $item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral9(["Combat Lover's Locket"])));
function have8() {
  return have(locket);
}
function parseLocketProperty() {
  return get("_locketMonstersFought").split(",").filter(function(id) {
    return id.trim().length > 0;
  });
}
function reminiscesLeft() {
  return have8() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
function monstersReminisced() {
  return parseLocketProperty().map(function(id) {
    return (0, import_kolmafia16.toMonster)(id);
  });
}
function reminisce(monster) {
  if (!have8() || reminiscesLeft() === 0 || !(0, import_kolmafia16.getLocketMonsters)()[monster.name]) {
    return false;
  }
  (0, import_kolmafia16.cliExecute)("reminisce ".concat(monster));
  (0, import_kolmafia16.runCombat)();
  return monstersReminisced().includes(monster);
}

// node_modules/libram/dist/ascend.js
var _templateObject91;
var _templateObject217;
var _templateObject315;
var _templateObject414;
var _templateObject511;
var _templateObject611;
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray9(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral10(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey7(descriptor.key), descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties7(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf3(subClass, superClass);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized3(self2);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper3(Class6) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper3 = function _wrapNativeSuper5(Class7) {
    if (Class7 === null || !_isNativeFunction3(Class7))
      return Class7;
    if (typeof Class7 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class7))
        return _cache.get(Class7);
      _cache.set(Class7, Wrapper);
    }
    function Wrapper() {
      return _construct3(Class7, arguments, _getPrototypeOf3(this).constructor);
    }
    Wrapper.prototype = Object.create(Class7.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf3(Wrapper, Class7);
  };
  return _wrapNativeSuper3(Class6);
}
function _construct3(Parent, args, Class6) {
  if (_isNativeReflectConstruct3()) {
    _construct3 = Reflect.construct.bind();
  } else {
    _construct3 = function _construct5(Parent2, args2, Class7) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class7)
        _setPrototypeOf3(instance, Class7.prototype);
      return instance;
    };
  }
  return _construct3.apply(null, arguments);
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction3(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf6(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(arg) {
  var key = _toPrimitive7(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive7(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
var Lifestyle;
(function(Lifestyle2) {
  Lifestyle2[Lifestyle2["casual"] = 1] = "casual";
  Lifestyle2[Lifestyle2["softcore"] = 2] = "softcore";
  Lifestyle2[Lifestyle2["normal"] = 2] = "normal";
  Lifestyle2[Lifestyle2["hardcore"] = 3] = "hardcore";
})(Lifestyle || (Lifestyle = {}));
function permedSkills() {
  return new Map(Array.from(Object.entries((0, import_kolmafia17.getPermedSkills)())).map(function(_ref) {
    var _ref2 = _slicedToArray6(_ref, 2), skillName = _ref2[0], isHardcore = _ref2[1];
    return [(0, import_kolmafia17.toSkill)(skillName), isHardcore ? Lifestyle.hardcore : Lifestyle.softcore];
  }));
}
var AscendError = /* @__PURE__ */ function(_Error) {
  _inherits3(AscendError2, _Error);
  var _super = _createSuper3(AscendError2);
  function AscendError2(cause) {
    var _this;
    _classCallCheck7(this, AscendError2);
    if (!cause) {
      _this = _super.call(this, "Failed to ascend--do you have a pending trade offer?");
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia17.Skill) {
      var reason = cause.permable ? (0, import_kolmafia17.haveSkill)(cause) ? "too karmaically expensive" : "not a skill you currently know" : "unpermable";
      _this = _super.call(this, "Skill ".concat(cause, " is ").concat(reason, "!"));
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia17.Item) {
      _this = _super.call(this, "Invalid astral item: ".concat(cause, "!"));
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia17.Class) {
      _this = _super.call(this, "Invalid class ".concat(cause, " for this path!"));
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia17.Path) {
      _this = _super.call(this, "Invalid path ".concat(cause, "!"));
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    } else {
      _this = _super.call(this, cause);
      _defineProperty6(_assertThisInitialized3(_this), "cause", void 0);
    }
    _this.cause = cause;
    return _possibleConstructorReturn3(_this);
  }
  return _createClass7(AscendError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
var gardens = ["packet of pumpkin seeds", "Peppermint Pip Packet", "packet of dragon's teeth", "packet of beer seeds", "packet of winter seeds", "packet of thanksgarden seeds", "packet of tall grass seeds", "packet of mushroom spores"];
var eudorae = ["My Own Pen Pal kit", "GameInformPowerDailyPro subscription card", "Xi Receiver Unit", "New-You Club Membership Form", "Our Daily Candles\u2122 order form"];
var isGarden = function(x) {
  return arrayContains(x, gardens);
};
var isEudora = function(x) {
  return arrayContains(x, eudorae);
};
var isDesk = function(x) {
  return arrayContains(x, ChateauMantegna_exports.desks);
};
var isNightstand = function(x) {
  return arrayContains(x, ChateauMantegna_exports.nightstands);
};
var isCeiling = function(x) {
  return arrayContains(x, ChateauMantegna_exports.ceilings);
};
var AscensionPrepError = /* @__PURE__ */ function(_Error2) {
  _inherits3(AscensionPrepError2, _Error2);
  var _super2 = _createSuper3(AscensionPrepError2);
  function AscensionPrepError2(cause, original) {
    var _this2;
    _classCallCheck7(this, AscensionPrepError2);
    if (isGarden(cause)) {
      _this2 = _super2.call(this, "Unable to swap garden to ".concat(cause, "; garden is currently ").concat(original, "."));
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isEudora(cause)) {
      _this2 = _super2.call(this, "Unable to swap eudora to ".concat(cause, "; eudora is currently ").concat(original, "."));
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isDesk(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau desk to ".concat(cause, "; desk is currently ").concat(original, "."));
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isNightstand(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau nightstand to ".concat(cause, "; nightstand is currently ").concat(original, "."));
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isCeiling(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau ceiling to ".concat(cause, "; ceiling is currently ").concat(original, "."));
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    } else {
      _this2 = _super2.call(this, cause);
      _defineProperty6(_assertThisInitialized3(_this2), "cause", void 0);
    }
    _this2.cause = cause;
    return _possibleConstructorReturn3(_this2);
  }
  return _createClass7(AscensionPrepError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
function toMoonId(moon, playerClass) {
  if (typeof moon === "number")
    return moon;
  var offset = function() {
    switch (playerClass.primestat) {
      case $stat(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral10(["Muscle"]))):
        return 0;
      case $stat(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral10(["Mysticality"]))):
        return 1;
      case $stat(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral10(["Moxie"]))):
        return 2;
      default:
        throw new AscendError("unknown prime stat for ".concat(playerClass));
    }
  };
  switch (moon.toLowerCase()) {
    case "mongoose":
      return 1;
    case "wallaby":
      return 2;
    case "vole":
      return 3;
    case "platypus":
      return 4;
    case "opossum":
      return 5;
    case "marmot":
      return 6;
    case "wombat":
      return 7;
    case "blender":
      return 8;
    case "packrat":
      return 9;
    case "degrassi":
    case "degrassi knoll":
    case "friendly degrassi knoll":
    case "knoll":
      return 1 + offset();
    case "canada":
    case "canadia":
    case "little canadia":
      return 4 + offset();
    case "gnomads":
    case "gnomish":
    case "gnomish gnomads camp":
      return 7 + offset();
    default:
      throw new AscendError("Invalid moon sign!");
  }
}
function isInValhalla() {
  var charPaneText = (0, import_kolmafia17.visitUrl)("charpane.php");
  var matches = charPaneText.match(/<img src="[^"]*\/otherimages\/inf_\w+\.gif">/);
  return matches !== null;
}
function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral10(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : void 0;
  var permOptions = arguments.length > 6 ? arguments[6] : void 0;
  if (playerClass.path !== (path.avatar ? path : import_kolmafia17.Path.none)) {
    throw new AscendError(playerClass);
  }
  if (path.id < 0)
    throw new AscendError(path);
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9)
    throw new Error("Invalid moon ".concat(moon));
  if (consumable && !$items(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral10(["astral six-pack, astral hot dog dinner, [10882]carton of astral energy drinks"]))).includes(consumable)) {
    throw new AscendError(consumable);
  }
  if (pet && !$items(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral10(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) {
    throw new AscendError(pet);
  }
  var illegalSkill = permOptions ? Array.from(permOptions.permSkills.keys()).find(function(skill2) {
    return !skill2.permable || !(0, import_kolmafia17.haveSkill)(skill2);
  }) : void 0;
  if (illegalSkill) {
    throw new AscendError(illegalSkill);
  }
  if (!isInValhalla()) {
    (0, import_kolmafia17.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!isInValhalla()) {
    throw new AscendError();
  }
  (0, import_kolmafia17.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) {
    (0, import_kolmafia17.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0, import_kolmafia17.toInt)(consumable)));
  }
  if (pet)
    (0, import_kolmafia17.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0, import_kolmafia17.toInt)(pet)));
  if (permOptions) {
    var currentPerms = permedSkills();
    var karma = get("bankedKarma");
    var _iterator = _createForOfIteratorHelper6(permOptions.permSkills.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _currentPerms$get;
        var _step$value = _slicedToArray6(_step.value, 2), skill = _step$value[0], prospectivePermLevel = _step$value[1];
        var currentPermLevel = (_currentPerms$get = currentPerms.get(skill)) !== null && _currentPerms$get !== void 0 ? _currentPerms$get : Lifestyle.casual;
        if (prospectivePermLevel > currentPermLevel) {
          var expectedKarma = 100 * (prospectivePermLevel - currentPermLevel);
          if (karma < expectedKarma) {
            if (!permOptions.neverAbort)
              throw new AscendError(skill);
            continue;
          }
          karma -= expectedKarma;
          var permText = prospectivePermLevel === Lifestyle.hardcore ? "hcperm" : "scperm";
          (0, import_kolmafia17.visitUrl)("afterlife.php?action=".concat(permText, "&whichskill=").concat((0, import_kolmafia17.toInt)(skill)));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  (0, import_kolmafia17.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat((0, import_kolmafia17.toInt)(playerClass), "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&lamesignok=1&pwd"), true);
}
function prepareAscension() {
  var _throwOnFail;
  var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, garden = _ref3.garden, eudora = _ref3.eudora, chateau = _ref3.chateau, throwOnFail = _ref3.throwOnFail;
  throwOnFail = (_throwOnFail = throwOnFail) !== null && _throwOnFail !== void 0 ? _throwOnFail : true;
  if (garden && !Object.getOwnPropertyNames((0, import_kolmafia17.getCampground)()).includes(garden)) {
    (0, import_kolmafia17.use)(import_kolmafia17.Item.get(garden));
    var gardenName = Object.getOwnPropertyNames((0, import_kolmafia17.getCampground)()).find(isGarden);
    if (gardenName !== garden && throwOnFail) {
      throw new AscensionPrepError(garden, gardenName);
    }
  }
  if (eudora && (0, import_kolmafia17.eudoraItem)().name !== eudora) {
    var eudoraNumber = 1 + eudorae.indexOf(eudora);
    if (!(0, import_kolmafia17.xpath)((0, import_kolmafia17.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(eudoraNumber.toString()) && throwOnFail) {
      throw new AscensionPrepError("Unable to swap eudora to ".concat(eudora, " because you are not subscribed to it."));
    } else {
      (0, import_kolmafia17.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
    }
    if ((0, import_kolmafia17.eudoraItem)() !== import_kolmafia17.Item.get(eudora) && throwOnFail) {
      throw new AscensionPrepError(eudora, (0, import_kolmafia17.eudoraItem)());
    }
  }
  if (chateau && ChateauMantegna_exports.have()) {
    var desk = chateau.desk, ceiling = chateau.ceiling, nightstand = chateau.nightstand;
    if (ceiling && ChateauMantegna_exports.getCeiling() !== ceiling) {
      if (!ChateauMantegna_exports.changeCeiling(ceiling) && throwOnFail) {
        var _ChateauMantegna$getC;
        throw new AscensionPrepError(ceiling, (_ChateauMantegna$getC = ChateauMantegna_exports.getCeiling()) !== null && _ChateauMantegna$getC !== void 0 ? _ChateauMantegna$getC : "unknown");
      }
    }
    if (desk && ChateauMantegna_exports.getDesk() !== desk) {
      if (!ChateauMantegna_exports.changeDesk(desk) && throwOnFail) {
        var _ChateauMantegna$getD;
        throw new AscensionPrepError(desk, (_ChateauMantegna$getD = ChateauMantegna_exports.getDesk()) !== null && _ChateauMantegna$getD !== void 0 ? _ChateauMantegna$getD : "unknown");
      }
    }
    if (nightstand && ChateauMantegna_exports.getNightstand() !== nightstand) {
      if (!ChateauMantegna_exports.changeNightstand(nightstand) && throwOnFail) {
        var _ChateauMantegna$getN;
        throw new AscensionPrepError(nightstand, (_ChateauMantegna$getN = ChateauMantegna_exports.getNightstand()) !== null && _ChateauMantegna$getN !== void 0 ? _ChateauMantegna$getN : "unknown");
      }
    }
  }
}

// node_modules/libram/dist/Clan.js
var import_kolmafia18 = require("kolmafia");
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray10(arr);
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey8(descriptor.key), descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(arg) {
  var key = _toPrimitive8(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive8(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp2(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf4(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if ("number" == typeof i)
        groups[name] = result[i];
      else {
        for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits4(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      indices && (indices.groups = buildGroups(indices, this));
    }
    return result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        var group = groups[name];
        return "$" + (Array.isArray(group) ? group.join("$") : group);
      }));
    }
    if ("function" == typeof substitution) {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf4(o, p);
}
var clanIdCache = {};
var toPlayerId = function(player) {
  return typeof player === "string" ? (0, import_kolmafia18.getPlayerId)(player) : player;
};
var LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck8(this, Clan2);
    _defineProperty7(this, "id", void 0);
    _defineProperty7(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  _createClass8(Clan2, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0, import_kolmafia18.getClanId)()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
  }, {
    key: "join",
    value: function join() {
      return Clan2.join(this.id);
    }
  }, {
    key: "check",
    value: function check() {
      return (0, import_kolmafia18.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = (0, import_kolmafia18.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray7(lastFax, 4), monsterName = _lastFax[3];
      if (!monsterName)
        return null;
      return import_kolmafia18.Monster.get(monsterName);
    }
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = (0, import_kolmafia18.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia18.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, import_kolmafia18.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, import_kolmafia18.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray7(match, 3), name = _match[1], degree = _match[2];
        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank)
        return false;
      var result = (0, import_kolmafia18.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = (0, import_kolmafia18.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = (0, import_kolmafia18.visitUrl)("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray7(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = (0, import_kolmafia18.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach(function(quantity, item4) {
        var needed = Math.max(0, quantity - (0, import_kolmafia18.availableAmount)(item4));
        if (needed === 0) {
          return map.set(item4, 0);
        }
        var foldGroup = getFoldGroup(item4);
        var _iterator = _createForOfIteratorHelper7(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, import_kolmafia18.availableAmount)(foldable));
            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0, import_kolmafia18.cliExecute)("fold ".concat(item4.name));
              needed--;
            }
            return map.set(item4, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia18.refreshStash)();
        for (var _i2 = 0, _arr2 = [item4].concat(_toConsumableArray4(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0, import_kolmafia18.stashAmount)(matchingItem));
          if (quantityToTake === 0)
            continue;
          if (!(0, import_kolmafia18.takeStash)(quantityToTake, matchingItem))
            return;
          if (matchingItem === item4) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, import_kolmafia18.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check())
        throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach(function(quantity, item4) {
        (0, import_kolmafia18.retrieveItem)(quantity, item4);
        var returned = Math.min(quantity, (0, import_kolmafia18.availableAmount)(item4));
        (0, import_kolmafia18.putStash)(returned, item4);
        map.set(item4, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0, import_kolmafia18.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn, returnFn, callback) {
      var borrowed = borrowFn();
      var map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item4) {
            var remaining = quantity - (returned.get(item4) || 0);
            if (remaining > 0) {
              map.set(item4, remaining);
            } else {
              map.delete(item4);
            }
          });
          if (map.size > 0) {
            logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia18.getClanName)().toLowerCase()) {
          return Clan2.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === (0, import_kolmafia18.getClanId)()) {
          return Clan2.get();
        }
      }
      return Clan2._join(clanId);
    }
  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan2.get();
      var clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
  }, {
    key: "get",
    value: function get3() {
      return new Clan2((0, import_kolmafia18.getClanId)(), (0, import_kolmafia18.getClanName)());
    }
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, import_kolmafia18.visitUrl)("clan_signup.php");
      return (0, import_kolmafia18.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, import_kolmafia18.xpath)(validHtml, "//@value")[0]);
        var name = (0, import_kolmafia18.xpath)(validHtml, "//text()")[0];
        return new Clan2(id, name);
      });
    }
  }]);
  return Clan2;
}();

// node_modules/libram/dist/challengePaths/2015/CommunityService.js
var import_kolmafia19 = require("kolmafia");
var _templateObject95;
var _templateObject218;
var _templateObject316;
var _templateObject415;
var _templateObject512;
var _templateObject612;
var _templateObject711;
var _templateObject810;
var _templateObject96;
var _templateObject104;
var _templateObject114;
var _templateObject124;
var _templateObject134;
var _templateObject144;
var _templateObject154;
var _templateObject164;
var _templateObject174;
var _templateObject184;
var _templateObject194;
var _templateObject204;
var _templateObject219;
var _templateObject224;
var _templateObject234;
var _templateObject244;
var _templateObject254;
var _templateObject264;
var _templateObject274;
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray11(o, minLen);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey9(descriptor.key), descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(arg) {
  var key = _toPrimitive9(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive9(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral11(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var thralls = /* @__PURE__ */ new Map([[$stat(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral11(["muscle"]))), $thrall(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral11(["Elbow Macaroni"])))], [$stat(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral11(["moxie"]))), $thrall(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral11(["Penne Dreadful"])))]]);
var statCommunityServicePredictor = function(stat) {
  return function() {
    return 60 - Math.floor(1 / 30 * ((0, import_kolmafia19.myBuffedstat)(stat) - (0, import_kolmafia19.myBasestat)(thralls.get(stat) === (0, import_kolmafia19.myThrall)() && !have($effect(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral11(["Expert Oiliness"])))) ? $stat(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral11(["mysticality"]))) : stat)));
  };
};
var visitCouncil = function() {
  return (0, import_kolmafia19.visitUrl)("council.php");
};
var baseWeight = function() {
  return have($effect(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral11(["Fidoxene"])))) ? 20 : (0, import_kolmafia19.familiarWeight)((0, import_kolmafia19.myFamiliar)());
};
var CommunityService = /* @__PURE__ */ function() {
  function CommunityService2(id, stat, property, predictor, maximizeRequirements) {
    _classCallCheck9(this, CommunityService2);
    _defineProperty8(this, "choice", void 0);
    _defineProperty8(this, "stat", void 0);
    _defineProperty8(this, "property", void 0);
    _defineProperty8(this, "predictor", void 0);
    _defineProperty8(this, "maximizeRequirements", void 0);
    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  _createClass9(CommunityService2, [{
    key: "id",
    get: function get3() {
      return this.choice;
    }
  }, {
    key: "statName",
    get: function get3() {
      return this.stat;
    }
  }, {
    key: "name",
    get: function get3() {
      return this.property;
    }
  }, {
    key: "prediction",
    get: function get3() {
      return this.predictor();
    }
  }, {
    key: "requirement",
    get: function get3() {
      return this.maximizeRequirements;
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return get("csServicesPerformed").includes(this.property);
    }
  }, {
    key: "maximize",
    value: function maximize2() {
      if (this.maximizeRequirements)
        this.maximizeRequirements.maximize();
    }
  }, {
    key: "do",
    value: function _do() {
      if (get("csServicesPerformed").trim().length === 0)
        visitCouncil();
      visitCouncil();
      var councilText = (0, import_kolmafia19.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
  }, {
    key: "run",
    value: function run(prepare) {
      var maxTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      if (this.isDone())
        return "already completed";
      var startTime = Date.now();
      var startTurns = (0, import_kolmafia19.myTurncount)();
      var additionalTurns;
      try {
        var _prepare;
        additionalTurns = (_prepare = prepare()) !== null && _prepare !== void 0 ? _prepare : 0;
      } catch (e) {
        (0, import_kolmafia19.print)("".concat(e), "red");
        return "failed";
      }
      var prediction = this.predictor();
      var council = visitCouncil();
      var turns = this._actualCost(council);
      if (!turns)
        return "already completed";
      if (turns > Math.min(maxTurns, (0, import_kolmafia19.myAdventures)())) {
        return "failed";
      }
      if (!this.do())
        return "failed";
      CommunityService2.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0, import_kolmafia19.myTurncount)() - startTurns,
        seconds: (Date.now() - startTime) / 1e3,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
  }, {
    key: "verifyIsDone",
    value: function verifyIsDone() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function _actualCost(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
  }], [{
    key: "logTask",
    value: function logTask(name, action) {
      var _action;
      var startTime = Date.now();
      var startTurns = (0, import_kolmafia19.myTurncount)();
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService2.log[name] = {
        type: "task",
        turnCost: (0, import_kolmafia19.myTurncount)() - startTurns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - startTime) / 1e3
      };
    }
  }, {
    key: "printLog",
    value: function printLog() {
      var colour = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blue";
      var logEntries = Object.entries(CommunityService2.log);
      for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = _slicedToArray8(_logEntries[_i], 2), testName = _logEntries$_i[0], testEntry = _logEntries$_i[1];
        var type = testEntry.type, predictedTurns = testEntry.predictedTurns, turnCost = testEntry.turnCost, seconds = testEntry.seconds;
        if (type === "test") {
          (0, import_kolmafia19.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          (0, import_kolmafia19.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            (0, import_kolmafia19.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }
          (0, import_kolmafia19.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }
      var totalTime = sum(logEntries, function(_ref) {
        var _ref2 = _slicedToArray8(_ref, 2), testEntry2 = _ref2[1];
        return testEntry2.seconds;
      });
      (0, import_kolmafia19.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
  }]);
  return CommunityService2;
}();
_defineProperty8(CommunityService, "log", {});
_defineProperty8(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", function() {
  return 60 - Math.floor(((0, import_kolmafia19.myMaxhp)() - (0, import_kolmafia19.myBuffedstat)($stat(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral11(["muscle"])))) - 3) / 30);
}, new Requirement(["HP"], {})));
_defineProperty8(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral11(["Muscle"])))), new Requirement(["Muscle"], {})));
_defineProperty8(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral11(["Mysticality"])))), new Requirement(["Mysticality"], {})));
_defineProperty8(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral11(["Moxie"])))), new Requirement(["Moxie"], {})));
_defineProperty8(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", function() {
  return 60 - Math.floor((baseWeight() + (0, import_kolmafia19.weightAdjustment)()) / 5);
}, new Requirement(["Familiar Weight"], {})));
_defineProperty8(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", function() {
  var weaponPower = (0, import_kolmafia19.getPower)((0, import_kolmafia19.equippedItem)($slot(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral11(["weapon"])))));
  var offhandPower = (0, import_kolmafia19.toSlot)((0, import_kolmafia19.equippedItem)($slot(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral11(["off-hand"]))))) === $slot(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral11(["weapon"]))) ? (0, import_kolmafia19.getPower)((0, import_kolmafia19.equippedItem)($slot(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral11(["off-hand"]))))) : 0;
  var familiarPower = (0, import_kolmafia19.toSlot)((0, import_kolmafia19.equippedItem)($slot(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral11(["familiar"]))))) === $slot(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral11(["weapon"]))) ? (0, import_kolmafia19.getPower)((0, import_kolmafia19.equippedItem)($slot(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral11(["familiar"]))))) : 0;
  var multiplier = have($effect(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral11(["Bow-Legged Swagger"])))) ? 2 : 1;
  return 60 - Math.floor(multiplier * (get2("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 1e-3) - Math.floor(multiplier * get2("Weapon Damage Percent") / 50 + 1e-3);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
_defineProperty8(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", function() {
  var dragonfishDamage = (0, import_kolmafia19.myFamiliar)() === $familiar(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral11(["Magic Dragonfish"]))) ? (0, import_kolmafia19.numericModifier)($familiar(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral11(["Magic Dragonfish"]))), "Spell Damage Percent", baseWeight() + (0, import_kolmafia19.weightAdjustment)(), $item.none) : 0;
  return 60 - Math.floor(get2("Spell Damage") / 50 + 1e-3) - Math.floor((get2("Spell Damage Percent") - dragonfishDamage) / 50 + 1e-3);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
_defineProperty8(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", function() {
  var noncombatRate = -1 * get2("Combat Rate");
  var unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));
_defineProperty8(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", function() {
  var mummingCostume = MummingTrunk_exports.currentCostumes().get((0, import_kolmafia19.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0, import_kolmafia19.numericModifier)((0, import_kolmafia19.myFamiliar)(), "Item Drop", baseWeight() + (0, import_kolmafia19.weightAdjustment)(), (0, import_kolmafia19.equippedItem)($slot(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral11(["familiar"]))))) + mummingBuff - (0, import_kolmafia19.numericModifier)((0, import_kolmafia19.equippedItem)($slot(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral11(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0, import_kolmafia19.numericModifier)((0, import_kolmafia19.myFamiliar)(), "Booze Drop", baseWeight() + (0, import_kolmafia19.weightAdjustment)(), (0, import_kolmafia19.equippedItem)($slot(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral11(["familiar"]))))) - (0, import_kolmafia19.numericModifier)((0, import_kolmafia19.equippedItem)($slot(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral11(["familiar"])))), "Booze Drop");
  var multiplier = (0, import_kolmafia19.haveEquipped)($item(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral11(["broken champagne bottle"])))) && get("garbageChampagneCharge") > 0 ? 0.5 : 1;
  return 60 - Math.floor(multiplier * (get2("Item Drop") - familiarItemDrop) / 30 + 1e-3) - Math.floor((get2("Booze Drop") - familiarBoozeDrop) / 15 + 1e-3);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: $items(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral11(["broken champagne bottle"])))
})));
_defineProperty8(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", function() {
  return 60 - get2("Hot Resistance");
}, new Requirement(["Hot Resistance"], {})));
_defineProperty8(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", function() {
  return 60;
}, new Requirement([], {})));
_defineProperty8(CommunityService, "donate", function() {
  visitCouncil();
  (0, import_kolmafia19.visitUrl)("choice.php?whichchoice=1089&option=30");
});

// node_modules/libram/dist/since.js
var import_kolmafia20 = require("kolmafia");
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties10(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey10(arg) {
  var key = _toPrimitive10(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive10(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf5(subClass, superClass);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized4(self2);
}
function _assertThisInitialized4(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _wrapNativeSuper4(Class6) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper4 = function _wrapNativeSuper5(Class7) {
    if (Class7 === null || !_isNativeFunction4(Class7))
      return Class7;
    if (typeof Class7 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class7))
        return _cache.get(Class7);
      _cache.set(Class7, Wrapper);
    }
    function Wrapper() {
      return _construct4(Class7, arguments, _getPrototypeOf4(this).constructor);
    }
    Wrapper.prototype = Object.create(Class7.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf5(Wrapper, Class7);
  };
  return _wrapNativeSuper4(Class6);
}
function _construct4(Parent, args, Class6) {
  if (_isNativeReflectConstruct4()) {
    _construct4 = Reflect.construct.bind();
  } else {
    _construct4 = function _construct5(Parent2, args2, Class7) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class7)
        _setPrototypeOf5(instance, Class7.prototype);
      return instance;
    };
  }
  return _construct4.apply(null, arguments);
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction4(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf5(o, p) {
  _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf5(o, p);
}
function _getPrototypeOf4(o) {
  _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf6(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf4(o);
}
var KolmafiaVersionError = /* @__PURE__ */ function(_Error) {
  _inherits5(KolmafiaVersionError2, _Error);
  var _super = _createSuper4(KolmafiaVersionError2);
  function KolmafiaVersionError2(message) {
    var _this;
    _classCallCheck10(this, KolmafiaVersionError2);
    _this = _super.call(this, message);
    Object.setPrototypeOf(_assertThisInitialized4(_this), KolmafiaVersionError2.prototype);
    return _this;
  }
  return _createClass10(KolmafiaVersionError2);
}(/* @__PURE__ */ _wrapNativeSuper4(Error));
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
function getScriptName() {
  var _require$main;
  var scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  }
  var currentRevision = (0, import_kolmafia20.getRevision)();
  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia20.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

// node_modules/grimoire-kolmafia/dist/combat.js
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf7(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf6(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized5(self2);
}
function _assertThisInitialized5(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf5(o) {
  _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf6(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf5(o);
}
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray5(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _createForOfIteratorHelper8(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray12(o, minLen);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey11(descriptor.key), descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties11(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey11(arg) {
  var key = _toPrimitive11(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive11(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function undelay(macro) {
  if (macro instanceof Macro)
    return macro;
  else
    return macro();
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck11(this, CombatStrategy2);
    this.macros = /* @__PURE__ */ new Map();
    this.autoattacks = /* @__PURE__ */ new Map();
    this.actions = /* @__PURE__ */ new Map();
    this.ccs_entries = /* @__PURE__ */ new Map();
  }
  _createClass11(CombatStrategy2, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0) {
        if (this.default_macro === void 0)
          this.default_macro = [];
        if (prepend)
          this.default_macro.unshift(_macro);
        else
          this.default_macro.push(_macro);
      } else {
        if (monsters instanceof import_kolmafia21.Monster)
          monsters = [monsters];
        var _iterator = _createForOfIteratorHelper8(monsters), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monster = _step.value;
            if (!this.macros.has(monster))
              this.macros.set(monster, []);
            if (prepend)
              (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);
            else
              (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === void 0) {
        if (this.default_autoattack === void 0)
          this.default_autoattack = [];
        if (prepend)
          this.default_autoattack.unshift(macro);
        else
          this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof import_kolmafia21.Monster)
          monsters = [monsters];
        var _iterator2 = _createForOfIteratorHelper8(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster))
              this.autoattacks.set(monster, []);
            if (prepend)
              (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);
            else
              (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === void 0)
        this.starting_macro = [];
      if (prepend)
        this.starting_macro.unshift(macro);
      else
        this.starting_macro.push(macro);
      return this;
    }
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === void 0) {
        this.default_action = _action;
      } else if (monsters instanceof import_kolmafia21.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = _createForOfIteratorHelper8(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof import_kolmafia21.Monster)
        monsters = [monsters];
      var _iterator4 = _createForOfIteratorHelper8(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster))
            this.ccs_entries.set(monster, []);
          if (prepend)
            (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);
          else
            (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action)
        return true;
      return Array.from(this.actions.values()).includes(action);
    }
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
  }, {
    key: "where",
    value: function where(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy2();
      if (this.starting_macro)
        result.starting_macro = _toConsumableArray5(this.starting_macro);
      if (this.default_macro)
        result.default_macro = _toConsumableArray5(this.default_macro);
      var _iterator5 = _createForOfIteratorHelper8(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray5(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack)
        result.default_autoattack = _toConsumableArray5(this.default_autoattack);
      var _iterator6 = _createForOfIteratorHelper8(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray5(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper8(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper8(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray5(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
  }, {
    key: "compile",
    value: function compile(resources, defaults, location) {
      var _a, _b;
      var result = new Macro();
      if (this.starting_macro) {
        result.step.apply(result, _toConsumableArray5(this.starting_macro.map(undelay)));
      }
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray5(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      if (this.default_macro)
        result.step.apply(result, _toConsumableArray5(this.default_macro.map(undelay)));
      var monster_actions = new CompressedMacro();
      this.actions.forEach(function(action, key) {
        var _a2, _b2;
        var macro2 = (_a2 = resources.getMacro(action)) !== null && _a2 !== void 0 ? _a2 : (_b2 = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        if (macro2)
          monster_actions.add(key, new Macro().step(macro2));
      });
      result.step(monster_actions.compile());
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro)
          result.step(macro);
      }
      return result;
    }
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack() {
      var result = new Macro();
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach(function(value, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray5(value.map(undelay))));
      });
      result.step(monster_macros.compile());
      if (this.default_autoattack)
        result.step.apply(result, _toConsumableArray5(this.default_autoattack.map(undelay)));
      return result;
    }
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = _createForOfIteratorHelper8(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray5(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits6(CombatStrategyWithActions2, _this);
        var _super = _createSuper5(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          _classCallCheck11(this, CombatStrategyWithActions2);
          return _super.apply(this, arguments);
        }
        return _createClass11(CombatStrategyWithActions2);
      }(this);
      var proto = CombatStrategyWithActions.prototype;
      var _iterator10 = _createForOfIteratorHelper8(actions), _step10;
      try {
        var _loop = function _loop2() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
  return CombatStrategy2;
}();
var CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck11(this, CompressedMacro2);
    this.components = /* @__PURE__ */ new Map();
  }
  _createClass11(CompressedMacro2, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0)
        return;
      if (!this.components.has(macro_text))
        this.components.set(macro_text, [monster]);
      else
        (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
  return CompressedMacro2;
}();
var CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck11(this, CombatResources2);
    this.resources = /* @__PURE__ */ new Map();
  }
  _createClass11(CombatResources2, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === void 0)
        return;
      this.resources.set(action, resource);
    }
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === void 0)
        return void 0;
      if (resource.do instanceof import_kolmafia21.Item)
        return new Macro().item(resource.do);
      if (resource.do instanceof import_kolmafia21.Skill)
        return new Macro().skill(resource.do);
      return resource.do;
    }
  }]);
  return CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
var import_kolmafia23 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
var import_kolmafia22 = require("kolmafia");
var _templateObject97;
var _templateObject220;
var _templateObject317;
var _templateObject416;
var _templateObject513;
var _templateObject613;
var _templateObject712;
var _templateObject811;
var _templateObject98;
var _templateObject105;
var _templateObject115;
var _templateObject125;
var _templateObject135;
var _templateObject145;
var _templateObject155;
var _templateObject165;
var _templateObject175;
var _templateObject185;
var _templateObject195;
var _templateObject205;
var _templateObject2110;
var _templateObject225;
var _templateObject235;
var _templateObject245;
var _templateObject255;
var _templateObject265;
var _templateObject275;
var _templateObject284;
var _templateObject294;
var _templateObject304;
var _templateObject318;
var _templateObject324;
var _templateObject334;
var _templateObject344;
var _templateObject354;
var _templateObject363;
var _templateObject373;
var _templateObject383;
var _templateObject393;
var _templateObject403;
var _templateObject417;
var _templateObject423;
var _templateObject433;
var _templateObject443;
var _templateObject453;
var _templateObject463;
var _templateObject473;
var _templateObject483;
var _templateObject493;
var _templateObject503;
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit9(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty9(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray13(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral12(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray13(o, minLen);
}
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey12(descriptor.key), descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties12(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey12(arg) {
  var key = _toPrimitive12(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive12(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia22.weaponHands)(i) : 0;
};
var modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck12(this, Outfit2);
    this.equips = /* @__PURE__ */ new Map();
    this.riders = /* @__PURE__ */ new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = "";
    this.avoid = [];
  }
  _createClass12(Outfit2, [{
    key: "equippedAmount",
    value: function equippedAmount3(item4) {
      return _toConsumableArray6(this.equips.values()).filter(function(i) {
        return i === item4;
      }).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item4) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item4))
        return false;
      if (!have(item4, this.equippedAmount(item4) + 1))
        return false;
      if ((0, import_kolmafia22.booleanModifier)(item4, "Single Equip") && this.equippedAmount(item4) > 0)
        return false;
      return true;
    }
  }, {
    key: "haveEquipped",
    value: function haveEquipped4(item4, slot) {
      if (slot === void 0)
        return this.equippedAmount(item4) > 0;
      return this.equips.get(slot) === item4;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item4, slot) {
      if (item4 !== $item.none)
        return false;
      if (slot === void 0)
        return true;
      if (this.equips.has(slot))
        return false;
      this.equips.set(slot, item4);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item4, slot) {
      if ($slots(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral12(["acc1, acc2, acc3"]))).includes((0, import_kolmafia22.toSlot)(item4)))
        return false;
      if (slot !== void 0 && slot !== (0, import_kolmafia22.toSlot)(item4))
        return false;
      if (this.equips.has((0, import_kolmafia22.toSlot)(item4)))
        return false;
      switch ((0, import_kolmafia22.toSlot)(item4)) {
        case $slot(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral12(["off-hand"]))):
          if (this.equips.has($slot(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral12(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral12(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral12(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia22.canEquip)(this.familiar, item4))
            return false;
      }
      if ((0, import_kolmafia22.toSlot)(item4) !== $slot(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral12(["familiar"]))) && !(0, import_kolmafia22.canEquip)(item4))
        return false;
      this.equips.set((0, import_kolmafia22.toSlot)(item4), item4);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item4, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray6($slots(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral12(["acc1, acc2, acc3"]))))).includes(slot))
        return false;
      if ((0, import_kolmafia22.toSlot)(item4) !== $slot(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral12(["acc1"]))))
        return false;
      if (!(0, import_kolmafia22.canEquip)(item4))
        return false;
      if (slot === void 0) {
        var empty = $slots(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral12(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return false;
        this.equips.set(empty, item4);
      } else {
        if (this.equips.has(slot))
          return false;
        this.equips.set(slot, item4);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item4, slot) {
      if (![void 0, $slot(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral12(["off-hand"])))].includes(slot))
        return false;
      if ((0, import_kolmafia22.toSlot)(item4) !== $slot(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral12(["weapon"]))))
        return false;
      if (this.equips.has($slot(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral12(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral12(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral12(["off-hand"])))))
        return false;
      if (!have($skill(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral12(["Double-Fisted Skull Smashing"])))))
        return false;
      if (weaponHands(item4) !== 1)
        return false;
      if (!(0, import_kolmafia22.canEquip)(item4))
        return false;
      this.equips.set($slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral12(["off-hand"]))), item4);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item4) {
      switch ((0, import_kolmafia22.toSlot)(item4)) {
        case $slot(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral12(["weapon"]))):
          return $familiar(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral12(["Disembodied Hand"])));
        case $slot(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral12(["off-hand"]))):
          return $familiar(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral12(["Left-Hand Man"])));
        default:
          return void 0;
      }
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item4, slot) {
      if (![void 0, $slot(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral12(["familiar"])))].includes(slot))
        return false;
      if (this.equips.has($slot(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral12(["familiar"])))))
        return false;
      if ((0, import_kolmafia22.booleanModifier)(item4, "Single Equip"))
        return false;
      var familiar = this.getHoldingFamiliar(item4);
      if (familiar === void 0 || !this.equip(familiar))
        return false;
      this.equips.set($slot(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral12(["familiar"]))), item4);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item4, slot) {
      return this.haveEquipped(item4, slot) || this.equipItemNone(item4, slot) || this.isAvailable(item4) && (this.equipNonAccessory(item4, slot) || this.equipAccessory(item4, slot) || this.equipUsingDualWield(item4, slot) || this.equipUsingFamiliar(item4, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar)
        return true;
      if (this.familiar !== void 0)
        return false;
      if (familiar !== $familiar.none) {
        if (!have(familiar))
          return false;
        if (Array.from(this.riders.values()).includes(familiar))
          return false;
      }
      var item4 = this.equips.get($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral12(["familiar"]))));
      if (item4 !== void 0 && item4 !== $item.none && !(0, import_kolmafia22.canEquip)(familiar, item4))
        return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d;
      var succeeded = true;
      for (var _i = 0, _outfitSlots2 = outfitSlots; _i < _outfitSlots2.length; _i++) {
        var slotName = _outfitSlots2[_i];
        var slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral12(["familiar"])))], ["offhand", $slot(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral12(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia22.toSlot)(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== void 0 && !this.equip(itemOrItems, slot))
          succeeded = false;
      }
      var _iterator = _createForOfIteratorHelper9((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item4 = _step.value;
          if (!this.equip(item4))
            succeeded = false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== void 0) {
        if (!this.equip(spec.familiar))
          succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray6((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        this.modifier = this.modifier + (this.modifier ? ", " : "") + spec.modifier;
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      return succeeded;
    }
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      var _this = this;
      return things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
  }, {
    key: "equip",
    value: function equip7(thing, slot) {
      var _this = this;
      if (Array.isArray(thing)) {
        if (slot !== void 0)
          return this.equipFirst(thing, slot);
        return thing.every(function(val) {
          return _this.equip(val);
        });
      }
      if (thing instanceof import_kolmafia22.Item)
        return this.equipItem(thing, slot);
      if (thing instanceof import_kolmafia22.Familiar)
        return this.equipFamiliar(thing);
      if (thing instanceof Outfit2)
        return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value: function bjornify(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral12(["buddy-bjorn"]))));
      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }
        return false;
      }
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral12(["crown-of-thrones"])))) !== f;
        });
        if (fam) {
          this.riders.set($slot(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral12(["buddy-bjorn"]))), fam);
          return true;
        }
        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral12(["buddy-bjorn"]))), target);
          return true;
        }
        return false;
      }
    }
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral12(["crown-of-thrones"]))));
      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }
        return false;
      }
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral12(["buddy-bjorn"])))) !== f;
        });
        if (fam) {
          this.riders.set($slot(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral12(["crown-of-thrones"]))), fam);
          return true;
        }
        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral12(["crown-of-thrones"]))), target);
          return true;
        }
        return false;
      }
    }
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      for (var _i2 = 0, _modeableCommands = modeableCommands2; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        if (mode === "retrocape")
          continue;
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = _objectSpread4(_objectSpread4({}, modes), this.modes);
      return compatible;
    }
  }, {
    key: "canEquip",
    value: function canEquip3(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
  }, {
    key: "dress",
    value: function dress(extraOptions) {
      var _this = this;
      if (this.familiar)
        (0, import_kolmafia22.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = /* @__PURE__ */ new Set();
      var nonaccessorySlots = $slots(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral12(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var _iterator2 = _createForOfIteratorHelper9(nonaccessorySlots), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var slot = _step2.value;
          if (targetEquipment.includes((0, import_kolmafia22.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia22.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia22.equippedItem)(slot)))
            (0, import_kolmafia22.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper9(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _slot = _step3.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            (0, import_kolmafia22.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var accessorySlots = $slots(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral12(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item4) {
        return item4 !== void 0;
      });
      var missingAccessories = [];
      var _iterator4 = _createForOfIteratorHelper9(accessoryEquips), _step4;
      try {
        var _loop = function _loop3() {
          var accessory2 = _step4.value;
          var alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia22.equippedItem)(slot2) === accessory2;
          });
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory2);
          }
        };
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0) {
          throw "No accessory slots remaining";
        }
        (0, import_kolmafia22.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      var bjorn = this.riders.get($slot(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral12(["buddy-bjorn"]))));
      if (bjorn) {
        if ((0, import_kolmafia22.myEnthronedFamiliar)() === bjorn)
          (0, import_kolmafia22.enthroneFamiliar)($familiar.none);
        if ((0, import_kolmafia22.myBjornedFamiliar)() !== bjorn)
          (0, import_kolmafia22.bjornifyFamiliar)(bjorn);
        usedSlots.add($slot(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral12(["buddy-bjorn"]))));
      }
      var crown = this.riders.get($slot(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral12(["crown-of-thrones"]))));
      if (crown) {
        if ((0, import_kolmafia22.myBjornedFamiliar)() === crown)
          (0, import_kolmafia22.bjornifyFamiliar)($familiar.none);
        if ((0, import_kolmafia22.myEnthronedFamiliar)() !== crown)
          (0, import_kolmafia22.enthroneFamiliar)(crown);
        usedSlots.add($slot(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral12(["crown-of-thrones"]))));
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier) {
        var allRequirements = [new Requirement([this.modifier], {
          preventSlot: _toConsumableArray6(usedSlots),
          preventEquip: this.avoid,
          modes: modes
        })];
        if (extraOptions)
          allRequirements.push(new Requirement([], extraOptions));
        if (!Requirement.merge(allRequirements).maximize()) {
          throw "Unable to maximize ".concat(this.modifier);
        }
        (0, import_kolmafia22.logprint)("Maximize: ".concat(this.modifier));
      }
      applyModes(modes);
      if (this.familiar !== void 0 && (0, import_kolmafia22.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator5 = _createForOfIteratorHelper9(nonaccessorySlots), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _slot2 = _step5.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia22.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper9(accessoryEquips), _step6;
      try {
        var _loop2 = function _loop22() {
          var accessory2 = _step6.value;
          if ((0, import_kolmafia22.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
          }
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          _loop2();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral12(["buddy-bjorn"]))), import_kolmafia22.myBjornedFamiliar], [$slot(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral12(["crown-of-thrones"]))), import_kolmafia22.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray9(_arr[_i4], 2), rider = _arr$_i[0], checkingFunction = _arr$_i[1];
        var wanted = this.riders.get(rider);
        if (wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit2();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = this.modifier;
      result.avoid = _toConsumableArray6(this.avoid);
      result.modes = _objectSpread4({}, this.modes);
      return result;
    }
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: this.modifier,
        familiar: this.familiar,
        avoid: _toConsumableArray6(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread4({}, this.modes)
      };
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        result[slotName] = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral12(["familiar"])))], ["offhand", $slot(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral12(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia22.toSlot)(slotName));
      }
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit2 = new Outfit2();
      var familiar = (0, import_kolmafia22.myFamiliar)();
      if (outfit2.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral12(["familiar"])))], ["offhand", $slot(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral12(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia22.toSlot)(slotName);
        var item4 = (0, import_kolmafia22.equippedItem)(slot);
        if (!outfit2.equip(item4, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item4, ")");
        }
      }
      if ((0, import_kolmafia22.haveEquipped)($item(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral12(["Crown of Thrones"])))))
        outfit2.riders.set($slot(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral12(["crown-of-thrones"]))), (0, import_kolmafia22.myEnthronedFamiliar)());
      if ((0, import_kolmafia22.haveEquipped)($item(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral12(["Buddy Bjorn"])))))
        outfit2.riders.set($slot(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral12(["buddy-bjorn"]))), (0, import_kolmafia22.myBjornedFamiliar)());
      outfit2.setModes(getCurrentModes2());
      return outfit2;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var outfit2 = new Outfit2();
      var success = outfit2.equip(spec);
      if (!success && error)
        throw error;
      return success ? outfit2 : null;
    }
  }]);
  return Outfit2;
}();
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes["parka"]
  };
}
function getCurrentModes2() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"])
  };
}
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject99;
function _taggedTemplateLiteral13(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray7(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray14(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray14(o, minLen);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey13(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties13(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey13(arg) {
  var key = _toPrimitive13(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive13(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var grimoireCCS = "grimoire_macro";
var Engine = /* @__PURE__ */ function() {
  function Engine2(tasks, options) {
    _classCallCheck13(this, Engine2);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = /* @__PURE__ */ new Map();
    this.cachedCcsContents = "";
    this.tasks = tasks;
    this.options = options !== null && options !== void 0 ? options : {};
    var _iterator = _createForOfIteratorHelper10(tasks), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  _createClass13(Engine2, [{
    key: "getNextTask",
    value: function getNextTask() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task)
          return;
        this.execute(task);
      }
    }
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0, import_kolmafia23.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function available2(task) {
      var _a;
      var _iterator2 = _createForOfIteratorHelper10((_a = task.after) !== null && _a !== void 0 ? _a : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === void 0)
            throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed())
            return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready())
        return false;
      if (task.completed())
        return false;
      return true;
    }
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia23.print)("");
      (0, import_kolmafia23.print)("Executing ".concat(task.name), "blue");
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a);
      this.acquireItems(task);
      this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit2 = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit2, task_combat, task_resources);
      this.dress(task, outfit2);
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper10(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire2 = task.acquire instanceof Function ? task.acquire() : task.acquire;
      var _iterator4 = _createForOfIteratorHelper10(acquire2 || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0, import_kolmafia23.itemAmount)(to_get.item) + (0, import_kolmafia23.equippedAmount)(to_get.item);
          if (num_needed <= num_have)
            continue;
          if (to_get.useful !== void 0 && !to_get.useful())
            continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== void 0) {
            (0, import_kolmafia23.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0, import_kolmafia23.getRelated)(to_get.item, "fold")).length > 0) {
            (0, import_kolmafia23.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0, import_kolmafia23.retrieveItem)(to_get.item, num_needed);
          }
          if ((0, import_kolmafia23.itemAmount)(to_get.item) + (0, import_kolmafia23.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = typeof task.effects === "function" ? task.effects() : (_a = task.effects) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      var extraSongs = Object.keys((0, import_kolmafia23.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia23.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      });
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = _createForOfIteratorHelper10(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = typeof task.outfit === "function" ? task.outfit() : task.outfit;
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0) {
        if (!outfit2.equip(spec)) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit2;
    }
  }, {
    key: "dress",
    value: function dress(task, outfit2) {
      if (task.do instanceof import_kolmafia23.Location)
        (0, import_kolmafia23.setLocation)(task.do);
      outfit2.dress();
    }
  }, {
    key: "customize",
    value: function customize(task, outfit2, combat, resources) {
    }
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var choices = {};
      for (var choice_id_str in task.choices) {
        var choice_id = parseInt(choice_id_str);
        var choice = task.choices[choice_id];
        if (typeof choice === "number")
          choices[choice_id] = choice;
        else
          choices[choice_id] = choice();
      }
      manager.setChoices(choices);
    }
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia23.Location ? task.do : void 0);
      macro.save();
      if (!this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray7(otherCCSEntries)).join("\n");
        (0, import_kolmafia23.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          (0, import_kolmafia23.writeCcs)(ccsContents, grimoireCCS);
          (0, import_kolmafia23.cliExecute)("ccs ".concat(grimoireCCS));
          this.cachedCcsContents = ccsContents;
        }
      }
      var autoattack = task_combat.compileAutoattack();
      if (autoattack.toString().length > 1) {
        (0, import_kolmafia23.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0, import_kolmafia23.setAutoAttack)(0);
      }
    }
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
  }, {
    key: "do",
    value: function _do(task) {
      if (typeof task.do === "function") {
        task.do();
      } else {
        (0, import_kolmafia23.adv1)(task.do, 0, "");
      }
      (0, import_kolmafia23.runCombat)();
      while ((0, import_kolmafia23.inMultiFight)())
        (0, import_kolmafia23.runCombat)();
      if ((0, import_kolmafia23.choiceFollowsFight)())
        (0, import_kolmafia23.runChoice)(-1);
    }
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof import_kolmafia23.Location && lastEncounterWasWanderingNC();
    }
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts))
        this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit)
        return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed()) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries)
          throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft)
          throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof import_kolmafia23.Location && task.do.turnsSpent >= task.limit.turns)
          throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task)))
          throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      manager.set({
        logPreferenceChange: true,
        logPreferenceChangeFilter: _toConsumableArray7(new Set([].concat(_toConsumableArray7(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
          return a;
        }).join(","),
        battleAction: "custom combat script",
        autoSatisfyWithMall: true,
        autoSatisfyWithNPCs: true,
        autoSatisfyWithCoinmasters: true,
        autoSatisfyWithStash: false,
        dontStopForCounters: true,
        maximizerFoldables: true,
        hpAutoRecovery: "-0.05",
        hpAutoRecoveryTarget: "0.0",
        mpAutoRecovery: "-0.05",
        mpAutoRecoveryTarget: "0.0",
        afterAdventureScript: "",
        betweenBattleScript: "",
        choiceAdventureScript: "",
        familiarScript: "",
        currentMood: "apathetic",
        autoTuxedo: true,
        autoPinkyRing: true,
        autoGarish: true,
        allowNonMoodBurning: false,
        allowSummonBurning: true,
        libramSkillsSoftcore: "none"
      });
      if (this.options.ccs !== "") {
        if (this.options.ccs === void 0 && (0, import_kolmafia23.readCcs)(grimoireCCS) === "") {
          (0, import_kolmafia23.writeCcs)("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
  return Engine2;
}();
function maxSongs() {
  return have($skill(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral13(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set(["Wooof! Wooooooof!", "Playing Fetch*", "A Pound of Cure", "Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet"]);
function lastEncounterWasWanderingNC() {
  return wanderingNCs.has(get("lastEncounter"));
}

// node_modules/grimoire-kolmafia/dist/route.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey14(arg) {
  var key = _toPrimitive14(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive14(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray15(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray15(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray15(o, minLen);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var _a, _b;
  var result = [];
  var _iterator = _createForOfIteratorHelper11(quests), _step;
  try {
    var _loop = function _loop2() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var _iterator3 = _createForOfIteratorHelper11(quest.tasks), _step3;
      try {
        var _loop22 = function _loop23() {
          var task2 = _step3.value;
          var renamedTask = _objectSpread5({}, task2);
          renamedTask.name = "".concat(quest.name, "/").concat(task2.name);
          renamedTask.after = (_a = task2.after) === null || _a === void 0 ? void 0 : _a.map(function(after2) {
            return after2.includes("/") ? after2 : "".concat(quest.name, "/").concat(after2);
          });
          if (implicitAfter && task2.after === void 0 && result.length > 0)
            renamedTask.after = [result[result.length - 1].name];
          if (questCompleted !== void 0) {
            var taskCompleted = task2.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          result.push(renamedTask);
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          _loop22();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var names = /* @__PURE__ */ new Set();
  for (var _i = 0, _result = result; _i < _result.length; _i++) {
    var task = _result[_i];
    names.add(task.name);
  }
  for (var _i2 = 0, _result2 = result; _i2 < _result2.length; _i2++) {
    var _task = _result2[_i2];
    var _iterator2 = _createForOfIteratorHelper11((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var after = _step2.value;
        if (!names.has(after)) {
          throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}

// src/main.ts
var import_kolmafia35 = require("kolmafia");

// src/ascend.ts
var import_kolmafia24 = require("kolmafia");
var _templateObject100;
var _templateObject221;
var _templateObject319;
var _templateObject418;
var _templateObject514;
var _templateObject614;
var _templateObject713;
var _templateObject812;
function _taggedTemplateLiteral14(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isReadyToContinue(skipFites, skipVote) {
  if ((0, import_kolmafia24.myPath)() === $path(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral14(["Community Service"]))))
    return true;
  var inWrongPath = !(0, import_kolmafia24.canInteract)();
  if (inWrongPath) {
    (0, import_kolmafia24.print)("Nope", "red");
    return false;
  }
  var banish = $monster(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral14(["Perceiver of Sensations"])));
  var found = function() {
    return (0, import_kolmafia24.isBanished)(banish);
  };
  if (!found())
    (0, import_kolmafia24.visitUrl)("museum.php?action=icehouse");
  if (!found()) {
    (0, import_kolmafia24.print)("Need to ice house ".concat(banish), "red");
    return false;
  }
  if (!skipFites && (0, import_kolmafia24.pvpAttacksLeft)() > 0) {
    (0, import_kolmafia24.print)("Spend your pvp fites", "red");
    return false;
  }
  var voterPreCoilNotReady = (0, import_kolmafia24.totalTurnsPlayed)() % 11 !== 1;
  var voterPostCoilNotReady = ((0, import_kolmafia24.totalTurnsPlayed)() + 60) % 11 !== 1;
  if (!skipVote && voterPreCoilNotReady && voterPostCoilNotReady) {
    var turnsA = 11 - ((0, import_kolmafia24.totalTurnsPlayed)() % 11 + 10) % 11;
    var turnsB = 11 - (((0, import_kolmafia24.totalTurnsPlayed)() + 60) % 11 + 10) % 11;
    (0, import_kolmafia24.print)("Spend more ".concat(turnsA, " or ").concat(turnsB, " turns for voter monster"), "red");
    return false;
  }
  if (!(0, import_kolmafia24.userConfirm)("Ready to Ascend into Community Service?"))
    return false;
  return true;
}
var toPerm = [];
function prepareToAscend() {
  if ((0, import_kolmafia24.myPath)() !== $path(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral14(["Community Service"])))) {
    prepareAscension({
      garden: "Peppermint Pip Packet",
      eudora: "Our Daily Candles\u2122 order form",
      chateau: {
        desk: "Swiss piggy bank",
        ceiling: "ceiling fan",
        nightstand: "foreign language tapes"
      },
      throwOnFail: true
    });
  }
}
function prepAndAscendIfNecessary() {
  if ((0, import_kolmafia24.myPath)() !== $path(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral14(["Community Service"])))) {
    prepareToAscend();
    (0, import_kolmafia24.visitUrl)("charsheet.php");
    ascend($path(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral14(["Community Service"]))), $class(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral14(["Sauceror"]))), Lifestyle.hardcore, "blender", $item(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral14(["astral six-pack"]))), $item(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral14(["astral trousers"]))), {
      permSkills: new Map(toPerm.filter(function(s) {
        return have(s);
      }).map(function(s) {
        return [s, Lifestyle.hardcore];
      })),
      neverAbort: true
    });
  }
}

// src/config.ts
var _templateObject101;
var _Map$get;
var _templateObject226;
var _templateObject320;
var _templateObject419;
var _templateObject515;
var _templateObject615;
var _templateObject714;
var _templateObject813;
var _Map$get2;
var _templateObject910;
var _templateObject106;
var _templateObject116;
var _templateObject126;
var _templateObject136;
var _templateObject146;
var _templateObject156;
function _taggedTemplateLiteral15(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var config = Args.create("seventyhccs", "Automate 1/70 Community Service.", {
  nofites: Args.flag({
    help: "Skip warning for unspent pvp fites.",
    setting: "",
    default: false
  }),
  novote: Args.flag({
    help: "Skip guaranteed vote wanderer check.",
    setting: "",
    default: false
  }),
  prep: Args.flag({
    help: "Switch chateau, eudora, and garden",
    setting: "",
    default: false
  }),
  main_clan: Args.string({
    help: "Clan with a fully stocked VIP lounge",
    default: ""
  }),
  side_clan: Args.string({
    help: "Clan with a Mother Slime and Ungulith",
    default: ""
  }),
  stillsuit: Args.string({
    help: "A familiar to equip the stillsuit on",
    default: ""
  }),
  MEAT_SAFE_LIMIT: Args.number({
    help: "Don't spend meat on sausages below this value",
    hidden: true,
    default: 2e3
  }),
  MP_SAFE_LIMIT: Args.number({
    help: "Don't spend MP on librams below this value unless right before a full MP refill",
    hidden: true,
    default: 500
  })
});
var BRICKO_TARGET_ITEM = $item(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral15(["BRICKO bat"])));
var BRICKO_COST = (_Map$get = (/* @__PURE__ */ new Map([[$item(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral15(["BRICKO ooze"]))), 2], [$item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral15(["BRICKO bat"]))), 5], [$item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral15(["BRICKO oyster"]))), 8], [$item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral15(["BRICKO turtle"]))), 11], [$item(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral15(["BRICKO elephant"]))), 23], [$item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral15(["BRICKO octopus"]))), 37], [$item(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral15(["BRICKO python"]))), 69]])).get(BRICKO_TARGET_ITEM)) !== null && _Map$get !== void 0 ? _Map$get : 9999;
var BRICKO_DROP = (_Map$get2 = (/* @__PURE__ */ new Map([[$item(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral15(["BRICKO ooze"]))), 1], [$item(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral15(["BRICKO bat"]))), 2], [$item(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral15(["BRICKO oyster"]))), 0], [$item(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral15(["BRICKO turtle"]))), 0], [$item(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral15(["BRICKO elephant"]))), 0], [$item(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral15(["BRICKO octopus"]))), 3], [$item(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral15(["BRICKO python"]))), 4]])).get(BRICKO_TARGET_ITEM)) !== null && _Map$get2 !== void 0 ? _Map$get2 : 0;

// src/quests/coilWire.ts
var import_kolmafia29 = require("kolmafia");

// src/combat.ts
var import_kolmafia26 = require("kolmafia");

// src/lib.ts
var import_kolmafia25 = require("kolmafia");
function acquireEffect(e) {
  if (!have(e) && e.default.startsWith("cargo"))
    throw "Can't obtain ".concat(e, "?");
  if (!have(e))
    (0, import_kolmafia25.cliExecute)(e.default);
}
function checkAvailable(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (!have(i, n)) {
    throw "Why don't we have at least ".concat(n, " ").concat(n > 1 ? i.plural : i, " (id: ").concat((0, import_kolmafia25.toInt)(i), ")?");
  }
}
function checkEffect(e) {
  if (!have(e))
    throw "Missing effect ".concat(e);
}
function itemToEffect(i) {
  return (0, import_kolmafia25.effectModifier)(i, "effect");
}
function haveItemOrEffect(i) {
  return have(i) || have(itemToEffect(i));
}
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
}
function voterMonsterNow() {
  return (0, import_kolmafia25.totalTurnsPlayed)() % 11 === 1 && get("lastVoteMonsterTurn") < (0, import_kolmafia25.totalTurnsPlayed)();
}
function wishEffect(e) {
  if (!have(e))
    (0, import_kolmafia25.cliExecute)("genie effect ".concat(e));
}

// src/combat.ts
var _templateObject107;
var _templateObject227;
var _templateObject321;
var _templateObject420;
var _templateObject516;
var _templateObject616;
var _templateObject715;
var _templateObject814;
var _templateObject911;
var _templateObject108;
var _templateObject117;
var _templateObject127;
var _templateObject137;
var _templateObject147;
var _templateObject157;
var _templateObject166;
var _templateObject176;
var _templateObject186;
var _templateObject196;
var _templateObject206;
var _templateObject2111;
var _templateObject228;
var _templateObject236;
var _templateObject246;
var _templateObject256;
var _templateObject266;
var _templateObject276;
var _templateObject285;
var _templateObject295;
var _templateObject305;
var _templateObject3110;
var _templateObject325;
var _templateObject335;
var _templateObject345;
var _templateObject355;
var _templateObject364;
var _templateObject374;
var _templateObject384;
var _templateObject394;
var _templateObject404;
var _templateObject4110;
var _templateObject424;
var _templateObject434;
var _templateObject444;
var _templateObject454;
var _templateObject464;
var _templateObject474;
var _templateObject484;
var _templateObject494;
var _templateObject504;
var _templateObject517;
var _templateObject523;
var _templateObject532;
var _templateObject542;
var _templateObject552;
var _templateObject562;
var _templateObject572;
var _templateObject582;
var _templateObject592;
var _templateObject602;
var _templateObject617;
var _templateObject623;
var _templateObject632;
var _templateObject642;
var _templateObject652;
var _templateObject662;
var _templateObject672;
var _templateObject682;
var _templateObject692;
var _templateObject702;
var _templateObject716;
var _templateObject723;
var _templateObject732;
var _templateObject742;
var _templateObject752;
var _templateObject762;
var _templateObject772;
var _templateObject782;
var _templateObject792;
var _templateObject802;
var _templateObject815;
var _templateObject823;
var _templateObject832;
var _templateObject842;
var _templateObject852;
var _templateObject862;
var _templateObject872;
var _templateObject882;
var _templateObject892;
var _templateObject902;
var _templateObject912;
var _templateObject922;
var _templateObject932;
var _templateObject942;
var _templateObject952;
var _templateObject962;
var _templateObject972;
var _templateObject982;
var _templateObject992;
var _templateObject1002;
var _templateObject1012;
var _templateObject1022;
var _templateObject1032;
var _templateObject1042;
var _templateObject1052;
var _templateObject1062;
var _templateObject1072;
var _templateObject1082;
var _templateObject109;
var _templateObject110;
var _templateObject111;
var _templateObject1122;
var _templateObject1132;
var _templateObject1142;
var _templateObject1152;
var _templateObject1162;
var _templateObject1172;
var _templateObject118;
var _templateObject119;
var _templateObject120;
var _templateObject121;
var _templateObject1222;
var _templateObject1232;
var _templateObject1242;
var _templateObject1252;
var _templateObject1262;
var _templateObject1272;
var _templateObject128;
var _templateObject129;
var _templateObject130;
var _templateObject131;
var _templateObject1322;
var _templateObject1332;
var _templateObject1342;
var _templateObject1352;
var _templateObject1362;
var _templateObject1372;
var _templateObject138;
var _templateObject139;
var _templateObject140;
var _templateObject141;
var _templateObject1422;
var _templateObject1432;
var _templateObject1442;
var _templateObject1452;
var _templateObject1462;
var _templateObject1472;
var _templateObject148;
var _templateObject149;
var _templateObject150;
var _templateObject151;
var _templateObject1522;
var _templateObject1532;
var _templateObject1542;
function _taggedTemplateLiteral16(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var notAllowList = [
  $monster(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral16(["boneless blobghost"]))),
  $monster(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral16(["Emily Koops, a spooky lime"]))),
  $monster(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral16(["The ghost of Ebenoozer Screege"]))),
  $monster(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral16(["The ghost of Jim Unfortunato"]))),
  $monster(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral16(["The ghost of Lord Montague Spookyraven"]))),
  $monster(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral16(["the ghost of Monsieur Baguelle"]))),
  $monster(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral16(["the ghost of Oily McBindle"]))),
  $monster(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral16(["The ghost of Richard Cockingham"]))),
  $monster(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral16(["The ghost of Sam McGee"]))),
  $monster(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral16(['The ghost of Vanillica "Trashblossom" Gorton']))),
  $monster(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral16(["The ghost of Waldo the Carpathian"]))),
  $monster(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral16(["The Headless Horseman"]))),
  $monster(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral16(["The Icewoman"]))),
  $monster(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral16(["gingerbread finance bro"]))),
  $monster(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral16(["gingerbread gentrifier"]))),
  $monster(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral16(["gingerbread tech bro"]))),
  $monster(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral16(["LOV Enforcer"]))),
  $monster(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral16(["LOV Engineer"]))),
  $monster(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral16(["LOV Equivocator"]))),
  $monster(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral16(["Witchess Pawn"]))),
  $monster(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral16(["Witchess Knight"]))),
  $monster(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral16(["Witchess Bishop"]))),
  $monster(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral16(["Witchess Rook"]))),
  $monster(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral16(["Witchess Ox"]))),
  $monster(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral16(["Witchess King"]))),
  $monster(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral16(["Witchess Witch"]))),
  $monster(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral16(["Witchess Queen"]))),
  $monster(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral16(["sausage goblin"]))),
  $monster(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral16(["Eldritch Tentacle"]))),
  $monster(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral16(["Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl"]))),
  $monster(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral16(["God Lobster"]))),
  $monster(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral16(["X-32-F Combat Training Snowman"]))),
  $monster(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral16(["Black Crayon Beast"]))),
  $monster(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral16(["Black Crayon Beetle"]))),
  $monster(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral16(["Black Crayon Constellation"]))),
  $monster(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral16(["Black Crayon Crimbo Elf"]))),
  $monster(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral16(["Black Crayon Demon"]))),
  $monster(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral16(["Black Crayon Elemental"]))),
  $monster(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral16(["Black Crayon Fish"]))),
  $monster(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral16(["Black Crayon Flower"]))),
  $monster(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral16(["Black Crayon Frat Orc"]))),
  $monster(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral16(["Black Crayon Goblin"]))),
  $monster(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral16(["Black Crayon Golem"]))),
  $monster(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral16(["Black Crayon Hippy"]))),
  $monster(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral16(["Black Crayon Hobo"]))),
  $monster(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral16(["Black Crayon Man"]))),
  $monster(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral16(["Black Crayon Manloid"]))),
  $monster(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral16(["Black Crayon Mer-kin"]))),
  $monster(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral16(["Black Crayon Penguin"]))),
  $monster(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral16(["Black Crayon Pirate"]))),
  $monster(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral16(["Black Crayon Shambling Monstrosity"]))),
  $monster(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral16(["Black Crayon Slime"]))),
  $monster(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral16(["Black Crayon Spiraling Shape"]))),
  $monster(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral16(["Black Crayon Undead Thing"]))),
  $monster(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral16(["BRICKO ooze"]))),
  $monster(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral16(["BRICKO bat"]))),
  $monster(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral16(["BRICKO oyster"]))),
  $monster(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral16(["BRICKO turtle"]))),
  $monster(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral16(["BRICKO elephant"]))),
  $monster(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral16(["BRICKO octopus"]))),
  $monster(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral16(["BRICKO python"]))),
  $monster(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral16(["angry ghost"]))),
  $monster(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral16(["annoyed snake"]))),
  $monster(_templateObject642 || (_templateObject642 = _taggedTemplateLiteral16(["government bureaucrat"]))),
  $monster(_templateObject652 || (_templateObject652 = _taggedTemplateLiteral16(["slime blob"]))),
  $monster(_templateObject662 || (_templateObject662 = _taggedTemplateLiteral16(["terrible mutant"]))),
  $monster(_templateObject672 || (_templateObject672 = _taggedTemplateLiteral16(["Performer of Actions"]))),
  $monster(_templateObject682 || (_templateObject682 = _taggedTemplateLiteral16(["Thinker of Thoughts"]))),
  $monster(_templateObject692 || (_templateObject692 = _taggedTemplateLiteral16(["biker"]))),
  $monster(_templateObject702 || (_templateObject702 = _taggedTemplateLiteral16(["burnout"]))),
  $monster(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral16(["jock"]))),
  $monster(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral16(["party girl"]))),
  $monster(_templateObject732 || (_templateObject732 = _taggedTemplateLiteral16(['"plain" girl']))),
  $monster(_templateObject742 || (_templateObject742 = _taggedTemplateLiteral16(["toxic beastie"]))),
  $monster(_templateObject752 || (_templateObject752 = _taggedTemplateLiteral16(["Mother Slime"])))
].map(function(m) {
  return "!monsterid ".concat(m.id);
}).join(" && ");
var DefaultMacro = Macro.skill($skill(_templateObject762 || (_templateObject762 = _taggedTemplateLiteral16(["Curse of Weaksauce"])))).skill($skill(_templateObject772 || (_templateObject772 = _taggedTemplateLiteral16(["Micrometeorite"])))).item($item(_templateObject782 || (_templateObject782 = _taggedTemplateLiteral16(["Time-Spinner"])))).if_("hasskill ".concat((0, import_kolmafia26.toInt)($skill(_templateObject792 || (_templateObject792 = _taggedTemplateLiteral16(["lecture on relativity"]))))), Macro.skill($skill(_templateObject802 || (_templateObject802 = _taggedTemplateLiteral16(["lecture on relativity"])))).skill($skill(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral16(["Saucy Salve"]))))).skill($skill(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral16(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia26.mpCost)($skill(_templateObject832 || (_templateObject832 = _taggedTemplateLiteral16(["Saucestorm"]))))), Macro.skill($skill(_templateObject842 || (_templateObject842 = _taggedTemplateLiteral16(["Saucestorm"]))))).attack().repeat();
var DefaultStrategy = function() {
  return new CombatStrategy().startingMacro(Macro.if_(notAllowList, Macro.abort()));
};
var DefaultCombat = DefaultStrategy().macro(Macro.if_("hasskill ".concat((0, import_kolmafia26.toInt)($skill(_templateObject852 || (_templateObject852 = _taggedTemplateLiteral16(["Shoot Ghost"]))))), Macro.skill($skill(_templateObject862 || (_templateObject862 = _taggedTemplateLiteral16(["Summon Love Gnats"])))).skill($skill(_templateObject872 || (_templateObject872 = _taggedTemplateLiteral16(["Sing Along"])))).skill($skill(_templateObject882 || (_templateObject882 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject892 || (_templateObject892 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject902 || (_templateObject902 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral16(["Trap Ghost"])))).abort()), [$monster(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral16(["boneless blobghost"]))), $monster(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral16(["Emily Koops, a spooky lime"]))), $monster(_templateObject942 || (_templateObject942 = _taggedTemplateLiteral16(["The ghost of Ebenoozer Screege"]))), $monster(_templateObject952 || (_templateObject952 = _taggedTemplateLiteral16(["The ghost of Jim Unfortunato"]))), $monster(_templateObject962 || (_templateObject962 = _taggedTemplateLiteral16(["The ghost of Lord Montague Spookyraven"]))), $monster(_templateObject972 || (_templateObject972 = _taggedTemplateLiteral16(["the ghost of Monsieur Baguelle"]))), $monster(_templateObject982 || (_templateObject982 = _taggedTemplateLiteral16(["the ghost of Oily McBindle"]))), $monster(_templateObject992 || (_templateObject992 = _taggedTemplateLiteral16(["The ghost of Richard Cockingham"]))), $monster(_templateObject1002 || (_templateObject1002 = _taggedTemplateLiteral16(["The ghost of Sam McGee"]))), $monster(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral16(['The ghost of Vanillica "Trashblossom" Gorton']))), $monster(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral16(["The ghost of Waldo the Carpathian"]))), $monster(_templateObject1032 || (_templateObject1032 = _taggedTemplateLiteral16(["The Headless Horseman"]))), $monster(_templateObject1042 || (_templateObject1042 = _taggedTemplateLiteral16(["The Icewoman"])))]).macro(Macro.skill($skill(_templateObject1052 || (_templateObject1052 = _taggedTemplateLiteral16(["Sing Along"])))).trySkill($skill(_templateObject1062 || (_templateObject1062 = _taggedTemplateLiteral16(["Meteor Shower"])))).trySkill($skill(_templateObject1072 || (_templateObject1072 = _taggedTemplateLiteral16(["Chest X-Ray"])))).trySkill($skill(_templateObject1082 || (_templateObject1082 = _taggedTemplateLiteral16(["Shattering Punch"])))).trySkill($skill(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral16(["Gingerbread Mob Hit"])))).trySkill($skill(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral16(["Shocking Lick"])))).abort(), [$monster(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral16(["gingerbread finance bro"]))), $monster(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral16(["gingerbread gentrifier"]))), $monster(_templateObject1132 || (_templateObject1132 = _taggedTemplateLiteral16(["gingerbread tech bro"])))]).macro(Macro.attack().repeat(), $monster(_templateObject1142 || (_templateObject1142 = _taggedTemplateLiteral16(["LOV Enforcer"])))).macro(Macro.skill($skill(_templateObject1152 || (_templateObject1152 = _taggedTemplateLiteral16(["Candyblast"])))).repeat(), $monster(_templateObject1162 || (_templateObject1162 = _taggedTemplateLiteral16(["LOV Engineer"])))).macro(Macro.trySkill($skill(_templateObject1172 || (_templateObject1172 = _taggedTemplateLiteral16(["KGB tranquilizer dart"])))).skill($skill(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral16(["Snokebomb"])))).abort(), $monster(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral16(["Mother Slime"])))).macro(function() {
  return Macro.externalIf(!haveItemOrEffect($item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral16(["abstraction: joy"])))) && !have($item(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral16(["abstraction: action"])))), Macro.skill($skill(_templateObject1222 || (_templateObject1222 = _taggedTemplateLiteral16(["Feel Envy"])))));
}, $monster(_templateObject1232 || (_templateObject1232 = _taggedTemplateLiteral16(["Performer of Actions"])))).macro(function() {
  return Macro.externalIf(!haveItemOrEffect($item(_templateObject1242 || (_templateObject1242 = _taggedTemplateLiteral16(["abstraction: joy"])))), Macro.tryItem($item(_templateObject1252 || (_templateObject1252 = _taggedTemplateLiteral16(["abstraction: action"])))));
}, $monster(_templateObject1262 || (_templateObject1262 = _taggedTemplateLiteral16(["Thinker of Thoughts"])))).macro(Macro.if_("hasskill ".concat((0, import_kolmafia26.toInt)($skill(_templateObject1272 || (_templateObject1272 = _taggedTemplateLiteral16(["Back-Up to your Last Enemy"]))))), Macro.skill($skill(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral16(["Back-Up to your Last Enemy"])))).skill($skill(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral16(["Saucy Salve"]))))).if_("monsterid ".concat($monster(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral16(["toxic beastie"]))).id), Macro.skill($skill(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral16(["Summon Love Gnats"])))).trySkill($skill(_templateObject1322 || (_templateObject1322 = _taggedTemplateLiteral16(["Bowl Sideways"])))).skill($skill(_templateObject1332 || (_templateObject1332 = _taggedTemplateLiteral16(["Sing Along"])))).trySkill($skill(_templateObject1342 || (_templateObject1342 = _taggedTemplateLiteral16(["Chest X-Ray"])))).trySkill($skill(_templateObject1352 || (_templateObject1352 = _taggedTemplateLiteral16(["Shattering Punch"])))).trySkill($skill(_templateObject1362 || (_templateObject1362 = _taggedTemplateLiteral16(["Gingerbread Mob Hit"])))).trySkill($skill(_templateObject1372 || (_templateObject1372 = _taggedTemplateLiteral16(["Shocking Lick"])))).abort()), $monster(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral16(["toxic beastie"])))).macro(Macro.item($item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral16(["Time-Spinner"])))).attack().repeat(), $monster(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral16(["Witchess Queen"])))).macro(Macro.skill($skill(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral16(["Curse of Weaksauce"])))).skill($skill(_templateObject1422 || (_templateObject1422 = _taggedTemplateLiteral16(["Sing Along"])))).attack().repeat(), $monster(_templateObject1432 || (_templateObject1432 = _taggedTemplateLiteral16(["Witchess Witch"])))).macro(DefaultMacro);
var StenchCombat = new CombatStrategy().macro(function() {
  var weight = 20 + (0, import_kolmafia26.weightAdjustment)();
  var bonus = get2("Familiar Damage");
  var maxVintnerDamage = 3 + weight + bonus;
  var safe = maxVintnerDamage + 25;
  return Macro.if_("monsterid ".concat($monster(_templateObject1442 || (_templateObject1442 = _taggedTemplateLiteral16(["toxic beastie"]))).id), Macro.if_("hasskill ".concat((0, import_kolmafia26.toInt)($skill(_templateObject1452 || (_templateObject1452 = _taggedTemplateLiteral16(["Back-Up to your Last Enemy"]))))), Macro.skill($skill(_templateObject1462 || (_templateObject1462 = _taggedTemplateLiteral16(["Back-Up to your Last Enemy"])))))).if_("monsterid ".concat($monster(_templateObject1472 || (_templateObject1472 = _taggedTemplateLiteral16(["toxic beastie"]))).id), Macro.abort()).skill($skill(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral16(["Saucy Salve"])))).if_("monsterhpabove ".concat(safe, " && snarfblat ").concat($location(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral16(["The Neverending Party"]))).id), Macro.trySkill($skill(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral16(["Bowl Sideways"]))))).externalIf(get("garbageShirtCharge") <= 4 && get("cosmicBowlingBallReturnCombats") > 0, Macro.if_("monsterhpabove ".concat(safe), Macro.trySkill($skill(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral16(["Feel Pride"])))))).if_("monsterhpabove ".concat(safe), Macro.skill($skill(_templateObject1522 || (_templateObject1522 = _taggedTemplateLiteral16(["Sing Along"]))))).skill($skill(_templateObject1532 || (_templateObject1532 = _taggedTemplateLiteral16(["Garbage Nova"]))));
});
var RunawayCombat = new CombatStrategy().macro(Macro.runaway());
function mapMonster(location, monster) {
  if (get("_monstersMapped") >= 3)
    throw "Trying to map too many monsters";
  if (!get("mappingMonsters"))
    (0, import_kolmafia26.useSkill)($skill(_templateObject1542 || (_templateObject1542 = _taggedTemplateLiteral16(["Map the Monsters"]))));
  var expectedTurnCount = (0, import_kolmafia26.myTurncount)();
  var mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = (0, import_kolmafia26.visitUrl)((0, import_kolmafia26.toUrl)(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/))
      (0, import_kolmafia26.runCombat)();
    if ((0, import_kolmafia26.myTurncount)() > expectedTurnCount)
      throw "Wasted a turn somehow mapping monsters?";
  }
  (0, import_kolmafia26.visitUrl)("choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
  (0, import_kolmafia26.runCombat)();
  if ((0, import_kolmafia26.handlingChoice)())
    (0, import_kolmafia26.runChoice)(-1);
  if (get("mappingMonsters"))
    throw "Failed to unset map the monsters?";
}

// src/iotms.ts
var import_kolmafia27 = require("kolmafia");
var _templateObject158;
var _templateObject229;
var _templateObject326;
var _templateObject421;
var _templateObject518;
var _templateObject618;
var _templateObject717;
var _templateObject816;
var _templateObject913;
var _templateObject1010;
var _templateObject1110;
var _templateObject1210;
var _templateObject1310;
var _templateObject1410;
var _templateObject159;
var _templateObject167;
var _templateObject177;
var _templateObject187;
var _templateObject197;
var _templateObject207;
var _templateObject2112;
var _templateObject2210;
var _templateObject237;
var _templateObject247;
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper12(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray16(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray16(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray16(o, minLen);
}
function _arrayLikeToArray16(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral17(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function castBestLibram() {
  var owned = (0, import_kolmafia27.itemAmount)(BRICKO_TARGET_ITEM);
  var remainingFights = Math.max(0, 3 - get("_brickoFights"));
  var remainingDrops = Math.max(0, 2 - get("_brickoFights"));
  var need = BRICKO_COST * remainingFights - BRICKO_DROP * remainingDrops - owned;
  var wantBrickos = get("_brickoEyeSummons") < 3 || !have($item(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral17(["BRICKO brick"]))), need);
  var _iterator = _createForOfIteratorHelper12(/* @__PURE__ */ new Map([[$skill(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral17(["Summon BRICKOs"]))), wantBrickos], [$skill(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral17(["Summon Candy Heart"]))), !haveItemOrEffect($item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral17(["green candy heart"]))))], [$skill(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral17(["Summon Love Song"]))), !have($item(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral17(["love song of icy revenge"]))), 2)], [$skill(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral17(["Summon Resolutions"]))), get("_resolutionRareSummons") < 3], [$skill(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral17(["Summon Taffy"]))), !have($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral17(["pulled blue taffy"]))), 4)], [$skill(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral17(["Summon Love Song"]))), !have($item(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral17(["love song of icy revenge"]))), 4)]])), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray10(_step.value, 2), summon = _step$value[0], check = _step$value[1];
      if (check) {
        (0, import_kolmafia27.useSkill)(summon);
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0, import_kolmafia27.useSkill)($skill(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral17(["Summon Taffy"]))));
}
function getPantogramPants() {
  if (!have($item(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral17(["portable pantogram"])))) || have($item(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral17(["pantogram pants"])))))
    return;
  var m = (/* @__PURE__ */ new Map([[$stat(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral17(["Muscle"]))), 1], [$stat(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral17(["Mysticality"]))), 2], [$stat(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral17(["Moxie"]))), 3]])).get((0, import_kolmafia27.myPrimestat)());
  var element;
  (function(element2) {
    element2[element2["hot"] = 1] = "hot";
    element2[element2["cold"] = 2] = "cold";
    element2[element2["spooky"] = 3] = "spooky";
    element2[element2["sleaze"] = 4] = "sleaze";
    element2[element2["stench"] = 5] = "stench";
  })(element || (element = {}));
  var e = element.spooky;
  var s1 = "-2,0";
  var s2 = "-2,0";
  var s3 = "-1,0";
  (0, import_kolmafia27.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0, import_kolmafia27.toInt)($item(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral17(["portable pantogram"]))))));
  (0, import_kolmafia27.visitUrl)("choice.php?pwd=&whichchoice=1270&option=1&m=".concat(m, "&e=").concat(e, "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3));
  if (!have($item(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral17(["pantogram pants"])))))
    throw "Failed to create pantogram pants";
}
function harvestBatteries() {
  (0, import_kolmafia27.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0, import_kolmafia27.toInt)($item(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral17(["potted power plant"]))))));
  for (var i = 0; i < 7; i++) {
    (0, import_kolmafia27.visitUrl)("choice.php?pwd=&whichchoice=1448&option=1&pp=".concat(i + 1));
  }
}
function scavengeDaycare() {
  (0, import_kolmafia27.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!get("_daycareNap"))
    (0, import_kolmafia27.runChoice)(1);
  if (get("_daycareGymScavenges") < 1) {
    (0, import_kolmafia27.runChoice)(3);
    (0, import_kolmafia27.runChoice)(2);
  }
}
function spendAllMpOnLibrams() {
  while ((0, import_kolmafia27.myMp)() > (0, import_kolmafia27.mpCost)($skill(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral17(["Summon BRICKOs"])))))
    castBestLibram();
}
var MoonSign;
(function(MoonSign2) {
  MoonSign2[MoonSign2["Mongoose"] = 1] = "Mongoose";
  MoonSign2[MoonSign2["Wallaby"] = 2] = "Wallaby";
  MoonSign2[MoonSign2["Vole"] = 3] = "Vole";
  MoonSign2[MoonSign2["Platypus"] = 4] = "Platypus";
  MoonSign2[MoonSign2["Opossum"] = 5] = "Opossum";
  MoonSign2[MoonSign2["Marmot"] = 6] = "Marmot";
  MoonSign2[MoonSign2["Wombat"] = 7] = "Wombat";
  MoonSign2[MoonSign2["Blender"] = 8] = "Blender";
  MoonSign2[MoonSign2["Packrat"] = 9] = "Packrat";
})(MoonSign || (MoonSign = {}));
function tuneMoon(moon) {
  (0, import_kolmafia27.visitUrl)("inv_use.php?whichitem=".concat((0, import_kolmafia27.toInt)($item(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral17(["hewn moon-rune spoon"])))), "&doit=96&whichsign=").concat(moon));
}
function vote() {
  if ((0, import_kolmafia27.myClass)() !== $class(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral17(["Sauceror"]))))
    throw "Don't yet know how to run this as a ".concat((0, import_kolmafia27.myClass)());
  (0, import_kolmafia27.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  (0, import_kolmafia27.visitUrl)("choice.php?pwd=&option=1&whichchoice=1331&g=2&local[]=1&local[]=3");
  if (!have($item(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral17(['"I Voted!" sticker'])))))
    throw "Voting failed";
}

// src/quests/shared.ts
var import_kolmafia28 = require("kolmafia");
var _templateObject160;
var _templateObject230;
var _templateObject327;
var _templateObject425;
var _templateObject519;
var _templateObject619;
var _templateObject718;
var _templateObject817;
var _templateObject914;
var _templateObject1011;
var _templateObject1111;
var _templateObject1211;
var _templateObject1311;
var _templateObject1411;
var _templateObject1510;
var _templateObject168;
var _templateObject178;
var _templateObject188;
var _templateObject198;
var _templateObject208;
var _templateObject2113;
var _templateObject2211;
var _templateObject238;
var _templateObject248;
var _templateObject257;
var _templateObject267;
function _taggedTemplateLiteral18(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function refreshGhost() {
  (0, import_kolmafia28.visitUrl)("questlog.php?which=1");
  if (!get("ghostLocation"))
    throw "Failed to get protonic ghost notice";
}
function runTest(test) {
  var famWeight = test.statName === "Familiar Weight";
  if (famWeight && test.actualCost() > 1)
    throw "Can't do ".concat(test.statName, " in 1 turn?");
  var coilWire = test.name === "Coil Wire";
  if (coilWire)
    (0, import_kolmafia28.visitUrl)("council.php");
  switch (test.run(function() {
    return void 0;
  }, coilWire || famWeight ? 60 : 1)) {
    case "completed":
      return;
    case "already completed":
      throw "Re-ran test ".concat(test.statName);
    case "failed":
      throw "Failed test ".concat(test.statName);
    default:
      throw "Unexpected test result";
  }
}
var AdvReq;
(function(AdvReq2) {
  AdvReq2[AdvReq2["NoAttack"] = 0] = "NoAttack";
  AdvReq2[AdvReq2["Normal"] = 1] = "Normal";
  AdvReq2[AdvReq2["Toxic"] = 2] = "Toxic";
  AdvReq2[AdvReq2["Wine"] = 3] = "Wine";
})(AdvReq || (AdvReq = {}));
function selectBestFamiliar() {
  var req = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AdvReq.Normal;
  var wine = $item(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral18(["1950 Vampire Vintner wine"])));
  if (req === AdvReq.Wine && !haveItemOrEffect(wine))
    return $familiar(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral18(["Vampire Vintner"])));
  if (req === AdvReq.Toxic && get("_hipsterAdv") < 7)
    return $familiar(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral18(["Artistic Goth Kid"])));
  var pancake = $item(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral18(["short stack of pancakes"])));
  if (req === AdvReq.Normal && !haveItemOrEffect(pancake))
    return $familiar(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral18(["Shorter-Order Cook"])));
  var absinthe = $item(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral18(["tiny bottle of absinthe"])));
  if (req === AdvReq.Normal && !haveItemOrEffect(absinthe))
    return $familiar(_templateObject718 || (_templateObject718 = _taggedTemplateLiteral18(["Green Pixie"])));
  if (!$items(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral18(["rope, burning newspaper, burning paper crane"]))).some(function(i) {
    return have(i);
  }))
    return $familiar(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral18(["Garbage Fire"])));
  return $familiar(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral18(["Baby Sandworm"])));
}
function darkHorse() {
  return {
    name: "Dark Horse",
    completed: function() {
      return get("_horsery").toLowerCase() === "dark horse";
    },
    do: function() {
      return (0, import_kolmafia28.cliExecute)("horsery dark");
    }
  };
}
function deepDarkVisions() {
  var safeHpLimit = function() {
    var resist = 1 - (0, import_kolmafia28.elementalResistance)($element(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral18(["spooky"])))) / 100;
    if (resist <= 0)
      throw "invalid resist value ".concat(resist, " calculated?");
    var maxMultiplier = 4;
    return (0, import_kolmafia28.myMaxhp)() * maxMultiplier * resist;
  };
  return {
    name: "Deep Dark Visions",
    ready: function() {
      return (0, import_kolmafia28.myMaxhp)() > 500;
    },
    completed: function() {
      return have($effect(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral18(["Visions of the Deep Dark Deeps"]))));
    },
    do: function() {
      if ((0, import_kolmafia28.myMaxhp)() < safeHpLimit())
        throw "Not enough HP for deep dark visions";
      if ((0, import_kolmafia28.myHp)() < (0, import_kolmafia28.myMaxhp)())
        (0, import_kolmafia28.useSkill)(Math.ceil((0, import_kolmafia28.myMaxhp)() / (0, import_kolmafia28.myHp)()), $skill(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral18(["Cannelloni Cocoon"]))));
      if ((0, import_kolmafia28.myHp)() < safeHpLimit())
        throw "Failed to heal enough for Deep Dark Visions?";
      (0, import_kolmafia28.useSkill)($skill(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral18(["Deep Dark Visions"]))));
    },
    post: function() {
      return (0, import_kolmafia28.useSkill)(Math.ceil((0, import_kolmafia28.myMaxhp)() / (0, import_kolmafia28.myHp)()), $skill(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral18(["Cannelloni Cocoon"]))));
    },
    outfit: {
      back: $item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral18(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral18(["Jurassic Parka"]))),
      weapon: $item(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral18(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral18(["burning paper crane, unbreakable umbrella"]))),
      pants: $item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral18(["pantogram pants"]))),
      acc3: $item(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral18(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral18(["Exotic Parrot"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    }
  };
}
function innerElf() {
  return {
    name: "Inner Elf",
    ready: function() {
      return (0, import_kolmafia28.myLevel)() >= 13;
    },
    completed: function() {
      return have($effect(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral18(["Inner Elf"]))));
    },
    prepare: function() {
      if (get("_snokebombUsed") >= 3)
        throw "Can't banish Mother Slime?";
      Clan.join(config.side_clan);
    },
    choices: {
      326: 1
    },
    do: $location(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral18(["The Slime Tube"]))),
    post: function() {
      return Clan.join(config.main_clan);
    },
    outfit: {
      acc3: $item(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral18(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral18(["Machine Elf"])))
    },
    combat: DefaultCombat
  };
}
function tuneMoonPlatypus() {
  return {
    name: "Tune Moon",
    completed: function() {
      return get("moonTuned");
    },
    do: function() {
      return tuneMoon(MoonSign.Platypus);
    }
  };
}

// src/quests/coilWire.ts
var _templateObject161;
var _templateObject231;
var _templateObject328;
var _templateObject426;
var _templateObject520;
var _templateObject620;
var _templateObject719;
var _templateObject818;
var _templateObject915;
var _templateObject1013;
var _templateObject1112;
var _templateObject1212;
var _templateObject1312;
var _templateObject1412;
var _templateObject1511;
var _templateObject169;
var _templateObject179;
var _templateObject189;
var _templateObject199;
var _templateObject209;
var _templateObject2114;
var _templateObject2212;
var _templateObject239;
var _templateObject249;
var _templateObject258;
var _templateObject268;
var _templateObject277;
var _templateObject286;
var _templateObject296;
var _templateObject306;
var _templateObject3111;
var _templateObject329;
var _templateObject336;
var _templateObject346;
var _templateObject356;
var _templateObject365;
var _templateObject375;
var _templateObject385;
var _templateObject395;
var _templateObject405;
var _templateObject4111;
var _templateObject427;
var _templateObject435;
var _templateObject445;
var _templateObject455;
var _templateObject465;
var _templateObject475;
var _templateObject485;
var _templateObject495;
var _templateObject505;
var _templateObject5110;
var _templateObject524;
var _templateObject533;
var _templateObject543;
var _templateObject553;
var _templateObject563;
var _templateObject573;
var _templateObject583;
var _templateObject593;
var _templateObject603;
var _templateObject6110;
var _templateObject624;
var _templateObject633;
var _templateObject643;
var _templateObject653;
var _templateObject663;
var _templateObject673;
var _templateObject683;
var _templateObject693;
var _templateObject703;
var _templateObject7110;
var _templateObject724;
var _templateObject733;
var _templateObject743;
var _templateObject753;
var _templateObject763;
var _templateObject773;
var _templateObject783;
var _templateObject793;
var _templateObject803;
var _templateObject819;
var _templateObject824;
var _templateObject833;
var _templateObject843;
var _templateObject853;
var _templateObject863;
var _templateObject873;
var _templateObject883;
var _templateObject893;
var _templateObject903;
var _templateObject916;
var _templateObject923;
var _templateObject933;
var _templateObject943;
var _templateObject953;
var _templateObject963;
var _templateObject973;
var _templateObject983;
var _templateObject993;
var _templateObject1003;
var _templateObject1014;
var _templateObject1023;
var _templateObject1033;
var _templateObject1043;
var _templateObject1053;
var _templateObject1063;
var _templateObject1073;
var _templateObject1083;
var _templateObject1092;
var _templateObject1102;
function _createForOfIteratorHelper13(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray17(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray17(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit11(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray17(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray17(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray17(o, minLen);
}
function _iterableToArray8(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray17(arr);
}
function _arrayLikeToArray17(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral19(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var questHandlers = /* @__PURE__ */ new Map([["questM23Meatsmith", "shop.php?whichshop=meatsmith&action=talk"], ["questM24Doc", "shop.php?whichshop=doc&action=talk"], ["questM25Armorer", "shop.php?whichshop=armory&action=talk"]]);
var defaultOutfit = {
  hat: $item(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral19(["Daylight Shavings Helmet"]))),
  back: $item(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral19(["protonic accelerator pack"]))),
  shirt: $item(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral19(["Jurassic Parka"]))),
  weapon: $item(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
  offhand: $item(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral19(["familiar scrapbook"]))),
  pants: $item(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral19(["designer sweatpants"]))),
  acc1: $item(_templateObject719 || (_templateObject719 = _taggedTemplateLiteral19(["hewn moon-rune spoon"]))),
  acc2: $item(_templateObject818 || (_templateObject818 = _taggedTemplateLiteral19(["Powerful Glove"]))),
  acc3: $item(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral19(["Kremlin's Greatest Briefcase"]))),
  modes: {
    parka: "dilophosaur"
  }
};
function acquire(k, callBack) {
  return {
    name: "Acquire ".concat(k.name),
    completed: function() {
      return have(k);
    },
    do: callBack
  };
}
var CoilWire = {
  name: "Coil Wire",
  completed: function() {
    return CommunityService.CoilWire.isDone();
  },
  tasks: [{
    name: "Visit Toot Oriole",
    completed: function() {
      return get("questM05Toot") === "finished";
    },
    do: function() {
      (0, import_kolmafia29.visitUrl)("tutorial.php?action=toot");
      (0, import_kolmafia29.use)($item(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral19(["letter from King Ralph XI"]))));
      (0, import_kolmafia29.use)($item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral19(["pork elf goodies sack"]))));
    }
  }, {
    name: "Talk to quest NPCs",
    completed: function() {
      return Array.from(questHandlers).every(function(_ref) {
        var _ref2 = _slicedToArray11(_ref, 1), key = _ref2[0];
        return get(key) !== "unstarted";
      });
    },
    do: function() {
      var _iterator = _createForOfIteratorHelper13(questHandlers), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray11(_step.value, 2), key = _step$value[0], url = _step$value[1];
          if (get(key) === "unstarted") {
            (0, import_kolmafia29.visitUrl)(url);
            (0, import_kolmafia29.runChoice)(1);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    name: "Communism!",
    completed: function() {
      return get("_communismUsed");
    },
    do: function() {
      return (0, import_kolmafia29.useSkill)($skill(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral19(["Communism!"]))));
    }
  }, {
    name: "Chateau Desk",
    completed: function() {
      return get("_chateauDeskHarvested");
    },
    do: function() {
      return (0, import_kolmafia29.visitUrl)("place.php?whichplace=chateau&action=chateau_desk1");
    }
  }, darkHorse(), {
    name: "SongBoom\u2122",
    completed: function() {
      return SongBoom_exports.song() === "Total Eclipse of Your Meat";
    },
    do: function() {
      return SongBoom_exports.setSong("Total Eclipse of Your Meat");
    }
  }, {
    name: "Become an Insectologist",
    completed: function() {
      return have($skill(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral19(["Insectologist"]))));
    },
    choices: {
      1494: 2
    },
    do: function() {
      return (0, import_kolmafia29.use)($item(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral19(["S.I.T. Course Completion Certificate"]))));
    }
  }].concat(_toConsumableArray8([
    [$effect(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral19(["The Odour of Magick"]))), function() {
      return (0, import_kolmafia29.use)($item(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral19(["natural magick candle"]))));
    }],
    [$item(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral19(['"I Voted!" sticker']))), function() {
      return vote();
    }],
    [$item(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral19(["pantogram pants"]))), function() {
      return getPantogramPants();
    }],
    [$item(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral19(["battery (AAA)"]))), function() {
      return harvestBatteries();
    }],
    [$item(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral19(["battery (lantern)"]))), function() {
      return (0, import_kolmafia29.create)($item(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral19(["battery (lantern)"]))));
    }],
    [$item(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral19(["box of Familiar Jacks"]))), function() {
      return (0, import_kolmafia29.create)($item(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral19(["box of Familiar Jacks"]))));
    }],
    [$item(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral19(["occult jelly donut"]))), function() {
      return (0, import_kolmafia29.create)($item(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral19(["occult jelly donut"]))));
    }],
    [$item(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral19(["Brutal brogues"]))), function() {
      return (0, import_kolmafia29.cliExecute)("bastille bbq brutalist catapult");
    }],
    [$item(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral19(["cuppa Loyal tea"]))), function() {
      return (0, import_kolmafia29.cliExecute)("teatree loyal");
    }],
    [$item(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral19(["green mana"]))), function() {
      return (0, import_kolmafia29.cliExecute)("cheat forest");
    }],
    [$item(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral19(["wrench"]))), function() {
      return (0, import_kolmafia29.cliExecute)("cheat wrench");
    }],
    [$item(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral19(["Yeg's Motel hand soap"]))), function() {
      return (0, import_kolmafia29.cliExecute)("cargo item ".concat($item(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral19(["Yeg's Motel hand soap"])))));
    }],
    [$item(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral19(["gold detective badge"]))), function() {
      return (0, import_kolmafia29.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }],
    [$item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral19(["your cowboy boots"]))), function() {
      return (0, import_kolmafia29.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
    }],
    [$item(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral19(["weeping willow wand"]))), function() {
      (0, import_kolmafia29.visitUrl)("shop.php?whichshop=lathe");
      (0, import_kolmafia29.create)($item(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral19(["weeping willow wand"]))));
    }],
    [$item(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral19(["toy accordion"]))), function() {
      return (0, import_kolmafia29.retrieveItem)($item(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral19(["toy accordion"]))));
    }],
    [$skill(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral19(["Seek out a Bird"]))), function() {
      return (0, import_kolmafia29.use)($item(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral19(["Bird-a-Day calendar"]))));
    }]
  ].map(function(_ref3) {
    var _ref4 = _slicedToArray11(_ref3, 2), a = _ref4[0], b = _ref4[1];
    return acquire(a, b);
  })), [{
    name: "Acquire Sombrero",
    completed: function() {
      return have($item(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
    },
    prepare: function() {
      return Clan.join(config.main_clan);
    },
    do: function() {
      (0, import_kolmafia29.retrieveItem)($item(_templateObject4111 || (_templateObject4111 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
      checkAvailable($item(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
    }
  }, {
    name: "Gaze at the Stars",
    completed: function() {
      return have($effect(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral19(["That's Just Cloud-Talk, Man"])))) || get("_campAwaySmileBuffs") > 0;
    },
    do: function() {
      return (0, import_kolmafia29.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    }
  }, {
    name: "Scavenge Daycare",
    completed: function() {
      return get("_daycareGymScavenges") > 0;
    },
    do: function() {
      return scavengeDaycare();
    }
  }, {
    name: "Borrow Time",
    completed: function() {
      return get("_borrowedTimeUsed");
    },
    acquire: [{
      item: $item(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral19(["borrowed time"]))),
      get: function() {
        return (0, import_kolmafia29.create)($item(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral19(["borrowed time"]))));
      }
    }],
    do: function() {
      return (0, import_kolmafia29.use)($item(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral19(["borrowed time"]))));
    }
  }, {
    name: "Setup & Heal",
    completed: function() {
      return get("_hotTubSoaks") > 0;
    },
    do: function() {
      (0, import_kolmafia29.cliExecute)("hottub");
      var target = (0, import_kolmafia29.toFamiliar)(config.stillsuit);
      var canUseStillsuit = target !== $familiar(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral19(["none"]))) && (0, import_kolmafia29.itemAmount)($item(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral19(["tiny stillsuit"])))) > 0;
      if (canUseStillsuit)
        (0, import_kolmafia29.equip)(target, $item(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral19(["tiny stillsuit"]))));
    },
    effects: [$effect(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral19(["Feeling Excited"]))), $effect(_templateObject5110 || (_templateObject5110 = _taggedTemplateLiteral19(["Feeling Peaceful"]))), $effect(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral19(["Inscrutable Gaze"]))), $effect(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral19(["Spirit of Peppermint"]))), $effect(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral19(["Triple-Sized"]))), $effect(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral19(["Uncucumbered"])))],
    outfit: defaultOutfit
  }, {
    name: "Use energy blobs",
    completed: function() {
      return !have($item(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral19(["psychokinetic energy blob"])))) || ((0, import_kolmafia29.myMaxmp)() - (0, import_kolmafia29.myMp)()) / 30 < 1;
    },
    do: function() {
      var blob = $item(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral19(["psychokinetic energy blob"])));
      (0, import_kolmafia29.use)(Math.min((0, import_kolmafia29.itemAmount)(blob), Math.floor(((0, import_kolmafia29.myMaxmp)() - (0, import_kolmafia29.myMp)()) / 30)), blob);
    }
  }, {
    name: "Install Workshed",
    completed: function() {
      return (0, import_kolmafia29.getWorkshed)() === $item(_templateObject583 || (_templateObject583 = _taggedTemplateLiteral19(["Little Geneticist DNA-Splicing Lab"])));
    },
    do: function() {
      return (0, import_kolmafia29.use)($item(_templateObject593 || (_templateObject593 = _taggedTemplateLiteral19(["Little Geneticist DNA-Splicing Lab"]))));
    }
  }, {
    name: "Wanderer Sweep",
    completed: function() {
      return get("_speakeasyFreeFights") >= 1;
    },
    do: $location(_templateObject603 || (_templateObject603 = _taggedTemplateLiteral19(["An Unusually Quiet Barroom Brawl"]))),
    post: function() {
      if (get("_speakeasyFreeFights") < 1)
        throw "Didn't increment oliver place fights?";
    },
    outfit: {
      familiar: selectBestFamiliar()
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject6110 || (_templateObject6110 = _taggedTemplateLiteral19(["Curse of Weaksauce"])))).skill($skill(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral19(["Micrometeorite"])))).item($item(_templateObject633 || (_templateObject633 = _taggedTemplateLiteral19(["Time-Spinner"])))).skill($skill(_templateObject643 || (_templateObject643 = _taggedTemplateLiteral19(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia29.mpCost)($skill(_templateObject653 || (_templateObject653 = _taggedTemplateLiteral19(["Saucestorm"]))))), Macro.skill($skill(_templateObject663 || (_templateObject663 = _taggedTemplateLiteral19(["Saucestorm"]))))).attack().repeat())
  }, {
    name: "Reminisce pterodactyl",
    completed: function() {
      return monstersReminisced().includes($monster(_templateObject673 || (_templateObject673 = _taggedTemplateLiteral19(["pterodactyl"]))));
    },
    do: function() {
      return reminisce($monster(_templateObject683 || (_templateObject683 = _taggedTemplateLiteral19(["pterodactyl"]))));
    },
    post: function() {
      if (!monstersReminisced().includes($monster(_templateObject693 || (_templateObject693 = _taggedTemplateLiteral19(["pterodactyl"])))))
        throw "Failed to reminisce?";
    },
    outfit: {
      familiar: $familiar(_templateObject703 || (_templateObject703 = _taggedTemplateLiteral19(["Pair of Stomping Boots"])))
    },
    combat: RunawayCombat
  }, {
    name: "Ninja Costume",
    completed: function() {
      return have($item(_templateObject7110 || (_templateObject7110 = _taggedTemplateLiteral19(["li'l ninja costume"]))));
    },
    choices: {
      297: 3
    },
    do: function() {
      return mapMonster($location(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral19(["The Haiku Dungeon"]))), $monster(_templateObject733 || (_templateObject733 = _taggedTemplateLiteral19(["amateur ninja"]))));
    },
    post: function() {
      return refreshGhost();
    },
    outfit: function() {
      return {
        back: $item(_templateObject743 || (_templateObject743 = _taggedTemplateLiteral19(["protonic accelerator pack"]))),
        shirt: $item(_templateObject753 || (_templateObject753 = _taggedTemplateLiteral19(["Jurassic Parka"]))),
        familiar: selectBestFamiliar(AdvReq.NoAttack),
        modes: {
          parka: "dilophosaur"
        }
      };
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject763 || (_templateObject763 = _taggedTemplateLiteral19(["Feel Nostalgic"])))).skill($skill(_templateObject773 || (_templateObject773 = _taggedTemplateLiteral19(["Sing Along"])))).skill($skill(_templateObject783 || (_templateObject783 = _taggedTemplateLiteral19(["Spit jurassic acid"])))), $monster(_templateObject793 || (_templateObject793 = _taggedTemplateLiteral19(["amateur ninja"])))).macro(Macro.abort())
  }, {
    name: "Stocking Mimic Candy",
    completed: function() {
      return get("_bagOfCandy");
    },
    do: function() {
      var ghostZone = get("ghostLocation");
      if (!ghostZone)
        throw "Failed to get protonic ghost notice";
      (0, import_kolmafia29.adv1)(ghostZone, -1);
    },
    post: function() {
      (0, import_kolmafia29.visitUrl)("questlog.php?which=1");
      (0, import_kolmafia29.equip)($slot(_templateObject803 || (_templateObject803 = _taggedTemplateLiteral19(["familiar"]))), $item(_templateObject819 || (_templateObject819 = _taggedTemplateLiteral19(["none"]))));
    },
    outfit: {
      back: $item(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral19(["protonic accelerator pack"]))),
      famequip: $item(_templateObject833 || (_templateObject833 = _taggedTemplateLiteral19(["none"]))),
      familiar: $familiar(_templateObject843 || (_templateObject843 = _taggedTemplateLiteral19(["Stocking Mimic"])))
    },
    combat: DefaultCombat
  }, {
    name: "Get Crimbo Shrub decorations",
    completed: function() {
      return have($item(_templateObject853 || (_templateObject853 = _taggedTemplateLiteral19(["box of old Crimbo decorations"]))));
    },
    do: function() {
      return (0, import_kolmafia29.useFamiliar)($familiar(_templateObject863 || (_templateObject863 = _taggedTemplateLiteral19(["Crimbo Shrub"]))));
    }
  }, {
    name: "Decorate Crimbo Shrub",
    completed: function() {
      return get("_shrubDecorated");
    },
    do: function() {
      return CrimboShrub_exports.decorate("Mysticality", "Sleaze Damage", "Blocking", "Red Ray");
    }
  }, {
    name: "Reminisce cocktail shrimp",
    completed: function() {
      return DNALab_exports.isHybridized() || get("_saberForceUses") > 0 || monstersReminisced().includes($monster(_templateObject873 || (_templateObject873 = _taggedTemplateLiteral19(["cocktail shrimp"]))));
    },
    do: function() {
      return reminisce($monster(_templateObject883 || (_templateObject883 = _taggedTemplateLiteral19(["cocktail shrimp"]))));
    },
    post: function() {
      DNALab_exports.makeTonic();
      DNALab_exports.hybridize();
    },
    outfit: {
      weapon: $item(_templateObject893 || (_templateObject893 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject903 || (_templateObject903 = _taggedTemplateLiteral19(["Crimbo Shrub"])))
    },
    combat: new CombatStrategy().ccs("item ".concat($item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral19(["DNA extraction syringe"]))), "\n          skill ").concat($skill(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral19(["Open a Big Red Present"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject933 || (_templateObject933 = _taggedTemplateLiteral19(["Use the Force"])))), $monster(_templateObject943 || (_templateObject943 = _taggedTemplateLiteral19(["cocktail shrimp"])))).macro(Macro.abort())
  }, {
    name: "Sausage Goblin",
    completed: function() {
      return get("_sausageFights") > 0;
    },
    do: $location(_templateObject953 || (_templateObject953 = _taggedTemplateLiteral19(["Noob Cave"]))),
    outfit: function() {
      return {
        back: $item(_templateObject963 || (_templateObject963 = _taggedTemplateLiteral19(["unwrapped knock-off retro superhero cape"]))),
        offhand: $item(_templateObject973 || (_templateObject973 = _taggedTemplateLiteral19(["Kramco Sausage-o-Matic\u2122"]))),
        familiar: selectBestFamiliar(),
        modes: {
          retrocape: ["heck", "thrill"]
        }
      };
    },
    combat: DefaultCombat
  }, {
    name: "Voter Monster",
    ready: function() {
      return voterMonsterNow();
    },
    completed: function() {
      return get("_voteFreeFights") >= 1;
    },
    do: $location(_templateObject983 || (_templateObject983 = _taggedTemplateLiteral19(["Noob Cave"]))),
    outfit: function() {
      return {
        offhand: defaultOutfit.offhand,
        acc3: $item(_templateObject993 || (_templateObject993 = _taggedTemplateLiteral19(['"I Voted!" sticker']))),
        familiar: selectBestFamiliar()
      };
    },
    combat: DefaultCombat
  }, {
    name: "Send autumn-aton",
    completed: function() {
      return !AutumnAton_exports.available();
    },
    do: function() {
      return AutumnAton_exports.sendTo($location(_templateObject1003 || (_templateObject1003 = _taggedTemplateLiteral19(["The Sleazy Back Alley"]))));
    }
  }, {
    name: "Coil Wire",
    completed: function() {
      return CommunityService.CoilWire.isDone();
    },
    prepare: spendAllMpOnLibrams,
    do: function() {
      return runTest(CommunityService.CoilWire);
    },
    effects: [$effect(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral19(["[1458]Blood Sugar Sauce Magic"])))],
    outfit: {
      hat: $item(_templateObject1023 || (_templateObject1023 = _taggedTemplateLiteral19(["Iunion Crown"]))),
      back: $item(_templateObject1033 || (_templateObject1033 = _taggedTemplateLiteral19(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject1043 || (_templateObject1043 = _taggedTemplateLiteral19(["Jurassic Parka"]))),
      weapon: $item(_templateObject1053 || (_templateObject1053 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject1063 || (_templateObject1063 = _taggedTemplateLiteral19(["wrench, industrial fire extinguisher"]))),
      pants: $item(_templateObject1073 || (_templateObject1073 = _taggedTemplateLiteral19(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject1083 || (_templateObject1083 = _taggedTemplateLiteral19(["hewn moon-rune spoon"]))),
      acc2: $item(_templateObject1092 || (_templateObject1092 = _taggedTemplateLiteral19(["Retrospecs"]))),
      acc3: $item(_templateObject1102 || (_templateObject1102 = _taggedTemplateLiteral19(["Kremlin's Greatest Briefcase"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["heck", "thrill"]
      }
    }
  }])
};

// src/quests/combatFrequency.ts
var _templateObject170;
var _templateObject240;
var _templateObject330;
var _templateObject428;
var _templateObject521;
var _templateObject621;
var _templateObject720;
var _templateObject820;
var _templateObject917;
var _templateObject1015;
var _templateObject1113;
var _templateObject1213;
var _templateObject1313;
var _templateObject1413;
function _taggedTemplateLiteral20(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var CombatFrequencyQuest = {
  name: "Be a Living Statue",
  completed: function() {
    return CommunityService.Noncombat.isDone();
  },
  tasks: [darkHorse(), {
    name: "Non-Combat Frequency Test",
    completed: function() {
      return CommunityService.Noncombat.isDone();
    },
    do: function() {
      return runTest(CommunityService.Noncombat);
    },
    effects: [$effect(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral20(["Feeling Lonely"]))), $effect(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral20(["Silence of the God Lobster"]))), $effect(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral20(["Silent Running"]))), $effect(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral20(["Smooth Movements"]))), $effect(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral20(["The Sonata of Sneakiness"]))), $effect(_templateObject621 || (_templateObject621 = _taggedTemplateLiteral20(["Throwing Some Shade"])))],
    outfit: {
      hat: $item(_templateObject720 || (_templateObject720 = _taggedTemplateLiteral20(["very pointy crown"]))),
      back: $item(_templateObject820 || (_templateObject820 = _taggedTemplateLiteral20(["protonic accelerator pack"]))),
      shirt: $item(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral20(["Jurassic Parka"]))),
      offhand: $item(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral20(["unbreakable umbrella"]))),
      pants: $item(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral20(["pantogram pants"]))),
      acc2: $item(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral20(["atlas of local maps"]))),
      acc3: $item(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral20(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral20(["Disgeist"]))),
      modes: {
        parka: "pterodactyl",
        umbrella: "cocoon"
      }
    }
  }]
};

// src/quests/donate.ts
var import_kolmafia30 = require("kolmafia");
var _templateObject171;
var _templateObject241;
var _templateObject331;
var _templateObject429;
var _templateObject525;
var _templateObject625;
var _templateObject721;
var _templateObject821;
var _templateObject918;
function _taggedTemplateLiteral21(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function runChoices() {
  for (var _len = arguments.length, choices = new Array(_len), _key = 0; _key < _len; _key++) {
    choices[_key] = arguments[_key];
  }
  for (var _i = 0, _choices = choices; _i < _choices.length; _i++) {
    var c = _choices[_i];
    (0, import_kolmafia30.runChoice)(c);
  }
}
var DonateQuest = {
  name: "Donate Your Body to Science",
  completed: function() {
    return get("kingLiberated");
  },
  tasks: [{
    name: "Grab Comic",
    ready: function() {
      return (0, import_kolmafia30.storageAmount)($item(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral21(["Batfellow comic"])))) > 0;
    },
    completed: function() {
      return (0, import_kolmafia30.itemAmount)($item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral21(["Batfellow comic"])))) > 0 || get("_batfellowToday", false);
    },
    do: function() {
      return (0, import_kolmafia30.takeStorage)(1, $item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral21(["Batfellow comic"]))));
    }
  }, {
    name: "Enter the Batfellow",
    completed: function() {
      return !have($item(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral21(["Batfellow comic"])))) || get("_batfellowToday", false);
    },
    prepare: function() {
      return Macro.skill($skill(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral21(["Bat-Kick"])))).repeat().setAutoAttack();
    },
    choices: {
      1133: 1
    },
    do: function() {
      return (0, import_kolmafia30.use)(1, $item(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral21(["Batfellow comic"]))));
    },
    post: function() {
      return _set("_batfellowToday", true);
    },
    outfit: function() {
      var stillSuitFam = (0, import_kolmafia30.toFamiliar)(config.stillsuit);
      var myFams = import_kolmafia30.Familiar.all().filter(function(f) {
        return !f.attributes.includes("pokefam") && (0, import_kolmafia30.haveFamiliar)(f) && f !== stillSuitFam;
      });
      var randomFam = myFams[Math.floor(Math.random() * myFams.length)];
      if (!randomFam || randomFam === $familiar(_templateObject721 || (_templateObject721 = _taggedTemplateLiteral21(["none"]))) || !(0, import_kolmafia30.haveFamiliar)(randomFam)) {
        throw "Failed to select a valid familiar?";
      }
      return {
        familiar: randomFam
      };
    }
  }, {
    name: "Get Extra-Swishy Cloak",
    ready: function() {
      return get("batmanFundsAvailable") > 0;
    },
    completed: function() {
      return get("batmanUpgrades").includes("Extra-Swishy Cloak");
    },
    choices: {
      1136: 0,
      1137: 0
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
      runChoices(1, 3, 11, 6);
    }
  }, {
    name: "Get Surveillance Network",
    ready: function() {
      return get("batmanFundsAvailable") > 0;
    },
    completed: function() {
      return get("batmanUpgrades").includes("Surveillance Network");
    },
    choices: {
      1136: 0,
      1139: 0
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
      runChoices(3, 4, 11, 6);
    }
  }, {
    name: "Get Transfusion Satellite",
    ready: function() {
      return get("batmanFundsAvailable") > 0;
    },
    completed: function() {
      return get("batmanUpgrades").includes("Transfusion Satellite");
    },
    choices: {
      1136: 0,
      1139: 0
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
      runChoices(3, 3, 11, 6);
    }
  }, {
    name: "Get Rocket Booster",
    ready: function() {
      return get("batmanFundsAvailable") > 0;
    },
    completed: function() {
      return get("batmanUpgrades").includes("Rocket Booster");
    },
    choices: {
      1136: 0,
      1138: 0
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
      runChoices(2, 1, 11, 6);
    }
  }, {
    name: "Go to Center Park",
    ready: function() {
      return get("batmanTimeLeft") >= 4;
    },
    completed: function() {
      return get("batmanZone") === "Center Park (Low Crime)";
    },
    choices: {
      1135: 0
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_car");
      (0, import_kolmafia30.runChoice)(5);
    }
  }, {
    name: "Fight a common criminal",
    completed: function() {
      return get("batmanTimeLeft") < 4;
    },
    do: function() {
      while (get("batmanTimeLeft") >= 4) {
        (0, import_kolmafia30.visitUrl)((0, import_kolmafia30.toUrl)($location(_templateObject821 || (_templateObject821 = _taggedTemplateLiteral21(["Center Park After Dark"])))));
        if ((0, import_kolmafia30.currentRound)() > 0)
          (0, import_kolmafia30.runCombat)(Macro.skill($skill(_templateObject918 || (_templateObject918 = _taggedTemplateLiteral21(["Bat-Kick"])))).repeat().toString());
      }
    }
  }, {
    name: "End Comic",
    completed: function() {
      return get("batmanZone").includes("Gotpork City");
    },
    choices: {
      1134: 1
    },
    do: function() {
      (0, import_kolmafia30.visitUrl)("place.php?whichplace=batman_park&action=batman_park_car");
      (0, import_kolmafia30.runChoice)(9);
      (0, import_kolmafia30.setAutoAttack)(0);
    }
  }, {
    name: "Donate",
    completed: function() {
      return get("kingLiberated");
    },
    do: function() {
      return CommunityService.donate();
    }
  }]
};

// src/quests/familiarWeight.ts
var import_kolmafia31 = require("kolmafia");
var _templateObject180;
var _templateObject250;
var _templateObject337;
var _templateObject430;
var _templateObject526;
var _templateObject626;
var _templateObject725;
var _templateObject825;
var _templateObject919;
var _templateObject1016;
var _templateObject1114;
var _templateObject1214;
var _templateObject1314;
var _templateObject1414;
var _templateObject1512;
var _templateObject1610;
var _templateObject1710;
var _templateObject1810;
var _templateObject1910;
var _templateObject2010;
var _templateObject2115;
var _templateObject2213;
var _templateObject2310;
var _templateObject2410;
var _templateObject259;
var _templateObject269;
var _templateObject278;
var _templateObject287;
var _templateObject297;
var _templateObject307;
var _templateObject3112;
var _templateObject3210;
var _templateObject338;
var _templateObject347;
var _templateObject357;
var _templateObject366;
var _templateObject376;
var _templateObject386;
var _templateObject396;
var _templateObject406;
var _templateObject4112;
var _templateObject4210;
var _templateObject436;
var _templateObject446;
var _templateObject456;
function _slicedToArray12(arr, i) {
  return _arrayWithHoles12(arr) || _iterableToArrayLimit12(arr, i) || _unsupportedIterableToArray18(arr, i) || _nonIterableRest12();
}
function _nonIterableRest12() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray18(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray18(o, minLen);
}
function _arrayLikeToArray18(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit12(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral22(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var FamiliarWeightQuest = {
  name: "Breed More Collies",
  completed: function() {
    return CommunityService.FamiliarWeight.isDone();
  },
  tasks: [tuneMoonPlatypus(), {
    name: "Meteor Showered",
    completed: function() {
      return have($effect(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral22(["Meteor Showered"]))));
    },
    do: $location(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral22(["The Dire Warren"]))),
    outfit: {
      weapon: $item(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral22(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral22(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral22(["Meteor Shower"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject626 || (_templateObject626 = _taggedTemplateLiteral22(["Use the Force"])))), $monster(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral22(["fluffy bunny"])))).macro(Macro.abort())
  }, {
    name: "Familiar Weight Test",
    completed: function() {
      return CommunityService.FamiliarWeight.isDone();
    },
    prepare: function() {
      var needMore = function() {
        return (0, import_kolmafia31.weightAdjustment)() < 275;
      };
      var haveUnused = function(i) {
        return have(i) && !have(itemToEffect(i));
      };
      if (needMore() && haveUnused($item(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral22(["resolution: be kinder"]))))) {
        (0, import_kolmafia31.use)($item(_templateObject919 || (_templateObject919 = _taggedTemplateLiteral22(["resolution: be kinder"]))));
      }
      if (needMore() && haveUnused($item(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral22(["green candy heart"])))))
        (0, import_kolmafia31.use)($item(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral22(["green candy heart"]))));
      var librams = [[4, $item(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral22(["love song of icy revenge"])))], [5, $item(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral22(["pulled blue taffy"])))]];
      librams.forEach(function(_ref) {
        var _ref2 = _slicedToArray12(_ref, 2), n = _ref2[0], i = _ref2[1];
        if (needMore())
          (0, import_kolmafia31.use)(Math.min(n, (0, import_kolmafia31.itemAmount)(i)), i);
      });
      if (needMore()) {
        acquireEffect($effect(_templateObject1414 || (_templateObject1414 = _taggedTemplateLiteral22(["Ode to Booze"]))));
        (0, import_kolmafia31.drink)($item(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral22(["1950 Vampire Vintner wine"]))));
      }
      if (needMore())
        (0, import_kolmafia31.chew)($item(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral22(["abstraction: joy"]))));
    },
    do: function() {
      return runTest(CommunityService.FamiliarWeight);
    },
    effects: [$effect(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral22(["A Girl Named Sue"]))), $effect(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral22(["All Is Forgiven"]))), $effect(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral22(["Billiards Belligerence"]))), $effect(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral22(["Blood Bond"]))), $effect(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral22(["Do I Know You From Somewhere?"]))), $effect(_templateObject2213 || (_templateObject2213 = _taggedTemplateLiteral22(["Empathy"]))), $effect(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral22(["Fidoxene"]))), $effect(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral22(["Human-Machine Hybrid"]))), $effect(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral22(["Human-Fish Hybrid"]))), $effect(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral22(["Leash of Linguini"]))), $effect(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral22(["Loyal Tea"]))), $effect(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral22(["Man's Worst Enemy"]))), $effect(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral22(["Meteor Showered"]))), $effect(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral22(["Open Heart Surgery"]))), $effect(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral22(["Over-Familiar With Dactyls"]))), $effect(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral22(["Puzzle Champ"]))), $effect(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral22(["Robot Friends"]))), $effect(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral22(["Shortly Stacked"]))), $effect(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral22(["Shrimpin' Ain't Easy"]))), $effect(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral22(["Whole Latte Love"]))), $effect(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral22(["You Can Really Taste the Dormouse"])))],
    outfit: {
      hat: $item(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral22(["Daylight Shavings Helmet"]))),
      weapon: $item(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral22(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral22(["burning paper crane, rope, familiar scrapbook"]))),
      acc1: $item(_templateObject4112 || (_templateObject4112 = _taggedTemplateLiteral22(["Brutal brogues"]))),
      acc2: $item(_templateObject4210 || (_templateObject4210 = _taggedTemplateLiteral22(["hewn moon-rune spoon"]))),
      acc3: $item(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral22(["Beach Comb"]))),
      famequip: $item(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral22(["overloaded Yule battery"]))),
      familiar: $familiar(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral22(["Mini-Trainbot"])))
    }
  }]
};

// src/quests/hotResist.ts
var _templateObject181;
var _templateObject251;
var _templateObject339;
var _templateObject431;
var _templateObject527;
var _templateObject627;
var _templateObject726;
var _templateObject826;
var _templateObject920;
var _templateObject1017;
var _templateObject1115;
var _templateObject1215;
var _templateObject1315;
var _templateObject1415;
var _templateObject1513;
var _templateObject1611;
var _templateObject1711;
var _templateObject1811;
var _templateObject1911;
var _templateObject2011;
var _templateObject2116;
var _templateObject2214;
function _taggedTemplateLiteral23(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var HotResistQuest = {
  name: "Clean Steam Tunnels",
  completed: function() {
    return CommunityService.HotRes.isDone();
  },
  tasks: [{
    name: "Fireproof Foam Suit",
    completed: function() {
      return have($effect(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral23(["Fireproof Foam Suit"]))));
    },
    do: $location(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral23(["The Dire Warren"]))),
    outfit: {
      weapon: $item(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral23(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral23(["industrial fire extinguisher"]))),
      familiar: $familiar(_templateObject527 || (_templateObject527 = _taggedTemplateLiteral23(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject627 || (_templateObject627 = _taggedTemplateLiteral23(["Fire Extinguisher: Foam Yourself"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject726 || (_templateObject726 = _taggedTemplateLiteral23(["Use the Force"])))), $monster(_templateObject826 || (_templateObject826 = _taggedTemplateLiteral23(["fluffy bunny"])))).macro(Macro.abort())
  }, {
    name: "Hot Resist Test",
    completed: function() {
      return CommunityService.HotRes.isDone();
    },
    do: function() {
      return runTest(CommunityService.HotRes);
    },
    effects: [$effect(_templateObject920 || (_templateObject920 = _taggedTemplateLiteral23(["Astral Shell"]))), $effect(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral23(["Elemental Saucesphere"]))), $effect(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral23(["Empathy"]))), $effect(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral23(["Fireproof Foam Suit"])))],
    outfit: {
      hat: $item(_templateObject1315 || (_templateObject1315 = _taggedTemplateLiteral23(["Daylight Shavings Helmet"]))),
      back: $item(_templateObject1415 || (_templateObject1415 = _taggedTemplateLiteral23(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral23(["Jurassic Parka"]))),
      weapon: $item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral23(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral23(["industrial fire extinguisher"]))),
      pants: $item(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral23(["designer sweatpants"]))),
      acc1: $item(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral23(["Brutal brogues"]))),
      acc2: $item(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral23(["hewn moon-rune spoon"]))),
      acc3: $item(_templateObject2116 || (_templateObject2116 = _taggedTemplateLiteral23(["Beach Comb"]))),
      familiar: $familiar(_templateObject2214 || (_templateObject2214 = _taggedTemplateLiteral23(["Exotic Parrot"]))),
      modes: {
        parka: "pterodactyl",
        retrocape: ["vampire", "hold"]
      }
    }
  }]
};

// src/quests/itemDrop.ts
var _templateObject190;
var _templateObject260;
var _templateObject340;
var _templateObject437;
var _templateObject528;
var _templateObject628;
var _templateObject727;
var _templateObject827;
var _templateObject921;
var _templateObject1018;
var _templateObject1116;
var _templateObject1216;
var _templateObject1316;
var _templateObject1416;
var _templateObject1514;
var _templateObject1612;
var _templateObject1712;
var _templateObject1812;
var _templateObject1912;
var _templateObject2012;
var _templateObject2117;
var _templateObject2215;
var _templateObject2311;
var _templateObject2411;
var _templateObject2510;
var _templateObject2610;
var _templateObject279;
var _templateObject288;
var _templateObject298;
var _templateObject308;
var _templateObject3113;
var _templateObject3211;
var _templateObject3310;
var _templateObject348;
function _taggedTemplateLiteral24(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var ItemDropQuest = {
  name: "Make Margaritas",
  completed: function() {
    return CommunityService.BoozeDrop.isDone();
  },
  tasks: [{
    name: "Become a Bat",
    completed: function() {
      return have($effect(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral24(["Bat-Adjacent Form"]))));
    },
    do: $location(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral24(["The Dire Warren"]))),
    effects: $effects(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral24(["Ode to Booze"]))),
    outfit: {
      back: $item(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral24(["vampyric cloake"]))),
      familiar: $familiar(_templateObject528 || (_templateObject528 = _taggedTemplateLiteral24(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill($skill(_templateObject628 || (_templateObject628 = _taggedTemplateLiteral24(["Become a Bat"])))).runaway())
  }, {
    name: "Booze & Item Drop Test",
    completed: function() {
      return CommunityService.BoozeDrop.isDone();
    },
    do: function() {
      return runTest(CommunityService.BoozeDrop);
    },
    acquire: [{
      item: $item(_templateObject727 || (_templateObject727 = _taggedTemplateLiteral24(["wad of used tape"])))
    }],
    effects: [$effect(_templateObject827 || (_templateObject827 = _taggedTemplateLiteral24(["Bat-Adjacent Form"]))), $effect(_templateObject921 || (_templateObject921 = _taggedTemplateLiteral24(["Blessing of the Bird"]))), $effect(_templateObject1018 || (_templateObject1018 = _taggedTemplateLiteral24(["Blessing of your favorite Bird"]))), $effect(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral24(["Crunching Leaves"]))), $effect(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral24(["Fat Leon's Phat Loot Lyric"]))), $effect(_templateObject1316 || (_templateObject1316 = _taggedTemplateLiteral24(["Feeling Lost"]))), $effect(_templateObject1416 || (_templateObject1416 = _taggedTemplateLiteral24(["Hustlin'"]))), $effect(_templateObject1514 || (_templateObject1514 = _taggedTemplateLiteral24(["items.enh"]))), $effect(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral24(["Lantern-Charged"]))), $effect(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral24(["Nearly All-Natural"]))), $effect(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral24(["Singer's Faithful Ocelot"]))), $effect(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral24(["Steely-Eyed Squint"]))), $effect(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral24(["The Spirit of Taking"]))), $effect(_templateObject2117 || (_templateObject2117 = _taggedTemplateLiteral24(["Uncucumbered"])))],
    outfit: {
      hat: $item(_templateObject2215 || (_templateObject2215 = _taggedTemplateLiteral24(["wad of used tape"]))),
      back: $item(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral24(["vampyric cloake"]))),
      weapon: [$item(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral24(["extra-large utility candle"]))), $item(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral24(["novelty sparkling candle"]))), $item(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral24(["runed taper candle"]))), $item(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral24(["oversized sparkler"]))), $item(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral24(["none"])))],
      offhand: $item(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral24(["unbreakable umbrella"]))),
      acc1: $item(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral24(["Guzzlr tablet"]))),
      acc2: $item(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral24(["gold detective badge"]))),
      acc3: $item(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral24(["your cowboy boots"]))),
      famequip: $item(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral24(["li'l ninja costume"]))),
      familiar: $familiar(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral24(["Trick-or-Treating Tot"]))),
      modes: {
        umbrella: "bucket style"
      }
    }
  }]
};

// src/quests/leveling.ts
var import_kolmafia32 = require("kolmafia");
var _templateObject191;
var _templateObject261;
var _templateObject341;
var _templateObject438;
var _templateObject529;
var _templateObject629;
var _templateObject728;
var _templateObject828;
var _templateObject924;
var _templateObject1019;
var _templateObject1117;
var _templateObject1217;
var _templateObject1317;
var _templateObject1417;
var _templateObject1515;
var _templateObject1613;
var _templateObject1713;
var _templateObject1813;
var _templateObject1913;
var _templateObject2013;
var _templateObject2118;
var _templateObject2216;
var _templateObject2312;
var _templateObject2412;
var _templateObject2511;
var _templateObject2611;
var _templateObject2710;
var _templateObject289;
var _templateObject299;
var _templateObject309;
var _templateObject3114;
var _templateObject3212;
var _templateObject3311;
var _templateObject349;
var _templateObject358;
var _templateObject367;
var _templateObject377;
var _templateObject387;
var _templateObject397;
var _templateObject407;
var _templateObject4113;
var _templateObject4211;
var _templateObject439;
var _templateObject447;
var _templateObject457;
var _templateObject466;
var _templateObject476;
var _templateObject486;
var _templateObject496;
var _templateObject506;
var _templateObject5111;
var _templateObject5210;
var _templateObject534;
var _templateObject544;
var _templateObject554;
var _templateObject564;
var _templateObject574;
var _templateObject584;
var _templateObject594;
var _templateObject604;
var _templateObject6111;
var _templateObject6210;
var _templateObject634;
var _templateObject644;
var _templateObject654;
var _templateObject664;
var _templateObject674;
var _templateObject684;
var _templateObject694;
var _templateObject704;
var _templateObject7111;
var _templateObject729;
var _templateObject734;
var _templateObject744;
var _templateObject754;
var _templateObject764;
var _templateObject774;
var _templateObject784;
var _templateObject794;
var _templateObject804;
var _templateObject8110;
var _templateObject829;
var _templateObject834;
var _templateObject844;
var _templateObject854;
var _templateObject864;
var _templateObject874;
var _templateObject884;
var _templateObject894;
var _templateObject904;
var _templateObject9110;
var _templateObject925;
var _templateObject934;
var _templateObject944;
var _templateObject954;
var _templateObject964;
var _templateObject974;
var _templateObject984;
var _templateObject994;
var _templateObject1004;
var _templateObject10110;
var _templateObject1024;
var _templateObject1034;
var _templateObject1044;
var _templateObject1054;
var _templateObject1064;
var _templateObject1074;
var _templateObject1084;
var _templateObject1093;
var _templateObject1103;
var _templateObject1118;
var _templateObject1123;
var _templateObject1133;
var _templateObject1143;
var _templateObject1153;
var _templateObject1163;
var _templateObject1173;
var _templateObject1182;
var _templateObject1192;
var _templateObject1202;
var _templateObject1218;
var _templateObject1223;
var _templateObject1233;
var _templateObject1243;
var _templateObject1253;
var _templateObject1263;
var _templateObject1273;
var _templateObject1282;
var _templateObject1292;
var _templateObject1302;
var _templateObject1318;
var _templateObject1323;
var _templateObject1333;
var _templateObject1343;
var _templateObject1353;
var _templateObject1363;
var _templateObject1373;
var _templateObject1382;
var _templateObject1392;
var _templateObject1402;
var _templateObject1418;
var _templateObject1423;
var _templateObject1433;
var _templateObject1443;
var _templateObject1453;
var _templateObject1463;
var _templateObject1473;
var _templateObject1482;
var _templateObject1492;
var _templateObject1502;
var _templateObject1516;
var _templateObject1523;
var _templateObject1533;
var _templateObject1543;
var _templateObject1552;
var _templateObject1562;
var _templateObject1572;
var _templateObject1582;
var _templateObject1592;
var _templateObject1602;
var _templateObject1614;
var _templateObject1622;
var _templateObject1632;
var _templateObject1642;
var _templateObject1652;
var _templateObject1662;
var _templateObject1672;
var _templateObject1682;
var _templateObject1692;
var _templateObject1702;
var _templateObject1714;
var _templateObject1722;
var _templateObject1732;
var _templateObject1742;
var _templateObject1752;
var _templateObject1762;
var _templateObject1772;
var _templateObject1782;
var _templateObject1792;
var _templateObject1802;
var _templateObject1814;
var _templateObject1822;
var _templateObject1832;
var _templateObject1842;
var _templateObject1852;
var _templateObject1862;
var _templateObject1872;
var _templateObject1882;
var _templateObject1892;
var _templateObject1902;
var _templateObject1914;
var _templateObject1922;
var _templateObject1932;
var _templateObject1942;
var _templateObject1952;
var _templateObject1962;
var _templateObject1972;
var _templateObject1982;
var _templateObject1992;
var _templateObject200;
var _templateObject201;
var _templateObject2022;
var _templateObject2032;
var _templateObject2042;
var _templateObject2052;
var _templateObject2062;
var _templateObject2072;
var _templateObject2082;
var _templateObject2092;
var _templateObject2102;
var _templateObject2119;
var _templateObject2122;
var _templateObject2132;
var _templateObject2142;
var _templateObject2152;
var _templateObject2162;
var _templateObject2172;
var _templateObject2182;
var _templateObject2192;
var _templateObject2202;
var _templateObject2217;
var _templateObject2222;
var _templateObject2232;
var _templateObject2242;
var _templateObject2252;
var _templateObject2262;
var _templateObject2272;
var _templateObject2282;
var _templateObject2292;
var _templateObject2302;
var _templateObject2313;
var _templateObject2322;
var _templateObject2332;
var _templateObject2342;
var _templateObject2352;
var _templateObject2362;
var _templateObject2372;
var _templateObject2382;
var _templateObject2392;
var _templateObject2402;
var _templateObject2413;
var _templateObject2422;
var _templateObject2432;
var _templateObject2442;
var _templateObject2452;
var _templateObject2462;
var _templateObject2472;
var _templateObject2482;
var _templateObject2492;
var _templateObject2502;
var _templateObject2512;
var _templateObject2522;
var _templateObject2532;
var _templateObject2542;
var _templateObject2552;
var _templateObject2562;
var _templateObject2572;
var _templateObject2582;
var _templateObject2592;
var _templateObject2602;
var _templateObject2612;
var _templateObject2622;
var _templateObject2632;
var _templateObject2642;
var _templateObject2652;
var _templateObject2662;
var _templateObject2672;
var _templateObject2682;
var _templateObject2692;
var _templateObject270;
var _templateObject271;
var _templateObject2722;
var _templateObject2732;
var _templateObject2742;
var _templateObject2752;
var _templateObject2762;
var _templateObject2772;
var _templateObject2782;
var _templateObject2792;
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey15(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey15(arg) {
  var key = _toPrimitive15(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive15(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper14(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray19(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray19(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray19(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray19(o, minLen);
}
function _iterableToArray9(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray19(arr);
}
function _arrayLikeToArray19(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral25(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function levelingOutfit(cap) {
  var multiplyML = (0, import_kolmafia32.myBuffedstat)((0, import_kolmafia32.myPrimestat)()) < (cap !== null && cap !== void 0 ? cap : Infinity);
  return {
    hat: $item(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral25(["Daylight Shavings Helmet"]))),
    back: $items(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral25(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
    shirt: $item(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
    weapon: $item(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral25(["Fourth of May Cosplay Saber"]))),
    offhand: multiplyML ? $item(_templateObject529 || (_templateObject529 = _taggedTemplateLiteral25(["unbreakable umbrella"]))) : $item(_templateObject629 || (_templateObject629 = _taggedTemplateLiteral25(["familiar scrapbook"]))),
    pants: $item(_templateObject728 || (_templateObject728 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
    acc1: $item(_templateObject828 || (_templateObject828 = _taggedTemplateLiteral25(["hewn moon-rune spoon"]))),
    acc2: $items(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral25(["battle broom, gold detective badge"]))),
    acc3: $item(_templateObject1019 || (_templateObject1019 = _taggedTemplateLiteral25(["Beach Comb"]))),
    modes: {
      parka: "kachungasaur",
      retrocape: ["heck", "thrill"],
      umbrella: "broken"
    }
  };
}
var vintnerOutfit = function() {
  return {
    hat: $item(_templateObject1117 || (_templateObject1117 = _taggedTemplateLiteral25(["Iunion Crown"]))),
    back: $items(_templateObject1217 || (_templateObject1217 = _taggedTemplateLiteral25(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
    shirt: get("garbageShirtCharge") > 0 ? $item(_templateObject1317 || (_templateObject1317 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))) : $item(_templateObject1417 || (_templateObject1417 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
    weapon: $item(_templateObject1515 || (_templateObject1515 = _taggedTemplateLiteral25(["weeping willow wand"]))),
    offhand: $item(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral25(["unbreakable umbrella"]))),
    pants: $item(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
    acc1: $item(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral25(["Powerful Glove"]))),
    acc2: $items(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral25(["battle broom, gold detective badge"]))),
    acc3: get("_backUpUses") < 11 ? $item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral25(["backup camera"]))) : $item(_templateObject2118 || (_templateObject2118 = _taggedTemplateLiteral25(["Kremlin's Greatest Briefcase"]))),
    familiar: selectBestFamiliar(AdvReq.Wine),
    modes: {
      parka: "kachungasaur",
      retrocape: ["heck", "thrill"],
      umbrella: "broken"
    }
  };
};
function getHowManySausagesToEat() {
  if ((0, import_kolmafia32.myMaxmp)() - (0, import_kolmafia32.myMp)() < 999)
    return 0;
  if ((0, import_kolmafia32.itemAmount)($item(_templateObject2216 || (_templateObject2216 = _taggedTemplateLiteral25(["magical sausage casing"])))) < 1)
    return 0;
  if ((0, import_kolmafia32.myMaxmp)() - (0, import_kolmafia32.mpCost)($skill(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral25(["Summon BRICKOs"])))) < config.MP_SAFE_LIMIT)
    return 0;
  var offset = get("_sausagesMade");
  if (offset >= 23)
    return 0;
  var costsOfNext = _toConsumableArray9(Array(24).keys()).map(function(k) {
    return k * 111;
  }).splice(1);
  var mpRefills = Math.floor(((0, import_kolmafia32.myMaxmp)() - (0, import_kolmafia32.myMp)()) / 999);
  var toEat = 0;
  var totalCost = 0;
  while (toEat < mpRefills && toEat + offset < costsOfNext.length) {
    totalCost += costsOfNext[toEat + offset];
    if ((0, import_kolmafia32.myMeat)() - totalCost < config.MEAT_SAFE_LIMIT)
      break;
    toEat++;
  }
  return Math.min(toEat, (0, import_kolmafia32.itemAmount)($item(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral25(["magical sausage casing"])))));
}
function topOffHp() {
  if ((0, import_kolmafia32.myHp)() < (0, import_kolmafia32.myMaxhp)())
    (0, import_kolmafia32.useSkill)(Math.ceil((0, import_kolmafia32.myMaxhp)() / (0, import_kolmafia32.myHp)()), $skill(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))));
}
var Leveling = {
  name: "Leveling",
  completed: function() {
    return get("csServicesPerformed").includes(",");
  },
  tasks: [{
    name: "Cast Soul Food",
    completed: function() {
      return (0, import_kolmafia32.mySoulsauce)() / (0, import_kolmafia32.soulsauceCost)($skill(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral25(["Soul Food"])))) < 1 || (0, import_kolmafia32.myMaxmp)() - (0, import_kolmafia32.myMp)() < 15;
    },
    do: function() {
      var maxMpGain = ((0, import_kolmafia32.myMaxmp)() - (0, import_kolmafia32.myMp)()) / 15;
      var maxSoulFoodCasts = (0, import_kolmafia32.mySoulsauce)() / (0, import_kolmafia32.soulsauceCost)($skill(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral25(["Soul Food"]))));
      var soulFoodCasts = Math.floor(Math.min(maxMpGain, maxSoulFoodCasts));
      if (soulFoodCasts > 0)
        (0, import_kolmafia32.useSkill)(soulFoodCasts, $skill(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral25(["Soul Food"]))));
    }
  }, {
    name: "Eat Magical Sausages",
    completed: function() {
      return getHowManySausagesToEat() < 1;
    },
    do: function() {
      var toEat = getHowManySausagesToEat();
      (0, import_kolmafia32.create)(toEat, $item(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral25(["magical sausage"]))));
      (0, import_kolmafia32.eat)(toEat, $item(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral25(["magical sausage"]))));
    }
  }, {
    name: "Cast Best Libram",
    completed: function() {
      return (0, import_kolmafia32.myMp)() - (0, import_kolmafia32.mpCost)($skill(_templateObject3114 || (_templateObject3114 = _taggedTemplateLiteral25(["Summon BRICKOs"])))) < config.MP_SAFE_LIMIT;
    },
    do: function() {
      return castBestLibram();
    }
  }, {
    name: "Remove Temporary Blindness",
    ready: function() {
      return get("_hotTubSoaks") < 5;
    },
    completed: function() {
      return !have($effect(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral25(["Temporary Blindness"]))));
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("hottub");
    }
  }, {
    name: "Heal if needed",
    completed: function() {
      return (0, import_kolmafia32.myHp)() / (0, import_kolmafia32.myMaxhp)() > 0.3;
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))));
    }
  }, {
    name: "Make Burning Paper Crane",
    ready: function() {
      return have($item(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral25(["burning newspaper"]))));
    },
    completed: function() {
      return have($item(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral25(["burning paper crane"]))));
    },
    do: function() {
      return (0, import_kolmafia32.create)($item(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral25(["burning paper crane"]))));
    }
  }, {
    name: "Make candy knife",
    ready: function() {
      return (0, import_kolmafia32.myBasestat)($stat(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral25(["muscle"])))) >= 40;
    },
    completed: function() {
      return get("_discoKnife");
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral25(["That's Not a Knife"]))));
    }
  }, {
    name: "Summon Alice's Army",
    completed: function() {
      return get("grimoire3Summons") > 0;
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral25(["Summon Alice's Army Cards"]))));
    }
  }, {
    name: "Synthesize Learning",
    completed: function() {
      return have($effect(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral25(["Synthesis: Learning"]))));
    },
    do: function() {
      (0, import_kolmafia32.cliExecute)("garden pick");
      var peppermints = tuple($item(_templateObject4113 || (_templateObject4113 = _taggedTemplateLiteral25(["peppermint patty"]))), $item(_templateObject4211 || (_templateObject4211 = _taggedTemplateLiteral25(["peppermint twist"]))));
      var _iterator = _createForOfIteratorHelper14(peppermints), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var p = _step.value;
          if (!have(p))
            (0, import_kolmafia32.create)(p);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      import_kolmafia32.sweetSynthesis.apply(void 0, _toConsumableArray9(peppermints));
    }
  }, {
    name: "Synthesize Smart",
    completed: function() {
      return have($effect(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral25(["Synthesis: Smart"]))));
    },
    do: function() {
      (0, import_kolmafia32.useSkill)($skill(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral25(["Chubby and Plump"]))));
      (0, import_kolmafia32.sweetSynthesis)($item(_templateObject457 || (_templateObject457 = _taggedTemplateLiteral25(["Chubby and Plump bar"]))), $item(_templateObject466 || (_templateObject466 = _taggedTemplateLiteral25(["bag of many confections"]))));
    }
  }, {
    name: "Eat a donut",
    completed: function() {
      return have($effect(_templateObject476 || (_templateObject476 = _taggedTemplateLiteral25(["Filled with Magic"]))));
    },
    do: function() {
      return (0, import_kolmafia32.eat)($item(_templateObject486 || (_templateObject486 = _taggedTemplateLiteral25(["occult jelly donut"]))));
    },
    effects: $effects(_templateObject496 || (_templateObject496 = _taggedTemplateLiteral25(["Inscrutable Gaze"])))
  }, {
    name: "Drink Speakeasy",
    completed: function() {
      return have($effect(_templateObject506 || (_templateObject506 = _taggedTemplateLiteral25(["In a Lather"]))));
    },
    prepare: function() {
      return Clan.join(config.main_clan);
    },
    do: function() {
      return acquireEffect($effect(_templateObject5111 || (_templateObject5111 = _taggedTemplateLiteral25(["In a Lather"]))));
    },
    effects: $effects(_templateObject5210 || (_templateObject5210 = _taggedTemplateLiteral25(["Ode to Booze"])))
  }, {
    name: "Use box of familiar jacks",
    completed: function() {
      return have($item(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral25(["overloaded Yule battery"]))));
    },
    do: function() {
      return (0, import_kolmafia32.use)($item(_templateObject544 || (_templateObject544 = _taggedTemplateLiteral25(["box of Familiar Jacks"]))));
    },
    outfit: {
      familiar: $familiar(_templateObject554 || (_templateObject554 = _taggedTemplateLiteral25(["Mini-Trainbot"])))
    }
  }, {
    name: "Open MayDay package",
    completed: function() {
      return have($effect(_templateObject564 || (_templateObject564 = _taggedTemplateLiteral25(["Ready to Survive"]))));
    },
    do: function() {
      return (0, import_kolmafia32.use)($item(_templateObject574 || (_templateObject574 = _taggedTemplateLiteral25(["MayDay\u2122 supply package"]))));
    }
  }, {
    name: "Sell space blanket",
    completed: function() {
      return !have($item(_templateObject584 || (_templateObject584 = _taggedTemplateLiteral25(["space blanket"]))));
    },
    do: function() {
      return (0, import_kolmafia32.autosell)(1, $item(_templateObject594 || (_templateObject594 = _taggedTemplateLiteral25(["space blanket"]))));
    }
  }, {
    name: "Configure KGB",
    completed: function() {
      return get("_kgbClicksUsed") > 0;
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("Briefcase e spell spooky -combat");
    }
  }, {
    name: "Triple-Size",
    completed: function() {
      return have($effect(_templateObject604 || (_templateObject604 = _taggedTemplateLiteral25(["Triple-Sized"]))));
    },
    do: function() {
      (0, import_kolmafia32.equip)($slot(_templateObject6111 || (_templateObject6111 = _taggedTemplateLiteral25(["acc2"]))), $item(_templateObject6210 || (_templateObject6210 = _taggedTemplateLiteral25(["Powerful Glove"]))));
      acquireEffect($effect(_templateObject634 || (_templateObject634 = _taggedTemplateLiteral25(["Triple-Sized"]))));
    }
  }, {
    name: "Advance Clock",
    completed: function() {
      return get("_gingerbreadClockAdvanced");
    },
    choices: {
      1215: 1
    },
    do: $location(_templateObject644 || (_templateObject644 = _taggedTemplateLiteral25(["Gingerbread Civic Center"]))),
    effects: $effects(_templateObject654 || (_templateObject654 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      familiar: $familiar(_templateObject664 || (_templateObject664 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().startingMacro(Macro.abort())
  }, {
    name: "Nanobrainy",
    completed: function() {
      return have($effect(_templateObject674 || (_templateObject674 = _taggedTemplateLiteral25(["Nanobrainy"]))));
    },
    do: $location(_templateObject684 || (_templateObject684 = _taggedTemplateLiteral25(["Gingerbread Upscale Retail District"]))),
    post: function() {
      return checkEffect($effect(_templateObject694 || (_templateObject694 = _taggedTemplateLiteral25(["Nanobrainy"]))));
    },
    outfit: {
      offhand: $item(_templateObject704 || (_templateObject704 = _taggedTemplateLiteral25(["latte lovers member's mug"]))),
      familiar: $familiar(_templateObject7111 || (_templateObject7111 = _taggedTemplateLiteral25(["Nanorhino"])))
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject729 || (_templateObject729 = _taggedTemplateLiteral25(["Entangling Noodles"])))).trySkill($skill(_templateObject734 || (_templateObject734 = _taggedTemplateLiteral25(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject744 || (_templateObject744 = _taggedTemplateLiteral25(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject754 || (_templateObject754 = _taggedTemplateLiteral25(["Reflex Hammer"])))).trySkill($skill(_templateObject764 || (_templateObject764 = _taggedTemplateLiteral25(["Bowl a Curveball"])))).trySkill($skill(_templateObject774 || (_templateObject774 = _taggedTemplateLiteral25(["Feel Hatred"])))).abort())
  }, {
    name: "Visit the Looking Glass",
    completed: function() {
      return get("_lookingGlass");
    },
    do: function() {
      return (0, import_kolmafia32.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
    }
  }, {
    name: "Buff Familiar Weight",
    completed: function() {
      return get("_saberMod") !== 0;
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("saber familiar");
    },
    effects: [
      $effect(_templateObject784 || (_templateObject784 = _taggedTemplateLiteral25(["A Girl Named Sue"]))),
      $effect(_templateObject794 || (_templateObject794 = _taggedTemplateLiteral25(["Billiards Belligerence"]))),
      $effect(_templateObject804 || (_templateObject804 = _taggedTemplateLiteral25(["Fidoxene"]))),
      $effect(_templateObject8110 || (_templateObject8110 = _taggedTemplateLiteral25(["Loyal Tea"]))),
      $effect(_templateObject829 || (_templateObject829 = _taggedTemplateLiteral25(["Over-Familiar With Dactyls"]))),
      $effect(_templateObject834 || (_templateObject834 = _taggedTemplateLiteral25(["Puzzle Champ"]))),
      $effect(_templateObject844 || (_templateObject844 = _taggedTemplateLiteral25(["Shrimpin' Ain't Easy"]))),
      $effect(_templateObject854 || (_templateObject854 = _taggedTemplateLiteral25(["You Can Really Taste the Dormouse"]))),
      $effect(_templateObject864 || (_templateObject864 = _taggedTemplateLiteral25(["Blood Bond"]))),
      $effect(_templateObject874 || (_templateObject874 = _taggedTemplateLiteral25(["Empathy"]))),
      $effect(_templateObject884 || (_templateObject884 = _taggedTemplateLiteral25(["Leash of Linguini"])))
    ]
  }, {
    name: "Wish Effects",
    completed: function() {
      return $effects(_templateObject894 || (_templateObject894 = _taggedTemplateLiteral25(["All Is Forgiven, Sparkly!, Witch Breaded"]))).every(function(e) {
        return have(e);
      });
    },
    do: function() {
      return $effects(_templateObject904 || (_templateObject904 = _taggedTemplateLiteral25(["All Is Forgiven, Sparkly!, Witch Breaded"]))).forEach(wishEffect);
    }
  }, innerElf(), {
    name: "Crimbo Carol",
    completed: function() {
      return [$effect(_templateObject9110 || (_templateObject9110 = _taggedTemplateLiteral25(["All I Want For Crimbo Is Stuff"]))), $effect(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral25(["Crimbo Wrapping"]))), $effect(_templateObject934 || (_templateObject934 = _taggedTemplateLiteral25(["Do You Crush What I Crush?"]))), $effect(_templateObject944 || (_templateObject944 = _taggedTemplateLiteral25(["Holiday Yoked"]))), $effect(_templateObject954 || (_templateObject954 = _taggedTemplateLiteral25(["Let It Snow/Boil/Stink/Frighten/Grease"])))].some(function(carol) {
        return have(carol);
      });
    },
    do: $location(_templateObject964 || (_templateObject964 = _taggedTemplateLiteral25(["The Dire Warren"]))),
    post: function() {
      return checkEffect($effect(_templateObject974 || (_templateObject974 = _taggedTemplateLiteral25(["Do You Crush What I Crush?"]))));
    },
    outfit: {
      back: $item(_templateObject984 || (_templateObject984 = _taggedTemplateLiteral25(["vampyric cloake"]))),
      acc3: $item(_templateObject994 || (_templateObject994 = _taggedTemplateLiteral25(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject1004 || (_templateObject1004 = _taggedTemplateLiteral25(["Ghost of Crimbo Carols"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill($skill(_templateObject10110 || (_templateObject10110 = _taggedTemplateLiteral25(["Giant Growth"])))).trySkill($skill(_templateObject1024 || (_templateObject1024 = _taggedTemplateLiteral25(["Become a Wolf"])))).trySkill($skill(_templateObject1034 || (_templateObject1034 = _taggedTemplateLiteral25(["Bowl Straight Up"])))).trySkill($skill(_templateObject1044 || (_templateObject1044 = _taggedTemplateLiteral25(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject1054 || (_templateObject1054 = _taggedTemplateLiteral25(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject1064 || (_templateObject1064 = _taggedTemplateLiteral25(["Reflex Hammer"])))).trySkill($skill(_templateObject1074 || (_templateObject1074 = _taggedTemplateLiteral25(["Feel Hatred"])))).abort())
  }, {
    name: "Christmas Card",
    completed: function() {
      return haveItemOrEffect($item(_templateObject1084 || (_templateObject1084 = _taggedTemplateLiteral25(["Gene Tonic: Elf"])))) || get("_deckCardsSeen").includes("Christmas Card");
    },
    do: function() {
      return (0, import_kolmafia32.cliExecute)("cheat christmas card");
    },
    post: function() {
      DNALab_exports.makeTonic();
      (0, import_kolmafia32.use)($item(_templateObject1093 || (_templateObject1093 = _taggedTemplateLiteral25(["Gene Tonic: Elf"]))));
    },
    effects: $effects(_templateObject1103 || (_templateObject1103 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      familiar: $familiar(_templateObject1118 || (_templateObject1118 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().startingMacro(Macro.item($item(_templateObject1123 || (_templateObject1123 = _taggedTemplateLiteral25(["DNA extraction syringe"]))))).macro(Macro.skill($skill(_templateObject1133 || (_templateObject1133 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).skill($skill(_templateObject1143 || (_templateObject1143 = _taggedTemplateLiteral25(["Micrometeorite"])))).item($item(_templateObject1153 || (_templateObject1153 = _taggedTemplateLiteral25(["Time-Spinner"])))).skill($skill(_templateObject1163 || (_templateObject1163 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia32.mpCost)($skill(_templateObject1173 || (_templateObject1173 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject1182 || (_templateObject1182 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat(), $monster(_templateObject1192 || (_templateObject1192 = _taggedTemplateLiteral25(["Black Crayon Crimbo Elf"])))).macro(Macro.runaway())
  }, {
    name: "Wanderer Sweep",
    completed: function() {
      return get("_speakeasyFreeFights") >= 3;
    },
    do: $location(_templateObject1202 || (_templateObject1202 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))),
    post: function() {
      return (0, import_kolmafia32.visitUrl)("place.php?whichplace=speakeasy");
    },
    outfit: {
      familiar: selectBestFamiliar()
    },
    combat: new CombatStrategy().macro(DefaultMacro),
    effects: [
      $effect(_templateObject1218 || (_templateObject1218 = _taggedTemplateLiteral25(["Broad-Spectrum Vaccine"]))),
      $effect(_templateObject1223 || (_templateObject1223 = _taggedTemplateLiteral25(["Favored by Lyle"]))),
      $effect(_templateObject1233 || (_templateObject1233 = _taggedTemplateLiteral25(["Grumpy and Ornery"]))),
      $effect(_templateObject1243 || (_templateObject1243 = _taggedTemplateLiteral25(["Hustlin'"]))),
      $effect(_templateObject1253 || (_templateObject1253 = _taggedTemplateLiteral25(["Mental A-cue-ity"]))),
      $effect(_templateObject1263 || (_templateObject1263 = _taggedTemplateLiteral25(["Pisces in the Skyces"]))),
      $effect(_templateObject1273 || (_templateObject1273 = _taggedTemplateLiteral25(["Sigils of Yeg"]))),
      $effect(_templateObject1282 || (_templateObject1282 = _taggedTemplateLiteral25(["Starry-Eyed"]))),
      $effect(_templateObject1292 || (_templateObject1292 = _taggedTemplateLiteral25(["Total Protonic Reversal"]))),
      $effect(_templateObject1302 || (_templateObject1302 = _taggedTemplateLiteral25(["Warlock, Warstock, and Warbarrel"]))),
      $effect(_templateObject1318 || (_templateObject1318 = _taggedTemplateLiteral25(["items.enh"]))),
      $effect(_templateObject1323 || (_templateObject1323 = _taggedTemplateLiteral25(["meat.enh"]))),
      $effect(_templateObject1333 || (_templateObject1333 = _taggedTemplateLiteral25(["Cold as Nice"]))),
      $effect(_templateObject1343 || (_templateObject1343 = _taggedTemplateLiteral25(["A Brush with Grossness"]))),
      $effect(_templateObject1353 || (_templateObject1353 = _taggedTemplateLiteral25(["Do I Know You From Somewhere?"]))),
      $effect(_templateObject1363 || (_templateObject1363 = _taggedTemplateLiteral25(["Does It Have a Skull In There??"]))),
      $effect(_templateObject1373 || (_templateObject1373 = _taggedTemplateLiteral25(["Hot-Headed"]))),
      $effect(_templateObject1382 || (_templateObject1382 = _taggedTemplateLiteral25(["Lack of Body-Building"]))),
      $effect(_templateObject1392 || (_templateObject1392 = _taggedTemplateLiteral25(["Oiled, Slick"]))),
      $effect(_templateObject1402 || (_templateObject1402 = _taggedTemplateLiteral25(["Pomp & Circumsands"]))),
      $effect(_templateObject1418 || (_templateObject1418 = _taggedTemplateLiteral25(["Resting Beach Face"]))),
      $effect(_templateObject1423 || (_templateObject1423 = _taggedTemplateLiteral25(["We're All Made of Starfish"]))),
      $effect(_templateObject1433 || (_templateObject1433 = _taggedTemplateLiteral25(["You Learned Something Maybe!"]))),
      $effect(_templateObject1443 || (_templateObject1443 = _taggedTemplateLiteral25(["Big"]))),
      $effect(_templateObject1453 || (_templateObject1453 = _taggedTemplateLiteral25(["Blessing of the Bird"]))),
      $effect(_templateObject1463 || (_templateObject1463 = _taggedTemplateLiteral25(["Blessing of your favorite Bird"]))),
      $effect(_templateObject1473 || (_templateObject1473 = _taggedTemplateLiteral25(["Blood Bubble"]))),
      $effect(_templateObject1482 || (_templateObject1482 = _taggedTemplateLiteral25(["Carol of the Bulls"]))),
      $effect(_templateObject1492 || (_templateObject1492 = _taggedTemplateLiteral25(["Carol of the Hells"]))),
      $effect(_templateObject1502 || (_templateObject1502 = _taggedTemplateLiteral25(["Carol of the Thrills"]))),
      $effect(_templateObject1516 || (_templateObject1516 = _taggedTemplateLiteral25(["Feeling Excited"]))),
      $effect(_templateObject1523 || (_templateObject1523 = _taggedTemplateLiteral25(["Feeling Peaceful"]))),
      $effect(_templateObject1533 || (_templateObject1533 = _taggedTemplateLiteral25(["Frenzied, Bloody"]))),
      $effect(_templateObject1543 || (_templateObject1543 = _taggedTemplateLiteral25(["Inscrutable Gaze"]))),
      $effect(_templateObject1552 || (_templateObject1552 = _taggedTemplateLiteral25(["Ruthlessly Efficient"]))),
      $effect(_templateObject1562 || (_templateObject1562 = _taggedTemplateLiteral25(["Singer's Faithful Ocelot"]))),
      $effect(_templateObject1572 || (_templateObject1572 = _taggedTemplateLiteral25(["Astral Shell"]))),
      $effect(_templateObject1582 || (_templateObject1582 = _taggedTemplateLiteral25(["Elemental Saucesphere"]))),
      $effect(_templateObject1592 || (_templateObject1592 = _taggedTemplateLiteral25(["Flimsy Shield of the Pastalord"]))),
      $effect(_templateObject1602 || (_templateObject1602 = _taggedTemplateLiteral25(["Ghostly Shell"]))),
      $effect(_templateObject1614 || (_templateObject1614 = _taggedTemplateLiteral25(["Sauce Monocle"]))),
      $effect(_templateObject1622 || (_templateObject1622 = _taggedTemplateLiteral25(["Springy Fusilli"]))),
      $effect(_templateObject1632 || (_templateObject1632 = _taggedTemplateLiteral25(["Ode to Booze"]))),
      $effect(_templateObject1642 || (_templateObject1642 = _taggedTemplateLiteral25(["Polka of Plenty"]))),
      $effect(_templateObject1652 || (_templateObject1652 = _taggedTemplateLiteral25(["AAA-Charged"]))),
      $effect(_templateObject1662 || (_templateObject1662 = _taggedTemplateLiteral25(["Lantern-Charged"]))),
      $effect(_templateObject1672 || (_templateObject1672 = _taggedTemplateLiteral25(["Song of Sauce"])))
    ]
  }, {
    name: "Ten-percent Bonus",
    completed: function() {
      return !have($item(_templateObject1682 || (_templateObject1682 = _taggedTemplateLiteral25(["a ten-percent bonus"]))));
    },
    do: function() {
      return (0, import_kolmafia32.use)($item(_templateObject1692 || (_templateObject1692 = _taggedTemplateLiteral25(["a ten-percent bonus"]))));
    },
    effects: $effects(_templateObject1702 || (_templateObject1702 = _taggedTemplateLiteral25(["Inscrutable Gaze, Synthesis: Learning"]))),
    outfit: {
      offhand: $item(_templateObject1714 || (_templateObject1714 = _taggedTemplateLiteral25(["familiar scrapbook"])))
    }
  }, {
    name: "Chateau Rest",
    completed: function() {
      return get("timesRested") >= (0, import_kolmafia32.totalFreeRests)();
    },
    do: function() {
      return (0, import_kolmafia32.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
    },
    effects: $effects(_templateObject1722 || (_templateObject1722 = _taggedTemplateLiteral25(["Inscrutable Gaze, Synthesis: Learning"]))),
    outfit: {
      offhand: $item(_templateObject1732 || (_templateObject1732 = _taggedTemplateLiteral25(["familiar scrapbook"])))
    }
  }, {
    name: "Tunnel of L.O.V.E.",
    completed: function() {
      return get("_loveTunnelUsed");
    },
    prepare: spendAllMpOnLibrams,
    choices: {
      1222: 1,
      1223: 1,
      1224: 2,
      1225: 1,
      1226: 2,
      1227: 1,
      1228: 3
    },
    do: $location(_templateObject1742 || (_templateObject1742 = _taggedTemplateLiteral25(["The Tunnel of L.O.V.E."]))),
    post: function() {
      checkEffect($effect(_templateObject1752 || (_templateObject1752 = _taggedTemplateLiteral25(["Open Heart Surgery"]))));
      $items(_templateObject1762 || (_templateObject1762 = _taggedTemplateLiteral25(["LOV Elixir #3, LOV Elixir #6, LOV Epaulettes"]))).forEach(function(l) {
        return checkAvailable(l);
      });
      (0, import_kolmafia32.use)($item(_templateObject1772 || (_templateObject1772 = _taggedTemplateLiteral25(["LOV Elixir #3"]))));
      (0, import_kolmafia32.use)($item(_templateObject1782 || (_templateObject1782 = _taggedTemplateLiteral25(["LOV Elixir #6"]))));
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
        familiar: selectBestFamiliar(AdvReq.NoAttack)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Witchess Rook",
    completed: function() {
      return haveItemOrEffect($item(_templateObject1792 || (_templateObject1792 = _taggedTemplateLiteral25(["Greek fire"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject1802 || (_templateObject1802 = _taggedTemplateLiteral25(["Witchess Rook"]))));
    },
    post: function() {
      refreshGhost();
      (0, import_kolmafia32.use)($item(_templateObject1814 || (_templateObject1814 = _taggedTemplateLiteral25(["Greek fire"]))));
    },
    effects: [
      $effect(_templateObject1822 || (_templateObject1822 = _taggedTemplateLiteral25(["Drescher's Annoying Noise"]))),
      $effect(_templateObject1832 || (_templateObject1832 = _taggedTemplateLiteral25(["Pride of the Puffin"]))),
      $effect(_templateObject1842 || (_templateObject1842 = _taggedTemplateLiteral25(["Ur-Kel's Aria of Annoyance"])))
    ],
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(600)), {}, {
        back: $item(_templateObject1852 || (_templateObject1852 = _taggedTemplateLiteral25(["protonic accelerator pack"]))),
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "Protonic Ghost",
    completed: function() {
      return get("ghostLocation") === null;
    },
    do: function() {
      var ghostZone = get("ghostLocation");
      if (!ghostZone)
        throw "Failed to get protonic ghost notice";
      (0, import_kolmafia32.adv1)(ghostZone, -1);
    },
    post: function() {
      return (0, import_kolmafia32.visitUrl)("questlog.php?which=1");
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit()), {}, {
        back: $item(_templateObject1862 || (_templateObject1862 = _taggedTemplateLiteral25(["protonic accelerator pack"]))),
        familiar: selectBestFamiliar(AdvReq.NoAttack)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Get Sprinkles",
    completed: function() {
      return haveItemOrEffect($item(_templateObject1872 || (_templateObject1872 = _taggedTemplateLiteral25(["gingerbread spice latte"])))) || have($item(_templateObject1882 || (_templateObject1882 = _taggedTemplateLiteral25(["sprinkles"]))), 50);
    },
    prepare: function() {
      (0, import_kolmafia32.print)("Getting sprinkles, have ".concat((0, import_kolmafia32.familiarWeight)((0, import_kolmafia32.myFamiliar)()) + (0, import_kolmafia32.weightAdjustment)(), " lbs"));
      if (get("_gingerbreadCityTurns") >= 5)
        throw "Failed to get gingerbread spice latte?";
    },
    do: $location(_templateObject1892 || (_templateObject1892 = _taggedTemplateLiteral25(["Gingerbread Upscale Retail District"]))),
    post: function() {
      return checkAvailable($item(_templateObject1902 || (_templateObject1902 = _taggedTemplateLiteral25(["sprinkles"]))), 50);
    },
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e3)), {}, {
      hat: $item(_templateObject1914 || (_templateObject1914 = _taggedTemplateLiteral25(["Daylight Shavings Helmet"]))),
      weapon: $item(_templateObject1922 || (_templateObject1922 = _taggedTemplateLiteral25(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject1932 || (_templateObject1932 = _taggedTemplateLiteral25(["burning paper crane, rope, familiar scrapbook"]))),
      acc1: $item(_templateObject1942 || (_templateObject1942 = _taggedTemplateLiteral25(["hewn moon-rune spoon"]))),
      acc2: $item(_templateObject1952 || (_templateObject1952 = _taggedTemplateLiteral25(["Brutal brogues"]))),
      acc3: $item(_templateObject1962 || (_templateObject1962 = _taggedTemplateLiteral25(["Beach Comb"]))),
      familiar: $familiar(_templateObject1972 || (_templateObject1972 = _taggedTemplateLiteral25(["Chocolate Lab"])))
    }),
    combat: DefaultCombat
  }, {
    name: "Get Gingerbread Spice Latte",
    ready: function() {
      return have($item(_templateObject1982 || (_templateObject1982 = _taggedTemplateLiteral25(["sprinkles"]))), 50);
    },
    completed: function() {
      return haveItemOrEffect($item(_templateObject1992 || (_templateObject1992 = _taggedTemplateLiteral25(["gingerbread spice latte"])))) || get("_gingerbreadCityTurns") >= 5;
    },
    choices: {
      1208: 3
    },
    do: $location(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral25(["Gingerbread Upscale Retail District"]))),
    effects: $effects(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      familiar: $familiar(_templateObject2022 || (_templateObject2022 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))
    },
    combat: RunawayCombat
  }, {
    name: "Snojo",
    completed: function() {
      return get("_snojoFreeFights") >= 10;
    },
    prepare: function() {
      if (get("snojoSetting") !== $stat(_templateObject2032 || (_templateObject2032 = _taggedTemplateLiteral25(["Muscle"])))) {
        (0, import_kolmafia32.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0, import_kolmafia32.runChoice)(1);
      }
    },
    do: $location(_templateObject2042 || (_templateObject2042 = _taggedTemplateLiteral25(["The X-32-F Combat Training Snowman"]))),
    post: function() {
      if (!haveItemOrEffect($item(_templateObject2052 || (_templateObject2052 = _taggedTemplateLiteral25(["Gene Tonic: Construct"])))))
        DNALab_exports.makeTonic();
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit()), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: new CombatStrategy().macro(Macro.item([$item(_templateObject2062 || (_templateObject2062 = _taggedTemplateLiteral25(["DNA extraction syringe"]))), $item(_templateObject2072 || (_templateObject2072 = _taggedTemplateLiteral25(["Time-Spinner"])))]).skill($skill(_templateObject2082 || (_templateObject2082 = _taggedTemplateLiteral25(["Micrometeorite"])))).skill($skill(_templateObject2092 || (_templateObject2092 = _taggedTemplateLiteral25(["Sing Along"])))).attack().repeat())
  }, {
    name: "BRICKOS",
    ready: function() {
      return have($item(_templateObject2102 || (_templateObject2102 = _taggedTemplateLiteral25(["BRICKO eye brick"])))) && have($item(_templateObject2119 || (_templateObject2119 = _taggedTemplateLiteral25(["BRICKO brick"]))), BRICKO_COST);
    },
    completed: function() {
      return get("_brickoFights") >= 3;
    },
    acquire: [{
      item: BRICKO_TARGET_ITEM
    }],
    do: function() {
      return (0, import_kolmafia32.use)(BRICKO_TARGET_ITEM);
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit()), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "Eldritch Tentacle",
    completed: function() {
      return get("_eldritchHorrorEvoked");
    },
    do: function() {
      return (0, import_kolmafia32.useSkill)($skill(_templateObject2122 || (_templateObject2122 = _taggedTemplateLiteral25(["Evoke Eldritch Horror"]))));
    },
    post: function() {
      if ((0, import_kolmafia32.myHp)() / (0, import_kolmafia32.myMaxhp)() < 0.5)
        (0, import_kolmafia32.useSkill)($skill(_templateObject2132 || (_templateObject2132 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))));
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(400)), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "God Lobster",
    completed: function() {
      return get("_godLobsterFights") >= 3;
    },
    choices: {
      1310: function() {
        return have($item(_templateObject2142 || (_templateObject2142 = _taggedTemplateLiteral25(["God Lobster's Ring"])))) ? 2 : 1;
      }
    },
    do: function() {
      return (0, import_kolmafia32.visitUrl)("main.php?fightgodlobster=1");
    },
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1500)), {}, {
      famequip: $items(_templateObject2152 || (_templateObject2152 = _taggedTemplateLiteral25(["God Lobster's Ring, God Lobster's Scepter, none"]))),
      familiar: $familiar(_templateObject2162 || (_templateObject2162 = _taggedTemplateLiteral25(["God Lobster"])))
    }),
    combat: DefaultCombat
  }, {
    name: "Witchess Witch",
    completed: function() {
      return have($item(_templateObject2172 || (_templateObject2172 = _taggedTemplateLiteral25(["battle broom"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2182 || (_templateObject2182 = _taggedTemplateLiteral25(["Witchess Witch"]))));
    },
    post: function() {
      return (0, import_kolmafia32.equip)($item(_templateObject2192 || (_templateObject2192 = _taggedTemplateLiteral25(["battle broom"]))));
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(7e3)), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "Witchess King",
    completed: function() {
      return have($item(_templateObject2202 || (_templateObject2202 = _taggedTemplateLiteral25(["dented scepter"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2217 || (_templateObject2217 = _taggedTemplateLiteral25(["Witchess King"]))));
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(6e3)), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "Remaining Witchess Fights",
    completed: function() {
      return Witchess_exports.fightsDone() >= 5;
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2222 || (_templateObject2222 = _taggedTemplateLiteral25(["Witchess Queen"]))));
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(8e3)), {}, {
        familiar: selectBestFamiliar()
      });
    },
    combat: DefaultCombat
  }, {
    name: "Voter Wandering Monster",
    ready: function() {
      return voterMonsterNow();
    },
    completed: function() {
      return get("_voteFreeFights") >= 1;
    },
    do: $location(_templateObject2232 || (_templateObject2232 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
        acc3: $item(_templateObject2242 || (_templateObject2242 = _taggedTemplateLiteral25(['"I Voted!" sticker']))),
        familiar: selectBestFamiliar(AdvReq.Toxic)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Deep Machine Tunnels Fights",
    completed: function() {
      return get("_machineTunnelsAdv") >= 3;
    },
    prepare: topOffHp,
    choices: {
      1119: -1
    },
    do: $location(_templateObject2252 || (_templateObject2252 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))),
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
      familiar: $familiar(_templateObject2262 || (_templateObject2262 = _taggedTemplateLiteral25(["Machine Elf"])))
    }),
    combat: DefaultCombat
  }, {
    name: "Ensure Abstraction: Action",
    completed: function() {
      return haveItemOrEffect($item(_templateObject2272 || (_templateObject2272 = _taggedTemplateLiteral25(["abstraction: joy"])))) || have($item(_templateObject2282 || (_templateObject2282 = _taggedTemplateLiteral25(["abstraction: action"])))) || get("_machineTunnelsAdv") >= 4;
    },
    prepare: topOffHp,
    choices: {
      1119: -1
    },
    do: $location(_templateObject2292 || (_templateObject2292 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))),
    post: function() {
      return checkAvailable($item(_templateObject2302 || (_templateObject2302 = _taggedTemplateLiteral25(["abstraction: action"]))));
    },
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
      familiar: $familiar(_templateObject2313 || (_templateObject2313 = _taggedTemplateLiteral25(["Machine Elf"])))
    }),
    combat: DefaultStrategy().macro(Macro.if_("!monsterid ".concat($monster(_templateObject2322 || (_templateObject2322 = _taggedTemplateLiteral25(["Performer of Actions"]))).id), Macro.skill($skill(_templateObject2332 || (_templateObject2332 = _taggedTemplateLiteral25(["Macrometeorite"]))))).skill($skill(_templateObject2342 || (_templateObject2342 = _taggedTemplateLiteral25(["Feel Envy"]))))).macro(DefaultMacro)
  }, {
    name: "Ensure Abstraction: Joy",
    ready: function() {
      return have($item(_templateObject2352 || (_templateObject2352 = _taggedTemplateLiteral25(["abstraction: action"]))));
    },
    completed: function() {
      return haveItemOrEffect($item(_templateObject2362 || (_templateObject2362 = _taggedTemplateLiteral25(["abstraction: joy"])))) || get("_machineTunnelsAdv") >= 5;
    },
    prepare: topOffHp,
    choices: {
      1119: -1
    },
    do: $location(_templateObject2372 || (_templateObject2372 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))),
    post: function() {
      return checkAvailable($item(_templateObject2382 || (_templateObject2382 = _taggedTemplateLiteral25(["abstraction: joy"]))));
    },
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
      familiar: $familiar(_templateObject2392 || (_templateObject2392 = _taggedTemplateLiteral25(["Machine Elf"])))
    }),
    combat: DefaultStrategy().macro(Macro.if_("!monsterid ".concat($monster(_templateObject2402 || (_templateObject2402 = _taggedTemplateLiteral25(["Thinker of Thoughts"]))).id), Macro.skill($skill(_templateObject2413 || (_templateObject2413 = _taggedTemplateLiteral25(["Macrometeorite"]))))).item($item(_templateObject2422 || (_templateObject2422 = _taggedTemplateLiteral25(["abstraction: action"]))))).macro(DefaultMacro)
  }, {
    name: "Remaining Deep Machine Tunnels Fights",
    completed: function() {
      return get("_machineTunnelsAdv") >= 5;
    },
    prepare: topOffHp,
    choices: {
      1119: -1
    },
    do: $location(_templateObject2432 || (_templateObject2432 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))),
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
      familiar: $familiar(_templateObject2442 || (_templateObject2442 = _taggedTemplateLiteral25(["Machine Elf"])))
    }),
    combat: DefaultCombat
  }, {
    name: "Chest X-ray Fights",
    completed: function() {
      return get("_chestXRayUsed") >= 3;
    },
    do: $location(_templateObject2452 || (_templateObject2452 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(11111)), {}, {
        acc3: $item(_templateObject2462 || (_templateObject2462 = _taggedTemplateLiteral25(["Lil' Doctor\u2122 bag"]))),
        familiar: selectBestFamiliar(AdvReq.Toxic)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Shattering Punch Fights",
    completed: function() {
      return get("_shatteringPunchUsed") >= 3;
    },
    do: $location(_templateObject2472 || (_templateObject2472 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(11111)), {}, {
        familiar: selectBestFamiliar(AdvReq.Toxic)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Mob Hit",
    completed: function() {
      return get("_gingerbreadMobHitUsed");
    },
    do: $location(_templateObject2482 || (_templateObject2482 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(11111)), {}, {
        familiar: selectBestFamiliar(AdvReq.Toxic)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Shocking Lick",
    completed: function() {
      return get("shockingLickCharges") < 1;
    },
    acquire: [{
      item: $item(_templateObject2492 || (_templateObject2492 = _taggedTemplateLiteral25(["makeshift garbage shirt"])))
    }],
    do: $location(_templateObject2502 || (_templateObject2502 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (get("shockingLickCharges") > 0 && get("lastEncounter") === "toxic beastie") {
        throw "Failed to decrement shockingLickCharges?";
      }
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(11111)), {}, {
        shirt: $item(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))),
        familiar: selectBestFamiliar(AdvReq.Toxic)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Lectures on Relativity",
    completed: function() {
      return get("_pocketProfessorLectures") > 0;
    },
    acquire: [{
      item: $item(_templateObject2522 || (_templateObject2522 = _taggedTemplateLiteral25(["makeshift garbage shirt"])))
    }],
    prepare: topOffHp,
    do: $location(_templateObject2532 || (_templateObject2532 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    outfit: _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
      shirt: $item(_templateObject2542 || (_templateObject2542 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))),
      offhand: $item(_templateObject2552 || (_templateObject2552 = _taggedTemplateLiteral25(["Kramco Sausage-o-Matic\u2122"]))),
      familiar: $familiar(_templateObject2562 || (_templateObject2562 = _taggedTemplateLiteral25(["Pocket Professor"])))
    }),
    combat: DefaultCombat
  }, deepDarkVisions(), {
    name: "Backup Camera Fights",
    ready: function() {
      return get("lastCopyableMonster") === $monster(_templateObject2572 || (_templateObject2572 = _taggedTemplateLiteral25(["sausage goblin"])));
    },
    completed: function() {
      return get("_backUpUses") >= 7;
    },
    acquire: [{
      item: $item(_templateObject2582 || (_templateObject2582 = _taggedTemplateLiteral25(["makeshift garbage shirt"])))
    }],
    do: $location(_templateObject2592 || (_templateObject2592 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (get("lastCopyableMonster") !== $monster(_templateObject2602 || (_templateObject2602 = _taggedTemplateLiteral25(["sausage goblin"])))) {
        throw "Encountered a ".concat(get("lastCopyableMonster"), "?");
      }
    },
    outfit: function() {
      return _objectSpread6(_objectSpread6({}, levelingOutfit(1e4)), {}, {
        shirt: $item(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))),
        acc3: $item(_templateObject2622 || (_templateObject2622 = _taggedTemplateLiteral25(["backup camera"]))),
        familiar: selectBestFamiliar(AdvReq.Normal)
      });
    },
    combat: DefaultCombat
  }, {
    name: "Vintner Backup Fights",
    ready: function() {
      return get("lastCopyableMonster") === $monster(_templateObject2632 || (_templateObject2632 = _taggedTemplateLiteral25(["sausage goblin"])));
    },
    completed: function() {
      return get("_backUpUses") >= 11;
    },
    do: $location(_templateObject2642 || (_templateObject2642 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (get("lastCopyableMonster") !== $monster(_templateObject2652 || (_templateObject2652 = _taggedTemplateLiteral25(["sausage goblin"])))) {
        throw "Encountered a ".concat(get("lastCopyableMonster"), "?");
      }
    },
    effects: $effects(_templateObject2662 || (_templateObject2662 = _taggedTemplateLiteral25(["Wizard Squint"]))),
    outfit: vintnerOutfit,
    combat: StenchCombat
  }, {
    name: "Neverending Party",
    completed: function() {
      return get("_neverendingPartyFreeTurns") >= 10;
    },
    choices: {
      1322: 2,
      1324: 5
    },
    do: $location(_templateObject2672 || (_templateObject2672 = _taggedTemplateLiteral25(["The Neverending Party"]))),
    effects: $effects(_templateObject2682 || (_templateObject2682 = _taggedTemplateLiteral25(["Wizard Squint"]))),
    outfit: vintnerOutfit,
    combat: StenchCombat
  }, {
    name: "Drink Lattes",
    completed: function() {
      return get("_latteRefillsUsed") >= 3;
    },
    prepare: function() {
      if (get("_latteDrinkUsed"))
        (0, import_kolmafia32.cliExecute)("latte refill pumpkin cinnamon vanilla");
    },
    do: $location(_templateObject2692 || (_templateObject2692 = _taggedTemplateLiteral25(["The Dire Warren"]))),
    effects: $effects(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      back: $item(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral25(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject2722 || (_templateObject2722 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
      offhand: $item(_templateObject2732 || (_templateObject2732 = _taggedTemplateLiteral25(["latte lovers member's mug"]))),
      pants: $item(_templateObject2742 || (_templateObject2742 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
      acc2: $items(_templateObject2752 || (_templateObject2752 = _taggedTemplateLiteral25(["battle broom"]))),
      acc3: $item(_templateObject2762 || (_templateObject2762 = _taggedTemplateLiteral25(['"I Voted!" sticker']))),
      familiar: $familiar(_templateObject2772 || (_templateObject2772 = _taggedTemplateLiteral25(["Frumious Bandersnatch"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["heck", "hold"]
      }
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.trySkill($skill(_templateObject2782 || (_templateObject2782 = _taggedTemplateLiteral25(["Gulp Latte"])))).externalIf(get("_latteRefillsUsed") < 2, Macro.trySkill($skill(_templateObject2792 || (_templateObject2792 = _taggedTemplateLiteral25(["Throw Latte on Opponent"]))))).runaway();
    })
  }]
};

// src/quests/spellDamage.ts
var import_kolmafia33 = require("kolmafia");
var _templateObject280;
var _templateObject281;
var _templateObject350;
var _templateObject440;
var _templateObject530;
var _templateObject630;
var _templateObject730;
var _templateObject830;
var _templateObject926;
var _templateObject1020;
var _templateObject1119;
var _templateObject1219;
var _templateObject1319;
var _templateObject1419;
var _templateObject1517;
var _templateObject1615;
var _templateObject1715;
var _templateObject1815;
var _templateObject1915;
var _templateObject2014;
var _templateObject2120;
var _templateObject2218;
var _templateObject2314;
var _templateObject2414;
var _templateObject2513;
var _templateObject2613;
var _templateObject2711;
var _templateObject2810;
var _templateObject2910;
var _templateObject3010;
var _templateObject3115;
var _templateObject3213;
var _templateObject3312;
var _templateObject3410;
var _templateObject359;
var _templateObject368;
var _templateObject378;
var _templateObject388;
var _templateObject398;
var _templateObject408;
var _templateObject4114;
var _templateObject4212;
var _templateObject4310;
var _templateObject448;
var _templateObject458;
var _templateObject467;
var _templateObject477;
var _templateObject487;
var _templateObject497;
var _templateObject507;
var _templateObject5112;
var _templateObject5211;
var _templateObject535;
function _taggedTemplateLiteral26(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var SpellDamageQuest = {
  name: "Make Sausage",
  completed: function() {
    return CommunityService.SpellDamage.isDone();
  },
  tasks: [{
    name: "Install Dynamic Range",
    completed: function() {
      return get("hasRange");
    },
    do: function() {
      var range = $item(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral26(["Dramatic\u2122 range"])));
      (0, import_kolmafia33.retrieveItem)(range);
      (0, import_kolmafia33.use)(range);
    }
  }, {
    name: "Cook cordial of concentration",
    completed: function() {
      return have($item(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral26(["cordial of concentration"]))));
    },
    do: function() {
      (0, import_kolmafia33.useSkill)($skill(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral26(["Advanced Saucecrafting"]))));
      (0, import_kolmafia33.create)($item(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral26(["cordial of concentration"]))));
    }
  }, innerElf(), deepDarkVisions(), {
    name: "Cowrruption",
    completed: function() {
      return haveItemOrEffect($item(_templateObject530 || (_templateObject530 = _taggedTemplateLiteral26(["corrupted marrow"]))));
    },
    prepare: function() {
      var fax = $item(_templateObject630 || (_templateObject630 = _taggedTemplateLiteral26(["photocopied monster"])));
      var faxMon = $monster(_templateObject730 || (_templateObject730 = _taggedTemplateLiteral26(["ungulith"])));
      if (!have(fax))
        Clan.with(config.side_clan, function() {
          return (0, import_kolmafia33.cliExecute)("fax receive");
        });
      if (!(0, import_kolmafia33.visitUrl)("desc_item.php?whichitem=".concat(fax.descid)).includes("".concat(faxMon))) {
        throw "Failed to retrieve fax of ".concat(faxMon);
      }
    },
    do: function() {
      return (0, import_kolmafia33.use)($item(_templateObject830 || (_templateObject830 = _taggedTemplateLiteral26(["photocopied monster"]))));
    },
    post: function() {
      return checkAvailable($item(_templateObject926 || (_templateObject926 = _taggedTemplateLiteral26(["corrupted marrow"]))));
    },
    outfit: {
      weapon: $item(_templateObject1020 || (_templateObject1020 = _taggedTemplateLiteral26(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject1119 || (_templateObject1119 = _taggedTemplateLiteral26(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject1219 || (_templateObject1219 = _taggedTemplateLiteral26(["Meteor Shower"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject1319 || (_templateObject1319 = _taggedTemplateLiteral26(["Use the Force"])))), $monster(_templateObject1419 || (_templateObject1419 = _taggedTemplateLiteral26(["ungulith"])))).macro(Macro.abort())
  }, {
    name: "Spell Damage Test",
    completed: function() {
      return CommunityService.SpellDamage.isDone();
    },
    do: function() {
      return runTest(CommunityService.SpellDamage);
    },
    post: function() {
      return (0, import_kolmafia33.equip)($slot(_templateObject1517 || (_templateObject1517 = _taggedTemplateLiteral26(["familiar"]))), $item(_templateObject1615 || (_templateObject1615 = _taggedTemplateLiteral26(["none"]))));
    },
    effects: [$effect(_templateObject1715 || (_templateObject1715 = _taggedTemplateLiteral26(["AAA-Charged"]))), $effect(_templateObject1815 || (_templateObject1815 = _taggedTemplateLiteral26(["Arched Eyebrow of the Archmage"]))), $effect(_templateObject1915 || (_templateObject1915 = _taggedTemplateLiteral26(["Carol of the Hells"]))), $effect(_templateObject2014 || (_templateObject2014 = _taggedTemplateLiteral26(["Concentration"]))), $effect(_templateObject2120 || (_templateObject2120 = _taggedTemplateLiteral26(["Cowrruption"]))), $effect(_templateObject2218 || (_templateObject2218 = _taggedTemplateLiteral26(["Do You Crush What I Crush?"]))), $effect(_templateObject2314 || (_templateObject2314 = _taggedTemplateLiteral26(["Filled with Magic"]))), $effect(_templateObject2414 || (_templateObject2414 = _taggedTemplateLiteral26(["Grumpy and Ornery"]))), $effect(_templateObject2513 || (_templateObject2513 = _taggedTemplateLiteral26(["Human-Elf Hybrid"]))), $effect(_templateObject2613 || (_templateObject2613 = _taggedTemplateLiteral26(["In a Lather"]))), $effect(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral26(["Inner Elf"]))), $effect(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral26(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral26(["Lantern-Charged"]))), $effect(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral26(["Mental A-cue-ity"]))), $effect(_templateObject3115 || (_templateObject3115 = _taggedTemplateLiteral26(["Meteor Showered"]))), $effect(_templateObject3213 || (_templateObject3213 = _taggedTemplateLiteral26(["Nanobrainy"]))), $effect(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral26(["Pisces in the Skyces"]))), $effect(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral26(["Pointy Wizard Beard"]))), $effect(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral26(["Ready to Survive"]))), $effect(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral26(["Sigils of Yeg"]))), $effect(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral26(["Song of Sauce"]))), $effect(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral26(["Sparkly!"]))), $effect(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral26(["Spirit of Peppermint"]))), $effect(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral26(["The Magic of LOV"]))), $effect(_templateObject4114 || (_templateObject4114 = _taggedTemplateLiteral26(["Toxic Vengeance"]))), $effect(_templateObject4212 || (_templateObject4212 = _taggedTemplateLiteral26(["Visions of the Deep Dark Deeps"]))), $effect(_templateObject4310 || (_templateObject4310 = _taggedTemplateLiteral26(["Warlock, Warstock, and Warbarrel"]))), $effect(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral26(["We're All Made of Starfish"]))), $effect(_templateObject458 || (_templateObject458 = _taggedTemplateLiteral26(["Witch Breaded"])))],
    outfit: {
      weapon: $item(_templateObject467 || (_templateObject467 = _taggedTemplateLiteral26(["wrench"]))),
      offhand: $item(_templateObject477 || (_templateObject477 = _taggedTemplateLiteral26(["weeping willow wand"]))),
      pants: $item(_templateObject487 || (_templateObject487 = _taggedTemplateLiteral26(["pantogram pants"]))),
      acc1: $item(_templateObject497 || (_templateObject497 = _taggedTemplateLiteral26(["Powerful Glove"]))),
      acc2: $item(_templateObject507 || (_templateObject507 = _taggedTemplateLiteral26(["battle broom"]))),
      acc3: $item(_templateObject5112 || (_templateObject5112 = _taggedTemplateLiteral26(["Kremlin's Greatest Briefcase"]))),
      famequip: $items(_templateObject5211 || (_templateObject5211 = _taggedTemplateLiteral26(["Abracandalabra, unbreakable umbrella"]))),
      familiar: $familiar(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral26(["Left-Hand Man"]))),
      modes: {
        umbrella: "constantly twirling"
      }
    }
  }]
};

// src/quests/stats.ts
var _templateObject290;
var _templateObject291;
var _templateObject351;
var _templateObject441;
var _templateObject531;
var _templateObject631;
var _templateObject731;
var _templateObject831;
var _templateObject927;
var _templateObject1021;
var _templateObject1120;
var _templateObject1220;
var _templateObject1320;
var _templateObject1420;
var _templateObject1518;
var _templateObject1616;
var _templateObject1716;
var _templateObject1816;
var _templateObject1916;
var _templateObject2015;
var _templateObject2121;
var _templateObject2219;
var _templateObject2315;
var _templateObject2415;
var _templateObject2514;
var _templateObject2614;
var _templateObject2712;
var _templateObject2811;
var _templateObject2911;
var _templateObject3011;
var _templateObject3116;
var _templateObject3214;
function _taggedTemplateLiteral27(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var HPQuest = {
  name: "Donate Blood",
  tasks: [{
    name: "HP Test",
    completed: function() {
      return CommunityService.HP.isDone();
    },
    do: function() {
      return runTest(CommunityService.HP);
    },
    acquire: [{
      item: $item(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: $effects(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral27(["Song of Starch"]))),
    outfit: {
      hat: $items(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral27(["extra-wide head candle, wad of used tape"]))),
      back: $item(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral27(["vampyric cloake"]))),
      shirt: $item(_templateObject531 || (_templateObject531 = _taggedTemplateLiteral27(["Jurassic Parka"]))),
      offhand: $item(_templateObject631 || (_templateObject631 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
      pants: $item(_templateObject731 || (_templateObject731 = _taggedTemplateLiteral27(["Cargo Cultist Shorts"]))),
      modes: {
        parka: "kachungasaur"
      }
    }
  }]
};
var MoxieQuest = {
  name: "Feed Conspirators",
  tasks: [{
    name: "Moxie Test",
    completed: function() {
      return CommunityService.Moxie.isDone();
    },
    do: function() {
      return runTest(CommunityService.Moxie);
    },
    effects: $effects(_templateObject831 || (_templateObject831 = _taggedTemplateLiteral27(["Disco Fever, Quiet Desperation, Sparkly!"]))),
    outfit: {
      hat: $item(_templateObject927 || (_templateObject927 = _taggedTemplateLiteral27(["very pointy crown"]))),
      back: $item(_templateObject1021 || (_templateObject1021 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject1120 || (_templateObject1120 = _taggedTemplateLiteral27(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject1220 || (_templateObject1220 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
      acc1: $item(_templateObject1320 || (_templateObject1320 = _taggedTemplateLiteral27(["your cowboy boots"]))),
      acc2: $item(_templateObject1420 || (_templateObject1420 = _taggedTemplateLiteral27(["Beach Comb"]))),
      acc3: $item(_templateObject1518 || (_templateObject1518 = _taggedTemplateLiteral27(['"I Voted!" sticker']))),
      modes: {
        retrocape: ["robot", void 0]
      }
    }
  }]
};
var MuscleQuest = {
  name: "Feed The Children (But Not Too Much)",
  tasks: [{
    name: "Muscle Test",
    completed: function() {
      return CommunityService.Muscle.isDone();
    },
    do: function() {
      return runTest(CommunityService.Muscle);
    },
    acquire: [{
      item: $item(_templateObject1616 || (_templateObject1616 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: [$effect(_templateObject1716 || (_templateObject1716 = _taggedTemplateLiteral27(["Giant Growth"]))), $effect(_templateObject1816 || (_templateObject1816 = _taggedTemplateLiteral27(["Quiet Determination"]))), $effect(_templateObject1916 || (_templateObject1916 = _taggedTemplateLiteral27(["Rage of the Reindeer"])))],
    outfit: {
      hat: $item(_templateObject2015 || (_templateObject2015 = _taggedTemplateLiteral27(["wad of used tape"]))),
      back: $item(_templateObject2121 || (_templateObject2121 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject2219 || (_templateObject2219 = _taggedTemplateLiteral27(["dented scepter"]))),
      offhand: $item(_templateObject2315 || (_templateObject2315 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
      acc1: $item(_templateObject2415 || (_templateObject2415 = _taggedTemplateLiteral27(["Brutal brogues"]))),
      acc3: $item(_templateObject2514 || (_templateObject2514 = _taggedTemplateLiteral27(['"I Voted!" sticker']))),
      modes: {
        retrocape: ["vampire", void 0]
      }
    }
  }]
};
var MysticalityQuest = {
  name: "Build Playground Mazes",
  tasks: [{
    name: "Mysticality Test",
    completed: function() {
      return CommunityService.Mysticality.isDone();
    },
    do: function() {
      return runTest(CommunityService.Mysticality);
    },
    acquire: [{
      item: $item(_templateObject2614 || (_templateObject2614 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: $effects(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral27(["Nanobrainy, Quiet Judgement, Witch Breaded"]))),
    outfit: {
      hat: $item(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral27(["wad of used tape"]))),
      back: $item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral27(["Fourth of May Cosplay Saber"]))),
      acc1: $item(_templateObject3116 || (_templateObject3116 = _taggedTemplateLiteral27(["battle broom"]))),
      acc3: $item(_templateObject3214 || (_templateObject3214 = _taggedTemplateLiteral27(['"I Voted!" sticker']))),
      modes: {
        retrocape: ["heck", void 0]
      }
    }
  }]
};

// src/quests/weaponDamage.ts
var import_kolmafia34 = require("kolmafia");
var _templateObject300;
var _templateObject2100;
var _templateObject360;
var _templateObject449;
var _templateObject536;
var _templateObject635;
var _templateObject735;
var _templateObject835;
var _templateObject928;
var _templateObject1025;
var _templateObject1121;
var _templateObject1221;
var _templateObject1321;
var _templateObject1421;
var _templateObject1519;
var _templateObject1617;
var _templateObject1717;
var _templateObject1817;
var _templateObject1917;
var _templateObject2016;
var _templateObject2123;
var _templateObject2220;
var _templateObject2316;
var _templateObject2416;
var _templateObject2515;
var _templateObject2615;
var _templateObject2713;
var _templateObject2812;
var _templateObject2912;
var _templateObject3012;
var _templateObject3117;
var _templateObject3215;
var _templateObject3313;
var _templateObject3411;
var _templateObject3510;
var _templateObject369;
var _templateObject379;
var _templateObject389;
var _templateObject399;
function _taggedTemplateLiteral28(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var WeaponDamageQuest = {
  name: "Reduce Gazelle Population",
  completed: function() {
    return CommunityService.WeaponDamage.isDone();
  },
  tasks: [tuneMoonPlatypus(), innerElf(), {
    name: "Meteor Showered",
    completed: function() {
      return have($effect(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral28(["Meteor Showered"]))));
    },
    prepare: function() {
      return (0, import_kolmafia34.use)($item(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral28(["tiny bottle of absinthe"]))));
    },
    do: function() {
      return mapMonster($location(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral28(["The Stately Pleasure Dome"]))), $monster(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral28(["toothless mastiff bitch"]))));
    },
    outfit: {
      weapon: $item(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral28(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject635 || (_templateObject635 = _taggedTemplateLiteral28(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject735 || (_templateObject735 = _taggedTemplateLiteral28(["Meteor Shower"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject835 || (_templateObject835 = _taggedTemplateLiteral28(["Use the Force"])))), $monster(_templateObject928 || (_templateObject928 = _taggedTemplateLiteral28(["toothless mastiff bitch"])))).macro(Macro.abort())
  }, {
    name: "Weapon Damage Test",
    completed: function() {
      return CommunityService.WeaponDamage.isDone();
    },
    do: function() {
      return runTest(CommunityService.WeaponDamage);
    },
    post: function() {
      return (0, import_kolmafia34.equip)($slot(_templateObject1025 || (_templateObject1025 = _taggedTemplateLiteral28(["familiar"]))), $item(_templateObject1121 || (_templateObject1121 = _taggedTemplateLiteral28(["none"]))));
    },
    acquire: [{
      item: $item(_templateObject1221 || (_templateObject1221 = _taggedTemplateLiteral28(["broken champagne bottle"])))
    }],
    effects: [$effect(_templateObject1321 || (_templateObject1321 = _taggedTemplateLiteral28(["Billiards Belligerence"]))), $effect(_templateObject1421 || (_templateObject1421 = _taggedTemplateLiteral28(["Blessing of your favorite Bird"]))), $effect(_templateObject1519 || (_templateObject1519 = _taggedTemplateLiteral28(["Bow-Legged Swagger"]))), $effect(_templateObject1617 || (_templateObject1617 = _taggedTemplateLiteral28(["Carol of the Bulls"]))), $effect(_templateObject1717 || (_templateObject1717 = _taggedTemplateLiteral28(["Cowrruption"]))), $effect(_templateObject1817 || (_templateObject1817 = _taggedTemplateLiteral28(["Do You Crush What I Crush?"]))), $effect(_templateObject1917 || (_templateObject1917 = _taggedTemplateLiteral28(["Frenzied, Bloody"]))), $effect(_templateObject2016 || (_templateObject2016 = _taggedTemplateLiteral28(["Grumpy and Ornery"]))), $effect(_templateObject2123 || (_templateObject2123 = _taggedTemplateLiteral28(["In a Lather"]))), $effect(_templateObject2220 || (_templateObject2220 = _taggedTemplateLiteral28(["Inner Elf"]))), $effect(_templateObject2316 || (_templateObject2316 = _taggedTemplateLiteral28(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2416 || (_templateObject2416 = _taggedTemplateLiteral28(["Lack of Body-Building"]))), $effect(_templateObject2515 || (_templateObject2515 = _taggedTemplateLiteral28(["Meteor Showered"]))), $effect(_templateObject2615 || (_templateObject2615 = _taggedTemplateLiteral28(["Rage of the Reindeer"]))), $effect(_templateObject2713 || (_templateObject2713 = _taggedTemplateLiteral28(["Ready to Survive"]))), $effect(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral28(["Scowl of the Auk"]))), $effect(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral28(["Song of the North"]))), $effect(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral28(["Tenacity of the Snapper"]))), $effect(_templateObject3117 || (_templateObject3117 = _taggedTemplateLiteral28(["The Power of LOV"])))],
    outfit: {
      hat: $items(_templateObject3215 || (_templateObject3215 = _taggedTemplateLiteral28(["extra-wide head candle, none"]))),
      weapon: $item(_templateObject3313 || (_templateObject3313 = _taggedTemplateLiteral28(["dented scepter"]))),
      offhand: $item(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral28(["unbreakable umbrella"]))),
      pants: $item(_templateObject3510 || (_templateObject3510 = _taggedTemplateLiteral28(["astral trousers"]))),
      acc1: $item(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral28(["Powerful Glove"]))),
      acc2: $item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral28(["Brutal brogues"]))),
      famequip: $item(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral28(["broken champagne bottle"]))),
      familiar: $familiar(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral28(["Disembodied Hand"]))),
      modes: {
        umbrella: "pitchfork style"
      }
    }
  }]
};

// src/main.ts
function main() {
  var command = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  sinceKolmafiaRevision(27146);
  Args.fill(config, command);
  if (config.help) {
    Args.showHelp(config);
    return;
  }
  var toCheck = {
    main_clan: {
      prop: config.main_clan,
      return: true
    },
    side_clan: {
      prop: config.side_clan,
      return: true
    },
    stillsuit: {
      prop: config.stillsuit,
      return: false
    }
  };
  for (var _i = 0, _Object$keys = Object.keys(toCheck); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    var key = name;
    if (toCheck[key].prop === "") {
      (0, import_kolmafia35.print)("seventyhccs_".concat(name, " property not set"), toCheck[key].return ? "red" : "orange");
      if (toCheck[key].return)
        return;
    }
  }
  if (config.prep) {
    prepareToAscend();
    return;
  }
  if (!isReadyToContinue(config.nofites, config.novote))
    return;
  prepAndAscendIfNecessary();
  (0, import_kolmafia35.setAutoAttack)(0);
  var engine = new Engine(getTasks([CoilWire, Leveling, MuscleQuest, MoxieQuest, HPQuest, SpellDamageQuest, WeaponDamageQuest, CombatFrequencyQuest, HotResistQuest, FamiliarWeightQuest, ItemDropQuest, MysticalityQuest, DonateQuest]));
  try {
    engine.propertyManager.setChoices({
      1340: 2,
      1387: 3
    });
    while (!get("kingLiberated")) {
      var task = engine.getNextTask();
      if (!task)
        throw "No available tasks?";
      engine.execute(task);
    }
  } finally {
    CommunityService.printLog("green");
    engine.destruct();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
