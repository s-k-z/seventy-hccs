/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(655);

__webpack_require__(6270);

var entryUnbind = __webpack_require__(1305);

module.exports = entryUnbind('Array', 'flatMap');

/***/ }),

/***/ 6421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(6737);

var path = __webpack_require__(1287);

module.exports = path.Object.entries;

/***/ }),

/***/ 3952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(5677);

__webpack_require__(5809);

var path = __webpack_require__(1287);

module.exports = path.Object.fromEntries;

/***/ }),

/***/ 690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(9628);

var path = __webpack_require__(1287);

module.exports = path.Object.values;

/***/ }),

/***/ 7945:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(7656);

module.exports = parent;

/***/ }),

/***/ 1889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(6421);

module.exports = parent;

/***/ }),

/***/ 6353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(3952);

module.exports = parent;

/***/ }),

/***/ 8629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(690);

module.exports = parent;

/***/ }),

/***/ 6163:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ 9882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ 6288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var create = __webpack_require__(3590);

var definePropertyModule = __webpack_require__(4615);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ 2569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ 5766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(2977);

var toLength = __webpack_require__(97);

var toAbsoluteIndex = __webpack_require__(6782); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ 4822:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var isArray = __webpack_require__(4521);

var wellKnownSymbol = __webpack_require__(3649);

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ 9624:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ 3058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var classofRaw = __webpack_require__(9624);

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ 3478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var ownKeys = __webpack_require__(929);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var definePropertyModule = __webpack_require__(4615);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ 926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ 4683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IteratorPrototype = __webpack_require__(2365).IteratorPrototype;

var create = __webpack_require__(3590);

var createPropertyDescriptor = __webpack_require__(4677);

var setToStringTag = __webpack_require__(8821);

var Iterators = __webpack_require__(339);

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ 57:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var definePropertyModule = __webpack_require__(4615);

var createPropertyDescriptor = __webpack_require__(4677);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ 4677:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ 5999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(2670);

var definePropertyModule = __webpack_require__(4615);

var createPropertyDescriptor = __webpack_require__(4677);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ 9012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var createIteratorConstructor = __webpack_require__(4683);

var getPrototypeOf = __webpack_require__(729);

var setPrototypeOf = __webpack_require__(7496);

var setToStringTag = __webpack_require__(8821);

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var wellKnownSymbol = __webpack_require__(3649);

var IS_PURE = __webpack_require__(6268);

var Iterators = __webpack_require__(339);

var IteratorsCore = __webpack_require__(2365);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ 8494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544); // Detect IE8's incomplete defineProperty implementation


module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ 6668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ 6918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),

/***/ 4061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var userAgent = __webpack_require__(6918);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

/***/ }),

/***/ 1305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var bind = __webpack_require__(2938);

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),

/***/ 5690:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 7263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(7583);

var getOwnPropertyDescriptor = __webpack_require__(6683).f;

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var setGlobal = __webpack_require__(460);

var copyConstructorProperties = __webpack_require__(3478);

var isForced = __webpack_require__(4451);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ 1266:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isArray = __webpack_require__(4521);

var toLength = __webpack_require__(97);

var bind = __webpack_require__(2938); // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

module.exports = flattenIntoArray;

/***/ }),

/***/ 2938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(6163); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 5897:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(1287);

var global = __webpack_require__(7583);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ 8272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(3058);

var Iterators = __webpack_require__(339);

var wellKnownSymbol = __webpack_require__(3649);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ 7583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

/***/ }),

/***/ 4402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(1324);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 482:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ 275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var fails = __webpack_require__(6544);

var createElement = __webpack_require__(6668); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ 5044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var classof = __webpack_require__(9624);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ 9734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(1314);

var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ 2743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(9491);

var global = __webpack_require__(7583);

var isObject = __webpack_require__(794);

var createNonEnumerableProperty = __webpack_require__(57);

var objectHas = __webpack_require__(4402);

var shared = __webpack_require__(1314);

var sharedKey = __webpack_require__(9137);

var hiddenKeys = __webpack_require__(4639);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ 114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var Iterators = __webpack_require__(339);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ 4521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(9624); // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ 4451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ 794:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6268:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 4026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var anObject = __webpack_require__(2569);

var isArrayIteratorMethod = __webpack_require__(114);

var toLength = __webpack_require__(97);

var bind = __webpack_require__(2938);

var getIteratorMethod = __webpack_require__(8272);

var iteratorClose = __webpack_require__(7093);

var Result = function Result(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function stop(condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function callFn(value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }

    if (_typeof(result) == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

/***/ }),

/***/ 7093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];

  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};

/***/ }),

/***/ 2365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(6544);

var getPrototypeOf = __webpack_require__(729);

var createNonEnumerableProperty = __webpack_require__(57);

var has = __webpack_require__(4402);

var wellKnownSymbol = __webpack_require__(3649);

var IS_PURE = __webpack_require__(6268);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype[ITERATOR].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ 339:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 8640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4061);

var fails = __webpack_require__(6544); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ 9491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var inspectSource = __webpack_require__(9734);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ 3590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

var defineProperties = __webpack_require__(8728);

var enumBugKeys = __webpack_require__(5690);

var hiddenKeys = __webpack_require__(4639);

var html = __webpack_require__(482);

var documentCreateElement = __webpack_require__(6668);

var sharedKey = __webpack_require__(9137);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ 8728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var definePropertyModule = __webpack_require__(4615);

var anObject = __webpack_require__(2569);

var objectKeys = __webpack_require__(5432); // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

/***/ }),

/***/ 4615:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var IE8_DOM_DEFINE = __webpack_require__(275);

var anObject = __webpack_require__(2569);

var toPrimitive = __webpack_require__(2670); // eslint-disable-next-line es/no-object-defineproperty -- safe


var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ 6683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var propertyIsEnumerableModule = __webpack_require__(112);

var createPropertyDescriptor = __webpack_require__(4677);

var toIndexedObject = __webpack_require__(2977);

var toPrimitive = __webpack_require__(2670);

var has = __webpack_require__(4402);

var IE8_DOM_DEFINE = __webpack_require__(275); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ 4012:
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ 729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var toObject = __webpack_require__(1324);

var sharedKey = __webpack_require__(9137);

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(926);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ 8356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(4402);

var toIndexedObject = __webpack_require__(2977);

var indexOf = __webpack_require__(5766).indexOf;

var hiddenKeys = __webpack_require__(4639);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ 5432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(8356);

var enumBugKeys = __webpack_require__(5690); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ 7496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(2569);

var aPossiblePrototype = __webpack_require__(9882); // `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ 9953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var objectKeys = __webpack_require__(5432);

var toIndexedObject = __webpack_require__(2977);

var propertyIsEnumerable = __webpack_require__(112).f; // `Object.{ entries, values }` methods implementation


var createMethod = function createMethod(TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),

/***/ 929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(5897);

var getOwnPropertyNamesModule = __webpack_require__(9275);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var anObject = __webpack_require__(2569); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ 1287:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

module.exports = global;

/***/ }),

/***/ 1270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var createNonEnumerableProperty = __webpack_require__(57);

var has = __webpack_require__(4402);

var setGlobal = __webpack_require__(460);

var inspectSource = __webpack_require__(9734);

var InternalStateModule = __webpack_require__(2743);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ 3955:
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ 460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var createNonEnumerableProperty = __webpack_require__(57);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ 8821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(4615).f;

var has = __webpack_require__(4402);

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ 9137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(7836);

var uid = __webpack_require__(8284);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ 1314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var setGlobal = __webpack_require__(460);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ 7836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(6268);

var store = __webpack_require__(1314);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ 6782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ 2977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(5044);

var requireObjectCoercible = __webpack_require__(3955);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ 5089:
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ 97:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ 1324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(3955); // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ 2670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ 8191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ 8284:
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ 7786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(8640);

module.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

/***/ }),

/***/ 3649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var shared = __webpack_require__(7836);

var has = __webpack_require__(4402);

var uid = __webpack_require__(8284);

var NATIVE_SYMBOL = __webpack_require__(8640);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

var WellKnownSymbolsStore = shared('wks');
var _Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol : _Symbol && _Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(_Symbol, name)) {
      WellKnownSymbolsStore[name] = _Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var flattenIntoArray = __webpack_require__(1266);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var aFunction = __webpack_require__(6163);

var arraySpeciesCreate = __webpack_require__(4822); // `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap


$({
  target: 'Array',
  proto: true
}, {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

/***/ }),

/***/ 5677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toIndexedObject = __webpack_require__(2977);

var addToUnscopables = __webpack_require__(6288);

var Iterators = __webpack_require__(339);

var InternalStateModule = __webpack_require__(2743);

var defineIterator = __webpack_require__(9012);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ 6270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(6288); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ 6737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var $entries = __webpack_require__(9953).entries; // `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries


$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),

/***/ 5809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var iterate = __webpack_require__(4026);

var createProperty = __webpack_require__(5999); // `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries


$({
  target: 'Object',
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

/***/ }),

/***/ 9628:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var $values = __webpack_require__(9953).values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values


$({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

/***/ }),

/***/ 1662:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(7945);

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var logger_1 = __importDefault(__webpack_require__(8685));

var utils_1 = __webpack_require__(8588);

var ClanError =
/** @class */
function (_super) {
  __extends(ClanError, _super);

  function ClanError(message, reason) {
    var _this = _super.call(this, message) || this;

    _this.reason = reason;
    Object.setPrototypeOf(_this, ClanError.prototype);
    return _this;
  }

  return ClanError;
}(Error);

exports.ClanError = ClanError; // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */

function validate(target, propertyName, descriptor) {
  if (!(descriptor === null || descriptor === void 0 ? void 0 : descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // @ts-ignore


    if (this.id !== kolmafia_1.getClanId()) {
      throw new Error("You are no longer a member of this clan");
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = function toPlayerId(player) {
  return typeof player === "string" ? kolmafia_1.getPlayerId(player) : player;
};

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(function (item) {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

function countedMapToArray(map) {
  return __spread(map).flatMap(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return Array(quantity).fill(item);
  });
}

function countedMapToString(map) {
  return __spread(map).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        quantity = _b[1];

    return quantity + " x " + item;
  }).join(", ");
}

var Clan =
/** @class */
function () {
  function Clan(id, name) {
    this.id = id;
    this.name = name;
  }

  Clan._join = function (id) {
    var result = kolmafia_1.visitUrl("showclan.php?recruiter=1&whichclan=" + id + "&pwd&whichclan=" + id + "&action=joinclan&apply=Apply+to+this+Clan&confirm=on");

    if (!result.includes("clanhalltop.gif")) {
      throw new Error("Could not join clan");
    }

    return Clan.get();
  };

  Clan._withStash = function (borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback) {
    var borrowed = borrowFn();
    var map = arrayToCountedMap(borrowed);

    try {
      return callback(borrowed);
    } finally {
      if (map.size > 0) {
        var returned_1 = arrayToCountedMap(returnFn(borrowed));
        map.forEach(function (quantity, item) {
          var remaining = quantity - (returned_1.get(item) || 0);

          if (remaining > 0) {
            map.set(item, remaining);
          } else {
            map["delete"](item);
          }
        });

        if (map.size > 0) {
          logger_1["default"].error("Failed to return <b>" + countedMapToString(map) + "</b> to <b>" + this.name + "</b> stash");
        }
      }
    }
  };
  /**
   * Join a clan and return its instance
   * @param clanIdOrName Clan id or name
   */


  Clan.join = function (clanIdOrName) {
    var clanId;

    if (typeof clanIdOrName === "string") {
      var clanName_1 = clanIdOrName.toLowerCase();

      if (clanName_1 === kolmafia_1.getClanName().toLowerCase()) {
        return Clan.get();
      }

      if (!(clanName_1 in clanIdCache)) {
        var clan = Clan.getWhitelisted().find(function (c) {
          return c.name.toLowerCase() === clanName_1;
        });

        if (!clan) {
          throw new Error("Player is not whitelisted to clan");
        }

        clanIdCache[clanName_1] = clan.id;
      }

      clanId = clanIdCache[clanName_1];
    } else {
      clanId = clanIdOrName;

      if (clanId === kolmafia_1.getClanId()) {
        return Clan.get();
      }
    }

    return Clan._join(clanId);
  };
  /**
   * Execute callback as a member of a clan
   * and then restore prior membership
   * @param clanIdOrName Clan id or name
   */


  Clan["with"] = function (clanIdOrName, callback) {
    var startingClan = Clan.get();
    var clan = Clan.join(clanIdOrName);

    try {
      return callback(clan);
    } finally {
      startingClan.join();
    }
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types


  Clan.withStash = function (clanIdOrName, items, callback) {
    return Clan._withStash(function () {
      return Clan["with"](clanIdOrName, function (clan) {
        return clan.take(items);
      });
    }, function (borrowed) {
      return Clan["with"](clanIdOrName, function (clan) {
        return clan.put(borrowed);
      });
    }, callback);
  };
  /**
   * Return player's current Clan
   */


  Clan.get = function () {
    return new Clan(kolmafia_1.getClanId(), kolmafia_1.getClanName());
  };
  /**
   * Get list of clans to which the player is whitelisted
   */


  Clan.getWhitelisted = function () {
    var page = kolmafia_1.visitUrl("clan_signup.php");
    return kolmafia_1.xpath(page, '//select[@name="whichclan"]//option').map(function (option) {
      var validHtml = "<select>" + option + "</select>";
      var id = Number.parseInt(kolmafia_1.xpath(validHtml, '//@value')[0]);
      var name = kolmafia_1.xpath(validHtml, '//text()')[0];
      return new Clan(id, name);
    });
  };
  /**
   * Join clan
   */


  Clan.prototype.join = function () {
    return Clan._join(this.id);
  };

  Clan.prototype.check = function () {
    return kolmafia_1.visitUrl("clan_hall.php").includes("<b>" + this.name + "</b>");
  };
  /**
   * Return the monster that is currently in the current clan's fax machine if any
   */


  Clan.prototype.getCurrentFax = function () {
    var logs = kolmafia_1.visitUrl("clan_log.php");
    var lastFax = logs.match(LOG_FAX_PATTERN);
    if (!lastFax) return null;

    var _a = __read(lastFax, 4),
        monsterName = _a[3];

    if (!monsterName) return null;
    return Monster.get(monsterName);
  };
  /**
   * List available ranks (name, degree and id) from the current clan
   */


  Clan.prototype.getRanks = function () {
    var page = kolmafia_1.visitUrl("clan_whitelist.php");
    return kolmafia_1.xpath(page, '//select[@name="level"]//option').map(function (option) {
      var validHtml = "<select>" + option + "</select>";
      var match = kolmafia_1.xpath(validHtml, '//text()')[0].match(WHITELIST_DEGREE_PATTERN);
      var id = kolmafia_1.xpath(validHtml, '//@value')[0];
      if (!match || !id) return null;

      var _a = __read(match, 3),
          name = _a[1],
          degree = _a[2];

      return {
        name: name,
        degree: Number.parseInt(degree),
        id: Number.parseInt(id)
      };
    }).filter(utils_1.notNull);
  };
  /**
   * Add a player to the current clan's whitelist.
   * If the player is already in the whitelist this will change their rank or title.
   * @param player Player id or name
   * @param rankName Rank to give the player. If not provided they will be given the lowest rank
   * @param title Title to give the player. If not provided, will be blank
   */


  Clan.prototype.addPlayerToWhitelist = function (player, rankName, title) {
    if (title === void 0) {
      title = "";
    }

    var playerId = toPlayerId(player);
    var ranks = this.getRanks();
    var rank = rankName ? ranks.find(function (r) {
      return r.name === rankName;
    }) : ranks.sort(function (a, b) {
      return a.degree - b.degree;
    })[0];
    if (!rank) return false;
    var result = kolmafia_1.visitUrl("clan_whitelist.php?action=add&pwd&addwho=" + playerId + "&level=" + rank.id + "&title=" + title);
    return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
  };
  /**
   * Remove a player from the current clan's whitelist
   * @param player Player id or name
   */


  Clan.prototype.removePlayerFromWhitelist = function (player) {
    var playerId = toPlayerId(player);
    var result = kolmafia_1.visitUrl("clan_whitelist.php?action=updatewl&pwd&who=" + playerId + "&remove=Remove");
    return result.includes("Whitelist updated.");
  };
  /**
   * Return the amount of meat in the current clan's coffer.
   */


  Clan.prototype.getMeatInCoffer = function () {
    var page = kolmafia_1.visitUrl("clan_stash.php");

    var _a = __read(page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], 2),
        meat = _a[1];

    return utils_1.parseNumber(meat);
  };
  /**
   * Add the given amount of meat to the current clan's coffer.
   * @param amount Amount of meat to put in coffer
   */


  Clan.prototype.putMeatInCoffer = function (amount) {
    var result = kolmafia_1.visitUrl("clan_stash.php?pwd&action=contribute&howmuch=" + amount);
    return result.includes("You contributed");
  };

  Clan.prototype.take = function (items) {
    var map = arrayToCountedMap(items);
    map.forEach(function (quantity, item) {
      var e_1, _a, e_2, _b;

      var needed = Math.max(0, quantity - kolmafia_1.availableAmount(item));

      if (needed === 0) {
        return map.set(item, 0);
      }

      var foldGroup = lib_1.getFoldGroup(item);

      try {
        for (var foldGroup_1 = __values(foldGroup), foldGroup_1_1 = foldGroup_1.next(); !foldGroup_1_1.done; foldGroup_1_1 = foldGroup_1.next()) {
          var foldable = foldGroup_1_1.value;
          var quantityToFold = Math.min(needed, kolmafia_1.availableAmount(foldable));

          for (var i = 0; i < quantityToFold; i++) {
            kolmafia_1.cliExecute("fold " + item.name);
            needed--;
          }

          return map.set(item, needed);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (foldGroup_1_1 && !foldGroup_1_1.done && (_a = foldGroup_1["return"])) _a.call(foldGroup_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      kolmafia_1.refreshStash();

      try {
        for (var _c = __values(__spread([item], foldGroup)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var matchingItem = _d.value;
          var quantityToTake = Math.min(needed, kolmafia_1.stashAmount(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!kolmafia_1.takeStash(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              kolmafia_1.cliExecute("fold " + matchingItem.name);
              needed--;
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    });
    return Array.isArray(items) ? countedMapToArray(map) : map;
  };

  Clan.prototype.put = function (items) {
    var map = arrayToCountedMap(items);
    if (!this.check()) throw new Error("Wanted to return " + countedMapToString(map) + " to " + this.name + " but KoLmafia's clan data is out of sync");
    map.forEach(function (quantity, item) {
      kolmafia_1.retrieveItem(quantity, item);
      var returned = Math.min(quantity, kolmafia_1.availableAmount(item));
      kolmafia_1.putStash(returned, item);
      map.set(item, quantity - returned);
    });
    return Array.isArray(items) ? countedMapToArray(map) : map;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Clan.prototype.withStash = function (items, callback) {
    var _this = this;

    var map = arrayToCountedMap(items);
    return Clan._withStash(function () {
      return _this.take(map);
    }, function (borrowed) {
      return _this.put(borrowed);
    }, callback);
  };

  __decorate([validate], Clan.prototype, "getCurrentFax", null);

  __decorate([validate], Clan.prototype, "getRanks", null);

  __decorate([validate], Clan.prototype, "addPlayerToWhitelist", null);

  __decorate([validate], Clan.prototype, "removePlayerFromWhitelist", null);

  __decorate([validate], Clan.prototype, "getMeatInCoffer", null);

  __decorate([validate], Clan.prototype, "putMeatInCoffer", null);

  __decorate([validate], Clan.prototype, "take", null);

  __decorate([validate], Clan.prototype, "put", null);

  __decorate([validate], Clan.prototype, "withStash", null);

  return Clan;
}();

exports.Clan = Clan;

/***/ }),

/***/ 2219:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Copier = void 0;

var Copier =
/** @class */
function () {
  function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
    this.fightCopy = null;
    this.couldCopy = couldCopy;
    this.prepare = prepare;
    this.canCopy = canCopy;
    this.copiedMonster = copiedMonster;
    if (fightCopy) this.fightCopy = fightCopy;
  }

  return Copier;
}();

exports.Copier = Copier;

/***/ }),

/***/ 1762:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adventureMacroAuto = exports.adventureMacro = exports.Macro = exports.getMacroId = void 0;

var kolmafia_1 = __webpack_require__(1664);

var property_1 = __webpack_require__(1347);

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = kolmafia_1.xpath(kolmafia_1.visitUrl("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"" + MACRO_NAME + "\"]/@value");

  if (macroMatches.length === 0) {
    kolmafia_1.visitUrl("account_combatmacros.php?action=new");
    var newMacroText = kolmafia_1.visitUrl("account_combatmacros.php?macroid=0&name=" + MACRO_NAME + "&macrotext=abort&action=save");
    return parseInt(kolmafia_1.xpath(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

exports.getMacroId = getMacroId;

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return item.name;
  }
}

function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(" && ");
  } else {
    return "hascombatitem " + itemOrItems;
  }
}

function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) ? skill.name : kolmafia_1.toInt(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro =
/** @class */
function () {
  function Macro() {
    this.components = [];
  }
  /**
   * Convert macro to string.
   */


  Macro.prototype.toString = function () {
    return this.components.join(";");
  };
  /**
   * Save a macro to a Mafia property for use in a consult script.
   */


  Macro.prototype.save = function () {
    property_1.set(Macro.SAVED_MACRO_PROPERTY, this.toString());
  };
  /**
   * Load a saved macro from the Mafia property.
   */


  Macro.load = function () {
    var _a;

    return (_a = new this()).step.apply(_a, __spread(property_1.get(Macro.SAVED_MACRO_PROPERTY).split(";")));
  };
  /**
   * Clear the saved macro in the Mafia property.
   */


  Macro.clearSaved = function () {
    kolmafia_1.removeProperty(Macro.SAVED_MACRO_PROPERTY);
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    var nextStepsStrings = (_a = []).concat.apply(_a, __spread(nextSteps.map(function (x) {
      return x instanceof Macro ? x.components : [x];
    })));

    this.components = __spread(this.components, nextStepsStrings.filter(function (s) {
      return s.length > 0;
    }));
    return this;
  };
  /**
   * Statefully add one or several steps to a macro.
   * @param nextSteps The steps to add to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.step = function () {
    var _a;

    var nextSteps = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      nextSteps[_i] = arguments[_i];
    }

    return (_a = new this()).step.apply(_a, __spread(nextSteps));
  };
  /**
   * Submit the built macro to KoL. Only works inside combat.
   */


  Macro.prototype.submit = function () {
    var _final = this.toString();

    return kolmafia_1.visitUrl("fight.php?action=macro&macrotext=" + kolmafia_1.urlEncode(_final), true, true);
  };
  /**
   * Set this macro as a KoL native autoattack.
   */


  Macro.prototype.setAutoAttack = function () {
    if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

    if (kolmafia_1.getAutoAttack() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
      // This macro is already set. Don"t make the server request.
      return;
    }

    kolmafia_1.visitUrl("account_combatmacros.php?macroid=" + Macro.cachedMacroId + "&name=" + kolmafia_1.urlEncode(MACRO_NAME) + "&macrotext=" + kolmafia_1.urlEncode(this.toString()) + "&action=save", true, true);
    kolmafia_1.visitUrl("account.php?am=1&action=autoattack&value=" + (99000000 + Macro.cachedMacroId) + "&ajax=1");
    Macro.cachedAutoAttack = this.toString();
  };
  /**
   * Add an "abort" step to this macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.abort = function () {
    return this.step("abort");
  };
  /**
   * Create a new macro with an "abort" step.
   * @returns {Macro} This object itself.
   */


  Macro.abort = function () {
    return new this().abort();
  };
  /**
   * Add an "if" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.if_ = function (condition, ifTrue) {
    return this.step("if " + condition).step(ifTrue).step("endif");
  };
  /**
   * Create a new macro with an "if" statement.
   * @param condition The BALLS condition for the if statement.
   * @param ifTrue Continuation if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.if_ = function (condition, ifTrue) {
    return new this().if_(condition, ifTrue);
  };
  /**
   * Add a "while" statement to this macro.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.while_ = function (condition, contents) {
    return this.step("while " + condition).step(contents).step("endwhile");
  };
  /**
   * Create a new macro with a "while" statement.
   * @param condition The BALLS condition for the if statement.
   * @param contents Loop to repeat while the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.while_ = function (condition, contents) {
    return new this().while_(condition, contents);
  };
  /**
   * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.externalIf = function (condition, ifTrue) {
    return condition ? this.step(ifTrue) : this;
  };
  /**
   * Create a new macro with a condition evaluated at the time of building the macro.
   * @param condition The JS condition.
   * @param ifTrue Continuation to add if the condition is true.
   * @returns {Macro} This object itself.
   */


  Macro.externalIf = function (condition, ifTrue) {
    return new this().externalIf(condition, ifTrue);
  };
  /**
   * Add a repeat step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.repeat = function () {
    return this.step("repeat");
  };
  /**
   * Add one or more skill cast steps to the macro.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.skill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return "skill " + skillBallsMacroName(skill);
    })));
  };
  /**
   * Create a new macro with one or more skill cast steps.
   * @param skills Skills to cast.
   * @returns {Macro} This object itself.
   */


  Macro.skill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).skill.apply(_a, __spread(skills));
  };
  /**
   * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkill = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill));
    })));
  };
  /**
   * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
   * @param skills Skills to try casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkill = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkill.apply(_a, __spread(skills));
  };
  /**
   * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.trySkillRepeat = function () {
    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(skills.map(function (skill) {
      return Macro.if_("hasskill " + skillBallsMacroName(skill), Macro.skill(skill).repeat());
    })));
  };
  /**
   * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
   * @param skills Skills to try repeatedly casting.
   * @returns {Macro} This object itself.
   */


  Macro.trySkillRepeat = function () {
    var _a;

    var skills = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      skills[_i] = arguments[_i];
    }

    return (_a = new this()).trySkillRepeat.apply(_a, __spread(skills));
  };
  /**
   * Add one or more item steps to the macro.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.item = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(items.map(function (itemOrItems) {
      return "use " + itemOrItemsBallsMacroName(itemOrItems);
    })));
  };
  /**
   * Create a new macro with one or more item steps.
   * @param items Items to use. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.item = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).item.apply(_a, __spread(items));
  };
  /**
   * Add one or more item steps to the macro, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.tryItem = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return this.step.apply(this, __spread(items.map(function (item) {
      return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use " + itemOrItemsBallsMacroName(item));
    })));
  };
  /**
   * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
   * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
   * @returns {Macro} This object itself.
   */


  Macro.tryItem = function () {
    var _a;

    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    return (_a = new this()).tryItem.apply(_a, __spread(items));
  };
  /**
   * Add an attack step to the macro.
   * @returns {Macro} This object itself.
   */


  Macro.prototype.attack = function () {
    return this.step("attack");
  };
  /**
   * Create a new macro with an attack step.
   * @returns {Macro} This object itself.
   */


  Macro.attack = function () {
    return new this().attack();
  };

  Macro.SAVED_MACRO_PROPERTY = "libram_savedMacro";
  Macro.cachedMacroId = null;
  Macro.cachedAutoAttack = null;
  return Macro;
}();

exports.Macro = Macro;
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */

function adventureMacro(loc, macro) {
  macro.save();
  kolmafia_1.setAutoAttack(0);

  try {
    kolmafia_1.adv1(loc, 0, "");

    while (kolmafia_1.inMultiFight()) {
      kolmafia_1.runCombat();
    }

    if (kolmafia_1.choiceFollowsFight()) kolmafia_1.visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

exports.adventureMacro = adventureMacro;
/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */

function adventureMacroAuto(loc, autoMacro, nextMacro) {
  if (nextMacro === void 0) {
    nextMacro = null;
  }

  nextMacro = nextMacro !== null && nextMacro !== void 0 ? nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    kolmafia_1.adv1(loc, 0, "");

    while (kolmafia_1.inMultiFight()) {
      kolmafia_1.runCombat();
    }

    if (kolmafia_1.choiceFollowsFight()) kolmafia_1.visitUrl("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

exports.adventureMacroAuto = adventureMacroAuto;

/***/ }),

/***/ 6448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.error = exports.warn = exports.info = exports.log = void 0;

var kolmafia_1 = __webpack_require__(1664); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var logColor = function logColor(color) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var output = args.map(function (x) {
      return x.toString();
    }).join(" ");

    if (color) {
      kolmafia_1.print(output, color);
    } else {
      kolmafia_1.print(output);
    }
  };
};

exports.log = logColor();
exports.info = logColor("blue");
exports.warn = logColor("red");
exports.error = logColor("red");

/***/ }),

/***/ 9803:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.set = exports.get = exports.property = exports.console = exports.logger = void 0;

__exportStar(__webpack_require__(1662), exports);

__exportStar(__webpack_require__(1762), exports);

__exportStar(__webpack_require__(3311), exports);

__exportStar(__webpack_require__(9376), exports);

__exportStar(__webpack_require__(6115), exports);

__exportStar(__webpack_require__(1895), exports);

__exportStar(__webpack_require__(1157), exports);

__exportStar(__webpack_require__(678), exports);

var logger_1 = __webpack_require__(8685);

Object.defineProperty(exports, "logger", ({
  enumerable: true,
  get: function get() {
    return __importDefault(logger_1)["default"];
  }
}));
exports.console = __importStar(__webpack_require__(6448));
exports.property = __importStar(__webpack_require__(1347));

var property_1 = __webpack_require__(1347);

Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return property_1.get;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return property_1.set;
  }
}));

/***/ }),

/***/ 3311:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uneffect = exports.getAverageAdventures = exports.getAverage = exports.noneToNull = exports.canUse = exports.getBanishedMonsters = exports.getZapGroup = exports.getFoldGroup = exports.isCurrentFamiliar = exports.getWandererChance = exports.getFamiliarWandererChance = exports.getKramcoWandererChance = exports.isWandererNow = exports.isVoteWandererNow = exports.haveWandererCounter = exports.getTotalFamiliarWanderers = exports.haveCounter = exports.Wanderer = exports.haveInCampground = exports.have = exports.getRemainingSpleen = exports.getRemainingStomach = exports.getRemainingLiver = exports.getMonsterLocations = exports.canRememberSong = exports.getSongCount = exports.getActiveSongs = exports.getActiveEffects = exports.isSong = exports.getSongLimit = void 0;
/** @module GeneralLibrary */

__webpack_require__(1889);

var kolmafia_1 = __webpack_require__(1664);

var template_string_1 = __webpack_require__(678);

var property_1 = __webpack_require__(1347);

var utils_1 = __webpack_require__(8588);
/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */


function getSongLimit() {
  return 3 + (kolmafia_1.booleanModifier("Four Songs") ? 1 : 0) + kolmafia_1.numericModifier("Additional Song");
}

exports.getSongLimit = getSongLimit;
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */

function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? kolmafia_1.toSkill(skillOrEffect) : skillOrEffect;
  return skill["class"] === template_string_1.$class(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Accordion Thief"], ["Accordion Thief"]))) && skill.buff;
}

exports.isSong = isSong;
/**
 * List all active Effects
 *
 * @category General
 */

function getActiveEffects() {
  return Object.keys(kolmafia_1.myEffects()).map(function (e) {
    return Effect.get(e);
  });
}

exports.getActiveEffects = getActiveEffects;
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */

function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}

exports.getActiveSongs = getActiveSongs;
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */

function getSongCount() {
  return getActiveSongs().length;
}

exports.getSongCount = getSongCount;
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */

function canRememberSong(quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  return getSongLimit() - getSongCount() >= quantity;
}

exports.canRememberSong = canRememberSong;
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */

function getMonsterLocations(monster) {
  return Location.all().filter(function (location) {
    return monster.name in kolmafia_1.appearanceRates(location);
  });
}

exports.getMonsterLocations = getMonsterLocations;
/**
 * Return the player's remaining liver space
 *
 * @category General
 */

function getRemainingLiver() {
  return kolmafia_1.inebrietyLimit() - kolmafia_1.myInebriety();
}

exports.getRemainingLiver = getRemainingLiver;
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */

function getRemainingStomach() {
  return kolmafia_1.fullnessLimit() - kolmafia_1.myFullness();
}

exports.getRemainingStomach = getRemainingStomach;
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */

function getRemainingSpleen() {
  return kolmafia_1.spleenLimit() - kolmafia_1.mySpleenUse();
}

exports.getRemainingSpleen = getRemainingSpleen;
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */

