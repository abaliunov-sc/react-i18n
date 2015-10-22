//this file is used to add Intl global object to browser (IE10)
//for more info refer to:
//common intl info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
//intl polyfillinfo: https://www.npmjs.com/package/intl
if(!global.Intl){
  global.Intl = require('intl');
}
