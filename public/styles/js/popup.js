
var Popup = (function($) {

  var Popup,
      $target,
      $overlay;

  // constructor
  Popup = function(_prm) {
    $target = $("." + _prm);
    initialize();
  }


  // public method
  Popup.prototype = {

    open: function(){

      openPopup();

    },
    close: function(){

      closePopup();

    },

    isAnimating: false
  }


  // private method
  function initialize() {
    $overlay = $(".cf-overlay");
    var targetPos = $(document).scrollTop() + ($(window).height() - $target.height()) / 2;
    $target.css({
      top: targetPos
    });
    $overlay.css({
      height: $(document).height()+"px"
    });
    $overlay.click(function(){
      closePopup();
    });
  }

  function openPopup() {
    $target.addClass("is-opened");
    $overlay.addClass("is-opened");
  }

  function closePopup() {
    $target.removeClass("is-opened");
    $overlay.removeClass("is-opened");
  }

  return Popup;

}(jQuery));


