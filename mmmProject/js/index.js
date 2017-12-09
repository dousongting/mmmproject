$(function(){
    // console.log(11);
    // 菜单导航
    //发送ajax 请求获取数据 渲染页面
    $.ajax ({
        type:"get",
        url:"http://127.0.0.1:9090/api/getindexmenu",
        success:function(data){
            console.log(data);
            // 数据对象和模板引擎结合
            $(".listnav ul").html(template("tpl",data));
            $(".listnav a[href='#']").parent().nextAll().addClass("now");
            // console.log($(".listnav a[href='#']")[0]);
            // console.log($(".listnav a[href='#']").parent().nextAll());
            // console.log($(".listnav a[href='#']")[0]);
            $(".listnav a[href='#']").on("click", function () {
                // console.log(222);
                $(this).parent().nextAll().toggleClass("now");

            })
        }
    });
    // 商品详情
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        success:function(data){
            // console.log(data);
            //数据对象和模板引擎结合
            $(".recommend ul").html(template("tpl2",data));
        }
    });

   
})