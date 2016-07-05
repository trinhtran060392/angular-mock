$(function(){
  if($(".md-textfield-input").val()) {
    $(this).parent().addClass("is-input");
  }
  else {
    $(this).parent().removeClass("is-input");
  }
  $(".md-textfield-input, .md-textarea-input, .md-select-box").focusin(function(){
    $(this).parent().addClass("is-focused");
  })
  .focusout(function(){
    $(this).parent().removeClass("is-focused");
    if($(this).val()) {
      $(this).parent().addClass("is-input");
    }
    else {
      $(this).parent().removeClass("is-input");
    }
  })
  .change(function() {
    if($(this).val()) {
      $(this).parent().addClass("is-input");
    }
    else {
      $(this).parent().removeClass("is-input");
    }
  });
  $(".validate").find("input, select")
  .focusout(function(){
    if($(this).val()) {
      $(this).parent().addClass("is-ok");
    }
    else {
      $(this).parent().removeClass("is-ok");
    }
  })
  .change(function() {
    if($(this).val()) {
      $(this).parent().addClass("is-ok");
    }
    else {
      $(this).parent().removeClass("is-ok");
    }
  });
  $(".md-select-box").change(function(){
    $(this).parent().addClass("is-ok");
  })
});
