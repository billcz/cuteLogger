<!--
@Author: billcz
@Date:   2016-06-14T15:44:55+08:00
@Email:  chenz@dtdream.com
@Last modified by:   billcz
@Last modified time: 2016-06-14T17:08:51+08:00
-->

Simple logger support both for node server and browser, base on [debug](https://github.com/visionmedia/debug).
## Install
```bash
npm install cuteLogger
```

## How to Use?
You can write code like this both on server and browse;

```js
import _logger from 'cuteLogger';
const logger = new _logger('appName', 'moduleName');

logger.debug('hello cuteLogger');
logger.info('hello cuteLogger');
logger.warn('hello cuteLogger');
logger.error('hello cuteLogger');
```
The output maybe like this:
```bash
appName:debug:moduleName hello cuteLogger +0ms
appName:info:moduleName hello cuteLogger +0ms
appName:warn:moduleName hello cuteLogger +0ms
appName:error:moduleName hello cuteLogger +0ms
```