function have(thing, quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  if (thing instanceof Effect) {
    return kolmafia_1.haveEffect(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return kolmafia_1.haveFamiliar(thing);
  }

  if (thing instanceof Item) {
    return kolmafia_1.availableAmount(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return kolmafia_1.haveServant(thing);
  }

  if (thing instanceof Skill) {
    return kolmafia_1.haveSkill(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = kolmafia_1.myThrall();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}

exports.have = have;
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */

function haveInCampground(item) {
  return Object.keys(kolmafia_1.getCampground()).map(function (i) {
    return Item.get(i);
  }).includes(item);
}

exports.haveInCampground = haveInCampground;
var Wanderer;

(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer = exports.Wanderer || (exports.Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName, minTurns, maxTurns) {
  if (minTurns === void 0) {
    minTurns = 0;
  }

  if (maxTurns === void 0) {
    maxTurns = 500;
  }

  return kolmafia_1.getCounters(counterName, minTurns, maxTurns) === counterName;
}

exports.haveCounter = haveCounter;
/**
 * Returns the player's total number of Artistic Goth Kid and/or Mini-Hipster
 * wanderers encountered today
 *
 * @category Wanderers
 */

function getTotalFamiliarWanderers() {
  var hipsterFights = property_1.get("_hipsterAdv");
  var gothFights = property_1.get("_gothKidFights");
  return hipsterFights + gothFights;
}

exports.getTotalFamiliarWanderers = getTotalFamiliarWanderers;
/**
 * Return whether the player has the queried wandering counter
 *
 * @category Wanderers
 */

function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}

exports.haveWandererCounter = haveWandererCounter;
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */

function isVoteWandererNow() {
  return kolmafia_1.totalTurnsPlayed() % 11 == 1;
}

exports.isVoteWandererNow = isVoteWandererNow;
/**
 * Tells us whether we can expect a given wanderer now. Behaves differently
 * for different types of wanderer.
 *
 * - For deterministic wanderers, return whether the player will encounter
 *   the queried wanderer on the next turn
 *
 * - For variable wanderers (window), return whether the player is within
 *   an encounter window for the queried wanderer
 *
 * - For variable wanderers (chance per turn), returns true unless the player
 *   has exhausted the number of wanderers possible
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function isWandererNow(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0);
  }

  if (wanderer == Wanderer.Kramco) {
    return true;
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow();
  }

  if (wanderer === Wanderer.Familiar) {
    return getTotalFamiliarWanderers() < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}

exports.isWandererNow = isWandererNow;
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */

function getKramcoWandererChance() {
  var fights = property_1.get("_sausageFights");
  var lastFight = property_1.get("_lastSausageMonsterTurn");
  var totalTurns = kolmafia_1.totalTurnsPlayed();

  if (fights < 1) {
    return lastFight === totalTurns && kolmafia_1.myTurncount() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}

exports.getKramcoWandererChance = getKramcoWandererChance;
/**
 * Returns the float chance the player will encounter an Artistic Goth Kid or
 * Mini-Hipster wanderer on the next turn, providing a familiar is equipped.
 *
 * NOTE: You must complete one combat with the Artistic Goth Kid before you
 * can encounter any wanderers. Consequently,ƒ the first combat with the
 * Artist Goth Kid is effectively 0% chance to encounter a wanderer.
 *
 * @category Wanderers
 */

function getFamiliarWandererChance() {
  var totalFights = getTotalFamiliarWanderers();
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}

exports.getFamiliarWandererChance = getFamiliarWandererChance;
/**
 * Returns the float chance the player will encounter the queried wanderer
 * on the next turn.
 *
 * @category Wanderers
 * @param wanderer Wanderer to check
 */

function getWandererChance(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer, 0, 0) ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Kramco) {
    getKramcoWandererChance();
  }

  if (wanderer === Wanderer.Vote) {
    return isVoteWandererNow() ? 1.0 : 0.0;
  }

  if (wanderer === Wanderer.Familiar) {
    getFamiliarWandererChance();
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";

  if (haveCounter(begin, 1, 100)) {
    return 0.0;
  }

  var counters = property_1.get("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - kolmafia_1.myTurncount();
    return 1.0 / window;
  }

  return 0.0;
}

exports.getWandererChance = getWandererChance;
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */

function isCurrentFamiliar(familiar) {
  return kolmafia_1.myFamiliar() === familiar;
}

exports.isCurrentFamiliar = isCurrentFamiliar;
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */

function getFoldGroup(item) {
  return Object.entries(kolmafia_1.getRelated(item, "fold")).sort(function (_a, _b) {
    var _c = __read(_a, 2),
        a = _c[1];

    var _d = __read(_b, 2),
        b = _d[1];

    return a - b;
  }).map(function (_a) {
    var _b = __read(_a, 1),
        i = _b[0];

    return Item.get(i);
  });
}

exports.getFoldGroup = getFoldGroup;
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */

function getZapGroup(item) {
  return Object.keys(kolmafia_1.getRelated(item, "zap")).map(function (i) {
    return Item.get(i);
  });
}

exports.getZapGroup = getZapGroup;
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */

function getBanishedMonsters() {
  var e_1, _a;

  var banishes = utils_1.chunk(property_1.get("banishedMonsters").split(":"), 3);
  var result = new Map();

  try {
    for (var banishes_1 = __values(banishes), banishes_1_1 = banishes_1.next(); !banishes_1_1.done; banishes_1_1 = banishes_1.next()) {
      var _b = __read(banishes_1_1.value, 2),
          foe = _b[0],
          banisher = _b[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = kolmafia_1.toItem(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (banishes_1_1 && !banishes_1_1.done && (_a = banishes_1["return"])) _a.call(banishes_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}

exports.getBanishedMonsters = getBanishedMonsters;
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */

function canUse(item) {
  var path = kolmafia_1.myPath();

  if (path !== "Nuclear Autumn") {
    if (template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"], ["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
      return false;
    }
  }

  if (path === "G-Lover") {
    if (!item.name.toLowerCase().includes("g")) return false;
  }

  if (path === "Bees Hate You") {
    if (item.name.toLowerCase().includes("b")) return false;
  }

  return true;
}

exports.canUse = canUse;
/**
 * Turn KoLmafia `none`s to JavaScript `null`s
 *
 * @param thing Thing that can have a mafia "none" value
 */

function noneToNull(thing) {
  if (thing instanceof Effect) {
    return thing === Effect.get("none") ? null : thing;
  }

  if (thing instanceof Familiar) {
    return thing === Familiar.get("none") ? null : thing;
  }

  if (thing instanceof Item) {
    return thing === Item.get("none") ? null : thing;
  }

  return thing;
}

exports.noneToNull = noneToNull;
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */

function getAverage(range) {
  var _a;

  if (range.indexOf("-") < 0) return Number(range);

  var _b = __read((_a = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _a !== void 0 ? _a : ["0", "0", "0"], 3),
      lower = _b[1],
      upper = _b[2];

  return (Number(lower) + Number(upper)) / 2;
}

exports.getAverage = getAverage;
/**
 * Return average adventures expected from consuming an item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 */

function getAverageAdventures(item) {
  return getAverage(item.adventures);
}

exports.getAverageAdventures = getAverageAdventures;
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */

function uneffect(effect) {
  return kolmafia_1.cliExecute("uneffect " + effect.name);
}

exports.uneffect = uneffect;
var templateObject_1, templateObject_2;

/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var kolmafia_1 = __webpack_require__(1664);

var defaultHandlers = {
  info: function info(message) {
    return kolmafia_1.printHtml("<b>[Libram]</b> " + message);
  },
  warning: function warning(message) {
    return kolmafia_1.printHtml("<span style=\"background: orange; color: white;\"><b>[Libram]</b> " + message + "</span>");
  },
  error: function error(_error) {
    return kolmafia_1.printHtml("<span style=\"background: red; color: white;\"><b>[Libram]</b> " + _error.toString() + "</span>");
  }
};

var Logger =
/** @class */
function () {
  function Logger() {
    this.handlers = defaultHandlers;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Logger.prototype.setHandler = function (level, callback) {
    this.handlers[level] = callback;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  Logger.prototype.log = function (level, message) {
    this.handlers[level](message);
  };

  Logger.prototype.info = function (message) {
    this.log("info", message);
  };

  Logger.prototype.warning = function (message) {
    this.log("warning", message);
  };

  Logger.prototype.error = function (message) {
    this.log("error", message);
  };

  return Logger;
}();

exports.default = new Logger();

/***/ }),

/***/ 9376:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.maximizeCached = exports.setDefaultMaximizeOptions = void 0;

var kolmafia_1 = __webpack_require__(1664);

var template_string_1 = __webpack_require__(678);

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnStatThreshold: 10,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map()
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnStatThreshold Re-run the maximizer if a stat has newly passed an even multiple
 * of this number (for new equip requirements), or null otherwise. Default 10.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
}

exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions;
var cachedObjective = null;
var cachedStats = [0, 0, 0];
var cachedFamiliar = null;
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnStatThreshold Re-run the maximizer if a stat has newly passed an even multiple
 * of this number (for new equip requirements), or null otherwise. Default 10.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function maximizeCached(objectives, options) {
  if (options === void 0) {
    options = {};
  }

  var _a = __assign(__assign({}, defaultMaximizeOptions), options),
      updateOnFamiliarChange = _a.updateOnFamiliarChange,
      updateOnStatThreshold = _a.updateOnStatThreshold,
      forceEquip = _a.forceEquip,
      preventEquip = _a.preventEquip,
      bonusEquip = _a.bonusEquip;

  var objective = __spread(objectives, forceEquip.map(function (item) {
    return "equip " + item;
  }), preventEquip.map(function (item) {
    return "-equip " + item;
  }), Array.from(bonusEquip.entries()).map(function (_a) {
    var _b = __read(_a, 2),
        item = _b[0],
        bonus = _b[1];

    return bonus + " bonus " + item;
  })).join(", ");

  var stats = template_string_1.$stats(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Muscle, Mysticality, Moxie"], ["Muscle, Mysticality, Moxie"]))).map(function (stat) {
    return kolmafia_1.myBasestat(stat);
  }); // The highest known equip requirement is 300, so don't check after that.

  var statsChanged = updateOnStatThreshold !== null && stats.some(function (newStat, i) {
    return newStat > cachedStats[i] && cachedStats[i] < 300 && newStat % updateOnStatThreshold === 0;
  });
  var familiarChanged = updateOnFamiliarChange && cachedFamiliar !== kolmafia_1.myFamiliar();

  if (statsChanged || familiarChanged || objective !== cachedObjective) {
    kolmafia_1.maximize(objective, false);
  }

  cachedFamiliar = kolmafia_1.myFamiliar();
  cachedStats = stats;
  cachedObjective = objective;
}

exports.maximizeCached = maximizeCached;
var templateObject_1;

/***/ }),

/***/ 6115:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mood = exports.MagicalSausages = exports.OscusSoda = exports.MpSource = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

var utils_1 = __webpack_require__(8588);

var MpSource =
/** @class */
function () {
  function MpSource() {}

  MpSource.prototype.usesRemaining = function () {
    return null;
  };

  MpSource.prototype.availableMpMax = function () {
    return this.availableMpMin();
  };

  return MpSource;
}();

exports.MpSource = MpSource;

var OscusSoda =
/** @class */
function (_super) {
  __extends(OscusSoda, _super);

  function OscusSoda() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OscusSoda.prototype.available = function () {
    return lib_1.have(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Oscus's neverending soda"], ["Oscus's neverending soda"]))));
  };

  OscusSoda.prototype.usesRemaining = function () {
    return property_1.get("oscusSodaUsed") ? 0 : 1;
  };

  OscusSoda.prototype.availableMpMin = function () {
    return this.available() ? 200 : 0;
  };

  OscusSoda.prototype.availableMpMax = function () {
    return this.available() ? 300 : 0;
  };

  OscusSoda.prototype.execute = function () {
    kolmafia_1.use(template_string_1.$item(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Oscus's neverending soda"], ["Oscus's neverending soda"]))));
  };

  OscusSoda.instance = new OscusSoda();
  return OscusSoda;
}(MpSource);

exports.OscusSoda = OscusSoda;

var MagicalSausages =
/** @class */
function (_super) {
  __extends(MagicalSausages, _super);

  function MagicalSausages() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MagicalSausages.prototype.usesRemaining = function () {
    return 23 - property_1.get("_sausagesEaten");
  };

  MagicalSausages.prototype.availableMpMin = function () {
    var maxSausages = Math.min(23 - property_1.get("_sausagesEaten"), kolmafia_1.itemAmount(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["magical sausage"], ["magical sausage"])))) + kolmafia_1.itemAmount(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["magical sausage casing"], ["magical sausage casing"])))));
    return Math.min(kolmafia_1.myMaxmp(), 999) * maxSausages;
  };

  MagicalSausages.prototype.execute = function () {
    var mpSpaceAvailable = kolmafia_1.myMaxmp() - kolmafia_1.myMp();
    if (mpSpaceAvailable < 700) return;
    var maxSausages = Math.min(23 - property_1.get("_sausagesEaten"), kolmafia_1.itemAmount(template_string_1.$item(templateObject_5 || (templateObject_5 = __makeTemplateObject(["magical sausage"], ["magical sausage"])))) + kolmafia_1.itemAmount(template_string_1.$item(templateObject_6 || (templateObject_6 = __makeTemplateObject(["magical sausage casing"], ["magical sausage casing"])))), Math.floor((kolmafia_1.myMaxmp() - kolmafia_1.myMp()) / Math.min(kolmafia_1.myMaxmp() - kolmafia_1.myMp(), 999)));
    kolmafia_1.retrieveItem(maxSausages, template_string_1.$item(templateObject_7 || (templateObject_7 = __makeTemplateObject(["magical sausage"], ["magical sausage"]))));
    kolmafia_1.eat(maxSausages, template_string_1.$item(templateObject_8 || (templateObject_8 = __makeTemplateObject(["magical sausage"], ["magical sausage"]))));
  };

  MagicalSausages.instance = new MagicalSausages();
  return MagicalSausages;
}(MpSource);

exports.MagicalSausages = MagicalSausages;

var MoodElement =
/** @class */
function () {
  function MoodElement() {}

  MoodElement.prototype.mpCostPerTurn = function () {
    return 0;
  };

  MoodElement.prototype.turnIncrement = function () {
    return 1;
  };

  return MoodElement;
}();

var SkillMoodElement =
/** @class */
function (_super) {
  __extends(SkillMoodElement, _super);

  function SkillMoodElement(skill) {
    var _this = _super.call(this) || this;

    _this.skill = skill;
    return _this;
  }

  SkillMoodElement.prototype.mpCostPerTurn = function () {
    var turns = kolmafia_1.turnsPerCast(this.skill);
    return turns > 0 ? kolmafia_1.mpCost(this.skill) / turns : 0;
  };

  SkillMoodElement.prototype.turnIncrement = function () {
    return kolmafia_1.turnsPerCast(this.skill);
  };

  SkillMoodElement.prototype.execute = function (mood, ensureTurns) {
    var e_1, _a;

    var effect = kolmafia_1.toEffect(this.skill);
    var initialTurns = kolmafia_1.haveEffect(effect);
    if (!kolmafia_1.haveSkill(this.skill)) return false;
    if (initialTurns >= ensureTurns) return true; // Deal with song slots.

    if (mood.options.songSlots.length > 0 && lib_1.isSong(this.skill)) {
      var _loop_1 = function _loop_1(song) {
        var slot = mood.options.songSlots.find(function (slot) {
          return slot.includes(song);
        });
        if (!slot || slot.includes(effect)) kolmafia_1.cliExecute("shrug " + song);
      };

      try {
        for (var _b = __values(lib_1.getActiveSongs()), _c = _b.next(); !_c.done; _c = _b.next()) {
          var song = _c.value;

          _loop_1(song);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    var oldRemainingCasts = -1;
    var remainingCasts = Math.ceil((ensureTurns - kolmafia_1.haveEffect(effect)) / kolmafia_1.turnsPerCast(this.skill));

    while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
      var maxCasts = void 0;

      if (kolmafia_1.hpCost(this.skill) > 0) {
        // FIXME: restore HP
        maxCasts = Math.floor(kolmafia_1.myHp() / kolmafia_1.hpCost(this.skill));
      } else {
        var cost = kolmafia_1.mpCost(this.skill);
        maxCasts = Math.floor(kolmafia_1.myMp() / cost);

        if (maxCasts === 0) {
          mood.moreMp(cost);
          maxCasts = Math.floor(kolmafia_1.myMp() / cost);
        }
      }

      var casts = utils_1.clamp(remainingCasts, 0, Math.min(100, maxCasts));
      kolmafia_1.useSkill(casts, this.skill);
      oldRemainingCasts = remainingCasts;
      remainingCasts = Math.ceil((ensureTurns - kolmafia_1.haveEffect(effect)) / kolmafia_1.turnsPerCast(this.skill));
    }

    return kolmafia_1.haveEffect(effect) > ensureTurns;
  };

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement =
/** @class */
function (_super) {
  __extends(PotionMoodElement, _super);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this = _super.call(this) || this;

    _this.potion = potion;
    _this.maxPricePerTurn = maxPricePerTurn;
    return _this;
  }

  PotionMoodElement.prototype.execute = function (mood, ensureTurns) {
    // FIXME: Smarter buying logic.
    // FIXME: Allow constructing stuff (e.g. snow cleats)
    var effect = kolmafia_1.effectModifier(this.potion, "Effect");
    var effectTurns = kolmafia_1.haveEffect(effect);
    var turnsPerUse = kolmafia_1.numericModifier(this.potion, "Effect Duration");

    if (kolmafia_1.mallPrice(this.potion) > this.maxPricePerTurn * turnsPerUse) {
      return false;
    }

    if (effectTurns < ensureTurns) {
      var uses = (ensureTurns - effectTurns) / turnsPerUse;
      var quantityToBuy = utils_1.clamp(uses - kolmafia_1.availableAmount(this.potion), 0, 100);
      kolmafia_1.buy(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
      var quantityToUse = utils_1.clamp(uses, 0, kolmafia_1.availableAmount(this.potion));
      kolmafia_1.use(quantityToUse, this.potion);
    }

    return kolmafia_1.haveEffect(effect) >= ensureTurns;
  };

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement =
/** @class */
function (_super) {
  __extends(GenieMoodElement, _super);

  function GenieMoodElement(effect) {
    var _this = _super.call(this) || this;

    _this.effect = effect;
    return _this;
  }

  GenieMoodElement.prototype.execute = function (mood, ensureTurns) {
    if (kolmafia_1.haveEffect(this.effect) >= ensureTurns) return true;
    var neededWishes = Math.ceil((kolmafia_1.haveEffect(this.effect) - ensureTurns) / 20);
    var wishesToBuy = utils_1.clamp(neededWishes - kolmafia_1.availableAmount(template_string_1.$item(templateObject_9 || (templateObject_9 = __makeTemplateObject(["pocket wish"], ["pocket wish"])))), 0, 20);
    kolmafia_1.buy(wishesToBuy, template_string_1.$item(templateObject_10 || (templateObject_10 = __makeTemplateObject(["pocket wish"], ["pocket wish"]))), 50000);
    var wishesToUse = utils_1.clamp(neededWishes, 0, kolmafia_1.availableAmount(template_string_1.$item(templateObject_11 || (templateObject_11 = __makeTemplateObject(["pocket wish"], ["pocket wish"])))));

    for (; wishesToUse > 0; wishesToUse--) {
      kolmafia_1.cliExecute("genie effect " + this.effect.name);
    }

    return kolmafia_1.haveEffect(this.effect) >= ensureTurns;
  };

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement =
/** @class */
function (_super) {
  __extends(CustomMoodElement, _super);

  function CustomMoodElement(effect, gainEffect) {
    var _this = _super.call(this) || this;

    _this.effect = effect;
    _this.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : function () {
      return kolmafia_1.cliExecute(effect["default"]);
    };
    return _this;
  }

  CustomMoodElement.prototype.execute = function (mood, ensureTurns) {
    var currentTurns = kolmafia_1.haveEffect(this.effect);
    var lastCurrentTurns = -1;

    while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
      this.gainEffect();
      lastCurrentTurns = currentTurns;
      currentTurns = kolmafia_1.haveEffect(this.effect);
    }

    return kolmafia_1.haveEffect(this.effect) > ensureTurns;
  };

  return CustomMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood =
/** @class */
function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood(options) {
    if (options === void 0) {
      options = {};
    }

    this.elements = [];
    this.options = __assign(__assign({}, Mood.defaultOptions), options);
  }
  /**
   * Set default options for new Mood instances.
   * @param options Default options for new Mood instances.
   */


  Mood.setDefaultOptions = function (options) {
    Mood.defaultOptions = __assign(__assign({}, Mood.defaultOptions), options);
  };
  /**
   * Get the MP available for casting skills.
   */


  Mood.prototype.availableMp = function () {
    return this.options.mpSources.map(function (mpSource) {
      return mpSource.availableMpMin();
    }).reduce(function (x, y) {
      return x + y;
    }, 0);
  };

  Mood.prototype.moreMp = function (minimumTarget) {
    var e_2, _a;

    try {
      for (var _b = __values(this.options.mpSources), _c = _b.next(); !_c.done; _c = _b.next()) {
        var mpSource = _c.value;
        var usesRemaining = mpSource.usesRemaining();

        if (usesRemaining !== null && usesRemaining > 0) {
          mpSource.execute();
          if (kolmafia_1.myMp() >= minimumTarget) break;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
  };
  /**
   * Add a skill to the mood.
   * @param skill Skill to add.
   */


  Mood.prototype.skill = function (skill) {
    this.elements.push(new SkillMoodElement(skill));
    return this;
  };
  /**
   * Add an effect to the mood, with casting based on {effect.default}.
   * @param effect Effect to add.
   * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
   */


  Mood.prototype.effect = function (effect, gainEffect) {
    var skill = kolmafia_1.toSkill(effect);

    if (!gainEffect && skill !== template_string_1.$skill(templateObject_12 || (templateObject_12 = __makeTemplateObject(["none"], ["none"])))) {
      this.skill(skill);
    } else {
      this.elements.push(new CustomMoodElement(effect, gainEffect));
    }

    return this;
  };
  /**
   * Add a potion to the mood.
   * @param potion Potion to add.
   * @param maxPricePerTurn Maximum price to pay per turn of the effect.
   */


  Mood.prototype.potion = function (potion, maxPricePerTurn) {
    this.elements.push(new PotionMoodElement(potion, maxPricePerTurn));
    return this;
  };
  /**
   * Add an effect to acquire via pocket wishes to the mood.
   * @param effect Effect to wish for in the mood.
   */


  Mood.prototype.genie = function (effect) {
    this.elements.push(new GenieMoodElement(effect));
    return this;
  };
  /**
   * Execute the mood, trying to ensure {ensureTurns} of each effect.
   * @param ensureTurns Turns of each effect to try and achieve.
   * @returns Whether or not we successfully got this many turns of every effect in the mood.
   */


  Mood.prototype.execute = function (ensureTurns) {
    var e_3, _a;

    if (ensureTurns === void 0) {
      ensureTurns = 1;
    }

    var availableMp = this.availableMp();
    var totalMpPerTurn = this.elements.map(function (element) {
      return element.mpCostPerTurn();
    }).reduce(function (x, y) {
      return x + y;
    }, 0);
    var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
    var completeSuccess = true;

    try {
      for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
        var element = _c.value;
        var elementTurns = ensureTurns;

        if (element.mpCostPerTurn() > 0) {
          var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
          elementTurns = Math.min(ensureTurns, elementPotentialTurns);
        }

        completeSuccess = element.execute(this, elementTurns) || completeSuccess;
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return completeSuccess;
  };

  Mood.defaultOptions = {
    songSlots: [],
    mpSources: [MagicalSausages.instance, OscusSoda.instance]
  };
  return Mood;
}();

exports.Mood = Mood;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;

/***/ }),

/***/ 1347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withChoice = exports.withChoices = exports.withProperty = exports.withProperties = exports.setProperties = exports.set = exports.get = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(1889);

__webpack_require__(6353);

var kolmafia_1 = __webpack_require__(1664);

var propertyTyping_1 = __webpack_require__(9412);

var createPropertyGetter = function createPropertyGetter(transform) {
  return function (property, default_) {
    var value = kolmafia_1.getProperty(property);

    if (default_ !== undefined && value === "") {
      return default_;
    }

    return transform(value, property);
  };
};

var createMafiaClassPropertyGetter = function createMafiaClassPropertyGetter(Type) {
  return createPropertyGetter(function (value) {
    if (value === "") return null;
    var v = Type.get(value);
    return v === Type.get("none") ? null : v;
  });
};

exports.getString = createPropertyGetter(function (value) {
  return value;
});
exports.getCommaSeparated = createPropertyGetter(function (value) {
  return value.split(/, ?/);
});
exports.getBoolean = createPropertyGetter(function (value) {
  return value === "true";
});
exports.getNumber = createPropertyGetter(function (value) {
  return Number(value);
});
exports.getBounty = createMafiaClassPropertyGetter(Bounty);
exports.getClass = createMafiaClassPropertyGetter(Class);
exports.getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
exports.getEffect = createMafiaClassPropertyGetter(Effect);
exports.getElement = createMafiaClassPropertyGetter(Element);
exports.getFamiliar = createMafiaClassPropertyGetter(Familiar);
exports.getItem = createMafiaClassPropertyGetter(Item);
exports.getLocation = createMafiaClassPropertyGetter(Location);
exports.getMonster = createMafiaClassPropertyGetter(Monster);
exports.getPhylum = createMafiaClassPropertyGetter(Phylum);
exports.getServant = createMafiaClassPropertyGetter(Servant);
exports.getSkill = createMafiaClassPropertyGetter(Skill);
exports.getSlot = createMafiaClassPropertyGetter(Slot);
exports.getStat = createMafiaClassPropertyGetter(Stat);
exports.getThrall = createMafiaClassPropertyGetter(Thrall);

function get(property, _default) {
  var value = exports.getString(property);

  if (propertyTyping_1.isMonsterProperty(property)) {
    return exports.getMonster(property, _default);
  }

  if (propertyTyping_1.isLocationProperty(property)) {
    return exports.getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if (propertyTyping_1.isBooleanProperty(property, value)) {
    return exports.getBoolean(property, _default);
  }

  if (propertyTyping_1.isNumericProperty(property, value)) {
    return exports.getNumber(property, _default);
  }

  return value;
}

exports.get = get;

function set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  kolmafia_1.setProperty(property, stringValue);
}

exports.set = set;

function setProperties(properties) {
  var e_1, _a;

  try {
    for (var _b = __values(Object.entries(properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var _d = __read(_c.value, 2),
          prop = _d[0],
          value = _d[1];

      set(prop, value);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

exports.setProperties = setProperties;

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function (_a) {
    var _b = __read(_a, 1),
        prop = _b[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}

exports.withProperties = withProperties;

function withProperty(property, value, callback) {
  var _a;

  withProperties((_a = {}, _a[property] = value, _a), callback);
}

exports.withProperty = withProperty;

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(function (_a) {
    var _b = __read(_a, 2),
        choice = _b[0],
        option = _b[1];

    return ["choiceAdventure" + choice, option];
  }));
  withProperties(properties, callback);
}

exports.withChoices = withChoices;

function withChoice(choice, value, callback) {
  var _a;

  withChoices((_a = {}, _a[choice] = value, _a), callback);
}

exports.withChoice = withChoice;

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isStatProperty = exports.isFamiliarProperty = exports.isMonsterProperty = exports.isLocationProperty = exports.isBooleanProperty = exports.isNumericOrStringProperty = exports.isNumericProperty = void 0;

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

exports.isNumericProperty = isNumericProperty;
var choiceAdventurePattern = /^choiceAdventure\d+$/;

function isNumericOrStringProperty(property) {
  return choiceAdventurePattern.test(property);
}

exports.isNumericOrStringProperty = isNumericOrStringProperty;
var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];

function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}

exports.isBooleanProperty = isBooleanProperty;
var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];

function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}

exports.isLocationProperty = isLocationProperty;
var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];

function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster");
}

exports.isMonsterProperty = isMonsterProperty;

function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}

exports.isFamiliarProperty = isFamiliarProperty;
var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

exports.isStatProperty = isStatProperty;

/***/ }),

/***/ 5661:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.prepareRunaway = exports.canRunaway = exports.couldRunaway = exports.getRemainingRunaways = exports.getMaxRunaways = exports.getRunaways = exports.have = exports.familiar = void 0;

var kolmafia_1 = __webpack_require__(1664);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

var lib_1 = __webpack_require__(3311);

exports.familiar = template_string_1.$familiar(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Frumious Bandersnatch"], ["Frumious Bandersnatch"])));
/**
 * Returns true if the player has the Frumious Bandersnatch in their
 * terrariukm
 */

function have() {
  return lib_1.have(exports.familiar);
}

exports.have = have;
/**
 * Returns the number of free runaways that have already been used
 * @see StompingBoots with which the Bandersnatch shares a counter
 */

function getRunaways() {
  return property_1.get("_banderRunaways");
}

exports.getRunaways = getRunaways;
/**
 * Returns the total number of free runaways that the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function getMaxRunaways(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  var weightBuffs = considerWeightAdjustment ? kolmafia_1.weightAdjustment() : 0;
  return Math.floor((kolmafia_1.familiarWeight(exports.familiar) + weightBuffs) / 5);
}

exports.getMaxRunaways = getMaxRunaways;
/**
 * Returns the number of remaining free runaways the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment
 */

function getRemainingRunaways(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}

exports.getRemainingRunaways = getRemainingRunaways;
/**
 * Returns true if the player could use their Bandersnatch to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */

function couldRunaway(considerWeightAdjustment) {
  if (considerWeightAdjustment === void 0) {
    considerWeightAdjustment = true;
  }

  return have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

exports.couldRunaway = couldRunaway;
var odeSkill = template_string_1.$skill(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The Ode to Booze"], ["The Ode to Booze"])));
var odeEffect = template_string_1.$effect(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Ode to Booze"], ["Ode to Booze"])));
/**
 * Returns true if the player can use their Bandersnatch to get a
 * free run right now
 */

function canRunaway() {
  return lib_1.isCurrentFamiliar(exports.familiar) && couldRunaway() && lib_1.have(odeEffect);
}

exports.canRunaway = canRunaway;
/**
 * Prepare a Bandersnatch runaway.
 *
 * This will cast Ode to Booze and equip take your Bandersnatch with you.
 * If any of those steps fail, it will return false.
 *
 * @param songsToRemove Ordered list of songs that could be shrugged to make room for Ode to Booze
 */

function prepareRunaway(songsToRemove) {
  var e_1, _a;

  if (!lib_1.have(odeEffect)) {
    if (!lib_1.have(odeSkill)) {
      return false;
    }

    if (!lib_1.canRememberSong()) {
      var activeSongs = lib_1.getActiveSongs();

      try {
        for (var songsToRemove_1 = __values(songsToRemove), songsToRemove_1_1 = songsToRemove_1.next(); !songsToRemove_1_1.done; songsToRemove_1_1 = songsToRemove_1.next()) {
          var song = songsToRemove_1_1.value;

          if (activeSongs.includes(song) && lib_1.uneffect(song)) {
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (songsToRemove_1_1 && !songsToRemove_1_1.done && (_a = songsToRemove_1["return"])) _a.call(songsToRemove_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    if (!kolmafia_1.useSkill(odeSkill)) {
      return false;
    }
  }

  return kolmafia_1.useFamiliar(exports.familiar);
}

exports.prepareRunaway = prepareRunaway;
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ 7235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSpookyPuttySheet = exports.getSpookyPuttySheetMonster = exports.prepareSpookyPuttySheet = exports.getSpookyPuttySheetCopiesMade = exports.have = exports.sheet = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.sheet = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Spooky Putty sheet"], ["Spooky Putty sheet"])));

function have() {
  return lib_1.getFoldGroup(exports.sheet).some(function (item) {
    return lib_1.have(item);
  });
}

exports.have = have;

function getSpookyPuttySheetCopiesMade() {
  return Math.max(0, property_1.get("spookyPuttyCopiesMade"));
}

exports.getSpookyPuttySheetCopiesMade = getSpookyPuttySheetCopiesMade;

function prepareSpookyPuttySheet() {
  if (!have()) return false;
  if (lib_1.have(exports.sheet)) return true;
  return kolmafia_1.cliExecute("fold Spooky putty sheet");
}

exports.prepareSpookyPuttySheet = prepareSpookyPuttySheet;

function getSpookyPuttySheetMonster() {
  return property_1.get("spookyPuttyMonster");
}

exports.getSpookyPuttySheetMonster = getSpookyPuttySheetMonster;

function useSpookyPuttySheet() {
  return kolmafia_1.use(exports.sheet);
}

exports.useSpookyPuttySheet = useSpookyPuttySheet;
var templateObject_1;

/***/ }),

/***/ 3758:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BadlyRomanticArrow = exports.getBadlyRomanticArrowMonster = exports.canUseBadlyRomanticArrow = exports.prepareBadlyRomanticArrow = exports.couldUseBadlyRomanticArrow = exports.haveBadlyRomanticArrowUsesRemaining = exports.getBadlyRomanticArrowUses = exports.have = exports.familiar = void 0;

var kolmafia_1 = __webpack_require__(1664);

var Copier_1 = __webpack_require__(2219);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.familiar = template_string_1.$familiar(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Obtuse Angel"], ["Obtuse Angel"])));
/**
 * Returns true if the player has an Obtuse Angel
 */

function have() {
  return lib_1.have(exports.familiar);
}

exports.have = have;
/**
 * Returns number of badly romantic arrows used
 */

function getBadlyRomanticArrowUses() {
  return Math.max(0, property_1.get("_badlyRomanticArrows"));
}

exports.getBadlyRomanticArrowUses = getBadlyRomanticArrowUses;
/**
 * Returns true if badly romantic arrow can still be used
 */

function haveBadlyRomanticArrowUsesRemaining() {
  return getBadlyRomanticArrowUses() === 0;
}

exports.haveBadlyRomanticArrowUsesRemaining = haveBadlyRomanticArrowUsesRemaining;
/**
 * Returns true if the player could use badly romantic arrow in theory
 */

function couldUseBadlyRomanticArrow() {
  return have() && haveBadlyRomanticArrowUsesRemaining();
}

exports.couldUseBadlyRomanticArrow = couldUseBadlyRomanticArrow;
/**
 * Prepares badly romantic arrow for use
 */

function prepareBadlyRomanticArrow() {
  return kolmafia_1.useFamiliar(exports.familiar);
}

exports.prepareBadlyRomanticArrow = prepareBadlyRomanticArrow;
/**
 * Returns true if the player can use badly romantic arrow right now
 */

function canUseBadlyRomanticArrow() {
  return lib_1.isCurrentFamiliar(exports.familiar) && haveBadlyRomanticArrowUsesRemaining();
}

exports.canUseBadlyRomanticArrow = canUseBadlyRomanticArrow;
/**
 * Returns the current badly romantic arrow monster target
 */

function getBadlyRomanticArrowMonster() {
  return property_1.get("romanticTarget");
}

exports.getBadlyRomanticArrowMonster = getBadlyRomanticArrowMonster;
exports.BadlyRomanticArrow = new Copier_1.Copier(function () {
  return couldUseBadlyRomanticArrow();
}, function () {
  return prepareBadlyRomanticArrow();
}, function () {
  return canUseBadlyRomanticArrow();
}, function () {
  return getBadlyRomanticArrowMonster();
});
var templateObject_1;

/***/ }),

/***/ 4945:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useRainDohBlackBox = exports.getRainDohBlackBoxMonster = exports.getRainDohBlackBoxCopiesMade = exports.have = exports.box = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.box = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Rain-Doh black box"], ["Rain-Doh black box"])));

function have() {
  return lib_1.getFoldGroup(exports.box).some(function (item) {
    return lib_1.have(item);
  });
}

exports.have = have;

function getRainDohBlackBoxCopiesMade() {
  return Math.max(0, property_1.get("_raindohCopiesMade"));
}

exports.getRainDohBlackBoxCopiesMade = getRainDohBlackBoxCopiesMade;

function getRainDohBlackBoxMonster() {
  return property_1.get("rainDohMonster");
}

exports.getRainDohBlackBoxMonster = getRainDohBlackBoxMonster;

function useRainDohBlackBox() {
  return kolmafia_1.use(exports.box);
}

exports.useRainDohBlackBox = useRainDohBlackBox;
var templateObject_1;

/***/ }),

/***/ 5915:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UnfinishedIceSculpture = exports.getUnfinishedIceSculptureMonster = exports.couldUseUnfinishedIceSculpture = exports.isUnfinishedIceSculptureUsed = exports.haveUnfinishedIceSculpture = exports.have = void 0;

var Copier_1 = __webpack_require__(2219);

var property_1 = __webpack_require__(1347);

var lib_1 = __webpack_require__(3311);

var template_string_1 = __webpack_require__(678);

function have() {
  return lib_1.haveInCampground(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["packet of winter seeds"], ["packet of winter seeds"]))));
}

exports.have = have;

function haveUnfinishedIceSculpture() {
  return lib_1.have(template_string_1.$item(templateObject_2 || (templateObject_2 = __makeTemplateObject(["unfinished ice sculpture"], ["unfinished ice sculpture"]))));
}

exports.haveUnfinishedIceSculpture = haveUnfinishedIceSculpture;

function isUnfinishedIceSculptureUsed() {
  return property_1.get("_iceSculptureUsed");
}

exports.isUnfinishedIceSculptureUsed = isUnfinishedIceSculptureUsed;

function couldUseUnfinishedIceSculpture() {
  return lib_1.have(template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["unfinished ice sculpture"], ["unfinished ice sculpture"])))) && !lib_1.have(template_string_1.$item(templateObject_4 || (templateObject_4 = __makeTemplateObject(["finished ice sculpture"], ["finished ice sculpture"]))));
}

exports.couldUseUnfinishedIceSculpture = couldUseUnfinishedIceSculpture;

function getUnfinishedIceSculptureMonster() {
  return property_1.get("iceSculptureMonster");
}

exports.getUnfinishedIceSculptureMonster = getUnfinishedIceSculptureMonster;
exports.UnfinishedIceSculpture = new Copier_1.Copier(function () {
  return couldUseUnfinishedIceSculpture();
}, null, function () {
  return couldUseUnfinishedIceSculpture();
}, function () {
  return getUnfinishedIceSculptureMonster();
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ 7975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightPainting = exports.paintingFought = exports.paintingMonster = exports.have = void 0;

var kolmafia_1 = __webpack_require__(1664);

var property_1 = __webpack_require__(1347);

function have() {
  return property_1.get("chateauAvailable");
}

exports.have = have;

function paintingMonster() {
  return property_1.get("chateauMonster");
}

exports.paintingMonster = paintingMonster;

function paintingFought() {
  return property_1.get("_chateauMonsterFought");
}

exports.paintingFought = paintingFought;

function fightPainting() {
  kolmafia_1.visitUrl("place.php?whichplace=chateau&action=chateau_painting", false);
  return kolmafia_1.runCombat();
}

exports.fightPainting = fightPainting;

/***/ }),

/***/ 1577:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getPortscanUses = exports.getEnhanceUses = exports.getDuplicateUses = exports.Digitize = exports.canDigitize = exports.prepareDigitize = exports.couldDigitize = exports.getDigitizeUsesRemaining = exports.getMaximumDigitizeUses = exports.getDigitizeMonsterCount = exports.getDigitizeMonster = exports.getDigitizeUses = exports.getChips = exports.extrude = exports.Items = exports.isCurrentSkill = exports.getSkills = exports.educate = exports.Skills = exports.enquiry = exports.RolloverBuffs = exports.enhance = exports.Buffs = exports.have = exports.item = void 0;

__webpack_require__(8629);

var kolmafia_1 = __webpack_require__(1664);

var isEqual_1 = __importDefault(__webpack_require__(7120));

var Copier_1 = __webpack_require__(2219);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Source Terminal"], ["Source Terminal"])));

function have() {
  return lib_1.haveInCampground(exports.item);
}

exports.have = have;
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */

exports.Buffs = {
  Items: template_string_1.$effect(templateObject_2 || (templateObject_2 = __makeTemplateObject(["items.enh"], ["items.enh"]))),
  Meat: template_string_1.$effect(templateObject_3 || (templateObject_3 = __makeTemplateObject(["meat.enh"], ["meat.enh"]))),
  Init: template_string_1.$effect(templateObject_4 || (templateObject_4 = __makeTemplateObject(["init.enh"], ["init.enh"]))),
  Critical: template_string_1.$effect(templateObject_5 || (templateObject_5 = __makeTemplateObject(["critical.enh"], ["critical.enh"]))),
  Damage: template_string_1.$effect(templateObject_6 || (templateObject_6 = __makeTemplateObject(["damage.enh"], ["damage.enh"]))),
  Substats: template_string_1.$effect(templateObject_7 || (templateObject_7 = __makeTemplateObject(["substats.enh"], ["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

function enhance(buff) {
  if (!Object.values(exports.Buffs).includes(buff)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal enhance " + buff.name);
}

exports.enhance = enhance;
/**
 * Rollover buffs that can be acquired from Enquiry
 */

exports.RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: template_string_1.$effect(templateObject_8 || (templateObject_8 = __makeTemplateObject(["familiar.enq"], ["familiar.enq"]))),

  /** +25 ML */
  Monsters: template_string_1.$effect(templateObject_9 || (templateObject_9 = __makeTemplateObject(["monsters.enq"], ["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: template_string_1.$effect(templateObject_10 || (templateObject_10 = __makeTemplateObject(["protect.enq"], ["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: template_string_1.$effect(templateObject_11 || (templateObject_11 = __makeTemplateObject(["stats.enq"], ["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

function enquiry(rolloverBuff) {
  if (!Object.values(exports.RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal enquiry " + rolloverBuff.name);
}

exports.enquiry = enquiry;
/**
 * Skills that can be acquired from Enhance
 */

exports.Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: template_string_1.$skill(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Extract"], ["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: template_string_1.$skill(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Digitize"], ["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: template_string_1.$skill(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Compress"], ["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: template_string_1.$skill(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Duplicate"], ["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: template_string_1.$skill(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Portscan"], ["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: template_string_1.$skill(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Turbo"], ["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

function educate(skills) {
  var e_1, _a;

  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (isEqual_1["default"](skillsArray, getSkills())) return true;

  try {
    for (var skillsArray_1 = __values(skillsArray), skillsArray_1_1 = skillsArray_1.next(); !skillsArray_1_1.done; skillsArray_1_1 = skillsArray_1.next()) {
      var skill = skillsArray_1_1.value;
      if (!Object.values(exports.Skills).includes(skill)) return false;
      kolmafia_1.cliExecute("terminal educate " + skill.name.toLowerCase() + ".edu");
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (skillsArray_1_1 && !skillsArray_1_1.done && (_a = skillsArray_1["return"])) _a.call(skillsArray_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return true;
}

exports.educate = educate;
/**
 * Return the Skills currently available from Source Terminal
 */

function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function (p) {
    return property_1.get(p);
  }).filter(function (s) {
    return s !== "";
  }).map(function (s) {
    return Skill.get(s.slice(0, -4));
  });
}

exports.getSkills = getSkills;

function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function (skill) {
    return currentSkills.includes(skill);
  });
}

exports.isCurrentSkill = isCurrentSkill;
/**
 * Items that can be generated by the Source Terminal
 */

exports.Items = {
  /** 4 fullness EPIC food */
  BrowserCookie: template_string_1.$item(templateObject_18 || (templateObject_18 = __makeTemplateObject(["browser cookie"], ["browser cookie"]))),

  /** 4 potency EPIC booze */
  HackedGibson: template_string_1.$item(templateObject_19 || (templateObject_19 = __makeTemplateObject(["hacked gibson"], ["hacked gibson"]))),

  /** +10% item drop, improved yield from extraction skill */
  Shades: template_string_1.$item(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Source shades"], ["Source shades"]))),
  GRAM: template_string_1.$item(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Source terminal GRAM chip"], ["Source terminal GRAM chip"]))),
  PRAM: template_string_1.$item(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Source terminal PRAM chip"], ["Source terminal PRAM chip"]))),
  SPAM: template_string_1.$item(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Source terminal SPAM chip"], ["Source terminal SPAM chip"]))),
  CRAM: template_string_1.$item(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Source terminal CRAM chip"], ["Source terminal CRAM chip"]))),
  DRAM: template_string_1.$item(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Source terminal DRAM chip"], ["Source terminal DRAM chip"]))),

  /** Increase maximum daily casts of Digitze by one, usable once per player */
  TRAM: template_string_1.$item(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Source terminal TRAM chip"], ["Source terminal TRAM chip"]))),
  SoftwareBug: template_string_1.$item(templateObject_27 || (templateObject_27 = __makeTemplateObject(["software bug"], ["software bug"])))
};
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

function extrude(item) {
  if (!Object.values(exports.Items).includes(item)) {
    return false;
  }

  return kolmafia_1.cliExecute("terminal extrude " + item.name);
}

exports.extrude = extrude;
/**
 * Return chips currently installed to player's Source Terminal
 */

function getChips() {
  return property_1.get("sourceTerminalChips").split(",");
}

exports.getChips = getChips;
/**
 * Return number of times digitize was cast today
 */

function getDigitizeUses() {
  return property_1.get("_sourceTerminalDigitizeUses");
}

exports.getDigitizeUses = getDigitizeUses;
/**
 * Return Monster that is currently digitized, else null
 */

function getDigitizeMonster() {
  return property_1.get("_sourceTerminalDigitizeMonster");
}

exports.getDigitizeMonster = getDigitizeMonster;
/**
 * Return number of digitized monsters encountered since it was last cast
 */

function getDigitizeMonsterCount() {
  return property_1.get("_sourceTerminalDigitizeMonsterCount");
}

exports.getDigitizeMonsterCount = getDigitizeMonsterCount;
/**
 * Return maximum number of digitizes player can cast
 */

function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}

exports.getMaximumDigitizeUses = getMaximumDigitizeUses;
/**
 * Returns the current day's number of remaining digitize uses
 */

function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}

exports.getDigitizeUsesRemaining = getDigitizeUsesRemaining;
/**
 * Returns whether the player could theoretically cast Digitize
 */

function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}

exports.couldDigitize = couldDigitize;

function prepareDigitize() {
  if (!isCurrentSkill(exports.Skills.Digitize)) {
    return educate(exports.Skills.Digitize);
  }

  return true;
}

exports.prepareDigitize = prepareDigitize;
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */

function canDigitize() {
  return couldDigitize() && getSkills().includes(exports.Skills.Digitize);
}

exports.canDigitize = canDigitize;
exports.Digitize = new Copier_1.Copier(function () {
  return couldDigitize();
}, function () {
  return prepareDigitize();
}, function () {
  return canDigitize();
}, function () {
  return getDigitizeMonster();
});
/**
 * Return number of times duplicate was cast today
 */

function getDuplicateUses() {
  return property_1.get("_sourceTerminalDuplicateUses");
}

exports.getDuplicateUses = getDuplicateUses;
/**
 * Return number of times enhance was cast today
 */

function getEnhanceUses() {
  return property_1.get("_sourceTerminalEnhanceUses");
}

exports.getEnhanceUses = getEnhanceUses;
/**
 * Return number of times portscan was cast today
 */

function getPortscanUses() {
  return property_1.get("_sourceTerminalPortscanUses");
}

exports.getPortscanUses = getPortscanUses;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27;

/***/ }),

/***/ 7271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightPiece = exports.pieces = exports.fightsDone = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Witchess Set"], ["Witchess Set"])));

function have() {
  return lib_1.haveInCampground(exports.item);
}

exports.have = have;

function fightsDone() {
  return property_1.get("_witchessFights");
}

exports.fightsDone = fightsDone;
exports.pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);

function fightPiece(piece) {
  if (!exports.pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!kolmafia_1.visitUrl("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!kolmafia_1.runChoice(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!kolmafia_1.visitUrl("choice.php?option=1&pwd=" + kolmafia_1.myHash() + "&whichchoice=1182&piece=" + kolmafia_1.toInt(piece), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return kolmafia_1.runCombat();
}

exports.fightPiece = fightPiece;
var templateObject_1;

/***/ }),

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fightAll = exports.LovEnamorang = exports.getLovEnamorangMonster = exports.couldUseLoveEnamorang = exports.getLovEnamorangUses = exports.haveLovEnamorang = exports.isUsed = exports.have = void 0;

var kolmafia_1 = __webpack_require__(1664);

var Copier_1 = __webpack_require__(2219);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

function have() {
  return property_1.get("loveTunnelAvailable");
}

exports.have = have;

function isUsed() {
  return property_1.get("_loveTunnelUsed");
}

exports.isUsed = isUsed;

function haveLovEnamorang() {
  return lib_1.have(template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["LOV Enamorang"], ["LOV Enamorang"]))));
}

exports.haveLovEnamorang = haveLovEnamorang;

function getLovEnamorangUses() {
  return property_1.get("_enamorangs");
}

exports.getLovEnamorangUses = getLovEnamorangUses;

function couldUseLoveEnamorang() {
  return !lib_1.haveWandererCounter(lib_1.Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}

exports.couldUseLoveEnamorang = couldUseLoveEnamorang;

function getLovEnamorangMonster() {
  return property_1.get("enamorangMonster");
}

exports.getLovEnamorangMonster = getLovEnamorangMonster;
exports.LovEnamorang = new Copier_1.Copier(function () {
  return couldUseLoveEnamorang();
}, null, function () {
  return couldUseLoveEnamorang();
}, function () {
  return getLovEnamorangMonster();
});

function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;

    case "LOV Epaulettes":
      return 2;

    case "LOV Earring":
      return 3;
  }
}

function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;

    case "Open Heart Surgery":
      return 2;

    case "Wandering Eye Surgery":
      return 3;
  }
}

function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;

    case "LOV Emotionizer":
      return 2;

    case "LOV Extraterrestrial Chocolate":
      return 3;

    case "LOV Echinacea Bouquet":
      return 4;

    case "LOV Elephant":
      return 5;

    case "toast":
      return 6;

    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */


function fightAll(equipment, effect, extra) {
  property_1.set("choiceAdventure1222", 1); // Entrance

  property_1.set("choiceAdventure1223", 1); // Fight LOV Enforcer

  property_1.set("choiceAdventure1224", equipmentChoice(equipment));
  property_1.set("choiceAdventure1225", 1); // Fight LOV Engineer

  property_1.set("choiceAdventure1226", effectChoice(effect));
  property_1.set("choiceAdventure1227", 1); // Fight LOV Equivocator

  property_1.set("choiceAdventure1228", extraChoice(extra));
  kolmafia_1.adv1(template_string_1.$location(templateObject_2 || (templateObject_2 = __makeTemplateObject(["The Tunnel of L.O.V.E."], ["The Tunnel of L.O.V.E."]))), 0, "");
}

exports.fightAll = fightAll;
var templateObject_1, templateObject_2;

/***/ }),

/***/ 2211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.dropProgress = exports.setSong = exports.songChangesLeft = exports.song = exports.songBoomSongs = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["SongBoom\u2122 BoomBox"], ["SongBoom\u2122 BoomBox"])));

function have() {
  return lib_1.have(exports.item);
}

exports.have = have;
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
exports.songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

function song() {
  var stored = property_1.get("boomBoxSong");
  return exports.songBoomSongs.has(stored) ? stored : null;
}

exports.song = song;
/**
 * Song changes left today.
 */

function songChangesLeft() {
  return property_1.get("_boomBoxSongsLeft");
}

exports.songChangesLeft = songChangesLeft;
/**
 * Change the song.
 * @param newSong Song to change to.
 */

function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    kolmafia_1.cliExecute("boombox " + (newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}

exports.setSong = setSong;
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */

function dropProgress() {
  return property_1.get("_boomBoxFights");
}

exports.dropProgress = dropProgress;
var templateObject_1;

/***/ }),

/***/ 5352:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.haveBooze = exports.havePlatinumBooze = exports.Cocktails = exports.getBooze = exports.getTier = exports.getLocation = exports.abandon = exports.canAbandon = exports.haveFullBronzeBonus = exports.acceptBronze = exports.getBronze = exports.acceptGold = exports.haveFullGoldBonus = exports.canGold = exports.getGoldToday = exports.getGold = exports.acceptPlatinum = exports.haveFullPlatinumBonus = exports.canPlatinum = exports.getPlatinumToday = exports.getPlatinum = exports.isQuestActive = exports.have = exports.item = void 0;

var kolmafia_1 = __webpack_require__(1664);

var lib_1 = __webpack_require__(3311);

var property_1 = __webpack_require__(1347);

var template_string_1 = __webpack_require__(678);

exports.item = template_string_1.$item(templateObject_1 || (templateObject_1 = __makeTemplateObject(["guzzlr tablet"], ["guzzlr tablet"])));

function have() {
  return lib_1.have(exports.item);
}

exports.have = have;

function useTabletWithChoice(option) {
  property_1.withChoice(1412, option, function () {
    return kolmafia_1.use(1, exports.item);
  });
}

function isQuestActive() {
  return property_1.get("questGuzzlr") !== "unstarted";
}

exports.isQuestActive = isQuestActive;
/**
 * Platinum deliveries completed overall
 */

function getPlatinum() {
  return property_1.get("guzzlrPlatinumDeliveries");
}

exports.getPlatinum = getPlatinum;
/**
 * Platinum deliveries completed today
 */

function getPlatinumToday() {
  return property_1.get("_guzzlrPlatinumDeliveries");
}

exports.getPlatinumToday = getPlatinumToday;
/**
 * Can do a platinum delivery (haven't done one today)
 */

function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}

exports.canPlatinum = canPlatinum;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}

exports.haveFullPlatinumBonus = haveFullPlatinumBonus;
/**
 * Accept platinum delivery
 */

function acceptPlatinum() {
  if (!canPlatinum()) return false;
  useTabletWithChoice(4);
  return true;
}

exports.acceptPlatinum = acceptPlatinum;
/**
 * Gold deliveries completed overall
 */

function getGold() {
  return property_1.get("guzzlrGoldDeliveries");
}

exports.getGold = getGold;
/**
 * Gold deliveries completed today
 */

function getGoldToday() {
  return property_1.get("_guzzlrGoldDeliveries");
}

exports.getGoldToday = getGoldToday;
/**
 * Can do a gold delivery (have done fewer than 3 today)
 */

function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}

exports.canGold = canGold;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullGoldBonus() {
  return getGold() >= 150;
}

exports.haveFullGoldBonus = haveFullGoldBonus;
/**
 * Accept gold delivery
 */

function acceptGold() {
  if (!canGold()) return false;
  useTabletWithChoice(3);
  return true;
}

exports.acceptGold = acceptGold;
/**
 * Bronze deliveries completed overall
 */

function getBronze() {
  return property_1.get("guzzlrBronzeDeliveries");
}

exports.getBronze = getBronze;
/**
 * Accept bronze delivery
 */

function acceptBronze() {
  if (isQuestActive()) return false;
  useTabletWithChoice(2);
  return true;
}

exports.acceptBronze = acceptBronze;
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */

function haveFullBronzeBonus() {
  return getBronze() >= 196;
}

exports.haveFullBronzeBonus = haveFullBronzeBonus;
/**
 * Can abandon the current Guzzlr quest
 */

function canAbandon() {
  return isQuestActive() && !property_1.get("_guzzlrQuestAbandoned");
}

exports.canAbandon = canAbandon;
/**
 * Abandon Guzzlr quest
 */

function abandon() {
  if (!canAbandon()) return false;
  kolmafia_1.visitUrl("inventory.php?tap=guzzlr", false);
  kolmafia_1.runChoice(1);
  kolmafia_1.runChoice(5);
  return true;
}

exports.abandon = abandon;
/**
 * Get current Guzzlr quest location
 */

function getLocation() {
  return property_1.get("guzzlrQuestLocation");
}

exports.getLocation = getLocation;
/**
 * Get current Guzzlr quest tier
 */

function getTier() {
  var tier = property_1.get("guzzlrQuestTier");
  return tier === "" ? null : tier;
}

exports.getTier = getTier;
/**
 * Get current Guzzlr quest booze
 */

function getBooze() {
  var booze = property_1.get("guzzlrQuestBooze");
  if (booze === "") return null;
  return Item.get(booze);
}

exports.getBooze = getBooze;
/**
 * List of the platinum cocktails
 */

exports.Cocktails = template_string_1.$items(templateObject_2 || (templateObject_2 = __makeTemplateObject(["buttery boy, steamboat, ghiaccio colada, nog-on-the-cob, sourfinger"], ["buttery boy, steamboat, ghiaccio colada, nog-on-the-cob, sourfinger"])));
/**
 * Returns true if the user has a platinum cocktail in their inventory
 */

function havePlatinumBooze() {
  return exports.Cocktails.some(function (cock) {
    return lib_1.have(cock);
  });
}

exports.havePlatinumBooze = havePlatinumBooze;
/**
 * Returns true if the user has the cocktail that they need for their current quest
 *
 * If they have no quest, returns false
 */

function haveBooze() {
  var booze = getBooze();

  switch (booze) {
    case null:
      return false;

    case template_string_1.$item(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Guzzlr cocktail set"], ["Guzzlr cocktail set"]))):
      return havePlatinumBooze();

    default:
      return lib_1.have(booze);
  }
}

exports.haveBooze = haveBooze;
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ 1895:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Guzzlr = exports.Witchess = exports.WinterGarden = exports.TunnelOfLove = exports.SpookyPutty = exports.SourceTerminal = exports.SongBoom = exports.RainDoh = exports.ObtuseAngel = exports.ChateauMantegna = exports.Bandersnatch = void 0;
exports.Bandersnatch = __importStar(__webpack_require__(5661));
exports.ChateauMantegna = __importStar(__webpack_require__(7975));
exports.ObtuseAngel = __importStar(__webpack_require__(3758));
exports.RainDoh = __importStar(__webpack_require__(4945));
exports.SongBoom = __importStar(__webpack_require__(2211));
exports.SourceTerminal = __importStar(__webpack_require__(1577));
exports.SpookyPutty = __importStar(__webpack_require__(7235));
exports.TunnelOfLove = __importStar(__webpack_require__(6255));
exports.WinterGarden = __importStar(__webpack_require__(5915));
exports.Witchess = __importStar(__webpack_require__(7271));
exports.Guzzlr = __importStar(__webpack_require__(5352));

__exportStar(__webpack_require__(5231), exports);

/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SpookyPuttySheet = exports.couldUseSpookyPuttySheet = exports.RainDohBlackBox = exports.couldUseRainDohBlackBox = exports.getTotalPuttyLikeCopiesMade = void 0;

var Copier_1 = __webpack_require__(2219);

var SpookyPutty_1 = __webpack_require__(7235);

var RainDoh_1 = __webpack_require__(4945);

function getTotalPuttyLikeCopiesMade() {
  return SpookyPutty_1.getSpookyPuttySheetCopiesMade() + RainDoh_1.getRainDohBlackBoxCopiesMade();
}

exports.getTotalPuttyLikeCopiesMade = getTotalPuttyLikeCopiesMade;

function couldUseRainDohBlackBox() {
  return RainDoh_1.have() && RainDoh_1.getRainDohBlackBoxCopiesMade() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

exports.couldUseRainDohBlackBox = couldUseRainDohBlackBox;
exports.RainDohBlackBox = new Copier_1.Copier(function () {
  return couldUseRainDohBlackBox();
}, null, function () {
  return couldUseRainDohBlackBox();
}, function () {
  return RainDoh_1.getRainDohBlackBoxMonster();
}, function () {
  return RainDoh_1.useRainDohBlackBox();
});

function couldUseSpookyPuttySheet() {
  return SpookyPutty_1.have() && SpookyPutty_1.getSpookyPuttySheetCopiesMade() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

exports.couldUseSpookyPuttySheet = couldUseSpookyPuttySheet;
exports.SpookyPuttySheet = new Copier_1.Copier(function () {
  return couldUseSpookyPuttySheet();
}, function () {
  return SpookyPutty_1.prepareSpookyPuttySheet();
}, function () {
  return couldUseSpookyPuttySheet();
}, function () {
  return SpookyPutty_1.getSpookyPuttySheetMonster();
}, function () {
  return SpookyPutty_1.useSpookyPuttySheet();
});

/***/ }),

/***/ 1157:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Provides functions for checking KoLmafia's version and revision.
 * @packageDocumentation
 */

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sinceKolmafiaVersion = exports.sinceKolmafiaRevision = exports.KolmafiaVersionError = void 0;

var kolmafia_1 = __webpack_require__(1664);
/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */


var KolmafiaVersionError =
/** @class */
function (_super) {
  __extends(KolmafiaVersionError, _super);

  function KolmafiaVersionError(message) {
    var _this = _super.call(this, message) || this; // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.


    Object.setPrototypeOf(_this, KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}(Error);

exports.KolmafiaVersionError = KolmafiaVersionError; // Manually set class name, so that the stack trace shows proper name in Rhino

KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _a; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_a = __webpack_require__.c[__webpack_require__.s]) === null || _a === void 0 ? void 0 : _a.id;
  return scriptName ? "'" + scriptName + "'" : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 *
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */


function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number " + revision + " (must be an integer)");
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if (kolmafia_1.getRevision() < revision) {
    throw new KolmafiaVersionError(getScriptName() + " requires revision r" + revision + " of kolmafia or higher (current: " + kolmafia_1.getRevision() + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}

exports.sinceKolmafiaRevision = sinceKolmafiaRevision;
/**
 * If KoLmafia's version is less than `majorVersion.minorVersion`, throws an
 * exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since X.Y;` statement in ASH.
 * @param majorVersion Major version number
 * @param minorVersion Minor version number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's major version is less than `majorVersion`, or if the major
 *    versions are equal but the minor version is less than `minorVersion`
 * @throws {TypeError}
 *    If either `majorVersion` or `minorVersion` are not integers
 *
 * @example
 * ```ts
 * // Throws if KoLmafia version is less than 20.7
 * sinceKolmafiaVersion(20, 7);
 * ```
 */

function sinceKolmafiaVersion(majorVersion, minorVersion) {
  if (!Number.isInteger(majorVersion)) {
    throw new TypeError("Invalid major version number " + majorVersion + " (must be an integer)");
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number " + minorVersion + " (must be an integer)");
  }

  var versionStr = kolmafia_1.getVersion();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"" + versionStr + "\". You may need to update the script.");
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError(getScriptName() + " requires version " + majorVersion + "." + minorVersion + " of kolmafia or higher (current: " + currentMajorVersion + "." + currentMinorVersion + "). Up-to-date builds can be found at https://ci.kolmafia.us/.");
  }
}

exports.sinceKolmafiaVersion = sinceKolmafiaVersion;

/***/ }),

/***/ 678:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$thralls = exports.$thrall = exports.$stats = exports.$stat = exports.$slots = exports.$slot = exports.$skills = exports.$skill = exports.$servants = exports.$servant = exports.$phyla = exports.$phylum = exports.$monsters = exports.$monster = exports.$locations = exports.$location = exports.$items = exports.$item = exports.$familiars = exports.$familiar = exports.$elements = exports.$element = exports.$effects = exports.$effect = exports.$coinmasters = exports.$coinmaster = exports.$classes = exports.$class = exports.$bounties = exports.$bounty = void 0;

var concatTemplateString = function concatTemplateString(literals) {
  var placeholders = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    placeholders[_i - 1] = arguments[_i];
  }

  return literals.reduce(function (acc, literal, i) {
    return acc + literal + (placeholders[i] || "");
  }, "");
};

var createSingleConstant = function createSingleConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spread([literals], placeholders));
    return Type.get(input);
  };
};

var createPluralConstant = function createPluralConstant(Type) {
  return function (literals) {
    var placeholders = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      placeholders[_i - 1] = arguments[_i];
    }

    var input = concatTemplateString.apply(void 0, __spread([literals], placeholders));

    if (input === "") {
      return Type.all();
    }

    return Type.get(input.split(/\s*,\s*/));
  };
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


exports.$bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

exports.$class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

exports.$coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

exports.$effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

exports.$element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

exports.$familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

exports.$item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

exports.$location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

exports.$monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

exports.$phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

exports.$servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

exports.$skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

exports.$slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

exports.$stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

exports.$thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$thralls = createPluralConstant(Thrall);

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.chunk = exports.clamp = exports.parseNumber = exports.notNull = void 0;

function notNull(value) {
  return value !== null;
}

exports.notNull = notNull;

function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}

exports.parseNumber = parseNumber;
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 */

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

exports.clamp = clamp;
/**
 * Split an {@param array} into {@param chunkSize} sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 */

function chunk(array, chunkSize) {
  var result = [];

  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}

exports.chunk = chunk;

/***/ }),

/***/ 9940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var DataView = getNative(root, 'DataView');
module.exports = DataView;

/***/ }),

