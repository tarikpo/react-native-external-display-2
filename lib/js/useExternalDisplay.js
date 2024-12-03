"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExternalDisplay = void 0;
var _react = require("react");
var _screens = require("./screens");
var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @format
 * 
 */

const useExternalDisplay = ({
  onScreenConnect,
  onScreenChange,
  onScreenDisconnect
} = {}) => {
  const [screens, setScreens] = (0, _react.useState)((0, _screens.getScreens)());
  (0, _react.useEffect)(() => {
    const {
      connect,
      change,
      disconnect
    } = (0, _EventEmitter.default)({
      onScreenConnect: info => {
        setScreens(info);
        if (onScreenConnect) onScreenConnect(info);
      },
      onScreenChange: info => {
        setScreens(info);
        if (onScreenChange) onScreenChange(info);
      },
      onScreenDisconnect: info => {
        setScreens(info);
        if (onScreenDisconnect) onScreenDisconnect(info);
      }
    });
    return () => {
      connect.remove();
      change.remove();
      disconnect.remove();
    };
  }, []);
  return screens;
};
exports.useExternalDisplay = useExternalDisplay;