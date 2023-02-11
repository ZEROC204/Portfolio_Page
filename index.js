const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-100px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (entry.isIntersecting) {
      document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    } else {
      document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

header.addEventListener('click', function(event) {
  if (event.target.tagName === '
  A') {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});
