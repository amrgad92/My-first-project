let x = $("#scroll").offset().top;
$(window).scroll(function(){
  
  let y = $(window).scrollTop();

  if(y > x)
  {
    $(".arrow").fadeIn(500);

    $("#nav").css( {"backgroundColor" : "#8e7754"} )
  }
  else
  {
    $(".arrow").fadeOut(500);
    $("#nav").css( {"backgroundColor" : "transparent"} )
  }
})


$(".arrow").click(function()
{
  $("html , body").animate({scrollTop:0}, 1500)
})

$("#home").click(function()
{
  $("body , html").animate({scrollTop:0} , 1500)
})

let scroll = $("#scroll").offset().top

$("#about").click(function()
{
  $("body , html").animate({scrollTop: scroll} , 1500)
})

let scroll3 = $("#scroll3").offset().top

$("#product").click(function()
{
  $("html , body").animate({scrollTop: scroll3} , 1500)
})

let scroll4 = $("#scroll4").offset().top

$("#contact").click(function()
{
  $("html , body").animate({scrollTop: scroll4} , 1500)
})