/***/ 1979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(9129),
    hashDelete = __webpack_require__(9047),
    hashGet = __webpack_require__(3486),
    hashHas = __webpack_require__(4786),
    hashSet = __webpack_require__(6444);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ 2768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(3708),
    listCacheDelete = __webpack_require__(6993),
    listCacheGet = __webpack_require__(286),
    listCacheHas = __webpack_require__(1678),
    listCacheSet = __webpack_require__(9743);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 4804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ 8423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(6977),
    mapCacheDelete = __webpack_require__(7474),
    mapCacheGet = __webpack_require__(727),
    mapCacheHas = __webpack_require__(3653),
    mapCacheSet = __webpack_require__(6140);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Promise = getNative(root, 'Promise');
module.exports = Promise;

/***/ }),

/***/ 689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var Set = getNative(root, 'Set');
module.exports = Set;

/***/ }),

/***/ 9832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8423),
    setCacheAdd = __webpack_require__(9911),
    setCacheHas = __webpack_require__(7447);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */


function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

/***/ }),

/***/ 959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    stackClear = __webpack_require__(7553),
    stackDelete = __webpack_require__(6038),
    stackGet = __webpack_require__(2397),
    stackHas = __webpack_require__(2421),
    stackSet = __webpack_require__(2936);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ 2773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ 2496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ 5284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203),
    root = __webpack_require__(4362);
/* Built-in method references that are verified to be native. */


var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;

/***/ }),

/***/ 6523:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ 8083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(5094),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isIndex = __webpack_require__(4782),
    isTypedArray = __webpack_require__(1589);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ 8421:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ 4481:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

module.exports = arraySome;

/***/ }),

/***/ 6213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ 891:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(8421),
    isArray = __webpack_require__(3670);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ 1185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(2773),
    getRawTag = __webpack_require__(3888),
    objectToString = __webpack_require__(2299);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ 1075:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ 9856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(1829),
    isObjectLike = __webpack_require__(4939);
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ 1829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    equalArrays = __webpack_require__(3426),
    equalByTag = __webpack_require__(1402),
    equalObjects = __webpack_require__(4572),
    getTag = __webpack_require__(2417),
    isArray = __webpack_require__(3670),
    isBuffer = __webpack_require__(2343),
    isTypedArray = __webpack_require__(1589);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

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
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
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

module.exports = baseIsEqualDeep;

/***/ }),

/***/ 4106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isMasked = __webpack_require__(9249),
    isObject = __webpack_require__(71),
    toSource = __webpack_require__(1214);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ 3638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isLength = __webpack_require__(7100),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ 7521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(2803),
    nativeKeys = __webpack_require__(3865);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ 5094:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ 9081:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ 3159:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 3426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(9832),
    arraySome = __webpack_require__(4481),
    cacheHas = __webpack_require__(3159);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Check that cyclic values are equal.


  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);

  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
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

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ 1402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(2773),
    Uint8Array = __webpack_require__(2496),
    eq = __webpack_require__(7950),
    equalArrays = __webpack_require__(3426),
    mapToArray = __webpack_require__(8961),
    setToArray = __webpack_require__(6983);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(5788);
/** Used to compose bitmasks for value comparisons. */


var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Check that cyclic values are equal.


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
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ 8556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 5788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(891),
    getSymbols = __webpack_require__(7976),
    keys = __webpack_require__(3225);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ 404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(4480);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ 3203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(4106),
    getValue = __webpack_require__(7338);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _Symbol = __webpack_require__(2773);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

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

module.exports = getRawTag;

/***/ }),

/***/ 7976:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(6523),
    stubArray = __webpack_require__(4043);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
module.exports = getSymbols;

/***/ }),

/***/ 2417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(9940),
    Map = __webpack_require__(4804),
    Promise = __webpack_require__(7114),
    Set = __webpack_require__(689),
    WeakMap = __webpack_require__(5284),
    baseGetTag = __webpack_require__(1185),
    toSource = __webpack_require__(1214);
/** `Object#toString` result references. */


var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

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

module.exports = getTag;

/***/ }),

/***/ 7338:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ 9129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ 9047:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ 3486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ 6444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(6326);
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ 4782:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 4480:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ 9249:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1741);
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ 2803:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ 3708:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ 6993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

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

module.exports = listCacheDelete;

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ 1678:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ 9743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(6213);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ 6977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(1979),
    ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ 7474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ 727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ 3653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ 6140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(404);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ 8961:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ 6326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ 3865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 1985:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `exports`. */


var freeExports = ( false ? 0 : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? 0 : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ 2299:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ 5290:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 9911:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ 7447:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ 6983:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ 7553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ 6038:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ 2397:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ 2421:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ 2936:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(2768),
    Map = __webpack_require__(4804),
    MapCache = __webpack_require__(8423);
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
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

module.exports = stackSet;

/***/ }),

/***/ 1214:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ 7950:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ 9246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(1075),
    isObjectLike = __webpack_require__(4939);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ 3670:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 6175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3626),
    isLength = __webpack_require__(7100);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(4362),
    stubFalse = __webpack_require__(3444);
/** Detect free variable `exports`. */


var freeExports = ( false ? 0 : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? 0 : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ 7120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(9856);
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */


function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ 3626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    isObject = __webpack_require__(71);
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ 7100:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ 71:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 4939:
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 1589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(3638),
    baseUnary = __webpack_require__(9081),
    nodeUtil = __webpack_require__(1985);
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ 3225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeys = __webpack_require__(7521),
    isArrayLike = __webpack_require__(6175);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ 4043:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ 3444:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/libram/dist/index.js
var dist = __webpack_require__(9803);
// EXTERNAL MODULE: ./node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal = __webpack_require__(1577);
;// CONCATENATED MODULE: ./src/config.ts
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Unfortunately don't have a clan with everything needed, so going to rely on a second clan for a prepped fax machine and slimetube
// Optional FORTUNE_TELLER_FRIEND must be a character in MAIN_CLAN

var MAIN_CLAN = (0,external_kolmafia_.getProperty)("seventyhccs_main_clan");
var FAX_AND_SLIME_CLAN = (0,external_kolmafia_.getProperty)("seventyhccs_side_clan");
var FORTUNE_TELLER_FRIEND = (0,external_kolmafia_.getProperty)("seventyhccs_fortune_friend"); // Define which BRICKO fight to use by changing BRICKO_TARGET_ITEM

var brickoOptions = {
  "BRICKO ooze": 2,
  "BRICKO bat": 5,
  "BRICKO oyster": 8,
  "BRICKO turtle": 11,
  "BRICKO elephant": 23,
  "BRICKO octopus": 37,
  "BRICKO python": 69
};
var BRICKO_TARGET_ITEM = (0,dist.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["BRICKO bat"])));
var BRICKOS_PER_FIGHT = brickoOptions["".concat(BRICKO_TARGET_ITEM)]; // Perhaps optimal to level at Chateau sooner rather than later

var CHATEAU_REST_LEVEL = 8; // Don't spend meat on sausages below this value

var MEAT_SAFE_LIMIT = 2000; // Don't spend MP on librams below this value unless right before a full MP refill

