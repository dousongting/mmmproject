$(function(){
    //发送ajax 请求获取数据渲染页面
    // 超市
    function getShop(){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsshop",
            success: function (data) {
                // console.log(data);
                //数据对象和模板引擎结合  
                $(".selectnav .shop ul").html(template("tplshop", data));
            }
        })
    }
    // 地区
    function getArea(){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsshoparea",
            success: function (data) {
                console.log(data);
                //数据对象和模板引擎结合  
                $(".selectnav .area ul").html(template("tplarea", data));
            }
        })
    }
    // getArea();

    function getProduct(param){
        shopid = param.shopid || 0;
        areaid = param.areaid ||0;
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success: function (data) {
                console.log(data);
                //数据对象和模板引擎结合  
                $(".recommend ul").html(template("tplproduct", data));
            }
        })
    }
    getProduct({});
    $(".selectnav .hd li").on("click",function(){
        // console.log("11");
        getShop();
        getArea();
        var num = $(this).data("num");
        console.log(num);
        console.log($(this).parent().parent().siblings(".shop"));
        if(num == 1){
            $(this).parent().parent().siblings(".shop").toggleClass("on");
        }else if(num ==2){
            $(this).parent().parent().siblings(".area").toggleClass("on");
        }else if(num == 3){
            $(this).parent().parent().siblings(".allPrice").toggleClass("on");
        }
    })

    //给所有的shop 下面的li 注册点击事件 
    $(".shop ul").on("click","li",function(){
        // console.log(11);
        //获取当前li 的shopid
        var shopid = $(this).data("shopid");
        // console.log(shopid);
        $(this).parent().parent().removeClass("on");
        //发送ajax  获取数据 重新渲染页面 hhhh
        getProduct({shopid:shopid});
    });
    //给所有的area 下面的li  注册点击事件 
    $(".area ul").on("click","li",function(){
        // console.log("11");
        //获取areaid  发送ajax 获取数据 重新渲染页面
        var areaid = $(this).data("areaid");
        // console.log(areaid);
        $(this).parent().parent().removeClass("on");
        getProduct({areaid:areaid});
    })
})