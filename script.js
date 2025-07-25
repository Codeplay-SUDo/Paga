const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });

  // // Mobile menu toggle
  // const hamburger = document.querySelector('.hamburger');
  // const navMenu = document.querySelector('nav ul');
  // hamburger.addEventListener('click', () => {
  //   navMenu.classList.toggle('active');
  //   hamburger.classList.toggle('active');
  // });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });