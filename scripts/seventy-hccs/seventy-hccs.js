"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js"(exports, module2) {
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
  "node_modules/core-js/internals/fails.js"(exports, module2) {
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
  "node_modules/core-js/internals/descriptors.js"(exports, module2) {
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function get2() {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
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
  "node_modules/core-js/internals/function-call.js"(exports, module2) {
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var bind = FunctionPrototype.bind;
    var call = FunctionPrototype.call;
    var uncurryThis = NATIVE_BIND && bind.bind(call, call);
    module2.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis(fn);
    } : function(fn) {
      return fn && function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module2) {
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
  "node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (it == void 0)
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module2) {
    module2.exports = function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module2) {
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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

// node_modules/core-js/internals/native-symbol.js
var require_native_symbol = __commonJS({
  "node_modules/core-js/internals/native-symbol.js"(exports, module2) {
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
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    var NATIVE_SYMBOL = require_native_symbol();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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
  "node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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
  "node_modules/core-js/internals/a-callable.js"(exports, module2) {
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
  "node_modules/core-js/internals/get-method.js"(exports, module2) {
    var aCallable = require_a_callable();
    module2.exports = function(V, P) {
      var func = V[P];
      return func == null ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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
  "node_modules/core-js/internals/is-pure.js"(exports, module2) {
    module2.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value,
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
  "node_modules/core-js/internals/shared-store.js"(exports, module2) {
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module2) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.23.4",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module2) {
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module2) {
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
  "node_modules/core-js/internals/uid.js"(exports, module2) {
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
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_native_symbol();
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
  "node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
  "node_modules/core-js/internals/to-property-key.js"(exports, module2) {
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
  "node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function get2() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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
  "node_modules/core-js/internals/an-object.js"(exports, module2) {
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
  "node_modules/core-js/internals/object-define-property.js"(exports) {
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
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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
  "node_modules/core-js/internals/function-name.js"(exports, module2) {
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/core-js/internals/native-weak-map.js
var require_native_weak_map = __commonJS({
  "node_modules/core-js/internals/native-weak-map.js"(exports, module2) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var inspectSource = require_inspect_source();
    var WeakMap2 = global2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module2) {
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
  "node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    module2.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module2) {
    var NATIVE_WEAK_MAP = require_native_weak_map();
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
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
    var get2;
    var has;
    var enforce = function enforce2(it) {
      return has(it) ? get2(it) : set(it, {});
    };
    var getterFor = function getterFor2(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get2(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap2());
      wmget = uncurryThis(store.get);
      wmhas = uncurryThis(store.has);
      wmset = uncurryThis(store.set);
      set = function set2(it, metadata) {
        if (wmhas(store, it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get2 = function get3(it) {
        return wmget(store, it) || {};
      };
      has = function has2(it) {
        return wmhas(store, it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function set2(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get2 = function get3(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function has2(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var wmget;
    var wmhas;
    var wmset;
    var STATE;
    module2.exports = {
      set,
      get: get2,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
  "node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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
            value,
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
  "node_modules/core-js/internals/math-trunc.js"(exports, module2) {
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
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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
  "node_modules/core-js/internals/to-length.js"(exports, module2) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module2) {
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
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
      for (key in O) {
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      }
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
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
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module2) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
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
  "node_modules/core-js/internals/is-forced.js"(exports, module2) {
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
  "node_modules/core-js/internals/export.js"(exports, module2) {
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
  "node_modules/core-js/internals/object-keys.js"(exports, module2) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/core-js/internals/object-to-array.js"(exports, module2) {
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
  "node_modules/core-js/internals/is-array.js"(exports, module2) {
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js"(exports, module2) {
    var uncurryThis = require_function_uncurry_this();
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
  "node_modules/core-js/internals/flatten-into-array.js"(exports, module2) {
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
  "node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js"(exports, module2) {
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
  "node_modules/core-js/internals/is-constructor.js"(exports, module2) {
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
  "node_modules/core-js/internals/array-species-constructor.js"(exports, module2) {
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
  "node_modules/core-js/internals/array-species-create.js"(exports, module2) {
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js/modules/es.array.flat.js
var require_es_array_flat = __commonJS({
  "node_modules/core-js/modules/es.array.flat.js"() {
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
  "node_modules/core-js/internals/object-define-properties.js"(exports) {
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
      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], props[key]);
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js"(exports, module2) {
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js"(exports, module2) {
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
      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create3(O, Properties) {
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
  "node_modules/core-js/internals/add-to-unscopables.js"(exports, module2) {
    var wellKnownSymbol = require_well_known_symbol();
    var create3 = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create3(null)
      });
    }
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/core-js/modules/es.array.unscopables.flat.js
var require_es_array_unscopables_flat = __commonJS({
  "node_modules/core-js/modules/es.array.unscopables.flat.js"() {
    var addToUnscopables = require_add_to_unscopables();
    addToUnscopables("flat");
  }
});

// node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "node_modules/core-js/internals/entry-unbind.js"(exports, module2) {
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

// node_modules/core-js/es/array/flat.js
var require_flat = __commonJS({
  "node_modules/core-js/es/array/flat.js"(exports, module2) {
    require_es_array_flat();
    require_es_array_unscopables_flat();
    var entryUnbind = require_entry_unbind();
    module2.exports = entryUnbind("Array", "flat");
  }
});

// node_modules/core-js/stable/array/flat.js
var require_flat2 = __commonJS({
  "node_modules/core-js/stable/array/flat.js"(exports, module2) {
    var parent = require_flat();
    module2.exports = parent;
  }
});

// node_modules/core-js/actual/array/flat.js
var require_flat3 = __commonJS({
  "node_modules/core-js/actual/array/flat.js"(exports, module2) {
    var parent = require_flat2();
    module2.exports = parent;
  }
});

// node_modules/core-js/full/array/flat.js
var require_flat4 = __commonJS({
  "node_modules/core-js/full/array/flat.js"(exports, module2) {
    var parent = require_flat3();
    module2.exports = parent;
  }
});

// node_modules/core-js/features/array/flat.js
var require_flat5 = __commonJS({
  "node_modules/core-js/features/array/flat.js"(exports, module2) {
    module2.exports = require_flat4();
  }
});

// node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/internals/iterators.js"(exports, module2) {
    module2.exports = {};
  }
});

// node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module2) {
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
  "node_modules/core-js/internals/get-iterator-method.js"(exports, module2) {
    var classof = require_classof();
    var getMethod = require_get_method();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (it != void 0)
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/internals/get-iterator.js"(exports, module2) {
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
  "node_modules/core-js/internals/iterator-close.js"(exports, module2) {
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
  "node_modules/core-js/internals/iterate.js"(exports, module2) {
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
  "node_modules/core-js/internals/create-property.js"(exports, module2) {
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

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module2) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module2) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries2) {
      var index = -1, length = entries2 == null ? 0 : entries2.length;
      this.clear();
      while (++index < length) {
        var entry = entries2[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module2) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module2) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries2) {
      var data = this.__data__ = new ListCache(entries2);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module2) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module2.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module2) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module2) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index = -1, length = values2 == null ? 0 : values2.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values2[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module2) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module2.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module2) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module2) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module2.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module2) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module2.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module2) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module2.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module2.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module2) {
    function arrayPush(array, values2) {
      var index = -1, length = values2.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values2[index];
      }
      return array;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module2) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module2) {
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module2) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module2) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module2) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module2) {
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module2) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module2) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module2) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module2) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module2) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module2) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module2) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module2) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module2.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module2.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module2) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function getTag2(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module2.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module2) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module2.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module2) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module2.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module2) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module2.exports = isEqual2;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  main: () => main
});
module.exports = __toCommonJS(main_exports);
var import_kolmafia23 = require("kolmafia");

// node_modules/libram/dist/combat.js
var import_kolmafia4 = require("kolmafia");

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
var import_kolmafia3 = require("kolmafia");

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
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "gapProtection", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "protectAgainstOverdrink", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useShinyTabbedChat", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_announcementShown", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSphereID", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "pathedSummonsHardcore", "pathedSummonsSoftcore", "popularTartUnlocked", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "ROMOfOptimalityAvailable", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "restUsingChateau", "restUsingCampAwayTent", "requireBoxServants", "requireSewerTestItems", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "sleazeAirportAlways", "snojoAvailable", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "suppressInappropriateNags", "suppressPowerPixellation", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "trackVoteMonster", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blankoutUsed", "_bonersSummoned", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lookingGlass", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_potatoAlarmClockUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shrubDecorated", "_silverDreadFlaskUsed", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758"];
var numericProperties = ["charsheetDropdown", "chatStyle", "coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "lastRssUpdate", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_g9Effect", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "barrelGoal", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chilledToTheBone", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "encountersUntilDMTChoice", "encountersUntilNEPChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "item9084", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBarrelSmashed", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEasterEggBalloon", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastTr4pz0rQuest", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "rockinRobinProgress", "ROMOfOptimalityCost", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relocatePygmyJanitor", "relocatePygmyLawyer", "rumpelstiltskinTurnsUsed", "rumpelstiltskinKidsRescued", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "turtleBlessingTurns", "twinPeakProgress", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chipBags", "_chocolateCigarsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_clanFortuneConsultUses", "_clipartSummons", "_coldMedicineConsults", "_companionshipCasts", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_miniMartiniDrops", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_spelunkerCharges", "_spelunkingTalesDrops", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "screencappedMonster", "spookyPuttyMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "cookies.inventory", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "innerChatColor", "innerTabColor", "lastRelayUpdate", "lastRssVersion", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "outerChatColor", "outerTabColor", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "afterAdventureScript", "autoOlfact", "autoPutty", "backupCameraMode", "banishedMonsters", "banishingShoutMonsters", "barrelLayout", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "retroCapeSuperhero", "retroCapeWashingInstructions", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpEVE", "questESpJunglePun", "questESpGore", "questESpClipper", "questESpFakeMedium", "questESpSerum", "questESpSmokes", "questESpOutOfOrder", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11MacGuffin", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12War", "questL12HippyFrat", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "royalty", "scriptMRUList", "seahorseName", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_LastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "preBlackbirdFamiliar"];
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
var createPropertyGetter = (transform) => (property, default_) => {
  var value = (0, import_kolmafia.getProperty)(property);
  if (default_ !== void 0 && value === "") {
    return default_;
  }
  return transform(value, property);
};
var createMafiaClassPropertyGetter = (Type, toType) => createPropertyGetter((value) => {
  if (value === "")
    return null;
  var v = toType(value);
  return v === Type.get("none") ? null : v;
});
var getString = createPropertyGetter((value) => value);
var getCommaSeparated = createPropertyGetter((value) => value.split(/, ?/));
var getBoolean = createPropertyGetter((value) => value === "true");
var getNumber = createPropertyGetter((value) => Number(value));
var getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar);
var getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
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
  if (_default instanceof import_kolmafia.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof import_kolmafia.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof import_kolmafia.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof import_kolmafia.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof import_kolmafia.Phylum) {
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
  (0, import_kolmafia.setProperty)(property, stringValue);
}

// node_modules/libram/dist/template-string.js
var import_kolmafia2 = require("kolmafia");
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};
var createSingleConstant = (Type) => function(literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }
  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};
var createPluralConstant = (Type) => function(literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }
  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  if (input === "") {
    return Type.all();
  }
  return Type.get(input.split(/\s*,\s*/));
};
var $bounty = createSingleConstant(import_kolmafia2.Bounty);
var $bounties = createPluralConstant(import_kolmafia2.Bounty);
var $class = createSingleConstant(import_kolmafia2.Class);
var $classes = createPluralConstant(import_kolmafia2.Class);
var $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster);
var $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster);
var $effect = createSingleConstant(import_kolmafia2.Effect);
var $effects = createPluralConstant(import_kolmafia2.Effect);
var $element = createSingleConstant(import_kolmafia2.Element);
var $elements = createPluralConstant(import_kolmafia2.Element);
var $familiar = createSingleConstant(import_kolmafia2.Familiar);
var $familiars = createPluralConstant(import_kolmafia2.Familiar);
var $item = createSingleConstant(import_kolmafia2.Item);
var $items = createPluralConstant(import_kolmafia2.Item);
var $location = createSingleConstant(import_kolmafia2.Location);
var $locations = createPluralConstant(import_kolmafia2.Location);
var $monster = createSingleConstant(import_kolmafia2.Monster);
var $monsters = createPluralConstant(import_kolmafia2.Monster);
var $phylum = createSingleConstant(import_kolmafia2.Phylum);
var $phyla = createPluralConstant(import_kolmafia2.Phylum);
var $servant = createSingleConstant(import_kolmafia2.Servant);
var $servants = createPluralConstant(import_kolmafia2.Servant);
var $skill = createSingleConstant(import_kolmafia2.Skill);
var $skills = createPluralConstant(import_kolmafia2.Skill);
var $slot = createSingleConstant(import_kolmafia2.Slot);
var $slots = createPluralConstant(import_kolmafia2.Slot);
var $stat = createSingleConstant(import_kolmafia2.Stat);
var $stats = createPluralConstant(import_kolmafia2.Stat);
var $thrall = createSingleConstant(import_kolmafia2.Thrall);
var $thralls = createPluralConstant(import_kolmafia2.Thrall);

// node_modules/libram/dist/utils.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  array.forEach((item4) => {
    map.set(item4, (map.get(item4) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map((_ref2) => {
    var _ref3 = _slicedToArray(_ref2, 2), item4 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item4);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map((_ref4) => {
    var _ref5 = _slicedToArray(_ref4, 2), item4 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item4);
  }).join(", ");
}
function createStringUnionTypeGuardFunction(array) {
  return function(x) {
    return array.includes(x);
  };
}

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject11;
var _templateObject12;
var _templateObject13;
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
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
  if (skillOrEffect instanceof import_kolmafia3.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof import_kolmafia3.Effect ? (0, import_kolmafia3.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia3.Effect) {
    return (0, import_kolmafia3.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Familiar) {
    return (0, import_kolmafia3.haveFamiliar)(thing);
  }
  if (thing instanceof import_kolmafia3.Item) {
    return (0, import_kolmafia3.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Servant) {
    return (0, import_kolmafia3.haveServant)(thing);
  }
  if (thing instanceof import_kolmafia3.Skill) {
    return (0, import_kolmafia3.haveSkill)(thing);
  }
  if (thing instanceof import_kolmafia3.Thrall) {
    var thrall = (0, import_kolmafia3.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
function haveInCampground(item4) {
  return Object.keys((0, import_kolmafia3.getCampground)()).map((i) => import_kolmafia3.Item.get(i)).includes(item4);
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
  return Object.entries((0, import_kolmafia3.getRelated)(item4, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray2(_ref, 2), a = _ref3[1];
    var _ref4 = _slicedToArray2(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map((_ref5) => {
    var _ref6 = _slicedToArray2(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  });
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0, import_kolmafia3.holiday)().split("/").map((holiday4) => {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday4)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }).flat();
}

// node_modules/libram/dist/combat.js
var _templateObject2;
var _templateObject22;
function _createForOfIteratorHelper(o, allowArrayLike) {
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
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
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
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _classCallCheck(instance, Constructor) {
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
function _wrapNativeSuper(Class5) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper4(Class6) {
    if (Class6 === null || !_isNativeFunction(Class6))
      return Class6;
    if (typeof Class6 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct(Class6, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class6);
  };
  return _wrapNativeSuper(Class5);
}
function _construct(Parent, args, Class5) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct4(Parent2, args2, Class6) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class6)
        _setPrototypeOf(instance, Class6.prototype);
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
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
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
  var macroMatches = (0, import_kolmafia4.xpath)((0, import_kolmafia4.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia4.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia4.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia4.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? import_kolmafia4.Item.get(itemOrName) : itemOrName;
}
var substringCombatItems = $items(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = $skills(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral2(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item4 = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item4) ? item4.name : (0, import_kolmafia4.toInt)(item4).toString();
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
    return import_kolmafia4.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0, import_kolmafia4.toInt)(skill);
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits(InvalidMacroError2, _Error);
  var _super = _createSuper(InvalidMacroError2);
  function InvalidMacroError2() {
    _classCallCheck(this, InvalidMacroError2);
    return _super.apply(this, arguments);
  }
  return _createClass(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
var Macro = /* @__PURE__ */ function() {
  function Macro2() {
    _classCallCheck(this, Macro2);
    _defineProperty(this, "components", []);
    _defineProperty(this, "name", MACRO_NAME);
  }
  _createClass(Macro2, [{
    key: "toString",
    value: function toString() {
      return this.components.join(";");
    }
  }, {
    key: "rename",
    value: function rename(name) {
      var returnValue = this.name;
      this.name = name;
      return returnValue;
    }
  }, {
    key: "save",
    value: function save() {
      _set(Macro2.SAVED_MACRO_PROPERTY, this.toString());
    }
  }, {
    key: "step",
    value: function step() {
      var _ref;
      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray2(nextSteps.map((x) => x instanceof Macro2 ? x.components : [x])));
      this.components = [].concat(_toConsumableArray2(this.components), _toConsumableArray2(nextStepsStrings.filter((s) => s.length > 0)));
      return this;
    }
  }, {
    key: "submit",
    value: function submit() {
      var final = this.toString();
      return (0, import_kolmafia4.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia4.urlEncode)(final)), true, true);
    }
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack4() {
      var id = Macro2.cachedMacroIds.get(this.name);
      if (id === void 0) {
        id = getMacroId(this.name);
        Macro2.cachedMacroIds.set(this.name, id);
      }
      if ((0, import_kolmafia4.getAutoAttack)() === 99e6 + id && this.toString() === Macro2.cachedAutoAttacks.get(this.name)) {
        return;
      }
      (0, import_kolmafia4.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia4.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia4.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, import_kolmafia4.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1"));
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
    value: function abort2() {
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
      var ballsCondition = "";
      if (condition instanceof import_kolmafia4.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map((mon) => "monsterid ".concat(mon.id)).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof import_kolmafia4.Effect) {
        ballsCondition = "haseffect ".concat((0, import_kolmafia4.toInt)(condition));
      } else if (condition instanceof import_kolmafia4.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia4.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia4.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia4.Class) {
        if ((0, import_kolmafia4.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof import_kolmafia4.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }
      return this.step("if ".concat(ballsCondition)).step(ifTrue).step("endif");
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
      return this.step.apply(this, _toConsumableArray2(skills.map((skill2) => {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, _toConsumableArray2(skills.map((skill) => {
        return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill));
      })));
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, _toConsumableArray2(skills.map((skill) => {
        return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill).repeat());
      })));
    }
  }, {
    key: "item",
    value: function item4() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }
      return this.step.apply(this, _toConsumableArray2(items.map((itemOrItems) => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, _toConsumableArray2(items.map((item4) => {
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
      return this.if_(todaysWanderers.map((monster) => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0)
        return this.step(macro);
      return this.if_(todaysWanderers.map((monster) => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
  }], [{
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray2(get(Macro2.SAVED_MACRO_PROPERTY).split(";")));
    }
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, import_kolmafia4.removeProperty)(Macro2.SAVED_MACRO_PROPERTY);
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
      var _iterator = _createForOfIteratorHelper(Macro2.cachedAutoAttacks.keys()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _Macro$cachedMacroIds;
          var name = _step.value;
          var id = (_Macro$cachedMacroIds = Macro2.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia4.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro2.cachedAutoAttacks.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort2() {
      return new this().abort();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
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
_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());

// node_modules/libram/dist/logger.js
var import_kolmafia5 = require("kolmafia");
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
    Object.defineProperty(target, descriptor.key, descriptor);
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
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defaultHandlers = {
  info: (message) => (0, import_kolmafia5.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: (message) => (0, import_kolmafia5.printHtml)('<span style="background: orange; color: white;"><b>[Libram]</b> '.concat(message, "</span>")),
  error: (_error) => (0, import_kolmafia5.printHtml)('<span style="background: red; color: white;"><b>[Libram]</b> '.concat(_error.toString(), "</span>"))
};
var Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2);
    _defineProperty2(this, "handlers", defaultHandlers);
  }
  _createClass2(Logger2, [{
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
var import_kolmafia10 = require("kolmafia");

// node_modules/libram/dist/Path.js
var _templateObject3;
var _templateObject23;
var _templateObject32;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
var _templateObject10;
var _templateObject112;
function _taggedTemplateLiteral3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Path = /* @__PURE__ */ _createClass3(function Path2(name, id) {
  var hasAllPerms = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var hasCampground = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  var hasTerrarium = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  var stomachSize = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 15;
  var liverSize = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 15;
  var spleenSize = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 15;
  var classes = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : $classes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral3(["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"])));
  _classCallCheck3(this, Path2);
  _defineProperty3(this, "name", void 0);
  _defineProperty3(this, "id", void 0);
  _defineProperty3(this, "hasAllPerms", void 0);
  _defineProperty3(this, "hasCampground", void 0);
  _defineProperty3(this, "hasTerrarium", void 0);
  _defineProperty3(this, "stomachSize", void 0);
  _defineProperty3(this, "liverSize", void 0);
  _defineProperty3(this, "spleenSize", void 0);
  _defineProperty3(this, "classes", void 0);
  this.name = name;
  this.id = id;
  this.hasAllPerms = hasAllPerms;
  this.hasCampground = hasCampground;
  this.hasTerrarium = hasTerrarium;
  this.stomachSize = stomachSize;
  this.liverSize = liverSize;
  this.spleenSize = spleenSize;
  this.classes = classes;
});
var Paths = {
  Unrestricted: new Path("Unrestricted", 0),
  Boozetafarian: new Path("Boozetafarian", 1, false, true, true, 0),
  Teetotaler: new Path("Teetotaler", 2, false, true, true, 15, 0),
  Oxygenarian: new Path("Oxygenarian", 3, false, true, true, 0, 0),
  BeesHateYou: new Path("Bees Hate You", 4),
  WayOfTheSurprisingFist: new Path("Way of the Surprising Fist", 6),
  Trendy: new Path("Trendy", 6),
  AvatarOfBoris: new Path("Avatar of Boris", 8, false, true, false, 20, 5, 15, $classes(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral3(["Avatar of Boris"])))),
  BugbearInvasion: new Path("Bugbear Invasion", 9),
  ZombieSlayer: new Path("Zombie Slayer", 10, false, true, true, 15, 5, 15, $classes(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral3(["Zombie Master"])))),
  ClassAct: new Path("Class Act", 11, false),
  AvatarofJarlsberg: new Path("Avatar of Jarlsberg", 12, false, true, false, 10, 10, 15, $classes(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral3(["Avatar of Jarlsberg"])))),
  Big: new Path("BIG!", 14),
  KolHs: new Path("KOLHS", 15),
  ClassAct2: new Path("Class Act II: A Class For Pigs", 16, false),
  AvatarofSneakyPete: new Path("Avatar of Sneaky Pete", 17, false, true, false, 5, 20, 15, $classes(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral3(["Avatar of Sneaky Pete"])))),
  SlowAndSteady: new Path("Slow and Steady", 18),
  HeavyRains: new Path("Heavy Rains", 19),
  Picky: new Path("Picky", 21, false),
  Standard: new Path("Standard", 22),
  ActuallyEdTheUndying: new Path("Actually Ed the Undying", 23, false, false, false, 0, 0, 5, $classes(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral3(["Ed"])))),
  OneCrazyRandomSummer: new Path("One Crazy Random Summer", 24),
  CommunityService: new Path("Community Service", 25),
  AvatarOfWestOfLoathing: new Path("Avatar of West of Loathing", 26, false, true, true, 10, 10, 10, $classes(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral3(["Cow Puncher, Snake Oiler, Beanslinger"])))),
  TheSource: new Path("The Source", 27),
  NuclearAutumn: new Path("Nuclear Autumn", 28, false, false, true, 3, 3, 3),
  GelatinousNoob: new Path("Gelatinous Noob", 29, false, true, true, 0, 0, 0, $classes(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral3(["Gelatinous Noob"])))),
  LicenseToAdventure: new Path("License to Adventure", 30, true, true, false, 0, 2, 15),
  LiveAscendRepeat: new Path("Live. Ascend. Repeat.", 31),
  PocketFamiliars: new Path("Pocket Familiars", 32, false, true, false),
  GLover: new Path("G-Lover", 33),
  DisguisesDelimit: new Path("Disguises Delimit", 34),
  DarkGyffte: new Path("Dark Gyffte", 35, false, true, false, 5, 5, 15, $classes(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral3(["Vampyre"])))),
  TwoCrazyRandomSummer: new Path("Two Crazy Random Summer", 36),
  KingdomOfExploathing: new Path("Kingdom of Exploathing", 37),
  PathOfThePlumber: new Path("Path of the Plumber", 38, false, true, true, 20, 0, 5, $classes(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral3(["Plumber"])))),
  LowKeySummer: new Path("Low Key Summer", 40),
  GreyGoo: new Path("Grey Goo", 40),
  YouRobot: new Path("You, Robot", 41, false, false, true, 0, 0, 0),
  QuantumTerrarium: new Path("Quantum Terrarium", 42, true, true, false),
  Wildfire: new Path("Wildfire", 43),
  GreyYou: new Path("Grey You", 44, false, true, true, 0, 0, 0, $classes(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral3(["Grey Goo"]))))
};

// node_modules/libram/dist/Copier.js
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Copier = /* @__PURE__ */ _createClass4(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck4(this, Copier2);
  _defineProperty4(this, "couldCopy", void 0);
  _defineProperty4(this, "prepare", void 0);
  _defineProperty4(this, "canCopy", void 0);
  _defineProperty4(this, "copiedMonster", void 0);
  _defineProperty4(this, "fightCopy", null);
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy)
    this.fightCopy = fightCopy;
});

// node_modules/libram/dist/resources/2015/ChateauMantegna.js
var ChateauMantegna_exports = {};
__export(ChateauMantegna_exports, {
  ceilings: () => ceilings,
  changeCeiling: () => changeCeiling,
  changeDesk: () => changeDesk,
  changeNightstand: () => changeNightstand,
  desks: () => desks,
  fightPainting: () => fightPainting,
  getCeiling: () => getCeiling,
  getDesk: () => getDesk,
  getNightstand: () => getNightstand,
  have: () => have2,
  nightstands: () => nightstands,
  paintingFought: () => paintingFought,
  paintingMonster: () => paintingMonster
});
var import_kolmafia6 = require("kolmafia");
function have2() {
  return get("chateauAvailable");
}
function paintingMonster() {
  return get("chateauMonster");
}
function paintingFought() {
  return get("_chateauMonsterFought");
}
function fightPainting() {
  (0, import_kolmafia6.visitUrl)("place.php?whichplace=chateau&action=chateau_painting", false);
  return (0, import_kolmafia6.runCombat)();
}
var desks = ["fancy stationery set", "Swiss piggy bank", "continental juice bar"];
var ceilings = ["antler chandelier", "ceiling fan", "artificial skylight"];
var nightstands = ["foreign language tapes", "bowl of potpourri", "electric muscle stimulator"];
function getDesk() {
  var _desks$find;
  return (_desks$find = desks.find((desk) => Object.keys((0, import_kolmafia6.getChateau)()).includes(desk))) !== null && _desks$find !== void 0 ? _desks$find : null;
}
function getCeiling() {
  var _ceilings$find;
  return (_ceilings$find = ceilings.find((ceiling) => Object.keys((0, import_kolmafia6.getChateau)()).includes(ceiling))) !== null && _ceilings$find !== void 0 ? _ceilings$find : null;
}
function getNightstand() {
  var _nightstands$find;
  return (_nightstands$find = nightstands.find((nightstand) => Object.keys((0, import_kolmafia6.getChateau)()).includes(nightstand))) !== null && _nightstands$find !== void 0 ? _nightstands$find : null;
}
function changeDesk(desk) {
  if (getDesk() === desk)
    return true;
  if (!desks.includes(desk))
    return false;
  (0, import_kolmafia6.buy)(import_kolmafia6.Item.get(desk));
  return getDesk() === desk;
}
function changeCeiling(ceiling) {
  if (getCeiling() === ceiling)
    return true;
  if (!ceilings.includes(ceiling))
    return false;
  (0, import_kolmafia6.buy)(import_kolmafia6.Item.get(ceiling));
  return getCeiling() === ceiling;
}
function changeNightstand(nightstand) {
  if (getNightstand() === nightstand)
    return true;
  if (!nightstands.includes(nightstand))
    return false;
  (0, import_kolmafia6.buy)(import_kolmafia6.Item.get(nightstand));
  return getNightstand() === nightstand;
}

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: () => Buffs,
  Digitize: () => Digitize,
  Items: () => Items,
  RolloverBuffs: () => RolloverBuffs,
  Skills: () => Skills,
  canDigitize: () => canDigitize,
  couldDigitize: () => couldDigitize,
  duplicateUsesRemaining: () => duplicateUsesRemaining,
  educate: () => educate,
  enhance: () => enhance,
  enhanceBuffDuration: () => enhanceBuffDuration,
  enhanceUsesRemaining: () => enhanceUsesRemaining,
  enquiry: () => enquiry,
  enquiryBuffDuration: () => enquiryBuffDuration,
  extrude: () => extrude,
  getChips: () => getChips,
  getDigitizeMonster: () => getDigitizeMonster,
  getDigitizeMonsterCount: () => getDigitizeMonsterCount,
  getDigitizeUses: () => getDigitizeUses,
  getDigitizeUsesRemaining: () => getDigitizeUsesRemaining,
  getDuplicateUses: () => getDuplicateUses,
  getEnhanceUses: () => getEnhanceUses,
  getMaximumDigitizeUses: () => getMaximumDigitizeUses,
  getPortscanUses: () => getPortscanUses,
  getSkills: () => getSkills,
  have: () => have3,
  isCurrentSkill: () => isCurrentSkill,
  item: () => item,
  maximumDuplicateUses: () => maximumDuplicateUses,
  maximumEnhanceUses: () => maximumEnhanceUses,
  prepareDigitize: () => prepareDigitize
});
var import_kolmafia7 = require("kolmafia");
var import_isEqual = __toESM(require_isEqual());
var _templateObject14;
var _templateObject24;
var _templateObject33;
var _templateObject42;
var _templateObject52;
var _templateObject62;
var _templateObject72;
var _templateObject82;
var _templateObject92;
var _templateObject102;
var _templateObject113;
var _templateObject122;
var _templateObject132;
var _templateObject142;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
var _templateObject222;
var _templateObject232;
var _templateObject242;
var _templateObject25;
var _templateObject26;
var _templateObject27;
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _taggedTemplateLiteral4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral4(["Source terminal"])));
function have3() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral4(["items.enh"]))),
  Meat: $effect(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral4(["meat.enh"]))),
  Init: $effect(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral4(["init.enh"]))),
  Critical: $effect(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral4(["critical.enh"]))),
  Damage: $effect(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral4(["damage.enh"]))),
  Substats: $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral4(["substats.enh"])))
};
function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }
  return (0, import_kolmafia7.cliExecute)("terminal enhance ".concat(buff.name));
}
var RolloverBuffs = {
  Familiar: $effect(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral4(["familiar.enq"]))),
  Monsters: $effect(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral4(["monsters.enq"]))),
  Protect: $effect(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral4(["protect.enq"]))),
  Stats: $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral4(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }
  return (0, import_kolmafia7.cliExecute)("terminal enquiry ".concat(rolloverBuff.name));
}
var Skills = {
  Extract: $skill(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral4(["Extract"]))),
  Digitize: $skill(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral4(["Digitize"]))),
  Compress: $skill(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral4(["Compress"]))),
  Duplicate: $skill(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral4(["Duplicate"]))),
  Portscan: $skill(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral4(["Portscan"]))),
  Turbo: $skill(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral4(["Turbo"])))
};
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if ((0, import_isEqual.default)(skillsArray, getSkills()))
    return true;
  var _iterator = _createForOfIteratorHelper2(skillsArray), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill))
        return false;
      (0, import_kolmafia7.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map((p) => get(p)).filter((s) => s !== "").map((s) => import_kolmafia7.Skill.get(s.slice(0, -4)));
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every((skill) => currentSkills.includes(skill));
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral4(["browser cookie"]))), "food.ext"], [$item(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral4(["hacked gibson"]))), "booze.ext"], [$item(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral4(["Source shades"]))), "goggles.ext"], [$item(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral4(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral4(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral4(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral4(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral4(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral4(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral4(["software bug"]))), "familiar.ext"]]);
function extrude(item4) {
  var fileName = Items.get(item4);
  if (!fileName)
    return false;
  return (0, import_kolmafia7.cliExecute)("terminal extrude ".concat(fileName));
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }
  return true;
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia7.myPathId)() === Paths.TheSource.id ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter((chip) => ["CRAM", "SCRAM"].includes(chip)).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_exports = {};
__export(Witchess_exports, {
  fightPiece: () => fightPiece,
  fightsDone: () => fightsDone,
  have: () => have4,
  item: () => item2,
  pieces: () => pieces
});
var import_kolmafia8 = require("kolmafia");
var _templateObject28;
function _taggedTemplateLiteral5(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral5(["Witchess Set"])));
function have4() {
  return haveInCampground(item2);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = import_kolmafia8.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece))
    throw new Error("That is not a valid piece.");
  if (!(0, import_kolmafia8.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!(0, import_kolmafia8.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!(0, import_kolmafia8.visitUrl)("choice.php?option=1&pwd=".concat((0, import_kolmafia8.myHash)(), "&whichchoice=1182&piece=").concat((0, import_kolmafia8.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  return (0, import_kolmafia8.runCombat)();
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: () => dropProgress,
  have: () => have5,
  item: () => item3,
  setSong: () => setSong,
  song: () => song,
  songBoomSongs: () => songBoomSongs,
  songChangesLeft: () => songChangesLeft
});
var import_kolmafia9 = require("kolmafia");
var _templateObject29;
function _taggedTemplateLiteral6(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = $item(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral6(["SongBoom\u2122 BoomBox"])));
function have5() {
  return have(item3);
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
    (0, import_kolmafia9.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/ascend.js
var _templateObject30;
var _templateObject210;
var _templateObject34;
var _templateObject43;
var _templateObject53;
var _templateObject63;
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
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
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _taggedTemplateLiteral7(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _classCallCheck5(instance, Constructor) {
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
function _wrapNativeSuper2(Class5) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper2 = function _wrapNativeSuper4(Class6) {
    if (Class6 === null || !_isNativeFunction2(Class6))
      return Class6;
    if (typeof Class6 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class6, arguments, _getPrototypeOf2(this).constructor);
    }
    Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf2(Wrapper, Class6);
  };
  return _wrapNativeSuper2(Class5);
}
function _construct2(Parent, args, Class5) {
  if (_isNativeReflectConstruct2()) {
    _construct2 = Reflect.construct.bind();
  } else {
    _construct2 = function _construct4(Parent2, args2, Class6) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class6)
        _setPrototypeOf2(instance, Class6.prototype);
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
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Lifestyle;
(function(Lifestyle2) {
  Lifestyle2[Lifestyle2["casual"] = 1] = "casual";
  Lifestyle2[Lifestyle2["softcore"] = 2] = "softcore";
  Lifestyle2[Lifestyle2["normal"] = 2] = "normal";
  Lifestyle2[Lifestyle2["hardcore"] = 3] = "hardcore";
})(Lifestyle || (Lifestyle = {}));
var AscendError = /* @__PURE__ */ function(_Error) {
  _inherits2(AscendError2, _Error);
  var _super = _createSuper2(AscendError2);
  function AscendError2(cause) {
    var _this;
    _classCallCheck5(this, AscendError2);
    if (!cause) {
      _this = _super.call(this, "Failed to ascend--do you have a pending trade offer?");
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia10.Skill) {
      var reason = cause.permable ? (0, import_kolmafia10.haveSkill)(cause) ? "invalid for mysterious reasons" : "not a skill you currently know" : "unpermable";
      _this = _super.call(this, "Skill ".concat(cause, " is ").concat(reason, "!"));
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia10.Item) {
      _this = _super.call(this, "Invalid astral item: ".concat(cause, "!"));
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia10.Class) {
      _this = _super.call(this, "Invalid class ".concat(cause, " for this path!"));
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    } else if (cause instanceof Path) {
      _this = _super.call(this, "Invalid path ".concat(cause, "!"));
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    } else {
      _this = _super.call(this, cause);
      _defineProperty5(_assertThisInitialized2(_this), "cause", void 0);
    }
    _this.cause = cause;
    return _possibleConstructorReturn2(_this);
  }
  return _createClass5(AscendError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error));
var worksheds = ["warbear LP-ROM burner", "warbear jackhammer drill press", "warbear induction oven", "warbear high-efficiency still", "warbear chemistry lab", "warbear auto-anvil", "spinning wheel", "snow machine", "Little Geneticist DNA-Splicing Lab", "portable Mayo Clinic", "Asdon Martin keyfob", "diabolic pizza cube", "cold medicine cabinet"];
var gardens = ["packet of pumpkin seeds", "Peppermint Pip Packet", "packet of dragon's teeth", "packet of beer seeds", "packet of winter seeds", "packet of thanksgarden seeds", "packet of tall grass seeds", "packet of mushroom spores"];
var eudorae = ["My Own Pen Pal kit", "GameInformPowerDailyPro subscription card", "Xi Receiver Unit", "New-You Club Membership Form", "Our Daily Candles\u2122 order form"];
var isWorkshed = createStringUnionTypeGuardFunction(worksheds);
var isGarden = createStringUnionTypeGuardFunction(gardens);
var isEudora = createStringUnionTypeGuardFunction(eudorae);
var isDesk = createStringUnionTypeGuardFunction(ChateauMantegna_exports.desks);
var isNightstand = createStringUnionTypeGuardFunction(ChateauMantegna_exports.nightstands);
var isCeiling = createStringUnionTypeGuardFunction(ChateauMantegna_exports.ceilings);
var AscensionPrepError = /* @__PURE__ */ function(_Error2) {
  _inherits2(AscensionPrepError2, _Error2);
  var _super2 = _createSuper2(AscensionPrepError2);
  function AscensionPrepError2(cause, original) {
    var _this2;
    _classCallCheck5(this, AscensionPrepError2);
    if (isWorkshed(cause)) {
      _this2 = _super2.call(this, "Unable to swap workshed to ".concat(cause, "; workshed is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else if (isGarden(cause)) {
      _this2 = _super2.call(this, "Unable to swap garden to ".concat(cause, "; garden is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else if (isEudora(cause)) {
      _this2 = _super2.call(this, "Unable to swap eudora to ".concat(cause, "; eudora is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else if (isDesk(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau desk to ".concat(cause, "; desk is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else if (isNightstand(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau nightstand to ".concat(cause, "; nightstand is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else if (isCeiling(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau ceiling to ".concat(cause, "; ceiling is currently ").concat(original, "."));
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    } else {
      _this2 = _super2.call(this, cause);
      _defineProperty5(_assertThisInitialized2(_this2), "cause", void 0);
    }
    _this2.cause = cause;
    return _possibleConstructorReturn2(_this2);
  }
  return _createClass5(AscensionPrepError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error));
function toMoonId(moon, playerClass) {
  if (typeof moon === "number")
    return moon;
  var offset = () => {
    switch (playerClass.primestat) {
      case $stat(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral7(["Muscle"]))):
        return 0;
      case $stat(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral7(["Mysticality"]))):
        return 1;
      case $stat(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral7(["Moxie"]))):
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
function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : $item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral7(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : void 0;
  var permSkills = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : void 0;
  if (!path.classes.includes(playerClass)) {
    throw new AscendError(playerClass);
  }
  if (path.id < 0)
    throw new AscendError(path);
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9)
    throw new Error("Invalid moon ".concat(moon));
  if (consumable && !$items(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral7(["astral six-pack, astral hot dog dinner, [10882]carton of astral energy drinks"]))).includes(consumable)) {
    throw new AscendError(consumable);
  }
  if (pet && !$items(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral7(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) {
    throw new AscendError(pet);
  }
  var illegalSkill = permSkills ? Array.from(permSkills.keys()).find((skill2) => !skill2.permable || !(0, import_kolmafia10.haveSkill)(skill2)) : void 0;
  if (illegalSkill) {
    throw new AscendError(illegalSkill);
  }
  if (!(0, import_kolmafia10.containsText)((0, import_kolmafia10.visitUrl)("charpane.php"), "Astral Spirit")) {
    (0, import_kolmafia10.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!(0, import_kolmafia10.containsText)((0, import_kolmafia10.visitUrl)("charpane.php"), "Astral Spirit")) {
    throw new AscendError();
  }
  (0, import_kolmafia10.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) {
    (0, import_kolmafia10.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0, import_kolmafia10.toInt)(consumable)));
  }
  if (pet)
    (0, import_kolmafia10.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0, import_kolmafia10.toInt)(pet)));
  if (permSkills) {
    var _iterator = _createForOfIteratorHelper3(permSkills.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _step$value = _slicedToArray3(_step.value, 2), skill = _step$value[0], permLevel = _step$value[1];
        if (permLevel !== Lifestyle.casual) {
          var permText = permLevel === Lifestyle.hardcore ? "hcperm" : "scperm";
          (0, import_kolmafia10.visitUrl)("afterlife.php?action=".concat(permText, "&whichskill=").concat((0, import_kolmafia10.toInt)(skill)));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  (0, import_kolmafia10.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat((0, import_kolmafia10.toInt)(playerClass), "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&lamesignok=1&pwd"), true);
}
function prepareAscension() {
  var _throwOnFail;
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, workshed = _ref.workshed, garden = _ref.garden, eudora = _ref.eudora, chateau = _ref.chateau, throwOnFail = _ref.throwOnFail;
  throwOnFail = (_throwOnFail = throwOnFail) !== null && _throwOnFail !== void 0 ? _throwOnFail : true;
  if (workshed && (0, import_kolmafia10.getWorkshed)() !== import_kolmafia10.Item.get(workshed)) {
    (0, import_kolmafia10.use)(import_kolmafia10.Item.get(workshed));
    if ((0, import_kolmafia10.getWorkshed)().name !== workshed && throwOnFail) {
      throw new AscensionPrepError(workshed, (0, import_kolmafia10.getWorkshed)());
    }
  }
  if (garden && !Object.getOwnPropertyNames((0, import_kolmafia10.getCampground)()).includes(garden)) {
    (0, import_kolmafia10.use)(import_kolmafia10.Item.get(garden));
    var gardenName = Object.getOwnPropertyNames((0, import_kolmafia10.getCampground)()).find(isGarden);
    if (gardenName !== garden && throwOnFail) {
      throw new AscensionPrepError(garden, gardenName);
    }
  }
  if (eudora && (0, import_kolmafia10.eudoraItem)().name !== eudora) {
    var eudoraNumber = 1 + eudorae.indexOf(eudora);
    if (!(0, import_kolmafia10.xpath)((0, import_kolmafia10.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(eudoraNumber.toString()) && throwOnFail) {
      throw new AscensionPrepError("Unable to swap eudora to ".concat(eudora, " because you are not subscribed to it."));
    } else {
      (0, import_kolmafia10.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
    }
    if ((0, import_kolmafia10.eudoraItem)() !== import_kolmafia10.Item.get(eudora) && throwOnFail) {
      throw new AscensionPrepError(eudora, (0, import_kolmafia10.eudoraItem)());
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
var import_kolmafia11 = require("kolmafia");
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
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
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp2(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf3(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      return groups[name] = result[g[name]], groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits3(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        return "$" + groups[name];
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return typeof args[args.length - 1] != "object" && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
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
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
var clanIdCache = {};
var toPlayerId = (player) => typeof player === "string" ? (0, import_kolmafia11.getPlayerId)(player) : player;
var LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck6(this, Clan2);
    _defineProperty6(this, "id", void 0);
    _defineProperty6(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  _createClass6(Clan2, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0, import_kolmafia11.getClanId)()) {
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
      return (0, import_kolmafia11.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = (0, import_kolmafia11.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray4(lastFax, 4), monsterName = _lastFax[3];
      if (!monsterName)
        return null;
      return import_kolmafia11.Monster.get(monsterName);
    }
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = (0, import_kolmafia11.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia11.xpath)(page, '//select[@name="level"]//option').map((option) => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, import_kolmafia11.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, import_kolmafia11.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray4(match, 3), name = _match[1], degree = _match[2];
        return {
          name,
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
      var rank = rankName ? ranks.find((r) => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank)
        return false;
      var result = (0, import_kolmafia11.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = (0, import_kolmafia11.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = (0, import_kolmafia11.visitUrl)("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray4(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = (0, import_kolmafia11.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach((quantity, item4) => {
        var needed = Math.max(0, quantity - (0, import_kolmafia11.availableAmount)(item4));
        if (needed === 0) {
          return map.set(item4, 0);
        }
        var foldGroup = getFoldGroup(item4);
        var _iterator = _createForOfIteratorHelper4(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, import_kolmafia11.availableAmount)(foldable));
            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0, import_kolmafia11.cliExecute)("fold ".concat(item4.name));
              needed--;
            }
            return map.set(item4, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia11.refreshStash)();
        for (var _i2 = 0, _arr2 = [item4].concat(_toConsumableArray3(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0, import_kolmafia11.stashAmount)(matchingItem));
          if (quantityToTake === 0)
            continue;
          if (!(0, import_kolmafia11.takeStash)(quantityToTake, matchingItem))
            return;
          if (matchingItem === item4) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, import_kolmafia11.cliExecute)("fold ".concat(matchingItem.name));
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
      map.forEach((quantity, item4) => {
        (0, import_kolmafia11.retrieveItem)(quantity, item4);
        var returned = Math.min(quantity, (0, import_kolmafia11.availableAmount)(item4));
        (0, import_kolmafia11.putStash)(returned, item4);
        map.set(item4, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(() => this.take(map), (borrowed) => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0, import_kolmafia11.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
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
          map.forEach((quantity, item4) => {
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
        if (clanName === (0, import_kolmafia11.getClanName)().toLowerCase()) {
          return Clan2.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find((c) => c.name.toLowerCase() === clanName);
          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === (0, import_kolmafia11.getClanId)()) {
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
      return Clan2._withStash(() => Clan2.with(clanIdOrName, (clan) => clan.take(items)), (borrowed) => Clan2.with(clanIdOrName, (clan) => clan.put(borrowed)), callback);
    }
  }, {
    key: "get",
    value: function get2() {
      return new Clan2((0, import_kolmafia11.getClanId)(), (0, import_kolmafia11.getClanName)());
    }
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, import_kolmafia11.visitUrl)("clan_signup.php");
      return (0, import_kolmafia11.xpath)(page, '//select[@name="whichclan"]//option').map((option) => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, import_kolmafia11.xpath)(validHtml, "//@value")[0]);
        var name = (0, import_kolmafia11.xpath)(validHtml, "//text()")[0];
        return new Clan2(id, name);
      });
    }
  }]);
  return Clan2;
}();

// node_modules/libram/dist/since.js
var import_kolmafia12 = require("kolmafia");
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf4(subClass, superClass);
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
function _wrapNativeSuper3(Class5) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper3 = function _wrapNativeSuper4(Class6) {
    if (Class6 === null || !_isNativeFunction3(Class6))
      return Class6;
    if (typeof Class6 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct3(Class6, arguments, _getPrototypeOf3(this).constructor);
    }
    Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf4(Wrapper, Class6);
  };
  return _wrapNativeSuper3(Class5);
}
function _construct3(Parent, args, Class5) {
  if (_isNativeReflectConstruct3()) {
    _construct3 = Reflect.construct.bind();
  } else {
    _construct3 = function _construct4(Parent2, args2, Class6) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class6)
        _setPrototypeOf4(instance, Class6.prototype);
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
function _setPrototypeOf4(o, p) {
  _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf4(o, p);
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf4(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
var KolmafiaVersionError = /* @__PURE__ */ function(_Error) {
  _inherits4(KolmafiaVersionError2, _Error);
  var _super = _createSuper3(KolmafiaVersionError2);
  function KolmafiaVersionError2(message) {
    var _this;
    _classCallCheck7(this, KolmafiaVersionError2);
    _this = _super.call(this, message);
    Object.setPrototypeOf(_assertThisInitialized3(_this), KolmafiaVersionError2.prototype);
    return _this;
  }
  return _createClass7(KolmafiaVersionError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
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
  var currentRevision = (0, import_kolmafia12.getRevision)();
  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia12.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

// src/batfellow.ts
var import_kolmafia14 = require("kolmafia");

// src/lib.ts
var import_kolmafia13 = require("kolmafia");
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function acquireEffect(e) {
  if (!have(e) && e.default.startsWith("cargo"))
    throw "Can't obtain ".concat(e, "?");
  if (!have(e))
    (0, import_kolmafia13.cliExecute)(e.default);
}
function checkAvailable(i) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (!have(i, n)) {
    throw "Why don't we have at least ".concat(n, " ").concat(n > 1 ? i.plural : i, " (id: ").concat((0, import_kolmafia13.toInt)(i), ")?");
  }
}
function checkEffect(e) {
  if (!have(e))
    throw "Missing effect ".concat(e);
}
function isHolidayWandererDay() {
  var holidays = ["el dia de los muertos borrachos", "feast of boris", "talk like a pirate day"];
  var today = (0, import_kolmafia13.holiday)().split("/");
  var wandererToday = today.some((day) => holidays.includes(day.toLowerCase()));
  return wandererToday;
}
function itemToEffect(i) {
  return (0, import_kolmafia13.effectModifier)(i, "effect");
}
function shrugEffect(effect) {
  if (have(effect))
    (0, import_kolmafia13.cliExecute)("shrug ".concat(effect));
}
function tryUse(i) {
  if (have(i))
    (0, import_kolmafia13.use)(i);
}
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
}
function voterMonsterNow() {
  return (0, import_kolmafia13.totalTurnsPlayed)() % 11 === 1 && get("lastVoteMonsterTurn") < (0, import_kolmafia13.totalTurnsPlayed)();
}
function wishEffect(e) {
  if (!have(e))
    (0, import_kolmafia13.cliExecute)("genie effect ".concat(e));
}
function withContext(callback, context) {
  var previous = context.map((_ref) => {
    var _ref2 = _slicedToArray5(_ref, 1), prop = _ref2[0];
    return [prop, get(prop)];
  });
  var setProps = (p) => p.forEach((_ref3) => {
    var _ref4 = _slicedToArray5(_ref3, 2), prop = _ref4[0], value = _ref4[1];
    return _set(prop, value);
  });
  setProps(context);
  try {
    callback();
  } finally {
    setProps(previous);
  }
}
function withEquipment(callback, equips) {
  var previous = equips.map((_ref5) => {
    var _ref6 = _slicedToArray5(_ref5, 1), slot = _ref6[0];
    return [slot, (0, import_kolmafia13.equippedItem)(slot)];
  });
  var equipAll = (o) => o.forEach((_ref7) => {
    var _ref8 = _slicedToArray5(_ref7, 2), slot = _ref8[0], item4 = _ref8[1];
    return (0, import_kolmafia13.equip)(slot, item4);
  });
  equipAll(equips);
  try {
    callback();
  } finally {
    equipAll(previous);
  }
}

// src/batfellow.ts
var _templateObject31;
var _templateObject211;
var _templateObject35;
function _taggedTemplateLiteral8(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
var choiceAdventures = [
  [1133, 1],
  [1134, 1],
  [1135, 0],
  [1136, 0],
  [1137, 0],
  [1138, 0],
  [1139, 0]
].map((_ref) => {
  var _ref2 = _slicedToArray6(_ref, 2), id = _ref2[0], value = _ref2[1];
  return ["choiceAdventure".concat(id), value];
});
function batfellow() {
  withContext(runBatfellow, choiceAdventures);
}
function runBatfellow() {
  var comic = $item(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral8(["Batfellow comic"])));
  if ((0, import_kolmafia14.itemAmount)(comic) < 1 && !(0, import_kolmafia14.takeStorage)(1, comic))
    throw "Missing batfellow comic?";
  new Macro().skill($skill(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral8(["Bat-Kick"])))).setAutoAttack();
  (0, import_kolmafia14.use)(1, comic);
  (0, import_kolmafia14.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
  for (var _i2 = 0, _arr2 = [1, 3, 11, 2, 1, 11, 3, 4, 11, 6]; _i2 < _arr2.length; _i2++) {
    var c = _arr2[_i2];
    (0, import_kolmafia14.runChoice)(c);
  }
  (0, import_kolmafia14.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_car");
  (0, import_kolmafia14.runChoice)(5);
  while (get("batmanTimeLeft") >= 4) {
    (0, import_kolmafia14.visitUrl)((0, import_kolmafia14.toUrl)($location(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral8(["Center Park After Dark"])))));
  }
  (0, import_kolmafia14.visitUrl)("place.php?whichplace=batman_park&action=batman_park_car");
  (0, import_kolmafia14.runChoice)(9);
  (0, import_kolmafia14.setAutoAttack)(0);
}

// src/config.ts
var import_kolmafia15 = require("kolmafia");
var _templateObject36;
var _Map$get;
var _templateObject212;
var _templateObject37;
var _templateObject44;
var _templateObject54;
var _templateObject64;
var _templateObject73;
var _templateObject83;
function _taggedTemplateLiteral9(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var MAIN_CLAN = (0, import_kolmafia15.getProperty)("seventyhccs_main_clan");
var FAX_AND_SLIME_CLAN = (0, import_kolmafia15.getProperty)("seventyhccs_side_clan");
var FORTUNE_TELLER_FRIEND = (0, import_kolmafia15.getProperty)("seventyhccs_fortune_friend");
var STILLSUIT_FAMILIAR = (0, import_kolmafia15.toFamiliar)((0, import_kolmafia15.getProperty)("seventyhccs_stillsuit_target"));
var BRICKO_TARGET_ITEM = $item(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral9(["BRICKO bat"])));
var BRICKOS_PER_FIGHT = (_Map$get = (/* @__PURE__ */ new Map([[$item(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral9(["BRICKO ooze"]))), 2], [$item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral9(["BRICKO bat"]))), 5], [$item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral9(["BRICKO oyster"]))), 8], [$item(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral9(["BRICKO turtle"]))), 11], [$item(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral9(["BRICKO elephant"]))), 23], [$item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral9(["BRICKO octopus"]))), 37], [$item(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral9(["BRICKO python"]))), 69]])).get(BRICKO_TARGET_ITEM)) !== null && _Map$get !== void 0 ? _Map$get : 9999;
var MEAT_SAFE_LIMIT = 2e3;
var MP_SAFE_LIMIT = 500;

// src/diet.ts
var import_kolmafia16 = require("kolmafia");
var _templateObject38;
var _templateObject213;
var _templateObject39;
var _templateObject45;
var _templateObject55;
var _templateObject65;
var _templateObject74;
var _templateObject84;
var _templateObject93;
var _templateObject103;
var _templateObject114;
var _templateObject123;
var _templateObject133;
var _templateObject143;
var _templateObject152;
var _templateObject162;
var _templateObject172;
var _templateObject182;
var _templateObject192;
var _templateObject202;
var _templateObject214;
var _templateObject223;
var _templateObject233;
var _templateObject243;
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
var _templateObject362;
var _templateObject372;
var _templateObject382;
var _templateObject392;
var _templateObject40;
var _templateObject41;
var _templateObject422;
var _templateObject432;
var _templateObject442;
var _templateObject452;
var _templateObject46;
var _templateObject47;
var _templateObject48;
var _templateObject49;
var _templateObject50;
var _templateObject51;
var _templateObject522;
var _templateObject532;
var _templateObject542;
var _templateObject552;
var _templateObject56;
var _templateObject57;
var _templateObject58;
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper5(o, allowArrayLike) {
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
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _iterableToArray4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _taggedTemplateLiteral10(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var recipes = /* @__PURE__ */ new Map([[$item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral10(["bugged balaclava"]))), () => {
  (0, import_kolmafia16.useFamiliar)($familiar(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral10(["Baby Bugged Bugbear"]))));
  (0, import_kolmafia16.visitUrl)("arena.php");
  (0, import_kolmafia16.cliExecute)("fold ".concat($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral10(["bugged balaclava"])))));
}], [$item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral10(["blood-faced volleyball"]))), () => {
  (0, import_kolmafia16.retrieveItem)($item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral10(["seal tooth"]))));
  (0, import_kolmafia16.retrieveItem)($item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral10(["volleyball"]))));
  acquireEffect($effect(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral10(["Bloody Hand"]))));
  (0, import_kolmafia16.use)($item(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral10(["volleyball"]))));
}], [$item(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral10(["cog and sprocket assembly"]))), () => (0, import_kolmafia16.cliExecute)("make ".concat($item(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral10(["cog and sprocket assembly"])))))], [$item(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral10(["dripping meat crossbow"]))), () => {
  (0, import_kolmafia16.retrieveItem)($item(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral10(["catsup"]))));
  (0, import_kolmafia16.cliExecute)("make ".concat($item(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral10(["dripping meat crossbow"])))));
}], [$item(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral10(["hot buttered roll"]))), () => (0, import_kolmafia16.retrieveItem)($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral10(["hot buttered roll"]))))], [$item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral10(["perfect dark and stormy"]))), () => (0, import_kolmafia16.cliExecute)("make ".concat($item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral10(["perfect dark and stormy"])))))], [$item(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral10(["sprocket assembly"]))), () => (0, import_kolmafia16.cliExecute)("make ".concat($item(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral10(["sprocket assembly"])))))], [$item(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral10(["ravioli hat"]))), () => (0, import_kolmafia16.retrieveItem)($item(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral10(["ravioli hat"]))))], [$item(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral10(["repeating crossbow"]))), () => (0, import_kolmafia16.cliExecute)("make ".concat($item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral10(["repeating crossbow"])))))], [$item(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral10(["turtle totem"]))), () => (0, import_kolmafia16.retrieveItem)($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral10(["turtle totem"]))))], [$item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral10(["useless powder"]))), () => {
  (0, import_kolmafia16.retrieveItem)($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral10(["tenderizing hammer"]))));
  (0, import_kolmafia16.retrieveItem)($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral10(["cool whip"]))));
  (0, import_kolmafia16.cliExecute)("pulverize ".concat($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral10(["cool whip"])))));
}], [$item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral10(["wooden figurine"]))), () => (0, import_kolmafia16.retrieveItem)($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral10(["wooden figurine"]))))]]);
var diabolicPizzas = {
  1: {
    effect: $effect(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral10(["Spit Upon"]))),
    equip: void 0,
    familiar: $familiar(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral10(["Peppermint Rhino"]))),
    ingredients: tuple($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral10(["sprocket assembly"]))), $item(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral10(["perfect dark and stormy"]))), $item(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral10(["ironic moustache"]))), $item(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral10(["turtle totem"]))))
  },
  2: {
    effect: $effect(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral10(["Bureaucratized"]))),
    equip: $item(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral10(["Pocket Professor memory chip"]))),
    familiar: $familiar(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral10(["Pocket Professor"]))),
    ingredients: tuple($item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral10(["bugged balaclava"]))), $item(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral10(["useless powder"]))), $item(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral10(["ravioli hat"]))), $item(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral10(["eyedrops of the ermine"]))))
  },
  3: {
    effect: $effect(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral10(["Down With Chow"]))),
    equip: $item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral10(["cracker"]))),
    familiar: $familiar(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral10(["Exotic Parrot"]))),
    ingredients: tuple($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral10(["dripping meat crossbow"]))), $item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral10(["ointment of the occult"]))), $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral10(["wooden figurine"]))), $item(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral10(["blood-faced volleyball"]))))
  },
  4: {
    effect: $effect(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral10(["Chorale of Companionship"]))),
    equip: void 0,
    familiar: void 0,
    ingredients: tuple($item(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral10(["cog and sprocket assembly"]))), $item(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral10(["hot buttered roll"]))), $item(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral10(["ointment of the occult"]))), $item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral10(["repeating crossbow"]))))
  }
};
function eatPizzas() {
  var followRecipe = (ingredient) => {
    if (!have(ingredient)) {
      var recipe = recipes.get(ingredient);
      if (!recipe)
        throw "Missing recipe for ".concat(ingredient);
      recipe();
    }
  };
  for (var _i = 0, _Object$values = Object.values(diabolicPizzas); _i < _Object$values.length; _i++) {
    var pizza = _Object$values[_i];
    if (!have(pizza.effect)) {
      pizza.ingredients.forEach(followRecipe);
      pizza.ingredients.forEach(followRecipe);
      if (pizza.familiar)
        (0, import_kolmafia16.useFamiliar)(pizza.familiar);
      cookPizza.apply(void 0, _toConsumableArray4(pizza.ingredients));
      (0, import_kolmafia16.eat)($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral10(["diabolic pizza"]))));
      if (pizza.equip)
        (0, import_kolmafia16.equip)($slot(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral10(["familiar"]))), pizza.equip);
    }
  }
}
function cookPizza(a, b, c, d) {
  var counts = /* @__PURE__ */ new Map();
  [a, b, c, d].forEach((f) => {
    var _counts$get;
    return counts.set(f, 1 + ((_counts$get = counts.get(f)) !== null && _counts$get !== void 0 ? _counts$get : 0));
  });
  var _iterator = _createForOfIteratorHelper5(counts), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray7(_step.value, 2), item4 = _step$value[0], count = _step$value[1];
      checkAvailable(item4, count);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0, import_kolmafia16.visitUrl)("campground.php?action=makepizza&pizza=".concat((0, import_kolmafia16.toInt)(a), ",").concat((0, import_kolmafia16.toInt)(b), ",").concat((0, import_kolmafia16.toInt)(c), ",").concat((0, import_kolmafia16.toInt)(d)));
}

