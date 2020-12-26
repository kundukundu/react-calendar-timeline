"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ItemsConsumer = exports.ItemsContextProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultContextState = {
  items: undefined,
  dragSnap: undefined,
  minResizeWidth: undefined,
  selectedItem: undefined,
  canChangeGroup: undefined,
  canMove: undefined,
  canResize: undefined,
  canSelect: undefined,
  moveResizeValidator: undefined,
  itemSelect: undefined,
  itemDrag: undefined,
  itemDrop: undefined,
  itemResizing: undefined,
  itemResized: undefined,
  onItemDoubleClick: undefined,
  onItemContextMenu: undefined,
  itemRenderer: undefined,
  selected: undefined,
  groupDimensions: undefined,
  useResizeHandle: undefined,
  scrollRef: undefined,
  order: undefined,
  onDragStart: undefined,
  onDragEnd: undefined,
  onResizeStart: undefined,
  resizeEdge: undefined,
  dragging: undefined,
  resizing: undefined,
  dragOffset: undefined,
  interactingItemId: undefined
};

var ItemsContext = _react["default"].createContext(defaultContextState);

var Consumer = ItemsContext.Consumer,
    Provider = ItemsContext.Provider;

var ItemsContextProvider =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ItemsContextProvider, _PureComponent);

  function ItemsContextProvider() {
    _classCallCheck(this, ItemsContextProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemsContextProvider).apply(this, arguments));
  }

  _createClass(ItemsContextProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      return _react["default"].createElement(Provider, {
        value: rest
      }, children);
    }
  }]);

  return ItemsContextProvider;
}(_react.PureComponent);

exports.ItemsContextProvider = ItemsContextProvider;

_defineProperty(ItemsContextProvider, "propTypes", {
  items: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  dragSnap: _propTypes["default"].number,
  minResizeWidth: _propTypes["default"].number,
  selectedItem: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  canChangeGroup: _propTypes["default"].bool.isRequired,
  canMove: _propTypes["default"].bool.isRequired,
  canResize: _propTypes["default"].oneOf([true, false, 'left', 'right', 'both']),
  canSelect: _propTypes["default"].bool,
  moveResizeValidator: _propTypes["default"].func,
  itemSelect: _propTypes["default"].func,
  itemDrag: _propTypes["default"].func,
  itemDrop: _propTypes["default"].func,
  itemResizing: _propTypes["default"].func,
  itemResized: _propTypes["default"].func,
  onItemDoubleClick: _propTypes["default"].func,
  onItemContextMenu: _propTypes["default"].func,
  itemRenderer: _propTypes["default"].func,
  selected: _propTypes["default"].array,
  groupDimensions: _propTypes["default"].object,
  useResizeHandle: _propTypes["default"].bool,
  scrollRef: _propTypes["default"].object,
  order: _propTypes["default"].object,
  onDragStart: _propTypes["default"].func.isRequired,
  onDragEnd: _propTypes["default"].func.isRequired,
  onResizeStart: _propTypes["default"].func.isRequired,
  dragging: _propTypes["default"].bool.isRequired,
  dragOffset: _propTypes["default"].number.isRequired,
  interactingItemId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  resizeEdge: _propTypes["default"].oneOf(['right', 'left'])
});

var ItemsConsumer = Consumer;
exports.ItemsConsumer = ItemsConsumer;
var _default = ItemsContext;
exports["default"] = _default;