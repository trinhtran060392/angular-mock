function loginHandler() {
  // header login
  var $popup_login = $(".popup-login");
  var $button = $(".header-login-link").find("a");
  var $button_login = $popup_login.find(".button");
  $button.click(function(){
    $popup_login.addClass("is-opened");
    return false;
  });
  $(document).click(function(){
    $popup_login.removeClass("is-opened");
  });
  $popup_login.click(function(){
    event.stopPropagation();
  });
  $button_login.click(function(){
    $(".header-login.is-logout").hide();
    $(".header-login.is-login").show();
    return false;
  });
  var popup = new Popup();
  $(".button-clear, .cf-popup-close").click(function(){
    popup.close();
    return false;
  });
  $(".cf-popup-open").click(function(){
    var target = $(this).data("target");
    popup = new Popup(target);
    popup.open();
    return false;
  });
}