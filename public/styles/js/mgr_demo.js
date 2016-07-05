$(function(){
  var popup = new Popup();
  $(".button-clear, .cf-popup-close").click(function(){
    popup.close();
    return false;
  });
  $(".button-register").click(function(){
    $(".search-box").find("p").show();
    popup.close();
    return false;
  });
  $(".cf-popup-open").click(function(){
    var target = $(this).data("target");
    popup = new Popup(target);
    popup.open();
    return false;
  });
  $(".search-detail-open").click(function(){
    $(".search-detail").addClass("is-opened");
    $(this).hide();
    //$(".search-detail-close").show();
    return false;
  });
  $(".search-detail-close").click(function(){
    $(".search-detail").removeClass("is-opened");
    $(this).hide();
    $(".search-detail-open").show();
    return false;
  });
  $(".memo-edit").click(function(){
    var $container = $(this).parent($(".memo"));
    console.log($container);
    var $content = $container.find("p");
    var $textarea = $("<textarea>").val($content.text());
    $content.hide();
    $textarea.insertBefore($container.find($(".memo-edit")));
    $(this).hide();
    $container.find($(".memo-save")).show();
    return false;
  });
  $(".memo-save").click(function(){
    var $content = $(".memo").find("p");
    var $textarea = $(".memo").find("textarea");
    $content.text($textarea.val()).show();
    $textarea.remove();
    $(this).hide();
    $(".memo-edit").show();
    return false;
  });

});
