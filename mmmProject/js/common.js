function getParam() {
    var search = location.search;
    // console.log(search);
    search = decodeURI(search);
    // console.log(search);
    //把问号切掉
    search = search.slice(1);
    // console.log(search);
    search = search.split("&");
    // console.log(search);
    //遍历数组  
    //声明一个空对象
    var data = {};
    //forEach 是原生的方法  e,i
    //Each  是JQ的方法  i,e
    search.forEach(function (e, i) {
        // console.log(e);
        var key = e.split("=")[0];
        var value = e.split("=")[1];
        // console.log(key);
        // console.log(i);
        // console.log(this);
        data[key] = value;
    })
    return data;
    // console.log(data);
}