$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getsitenav",
        success:function(data){
            console.log(data);
            //数据和模板引擎结合  
            $(".recommend ul").html(template("tpl",data));
        }
    })
})