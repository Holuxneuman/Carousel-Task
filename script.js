
// Assign all needed variables
const list = document.querySelector('.carousel-list');
const slides = Array.from(list.children);
const nextBtn = document.querySelector('button.right');
const prevBtn = document.querySelector('button.left');
// const dotsNav = document.querySelector('.carousel-nav');
// const dots = Array.from(dotsNav.children);
let count = 0;

const slideWidth = slides[0].getBoundingClientRect().width;

//Step 1: Arrange Slides side by side
const setslidePosition = (slide, index) => { 
    slide.style.left = slideWidth * index + 'px';
}

for (let i = 0; i < slides.length; i++) {
        setslidePosition((slides[i]), i);
}

//step 2(a): when I click right, move slides to the next
nextBtn.addEventListener('click', e => {
   count++;
   
   if (count > slides.length - 1) 
    count = 0;
    list.style.transform = `translateX(${-count * slideWidth}px)`;  
})

//step 2(b): when I click left, move slides to the previous
prevBtn.addEventListener('click', e => {
    count--;
    
    if (count < 0) 
        count = slides.length-1;
    list.style.transform = `translateX(${-count * slideWidth}px)`;
})
