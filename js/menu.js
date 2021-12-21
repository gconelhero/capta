var jqscript = document.createElement('script');
jqscript.src = "js/jquery/jquery-3.3.1.min.js";
jqscript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jqscript);

function menuFunc() {
    var list_menu = document.getElementById("list_menu");
    var texto_banner_mobile = document.getElementById("texto-banner-mobile");
      if (list_menu.style.display === "block") {
        list_menu.style.display = "none";
        texto_banner_mobile.style.display = "block";

        
      } else {
        list_menu.style.display = "block";
        texto_banner_mobile.style.display = "none";
  
      }
  }

function menuClose() {
  var list_menu = document.getElementById("list_menu");
  var texto_banner_mobile = document.getElementById("texto-banner-mobile");
    if (list_menu.style.display === "block") {
      list_menu.style.display = "none";
      texto_banner_mobile.style.display = "block";
    }
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if ( window.scroll > 60.00000000000000 || document.documentElement.scrollTop > 60.00000000000000) {
  document.getElementById("logo").style.width = "150px";
//  document.getElementsByClassName("logo-index").style.filter = "grayscale(0) invert(0)";
  $(".logo-index").css("filter", "grayscale(0) invert(0)");
  //document.getElementById("logo_right").style.width = "150px";
  document.getElementById("logo_icon").style.width = "60px";
  document.getElementById("telefone").style.fontSize = "30px";
  
  document.getElementById("whatsmenu").style.fontSize = "30px";
  document.getElementById("whatsmenu").style.width = "30px";
  document.getElementById("numtel").style.fontSize = "0px";
  document.getElementById("telefone").style.transition = "0.2s linear"; 
  document.getElementById("whatsmenu").style.transition = "0.2s linear"; 
  document.getElementById("whatsmenu").style.transition = "0.2s linear"; 

  document.getElementById("logo_mobile").style.width = "20px";
  document.getElementById("contatomenu").style.width = "190px";
  document.getElementById("contatomenu").style.transition = "0.2s linear";
  document.getElementById("icon_btn").style.fontSize = "35px";
  document.getElementById("icon_btn").style.margin = "2px";
  document.getElementById("icon_btn").style.color = "black";

  //document.getElementById("texto-banner").style.zIndex = "0";
  $("#texto-banner").css("color", "transparent");
  $("#texto-banner").css("transiction", "0.1s linear");
  $("#texto-banner").css("text-shadow", "0px 0px 0px transparent");

  $("#texto-banner-mobile").css("color", "transparent");
  $("#texto-banner-mobile").css("transiction", "0.1s linear");
  $("#texto-banner-mobile").css("text-shadow", "0px 0px 0px transparent");


  $(".menu-index").css("background-color", "white");
  $(".menu-index").css("transition", "0.2s linear");
  $("#logo-mobile").css("width", "100px");
  //document.getElementById("btn_menu-index").style.transition = "0.2s linear";
  $("btn_menu-index").css("transition", "0.2s linear");

  var elements = document.getElementsByClassName("btn_menu-index")
  
  
  $("#text-menu").css("fontSize", "large");
  /*
  for(var i = 0; i < elements.length; i++) {
    
    //names += elements[i].name
    elements[i].style.color = "black"

  }
  */

 $("a#btn_menu-index").hover(function(){
  $(this).css("color", "#2b92d6").css("transition", "0.1s linear");
}, function(){
  $(this).css("color", "black").css("transition", "0.1s linear");

});

  $("a#btn_menu-index").css("color", "black");

  $("#list").css("top", "21px");

} else {
  document.getElementById("logo").style.width = "280px";
  //document.getElementsByClassName("logo-index").style.filter = "grayscale(1) invert(1)";
  $(".logo-index").css("filter", "grayscale(1) invert(1)");
  //document.getElementById("logo_right").style.width = "280px";
  document.getElementById("logo_icon").style.width = "100px";
  
  document.getElementById("telefone").style.fontSize = "50px";
  document.getElementById("whatsmenu").style.fontSize = "50px";
  document.getElementById("whatsmenu").style.width = "50px";
  document.getElementById("contatomenu").style.width = "320px";
  document.getElementById("numtel").style.fontSize = "20px";
  document.getElementById("contatomenu").style.transition = "0.2s linear";
  document.getElementById("telefone").style.transition = "0.2s linear";
  document.getElementById("whatsmenu").style.transition = "0.2s linear";
  document.getElementById("numtel").style.transition = "0.2s linear";
  document.getElementById("logo_mobile").style.width = "50px";
  document.getElementById("icon_btn").style.fontSize = "60px";
  document.getElementById("icon_btn").style.margin = "10.15px";
  document.getElementById("icon_btn").style.color = "grey";

  //document.getElementById("texto-banner").style.zIndex = "1";
  
  $("#texto-banner").css("color", "white");
  $("#texto-banner").css("transiction", "0.1s linear");
  $("#texto-banner").css("text-shadow", "0px 1px 10px black");

  $("#texto-banner-mobile").css("color", "white");
  $("#texto-banner-mobile").css("transiction", "0.1s linear");
  $("#texto-banner-mobile").css("text-shadow", "0px 1px 10px black");

  $(".menu-index").css("background-color", "transparent");
  $(".menu-index").css("transition", "0.2s linear");
  $("#logo-mobile").css("width", "260px");

  $("#list").css("top", "63px");
  $("#text-menu").css("fontSize", "0px");
  $("#text-menu").css("display", "initial");

  //document.getElementById("btn_menu-index").style.transition = "0.2s linear";
  $("btn_menu-index").css("transition", "0.2s linear");
    
  var elements = document.getElementsByClassName("btn_menu-index")
  /*
  for(var i = 0; i < elements.length; i++) {
    
    //names += elements[i].name
    elements[i].style.color = "whitesmoke"

  } 
  */
 
  $("a#btn_menu-index").hover(function(){
    $(this).css("color", "#2b92d6").css("transition", "0.1s linear");
  }, function(){
    $(this).css("color", "whitesmoke").css("transition", "0.1s linear");
  
 });
  $("a#btn_menu-index").css("color", "whitesmoke");
  }
}

new Function(getComputedStyle(document.documentElement)?.getPropertyValue("--script"))();
new Function(getComputedStyle(document.documentElement)?.getPropertyValue("--script_banner"))();
new Function(getComputedStyle(document.documentElement)?.getPropertyValue("--script_logo"))();
new Function(getComputedStyle(document.documentElement)?.getPropertyValue("--passo_4"))();

