"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SceneManager", {
  enumerable: true,
  get: function () {
    return _SceneManager.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getScreens", {
  enumerable: true,
  get: function () {
    return _screens.getScreens;
  }
});
Object.defineProperty(exports, "useExternalDisplay", {
  enumerable: true,
  get: function () {
    return _useExternalDisplay.useExternalDisplay;
  }
});
exports.useScreenSize = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _NativeRNExternalDisplay = _interopRequireDefault(require("./js/NativeRNExternalDisplay"));
var _screens = require("./js/screens");
var _useExternalDisplay = require("./js/useExternalDisplay");
var _SceneManager = _interopRequireDefault(require("./js/SceneManager"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**
 * @format
 * 
 */
const styles = {
  screen: _reactNative.StyleSheet.absoluteFill
};
const ScreenContext = /*#__PURE__*/_react.default.createContext(null);
const useScreenSize = () => (0, _react.useContext)(ScreenContext);
exports.useScreenSize = useScreenSize;
const ExternalDisplayView = props => {
  const {
    screen,
    fallbackInMainScreen,
    mainScreenStyle,
    style,
    onScreenConnect,
    onScreenChange,
    onScreenDisconnect,
    ...nativeProps
  } = props;
  const screens = (0, _useExternalDisplay.useExternalDisplay)(props);
  const scr = screens[screen];
  if (!scr && !fallbackInMainScreen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(ScreenContext.Provider, {
    value: scr
  }, /*#__PURE__*/_react.default.createElement(_NativeRNExternalDisplay.default, _extends({
    pointerEvents: !scr ? 'box-none' : 'auto'
  }, nativeProps, {
    style: [scr && styles.screen, scr && {
      width: scr.width,
      height: scr.height
    }, style, !scr && mainScreenStyle],
    screen: scr ? screen : '',
    fallbackInMainScreen: fallbackInMainScreen
  })));
};
ExternalDisplayView.defaultProps = {
  style: undefined,
  mainScreenStyle: undefined,
  screen: '',
  fallbackInMainScreen: false,
  onScreenConnect: () => {},
  onScreenChange: () => {},
  onScreenDisconnect: () => {}
};
var _default = exports.default = ExternalDisplayView;