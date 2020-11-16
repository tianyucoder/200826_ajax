const express = require('express')

const app = express()
//暴露静态资源
app.use(express.static(__dirname+'/src'))

app.get('/test_get',(request,response)=>{
	console.log('有人请求test_get了');
	response.send('hello_test_get')
})

app.listen(8080,(err)=>{
	if(!err) {
		console.log('测试ajax请求的服务器开启成功了！测试地址如下');
		console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
	}
})