var MP_SAFE_LIMIT = 500;
;// CONCATENATED MODULE: ./src/lib.ts
var lib_templateObject, _templateObject2, _templateObject3, _templateObject4;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lib_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function acquireEffect(e) {
  if (e["default"].startsWith("cargo")) throw "Can't obtain ".concat(e, "?");
  if (!(0,dist.have)(e)) (0,external_kolmafia_.cliExecute)(e["default"]);
}
function acquireGumOrHermitItem(i) {
  var gum = (0,dist.$item)(lib_templateObject || (lib_templateObject = lib_taggedTemplateLiteral(["chewing gum on a string"])));
  var source = Object.keys((0,external_kolmafia_.getIngredients)(i));

  if (source[0] === gum.name) {
    while (!(0,dist.have)(i)) {
      if ((0,external_kolmafia_.myMeat)() < 50) throw "Out of meat for chewing gums!!!";
      if (!(0,dist.have)(gum)) (0,external_kolmafia_.buy)(gum, 1);
      (0,external_kolmafia_.use)(gum);
    }
  } else if (source[0] === (0,dist.$item)(_templateObject2 || (_templateObject2 = lib_taggedTemplateLiteral(["worthless item"]))).name) {
    if ((0,dist.have)(i)) return;
    if ((0,external_kolmafia_.myMeat)() < 50) throw "Out of meat for chewing gums!!!";
    buyUpTo(1, (0,dist.$item)(_templateObject3 || (_templateObject3 = lib_taggedTemplateLiteral(["hermit permit"]))));
    if (!(0,external_kolmafia_.hermit)(i, 1)) throw "Failed to purchase ".concat(i, " from Hermit");
  } else throw "".concat(i, " is not a gum or hermit item");
}
function buyUpTo(n, i) {
  if (!(0,dist.have)(i, n)) (0,external_kolmafia_.buy)(i, n - (0,external_kolmafia_.availableAmount)(i));
}
function checkAvailable(i) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!(0,dist.have)(i, n)) {
    throw "Why don't we have at least ".concat(n, " ").concat(n > 1 ? i.plural : i, " (id: ").concat((0,external_kolmafia_.toInt)(i), ")?");
  }
}
function checkEffect(e) {
  if (!(0,dist.have)(e)) throw "Missing effect ".concat(e);
}
function checkFax(monster) {
  if (!containsText(visitUrl("desc_item.php?whichitem=".concat($item(_templateObject4 || (_templateObject4 = lib_taggedTemplateLiteral(["photocopied monster"]))).descid)), "".concat(monster))) {
    throw "Error: grabbed wrong fax?";
  }
}
function shrugEffect(effect) {
  if ((0,dist.have)(effect)) (0,external_kolmafia_.cliExecute)("shrug ".concat(effect));
}
function tryRunChoice(pageIndex, choiceID, goal) {
  if (!(0,external_kolmafia_.runChoice)(pageIndex).includes("whichchoice=".concat(choiceID))) {
    var trim = goal.trim();
    throw "Error: failed to ".concat(trim.charAt(0).toLowerCase()).concat(trim.slice(1));
  }
}
function tryUse(n, i) {
  if ((0,external_kolmafia_.itemAmount)(i) >= n) (0,external_kolmafia_.use)(n, i);
}
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
}
function voterMonsterNow() {
  return (0,external_kolmafia_.totalTurnsPlayed)() % 11 === 1;
}
function whitelist(clan) {
  if ((0,external_kolmafia_.getClanName)() !== clan) (0,external_kolmafia_.cliExecute)("/whitelist ".concat(clan));
}
function wishEffect(e) {
  if (!(0,dist.have)(e)) (0,external_kolmafia_.cliExecute)("genie effect ".concat(e));
}
function withContext(func, context) {
  var previous = new Map();

  var setPrefsTo = function setPrefsTo(c) {
    var _iterator = _createForOfIteratorHelper(c),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            prop = _step$value[0],
            value = _step$value[1];

        (0,dist.set)(prop, value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var _iterator2 = _createForOfIteratorHelper(context),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 1),
          prop = _step2$value[0];

      previous.set(prop, (0,dist.get)(prop));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  try {
    setPrefsTo(context);
    func();
  } finally {
    setPrefsTo(previous);
  }
}
;// CONCATENATED MODULE: ./src/diet.ts
var diet_templateObject, diet_templateObject2, diet_templateObject3, diet_templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56;

function diet_slicedToArray(arr, i) { return diet_arrayWithHoles(arr) || diet_iterableToArrayLimit(arr, i) || diet_unsupportedIterableToArray(arr, i) || diet_nonIterableRest(); }

function diet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function diet_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function diet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || diet_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return diet_arrayLikeToArray(arr); }

function diet_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = diet_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function diet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return diet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return diet_arrayLikeToArray(o, minLen); }

function diet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function diet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var recipes = new Map([[(0,dist.$item)(diet_templateObject || (diet_templateObject = diet_taggedTemplateLiteral(["bugged balaclava"]))), function () {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(diet_templateObject2 || (diet_templateObject2 = diet_taggedTemplateLiteral(["Baby Bugged Bugbear"]))));
  (0,external_kolmafia_.visitUrl)("arena.php");
  (0,external_kolmafia_.cliExecute)("fold ".concat((0,dist.$item)(diet_templateObject3 || (diet_templateObject3 = diet_taggedTemplateLiteral(["bugged balaclava"])))));
}], [(0,dist.$item)(diet_templateObject4 || (diet_templateObject4 = diet_taggedTemplateLiteral(["blood-faced volleyball"]))), function () {
  acquireGumOrHermitItem((0,dist.$item)(_templateObject5 || (_templateObject5 = diet_taggedTemplateLiteral(["seal tooth"]))));
  acquireGumOrHermitItem((0,dist.$item)(_templateObject6 || (_templateObject6 = diet_taggedTemplateLiteral(["volleyball"]))));
  acquireEffect((0,dist.$effect)(_templateObject7 || (_templateObject7 = diet_taggedTemplateLiteral(["Bloody Hand"]))));
  (0,external_kolmafia_.use)((0,dist.$item)(_templateObject8 || (_templateObject8 = diet_taggedTemplateLiteral(["volleyball"]))));
}], [(0,dist.$item)(_templateObject9 || (_templateObject9 = diet_taggedTemplateLiteral(["cog and sprocket assembly"]))), function () {
  (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject10 || (_templateObject10 = diet_taggedTemplateLiteral(["cog and sprocket assembly"])))));
}], [(0,dist.$item)(_templateObject11 || (_templateObject11 = diet_taggedTemplateLiteral(["dripping meat crossbow"]))), function () {
  acquireGumOrHermitItem((0,dist.$item)(_templateObject12 || (_templateObject12 = diet_taggedTemplateLiteral(["catsup"]))));
  (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject13 || (_templateObject13 = diet_taggedTemplateLiteral(["dripping meat crossbow"])))));
}], [(0,dist.$item)(_templateObject14 || (_templateObject14 = diet_taggedTemplateLiteral(["hot buttered roll"]))), function () {
  acquireGumOrHermitItem((0,dist.$item)(_templateObject15 || (_templateObject15 = diet_taggedTemplateLiteral(["hot buttered roll"]))));
}], [(0,dist.$item)(_templateObject16 || (_templateObject16 = diet_taggedTemplateLiteral(["perfect dark and stormy"]))), function () {
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(_templateObject17 || (_templateObject17 = diet_taggedTemplateLiteral(["Perfect Freeze"]))));
  (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject18 || (_templateObject18 = diet_taggedTemplateLiteral(["perfect dark and stormy"])))));
}], [(0,dist.$item)(_templateObject19 || (_templateObject19 = diet_taggedTemplateLiteral(["ravioli hat"]))), function () {
  acquireGumOrHermitItem((0,dist.$item)(_templateObject20 || (_templateObject20 = diet_taggedTemplateLiteral(["ravioli hat"]))));
}], [(0,dist.$item)(_templateObject21 || (_templateObject21 = diet_taggedTemplateLiteral(["useless powder"]))), function () {
  buyUpTo(1, (0,dist.$item)(_templateObject22 || (_templateObject22 = diet_taggedTemplateLiteral(["tenderizing hammer"]))));
  buyUpTo(1, (0,dist.$item)(_templateObject23 || (_templateObject23 = diet_taggedTemplateLiteral(["cool whip"]))));
  (0,external_kolmafia_.cliExecute)("pulverize 1 ".concat((0,dist.$item)(_templateObject24 || (_templateObject24 = diet_taggedTemplateLiteral(["cool whip"])))));
}], [(0,dist.$item)(_templateObject25 || (_templateObject25 = diet_taggedTemplateLiteral(["wooden figurine"]))), function () {
  acquireGumOrHermitItem((0,dist.$item)(_templateObject26 || (_templateObject26 = diet_taggedTemplateLiteral(["wooden figurine"]))));
}]]);
var diabolicPizzas = {
  bureaucratized: {
    effect: (0,dist.$effect)(_templateObject27 || (_templateObject27 = diet_taggedTemplateLiteral(["Bureaucratized"]))),
    equip: (0,dist.$item)(_templateObject28 || (_templateObject28 = diet_taggedTemplateLiteral(["none"]))),
    // Don't equip the licorice boa
    familiar: (0,dist.$familiar)(_templateObject29 || (_templateObject29 = diet_taggedTemplateLiteral(["Peppermint Rhino"]))),
    ingredients: tuple((0,dist.$item)(_templateObject30 || (_templateObject30 = diet_taggedTemplateLiteral(["bugged balaclava"]))), (0,dist.$item)(_templateObject31 || (_templateObject31 = diet_taggedTemplateLiteral(["useless powder"]))), (0,dist.$item)(_templateObject32 || (_templateObject32 = diet_taggedTemplateLiteral(["ravioli hat"]))), (0,dist.$item)(_templateObject33 || (_templateObject33 = diet_taggedTemplateLiteral(["eyedrops of the ermine"]))))
  },
  chorale: {
    effect: (0,dist.$effect)(_templateObject34 || (_templateObject34 = diet_taggedTemplateLiteral(["Chorale of Companionship"]))),
    equip: (0,dist.$item)(_templateObject35 || (_templateObject35 = diet_taggedTemplateLiteral(["dromedary drinking helmet"]))),
    familiar: (0,dist.$familiar)(_templateObject36 || (_templateObject36 = diet_taggedTemplateLiteral(["Melodramedary"]))),
    ingredients: tuple((0,dist.$item)(_templateObject37 || (_templateObject37 = diet_taggedTemplateLiteral(["chiptune guitar"]))), (0,dist.$item)(_templateObject38 || (_templateObject38 = diet_taggedTemplateLiteral(["hot buttered roll"]))), (0,dist.$item)(_templateObject39 || (_templateObject39 = diet_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(_templateObject40 || (_templateObject40 = diet_taggedTemplateLiteral(["ravioli hat"]))))
  },
  downWithChow: {
    effect: (0,dist.$effect)(_templateObject41 || (_templateObject41 = diet_taggedTemplateLiteral(["Down With Chow"]))),
    equip: (0,dist.$item)(_templateObject42 || (_templateObject42 = diet_taggedTemplateLiteral(["Pocket Professor memory chip"]))),
    familiar: (0,dist.$familiar)(_templateObject43 || (_templateObject43 = diet_taggedTemplateLiteral(["Pocket Professor"]))),
    ingredients: tuple((0,dist.$item)(_templateObject44 || (_templateObject44 = diet_taggedTemplateLiteral(["dripping meat crossbow"]))), (0,dist.$item)(_templateObject45 || (_templateObject45 = diet_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(_templateObject46 || (_templateObject46 = diet_taggedTemplateLiteral(["wooden figurine"]))), (0,dist.$item)(_templateObject47 || (_templateObject47 = diet_taggedTemplateLiteral(["blood-faced volleyball"]))))
  },
  optimistPrimal: {
    effect: (0,dist.$effect)(_templateObject48 || (_templateObject48 = diet_taggedTemplateLiteral(["Optimist Primal"]))),
    equip: (0,dist.$item)(_templateObject49 || (_templateObject49 = diet_taggedTemplateLiteral(["cracker"]))),
    familiar: (0,dist.$familiar)(_templateObject50 || (_templateObject50 = diet_taggedTemplateLiteral(["Exotic Parrot"]))),
    ingredients: tuple((0,dist.$item)(_templateObject51 || (_templateObject51 = diet_taggedTemplateLiteral(["oil of expertise"]))), (0,dist.$item)(_templateObject52 || (_templateObject52 = diet_taggedTemplateLiteral(["perfect dark and stormy"]))), (0,dist.$item)(_templateObject53 || (_templateObject53 = diet_taggedTemplateLiteral(["blood-faced volleyball"]))), (0,dist.$item)(_templateObject54 || (_templateObject54 = diet_taggedTemplateLiteral(["cog and sprocket assembly"]))))
  }
};
function eatPizzas() {
  for (var _i = 0, _Object$values = Object.values(diabolicPizzas); _i < _Object$values.length; _i++) {
    var pizza = _Object$values[_i];

    if (!(0,dist.have)(pizza.effect)) {
      var _iterator = diet_createForOfIteratorHelper(pizza.ingredients),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ingredient = _step.value;

          if (!(0,dist.have)(ingredient)) {
            var recipe = recipes.get(ingredient);
            if (!recipe) throw "Missing recipe for ".concat(ingredient);
            recipe();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      (0,external_kolmafia_.useFamiliar)(pizza.familiar);
      cookPizza.apply(void 0, _toConsumableArray(pizza.ingredients));
      (0,external_kolmafia_.eat)((0,dist.$item)(_templateObject55 || (_templateObject55 = diet_taggedTemplateLiteral(["Diabolic pizza"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(_templateObject56 || (_templateObject56 = diet_taggedTemplateLiteral(["familiar"]))), pizza.equip);
    }
  }
}

function cookPizza(a, b, c, d) {
  var counts = new Map();
  Array.prototype.slice.call(arguments).forEach(function (f) {
    return counts.set(f, 1 + (counts.get(f) || 0));
  });

  var _iterator2 = diet_createForOfIteratorHelper(counts),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = diet_slicedToArray(_step2.value, 2),
          item = _step2$value[0],
          count = _step2$value[1];

      checkAvailable(item, count);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  (0,external_kolmafia_.visitUrl)("campground.php?action=makepizza&pizza=".concat((0,external_kolmafia_.toInt)(a), ",").concat((0,external_kolmafia_.toInt)(b), ",").concat((0,external_kolmafia_.toInt)(c), ",").concat((0,external_kolmafia_.toInt)(d)));
}
;// CONCATENATED MODULE: ./src/combat.ts
var combat_templateObject, combat_templateObject2, combat_templateObject3, combat_templateObject4, combat_templateObject5, combat_templateObject6, combat_templateObject7, combat_templateObject8, combat_templateObject9, combat_templateObject10, combat_templateObject11, combat_templateObject12, combat_templateObject13, combat_templateObject14, combat_templateObject15, combat_templateObject16, combat_templateObject17, combat_templateObject18, combat_templateObject19, combat_templateObject20, combat_templateObject21, combat_templateObject22, combat_templateObject23, combat_templateObject24, combat_templateObject25, combat_templateObject26, combat_templateObject27, combat_templateObject28, combat_templateObject29, combat_templateObject30, combat_templateObject31, combat_templateObject32, combat_templateObject33, combat_templateObject34, combat_templateObject35, combat_templateObject36, combat_templateObject37, combat_templateObject38, combat_templateObject39, combat_templateObject40, combat_templateObject41, combat_templateObject42, combat_templateObject43, combat_templateObject44, combat_templateObject45, combat_templateObject46, combat_templateObject47, combat_templateObject48, combat_templateObject49, combat_templateObject50, combat_templateObject51, combat_templateObject52, combat_templateObject53, combat_templateObject54, combat_templateObject55, combat_templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72;

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var amateurNinja = (0,dist.$monster)(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["amateur ninja"]))).id;
var gentrifier = (0,dist.$monster)(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["gingerbread gentrifier"]))).id;
var toxicBeastie = (0,dist.$monster)(combat_templateObject3 || (combat_templateObject3 = combat_taggedTemplateLiteral(["toxic beastie"]))).id;
var ungulith = (0,dist.$monster)(combat_templateObject4 || (combat_templateObject4 = combat_taggedTemplateLiteral(["Ungulith"]))).id;
var LOVEnforcer = (0,dist.$monster)(combat_templateObject5 || (combat_templateObject5 = combat_taggedTemplateLiteral(["LOV Enforcer"]))).id;
var LOVEngineer = (0,dist.$monster)(combat_templateObject6 || (combat_templateObject6 = combat_taggedTemplateLiteral(["LOV Engineer"]))).id;
var DMTSquareMon = (0,dist.$monster)(combat_templateObject7 || (combat_templateObject7 = combat_taggedTemplateLiteral(["Performer of Actions"]))).id;
var DMTCircleMon = (0,dist.$monster)(combat_templateObject8 || (combat_templateObject8 = combat_taggedTemplateLiteral(["Thinker of Thoughts"]))).id;
var factoryOverseerF = (0,dist.$monster)(combat_templateObject9 || (combat_templateObject9 = combat_taggedTemplateLiteral(["factory overseer (female)"]))).id;
var factoryWorkerF = (0,dist.$monster)(combat_templateObject10 || (combat_templateObject10 = combat_taggedTemplateLiteral(["factory worker (female)"]))).id;
var mineWorkerF = (0,dist.$monster)(combat_templateObject11 || (combat_templateObject11 = combat_taggedTemplateLiteral(["mine worker (female)"]))).id;
var mineWorkerM = (0,dist.$monster)(combat_templateObject12 || (combat_templateObject12 = combat_taggedTemplateLiteral(["mine worker (male)"]))).id;
var retailDistrict = (0,external_kolmafia_.toUrl)((0,dist.$location)(combat_templateObject13 || (combat_templateObject13 = combat_taggedTemplateLiteral(["Gingerbread Upscale Retail District"])))).split("=")[1];
var EnvyNostalgia = new dist.Macro().trySkill((0,dist.$skill)(combat_templateObject14 || (combat_templateObject14 = combat_taggedTemplateLiteral(["Feel Envy"])))).trySkill((0,dist.$skill)(combat_templateObject15 || (combat_templateObject15 = combat_taggedTemplateLiteral(["Feel Nostalgic"]))));
var GhostMacro = new dist.Macro().skill((0,dist.$skill)(combat_templateObject16 || (combat_templateObject16 = combat_taggedTemplateLiteral(["Summon Love Gnats"])))) // kind of a hack but the plan is to always runaway before the second ghost
.if_("haseffect ".concat((0,external_kolmafia_.toInt)((0,dist.$effect)(combat_templateObject17 || (combat_templateObject17 = combat_taggedTemplateLiteral(["Ode to Booze"]))))), EnvyNostalgia).skill((0,dist.$skill)(combat_templateObject18 || (combat_templateObject18 = combat_taggedTemplateLiteral(["Sing Along"])))).skill((0,dist.$skill)(combat_templateObject19 || (combat_templateObject19 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(combat_templateObject20 || (combat_templateObject20 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(combat_templateObject21 || (combat_templateObject21 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(combat_templateObject22 || (combat_templateObject22 = combat_taggedTemplateLiteral(["Trap Ghost"])))).abort();
var TryBanish = new dist.Macro() // Reserve Snokebomb for Mother Slime
.trySkill((0,dist.$skill)(combat_templateObject23 || (combat_templateObject23 = combat_taggedTemplateLiteral(["Throw Latte on Opponent"])))).trySkill((0,dist.$skill)(combat_templateObject24 || (combat_templateObject24 = combat_taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill((0,dist.$skill)(combat_templateObject25 || (combat_templateObject25 = combat_taggedTemplateLiteral(["Reflex Hammer"])))).trySkill((0,dist.$skill)(combat_templateObject26 || (combat_templateObject26 = combat_taggedTemplateLiteral(["Feel Hatred"])))).abort();
var Replace = new dist.Macro() //.trySkill($skill`CHEAT CODE: Replace Enemy`)
//.if_(`!hasskill ${toInt($skill`CHEAT CODE: Replace Enemy`)}`, Macro
.skill((0,dist.$skill)(combat_templateObject27 || (combat_templateObject27 = combat_taggedTemplateLiteral(["Macrometeor"]))));
var MeteorShowerForce = new dist.Macro().skill((0,dist.$skill)(combat_templateObject28 || (combat_templateObject28 = combat_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(combat_templateObject29 || (combat_templateObject29 = combat_taggedTemplateLiteral(["Use the Force"]))));
var FreeInstaKill = new dist.Macro().skill((0,dist.$skill)(combat_templateObject30 || (combat_templateObject30 = combat_taggedTemplateLiteral(["Sing Along"])))).trySkill((0,dist.$skill)(combat_templateObject31 || (combat_templateObject31 = combat_taggedTemplateLiteral(["Chest X-Ray"])))).trySkill((0,dist.$skill)(combat_templateObject32 || (combat_templateObject32 = combat_taggedTemplateLiteral(["Shattering Punch"])))).trySkill((0,dist.$skill)(combat_templateObject33 || (combat_templateObject33 = combat_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).abort();
var CigKill = new dist.Macro().skill((0,dist.$skill)(combat_templateObject34 || (combat_templateObject34 = combat_taggedTemplateLiteral(["Sing Along"])))).tryItem((0,dist.$item)(combat_templateObject35 || (combat_templateObject35 = combat_taggedTemplateLiteral(["gingerbread cigarette"])))).abort();
var DefaultMacro = new dist.Macro().if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(combat_templateObject36 || (combat_templateObject36 = combat_taggedTemplateLiteral(["Shoot Ghost"]))))), GhostMacro).if_("monsterid ".concat(toxicBeastie), dist.Macro.trySkill((0,dist.$skill)(combat_templateObject37 || (combat_templateObject37 = combat_taggedTemplateLiteral(["Back-Up to your Last Enemy"])))).skill((0,dist.$skill)(combat_templateObject38 || (combat_templateObject38 = combat_taggedTemplateLiteral(["Summon Love Mosquito"]))))).if_("monsterid ".concat(amateurNinja, " || monsterid ").concat(toxicBeastie), FreeInstaKill).if_("snarfblat ".concat(retailDistrict), CigKill).trySkill((0,dist.$skill)(combat_templateObject39 || (combat_templateObject39 = combat_taggedTemplateLiteral(["Digitize"])))).trySkill((0,dist.$skill)(combat_templateObject40 || (combat_templateObject40 = combat_taggedTemplateLiteral(["spit on me!"])))).if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(combat_templateObject41 || (combat_templateObject41 = combat_taggedTemplateLiteral(["Turbo"]))))), dist.Macro.trySkill((0,dist.$skill)(combat_templateObject42 || (combat_templateObject42 = combat_taggedTemplateLiteral(["Feel Pride"]))))) // Turbo used a flag to cast pride
.skill((0,dist.$skill)(combat_templateObject43 || (combat_templateObject43 = combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).skill((0,dist.$skill)(combat_templateObject44 || (combat_templateObject44 = combat_taggedTemplateLiteral(["Micrometeorite"])))).if_("!hascombatitem ".concat((0,external_kolmafia_.toInt)((0,dist.$item)(combat_templateObject45 || (combat_templateObject45 = combat_taggedTemplateLiteral(["blue rocket"]))))), dist.Macro.item((0,dist.$item)(combat_templateObject46 || (combat_templateObject46 = combat_taggedTemplateLiteral(["Time-Spinner"]))))).if_("hascombatitem ".concat((0,external_kolmafia_.toInt)((0,dist.$item)(combat_templateObject47 || (combat_templateObject47 = combat_taggedTemplateLiteral(["blue rocket"]))))), dist.Macro.item((0,dist.$item)(combat_templateObject48 || (combat_templateObject48 = combat_taggedTemplateLiteral(["Time-Spinner"]))), (0,dist.$item)(combat_templateObject49 || (combat_templateObject49 = combat_taggedTemplateLiteral(["blue rocket"]))))).if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(combat_templateObject50 || (combat_templateObject50 = combat_taggedTemplateLiteral(["lecture on relativity"]))))), dist.Macro.skill((0,dist.$skill)(combat_templateObject51 || (combat_templateObject51 = combat_taggedTemplateLiteral(["lecture on relativity"])))).skill((0,dist.$skill)(combat_templateObject52 || (combat_templateObject52 = combat_taggedTemplateLiteral(["Saucy Salve"]))))).skill((0,dist.$skill)(combat_templateObject53 || (combat_templateObject53 = combat_taggedTemplateLiteral(["Sing Along"])))).skill((0,dist.$skill)(combat_templateObject54 || (combat_templateObject54 = combat_taggedTemplateLiteral(["Candyblast"])))).repeat();
var MacroList = {
  FreeFight: DefaultMacro,
  PickpocketFreeRun: new dist.Macro().if_("monsterid ".concat(ungulith), "pickpocket").step("runaway"),
  Banish: TryBanish,
  Nanobrainy: new dist.Macro().skill((0,dist.$skill)(combat_templateObject55 || (combat_templateObject55 = combat_taggedTemplateLiteral(["Entangling Noodles"])))).trySkill((0,dist.$skill)(combat_templateObject56 || (combat_templateObject56 = combat_taggedTemplateLiteral(["Giant Growth"])))).trySkill((0,dist.$skill)(_templateObject57 || (_templateObject57 = combat_taggedTemplateLiteral(["Become a Wolf"])))).step(TryBanish),
  Sprinkles: new dist.Macro().if_("monsterid ".concat(gentrifier), Replace).skill((0,dist.$skill)(_templateObject58 || (_templateObject58 = combat_taggedTemplateLiteral(["Meteor Shower"])))).step(FreeInstaKill),
  TropicalSkeleton: new dist.Macro().trySkill((0,dist.$skill)(_templateObject59 || (_templateObject59 = combat_taggedTemplateLiteral(["Open a Big Red Present"])))).skill((0,dist.$skill)(_templateObject60 || (_templateObject60 = combat_taggedTemplateLiteral(["Use the Force"])))),
  TunnelOfLOV: new dist.Macro().if_("monsterid ".concat(LOVEnforcer), dist.Macro.attack().repeat()).if_("monsterid ".concat(LOVEngineer), dist.Macro.skill((0,dist.$skill)(_templateObject61 || (_templateObject61 = combat_taggedTemplateLiteral(["Candyblast"])))).repeat()).step(DefaultMacro),
  WitchessQueen: new dist.Macro().item((0,dist.$item)(_templateObject62 || (_templateObject62 = combat_taggedTemplateLiteral(["Time-Spinner"])))).attack().repeat(),
  WitchessWitch: new dist.Macro().skill((0,dist.$skill)(_templateObject63 || (_templateObject63 = combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).skill((0,dist.$skill)(_templateObject64 || (_templateObject64 = combat_taggedTemplateLiteral(["Sing Along"])))).attack().repeat(),
  DMTSquare: new dist.Macro().if_("!monsterid ".concat(DMTSquareMon), Replace).skill((0,dist.$skill)(_templateObject65 || (_templateObject65 = combat_taggedTemplateLiteral(["Feel Envy"])))).step(DefaultMacro),
  DMTCircle: new dist.Macro().if_("!monsterid ".concat(DMTCircleMon), Replace).tryItem((0,dist.$item)(_templateObject66 || (_templateObject66 = combat_taggedTemplateLiteral(["abstraction: action"])))).step(DefaultMacro),
  MotherSlime: new dist.Macro().trySkill((0,dist.$skill)(_templateObject67 || (_templateObject67 = combat_taggedTemplateLiteral(["KGB tranquilizer dart"])))).skill((0,dist.$skill)(_templateObject68 || (_templateObject68 = combat_taggedTemplateLiteral(["Snokebomb"])))),
  LavaCoFactory1: new dist.Macro().if_("!monsterid ".concat(factoryWorkerF, " && !monsterid ").concat(factoryOverseerF), TryBanish).step(MeteorShowerForce),
  LavaCoFactory2: new dist.Macro().if_("!monsterid ".concat(factoryWorkerF, " && !monsterid ").concat(factoryOverseerF), Replace).step(MeteorShowerForce),
  VelvetGoldMine1: new dist.Macro().if_("!monsterid ".concat(mineWorkerF, " && !monsterid ").concat(mineWorkerM), TryBanish).step(MeteorShowerForce),
  VelvetGoldMine2: new dist.Macro().if_("!monsterid ".concat(mineWorkerF, " && !monsterid ").concat(mineWorkerM), Replace).step(MeteorShowerForce),
  MistForm: new dist.Macro().trySkill((0,dist.$skill)(_templateObject69 || (_templateObject69 = combat_taggedTemplateLiteral(["Become a Cloud of Mist"])))).step(TryBanish),
  BatForm: new dist.Macro().trySkill((0,dist.$skill)(_templateObject70 || (_templateObject70 = combat_taggedTemplateLiteral(["Become a Bat"])))).step(TryBanish),
  LatteGulpRunaway: new dist.Macro().trySkill((0,dist.$skill)(_templateObject71 || (_templateObject71 = combat_taggedTemplateLiteral(["Gulp Latte"])))).step("runaway"),
  MeteorShowerForce: MeteorShowerForce
}; // Replace Libram's adventureMacro functionality for now with kolmafia-js 1.0.11

function adventure(loc, macro) {
  (0,external_kolmafia_.setAutoAttack)(0);
  (0,external_kolmafia_.adv1)(loc, 0, macro.toString());

  while ((0,external_kolmafia_.inMultiFight)()) {
    (0,external_kolmafia_.runCombat)(macro.toString());
  }

  if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");
}
function mapMonster(location, monster, macro) {
  if ((0,dist.get)("_monstersMapped") < 3) {
    if (!(0,dist.get)("mappingMonsters")) {
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(_templateObject72 || (_templateObject72 = combat_taggedTemplateLiteral(["Map the Monsters"]))));
      if (!(0,dist.get)("mappingMonsters")) throw "Failed to cast map the monsters?";
    }

    var expectedTurnCount = (0,external_kolmafia_.myTurncount)();
    var mapPage = (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(location));

    while (!mapPage.includes("Leading Yourself Right to Them")) {
      mapPage = (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(location));

      if ((0,external_kolmafia_.myTurncount)() > expectedTurnCount) {
        throw "Failed to encounter map monster page and wasted a turn somehow?";
      }
    }

    (0,external_kolmafia_.visitUrl)("choice.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=").concat(monster.id));
    (0,external_kolmafia_.runCombat)(macro.toString());
    if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.runChoice)(-1);
  } else {
    throw "Trying to map too many monsters in one day";
  }
}
;// CONCATENATED MODULE: ./src/iotms.ts
var iotms_templateObject, iotms_templateObject2, iotms_templateObject3, iotms_templateObject4, iotms_templateObject5, iotms_templateObject6, iotms_templateObject7, iotms_templateObject8, iotms_templateObject9, iotms_templateObject10, iotms_templateObject11, iotms_templateObject12, iotms_templateObject13, iotms_templateObject14, iotms_templateObject15, iotms_templateObject16, iotms_templateObject17, iotms_templateObject18, iotms_templateObject19, iotms_templateObject20, iotms_templateObject21, iotms_templateObject22, iotms_templateObject23, iotms_templateObject24, iotms_templateObject25, iotms_templateObject26, iotms_templateObject27, iotms_templateObject28, iotms_templateObject29, iotms_templateObject30, iotms_templateObject31, iotms_templateObject32, iotms_templateObject33, iotms_templateObject34, iotms_templateObject35, iotms_templateObject36, iotms_templateObject37, iotms_templateObject38;

function iotms_slicedToArray(arr, i) { return iotms_arrayWithHoles(arr) || iotms_iterableToArrayLimit(arr, i) || iotms_unsupportedIterableToArray(arr, i) || iotms_nonIterableRest(); }

function iotms_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function iotms_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function iotms_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function iotms_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = iotms_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function iotms_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return iotms_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return iotms_arrayLikeToArray(o, minLen); }

function iotms_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function iotms_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function castBestLibram() {
  if ((0,dist.get)("_brickoEyeSummons") < 3 || !(0,dist.have)((0,dist.$item)(iotms_templateObject || (iotms_templateObject = iotms_taggedTemplateLiteral(["BRICKO brick"]))), BRICKOS_PER_FIGHT * (3 - (0,dist.get)("_brickoFights")))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject2 || (iotms_templateObject2 = iotms_taggedTemplateLiteral(["Summon BRICKOs"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject3 || (iotms_templateObject3 = iotms_taggedTemplateLiteral(["green candy heart"])))) && !(0,dist.have)((0,dist.$effect)(iotms_templateObject4 || (iotms_templateObject4 = iotms_taggedTemplateLiteral(["Heart of Green"]))))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject5 || (iotms_templateObject5 = iotms_taggedTemplateLiteral(["Summon Candy Heart"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject6 || (iotms_templateObject6 = iotms_taggedTemplateLiteral(["love song of icy revenge"]))))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject7 || (iotms_templateObject7 = iotms_taggedTemplateLiteral(["Summon Love Song"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject8 || (iotms_templateObject8 = iotms_taggedTemplateLiteral(["resolution: be kinder"])))) && !(0,dist.have)((0,dist.$effect)(iotms_templateObject9 || (iotms_templateObject9 = iotms_taggedTemplateLiteral(["Kindly Resolve"]))))) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject10 || (iotms_templateObject10 = iotms_taggedTemplateLiteral(["Summon Resolutions"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject11 || (iotms_templateObject11 = iotms_taggedTemplateLiteral(["love song of icy revenge"]))), 2)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject12 || (iotms_templateObject12 = iotms_taggedTemplateLiteral(["Summon Love Song"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject13 || (iotms_templateObject13 = iotms_taggedTemplateLiteral(["pulled blue taffy"]))), 4)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject14 || (iotms_templateObject14 = iotms_taggedTemplateLiteral(["Summon Taffy"]))));
  } else {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject15 || (iotms_templateObject15 = iotms_taggedTemplateLiteral(["Summon Resolutions"]))));
  }
}
function fightWitchess(piece, macro) {
  macro.setAutoAttack();
  dist.Witchess.fightPiece(piece);
}
function gazeAtTheStars() {
  while ((0,dist.get)("_campAwaySmileBuffs") < 3) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }
}
function getPantogramPants() {
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject16 || (iotms_templateObject16 = iotms_taggedTemplateLiteral(["portable pantogram"])))) || (0,dist.have)((0,dist.$item)(iotms_templateObject17 || (iotms_templateObject17 = iotms_taggedTemplateLiteral(["pantogram pants"]))))) return;
  var m = new Map([[(0,dist.$stat)(iotms_templateObject18 || (iotms_templateObject18 = iotms_taggedTemplateLiteral(["Muscle"]))), 1], [(0,dist.$stat)(iotms_templateObject19 || (iotms_templateObject19 = iotms_taggedTemplateLiteral(["Mysticality"]))), 2], [(0,dist.$stat)(iotms_templateObject20 || (iotms_templateObject20 = iotms_taggedTemplateLiteral(["Moxie"]))), 3]]).get((0,external_kolmafia_.myPrimestat)());
  var element;

  (function (element) {
    element[element["hot"] = 1] = "hot";
    element[element["cold"] = 2] = "cold";
    element[element["spooky"] = 3] = "spooky";
    element[element["sleaze"] = 4] = "sleaze";
    element[element["stench"] = 5] = "stench";
  })(element || (element = {}));

  var e = element.spooky; // -3 mp to use skills or +20 mp

  var s1 = (0,dist.have)((0,dist.$item)(iotms_templateObject21 || (iotms_templateObject21 = iotms_taggedTemplateLiteral(["baconstone"])))) ? "".concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject22 || (iotms_templateObject22 = iotms_taggedTemplateLiteral(["baconstone"])))), ",1") : "-2,0";
  var s2 = "-2,0"; // Spell Damage +20%

  var s3 = "-1,0"; // Monsters will be less attracted to you

  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichitem=").concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject23 || (iotms_templateObject23 = iotms_taggedTemplateLiteral(["portable pantogram"]))))));
  (0,external_kolmafia_.visitUrl)("choice.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichchoice=1270&option=1&m=").concat(m, "&e=").concat(e, "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3));
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject24 || (iotms_templateObject24 = iotms_taggedTemplateLiteral(["pantogram pants"]))))) throw "Failed to create pantogram pants";
}
function harvestBatteries() {
  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichitem=").concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject25 || (iotms_templateObject25 = iotms_taggedTemplateLiteral(["potted power plant"]))))));

  for (var i = 0; i < 7; i++) {
    (0,external_kolmafia_.visitUrl)("choice.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichchoice=1448&option=1&pp=").concat(i + 1));
  }
}
function scavengeDaycare() {
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!(0,dist.get)("_daycareNap")) tryRunChoice(1, 1334, "have a boxing daydream.");

  if ((0,dist.get)("_daycareGymScavenges") < 1) {
    tryRunChoice(3, 1334, "enter the gym.");
    tryRunChoice(2, 1336, "scavenge for gym equipment.");

    if ((0,dist.get)("_daycareGymScavenges") < 1) {
      (0,external_kolmafia_.print)("Incrementing daycare scavenges count", "red");
      (0,dist.set)("_daycareGymScavenges", 1);
    }
  }
}
function spendAllMpOnLibrams() {
  while ((0,external_kolmafia_.myMp)() > (0,external_kolmafia_.mpCost)((0,dist.$skill)(iotms_templateObject26 || (iotms_templateObject26 = iotms_taggedTemplateLiteral(["Summon BRICKOs"]))))) {
    castBestLibram();
  }
}
var MoonSign;

