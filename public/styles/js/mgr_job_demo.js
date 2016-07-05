$(function(){
  	$(".tab-content").hide();
  	$(".tab-content-01").show();
  $(".cfn-tab").find("a").click(function(){
  	var target = $(this).data("target");
  	$(".cfn-tab").find("a").removeClass("is-selected");
  	$(this).addClass("is-selected");
  	$(".tab-content").hide();
  	$("." + target).show();
    return false;
  });

});
