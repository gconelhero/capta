function menuFunc() {
    var list_menu = document.getElementById("list_menu");
      if (list_menu.style.display === "block") {
        list_menu.style.display = "none";
        
      } else {
        list_menu.style.display = "block";
  
      }
  }

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if ( window.scroll > 80.00000000000000 || document.documentElement.scrollTop > 80.00000000000000) {
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo_right").style.width = "150px";
    document.getElementById("logo_icon").style.width = "60px";
    //document.getElementById("endereco_row").style.marginTop = "9px";
    //document.getElementById("endereco_row").style.marginBottom = "0px";
    //document.getElementById("endereco_row").style.transition = "0.2s linear"; 
    document.getElementById("logo_mobile").style.width = "20px";
    document.getElementById("icon_btn").style.fontSize = "35px";
    document.getElementById("icon_btn").style.margin = "2px";
} else {
    document.getElementById("logo").style.width = "280px";
    document.getElementById("logo_right").style.width = "280px";
    document.getElementById("logo_icon").style.width = "100px";
    //document.getElementById("endereco_row").style.marginTop = "22.825px";
    //document.getElementById("endereco_row").style.transition = "0.2s linear";
    document.getElementById("logo_mobile").style.width = "50px";
    document.getElementById("icon_btn").style.fontSize = "58px";
    document.getElementById("icon_btn").style.margin = "10.15px";
    
} 
}