(function (MoonSign) {
  MoonSign[MoonSign["Mongoose"] = 1] = "Mongoose";
  MoonSign[MoonSign["Wallaby"] = 2] = "Wallaby";
  MoonSign[MoonSign["Vole"] = 3] = "Vole";
  MoonSign[MoonSign["Platypus"] = 4] = "Platypus";
  MoonSign[MoonSign["Opossum"] = 5] = "Opossum";
  MoonSign[MoonSign["Marmot"] = 6] = "Marmot";
  MoonSign[MoonSign["Wombat"] = 7] = "Wombat";
  MoonSign[MoonSign["Blender"] = 8] = "Blender";
  MoonSign[MoonSign["Packrat"] = 9] = "Packrat";
})(MoonSign || (MoonSign = {}));

function tuneMoon(moon) {
  (0,external_kolmafia_.visitUrl)("inv_use.php?whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject27 || (iotms_templateObject27 = iotms_taggedTemplateLiteral(["hewn moon-rune spoon"])))), "&doit=96&whichsign=").concat(moon));
}
var libramDrops = new Map([[(0,dist.$item)(iotms_templateObject28 || (iotms_templateObject28 = iotms_taggedTemplateLiteral(["green candy heart"]))), 1], [(0,dist.$item)(iotms_templateObject29 || (iotms_templateObject29 = iotms_taggedTemplateLiteral(["pulled violet taffy"]))), 50], [(0,dist.$item)(iotms_templateObject30 || (iotms_templateObject30 = iotms_taggedTemplateLiteral(["pulled yellow taffy"]))), 50], [(0,dist.$item)(iotms_templateObject31 || (iotms_templateObject31 = iotms_taggedTemplateLiteral(["resolution: be feistier"]))), 1], [(0,dist.$item)(iotms_templateObject32 || (iotms_templateObject32 = iotms_taggedTemplateLiteral(["resolution: be happier"]))), 1], [(0,dist.$item)(iotms_templateObject33 || (iotms_templateObject33 = iotms_taggedTemplateLiteral(["resolution: be kinder"]))), 1], [(0,dist.$item)(iotms_templateObject34 || (iotms_templateObject34 = iotms_taggedTemplateLiteral(["resolution: be luckier"]))), 1], [(0,dist.$item)(iotms_templateObject35 || (iotms_templateObject35 = iotms_taggedTemplateLiteral(["resolution: be smarter"]))), 1], [(0,dist.$item)(iotms_templateObject36 || (iotms_templateObject36 = iotms_taggedTemplateLiteral(["resolution: be wealthier"]))), 1]]);
function useLibramsDrops() {
  var _iterator = iotms_createForOfIteratorHelper(libramDrops),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = iotms_slicedToArray(_step.value, 2),
          item = _step$value[0],
          duration = _step$value[1];

      while ((0,dist.have)(item) && !(0,dist.have)((0,external_kolmafia_.effectModifier)(item, "effect"), duration)) {
        (0,external_kolmafia_.use)(item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function vote() {
  if ((0,external_kolmafia_.myClass)() !== (0,dist.$class)(iotms_templateObject37 || (iotms_templateObject37 = iotms_taggedTemplateLiteral(["Sauceror"])))) throw "Don't yet know how to run this as a ".concat((0,external_kolmafia_.myClass)());
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  (0,external_kolmafia_.visitUrl)("choice.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&option=1&whichchoice=1331&g=2&local[]=1&local[]=3"));
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject38 || (iotms_templateObject38 = iotms_taggedTemplateLiteral(["\"I Voted!\" sticker"]))))) throw "Voting failed";
}
;// CONCATENATED MODULE: ./src/quests.ts
var quests_templateObject, quests_templateObject2, quests_templateObject3, quests_templateObject4, quests_templateObject5, quests_templateObject6, quests_templateObject7, quests_templateObject8, quests_templateObject9, quests_templateObject10, quests_templateObject11, quests_templateObject12, quests_templateObject13, quests_templateObject14, quests_templateObject15, quests_templateObject16, quests_templateObject17, quests_templateObject18, quests_templateObject19, quests_templateObject20, quests_templateObject21, quests_templateObject22, quests_templateObject23, quests_templateObject24, quests_templateObject25, quests_templateObject26, quests_templateObject27, quests_templateObject28, quests_templateObject29, quests_templateObject30, quests_templateObject31, quests_templateObject32, quests_templateObject33, quests_templateObject34, quests_templateObject35, quests_templateObject36, quests_templateObject37, quests_templateObject38, quests_templateObject39, quests_templateObject40, quests_templateObject41, quests_templateObject42, quests_templateObject43, quests_templateObject44, quests_templateObject45, quests_templateObject46, quests_templateObject47, quests_templateObject48, quests_templateObject49, quests_templateObject50, quests_templateObject51, quests_templateObject52, quests_templateObject53, quests_templateObject54, quests_templateObject55, quests_templateObject56, quests_templateObject57, quests_templateObject58, quests_templateObject59, quests_templateObject60, quests_templateObject61, quests_templateObject62, quests_templateObject63, quests_templateObject64, quests_templateObject65, quests_templateObject66, quests_templateObject67, quests_templateObject68, quests_templateObject69, quests_templateObject70, quests_templateObject71, quests_templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _questOutfits, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321, _templateObject322, _templateObject323, _templateObject324, _questEffects;

function quests_slicedToArray(arr, i) { return quests_arrayWithHoles(arr) || quests_iterableToArrayLimit(arr, i) || quests_unsupportedIterableToArray(arr, i) || quests_nonIterableRest(); }

function quests_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function quests_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function quests_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function quests_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = quests_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function quests_toConsumableArray(arr) { return quests_arrayWithoutHoles(arr) || quests_iterableToArray(arr) || quests_unsupportedIterableToArray(arr) || quests_nonIterableSpread(); }

function quests_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function quests_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return quests_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return quests_arrayLikeToArray(o, minLen); }

function quests_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function quests_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return quests_arrayLikeToArray(arr); }

function quests_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function quests_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Quest;

(function (Quest) {
  Quest[Quest["HP"] = 1] = "HP";
  Quest[Quest["Muscle"] = 2] = "Muscle";
  Quest[Quest["Mysticality"] = 3] = "Mysticality";
  Quest[Quest["Moxie"] = 4] = "Moxie";
  Quest[Quest["FamiliarWeight"] = 5] = "FamiliarWeight";
  Quest[Quest["WeaponDamage"] = 6] = "WeaponDamage";
  Quest[Quest["SpellDamage"] = 7] = "SpellDamage";
  Quest[Quest["CombatFrequency"] = 8] = "CombatFrequency";
  Quest[Quest["ItemDrop"] = 9] = "ItemDrop";
  Quest[Quest["HotResist"] = 10] = "HotResist";
  Quest[Quest["CoilWire"] = 11] = "CoilWire";
  Quest[Quest["Donate"] = 30] = "Donate";
  Quest[Quest["Beginning"] = 900] = "Beginning";
  Quest[Quest["Leveling"] = 901] = "Leveling";
  Quest[Quest["Sprinkles"] = 902] = "Sprinkles";
  Quest[Quest["DeepDark"] = 903] = "DeepDark";
})(Quest || (Quest = {}));

function handleCreateEquip(equip) {
  switch (equip) {
    case (0,dist.$item)(quests_templateObject || (quests_templateObject = quests_taggedTemplateLiteral(["broken champagne bottle"]))):
    case (0,dist.$item)(quests_templateObject2 || (quests_templateObject2 = quests_taggedTemplateLiteral(["wad of used tape"]))):
      {
        if (!(0,dist.have)(equip)) {
          (0,external_kolmafia_.cliExecute)("fold ".concat(equip));
        }

        return;
      }

    case (0,dist.$item)(quests_templateObject3 || (quests_templateObject3 = quests_taggedTemplateLiteral(["burning paper crane"]))):
    case (0,dist.$item)(quests_templateObject4 || (quests_templateObject4 = quests_taggedTemplateLiteral(["meteorite guard"]))):
      {
        var _ingredients$;

        var ingredients = Object.keys((0,external_kolmafia_.getIngredients)(equip));

        if (!(0,dist.have)(equip) && (0,dist.have)(Item.get((_ingredients$ = ingredients[0]) !== null && _ingredients$ !== void 0 ? _ingredients$ : "none"))) {
          (0,external_kolmafia_.cliExecute)("make ".concat(equip));
        }

        return;
      }
  }
}

