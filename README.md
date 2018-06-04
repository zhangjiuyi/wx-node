
### 说明
微信 sdk 签名的服务端代码，基于 node，使用 koa 


### 使用

1. 修改`sign`目录下的`wx-config`文件，填入 appid 和 secret 
2. 根据需要修改`sign`目录下`signature`文件下的 `jsApiList`接口列表
3. 启动`node app.js`
4. post 请求 `localhost:2000/wx`


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




