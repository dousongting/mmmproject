$(function(){
    //发送ajax请求  获取数据 渲染页面
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        success:function(data){
            // console.log(data);
            // 数据对象和模板引擎结合 
            $(".big").html(template("tpl",data));
        }
    });
    // 给所有的bigLi 也就是品牌li  注册点击事件  
    $(".big").on("click",".bigLi",function(){
        //获取到当前点击的titleid
        var titleid = $(this).data("titleid");
        // console.log(titleid);
        var $this = $(this);
        console.log($this);
        //发送ajax请求 
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getcategory",
            data:{
                titleid:titleid
            },
            success:function(data){
                console.log(data);
                //模板引擎和数据对象结合
                $this.children().eq(1).html(template("tpl2",data));
                // console.log($(this));
                console.log($this.children().eq(1));
                //当前的li  添加now  这个类  其他全都移除这个类
                $this.children().eq(1).toggleClass("now");
            }
        })
    })
})