// src/events.ts
var import_kolmafia20 = require("kolmafia");

// src/combat.ts
var import_kolmafia17 = require("kolmafia");
var _templateObject59;
var _templateObject215;
var _templateObject310;
var _templateObject410;
var _templateObject510;
var _templateObject66;
var _templateObject75;
var _templateObject85;
var _templateObject94;
var _templateObject104;
var _templateObject115;
var _templateObject124;
var _templateObject134;
var _templateObject144;
var _templateObject153;
var _templateObject163;
var _templateObject173;
var _templateObject183;
var _templateObject193;
var _templateObject203;
var _templateObject216;
var _templateObject224;
var _templateObject234;
var _templateObject244;
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
var _templateObject363;
var _templateObject373;
var _templateObject383;
var _templateObject393;
var _templateObject402;
var _templateObject412;
var _templateObject423;
var _templateObject433;
var _templateObject443;
var _templateObject453;
var _templateObject462;
var _templateObject472;
var _templateObject482;
var _templateObject492;
var _templateObject502;
var _templateObject512;
var _templateObject523;
var _templateObject533;
var _templateObject543;
var _templateObject553;
var _templateObject562;
var _templateObject572;
var _templateObject582;
var _templateObject592;
var _templateObject60;
var _templateObject61;
var _templateObject622;
var _templateObject632;
var _templateObject642;
var _templateObject652;
var _templateObject662;
var _templateObject67;
var _templateObject68;
var _templateObject69;
var _templateObject70;
var _templateObject71;
var _templateObject722;
var _templateObject732;
var _templateObject742;
var _templateObject752;
var _templateObject76;
var _templateObject77;
var _templateObject78;
var _templateObject79;
var _templateObject80;
var _templateObject81;
var _templateObject822;
var _templateObject832;
var _templateObject842;
var _templateObject852;
var _templateObject86;
var _templateObject87;
var _templateObject88;
var _templateObject89;
var _templateObject90;
var _templateObject91;
var _templateObject922;
var _templateObject932;
var _templateObject942;
var _templateObject95;
var _templateObject96;
var _templateObject97;
var _templateObject98;
var _templateObject99;
var _templateObject100;
var _templateObject101;
var _templateObject1022;
var _templateObject1032;
var _templateObject1042;
var _templateObject105;
var _templateObject106;
var _templateObject107;
var _templateObject108;
var _templateObject109;
var _templateObject110;
var _templateObject111;
var _templateObject1122;
var _templateObject1132;
var _templateObject1142;
var _templateObject1152;
var _templateObject116;
var _templateObject117;
var _templateObject118;
var _templateObject119;
var _templateObject120;
var _templateObject121;
var _templateObject1222;
var _templateObject1232;
var _templateObject1242;
var _templateObject125;
var _templateObject126;
var _templateObject127;
var _templateObject128;
var _templateObject129;
var _templateObject130;
var _templateObject131;
var _templateObject1322;
function _taggedTemplateLiteral11(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var amateurNinja = $monster(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral11(["amateur ninja"]))).id;
var noveltySkeleton = $monster(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral11(["novelty tropical skeleton"]))).id;
var mastiff = $monster(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral11(["toothless mastiff bitch"]))).id;
var gentrifier = $monster(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral11(["gingerbread gentrifier"]))).id;
var toxicBeastie = $monster(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral11(["toxic beastie"]))).id;
var LOVEnforcer = $monster(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral11(["LOV Enforcer"]))).id;
var LOVEngineer = $monster(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral11(["LOV Engineer"]))).id;
var DMTSquare = $monster(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral11(["Performer of Actions"]))).id;
var DMTCircle = $monster(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral11(["Thinker of Thoughts"]))).id;
var notAllowList = [
  $monster(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral11(["sausage goblin"]))),
  $monster(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral11(["boneless blobghost"]))),
  $monster(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral11(["Emily Koops, a spooky lime"]))),
  $monster(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral11(["The ghost of Ebenoozer Screege"]))),
  $monster(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral11(["The ghost of Jim Unfortunato"]))),
  $monster(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral11(["The ghost of Lord Montague Spookyraven"]))),
  $monster(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral11(["the ghost of Monsieur Baguelle"]))),
  $monster(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral11(["the ghost of Oily McBindle"]))),
  $monster(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral11(["The ghost of Richard Cockingham"]))),
  $monster(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral11(["The ghost of Sam McGee"]))),
  $monster(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral11(['The ghost of Vanillica "Trashblossom" Gorton']))),
  $monster(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral11(["The ghost of Waldo the Carpathian"]))),
  $monster(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral11(["The Headless Horseman"]))),
  $monster(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral11(["The Icewoman"]))),
  $monster(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral11(["amateur ninja"]))),
  $monster(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral11(["novelty tropical skeleton"]))),
  $monster(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral11(["toothless mastiff bitch"]))),
  $monster(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral11(["cocktail shrimp"]))),
  $monster(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral11(["mutant circuit-soldering elf"]))),
  $monster(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral11(["pterodactyl"]))),
  $monster(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral11(["gingerbread finance bro"]))),
  $monster(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral11(["gingerbread gentrifier"]))),
  $monster(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral11(["gingerbread tech bro"]))),
  $monster(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral11(["LOV Enforcer"]))),
  $monster(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral11(["LOV Engineer"]))),
  $monster(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral11(["LOV Equivocator"]))),
  $monster(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral11(["Witchess Pawn"]))),
  $monster(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral11(["Witchess Knight"]))),
  $monster(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral11(["Witchess Bishop"]))),
  $monster(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral11(["Witchess Rook"]))),
  $monster(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral11(["Witchess Ox"]))),
  $monster(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral11(["Witchess King"]))),
  $monster(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral11(["Witchess Witch"]))),
  $monster(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral11(["Witchess Queen"]))),
  $monster(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral11(["Eldritch Tentacle"]))),
  $monster(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral11(["Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl"]))),
  $monster(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral11(["God Lobster"]))),
  $monster(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral11(["X-32-F Combat Training Snowman"]))),
  $monster(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral11(["BRICKO ooze"]))),
  $monster(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral11(["BRICKO bat"]))),
  $monster(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral11(["BRICKO oyster"]))),
  $monster(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral11(["BRICKO turtle"]))),
  $monster(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral11(["BRICKO elephant"]))),
  $monster(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral11(["BRICKO octopus"]))),
  $monster(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral11(["BRICKO python"]))),
  $monster(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral11(["angry ghost"]))),
  $monster(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral11(["annoyed snake"]))),
  $monster(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral11(["government bureaucrat"]))),
  $monster(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral11(["slime blob"]))),
  $monster(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral11(["terrible mutant"]))),
  $monster(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral11(["Performer of Actions"]))),
  $monster(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral11(["Thinker of Thoughts"]))),
  $monster(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral11(["biker"]))),
  $monster(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral11(["burnout"]))),
  $monster(_templateObject642 || (_templateObject642 = _taggedTemplateLiteral11(["jock"]))),
  $monster(_templateObject652 || (_templateObject652 = _taggedTemplateLiteral11(["party girl"]))),
  $monster(_templateObject662 || (_templateObject662 = _taggedTemplateLiteral11(['"plain" girl']))),
  $monster(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral11(["Mother Slime"]))),
  $monster(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral11(["toxic beastie"]))),
  $monster(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral11(["Black Crayon Slime"])))
].map((m) => "!monsterid ".concat(m.id)).join(" && ");
var Ghost = new Macro().skill($skill(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral11(["Summon Love Gnats"])))).skill($skill(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral11(["Sing Along"])))).skill($skill(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral11(["Shoot Ghost"])))).skill($skill(_templateObject732 || (_templateObject732 = _taggedTemplateLiteral11(["Shoot Ghost"])))).skill($skill(_templateObject742 || (_templateObject742 = _taggedTemplateLiteral11(["Shoot Ghost"])))).skill($skill(_templateObject752 || (_templateObject752 = _taggedTemplateLiteral11(["Trap Ghost"])))).abort();
var TryBanish = new Macro().trySkill($skill(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral11(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral11(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral11(["Reflex Hammer"])))).trySkill($skill(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral11(["Bowl a Curveball"])))).trySkill($skill(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral11(["Feel Hatred"])))).abort();
var Replace = new Macro().skill($skill(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral11(["Macrometeorite"]))));
var Backup = new Macro().if_("hasskill ".concat((0, import_kolmafia17.toInt)($skill(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral11(["Back-Up to your Last Enemy"]))))), Macro.skill($skill(_templateObject832 || (_templateObject832 = _taggedTemplateLiteral11(["Back-Up to your Last Enemy"])))).skill($skill(_templateObject842 || (_templateObject842 = _taggedTemplateLiteral11(["Saucy Salve"])))));
var Pride = new Macro().if_("hasskill ".concat((0, import_kolmafia17.toInt)($skill(_templateObject852 || (_templateObject852 = _taggedTemplateLiteral11(["Turbo"]))))), Macro.trySkill($skill(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral11(["Feel Pride"])))));
var FreeInstaKill = new Macro().skill($skill(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral11(["Sing Along"])))).step(Pride).trySkill($skill(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral11(["Chest X-Ray"])))).trySkill($skill(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral11(["Shattering Punch"])))).trySkill($skill(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral11(["Gingerbread Mob Hit"])))).trySkill($skill(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral11(["Shocking Lick"])))).abort();
var SingAndKill = new Macro().skill($skill(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral11(["Sing Along"])))).step(Pride).while_("!mpbelow ".concat((0, import_kolmafia17.mpCost)($skill(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral11(["Saucestorm"]))))), Macro.skill($skill(_templateObject942 || (_templateObject942 = _taggedTemplateLiteral11(["Saucestorm"]))))).attack().repeat();
var DefaultMacro = new Macro().if_("hasskill ".concat((0, import_kolmafia17.toInt)($skill(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral11(["Shoot Ghost"]))))), Ghost).if_("monsterid ".concat(toxicBeastie), Backup).if_("monsterid ".concat(toxicBeastie), Macro.skill($skill(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral11(["Summon Love Gnats"])))).step(FreeInstaKill)).if_("monsterid ".concat(amateurNinja), FreeInstaKill).if_("monsterid ".concat(noveltySkeleton), Macro.trySkill($skill(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral11(["Open a Big Red Present"])))).skill($skill(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral11(["Use the Force"]))))).if_("monsterid ".concat(mastiff), Macro.skill($skill(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral11(["Meteor Shower"])))).skill($skill(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral11(["Use the Force"]))))).if_(notAllowList, TryBanish).skill($skill(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral11(["Curse of Weaksauce"])))).skill($skill(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral11(["Micrometeorite"])))).item($item(_templateObject1032 || (_templateObject1032 = _taggedTemplateLiteral11(["Time-Spinner"])))).if_("hasskill ".concat((0, import_kolmafia17.toInt)($skill(_templateObject1042 || (_templateObject1042 = _taggedTemplateLiteral11(["lecture on relativity"]))))), Macro.skill($skill(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral11(["lecture on relativity"])))).skill($skill(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral11(["Saucy Salve"]))))).if_("hasskill ".concat((0, import_kolmafia17.toInt)($skill(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral11(["Bowl Straight Up"])))), " && !haseffect ").concat((0, import_kolmafia17.toInt)($effect(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral11(["Cosmic Ball in the Air"]))))), Macro.skill($skill(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral11(["Bowl Straight Up"]))))).step(SingAndKill);
var MacroList = {
  FreeFight: DefaultMacro,
  FastFreeFight: SingAndKill,
  StenchFreeFight: new Macro().if_("monsterid ".concat(toxicBeastie), Backup).if_("monsterid ".concat(toxicBeastie), Macro.abort()).if_("monsterhpabove 300", Macro.skill($skill(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral11(["Curse of Weaksauce"]))))).if_("monsterhpabove 300", Macro.skill($skill(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral11(["Sing Along"]))))).skill($skill(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral11(["Garbage Nova"])))),
  Runaway: new Macro().trySkill($skill(_templateObject1132 || (_templateObject1132 = _taggedTemplateLiteral11(["Saucy Salve"])))).runaway(),
  Banish: TryBanish,
  Nanobrainy: new Macro().skill($skill(_templateObject1142 || (_templateObject1142 = _taggedTemplateLiteral11(["Entangling Noodles"])))).trySkill($skill(_templateObject1152 || (_templateObject1152 = _taggedTemplateLiteral11(["Giant Growth"])))).trySkill($skill(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral11(["Become a Wolf"])))).step(TryBanish),
  Sprinkles: new Macro().if_("monsterid ".concat(gentrifier), Replace).skill($skill(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral11(["Meteor Shower"])))).step(FreeInstaKill),
  TunnelOfLOV: new Macro().if_("monsterid ".concat(LOVEnforcer), Macro.attack().repeat()).if_("monsterid ".concat(LOVEngineer), Macro.skill($skill(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral11(["Candyblast"])))).repeat()).step(DefaultMacro),
  WitchessQueen: new Macro().item($item(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral11(["Time-Spinner"])))).attack().repeat(),
  WitchessWitch: new Macro().skill($skill(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral11(["Curse of Weaksauce"])))).skill($skill(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral11(["Sing Along"])))).attack().repeat(),
  DMTSquare: new Macro().if_(notAllowList, Macro.abort()).if_("!monsterid ".concat(DMTSquare), Replace).skill($skill(_templateObject1222 || (_templateObject1222 = _taggedTemplateLiteral11(["Feel Envy"])))).step(DefaultMacro),
  DMTCircle: new Macro().if_(notAllowList, Macro.abort()).if_("!monsterid ".concat(DMTCircle), Replace).tryItem($item(_templateObject1232 || (_templateObject1232 = _taggedTemplateLiteral11(["abstraction: action"])))).step(DefaultMacro),
  MotherSlime: new Macro().if_(notAllowList, Macro.abort()).trySkill($skill(_templateObject1242 || (_templateObject1242 = _taggedTemplateLiteral11(["KGB tranquilizer dart"])))).skill($skill(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral11(["Snokebomb"])))),
  BatFormRunaway: new Macro().trySkill($skill(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral11(["Become a Bat"])))).runaway(),
  LatteGulpRunaway: new Macro().trySkill($skill(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral11(["Gulp Latte"])))).runaway(),
  MeteorForce: new Macro().skill($skill(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral11(["Meteor Shower"])))).skill($skill(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral11(["Use the Force"])))),
  FoamForce: new Macro().skill($skill(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral11(["Fire Extinguisher: Foam Yourself"])))).skill($skill(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral11(["Use the Force"]))))
};
function adventure(loc, macro) {
  if ((0, import_kolmafia17.getAutoAttack)() !== 0)
    (0, import_kolmafia17.setAutoAttack)(0);
  (0, import_kolmafia17.adv1)(loc, 0, macro.toString());
  while ((0, import_kolmafia17.inMultiFight)()) {
    (0, import_kolmafia17.runCombat)(macro.toString());
  }
  if ((0, import_kolmafia17.choiceFollowsFight)())
    (0, import_kolmafia17.visitUrl)("choice.php");
  if ((0, import_kolmafia17.handlingChoice)())
    (0, import_kolmafia17.runChoice)(-1);
}
function adventureUrl(url, macro) {
  if ((0, import_kolmafia17.getAutoAttack)() !== 0)
    (0, import_kolmafia17.setAutoAttack)(0);
  (0, import_kolmafia17.visitUrl)(url);
  (0, import_kolmafia17.runCombat)(macro.toString());
  if ((0, import_kolmafia17.choiceFollowsFight)())
    (0, import_kolmafia17.visitUrl)("choice.php");
  if ((0, import_kolmafia17.handlingChoice)())
    (0, import_kolmafia17.runChoice)(-1);
}
function mapMonster(location, monster, macro) {
  if ((0, import_kolmafia17.getAutoAttack)() !== 0)
    (0, import_kolmafia17.setAutoAttack)(0);
  if (get("_monstersMapped") >= 3)
    throw "Trying to map too many monsters";
  if (!get("mappingMonsters"))
    (0, import_kolmafia17.useSkill)($skill(_templateObject1322 || (_templateObject1322 = _taggedTemplateLiteral11(["Map the Monsters"]))));
  var expectedTurnCount = (0, import_kolmafia17.myTurncount)();
  var mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = (0, import_kolmafia17.visitUrl)((0, import_kolmafia17.toUrl)(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/))
      (0, import_kolmafia17.runCombat)(macro.toString());
    if ((0, import_kolmafia17.myTurncount)() > expectedTurnCount)
      throw "Wasted a turn somehow mapping monsters?";
  }
  (0, import_kolmafia17.visitUrl)("choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
  (0, import_kolmafia17.runCombat)(macro.toString());
  if ((0, import_kolmafia17.choiceFollowsFight)())
    (0, import_kolmafia17.visitUrl)("choice.php");
  if ((0, import_kolmafia17.handlingChoice)())
    (0, import_kolmafia17.runChoice)(-1);
  if (get("mappingMonsters"))
    throw "Failed to unset map the monsters?";
}
function fightWitchess(piece, macro) {
  macro.setAutoAttack();
  Witchess_exports.fightPiece(piece);
  if ((0, import_kolmafia17.choiceFollowsFight)())
    (0, import_kolmafia17.visitUrl)("choice.php");
  if ((0, import_kolmafia17.handlingChoice)())
    (0, import_kolmafia17.runChoice)(-1);
}

