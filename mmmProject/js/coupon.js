$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcoupon",
        success:function(data){
            console.log(data);
            //数据对象和模板引擎结合
            $(".recommend ul").html(template("tpl",data));
            
        }
    })
})