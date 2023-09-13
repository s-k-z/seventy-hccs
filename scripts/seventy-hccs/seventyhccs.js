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
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  );
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: true }), mod);
};

// node_modules/libram/node_modules/html-entities/lib/named-references.js
var require_named_references = __commonJS({
  "node_modules/libram/node_modules/html-entities/lib/named-references.js": function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bodyRegExps = {
      xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
    };
    exports.namedReferences = {
      xml: {
        entities: {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&apos;": "'",
          "&amp;": "&"
        },
        characters: {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
          "&": "&amp;"
        }
      },
      html4: {
        entities: {
          "&apos;": "'",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&quot": '"',
          "&quot;": '"',
          "&amp": "&",
          "&amp;": "&",
          "&lt": "<",
          "&lt;": "<",
          "&gt": ">",
          "&gt;": ">",
          "&OElig;": "\u0152",
          "&oelig;": "\u0153",
          "&Scaron;": "\u0160",
          "&scaron;": "\u0161",
          "&Yuml;": "\u0178",
          "&circ;": "\u02C6",
          "&tilde;": "\u02DC",
          "&ensp;": "\u2002",
          "&emsp;": "\u2003",
          "&thinsp;": "\u2009",
          "&zwnj;": "\u200C",
          "&zwj;": "\u200D",
          "&lrm;": "\u200E",
          "&rlm;": "\u200F",
          "&ndash;": "\u2013",
          "&mdash;": "\u2014",
          "&lsquo;": "\u2018",
          "&rsquo;": "\u2019",
          "&sbquo;": "\u201A",
          "&ldquo;": "\u201C",
          "&rdquo;": "\u201D",
          "&bdquo;": "\u201E",
          "&dagger;": "\u2020",
          "&Dagger;": "\u2021",
          "&permil;": "\u2030",
          "&lsaquo;": "\u2039",
          "&rsaquo;": "\u203A",
          "&euro;": "\u20AC",
          "&fnof;": "\u0192",
          "&Alpha;": "\u0391",
          "&Beta;": "\u0392",
          "&Gamma;": "\u0393",
          "&Delta;": "\u0394",
          "&Epsilon;": "\u0395",
          "&Zeta;": "\u0396",
          "&Eta;": "\u0397",
          "&Theta;": "\u0398",
          "&Iota;": "\u0399",
          "&Kappa;": "\u039A",
          "&Lambda;": "\u039B",
          "&Mu;": "\u039C",
          "&Nu;": "\u039D",
          "&Xi;": "\u039E",
          "&Omicron;": "\u039F",
          "&Pi;": "\u03A0",
          "&Rho;": "\u03A1",
          "&Sigma;": "\u03A3",
          "&Tau;": "\u03A4",
          "&Upsilon;": "\u03A5",
          "&Phi;": "\u03A6",
          "&Chi;": "\u03A7",
          "&Psi;": "\u03A8",
          "&Omega;": "\u03A9",
          "&alpha;": "\u03B1",
          "&beta;": "\u03B2",
          "&gamma;": "\u03B3",
          "&delta;": "\u03B4",
          "&epsilon;": "\u03B5",
          "&zeta;": "\u03B6",
          "&eta;": "\u03B7",
          "&theta;": "\u03B8",
          "&iota;": "\u03B9",
          "&kappa;": "\u03BA",
          "&lambda;": "\u03BB",
          "&mu;": "\u03BC",
          "&nu;": "\u03BD",
          "&xi;": "\u03BE",
          "&omicron;": "\u03BF",
          "&pi;": "\u03C0",
          "&rho;": "\u03C1",
          "&sigmaf;": "\u03C2",
          "&sigma;": "\u03C3",
          "&tau;": "\u03C4",
          "&upsilon;": "\u03C5",
          "&phi;": "\u03C6",
          "&chi;": "\u03C7",
          "&psi;": "\u03C8",
          "&omega;": "\u03C9",
          "&thetasym;": "\u03D1",
          "&upsih;": "\u03D2",
          "&piv;": "\u03D6",
          "&bull;": "\u2022",
          "&hellip;": "\u2026",
          "&prime;": "\u2032",
          "&Prime;": "\u2033",
          "&oline;": "\u203E",
          "&frasl;": "\u2044",
          "&weierp;": "\u2118",
          "&image;": "\u2111",
          "&real;": "\u211C",
          "&trade;": "\u2122",
          "&alefsym;": "\u2135",
          "&larr;": "\u2190",
          "&uarr;": "\u2191",
          "&rarr;": "\u2192",
          "&darr;": "\u2193",
          "&harr;": "\u2194",
          "&crarr;": "\u21B5",
          "&lArr;": "\u21D0",
          "&uArr;": "\u21D1",
          "&rArr;": "\u21D2",
          "&dArr;": "\u21D3",
          "&hArr;": "\u21D4",
          "&forall;": "\u2200",
          "&part;": "\u2202",
          "&exist;": "\u2203",
          "&empty;": "\u2205",
          "&nabla;": "\u2207",
          "&isin;": "\u2208",
          "&notin;": "\u2209",
          "&ni;": "\u220B",
          "&prod;": "\u220F",
          "&sum;": "\u2211",
          "&minus;": "\u2212",
          "&lowast;": "\u2217",
          "&radic;": "\u221A",
          "&prop;": "\u221D",
          "&infin;": "\u221E",
          "&ang;": "\u2220",
          "&and;": "\u2227",
          "&or;": "\u2228",
          "&cap;": "\u2229",
          "&cup;": "\u222A",
          "&int;": "\u222B",
          "&there4;": "\u2234",
          "&sim;": "\u223C",
          "&cong;": "\u2245",
          "&asymp;": "\u2248",
          "&ne;": "\u2260",
          "&equiv;": "\u2261",
          "&le;": "\u2264",
          "&ge;": "\u2265",
          "&sub;": "\u2282",
          "&sup;": "\u2283",
          "&nsub;": "\u2284",
          "&sube;": "\u2286",
          "&supe;": "\u2287",
          "&oplus;": "\u2295",
          "&otimes;": "\u2297",
          "&perp;": "\u22A5",
          "&sdot;": "\u22C5",
          "&lceil;": "\u2308",
          "&rceil;": "\u2309",
          "&lfloor;": "\u230A",
          "&rfloor;": "\u230B",
          "&lang;": "\u2329",
          "&rang;": "\u232A",
          "&loz;": "\u25CA",
          "&spades;": "\u2660",
          "&clubs;": "\u2663",
          "&hearts;": "\u2665",
          "&diams;": "\u2666"
        },
        characters: {
          "'": "&apos;",
          "\xA0": "&nbsp;",
          "\xA1": "&iexcl;",
          "\xA2": "&cent;",
          "\xA3": "&pound;",
          "\xA4": "&curren;",
          "\xA5": "&yen;",
          "\xA6": "&brvbar;",
          "\xA7": "&sect;",
          "\xA8": "&uml;",
          "\xA9": "&copy;",
          "\xAA": "&ordf;",
          "\xAB": "&laquo;",
          "\xAC": "&not;",
          "\xAD": "&shy;",
          "\xAE": "&reg;",
          "\xAF": "&macr;",
          "\xB0": "&deg;",
          "\xB1": "&plusmn;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\xB4": "&acute;",
          "\xB5": "&micro;",
          "\xB6": "&para;",
          "\xB7": "&middot;",
          "\xB8": "&cedil;",
          "\xB9": "&sup1;",
          "\xBA": "&ordm;",
          "\xBB": "&raquo;",
          "\xBC": "&frac14;",
          "\xBD": "&frac12;",
          "\xBE": "&frac34;",
          "\xBF": "&iquest;",
          "\xC0": "&Agrave;",
          "\xC1": "&Aacute;",
          "\xC2": "&Acirc;",
          "\xC3": "&Atilde;",
          "\xC4": "&Auml;",
          "\xC5": "&Aring;",
          "\xC6": "&AElig;",
          "\xC7": "&Ccedil;",
          "\xC8": "&Egrave;",
          "\xC9": "&Eacute;",
          "\xCA": "&Ecirc;",
          "\xCB": "&Euml;",
          "\xCC": "&Igrave;",
          "\xCD": "&Iacute;",
          "\xCE": "&Icirc;",
          "\xCF": "&Iuml;",
          "\xD0": "&ETH;",
          "\xD1": "&Ntilde;",
          "\xD2": "&Ograve;",
          "\xD3": "&Oacute;",
          "\xD4": "&Ocirc;",
          "\xD5": "&Otilde;",
          "\xD6": "&Ouml;",
          "\xD7": "&times;",
          "\xD8": "&Oslash;",
          "\xD9": "&Ugrave;",
          "\xDA": "&Uacute;",
          "\xDB": "&Ucirc;",
          "\xDC": "&Uuml;",
          "\xDD": "&Yacute;",
          "\xDE": "&THORN;",
          "\xDF": "&szlig;",
          "\xE0": "&agrave;",
          "\xE1": "&aacute;",
          "\xE2": "&acirc;",
          "\xE3": "&atilde;",
          "\xE4": "&auml;",
          "\xE5": "&aring;",
          "\xE6": "&aelig;",
          "\xE7": "&ccedil;",
          "\xE8": "&egrave;",
          "\xE9": "&eacute;",
          "\xEA": "&ecirc;",
          "\xEB": "&euml;",
          "\xEC": "&igrave;",
          "\xED": "&iacute;",
          "\xEE": "&icirc;",
          "\xEF": "&iuml;",
          "\xF0": "&eth;",
          "\xF1": "&ntilde;",
          "\xF2": "&ograve;",
          "\xF3": "&oacute;",
          "\xF4": "&ocirc;",
          "\xF5": "&otilde;",
          "\xF6": "&ouml;",
          "\xF7": "&divide;",
          "\xF8": "&oslash;",
          "\xF9": "&ugrave;",
          "\xFA": "&uacute;",
          "\xFB": "&ucirc;",
          "\xFC": "&uuml;",
          "\xFD": "&yacute;",
          "\xFE": "&thorn;",
          "\xFF": "&yuml;",
          '"': "&quot;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "\u0152": "&OElig;",
          "\u0153": "&oelig;",
          "\u0160": "&Scaron;",
          "\u0161": "&scaron;",
          "\u0178": "&Yuml;",
          "\u02C6": "&circ;",
          "\u02DC": "&tilde;",
          "\u2002": "&ensp;",
          "\u2003": "&emsp;",
          "\u2009": "&thinsp;",
          "\u200C": "&zwnj;",
          "\u200D": "&zwj;",
          "\u200E": "&lrm;",
          "\u200F": "&rlm;",
          "\u2013": "&ndash;",
          "\u2014": "&mdash;",
          "\u2018": "&lsquo;",
          "\u2019": "&rsquo;",
          "\u201A": "&sbquo;",
          "\u201C": "&ldquo;",
          "\u201D": "&rdquo;",
          "\u201E": "&bdquo;",
          "\u2020": "&dagger;",
          "\u2021": "&Dagger;",
          "\u2030": "&permil;",
          "\u2039": "&lsaquo;",
          "\u203A": "&rsaquo;",
          "\u20AC": "&euro;",
          "\u0192": "&fnof;",
          "\u0391": "&Alpha;",
          "\u0392": "&Beta;",
          "\u0393": "&Gamma;",
          "\u0394": "&Delta;",
          "\u0395": "&Epsilon;",
          "\u0396": "&Zeta;",
          "\u0397": "&Eta;",
          "\u0398": "&Theta;",
          "\u0399": "&Iota;",
          "\u039A": "&Kappa;",
          "\u039B": "&Lambda;",
          "\u039C": "&Mu;",
          "\u039D": "&Nu;",
          "\u039E": "&Xi;",
          "\u039F": "&Omicron;",
          "\u03A0": "&Pi;",
          "\u03A1": "&Rho;",
          "\u03A3": "&Sigma;",
          "\u03A4": "&Tau;",
          "\u03A5": "&Upsilon;",
          "\u03A6": "&Phi;",
          "\u03A7": "&Chi;",
          "\u03A8": "&Psi;",
          "\u03A9": "&Omega;",
          "\u03B1": "&alpha;",
          "\u03B2": "&beta;",
          "\u03B3": "&gamma;",
          "\u03B4": "&delta;",
          "\u03B5": "&epsilon;",
          "\u03B6": "&zeta;",
          "\u03B7": "&eta;",
          "\u03B8": "&theta;",
          "\u03B9": "&iota;",
          "\u03BA": "&kappa;",
          "\u03BB": "&lambda;",
          "\u03BC": "&mu;",
          "\u03BD": "&nu;",
          "\u03BE": "&xi;",
          "\u03BF": "&omicron;",
          "\u03C0": "&pi;",
          "\u03C1": "&rho;",
          "\u03C2": "&sigmaf;",
          "\u03C3": "&sigma;",
          "\u03C4": "&tau;",
          "\u03C5": "&upsilon;",
          "\u03C6": "&phi;",
          "\u03C7": "&chi;",
          "\u03C8": "&psi;",
          "\u03C9": "&omega;",
          "\u03D1": "&thetasym;",
          "\u03D2": "&upsih;",
          "\u03D6": "&piv;",
          "\u2022": "&bull;",
          "\u2026": "&hellip;",
          "\u2032": "&prime;",
          "\u2033": "&Prime;",
          "\u203E": "&oline;",
          "\u2044": "&frasl;",
          "\u2118": "&weierp;",
          "\u2111": "&image;",
          "\u211C": "&real;",
          "\u2122": "&trade;",
          "\u2135": "&alefsym;",
          "\u2190": "&larr;",
          "\u2191": "&uarr;",
          "\u2192": "&rarr;",
          "\u2193": "&darr;",
          "\u2194": "&harr;",
          "\u21B5": "&crarr;",
          "\u21D0": "&lArr;",
          "\u21D1": "&uArr;",
          "\u21D2": "&rArr;",
          "\u21D3": "&dArr;",
          "\u21D4": "&hArr;",
          "\u2200": "&forall;",
          "\u2202": "&part;",
          "\u2203": "&exist;",
          "\u2205": "&empty;",
          "\u2207": "&nabla;",
          "\u2208": "&isin;",
          "\u2209": "&notin;",
          "\u220B": "&ni;",
          "\u220F": "&prod;",
          "\u2211": "&sum;",
          "\u2212": "&minus;",
          "\u2217": "&lowast;",
          "\u221A": "&radic;",
          "\u221D": "&prop;",
          "\u221E": "&infin;",
          "\u2220": "&ang;",
          "\u2227": "&and;",
          "\u2228": "&or;",
          "\u2229": "&cap;",
          "\u222A": "&cup;",
          "\u222B": "&int;",
          "\u2234": "&there4;",
          "\u223C": "&sim;",
          "\u2245": "&cong;",
          "\u2248": "&asymp;",
          "\u2260": "&ne;",
          "\u2261": "&equiv;",
          "\u2264": "&le;",
          "\u2265": "&ge;",
          "\u2282": "&sub;",
          "\u2283": "&sup;",
          "\u2284": "&nsub;",
          "\u2286": "&sube;",
          "\u2287": "&supe;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u22A5": "&perp;",
          "\u22C5": "&sdot;",
          "\u2308": "&lceil;",
          "\u2309": "&rceil;",
          "\u230A": "&lfloor;",
          "\u230B": "&rfloor;",
          "\u2329": "&lang;",
          "\u232A": "&rang;",
          "\u25CA": "&loz;",
          "\u2660": "&spades;",
          "\u2663": "&clubs;",
          "\u2665": "&hearts;",
          "\u2666": "&diams;"
        }
      },
      html5: {
        entities: {
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&AMP": "&",
          "&AMP;": "&",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Abreve;": "\u0102",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Acy;": "\u0410",
          "&Afr;": "\uD835\uDD04",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Alpha;": "\u0391",
          "&Amacr;": "\u0100",
          "&And;": "\u2A53",
          "&Aogon;": "\u0104",
          "&Aopf;": "\uD835\uDD38",
          "&ApplyFunction;": "\u2061",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&Ascr;": "\uD835\uDC9C",
          "&Assign;": "\u2254",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Backslash;": "\u2216",
          "&Barv;": "\u2AE7",
          "&Barwed;": "\u2306",
          "&Bcy;": "\u0411",
          "&Because;": "\u2235",
          "&Bernoullis;": "\u212C",
          "&Beta;": "\u0392",
          "&Bfr;": "\uD835\uDD05",
          "&Bopf;": "\uD835\uDD39",
          "&Breve;": "\u02D8",
          "&Bscr;": "\u212C",
          "&Bumpeq;": "\u224E",
          "&CHcy;": "\u0427",
          "&COPY": "\xA9",
          "&COPY;": "\xA9",
          "&Cacute;": "\u0106",
          "&Cap;": "\u22D2",
          "&CapitalDifferentialD;": "\u2145",
          "&Cayleys;": "\u212D",
          "&Ccaron;": "\u010C",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Ccirc;": "\u0108",
          "&Cconint;": "\u2230",
          "&Cdot;": "\u010A",
          "&Cedilla;": "\xB8",
          "&CenterDot;": "\xB7",
          "&Cfr;": "\u212D",
          "&Chi;": "\u03A7",
          "&CircleDot;": "\u2299",
          "&CircleMinus;": "\u2296",
          "&CirclePlus;": "\u2295",
          "&CircleTimes;": "\u2297",
          "&ClockwiseContourIntegral;": "\u2232",
          "&CloseCurlyDoubleQuote;": "\u201D",
          "&CloseCurlyQuote;": "\u2019",
          "&Colon;": "\u2237",
          "&Colone;": "\u2A74",
          "&Congruent;": "\u2261",
          "&Conint;": "\u222F",
          "&ContourIntegral;": "\u222E",
          "&Copf;": "\u2102",
          "&Coproduct;": "\u2210",
          "&CounterClockwiseContourIntegral;": "\u2233",
          "&Cross;": "\u2A2F",
          "&Cscr;": "\uD835\uDC9E",
          "&Cup;": "\u22D3",
          "&CupCap;": "\u224D",
          "&DD;": "\u2145",
          "&DDotrahd;": "\u2911",
          "&DJcy;": "\u0402",
          "&DScy;": "\u0405",
          "&DZcy;": "\u040F",
          "&Dagger;": "\u2021",
          "&Darr;": "\u21A1",
          "&Dashv;": "\u2AE4",
          "&Dcaron;": "\u010E",
          "&Dcy;": "\u0414",
          "&Del;": "\u2207",
          "&Delta;": "\u0394",
          "&Dfr;": "\uD835\uDD07",
          "&DiacriticalAcute;": "\xB4",
          "&DiacriticalDot;": "\u02D9",
          "&DiacriticalDoubleAcute;": "\u02DD",
          "&DiacriticalGrave;": "`",
          "&DiacriticalTilde;": "\u02DC",
          "&Diamond;": "\u22C4",
          "&DifferentialD;": "\u2146",
          "&Dopf;": "\uD835\uDD3B",
          "&Dot;": "\xA8",
          "&DotDot;": "\u20DC",
          "&DotEqual;": "\u2250",
          "&DoubleContourIntegral;": "\u222F",
          "&DoubleDot;": "\xA8",
          "&DoubleDownArrow;": "\u21D3",
          "&DoubleLeftArrow;": "\u21D0",
          "&DoubleLeftRightArrow;": "\u21D4",
          "&DoubleLeftTee;": "\u2AE4",
          "&DoubleLongLeftArrow;": "\u27F8",
          "&DoubleLongLeftRightArrow;": "\u27FA",
          "&DoubleLongRightArrow;": "\u27F9",
          "&DoubleRightArrow;": "\u21D2",
          "&DoubleRightTee;": "\u22A8",
          "&DoubleUpArrow;": "\u21D1",
          "&DoubleUpDownArrow;": "\u21D5",
          "&DoubleVerticalBar;": "\u2225",
          "&DownArrow;": "\u2193",
          "&DownArrowBar;": "\u2913",
          "&DownArrowUpArrow;": "\u21F5",
          "&DownBreve;": "\u0311",
          "&DownLeftRightVector;": "\u2950",
          "&DownLeftTeeVector;": "\u295E",
          "&DownLeftVector;": "\u21BD",
          "&DownLeftVectorBar;": "\u2956",
          "&DownRightTeeVector;": "\u295F",
          "&DownRightVector;": "\u21C1",
          "&DownRightVectorBar;": "\u2957",
          "&DownTee;": "\u22A4",
          "&DownTeeArrow;": "\u21A7",
          "&Downarrow;": "\u21D3",
          "&Dscr;": "\uD835\uDC9F",
          "&Dstrok;": "\u0110",
          "&ENG;": "\u014A",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecaron;": "\u011A",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Ecy;": "\u042D",
          "&Edot;": "\u0116",
          "&Efr;": "\uD835\uDD08",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Element;": "\u2208",
          "&Emacr;": "\u0112",
          "&EmptySmallSquare;": "\u25FB",
          "&EmptyVerySmallSquare;": "\u25AB",
          "&Eogon;": "\u0118",
          "&Eopf;": "\uD835\uDD3C",
          "&Epsilon;": "\u0395",
          "&Equal;": "\u2A75",
          "&EqualTilde;": "\u2242",
          "&Equilibrium;": "\u21CC",
          "&Escr;": "\u2130",
          "&Esim;": "\u2A73",
          "&Eta;": "\u0397",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Exists;": "\u2203",
          "&ExponentialE;": "\u2147",
          "&Fcy;": "\u0424",
          "&Ffr;": "\uD835\uDD09",
          "&FilledSmallSquare;": "\u25FC",
          "&FilledVerySmallSquare;": "\u25AA",
          "&Fopf;": "\uD835\uDD3D",
          "&ForAll;": "\u2200",
          "&Fouriertrf;": "\u2131",
          "&Fscr;": "\u2131",
          "&GJcy;": "\u0403",
          "&GT": ">",
          "&GT;": ">",
          "&Gamma;": "\u0393",
          "&Gammad;": "\u03DC",
          "&Gbreve;": "\u011E",
          "&Gcedil;": "\u0122",
          "&Gcirc;": "\u011C",
          "&Gcy;": "\u0413",
          "&Gdot;": "\u0120",
          "&Gfr;": "\uD835\uDD0A",
          "&Gg;": "\u22D9",
          "&Gopf;": "\uD835\uDD3E",
          "&GreaterEqual;": "\u2265",
          "&GreaterEqualLess;": "\u22DB",
          "&GreaterFullEqual;": "\u2267",
          "&GreaterGreater;": "\u2AA2",
          "&GreaterLess;": "\u2277",
          "&GreaterSlantEqual;": "\u2A7E",
          "&GreaterTilde;": "\u2273",
          "&Gscr;": "\uD835\uDCA2",
          "&Gt;": "\u226B",
          "&HARDcy;": "\u042A",
          "&Hacek;": "\u02C7",
          "&Hat;": "^",
          "&Hcirc;": "\u0124",
          "&Hfr;": "\u210C",
          "&HilbertSpace;": "\u210B",
          "&Hopf;": "\u210D",
          "&HorizontalLine;": "\u2500",
          "&Hscr;": "\u210B",
          "&Hstrok;": "\u0126",
          "&HumpDownHump;": "\u224E",
          "&HumpEqual;": "\u224F",
          "&IEcy;": "\u0415",
          "&IJlig;": "\u0132",
          "&IOcy;": "\u0401",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Icy;": "\u0418",
          "&Idot;": "\u0130",
          "&Ifr;": "\u2111",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Im;": "\u2111",
          "&Imacr;": "\u012A",
          "&ImaginaryI;": "\u2148",
          "&Implies;": "\u21D2",
          "&Int;": "\u222C",
          "&Integral;": "\u222B",
          "&Intersection;": "\u22C2",
          "&InvisibleComma;": "\u2063",
          "&InvisibleTimes;": "\u2062",
          "&Iogon;": "\u012E",
          "&Iopf;": "\uD835\uDD40",
          "&Iota;": "\u0399",
          "&Iscr;": "\u2110",
          "&Itilde;": "\u0128",
          "&Iukcy;": "\u0406",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&Jcirc;": "\u0134",
          "&Jcy;": "\u0419",
          "&Jfr;": "\uD835\uDD0D",
          "&Jopf;": "\uD835\uDD41",
          "&Jscr;": "\uD835\uDCA5",
          "&Jsercy;": "\u0408",
          "&Jukcy;": "\u0404",
          "&KHcy;": "\u0425",
          "&KJcy;": "\u040C",
          "&Kappa;": "\u039A",
          "&Kcedil;": "\u0136",
          "&Kcy;": "\u041A",
          "&Kfr;": "\uD835\uDD0E",
          "&Kopf;": "\uD835\uDD42",
          "&Kscr;": "\uD835\uDCA6",
          "&LJcy;": "\u0409",
          "&LT": "<",
          "&LT;": "<",
          "&Lacute;": "\u0139",
          "&Lambda;": "\u039B",
          "&Lang;": "\u27EA",
          "&Laplacetrf;": "\u2112",
          "&Larr;": "\u219E",
          "&Lcaron;": "\u013D",
          "&Lcedil;": "\u013B",
          "&Lcy;": "\u041B",
          "&LeftAngleBracket;": "\u27E8",
          "&LeftArrow;": "\u2190",
          "&LeftArrowBar;": "\u21E4",
          "&LeftArrowRightArrow;": "\u21C6",
          "&LeftCeiling;": "\u2308",
          "&LeftDoubleBracket;": "\u27E6",
          "&LeftDownTeeVector;": "\u2961",
          "&LeftDownVector;": "\u21C3",
          "&LeftDownVectorBar;": "\u2959",
          "&LeftFloor;": "\u230A",
          "&LeftRightArrow;": "\u2194",
          "&LeftRightVector;": "\u294E",
          "&LeftTee;": "\u22A3",
          "&LeftTeeArrow;": "\u21A4",
          "&LeftTeeVector;": "\u295A",
          "&LeftTriangle;": "\u22B2",
          "&LeftTriangleBar;": "\u29CF",
          "&LeftTriangleEqual;": "\u22B4",
          "&LeftUpDownVector;": "\u2951",
          "&LeftUpTeeVector;": "\u2960",
          "&LeftUpVector;": "\u21BF",
          "&LeftUpVectorBar;": "\u2958",
          "&LeftVector;": "\u21BC",
          "&LeftVectorBar;": "\u2952",
          "&Leftarrow;": "\u21D0",
          "&Leftrightarrow;": "\u21D4",
          "&LessEqualGreater;": "\u22DA",
          "&LessFullEqual;": "\u2266",
          "&LessGreater;": "\u2276",
          "&LessLess;": "\u2AA1",
          "&LessSlantEqual;": "\u2A7D",
          "&LessTilde;": "\u2272",
          "&Lfr;": "\uD835\uDD0F",
          "&Ll;": "\u22D8",
          "&Lleftarrow;": "\u21DA",
          "&Lmidot;": "\u013F",
          "&LongLeftArrow;": "\u27F5",
          "&LongLeftRightArrow;": "\u27F7",
          "&LongRightArrow;": "\u27F6",
          "&Longleftarrow;": "\u27F8",
          "&Longleftrightarrow;": "\u27FA",
          "&Longrightarrow;": "\u27F9",
          "&Lopf;": "\uD835\uDD43",
          "&LowerLeftArrow;": "\u2199",
          "&LowerRightArrow;": "\u2198",
          "&Lscr;": "\u2112",
          "&Lsh;": "\u21B0",
          "&Lstrok;": "\u0141",
          "&Lt;": "\u226A",
          "&Map;": "\u2905",
          "&Mcy;": "\u041C",
          "&MediumSpace;": "\u205F",
          "&Mellintrf;": "\u2133",
          "&Mfr;": "\uD835\uDD10",
          "&MinusPlus;": "\u2213",
          "&Mopf;": "\uD835\uDD44",
          "&Mscr;": "\u2133",
          "&Mu;": "\u039C",
          "&NJcy;": "\u040A",
          "&Nacute;": "\u0143",
          "&Ncaron;": "\u0147",
          "&Ncedil;": "\u0145",
          "&Ncy;": "\u041D",
          "&NegativeMediumSpace;": "\u200B",
          "&NegativeThickSpace;": "\u200B",
          "&NegativeThinSpace;": "\u200B",
          "&NegativeVeryThinSpace;": "\u200B",
          "&NestedGreaterGreater;": "\u226B",
          "&NestedLessLess;": "\u226A",
          "&NewLine;": "\n",
          "&Nfr;": "\uD835\uDD11",
          "&NoBreak;": "\u2060",
          "&NonBreakingSpace;": "\xA0",
          "&Nopf;": "\u2115",
          "&Not;": "\u2AEC",
          "&NotCongruent;": "\u2262",
          "&NotCupCap;": "\u226D",
          "&NotDoubleVerticalBar;": "\u2226",
          "&NotElement;": "\u2209",
          "&NotEqual;": "\u2260",
          "&NotEqualTilde;": "\u2242\u0338",
          "&NotExists;": "\u2204",
          "&NotGreater;": "\u226F",
          "&NotGreaterEqual;": "\u2271",
          "&NotGreaterFullEqual;": "\u2267\u0338",
          "&NotGreaterGreater;": "\u226B\u0338",
          "&NotGreaterLess;": "\u2279",
          "&NotGreaterSlantEqual;": "\u2A7E\u0338",
          "&NotGreaterTilde;": "\u2275",
          "&NotHumpDownHump;": "\u224E\u0338",
          "&NotHumpEqual;": "\u224F\u0338",
          "&NotLeftTriangle;": "\u22EA",
          "&NotLeftTriangleBar;": "\u29CF\u0338",
          "&NotLeftTriangleEqual;": "\u22EC",
          "&NotLess;": "\u226E",
          "&NotLessEqual;": "\u2270",
          "&NotLessGreater;": "\u2278",
          "&NotLessLess;": "\u226A\u0338",
          "&NotLessSlantEqual;": "\u2A7D\u0338",
          "&NotLessTilde;": "\u2274",
          "&NotNestedGreaterGreater;": "\u2AA2\u0338",
          "&NotNestedLessLess;": "\u2AA1\u0338",
          "&NotPrecedes;": "\u2280",
          "&NotPrecedesEqual;": "\u2AAF\u0338",
          "&NotPrecedesSlantEqual;": "\u22E0",
          "&NotReverseElement;": "\u220C",
          "&NotRightTriangle;": "\u22EB",
          "&NotRightTriangleBar;": "\u29D0\u0338",
          "&NotRightTriangleEqual;": "\u22ED",
          "&NotSquareSubset;": "\u228F\u0338",
          "&NotSquareSubsetEqual;": "\u22E2",
          "&NotSquareSuperset;": "\u2290\u0338",
          "&NotSquareSupersetEqual;": "\u22E3",
          "&NotSubset;": "\u2282\u20D2",
          "&NotSubsetEqual;": "\u2288",
          "&NotSucceeds;": "\u2281",
          "&NotSucceedsEqual;": "\u2AB0\u0338",
          "&NotSucceedsSlantEqual;": "\u22E1",
          "&NotSucceedsTilde;": "\u227F\u0338",
          "&NotSuperset;": "\u2283\u20D2",
          "&NotSupersetEqual;": "\u2289",
          "&NotTilde;": "\u2241",
          "&NotTildeEqual;": "\u2244",
          "&NotTildeFullEqual;": "\u2247",
          "&NotTildeTilde;": "\u2249",
          "&NotVerticalBar;": "\u2224",
          "&Nscr;": "\uD835\uDCA9",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Nu;": "\u039D",
          "&OElig;": "\u0152",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Ocy;": "\u041E",
          "&Odblac;": "\u0150",
          "&Ofr;": "\uD835\uDD12",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Omacr;": "\u014C",
          "&Omega;": "\u03A9",
          "&Omicron;": "\u039F",
          "&Oopf;": "\uD835\uDD46",
          "&OpenCurlyDoubleQuote;": "\u201C",
          "&OpenCurlyQuote;": "\u2018",
          "&Or;": "\u2A54",
          "&Oscr;": "\uD835\uDCAA",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Otimes;": "\u2A37",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&OverBar;": "\u203E",
          "&OverBrace;": "\u23DE",
          "&OverBracket;": "\u23B4",
          "&OverParenthesis;": "\u23DC",
          "&PartialD;": "\u2202",
          "&Pcy;": "\u041F",
          "&Pfr;": "\uD835\uDD13",
          "&Phi;": "\u03A6",
          "&Pi;": "\u03A0",
          "&PlusMinus;": "\xB1",
          "&Poincareplane;": "\u210C",
          "&Popf;": "\u2119",
          "&Pr;": "\u2ABB",
          "&Precedes;": "\u227A",
          "&PrecedesEqual;": "\u2AAF",
          "&PrecedesSlantEqual;": "\u227C",
          "&PrecedesTilde;": "\u227E",
          "&Prime;": "\u2033",
          "&Product;": "\u220F",
          "&Proportion;": "\u2237",
          "&Proportional;": "\u221D",
          "&Pscr;": "\uD835\uDCAB",
          "&Psi;": "\u03A8",
          "&QUOT": '"',
          "&QUOT;": '"',
          "&Qfr;": "\uD835\uDD14",
          "&Qopf;": "\u211A",
          "&Qscr;": "\uD835\uDCAC",
          "&RBarr;": "\u2910",
          "&REG": "\xAE",
          "&REG;": "\xAE",
          "&Racute;": "\u0154",
          "&Rang;": "\u27EB",
          "&Rarr;": "\u21A0",
          "&Rarrtl;": "\u2916",
          "&Rcaron;": "\u0158",
          "&Rcedil;": "\u0156",
          "&Rcy;": "\u0420",
          "&Re;": "\u211C",
          "&ReverseElement;": "\u220B",
          "&ReverseEquilibrium;": "\u21CB",
          "&ReverseUpEquilibrium;": "\u296F",
          "&Rfr;": "\u211C",
          "&Rho;": "\u03A1",
          "&RightAngleBracket;": "\u27E9",
          "&RightArrow;": "\u2192",
          "&RightArrowBar;": "\u21E5",
          "&RightArrowLeftArrow;": "\u21C4",
          "&RightCeiling;": "\u2309",
          "&RightDoubleBracket;": "\u27E7",
          "&RightDownTeeVector;": "\u295D",
          "&RightDownVector;": "\u21C2",
          "&RightDownVectorBar;": "\u2955",
          "&RightFloor;": "\u230B",
          "&RightTee;": "\u22A2",
          "&RightTeeArrow;": "\u21A6",
          "&RightTeeVector;": "\u295B",
          "&RightTriangle;": "\u22B3",
          "&RightTriangleBar;": "\u29D0",
          "&RightTriangleEqual;": "\u22B5",
          "&RightUpDownVector;": "\u294F",
          "&RightUpTeeVector;": "\u295C",
          "&RightUpVector;": "\u21BE",
          "&RightUpVectorBar;": "\u2954",
          "&RightVector;": "\u21C0",
          "&RightVectorBar;": "\u2953",
          "&Rightarrow;": "\u21D2",
          "&Ropf;": "\u211D",
          "&RoundImplies;": "\u2970",
          "&Rrightarrow;": "\u21DB",
          "&Rscr;": "\u211B",
          "&Rsh;": "\u21B1",
          "&RuleDelayed;": "\u29F4",
          "&SHCHcy;": "\u0429",
          "&SHcy;": "\u0428",
          "&SOFTcy;": "\u042C",
          "&Sacute;": "\u015A",
          "&Sc;": "\u2ABC",
          "&Scaron;": "\u0160",
          "&Scedil;": "\u015E",
          "&Scirc;": "\u015C",
          "&Scy;": "\u0421",
          "&Sfr;": "\uD835\uDD16",
          "&ShortDownArrow;": "\u2193",
          "&ShortLeftArrow;": "\u2190",
          "&ShortRightArrow;": "\u2192",
          "&ShortUpArrow;": "\u2191",
          "&Sigma;": "\u03A3",
          "&SmallCircle;": "\u2218",
          "&Sopf;": "\uD835\uDD4A",
          "&Sqrt;": "\u221A",
          "&Square;": "\u25A1",
          "&SquareIntersection;": "\u2293",
          "&SquareSubset;": "\u228F",
          "&SquareSubsetEqual;": "\u2291",
          "&SquareSuperset;": "\u2290",
          "&SquareSupersetEqual;": "\u2292",
          "&SquareUnion;": "\u2294",
          "&Sscr;": "\uD835\uDCAE",
          "&Star;": "\u22C6",
          "&Sub;": "\u22D0",
          "&Subset;": "\u22D0",
          "&SubsetEqual;": "\u2286",
          "&Succeeds;": "\u227B",
          "&SucceedsEqual;": "\u2AB0",
          "&SucceedsSlantEqual;": "\u227D",
          "&SucceedsTilde;": "\u227F",
          "&SuchThat;": "\u220B",
          "&Sum;": "\u2211",
          "&Sup;": "\u22D1",
          "&Superset;": "\u2283",
          "&SupersetEqual;": "\u2287",
          "&Supset;": "\u22D1",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&TRADE;": "\u2122",
          "&TSHcy;": "\u040B",
          "&TScy;": "\u0426",
          "&Tab;": "	",
          "&Tau;": "\u03A4",
          "&Tcaron;": "\u0164",
          "&Tcedil;": "\u0162",
          "&Tcy;": "\u0422",
          "&Tfr;": "\uD835\uDD17",
          "&Therefore;": "\u2234",
          "&Theta;": "\u0398",
          "&ThickSpace;": "\u205F\u200A",
          "&ThinSpace;": "\u2009",
          "&Tilde;": "\u223C",
          "&TildeEqual;": "\u2243",
          "&TildeFullEqual;": "\u2245",
          "&TildeTilde;": "\u2248",
          "&Topf;": "\uD835\uDD4B",
          "&TripleDot;": "\u20DB",
          "&Tscr;": "\uD835\uDCAF",
          "&Tstrok;": "\u0166",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Uarr;": "\u219F",
          "&Uarrocir;": "\u2949",
          "&Ubrcy;": "\u040E",
          "&Ubreve;": "\u016C",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Ucy;": "\u0423",
          "&Udblac;": "\u0170",
          "&Ufr;": "\uD835\uDD18",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Umacr;": "\u016A",
          "&UnderBar;": "_",
          "&UnderBrace;": "\u23DF",
          "&UnderBracket;": "\u23B5",
          "&UnderParenthesis;": "\u23DD",
          "&Union;": "\u22C3",
          "&UnionPlus;": "\u228E",
          "&Uogon;": "\u0172",
          "&Uopf;": "\uD835\uDD4C",
          "&UpArrow;": "\u2191",
          "&UpArrowBar;": "\u2912",
          "&UpArrowDownArrow;": "\u21C5",
          "&UpDownArrow;": "\u2195",
          "&UpEquilibrium;": "\u296E",
          "&UpTee;": "\u22A5",
          "&UpTeeArrow;": "\u21A5",
          "&Uparrow;": "\u21D1",
          "&Updownarrow;": "\u21D5",
          "&UpperLeftArrow;": "\u2196",
          "&UpperRightArrow;": "\u2197",
          "&Upsi;": "\u03D2",
          "&Upsilon;": "\u03A5",
          "&Uring;": "\u016E",
          "&Uscr;": "\uD835\uDCB0",
          "&Utilde;": "\u0168",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&VDash;": "\u22AB",
          "&Vbar;": "\u2AEB",
          "&Vcy;": "\u0412",
          "&Vdash;": "\u22A9",
          "&Vdashl;": "\u2AE6",
          "&Vee;": "\u22C1",
          "&Verbar;": "\u2016",
          "&Vert;": "\u2016",
          "&VerticalBar;": "\u2223",
          "&VerticalLine;": "|",
          "&VerticalSeparator;": "\u2758",
          "&VerticalTilde;": "\u2240",
          "&VeryThinSpace;": "\u200A",
          "&Vfr;": "\uD835\uDD19",
          "&Vopf;": "\uD835\uDD4D",
          "&Vscr;": "\uD835\uDCB1",
          "&Vvdash;": "\u22AA",
          "&Wcirc;": "\u0174",
          "&Wedge;": "\u22C0",
          "&Wfr;": "\uD835\uDD1A",
          "&Wopf;": "\uD835\uDD4E",
          "&Wscr;": "\uD835\uDCB2",
          "&Xfr;": "\uD835\uDD1B",
          "&Xi;": "\u039E",
          "&Xopf;": "\uD835\uDD4F",
          "&Xscr;": "\uD835\uDCB3",
          "&YAcy;": "\u042F",
          "&YIcy;": "\u0407",
          "&YUcy;": "\u042E",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&Ycirc;": "\u0176",
          "&Ycy;": "\u042B",
          "&Yfr;": "\uD835\uDD1C",
          "&Yopf;": "\uD835\uDD50",
          "&Yscr;": "\uD835\uDCB4",
          "&Yuml;": "\u0178",
          "&ZHcy;": "\u0416",
          "&Zacute;": "\u0179",
          "&Zcaron;": "\u017D",
          "&Zcy;": "\u0417",
          "&Zdot;": "\u017B",
          "&ZeroWidthSpace;": "\u200B",
          "&Zeta;": "\u0396",
          "&Zfr;": "\u2128",
          "&Zopf;": "\u2124",
          "&Zscr;": "\uD835\uDCB5",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&abreve;": "\u0103",
          "&ac;": "\u223E",
          "&acE;": "\u223E\u0333",
          "&acd;": "\u223F",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&acy;": "\u0430",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&af;": "\u2061",
          "&afr;": "\uD835\uDD1E",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&alefsym;": "\u2135",
          "&aleph;": "\u2135",
          "&alpha;": "\u03B1",
          "&amacr;": "\u0101",
          "&amalg;": "\u2A3F",
          "&amp": "&",
          "&amp;": "&",
          "&and;": "\u2227",
          "&andand;": "\u2A55",
          "&andd;": "\u2A5C",
          "&andslope;": "\u2A58",
          "&andv;": "\u2A5A",
          "&ang;": "\u2220",
          "&ange;": "\u29A4",
          "&angle;": "\u2220",
          "&angmsd;": "\u2221",
          "&angmsdaa;": "\u29A8",
          "&angmsdab;": "\u29A9",
          "&angmsdac;": "\u29AA",
          "&angmsdad;": "\u29AB",
          "&angmsdae;": "\u29AC",
          "&angmsdaf;": "\u29AD",
          "&angmsdag;": "\u29AE",
          "&angmsdah;": "\u29AF",
          "&angrt;": "\u221F",
          "&angrtvb;": "\u22BE",
          "&angrtvbd;": "\u299D",
          "&angsph;": "\u2222",
          "&angst;": "\xC5",
          "&angzarr;": "\u237C",
          "&aogon;": "\u0105",
          "&aopf;": "\uD835\uDD52",
          "&ap;": "\u2248",
          "&apE;": "\u2A70",
          "&apacir;": "\u2A6F",
          "&ape;": "\u224A",
          "&apid;": "\u224B",
          "&apos;": "'",
          "&approx;": "\u2248",
          "&approxeq;": "\u224A",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&ascr;": "\uD835\uDCB6",
          "&ast;": "*",
          "&asymp;": "\u2248",
          "&asympeq;": "\u224D",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&awconint;": "\u2233",
          "&awint;": "\u2A11",
          "&bNot;": "\u2AED",
          "&backcong;": "\u224C",
          "&backepsilon;": "\u03F6",
          "&backprime;": "\u2035",
          "&backsim;": "\u223D",
          "&backsimeq;": "\u22CD",
          "&barvee;": "\u22BD",
          "&barwed;": "\u2305",
          "&barwedge;": "\u2305",
          "&bbrk;": "\u23B5",
          "&bbrktbrk;": "\u23B6",
          "&bcong;": "\u224C",
          "&bcy;": "\u0431",
          "&bdquo;": "\u201E",
          "&becaus;": "\u2235",
          "&because;": "\u2235",
          "&bemptyv;": "\u29B0",
          "&bepsi;": "\u03F6",
          "&bernou;": "\u212C",
          "&beta;": "\u03B2",
          "&beth;": "\u2136",
          "&between;": "\u226C",
          "&bfr;": "\uD835\uDD1F",
          "&bigcap;": "\u22C2",
          "&bigcirc;": "\u25EF",
          "&bigcup;": "\u22C3",
          "&bigodot;": "\u2A00",
          "&bigoplus;": "\u2A01",
          "&bigotimes;": "\u2A02",
          "&bigsqcup;": "\u2A06",
          "&bigstar;": "\u2605",
          "&bigtriangledown;": "\u25BD",
          "&bigtriangleup;": "\u25B3",
          "&biguplus;": "\u2A04",
          "&bigvee;": "\u22C1",
          "&bigwedge;": "\u22C0",
          "&bkarow;": "\u290D",
          "&blacklozenge;": "\u29EB",
          "&blacksquare;": "\u25AA",
          "&blacktriangle;": "\u25B4",
          "&blacktriangledown;": "\u25BE",
          "&blacktriangleleft;": "\u25C2",
          "&blacktriangleright;": "\u25B8",
          "&blank;": "\u2423",
          "&blk12;": "\u2592",
          "&blk14;": "\u2591",
          "&blk34;": "\u2593",
          "&block;": "\u2588",
          "&bne;": "=\u20E5",
          "&bnequiv;": "\u2261\u20E5",
          "&bnot;": "\u2310",
          "&bopf;": "\uD835\uDD53",
          "&bot;": "\u22A5",
          "&bottom;": "\u22A5",
          "&bowtie;": "\u22C8",
          "&boxDL;": "\u2557",
          "&boxDR;": "\u2554",
          "&boxDl;": "\u2556",
          "&boxDr;": "\u2553",
          "&boxH;": "\u2550",
          "&boxHD;": "\u2566",
          "&boxHU;": "\u2569",
          "&boxHd;": "\u2564",
          "&boxHu;": "\u2567",
          "&boxUL;": "\u255D",
          "&boxUR;": "\u255A",
          "&boxUl;": "\u255C",
          "&boxUr;": "\u2559",
          "&boxV;": "\u2551",
          "&boxVH;": "\u256C",
          "&boxVL;": "\u2563",
          "&boxVR;": "\u2560",
          "&boxVh;": "\u256B",
          "&boxVl;": "\u2562",
          "&boxVr;": "\u255F",
          "&boxbox;": "\u29C9",
          "&boxdL;": "\u2555",
          "&boxdR;": "\u2552",
          "&boxdl;": "\u2510",
          "&boxdr;": "\u250C",
          "&boxh;": "\u2500",
          "&boxhD;": "\u2565",
          "&boxhU;": "\u2568",
          "&boxhd;": "\u252C",
          "&boxhu;": "\u2534",
          "&boxminus;": "\u229F",
          "&boxplus;": "\u229E",
          "&boxtimes;": "\u22A0",
          "&boxuL;": "\u255B",
          "&boxuR;": "\u2558",
          "&boxul;": "\u2518",
          "&boxur;": "\u2514",
          "&boxv;": "\u2502",
          "&boxvH;": "\u256A",
          "&boxvL;": "\u2561",
          "&boxvR;": "\u255E",
          "&boxvh;": "\u253C",
          "&boxvl;": "\u2524",
          "&boxvr;": "\u251C",
          "&bprime;": "\u2035",
          "&breve;": "\u02D8",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&bscr;": "\uD835\uDCB7",
          "&bsemi;": "\u204F",
          "&bsim;": "\u223D",
          "&bsime;": "\u22CD",
          "&bsol;": "\\",
          "&bsolb;": "\u29C5",
          "&bsolhsub;": "\u27C8",
          "&bull;": "\u2022",
          "&bullet;": "\u2022",
          "&bump;": "\u224E",
          "&bumpE;": "\u2AAE",
          "&bumpe;": "\u224F",
          "&bumpeq;": "\u224F",
          "&cacute;": "\u0107",
          "&cap;": "\u2229",
          "&capand;": "\u2A44",
          "&capbrcup;": "\u2A49",
          "&capcap;": "\u2A4B",
          "&capcup;": "\u2A47",
          "&capdot;": "\u2A40",
          "&caps;": "\u2229\uFE00",
          "&caret;": "\u2041",
          "&caron;": "\u02C7",
          "&ccaps;": "\u2A4D",
          "&ccaron;": "\u010D",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&ccirc;": "\u0109",
          "&ccups;": "\u2A4C",
          "&ccupssm;": "\u2A50",
          "&cdot;": "\u010B",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&cemptyv;": "\u29B2",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&centerdot;": "\xB7",
          "&cfr;": "\uD835\uDD20",
          "&chcy;": "\u0447",
          "&check;": "\u2713",
          "&checkmark;": "\u2713",
          "&chi;": "\u03C7",
          "&cir;": "\u25CB",
          "&cirE;": "\u29C3",
          "&circ;": "\u02C6",
          "&circeq;": "\u2257",
          "&circlearrowleft;": "\u21BA",
          "&circlearrowright;": "\u21BB",
          "&circledR;": "\xAE",
          "&circledS;": "\u24C8",
          "&circledast;": "\u229B",
          "&circledcirc;": "\u229A",
          "&circleddash;": "\u229D",
          "&cire;": "\u2257",
          "&cirfnint;": "\u2A10",
          "&cirmid;": "\u2AEF",
          "&cirscir;": "\u29C2",
          "&clubs;": "\u2663",
          "&clubsuit;": "\u2663",
          "&colon;": ":",
          "&colone;": "\u2254",
          "&coloneq;": "\u2254",
          "&comma;": ",",
          "&commat;": "@",
          "&comp;": "\u2201",
          "&compfn;": "\u2218",
          "&complement;": "\u2201",
          "&complexes;": "\u2102",
          "&cong;": "\u2245",
          "&congdot;": "\u2A6D",
          "&conint;": "\u222E",
          "&copf;": "\uD835\uDD54",
          "&coprod;": "\u2210",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&copysr;": "\u2117",
          "&crarr;": "\u21B5",
          "&cross;": "\u2717",
          "&cscr;": "\uD835\uDCB8",
          "&csub;": "\u2ACF",
          "&csube;": "\u2AD1",
          "&csup;": "\u2AD0",
          "&csupe;": "\u2AD2",
          "&ctdot;": "\u22EF",
          "&cudarrl;": "\u2938",
          "&cudarrr;": "\u2935",
          "&cuepr;": "\u22DE",
          "&cuesc;": "\u22DF",
          "&cularr;": "\u21B6",
          "&cularrp;": "\u293D",
          "&cup;": "\u222A",
          "&cupbrcap;": "\u2A48",
          "&cupcap;": "\u2A46",
          "&cupcup;": "\u2A4A",
          "&cupdot;": "\u228D",
          "&cupor;": "\u2A45",
          "&cups;": "\u222A\uFE00",
          "&curarr;": "\u21B7",
          "&curarrm;": "\u293C",
          "&curlyeqprec;": "\u22DE",
          "&curlyeqsucc;": "\u22DF",
          "&curlyvee;": "\u22CE",
          "&curlywedge;": "\u22CF",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&curvearrowleft;": "\u21B6",
          "&curvearrowright;": "\u21B7",
          "&cuvee;": "\u22CE",
          "&cuwed;": "\u22CF",
          "&cwconint;": "\u2232",
          "&cwint;": "\u2231",
          "&cylcty;": "\u232D",
          "&dArr;": "\u21D3",
          "&dHar;": "\u2965",
          "&dagger;": "\u2020",
          "&daleth;": "\u2138",
          "&darr;": "\u2193",
          "&dash;": "\u2010",
          "&dashv;": "\u22A3",
          "&dbkarow;": "\u290F",
          "&dblac;": "\u02DD",
          "&dcaron;": "\u010F",
          "&dcy;": "\u0434",
          "&dd;": "\u2146",
          "&ddagger;": "\u2021",
          "&ddarr;": "\u21CA",
          "&ddotseq;": "\u2A77",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&delta;": "\u03B4",
          "&demptyv;": "\u29B1",
          "&dfisht;": "\u297F",
          "&dfr;": "\uD835\uDD21",
          "&dharl;": "\u21C3",
          "&dharr;": "\u21C2",
          "&diam;": "\u22C4",
          "&diamond;": "\u22C4",
          "&diamondsuit;": "\u2666",
          "&diams;": "\u2666",
          "&die;": "\xA8",
          "&digamma;": "\u03DD",
          "&disin;": "\u22F2",
          "&div;": "\xF7",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&divideontimes;": "\u22C7",
          "&divonx;": "\u22C7",
          "&djcy;": "\u0452",
          "&dlcorn;": "\u231E",
          "&dlcrop;": "\u230D",
          "&dollar;": "$",
          "&dopf;": "\uD835\uDD55",
          "&dot;": "\u02D9",
          "&doteq;": "\u2250",
          "&doteqdot;": "\u2251",
          "&dotminus;": "\u2238",
          "&dotplus;": "\u2214",
          "&dotsquare;": "\u22A1",
          "&doublebarwedge;": "\u2306",
          "&downarrow;": "\u2193",
          "&downdownarrows;": "\u21CA",
          "&downharpoonleft;": "\u21C3",
          "&downharpoonright;": "\u21C2",
          "&drbkarow;": "\u2910",
          "&drcorn;": "\u231F",
          "&drcrop;": "\u230C",
          "&dscr;": "\uD835\uDCB9",
          "&dscy;": "\u0455",
          "&dsol;": "\u29F6",
          "&dstrok;": "\u0111",
          "&dtdot;": "\u22F1",
          "&dtri;": "\u25BF",
          "&dtrif;": "\u25BE",
          "&duarr;": "\u21F5",
          "&duhar;": "\u296F",
          "&dwangle;": "\u29A6",
          "&dzcy;": "\u045F",
          "&dzigrarr;": "\u27FF",
          "&eDDot;": "\u2A77",
          "&eDot;": "\u2251",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&easter;": "\u2A6E",
          "&ecaron;": "\u011B",
          "&ecir;": "\u2256",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&ecolon;": "\u2255",
          "&ecy;": "\u044D",
          "&edot;": "\u0117",
          "&ee;": "\u2147",
          "&efDot;": "\u2252",
          "&efr;": "\uD835\uDD22",
          "&eg;": "\u2A9A",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&egs;": "\u2A96",
          "&egsdot;": "\u2A98",
          "&el;": "\u2A99",
          "&elinters;": "\u23E7",
          "&ell;": "\u2113",
          "&els;": "\u2A95",
          "&elsdot;": "\u2A97",
          "&emacr;": "\u0113",
          "&empty;": "\u2205",
          "&emptyset;": "\u2205",
          "&emptyv;": "\u2205",
          "&emsp13;": "\u2004",
          "&emsp14;": "\u2005",
          "&emsp;": "\u2003",
          "&eng;": "\u014B",
          "&ensp;": "\u2002",
          "&eogon;": "\u0119",
          "&eopf;": "\uD835\uDD56",
          "&epar;": "\u22D5",
          "&eparsl;": "\u29E3",
          "&eplus;": "\u2A71",
          "&epsi;": "\u03B5",
          "&epsilon;": "\u03B5",
          "&epsiv;": "\u03F5",
          "&eqcirc;": "\u2256",
          "&eqcolon;": "\u2255",
          "&eqsim;": "\u2242",
          "&eqslantgtr;": "\u2A96",
          "&eqslantless;": "\u2A95",
          "&equals;": "=",
          "&equest;": "\u225F",
          "&equiv;": "\u2261",
          "&equivDD;": "\u2A78",
          "&eqvparsl;": "\u29E5",
          "&erDot;": "\u2253",
          "&erarr;": "\u2971",
          "&escr;": "\u212F",
          "&esdot;": "\u2250",
          "&esim;": "\u2242",
          "&eta;": "\u03B7",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&euro;": "\u20AC",
          "&excl;": "!",
          "&exist;": "\u2203",
          "&expectation;": "\u2130",
          "&exponentiale;": "\u2147",
          "&fallingdotseq;": "\u2252",
          "&fcy;": "\u0444",
          "&female;": "\u2640",
          "&ffilig;": "\uFB03",
          "&fflig;": "\uFB00",
          "&ffllig;": "\uFB04",
          "&ffr;": "\uD835\uDD23",
          "&filig;": "\uFB01",
          "&fjlig;": "fj",
          "&flat;": "\u266D",
          "&fllig;": "\uFB02",
          "&fltns;": "\u25B1",
          "&fnof;": "\u0192",
          "&fopf;": "\uD835\uDD57",
          "&forall;": "\u2200",
          "&fork;": "\u22D4",
          "&forkv;": "\u2AD9",
          "&fpartint;": "\u2A0D",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac13;": "\u2153",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac15;": "\u2155",
          "&frac16;": "\u2159",
          "&frac18;": "\u215B",
          "&frac23;": "\u2154",
          "&frac25;": "\u2156",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&frac35;": "\u2157",
          "&frac38;": "\u215C",
          "&frac45;": "\u2158",
          "&frac56;": "\u215A",
          "&frac58;": "\u215D",
          "&frac78;": "\u215E",
          "&frasl;": "\u2044",
          "&frown;": "\u2322",
          "&fscr;": "\uD835\uDCBB",
          "&gE;": "\u2267",
          "&gEl;": "\u2A8C",
          "&gacute;": "\u01F5",
          "&gamma;": "\u03B3",
          "&gammad;": "\u03DD",
          "&gap;": "\u2A86",
          "&gbreve;": "\u011F",
          "&gcirc;": "\u011D",
          "&gcy;": "\u0433",
          "&gdot;": "\u0121",
          "&ge;": "\u2265",
          "&gel;": "\u22DB",
          "&geq;": "\u2265",
          "&geqq;": "\u2267",
          "&geqslant;": "\u2A7E",
          "&ges;": "\u2A7E",
          "&gescc;": "\u2AA9",
          "&gesdot;": "\u2A80",
          "&gesdoto;": "\u2A82",
          "&gesdotol;": "\u2A84",
          "&gesl;": "\u22DB\uFE00",
          "&gesles;": "\u2A94",
          "&gfr;": "\uD835\uDD24",
          "&gg;": "\u226B",
          "&ggg;": "\u22D9",
          "&gimel;": "\u2137",
          "&gjcy;": "\u0453",
          "&gl;": "\u2277",
          "&glE;": "\u2A92",
          "&gla;": "\u2AA5",
          "&glj;": "\u2AA4",
          "&gnE;": "\u2269",
          "&gnap;": "\u2A8A",
          "&gnapprox;": "\u2A8A",
          "&gne;": "\u2A88",
          "&gneq;": "\u2A88",
          "&gneqq;": "\u2269",
          "&gnsim;": "\u22E7",
          "&gopf;": "\uD835\uDD58",
          "&grave;": "`",
          "&gscr;": "\u210A",
          "&gsim;": "\u2273",
          "&gsime;": "\u2A8E",
          "&gsiml;": "\u2A90",
          "&gt": ">",
          "&gt;": ">",
          "&gtcc;": "\u2AA7",
          "&gtcir;": "\u2A7A",
          "&gtdot;": "\u22D7",
          "&gtlPar;": "\u2995",
          "&gtquest;": "\u2A7C",
          "&gtrapprox;": "\u2A86",
          "&gtrarr;": "\u2978",
          "&gtrdot;": "\u22D7",
          "&gtreqless;": "\u22DB",
          "&gtreqqless;": "\u2A8C",
          "&gtrless;": "\u2277",
          "&gtrsim;": "\u2273",
          "&gvertneqq;": "\u2269\uFE00",
          "&gvnE;": "\u2269\uFE00",
          "&hArr;": "\u21D4",
          "&hairsp;": "\u200A",
          "&half;": "\xBD",
          "&hamilt;": "\u210B",
          "&hardcy;": "\u044A",
          "&harr;": "\u2194",
          "&harrcir;": "\u2948",
          "&harrw;": "\u21AD",
          "&hbar;": "\u210F",
          "&hcirc;": "\u0125",
          "&hearts;": "\u2665",
          "&heartsuit;": "\u2665",
          "&hellip;": "\u2026",
          "&hercon;": "\u22B9",
          "&hfr;": "\uD835\uDD25",
          "&hksearow;": "\u2925",
          "&hkswarow;": "\u2926",
          "&hoarr;": "\u21FF",
          "&homtht;": "\u223B",
          "&hookleftarrow;": "\u21A9",
          "&hookrightarrow;": "\u21AA",
          "&hopf;": "\uD835\uDD59",
          "&horbar;": "\u2015",
          "&hscr;": "\uD835\uDCBD",
          "&hslash;": "\u210F",
          "&hstrok;": "\u0127",
          "&hybull;": "\u2043",
          "&hyphen;": "\u2010",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&ic;": "\u2063",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&icy;": "\u0438",
          "&iecy;": "\u0435",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&iff;": "\u21D4",
          "&ifr;": "\uD835\uDD26",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&ii;": "\u2148",
          "&iiiint;": "\u2A0C",
          "&iiint;": "\u222D",
          "&iinfin;": "\u29DC",
          "&iiota;": "\u2129",
          "&ijlig;": "\u0133",
          "&imacr;": "\u012B",
          "&image;": "\u2111",
          "&imagline;": "\u2110",
          "&imagpart;": "\u2111",
          "&imath;": "\u0131",
          "&imof;": "\u22B7",
          "&imped;": "\u01B5",
          "&in;": "\u2208",
          "&incare;": "\u2105",
          "&infin;": "\u221E",
          "&infintie;": "\u29DD",
          "&inodot;": "\u0131",
          "&int;": "\u222B",
          "&intcal;": "\u22BA",
          "&integers;": "\u2124",
          "&intercal;": "\u22BA",
          "&intlarhk;": "\u2A17",
          "&intprod;": "\u2A3C",
          "&iocy;": "\u0451",
          "&iogon;": "\u012F",
          "&iopf;": "\uD835\uDD5A",
          "&iota;": "\u03B9",
          "&iprod;": "\u2A3C",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&iscr;": "\uD835\uDCBE",
          "&isin;": "\u2208",
          "&isinE;": "\u22F9",
          "&isindot;": "\u22F5",
          "&isins;": "\u22F4",
          "&isinsv;": "\u22F3",
          "&isinv;": "\u2208",
          "&it;": "\u2062",
          "&itilde;": "\u0129",
          "&iukcy;": "\u0456",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&jcirc;": "\u0135",
          "&jcy;": "\u0439",
          "&jfr;": "\uD835\uDD27",
          "&jmath;": "\u0237",
          "&jopf;": "\uD835\uDD5B",
          "&jscr;": "\uD835\uDCBF",
          "&jsercy;": "\u0458",
          "&jukcy;": "\u0454",
          "&kappa;": "\u03BA",
          "&kappav;": "\u03F0",
          "&kcedil;": "\u0137",
          "&kcy;": "\u043A",
          "&kfr;": "\uD835\uDD28",
          "&kgreen;": "\u0138",
          "&khcy;": "\u0445",
          "&kjcy;": "\u045C",
          "&kopf;": "\uD835\uDD5C",
          "&kscr;": "\uD835\uDCC0",
          "&lAarr;": "\u21DA",
          "&lArr;": "\u21D0",
          "&lAtail;": "\u291B",
          "&lBarr;": "\u290E",
          "&lE;": "\u2266",
          "&lEg;": "\u2A8B",
          "&lHar;": "\u2962",
          "&lacute;": "\u013A",
          "&laemptyv;": "\u29B4",
          "&lagran;": "\u2112",
          "&lambda;": "\u03BB",
          "&lang;": "\u27E8",
          "&langd;": "\u2991",
          "&langle;": "\u27E8",
          "&lap;": "\u2A85",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&larr;": "\u2190",
          "&larrb;": "\u21E4",
          "&larrbfs;": "\u291F",
          "&larrfs;": "\u291D",
          "&larrhk;": "\u21A9",
          "&larrlp;": "\u21AB",
          "&larrpl;": "\u2939",
          "&larrsim;": "\u2973",
          "&larrtl;": "\u21A2",
          "&lat;": "\u2AAB",
          "&latail;": "\u2919",
          "&late;": "\u2AAD",
          "&lates;": "\u2AAD\uFE00",
          "&lbarr;": "\u290C",
          "&lbbrk;": "\u2772",
          "&lbrace;": "{",
          "&lbrack;": "[",
          "&lbrke;": "\u298B",
          "&lbrksld;": "\u298F",
          "&lbrkslu;": "\u298D",
          "&lcaron;": "\u013E",
          "&lcedil;": "\u013C",
          "&lceil;": "\u2308",
          "&lcub;": "{",
          "&lcy;": "\u043B",
          "&ldca;": "\u2936",
          "&ldquo;": "\u201C",
          "&ldquor;": "\u201E",
          "&ldrdhar;": "\u2967",
          "&ldrushar;": "\u294B",
          "&ldsh;": "\u21B2",
          "&le;": "\u2264",
          "&leftarrow;": "\u2190",
          "&leftarrowtail;": "\u21A2",
          "&leftharpoondown;": "\u21BD",
          "&leftharpoonup;": "\u21BC",
          "&leftleftarrows;": "\u21C7",
          "&leftrightarrow;": "\u2194",
          "&leftrightarrows;": "\u21C6",
          "&leftrightharpoons;": "\u21CB",
          "&leftrightsquigarrow;": "\u21AD",
          "&leftthreetimes;": "\u22CB",
          "&leg;": "\u22DA",
          "&leq;": "\u2264",
          "&leqq;": "\u2266",
          "&leqslant;": "\u2A7D",
          "&les;": "\u2A7D",
          "&lescc;": "\u2AA8",
          "&lesdot;": "\u2A7F",
          "&lesdoto;": "\u2A81",
          "&lesdotor;": "\u2A83",
          "&lesg;": "\u22DA\uFE00",
          "&lesges;": "\u2A93",
          "&lessapprox;": "\u2A85",
          "&lessdot;": "\u22D6",
          "&lesseqgtr;": "\u22DA",
          "&lesseqqgtr;": "\u2A8B",
          "&lessgtr;": "\u2276",
          "&lesssim;": "\u2272",
          "&lfisht;": "\u297C",
          "&lfloor;": "\u230A",
          "&lfr;": "\uD835\uDD29",
          "&lg;": "\u2276",
          "&lgE;": "\u2A91",
          "&lhard;": "\u21BD",
          "&lharu;": "\u21BC",
          "&lharul;": "\u296A",
          "&lhblk;": "\u2584",
          "&ljcy;": "\u0459",
          "&ll;": "\u226A",
          "&llarr;": "\u21C7",
          "&llcorner;": "\u231E",
          "&llhard;": "\u296B",
          "&lltri;": "\u25FA",
          "&lmidot;": "\u0140",
          "&lmoust;": "\u23B0",
          "&lmoustache;": "\u23B0",
          "&lnE;": "\u2268",
          "&lnap;": "\u2A89",
          "&lnapprox;": "\u2A89",
          "&lne;": "\u2A87",
          "&lneq;": "\u2A87",
          "&lneqq;": "\u2268",
          "&lnsim;": "\u22E6",
          "&loang;": "\u27EC",
          "&loarr;": "\u21FD",
          "&lobrk;": "\u27E6",
          "&longleftarrow;": "\u27F5",
          "&longleftrightarrow;": "\u27F7",
          "&longmapsto;": "\u27FC",
          "&longrightarrow;": "\u27F6",
          "&looparrowleft;": "\u21AB",
          "&looparrowright;": "\u21AC",
          "&lopar;": "\u2985",
          "&lopf;": "\uD835\uDD5D",
          "&loplus;": "\u2A2D",
          "&lotimes;": "\u2A34",
          "&lowast;": "\u2217",
          "&lowbar;": "_",
          "&loz;": "\u25CA",
          "&lozenge;": "\u25CA",
          "&lozf;": "\u29EB",
          "&lpar;": "(",
          "&lparlt;": "\u2993",
          "&lrarr;": "\u21C6",
          "&lrcorner;": "\u231F",
          "&lrhar;": "\u21CB",
          "&lrhard;": "\u296D",
          "&lrm;": "\u200E",
          "&lrtri;": "\u22BF",
          "&lsaquo;": "\u2039",
          "&lscr;": "\uD835\uDCC1",
          "&lsh;": "\u21B0",
          "&lsim;": "\u2272",
          "&lsime;": "\u2A8D",
          "&lsimg;": "\u2A8F",
          "&lsqb;": "[",
          "&lsquo;": "\u2018",
          "&lsquor;": "\u201A",
          "&lstrok;": "\u0142",
          "&lt": "<",
          "&lt;": "<",
          "&ltcc;": "\u2AA6",
          "&ltcir;": "\u2A79",
          "&ltdot;": "\u22D6",
          "&lthree;": "\u22CB",
          "&ltimes;": "\u22C9",
          "&ltlarr;": "\u2976",
          "&ltquest;": "\u2A7B",
          "&ltrPar;": "\u2996",
          "&ltri;": "\u25C3",
          "&ltrie;": "\u22B4",
          "&ltrif;": "\u25C2",
          "&lurdshar;": "\u294A",
          "&luruhar;": "\u2966",
          "&lvertneqq;": "\u2268\uFE00",
          "&lvnE;": "\u2268\uFE00",
          "&mDDot;": "\u223A",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&male;": "\u2642",
          "&malt;": "\u2720",
          "&maltese;": "\u2720",
          "&map;": "\u21A6",
          "&mapsto;": "\u21A6",
          "&mapstodown;": "\u21A7",
          "&mapstoleft;": "\u21A4",
          "&mapstoup;": "\u21A5",
          "&marker;": "\u25AE",
          "&mcomma;": "\u2A29",
          "&mcy;": "\u043C",
          "&mdash;": "\u2014",
          "&measuredangle;": "\u2221",
          "&mfr;": "\uD835\uDD2A",
          "&mho;": "\u2127",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&mid;": "\u2223",
          "&midast;": "*",
          "&midcir;": "\u2AF0",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&minus;": "\u2212",
          "&minusb;": "\u229F",
          "&minusd;": "\u2238",
          "&minusdu;": "\u2A2A",
          "&mlcp;": "\u2ADB",
          "&mldr;": "\u2026",
          "&mnplus;": "\u2213",
          "&models;": "\u22A7",
          "&mopf;": "\uD835\uDD5E",
          "&mp;": "\u2213",
          "&mscr;": "\uD835\uDCC2",
          "&mstpos;": "\u223E",
          "&mu;": "\u03BC",
          "&multimap;": "\u22B8",
          "&mumap;": "\u22B8",
          "&nGg;": "\u22D9\u0338",
          "&nGt;": "\u226B\u20D2",
          "&nGtv;": "\u226B\u0338",
          "&nLeftarrow;": "\u21CD",
          "&nLeftrightarrow;": "\u21CE",
          "&nLl;": "\u22D8\u0338",
          "&nLt;": "\u226A\u20D2",
          "&nLtv;": "\u226A\u0338",
          "&nRightarrow;": "\u21CF",
          "&nVDash;": "\u22AF",
          "&nVdash;": "\u22AE",
          "&nabla;": "\u2207",
          "&nacute;": "\u0144",
          "&nang;": "\u2220\u20D2",
          "&nap;": "\u2249",
          "&napE;": "\u2A70\u0338",
          "&napid;": "\u224B\u0338",
          "&napos;": "\u0149",
          "&napprox;": "\u2249",
          "&natur;": "\u266E",
          "&natural;": "\u266E",
          "&naturals;": "\u2115",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&nbump;": "\u224E\u0338",
          "&nbumpe;": "\u224F\u0338",
          "&ncap;": "\u2A43",
          "&ncaron;": "\u0148",
          "&ncedil;": "\u0146",
          "&ncong;": "\u2247",
          "&ncongdot;": "\u2A6D\u0338",
          "&ncup;": "\u2A42",
          "&ncy;": "\u043D",
          "&ndash;": "\u2013",
          "&ne;": "\u2260",
          "&neArr;": "\u21D7",
          "&nearhk;": "\u2924",
          "&nearr;": "\u2197",
          "&nearrow;": "\u2197",
          "&nedot;": "\u2250\u0338",
          "&nequiv;": "\u2262",
          "&nesear;": "\u2928",
          "&nesim;": "\u2242\u0338",
          "&nexist;": "\u2204",
          "&nexists;": "\u2204",
          "&nfr;": "\uD835\uDD2B",
          "&ngE;": "\u2267\u0338",
          "&nge;": "\u2271",
          "&ngeq;": "\u2271",
          "&ngeqq;": "\u2267\u0338",
          "&ngeqslant;": "\u2A7E\u0338",
          "&nges;": "\u2A7E\u0338",
          "&ngsim;": "\u2275",
          "&ngt;": "\u226F",
          "&ngtr;": "\u226F",
          "&nhArr;": "\u21CE",
          "&nharr;": "\u21AE",
          "&nhpar;": "\u2AF2",
          "&ni;": "\u220B",
          "&nis;": "\u22FC",
          "&nisd;": "\u22FA",
          "&niv;": "\u220B",
          "&njcy;": "\u045A",
          "&nlArr;": "\u21CD",
          "&nlE;": "\u2266\u0338",
          "&nlarr;": "\u219A",
          "&nldr;": "\u2025",
          "&nle;": "\u2270",
          "&nleftarrow;": "\u219A",
          "&nleftrightarrow;": "\u21AE",
          "&nleq;": "\u2270",
          "&nleqq;": "\u2266\u0338",
          "&nleqslant;": "\u2A7D\u0338",
          "&nles;": "\u2A7D\u0338",
          "&nless;": "\u226E",
          "&nlsim;": "\u2274",
          "&nlt;": "\u226E",
          "&nltri;": "\u22EA",
          "&nltrie;": "\u22EC",
          "&nmid;": "\u2224",
          "&nopf;": "\uD835\uDD5F",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&notin;": "\u2209",
          "&notinE;": "\u22F9\u0338",
          "&notindot;": "\u22F5\u0338",
          "&notinva;": "\u2209",
          "&notinvb;": "\u22F7",
          "&notinvc;": "\u22F6",
          "&notni;": "\u220C",
          "&notniva;": "\u220C",
          "&notnivb;": "\u22FE",
          "&notnivc;": "\u22FD",
          "&npar;": "\u2226",
          "&nparallel;": "\u2226",
          "&nparsl;": "\u2AFD\u20E5",
          "&npart;": "\u2202\u0338",
          "&npolint;": "\u2A14",
          "&npr;": "\u2280",
          "&nprcue;": "\u22E0",
          "&npre;": "\u2AAF\u0338",
          "&nprec;": "\u2280",
          "&npreceq;": "\u2AAF\u0338",
          "&nrArr;": "\u21CF",
          "&nrarr;": "\u219B",
          "&nrarrc;": "\u2933\u0338",
          "&nrarrw;": "\u219D\u0338",
          "&nrightarrow;": "\u219B",
          "&nrtri;": "\u22EB",
          "&nrtrie;": "\u22ED",
          "&nsc;": "\u2281",
          "&nsccue;": "\u22E1",
          "&nsce;": "\u2AB0\u0338",
          "&nscr;": "\uD835\uDCC3",
          "&nshortmid;": "\u2224",
          "&nshortparallel;": "\u2226",
          "&nsim;": "\u2241",
          "&nsime;": "\u2244",
          "&nsimeq;": "\u2244",
          "&nsmid;": "\u2224",
          "&nspar;": "\u2226",
          "&nsqsube;": "\u22E2",
          "&nsqsupe;": "\u22E3",
          "&nsub;": "\u2284",
          "&nsubE;": "\u2AC5\u0338",
          "&nsube;": "\u2288",
          "&nsubset;": "\u2282\u20D2",
          "&nsubseteq;": "\u2288",
          "&nsubseteqq;": "\u2AC5\u0338",
          "&nsucc;": "\u2281",
          "&nsucceq;": "\u2AB0\u0338",
          "&nsup;": "\u2285",
          "&nsupE;": "\u2AC6\u0338",
          "&nsupe;": "\u2289",
          "&nsupset;": "\u2283\u20D2",
          "&nsupseteq;": "\u2289",
          "&nsupseteqq;": "\u2AC6\u0338",
          "&ntgl;": "\u2279",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ntlg;": "\u2278",
          "&ntriangleleft;": "\u22EA",
          "&ntrianglelefteq;": "\u22EC",
          "&ntriangleright;": "\u22EB",
          "&ntrianglerighteq;": "\u22ED",
          "&nu;": "\u03BD",
          "&num;": "#",
          "&numero;": "\u2116",
          "&numsp;": "\u2007",
          "&nvDash;": "\u22AD",
          "&nvHarr;": "\u2904",
          "&nvap;": "\u224D\u20D2",
          "&nvdash;": "\u22AC",
          "&nvge;": "\u2265\u20D2",
          "&nvgt;": ">\u20D2",
          "&nvinfin;": "\u29DE",
          "&nvlArr;": "\u2902",
          "&nvle;": "\u2264\u20D2",
          "&nvlt;": "<\u20D2",
          "&nvltrie;": "\u22B4\u20D2",
          "&nvrArr;": "\u2903",
          "&nvrtrie;": "\u22B5\u20D2",
          "&nvsim;": "\u223C\u20D2",
          "&nwArr;": "\u21D6",
          "&nwarhk;": "\u2923",
          "&nwarr;": "\u2196",
          "&nwarrow;": "\u2196",
          "&nwnear;": "\u2927",
          "&oS;": "\u24C8",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&oast;": "\u229B",
          "&ocir;": "\u229A",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&ocy;": "\u043E",
          "&odash;": "\u229D",
          "&odblac;": "\u0151",
          "&odiv;": "\u2A38",
          "&odot;": "\u2299",
          "&odsold;": "\u29BC",
          "&oelig;": "\u0153",
          "&ofcir;": "\u29BF",
          "&ofr;": "\uD835\uDD2C",
          "&ogon;": "\u02DB",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&ogt;": "\u29C1",
          "&ohbar;": "\u29B5",
          "&ohm;": "\u03A9",
          "&oint;": "\u222E",
          "&olarr;": "\u21BA",
          "&olcir;": "\u29BE",
          "&olcross;": "\u29BB",
          "&oline;": "\u203E",
          "&olt;": "\u29C0",
          "&omacr;": "\u014D",
          "&omega;": "\u03C9",
          "&omicron;": "\u03BF",
          "&omid;": "\u29B6",
          "&ominus;": "\u2296",
          "&oopf;": "\uD835\uDD60",
          "&opar;": "\u29B7",
          "&operp;": "\u29B9",
          "&oplus;": "\u2295",
          "&or;": "\u2228",
          "&orarr;": "\u21BB",
          "&ord;": "\u2A5D",
          "&order;": "\u2134",
          "&orderof;": "\u2134",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&origof;": "\u22B6",
          "&oror;": "\u2A56",
          "&orslope;": "\u2A57",
          "&orv;": "\u2A5B",
          "&oscr;": "\u2134",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&osol;": "\u2298",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&otimes;": "\u2297",
          "&otimesas;": "\u2A36",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&ovbar;": "\u233D",
          "&par;": "\u2225",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&parallel;": "\u2225",
          "&parsim;": "\u2AF3",
          "&parsl;": "\u2AFD",
          "&part;": "\u2202",
          "&pcy;": "\u043F",
          "&percnt;": "%",
          "&period;": ".",
          "&permil;": "\u2030",
          "&perp;": "\u22A5",
          "&pertenk;": "\u2031",
          "&pfr;": "\uD835\uDD2D",
          "&phi;": "\u03C6",
          "&phiv;": "\u03D5",
          "&phmmat;": "\u2133",
          "&phone;": "\u260E",
          "&pi;": "\u03C0",
          "&pitchfork;": "\u22D4",
          "&piv;": "\u03D6",
          "&planck;": "\u210F",
          "&planckh;": "\u210E",
          "&plankv;": "\u210F",
          "&plus;": "+",
          "&plusacir;": "\u2A23",
          "&plusb;": "\u229E",
          "&pluscir;": "\u2A22",
          "&plusdo;": "\u2214",
          "&plusdu;": "\u2A25",
          "&pluse;": "\u2A72",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&plussim;": "\u2A26",
          "&plustwo;": "\u2A27",
          "&pm;": "\xB1",
          "&pointint;": "\u2A15",
          "&popf;": "\uD835\uDD61",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&pr;": "\u227A",
          "&prE;": "\u2AB3",
          "&prap;": "\u2AB7",
          "&prcue;": "\u227C",
          "&pre;": "\u2AAF",
          "&prec;": "\u227A",
          "&precapprox;": "\u2AB7",
          "&preccurlyeq;": "\u227C",
          "&preceq;": "\u2AAF",
          "&precnapprox;": "\u2AB9",
          "&precneqq;": "\u2AB5",
          "&precnsim;": "\u22E8",
          "&precsim;": "\u227E",
          "&prime;": "\u2032",
          "&primes;": "\u2119",
          "&prnE;": "\u2AB5",
          "&prnap;": "\u2AB9",
          "&prnsim;": "\u22E8",
          "&prod;": "\u220F",
          "&profalar;": "\u232E",
          "&profline;": "\u2312",
          "&profsurf;": "\u2313",
          "&prop;": "\u221D",
          "&propto;": "\u221D",
          "&prsim;": "\u227E",
          "&prurel;": "\u22B0",
          "&pscr;": "\uD835\uDCC5",
          "&psi;": "\u03C8",
          "&puncsp;": "\u2008",
          "&qfr;": "\uD835\uDD2E",
          "&qint;": "\u2A0C",
          "&qopf;": "\uD835\uDD62",
          "&qprime;": "\u2057",
          "&qscr;": "\uD835\uDCC6",
          "&quaternions;": "\u210D",
          "&quatint;": "\u2A16",
          "&quest;": "?",
          "&questeq;": "\u225F",
          "&quot": '"',
          "&quot;": '"',
          "&rAarr;": "\u21DB",
          "&rArr;": "\u21D2",
          "&rAtail;": "\u291C",
          "&rBarr;": "\u290F",
          "&rHar;": "\u2964",
          "&race;": "\u223D\u0331",
          "&racute;": "\u0155",
          "&radic;": "\u221A",
          "&raemptyv;": "\u29B3",
          "&rang;": "\u27E9",
          "&rangd;": "\u2992",
          "&range;": "\u29A5",
          "&rangle;": "\u27E9",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&rarr;": "\u2192",
          "&rarrap;": "\u2975",
          "&rarrb;": "\u21E5",
          "&rarrbfs;": "\u2920",
          "&rarrc;": "\u2933",
          "&rarrfs;": "\u291E",
          "&rarrhk;": "\u21AA",
          "&rarrlp;": "\u21AC",
          "&rarrpl;": "\u2945",
          "&rarrsim;": "\u2974",
          "&rarrtl;": "\u21A3",
          "&rarrw;": "\u219D",
          "&ratail;": "\u291A",
          "&ratio;": "\u2236",
          "&rationals;": "\u211A",
          "&rbarr;": "\u290D",
          "&rbbrk;": "\u2773",
          "&rbrace;": "}",
          "&rbrack;": "]",
          "&rbrke;": "\u298C",
          "&rbrksld;": "\u298E",
          "&rbrkslu;": "\u2990",
          "&rcaron;": "\u0159",
          "&rcedil;": "\u0157",
          "&rceil;": "\u2309",
          "&rcub;": "}",
          "&rcy;": "\u0440",
          "&rdca;": "\u2937",
          "&rdldhar;": "\u2969",
          "&rdquo;": "\u201D",
          "&rdquor;": "\u201D",
          "&rdsh;": "\u21B3",
          "&real;": "\u211C",
          "&realine;": "\u211B",
          "&realpart;": "\u211C",
          "&reals;": "\u211D",
          "&rect;": "\u25AD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&rfisht;": "\u297D",
          "&rfloor;": "\u230B",
          "&rfr;": "\uD835\uDD2F",
          "&rhard;": "\u21C1",
          "&rharu;": "\u21C0",
          "&rharul;": "\u296C",
          "&rho;": "\u03C1",
          "&rhov;": "\u03F1",
          "&rightarrow;": "\u2192",
          "&rightarrowtail;": "\u21A3",
          "&rightharpoondown;": "\u21C1",
          "&rightharpoonup;": "\u21C0",
          "&rightleftarrows;": "\u21C4",
          "&rightleftharpoons;": "\u21CC",
          "&rightrightarrows;": "\u21C9",
          "&rightsquigarrow;": "\u219D",
          "&rightthreetimes;": "\u22CC",
          "&ring;": "\u02DA",
          "&risingdotseq;": "\u2253",
          "&rlarr;": "\u21C4",
          "&rlhar;": "\u21CC",
          "&rlm;": "\u200F",
          "&rmoust;": "\u23B1",
          "&rmoustache;": "\u23B1",
          "&rnmid;": "\u2AEE",
          "&roang;": "\u27ED",
          "&roarr;": "\u21FE",
          "&robrk;": "\u27E7",
          "&ropar;": "\u2986",
          "&ropf;": "\uD835\uDD63",
          "&roplus;": "\u2A2E",
          "&rotimes;": "\u2A35",
          "&rpar;": ")",
          "&rpargt;": "\u2994",
          "&rppolint;": "\u2A12",
          "&rrarr;": "\u21C9",
          "&rsaquo;": "\u203A",
          "&rscr;": "\uD835\uDCC7",
          "&rsh;": "\u21B1",
          "&rsqb;": "]",
          "&rsquo;": "\u2019",
          "&rsquor;": "\u2019",
          "&rthree;": "\u22CC",
          "&rtimes;": "\u22CA",
          "&rtri;": "\u25B9",
          "&rtrie;": "\u22B5",
          "&rtrif;": "\u25B8",
          "&rtriltri;": "\u29CE",
          "&ruluhar;": "\u2968",
          "&rx;": "\u211E",
          "&sacute;": "\u015B",
          "&sbquo;": "\u201A",
          "&sc;": "\u227B",
          "&scE;": "\u2AB4",
          "&scap;": "\u2AB8",
          "&scaron;": "\u0161",
          "&sccue;": "\u227D",
          "&sce;": "\u2AB0",
          "&scedil;": "\u015F",
          "&scirc;": "\u015D",
          "&scnE;": "\u2AB6",
          "&scnap;": "\u2ABA",
          "&scnsim;": "\u22E9",
          "&scpolint;": "\u2A13",
          "&scsim;": "\u227F",
          "&scy;": "\u0441",
          "&sdot;": "\u22C5",
          "&sdotb;": "\u22A1",
          "&sdote;": "\u2A66",
          "&seArr;": "\u21D8",
          "&searhk;": "\u2925",
          "&searr;": "\u2198",
          "&searrow;": "\u2198",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&semi;": ";",
          "&seswar;": "\u2929",
          "&setminus;": "\u2216",
          "&setmn;": "\u2216",
          "&sext;": "\u2736",
          "&sfr;": "\uD835\uDD30",
          "&sfrown;": "\u2322",
          "&sharp;": "\u266F",
          "&shchcy;": "\u0449",
          "&shcy;": "\u0448",
          "&shortmid;": "\u2223",
          "&shortparallel;": "\u2225",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&sigma;": "\u03C3",
          "&sigmaf;": "\u03C2",
          "&sigmav;": "\u03C2",
          "&sim;": "\u223C",
          "&simdot;": "\u2A6A",
          "&sime;": "\u2243",
          "&simeq;": "\u2243",
          "&simg;": "\u2A9E",
          "&simgE;": "\u2AA0",
          "&siml;": "\u2A9D",
          "&simlE;": "\u2A9F",
          "&simne;": "\u2246",
          "&simplus;": "\u2A24",
          "&simrarr;": "\u2972",
          "&slarr;": "\u2190",
          "&smallsetminus;": "\u2216",
          "&smashp;": "\u2A33",
          "&smeparsl;": "\u29E4",
          "&smid;": "\u2223",
          "&smile;": "\u2323",
          "&smt;": "\u2AAA",
          "&smte;": "\u2AAC",
          "&smtes;": "\u2AAC\uFE00",
          "&softcy;": "\u044C",
          "&sol;": "/",
          "&solb;": "\u29C4",
          "&solbar;": "\u233F",
          "&sopf;": "\uD835\uDD64",
          "&spades;": "\u2660",
          "&spadesuit;": "\u2660",
          "&spar;": "\u2225",
          "&sqcap;": "\u2293",
          "&sqcaps;": "\u2293\uFE00",
          "&sqcup;": "\u2294",
          "&sqcups;": "\u2294\uFE00",
          "&sqsub;": "\u228F",
          "&sqsube;": "\u2291",
          "&sqsubset;": "\u228F",
          "&sqsubseteq;": "\u2291",
          "&sqsup;": "\u2290",
          "&sqsupe;": "\u2292",
          "&sqsupset;": "\u2290",
          "&sqsupseteq;": "\u2292",
          "&squ;": "\u25A1",
          "&square;": "\u25A1",
          "&squarf;": "\u25AA",
          "&squf;": "\u25AA",
          "&srarr;": "\u2192",
          "&sscr;": "\uD835\uDCC8",
          "&ssetmn;": "\u2216",
          "&ssmile;": "\u2323",
          "&sstarf;": "\u22C6",
          "&star;": "\u2606",
          "&starf;": "\u2605",
          "&straightepsilon;": "\u03F5",
          "&straightphi;": "\u03D5",
          "&strns;": "\xAF",
          "&sub;": "\u2282",
          "&subE;": "\u2AC5",
          "&subdot;": "\u2ABD",
          "&sube;": "\u2286",
          "&subedot;": "\u2AC3",
          "&submult;": "\u2AC1",
          "&subnE;": "\u2ACB",
          "&subne;": "\u228A",
          "&subplus;": "\u2ABF",
          "&subrarr;": "\u2979",
          "&subset;": "\u2282",
          "&subseteq;": "\u2286",
          "&subseteqq;": "\u2AC5",
          "&subsetneq;": "\u228A",
          "&subsetneqq;": "\u2ACB",
          "&subsim;": "\u2AC7",
          "&subsub;": "\u2AD5",
          "&subsup;": "\u2AD3",
          "&succ;": "\u227B",
          "&succapprox;": "\u2AB8",
          "&succcurlyeq;": "\u227D",
          "&succeq;": "\u2AB0",
          "&succnapprox;": "\u2ABA",
          "&succneqq;": "\u2AB6",
          "&succnsim;": "\u22E9",
          "&succsim;": "\u227F",
          "&sum;": "\u2211",
          "&sung;": "\u266A",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&sup;": "\u2283",
          "&supE;": "\u2AC6",
          "&supdot;": "\u2ABE",
          "&supdsub;": "\u2AD8",
          "&supe;": "\u2287",
          "&supedot;": "\u2AC4",
          "&suphsol;": "\u27C9",
          "&suphsub;": "\u2AD7",
          "&suplarr;": "\u297B",
          "&supmult;": "\u2AC2",
          "&supnE;": "\u2ACC",
          "&supne;": "\u228B",
          "&supplus;": "\u2AC0",
          "&supset;": "\u2283",
          "&supseteq;": "\u2287",
          "&supseteqq;": "\u2AC6",
          "&supsetneq;": "\u228B",
          "&supsetneqq;": "\u2ACC",
          "&supsim;": "\u2AC8",
          "&supsub;": "\u2AD4",
          "&supsup;": "\u2AD6",
          "&swArr;": "\u21D9",
          "&swarhk;": "\u2926",
          "&swarr;": "\u2199",
          "&swarrow;": "\u2199",
          "&swnwar;": "\u292A",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&target;": "\u2316",
          "&tau;": "\u03C4",
          "&tbrk;": "\u23B4",
          "&tcaron;": "\u0165",
          "&tcedil;": "\u0163",
          "&tcy;": "\u0442",
          "&tdot;": "\u20DB",
          "&telrec;": "\u2315",
          "&tfr;": "\uD835\uDD31",
          "&there4;": "\u2234",
          "&therefore;": "\u2234",
          "&theta;": "\u03B8",
          "&thetasym;": "\u03D1",
          "&thetav;": "\u03D1",
          "&thickapprox;": "\u2248",
          "&thicksim;": "\u223C",
          "&thinsp;": "\u2009",
          "&thkap;": "\u2248",
          "&thksim;": "\u223C",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&tilde;": "\u02DC",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&timesb;": "\u22A0",
          "&timesbar;": "\u2A31",
          "&timesd;": "\u2A30",
          "&tint;": "\u222D",
          "&toea;": "\u2928",
          "&top;": "\u22A4",
          "&topbot;": "\u2336",
          "&topcir;": "\u2AF1",
          "&topf;": "\uD835\uDD65",
          "&topfork;": "\u2ADA",
          "&tosa;": "\u2929",
          "&tprime;": "\u2034",
          "&trade;": "\u2122",
          "&triangle;": "\u25B5",
          "&triangledown;": "\u25BF",
          "&triangleleft;": "\u25C3",
          "&trianglelefteq;": "\u22B4",
          "&triangleq;": "\u225C",
          "&triangleright;": "\u25B9",
          "&trianglerighteq;": "\u22B5",
          "&tridot;": "\u25EC",
          "&trie;": "\u225C",
          "&triminus;": "\u2A3A",
          "&triplus;": "\u2A39",
          "&trisb;": "\u29CD",
          "&tritime;": "\u2A3B",
          "&trpezium;": "\u23E2",
          "&tscr;": "\uD835\uDCC9",
          "&tscy;": "\u0446",
          "&tshcy;": "\u045B",
          "&tstrok;": "\u0167",
          "&twixt;": "\u226C",
          "&twoheadleftarrow;": "\u219E",
          "&twoheadrightarrow;": "\u21A0",
          "&uArr;": "\u21D1",
          "&uHar;": "\u2963",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&uarr;": "\u2191",
          "&ubrcy;": "\u045E",
          "&ubreve;": "\u016D",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&ucy;": "\u0443",
          "&udarr;": "\u21C5",
          "&udblac;": "\u0171",
          "&udhar;": "\u296E",
          "&ufisht;": "\u297E",
          "&ufr;": "\uD835\uDD32",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uharl;": "\u21BF",
          "&uharr;": "\u21BE",
          "&uhblk;": "\u2580",
          "&ulcorn;": "\u231C",
          "&ulcorner;": "\u231C",
          "&ulcrop;": "\u230F",
          "&ultri;": "\u25F8",
          "&umacr;": "\u016B",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&uogon;": "\u0173",
          "&uopf;": "\uD835\uDD66",
          "&uparrow;": "\u2191",
          "&updownarrow;": "\u2195",
          "&upharpoonleft;": "\u21BF",
          "&upharpoonright;": "\u21BE",
          "&uplus;": "\u228E",
          "&upsi;": "\u03C5",
          "&upsih;": "\u03D2",
          "&upsilon;": "\u03C5",
          "&upuparrows;": "\u21C8",
          "&urcorn;": "\u231D",
          "&urcorner;": "\u231D",
          "&urcrop;": "\u230E",
          "&uring;": "\u016F",
          "&urtri;": "\u25F9",
          "&uscr;": "\uD835\uDCCA",
          "&utdot;": "\u22F0",
          "&utilde;": "\u0169",
          "&utri;": "\u25B5",
          "&utrif;": "\u25B4",
          "&uuarr;": "\u21C8",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&uwangle;": "\u29A7",
          "&vArr;": "\u21D5",
          "&vBar;": "\u2AE8",
          "&vBarv;": "\u2AE9",
          "&vDash;": "\u22A8",
          "&vangrt;": "\u299C",
          "&varepsilon;": "\u03F5",
          "&varkappa;": "\u03F0",
          "&varnothing;": "\u2205",
          "&varphi;": "\u03D5",
          "&varpi;": "\u03D6",
          "&varpropto;": "\u221D",
          "&varr;": "\u2195",
          "&varrho;": "\u03F1",
          "&varsigma;": "\u03C2",
          "&varsubsetneq;": "\u228A\uFE00",
          "&varsubsetneqq;": "\u2ACB\uFE00",
          "&varsupsetneq;": "\u228B\uFE00",
          "&varsupsetneqq;": "\u2ACC\uFE00",
          "&vartheta;": "\u03D1",
          "&vartriangleleft;": "\u22B2",
          "&vartriangleright;": "\u22B3",
          "&vcy;": "\u0432",
          "&vdash;": "\u22A2",
          "&vee;": "\u2228",
          "&veebar;": "\u22BB",
          "&veeeq;": "\u225A",
          "&vellip;": "\u22EE",
          "&verbar;": "|",
          "&vert;": "|",
          "&vfr;": "\uD835\uDD33",
          "&vltri;": "\u22B2",
          "&vnsub;": "\u2282\u20D2",
          "&vnsup;": "\u2283\u20D2",
          "&vopf;": "\uD835\uDD67",
          "&vprop;": "\u221D",
          "&vrtri;": "\u22B3",
          "&vscr;": "\uD835\uDCCB",
          "&vsubnE;": "\u2ACB\uFE00",
          "&vsubne;": "\u228A\uFE00",
          "&vsupnE;": "\u2ACC\uFE00",
          "&vsupne;": "\u228B\uFE00",
          "&vzigzag;": "\u299A",
          "&wcirc;": "\u0175",
          "&wedbar;": "\u2A5F",
          "&wedge;": "\u2227",
          "&wedgeq;": "\u2259",
          "&weierp;": "\u2118",
          "&wfr;": "\uD835\uDD34",
          "&wopf;": "\uD835\uDD68",
          "&wp;": "\u2118",
          "&wr;": "\u2240",
          "&wreath;": "\u2240",
          "&wscr;": "\uD835\uDCCC",
          "&xcap;": "\u22C2",
          "&xcirc;": "\u25EF",
          "&xcup;": "\u22C3",
          "&xdtri;": "\u25BD",
          "&xfr;": "\uD835\uDD35",
          "&xhArr;": "\u27FA",
          "&xharr;": "\u27F7",
          "&xi;": "\u03BE",
          "&xlArr;": "\u27F8",
          "&xlarr;": "\u27F5",
          "&xmap;": "\u27FC",
          "&xnis;": "\u22FB",
          "&xodot;": "\u2A00",
          "&xopf;": "\uD835\uDD69",
          "&xoplus;": "\u2A01",
          "&xotime;": "\u2A02",
          "&xrArr;": "\u27F9",
          "&xrarr;": "\u27F6",
          "&xscr;": "\uD835\uDCCD",
          "&xsqcup;": "\u2A06",
          "&xuplus;": "\u2A04",
          "&xutri;": "\u25B3",
          "&xvee;": "\u22C1",
          "&xwedge;": "\u22C0",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&yacy;": "\u044F",
          "&ycirc;": "\u0177",
          "&ycy;": "\u044B",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&yfr;": "\uD835\uDD36",
          "&yicy;": "\u0457",
          "&yopf;": "\uD835\uDD6A",
          "&yscr;": "\uD835\uDCCE",
          "&yucy;": "\u044E",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&zacute;": "\u017A",
          "&zcaron;": "\u017E",
          "&zcy;": "\u0437",
          "&zdot;": "\u017C",
          "&zeetrf;": "\u2128",
          "&zeta;": "\u03B6",
          "&zfr;": "\uD835\uDD37",
          "&zhcy;": "\u0436",
          "&zigrarr;": "\u21DD",
          "&zopf;": "\uD835\uDD6B",
          "&zscr;": "\uD835\uDCCF",
          "&zwj;": "\u200D",
          "&zwnj;": "\u200C"
        },
        characters: {
          "\xC6": "&AElig;",
          "&": "&amp;",
          "\xC1": "&Aacute;",
          "\u0102": "&Abreve;",
          "\xC2": "&Acirc;",
          "\u0410": "&Acy;",
          "\uD835\uDD04": "&Afr;",
          "\xC0": "&Agrave;",
          "\u0391": "&Alpha;",
          "\u0100": "&Amacr;",
          "\u2A53": "&And;",
          "\u0104": "&Aogon;",
          "\uD835\uDD38": "&Aopf;",
          "\u2061": "&af;",
          "\xC5": "&angst;",
          "\uD835\uDC9C": "&Ascr;",
          "\u2254": "&coloneq;",
          "\xC3": "&Atilde;",
          "\xC4": "&Auml;",
          "\u2216": "&ssetmn;",
          "\u2AE7": "&Barv;",
          "\u2306": "&doublebarwedge;",
          "\u0411": "&Bcy;",
          "\u2235": "&because;",
          "\u212C": "&bernou;",
          "\u0392": "&Beta;",
          "\uD835\uDD05": "&Bfr;",
          "\uD835\uDD39": "&Bopf;",
          "\u02D8": "&breve;",
          "\u224E": "&bump;",
          "\u0427": "&CHcy;",
          "\xA9": "&copy;",
          "\u0106": "&Cacute;",
          "\u22D2": "&Cap;",
          "\u2145": "&DD;",
          "\u212D": "&Cfr;",
          "\u010C": "&Ccaron;",
          "\xC7": "&Ccedil;",
          "\u0108": "&Ccirc;",
          "\u2230": "&Cconint;",
          "\u010A": "&Cdot;",
          "\xB8": "&cedil;",
          "\xB7": "&middot;",
          "\u03A7": "&Chi;",
          "\u2299": "&odot;",
          "\u2296": "&ominus;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u2232": "&cwconint;",
          "\u201D": "&rdquor;",
          "\u2019": "&rsquor;",
          "\u2237": "&Proportion;",
          "\u2A74": "&Colone;",
          "\u2261": "&equiv;",
          "\u222F": "&DoubleContourIntegral;",
          "\u222E": "&oint;",
          "\u2102": "&complexes;",
          "\u2210": "&coprod;",
          "\u2233": "&awconint;",
          "\u2A2F": "&Cross;",
          "\uD835\uDC9E": "&Cscr;",
          "\u22D3": "&Cup;",
          "\u224D": "&asympeq;",
          "\u2911": "&DDotrahd;",
          "\u0402": "&DJcy;",
          "\u0405": "&DScy;",
          "\u040F": "&DZcy;",
          "\u2021": "&ddagger;",
          "\u21A1": "&Darr;",
          "\u2AE4": "&DoubleLeftTee;",
          "\u010E": "&Dcaron;",
          "\u0414": "&Dcy;",
          "\u2207": "&nabla;",
          "\u0394": "&Delta;",
          "\uD835\uDD07": "&Dfr;",
          "\xB4": "&acute;",
          "\u02D9": "&dot;",
          "\u02DD": "&dblac;",
          "`": "&grave;",
          "\u02DC": "&tilde;",
          "\u22C4": "&diamond;",
          "\u2146": "&dd;",
          "\uD835\uDD3B": "&Dopf;",
          "\xA8": "&uml;",
          "\u20DC": "&DotDot;",
          "\u2250": "&esdot;",
          "\u21D3": "&dArr;",
          "\u21D0": "&lArr;",
          "\u21D4": "&iff;",
          "\u27F8": "&xlArr;",
          "\u27FA": "&xhArr;",
          "\u27F9": "&xrArr;",
          "\u21D2": "&rArr;",
          "\u22A8": "&vDash;",
          "\u21D1": "&uArr;",
          "\u21D5": "&vArr;",
          "\u2225": "&spar;",
          "\u2193": "&downarrow;",
          "\u2913": "&DownArrowBar;",
          "\u21F5": "&duarr;",
          "\u0311": "&DownBreve;",
          "\u2950": "&DownLeftRightVector;",
          "\u295E": "&DownLeftTeeVector;",
          "\u21BD": "&lhard;",
          "\u2956": "&DownLeftVectorBar;",
          "\u295F": "&DownRightTeeVector;",
          "\u21C1": "&rightharpoondown;",
          "\u2957": "&DownRightVectorBar;",
          "\u22A4": "&top;",
          "\u21A7": "&mapstodown;",
          "\uD835\uDC9F": "&Dscr;",
          "\u0110": "&Dstrok;",
          "\u014A": "&ENG;",
          "\xD0": "&ETH;",
          "\xC9": "&Eacute;",
          "\u011A": "&Ecaron;",
          "\xCA": "&Ecirc;",
          "\u042D": "&Ecy;",
          "\u0116": "&Edot;",
          "\uD835\uDD08": "&Efr;",
          "\xC8": "&Egrave;",
          "\u2208": "&isinv;",
          "\u0112": "&Emacr;",
          "\u25FB": "&EmptySmallSquare;",
          "\u25AB": "&EmptyVerySmallSquare;",
          "\u0118": "&Eogon;",
          "\uD835\uDD3C": "&Eopf;",
          "\u0395": "&Epsilon;",
          "\u2A75": "&Equal;",
          "\u2242": "&esim;",
          "\u21CC": "&rlhar;",
          "\u2130": "&expectation;",
          "\u2A73": "&Esim;",
          "\u0397": "&Eta;",
          "\xCB": "&Euml;",
          "\u2203": "&exist;",
          "\u2147": "&exponentiale;",
          "\u0424": "&Fcy;",
          "\uD835\uDD09": "&Ffr;",
          "\u25FC": "&FilledSmallSquare;",
          "\u25AA": "&squf;",
          "\uD835\uDD3D": "&Fopf;",
          "\u2200": "&forall;",
          "\u2131": "&Fscr;",
          "\u0403": "&GJcy;",
          ">": "&gt;",
          "\u0393": "&Gamma;",
          "\u03DC": "&Gammad;",
          "\u011E": "&Gbreve;",
          "\u0122": "&Gcedil;",
          "\u011C": "&Gcirc;",
          "\u0413": "&Gcy;",
          "\u0120": "&Gdot;",
          "\uD835\uDD0A": "&Gfr;",
          "\u22D9": "&ggg;",
          "\uD835\uDD3E": "&Gopf;",
          "\u2265": "&geq;",
          "\u22DB": "&gtreqless;",
          "\u2267": "&geqq;",
          "\u2AA2": "&GreaterGreater;",
          "\u2277": "&gtrless;",
          "\u2A7E": "&ges;",
          "\u2273": "&gtrsim;",
          "\uD835\uDCA2": "&Gscr;",
          "\u226B": "&gg;",
          "\u042A": "&HARDcy;",
          "\u02C7": "&caron;",
          "^": "&Hat;",
          "\u0124": "&Hcirc;",
          "\u210C": "&Poincareplane;",
          "\u210B": "&hamilt;",
          "\u210D": "&quaternions;",
          "\u2500": "&boxh;",
          "\u0126": "&Hstrok;",
          "\u224F": "&bumpeq;",
          "\u0415": "&IEcy;",
          "\u0132": "&IJlig;",
          "\u0401": "&IOcy;",
          "\xCD": "&Iacute;",
          "\xCE": "&Icirc;",
          "\u0418": "&Icy;",
          "\u0130": "&Idot;",
          "\u2111": "&imagpart;",
          "\xCC": "&Igrave;",
          "\u012A": "&Imacr;",
          "\u2148": "&ii;",
          "\u222C": "&Int;",
          "\u222B": "&int;",
          "\u22C2": "&xcap;",
          "\u2063": "&ic;",
          "\u2062": "&it;",
          "\u012E": "&Iogon;",
          "\uD835\uDD40": "&Iopf;",
          "\u0399": "&Iota;",
          "\u2110": "&imagline;",
          "\u0128": "&Itilde;",
          "\u0406": "&Iukcy;",
          "\xCF": "&Iuml;",
          "\u0134": "&Jcirc;",
          "\u0419": "&Jcy;",
          "\uD835\uDD0D": "&Jfr;",
          "\uD835\uDD41": "&Jopf;",
          "\uD835\uDCA5": "&Jscr;",
          "\u0408": "&Jsercy;",
          "\u0404": "&Jukcy;",
          "\u0425": "&KHcy;",
          "\u040C": "&KJcy;",
          "\u039A": "&Kappa;",
          "\u0136": "&Kcedil;",
          "\u041A": "&Kcy;",
          "\uD835\uDD0E": "&Kfr;",
          "\uD835\uDD42": "&Kopf;",
          "\uD835\uDCA6": "&Kscr;",
          "\u0409": "&LJcy;",
          "<": "&lt;",
          "\u0139": "&Lacute;",
          "\u039B": "&Lambda;",
          "\u27EA": "&Lang;",
          "\u2112": "&lagran;",
          "\u219E": "&twoheadleftarrow;",
          "\u013D": "&Lcaron;",
          "\u013B": "&Lcedil;",
          "\u041B": "&Lcy;",
          "\u27E8": "&langle;",
          "\u2190": "&slarr;",
          "\u21E4": "&larrb;",
          "\u21C6": "&lrarr;",
          "\u2308": "&lceil;",
          "\u27E6": "&lobrk;",
          "\u2961": "&LeftDownTeeVector;",
          "\u21C3": "&downharpoonleft;",
          "\u2959": "&LeftDownVectorBar;",
          "\u230A": "&lfloor;",
          "\u2194": "&leftrightarrow;",
          "\u294E": "&LeftRightVector;",
          "\u22A3": "&dashv;",
          "\u21A4": "&mapstoleft;",
          "\u295A": "&LeftTeeVector;",
          "\u22B2": "&vltri;",
          "\u29CF": "&LeftTriangleBar;",
          "\u22B4": "&trianglelefteq;",
          "\u2951": "&LeftUpDownVector;",
          "\u2960": "&LeftUpTeeVector;",
          "\u21BF": "&upharpoonleft;",
          "\u2958": "&LeftUpVectorBar;",
          "\u21BC": "&lharu;",
          "\u2952": "&LeftVectorBar;",
          "\u22DA": "&lesseqgtr;",
          "\u2266": "&leqq;",
          "\u2276": "&lg;",
          "\u2AA1": "&LessLess;",
          "\u2A7D": "&les;",
          "\u2272": "&lsim;",
          "\uD835\uDD0F": "&Lfr;",
          "\u22D8": "&Ll;",
          "\u21DA": "&lAarr;",
          "\u013F": "&Lmidot;",
          "\u27F5": "&xlarr;",
          "\u27F7": "&xharr;",
          "\u27F6": "&xrarr;",
          "\uD835\uDD43": "&Lopf;",
          "\u2199": "&swarrow;",
          "\u2198": "&searrow;",
          "\u21B0": "&lsh;",
          "\u0141": "&Lstrok;",
          "\u226A": "&ll;",
          "\u2905": "&Map;",
          "\u041C": "&Mcy;",
          "\u205F": "&MediumSpace;",
          "\u2133": "&phmmat;",
          "\uD835\uDD10": "&Mfr;",
          "\u2213": "&mp;",
          "\uD835\uDD44": "&Mopf;",
          "\u039C": "&Mu;",
          "\u040A": "&NJcy;",
          "\u0143": "&Nacute;",
          "\u0147": "&Ncaron;",
          "\u0145": "&Ncedil;",
          "\u041D": "&Ncy;",
          "\u200B": "&ZeroWidthSpace;",
          "\n": "&NewLine;",
          "\uD835\uDD11": "&Nfr;",
          "\u2060": "&NoBreak;",
          "\xA0": "&nbsp;",
          "\u2115": "&naturals;",
          "\u2AEC": "&Not;",
          "\u2262": "&nequiv;",
          "\u226D": "&NotCupCap;",
          "\u2226": "&nspar;",
          "\u2209": "&notinva;",
          "\u2260": "&ne;",
          "\u2242\u0338": "&nesim;",
          "\u2204": "&nexists;",
          "\u226F": "&ngtr;",
          "\u2271": "&ngeq;",
          "\u2267\u0338": "&ngeqq;",
          "\u226B\u0338": "&nGtv;",
          "\u2279": "&ntgl;",
          "\u2A7E\u0338": "&nges;",
          "\u2275": "&ngsim;",
          "\u224E\u0338": "&nbump;",
          "\u224F\u0338": "&nbumpe;",
          "\u22EA": "&ntriangleleft;",
          "\u29CF\u0338": "&NotLeftTriangleBar;",
          "\u22EC": "&ntrianglelefteq;",
          "\u226E": "&nlt;",
          "\u2270": "&nleq;",
          "\u2278": "&ntlg;",
          "\u226A\u0338": "&nLtv;",
          "\u2A7D\u0338": "&nles;",
          "\u2274": "&nlsim;",
          "\u2AA2\u0338": "&NotNestedGreaterGreater;",
          "\u2AA1\u0338": "&NotNestedLessLess;",
          "\u2280": "&nprec;",
          "\u2AAF\u0338": "&npreceq;",
          "\u22E0": "&nprcue;",
          "\u220C": "&notniva;",
          "\u22EB": "&ntriangleright;",
          "\u29D0\u0338": "&NotRightTriangleBar;",
          "\u22ED": "&ntrianglerighteq;",
          "\u228F\u0338": "&NotSquareSubset;",
          "\u22E2": "&nsqsube;",
          "\u2290\u0338": "&NotSquareSuperset;",
          "\u22E3": "&nsqsupe;",
          "\u2282\u20D2": "&vnsub;",
          "\u2288": "&nsubseteq;",
          "\u2281": "&nsucc;",
          "\u2AB0\u0338": "&nsucceq;",
          "\u22E1": "&nsccue;",
          "\u227F\u0338": "&NotSucceedsTilde;",
          "\u2283\u20D2": "&vnsup;",
          "\u2289": "&nsupseteq;",
          "\u2241": "&nsim;",
          "\u2244": "&nsimeq;",
          "\u2247": "&ncong;",
          "\u2249": "&napprox;",
          "\u2224": "&nsmid;",
          "\uD835\uDCA9": "&Nscr;",
          "\xD1": "&Ntilde;",
          "\u039D": "&Nu;",
          "\u0152": "&OElig;",
          "\xD3": "&Oacute;",
          "\xD4": "&Ocirc;",
          "\u041E": "&Ocy;",
          "\u0150": "&Odblac;",
          "\uD835\uDD12": "&Ofr;",
          "\xD2": "&Ograve;",
          "\u014C": "&Omacr;",
          "\u03A9": "&ohm;",
          "\u039F": "&Omicron;",
          "\uD835\uDD46": "&Oopf;",
          "\u201C": "&ldquo;",
          "\u2018": "&lsquo;",
          "\u2A54": "&Or;",
          "\uD835\uDCAA": "&Oscr;",
          "\xD8": "&Oslash;",
          "\xD5": "&Otilde;",
          "\u2A37": "&Otimes;",
          "\xD6": "&Ouml;",
          "\u203E": "&oline;",
          "\u23DE": "&OverBrace;",
          "\u23B4": "&tbrk;",
          "\u23DC": "&OverParenthesis;",
          "\u2202": "&part;",
          "\u041F": "&Pcy;",
          "\uD835\uDD13": "&Pfr;",
          "\u03A6": "&Phi;",
          "\u03A0": "&Pi;",
          "\xB1": "&pm;",
          "\u2119": "&primes;",
          "\u2ABB": "&Pr;",
          "\u227A": "&prec;",
          "\u2AAF": "&preceq;",
          "\u227C": "&preccurlyeq;",
          "\u227E": "&prsim;",
          "\u2033": "&Prime;",
          "\u220F": "&prod;",
          "\u221D": "&vprop;",
          "\uD835\uDCAB": "&Pscr;",
          "\u03A8": "&Psi;",
          '"': "&quot;",
          "\uD835\uDD14": "&Qfr;",
          "\u211A": "&rationals;",
          "\uD835\uDCAC": "&Qscr;",
          "\u2910": "&drbkarow;",
          "\xAE": "&reg;",
          "\u0154": "&Racute;",
          "\u27EB": "&Rang;",
          "\u21A0": "&twoheadrightarrow;",
          "\u2916": "&Rarrtl;",
          "\u0158": "&Rcaron;",
          "\u0156": "&Rcedil;",
          "\u0420": "&Rcy;",
          "\u211C": "&realpart;",
          "\u220B": "&niv;",
          "\u21CB": "&lrhar;",
          "\u296F": "&duhar;",
          "\u03A1": "&Rho;",
          "\u27E9": "&rangle;",
          "\u2192": "&srarr;",
          "\u21E5": "&rarrb;",
          "\u21C4": "&rlarr;",
          "\u2309": "&rceil;",
          "\u27E7": "&robrk;",
          "\u295D": "&RightDownTeeVector;",
          "\u21C2": "&downharpoonright;",
          "\u2955": "&RightDownVectorBar;",
          "\u230B": "&rfloor;",
          "\u22A2": "&vdash;",
          "\u21A6": "&mapsto;",
          "\u295B": "&RightTeeVector;",
          "\u22B3": "&vrtri;",
          "\u29D0": "&RightTriangleBar;",
          "\u22B5": "&trianglerighteq;",
          "\u294F": "&RightUpDownVector;",
          "\u295C": "&RightUpTeeVector;",
          "\u21BE": "&upharpoonright;",
          "\u2954": "&RightUpVectorBar;",
          "\u21C0": "&rightharpoonup;",
          "\u2953": "&RightVectorBar;",
          "\u211D": "&reals;",
          "\u2970": "&RoundImplies;",
          "\u21DB": "&rAarr;",
          "\u211B": "&realine;",
          "\u21B1": "&rsh;",
          "\u29F4": "&RuleDelayed;",
          "\u0429": "&SHCHcy;",
          "\u0428": "&SHcy;",
          "\u042C": "&SOFTcy;",
          "\u015A": "&Sacute;",
          "\u2ABC": "&Sc;",
          "\u0160": "&Scaron;",
          "\u015E": "&Scedil;",
          "\u015C": "&Scirc;",
          "\u0421": "&Scy;",
          "\uD835\uDD16": "&Sfr;",
          "\u2191": "&uparrow;",
          "\u03A3": "&Sigma;",
          "\u2218": "&compfn;",
          "\uD835\uDD4A": "&Sopf;",
          "\u221A": "&radic;",
          "\u25A1": "&square;",
          "\u2293": "&sqcap;",
          "\u228F": "&sqsubset;",
          "\u2291": "&sqsubseteq;",
          "\u2290": "&sqsupset;",
          "\u2292": "&sqsupseteq;",
          "\u2294": "&sqcup;",
          "\uD835\uDCAE": "&Sscr;",
          "\u22C6": "&sstarf;",
          "\u22D0": "&Subset;",
          "\u2286": "&subseteq;",
          "\u227B": "&succ;",
          "\u2AB0": "&succeq;",
          "\u227D": "&succcurlyeq;",
          "\u227F": "&succsim;",
          "\u2211": "&sum;",
          "\u22D1": "&Supset;",
          "\u2283": "&supset;",
          "\u2287": "&supseteq;",
          "\xDE": "&THORN;",
          "\u2122": "&trade;",
          "\u040B": "&TSHcy;",
          "\u0426": "&TScy;",
          "	": "&Tab;",
          "\u03A4": "&Tau;",
          "\u0164": "&Tcaron;",
          "\u0162": "&Tcedil;",
          "\u0422": "&Tcy;",
          "\uD835\uDD17": "&Tfr;",
          "\u2234": "&therefore;",
          "\u0398": "&Theta;",
          "\u205F\u200A": "&ThickSpace;",
          "\u2009": "&thinsp;",
          "\u223C": "&thksim;",
          "\u2243": "&simeq;",
          "\u2245": "&cong;",
          "\u2248": "&thkap;",
          "\uD835\uDD4B": "&Topf;",
          "\u20DB": "&tdot;",
          "\uD835\uDCAF": "&Tscr;",
          "\u0166": "&Tstrok;",
          "\xDA": "&Uacute;",
          "\u219F": "&Uarr;",
          "\u2949": "&Uarrocir;",
          "\u040E": "&Ubrcy;",
          "\u016C": "&Ubreve;",
          "\xDB": "&Ucirc;",
          "\u0423": "&Ucy;",
          "\u0170": "&Udblac;",
          "\uD835\uDD18": "&Ufr;",
          "\xD9": "&Ugrave;",
          "\u016A": "&Umacr;",
          _: "&lowbar;",
          "\u23DF": "&UnderBrace;",
          "\u23B5": "&bbrk;",
          "\u23DD": "&UnderParenthesis;",
          "\u22C3": "&xcup;",
          "\u228E": "&uplus;",
          "\u0172": "&Uogon;",
          "\uD835\uDD4C": "&Uopf;",
          "\u2912": "&UpArrowBar;",
          "\u21C5": "&udarr;",
          "\u2195": "&varr;",
          "\u296E": "&udhar;",
          "\u22A5": "&perp;",
          "\u21A5": "&mapstoup;",
          "\u2196": "&nwarrow;",
          "\u2197": "&nearrow;",
          "\u03D2": "&upsih;",
          "\u03A5": "&Upsilon;",
          "\u016E": "&Uring;",
          "\uD835\uDCB0": "&Uscr;",
          "\u0168": "&Utilde;",
          "\xDC": "&Uuml;",
          "\u22AB": "&VDash;",
          "\u2AEB": "&Vbar;",
          "\u0412": "&Vcy;",
          "\u22A9": "&Vdash;",
          "\u2AE6": "&Vdashl;",
          "\u22C1": "&xvee;",
          "\u2016": "&Vert;",
          "\u2223": "&smid;",
          "|": "&vert;",
          "\u2758": "&VerticalSeparator;",
          "\u2240": "&wreath;",
          "\u200A": "&hairsp;",
          "\uD835\uDD19": "&Vfr;",
          "\uD835\uDD4D": "&Vopf;",
          "\uD835\uDCB1": "&Vscr;",
          "\u22AA": "&Vvdash;",
          "\u0174": "&Wcirc;",
          "\u22C0": "&xwedge;",
          "\uD835\uDD1A": "&Wfr;",
          "\uD835\uDD4E": "&Wopf;",
          "\uD835\uDCB2": "&Wscr;",
          "\uD835\uDD1B": "&Xfr;",
          "\u039E": "&Xi;",
          "\uD835\uDD4F": "&Xopf;",
          "\uD835\uDCB3": "&Xscr;",
          "\u042F": "&YAcy;",
          "\u0407": "&YIcy;",
          "\u042E": "&YUcy;",
          "\xDD": "&Yacute;",
          "\u0176": "&Ycirc;",
          "\u042B": "&Ycy;",
          "\uD835\uDD1C": "&Yfr;",
          "\uD835\uDD50": "&Yopf;",
          "\uD835\uDCB4": "&Yscr;",
          "\u0178": "&Yuml;",
          "\u0416": "&ZHcy;",
          "\u0179": "&Zacute;",
          "\u017D": "&Zcaron;",
          "\u0417": "&Zcy;",
          "\u017B": "&Zdot;",
          "\u0396": "&Zeta;",
          "\u2128": "&zeetrf;",
          "\u2124": "&integers;",
          "\uD835\uDCB5": "&Zscr;",
          "\xE1": "&aacute;",
          "\u0103": "&abreve;",
          "\u223E": "&mstpos;",
          "\u223E\u0333": "&acE;",
          "\u223F": "&acd;",
          "\xE2": "&acirc;",
          "\u0430": "&acy;",
          "\xE6": "&aelig;",
          "\uD835\uDD1E": "&afr;",
          "\xE0": "&agrave;",
          "\u2135": "&aleph;",
          "\u03B1": "&alpha;",
          "\u0101": "&amacr;",
          "\u2A3F": "&amalg;",
          "\u2227": "&wedge;",
          "\u2A55": "&andand;",
          "\u2A5C": "&andd;",
          "\u2A58": "&andslope;",
          "\u2A5A": "&andv;",
          "\u2220": "&angle;",
          "\u29A4": "&ange;",
          "\u2221": "&measuredangle;",
          "\u29A8": "&angmsdaa;",
          "\u29A9": "&angmsdab;",
          "\u29AA": "&angmsdac;",
          "\u29AB": "&angmsdad;",
          "\u29AC": "&angmsdae;",
          "\u29AD": "&angmsdaf;",
          "\u29AE": "&angmsdag;",
          "\u29AF": "&angmsdah;",
          "\u221F": "&angrt;",
          "\u22BE": "&angrtvb;",
          "\u299D": "&angrtvbd;",
          "\u2222": "&angsph;",
          "\u237C": "&angzarr;",
          "\u0105": "&aogon;",
          "\uD835\uDD52": "&aopf;",
          "\u2A70": "&apE;",
          "\u2A6F": "&apacir;",
          "\u224A": "&approxeq;",
          "\u224B": "&apid;",
          "'": "&apos;",
          "\xE5": "&aring;",
          "\uD835\uDCB6": "&ascr;",
          "*": "&midast;",
          "\xE3": "&atilde;",
          "\xE4": "&auml;",
          "\u2A11": "&awint;",
          "\u2AED": "&bNot;",
          "\u224C": "&bcong;",
          "\u03F6": "&bepsi;",
          "\u2035": "&bprime;",
          "\u223D": "&bsim;",
          "\u22CD": "&bsime;",
          "\u22BD": "&barvee;",
          "\u2305": "&barwedge;",
          "\u23B6": "&bbrktbrk;",
          "\u0431": "&bcy;",
          "\u201E": "&ldquor;",
          "\u29B0": "&bemptyv;",
          "\u03B2": "&beta;",
          "\u2136": "&beth;",
          "\u226C": "&twixt;",
          "\uD835\uDD1F": "&bfr;",
          "\u25EF": "&xcirc;",
          "\u2A00": "&xodot;",
          "\u2A01": "&xoplus;",
          "\u2A02": "&xotime;",
          "\u2A06": "&xsqcup;",
          "\u2605": "&starf;",
          "\u25BD": "&xdtri;",
          "\u25B3": "&xutri;",
          "\u2A04": "&xuplus;",
          "\u290D": "&rbarr;",
          "\u29EB": "&lozf;",
          "\u25B4": "&utrif;",
          "\u25BE": "&dtrif;",
          "\u25C2": "&ltrif;",
          "\u25B8": "&rtrif;",
          "\u2423": "&blank;",
          "\u2592": "&blk12;",
          "\u2591": "&blk14;",
          "\u2593": "&blk34;",
          "\u2588": "&block;",
          "=\u20E5": "&bne;",
          "\u2261\u20E5": "&bnequiv;",
          "\u2310": "&bnot;",
          "\uD835\uDD53": "&bopf;",
          "\u22C8": "&bowtie;",
          "\u2557": "&boxDL;",
          "\u2554": "&boxDR;",
          "\u2556": "&boxDl;",
          "\u2553": "&boxDr;",
          "\u2550": "&boxH;",
          "\u2566": "&boxHD;",
          "\u2569": "&boxHU;",
          "\u2564": "&boxHd;",
          "\u2567": "&boxHu;",
          "\u255D": "&boxUL;",
          "\u255A": "&boxUR;",
          "\u255C": "&boxUl;",
          "\u2559": "&boxUr;",
          "\u2551": "&boxV;",
          "\u256C": "&boxVH;",
          "\u2563": "&boxVL;",
          "\u2560": "&boxVR;",
          "\u256B": "&boxVh;",
          "\u2562": "&boxVl;",
          "\u255F": "&boxVr;",
          "\u29C9": "&boxbox;",
          "\u2555": "&boxdL;",
          "\u2552": "&boxdR;",
          "\u2510": "&boxdl;",
          "\u250C": "&boxdr;",
          "\u2565": "&boxhD;",
          "\u2568": "&boxhU;",
          "\u252C": "&boxhd;",
          "\u2534": "&boxhu;",
          "\u229F": "&minusb;",
          "\u229E": "&plusb;",
          "\u22A0": "&timesb;",
          "\u255B": "&boxuL;",
          "\u2558": "&boxuR;",
          "\u2518": "&boxul;",
          "\u2514": "&boxur;",
          "\u2502": "&boxv;",
          "\u256A": "&boxvH;",
          "\u2561": "&boxvL;",
          "\u255E": "&boxvR;",
          "\u253C": "&boxvh;",
          "\u2524": "&boxvl;",
          "\u251C": "&boxvr;",
          "\xA6": "&brvbar;",
          "\uD835\uDCB7": "&bscr;",
          "\u204F": "&bsemi;",
          "\\": "&bsol;",
          "\u29C5": "&bsolb;",
          "\u27C8": "&bsolhsub;",
          "\u2022": "&bullet;",
          "\u2AAE": "&bumpE;",
          "\u0107": "&cacute;",
          "\u2229": "&cap;",
          "\u2A44": "&capand;",
          "\u2A49": "&capbrcup;",
          "\u2A4B": "&capcap;",
          "\u2A47": "&capcup;",
          "\u2A40": "&capdot;",
          "\u2229\uFE00": "&caps;",
          "\u2041": "&caret;",
          "\u2A4D": "&ccaps;",
          "\u010D": "&ccaron;",
          "\xE7": "&ccedil;",
          "\u0109": "&ccirc;",
          "\u2A4C": "&ccups;",
          "\u2A50": "&ccupssm;",
          "\u010B": "&cdot;",
          "\u29B2": "&cemptyv;",
          "\xA2": "&cent;",
          "\uD835\uDD20": "&cfr;",
          "\u0447": "&chcy;",
          "\u2713": "&checkmark;",
          "\u03C7": "&chi;",
          "\u25CB": "&cir;",
          "\u29C3": "&cirE;",
          "\u02C6": "&circ;",
          "\u2257": "&cire;",
          "\u21BA": "&olarr;",
          "\u21BB": "&orarr;",
          "\u24C8": "&oS;",
          "\u229B": "&oast;",
          "\u229A": "&ocir;",
          "\u229D": "&odash;",
          "\u2A10": "&cirfnint;",
          "\u2AEF": "&cirmid;",
          "\u29C2": "&cirscir;",
          "\u2663": "&clubsuit;",
          ":": "&colon;",
          ",": "&comma;",
          "@": "&commat;",
          "\u2201": "&complement;",
          "\u2A6D": "&congdot;",
          "\uD835\uDD54": "&copf;",
          "\u2117": "&copysr;",
          "\u21B5": "&crarr;",
          "\u2717": "&cross;",
          "\uD835\uDCB8": "&cscr;",
          "\u2ACF": "&csub;",
          "\u2AD1": "&csube;",
          "\u2AD0": "&csup;",
          "\u2AD2": "&csupe;",
          "\u22EF": "&ctdot;",
          "\u2938": "&cudarrl;",
          "\u2935": "&cudarrr;",
          "\u22DE": "&curlyeqprec;",
          "\u22DF": "&curlyeqsucc;",
          "\u21B6": "&curvearrowleft;",
          "\u293D": "&cularrp;",
          "\u222A": "&cup;",
          "\u2A48": "&cupbrcap;",
          "\u2A46": "&cupcap;",
          "\u2A4A": "&cupcup;",
          "\u228D": "&cupdot;",
          "\u2A45": "&cupor;",
          "\u222A\uFE00": "&cups;",
          "\u21B7": "&curvearrowright;",
          "\u293C": "&curarrm;",
          "\u22CE": "&cuvee;",
          "\u22CF": "&cuwed;",
          "\xA4": "&curren;",
          "\u2231": "&cwint;",
          "\u232D": "&cylcty;",
          "\u2965": "&dHar;",
          "\u2020": "&dagger;",
          "\u2138": "&daleth;",
          "\u2010": "&hyphen;",
          "\u290F": "&rBarr;",
          "\u010F": "&dcaron;",
          "\u0434": "&dcy;",
          "\u21CA": "&downdownarrows;",
          "\u2A77": "&eDDot;",
          "\xB0": "&deg;",
          "\u03B4": "&delta;",
          "\u29B1": "&demptyv;",
          "\u297F": "&dfisht;",
          "\uD835\uDD21": "&dfr;",
          "\u2666": "&diams;",
          "\u03DD": "&gammad;",
          "\u22F2": "&disin;",
          "\xF7": "&divide;",
          "\u22C7": "&divonx;",
          "\u0452": "&djcy;",
          "\u231E": "&llcorner;",
          "\u230D": "&dlcrop;",
          $: "&dollar;",
          "\uD835\uDD55": "&dopf;",
          "\u2251": "&eDot;",
          "\u2238": "&minusd;",
          "\u2214": "&plusdo;",
          "\u22A1": "&sdotb;",
          "\u231F": "&lrcorner;",
          "\u230C": "&drcrop;",
          "\uD835\uDCB9": "&dscr;",
          "\u0455": "&dscy;",
          "\u29F6": "&dsol;",
          "\u0111": "&dstrok;",
          "\u22F1": "&dtdot;",
          "\u25BF": "&triangledown;",
          "\u29A6": "&dwangle;",
          "\u045F": "&dzcy;",
          "\u27FF": "&dzigrarr;",
          "\xE9": "&eacute;",
          "\u2A6E": "&easter;",
          "\u011B": "&ecaron;",
          "\u2256": "&eqcirc;",
          "\xEA": "&ecirc;",
          "\u2255": "&eqcolon;",
          "\u044D": "&ecy;",
          "\u0117": "&edot;",
          "\u2252": "&fallingdotseq;",
          "\uD835\uDD22": "&efr;",
          "\u2A9A": "&eg;",
          "\xE8": "&egrave;",
          "\u2A96": "&eqslantgtr;",
          "\u2A98": "&egsdot;",
          "\u2A99": "&el;",
          "\u23E7": "&elinters;",
          "\u2113": "&ell;",
          "\u2A95": "&eqslantless;",
          "\u2A97": "&elsdot;",
          "\u0113": "&emacr;",
          "\u2205": "&varnothing;",
          "\u2004": "&emsp13;",
          "\u2005": "&emsp14;",
          "\u2003": "&emsp;",
          "\u014B": "&eng;",
          "\u2002": "&ensp;",
          "\u0119": "&eogon;",
          "\uD835\uDD56": "&eopf;",
          "\u22D5": "&epar;",
          "\u29E3": "&eparsl;",
          "\u2A71": "&eplus;",
          "\u03B5": "&epsilon;",
          "\u03F5": "&varepsilon;",
          "=": "&equals;",
          "\u225F": "&questeq;",
          "\u2A78": "&equivDD;",
          "\u29E5": "&eqvparsl;",
          "\u2253": "&risingdotseq;",
          "\u2971": "&erarr;",
          "\u212F": "&escr;",
          "\u03B7": "&eta;",
          "\xF0": "&eth;",
          "\xEB": "&euml;",
          "\u20AC": "&euro;",
          "!": "&excl;",
          "\u0444": "&fcy;",
          "\u2640": "&female;",
          "\uFB03": "&ffilig;",
          "\uFB00": "&fflig;",
          "\uFB04": "&ffllig;",
          "\uD835\uDD23": "&ffr;",
          "\uFB01": "&filig;",
          fj: "&fjlig;",
          "\u266D": "&flat;",
          "\uFB02": "&fllig;",
          "\u25B1": "&fltns;",
          "\u0192": "&fnof;",
          "\uD835\uDD57": "&fopf;",
          "\u22D4": "&pitchfork;",
          "\u2AD9": "&forkv;",
          "\u2A0D": "&fpartint;",
          "\xBD": "&half;",
          "\u2153": "&frac13;",
          "\xBC": "&frac14;",
          "\u2155": "&frac15;",
          "\u2159": "&frac16;",
          "\u215B": "&frac18;",
          "\u2154": "&frac23;",
          "\u2156": "&frac25;",
          "\xBE": "&frac34;",
          "\u2157": "&frac35;",
          "\u215C": "&frac38;",
          "\u2158": "&frac45;",
          "\u215A": "&frac56;",
          "\u215D": "&frac58;",
          "\u215E": "&frac78;",
          "\u2044": "&frasl;",
          "\u2322": "&sfrown;",
          "\uD835\uDCBB": "&fscr;",
          "\u2A8C": "&gtreqqless;",
          "\u01F5": "&gacute;",
          "\u03B3": "&gamma;",
          "\u2A86": "&gtrapprox;",
          "\u011F": "&gbreve;",
          "\u011D": "&gcirc;",
          "\u0433": "&gcy;",
          "\u0121": "&gdot;",
          "\u2AA9": "&gescc;",
          "\u2A80": "&gesdot;",
          "\u2A82": "&gesdoto;",
          "\u2A84": "&gesdotol;",
          "\u22DB\uFE00": "&gesl;",
          "\u2A94": "&gesles;",
          "\uD835\uDD24": "&gfr;",
          "\u2137": "&gimel;",
          "\u0453": "&gjcy;",
          "\u2A92": "&glE;",
          "\u2AA5": "&gla;",
          "\u2AA4": "&glj;",
          "\u2269": "&gneqq;",
          "\u2A8A": "&gnapprox;",
          "\u2A88": "&gneq;",
          "\u22E7": "&gnsim;",
          "\uD835\uDD58": "&gopf;",
          "\u210A": "&gscr;",
          "\u2A8E": "&gsime;",
          "\u2A90": "&gsiml;",
          "\u2AA7": "&gtcc;",
          "\u2A7A": "&gtcir;",
          "\u22D7": "&gtrdot;",
          "\u2995": "&gtlPar;",
          "\u2A7C": "&gtquest;",
          "\u2978": "&gtrarr;",
          "\u2269\uFE00": "&gvnE;",
          "\u044A": "&hardcy;",
          "\u2948": "&harrcir;",
          "\u21AD": "&leftrightsquigarrow;",
          "\u210F": "&plankv;",
          "\u0125": "&hcirc;",
          "\u2665": "&heartsuit;",
          "\u2026": "&mldr;",
          "\u22B9": "&hercon;",
          "\uD835\uDD25": "&hfr;",
          "\u2925": "&searhk;",
          "\u2926": "&swarhk;",
          "\u21FF": "&hoarr;",
          "\u223B": "&homtht;",
          "\u21A9": "&larrhk;",
          "\u21AA": "&rarrhk;",
          "\uD835\uDD59": "&hopf;",
          "\u2015": "&horbar;",
          "\uD835\uDCBD": "&hscr;",
          "\u0127": "&hstrok;",
          "\u2043": "&hybull;",
          "\xED": "&iacute;",
          "\xEE": "&icirc;",
          "\u0438": "&icy;",
          "\u0435": "&iecy;",
          "\xA1": "&iexcl;",
          "\uD835\uDD26": "&ifr;",
          "\xEC": "&igrave;",
          "\u2A0C": "&qint;",
          "\u222D": "&tint;",
          "\u29DC": "&iinfin;",
          "\u2129": "&iiota;",
          "\u0133": "&ijlig;",
          "\u012B": "&imacr;",
          "\u0131": "&inodot;",
          "\u22B7": "&imof;",
          "\u01B5": "&imped;",
          "\u2105": "&incare;",
          "\u221E": "&infin;",
          "\u29DD": "&infintie;",
          "\u22BA": "&intercal;",
          "\u2A17": "&intlarhk;",
          "\u2A3C": "&iprod;",
          "\u0451": "&iocy;",
          "\u012F": "&iogon;",
          "\uD835\uDD5A": "&iopf;",
          "\u03B9": "&iota;",
          "\xBF": "&iquest;",
          "\uD835\uDCBE": "&iscr;",
          "\u22F9": "&isinE;",
          "\u22F5": "&isindot;",
          "\u22F4": "&isins;",
          "\u22F3": "&isinsv;",
          "\u0129": "&itilde;",
          "\u0456": "&iukcy;",
          "\xEF": "&iuml;",
          "\u0135": "&jcirc;",
          "\u0439": "&jcy;",
          "\uD835\uDD27": "&jfr;",
          "\u0237": "&jmath;",
          "\uD835\uDD5B": "&jopf;",
          "\uD835\uDCBF": "&jscr;",
          "\u0458": "&jsercy;",
          "\u0454": "&jukcy;",
          "\u03BA": "&kappa;",
          "\u03F0": "&varkappa;",
          "\u0137": "&kcedil;",
          "\u043A": "&kcy;",
          "\uD835\uDD28": "&kfr;",
          "\u0138": "&kgreen;",
          "\u0445": "&khcy;",
          "\u045C": "&kjcy;",
          "\uD835\uDD5C": "&kopf;",
          "\uD835\uDCC0": "&kscr;",
          "\u291B": "&lAtail;",
          "\u290E": "&lBarr;",
          "\u2A8B": "&lesseqqgtr;",
          "\u2962": "&lHar;",
          "\u013A": "&lacute;",
          "\u29B4": "&laemptyv;",
          "\u03BB": "&lambda;",
          "\u2991": "&langd;",
          "\u2A85": "&lessapprox;",
          "\xAB": "&laquo;",
          "\u291F": "&larrbfs;",
          "\u291D": "&larrfs;",
          "\u21AB": "&looparrowleft;",
          "\u2939": "&larrpl;",
          "\u2973": "&larrsim;",
          "\u21A2": "&leftarrowtail;",
          "\u2AAB": "&lat;",
          "\u2919": "&latail;",
          "\u2AAD": "&late;",
          "\u2AAD\uFE00": "&lates;",
          "\u290C": "&lbarr;",
          "\u2772": "&lbbrk;",
          "{": "&lcub;",
          "[": "&lsqb;",
          "\u298B": "&lbrke;",
          "\u298F": "&lbrksld;",
          "\u298D": "&lbrkslu;",
          "\u013E": "&lcaron;",
          "\u013C": "&lcedil;",
          "\u043B": "&lcy;",
          "\u2936": "&ldca;",
          "\u2967": "&ldrdhar;",
          "\u294B": "&ldrushar;",
          "\u21B2": "&ldsh;",
          "\u2264": "&leq;",
          "\u21C7": "&llarr;",
          "\u22CB": "&lthree;",
          "\u2AA8": "&lescc;",
          "\u2A7F": "&lesdot;",
          "\u2A81": "&lesdoto;",
          "\u2A83": "&lesdotor;",
          "\u22DA\uFE00": "&lesg;",
          "\u2A93": "&lesges;",
          "\u22D6": "&ltdot;",
          "\u297C": "&lfisht;",
          "\uD835\uDD29": "&lfr;",
          "\u2A91": "&lgE;",
          "\u296A": "&lharul;",
          "\u2584": "&lhblk;",
          "\u0459": "&ljcy;",
          "\u296B": "&llhard;",
          "\u25FA": "&lltri;",
          "\u0140": "&lmidot;",
          "\u23B0": "&lmoustache;",
          "\u2268": "&lneqq;",
          "\u2A89": "&lnapprox;",
          "\u2A87": "&lneq;",
          "\u22E6": "&lnsim;",
          "\u27EC": "&loang;",
          "\u21FD": "&loarr;",
          "\u27FC": "&xmap;",
          "\u21AC": "&rarrlp;",
          "\u2985": "&lopar;",
          "\uD835\uDD5D": "&lopf;",
          "\u2A2D": "&loplus;",
          "\u2A34": "&lotimes;",
          "\u2217": "&lowast;",
          "\u25CA": "&lozenge;",
          "(": "&lpar;",
          "\u2993": "&lparlt;",
          "\u296D": "&lrhard;",
          "\u200E": "&lrm;",
          "\u22BF": "&lrtri;",
          "\u2039": "&lsaquo;",
          "\uD835\uDCC1": "&lscr;",
          "\u2A8D": "&lsime;",
          "\u2A8F": "&lsimg;",
          "\u201A": "&sbquo;",
          "\u0142": "&lstrok;",
          "\u2AA6": "&ltcc;",
          "\u2A79": "&ltcir;",
          "\u22C9": "&ltimes;",
          "\u2976": "&ltlarr;",
          "\u2A7B": "&ltquest;",
          "\u2996": "&ltrPar;",
          "\u25C3": "&triangleleft;",
          "\u294A": "&lurdshar;",
          "\u2966": "&luruhar;",
          "\u2268\uFE00": "&lvnE;",
          "\u223A": "&mDDot;",
          "\xAF": "&strns;",
          "\u2642": "&male;",
          "\u2720": "&maltese;",
          "\u25AE": "&marker;",
          "\u2A29": "&mcomma;",
          "\u043C": "&mcy;",
          "\u2014": "&mdash;",
          "\uD835\uDD2A": "&mfr;",
          "\u2127": "&mho;",
          "\xB5": "&micro;",
          "\u2AF0": "&midcir;",
          "\u2212": "&minus;",
          "\u2A2A": "&minusdu;",
          "\u2ADB": "&mlcp;",
          "\u22A7": "&models;",
          "\uD835\uDD5E": "&mopf;",
          "\uD835\uDCC2": "&mscr;",
          "\u03BC": "&mu;",
          "\u22B8": "&mumap;",
          "\u22D9\u0338": "&nGg;",
          "\u226B\u20D2": "&nGt;",
          "\u21CD": "&nlArr;",
          "\u21CE": "&nhArr;",
          "\u22D8\u0338": "&nLl;",
          "\u226A\u20D2": "&nLt;",
          "\u21CF": "&nrArr;",
          "\u22AF": "&nVDash;",
          "\u22AE": "&nVdash;",
          "\u0144": "&nacute;",
          "\u2220\u20D2": "&nang;",
          "\u2A70\u0338": "&napE;",
          "\u224B\u0338": "&napid;",
          "\u0149": "&napos;",
          "\u266E": "&natural;",
          "\u2A43": "&ncap;",
          "\u0148": "&ncaron;",
          "\u0146": "&ncedil;",
          "\u2A6D\u0338": "&ncongdot;",
          "\u2A42": "&ncup;",
          "\u043D": "&ncy;",
          "\u2013": "&ndash;",
          "\u21D7": "&neArr;",
          "\u2924": "&nearhk;",
          "\u2250\u0338": "&nedot;",
          "\u2928": "&toea;",
          "\uD835\uDD2B": "&nfr;",
          "\u21AE": "&nleftrightarrow;",
          "\u2AF2": "&nhpar;",
          "\u22FC": "&nis;",
          "\u22FA": "&nisd;",
          "\u045A": "&njcy;",
          "\u2266\u0338": "&nleqq;",
          "\u219A": "&nleftarrow;",
          "\u2025": "&nldr;",
          "\uD835\uDD5F": "&nopf;",
          "\xAC": "&not;",
          "\u22F9\u0338": "&notinE;",
          "\u22F5\u0338": "&notindot;",
          "\u22F7": "&notinvb;",
          "\u22F6": "&notinvc;",
          "\u22FE": "&notnivb;",
          "\u22FD": "&notnivc;",
          "\u2AFD\u20E5": "&nparsl;",
          "\u2202\u0338": "&npart;",
          "\u2A14": "&npolint;",
          "\u219B": "&nrightarrow;",
          "\u2933\u0338": "&nrarrc;",
          "\u219D\u0338": "&nrarrw;",
          "\uD835\uDCC3": "&nscr;",
          "\u2284": "&nsub;",
          "\u2AC5\u0338": "&nsubseteqq;",
          "\u2285": "&nsup;",
          "\u2AC6\u0338": "&nsupseteqq;",
          "\xF1": "&ntilde;",
          "\u03BD": "&nu;",
          "#": "&num;",
          "\u2116": "&numero;",
          "\u2007": "&numsp;",
          "\u22AD": "&nvDash;",
          "\u2904": "&nvHarr;",
          "\u224D\u20D2": "&nvap;",
          "\u22AC": "&nvdash;",
          "\u2265\u20D2": "&nvge;",
          ">\u20D2": "&nvgt;",
          "\u29DE": "&nvinfin;",
          "\u2902": "&nvlArr;",
          "\u2264\u20D2": "&nvle;",
          "<\u20D2": "&nvlt;",
          "\u22B4\u20D2": "&nvltrie;",
          "\u2903": "&nvrArr;",
          "\u22B5\u20D2": "&nvrtrie;",
          "\u223C\u20D2": "&nvsim;",
          "\u21D6": "&nwArr;",
          "\u2923": "&nwarhk;",
          "\u2927": "&nwnear;",
          "\xF3": "&oacute;",
          "\xF4": "&ocirc;",
          "\u043E": "&ocy;",
          "\u0151": "&odblac;",
          "\u2A38": "&odiv;",
          "\u29BC": "&odsold;",
          "\u0153": "&oelig;",
          "\u29BF": "&ofcir;",
          "\uD835\uDD2C": "&ofr;",
          "\u02DB": "&ogon;",
          "\xF2": "&ograve;",
          "\u29C1": "&ogt;",
          "\u29B5": "&ohbar;",
          "\u29BE": "&olcir;",
          "\u29BB": "&olcross;",
          "\u29C0": "&olt;",
          "\u014D": "&omacr;",
          "\u03C9": "&omega;",
          "\u03BF": "&omicron;",
          "\u29B6": "&omid;",
          "\uD835\uDD60": "&oopf;",
          "\u29B7": "&opar;",
          "\u29B9": "&operp;",
          "\u2228": "&vee;",
          "\u2A5D": "&ord;",
          "\u2134": "&oscr;",
          "\xAA": "&ordf;",
          "\xBA": "&ordm;",
          "\u22B6": "&origof;",
          "\u2A56": "&oror;",
          "\u2A57": "&orslope;",
          "\u2A5B": "&orv;",
          "\xF8": "&oslash;",
          "\u2298": "&osol;",
          "\xF5": "&otilde;",
          "\u2A36": "&otimesas;",
          "\xF6": "&ouml;",
          "\u233D": "&ovbar;",
          "\xB6": "&para;",
          "\u2AF3": "&parsim;",
          "\u2AFD": "&parsl;",
          "\u043F": "&pcy;",
          "%": "&percnt;",
          ".": "&period;",
          "\u2030": "&permil;",
          "\u2031": "&pertenk;",
          "\uD835\uDD2D": "&pfr;",
          "\u03C6": "&phi;",
          "\u03D5": "&varphi;",
          "\u260E": "&phone;",
          "\u03C0": "&pi;",
          "\u03D6": "&varpi;",
          "\u210E": "&planckh;",
          "+": "&plus;",
          "\u2A23": "&plusacir;",
          "\u2A22": "&pluscir;",
          "\u2A25": "&plusdu;",
          "\u2A72": "&pluse;",
          "\u2A26": "&plussim;",
          "\u2A27": "&plustwo;",
          "\u2A15": "&pointint;",
          "\uD835\uDD61": "&popf;",
          "\xA3": "&pound;",
          "\u2AB3": "&prE;",
          "\u2AB7": "&precapprox;",
          "\u2AB9": "&prnap;",
          "\u2AB5": "&prnE;",
          "\u22E8": "&prnsim;",
          "\u2032": "&prime;",
          "\u232E": "&profalar;",
          "\u2312": "&profline;",
          "\u2313": "&profsurf;",
          "\u22B0": "&prurel;",
          "\uD835\uDCC5": "&pscr;",
          "\u03C8": "&psi;",
          "\u2008": "&puncsp;",
          "\uD835\uDD2E": "&qfr;",
          "\uD835\uDD62": "&qopf;",
          "\u2057": "&qprime;",
          "\uD835\uDCC6": "&qscr;",
          "\u2A16": "&quatint;",
          "?": "&quest;",
          "\u291C": "&rAtail;",
          "\u2964": "&rHar;",
          "\u223D\u0331": "&race;",
          "\u0155": "&racute;",
          "\u29B3": "&raemptyv;",
          "\u2992": "&rangd;",
          "\u29A5": "&range;",
          "\xBB": "&raquo;",
          "\u2975": "&rarrap;",
          "\u2920": "&rarrbfs;",
          "\u2933": "&rarrc;",
          "\u291E": "&rarrfs;",
          "\u2945": "&rarrpl;",
          "\u2974": "&rarrsim;",
          "\u21A3": "&rightarrowtail;",
          "\u219D": "&rightsquigarrow;",
          "\u291A": "&ratail;",
          "\u2236": "&ratio;",
          "\u2773": "&rbbrk;",
          "}": "&rcub;",
          "]": "&rsqb;",
          "\u298C": "&rbrke;",
          "\u298E": "&rbrksld;",
          "\u2990": "&rbrkslu;",
          "\u0159": "&rcaron;",
          "\u0157": "&rcedil;",
          "\u0440": "&rcy;",
          "\u2937": "&rdca;",
          "\u2969": "&rdldhar;",
          "\u21B3": "&rdsh;",
          "\u25AD": "&rect;",
          "\u297D": "&rfisht;",
          "\uD835\uDD2F": "&rfr;",
          "\u296C": "&rharul;",
          "\u03C1": "&rho;",
          "\u03F1": "&varrho;",
          "\u21C9": "&rrarr;",
          "\u22CC": "&rthree;",
          "\u02DA": "&ring;",
          "\u200F": "&rlm;",
          "\u23B1": "&rmoustache;",
          "\u2AEE": "&rnmid;",
          "\u27ED": "&roang;",
          "\u21FE": "&roarr;",
          "\u2986": "&ropar;",
          "\uD835\uDD63": "&ropf;",
          "\u2A2E": "&roplus;",
          "\u2A35": "&rotimes;",
          ")": "&rpar;",
          "\u2994": "&rpargt;",
          "\u2A12": "&rppolint;",
          "\u203A": "&rsaquo;",
          "\uD835\uDCC7": "&rscr;",
          "\u22CA": "&rtimes;",
          "\u25B9": "&triangleright;",
          "\u29CE": "&rtriltri;",
          "\u2968": "&ruluhar;",
          "\u211E": "&rx;",
          "\u015B": "&sacute;",
          "\u2AB4": "&scE;",
          "\u2AB8": "&succapprox;",
          "\u0161": "&scaron;",
          "\u015F": "&scedil;",
          "\u015D": "&scirc;",
          "\u2AB6": "&succneqq;",
          "\u2ABA": "&succnapprox;",
          "\u22E9": "&succnsim;",
          "\u2A13": "&scpolint;",
          "\u0441": "&scy;",
          "\u22C5": "&sdot;",
          "\u2A66": "&sdote;",
          "\u21D8": "&seArr;",
          "\xA7": "&sect;",
          ";": "&semi;",
          "\u2929": "&tosa;",
          "\u2736": "&sext;",
          "\uD835\uDD30": "&sfr;",
          "\u266F": "&sharp;",
          "\u0449": "&shchcy;",
          "\u0448": "&shcy;",
          "\xAD": "&shy;",
          "\u03C3": "&sigma;",
          "\u03C2": "&varsigma;",
          "\u2A6A": "&simdot;",
          "\u2A9E": "&simg;",
          "\u2AA0": "&simgE;",
          "\u2A9D": "&siml;",
          "\u2A9F": "&simlE;",
          "\u2246": "&simne;",
          "\u2A24": "&simplus;",
          "\u2972": "&simrarr;",
          "\u2A33": "&smashp;",
          "\u29E4": "&smeparsl;",
          "\u2323": "&ssmile;",
          "\u2AAA": "&smt;",
          "\u2AAC": "&smte;",
          "\u2AAC\uFE00": "&smtes;",
          "\u044C": "&softcy;",
          "/": "&sol;",
          "\u29C4": "&solb;",
          "\u233F": "&solbar;",
          "\uD835\uDD64": "&sopf;",
          "\u2660": "&spadesuit;",
          "\u2293\uFE00": "&sqcaps;",
          "\u2294\uFE00": "&sqcups;",
          "\uD835\uDCC8": "&sscr;",
          "\u2606": "&star;",
          "\u2282": "&subset;",
          "\u2AC5": "&subseteqq;",
          "\u2ABD": "&subdot;",
          "\u2AC3": "&subedot;",
          "\u2AC1": "&submult;",
          "\u2ACB": "&subsetneqq;",
          "\u228A": "&subsetneq;",
          "\u2ABF": "&subplus;",
          "\u2979": "&subrarr;",
          "\u2AC7": "&subsim;",
          "\u2AD5": "&subsub;",
          "\u2AD3": "&subsup;",
          "\u266A": "&sung;",
          "\xB9": "&sup1;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\u2AC6": "&supseteqq;",
          "\u2ABE": "&supdot;",
          "\u2AD8": "&supdsub;",
          "\u2AC4": "&supedot;",
          "\u27C9": "&suphsol;",
          "\u2AD7": "&suphsub;",
          "\u297B": "&suplarr;",
          "\u2AC2": "&supmult;",
          "\u2ACC": "&supsetneqq;",
          "\u228B": "&supsetneq;",
          "\u2AC0": "&supplus;",
          "\u2AC8": "&supsim;",
          "\u2AD4": "&supsub;",
          "\u2AD6": "&supsup;",
          "\u21D9": "&swArr;",
          "\u292A": "&swnwar;",
          "\xDF": "&szlig;",
          "\u2316": "&target;",
          "\u03C4": "&tau;",
          "\u0165": "&tcaron;",
          "\u0163": "&tcedil;",
          "\u0442": "&tcy;",
          "\u2315": "&telrec;",
          "\uD835\uDD31": "&tfr;",
          "\u03B8": "&theta;",
          "\u03D1": "&vartheta;",
          "\xFE": "&thorn;",
          "\xD7": "&times;",
          "\u2A31": "&timesbar;",
          "\u2A30": "&timesd;",
          "\u2336": "&topbot;",
          "\u2AF1": "&topcir;",
          "\uD835\uDD65": "&topf;",
          "\u2ADA": "&topfork;",
          "\u2034": "&tprime;",
          "\u25B5": "&utri;",
          "\u225C": "&trie;",
          "\u25EC": "&tridot;",
          "\u2A3A": "&triminus;",
          "\u2A39": "&triplus;",
          "\u29CD": "&trisb;",
          "\u2A3B": "&tritime;",
          "\u23E2": "&trpezium;",
          "\uD835\uDCC9": "&tscr;",
          "\u0446": "&tscy;",
          "\u045B": "&tshcy;",
          "\u0167": "&tstrok;",
          "\u2963": "&uHar;",
          "\xFA": "&uacute;",
          "\u045E": "&ubrcy;",
          "\u016D": "&ubreve;",
          "\xFB": "&ucirc;",
          "\u0443": "&ucy;",
          "\u0171": "&udblac;",
          "\u297E": "&ufisht;",
          "\uD835\uDD32": "&ufr;",
          "\xF9": "&ugrave;",
          "\u2580": "&uhblk;",
          "\u231C": "&ulcorner;",
          "\u230F": "&ulcrop;",
          "\u25F8": "&ultri;",
          "\u016B": "&umacr;",
          "\u0173": "&uogon;",
          "\uD835\uDD66": "&uopf;",
          "\u03C5": "&upsilon;",
          "\u21C8": "&uuarr;",
          "\u231D": "&urcorner;",
          "\u230E": "&urcrop;",
          "\u016F": "&uring;",
          "\u25F9": "&urtri;",
          "\uD835\uDCCA": "&uscr;",
          "\u22F0": "&utdot;",
          "\u0169": "&utilde;",
          "\xFC": "&uuml;",
          "\u29A7": "&uwangle;",
          "\u2AE8": "&vBar;",
          "\u2AE9": "&vBarv;",
          "\u299C": "&vangrt;",
          "\u228A\uFE00": "&vsubne;",
          "\u2ACB\uFE00": "&vsubnE;",
          "\u228B\uFE00": "&vsupne;",
          "\u2ACC\uFE00": "&vsupnE;",
          "\u0432": "&vcy;",
          "\u22BB": "&veebar;",
          "\u225A": "&veeeq;",
          "\u22EE": "&vellip;",
          "\uD835\uDD33": "&vfr;",
          "\uD835\uDD67": "&vopf;",
          "\uD835\uDCCB": "&vscr;",
          "\u299A": "&vzigzag;",
          "\u0175": "&wcirc;",
          "\u2A5F": "&wedbar;",
          "\u2259": "&wedgeq;",
          "\u2118": "&wp;",
          "\uD835\uDD34": "&wfr;",
          "\uD835\uDD68": "&wopf;",
          "\uD835\uDCCC": "&wscr;",
          "\uD835\uDD35": "&xfr;",
          "\u03BE": "&xi;",
          "\u22FB": "&xnis;",
          "\uD835\uDD69": "&xopf;",
          "\uD835\uDCCD": "&xscr;",
          "\xFD": "&yacute;",
          "\u044F": "&yacy;",
          "\u0177": "&ycirc;",
          "\u044B": "&ycy;",
          "\xA5": "&yen;",
          "\uD835\uDD36": "&yfr;",
          "\u0457": "&yicy;",
          "\uD835\uDD6A": "&yopf;",
          "\uD835\uDCCE": "&yscr;",
          "\u044E": "&yucy;",
          "\xFF": "&yuml;",
          "\u017A": "&zacute;",
          "\u017E": "&zcaron;",
          "\u0437": "&zcy;",
          "\u017C": "&zdot;",
          "\u03B6": "&zeta;",
          "\uD835\uDD37": "&zfr;",
          "\u0436": "&zhcy;",
          "\u21DD": "&zigrarr;",
          "\uD835\uDD6B": "&zopf;",
          "\uD835\uDCCF": "&zscr;",
          "\u200D": "&zwj;",
          "\u200C": "&zwnj;"
        }
      }
    };
  }
});

// node_modules/libram/node_modules/html-entities/lib/numeric-unicode-map.js
var require_numeric_unicode_map = __commonJS({
  "node_modules/libram/node_modules/html-entities/lib/numeric-unicode-map.js": function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.numericUnicodeMap = {
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
  }
});

// node_modules/libram/node_modules/html-entities/lib/surrogate-pairs.js
var require_surrogate_pairs = __commonJS({
  "node_modules/libram/node_modules/html-entities/lib/surrogate-pairs.js": function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
      return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
    };
    exports.getCodePoint = String.prototype.codePointAt ? function(input, position) {
      return input.codePointAt(position);
    } : function(input, position) {
      return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
    };
    exports.highSurrogateFrom = 55296;
    exports.highSurrogateTo = 56319;
  }
});

// node_modules/libram/node_modules/html-entities/lib/index.js
var require_lib = __commonJS({
  "node_modules/libram/node_modules/html-entities/lib/index.js": function(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var named_references_1 = require_named_references();
    var numeric_unicode_map_1 = require_numeric_unicode_map();
    var surrogate_pairs_1 = require_surrogate_pairs();
    var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
      all: named_references_1.namedReferences.html5
    });
    var encodeRegExps = {
      specialChars: /[<>'"&]/g,
      nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
    };
    var defaultEncodeOptions = {
      mode: "specialChars",
      level: "all",
      numeric: "decimal"
    };
    function encode(text, _a) {
      var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
      if (!text) {
        return "";
      }
      var encodeRegExp = encodeRegExps[mode];
      var references = allNamedReferences[level].characters;
      var isHex = numeric === "hexadecimal";
      encodeRegExp.lastIndex = 0;
      var _b = encodeRegExp.exec(text);
      var _c;
      if (_b) {
        _c = "";
        var _d = 0;
        do {
          if (_d !== _b.index) {
            _c += text.substring(_d, _b.index);
          }
          var _e = _b[0];
          var result_1 = references[_e];
          if (!result_1) {
            var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
            result_1 = (isHex ? "&#x" + code_1.toString(16) : "&#" + code_1) + ";";
          }
          _c += result_1;
          _d = _b.index + _e.length;
        } while (_b = encodeRegExp.exec(text));
        if (_d !== text.length) {
          _c += text.substring(_d);
        }
      } else {
        _c = text;
      }
      return _c;
    }
    exports.encode = encode;
    var defaultDecodeOptions = {
      scope: "body",
      level: "all"
    };
    var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
    var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
    var baseDecodeRegExps = {
      xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
      },
      html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
      },
      html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
      }
    };
    var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
      all: baseDecodeRegExps.html5
    });
    var fromCharCode = String.fromCharCode;
    var outOfBoundsChar = fromCharCode(65533);
    var defaultDecodeEntityOptions = {
      level: "all"
    };
    function decodeEntity(entity, _a) {
      var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
      if (!entity) {
        return "";
      }
      var _b = entity;
      var decodeEntityLastChar_1 = entity[entity.length - 1];
      if (false) {
        _b = entity;
      } else if (false) {
        _b = entity;
      } else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
          _b = decodeResultByReference_1;
        } else if (entity[0] === "&" && entity[1] === "#") {
          var decodeSecondChar_1 = entity[2];
          var decodeCode_1 = decodeSecondChar_1 == "x" || decodeSecondChar_1 == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
          _b = decodeCode_1 >= 1114111 ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
      }
      return _b;
    }
    exports.decodeEntity = decodeEntity;
    function decode(text, _a) {
      var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? "all" : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === "xml" ? "strict" : "body" : _b;
      if (!text) {
        return "";
      }
      var decodeRegExp = decodeRegExps[level][scope];
      var references = allNamedReferences[level].entities;
      var isAttribute = scope === "attribute";
      var isStrict = scope === "strict";
      decodeRegExp.lastIndex = 0;
      var replaceMatch_1 = decodeRegExp.exec(text);
      var replaceResult_1;
      if (replaceMatch_1) {
        replaceResult_1 = "";
        var replaceLastIndex_1 = 0;
        do {
          if (replaceLastIndex_1 !== replaceMatch_1.index) {
            replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
          }
          var replaceInput_1 = replaceMatch_1[0];
          var decodeResult_1 = replaceInput_1;
          var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
          if (isAttribute && decodeEntityLastChar_2 === "=") {
            decodeResult_1 = replaceInput_1;
          } else if (isStrict && decodeEntityLastChar_2 !== ";") {
            decodeResult_1 = replaceInput_1;
          } else {
            var decodeResultByReference_2 = references[replaceInput_1];
            if (decodeResultByReference_2) {
              decodeResult_1 = decodeResultByReference_2;
            } else if (replaceInput_1[0] === "&" && replaceInput_1[1] === "#") {
              var decodeSecondChar_2 = replaceInput_1[2];
              var decodeCode_2 = decodeSecondChar_2 == "x" || decodeSecondChar_2 == "X" ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));
              decodeResult_1 = decodeCode_2 >= 1114111 ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
            }
          }
          replaceResult_1 += decodeResult_1;
          replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while (replaceMatch_1 = decodeRegExp.exec(text));
        if (replaceLastIndex_1 !== text.length) {
          replaceResult_1 += text.substring(replaceLastIndex_1);
        }
      } else {
        replaceResult_1 = text;
      }
      return replaceResult_1;
    }
    exports.decode = decode;
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
        var values = value.split(separator);
        if (!spec.noTrim)
          values = values.map(function(v) {
            return v.trim();
          });
        var result = values.map(function(v) {
          return arg.parser(v);
        });
        var error = result.find(function(v) {
          return v instanceof ParseError;
        });
        if (error)
          return error;
        var failure_index = result.indexOf(void 0);
        if (failure_index !== -1)
          return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
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
    value: function _class2(spec) {
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
    value: function item5(spec) {
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
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create5(scriptName, scriptHelp, args, options) {
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
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
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
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
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
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
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
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
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
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length)
        return void 0;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0)
        return void 0;
      if (this.index >= this.command.length + 1)
        return void 0;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
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
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
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
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
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
var import_kolmafia23 = require("kolmafia");

// node_modules/libram/dist/combat.js
var import_kolmafia6 = require("kolmafia");

// node_modules/libram/dist/lib.js
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
var import_kolmafia2 = require("kolmafia");
var _defaultHandlers;
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
var LogLevels;
(function(LogLevels2) {
  LogLevels2[LogLevels2["NONE"] = 0] = "NONE";
  LogLevels2[LogLevels2["ERROR"] = 1] = "ERROR";
  LogLevels2[LogLevels2["WARNING"] = 2] = "WARNING";
  LogLevels2[LogLevels2["INFO"] = 3] = "INFO";
  LogLevels2[LogLevels2["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, _defineProperty2(_defaultHandlers, LogLevels.INFO, function(message) {
  (0, import_kolmafia2.printHtml)("<b>[Libram Info]</b> ".concat(message));
  (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
  return;
}), _defineProperty2(_defaultHandlers, LogLevels.WARNING, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: orange; color: white;"><b>[Libram Warning]</b> '.concat(message, "</span>"));
  (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
  return;
}), _defineProperty2(_defaultHandlers, LogLevels.ERROR, function(error) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Error]</b> '.concat(error.toString(), "</span>"));
  (0, import_kolmafia2.logprint)("[Libram] ".concat(error));
  return;
}), _defineProperty2(_defaultHandlers, LogLevels.DEBUG, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Debug]</b> '.concat(message, "</span>"));
  (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
  return;
}), _defaultHandlers);
var Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck2(this, Logger2);
    _defineProperty2(this, "handlers", defaultHandlers);
  }
  _createClass2(Logger2, [{
    key: "level",
    get: function get4() {
      return Logger2.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger2.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level)
        this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
  return Logger2;
}();
_defineProperty2(Logger, "currentLevel", LogLevels.ERROR);
var logger_default = new Logger();

// node_modules/libram/dist/property.js
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevProxyServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_augSkillsCast", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"];
var monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventure", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextAdventure", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"];
var familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

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
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
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
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia3.getProperty)(property);
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
var getBounty = createMafiaClassPropertyGetter(import_kolmafia3.Bounty, import_kolmafia3.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia3.Class, import_kolmafia3.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia3.Coinmaster, import_kolmafia3.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia3.Effect, import_kolmafia3.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia3.Element, import_kolmafia3.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia3.Familiar, import_kolmafia3.toFamiliar);
var getItem = createMafiaClassPropertyGetter(import_kolmafia3.Item, import_kolmafia3.toItem);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia3.Location, import_kolmafia3.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia3.Monster, import_kolmafia3.toMonster);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia3.Phylum, import_kolmafia3.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia3.Servant, import_kolmafia3.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia3.Skill, import_kolmafia3.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia3.Slot, import_kolmafia3.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia3.Stat, import_kolmafia3.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia3.Thrall, import_kolmafia3.toThrall);
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
  if (_default instanceof import_kolmafia3.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof import_kolmafia3.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof import_kolmafia3.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof import_kolmafia3.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof import_kolmafia3.Phylum) {
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
  (0, import_kolmafia3.setProperty)(property, stringValue);
  return value;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck3(this, PropertiesManager2);
    _defineProperty3(this, "properties", {});
  }
  _createClass3(PropertiesManager2, [{
    key: "storedValues",
    get: function get4() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set2(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        if (this.properties[propertyName] === void 0) {
          this.properties[propertyName] = get(propertyName);
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices(_defineProperty3({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
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
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      setProperties(this.properties);
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
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
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set(_defineProperty3({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set(_defineProperty3({}, property, value));
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager2();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
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
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
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
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager2();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
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
var import_kolmafia4 = require("kolmafia");

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
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
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
  array.forEach(function(item5) {
    map.set(item5, (map.get(item5) || 0) + 1);
  });
  return map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item5 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item5);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item5 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item5);
  }).join(", ");
}
function sum(addends, x) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + (typeof x === "function" ? x(element) : element[x]);
  }, 0);
}
function arrayContains(item5, array) {
  return array.includes(item5);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every(function(item5, index) {
    return item5 === sortedB[index];
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
function arrayEquals(left, right) {
  if (left.length !== right.length)
    return false;
  return left.every(function(element, index) {
    return element === right[index];
  });
}
function undelay(delayedObject) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options) {
    var _options$val;
    var val = undelay(source);
    if ("default" in options)
      return (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default;
    return options[val];
  };
}
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
  var flatArray = [];
  var _iterator3 = _createForOfIteratorHelper2(arr), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var item5 = _step3.value;
      if (Array.isArray(item5) && depth > 0) {
        flatArray = flatArray.concat(flat(item5, depth - 1));
      } else {
        flatArray.push(item5);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}
var tc = function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

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
var handleTypeGetError = function(Type, error) {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    (0, import_kolmafia4.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    (0, import_kolmafia4.print)(message);
  }
};
var createSingleConstant = function(Type) {
  var tagFunction = function tagFunction2(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  tagFunction.none = Type.none;
  return tagFunction;
};
var createPluralConstant = function(Type) {
  var tagFunction = function tagFunction2(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  tagFunction.all = function() {
    return Type.all();
  };
  return tagFunction;
};
var $bounty = createSingleConstant(import_kolmafia4.Bounty);
var $bounties = createPluralConstant(import_kolmafia4.Bounty);
var $class = createSingleConstant(import_kolmafia4.Class);
var $classes = createPluralConstant(import_kolmafia4.Class);
var $coinmaster = createSingleConstant(import_kolmafia4.Coinmaster);
var $coinmasters = createPluralConstant(import_kolmafia4.Coinmaster);
var $effect = createSingleConstant(import_kolmafia4.Effect);
var $effects = createPluralConstant(import_kolmafia4.Effect);
var $element = createSingleConstant(import_kolmafia4.Element);
var $elements = createPluralConstant(import_kolmafia4.Element);
var $familiar = createSingleConstant(import_kolmafia4.Familiar);
var $familiars = createPluralConstant(import_kolmafia4.Familiar);
var $item = createSingleConstant(import_kolmafia4.Item);
var $items = createPluralConstant(import_kolmafia4.Item);
var $location = createSingleConstant(import_kolmafia4.Location);
var $locations = createPluralConstant(import_kolmafia4.Location);
var $modifier = createSingleConstant(import_kolmafia4.Modifier);
var $modifiers = createPluralConstant(import_kolmafia4.Modifier);
var $monster = createSingleConstant(import_kolmafia4.Monster);
var $monsters = createPluralConstant(import_kolmafia4.Monster);
var $phylum = createSingleConstant(import_kolmafia4.Phylum);
var $phyla = createPluralConstant(import_kolmafia4.Phylum);
var $servant = createSingleConstant(import_kolmafia4.Servant);
var $servants = createPluralConstant(import_kolmafia4.Servant);
var $skill = createSingleConstant(import_kolmafia4.Skill);
var $skills = createPluralConstant(import_kolmafia4.Skill);
var $slot = createSingleConstant(import_kolmafia4.Slot);
var $slots = createPluralConstant(import_kolmafia4.Slot);
var $stat = createSingleConstant(import_kolmafia4.Stat);
var $stats = createPluralConstant(import_kolmafia4.Stat);
var $thrall = createSingleConstant(import_kolmafia4.Thrall);
var $thralls = createPluralConstant(import_kolmafia4.Thrall);
var $path = createSingleConstant(import_kolmafia4.Path);
var $paths = createPluralConstant(import_kolmafia4.Path);

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
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
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
  if (skillOrEffect instanceof import_kolmafia5.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof import_kolmafia5.Effect ? (0, import_kolmafia5.toSkill)(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia5.Effect) {
    return (0, import_kolmafia5.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia5.Familiar) {
    return (0, import_kolmafia5.haveFamiliar)(thing);
  }
  if (thing instanceof import_kolmafia5.Item) {
    return (0, import_kolmafia5.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia5.Servant) {
    return (0, import_kolmafia5.haveServant)(thing);
  }
  if (thing instanceof import_kolmafia5.Skill) {
    return (0, import_kolmafia5.haveSkill)(thing);
  }
  if (thing instanceof import_kolmafia5.Thrall) {
    var thrall = (0, import_kolmafia5.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
function haveInCampground(item5) {
  return Object.keys((0, import_kolmafia5.getCampground)()).map(function(i) {
    return import_kolmafia5.Item.get(i);
  }).includes(item5);
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
function getFoldGroup(item5) {
  return Object.entries((0, import_kolmafia5.getRelated)(item5, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1];
    var _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia5.Item.get(i);
  });
}
function uneffect(effect) {
  return (0, import_kolmafia5.cliExecute)("uneffect ".concat(effect.name));
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    _classCallCheck4(this, EnsureError2);
    _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : ""));
    _this.name = "Ensure Error";
    return _this;
  }
  return _createClass4(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia5.haveEffect)(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!(0, import_kolmafia5.cliExecute)(ef.default) || (0, import_kolmafia5.haveEffect)(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return flat((0, import_kolmafia5.holiday)().split("/").map(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  }));
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
function examine(thing) {
  var url = thing instanceof import_kolmafia5.Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof import_kolmafia5.Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof import_kolmafia5.Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return (0, import_kolmafia5.visitUrl)(url);
}
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia5.myPrimestat)().toString();
});
var byClass = makeByXFunction(function() {
  return (0, import_kolmafia5.myClass)().toString();
});
function directlyUse(item5) {
  return (0, import_kolmafia5.visitUrl)("inv_use.php?which=3&whichitem=".concat(item5.id, "&pwd"));
}

// node_modules/libram/dist/overlappingNames.js
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "pile of sand", "mushroom", "deluxe mushroom"];
var overlappingSkillNames = ["Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Cleave", "Boil", "Slice", "Rainbow"];

// node_modules/libram/dist/combat.js
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
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _possibleConstructorReturn2(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self);
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME;
  var macroMatches = (0, import_kolmafia6.xpath)((0, import_kolmafia6.visitUrl)("account_combatmacros.php"), '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'));
  if (macroMatches.length === 0) {
    (0, import_kolmafia6.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    return parseInt((0, import_kolmafia6.xpath)(newMacroText, "//input[@name=".concat(name, "]/@value"))[0], 10);
  } else {
    return parseInt(macroMatches[0], 10);
  }
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? import_kolmafia6.Item.get(itemOrName) : itemOrName;
}
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item5 = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item5.name) ? item5.name : item5.id.toFixed(0);
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
    return import_kolmafia6.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    _classCallCheck5(this, InvalidMacroError2);
    return _super.apply(this, arguments);
  }
  return _createClass5(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error));
var Macro = /* @__PURE__ */ function() {
  function Macro2() {
    _classCallCheck5(this, Macro2);
    _defineProperty4(this, "components", []);
    _defineProperty4(this, "name", MACRO_NAME);
  }
  _createClass5(Macro2, [{
    key: "toString",
    value: (
      /**
       * Convert macro to string.
       *
       * @returns BALLS macro
       */
      function toString() {
        return (this.components.join(";") + ";").replace(/;;+/g, ";");
      }
    )
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value: (
      /**
       * Save a macro to a Mafia property for use in a consult script.
       */
      function save() {
        _set(Macro2.SAVED_MACRO_PROPERTY, this.toString());
      }
    )
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value: (
      /**
       * Statefully add one or several steps to a macro.
       *
       * @param nextSteps The steps to add to the macro.
       * @returns {Macro} This object itself.
       */
      function step() {
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
    )
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value: (
      /**
       * Submit the built macro to KoL. Only works inside combat.
       *
       * @returns Contents of the fight page after macro submission
       */
      function submit() {
        var final = this.toString();
        return (0, import_kolmafia6.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia6.urlEncode)(final)), true, true);
      }
    )
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack5() {
      var id = Macro2.cachedMacroIds.get(this.name);
      if (id === void 0) {
        id = getMacroId(this.name);
        Macro2.cachedMacroIds.set(this.name, id);
      }
      if ((0, import_kolmafia6.getAutoAttack)() === 99e6 + id && this.toString() === Macro2.cachedAutoAttacks.get(this.name)) {
        return;
      }
      (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia6.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia6.urlEncode)(this.toString()), "&action=save"), true, true);
      (0, import_kolmafia6.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1"));
      Macro2.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value: (
      /**
       * Add an "abort" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function abort2() {
        return this.step("abort");
      }
    )
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value: (
      /**
       * Adds an "abort" step to this macro, with a warning message to print
       *
       * @param warning The warning message to print
       * @returns  {Macro} This object itself.
       */
      function abortWithWarning(warning) {
        return this.step('abort "'.concat(warning, '"'));
      }
    )
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value: (
      /**
       * Add a "runaway" step to this macro.
       *
       * @returns {Macro} This object itself.
       */
      function runaway() {
        return this.step("runaway");
      }
    )
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value: (
      /**
       * Add an "if" statement to this macro.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function if_(condition, ifTrue) {
        return this.step("if ".concat(Macro2.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
      }
    )
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value: (
      /**
       * Add an "if" statement to this macro, inverting the condition.
       *
       * @param condition The BALLS condition for the if statement.
       * @param ifTrue Continuation if the condition is true.
       * @returns {Macro} This object itself.
       */
      function ifNot(condition, ifTrue) {
        return this.step("if !(".concat(Macro2.makeBALLSPredicate(condition), ")")).step(ifTrue).step("endif");
      }
    )
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value: (
      /**
       * Add a "while" statement to this macro.
       *
       * @param condition The BALLS condition for the if statement.
       * @param contents Loop to repeat while the condition is true.
       * @returns {Macro} This object itself.
       */
      function while_(condition, contents) {
        return this.step("while ".concat(condition)).step(contents).step("endwhile");
      }
    )
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value: (
      /**
       * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
       *
       * @param condition The JS condition.
       * @param ifTrue Continuation to add if the condition is true.
       * @param ifFalse Optional input to turn this into an if...else statement.
       * @returns {Macro} This object itself.
       */
      function externalIf(condition, ifTrue, ifFalse) {
        if (condition)
          return this.step(ifTrue);
        else if (ifFalse)
          return this.step(ifFalse);
        else
          return this;
      }
    )
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value: (
      /**
       * Add a repeat step to the macro.
       *
       * @returns {Macro} This object itself.
       */
      function repeat() {
        return this.step("repeat");
      }
    )
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
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
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value: (
      /**
       * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try casting.
       * @returns {Macro} This object itself.
       */
      function trySkill() {
        for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          skills[_key3] = arguments[_key3];
        }
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
          return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill));
        })));
      }
    )
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value: (
      /**
       * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
       *
       * @param skills Skills to try repeatedly casting.
       * @returns {Macro} This object itself.
       */
      function trySkillRepeat() {
        for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          skills[_key4] = arguments[_key4];
        }
        return this.step.apply(this, _toConsumableArray2(skills.map(function(skill) {
          return Macro2.if_("hasskill ".concat(skillBallsMacroName(skill)), Macro2.skill(skill).repeat());
        })));
      }
    )
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value: (
      /**
       * Add one or more item steps to the macro.
       *
       * @param items Items to use. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function item5() {
        for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          items[_key5] = arguments[_key5];
        }
        return this.step.apply(this, _toConsumableArray2(items.map(function(itemOrItems) {
          return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value: (
      /**
       * Add one or more item steps to the macro, where each step checks to see if you have the item first.
       *
       * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
       * @returns {Macro} This object itself.
       */
      function tryItem() {
        for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          items[_key6] = arguments[_key6];
        }
        return this.step.apply(this, _toConsumableArray2(items.map(function(item5) {
          return Macro2.if_(itemOrItemsBallsMacroPredicate(item5), "use ".concat(itemOrItemsBallsMacroName(item5)));
        })));
      }
    )
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value: (
      /**
       * Add an attack step to the macro.
       *
       * @returns {Macro} This object itself.
       */
      function attack() {
        return this.step("attack");
      }
    )
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
       *
       * @param macro The macro to place in the if_ statement
       * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
       */
      function ifHolidayWanderer(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        if (todaysWanderers.length === 0)
          return this;
        return this.if_(todaysWanderers.map(function(monster) {
          return "monsterid ".concat(monster.id);
        }).join(" || "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value: (
      /**
       * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
       *
       * @param macro The macro to place in the if_ statement.
       * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
       */
      function ifNotHolidayWanderer(macro) {
        var todaysWanderers = getTodaysHolidayWanderers();
        if (todaysWanderers.length === 0)
          return this.step(macro);
        return this.if_(todaysWanderers.map(function(monster) {
          return "!monsterid ".concat(monster.id);
        }).join(" && "), macro);
      }
    )
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
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
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      (0, import_kolmafia6.removeProperty)(Macro2.SAVED_MACRO_PROPERTY);
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
          (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
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
    value: function abort2() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
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
      if (condition instanceof import_kolmafia6.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        ballsCondition = condition.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        ballsCondition = "(".concat(ballsCondition, ")");
      } else if (condition instanceof import_kolmafia6.Effect) {
        ballsCondition = "haseffect ".concat(condition.id);
      } else if (condition instanceof import_kolmafia6.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia6.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof import_kolmafia6.Stat) {
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
    value: function item5() {
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
_defineProperty4(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty4(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty4(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());

// node_modules/libram/dist/maximize.js
var import_kolmafia7 = require("kolmafia");
var _templateObject2;
var _templateObject210;
var _templateObject3;
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
var _templateObject35;
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
var _templateObject49;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
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
function _taggedTemplateLiteral2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
function toMaximizerName(_ref) {
  var name = _ref.name, id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray3(defaultOptions.forceEquip), _toConsumableArray3((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray3(defaultOptions.preventEquip), _toConsumableArray3((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item5) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item5) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item5));
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
  backupcamera: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["Jurassic Parka"])))
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
var cachedSlots = $slots(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
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
    value: function get4(key) {
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
  var stats = $stats(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  if (stats.every(function(value, index) {
    return value === cachedStats[index];
  })) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item5) {
    return (0, import_kolmafia7.canEquip)(item5);
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
    var familiarEquip = entry.equipment.get($slot(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral2(["familiar"]))));
    if (familiarEquip)
      (0, import_kolmafia7.equip)($slot(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper4(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item5 = _step3$value[1];
        if ((0, import_kolmafia7.equippedItem)(slot) !== item5 && (0, import_kolmafia7.availableAmount)(item5) > 0) {
          (0, import_kolmafia7.equip)(slot, item5);
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
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"]))))) {
    (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none);
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"]))))) {
    (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none);
  }
  applyModes(_objectSpread3(_objectSpread3({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["familiar"])))];
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
      }).filter(function(_ref2) {
        var _ref3 = _slicedToArray4(_ref2, 2), item5 = _ref3[1];
        return item5 !== null;
      });
      var desiredSet = desiredSlots.map(function(_ref4) {
        var _ref5 = _slicedToArray4(_ref4, 2), item5 = _ref5[1];
        return item5;
      });
      var equippedSet = desiredSlots.map(function(_ref6) {
        var _ref7 = _slicedToArray4(_ref6, 1), slot = _ref7[0];
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
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"]))))) {
    if (entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)()) {
      if (warn) {
        logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"]))))) {
    if (entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)()) {
      if (warn) {
        logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), "."));
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
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral2(["card-sleeve"])))));
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0) {
    rider.set($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)());
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0) {
    rider.set($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)());
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
    if (options.preventSlot.includes($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
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
    if (!options.onlySlot.includes($slot(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
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
  var objective = _toConsumableArray3(new Set([].concat(_toConsumableArray3(objectives.sort()), _toConsumableArray3(forceEquip.map(function(item5) {
    return '"equip '.concat(toMaximizerName(item5), '"');
  }).sort()), _toConsumableArray3(preventEquip.map(function(item5) {
    return '-"equip '.concat(toMaximizerName(item5), '"');
  }).sort()), _toConsumableArray3(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray3(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray3(Array.from(bonusEquip.entries()).filter(function(_ref8) {
    var _ref9 = _slicedToArray4(_ref8, 2), bonus = _ref9[1];
    return bonus !== 0;
  }).map(function(_ref10) {
    var _ref11 = _slicedToArray4(_ref10, 2), item5 = _ref11[0], bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, ' "bonus ').concat(toMaximizerName(item5), '"');
  }).sort())))).join(", ");
  var untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  });
  var cacheKey = [objective].concat(_toConsumableArray3(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort()), [have($effect(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral2(["Offhand Remarkable"]))))]).join("; ");
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
    get: function get4() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function get4() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     */
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
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value: (
      /**
       * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
       *
       * @returns Whether the maximize call succeeded.
       */
      function maximize2() {
        return maximizeCached(this.maximizeParameters, this.maximizeOptions);
      }
    )
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
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

// node_modules/libram/dist/ascend.js
var import_kolmafia19 = require("kolmafia");

// node_modules/libram/dist/Copier.js
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
var Copier = /* @__PURE__ */ _createClass7(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck7(this, Copier2);
  _defineProperty6(this, "couldCopy", void 0);
  _defineProperty6(this, "prepare", void 0);
  _defineProperty6(this, "canCopy", void 0);
  _defineProperty6(this, "copiedMonster", void 0);
  _defineProperty6(this, "fightCopy", null);
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy)
    this.fightCopy = fightCopy;
});

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
var _templateObject50;
function _taggedTemplateLiteral3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
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
function printModtrace(inputModifiers, baseModifier) {
  var _htmlOutput$match, _htmlOutput$match2;
  var componentColor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "purple";
  var totalColor = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "blue";
  if (typeof inputModifiers === "string")
    return printModtrace([inputModifiers], inputModifiers);
  else if (inputModifiers.length === 0)
    return;
  else if (!baseModifier) {
    return inputModifiers.filter(function(mod1) {
      return !inputModifiers.some(function(mod2) {
        return mod2 !== mod1 && mod1.includes(mod2);
      });
    }).forEach(function(baseMod) {
      return printModtrace(inputModifiers.filter(function(mod) {
        return mod.includes(baseMod);
      }), baseMod);
    });
  }
  var htmlOutput = (0, import_kolmafia8.cliExecuteOutput)("modtrace ".concat(baseModifier));
  var modtraceModifiers = Array.from((_htmlOutput$match = htmlOutput.match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _htmlOutput$match !== void 0 ? _htmlOutput$match : []).map(function(s) {
    return s.slice(1, -5);
  }).slice(2);
  if (!modtraceModifiers.some(function(modifier) {
    return modifier.toLowerCase() === baseModifier.toLowerCase();
  })) {
    return (0, import_kolmafia8.print)("Could not find exact string match of ".concat(baseModifier, " in ").concat(inputModifiers.toString()), "red");
  }
  var initialVal = baseModifier.toLowerCase() === "familiar weight" ? function() {
    var wt = (0, import_kolmafia8.familiarWeight)((0, import_kolmafia8.myFamiliar)());
    (0, import_kolmafia8.print)("[Familiar Weight] Base weight (".concat(wt, ")"));
    return wt;
  }() : 0;
  var modifierVals = new Map(modtraceModifiers.map(function(modifier) {
    return [modifier, initialVal];
  }));
  var lowerCaseModifiers = inputModifiers.map(function(modifier) {
    return modifier.toLowerCase();
  });
  Array.from((_htmlOutput$match2 = htmlOutput.match(RegExp(/<tr>(.*?)<\/tr>/g))) !== null && _htmlOutput$match2 !== void 0 ? _htmlOutput$match2 : []).slice(1).map(function(s) {
    return s.slice(4, -5);
  }).forEach(function(s) {
    var _s$replace$match;
    var rowArr = Array.from((_s$replace$match = s.replace(RegExp(/><\/td>/g), ">0</td>").match(RegExp(/(>)(.*?)(<\/td>)/g))) !== null && _s$replace$match !== void 0 ? _s$replace$match : []).map(function(s2) {
      return s2.slice(1, -5);
    });
    var rowName = rowArr[1];
    rowArr.slice(2).filter(function(e, idx) {
      return idx % 2 === 0;
    }).forEach(function(e, idx) {
      var _modifierVals$get;
      var val = parseFloat(e);
      modifierVals.set(modtraceModifiers[idx], ((_modifierVals$get = modifierVals.get(modtraceModifiers[idx])) !== null && _modifierVals$get !== void 0 ? _modifierVals$get : 0) + val);
      if (val !== 0 && lowerCaseModifiers.includes(modtraceModifiers[idx].toLowerCase())) {
        (0, import_kolmafia8.print)("[".concat(modtraceModifiers[idx], "] ").concat(rowName, " (").concat(val.toFixed(1), ")"));
      }
    });
  });
  var total = sum(modtraceModifiers, function(modifier) {
    if (lowerCaseModifiers.includes(modifier.toLowerCase())) {
      var _modifierVals$get2;
      var modVal = (_modifierVals$get2 = modifierVals.get(modifier)) !== null && _modifierVals$get2 !== void 0 ? _modifierVals$get2 : 0;
      if (have($effect(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral3(["Bow-Legged Swagger"])))) && modifier.includes("Weapon Damage")) {
        (0, import_kolmafia8.print)("[".concat(modifier, "] Bow-Legged Swagger (").concat(modVal.toFixed(1), ")"));
        modVal *= 2;
      }
      (0, import_kolmafia8.print)("".concat(modifier, " => ").concat(modVal.toFixed(1)), componentColor);
      return modVal;
    } else
      return 0;
  });
  (0, import_kolmafia8.print)("Total ".concat(baseModifier, ": ").concat(total.toFixed(1)), totalColor);
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
var _templateObject51;
var _templateObject211;
var _templateObject310;
var _templateObject410;
function _taggedTemplateLiteral4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have2() {
  return have($familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral4(["Crimbo Shrub"]))));
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
  if (!have($item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral4(["box of old Crimbo decorations"]))))) {
    (0, import_kolmafia9.useFamiliar)($familiar(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral4(["Crimbo Shrub"]))));
  }
  directlyUse($item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral4(["box of old Crimbo decorations"]))));
  (0, import_kolmafia9.visitUrl)("choice.php?whichchoice=999&pwd=&option=1&topper=".concat(Toppers[topper], "&lights=").concat(Lights[lights], "&garland=").concat(Garland[garland], "&gift=").concat(Gifts[gifts]));
  return isDecoratedWith(topper, lights, garland, gifts);
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
var _templateObject52;
var _templateObject213;
var _templateObject311;
var _templateObject411;
var _templateObject53;
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
var _templateObject214;
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
var _templateObject352;
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
var _templateObject512;
var _templateObject522;
var _templateObject532;
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
function _iterableToArrayLimit5(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
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
var lab = $item(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral5(["Little Geneticist DNA-Splicing Lab"])));
function have3() {
  return have(lab) || (0, import_kolmafia10.getWorkshed)() === lab;
}
function installed() {
  return (0, import_kolmafia10.getWorkshed)() === lab;
}
var phylaEffects = /* @__PURE__ */ new Map([[$phylum(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral5(["beast"]))), $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral5(["Human-Beast Hybrid"])))], [$phylum(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral5(["bug"]))), $effect(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral5(["Human-Insect Hybrid"])))], [$phylum(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral5(["constellation"]))), $effect(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral5(["Human-Constellation Hybrid"])))], [$phylum(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral5(["construct"]))), $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral5(["Human-Machine Hybrid"])))], [$phylum(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral5(["demon"]))), $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral5(["Human-Demon Hybrid"])))], [$phylum(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral5(["dude"]))), $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral5(["Human-Human Hybrid"])))], [$phylum(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral5(["elemental"]))), $effect(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral5(["Human-Elemental Hybrid"])))], [$phylum(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral5(["elf"]))), $effect(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral5(["Human-Elf Hybrid"])))], [$phylum(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral5(["fish"]))), $effect(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral5(["Human-Fish Hybrid"])))], [$phylum(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral5(["goblin"]))), $effect(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral5(["Human-Goblin Hybrid"])))], [$phylum(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral5(["hippy"]))), $effect(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral5(["Human-Hobo Hybrid"])))], [$phylum(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral5(["horror"]))), $effect(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral5(["Human-Horror Hybrid"])))], [$phylum(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral5(["humanoid"]))), $effect(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral5(["Human-Humanoid Hybrid"])))], [$phylum(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral5(["mer-kin"]))), $effect(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral5(["Human-Mer-kin Hybrid"])))], [$phylum(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral5(["orc"]))), $effect(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral5(["Human-Orc Hybrid"])))], [$phylum(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral5(["penguin"]))), $effect(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral5(["Human-Penguin Hybrid"])))], [$phylum(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral5(["pirate"]))), $effect(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral5(["Human-Pirate Hybrid"])))], [$phylum(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral5(["plant"]))), $effect(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral5(["Human-Plant Hybrid"])))], [$phylum(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral5(["slime"]))), $effect(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral5(["Human-Slime Hybrid"])))], [$phylum(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral5(["undead"]))), $effect(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral5(["Human-Undead Hybrid"])))], [$phylum(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral5(["weird"]))), $effect(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral5(["Human-Weird Thing Hybrid"])))]]);
var phylaTonics = /* @__PURE__ */ new Map([[$phylum(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral5(["beast"]))), $item(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral5(["Gene Tonic: Beast"])))], [$phylum(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral5(["bug"]))), $item(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral5(["Gene Tonic: Insect"])))], [$phylum(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral5(["constellation"]))), $item(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral5(["Gene Tonic: Constellation"])))], [$phylum(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral5(["construct"]))), $item(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral5(["Gene Tonic: Construct"])))], [$phylum(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral5(["demon"]))), $item(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral5(["Gene Tonic: Demon"])))], [$phylum(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral5(["dude"]))), $item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral5(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral5(["elemental"]))), $item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral5(["Gene Tonic: Elemental"])))], [$phylum(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral5(["elf"]))), $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral5(["Gene Tonic: Elf"])))], [$phylum(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral5(["fish"]))), $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral5(["Gene Tonic: Fish"])))], [$phylum(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral5(["goblin"]))), $item(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral5(["Gene Tonic: Goblin"])))], [$phylum(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral5(["hippy"]))), $item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral5(["Gene Tonic: Hobo"])))], [$phylum(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral5(["horror"]))), $item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral5(["Gene Tonic: Horror"])))], [$phylum(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral5(["humanoid"]))), $item(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral5(["Gene Tonic: Humanoid"])))], [$phylum(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral5(["mer-kin"]))), $item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral5(["Gene Tonic: Mer-kin"])))], [$phylum(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral5(["orc"]))), $item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral5(["Gene Tonic: Orc"])))], [$phylum(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral5(["penguin"]))), $item(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral5(["Gene Tonic: Penguin"])))], [$phylum(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral5(["pirate"]))), $item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral5(["Gene Tonic: Pirate"])))], [$phylum(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral5(["plant"]))), $item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral5(["Gene Tonic: Plant"])))], [$phylum(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral5(["slime"]))), $item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral5(["Gene Tonic: Slime"])))], [$phylum(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral5(["undead"]))), $item(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral5(["Gene Tonic: Undead"])))], [$phylum(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral5(["weird"]))), $item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral5(["Gene Tonic: Weird"])))]]);
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

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have5;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
var import_kolmafia12 = require("kolmafia");
var _templateObject86;
var _templateObject215;
var _templateObject314;
var _templateObject413;
var _templateObject510;
var _templateObject610;
var _templateObject710;
var _templateObject87;
var _templateObject94;
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
var _templateObject216;
var _templateObject224;
var _templateObject234;
var _templateObject244;
var _templateObject254;
var _templateObject264;
var _templateObject274;
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
function _taggedTemplateLiteral6(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral6(["Source terminal"])));
function have5() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral6(["items.enh"]))),
  Meat: $effect(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral6(["meat.enh"]))),
  Init: $effect(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral6(["init.enh"]))),
  Critical: $effect(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral6(["critical.enh"]))),
  Damage: $effect(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral6(["damage.enh"]))),
  Substats: $effect(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral6(["substats.enh"])))
};
function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }
  return (0, import_kolmafia12.cliExecute)("terminal enhance ".concat(buff.name));
}
var RolloverBuffs = {
  /** +5 Familiar Weight */
  Familiar: $effect(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral6(["familiar.enq"]))),
  /** +25 ML */
  Monsters: $effect(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral6(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral6(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral6(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  if (!Object.values(RolloverBuffs).includes(rolloverBuff)) {
    return false;
  }
  return (0, import_kolmafia12.cliExecute)("terminal enquiry ".concat(rolloverBuff.name));
}
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral6(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral6(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral6(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral6(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral6(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral6(["Turbo"])))
};
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills()))
    return true;
  var _iterator = _createForOfIteratorHelper5(skillsArray), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill))
        return false;
      (0, import_kolmafia12.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(function(s) {
    return s !== "";
  }).map(function(s) {
    return import_kolmafia12.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(function(skill) {
    return currentSkills.includes(skill);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral6(["browser cookie"]))), "food.ext"], [$item(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral6(["hacked gibson"]))), "booze.ext"], [$item(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral6(["Source shades"]))), "goggles.ext"], [$item(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral6(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral6(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral6(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral6(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral6(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral6(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral6(["software bug"]))), "familiar.ext"]]);
function extrude(item5) {
  var fileName = Items.get(item5);
  if (!fileName)
    return false;
  return (0, import_kolmafia12.cliExecute)("terminal extrude ".concat(fileName));
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
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
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
  return (0, import_kolmafia12.myPath)() === import_kolmafia12.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
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
  fightPiece: function() {
    return fightPiece;
  },
  fightsDone: function() {
    return fightsDone;
  },
  have: function() {
    return have6;
  },
  pieces: function() {
    return pieces;
  }
});
var import_kolmafia13 = require("kolmafia");
var _templateObject88;
function _taggedTemplateLiteral7(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral7(["Witchess Set"])));
function have6() {
  return haveInCampground(item2);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = import_kolmafia13.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece))
    throw new Error("That is not a valid piece.");
  if (!(0, import_kolmafia13.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!(0, import_kolmafia13.runChoice)(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!(0, import_kolmafia13.visitUrl)("choice.php?option=1&pwd=".concat((0, import_kolmafia13.myHash)(), "&whichchoice=1182&piece=").concat(piece.id), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  return (0, import_kolmafia13.runCombat)();
}

// node_modules/libram/dist/resources/2017/MummingTrunk.js
var MummingTrunk_exports = {};
__export(MummingTrunk_exports, {
  currentCostumes: function() {
    return currentCostumes;
  }
});
var import_kolmafia14 = require("kolmafia");
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
function toModifier(input) {
  var regExp = new RegExp(/Experience \((.*?)\)/);
  var matcher = input.match(regExp);
  return matcher ? "".concat(matcher[2], " Experience") : input;
}
function currentCostumes() {
  var entries = get("_mummeryMods").split(",");
  var returnValue = /* @__PURE__ */ new Map();
  var regExp = new RegExp(/([^:]+): \[(\d+)\*fam\(([^)]+)\)\]/);
  var _iterator = _createForOfIteratorHelper6(entries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var entry = _step.value;
      var matcher = entry.match(regExp);
      if (matcher) {
        returnValue.set((0, import_kolmafia14.toFamiliar)(matcher[3]), [toModifier(matcher[1]), parseInt(matcher[2])]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return returnValue;
}

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get3;
  },
  set: function() {
    return set;
  }
});
var import_kolmafia15 = require("kolmafia");
function get3(counter) {
  var value = (0, import_kolmafia15.getCounter)(counter);
  if (value === -1) {
    return (0, import_kolmafia15.getCounters)(counter, -1, -1).trim() === "" ? Infinity : -1;
  }
  return value;
}
function exists(counter) {
  return (0, import_kolmafia15.getCounter)(counter) !== -1 || (0, import_kolmafia15.getCounters)(counter, -1, -1).trim() !== "";
}
function set(counter, duration) {
  (0, import_kolmafia15.cliExecute)("counters add ".concat(duration, " ").concat(counter));
  return get3(counter) !== null;
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have7;
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
var import_kolmafia16 = require("kolmafia");
var _templateObject89;
function _taggedTemplateLiteral8(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = $item(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral8(["SongBoom\u2122 BoomBox"])));
function have7() {
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
    (0, import_kolmafia16.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none"));
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
    return have8;
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
var import_kolmafia17 = require("kolmafia");
var _templateObject90;
var _templateObject217;
var _templateObject315;
var _templateObject414;
var _templateObject511;
var _templateObject611;
var _templateObject711;
var _templateObject810;
var _templateObject95;
function _taggedTemplateLiteral9(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item4 = import_kolmafia17.Item.get("autumn-aton");
function available() {
  return (0, import_kolmafia17.availableAmount)(item4) > 0;
}
function have8() {
  return get("hasAutumnaton") || available();
}
function checkLocations(html) {
  return (0, import_kolmafia17.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/text()').map(function(name) {
    return (0, import_kolmafia17.toLocation)(name);
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!available())
    return null;
  var pageHtml = directlyUse(item4);
  if (upgrade2 && (0, import_kolmafia17.availableChoiceOptions)()[1])
    (0, import_kolmafia17.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof import_kolmafia17.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return locationsAvailable.includes(l);
  }) : target(locationsAvailable);
  if (!location)
    return null;
  if (!locationsAvailable.includes(location))
    return null;
  if (!(0, import_kolmafia17.handlingChoice)())
    directlyUse(item4);
  (0, import_kolmafia17.runChoice)(2, "heythereprogrammer=".concat(location.id));
  if ((0, import_kolmafia17.handlingChoice)())
    (0, import_kolmafia17.visitUrl)("main.php");
  return location;
}
function upgrade() {
  directlyUse(item4);
  var canUpgrade = (0, import_kolmafia17.availableChoiceOptions)()[1] !== void 0;
  if (canUpgrade)
    (0, import_kolmafia17.runChoice)(1);
  (0, import_kolmafia17.visitUrl)("main.php");
  return canUpgrade;
}
function availableLocations() {
  if (!available())
    return [];
  var pageHtml = directlyUse(item4);
  (0, import_kolmafia17.visitUrl)("main.php");
  return checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia17.totalTurnsPlayed)();
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
      item: $item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral9(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral9(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral9(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral9(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral9(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral9(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral9(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral9(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral9(["autumn years wisdom"])))
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
var CombatLoversLocket_exports = {};
__export(CombatLoversLocket_exports, {
  availableLocketMonsters: function() {
    return availableLocketMonsters;
  },
  findMonster: function() {
    return findMonster;
  },
  have: function() {
    return have9;
  },
  monstersReminisced: function() {
    return monstersReminisced;
  },
  reminisce: function() {
    return reminisce;
  },
  reminiscesLeft: function() {
    return reminiscesLeft;
  },
  unlockedLocketMonsters: function() {
    return unlockedLocketMonsters;
  }
});
var import_kolmafia18 = require("kolmafia");
var _templateObject91;
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
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
function _iterableToArrayLimit6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral10(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var locket = $item(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral10(["combat lover's locket"])));
function have9() {
  return have(locket);
}
function availableLocketMonsters() {
  if (reminiscesLeft() === 0)
    return [];
  return Object.entries((0, import_kolmafia18.getLocketMonsters)()).filter(function(_ref) {
    var _ref2 = _slicedToArray6(_ref, 2), unused = _ref2[1];
    return unused;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray6(_ref3, 1), name = _ref4[0];
    return (0, import_kolmafia18.toMonster)(name);
  });
}
function unlockedLocketMonsters() {
  return Object.entries((0, import_kolmafia18.getLocketMonsters)()).map(function(_ref5) {
    var _ref6 = _slicedToArray6(_ref5, 1), name = _ref6[0];
    return (0, import_kolmafia18.toMonster)(name);
  });
}
function parseLocketProperty() {
  return get("_locketMonstersFought").split(",").filter(function(id) {
    return id.trim().length > 0;
  });
}
function reminiscesLeft() {
  return have9() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
function monstersReminisced() {
  return parseLocketProperty().map(function(id) {
    return (0, import_kolmafia18.toMonster)(id);
  });
}
function reminisce(monster) {
  if (!have9() || reminiscesLeft() === 0 || !(0, import_kolmafia18.getLocketMonsters)()[monster.name]) {
    return false;
  }
  (0, import_kolmafia18.cliExecute)("reminisce ".concat(monster));
  (0, import_kolmafia18.runCombat)();
  return monstersReminisced().includes(monster);
}
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    return 1;
  };
  if (!have9() || reminiscesLeft() === 0)
    return null;
  var options = availableLocketMonsters().filter(criteria);
  if (!options.length)
    return null;
  return options.reduce(function(a, b) {
    return value(a) > value(b) ? a : b;
  });
}

// node_modules/libram/dist/ascend.js
var _templateObject96;
var _templateObject218;
var _templateObject316;
var _templateObject415;
var _templateObject513;
var _templateObject612;
function _createForOfIteratorHelper7(o, allowArrayLike) {
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
function _taggedTemplateLiteral11(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
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
function _classCallCheck8(instance, Constructor) {
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
function _possibleConstructorReturn3(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized3(self);
}
function _assertThisInitialized3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
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
function _iterableToArrayLimit7(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(arr) {
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
  return new Map(Array.from(Object.entries((0, import_kolmafia19.getPermedSkills)())).map(function(_ref) {
    var _ref2 = _slicedToArray7(_ref, 2), skillName = _ref2[0], isHardcore = _ref2[1];
    return [(0, import_kolmafia19.toSkill)(skillName), isHardcore ? Lifestyle.hardcore : Lifestyle.softcore];
  }));
}
var AscendError = /* @__PURE__ */ function(_Error) {
  _inherits3(AscendError2, _Error);
  var _super = _createSuper3(AscendError2);
  function AscendError2(cause) {
    var _this;
    _classCallCheck8(this, AscendError2);
    if (!cause) {
      _this = _super.call(this, "Failed to ascend--do you have a pending trade offer?");
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia19.Skill) {
      var reason = cause.permable ? (0, import_kolmafia19.haveSkill)(cause) ? "too karmaically expensive" : "not a skill you currently know" : "unpermable";
      _this = _super.call(this, "Skill ".concat(cause, " is ").concat(reason, "!"));
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia19.Item) {
      _this = _super.call(this, "Invalid astral item: ".concat(cause, "!"));
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia19.Class) {
      _this = _super.call(this, "Invalid class ".concat(cause, " for this path!"));
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    } else if (cause instanceof import_kolmafia19.Path) {
      _this = _super.call(this, "Invalid path ".concat(cause, "!"));
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    } else {
      _this = _super.call(this, cause);
      _defineProperty7(_assertThisInitialized3(_this), "cause", void 0);
    }
    _this.cause = cause;
    return _possibleConstructorReturn3(_this);
  }
  return _createClass8(AscendError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
var gardens = ["packet of pumpkin seeds", "Peppermint Pip Packet", "packet of dragon's teeth", "packet of beer seeds", "packet of winter seeds", "packet of thanksgarden seeds", "packet of tall grass seeds", "packet of mushroom spores", "packet of rock seeds"];
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
    _classCallCheck8(this, AscensionPrepError2);
    if (isGarden(cause)) {
      _this2 = _super2.call(this, "Unable to swap garden to ".concat(cause, "; garden is currently ").concat(original, "."));
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isEudora(cause)) {
      _this2 = _super2.call(this, "Unable to swap eudora to ".concat(cause, "; eudora is currently ").concat(original, "."));
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isDesk(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau desk to ".concat(cause, "; desk is currently ").concat(original, "."));
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isNightstand(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau nightstand to ".concat(cause, "; nightstand is currently ").concat(original, "."));
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    } else if (isCeiling(cause)) {
      _this2 = _super2.call(this, "Unable to swap chateau ceiling to ".concat(cause, "; ceiling is currently ").concat(original, "."));
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    } else {
      _this2 = _super2.call(this, cause);
      _defineProperty7(_assertThisInitialized3(_this2), "cause", void 0);
    }
    _this2.cause = cause;
    return _possibleConstructorReturn3(_this2);
  }
  return _createClass8(AscensionPrepError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
var MoonSigns = ["Mongoose", "Wallaby", "Vole", "Platypus", "Opossum", "Marmot", "Wombat", "Blender", "Packrat"];
function signNameToId(moon) {
  return MoonSigns.indexOf(moon) + 1;
}
function inputToMoonId(moon, playerClass) {
  if (typeof moon === "number")
    return moon;
  var offset = function() {
    switch (playerClass.primestat) {
      case $stat(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral11(["Muscle"]))):
        return 0;
      case $stat(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral11(["Mysticality"]))):
        return 1;
      case $stat(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral11(["Moxie"]))):
        return 2;
      default:
        throw new AscendError("unknown prime stat for ".concat(playerClass));
    }
  };
  var fromNormalInput = signNameToId(tc(moon));
  if (fromNormalInput > 0)
    return fromNormalInput;
  switch (moon.toLowerCase()) {
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
  var charPaneText = (0, import_kolmafia19.visitUrl)("charpane.php");
  var matches = charPaneText.match(/<img src="[^"]*\/otherimages\/inf_\w+\.gif">/);
  return matches !== null;
}
function ascend(path, playerClass, lifestyle, moon) {
  var consumable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : $item(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral11(["astral six-pack"])));
  var pet = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : void 0;
  var permOptions = arguments.length > 6 ? arguments[6] : void 0;
  if (playerClass.path !== (path.avatar ? path : import_kolmafia19.Path.none)) {
    throw new AscendError(playerClass);
  }
  if (path.id < 0)
    throw new AscendError(path);
  var moonId = inputToMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9)
    throw new Error("Invalid moon ".concat(moon));
  if (consumable && !$items(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral11(["astral six-pack, astral hot dog dinner, [10882]carton of astral energy drinks"]))).includes(consumable)) {
    throw new AscendError(consumable);
  }
  if (pet && !$items(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral11(["astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) {
    throw new AscendError(pet);
  }
  var illegalSkill = permOptions ? Array.from(permOptions.permSkills.keys()).find(function(skill2) {
    return !skill2.permable || !(0, import_kolmafia19.haveSkill)(skill2);
  }) : void 0;
  if (illegalSkill) {
    throw new AscendError(illegalSkill);
  }
  if (!isInValhalla()) {
    (0, import_kolmafia19.visitUrl)("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!isInValhalla()) {
    throw new AscendError();
  }
  (0, import_kolmafia19.visitUrl)("afterlife.php?action=pearlygates");
  if (consumable) {
    (0, import_kolmafia19.visitUrl)("afterlife.php?action=buydeli&whichitem=".concat(consumable.id));
  }
  if (pet)
    (0, import_kolmafia19.visitUrl)("afterlife.php?action=buyarmory&whichitem=".concat(pet.id));
  if (permOptions) {
    var currentPerms = permedSkills();
    var karma = get("bankedKarma");
    var _iterator = _createForOfIteratorHelper7(permOptions.permSkills.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _currentPerms$get;
        var _step$value = _slicedToArray7(_step.value, 2), skill = _step$value[0], prospectivePermLevel = _step$value[1];
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
          (0, import_kolmafia19.visitUrl)("afterlife.php?action=".concat(permText, "&whichskill=").concat(skill.id));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  (0, import_kolmafia19.visitUrl)("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=2&whichclass=").concat(playerClass.id, "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&lamesignok=1&pwd"), true);
}
function prepareAscension() {
  var _throwOnFail;
  var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, garden = _ref3.garden, eudora = _ref3.eudora, chateau = _ref3.chateau, throwOnFail = _ref3.throwOnFail;
  throwOnFail = (_throwOnFail = throwOnFail) !== null && _throwOnFail !== void 0 ? _throwOnFail : true;
  if (garden && !Object.getOwnPropertyNames((0, import_kolmafia19.getCampground)()).includes(garden)) {
    (0, import_kolmafia19.use)(import_kolmafia19.Item.get(garden));
    var gardenName = Object.getOwnPropertyNames((0, import_kolmafia19.getCampground)()).find(isGarden);
    if (gardenName !== garden && throwOnFail) {
      throw new AscensionPrepError(garden, gardenName);
    }
  }
  if (eudora && (0, import_kolmafia19.eudoraItem)().name !== eudora) {
    var eudoraNumber = 1 + eudorae.indexOf(eudora);
    if (!(0, import_kolmafia19.xpath)((0, import_kolmafia19.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(eudoraNumber.toString()) && throwOnFail) {
      throw new AscensionPrepError("Unable to swap eudora to ".concat(eudora, " because you are not subscribed to it."));
    } else {
      (0, import_kolmafia19.visitUrl)("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
    }
    if ((0, import_kolmafia19.eudoraItem)() !== import_kolmafia19.Item.get(eudora) && throwOnFail) {
      throw new AscensionPrepError(eudora, (0, import_kolmafia19.eudoraItem)());
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
var import_html_entities = __toESM(require_lib());
var import_kolmafia20 = require("kolmafia");
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread4();
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
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
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
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
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
function _wrapRegExp() {
  _wrapRegExp = function _wrapRegExp2(e2, r2) {
    return new BabelRegExp(e2, void 0, r2);
  };
  var e = RegExp.prototype, r = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(e2, t, p) {
    var o = new RegExp(e2, t);
    return r.set(o, p || r.get(e2)), _setPrototypeOf4(o, BabelRegExp.prototype);
  }
  function buildGroups(e2, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function(r2, t2) {
      var o = p[t2];
      if ("number" == typeof o)
        r2[t2] = e2[o];
      else {
        for (var i = 0; void 0 === e2[o[i]] && i + 1 < o.length; )
          i++;
        r2[t2] = e2[o[i]];
      }
      return r2;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits4(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(r2) {
    var t = e.exec.call(this, r2);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function(t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function(e2, r2) {
        var t2 = o[r2];
        return "$" + (Array.isArray(t2) ? t2.join("$") : t2);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function() {
        var e2 = arguments;
        return "object" != typeof e2[e2.length - 1] && (e2 = [].slice.call(e2)).push(buildGroups(e2, i)), p.apply(this, e2);
      });
    }
    return e[Symbol.replace].call(this, t, p);
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
  return typeof player === "string" ? (0, import_kolmafia20.getPlayerId)(player) : player;
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
    _classCallCheck9(this, Clan2);
    _defineProperty8(this, "id", void 0);
    _defineProperty8(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  _createClass9(Clan2, [{
    key: "_check",
    value: function _check() {
      if (this.id !== (0, import_kolmafia20.getClanId)()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function join() {
      return Clan2.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function check() {
      return (0, import_kolmafia20.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = (0, import_kolmafia20.visitUrl)("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray8(lastFax, 4), monsterName = _lastFax[3];
      if (!monsterName)
        return null;
      return import_kolmafia20.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = (0, import_kolmafia20.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia20.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>");
        var match = (0, import_kolmafia20.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = (0, import_kolmafia20.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray8(match, 3), encodedName = _match[1], degree = _match[2];
        return {
          name: (0, import_html_entities.decode)(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
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
      var result = (0, import_kolmafia20.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = (0, import_kolmafia20.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = (0, import_kolmafia20.visitUrl)("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray8(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = (0, import_kolmafia20.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach(function(quantity, item5) {
        var needed = Math.max(0, quantity - (0, import_kolmafia20.availableAmount)(item5));
        if (needed === 0) {
          return map.set(item5, 0);
        }
        var foldGroup = getFoldGroup(item5);
        var _iterator = _createForOfIteratorHelper8(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, (0, import_kolmafia20.availableAmount)(foldable));
            for (var _i2 = 0; _i2 < quantityToFold; _i2++) {
              (0, import_kolmafia20.cliExecute)("fold ".concat(item5.name));
              needed--;
            }
            return map.set(item5, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia20.refreshStash)();
        for (var _i = 0, _arr = [item5].concat(_toConsumableArray4(foldGroup)); _i < _arr.length; _i++) {
          var matchingItem = _arr[_i];
          var quantityToTake = Math.min(needed, (0, import_kolmafia20.stashAmount)(matchingItem));
          if (quantityToTake === 0)
            continue;
          if (!(0, import_kolmafia20.takeStash)(quantityToTake, matchingItem))
            return;
          if (matchingItem === item5) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              (0, import_kolmafia20.cliExecute)("fold ".concat(matchingItem.name));
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
      map.forEach(function(quantity, item5) {
        (0, import_kolmafia20.retrieveItem)(quantity, item5);
        var returned = Math.min(quantity, (0, import_kolmafia20.availableAmount)(item5));
        (0, import_kolmafia20.putStash)(returned, item5);
        map.set(item5, quantity - returned);
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
      var result = (0, import_kolmafia20.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
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
          map.forEach(function(quantity, item5) {
            var remaining = quantity - (returned.get(item5) || 0);
            if (remaining > 0) {
              map.set(item5, remaining);
            } else {
              map.delete(item5);
            }
          });
          if (map.size > 0) {
            logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia20.getClanName)().toLowerCase()) {
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
        if (clanId === (0, import_kolmafia20.getClanId)()) {
          return Clan2.get();
        }
      }
      return Clan2._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
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
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function get4() {
      return new Clan2((0, import_kolmafia20.getClanId)(), (0, import_kolmafia20.getClanName)());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = (0, import_kolmafia20.visitUrl)("clan_signup.php");
      return (0, import_kolmafia20.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt((0, import_kolmafia20.xpath)(validHtml, "//@value")[0]);
        var name = (0, import_html_entities.decode)((0, import_kolmafia20.xpath)(validHtml, "//text()")[0]);
        return new Clan2(id, name);
      });
    }
  }]);
  return Clan2;
}();

// node_modules/libram/dist/challengePaths/2015/CommunityService.js
var import_kolmafia21 = require("kolmafia");
var _templateObject97;
var _templateObject219;
var _templateObject317;
var _templateObject416;
var _templateObject514;
var _templateObject613;
var _templateObject712;
var _class;
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
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
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
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _taggedTemplateLiteral12(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var thralls = /* @__PURE__ */ new Map([[$stat(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral12(["muscle"]))), $thrall(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral12(["Elbow Macaroni"])))], [$stat(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral12(["moxie"]))), $thrall(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral12(["Penne Dreadful"])))]]);
var statCommunityServicePredictor = function(stat) {
  return function() {
    return 60 - Math.floor(1 / 30 * ((0, import_kolmafia21.myBuffedstat)(stat) - (0, import_kolmafia21.myBasestat)(thralls.get(stat) === (0, import_kolmafia21.myThrall)() && !have($effect(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral12(["Expert Oiliness"])))) ? $stat(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral12(["mysticality"]))) : stat)));
  };
};
var visitCouncil = function() {
  return (0, import_kolmafia21.visitUrl)("council.php");
};
var baseWeight = function() {
  return have($effect(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral12(["Fidoxene"])))) ? 20 : (0, import_kolmafia21.familiarWeight)((0, import_kolmafia21.myFamiliar)());
};
var CommunityService = /* @__PURE__ */ function() {
  function CommunityService2(id, stat, property, predictor, maximizeRequirements) {
    _classCallCheck10(this, CommunityService2);
    _defineProperty9(this, "choice", void 0);
    _defineProperty9(this, "stat", void 0);
    _defineProperty9(this, "property", void 0);
    _defineProperty9(this, "predictor", void 0);
    _defineProperty9(this, "maximizeRequirements", void 0);
    _defineProperty9(this, "timer", null);
    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  _createClass10(CommunityService2, [{
    key: "id",
    get: function get4() {
      return this.choice;
    }
    /**
     * @returns The primary stat the test measures, used primarily as memorable shorthand in place of test names.
     */
  }, {
    key: "statName",
    get: function get4() {
      return this.stat;
    }
    /**
     * @returns The name of the test, used primarily as part of the string property "csServicesPerformed"
     */
  }, {
    key: "name",
    get: function get4() {
      return this.property;
    }
    /**
     *  @returns The predicted number of turns this test will take given your character's current state.
     */
  }, {
    key: "prediction",
    get: function get4() {
      return this.predictor();
    }
    /**
     * @returns A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
     */
  }, {
    key: "requirement",
    get: function get4() {
      return this.maximizeRequirements;
    }
    /**
     * Start the time & turn counter for the Test in question.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this$timer;
      (_this$timer = this.timer) !== null && _this$timer !== void 0 ? _this$timer : this.timer = {
        time: Date.now(),
        turns: (0, import_kolmafia21.myTurncount)()
      };
    }
  }, {
    key: "isDone",
    value: (
      /**
       * Checks the "csServicesPerformed" property to see whether mafia currently believes this test is complete.
       *
       * @returns Whether mafia currently believes this test is complete.
       */
      function isDone() {
        return get("csServicesPerformed").includes(this.property);
      }
    )
    /**
     * Maximizes based on the Requirement associated with this particular test.
     */
  }, {
    key: "maximize",
    value: function maximize2() {
      if (this.maximizeRequirements)
        this.maximizeRequirements.maximize();
    }
    /**
     * Attempts to turn in the test to the Council of Loathing.
     *
     * @returns Whether mafia believes the test is complete at the end of this function.
     */
  }, {
    key: "do",
    value: function _do() {
      if (get("csServicesPerformed").trim().length === 0)
        visitCouncil();
      visitCouncil();
      var councilText = (0, import_kolmafia21.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
    /**
     * Wrapper function that prepares for a test and then completes it, adding time and turn details to the log.
     *
     * @param prepare A function that does all necessary preparations for this CS test, including choosing your outfit. Optionally returns the number of turns you expect to spend preparing for the test.
     * @param maxTurns We will run the test iff the predicted/actual turns is less than or equal to this parameter.
     * @returns "completed", "failed", or "already completed".
     */
  }, {
    key: "run",
    value: function run(prepare) {
      var _this$timer2;
      var maxTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      if (this.isDone())
        return "already completed";
      var _ref = (_this$timer2 = this.timer) !== null && _this$timer2 !== void 0 ? _this$timer2 : {
        time: Date.now(),
        turns: (0, import_kolmafia21.myTurncount)()
      }, time = _ref.time, turns = _ref.turns;
      var additionalTurns;
      try {
        var result = prepare();
        additionalTurns = typeof result === "number" ? result : 0;
      } catch (e) {
        (0, import_kolmafia21.print)("".concat(e), "red");
        return "failed";
      }
      var prediction = this.predictor();
      var council = visitCouncil();
      var turnCost = this._actualCost(council);
      if (!turnCost)
        return "already completed";
      if (turnCost > Math.min(maxTurns, (0, import_kolmafia21.myAdventures)())) {
        return "failed";
      }
      if (!this.do())
        return "failed";
      CommunityService2.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0, import_kolmafia21.myTurncount)() - turns,
        seconds: (Date.now() - time) / 1e3,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
    /**
     * Checks council.php to verify that a test is complete; more reliable than isDone, but requires an additional pagehit.
     *
     * @returns Whether council.php suggests that the test is complete.
     */
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
    /**
     * Checks council.php for the number of turns this test will take; more reliable than prediction, but requires an additional pagehit.
     *
     * @returns The number of turns to complete this test according to council.php.
     */
  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
    /**
     * A log of the predicted turns, actual turns, and duration of each CS test performed.
     */
  }], [{
    key: "startTimer",
    value: (
      /**
       * Start the time & turn counter for the given task
       *
       * @param name The name of the task to start the counter of
       */
      function startTimer(name) {
        if (!this.taskTimers.has(name)) {
          this.taskTimers.set(name, {
            time: Date.now(),
            turns: (0, import_kolmafia21.myTurncount)()
          });
        }
      }
    )
  }, {
    key: "logTask",
    value: function logTask(name, action) {
      var _this$taskTimers$get, _action;
      var _ref2 = (_this$taskTimers$get = this.taskTimers.get(name)) !== null && _this$taskTimers$get !== void 0 ? _this$taskTimers$get : {
        time: Date.now(),
        turns: (0, import_kolmafia21.myTurncount)()
      }, time = _ref2.time, turns = _ref2.turns;
      var estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService2.log[name] = {
        type: "task",
        turnCost: (0, import_kolmafia21.myTurncount)() - turns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - time) / 1e3
      };
    }
  }, {
    key: "printLog",
    value: (
      /**
       * Prints turncount and time details of the test in question.
       *
       * @param colour The colour (or color) you'd like the log to be printed in.
       */
      function printLog() {
        var colour = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blue";
        var logEntries = Object.entries(CommunityService2.log);
        for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
          var _logEntries$_i = _slicedToArray9(_logEntries[_i], 2), testName = _logEntries$_i[0], testEntry = _logEntries$_i[1];
          var type = testEntry.type, predictedTurns = testEntry.predictedTurns, turnCost = testEntry.turnCost, seconds = testEntry.seconds;
          if (type === "test") {
            (0, import_kolmafia21.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
            (0, import_kolmafia21.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
          } else {
            if (!(predictedTurns === 0 && turnCost === 0)) {
              (0, import_kolmafia21.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
            }
            (0, import_kolmafia21.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
          }
        }
        var totalTime = sum(logEntries, function(_ref3) {
          var _ref4 = _slicedToArray9(_ref3, 2), testEntry2 = _ref4[1];
          return testEntry2.seconds;
        });
        (0, import_kolmafia21.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
      }
    )
    // Below, we have the tests themselves.
  }]);
  return CommunityService2;
}();
_class = CommunityService;
_defineProperty9(CommunityService, "taskTimers", /* @__PURE__ */ new Map());
_defineProperty9(CommunityService, "log", {});
_defineProperty9(CommunityService, "HP", new _class(1, "HP", "Donate Blood", function() {
  return 60 - Math.floor(((0, import_kolmafia21.myMaxhp)() - (0, import_kolmafia21.myBuffedstat)($stat(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral12(["muscle"])))) - 3) / 30);
}, new Requirement(["HP"], {})));
_defineProperty9(CommunityService, "Muscle", new _class(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral12(["Muscle"])))), new Requirement(["Muscle"], {})));
_defineProperty9(CommunityService, "Mysticality", new _class(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral12(["Mysticality"])))), new Requirement(["Mysticality"], {})));
_defineProperty9(CommunityService, "Moxie", new _class(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral12(["Moxie"])))), new Requirement(["Moxie"], {})));
_defineProperty9(CommunityService, "FamiliarWeight", new _class(5, "Familiar Weight", "Breed More Collies", function() {
  return 60 - Math.floor((baseWeight() + (0, import_kolmafia21.weightAdjustment)()) / 5);
}, new Requirement(["Familiar Weight"], {})));
_defineProperty9(CommunityService, "WeaponDamage", new _class(6, "Weapon Damage", "Reduce Gazelle Population", function() {
  var weaponPower = (0, import_kolmafia21.getPower)((0, import_kolmafia21.equippedItem)($slot(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral12(["weapon"])))));
  var offhandPower = (0, import_kolmafia21.toSlot)((0, import_kolmafia21.equippedItem)($slot(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral12(["off-hand"]))))) === $slot(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral12(["weapon"]))) ? (0, import_kolmafia21.getPower)((0, import_kolmafia21.equippedItem)($slot(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral12(["off-hand"]))))) : 0;
  var familiarPower = (0, import_kolmafia21.toSlot)((0, import_kolmafia21.equippedItem)($slot(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral12(["familiar"]))))) === $slot(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral12(["weapon"]))) ? (0, import_kolmafia21.getPower)((0, import_kolmafia21.equippedItem)($slot(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral12(["familiar"]))))) : 0;
  var multiplier = have($effect(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral12(["Bow-Legged Swagger"])))) ? 2 : 1;
  return 60 - Math.floor(multiplier * (get2("Weapon Damage") - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 1e-3) - Math.floor(multiplier * get2("Weapon Damage Percent") / 50 + 1e-3);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
_defineProperty9(CommunityService, "SpellDamage", new _class(7, "Spell Damage", "Make Sausage", function() {
  var dragonfishDamage = (0, import_kolmafia21.myFamiliar)() === $familiar(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral12(["Magic Dragonfish"]))) ? (0, import_kolmafia21.numericModifier)($familiar(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral12(["Magic Dragonfish"]))), "Spell Damage Percent", baseWeight() + (0, import_kolmafia21.weightAdjustment)(), $item.none) : 0;
  return 60 - Math.floor(get2("Spell Damage") / 50 + 1e-3) - Math.floor((get2("Spell Damage Percent") - dragonfishDamage) / 50 + 1e-3);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
_defineProperty9(CommunityService, "Noncombat", new _class(8, "Non-Combat", "Be a Living Statue", function() {
  var noncombatRate = -1 * get2("Combat Rate");
  var unsoftcappedRate = noncombatRate > 25 ? 25 + (noncombatRate - 25) * 5 : noncombatRate;
  return 60 - 3 * Math.floor(unsoftcappedRate / 5);
}, new Requirement(["-combat"], {})));
_defineProperty9(CommunityService, "BoozeDrop", new _class(9, "Item Drop", "Make Margaritas", function() {
  var mummingCostume = MummingTrunk_exports.currentCostumes().get((0, import_kolmafia21.myFamiliar)());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = (0, import_kolmafia21.numericModifier)((0, import_kolmafia21.myFamiliar)(), "Item Drop", baseWeight() + (0, import_kolmafia21.weightAdjustment)(), (0, import_kolmafia21.equippedItem)($slot(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral12(["familiar"]))))) + mummingBuff - (0, import_kolmafia21.numericModifier)((0, import_kolmafia21.equippedItem)($slot(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral12(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = (0, import_kolmafia21.numericModifier)((0, import_kolmafia21.myFamiliar)(), "Booze Drop", baseWeight() + (0, import_kolmafia21.weightAdjustment)(), (0, import_kolmafia21.equippedItem)($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral12(["familiar"]))))) - (0, import_kolmafia21.numericModifier)((0, import_kolmafia21.equippedItem)($slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral12(["familiar"])))), "Booze Drop");
  var multiplier = (0, import_kolmafia21.haveEquipped)($item(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral12(["broken champagne bottle"])))) && get("garbageChampagneCharge") > 0 ? 0.5 : 1;
  return 60 - Math.floor(multiplier * (get2("Item Drop") - familiarItemDrop - (0, import_kolmafia21.numericModifier)((0, import_kolmafia21.myThrall)(), "Item Drop")) / 30 + 1e-3) - Math.floor((get2("Booze Drop") - familiarBoozeDrop) / 15 + 1e-3);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: $items(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral12(["broken champagne bottle"])))
})));
_defineProperty9(CommunityService, "HotRes", new _class(10, "Hot Resistance", "Clean Steam Tunnels", function() {
  return 60 - get2("Hot Resistance");
}, new Requirement(["Hot Resistance"], {})));
_defineProperty9(CommunityService, "CoilWire", new _class(11, "Coil Wire", "Coil Wire", function() {
  return 60;
}, new Requirement([], {})));
_defineProperty9(CommunityService, "donate", function() {
  visitCouncil();
  (0, import_kolmafia21.visitUrl)("choice.php?whichchoice=1089&option=30");
});
_defineProperty9(CommunityService, "path", $path(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral12(["Community Service"]))));

// node_modules/libram/dist/since.js
var import_kolmafia22 = require("kolmafia");
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
function _classCallCheck11(instance, Constructor) {
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
function _possibleConstructorReturn4(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized4(self);
}
function _assertThisInitialized4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
    _classCallCheck11(this, KolmafiaVersionError2);
    _this = _super.call(this, message);
    Object.setPrototypeOf(_assertThisInitialized4(_this), KolmafiaVersionError2.prototype);
    return _this;
  }
  return _createClass11(KolmafiaVersionError2);
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
  var currentRevision = (0, import_kolmafia22.getRevision)();
  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia22.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
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
function _possibleConstructorReturn5(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized5(self);
}
function _assertThisInitialized5(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread5();
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
    return _arrayLikeToArray14(arr);
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
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
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck12(this, CombatStrategy2);
    this.macros = /* @__PURE__ */ new Map();
    this.autoattacks = /* @__PURE__ */ new Map();
    this.actions = /* @__PURE__ */ new Map();
    this.ccs_entries = /* @__PURE__ */ new Map();
  }
  _createClass12(CombatStrategy2, [{
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
        if (monsters instanceof import_kolmafia23.Monster)
          monsters = [monsters];
        var _iterator = _createForOfIteratorHelper9(monsters), _step;
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
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
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
        if (monsters instanceof import_kolmafia23.Monster)
          monsters = [monsters];
        var _iterator2 = _createForOfIteratorHelper9(monsters), _step2;
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
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
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
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === void 0) {
        this.default_action = _action;
      } else if (monsters instanceof import_kolmafia23.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = _createForOfIteratorHelper9(monsters), _step3;
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
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof import_kolmafia23.Monster)
        monsters = [monsters];
      var _iterator4 = _createForOfIteratorHelper9(monsters), _step4;
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
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action)
        return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy2();
      if (this.starting_macro)
        result.starting_macro = _toConsumableArray5(this.starting_macro);
      if (this.default_macro)
        result.default_macro = _toConsumableArray5(this.default_macro);
      var _iterator5 = _createForOfIteratorHelper9(this.macros), _step5;
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
      var _iterator6 = _createForOfIteratorHelper9(this.autoattacks), _step6;
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
      var _iterator7 = _createForOfIteratorHelper9(this.actions), _step7;
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
      var _iterator8 = _createForOfIteratorHelper9(this.ccs_entries), _step8;
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
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @returns The compiled macro.
     */
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
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @returns The compiled autoattack macro.
     */
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
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = _createForOfIteratorHelper9(this.ccs_entries), _step9;
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
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits6(CombatStrategyWithActions2, _this);
        var _super = _createSuper5(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          _classCallCheck12(this, CombatStrategyWithActions2);
          return _super.apply(this, arguments);
        }
        return _createClass12(CombatStrategyWithActions2);
      }(this);
      var proto = CombatStrategyWithActions.prototype;
      var _iterator10 = _createForOfIteratorHelper9(actions), _step10;
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
    _classCallCheck12(this, CompressedMacro2);
    this.components = /* @__PURE__ */ new Map();
  }
  _createClass12(CompressedMacro2, [{
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
    /**
     * Compile the compressed form of the macro.
     */
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
    _classCallCheck12(this, CombatResources2);
    this.resources = /* @__PURE__ */ new Map();
  }
  _createClass12(CombatResources2, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === void 0)
        return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action) {
      var resource = this.resources.get(action);
      if (resource === void 0)
        return void 0;
      if (resource.do instanceof import_kolmafia23.Item)
        return new Macro().item(resource.do);
      if (resource.do instanceof import_kolmafia23.Skill)
        return new Macro().skill(resource.do);
      return undelay(resource.do);
    }
  }]);
  return CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
var import_kolmafia25 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
var import_kolmafia24 = require("kolmafia");
var _templateObject99;
var _templateObject220;
var _templateObject318;
var _templateObject417;
var _templateObject515;
var _templateObject614;
var _templateObject713;
var _templateObject812;
var _templateObject910;
var _templateObject106;
var _templateObject116;
var _templateObject126;
var _templateObject136;
var _templateObject146;
var _templateObject156;
var _templateObject166;
var _templateObject176;
var _templateObject186;
var _templateObject196;
var _templateObject206;
var _templateObject2111;
var _templateObject226;
var _templateObject236;
var _templateObject246;
var _templateObject256;
var _templateObject266;
var _templateObject276;
var _templateObject285;
var _templateObject294;
var _templateObject304;
var _templateObject319;
var _templateObject324;
var _templateObject334;
var _templateObject344;
var _templateObject353;
var _templateObject363;
var _templateObject373;
var _templateObject383;
var _templateObject393;
var _templateObject403;
var _templateObject418;
var _templateObject423;
var _templateObject433;
var _templateObject443;
var _templateObject453;
var _templateObject463;
var _templateObject473;
var _templateObject483;
var _templateObject493;
var _templateObject503;
var _templateObject516;
var _templateObject523;
var _templateObject533;
var _templateObject542;
var _templateObject552;
var _templateObject562;
var _templateObject572;
var _templateObject582;
var _templateObject592;
var _templateObject602;
var _templateObject615;
var _templateObject623;
var _templateObject632;
var _templateObject642;
var _templateObject652;
var _templateObject662;
var _templateObject672;
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty10(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey13(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit10(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
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
function _taggedTemplateLiteral13(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray15(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray15(arr);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia24.weaponHands)(i) : 0;
};
var modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka"];
var Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck13(this, Outfit2);
    this.equips = /* @__PURE__ */ new Map();
    this.riders = /* @__PURE__ */ new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = /* @__PURE__ */ new Map();
    this.postActions = [];
    this.preActions = [];
  }
  _createClass13(Outfit2, [{
    key: "equippedAmount",
    value: (
      /**
       * Check how many of an item is equipped on the outfit.
       */
      function equippedAmount3(item5) {
        return _toConsumableArray6(this.equips.values()).filter(function(i) {
          return i === item5;
        }).length;
      }
    )
  }, {
    key: "isAvailable",
    value: function isAvailable(item5) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item5))
        return false;
      if (!have(item5, this.equippedAmount(item5) + 1))
        return false;
      if ((0, import_kolmafia24.booleanModifier)(item5, "Single Equip") && this.equippedAmount(item5) > 0)
        return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped5(item5, slot) {
      if (slot === void 0)
        return this.equippedAmount(item5) > 0;
      return this.equips.get(slot) === item5;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item5, slot) {
      if (item5 !== $item.none)
        return false;
      if (slot === void 0)
        return true;
      if (this.equips.has(slot))
        return false;
      this.equips.set(slot, item5);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item5, slot) {
      if ($slots(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral13(["acc1, acc2, acc3"]))).includes((0, import_kolmafia24.toSlot)(item5)))
        return false;
      if (slot !== void 0 && slot !== (0, import_kolmafia24.toSlot)(item5))
        return false;
      if (this.equips.has((0, import_kolmafia24.toSlot)(item5)))
        return false;
      switch ((0, import_kolmafia24.toSlot)(item5)) {
        case $slot(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral13(["off-hand"]))):
          if (this.equips.has($slot(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral13(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral13(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral13(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia24.canEquip)(this.familiar, item5))
            return false;
      }
      if ((0, import_kolmafia24.toSlot)(item5) !== $slot(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral13(["familiar"]))) && !(0, import_kolmafia24.canEquip)(item5))
        return false;
      this.equips.set((0, import_kolmafia24.toSlot)(item5), item5);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item5, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray6($slots(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral13(["acc1, acc2, acc3"]))))).includes(slot))
        return false;
      if ((0, import_kolmafia24.toSlot)(item5) !== $slot(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral13(["acc1"]))))
        return false;
      if (!(0, import_kolmafia24.canEquip)(item5))
        return false;
      if (slot === void 0) {
        var empty = $slots(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral13(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return false;
        this.equips.set(empty, item5);
      } else {
        if (this.equips.has(slot))
          return false;
        this.equips.set(slot, item5);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item5, slot) {
      if (![void 0, $slot(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral13(["off-hand"])))].includes(slot))
        return false;
      if ((0, import_kolmafia24.toSlot)(item5) !== $slot(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral13(["weapon"]))))
        return false;
      if (this.equips.has($slot(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral13(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral13(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral13(["off-hand"])))))
        return false;
      if (!have($skill(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral13(["Double-Fisted Skull Smashing"])))))
        return false;
      if (weaponHands(item5) !== 1)
        return false;
      if (!(0, import_kolmafia24.canEquip)(item5))
        return false;
      this.equips.set($slot(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral13(["off-hand"]))), item5);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item5) {
      switch ((0, import_kolmafia24.toSlot)(item5)) {
        case $slot(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral13(["weapon"]))):
          return $familiar(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral13(["Disembodied Hand"])));
        case $slot(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral13(["off-hand"]))):
          return $familiar(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral13(["Left-Hand Man"])));
        default:
          return void 0;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item5) {
      var _a;
      return (_a = this.bonuses.get(item5)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function applyBonus(item5, value, reducer) {
      var previous = this.getBonus(item5);
      return this.setBonus(item5, reducer(value, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item5, value) {
      this.bonuses.set(item5, value);
      return value;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item5, value) {
      return this.applyBonus(item5, value, function(a, b) {
        return a + b;
      });
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function applyBonuses(items, reducer) {
      var _iterator = _createForOfIteratorHelper10(items), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray10(_step.value, 2), item5 = _step$value[0], value = _step$value[1];
          this.applyBonus(item5, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function setBonuses(items) {
      this.applyBonuses(items, function(a) {
        return a;
      });
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function addBonuses(items) {
      this.applyBonuses(items, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item5, slot) {
      if (![void 0, $slot(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral13(["familiar"])))].includes(slot))
        return false;
      if (this.equips.has($slot(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral13(["familiar"])))))
        return false;
      if ((0, import_kolmafia24.booleanModifier)(item5, "Single Equip"))
        return false;
      var familiar = this.getHoldingFamiliar(item5);
      if (familiar === void 0 || !this.equip(familiar))
        return false;
      this.equips.set($slot(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral13(["familiar"]))), item5);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item5, slot) {
      return this.haveEquipped(item5, slot) || this.equipItemNone(item5, slot) || this.isAvailable(item5) && (this.equipNonAccessory(item5, slot) || this.equipAccessory(item5, slot) || this.equipUsingDualWield(item5, slot) || this.equipUsingFamiliar(item5, slot));
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
      var item5 = this.equips.get($slot(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral13(["familiar"]))));
      if (item5 !== void 0 && item5 !== $item.none && !(0, import_kolmafia24.canEquip)(familiar, item5))
        return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d, _e, _f;
      var succeeded = true;
      for (var _i = 0, _outfitSlots2 = outfitSlots; _i < _outfitSlots2.length; _i++) {
        var slotName = _outfitSlots2[_i];
        var slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral13(["familiar"])))], ["offhand", $slot(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral13(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia24.toSlot)(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== void 0 && !this.equip(itemOrItems, slot))
          succeeded = false;
      }
      var _iterator2 = _createForOfIteratorHelper10((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var item5 = _step2.value;
          if (!this.equip(item5))
            succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== void 0) {
        if (!this.equip(spec.familiar))
          succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray6((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier))
          (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray6(spec.modifier));
        else
          this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"]))
          succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"]))
          succeeded = false;
      }
      if (spec.bonuses) {
        this.addBonuses(spec.bonuses);
      }
      this.beforeDress.apply(this, _toConsumableArray6((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : []));
      this.afterDress.apply(this, _toConsumableArray6((_f = spec.afterDress) !== null && _f !== void 0 ? _f : []));
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      var _this = this;
      if (things.length === 0)
        return true;
      return things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
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
      if (thing instanceof import_kolmafia24.Item)
        return this.equipItem(thing, slot);
      if (thing instanceof import_kolmafia24.Familiar)
        return this.equipFamiliar(thing);
      if (thing instanceof Outfit2)
        return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "bjornify",
    value: (
      /**
       * Add a bjornified familiar to the outfit.
       *
       * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
       *
       * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
       * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
       * @returns True if we successfully set the bjorn to a valid target.
       */
      function bjornify(target) {
        var _this = this;
        var current = this.riders.get($slot(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral13(["buddy-bjorn"]))));
        if (current) {
          if (Array.isArray(target) ? target.includes(current) : current === target) {
            return true;
          }
          return false;
        }
        if (Array.isArray(target)) {
          var fam = target.find(function(f) {
            return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral13(["crown-of-thrones"])))) !== f;
          });
          if (fam) {
            this.riders.set($slot(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral13(["buddy-bjorn"]))), fam);
            return true;
          }
          return false;
        } else {
          if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
            this.riders.set($slot(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral13(["buddy-bjorn"]))), target);
            return true;
          }
          return false;
        }
      }
    )
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      var _this = this;
      var current = this.riders.get($slot(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral13(["crown-of-thrones"]))));
      if (current) {
        if (Array.isArray(target) ? target.includes(current) : current === target) {
          return true;
        }
        return false;
      }
      if (Array.isArray(target)) {
        var fam = target.find(function(f) {
          return have(f) && _this.familiar !== f && _this.riders.get($slot(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral13(["buddy-bjorn"])))) !== f;
        });
        if (fam) {
          this.riders.set($slot(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral13(["crown-of-thrones"]))), fam);
          return true;
        }
        return false;
      } else {
        if (have(target) && this.familiar !== target && !Array.from(this.riders.values()).includes(target)) {
          this.riders.set($slot(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral13(["crown-of-thrones"]))), target);
          return true;
        }
        return false;
      }
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
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
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip3(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function afterDress() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function beforeDress() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      var _this = this;
      if (this.familiar)
        (0, import_kolmafia24.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = /* @__PURE__ */ new Set();
      var nonaccessorySlots = $slots(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral13(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral13(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral13(["back"])))) === $item(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral13(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral13(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral13(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral13(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral13(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral13(["hat"])))) === $item(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral13(["Crown of Thrones"]))) || this.getBonus($item(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral13(["Crown of Thrones"])))))) {
        usedSlots.add($slot(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral13(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral13(["crown-of-thrones"]))));
      }
      var _iterator3 = _createForOfIteratorHelper10(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var slot = _step3.value;
          if (targetEquipment.includes((0, import_kolmafia24.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia24.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia24.equippedItem)(slot)) || slot === $slot(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral13(["weapon"]))) && weaponHands((0, import_kolmafia24.equippedItem)(slot)) !== 1 && this.equips.has($slot(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral13(["offhand"])))) && !this.equips.has($slot(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral13(["weapon"])))))
            (0, import_kolmafia24.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper10(nonaccessorySlots), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            (0, import_kolmafia24.equip)(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral13(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item5) {
        return item5 !== void 0;
      });
      var missingAccessories = [];
      var _iterator5 = _createForOfIteratorHelper10(accessoryEquips), _step5;
      try {
        var _loop = function _loop3() {
          var accessory2 = _step5.value;
          var alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia24.equippedItem)(slot2) === accessory2;
          });
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory2);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0) {
          throw "No accessory slots remaining";
        }
        (0, import_kolmafia24.equip)(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray6(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed)
          allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            (0, import_kolmafia24.cliExecute)("refresh inventory");
            this._dress(true);
            return;
          } else
            throw new Error("Failed to maximize properly!");
        }
        (0, import_kolmafia24.logprint)("Maximize: ".concat(this.modifier));
      }
      applyModes(modes);
      if (bjorn && (0, import_kolmafia24.haveEquipped)($item(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral13(["Buddy Bjorn"]))))) {
        if ((0, import_kolmafia24.myEnthronedFamiliar)() === bjorn)
          (0, import_kolmafia24.enthroneFamiliar)($familiar.none);
        if ((0, import_kolmafia24.myBjornedFamiliar)() !== bjorn)
          (0, import_kolmafia24.bjornifyFamiliar)(bjorn);
      }
      if (crown && (0, import_kolmafia24.haveEquipped)($item(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral13(["Crown of Thrones"]))))) {
        if ((0, import_kolmafia24.myBjornedFamiliar)() === crown)
          (0, import_kolmafia24.bjornifyFamiliar)($familiar.none);
        if ((0, import_kolmafia24.myEnthronedFamiliar)() !== crown)
          (0, import_kolmafia24.enthroneFamiliar)(crown);
      }
      if (this.familiar !== void 0 && (0, import_kolmafia24.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper10(nonaccessorySlots), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia24.equippedItem)(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper10(accessoryEquips), _step7;
      try {
        var _loop2 = function _loop22() {
          var accessory2 = _step7.value;
          if ((0, import_kolmafia24.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral13(["buddy-bjorn"]))), $item(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral13(["Buddy Bjorn"]))), import_kolmafia24.myBjornedFamiliar], [$slot(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral13(["crown-of-thrones"]))), $item(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral13(["Crown of Thrones"]))), import_kolmafia24.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray10(_arr[_i4], 3), rider = _arr$_i[0], throne = _arr$_i[1], checkingFunction = _arr$_i[2];
        var wanted = this.riders.get(rider);
        if (_toConsumableArray6(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      var _iterator8 = _createForOfIteratorHelper10(this.preActions), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(false);
      var _iterator9 = _createForOfIteratorHelper10(this.postActions), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit2();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = _toConsumableArray6(this.modifier);
      result.avoid = _toConsumableArray6(this.avoid);
      result.modes = _objectSpread4({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      result.beforeDress.apply(result, _toConsumableArray6(this.preActions));
      result.afterDress.apply(result, _toConsumableArray6(this.postActions));
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: _toConsumableArray6(this.modifier),
        avoid: _toConsumableArray6(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread4({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar)
        result.familiar = this.familiar;
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        var entry = this.equips.get((_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral13(["familiar"])))], ["offhand", $slot(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral13(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia24.toSlot)(slotName));
        if (entry)
          result[slotName] = entry;
      }
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral13(["buddy-bjorn"]))));
      if (buddyRider !== void 0)
        riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral13(["crown-of-thrones"]))));
      if (throneRider !== void 0)
        riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== void 0 || throneRider !== void 0)
        result.riders = riders;
      if (this.preActions.length)
        result.beforeDress = this.preActions;
      if (this.postActions.length)
        result.afterDress = this.postActions;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit2 = new Outfit2();
      var familiar = (0, import_kolmafia24.myFamiliar)();
      if (outfit2.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral13(["familiar"])))], ["offhand", $slot(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral13(["off-hand"])))]])).get(slotName)) !== null && _a !== void 0 ? _a : (0, import_kolmafia24.toSlot)(slotName);
        var item5 = (0, import_kolmafia24.equippedItem)(slot);
        if (!outfit2.equip(item5, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item5, ")");
        }
      }
      if ((0, import_kolmafia24.haveEquipped)($item(_templateObject642 || (_templateObject642 = _taggedTemplateLiteral13(["Crown of Thrones"])))))
        outfit2.riders.set($slot(_templateObject652 || (_templateObject652 = _taggedTemplateLiteral13(["crown-of-thrones"]))), (0, import_kolmafia24.myEnthronedFamiliar)());
      if ((0, import_kolmafia24.haveEquipped)($item(_templateObject662 || (_templateObject662 = _taggedTemplateLiteral13(["Buddy Bjorn"])))))
        outfit2.riders.set($slot(_templateObject672 || (_templateObject672 = _taggedTemplateLiteral13(["buddy-bjorn"]))), (0, import_kolmafia24.myBjornedFamiliar)());
      outfit2.setModes(getCurrentModes2());
      return outfit2;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      var _a;
      var outfit2 = new Outfit2();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters;
        if ((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0 ? void 0 : _a.length) {
          result.equip = spec.maximizeOptions.forceEquip;
        }
        result.avoid = spec.maximizeOptions.preventEquip;
        result.bonuses = spec.maximizeOptions.bonusEquip;
        if (spec.maximizeOptions.modes) {
          result.modes = convertFromLibramModes(spec.maximizeOptions.modes);
        }
        var cleanedResult = Object.fromEntries(_toConsumableArray6(Object.entries(result)).filter(function(_ref) {
          var _ref2 = _slicedToArray10(_ref, 2), v = _ref2[1];
          return v !== void 0;
        }));
        return Outfit2.from(cleanedResult);
      }
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
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread4(_objectSpread4({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
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
var _templateObject100;
function _taggedTemplateLiteral14(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray16(arr) || _nonIterableSpread7();
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
    return _arrayLikeToArray16(arr);
}
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit11(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
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
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty11(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey14(descriptor.key), descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties14(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties14(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
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
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var grimoireCCS = "grimoire_macro";
var Engine = /* @__PURE__ */ function() {
  function Engine2(tasks, options) {
    var _this = this;
    _classCallCheck14(this, Engine2);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = /* @__PURE__ */ new Map();
    this.cachedCcsContents = "";
    this.options = options !== null && options !== void 0 ? options : {};
    this.tasks = tasks.map(function(task2) {
      return _objectSpread5(_objectSpread5({}, _this.options.default_task_options), task2);
    });
    var _iterator = _createForOfIteratorHelper11(this.tasks), _step;
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
  _createClass14(Engine2, [{
    key: "getNextTask",
    value: function getNextTask() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
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
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      (0, import_kolmafia25.setAutoAttack)(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available2(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== void 0 && this.attempts[task.name] >= task.limit.skip)
        return false;
      var _iterator2 = _createForOfIteratorHelper11((_b = task.after) !== null && _b !== void 0 ? _b : []), _step2;
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
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      (0, import_kolmafia25.print)("");
      (0, import_kolmafia25.print)("Executing ".concat(task.name), "blue");
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
      var _iterator3 = _createForOfIteratorHelper11(task_resources.all()), _step3;
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
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire2 = undelay(task.acquire);
      var _iterator4 = _createForOfIteratorHelper11(acquire2 || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = (0, import_kolmafia25.itemAmount)(to_get.item) + (0, import_kolmafia25.equippedAmount)(to_get.item);
          if (num_needed <= num_have)
            continue;
          if (to_get.useful !== void 0 && !to_get.useful())
            continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== void 0) {
            (0, import_kolmafia25.buy)(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys((0, import_kolmafia25.getRelated)(to_get.item, "fold")).length > 0) {
            (0, import_kolmafia25.cliExecute)("fold ".concat(to_get.item));
          } else {
            (0, import_kolmafia25.retrieveItem)(to_get.item, num_needed);
          }
          if ((0, import_kolmafia25.itemAmount)(to_get.item) + (0, import_kolmafia25.equippedAmount)(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects)) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      var extraSongs = Object.keys((0, import_kolmafia25.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia25.toEffect)(effectName);
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
      var _iterator5 = _createForOfIteratorHelper11(effects), _step5;
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
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit);
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0) {
        if (!outfit2.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit2;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit2) {
      if (task.do instanceof import_kolmafia25.Location)
        (0, import_kolmafia25.setLocation)(task.do);
      outfit2.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit2, combat, resources) {
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries((_a = task.choices) !== null && _a !== void 0 ? _a : {}); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray11(_Object$entries[_i], 2), key = _Object$entries$_i[0], func = _Object$entries$_i[1];
        if (func === void 0)
          continue;
        manager.setChoice(parseInt(key), undelay(func));
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof import_kolmafia25.Location ? task.do : void 0);
      macro.save();
      if (!this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray7(otherCCSEntries)).join("\n");
        (0, import_kolmafia25.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          (0, import_kolmafia25.writeCcs)(ccsContents, grimoireCCS);
          (0, import_kolmafia25.cliExecute)("ccs ".concat(grimoireCCS));
          this.cachedCcsContents = ccsContents;
        }
      }
      var autoattack = task_combat.compileAutoattack();
      if (autoattack.toString().length > 1) {
        (0, import_kolmafia25.logprint)("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        (0, import_kolmafia25.setAutoAttack)(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do() : task.do;
      if (result instanceof import_kolmafia25.Location)
        (0, import_kolmafia25.adv1)(result, -1, "");
      (0, import_kolmafia25.runCombat)();
      while ((0, import_kolmafia25.inMultiFight)())
        (0, import_kolmafia25.runCombat)();
      if ((0, import_kolmafia25.choiceFollowsFight)())
        (0, import_kolmafia25.runChoice)(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof import_kolmafia25.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task);
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts))
        this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @throws An error if any of the internal limits have been passed.
     */
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
        if (task.limit.turns && task.do instanceof import_kolmafia25.Location && task.do.turnsSpent >= task.limit.turns)
          throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task)))
          throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        if (task.limit.completed)
          throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === void 0 && (0, import_kolmafia25.readCcs)(grimoireCCS) === "") {
          (0, import_kolmafia25.writeCcs)("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
  return Engine2;
}();
Engine.defaultSettings = {
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
};
function maxSongs() {
  return have($skill(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral14(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set([
  // Halloweener dog noncombats
  "Wooof! Wooooooof!",
  "Playing Fetch*",
  // June cleaver noncombats
  "Aunts not Ants",
  "Bath Time",
  "Beware of Aligator",
  "Delicious Sprouts",
  "Hypnotic Master",
  "Lost and Found",
  "Poetic Justice",
  "Summer Days",
  "Teacher's Pet",
  // Lil' Doctor™ bag noncombat
  "A Pound of Cure",
  // Turtle taming noncombats
  "Nantucket Snapper",
  "Blue Monday",
  "Capital!",
  "Training Day",
  "Boxed In",
  "Duel Nature",
  "Slow Food",
  "A Rolling Turtle Gathers No Moss",
  "Slow Road to Hell",
  "C'mere, Little Fella",
  "The Real Victims",
  "Like That Time in Tortuga",
  "Cleansing your Palette",
  "Harem Scarum",
  "Turtle in peril",
  "No Man, No Hole",
  "Slow and Steady Wins the Brawl",
  "Stormy Weather",
  "Turtles of the Universe",
  "O Turtle Were Art Thou",
  "Allow 6-8 Weeks For Delivery",
  "Kick the Can",
  "Turtles All The Way Around",
  "More eXtreme Than Usual",
  "Jewel in the Rough",
  "The worst kind of drowning",
  "Even Tamer Than Usual",
  "Never Break the Chain",
  "Close, but Yes Cigar",
  "Armchair Quarterback",
  "This Turtle Rocks!",
  "Really Sticking Her Neck Out",
  "It Came from Beneath the Sewer? Great!",
  "Don't Be Alarmed, Now",
  "Puttin' it on Wax",
  "More Like... Hurtle",
  "Musk! Musk! Musk!",
  "Silent Strolling"
]);
var zoneSpecificNCs = /* @__PURE__ */ new Map([
  ["The Horror...", ["Frat House"]]
  // Duplicate choice name
]);
function lastEncounterWasWanderingNC() {
  var _a;
  var last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes(get("lastAdventure"));
  } else {
    return wanderingNCs.has(last);
  }
}

// node_modules/grimoire-kolmafia/dist/route.js
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), true).forEach(function(r2) {
      _defineProperty12(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty12(obj, key, value) {
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
function _createForOfIteratorHelper12(o, allowArrayLike) {
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
function _arrayLikeToArray17(arr, len) {
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
  var _iterator = _createForOfIteratorHelper12(quests), _step;
  try {
    var _loop = function _loop2() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var _iterator3 = _createForOfIteratorHelper12(quest.tasks), _step3;
      try {
        var _loop22 = function _loop23() {
          var task2 = _step3.value;
          var renamedTask = _objectSpread6({}, task2);
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
    var _iterator2 = _createForOfIteratorHelper12((_b = _task.after) !== null && _b !== void 0 ? _b : []), _step2;
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
var import_kolmafia38 = require("kolmafia");

// src/ascend.ts
var import_kolmafia26 = require("kolmafia");

// src/config.ts
var config = Args.create("seventyhccs", "Automate 1/70 Community Service.", {
  nofites: Args.flag({
    help: "Skip warning for unspent pvp fites.",
    setting: "",
    default: false
  }),
  noprompt: Args.flag({
    help: "Skip prompt before ascending.",
    setting: "",
    default: false
  }),
  novote: Args.flag({
    help: "Skip guaranteed vote wanderer check.",
    setting: "",
    default: false
  }),
  prep: Args.flag({
    help: "Install chateau, eudora, and garden.",
    setting: "",
    default: false
  }),
  // preferences
  main_clan: Args.string({
    help: "Clan with a fully stocked VIP lounge",
    default: ""
  }),
  side_clan: Args.string({
    help: "Clan with a Mother Slime and Ungulith",
    default: ""
  }),
  skills_to_perm: Args.skills({
    help: "A list of skills to perm by name or id number"
  }),
  // hidden preferences
  MEAT_SAFE_LIMIT: Args.number({
    default: 2e3,
    help: "Don't spend meat on sausages below this value",
    hidden: true,
    setting: ""
  }),
  MP_SAFE_LIMIT: Args.number({
    default: 500,
    help: "Don't spend MP on librams below this value unless right before a full MP refill",
    hidden: true,
    setting: ""
  })
});

// src/ascend.ts
var _templateObject101;
var _templateObject221;
var _templateObject320;
var _templateObject419;
var _templateObject517;
var _templateObject616;
var _templateObject714;
var _templateObject813;
var _templateObject911;
var _templateObject107;
var _templateObject117;
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
function _iterableToArrayLimit12(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral15(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isReadyToContinue() {
  if ((0, import_kolmafia26.myPath)() === $path(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral15(["Community Service"]))))
    return true;
  var inWrongPath = !(0, import_kolmafia26.canInteract)();
  if (inWrongPath) {
    (0, import_kolmafia26.print)("Nope", "red");
    return false;
  }
  var bootsReady = [[$slot(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral15(["bootspur"]))), $item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral15(["nicksilver spurs"])))], [$slot(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral15(["bootskin"]))), $item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral15(["mountain lion skin"])))]].every(function(_ref) {
    var _ref2 = _slicedToArray12(_ref, 2), slot = _ref2[0], item5 = _ref2[1];
    return (0, import_kolmafia26.equippedItem)(slot) === item5;
  });
  if (!bootsReady) {
    (0, import_kolmafia26.print)("Equip your cowboy boots with nicksilver spurs and mountain lion skin", "red");
    return false;
  }
  if (!config.nofites && (0, import_kolmafia26.pvpAttacksLeft)() > 0) {
    (0, import_kolmafia26.print)("Spend your pvp fites", "red");
    return false;
  }
  var voterPreCoilNotReady = (0, import_kolmafia26.totalTurnsPlayed)() % 11 !== 1;
  var voterPostCoilNotReady = ((0, import_kolmafia26.totalTurnsPlayed)() + 60) % 11 !== 1;
  if (!config.novote && voterPreCoilNotReady && voterPostCoilNotReady) {
    var turnsA = 11 - ((0, import_kolmafia26.totalTurnsPlayed)() % 11 + 10) % 11;
    var turnsB = 11 - (((0, import_kolmafia26.totalTurnsPlayed)() + 60) % 11 + 10) % 11;
    (0, import_kolmafia26.print)("Spend more ".concat(turnsA, " or ").concat(turnsB, " turns for voter monster"), "red");
    return false;
  }
  if (config.noprompt || (0, import_kolmafia26.userConfirm)("Ready to Ascend into Community Service?"))
    return true;
  return false;
}
function prepareToAscend() {
  if ((0, import_kolmafia26.myPath)() !== $path(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral15(["Community Service"])))) {
    prepareAscension({
      garden: "packet of rock seeds",
      eudora: "Our Daily Candles\u2122 order form",
      chateau: {
        ceiling: "ceiling fan",
        desk: "Swiss piggy bank",
        nightstand: "foreign language tapes"
      },
      throwOnFail: true
    });
  }
}
function prepAndAscendIfNecessary() {
  if ((0, import_kolmafia26.myPath)() !== $path(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral15(["Community Service"])))) {
    var _config$skills_to_per;
    prepareToAscend();
    (0, import_kolmafia26.visitUrl)("council.php");
    (0, import_kolmafia26.visitUrl)("charsheet.php");
    var toPerm = new Map(((_config$skills_to_per = config.skills_to_perm) !== null && _config$skills_to_per !== void 0 ? _config$skills_to_per : []).filter(function(s) {
      return have(s);
    }).map(function(s) {
      return [s, Lifestyle.hardcore];
    }));
    ascend($path(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral15(["Community Service"]))), $class(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral15(["Sauceror"]))), Lifestyle.hardcore, "platypus", $item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral15(["astral six-pack"]))), $item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral15(["astral statuette"]))), {
      permSkills: toPerm,
      neverAbort: true
    });
  }
}

// src/quests/coilWire.ts
var import_kolmafia31 = require("kolmafia");

// src/combat.ts
var import_kolmafia28 = require("kolmafia");

// src/lib.ts
var import_kolmafia27 = require("kolmafia");
function assert(expectTrue, messageIfFalse) {
  if (typeof expectTrue === "boolean") {
    if (!expectTrue)
      throw messageIfFalse !== null && messageIfFalse !== void 0 ? messageIfFalse : "Unknown error";
    return;
  }
  if (!have(expectTrue))
    throw "Missing ".concat(expectTrue);
}
function acquireEffect(e) {
  assert(have(e) || !e.default.startsWith("cargo"), "Can't obtain ".concat(e, "?"));
  if (!have(e))
    (0, import_kolmafia27.cliExecute)(e.default);
}
function itemToEffect(i) {
  return (0, import_kolmafia27.effectModifier)(i, "effect");
}
function haveItemOrEffect(i) {
  return have(i) || have(itemToEffect(i));
}
function voterMonsterNow() {
  return (0, import_kolmafia27.totalTurnsPlayed)() % 11 === 1 && get("lastVoteMonsterTurn") < (0, import_kolmafia27.totalTurnsPlayed)();
}

// src/combat.ts
var _templateObject108;
var _templateObject227;
var _templateObject321;
var _templateObject420;
var _templateObject518;
var _templateObject617;
var _templateObject715;
var _templateObject814;
var _templateObject912;
var _templateObject109;
var _templateObject118;
var _templateObject127;
var _templateObject137;
var _templateObject147;
var _templateObject157;
var _templateObject167;
var _templateObject177;
var _templateObject187;
var _templateObject197;
var _templateObject207;
var _templateObject2112;
var _templateObject228;
var _templateObject237;
var _templateObject247;
var _templateObject257;
var _templateObject267;
var _templateObject277;
var _templateObject286;
var _templateObject295;
var _templateObject305;
var _templateObject3110;
var _templateObject325;
var _templateObject335;
var _templateObject345;
var _templateObject354;
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
var _templateObject519;
var _templateObject524;
var _templateObject534;
var _templateObject543;
var _templateObject553;
var _templateObject563;
var _templateObject573;
var _templateObject583;
var _templateObject593;
var _templateObject603;
var _templateObject618;
var _templateObject624;
var _templateObject633;
var _templateObject643;
var _templateObject653;
var _templateObject663;
var _templateObject673;
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
var _templateObject913;
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
var _templateObject1092;
var _templateObject110;
var _templateObject111;
var _templateObject1122;
var _templateObject1132;
var _templateObject1142;
var _templateObject1152;
var _templateObject1162;
var _templateObject1172;
var _templateObject1182;
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
function _taggedTemplateLiteral16(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var notAllowList = [
  // protonic ghosts
  $monster(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral16(["boneless blobghost"]))),
  $monster(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral16(["Emily Koops, a spooky lime"]))),
  $monster(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral16(["The ghost of Ebenoozer Screege"]))),
  $monster(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral16(["The ghost of Jim Unfortunato"]))),
  $monster(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral16(["The ghost of Lord Montague Spookyraven"]))),
  $monster(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral16(["the ghost of Monsieur Baguelle"]))),
  $monster(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral16(["the ghost of Oily McBindle"]))),
  $monster(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral16(["The ghost of Richard Cockingham"]))),
  $monster(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral16(["The ghost of Sam McGee"]))),
  $monster(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral16(['The ghost of Vanillica "Trashblossom" Gorton']))),
  $monster(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral16(["The ghost of Waldo the Carpathian"]))),
  $monster(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral16(["The Headless Horseman"]))),
  $monster(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral16(["The Icewoman"]))),
  // tunnel of L.O.V.E.
  $monster(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral16(["LOV Enforcer"]))),
  $monster(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral16(["LOV Engineer"]))),
  $monster(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral16(["LOV Equivocator"]))),
  // witchess
  $monster(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral16(["Witchess Pawn"]))),
  $monster(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral16(["Witchess Knight"]))),
  $monster(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral16(["Witchess Bishop"]))),
  $monster(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral16(["Witchess Rook"]))),
  $monster(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral16(["Witchess Ox"]))),
  $monster(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral16(["Witchess King"]))),
  $monster(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral16(["Witchess Witch"]))),
  $monster(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral16(["Witchess Queen"]))),
  // more free combats
  $monster(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral16(["sausage goblin"]))),
  $monster(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral16(["X-32-F Combat Training Snowman"]))),
  $monster(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral16(["Eldritch Tentacle"]))),
  $monster(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral16(["Sssshhsssblllrrggghsssssggggrrgglsssshhssslblgl"]))),
  $monster(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral16(["piranha plant"]))),
  $monster(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral16(["God Lobster"]))),
  // Goth Kid Wanderers
  $monster(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral16(["Black Crayon Beast"]))),
  $monster(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral16(["Black Crayon Beetle"]))),
  $monster(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral16(["Black Crayon Constellation"]))),
  $monster(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral16(["Black Crayon Crimbo Elf"]))),
  $monster(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral16(["Black Crayon Demon"]))),
  $monster(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral16(["Black Crayon Elemental"]))),
  $monster(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral16(["Black Crayon Fish"]))),
  $monster(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral16(["Black Crayon Flower"]))),
  $monster(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral16(["Black Crayon Frat Orc"]))),
  $monster(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral16(["Black Crayon Goblin"]))),
  $monster(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral16(["Black Crayon Golem"]))),
  $monster(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral16(["Black Crayon Hippy"]))),
  $monster(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral16(["Black Crayon Hobo"]))),
  $monster(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral16(["Black Crayon Man"]))),
  $monster(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral16(["Black Crayon Manloid"]))),
  $monster(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral16(["Black Crayon Mer-kin"]))),
  $monster(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral16(["Black Crayon Penguin"]))),
  $monster(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral16(["Black Crayon Pirate"]))),
  $monster(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral16(["Black Crayon Shambling Monstrosity"]))),
  $monster(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral16(["Black Crayon Slime"]))),
  $monster(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral16(["Black Crayon Spiraling Shape"]))),
  $monster(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral16(["Black Crayon Undead Thing"]))),
  // Hipster Wanderers
  $monster(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral16(["angry bassist"]))),
  $monster(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral16(["blue-haired girl"]))),
  $monster(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral16(["evil ex-girlfriend"]))),
  $monster(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral16(["peeved roommate"]))),
  $monster(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral16(["random scenester"]))),
  // BRICKOS
  $monster(_templateObject583 || (_templateObject583 = _taggedTemplateLiteral16(["BRICKO ooze"]))),
  $monster(_templateObject593 || (_templateObject593 = _taggedTemplateLiteral16(["BRICKO bat"]))),
  $monster(_templateObject603 || (_templateObject603 = _taggedTemplateLiteral16(["BRICKO oyster"]))),
  $monster(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral16(["BRICKO turtle"]))),
  $monster(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral16(["BRICKO elephant"]))),
  $monster(_templateObject633 || (_templateObject633 = _taggedTemplateLiteral16(["BRICKO octopus"]))),
  $monster(_templateObject643 || (_templateObject643 = _taggedTemplateLiteral16(["BRICKO python"]))),
  // voter monsters
  $monster(_templateObject653 || (_templateObject653 = _taggedTemplateLiteral16(["angry ghost"]))),
  $monster(_templateObject663 || (_templateObject663 = _taggedTemplateLiteral16(["annoyed snake"]))),
  $monster(_templateObject673 || (_templateObject673 = _taggedTemplateLiteral16(["government bureaucrat"]))),
  $monster(_templateObject682 || (_templateObject682 = _taggedTemplateLiteral16(["slime blob"]))),
  $monster(_templateObject692 || (_templateObject692 = _taggedTemplateLiteral16(["terrible mutant"]))),
  // deep machine tunnels
  $monster(_templateObject702 || (_templateObject702 = _taggedTemplateLiteral16(["Perceiver of Sensations"]))),
  $monster(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral16(["Performer of Actions"]))),
  $monster(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral16(["Thinker of Thoughts"]))),
  // neverending party
  $monster(_templateObject732 || (_templateObject732 = _taggedTemplateLiteral16(["biker"]))),
  $monster(_templateObject742 || (_templateObject742 = _taggedTemplateLiteral16(["burnout"]))),
  $monster(_templateObject752 || (_templateObject752 = _taggedTemplateLiteral16(["jock"]))),
  $monster(_templateObject762 || (_templateObject762 = _taggedTemplateLiteral16(["party girl"]))),
  $monster(_templateObject772 || (_templateObject772 = _taggedTemplateLiteral16(['"plain" girl']))),
  // toxic teacups
  $monster(_templateObject782 || (_templateObject782 = _taggedTemplateLiteral16(["toxic beastie"]))),
  // shadow rifts
  $monster(_templateObject792 || (_templateObject792 = _taggedTemplateLiteral16(["shadow bat"]))),
  $monster(_templateObject802 || (_templateObject802 = _taggedTemplateLiteral16(["shadow cow"]))),
  $monster(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral16(["shadow devil"]))),
  $monster(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral16(["shadow guy"]))),
  $monster(_templateObject832 || (_templateObject832 = _taggedTemplateLiteral16(["shadow hexagon"]))),
  $monster(_templateObject842 || (_templateObject842 = _taggedTemplateLiteral16(["shadow orb"]))),
  $monster(_templateObject852 || (_templateObject852 = _taggedTemplateLiteral16(["shadow prism"]))),
  $monster(_templateObject862 || (_templateObject862 = _taggedTemplateLiteral16(["shadow slab"]))),
  $monster(_templateObject872 || (_templateObject872 = _taggedTemplateLiteral16(["shadow snake"]))),
  $monster(_templateObject882 || (_templateObject882 = _taggedTemplateLiteral16(["shadow spider"]))),
  $monster(_templateObject892 || (_templateObject892 = _taggedTemplateLiteral16(["shadow stalk"]))),
  $monster(_templateObject902 || (_templateObject902 = _taggedTemplateLiteral16(["shadow tree"]))),
  // Boss(es)
  $monster(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral16(["Mother Slime"])))
].map(function(m) {
  return "!monsterid ".concat(m.id);
}).join(" && ");
var DefaultMacro = function() {
  var Fast = Macro.skill($skill(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral16(["Sing Along"])))).item($item(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral16(["Time-Spinner"])))).skill($skill(_templateObject942 || (_templateObject942 = _taggedTemplateLiteral16(["Micrometeorite"])))).attack().repeat();
  var Slow = Macro.skill($skill(_templateObject952 || (_templateObject952 = _taggedTemplateLiteral16(["Curse of Weaksauce"])))).item($item(_templateObject962 || (_templateObject962 = _taggedTemplateLiteral16(["Time-Spinner"])))).skill($skill(_templateObject972 || (_templateObject972 = _taggedTemplateLiteral16(["Micrometeorite"])))).skill($skill(_templateObject982 || (_templateObject982 = _taggedTemplateLiteral16(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia28.mpCost)($skill(_templateObject992 || (_templateObject992 = _taggedTemplateLiteral16(["Saucestorm"]))))), Macro.skill($skill(_templateObject1002 || (_templateObject1002 = _taggedTemplateLiteral16(["Saucestorm"]))))).attack().repeat();
  return (0, import_kolmafia28.myFamiliar)().physicalDamage || (0, import_kolmafia28.myFamiliar)().elementalDamage ? Fast : Slow;
};
var DefaultCombat = new CombatStrategy().startingMacro(Macro.if_(notAllowList, Macro.abort())).macro(Macro.if_($skill(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral16(["Shoot Ghost"]))), Macro.skill($skill(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral16(["Summon Love Gnats"])))).skill($skill(_templateObject1032 || (_templateObject1032 = _taggedTemplateLiteral16(["Sing Along"])))).skill($skill(_templateObject1042 || (_templateObject1042 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject1052 || (_templateObject1052 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject1062 || (_templateObject1062 = _taggedTemplateLiteral16(["Shoot Ghost"])))).skill($skill(_templateObject1072 || (_templateObject1072 = _taggedTemplateLiteral16(["Trap Ghost"])))).abort()), [$monster(_templateObject1082 || (_templateObject1082 = _taggedTemplateLiteral16(["boneless blobghost"]))), $monster(_templateObject1092 || (_templateObject1092 = _taggedTemplateLiteral16(["Emily Koops, a spooky lime"]))), $monster(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral16(["The ghost of Ebenoozer Screege"]))), $monster(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral16(["The ghost of Jim Unfortunato"]))), $monster(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral16(["The ghost of Lord Montague Spookyraven"]))), $monster(_templateObject1132 || (_templateObject1132 = _taggedTemplateLiteral16(["the ghost of Monsieur Baguelle"]))), $monster(_templateObject1142 || (_templateObject1142 = _taggedTemplateLiteral16(["the ghost of Oily McBindle"]))), $monster(_templateObject1152 || (_templateObject1152 = _taggedTemplateLiteral16(["The ghost of Richard Cockingham"]))), $monster(_templateObject1162 || (_templateObject1162 = _taggedTemplateLiteral16(["The ghost of Sam McGee"]))), $monster(_templateObject1172 || (_templateObject1172 = _taggedTemplateLiteral16(['The ghost of Vanillica "Trashblossom" Gorton']))), $monster(_templateObject1182 || (_templateObject1182 = _taggedTemplateLiteral16(["The ghost of Waldo the Carpathian"]))), $monster(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral16(["The Headless Horseman"]))), $monster(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral16(["The Icewoman"])))]).macro(Macro.attack().repeat(), $monster(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral16(["LOV Enforcer"])))).macro(Macro.skill($skill(_templateObject1222 || (_templateObject1222 = _taggedTemplateLiteral16(["Candyblast"])))).repeat(), $monster(_templateObject1232 || (_templateObject1232 = _taggedTemplateLiteral16(["LOV Engineer"])))).macro(Macro.trySkill($skill(_templateObject1242 || (_templateObject1242 = _taggedTemplateLiteral16(["KGB tranquilizer dart"])))).skill($skill(_templateObject1252 || (_templateObject1252 = _taggedTemplateLiteral16(["Snokebomb"])))).abort(), $monster(_templateObject1262 || (_templateObject1262 = _taggedTemplateLiteral16(["Mother Slime"])))).macro(Macro.tryItem($item(_templateObject1272 || (_templateObject1272 = _taggedTemplateLiteral16(["abstraction: action"])))), $monster(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral16(["Thinker of Thoughts"])))).macro(function() {
  var weight = 20 + (0, import_kolmafia28.weightAdjustment)();
  var bonus = get2("Familiar Damage");
  var maxShortyDamage = (1 + weight + bonus) * 7 / 4;
  var safe = maxShortyDamage + 25;
  return Macro.skill($skill(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral16(["Saucy Salve"])))).if_("monsterhpabove ".concat(2 * safe), Macro.skill($skill(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral16(["Summon Love Gnats"]))))).if_("monsterhpabove ".concat(safe), Macro.trySkill($skill(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral16(["Bowl Sideways"]))))).if_("monsterhpabove ".concat(safe), Macro.skill($skill(_templateObject1322 || (_templateObject1322 = _taggedTemplateLiteral16(["Sing Along"]))))).trySkill($skill(_templateObject1332 || (_templateObject1332 = _taggedTemplateLiteral16(["Chest X-Ray"])))).trySkill($skill(_templateObject1342 || (_templateObject1342 = _taggedTemplateLiteral16(["Shattering Punch"])))).trySkill($skill(_templateObject1352 || (_templateObject1352 = _taggedTemplateLiteral16(["Gingerbread Mob Hit"])))).trySkill($skill(_templateObject1362 || (_templateObject1362 = _taggedTemplateLiteral16(["Shocking Lick"])))).abort();
}, $monster(_templateObject1372 || (_templateObject1372 = _taggedTemplateLiteral16(["toxic beastie"])))).macro(Macro.item($item(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral16(["Time-Spinner"])))).attack().repeat(), $monster(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral16(["Witchess Queen"])))).macro(Macro.skill($skill(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral16(["Curse of Weaksauce"])))).skill($skill(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral16(["Sing Along"])))).attack().repeat(), $monster(_templateObject1422 || (_templateObject1422 = _taggedTemplateLiteral16(["Witchess Witch"])))).macro(DefaultMacro);
function mapMonster(location, monster) {
  var initial = get("_monstersMapped");
  assert(initial < 3, "Trying to map too many monsters");
  if (!get("mappingMonsters"))
    (0, import_kolmafia28.useSkill)($skill(_templateObject1432 || (_templateObject1432 = _taggedTemplateLiteral16(["Map the Monsters"]))));
  var expectedTurnCount = (0, import_kolmafia28.myTurncount)();
  var mapPage = "";
  while (!mapPage.includes("Leading Yourself Right to Them")) {
    mapPage = (0, import_kolmafia28.visitUrl)((0, import_kolmafia28.toUrl)(location));
    if (mapPage.match(/<!-- MONSTERID: \d+ -->/))
      (0, import_kolmafia28.runCombat)();
    assert((0, import_kolmafia28.myTurncount)() === expectedTurnCount, "Wasted a turn somehow mapping monsters?");
  }
  (0, import_kolmafia28.visitUrl)("choice.php?pwd=&whichchoice=1435&option=1&heyscriptswhatsupwinkwink=".concat(monster.id));
  (0, import_kolmafia28.runCombat)();
  if ((0, import_kolmafia28.handlingChoice)())
    (0, import_kolmafia28.runChoice)(-1);
  assert(!get("mappingMonsters"), "Failed to unset map the monsters?");
  assert(get("_monstersMapped") === initial + 1, "Failed to increment map the monstesr?");
}

// src/iotms.ts
var import_kolmafia29 = require("kolmafia");
var _templateObject148;
var _templateObject229;
var _templateObject326;
var _templateObject421;
var _templateObject520;
var _templateObject619;
var _templateObject717;
var _templateObject816;
var _templateObject914;
var _templateObject1010;
var _templateObject1110;
var _templateObject1210;
var _templateObject1310;
var _templateObject149;
var _templateObject158;
var _templateObject168;
var _templateObject178;
var _templateObject188;
var _templateObject2210;
var _templateObject238;
var _templateObject248;
function _slicedToArray13(arr, i) {
  return _arrayWithHoles13(arr) || _iterableToArrayLimit13(arr, i) || _unsupportedIterableToArray19(arr, i) || _nonIterableRest13();
}
function _nonIterableRest13() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit13(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles13(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper13(o, allowArrayLike) {
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
function _arrayLikeToArray19(arr, len) {
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
  var owned = (0, import_kolmafia29.itemAmount)($item(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral17(["BRICKO bat"]))));
  var remainingFights = Math.max(0, 3 - get("_brickoFights"));
  var remainingDrops = Math.max(0, 2 - get("_brickoFights"));
  var need = 5 * remainingFights - 2 * remainingDrops - owned;
  var wantBrickos = get("_brickoEyeSummons") < 3 || !have($item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral17(["BRICKO brick"]))), need);
  var _iterator = _createForOfIteratorHelper13(/* @__PURE__ */ new Map([[$skill(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral17(["Summon BRICKOs"]))), wantBrickos], [$skill(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral17(["Summon Candy Heart"]))), !haveItemOrEffect($item(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral17(["green candy heart"]))))], [$skill(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral17(["Summon Love Song"]))), !have($item(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral17(["love song of icy revenge"]))), 4)], [$skill(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral17(["Summon Resolutions"]))), get("_resolutionRareSummons") < 3]])), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray13(_step.value, 2), summon = _step$value[0], check = _step$value[1];
      if (check) {
        (0, import_kolmafia29.useSkill)(summon);
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0, import_kolmafia29.useSkill)($skill(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral17(["Summon Taffy"]))));
}
function getPantogramPants() {
  if (!have($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral17(["portable pantogram"])))) || have($item(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral17(["pantogram pants"])))))
    return;
  var m = (/* @__PURE__ */ new Map([[$stat(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral17(["Muscle"]))), 1], [$stat(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral17(["Mysticality"]))), 2], [$stat(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral17(["Moxie"]))), 3]])).get((0, import_kolmafia29.myPrimestat)());
  var element = /* @__PURE__ */ function(element2) {
    element2[element2["hot"] = 1] = "hot";
    element2[element2["cold"] = 2] = "cold";
    element2[element2["spooky"] = 3] = "spooky";
    element2[element2["sleaze"] = 4] = "sleaze";
    element2[element2["stench"] = 5] = "stench";
    return element2;
  }({});
  var e = element.spooky;
  var s1 = "-2,0";
  var s2 = "-2,0";
  var s3 = "-1,0";
  (0, import_kolmafia29.visitUrl)("inv_use.php?pwd=&whichitem=".concat($item(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral17(["portable pantogram"]))).id));
  (0, import_kolmafia29.visitUrl)("choice.php?pwd=&whichchoice=1270&option=1&m=".concat(m, "&e=").concat(e, "&s1=").concat(s1, "&s2=").concat(s2, "&s3=").concat(s3));
  assert($item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral17(["pantogram pants"]))));
}
function harvestBatteries() {
  (0, import_kolmafia29.visitUrl)("inv_use.php?pwd=&whichitem=".concat($item(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral17(["potted power plant"]))).id));
  for (var i = 1; i < 8; i++)
    (0, import_kolmafia29.visitUrl)("choice.php?pwd=&whichchoice=1448&option=1&pp=".concat(i));
}
function scavengeDaycare() {
  (0, import_kolmafia29.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
  if (!get("_daycareNap"))
    (0, import_kolmafia29.runChoice)(1);
  if (get("_daycareGymScavenges") < 1) {
    (0, import_kolmafia29.runChoice)(3);
    (0, import_kolmafia29.runChoice)(2);
  }
}
function spendAllMpOnLibrams() {
  while ((0, import_kolmafia29.myMp)() > (0, import_kolmafia29.mpCost)($skill(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral17(["Summon BRICKOs"])))))
    castBestLibram();
}
function vote() {
  assert((0, import_kolmafia29.myClass)() === $class(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral17(["Sauceror"]))), "Don't yet know how to run this as a ".concat((0, import_kolmafia29.myClass)()));
  (0, import_kolmafia29.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
  (0, import_kolmafia29.visitUrl)("choice.php?pwd=&option=1&whichchoice=1331&g=2&local[]=1&local[]=3");
  assert($item(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral17(['"I Voted!" sticker']))));
}
function wish(effect) {
  assert(!have(effect), "Already have ".concat(effect));
  var data = JSON.parse((0, import_kolmafia29.fileToBuffer)("data/wish_descriptions.json"));
  var map = new Map(Object.entries(data).map(function(_ref) {
    var _ref2 = _slicedToArray13(_ref, 2), key = _ref2[0], val = _ref2[1];
    return [import_kolmafia29.Effect.get(key), val];
  }));
  var desc = map.get(effect);
  if (!desc)
    throw "Failed to find description text for ".concat(effect);
  (0, import_kolmafia29.visitUrl)("inv_use.php?whichitem=".concat($item(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral17(["genie bottle"]))).id));
  (0, import_kolmafia29.runChoice)(1, "wish=to be ".concat(desc));
  assert(effect);
}

// src/quests/shared.ts
var import_kolmafia30 = require("kolmafia");
var _templateObject150;
var _templateObject230;
var _templateObject327;
var _templateObject425;
var _templateObject521;
var _templateObject620;
var _templateObject718;
var _templateObject817;
var _templateObject915;
var _templateObject1011;
var _templateObject1111;
var _templateObject1211;
var _templateObject1311;
var _templateObject1410;
var _templateObject159;
var _templateObject169;
function _slicedToArray14(arr, i) {
  return _arrayWithHoles14(arr) || _iterableToArrayLimit14(arr, i) || _unsupportedIterableToArray20(arr, i) || _nonIterableRest14();
}
function _nonIterableRest14() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray20(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray20(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray20(o, minLen);
}
function _arrayLikeToArray20(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit14(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles14(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral18(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var statLookup = /* @__PURE__ */ new Map([["Be a Living Statue", "Combat Rate"], ["Build Playground Mazes", "Mysticality Percent"], ["Donate Blood", ["Maximum HP", "Maximum HP Percent"]], ["Feed Conspirators", "Moxie Percent"], ["Feed The Children", "Muscle Percent"], ["Make Margaritas", ["Item Drop", "Booze Drop"]], ["Make Sausage", ["Spell Damage", "Spell Damage Percent"]], ["Reduce Gazelle Population", ["Weapon Damage", "Weapon Damage Percent"]]]);
function runTest(test) {
  var _statLookup$get;
  var coilWire = test.name === "Coil Wire";
  if (coilWire)
    (0, import_kolmafia30.visitUrl)("council.php");
  else
    printModtrace((_statLookup$get = statLookup.get(test.name)) !== null && _statLookup$get !== void 0 ? _statLookup$get : test.statName);
  switch (test.run(function() {
    return void 0;
  }, coilWire ? 60 : 1)) {
    case "completed":
      assert(get("csServicesPerformed").includes(test.name), "Did not record completion of ".concat(test.name));
      return;
    case "already completed":
      throw "Re-ran test ".concat(test.statName);
    case "failed":
      throw "Failed test ".concat(test.statName);
    default:
      throw "Unexpected test result";
  }
}
function selectBestFamiliar() {
  var canAttack = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
  for (var _i = 0, _arr = [[$familiar(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral18(["Melodramedary"]))), function() {
    return !have($effect(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral18(["Spit Upon"])))) && get("camelSpit") < 100;
  }], [$familiar(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral18(["Shorter-Order Cook"]))), function() {
    return !haveItemOrEffect($item(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral18(["short stack of pancakes"]))));
  }], [$familiar(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral18(["Garbage Fire"]))), function() {
    return !$items(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral18(["rope, burning newspaper, burning paper crane"]))).some(function(i) {
      return have(i);
    });
  }], [$familiar(_templateObject718 || (_templateObject718 = _taggedTemplateLiteral18(["Artistic Goth Kid"]))), function() {
    return get("_hipsterAdv") < 7;
  }]]; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray14(_arr[_i], 2), fam = _arr$_i[0], check = _arr$_i[1];
    var attacks = fam.physicalDamage || fam.elementalDamage;
    if ((canAttack || !attacks) && check()) {
      return {
        familiar: fam,
        famequip: attacks ? $item(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral18(["none"]))) : $item(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral18(["tiny stillsuit"])))
      };
    }
  }
  return {
    familiar: $familiar(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral18(["Baby Sandworm"]))),
    famequip: $item(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral18(["tiny stillsuit"])))
  };
}
function darkHorse() {
  return {
    name: "Dark Horse",
    completed: function() {
      return get("_horsery").toLowerCase() === "dark horse";
    },
    do: function() {
      return (0, import_kolmafia30.cliExecute)("horsery dark");
    }
  };
}
function innerElf() {
  return {
    name: "Inner Elf",
    ready: function() {
      return (0, import_kolmafia30.myLevel)() >= 13;
    },
    completed: function() {
      return have($effect(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral18(["Inner Elf"]))));
    },
    prepare: function() {
      assert(get("_snokebombUsed") < 3, "Can't banish Mother Slime?");
      Clan.join(config.side_clan);
    },
    choices: {
      326: 1
    },
    // Showdown: (1) fight mother slime (2) leave
    do: $location(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral18(["The Slime Tube"]))),
    post: function() {
      Clan.join(config.main_clan);
      assert($effect(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral18(["Inner Elf"]))));
    },
    outfit: {
      acc3: $item(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral18(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral18(["Machine Elf"])))
    },
    combat: DefaultCombat
  };
}

// src/quests/coilWire.ts
var _templateObject151;
var _templateObject231;
var _templateObject328;
var _templateObject426;
var _templateObject525;
var _templateObject621;
var _templateObject719;
var _templateObject818;
var _templateObject916;
var _templateObject1013;
var _templateObject1112;
var _templateObject1212;
var _templateObject1312;
var _templateObject1411;
var _templateObject1510;
var _templateObject1610;
var _templateObject179;
var _templateObject189;
var _templateObject198;
var _templateObject208;
var _templateObject2113;
var _templateObject2211;
var _templateObject239;
var _templateObject249;
var _templateObject258;
var _templateObject268;
var _templateObject278;
var _templateObject287;
var _templateObject296;
var _templateObject306;
var _templateObject3111;
var _templateObject329;
var _templateObject336;
var _templateObject346;
var _templateObject355;
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
var _templateObject526;
var _templateObject535;
var _templateObject544;
var _templateObject554;
var _templateObject564;
var _templateObject574;
var _templateObject584;
var _templateObject594;
var _templateObject604;
var _templateObject6110;
var _templateObject625;
var _templateObject634;
var _templateObject644;
var _templateObject654;
var _templateObject664;
var _templateObject674;
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
var _templateObject917;
var _templateObject923;
var _templateObject933;
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), true).forEach(function(r2) {
      _defineProperty13(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey16(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey16(arg) {
  var key = _toPrimitive16(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive16(input, hint) {
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
    if (Array.isArray(o) || (it = _unsupportedIterableToArray21(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function _slicedToArray15(arr, i) {
  return _arrayWithHoles15(arr) || _iterableToArrayLimit15(arr, i) || _unsupportedIterableToArray21(arr, i) || _nonIterableRest15();
}
function _nonIterableRest15() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit15(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles15(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray21(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray21(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray21(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray21(o, minLen);
}
function _iterableToArray8(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray21(arr);
}
function _arrayLikeToArray21(arr, len) {
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
  hat: $item(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral19(["Daylight Shavings Helmet"]))),
  back: $item(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral19(["protonic accelerator pack"]))),
  shirt: $item(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral19(["Jurassic Parka"]))),
  weapon: $item(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
  offhand: $item(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral19(["familiar scrapbook"]))),
  pants: $item(_templateObject621 || (_templateObject621 = _taggedTemplateLiteral19(["designer sweatpants"]))),
  acc1: $item(_templateObject719 || (_templateObject719 = _taggedTemplateLiteral19(["hewn moon-rune spoon"]))),
  acc2: $item(_templateObject818 || (_templateObject818 = _taggedTemplateLiteral19(["Powerful Glove"]))),
  acc3: $item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral19(["Kremlin's Greatest Briefcase"]))),
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
    do: callBack,
    post: function() {
      return assert(k);
    }
  };
}
var smashedBarrels = false;
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
      (0, import_kolmafia31.visitUrl)("tutorial.php?action=toot");
      (0, import_kolmafia31.use)($item(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral19(["letter from King Ralph XI"]))));
      (0, import_kolmafia31.use)($item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral19(["pork elf goodies sack"]))));
    }
  }, {
    name: "Talk to quest NPCs",
    completed: function() {
      return Array.from(questHandlers).every(function(_ref) {
        var _ref2 = _slicedToArray15(_ref, 1), key = _ref2[0];
        return get(key) !== "unstarted";
      });
    },
    do: function() {
      var _iterator = _createForOfIteratorHelper14(questHandlers), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray15(_step.value, 2), key = _step$value[0], url = _step$value[1];
          if (get(key) === "unstarted") {
            (0, import_kolmafia31.visitUrl)(url);
            (0, import_kolmafia31.runChoice)(1);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    name: "Smash Barrels",
    completed: function() {
      return smashedBarrels;
    },
    do: function() {
      var page = (0, import_kolmafia31.visitUrl)("barrel.php");
      if (!page.includes("The Barrel Full of Barrels"))
        throw "Failed to load barrel page";
      var regexp = /<div class="ex">(?!<div class="mimic">!<\/div>)<a class="spot" href="(choice.php\?whichchoice=1099&pwd=[a-f0-9]+&option=1&slot=\d+)"><img title="A barrel"/g;
      for (var match; match = regexp.exec(page); null) {
        var url = match[1];
        (0, import_kolmafia31.visitUrl)(url);
      }
      smashedBarrels = true;
    },
    outfit: {
      familiar: $familiar(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral19(["Pair of Stomping Boots"])))
    },
    combat: new CombatStrategy().macro(Macro.abort())
  }, {
    name: "Communism!",
    completed: function() {
      return get("_communismUsed");
    },
    do: function() {
      return (0, import_kolmafia31.useSkill)($skill(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral19(["Communism!"]))));
    }
    // +1 meat
  }, {
    name: "Chateau Desk",
    completed: function() {
      return get("_chateauDeskHarvested");
    },
    do: function() {
      return (0, import_kolmafia31.visitUrl)("place.php?whichplace=chateau&action=chateau_desk1");
    }
    // +1000 meat
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
      return have($skill(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral19(["Insectologist"]))));
    },
    choices: {
      1494: 2
    },
    do: function() {
      return (0, import_kolmafia31.use)($item(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral19(["S.I.T. Course Completion Certificate"]))));
    },
    post: function() {
      return assert($skill(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral19(["Insectologist"]))));
    }
  }].concat(_toConsumableArray8([
    [$effect(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral19(["The Odour of Magick"]))), function() {
      return (0, import_kolmafia31.use)($item(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral19(["natural magick candle"]))));
    }],
    [$item(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral19(['"I Voted!" sticker']))), function() {
      return vote();
    }],
    [$item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral19(["pantogram pants"]))), function() {
      return getPantogramPants();
    }],
    [$item(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral19(["battery (AAA)"]))), function() {
      return harvestBatteries();
    }],
    [$item(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral19(["box of Familiar Jacks"]))), function() {
      return (0, import_kolmafia31.create)($item(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral19(["box of Familiar Jacks"]))));
    }],
    [$item(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral19(["Brutal brogues"]))), function() {
      return (0, import_kolmafia31.cliExecute)("bastille bbq brutalist catapult");
    }],
    [$item(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral19(["green mana"]))), function() {
      return (0, import_kolmafia31.cliExecute)("cheat forest");
    }],
    [$item(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral19(["groveling gravel"]))), function() {
      return (0, import_kolmafia31.cliExecute)("garden pick");
    }],
    [$item(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral19(["wrench"]))), function() {
      return (0, import_kolmafia31.cliExecute)("cheat wrench");
    }],
    [$item(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral19(["Yeg's Motel hand soap"]))), function() {
      return (0, import_kolmafia31.cliExecute)("cargo item ".concat($item(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral19(["Yeg's Motel hand soap"])))));
    }],
    [$item(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral19(["gold detective badge"]))), function() {
      return (0, import_kolmafia31.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }],
    [$item(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral19(["your cowboy boots"]))), function() {
      return (0, import_kolmafia31.visitUrl)("place.php?whichplace=town_right&action=townright_ltt");
    }],
    [$item(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral19(["weeping willow wand"]))), function() {
      (0, import_kolmafia31.visitUrl)("shop.php?whichshop=lathe");
      (0, import_kolmafia31.create)($item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral19(["weeping willow wand"]))));
    }],
    [$item(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral19(["toy accordion"]))), function() {
      return (0, import_kolmafia31.retrieveItem)($item(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral19(["toy accordion"]))));
    }],
    // -135 meat
    [$skill(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral19(["Seek out a Bird"]))), function() {
      return (0, import_kolmafia31.use)($item(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral19(["Bird-a-Day calendar"]))));
    }]
  ].map(function(_ref3) {
    var _ref4 = _slicedToArray15(_ref3, 2), a = _ref4[0], b = _ref4[1];
    return acquire(a, b);
  })), [{
    name: "Acquire Sombrero",
    completed: function() {
      return have($item(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
    },
    prepare: function() {
      return Clan.join(config.main_clan);
    },
    do: function() {
      (0, import_kolmafia31.retrieveItem)($item(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
      assert($item(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral19(["sombrero-mounted sparkler"]))));
    }
  }, {
    name: "Gaze at the Stars",
    completed: function() {
      return have($effect(_templateObject4111 || (_templateObject4111 = _taggedTemplateLiteral19(["That's Just Cloud-Talk, Man"])))) || get("_campAwaySmileBuffs") > 0;
    },
    do: function() {
      return (0, import_kolmafia31.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
    }
  }, {
    name: "Scavenge Daycare",
    completed: function() {
      return get("_daycareGymScavenges") > 0;
    },
    do: function() {
      return scavengeDaycare();
    },
    post: function() {
      return assert(get("_daycareGymScavenges") > 0, "Failed to scavenge");
    }
  }, {
    name: "Borrow Time",
    completed: function() {
      return get("_borrowedTimeUsed");
    },
    acquire: [{
      item: $item(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral19(["borrowed time"]))),
      get: function() {
        return (0, import_kolmafia31.create)($item(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral19(["borrowed time"]))));
      }
    }],
    do: function() {
      return (0, import_kolmafia31.use)($item(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral19(["borrowed time"]))));
    },
    post: function() {
      return assert(get("_borrowedTimeUsed"), "Failed to borrow time");
    }
  }, {
    name: "Setup & Heal",
    completed: function() {
      return get("_hotTubSoaks") > 0;
    },
    do: function() {
      return (0, import_kolmafia31.cliExecute)("hottub");
    },
    effects: [$effect(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral19(["Feeling Excited"]))), $effect(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral19(["Feeling Peaceful"]))), $effect(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral19(["Inscrutable Gaze"]))), $effect(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral19(["Spirit of Garlic"]))), $effect(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral19(["Triple-Sized"]))), $effect(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral19(["Uncucumbered"])))],
    outfit: defaultOutfit
  }, {
    name: "Use energy blobs",
    completed: function() {
      return !have($item(_templateObject5110 || (_templateObject5110 = _taggedTemplateLiteral19(["psychokinetic energy blob"])))) || ((0, import_kolmafia31.myMaxmp)() - (0, import_kolmafia31.myMp)()) / 30 < 1;
    },
    do: function() {
      var blob = $item(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral19(["psychokinetic energy blob"])));
      (0, import_kolmafia31.use)(Math.min((0, import_kolmafia31.itemAmount)(blob), Math.floor(((0, import_kolmafia31.myMaxmp)() - (0, import_kolmafia31.myMp)()) / 30)), blob);
    }
  }, {
    name: "Install Workshed",
    completed: function() {
      return (0, import_kolmafia31.getWorkshed)() === $item(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral19(["Little Geneticist DNA-Splicing Lab"])));
    },
    do: function() {
      return (0, import_kolmafia31.use)($item(_templateObject544 || (_templateObject544 = _taggedTemplateLiteral19(["Little Geneticist DNA-Splicing Lab"]))));
    }
  }, {
    name: "MCD On",
    completed: function() {
      return (0, import_kolmafia31.currentMcd)() > 0;
    },
    do: function() {
      return (0, import_kolmafia31.changeMcd)(11);
    }
  }, {
    name: "Ninja Costume",
    completed: function() {
      return have($item(_templateObject554 || (_templateObject554 = _taggedTemplateLiteral19(["li'l ninja costume"]))));
    },
    choices: {
      297: 3
    },
    // Gravy Fairy Ring: (1) gaffle some mushrooms (2) take fairy gravy boat (3) leave the ring alone
    do: function() {
      return mapMonster($location(_templateObject564 || (_templateObject564 = _taggedTemplateLiteral19(["The Haiku Dungeon"]))), $monster(_templateObject574 || (_templateObject574 = _taggedTemplateLiteral19(["amateur ninja"]))));
    },
    post: function() {
      assert($item(_templateObject584 || (_templateObject584 = _taggedTemplateLiteral19(["li'l ninja costume"]))));
      (0, import_kolmafia31.visitUrl)("questlog.php?which=1");
      assert(!!get("ghostLocation"), "Failed to get protonic ghost notice");
    },
    outfit: function() {
      return _objectSpread7(_objectSpread7({
        back: $item(_templateObject594 || (_templateObject594 = _taggedTemplateLiteral19(["protonic accelerator pack"]))),
        shirt: $item(_templateObject604 || (_templateObject604 = _taggedTemplateLiteral19(["Jurassic Parka"])))
      }, selectBestFamiliar(false)), {}, {
        modes: {
          parka: "dilophosaur"
        }
      });
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject6110 || (_templateObject6110 = _taggedTemplateLiteral19(["Sing Along"])))).skill($skill(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral19(["Spit jurassic acid"])))), $monster(_templateObject634 || (_templateObject634 = _taggedTemplateLiteral19(["amateur ninja"])))).macro(Macro.abort())
  }, {
    name: "Protonic Ghost",
    completed: function() {
      return !get("ghostLocation");
    },
    do: function() {
      return get("ghostLocation");
    },
    post: function() {
      (0, import_kolmafia31.visitUrl)("questlog.php?which=1");
      assert(!get("ghostLocation"), "Still have a ghost location");
    },
    outfit: function() {
      return _objectSpread7({
        back: $item(_templateObject644 || (_templateObject644 = _taggedTemplateLiteral19(["protonic accelerator pack"])))
      }, selectBestFamiliar(false));
    },
    combat: DefaultCombat
  }, {
    name: "Get Crimbo Shrub decorations",
    completed: function() {
      return have($item(_templateObject654 || (_templateObject654 = _taggedTemplateLiteral19(["box of old Crimbo decorations"]))));
    },
    do: function() {
      return (0, import_kolmafia31.useFamiliar)($familiar(_templateObject664 || (_templateObject664 = _taggedTemplateLiteral19(["Crimbo Shrub"]))));
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
      return DNALab_exports.isHybridized() || get("_saberForceUses") > 0 || CombatLoversLocket_exports.monstersReminisced().includes($monster(_templateObject674 || (_templateObject674 = _taggedTemplateLiteral19(["cocktail shrimp"]))));
    },
    do: function() {
      return CombatLoversLocket_exports.reminisce($monster(_templateObject683 || (_templateObject683 = _taggedTemplateLiteral19(["cocktail shrimp"]))));
    },
    post: function() {
      assert($item(_templateObject693 || (_templateObject693 = _taggedTemplateLiteral19(["shrimp cocktail"]))));
      assert(CombatLoversLocket_exports.monstersReminisced().includes($monster(_templateObject703 || (_templateObject703 = _taggedTemplateLiteral19(["cocktail shrimp"])))), "Failed to reminisce cocktail shrimp?");
      assert(get("_saberForceUses") > 0, "Failed to increment force uses");
      DNALab_exports.hybridize();
      assert(DNALab_exports.isHybridized(), "Failed to hybridize");
      assert(DNALab_exports.isHybridized($effect(_templateObject7110 || (_templateObject7110 = _taggedTemplateLiteral19(["Human-Fish Hybrid"])))), "Failed to hybridize with fish");
    },
    outfit: {
      weapon: $item(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject733 || (_templateObject733 = _taggedTemplateLiteral19(["Crimbo Shrub"])))
    },
    combat: new CombatStrategy().ccs(
      "item ".concat($item(_templateObject743 || (_templateObject743 = _taggedTemplateLiteral19(["DNA extraction syringe"]))), "\n          skill ").concat($skill(_templateObject753 || (_templateObject753 = _taggedTemplateLiteral19(["Open a Big Red Present"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject763 || (_templateObject763 = _taggedTemplateLiteral19(["Use the Force"])))),
      $monster(_templateObject773 || (_templateObject773 = _taggedTemplateLiteral19(["cocktail shrimp"])))
      // + 2000 meat
    ).macro(Macro.abort())
  }, {
    name: "Sausage Goblin",
    completed: function() {
      return get("_sausageFights") > 0;
    },
    do: $location(_templateObject783 || (_templateObject783 = _taggedTemplateLiteral19(["Noob Cave"]))),
    post: function() {
      return assert(get("_sausageFights") > 0, "Didn't increment sausage counter?");
    },
    outfit: function() {
      return _objectSpread7(_objectSpread7({
        back: $item(_templateObject793 || (_templateObject793 = _taggedTemplateLiteral19(["unwrapped knock-off retro superhero cape"]))),
        offhand: $item(_templateObject803 || (_templateObject803 = _taggedTemplateLiteral19(["Kramco Sausage-o-Matic\u2122"])))
      }, selectBestFamiliar()), {}, {
        modes: {
          retrocape: ["heck", "thrill"]
        }
      });
    },
    combat: DefaultCombat
  }, {
    name: "Voting Booth Monster",
    ready: function() {
      return voterMonsterNow();
    },
    completed: function() {
      return get("_voteFreeFights") > 0;
    },
    do: $location(_templateObject819 || (_templateObject819 = _taggedTemplateLiteral19(["Noob Cave"]))),
    post: function() {
      return assert(get("_voteFreeFights") > 0, "Didn't increment vote counter?");
    },
    outfit: function() {
      return _objectSpread7({
        offhand: defaultOutfit.offhand,
        acc3: $item(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral19(['"I Voted!" sticker'])))
      }, selectBestFamiliar());
    },
    combat: DefaultCombat
  }, {
    name: "Send autumn-aton",
    completed: function() {
      return !AutumnAton_exports.available();
    },
    do: function() {
      AutumnAton_exports.sendTo($location(_templateObject833 || (_templateObject833 = _taggedTemplateLiteral19(["The Sleazy Back Alley"]))));
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
    effects: [$effect(_templateObject843 || (_templateObject843 = _taggedTemplateLiteral19(["[1458]Blood Sugar Sauce Magic"])))],
    // 1457 for other classes
    outfit: {
      hat: $item(_templateObject853 || (_templateObject853 = _taggedTemplateLiteral19(["Iunion Crown"]))),
      back: $item(_templateObject863 || (_templateObject863 = _taggedTemplateLiteral19(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject873 || (_templateObject873 = _taggedTemplateLiteral19(["Jurassic Parka"]))),
      weapon: $item(_templateObject883 || (_templateObject883 = _taggedTemplateLiteral19(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject893 || (_templateObject893 = _taggedTemplateLiteral19(["wrench, industrial fire extinguisher"]))),
      pants: $item(_templateObject903 || (_templateObject903 = _taggedTemplateLiteral19(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral19(["hewn moon-rune spoon"]))),
      acc2: $item(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral19(["Retrospecs"]))),
      acc3: $item(_templateObject933 || (_templateObject933 = _taggedTemplateLiteral19(["Kremlin's Greatest Briefcase"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["heck", "thrill"]
      }
    }
  }])
};

// src/quests/combatFrequency.ts
var _templateObject160;
var _templateObject240;
var _templateObject330;
var _templateObject428;
var _templateObject527;
var _templateObject626;
var _templateObject720;
var _templateObject820;
var _templateObject918;
var _templateObject1014;
var _templateObject1113;
var _templateObject1213;
var _templateObject1313;
var _templateObject1412;
var _templateObject1511;
var _templateObject1611;
var _templateObject1710;
var _templateObject1810;
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
    effects: [$effect(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral20(["Blood Bond"]))), $effect(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral20(["Empathy"]))), $effect(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral20(["Feeling Lonely"]))), $effect(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral20(["Leash of Linguini"]))), $effect(_templateObject527 || (_templateObject527 = _taggedTemplateLiteral20(["Silence of the God Lobster"]))), $effect(_templateObject626 || (_templateObject626 = _taggedTemplateLiteral20(["Silent Running"]))), $effect(_templateObject720 || (_templateObject720 = _taggedTemplateLiteral20(["Smooth Movements"]))), $effect(_templateObject820 || (_templateObject820 = _taggedTemplateLiteral20(["The Sonata of Sneakiness"]))), $effect(_templateObject918 || (_templateObject918 = _taggedTemplateLiteral20(["Throwing Some Shade"])))],
    outfit: {
      hat: $item(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral20(["very pointy crown"]))),
      back: $item(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral20(["protonic accelerator pack"]))),
      shirt: $item(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral20(["Jurassic Parka"]))),
      offhand: $item(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral20(["unbreakable umbrella"]))),
      pants: $item(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral20(["pantogram pants"]))),
      acc2: $item(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral20(["atlas of local maps"]))),
      acc3: $item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral20(["Kremlin's Greatest Briefcase"]))),
      famequip: $item(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral20(["tiny stillsuit"]))),
      familiar: $familiar(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral20(["Disgeist"]))),
      modes: {
        parka: "pterodactyl",
        umbrella: "cocoon"
      }
    }
  }]
};

// src/quests/donate.ts
var import_kolmafia32 = require("kolmafia");
var _templateObject161;
var _templateObject241;
var _templateObject331;
var _templateObject429;
var _templateObject528;
var _templateObject627;
var _templateObject721;
var _templateObject821;
var _templateObject919;
var _templateObject1015;
var _templateObject1114;
var _templateObject1214;
var _templateObject1314;
var _templateObject1413;
var _templateObject1512;
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
    (0, import_kolmafia32.runChoice)(c);
  }
}
var DonateQuest = {
  name: "Donate Your Body to Science",
  completed: function() {
    return get("kingLiberated");
  },
  tasks: [{
    name: "Finish Rufus Quest",
    ready: function() {
      return get("questRufus") === "step1";
    },
    completed: function() {
      return have($item(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral21(["Rufus's shadow lodestone"]))));
    },
    // Calling Rufus Back: (1) "Yes!" (6) Hang up
    choices: {
      1498: 1
    },
    do: function() {
      return (0, import_kolmafia32.use)($item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral21(["closed-circuit pay phone"]))));
    },
    post: function() {
      assert($item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral21(["Rufus's shadow lodestone"]))));
      assert(get("questRufus") === "unstarted", "Failed to finish Rufus quest?");
    }
  }, {
    name: "Grab Comic",
    ready: function() {
      return (0, import_kolmafia32.storageAmount)($item(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral21(["Batfellow comic"])))) > 0;
    },
    completed: function() {
      return (0, import_kolmafia32.itemAmount)($item(_templateObject528 || (_templateObject528 = _taggedTemplateLiteral21(["Batfellow comic"])))) > 0 || get("_batfellowToday", false);
    },
    do: function() {
      return (0, import_kolmafia32.takeStorage)(1, $item(_templateObject627 || (_templateObject627 = _taggedTemplateLiteral21(["Batfellow comic"]))));
    }
  }, {
    name: "Enter the Batfellow",
    completed: function() {
      return !have($item(_templateObject721 || (_templateObject721 = _taggedTemplateLiteral21(["Batfellow comic"])))) || get("_batfellowToday", false);
    },
    acquire: [{
      item: $item(_templateObject821 || (_templateObject821 = _taggedTemplateLiteral21(["tiny stillsuit"])))
    }],
    prepare: function() {
      spendAllMpOnLibrams();
      Macro.skill($skill(_templateObject919 || (_templateObject919 = _taggedTemplateLiteral21(["Bat-Kick"])))).repeat().setAutoAttack();
    },
    choices: {
      1133: 1
    },
    do: function() {
      return (0, import_kolmafia32.use)(1, $item(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral21(["Batfellow comic"]))));
    },
    post: function() {
      return _set("_batfellowToday", true);
    },
    outfit: function() {
      var stillFam = $familiar(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral21(["Shorter-Order Cook"])));
      (0, import_kolmafia32.equip)(stillFam, $item(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral21(["tiny stillsuit"]))));
      var myFams = import_kolmafia32.Familiar.all().filter(function(f) {
        return !f.attributes.includes("pokefam") && (0, import_kolmafia32.haveFamiliar)(f) && f !== stillFam;
      });
      var randomFam = myFams[Math.floor(Math.random() * myFams.length)];
      assert(randomFam && randomFam !== $familiar(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral21(["none"]))) && (0, import_kolmafia32.haveFamiliar)(randomFam), "Failed to select a valid familiar?");
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_rnd");
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_cave&action=batman_cave_car");
      (0, import_kolmafia32.runChoice)(5);
    }
  }, {
    name: "Fight a common criminal",
    completed: function() {
      return get("batmanTimeLeft") < 4;
    },
    do: function() {
      while (get("batmanTimeLeft") >= 4) {
        (0, import_kolmafia32.visitUrl)((0, import_kolmafia32.toUrl)($location(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral21(["Center Park After Dark"])))));
        if ((0, import_kolmafia32.currentRound)() > 0)
          (0, import_kolmafia32.runCombat)(Macro.skill($skill(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral21(["Bat-Kick"])))).repeat().toString());
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
      (0, import_kolmafia32.visitUrl)("place.php?whichplace=batman_park&action=batman_park_car");
      (0, import_kolmafia32.runChoice)(9);
      (0, import_kolmafia32.setAutoAttack)(0);
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
var import_kolmafia33 = require("kolmafia");
var _templateObject170;
var _templateObject250;
var _templateObject337;
var _templateObject430;
var _templateObject529;
var _templateObject628;
var _templateObject725;
var _templateObject825;
var _templateObject920;
var _templateObject1016;
var _templateObject1115;
var _templateObject1215;
var _templateObject1315;
var _templateObject1414;
var _templateObject1513;
var _templateObject1612;
var _templateObject1711;
var _templateObject1811;
var _templateObject199;
var _templateObject209;
var _templateObject2114;
var _templateObject2212;
var _templateObject2310;
var _templateObject2410;
var _templateObject259;
var _templateObject269;
var _templateObject279;
var _templateObject288;
var _templateObject297;
var _templateObject307;
var _templateObject3112;
var _templateObject3210;
var _templateObject338;
var _templateObject347;
var _templateObject356;
function _slicedToArray16(arr, i) {
  return _arrayWithHoles16(arr) || _iterableToArrayLimit16(arr, i) || _unsupportedIterableToArray22(arr, i) || _nonIterableRest16();
}
function _nonIterableRest16() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray22(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray22(o, minLen);
}
function _arrayLikeToArray22(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit16(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles16(arr) {
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
  tasks: [{
    name: "Meteor Showered",
    completed: function() {
      return have($effect(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral22(["Meteor Showered"]))));
    },
    do: $location(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral22(["The Dire Warren"]))),
    post: function() {
      return assert($effect(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral22(["Meteor Showered"]))));
    },
    outfit: {
      weapon: $item(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral22(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject529 || (_templateObject529 = _taggedTemplateLiteral22(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject628 || (_templateObject628 = _taggedTemplateLiteral22(["Meteor Shower"]))), "\n           twiddle your thumbs\n           skill ").concat($skill(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral22(["Use the Force"])))), $monster(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral22(["fluffy bunny"])))).macro(Macro.abort())
  }, {
    name: "Familiar Weight Test",
    completed: function() {
      return CommunityService.FamiliarWeight.isDone();
    },
    prepare: function() {
      (0, import_kolmafia33.visitUrl)("inv_equip.php?pwd=&action=equip&whichitem=".concat($item(_templateObject920 || (_templateObject920 = _taggedTemplateLiteral22(["homemade robot gear"]))).id));
      (0, import_kolmafia33.visitUrl)("charpane.php");
      var needMore = function() {
        return (0, import_kolmafia33.weightAdjustment)() < 190;
      };
      var useIfUnused = function(i) {
        if (have(i) && !have(itemToEffect(i)))
          (0, import_kolmafia33.use)(i);
      };
      if (needMore())
        useIfUnused($item(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral22(["green candy heart"]))));
      if (needMore())
        useIfUnused($item(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral22(["resolution: be kinder"]))));
      var librams = [[4, $item(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral22(["love song of icy revenge"])))], [5, $item(_templateObject1315 || (_templateObject1315 = _taggedTemplateLiteral22(["pulled blue taffy"])))]];
      librams.forEach(function(_ref) {
        var _ref2 = _slicedToArray16(_ref, 2), n = _ref2[0], i = _ref2[1];
        if (needMore())
          (0, import_kolmafia33.use)(Math.min(n, (0, import_kolmafia33.itemAmount)(i)), i);
      });
    },
    do: function() {
      return runTest(CommunityService.FamiliarWeight);
    },
    effects: [$effect(_templateObject1414 || (_templateObject1414 = _taggedTemplateLiteral22(["A Girl Named Sue"]))), $effect(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral22(["Billiards Belligerence"]))), $effect(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral22(["Blood Bond"]))), $effect(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral22(["Do I Know You From Somewhere?"]))), $effect(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral22(["Empathy"]))), $effect(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral22(["Human-Machine Hybrid"]))), $effect(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral22(["Human-Fish Hybrid"]))), $effect(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral22(["Leash of Linguini"]))), $effect(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral22(["Meteor Showered"]))), $effect(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral22(["Open Heart Surgery"]))), $effect(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral22(["Puzzle Champ"]))), $effect(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral22(["Robot Friends"]))), $effect(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral22(["Shortly Stacked"]))), $effect(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral22(["Shrimpin' Ain't Easy"]))), $effect(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral22(["You Can Really Taste the Dormouse"])))],
    outfit: {
      hat: $item(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral22(["Daylight Shavings Helmet"]))),
      weapon: $item(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral22(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral22(["burning paper crane, rope, familiar scrapbook"]))),
      acc1: $item(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral22(["Brutal brogues"]))),
      acc2: $item(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral22(["hewn moon-rune spoon"]))),
      acc3: $item(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral22(["Beach Comb"]))),
      familiar: $familiar(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral22(["Comma Chameleon"])))
    }
  }]
};

// src/quests/hotResist.ts
var _templateObject171;
var _templateObject251;
var _templateObject339;
var _templateObject431;
var _templateObject530;
var _templateObject629;
var _templateObject726;
var _templateObject826;
var _templateObject921;
var _templateObject1017;
var _templateObject1116;
var _templateObject1216;
var _templateObject1316;
var _templateObject1415;
var _templateObject1514;
var _templateObject1613;
var _templateObject1712;
var _templateObject1812;
var _templateObject1910;
var _templateObject2010;
var _templateObject2115;
var _templateObject2213;
var _templateObject2311;
var _templateObject2411;
var _templateObject2510;
var _templateObject2610;
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
      return have($effect(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral23(["Fireproof Foam Suit"]))));
    },
    do: $location(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral23(["The Dire Warren"]))),
    post: function() {
      return assert($effect(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral23(["Fireproof Foam Suit"]))));
    },
    outfit: {
      weapon: $item(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral23(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject530 || (_templateObject530 = _taggedTemplateLiteral23(["industrial fire extinguisher"]))),
      familiar: $familiar(_templateObject629 || (_templateObject629 = _taggedTemplateLiteral23(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject726 || (_templateObject726 = _taggedTemplateLiteral23(["Fire Extinguisher: Foam Yourself"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject826 || (_templateObject826 = _taggedTemplateLiteral23(["Use the Force"])))), $monster(_templateObject921 || (_templateObject921 = _taggedTemplateLiteral23(["fluffy bunny"])))).macro(Macro.abort())
  }, {
    name: "Hot Resist Test",
    completed: function() {
      return CommunityService.HotRes.isDone();
    },
    do: function() {
      return runTest(CommunityService.HotRes);
    },
    effects: [$effect(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral23(["Astral Shell"]))), $effect(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral23(["Blood Bond"]))), $effect(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral23(["Elemental Saucesphere"]))), $effect(_templateObject1316 || (_templateObject1316 = _taggedTemplateLiteral23(["Empathy"]))), $effect(_templateObject1415 || (_templateObject1415 = _taggedTemplateLiteral23(["Fireproof Foam Suit"]))), $effect(_templateObject1514 || (_templateObject1514 = _taggedTemplateLiteral23(["Leash of Linguini"])))],
    outfit: {
      hat: $item(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral23(["Daylight Shavings Helmet"]))),
      back: $item(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral23(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral23(["Jurassic Parka"]))),
      weapon: $item(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral23(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral23(["industrial fire extinguisher"]))),
      pants: $item(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral23(["designer sweatpants"]))),
      acc1: $item(_templateObject2213 || (_templateObject2213 = _taggedTemplateLiteral23(["Brutal brogues"]))),
      acc2: $item(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral23(["hewn moon-rune spoon"]))),
      acc3: $item(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral23(["cursed monkey's paw"]))),
      famequip: $item(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral23(["tiny stillsuit"]))),
      familiar: $familiar(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral23(["Exotic Parrot"]))),
      modes: {
        parka: "pterodactyl",
        retrocape: ["vampire", "hold"]
      }
    }
  }]
};

// src/quests/itemDrop.ts
var _templateObject180;
var _templateObject260;
var _templateObject340;
var _templateObject436;
var _templateObject531;
var _templateObject630;
var _templateObject727;
var _templateObject827;
var _templateObject924;
var _templateObject1018;
var _templateObject1117;
var _templateObject1217;
var _templateObject1317;
var _templateObject1416;
var _templateObject1515;
var _templateObject1614;
var _templateObject1713;
var _templateObject1813;
var _templateObject1911;
var _templateObject2011;
var _templateObject2116;
var _templateObject2214;
var _templateObject2312;
var _templateObject2412;
var _templateObject2511;
var _templateObject2611;
var _templateObject2710;
var _templateObject289;
var _templateObject298;
var _templateObject308;
var _templateObject3113;
var _templateObject3211;
var _templateObject3310;
var _templateObject348;
var _templateObject357;
var _templateObject366;
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
      return have($effect(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral24(["Bat-Adjacent Form"]))));
    },
    do: $location(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral24(["The Dire Warren"]))),
    post: function() {
      return assert(get("_banderRunaways") < 10, "Didn't find cosmic bowling ball?");
    },
    effects: $effects(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral24(["Ode to Booze"]))),
    outfit: {
      back: $item(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral24(["vampyric cloake"]))),
      familiar: $familiar(_templateObject531 || (_templateObject531 = _taggedTemplateLiteral24(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.externalIf(have($item(_templateObject630 || (_templateObject630 = _taggedTemplateLiteral24(["cosmic bowling ball"])))), Macro.skill($skill(_templateObject727 || (_templateObject727 = _taggedTemplateLiteral24(["Become a Bat"])))).skill($skill(_templateObject827 || (_templateObject827 = _taggedTemplateLiteral24(["Bowl Straight Up"]))))).runaway();
    })
  }, {
    name: "Booze & Item Drop Test",
    completed: function() {
      return CommunityService.BoozeDrop.isDone();
    },
    do: function() {
      return runTest(CommunityService.BoozeDrop);
    },
    acquire: [{
      item: $item(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral24(["wad of used tape"])))
    }],
    effects: [$effect(_templateObject1018 || (_templateObject1018 = _taggedTemplateLiteral24(["Bat-Adjacent Form"]))), $effect(_templateObject1117 || (_templateObject1117 = _taggedTemplateLiteral24(["Blessing of the Bird"]))), $effect(_templateObject1217 || (_templateObject1217 = _taggedTemplateLiteral24(["Blessing of your favorite Bird"]))), $effect(_templateObject1317 || (_templateObject1317 = _taggedTemplateLiteral24(["Cosmic Ball in the Air"]))), $effect(_templateObject1416 || (_templateObject1416 = _taggedTemplateLiteral24(["Crunching Leaves"]))), $effect(_templateObject1515 || (_templateObject1515 = _taggedTemplateLiteral24(["Fat Leon's Phat Loot Lyric"]))), $effect(_templateObject1614 || (_templateObject1614 = _taggedTemplateLiteral24(["Feeling Lost"]))), $effect(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral24(["Human-Pirate Hybrid"]))), $effect(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral24(["items.enh"]))), $effect(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral24(["Nearly All-Natural"]))), $effect(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral24(["Singer's Faithful Ocelot"]))), $effect(_templateObject2116 || (_templateObject2116 = _taggedTemplateLiteral24(["Steely-Eyed Squint"]))), $effect(_templateObject2214 || (_templateObject2214 = _taggedTemplateLiteral24(["The Spirit of Taking"]))), $effect(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral24(["Uncucumbered"])))],
    outfit: {
      hat: $item(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral24(["wad of used tape"]))),
      back: $item(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral24(["vampyric cloake"]))),
      weapon: [$item(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral24(["extra-large utility candle"]))), $item(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral24(["novelty sparkling candle"]))), $item(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral24(["runed taper candle"]))), $item(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral24(["oversized sparkler"]))), $item(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral24(["none"])))],
      offhand: $item(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral24(["unbreakable umbrella"]))),
      acc1: $item(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral24(["Guzzlr tablet"]))),
      acc2: $item(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral24(["gold detective badge"]))),
      acc3: $item(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral24(["Cincho de Mayo"]))),
      famequip: $item(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral24(["li'l ninja costume"]))),
      familiar: $familiar(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral24(["Trick-or-Treating Tot"]))),
      modes: {
        umbrella: "bucket style"
      }
    }
  }]
};

// src/quests/leveling.ts
var import_kolmafia34 = require("kolmafia");
var _templateObject181;
var _templateObject261;
var _templateObject341;
var _templateObject437;
var _templateObject536;
var _templateObject631;
var _templateObject728;
var _templateObject828;
var _templateObject925;
var _templateObject1019;
var _templateObject1118;
var _templateObject1218;
var _templateObject1318;
var _templateObject1417;
var _templateObject1516;
var _templateObject1615;
var _templateObject1714;
var _templateObject1814;
var _templateObject1912;
var _templateObject2012;
var _templateObject2117;
var _templateObject2215;
var _templateObject2313;
var _templateObject2413;
var _templateObject2512;
var _templateObject2612;
var _templateObject2711;
var _templateObject2810;
var _templateObject299;
var _templateObject309;
var _templateObject3114;
var _templateObject3212;
var _templateObject3311;
var _templateObject349;
var _templateObject358;
var _templateObject367;
var _templateObject376;
var _templateObject386;
var _templateObject396;
var _templateObject406;
var _templateObject4112;
var _templateObject4210;
var _templateObject438;
var _templateObject446;
var _templateObject456;
var _templateObject466;
var _templateObject476;
var _templateObject486;
var _templateObject496;
var _templateObject506;
var _templateObject5111;
var _templateObject5210;
var _templateObject537;
var _templateObject545;
var _templateObject555;
var _templateObject565;
var _templateObject575;
var _templateObject585;
var _templateObject595;
var _templateObject605;
var _templateObject6111;
var _templateObject6210;
var _templateObject635;
var _templateObject645;
var _templateObject655;
var _templateObject665;
var _templateObject675;
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
var _templateObject926;
var _templateObject934;
var _templateObject943;
var _templateObject953;
var _templateObject963;
var _templateObject973;
var _templateObject983;
var _templateObject993;
var _templateObject1003;
var _templateObject10110;
var _templateObject1023;
var _templateObject1033;
var _templateObject1043;
var _templateObject1053;
var _templateObject1063;
var _templateObject1073;
var _templateObject1083;
var _templateObject1093;
var _templateObject1102;
var _templateObject1119;
var _templateObject1123;
var _templateObject1133;
var _templateObject1143;
var _templateObject1153;
var _templateObject1163;
var _templateObject1173;
var _templateObject1183;
var _templateObject1192;
var _templateObject1202;
var _templateObject1219;
var _templateObject1223;
var _templateObject1233;
var _templateObject1243;
var _templateObject1253;
var _templateObject1263;
var _templateObject1273;
var _templateObject1282;
var _templateObject1292;
var _templateObject1302;
var _templateObject1319;
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
var _templateObject1442;
var _templateObject1452;
var _templateObject1462;
var _templateObject1472;
var _templateObject1482;
var _templateObject1492;
var _templateObject1502;
var _templateObject1517;
var _templateObject1522;
var _templateObject1532;
var _templateObject1542;
var _templateObject1552;
var _templateObject1562;
var _templateObject1572;
var _templateObject1582;
var _templateObject1592;
var _templateObject1602;
var _templateObject1616;
var _templateObject1622;
var _templateObject1632;
var _templateObject1642;
var _templateObject1652;
var _templateObject1662;
var _templateObject1672;
var _templateObject1682;
var _templateObject1692;
var _templateObject1702;
var _templateObject1715;
var _templateObject1722;
var _templateObject1732;
var _templateObject1742;
var _templateObject1752;
var _templateObject1762;
var _templateObject1772;
var _templateObject1782;
var _templateObject1792;
var _templateObject1802;
var _templateObject1815;
var _templateObject1822;
var _templateObject1832;
var _templateObject1842;
var _templateObject1852;
var _templateObject1862;
var _templateObject1872;
var _templateObject1882;
var _templateObject1892;
var _templateObject190;
var _templateObject191;
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
var _templateObject2118;
var _templateObject2122;
var _templateObject2132;
var _templateObject2142;
var _templateObject2152;
var _templateObject2162;
var _templateObject2172;
var _templateObject2182;
var _templateObject2192;
var _templateObject2202;
var _templateObject2216;
var _templateObject2222;
var _templateObject2232;
var _templateObject2242;
var _templateObject2252;
var _templateObject2262;
var _templateObject2272;
var _templateObject2282;
var _templateObject2292;
var _templateObject2302;
var _templateObject2314;
var _templateObject2322;
var _templateObject2332;
var _templateObject2342;
var _templateObject2352;
var _templateObject2362;
var _templateObject2372;
var _templateObject2382;
var _templateObject2392;
var _templateObject2402;
var _templateObject2414;
var _templateObject2422;
var _templateObject2432;
var _templateObject2442;
var _templateObject2452;
var _templateObject2462;
var _templateObject2472;
var _templateObject2482;
var _templateObject2492;
var _templateObject2502;
var _templateObject2513;
var _templateObject2522;
var _templateObject2532;
var _templateObject2542;
var _templateObject2552;
var _templateObject2562;
var _templateObject2572;
var _templateObject2582;
var _templateObject2592;
var _templateObject2602;
var _templateObject2613;
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
var _templateObject280;
var _templateObject281;
var _templateObject2822;
var _templateObject2832;
var _templateObject2842;
var _templateObject2852;
var _templateObject2862;
var _templateObject2872;
var _templateObject2882;
var _templateObject2892;
var _templateObject290;
var _templateObject291;
var _templateObject2922;
var _templateObject2932;
var _templateObject2942;
var _templateObject2952;
var _templateObject2962;
var _templateObject2972;
var _templateObject2982;
var _templateObject2992;
var _templateObject300;
var _templateObject301;
var _templateObject3022;
var _templateObject3032;
var _templateObject3042;
var _templateObject3052;
var _templateObject3062;
var _templateObject3072;
var _templateObject3082;
var _templateObject3092;
var _templateObject3102;
var _templateObject3115;
var _templateObject3122;
var _templateObject3132;
var _templateObject3142;
var _templateObject3152;
var _templateObject3162;
var _templateObject3172;
var _templateObject3182;
var _templateObject3192;
var _templateObject3202;
var _templateObject3213;
var _templateObject3222;
var _templateObject3232;
var _templateObject3242;
var _templateObject3252;
var _templateObject3262;
var _templateObject3272;
var _templateObject3282;
var _templateObject3292;
var _templateObject3302;
var _templateObject3312;
var _templateObject3322;
var _templateObject3332;
var _templateObject3342;
var _templateObject3352;
var _templateObject3362;
var _templateObject3372;
var _templateObject3382;
var _templateObject3392;
var _templateObject3402;
var _templateObject3412;
var _templateObject3422;
var _templateObject3432;
function _slicedToArray17(arr, i) {
  return _arrayWithHoles17(arr) || _iterableToArrayLimit17(arr, i) || _unsupportedIterableToArray23(arr, i) || _nonIterableRest17();
}
function _nonIterableRest17() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit17(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles17(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray23(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray23(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray23(o, minLen);
}
function _iterableToArray9(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray23(arr);
}
function _arrayLikeToArray23(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), true).forEach(function(r2) {
      _defineProperty14(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey17(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey17(arg) {
  var key = _toPrimitive17(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive17(input, hint) {
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
function _taggedTemplateLiteral25(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var combatData = /* @__PURE__ */ new Map([[$location(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral25(["The Tunnel of L.O.V.E."]))), false]]);
var capFallback = /* @__PURE__ */ new Map([[$monster(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral25(["Government agent"]))), 1e4], [$monster(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral25(["LOV Enforcer"]))), 1e4], [$monster(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral25(["LOV Engineer"]))), 1e4], [$monster(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral25(["LOV Equivocator"]))), 1e4], [$monster(_templateObject631 || (_templateObject631 = _taggedTemplateLiteral25(["toxic beastie"]))), 11111]]);
function levelingOutfit(target) {
  var monsters = target instanceof import_kolmafia34.Location ? (0, import_kolmafia34.getMonsters)(target) : [target];
  var cap = sum(monsters, function(m) {
    var match = m.attributes.match(/Cap: (\d+)/);
    var fallback = capFallback.get(m);
    return match ? Number(match[1]) : fallback ? fallback : Infinity;
  }) / monsters.length;
  var multiplyML = (0, import_kolmafia34.myBuffedstat)((0, import_kolmafia34.myPrimestat)()) < cap;
  return _objectSpread8(_objectSpread8({
    hat: $item(_templateObject728 || (_templateObject728 = _taggedTemplateLiteral25(["Daylight Shavings Helmet"]))),
    back: $items(_templateObject828 || (_templateObject828 = _taggedTemplateLiteral25(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
    shirt: get("garbageShirtCharge") > 0 ? $item(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))) : $item(_templateObject1019 || (_templateObject1019 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
    weapon: $item(_templateObject1118 || (_templateObject1118 = _taggedTemplateLiteral25(["Fourth of May Cosplay Saber"]))),
    offhand: multiplyML ? $item(_templateObject1218 || (_templateObject1218 = _taggedTemplateLiteral25(["unbreakable umbrella"]))) : $item(_templateObject1318 || (_templateObject1318 = _taggedTemplateLiteral25(["familiar scrapbook"]))),
    pants: $item(_templateObject1417 || (_templateObject1417 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
    acc1: $item(_templateObject1516 || (_templateObject1516 = _taggedTemplateLiteral25(["hewn moon-rune spoon"]))),
    acc2: $items(_templateObject1615 || (_templateObject1615 = _taggedTemplateLiteral25(["battle broom, gold detective badge"]))),
    acc3: $item(_templateObject1714 || (_templateObject1714 = _taggedTemplateLiteral25(["Beach Comb"])))
  }, selectBestFamiliar(combatData.get(target))), {}, {
    modes: {
      parka: "kachungasaur",
      retrocape: ["heck", "thrill"],
      umbrella: "broken"
    }
  });
}
function lightweightOutfit() {
  return _objectSpread8(_objectSpread8({
    hat: $item(_templateObject1814 || (_templateObject1814 = _taggedTemplateLiteral25(["Iunion Crown"]))),
    back: $items(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral25(["LOV Epaulettes, unwrapped knock-off retro superhero cape"]))),
    shirt: get("garbageShirtCharge") > 0 ? $item(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral25(["makeshift garbage shirt"]))) : $item(_templateObject2117 || (_templateObject2117 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
    weapon: $item(_templateObject2215 || (_templateObject2215 = _taggedTemplateLiteral25(["June cleaver"]))),
    offhand: $item(_templateObject2313 || (_templateObject2313 = _taggedTemplateLiteral25(["unbreakable umbrella"]))),
    pants: $item(_templateObject2413 || (_templateObject2413 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
    acc1: $item(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral25(["Eight Days a Week Pill Keeper"]))),
    acc2: $items(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral25(["battle broom, gold detective badge"]))),
    acc3: $item(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral25(["combat lover's locket"])))
  }, selectBestFamiliar()), {}, {
    modes: {
      parka: "kachungasaur",
      retrocape: ["heck", "thrill"],
      umbrella: "broken"
    }
  });
}
function getHowManySausagesToEat() {
  if ((0, import_kolmafia34.myMaxmp)() - (0, import_kolmafia34.myMp)() < 999)
    return 0;
  if ((0, import_kolmafia34.itemAmount)($item(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral25(["magical sausage casing"])))) < 1)
    return 0;
  if ((0, import_kolmafia34.myMaxmp)() - (0, import_kolmafia34.mpCost)($skill(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral25(["Summon BRICKOs"])))) < config.MP_SAFE_LIMIT)
    return 0;
  var offset = get("_sausagesMade");
  if (offset >= 23)
    return 0;
  var costsOfNext = _toConsumableArray9(Array(24).keys()).map(function(k) {
    return k * 111;
  }).splice(1);
  var mpRefills = Math.floor(((0, import_kolmafia34.myMaxmp)() - (0, import_kolmafia34.myMp)()) / 999);
  var toEat = 0;
  var totalCost = 0;
  while (toEat < mpRefills && toEat + offset < costsOfNext.length) {
    totalCost += costsOfNext[toEat + offset];
    if ((0, import_kolmafia34.myMeat)() - totalCost < config.MEAT_SAFE_LIMIT)
      break;
    toEat++;
  }
  return Math.min(toEat, (0, import_kolmafia34.itemAmount)($item(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral25(["magical sausage casing"])))));
}
function topOffHp() {
  var delta = (0, import_kolmafia34.myMaxhp)() - (0, import_kolmafia34.myHp)();
  var restorers = /* @__PURE__ */ new Map([[$skill(_templateObject3114 || (_templateObject3114 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))), 1e3], [$skill(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral25(["Disco Nap"]))), 40], [$skill(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral25(["Lasagna Bandages"]))), 20], [$skill(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral25(["Tongue of the Walrus"]))), 35]]);
  while ((0, import_kolmafia34.myHp)() < (0, import_kolmafia34.myMaxhp)()) {
    var best = Array.from(restorers).reduce(function(target, _ref) {
      var _ref2 = _slicedToArray17(_ref, 2), skill = _ref2[0], restores = _ref2[1];
      var rate = Math.min(delta, restores) / (0, import_kolmafia34.mpCost)(skill);
      if (rate > target[1])
        return [skill, rate];
      else
        return target;
    }, [$skill(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral25(["none"]))), 0])[0];
    if (best === $skill(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral25(["none"]))))
      throw "Couldn't find an restorer for ".concat((0, import_kolmafia34.myHp)(), "/").concat((0, import_kolmafia34.myMaxhp)(), " hp");
    (0, import_kolmafia34.useSkill)(best);
  }
}
function validateFreeFightCounter(prop, url, location) {
  var pre = get(prop);
  (0, import_kolmafia34.visitUrl)(url);
  var delta = get(prop) - pre;
  assert(delta === 0, "Miscounted ".concat(delta, " turn(s) at ").concat(location, "?"));
}
var Leveling = {
  name: "Leveling",
  completed: function() {
    return get("csServicesPerformed").includes(",");
  },
  tasks: [{
    name: "Cast Best Libram",
    completed: function() {
      return (0, import_kolmafia34.myMp)() - (0, import_kolmafia34.mpCost)($skill(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral25(["Summon BRICKOs"])))) < config.MP_SAFE_LIMIT;
    },
    do: function() {
      return castBestLibram();
    }
  }, {
    name: "Cast Soul Food",
    completed: function() {
      return (0, import_kolmafia34.mySoulsauce)() / (0, import_kolmafia34.soulsauceCost)($skill(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral25(["Soul Food"])))) < 1 || (0, import_kolmafia34.myMaxmp)() - (0, import_kolmafia34.myMp)() < 15;
    },
    do: function() {
      var maxMpGain = ((0, import_kolmafia34.myMaxmp)() - (0, import_kolmafia34.myMp)()) / 15;
      var maxSoulFoodCasts = (0, import_kolmafia34.mySoulsauce)() / (0, import_kolmafia34.soulsauceCost)($skill(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral25(["Soul Food"]))));
      var soulFoodCasts = Math.floor(Math.min(maxMpGain, maxSoulFoodCasts));
      if (soulFoodCasts > 0)
        (0, import_kolmafia34.useSkill)(soulFoodCasts, $skill(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral25(["Soul Food"]))));
    }
  }, {
    name: "Eat Magical Sausages",
    completed: function() {
      return getHowManySausagesToEat() < 1;
    },
    do: function() {
      var toEat = getHowManySausagesToEat();
      (0, import_kolmafia34.create)(toEat, $item(_templateObject4112 || (_templateObject4112 = _taggedTemplateLiteral25(["magical sausage"]))));
      (0, import_kolmafia34.eat)(toEat, $item(_templateObject4210 || (_templateObject4210 = _taggedTemplateLiteral25(["magical sausage"]))));
    }
  }, {
    name: "Remove Temporary Blindness",
    completed: function() {
      return !have($effect(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral25(["Temporary Blindness"]))));
    },
    prepare: function() {
      return assert(get("_hotTubSoaks") < 5, "Don't have hot tub available?");
    },
    do: function() {
      return (0, import_kolmafia34.cliExecute)("hottub");
    }
  }, {
    name: "Heal if needed",
    completed: function() {
      return (0, import_kolmafia34.myHp)() / (0, import_kolmafia34.myMaxhp)() > 0.3;
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))));
    }
  }, {
    name: "Make Burning Paper Crane",
    ready: function() {
      return have($item(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral25(["burning newspaper"]))));
    },
    completed: function() {
      return have($item(_templateObject466 || (_templateObject466 = _taggedTemplateLiteral25(["burning paper crane"]))));
    },
    do: function() {
      return (0, import_kolmafia34.create)($item(_templateObject476 || (_templateObject476 = _taggedTemplateLiteral25(["burning paper crane"]))));
    }
  }, {
    name: "Make candy knife",
    ready: function() {
      return (0, import_kolmafia34.myBasestat)($stat(_templateObject486 || (_templateObject486 = _taggedTemplateLiteral25(["muscle"])))) >= 40;
    },
    completed: function() {
      return get("_discoKnife");
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject496 || (_templateObject496 = _taggedTemplateLiteral25(["That's Not a Knife"]))));
    }
  }, {
    name: "Summon Alice's Army",
    completed: function() {
      return get("grimoire3Summons") > 0;
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject506 || (_templateObject506 = _taggedTemplateLiteral25(["Summon Alice's Army Cards"]))));
    }
    // 5 mp
  }, {
    name: "Ointment of the Occult",
    completed: function() {
      return have($item(_templateObject5111 || (_templateObject5111 = _taggedTemplateLiteral25(["ointment of the occult"]))));
    },
    do: function() {
      if (!have($item(_templateObject5210 || (_templateObject5210 = _taggedTemplateLiteral25(["grapefruit"]))))) {
        (0, import_kolmafia34.useSkill)($skill(_templateObject537 || (_templateObject537 = _taggedTemplateLiteral25(["Prevent Scurvy and Sobriety"]))));
      }
      (0, import_kolmafia34.useSkill)($skill(_templateObject545 || (_templateObject545 = _taggedTemplateLiteral25(["Advanced Saucecrafting"]))));
      (0, import_kolmafia34.create)($item(_templateObject555 || (_templateObject555 = _taggedTemplateLiteral25(["ointment of the occult"]))));
    }
  }, {
    name: "Summon Chubby and Plump Bar",
    completed: function() {
      return haveItemOrEffect($item(_templateObject565 || (_templateObject565 = _taggedTemplateLiteral25(["Chubby and Plump bar"]))));
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject575 || (_templateObject575 = _taggedTemplateLiteral25(["Chubby and Plump"]))));
    }
    // 50 mp
  }, {
    name: "Use box of familiar jacks",
    completed: function() {
      return have($item(_templateObject585 || (_templateObject585 = _taggedTemplateLiteral25(["homemade robot gear"]))));
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject595 || (_templateObject595 = _taggedTemplateLiteral25(["box of Familiar Jacks"]))));
    },
    outfit: {
      familiar: $familiar(_templateObject605 || (_templateObject605 = _taggedTemplateLiteral25(["Homemade Robot"])))
    }
  }, {
    name: "Open MayDay package",
    completed: function() {
      return have($effect(_templateObject6111 || (_templateObject6111 = _taggedTemplateLiteral25(["Ready to Survive"]))));
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject6210 || (_templateObject6210 = _taggedTemplateLiteral25(["MayDay\u2122 supply package"]))));
    }
  }, {
    name: "Configure KGB",
    completed: function() {
      return get("_kgbClicksUsed") > 0;
    },
    do: function() {
      return (0, import_kolmafia34.cliExecute)("Briefcase e spell spooky -combat");
    }
  }, {
    name: "Triple-Size",
    completed: function() {
      return have($effect(_templateObject635 || (_templateObject635 = _taggedTemplateLiteral25(["Triple-Sized"]))));
    },
    do: function() {
      return acquireEffect($effect(_templateObject645 || (_templateObject645 = _taggedTemplateLiteral25(["Triple-Sized"]))));
    },
    outfit: {
      acc2: $item(_templateObject655 || (_templateObject655 = _taggedTemplateLiteral25(["Powerful Glove"])))
    }
  }, {
    name: "Ten-percent Bonus",
    completed: function() {
      return !have($item(_templateObject665 || (_templateObject665 = _taggedTemplateLiteral25(["a ten-percent bonus"]))));
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject675 || (_templateObject675 = _taggedTemplateLiteral25(["a ten-percent bonus"]))));
    },
    effects: $effects(_templateObject684 || (_templateObject684 = _taggedTemplateLiteral25(["Inscrutable Gaze"]))),
    outfit: {
      offhand: $item(_templateObject694 || (_templateObject694 = _taggedTemplateLiteral25(["familiar scrapbook"])))
    }
  }, {
    name: "Forcefully eat the first sausage of the day",
    completed: function() {
      return get("_sausagesEaten") > 0;
    },
    do: function() {
      spendAllMpOnLibrams();
      (0, import_kolmafia34.create)(1, $item(_templateObject704 || (_templateObject704 = _taggedTemplateLiteral25(["magical sausage"]))));
      (0, import_kolmafia34.eat)(1, $item(_templateObject7111 || (_templateObject7111 = _taggedTemplateLiteral25(["magical sausage"]))));
      assert(get("_sausagesEaten") > 0, "Didn't eat a sausage?");
    }
  }, {
    name: "Advance Clock",
    completed: function() {
      return get("_gingerbreadClockAdvanced");
    },
    choices: {
      1215: 1
    },
    // Setting the Clock: (1) set the clock forward 5 turns (2) skip
    do: $location(_templateObject729 || (_templateObject729 = _taggedTemplateLiteral25(["Gingerbread Civic Center"]))),
    effects: $effects(_templateObject734 || (_templateObject734 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      familiar: $familiar(_templateObject744 || (_templateObject744 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().macro(Macro.abort())
  }, {
    name: "Nanobrainy",
    completed: function() {
      return have($effect(_templateObject754 || (_templateObject754 = _taggedTemplateLiteral25(["Nanobrainy"]))));
    },
    do: $location(_templateObject764 || (_templateObject764 = _taggedTemplateLiteral25(["Gingerbread Upscale Retail District"]))),
    post: function() {
      return assert($effect(_templateObject774 || (_templateObject774 = _taggedTemplateLiteral25(["Nanobrainy"]))));
    },
    outfit: {
      offhand: $item(_templateObject784 || (_templateObject784 = _taggedTemplateLiteral25(["latte lovers member's mug"]))),
      familiar: $familiar(_templateObject794 || (_templateObject794 = _taggedTemplateLiteral25(["Nanorhino"])))
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject804 || (_templateObject804 = _taggedTemplateLiteral25(["Entangling Noodles"])))).trySkill($skill(_templateObject8110 || (_templateObject8110 = _taggedTemplateLiteral25(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject829 || (_templateObject829 = _taggedTemplateLiteral25(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject834 || (_templateObject834 = _taggedTemplateLiteral25(["Reflex Hammer"])))).trySkill($skill(_templateObject844 || (_templateObject844 = _taggedTemplateLiteral25(["Feel Hatred"])))).abort())
  }, {
    name: "Visit the Looking Glass",
    completed: function() {
      return get("_lookingGlass");
    },
    do: function() {
      return (0, import_kolmafia34.visitUrl)("clan_viplounge.php?action=lookingglass&whichfloor=2");
    },
    outfit: {
      pants: $item(_templateObject854 || (_templateObject854 = _taggedTemplateLiteral25(["designer sweatpants"])))
    }
  }, {
    name: "Buff Familiar Weight",
    completed: function() {
      return get("_saberMod") !== 0;
    },
    prepare: function() {
      return Clan.join(config.main_clan);
    },
    do: function() {
      return (0, import_kolmafia34.cliExecute)("saber familiar");
    },
    effects: [
      $effect(_templateObject864 || (_templateObject864 = _taggedTemplateLiteral25(["A Girl Named Sue"]))),
      // Skills
      $effect(_templateObject874 || (_templateObject874 = _taggedTemplateLiteral25(["Blood Bond"]))),
      // Class skills
      $effect(_templateObject884 || (_templateObject884 = _taggedTemplateLiteral25(["Empathy"]))),
      // 15 mp, -720 meat
      $effect(_templateObject894 || (_templateObject894 = _taggedTemplateLiteral25(["Leash of Linguini"])))
      // 12 mp
    ]
  }, {
    name: "Wish Effects",
    completed: function() {
      return $effects(_templateObject904 || (_templateObject904 = _taggedTemplateLiteral25(["Sparkly!, Witch Breaded"]))).every(function(e) {
        return have(e);
      });
    },
    do: function() {
      return $effects(_templateObject9110 || (_templateObject9110 = _taggedTemplateLiteral25(["Sparkly!, Witch Breaded"]))).forEach(wish);
    }
  }, {
    name: "Crimbo Carol",
    completed: function() {
      return [$effect(_templateObject926 || (_templateObject926 = _taggedTemplateLiteral25(["All I Want For Crimbo Is Stuff"]))), $effect(_templateObject934 || (_templateObject934 = _taggedTemplateLiteral25(["Crimbo Wrapping"]))), $effect(_templateObject943 || (_templateObject943 = _taggedTemplateLiteral25(["Do You Crush What I Crush?"]))), $effect(_templateObject953 || (_templateObject953 = _taggedTemplateLiteral25(["Holiday Yoked"]))), $effect(_templateObject963 || (_templateObject963 = _taggedTemplateLiteral25(["Let It Snow/Boil/Stink/Frighten/Grease"])))].some(function(carol) {
        return have(carol);
      });
    },
    do: $location(_templateObject973 || (_templateObject973 = _taggedTemplateLiteral25(["The Dire Warren"]))),
    post: function() {
      return assert($effect(_templateObject983 || (_templateObject983 = _taggedTemplateLiteral25(["Do You Crush What I Crush?"]))));
    },
    outfit: {
      back: $item(_templateObject993 || (_templateObject993 = _taggedTemplateLiteral25(["vampyric cloake"]))),
      acc3: $item(_templateObject1003 || (_templateObject1003 = _taggedTemplateLiteral25(["Kremlin's Greatest Briefcase"]))),
      familiar: $familiar(_templateObject10110 || (_templateObject10110 = _taggedTemplateLiteral25(["Ghost of Crimbo Carols"])))
    },
    combat: new CombatStrategy().macro(Macro.trySkill($skill(_templateObject1023 || (_templateObject1023 = _taggedTemplateLiteral25(["Giant Growth"])))).trySkill($skill(_templateObject1033 || (_templateObject1033 = _taggedTemplateLiteral25(["Become a Wolf"])))).trySkill($skill(_templateObject1043 || (_templateObject1043 = _taggedTemplateLiteral25(["Bowl Straight Up"])))).trySkill($skill(_templateObject1053 || (_templateObject1053 = _taggedTemplateLiteral25(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject1063 || (_templateObject1063 = _taggedTemplateLiteral25(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject1073 || (_templateObject1073 = _taggedTemplateLiteral25(["Reflex Hammer"])))).trySkill($skill(_templateObject1083 || (_templateObject1083 = _taggedTemplateLiteral25(["Feel Hatred"])))).abort())
  }, {
    name: "Christmas Card",
    completed: function() {
      return haveItemOrEffect($item(_templateObject1093 || (_templateObject1093 = _taggedTemplateLiteral25(["Gene Tonic: Elf"])))) || get("_deckCardsSeen").includes("Christmas Card");
    },
    do: function() {
      return (0, import_kolmafia34.cliExecute)("cheat christmas card");
    },
    post: function() {
      DNALab_exports.makeTonic();
      (0, import_kolmafia34.use)($item(_templateObject1102 || (_templateObject1102 = _taggedTemplateLiteral25(["Gene Tonic: Elf"]))));
      assert(get("_deckCardsSeen").includes("Christmas Card"), "Failed to record christmas card draw?");
    },
    effects: $effects(_templateObject1119 || (_templateObject1119 = _taggedTemplateLiteral25(["Inscrutable Gaze, Ode to Booze"]))),
    // 10 + 50 mp
    outfit: {
      familiar: $familiar(_templateObject1123 || (_templateObject1123 = _taggedTemplateLiteral25(["Frumious Bandersnatch"])))
    },
    combat: new CombatStrategy().startingMacro(Macro.item($item(_templateObject1133 || (_templateObject1133 = _taggedTemplateLiteral25(["DNA extraction syringe"]))))).macro(Macro.skill($skill(_templateObject1143 || (_templateObject1143 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).skill($skill(_templateObject1153 || (_templateObject1153 = _taggedTemplateLiteral25(["Micrometeorite"])))).item($item(_templateObject1163 || (_templateObject1163 = _taggedTemplateLiteral25(["Time-Spinner"])))).skill($skill(_templateObject1173 || (_templateObject1173 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia34.mpCost)($skill(_templateObject1183 || (_templateObject1183 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject1192 || (_templateObject1192 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat(), $monster(_templateObject1202 || (_templateObject1202 = _taggedTemplateLiteral25(["Black Crayon Crimbo Elf"])))).macro(Macro.runaway())
  }, {
    name: "Glitter",
    completed: function() {
      return have($effect(_templateObject1219 || (_templateObject1219 = _taggedTemplateLiteral25(["Glittering Eyelashes"]))));
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject1223 || (_templateObject1223 = _taggedTemplateLiteral25(["glittery mascara"]))));
    },
    // -21 meat
    post: function() {
      return assert($effect(_templateObject1233 || (_templateObject1233 = _taggedTemplateLiteral25(["Glittering Eyelashes"]))));
    }
  }, {
    name: "Ensure Imported Taffy",
    ready: function() {
      return get("_speakeasyFreeFights") === 2;
    },
    completed: function() {
      return haveItemOrEffect($item(_templateObject1243 || (_templateObject1243 = _taggedTemplateLiteral25(["imported taffy"])))) || get("_speakeasyFreeFights") >= 3;
    },
    do: function() {
      return mapMonster($location(_templateObject1253 || (_templateObject1253 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))), $monster(_templateObject1263 || (_templateObject1263 = _taggedTemplateLiteral25(["goblin flapper"]))));
    },
    post: function() {
      return validateFreeFightCounter("_speakeasyFreeFights", "place.php?whichplace=speakeasy", $location(_templateObject1273 || (_templateObject1273 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))));
    },
    outfit: function() {
      return levelingOutfit($location(_templateObject1282 || (_templateObject1282 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))));
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.skill($skill(_templateObject1292 || (_templateObject1292 = _taggedTemplateLiteral25(["Feel Envy"])))).step(DefaultMacro());
    }, $monster(_templateObject1302 || (_templateObject1302 = _taggedTemplateLiteral25(["goblin flapper"])))).macro(Macro.abort())
  }, {
    name: "Wanderer Sweep",
    completed: function() {
      return get("_speakeasyFreeFights") >= 3;
    },
    do: $location(_templateObject1319 || (_templateObject1319 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))),
    post: function() {
      return validateFreeFightCounter("_speakeasyFreeFights", "place.php?whichplace=speakeasy", $location(_templateObject1323 || (_templateObject1323 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))));
    },
    outfit: function() {
      var outfit2 = levelingOutfit($location(_templateObject1333 || (_templateObject1333 = _taggedTemplateLiteral25(["An Unusually Quiet Barroom Brawl"]))));
      var wantOrb = !haveItemOrEffect($item(_templateObject1343 || (_templateObject1343 = _taggedTemplateLiteral25(["imported taffy"])))) && (get("crystalBallPredictions") === "" || get("crystalBallPredictions").includes("goblin flapper"));
      if (wantOrb)
        outfit2.famequip = $item(_templateObject1353 || (_templateObject1353 = _taggedTemplateLiteral25(["miniature crystal ball"])));
      return outfit2;
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.externalIf(!haveItemOrEffect($item(_templateObject1363 || (_templateObject1363 = _taggedTemplateLiteral25(["imported taffy"])))), Macro.skill($skill(_templateObject1373 || (_templateObject1373 = _taggedTemplateLiteral25(["Feel Envy"])))));
    }, $monster(_templateObject1382 || (_templateObject1382 = _taggedTemplateLiteral25(["goblin flapper"])))).macro(DefaultMacro),
    // Don't abort on unexpected monsters
    effects: [
      $effect(_templateObject1392 || (_templateObject1392 = _taggedTemplateLiteral25(["Broad-Spectrum Vaccine"]))),
      $effect(_templateObject1402 || (_templateObject1402 = _taggedTemplateLiteral25(["Favored by Lyle"]))),
      $effect(_templateObject1418 || (_templateObject1418 = _taggedTemplateLiteral25(["Grumpy and Ornery"]))),
      $effect(_templateObject1423 || (_templateObject1423 = _taggedTemplateLiteral25(["Mental A-cue-ity"]))),
      $effect(_templateObject1433 || (_templateObject1433 = _taggedTemplateLiteral25(["Mystically Oiled"]))),
      $effect(_templateObject1442 || (_templateObject1442 = _taggedTemplateLiteral25(["Pisces in the Skyces"]))),
      $effect(_templateObject1452 || (_templateObject1452 = _taggedTemplateLiteral25(["Plump and Chubby"]))),
      $effect(_templateObject1462 || (_templateObject1462 = _taggedTemplateLiteral25(["Sigils of Yeg"]))),
      $effect(_templateObject1472 || (_templateObject1472 = _taggedTemplateLiteral25(["Starry-Eyed"]))),
      $effect(_templateObject1482 || (_templateObject1482 = _taggedTemplateLiteral25(["Total Protonic Reversal"]))),
      $effect(_templateObject1492 || (_templateObject1492 = _taggedTemplateLiteral25(["Warlock, Warstock, and Warbarrel"]))),
      $effect(_templateObject1502 || (_templateObject1502 = _taggedTemplateLiteral25(["items.enh"]))),
      $effect(_templateObject1517 || (_templateObject1517 = _taggedTemplateLiteral25(["meat.enh"]))),
      // Beach comb (requres >0 turns available)
      $effect(_templateObject1522 || (_templateObject1522 = _taggedTemplateLiteral25(["Cold as Nice"]))),
      $effect(_templateObject1532 || (_templateObject1532 = _taggedTemplateLiteral25(["A Brush with Grossness"]))),
      $effect(_templateObject1542 || (_templateObject1542 = _taggedTemplateLiteral25(["Do I Know You From Somewhere?"]))),
      $effect(_templateObject1552 || (_templateObject1552 = _taggedTemplateLiteral25(["Does It Have a Skull In There??"]))),
      $effect(_templateObject1562 || (_templateObject1562 = _taggedTemplateLiteral25(["Hot-Headed"]))),
      $effect(_templateObject1572 || (_templateObject1572 = _taggedTemplateLiteral25(["Lack of Body-Building"]))),
      $effect(_templateObject1582 || (_templateObject1582 = _taggedTemplateLiteral25(["Oiled, Slick"]))),
      $effect(_templateObject1592 || (_templateObject1592 = _taggedTemplateLiteral25(["Pomp & Circumsands"]))),
      $effect(_templateObject1602 || (_templateObject1602 = _taggedTemplateLiteral25(["Resting Beach Face"]))),
      $effect(_templateObject1616 || (_templateObject1616 = _taggedTemplateLiteral25(["We're All Made of Starfish"]))),
      $effect(_templateObject1622 || (_templateObject1622 = _taggedTemplateLiteral25(["You Learned Something Maybe!"]))),
      // Skills
      $effect(_templateObject1632 || (_templateObject1632 = _taggedTemplateLiteral25(["Big"]))),
      // 15 mp
      $effect(_templateObject1642 || (_templateObject1642 = _taggedTemplateLiteral25(["Blessing of the Bird"]))),
      // 10 mp
      $effect(_templateObject1652 || (_templateObject1652 = _taggedTemplateLiteral25(["Blessing of your favorite Bird"]))),
      // 50 mp
      $effect(_templateObject1662 || (_templateObject1662 = _taggedTemplateLiteral25(["Blood Bubble"]))),
      $effect(_templateObject1672 || (_templateObject1672 = _taggedTemplateLiteral25(["Carol of the Bulls"]))),
      // 30 mp
      $effect(_templateObject1682 || (_templateObject1682 = _taggedTemplateLiteral25(["Carol of the Hells"]))),
      // 30 mp
      $effect(_templateObject1692 || (_templateObject1692 = _taggedTemplateLiteral25(["Carol of the Thrills"]))),
      // 30 mp
      $effect(_templateObject1702 || (_templateObject1702 = _taggedTemplateLiteral25(["Feeling Excited"]))),
      $effect(_templateObject1715 || (_templateObject1715 = _taggedTemplateLiteral25(["Feeling Peaceful"]))),
      $effect(_templateObject1722 || (_templateObject1722 = _taggedTemplateLiteral25(["Frenzied, Bloody"]))),
      $effect(_templateObject1732 || (_templateObject1732 = _taggedTemplateLiteral25(["Inscrutable Gaze"]))),
      // 10 mp, used above
      $effect(_templateObject1742 || (_templateObject1742 = _taggedTemplateLiteral25(["Ruthlessly Efficient"]))),
      // 10 mp
      $effect(_templateObject1752 || (_templateObject1752 = _taggedTemplateLiteral25(["Singer's Faithful Ocelot"]))),
      // 15 mp
      $effect(_templateObject1762 || (_templateObject1762 = _taggedTemplateLiteral25(["Walberg's Dim Bulb"]))),
      // 5 mp
      // Class skills
      $effect(_templateObject1772 || (_templateObject1772 = _taggedTemplateLiteral25(["Astral Shell"]))),
      // 10 mp
      $effect(_templateObject1782 || (_templateObject1782 = _taggedTemplateLiteral25(["Curiosity of Br'er Tarrypin"]))),
      // 10 mp
      $effect(_templateObject1792 || (_templateObject1792 = _taggedTemplateLiteral25(["Elemental Saucesphere"]))),
      // 10 mp
      $effect(_templateObject1802 || (_templateObject1802 = _taggedTemplateLiteral25(["Flimsy Shield of the Pastalord"]))),
      // 20 mp
      $effect(_templateObject1815 || (_templateObject1815 = _taggedTemplateLiteral25(["Ghostly Shell"]))),
      // 6 mp
      $effect(_templateObject1822 || (_templateObject1822 = _taggedTemplateLiteral25(["Sauce Monocle"]))),
      // 20 mp
      $effect(_templateObject1832 || (_templateObject1832 = _taggedTemplateLiteral25(["Springy Fusilli"]))),
      // 10 mp
      // Batteries
      $effect(_templateObject1842 || (_templateObject1842 = _taggedTemplateLiteral25(["AAA-Charged"]))),
      // +30 MP
      // Song(s)
      $effect(_templateObject1852 || (_templateObject1852 = _taggedTemplateLiteral25(["Ode to Booze"]))),
      // 50 mp
      $effect(_templateObject1862 || (_templateObject1862 = _taggedTemplateLiteral25(["Polka of Plenty"]))),
      // 7 mp
      $effect(_templateObject1872 || (_templateObject1872 = _taggedTemplateLiteral25(["Stevedave's Shanty of Superiority"]))),
      // 30 mp
      // Dread Song
      $effect(_templateObject1882 || (_templateObject1882 = _taggedTemplateLiteral25(["Song of Sauce"])))
      // 100 mp
    ]
  }, {
    name: "Tunnel of L.O.V.E.",
    completed: function() {
      return get("_loveTunnelUsed");
    },
    prepare: spendAllMpOnLibrams,
    // 1222 The Tunnel of L.O.V.E.: (1) enter the tunnel (2) leave
    // 1223 L.O.V. Entrance: (1) fight the enforcer (2) skip
    // 1224 L.O.V. Equipment Room: (1) take the cardigan (2) take the epaulettes (3) take the earrings (4) skip
    // 1225 L.O.V. Engine Room: (1) fight the engineer (2) skip
    // 1226 L.O.V. Emergency Room: (1) Lovebotamy (2) Open Heart Surgery (3) Wandering Eye Surgery (4) skip
    // 1227 L.O.V. Elbow Room: (1) fight the equivocator (2) skip
    // 1228 L.O.V. Emporium: (1) enamorang (2) emotionizer (3) chocolate (4) bouquet (5) elephant (6) toast (7) skip
    choices: {
      1222: 1,
      1223: 1,
      1224: 2,
      1225: 1,
      1226: 2,
      1227: 1,
      1228: 3
    },
    do: $location(_templateObject1892 || (_templateObject1892 = _taggedTemplateLiteral25(["The Tunnel of L.O.V.E."]))),
    post: function() {
      assert($effect(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral25(["Open Heart Surgery"]))));
      $items(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral25(["LOV Elixir #3, LOV Elixir #6, LOV Epaulettes"]))).forEach(function(l) {
        return assert(l);
      });
      (0, import_kolmafia34.use)($item(_templateObject1922 || (_templateObject1922 = _taggedTemplateLiteral25(["LOV Elixir #3"]))));
      (0, import_kolmafia34.use)($item(_templateObject1932 || (_templateObject1932 = _taggedTemplateLiteral25(["LOV Elixir #6"]))));
      (0, import_kolmafia34.use)($item(_templateObject1942 || (_templateObject1942 = _taggedTemplateLiteral25(["LOV Extraterrestrial Chocolate"]))));
    },
    effects: $effects(_templateObject1952 || (_templateObject1952 = _taggedTemplateLiteral25(["Imported Strength"]))),
    outfit: function() {
      return levelingOutfit($location(_templateObject1962 || (_templateObject1962 = _taggedTemplateLiteral25(["The Tunnel of L.O.V.E."]))));
    },
    combat: DefaultCombat
  }, {
    name: "Spit On a Pirate",
    ready: function() {
      return get("camelSpit") >= 100 && get("lastCopyableMonster") !== $monster(_templateObject1972 || (_templateObject1972 = _taggedTemplateLiteral25(["sausage goblin"]))) && !counter_exports.exists("portscan.edu");
    },
    completed: function() {
      return have($effect(_templateObject1982 || (_templateObject1982 = _taggedTemplateLiteral25(["Spit Upon"])))) || haveItemOrEffect($item(_templateObject1992 || (_templateObject1992 = _taggedTemplateLiteral25(["Gene Tonic: Pirate"]))));
    },
    do: $location(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral25(["Pirates of the Garbage Barges"]))),
    post: function() {
      if (get("lastEncounter") === "Dead Men Smell No Tales")
        return;
      if (get("dnaSyringe") === $phylum(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral25(["pirate"])))) {
        DNALab_exports.makeTonic();
      }
      assert($item(_templateObject2022 || (_templateObject2022 = _taggedTemplateLiteral25(["Gene Tonic: Pirate"]))));
      assert($effect(_templateObject2032 || (_templateObject2032 = _taggedTemplateLiteral25(["Spit Upon"]))));
    },
    effects: $effects(_templateObject2042 || (_templateObject2042 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      familiar: $familiar(_templateObject2052 || (_templateObject2052 = _taggedTemplateLiteral25(["Melodramedary"]))),
      acc3: $item(_templateObject2062 || (_templateObject2062 = _taggedTemplateLiteral25(["Kremlin's Greatest Briefcase"])))
    },
    combat: new CombatStrategy().macro(Macro.tryItem($item(_templateObject2072 || (_templateObject2072 = _taggedTemplateLiteral25(["DNA extraction syringe"])))).trySkill($skill(_templateObject2082 || (_templateObject2082 = _taggedTemplateLiteral25(["%fn, spit on me!"])))).trySkill($skill(_templateObject2092 || (_templateObject2092 = _taggedTemplateLiteral25(["Throw Latte on Opponent"])))).trySkill($skill(_templateObject2102 || (_templateObject2102 = _taggedTemplateLiteral25(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject2118 || (_templateObject2118 = _taggedTemplateLiteral25(["Reflex Hammer"])))).trySkill($skill(_templateObject2122 || (_templateObject2122 = _taggedTemplateLiteral25(["Feel Hatred"])))).abort(), $monsters(_templateObject2132 || (_templateObject2132 = _taggedTemplateLiteral25(["filthy pirate, fishy pirate, flashy pirate, funky pirate"])))).macro(Macro.abort())
  }, {
    name: "Witchess Rook",
    completed: function() {
      return haveItemOrEffect($item(_templateObject2142 || (_templateObject2142 = _taggedTemplateLiteral25(["Greek fire"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2152 || (_templateObject2152 = _taggedTemplateLiteral25(["Witchess Rook"]))));
    },
    post: function() {
      (0, import_kolmafia34.use)($item(_templateObject2162 || (_templateObject2162 = _taggedTemplateLiteral25(["Greek fire"]))));
      (0, import_kolmafia34.visitUrl)("questlog.php?which=1");
      assert(!!get("ghostLocation"), "Failed to get protonic ghost notice");
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($monster(_templateObject2172 || (_templateObject2172 = _taggedTemplateLiteral25(["Witchess Rook"]))))), {}, {
        back: $item(_templateObject2182 || (_templateObject2182 = _taggedTemplateLiteral25(["protonic accelerator pack"])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Protonic Ghost",
    completed: function() {
      return !get("ghostLocation");
    },
    do: function() {
      return get("ghostLocation");
    },
    post: function() {
      (0, import_kolmafia34.visitUrl)("questlog.php?which=1");
      assert(!get("ghostLocation"), "Still have a ghost location");
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($monster(_templateObject2192 || (_templateObject2192 = _taggedTemplateLiteral25(["the ghost of Monsieur Baguelle"]))))), {}, {
        back: $item(_templateObject2202 || (_templateObject2202 = _taggedTemplateLiteral25(["protonic accelerator pack"])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Snojo",
    completed: function() {
      return get("_snojoFreeFights") >= 10;
    },
    prepare: function() {
      if (get("snojoSetting") !== $stat(_templateObject2216 || (_templateObject2216 = _taggedTemplateLiteral25(["Muscle"])))) {
        (0, import_kolmafia34.visitUrl)("place.php?whichplace=snojo&action=snojo_controller");
        (0, import_kolmafia34.runChoice)(1);
      }
    },
    do: $location(_templateObject2222 || (_templateObject2222 = _taggedTemplateLiteral25(["The X-32-F Combat Training Snowman"]))),
    post: function() {
      if (!haveItemOrEffect($item(_templateObject2232 || (_templateObject2232 = _taggedTemplateLiteral25(["Gene Tonic: Construct"])))))
        DNALab_exports.makeTonic();
    },
    outfit: function() {
      return levelingOutfit($location(_templateObject2242 || (_templateObject2242 = _taggedTemplateLiteral25(["The X-32-F Combat Training Snowman"]))));
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.externalIf(!haveItemOrEffect($item(_templateObject2252 || (_templateObject2252 = _taggedTemplateLiteral25(["Gene Tonic: Construct"])))), Macro.item([$item(_templateObject2262 || (_templateObject2262 = _taggedTemplateLiteral25(["DNA extraction syringe"]))), $item(_templateObject2272 || (_templateObject2272 = _taggedTemplateLiteral25(["Time-Spinner"])))])).trySkill($skill(_templateObject2282 || (_templateObject2282 = _taggedTemplateLiteral25(["Recall Facts: %phylum Circadian Rhythms"])))).skill($skill(_templateObject2292 || (_templateObject2292 = _taggedTemplateLiteral25(["Sing Along"])))).attack().repeat();
    })
  }, {
    name: "Become Shadow Affine",
    completed: function() {
      return get("questRufus") !== "unstarted";
    },
    // Calling Rufus: (1) I'll fight the entity (2) I'll find the artifact (3) I'll collect the goods (4) Hang up
    choices: {
      1497: 1
    },
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject2302 || (_templateObject2302 = _taggedTemplateLiteral25(["closed-circuit pay phone"]))));
    },
    post: function() {
      assert($effect(_templateObject2314 || (_templateObject2314 = _taggedTemplateLiteral25(["Shadow Affinity"]))));
      assert(get("questRufus") !== "unstarted", "Failed to start Rufus quest?");
    }
  }, {
    name: "Shadow Monster",
    completed: function() {
      return (0, import_kolmafia34.haveEffect)($effect(_templateObject2322 || (_templateObject2322 = _taggedTemplateLiteral25(["Shadow Affinity"])))) <= 3;
    },
    do: $location(_templateObject2332 || (_templateObject2332 = _taggedTemplateLiteral25(["Shadow Rift (The Right Side of the Tracks)"]))),
    outfit: function() {
      return levelingOutfit($location(_templateObject2342 || (_templateObject2342 = _taggedTemplateLiteral25(["Shadow Rift"]))));
    },
    combat: DefaultCombat
  }, {
    name: "Send autumn-aton",
    completed: function() {
      return !AutumnAton_exports.available();
    },
    do: function() {
      AutumnAton_exports.sendTo($location(_templateObject2352 || (_templateObject2352 = _taggedTemplateLiteral25(["Shadow Rift"]))));
    }
  }, {
    name: "BRICKOS",
    ready: function() {
      return have($item(_templateObject2362 || (_templateObject2362 = _taggedTemplateLiteral25(["BRICKO eye brick"])))) && have($item(_templateObject2372 || (_templateObject2372 = _taggedTemplateLiteral25(["BRICKO brick"]))), 5);
    },
    completed: function() {
      return get("_brickoFights") >= 3;
    },
    acquire: [{
      item: $item(_templateObject2382 || (_templateObject2382 = _taggedTemplateLiteral25(["BRICKO bat"])))
    }],
    do: function() {
      return (0, import_kolmafia34.use)($item(_templateObject2392 || (_templateObject2392 = _taggedTemplateLiteral25(["BRICKO bat"]))));
    },
    outfit: function() {
      return levelingOutfit($monster(_templateObject2402 || (_templateObject2402 = _taggedTemplateLiteral25(["BRICKO bat"]))));
    },
    combat: DefaultCombat
  }, {
    name: "Eldritch Tentacle",
    completed: function() {
      return get("_eldritchHorrorEvoked");
    },
    prepare: function() {
      return SourceTerminal_exports.educate($skill(_templateObject2414 || (_templateObject2414 = _taggedTemplateLiteral25(["Portscan"]))));
    },
    do: function() {
      return (0, import_kolmafia34.useSkill)($skill(_templateObject2422 || (_templateObject2422 = _taggedTemplateLiteral25(["Evoke Eldritch Horror"]))));
    },
    post: function() {
      if ((0, import_kolmafia34.myHp)() / (0, import_kolmafia34.myMaxhp)() < 0.5)
        (0, import_kolmafia34.useSkill)($skill(_templateObject2432 || (_templateObject2432 = _taggedTemplateLiteral25(["Cannelloni Cocoon"]))));
      assert(counter_exports.exists("portscan.edu"), "Failed to setup portscan?");
    },
    outfit: function() {
      return levelingOutfit($monster(_templateObject2442 || (_templateObject2442 = _taggedTemplateLiteral25(["Eldritch Tentacle"]))));
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject2452 || (_templateObject2452 = _taggedTemplateLiteral25(["Portscan"])))).skill($skill(_templateObject2462 || (_templateObject2462 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).item($item(_templateObject2472 || (_templateObject2472 = _taggedTemplateLiteral25(["Time-Spinner"])))).skill($skill(_templateObject2482 || (_templateObject2482 = _taggedTemplateLiteral25(["Micrometeorite"])))).skill($skill(_templateObject2492 || (_templateObject2492 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia34.mpCost)($skill(_templateObject2502 || (_templateObject2502 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject2513 || (_templateObject2513 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat())
  }, {
    name: "God Lobster",
    completed: function() {
      return get("_godLobsterFights") >= 3;
    },
    choices: {
      1310: function() {
        return have($item(_templateObject2522 || (_templateObject2522 = _taggedTemplateLiteral25(["God Lobster's Ring"])))) ? 2 : 1;
      }
    },
    // Granted a Boon: (1) equipment (2) blessing (3) experience
    do: function() {
      return (0, import_kolmafia34.visitUrl)("main.php?fightgodlobster=1");
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($monster(_templateObject2532 || (_templateObject2532 = _taggedTemplateLiteral25(["God Lobster"]))))), {}, {
        famequip: $items(_templateObject2542 || (_templateObject2542 = _taggedTemplateLiteral25(["God Lobster's Ring, God Lobster's Scepter, none"]))),
        familiar: $familiar(_templateObject2552 || (_templateObject2552 = _taggedTemplateLiteral25(["God Lobster"])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Shadow Agent",
    completed: function() {
      return !have($effect(_templateObject2562 || (_templateObject2562 = _taggedTemplateLiteral25(["Shadow Affinity"]))));
    },
    do: $location(_templateObject2572 || (_templateObject2572 = _taggedTemplateLiteral25(["Shadow Rift (The Right Side of the Tracks)"]))),
    outfit: function() {
      return levelingOutfit($monster(_templateObject2582 || (_templateObject2582 = _taggedTemplateLiteral25(["Government agent"]))));
    },
    combat: new CombatStrategy().macro(Macro.if_("!haseffect ".concat($effect(_templateObject2592 || (_templateObject2592 = _taggedTemplateLiteral25(["Shadow Affinity"])))), Macro.abort()).trySkill($skill(_templateObject2602 || (_templateObject2602 = _taggedTemplateLiteral25(["Portscan"])))).skill($skill(_templateObject2613 || (_templateObject2613 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).item($item(_templateObject2622 || (_templateObject2622 = _taggedTemplateLiteral25(["Time-Spinner"])))).skill($skill(_templateObject2632 || (_templateObject2632 = _taggedTemplateLiteral25(["Micrometeorite"])))).skill($skill(_templateObject2642 || (_templateObject2642 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia34.mpCost)($skill(_templateObject2652 || (_templateObject2652 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject2662 || (_templateObject2662 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat(), $monster(_templateObject2672 || (_templateObject2672 = _taggedTemplateLiteral25(["Government agent"])))).macro(Macro.abort())
  }, {
    name: "Shadow Entity",
    completed: function() {
      return get("encountersUntilSRChoice") !== 0 || have($effect(_templateObject2682 || (_templateObject2682 = _taggedTemplateLiteral25(["Inner Elf"]))));
    },
    prepare: topOffHp,
    do: $location(_templateObject2692 || (_templateObject2692 = _taggedTemplateLiteral25(["Shadow Rift (The Right Side of the Tracks)"]))),
    post: function() {
      assert(get("encountersUntilSRChoice") > 0, "Spent fewer shadow rift combats than expected?");
      assert($effect(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral25(["Inner Elf"]))));
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($location(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral25(["Shadow Rift"]))))), {}, {
        familiar: $familiar(_templateObject2722 || (_templateObject2722 = _taggedTemplateLiteral25(["Machine Elf"]))),
        famequip: $item(_templateObject2732 || (_templateObject2732 = _taggedTemplateLiteral25(["tiny stillsuit"])))
      });
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject2742 || (_templateObject2742 = _taggedTemplateLiteral25(["Saucegeyser"])))), $monsters(_templateObject2752 || (_templateObject2752 = _taggedTemplateLiteral25(["shadow cauldron, shadow matrix, shadow scythe, shadow spire, shadow tongue"])))).macro(Macro.skill($skill(_templateObject2762 || (_templateObject2762 = _taggedTemplateLiteral25(["Northern Explosion"])))), $monster(_templateObject2772 || (_templateObject2772 = _taggedTemplateLiteral25(["shadow orrery"])))).macro(Macro.abort())
  }, {
    name: "Witchess Witch",
    completed: function() {
      return have($item(_templateObject2782 || (_templateObject2782 = _taggedTemplateLiteral25(["battle broom"]))));
    },
    acquire: [{
      item: $item(_templateObject2792 || (_templateObject2792 = _taggedTemplateLiteral25(["makeshift garbage shirt"])))
    }],
    prepare: function() {
      return assert($effect(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral25(["Inner Elf"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral25(["Witchess Witch"]))));
    },
    outfit: function() {
      return levelingOutfit($monster(_templateObject2822 || (_templateObject2822 = _taggedTemplateLiteral25(["Witchess Witch"]))));
    },
    combat: DefaultCombat
  }, {
    name: "Witchess King",
    completed: function() {
      return have($item(_templateObject2832 || (_templateObject2832 = _taggedTemplateLiteral25(["dented scepter"]))));
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2842 || (_templateObject2842 = _taggedTemplateLiteral25(["Witchess King"]))));
    },
    outfit: function() {
      return levelingOutfit($monster(_templateObject2852 || (_templateObject2852 = _taggedTemplateLiteral25(["Witchess King"]))));
    },
    combat: DefaultCombat
  }, {
    name: "Remaining Witchess Fights",
    completed: function() {
      return Witchess_exports.fightsDone() >= 5;
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject2862 || (_templateObject2862 = _taggedTemplateLiteral25(["Witchess Queen"]))));
    },
    outfit: function() {
      return levelingOutfit($monster(_templateObject2872 || (_templateObject2872 = _taggedTemplateLiteral25(["Witchess Queen"]))));
    },
    combat: DefaultCombat
  }, {
    name: "Deep Machine Tunnels",
    completed: function() {
      return get("_machineTunnelsAdv") >= 5;
    },
    prepare: topOffHp,
    choices: {
      1119: -1
    },
    // Shining Mauve Backwards In Time
    do: $location(_templateObject2882 || (_templateObject2882 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))),
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($location(_templateObject2892 || (_templateObject2892 = _taggedTemplateLiteral25(["The Deep Machine Tunnels"]))))), {}, {
        familiar: $familiar(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral25(["Machine Elf"]))),
        famequip: $item(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral25(["tiny stillsuit"])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Voting Booth Monster",
    ready: function() {
      return voterMonsterNow();
    },
    completed: function() {
      return get("_voteFreeFights") > 0;
    },
    // 1467 Poetic Justice: (1) Moxie stats (2) Myst stats (3) 5 Adventures & Beaten up
    // 1468 Aunts not Ants: (1) Moxie stats (2) Muscle stats (3) +10 stats per fight, -20% to all stats
    // 1469 Beware of Aligator: (1) +20 ML (2) Awesome booze (3) 1500 meat
    // 1470 Teacher's Pet: (1) Sleaze Res + DA (2) Teacher's pen (3)  Muscle stats
    // 1471 Lost and Found: (1) Meat potion (2) Myst stats (3) Meat, Muscle stats + Beaten up
    // 1472 Summer Days: (1) -5% Combat Frequency potion (2) Good food (3) Moxie stats
    // 1473 Bath Time: (1) Muscle + gob of wet hair (2) Resists + DA (3) Hot res + Init
    // 1474 Delicious Sprouts: (1) Myst stats (2) Good food (3) Muscle stats
    // 1475 Hypnotic Master: (1) Mother's necklace (2) Muscle stats (3) random effects
    choices: {
      1467: 3,
      1468: 4,
      1469: 3,
      1470: 2,
      1471: 1,
      1472: 4,
      1473: 4,
      1474: 1,
      1475: 1
    },
    do: $location(_templateObject2922 || (_templateObject2922 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      assert(get("lastEncounter") === "In Your Cups" || get("_voteFreeFights") > 0, "Didn't increment vote counter?");
      if (have($effect(_templateObject2932 || (_templateObject2932 = _taggedTemplateLiteral25(["Beaten Up"])))))
        (0, import_kolmafia34.useSkill)($skill(_templateObject2942 || (_templateObject2942 = _taggedTemplateLiteral25(["Tongue of the Walrus"]))));
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, lightweightOutfit()), {}, {
        acc3: $item(_templateObject2952 || (_templateObject2952 = _taggedTemplateLiteral25(['"I Voted!" sticker'])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Chest X-Ray",
    completed: function() {
      return get("_chestXRayUsed") >= 3;
    },
    choices: {
      1467: 3,
      1468: 4,
      1469: 3,
      1470: 2,
      1471: 1,
      1472: 4,
      1473: 4,
      1474: 1,
      1475: 1
    },
    do: $location(_templateObject2962 || (_templateObject2962 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (have($effect(_templateObject2972 || (_templateObject2972 = _taggedTemplateLiteral25(["Beaten Up"])))))
        (0, import_kolmafia34.useSkill)($skill(_templateObject2982 || (_templateObject2982 = _taggedTemplateLiteral25(["Tongue of the Walrus"]))));
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, lightweightOutfit()), {}, {
        acc3: $item(_templateObject2992 || (_templateObject2992 = _taggedTemplateLiteral25(["Lil' Doctor\u2122 bag"])))
      });
    },
    combat: DefaultCombat
  }, {
    name: "Shattering Punch",
    completed: function() {
      return get("_shatteringPunchUsed") >= 3;
    },
    choices: {
      1467: 3,
      1468: 4,
      1469: 3,
      1470: 2,
      1471: 1,
      1472: 4,
      1473: 4,
      1474: 1,
      1475: 1
    },
    do: $location(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (have($effect(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral25(["Beaten Up"])))))
        (0, import_kolmafia34.useSkill)($skill(_templateObject3022 || (_templateObject3022 = _taggedTemplateLiteral25(["Tongue of the Walrus"]))));
    },
    outfit: function() {
      return lightweightOutfit();
    },
    combat: DefaultCombat
  }, {
    name: "Mob Hit",
    completed: function() {
      return get("_gingerbreadMobHitUsed");
    },
    choices: {
      1467: 3,
      1468: 4,
      1469: 3,
      1470: 2,
      1471: 1,
      1472: 4,
      1473: 4,
      1474: 1,
      1475: 1
    },
    do: $location(_templateObject3032 || (_templateObject3032 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      if (have($effect(_templateObject3042 || (_templateObject3042 = _taggedTemplateLiteral25(["Beaten Up"])))))
        (0, import_kolmafia34.useSkill)($skill(_templateObject3052 || (_templateObject3052 = _taggedTemplateLiteral25(["Tongue of the Walrus"]))));
    },
    outfit: function() {
      return lightweightOutfit();
    },
    combat: DefaultCombat
  }, {
    name: "Lectures on Relativity",
    completed: function() {
      return get("_pocketProfessorLectures") > 0;
    },
    prepare: topOffHp,
    do: $location(_templateObject3062 || (_templateObject3062 = _taggedTemplateLiteral25(["The Toxic Teacups"]))),
    post: function() {
      return assert(get("_pocketProfessorLectures") > 0, "Failed to lecture?");
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($location(_templateObject3072 || (_templateObject3072 = _taggedTemplateLiteral25(["The Toxic Teacups"]))))), {}, {
        offhand: $item(_templateObject3082 || (_templateObject3082 = _taggedTemplateLiteral25(["Kramco Sausage-o-Matic\u2122"]))),
        familiar: $familiar(_templateObject3092 || (_templateObject3092 = _taggedTemplateLiteral25(["Pocket Professor"]))),
        famequip: $item(_templateObject3102 || (_templateObject3102 = _taggedTemplateLiteral25(["tiny stillsuit"])))
      });
    },
    combat: new CombatStrategy().macro(Macro.skill($skill(_templateObject3115 || (_templateObject3115 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).item($item(_templateObject3122 || (_templateObject3122 = _taggedTemplateLiteral25(["Time-Spinner"])))).skill($skill(_templateObject3132 || (_templateObject3132 = _taggedTemplateLiteral25(["Micrometeorite"])))).if_($skill(_templateObject3142 || (_templateObject3142 = _taggedTemplateLiteral25(["lecture on relativity"]))), Macro.skill($skill(_templateObject3152 || (_templateObject3152 = _taggedTemplateLiteral25(["lecture on relativity"])))).skill($skill(_templateObject3162 || (_templateObject3162 = _taggedTemplateLiteral25(["Saucy Salve"]))))).skill($skill(_templateObject3172 || (_templateObject3172 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia34.mpCost)($skill(_templateObject3182 || (_templateObject3182 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject3192 || (_templateObject3192 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat())
  }, {
    name: "Neverending Party",
    completed: function() {
      return get("_neverendingPartyFreeTurns") >= 10;
    },
    choices: {
      1322: 2,
      1324: 5
    },
    do: $location(_templateObject3202 || (_templateObject3202 = _taggedTemplateLiteral25(["The Neverending Party"]))),
    post: function() {
      return validateFreeFightCounter("_neverendingPartyFreeTurns", "place.php?whichplace=town_wrong", $location(_templateObject3213 || (_templateObject3213 = _taggedTemplateLiteral25(["The Neverending Party"]))));
    },
    outfit: function() {
      return _objectSpread8(_objectSpread8({}, levelingOutfit($location(_templateObject3222 || (_templateObject3222 = _taggedTemplateLiteral25(["The Neverending Party"]))))), {}, {
        acc3: $item(_templateObject3232 || (_templateObject3232 = _taggedTemplateLiteral25(["Cincho de Mayo"])))
      });
    },
    combat: new CombatStrategy().startingMacro(Macro.if_(notAllowList, Macro.abort())).macro(Macro.if_("!hasskill ".concat($skill(_templateObject3242 || (_templateObject3242 = _taggedTemplateLiteral25(["Bowl Sideways"]))).id, " && hasskill ").concat($skill(_templateObject3252 || (_templateObject3252 = _taggedTemplateLiteral25(["Feel Pride"]))).id), Macro.skill($skill(_templateObject3262 || (_templateObject3262 = _taggedTemplateLiteral25(["Feel Pride"])))).trySkill($skill(_templateObject3272 || (_templateObject3272 = _taggedTemplateLiteral25(["Cincho: Confetti Extravaganza"]))))).trySkill($skill(_templateObject3282 || (_templateObject3282 = _taggedTemplateLiteral25(["Bowl Sideways"])))).skill($skill(_templateObject3292 || (_templateObject3292 = _taggedTemplateLiteral25(["Curse of Weaksauce"])))).skill($skill(_templateObject3302 || (_templateObject3302 = _taggedTemplateLiteral25(["Sing Along"])))).while_("!mpbelow ".concat((0, import_kolmafia34.mpCost)($skill(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral25(["Saucestorm"]))))), Macro.skill($skill(_templateObject3322 || (_templateObject3322 = _taggedTemplateLiteral25(["Saucestorm"]))))).attack().repeat())
  }, {
    name: "Drink Lattes",
    completed: function() {
      return get("_latteRefillsUsed") >= 3;
    },
    prepare: function() {
      assert(get("_banderRunaways") < (0, import_kolmafia34.weightAdjustment)() / 5, "Used too many runaways?");
      if (get("_latteDrinkUsed"))
        (0, import_kolmafia34.cliExecute)("latte refill pumpkin cinnamon vanilla");
    },
    do: $location(_templateObject3332 || (_templateObject3332 = _taggedTemplateLiteral25(["The Dire Warren"]))),
    effects: $effects(_templateObject3342 || (_templateObject3342 = _taggedTemplateLiteral25(["Ode to Booze"]))),
    outfit: {
      back: $item(_templateObject3352 || (_templateObject3352 = _taggedTemplateLiteral25(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject3362 || (_templateObject3362 = _taggedTemplateLiteral25(["Jurassic Parka"]))),
      offhand: $item(_templateObject3372 || (_templateObject3372 = _taggedTemplateLiteral25(["latte lovers member's mug"]))),
      pants: $item(_templateObject3382 || (_templateObject3382 = _taggedTemplateLiteral25(["Cargo Cultist Shorts"]))),
      acc2: $items(_templateObject3392 || (_templateObject3392 = _taggedTemplateLiteral25(["battle broom"]))),
      acc3: $item(_templateObject3402 || (_templateObject3402 = _taggedTemplateLiteral25(['"I Voted!" sticker']))),
      familiar: $familiar(_templateObject3412 || (_templateObject3412 = _taggedTemplateLiteral25(["Frumious Bandersnatch"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["heck", "hold"]
      }
    },
    combat: new CombatStrategy().macro(function() {
      return Macro.trySkill($skill(_templateObject3422 || (_templateObject3422 = _taggedTemplateLiteral25(["Gulp Latte"])))).externalIf(get("_latteRefillsUsed") < 2, Macro.trySkill($skill(_templateObject3432 || (_templateObject3432 = _taggedTemplateLiteral25(["Throw Latte on Opponent"]))))).runaway();
    })
  }]
};

// src/quests/spellDamage.ts
var import_kolmafia35 = require("kolmafia");
var _templateObject350;
var _templateObject2100;
var _templateObject351;
var _templateObject439;
var _templateObject538;
var _templateObject636;
var _templateObject730;
var _templateObject830;
var _templateObject927;
var _templateObject1020;
var _templateObject1120;
var _templateObject1220;
var _templateObject1320;
var _templateObject1419;
var _templateObject1518;
var _templateObject1617;
var _templateObject1716;
var _templateObject1816;
var _templateObject1913;
var _templateObject2013;
var _templateObject2119;
var _templateObject2217;
var _templateObject2315;
var _templateObject2415;
var _templateObject2514;
var _templateObject2614;
var _templateObject2712;
var _templateObject2811;
var _templateObject2910;
var _templateObject3010;
var _templateObject3116;
var _templateObject3214;
var _templateObject3313;
var _templateObject3410;
var _templateObject359;
var _templateObject368;
var _templateObject377;
var _templateObject387;
var _templateObject397;
var _templateObject407;
var _templateObject4113;
var _templateObject4211;
var _templateObject4310;
var _templateObject447;
var _templateObject457;
var _templateObject467;
var _templateObject477;
var _templateObject487;
var _templateObject497;
var _templateObject507;
var _templateObject5112;
var _templateObject5211;
var _templateObject539;
var _templateObject546;
var _templateObject556;
var _templateObject566;
var _templateObject576;
var _templateObject586;
var _templateObject596;
var _templateObject606;
var _templateObject6112;
var _templateObject6211;
var _templateObject637;
var _templateObject646;
var _templateObject656;
var _templateObject666;
var _templateObject676;
var _templateObject685;
var _templateObject695;
var _templateObject705;
var _templateObject7112;
function _taggedTemplateLiteral26(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function safeHpLimit() {
  var resist = 1 - (0, import_kolmafia35.elementalResistance)($element(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral26(["spooky"])))) / 100;
  assert(resist > 0, "invalid resist value ".concat(resist, " calculated"));
  var maxMultiplier = 4;
  return (0, import_kolmafia35.myMaxhp)() * maxMultiplier * resist;
}
var SpellDamageQuest = {
  name: "Make Sausage",
  completed: function() {
    return CommunityService.SpellDamage.isDone();
  },
  tasks: [{
    name: "Cook cordial of concentration",
    completed: function() {
      return have($item(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral26(["cordial of concentration"]))));
    },
    do: function() {
      return (0, import_kolmafia35.create)($item(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral26(["cordial of concentration"]))));
    },
    // -63 meat
    post: function() {
      return assert($item(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral26(["cordial of concentration"]))));
    }
  }, innerElf(), {
    name: "Deep Dark Visions",
    ready: function() {
      return (0, import_kolmafia35.myMaxhp)() > 500;
    },
    completed: function() {
      return have($effect(_templateObject538 || (_templateObject538 = _taggedTemplateLiteral26(["Visions of the Deep Dark Deeps"]))));
    },
    do: function() {
      assert((0, import_kolmafia35.myMaxhp)() > safeHpLimit(), "Not enough HP for deep dark visions");
      if ((0, import_kolmafia35.myHp)() < (0, import_kolmafia35.myMaxhp)())
        (0, import_kolmafia35.useSkill)(Math.ceil((0, import_kolmafia35.myMaxhp)() / (0, import_kolmafia35.myHp)()), $skill(_templateObject636 || (_templateObject636 = _taggedTemplateLiteral26(["Cannelloni Cocoon"]))));
      assert((0, import_kolmafia35.myHp)() > safeHpLimit(), "Failed to heal enough for Deep Dark Visions?");
      (0, import_kolmafia35.useSkill)($skill(_templateObject730 || (_templateObject730 = _taggedTemplateLiteral26(["Deep Dark Visions"]))));
    },
    post: function() {
      assert($effect(_templateObject830 || (_templateObject830 = _taggedTemplateLiteral26(["Visions of the Deep Dark Deeps"]))));
      (0, import_kolmafia35.useSkill)(Math.ceil((0, import_kolmafia35.myMaxhp)() / (0, import_kolmafia35.myHp)()), $skill(_templateObject927 || (_templateObject927 = _taggedTemplateLiteral26(["Cannelloni Cocoon"]))));
    },
    outfit: {
      back: $item(_templateObject1020 || (_templateObject1020 = _taggedTemplateLiteral26(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject1120 || (_templateObject1120 = _taggedTemplateLiteral26(["Jurassic Parka"]))),
      weapon: $item(_templateObject1220 || (_templateObject1220 = _taggedTemplateLiteral26(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject1320 || (_templateObject1320 = _taggedTemplateLiteral26(["burning paper crane, unbreakable umbrella"]))),
      pants: $item(_templateObject1419 || (_templateObject1419 = _taggedTemplateLiteral26(["pantogram pants"]))),
      acc2: $item(_templateObject1518 || (_templateObject1518 = _taggedTemplateLiteral26(["Kremlin's Greatest Briefcase"]))),
      acc3: $item(_templateObject1617 || (_templateObject1617 = _taggedTemplateLiteral26(["cursed monkey's paw"]))),
      famequip: $item(_templateObject1716 || (_templateObject1716 = _taggedTemplateLiteral26(["tiny stillsuit"]))),
      familiar: $familiar(_templateObject1816 || (_templateObject1816 = _taggedTemplateLiteral26(["Exotic Parrot"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    }
  }, {
    name: "Cowrruption",
    completed: function() {
      return haveItemOrEffect($item(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral26(["corrupted marrow"]))));
    },
    prepare: function() {
      var fax = $item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral26(["photocopied monster"])));
      var faxMon = $monster(_templateObject2119 || (_templateObject2119 = _taggedTemplateLiteral26(["ungulith"])));
      if (!have(fax))
        Clan.with(config.side_clan, function() {
          return (0, import_kolmafia35.cliExecute)("fax receive");
        });
      assert(examine(fax).includes("".concat(faxMon)), "Failed to retrieve fax of ".concat(faxMon));
    },
    do: function() {
      return (0, import_kolmafia35.use)($item(_templateObject2217 || (_templateObject2217 = _taggedTemplateLiteral26(["photocopied monster"]))));
    },
    post: function() {
      assert($item(_templateObject2315 || (_templateObject2315 = _taggedTemplateLiteral26(["corrupted marrow"]))));
      assert($effect(_templateObject2415 || (_templateObject2415 = _taggedTemplateLiteral26(["Meteor Showered"]))));
    },
    outfit: {
      weapon: $item(_templateObject2514 || (_templateObject2514 = _taggedTemplateLiteral26(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject2614 || (_templateObject2614 = _taggedTemplateLiteral26(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral26(["Meteor Shower"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral26(["Use the Force"])))), $monster(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral26(["ungulith"])))).macro(Macro.abort())
  }, {
    name: "Create Sugar Chapeau",
    completed: function() {
      return have($item(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral26(["sugar chapeau"]))));
    },
    prepare: function() {
      return (0, import_kolmafia35.useSkill)($skill(_templateObject3116 || (_templateObject3116 = _taggedTemplateLiteral26(["Summon Sugar Sheets"]))));
    },
    do: function() {
      return (0, import_kolmafia35.create)($item(_templateObject3214 || (_templateObject3214 = _taggedTemplateLiteral26(["sugar chapeau"]))));
    }
  }, {
    name: "Spell Damage Test",
    completed: function() {
      return CommunityService.SpellDamage.isDone();
    },
    do: function() {
      return runTest(CommunityService.SpellDamage);
    },
    post: function() {
      return (0, import_kolmafia35.equip)($slot(_templateObject3313 || (_templateObject3313 = _taggedTemplateLiteral26(["familiar"]))), $item(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral26(["none"]))));
    },
    effects: [$effect(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral26(["AAA-Charged"]))), $effect(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral26(["Arched Eyebrow of the Archmage"]))), $effect(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral26(["Carol of the Hells"]))), $effect(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral26(["Concentration"]))), $effect(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral26(["Cowrruption"]))), $effect(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral26(["Do You Crush What I Crush?"]))), $effect(_templateObject4113 || (_templateObject4113 = _taggedTemplateLiteral26(["Grumpy and Ornery"]))), $effect(_templateObject4211 || (_templateObject4211 = _taggedTemplateLiteral26(["Human-Elf Hybrid"]))), $effect(_templateObject4310 || (_templateObject4310 = _taggedTemplateLiteral26(["Imported Strength"]))), $effect(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral26(["Inner Elf"]))), $effect(_templateObject457 || (_templateObject457 = _taggedTemplateLiteral26(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject467 || (_templateObject467 = _taggedTemplateLiteral26(["Mental A-cue-ity"]))), $effect(_templateObject477 || (_templateObject477 = _taggedTemplateLiteral26(["Meteor Showered"]))), $effect(_templateObject487 || (_templateObject487 = _taggedTemplateLiteral26(["Nanobrainy"]))), $effect(_templateObject497 || (_templateObject497 = _taggedTemplateLiteral26(["Pisces in the Skyces"]))), $effect(_templateObject507 || (_templateObject507 = _taggedTemplateLiteral26(["Pointy Wizard Beard"]))), $effect(_templateObject5112 || (_templateObject5112 = _taggedTemplateLiteral26(["Ready to Survive"]))), $effect(_templateObject5211 || (_templateObject5211 = _taggedTemplateLiteral26(["Sigils of Yeg"]))), $effect(_templateObject539 || (_templateObject539 = _taggedTemplateLiteral26(["Song of Sauce"]))), $effect(_templateObject546 || (_templateObject546 = _taggedTemplateLiteral26(["Sparkly!"]))), $effect(_templateObject556 || (_templateObject556 = _taggedTemplateLiteral26(["Spirit of Garlic"]))), $effect(_templateObject566 || (_templateObject566 = _taggedTemplateLiteral26(["Spit Upon"]))), $effect(_templateObject576 || (_templateObject576 = _taggedTemplateLiteral26(["The Magic of LOV"]))), $effect(_templateObject586 || (_templateObject586 = _taggedTemplateLiteral26(["Toxic Vengeance"]))), $effect(_templateObject596 || (_templateObject596 = _taggedTemplateLiteral26(["Visions of the Deep Dark Deeps"]))), $effect(_templateObject606 || (_templateObject606 = _taggedTemplateLiteral26(["Warlock, Warstock, and Warbarrel"]))), $effect(_templateObject6112 || (_templateObject6112 = _taggedTemplateLiteral26(["We're All Made of Starfish"]))), $effect(_templateObject6211 || (_templateObject6211 = _taggedTemplateLiteral26(["Witch Breaded"])))],
    outfit: {
      hat: $item(_templateObject637 || (_templateObject637 = _taggedTemplateLiteral26(["sugar chapeau"]))),
      weapon: $item(_templateObject646 || (_templateObject646 = _taggedTemplateLiteral26(["wrench"]))),
      offhand: $item(_templateObject656 || (_templateObject656 = _taggedTemplateLiteral26(["weeping willow wand"]))),
      pants: $item(_templateObject666 || (_templateObject666 = _taggedTemplateLiteral26(["pantogram pants"]))),
      acc1: $item(_templateObject676 || (_templateObject676 = _taggedTemplateLiteral26(["Powerful Glove"]))),
      acc2: $item(_templateObject685 || (_templateObject685 = _taggedTemplateLiteral26(["battle broom"]))),
      acc3: $item(_templateObject695 || (_templateObject695 = _taggedTemplateLiteral26(["Kremlin's Greatest Briefcase"]))),
      famequip: $items(_templateObject705 || (_templateObject705 = _taggedTemplateLiteral26(["Abracandalabra, astral statuette"]))),
      familiar: $familiar(_templateObject7112 || (_templateObject7112 = _taggedTemplateLiteral26(["Left-Hand Man"])))
    }
  }]
};

// src/quests/stats.ts
var import_kolmafia36 = require("kolmafia");
var _templateObject360;
var _templateObject2101;
var _templateObject361;
var _templateObject440;
var _templateObject540;
var _templateObject638;
var _templateObject731;
var _templateObject831;
var _templateObject928;
var _templateObject1021;
var _templateObject1121;
var _templateObject1221;
var _templateObject1321;
var _templateObject1420;
var _templateObject1519;
var _templateObject1618;
var _templateObject1717;
var _templateObject1817;
var _templateObject1914;
var _templateObject2014;
var _templateObject2120;
var _templateObject2218;
var _templateObject2316;
var _templateObject2416;
var _templateObject2515;
var _templateObject2615;
var _templateObject2713;
var _templateObject2812;
var _templateObject2911;
var _templateObject3011;
var _templateObject3117;
var _templateObject3215;
var _templateObject3314;
var _templateObject3411;
var _templateObject3510;
var _templateObject369;
var _templateObject378;
var _templateObject388;
var _templateObject398;
var _templateObject408;
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
      item: $item(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: $effects(_templateObject2101 || (_templateObject2101 = _taggedTemplateLiteral27(["Song of Starch"]))),
    outfit: {
      hat: $items(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral27(["extra-wide head candle, wad of used tape"]))),
      back: $item(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral27(["vampyric cloake"]))),
      shirt: $item(_templateObject540 || (_templateObject540 = _taggedTemplateLiteral27(["Jurassic Parka"]))),
      offhand: $item(_templateObject638 || (_templateObject638 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
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
      if (CommunityService.Moxie.actualCost() > 1) {
        if (have($item(_templateObject831 || (_templateObject831 = _taggedTemplateLiteral27(["runproof mascara"])))))
          (0, import_kolmafia36.use)($item(_templateObject928 || (_templateObject928 = _taggedTemplateLiteral27(["runproof mascara"]))));
      }
      if (CommunityService.Moxie.actualCost() > 1) {
        if (!haveItemOrEffect($item(_templateObject1021 || (_templateObject1021 = _taggedTemplateLiteral27(["oil of expertise"]))))) {
          assert($item(_templateObject1121 || (_templateObject1121 = _taggedTemplateLiteral27(["cherry"]))));
          (0, import_kolmafia36.create)($item(_templateObject1221 || (_templateObject1221 = _taggedTemplateLiteral27(["oil of expertise"]))));
        }
        acquireEffect($effect(_templateObject1321 || (_templateObject1321 = _taggedTemplateLiteral27(["Expert Oiliness"]))));
      }
      runTest(CommunityService.Moxie);
    },
    effects: $effects(_templateObject1420 || (_templateObject1420 = _taggedTemplateLiteral27(["Disco Fever, Big, Quiet Desperation, Sparkly!"]))),
    outfit: {
      hat: $item(_templateObject1519 || (_templateObject1519 = _taggedTemplateLiteral27(["very pointy crown"]))),
      back: $item(_templateObject1618 || (_templateObject1618 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject1717 || (_templateObject1717 = _taggedTemplateLiteral27(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject1817 || (_templateObject1817 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
      acc1: $item(_templateObject1914 || (_templateObject1914 = _taggedTemplateLiteral27(["Beach Comb"]))),
      acc2: $item(_templateObject2014 || (_templateObject2014 = _taggedTemplateLiteral27(["Cincho de Mayo"]))),
      acc3: $item(_templateObject2120 || (_templateObject2120 = _taggedTemplateLiteral27(["your cowboy boots"]))),
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
      if (CommunityService.Muscle.actualCost() > 1) {
        if (!haveItemOrEffect($item(_templateObject2218 || (_templateObject2218 = _taggedTemplateLiteral27(["oil of expertise"]))))) {
          assert($item(_templateObject2316 || (_templateObject2316 = _taggedTemplateLiteral27(["cherry"]))));
          (0, import_kolmafia36.create)($item(_templateObject2416 || (_templateObject2416 = _taggedTemplateLiteral27(["oil of expertise"]))));
        }
        acquireEffect($effect(_templateObject2515 || (_templateObject2515 = _taggedTemplateLiteral27(["Expert Oiliness"]))));
      }
      runTest(CommunityService.Muscle);
    },
    acquire: [{
      item: $item(_templateObject2615 || (_templateObject2615 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: $effects(_templateObject2713 || (_templateObject2713 = _taggedTemplateLiteral27(["Big, Giant Growth, Quiet Determination, Rage of the Reindeer"]))),
    outfit: {
      hat: $item(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral27(["wad of used tape"]))),
      back: $item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral27(["dented scepter"]))),
      offhand: $item(_templateObject3117 || (_templateObject3117 = _taggedTemplateLiteral27(["unbreakable umbrella"]))),
      acc1: $item(_templateObject3215 || (_templateObject3215 = _taggedTemplateLiteral27(["Brutal brogues"]))),
      acc3: $item(_templateObject3314 || (_templateObject3314 = _taggedTemplateLiteral27(['"I Voted!" sticker']))),
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
      item: $item(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral27(["wad of used tape"])))
    }],
    effects: $effects(_templateObject3510 || (_templateObject3510 = _taggedTemplateLiteral27(["Nanobrainy, Quiet Judgement, Witch Breaded"]))),
    outfit: {
      hat: $item(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral27(["wad of used tape"]))),
      back: $item(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral27(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral27(["Fourth of May Cosplay Saber"]))),
      acc1: $item(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral27(["battle broom"]))),
      acc3: $item(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral27(['"I Voted!" sticker']))),
      modes: {
        retrocape: ["heck", void 0]
      }
    }
  }]
};

// src/quests/weaponDamage.ts
var import_kolmafia37 = require("kolmafia");
var _templateObject370;
var _templateObject2103;
var _templateObject371;
var _templateObject441;
var _templateObject541;
var _templateObject639;
var _templateObject735;
var _templateObject835;
var _templateObject929;
var _templateObject1024;
var _templateObject1124;
var _templateObject1224;
var _templateObject1324;
var _templateObject1421;
var _templateObject1520;
var _templateObject1619;
var _templateObject1718;
var _templateObject1818;
var _templateObject1915;
var _templateObject2015;
var _templateObject2121;
var _templateObject2219;
var _templateObject2317;
var _templateObject2417;
var _templateObject2516;
var _templateObject2616;
var _templateObject2714;
var _templateObject2813;
var _templateObject2912;
var _templateObject3012;
var _templateObject3118;
var _templateObject3216;
var _templateObject3315;
var _templateObject3413;
var _templateObject3511;
var _templateObject3610;
var _templateObject379;
var _templateObject389;
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
  tasks: [innerElf(), {
    name: "Meteor Showered",
    completed: function() {
      return have($effect(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral28(["Meteor Showered"]))));
    },
    do: $location(_templateObject2103 || (_templateObject2103 = _taggedTemplateLiteral28(["The Dire Warren"]))),
    post: function() {
      return assert($effect(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral28(["Meteor Showered"]))));
    },
    outfit: {
      weapon: $item(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral28(["Fourth of May Cosplay Saber"]))),
      familiar: $familiar(_templateObject541 || (_templateObject541 = _taggedTemplateLiteral28(["Machine Elf"])))
    },
    combat: new CombatStrategy().ccs("skill ".concat($skill(_templateObject639 || (_templateObject639 = _taggedTemplateLiteral28(["Meteor Shower"]))), "\n          twiddle your thumbs\n          skill ").concat($skill(_templateObject735 || (_templateObject735 = _taggedTemplateLiteral28(["Use the Force"])))), $monster(_templateObject835 || (_templateObject835 = _taggedTemplateLiteral28(["fluffy bunny"])))).macro(Macro.abort())
  }, {
    name: "Weapon Damage Test",
    completed: function() {
      return CommunityService.WeaponDamage.isDone();
    },
    do: function() {
      return runTest(CommunityService.WeaponDamage);
    },
    post: function() {
      return (0, import_kolmafia37.equip)($slot(_templateObject929 || (_templateObject929 = _taggedTemplateLiteral28(["familiar"]))), $item(_templateObject1024 || (_templateObject1024 = _taggedTemplateLiteral28(["none"]))));
    },
    acquire: [{
      item: $item(_templateObject1124 || (_templateObject1124 = _taggedTemplateLiteral28(["broken champagne bottle"])))
    }],
    effects: [$effect(_templateObject1224 || (_templateObject1224 = _taggedTemplateLiteral28(["Billiards Belligerence"]))), $effect(_templateObject1324 || (_templateObject1324 = _taggedTemplateLiteral28(["Blessing of your favorite Bird"]))), $effect(_templateObject1421 || (_templateObject1421 = _taggedTemplateLiteral28(["Bow-Legged Swagger"]))), $effect(_templateObject1520 || (_templateObject1520 = _taggedTemplateLiteral28(["Carol of the Bulls"]))), $effect(_templateObject1619 || (_templateObject1619 = _taggedTemplateLiteral28(["Cowrruption"]))), $effect(_templateObject1718 || (_templateObject1718 = _taggedTemplateLiteral28(["Do You Crush What I Crush?"]))), $effect(_templateObject1818 || (_templateObject1818 = _taggedTemplateLiteral28(["Frenzied, Bloody"]))), $effect(_templateObject1915 || (_templateObject1915 = _taggedTemplateLiteral28(["Grumpy and Ornery"]))), $effect(_templateObject2015 || (_templateObject2015 = _taggedTemplateLiteral28(["Imported Strength"]))), $effect(_templateObject2121 || (_templateObject2121 = _taggedTemplateLiteral28(["Inner Elf"]))), $effect(_templateObject2219 || (_templateObject2219 = _taggedTemplateLiteral28(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2317 || (_templateObject2317 = _taggedTemplateLiteral28(["Lack of Body-Building"]))), $effect(_templateObject2417 || (_templateObject2417 = _taggedTemplateLiteral28(["Meteor Showered"]))), $effect(_templateObject2516 || (_templateObject2516 = _taggedTemplateLiteral28(["Rage of the Reindeer"]))), $effect(_templateObject2616 || (_templateObject2616 = _taggedTemplateLiteral28(["Ready to Survive"]))), $effect(_templateObject2714 || (_templateObject2714 = _taggedTemplateLiteral28(["Scowl of the Auk"]))), $effect(_templateObject2813 || (_templateObject2813 = _taggedTemplateLiteral28(["Song of the North"]))), $effect(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral28(["Spit Upon"]))), $effect(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral28(["Tenacity of the Snapper"]))), $effect(_templateObject3118 || (_templateObject3118 = _taggedTemplateLiteral28(["The Power of LOV"])))],
    outfit: {
      hat: $items(_templateObject3216 || (_templateObject3216 = _taggedTemplateLiteral28(["extra-wide head candle, none"]))),
      weapon: $item(_templateObject3315 || (_templateObject3315 = _taggedTemplateLiteral28(["dented scepter"]))),
      offhand: $item(_templateObject3413 || (_templateObject3413 = _taggedTemplateLiteral28(["august scepter"]))),
      acc1: $item(_templateObject3511 || (_templateObject3511 = _taggedTemplateLiteral28(["Powerful Glove"]))),
      acc2: $item(_templateObject3610 || (_templateObject3610 = _taggedTemplateLiteral28(["Brutal brogues"]))),
      famequip: $item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral28(["broken champagne bottle"]))),
      familiar: $familiar(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral28(["Disembodied Hand"])))
    }
  }]
};

// src/main.ts
function _slicedToArray18(arr, i) {
  return _arrayWithHoles18(arr) || _iterableToArrayLimit18(arr, i) || _unsupportedIterableToArray24(arr, i) || _nonIterableRest18();
}
function _nonIterableRest18() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray24(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray24(o, minLen);
}
function _arrayLikeToArray24(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit18(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles18(arr) {
  if (Array.isArray(arr))
    return arr;
}
function main() {
  var command = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  sinceKolmafiaRevision(27567);
  Args.fill(config, command);
  if (config.help) {
    Args.showHelp(config);
    return;
  }
  var toCheck = {
    main_clan: config.main_clan,
    side_clan: config.side_clan
  };
  for (var _i = 0, _Object$entries = Object.entries(toCheck); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray18(_Object$entries[_i], 2), key = _Object$entries$_i[0], val = _Object$entries$_i[1];
    if (val === "") {
      (0, import_kolmafia38.print)("seventyhccs_".concat(key, " property not set"), "red");
      return;
    }
  }
  if (config.prep) {
    prepareToAscend();
    return;
  }
  if (!isReadyToContinue())
    return;
  prepAndAscendIfNecessary();
  (0, import_kolmafia38.setAutoAttack)(0);
  var engine = new Engine(getTasks([CoilWire, Leveling, MuscleQuest, MoxieQuest, MysticalityQuest, HPQuest, SpellDamageQuest, WeaponDamageQuest, CombatFrequencyQuest, HotResistQuest, FamiliarWeightQuest, ItemDropQuest, DonateQuest]));
  try {
    engine.propertyManager.setChoices({
      1340: 2,
      // Is There A Doctor In The House?: (1) accept quest (2) decline the quest (3) decline all quests for today
      1387: 3
      // Using the Force: (1) banish (2) find friends (3) force item drops
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
