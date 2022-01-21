// Slider
let slider = document.querySelector('#slider');

if (slider){
    let slides = slider.querySelectorAll('.slide'); // Selectionner tout ce qui ont la class slide
    let nbSlide = slides.length; // Nombre de slide
    let showSlide = 0;
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];
        if(i === 0){
            slide.style.display = 'block';
        } else{
            slide.style.display = 'none';
        }
    }
    let prevArrow = slider.querySelector('.prev');
    let nextArrow = slider.querySelector('.next');
    prevArrow.addEventListener('click', function(){
        slides[showSlide].style.display = 'none';
        showSlide -= 1;
        if (showSlide < 0){
            showSlide = nbSlide - 1;
        }
        slides[showSlide].style.display = 'block';
    });
    nextArrow.addEventListener('click', function(){
        slides[showSlide].style.display = 'none';
        showSlide += 1;
        if (showSlide >= nbSlide){
            showSlide = 0;
        }
        slides[showSlide].style.display = 'block';
    });
}
