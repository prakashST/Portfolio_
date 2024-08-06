/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
  
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

function myNavFunction() {
    var click = document.getElementsByClassName("nav_list");
    var clickbox = document.getElementById("myNavMenu");
    var clickBtn = document.getElementsByClassName("nav-menu-btn")[0]; // Assuming there's only one button

    // Loop through all elements with class "nav_list" and add click event listener
    for (var i = 0; i < click.length; i++) {
        click[i].addEventListener("click", function() {
            clickbox.className = "nav-menu"; // Hide the menu by resetting class name
        });
    }
}

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  
    } else {
  
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  
    }
  }
  
  
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText",{
    strings : ["Developer","Front-End Developer","React Developer","Video Editor"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })
  
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
  })
  
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
  
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  
  function scrollActive() {
  const scrollY = window.scrollY;
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
  
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  
    }  else {
  
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  
    }
  })
  }

//   contact form--------------------------
// 

const form = document.getElementById('form');
const result = document.getElementById('result');
const error = document.getElementById('error')

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
                result.style.display = "block";
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            error.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
        });
});

  
  window.addEventListener('scroll', scrollActive)
     
  