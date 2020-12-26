"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GroupRowConsumer = exports.GroupRowContextProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultContextState = {
  clickTolerance: undefined,
  onContextMenu: undefined,
  onClick: undefined,
  onDoubleClick: undefined,
  isEvenRow: undefined,
  group: undefined,
  horizontalLineClassNamesForGroup: undefined,
  groupHeight: undefined
};

var GroupRowContext = _react["default"].createContext(defaultContextState);

var Consumer = GroupRowContext.Consumer,
    Provider = GroupRowContext.Provider;

var GroupRowContextProvider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GroupRowContextProvider, _PureComponent);

  function GroupRowContextProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GroupRowContextProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupRowContextProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
      _this.props.onContextMenu(e, _this.props.groupIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _this.props.onClick(e, _this.props.groupIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (e) {
      _this.props.onDoubleClick(e, _this.props.groupIndex);
    });

    return _this;
  }

  _createClass(GroupRowContextProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onContextMenu = _this$props.onContextMenu,
          onClick = _this$props.onClick,
          onDoubleClick = _this$props.onDoubleClick,
          rest = _objectWithoutProperties(_this$props, ["children", "onContextMenu", "onClick", "onDoubleClick"]);

      var value = _objectSpread({}, rest, {
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        onDoubleClick: this.handleDoubleClick
      });

      return _react["default"].createElement(Provider, {
        value: value
      }, children);
    }
  }]);

  return GroupRowContextProvider;
}(_react.PureComponent);

exports.GroupRowContextProvider = GroupRowContextProvider;

_defineProperty(GroupRowContextProvider, "propTypes", {
  clickTolerance: _propTypes["default"].number.isRequired,
  onContextMenu: _propTypes["default"].func.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onDoubleClick: _propTypes["default"].func.isRequired,
  isEvenRow: _propTypes["default"].bool.isRequired,
  group: _propTypes["default"].object.isRequired,
  horizontalLineClassNamesForGroup: _propTypes["default"].func,
  groupHeight: _propTypes["default"].number.isRequired,
  groupIndex: _propTypes["default"].number.isRequired
});

var GroupRowConsumer = Consumer;
exports.GroupRowConsumer = GroupRowConsumer;
var _default = GroupRowContext;
exports["default"] = _default;