var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function coverAndRevealPillars() {
      const currentSlide = slides[currentIndex];
      const pillars = currentSlide.querySelectorAll('.pillar');

      // Reset pillars to fully cover the slide
      gsap.set(pillars, { scaleX: 1 });

      // Animate pillars to reveal the slide
      gsap.to(pillars, {
        scaleX: 0,
        duration: 2,
        stagger: 0.2,
        ease: 'power2.inOut',
        onComplete: () => {
          // Show next slide after a delay
          setTimeout(showNextSlide, 3000);
        },
      });
    }

    function showNextSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');

      coverAndRevealPillars();
    }

    // Trigger animation on the first slide
    coverAndRevealPillars();

    document.querySelectorAll(".image-card").forEach((card) => {
      const mouseCircle = card.querySelector(".mouse-circle");
    
      // Show the circle when mouse enters the card
      card.addEventListener("mouseenter", () => {
        mouseCircle.style.opacity = 1;
      });
    
      // Hide the circle when mouse leaves the card
      card.addEventListener("mouseleave", () => {
        mouseCircle.style.opacity = 0;
      });
    
      // Move the circle with the mouse
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        mouseCircle.style.transform = `translate(${x}px, ${y}px)`;
      });
    });


    // Select all blog cards
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach((card) => {
  const mouseCircle = card.querySelector('.mouse-circle');

  // Show the circle and track the mouse movement
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseCircle.style.opacity = '1'; // Show the circle
    mouseCircle.style.transform = `translate(${x}px, ${y}px)`; // Move the circle
  });

  // Hide the circle when the mouse leaves the card
  card.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0'; // Hide the circle
  });
});
    

function toggleMenu() {
  const menu = document.querySelector('.mobile-navbar');
  if (menu.style.display !== 'flex') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}