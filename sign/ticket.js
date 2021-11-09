

const { APPID, SECRET } = require('./wx-config')
const request = require('../util/request')  


const TOKEN_URL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${SECRET}`
const TICKET_URL = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?`


let token = null,
    ticket = null

/**
 * 获取token
 */
const getToken = async function  () {

  if (token) {
    return token
  }

  let { access_token } = await request.get(TOKEN_URL)
  console.log('token',access_token)

  return token = access_token
}


/**
 * 获取ticket
 */
const getTicket = async function () {

  if (ticket) {
    return ticket
  }

  let token = await getToken()
  
  let url = `${TICKET_URL}access_token=${token}&type=jsapi`

  let res = await request.get(url)
  
  console.log('ticket',res.ticket)
  return ticket = res.ticket
}


module.exports = getTicket



