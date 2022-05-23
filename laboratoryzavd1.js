const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let slidertrack = document.querySelector('.slider-track');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider-container').offsetWidth;
let LineWidth = 0;
let widthArray = [0];
let offset = 0;
let step = 0;
let ostatok = 0;

for(let i = 0; i < slides.length; i++)
{
    widthArray.push(slides[i].offsetWidth);
    LineWidth += slides[1].offsetWidth;
}

slidertrack.style.width = LineWidth + 'px';
btnNext.addEventListener('click',() => {
    ostatok = LineWidth - sliderWidth - (offset + widthArray[step]);
    if(ostatok >= 0){
        offset = offset + widthArray[step];
        slidertrack.style.left = -offset+'px';
        step++;
    }
    else{
        slidertrack.style.left = -(LineWidth - sliderWidth) + 'px'
    }
})
btnPrev.addEventListener('click',() => {
    offset = offset + widthArray[step];
    slidertrack.style.left = offset+'px';
    step -= 1
})