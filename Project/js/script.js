
$(document).ready(function () {

  // This is append the head, header and footer in the webpage
  $(function () {
    $("#head").load("./meta.html");
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
  });

  if ($(this).scrollTop() > 70) {
    $("#header").addClass("scrolledHeader");
    $("header nav menu li a").addClass("scrolledAnchor");
    $("header div.logoContainer a img").addClass("scrolledImg");
  }
  else {
    $("#header").removeClass("scrolledHeader");
    $("header nav menu li a").removeClass("scrolledAnchor");
    $("header div.logoContainer a img").removeClass("scrolledImg");
  }

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 70) {
        $("#header").addClass("scrolledHeader");
        $("header nav menu li a").addClass("scrolledAnchor");
        $("header div.logoContainer a img").addClass("scrolledImg");
      }
      else {
        $("#header").removeClass("scrolledHeader");
        $("header nav menu li a").removeClass("scrolledAnchor");
        $("header div.logoContainer a img").removeClass("scrolledImg");
    }
  })

  $('input[type="radio"]').change(function(){
    let val = $('input[name="options"]:checked').val();

    if(val == 'option1'){
      $(".description").removeClass("noDisplay");
      $(".review").addClass("noDisplay");
    }
    else{
      $(".description").addClass("noDisplay");
      $(".review").removeClass("noDisplay");
    }
  })

  $("#add-1-pro").click(function(){
    var el = parseInt($("#total-pro").text());
    if(el == 9){
      return ;
    }
   $("#total-pro").text(el+1);
  })

  $("#sub-1-pro").click(function(){
    var el = parseInt($("#total-pro").text());
    if(el == 1){
      return ;
    }
   $("#total-pro").text(el-1);
  })
});