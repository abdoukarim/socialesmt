$(document).ready(function(){$("#edit_photo_toggle").bind("click",function(a){a.preventDefault();$("#photo_edit_options").toggle();$(".edit_photo input:text").first().focus()});$(".edit_photo").bind("ajax:loading",function(b,a,c){$("#photo_edit_options").toggle();$("#photo_spinner").show();$("#show_photo").find("img").fadeTo(200,0.3)});$(".edit_photo").bind("ajax:failure",function(b,a,c){Diaspora.Alert.show("Failed to delete photo.","Are you sure you own this?");$("#show_photo").find("img").fadeTo(200,1);$("#photo_spinner").hide()});$(".edit_photo").bind("ajax:success",function(b,a,c){a=$.parseJSON(a);$(".edit_photo input:text").val(a.photo.text);$("#caption").html(a.photo.text);$("#show_photo").find("img").fadeTo(200,1);$("#photo_spinner").hide()});$(".make_profile_photo").bind("ajax:loading",function(c,a,d){var b=$(this).closest(".photo_options").attr("data-actor_person");$("img[data-person_id='"+b+"']").fadeTo(200,0.3)});$(".make_profile_photo").bind("ajax:success",function(b,a,c){a=$.parseJSON(a);$("img[data-person_id='"+a.person_id+"']").fadeTo(200,1).attr("src",a.image_url_small)});$(".make_profile_photo").bind("ajax:failure",function(c,a,d){var b=$(this).closest(".photo_options").attr("data-actor_person");Diaspora.Alert.show("Failed to update profile photo!");$("img[data-person_id='"+b+"']").fadeTo(200,1)});$(document).keyup(function(a){if(!$(a.target).hasClass("comment_box")){if(a.keyCode==37){if($("#photo_show_left").length>0){document.location=$("#photo_show_left").attr("href")}}else{if(a.keyCode==39){if($("#photo_show_right").length>0){document.location=$("#photo_show_right").attr("href")}}}}})});