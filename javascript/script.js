const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      if (
        entry.target.classList.contains('counter') &&
        !entry.target.classList.contains('started')
      ) {
        entry.target.classList.add('started');

        const target = +entry.target.getAttribute('data-target');
        let count = 0;

        const update = () => {
          const increment = target / 50;

          if (count < target) {
            count += increment;
            entry.target.innerText = Math.floor(count);
            requestAnimationFrame(update);
          } else {
            entry.target.innerText = target;
          }
        };

        update();
      }
    }

  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));