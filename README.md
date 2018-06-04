
### 说明
node 版本的微信 sdk 签名的服务端代码，使用 koa2 



### 准备
1. 修改`sign`目录下的`wx-config`文件，填入 appid 和 secret 
2. 根据需要修改`sign`目录下`signature`文件下的 `jsApiList`接口列表


### 使用

	$ npm install
		
	$ node app.js
	
	
接受 post 请求，监听 2000 端口, 地址为`localhost:2000/wx`

参数为：当前页面的 url

### 示例

```
let param = {
	url: window.location.href.split('#')[0]
}

fetch(`localhost:2000/wx`, {
  method: 'POST', 
  body: JSON.stringify(param),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
.then(res => {
	console.log(res.json())
})

```






### 返回数据结构

		  {
		    "status": "ok",
		    "data": {
		      "jsapi_ticket": "ticket....",
		      "nonceStr": ".....",
		      "timestamp": "112111111",
		      "url": "",
		      "signature": "......",
		      "appId": "appid",
		      "jsApiList": ["chooseImage", "previewImage", "onMenuShareAppMessage"]  
		    }
		  }
		  
		  
		  
		 
### 注意
npm 下载的 jssha 会报错，使用根目录中的 jssha 覆盖掉 node_modules 下的同名目录




