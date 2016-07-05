$(function(){
  $(".add-item").click(function(){
    var $row = $(this).parents(".additional-target");
    var $newRow = $row.clone(true);
    $newRow
      .insertAfter($row)
      .addClass("is-added")
      .find(".button-delete")
      .css({"display":"flex"});
    $newRow.find("div").removeClass("is-input is-ok").find("input").val("");
    $(this).hide();
    return false;
  });
  $(".button-delete").click(function(){
    var $parent = $(this).parents(".additional-target");
    if(!$parent.next().hasClass("is-added")) {
      $parent.prev().find(".add-item").show();
    }
    $(this).parents(".additional-target").remove();
    return false;
  });
});
