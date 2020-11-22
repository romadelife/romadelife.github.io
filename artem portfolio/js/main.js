// Бургер для мобильного
var burger = document.getElementById('burger');
var stick = document.getElementById('stick');

let menuOpen = false;
burger.onclick = function(){
	if (!menuOpen){
		stick.classList.add('open');
		menuOpen = true;
	} else{
		stick.classList.remove('open');
		menuOpen = false;
	}
}

window.onscroll = function(){

	var header = document.querySelector('.header');

	if(window.pageYOffset > 736){
		header.classList.add('header_fixed');
	} else{
		header.classList.remove('header_fixed');
	}
}

$(document).ready(function(){
  $('.best-slider').slick({
  	infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 5000,
  		speed: 500,
		dots: true,
  });
});  

