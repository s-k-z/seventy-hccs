/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ 6733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var charAt = __webpack_require__(6389).charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
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

/***/ 3579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toObject = __webpack_require__(1324);

var toAbsoluteIndex = __webpack_require__(6782);

var toLength = __webpack_require__(97); // `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill


module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
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

/***/ 4805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(2938);

var IndexedObject = __webpack_require__(5044);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var arraySpeciesCreate = __webpack_require__(4822);

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

var createMethod = function createMethod(TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every

            case 7:
              push.call(target, value);
            // filterOut
          }
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

/***/ }),

/***/ 9269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

var wellKnownSymbol = __webpack_require__(3649);

var V8_VERSION = __webpack_require__(4061);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),

/***/ 906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(6544);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),

/***/ 5744:
/***/ ((module) => {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function mergeSort(array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
};

var insertionSort = function insertionSort(array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];

    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }

    if (j !== i++) array[j] = element;
  }

  return array;
};

var merge = function merge(left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  }

  return result;
};

module.exports = mergeSort;

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

/***/ 3989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
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

/***/ 2219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(1287);

var has = __webpack_require__(4402);

var wrappedWellKnownSymbolModule = __webpack_require__(491);

var defineProperty = __webpack_require__(4615).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
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

/***/ 5857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(6918);

var firefox = userAgent.match(/firefox\/(\d+)/i);
module.exports = !!firefox && +firefox[1];

/***/ }),

/***/ 924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var UA = __webpack_require__(6918);

module.exports = /MSIE|Trident/.test(UA);

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

/***/ 3:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var userAgent = __webpack_require__(6918);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
module.exports = !!webkit && +webkit[1];

/***/ }),

/***/ 5690:
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ 7263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
      if (typeof sourceProperty === typeof targetProperty) continue;
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

/***/ 783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
 // TODO: Remove from `core-js@4` since it's moved to entry points

__webpack_require__(2322);

var redefine = __webpack_require__(1270);

var regexpExec = __webpack_require__(8445);

var fails = __webpack_require__(6544);

var wellKnownSymbol = __webpack_require__(3649);

var createNonEnumerableProperty = __webpack_require__(57);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;

      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
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

  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ 1335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aFunction = __webpack_require__(6163);

var isObject = __webpack_require__(794);

var slice = [].slice;
var factories = {};

var construct = function construct(C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) {
      list[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);

  var boundFunction = function bound() {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };

  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
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

/***/ 4305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toObject = __webpack_require__(1324);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution

module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }

  return replace.call(replacement, symbols, function (match, ch) {
    var capture;

    switch (ch.charAt(0)) {
      case '$':
        return '$';

      case '&':
        return matched;

      case '`':
        return str.slice(0, position);

      case "'":
        return str.slice(tailPos);

      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;

      default:
        // \d\d?
        var n = +ch;
        if (n === 0) return match;

        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }

        capture = captures[n - 1];
    }

    return capture === undefined ? '' : capture;
  });
};

/***/ }),

/***/ 7583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) || // eslint-disable-next-line no-new-func -- fallback
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

/***/ 434:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var setPrototypeOf = __webpack_require__(7496); // makes subclassing work correct for wrapped built-ins


module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

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

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ 6268:
/***/ ((module) => {

module.exports = false;

/***/ }),

/***/ 7574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(794);

var classof = __webpack_require__(9624);

var wellKnownSymbol = __webpack_require__(3649);

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),

/***/ 4026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

    if (typeof result == 'object' && result && result instanceof Result) return result;
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

/***/ 9041:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(7574);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

/***/ }),

/***/ 5407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(7583);

var trim = __webpack_require__(8940).trim;

var whitespaces = __webpack_require__(771);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ 9304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(8494);

var fails = __webpack_require__(6544);

var objectKeys = __webpack_require__(5432);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var propertyIsEnumerableModule = __webpack_require__(112);

var toObject = __webpack_require__(1324);

var IndexedObject = __webpack_require__(5044); // eslint-disable-next-line es/no-object-assign -- safe


var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function get() {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

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

/***/ 3130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(2977);

var $getOwnPropertyNames = __webpack_require__(9275).f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
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

/***/ 3060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var classof = __webpack_require__(3058); // `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
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

/***/ 4214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(9624);

var regexpExec = __webpack_require__(8445); // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec


module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ 8445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */

var regexpFlags = __webpack_require__(1118);

var stickyHelpers = __webpack_require__(5230);

var shared = __webpack_require__(7836);

var create = __webpack_require__(3590);

var getInternalState = __webpack_require__(2743).get;

var UNSUPPORTED_DOT_ALL = __webpack_require__(4121);

var UNSUPPORTED_NCG = __webpack_require__(1712);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(str) {
    var re = this;
    var state = getInternalState(re);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ 1118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(2569); // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ 5230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var fails = __webpack_require__(6544); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


var RE = function RE(s, f) {
  return RegExp(s, f);
};

exports.UNSUPPORTED_Y = fails(function () {
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

/***/ }),

/***/ 4121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var re = RegExp('.', (typeof '').charAt(0));
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

/***/ }),

/***/ 1712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(6544);

module.exports = fails(function () {
  // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
  var re = RegExp('(?<a>b)', (typeof '').charAt(5));
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
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

/***/ 7730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(5897);

var definePropertyModule = __webpack_require__(4615);

var wellKnownSymbol = __webpack_require__(3649);

var DESCRIPTORS = __webpack_require__(8494);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  }
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

/***/ 564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(2569);

var aFunction = __webpack_require__(6163);

var wellKnownSymbol = __webpack_require__(3649);

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ 6389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(5089);

var requireObjectCoercible = __webpack_require__(3955); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function createMethod(CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ 8940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(3955);

var whitespaces = __webpack_require__(771);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function createMethod(TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

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

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(8640);

module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ 491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(3649);

exports.f = wellKnownSymbol;

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
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ 771:
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ 1646:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var fails = __webpack_require__(6544);

var isArray = __webpack_require__(4521);

var isObject = __webpack_require__(794);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var createProperty = __webpack_require__(5999);

var arraySpeciesCreate = __webpack_require__(4822);

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var wellKnownSymbol = __webpack_require__(3649);

var V8_VERSION = __webpack_require__(4061);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function isConcatSpreadable(O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) {
          if (k in E) createProperty(A, n, E[k]);
        }
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

/***/ }),

/***/ 1271:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var fill = __webpack_require__(3579);

var addToUnscopables = __webpack_require__(6288); // `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill


$({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $filter = __webpack_require__(4805).filter;

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 7715:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $find = __webpack_require__(4805).find;

var addToUnscopables = __webpack_require__(6288);

var FIND = 'find';
var SKIPS_HOLES = true; // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find

$({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

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

/***/ 2076:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $includes = __webpack_require__(5766).includes;

var addToUnscopables = __webpack_require__(6288); // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes


$({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

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

/***/ 2070:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var $map = __webpack_require__(4805).map;

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 288:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var isObject = __webpack_require__(794);

var isArray = __webpack_require__(4521);

var toAbsoluteIndex = __webpack_require__(6782);

var toLength = __webpack_require__(97);

var toIndexedObject = __webpack_require__(2977);

var createProperty = __webpack_require__(5999);

var wellKnownSymbol = __webpack_require__(3649);

var arrayMethodHasSpeciesSupport = __webpack_require__(9269);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) {
      if (k in O) createProperty(result, n, O[k]);
    }

    result.length = n;
    return result;
  }
});

/***/ }),

/***/ 4486:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var aFunction = __webpack_require__(6163);

var toObject = __webpack_require__(1324);

var toLength = __webpack_require__(97);

var fails = __webpack_require__(6544);

var internalSort = __webpack_require__(5744);

var arrayMethodIsStrict = __webpack_require__(906);

var FF = __webpack_require__(5857);

var IE_OR_EDGE = __webpack_require__(924);

var V8 = __webpack_require__(4061);

var WEBKIT = __webpack_require__(3);

var test = [];
var nativeSort = test.sort; // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function getSortCompare(comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return String(x) > String(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aFunction(comparefn);
    var array = toObject(this);
    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
    var items = [];
    var arrayLength = toLength(array.length);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) {
      array[index] = items[index++];
    }

    while (index < arrayLength) {
      delete array[index++];
    }

    return array;
  }
});

/***/ }),

/***/ 6270:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(6288); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables


addToUnscopables('flatMap');

/***/ }),

/***/ 6016:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var parseInt = __webpack_require__(5407); // `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing


$({
  target: 'Number',
  stat: true,
  forced: Number.parseInt != parseInt
}, {
  parseInt: parseInt
});

/***/ }),

/***/ 4517:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var assign = __webpack_require__(9304); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

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

/***/ 9174:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var DESCRIPTORS = __webpack_require__(8494);

var ownKeys = __webpack_require__(929);

var toIndexedObject = __webpack_require__(2977);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var createProperty = __webpack_require__(5999); // `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


$({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }

    return result;
  }
});

/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(8191);

var redefine = __webpack_require__(1270);

var toString = __webpack_require__(3060); // `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, {
    unsafe: true
  });
}

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

/***/ 3080:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(7263);

var getBuiltIn = __webpack_require__(5897);

var aFunction = __webpack_require__(6163);

var anObject = __webpack_require__(2569);

var isObject = __webpack_require__(794);

var create = __webpack_require__(3590);

var bind = __webpack_require__(1335);

var fails = __webpack_require__(6544);

var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(nativeConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () {
    /* empty */
  });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;
$({
  target: 'Reflect',
  stat: true,
  forced: FORCED,
  sham: FORCED
}, {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ 7390:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(8494);

var global = __webpack_require__(7583);

var isForced = __webpack_require__(4451);

var inheritIfRequired = __webpack_require__(434);

var createNonEnumerableProperty = __webpack_require__(57);

var defineProperty = __webpack_require__(4615).f;

var getOwnPropertyNames = __webpack_require__(9275).f;

var isRegExp = __webpack_require__(7574);

var getFlags = __webpack_require__(1118);

var stickyHelpers = __webpack_require__(5230);

var redefine = __webpack_require__(1270);

var fails = __webpack_require__(6544);

var has = __webpack_require__(4402);

var enforceInternalState = __webpack_require__(2743).enforce;

var setSpecies = __webpack_require__(7730);

var wellKnownSymbol = __webpack_require__(3649);

var UNSUPPORTED_DOT_ALL = __webpack_require__(4121);

var UNSUPPORTED_NCG = __webpack_require__(1712);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g; // "new" should create a new object, old webkit bug

var CORRECT_NEW = new NativeRegExp(re1) !== re1;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
}));

var handleDotAll = function handleDotAll(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      result += chr + string.charAt(++index);
      continue;
    }

    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      }

      result += chr;
    }
  }

  return result;
};

var handleNCG = function handleNCG(string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;

  for (; index <= length; index++) {
    chr = string.charAt(index);

    if (chr === '\\') {
      chr = chr + string.charAt(++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;

      case chr === '(':
        if (IS_NCG.test(string.slice(index + 1))) {
          index += 2;
          ncg = true;
        }

        result += chr;
        groupid++;
        continue;

      case chr === '>' && ncg:
        if (groupname === '' || has(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }

        names[groupname] = true;
        named.push([groupname, groupid]);
        ncg = false;
        groupname = '';
        continue;
    }

    if (ncg) groupname += chr;else result += chr;
  }

  return [result, named];
}; // `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor


if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || pattern instanceof RegExpWrapper) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
    }

    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && flags.indexOf('s') > -1;
      if (dotAll) flags = flags.replace(/s/g, '');
    }

    rawFlags = flags;

    if (UNSUPPORTED_Y && 'sticky' in re1) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);

      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }

      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) {
      /* empty */
    }
    return result;
  };

  var proxy = function proxy(key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function get() {
        return NativeRegExp[key];
      },
      set: function set(it) {
        NativeRegExp[key] = it;
      }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
} // https://tc39.es/ecma262/#sec-get-regexp-@@species


setSpecies('RegExp');

/***/ }),

/***/ 2322:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var exec = __webpack_require__(8445); // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec


$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ 4669:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var redefine = __webpack_require__(1270);

var anObject = __webpack_require__(2569);

var fails = __webpack_require__(6544);

var flags = __webpack_require__(1118);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails(function () {
  return nativeToString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
}); // FF44- RegExp#toString has a wrong name

var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring

if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, {
    unsafe: true
  });
}

/***/ }),

/***/ 3223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var getOwnPropertyDescriptor = __webpack_require__(6683).f;

var toLength = __webpack_require__(97);

var notARegExp = __webpack_require__(9041);

var requireObjectCoercible = __webpack_require__(3955);

var correctIsRegExpLogic = __webpack_require__(3989);

var IS_PURE = __webpack_require__(6268); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


var $endsWith = ''.endsWith;
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}(); // `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith

$({
  target: 'String',
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ 7723:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var notARegExp = __webpack_require__(9041);

var requireObjectCoercible = __webpack_require__(3955);

var correctIsRegExpLogic = __webpack_require__(3989); // `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes


$({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var anObject = __webpack_require__(2569);

var toLength = __webpack_require__(97);

var requireObjectCoercible = __webpack_require__(3955);

var advanceStringIndex = __webpack_require__(6733);

var regExpExec = __webpack_require__(4214); // @@match logic


fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.es/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = requireObjectCoercible(this);
    var matcher = regexp == undefined ? undefined : regexp[MATCH];
    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
  function (string) {
    var res = maybeCallNative(nativeMatch, this, string);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ 3296:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var fails = __webpack_require__(6544);

var anObject = __webpack_require__(2569);

var toLength = __webpack_require__(97);

var toInteger = __webpack_require__(5089);

var requireObjectCoercible = __webpack_require__(3955);

var advanceStringIndex = __webpack_require__(6733);

var getSubstitution = __webpack_require__(4305);

var regExpExec = __webpack_require__(4214);

var wellKnownSymbol = __webpack_require__(3649);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


var REPLACE_KEEPS_$0 = function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
}(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }

  return false;
}();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // @@replace logic

fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
  return [// `String.prototype.replace` method
  // https://tc39.es/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
  function (string, replaceValue) {
    if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
      var res = maybeCallNative(nativeReplace, this, string, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(this);
    var S = String(string);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(783);

var isRegExp = __webpack_require__(7574);

var anObject = __webpack_require__(2569);

var requireObjectCoercible = __webpack_require__(3955);

var speciesConstructor = __webpack_require__(564);

var advanceStringIndex = __webpack_require__(6733);

var toLength = __webpack_require__(97);

var callRegExpExec = __webpack_require__(4214);

var regexpExec = __webpack_require__(8445);

var stickyHelpers = __webpack_require__(5230);

var fails = __webpack_require__(6544);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output.length > lim ? output.slice(0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var rx = anObject(this);
    var S = String(string);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
      var e;

      if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

/***/ }),

/***/ 8407:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description


var $ = __webpack_require__(7263);

var DESCRIPTORS = __webpack_require__(8494);

var global = __webpack_require__(7583);

var has = __webpack_require__(4402);

var isObject = __webpack_require__(794);

var defineProperty = __webpack_require__(4615).f;

var copyConstructorProperties = __webpack_require__(3478);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
NativeSymbol().description !== undefined)) {
  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
    : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;
  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });
  $({
    global: true,
    forced: true
  }, {
    Symbol: SymbolWrapper
  });
}

/***/ }),

/***/ 2004:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(7263);

var global = __webpack_require__(7583);

var getBuiltIn = __webpack_require__(5897);

var IS_PURE = __webpack_require__(6268);

var DESCRIPTORS = __webpack_require__(8494);

var NATIVE_SYMBOL = __webpack_require__(8640);

var USE_SYMBOL_AS_UID = __webpack_require__(7786);

var fails = __webpack_require__(6544);

var has = __webpack_require__(4402);

var isArray = __webpack_require__(4521);

var isObject = __webpack_require__(794);

var anObject = __webpack_require__(2569);

var toObject = __webpack_require__(1324);

var toIndexedObject = __webpack_require__(2977);

var toPrimitive = __webpack_require__(2670);

var createPropertyDescriptor = __webpack_require__(4677);

var nativeObjectCreate = __webpack_require__(3590);

var objectKeys = __webpack_require__(5432);

var getOwnPropertyNamesModule = __webpack_require__(9275);

var getOwnPropertyNamesExternal = __webpack_require__(3130);

var getOwnPropertySymbolsModule = __webpack_require__(4012);

var getOwnPropertyDescriptorModule = __webpack_require__(6683);

var definePropertyModule = __webpack_require__(4615);

var propertyIsEnumerableModule = __webpack_require__(112);

var createNonEnumerableProperty = __webpack_require__(57);

var redefine = __webpack_require__(1270);

var shared = __webpack_require__(7836);

var sharedKey = __webpack_require__(9137);

var hiddenKeys = __webpack_require__(4639);

var uid = __webpack_require__(8284);

var wellKnownSymbol = __webpack_require__(3649);

var wrappedWellKnownSymbolModule = __webpack_require__(491);

var defineWellKnownSymbol = __webpack_require__(2219);

var setToStringTag = __webpack_require__(8821);

var InternalStateModule = __webpack_require__(2743);

var $forEach = __webpack_require__(4805).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function get() {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function wrap(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function setter(value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
      configurable: true,
      set: setter
    });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });

    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
        unsafe: true
      });
    }
  }
}

$({
  global: true,
  wrap: true,
  forced: !NATIVE_SYMBOL,
  sham: !NATIVE_SYMBOL
}, {
  Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
$({
  target: SYMBOL,
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function _for(key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function useSetter() {
    USE_SETTER = true;
  },
  useSimple: function useSimple() {
    USE_SETTER = false;
  }
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL,
  sham: !DESCRIPTORS
}, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
  target: 'Object',
  stat: true,
  forced: !NATIVE_SYMBOL
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

$({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    getOwnPropertySymbolsModule.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  $({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) {
        args.push(arguments[index++]);
      }

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

/***/ }),

/***/ 1662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(3080);

__webpack_require__(5677);

__webpack_require__(7390);

__webpack_require__(3296);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Clan = exports.ClanError = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(8833);

__webpack_require__(2070);

__webpack_require__(6016);

__webpack_require__(7715);

__webpack_require__(4486);

__webpack_require__(1646);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _utils = __webpack_require__(8588);

var _class;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  _inherits(BabelRegExp, RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;

        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
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

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ClanError = /*#__PURE__*/function (_Error) {
  _inherits(ClanError, _Error);

  var _super = _createSuper(ClanError);

  function ClanError(message, reason) {
    var _this;

    _classCallCheck(this, ClanError);

    _this = _super.call(this, message);

    _defineProperty(_assertThisInitialized(_this), "reason", void 0);

    _this.reason = reason;
    Object.setPrototypeOf(_assertThisInitialized(_this), ClanError.prototype);
    return _this;
  }

  return ClanError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // It would be fantastic to have this function properly typed
// But until someone can work out how to do it, it gets the
// comment blocks of shame

/* eslint-disable */


exports.ClanError = ClanError;

function validate(target, propertyName, descriptor) {
  if (!(descriptor !== null && descriptor !== void 0 && descriptor.value)) return;
  var method = descriptor.value; // @ts-ignore

  descriptor.value = function () {
    // @ts-ignore
    if (this.id !== (0, _kolmafia.getClanId)()) {
      throw new Error("You are no longer a member of this clan");
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(this, args);
  };
}
/* eslint-enable */


var clanIdCache = {};

var toPlayerId = player => typeof player === "string" ? (0, _kolmafia.getPlayerId)(player) : player;

var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/([0-9]{2}\/[0-9]{2}\/[0-9]{2}, [0-9]{2}:[0-9]{2}(?:AM|PM): )<a (?:(?!>)[\s\S])+>((?:(?!<)[\s\S])+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});

var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0([0-9]+)\)/, {
  name: 1,
  degree: 2
});

var Clan = (_class = /*#__PURE__*/function () {
  function Clan(id, name) {
    _classCallCheck(this, Clan);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    this.id = id;
    this.name = name;
  }
  /**
   * Join clan
   */


  _createClass(Clan, [{
    key: "join",
    value: function join() {
      return Clan._join(this.id);
    }
  }, {
    key: "check",
    value: function check() {
      return (0, _kolmafia.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      var logs = (0, _kolmafia.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;

      var _lastFax = _slicedToArray(lastFax, 4),
          monsterName = _lastFax[3];

      if (!monsterName) return null;
      return Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     */

  }, {
    key: "getRanks",
    value: function getRanks() {
      var page = (0, _kolmafia.visitUrl)("clan_whitelist.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, _kolmafia.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, _kolmafia.xpath)(validHtml, "//@value")[0];
        if (!match || !id) return null;

        var _match = _slicedToArray(match, 3),
            name = _match[1],
            degree = _match[2];

        return {
          name: name,
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(_utils.notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     */

  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     * @param player Player id or name
     */

  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      var playerId = toPlayerId(player);
      var result = (0, _kolmafia.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer.
     */

  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      var page = (0, _kolmafia.visitUrl)("clan_stash.php");

      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
          _ref2 = _slicedToArray(_ref, 2),
          meat = _ref2[1];

      return (0, _utils.parseNumber)(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     * @param amount Amount of meat to put in coffer
     */

  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      var result = (0, _kolmafia.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
    /**
     * Take items from the stash
     *
     * This function will also take equivalent foldables if the original item cannot be found
     *
     * @param items Items to take
     * @returns Items successfully taken
     */

  }, {
    key: "take",
    value: function take(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - (0, _kolmafia.availableAmount)(item));

        if (needed === 0) {
          return map.set(item, 0);
        }

        var foldGroup = (0, _lib.getFoldGroup)(item);

        var _iterator = _createForOfIteratorHelper(foldGroup),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, _kolmafia.availableAmount)(foldable));

            for (var _i3 = 0; _i3 < quantityToFold; _i3++) {
              (0, _kolmafia.cliExecute)("fold ".concat(item.name));
              needed--;
            }

            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        (0, _kolmafia.refreshStash)();

        for (var _i2 = 0, _arr2 = [item].concat(_toConsumableArray(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2];
          var quantityToTake = Math.min(needed, (0, _kolmafia.stashAmount)(matchingItem));
          if (quantityToTake === 0) continue; // If we can't take from the stash, there's no sense in iterating through the whole fold group

          if (!(0, _kolmafia.takeStash)(quantityToTake, matchingItem)) return;

          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, _kolmafia.cliExecute)("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Put items in the stash
     * @param items Items to put in the stash
     * @returns Items successfully put in the stash
     */

  }, {
    key: "put",
    value: function put(items) {
      var map = (0, _utils.arrayToCountedMap)(items);
      if (!this.check()) throw new Error("Wanted to return ".concat((0, _utils.countedMapToString)(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        (0, _kolmafia.retrieveItem)(quantity, item);
        var returned = Math.min(quantity, (0, _kolmafia.availableAmount)(item));
        (0, _kolmafia.putStash)(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? (0, _utils.countedMapToArray)(map) : map;
    }
    /**
     * Return the monster that is currently in the current clan's fax machine if any
     */

  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      var map = (0, _utils.arrayToCountedMap)(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = (0, _kolmafia.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));

      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }

      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = (0, _utils.arrayToCountedMap)(borrowed);

      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = (0, _utils.arrayToCountedMap)(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);

            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });

          if (map.size > 0) {
            _logger.default.error("Failed to return <b>".concat((0, _utils.countedMapToString)(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan and return its instance
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;

      if (typeof clanIdOrName === "string") {
        var _clanName = clanIdOrName.toLowerCase();

        if (_clanName === (0, _kolmafia.getClanName)().toLowerCase()) {
          return Clan.get();
        }

        if (!(_clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === _clanName);

          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }

          clanIdCache[_clanName] = clan.id;
        }

        clanId = clanIdCache[_clanName];
      } else {
        clanId = clanIdOrName;

        if (clanId === (0, _kolmafia.getClanId)()) {
          return Clan.get();
        }
      }

      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan
     * and then restore prior membership
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);

      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
    /**
     * Execute callback with items from a clan stash
     * and then restore those items to the stash
     *
     * During the execution of the callback, player will not be in the stash clan
     *
     * @param clanIdOrName Clan id or name
     */

  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items, // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Return player's current Clan
     */

  }, {
    key: "get",
    value: function get() {
      return new Clan((0, _kolmafia.getClanId)(), (0, _kolmafia.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     */

  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, _kolmafia.visitUrl)("clan_signup.php");
      return (0, _kolmafia.xpath)(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, _kolmafia.xpath)(validHtml, "//@value")[0]);
        var name = (0, _kolmafia.xpath)(validHtml, "//text()")[0];
        return new Clan(id, name);
      });
    }
  }]);

  return Clan;
}(), (_applyDecoratedDescriptor(_class.prototype, "getCurrentFax", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getCurrentFax"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getRanks", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getRanks"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addPlayerToWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "addPlayerToWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removePlayerFromWhitelist", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "removePlayerFromWhitelist"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "getMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "putMeatInCoffer", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "putMeatInCoffer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "take", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "take"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "put", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "put"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "withStash", [validate], Object.getOwnPropertyDescriptor(_class.prototype, "withStash"), _class.prototype)), _class);
exports.Clan = Clan;

/***/ }),

/***/ 3425:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Copier = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Copier = function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck(this, Copier);

  _defineProperty(this, "couldCopy", void 0);

  _defineProperty(this, "prepare", void 0);

  _defineProperty(this, "canCopy", void 0);

  _defineProperty(this, "copiedMonster", void 0);

  _defineProperty(this, "fightCopy", null);

  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
} // static PrintScreenButton = new Copier(
//   $item`print screen button`,
//   null,
//   $item`screencapped monster`,
//   () => property.getMonster(`screencappedMonster`),
//   () => 1,
//   () => use($item`screencapped monster`)
// );
// static PulledGreenTaffy = new Copier(
//   $item`pulled green taffy`,
//   null,
//   $item`envyfish egg`,
//   () => property.getMonster(`screencappedMonster`),
//   () => (property.getBoolean("_envyfishEggUsed") ? 0 : 1),
//   () => use($item`envyfish egg`)
// );
;

exports.Copier = Copier;

/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dreadsylvania = exports.SlimeTube = exports.Hobopolis = exports.default = void 0;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(1646);

__webpack_require__(288);

var _kolmafia = __webpack_require__(1664);

var _Clan = __webpack_require__(1662);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Dungeon = /*#__PURE__*/function () {
  /**
   * Creates dungeon object for managing clan dungeons
   * @param name Name of the dungeon in question
   * @param loot Distributable loot dropped by bosses in dungeon
   * @param openAction String action used in form submission to open dungeon
   * @param closeAction String action used in form submission to close dungeon
   * @param openCost Meat cost of opening dungeon
   * @param openImage Image text to search clan_basement.php for to check if dungeon is open
   * @param closedImage Image text to search clan_basement.php for to check if dungeon is closed
   */
  function Dungeon(name, loot, openAction, closeAction, openCost, openImage, closedImage) {
    _classCallCheck(this, Dungeon);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "loot", void 0);

    _defineProperty(this, "openAction", void 0);

    _defineProperty(this, "closeAction", void 0);

    _defineProperty(this, "openCost", void 0);

    _defineProperty(this, "openImage", void 0);

    _defineProperty(this, "closedImage", void 0);

    this.name = name;
    this.loot = loot;
    this.openAction = openAction;
    this.closeAction = closeAction;
    this.openCost = openCost;
    this.openImage = openImage;
    this.closedImage = closedImage;
  }
  /**
   * Distributes loot from given dungeon
   * @param idOrName The player you're trying to distribute to, either as a username or a player ID. Defaults to self.
   * @param loot The loot you're looking to distribute, specific to this dungeon
   * @param distributeAllOfAGivenItem For items that you can get multiple of in a dungeon. When true, this will give everything of that ilk to your chosen player.
   */


  _createClass(Dungeon, [{
    key: "distribute",
    value: function distribute() {
      var idOrName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _kolmafia.myId)();
      var loot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.loot;
      var distributeAllOfAGivenItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var player = (0, _lib.getPlayerFromIdOrName)(idOrName);
      var lootList = Array.isArray(loot) ? loot : [loot];
      var badLoot = lootList.find(lootItem => !this.loot.includes(lootItem));

      if (badLoot) {
        throw new Error("".concat(badLoot, " is not a valid piece of dungeon loot"));
      }

      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");

      if (!pageText.match(player.name)) {
        throw new Error("".concat(player.name, " cannot be distributed loot from ").concat((0, _kolmafia.getClanName)()));
      }

      var itemNames = (0, _kolmafia.xpath)(pageText, "//tr/td[2]/b/text()");
      var whichLoots = (0, _kolmafia.xpath)(pageText, '//form[@action="clan_basement.php"]//input[@type="hidden"][@name="whichloot"]/@value');
      itemNames.forEach((itemName, index) => {
        if (lootList.includes((0, _kolmafia.toItem)(itemName))) {
          (0, _kolmafia.visitUrl)("clan_basement.php?whichloot=".concat(whichLoots[index], "&recipient=").concat(player.id));
          if (!distributeAllOfAGivenItem) lootList.slice(lootList.indexOf((0, _kolmafia.toItem)(itemName)));
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.closeAction, "&confirm=true"), true);
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      return pageText.includes(this.closedImage);
    }
    /**
     * Opens clan dungeon and, if relevant, pays meat to do so
     * @param paymentPolicy "None", "All", or "Difference". Difference pays into the stash the exact amount needed to open the dungeon.
     */

  }, {
    key: "open",
    value: function open() {
      var paymentPolicy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Difference";
      var pageText = (0, _kolmafia.visitUrl)("clan_basement.php");
      if (pageText.includes(this.openImage)) return true;

      var clan = _Clan.Clan.get();

      if (paymentPolicy === "All") {
        clan.putMeatInCoffer(this.openCost);
      } else {
        var stashMeat = clan.getMeatInCoffer();
        var payDifference = this.openCost - stashMeat;

        if (payDifference > 0) {
          if (paymentPolicy === "None") return false;
          clan.putMeatInCoffer(payDifference);
        }
      }

      (0, _kolmafia.visitUrl)("clan_basement.php?action=".concat(this.openAction), true);
      return (0, _kolmafia.visitUrl)("clan_basement.php").includes(this.openImage);
    }
  }], [{
    key: "all",
    value: function all() {
      return [Hobopolis, SlimeTube, Dreadsylvania];
    }
  }]);

  return Dungeon;
}();

exports.default = Dungeon;
var Hobopolis = new Dungeon("Hobopolis", (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Ol' Scratch's ash can, Ol' Scratch's ol' britches, Ol' Scratch's stovepipe hat, Ol' Scratch's infernal pitchfork, Ol' Scratch's manacles, Ol' Scratch's stove door, Frosty's carrot, Frosty's nailbat, Frosty's old silk hat, Frosty's arm, Frosty's iceball, Frosty's snowball sack, Oscus's dumpster waders, Oscus's pelt, Wand of Oscus, Oscus's flypaper pants, Oscus's garbage can lid, Oscus's neverending soda, Zombo's grievous greaves, Zombo's shield, Zombo's skullcap, Zombo's empty eye, Zombo's shoulder blade, Zombo's skull ring, Chester's bag of candy, Chester's cutoffs, Chester's moustache, Chester's Aquarius medallion, Chester's muscle shirt, Chester's sunglasses, Hodgman's bow tie, Hodgman's porkpie hat, Hodgman's lobsterskin pants, Hodgman's almanac, Hodgman's lucky sock, Hodgman's metal detector, Hodgman's varcolac paw, Hodgman's harmonica, Hodgman's garbage sticker, Hodgman's cane, Hodgman's whackin' stick, Hodgman's disgusting technicolor overcoat, Hodgman's imaginary hamster"]))), "cleansewer", "floodsewer", 1000000, "opengrate.gif", "sewergrate.gif");
exports.Hobopolis = Hobopolis;
var SlimeTube = new Dungeon("The Slime Tube", (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["slime-soaked brain, slime-soaked hypophysis, slime-soaked sweat gland, squirming Slime larva, caustic slime nodule, caustic slime nodule, hardened slime belt, hardened slime hat, hardened slime pants"]))), "cleanspot", "sealtube", 250000, "slimehole.gif", "greasespot.gif");
exports.SlimeTube = SlimeTube;
var Dreadsylvania = new Dungeon("Dreadsylvania", (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Great Wolf's headband, Great Wolf's right paw, Great Wolf's left paw, Great Wolf's lice, Great Wolf's rocket launcher, Great Wolf's beastly trousers, Drapes-You-Regally, Warms-Your-Tush, Covers-Your-Head, Protects-Your-Junk, Quiets-Your-Steps, Helps-You-Sleep, Mayor Ghost's khakis, Mayor Ghost's cloak, Mayor Ghost's toupee, Mayor Ghost's scissors, Mayor Ghost's sash, Mayor Ghost's gavel, zombie mariachi hat, zombie accordion, zombie mariachi pants, HOA regulation book, HOA zombie eyes, HOA citation pad, Unkillable Skeleton's skullcap, Unkillable Skeleton's shinguards, Unkillable Skeleton's breastplate, Unkillable Skeleton's shield, Unkillable Skeleton's sawsword, Unkillable Skeleton's restless leg, skull capacitor, Thunkula's drinking cap, Drunkula's silky pants, Drunkula's cape, Drunkula's ring of haze, Drunkula's wineglass, Drunkula's bell, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, bottle of Bloodweiser, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, electric Kool-Aid, ghost pepper, ghost pepper, ghost pepper, ghost pepper, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, Gets-You-Drunk, wriggling severed nose, wriggling severed nose, wriggling severed nose, wriggling severed nose, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce, Hunger\u2122 Sauce"]))), "translatemap", "foldmap", 1000000, "dvmap.gif", "foldmap.gif");
exports.Dreadsylvania = Dreadsylvania;

/***/ }),

/***/ 9477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(2070);

__webpack_require__(6737);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(8833);

__webpack_require__(1646);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _utils = __webpack_require__(8588);

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Kmail = /*#__PURE__*/function () {
  function Kmail(rawKmail) {
    _classCallCheck(this, Kmail);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "date", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "senderId", void 0);

    _defineProperty(this, "senderName", void 0);

    _defineProperty(this, "message", void 0);

    this.id = Number(rawKmail.id);
    this.date = new Date(rawKmail.localtime);
    this.type = rawKmail.type;
    this.senderId = Number(rawKmail.fromid);
    this.senderName = rawKmail.fromname;
    this.message = rawKmail.message;
  }
  /**
   * Delete the kmail
   *
   * @returns Whether the kmail was deleted
   */


  _createClass(Kmail, [{
    key: "delete",
    value: function _delete() {
      return Kmail.delete([this]) === 1;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */

  }, {
    key: "items",
    value: function items() {
      return new Map(Object.entries((0, _kolmafia.extractItems)(this.message)).map(_ref => {
        var _ref2 = _slicedToArray(_ref, 2),
            itemName = _ref2[0],
            quantity = _ref2[1];

        return [Item.get(itemName), quantity];
      }));
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */

  }, {
    key: "meat",
    value: function meat() {
      return (0, _kolmafia.extractMeat)(this.message);
    }
    /**
     * Reply to kmail
     *
     * @see Kmail.send
     *
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "reply",
    value: function reply() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var meat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Kmail.send(this.senderId, message, items, meat);
    }
  }], [{
    key: "parse",
    value:
    /**
     * Parses a kmail from KoL's native format
     *
     * @param rawKmail Kmail in the format supplies by api.php
     * @returns Parsed kmail
     */
    function parse(rawKmail) {
      return new Kmail(rawKmail);
    }
    /**
     * Returns all of the player's kmails
     *
     * @returns Parsed kmails
     */

  }, {
    key: "inbox",
    value: function inbox() {
      return JSON.parse((0, _kolmafia.visitUrl)("api.php?what=kmail&for=ASSistant")).map(Kmail.parse);
    }
    /**
     * Bulk delete kmails
     *
     * @param kmails Kmails to delete
     * @returns Number of kmails deleted
     */

  }, {
    key: "delete",
    value: function _delete(kmails) {
      var _results$match$, _results$match;

      var results = (0, _kolmafia.visitUrl)("messages.php?the_action=delete&box=Inbox&pwd&".concat(kmails.map(k => "sel".concat(k.id, "=on")).join("&")));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function _genericSend(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat;

      var sendableItems = _toConsumableArray((0, _utils.arrayToCountedMap)(items).entries()).filter(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 1),
            item = _ref4[0];

        return (0, _kolmafia.isGiftable)(item);
      });

      var result = true;
      var chunks = (0, _utils.chunk)(sendableItems, chunkSize); // Split the items to be sent into chunks of max 11 item types

      var _iterator = _createForOfIteratorHelper(chunks.length > 0 ? chunks : [null]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;

          var _itemsQuery = c === null ? [] : c.map((_ref5, index) => {
            var _ref6 = _slicedToArray(_ref5, 2),
                item = _ref6[0],
                quantity = _ref6[1];

            return "whichitem".concat(index + 1, "=").concat((0, _kolmafia.toInt)(item), "&howmany").concat(index + 1, "=").concat(quantity);
          });

          var r = (0, _kolmafia.visitUrl)(constructUrl(m, _itemsQuery.join("&"), _itemsQuery.length));

          if (r.includes("That player cannot receive Meat or items")) {
            return Kmail.gift(to, message, items, meat);
          } // Make sure we don't send the same batch of meat with every chunk


          m = 0;
          result && (result = r.includes(successString));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * Sends a kmail to a player
     *
     * Sends multiple kmails if more than 11 unique item types are attached.
     * Ignores any ungiftable items.
     * Sends a gift package to players in run
     *
     * @param to The player name or id to receive the kmail
     * @param message The text contents of the message
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @returns True if the kmail was successfully sent
     */

  }, {
    key: "send",
    value: function send(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return Kmail._genericSend(to, message, items, meat, 11, (meat, itemsQuery) => "sendmessage.php?action=send&pwd&towho=".concat(to, "&message=").concat(message).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(meat), ">Message sent.</");
    }
    /**
     * Sends a gift to a player
     *
     * Sends multiple kmails if more than 3 unique item types are attached.
     * Ignores any ungiftable items.
     *
     * @param to The player name or id to receive the gift
     * @param note The note on the outside of the gift
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @param insideNode The note on the inside of the gift
     * @returns True if the gift was successfully sent
     */

  }, {
    key: "gift",
    value: function gift(to) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var meat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var insideNote = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      var baseUrl = "town_sendgift.php?action=Yep.&pwd&fromwhere=0&note=".concat(message, "&insidenote=").concat(insideNote, "&towho=").concat(to);
      return Kmail._genericSend(to, message, items, meat, 3, (m, itemsQuery, chunkSize) => "".concat(baseUrl, "&whichpackage=").concat(chunkSize).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(m), ">Package sent.</");
    }
  }]);

  return Kmail;
}();

exports.default = Kmail;

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paths = exports.Path = void 0;

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Path = //here, we define avatar-ness around being its own class
//Defined as the lowest inebriety that makes you unable to drink more, just to make it fifteens across the board

/**
 *
 * @param name Name of path
 * @param id Path ID
 * @param hasAllPerms Does the player have immediate access to all permed skills>
 * @param hasCampground Does the player have access to the campground?
 * @param hasTerrarium Does the player have access to terrarium.php
 * @param stomachSize Maximum fullness achievable at turn 0
 * @param liverSize The lowest inebriety that makes you unable to drink more
 * @param spleenSize Maximum spleen achievable at turn 0
 * @param classes Classes available in this path
 */
function Path(name, id) {
  var hasAllPerms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var hasCampground = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var hasTerrarium = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var stomachSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 15;
  var liverSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 15;
  var spleenSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 15;
  var classes = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : (0, _templateString.$classes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Sauceror, Pastamancer, Disco Bandit, Accordion Thief"])));

  _classCallCheck(this, Path);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "hasAllPerms", void 0);

  _defineProperty(this, "hasCampground", void 0);

  _defineProperty(this, "hasTerrarium", void 0);

  _defineProperty(this, "stomachSize", void 0);

  _defineProperty(this, "liverSize", void 0);

  _defineProperty(this, "spleenSize", void 0);

  _defineProperty(this, "classes", void 0);

  this.name = name;
  this.id = id;
  this.hasAllPerms = hasAllPerms;
  this.hasCampground = hasCampground;
  this.hasTerrarium = hasTerrarium;
  this.stomachSize = stomachSize;
  this.liverSize = liverSize;
  this.spleenSize = spleenSize;
  this.classes = classes;
};

exports.Path = Path;
var Paths = {
  Unrestricted: new Path("Unrestricted", 0),
  Boozetafarian: new Path("Boozetafarian", 1, false, true, true, 0),
  Teetotaler: new Path("Teetotaler", 2, false, true, true, 15, 0),
  Oxygenarian: new Path("Oxygenarian", 3, false, true, true, 0, 0),
  BeesHateYou: new Path("Bees Hate You", 4),
  WayOfTheSurprisingFist: new Path("Way of the Surprising Fist", 6),
  Trendy: new Path("Trendy", 6),
  AvatarOfBoris: new Path("Avatar of Boris", 8, false, true, false, 20, 5, 15, (0, _templateString.$classes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Avatar of Boris"])))),
  BugbearInvasion: new Path("Bugbear Invasion", 9),
  ZombieSlayer: new Path("Zombie Slayer", 10, false, true, true, 15, 5, 15, (0, _templateString.$classes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Zombie Master"])))),
  ClassAct: new Path("Class Act", 11, false),
  AvatarofJarlsberg: new Path("Avatar of Jarlsberg", 12, false, true, false, 10, 10, 15, (0, _templateString.$classes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Avatar of Jarlsberg"])))),
  Big: new Path("BIG!", 14),
  KolHs: new Path("KOLHS", 15),
  ClassAct2: new Path("Class Act II: A Class For Pigs", 16, false),
  AvatarofSneakyPete: new Path("Avatar of Sneaky Pete", 17, false, true, false, 5, 20, 15, (0, _templateString.$classes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Avatar of Sneaky Pete"])))),
  SlowAndSteady: new Path("Slow and Steady", 18),
  HeavyRains: new Path("Heavy Rains", 19),
  Picky: new Path("Picky", 21, false),
  Standard: new Path("Standard", 22),
  ActuallyEdTheUndying: new Path("Actually Ed the Undying", 23, false, false, false, 0, 0, 5, (0, _templateString.$classes)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Ed"])))),
  OneCrazyRandomSummer: new Path("One Crazy Random Summer", 24),
  CommunityService: new Path("Community Service", 25),
  AvatarOfWestOfLoathing: new Path("Avatar of West of Loathing", 26, false, true, true, 10, 10, 10, (0, _templateString.$classes)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Cow Puncher, Snake Oiler, Beanslinger"])))),
  TheSource: new Path("The Source", 27),
  NuclearAutumn: new Path("Nuclear Autumn", 28, false, false, true, 3, 3, 3),
  GelatinousNoob: new Path("Gelatinous Noob", 29, false, true, true, 0, 0, 0, (0, _templateString.$classes)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Gelatinous Noob"])))),
  LicenseToAdventure: new Path("License to Adventure", 30, true, true, false, 0, 2, 15),
  //Unsure how to log liver size here
  LiveAscendRepeat: new Path("Live. Ascend. Repeat.", 31),
  PocketFamiliars: new Path("Pocket Familiars", 32, false, true, false),
  //This is my opinion on the matter
  GLover: new Path("G-Lover", 33),
  DisguisesDelimit: new Path("Disguises Delimit", 34),
  DarkGyffte: new Path("Dark Gyffte", 35, false, true, false, 5, 5, 15, (0, _templateString.$classes)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Vampyre"])))),
  TwoCrazyRandomSummer: new Path("Two Crazy Random Summer", 36),
  KingdomOfExploathing: new Path("Kingdom of Exploathing", 37),
  PathOfThePlumber: new Path("Path of the Plumber", 38, false, true, true, 20, 0, 5, (0, _templateString.$classes)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Plumber"])))),
  LowKeySummer: new Path("Low Key Summer", 40),
  GreyGoo: new Path("Grey Goo", 40),
  YouRobot: new Path("You, Robot", 41, false, false, true, 0, 0, 0),
  QuantumTerrarium: new Path("Quantum Terrarium", 42, true, true, false),
  Wildfire: new Path("Wildfire", 43)
};
exports.Paths = Paths;

/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ascend = ascend;
exports.prepareAscension = prepareAscension;
exports.Lifestyle = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(1646);

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _resources = __webpack_require__(1895);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Lifestyle;
exports.Lifestyle = Lifestyle;

(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle || (exports.Lifestyle = Lifestyle = {}));

function toMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;

  var offset = () => {
    switch (playerClass.primestat) {
      case (0, _templateString.$stat)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Muscle"]))):
        return 0;

      case (0, _templateString.$stat)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Mysticality"]))):
        return 1;

      case (0, _templateString.$stat)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Moxie"]))):
        return 2;

      default:
        throw "unknown prime stat for ".concat(playerClass);
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
      return -1;
  }
}
/**
 * Hops the gash, perming no skills
 * @param path path of choice, as a Path object--these exist as properties of Paths
 * @param playerClass Your class of choice for this ascension
 * @param lifestyle 1 for casual, 2 for softcore, 3 for hardcore. Alternately, use the Lifestyle enum
 * @param moon Your moon sign as a string, or the zone you're looking for as a string
 * @param consumable From the astral deli. Pick the container item, not the product.
 * @param pet From the astral pet store.
 */


function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) {
    (0, _kolmafia.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }

  if (!(0, _kolmafia.containsText)((0, _kolmafia.visitUrl)("charpane.php"), "Astral Spirit")) throw "Failed to ascend.";
  if (!path.classes.includes(playerClass)) throw "Invalid class ".concat(playerClass, " for this path");
  if (path.id < 0) throw "Invalid path ID ".concat(path.id);
  var moonId = toMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw "Invalid moon ".concat(moon);
  if (consumable && !(0, _templateString.$items)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["astral six-pack, astral hot dog dinner"]))).includes(consumable)) throw "Invalid consumable ".concat(consumable);
  if (pet && !(0, _templateString.$items)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) throw "Invalid astral item ".concat(pet);
  (0, _kolmafia.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) (0, _kolmafia.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat((0, _kolmafia.toInt)(consumable)));
  if (pet) (0, _kolmafia.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat((0, _kolmafia.toInt)(pet)));
  (0, _kolmafia.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat((0, _kolmafia.toInt)(playerClass), "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&pwd"), true);
}

var worksheds = (0, _templateString.$items)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["warbear LP-ROM burner, warbear jackhammer drill press, warbear induction oven, warbear high-efficiency still, warbear chemistry lab, warbear auto-anvil, spinning wheel, snow machine, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, Asdon Martin keyfob, diabolic pizza cube"])));
var gardens = (0, _templateString.$items)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores"]))); // eslint-disable-next-line libram/verify-constants

var eudorae = (0, _templateString.$items)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["My Own Pen Pal kit, GameInformPowerDailyPro subscription card, Xi Receiver Unit, New-You Club Membership Form, Our Daily Candles\u2122 order form"])));
var desks = (0, _templateString.$items)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));
/**
 * Sets up various iotms you may want to use in the coming ascension
 * @param ascensionItems An object potentially containing your workshed, garden, and eudora, all as items
 * @param chateauItems An object potentially containing your chateau desk, ceiling, and nightstand, all as items
 * @param throwOnFail If true, this will throw an error when it fails to switch something
 */

function prepareAscension(ascensionItems, chateauItems) {
  var throwOnFail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (ascensionItems) {
    if (ascensionItems.workshed && (0, _kolmafia.getWorkshed)() !== ascensionItems.workshed) {
      if (!worksheds.includes(ascensionItems.workshed) && throwOnFail) throw "Invalid workshed: ".concat(ascensionItems.workshed, "!");else if (!(0, _lib.have)(ascensionItems.workshed) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.workshed, ". Which makes it REALLY hard for us to plop one into your workshed.");else if ((0, _property.get)("_workshedItemUsed") && throwOnFail) throw "Seems like you've already swapped your workshed, buddy.";else (0, _kolmafia.use)(ascensionItems.workshed);
      if ((0, _kolmafia.getWorkshed)() !== ascensionItems.workshed && throwOnFail) throw "We really thought we changed your workshed to a ".concat(ascensionItems.workshed, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.garden && !Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name)) {
      if (!gardens.includes(ascensionItems.garden) && throwOnFail) throw "Invalid garden: ".concat(ascensionItems.garden, "!");else if (!(0, _lib.have)(ascensionItems.garden) && throwOnFail) throw "I'm sorry buddy, but you don't seem to own a ".concat(ascensionItems.garden, ". Which makes it REALLY hard for us to plant one into your garden.");else (0, _kolmafia.use)(ascensionItems.garden);
      if (!Object.getOwnPropertyNames((0, _kolmafia.getCampground)()).includes(ascensionItems.garden.name) && throwOnFail) throw "We really thought we changed your garden to a ".concat(ascensionItems.garden, ", but Mafia is saying otherwise.");
    }

    if (ascensionItems.eudora && (0, _kolmafia.eudoraItem)() !== ascensionItems.eudora) {
      if (!eudorae.includes(ascensionItems.eudora) && throwOnFail) throw "Invalid eudora: ".concat(ascensionItems.eudora, "!");
      var eudoraNumber = 1 + eudorae.indexOf(ascensionItems.eudora);
      if (!(0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) throw "I'm sorry buddy, but you don't seem to be subscribed to ".concat(ascensionItems.eudora, ". Which makes it REALLY hard to correspond with them.");else (0, _kolmafia.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
      if ((0, _kolmafia.eudoraItem)() !== ascensionItems.eudora && throwOnFail) throw "We really thought we chaned your eudora to a ".concat(ascensionItems.eudora, ", but Mafia is saying otherwise.");
    }
  }

  if (chateauItems && _resources.ChateauMantegna.have()) {
    if (chateauItems.ceiling && _resources.ChateauMantegna.getCeiling() !== chateauItems.ceiling) {
      if (!ceilings.includes(chateauItems.ceiling) && throwOnFail) throw "Invalid chateau ceiling: ".concat(chateauItems.ceiling, "!");else if (!_resources.ChateauMantegna.changeCeiling(chateauItems.ceiling) && throwOnFail) throw "We tried, but were unable to change your chateau ceiling to ".concat(chateauItems.ceiling, ". Probably.");
    }

    if (chateauItems.desk && _resources.ChateauMantegna.getDesk() !== chateauItems.desk) {
      if (!desks.includes(chateauItems.desk) && throwOnFail) throw "Invalid chateau desk: ".concat(chateauItems.desk, "!");else if (!_resources.ChateauMantegna.changeDesk(chateauItems.desk) && throwOnFail) throw "We tried, but were unable to change your chateau desk to ".concat(chateauItems.desk, ". Probably.");
    }

    if (chateauItems.nightstand && _resources.ChateauMantegna.getNightstand() !== chateauItems.nightstand) {
      if (!nightstands.includes(chateauItems.nightstand) && throwOnFail) throw "Invalid chateau nightstand: ".concat(chateauItems.nightstand, "!");else if (!_resources.ChateauMantegna.changeNightstand(chateauItems.nightstand) && throwOnFail) throw "We tried, but were unable to change your chateau nightstand to ".concat(chateauItems.nightstand, ". Probably.");
    }
  }
}

/***/ }),

/***/ 1762:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMacroId = getMacroId;
exports.adventureMacro = adventureMacro;
exports.adventureMacroAuto = adventureMacroAuto;
exports.Macro = void 0;

__webpack_require__(2070);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(2322);

__webpack_require__(5017);

__webpack_require__(1646);

__webpack_require__(8833);

__webpack_require__(9268);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name Script Autoattack Macro.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */

function getMacroId() {
  var macroMatches = (0, _kolmafia.xpath)((0, _kolmafia.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(MACRO_NAME, "\"]/@value"));

  if (macroMatches.length === 0) {
    (0, _kolmafia.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(MACRO_NAME, "&macrotext=abort&action=save"));
    return parseInt((0, _kolmafia.xpath)(newMacroText, "//input[@name=macroid]/@value")[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}

function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? Item.get(itemOrName) : itemOrName;
}

var substringCombatItems = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom"])));
var substringCombatSkills = (0, _templateString.$skills)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow"])));

function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ? item.name : (0, _kolmafia.toInt)(item).toString();
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
    return Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !substringCombatSkills.includes(skill) ? skill.name : (0, _kolmafia.toInt)(skill);
}
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */


var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);

    _defineProperty(this, "components", []);
  }

  _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */

  }, {
    key: "save",
    value: function save() {
      (0, _property.set)(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     */

  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref;

      for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {
        nextSteps[_key] = arguments[_key];
      }

      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));

      this.components = [].concat(_toConsumableArray(this.components), _toConsumableArray(nextStepsStrings.filter(s => s.length > 0)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var final = this.toString();
      return (0, _kolmafia.visitUrl)("fight.php?action=macro&macrotext=".concat((0, _kolmafia.urlEncode)(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */

  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      if (Macro.cachedMacroId === null) Macro.cachedMacroId = getMacroId();

      if ((0, _kolmafia.getAutoAttack)() === 99000000 + Macro.cachedMacroId && this.toString() === Macro.cachedAutoAttack) {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0, _kolmafia.visitUrl)("account_combatmacros.php?macroid=".concat(Macro.cachedMacroId, "&name=").concat((0, _kolmafia.urlEncode)(MACRO_NAME), "&macrotext=").concat((0, _kolmafia.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, _kolmafia.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99000000 + Macro.cachedMacroId, "&ajax=1"));
      Macro.cachedAutoAttack = this.toString();
    }
    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "abort",
    value: function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(condition)).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue) {
      return condition ? this.step(ifTrue) : this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "skill",
    value: function skill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }

      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return Macro.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro.skill(skill).repeat());
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        items[_key5] = arguments[_key5];
      }

      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }

      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), "use ".concat(itemOrItemsBallsMacroName(item)));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */

  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */

  }], [{
    key: "load",
    value: function load() {
      var _this;

      return (_this = new this()).step.apply(_this, _toConsumableArray((0, _property.get)(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */

  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, _kolmafia.removeProperty)(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;

      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
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
    value: function externalIf(condition, ifTrue) {
      return new this().externalIf(condition, ifTrue);
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
    value: function item() {
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
  }]);

  return Macro;
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */


exports.Macro = Macro;

_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");

_defineProperty(Macro, "cachedMacroId", null);

_defineProperty(Macro, "cachedAutoAttack", null);

function adventureMacro(loc, macro) {
  macro.save();
  (0, _kolmafia.setAutoAttack)(0);

  try {
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}
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


function adventureMacroAuto(loc, autoMacro) {
  var _nextMacro;

  var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();

  try {
    (0, _kolmafia.adv1)(loc, 0, "");

    while ((0, _kolmafia.inMultiFight)()) {
      (0, _kolmafia.runCombat)();
    }

    if ((0, _kolmafia.choiceFollowsFight)()) (0, _kolmafia.visitUrl)("choice.php");
  } finally {
    Macro.clearSaved();
  }
}

/***/ }),

/***/ 6448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.error = exports.warn = exports.info = exports.log = void 0;

__webpack_require__(2070);

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664); // eslint-disable-next-line @typescript-eslint/no-explicit-any


var logColor = color => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var output = args.map(x => x.toString()).join(" ");

  if (color) {
    (0, _kolmafia.print)(output, color);
  } else {
    (0, _kolmafia.print)(output);
  }
};

var log = logColor();
exports.log = log;
var info = logColor("blue");
exports.info = info;
var warn = logColor("red");
exports.warn = warn;
var error = logColor("red");
exports.error = error;

/***/ }),

/***/ 9803:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5677);

__webpack_require__(6394);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Kmail: true,
  logger: true,
  LogLevel: true,
  console: true,
  get: true,
  PropertiesManager: true,
  set: true,
  setProperties: true,
  withProperties: true,
  withProperty: true,
  withChoices: true,
  withChoice: true,
  property: true
};
Object.defineProperty(exports, "Kmail", ({
  enumerable: true,
  get: function get() {
    return _Kmail.default;
  }
}));
Object.defineProperty(exports, "logger", ({
  enumerable: true,
  get: function get() {
    return _logger.default;
  }
}));
Object.defineProperty(exports, "LogLevel", ({
  enumerable: true,
  get: function get() {
    return _logger.LogLevel;
  }
}));
Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return _property.get;
  }
}));
Object.defineProperty(exports, "PropertiesManager", ({
  enumerable: true,
  get: function get() {
    return _property.PropertiesManager;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return _property.set;
  }
}));
Object.defineProperty(exports, "setProperties", ({
  enumerable: true,
  get: function get() {
    return _property.setProperties;
  }
}));
Object.defineProperty(exports, "withProperties", ({
  enumerable: true,
  get: function get() {
    return _property.withProperties;
  }
}));
Object.defineProperty(exports, "withProperty", ({
  enumerable: true,
  get: function get() {
    return _property.withProperty;
  }
}));
Object.defineProperty(exports, "withChoices", ({
  enumerable: true,
  get: function get() {
    return _property.withChoices;
  }
}));
Object.defineProperty(exports, "withChoice", ({
  enumerable: true,
  get: function get() {
    return _property.withChoice;
  }
}));
exports.property = exports.console = void 0;

var _ascend = __webpack_require__(1689);

Object.keys(_ascend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ascend[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ascend[key];
    }
  });
});

var _Clan = __webpack_require__(1662);

Object.keys(_Clan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Clan[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Clan[key];
    }
  });
});

var _combat = __webpack_require__(1762);

Object.keys(_combat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _combat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _combat[key];
    }
  });
});

var _Dungeon = __webpack_require__(7912);

Object.keys(_Dungeon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Dungeon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dungeon[key];
    }
  });
});

var _lib = __webpack_require__(3311);

Object.keys(_lib).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lib[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lib[key];
    }
  });
});

var _maximize = __webpack_require__(9376);

Object.keys(_maximize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _maximize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _maximize[key];
    }
  });
});

var _mood = __webpack_require__(6115);

Object.keys(_mood).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _mood[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mood[key];
    }
  });
});

var _resources = __webpack_require__(1895);

Object.keys(_resources).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _resources[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resources[key];
    }
  });
});

var _since = __webpack_require__(1157);

Object.keys(_since).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _since[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _since[key];
    }
  });
});

var _templateString = __webpack_require__(678);

Object.keys(_templateString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _templateString[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _templateString[key];
    }
  });
});

var _Kmail = _interopRequireDefault(__webpack_require__(9477));

var _Path = __webpack_require__(6906);

Object.keys(_Path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Path[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Path[key];
    }
  });
});

var _logger = _interopRequireWildcard(__webpack_require__(8685));

var _console = _interopRequireWildcard(__webpack_require__(6448));

exports.console = _console;

var _property = _interopRequireWildcard(__webpack_require__(1347));

exports.property = _property;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ 3311:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSongLimit = getSongLimit;
exports.isSong = isSong;
exports.getActiveEffects = getActiveEffects;
exports.getActiveSongs = getActiveSongs;
exports.getSongCount = getSongCount;
exports.canRememberSong = canRememberSong;
exports.getMonsterLocations = getMonsterLocations;
exports.getRemainingLiver = getRemainingLiver;
exports.getRemainingStomach = getRemainingStomach;
exports.getRemainingSpleen = getRemainingSpleen;
exports.have = have;
exports.haveInCampground = haveInCampground;
exports.haveCounter = haveCounter;
exports.haveWandererCounter = haveWandererCounter;
exports.isVoteWandererNow = isVoteWandererNow;
exports.isWandererNow = isWandererNow;
exports.getKramcoWandererChance = getKramcoWandererChance;
exports.getFamiliarWandererChance = getFamiliarWandererChance;
exports.getWandererChance = getWandererChance;
exports.isCurrentFamiliar = isCurrentFamiliar;
exports.getFoldGroup = getFoldGroup;
exports.getZapGroup = getZapGroup;
exports.getBanishedMonsters = getBanishedMonsters;
exports.canUse = canUse;
exports.noneToNull = noneToNull;
exports.getAverage = getAverage;
exports.getAverageAdventures = getAverageAdventures;
exports.uneffect = uneffect;
exports.getPlayerFromIdOrName = getPlayerFromIdOrName;
exports.Wanderer = void 0;

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(7390);

__webpack_require__(2322);

__webpack_require__(4669);

__webpack_require__(5017);

__webpack_require__(6016);

__webpack_require__(4486);

__webpack_require__(6737);

__webpack_require__(9268);

__webpack_require__(5677);

__webpack_require__(6394);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
/**
 * Returns the current maximum Accordion Thief songs the player can have in their head
 *
 * @category General
 */


function getSongLimit() {
  return 3 + ((0, _kolmafia.booleanModifier)("Four Songs") ? 1 : 0) + (0, _kolmafia.numericModifier)("Additional Song");
}
/**
 * Return whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 */


function isSong(skillOrEffect) {
  var skill = skillOrEffect instanceof Effect ? (0, _kolmafia.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === (0, _templateString.$class)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
/**
 * List all active Effects
 *
 * @category General
 */


function getActiveEffects() {
  return Object.keys((0, _kolmafia.myEffects)()).map(e => Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 */


function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * List number of active Accordion Thief songs
 *
 * @category General
 */


function getSongCount() {
  return getActiveSongs().length;
}
/**
 * Returns true if the player can remember another Accordion Thief song
 *
 * @category General
 * @param quantity Number of songs to test the space for
 */


function canRememberSong() {
  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return getSongLimit() - getSongCount() >= quantity;
}
/**
 * Return the locations in which the given monster can be encountered naturally
 *
 * @category General
 * @param monster Monster to find
 */


function getMonsterLocations(monster) {
  return Location.all().filter(location => monster.name in (0, _kolmafia.appearanceRates)(location));
}
/**
 * Return the player's remaining liver space
 *
 * @category General
 */


function getRemainingLiver() {
  return (0, _kolmafia.inebrietyLimit)() - (0, _kolmafia.myInebriety)();
}
/**
 * Return the player's remaining stomach space
 *
 * @category General
 */


function getRemainingStomach() {
  return (0, _kolmafia.fullnessLimit)() - (0, _kolmafia.myFullness)();
}
/**
 * Return the player's remaining spleen space
 *
 * @category General
 */


function getRemainingSpleen() {
  return (0, _kolmafia.spleenLimit)() - (0, _kolmafia.mySpleenUse)();
}
/**
 * Return whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Number to check that the player has
 */


function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (thing instanceof Effect) {
    return (0, _kolmafia.haveEffect)(thing) >= quantity;
  }

  if (thing instanceof Familiar) {
    return (0, _kolmafia.haveFamiliar)(thing);
  }

  if (thing instanceof Item) {
    return (0, _kolmafia.availableAmount)(thing) >= quantity;
  }

  if (thing instanceof Servant) {
    return (0, _kolmafia.haveServant)(thing);
  }

  if (thing instanceof Skill) {
    return (0, _kolmafia.haveSkill)(thing);
  }

  if (thing instanceof Thrall) {
    var thrall = (0, _kolmafia.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }

  return false;
}
/**
 * Return whether an item is in the player's campground
 *
 * @category General
 * @param item The item mafia uses to represent the campground item
 */


function haveInCampground(item) {
  return Object.keys((0, _kolmafia.getCampground)()).map(i => Item.get(i)).includes(item);
}

var Wanderer;
exports.Wanderer = Wanderer;

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
})(Wanderer || (exports.Wanderer = Wanderer = {}));

var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Return whether the player has the queried counter
 *
 * @category General
 */

function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return (0, _kolmafia.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
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
/**
 * Returns whether the player will encounter a vote wanderer on the next turn,
 * providing an "I Voted!" sticker is equipped.
 *
 * @category Wanderers
 */


function isVoteWandererNow() {
  return (0, _kolmafia.totalTurnsPlayed)() % 11 == 1;
}
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
    return (0, _property.get)("_hipsterAdv") < 7;
  }

  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return !haveCounter(begin, 1) && haveCounter(end);
}
/**
 * Returns the float chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 */


function getKramcoWandererChance() {
  var fights = (0, _property.get)("_sausageFights");
  var lastFight = (0, _property.get)("_lastSausageMonsterTurn");
  var totalTurns = (0, _kolmafia.totalTurnsPlayed)();

  if (fights < 1) {
    return lastFight === totalTurns && (0, _kolmafia.myTurncount)() < 1 ? 0.5 : 1.0;
  }

  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.pow(Math.max(0, fights - 5), 3)));
}
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
  var totalFights = (0, _property.get)("_hipsterAdv");
  var probability = [0.5, 0.4, 0.3, 0.2];

  if (totalFights < 4) {
    return probability[totalFights];
  }

  return totalFights > 7 ? 0.0 : 0.1;
}
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

  var counters = (0, _property.get)("relayCounters");
  var re = new RegExp("(\\d+):" + end);
  var matches = counters.match(re);

  if (matches && matches.length === 2) {
    var window = Number.parseInt(matches[1]) - (0, _kolmafia.myTurncount)();
    return 1.0 / window;
  }

  return 0.0;
}
/**
 * Returns true if the player's current familiar is equal to the one supplied
 *
 * @category General
 * @param familiar Familiar to check
 */


function isCurrentFamiliar(familiar) {
  return (0, _kolmafia.myFamiliar)() === familiar;
}
/**
 * Returns the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 */


function getFoldGroup(item) {
  return Object.entries((0, _kolmafia.getRelated)(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        b = _ref4[1];

    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        i = _ref6[0];

    return Item.get(i);
  });
}
/**
 * Returns the zap group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required zap group
 */


function getZapGroup(item) {
  return Object.keys((0, _kolmafia.getRelated)(item, "zap")).map(i => Item.get(i));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 */


function getBanishedMonsters() {
  var banishes = (0, _utils.chunk)((0, _property.get)("banishedMonsters").split(":"), 3);
  var result = new Map();

  var _iterator = _createForOfIteratorHelper(banishes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          foe = _step$value[0],
          banisher = _step$value[1];

      if (foe === undefined || banisher === undefined) break; // toItem doesn"t error if the item doesn"t exist, so we have to use that.

      var banisherItem = (0, _kolmafia.toItem)(banisher);
      var banisherObject = [Item.get("none"), null].includes(banisherItem) ? Skill.get(banisher) : banisherItem;
      result.set(banisherObject, Monster.get(foe));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}
/**
 * Returns true if the item is usable
 *
 * This function will be an ongoing work in progress
 *
 * @param item Item to check
 */


function canUse(item) {
  var path = (0, _kolmafia.myPath)();

  if (path !== "Nuclear Autumn") {
    if ((0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Shrieking Weasel holo-record, Power-Guy 2000 holo-record, Lucky Strikes holo-record, EMD holo-record, Superdrifter holo-record, The Pigs holo-record, Drunk Uncles holo-record"]))).includes(item)) {
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
/**
 * Return the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 */


function getAverage(range) {
  var _range$match;

  if (range.indexOf("-") < 0) return Number(range);

  var _ref7 = (_range$match = range.match(/(-?[0-9]+)-(-?[0-9]+)/)) !== null && _range$match !== void 0 ? _range$match : ["0", "0", "0"],
      _ref8 = _slicedToArray(_ref7, 3),
      lower = _ref8[1],
      upper = _ref8[2];

  return (Number(lower) + Number(upper)) / 2;
}
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
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 */


function uneffect(effect) {
  return (0, _kolmafia.cliExecute)("uneffect ".concat(effect.name));
}
/**
 * Get both the name and id of a player from either their name or id
 *
 * @param idOrName Id or name of player
 * @returns Object containing id and name of player
 */


function getPlayerFromIdOrName(idOrName) {
  return typeof idOrName === "string" ? {
    name: idOrName,
    id: parseInt((0, _kolmafia.getPlayerId)(idOrName))
  } : {
    name: (0, _kolmafia.getPlayerName)(idOrName),
    id: idOrName
  };
}

/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

__webpack_require__(6394);

__webpack_require__(4669);

var _kolmafia = __webpack_require__(1664);

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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defaultHandlers = {
  info: message => (0, _kolmafia.printHtml)("<b>[Libram]</b> ".concat(message)),
  warning: message => (0, _kolmafia.printHtml)("<span style=\"background: orange; color: white;\"><b>[Libram]</b> ".concat(message, "</span>")),
  error: _error => (0, _kolmafia.printHtml)("<span style=\"background: red; color: white;\"><b>[Libram]</b> ".concat(_error.toString(), "</span>"))
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "handlers", defaultHandlers);
  }

  _createClass(Logger, [{
    key: "setHandler",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function log(level, message) {
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

  return Logger;
}();

var _default = new Logger();

exports.default = _default;

/***/ }),

/***/ 9376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(9174);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setDefaultMaximizeOptions = setDefaultMaximizeOptions;
exports.maximizeCached = maximizeCached;
exports.maximizeRequirementsCached = maximizeRequirementsCached;
exports.Requirement = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(4517);

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(1646);

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(4486);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _logger = _interopRequireDefault(__webpack_require__(8685));

var _merge2 = _interopRequireDefault(__webpack_require__(4299));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: []
};
/**
 *
 * @param options Default options for each maximizer run.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */

function setDefaultMaximizeOptions(options) {
  Object.assign(defaultMaximizeOptions, options);
} // Subset of slots that are valid for caching.


var cachedSlots = (0, _templateString.$slots)(_templateObject || (_templateObject = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));

var CacheEntry = function CacheEntry(equipment, rider, familiar, canEquipItemCount) {
  _classCallCheck(this, CacheEntry);

  _defineProperty(this, "equipment", void 0);

  _defineProperty(this, "rider", void 0);

  _defineProperty(this, "familiar", void 0);

  _defineProperty(this, "canEquipItemCount", void 0);

  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
}; // Objective cache entries.


var cachedObjectives = {}; // Cache to prevent rescanning all items unnecessarily

var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 * @returns The count of unique items.
 */

function canEquipItemCount() {
  var stats = (0, _templateString.$stats)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min((0, _kolmafia.myBasestat)(stat), 300));

  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }

  cachedStats = stats;
  cachedCanEquipItemCount = Item.all().filter(item => (0, _kolmafia.canEquip)(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 * @param cacheKey The cache key to check.
 * @param updateOnFamiliarChange Ignore cache if familiar has changed.
 * @param updateOnCanEquipChanged Ignore cache if stats have changed what can be equipped.
 * @returns A valid CacheEntry or null.
 */


function checkCache(cacheKey, updateOnFamiliarChange, updateOnCanEquipChanged) {
  var entry = cachedObjectives[cacheKey];

  if (!entry) {
    return null;
  }

  if (updateOnFamiliarChange && (0, _kolmafia.myFamiliar)() !== entry.familiar) {
    _logger.default.warning("Equipment found in maximize cache but familiar is different.");

    return null;
  }

  if (updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    _logger.default.warning("Equipment found in maximize cache but equippable item list is out of date.");

    return null;
  }

  return entry;
}
/**
 * Applies equipment that was found in the cache.
 * @param entry The CacheEntry to apply
 */


function applyCached(entry) {
  var _iterator = _createForOfIteratorHelper(entry.equipment),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          slot = _step$value[0],
          item = _step$value[1];

      if ((0, _kolmafia.equippedItem)(slot) !== item && (0, _kolmafia.availableAmount)(item) > 0) {
        (0, _kolmafia.equip)(slot, item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    (0, _kolmafia.enthroneFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Crown of Thrones"])))) || (0, _templateString.$familiar)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"]))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    (0, _kolmafia.bjornifyFamiliar)(entry.rider.get((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || (0, _templateString.$familiar)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["none"]))));
  }
}
/**
 * Verifies that a CacheEntry was applied successfully.
 * @param entry The CacheEntry to verify
 * @returns If all desired equipment was appliedn in the correct slots.
 */


function verifyCached(entry) {
  var success = true;

  var _iterator2 = _createForOfIteratorHelper(entry.equipment),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          slot = _step2$value[0],
          item = _step2$value[1];

      if ((0, _kolmafia.equippedItem)(slot) !== item) {
        _logger.default.warning("Failed to apply cached ".concat(item, " in ").concat(slot, "."));

        success = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== (0, _kolmafia.myEnthronedFamiliar)()) {
      _logger.default.warning("Failed to apply ".concat(entry.rider.get((0, _templateString.$item)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat((0, _templateString.$item)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));

      success = false;
    }
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get((0, _templateString.$item)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get((0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== (0, _kolmafia.myBjornedFamiliar)()) {
      _logger.default.warning("Failed to apply".concat(entry.rider.get((0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat((0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));

      success = false;
    }
  }

  return success;
}
/**
 * Save current equipment to the objective cache.
 * @param cacheKey The cache key to save.
 */


function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();

  var _iterator3 = _createForOfIteratorHelper(cachedSlots),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _slot2 = _step3.value;
      equipment.set(_slot2, (0, _kolmafia.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set((0, _templateString.$slot)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["card-sleeve"]))), (0, _kolmafia.equippedItem)((0, _templateString.$slot)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["card-sleeve"])))));
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Crown of Thrones"]))), (0, _kolmafia.myEnthronedFamiliar)());
  }

  if ((0, _kolmafia.equippedAmount)((0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set((0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Buddy Bjorn"]))), (0, _kolmafia.myBjornedFamiliar)());
  }

  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator4 = _createForOfIteratorHelper(options.preventSlot),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var slot = _step4.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (options.preventSlot.includes((0, _templateString.$slot)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator5 = _createForOfIteratorHelper(Slot.all()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _slot = _step5.value;

        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }

    if (!options.onlySlot.includes((0, _templateString.$slot)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete((0, _templateString.$item)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }

  cachedObjectives[cacheKey] = new CacheEntry(equipment, rider, (0, _kolmafia.myFamiliar)(), canEquipItemCount());
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 */


function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _defaultMaximizeOptio = _objectSpread(_objectSpread({}, defaultMaximizeOptions), options),
      updateOnFamiliarChange = _defaultMaximizeOptio.updateOnFamiliarChange,
      updateOnCanEquipChanged = _defaultMaximizeOptio.updateOnCanEquipChanged,
      forceEquip = _defaultMaximizeOptio.forceEquip,
      preventEquip = _defaultMaximizeOptio.preventEquip,
      bonusEquip = _defaultMaximizeOptio.bonusEquip,
      onlySlot = _defaultMaximizeOptio.onlySlot,
      preventSlot = _defaultMaximizeOptio.preventSlot; // Sort each group in objective to ensure consistent ordering in string


  var objective = [].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "equip ".concat(item)).sort()), _toConsumableArray(preventEquip.map(item => "-equip ".concat(item)).sort()), _toConsumableArray(onlySlot.filter(slot => !(0, _templateString.$slots)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.filter(slot => !(0, _templateString.$slots)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["buddy-bjorn, crown-of-thrones"]))).includes(slot)).map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        bonus = _ref2[1];

    return bonus !== 0;
  }).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        bonus = _ref4[1];

    return "".concat(Math.round(bonus * 100) / 100, " bonus ").concat(item);
  }).sort())).join(", ");
  var cacheEntry = checkCache(objective, updateOnFamiliarChange, updateOnCanEquipChanged);

  if (cacheEntry) {
    _logger.default.info("Equipment found in maximize cache, equipping...");

    applyCached(cacheEntry);

    if (verifyCached(cacheEntry)) {
      _logger.default.info("Equipped cached ".concat(objective));

      return;
    }

    _logger.default.warning("Maximize cache application failed, maximizing...");
  }

  (0, _kolmafia.maximize)(objective, false);
  saveCached(objective, options);
}

var _maximizeParameters = /*#__PURE__*/new WeakMap();

var _maximizeOptions = /*#__PURE__*/new WeakMap();

var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);

    _maximizeParameters.set(this, {
      writable: true,
      value: void 0
    });

    _maximizeOptions.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters);

    _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }

  _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      return (0, _merge2.default)(this, other);
    }
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }]);

  return Requirement;
}();

exports.Requirement = Requirement;

function maximizeRequirementsCached(requirements) {
  var compiledRequirements = Requirement.merge(requirements);
  maximizeCached(compiledRequirements.maximizeParameters, compiledRequirements.maximizeOptions);
}

/***/ }),

/***/ 6115:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(3080);

__webpack_require__(288);

__webpack_require__(6394);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

__webpack_require__(8833);

__webpack_require__(9174);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mood = exports.MagicalSausages = exports.OscusSoda = exports.MpSource = void 0;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _utils = __webpack_require__(8588);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MpSource = /*#__PURE__*/function () {
  function MpSource() {
    _classCallCheck(this, MpSource);
  }

  _createClass(MpSource, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return null;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.availableMpMin();
    }
  }]);

  return MpSource;
}();

exports.MpSource = MpSource;

var OscusSoda = /*#__PURE__*/function (_MpSource) {
  _inherits(OscusSoda, _MpSource);

  var _super = _createSuper(OscusSoda);

  function OscusSoda() {
    _classCallCheck(this, OscusSoda);

    return _super.apply(this, arguments);
  }

  _createClass(OscusSoda, [{
    key: "available",
    value: function available() {
      return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }, {
    key: "usesRemaining",
    value: function usesRemaining() {
      return (0, _property.get)("oscusSodaUsed") ? 0 : 1;
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      return this.available() ? 200 : 0;
    }
  }, {
    key: "availableMpMax",
    value: function availableMpMax() {
      return this.available() ? 300 : 0;
    }
  }, {
    key: "execute",
    value: function execute() {
      (0, _kolmafia.use)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Oscus's neverending soda"]))));
    }
  }]);

  return OscusSoda;
}(MpSource);

exports.OscusSoda = OscusSoda;

_defineProperty(OscusSoda, "instance", new OscusSoda());

var MagicalSausages = /*#__PURE__*/function (_MpSource2) {
  _inherits(MagicalSausages, _MpSource2);

  var _super2 = _createSuper(MagicalSausages);

  function MagicalSausages() {
    _classCallCheck(this, MagicalSausages);

    return _super2.apply(this, arguments);
  }

  _createClass(MagicalSausages, [{
    key: "usesRemaining",
    value: function usesRemaining() {
      return 23 - (0, _property.get)("_sausagesEaten");
    }
  }, {
    key: "availableMpMin",
    value: function availableMpMin() {
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["magical sausage casing"])))));
      return Math.min((0, _kolmafia.myMaxmp)(), 999) * maxSausages;
    }
  }, {
    key: "execute",
    value: function execute() {
      var mpSpaceAvailable = (0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)();
      if (mpSpaceAvailable < 700) return;
      var maxSausages = Math.min(23 - (0, _property.get)("_sausagesEaten"), (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["magical sausage"])))) + (0, _kolmafia.itemAmount)((0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["magical sausage casing"])))), Math.floor(((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)()) / Math.min((0, _kolmafia.myMaxmp)() - (0, _kolmafia.myMp)(), 999)));
      (0, _kolmafia.retrieveItem)(maxSausages, (0, _templateString.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["magical sausage"]))));
      (0, _kolmafia.eat)(maxSausages, (0, _templateString.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["magical sausage"]))));
    }
  }]);

  return MagicalSausages;
}(MpSource);

exports.MagicalSausages = MagicalSausages;

_defineProperty(MagicalSausages, "instance", new MagicalSausages());

var MoodElement = /*#__PURE__*/function () {
  function MoodElement() {
    _classCallCheck(this, MoodElement);
  }

  _createClass(MoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      return 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return 1;
    }
  }]);

  return MoodElement;
}();

var SkillMoodElement = /*#__PURE__*/function (_MoodElement) {
  _inherits(SkillMoodElement, _MoodElement);

  var _super3 = _createSuper(SkillMoodElement);

  function SkillMoodElement(skill) {
    var _this;

    _classCallCheck(this, SkillMoodElement);

    _this = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this), "skill", void 0);

    _this.skill = skill;
    return _this;
  }

  _createClass(SkillMoodElement, [{
    key: "mpCostPerTurn",
    value: function mpCostPerTurn() {
      var turns = (0, _kolmafia.turnsPerCast)(this.skill);
      return turns > 0 ? (0, _kolmafia.mpCost)(this.skill) / turns : 0;
    }
  }, {
    key: "turnIncrement",
    value: function turnIncrement() {
      return (0, _kolmafia.turnsPerCast)(this.skill);
    }
  }, {
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var effect = (0, _kolmafia.toEffect)(this.skill);
      var initialTurns = (0, _kolmafia.haveEffect)(effect);
      if (!(0, _kolmafia.haveSkill)(this.skill)) return false;
      if (initialTurns >= ensureTurns) return true; // Deal with song slots.

      if (mood.options.songSlots.length > 0 && (0, _lib.isSong)(this.skill) && !(0, _lib.have)(effect)) {
        var activeSongs = (0, _lib.getActiveSongs)();

        var _iterator = _createForOfIteratorHelper(activeSongs),
            _step;

        try {
          var _loop = function _loop() {
            var song = _step.value;
            var slot = mood.options.songSlots.find(slot => slot.includes(song));
            if (!slot || slot.includes(effect)) (0, _kolmafia.cliExecute)("shrug ".concat(song));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var oldRemainingCasts = -1;
      var remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));

      while (remainingCasts > 0 && oldRemainingCasts !== remainingCasts) {
        var maxCasts = void 0;

        if ((0, _kolmafia.hpCost)(this.skill) > 0) {
          // FIXME: restore HP
          maxCasts = Math.floor((0, _kolmafia.myHp)() / (0, _kolmafia.hpCost)(this.skill));
        } else {
          var cost = (0, _kolmafia.mpCost)(this.skill);
          maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);

          if (maxCasts === 0) {
            mood.moreMp(cost);
            maxCasts = Math.floor((0, _kolmafia.myMp)() / cost);
          }
        }

        var casts = (0, _utils.clamp)(remainingCasts, 0, Math.min(100, maxCasts));
        (0, _kolmafia.useSkill)(casts, this.skill);
        oldRemainingCasts = remainingCasts;
        remainingCasts = Math.ceil((ensureTurns - (0, _kolmafia.haveEffect)(effect)) / (0, _kolmafia.turnsPerCast)(this.skill));
      }

      return (0, _kolmafia.haveEffect)(effect) > ensureTurns;
    }
  }]);

  return SkillMoodElement;
}(MoodElement);

var PotionMoodElement = /*#__PURE__*/function (_MoodElement2) {
  _inherits(PotionMoodElement, _MoodElement2);

  var _super4 = _createSuper(PotionMoodElement);

  function PotionMoodElement(potion, maxPricePerTurn) {
    var _this2;

    _classCallCheck(this, PotionMoodElement);

    _this2 = _super4.call(this);

    _defineProperty(_assertThisInitialized(_this2), "potion", void 0);

    _defineProperty(_assertThisInitialized(_this2), "maxPricePerTurn", void 0);

    _this2.potion = potion;
    _this2.maxPricePerTurn = maxPricePerTurn;
    return _this2;
  }

  _createClass(PotionMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      // FIXME: Smarter buying logic.
      // FIXME: Allow constructing stuff (e.g. snow cleats)
      var effect = (0, _kolmafia.effectModifier)(this.potion, "Effect");
      var effectTurns = (0, _kolmafia.haveEffect)(effect);
      var turnsPerUse = (0, _kolmafia.numericModifier)(this.potion, "Effect Duration");

      if ((0, _kolmafia.mallPrice)(this.potion) > this.maxPricePerTurn * turnsPerUse) {
        return false;
      }

      if (effectTurns < ensureTurns) {
        var uses = (ensureTurns - effectTurns) / turnsPerUse;
        var quantityToBuy = (0, _utils.clamp)(uses - (0, _kolmafia.availableAmount)(this.potion), 0, 100);
        (0, _kolmafia.buy)(quantityToBuy, this.potion, this.maxPricePerTurn * turnsPerUse);
        var quantityToUse = (0, _utils.clamp)(uses, 0, (0, _kolmafia.availableAmount)(this.potion));
        (0, _kolmafia.use)(quantityToUse, this.potion);
      }

      return (0, _kolmafia.haveEffect)(effect) >= ensureTurns;
    }
  }]);

  return PotionMoodElement;
}(MoodElement);

var GenieMoodElement = /*#__PURE__*/function (_MoodElement3) {
  _inherits(GenieMoodElement, _MoodElement3);

  var _super5 = _createSuper(GenieMoodElement);

  function GenieMoodElement(effect) {
    var _this3;

    _classCallCheck(this, GenieMoodElement);

    _this3 = _super5.call(this);

    _defineProperty(_assertThisInitialized(_this3), "effect", void 0);

    _this3.effect = effect;
    return _this3;
  }

  _createClass(GenieMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      if ((0, _kolmafia.haveEffect)(this.effect) >= ensureTurns) return true;
      var neededWishes = Math.ceil(((0, _kolmafia.haveEffect)(this.effect) - ensureTurns) / 20);
      var wishesToBuy = (0, _utils.clamp)(neededWishes - (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["pocket wish"])))), 0, 20);
      (0, _kolmafia.buy)(wishesToBuy, (0, _templateString.$item)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["pocket wish"]))), 50000);
      var wishesToUse = (0, _utils.clamp)(neededWishes, 0, (0, _kolmafia.availableAmount)((0, _templateString.$item)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["pocket wish"])))));

      for (; wishesToUse > 0; wishesToUse--) {
        (0, _kolmafia.cliExecute)("genie effect ".concat(this.effect.name));
      }

      return (0, _kolmafia.haveEffect)(this.effect) >= ensureTurns;
    }
  }]);

  return GenieMoodElement;
}(MoodElement);

var CustomMoodElement = /*#__PURE__*/function (_MoodElement4) {
  _inherits(CustomMoodElement, _MoodElement4);

  var _super6 = _createSuper(CustomMoodElement);

  function CustomMoodElement(effect, gainEffect) {
    var _this4;

    _classCallCheck(this, CustomMoodElement);

    _this4 = _super6.call(this);

    _defineProperty(_assertThisInitialized(_this4), "effect", void 0);

    _defineProperty(_assertThisInitialized(_this4), "gainEffect", void 0);

    _this4.effect = effect;
    _this4.gainEffect = gainEffect !== null && gainEffect !== void 0 ? gainEffect : () => (0, _kolmafia.cliExecute)(effect.default);
    return _this4;
  }

  _createClass(CustomMoodElement, [{
    key: "execute",
    value: function execute(mood, ensureTurns) {
      var currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      var lastCurrentTurns = -1;

      while (currentTurns < ensureTurns && currentTurns !== lastCurrentTurns) {
        this.gainEffect();
        lastCurrentTurns = currentTurns;
        currentTurns = (0, _kolmafia.haveEffect)(this.effect);
      }

      return (0, _kolmafia.haveEffect)(this.effect) > ensureTurns;
    }
  }]);

  return CustomMoodElement;
}(MoodElement);
/**
 * Class representing a mood object. Add mood elements using the instance methods, which can be chained.
 */


var Mood = /*#__PURE__*/function () {
  /**
   * Construct a new Mood instance.
   * @param options Options for mood.
   */
  function Mood() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Mood);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "elements", []);

    this.options = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
  }
  /**
   * Get the MP available for casting skills.
   */


  _createClass(Mood, [{
    key: "availableMp",
    value: function availableMp() {
      return (0, _utils.sum)(this.options.mpSources, mpSource => mpSource.availableMpMin()) + Math.max((0, _kolmafia.myMp)() - this.options.reserveMp, 0);
    }
  }, {
    key: "moreMp",
    value: function moreMp(minimumTarget) {
      var _iterator2 = _createForOfIteratorHelper(this.options.mpSources),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mpSource = _step2.value;
          var usesRemaining = mpSource.usesRemaining();

          if (usesRemaining !== null && usesRemaining > 0) {
            mpSource.execute();
            if ((0, _kolmafia.myMp)() >= minimumTarget) break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Add a skill to the mood.
     * @param skill Skill to add.
     */

  }, {
    key: "skill",
    value: function skill(_skill) {
      this.elements.push(new SkillMoodElement(_skill));
      return this;
    }
    /**
     * Add an effect to the mood, with casting based on {effect.default}.
     * @param effect Effect to add.
     * @param gainEffect How to gain the effect. Only runs if we don't have the effect.
     */

  }, {
    key: "effect",
    value: function effect(_effect, gainEffect) {
      var skill = (0, _kolmafia.toSkill)(_effect);

      if (!gainEffect && skill !== (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["none"])))) {
        this.skill(skill);
      } else {
        this.elements.push(new CustomMoodElement(_effect, gainEffect));
      }

      return this;
    }
    /**
     * Add a potion to the mood.
     * @param potion Potion to add.
     * @param maxPricePerTurn Maximum price to pay per turn of the effect.
     */

  }, {
    key: "potion",
    value: function potion(_potion, maxPricePerTurn) {
      this.elements.push(new PotionMoodElement(_potion, maxPricePerTurn));
      return this;
    }
    /**
     * Add an effect to acquire via pocket wishes to the mood.
     * @param effect Effect to wish for in the mood.
     */

  }, {
    key: "genie",
    value: function genie(effect) {
      this.elements.push(new GenieMoodElement(effect));
      return this;
    }
    /**
     * Execute the mood, trying to ensure {ensureTurns} of each effect.
     * @param ensureTurns Turns of each effect to try and achieve.
     * @returns Whether or not we successfully got this many turns of every effect in the mood.
     */

  }, {
    key: "execute",
    value: function execute() {
      var ensureTurns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var availableMp = this.availableMp();
      var totalMpPerTurn = (0, _utils.sum)(this.elements, element => element.mpCostPerTurn());
      var potentialTurns = Math.floor(availableMp / totalMpPerTurn);
      var completeSuccess = true;

      var _iterator3 = _createForOfIteratorHelper(this.elements),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var element = _step3.value;
          var elementTurns = ensureTurns;

          if (element.mpCostPerTurn() > 0) {
            var elementPotentialTurns = Math.floor(potentialTurns / element.turnIncrement()) * element.turnIncrement();
            elementTurns = Math.min(ensureTurns, elementPotentialTurns);
          }

          completeSuccess = element.execute(this, elementTurns) && completeSuccess;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return completeSuccess;
    }
  }], [{
    key: "setDefaultOptions",
    value:
    /**
     * Set default options for new Mood instances.
     * @param options Default options for new Mood instances.
     */
    function setDefaultOptions(options) {
      Mood.defaultOptions = _objectSpread(_objectSpread({}, Mood.defaultOptions), options);
    }
  }]);

  return Mood;
}();

exports.Mood = Mood;

_defineProperty(Mood, "defaultOptions", {
  songSlots: [],
  mpSources: [MagicalSausages.instance, OscusSoda.instance],
  reserveMp: 0
});

/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.get = get;
exports.set = _set;
exports.setProperties = setProperties;
exports.withProperties = withProperties;
exports.withProperty = withProperty;
exports.withChoices = withChoices;
exports.withChoice = withChoice;
exports.PropertiesManager = exports.getThrall = exports.getStat = exports.getSlot = exports.getSkill = exports.getServant = exports.getPhylum = exports.getMonster = exports.getLocation = exports.getItem = exports.getFamiliar = exports.getElement = exports.getEffect = exports.getCoinmaster = exports.getClass = exports.getBounty = exports.getNumber = exports.getBoolean = exports.getCommaSeparated = exports.getString = void 0;

__webpack_require__(2322);

__webpack_require__(9268);

__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(6737);

__webpack_require__(5677);

__webpack_require__(5809);

__webpack_require__(2070);

var _kolmafia = __webpack_require__(1664);

var _propertyTyping = __webpack_require__(9412);

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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var createPropertyGetter = transform => (property, default_) => {
  var value = (0, _kolmafia.getProperty)(property);

  if (default_ !== undefined && value === "") {
    return default_;
  }

  return transform(value, property);
};

var createMafiaClassPropertyGetter = Type => createPropertyGetter(value => {
  if (value === "") return null;
  var v = Type.get(value);
  return v === Type.get("none") ? null : v;
});

var getString = createPropertyGetter(value => value);
exports.getString = getString;
var getCommaSeparated = createPropertyGetter(value => value.split(/, ?/));
exports.getCommaSeparated = getCommaSeparated;
var getBoolean = createPropertyGetter(value => value === "true");
exports.getBoolean = getBoolean;
var getNumber = createPropertyGetter(value => Number(value));
exports.getNumber = getNumber;
var getBounty = createMafiaClassPropertyGetter(Bounty);
exports.getBounty = getBounty;
var getClass = createMafiaClassPropertyGetter(Class);
exports.getClass = getClass;
var getCoinmaster = createMafiaClassPropertyGetter(Coinmaster);
exports.getCoinmaster = getCoinmaster;
var getEffect = createMafiaClassPropertyGetter(Effect);
exports.getEffect = getEffect;
var getElement = createMafiaClassPropertyGetter(Element);
exports.getElement = getElement;
var getFamiliar = createMafiaClassPropertyGetter(Familiar);
exports.getFamiliar = getFamiliar;
var getItem = createMafiaClassPropertyGetter(Item);
exports.getItem = getItem;
var getLocation = createMafiaClassPropertyGetter(Location);
exports.getLocation = getLocation;
var getMonster = createMafiaClassPropertyGetter(Monster);
exports.getMonster = getMonster;
var getPhylum = createMafiaClassPropertyGetter(Phylum);
exports.getPhylum = getPhylum;
var getServant = createMafiaClassPropertyGetter(Servant);
exports.getServant = getServant;
var getSkill = createMafiaClassPropertyGetter(Skill);
exports.getSkill = getSkill;
var getSlot = createMafiaClassPropertyGetter(Slot);
exports.getSlot = getSlot;
var getStat = createMafiaClassPropertyGetter(Stat);
exports.getStat = getStat;
var getThrall = createMafiaClassPropertyGetter(Thrall);
/**
 * Returns the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 */

exports.getThrall = getThrall;

function get(property, _default) {
  var value = getString(property);

  if ((0, _propertyTyping.isMonsterProperty)(property)) {
    return getMonster(property, _default);
  }

  if ((0, _propertyTyping.isLocationProperty)(property)) {
    return getLocation(property, _default);
  }

  if (value === "") {
    return _default === undefined ? "" : _default;
  }

  if ((0, _propertyTyping.isBooleanProperty)(property, value)) {
    return getBoolean(property, _default);
  }

  if ((0, _propertyTyping.isNumericProperty)(property, value)) {
    return getNumber(property, _default);
  }

  return value;
}
/**
 * Sets the value of a mafia property, either built in or custom
 * @param property Name of the property
 * @param value Value to give the property
 */


function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  (0, _kolmafia.setProperty)(property, stringValue);
}

function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        prop = _Object$entries$_i[0],
        _value = _Object$entries$_i[1];

    _set(prop, _value);
  }
}

function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, get(prop)];
  }));
  setProperties(properties);

  try {
    callback();
  } finally {
    setProperties(propertiesBackup);
  }
}

function withProperty(property, value, callback) {
  withProperties(_defineProperty({}, property, value), callback);
}

function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        choice = _ref4[0],
        option = _ref4[1];

    return ["choiceAdventure".concat(choice), option];
  }));
  withProperties(properties, callback);
}

function withChoice(choice, value, callback) {
  withChoices(_defineProperty({}, choice, value), callback);
}

var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);

    _defineProperty(this, "properties", void 0);

    this.properties = {};
  }

  _createClass(PropertiesManager, [{
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            propertyName = _Object$entries2$_i[0],
            propertyValue = _Object$entries2$_i[1];

        if (this.properties[propertyName] === undefined) {
          this.properties[propertyName] = get(propertyName);
        }

        _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
            choiceNumber = _ref6[0],
            choiceValue = _ref6[1];

        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "resetAll",
    value: function resetAll() {
      Object.entries(this.properties).forEach(_ref7 => {
        var _ref8 = _slicedToArray(_ref7, 2),
            propertyName = _ref8[0],
            propertyValue = _ref8[1];

        return _set(propertyName, propertyValue);
      });
    }
  }]);

  return PropertiesManager;
}();

exports.PropertiesManager = PropertiesManager;

/***/ }),

/***/ 9412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isNumericProperty = isNumericProperty;
exports.isNumericOrStringProperty = isNumericOrStringProperty;
exports.isBooleanProperty = isBooleanProperty;
exports.isLocationProperty = isLocationProperty;
exports.isMonsterProperty = isMonsterProperty;
exports.isFamiliarProperty = isFamiliarProperty;
exports.isStatProperty = isStatProperty;

__webpack_require__(2076);

__webpack_require__(3223);

function isNumericProperty(property, value) {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
}

var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing"];
var choiceAdventurePattern = /^choiceAdventure\d+$/;

function isNumericOrStringProperty(property) {
  if (numericOrStringProperties.includes(property)) return true;
  return choiceAdventurePattern.test(property);
}

var fakeBooleans = ["trackVoteMonster", "_jickJarAvailable"];

function isBooleanProperty(property, value) {
  if (fakeBooleans.includes(property)) return false;
  return ["true", "false"].includes(value);
}

var otherLocations = ["nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "sourceOracleTarget"];

function isLocationProperty(property) {
  return otherLocations.includes(property) || property.endsWith("Location");
}

var otherMonsters = ["romanticTarget", "yearbookCameraTarget"];
var fakeMonsters = ["trackVoteMonster"];

function isMonsterProperty(property) {
  if (otherMonsters.includes(property)) return true;
  return property.endsWith("Monster") && !fakeMonsters.includes(property);
}

function isFamiliarProperty(property) {
  return property.endsWith("Familiar");
}

var statProps = ["nsChallenge1", "shrugTopper", "snojoSetting"];

function isStatProperty(property) {
  return statProps.includes(property);
}

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

__webpack_require__(6394);

__webpack_require__(2004);

__webpack_require__(8407);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRunaways = getRunaways;
exports.getMaxRunaways = getMaxRunaways;
exports.getRemainingRunaways = getRemainingRunaways;
exports.couldRunaway = couldRunaway;
exports.canRunaway = canRunaway;
exports.prepareRunaway = prepareRunaway;
exports.familiar = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _lib = __webpack_require__(3311);

var _templateObject, _templateObject2, _templateObject3;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Frumious Bandersnatch"])));
/**
 * Returns true if the player has the Frumious Bandersnatch in their
 * terrariukm
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns the number of free runaways that have already been used
 * @see StompingBoots with which the Bandersnatch shares a counter
 */


function getRunaways() {
  return (0, _property.get)("_banderRunaways");
}
/**
 * Returns the total number of free runaways that the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var weightBuffs = considerWeightAdjustment ? (0, _kolmafia.weightAdjustment)() : 0;
  return Math.floor(((0, _kolmafia.familiarWeight)(familiar) + weightBuffs) / 5);
}
/**
 * Returns the number of remaining free runaways the player can
 * get from their Bandersnatch
 *
 * @param considerWeightAdjustment
 */


function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * Returns true if the player could use their Bandersnatch to
 * get a free run in theory
 *
 * @param considerWeightAdjustment Include familiar weight modifiers
 */


function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return have() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

var odeSkill = (0, _templateString.$skill)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Ode to Booze"])));
var odeEffect = (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Ode to Booze"])));
/**
 * Returns true if the player can use their Bandersnatch to get a
 * free run right now
 */

function canRunaway() {
  return (0, _lib.isCurrentFamiliar)(familiar) && couldRunaway() && (0, _lib.have)(odeEffect);
}
/**
 * Prepare a Bandersnatch runaway.
 *
 * This will cast Ode to Booze and equip take your Bandersnatch with you.
 * If any of those steps fail, it will return false.
 *
 * @param songsToRemove Ordered list of songs that could be shrugged to make room for Ode to Booze
 */


function prepareRunaway(songsToRemove) {
  if (!(0, _lib.have)(odeEffect)) {
    if (!(0, _lib.have)(odeSkill)) {
      return false;
    }

    if (!(0, _lib.canRememberSong)()) {
      var activeSongs = (0, _lib.getActiveSongs)();

      var _iterator = _createForOfIteratorHelper(songsToRemove),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var song = _step.value;

          if (activeSongs.includes(song) && (0, _lib.uneffect)(song)) {
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (!(0, _kolmafia.useSkill)(odeSkill)) {
      return false;
    }
  }

  return (0, _kolmafia.useFamiliar)(familiar);
}

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getSpookyPuttySheetCopiesMade = getSpookyPuttySheetCopiesMade;
exports.prepareSpookyPuttySheet = prepareSpookyPuttySheet;
exports.getSpookyPuttySheetMonster = getSpookyPuttySheetMonster;
exports.useSpookyPuttySheet = useSpookyPuttySheet;
exports.sheet = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var sheet = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Spooky Putty sheet"])));
exports.sheet = sheet;

function have() {
  return (0, _lib.getFoldGroup)(sheet).some(item => (0, _lib.have)(item));
}

function getSpookyPuttySheetCopiesMade() {
  return Math.max(0, (0, _property.get)("spookyPuttyCopiesMade"));
}

function prepareSpookyPuttySheet() {
  if (!have()) return false;
  if ((0, _lib.have)(sheet)) return true;
  return (0, _kolmafia.cliExecute)("fold Spooky putty sheet");
}

function getSpookyPuttySheetMonster() {
  return (0, _property.get)("spookyPuttyMonster");
}

function useSpookyPuttySheet() {
  return (0, _kolmafia.use)(sheet);
}

/***/ }),

/***/ 3758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getBadlyRomanticArrowUses = getBadlyRomanticArrowUses;
exports.haveBadlyRomanticArrowUsesRemaining = haveBadlyRomanticArrowUsesRemaining;
exports.couldUseBadlyRomanticArrow = couldUseBadlyRomanticArrow;
exports.prepareBadlyRomanticArrow = prepareBadlyRomanticArrow;
exports.canUseBadlyRomanticArrow = canUseBadlyRomanticArrow;
exports.getBadlyRomanticArrowMonster = getBadlyRomanticArrowMonster;
exports.BadlyRomanticArrow = exports.familiar = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var familiar = (0, _templateString.$familiar)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Obtuse Angel"])));
/**
 * Returns true if the player has an Obtuse Angel
 */

exports.familiar = familiar;

function have() {
  return (0, _lib.have)(familiar);
}
/**
 * Returns number of badly romantic arrows used
 */


function getBadlyRomanticArrowUses() {
  return Math.max(0, (0, _property.get)("_badlyRomanticArrows"));
}
/**
 * Returns true if badly romantic arrow can still be used
 */


function haveBadlyRomanticArrowUsesRemaining() {
  return getBadlyRomanticArrowUses() === 0;
}
/**
 * Returns true if the player could use badly romantic arrow in theory
 */


function couldUseBadlyRomanticArrow() {
  return have() && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Prepares badly romantic arrow for use
 */


function prepareBadlyRomanticArrow() {
  return (0, _kolmafia.useFamiliar)(familiar);
}
/**
 * Returns true if the player can use badly romantic arrow right now
 */


function canUseBadlyRomanticArrow() {
  return (0, _lib.isCurrentFamiliar)(familiar) && haveBadlyRomanticArrowUsesRemaining();
}
/**
 * Returns the current badly romantic arrow monster target
 */


function getBadlyRomanticArrowMonster() {
  return (0, _property.get)("romanticTarget");
}

var BadlyRomanticArrow = new _Copier.Copier(() => couldUseBadlyRomanticArrow(), () => prepareBadlyRomanticArrow(), () => canUseBadlyRomanticArrow(), () => getBadlyRomanticArrowMonster());
exports.BadlyRomanticArrow = BadlyRomanticArrow;

/***/ }),

/***/ 4945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.getRainDohBlackBoxCopiesMade = getRainDohBlackBoxCopiesMade;
exports.getRainDohBlackBoxMonster = getRainDohBlackBoxMonster;
exports.useRainDohBlackBox = useRainDohBlackBox;
exports.box = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var box = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Rain-Doh black box"])));
exports.box = box;

function have() {
  return (0, _lib.getFoldGroup)(box).some(item => (0, _lib.have)(item));
}

function getRainDohBlackBoxCopiesMade() {
  return Math.max(0, (0, _property.get)("_raindohCopiesMade"));
}

function getRainDohBlackBoxMonster() {
  return (0, _property.get)("rainDohMonster");
}

function useRainDohBlackBox() {
  return (0, _kolmafia.use)(box);
}

/***/ }),

/***/ 5915:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.haveUnfinishedIceSculpture = haveUnfinishedIceSculpture;
exports.isUnfinishedIceSculptureUsed = isUnfinishedIceSculptureUsed;
exports.couldUseUnfinishedIceSculpture = couldUseUnfinishedIceSculpture;
exports.getUnfinishedIceSculptureMonster = getUnfinishedIceSculptureMonster;
exports.UnfinishedIceSculpture = void 0;

var _Copier = __webpack_require__(3425);

var _property = __webpack_require__(1347);

var _lib = __webpack_require__(3311);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _lib.haveInCampground)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["packet of winter seeds"]))));
}

function haveUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["unfinished ice sculpture"]))));
}

function isUnfinishedIceSculptureUsed() {
  return (0, _property.get)("_iceSculptureUsed");
}

function couldUseUnfinishedIceSculpture() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["unfinished ice sculpture"])))) && !(0, _lib.have)((0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["ice sculpture"]))));
}

function getUnfinishedIceSculptureMonster() {
  return (0, _property.get)("iceSculptureMonster");
}

var UnfinishedIceSculpture = new _Copier.Copier(() => couldUseUnfinishedIceSculpture(), null, () => couldUseUnfinishedIceSculpture(), () => getUnfinishedIceSculptureMonster());
exports.UnfinishedIceSculpture = UnfinishedIceSculpture;

/***/ }),

/***/ 7975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.paintingMonster = paintingMonster;
exports.paintingFought = paintingFought;
exports.fightPainting = fightPainting;
exports.getDesk = getDesk;
exports.getCeiling = getCeiling;
exports.getNightstand = getNightstand;
exports.changeDesk = changeDesk;
exports.changeCeiling = changeCeiling;
exports.changeNightstand = changeNightstand;

__webpack_require__(7715);

__webpack_require__(2076);

__webpack_require__(7723);

var _kolmafia = __webpack_require__(1664);

var _templateString = __webpack_require__(678);

var _property = __webpack_require__(1347);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("chateauAvailable");
}

function paintingMonster() {
  return (0, _property.get)("chateauMonster");
}

function paintingFought() {
  return (0, _property.get)("_chateauMonsterFought");
}

function fightPainting() {
  (0, _kolmafia.visitUrl)("place.php?whichplace=chateau&action=chateau_painting", false);
  return (0, _kolmafia.runCombat)();
}

var desks = (0, _templateString.$items)(_templateObject || (_templateObject = _taggedTemplateLiteral(["fancy stationery set, Swiss piggy bank, continental juice bar"])));
var ceilings = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["antler chandelier, ceiling fan, artificial skylight"])));
var nightstands = (0, _templateString.$items)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["foreign language tapes, bowl of potpourri, electric muscle stimulator"])));

function getDesk() {
  return desks.find(desk => Object.keys((0, _kolmafia.getChateau)()).includes(desk.name)) || (0, _templateString.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["none"])));
}

function getCeiling() {
  return ceilings.find(ceiling => Object.keys((0, _kolmafia.getChateau)()).includes(ceiling.name)) || (0, _templateString.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["none"])));
}

function getNightstand() {
  return nightstands.find(nightstand => Object.keys((0, _kolmafia.getChateau)()).includes(nightstand.name)) || (0, _templateString.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["none"])));
}

function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  (0, _kolmafia.buy)(desk);
  return getDesk() === desk;
}

function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  (0, _kolmafia.buy)(ceiling);
  return getCeiling() === ceiling;
}

function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  (0, _kolmafia.buy)(nightstand);
  return getNightstand() === nightstand;
}

/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.enhance = enhance;
exports.enquiry = enquiry;
exports.educate = educate;
exports.getSkills = getSkills;
exports.isCurrentSkill = isCurrentSkill;
exports.extrude = extrude;
exports.getChips = getChips;
exports.getDigitizeUses = getDigitizeUses;
exports.getDigitizeMonster = getDigitizeMonster;
exports.getDigitizeMonsterCount = getDigitizeMonsterCount;
exports.getMaximumDigitizeUses = getMaximumDigitizeUses;
exports.getDigitizeUsesRemaining = getDigitizeUsesRemaining;
exports.couldDigitize = couldDigitize;
exports.prepareDigitize = prepareDigitize;
exports.canDigitize = canDigitize;
exports.getDuplicateUses = getDuplicateUses;
exports.getEnhanceUses = getEnhanceUses;
exports.getPortscanUses = getPortscanUses;
exports.Digitize = exports.Items = exports.Skills = exports.RolloverBuffs = exports.Buffs = exports.item = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(9628);

__webpack_require__(288);

__webpack_require__(2070);

__webpack_require__(8833);

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(2322);

__webpack_require__(9268);

var _kolmafia = __webpack_require__(1664);

var _isEqual = _interopRequireDefault(__webpack_require__(7120));

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Source terminal"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
}
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


var Buffs = {
  Items: (0, _templateString.$effect)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["items.enh"]))),
  Meat: (0, _templateString.$effect)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["meat.enh"]))),
  Init: (0, _templateString.$effect)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["init.enh"]))),
  Critical: (0, _templateString.$effect)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["critical.enh"]))),
  Damage: (0, _templateString.$effect)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["damage.enh"]))),
  Substats: (0, _templateString.$effect)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see Buffs
 */

exports.Buffs = Buffs;

function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */


var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: (0, _templateString.$effect)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["familiar.enq"]))),

  /** +25 ML */
  Monsters: (0, _templateString.$effect)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["monsters.enq"]))),

  /** +5 Prismatic Resistance */
  Protect: (0, _templateString.$effect)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["protect.enq"]))),

  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: (0, _templateString.$effect)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["stats.enq"])))
};
/**
 * Acquire a buff from the Source Terminal
 * @param buff The buff to acquire
 * @see RolloverBuffs
 */

exports.RolloverBuffs = RolloverBuffs;

function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }

  return (0, _kolmafia.cliExecute)("terminal enquiry ".concat(rolloverBuff.name));
}
/**
 * Skills that can be acquired from Enhance
 */


var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: (0, _templateString.$skill)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Extract"]))),

  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: (0, _templateString.$skill)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Digitize"]))),

  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: (0, _templateString.$skill)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Compress"]))),

  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: (0, _templateString.$skill)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Duplicate"]))),

  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: (0, _templateString.$skill)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Portscan"]))),

  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: (0, _templateString.$skill)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 * @param skill Skill to learn
 * @see Skills
 */

exports.Skills = Skills;

function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if ((0, _isEqual.default)(skillsArray, getSkills())) return true;

  var _iterator = _createForOfIteratorHelper(skillsArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      (0, _kolmafia.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/**
 * Return the Skills currently available from Source Terminal
 */


function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => (0, _property.get)(p)).filter(s => s !== "").map(s => Skill.get(s.slice(0, -4)));
}

function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */


var Items = new Map([[(0, _templateString.$item)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [(0, _templateString.$item)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [(0, _templateString.$item)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [(0, _templateString.$item)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [(0, _templateString.$item)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [(0, _templateString.$item)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [(0, _templateString.$item)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [(0, _templateString.$item)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [(0, _templateString.$item)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [(0, _templateString.$item)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * Collect an item from the Source Terminal (up to three times a day)
 * @param item Item to collect
 * @see Items
 */

exports.Items = Items;

function extrude(item) {
  var fileName = Items.get(item);
  if (!fileName) return false;
  return (0, _kolmafia.cliExecute)("terminal extrude ".concat(fileName));
}
/**
 * Return chips currently installed to player's Source Terminal
 */


function getChips() {
  return (0, _property.get)("sourceTerminalChips").split(",");
}
/**
 * Return number of times digitize was cast today
 */


function getDigitizeUses() {
  return (0, _property.get)("_sourceTerminalDigitizeUses");
}
/**
 * Return Monster that is currently digitized, else null
 */


function getDigitizeMonster() {
  return (0, _property.get)("_sourceTerminalDigitizeMonster");
}
/**
 * Return number of digitized monsters encountered since it was last cast
 */


function getDigitizeMonsterCount() {
  return (0, _property.get)("_sourceTerminalDigitizeMonsterCount");
}
/**
 * Return maximum number of digitizes player can cast
 */


function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * Returns the current day's number of remaining digitize uses
 */


function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
/**
 * Returns whether the player could theoretically cast Digitize
 */


function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}

function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }

  return true;
}
/**
 * Returns whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 */


function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}

var Digitize = new _Copier.Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());
/**
 * Return number of times duplicate was cast today
 */

exports.Digitize = Digitize;

function getDuplicateUses() {
  return (0, _property.get)("_sourceTerminalDuplicateUses");
}
/**
 * Return number of times enhance was cast today
 */


function getEnhanceUses() {
  return (0, _property.get)("_sourceTerminalEnhanceUses");
}
/**
 * Return number of times portscan was cast today
 */


function getPortscanUses() {
  return (0, _property.get)("_sourceTerminalPortscanUses");
}

/***/ }),

/***/ 7271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.fightsDone = fightsDone;
exports.fightPiece = fightPiece;
exports.pieces = exports.item = void 0;

__webpack_require__(2076);

__webpack_require__(7723);

__webpack_require__(1646);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Witchess Set"])));
exports.item = item;

function have() {
  return (0, _lib.haveInCampground)(item);
}

function fightsDone() {
  return (0, _property.get)("_witchessFights");
}

var pieces = Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
exports.pieces = pieces;

function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");

  if (!(0, _kolmafia.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }

  if (!(0, _kolmafia.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }

  if (!(0, _kolmafia.visitUrl)("choice.php?option=1&pwd=".concat((0, _kolmafia.myHash)(), "&whichchoice=1182&piece=").concat((0, _kolmafia.toInt)(piece)), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }

  return (0, _kolmafia.runCombat)();
}

/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isUsed = isUsed;
exports.haveLovEnamorang = haveLovEnamorang;
exports.getLovEnamorangUses = getLovEnamorangUses;
exports.couldUseLoveEnamorang = couldUseLoveEnamorang;
exports.getLovEnamorangMonster = getLovEnamorangMonster;
exports.fightAll = fightAll;
exports.LovEnamorang = void 0;

var _kolmafia = __webpack_require__(1664);

var _Copier = __webpack_require__(3425);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function have() {
  return (0, _property.get)("loveTunnelAvailable");
}

function isUsed() {
  return (0, _property.get)("_loveTunnelUsed");
}

function haveLovEnamorang() {
  return (0, _lib.have)((0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["LOV Enamorang"]))));
}

function getLovEnamorangUses() {
  return (0, _property.get)("_enamorangs");
}

function couldUseLoveEnamorang() {
  return !(0, _lib.haveWandererCounter)(_lib.Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}

function getLovEnamorangMonster() {
  return (0, _property.get)("enamorangMonster");
}

var LovEnamorang = new _Copier.Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());
exports.LovEnamorang = LovEnamorang;

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
  (0, _property.set)("choiceAdventure1222", 1); // Entrance

  (0, _property.set)("choiceAdventure1223", 1); // Fight LOV Enforcer

  (0, _property.set)("choiceAdventure1224", equipmentChoice(equipment));
  (0, _property.set)("choiceAdventure1225", 1); // Fight LOV Engineer

  (0, _property.set)("choiceAdventure1226", effectChoice(effect));
  (0, _property.set)("choiceAdventure1227", 1); // Fight LOV Equivocator

  (0, _property.set)("choiceAdventure1228", extraChoice(extra));
  (0, _kolmafia.adv1)((0, _templateString.$location)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
}

/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.song = song;
exports.songChangesLeft = songChangesLeft;
exports.setSong = setSong;
exports.dropProgress = dropProgress;
exports.songBoomSongs = exports.item = void 0;

__webpack_require__(5677);

__webpack_require__(6394);

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * Current song.
 */

exports.songBoomSongs = songBoomSongs;

function song() {
  var stored = (0, _property.get)("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * Song changes left today.
 */


function songChangesLeft() {
  return (0, _property.get)("_boomBoxSongsLeft");
}
/**
 * Change the song.
 * @param newSong Song to change to.
 */


function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    (0, _kolmafia.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
    return true;
  } else {
    return false;
  }
}
/**
 * Progress to next song drop (e.g. gathered meat-clip).
 */


function dropProgress() {
  return (0, _property.get)("_boomBoxFights");
}

/***/ }),

/***/ 5352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(288);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.have = have;
exports.isQuestActive = isQuestActive;
exports.getPlatinum = getPlatinum;
exports.getPlatinumToday = getPlatinumToday;
exports.canPlatinum = canPlatinum;
exports.haveFullPlatinumBonus = haveFullPlatinumBonus;
exports.acceptPlatinum = acceptPlatinum;
exports.getGold = getGold;
exports.getGoldToday = getGoldToday;
exports.canGold = canGold;
exports.haveFullGoldBonus = haveFullGoldBonus;
exports.acceptGold = acceptGold;
exports.getBronze = getBronze;
exports.acceptBronze = acceptBronze;
exports.haveFullBronzeBonus = haveFullBronzeBonus;
exports.canAbandon = canAbandon;
exports.abandon = abandon;
exports.getLocation = getLocation;
exports.getTier = getTier;
exports.getBooze = getBooze;
exports.havePlatinumBooze = havePlatinumBooze;
exports.haveBooze = haveBooze;
exports.Cocktails = exports.item = void 0;

var _kolmafia = __webpack_require__(1664);

var _lib = __webpack_require__(3311);

var _property = __webpack_require__(1347);

var _templateString = __webpack_require__(678);

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var item = (0, _templateString.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["Guzzlr tablet"])));
exports.item = item;

function have() {
  return (0, _lib.have)(item);
}

function useTabletWithChoice(option) {
  (0, _property.withChoice)(1412, option, () => (0, _kolmafia.use)(1, item));
}

function isQuestActive() {
  return (0, _property.get)("questGuzzlr") !== "unstarted";
}
/**
 * Platinum deliveries completed overall
 */


function getPlatinum() {
  return (0, _property.get)("guzzlrPlatinumDeliveries");
}
/**
 * Platinum deliveries completed today
 */


function getPlatinumToday() {
  return (0, _property.get)("_guzzlrPlatinumDeliveries");
}
/**
 * Can do a platinum delivery (haven't done one today)
 */


function canPlatinum() {
  return !isQuestActive() && getGold() >= 5 && getPlatinumToday() < 1;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullPlatinumBonus() {
  return getPlatinum() >= 30;
}
/**
 * Accept platinum delivery
 */


function acceptPlatinum() {
  if (!canPlatinum()) return false;
  useTabletWithChoice(4);
  return true;
}
/**
 * Gold deliveries completed overall
 */


function getGold() {
  return (0, _property.get)("guzzlrGoldDeliveries");
}
/**
 * Gold deliveries completed today
 */


function getGoldToday() {
  return (0, _property.get)("_guzzlrGoldDeliveries");
}
/**
 * Can do a gold delivery (have done fewer than 3 today)
 */


function canGold() {
  return !isQuestActive() && getBronze() >= 5 && getGoldToday() < 3;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullGoldBonus() {
  return getGold() >= 150;
}
/**
 * Accept gold delivery
 */


function acceptGold() {
  if (!canGold()) return false;
  useTabletWithChoice(3);
  return true;
}
/**
 * Bronze deliveries completed overall
 */


function getBronze() {
  return (0, _property.get)("guzzlrBronzeDeliveries");
}
/**
 * Accept bronze delivery
 */


function acceptBronze() {
  if (isQuestActive()) return false;
  useTabletWithChoice(2);
  return true;
}
/**
 * Have fully unlocked the platinum delivery bonuses (done >= 30)
 */


function haveFullBronzeBonus() {
  return getBronze() >= 196;
}
/**
 * Can abandon the current Guzzlr quest
 */


function canAbandon() {
  return isQuestActive() && !(0, _property.get)("_guzzlrQuestAbandoned");
}
/**
 * Abandon Guzzlr quest
 */


function abandon() {
  if (!canAbandon()) return false;
  (0, _kolmafia.visitUrl)("inventory.php?tap=guzzlr", false);
  (0, _kolmafia.runChoice)(1);
  (0, _kolmafia.runChoice)(5);
  return true;
}
/**
 * Get current Guzzlr quest location
 */


function getLocation() {
  return (0, _property.get)("guzzlrQuestLocation");
}
/**
 * Get current Guzzlr quest tier
 */


function getTier() {
  var tier = (0, _property.get)("guzzlrQuestTier");
  return tier === "" ? null : tier;
}
/**
 * Get current Guzzlr quest booze
 */


function getBooze() {
  var booze = (0, _property.get)("guzzlrQuestBooze");
  if (booze === "") return null;
  return Item.get(booze);
}
/**
 * List of the platinum cocktails
 */


var Cocktails = (0, _templateString.$items)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Buttery Boy, Steamboat, Ghiaccio Colada, Nog-on-the-Cob, Sourfinger"])));
/**
 * Returns true if the user has a platinum cocktail in their inventory
 */

exports.Cocktails = Cocktails;

function havePlatinumBooze() {
  return Cocktails.some(cock => (0, _lib.have)(cock));
}
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

    case (0, _templateString.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Guzzlr cocktail set"]))):
      return havePlatinumBooze();

    default:
      return (0, _lib.have)(booze);
  }
}

/***/ }),

/***/ 1895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(5677);

__webpack_require__(6394);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  Bandersnatch: true,
  ChateauMantegna: true,
  ObtuseAngel: true,
  RainDoh: true,
  SongBoom: true,
  SourceTerminal: true,
  SpookyPutty: true,
  TunnelOfLove: true,
  WinterGarden: true,
  Witchess: true,
  Guzzlr: true
};
exports.Guzzlr = exports.Witchess = exports.WinterGarden = exports.TunnelOfLove = exports.SpookyPutty = exports.SourceTerminal = exports.SongBoom = exports.RainDoh = exports.ObtuseAngel = exports.ChateauMantegna = exports.Bandersnatch = void 0;

var _Bandersnatch = _interopRequireWildcard(__webpack_require__(5661));

exports.Bandersnatch = _Bandersnatch;

var _ChateauMantegna = _interopRequireWildcard(__webpack_require__(7975));

exports.ChateauMantegna = _ChateauMantegna;

var _ObtuseAngel = _interopRequireWildcard(__webpack_require__(3758));

exports.ObtuseAngel = _ObtuseAngel;

var _RainDoh = _interopRequireWildcard(__webpack_require__(4945));

exports.RainDoh = _RainDoh;

var _SongBoom = _interopRequireWildcard(__webpack_require__(2211));

exports.SongBoom = _SongBoom;

var _SourceTerminal = _interopRequireWildcard(__webpack_require__(1577));

exports.SourceTerminal = _SourceTerminal;

var _SpookyPutty = _interopRequireWildcard(__webpack_require__(7235));

exports.SpookyPutty = _SpookyPutty;

var _TunnelOfLove = _interopRequireWildcard(__webpack_require__(6255));

exports.TunnelOfLove = _TunnelOfLove;

var _WinterGarden = _interopRequireWildcard(__webpack_require__(5915));

exports.WinterGarden = _WinterGarden;

var _Witchess = _interopRequireWildcard(__webpack_require__(7271));

exports.Witchess = _Witchess;

var _Guzzlr = _interopRequireWildcard(__webpack_require__(5352));

exports.Guzzlr = _Guzzlr;

var _puttyLikes = __webpack_require__(5231);

Object.keys(_puttyLikes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _puttyLikes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _puttyLikes[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTotalPuttyLikeCopiesMade = getTotalPuttyLikeCopiesMade;
exports.couldUseRainDohBlackBox = couldUseRainDohBlackBox;
exports.couldUseSpookyPuttySheet = couldUseSpookyPuttySheet;
exports.SpookyPuttySheet = exports.RainDohBlackBox = void 0;

var _Copier = __webpack_require__(3425);

var _SpookyPutty = __webpack_require__(7235);

var _RainDoh = __webpack_require__(4945);

function getTotalPuttyLikeCopiesMade() {
  return (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() + (0, _RainDoh.getRainDohBlackBoxCopiesMade)();
}

function couldUseRainDohBlackBox() {
  return (0, _RainDoh.have)() && (0, _RainDoh.getRainDohBlackBoxCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var RainDohBlackBox = new _Copier.Copier(() => couldUseRainDohBlackBox(), null, () => couldUseRainDohBlackBox(), () => (0, _RainDoh.getRainDohBlackBoxMonster)(), () => (0, _RainDoh.useRainDohBlackBox)());
exports.RainDohBlackBox = RainDohBlackBox;

function couldUseSpookyPuttySheet() {
  return (0, _SpookyPutty.have)() && (0, _SpookyPutty.getSpookyPuttySheetCopiesMade)() < 5 && getTotalPuttyLikeCopiesMade() < 6;
}

var SpookyPuttySheet = new _Copier.Copier(() => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.prepareSpookyPuttySheet)(), () => couldUseSpookyPuttySheet(), () => (0, _SpookyPutty.getSpookyPuttySheetMonster)(), () => (0, _SpookyPutty.useSpookyPuttySheet)());
exports.SpookyPuttySheet = SpookyPuttySheet;

/***/ }),

/***/ 1157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(6394);

__webpack_require__(4669);

__webpack_require__(3080);

__webpack_require__(5677);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sinceKolmafiaRevision = sinceKolmafiaRevision;
exports.sinceKolmafiaVersion = sinceKolmafiaVersion;
exports.KolmafiaVersionError = void 0;

__webpack_require__(1646);

__webpack_require__(2322);

var _kolmafia = __webpack_require__(1664);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */


var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  _inherits(KolmafiaVersionError, _Error);

  var _super = _createSuper(KolmafiaVersionError);

  function KolmafiaVersionError(message) {
    var _this;

    _classCallCheck(this, KolmafiaVersionError);

    _this = _super.call(this, message); // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.

    Object.setPrototypeOf(_assertThisInitialized(_this), KolmafiaVersionError.prototype);
    return _this;
  }

  return KolmafiaVersionError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); // Manually set class name, so that the stack trace shows proper name in Rhino


exports.KolmafiaVersionError = KolmafiaVersionError;
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */

function getScriptName() {
  var _require$main; // In Rhino, the current script name is available in require.main.id


  var scriptName = (_require$main = __webpack_require__.c[__webpack_require__.s]) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
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
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  } // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()


  if ((0, _kolmafia.getRevision)() < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, _kolmafia.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}
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
    throw new TypeError("Invalid major version number ".concat(majorVersion, " (must be an integer)"));
  }

  if (!Number.isInteger(minorVersion)) {
    throw new TypeError("Invalid minor version number ".concat(minorVersion, " (must be an integer)"));
  }

  var versionStr = (0, _kolmafia.getVersion)();
  var versionStrMatch = /v(\d+)\.(\d+)/.exec(versionStr);

  if (!versionStrMatch) {
    // This is not something the user should handle
    throw new Error("Unexpected KoLmafia version string: \"".concat(versionStr, "\". You may need to update the script."));
  }

  var currentMajorVersion = Number(versionStrMatch[1]);
  var currentMinorVersion = Number(versionStrMatch[2]); // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()

  if (currentMajorVersion < majorVersion || currentMajorVersion === majorVersion && currentMinorVersion < minorVersion) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires version ").concat(majorVersion, ".").concat(minorVersion, " of kolmafia or higher (current: ").concat(currentMajorVersion, ".").concat(currentMinorVersion, "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.$thralls = exports.$thrall = exports.$stats = exports.$stat = exports.$slots = exports.$slot = exports.$skills = exports.$skill = exports.$servants = exports.$servant = exports.$phyla = exports.$phylum = exports.$monsters = exports.$monster = exports.$locations = exports.$location = exports.$items = exports.$item = exports.$familiars = exports.$familiar = exports.$elements = exports.$element = exports.$effects = exports.$effect = exports.$coinmasters = exports.$coinmaster = exports.$classes = exports.$class = exports.$bounties = exports.$bounty = void 0;

__webpack_require__(1646);

__webpack_require__(2322);

__webpack_require__(9268);

var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }

  return literals.reduce((acc, literal, i) => acc + literal + (placeholders[i] || ""), "");
};

var createSingleConstant = Type => function (literals) {
  for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    placeholders[_key2 - 1] = arguments[_key2];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
  return Type.get(input);
};

var createPluralConstant = Type => function (literals) {
  for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    placeholders[_key3 - 1] = arguments[_key3];
  }

  var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));

  if (input === "") {
    return Type.all();
  }

  return Type.get(input.split(/\s*,\s*/));
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */


var $bounty = createSingleConstant(Bounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$bounty = $bounty;
var $bounties = createPluralConstant(Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */

exports.$bounties = $bounties;
var $class = createSingleConstant(Class);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$class = $class;
var $classes = createPluralConstant(Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */

exports.$classes = $classes;
var $coinmaster = createSingleConstant(Coinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$coinmaster = $coinmaster;
var $coinmasters = createPluralConstant(Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */

exports.$coinmasters = $coinmasters;
var $effect = createSingleConstant(Effect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$effect = $effect;
var $effects = createPluralConstant(Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */

exports.$effects = $effects;
var $element = createSingleConstant(Element);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$element = $element;
var $elements = createPluralConstant(Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */

exports.$elements = $elements;
var $familiar = createSingleConstant(Familiar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$familiar = $familiar;
var $familiars = createPluralConstant(Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */

exports.$familiars = $familiars;
var $item = createSingleConstant(Item);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$item = $item;
var $items = createPluralConstant(Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */

exports.$items = $items;
var $location = createSingleConstant(Location);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$location = $location;
var $locations = createPluralConstant(Location);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */

exports.$locations = $locations;
var $monster = createSingleConstant(Monster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$monster = $monster;
var $monsters = createPluralConstant(Monster);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */

exports.$monsters = $monsters;
var $phylum = createSingleConstant(Phylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$phylum = $phylum;
var $phyla = createPluralConstant(Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */

exports.$phyla = $phyla;
var $servant = createSingleConstant(Servant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$servant = $servant;
var $servants = createPluralConstant(Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */

exports.$servants = $servants;
var $skill = createSingleConstant(Skill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$skill = $skill;
var $skills = createPluralConstant(Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */

exports.$skills = $skills;
var $slot = createSingleConstant(Slot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$slot = $slot;
var $slots = createPluralConstant(Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */

exports.$slots = $slots;
var $stat = createSingleConstant(Stat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$stat = $stat;
var $stats = createPluralConstant(Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */

exports.$stats = $stats;
var $thrall = createSingleConstant(Thrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */

exports.$thrall = $thrall;
var $thralls = createPluralConstant(Thrall);
exports.$thralls = $thralls;

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(2004);

__webpack_require__(8407);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.notNull = notNull;
exports.parseNumber = parseNumber;
exports.clamp = clamp;
exports.chunk = chunk;
exports.arrayToCountedMap = arrayToCountedMap;
exports.countedMapToArray = countedMapToArray;
exports.countedMapToString = countedMapToString;
exports.sum = sum;
exports.sumNumbers = sumNumbers;

__webpack_require__(6016);

__webpack_require__(2322);

__webpack_require__(3296);

__webpack_require__(288);

__webpack_require__(5677);

__webpack_require__(6394);

__webpack_require__(655);

__webpack_require__(6270);

__webpack_require__(1271);

__webpack_require__(2070);

__webpack_require__(1646);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

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

function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}

function countedMapToArray(map) {
  return _toConsumableArray(map).flatMap(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
        item = _ref2[0],
        quantity = _ref2[1];

    return Array(quantity).fill(item);
  });
}

function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        quantity = _ref4[1];

    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
/**
 * Sum an array of numbers.
 * @param addends Addends to sum.
 * @param mappingFunction function to turn elements into numbers
 */


function sum(addends, mappingFunction) {
  return addends.reduce((subtotal, element) => subtotal + mappingFunction(element), 0);
}

function sumNumbers(addends) {
  return sum(addends, x => x);
}

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


var Symbol = root.Symbol;
module.exports = Symbol;

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

/***/ 8835:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

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
    key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
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

/***/ 8505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(5515),
    eq = __webpack_require__(7950);
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ 879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(5515),
    eq = __webpack_require__(7950);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

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

/***/ 5515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(1742);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ 346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(71);
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ 7079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(7924);
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

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

var Symbol = __webpack_require__(2773),
    getRawTag = __webpack_require__(3888),
    objectToString = __webpack_require__(2299);
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

/***/ 173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(71),
    isPrototype = __webpack_require__(2803),
    nativeKeysIn = __webpack_require__(5842);
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ 6681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(959),
    assignMergeValue = __webpack_require__(8505),
    baseFor = __webpack_require__(7079),
    baseMergeDeep = __webpack_require__(3874),
    isObject = __webpack_require__(71),
    keysIn = __webpack_require__(1291),
    safeGet = __webpack_require__(1952);
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ 3874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(8505),
    cloneBuffer = __webpack_require__(8288),
    cloneTypedArray = __webpack_require__(1234),
    copyArray = __webpack_require__(9430),
    initCloneObject = __webpack_require__(3632),
    isArguments = __webpack_require__(9246),
    isArray = __webpack_require__(3670),
    isArrayLikeObject = __webpack_require__(3566),
    isBuffer = __webpack_require__(2343),
    isFunction = __webpack_require__(3626),
    isObject = __webpack_require__(71),
    isPlainObject = __webpack_require__(3902),
    isTypedArray = __webpack_require__(1589),
    safeGet = __webpack_require__(1952),
    toPlainObject = __webpack_require__(5151);
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ 9541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(1559),
    overRest = __webpack_require__(3549),
    setToString = __webpack_require__(5121);
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ 4233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(7622),
    defineProperty = __webpack_require__(1742),
    identity = __webpack_require__(1559);
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

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

/***/ 4899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(2496);
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ 8288:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/***/ }),

/***/ 1234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(4899);
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ 9430:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ 7841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(879),
    baseAssignValue = __webpack_require__(5515);
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ 1741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(4362);
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ 661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(9541),
    isIterateeCall = __webpack_require__(2985);
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ 7924:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ 1742:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(3203);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

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

var Symbol = __webpack_require__(2773),
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

var symbolProto = Symbol ? Symbol.prototype : undefined,
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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
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

/***/ 2107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5290);
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2773);
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

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

/***/ 3632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(346),
    getPrototype = __webpack_require__(2107),
    isPrototype = __webpack_require__(2803);
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ 4782:
/***/ ((module) => {

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ 2985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7950),
    isArrayLike = __webpack_require__(6175),
    isIndex = __webpack_require__(4782),
    isObject = __webpack_require__(71);
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ 4480:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
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

/***/ 5842:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ 1985:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(8556);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
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

/***/ 3549:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(8835);
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ 4362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(8556);
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 1952:
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

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

/***/ 5121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(4233),
    shortOut = __webpack_require__(2369);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ 2369:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

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

/***/ 7622:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

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

/***/ 1559:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

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

/***/ 3566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(6175),
    isObjectLike = __webpack_require__(4939);
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ 2343:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(4362),
    stubFalse = __webpack_require__(3444);
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ 4939:
/***/ ((module) => {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ 3902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(1185),
    getPrototype = __webpack_require__(2107),
    isObjectLike = __webpack_require__(4939);
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

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

/***/ 1291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(8083),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(6175);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ 4299:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(6681),
    createAssigner = __webpack_require__(661);
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

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

/***/ 5151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(7841),
    keysIn = __webpack_require__(1291);
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ 4339:
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
;// CONCATENATED MODULE: ./src/config.ts
var _templateObject, _Map$get, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Unfortunately don't have a clan with everything needed, so going to rely on a second clan for a prepped fax machine and slimetube
// Optional FORTUNE_TELLER_FRIEND must be a character in MAIN_CLAN

var MAIN_CLAN = (0,external_kolmafia_.getProperty)("seventyhccs_main_clan");
var FAX_AND_SLIME_CLAN = (0,external_kolmafia_.getProperty)("seventyhccs_side_clan");
var FORTUNE_TELLER_FRIEND = (0,external_kolmafia_.getProperty)("seventyhccs_fortune_friend"); // Define which BRICKO fight to use by changing BRICKO_TARGET_ITEM

var BRICKO_TARGET_ITEM = (0,dist.$item)(_templateObject || (_templateObject = _taggedTemplateLiteral(["BRICKO bat"])));
var BRICKOS_PER_FIGHT = (_Map$get = new Map([[(0,dist.$item)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["BRICKO ooze"]))), 2], [(0,dist.$item)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["BRICKO bat"]))), 5], [(0,dist.$item)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["BRICKO oyster"]))), 8], [(0,dist.$item)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["BRICKO turtle"]))), 11], [(0,dist.$item)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["BRICKO elephant"]))), 23], [(0,dist.$item)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["BRICKO octopus"]))), 37], [(0,dist.$item)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["BRICKO python"]))), 69]]).get(BRICKO_TARGET_ITEM)) !== null && _Map$get !== void 0 ? _Map$get : 9999; // Don't spend meat on sausages below this value

var MEAT_SAFE_LIMIT = 2000; // Don't spend MP on librams below this value unless right before a full MP refill

var MP_SAFE_LIMIT = 500;
;// CONCATENATED MODULE: ./src/lib.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function acquireEffect(e) {
  if (!(0,dist.have)(e) && e.default.startsWith("cargo")) throw "Can't obtain ".concat(e, "?");
  if (!(0,dist.have)(e)) (0,external_kolmafia_.cliExecute)(e.default);
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
function isHolidayWandererDay() {
  var holidays = ["el dia de los muertos borrachos", "feast of boris", "talk like a pirate day"];
  var today = (0,external_kolmafia_.holiday)().split("/");
  var wandererToday = today.some(day => holidays.includes(day.toLowerCase()));
  return wandererToday;
}
function itemToEffect(i) {
  return (0,external_kolmafia_.effectModifier)(i, "effect");
}
function shrugEffect(effect) {
  if ((0,dist.have)(effect)) (0,external_kolmafia_.cliExecute)("shrug ".concat(effect));
}
function tryUse(i) {
  if ((0,dist.have)(i)) (0,external_kolmafia_.use)(i);
} // eslint-disable-next-line @typescript-eslint/no-explicit-any

function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
}
function voterMonsterNow() {
  return (0,external_kolmafia_.totalTurnsPlayed)() % 11 === 1 && (0,dist.get)("lastVoteMonsterTurn") < (0,external_kolmafia_.totalTurnsPlayed)();
}
function wishEffect(e) {
  if (!(0,dist.have)(e)) (0,external_kolmafia_.cliExecute)("genie effect ".concat(e));
}
function withContext(callback, context) {
  var previous = context.map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
        prop = _ref2[0];

    return [prop, (0,dist.get)(prop)];
  });

  var setProps = p => p.forEach(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
        prop = _ref4[0],
        value = _ref4[1];

    return (0,dist.set)(prop, value);
  });

  setProps(context);

  try {
    callback();
  } finally {
    setProps(previous);
  }
}
function withEquipment(callback, equips) {
  var previous = equips.map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
        slot = _ref6[0];

    return [slot, (0,external_kolmafia_.equippedItem)(slot)];
  });

  var equipAll = o => o.forEach(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
        slot = _ref8[0],
        item = _ref8[1];

    return (0,external_kolmafia_.equip)(slot, item);
  });

  equipAll(equips);

  try {
    callback();
  } finally {
    equipAll(previous);
  }
}
;// CONCATENATED MODULE: ./src/diet.ts
var diet_templateObject, diet_templateObject2, diet_templateObject3, diet_templateObject4, diet_templateObject5, diet_templateObject6, diet_templateObject7, diet_templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58;

function diet_slicedToArray(arr, i) { return diet_arrayWithHoles(arr) || diet_iterableToArrayLimit(arr, i) || diet_unsupportedIterableToArray(arr, i) || diet_nonIterableRest(); }

function diet_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function diet_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function diet_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = diet_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || diet_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function diet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return diet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return diet_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return diet_arrayLikeToArray(arr); }

function diet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function diet_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var recipes = new Map([[(0,dist.$item)(diet_templateObject || (diet_templateObject = diet_taggedTemplateLiteral(["bugged balaclava"]))), () => {
  (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(diet_templateObject2 || (diet_templateObject2 = diet_taggedTemplateLiteral(["Baby Bugged Bugbear"]))));
  (0,external_kolmafia_.visitUrl)("arena.php");
  (0,external_kolmafia_.cliExecute)("fold ".concat((0,dist.$item)(diet_templateObject3 || (diet_templateObject3 = diet_taggedTemplateLiteral(["bugged balaclava"])))));
}], [(0,dist.$item)(diet_templateObject4 || (diet_templateObject4 = diet_taggedTemplateLiteral(["blood-faced volleyball"]))), () => {
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(diet_templateObject5 || (diet_templateObject5 = diet_taggedTemplateLiteral(["seal tooth"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(diet_templateObject6 || (diet_templateObject6 = diet_taggedTemplateLiteral(["volleyball"]))));
  acquireEffect((0,dist.$effect)(diet_templateObject7 || (diet_templateObject7 = diet_taggedTemplateLiteral(["Bloody Hand"]))));
  (0,external_kolmafia_.use)((0,dist.$item)(diet_templateObject8 || (diet_templateObject8 = diet_taggedTemplateLiteral(["volleyball"]))));
}], [(0,dist.$item)(_templateObject9 || (_templateObject9 = diet_taggedTemplateLiteral(["cog and sprocket assembly"]))), () => (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject10 || (_templateObject10 = diet_taggedTemplateLiteral(["cog and sprocket assembly"])))))], [(0,dist.$item)(_templateObject11 || (_templateObject11 = diet_taggedTemplateLiteral(["dripping meat crossbow"]))), () => {
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject12 || (_templateObject12 = diet_taggedTemplateLiteral(["catsup"]))));
  (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject13 || (_templateObject13 = diet_taggedTemplateLiteral(["dripping meat crossbow"])))));
}], [(0,dist.$item)(_templateObject14 || (_templateObject14 = diet_taggedTemplateLiteral(["hot buttered roll"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject15 || (_templateObject15 = diet_taggedTemplateLiteral(["hot buttered roll"]))))], [(0,dist.$item)(_templateObject16 || (_templateObject16 = diet_taggedTemplateLiteral(["perfect dark and stormy"]))), () => (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject17 || (_templateObject17 = diet_taggedTemplateLiteral(["perfect dark and stormy"])))))], [(0,dist.$item)(_templateObject18 || (_templateObject18 = diet_taggedTemplateLiteral(["sprocket assembly"]))), () => (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject19 || (_templateObject19 = diet_taggedTemplateLiteral(["sprocket assembly"])))))], [(0,dist.$item)(_templateObject20 || (_templateObject20 = diet_taggedTemplateLiteral(["ravioli hat"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject21 || (_templateObject21 = diet_taggedTemplateLiteral(["ravioli hat"]))))], [(0,dist.$item)(_templateObject22 || (_templateObject22 = diet_taggedTemplateLiteral(["repeating crossbow"]))), () => (0,external_kolmafia_.cliExecute)("make ".concat((0,dist.$item)(_templateObject23 || (_templateObject23 = diet_taggedTemplateLiteral(["repeating crossbow"])))))], [(0,dist.$item)(_templateObject24 || (_templateObject24 = diet_taggedTemplateLiteral(["turtle totem"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject25 || (_templateObject25 = diet_taggedTemplateLiteral(["turtle totem"]))))], [(0,dist.$item)(_templateObject26 || (_templateObject26 = diet_taggedTemplateLiteral(["useless powder"]))), () => {
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject27 || (_templateObject27 = diet_taggedTemplateLiteral(["tenderizing hammer"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject28 || (_templateObject28 = diet_taggedTemplateLiteral(["cool whip"]))));
  (0,external_kolmafia_.cliExecute)("pulverize ".concat((0,dist.$item)(_templateObject29 || (_templateObject29 = diet_taggedTemplateLiteral(["cool whip"])))));
}], [(0,dist.$item)(_templateObject30 || (_templateObject30 = diet_taggedTemplateLiteral(["wooden figurine"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(_templateObject31 || (_templateObject31 = diet_taggedTemplateLiteral(["wooden figurine"]))))]]);
var diabolicPizzas = {
  1: {
    effect: (0,dist.$effect)(_templateObject32 || (_templateObject32 = diet_taggedTemplateLiteral(["Spit Upon"]))),
    equip: undefined,
    // Don't equip the licorice boa
    familiar: (0,dist.$familiar)(_templateObject33 || (_templateObject33 = diet_taggedTemplateLiteral(["Peppermint Rhino"]))),
    ingredients: tuple((0,dist.$item)(_templateObject34 || (_templateObject34 = diet_taggedTemplateLiteral(["sprocket assembly"]))), // 38 meat
    (0,dist.$item)(_templateObject35 || (_templateObject35 = diet_taggedTemplateLiteral(["perfect dark and stormy"]))), (0,dist.$item)(_templateObject36 || (_templateObject36 = diet_taggedTemplateLiteral(["ironic moustache"]))), (0,dist.$item)(_templateObject37 || (_templateObject37 = diet_taggedTemplateLiteral(["turtle totem"]))))
  },
  2: {
    effect: (0,dist.$effect)(_templateObject38 || (_templateObject38 = diet_taggedTemplateLiteral(["Bureaucratized"]))),
    equip: (0,dist.$item)(_templateObject39 || (_templateObject39 = diet_taggedTemplateLiteral(["Pocket Professor memory chip"]))),
    familiar: (0,dist.$familiar)(_templateObject40 || (_templateObject40 = diet_taggedTemplateLiteral(["Pocket Professor"]))),
    ingredients: tuple((0,dist.$item)(_templateObject41 || (_templateObject41 = diet_taggedTemplateLiteral(["bugged balaclava"]))), (0,dist.$item)(_templateObject42 || (_templateObject42 = diet_taggedTemplateLiteral(["useless powder"]))), // 950 + 28 meat
    (0,dist.$item)(_templateObject43 || (_templateObject43 = diet_taggedTemplateLiteral(["ravioli hat"]))), (0,dist.$item)(_templateObject44 || (_templateObject44 = diet_taggedTemplateLiteral(["eyedrops of the ermine"]))))
  },
  3: {
    effect: (0,dist.$effect)(_templateObject45 || (_templateObject45 = diet_taggedTemplateLiteral(["Down With Chow"]))),
    equip: (0,dist.$item)(_templateObject46 || (_templateObject46 = diet_taggedTemplateLiteral(["cracker"]))),
    familiar: (0,dist.$familiar)(_templateObject47 || (_templateObject47 = diet_taggedTemplateLiteral(["Exotic Parrot"]))),
    ingredients: tuple((0,dist.$item)(_templateObject48 || (_templateObject48 = diet_taggedTemplateLiteral(["dripping meat crossbow"]))), // 195 meat
    (0,dist.$item)(_templateObject49 || (_templateObject49 = diet_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(_templateObject50 || (_templateObject50 = diet_taggedTemplateLiteral(["wooden figurine"]))), (0,dist.$item)(_templateObject51 || (_templateObject51 = diet_taggedTemplateLiteral(["blood-faced volleyball"]))))
  },
  4: {
    effect: (0,dist.$effect)(_templateObject52 || (_templateObject52 = diet_taggedTemplateLiteral(["Chorale of Companionship"]))),
    equip: undefined,
    familiar: undefined,
    ingredients: tuple((0,dist.$item)(_templateObject53 || (_templateObject53 = diet_taggedTemplateLiteral(["cog and sprocket assembly"]))), // 77 meat
    (0,dist.$item)(_templateObject54 || (_templateObject54 = diet_taggedTemplateLiteral(["hot buttered roll"]))), (0,dist.$item)(_templateObject55 || (_templateObject55 = diet_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(_templateObject56 || (_templateObject56 = diet_taggedTemplateLiteral(["repeating crossbow"]))) // 495 meat
    )
  }
};
function eatPizzas() {
  var followRecipe = ingredient => {
    if (!(0,dist.have)(ingredient)) {
      var recipe = recipes.get(ingredient);
      if (!recipe) throw "Missing recipe for ".concat(ingredient);
      recipe();
    }
  };

  for (var _i = 0, _Object$values = Object.values(diabolicPizzas); _i < _Object$values.length; _i++) {
    var pizza = _Object$values[_i];

    if (!(0,dist.have)(pizza.effect)) {
      pizza.ingredients.forEach(followRecipe);
      pizza.ingredients.forEach(followRecipe); // Some recipes can consume previous ones

      if (pizza.familiar) (0,external_kolmafia_.useFamiliar)(pizza.familiar);
      cookPizza.apply(void 0, _toConsumableArray(pizza.ingredients));
      (0,external_kolmafia_.eat)((0,dist.$item)(_templateObject57 || (_templateObject57 = diet_taggedTemplateLiteral(["diabolic pizza"]))));
      if (pizza.equip) (0,external_kolmafia_.equip)((0,dist.$slot)(_templateObject58 || (_templateObject58 = diet_taggedTemplateLiteral(["familiar"]))), pizza.equip);
    }
  }
}

function cookPizza(a, b, c, d) {
  var counts = new Map();
  [a, b, c, d].forEach(f => {
    var _counts$get;

    return counts.set(f, 1 + ((_counts$get = counts.get(f)) !== null && _counts$get !== void 0 ? _counts$get : 0));
  });

  var _iterator = _createForOfIteratorHelper(counts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = diet_slicedToArray(_step.value, 2),
          item = _step$value[0],
          count = _step$value[1];

      checkAvailable(item, count);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  (0,external_kolmafia_.visitUrl)("campground.php?action=makepizza&pizza=".concat((0,external_kolmafia_.toInt)(a), ",").concat((0,external_kolmafia_.toInt)(b), ",").concat((0,external_kolmafia_.toInt)(c), ",").concat((0,external_kolmafia_.toInt)(d)));
}
;// CONCATENATED MODULE: ./src/combat.ts
var combat_templateObject, combat_templateObject2, combat_templateObject3, combat_templateObject4, combat_templateObject5, combat_templateObject6, combat_templateObject7, combat_templateObject8, combat_templateObject9, combat_templateObject10, combat_templateObject11, combat_templateObject12, combat_templateObject13, combat_templateObject14, combat_templateObject15, combat_templateObject16, combat_templateObject17, combat_templateObject18, combat_templateObject19, combat_templateObject20, combat_templateObject21, combat_templateObject22, combat_templateObject23, combat_templateObject24, combat_templateObject25, combat_templateObject26, combat_templateObject27, combat_templateObject28, combat_templateObject29, combat_templateObject30, combat_templateObject31, combat_templateObject32, combat_templateObject33, combat_templateObject34, combat_templateObject35, combat_templateObject36, combat_templateObject37, combat_templateObject38, combat_templateObject39, combat_templateObject40, combat_templateObject41, combat_templateObject42, combat_templateObject43, combat_templateObject44, combat_templateObject45, combat_templateObject46, combat_templateObject47, combat_templateObject48, combat_templateObject49, combat_templateObject50, combat_templateObject51, combat_templateObject52, combat_templateObject53, combat_templateObject54, combat_templateObject55, combat_templateObject56, combat_templateObject57, combat_templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124;

function combat_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var amateurNinja = (0,dist.$monster)(combat_templateObject || (combat_templateObject = combat_taggedTemplateLiteral(["amateur ninja"]))).id;
var noveltySkeleton = (0,dist.$monster)(combat_templateObject2 || (combat_templateObject2 = combat_taggedTemplateLiteral(["novelty tropical skeleton"]))).id;
var mastiff = (0,dist.$monster)(combat_templateObject3 || (combat_templateObject3 = combat_taggedTemplateLiteral(["toothless mastiff bitch"]))).id;
var gentrifier = (0,dist.$monster)(combat_templateObject4 || (combat_templateObject4 = combat_taggedTemplateLiteral(["gingerbread gentrifier"]))).id;
var toxicBeastie = (0,dist.$monster)(combat_templateObject5 || (combat_templateObject5 = combat_taggedTemplateLiteral(["toxic beastie"]))).id;
var LOVEnforcer = (0,dist.$monster)(combat_templateObject6 || (combat_templateObject6 = combat_taggedTemplateLiteral(["LOV Enforcer"]))).id;
var LOVEngineer = (0,dist.$monster)(combat_templateObject7 || (combat_templateObject7 = combat_taggedTemplateLiteral(["LOV Engineer"]))).id;
var DMTSquare = (0,dist.$monster)(combat_templateObject8 || (combat_templateObject8 = combat_taggedTemplateLiteral(["Performer of Actions"]))).id;
var DMTCircle = (0,dist.$monster)(combat_templateObject9 || (combat_templateObject9 = combat_taggedTemplateLiteral(["Thinker of Thoughts"]))).id;
var retailDistrict = (0,dist.$location)(combat_templateObject10 || (combat_templateObject10 = combat_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))).id;
var notAllowList = [(0,dist.$monster)(combat_templateObject11 || (combat_templateObject11 = combat_taggedTemplateLiteral(["sausage goblin"]))), // protonic ghosts
(0,dist.$monster)(combat_templateObject12 || (combat_templateObject12 = combat_taggedTemplateLiteral(["boneless blobghost"]))), (0,dist.$monster)(combat_templateObject13 || (combat_templateObject13 = combat_taggedTemplateLiteral(["Emily Koops, a spooky lime"]))), (0,dist.$monster)(combat_templateObject14 || (combat_templateObject14 = combat_taggedTemplateLiteral(["The ghost of Ebenoozer Screege"]))), (0,dist.$monster)(combat_templateObject15 || (combat_templateObject15 = combat_taggedTemplateLiteral(["The ghost of Jim Unfortunato"]))), (0,dist.$monster)(combat_templateObject16 || (combat_templateObject16 = combat_taggedTemplateLiteral(["The ghost of Lord Montague Spookyraven"]))), (0,dist.$monster)(combat_templateObject17 || (combat_templateObject17 = combat_taggedTemplateLiteral(["the ghost of Monsieur Baguelle"]))), (0,dist.$monster)(combat_templateObject18 || (combat_templateObject18 = combat_taggedTemplateLiteral(["the ghost of Oily McBindle"]))), (0,dist.$monster)(combat_templateObject19 || (combat_templateObject19 = combat_taggedTemplateLiteral(["The ghost of Richard Cockingham"]))), (0,dist.$monster)(combat_templateObject20 || (combat_templateObject20 = combat_taggedTemplateLiteral(["The ghost of Sam McGee"]))), (0,dist.$monster)(combat_templateObject21 || (combat_templateObject21 = combat_taggedTemplateLiteral(["The ghost of Vanillica \"Trashblossom\" Gorton"]))), (0,dist.$monster)(combat_templateObject22 || (combat_templateObject22 = combat_taggedTemplateLiteral(["The ghost of Waldo the Carpathian"]))), (0,dist.$monster)(combat_templateObject23 || (combat_templateObject23 = combat_taggedTemplateLiteral(["The Headless Horseman"]))), (0,dist.$monster)(combat_templateObject24 || (combat_templateObject24 = combat_taggedTemplateLiteral(["The Icewoman"]))), // mapped monsters
(0,dist.$monster)(combat_templateObject25 || (combat_templateObject25 = combat_taggedTemplateLiteral(["amateur ninja"]))), (0,dist.$monster)(combat_templateObject26 || (combat_templateObject26 = combat_taggedTemplateLiteral(["novelty tropical skeleton"]))), // gingerbread city
(0,dist.$monster)(combat_templateObject27 || (combat_templateObject27 = combat_taggedTemplateLiteral(["gingerbread finance bro"]))), (0,dist.$monster)(combat_templateObject28 || (combat_templateObject28 = combat_taggedTemplateLiteral(["gingerbread gentrifier"]))), (0,dist.$monster)(combat_templateObject29 || (combat_templateObject29 = combat_taggedTemplateLiteral(["gingerbread tech bro"]))), // witchess
(0,dist.$monster)(combat_templateObject30 || (combat_templateObject30 = combat_taggedTemplateLiteral(["Witchess Pawn"]))), (0,dist.$monster)(combat_templateObject31 || (combat_templateObject31 = combat_taggedTemplateLiteral(["Witchess Knight"]))), (0,dist.$monster)(combat_templateObject32 || (combat_templateObject32 = combat_taggedTemplateLiteral(["Witchess Bishop"]))), (0,dist.$monster)(combat_templateObject33 || (combat_templateObject33 = combat_taggedTemplateLiteral(["Witchess Rook"]))), (0,dist.$monster)(combat_templateObject34 || (combat_templateObject34 = combat_taggedTemplateLiteral(["Witchess Ox"]))), (0,dist.$monster)(combat_templateObject35 || (combat_templateObject35 = combat_taggedTemplateLiteral(["Witchess King"]))), (0,dist.$monster)(combat_templateObject36 || (combat_templateObject36 = combat_taggedTemplateLiteral(["Witchess Witch"]))), (0,dist.$monster)(combat_templateObject37 || (combat_templateObject37 = combat_taggedTemplateLiteral(["Witchess Queen"]))), // snojo
(0,dist.$monster)(combat_templateObject38 || (combat_templateObject38 = combat_taggedTemplateLiteral(["X-32-F Combat Training Snowman"]))), // BRICKOS
(0,dist.$monster)(combat_templateObject39 || (combat_templateObject39 = combat_taggedTemplateLiteral(["BRICKO ooze"]))), (0,dist.$monster)(combat_templateObject40 || (combat_templateObject40 = combat_taggedTemplateLiteral(["BRICKO bat"]))), (0,dist.$monster)(combat_templateObject41 || (combat_templateObject41 = combat_taggedTemplateLiteral(["BRICKO oyster"]))), (0,dist.$monster)(combat_templateObject42 || (combat_templateObject42 = combat_taggedTemplateLiteral(["BRICKO turtle"]))), (0,dist.$monster)(combat_templateObject43 || (combat_templateObject43 = combat_taggedTemplateLiteral(["BRICKO elephant"]))), (0,dist.$monster)(combat_templateObject44 || (combat_templateObject44 = combat_taggedTemplateLiteral(["BRICKO octopus"]))), (0,dist.$monster)(combat_templateObject45 || (combat_templateObject45 = combat_taggedTemplateLiteral(["BRICKO python"]))), // eldritch
(0,dist.$monster)(combat_templateObject46 || (combat_templateObject46 = combat_taggedTemplateLiteral(["Eldritch Tentacle"]))), // god lobster
(0,dist.$monster)(combat_templateObject47 || (combat_templateObject47 = combat_taggedTemplateLiteral(["God Lobster"]))), // voter monsters
(0,dist.$monster)(combat_templateObject48 || (combat_templateObject48 = combat_taggedTemplateLiteral(["angry ghost"]))), (0,dist.$monster)(combat_templateObject49 || (combat_templateObject49 = combat_taggedTemplateLiteral(["annoyed snake"]))), (0,dist.$monster)(combat_templateObject50 || (combat_templateObject50 = combat_taggedTemplateLiteral(["government bureaucrat"]))), (0,dist.$monster)(combat_templateObject51 || (combat_templateObject51 = combat_taggedTemplateLiteral(["slime blob"]))), (0,dist.$monster)(combat_templateObject52 || (combat_templateObject52 = combat_taggedTemplateLiteral(["terrible mutant"]))), // dmt monsters
(0,dist.$monster)(combat_templateObject53 || (combat_templateObject53 = combat_taggedTemplateLiteral(["Performer of Actions"]))), (0,dist.$monster)(combat_templateObject54 || (combat_templateObject54 = combat_taggedTemplateLiteral(["Thinker of Thoughts"]))), // neverending partygoers
(0,dist.$monster)(combat_templateObject55 || (combat_templateObject55 = combat_taggedTemplateLiteral(["biker"]))), (0,dist.$monster)(combat_templateObject56 || (combat_templateObject56 = combat_taggedTemplateLiteral(["burnout"]))), (0,dist.$monster)(combat_templateObject57 || (combat_templateObject57 = combat_taggedTemplateLiteral(["jock"]))), (0,dist.$monster)(combat_templateObject58 || (combat_templateObject58 = combat_taggedTemplateLiteral(["party girl"]))), (0,dist.$monster)(_templateObject59 || (_templateObject59 = combat_taggedTemplateLiteral(["\"plain\" girl"]))), // a boss
(0,dist.$monster)(_templateObject60 || (_templateObject60 = combat_taggedTemplateLiteral(["Mother Slime"]))), // toxic teacups
(0,dist.$monster)(_templateObject61 || (_templateObject61 = combat_taggedTemplateLiteral(["toxic beastie"]))), (0,dist.$monster)(_templateObject62 || (_templateObject62 = combat_taggedTemplateLiteral(["Black Crayon Slime"])))].map(m => "!monsterid ".concat(m.id)).join(" && ");
var Ghost = new dist.Macro().skill((0,dist.$skill)(_templateObject63 || (_templateObject63 = combat_taggedTemplateLiteral(["Summon Love Gnats"])))).skill((0,dist.$skill)(_templateObject64 || (_templateObject64 = combat_taggedTemplateLiteral(["Sing Along"])))).skill((0,dist.$skill)(_templateObject65 || (_templateObject65 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(_templateObject66 || (_templateObject66 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(_templateObject67 || (_templateObject67 = combat_taggedTemplateLiteral(["Shoot Ghost"])))).skill((0,dist.$skill)(_templateObject68 || (_templateObject68 = combat_taggedTemplateLiteral(["Trap Ghost"])))).abort();
var TryBanish = new dist.Macro() // Reserve Snokebomb for Mother Slime
.trySkill((0,dist.$skill)(_templateObject69 || (_templateObject69 = combat_taggedTemplateLiteral(["Throw Latte on Opponent"])))).trySkill((0,dist.$skill)(_templateObject70 || (_templateObject70 = combat_taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill((0,dist.$skill)(_templateObject71 || (_templateObject71 = combat_taggedTemplateLiteral(["Reflex Hammer"])))).trySkill((0,dist.$skill)(_templateObject72 || (_templateObject72 = combat_taggedTemplateLiteral(["Feel Hatred"])))).abort();
var Replace = new dist.Macro().skill((0,dist.$skill)(_templateObject73 || (_templateObject73 = combat_taggedTemplateLiteral(["Macrometeorite"]))));
var Backup = new dist.Macro().if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(_templateObject74 || (_templateObject74 = combat_taggedTemplateLiteral(["Back-Up to your Last Enemy"]))))), dist.Macro.skill((0,dist.$skill)(_templateObject75 || (_templateObject75 = combat_taggedTemplateLiteral(["Back-Up to your Last Enemy"])))).skill((0,dist.$skill)(_templateObject76 || (_templateObject76 = combat_taggedTemplateLiteral(["Saucy Salve"])))));
var Pride = new dist.Macro().if_( // Turbo used a flag to cast pride
"hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(_templateObject77 || (_templateObject77 = combat_taggedTemplateLiteral(["Turbo"]))))), dist.Macro.trySkill((0,dist.$skill)(_templateObject78 || (_templateObject78 = combat_taggedTemplateLiteral(["Feel Pride"])))));
var FreeInstaKill = new dist.Macro().skill((0,dist.$skill)(_templateObject79 || (_templateObject79 = combat_taggedTemplateLiteral(["Sing Along"])))).step(Pride).trySkill((0,dist.$skill)(_templateObject80 || (_templateObject80 = combat_taggedTemplateLiteral(["Chest X-Ray"])))).trySkill((0,dist.$skill)(_templateObject81 || (_templateObject81 = combat_taggedTemplateLiteral(["Shattering Punch"])))).trySkill((0,dist.$skill)(_templateObject82 || (_templateObject82 = combat_taggedTemplateLiteral(["Gingerbread Mob Hit"])))).trySkill((0,dist.$skill)(_templateObject83 || (_templateObject83 = combat_taggedTemplateLiteral(["Shocking Lick"])))).abort();
var CigKill = new dist.Macro().skill((0,dist.$skill)(_templateObject84 || (_templateObject84 = combat_taggedTemplateLiteral(["Sing Along"])))).step(Pride).tryItem((0,dist.$item)(_templateObject85 || (_templateObject85 = combat_taggedTemplateLiteral(["gingerbread cigarette"])))).abort();
var SingAndKill = new dist.Macro().skill((0,dist.$skill)(_templateObject86 || (_templateObject86 = combat_taggedTemplateLiteral(["Sing Along"])))).step(Pride).while_("!mpbelow ".concat((0,external_kolmafia_.mpCost)((0,dist.$skill)(_templateObject87 || (_templateObject87 = combat_taggedTemplateLiteral(["Saucestorm"]))))), dist.Macro.skill((0,dist.$skill)(_templateObject88 || (_templateObject88 = combat_taggedTemplateLiteral(["Saucestorm"]))))).attack().repeat();
var DefaultMacro = new dist.Macro().if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(_templateObject89 || (_templateObject89 = combat_taggedTemplateLiteral(["Shoot Ghost"]))))), Ghost).if_("monsterid ".concat(toxicBeastie), Backup).if_("monsterid ".concat(toxicBeastie), dist.Macro.skill((0,dist.$skill)(_templateObject90 || (_templateObject90 = combat_taggedTemplateLiteral(["Summon Love Gnats"])))).step(FreeInstaKill)).if_("monsterid ".concat(amateurNinja), FreeInstaKill).if_("monsterid ".concat(noveltySkeleton), dist.Macro.trySkill((0,dist.$skill)(_templateObject91 || (_templateObject91 = combat_taggedTemplateLiteral(["Open a Big Red Present"])))).skill((0,dist.$skill)(_templateObject92 || (_templateObject92 = combat_taggedTemplateLiteral(["Use the Force"]))))).if_("monsterid ".concat(mastiff), dist.Macro.skill((0,dist.$skill)(_templateObject93 || (_templateObject93 = combat_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(_templateObject94 || (_templateObject94 = combat_taggedTemplateLiteral(["Use the Force"]))))).if_("snarfblat ".concat(retailDistrict), CigKill).if_(notAllowList, TryBanish).trySkill((0,dist.$skill)(_templateObject95 || (_templateObject95 = combat_taggedTemplateLiteral(["Digitize"])))).trySkill((0,dist.$skill)(_templateObject96 || (_templateObject96 = combat_taggedTemplateLiteral(["%fn, spit on me!"])))).skill((0,dist.$skill)(_templateObject97 || (_templateObject97 = combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).skill((0,dist.$skill)(_templateObject98 || (_templateObject98 = combat_taggedTemplateLiteral(["Micrometeorite"])))).item((0,dist.$item)(_templateObject99 || (_templateObject99 = combat_taggedTemplateLiteral(["Time-Spinner"])))).if_("hasskill ".concat((0,external_kolmafia_.toInt)((0,dist.$skill)(_templateObject100 || (_templateObject100 = combat_taggedTemplateLiteral(["lecture on relativity"]))))), dist.Macro.skill((0,dist.$skill)(_templateObject101 || (_templateObject101 = combat_taggedTemplateLiteral(["lecture on relativity"])))).skill((0,dist.$skill)(_templateObject102 || (_templateObject102 = combat_taggedTemplateLiteral(["Saucy Salve"]))))).step(SingAndKill);
var MacroList = {
  FreeFight: DefaultMacro,
  FastFreeFight: SingAndKill,
  StenchFreeFight: new dist.Macro().if_("monsterid ".concat(toxicBeastie), Backup).if_("monsterid ".concat(toxicBeastie), dist.Macro.abort()).if_("monsterhpabove 250", dist.Macro.skill((0,dist.$skill)(_templateObject103 || (_templateObject103 = combat_taggedTemplateLiteral(["Curse of Weaksauce"]))))).skill((0,dist.$skill)(_templateObject104 || (_templateObject104 = combat_taggedTemplateLiteral(["Garbage Nova"])))),
  // Just runaway on its own causes a null pointer exception?
  Runaway: new dist.Macro().trySkill((0,dist.$skill)(_templateObject105 || (_templateObject105 = combat_taggedTemplateLiteral(["Saucy Salve"])))).step("runaway"),
  Banish: TryBanish,
  Nanobrainy: new dist.Macro().skill((0,dist.$skill)(_templateObject106 || (_templateObject106 = combat_taggedTemplateLiteral(["Entangling Noodles"])))).trySkill((0,dist.$skill)(_templateObject107 || (_templateObject107 = combat_taggedTemplateLiteral(["Giant Growth"])))).trySkill((0,dist.$skill)(_templateObject108 || (_templateObject108 = combat_taggedTemplateLiteral(["Become a Wolf"])))).step(TryBanish),
  Sprinkles: new dist.Macro().if_("monsterid ".concat(gentrifier), Replace).skill((0,dist.$skill)(_templateObject109 || (_templateObject109 = combat_taggedTemplateLiteral(["Meteor Shower"])))).step(FreeInstaKill),
  TunnelOfLOV: new dist.Macro().if_("monsterid ".concat(LOVEnforcer), dist.Macro.attack().repeat()).if_("monsterid ".concat(LOVEngineer), dist.Macro.skill((0,dist.$skill)(_templateObject110 || (_templateObject110 = combat_taggedTemplateLiteral(["Candyblast"])))).repeat()).step(DefaultMacro),
  WitchessQueen: new dist.Macro().item((0,dist.$item)(_templateObject111 || (_templateObject111 = combat_taggedTemplateLiteral(["Time-Spinner"])))).attack().repeat(),
  WitchessWitch: new dist.Macro().skill((0,dist.$skill)(_templateObject112 || (_templateObject112 = combat_taggedTemplateLiteral(["Curse of Weaksauce"])))).skill((0,dist.$skill)(_templateObject113 || (_templateObject113 = combat_taggedTemplateLiteral(["Sing Along"])))).attack().repeat(),
  DMTSquare: new dist.Macro().if_(notAllowList, dist.Macro.abort()).if_("!monsterid ".concat(DMTSquare), Replace).skill((0,dist.$skill)(_templateObject114 || (_templateObject114 = combat_taggedTemplateLiteral(["Feel Envy"])))).step(DefaultMacro),
  DMTCircle: new dist.Macro().if_(notAllowList, dist.Macro.abort()).if_("!monsterid ".concat(DMTCircle), Replace).tryItem((0,dist.$item)(_templateObject115 || (_templateObject115 = combat_taggedTemplateLiteral(["abstraction: action"])))).step(DefaultMacro),
  MotherSlime: new dist.Macro().if_(notAllowList, dist.Macro.abort()).trySkill((0,dist.$skill)(_templateObject116 || (_templateObject116 = combat_taggedTemplateLiteral(["KGB tranquilizer dart"])))).skill((0,dist.$skill)(_templateObject117 || (_templateObject117 = combat_taggedTemplateLiteral(["Snokebomb"])))),
  BatFormRunaway: new dist.Macro().trySkill((0,dist.$skill)(_templateObject118 || (_templateObject118 = combat_taggedTemplateLiteral(["Become a Bat"])))).step("runaway"),
  LatteGulpRunaway: new dist.Macro().trySkill((0,dist.$skill)(_templateObject119 || (_templateObject119 = combat_taggedTemplateLiteral(["Gulp Latte"])))).step("runaway"),
  MeteorForce: new dist.Macro().skill((0,dist.$skill)(_templateObject120 || (_templateObject120 = combat_taggedTemplateLiteral(["Meteor Shower"])))).skill((0,dist.$skill)(_templateObject121 || (_templateObject121 = combat_taggedTemplateLiteral(["Use the Force"])))),
  FoamForce: new dist.Macro().skill((0,dist.$skill)(_templateObject122 || (_templateObject122 = combat_taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill((0,dist.$skill)(_templateObject123 || (_templateObject123 = combat_taggedTemplateLiteral(["Use the Force"]))))
}; // Replace Libram's adventureMacro functionality for now with kolmafia-js 1.0.11

function adventure(loc, macro) {
  if ((0,external_kolmafia_.getAutoAttack)() !== 0) (0,external_kolmafia_.setAutoAttack)(0);
  (0,external_kolmafia_.adv1)(loc, 0, macro.toString());

  while ((0,external_kolmafia_.inMultiFight)()) {
    (0,external_kolmafia_.runCombat)(macro.toString());
  }

  if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
}
function adventureUrl(url, macro) {
  if ((0,external_kolmafia_.getAutoAttack)() !== 0) (0,external_kolmafia_.setAutoAttack)(0);
  (0,external_kolmafia_.visitUrl)(url);
  (0,external_kolmafia_.runCombat)(macro.toString());
  if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
}
function mapMonster(location, monster, macro) {
  if ((0,external_kolmafia_.getAutoAttack)() !== 0) (0,external_kolmafia_.setAutoAttack)(0);
  if ((0,dist.get)("_monstersMapped") >= 3) throw "Trying to map too many monsters";
  if (!(0,dist.get)("mappingMonsters")) (0,external_kolmafia_.useSkill)((0,dist.$skill)(_templateObject124 || (_templateObject124 = combat_taggedTemplateLiteral(["Map the Monsters"]))));
  var expectedTurnCount = (0,external_kolmafia_.myTurncount)();
  var mapPage = "";

  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/)) (0,external_kolmafia_.runCombat)(macro.toString());
    if ((0,external_kolmafia_.myTurncount)() > expectedTurnCount) throw "Wasted a turn somehow mapping monsters?";
  }

  (0,external_kolmafia_.visitUrl)("choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
  (0,external_kolmafia_.runCombat)(macro.toString());
  if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
  if ((0,dist.get)("mappingMonsters")) throw "Failed to unset map the monsters?";
}
function fightWitchess(piece, macro) {
  macro.setAutoAttack();
  dist.Witchess.fightPiece(piece);
  if ((0,external_kolmafia_.choiceFollowsFight)()) (0,external_kolmafia_.visitUrl)("choice.php");
  if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)(-1);
}
;// CONCATENATED MODULE: ./src/iotms.ts
var iotms_templateObject, iotms_templateObject2, iotms_templateObject3, iotms_templateObject4, iotms_templateObject5, iotms_templateObject6, iotms_templateObject7, iotms_templateObject8, iotms_templateObject9, iotms_templateObject10, iotms_templateObject11, iotms_templateObject12, iotms_templateObject13, iotms_templateObject14, iotms_templateObject15, iotms_templateObject16, iotms_templateObject17, iotms_templateObject18, iotms_templateObject19, iotms_templateObject20, iotms_templateObject21, iotms_templateObject22, iotms_templateObject23, iotms_templateObject24, iotms_templateObject25, iotms_templateObject26, iotms_templateObject27, iotms_templateObject28, iotms_templateObject29, iotms_templateObject30, iotms_templateObject31, iotms_templateObject32, iotms_templateObject33, iotms_templateObject34, iotms_templateObject35, iotms_templateObject36, iotms_templateObject37;

function iotms_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function castBestLibram() {
  var wantGreenCandy = !(0,dist.have)((0,dist.$item)(iotms_templateObject || (iotms_templateObject = iotms_taggedTemplateLiteral(["green candy heart"])))) && !(0,dist.have)((0,dist.$effect)(iotms_templateObject2 || (iotms_templateObject2 = iotms_taggedTemplateLiteral(["Heart of Green"]))));
  var brickosOwned = (0,external_kolmafia_.itemAmount)(BRICKO_TARGET_ITEM);
  var brickosNeeded = BRICKOS_PER_FIGHT * Math.max(0, 3 - ((0,dist.get)("_brickoFights") + brickosOwned));

  if (wantGreenCandy && (0,dist.get)("libramSummons") < 10) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject3 || (iotms_templateObject3 = iotms_taggedTemplateLiteral(["Summon Candy Heart"]))));
  } else if ((0,dist.get)("_brickoEyeSummons") < 3 || !(0,dist.have)((0,dist.$item)(iotms_templateObject4 || (iotms_templateObject4 = iotms_taggedTemplateLiteral(["BRICKO brick"]))), brickosNeeded)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject5 || (iotms_templateObject5 = iotms_taggedTemplateLiteral(["Summon BRICKOs"]))));
  } else if (wantGreenCandy) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject6 || (iotms_templateObject6 = iotms_taggedTemplateLiteral(["Summon Candy Heart"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject7 || (iotms_templateObject7 = iotms_taggedTemplateLiteral(["love song of icy revenge"]))), 2)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject8 || (iotms_templateObject8 = iotms_taggedTemplateLiteral(["Summon Love Song"]))));
  } else if ((0,dist.get)("_resolutionRareSummons") < 3) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject9 || (iotms_templateObject9 = iotms_taggedTemplateLiteral(["Summon Resolutions"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject10 || (iotms_templateObject10 = iotms_taggedTemplateLiteral(["pulled blue taffy"]))), 4)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject11 || (iotms_templateObject11 = iotms_taggedTemplateLiteral(["Summon Taffy"]))));
  } else if (!(0,dist.have)((0,dist.$item)(iotms_templateObject12 || (iotms_templateObject12 = iotms_taggedTemplateLiteral(["love song of icy revenge"]))), 4)) {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject13 || (iotms_templateObject13 = iotms_taggedTemplateLiteral(["Summon Love Song"]))));
  } else {
    (0,external_kolmafia_.useSkill)((0,dist.$skill)(iotms_templateObject14 || (iotms_templateObject14 = iotms_taggedTemplateLiteral(["Summon Resolutions"]))));
  }
}
function getPantogramPants() {
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject15 || (iotms_templateObject15 = iotms_taggedTemplateLiteral(["portable pantogram"])))) || (0,dist.have)((0,dist.$item)(iotms_templateObject16 || (iotms_templateObject16 = iotms_taggedTemplateLiteral(["pantogram pants"]))))) return;
  var m = new Map([[(0,dist.$stat)(iotms_templateObject17 || (iotms_templateObject17 = iotms_taggedTemplateLiteral(["Muscle"]))), 1], [(0,dist.$stat)(iotms_templateObject18 || (iotms_templateObject18 = iotms_taggedTemplateLiteral(["Mysticality"]))), 2], [(0,dist.$stat)(iotms_templateObject19 || (iotms_templateObject19 = iotms_taggedTemplateLiteral(["Moxie"]))), 3]]).get((0,external_kolmafia_.myPrimestat)());
  var element;

  (function (element) {
    element[element["hot"] = 1] = "hot";
    element[element["cold"] = 2] = "cold";
    element[element["spooky"] = 3] = "spooky";
    element[element["sleaze"] = 4] = "sleaze";
    element[element["stench"] = 5] = "stench";
  })(element || (element = {}));

  var e = element.spooky;
  var s1 = "-2,0";
  var s2 = "-2,0"; // Spell Damage +20%

  var s3 = "-1,0"; // Monsters will be less attracted to you

  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject20 || (iotms_templateObject20 = iotms_taggedTemplateLiteral(["portable pantogram"]))))));
  (0,external_kolmafia_.visitUrl)("choice.php?pwd=&whichchoice=1270&option=1&m=".concat(m, "&e=").concat(e, "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3));
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject21 || (iotms_templateObject21 = iotms_taggedTemplateLiteral(["pantogram pants"]))))) throw "Failed to create pantogram pants";
}
function harvestBatteries() {
  (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=&whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject22 || (iotms_templateObject22 = iotms_taggedTemplateLiteral(["potted power plant"]))))));

  for (var i = 0; i < 7; i++) {
    (0,external_kolmafia_.visitUrl)("choice.php?pwd=&whichchoice=1448&option=1&pp=".concat(i + 1));
  }
}
function scavengeDaycare() {
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!(0,dist.get)("_daycareNap")) (0,external_kolmafia_.runChoice)(1);

  if ((0,dist.get)("_daycareGymScavenges") < 1) {
    (0,external_kolmafia_.runChoice)(3);
    (0,external_kolmafia_.runChoice)(2);
  }
}
function spendAllMpOnLibrams() {
  while ((0,external_kolmafia_.myMp)() > (0,external_kolmafia_.mpCost)((0,dist.$skill)(iotms_templateObject23 || (iotms_templateObject23 = iotms_taggedTemplateLiteral(["Summon BRICKOs"]))))) {
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
  (0,external_kolmafia_.visitUrl)("inv_use.php?whichitem=".concat((0,external_kolmafia_.toInt)((0,dist.$item)(iotms_templateObject24 || (iotms_templateObject24 = iotms_taggedTemplateLiteral(["hewn moon-rune spoon"])))), "&doit=96&whichsign=").concat(moon));
}
function useDroppedItems() {
  new Map([[(0,dist.$item)(iotms_templateObject25 || (iotms_templateObject25 = iotms_taggedTemplateLiteral(["pulled violet taffy"]))), 50]]).forEach((limit, multiUse) => {
    if ((0,dist.have)(multiUse) && !(0,dist.have)(itemToEffect(multiUse), limit)) (0,external_kolmafia_.use)((0,external_kolmafia_.itemAmount)(multiUse), multiUse);
  });
  [// librams
  (0,dist.$item)(iotms_templateObject26 || (iotms_templateObject26 = iotms_taggedTemplateLiteral(["green candy heart"]))), (0,dist.$item)(iotms_templateObject27 || (iotms_templateObject27 = iotms_taggedTemplateLiteral(["pulled yellow taffy"]))), (0,dist.$item)(iotms_templateObject28 || (iotms_templateObject28 = iotms_taggedTemplateLiteral(["resolution: be feistier"]))), (0,dist.$item)(iotms_templateObject29 || (iotms_templateObject29 = iotms_taggedTemplateLiteral(["resolution: be happier"]))), (0,dist.$item)(iotms_templateObject30 || (iotms_templateObject30 = iotms_taggedTemplateLiteral(["resolution: be kinder"]))), (0,dist.$item)(iotms_templateObject31 || (iotms_templateObject31 = iotms_taggedTemplateLiteral(["resolution: be luckier"]))), (0,dist.$item)(iotms_templateObject32 || (iotms_templateObject32 = iotms_taggedTemplateLiteral(["resolution: be smarter"]))), (0,dist.$item)(iotms_templateObject33 || (iotms_templateObject33 = iotms_taggedTemplateLiteral(["resolution: be wealthier"]))), // other potions
  (0,dist.$item)(iotms_templateObject34 || (iotms_templateObject34 = iotms_taggedTemplateLiteral(["power pill"]))), (0,dist.$item)(iotms_templateObject35 || (iotms_templateObject35 = iotms_taggedTemplateLiteral(["short stack of pancakes"])))].forEach(singleUse => {
    if ((0,dist.have)(singleUse) && !(0,dist.have)(itemToEffect(singleUse))) (0,external_kolmafia_.use)(singleUse);
  });
}
function vote() {
  if ((0,external_kolmafia_.myClass)() !== (0,dist.$class)(iotms_templateObject36 || (iotms_templateObject36 = iotms_taggedTemplateLiteral(["Sauceror"])))) throw "Don't yet know how to run this as a ".concat((0,external_kolmafia_.myClass)());
  (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  (0,external_kolmafia_.visitUrl)("choice.php?pwd=&option=1&whichchoice=1331&g=2&local[]=1&local[]=3");
  if (!(0,dist.have)((0,dist.$item)(iotms_templateObject37 || (iotms_templateObject37 = iotms_taggedTemplateLiteral(["\"I Voted!\" sticker"]))))) throw "Voting failed";
}
;// CONCATENATED MODULE: ./src/quests.ts
var quests_templateObject, quests_templateObject2, quests_templateObject3, quests_templateObject4, quests_templateObject5, quests_templateObject6, quests_templateObject7, quests_templateObject8, quests_templateObject9, quests_templateObject10, quests_templateObject11, quests_templateObject12, quests_templateObject13, quests_templateObject14, quests_templateObject15, quests_templateObject16, quests_templateObject17, quests_templateObject18, quests_templateObject19, quests_templateObject20, quests_templateObject21, quests_templateObject22, quests_templateObject23, quests_templateObject24, quests_templateObject25, quests_templateObject26, quests_templateObject27, quests_templateObject28, quests_templateObject29, quests_templateObject30, quests_templateObject31, quests_templateObject32, quests_templateObject33, quests_templateObject34, quests_templateObject35, quests_templateObject36, quests_templateObject37, quests_templateObject38, quests_templateObject39, quests_templateObject40, quests_templateObject41, quests_templateObject42, quests_templateObject43, quests_templateObject44, quests_templateObject45, quests_templateObject46, quests_templateObject47, quests_templateObject48, quests_templateObject49, quests_templateObject50, quests_templateObject51, quests_templateObject52, quests_templateObject53, quests_templateObject54, quests_templateObject55, quests_templateObject56, quests_templateObject57, quests_templateObject58, quests_templateObject59, quests_templateObject60, quests_templateObject61, quests_templateObject62, quests_templateObject63, quests_templateObject64, quests_templateObject65, quests_templateObject66, quests_templateObject67, quests_templateObject68, quests_templateObject69, quests_templateObject70, quests_templateObject71, quests_templateObject72, quests_templateObject73, quests_templateObject74, quests_templateObject75, quests_templateObject76, quests_templateObject77, quests_templateObject78, quests_templateObject79, quests_templateObject80, quests_templateObject81, quests_templateObject82, quests_templateObject83, quests_templateObject84, quests_templateObject85, quests_templateObject86, quests_templateObject87, quests_templateObject88, quests_templateObject89, quests_templateObject90, quests_templateObject91, quests_templateObject92, quests_templateObject93, quests_templateObject94, quests_templateObject95, quests_templateObject96, quests_templateObject97, quests_templateObject98, quests_templateObject99, quests_templateObject100, quests_templateObject101, quests_templateObject102, quests_templateObject103, quests_templateObject104, quests_templateObject105, quests_templateObject106, quests_templateObject107, quests_templateObject108, quests_templateObject109, quests_templateObject110, quests_templateObject111, quests_templateObject112, quests_templateObject113, quests_templateObject114, quests_templateObject115, quests_templateObject116, quests_templateObject117, quests_templateObject118, quests_templateObject119, quests_templateObject120, quests_templateObject121, quests_templateObject122, quests_templateObject123, quests_templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321, _templateObject322, _templateObject323, _templateObject324, _templateObject325, _templateObject326, _templateObject327, _templateObject328, _templateObject329, _templateObject330, _templateObject331, _templateObject332, _templateObject333, _templateObject334, _templateObject335, _templateObject336, _templateObject337, _templateObject338, _templateObject339, _templateObject340, _templateObject341, _templateObject342, _templateObject343, _templateObject344, _templateObject345, _templateObject346, _templateObject347, _templateObject348, _templateObject349, _templateObject350, _templateObject351, _templateObject352, _templateObject353, _templateObject354, _templateObject355, _templateObject356, _templateObject357, _templateObject358, _templateObject359, _templateObject360, _templateObject361, _templateObject362, _templateObject363, _templateObject364, _templateObject365, _templateObject366, _templateObject367, _templateObject368, _templateObject369, _templateObject370, _templateObject371, _templateObject372, _templateObject373, _templateObject374, _templateObject375, _templateObject376, _templateObject377, _templateObject378, _templateObject379, _templateObject380, _templateObject381, _templateObject382, _templateObject383, _templateObject384, _templateObject385, _templateObject386, _templateObject387, _templateObject388, _questRecords, _templateObject389, _templateObject390;

function quests_slicedToArray(arr, i) { return quests_arrayWithHoles(arr) || quests_iterableToArrayLimit(arr, i) || quests_unsupportedIterableToArray(arr, i) || quests_nonIterableRest(); }

function quests_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function quests_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return quests_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return quests_arrayLikeToArray(o, minLen); }

function quests_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function quests_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function quests_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function quests_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




// prettier-ignore
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
var questRecords = (_questRecords = {}, _defineProperty(_questRecords, Quest.Beginning.id, () => {
  return {
    acquire: [(0,dist.$effect)(quests_templateObject || (quests_templateObject = quests_taggedTemplateLiteral(["Feeling Excited"]))), (0,dist.$effect)(quests_templateObject2 || (quests_templateObject2 = quests_taggedTemplateLiteral(["Feeling Peaceful"]))), (0,dist.$effect)(quests_templateObject3 || (quests_templateObject3 = quests_taggedTemplateLiteral(["Inscrutable Gaze"]))), (0,dist.$effect)(quests_templateObject4 || (quests_templateObject4 = quests_taggedTemplateLiteral(["Spirit of Peppermint"]))), (0,dist.$effect)(quests_templateObject5 || (quests_templateObject5 = quests_taggedTemplateLiteral(["Triple-Sized"]))), (0,dist.$effect)(quests_templateObject6 || (quests_templateObject6 = quests_taggedTemplateLiteral(["Uncucumbered"]))), (0,dist.$effect)(quests_templateObject7 || (quests_templateObject7 = quests_taggedTemplateLiteral(["substats.enh"]))), (0,dist.$effect)(quests_templateObject8 || (quests_templateObject8 = quests_taggedTemplateLiteral(["items.enh"]))), (0,dist.$effect)(quests_templateObject9 || (quests_templateObject9 = quests_taggedTemplateLiteral(["meat.enh"])))],
    check: [],
    equipment: new Map([[(0,dist.$slot)(quests_templateObject10 || (quests_templateObject10 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject11 || (quests_templateObject11 = quests_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [(0,dist.$slot)(quests_templateObject12 || (quests_templateObject12 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(quests_templateObject13 || (quests_templateObject13 = quests_taggedTemplateLiteral(["protonic accelerator pack"])))], //[$slot`shirt`, $item`fresh coat of paint`],
    [(0,dist.$slot)(quests_templateObject14 || (quests_templateObject14 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject15 || (quests_templateObject15 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject16 || (quests_templateObject16 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(quests_templateObject17 || (quests_templateObject17 = quests_taggedTemplateLiteral(["familiar scrapbook"])))], [(0,dist.$slot)(quests_templateObject18 || (quests_templateObject18 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(quests_templateObject19 || (quests_templateObject19 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(quests_templateObject20 || (quests_templateObject20 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject21 || (quests_templateObject21 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(quests_templateObject22 || (quests_templateObject22 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(quests_templateObject23 || (quests_templateObject23 = quests_taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(quests_templateObject24 || (quests_templateObject24 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject25 || (quests_templateObject25 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]])
  };
}), _defineProperty(_questRecords, Quest.CoilWire.id, () => {
  var bloodSugar = (0,external_kolmafia_.myClass)() === (0,dist.$class)(quests_templateObject26 || (quests_templateObject26 = quests_taggedTemplateLiteral(["Sauceror"]))) ? (0,dist.$effect)(quests_templateObject27 || (quests_templateObject27 = quests_taggedTemplateLiteral(["[1458]Blood Sugar Sauce Magic"]))) : (0,dist.$effect)(quests_templateObject28 || (quests_templateObject28 = quests_taggedTemplateLiteral(["[1457]Blood Sugar Sauce Magic"])));
  return {
    acquire: [bloodSugar],
    check: [],
    equipment: new Map([[(0,dist.$slot)(quests_templateObject29 || (quests_templateObject29 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject30 || (quests_templateObject30 = quests_taggedTemplateLiteral(["Iunion Crown"])))], [(0,dist.$slot)(quests_templateObject31 || (quests_templateObject31 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject32 || (quests_templateObject32 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject33 || (quests_templateObject33 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.have)((0,dist.$item)(quests_templateObject34 || (quests_templateObject34 = quests_taggedTemplateLiteral(["wrench"])))) ? (0,dist.$item)(quests_templateObject35 || (quests_templateObject35 = quests_taggedTemplateLiteral(["wrench"]))) : (0,dist.$item)(quests_templateObject36 || (quests_templateObject36 = quests_taggedTemplateLiteral(["industrial fire extinguisher"])))], [(0,dist.$slot)(quests_templateObject37 || (quests_templateObject37 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(quests_templateObject38 || (quests_templateObject38 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(quests_templateObject39 || (quests_templateObject39 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject40 || (quests_templateObject40 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(quests_templateObject41 || (quests_templateObject41 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(quests_templateObject42 || (quests_templateObject42 = quests_taggedTemplateLiteral(["Retrospecs"])))], [(0,dist.$slot)(quests_templateObject43 || (quests_templateObject43 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject44 || (quests_templateObject44 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]),
    retrocape: "heck thrill"
  };
}), _defineProperty(_questRecords, Quest.Leveling.id, () => {
  var toAcquire = [(0,dist.$effect)(quests_templateObject45 || (quests_templateObject45 = quests_taggedTemplateLiteral(["A Girl Named Sue"]))), (0,dist.$effect)(quests_templateObject46 || (quests_templateObject46 = quests_taggedTemplateLiteral(["Billiards Belligerence"]))), (0,dist.$effect)(quests_templateObject47 || (quests_templateObject47 = quests_taggedTemplateLiteral(["Broad-Spectrum Vaccine"]))), (0,dist.$effect)(quests_templateObject48 || (quests_templateObject48 = quests_taggedTemplateLiteral(["Favored by Lyle"]))), (0,dist.$effect)(quests_templateObject49 || (quests_templateObject49 = quests_taggedTemplateLiteral(["Fidoxene"]))), (0,dist.$effect)(quests_templateObject50 || (quests_templateObject50 = quests_taggedTemplateLiteral(["Grumpy and Ornery"]))), (0,dist.$effect)(quests_templateObject51 || (quests_templateObject51 = quests_taggedTemplateLiteral(["Hustlin'"]))), (0,dist.$effect)(quests_templateObject52 || (quests_templateObject52 = quests_taggedTemplateLiteral(["Loyal Tea"]))), (0,dist.$effect)(quests_templateObject53 || (quests_templateObject53 = quests_taggedTemplateLiteral(["Mental A-cue-ity"]))), (0,dist.$effect)(quests_templateObject54 || (quests_templateObject54 = quests_taggedTemplateLiteral(["Mystically Oiled"]))), (0,dist.$effect)(quests_templateObject55 || (quests_templateObject55 = quests_taggedTemplateLiteral(["Pisces in the Skyces"]))), (0,dist.$effect)(quests_templateObject56 || (quests_templateObject56 = quests_taggedTemplateLiteral(["Puzzle Champ"]))), (0,dist.$effect)(quests_templateObject57 || (quests_templateObject57 = quests_taggedTemplateLiteral(["Sigils of Yeg"]))), (0,dist.$effect)(quests_templateObject58 || (quests_templateObject58 = quests_taggedTemplateLiteral(["Starry-Eyed"]))), (0,dist.$effect)(quests_templateObject59 || (quests_templateObject59 = quests_taggedTemplateLiteral(["Total Protonic Reversal"]))), (0,dist.$effect)(quests_templateObject60 || (quests_templateObject60 = quests_taggedTemplateLiteral(["You Can Really Taste the Dormouse"]))), (0,dist.$effect)(quests_templateObject61 || (quests_templateObject61 = quests_taggedTemplateLiteral(["Warlock, Warstock, and Warbarrel"]))), // Beach comb
  (0,dist.$effect)(quests_templateObject62 || (quests_templateObject62 = quests_taggedTemplateLiteral(["Cold as Nice"]))), (0,dist.$effect)(quests_templateObject63 || (quests_templateObject63 = quests_taggedTemplateLiteral(["A Brush with Grossness"]))), (0,dist.$effect)(quests_templateObject64 || (quests_templateObject64 = quests_taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), (0,dist.$effect)(quests_templateObject65 || (quests_templateObject65 = quests_taggedTemplateLiteral(["Does It Have a Skull In There??"]))), (0,dist.$effect)(quests_templateObject66 || (quests_templateObject66 = quests_taggedTemplateLiteral(["Hot-Headed"]))), (0,dist.$effect)(quests_templateObject67 || (quests_templateObject67 = quests_taggedTemplateLiteral(["Lack of Body-Building"]))), (0,dist.$effect)(quests_templateObject68 || (quests_templateObject68 = quests_taggedTemplateLiteral(["Oiled, Slick"]))), (0,dist.$effect)(quests_templateObject69 || (quests_templateObject69 = quests_taggedTemplateLiteral(["Pomp & Circumsands"]))), (0,dist.$effect)(quests_templateObject70 || (quests_templateObject70 = quests_taggedTemplateLiteral(["Resting Beach Face"]))), (0,dist.$effect)(quests_templateObject71 || (quests_templateObject71 = quests_taggedTemplateLiteral(["We're All Made of Starfish"]))), (0,dist.$effect)(quests_templateObject72 || (quests_templateObject72 = quests_taggedTemplateLiteral(["You Learned Something Maybe!"]))), // Skills
  (0,dist.$effect)(quests_templateObject73 || (quests_templateObject73 = quests_taggedTemplateLiteral(["Big"]))), (0,dist.$effect)(quests_templateObject74 || (quests_templateObject74 = quests_taggedTemplateLiteral(["Blessing of the Bird"]))), (0,dist.$effect)(quests_templateObject75 || (quests_templateObject75 = quests_taggedTemplateLiteral(["Blessing of your favorite Bird"]))), (0,dist.$effect)(quests_templateObject76 || (quests_templateObject76 = quests_taggedTemplateLiteral(["Blood Bond"]))), (0,dist.$effect)(quests_templateObject77 || (quests_templateObject77 = quests_taggedTemplateLiteral(["Blood Bubble"]))), (0,dist.$effect)(quests_templateObject78 || (quests_templateObject78 = quests_taggedTemplateLiteral(["Carol of the Bulls"]))), (0,dist.$effect)(quests_templateObject79 || (quests_templateObject79 = quests_taggedTemplateLiteral(["Carol of the Hells"]))), (0,dist.$effect)(quests_templateObject80 || (quests_templateObject80 = quests_taggedTemplateLiteral(["Carol of the Thrills"]))), (0,dist.$effect)(quests_templateObject81 || (quests_templateObject81 = quests_taggedTemplateLiteral(["Feeling Excited"]))), (0,dist.$effect)(quests_templateObject82 || (quests_templateObject82 = quests_taggedTemplateLiteral(["Feeling Peaceful"]))), (0,dist.$effect)(quests_templateObject83 || (quests_templateObject83 = quests_taggedTemplateLiteral(["Frenzied, Bloody"]))), (0,dist.$effect)(quests_templateObject84 || (quests_templateObject84 = quests_taggedTemplateLiteral(["Inscrutable Gaze"]))), (0,dist.$effect)(quests_templateObject85 || (quests_templateObject85 = quests_taggedTemplateLiteral(["Ruthlessly Efficient"]))), (0,dist.$effect)(quests_templateObject86 || (quests_templateObject86 = quests_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), (0,dist.$effect)(quests_templateObject87 || (quests_templateObject87 = quests_taggedTemplateLiteral(["Triple-Sized"]))), // Batteries
  (0,dist.$effect)(quests_templateObject88 || (quests_templateObject88 = quests_taggedTemplateLiteral(["AAA-Charged"]))), // +30 MP
  (0,dist.$effect)(quests_templateObject89 || (quests_templateObject89 = quests_taggedTemplateLiteral(["Lantern-Charged"]))), // +70 MP
  // Class skills
  (0,dist.$effect)(quests_templateObject90 || (quests_templateObject90 = quests_taggedTemplateLiteral(["Astral Shell"]))), (0,dist.$effect)(quests_templateObject91 || (quests_templateObject91 = quests_taggedTemplateLiteral(["Elemental Saucesphere"]))), (0,dist.$effect)(quests_templateObject92 || (quests_templateObject92 = quests_taggedTemplateLiteral(["Empathy"]))), (0,dist.$effect)(quests_templateObject93 || (quests_templateObject93 = quests_taggedTemplateLiteral(["Ghostly Shell"]))), (0,dist.$effect)(quests_templateObject94 || (quests_templateObject94 = quests_taggedTemplateLiteral(["Leash of Linguini"]))), (0,dist.$effect)(quests_templateObject95 || (quests_templateObject95 = quests_taggedTemplateLiteral(["Springy Fusilli"]))), // Songs
  (0,dist.$effect)(quests_templateObject96 || (quests_templateObject96 = quests_taggedTemplateLiteral(["Ode to Booze"]))), (0,dist.$effect)(quests_templateObject97 || (quests_templateObject97 = quests_taggedTemplateLiteral(["Polka of Plenty"])))];
  var mpSavings = (0,external_kolmafia_.numericModifier)((0,dist.$item)(quests_templateObject98 || (quests_templateObject98 = quests_taggedTemplateLiteral(["pantogram pants"]))), "mana cost") !== 0;
  var toWear = new Map([[(0,dist.$slot)(quests_templateObject99 || (quests_templateObject99 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(quests_templateObject100 || (quests_templateObject100 = quests_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [(0,dist.$slot)(quests_templateObject101 || (quests_templateObject101 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(quests_templateObject102 || (quests_templateObject102 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(quests_templateObject103 || (quests_templateObject103 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(quests_templateObject104 || (quests_templateObject104 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(quests_templateObject105 || (quests_templateObject105 = quests_taggedTemplateLiteral(["pants"]))), mpSavings ? (0,dist.$item)(quests_templateObject106 || (quests_templateObject106 = quests_taggedTemplateLiteral(["pantogram pants"]))) : (0,dist.$item)(quests_templateObject107 || (quests_templateObject107 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(quests_templateObject108 || (quests_templateObject108 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(quests_templateObject109 || (quests_templateObject109 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], // When re-running the script, may have the broom available
  [(0,dist.$slot)(quests_templateObject110 || (quests_templateObject110 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.have)((0,dist.$item)(quests_templateObject111 || (quests_templateObject111 = quests_taggedTemplateLiteral(["battle broom"])))) ? (0,dist.$item)(quests_templateObject112 || (quests_templateObject112 = quests_taggedTemplateLiteral(["battle broom"]))) : (0,dist.$item)(quests_templateObject113 || (quests_templateObject113 = quests_taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(quests_templateObject114 || (quests_templateObject114 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(quests_templateObject115 || (quests_templateObject115 = quests_taggedTemplateLiteral(["Beach Comb"])))]]);
  var toCape = !(0,dist.have)((0,dist.$item)(quests_templateObject116 || (quests_templateObject116 = quests_taggedTemplateLiteral(["LOV Epaulettes"])))) ? "heck thrill" : undefined;
  if ((0,dist.have)((0,dist.$item)(quests_templateObject117 || (quests_templateObject117 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))))) toWear.set((0,dist.$slot)(quests_templateObject118 || (quests_templateObject118 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(quests_templateObject119 || (quests_templateObject119 = quests_taggedTemplateLiteral(["LOV Epaulettes"]))));
  return {
    acquire: toAcquire,
    check: [],
    equipment: toWear,
    retrocape: toCape
  };
}), _defineProperty(_questRecords, Quest.LevelingML.id, () => {
  var pastalordShield = (0,external_kolmafia_.myClass)() === (0,dist.$class)(quests_templateObject120 || (quests_templateObject120 = quests_taggedTemplateLiteral(["Pastamancer"]))) ? (0,dist.$effect)(quests_templateObject121 || (quests_templateObject121 = quests_taggedTemplateLiteral(["Shield of the Pastalord"]))) : (0,dist.$effect)(quests_templateObject122 || (quests_templateObject122 = quests_taggedTemplateLiteral(["Flimsy Shield of the Pastalord"])));
  var toAcquire = [pastalordShield, (0,dist.$effect)(quests_templateObject123 || (quests_templateObject123 = quests_taggedTemplateLiteral(["Drescher's Annoying Noise"]))), (0,dist.$effect)(quests_templateObject124 || (quests_templateObject124 = quests_taggedTemplateLiteral(["Polka of Plenty"]))), (0,dist.$effect)(_templateObject125 || (_templateObject125 = quests_taggedTemplateLiteral(["Pride of the Puffin"]))), (0,dist.$effect)(_templateObject126 || (_templateObject126 = quests_taggedTemplateLiteral(["Ur-Kel's Aria of Annoyance"])))];
  var toWear = new Map([[(0,dist.$slot)(_templateObject127 || (_templateObject127 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject128 || (_templateObject128 = quests_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [(0,dist.$slot)(_templateObject129 || (_templateObject129 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject130 || (_templateObject130 = quests_taggedTemplateLiteral(["LOV Epaulettes"])))], [(0,dist.$slot)(_templateObject131 || (_templateObject131 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject132 || (_templateObject132 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject133 || (_templateObject133 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject134 || (_templateObject134 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(_templateObject135 || (_templateObject135 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject136 || (_templateObject136 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject137 || (_templateObject137 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject138 || (_templateObject138 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(_templateObject139 || (_templateObject139 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.have)((0,dist.$item)(_templateObject140 || (_templateObject140 = quests_taggedTemplateLiteral(["battle broom"])))) ? (0,dist.$item)(_templateObject141 || (_templateObject141 = quests_taggedTemplateLiteral(["battle broom"]))) : (0,dist.$item)(_templateObject142 || (_templateObject142 = quests_taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(_templateObject143 || (_templateObject143 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject144 || (_templateObject144 = quests_taggedTemplateLiteral(["Beach Comb"])))]]);
  return {
    acquire: toAcquire,
    check: [],
    equipment: toWear
  };
}), _defineProperty(_questRecords, Quest.DeepDark.id, () => {
  var toWear = new Map([[(0,dist.$slot)(_templateObject145 || (_templateObject145 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject146 || (_templateObject146 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject147 || (_templateObject147 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject148 || (_templateObject148 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject149 || (_templateObject149 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject150 || (_templateObject150 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
  if ((0,dist.have)((0,dist.$item)(_templateObject151 || (_templateObject151 = quests_taggedTemplateLiteral(["burning paper crane"]))))) toWear.set((0,dist.$slot)(_templateObject152 || (_templateObject152 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject153 || (_templateObject153 = quests_taggedTemplateLiteral(["burning paper crane"]))));
  return {
    acquire: [(0,dist.$effect)(_templateObject154 || (_templateObject154 = quests_taggedTemplateLiteral(["Polka of Plenty"])))],
    check: [],
    equipment: toWear,
    retrocape: "vampire hold",
    familiar: (0,dist.$familiar)(_templateObject155 || (_templateObject155 = quests_taggedTemplateLiteral(["Exotic Parrot"])))
  };
}), _defineProperty(_questRecords, Quest.Vintner.id, () => {
  var toAcquire = [(0,dist.$effect)(_templateObject156 || (_templateObject156 = quests_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), (0,dist.$effect)(_templateObject157 || (_templateObject157 = quests_taggedTemplateLiteral(["Polka of Plenty"]))), (0,dist.$effect)(_templateObject158 || (_templateObject158 = quests_taggedTemplateLiteral(["Sauce Monocle"]))), (0,dist.$effect)(_templateObject159 || (_templateObject159 = quests_taggedTemplateLiteral(["Song of Sauce"]))), (0,dist.$effect)(_templateObject160 || (_templateObject160 = quests_taggedTemplateLiteral(["Wizard Squint"])))];
  var toCheck = [(0,dist.$effect)(_templateObject161 || (_templateObject161 = quests_taggedTemplateLiteral(["Bastille Bourgeoisie"]))), (0,dist.$effect)(_templateObject162 || (_templateObject162 = quests_taggedTemplateLiteral(["Pointy Wizard Beard"]))), (0,dist.$effect)(_templateObject163 || (_templateObject163 = quests_taggedTemplateLiteral(["Sparkly!"]))), (0,dist.$effect)(_templateObject164 || (_templateObject164 = quests_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))];
  var toEquip = new Map([[(0,dist.$slot)(_templateObject165 || (_templateObject165 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject166 || (_templateObject166 = quests_taggedTemplateLiteral(["LOV Epaulettes"])))], [(0,dist.$slot)(_templateObject167 || (_templateObject167 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject168 || (_templateObject168 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(_templateObject169 || (_templateObject169 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject170 || (_templateObject170 = quests_taggedTemplateLiteral(["wrench"])))], [(0,dist.$slot)(_templateObject171 || (_templateObject171 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject172 || (_templateObject172 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject173 || (_templateObject173 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject174 || (_templateObject174 = quests_taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(_templateObject175 || (_templateObject175 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject176 || (_templateObject176 = quests_taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject177 || (_templateObject177 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject178 || (_templateObject178 = quests_taggedTemplateLiteral(["backup camera"])))]]);
  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toEquip
  };
}), _defineProperty(_questRecords, Quest.Muscle.id, () => {
  return {
    acquire: [(0,dist.$effect)(_templateObject179 || (_templateObject179 = quests_taggedTemplateLiteral(["Expert Oiliness"]))), (0,dist.$effect)(_templateObject180 || (_templateObject180 = quests_taggedTemplateLiteral(["Phorcefullness"]))), (0,dist.$effect)(_templateObject181 || (_templateObject181 = quests_taggedTemplateLiteral(["Quiet Determination"]))), (0,dist.$effect)(_templateObject182 || (_templateObject182 = quests_taggedTemplateLiteral(["Rage of the Reindeer"])))],
    check: [(0,dist.$effect)(_templateObject183 || (_templateObject183 = quests_taggedTemplateLiteral(["Giant Growth"]))), (0,dist.$effect)(_templateObject184 || (_templateObject184 = quests_taggedTemplateLiteral(["Spit Upon"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject185 || (_templateObject185 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject186 || (_templateObject186 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject187 || (_templateObject187 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject188 || (_templateObject188 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject189 || (_templateObject189 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject190 || (_templateObject190 = quests_taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject191 || (_templateObject191 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject192 || (_templateObject192 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject193 || (_templateObject193 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject194 || (_templateObject194 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]),
    retrocape: "muscle"
  };
}), _defineProperty(_questRecords, Quest.Moxie.id, () => {
  return {
    acquire: [(0,dist.$effect)(_templateObject195 || (_templateObject195 = quests_taggedTemplateLiteral(["Disco Fever"]))), (0,dist.$effect)(_templateObject196 || (_templateObject196 = quests_taggedTemplateLiteral(["Expert Oiliness"]))), (0,dist.$effect)(_templateObject197 || (_templateObject197 = quests_taggedTemplateLiteral(["Quiet Desperation"])))],
    check: [(0,dist.$effect)(_templateObject198 || (_templateObject198 = quests_taggedTemplateLiteral(["Sparkly!"]))), (0,dist.$effect)(_templateObject199 || (_templateObject199 = quests_taggedTemplateLiteral(["Spit Upon"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject200 || (_templateObject200 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject201 || (_templateObject201 = quests_taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject202 || (_templateObject202 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject203 || (_templateObject203 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject204 || (_templateObject204 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject205 || (_templateObject205 = quests_taggedTemplateLiteral(["industrial fire extinguisher"])))], [(0,dist.$slot)(_templateObject206 || (_templateObject206 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject207 || (_templateObject207 = quests_taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject208 || (_templateObject208 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject209 || (_templateObject209 = quests_taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject210 || (_templateObject210 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject211 || (_templateObject211 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]),
    retrocape: "moxie"
  };
}), _defineProperty(_questRecords, Quest.HP.id, () => {
  var candle = (0,dist.$item)(_templateObject212 || (_templateObject212 = quests_taggedTemplateLiteral(["extra-wide head candle"])));
  return {
    acquire: [(0,dist.$effect)(_templateObject213 || (_templateObject213 = quests_taggedTemplateLiteral(["Song of Starch"])))],
    check: [],
    equipment: new Map([[(0,dist.$slot)(_templateObject214 || (_templateObject214 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.have)(candle) ? candle : (0,dist.$item)(_templateObject215 || (_templateObject215 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject216 || (_templateObject216 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject217 || (_templateObject217 = quests_taggedTemplateLiteral(["vampyric cloake"])))], [(0,dist.$slot)(_templateObject218 || (_templateObject218 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject219 || (_templateObject219 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject220 || (_templateObject220 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject221 || (_templateObject221 = quests_taggedTemplateLiteral(["Cargo Cultist Shorts"])))], [(0,dist.$slot)(_templateObject222 || (_templateObject222 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject223 || (_templateObject223 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]])
  };
}), _defineProperty(_questRecords, Quest.SpellDamage.id, () => {
  var candle = (0,dist.$item)(_templateObject224 || (_templateObject224 = quests_taggedTemplateLiteral(["Abracandalabra"])));
  return {
    acquire: [(0,dist.$effect)(_templateObject225 || (_templateObject225 = quests_taggedTemplateLiteral(["Arched Eyebrow of the Archmage"]))), (0,dist.$effect)(_templateObject226 || (_templateObject226 = quests_taggedTemplateLiteral(["Cowrruption"]))), (0,dist.$effect)(_templateObject227 || (_templateObject227 = quests_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), (0,dist.$effect)(_templateObject228 || (_templateObject228 = quests_taggedTemplateLiteral(["Song of Sauce"]))), (0,dist.$effect)(_templateObject229 || (_templateObject229 = quests_taggedTemplateLiteral(["The Magic of LOV"])))],
    check: [(0,dist.$effect)(_templateObject230 || (_templateObject230 = quests_taggedTemplateLiteral(["Do You Crush What I Crush?"]))), (0,dist.$effect)(_templateObject231 || (_templateObject231 = quests_taggedTemplateLiteral(["Filled with Magic"]))), (0,dist.$effect)(_templateObject232 || (_templateObject232 = quests_taggedTemplateLiteral(["In a Lather"]))), (0,dist.$effect)(_templateObject233 || (_templateObject233 = quests_taggedTemplateLiteral(["Inner Elf"]))), (0,dist.$effect)(_templateObject234 || (_templateObject234 = quests_taggedTemplateLiteral(["Meteor Showered"]))), (0,dist.$effect)(_templateObject235 || (_templateObject235 = quests_taggedTemplateLiteral(["Nanobrainy"]))), (0,dist.$effect)(_templateObject236 || (_templateObject236 = quests_taggedTemplateLiteral(["Sparkly!"]))), (0,dist.$effect)(_templateObject237 || (_templateObject237 = quests_taggedTemplateLiteral(["Spit Upon"]))), (0,dist.$effect)(_templateObject238 || (_templateObject238 = quests_taggedTemplateLiteral(["Toxic Vengeance"]))), (0,dist.$effect)(_templateObject239 || (_templateObject239 = quests_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject240 || (_templateObject240 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject241 || (_templateObject241 = quests_taggedTemplateLiteral(["wrench"])))], [(0,dist.$slot)(_templateObject242 || (_templateObject242 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject243 || (_templateObject243 = quests_taggedTemplateLiteral(["weeping willow wand"])))], [(0,dist.$slot)(_templateObject244 || (_templateObject244 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject245 || (_templateObject245 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject246 || (_templateObject246 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject247 || (_templateObject247 = quests_taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject248 || (_templateObject248 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject249 || (_templateObject249 = quests_taggedTemplateLiteral(["Powerful Glove"])))], [(0,dist.$slot)(_templateObject250 || (_templateObject250 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject251 || (_templateObject251 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))], [(0,dist.$slot)(_templateObject252 || (_templateObject252 = quests_taggedTemplateLiteral(["familiar"]))), (0,dist.have)(candle) ? candle : (0,dist.$item)(_templateObject253 || (_templateObject253 = quests_taggedTemplateLiteral(["astral statuette"])))]]),
    familiar: (0,dist.$familiar)(_templateObject254 || (_templateObject254 = quests_taggedTemplateLiteral(["Left-Hand Man"])))
  };
}), _defineProperty(_questRecords, Quest.WeaponDamage.id, () => {
  var toAcquire = [(0,dist.$effect)(_templateObject255 || (_templateObject255 = quests_taggedTemplateLiteral(["Bow-Legged Swagger"]))), (0,dist.$effect)(_templateObject256 || (_templateObject256 = quests_taggedTemplateLiteral(["Cowrruption"]))), (0,dist.$effect)(_templateObject257 || (_templateObject257 = quests_taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), (0,dist.$effect)(_templateObject258 || (_templateObject258 = quests_taggedTemplateLiteral(["Rage of the Reindeer"]))), (0,dist.$effect)(_templateObject259 || (_templateObject259 = quests_taggedTemplateLiteral(["Scowl of the Auk"]))), (0,dist.$effect)(_templateObject260 || (_templateObject260 = quests_taggedTemplateLiteral(["Song of the North"]))), (0,dist.$effect)(_templateObject261 || (_templateObject261 = quests_taggedTemplateLiteral(["Tenacity of the Snapper"]))), (0,dist.$effect)(_templateObject262 || (_templateObject262 = quests_taggedTemplateLiteral(["The Power of LOV"])))];
  var toCheck = [(0,dist.$effect)(_templateObject263 || (_templateObject263 = quests_taggedTemplateLiteral(["Do You Crush What I Crush?"]))), (0,dist.$effect)(_templateObject264 || (_templateObject264 = quests_taggedTemplateLiteral(["In a Lather"]))), (0,dist.$effect)(_templateObject265 || (_templateObject265 = quests_taggedTemplateLiteral(["Inner Elf"]))), (0,dist.$effect)(_templateObject266 || (_templateObject266 = quests_taggedTemplateLiteral(["Meteor Showered"]))), (0,dist.$effect)(_templateObject267 || (_templateObject267 = quests_taggedTemplateLiteral(["Spit Upon"])))];
  var toWear = new Map([[(0,dist.$slot)(_templateObject268 || (_templateObject268 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject269 || (_templateObject269 = quests_taggedTemplateLiteral(["broken champagne bottle"])))], [(0,dist.$slot)(_templateObject270 || (_templateObject270 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject271 || (_templateObject271 = quests_taggedTemplateLiteral(["dented scepter"])))], [(0,dist.$slot)(_templateObject272 || (_templateObject272 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject273 || (_templateObject273 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject274 || (_templateObject274 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject275 || (_templateObject275 = quests_taggedTemplateLiteral(["Powerful Glove"])))]]);
  var candle = (0,dist.$item)(_templateObject276 || (_templateObject276 = quests_taggedTemplateLiteral(["extra-wide head candle"])));
  if ((0,dist.have)(candle)) toWear.set((0,dist.$slot)(_templateObject277 || (_templateObject277 = quests_taggedTemplateLiteral(["hat"]))), candle);
  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toWear
  };
}), _defineProperty(_questRecords, Quest.CombatFrequency.id, () => {
  return {
    acquire: [(0,dist.$effect)(_templateObject278 || (_templateObject278 = quests_taggedTemplateLiteral(["Feeling Lonely"]))), (0,dist.$effect)(_templateObject279 || (_templateObject279 = quests_taggedTemplateLiteral(["Gummed Shoes"]))), (0,dist.$effect)(_templateObject280 || (_templateObject280 = quests_taggedTemplateLiteral(["Invisible Avatar"]))), (0,dist.$effect)(_templateObject281 || (_templateObject281 = quests_taggedTemplateLiteral(["Shortly Buttered"]))), (0,dist.$effect)(_templateObject282 || (_templateObject282 = quests_taggedTemplateLiteral(["Silent Running"]))), (0,dist.$effect)(_templateObject283 || (_templateObject283 = quests_taggedTemplateLiteral(["Smooth Movements"]))), (0,dist.$effect)(_templateObject284 || (_templateObject284 = quests_taggedTemplateLiteral(["The Sonata of Sneakiness"]))), (0,dist.$effect)(_templateObject285 || (_templateObject285 = quests_taggedTemplateLiteral(["Throwing Some Shade"])))],
    check: [(0,dist.$effect)(_templateObject286 || (_templateObject286 = quests_taggedTemplateLiteral(["Silence of the God Lobster"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject287 || (_templateObject287 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject288 || (_templateObject288 = quests_taggedTemplateLiteral(["very pointy crown"])))], [(0,dist.$slot)(_templateObject289 || (_templateObject289 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject290 || (_templateObject290 = quests_taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(_templateObject291 || (_templateObject291 = quests_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(_templateObject292 || (_templateObject292 = quests_taggedTemplateLiteral(["pantogram pants"])))], [(0,dist.$slot)(_templateObject293 || (_templateObject293 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject294 || (_templateObject294 = quests_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]),
    familiar: (0,dist.$familiar)(_templateObject295 || (_templateObject295 = quests_taggedTemplateLiteral(["Disgeist"])))
  };
}), _defineProperty(_questRecords, Quest.HotResist.id, () => {
  return {
    acquire: [(0,dist.$effect)(_templateObject296 || (_templateObject296 = quests_taggedTemplateLiteral(["Astral Shell"]))), (0,dist.$effect)(_templateObject297 || (_templateObject297 = quests_taggedTemplateLiteral(["Elemental Saucesphere"]))), (0,dist.$effect)(_templateObject298 || (_templateObject298 = quests_taggedTemplateLiteral(["Empathy"])))],
    check: [(0,dist.$effect)(_templateObject299 || (_templateObject299 = quests_taggedTemplateLiteral(["Fireproof Foam Suit"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject300 || (_templateObject300 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject301 || (_templateObject301 = quests_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [(0,dist.$slot)(_templateObject302 || (_templateObject302 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject303 || (_templateObject303 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject304 || (_templateObject304 = quests_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(_templateObject305 || (_templateObject305 = quests_taggedTemplateLiteral(["industrial fire extinguisher"])))], [(0,dist.$slot)(_templateObject306 || (_templateObject306 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject307 || (_templateObject307 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject308 || (_templateObject308 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject309 || (_templateObject309 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(_templateObject310 || (_templateObject310 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject311 || (_templateObject311 = quests_taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject312 || (_templateObject312 = quests_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject313 || (_templateObject313 = quests_taggedTemplateLiteral(["cracker"])))]]),
    retrocape: "vampire hold",
    familiar: (0,dist.$familiar)(_templateObject314 || (_templateObject314 = quests_taggedTemplateLiteral(["Exotic Parrot"])))
  };
}), _defineProperty(_questRecords, Quest.FamiliarWeight.id, () => {
  var rope = (0,dist.$item)(_templateObject315 || (_templateObject315 = quests_taggedTemplateLiteral(["rope"])));
  var crane = (0,dist.$item)(_templateObject316 || (_templateObject316 = quests_taggedTemplateLiteral(["burning paper crane"])));
  var offhand = (0,dist.have)(rope) ? rope : (0,dist.have)(crane) ? crane : (0,dist.$item)(_templateObject317 || (_templateObject317 = quests_taggedTemplateLiteral(["familiar scrapbook"])));
  return {
    acquire: [(0,dist.$effect)(_templateObject318 || (_templateObject318 = quests_taggedTemplateLiteral(["Empathy"]))), (0,dist.$effect)(_templateObject319 || (_templateObject319 = quests_taggedTemplateLiteral(["Joy"]))), (0,dist.$effect)(_templateObject320 || (_templateObject320 = quests_taggedTemplateLiteral(["Robot Friends"]))), (0,dist.$effect)(_templateObject321 || (_templateObject321 = quests_taggedTemplateLiteral(["Shortly Stacked"]))), (0,dist.$effect)(_templateObject322 || (_templateObject322 = quests_taggedTemplateLiteral(["Whole Latte Love"])))],
    check: [(0,dist.$effect)(_templateObject323 || (_templateObject323 = quests_taggedTemplateLiteral(["[1701]Hip to the Jive"]))), (0,dist.$effect)(_templateObject324 || (_templateObject324 = quests_taggedTemplateLiteral(["All Is Forgiven"]))), (0,dist.$effect)(_templateObject325 || (_templateObject325 = quests_taggedTemplateLiteral(["Bureaucratized"]))), (0,dist.$effect)(_templateObject326 || (_templateObject326 = quests_taggedTemplateLiteral(["Chorale of Companionship"]))), (0,dist.$effect)(_templateObject327 || (_templateObject327 = quests_taggedTemplateLiteral(["Down With Chow"]))), (0,dist.$effect)(_templateObject328 || (_templateObject328 = quests_taggedTemplateLiteral(["Meteor Showered"]))), (0,dist.$effect)(_templateObject329 || (_templateObject329 = quests_taggedTemplateLiteral(["Open Heart Surgery"]))), (0,dist.$effect)(_templateObject330 || (_templateObject330 = quests_taggedTemplateLiteral(["You Can Really Taste the Dormouse"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject331 || (_templateObject331 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject332 || (_templateObject332 = quests_taggedTemplateLiteral(["Daylight Shavings Helmet"])))], [(0,dist.$slot)(_templateObject333 || (_templateObject333 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject334 || (_templateObject334 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject335 || (_templateObject335 = quests_taggedTemplateLiteral(["off-hand"]))), offhand], [(0,dist.$slot)(_templateObject336 || (_templateObject336 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject337 || (_templateObject337 = quests_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(_templateObject338 || (_templateObject338 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject339 || (_templateObject339 = quests_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(_templateObject340 || (_templateObject340 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject341 || (_templateObject341 = quests_taggedTemplateLiteral(["Beach Comb"])))], [(0,dist.$slot)(_templateObject342 || (_templateObject342 = quests_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject343 || (_templateObject343 = quests_taggedTemplateLiteral(["cracker"])))]]),
    familiar: (0,dist.$familiar)(_templateObject344 || (_templateObject344 = quests_taggedTemplateLiteral(["Exotic Parrot"])))
  };
}), _defineProperty(_questRecords, Quest.ItemDrop.id, () => {
  var toAcquire = [(0,dist.$effect)(_templateObject345 || (_templateObject345 = quests_taggedTemplateLiteral(["Blessing of the Bird"]))), (0,dist.$effect)(_templateObject346 || (_templateObject346 = quests_taggedTemplateLiteral(["Ermine Eyes"]))), (0,dist.$effect)(_templateObject347 || (_templateObject347 = quests_taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))), (0,dist.$effect)(_templateObject348 || (_templateObject348 = quests_taggedTemplateLiteral(["Feeling Lost"]))), (0,dist.$effect)(_templateObject349 || (_templateObject349 = quests_taggedTemplateLiteral(["Nearly All-Natural"]))), (0,dist.$effect)(_templateObject350 || (_templateObject350 = quests_taggedTemplateLiteral(["Singer's Faithful Ocelot"]))), (0,dist.$effect)(_templateObject351 || (_templateObject351 = quests_taggedTemplateLiteral(["Steely-Eyed Squint"]))), (0,dist.$effect)(_templateObject352 || (_templateObject352 = quests_taggedTemplateLiteral(["The Spirit of Taking"])))];
  var toCheck = [(0,dist.$effect)(_templateObject353 || (_templateObject353 = quests_taggedTemplateLiteral(["Bat-Adjacent Form"])))];
  var carrot = (0,external_kolmafia_.numericModifier)((0,dist.$item)(_templateObject354 || (_templateObject354 = quests_taggedTemplateLiteral(["latte lovers member's mug"]))), "item drop") > 0;
  var toWear = new Map([[(0,dist.$slot)(_templateObject355 || (_templateObject355 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject356 || (_templateObject356 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject357 || (_templateObject357 = quests_taggedTemplateLiteral(["back"]))), (0,dist.$item)(_templateObject358 || (_templateObject358 = quests_taggedTemplateLiteral(["vampyric cloake"])))], [(0,dist.$slot)(_templateObject359 || (_templateObject359 = quests_taggedTemplateLiteral(["off-hand"]))), carrot ? (0,dist.$item)(_templateObject360 || (_templateObject360 = quests_taggedTemplateLiteral(["latte lovers member's mug"]))) : (0,dist.$item)(_templateObject361 || (_templateObject361 = quests_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))], [(0,dist.$slot)(_templateObject362 || (_templateObject362 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject363 || (_templateObject363 = quests_taggedTemplateLiteral(["Guzzlr tablet"])))], [(0,dist.$slot)(_templateObject364 || (_templateObject364 = quests_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(_templateObject365 || (_templateObject365 = quests_taggedTemplateLiteral(["gold detective badge"])))], [(0,dist.$slot)(_templateObject366 || (_templateObject366 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject367 || (_templateObject367 = quests_taggedTemplateLiteral(["your cowboy boots"])))], [(0,dist.$slot)(_templateObject368 || (_templateObject368 = quests_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(_templateObject369 || (_templateObject369 = quests_taggedTemplateLiteral(["li'l ninja costume"])))]]);
  var candles = [(0,dist.$item)(_templateObject370 || (_templateObject370 = quests_taggedTemplateLiteral(["extra-large utility candle"]))), (0,dist.$item)(_templateObject371 || (_templateObject371 = quests_taggedTemplateLiteral(["novelty sparkling candle"]))), (0,dist.$item)(_templateObject372 || (_templateObject372 = quests_taggedTemplateLiteral(["runed taper candle"])))];
  var sparkler = (0,dist.$item)(_templateObject373 || (_templateObject373 = quests_taggedTemplateLiteral(["oversized sparkler"])));
  if (!candles.some(dist.have) && (0,dist.have)(sparkler)) toWear.set((0,dist.$slot)(_templateObject374 || (_templateObject374 = quests_taggedTemplateLiteral(["weapon"]))), sparkler); // can only have one candle

  for (var _i = 0, _candles = candles; _i < _candles.length; _i++) {
    var c = _candles[_i];
    if ((0,dist.have)(c)) toWear.set((0,dist.$slot)(_templateObject375 || (_templateObject375 = quests_taggedTemplateLiteral(["weapon"]))), c);
  }

  return {
    acquire: toAcquire,
    check: toCheck,
    equipment: toWear,
    familiar: (0,dist.$familiar)(_templateObject376 || (_templateObject376 = quests_taggedTemplateLiteral(["Trick-or-Treating Tot"])))
  };
}), _defineProperty(_questRecords, Quest.Mysticality.id, () => {
  return {
    acquire: [(0,dist.$effect)(_templateObject377 || (_templateObject377 = quests_taggedTemplateLiteral(["Quiet Judgement"])))],
    check: [(0,dist.$effect)(_templateObject378 || (_templateObject378 = quests_taggedTemplateLiteral(["Nanobrainy"]))), (0,dist.$effect)(_templateObject379 || (_templateObject379 = quests_taggedTemplateLiteral(["Spit Upon"]))), (0,dist.$effect)(_templateObject380 || (_templateObject380 = quests_taggedTemplateLiteral(["Witch Breaded"])))],
    equipment: new Map([[(0,dist.$slot)(_templateObject381 || (_templateObject381 = quests_taggedTemplateLiteral(["hat"]))), (0,dist.$item)(_templateObject382 || (_templateObject382 = quests_taggedTemplateLiteral(["wad of used tape"])))], [(0,dist.$slot)(_templateObject383 || (_templateObject383 = quests_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(_templateObject384 || (_templateObject384 = quests_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(_templateObject385 || (_templateObject385 = quests_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(_templateObject386 || (_templateObject386 = quests_taggedTemplateLiteral(["battle broom"])))], [(0,dist.$slot)(_templateObject387 || (_templateObject387 = quests_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(_templateObject388 || (_templateObject388 = quests_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]),
    retrocape: "mysticality"
  };
}), _defineProperty(_questRecords, Quest.Donate.id, () => {
  return {
    acquire: [],
    check: [],
    equipment: new Map()
  };
}), _questRecords);
function prep(quest) {
  var record = questRecords[quest.id]();
  var back = record.equipment.get((0,dist.$slot)(_templateObject389 || (_templateObject389 = quests_taggedTemplateLiteral(["back"]))));
  if (back && record.retrocape) throw "Multiple back items for ".concat(quest.id);
  shrugExtraSongs(record.acquire);
  record.acquire.forEach(acquireEffect);
  record.check.forEach(checkEffect);
  if (record.familiar) (0,external_kolmafia_.useFamiliar)(record.familiar);
  if (record.retrocape) (0,external_kolmafia_.cliExecute)("retrocape ".concat(record.retrocape));
  record.equipment.forEach((item, slot) => {
    if (!(0,dist.have)(item)) {
      var _ingredients$;

      var ingredients = Object.keys((0,external_kolmafia_.getIngredients)(item));
      if ((0,external_kolmafia_.getRelated)(item, "fold")) (0,external_kolmafia_.cliExecute)("fold ".concat(item));else if ((0,dist.have)(Item.get((_ingredients$ = ingredients[0]) !== null && _ingredients$ !== void 0 ? _ingredients$ : "none"))) (0,external_kolmafia_.cliExecute)("make ".concat(item));else throw "Unable to find ".concat(item, "?");
    }

    (0,external_kolmafia_.equip)(slot, item);
  });
}

function shrugExtraSongs(effectsToAcquire) {
  var songsToAlwaysKeep = (0,dist.$effects)(_templateObject390 || (_templateObject390 = quests_taggedTemplateLiteral(["Ode to Booze, Chorale of Companionship"])));
  Object.entries((0,external_kolmafia_.myEffects)()).forEach(_ref => {
    var _ref2 = quests_slicedToArray(_ref, 1),
        effectName = _ref2[0];

    var effect = (0,external_kolmafia_.toEffect)(effectName);

    if ((0,dist.isSong)(effect) && !songsToAlwaysKeep.includes(effect) && !effectsToAcquire.includes(effect)) {
      shrugEffect(effect);
    }
  });
}

function haveQuest(quest) {
  if (quest.id > Quest.Donate.id) throw "Invalid quest ".concat(quest.id, ": ").concat(quest.service, "!");
  if (quest.id < Quest.Donate.id) return !(0,dist.get)("csServicesPerformed").includes(quest.service);
  return (0,external_kolmafia_.visitUrl)("council.php").includes("<input type=hidden name=option value=".concat(quest.id, ">"));
}
function prepAndDoQuest(quest) {
  if (quest.id > Quest.Donate.id) throw "Invalid quest ".concat(quest.id, ": ").concat(quest.service, "!");

  if (haveQuest(quest)) {
    prep(quest);
    (0,external_kolmafia_.visitUrl)("council.php");
    (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=1089&option=".concat(quest.id));
    if (haveQuest(quest)) throw "Couldn't complete quest ".concat(quest.id, ": ").concat(quest.service, "?");
  }
}
;// CONCATENATED MODULE: ./src/events.ts
var events_templateObject, events_templateObject2, events_templateObject3, events_templateObject4, events_templateObject5, events_templateObject6, events_templateObject7, events_templateObject8, events_templateObject9, events_templateObject10, events_templateObject11, events_templateObject12, events_templateObject13, events_templateObject14, events_templateObject15, events_templateObject16, events_templateObject17, events_templateObject18, events_templateObject19, events_templateObject20, events_templateObject21, events_templateObject22, events_templateObject23, events_templateObject24, events_templateObject25, events_templateObject26, events_templateObject27, events_templateObject28, events_templateObject29, events_templateObject30, events_templateObject31, events_templateObject32, events_templateObject33, events_templateObject34, events_templateObject35, events_templateObject36, events_templateObject37, events_templateObject38, events_templateObject39, events_templateObject40, events_templateObject41, events_templateObject42, events_templateObject43, events_templateObject44, events_templateObject45, events_templateObject46, events_templateObject47, events_templateObject48, events_templateObject49, events_templateObject50, events_templateObject51, events_templateObject52, events_templateObject53, events_templateObject54, events_templateObject55, events_templateObject56, events_templateObject57, events_templateObject58, events_templateObject59, events_templateObject60, events_templateObject61, events_templateObject62, events_templateObject63, events_templateObject64, events_templateObject65, events_templateObject66, events_templateObject67, events_templateObject68, events_templateObject69, events_templateObject70, events_templateObject71, events_templateObject72, events_templateObject73, events_templateObject74, events_templateObject75, events_templateObject76, events_templateObject77, events_templateObject78, events_templateObject79, events_templateObject80, events_templateObject81, events_templateObject82, events_templateObject83, events_templateObject84, events_templateObject85, events_templateObject86, events_templateObject87, events_templateObject88, events_templateObject89, events_templateObject90, events_templateObject91, events_templateObject92, events_templateObject93, events_templateObject94, events_templateObject95, events_templateObject96, events_templateObject97, events_templateObject98, events_templateObject99, events_templateObject100, events_templateObject101, events_templateObject102, events_templateObject103, events_templateObject104, events_templateObject105, events_templateObject106, events_templateObject107, events_templateObject108, events_templateObject109, events_templateObject110, events_templateObject111, events_templateObject112, events_templateObject113, events_templateObject114, events_templateObject115, events_templateObject116, events_templateObject117, events_templateObject118, events_templateObject119, events_templateObject120, events_templateObject121, events_templateObject122, events_templateObject123, events_templateObject124, events_templateObject125, events_templateObject126, events_templateObject127, events_templateObject128, events_templateObject129, events_templateObject130, events_templateObject131, events_templateObject132, events_templateObject133, events_templateObject134, events_templateObject135, events_templateObject136, events_templateObject137, events_templateObject138, events_templateObject139, events_templateObject140, events_templateObject141, events_templateObject142, events_templateObject143, events_templateObject144, events_templateObject145, events_templateObject146, events_templateObject147, events_templateObject148, events_templateObject149, events_templateObject150, events_templateObject151, events_templateObject152, events_templateObject153, events_templateObject154, events_templateObject155, events_templateObject156, events_templateObject157, events_templateObject158, events_templateObject159, events_templateObject160, events_templateObject161, events_templateObject162, events_templateObject163, events_templateObject164, events_templateObject165, events_templateObject166, events_templateObject167, events_templateObject168, events_templateObject169, events_templateObject170, events_templateObject171, events_templateObject172, events_templateObject173, events_templateObject174, events_templateObject175, events_templateObject176, events_templateObject177, events_templateObject178, events_templateObject179, events_templateObject180, events_templateObject181, events_templateObject182, events_templateObject183, events_templateObject184, events_templateObject185, events_templateObject186, events_templateObject187, events_templateObject188, events_templateObject189, events_templateObject190, events_templateObject191, events_templateObject192, events_templateObject193, events_templateObject194, events_templateObject195, events_templateObject196, events_templateObject197, events_templateObject198, events_templateObject199, events_templateObject200, events_templateObject201, events_templateObject202, events_templateObject203, events_templateObject204, events_templateObject205, events_templateObject206, events_templateObject207, events_templateObject208, events_templateObject209, events_templateObject210, events_templateObject211, events_templateObject212, events_templateObject213, events_templateObject214, events_templateObject215, events_templateObject216, events_templateObject217, events_templateObject218, events_templateObject219, events_templateObject220, events_templateObject221, events_templateObject222, events_templateObject223, events_templateObject224, events_templateObject225, events_templateObject226, events_templateObject227, events_templateObject228, events_templateObject229, events_templateObject230, events_templateObject231, events_templateObject232, events_templateObject233, events_templateObject234, events_templateObject235, events_templateObject236;

function events_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var FamiliarFlag; // Locations

(function (FamiliarFlag) {
  FamiliarFlag[FamiliarFlag["Default"] = 0] = "Default";
  FamiliarFlag[FamiliarFlag["NoAttack"] = 1] = "NoAttack";
  FamiliarFlag[FamiliarFlag["ToxicTeacups"] = 2] = "ToxicTeacups";
  FamiliarFlag[FamiliarFlag["Wine"] = 3] = "Wine";
})(FamiliarFlag || (FamiliarFlag = {}));

var civicCenter = (0,dist.$location)(events_templateObject || (events_templateObject = events_taggedTemplateLiteral(["Gingerbread Civic Center"])));
var deepMachineTunnels = (0,dist.$location)(events_templateObject2 || (events_templateObject2 = events_taggedTemplateLiteral(["The Deep Machine Tunnels"])));
var direWarren = (0,dist.$location)(events_templateObject3 || (events_templateObject3 = events_taggedTemplateLiteral(["The Dire Warren"])));
var deepDarkJungle = (0,dist.$location)(events_templateObject4 || (events_templateObject4 = events_taggedTemplateLiteral(["The Deep Dark Jungle"])));
var haikuDungeon = (0,dist.$location)(events_templateObject5 || (events_templateObject5 = events_taggedTemplateLiteral(["The Haiku Dungeon"])));
var loveTunnel = (0,dist.$location)(events_templateObject6 || (events_templateObject6 = events_taggedTemplateLiteral(["The Tunnel of L.O.V.E."])));
var neverendingParty = (0,dist.$location)(events_templateObject7 || (events_templateObject7 = events_taggedTemplateLiteral(["The Neverending Party"])));
var noobCave = (0,dist.$location)(events_templateObject8 || (events_templateObject8 = events_taggedTemplateLiteral(["Noob Cave"])));
var skeletonStore = (0,dist.$location)(events_templateObject9 || (events_templateObject9 = events_taggedTemplateLiteral(["The Skeleton Store"])));
var slimeTube = (0,dist.$location)(events_templateObject10 || (events_templateObject10 = events_taggedTemplateLiteral(["The Slime Tube"])));
var snojo = (0,dist.$location)(events_templateObject11 || (events_templateObject11 = events_taggedTemplateLiteral(["The X-32-F Combat Training Snowman"])));
var statelyPleasureDome = (0,dist.$location)(events_templateObject12 || (events_templateObject12 = events_taggedTemplateLiteral(["The Stately Pleasure Dome"])));
var toxicTeacups = (0,dist.$location)(events_templateObject13 || (events_templateObject13 = events_taggedTemplateLiteral(["The Toxic Teacups"])));
var upscaleDistrict = (0,dist.$location)(events_templateObject14 || (events_templateObject14 = events_taggedTemplateLiteral(["Gingerbread Upscale Retail District"]))); // Events are prioritized in order from top to bottom

var preCoilEvents = {
  holidayCheck: {
    ready: () => isHolidayWandererDay() && (0,dist.get)("_banderRunaways") < 1,
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject15 || (events_templateObject15 = events_taggedTemplateLiteral(["Pair of Stomping Boots"]))));
      if ((0,external_kolmafia_.haveEquipped)((0,dist.$item)(events_templateObject16 || (events_templateObject16 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))))) throw "Should not have Kramco equipped yet";
      adventure(noobCave, MacroList.Runaway);
    }
  },
  ninjaCostume: {
    ready: () => !(0,dist.have)((0,dist.$item)(events_templateObject17 || (events_templateObject17 = events_taggedTemplateLiteral(["li'l ninja costume"])))),
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject18 || (events_templateObject18 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject19 || (events_templateObject19 = events_taggedTemplateLiteral(["protonic accelerator pack"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack); // Start the digitize counter by going to a wanderer-friendly zone and encountering a normal combat

      withEquipment(() => mapMonster(haikuDungeon, (0,dist.$monster)(events_templateObject20 || (events_templateObject20 = events_taggedTemplateLiteral(["amateur ninja"]))), MacroList.FreeFight), [[(0,dist.$slot)(events_templateObject21 || (events_templateObject21 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject22 || (events_templateObject22 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))]]);
      checkAvailable((0,dist.$item)(events_templateObject23 || (events_templateObject23 = events_taggedTemplateLiteral(["li'l ninja costume"]))));
    }
  },
  mimic: {
    ready: () => !(0,dist.get)("_bagOfCandy"),
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject24 || (events_templateObject24 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject25 || (events_templateObject25 = events_taggedTemplateLiteral(["protonic accelerator pack"]))));
      familiar((0,dist.$familiar)(events_templateObject26 || (events_templateObject26 = events_taggedTemplateLiteral(["Stocking Mimic"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject27 || (events_templateObject27 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject28 || (events_templateObject28 = events_taggedTemplateLiteral(["none"]))));
      var ghostLoc = (0,dist.get)("ghostLocation");
      if (!ghostLoc) throw "Failed to get protonic ghost notice";
      adventure(ghostLoc, MacroList.FreeFight);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject29 || (events_templateObject29 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject30 || (events_templateObject30 = events_taggedTemplateLiteral(["none"]))));
      checkAvailable((0,dist.$item)(events_templateObject31 || (events_templateObject31 = events_taggedTemplateLiteral(["bag of many confections"]))));
      var blob = (0,dist.$item)(events_templateObject32 || (events_templateObject32 = events_taggedTemplateLiteral(["psychokinetic energy blob"])));
      (0,external_kolmafia_.use)(Math.min((0,external_kolmafia_.itemAmount)(blob), Math.floor((0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)()) / 30), blob);
    }
  },
  hipster: {
    ready: () => !(0,dist.get)("_ironicMoustache"),
    run: () => {
      (0,external_kolmafia_.cliExecute)("retrocape heck thrill");
      familiar((0,dist.$familiar)(events_templateObject33 || (events_templateObject33 = events_taggedTemplateLiteral(["Mini-Hipster"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject34 || (events_templateObject34 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject35 || (events_templateObject35 = events_taggedTemplateLiteral(["none"]))));
      if ((0,dist.get)("_sourceTerminalDigitizeUses") < 1) dist.SourceTerminal.educate((0,dist.$skill)(events_templateObject36 || (events_templateObject36 = events_taggedTemplateLiteral(["Digitize"]))));
      withEquipment(() => adventure(noobCave, MacroList.FreeFight), [[(0,dist.$slot)(events_templateObject37 || (events_templateObject37 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject38 || (events_templateObject38 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"])))]]);

      if ((0,dist.get)("_sourceTerminalDigitizeUses") > 0) {
        dist.SourceTerminal.educate((0,dist.$skill)(events_templateObject39 || (events_templateObject39 = events_taggedTemplateLiteral(["Compress"]))));
        dist.SourceTerminal.educate((0,dist.$skill)(events_templateObject40 || (events_templateObject40 = events_taggedTemplateLiteral(["Extract"]))));
      }

      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject41 || (events_templateObject41 = events_taggedTemplateLiteral(["familiar"]))), (0,dist.$item)(events_templateObject42 || (events_templateObject42 = events_taggedTemplateLiteral(["none"]))));
      checkAvailable((0,dist.$item)(events_templateObject43 || (events_templateObject43 = events_taggedTemplateLiteral(["ironic moustache"]))));
    }
  },
  tropicalSkeleton: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject44 || (events_templateObject44 = events_taggedTemplateLiteral(["Everything Looks Red"])))),
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject45 || (events_templateObject45 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject46 || (events_templateObject46 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      familiar((0,dist.$familiar)(events_templateObject47 || (events_templateObject47 = events_taggedTemplateLiteral(["Crimbo Shrub"])))); // Decorate Crimbo Shrub with LED Mandala, Jack-O-Lantern Lights, Popcorn Strands, and Big Red-Wrapped Presents

      if (!(0,dist.get)("_shrubDecorated")) {
        var decorations = (0,external_kolmafia_.toInt)((0,dist.$item)(events_templateObject48 || (events_templateObject48 = events_taggedTemplateLiteral(["box of old Crimbo decorations"]))));
        (0,external_kolmafia_.visitUrl)("inv_use.php?pwd=&which=99&whichitem=".concat(decorations));
        (0,external_kolmafia_.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=2&lights=5&garland=3&gift=2");
      }

      mapMonster(skeletonStore, (0,dist.$monster)(events_templateObject49 || (events_templateObject49 = events_taggedTemplateLiteral(["novelty tropical skeleton"]))), MacroList.FreeFight);
      checkEffect((0,dist.$effect)(events_templateObject50 || (events_templateObject50 = events_taggedTemplateLiteral(["Everything Looks Red"]))));
      (0,dist.$items)(events_templateObject51 || (events_templateObject51 = events_taggedTemplateLiteral(["cherry, grapefruit, lemon, strawberry"]))).forEach(fruit => checkAvailable(fruit));
    }
  }
};
var levelingEvents = {
  protonicGhost: {
    ready: () => (0,dist.get)("ghostLocation") !== null,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject52 || (events_templateObject52 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject53 || (events_templateObject53 = events_taggedTemplateLiteral(["protonic accelerator pack"]))));
      selectBestFamiliar(FamiliarFlag.NoAttack);
      var ghostLoc = (0,dist.get)("ghostLocation");
      if (!ghostLoc) throw "No ghost location found?";
      adventure(ghostLoc, MacroList.FreeFight);
    }
  },
  ghostCarol: {
    ready: () => ![(0,dist.$effect)(events_templateObject54 || (events_templateObject54 = events_taggedTemplateLiteral(["All I Want For Crimbo Is Stuff"]))), (0,dist.$effect)(events_templateObject55 || (events_templateObject55 = events_taggedTemplateLiteral(["Crimbo Wrapping"]))), (0,dist.$effect)(events_templateObject56 || (events_templateObject56 = events_taggedTemplateLiteral(["Do You Crush What I Crush?"]))), (0,dist.$effect)(events_templateObject57 || (events_templateObject57 = events_taggedTemplateLiteral(["Holiday Yoked"]))), (0,dist.$effect)(events_templateObject58 || (events_templateObject58 = events_taggedTemplateLiteral(["Let It Snow/Boil/Stink/Frighten/Grease"])))].some(carol => (0,dist.have)(carol)),
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject59 || (events_templateObject59 = events_taggedTemplateLiteral(["Ghost of Crimbo Carols"]))));
      withEquipment(() => adventure(direWarren, MacroList.Banish), [[(0,dist.$slot)(events_templateObject60 || (events_templateObject60 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject61 || (events_templateObject61 = events_taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))]]);
      checkEffect((0,dist.$effect)(events_templateObject62 || (events_templateObject62 = events_taggedTemplateLiteral(["Do You Crush What I Crush?"]))));
    }
  },
  loveTunnel: {
    ready: () => !(0,dist.get)("_loveTunnelUsed"),
    run: () => {
      spendAllMpOnLibrams();
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(loveTunnel, MacroList.TunnelOfLOV);
      if ((0,external_kolmafia_.handlingChoice)()) throw "Stuck in LOV?";
      checkEffect((0,dist.$effect)(events_templateObject63 || (events_templateObject63 = events_taggedTemplateLiteral(["Open Heart Surgery"]))));
      (0,dist.$items)(events_templateObject64 || (events_templateObject64 = events_taggedTemplateLiteral(["LOV Elixir #3, LOV Elixir #6, LOV Epaulettes"]))).forEach(l => checkAvailable(l));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject65 || (events_templateObject65 = events_taggedTemplateLiteral(["LOV Elixir #3"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject66 || (events_templateObject66 = events_taggedTemplateLiteral(["LOV Elixir #6"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject67 || (events_templateObject67 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject68 || (events_templateObject68 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
    }
  },
  tenPercentBonus: {
    ready: () => (0,dist.have)((0,dist.$item)(events_templateObject69 || (events_templateObject69 = events_taggedTemplateLiteral(["a ten-percent bonus"])))),
    run: () => {
      [(0,dist.$effect)(events_templateObject70 || (events_templateObject70 = events_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))), (0,dist.$effect)(events_templateObject71 || (events_templateObject71 = events_taggedTemplateLiteral(["Inscrutable Gaze"]))), (0,dist.$effect)(events_templateObject72 || (events_templateObject72 = events_taggedTemplateLiteral(["Synthesis: Learning"])))].forEach(checkEffect);
      checkAvailable((0,dist.$item)(events_templateObject73 || (events_templateObject73 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject74 || (events_templateObject74 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject75 || (events_templateObject75 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject76 || (events_templateObject76 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject77 || (events_templateObject77 = events_taggedTemplateLiteral(["familiar scrapbook"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject78 || (events_templateObject78 = events_taggedTemplateLiteral(["a ten-percent bonus"]))));
    }
  },
  chateau: {
    ready: () => (0,external_kolmafia_.myLevel)() >= 8 && (0,dist.get)("timesRested") < (0,external_kolmafia_.totalFreeRests)(),
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject79 || (events_templateObject79 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject80 || (events_templateObject80 = events_taggedTemplateLiteral(["LOV Epaulettes"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject81 || (events_templateObject81 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject82 || (events_templateObject82 = events_taggedTemplateLiteral(["familiar scrapbook"]))));

      while ((0,dist.get)("timesRested") < (0,external_kolmafia_.totalFreeRests)()) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_restlabelfree");
      }
    }
  },
  witchessRook: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject83 || (events_templateObject83 = events_taggedTemplateLiteral(["Sweetbreads Flamb\xE9"])))),
    run: () => {
      prep(Quest.LevelingML);
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject84 || (events_templateObject84 = events_taggedTemplateLiteral(["Witchess Rook"]))), MacroList.FreeFight);
      checkAvailable((0,dist.$item)(events_templateObject85 || (events_templateObject85 = events_taggedTemplateLiteral(["Greek fire"]))));
      (0,external_kolmafia_.use)((0,dist.$item)(events_templateObject86 || (events_templateObject86 = events_taggedTemplateLiteral(["Greek fire"]))));
    }
  },
  upscaleDistrictKill: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject87 || (events_templateObject87 = events_taggedTemplateLiteral(["Whole Latte Love"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject88 || (events_templateObject88 = events_taggedTemplateLiteral(["sprinkles"]))), 55),
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject89 || (events_templateObject89 = events_taggedTemplateLiteral(["Chocolate Lab"]))));
      var rope = (0,dist.$item)(events_templateObject90 || (events_templateObject90 = events_taggedTemplateLiteral(["rope"])));
      var crane = (0,dist.$item)(events_templateObject91 || (events_templateObject91 = events_taggedTemplateLiteral(["burning paper crane"])));
      var offhand = (0,dist.have)(rope) ? rope : (0,dist.have)(crane) ? crane : (0,dist.$item)(events_templateObject92 || (events_templateObject92 = events_taggedTemplateLiteral(["familiar scrapbook"])));
      withEquipment(() => adventure(upscaleDistrict, MacroList.Sprinkles), [[(0,dist.$slot)(events_templateObject93 || (events_templateObject93 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject94 || (events_templateObject94 = events_taggedTemplateLiteral(["protonic accelerator pack"])))], [(0,dist.$slot)(events_templateObject95 || (events_templateObject95 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject96 || (events_templateObject96 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))], [(0,dist.$slot)(events_templateObject97 || (events_templateObject97 = events_taggedTemplateLiteral(["off-hand"]))), offhand], [(0,dist.$slot)(events_templateObject98 || (events_templateObject98 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject99 || (events_templateObject99 = events_taggedTemplateLiteral(["hewn moon-rune spoon"])))], [(0,dist.$slot)(events_templateObject100 || (events_templateObject100 = events_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(events_templateObject101 || (events_templateObject101 = events_taggedTemplateLiteral(["Brutal brogues"])))], [(0,dist.$slot)(events_templateObject102 || (events_templateObject102 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject103 || (events_templateObject103 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))]]);
      checkAvailable((0,dist.$item)(events_templateObject104 || (events_templateObject104 = events_taggedTemplateLiteral(["sprinkles"]))), 55);
    }
  },
  upscaleDistrictRunaway: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject105 || (events_templateObject105 = events_taggedTemplateLiteral(["Whole Latte Love"])))),
    run: () => {
      checkEffect((0,dist.$effect)(events_templateObject106 || (events_templateObject106 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject107 || (events_templateObject107 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(upscaleDistrict, MacroList.Runaway);
      var latte = (0,dist.$item)(events_templateObject108 || (events_templateObject108 = events_taggedTemplateLiteral(["gingerbread spice latte"])));

      if ((0,dist.have)(latte)) {
        (0,external_kolmafia_.use)(latte);
        checkAvailable((0,dist.$item)(events_templateObject109 || (events_templateObject109 = events_taggedTemplateLiteral(["sprinkles"]))), 5);
      } else if ((0,dist.get)("_gingerbreadCityTurns") > 5) {
        throw "Failed to obtain ".concat(latte);
      }
    }
  },
  civicCenterRunaway: {
    ready: () => (0,dist.get)("_gingerbreadCityTurns") < 15,
    run: function run() {
      checkEffect((0,dist.$effect)(events_templateObject110 || (events_templateObject110 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject111 || (events_templateObject111 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(civicCenter, MacroList.Runaway);
      var cig = (0,dist.$item)(events_templateObject112 || (events_templateObject112 = events_taggedTemplateLiteral(["gingerbread cigarette"])));
      if ((0,dist.get)("_gingerbreadCityTurns") === 15 && !(0,dist.have)(cig)) throw "Failed to obtain ".concat(cig);
    }
  },
  snojo: {
    ready: () => (0,dist.get)("_snojoFreeFights") < 10,
    run: () => {
      if (!(0,dist.get)("snojoSetting") !== (0,dist.$stat)(events_templateObject113 || (events_templateObject113 = events_taggedTemplateLiteral(["Muscle"])))) {
        (0,external_kolmafia_.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0,external_kolmafia_.runChoice)(1);
      }

      selectBestFamiliar();
      adventure(snojo, (0,external_kolmafia_.myFamiliar)().combat ? MacroList.FastFreeFight : MacroList.FreeFight);
    }
  },
  bricko: {
    ready: () => (0,dist.have)(BRICKO_TARGET_ITEM) && (0,dist.get)("_brickoFights") < 3,
    run: () => {
      selectBestFamiliar();
      ((0,external_kolmafia_.myFamiliar)().combat ? MacroList.FastFreeFight : MacroList.FreeFight).setAutoAttack();
      (0,external_kolmafia_.use)(BRICKO_TARGET_ITEM);
    }
  },
  witchessWitch: {
    ready: () => !(0,dist.have)((0,dist.$item)(events_templateObject114 || (events_templateObject114 = events_taggedTemplateLiteral(["battle broom"])))),
    run: () => {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject115 || (events_templateObject115 = events_taggedTemplateLiteral(["Witchess Witch"]))), MacroList.WitchessWitch);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject116 || (events_templateObject116 = events_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(events_templateObject117 || (events_templateObject117 = events_taggedTemplateLiteral(["battle broom"]))));
    }
  },
  eldritch: {
    ready: () => !(0,dist.get)("_eldritchHorrorEvoked"),
    run: () => {
      selectBestFamiliar();
      MacroList.FreeFight.setAutoAttack();
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject118 || (events_templateObject118 = events_taggedTemplateLiteral(["Evoke Eldritch Horror"])))); // In case Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl was summoned

      if ((0,external_kolmafia_.myHp)() < 30) (0,external_kolmafia_.cliExecute)("hottub");
    }
  },
  gingerbreadCig: {
    ready: () => (0,dist.have)((0,dist.$item)(events_templateObject119 || (events_templateObject119 = events_taggedTemplateLiteral(["gingerbread cigarette"])))),
    run: () => {
      selectBestFamiliar(FamiliarFlag.NoAttack);
      adventure(upscaleDistrict, MacroList.FreeFight);
    }
  },
  godLobster: {
    ready: () => (0,dist.get)("_godLobsterFights") < 3,
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject120 || (events_templateObject120 = events_taggedTemplateLiteral(["God Lobster"]))));
      MacroList.FreeFight.setAutoAttack();
      (0,external_kolmafia_.visitUrl)("main.php?fightgodlobster=1");
      (0,external_kolmafia_.visitUrl)("choice.php");
      if ((0,external_kolmafia_.handlingChoice)()) (0,external_kolmafia_.runChoice)((0,dist.get)("_godLobsterFights") < 3 ? 1 : 2);
      var ring = (0,dist.$item)(events_templateObject121 || (events_templateObject121 = events_taggedTemplateLiteral(["God Lobster's Ring"])));
      var scepter = (0,dist.$item)(events_templateObject122 || (events_templateObject122 = events_taggedTemplateLiteral(["God Lobster's Scepter"])));
      if ((0,dist.have)(ring)) (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject123 || (events_templateObject123 = events_taggedTemplateLiteral(["familiar"]))), ring);else if ((0,dist.have)(scepter)) (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject124 || (events_templateObject124 = events_taggedTemplateLiteral(["familiar"]))), scepter);
    }
  },
  witchessKing: {
    ready: () => !(0,dist.have)((0,dist.$item)(events_templateObject125 || (events_templateObject125 = events_taggedTemplateLiteral(["dented scepter"])))),
    run: () => {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject126 || (events_templateObject126 = events_taggedTemplateLiteral(["Witchess King"]))), MacroList.FreeFight);
    }
  },
  witchess: {
    ready: () => (0,dist.get)("_witchessFights") < 5,
    run: () => {
      selectBestFamiliar();
      fightWitchess((0,dist.$monster)(events_templateObject127 || (events_templateObject127 = events_taggedTemplateLiteral(["Witchess Queen"]))), MacroList.WitchessQueen);
    }
  },
  digitize: {
    ready: () => (0,dist.get)("_sourceTerminalDigitizeMonsterCount") < 1,
    run: () => {
      // Turbo used a flag to cast pride
      dist.SourceTerminal.educate((0,dist.$skill)(events_templateObject128 || (events_templateObject128 = events_taggedTemplateLiteral(["Turbo"]))));
      var shirt = (0,dist.$item)(events_templateObject129 || (events_templateObject129 = events_taggedTemplateLiteral(["makeshift garbage shirt"])));
      if (!(0,dist.have)(shirt)) (0,external_kolmafia_.cliExecute)("fold ".concat(shirt));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject130 || (events_templateObject130 = events_taggedTemplateLiteral(["shirt"]))), shirt);
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject131 || (events_templateObject131 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject132 || (events_templateObject132 = events_taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  vote: {
    ready: () => voterMonsterNow() && (0,dist.get)("_voteFreeFights") < 1,
    run: () => {
      selectBestFamiliar();
      withEquipment(() => adventure(toxicTeacups, MacroList.FreeFight), [[(0,dist.$slot)(events_templateObject133 || (events_templateObject133 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject134 || (events_templateObject134 = events_taggedTemplateLiteral(["\"I Voted!\" sticker"])))]]);
    }
  },
  holidayWanderer: {
    ready: () => isHolidayWandererDay() && deepDarkJungle.combatQueue.length < 1,
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject135 || (events_templateObject135 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(deepDarkJungle, MacroList.Runaway);
    }
  },
  dmtSquare: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject136 || (events_templateObject136 = events_taggedTemplateLiteral(["Joy"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject137 || (events_templateObject137 = events_taggedTemplateLiteral(["abstraction: action"])))),
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject138 || (events_templateObject138 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTSquare);
      checkAvailable((0,dist.$item)(events_templateObject139 || (events_templateObject139 = events_taggedTemplateLiteral(["abstraction: action"]))));
    }
  },
  dmtCircle: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject140 || (events_templateObject140 = events_taggedTemplateLiteral(["Joy"])))),
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject141 || (events_templateObject141 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.DMTCircle);
      checkAvailable((0,dist.$item)(events_templateObject142 || (events_templateObject142 = events_taggedTemplateLiteral(["abstraction: joy"]))));
      (0,external_kolmafia_.chew)((0,dist.$item)(events_templateObject143 || (events_templateObject143 = events_taggedTemplateLiteral(["abstraction: joy"]))));
    }
  },
  dmt: {
    ready: () => (0,dist.get)("_machineTunnelsAdv") < 5,
    run: () => {
      familiar((0,dist.$familiar)(events_templateObject144 || (events_templateObject144 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(deepMachineTunnels, MacroList.FreeFight);
    }
  },
  chestXRay: {
    ready: () => (0,dist.get)("_chestXRayUsed") < 3,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject145 || (events_templateObject145 = events_taggedTemplateLiteral(["acc1"]))), (0,dist.$item)(events_templateObject146 || (events_templateObject146 = events_taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))));
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  shatterPunch: {
    ready: () => (0,dist.get)("_shatteringPunchUsed") < 3,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  mobHit: {
    ready: () => !(0,dist.get)("_gingerbreadMobHitUsed"),
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  shockingLick: {
    ready: () => (0,dist.get)("shockingLickCharges") > 0,
    run: () => {
      selectBestFamiliar(FamiliarFlag.ToxicTeacups);
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  lecture: {
    ready: () => (0,dist.get)("_pocketProfessorLectures") < 1,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject147 || (events_templateObject147 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject148 || (events_templateObject148 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      familiar((0,dist.$familiar)(events_templateObject149 || (events_templateObject149 = events_taggedTemplateLiteral(["Pocket Professor"]))));
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  backupCamera: {
    ready: () => (0,dist.get)("lastCopyableMonster") === (0,dist.$monster)(events_templateObject150 || (events_templateObject150 = events_taggedTemplateLiteral(["sausage goblin"]))) && (0,dist.get)("_backUpUses") < 7,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject151 || (events_templateObject151 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject152 || (events_templateObject152 = events_taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject153 || (events_templateObject153 = events_taggedTemplateLiteral(["acc3"]))), (0,dist.$item)(events_templateObject154 || (events_templateObject154 = events_taggedTemplateLiteral(["backup camera"]))));
      selectBestFamiliar();
      adventure(toxicTeacups, MacroList.FreeFight);
    }
  },
  deepDark: {
    ready: () => !(0,dist.have)((0,dist.$effect)(events_templateObject155 || (events_templateObject155 = events_taggedTemplateLiteral(["Visions of the Deep Dark Deeps"])))),
    run: () => {
      prep(Quest.DeepDark);
      var resist = 1 - (0,external_kolmafia_.elementalResistance)((0,dist.$element)(events_templateObject156 || (events_templateObject156 = events_taggedTemplateLiteral(["spooky"])))) / 100;
      if (resist <= 0) throw "invalid resist value ".concat(resist, " calculated?");
      var maxMultiplier = 4;
      var needed = (0,external_kolmafia_.myMaxhp)() * maxMultiplier * resist;
      if ((0,external_kolmafia_.myMaxhp)() < 500 || (0,external_kolmafia_.myMaxhp)() < needed) throw "Not enough HP for deep dark visions";
      if ((0,external_kolmafia_.myHp)() < needed) (0,external_kolmafia_.cliExecute)("cast * ".concat((0,dist.$skill)(events_templateObject157 || (events_templateObject157 = events_taggedTemplateLiteral(["Cannelloni Cocoon"])))));
      if ((0,external_kolmafia_.myHp)() < needed) throw "Failed to heal enough for Deep Dark Visions?";
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject158 || (events_templateObject158 = events_taggedTemplateLiteral(["Deep Dark Visions"]))));

      while ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.9) {
        (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject159 || (events_templateObject159 = events_taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      }
    }
  },
  vintnerBackup: {
    ready: () => (0,dist.get)("lastCopyableMonster") === (0,dist.$monster)(events_templateObject160 || (events_templateObject160 = events_taggedTemplateLiteral(["sausage goblin"]))) && (0,dist.get)("_backUpUses") < 11,
    run: () => {
      (0,external_kolmafia_.changeMcd)(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);
      adventure(toxicTeacups, MacroList.StenchFreeFight);
    }
  },
  nep: {
    ready: () => (0,dist.get)("_neverendingPartyFreeTurns") < 10,
    run: () => {
      (0,external_kolmafia_.changeMcd)(0);
      prep(Quest.Vintner);
      selectBestFamiliar(FamiliarFlag.Wine);

      var checkQuest = () => (0,dist.get)("_questPartyFair") === "unstarted";

      if (checkQuest()) {
        (0,external_kolmafia_.visitUrl)((0,external_kolmafia_.toUrl)(neverendingParty));
        var choice = ["food", "booze"].includes((0,dist.get)("_questPartyFairQuest")) ? 1 : 2;
        (0,external_kolmafia_.runChoice)(choice);
        if (checkQuest()) throw "Failed to grab Neverending Party Quest";
      }

      adventure(neverendingParty, MacroList.StenchFreeFight);
    }
  },
  latteRefills: {
    ready: () => (0,dist.get)("_latteRefillsUsed") < 1,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject161 || (events_templateObject161 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject162 || (events_templateObject162 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject163 || (events_templateObject163 = events_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(events_templateObject164 || (events_templateObject164 = events_taggedTemplateLiteral(["Cargo Cultist Shorts"]))));
      if ((0,dist.get)("_latteDrinkUsed")) (0,external_kolmafia_.cliExecute)("latte refill pumpkin cinnamon vanilla");
      checkEffect((0,dist.$effect)(events_templateObject165 || (events_templateObject165 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject166 || (events_templateObject166 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.LatteGulpRunaway);
    }
  },
  latteCarrot: {
    ready: () => !(0,dist.get)("latteUnlocks").includes("carrot"),
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject167 || (events_templateObject167 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject168 || (events_templateObject168 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject169 || (events_templateObject169 = events_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(events_templateObject170 || (events_templateObject170 = events_taggedTemplateLiteral(["Cargo Cultist Shorts"]))));
      checkEffect((0,dist.$effect)(events_templateObject171 || (events_templateObject171 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject172 || (events_templateObject172 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.Runaway);
    }
  },
  lastLatteRefill: {
    ready: () => (0,dist.get)("_latteRefillsUsed") < 3,
    run: () => {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject173 || (events_templateObject173 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject174 || (events_templateObject174 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject175 || (events_templateObject175 = events_taggedTemplateLiteral(["pants"]))), (0,dist.$item)(events_templateObject176 || (events_templateObject176 = events_taggedTemplateLiteral(["Cargo Cultist Shorts"]))));
      if ((0,dist.get)("_latteDrinkUsed")) (0,external_kolmafia_.cliExecute)("latte refill pumpkin cinnamon carrot");
      checkEffect((0,dist.$effect)(events_templateObject177 || (events_templateObject177 = events_taggedTemplateLiteral(["Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject178 || (events_templateObject178 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.LatteGulpRunaway);
    }
  }
};
function hasRemainingFreeFights() {
  return Object.values(levelingEvents).some(event => event.ready());
} // Not all of the combats are going to occur while leveling, the rest can go here

var oneOffEvents = {
  nanobrainy: () => {
    if (!(0,dist.get)("_gingerbreadClockAdvanced")) adventure(civicCenter, dist.Macro.abort());

    if (!(0,dist.have)((0,dist.$effect)(events_templateObject179 || (events_templateObject179 = events_taggedTemplateLiteral(["Nanobrainy"])))) && (0,dist.get)("_nanorhinoCharge") > 99) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject180 || (events_templateObject180 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject181 || (events_templateObject181 = events_taggedTemplateLiteral(["vampyric cloake"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject182 || (events_templateObject182 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject183 || (events_templateObject183 = events_taggedTemplateLiteral(["latte lovers member's mug"]))));
      familiar((0,dist.$familiar)(events_templateObject184 || (events_templateObject184 = events_taggedTemplateLiteral(["Nanorhino"]))));
      adventure(upscaleDistrict, MacroList.Nanobrainy);
      checkEffect((0,dist.$effect)(events_templateObject185 || (events_templateObject185 = events_taggedTemplateLiteral(["Nanobrainy"]))));
    }
  },
  innerElf: () => {
    if ((0,external_kolmafia_.myLevel)() >= 13 && !(0,dist.have)((0,dist.$effect)(events_templateObject186 || (events_templateObject186 = events_taggedTemplateLiteral(["Inner Elf"]))))) {
      familiar((0,dist.$familiar)(events_templateObject187 || (events_templateObject187 = events_taggedTemplateLiteral(["Machine Elf"]))));
      var prev = (0,dist.get)("lastCopyableMonster"); // TODO: Handle Mother is Busy Right Now case

      dist.Clan.with(FAX_AND_SLIME_CLAN, () => adventure(slimeTube, MacroList.MotherSlime));
      checkEffect((0,dist.$effect)(events_templateObject188 || (events_templateObject188 = events_taggedTemplateLiteral(["Inner Elf"]))));

      if (prev && (0,dist.get)("lastCopyableMonster") === (0,dist.$monster)(events_templateObject189 || (events_templateObject189 = events_taggedTemplateLiteral(["Mother Slime"])))) {
        (0,dist.set)("lastCopyableMonster", prev); // Need the property to be more accurate sometimes
      }
    }
  },
  meteorUngulith: () => {
    var fax = (0,dist.$item)(events_templateObject190 || (events_templateObject190 = events_taggedTemplateLiteral(["photocopied monster"])));
    var faxMon = (0,dist.$monster)(events_templateObject191 || (events_templateObject191 = events_taggedTemplateLiteral(["ungulith"])));
    if (!(0,dist.have)(fax)) dist.Clan.with(FAX_AND_SLIME_CLAN, () => (0,external_kolmafia_.cliExecute)("fax receive"));

    if (!(0,external_kolmafia_.visitUrl)("desc_item.php?whichitem=".concat(fax.descid)).includes("".concat(faxMon))) {
      throw "Failed to retrieve fax of ".concat(faxMon);
    }

    (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject192 || (events_templateObject192 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject193 || (events_templateObject193 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
    (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject194 || (events_templateObject194 = events_taggedTemplateLiteral(["Machine Elf"]))));
    adventureUrl("inv_use.php?pwd=&whichitem=".concat((0,external_kolmafia_.toInt)(fax)), MacroList.MeteorForce);
    checkAvailable((0,dist.$item)(events_templateObject195 || (events_templateObject195 = events_taggedTemplateLiteral(["corrupted marrow"]))));
  },
  foamYourself: () => {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject196 || (events_templateObject196 = events_taggedTemplateLiteral(["Fireproof Foam Suit"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject197 || (events_templateObject197 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject198 || (events_templateObject198 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject199 || (events_templateObject199 = events_taggedTemplateLiteral(["off-hand"]))), (0,dist.$item)(events_templateObject200 || (events_templateObject200 = events_taggedTemplateLiteral(["industrial fire extinguisher"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject201 || (events_templateObject201 = events_taggedTemplateLiteral(["Machine Elf"]))));
      adventure(direWarren, MacroList.FoamForce);
      checkEffect((0,dist.$effect)(events_templateObject202 || (events_templateObject202 = events_taggedTemplateLiteral(["Fireproof Foam Suit"]))));
    }
  },
  meteorShower: () => {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject203 || (events_templateObject203 = events_taggedTemplateLiteral(["Meteor Showered"]))))) {
      tryUse((0,dist.$item)(events_templateObject204 || (events_templateObject204 = events_taggedTemplateLiteral(["tiny bottle of absinthe"]))));
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject205 || (events_templateObject205 = events_taggedTemplateLiteral(["weapon"]))), (0,dist.$item)(events_templateObject206 || (events_templateObject206 = events_taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))));
      (0,external_kolmafia_.useFamiliar)((0,dist.$familiar)(events_templateObject207 || (events_templateObject207 = events_taggedTemplateLiteral(["Machine Elf"]))));
      var collar = (0,dist.$item)(events_templateObject208 || (events_templateObject208 = events_taggedTemplateLiteral(["disintegrating spiky collar"])));

      if ((0,dist.have)((0,dist.$effect)(events_templateObject209 || (events_templateObject209 = events_taggedTemplateLiteral(["Absinthe-Minded"])))) && !(0,dist.have)(collar) && !(0,dist.have)(itemToEffect(collar))) {
        mapMonster(statelyPleasureDome, (0,dist.$monster)(events_templateObject210 || (events_templateObject210 = events_taggedTemplateLiteral(["toothless mastiff bitch"]))), MacroList.FreeFight);
        checkAvailable(collar);
        (0,external_kolmafia_.use)(collar);
      } else {
        adventure(direWarren, MacroList.MeteorForce);
      }

      checkEffect((0,dist.$effect)(events_templateObject211 || (events_templateObject211 = events_taggedTemplateLiteral(["Meteor Showered"]))));
    }
  },
  batform: () => {
    if (!(0,dist.have)((0,dist.$effect)(events_templateObject212 || (events_templateObject212 = events_taggedTemplateLiteral(["Bat-Adjacent Form"]))))) {
      (0,external_kolmafia_.equip)((0,dist.$slot)(events_templateObject213 || (events_templateObject213 = events_taggedTemplateLiteral(["back"]))), (0,dist.$item)(events_templateObject214 || (events_templateObject214 = events_taggedTemplateLiteral(["vampyric cloake"]))));
      (0,external_kolmafia_.useSkill)((0,dist.$skill)(events_templateObject215 || (events_templateObject215 = events_taggedTemplateLiteral(["The Ode to Booze"]))));
      familiar((0,dist.$familiar)(events_templateObject216 || (events_templateObject216 = events_taggedTemplateLiteral(["Frumious Bandersnatch"]))));
      adventure(direWarren, MacroList.BatFormRunaway);
      checkEffect((0,dist.$effect)(events_templateObject217 || (events_templateObject217 = events_taggedTemplateLiteral(["Bat-Adjacent Form"]))));
    }
  }
};

function familiar(fam) {
  (0,external_kolmafia_.useFamiliar)(fam);
  var costume = new Map([[(0,dist.$familiar)(events_templateObject218 || (events_templateObject218 = events_taggedTemplateLiteral(["Machine Elf"]))), "mp"], [(0,dist.$familiar)(events_templateObject219 || (events_templateObject219 = events_taggedTemplateLiteral(["Pocket Professor"]))), "hp"], [(0,dist.$familiar)(events_templateObject220 || (events_templateObject220 = events_taggedTemplateLiteral(["Rockin' Robin"]))), "myst"]]).get(fam);
  if (costume && !(0,dist.get)("_mummeryMods").includes("".concat(fam))) (0,external_kolmafia_.cliExecute)("mummery ".concat(costume));
}

function selectBestFamiliar() {
  var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : FamiliarFlag.Default;

  if (flag === FamiliarFlag.Wine && !(0,dist.have)((0,dist.$item)(events_templateObject221 || (events_templateObject221 = events_taggedTemplateLiteral(["1950 Vampire Vintner wine"])))) && !(0,dist.have)((0,dist.$effect)(events_templateObject222 || (events_templateObject222 = events_taggedTemplateLiteral(["Wine-Befouled"]))))) {
    familiar((0,dist.$familiar)(events_templateObject223 || (events_templateObject223 = events_taggedTemplateLiteral(["Vampire Vintner"]))));
  } else if (flag === FamiliarFlag.ToxicTeacups && (0,dist.get)("_hipsterAdv") < 7) {
    familiar((0,dist.$familiar)(events_templateObject224 || (events_templateObject224 = events_taggedTemplateLiteral(["Artistic Goth Kid"]))));
  } else if (!(0,dist.have)((0,dist.$item)(events_templateObject225 || (events_templateObject225 = events_taggedTemplateLiteral(["robin's egg"]))))) {
    familiar((0,dist.$familiar)(events_templateObject226 || (events_templateObject226 = events_taggedTemplateLiteral(["Rockin' Robin"]))));
  } else if (flag === FamiliarFlag.Default && !(0,dist.have)((0,dist.$item)(events_templateObject227 || (events_templateObject227 = events_taggedTemplateLiteral(["short stick of butter"]))))) {
    familiar((0,dist.$familiar)(events_templateObject228 || (events_templateObject228 = events_taggedTemplateLiteral(["Shorter-Order Cook"]))));
  } else if (flag === FamiliarFlag.Default && !(0,dist.have)((0,dist.$item)(events_templateObject229 || (events_templateObject229 = events_taggedTemplateLiteral(["tiny bottle of absinthe"])))) && !(0,dist.have)((0,dist.$effect)(events_templateObject230 || (events_templateObject230 = events_taggedTemplateLiteral(["Absinthe-Minded"]))))) {
    familiar((0,dist.$familiar)(events_templateObject231 || (events_templateObject231 = events_taggedTemplateLiteral(["Green Pixie"]))));
  } else if (!(0,dist.have)((0,dist.$item)(events_templateObject232 || (events_templateObject232 = events_taggedTemplateLiteral(["rope"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject233 || (events_templateObject233 = events_taggedTemplateLiteral(["burning newspaper"])))) && !(0,dist.have)((0,dist.$item)(events_templateObject234 || (events_templateObject234 = events_taggedTemplateLiteral(["burning paper crane"]))))) {
    familiar((0,dist.$familiar)(events_templateObject235 || (events_templateObject235 = events_taggedTemplateLiteral(["Garbage Fire"]))));
  } else {
    familiar((0,dist.$familiar)(events_templateObject236 || (events_templateObject236 = events_taggedTemplateLiteral(["Machine Elf"]))));
  }
}
;// CONCATENATED MODULE: ./src/prep.ts
var prep_templateObject, prep_templateObject2, prep_templateObject3, prep_templateObject4, prep_templateObject5, prep_templateObject6, prep_templateObject7;

function prep_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



function checkReadyToAscend(checkVoteReady) {
  var badDays = ["april fool's day"];
  var today = (0,external_kolmafia_.holiday)().split("/");
  var badDayToday = today.some(day => badDays.includes(day.toLowerCase()));
  if (badDayToday) throw "Don't want to ascend during ".concat((0,external_kolmafia_.holiday)());
  var banish = (0,dist.$monster)(prep_templateObject || (prep_templateObject = prep_taggedTemplateLiteral(["Perceiver of Sensations"])));

  var notFound = () => !(0,dist.get)("banishedMonsters").toLowerCase().includes(banish.name.toLowerCase());

  if (notFound()) (0,external_kolmafia_.visitUrl)("museum.php?action=icehouse");
  if (notFound()) throw "Need to ice house ".concat(banish);
  if ((0,external_kolmafia_.pvpAttacksLeft)() > 0) throw "Spend your pvp fites";

  if (checkVoteReady && ((0,external_kolmafia_.totalTurnsPlayed)() + 60) % 11 !== 1) {
    var targetTurnBaseline = (0,external_kolmafia_.totalTurnsPlayed)() + 60;
    var m = Math.floor((targetTurnBaseline - 1) / 11);
    var turns = 11 * (m + 1) + 1 - ((0,external_kolmafia_.totalTurnsPlayed)() + 60);
    throw "Spend more ".concat(turns, " turns for voter monster");
  }

  (0,dist.prepareAscension)({
    workshed: (0,dist.$item)(prep_templateObject2 || (prep_templateObject2 = prep_taggedTemplateLiteral(["diabolic pizza cube"]))),
    garden: (0,dist.$item)(prep_templateObject3 || (prep_templateObject3 = prep_taggedTemplateLiteral(["Peppermint Pip Packet"]))),
    eudora: (0,dist.$item)(prep_templateObject4 || (prep_templateObject4 = prep_taggedTemplateLiteral(["Our Daily Candles\u2122 order form"])))
  }, {
    desk: (0,dist.$item)(prep_templateObject5 || (prep_templateObject5 = prep_taggedTemplateLiteral(["Swiss piggy bank"]))),
    ceiling: (0,dist.$item)(prep_templateObject6 || (prep_templateObject6 = prep_taggedTemplateLiteral(["ceiling fan"]))),
    nightstand: (0,dist.$item)(prep_templateObject7 || (prep_templateObject7 = prep_taggedTemplateLiteral(["foreign language tapes"])))
  }, true);
}
;// CONCATENATED MODULE: ./src/sweetsynthesis.ts
var sweetsynthesis_templateObject, sweetsynthesis_templateObject2, sweetsynthesis_templateObject3, sweetsynthesis_templateObject4, sweetsynthesis_templateObject5, sweetsynthesis_templateObject6, sweetsynthesis_templateObject7, sweetsynthesis_templateObject8, sweetsynthesis_templateObject9, sweetsynthesis_templateObject10, sweetsynthesis_templateObject11, sweetsynthesis_templateObject12, sweetsynthesis_templateObject13, sweetsynthesis_templateObject14, sweetsynthesis_templateObject15, sweetsynthesis_templateObject16, sweetsynthesis_templateObject17, sweetsynthesis_templateObject18, sweetsynthesis_templateObject19, sweetsynthesis_templateObject20, sweetsynthesis_templateObject21, sweetsynthesis_templateObject22, sweetsynthesis_templateObject23, sweetsynthesis_templateObject24, sweetsynthesis_templateObject25, sweetsynthesis_templateObject26, sweetsynthesis_templateObject27, sweetsynthesis_templateObject28, sweetsynthesis_templateObject29, sweetsynthesis_templateObject30, sweetsynthesis_templateObject31, sweetsynthesis_templateObject32, sweetsynthesis_templateObject33, sweetsynthesis_templateObject34;

function sweetsynthesis_toConsumableArray(arr) { return sweetsynthesis_arrayWithoutHoles(arr) || sweetsynthesis_iterableToArray(arr) || sweetsynthesis_unsupportedIterableToArray(arr) || sweetsynthesis_nonIterableSpread(); }

function sweetsynthesis_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sweetsynthesis_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function sweetsynthesis_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return sweetsynthesis_arrayLikeToArray(arr); }

function sweetsynthesis_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sweetsynthesis_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function sweetsynthesis_slicedToArray(arr, i) { return sweetsynthesis_arrayWithHoles(arr) || sweetsynthesis_iterableToArrayLimit(arr, i) || sweetsynthesis_unsupportedIterableToArray(arr, i) || sweetsynthesis_nonIterableRest(); }

function sweetsynthesis_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function sweetsynthesis_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sweetsynthesis_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sweetsynthesis_arrayLikeToArray(o, minLen); }

function sweetsynthesis_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function sweetsynthesis_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

var peppermintGroup = [{
  candy: (0,dist.$item)(sweetsynthesis_templateObject16 || (sweetsynthesis_templateObject16 = sweetsynthesis_taggedTemplateLiteral(["peppermint twist"]))),
  count: 1
}];
var sugarGroup = [(0,dist.$item)(sweetsynthesis_templateObject17 || (sweetsynthesis_templateObject17 = sweetsynthesis_taggedTemplateLiteral(["sugar shotgun"]))), (0,dist.$item)(sweetsynthesis_templateObject18 || (sweetsynthesis_templateObject18 = sweetsynthesis_taggedTemplateLiteral(["sugar shillelagh"]))), (0,dist.$item)(sweetsynthesis_templateObject19 || (sweetsynthesis_templateObject19 = sweetsynthesis_taggedTemplateLiteral(["sugar shank"]))), (0,dist.$item)(sweetsynthesis_templateObject20 || (sweetsynthesis_templateObject20 = sweetsynthesis_taggedTemplateLiteral(["sugar chapeau"]))), (0,dist.$item)(sweetsynthesis_templateObject21 || (sweetsynthesis_templateObject21 = sweetsynthesis_taggedTemplateLiteral(["sugar shorts"]))), (0,dist.$item)(sweetsynthesis_templateObject22 || (sweetsynthesis_templateObject22 = sweetsynthesis_taggedTemplateLiteral(["sugar shield"]))), (0,dist.$item)(sweetsynthesis_templateObject23 || (sweetsynthesis_templateObject23 = sweetsynthesis_taggedTemplateLiteral(["sugar shirt"])))].map(i => {
  return {
    candy: i,
    count: 1
  };
});
var transforms = new Map([[(0,dist.$item)(sweetsynthesis_templateObject24 || (sweetsynthesis_templateObject24 = sweetsynthesis_taggedTemplateLiteral(["peppermint sprout"]))), peppermintGroup], [(0,dist.$item)(sweetsynthesis_templateObject25 || (sweetsynthesis_templateObject25 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))), sugarGroup]]); // Cyclical references will break searching, no keys allowed in the candySets!

/**
 * Search for candy pairs that satisfy all chosen Sweet Synthesis effects and then cast them all.
 *
 * Return true after obtaining all effects.
 *
 * Return false if not all effects can be obtained before casting.
 * @param targetEffects Array of effects to search for and cast.
 * @param reserveCandies Set of candies that will not be used. Always includes Ultra Mega Sour Ball.
 */

function synthesize(targetEffects, reserveCandies) {
  var _candies;

  var test = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (targetEffects.length === 0) return true;
  var candies = (_candies = {}, sweetsynthesis_defineProperty(_candies, candyType.complex, []), sweetsynthesis_defineProperty(_candies, candyType.simple, []), _candies);
  var inv = (0,external_kolmafia_.getInventory)();
  Object.entries(inv).forEach(_ref => {
    var _candies2;

    var _ref2 = sweetsynthesis_slicedToArray(_ref, 2),
        name = _ref2[0],
        count = _ref2[1];

    var item = Item.get(name);
    (_candies2 = candies[item.candyType]) === null || _candies2 === void 0 ? void 0 : _candies2.push({
      candy: item,
      count: count
    });
  });

  var check = pair => {
    var count = (0,external_kolmafia_.itemAmount)(pair.candy);
    if (count !== pair.count) throw "Expected ".concat(pair.count, " ").concat(pair.candy, ", but found ").concat(count);
  };

  candies.complex.forEach(check);
  candies.simple.forEach(check);

  if (test) {
    candies.complex = [{
      candy: (0,dist.$item)(sweetsynthesis_templateObject26 || (sweetsynthesis_templateObject26 = sweetsynthesis_taggedTemplateLiteral(["bag of many confections"]))),
      count: 1
    }, {
      candy: (0,dist.$item)(sweetsynthesis_templateObject27 || (sweetsynthesis_templateObject27 = sweetsynthesis_taggedTemplateLiteral(["licorice boa"]))),
      count: 1
    }, {
      candy: (0,dist.$item)(sweetsynthesis_templateObject28 || (sweetsynthesis_templateObject28 = sweetsynthesis_taggedTemplateLiteral(["sugar sheet"]))),
      count: 1
    }, {
      candy: (0,dist.$item)(sweetsynthesis_templateObject29 || (sweetsynthesis_templateObject29 = sweetsynthesis_taggedTemplateLiteral(["Crimbo candied pecan"]))),
      count: 3
    }, {
      candy: (0,dist.$item)(sweetsynthesis_templateObject30 || (sweetsynthesis_templateObject30 = sweetsynthesis_taggedTemplateLiteral(["peppermint sprout"]))),
      count: 3
    }];
    candies.simple = [{
      candy: (0,dist.$item)(sweetsynthesis_templateObject31 || (sweetsynthesis_templateObject31 = sweetsynthesis_taggedTemplateLiteral(["Chubby and Plump bar"]))),
      count: 1
    }];
    (0,external_kolmafia_.print)("Searching for effects:");

    var _iterator = sweetsynthesis_createForOfIteratorHelper(targetEffects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var target = _step.value;
        (0,external_kolmafia_.print)("".concat(target));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var reserved = new Map([].concat(sweetsynthesis_toConsumableArray(reserveCandies), [(0,dist.$item)(sweetsynthesis_templateObject32 || (sweetsynthesis_templateObject32 = sweetsynthesis_taggedTemplateLiteral(["Ultra Mega Sour Ball"])))]).map(r => [r, 999999]));
  var solution = simulate(targetEffects, candies, reserved);
  if (!solution.result) return false; // Found a solution, now transform candies and synthesize

  var _iterator2 = sweetsynthesis_createForOfIteratorHelper(solution.pairs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var pair = _step2.value;

      var _iterator3 = sweetsynthesis_createForOfIteratorHelper(pair),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var creatable = _step3.value;
          // source will be $item`none` if no ingredients
          var source = (0,external_kolmafia_.toItem)(Object.keys((0,external_kolmafia_.getIngredients)(creatable))[0]);
          if (!test && !(0,dist.have)(creatable) && transforms.has(source)) (0,external_kolmafia_.create)(creatable);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!test) (0,external_kolmafia_.sweetSynthesis)(pair[0], pair[1]);else (0,external_kolmafia_.print)("Synthesis: ".concat(pair[0], ":").concat((0,external_kolmafia_.toInt)(pair[0]) % 5, " and ").concat(pair[1], ":").concat((0,external_kolmafia_.toInt)(pair[1]) % 5));
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

  var markUsed = item => {
    var _used$get;

    return used.set(item, 1 + ((_used$get = used.get(item)) !== null && _used$get !== void 0 ? _used$get : 0));
  };

  var _iterator4 = sweetsynthesis_createForOfIteratorHelper(targetEffects),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var target = _step4.value;
      var startA = candies[tier(target).a];
      var startB = candies[tier(target).b];
      var res = search(target, startA, startB, used);
      if (!res.found) return {
        result: false,
        pairs: []
      }; // Add the candies from each search to the list of used candies

      sim.pairs.push([res.a, res.b]);
      markUsed(res.a);
      markUsed(res.b); // Increment candies transformed from too, if any

      if (res.fromA) markUsed(res.fromA);
      if (res.fromB) markUsed(res.fromB);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return sim;
}

function search(target, setA, setB, used) {
  var fromA = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  var fromB = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
  var indexA = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : setA.length - 1;
  var indexB = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : setB.length - 1;
  var NO_SOLUTION = {
    found: false,
    a: (0,dist.$item)(sweetsynthesis_templateObject33 || (sweetsynthesis_templateObject33 = sweetsynthesis_taggedTemplateLiteral(["none"]))),
    b: (0,dist.$item)(sweetsynthesis_templateObject34 || (sweetsynthesis_templateObject34 = sweetsynthesis_taggedTemplateLiteral(["none"])))
  };
  if (setA.length === 0 || setB.length === 0) return NO_SOLUTION;

  var get = (set, index) => {
    var candy = set[index].candy;
    var count = set[index].count - (used.get(candy) || 0);
    return {
      candy: candy,
      count: count
    };
  };

  var A = get(setA, indexA);
  var B = get(setB, indexB); // Test a solution if we have the candies available
  // If A and B are the same then we need to ensure we have 2 or more candies

  var haveEnough = A.count > 0 && B.count > 0 && A.candy !== B.candy || A.count >= 2;

  if (haveEnough && (0,external_kolmafia_.sweetSynthesisResult)(A.candy, B.candy) === target) {
    return {
      found: true,
      a: A.candy,
      b: B.candy,
      fromA: fromA,
      fromB: fromB
    };
  } // Try transforming candy into another type
  // Fall through if we don't find a match


  var subA = transforms.get(A.candy);
  var subB = transforms.get(B.candy); // ensure we have the available candy to transform

  if (A.count > 0 && subA) {
    if (fromA) throw "Can't transform candy again from ".concat(fromA);
    var simA = search(target, subA, setB, used, A.candy, fromB);
    if (simA.found) return simA;
  }

  if (B.count > 0 && subB) {
    if (fromB) throw "Can't transform candy again from ".concat(fromB);
    var simB = search(target, setA, subB, used, fromA, B.candy);
    if (simB.found) return simB;
  } // Try the next candy in the list


  if (indexB > 0) return search(target, setA, setB, used, fromA, fromB, indexA, indexB - 1); // Loop around once b reaches 0

  if (indexA > 0) return search(target, setA, setB, used, fromA, fromB, indexA - 1);
  return NO_SOLUTION;
}
;// CONCATENATED MODULE: ./src/main.ts
var main_templateObject, main_templateObject2, main_templateObject3, main_templateObject4, main_templateObject5, main_templateObject6, main_templateObject7, main_templateObject8, main_templateObject9, main_templateObject10, main_templateObject11, main_templateObject12, main_templateObject13, main_templateObject14, main_templateObject15, main_templateObject16, main_templateObject17, main_templateObject18, main_templateObject19, main_templateObject20, main_templateObject21, main_templateObject22, main_templateObject23, main_templateObject24, main_templateObject25, main_templateObject26, main_templateObject27, main_templateObject28, main_templateObject29, main_templateObject30, main_templateObject31, main_templateObject32, main_templateObject33, main_templateObject34, main_templateObject35, main_templateObject36, main_templateObject37, main_templateObject38, main_templateObject39, main_templateObject40, main_templateObject41, main_templateObject42, main_templateObject43, main_templateObject44, main_templateObject45, main_templateObject46, main_templateObject47, main_templateObject48, main_templateObject49, main_templateObject50, main_templateObject51, main_templateObject52, main_templateObject53, main_templateObject54, main_templateObject55, main_templateObject56, main_templateObject57, main_templateObject58, main_templateObject59, main_templateObject60, main_templateObject61, main_templateObject62, main_templateObject63, main_templateObject64, main_templateObject65, main_templateObject66, main_templateObject67, main_templateObject68, main_templateObject69, main_templateObject70, main_templateObject71, main_templateObject72, main_templateObject73, main_templateObject74, main_templateObject75, main_templateObject76, main_templateObject77, main_templateObject78, main_templateObject79, main_templateObject80, main_templateObject81, main_templateObject82, main_templateObject83, main_templateObject84, main_templateObject85, main_templateObject86, main_templateObject87, main_templateObject88, main_templateObject89, main_templateObject90, main_templateObject91, main_templateObject92, main_templateObject93, main_templateObject94, main_templateObject95, main_templateObject96, main_templateObject97, main_templateObject98, main_templateObject99, main_templateObject100;

function main_toConsumableArray(arr) { return main_arrayWithoutHoles(arr) || main_iterableToArray(arr) || main_unsupportedIterableToArray(arr) || main_nonIterableSpread(); }

function main_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function main_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function main_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return main_arrayLikeToArray(arr); }

function main_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function main_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = main_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function main_slicedToArray(arr, i) { return main_arrayWithHoles(arr) || main_iterableToArrayLimit(arr, i) || main_unsupportedIterableToArray(arr, i) || main_nonIterableRest(); }

function main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return main_arrayLikeToArray(o, minLen); }

function main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function main_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var choiceAdventures = [[297, 3], // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
[326, 1], // Showdown: (1) fight mother slime (2) leave
[1119, ""], // Shining Mauve Backwards In Time (1) abstractions (2) comprehension (3) picture frame (4) duplicate (6) leave
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
[1310, ""], // Granted a Boon: (1) equipment (2) blessing (3) experience
[1322, ""], // The Beginning of the Neverend: (1) accept quest (2) decline quest (3) leave
[1324, 5], // It Hasn't Ended, It's Just Paused: (1) upstairs (2) kitchen (3) backyard (4) basement (5) fight
[1340, 2], // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
[1386, 4], // Upgrade Your May the Fourth Cosplay Saber: (1) 15-20 MP regen (2) +20 ML (3) +3 resists (4) +10 familiar weight
[1387, 3] // Using the Force: (1) banish (2) find friends (3) force item drops
].map(_ref => {
  var _ref2 = main_slicedToArray(_ref, 2),
      id = _ref2[0],
      value = _ref2[1];

  return ["choiceAdventure".concat(id), value];
});

function checkMainClan() {
  if (dist.Clan.get().name !== MAIN_CLAN) throw "Not in main clan?";
}

function main() {
  var argString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var args = argString.split(" ");
  var checkVote = true;

  var _iterator = main_createForOfIteratorHelper(args),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arg = _step.value;
      if (arg.match(/novote/)) checkVote = false;

      if (arg.match(/test/)) {
        synthesize((0,dist.$effects)(main_templateObject6 || (main_templateObject6 = main_taggedTemplateLiteral(["Synthesis: Collection, Synthesis: Learning, Synthesis: Greed"]))), new Set(), true);
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  (0,dist.sinceKolmafiaRevision)(25824);
  if (MAIN_CLAN.length < 1) throw "seventyhccs_main_clan property not set";
  if (FAX_AND_SLIME_CLAN.length < 1) throw "seventyhccs_side_clan not set";
  if (FORTUNE_TELLER_FRIEND.length < 1) throw "seventyhccs_fortune_friend not set";
  var startTime = (0,external_kolmafia_.gametimeToInt)();

  if ((0,external_kolmafia_.myPath)() !== "Community Service") {
    checkReadyToAscend(checkVote);

    if ((0,external_kolmafia_.canInteract)() && (0,external_kolmafia_.userConfirm)("Ready to Ascend into Community Service?")) {
      (0,dist.ascend)(dist.Paths.CommunityService, (0,dist.$class)(main_templateObject || (main_templateObject = main_taggedTemplateLiteral(["Sauceror"]))), dist.Lifestyle.hardcore, "wallaby", (0,dist.$item)(main_templateObject2 || (main_templateObject2 = main_taggedTemplateLiteral(["astral six-pack"]))), (0,dist.$item)(main_templateObject3 || (main_templateObject3 = main_taggedTemplateLiteral(["astral statuette"]))));
    } else {
      (0,external_kolmafia_.abort)();
    }
  }

  if ((0,external_kolmafia_.myClass)() !== (0,dist.$class)(main_templateObject4 || (main_templateObject4 = main_taggedTemplateLiteral(["Sauceror"])))) throw "Don't yet know how to run this as ".concat((0,external_kolmafia_.myClass)());
  (0,external_kolmafia_.print)("Save the Kingdom, save the world. Community Service time!", "green");
  (0,external_kolmafia_.print)("Using main clan ".concat(MAIN_CLAN, " and fax/slime clan ").concat(FAX_AND_SLIME_CLAN)); // Gotta talk to the Council the first time before seeing quests

  (0,external_kolmafia_.visitUrl)("council.php");
  withContext(levelAndDoQuests, [// breakableHandling values:
  // 1: abort
  // 2: equip previous
  // 3: re-equip from inventory, or abort
  // 4: re-equip from inventory, or previous
  // 5: acquire & re-equip
  ["breakableHandling".concat((0,external_kolmafia_.toInt)((0,dist.$item)(main_templateObject5 || (main_templateObject5 = main_taggedTemplateLiteral(["makeshift garbage shirt"]))))), 2], ["customCombatScript", "seventy_hccs"]].concat(main_toConsumableArray(choiceAdventures)));
  var endTime = (0,external_kolmafia_.gametimeToInt)();
  var duration = endTime - startTime;
  (0,external_kolmafia_.print)("Community Service completed in ".concat(duration, " miliseconds"), "green");
}

function openQuestZones() {
  [["questM23Meatsmith", "meatsmith"], ["questM24Doc", "doc"], ["questM25Armorer", "armory"]].forEach(_ref3 => {
    var _ref4 = main_slicedToArray(_ref3, 2),
        prop = _ref4[0],
        id = _ref4[1];

    if ((0,external_kolmafia_.getProperty)(prop).toLowerCase() === "unstarted") {
      (0,external_kolmafia_.visitUrl)("shop.php?whichshop=".concat(id, "&action=talk"));
      (0,external_kolmafia_.runChoice)(1);
    }
  });
}

function preCoilWire() {
  // Visit Toot Oriole just because
  (0,external_kolmafia_.visitUrl)("tutorial.php?action=toot");

  while ((0,dist.get)("_deluxeKlawSummons") < 3) {
    (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=klaw");
  }

  [(0,dist.$item)(main_templateObject7 || (main_templateObject7 = main_taggedTemplateLiteral(["letter from King Ralph XI"]))), (0,dist.$item)(main_templateObject8 || (main_templateObject8 = main_taggedTemplateLiteral(["pork elf goodies sack"]))), (0,dist.$item)(main_templateObject9 || (main_templateObject9 = main_taggedTemplateLiteral(["pack of KWE trading card"]))), (0,dist.$item)(main_templateObject10 || (main_templateObject10 = main_taggedTemplateLiteral(["banana candle"]))), (0,dist.$item)(main_templateObject11 || (main_templateObject11 = main_taggedTemplateLiteral(["ear candle"]))), (0,dist.$item)(main_templateObject12 || (main_templateObject12 = main_taggedTemplateLiteral(["natural magick candle"]))), (0,dist.$item)(main_templateObject13 || (main_templateObject13 = main_taggedTemplateLiteral(["rainbow glitter candle"]))), (0,dist.$item)(main_templateObject14 || (main_templateObject14 = main_taggedTemplateLiteral(["votive of confidence"])))].forEach(tryUse); // Only need one consult for a candy

  if ((0,dist.get)("_clanFortuneConsultUses") < 1) {
    checkMainClan();
    (0,external_kolmafia_.cliExecute)("fortune ".concat(FORTUNE_TELLER_FRIEND, " garbage batman thick"));
  }

  var calculation = "69";

  var canCalculate = () => (0,dist.get)("_universeCalculated") < (0,dist.get)("skillLevel144");

  var hasSolution = () => Object.keys((0,external_kolmafia_.reverseNumberology)()).includes(calculation);

  while (canCalculate() && hasSolution()) {
    (0,external_kolmafia_.cliExecute)("numberology ".concat(calculation));
  }

  getPantogramPants(); //
  // Let's get a buncha meat!
  //

  if (!(0,dist.get)("_deckCardsSeen").includes("1952")) (0,external_kolmafia_.cliExecute)("cheat 1952");
  if ((0,dist.have)((0,dist.$item)(main_templateObject15 || (main_templateObject15 = main_taggedTemplateLiteral(["1952 Mickey Mantle card"]))))) (0,external_kolmafia_.autosell)(1, (0,dist.$item)(main_templateObject16 || (main_templateObject16 = main_taggedTemplateLiteral(["1952 Mickey Mantle card"]))));
  (0,external_kolmafia_.useSkill)((0,dist.$skill)(main_templateObject17 || (main_templateObject17 = main_taggedTemplateLiteral(["Communism!"]))));
  if (!(0,dist.get)("_chateauDeskHarvested")) (0,external_kolmafia_.visitUrl)("place.php?whichplace=chateau&action=chateau_desk1");
  if (!(0,dist.get)("_horsery")) (0,external_kolmafia_.cliExecute)("horsery dark");
  dist.SongBoom.setSong("Total Eclipse of Your Meat"); // 11001 meat

  openQuestZones();
  (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject18 || (main_templateObject18 = main_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(main_templateObject19 || (main_templateObject19 = main_taggedTemplateLiteral(["Powerful Glove"])))); // Optimize away equipping & unequipping to buff up

  prep(Quest.Beginning); //prettier-ignore

  var _iterator2 = main_createForOfIteratorHelper([[(0,dist.$effect)(main_templateObject23 || (main_templateObject23 = main_taggedTemplateLiteral(["That's Just Cloud-Talk, Man"]))), () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=campaway&action=campaway_sky")], [(0,dist.$item)(main_templateObject24 || (main_templateObject24 = main_taggedTemplateLiteral(["\"DRINK ME\" potion"]))), () => (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2")], [(0,dist.$item)(main_templateObject25 || (main_templateObject25 = main_taggedTemplateLiteral(["detuned radio"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(main_templateObject26 || (main_templateObject26 = main_taggedTemplateLiteral(["detuned radio"]))))], // 11001 - 285 = 10716 meat
  [(0,dist.$item)(main_templateObject27 || (main_templateObject27 = main_taggedTemplateLiteral(["battery (AAA)"]))), () => harvestBatteries()], [(0,dist.$item)(main_templateObject28 || (main_templateObject28 = main_taggedTemplateLiteral(["battery (lantern)"]))), () => (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject29 || (main_templateObject29 = main_taggedTemplateLiteral(["battery (lantern)"]))))], [(0,dist.$item)(main_templateObject30 || (main_templateObject30 = main_taggedTemplateLiteral(["Brutal brogues"]))), () => (0,external_kolmafia_.cliExecute)("bastille bbq brutalist catapult")], [(0,dist.$item)(main_templateObject31 || (main_templateObject31 = main_taggedTemplateLiteral(["cop dollar"]))), () => (0,external_kolmafia_.cliExecute)("Detective Solver")], [(0,dist.$item)(main_templateObject32 || (main_templateObject32 = main_taggedTemplateLiteral(["cuppa Loyal tea"]))), () => (0,external_kolmafia_.cliExecute)("teatree loyal")], [(0,dist.$item)(main_templateObject33 || (main_templateObject33 = main_taggedTemplateLiteral(["flimsy hardwood scraps"]))), () => (0,external_kolmafia_.visitUrl)("shop.php?whichshop=lathe")], [(0,dist.$item)(main_templateObject34 || (main_templateObject34 = main_taggedTemplateLiteral(["weeping willow wand"]))), () => (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject35 || (main_templateObject35 = main_taggedTemplateLiteral(["weeping willow wand"]))))], [(0,dist.$item)(main_templateObject36 || (main_templateObject36 = main_taggedTemplateLiteral(["green mana"]))), () => (0,external_kolmafia_.cliExecute)("cheat forest")], [(0,dist.$item)(main_templateObject37 || (main_templateObject37 = main_taggedTemplateLiteral(["wrench"]))), () => (0,external_kolmafia_.cliExecute)("cheat wrench")], [(0,dist.$item)(main_templateObject38 || (main_templateObject38 = main_taggedTemplateLiteral(["occult jelly donut"]))), () => (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject39 || (main_templateObject39 = main_taggedTemplateLiteral(["occult jelly donut"]))))], [(0,dist.$item)(main_templateObject40 || (main_templateObject40 = main_taggedTemplateLiteral(["sombrero-mounted sparkler"]))), () => (0,external_kolmafia_.retrieveItem)((0,dist.$item)(main_templateObject41 || (main_templateObject41 = main_taggedTemplateLiteral(["sombrero-mounted sparkler"]))))], // 10716 - 475 = 10241 meat
  [(0,dist.$item)(main_templateObject42 || (main_templateObject42 = main_taggedTemplateLiteral(["Yeg's Motel hand soap"]))), () => (0,external_kolmafia_.cliExecute)("cargo item ".concat((0,dist.$item)(main_templateObject43 || (main_templateObject43 = main_taggedTemplateLiteral(["Yeg's Motel hand soap"])))))], [(0,dist.$item)(main_templateObject44 || (main_templateObject44 = main_taggedTemplateLiteral(["your cowboy boots"]))), () => (0,external_kolmafia_.visitUrl)("place.php?whichplace=town_right&action=townright_ltt")], [(0,dist.$skill)(main_templateObject45 || (main_templateObject45 = main_taggedTemplateLiteral(["Seek out a Bird"]))), () => (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject46 || (main_templateObject46 = main_taggedTemplateLiteral(["Bird-a-Day calendar"]))))]]),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = main_slicedToArray(_step2.value, 2),
          check = _step2$value[0],
          retrieve = _step2$value[1];

      if (!(0,dist.have)(check)) retrieve();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  vote();
  scavengeDaycare();

  if (!(0,dist.get)("_borrowedTimeUsed")) {
    if (!(0,dist.have)((0,dist.$item)(main_templateObject20 || (main_templateObject20 = main_taggedTemplateLiteral(["borrowed time"]))))) (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject21 || (main_templateObject21 = main_taggedTemplateLiteral(["borrowed time"]))));
    (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject22 || (main_templateObject22 = main_taggedTemplateLiteral(["borrowed time"]))));
  }

  (0,external_kolmafia_.changeMcd)(10);
  if ((0,external_kolmafia_.myHp)() < (0,external_kolmafia_.myMaxhp)() * 0.9) (0,external_kolmafia_.cliExecute)("hottub");

  for (var _i2 = 0, _Object$values = Object.values(preCoilEvents); _i2 < _Object$values.length; _i2++) {
    var event = _Object$values[_i2];
    if (event.ready()) event.run();
  } // 10241 + 2000 = 12241 meat


  spendAllMpOnLibrams();
}

function postCoilWire() {
  if ((0,dist.have)((0,dist.$item)(main_templateObject47 || (main_templateObject47 = main_taggedTemplateLiteral(["occult jelly donut"]))))) (0,external_kolmafia_.eat)((0,dist.$item)(main_templateObject48 || (main_templateObject48 = main_taggedTemplateLiteral(["occult jelly donut"]))));
  (0,external_kolmafia_.cliExecute)("Briefcase e spell spooky -combat"); // Visit Gingerbread Civic Center & fast forward clock
  // Then use nanorhino for nanobrainy and increment the gingerbread city counter

  oneOffEvents.nanobrainy(); // Start buffing familiar weight now that we're done with Nanorhino

  if ((0,dist.get)("_saberMod") < 1) (0,external_kolmafia_.cliExecute)("saber familiar");
  (0,dist.$effects)(main_templateObject49 || (main_templateObject49 = main_taggedTemplateLiteral(["All Is Forgiven, Sparkly!, Witch Breaded"]))).forEach(wishEffect);
  useDroppedItems(); // In case we obtained a green candy heart already, don't want to synthesize it later

  if (!(0,dist.get)("hasRange")) {
    var range = (0,dist.$item)(main_templateObject50 || (main_templateObject50 = main_taggedTemplateLiteral(["Dramatic\u2122 range"])));
    if (!(0,dist.have)(range)) (0,external_kolmafia_.retrieveItem)(range);
    (0,external_kolmafia_.use)(range);
  } // 12241 - 950 = 11291 meat


  [// Need all of these to craft with
  (0,dist.$skill)(main_templateObject51 || (main_templateObject51 = main_taggedTemplateLiteral(["Advanced Cocktailcrafting"]))), (0,dist.$skill)(main_templateObject52 || (main_templateObject52 = main_taggedTemplateLiteral(["Advanced Saucecrafting"]))), (0,dist.$skill)(main_templateObject53 || (main_templateObject53 = main_taggedTemplateLiteral(["Chubby and Plump"]))), (0,dist.$skill)(main_templateObject54 || (main_templateObject54 = main_taggedTemplateLiteral(["Perfect Freeze"]))), (0,dist.$skill)(main_templateObject55 || (main_templateObject55 = main_taggedTemplateLiteral(["Prevent Scurvy and Sobriety"]))), // Only need Alice's Army and Crimbo Candy for now
  (0,dist.$skill)(main_templateObject56 || (main_templateObject56 = main_taggedTemplateLiteral(["Summon Alice's Army Cards"]))), //$skill`Summon Confiscated Things`,
  (0,dist.$skill)(main_templateObject57 || (main_templateObject57 = main_taggedTemplateLiteral(["Summon Crimbo Candy"]))) //$skill`Summon Geeky Gifts`,
  //$skill`Summon Tasteful Items`,
  ].forEach(skill => (0,external_kolmafia_.useSkill)(skill)); // 143 mp

  [(0,dist.$item)(main_templateObject58 || (main_templateObject58 = main_taggedTemplateLiteral(["oil of expertise"]))), (0,dist.$item)(main_templateObject59 || (main_templateObject59 = main_taggedTemplateLiteral(["philter of phorce"]))), (0,dist.$item)(main_templateObject60 || (main_templateObject60 = main_taggedTemplateLiteral(["ointment of the occult"]))), (0,dist.$item)(main_templateObject61 || (main_templateObject61 = main_taggedTemplateLiteral(["eyedrops of the ermine"])))].forEach(saucePotion => {
    if (!(0,dist.have)(saucePotion) && !(0,dist.have)(itemToEffect(saucePotion))) (0,external_kolmafia_.create)(saucePotion);
  });
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(main_templateObject62 || (main_templateObject62 = main_taggedTemplateLiteral(["toy accordion"])))); // 11291 - 142 = 11149 meat
  //useSkill(2, $skill`The Ode to Booze`);

  acquireEffect((0,dist.$effect)(main_templateObject63 || (main_templateObject63 = main_taggedTemplateLiteral(["Ode to Booze"]))));
  checkMainClan();
  (0,dist.$effects)(main_templateObject64 || (main_templateObject64 = main_taggedTemplateLiteral(["[1701]Hip to the Jive, In a Lather"]))).forEach(acquireEffect); // 5 drunk, 5500 meat
  // 11149 - 5500 = 5649 meat
  // Eat pizza before synthesizing, generate a licorice boa from pizza

  eatPizzas(); // 5649 - 987 - 950 - 495 - 215 - 77 - 38 = 2887 meat

  var toSynth = [(0,dist.$effect)(main_templateObject65 || (main_templateObject65 = main_taggedTemplateLiteral(["Synthesis: Smart"]))), (0,dist.$effect)(main_templateObject66 || (main_templateObject66 = main_taggedTemplateLiteral(["Synthesis: Learning"])))].filter(effect => !(0,dist.have)(effect));

  if (toSynth.length > 0) {
    (0,external_kolmafia_.cliExecute)("garden pick");
    (0,external_kolmafia_.cliExecute)("refresh inventory"); // Sweet synthesis with reserved candies omitted, add them back individually until a solution is found

    var wantToKeep = [(0,dist.$item)(main_templateObject67 || (main_templateObject67 = main_taggedTemplateLiteral(["Chubby and Plump bar"]))), (0,dist.$item)(main_templateObject68 || (main_templateObject68 = main_taggedTemplateLiteral(["sugar sheet"])))];

    for (var tries = 0; tries <= wantToKeep.length; tries++) {
      var toKeep = new Set(wantToKeep.slice(tries));
      if (!toKeep.has((0,dist.$item)(main_templateObject69 || (main_templateObject69 = main_taggedTemplateLiteral(["sugar sheet"]))))) (0,external_kolmafia_.useSkill)((0,dist.$skill)(main_templateObject70 || (main_templateObject70 = main_taggedTemplateLiteral(["Summon Sugar Sheets"]))));
      if (synthesize(toSynth, toKeep)) break;else if (toKeep.size === 0) throw "Unable to find a combination for all synthesis targets";
    }
  } // If we didn't use a sugar sheet for synthesis we can make a cold-filtered water


  var water = (0,dist.$item)(main_templateObject71 || (main_templateObject71 = main_taggedTemplateLiteral(["cold-filtered water"])));
  if ((0,dist.get)("tomeSummons") < 3 && !(0,dist.have)(water) && !(0,dist.have)(itemToEffect(water))) (0,external_kolmafia_.create)(water);
  tryUse(water); // If we didn't use a chubby and plump bar for synthesis we can use it for more HP and MP

  [(0,dist.$item)(main_templateObject72 || (main_templateObject72 = main_taggedTemplateLiteral(["Chubby and Plump bar"]))), (0,dist.$item)(main_templateObject73 || (main_templateObject73 = main_taggedTemplateLiteral(["Napalm In The Morning\u2122 candle"]))), (0,dist.$item)(main_templateObject74 || (main_templateObject74 = main_taggedTemplateLiteral(["Salsa Caliente\u2122 candle"]))), (0,dist.$item)(main_templateObject75 || (main_templateObject75 = main_taggedTemplateLiteral(["Smoldering Clover\u2122 candle"])))].forEach(tryUse);
  (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject76 || (main_templateObject76 = main_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(main_templateObject77 || (main_templateObject77 = main_taggedTemplateLiteral(["Powerful Glove"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(main_templateObject78 || (main_templateObject78 = main_taggedTemplateLiteral(["turtle totem"]))));
  (0,external_kolmafia_.retrieveItem)((0,dist.$item)(main_templateObject79 || (main_templateObject79 = main_taggedTemplateLiteral(["saucepan"]))));
  prep(Quest.Leveling); // 316 mp

  if ((0,dist.have)((0,dist.$item)(main_templateObject80 || (main_templateObject80 = main_taggedTemplateLiteral(["LOV Epaulettes"]))))) prep(Quest.LevelingML);
}

function levelAndDoQuests() {
  dist.Clan.join(MAIN_CLAN);
  (0,external_kolmafia_.visitUrl)("clan_viplounge.php?action=fwshop"); // Enable access to the fireworks shop

  var mainstat = (0,external_kolmafia_.myPrimestat)();

  if (haveQuest(Quest.CoilWire)) {
    preCoilWire();
    (0,external_kolmafia_.print)("Coil Wire start: have ".concat((0,external_kolmafia_.myHp)(), "/").concat((0,external_kolmafia_.myMaxhp)(), " HP and ").concat((0,external_kolmafia_.myMp)(), "/").concat((0,external_kolmafia_.myMaxmp)(), " MP."));
    (0,external_kolmafia_.print)("\tand ".concat((0,external_kolmafia_.myBuffedstat)(mainstat), " (").concat((0,external_kolmafia_.myBasestat)(mainstat), ") ").concat(mainstat, "."));
    prepAndDoQuest(Quest.CoilWire);
    (0,external_kolmafia_.print)("Coil Wire done: have ".concat((0,external_kolmafia_.myHp)(), "/").concat((0,external_kolmafia_.myMaxhp)(), " HP and ").concat((0,external_kolmafia_.myMp)(), "/").concat((0,external_kolmafia_.myMaxmp)(), " MP."));
  }

  if (hasRemainingFreeFights()) {
    postCoilWire();
    (0,external_kolmafia_.print)("Leveling start: have ".concat((0,external_kolmafia_.myHp)(), "/").concat((0,external_kolmafia_.myMaxhp)(), " HP and ").concat((0,external_kolmafia_.myMp)(), "/").concat((0,external_kolmafia_.myMaxmp)(), " MP.")); // eslint-disable-next-line no-constant-condition

    leveling: while (true) {
      // Spend excess MP on librams
      // Free run for items
      // Free rest for stats at level 8
      // Get Inner Elf at level 13
      // Do all the leveling combats
      // Then gulp latte for more libram summons
      var blindness = (0,dist.$effect)(main_templateObject81 || (main_templateObject81 = main_taggedTemplateLiteral(["Temporary Blindness"])));
      if ((0,dist.have)(blindness) && (0,dist.get)("_hotTubSoaks") < 5) (0,external_kolmafia_.cliExecute)("hottub");
      if ((0,dist.have)(blindness)) throw "Can't handle ".concat(blindness);
      var maxMPGains = ((0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)()) / 15;
      var maxSoulFoodCasts = (0,external_kolmafia_.mySoulsauce)() / (0,external_kolmafia_.soulsauceCost)((0,dist.$skill)(main_templateObject82 || (main_templateObject82 = main_taggedTemplateLiteral(["Soul Food"]))));
      var soulFoodCasts = Math.floor(Math.min(maxMPGains, maxSoulFoodCasts));
      if (soulFoodCasts > 0) (0,external_kolmafia_.useSkill)(soulFoodCasts, (0,dist.$skill)(main_templateObject83 || (main_templateObject83 = main_taggedTemplateLiteral(["Soul Food"]))));

      while ((0,dist.have)((0,dist.$item)(main_templateObject84 || (main_templateObject84 = main_taggedTemplateLiteral(["magical sausage casing"])))) && ((0,dist.get)("_sausagesMade") + 1) * 111 < (0,external_kolmafia_.myMeat)() - MEAT_SAFE_LIMIT && (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.myMp)() > 1000 && (0,external_kolmafia_.myMaxmp)() - (0,external_kolmafia_.mpCost)((0,dist.$skill)(main_templateObject85 || (main_templateObject85 = main_taggedTemplateLiteral(["Summon BRICKOs"])))) > MP_SAFE_LIMIT && (0,dist.get)("_sausagesEaten") < 23) {
        (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject86 || (main_templateObject86 = main_taggedTemplateLiteral(["magical sausage"]))));
        (0,external_kolmafia_.eat)((0,dist.$item)(main_templateObject87 || (main_templateObject87 = main_taggedTemplateLiteral(["magical sausage"]))));
      }

      while ((0,external_kolmafia_.myMp)() - (0,external_kolmafia_.mpCost)((0,dist.$skill)(main_templateObject88 || (main_templateObject88 = main_taggedTemplateLiteral(["Summon BRICKOs"])))) > MP_SAFE_LIMIT) {
        castBestLibram();
        continue leveling; // get more MP and make more librams before adventuring on
      }

      useDroppedItems();

      while ((0,dist.have)((0,dist.$item)(main_templateObject89 || (main_templateObject89 = main_taggedTemplateLiteral(["BRICKO eye brick"])))) && (0,dist.have)((0,dist.$item)(main_templateObject90 || (main_templateObject90 = main_taggedTemplateLiteral(["BRICKO brick"]))), BRICKOS_PER_FIGHT)) {
        (0,external_kolmafia_.create)(BRICKO_TARGET_ITEM);
      }

      if ((0,dist.have)((0,dist.$item)(main_templateObject91 || (main_templateObject91 = main_taggedTemplateLiteral(["burning newspaper"]))))) (0,external_kolmafia_.create)((0,dist.$item)(main_templateObject92 || (main_templateObject92 = main_taggedTemplateLiteral(["burning paper crane"]))));
      oneOffEvents.innerElf(); // This is where all the leveling happens
      // Loop through the list of events until an unfinished one is found
      // After doing an event, go back to the top of the outer loop to
      // handle librams, sausages, garbage shirt, etc.

      for (var _i3 = 0, _Object$values2 = Object.values(levelingEvents); _i3 < _Object$values2.length; _i3++) {
        var event = _Object$values2[_i3];

        if (event.ready()) {
          event.run();
          continue leveling;
        }
      }

      break;
    }

    (0,external_kolmafia_.print)("Leveling done: have ".concat((0,external_kolmafia_.myHp)(), "/").concat((0,external_kolmafia_.myMaxhp)(), " HP and ").concat((0,external_kolmafia_.myMp)(), "/").concat((0,external_kolmafia_.myMaxmp)(), " MP at level ").concat((0,external_kolmafia_.myLevel)(), "."));
    (0,external_kolmafia_.print)("\twith ".concat((0,external_kolmafia_.myBuffedstat)(mainstat), " (").concat((0,external_kolmafia_.myBasestat)(mainstat), ") ").concat(mainstat, "."));
  } // Leveling done


  checkMainClan();
  (0,external_kolmafia_.cliExecute)("shower hot");
  (0,external_kolmafia_.changeMcd)(0);
  prepAndDoQuest(Quest.Muscle);
  prepAndDoQuest(Quest.Moxie);
  prepAndDoQuest(Quest.HP);

  if (haveQuest(Quest.SpellDamage)) {
    oneOffEvents.innerElf();
    oneOffEvents.meteorUngulith();
    if (!(0,dist.have)((0,dist.$effect)(main_templateObject93 || (main_templateObject93 = main_taggedTemplateLiteral(["Cowrruption"]))))) (0,external_kolmafia_.use)((0,dist.$item)(main_templateObject94 || (main_templateObject94 = main_taggedTemplateLiteral(["corrupted marrow"]))));
    prepAndDoQuest(Quest.SpellDamage);
  }

  if (haveQuest(Quest.WeaponDamage)) {
    tuneMoon(MoonSign.Platypus);
    oneOffEvents.innerElf();
    oneOffEvents.meteorShower();
    prepAndDoQuest(Quest.WeaponDamage);
  }

  if (haveQuest(Quest.CombatFrequency)) {
    (0,external_kolmafia_.equip)((0,dist.$slot)(main_templateObject95 || (main_templateObject95 = main_taggedTemplateLiteral(["acc2"]))), (0,dist.$item)(main_templateObject96 || (main_templateObject96 = main_taggedTemplateLiteral(["Powerful Glove"]))));
    prepAndDoQuest(Quest.CombatFrequency);
  }

  if (haveQuest(Quest.HotResist)) {
    oneOffEvents.foamYourself();
    prepAndDoQuest(Quest.HotResist);
  }

  if (haveQuest(Quest.FamiliarWeight)) {
    oneOffEvents.meteorShower();
    prep(Quest.FamiliarWeight);
    var loveSong = (0,dist.$item)(main_templateObject97 || (main_templateObject97 = main_taggedTemplateLiteral(["love song of icy revenge"])));
    var coldHeart = itemToEffect(loveSong);
    var icyWeight = Math.ceil(2.5 * Math.min(4, (0,external_kolmafia_.itemAmount)(loveSong)));
    var loveSongSufficient = (0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)() + icyWeight >= 295;
    var taffy = (0,dist.$item)(main_templateObject98 || (main_templateObject98 = main_taggedTemplateLiteral(["pulled blue taffy"])));
    var swayed = itemToEffect(taffy);
    var wine = (0,dist.$item)(main_templateObject99 || (main_templateObject99 = main_taggedTemplateLiteral(["1950 Vampire Vintner wine"])));

    var needWeight = () => (0,external_kolmafia_.familiarWeight)((0,external_kolmafia_.myFamiliar)()) + (0,external_kolmafia_.weightAdjustment)() < 295;

    if (needWeight() && !(0,dist.have)(swayed) && (0,dist.have)(taffy)) (0,external_kolmafia_.cliExecute)("use * ".concat(taffy));
    if (needWeight() && !(0,dist.have)(coldHeart) && loveSongSufficient) (0,external_kolmafia_.cliExecute)("use * ".concat(loveSong));

    if (needWeight() && (0,dist.have)(wine)) {
      acquireEffect((0,dist.$effect)(main_templateObject100 || (main_templateObject100 = main_taggedTemplateLiteral(["Ode to Booze"]))));
      (0,external_kolmafia_.drink)(wine); // 1 drunk
    }

    if (needWeight()) {
      while ((0,dist.have)(loveSong) && (0,external_kolmafia_.haveEffect)(coldHeart) < 20) {
        if ((0,external_kolmafia_.itemAmount)(loveSong) * 5 + (0,external_kolmafia_.haveEffect)(coldHeart) < 20) {
          (0,external_kolmafia_.cliExecute)("pillkeeper extend");
          (0,external_kolmafia_.use)(loveSong);
        } else {
          (0,external_kolmafia_.use)(loveSong);
        }
      }
    }

    prepAndDoQuest(Quest.FamiliarWeight);
  }

  if (haveQuest(Quest.ItemDrop)) {
    oneOffEvents.batform();
    prepAndDoQuest(Quest.ItemDrop);
  }

  prepAndDoQuest(Quest.Mysticality);
  prepAndDoQuest(Quest.Donate);
}

/***/ }),

/***/ 1664:
/***/ ((module) => {

"use strict";
module.exports = require("kolmafia");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 4339);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;