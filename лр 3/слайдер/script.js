$(document).ready(function() {
    const slider = $('#slider');
    const slides = slider.find('.slide');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.fadeOut();
      slides.eq(index).fadeIn();
      currentIndex = index;
    }
  
    function nextSlide() {
      showSlide((currentIndex + 1) % slides.length);
    }
  
    function prevSlide() {
      showSlide((currentIndex - 1 + slides.length) % slides.length);
    }
  
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
  
    setInterval(nextSlide, 5000);
  });