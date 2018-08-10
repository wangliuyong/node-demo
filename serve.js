var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('HTTP 路径为\n' + path)
  if(path == '/index.html'){
    var string=fs.readFileSync('./index.html','utf8');
    var value = fs.readFileSync('./data', 'utf8')
    string=string.replace('$number',value)
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write(string);
    response.end()   
  }else if(path == '/style.css'){
    var string = fs.readFileSync('./style.css', 'utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css');
    response.write(string);
    response.end();
  }else if(path == '/main.js'){
    response.statusCode = 200;
    var string =fs.readFileSync('./main.js','utf8');
    response.setHeader('Content-Type', 'application/javascript');
    response.write(string);
    response.end();
  } else if (path == '/path') {
    response.statusCode=200;
    var value = fs.readFileSync('./data', 'utf8')
    value--;
    fs.writeFileSync('./data', value);
    
    //response.setHeader('Content-Type', 'image/png');使用图片发送请求时
    //response.write(fs.readFileSync('./1.png'));
    response.setHeader('content-Type', 'application/javascript'); //用script发送请求
    response.write(`amount.innerText = amount.innerText-1;`)
    response.end();
  }else{
    response.statusCode = 404
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)