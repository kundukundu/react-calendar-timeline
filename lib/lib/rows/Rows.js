"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TimelineStateContext = _interopRequireDefault(require("../timeline/TimelineStateContext"));

var _generic = require("../utility/generic");

var _ItemsContext = require("../items/ItemsContext");

var _GroupRowContext = require("./GroupRowContext");

var _LayerContext = require("./LayerContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rows =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Rows, _React$PureComponent);

  function Rows() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rows);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rows)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "initState", {
      dragging: false,
      resizing: false,
      dragOffset: 0,
      interactingItemId: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "state", _this.initState);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (dragging, dragOffset, itemId) {
      _this.setState({
        dragging: dragging,
        dragOffset: dragOffset,
        interactingItemId: itemId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearState", function () {
      _this.setState(_this.initState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleResizeEnd", function (itemId, resizeTime, resizeEdge, timeDelta) {
      _this.props.itemResized(itemId, resizeTime, resizeEdge, timeDelta);

      _this.clearState();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function () {
      _this.clearState();
    });

    _defineProperty(_assertThisInitialized(_this), "handleResizeStart", function (resizing, itemId) {
      _this.setState({
        resizing: resizing,
        interactingItemId: itemId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLayerRootProps", function () {
      return {
        style: {// height: '100%'
        }
      };
    });

    return _this;
  }

  _createClass(Rows, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          groupHeights = _this$props.groupHeights,
          groups = _this$props.groups,
          itemRenderer = _this$props.itemRenderer,
          canChangeGroup = _this$props.canChangeGroup,
          canMove = _this$props.canMove,
          canResize = _this$props.canResize,
          canSelect = _this$props.canSelect,
          useResizeHandle = _this$props.useResizeHandle,
          dragSnap = _this$props.dragSnap,
          minResizeWidth = _this$props.minResizeWidth,
          itemResizing = _this$props.itemResizing,
          moveResizeValidator = _this$props.moveResizeValidator,
          itemDrag = _this$props.itemDrag,
          itemDrop = _this$props.itemDrop,
          onItemDoubleClick = _this$props.onItemDoubleClick,
          onItemContextMenu = _this$props.onItemContextMenu,
          itemSelect = _this$props.itemSelect,
          scrollRef = _this$props.scrollRef,
          selected = _this$props.selected,
          selectedItem = _this$props.selectedItem,
          Layers = _this$props.rowRenderer,
          rowData = _this$props.rowData,
          groupsWithItemsDimensions = _this$props.groupsWithItemsDimensions,
          clickTolerance = _this$props.clickTolerance,
          onRowClick = _this$props.onRowClick,
          onRowDoubleClick = _this$props.onRowDoubleClick,
          horizontalLineClassNamesForGroup = _this$props.horizontalLineClassNamesForGroup,
          onRowContextClick = _this$props.onRowContextClick,
          items = _this$props.items,
          keys = _this$props.keys,
          resizeEdge = _this$props.resizeEdge;
      return _react["default"].createElement(_LayerContext.LayerContextProvider, {
        itemsWithInteractions: items,
        getLayerRootProps: this.getLayerRootProps
      }, _react["default"].createElement("div", {
        style: {
          position: 'absolute',
          top: 0
        }
      }, groupHeights.map(function (groupHeight, i) {
        var groupId = (0, _generic._get)(groups[i], keys.groupIdKey);
        var group = groupsWithItemsDimensions[groupId];
        return _react["default"].createElement(Group, {
          key: "horizontal-line-".concat(groupId),
          clickTolerance: clickTolerance,
          onRowContextClick: onRowContextClick,
          onRowClick: onRowClick,
          onRowDoubleClick: onRowDoubleClick,
          index: i,
          groups: groups,
          horizontalLineClassNamesForGroup: horizontalLineClassNamesForGroup,
          groupHeight: groupHeight,
          group: group,
          dragSnap: dragSnap,
          minResizeWidth: minResizeWidth,
          selectedItem: selectedItem,
          canChangeGroup: canChangeGroup,
          canMove: canMove,
          canResize: canResize,
          canSelect: canSelect,
          moveResizeValidator: moveResizeValidator,
          itemSelect: itemSelect,
          itemDrag: itemDrag,
          itemDrop: itemDrop,
          itemResizing: itemResizing,
          onItemDoubleClick: onItemDoubleClick,
          onItemContextMenu: onItemContextMenu,
          itemRenderer: itemRenderer,
          selected: selected,
          useResizeHandle: useResizeHandle,
          scrollRef: scrollRef,
          resizeEdge: resizeEdge,
          Layers: Layers,
          rowData: rowData,
          itemResized: _this2.handleResizeEnd,
          onDragStart: _this2.handleDragStart,
          onDragEnd: _this2.handleDragEnd,
          onResizeStart: _this2.handleResizeStart,
          dragging: _this2.state.dragging,
          resizing: _this2.state.resizing,
          dragOffset: _this2.state.dragOffset,
          interactingItemId: _this2.state.interactingItemId
        });
      })));
    }
  }]);

  return Rows;
}(_react["default"].PureComponent);

