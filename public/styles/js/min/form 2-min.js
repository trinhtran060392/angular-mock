$(function(){$(".md-textfield-input").val()?$(this).parent().addClass("is-input"):$(this).parent().removeClass("is-input"),$(".md-textfield-input").focusin(function(){$(this).parent().addClass("is-focused")}).focusout(function(){$(this).parent().removeClass("is-focused"),$(this).parents("form").find("input").each(function(){$(this).val()?$(this).parent().addClass("is-input"):$(this).parent().removeClass("is-input")}).change(function(){$(this).parents("form").find("input").each(function(){$(this).val()?$(this).parent().addClass("is-input"):$(this).parent().removeClass("is-input")})})})});