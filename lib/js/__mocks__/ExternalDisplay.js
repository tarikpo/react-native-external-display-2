"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
_reactNative.NativeModules.RNExternalDisplayEvent = {
  init: () => {},
  SCREEN_INFO: {},
  addListener: () => {},
  removeListener: () => {},
  getConstants: () => ({
    SCREEN_INFO: {}
  })
};
var _default = exports.default = _reactNative.View;