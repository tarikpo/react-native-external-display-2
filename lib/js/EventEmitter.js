"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listenEvent;
exports.getInitialScreens = void 0;
var _reactNative = require("react-native");
var _NativeRNExternalDisplayEvent = _interopRequireDefault(require("./NativeRNExternalDisplayEvent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let scale;
let EventEmitter;
if (_reactNative.Platform.OS === 'ios') {
  _NativeRNExternalDisplayEvent.default.init();
  scale = 1;
  EventEmitter = new _reactNative.NativeEventEmitter(_NativeRNExternalDisplayEvent.default);
} else {
  ;
  ({
    scale
  } = _reactNative.Dimensions.get('window'));
  EventEmitter = _reactNative.DeviceEventEmitter;
}
const handleScreensChange = info => Object.entries(info).reduce((result, [screenId, screen]) => {
  result[screenId] = {
    ...screen,
    width: screen.width / scale,
    height: screen.height / scale
  };
  return result;
}, {});
const getInitialScreens = () => {
  let info;
  if (_reactNative.Platform.OS === 'android') {
    info = _NativeRNExternalDisplayEvent.default.getInitialScreens?.().SCREEN_INFO;
  }
  if (_reactNative.Platform.OS === 'ios' || !info // Old architecture fallback on Android
  ) {
    info = _NativeRNExternalDisplayEvent.default.SCREEN_INFO;
  }
  if (!info) throw new Error('No initial screen info found');
  return handleScreensChange(info);
};
exports.getInitialScreens = getInitialScreens;
function listenEvent({
  onScreenConnect,
  onScreenChange,
  onScreenDisconnect
}) {
  const connect = EventEmitter.addListener('@RNExternalDisplay_screenDidConnect', info => onScreenConnect(handleScreensChange(info)));
  const change = EventEmitter.addListener('@RNExternalDisplay_screenDidChange', info => onScreenChange(handleScreensChange(info)));
  const disconnect = EventEmitter.addListener('@RNExternalDisplay_screenDidDisconnect', info => onScreenDisconnect(handleScreensChange(info)));
  return {
    connect,
    change,
    disconnect
  };
}