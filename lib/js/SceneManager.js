"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _NativeRNExternalDisplayEvent = _interopRequireDefault(require("./NativeRNExternalDisplayEvent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const sceneTypes = {
  EXTERNAL_DISPLAY: '@RNExternalDisplay_externalDisplay',
  CREATED_SCENE: '@RNExternalDisplay_createdScene'
};
var _default = exports.default = {
  types: sceneTypes,
  isAvailable: () => !!_NativeRNExternalDisplayEvent.default.SUPPORT_MULTIPLE_SCENES,
  requestScene: options => _NativeRNExternalDisplayEvent.default.requestScene?.(options),
  closeScene: sceneId => _NativeRNExternalDisplayEvent.default.closeScene?.(sceneId),
  isMainSceneActive: () => _NativeRNExternalDisplayEvent.default.isMainSceneActive?.(),
  resumeMainScene: () => _NativeRNExternalDisplayEvent.default.resumeMainScene?.()
};