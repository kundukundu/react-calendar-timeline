"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Items = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Item = _interopRequireDefault(require("./Item"));

var _TimelineStateContext = require("../timeline/TimelineStateContext");

var _ItemsContext = require("./ItemsContext");

var _generic = require("../utility/generic");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var canResizeLeft = function canResizeLeft(item, canResize) {
  var value = (0, _generic._get)(item, 'canResize') !== undefined ? (0, _generic._get)(item, 'canResize') : canResize;
  return value === 'left' || value === 'both';
};

var canResizeRight = function canResizeRight(item, canResize) {
  var value = (0, _generic._get)(item, 'canResize') !== undefined ? (0, _generic._get)(item, 'canResize') : canResize;
  return value === 'right' || value === 'both' || value === true;
};

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Items);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Items)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isInteractingItem", function (item) {
      return _this.props.interactingItemId === (0, _generic._get)(item, _this.props.keys.itemIdKey);
    });

    return _this;
  }

  _createClass(Items, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !((0, _generic.arraysEqual)(nextProps.items, this.props.items) && nextProps.groupDimensions === this.props.groupDimensions && nextProps.keys === this.props.keys && nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.selectedItem === this.props.selectedItem && nextProps.selected === this.props.selected && nextProps.dragSnap === this.props.dragSnap && nextProps.minResizeWidth === this.props.minResizeWidth && nextProps.canChangeGroup === this.props.canChangeGroup && nextProps.canMove === this.props.canMove && nextProps.canResize === this.props.canResize && nextProps.canSelect === this.props.canSelect && nextProps.dragging === this.props.dragging && nextProps.resizing === this.props.resizing && nextProps.resizeEdge === this.props.resizeEdge && nextProps.interactingItemId === this.props.interactingItemId);
    }
  }, {
    key: "isSelected",
    value: function isSelected(item, itemIdKey) {
      if (!this.props.selected) {
        return this.props.selectedItem === (0, _generic._get)(item, itemIdKey);
      } else {
        var target = (0, _generic._get)(item, itemIdKey);
        return this.props.selected.includes(target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          keys = _this$props.keys,
          groupDimensions = _this$props.groupDimensions,
          order = _this$props.order,
          items = _this$props.items;
      var itemIdKey = keys.itemIdKey;
      return _react["default"].createElement("div", {
        className: "rct-items"
      }, items.map(function (item, i) {
        var isInteractingItem = _this2.isInteractingItem(item);

        return _react["default"].createElement(_Item["default"], {
          key: (0, _generic._get)(item, itemIdKey),
          item: item,
          keys: _this2.props.keys,
          order: order,
          dimensions: groupDimensions.itemDimensions[i].dimensions,
          selected: _this2.isSelected(item, itemIdKey),
          canChangeGroup: (0, _generic._get)(item, 'canChangeGroup') !== undefined ? (0, _generic._get)(item, 'canChangeGroup') : _this2.props.canChangeGroup,
          canMove: (0, _generic._get)(item, 'canMove') !== undefined ? (0, _generic._get)(item, 'canMove') : _this2.props.canMove,
          canResizeLeft: canResizeLeft(item, _this2.props.canResize),
          canResizeRight: canResizeRight(item, _this2.props.canResize),
          canSelect: (0, _generic._get)(item, 'canSelect') !== undefined ? (0, _generic._get)(item, 'canSelect') : _this2.props.canSelect,
          useResizeHandle: _this2.props.useResizeHandle,
          canvasTimeStart: _this2.props.canvasTimeStart,
          canvasTimeEnd: _this2.props.canvasTimeEnd,
          canvasWidth: _this2.props.canvasWidth,
          dragSnap: _this2.props.dragSnap,
          minResizeWidth: _this2.props.minResizeWidth,
          onResizing: _this2.props.itemResizing,
          onResized: _this2.props.itemResized,
          moveResizeValidator: _this2.props.moveResizeValidator,
          onDrag: _this2.props.itemDrag,
          onDrop: _this2.props.itemDrop,
          onItemDoubleClick: _this2.props.onItemDoubleClick,
          onContextMenu: _this2.props.onItemContextMenu,
          onSelect: _this2.props.itemSelect,
          itemRenderer: _this2.props.itemRenderer,
          scrollRef: _this2.props.scrollRef,
          dragging: isInteractingItem && _this2.props.dragging,
          resizing: isInteractingItem && _this2.props.resizing,
          dragOffset: isInteractingItem ? _this2.props.dragOffset : 0,
          resizeEdge: isInteractingItem ? _this2.props.resizeEdge : undefined,
          onDragStart: _this2.props.onDragStart,
          onDragEnd: _this2.props.onDragEnd,
          onResizeStart: _this2.props.onResizeStart
        });
      }));
    }
  }]);

  return Items;
}(_react.Component);

exports.Items = Items;

_defineProperty(Items, "propTypes", {
  items: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  dragSnap: _propTypes["default"].number,
  minResizeWidth: _propTypes["default"].number,
  selectedItem: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  canChangeGroup: _propTypes["default"].bool.isRequired,
  canMove: _propTypes["default"].bool.isRequired,
  canResize: _propTypes["default"].oneOf([true, false, 'left', 'right', 'both']),
  canSelect: _propTypes["default"].bool,
  keys: _propTypes["default"].object.isRequired,
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

_defineProperty(Items, "defaultProps", {
  selected: []
});

var ItemsWrapper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ItemsWrapper, _PureComponent);

  function ItemsWrapper() {
    _classCallCheck(this, ItemsWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemsWrapper).apply(this, arguments));
  }

  _createClass(ItemsWrapper, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
        var getTimelineState = _ref.getTimelineState;

        var _getTimelineState = getTimelineState(),
            canvasTimeStart = _getTimelineState.canvasTimeStart,
            canvasTimeEnd = _getTimelineState.canvasTimeEnd,
            canvasWidth = _getTimelineState.canvasWidth,
            keys = _getTimelineState.keys;

        return _react["default"].createElement(_ItemsContext.ItemsConsumer, null, function (props) {
          return _react["default"].createElement(Items, _extends({
            canvasTimeStart: canvasTimeStart,
            canvasTimeEnd: canvasTimeEnd,
            canvasWidth: canvasWidth,
            keys: keys
          }, props));
        });
      });
    }
  }]);

  return ItemsWrapper;
}(_react.PureComponent);

var _default = ItemsWrapper;
exports["default"] = _default;