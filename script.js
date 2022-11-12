
// Define all needed variables
const list = document.querySelector('.carousel-list');
const slides = Array.from(list.children);
const nextBtn = document.querySelector('button.right');
const prevBtn = document.querySelector('button.left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
let count = 0;

// const slideWidth = slides[0].getBoundingClientRect().width;

const moveSlide = (list, slides, currentSlide, targetSlide) => {
  
    // if (count === 5) {
    //     count = 0
    //     currentSlide.style.opacity = 1;
    //     targetSlide = slides[count]
    //     // console.log(targetSlide)
    //     targetSlide.classList.add('current-slide');
    //     targetSlide.style.display = 'none';
    //     let newSlide = targetSlide.nextElementSibling;
    // }
    
    // if (count >= 6) {
    // console.log(targetSlide);
    // }

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


const moveDots = (dots, dotsNav, currentDot, targetDot) => {

    
    
    currentDot.classList.remove('current-dot');
    targetDot.classList.add('current-dot');
   

}








//step 2(a): when I click right, move slides to the next
nextBtn.addEventListener('click', e => {
    let currentSlide = list.querySelector('.current-slide');
   let nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
   count++;

    moveSlide(list, slides, currentSlide, nextSlide);
    moveDots(dots, dotsNav, currentDot, nextDot);
})

//step 2(b): when I click left, move slides to the previous
prevBtn.addEventListener('click', e => {
    let currentSlide = list.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    count--

    moveSlide(list, slides, currentSlide, prevSlide);
    moveDots(dots, dotsNav, currentDot, prevDot);
})

// step 3 when I click the nav dots, move to respective slide
dotsNav.addEventListener('click', e => {
   const targetDot = e.target.closest('button');

   if (!targetDot) return;

    let currentSlide = list.querySelector('.current-slide');
    let currentDot = dotsNav.querySelector('.current-dot');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

     moveSlide(list, slides, currentSlide, targetSlide);
     moveDots(dots, dotsNav, currentDot, targetDot);
})



