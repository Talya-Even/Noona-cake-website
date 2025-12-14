function scrollToPosition(pixelPosition) {
  // Adjust scroll position for mobile devices
  const isMobile = window.innerWidth <= 768;
  const adjustedPosition = isMobile ? pixelPosition * 0.3 : pixelPosition;
  
  window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth' // גלילה חלקה
  });
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
        window.scrollTo({
            top: window.innerHeight + 200,
            behavior: 'smooth'
        });
    });
});

// הצגת הכפתור כאשר גוללים מטה
window.onscroll = function() {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// גלילה לראש הדף כאשר לוחצים על הכפתור
document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "972509583366"; // מספר טלפון עם קידומת בינלאומית
    var message = "היי 🌸\n\nהגעתי דרך האתר ורציתי להזמין עוגה / לשאול לגבי הזמנה 💕"; 
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
});

document.getElementById("heroButton").addEventListener("click", function() {
  event.preventDefault(); // מונע את התנהגות ברירת המחדל של הכפתור
  var phoneNumber = "972509583366"; // מספר טלפון עם קידומת בינלאומית
  var message = "היי 🌸\n\nהגעתי דרך האתר ורציתי להזמין עוגה / לשאול לגבי הזמנה 💕"; 
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank');
});

document.getElementById("orderButton").addEventListener("click", function(event) {
  event.preventDefault(); // מונע את התנהגות ברירת המחדל של הכפתור
  var phoneNumber = "972509583366"; // מספר טלפון עם קידומת בינלאומית
  var message = "היי 🌸\n\nהגעתי דרך האתר ורציתי להזמין עוגה / לשאול לגבי הזמנה 💕"; 
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank'); // פותח את הווצאפ בחלון חדש
});

document.getElementById("footerWhatsappButton").addEventListener("click", function(event) {
  event.preventDefault(); // מונע את התנהגות ברירת המחדל של הכפתור
  var phoneNumber = "972509583366"; // מספר טלפון עם קידומת בינלאומית
  var message = "היי 🌸\n\nהגעתי דרך האתר ורציתי להזמין עוגה / לשאול לגבי הזמנה 💕"; 
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank'); // פותח את הווצאפ בחלון חדש
});




var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay:6000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector(".navmanue");
    
    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            // Toggle between menu and close icon
            if (menuIcon.classList.contains("bx-menu")) {
                menuIcon.classList.remove("bx-menu");
                menuIcon.classList.add("bx-x");
            } else {
                menuIcon.classList.remove("bx-x");
                menuIcon.classList.add("bx-menu");
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
                if (menuIcon.classList.contains("bx-x")) {
                    menuIcon.classList.remove("bx-x");
                    menuIcon.classList.add("bx-menu");
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnIcon = menuIcon.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnIcon && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                if (menuIcon.classList.contains("bx-x")) {
                    menuIcon.classList.remove("bx-x");
                    menuIcon.classList.add("bx-menu");
                }
            }
        });
    }
});

