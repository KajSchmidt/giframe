
function buildPage(callBack) {
  $.getJSON( "pages.json", function(data) {
    $.each(data["pages"], function(index, obj){
      if (obj["image"] != callBack) {
        $("article").fadeOut('slow', function(){
          $("body").empty();
          $("body").append("<article id='page'><section><div id='sender_name'>"+ obj["sender"] +"</div><div id='sender_message'>"+ obj["message"] +"</div></section></article>");
          $("#page").css("background-image", "url('"+ obj["image"] +"')");
          $("#page").delay(2000).fadeIn('slow', function(){
            $("#page section").delay(500).css("display", "flex").hide().slideDown('slow');
          });
          setTimeout(function(){ buildPage(obj["image"]); }, 3000);
        });
      } else {
        setTimeout(function(){ buildPage(callBack); }, 3000);
      }
    });
  });
};
