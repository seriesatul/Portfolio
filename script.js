gsap.to("#grey",{
    height:0,
    duration:4,
    ease:Expo.easeInOut,
    scrollTrigger:"#grey"
})

gsap.from("#grey h1",{
    x:30,
    duration: 1,
    opacity: 0,
    stagger:0.2,
})
gsap.to("#grey h1",{
    delay:0.5,
    fontSize: 0,
    duration: 2,
    ease:Expo.easeInOut
})

gsap.to("#red",{
    height:0,
    duration: 2,
    delay:1.8,
    ease:Expo.easeInOut
})

function heading(){
    document.addEventListener("DOMContentLoaded", function(event) {
        animation_text_1("#text-anim");
      });
      
      function animation_text_1 (element){
        var newText = "";
        var theText = document.querySelector(element);
        for (i = 0; i < theText.innerText.length; i++) {
          newText += "<div>";
          if (theText.innerText[i] == " "){newText += "&nbsp;"}
          else {newText += theText.innerText[i];}
          newText += "</div>";
        }
        theText.innerHTML = newText;
        gsap.fromTo(element+" div", {
          opacity:0, 
          y:90
        }, {
          duration: 2, 
          delay:5,
          opacity:1, 
          y:0, 
          stagger: 0.1, 
          ease: "elastic(1.2, 0.5)",
          scrollTrigger: {
            trigger: element,
            start: "top 70%", // start when the top of the <h1> reaches 70% down from the top of the viewport
            toggleActions: "restart none none reverse"
          }
        });
      }

  }

heading();

function span(){
//for span animation

gsap.fromTo("#name",{
    opacity:0,
},{
    y:10,
    opacity:1,
    duration:2,
    delay:5
    

});
}

span();

function list(){
  gsap.fromTo("#navbar li",{
    opacity:0
  },
  {
    y:30,
    delay:3,
    opacity:1,
    stagger:0.5,
    duration:0.5,
    ease:"power1.out",
    scrollTrigger: "#navbar li"
  });
}

list();

gsap.from("#page2",{
  y:80,
  opacity:0,
  delay: 1,
  duration:1,
  scrollTrigger:"#page2"
})

gsap.from("#left",{
  x:-80,
  opacity:0,
  delay: 1,
  duration:1,
  scrollTrigger:"#left"
})

gsap.from("#right",{
  x:80,
  opacity:0,
  delay: 1,
  duration:1,
  scrollTrigger:"#right"
})

gsap.from(".reveal-text span",{
  opacity:0,
  stagger:0.2,
  duration:0.5,
  ease: Expo.easeInOut,
  scrollTrigger:"#page2"
})

gsap.from("#tagline",{
  x:-80,
  opacity:0,
  delay: 1,
  duration:1,
  scrollTrigger:"#page3"
})

gsap.from(".imgcontainer",{
  rotate: "15deg",
  opacity:0,
  delay:1,
  duration:1,
  scrollTrigger:"#page3"
})
gsap.from(".con",{
  x:90,
  opacity:0,
  duration:1,
  delay:2,
  scrollTrigger:"#Slab1"
})

gsap.from("#container1",{
  y:90,
  opacity:0,
  duration:1,
  delay:2,
  scrollTrigger:"#Slab1"
})

gsap.from("#container2",{
  y:90,
  opacity:0,
  duration:1,
  delay:2,
  scrollTrigger:"#Slab1"
})




gsap.from("#contactbox",{
  y:90,
  opacity:0,
  duration:1,
  delay:2,
  scrollTrigger:"#page5"
})









