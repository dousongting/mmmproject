$(function(){
    // 获取地址栏参数
   var param =  getParam();
   //发送ajax 请求 获取数据渲染页面
   $.ajax({
       type:"get",
       url:"http://127.0.0.1:9090/api/getcouponproduct",
       data:{
           couponid: param.couponid
       },
       success:function(data){
           console.log(data);
           //数据对象和模板引擎结合 
           $(".recommend ul").html(template("tpl",data));
       }
   })
})