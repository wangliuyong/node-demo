# 一个简单的node.js 搭建的服务器

## 服务器启动请指定端口号
```
node serve.js 你指定的端口号
```

## 根据请求返回不同的响应
* 响应 /
* 响应 /xxx
* 响应 404
* 响应 /xxx.html
* 响应 /xxx.frank
* 再次强调，后缀是废话。文件内容是有 HTTP 头中的 Content-Type 保证的
* 响应 /xxx.css
* 响应 /xxx.js
* HTTP 路径不是文件路径！！！/xxx.html 不一定对应 xxx.html 文件
* HTTP 路径不是文件路径！！！/xxx.html 不一定对应 xxx.html 文件
* HTTP 路径不是文件路径！！！/xxx.html 不一定对应 xxx.html 文件
