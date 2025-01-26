// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Dynamic Greeting Based on Time of Day
  function displayGreeting() {
    const greetingElement = document.createElement('p');
    const currentHour = new Date().getHours();
    let greetingMessage;
  
    if (currentHour < 12) {
      greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
      greetingMessage = 'Good Afternoon!';
    } else {
      greetingMessage = 'Good Evening!';
    }
  
    greetingElement.textContent = greetingMessage;
    greetingElement.className = 'text-gray-700 text-lg mb-4';
    document.querySelector('#about').prepend(greetingElement);
  }
  displayGreeting();
  
  // Highlight Active Navigation Link on Scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('text-white', 'font-bold');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('text-white', 'font-bold');
      }
    });
  });
  