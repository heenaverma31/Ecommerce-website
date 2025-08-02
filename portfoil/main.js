
var typed = new Typed(".text", {
    strings: [" Graphic Designer", "Frontend Developer", "Web designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const toggleBtn = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });


//var typed= new typed(".text ",{
   // Strings: ["frontend developer ", "youtuber", "web developer" ],
    //typespeed: 100,
   // backspeed: 100,
   // backdelay: 100,
   // loop: true
//});//