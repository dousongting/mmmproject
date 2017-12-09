$(function(){
    // var search = location.search;
    // search = search.slice(1);
    // search = search.split("&");
    // console.log(search);
    var param = getParam();
    console.log(param);

    //发送ajax 请求 获取数据 渲染页面
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        data:{
            productid: param.productid
        },
        success:function(data){
            console.log(data);
            // 模板引擎和数据对象集合
            console.log(data.result[0]);
            result = data.result;
            console.log(result)
            // var html = data.result[0];
            // $('.recommend').html(template("tpl",{result:data.result}));
            $('.recommend').html(template("tpl",{result:result}));
        }

    })
})