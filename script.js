
function buildPage() {
  var pageId = 0;
  $.getJSON( "pages.json", function(data) {
    $.each(data["pages"], function(index, obj){
      $("body").append("<article id='page-"+ index +"'><section><div id='sender_name'>"+ obj["sender"] +"</div><div id='sender_message'>"+ obj["message"] +"</div></section></article>");
      $("#page-"+ index).css("background-image", "url('"+ obj["image"] +"')");
    });
  })
  .done(function(){
    displayPage(0);
  });
};

function displayPage(pageId, pageMode) {
  $("article").fadeOut('slow');
  $("#page-"+ pageId).delay(2000).fadeIn('slow', function(){
    $("#page-"+ pageId +" section").delay(500).css("display", "flex").hide().slideDown('slow');
  });
};
