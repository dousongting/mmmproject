$(function(){
    //发送ajax 请求 获取数据 渲染页面
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        success:function(data){
            console.log(data);
            //数据对象和模板引擎结合
            $(".recommend ul").html(template("tpl",data));
            var totalCount = data.totalCount;
            // console.log(totalCount);
            var pagesize = data.pagesize;
            // console.log(pagesize);
            var ceil = Math.floor(totalCount / pagesize);
            var str = "";
            for (var i = 1; i <= ceil; i++) {
                str += "<option>" + i + "/" + ceil + "</option>";
            }
            $("select").html(str);
        }
    });
    //声明一个pageid 
    var pageid = 0; 
    //给下一页注册点击事件 
    $(".recommend .btn").on("click", ".next", function () {
        // console.log(111);
        //让pageid++
        pageid++;
        // console.log(param.pageid);
        if (pageid >= 14) {
            pageid = 13
        }
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            data: {
                pageid: pageid
            },
            success: function (data) {
                console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                // $("select").html(template("tpl2", data));
                $("select option").text(pageid+1 + "/" + 14);
            }
        })
    });
    //给上一页注册点击事件 
    $(".recommend .btn").on("click", ".prev", function () {
        // console.log(111);
        //让pageid++
        if (pageid > 0) {
            pageid--;
        }
        // console.log(param.pageid);
        if (pageid <= 0) {
            pageid = 0
        }
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            data: {
                pageid:pageid
            },
            success: function (data) {
                console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                // $("select").html(template("tpl2", data));
                $("select option").text(pageid+1 + "/" + 14);
            }
        })
    });
    //给所有的option 被选中事件
    $("select").on("change", function () {
        // console.log(111);
        //获取当前option 的val
        pageid = $(this).val();
        console.log(pageid);
        $.ajax({
            type: "get",
            url: "http://192.168.27.71:9090/api/getmoneyctrl",
            data: {
                pageid:pageid
            },
            success: function (data) {
                // console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                $("select option").eq(pageid - 1).prop("selected", true).siblings().prop("selected", false);
                $(document.documentElement).scrollTop(0);
            }
        })

    })

})