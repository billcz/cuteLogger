'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Author: billcz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Date:   2016-06-14T14:27:07+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Email:  chenz@dtdream.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified by:   billcz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @Last modified time: 2016-06-14T16:04:58+08:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger(appName, module) {
    _classCallCheck(this, logger);

    this._debug = (0, _debug3.default)(appName + ':debug:' + module);
    this._info = (0, _debug3.default)(appName + ':info:' + module);
    this._warn = (0, _debug3.default)(appName + ':warn:' + module);
    this._error = (0, _debug3.default)(appName + ':error:' + module);
  }

  _createClass(logger, [{
    key: 'debug',
    value: function debug() {
      this._debug.apply(this, arguments);
    }
  }, {
    key: 'info',
    value: function info() {
      this._info.apply(this, arguments);
    }
  }, {
    key: 'warn',
    value: function warn() {
      this._warn.apply(this, arguments);
    }
  }, {
    key: 'error',
    value: function error() {
      this._error.apply(this, arguments);
    }
  }]);

  return logger;
}();

exports.default = logger;