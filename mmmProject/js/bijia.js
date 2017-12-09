$(function(){
    var param = getParam();
    console.log(param.productid);
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproduct",
        data:{
            productid:param.productid
        },
        success:function(data){
            console.log(data);
            var str = data.result[0].productName;
            // console.log(str);
            str = str.split(" ")[0];
            // console.log(str);
            //数据对象和模板引擎结合
            $(".listnav .productName").html(str);
            $(".recommend .img").html(template("tpl",data));
            
        }
    })
      $.ajax({
          type:"get",
          url:"http://127.0.0.1:9090/api/getproductcom",
          data:{
              productid: param.productid
          },
          success:function(data){
              console.log(data);
              // 数据对象和模板引擎结合
              $(".recommend .product-com-list").html(template("tpl1",data));
          }
      })
})