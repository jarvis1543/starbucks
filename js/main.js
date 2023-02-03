// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle( () => {
  if(window.scrollY > 500){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(document.querySelector('header .badges'), .5, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(document.querySelector('#to-top'), .2, {
      x: 0
    });
  }else{
    gsap.to(document.querySelector('header .badges'), .5, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(document.querySelector('#to-top'), .2, {
      x: 100
    });
  }
}, 300));

document.querySelectorAll('.visual .fade-in').forEach( (e,i) =>{
  gsap.to(e, 1, {
    opacity: 1,
    delay: (i+1) * .5
  })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.notice .promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

let isHidePromotion = false;
document.querySelector('.toggle-promotion').addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    document.querySelector('.promotion').classList.add('hide');
    document.querySelector('.toggle-promotion').style.transform = 'rotate(180deg)';
  }else{
    document.querySelector('.promotion').classList.remove('hide');
    document.querySelector('.toggle-promotion').style.transform = 'rotate(0deg)';
  }
});

function floatingObject(obj) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(obj, 1, {
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut,
    delay: random(1,4)
  })
}

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

document.querySelectorAll('.floating').forEach( e => {
  floatingObject(e);
});  

document.querySelectorAll('section.scroll-spy').forEach( e => {
  new ScrollMagic
    .Scene({
      triggerElement: e,
      triggerHook: .8
    })
    .setClassToggle(e, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

document.querySelector('#to-top').addEventListener('click', () => {
  gsap.to(window, .4, {
    scrollTo: 0
  });
});