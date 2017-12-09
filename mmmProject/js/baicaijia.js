$(function(){

    //初始化滑动
    mui('.mui-scroll-wrapper').scroll({
        scrollY: false, //是否竖向滚动
        scrollX: true, //是否横向滚动
        indicators: false, //是否显示滚动条
        startX: 0, //初始化时滚动至x

    });
    // mui(".mui-scroll-wrapper").scroll({
    //     //不显示滚动条
    //     indicators: false
    //     // indicators: true, 是否显示滚动条
    // });

    mui(".mui-slider").slider({
        interval: 1000
    });
  
    //发送ajax  获取数据 渲染页面
    function renderNav(){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
            success: function (data) {
                console.log(data);
                // 数据对象和模板引擎结合
                $(".mui-scroll").html(template("tpl", data));
                titleid = data.result[0].titleId;
                console.log(titleid);
                var num = data.result.length;
                console.log(num);
                // 动态创建ul 的宽度
                var lis = $(".mui-scroll li");
                console.log(lis);
                var sum = 0;
                for(var i= 0 ; i<= lis.length ; i++){
                    //outerWidth 不传参数 默认宽度是内容+border+padding   传true  margin也算上
                    //innerWidth  宽度是内容+border+padding 
                    //width    宽度是内容+border
                    sum += lis.eq(i).outerWidth(true);
                    sum = Math.ceil(sum);
                }
                console.log(sum);
                $(".mui-scroll").css("width",sum);
            }
        })
    }
    renderNav()
    //商品列表
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
        data:{
            titleid:0
        },
        success:function(data){
            // console.log(data);
            $(".recommend ul").html(template("tpl2",data));
        }
    });
    //给所有的li 注册点击事件 
    $(".mui-scroll").on("tap","li",function(){
        // console.log("111");
        //获取titleid  
        var titleid = $(this).data("titleid");
        // console.log(titleid);
        //当前的this 加上now 这个类  其他的全都删除
        $(this).addClass("now").siblings().removeClass("now");
        //获取当前元素 相对定位(absoult fiexd)元素的偏移
        var position = $(this).position();
        // console.log(position);
        // var ulW =  $(".mui-scroll").outerWidth();
        // console.log(ulW);
        // console.log(ulW / 2 + 80);
        if(position.left <= 386 ){
            $(".mui-scroll").css({
                "transform":"translateX("+ -position.left+"px)"
            })
        }
        //发送ajax 请求 获取数据 重新渲染页面
        $.ajax({
            type:"get",
            url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data:{
                titleid:titleid,
            },
            success:function(data){
                // console.log(data);
                // 模板引擎和数据对象结合
                $(".recommend ul").html(template("tpl2",data));
            }
        })
    });
})