// src/iotms.ts
var import_kolmafia18 = require("kolmafia");
var _templateObject135;
var _templateObject217;
var _templateObject311;
var _templateObject411;
var _templateObject511;
var _templateObject610;
var _templateObject710;
var _templateObject810;
var _templateObject910;
var _templateObject1010;
var _templateObject1110;
var _templateObject1210;
var _templateObject136;
var _templateObject145;
var _templateObject154;
var _templateObject164;
var _templateObject174;
var _templateObject184;
var _templateObject194;
var _templateObject204;
var _templateObject218;
var _templateObject225;
var _templateObject235;
var _templateObject245;
var _templateObject254;
var _templateObject264;
var _templateObject274;
var _templateObject284;
var _templateObject294;
var _templateObject304;
var _templateObject314;
var _templateObject324;
var _templateObject334;
var _templateObject344;
var _templateObject354;
var _templateObject364;
var _templateObject374;
function _taggedTemplateLiteral12(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function castBestLibram() {
  var wantGreenCandy = !have($item(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral12(["green candy heart"])))) && !have($effect(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral12(["Heart of Green"]))));
  var brickosOwned = (0, import_kolmafia18.itemAmount)(BRICKO_TARGET_ITEM);
  var brickosNeeded = BRICKOS_PER_FIGHT * Math.max(0, 3 - (get("_brickoFights") + brickosOwned));
  if (wantGreenCandy && get("libramSummons") < 10) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral12(["Summon Candy Heart"]))));
  } else if (get("_brickoEyeSummons") < 3 || !have($item(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral12(["BRICKO brick"]))), brickosNeeded)) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral12(["Summon BRICKOs"]))));
  } else if (wantGreenCandy) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral12(["Summon Candy Heart"]))));
  } else if (!have($item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral12(["love song of icy revenge"]))), 2)) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral12(["Summon Love Song"]))));
  } else if (get("_resolutionRareSummons") < 3) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral12(["Summon Resolutions"]))));
  } else if (!have($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral12(["pulled blue taffy"]))), 4)) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral12(["Summon Taffy"]))));
  } else if (!have($item(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral12(["love song of icy revenge"]))), 4)) {
    (0, import_kolmafia18.useSkill)($skill(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral12(["Summon Love Song"]))));
  } else {
    (0, import_kolmafia18.useSkill)($skill(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral12(["Summon Resolutions"]))));
  }
}
function getPantogramPants() {
  if (!have($item(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral12(["portable pantogram"])))) || have($item(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral12(["pantogram pants"])))))
    return;
  var m = (/* @__PURE__ */ new Map([[$stat(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral12(["Muscle"]))), 1], [$stat(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral12(["Mysticality"]))), 2], [$stat(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral12(["Moxie"]))), 3]])).get((0, import_kolmafia18.myPrimestat)());
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
  (0, import_kolmafia18.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0, import_kolmafia18.toInt)($item(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral12(["portable pantogram"]))))));
  (0, import_kolmafia18.visitUrl)("choice.php?pwd=&whichchoice=1270&option=1&m=".concat(m, "&e=").concat(e, "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3));
  if (!have($item(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral12(["pantogram pants"])))))
    throw "Failed to create pantogram pants";
}
function harvestBatteries() {
  (0, import_kolmafia18.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0, import_kolmafia18.toInt)($item(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral12(["potted power plant"]))))));
  for (var i = 0; i < 7; i++) {
    (0, import_kolmafia18.visitUrl)("choice.php?pwd=&whichchoice=1448&option=1&pp=".concat(i + 1));
  }
}
function scavengeDaycare() {
  (0, import_kolmafia18.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!get("_daycareNap"))
    (0, import_kolmafia18.runChoice)(1);
  if (get("_daycareGymScavenges") < 1) {
    (0, import_kolmafia18.runChoice)(3);
    (0, import_kolmafia18.runChoice)(2);
  }
}
function spendAllMpOnLibrams() {
  while ((0, import_kolmafia18.myMp)() > (0, import_kolmafia18.mpCost)($skill(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral12(["Summon BRICKOs"]))))) {
    castBestLibram();
  }
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
  (0, import_kolmafia18.visitUrl)("inv_use.php?whichitem=".concat((0, import_kolmafia18.toInt)($item(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral12(["hewn moon-rune spoon"])))), "&doit=96&whichsign=").concat(moon));
}
function useDroppedItems() {
  (/* @__PURE__ */ new Map([[$item(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral12(["pulled violet taffy"]))), 50]])).forEach((limit, multiUse) => {
    if (have(multiUse) && !have(itemToEffect(multiUse), limit))
      (0, import_kolmafia18.use)((0, import_kolmafia18.itemAmount)(multiUse), multiUse);
  });
  [
    $item(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral12(["green candy heart"]))),
    $item(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral12(["pulled yellow taffy"]))),
    $item(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral12(["resolution: be feistier"]))),
    $item(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral12(["resolution: be happier"]))),
    $item(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral12(["resolution: be kinder"]))),
    $item(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral12(["resolution: be luckier"]))),
    $item(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral12(["resolution: be smarter"]))),
    $item(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral12(["resolution: be wealthier"]))),
    $item(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral12(["power pill"]))),
    $item(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral12(["short stack of pancakes"])))
  ].forEach((singleUse) => {
    if (have(singleUse) && !have(itemToEffect(singleUse)))
      (0, import_kolmafia18.use)(singleUse);
  });
}
function vote() {
  if ((0, import_kolmafia18.myClass)() !== $class(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral12(["Sauceror"]))))
    throw "Don't yet know how to run this as a ".concat((0, import_kolmafia18.myClass)());
  (0, import_kolmafia18.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  (0, import_kolmafia18.visitUrl)("choice.php?pwd=&option=1&whichchoice=1331&g=2&local[]=1&local[]=3");
  if (!have($item(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral12(['"I Voted!" sticker'])))))
    throw "Voting failed";
}

