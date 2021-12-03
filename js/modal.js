/* MODAL */
function onClick(element) {
    modal = document.getElementById("myModal");
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
    modal.style.display = "block";
    console.log(element);
    modalImg.src = element.src;
    
  //  captionText.innerHTML = element.alt;
  
}

var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    pagination: {
el: '.swiper-pagination',
type: 'bullets',
    },
    autoplay: {
   delay: 5000,
    },
  });