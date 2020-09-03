$(document).ready(function() {

  $(".next").click(
    function() {
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      var circleActive = $("i.active");
      circleActive.removeClass("active");

      if(imgActive.hasClass("last")) {
        var nextImg = $("img.first");
        var nextCircle = $("i.first");
      } else {
        var nextImg = imgActive.next();
        var nextCircle = circleActive.next();
      }

      nextImg.addClass("active");
      nextCircle.addClass("active");
    }
  );


  $(".prev").click(
    function() {
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      if(imgActive.hasClass("first")) {
        var nextImg = $ ("img.first");
      } else {
        var nextImg = imgActive.prev();
      }
      nextImg.addClass("active");
    }
  );
});
