"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HelpersConsumer = exports.HelpersContextProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _generic = require("../utility/generic");

var _TimelineStateContext = require("../timeline/TimelineStateContext");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

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

var defaultContextState = {
  getLeftOffsetFromDate: function getLeftOffsetFromDate() {
    console.warn('"getLeftOffsetFromDate" default func is being used');
  },
  getDateFromLeftOffsetPosition: function getDateFromLeftOffsetPosition() {
    console.warn('"getDateFromLeftOffsetPosition" default func is being used');
  },
  getItemAbsoluteDimensions: function getItemAbsoluteDimensions() {
    console.warn('"getItemAbsoluteDimensions" default func is being used');
  },
  getItemDimensions: function getItemDimensions() {
    console.warn('"getItemDimensions" default func is being used');
  }
};

var HelpersContext = _react["default"].createContext(defaultContextState);

var Consumer = HelpersContext.Consumer,
    Provider = HelpersContext.Provider;

var HelpersContextProviderCore =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HelpersContextProviderCore, _PureComponent);

  function HelpersContextProviderCore() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HelpersContextProviderCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HelpersContextProviderCore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getGroupByItemId", function (itemId) {
      var _this$props = _this.props,
          items = _this$props.items,
          keys = _this$props.keys;
      var item = items.find(function (i) {
        return (0, _generic._get)(i, keys.itemIdKey) === itemId;
      });
      var groupId = (0, _generic._get)(item, keys.itemGroupKey);
      return groupId;
    });

    _defineProperty(_assertThisInitialized(_this), "getItemDimensionsCreator", (0, _memoizeOne["default"])(function (groupsWithItemsDimensions, getGroupByItemId) {
      return function (itemId) {
        var groupId = getGroupByItemId(itemId);
        var group = groupsWithItemsDimensions[groupId];
        var itemDimensions = group.itemDimensions.find(function (i) {
          return i.id === itemId;
        });
        if (itemDimensions) return itemDimensions.dimensions;else return undefined;
      };
    }));

    _defineProperty(_assertThisInitialized(_this), "getItemAbsoluteDimensionsCreator", (0, _memoizeOne["default"])(function (groupHeights, groupsWithItemsDimensions, getGroupByItemId) {
      return function (itemId) {
        var groupId = getGroupByItemId(itemId);
        var group = groupsWithItemsDimensions[groupId];
        var itemDimensions = group.itemDimensions.find(function (i) {
          return i.id === itemId;
        });
        if (!itemDimensions) return;
        var groupIndex = group.index;
        var groupTop = groupHeights.reduce(function (acc, height, index) {
          if (index < groupIndex) return acc + height;else return acc;
        }, 0);
        return {
          left: itemDimensions.dimensions.left,
          top: groupTop + itemDimensions.dimensions.top,
          width: itemDimensions.dimensions.width
        };
      };
    }));

    _defineProperty(_assertThisInitialized(_this), "getGroupDimensionsCreator", (0, _memoizeOne["default"])(function (groupsWithItemsDimensions, groupHeights, groupTops) {
      return function (groupId) {
        var group = groupsWithItemsDimensions[groupId];
        if (!group) return;
        var index = group.index;
        var height = groupHeights[index];
        var top = groupTops[index];
        return {
          height: height,
          top: top
        };
      };
    }));

    return _this;
  }

  _createClass(HelpersContextProviderCore, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react["default"].createElement(Provider, {
        value: {
          getLeftOffsetFromDate: this.props.getLeftOffsetFromDate,
          getDateFromLeftOffsetPosition: this.props.getDateFromLeftOffsetPosition,
          getItemDimensions: this.getItemDimensionsCreator(this.props.groupsWithItemsDimensions, this.getGroupByItemId),
          getItemAbsoluteDimensions: this.getItemAbsoluteDimensionsCreator(this.props.groupHeights, this.props.groupsWithItemsDimensions, this.getGroupByItemId),
          getGroupDimensions: this.getGroupDimensionsCreator(this.props.groupsWithItemsDimensions, this.props.groupHeights, this.props.groupTops)
        }
      }, children);
    }
  }]);

  return HelpersContextProviderCore;
}(_react.PureComponent);

_defineProperty(HelpersContextProviderCore, "propTypes", {
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired,
  getDateFromLeftOffsetPosition: _propTypes["default"].func.isRequired,
  groupsWithItemsDimensions: _propTypes["default"].object.isRequired,
  items: _propTypes["default"].array.isRequired,
  keys: _propTypes["default"].object.isRequired,
  groupHeights: _propTypes["default"].array.isRequired,
  groupTops: _propTypes["default"].array.isRequired
});

var HelpersContextProvider =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(HelpersContextProvider, _PureComponent2);

  function HelpersContextProvider() {
    _classCallCheck(this, HelpersContextProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelpersContextProvider).apply(this, arguments));
  }

  _createClass(HelpersContextProvider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
        var getLeftOffsetFromDate = _ref.getLeftOffsetFromDate,
            getDateFromLeftOffsetPosition = _ref.getDateFromLeftOffsetPosition;
        return _react["default"].createElement(HelpersContextProviderCore, _extends({
          getLeftOffsetFromDate: getLeftOffsetFromDate,
          getDateFromLeftOffsetPosition: getDateFromLeftOffsetPosition
        }, _this2.props));
      });
    }
  }]);

  return HelpersContextProvider;
}(_react.PureComponent);

exports.HelpersContextProvider = HelpersContextProvider;
var HelpersConsumer = Consumer;
exports.HelpersConsumer = HelpersConsumer;
var _default = HelpersContext;
exports["default"] = _default;