var Group =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Group, _React$PureComponent2);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, _getPrototypeOf(Group).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          clickTolerance = _this$props2.clickTolerance,
          onRowContextClick = _this$props2.onRowContextClick,
          onRowClick = _this$props2.onRowClick,
          onRowDoubleClick = _this$props2.onRowDoubleClick,
          index = _this$props2.index,
          groups = _this$props2.groups,
          horizontalLineClassNamesForGroup = _this$props2.horizontalLineClassNamesForGroup,
          groupHeight = _this$props2.groupHeight,
          group = _this$props2.group,
          dragSnap = _this$props2.dragSnap,
          minResizeWidth = _this$props2.minResizeWidth,
          selectedItem = _this$props2.selectedItem,
          canChangeGroup = _this$props2.canChangeGroup,
          canMove = _this$props2.canMove,
          canResize = _this$props2.canResize,
          canSelect = _this$props2.canSelect,
          moveResizeValidator = _this$props2.moveResizeValidator,
          itemSelect = _this$props2.itemSelect,
          itemDrag = _this$props2.itemDrag,
          itemDrop = _this$props2.itemDrop,
          itemResizing = _this$props2.itemResizing,
          onItemDoubleClick = _this$props2.onItemDoubleClick,
          onItemContextMenu = _this$props2.onItemContextMenu,
          itemRenderer = _this$props2.itemRenderer,
          selected = _this$props2.selected,
          useResizeHandle = _this$props2.useResizeHandle,
          scrollRef = _this$props2.scrollRef,
          resizeEdge = _this$props2.resizeEdge,
          Layers = _this$props2.Layers,
          rowData = _this$props2.rowData,
          itemResized = _this$props2.itemResized,
          onDragStart = _this$props2.onDragStart,
          onDragEnd = _this$props2.onDragEnd,
          onResizeStart = _this$props2.onResizeStart,
          dragging = _this$props2.dragging,
          resizing = _this$props2.resizing,
          dragOffset = _this$props2.dragOffset,
          interactingItemId = _this$props2.interactingItemId;
      return _react["default"].createElement(_GroupRowContext.GroupRowContextProvider, {
        clickTolerance: clickTolerance,
        onContextMenu: onRowContextClick,
        onClick: onRowClick,
        onDoubleClick: onRowDoubleClick,
        isEvenRow: index % 2 === 0,
        group: groups[index],
        horizontalLineClassNamesForGroup: horizontalLineClassNamesForGroup,
        groupHeight: groupHeight,
        groupIndex: index
      }, _react["default"].createElement(_ItemsContext.ItemsContextProvider, {
        items: group.items,
        groupDimensions: group,
        dragSnap: dragSnap,
        minResizeWidth: minResizeWidth,
        selectedItem: selectedItem,
        canChangeGroup: canChangeGroup,
        canMove: canMove,
        canResize: canResize,
        canSelect: canSelect,
        moveResizeValidator: moveResizeValidator,
        itemSelect: itemSelect,
        itemDrag: itemDrag,
        itemDrop: itemDrop,
        itemResizing: itemResizing,
        itemResized: itemResized,
        onItemDoubleClick: onItemDoubleClick,
        onItemContextMenu: onItemContextMenu,
        itemRenderer: itemRenderer,
        selected: selected,
        useResizeHandle: useResizeHandle,
        scrollRef: scrollRef,
        order: group,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        onResizeStart: onResizeStart,
        resizeEdge: resizeEdge,
        dragging: dragging,
        resizing: resizing,
        dragOffset: dragOffset,
        interactingItemId: interactingItemId
      }, _react["default"].createElement(_LayerContext.LayerConsumer, null, function (_ref) {
        var getLayerRootProps = _ref.getLayerRootProps,
            itemsWithInteractions = _ref.itemsWithInteractions;
        return _react["default"].createElement(Layers, {
          getLayerRootProps: getLayerRootProps,
          rowData: rowData,
          group: group.group,
          itemsWithInteractions: itemsWithInteractions
        });
      })));
    }
  }]);

  return Group;
}(_react["default"].PureComponent);

var _default = Rows;
exports["default"] = _default;