/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
*/

var http = require('http');

http.createServer(function (req, res) {
  res.write
  (
    '<html>' +
      '<head>' +
        '<title>Hello World</title>' +
        '<style>' +
          '* {' +
            'box-sizing: border-box;' +
          '} body {' +
            'font-family: Arial, Helvetica, sans-serif;' +
          '} header {' +
            'background-color: #666;' +
            'padding: 30px;' +
            'text-align: center;' +
            'font-size: 35px;' +
            'color: white;' +
          '} nav {' +
            'float: left;' +
            'width: 30%;' +
            'height: 300px;' +
            'background: #ccc;' +
            'padding: 20px;' +
          '} nav ul {' +
            'list-style-type: none;' +
            'padding: 0;' +
          '} article {' +
            'float: left;' +
            'padding: 20px;' +
            'width: 70%;' +
            'background-color: #f1f1f1;' +
            'height: 300px;' +
          '} section:after {' +
            'content: "";' +
            'display: table;' +
            'clear: both;' +
          '} footer {' +
            'background-color: #777;' +
            'padding: 10px;' +
            'text-align: center;' +
            'color: white;' +
          '} @media (max-width: 600px) {' +
            'nav, article {' +
              'width: 100%;' +
              'height: auto;' +
            '}' +
          '}' +
        '</style>' +
      '</head>' +
      '<body>' +
        '<header>' +
          '<h2>Bullet Journal</h2>' +
        '</header>' +
        '<section>' +
          '<nav>' +
            '<ul>' +
              '<li><a href="#">Escola</a></li>' +
              '<li><a href="#">Casa</a></li>' +
              '<li><a href="#">Trabalho</a></li>' +
            '</ul>' +
          '</nav>' +
          '<article>' +
            '<h1>Minhas anotações</h1>' +
            '<p>.</p>' +
            '<p>.</p>' +
          '</article>' +
        '</section>' +
        '<footer>' +
          '<p>Footer</p>' +
        '</footer>' +
      '</body>' +
    '</html>'
  );
}).listen(8080);