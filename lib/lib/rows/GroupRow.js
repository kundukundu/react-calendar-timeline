"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PreventClickOnDrag = _interopRequireDefault(require("../interaction/PreventClickOnDrag"));

var _interactjs = _interopRequireDefault(require("interactjs"));

var _generic = require("../utility/generic");

var _GroupRowContext = require("./GroupRowContext");

var _TimelineStateContext = require("../timeline/TimelineStateContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var GroupRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupRow, _Component);

  function GroupRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GroupRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", _react["default"].createRef());

    return _this;
  }

  _createClass(GroupRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _interactjs["default"])(this.ref.current).dropzone({
        accept: '.rct-item',
        overlap: 'pointer'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onContextMenu = _this$props.onContextMenu,
          onDoubleClick = _this$props.onDoubleClick,
          isEvenRow = _this$props.isEvenRow,
          onClick = _this$props.onClick,
          clickTolerance = _this$props.clickTolerance,
          horizontalLineClassNamesForGroup = _this$props.horizontalLineClassNamesForGroup,
          group = _this$props.group,
          children = _this$props.children,
          keys = _this$props.keys,
          canvasWidth = _this$props.canvasWidth,
          groupHeight = _this$props.groupHeight;
      var classNamesForGroup = [];

      if (horizontalLineClassNamesForGroup) {
        classNamesForGroup = horizontalLineClassNamesForGroup(group);
      }

      return _react["default"].createElement(_PreventClickOnDrag["default"], {
        clickTolerance: clickTolerance,
        onClick: onClick
      }, _react["default"].createElement("div", {
        ref: this.ref,
        onContextMenu: onContextMenu,
        onDoubleClick: onDoubleClick,
        className: 'rct-hl ' + (isEvenRow ? 'rct-hl-even ' : 'rct-hl-odd ') + (classNamesForGroup ? classNamesForGroup.join(' ') : ''),
        style: {
          width: canvasWidth,
          height: groupHeight,
          background: 'lightgray',
          border: '1px solid blue',
          position: 'relative'
        },
        "data-groupid": (0, _generic._get)(group, keys.groupIdKey)
      }, children));
    }
  }]);

  return GroupRow;
}(_react.Component);

_defineProperty(GroupRow, "propTypes", {
  onClick: _propTypes["default"].func.isRequired,
  onDoubleClick: _propTypes["default"].func.isRequired,
  onContextMenu: _propTypes["default"].func.isRequired,
  isEvenRow: _propTypes["default"].bool.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  groupHeight: _propTypes["default"].number.isRequired,
  clickTolerance: _propTypes["default"].number.isRequired,
  group: _propTypes["default"].object.isRequired,
  horizontalLineClassNamesForGroup: _propTypes["default"].func,
  keys: _propTypes["default"].object
});

var GroupRowWrapper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GroupRowWrapper, _PureComponent);

  function GroupRowWrapper() {
    _classCallCheck(this, GroupRowWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(GroupRowWrapper).apply(this, arguments));
  }

  _createClass(GroupRowWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
        var getTimelineState = _ref.getTimelineState;

        var _getTimelineState = getTimelineState(),
            canvasWidth = _getTimelineState.canvasWidth,
            keys = _getTimelineState.keys;

        return _react["default"].createElement(_GroupRowContext.GroupRowConsumer, null, function (props) {
          return _react["default"].createElement(GroupRow, _extends(_defineProperty({
            canvasWidth: canvasWidth,
            keys: keys
          }, "canvasWidth", canvasWidth), props, {
            children: _this2.props.children
          }));
        });
      });
    }
  }]);

  return GroupRowWrapper;
}(_react.PureComponent);

var _default = GroupRowWrapper;
exports["default"] = _default;