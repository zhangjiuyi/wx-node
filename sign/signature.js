const { APPID } = require('./wx-config')
const getTicket = require('./ticket')


const jsApiList = [
  'chooseImage',
  'previewImage',
  'onMenuShareAppMessage'
]

// 随机字符串产生函数
var createNonceStr = function() {
	return Math.random().toString(36).substr(2, 15);
};

// 时间戳产生函数
var createTimestamp = function () {
	return parseInt(new Date().getTime() / 1000) + '';
};


var raw = function (args) {
  var keys = Object.keys(args);
  keys = keys.sort()
  var newArgs = {};
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key];
  });

  var string = '';
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k];
  }
  string = string.substr(1);

  return string;
};



/**
* @synopsis 签名算法 
*
* @param jsapi_ticket 用于签名的 jsapi_ticket
* @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
*
* @returns
*/
var sign = async function (url) {

  let jsapi_ticket = await getTicket()

  var ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  };

  var string = raw(ret);
  jsSHA = require('jssha');
  shaObj = new jsSHA(string, 'TEXT');


  ret.signature = shaObj.getHash('SHA-1', 'HEX');

  let result  = {
    ...ret,
    appId: APPID,
    jsApiList
  }

  return result;
};

module.exports = sign