document.querySelector
const hamburgerButton = document.querySelector('.hamburger_button');
const headerNav = document.querySelector('.header__nav');

hamburgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('is-active');
    hamburgerButton.classList.toggle('is-active');
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 600) {
    headerNav.classList.remove('is-active');
    hamburgerButton.classList.remove('is-active');
  }
});
function validateForm() {
    const fullname = document.getElementById('fullname').value;
    if (!/^.+ .+$/.test(fullname)) {
        alert('氏名は半角スペースを含み、その前後に1文字以上の入力が必要です。');
        return false;
    }
    return true;
}
const galleryModal = document.querySelectorAll('.works-gallery__modal');
const galleryModalOpen = document.querySelectorAll('.works-gallery__figure');
galleryModalOpen.forEach((modal, index) => {
    modal.addEventListener('click', () => {
        document.getElementById('gallery' + (index + 1)).showModal()
    });
});
galleryModal.forEach(modal => {
    modal.addEventListener('click', () => {
        modal.close();
    })
})

/*const options = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0
};

const observer =new IntersectionObserver(fadeIn, options);
function fadeIn(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadein');
        }
    });
}
document.querySelectorAll('.box').forEach(box => {
    observer.observe(box);
});*/
gsap.utils.toArray('.box').forEach(box => {
    gsap.from(box, {
        x: 128,
        opacity: 0,
        duration: 1.5,
        ease: "back.out",
        scrollTrigger: {
            trigger: box,
        }
    })
});


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 1000,

    /*scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },*/

});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".works_0", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
        trigger: ".section--parallax",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }

});
const scrollbar = document.querySelector('.scroll-line');
let height = 0;

/*function animate() {
    height += direction;
    
    if(height >= 100 || height <= 0) {
        direction *= -1;        
    }
    scrollbar.style.height = height + "px";
    requestAnimationFrame(animate);
}
animate();*/

gsap.from(".scroll-line", {
    scaleY: 0,
    transformOrigin: "top",
    duration: 1.5,
    ease: "power2.out",
    repeat: -1,
    repeatDelay: 0.5
});