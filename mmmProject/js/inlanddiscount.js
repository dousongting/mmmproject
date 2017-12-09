$(function(){
    //发送ajax 获取数据 渲染页面
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        success:function(data){
            console.log(data);
            //数据对象和模板引擎结合
            $(".recommend ul").html(template("tpl",data));
        }
    })
})