
const request = require('request')  


/**
 * GET 请求
 * @param {*} url 
 */
exports.get = url => {

  return new Promise( resolve => {

    request.get(url, (err, res, body) => {

      if (err) console.log(`出现错误: ${err}`)
  
      resolve(JSON.parse(body))
    })
  })
}