// src/quests.ts
var import_kolmafia19 = require("kolmafia");
var _templateObject137;
var _templateObject219;
var _templateObject315;
var _templateObject413;
var _templateObject513;
var _templateObject611;
var _templateObject711;
var _templateObject811;
var _templateObject911;
var _templateObject1011;
var _templateObject1111;
var _templateObject1211;
var _templateObject138;
var _templateObject146;
var _templateObject155;
var _templateObject165;
var _templateObject175;
var _templateObject185;
var _templateObject195;
var _templateObject205;
var _templateObject2110;
var _templateObject226;
var _templateObject236;
var _templateObject246;
var _templateObject255;
var _templateObject265;
var _templateObject275;
var _templateObject285;
var _templateObject295;
var _templateObject305;
var _templateObject316;
var _templateObject325;
var _templateObject335;
var _templateObject345;
var _templateObject355;
var _templateObject365;
var _templateObject375;
var _templateObject384;
var _templateObject394;
var _templateObject403;
var _templateObject414;
var _templateObject424;
var _templateObject434;
var _templateObject444;
var _templateObject454;
var _templateObject463;
var _templateObject473;
var _templateObject483;
var _templateObject493;
var _templateObject503;
var _templateObject514;
var _templateObject524;
var _templateObject534;
var _templateObject544;
var _templateObject554;
var _templateObject563;
var _templateObject573;
var _templateObject583;
var _templateObject593;
var _templateObject602;
var _templateObject612;
var _templateObject623;
var _templateObject633;
var _templateObject643;
var _templateObject653;
var _templateObject663;
var _templateObject672;
var _templateObject682;
var _templateObject692;
var _templateObject702;
var _templateObject712;
var _templateObject723;
var _templateObject733;
var _templateObject743;
var _templateObject753;
var _templateObject762;
var _templateObject772;
var _templateObject782;
var _templateObject792;
var _templateObject802;
var _templateObject812;
var _templateObject823;
var _templateObject833;
var _templateObject843;
var _templateObject853;
var _templateObject862;
var _templateObject872;
var _templateObject882;
var _templateObject892;
var _templateObject902;
var _templateObject912;
var _templateObject923;
var _templateObject933;
var _templateObject943;
var _templateObject952;
var _templateObject962;
var _templateObject972;
var _templateObject982;
var _templateObject992;
var _templateObject1002;
var _templateObject1012;
var _templateObject1023;
var _templateObject1033;
var _templateObject1043;
var _templateObject1052;
var _templateObject1062;
var _templateObject1072;
var _templateObject1082;
var _templateObject1092;
var _templateObject1102;
var _templateObject1112;
var _templateObject1123;
var _templateObject1133;
var _templateObject1143;
var _templateObject1153;
var _templateObject1162;
var _templateObject1172;
var _templateObject1182;
var _templateObject1192;
var _templateObject1202;
var _templateObject1212;
var _templateObject1223;
var _templateObject1233;
var _templateObject1243;
var _templateObject1252;
var _templateObject1262;
var _templateObject1272;
var _templateObject1282;
var _templateObject1292;
var _templateObject1302;
var _templateObject1312;
var _templateObject1323;
var _templateObject1332;
var _templateObject1342;
var _templateObject1352;
var _templateObject1362;
var _templateObject1372;
var _templateObject1382;
var _templateObject139;
var _templateObject140;
var _templateObject141;
var _templateObject1422;
var _templateObject1432;
var _templateObject1442;
var _templateObject1452;
var _templateObject1462;
var _templateObject147;
var _templateObject148;
var _templateObject149;
var _templateObject150;
var _templateObject151;
var _templateObject1522;
var _templateObject1532;
var _templateObject1542;
var _templateObject1552;
var _templateObject156;
var _templateObject157;
var _templateObject158;
var _templateObject159;
var _templateObject160;
var _templateObject161;
var _templateObject1622;
var _templateObject1632;
var _templateObject1642;
var _templateObject1652;
var _templateObject166;
var _templateObject167;
var _templateObject168;
var _templateObject169;
var _templateObject170;
var _templateObject171;
var _templateObject1722;
var _templateObject1732;
var _templateObject1742;
var _templateObject1752;
var _templateObject176;
var _templateObject177;
var _templateObject178;
var _templateObject179;
var _templateObject180;
var _templateObject181;
var _templateObject1822;
var _templateObject1832;
var _templateObject1842;
var _templateObject1852;
var _templateObject186;
var _templateObject187;
var _templateObject188;
var _templateObject189;
var _templateObject190;
var _templateObject191;
var _templateObject1922;
var _templateObject1932;
var _templateObject1942;
var _templateObject1952;
var _templateObject196;
var _templateObject197;
var _templateObject198;
var _templateObject199;
var _templateObject200;
var _templateObject201;
var _templateObject2022;
var _templateObject2032;
var _templateObject2042;
var _templateObject2052;
var _templateObject206;
var _templateObject207;
var _templateObject208;
var _templateObject209;
var _templateObject2102;
var _templateObject2112;
var _templateObject2122;
var _templateObject2132;
var _templateObject2142;
var _templateObject2152;
var _templateObject2162;
var _templateObject2172;
var _templateObject2182;
var _templateObject2192;
var _templateObject220;
var _templateObject221;
var _templateObject2222;
var _templateObject2232;
var _templateObject2242;
var _templateObject2252;
var _templateObject2262;
var _templateObject227;
var _templateObject228;
var _templateObject229;
var _templateObject230;
var _templateObject231;
var _templateObject2322;
var _templateObject2332;
var _templateObject2342;
var _templateObject2352;
var _templateObject2362;
var _templateObject237;
var _templateObject238;
var _templateObject239;
var _templateObject240;
var _templateObject241;
var _templateObject2422;
var _templateObject2432;
var _templateObject2442;
var _templateObject2452;
var _templateObject2462;
var _templateObject247;
var _templateObject248;
var _templateObject249;
var _templateObject250;
var _templateObject251;
var _templateObject2522;
var _templateObject2532;
var _templateObject2542;
var _templateObject2552;
var _templateObject256;
var _templateObject257;
var _templateObject258;
var _templateObject259;
var _templateObject260;
var _templateObject261;
var _templateObject2622;
var _templateObject2632;
var _templateObject2642;
var _templateObject2652;
var _templateObject266;
var _templateObject267;
var _templateObject268;
var _templateObject269;
var _templateObject270;
var _templateObject271;
var _templateObject2722;
var _templateObject2732;
var _templateObject2742;
var _templateObject2752;
var _templateObject276;
var _templateObject277;
var _templateObject278;
var _templateObject279;
var _templateObject280;
var _templateObject281;
var _templateObject2822;
var _templateObject2832;
var _templateObject2842;
var _templateObject2852;
var _templateObject286;
var _templateObject287;
var _templateObject288;
var _templateObject289;
var _templateObject290;
var _templateObject291;
var _templateObject2922;
var _templateObject2932;
var _templateObject2942;
var _templateObject2952;
var _templateObject296;
var _templateObject297;
var _templateObject298;
var _templateObject299;
var _templateObject300;
var _templateObject301;
var _templateObject3022;
var _templateObject3032;
var _templateObject3042;
var _templateObject3052;
var _templateObject306;
var _templateObject307;
var _templateObject308;
var _templateObject309;
var _templateObject3102;
var _templateObject3112;
var _templateObject3122;
var _templateObject3132;
var _templateObject3142;
var _templateObject3152;
var _templateObject3162;
var _templateObject317;
var _templateObject318;
var _templateObject319;
var _templateObject320;
var _templateObject321;
var _templateObject3222;
var _templateObject3232;
var _templateObject3242;
var _templateObject3252;
var _templateObject326;
var _templateObject327;
var _templateObject328;
var _templateObject329;
var _templateObject330;
var _templateObject331;
var _templateObject3322;
var _templateObject3332;
var _templateObject3342;
var _templateObject3352;
var _templateObject336;
var _templateObject337;
var _templateObject338;
var _templateObject339;
var _templateObject340;
var _templateObject341;
var _templateObject3422;
var _templateObject3432;
var _templateObject3442;
var _templateObject3452;
var _templateObject346;
var _templateObject347;
var _templateObject348;
var _templateObject349;
var _templateObject350;
var _templateObject351;
var _templateObject3522;
var _templateObject3532;
var _templateObject3542;
var _templateObject3552;
var _templateObject356;
var _templateObject357;
var _templateObject358;
var _templateObject359;
var _templateObject360;
var _templateObject361;
var _templateObject3622;
var _templateObject3632;
var _templateObject3642;
var _templateObject3652;
var _templateObject366;
var _templateObject367;
var _templateObject368;
var _templateObject369;
var _templateObject370;
var _templateObject371;
var _templateObject3722;
var _templateObject3732;
var _templateObject3742;
var _templateObject3752;
var _templateObject376;
var _templateObject377;
var _templateObject378;
var _templateObject379;
var _templateObject380;
var _templateObject381;
var _templateObject3822;
var _templateObject3832;
var _questRecords;
var _templateObject3842;
var _templateObject385;
var _templateObject386;
var _templateObject387;
var _templateObject388;
var _templateObject389;
var _templateObject390;
var _templateObject391;
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _taggedTemplateLiteral13(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Quest = {
  HP: {
    id: 1,
    service: "Donate Blood"
  },
  Muscle: {
    id: 2,
    service: "Feed The Children"
  },
  Mysticality: {
    id: 3,
    service: "Build Playground Mazes"
  },
  Moxie: {
    id: 4,
    service: "Feed Conspirators"
  },
  FamiliarWeight: {
    id: 5,
    service: "Breed More Collies"
  },
  WeaponDamage: {
    id: 6,
    service: "Reduce Gazelle Population"
  },
  SpellDamage: {
    id: 7,
    service: "Make Sausage"
  },
  CombatFrequency: {
    id: 8,
    service: "Be a Living Statue"
  },
  ItemDrop: {
    id: 9,
    service: "Make Margaritas"
  },
  HotResist: {
    id: 10,
    service: "Clean Steam Tunnels"
  },
  CoilWire: {
    id: 11,
    service: "Coil Wire"
  },
  Donate: {
    id: 30,
    service: "Donate Your Body To Science"
  },
  Beginning: {
    id: 900,
    service: ""
  },
  Leveling: {
    id: 901,
    service: ""
  },
  LevelingML: {
    id: 902,
    service: ""
  },
  DeepDark: {
    id: 903,
    service: ""
  },
  Vintner: {
    id: 904,
    service: ""
  }
};
var questRecords = (_questRecords = {}, _defineProperty7(_questRecords, Quest.Beginning.id, () => {
  return {
    acquire: [$effect(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral13(["Feeling Excited"]))), $effect(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral13(["Feeling Peaceful"]))), $effect(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral13(["Inscrutable Gaze"]))), $effect(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral13(["Spirit of Peppermint"]))), $effect(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral13(["Triple-Sized"]))), $effect(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral13(["Uncucumbered"]))), $effect(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral13(["substats.enh"])))],
    check: [],
    equipment: /* @__PURE__ */ new Map([
      [$slot(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral13(["Daylight Shavings Helmet"])))],
      [$slot(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral13(["protonic accelerator pack"])))],
      [$slot(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))],
      [$slot(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral13(["familiar scrapbook"])))],
      [$slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral13(["designer sweatpants"])))],
      [$slot(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))],
      [$slot(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral13(["Powerful Glove"])))],
      [$slot(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral13(["Kremlin's Greatest Briefcase"])))]
    ])
  };
}), _defineProperty7(_questRecords, Quest.CoilWire.id, () => {
  var bloodSugar = (0, import_kolmafia19.myClass)() === $class(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral13(["Sauceror"]))) ? $effect(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral13(["[1458]Blood Sugar Sauce Magic"]))) : $effect(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral13(["[1457]Blood Sugar Sauce Magic"])));
  return {
    acquire: [bloodSugar],
    check: [],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral13(["Iunion Crown"])))], [$slot(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral13(["off-hand"]))), have($item(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral13(["wrench"])))) ? $item(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral13(["wrench"]))) : $item(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral13(["industrial fire extinguisher"])))], [$slot(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral13(["Cargo Cultist Shorts"])))], [$slot(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))], [$slot(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral13(["Retrospecs"])))], [$slot(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral13(["Kremlin's Greatest Briefcase"])))]]),
    retrocapeMode: "heck thrill"
  };
}), _defineProperty7(_questRecords, Quest.Leveling.id, () => {
  var toAcquire = [
    $effect(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral13(["A Girl Named Sue"]))),
    $effect(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral13(["Billiards Belligerence"]))),
    $effect(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral13(["Broad-Spectrum Vaccine"]))),
    $effect(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral13(["Favored by Lyle"]))),
    $effect(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral13(["Fidoxene"]))),
    $effect(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral13(["Grumpy and Ornery"]))),
    $effect(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral13(["Hustlin'"]))),
    $effect(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral13(["Loyal Tea"]))),
    $effect(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral13(["Mental A-cue-ity"]))),
    $effect(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral13(["Mystically Oiled"]))),
    $effect(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral13(["Pisces in the Skyces"]))),
    $effect(_templateObject544 || (_templateObject544 = _taggedTemplateLiteral13(["Puzzle Champ"]))),
    $effect(_templateObject554 || (_templateObject554 = _taggedTemplateLiteral13(["Sigils of Yeg"]))),
    $effect(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral13(["Starry-Eyed"]))),
    $effect(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral13(["Total Protonic Reversal"]))),
    $effect(_templateObject583 || (_templateObject583 = _taggedTemplateLiteral13(["You Can Really Taste the Dormouse"]))),
    $effect(_templateObject593 || (_templateObject593 = _taggedTemplateLiteral13(["Warlock, Warstock, and Warbarrel"]))),
    $effect(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral13(["items.enh"]))),
    $effect(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral13(["meat.enh"]))),
    $effect(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral13(["Cold as Nice"]))),
    $effect(_templateObject633 || (_templateObject633 = _taggedTemplateLiteral13(["A Brush with Grossness"]))),
    $effect(_templateObject643 || (_templateObject643 = _taggedTemplateLiteral13(["Do I Know You From Somewhere?"]))),
    $effect(_templateObject653 || (_templateObject653 = _taggedTemplateLiteral13(["Does It Have a Skull In There??"]))),
    $effect(_templateObject663 || (_templateObject663 = _taggedTemplateLiteral13(["Hot-Headed"]))),
    $effect(_templateObject672 || (_templateObject672 = _taggedTemplateLiteral13(["Lack of Body-Building"]))),
    $effect(_templateObject682 || (_templateObject682 = _taggedTemplateLiteral13(["Oiled, Slick"]))),
    $effect(_templateObject692 || (_templateObject692 = _taggedTemplateLiteral13(["Pomp & Circumsands"]))),
    $effect(_templateObject702 || (_templateObject702 = _taggedTemplateLiteral13(["Resting Beach Face"]))),
    $effect(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral13(["We're All Made of Starfish"]))),
    $effect(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral13(["You Learned Something Maybe!"]))),
    $effect(_templateObject733 || (_templateObject733 = _taggedTemplateLiteral13(["Big"]))),
    $effect(_templateObject743 || (_templateObject743 = _taggedTemplateLiteral13(["Blessing of the Bird"]))),
    $effect(_templateObject753 || (_templateObject753 = _taggedTemplateLiteral13(["Blessing of your favorite Bird"]))),
    $effect(_templateObject762 || (_templateObject762 = _taggedTemplateLiteral13(["Blood Bond"]))),
    $effect(_templateObject772 || (_templateObject772 = _taggedTemplateLiteral13(["Blood Bubble"]))),
    $effect(_templateObject782 || (_templateObject782 = _taggedTemplateLiteral13(["Carol of the Bulls"]))),
    $effect(_templateObject792 || (_templateObject792 = _taggedTemplateLiteral13(["Carol of the Hells"]))),
    $effect(_templateObject802 || (_templateObject802 = _taggedTemplateLiteral13(["Carol of the Thrills"]))),
    $effect(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral13(["Feeling Excited"]))),
    $effect(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral13(["Feeling Peaceful"]))),
    $effect(_templateObject833 || (_templateObject833 = _taggedTemplateLiteral13(["Frenzied, Bloody"]))),
    $effect(_templateObject843 || (_templateObject843 = _taggedTemplateLiteral13(["Inscrutable Gaze"]))),
    $effect(_templateObject853 || (_templateObject853 = _taggedTemplateLiteral13(["Ruthlessly Efficient"]))),
    $effect(_templateObject862 || (_templateObject862 = _taggedTemplateLiteral13(["Singer's Faithful Ocelot"]))),
    $effect(_templateObject872 || (_templateObject872 = _taggedTemplateLiteral13(["Triple-Sized"]))),
    $effect(_templateObject882 || (_templateObject882 = _taggedTemplateLiteral13(["AAA-Charged"]))),
    $effect(_templateObject892 || (_templateObject892 = _taggedTemplateLiteral13(["Lantern-Charged"]))),
    $effect(_templateObject902 || (_templateObject902 = _taggedTemplateLiteral13(["Astral Shell"]))),
    $effect(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral13(["Elemental Saucesphere"]))),
    $effect(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral13(["Empathy"]))),
    $effect(_templateObject933 || (_templateObject933 = _taggedTemplateLiteral13(["Ghostly Shell"]))),
    $effect(_templateObject943 || (_templateObject943 = _taggedTemplateLiteral13(["Leash of Linguini"]))),
    $effect(_templateObject952 || (_templateObject952 = _taggedTemplateLiteral13(["Springy Fusilli"]))),
    $effect(_templateObject962 || (_templateObject962 = _taggedTemplateLiteral13(["Ode to Booze"]))),
    $effect(_templateObject972 || (_templateObject972 = _taggedTemplateLiteral13(["Polka of Plenty"])))
  ];
  var mpSavings = (0, import_kolmafia19.numericModifier)($item(_templateObject982 || (_templateObject982 = _taggedTemplateLiteral13(["pantogram pants"]))), "mana cost") !== 0;
  var toWear = /* @__PURE__ */ new Map([
    [$slot(_templateObject992 || (_templateObject992 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject1002 || (_templateObject1002 = _taggedTemplateLiteral13(["Daylight Shavings Helmet"])))],
    [$slot(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject1023 || (_templateObject1023 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))],
    [$slot(_templateObject1033 || (_templateObject1033 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject1043 || (_templateObject1043 = _taggedTemplateLiteral13(["weeping willow wand"])))],
    [$slot(_templateObject1052 || (_templateObject1052 = _taggedTemplateLiteral13(["pants"]))), mpSavings ? $item(_templateObject1062 || (_templateObject1062 = _taggedTemplateLiteral13(["pantogram pants"]))) : $item(_templateObject1072 || (_templateObject1072 = _taggedTemplateLiteral13(["Cargo Cultist Shorts"])))],
    [$slot(_templateObject1082 || (_templateObject1082 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject1092 || (_templateObject1092 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))],
    [$slot(_templateObject1102 || (_templateObject1102 = _taggedTemplateLiteral13(["acc2"]))), have($item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral13(["battle broom"])))) ? $item(_templateObject1123 || (_templateObject1123 = _taggedTemplateLiteral13(["battle broom"]))) : $item(_templateObject1133 || (_templateObject1133 = _taggedTemplateLiteral13(["gold detective badge"])))],
    [$slot(_templateObject1143 || (_templateObject1143 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject1153 || (_templateObject1153 = _taggedTemplateLiteral13(["Beach Comb"])))]
  ]);
  var toCape = !have($item(_templateObject1162 || (_templateObject1162 = _taggedTemplateLiteral13(["LOV Epaulettes"])))) ? "heck thrill" : void 0;
  if (have($item(_templateObject1172 || (_templateObject1172 = _taggedTemplateLiteral13(["LOV Epaulettes"])))))
    toWear.set($slot(_templateObject1182 || (_templateObject1182 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject1192 || (_templateObject1192 = _taggedTemplateLiteral13(["LOV Epaulettes"]))));
  return {
    acquire: toAcquire,
    check: [],
    equipment: toWear,
    retrocapeMode: toCape
  };
}), _defineProperty7(_questRecords, Quest.LevelingML.id, () => {
  var pastalordShield = (0, import_kolmafia19.myClass)() === $class(_templateObject1202 || (_templateObject1202 = _taggedTemplateLiteral13(["Pastamancer"]))) ? $effect(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral13(["Shield of the Pastalord"]))) : $effect(_templateObject1223 || (_templateObject1223 = _taggedTemplateLiteral13(["Flimsy Shield of the Pastalord"])));
  var toAcquire = [pastalordShield, $effect(_templateObject1233 || (_templateObject1233 = _taggedTemplateLiteral13(["Drescher's Annoying Noise"]))), $effect(_templateObject1243 || (_templateObject1243 = _taggedTemplateLiteral13(["Polka of Plenty"]))), $effect(_templateObject1252 || (_templateObject1252 = _taggedTemplateLiteral13(["Pride of the Puffin"]))), $effect(_templateObject1262 || (_templateObject1262 = _taggedTemplateLiteral13(["Ur-Kel's Aria of Annoyance"])))];
  var toWear = /* @__PURE__ */ new Map([[$slot(_templateObject1272 || (_templateObject1272 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject1282 || (_templateObject1282 = _taggedTemplateLiteral13(["Daylight Shavings Helmet"])))], [$slot(_templateObject1292 || (_templateObject1292 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject1302 || (_templateObject1302 = _taggedTemplateLiteral13(["LOV Epaulettes"])))], [$slot(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject1323 || (_templateObject1323 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject1332 || (_templateObject1332 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject1342 || (_templateObject1342 = _taggedTemplateLiteral13(["Cargo Cultist Shorts"])))], [$slot(_templateObject1352 || (_templateObject1352 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject1362 || (_templateObject1362 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))], [$slot(_templateObject1372 || (_templateObject1372 = _taggedTemplateLiteral13(["acc2"]))), have($item(_templateObject1382 || (_templateObject1382 = _taggedTemplateLiteral13(["battle broom"])))) ? $item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral13(["battle broom"]))) : $item(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral13(["gold detective badge"])))], [$slot(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject1422 || (_templateObject1422 = _taggedTemplateLiteral13(["Beach Comb"])))]]);
  return {
    acquire: toAcquire,
    check: [],
    equipment: toWear,
    umbrellaMode: "ml"
  };
}), _defineProperty7(_questRecords, Quest.DeepDark.id, () => {
  var toWear = /* @__PURE__ */ new Map([[$slot(_templateObject1432 || (_templateObject1432 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject1442 || (_templateObject1442 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject1452 || (_templateObject1452 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject1462 || (_templateObject1462 = _taggedTemplateLiteral13(["pantogram pants"])))], [$slot(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral13(["Kremlin's Greatest Briefcase"])))]]);
  if (have($item(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral13(["burning paper crane"])))))
    toWear.set($slot(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral13(["burning paper crane"]))));
  return {
    acquire: [$effect(_templateObject1522 || (_templateObject1522 = _taggedTemplateLiteral13(["Polka of Plenty"])))],
    check: [],
    equipment: toWear,
    retrocapeMode: "vampire hold",
    familiar: $familiar(_templateObject1532 || (_templateObject1532 = _taggedTemplateLiteral13(["Exotic Parrot"])))
  };
}), _defineProperty7(_questRecords, Quest.Vintner.id, () => {
  var toAcquire = [$effect(_templateObject1542 || (_templateObject1542 = _taggedTemplateLiteral13(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject1552 || (_templateObject1552 = _taggedTemplateLiteral13(["Polka of Plenty"]))), $effect(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral13(["Sauce Monocle"]))), $effect(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral13(["Song of Sauce"]))), $effect(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral13(["Wizard Squint"])))];
  var toCheck = [$effect(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral13(["Bastille Bourgeoisie"]))), $effect(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral13(["Pointy Wizard Beard"]))), $effect(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral13(["Sparkly!"]))), $effect(_templateObject1622 || (_templateObject1622 = _taggedTemplateLiteral13(["Visions of the Deep Dark Deeps"])))];
  var toEquip = /* @__PURE__ */ new Map([[$slot(_templateObject1632 || (_templateObject1632 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject1642 || (_templateObject1642 = _taggedTemplateLiteral13(["LOV Epaulettes"])))], [$slot(_templateObject1652 || (_templateObject1652 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral13(["weeping willow wand"])))], [$slot(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral13(["pantogram pants"])))], [$slot(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral13(["Powerful Glove"])))], [$slot(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject1722 || (_templateObject1722 = _taggedTemplateLiteral13(["battle broom"])))], [$slot(_templateObject1732 || (_templateObject1732 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject1742 || (_templateObject1742 = _taggedTemplateLiteral13(["backup camera"])))]]);
  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toEquip,
    umbrellaMode: "ml"
  };
}), _defineProperty7(_questRecords, Quest.Muscle.id, () => {
  return {
    acquire: [$effect(_templateObject1752 || (_templateObject1752 = _taggedTemplateLiteral13(["Expert Oiliness"]))), $effect(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral13(["Phorcefullness"]))), $effect(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral13(["Quiet Determination"]))), $effect(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral13(["Rage of the Reindeer"])))],
    check: [$effect(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral13(["Giant Growth"]))), $effect(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral13(["Spit Upon"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject1822 || (_templateObject1822 = _taggedTemplateLiteral13(["wad of used tape"])))], [$slot(_templateObject1832 || (_templateObject1832 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject1842 || (_templateObject1842 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject1852 || (_templateObject1852 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral13(["dented scepter"])))], [$slot(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral13(["Brutal brogues"])))], [$slot(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral13(['"I Voted!" sticker'])))]]),
    retrocapeMode: "muscle"
  };
}), _defineProperty7(_questRecords, Quest.Moxie.id, () => {
  return {
    acquire: [$effect(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral13(["Disco Fever"]))), $effect(_templateObject1922 || (_templateObject1922 = _taggedTemplateLiteral13(["Expert Oiliness"]))), $effect(_templateObject1932 || (_templateObject1932 = _taggedTemplateLiteral13(["Quiet Desperation"])))],
    check: [$effect(_templateObject1942 || (_templateObject1942 = _taggedTemplateLiteral13(["Sparkly!"]))), $effect(_templateObject1952 || (_templateObject1952 = _taggedTemplateLiteral13(["Spit Upon"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral13(["very pointy crown"])))], [$slot(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral13(["industrial fire extinguisher"])))], [$slot(_templateObject2022 || (_templateObject2022 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject2032 || (_templateObject2032 = _taggedTemplateLiteral13(["your cowboy boots"])))], [$slot(_templateObject2042 || (_templateObject2042 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject2052 || (_templateObject2052 = _taggedTemplateLiteral13(["Beach Comb"])))], [$slot(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral13(['"I Voted!" sticker'])))]]),
    retrocapeMode: "moxie"
  };
}), _defineProperty7(_questRecords, Quest.HP.id, () => {
  var candle = $item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral13(["extra-wide head candle"])));
  return {
    acquire: [$effect(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral13(["Song of Starch"])))],
    check: [],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject2102 || (_templateObject2102 = _taggedTemplateLiteral13(["hat"]))), have(candle) ? candle : $item(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral13(["wad of used tape"])))], [$slot(_templateObject2122 || (_templateObject2122 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject2132 || (_templateObject2132 = _taggedTemplateLiteral13(["vampyric cloake"])))], [$slot(_templateObject2142 || (_templateObject2142 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject2152 || (_templateObject2152 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject2162 || (_templateObject2162 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject2172 || (_templateObject2172 = _taggedTemplateLiteral13(["Cargo Cultist Shorts"])))], [$slot(_templateObject2182 || (_templateObject2182 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject2192 || (_templateObject2192 = _taggedTemplateLiteral13(['"I Voted!" sticker'])))]])
  };
}), _defineProperty7(_questRecords, Quest.SpellDamage.id, () => {
  var candle = $item(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral13(["Abracandalabra"])));
  return {
    acquire: [$effect(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral13(["Arched Eyebrow of the Archmage"]))), $effect(_templateObject2222 || (_templateObject2222 = _taggedTemplateLiteral13(["Cowrruption"]))), $effect(_templateObject2232 || (_templateObject2232 = _taggedTemplateLiteral13(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2242 || (_templateObject2242 = _taggedTemplateLiteral13(["Song of Sauce"]))), $effect(_templateObject2252 || (_templateObject2252 = _taggedTemplateLiteral13(["The Magic of LOV"])))],
    check: [$effect(_templateObject2262 || (_templateObject2262 = _taggedTemplateLiteral13(["Do You Crush What I Crush?"]))), $effect(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral13(["Filled with Magic"]))), $effect(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral13(["In a Lather"]))), $effect(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral13(["Inner Elf"]))), $effect(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral13(["Meteor Showered"]))), $effect(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral13(["Nanobrainy"]))), $effect(_templateObject2322 || (_templateObject2322 = _taggedTemplateLiteral13(["Sparkly!"]))), $effect(_templateObject2332 || (_templateObject2332 = _taggedTemplateLiteral13(["Spit Upon"]))), $effect(_templateObject2342 || (_templateObject2342 = _taggedTemplateLiteral13(["Toxic Vengeance"]))), $effect(_templateObject2352 || (_templateObject2352 = _taggedTemplateLiteral13(["Visions of the Deep Dark Deeps"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject2362 || (_templateObject2362 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral13(["wrench"])))], [$slot(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral13(["weeping willow wand"])))], [$slot(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral13(["pantogram pants"])))], [$slot(_templateObject2422 || (_templateObject2422 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject2432 || (_templateObject2432 = _taggedTemplateLiteral13(["battle broom"])))], [$slot(_templateObject2442 || (_templateObject2442 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject2452 || (_templateObject2452 = _taggedTemplateLiteral13(["Powerful Glove"])))], [$slot(_templateObject2462 || (_templateObject2462 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral13(["Kremlin's Greatest Briefcase"])))], [$slot(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral13(["familiar"]))), have(candle) ? candle : $item(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral13(["astral statuette"])))]]),
    familiar: $familiar(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral13(["Left-Hand Man"])))
  };
}), _defineProperty7(_questRecords, Quest.WeaponDamage.id, () => {
  var toAcquire = [$effect(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral13(["Bow-Legged Swagger"]))), $effect(_templateObject2522 || (_templateObject2522 = _taggedTemplateLiteral13(["Cowrruption"]))), $effect(_templateObject2532 || (_templateObject2532 = _taggedTemplateLiteral13(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2542 || (_templateObject2542 = _taggedTemplateLiteral13(["Rage of the Reindeer"]))), $effect(_templateObject2552 || (_templateObject2552 = _taggedTemplateLiteral13(["Scowl of the Auk"]))), $effect(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral13(["Song of the North"]))), $effect(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral13(["Tenacity of the Snapper"]))), $effect(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral13(["The Power of LOV"])))];
  var toCheck = [$effect(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral13(["Do You Crush What I Crush?"]))), $effect(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral13(["In a Lather"]))), $effect(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral13(["Inner Elf"]))), $effect(_templateObject2622 || (_templateObject2622 = _taggedTemplateLiteral13(["Meteor Showered"]))), $effect(_templateObject2632 || (_templateObject2632 = _taggedTemplateLiteral13(["Spit Upon"])))];
  var toWear = /* @__PURE__ */ new Map([[$slot(_templateObject2642 || (_templateObject2642 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject2652 || (_templateObject2652 = _taggedTemplateLiteral13(["dented scepter"])))], [$slot(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral13(["Brutal brogues"])))], [$slot(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral13(["Powerful Glove"])))], [$slot(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral13(["familiar"]))), $item(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral13(["broken champagne bottle"])))]]);
  var candle = $item(_templateObject2722 || (_templateObject2722 = _taggedTemplateLiteral13(["extra-wide head candle"])));
  if (have(candle))
    toWear.set($slot(_templateObject2732 || (_templateObject2732 = _taggedTemplateLiteral13(["hat"]))), candle);
  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toWear,
    umbrellaMode: "weapon",
    familiar: $familiar(_templateObject2742 || (_templateObject2742 = _taggedTemplateLiteral13(["Disembodied Hand"])))
  };
}), _defineProperty7(_questRecords, Quest.CombatFrequency.id, () => {
  return {
    acquire: [$effect(_templateObject2752 || (_templateObject2752 = _taggedTemplateLiteral13(["Feeling Lonely"]))), $effect(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral13(["Gummed Shoes"]))), $effect(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral13(["Silent Running"]))), $effect(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral13(["Smooth Movements"]))), $effect(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral13(["The Sonata of Sneakiness"]))), $effect(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral13(["Throwing Some Shade"])))],
    check: [$effect(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral13(["Silence of the God Lobster"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject2822 || (_templateObject2822 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject2832 || (_templateObject2832 = _taggedTemplateLiteral13(["very pointy crown"])))], [$slot(_templateObject2842 || (_templateObject2842 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject2852 || (_templateObject2852 = _taggedTemplateLiteral13(["protonic accelerator pack"])))], [$slot(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral13(["pantogram pants"])))], [$slot(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral13(["atlas of local maps"])))], [$slot(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral13(["Kremlin's Greatest Briefcase"])))]]),
    familiar: $familiar(_templateObject2922 || (_templateObject2922 = _taggedTemplateLiteral13(["Disgeist"]))),
    umbrellaMode: "nc"
  };
}), _defineProperty7(_questRecords, Quest.HotResist.id, () => {
  return {
    acquire: [$effect(_templateObject2932 || (_templateObject2932 = _taggedTemplateLiteral13(["Astral Shell"]))), $effect(_templateObject2942 || (_templateObject2942 = _taggedTemplateLiteral13(["Elemental Saucesphere"]))), $effect(_templateObject2952 || (_templateObject2952 = _taggedTemplateLiteral13(["Empathy"])))],
    check: [$effect(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral13(["Fireproof Foam Suit"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral13(["Daylight Shavings Helmet"])))], [$slot(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject3022 || (_templateObject3022 = _taggedTemplateLiteral13(["industrial fire extinguisher"])))], [$slot(_templateObject3032 || (_templateObject3032 = _taggedTemplateLiteral13(["pants"]))), $item(_templateObject3042 || (_templateObject3042 = _taggedTemplateLiteral13(["designer sweatpants"])))], [$slot(_templateObject3052 || (_templateObject3052 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral13(["Brutal brogues"])))], [$slot(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))], [$slot(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject3102 || (_templateObject3102 = _taggedTemplateLiteral13(["Beach Comb"])))], [$slot(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral13(["familiar"]))), $item(_templateObject3122 || (_templateObject3122 = _taggedTemplateLiteral13(["cracker"])))]]),
    retrocapeMode: "vampire hold",
    familiar: $familiar(_templateObject3132 || (_templateObject3132 = _taggedTemplateLiteral13(["Exotic Parrot"])))
  };
}), _defineProperty7(_questRecords, Quest.FamiliarWeight.id, () => {
  var rope = $item(_templateObject3142 || (_templateObject3142 = _taggedTemplateLiteral13(["rope"])));
  var crane = $item(_templateObject3152 || (_templateObject3152 = _taggedTemplateLiteral13(["burning paper crane"])));
  var offhand = have(rope) ? rope : have(crane) ? crane : $item(_templateObject3162 || (_templateObject3162 = _taggedTemplateLiteral13(["familiar scrapbook"])));
  return {
    acquire: [$effect(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral13(["Empathy"]))), $effect(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral13(["Joy"]))), $effect(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral13(["Robot Friends"]))), $effect(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral13(["Shortly Stacked"]))), $effect(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral13(["Whole Latte Love"])))],
    check: [$effect(_templateObject3222 || (_templateObject3222 = _taggedTemplateLiteral13(["[1701]Hip to the Jive"]))), $effect(_templateObject3232 || (_templateObject3232 = _taggedTemplateLiteral13(["All Is Forgiven"]))), $effect(_templateObject3242 || (_templateObject3242 = _taggedTemplateLiteral13(["Bureaucratized"]))), $effect(_templateObject3252 || (_templateObject3252 = _taggedTemplateLiteral13(["Chorale of Companionship"]))), $effect(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral13(["Down With Chow"]))), $effect(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral13(["Meteor Showered"]))), $effect(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral13(["Open Heart Surgery"]))), $effect(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral13(["You Can Really Taste the Dormouse"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral13(["Daylight Shavings Helmet"])))], [$slot(_templateObject3322 || (_templateObject3322 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject3332 || (_templateObject3332 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject3342 || (_templateObject3342 = _taggedTemplateLiteral13(["off-hand"]))), offhand], [$slot(_templateObject3352 || (_templateObject3352 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral13(["Brutal brogues"])))], [$slot(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral13(["hewn moon-rune spoon"])))], [$slot(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral13(["Beach Comb"])))], [$slot(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral13(["familiar"]))), $item(_templateObject3422 || (_templateObject3422 = _taggedTemplateLiteral13(["cracker"])))]]),
    familiar: $familiar(_templateObject3432 || (_templateObject3432 = _taggedTemplateLiteral13(["Exotic Parrot"])))
  };
}), _defineProperty7(_questRecords, Quest.ItemDrop.id, () => {
  var toAcquire = [$effect(_templateObject3442 || (_templateObject3442 = _taggedTemplateLiteral13(["Blessing of the Bird"]))), $effect(_templateObject3452 || (_templateObject3452 = _taggedTemplateLiteral13(["Ermine Eyes"]))), $effect(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral13(["Fat Leon's Phat Loot Lyric"]))), $effect(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral13(["Feeling Lost"]))), $effect(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral13(["Nearly All-Natural"]))), $effect(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral13(["Singer's Faithful Ocelot"]))), $effect(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral13(["Steely-Eyed Squint"]))), $effect(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral13(["The Spirit of Taking"])))];
  var toCheck = [$effect(_templateObject3522 || (_templateObject3522 = _taggedTemplateLiteral13(["Bat-Adjacent Form"])))];
  var toWear = /* @__PURE__ */ new Map([[$slot(_templateObject3532 || (_templateObject3532 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject3542 || (_templateObject3542 = _taggedTemplateLiteral13(["wad of used tape"])))], [$slot(_templateObject3552 || (_templateObject3552 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral13(["vampyric cloake"])))], [$slot(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral13(["Guzzlr tablet"])))], [$slot(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral13(["acc2"]))), $item(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral13(["gold detective badge"])))], [$slot(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject3622 || (_templateObject3622 = _taggedTemplateLiteral13(["your cowboy boots"])))], [$slot(_templateObject3632 || (_templateObject3632 = _taggedTemplateLiteral13(["familiar"]))), $item(_templateObject3642 || (_templateObject3642 = _taggedTemplateLiteral13(["li'l ninja costume"])))]]);
  var candles = [$item(_templateObject3652 || (_templateObject3652 = _taggedTemplateLiteral13(["extra-large utility candle"]))), $item(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral13(["novelty sparkling candle"]))), $item(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral13(["runed taper candle"])))];
  var sparkler = $item(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral13(["oversized sparkler"])));
  if (!candles.some(have) && have(sparkler))
    toWear.set($slot(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral13(["weapon"]))), sparkler);
  for (var _i = 0, _candles = candles; _i < _candles.length; _i++) {
    var c = _candles[_i];
    if (have(c))
      toWear.set($slot(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral13(["weapon"]))), c);
  }
  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toWear,
    familiar: $familiar(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral13(["Trick-or-Treating Tot"]))),
    umbrellaMode: "item"
  };
}), _defineProperty7(_questRecords, Quest.Mysticality.id, () => {
  return {
    acquire: [$effect(_templateObject3722 || (_templateObject3722 = _taggedTemplateLiteral13(["Quiet Judgement"])))],
    check: [$effect(_templateObject3732 || (_templateObject3732 = _taggedTemplateLiteral13(["Nanobrainy"]))), $effect(_templateObject3742 || (_templateObject3742 = _taggedTemplateLiteral13(["Spit Upon"]))), $effect(_templateObject3752 || (_templateObject3752 = _taggedTemplateLiteral13(["Witch Breaded"])))],
    equipment: /* @__PURE__ */ new Map([[$slot(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral13(["hat"]))), $item(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral13(["wad of used tape"])))], [$slot(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral13(["weapon"]))), $item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral13(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject380 || (_templateObject380 = _taggedTemplateLiteral13(["acc1"]))), $item(_templateObject381 || (_templateObject381 = _taggedTemplateLiteral13(["battle broom"])))], [$slot(_templateObject3822 || (_templateObject3822 = _taggedTemplateLiteral13(["acc3"]))), $item(_templateObject3832 || (_templateObject3832 = _taggedTemplateLiteral13(['"I Voted!" sticker'])))]]),
    retrocapeMode: "mysticality"
  };
}), _defineProperty7(_questRecords, Quest.Donate.id, () => {
  return {
    acquire: [],
    check: [],
    equipment: /* @__PURE__ */ new Map()
  };
}), _questRecords);
function validateQuestOutfits() {
  for (var _i2 = 0, _Object$values = Object.values(Quest); _i2 < _Object$values.length; _i2++) {
    var quest = _Object$values[_i2];
    var record = questRecords[quest.id]();
    var back = record.equipment.get($slot(_templateObject3842 || (_templateObject3842 = _taggedTemplateLiteral13(["back"]))));
    if (back && record.retrocapeMode)
      throw "Multiple back items for ".concat(quest.id);
    var offhand = record.equipment.get($slot(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral13(["off-hand"]))));
    if (offhand && record.umbrellaMode)
      throw "Multiple off-hands for ".concat(quest.id);
  }
  (0, import_kolmafia19.print)("Validated quest outfits");
}
function prep(quest) {
  var record = questRecords[quest.id]();
  shrugExtraSongs(record.acquire);
  record.acquire.forEach(acquireEffect);
  record.check.forEach(checkEffect);
  if (record.familiar)
    (0, import_kolmafia19.useFamiliar)(record.familiar);
  var famEquip = record.equipment.get($slot(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral13(["familiar"]))));
  if (famEquip && !(0, import_kolmafia19.canEquip)((0, import_kolmafia19.myFamiliar)(), famEquip)) {
    throw "Cannot equip ".concat(famEquip, " on ").concat((0, import_kolmafia19.myFamiliar)());
  }
  if (record.retrocapeMode) {
    (0, import_kolmafia19.cliExecute)("retrocape ".concat(record.retrocapeMode));
    (0, import_kolmafia19.equip)($slot(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral13(["back"]))), $item(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral13(["unwrapped knock-off retro superhero cape"]))));
  }
  if (record.umbrellaMode) {
    (0, import_kolmafia19.cliExecute)("umbrella ".concat(record.umbrellaMode));
    (0, import_kolmafia19.equip)($slot(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral13(["off-hand"]))), $item(_templateObject390 || (_templateObject390 = _taggedTemplateLiteral13(["unbreakable umbrella"]))));
  }
  record.equipment.forEach((item4, slot) => {
    if (!have(item4)) {
      var _ingredients$;
      var ingredients = Object.keys((0, import_kolmafia19.getIngredients)(item4));
      if ((0, import_kolmafia19.getRelated)(item4, "fold"))
        (0, import_kolmafia19.cliExecute)("fold ".concat(item4));
      else if (have(import_kolmafia19.Item.get((_ingredients$ = ingredients[0]) !== null && _ingredients$ !== void 0 ? _ingredients$ : "none")))
        (0, import_kolmafia19.cliExecute)("make ".concat(item4));
      else
        throw "Unable to find ".concat(item4, "?");
    }
    (0, import_kolmafia19.equip)(slot, item4);
  });
}
function shrugExtraSongs(effectsToAcquire) {
  var songsToAlwaysKeep = $effects(_templateObject391 || (_templateObject391 = _taggedTemplateLiteral13(["Ode to Booze, Chorale of Companionship"])));
  Object.entries((0, import_kolmafia19.myEffects)()).forEach((_ref) => {
    var _ref2 = _slicedToArray8(_ref, 1), effectName = _ref2[0];
    var effect = (0, import_kolmafia19.toEffect)(effectName);
    if (isSong(effect) && !songsToAlwaysKeep.includes(effect) && !effectsToAcquire.includes(effect)) {
      shrugEffect(effect);
    }
  });
}
function haveQuest(quest) {
  if (quest.id > Quest.Donate.id)
    throw "Invalid quest ".concat(quest.id, ": ").concat(quest.service, "!");
  if (quest.id < Quest.Donate.id)
    return !get("csServicesPerformed").includes(quest.service);
  return (0, import_kolmafia19.visitUrl)("council.php").includes("<input type=hidden name=option value=".concat(quest.id, ">"));
}
function prepAndDoQuest(quest) {
  if (quest.id > Quest.Donate.id)
    throw "Invalid quest ".concat(quest.id, ": ").concat(quest.service, "!");
  if (haveQuest(quest)) {
    prep(quest);
    (0, import_kolmafia19.visitUrl)("council.php");
    (0, import_kolmafia19.visitUrl)("choice.php?whichchoice=1089&option=".concat(quest.id));
    if (haveQuest(quest))
      throw "Couldn't complete quest ".concat(quest.id, ": ").concat(quest.service, "?");
  }
}

