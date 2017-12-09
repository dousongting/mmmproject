$(function () {
    //获取地址栏的参数   发送ajax 请求 获取参数 渲染页面
    //属性后不加括号 
    //方法后要加括号
    // 获取参数

    var param = getParam();
    // console.log(param);
    $(".listnav").html(template("tpl1", param));
    var ceil;

    function render(param_) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getproductlist",
            data: {
                categoryid: param.categoryid,
                pageid: param.pageid
            },
            success: function (data) {
                console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                //    $(".recommend .btn").html(template("tpl2", data));
                var totalCount = data.totalCount;
                //    console.log(totalCount);
                var pagesize = data.pagesize;
                //    console.log(pagesize);
                ceil = Math.ceil(totalCount / pagesize);
                var str = "";
                for (var i = 1; i <= ceil; i++) {
                    str += "<option value=" + i + ">" + i + "/" + ceil + "</option>";
                }
                $("select").html(str);
            }
        });
    }
    render();

    //给下一页注册点击事件 
    $(".recommend .btn").on("click", ".next", function () {
        // console.log(111);
        //让pageid++
        param.pageid++;
        // console.log(param.pageid);
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getproductlist",
            data: {
                categoryid: param.categoryid,
                pageid: param.pageid
            },
            success: function (data) {
                console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                $("select option").eq(param.pageid - 1).prop("selected", true).siblings().prop("selected", false);
                $(document.documentElement).scrollTop(0);
                var totalCount = data.totalCount;
                //    console.log(totalCount);
                var pagesize = data.pagesize;
                //    console.log(pagesize);
                ceil = Math.ceil(totalCount / pagesize);
                console.log(ceil);
                if (param.pageid > ceil) {
                    param.pageid = ceil
                }
            }
        })
    });
    //给上一页注册点击事件 
    $(".recommend .btn").on("click", ".prev", function () {
        console.log(111);
        //让pageid--
        if (param.pageid > 1) {
            param.pageid--;
        }
        console.log(param.pageid);
        if (param.pageid <= 1) {
            param.pageid = 1
        }
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getproductlist",
            data: {
                categoryid: param.categoryid,
                pageid: param.pageid
            },
            success: function (data) {
                // console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                $("select option").eq(param.pageid - 1).prop("selected", true).siblings().prop("selected", false);
                // console.log("hh");
                $(document.documentElement).scrollTop(0);
            }
        })
    });

    //给所有的option 被选中事件
    $("select").on("change", function () {
        // console.log(111);
        //获取当前option 的val
        param.pageid = $(this).val();
        console.log(param.pageid);
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getproductlist",
            data: {
                categoryid: param.categoryid,
                pageid: param.pageid
            },
            success: function (data) {
                // console.log(data);
                // 数据对象 和模板引擎结合
                $(".recommend ul").html(template("tpl", data));
                $("select option").eq(param.pageid - 1).prop("selected", true).siblings().prop("selected", false);
                $(document.documentElement).scrollTop(0);
            }
        })

    })

})