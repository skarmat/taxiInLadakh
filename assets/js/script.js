// Modern JavaScript for Ladakh Taxi Website

// DOM Elements
const navbar = document.getElementById("navbar");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll('a[href^="#"]');

// Mobile Navigation Toggle
mobileMenuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const icon = mobileMenuBtn.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    icon.className = "fas fa-bars text-gray-700 text-xl";
  } else {
    icon.className = "fas fa-times text-gray-700 text-xl";
  }
});

// Close mobile menu when clicking on links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
      const icon = mobileMenuBtn.querySelector("i");
      icon.className = "fas fa-bars text-gray-700 text-xl";
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu &&
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenuBtn.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    mobileMenu.classList.add("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    icon.className = "fas fa-bars text-gray-700 text-xl";
  }
});

// Smooth Scrolling for Navigation Links
navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add/remove background blur based on scroll
  if (currentScroll > 50) {
    navbar.classList.add("bg-white/95", "backdrop-blur-md", "shadow-lg");
  } else {
    navbar.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-lg");
  }

  lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".card, .service-card, .destination-card"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    observer.observe(el);
  });
});

// Form Submission with Enhanced UX
const contactForm = document.querySelector('form[action*="formsubmit.co"]');
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual submission)
    setTimeout(() => {
      // Reset form
      this.reset();

      // Show success message
      submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
      submitBtn.classList.remove("bg-primary-600", "hover:bg-primary-700");
      submitBtn.classList.add("bg-green-600", "hover:bg-green-700");

      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("bg-green-600", "hover:bg-green-700");
        submitBtn.classList.add("bg-primary-600", "hover:bg-primary-700");
      }, 3000);
    }, 2000);
  });
}

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector("#home");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Lazy Loading for Images
const images = document.querySelectorAll('img[src*="images/"]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add("animate-fade-in");
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => {
  imageObserver.observe(img);
});

// Enhanced Tooltip Functionality
const tooltips = document.querySelectorAll("[data-tooltip]");
tooltips.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    const tooltip = element.querySelector(".tooltip");
    if (tooltip) {
      tooltip.classList.remove("opacity-0");
      tooltip.classList.add("opacity-100");
    }
  });

  element.addEventListener("mouseleave", () => {
    const tooltip = element.querySelector(".tooltip");
    if (tooltip) {
      tooltip.classList.remove("opacity-100");
      tooltip.classList.add("opacity-0");
    }
  });
});

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Performance Optimization: Debounced scroll handler
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
  // Scroll-based animations and effects
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Console welcome message
console.log(
  "%c🚗 Welcome to Ladakh Taxi Services!",
  "color: #3b82f6; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cReady to explore the Land of High Passes?",
  "color: #64748b; font-size: 14px;"
);