// src/events.ts
var _templateObject395;
var _templateObject2100;
var _templateObject396;
var _templateObject415;
var _templateObject515;
var _templateObject613;
var _templateObject713;
var _templateObject813;
var _templateObject913;
var _templateObject1013;
var _templateObject1113;
var _templateObject1213;
var _templateObject1310;
var _templateObject1410;
var _templateObject1510;
var _templateObject1610;
var _templateObject1710;
var _templateObject1810;
var _templateObject1910;
var _templateObject2010;
var _templateObject2111;
var _templateObject2210;
var _templateObject2310;
var _templateObject2410;
var _templateObject2510;
var _templateObject2610;
var _templateObject2710;
var _templateObject2810;
var _templateObject2910;
var _templateObject3010;
var _templateObject3110;
var _templateObject3210;
var _templateObject3310;
var _templateObject3410;
var _templateObject3510;
var _templateObject3610;
var _templateObject3710;
var _templateObject3810;
var _templateObject397;
var _templateObject404;
var _templateObject416;
var _templateObject425;
var _templateObject435;
var _templateObject445;
var _templateObject455;
var _templateObject464;
var _templateObject474;
var _templateObject484;
var _templateObject494;
var _templateObject504;
var _templateObject516;
var _templateObject525;
var _templateObject535;
var _templateObject545;
var _templateObject555;
var _templateObject564;
var _templateObject574;
var _templateObject584;
var _templateObject594;
var _templateObject603;
var _templateObject614;
var _templateObject624;
var _templateObject634;
var _templateObject644;
var _templateObject654;
var _templateObject664;
var _templateObject673;
var _templateObject683;
var _templateObject693;
var _templateObject703;
var _templateObject714;
var _templateObject724;
var _templateObject734;
var _templateObject744;
var _templateObject754;
var _templateObject763;
var _templateObject773;
var _templateObject783;
var _templateObject793;
var _templateObject803;
var _templateObject814;
var _templateObject824;
var _templateObject834;
var _templateObject844;
var _templateObject854;
var _templateObject863;
var _templateObject873;
var _templateObject883;
var _templateObject893;
var _templateObject903;
var _templateObject914;
var _templateObject924;
var _templateObject934;
var _templateObject944;
var _templateObject953;
var _templateObject963;
var _templateObject973;
var _templateObject983;
var _templateObject993;
var _templateObject1003;
var _templateObject1014;
var _templateObject1024;
var _templateObject1034;
var _templateObject1044;
var _templateObject1053;
var _templateObject1063;
var _templateObject1073;
var _templateObject1083;
var _templateObject1093;
var _templateObject1103;
var _templateObject1114;
var _templateObject1124;
var _templateObject1134;
var _templateObject1144;
var _templateObject1154;
var _templateObject1163;
var _templateObject1173;
var _templateObject1183;
var _templateObject1193;
var _templateObject1203;
var _templateObject1214;
var _templateObject1224;
var _templateObject1234;
var _templateObject1244;
var _templateObject1253;
var _templateObject1263;
var _templateObject1273;
var _templateObject1283;
var _templateObject1293;
var _templateObject1303;
var _templateObject1313;
var _templateObject1324;
var _templateObject1333;
var _templateObject1343;
var _templateObject1353;
var _templateObject1363;
var _templateObject1373;
var _templateObject1383;
var _templateObject1392;
var _templateObject1402;
var _templateObject1412;
var _templateObject1423;
var _templateObject1433;
var _templateObject1443;
var _templateObject1453;
var _templateObject1463;
var _templateObject1472;
var _templateObject1482;
var _templateObject1492;
var _templateObject1502;
var _templateObject1512;
var _templateObject1523;
var _templateObject1533;
var _templateObject1543;
var _templateObject1553;
var _templateObject1562;
var _templateObject1572;
var _templateObject1582;
var _templateObject1592;
var _templateObject1602;
var _templateObject1612;
var _templateObject1623;
var _templateObject1633;
var _templateObject1643;
var _templateObject1653;
var _templateObject1662;
var _templateObject1672;
var _templateObject1682;
var _templateObject1692;
var _templateObject1702;
var _templateObject1712;
var _templateObject1723;
var _templateObject1733;
var _templateObject1743;
var _templateObject1753;
var _templateObject1762;
var _templateObject1772;
var _templateObject1782;
var _templateObject1792;
var _templateObject1802;
var _templateObject1812;
var _templateObject1823;
var _templateObject1833;
var _templateObject1843;
var _templateObject1853;
var _templateObject1862;
var _templateObject1872;
var _templateObject1882;
var _templateObject1892;
var _templateObject1902;
var _templateObject1912;
var _templateObject1923;
var _templateObject1933;
var _templateObject1943;
var _templateObject1953;
var _templateObject1962;
var _templateObject1972;
var _templateObject1982;
var _templateObject1992;
var _templateObject2002;
var _templateObject2012;
var _templateObject2023;
var _templateObject2033;
var _templateObject2043;
var _templateObject2053;
var _templateObject2062;
var _templateObject2072;
var _templateObject2082;
var _templateObject2092;
var _templateObject2103;
var _templateObject2113;
var _templateObject2123;
var _templateObject2133;
var _templateObject2143;
var _templateObject2153;
var _templateObject2163;
var _templateObject2173;
var _templateObject2183;
function _taggedTemplateLiteral14(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var FamiliarFlag;
(function(FamiliarFlag2) {
  FamiliarFlag2[FamiliarFlag2["Default"] = 0] = "Default";
  FamiliarFlag2[FamiliarFlag2["NoAttack"] = 1] = "NoAttack";
  FamiliarFlag2[FamiliarFlag2["ToxicTeacups"] = 2] = "ToxicTeacups";
  FamiliarFlag2[FamiliarFlag2["Wine"] = 3] = "Wine";
})(FamiliarFlag || (FamiliarFlag = {}));
var civicCenter = $location(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral14(["Gingerbread Civic Center"])));
var deepMachineTunnels = $location(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral14(["The Deep Machine Tunnels"])));
var direWarren = $location(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral14(["The Dire Warren"])));
var deepDarkJungle = $location(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral14(["The Deep Dark Jungle"])));
var haikuDungeon = $location(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral14(["The Haiku Dungeon"])));
var loveTunnel = $location(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral14(["The Tunnel of L.O.V.E."])));
var neverendingParty = $location(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral14(["The Neverending Party"])));
var noobCave = $location(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral14(["Noob Cave"])));
var skeletonStore = $location(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral14(["The Skeleton Store"])));
var slimeTube = $location(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral14(["The Slime Tube"])));
var snojo = $location(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral14(["The X-32-F Combat Training Snowman"])));
var statelyPleasureDome = $location(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral14(["The Stately Pleasure Dome"])));
var toxicTeacups = $location(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral14(["The Toxic Teacups"])));
var upscaleDistrict = $location(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral14(["Gingerbread Upscale Retail District"])));
var preCoilEvents = {
  holidayCheck: {
    ready: () => isHolidayWandererDay() && get("_banderRunaways") < 1,
    run: () => {
      familiar($familiar(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral14(["Pair of Stomping Boots"]))));
      if ((0, import_kolmafia20.haveEquipped)($item(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral14(["Kramco Sausage-o-Matic\u2122"])))))
        throw "Should not have Kramco equipped yet";
      adventure(noobCave, MacroList.Runaway);
      if (get("_banderRunaways") < 1)
        throw "Failed to increment _banderRunaways";
    }
  },
  ninjaCostume: {
    ready: () => !have($item(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral14(["li'l ninja costume"])))),
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral14(["protonic accelerator pack"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      withEquipment(() => mapMonster(haikuDungeon, $monster(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral14(["amateur ninja"]))), MacroList.FreeFight), [[$slot(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral14(["Lil' Doctor\u2122 bag"])))]]);
      checkAvailable($item(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral14(["li'l ninja costume"]))));
    }
  },
  mimic: {
    ready: () => !get("_bagOfCandy"),
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral14(["protonic accelerator pack"]))));
      familiar($familiar(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral14(["Stocking Mimic"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral14(["familiar"]))), $item(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral14(["none"]))));
      (0, import_kolmafia20.visitUrl)("questlog.php?which=1");
      var ghostLoc = get("ghostLocation");
      if (!ghostLoc)
        throw "Failed to get protonic ghost notice";
      adventure(ghostLoc, MacroList.FreeFight);
      (0, import_kolmafia20.equip)($slot(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral14(["familiar"]))), $item(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral14(["none"]))));
      checkAvailable($item(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral14(["bag of many confections"]))));
      var blob = $item(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral14(["psychokinetic energy blob"])));
      (0, import_kolmafia20.use)(Math.min((0, import_kolmafia20.itemAmount)(blob), Math.floor((0, import_kolmafia20.myMaxmp)() - (0, import_kolmafia20.myMp)()) / 30), blob);
    }
  },
  hipster: {
    ready: () => !get("_ironicMoustache"),
    run: () => {
      (0, import_kolmafia20.cliExecute)("retrocape heck thrill");
      familiar($familiar(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral14(["Mini-Hipster"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral14(["familiar"]))), $item(_templateObject3510 || (_templateObject3510 = _taggedTemplateLiteral14(["none"]))));
      withEquipment(() => adventure(noobCave, MacroList.FreeFight), [[$slot(_templateObject3610 || (_templateObject3610 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject3710 || (_templateObject3710 = _taggedTemplateLiteral14(["Kramco Sausage-o-Matic\u2122"])))]]);
      (0, import_kolmafia20.equip)($slot(_templateObject3810 || (_templateObject3810 = _taggedTemplateLiteral14(["familiar"]))), $item(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral14(["none"]))));
      checkAvailable($item(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral14(["ironic moustache"]))));
    }
  },
  vote: {
    ready: () => voterMonsterNow() && get("_voteFreeFights") < 1,
    run: () => {
      selectBestFamiliar();
      withEquipment(() => adventure(noobCave, MacroList.FreeFight), [[$slot(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral14(['"I Voted!" sticker'])))]]);
    }
  },
  tropicalSkeleton: {
    ready: () => !have($effect(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral14(["Everything Looks Red"])))),
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral14(["weapon"]))), $item(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral14(["Fourth of May Cosplay Saber"]))));
      familiar($familiar(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral14(["Crimbo Shrub"]))));
      if (!get("_shrubDecorated")) {
        var decorations = (0, import_kolmafia20.toInt)($item(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral14(["box of old Crimbo decorations"]))));
        (0, import_kolmafia20.visitUrl)("inv_use.php?pwd=&which=99&whichitem=".concat(decorations));
        (0, import_kolmafia20.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=2&lights=5&garland=3&gift=2");
      }
      mapMonster(skeletonStore, $monster(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral14(["novelty tropical skeleton"]))), MacroList.FreeFight);
      checkEffect($effect(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral14(["Everything Looks Red"]))));
      $items(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral14(["cherry, grapefruit, lemon, strawberry"]))).forEach((fruit) => checkAvailable(fruit));
    }
  }
};
var levelingEvents = {
  protonicGhost: {
    ready: () => get("ghostLocation") !== null,
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral14(["protonic accelerator pack"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      var ghostLoc = get("ghostLocation");
      if (!ghostLoc)
        throw "No ghost location found?";
      adventure(ghostLoc, MacroList.FreeFight);
    }
  },
  ghostCarol: {
    ready: () => ![$effect(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral14(["All I Want For Crimbo Is Stuff"]))), $effect(_templateObject545 || (_templateObject545 = _taggedTemplateLiteral14(["Crimbo Wrapping"]))), $effect(_templateObject555 || (_templateObject555 = _taggedTemplateLiteral14(["Do You Crush What I Crush?"]))), $effect(_templateObject564 || (_templateObject564 = _taggedTemplateLiteral14(["Holiday Yoked"]))), $effect(_templateObject574 || (_templateObject574 = _taggedTemplateLiteral14(["Let It Snow/Boil/Stink/Frighten/Grease"])))].some((carol) => have(carol)),
    run: () => {
      familiar($familiar(_templateObject584 || (_templateObject584 = _taggedTemplateLiteral14(["Ghost of Crimbo Carols"]))));
      withEquipment(() => adventure(direWarren, MacroList.Banish), [[$slot(_templateObject594 || (_templateObject594 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject603 || (_templateObject603 = _taggedTemplateLiteral14(["Kremlin's Greatest Briefcase"])))]]);
      checkEffect($effect(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral14(["Do You Crush What I Crush?"]))));
    }
  },
  loveTunnel: {
    ready: () => !get("_loveTunnelUsed"),
    run: () => {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if ((0, import_kolmafia20.handlingChoice)())
        throw "Stuck in LOV?";
      checkEffect($effect(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral14(["Open Heart Surgery"]))));
      $items(_templateObject634 || (_templateObject634 = _taggedTemplateLiteral14(["LOV Elixir #3, LOV Elixir #6, LOV Epaulettes"]))).forEach((l) => checkAvailable(l));
      (0, import_kolmafia20.use)($item(_templateObject644 || (_templateObject644 = _taggedTemplateLiteral14(["LOV Elixir #3"]))));
      (0, import_kolmafia20.use)($item(_templateObject654 || (_templateObject654 = _taggedTemplateLiteral14(["LOV Elixir #6"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject664 || (_templateObject664 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject673 || (_templateObject673 = _taggedTemplateLiteral14(["LOV Epaulettes"]))));
    }
  },
  tenPercentBonus: {
    ready: () => have($item(_templateObject683 || (_templateObject683 = _taggedTemplateLiteral14(["a ten-percent bonus"])))),
    run: () => {
      [$effect(_templateObject693 || (_templateObject693 = _taggedTemplateLiteral14(["That's Just Cloud-Talk, Man"]))), $effect(_templateObject703 || (_templateObject703 = _taggedTemplateLiteral14(["Inscrutable Gaze"]))), $effect(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral14(["Synthesis: Learning"])))].forEach(checkEffect);
      checkAvailable($item(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral14(["LOV Epaulettes"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject734 || (_templateObject734 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject744 || (_templateObject744 = _taggedTemplateLiteral14(["LOV Epaulettes"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject754 || (_templateObject754 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject763 || (_templateObject763 = _taggedTemplateLiteral14(["familiar scrapbook"]))));
      (0, import_kolmafia20.use)($item(_templateObject773 || (_templateObject773 = _taggedTemplateLiteral14(["a ten-percent bonus"]))));
    }
  },
  chateau: {
    ready: () => (0, import_kolmafia20.myLevel)() >= 8 && get("timesRested") < (0, import_kolmafia20.totalFreeRests)(),
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject783 || (_templateObject783 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject793 || (_templateObject793 = _taggedTemplateLiteral14(["LOV Epaulettes"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject803 || (_templateObject803 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral14(["familiar scrapbook"]))));
      while (get("timesRested") < (0, import_kolmafia20.totalFreeRests)()) {
        (0, import_kolmafia20.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
      }
    }
  },
  witchessRook: {
    ready: () => !have($effect(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral14(["Sweetbreads Flamb\xE9"])))),
    run: () => {
      prep(Quest.LevelingML);
      selectBestFamiliar();
      fightWitchess($monster(_templateObject834 || (_templateObject834 = _taggedTemplateLiteral14(["Witchess Rook"]))), MacroList.FreeFight);
      checkAvailable($item(_templateObject844 || (_templateObject844 = _taggedTemplateLiteral14(["Greek fire"]))));
      (0, import_kolmafia20.use)($item(_templateObject854 || (_templateObject854 = _taggedTemplateLiteral14(["Greek fire"]))));
    }
  },
  upscaleDistrictKill: {
    ready: () => !have($effect(_templateObject863 || (_templateObject863 = _taggedTemplateLiteral14(["Whole Latte Love"])))) && !have($item(_templateObject873 || (_templateObject873 = _taggedTemplateLiteral14(["sprinkles"]))), 55),
    run: () => {
      familiar($familiar(_templateObject883 || (_templateObject883 = _taggedTemplateLiteral14(["Chocolate Lab"]))));
      var rope = $item(_templateObject893 || (_templateObject893 = _taggedTemplateLiteral14(["rope"])));
      var crane = $item(_templateObject903 || (_templateObject903 = _taggedTemplateLiteral14(["burning paper crane"])));
      var offhand = have(rope) ? rope : have(crane) ? crane : $item(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral14(["familiar scrapbook"])));
      withEquipment(() => adventure(upscaleDistrict, MacroList.Sprinkles), [[$slot(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject934 || (_templateObject934 = _taggedTemplateLiteral14(["protonic accelerator pack"])))], [$slot(_templateObject944 || (_templateObject944 = _taggedTemplateLiteral14(["weapon"]))), $item(_templateObject953 || (_templateObject953 = _taggedTemplateLiteral14(["Fourth of May Cosplay Saber"])))], [$slot(_templateObject963 || (_templateObject963 = _taggedTemplateLiteral14(["off-hand"]))), offhand], [$slot(_templateObject973 || (_templateObject973 = _taggedTemplateLiteral14(["acc1"]))), $item(_templateObject983 || (_templateObject983 = _taggedTemplateLiteral14(["hewn moon-rune spoon"])))], [$slot(_templateObject993 || (_templateObject993 = _taggedTemplateLiteral14(["acc2"]))), $item(_templateObject1003 || (_templateObject1003 = _taggedTemplateLiteral14(["Brutal brogues"])))], [$slot(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject1024 || (_templateObject1024 = _taggedTemplateLiteral14(["Lil' Doctor\u2122 bag"])))]]);
      checkAvailable($item(_templateObject1034 || (_templateObject1034 = _taggedTemplateLiteral14(["sprinkles"]))), 55);
    }
  },
  upscaleDistrictRunaway: {
    ready: () => !have($effect(_templateObject1044 || (_templateObject1044 = _taggedTemplateLiteral14(["Whole Latte Love"])))),
    run: () => {
      checkEffect($effect(_templateObject1053 || (_templateObject1053 = _taggedTemplateLiteral14(["Ode to Booze"]))));
      familiar($familiar(_templateObject1063 || (_templateObject1063 = _taggedTemplateLiteral14(["Frumious Bandersnatch"]))));
      adventure(upscaleDistrict, MacroList.Runaway);
      var latte = $item(_templateObject1073 || (_templateObject1073 = _taggedTemplateLiteral14(["gingerbread spice latte"])));
      if (have(latte)) {
        (0, import_kolmafia20.use)(latte);
        checkAvailable($item(_templateObject1083 || (_templateObject1083 = _taggedTemplateLiteral14(["sprinkles"]))), 5);
      } else if (get("_gingerbreadCityTurns") > 5) {
        throw "Failed to obtain ".concat(latte);
      }
    }
  },
  snojo: {
    ready: () => get("_snojoFreeFights") < 10,
    run: () => {
      if (get("snojoSetting") !== $stat(_templateObject1093 || (_templateObject1093 = _taggedTemplateLiteral14(["Muscle"])))) {
        (0, import_kolmafia20.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0, import_kolmafia20.runChoice)(1);
      }
      selectBestFamiliar();
      adventure(snojo, (0, import_kolmafia20.myFamiliar)().combat ? MacroList.FastFreeFight : MacroList.FreeFight);
    }
  },
  bricko: {
    ready: () => have(BRICKO_TARGET_ITEM) && get("_brickoFights") < 3,
    run: () => {
      selectBestFamiliar();
      ((0, import_kolmafia20.myFamiliar)().combat ? MacroList.FastFreeFight : MacroList.FreeFight).setAutoAttack();
      (0, import_kolmafia20.use)(BRICKO_TARGET_ITEM);
    }
  },
  witchessWitch: {
    ready: () => !have($item(_templateObject1103 || (_templateObject1103 = _taggedTemplateLiteral14(["battle broom"])))),
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral14(["Witchess Witch"]))), MacroList.WitchessWitch);
      (0, import_kolmafia20.equip)($slot(_templateObject1124 || (_templateObject1124 = _taggedTemplateLiteral14(["acc2"]))), $item(_templateObject1134 || (_templateObject1134 = _taggedTemplateLiteral14(["battle broom"]))));
    }
  },
  eldritch: {
    ready: () => !get("_eldritchHorrorEvoked"),
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      (0, import_kolmafia20.useSkill)($skill(_templateObject1144 || (_templateObject1144 = _taggedTemplateLiteral14(["Evoke Eldritch Horror"]))));
      if ((0, import_kolmafia20.myHp)() / (0, import_kolmafia20.myMaxhp)() < 0.5)
        (0, import_kolmafia20.useSkill)($skill(_templateObject1154 || (_templateObject1154 = _taggedTemplateLiteral14(["Cannelloni Cocoon"]))));
    }
  },
  godLobster: {
    ready: () => get("_godLobsterFights") < 3,
    run: () => {
      familiar($familiar(_templateObject1163 || (_templateObject1163 = _taggedTemplateLiteral14(["God Lobster"]))));
      MacroList.FreeFight.setAutoAttack();
      (0, import_kolmafia20.visitUrl)("main.php?fightgodlobster=1");
      (0, import_kolmafia20.visitUrl)("choice.php");
      if ((0, import_kolmafia20.handlingChoice)())
        (0, import_kolmafia20.runChoice)(get("_godLobsterFights") < 3 ? 1 : 2);
      var equips = $items(_templateObject1173 || (_templateObject1173 = _taggedTemplateLiteral14(["God Lobster's Ring, God Lobster's Scepter"])));
      var toEquip = equips.find((equip6) => have(equip6));
      if (toEquip)
        (0, import_kolmafia20.equip)($slot(_templateObject1183 || (_templateObject1183 = _taggedTemplateLiteral14(["familiar"]))), toEquip);
    }
  },
  witchessKing: {
    ready: () => !have($item(_templateObject1193 || (_templateObject1193 = _taggedTemplateLiteral14(["dented scepter"])))),
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster(_templateObject1203 || (_templateObject1203 = _taggedTemplateLiteral14(["Witchess King"]))), MacroList.FreeFight);
    }
  },
  witchess: {
    ready: () => get("_witchessFights") < 5,
    run: () => {
      selectBestFamiliar();
      fightWitchess($monster(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral14(["Witchess Queen"]))), MacroList.WitchessQueen);
    }
  },
  vote: {
    ready: () => voterMonsterNow() && get("_voteFreeFights") < 1,
    run: () => {
      selectBestFamiliar();
      withEquipment(() => adventure(toxicTeacups, MacroList.FreeFight), [[$slot(_templateObject1224 || (_templateObject1224 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject1234 || (_templateObject1234 = _taggedTemplateLiteral14(['"I Voted!" sticker'])))]]);
    }
  },
  holidayWanderer: {
    ready: () => isHolidayWandererDay() && deepDarkJungle.combatQueue.length < 1,
    run: () => {
      checkEffect($effect(_templateObject1244 || (_templateObject1244 = _taggedTemplateLiteral14(["Ode to Booze"]))));
      familiar($familiar(_templateObject1253 || (_templateObject1253 = _taggedTemplateLiteral14(["Frumious Bandersnatch"]))));
      adventure(deepDarkJungle, MacroList.Runaway);
    }
  },
  dmtSquare: {
    ready: () => !have($effect(_templateObject1263 || (_templateObject1263 = _taggedTemplateLiteral14(["Joy"])))) && !have($item(_templateObject1273 || (_templateObject1273 = _taggedTemplateLiteral14(["abstraction: action"])))),
    run: () => {
      familiar($familiar(_templateObject1283 || (_templateObject1283 = _taggedTemplateLiteral14(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable($item(_templateObject1293 || (_templateObject1293 = _taggedTemplateLiteral14(["abstraction: action"]))));
    }
  },
  dmtCircle: {
    ready: () => !have($effect(_templateObject1303 || (_templateObject1303 = _taggedTemplateLiteral14(["Joy"])))),
    run: () => {
      familiar($familiar(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral14(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable($item(_templateObject1324 || (_templateObject1324 = _taggedTemplateLiteral14(["abstraction: joy"]))));
      (0, import_kolmafia20.chew)($item(_templateObject1333 || (_templateObject1333 = _taggedTemplateLiteral14(["abstraction: joy"]))));
    }
  },
  dmt: {
    ready: () => get("_machineTunnelsAdv") < 5,
    run: () => {
      familiar($familiar(_templateObject1343 || (_templateObject1343 = _taggedTemplateLiteral14(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.FreeFight);
    }
  },
  chestXRay: {
    ready: () => get("_chestXRayUsed") < 3,
    run: () => {
      SourceTerminal_exports.educate($skill(_templateObject1353 || (_templateObject1353 = _taggedTemplateLiteral14(["Turbo"]))));
      var shirt = $item(_templateObject1363 || (_templateObject1363 = _taggedTemplateLiteral14(["makeshift garbage shirt"])));
      if (!have(shirt))
        (0, import_kolmafia20.cliExecute)("fold ".concat(shirt));
      (0, import_kolmafia20.equip)($slot(_templateObject1373 || (_templateObject1373 = _taggedTemplateLiteral14(["shirt"]))), shirt);
      (0, import_kolmafia20.equip)($slot(_templateObject1383 || (_templateObject1383 = _taggedTemplateLiteral14(["acc1"]))), $item(_templateObject1392 || (_templateObject1392 = _taggedTemplateLiteral14(["Lil' Doctor\u2122 bag"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  shatterPunch: {
    ready: () => get("_shatteringPunchUsed") < 3,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  mobHit: {
    ready: () => !get("_gingerbreadMobHitUsed"),
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  shockingLick: {
    ready: () => get("shockingLickCharges") > 0,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  lecture: {
    ready: () => get("_pocketProfessorLectures") < 1,
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject1402 || (_templateObject1402 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral14(["Kramco Sausage-o-Matic\u2122"]))));
      familiar($familiar(_templateObject1423 || (_templateObject1423 = _taggedTemplateLiteral14(["Pocket Professor"]))));
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  backupCamera: {
    ready: () => get("lastCopyableMonster") === $monster(_templateObject1433 || (_templateObject1433 = _taggedTemplateLiteral14(["sausage goblin"]))) && get("_backUpUses") < 7,
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject1443 || (_templateObject1443 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject1453 || (_templateObject1453 = _taggedTemplateLiteral14(["Kramco Sausage-o-Matic\u2122"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject1463 || (_templateObject1463 = _taggedTemplateLiteral14(["acc3"]))), $item(_templateObject1472 || (_templateObject1472 = _taggedTemplateLiteral14(["backup camera"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  deepDark: {
    ready: () => !have($effect(_templateObject1482 || (_templateObject1482 = _taggedTemplateLiteral14(["Visions of the Deep Dark Deeps"])))),
    run: () => {
      prep(Quest.DeepDark);
      var resist = 1 - (0, import_kolmafia20.elementalResistance)($element(_templateObject1492 || (_templateObject1492 = _taggedTemplateLiteral14(["spooky"])))) / 100;
      if (resist <= 0)
        throw "invalid resist value ".concat(resist, " calculated?");
      var maxMultiplier = 4;
      var needed = (0, import_kolmafia20.myMaxhp)() * maxMultiplier * resist;
      if ((0, import_kolmafia20.myMaxhp)() < 500 || (0, import_kolmafia20.myMaxhp)() < needed)
        throw "Not enough HP for deep dark visions";
      if ((0, import_kolmafia20.myHp)() < needed)
        (0, import_kolmafia20.cliExecute)("cast * ".concat($skill(_templateObject1502 || (_templateObject1502 = _taggedTemplateLiteral14(["Cannelloni Cocoon"])))));
      if ((0, import_kolmafia20.myHp)() < needed)
        throw "Failed to heal enough for Deep Dark Visions?";
      (0, import_kolmafia20.useSkill)($skill(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral14(["Deep Dark Visions"]))));
      while ((0, import_kolmafia20.myHp)() < (0, import_kolmafia20.myMaxhp)() * 0.9) {
        (0, import_kolmafia20.useSkill)($skill(_templateObject1523 || (_templateObject1523 = _taggedTemplateLiteral14(["Cannelloni Cocoon"]))));
      }
    }
  },
  vintnerBackup: {
    ready: () => get("lastCopyableMonster") === $monster(_templateObject1533 || (_templateObject1533 = _taggedTemplateLiteral14(["sausage goblin"]))) && get("_backUpUses") < 11,
    run: () => {
      (0, import_kolmafia20.changeMcd)(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);
      adventure(toxicTeacups, MacroList.StenchFreeFight);
    }
  },
  nep: {
    ready: () => get("_neverendingPartyFreeTurns") < 10,
    run: () => {
      (0, import_kolmafia20.changeMcd)(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);
      var checkQuest = () => get("_questPartyFair") === "unstarted";
      if (checkQuest()) {
        (0, import_kolmafia20.visitUrl)((0, import_kolmafia20.toUrl)(neverendingParty));
        var choice = ["food", "booze"].includes(get("_questPartyFairQuest")) ? 1 : 2;
        (0, import_kolmafia20.runChoice)(choice);
        if (checkQuest())
          throw "Failed to grab Neverending Party Quest";
      }
      adventure(neverendingParty, MacroList.StenchFreeFight);
    }
  },
  lastLatteRefill: {
    ready: () => get("_latteRefillsUsed") < 3,
    run: () => {
      (0, import_kolmafia20.equip)($slot(_templateObject1543 || (_templateObject1543 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject1553 || (_templateObject1553 = _taggedTemplateLiteral14(["latte lovers member's mug"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject1562 || (_templateObject1562 = _taggedTemplateLiteral14(["pants"]))), $item(_templateObject1572 || (_templateObject1572 = _taggedTemplateLiteral14(["Cargo Cultist Shorts"]))));
      if (get("_latteDrinkUsed"))
        (0, import_kolmafia20.cliExecute)("latte refill pumpkin cinnamon vanilla");
      checkEffect($effect(_templateObject1582 || (_templateObject1582 = _taggedTemplateLiteral14(["Ode to Booze"]))));
      familiar($familiar(_templateObject1592 || (_templateObject1592 = _taggedTemplateLiteral14(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.LatteGulpRunaway);
    }
  }
};
function hasRemainingFreeFights() {
  return Object.values(levelingEvents).some((event) => event.ready());
}
var oneOffEvents = {
  nanobrainy: () => {
    if (!get("_gingerbreadClockAdvanced"))
      adventure(civicCenter, Macro.abort());
    if (!have($effect(_templateObject1602 || (_templateObject1602 = _taggedTemplateLiteral14(["Nanobrainy"])))) && get("_nanorhinoCharge") > 99) {
      (0, import_kolmafia20.equip)($slot(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject1623 || (_templateObject1623 = _taggedTemplateLiteral14(["vampyric cloake"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject1633 || (_templateObject1633 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject1643 || (_templateObject1643 = _taggedTemplateLiteral14(["latte lovers member's mug"]))));
      familiar($familiar(_templateObject1653 || (_templateObject1653 = _taggedTemplateLiteral14(["Nanorhino"]))));
      adventure(upscaleDistrict, MacroList.Nanobrainy);
      checkEffect($effect(_templateObject1662 || (_templateObject1662 = _taggedTemplateLiteral14(["Nanobrainy"]))));
    }
  },
  innerElf: () => {
    if ((0, import_kolmafia20.myLevel)() >= 13 && !have($effect(_templateObject1672 || (_templateObject1672 = _taggedTemplateLiteral14(["Inner Elf"]))))) {
      familiar($familiar(_templateObject1682 || (_templateObject1682 = _taggedTemplateLiteral14(["Machine Elf"]))));
      var prev = get("lastCopyableMonster");
      Clan.with(FAX_AND_SLIME_CLAN, () => adventure(slimeTube, MacroList.MotherSlime));
      checkEffect($effect(_templateObject1692 || (_templateObject1692 = _taggedTemplateLiteral14(["Inner Elf"]))));
      if (prev && get("lastCopyableMonster") === $monster(_templateObject1702 || (_templateObject1702 = _taggedTemplateLiteral14(["Mother Slime"])))) {
        _set("lastCopyableMonster", prev);
      }
    }
  },
  meteorUngulith: () => {
    var fax = $item(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral14(["photocopied monster"])));
    var faxMon = $monster(_templateObject1723 || (_templateObject1723 = _taggedTemplateLiteral14(["ungulith"])));
    if (!have(fax))
      Clan.with(FAX_AND_SLIME_CLAN, () => (0, import_kolmafia20.cliExecute)("fax receive"));
    if (!(0, import_kolmafia20.visitUrl)("desc_item.php?whichitem=".concat(fax.descid)).includes("".concat(faxMon))) {
      throw "Failed to retrieve fax of ".concat(faxMon);
    }
    (0, import_kolmafia20.equip)($slot(_templateObject1733 || (_templateObject1733 = _taggedTemplateLiteral14(["weapon"]))), $item(_templateObject1743 || (_templateObject1743 = _taggedTemplateLiteral14(["Fourth of May Cosplay Saber"]))));
    familiar($familiar(_templateObject1753 || (_templateObject1753 = _taggedTemplateLiteral14(["Machine Elf"]))));
    adventureUrl("inv_use.php?pwd=&whichitem=".concat((0, import_kolmafia20.toInt)(fax)), MacroList.MeteorForce);
    checkAvailable($item(_templateObject1762 || (_templateObject1762 = _taggedTemplateLiteral14(["corrupted marrow"]))));
  },
  foamYourself: () => {
    if (!have($effect(_templateObject1772 || (_templateObject1772 = _taggedTemplateLiteral14(["Fireproof Foam Suit"]))))) {
      (0, import_kolmafia20.equip)($slot(_templateObject1782 || (_templateObject1782 = _taggedTemplateLiteral14(["weapon"]))), $item(_templateObject1792 || (_templateObject1792 = _taggedTemplateLiteral14(["Fourth of May Cosplay Saber"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject1802 || (_templateObject1802 = _taggedTemplateLiteral14(["off-hand"]))), $item(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral14(["industrial fire extinguisher"]))));
      familiar($familiar(_templateObject1823 || (_templateObject1823 = _taggedTemplateLiteral14(["Machine Elf"]))));
      adventure(direWarren, MacroList.FoamForce);
      checkEffect($effect(_templateObject1833 || (_templateObject1833 = _taggedTemplateLiteral14(["Fireproof Foam Suit"]))));
    }
  },
  meteorShower: () => {
    if (!have($effect(_templateObject1843 || (_templateObject1843 = _taggedTemplateLiteral14(["Meteor Showered"]))))) {
      tryUse($item(_templateObject1853 || (_templateObject1853 = _taggedTemplateLiteral14(["tiny bottle of absinthe"]))));
      (0, import_kolmafia20.equip)($slot(_templateObject1862 || (_templateObject1862 = _taggedTemplateLiteral14(["weapon"]))), $item(_templateObject1872 || (_templateObject1872 = _taggedTemplateLiteral14(["Fourth of May Cosplay Saber"]))));
      familiar($familiar(_templateObject1882 || (_templateObject1882 = _taggedTemplateLiteral14(["Machine Elf"]))));
      var collar = $item(_templateObject1892 || (_templateObject1892 = _taggedTemplateLiteral14(["disintegrating spiky collar"])));
      if (have($effect(_templateObject1902 || (_templateObject1902 = _taggedTemplateLiteral14(["Absinthe-Minded"])))) && !have(collar) && !have(itemToEffect(collar))) {
        mapMonster(statelyPleasureDome, $monster(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral14(["toothless mastiff bitch"]))), MacroList.FreeFight);
        checkAvailable(collar);
        (0, import_kolmafia20.use)(collar);
      } else {
        adventure(direWarren, MacroList.MeteorForce);
      }
      checkEffect($effect(_templateObject1923 || (_templateObject1923 = _taggedTemplateLiteral14(["Meteor Showered"]))));
    }
  },
  batform: () => {
    if (!have($effect(_templateObject1933 || (_templateObject1933 = _taggedTemplateLiteral14(["Bat-Adjacent Form"]))))) {
      (0, import_kolmafia20.equip)($slot(_templateObject1943 || (_templateObject1943 = _taggedTemplateLiteral14(["back"]))), $item(_templateObject1953 || (_templateObject1953 = _taggedTemplateLiteral14(["vampyric cloake"]))));
      (0, import_kolmafia20.useSkill)($skill(_templateObject1962 || (_templateObject1962 = _taggedTemplateLiteral14(["The Ode to Booze"]))));
      familiar($familiar(_templateObject1972 || (_templateObject1972 = _taggedTemplateLiteral14(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.BatFormRunaway);
      checkEffect($effect(_templateObject1982 || (_templateObject1982 = _taggedTemplateLiteral14(["Bat-Adjacent Form"]))));
    }
  }
};
function familiar(fam) {
  (0, import_kolmafia20.useFamiliar)(fam);
  var costume = (/* @__PURE__ */ new Map([[$familiar(_templateObject1992 || (_templateObject1992 = _taggedTemplateLiteral14(["Machine Elf"]))), "mp"], [$familiar(_templateObject2002 || (_templateObject2002 = _taggedTemplateLiteral14(["Pocket Professor"]))), "hp"], [$familiar(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral14(["Rockin' Robin"]))), "myst"]])).get(fam);
  if (fam === $familiar(_templateObject2023 || (_templateObject2023 = _taggedTemplateLiteral14(["Machine Elf"])))) {
    while ((0, import_kolmafia20.myHp)() < (0, import_kolmafia20.myMaxhp)() && (0, import_kolmafia20.myMp)() > MP_SAFE_LIMIT) {
      (0, import_kolmafia20.useSkill)($skill(_templateObject2033 || (_templateObject2033 = _taggedTemplateLiteral14(["Cannelloni Cocoon"]))));
    }
  }
  if (costume && !get("_mummeryMods").includes("".concat(fam)))
    (0, import_kolmafia20.cliExecute)("mummery ".concat(costume));
}
function selectBestFamiliar() {
  var flag = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : FamiliarFlag.Default;
  if (flag === FamiliarFlag.Wine && !have($item(_templateObject2043 || (_templateObject2043 = _taggedTemplateLiteral14(["1950 Vampire Vintner wine"])))) && !have($effect(_templateObject2053 || (_templateObject2053 = _taggedTemplateLiteral14(["Wine-Befouled"]))))) {
    familiar($familiar(_templateObject2062 || (_templateObject2062 = _taggedTemplateLiteral14(["Vampire Vintner"]))));
  } else if (flag === FamiliarFlag.ToxicTeacups && get("_hipsterAdv") < 7) {
    familiar($familiar(_templateObject2072 || (_templateObject2072 = _taggedTemplateLiteral14(["Artistic Goth Kid"]))));
  } else if (flag === FamiliarFlag.Default && !have($item(_templateObject2082 || (_templateObject2082 = _taggedTemplateLiteral14(["short stack of pancakes"])))) && !have($effect(_templateObject2092 || (_templateObject2092 = _taggedTemplateLiteral14(["Shortly Stacked"]))))) {
    familiar($familiar(_templateObject2103 || (_templateObject2103 = _taggedTemplateLiteral14(["Shorter-Order Cook"]))));
  } else if (flag === FamiliarFlag.Default && !have($item(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral14(["tiny bottle of absinthe"])))) && !have($effect(_templateObject2123 || (_templateObject2123 = _taggedTemplateLiteral14(["Absinthe-Minded"]))))) {
    familiar($familiar(_templateObject2133 || (_templateObject2133 = _taggedTemplateLiteral14(["Green Pixie"]))));
  } else if (!have($item(_templateObject2143 || (_templateObject2143 = _taggedTemplateLiteral14(["rope"])))) && !have($item(_templateObject2153 || (_templateObject2153 = _taggedTemplateLiteral14(["burning newspaper"])))) && !have($item(_templateObject2163 || (_templateObject2163 = _taggedTemplateLiteral14(["burning paper crane"]))))) {
    familiar($familiar(_templateObject2173 || (_templateObject2173 = _taggedTemplateLiteral14(["Garbage Fire"]))));
  } else
    familiar($familiar(_templateObject2183 || (_templateObject2183 = _taggedTemplateLiteral14(["Baby Sandworm"]))));
}

// src/prep.ts
var import_kolmafia21 = require("kolmafia");
var _templateObject398;
function _taggedTemplateLiteral15(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function checkReadyToAscend(checkVoteReady) {
  var badDays = ["april fool's day"];
  var today = (0, import_kolmafia21.holiday)().split("/");
  var badDayToday = today.some((day) => badDays.includes(day.toLowerCase()));
  if (badDayToday)
    throw "Don't want to ascend during ".concat((0, import_kolmafia21.holiday)());
  var banish = $monster(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral15(["Perceiver of Sensations"])));
  var notFound = () => !get("banishedMonsters").toLowerCase().includes(banish.name.toLowerCase());
  if (notFound())
    (0, import_kolmafia21.visitUrl)("museum.php?action=icehouse");
  if (notFound())
    throw "Need to ice house ".concat(banish);
  if ((0, import_kolmafia21.pvpAttacksLeft)() > 0)
    throw "Spend your pvp fites";
  var voterPreCoilNotReady = (0, import_kolmafia21.totalTurnsPlayed)() % 11 !== 1;
  var voterPostCoilNotReady = ((0, import_kolmafia21.totalTurnsPlayed)() + 60) % 11 !== 1;
  if (checkVoteReady && voterPreCoilNotReady && voterPostCoilNotReady) {
    var turnsA = 11 - ((0, import_kolmafia21.totalTurnsPlayed)() % 11 + 10) % 11;
    var turnsB = 11 - (((0, import_kolmafia21.totalTurnsPlayed)() + 60) % 11 + 10) % 11;
    throw "Spend more ".concat(turnsA, " or ").concat(turnsB, " turns for voter monster");
  }
  prepareAscension({
    workshed: "diabolic pizza cube",
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

// src/sweetsynthesis.ts
var import_kolmafia22 = require("kolmafia");
var _templateObject399;
var _templateObject2101;
var _templateObject3100;
var _templateObject417;
var _templateObject517;
var _templateObject615;
var _templateObject715;
var _templateObject815;
var _templateObject915;
var _templateObject1015;
var _templateObject1115;
var _templateObject1215;
var _templateObject1311;
var _templateObject1411;
var _templateObject1511;
var _templateObject1611;
var _templateObject1711;
var _templateObject1811;
var _templateObject1911;
var _templateObject2011;
var _templateObject2114;
var _templateObject2211;
var _templateObject2311;
var _templateObject2411;
var _templateObject2511;
var _templateObject2611;
var _templateObject2711;
var _templateObject2811;
var _templateObject2911;
var _templateObject3011;
var _templateObject3111;
var _templateObject3211;
var _templateObject3311;
var _templateObject3411;
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray11(arr) || _nonIterableSpread5();
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
    return _arrayLikeToArray11(arr);
}
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray11(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit9(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _defineProperty8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _taggedTemplateLiteral16(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var candyType;
(function(candyType2) {
  candyType2["complex"] = "complex";
  candyType2["simple"] = "simple";
})(candyType || (candyType = {}));
function tier(effect) {
  switch (effect) {
    case $effect(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral16(["Synthesis: Hot"]))):
    case $effect(_templateObject2101 || (_templateObject2101 = _taggedTemplateLiteral16(["Synthesis: Cold"]))):
    case $effect(_templateObject3100 || (_templateObject3100 = _taggedTemplateLiteral16(["Synthesis: Pungent"]))):
    case $effect(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral16(["Synthesis: Scary"]))):
    case $effect(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral16(["Synthesis: Greasy"]))):
      return {
        a: candyType.simple,
        b: candyType.simple
      };
    case $effect(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral16(["Synthesis: Strong"]))):
    case $effect(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral16(["Synthesis: Smart"]))):
    case $effect(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral16(["Synthesis: Cool"]))):
    case $effect(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral16(["Synthesis: Hardy"]))):
    case $effect(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral16(["Synthesis: Energy"]))):
      return {
        a: candyType.complex,
        b: candyType.simple
      };
    case $effect(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral16(["Synthesis: Greed"]))):
    case $effect(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral16(["Synthesis: Collection"]))):
    case $effect(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral16(["Synthesis: Movement"]))):
    case $effect(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral16(["Synthesis: Learning"]))):
    case $effect(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral16(["Synthesis: Style"]))):
      return {
        a: candyType.complex,
        b: candyType.complex
      };
  }
  throw "Not a type of synthesis effect: ".concat(effect);
}
var peppermintGroup = [{
  candy: $item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral16(["peppermint twist"]))),
  count: 1
}];
var sugarGroup = [$item(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral16(["sugar shotgun"]))), $item(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral16(["sugar shillelagh"]))), $item(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral16(["sugar shank"]))), $item(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral16(["sugar chapeau"]))), $item(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral16(["sugar shorts"]))), $item(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral16(["sugar shield"]))), $item(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral16(["sugar shirt"])))].map((i) => {
  return {
    candy: i,
    count: 1
  };
});
var transforms = /* @__PURE__ */ new Map([[$item(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral16(["peppermint sprout"]))), peppermintGroup], [$item(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral16(["sugar sheet"]))), sugarGroup]]);
function synthesize(targetEffects, reserveCandies) {
  var _candies;
  var test = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (targetEffects.length === 0)
    return true;
  var candies = (_candies = {}, _defineProperty8(_candies, candyType.complex, []), _defineProperty8(_candies, candyType.simple, []), _candies);
  var inv = (0, import_kolmafia22.getInventory)();
  Object.entries(inv).forEach((_ref) => {
    var _candies2;
    var _ref2 = _slicedToArray9(_ref, 2), name = _ref2[0], count = _ref2[1];
    var item4 = import_kolmafia22.Item.get(name);
    (_candies2 = candies[item4.candyType]) === null || _candies2 === void 0 ? void 0 : _candies2.push({
      candy: item4,
      count
    });
  });
  if (test) {
    candies.complex = [{
      candy: $item(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral16(["bag of many confections"]))),
      count: 1
    }, {
      candy: $item(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral16(["licorice boa"]))),
      count: 1
    }, {
      candy: $item(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral16(["sugar sheet"]))),
      count: 1
    }, {
      candy: $item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral16(["Crimbo candied pecan"]))),
      count: 3
    }, {
      candy: $item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral16(["peppermint sprout"]))),
      count: 3
    }];
    candies.simple = [{
      candy: $item(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral16(["Chubby and Plump bar"]))),
      count: 1
    }];
    (0, import_kolmafia22.print)("Searching for effects:");
    var _iterator = _createForOfIteratorHelper6(targetEffects), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var target = _step.value;
        (0, import_kolmafia22.print)("".concat(target));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var reserved = new Map([].concat(_toConsumableArray5(reserveCandies), [$item(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral16(["Ultra Mega Sour Ball"])))]).map((r) => [r, 999999]));
  var solution = simulate(targetEffects, candies, reserved);
  if (!solution.result)
    return false;
  var _iterator2 = _createForOfIteratorHelper6(solution.pairs), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var pair = _step2.value;
      var _iterator3 = _createForOfIteratorHelper6(pair), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var creatable = _step3.value;
          var source = (0, import_kolmafia22.toItem)(Object.keys((0, import_kolmafia22.getIngredients)(creatable))[0]);
          if (!test && !have(creatable) && transforms.has(source))
            (0, import_kolmafia22.create)(creatable);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (!test)
        (0, import_kolmafia22.sweetSynthesis)(pair[0], pair[1]);
      else
        (0, import_kolmafia22.print)("Synthesis: ".concat(pair[0], ":").concat((0, import_kolmafia22.toInt)(pair[0]) % 5, " and ").concat(pair[1], ":").concat((0, import_kolmafia22.toInt)(pair[1]) % 5));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return true;
}
function simulate(targetEffects, candies, reserveCandies) {
  var sim = {
    result: true,
    pairs: []
  };
  var used = new Map(reserveCandies);
  var markUsed = (item4) => {
    var _used$get;
    return used.set(item4, 1 + ((_used$get = used.get(item4)) !== null && _used$get !== void 0 ? _used$get : 0));
  };
  var _iterator4 = _createForOfIteratorHelper6(targetEffects), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var target = _step4.value;
      var startA = candies[tier(target).a];
      var startB = candies[tier(target).b];
      var res = search(target, startA, startB, used);
      if (!res.found)
        return {
          result: false,
          pairs: []
        };
      sim.pairs.push([res.a, res.b]);
      markUsed(res.a);
      markUsed(res.b);
      if (res.fromA)
        markUsed(res.fromA);
      if (res.fromB)
        markUsed(res.fromB);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return sim;
}
function search(target, setA, setB, used) {
  var fromA = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
  var fromB = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : void 0;
  var indexA = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : setA.length - 1;
  var indexB = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : setB.length - 1;
  var NO_SOLUTION = {
    found: false,
    a: $item(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral16(["none"]))),
    b: $item(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral16(["none"])))
  };
  if (setA.length === 0 || setB.length === 0)
    return NO_SOLUTION;
  var get2 = (set, index) => {
    var candy = set[index].candy;
    var count = set[index].count - (used.get(candy) || 0);
    return {
      candy,
      count
    };
  };
  var A = get2(setA, indexA);
  var B = get2(setB, indexB);
  var haveEnough = A.count > 0 && B.count > 0 && A.candy !== B.candy || A.count >= 2;
  if (haveEnough && (0, import_kolmafia22.sweetSynthesisResult)(A.candy, B.candy) === target) {
    return {
      found: true,
      a: A.candy,
      b: B.candy,
      fromA,
      fromB
    };
  }
  var subA = transforms.get(A.candy);
  var subB = transforms.get(B.candy);
  if (A.count > 0 && subA) {
    if (fromA)
      throw "Can't transform candy again from ".concat(fromA);
    var simA = search(target, subA, setB, used, A.candy, fromB);
    if (simA.found)
      return simA;
  }
  if (B.count > 0 && subB) {
    if (fromB)
      throw "Can't transform candy again from ".concat(fromB);
    var simB = search(target, setA, subB, used, fromA, B.candy);
    if (simB.found)
      return simB;
  }
  if (indexB > 0)
    return search(target, setA, setB, used, fromA, fromB, indexA, indexB - 1);
  if (indexA > 0)
    return search(target, setA, setB, used, fromA, fromB, indexA - 1);
  return NO_SOLUTION;
}

// src/main.ts
var _templateObject400;
var _templateObject2104;
var _templateObject3101;
var _templateObject418;
var _templateObject518;
var _templateObject616;
var _templateObject716;
var _templateObject816;
var _templateObject916;
var _templateObject1016;
var _templateObject1116;
var _templateObject1216;
var _templateObject1314;
var _templateObject1413;
var _templateObject1513;
var _templateObject1613;
var _templateObject1713;
var _templateObject1813;
var _templateObject1913;
var _templateObject2013;
var _templateObject2115;
var _templateObject2212;
var _templateObject2312;
var _templateObject2412;
var _templateObject2512;
var _templateObject2612;
var _templateObject2712;
var _templateObject2812;
var _templateObject2912;
var _templateObject3012;
var _templateObject3113;
var _templateObject3212;
var _templateObject3312;
var _templateObject3412;
var _templateObject3511;
var _templateObject3611;
var _templateObject3711;
var _templateObject3811;
var _templateObject3910;
var _templateObject405;
var _templateObject419;
var _templateObject426;
var _templateObject436;
var _templateObject446;
var _templateObject456;
var _templateObject465;
var _templateObject475;
var _templateObject485;
var _templateObject495;
var _templateObject505;
var _templateObject519;
var _templateObject526;
var _templateObject536;
var _templateObject546;
var _templateObject556;
var _templateObject565;
var _templateObject575;
var _templateObject585;
var _templateObject595;
var _templateObject604;
var _templateObject617;
var _templateObject625;
var _templateObject635;
var _templateObject645;
var _templateObject655;
var _templateObject665;
var _templateObject674;
var _templateObject684;
var _templateObject694;
var _templateObject704;
var _templateObject717;
var _templateObject725;
var _templateObject735;
var _templateObject745;
var _templateObject755;
var _templateObject764;
var _templateObject774;
var _templateObject784;
var _templateObject794;
var _templateObject804;
var _templateObject817;
var _templateObject825;
var _templateObject835;
var _templateObject845;
var _templateObject855;
var _templateObject864;
var _templateObject874;
var _templateObject884;
var _templateObject894;
var _templateObject904;
var _templateObject917;
var _templateObject925;
var _templateObject935;
var _templateObject945;
var _templateObject954;
var _templateObject964;
var _templateObject974;
var _templateObject984;
var _templateObject994;
var _templateObject1004;
var _templateObject1017;
var _templateObject1025;
var _templateObject1035;
var _templateObject1045;
var _templateObject1054;
var _templateObject1064;
var _templateObject1074;
var _templateObject1084;
var _templateObject1094;
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _taggedTemplateLiteral17(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
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
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit10(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
var choiceAdventures2 = [
  [297, 3],
  [326, 1],
  [1119, ""],
  [1203, 4],
  [1204, 1],
  [1208, 3],
  [1215, 1],
  [1222, 1],
  [1223, 1],
  [1224, 2],
  [1225, 1],
  [1226, 2],
  [1227, 1],
  [1228, 3],
  [1310, ""],
  [1322, ""],
  [1324, 5],
  [1340, 2],
  [1386, 4],
  [1387, 3]
].map((_ref) => {
  var _ref2 = _slicedToArray10(_ref, 2), id = _ref2[0], value = _ref2[1];
  return ["choiceAdventure".concat(id), value];
});
function checkMainClan() {
  if (Clan.get().name !== MAIN_CLAN)
    throw "Not in main clan?";
}
function main() {
  var argString = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var args = argString.split(" ");
  var checkVote = true;
  var _iterator = _createForOfIteratorHelper7(args), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var arg = _step.value;
      if (arg.match(/novote/))
        checkVote = false;
      if (arg.match(/test/)) {
        validateQuestOutfits();
        synthesize($effects(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral17(["Synthesis: Collection, Synthesis: Learning, Synthesis: Greed"]))), /* @__PURE__ */ new Set(), true);
        return;
      }
      if (arg.match(/batfellow/)) {
        batfellow();
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  sinceKolmafiaRevision(26624);
  if (MAIN_CLAN.length < 1)
    throw "seventyhccs_main_clan property not set";
  if (FAX_AND_SLIME_CLAN.length < 1)
    throw "seventyhccs_side_clan not set";
  var startTime = (0, import_kolmafia23.gametimeToInt)();
  if ((0, import_kolmafia23.myPath)() !== "Community Service") {
    checkReadyToAscend(checkVote);
    if (!(0, import_kolmafia23.canInteract)() || !(0, import_kolmafia23.userConfirm)("Ready to Ascend into Community Service?"))
      (0, import_kolmafia23.abort)();
    ascend(Paths.CommunityService, $class(_templateObject400 || (_templateObject400 = _taggedTemplateLiteral17(["Sauceror"]))), Lifestyle.hardcore, "wallaby", $item(_templateObject2104 || (_templateObject2104 = _taggedTemplateLiteral17(["astral six-pack"]))), $item(_templateObject3101 || (_templateObject3101 = _taggedTemplateLiteral17(["astral statuette"]))));
  }
  if ((0, import_kolmafia23.myClass)() !== $class(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral17(["Sauceror"]))))
    throw "Don't yet know how to run this as ".concat((0, import_kolmafia23.myClass)());
  (0, import_kolmafia23.print)("Save the Kingdom, save the world. Community Service time!", "green");
  (0, import_kolmafia23.print)("Using main clan ".concat(MAIN_CLAN, " and fax/slime clan ").concat(FAX_AND_SLIME_CLAN));
  (0, import_kolmafia23.visitUrl)("council.php");
  withContext(levelAndDoQuests, [
    ["breakableHandling".concat((0, import_kolmafia23.toInt)($item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral17(["makeshift garbage shirt"]))))), 2],
    ["customCombatScript", "seventy_hccs"]
  ].concat(_toConsumableArray6(choiceAdventures2)));
  var endTime = (0, import_kolmafia23.gametimeToInt)();
  var duration = endTime - startTime;
  (0, import_kolmafia23.print)("Community Service completed in ".concat(duration, " miliseconds"), "green");
}
function openQuestZones() {
  [["questM23Meatsmith", "meatsmith"], ["questM24Doc", "doc"], ["questM25Armorer", "armory"]].forEach((_ref3) => {
    var _ref4 = _slicedToArray10(_ref3, 2), prop = _ref4[0], id = _ref4[1];
    if (get(prop).toLowerCase() !== "unstarted")
      return;
    (0, import_kolmafia23.visitUrl)("shop.php?whichshop=".concat(id, "&action=talk"));
    (0, import_kolmafia23.runChoice)(1);
  });
}
function preCoilWire() {
  (0, import_kolmafia23.visitUrl)("tutorial.php?action=toot");
  if (STILLSUIT_FAMILIAR !== $familiar(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral17(["none"])))) {
    (0, import_kolmafia23.visitUrl)("familiar.php?action=equip&pwd&whichfam=".concat((0, import_kolmafia23.toInt)(STILLSUIT_FAMILIAR), "&whichitem=10932"));
  }
  while (get("_deluxeKlawSummons") < 3) {
    (0, import_kolmafia23.visitUrl)("clan_viplounge.php?action=klaw");
  }
  [$item(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral17(["letter from King Ralph XI"]))), $item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral17(["pork elf goodies sack"]))), $item(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral17(["pack of KWE trading card"]))), $item(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral17(["banana candle"]))), $item(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral17(["ear candle"]))), $item(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral17(["natural magick candle"]))), $item(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral17(["rainbow glitter candle"]))), $item(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral17(["votive of confidence"])))].forEach(tryUse);
  if (FORTUNE_TELLER_FRIEND.length > 0 && get("_clanFortuneConsultUses") < 1) {
    checkMainClan();
    (0, import_kolmafia23.cliExecute)("fortune ".concat(FORTUNE_TELLER_FRIEND, " garbage batman thick"));
  }
  var calculation = "69";
  var canCalculate = () => get("_universeCalculated") < get("skillLevel144");
  var hasSolution = () => Object.keys((0, import_kolmafia23.reverseNumberology)()).includes(calculation);
  while (canCalculate() && hasSolution()) {
    (0, import_kolmafia23.cliExecute)("numberology ".concat(calculation));
  }
  getPantogramPants();
  if (!get("_deckCardsSeen").includes("1952"))
    (0, import_kolmafia23.cliExecute)("cheat 1952");
  if (have($item(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral17(["1952 Mickey Mantle card"])))))
    (0, import_kolmafia23.autosell)(1, $item(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral17(["1952 Mickey Mantle card"]))));
  (0, import_kolmafia23.useSkill)($skill(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral17(["Communism!"]))));
  if (!get("_chateauDeskHarvested"))
    (0, import_kolmafia23.visitUrl)("place.php?whichplace=chateau&action=chateau_desk1");
  if (!get("_horsery"))
    (0, import_kolmafia23.cliExecute)("horsery dark");
  SongBoom_exports.setSong("Total Eclipse of Your Meat");
  openQuestZones();
  (0, import_kolmafia23.equip)($slot(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral17(["acc2"]))), $item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral17(["Powerful Glove"]))));
  prep(Quest.Beginning);
  (0, import_kolmafia23.visitUrl)("clan_viplounge.php?action=fwshop");
  var _iterator2 = _createForOfIteratorHelper7([
    [$effect(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral17(["That's Just Cloud-Talk, Man"]))), () => (0, import_kolmafia23.visitUrl)("place.php?whichplace=campaway&action=campaway_sky")],
    [$item(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral17(['"DRINK ME" potion']))), () => (0, import_kolmafia23.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2")],
    [$item(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral17(["detuned radio"]))), () => (0, import_kolmafia23.retrieveItem)($item(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral17(["detuned radio"]))))],
    [$item(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral17(["toy accordion"]))), () => (0, import_kolmafia23.retrieveItem)($item(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral17(["toy accordion"]))))],
    [$item(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral17(["turtle totem"]))), () => (0, import_kolmafia23.retrieveItem)($item(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral17(["turtle totem"]))))],
    [$item(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral17(["saucepan"]))), () => (0, import_kolmafia23.retrieveItem)($item(_templateObject3412 || (_templateObject3412 = _taggedTemplateLiteral17(["saucepan"]))))],
    [$item(_templateObject3511 || (_templateObject3511 = _taggedTemplateLiteral17(["battery (AAA)"]))), () => harvestBatteries()],
    [$item(_templateObject3611 || (_templateObject3611 = _taggedTemplateLiteral17(["battery (lantern)"]))), () => (0, import_kolmafia23.create)($item(_templateObject3711 || (_templateObject3711 = _taggedTemplateLiteral17(["battery (lantern)"]))))],
    [$item(_templateObject3811 || (_templateObject3811 = _taggedTemplateLiteral17(["Brutal brogues"]))), () => (0, import_kolmafia23.cliExecute)("bastille bbq brutalist catapult")],
    [$item(_templateObject3910 || (_templateObject3910 = _taggedTemplateLiteral17(["cop dollar"]))), () => (0, import_kolmafia23.cliExecute)("Detective Solver")],
    [$item(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral17(["cuppa Loyal tea"]))), () => (0, import_kolmafia23.cliExecute)("teatree loyal")],
    [$item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral17(["flimsy hardwood scraps"]))), () => (0, import_kolmafia23.visitUrl)("shop.php?whichshop=lathe")],
    [$item(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral17(["weeping willow wand"]))), () => (0, import_kolmafia23.create)($item(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral17(["weeping willow wand"]))))],
    [$item(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral17(["green mana"]))), () => (0, import_kolmafia23.cliExecute)("cheat forest")],
    [$item(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral17(["wrench"]))), () => (0, import_kolmafia23.cliExecute)("cheat wrench")],
    [$item(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral17(["occult jelly donut"]))), () => (0, import_kolmafia23.create)($item(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral17(["occult jelly donut"]))))],
    [$item(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral17(["sombrero-mounted sparkler"]))), () => (0, import_kolmafia23.retrieveItem)($item(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral17(["sombrero-mounted sparkler"]))))],
    [$item(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral17(["Yeg's Motel hand soap"]))), () => (0, import_kolmafia23.cliExecute)("cargo item ".concat($item(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral17(["Yeg's Motel hand soap"])))))],
    [$item(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral17(["your cowboy boots"]))), () => (0, import_kolmafia23.visitUrl)("place.php?whichplace=town_right&action=townright_ltt")],
    [$skill(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral17(["Seek out a Bird"]))), () => (0, import_kolmafia23.use)($item(_templateObject546 || (_templateObject546 = _taggedTemplateLiteral17(["Bird-a-Day calendar"]))))]
  ]), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _step2$value = _slicedToArray10(_step2.value, 2), check = _step2$value[0], retrieve = _step2$value[1];
      if (!have(check))
        retrieve();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (!get("hasRange")) {
    var range = $item(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral17(["Dramatic\u2122 range"])));
    if (!have(range))
      (0, import_kolmafia23.retrieveItem)(range);
    (0, import_kolmafia23.use)(range);
  }
  vote();
  scavengeDaycare();
  if (!get("_borrowedTimeUsed")) {
    if (!have($item(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral17(["borrowed time"])))))
      (0, import_kolmafia23.create)($item(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral17(["borrowed time"]))));
    (0, import_kolmafia23.use)($item(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral17(["borrowed time"]))));
  }
  (0, import_kolmafia23.changeMcd)(10);
  if ((0, import_kolmafia23.myHp)() < (0, import_kolmafia23.myMaxhp)() * 0.9)
    (0, import_kolmafia23.cliExecute)("hottub");
  for (var _i2 = 0, _Object$values = Object.values(preCoilEvents); _i2 < _Object$values.length; _i2++) {
    var event = _Object$values[_i2];
    if (event.ready())
      event.run();
  }
  spendAllMpOnLibrams();
}
function postCoilWire() {
  tryUse($item(_templateObject556 || (_templateObject556 = _taggedTemplateLiteral17(["MayDay\u2122 supply package"]))));
  if (have($item(_templateObject565 || (_templateObject565 = _taggedTemplateLiteral17(["space blanket"])))))
    (0, import_kolmafia23.autosell)(1, $item(_templateObject575 || (_templateObject575 = _taggedTemplateLiteral17(["space blanket"]))));
  if (have($item(_templateObject585 || (_templateObject585 = _taggedTemplateLiteral17(["occult jelly donut"])))))
    (0, import_kolmafia23.eat)($item(_templateObject595 || (_templateObject595 = _taggedTemplateLiteral17(["occult jelly donut"]))));
  (0, import_kolmafia23.cliExecute)("Briefcase e spell spooky -combat");
  [
    $skill(_templateObject604 || (_templateObject604 = _taggedTemplateLiteral17(["Advanced Cocktailcrafting"]))),
    $skill(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral17(["Advanced Saucecrafting"]))),
    $skill(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral17(["Chubby and Plump"]))),
    $skill(_templateObject635 || (_templateObject635 = _taggedTemplateLiteral17(["Perfect Freeze"]))),
    $skill(_templateObject645 || (_templateObject645 = _taggedTemplateLiteral17(["Prevent Scurvy and Sobriety"]))),
    $skill(_templateObject655 || (_templateObject655 = _taggedTemplateLiteral17(["Summon Alice's Army Cards"]))),
    $skill(_templateObject665 || (_templateObject665 = _taggedTemplateLiteral17(["Summon Crimbo Candy"])))
  ].forEach((skill) => (0, import_kolmafia23.useSkill)(skill));
  acquireEffect($effect(_templateObject674 || (_templateObject674 = _taggedTemplateLiteral17(["Ode to Booze"]))));
  (0, import_kolmafia23.print)("Nanorhino start: have ".concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
  oneOffEvents.nanobrainy();
  (0, import_kolmafia23.print)("Nanorhino end: have ".concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
  if (get("_saberMod") < 1)
    (0, import_kolmafia23.cliExecute)("saber familiar");
  $effects(_templateObject684 || (_templateObject684 = _taggedTemplateLiteral17(["All Is Forgiven, Sparkly!, Witch Breaded"]))).forEach(wishEffect);
  useDroppedItems();
  [$item(_templateObject694 || (_templateObject694 = _taggedTemplateLiteral17(["oil of expertise"]))), $item(_templateObject704 || (_templateObject704 = _taggedTemplateLiteral17(["philter of phorce"]))), $item(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral17(["ointment of the occult"]))), $item(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral17(["eyedrops of the ermine"])))].forEach((saucePotion) => {
    if (!have(saucePotion) && !have(itemToEffect(saucePotion)))
      (0, import_kolmafia23.create)(saucePotion);
  });
  checkMainClan();
  $effects(_templateObject735 || (_templateObject735 = _taggedTemplateLiteral17(["[1701]Hip to the Jive, In a Lather"]))).forEach(acquireEffect);
  (0, import_kolmafia23.print)("Pizza start: have ".concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
  eatPizzas();
  (0, import_kolmafia23.print)("Pizza end: have ".concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
  var toSynth = [$effect(_templateObject745 || (_templateObject745 = _taggedTemplateLiteral17(["Synthesis: Smart"]))), $effect(_templateObject755 || (_templateObject755 = _taggedTemplateLiteral17(["Synthesis: Learning"])))].filter((effect) => !have(effect));
  if (toSynth.length > 0) {
    (0, import_kolmafia23.cliExecute)("garden pick");
    (0, import_kolmafia23.cliExecute)("refresh inventory");
    var wantToKeep = [$item(_templateObject764 || (_templateObject764 = _taggedTemplateLiteral17(["Chubby and Plump bar"]))), $item(_templateObject774 || (_templateObject774 = _taggedTemplateLiteral17(["sugar sheet"])))];
    for (var tries = 0; tries <= wantToKeep.length; tries++) {
      var toKeep = new Set(wantToKeep.slice(tries));
      if (!toKeep.has($item(_templateObject784 || (_templateObject784 = _taggedTemplateLiteral17(["sugar sheet"])))))
        (0, import_kolmafia23.useSkill)($skill(_templateObject794 || (_templateObject794 = _taggedTemplateLiteral17(["Summon Sugar Sheets"]))));
      if (synthesize(toSynth, toKeep))
        break;
      else if (toKeep.size === 0)
        throw "Unable to find a combination for all synthesis targets";
    }
  }
  var water = $item(_templateObject804 || (_templateObject804 = _taggedTemplateLiteral17(["cold-filtered water"])));
  if (get("tomeSummons") < 3 && !have(water) && !have(itemToEffect(water)))
    (0, import_kolmafia23.create)(water);
  tryUse(water);
  [
    $item(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral17(["Chubby and Plump bar"]))),
    $item(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral17(["Napalm In The Morning\u2122 candle"]))),
    $item(_templateObject835 || (_templateObject835 = _taggedTemplateLiteral17(["Salsa Caliente\u2122 candle"]))),
    $item(_templateObject845 || (_templateObject845 = _taggedTemplateLiteral17(["Smoldering Clover\u2122 candle"])))
  ].forEach(tryUse);
  (0, import_kolmafia23.equip)($slot(_templateObject855 || (_templateObject855 = _taggedTemplateLiteral17(["acc2"]))), $item(_templateObject864 || (_templateObject864 = _taggedTemplateLiteral17(["Powerful Glove"]))));
  prep(Quest.Leveling);
  if (have($item(_templateObject874 || (_templateObject874 = _taggedTemplateLiteral17(["LOV Epaulettes"])))))
    prep(Quest.LevelingML);
}
function levelAndDoQuests() {
  Clan.join(MAIN_CLAN);
  var mainstat = (0, import_kolmafia23.myPrimestat)();
  if (haveQuest(Quest.CoilWire)) {
    preCoilWire();
    (0, import_kolmafia23.print)("Coil Wire start: have ".concat((0, import_kolmafia23.myHp)(), "/").concat((0, import_kolmafia23.myMaxhp)(), " HP and ").concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
    (0, import_kolmafia23.print)("	and ".concat((0, import_kolmafia23.myBuffedstat)(mainstat), " (").concat((0, import_kolmafia23.myBasestat)(mainstat), ") ").concat(mainstat, "."));
    prepAndDoQuest(Quest.CoilWire);
    (0, import_kolmafia23.print)("Coil Wire done: have ".concat((0, import_kolmafia23.myHp)(), "/").concat((0, import_kolmafia23.myMaxhp)(), " HP and ").concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
  }
  if (hasRemainingFreeFights()) {
    postCoilWire();
    (0, import_kolmafia23.print)("Leveling start: have ".concat((0, import_kolmafia23.myHp)(), "/").concat((0, import_kolmafia23.myMaxhp)(), " HP and ").concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP."));
    leveling:
      while (true) {
        var blindness = $effect(_templateObject884 || (_templateObject884 = _taggedTemplateLiteral17(["Temporary Blindness"])));
        if (have(blindness) && get("_hotTubSoaks") < 5)
          (0, import_kolmafia23.cliExecute)("hottub");
        if (have(blindness))
          throw "Can't handle ".concat(blindness);
        var maxMPGains = ((0, import_kolmafia23.myMaxmp)() - (0, import_kolmafia23.myMp)()) / 15;
        var maxSoulFoodCasts = (0, import_kolmafia23.mySoulsauce)() / (0, import_kolmafia23.soulsauceCost)($skill(_templateObject894 || (_templateObject894 = _taggedTemplateLiteral17(["Soul Food"]))));
        var soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
        if (soulFoodCasts > 0)
          (0, import_kolmafia23.useSkill)(soulFoodCasts, $skill(_templateObject904 || (_templateObject904 = _taggedTemplateLiteral17(["Soul Food"]))));
        while (have($item(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral17(["magical sausage casing"])))) && (get("_sausagesMade") + 1) * 111 < (0, import_kolmafia23.myMeat)() - MEAT_SAFE_LIMIT && (0, import_kolmafia23.myMaxmp)() - (0, import_kolmafia23.myMp)() > 1e3 && (0, import_kolmafia23.myMaxmp)() - (0, import_kolmafia23.mpCost)($skill(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral17(["Summon BRICKOs"])))) > MP_SAFE_LIMIT && get("_sausagesEaten") < 23) {
          (0, import_kolmafia23.create)($item(_templateObject935 || (_templateObject935 = _taggedTemplateLiteral17(["magical sausage"]))));
          (0, import_kolmafia23.eat)($item(_templateObject945 || (_templateObject945 = _taggedTemplateLiteral17(["magical sausage"]))));
        }
        while ((0, import_kolmafia23.myMp)() - (0, import_kolmafia23.mpCost)($skill(_templateObject954 || (_templateObject954 = _taggedTemplateLiteral17(["Summon BRICKOs"])))) > MP_SAFE_LIMIT) {
          castBestLibram();
          continue leveling;
        }
        useDroppedItems();
        while (have($item(_templateObject964 || (_templateObject964 = _taggedTemplateLiteral17(["BRICKO eye brick"])))) && have($item(_templateObject974 || (_templateObject974 = _taggedTemplateLiteral17(["BRICKO brick"]))), BRICKOS_PER_FIGHT)) {
          (0, import_kolmafia23.create)(BRICKO_TARGET_ITEM);
        }
        if (have($item(_templateObject984 || (_templateObject984 = _taggedTemplateLiteral17(["burning newspaper"])))))
          (0, import_kolmafia23.create)($item(_templateObject994 || (_templateObject994 = _taggedTemplateLiteral17(["burning paper crane"]))));
        oneOffEvents.innerElf();
        for (var _i3 = 0, _Object$values2 = Object.values(levelingEvents); _i3 < _Object$values2.length; _i3++) {
          var event = _Object$values2[_i3];
          if (event.ready()) {
            event.run();
            continue leveling;
          }
        }
        break;
      }
    (0, import_kolmafia23.print)("Leveling done: have ".concat((0, import_kolmafia23.myHp)(), "/").concat((0, import_kolmafia23.myMaxhp)(), " HP and ").concat((0, import_kolmafia23.myMp)(), "/").concat((0, import_kolmafia23.myMaxmp)(), " MP at level ").concat((0, import_kolmafia23.myLevel)(), "."));
    (0, import_kolmafia23.print)("	with ".concat((0, import_kolmafia23.myBuffedstat)(mainstat), " (").concat((0, import_kolmafia23.myBasestat)(mainstat), ") ").concat(mainstat, "."));
  }
  checkMainClan();
  (0, import_kolmafia23.cliExecute)("shower hot");
  (0, import_kolmafia23.changeMcd)(0);
  prepAndDoQuest(Quest.Muscle);
  prepAndDoQuest(Quest.Moxie);
  prepAndDoQuest(Quest.HP);
  if (haveQuest(Quest.SpellDamage)) {
    oneOffEvents.innerElf();
    oneOffEvents.meteorUngulith();
    if (!have($effect(_templateObject1004 || (_templateObject1004 = _taggedTemplateLiteral17(["Cowrruption"])))))
      (0, import_kolmafia23.use)($item(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral17(["corrupted marrow"]))));
    prepAndDoQuest(Quest.SpellDamage);
  }
  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    oneOffEvents.innerElf();
    oneOffEvents.meteorShower();
    prepAndDoQuest(Quest.WeaponDamage);
  }
  if (haveQuest(Quest.CombatFrequency)) {
    (0, import_kolmafia23.equip)($slot(_templateObject1025 || (_templateObject1025 = _taggedTemplateLiteral17(["acc2"]))), $item(_templateObject1035 || (_templateObject1035 = _taggedTemplateLiteral17(["Powerful Glove"]))));
    prepAndDoQuest(Quest.CombatFrequency);
  }
  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.foamYourself();
    prepAndDoQuest(Quest.HotResist);
  }
  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.meteorShower();
    prep(Quest.FamiliarWeight);
    var loveSong = $item(_templateObject1045 || (_templateObject1045 = _taggedTemplateLiteral17(["love song of icy revenge"])));
    var coldHeart = itemToEffect(loveSong);
    var icyWeight = Math.ceil(2.5 * Math.min(4, (0, import_kolmafia23.itemAmount)(loveSong)));
    var loveSongSufficient = (0, import_kolmafia23.familiarWeight)((0, import_kolmafia23.myFamiliar)()) + (0, import_kolmafia23.weightAdjustment)() + icyWeight >= 295;
    var taffy = $item(_templateObject1054 || (_templateObject1054 = _taggedTemplateLiteral17(["pulled blue taffy"])));
    var swayed = itemToEffect(taffy);
    var wine = $item(_templateObject1064 || (_templateObject1064 = _taggedTemplateLiteral17(["1950 Vampire Vintner wine"])));
    var needWeight = () => (0, import_kolmafia23.familiarWeight)((0, import_kolmafia23.myFamiliar)()) + (0, import_kolmafia23.weightAdjustment)() < 295;
    if (needWeight() && !have(swayed) && have(taffy))
      (0, import_kolmafia23.cliExecute)("use * ".concat(taffy));
    if (needWeight() && !have(coldHeart) && loveSongSufficient)
      (0, import_kolmafia23.cliExecute)("use * ".concat(loveSong));
    if (needWeight() && have(wine)) {
      acquireEffect($effect(_templateObject1074 || (_templateObject1074 = _taggedTemplateLiteral17(["Ode to Booze"]))));
      (0, import_kolmafia23.drink)(wine);
    }
    if (needWeight()) {
      while (have(loveSong) && (0, import_kolmafia23.haveEffect)(coldHeart) < 20) {
        if ((0, import_kolmafia23.itemAmount)(loveSong) * 5 + (0, import_kolmafia23.haveEffect)(coldHeart) < 20)
          (0, import_kolmafia23.cliExecute)("pillkeeper extend");
        (0, import_kolmafia23.use)(loveSong);
      }
    }
    prepAndDoQuest(Quest.FamiliarWeight);
  }
  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform();
    prepAndDoQuest(Quest.ItemDrop);
  }
  prepAndDoQuest(Quest.Mysticality);
  var comic = $item(_templateObject1084 || (_templateObject1084 = _taggedTemplateLiteral17(["Batfellow comic"])));
  if ((0, import_kolmafia23.itemAmount)(comic) < 1) {
    var myFams = import_kolmafia23.Familiar.all().filter((f) => !f.attributes.includes("pokefam") && (0, import_kolmafia23.haveFamiliar)(f) && f !== STILLSUIT_FAMILIAR);
    var randomFam = myFams[Math.floor(Math.random() * myFams.length)];
    if (!randomFam || randomFam === $familiar(_templateObject1094 || (_templateObject1094 = _taggedTemplateLiteral17(["none"]))) || !(0, import_kolmafia23.haveFamiliar)(randomFam)) {
      throw "Failed to select a valid familiar?";
    }
    (0, import_kolmafia23.useFamiliar)(randomFam);
    batfellow();
  }
  prepAndDoQuest(Quest.Donate);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
