const leftArrow = document.getElementsByClassName('arrow left')[0];
const rightArrow = document.getElementsByClassName('arrow right')[0];

const slides = document.getElementsByClassName('slide'); 
const dots = document.getElementsByClassName('dots')[0];
const dot = document.getElementsByClassName('dot');
let index = 0;

function showSlide(i){
    console.log(i)
   for(let j = 0; j < slides.length;j++){
     slides[j].classList.remove('active')
   }
   slides[i].classList.add('active');
   index = i;
   dot[index].checked = true;
}
leftArrow.addEventListener('click', () => {
    let currentIndex = index === 0 ? slides.length - 1 : index -1;
    showSlide(currentIndex);
})
rightArrow.addEventListener('click', () => {
    let currentIndex = index === slides.length -1 ? 0 : index +1;
    showSlide(currentIndex);
})

dots.addEventListener('click', (e) => {
    for(let i = 0; i < dot.length; i++) {
        if(dot[i] === e.target){
            showSlide(i);
            break;
        }
    }
})
 //тупо я не помню
// setInterval( () => {
//     console.log(123)
// }, 3000)


// Код для переключения автоматом.
//  setInterval( () => {
//     let currentIndex = index === slides.length -1 ? 0 : index +1;
//    showSlide(currentIndex);
//  }, 3000) // 3000 это милисекунды.Надо запомнить.