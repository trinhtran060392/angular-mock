$(function(){
  var offset = $(".sidemenu").offset();
  var height = $(".sidemenu").height();
  var page_height = window.innerHeight;
  if (page_height > height) {
    $(window).scroll(function() {
      if ($(window).scrollTop() > offset.top - 15) {
        $(".sidemenu").css({
          position: "fixed"
        });
      } else {
        $(".sidemenu").css({
          position: "static"
        });
      }
    });
  }
  else {
    $(window).scroll(function() {
      if ($(window).scrollTop() > document.body.clientHeight - page_height - 110) {
        $(".sidemenu").css({
          position: "absolute",
          top: document.body.clientHeight - height - 210
        });
      }
      else {
        if ($(window).scrollTop() + page_height > offset.top + page_height) {
          $(".sidemenu").css({
            position: "fixed",
            top: window.innerHeight - height
          });
        } else {
          $(".sidemenu").css({
            position: "static"
          });
        }
      }
    });
  }
      console.log(document.body.clientHeight);
});