function equipWadOfUsedTape() {
  handleCreateEquip((0,dist.$item)(quests_templateObject5 || (quests_templateObject5 = quests_taggedTemplateLiteral(["wad of used tape"]))));
  (0,external_kolmafia_.equip)((0,dist.$slot)(quests_templateObject6 || (quests_templateObject6 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject7 || (quests_templateObject7 = quests_taggedTemplateLiteral(["wad of used tape"]))));
}
var questOutfits = (_questOutfits = {}, _defineProperty(_questOutfits, Quest.Beginning, function () {
  return new Map([[(0,dist.$slot)(quests_templateObject8 || (quests_templateObject8 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject9 || (quests_templateObject9 = quests_taggedTemplateLiteral(["Iunion Crown"])))], [(0,dist.$slot)(quests_templateObject10 || (quests_templateObject10 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(quests_templateObject11 || (quests_templateObject11 = quests_taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(quests_templateObject12 || (quests_templateObject12 = quests_taggedTemplateLiteral(["shirt"]))), (0,dist.$item)(quests_templateObject13 || (quests_templateObject13 = quests_taggedTemplateLiteral(["fresh coat of paint"])))], [(0,dist.$slot)(quests_templateObject14 || (quests_templateObject14 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject15 || (quests_templateObject15 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject16 || (quests_templateObject16 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(quests_templateObject17 || (quests_templateObject17 = quests_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [(0,dist.$slot)(quests_templateObject18 || (quests_templateObject18 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(quests_templateObject19 || (quests_templateObject19 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(quests_templateObject20 || (quests_templateObject20 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject21 || (quests_templateObject21 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(quests_templateObject22 || (quests_templateObject22 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(quests_templateObject23 || (quests_templateObject23 = quests_taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(quests_templateObject24 || (quests_templateObject24 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject25 || (quests_templateObject25 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
}), _defineProperty(_questOutfits, Quest.CoilWire, function () {
  return new Map([[(0,dist.$slot)(quests_templateObject26 || (quests_templateObject26 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject27 || (quests_templateObject27 = quests_taggedTemplateLiteral(["Iunion Crown"])))], [(0,dist.$slot)(quests_templateObject28 || (quests_templateObject28 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject29 || (quests_templateObject29 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject30 || (quests_templateObject30 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(quests_templateObject31 || (quests_templateObject31 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(quests_templateObject32 || (quests_templateObject32 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(quests_templateObject33 || (quests_templateObject33 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(quests_templateObject34 || (quests_templateObject34 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject35 || (quests_templateObject35 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(quests_templateObject36 || (quests_templateObject36 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(quests_templateObject37 || (quests_templateObject37 = quests_taggedTemplateLiteral(["Retrospecs"])))], [(0,dist.$slot)(quests_templateObject38 || (quests_templateObject38 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject39 || (quests_templateObject39 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
}), _defineProperty(_questOutfits, Quest.Leveling, function () {
  var mpSavings = (0,external_kolmafia_.numericModifier)((0,dist.$item)(quests_templateObject40 || (quests_templateObject40 = quests_taggedTemplateLiteral(["pantogram pants"]))), "mana cost") !== 0;
  var outfit = new Map([[(0,dist.$slot)(quests_templateObject41 || (quests_templateObject41 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject42 || (quests_templateObject42 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject43 || (quests_templateObject43 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(quests_templateObject44 || (quests_templateObject44 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(quests_templateObject45 || (quests_templateObject45 = quests_taggedTemplateLiteral(["pants"]))), mpSavings ? (0,dist.$item)(quests_templateObject46 || (quests_templateObject46 = quests_taggedTemplateLiteral(["pantogram pants"]))) : (0,dist.$item)(quests_templateObject47 || (quests_templateObject47 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(quests_templateObject48 || (quests_templateObject48 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject49 || (quests_templateObject49 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(quests_templateObject50 || (quests_templateObject50 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.have)((0,dist.$item)(quests_templateObject51 || (quests_templateObject51 = quests_taggedTemplateLiteral(["battle broom"])))) ? (0,dist.$item)(quests_templateObject52 || (quests_templateObject52 = quests_taggedTemplateLiteral(["battle broom"]))) : (0,dist.$item)(quests_templateObject53 || (quests_templateObject53 = quests_taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(quests_templateObject54 || (quests_templateObject54 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject55 || (quests_templateObject55 = quests_taggedTemplateLiteral(["Beach Comb"])))]]);
  if ((0,dist.have)((0,dist.$item)(quests_templateObject56 || (quests_templateObject56 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))))) outfit.set((0,dist.$slot)(quests_templateObject57 || (quests_templateObject57 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(quests_templateObject58 || (quests_templateObject58 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))));
  return outfit;
}), _defineProperty(_questOutfits, Quest.Sprinkles, function () {
  var outfit = new Map([[(0,dist.$slot)(quests_templateObject59 || (quests_templateObject59 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject60 || (quests_templateObject60 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject61 || (quests_templateObject61 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.have)((0,dist.$item)(quests_templateObject62 || (quests_templateObject62 = quests_taggedTemplateLiteral(["rope"])))) ? (0,dist.$item)(quests_templateObject63 || (quests_templateObject63 = quests_taggedTemplateLiteral(["rope"]))) : (0,dist.$item)(quests_templateObject64 || (quests_templateObject64 = quests_taggedTemplateLiteral(["familiar scrapbook"])))], [(0,dist.$slot)(quests_templateObject65 || (quests_templateObject65 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject66 || (quests_templateObject66 = quests_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))], [(0,dist.$slot)(quests_templateObject67 || (quests_templateObject67 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(quests_templateObject68 || (quests_templateObject68 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(quests_templateObject69 || (quests_templateObject69 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject70 || (quests_templateObject70 = quests_taggedTemplateLiteral(["Beach Comb"])))]]);
  if ((0,dist.have)((0,dist.$item)(quests_templateObject71 || (quests_templateObject71 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))))) outfit.set((0,dist.$slot)(quests_templateObject72 || (quests_templateObject72 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject73 || (_templateObject73 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))));
  return outfit;
}), _defineProperty(_questOutfits, Quest.Muscle, function () {
  return new Map([[(0,dist.$slot)(_templateObject74 || (_templateObject74 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject75 || (_templateObject75 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject76 || (_templateObject76 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject77 || (_templateObject77 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject78 || (_templateObject78 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject79 || (_templateObject79 = quests_taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject80 || (_templateObject80 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject81 || (_templateObject81 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject82 || (_templateObject82 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject83 || (_templateObject83 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]);
}), _defineProperty(_questOutfits, Quest.Moxie, function () {
  return new Map([[(0,dist.$slot)(_templateObject84 || (_templateObject84 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject85 || (_templateObject85 = quests_taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject86 || (_templateObject86 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject87 || (_templateObject87 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject88 || (_templateObject88 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject89 || (_templateObject89 = quests_taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject90 || (_templateObject90 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject91 || (_templateObject91 = quests_taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject92 || (_templateObject92 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject93 || (_templateObject93 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]);
}), _defineProperty(_questOutfits, Quest.HP, function () {
  return new Map([[(0,dist.$slot)(_templateObject94 || (_templateObject94 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject95 || (_templateObject95 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject96 || (_templateObject96 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject97 || (_templateObject97 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject98 || (_templateObject98 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject99 || (_templateObject99 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject100 || (_templateObject100 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject101 || (_templateObject101 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]);
}), _defineProperty(_questOutfits, Quest.DeepDark, function () {
  var outfit = new Map([[(0,dist.$slot)(_templateObject102 || (_templateObject102 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject103 || (_templateObject103 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject104 || (_templateObject104 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject105 || (_templateObject105 = quests_taggedTemplateLiteral(["pantogram pants"])))]]);
  if ((0,dist.have)((0,dist.$item)(_templateObject106 || (_templateObject106 = quests_taggedTemplateLiteral(["burning paper crane"]))))) outfit.set((0,dist.$slot)(_templateObject107 || (_templateObject107 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject108 || (_templateObject108 = quests_taggedTemplateLiteral(["burning paper crane"]))));
  return outfit;
}), _defineProperty(_questOutfits, Quest.SpellDamage, function () {
  return new Map([[(0,dist.$slot)(_templateObject109 || (_templateObject109 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject110 || (_templateObject110 = quests_taggedTemplateLiteral(["wrench"])))], [(0,dist.$slot)(_templateObject111 || (_templateObject111 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject112 || (_templateObject112 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(_templateObject113 || (_templateObject113 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject114 || (_templateObject114 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject115 || (_templateObject115 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject116 || (_templateObject116 = quests_taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject117 || (_templateObject117 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject118 || (_templateObject118 = quests_taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(_templateObject119 || (_templateObject119 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject120 || (_templateObject120 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
}), _defineProperty(_questOutfits, Quest.WeaponDamage, function () {
  return new Map([[(0,dist.$slot)(_templateObject121 || (_templateObject121 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject122 || (_templateObject122 = quests_taggedTemplateLiteral(["broken champagne bottle"])))], [(0,dist.$slot)(_templateObject123 || (_templateObject123 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject124 || (_templateObject124 = quests_taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject125 || (_templateObject125 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject126 || (_templateObject126 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject127 || (_templateObject127 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject128 || (_templateObject128 = quests_taggedTemplateLiteral(["Powerful Glove"])))]]);
}), _defineProperty(_questOutfits, Quest.Mysticality, function () {
  return new Map([[(0,dist.$slot)(_templateObject129 || (_templateObject129 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject130 || (_templateObject130 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject131 || (_templateObject131 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject132 || (_templateObject132 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject133 || (_templateObject133 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject134 || (_templateObject134 = quests_taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject135 || (_templateObject135 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject136 || (_templateObject136 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]);
}), _defineProperty(_questOutfits, Quest.CombatFrequency, function () {
  return new Map([[(0,dist.$slot)(_templateObject137 || (_templateObject137 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject138 || (_templateObject138 = quests_taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject139 || (_templateObject139 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject140 || (_templateObject140 = quests_taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(_templateObject141 || (_templateObject141 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject142 || (_templateObject142 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject143 || (_templateObject143 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject144 || (_templateObject144 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
}), _defineProperty(_questOutfits, Quest.HotResist, function () {
  return new Map([[(0,dist.$slot)(_templateObject145 || (_templateObject145 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject146 || (_templateObject146 = quests_taggedTemplateLiteral(["high-temperature mining mask"])))], [(0,dist.$slot)(_templateObject147 || (_templateObject147 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject148 || (_templateObject148 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject149 || (_templateObject149 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject150 || (_templateObject150 = quests_taggedTemplateLiteral(["meteorite guard"])))], [(0,dist.$slot)(_templateObject151 || (_templateObject151 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject152 || (_templateObject152 = quests_taggedTemplateLiteral(["lava-proof pants"])))], [(0,dist.$slot)(_templateObject153 || (_templateObject153 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject154 || (_templateObject154 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject155 || (_templateObject155 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject156 || (_templateObject156 = quests_taggedTemplateLiteral(["heat-resistant gloves"])))], [(0,dist.$slot)(_templateObject157 || (_templateObject157 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject158 || (_templateObject158 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
}), _defineProperty(_questOutfits, Quest.FamiliarWeight, function () {
  return new Map([[(0,dist.$slot)(_templateObject159 || (_templateObject159 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject160 || (_templateObject160 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject161 || (_templateObject161 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.have)((0,dist.$item)(_templateObject162 || (_templateObject162 = quests_taggedTemplateLiteral(["rope"])))) ? (0,dist.$item)(_templateObject163 || (_templateObject163 = quests_taggedTemplateLiteral(["rope"]))) : (0,dist.$item)(_templateObject164 || (_templateObject164 = quests_taggedTemplateLiteral(["familiar scrapbook"])))], [(0,dist.$slot)(_templateObject165 || (_templateObject165 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject166 || (_templateObject166 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject167 || (_templateObject167 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject168 || (_templateObject168 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(_templateObject169 || (_templateObject169 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject170 || (_templateObject170 = quests_taggedTemplateLiteral(["Beach Comb"])))]]);
}), _defineProperty(_questOutfits, Quest.ItemDrop, function () {
  var carrot = (0,external_kolmafia_.numericModifier)((0,dist.$item)(_templateObject171 || (_templateObject171 = quests_taggedTemplateLiteral(["latte lovers member's mug"]))), "item drop") > 0;
  return new Map([[(0,dist.$slot)(_templateObject172 || (_templateObject172 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject173 || (_templateObject173 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject174 || (_templateObject174 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject175 || (_templateObject175 = quests_taggedTemplateLiteral(["vampyric cloake"])))], [(0,dist.$slot)(_templateObject176 || (_templateObject176 = quests_taggedTemplateLiteral(["off-hand"]))), carrot ? (0,dist.$item)(_templateObject177 || (_templateObject177 = quests_taggedTemplateLiteral(["latte lovers member's mug"]))) : (0,dist.$item)(_templateObject178 || (_templateObject178 = quests_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [(0,dist.$slot)(_templateObject179 || (_templateObject179 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject180 || (_templateObject180 = quests_taggedTemplateLiteral(["Guzzlr tablet"])))], [(0,dist.$slot)(_templateObject181 || (_templateObject181 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject182 || (_templateObject182 = quests_taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(_templateObject183 || (_templateObject183 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject184 || (_templateObject184 = quests_taggedTemplateLiteral(["your cowboy boots"])))]]);
}), _defineProperty(_questOutfits, Quest.Donate, function () {
  return new Map();
}), _questOutfits); // Who needs the maximizer? It's slow!

function equipOutfit(outfit) {
  var equipment = questOutfits[outfit]();
  if (!equipment.get((0,dist.$slot)(_templateObject185 || (_templateObject185 = quests_taggedTemplateLiteral(["back"]))))) retrocape(outfit);
  equipment.forEach(function (item, slot) {
    handleCreateEquip(item);

    if ((0,dist.have)(item)) {
      (0,external_kolmafia_.equip)(slot, item);
    }
  });
}

function retrocape(quest) {
  switch (quest) {
    case Quest.Muscle:
      (0,external_kolmafia_.cliExecute)("retrocape ".concat((0,dist.$stat)(_templateObject186 || (_templateObject186 = quests_taggedTemplateLiteral(["Muscle"])))));
      return;

    case Quest.Mysticality:
      (0,external_kolmafia_.cliExecute)("retrocape ".concat((0,dist.$stat)(_templateObject187 || (_templateObject187 = quests_taggedTemplateLiteral(["Mysticality"])))));
      return;

    case Quest.Moxie:
      (0,external_kolmafia_.cliExecute)("retrocape ".concat((0,dist.$stat)(_templateObject188 || (_templateObject188 = quests_taggedTemplateLiteral(["Moxie"])))));
      return;

    case Quest.HP:
    case Quest.HotResist:
    case Quest.DeepDark:
      (0,external_kolmafia_.cliExecute)("retrocape vampire hold");
      return;

    default:
      (0,external_kolmafia_.cliExecute)("retrocape heck thrill");
      return;
  }
}

var Context;

(function (Context) {
  Context[Context["beginning"] = 0] = "beginning";
  Context[Context["leveling"] = 1] = "leveling";
  Context[Context["test"] = 2] = "test";
  Context[Context["special"] = 3] = "special";
})(Context || (Context = {}));

var sharedStats = new Map([[(0,dist.$effect)(_templateObject189 || (_templateObject189 = quests_taggedTemplateLiteral(["Feeling Excited"]))), Context.beginning], [(0,dist.$effect)(_templateObject190 || (_templateObject190 = quests_taggedTemplateLiteral(["Triple-Sized"]))), Context.beginning], [(0,dist.$effect)(_templateObject191 || (_templateObject191 = quests_taggedTemplateLiteral(["Big"]))), Context.leveling], [(0,dist.$effect)(_templateObject192 || (_templateObject192 = quests_taggedTemplateLiteral(["Favored by Lyle"]))), Context.leveling], [(0,dist.$effect)(_templateObject193 || (_templateObject193 = quests_taggedTemplateLiteral(["Starry-Eyed"]))), Context.leveling], [(0,dist.$effect)(_templateObject194 || (_templateObject194 = quests_taggedTemplateLiteral(["Total Protonic Reversal"]))), Context.leveling], [(0,dist.$effect)(_templateObject195 || (_templateObject195 = quests_taggedTemplateLiteral(["Spit Upon"]))), Context.special]]);
var sharedSpellWeaponDamage = new Map([[(0,dist.$effect)(_templateObject196 || (_templateObject196 = quests_taggedTemplateLiteral(["Grumpy and Ornery"]))), Context.leveling], [(0,dist.$effect)(_templateObject197 || (_templateObject197 = quests_taggedTemplateLiteral(["Cowrruption"]))), Context.test], [(0,dist.$effect)(_templateObject198 || (_templateObject198 = quests_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), Context.test], // Food/Booze/Spleen
[(0,dist.$effect)(_templateObject199 || (_templateObject199 = quests_taggedTemplateLiteral(["In a Lather"]))), Context.special], // Other
[(0,dist.$effect)(_templateObject200 || (_templateObject200 = quests_taggedTemplateLiteral(["Do You Crush What I Crush?"]))), Context.special], [(0,dist.$effect)(_templateObject201 || (_templateObject201 = quests_taggedTemplateLiteral(["Inner Elf"]))), Context.special], [(0,dist.$effect)(_templateObject202 || (_templateObject202 = quests_taggedTemplateLiteral(["Meteor Showered"]))), Context.special], [(0,dist.$effect)(_templateObject203 || (_templateObject203 = quests_taggedTemplateLiteral(["Spit Upon"]))), Context.special]]);
var questEffects = (_questEffects = {}, _defineProperty(_questEffects, Quest.Beginning, new Map([[(0,dist.$effect)(_templateObject204 || (_templateObject204 = quests_taggedTemplateLiteral(["Inscrutable Gaze"]))), Context.beginning], [(0,dist.$effect)(_templateObject205 || (_templateObject205 = quests_taggedTemplateLiteral(["Spirit of Peppermint"]))), Context.beginning], [(0,dist.$effect)(_templateObject206 || (_templateObject206 = quests_taggedTemplateLiteral(["meat.enh"]))), Context.beginning], [(0,dist.$effect)(_templateObject207 || (_templateObject207 = quests_taggedTemplateLiteral(["init.enh"]))), Context.beginning]])), _defineProperty(_questEffects, Quest.CoilWire, new Map()), _defineProperty(_questEffects, Quest.Leveling, new Map([[(0,dist.$effect)(_templateObject208 || (_templateObject208 = quests_taggedTemplateLiteral(["Blood Bubble"]))), Context.leveling], [(0,dist.$effect)(_templateObject209 || (_templateObject209 = quests_taggedTemplateLiteral(["Carol of the Thrills"]))), Context.leveling], [(0,dist.$effect)(_templateObject210 || (_templateObject210 = quests_taggedTemplateLiteral(["Ghostly Shell"]))), Context.leveling], [(0,dist.$effect)(_templateObject211 || (_templateObject211 = quests_taggedTemplateLiteral(["Inscrutable Gaze"]))), Context.leveling], //[$effect`Purity of Spirit`, EffectContext.leveling],
[(0,dist.$effect)(_templateObject212 || (_templateObject212 = quests_taggedTemplateLiteral(["Ruthlessly Efficient"]))), Context.leveling], [(0,dist.$effect)(_templateObject213 || (_templateObject213 = quests_taggedTemplateLiteral(["Shield of the Pastalord"]))), Context.leveling], [(0,dist.$effect)(_templateObject214 || (_templateObject214 = quests_taggedTemplateLiteral(["Springy Fusilli"]))), Context.leveling], // Beach comb
[(0,dist.$effect)(_templateObject215 || (_templateObject215 = quests_taggedTemplateLiteral(["Cold as Nice"]))), Context.leveling], [(0,dist.$effect)(_templateObject216 || (_templateObject216 = quests_taggedTemplateLiteral(["A Brush with Grossness"]))), Context.leveling], [(0,dist.$effect)(_templateObject217 || (_templateObject217 = quests_taggedTemplateLiteral(["Does It Have a Skull in There??"]))), Context.leveling], [(0,dist.$effect)(_templateObject218 || (_templateObject218 = quests_taggedTemplateLiteral(["Oiled, Slick"]))), Context.leveling], [(0,dist.$effect)(_templateObject219 || (_templateObject219 = quests_taggedTemplateLiteral(["Resting Beach Face"]))), Context.leveling], [(0,dist.$effect)(_templateObject220 || (_templateObject220 = quests_taggedTemplateLiteral(["You Learned Something Maybe!"]))), Context.leveling], // Class buffs
[(0,dist.$effect)(_templateObject221 || (_templateObject221 = quests_taggedTemplateLiteral(["Polka of Plenty"]))), Context.leveling], [(0,dist.$effect)(_templateObject222 || (_templateObject222 = quests_taggedTemplateLiteral(["Ode to Booze"]))), Context.leveling], [(0,dist.$effect)(_templateObject223 || (_templateObject223 = quests_taggedTemplateLiteral(["Astral Shell"]))), Context.leveling], [(0,dist.$effect)(_templateObject224 || (_templateObject224 = quests_taggedTemplateLiteral(["Elemental Saucesphere"]))), Context.leveling] //[$effect`Scarysauce`, EffectContext.leveling],
])), _defineProperty(_questEffects, Quest.Sprinkles, new Map()), _defineProperty(_questEffects, Quest.Muscle, new Map([].concat(quests_toConsumableArray(sharedStats), [[(0,dist.$effect)(_templateObject225 || (_templateObject225 = quests_taggedTemplateLiteral(["Lack of Body-Building"]))), Context.leveling], [(0,dist.$effect)(_templateObject226 || (_templateObject226 = quests_taggedTemplateLiteral(["Expert Oiliness"]))), Context.test], [(0,dist.$effect)(_templateObject227 || (_templateObject227 = quests_taggedTemplateLiteral(["Phorcefullness"]))), Context.test], [(0,dist.$effect)(_templateObject228 || (_templateObject228 = quests_taggedTemplateLiteral(["Quiet Determination"]))), Context.test], [(0,dist.$effect)(_templateObject229 || (_templateObject229 = quests_taggedTemplateLiteral(["Rage of the Reindeer"]))), Context.test], [(0,dist.$effect)(_templateObject230 || (_templateObject230 = quests_taggedTemplateLiteral(["Giant Growth"]))), Context.special]]))), _defineProperty(_questEffects, Quest.Moxie, new Map([].concat(quests_toConsumableArray(sharedStats), [[(0,dist.$effect)(_templateObject231 || (_templateObject231 = quests_taggedTemplateLiteral(["Blessing of the Bird"]))), Context.leveling], [(0,dist.$effect)(_templateObject232 || (_templateObject232 = quests_taggedTemplateLiteral(["Pomp & Circumsands"]))), Context.leveling], [(0,dist.$effect)(_templateObject233 || (_templateObject233 = quests_taggedTemplateLiteral(["Disco Fever"]))), Context.test], [(0,dist.$effect)(_templateObject234 || (_templateObject234 = quests_taggedTemplateLiteral(["Expert Oiliness"]))), Context.test], [(0,dist.$effect)(_templateObject235 || (_templateObject235 = quests_taggedTemplateLiteral(["Quiet Desperation"]))), Context.test], // Wish
[(0,dist.$effect)(_templateObject236 || (_templateObject236 = quests_taggedTemplateLiteral(["Sparkly!"]))), Context.special]]))), _defineProperty(_questEffects, Quest.HP, new Map([[(0,dist.$effect)(_templateObject237 || (_templateObject237 = quests_taggedTemplateLiteral(["Song of Starch"]))), Context.test]])), _defineProperty(_questEffects, Quest.DeepDark, new Map()), _defineProperty(_questEffects, Quest.SpellDamage, new Map([].concat(quests_toConsumableArray(sharedSpellWeaponDamage), [[(0,dist.$effect)(_templateObject238 || (_templateObject238 = quests_taggedTemplateLiteral(["Spirit of Peppermint"]))), Context.beginning], [(0,dist.$effect)(_templateObject239 || (_templateObject239 = quests_taggedTemplateLiteral(["AAA-Charged"]))), Context.leveling], [(0,dist.$effect)(_templateObject240 || (_templateObject240 = quests_taggedTemplateLiteral(["Carol of the Hells"]))), Context.leveling], [(0,dist.$effect)(_templateObject241 || (_templateObject241 = quests_taggedTemplateLiteral(["Full Bottle in front of Me"]))), Context.leveling], [(0,dist.$effect)(_templateObject242 || (_templateObject242 = quests_taggedTemplateLiteral(["Mental A-cue-ity"]))), Context.leveling], [(0,dist.$effect)(_templateObject243 || (_templateObject243 = quests_taggedTemplateLiteral(["Pisces in the Skyces"]))), Context.leveling], [(0,dist.$effect)(_templateObject244 || (_templateObject244 = quests_taggedTemplateLiteral(["Sigils of Yeg"]))), Context.leveling], [(0,dist.$effect)(_templateObject245 || (_templateObject245 = quests_taggedTemplateLiteral(["Warlock, Warstock, and Warbarrel"]))), Context.leveling], [(0,dist.$effect)(_templateObject246 || (_templateObject246 = quests_taggedTemplateLiteral(["We're All Made of Starfish"]))), Context.leveling], [(0,dist.$effect)(_templateObject247 || (_templateObject247 = quests_taggedTemplateLiteral(["Arched Eyebrow of the Archmage"]))), Context.test], [(0,dist.$effect)(_templateObject248 || (_templateObject248 = quests_taggedTemplateLiteral(["Song of Sauce"]))), Context.test], [(0,dist.$effect)(_templateObject249 || (_templateObject249 = quests_taggedTemplateLiteral(["The Magic of LOV"]))), Context.test], // Food/Booze/Spleen
[(0,dist.$effect)(_templateObject250 || (_templateObject250 = quests_taggedTemplateLiteral(["Filled with Magic"]))), Context.special], [(0,dist.$effect)(_templateObject251 || (_templateObject251 = quests_taggedTemplateLiteral(["Drunk With Power"]))), Context.special], // Wish
[(0,dist.$effect)(_templateObject252 || (_templateObject252 = quests_taggedTemplateLiteral(["Sparkly!"]))), Context.special], // Other
[(0,dist.$effect)(_templateObject253 || (_templateObject253 = quests_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"]))), Context.special], [(0,dist.$effect)(_templateObject254 || (_templateObject254 = quests_taggedTemplateLiteral(["Nanobrainy"]))), Context.special], [(0,dist.$effect)(_templateObject255 || (_templateObject255 = quests_taggedTemplateLiteral(["Toxic Vengeance"]))), Context.special]]))), _defineProperty(_questEffects, Quest.WeaponDamage, new Map([].concat(quests_toConsumableArray(sharedSpellWeaponDamage), [[(0,dist.$effect)(_templateObject256 || (_templateObject256 = quests_taggedTemplateLiteral(["Billiards Belligerence"]))), Context.leveling], [(0,dist.$effect)(_templateObject257 || (_templateObject257 = quests_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), Context.leveling], [(0,dist.$effect)(_templateObject258 || (_templateObject258 = quests_taggedTemplateLiteral(["Carol of the Bulls"]))), Context.leveling], [(0,dist.$effect)(_templateObject259 || (_templateObject259 = quests_taggedTemplateLiteral(["Frenzied, Bloody"]))), Context.leveling], [(0,dist.$effect)(_templateObject260 || (_templateObject260 = quests_taggedTemplateLiteral(["Lack of Body-Building"]))), Context.leveling], [(0,dist.$effect)(_templateObject261 || (_templateObject261 = quests_taggedTemplateLiteral(["Bow-Legged Swagger"]))), Context.test], [(0,dist.$effect)(_templateObject262 || (_templateObject262 = quests_taggedTemplateLiteral(["Rage of the Reindeer"]))), Context.test], [(0,dist.$effect)(_templateObject263 || (_templateObject263 = quests_taggedTemplateLiteral(["Scowl of the Auk"]))), Context.test], [(0,dist.$effect)(_templateObject264 || (_templateObject264 = quests_taggedTemplateLiteral(["Song of the North"]))), Context.test], [(0,dist.$effect)(_templateObject265 || (_templateObject265 = quests_taggedTemplateLiteral(["Tenacity of the Snapper"]))), Context.test], [(0,dist.$effect)(_templateObject266 || (_templateObject266 = quests_taggedTemplateLiteral(["The Power of LOV"]))), Context.test]]))), _defineProperty(_questEffects, Quest.Mysticality, new Map([].concat(quests_toConsumableArray(sharedStats), [[(0,dist.$effect)(_templateObject267 || (_templateObject267 = quests_taggedTemplateLiteral(["Uncucumbered"]))), Context.beginning], [(0,dist.$effect)(_templateObject268 || (_templateObject268 = quests_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), Context.leveling], [(0,dist.$effect)(_templateObject269 || (_templateObject269 = quests_taggedTemplateLiteral(["Mystically Oiled"]))), Context.leveling], [(0,dist.$effect)(_templateObject270 || (_templateObject270 = quests_taggedTemplateLiteral(["We're All Made of Starfish"]))), Context.leveling], [(0,dist.$effect)(_templateObject271 || (_templateObject271 = quests_taggedTemplateLiteral(["Quiet Judgement"]))), Context.test], // Wish
[(0,dist.$effect)(_templateObject272 || (_templateObject272 = quests_taggedTemplateLiteral(["Witch Breaded"]))), Context.special], // Other
[(0,dist.$effect)(_templateObject273 || (_templateObject273 = quests_taggedTemplateLiteral(["Nanobrainy"]))), Context.special]]))), _defineProperty(_questEffects, Quest.CombatFrequency, new Map([[(0,dist.$effect)(_templateObject274 || (_templateObject274 = quests_taggedTemplateLiteral(["Become Superficially interested"]))), Context.test], [(0,dist.$effect)(_templateObject275 || (_templateObject275 = quests_taggedTemplateLiteral(["Feeling Lonely"]))), Context.test], [(0,dist.$effect)(_templateObject276 || (_templateObject276 = quests_taggedTemplateLiteral(["Gummed Shoes"]))), Context.test], [(0,dist.$effect)(_templateObject277 || (_templateObject277 = quests_taggedTemplateLiteral(["Invisible Avatar"]))), Context.test], [(0,dist.$effect)(_templateObject278 || (_templateObject278 = quests_taggedTemplateLiteral(["Silent Running"]))), Context.test], [(0,dist.$effect)(_templateObject279 || (_templateObject279 = quests_taggedTemplateLiteral(["Smooth Movements"]))), Context.test], [(0,dist.$effect)(_templateObject280 || (_templateObject280 = quests_taggedTemplateLiteral(["The Sonata of Sneakiness"]))), Context.test], [(0,dist.$effect)(_templateObject281 || (_templateObject281 = quests_taggedTemplateLiteral(["Throwing Some Shade"]))), Context.test], [(0,dist.$effect)(_templateObject282 || (_templateObject282 = quests_taggedTemplateLiteral(["Silence of the God Lobster"]))), Context.special]])), _defineProperty(_questEffects, Quest.HotResist, new Map([[(0,dist.$effect)(_templateObject283 || (_templateObject283 = quests_taggedTemplateLiteral(["Feeling Peaceful"]))), Context.beginning], [(0,dist.$effect)(_templateObject284 || (_templateObject284 = quests_taggedTemplateLiteral(["Astral Shell"]))), Context.leveling], [(0,dist.$effect)(_templateObject285 || (_templateObject285 = quests_taggedTemplateLiteral(["Elemental Saucesphere"]))), Context.leveling], [(0,dist.$effect)(_templateObject286 || (_templateObject286 = quests_taggedTemplateLiteral(["Hot-Headed"]))), Context.leveling], [(0,dist.$effect)(_templateObject287 || (_templateObject287 = quests_taggedTemplateLiteral(["Rainbow Vaccine"]))), Context.leveling], [(0,dist.$effect)(_templateObject288 || (_templateObject288 = quests_taggedTemplateLiteral(["Amazing"]))), Context.test], // in case we want Robin's egg
//[$effect`Egged On`, Context.special],
[(0,dist.$effect)(_templateObject289 || (_templateObject289 = quests_taggedTemplateLiteral(["Misty Form"]))), Context.special]])), _defineProperty(_questEffects, Quest.FamiliarWeight, new Map([[(0,dist.$effect)(_templateObject290 || (_templateObject290 = quests_taggedTemplateLiteral(["Loyal Tea"]))), Context.leveling], [(0,dist.$effect)(_templateObject291 || (_templateObject291 = quests_taggedTemplateLiteral(["A Girl Named Sue"]))), Context.leveling], [(0,dist.$effect)(_templateObject292 || (_templateObject292 = quests_taggedTemplateLiteral(["Billiards Belligerence"]))), Context.leveling], [(0,dist.$effect)(_templateObject293 || (_templateObject293 = quests_taggedTemplateLiteral(["Blood Bond"]))), Context.leveling], [(0,dist.$effect)(_templateObject294 || (_templateObject294 = quests_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), Context.leveling], [(0,dist.$effect)(_templateObject295 || (_templateObject295 = quests_taggedTemplateLiteral(["Empathy"]))), Context.leveling], [(0,dist.$effect)(_templateObject296 || (_templateObject296 = quests_taggedTemplateLiteral(["Fidoxene"]))), Context.leveling], [(0,dist.$effect)(_templateObject297 || (_templateObject297 = quests_taggedTemplateLiteral(["Leash of Linguini"]))), Context.leveling], [(0,dist.$effect)(_templateObject298 || (_templateObject298 = quests_taggedTemplateLiteral(["Puzzle Champ"]))), Context.leveling], //[$effect`Man's Worst Enemy`, Context.test],
[(0,dist.$effect)(_templateObject299 || (_templateObject299 = quests_taggedTemplateLiteral(["Over-Familiar With Dactyls"]))), Context.test], [(0,dist.$effect)(_templateObject300 || (_templateObject300 = quests_taggedTemplateLiteral(["Robot Friends"]))), Context.test], [(0,dist.$effect)(_templateObject301 || (_templateObject301 = quests_taggedTemplateLiteral(["Whole Latte Love"]))), Context.test], // Food/Booze/Spleen
[(0,dist.$effect)(_templateObject302 || (_templateObject302 = quests_taggedTemplateLiteral(["[1701]Hip to the Jive"]))), Context.special], [(0,dist.$effect)(_templateObject303 || (_templateObject303 = quests_taggedTemplateLiteral(["Joy"]))), Context.special], [(0,dist.$effect)(_templateObject304 || (_templateObject304 = quests_taggedTemplateLiteral(["Smart Drunk"]))), Context.special], // Librams
//[$effect`Cold Hearted`, Context.special],
//[$effect`Heart of Green`, Context.special],
// Wishes
[(0,dist.$effect)(_templateObject305 || (_templateObject305 = quests_taggedTemplateLiteral(["All Is Forgiven"]))), Context.special], [(0,dist.$effect)(_templateObject306 || (_templateObject306 = quests_taggedTemplateLiteral(["Bureaucratized"]))), Context.special], [(0,dist.$effect)(_templateObject307 || (_templateObject307 = quests_taggedTemplateLiteral(["Chorale of Companionship"]))), Context.special], [(0,dist.$effect)(_templateObject308 || (_templateObject308 = quests_taggedTemplateLiteral(["Down With Chow"]))), Context.special], // Other
[(0,dist.$effect)(_templateObject309 || (_templateObject309 = quests_taggedTemplateLiteral(["Meteor Showered"]))), Context.special], [(0,dist.$effect)(_templateObject310 || (_templateObject310 = quests_taggedTemplateLiteral(["Open Heart Surgery"]))), Context.special]])), _defineProperty(_questEffects, Quest.ItemDrop, new Map([[(0,dist.$effect)(_templateObject311 || (_templateObject311 = quests_taggedTemplateLiteral(["items.enh"]))), Context.beginning], [(0,dist.$effect)(_templateObject312 || (_templateObject312 = quests_taggedTemplateLiteral(["Uncucumbered"]))), Context.beginning], [(0,dist.$effect)(_templateObject313 || (_templateObject313 = quests_taggedTemplateLiteral(["Blessing of the Bird"]))), Context.leveling], [(0,dist.$effect)(_templateObject314 || (_templateObject314 = quests_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), Context.leveling], [(0,dist.$effect)(_templateObject315 || (_templateObject315 = quests_taggedTemplateLiteral(["Ermine Eyes"]))), Context.leveling], [(0,dist.$effect)(_templateObject316 || (_templateObject316 = quests_taggedTemplateLiteral(["Hustlin'"]))), Context.leveling], [(0,dist.$effect)(_templateObject317 || (_templateObject317 = quests_taggedTemplateLiteral(["Leon's Phat Loot Lyric"]))), Context.leveling], [(0,dist.$effect)(_templateObject318 || (_templateObject318 = quests_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), Context.leveling], [(0,dist.$effect)(_templateObject319 || (_templateObject319 = quests_taggedTemplateLiteral(["Feeling Lost"]))), Context.test], [(0,dist.$effect)(_templateObject320 || (_templateObject320 = quests_taggedTemplateLiteral(["Nearly All-Natural"]))), Context.test], [(0,dist.$effect)(_templateObject321 || (_templateObject321 = quests_taggedTemplateLiteral(["Steely-Eyed Squint"]))), Context.test], [(0,dist.$effect)(_templateObject322 || (_templateObject322 = quests_taggedTemplateLiteral(["The Spirit of Taking"]))), Context.test], [(0,dist.$effect)(_templateObject323 || (_templateObject323 = quests_taggedTemplateLiteral(["Bat-Adjacent Form"]))), Context.special], [(0,dist.$effect)(_templateObject324 || (_templateObject324 = quests_taggedTemplateLiteral(["Synthesis: Collection"]))), Context.special]])), _defineProperty(_questEffects, Quest.Donate, new Map()), _questEffects);

function acquireQuestEffects(id) {
  questEffects[id].forEach(function (source, effect) {
    if (source !== Context.special) {
      acquireEffect(effect);
    } else if (!(0,dist.have)(effect)) {
      throw "Failed to obtain effect ".concat(effect);
    }
  });
}

function buffUp(progress) {
  for (var _i = 0, _Object$values = Object.values(questEffects); _i < _Object$values.length; _i++) {
    var qe = _Object$values[_i];

    var _iterator = quests_createForOfIteratorHelper(qe),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = quests_slicedToArray(_step.value, 2),
            effect = _step$value[0],
            source = _step$value[1];

        if (source <= progress) {
          acquireEffect(effect);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function buffUpBeginning() {
  buffUp(Context.beginning);
}
function buffUpLeveling() {
  // TODO: Want to swap pants to maybe spend less MP but also don't want to lose MP by swapping pants...
  buffUp(Context.leveling);
}
function haveQuest(id) {
  return (0,external_kolmafia_.containsText)((0,external_kolmafia_.visitUrl)("council.php"), "<input type=hidden name=option value=".concat(id, ">"));
}
function prepAndDoQuest(id) {
  if (id > Quest.Donate) throw "Invalid Quest ".concat(id, " (these are just for outfits)!!");

  if (haveQuest(id)) {
    // Convenient but also non-obvious here, maybe a bad design?
    acquireQuestEffects(id);
    equipOutfit(id);
    (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=1089&option=".concat(id));
    if (haveQuest(id)) throw "Couldn't complete quest ".concat(id, "?");
  }
}
;// CONCATENATED MODULE: ./src/events.ts
var events_templateObject, events_templateObject2, events_templateObject3, events_templateObject4, events_templateObject5, events_templateObject6, events_templateObject7, events_templateObject8, events_templateObject9, events_templateObject10, events_templateObject11, events_templateObject12, events_templateObject13, events_templateObject14, events_templateObject15, events_templateObject16, events_templateObject17, events_templateObject18, events_templateObject19, events_templateObject20, events_templateObject21, events_templateObject22, events_templateObject23, events_templateObject24, events_templateObject25, events_templateObject26, events_templateObject27, events_templateObject28, events_templateObject29, events_templateObject30, events_templateObject31, events_templateObject32, events_templateObject33, events_templateObject34, events_templateObject35, events_templateObject36, events_templateObject37, events_templateObject38, events_templateObject39, events_templateObject40, events_templateObject41, events_templateObject42, events_templateObject43, events_templateObject44, events_templateObject45, events_templateObject46, events_templateObject47, events_templateObject48, events_templateObject49, events_templateObject50, events_templateObject51, events_templateObject52, events_templateObject53, events_templateObject54, events_templateObject55, events_templateObject56, events_templateObject57, events_templateObject58, events_templateObject59, events_templateObject60, events_templateObject61, events_templateObject62, events_templateObject63, events_templateObject64, events_templateObject65, events_templateObject66, events_templateObject67, events_templateObject68, events_templateObject69, events_templateObject70, events_templateObject71, events_templateObject72, events_templateObject73, events_templateObject74, events_templateObject75, events_templateObject76, events_templateObject77, events_templateObject78, events_templateObject79, events_templateObject80, events_templateObject81, events_templateObject82, events_templateObject83, events_templateObject84, events_templateObject85, events_templateObject86, events_templateObject87, events_templateObject88, events_templateObject89, events_templateObject90, events_templateObject91, events_templateObject92, events_templateObject93, events_templateObject94, events_templateObject95, events_templateObject96, events_templateObject97, events_templateObject98, events_templateObject99, events_templateObject100, events_templateObject101, events_templateObject102, events_templateObject103, events_templateObject104, events_templateObject105, events_templateObject106, events_templateObject107, events_templateObject108, events_templateObject109, events_templateObject110, events_templateObject111, events_templateObject112, events_templateObject113, events_templateObject114, events_templateObject115, events_templateObject116, events_templateObject117, events_templateObject118, events_templateObject119, events_templateObject120, events_templateObject121, events_templateObject122, events_templateObject123, events_templateObject124, events_templateObject125, events_templateObject126, events_templateObject127, events_templateObject128, events_templateObject129, events_templateObject130, events_templateObject131, events_templateObject132, events_templateObject133, events_templateObject134, events_templateObject135, events_templateObject136, events_templateObject137, events_templateObject138, events_templateObject139, events_templateObject140, events_templateObject141, events_templateObject142, events_templateObject143, events_templateObject144, events_templateObject145, events_templateObject146, events_templateObject147, events_templateObject148, events_templateObject149, events_templateObject150, events_templateObject151, events_templateObject152, events_templateObject153, events_templateObject154, events_templateObject155, events_templateObject156, events_templateObject157, events_templateObject158, events_templateObject159, events_templateObject160, events_templateObject161, events_templateObject162, events_templateObject163, events_templateObject164, events_templateObject165, events_templateObject166, events_templateObject167, events_templateObject168, events_templateObject169, events_templateObject170, events_templateObject171, events_templateObject172, events_templateObject173, events_templateObject174, events_templateObject175, events_templateObject176, events_templateObject177, events_templateObject178, events_templateObject179, events_templateObject180, events_templateObject181, events_templateObject182, events_templateObject183, events_templateObject184, events_templateObject185, events_templateObject186, events_templateObject187, events_templateObject188, events_templateObject189, events_templateObject190, events_templateObject191, events_templateObject192, events_templateObject193, events_templateObject194, events_templateObject195, events_templateObject196, events_templateObject197, events_templateObject198, events_templateObject199, events_templateObject200, events_templateObject201, events_templateObject202, events_templateObject203, events_templateObject204, events_templateObject205, events_templateObject206, events_templateObject207, events_templateObject208, events_templateObject209, events_templateObject210, events_templateObject211, events_templateObject212, events_templateObject213, events_templateObject214, events_templateObject215, events_templateObject216, events_templateObject217, events_templateObject218, events_templateObject219, events_templateObject220, events_templateObject221, events_templateObject222, events_templateObject223, events_templateObject224, events_templateObject225, events_templateObject226, events_templateObject227;

function events_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var FamiliarFlag; // Locations

(function (FamiliarFlag) {
  FamiliarFlag[FamiliarFlag["Default"] = 0] = "Default";
  FamiliarFlag[FamiliarFlag["NoAttack"] = 1] = "NoAttack";
  FamiliarFlag[FamiliarFlag["ToxicTeacups"] = 2] = "ToxicTeacups";
})(FamiliarFlag || (FamiliarFlag = {}));

var civicCenter = (0,dist.$location)(events_templateObject || (events_templateObject = events_taggedTemplateLiteral(["Gingerbread Civic Center"])));
var deepMachineTunnels = (0,dist.$location)(events_templateObject2 || (events_templateObject2 = events_taggedTemplateLiteral(["The Deep Machine Tunnels"])));
var direWarren = (0,dist.$location)(events_templateObject3 || (events_templateObject3 = events_taggedTemplateLiteral(["The Dire Warren"])));
var haikuDungeon = (0,dist.$location)(events_templateObject4 || (events_templateObject4 = events_taggedTemplateLiteral(["The Haiku Dungeon"])));

var _lavaCo = (0,dist.$location)(events_templateObject5 || (events_templateObject5 = events_taggedTemplateLiteral(["LavaCo Lamp Factory"])));

var loveTunnel = (0,dist.$location)(events_templateObject6 || (events_templateObject6 = events_taggedTemplateLiteral(["The Tunnel of L.O.V.E."])));
var neverendingParty = (0,dist.$location)(events_templateObject7 || (events_templateObject7 = events_taggedTemplateLiteral(["The Neverending Party"])));
var noobCave = (0,dist.$location)(events_templateObject8 || (events_templateObject8 = events_taggedTemplateLiteral(["Noob Cave"])));
var skeletonStore = (0,dist.$location)(events_templateObject9 || (events_templateObject9 = events_taggedTemplateLiteral(["The Skeleton Store"])));
var slimeTube = (0,dist.$location)(events_templateObject10 || (events_templateObject10 = events_taggedTemplateLiteral(["The Slime Tube"])));
var snojo = (0,dist.$location)(events_templateObject11 || (events_templateObject11 = events_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"])));
var statelyPleasureDome = (0,dist.$location)(events_templateObject12 || (events_templateObject12 = events_taggedTemplateLiteral(["The Stately Pleasure Dome"])));
var toxicTeacups = (0,dist.$location)(events_templateObject13 || (events_templateObject13 = events_taggedTemplateLiteral(["The Toxic Teacups"])));
var upscaleDistrict = (0,dist.$location)(events_templateObject14 || (events_templateObject14 = events_taggedTemplateLiteral(["Gingerbread Upscale Retail District"])));

var _velvetGoldMine = (0,dist.$location)(events_templateObject15 || (events_templateObject15 = events_taggedTemplateLiteral(["The Velvet / Gold Mine"]))); // Structure events in the form of: [ if(check()<max) run(); ]
// Events are prioritized in order from top to bottom


var events = {
  protonicGhost: {
    max: 1,
    current: function current() {
      return (0,dist.get)("ghostLocation") === null || (0,dist.get)("lastCopyableMonster") !== (0,dist.$monster)(events_templateObject16 || (events_templateObject16 = events_taggedTemplateLiteral(["pterodactyl"]))) ? this.max : 0;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject17 || (events_templateObject17 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject18 || (events_templateObject18 = events_taggedTemplateLiteral(["protonic accelerator pack"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      var ghostLoc2 = (0,dist.get)("ghostLocation");
      adventure(ghostLoc2, MacroList.FreeFight);
      checkAvailable((0,dist.$item)(events_templateObject19 || (events_templateObject19 = events_taggedTemplateLiteral(["Friendliness Beverage"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject20 || (events_templateObject20 = events_taggedTemplateLiteral(["Friendliness Beverage"]))));
    }
  },
  innerElf: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.myLevel)() < 13 || (0,dist.have)((0,dist.$effect)(events_templateObject21 || (events_templateObject21 = events_taggedTemplateLiteral(["Inner Elf"])))) ? this.max : -1;
    },
    run: function run() {
      whitelist(FAX_AND_SLIME_CLAN);
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject22 || (events_templateObject22 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(slimeTube, MacroList.MotherSlime);
      whitelist(MAIN_CLAN);
      if (!(0,dist.have)((0,dist.$effect)(events_templateObject23 || (events_templateObject23 = events_taggedTemplateLiteral(["Inner Elf"]))))) throw "Error: somehow failed to obtain Inner Elf?";
    }
  },
  ungulith: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject24 || (events_templateObject24 = events_taggedTemplateLiteral(["corrupted marrow"])))) - 1;
    },
    run: function run() {
      if (!(0,dist.have)((0,dist.$item)(events_templateObject25 || (events_templateObject25 = events_taggedTemplateLiteral(["photocopied monster"]))))) {
        whitelist(FAX_AND_SLIME_CLAN);
        (0,external_kolmafia_.cliExecute)("fax receive");
        whitelist(MAIN_CLAN);
      }

      var copyID = (0,dist.$item)(events_templateObject26 || (events_templateObject26 = events_taggedTemplateLiteral(["photocopied monster"]))).descid;
      var faxMon = (0,dist.$monster)(events_templateObject27 || (events_templateObject27 = events_taggedTemplateLiteral(["Ungulith"])));

      if (!(0,external_kolmafia_.containsText)((0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat(copyID)), "".concat(faxMon))) {
        throw "Failed to retrieve fax of ".concat(faxMon);
      }

      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject28 || (events_templateObject28 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject29 || (events_templateObject29 = events_taggedTemplateLiteral(["tiny black hole"]))));
      checkEffect((0,dist.$effect)(events_templateObject30 || (events_templateObject30 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject31 || (events_templateObject31 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      MacroList.PickpocketFreeRun.setAutoAttack();
      (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&whichitem=").concat((0,external_kolmafia_.toInt)((0,dist.$item)(events_templateObject32 || (events_templateObject32 = events_taggedTemplateLiteral(["photocopied monster"]))))));
      checkAvailable((0,dist.$item)(events_templateObject33 || (events_templateObject33 = events_taggedTemplateLiteral(["corrupted marrow"]))));
    }
  },
  latteCarrot: {
    max: 0,
    current: function current() {
      return (0,dist.get)("latteUnlocks").includes("carrot") ? this.max : -1;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject34 || (events_templateObject34 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject35 || (events_templateObject35 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      checkEffect((0,dist.$effect)(events_templateObject36 || (events_templateObject36 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject37 || (events_templateObject37 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.PickpocketFreeRun);
    }
  },
  chateauPainting: {
    max: 0,
    current: function current() {
      return (0,dist.get)("_chateauMonsterFought") ? this.max : -1;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject38 || (events_templateObject38 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject39 || (events_templateObject39 = events_taggedTemplateLiteral(["protonic accelerator pack"]))));
      var phylum = dist.ChateauMantegna.paintingMonster().phylum;
      var carols = (0,dist.$phyla)(events_templateObject40 || (events_templateObject40 = events_taggedTemplateLiteral(["beast, bug, constellation, elf, goblin, humanoid"])));

      if (carols.includes(phylum)) {
        (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject41 || (events_templateObject41 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject42 || (events_templateObject42 = events_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
        (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject43 || (events_templateObject43 = events_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
        MacroList.Banish.setAutoAttack();
      } else {
        checkEffect((0,dist.$effect)(events_templateObject44 || (events_templateObject44 = events_taggedTemplateLiteral(["Ode to Booze"]))));
        (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject45 || (events_templateObject45 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
        MacroList.PickpocketFreeRun.setAutoAttack();
      }

      dist.ChateauMantegna.fightPainting();

      if (!(0,dist.get)("_chateauMonsterFought")) {
        throw "Error: Chateau painted not properly marked as fought.";
      }
    }
  },
  ghostCarol: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.haveEffect)((0,dist.$effect)(events_templateObject46 || (events_templateObject46 = events_taggedTemplateLiteral(["Do You Crush What I Crush?"])))) - 1;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject47 || (events_templateObject47 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject48 || (events_templateObject48 = events_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject49 || (events_templateObject49 = events_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
      adventure(direWarren, MacroList.Banish);
      checkEffect((0,dist.$effect)(events_templateObject50 || (events_templateObject50 = events_taggedTemplateLiteral(["Do You Crush What I Crush?"]))));
    }
  },
  digitize: {
    max: 1,
    current: function current() {
      return (0,dist.get)("_sourceTerminalDigitizeMonsterCount");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject51 || (events_templateObject51 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject52 || (events_templateObject52 = events_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  ninjaCostume: {
    max: 1,
    current: function current() {
      return (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject53 || (events_templateObject53 = events_taggedTemplateLiteral(["li'l ninja costume"]))));
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject54 || (events_templateObject54 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject55 || (events_templateObject55 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      mapMonster(haikuDungeon, (0,dist.$monster)(events_templateObject56 || (events_templateObject56 = events_taggedTemplateLiteral(["amateur ninja"]))), MacroList.FreeFight);
      checkAvailable((0,dist.$item)(events_templateObject57 || (events_templateObject57 = events_taggedTemplateLiteral(["li'l ninja costume"]))));
    }
  },
  loveTunnel: {
    max: 3,
    current: function current() {
      return (0,dist.get)("_loveTunnelUsed") ? this.max : 0;
    },
    run: function run() {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if ((0,external_kolmafia_.handlingChoice)()) throw "Stuck in LOV?";
      checkEffect((0,dist.$effect)(events_templateObject58 || (events_templateObject58 = events_taggedTemplateLiteral(["Open Heart Surgery"]))));
      checkAvailable((0,dist.$item)(events_templateObject59 || (events_templateObject59 = events_taggedTemplateLiteral(["LOV Elixir #3"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject60 || (events_templateObject60 = events_taggedTemplateLiteral(["LOV Elixir #3"]))));
      checkAvailable((0,dist.$item)(events_templateObject61 || (events_templateObject61 = events_taggedTemplateLiteral(["LOV Elixir #6"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject62 || (events_templateObject62 = events_taggedTemplateLiteral(["LOV Elixir #6"]))));
      checkAvailable((0,dist.$item)(events_templateObject63 || (events_templateObject63 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject64 || (events_templateObject64 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject65 || (events_templateObject65 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
    }
  },
  tenPercentBonus: {
    max: 0,
    current: function current() {
      return 0 - (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject66 || (events_templateObject66 = events_taggedTemplateLiteral(["a ten-percent bonus"]))));
    },
    run: function run() {
      checkEffect((0,dist.$effect)(events_templateObject67 || (events_templateObject67 = events_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))));
      checkEffect((0,dist.$effect)(events_templateObject68 || (events_templateObject68 = events_taggedTemplateLiteral(["Inscrutable Gaze"]))));
      checkEffect((0,dist.$effect)(events_templateObject69 || (events_templateObject69 = events_taggedTemplateLiteral(["Synthesis: Learning"]))));

      if (!(0,external_kolmafia_.haveEquipped)((0,dist.$item)(events_templateObject70 || (events_templateObject70 = events_taggedTemplateLiteral(["LOV Epaulettes"]))))) {
        throw "Error: ".concat((0,dist.$item)(events_templateObject71 || (events_templateObject71 = events_taggedTemplateLiteral(["LOV Epaulettes"]))), " not equipped");
      }

      var prevOffhand = (0,external_kolmafia_.equippedItem)((0,dist.$slot)(events_templateObject72 || (events_templateObject72 = events_taggedTemplateLiteral(["off-hand"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject73 || (events_templateObject73 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject74 || (events_templateObject74 = events_taggedTemplateLiteral(["familiar scrapbook"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject75 || (events_templateObject75 = events_taggedTemplateLiteral(["a ten-percent bonus"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject76 || (events_templateObject76 = events_taggedTemplateLiteral(["off-hand"]))), prevOffhand);
    }
  },
  upscaleDistrictKill: {
    max: 1,
    current: function current() {
      return (0,dist.have)((0,dist.$effect)(events_templateObject77 || (events_templateObject77 = events_taggedTemplateLiteral(["Whole Latte Love"])))) ? this.max : (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject78 || (events_templateObject78 = events_taggedTemplateLiteral(["sprinkles"])))) - 54;
    },
    run: function run() {
      equipOutfit(Quest.Sprinkles);
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject79 || (events_templateObject79 = events_taggedTemplateLiteral(["Chocolate Lab"]))));
      adventure(upscaleDistrict, MacroList.Sprinkles);
      equipOutfit(Quest.Leveling);
      checkAvailable((0,dist.$item)(events_templateObject80 || (events_templateObject80 = events_taggedTemplateLiteral(["sprinkles"]))), 55);
    }
  },
  upscaleDistrictRunaway: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.haveEffect)((0,dist.$effect)(events_templateObject81 || (events_templateObject81 = events_taggedTemplateLiteral(["Whole Latte Love"])))) - 1;
    },
    run: function run() {
      checkEffect((0,dist.$effect)(events_templateObject82 || (events_templateObject82 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject83 || (events_templateObject83 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(upscaleDistrict, MacroList.PickpocketFreeRun);

      if ((0,dist.have)((0,dist.$item)(events_templateObject84 || (events_templateObject84 = events_taggedTemplateLiteral(["gingerbread spice latte"]))))) {
        (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject85 || (events_templateObject85 = events_taggedTemplateLiteral(["gingerbread spice latte"]))));
        checkAvailable((0,dist.$item)(events_templateObject86 || (events_templateObject86 = events_taggedTemplateLiteral(["sprinkles"]))), 5);
      } else if ((0,dist.get)("_gingerbreadCityTurns") > 5) {
        throw "Failed to obtain ".concat((0,dist.$item)(events_templateObject87 || (events_templateObject87 = events_taggedTemplateLiteral(["gingerbread spice latte"]))));
      }
    }
  },
  civicCenterRunaway: {
    max: 0,
    current: function current() {
      return (0,dist.get)("_gingerbreadCityTurns") - 15;
    },
    run: function run() {
      checkEffect((0,dist.$effect)(events_templateObject88 || (events_templateObject88 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject89 || (events_templateObject89 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(civicCenter, MacroList.PickpocketFreeRun);

      if (this.current() === this.max) {
        if (!(0,dist.have)((0,dist.$item)(events_templateObject90 || (events_templateObject90 = events_taggedTemplateLiteral(["gingerbread cigarette"]))), 5)) {
          throw "Failed to obtain ".concat((0,dist.$item)(events_templateObject91 || (events_templateObject91 = events_taggedTemplateLiteral(["gingerbread cigarette"]))));
        }
      }
    }
  },
  witchessRook: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.haveEffect)((0,external_kolmafia_.toEffect)("Sweetbreads Flambé")) - 1;
    },
    run: function run() {
      acquireEffect((0,dist.$effect)(events_templateObject92 || (events_templateObject92 = events_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))));
      equipOutfit(Quest.Leveling);
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject93 || (events_templateObject93 = events_taggedTemplateLiteral(["Witchess Rook"]))), MacroList.FreeFight);
      checkAvailable((0,dist.$item)(events_templateObject94 || (events_templateObject94 = events_taggedTemplateLiteral(["Greek fire"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject95 || (events_templateObject95 = events_taggedTemplateLiteral(["Greek fire"]))));
    }
  },
  snojo: {
    max: 10,
    current: function current() {
      return (0,dist.get)("_snojoFreeFights");
    },
    run: function run() {
      if ((0,dist.get)("snojoSetting") !== (0,dist.$stat)(events_templateObject96 || (events_templateObject96 = events_taggedTemplateLiteral(["Muscle"])))) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller"); // (1) muscle (2) mysticality (3) moxie (4) tournament (6) leave

        (0,external_kolmafia_.runChoice)(1); // Don't want snojo to gain -50% myst debuffing bodyparts
      }

      selectBestFamiliar();
      adventure(snojo, MacroList.FreeFight);
    }
  },
  bricko: {
    max: 3,
    current: function current() {
      return !(0,dist.have)(BRICKO_TARGET_ITEM) ? this.max : (0,dist.get)("_brickoFights");
    },
    run: function run() {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      (0,external_kolmafia_.use)(BRICKO_TARGET_ITEM);
    }
  },
  witchessWitch: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject97 || (events_templateObject97 = events_taggedTemplateLiteral(["battle broom"])))) - 1;
    },
    run: function run() {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject98 || (events_templateObject98 = events_taggedTemplateLiteral(["Witchess Witch"]))), MacroList.WitchessWitch);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject99 || (events_templateObject99 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject100 || (events_templateObject100 = events_taggedTemplateLiteral(["battle broom"]))));
    }
  },
  eldritch: {
    max: 1,
    current: function current() {
      return (0,dist.get)("_eldritchHorrorEvoked") ? this.max : 0;
    },
    run: function run() {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject101 || (events_templateObject101 = events_taggedTemplateLiteral(["Evoke Eldritch Horror"]))));

      if ((0,external_kolmafia_.myHp)() < 30) {
        // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned, I guess this is enough?
        (0,external_kolmafia_.cliExecute)("hottub");
      }
    }
  },
  gingerbreadCig: {
    max: 5,
    current: function current() {
      return this.max - (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject102 || (events_templateObject102 = events_taggedTemplateLiteral(["gingerbread cigarette"]))));
    },
    run: function run() {
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(upscaleDistrict, MacroList.FreeFight);
    }
  },
  vote: {
    max: 1,
    current: function current() {
      return voterMonsterNow() ? (0,dist.get)("_voteFreeFights") : this.max;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject103 || (events_templateObject103 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject104 || (events_templateObject104 = events_taggedTemplateLiteral(["\"I Voted!\" sticker"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  godLobster: {
    max: 3,
    current: function current() {
      return (0,dist.get)("_godLobsterFights");
    },
    run: function run() {
      if (events.godLobster.current() === events.godLobster.max - 1) {
        (0,dist.set)("choiceAdventure1310", 2); // Receive a boon instead of equipment
      }

      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject105 || (events_templateObject105 = events_taggedTemplateLiteral(["God Lobster"]))));
      MacroList.FreeFight.setAutoAttack();
      (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
      if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.runChoice)(-1);

      if (!(0,dist.have)((0,dist.$effect)(events_templateObject106 || (events_templateObject106 = events_taggedTemplateLiteral(["Silence of the God Lobster"]))))) {
        if (events.godLobster.current() === events.godLobster.max) {
          throw "Failed to get ".concat((0,dist.$effect)(events_templateObject107 || (events_templateObject107 = events_taggedTemplateLiteral(["Silence of the God Lobster"]))));
        } else if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject108 || (events_templateObject108 = events_taggedTemplateLiteral(["God Lobster's Ring"])))) > 0) {
          (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject109 || (events_templateObject109 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject110 || (events_templateObject110 = events_taggedTemplateLiteral(["God Lobster's Ring"]))));
        } else if ((0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject111 || (events_templateObject111 = events_taggedTemplateLiteral(["God Lobster's Scepter"])))) > 0) {
          (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject112 || (events_templateObject112 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject113 || (events_templateObject113 = events_taggedTemplateLiteral(["God Lobster's Scepter"]))));
        }
      }
    }
  },
  witchessKing: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject114 || (events_templateObject114 = events_taggedTemplateLiteral(["dented scepter"])))) - 1;
    },
    run: function run() {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject115 || (events_templateObject115 = events_taggedTemplateLiteral(["Witchess King"]))), MacroList.FreeFight);
    }
  },
  witchess: {
    max: 5,
    current: function current() {
      return (0,dist.get)("_witchessFights");
    },
    run: function run() {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject116 || (events_templateObject116 = events_taggedTemplateLiteral(["Witchess Queen"]))), MacroList.WitchessQueen);
    }
  },
  dmtSquare: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.haveEffect)((0,dist.$effect)(events_templateObject117 || (events_templateObject117 = events_taggedTemplateLiteral(["Joy"])))) + (0,external_kolmafia_.availableAmount)((0,dist.$item)(events_templateObject118 || (events_templateObject118 = events_taggedTemplateLiteral(["abstraction: action"])))) - 1;
    },
    run: function run() {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject119 || (events_templateObject119 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable((0,dist.$item)(events_templateObject120 || (events_templateObject120 = events_taggedTemplateLiteral(["abstraction: action"]))));
    }
  },
  dmtCircle: {
    max: 0,
    current: function current() {
      return (0,external_kolmafia_.haveEffect)((0,dist.$effect)(events_templateObject121 || (events_templateObject121 = events_taggedTemplateLiteral(["Joy"])))) - 1;
    },
    run: function run() {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject122 || (events_templateObject122 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable((0,dist.$item)(events_templateObject123 || (events_templateObject123 = events_taggedTemplateLiteral(["abstraction: joy"]))));
      (0,external_kolmafia_.chew)((0,dist.$item)(events_templateObject124 || (events_templateObject124 = events_taggedTemplateLiteral(["abstraction: joy"]))));
    }
  },
  dmt: {
    max: 5,
    current: function current() {
      return (0,dist.get)("_machineTunnelsAdv");
    },
    run: function run() {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject125 || (events_templateObject125 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.FreeFight);
    }
  },
  lecture: {
    max: 17,
    current: function current() {
      return (0,dist.get)("_pocketProfessorLectures");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject126 || (events_templateObject126 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject127 || (events_templateObject127 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject128 || (events_templateObject128 = events_taggedTemplateLiteral(["Pocket Professor"]))));
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  backupCamera: {
    max: 11,
    current: function current() {
      return (0,dist.get)("_backUpUses");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject129 || (events_templateObject129 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject130 || (events_templateObject130 = events_taggedTemplateLiteral(["backup camera"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  nep: {
    max: 10,
    current: function current() {
      return (0,dist.get)("_neverendingPartyFreeTurns");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject131 || (events_templateObject131 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject132 || (events_templateObject132 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject133 || (events_templateObject133 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject134 || (events_templateObject134 = events_taggedTemplateLiteral(["Beach Comb"]))));
      selectBestFamiliar();
      adventure(neverendingParty, MacroList.FreeFight);
    }
  },
  chestXRay: {
    max: 3,
    current: function current() {
      return (0,dist.get)("_chestXRayUsed");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject135 || (events_templateObject135 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject136 || (events_templateObject136 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  shatterPunch: {
    max: 3,
    current: function current() {
      return (0,dist.get)("_shatteringPunchUsed");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject137 || (events_templateObject137 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject138 || (events_templateObject138 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  mobHit: {
    max: 1,
    current: function current() {
      return (0,dist.get)("_gingerbreadMobHitUsed") ? this.max : 0;
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject139 || (events_templateObject139 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject140 || (events_templateObject140 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  // TODO: Get a shocking lick charge, maybe?
  shockingLick: {
    max: 0,
    current: function current() {
      return 0 - (0,dist.get)("shockingLickCharges");
    },
    run: function run() {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject141 || (events_templateObject141 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject142 || (events_templateObject142 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  latteRefills: {
    max: 0,
    current: function current() {
      return (0,dist.get)("_latteRefillsUsed") - 3;
    },
    run: function run() {
      checkEffect((0,dist.$effect)(events_templateObject143 || (events_templateObject143 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject144 || (events_templateObject144 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject145 || (events_templateObject145 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));

      if ((0,dist.get)("_latteDrinkUsed")) {
        (0,external_kolmafia_.cliExecute)("latte refill pumpkin cinnamon carrot");
      }

      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject146 || (events_templateObject146 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.LatteGulpRunaway);
    }
  }
};
function getRemainingFreeFights() {
  return Object.values(events).reduce(function (sum, _ref) {
    var max = _ref.max,
        current = _ref.current;
    return sum + Math.max(max - Math.max(current(), 0), 0);
  }, 0);
} // Not all of the combats are going to occur while leveling, the rest can go here

var oneOffEvents = {
  hipster: function hipster() {
    if (!(0,dist.get)("_ironicMoustache")) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject147 || (events_templateObject147 = events_taggedTemplateLiteral(["Mini-Hipster"]))));
      adventure(noobCave, MacroList.FreeFight);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject148 || (events_templateObject148 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject149 || (events_templateObject149 = events_taggedTemplateLiteral(["none"]))));
      checkAvailable((0,dist.$item)(events_templateObject150 || (events_templateObject150 = events_taggedTemplateLiteral(["ironic moustache"]))));
      (0,external_kolmafia_.cliExecute)("fold ".concat((0,dist.$item)(events_templateObject151 || (events_templateObject151 = events_taggedTemplateLiteral(["chiptune guitar"])))));
    }
  },
  mimic: function mimic() {
    if (!(0,dist.get)("_bagOfCandy")) {
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject152 || (events_templateObject152 = events_taggedTemplateLiteral(["Stocking Mimic"]))));
      var ghostLoc1 = (0,dist.get)("ghostLocation");
      if (!ghostLoc1) throw "Failed to get protonic ghost notice";
      adventure(ghostLoc1, MacroList.FreeFight);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject153 || (events_templateObject153 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject154 || (events_templateObject154 = events_taggedTemplateLiteral(["none"]))));
      checkAvailable((0,dist.$item)(events_templateObject155 || (events_templateObject155 = events_taggedTemplateLiteral(["bag of many confections"]))));
    }
  },
  tropicalSkeleton: function tropicalSkeleton() {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject156 || (events_templateObject156 = events_taggedTemplateLiteral(["Everything Looks Red"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject157 || (events_templateObject157 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject158 || (events_templateObject158 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject159 || (events_templateObject159 = events_taggedTemplateLiteral(["Crimbo Shrub"]))));

      if (!(0,dist.get)("_shrubDecorated")) {
        (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=".concat((0,external_kolmafia_.myHash)(), "&which=99&whichitem=").concat((0,external_kolmafia_.toInt)((0,dist.$item)(events_templateObject160 || (events_templateObject160 = events_taggedTemplateLiteral(["box of old Crimbo decorations"]))))));
        (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=999&pwd=".concat((0,external_kolmafia_.myHash)(), "&option=1&topper=2&lights=5&garland=3&gift=2"));
      }

      mapMonster(skeletonStore, (0,dist.$monster)(events_templateObject161 || (events_templateObject161 = events_taggedTemplateLiteral(["novelty tropical skeleton"]))), MacroList.TropicalSkeleton);

      if (!(0,dist.have)((0,dist.$effect)(events_templateObject162 || (events_templateObject162 = events_taggedTemplateLiteral(["Everything Looks Red"]))))) {
        throw "Failed to cast ".concat((0,dist.$skill)(events_templateObject163 || (events_templateObject163 = events_taggedTemplateLiteral(["Open a Big Red Present"]))), "?");
      }

      (0,dist.$items)(events_templateObject164 || (events_templateObject164 = events_taggedTemplateLiteral(["cherry,grapefruit,lemon,strawberry"]))).forEach(function (fruit) {
        return checkAvailable(fruit);
      });
    }
  },
  nanobrainy: function nanobrainy() {
    if (!(0,dist.get)("_gingerbreadClockAdvanced")) adventure(civicCenter, dist.Macro.abort());

    if (!(0,dist.have)((0,dist.$effect)(events_templateObject165 || (events_templateObject165 = events_taggedTemplateLiteral(["Nanobrainy"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject166 || (events_templateObject166 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject167 || (events_templateObject167 = events_taggedTemplateLiteral(["vampyric cloake"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject168 || (events_templateObject168 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject169 || (events_templateObject169 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject170 || (events_templateObject170 = events_taggedTemplateLiteral(["Nanorhino"]))));
      adventure(upscaleDistrict, MacroList.Nanobrainy);
    }
  },
  lavaCo: function lavaCo() {
    while (!(0,dist.have)((0,dist.$effect)(events_templateObject171 || (events_templateObject171 = events_taggedTemplateLiteral(["Meteor Showered"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject172 || (events_templateObject172 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject173 || (events_templateObject173 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject174 || (events_templateObject174 = events_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(events_templateObject175 || (events_templateObject175 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject176 || (events_templateObject176 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject177 || (events_templateObject177 = events_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      var banished = (0,dist.get)("banishedMonsters");
      var macro = banished.includes((0,dist.$monster)(events_templateObject178 || (events_templateObject178 = events_taggedTemplateLiteral(["factory overseer (male)"]))).name) || banished.includes((0,dist.$monster)(events_templateObject179 || (events_templateObject179 = events_taggedTemplateLiteral(["factory worker (male)"]))).name) || banished.includes((0,dist.$monster)(events_templateObject180 || (events_templateObject180 = events_taggedTemplateLiteral(["lava golem"]))).name) ? MacroList.LavaCoFactory2 : MacroList.LavaCoFactory1;
      adventure(_lavaCo, macro);
    }
  },
  velvetGoldMine: function velvetGoldMine() {
    while (!(0,dist.have)((0,dist.$effect)(events_templateObject181 || (events_templateObject181 = events_taggedTemplateLiteral(["Meteor Showered"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject182 || (events_templateObject182 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject183 || (events_templateObject183 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject184 || (events_templateObject184 = events_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(events_templateObject185 || (events_templateObject185 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject186 || (events_templateObject186 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject187 || (events_templateObject187 = events_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      var banished = (0,dist.get)("banishedMonsters");
      var macro = banished.includes((0,dist.$monster)(events_templateObject188 || (events_templateObject188 = events_taggedTemplateLiteral(["healing crystal golem"]))).name) || banished.includes((0,dist.$monster)(events_templateObject189 || (events_templateObject189 = events_taggedTemplateLiteral(["mine overseer (male)"]))).name) || banished.includes((0,dist.$monster)(events_templateObject190 || (events_templateObject190 = events_taggedTemplateLiteral(["mine worker (male)"]))).name) ? MacroList.VelvetGoldMine2 : MacroList.VelvetGoldMine1;
      adventure(_velvetGoldMine, macro);
    }
  },
  mistform: function mistform() {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject191 || (events_templateObject191 = events_taggedTemplateLiteral(["Misty Form"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$item)(events_templateObject192 || (events_templateObject192 = events_taggedTemplateLiteral(["vampyric cloake"]))));
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject193 || (events_templateObject193 = events_taggedTemplateLiteral(["The Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject194 || (events_templateObject194 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.MistForm);
    }
  },
  meteorShower: function meteorShower() {
    if ((0,dist.have)((0,dist.$item)(events_templateObject195 || (events_templateObject195 = events_taggedTemplateLiteral(["tiny bottle of absinthe"]))))) (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject196 || (events_templateObject196 = events_taggedTemplateLiteral(["tiny bottle of absinthe"]))));

    if ((0,dist.have)((0,dist.$effect)(events_templateObject197 || (events_templateObject197 = events_taggedTemplateLiteral(["absinthe minded"])))) && !(0,dist.have)((0,dist.$effect)(events_templateObject198 || (events_templateObject198 = events_taggedTemplateLiteral(["Meteor Showered"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject199 || (events_templateObject199 = events_taggedTemplateLiteral(["disintegrating spiky collar"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject200 || (events_templateObject200 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject201 || (events_templateObject201 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      mapMonster(statelyPleasureDome, (0,dist.$monster)(events_templateObject202 || (events_templateObject202 = events_taggedTemplateLiteral(["toothless mastiff bitch"]))), MacroList.MeteorShowerForce);
      checkAvailable((0,dist.$item)(events_templateObject203 || (events_templateObject203 = events_taggedTemplateLiteral(["disintegrating spiky collar"]))));
      if (!(0,dist.have)((0,dist.$effect)(events_templateObject204 || (events_templateObject204 = events_taggedTemplateLiteral(["Meteor Showered"]))))) throw "Failed to get Meteor howered?";
    }

    if ((0,dist.have)((0,dist.$item)(events_templateObject205 || (events_templateObject205 = events_taggedTemplateLiteral(["disintegrating spiky collar"]))))) (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject206 || (events_templateObject206 = events_taggedTemplateLiteral(["disintegrating spiky collar"]))));

    if (!(0,dist.have)((0,dist.$effect)(events_templateObject207 || (events_templateObject207 = events_taggedTemplateLiteral(["Meteor Showered"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject208 || (events_templateObject208 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject209 || (events_templateObject209 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      adventure(direWarren, MacroList.MeteorShowerForce);
    }
  },
  batform: function batform() {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject210 || (events_templateObject210 = events_taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$item)(events_templateObject211 || (events_templateObject211 = events_taggedTemplateLiteral(["vampyric cloake"]))));
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject212 || (events_templateObject212 = events_taggedTemplateLiteral(["The Ode to Booze"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject213 || (events_templateObject213 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.BatForm);
    }
  }
};

function selectBestFamiliar() {
  var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FamiliarFlag.Default;

  if (!(0,dist.have)((0,dist.$effect)(events_templateObject214 || (events_templateObject214 = events_taggedTemplateLiteral(["Spit Upon"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject215 || (events_templateObject215 = events_taggedTemplateLiteral(["Melodramedary"]))));
  } else if (flag === FamiliarFlag.Default && !(0,dist.have)((0,dist.$item)(events_templateObject216 || (events_templateObject216 = events_taggedTemplateLiteral(["short stack of pancakes"])))) && !(0,dist.have)((0,dist.$effect)(events_templateObject217 || (events_templateObject217 = events_taggedTemplateLiteral(["Shortly Stacked"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject218 || (events_templateObject218 = events_taggedTemplateLiteral(["Shorter-Order Cook"]))));
  } else if (flag === FamiliarFlag.Default && !(0,dist.have)((0,dist.$item)(events_templateObject219 || (events_templateObject219 = events_taggedTemplateLiteral(["tiny bottle of absinthe"])))) && !(0,dist.have)((0,dist.$effect)(events_templateObject220 || (events_templateObject220 = events_taggedTemplateLiteral(["absinthe minded"]))))) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject221 || (events_templateObject221 = events_taggedTemplateLiteral(["Green Pixie"]))));
  } else if (!(0,dist.have)((0,dist.$item)(events_templateObject222 || (events_templateObject222 = events_taggedTemplateLiteral(["rope"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject223 || (events_templateObject223 = events_taggedTemplateLiteral(["burning newspaper"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject224 || (events_templateObject224 = events_taggedTemplateLiteral(["burning paper crane"])))) && (0,dist.get)("garbageFireProgress") + getRemainingFreeFights() >= 30) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject225 || (events_templateObject225 = events_taggedTemplateLiteral(["Garbage Fire"]))));
    /*} else if (
    !have($item`robin's egg`) &&
    !have($effect`Egged On`) &&
    get("rockinRobinProgress") + getRemainingFreeFights() >= 30
    ) {
    useFamiliar($familiar`Rockin' Robin`);*/
  } else if (flag === FamiliarFlag.ToxicTeacups && (0,dist.get)("_hipsterAdv") < 7) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject226 || (events_templateObject226 = events_taggedTemplateLiteral(["Artistic Goth Kid"]))));
  } else {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject227 || (events_templateObject227 = events_taggedTemplateLiteral(["Machine Elf"]))));
  }
}
;// CONCATENATED MODULE: ./src/prep.ts
var prep_templateObject, prep_templateObject2;

function prep_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function checkReadyToAscend() {
  var badDays = ["El Dia de Los Muertos Borrachos", "Feast of Boris", "April Fool's Day", "Talk Like a Pirate Day"];
  var holidays = (0,external_kolmafia_.holiday)().split("/");
  var intersect = badDays.filter(function (day) {
    return holidays.includes(day);
  });
  if (intersect.length > 0) throw "Don't want to ascend during ".concat((0,external_kolmafia_.holiday)());
  var targetPaintingMon = (0,dist.$monster)(prep_templateObject || (prep_templateObject = prep_taggedTemplateLiteral(["Pterodactyl"])));

  if (dist.ChateauMantegna.paintingMonster() !== targetPaintingMon) {
    throw "Missing ".concat(targetPaintingMon, " in Chateau painting");
  }

  if (((0,external_kolmafia_.totalTurnsPlayed)() + 60) % 11 !== 1) {
    throw "Spend ".concat(((0,external_kolmafia_.totalTurnsPlayed)() + 60 - 1) % 11, " turns to prepare for the next voter monster");
  }

  if (!(0,external_kolmafia_.myGardenType)().toLowerCase().includes("peppermint")) {
    throw "Need a peppermint garden installed";
  }

  if ((0,external_kolmafia_.getWorkshed)() !== (0,dist.$item)(prep_templateObject2 || (prep_templateObject2 = prep_taggedTemplateLiteral(["diabolic pizza cube"])))) {
    throw "Need a diabolic pizza cube installed";
  }

  return true;
}
;// CONCATENATED MODULE: ./src/sweetsynthesis.ts
var sweetsynthesis_templateObject, sweetsynthesis_templateObject2, sweetsynthesis_templateObject3, sweetsynthesis_templateObject4, sweetsynthesis_templateObject5, sweetsynthesis_templateObject6, sweetsynthesis_templateObject7, sweetsynthesis_templateObject8, sweetsynthesis_templateObject9, sweetsynthesis_templateObject10, sweetsynthesis_templateObject11, sweetsynthesis_templateObject12, sweetsynthesis_templateObject13, sweetsynthesis_templateObject14, sweetsynthesis_templateObject15, sweetsynthesis_templateObject16, sweetsynthesis_templateObject17, sweetsynthesis_templateObject18, sweetsynthesis_templateObject19, sweetsynthesis_templateObject20, sweetsynthesis_templateObject21, sweetsynthesis_templateObject22, sweetsynthesis_templateObject23, sweetsynthesis_templateObject24, sweetsynthesis_templateObject25, sweetsynthesis_templateObject26, sweetsynthesis_templateObject27, sweetsynthesis_templateObject28, sweetsynthesis_templateObject29, sweetsynthesis_templateObject30, sweetsynthesis_templateObject31, sweetsynthesis_templateObject32, sweetsynthesis_templateObject33, sweetsynthesis_templateObject34, sweetsynthesis_templateObject35;

function sweetsynthesis_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sweetsynthesis_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function sweetsynthesis_toConsumableArray(arr) { return sweetsynthesis_arrayWithoutHoles(arr) || sweetsynthesis_iterableToArray(arr) || sweetsynthesis_unsupportedIterableToArray(arr) || sweetsynthesis_nonIterableSpread(); }

function sweetsynthesis_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sweetsynthesis_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function sweetsynthesis_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return sweetsynthesis_arrayLikeToArray(arr); }

function sweetsynthesis_slicedToArray(arr, i) { return sweetsynthesis_arrayWithHoles(arr) || sweetsynthesis_iterableToArrayLimit(arr, i) || sweetsynthesis_unsupportedIterableToArray(arr, i) || sweetsynthesis_nonIterableRest(); }

function sweetsynthesis_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sweetsynthesis_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sweetsynthesis_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sweetsynthesis_arrayLikeToArray(o, minLen); }

function sweetsynthesis_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sweetsynthesis_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function sweetsynthesis_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function sweetsynthesis_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function sweetsynthesis_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var candyType;

(function (candyType) {
  candyType["complex"] = "complex";
  candyType["simple"] = "simple";
})(candyType || (candyType = {}));

function tier(effect) {
  switch (effect) {
    case (0,dist.$effect)(sweetsynthesis_templateObject || (sweetsynthesis_templateObject = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Hot"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject2 || (sweetsynthesis_templateObject2 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Cold"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject3 || (sweetsynthesis_templateObject3 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Pungent"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject4 || (sweetsynthesis_templateObject4 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Scary"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject5 || (sweetsynthesis_templateObject5 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Greasy"]))):
      return {
        a: candyType.simple,
        b: candyType.simple
      };

    case (0,dist.$effect)(sweetsynthesis_templateObject6 || (sweetsynthesis_templateObject6 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Strong"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject7 || (sweetsynthesis_templateObject7 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Smart"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject8 || (sweetsynthesis_templateObject8 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Cool"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject9 || (sweetsynthesis_templateObject9 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Hardy"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject10 || (sweetsynthesis_templateObject10 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Energy"]))):
      return {
        a: candyType.complex,
        b: candyType.simple
      };

    case (0,dist.$effect)(sweetsynthesis_templateObject11 || (sweetsynthesis_templateObject11 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Greed"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject12 || (sweetsynthesis_templateObject12 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Collection"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject13 || (sweetsynthesis_templateObject13 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Movement"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject14 || (sweetsynthesis_templateObject14 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Learning"]))):
    case (0,dist.$effect)(sweetsynthesis_templateObject15 || (sweetsynthesis_templateObject15 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Style"]))):
      return {
        a: candyType.complex,
        b: candyType.complex
      };
  }

  throw "Not a type of synthesis effect: ".concat(effect);
}

var sugarGroup = [(0,dist.$item)(sweetsynthesis_templateObject16 || (sweetsynthesis_templateObject16 = sweetsynthesis_taggedTemplateLiteral(["sugar shotgun"]))), (0,dist.$item)(sweetsynthesis_templateObject17 || (sweetsynthesis_templateObject17 = sweetsynthesis_taggedTemplateLiteral(["sugar shillelagh"]))), (0,dist.$item)(sweetsynthesis_templateObject18 || (sweetsynthesis_templateObject18 = sweetsynthesis_taggedTemplateLiteral(["sugar shank"]))), (0,dist.$item)(sweetsynthesis_templateObject19 || (sweetsynthesis_templateObject19 = sweetsynthesis_taggedTemplateLiteral(["sugar chapeau"]))), (0,dist.$item)(sweetsynthesis_templateObject20 || (sweetsynthesis_templateObject20 = sweetsynthesis_taggedTemplateLiteral(["sugar shorts"]))), (0,dist.$item)(sweetsynthesis_templateObject21 || (sweetsynthesis_templateObject21 = sweetsynthesis_taggedTemplateLiteral(["sugar shield"]))), (0,dist.$item)(sweetsynthesis_templateObject22 || (sweetsynthesis_templateObject22 = sweetsynthesis_taggedTemplateLiteral(["sugar shirt"])))].map(function (i) {
  return {
    candy: i,
    count: 1
  };
}); // TODO: handle peppermint patty and peppermint crook which take 2 and 3 sprouts respectively
// Need to alter search function to weight cost of candy transforms

var peppermintGroup = [{
  candy: (0,dist.$item)(sweetsynthesis_templateObject23 || (sweetsynthesis_templateObject23 = sweetsynthesis_taggedTemplateLiteral(["peppermint twist"]))),
  count: 1
}];
var transforms = new Map([[(0,dist.$item)(sweetsynthesis_templateObject24 || (sweetsynthesis_templateObject24 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))), sugarGroup], [(0,dist.$item)(sweetsynthesis_templateObject25 || (sweetsynthesis_templateObject25 = sweetsynthesis_taggedTemplateLiteral(["peppermint sprout"]))), peppermintGroup]]); // Cyclical references will break searching, no keys allowed in the candySets!

/**
 * Search for a set candy pairs that satisfy all chosen Sweet Synthesis effects and then cast them all.
 *
 * Throw an error if a solution can't be found.
 * @param allowTomeUse Disallow cast summon sugar sheet tome if false. Default true
 * @param targetEffects Optional list of effects to search for and use.
 * @param reserveCandies Optional list of [candy,quantity] to keep if possible
 */

function synthesize() {
  var _candies;

  var allowTomeUse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var targetEffects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,dist.$effects)(sweetsynthesis_templateObject26 || (sweetsynthesis_templateObject26 = sweetsynthesis_taggedTemplateLiteral(["Synthesis: Smart, Synthesis: Collection, Synthesis: Learning"])));
  var reserveCandies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [[(0,dist.$item)(sweetsynthesis_templateObject27 || (sweetsynthesis_templateObject27 = sweetsynthesis_taggedTemplateLiteral(["Chubby and Plump bar"]))), 1], [(0,dist.$item)(sweetsynthesis_templateObject28 || (sweetsynthesis_templateObject28 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))), 1], [(0,dist.$item)(sweetsynthesis_templateObject29 || (sweetsynthesis_templateObject29 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))), 1], [(0,dist.$item)(sweetsynthesis_templateObject30 || (sweetsynthesis_templateObject30 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))), 1]];
  var candies = (_candies = {}, sweetsynthesis_defineProperty(_candies, candyType.complex, []), sweetsynthesis_defineProperty(_candies, candyType.simple, []), _candies);
  var inv = (0,external_kolmafia_.getInventory)(); // Initialize candies with ones in inventory

  Object.entries(inv).forEach(function (_ref) {
    var _ref2 = sweetsynthesis_slicedToArray(_ref, 2),
        name = _ref2[0],
        count = _ref2[1];

    var item = Item.get(name);
    if (item.candyType === candyType.complex) candies.complex.push({
      candy: item,
      count: count
    });
    if (item.candyType === candyType.simple) candies.simple.push({
      candy: item,
      count: count
    });
  }); // Pretend summon sugar sheets if tome summons available

  var sheet = (0,dist.$item)(sweetsynthesis_templateObject31 || (sweetsynthesis_templateObject31 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"])));

  if (allowTomeUse) {
    candies.complex.push({
      candy: sheet,
      count: inv["".concat(sheet)] + Math.min(0, 3 - (0,dist.get)("tomeSummons"))
    });
  } // Simulate sweet synthesis with reserved candies omitted, add them back individually until a solution is found


  var sim = {
    result: false,
    pairs: []
  };

  for (var i = 0; i < reserveCandies.length; i++) {
    var used = new Map(sweetsynthesis_toConsumableArray(reserveCandies.slice(i)));
    sim = simulate(targetEffects, candies, used);
    if (sim.result) break;
  }

  if (!sim.result) throw "Unable to find a combination for all synthesis targets"; // Found a solution, now transform candies and synthesize

  var _iterator = sweetsynthesis_createForOfIteratorHelper(sim.pairs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = sweetsynthesis_slicedToArray(_step.value, 2),
          a = _step$value[0],
          b = _step$value[1];

      [a, b].forEach(function (creatable) {
        // source will be $item`none` if no ingredients
        var source = (0,external_kolmafia_.toItem)(Object.keys((0,external_kolmafia_.getIngredients)(creatable))[0]);

        if (!(0,dist.have)(creatable) && transforms.has(source)) {
          // only cast summon sugar sheets if needed
          if (allowTomeUse && source === (0,dist.$item)(sweetsynthesis_templateObject32 || (sweetsynthesis_templateObject32 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"])))) (0,external_kolmafia_.useSkill)((0,dist.$skill)(sweetsynthesis_templateObject33 || (sweetsynthesis_templateObject33 = sweetsynthesis_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
          (0,external_kolmafia_.cliExecute)("make ".concat(creatable));
        }
      });
      (0,external_kolmafia_.sweetSynthesis)(a, b);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function simulate(synthTargets, candies, reserveCandies) {
  var used = new Map(reserveCandies);
  var sim = {
    result: true,
    pairs: []
  };

  var _iterator2 = sweetsynthesis_createForOfIteratorHelper(synthTargets),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var target = _step2.value;
      var startA = candies[tier(target).a];
      var startB = candies[tier(target).b];
      var res = search(startA, startB, used, target);
      if (!res.found) return {
        result: false,
        pairs: []
      }; // Add the candies from each search to the list of used candies

      sim.pairs.push([res.a, res.b]);
      used.set(res.a, 1 + (used.get(res.a) || 0));
      used.set(res.b, 1 + (used.get(res.b) || 0)); // Increment candies transformed from too, if any

      if (res.fromA) used.set(res.fromA, 1 + (used.get(res.fromA) || 0));
      if (res.fromB) used.set(res.fromB, 1 + (used.get(res.fromB) || 0));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return sim;
}

function search(setA, setB, used, target) {
  var fromA = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var fromB = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var indexA = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : setA.length - 1;
  var indexB = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : setB.length - 1;
  var A = setA[indexA].candy;
  var B = setB[indexB].candy;
  var countA = setA[indexA].count - (used.get(A) || 0);
  var countB = setB[indexB].count - (used.get(B) || 0); // Test a solution if we have the candies available
  // If A and B are the same then we need to ensure we have 2 or more candies

  var enoughIfSame = A !== B || countA >= 2;

  if (countA > 0 && countB > 0 && enoughIfSame && (0,external_kolmafia_.sweetSynthesisResult)(A, B) === target) {
    return {
      found: true,
      a: A,
      b: B,
      fromA: fromA,
      fromB: fromB
    };
  } // Try transforming candy into another type
  // Fall through if we don't find a match


  var subA = transforms.get(A);
  var subB = transforms.get(B); // ensure we have the available candy to transform

  if (countA > 0 && subA) {
    if (fromA) throw "Can't transform candy again from ".concat(fromA);
    var simA = search(subA, setB, used, target, A, fromB);
    if (simA.found) return simA;
  }

  if (countB > 0 && subB) {
    if (fromB) throw "Can't transform candy again from ".concat(fromB);
    var simB = search(setA, subB, used, target, fromA, B);
    if (simB.found) return simB;
  } // Try the next candy in the list


  if (indexB > 0) return search(setA, setB, used, target, fromA, fromB, indexA, indexB - 1); // Loop around once b reaches 0

  if (indexA > 0) return search(setA, setB, used, target, fromA, fromB, indexA - 1); // No solution found

  return {
    found: false,
    a: (0,dist.$item)(sweetsynthesis_templateObject34 || (sweetsynthesis_templateObject34 = sweetsynthesis_taggedTemplateLiteral(["none"]))),
    b: (0,dist.$item)(sweetsynthesis_templateObject35 || (sweetsynthesis_templateObject35 = sweetsynthesis_taggedTemplateLiteral(["none"]))),
    fromA: fromA,
    fromB: fromB
  };
}
;// CONCATENATED MODULE: ./src/valhalla.ts
var valhalla_templateObject, valhalla_templateObject2, valhalla_templateObject3;

function valhalla_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function ascend() {
  if (!(0,external_kolmafia_.visitUrl)("charpane.php").includes("Astral Spirit")) {
    (0,external_kolmafia_.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }

  if (!(0,external_kolmafia_.visitUrl)("charpane.php").includes("Astral Spirit")) throw "Error trying to ascend";
  (0,external_kolmafia_.visitUrl)("afterlife.php?action=pearlygates");
  (0,external_kolmafia_.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(valhalla_templateObject || (valhalla_templateObject = valhalla_taggedTemplateLiteral(["Astral six-pack"]))))));
  (0,external_kolmafia_.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(valhalla_templateObject2 || (valhalla_templateObject2 = valhalla_taggedTemplateLiteral(["Astral Statuette"]))))));
  (0,external_kolmafia_.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=2&gender=".concat(Math.round(Math.random()), "&whichclass=").concat((0,external_kolmafia_.toInt)((0,dist.$class)(valhalla_templateObject3 || (valhalla_templateObject3 = valhalla_taggedTemplateLiteral(["Sauceror"])))), "&whichpath=25&asctype=3&nopetok=1&noskillsok=1&pwd=").concat((0,external_kolmafia_.myHash)()), true);
}
;// CONCATENATED MODULE: ./src/main.ts
var main_templateObject, main_templateObject2, main_templateObject3, main_templateObject4, main_templateObject5, main_templateObject6, main_templateObject7, main_templateObject8, main_templateObject9, main_templateObject10, main_templateObject11, main_templateObject12, main_templateObject13, main_templateObject14, main_templateObject15, main_templateObject16, main_templateObject17, main_templateObject18, main_templateObject19, main_templateObject20, main_templateObject21, main_templateObject22, main_templateObject23, main_templateObject24, main_templateObject25, main_templateObject26, main_templateObject27, main_templateObject28, main_templateObject29, main_templateObject30, main_templateObject31, main_templateObject32, main_templateObject33, main_templateObject34, main_templateObject35, main_templateObject36, main_templateObject37, main_templateObject38, main_templateObject39, main_templateObject40, main_templateObject41, main_templateObject42, main_templateObject43, main_templateObject44, main_templateObject45, main_templateObject46, main_templateObject47, main_templateObject48, main_templateObject49, main_templateObject50, main_templateObject51, main_templateObject52, main_templateObject53, main_templateObject54, main_templateObject55, main_templateObject56, main_templateObject57, main_templateObject58, main_templateObject59, main_templateObject60, main_templateObject61, main_templateObject62, main_templateObject63, main_templateObject64, main_templateObject65, main_templateObject66, main_templateObject67, main_templateObject68, main_templateObject69, main_templateObject70, main_templateObject71, main_templateObject72, main_templateObject73, main_templateObject74, main_templateObject75, main_templateObject76, main_templateObject77, main_templateObject78, main_templateObject79, main_templateObject80, main_templateObject81, main_templateObject82, main_templateObject83, main_templateObject84, main_templateObject85, main_templateObject86, main_templateObject87, main_templateObject88, main_templateObject89, main_templateObject90, main_templateObject91, main_templateObject92, main_templateObject93, main_templateObject94, main_templateObject95, main_templateObject96, main_templateObject97, main_templateObject98, main_templateObject99, main_templateObject100, main_templateObject101, main_templateObject102, main_templateObject103, main_templateObject104, main_templateObject105, main_templateObject106, main_templateObject107, main_templateObject108, main_templateObject109, main_templateObject110, main_templateObject111, main_templateObject112, main_templateObject113, main_templateObject114, main_templateObject115, main_templateObject116, main_templateObject117, main_templateObject118, main_templateObject119, main_templateObject120, main_templateObject121;

function main_slicedToArray(arr, i) { return main_arrayWithHoles(arr) || main_iterableToArrayLimit(arr, i) || main_unsupportedIterableToArray(arr, i) || main_nonIterableRest(); }

function main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function main_iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function main_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }

function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function main_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var choiceAdventures = new Map([[297, 3], // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
[326, 1], // Showdown: (1) fight mother slime (2) leave
[1203, 4], // Midnight in the Civic Center: (1) 500 myst stats (2) counterfeit city for 300 sprinkles (3) N/A (4) 5 gingerbread cigarettes for 5 sprinkles (5) N/A
[1204, 1], // Noon at the Train Station: (1) get a bunch of candy (2) increase size of sewer gators (3) 250 myst stats
[1208, 3], // Upscale Noon: (3) buy gingerbread latte for 50 sprinkles
[1215, 1], // Setting the Clock: (1) set the clock forward 5 turns (2) skip
[1222, 1], // The Tunnel of L.O.V.E.: (1) enter the tunnel (2) leave
[1223, 1], // L.O.V. Entrance: (1) fight the enforcer (2) skip
[1224, 2], // L.O.V. Equipment Room: (1) take the cardigan (2) take the epaulettes (3) take the earrings (4) skip
[1225, 1], // L.O.V. Engine Room: (1) fight the engineer (2) skip
[1226, 2], // L.O.V. Emergency Room: (1) Lovebotamy (2) Open Heart Surgery (3) Wandering Eye Surgery (4) skip
[1227, 1], // L.O.V. Elbow Room: (1) fight the equivocator (2) skip
[1228, 3], // L.O.V. Emporium: (1) enamorang (2) emotionizer (3) chocolate (4) bouquet (5) elephant (6) toast (7) skip
[1310, 1], // Granted a Boon: (1) equipment (2) blessing (3) experience
[1322, 2], // The Beginning of the Neverend: (1) accept quest (2) decline quest (3) leave
[1324, 5], // It Hasn't Ended, It's Just Paused: (1) upstairs (2) kitchen (3) backyard (4) basement (5) fight
[1340, 2], // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
[1387, 3] // Using the Force: (1) banish (2) find friends (3) force item drops
]);
var mummingConstumes = new Map([[(0,dist.$familiar)(main_templateObject || (main_templateObject = main_taggedTemplateLiteral(["Green Pixie"]))), "mp"], [(0,dist.$familiar)(main_templateObject2 || (main_templateObject2 = main_taggedTemplateLiteral(["Machine Elf"]))), "meat"], [(0,dist.$familiar)(main_templateObject3 || (main_templateObject3 = main_taggedTemplateLiteral(["Melodramedary"]))), "myst"], [(0,dist.$familiar)(main_templateObject4 || (main_templateObject4 = main_taggedTemplateLiteral(["Pocket Professor"]))), "hp"], [(0,dist.$familiar)(main_templateObject5 || (main_templateObject5 = main_taggedTemplateLiteral(["Shorter-Order Cook"]))), "item"]]); //
// Community Service Starts!
//

function main() {
  (0,dist.sinceKolmafiaRevision)(20795);
  if (MAIN_CLAN.length < 1) throw "seventycs_main_clan property not set";
  if (FAX_AND_SLIME_CLAN.length < 1) throw "seventycs_side_clan not set";
  var date = new Date();
  var startTime = date.getTime();

  if ((0,external_kolmafia_.myPath)() !== "Community Service") {
    checkReadyToAscend();

    if ((0,external_kolmafia_.canInteract)() && (0,external_kolmafia_.userConfirm)("Ready to Ascend into Community Service?")) {
      ascend();
    } else {
      (0,external_kolmafia_.abort)();
    }
  }

  if ((0,external_kolmafia_.myClass)() !== (0,dist.$class)(main_templateObject6 || (main_templateObject6 = main_taggedTemplateLiteral(["Sauceror"])))) throw "Don't yet know how to run this as ".concat((0,external_kolmafia_.myClass)());
  (0,external_kolmafia_.print)("Save the Kingdom, save the world. Community Service time!", "green");
  (0,external_kolmafia_.print)("Using main clan ".concat(MAIN_CLAN, " and fax/slime clan ").concat(FAX_AND_SLIME_CLAN));
  var settings = new Map([// breakableHandling values:
  // 1: abort
  // 2: equip previous
  // 3: re-equip from inventory, or abort
  // 4: re-equip from inventory, or previous
  // 5: acquire & re-equip
  ["breakableHandling".concat((0,external_kolmafia_.toInt)((0,dist.$item)(main_templateObject7 || (main_templateObject7 = main_taggedTemplateLiteral(["makeshift garbage shirt"]))))), 2], ["customCombatScript", "seventy_hccs"]]);

  var _iterator = main_createForOfIteratorHelper(choiceAdventures),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = main_slicedToArray(_step.value, 2),
          prop = _step$value[0],
          val = _step$value[1];

      settings.set("choiceAdventure".concat(prop), val);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  withContext(levelAndDoQuests, settings);
  var endTime = date.getTime();
  (0,external_kolmafia_.print)("Community Service completed in ".concat((endTime - startTime) / 1000, " seconds"), "green");
}

function levelAndDoQuests() {
  // Mafia saves a list of #'s corresponding to costumes used, maybe can check those?
  var _iterator2 = main_createForOfIteratorHelper(mummingConstumes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = main_slicedToArray(_step2.value, 2),
          familiar = _step2$value[0],
          costume = _step2$value[1];

      (0,external_kolmafia_.useFamiliar)(familiar);
      (0,external_kolmafia_.cliExecute)("mummery ".concat(costume));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (haveQuest(Quest.CoilWire)) {
    preCoilWire(); // 60 turns down the drain 😢

    prepAndDoQuest(Quest.CoilWire);
    (0,external_kolmafia_.print)("Coil Wire done: have ".concat((0,external_kolmafia_.myHp)(), " HP and ").concat((0,external_kolmafia_.myMp)(), " MP available."));
  }

  var mainstat = (0,external_kolmafia_.myPrimestat)();

  if (getRemainingFreeFights() > 0) {
    postCoilWire();

    var chateauNapReady = function chateauNapReady() {
      return (0,external_kolmafia_.myLevel)() >= CHATEAU_REST_LEVEL && (0,dist.get)("timesRested") < (0,external_kolmafia_.totalFreeRests)();
    };

    leveling: while (true) {
      // Spend excess MP on librams
      // Use free rests on stats at configured level
      // Swap equipment as needed between combats
      // Get Inner Elf at level 13
      // Free run for some items
      // Do all the leveling combats
      // Then gulp latte for more libram summons
      if (chateauNapReady()) {
        var prevOffhand = (0,external_kolmafia_.equippedItem)((0,dist.$slot)(main_templateObject8 || (main_templateObject8 = main_taggedTemplateLiteral(["off-hand"]))));
        (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject9 || (main_templateObject9 = main_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(main_templateObject10 || (main_templateObject10 = main_taggedTemplateLiteral(["familiar scrapbook"]))));

        while (chateauNapReady()) {
          (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
        }

        (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject11 || (main_templateObject11 = main_taggedTemplateLiteral(["off-hand"]))), prevOffhand);
      }

      if (!(0,dist.have)((0,dist.$effect)(main_templateObject12 || (main_templateObject12 = main_taggedTemplateLiteral(["Soulerskates"]))))) {
        if ((0,external_kolmafia_.mySoulsauce)() >= (0,external_kolmafia_.soulsauceCost)((0,dist.$skill)(main_templateObject13 || (main_templateObject13 = main_taggedTemplateLiteral(["Soulerskates"]))))) {
          acquireEffect((0,dist.$effect)(main_templateObject14 || (main_templateObject14 = main_taggedTemplateLiteral(["Soulerskates"]))));
        }
      } else {
        while ((0,external_kolmafia_.mySoulsauce)() >= (0,external_kolmafia_.soulsauceCost)((0,dist.$skill)(main_templateObject15 || (main_templateObject15 = main_taggedTemplateLiteral(["Soul Food"])))) && (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)() >= 15) {
          (0,external_kolmafia_.useSkill)((0,dist.$skill)(main_templateObject16 || (main_templateObject16 = main_taggedTemplateLiteral(["Soul Food"]))));
        }
      }

      while ((0,dist.have)((0,dist.$item)(main_templateObject17 || (main_templateObject17 = main_taggedTemplateLiteral(["sausage casing"])))) && ((0,dist.get)("_sausagesMade") + 1) * 111 < (0,external_kolmafia_.myMeat)() - MEAT_SAFE_LIMIT && (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)() > 1000 && (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.mpCost)((0,dist.$skill)(main_templateObject18 || (main_templateObject18 = main_taggedTemplateLiteral(["Summon BRICKOs"])))) > MP_SAFE_LIMIT && (0,dist.get)("_sausagesEaten") < 23) {
        (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(main_templateObject19 || (main_templateObject19 = main_taggedTemplateLiteral(["magical sausage"])))));
        (0,external_kolmafia_.eat)((0,dist.$item)(main_templateObject20 || (main_templateObject20 = main_taggedTemplateLiteral(["magical sausage"]))));
      }

      while ((0,external_kolmafia_.myMp)() - (0,external_kolmafia_.mpCost)((0,dist.$skill)(main_templateObject21 || (main_templateObject21 = main_taggedTemplateLiteral(["Summon BRICKOs"])))) > MP_SAFE_LIMIT) {
        castBestLibram();
        continue leveling; // get more MP and make more librams before adventuring on
      }

      useLibramsDrops();

      while ((0,dist.have)((0,dist.$item)(main_templateObject22 || (main_templateObject22 = main_taggedTemplateLiteral(["BRICKO eye brick"])))) && (0,dist.have)((0,dist.$item)(main_templateObject23 || (main_templateObject23 = main_taggedTemplateLiteral(["BRICKO brick"]))), BRICKOS_PER_FIGHT)) {
        (0,external_kolmafia_.cliExecute)("make ".concat(BRICKO_TARGET_ITEM));
      }

      var paperCrane = (0,dist.$item)(main_templateObject24 || (main_templateObject24 = main_taggedTemplateLiteral(["burning paper crane"])));

      if (!(0,dist.have)(paperCrane) && (0,dist.have)((0,dist.$item)(main_templateObject25 || (main_templateObject25 = main_taggedTemplateLiteral(["burning newspaper"]))))) {
        (0,external_kolmafia_.cliExecute)("make ".concat(paperCrane));
        checkAvailable(paperCrane);
      } // Save the Garbage shirt for the last 37 fights
      // Swap from Iunion Crown to Wad of Used Tape once Myst is high enough


      var garbageShirt = (0,dist.$item)(main_templateObject26 || (main_templateObject26 = main_taggedTemplateLiteral(["makeshift garbage shirt"])));

      if ((0,external_kolmafia_.haveEquipped)(garbageShirt) || getRemainingFreeFights() <= 37) {
        if (!(0,dist.have)(garbageShirt)) {
          (0,external_kolmafia_.cliExecute)("fold ".concat(garbageShirt));
          (0,SourceTerminal.educate)(dist.SourceTerminal.Skills.Turbo);
        }

        (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject27 || (main_templateObject27 = main_taggedTemplateLiteral(["shirt"]))), garbageShirt);
        (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject28 || (main_templateObject28 = main_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(main_templateObject29 || (main_templateObject29 = main_taggedTemplateLiteral(["Iunion Crown"]))));
      } else if ((0,external_kolmafia_.myBasestat)(mainstat) > 100) {
        equipWadOfUsedTape();
      } else {
        (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject30 || (main_templateObject30 = main_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(main_templateObject31 || (main_templateObject31 = main_taggedTemplateLiteral(["Iunion Crown"]))));
      } // This is where all the leveling happens
      // Loop through the list of events until an unfinished one is found
      // After doing an event, go back to the top of the outer loop to
      // handle librams, sausages, garbage shirt, etc.


      for (var _i2 = 0, _Object$values = Object.values(events); _i2 < _Object$values.length; _i2++) {
        var event = _Object$values[_i2];

        if (event.current() < event.max) {
          event.run();
          continue leveling;
        }
      }

      break;
    }

    (0,external_kolmafia_.print)("Finished leveling combats at level ".concat((0,external_kolmafia_.myLevel)(), " with ").concat((0,external_kolmafia_.myBasestat)(mainstat), " base ").concat(mainstat, " and ").concat((0,external_kolmafia_.myBuffedstat)(mainstat), " buffed ").concat(mainstat));
  } // Leveling done, time to put on the final effects before the tests


  (0,external_kolmafia_.cliExecute)("shower hot");
  shrugEffect((0,dist.$effect)(main_templateObject32 || (main_templateObject32 = main_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"]))));
  shrugEffect((0,dist.$effect)(main_templateObject33 || (main_templateObject33 = main_taggedTemplateLiteral(["Polka of Plenty"]))));
  wishEffect((0,dist.$effect)(main_templateObject34 || (main_templateObject34 = main_taggedTemplateLiteral(["Sparkly!"]))));
  prepAndDoQuest(Quest.Muscle);
  prepAndDoQuest(Quest.Moxie);
  prepAndDoQuest(Quest.HP);

  if (haveQuest(Quest.SpellDamage)) {
    events.innerElf.run();
    oneOffEvents.lavaCo();

    if (!(0,dist.have)((0,dist.$effect)(main_templateObject35 || (main_templateObject35 = main_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"]))))) {
      (0,external_kolmafia_.print)("Current HP before Deep Dark Visions: ".concat((0,external_kolmafia_.myHp)()));
      equipOutfit(Quest.DeepDark);

      if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.9) {
        (0,external_kolmafia_.cliExecute)("hottub");
      }

      (0,external_kolmafia_.useSkill)((0,dist.$skill)(main_templateObject36 || (main_templateObject36 = main_taggedTemplateLiteral(["Deep Dark Visions"]))));
      (0,external_kolmafia_.print)("Current HP after Deep Dark Visions: ".concat((0,external_kolmafia_.myHp)()));
    }

    if (!(0,dist.have)((0,dist.$effect)(main_templateObject37 || (main_templateObject37 = main_taggedTemplateLiteral(["Cowrruption"]))))) {
      (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject38 || (main_templateObject38 = main_taggedTemplateLiteral(["corrupted marrow"]))));

      if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.5) {
        (0,external_kolmafia_.cliExecute)("hottub");
      }
    }

    prepAndDoQuest(Quest.SpellDamage);
  }

  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    events.innerElf.run();
    oneOffEvents.velvetGoldMine();
    prepAndDoQuest(Quest.WeaponDamage);
  }

  shrugEffect((0,dist.$effect)(main_templateObject39 || (main_templateObject39 = main_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))));
  prepAndDoQuest(Quest.Mysticality);

  if (haveQuest(Quest.CombatFrequency)) {
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(main_templateObject40 || (main_templateObject40 = main_taggedTemplateLiteral(["Disgeist"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject41 || (main_templateObject41 = main_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(main_templateObject42 || (main_templateObject42 = main_taggedTemplateLiteral(["Powerful Glove"]))));
    prepAndDoQuest(Quest.CombatFrequency);
  }

  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.mistform();
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(main_templateObject43 || (main_templateObject43 = main_taggedTemplateLiteral(["Exotic Parrot"]))));

    if (!(0,external_kolmafia_.haveEquipped)((0,dist.$item)(main_templateObject44 || (main_templateObject44 = main_taggedTemplateLiteral(["cracker"]))))) {
      throw "Wrong familiar equipment?";
    }

    if (!(0,dist.get)("_horsery").startsWith("pale")) {
      (0,external_kolmafia_.cliExecute)("horsery pale");
    }

    prepAndDoQuest(Quest.HotResist);
  }

  shrugEffect((0,dist.$effect)(main_templateObject45 || (main_templateObject45 = main_taggedTemplateLiteral(["The Sonata of Sneakiness"]))));

  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.meteorShower();
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(main_templateObject46 || (main_templateObject46 = main_taggedTemplateLiteral(["Exotic Parrot"]))));

    if (!(0,external_kolmafia_.haveEquipped)((0,dist.$item)(main_templateObject47 || (main_templateObject47 = main_taggedTemplateLiteral(["cracker"]))))) {
      throw "Wrong familiar equipment?";
    }

    if (!(0,dist.have)((0,dist.$effect)(main_templateObject48 || (main_templateObject48 = main_taggedTemplateLiteral(["Smart Drunk"]))))) {
      (0,external_kolmafia_.useSkill)(2, (0,dist.$skill)(main_templateObject49 || (main_templateObject49 = main_taggedTemplateLiteral(["The Ode to Booze"]))));
      (0,external_kolmafia_.drink)((0,dist.$item)(main_templateObject50 || (main_templateObject50 = main_taggedTemplateLiteral(["vintage smart drink"]))));
    }

    var icyRevenge = (0,dist.$item)(main_templateObject51 || (main_templateObject51 = main_taggedTemplateLiteral(["love song of icy revenge"])));

    if (!(0,dist.have)((0,dist.$effect)(main_templateObject52 || (main_templateObject52 = main_taggedTemplateLiteral(["Cold Hearted"])))) && (0,dist.have)(icyRevenge)) {
      (0,external_kolmafia_.cliExecute)("pillkeeper extend");
      (0,external_kolmafia_.use)(icyRevenge);
    }

    prepAndDoQuest(Quest.FamiliarWeight);
  }

  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform();
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(main_templateObject53 || (main_templateObject53 = main_taggedTemplateLiteral(["Trick-or-Treating Tot"]))));
    (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject54 || (main_templateObject54 = main_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(main_templateObject55 || (main_templateObject55 = main_taggedTemplateLiteral(["li'l ninja costume"]))));
    prepAndDoQuest(Quest.ItemDrop);
  }

  prepAndDoQuest(Quest.Donate);
}

function openQuestZones() {
  [tuple("questM23Meatsmith", "meatsmith", 1059), tuple("questM24Doc", "doc", 1064), tuple("questM25Armorer", "armory", 1065)].forEach(function (_ref) {
    var _ref2 = main_slicedToArray(_ref, 3),
        prop = _ref2[0],
        name = _ref2[1],
        id = _ref2[2];

    if ((0,external_kolmafia_.getProperty)(prop).toLowerCase() === "unstarted") {
      // Don't think we need?
      //visitUrl("shop.php?whichshop=${b}");
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=".concat(name, "&action=talk"));
      tryRunChoice(1, id, "start ".concat(name, " quest"));

      if ((0,external_kolmafia_.getProperty)(prop).toLowerCase() === "unstarted") {
        throw "Failed to start ".concat(name, " quest");
      }
    }
  });
}

function preCoilWire() {
  // Visit Toot Oriole, sell pork gems, save a baconstone for pantogram
  (0,external_kolmafia_.visitUrl)("tutorial.php?action=toot");
  tryUse(1, (0,dist.$item)(main_templateObject56 || (main_templateObject56 = main_taggedTemplateLiteral(["letter from King Ralph XI"]))));
  tryUse(1, (0,dist.$item)(main_templateObject57 || (main_templateObject57 = main_taggedTemplateLiteral(["pork elf goodies sack"])))); // Only need one consult for a candy

  if ((0,dist.get)("_clanFortuneConsultUses") < 3 && FORTUNE_TELLER_FRIEND.length > 1) {
    whitelist(MAIN_CLAN);
    (0,external_kolmafia_.cliExecute)("fortune ".concat(FORTUNE_TELLER_FRIEND, " garbage garbage thick"));
  }

  if (!(0,dist.have)((0,dist.$item)(main_templateObject58 || (main_templateObject58 = main_taggedTemplateLiteral(["battery (AAA)"]))))) harvestBatteries();
  getPantogramPants();
  equipOutfit(Quest.Beginning); //
  // Let's get a buncha meat!
  //

  (0,dist.$items)(main_templateObject59 || (main_templateObject59 = main_taggedTemplateLiteral(["baconstone,hamethyst,porquoise"]))).forEach(function (gem) {
    return (0,external_kolmafia_.autosell)(5, gem);
  });
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(main_templateObject60 || (main_templateObject60 = main_taggedTemplateLiteral(["Communism!"]))));

  if ((0,external_kolmafia_.myLevel)() + (0,external_kolmafia_.mySpleenUse)() === 1) {
    while ((0,dist.get)("_universeCalculated") < (0,dist.get)("skillLevel144")) {
      (0,external_kolmafia_.cliExecute)("numberology 14");
    }

    (0,external_kolmafia_.autosell)(14 * (0,dist.get)("_universeCalculated"), (0,dist.$item)(main_templateObject61 || (main_templateObject61 = main_taggedTemplateLiteral(["moxie weed"]))));
  }

  if (!(0,dist.get)("_chateauDeskHarvested")) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_desk1");
  }

  if ((0,dist.get)("boomBoxSong").toLowerCase() !== "total eclipse of your meat") (0,external_kolmafia_.cliExecute)("boombox meat");
  if ((0,dist.get)("_horsery") === "") (0,external_kolmafia_.cliExecute)("horsery dark"); // 8600 meat
  // Get Community Service quests

  (0,external_kolmafia_.visitUrl)("guild.php?place=challenge");
  openQuestZones();
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
  checkAvailable((0,dist.$item)(main_templateObject62 || (main_templateObject62 = main_taggedTemplateLiteral(["your cowboy boots"]))));
  (0,external_kolmafia_.cliExecute)("Detective Solver");
  checkAvailable((0,dist.$item)(main_templateObject63 || (main_templateObject63 = main_taggedTemplateLiteral(["gold detective badge"]))));
  buffUpBeginning();

  if (!(0,dist.have)((0,dist.$effect)(main_templateObject64 || (main_templateObject64 = main_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))))) {
    (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
  }

  vote(); // Get free stats

  scavengeDaycare();
  if (!(0,dist.have)((0,dist.$item)(main_templateObject65 || (main_templateObject65 = main_taggedTemplateLiteral(["Brutal brogues"]))))) (0,external_kolmafia_.cliExecute)("bastille bbq brutalist gesture");
  ["forest", "rope", "wrench"].forEach(function (card) {
    if (!(0,dist.get)("_deckCardsSeen").toLowerCase().includes(card)) {
      (0,external_kolmafia_.cliExecute)("cheat ".concat(card));
    }
  });

  if (!(0,dist.have)((0,dist.$skill)(main_templateObject66 || (main_templateObject66 = main_taggedTemplateLiteral(["Digitize"])))) && (0,dist.get)("_sourceTerminalDigitizeUses") < 1) {
    (0,SourceTerminal.educate)(dist.SourceTerminal.Skills.Digitize);

    if (!(0,dist.have)((0,dist.$skill)(main_templateObject67 || (main_templateObject67 = main_taggedTemplateLiteral(["Digitize"]))))) {
      throw "Error: need to learn ".concat((0,dist.$skill)(main_templateObject68 || (main_templateObject68 = main_taggedTemplateLiteral(["Digitize"]))));
    }
  }

  if ((0,external_kolmafia_.myAdventures)() < 60) {
    if (!(0,dist.have)((0,dist.$item)(main_templateObject69 || (main_templateObject69 = main_taggedTemplateLiteral(["borrowed time"]))))) {
      (0,external_kolmafia_.create)(1, (0,dist.$item)(main_templateObject70 || (main_templateObject70 = main_taggedTemplateLiteral(["borrowed time"]))));
    }

    (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject71 || (main_templateObject71 = main_taggedTemplateLiteral(["borrowed time"]))));
  }

  if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)()) (0,external_kolmafia_.cliExecute)("hottub"); // Fight Kramco

  oneOffEvents.hipster();

  if ((0,dist.get)("_sourceTerminalDigitizeUses") > 0) {
    (0,SourceTerminal.educate)(dist.SourceTerminal.Skills.Compress);
    (0,SourceTerminal.educate)(dist.SourceTerminal.Skills.Extract);
  }

  if ((0,dist.have)((0,dist.$skill)(main_templateObject72 || (main_templateObject72 = main_taggedTemplateLiteral(["Digitize"]))))) throw "Error: need to unlearn ".concat((0,dist.$skill)(main_templateObject73 || (main_templateObject73 = main_taggedTemplateLiteral(["Digitize"]))));
  var wand = (0,dist.$item)(main_templateObject74 || (main_templateObject74 = main_taggedTemplateLiteral(["weeping willow wand"])));

  if (!(0,external_kolmafia_.haveEquipped)(wand)) {
    (0,external_kolmafia_.visitUrl)("shop.php?whichshop=lathe");

    if ((0,dist.have)((0,dist.$item)(main_templateObject75 || (main_templateObject75 = main_taggedTemplateLiteral(["flimsy hardwood scraps"]))))) {
      (0,external_kolmafia_.retrieveItem)(1, wand);
    } else {
      checkAvailable(wand);
    }

    (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject76 || (main_templateObject76 = main_taggedTemplateLiteral(["off-hand"]))), wand);
  }

  buyUpTo(1, (0,dist.$item)(main_templateObject77 || (main_templateObject77 = main_taggedTemplateLiteral(["detuned radio"])))); // 8600 - 285 = 8315 meat

  (0,external_kolmafia_.changeMcd)(10);
  buyUpTo(1, (0,dist.$item)(main_templateObject78 || (main_templateObject78 = main_taggedTemplateLiteral(["blue rocket"])))); // 8315 - 237 = 8078 meat
  // Fight Protonic Ghost

  oneOffEvents.mimic(); // Start the digitize counter by going to a wanderer-friendly zone and encountering a normal combat
  // Decorate Crimbo Shrub with LED Mandala, Jack-O-Lantern Lights, Popcorn Strands, and Big Red-Wrapped Presents

  oneOffEvents.tropicalSkeleton(); // 8078 + 2000 = 10078 meat

  if (!(0,dist.have)((0,dist.$item)(main_templateObject79 || (main_templateObject79 = main_taggedTemplateLiteral(["occult jelly donut"]))))) (0,external_kolmafia_.create)(1, (0,dist.$item)(main_templateObject80 || (main_templateObject80 = main_taggedTemplateLiteral(["occult jelly donut"]))));
  acquireEffect((0,dist.$effect)(main_templateObject81 || (main_templateObject81 = main_taggedTemplateLiteral(["Blood Sugar Sauce Magic"]))));
  spendAllMpOnLibrams();
}

function postCoilWire() {
  gazeAtTheStars();
  if ((0,dist.have)((0,dist.$item)(main_templateObject82 || (main_templateObject82 = main_taggedTemplateLiteral(["occult jelly donut"]))))) (0,external_kolmafia_.eat)((0,dist.$item)(main_templateObject83 || (main_templateObject83 = main_taggedTemplateLiteral(["occult jelly donut"]))));
  if (!(0,dist.have)((0,dist.$skill)(main_templateObject84 || (main_templateObject84 = main_taggedTemplateLiteral(["Seek out a Bird"]))))) (0,external_kolmafia_.use)(1, (0,dist.$item)(main_templateObject85 || (main_templateObject85 = main_taggedTemplateLiteral(["bird-a-day calendar"]))));
  if (!(0,dist.have)((0,dist.$item)(main_templateObject86 || (main_templateObject86 = main_taggedTemplateLiteral(["Yeg's Motel hand soap"]))))) (0,external_kolmafia_.cliExecute)("cargo item ".concat((0,dist.$item)(main_templateObject87 || (main_templateObject87 = main_taggedTemplateLiteral(["Yeg's Motel hand soap"])))));
  (0,external_kolmafia_.cliExecute)("Briefcase e spell hot -combat");
  var click = true;

  for (var i = 0; i < 22 && click; ++i) {
    click = !(0,external_kolmafia_.containsText)((0,external_kolmafia_.visitUrl)("place.php?whichplace=kgb&action=kgb_actuator1"), "Nothing happens.");
  } // Visit Gingerbread Civic Center & fast forward clock
  // Then use nanorhino for nanobrainy and increment the gingerbread city counter


  oneOffEvents.nanobrainy(); // Upgrade Cosplay Saber and start buffing familiar weight now that we're done with Nanorhino

  if ((0,dist.get)("_saberMod") === 0) {
    (0,external_kolmafia_.visitUrl)("main.php?action=may4");
    (0,external_kolmafia_.runChoice)(4); // familiar weight option
  }

  if (!(0,dist.get)("_pottedTeaTreeUsed")) (0,external_kolmafia_.cliExecute)("teatree loyal");
  wishEffect((0,dist.$effect)(main_templateObject88 || (main_templateObject88 = main_taggedTemplateLiteral(["All is Forgiven"]))));
  wishEffect((0,dist.$effect)(main_templateObject89 || (main_templateObject89 = main_taggedTemplateLiteral(["Witch Breaded"]))));
  useLibramsDrops(); // In case we obtained a green candy heart already, don't want to synthesize it later

  var range = (0,dist.$item)(main_templateObject90 || (main_templateObject90 = main_taggedTemplateLiteral(["Dramatic\u2122 range"])));
  var camp = (0,external_kolmafia_.getCampground)();
  var installedRange = Object.keys(camp).some(function (k) {
    return k.includes("Dramatic");
  });
  if (!installedRange) buyUpTo(1, range);
  if ((0,dist.have)(range)) (0,external_kolmafia_.use)(range); // 10078 - 950 = 9128 meat

  [// Need all three of these to craft with
  (0,dist.$skill)(main_templateObject91 || (main_templateObject91 = main_taggedTemplateLiteral(["Advanced Saucecrafting"]))), (0,dist.$skill)(main_templateObject92 || (main_templateObject92 = main_taggedTemplateLiteral(["Advanced Cocktailcrafting"]))), (0,dist.$skill)(main_templateObject93 || (main_templateObject93 = main_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))), // Only need Alice's Army for now
  (0,dist.$skill)(main_templateObject94 || (main_templateObject94 = main_taggedTemplateLiteral(["Summon Alice's Army Cards"]))), (0,dist.$skill)(main_templateObject95 || (main_templateObject95 = main_taggedTemplateLiteral(["Summon Confiscated Things"]))), (0,dist.$skill)(main_templateObject96 || (main_templateObject96 = main_taggedTemplateLiteral(["Summon Geeky Gifts"]))), (0,dist.$skill)(main_templateObject97 || (main_templateObject97 = main_taggedTemplateLiteral(["Summon Tasteful Items"]))), // Buffs that can't fit elsewhere
  (0,dist.$skill)(main_templateObject98 || (main_templateObject98 = main_taggedTemplateLiteral(["Incredible Self-Esteem"])))].forEach(function (s) {
    return (0,external_kolmafia_.useSkill)(s);
  });
  [(0,dist.$item)(main_templateObject99 || (main_templateObject99 = main_taggedTemplateLiteral(["oil of expertise"]))), (0,dist.$item)(main_templateObject100 || (main_templateObject100 = main_taggedTemplateLiteral(["philter of phorce"]))), (0,dist.$item)(main_templateObject101 || (main_templateObject101 = main_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(main_templateObject102 || (main_templateObject102 = main_taggedTemplateLiteral(["eyedrops of the ermine"])))].forEach(function (saucePotion) {
    if (!(0,dist.have)(saucePotion) && !(0,dist.have)((0,external_kolmafia_.effectModifier)(saucePotion, "effect"))) {
      (0,external_kolmafia_.create)(saucePotion);
      checkAvailable(saucePotion, 3);
    }
  });
  if (!(0,dist.have)((0,dist.$item)(main_templateObject103 || (main_templateObject103 = main_taggedTemplateLiteral(["tiny black hole"]))))) (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(main_templateObject104 || (main_templateObject104 = main_taggedTemplateLiteral(["tiny black hole"])))));
  buyUpTo(1, (0,dist.$item)(main_templateObject105 || (main_templateObject105 = main_taggedTemplateLiteral(["toy accordion"]))));
  acquireEffect((0,dist.$effect)(main_templateObject106 || (main_templateObject106 = main_taggedTemplateLiteral(["Ode to Booze"])))); // 9128 - 142 - 95 - 950 - 28 = 7913 meat

  whitelist(MAIN_CLAN);
  acquireEffect((0,dist.$effect)(main_templateObject107 || (main_templateObject107 = main_taggedTemplateLiteral(["[1701]Hip to the Jive"])))); // drink Hot Socks (3 drunk, 5000 meat)
  // 7913 - 5000 = 2913 meat

  acquireEffect((0,dist.$effect)(main_templateObject108 || (main_templateObject108 = main_taggedTemplateLiteral(["In a Lather"])))); // drink Sockdollager (2 drunk, 500 meat)
  // 2913 - 500 = 2413 meat
  // Eat pizza before synthesizing, generate a licorice boa from pizza

  eatPizzas(); // TODO: maybe spend down MP on librams if we can generate some sausages?

  if ((0,external_kolmafia_.myGardenType)().toLowerCase().includes("peppermint")) (0,external_kolmafia_.cliExecute)("garden pick");
  [(0,dist.$skill)(main_templateObject109 || (main_templateObject109 = main_taggedTemplateLiteral(["Chubby and Plump"]))), (0,dist.$skill)(main_templateObject110 || (main_templateObject110 = main_taggedTemplateLiteral(["Summon Crimbo Candy"])))].forEach(function (s) {
    return (0,external_kolmafia_.useSkill)(s);
  });
  synthesize(); // If we didn't use a sugar sheet for synthesis we can make a cold-filtered water

  if ((0,dist.get)("tomeSummons") < 3 && !(0,dist.have)((0,dist.$item)(main_templateObject111 || (main_templateObject111 = main_taggedTemplateLiteral(["cold-filtered water"])))) && !(0,dist.have)((0,dist.$effect)(main_templateObject112 || (main_templateObject112 = main_taggedTemplateLiteral(["Purity of Spirit"]))))) {
    (0,external_kolmafia_.create)(1, (0,dist.$item)(main_templateObject113 || (main_templateObject113 = main_taggedTemplateLiteral(["cold-filtered water"]))));
  }

  if ((0,dist.have)((0,dist.$item)(main_templateObject114 || (main_templateObject114 = main_taggedTemplateLiteral(["cold-filtered water"]))))) (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject115 || (main_templateObject115 = main_taggedTemplateLiteral(["cold-filtered water"])))); // If we didn't use a chubby and plump bar for synthesis we can use it for more HP and MP

  if ((0,dist.have)((0,dist.$item)(main_templateObject116 || (main_templateObject116 = main_taggedTemplateLiteral(["Chubby and Plump bar"]))))) (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject117 || (main_templateObject117 = main_taggedTemplateLiteral(["Chubby and Plump bar"]))));
  (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject118 || (main_templateObject118 = main_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(main_templateObject119 || (main_templateObject119 = main_taggedTemplateLiteral(["Powerful Glove"]))));
  acquireGumOrHermitItem((0,dist.$item)(main_templateObject120 || (main_templateObject120 = main_taggedTemplateLiteral(["turtle totem"]))));
  acquireGumOrHermitItem((0,dist.$item)(main_templateObject121 || (main_templateObject121 = main_taggedTemplateLiteral(["saucepan"]))));
  buffUpLeveling();
  equipOutfit(Quest.Leveling);
}

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 1149);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;