function scrollToPosition(pixelPosition) {
  window.scrollTo({
      top: pixelPosition,
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

