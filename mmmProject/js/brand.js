$(function () {
    //获取地址栏参数
    var param = getParam();
    console.log(param);
    //发送ajax 请求获取数据 渲染页面
    //获取品牌标题
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrand",
        data: {
            brandtitleid: param.brandtitleid,
        },
        success: function (data) {
            console.log(data);
            //数据对象和模板引擎结合  
            $(".list .big").html(template("tplbrand", data));
        }
    })
    //排行
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        data: {
            brandtitleid: param.brandtitleid,
            pagesize: 4
        },
        success: function (data) {
            console.log(data);
            //数据对象和模板引擎结合  
            $(".productList ul").html(template("tplsort", data));

        }
    })

    //评论
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproductcom",
        data: {
            productid : 1,
        },
        success: function (data) {
            console.log(data);
            //数据对象和模板引擎结合  
            $(".product-comm ul").html(template("tplcomm", data));

        }
    })

})