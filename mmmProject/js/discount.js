$(function(){
    var param = getParam();
    //发送ajax 获取数据 渲染页面
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getdiscountproduct",
        data:{
            productid:param.productid
        },
        success:function(data){
            console.log(data);
            //数据对象和模板引擎结合
            $(".recommend").html(template("tpl",data));
            
        }
    })
})