# JS相关技术集锦

获取查询参数：
```
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getQueryString(){
      var url = 'http://localhost:8100/home?returnUrl=https:%2F%2Fwww.baidu.com&a=1&b=2';
      var params = {};
      var pattern = /([^&=]+)=([^&]*)/g;
      var m;
      var match = pattern.exec(url);
      console.log(match);

      while (m = pattern.exec(url)) {
        console.log(m);
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      console.log(params);
}
```