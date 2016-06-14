/**
* @Author: billcz
* @Date:   2016-06-14T14:27:07+08:00
* @Email:  chenz@dtdream.com
* @Last modified by:   billcz
* @Last modified time: 2016-06-14T15:47:45+08:00
*/

import _debug from 'debug';

export default class debug {
  constructor(appName, module) {
    this._debug = _debug(`${appName}:debug:${module}`);
    this._info = _debug(`${appName}:info:${module}`);
    this._warn = _debug(`${appName}:warn:${module}`);
    this._error = _debug(`${appName}:error:${module}`);
  }

  debug(...args) {
    this._debug(...args);
  }

  info(...args) {
    this._info(...args);
  }

  warn(...args) {
    this._warn(...args);
  }

  error(...args) {
    this._error(...args);
  }
}
