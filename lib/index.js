'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _aTable = require('a-table');

var _aTable2 = _interopRequireDefault(_aTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAtable = function (_React$Component) {
  _inherits(ReactAtable, _React$Component);

  function ReactAtable() {
    _classCallCheck(this, ReactAtable);

    return _possibleConstructorReturn(this, (ReactAtable.__proto__ || Object.getPrototypeOf(ReactAtable)).call(this));
  }

  _createClass(ReactAtable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var tableNode = _reactDom2.default.findDOMNode(this.refs.aTable).querySelector('table');
      this.table = new _aTable2.default(tableNode, {
        lang: this.props.lang,
        mark: this.props.mark,
        showBtnList: true
      });
      this.table.afterEntered = this.table.afterRendered = function () {
        if (typeof _this2.props.onUpdate === "function") {
          _this2.props.onUpdate(_this2.table.getTable());
        }
      };
      this.table.afterRendered();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'aTable' },
        this.props.children
      );
    }
  }]);

  return ReactAtable;
}(_react2.default.Component);

exports.default = ReactAtable;


ReactAtable.defaultProps = {
  showBtnList: true,
  lang: 'en',
  mark: {
    align: {
      default: 'left',
      left: 'left',
      center: 'center',
      right: 'right'
    },
    btn: {
      group: 'a-table-btn-list',
      item: 'a-table-btn',
      itemActive: 'a-table-btn-active'
    },
    icon: {
      alignLeft: 'a-table-icon a-table-icon-left',
      alignCenter: 'a-table-icon a-table-icon-center',
      alignRight: 'a-table-icon a-table-icon-right',
      undo: 'a-table-icon a-table-icon-undo',
      merge: 'a-table-icon a-table-icon-merge02',
      split: 'a-table-icon a-table-icon-split02',
      table: 'a-table-icon a-table-icon-th02',
      source: 'a-table-icon a-table-icon-source01',
      td: 'a-table-icon a-table-icon-td03',
      th: 'a-table-icon a-table-icon-th02'
    },
    selector: {
      self: 'a-table-selector'
    }
  }
};
