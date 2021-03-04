console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $(".abc").fadeIn(1000);
    $("#section1").fadeIn(3000);
});


$(".grow").mouseover(function(){
    $(this).css("color","#3D8EBC");
}).mouseout(function(){
    $(this).css("color","#94989C");
});


  $(".image-container").mouseover(function() {    
    $(this).attr("src", $(this).attr("src").replace("Logo.png", "home.png"));
}).mouseout(function() {
    $(this).attr("src", $(this).attr("src").replace("home.png", "Logo.png"));
});



// Intersection Observer (Lazy Loading of My Skills & My Works)
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) 
    {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });