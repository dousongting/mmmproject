$(function(){
    //发送ajax请求 获取数据 渲染页面
    $.ajax({
        type:"get",
        url: "http://127.0.0.1:9090/api/getbrandtitle",
        success:function(data){
            console.log(data);
            $(".list ul").html(template("tpl",data));
        }
    })
})