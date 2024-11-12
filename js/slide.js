import { header } from "./header.js";
header();

const slideData = [
    {
        slideImg: 'https://picsum.photos/200',
        slideH2: 'Slide 1',
        slideP: 'This is the first slide.',
    },
    {
        slideImg: 'https://picsum.photos/201',
        slideH2: 'Slide 2',
        slideP: 'This is the second slide.',
    },
    {
        slideImg: 'https://picsum.photos/202',
        slideH2: 'Slide 3',
        slideP: 'This is the third slide.',
    },
];

const slideHTML = slide(slideData);
document.querySelector('.slideContent').innerHTML = slideHTML;
const prevDom = document.getElementById('prev');
const nextDom = document.getElementById('next');

function slide(slideData) {
    const slidesHTML = slideData.map((item, index) => `
        <div class="slideContainer ${index === 0 ? 'active' : ''}">
            <div class="slideInfo">
                <img src="${item.slideImg}" alt="Slide Image">
                <div class="slideText">
                    <h2>${item.slideH2}</h2>
                    <p>${item.slideP}</p>
                </div>
            </div>
            <div>${index + 1} / ${slideData.length}</div>
            <div class="dotContainer">
                ${slideData.map((_, dotIndex) =>
        `       <span class="dot ${dotIndex === index ? 'activeDot' : ''}" data-index="${dotIndex}"></span>`).join('')}
            </div>
        </div>
    `).join('');

    return slidesHTML;
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slideContainer');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        if (i === index) {
            slides[i].classList.add('active');
        } else {
            slides[i].classList.remove('active');
        }
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prevDom.addEventListener('click', prevSlide)
nextDom.addEventListener('click', nextSlide)

const dots = document.querySelectorAll('.dot');
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (event) => {
        currentIndex = parseInt(event.target.getAttribute('data-index'));
        showSlide(currentIndex);
    });
}