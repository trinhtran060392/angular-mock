$(function(){$(".add-item").click(function(){var t=$(this).parents(".additional-target"),i=t.clone(!0);return i.insertAfter(t).addClass("is-added").find(".button-delete").css({display:"flex"}),i.find("div").removeClass("is-input is-ok").find("input").val(""),$(this).hide(),!1}),$(".button-delete").click(function(){var t=$(this).parents(".additional-target");return t.next().hasClass("is-added")||t.prev().find(".add-item").show(),$(this).parents(".additional-target").remove(),!1})});