const leftArrow = document.getElementsByClassName('arrow left')[0];
const rightArrow = document.getElementsByClassName('arrow right')[0];

const slides = document.getElementsByClassName('slide'); 
const dots = document.getElementsByClassName('dots');
const dot = document.getElementsByClassName('dot');
let index = 0;

function showSlide(i){
    console.log(i)
   for(let j = 0; j < slides.length;j++){
     slides[j].classList.remove('active')
   }
   slides[i].classList.add('active');
   index = i;
//    dots[index].checked = true;
}
leftArrow.addEventListener('click', () => {
    let currentIndex = index === 0 ? slides.length - 1 : index -1;
    showSlide(currentIndex);
})
rightArrow.addEventListener('click', () => {
    let currentIndex = index === slides.length -1 ? 0 : index +1;
    showSlide(currentIndex);
})