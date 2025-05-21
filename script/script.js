var boss1 = document.getElementById('js-boss');
var logo = document.getElementById('js-logo');
var video = document.getElementById('bg-video');
// boss1.onload = function() {

//     console.log("ohioh");
// };
// boss1.onerror = function() {
//     console.log("image failed to load.");
//   };

$(boss1).ready(function () {
    $("#bosses-img").addClass("animation");
    $("#player-bg-img").addClass("animation");
    $("#logo-bg-img").addClass("animation");
    $("#bg-video").addClass("animation");
    checkSize();
    bossHeight();
    hide();
});

window.onload = function () {
    checkSize();
    bossHeight();
    hide();
  };

var maxChartWidth = 1000;

function checkSize(){
    const windowWidth = window.innerWidth;
    if (windowWidth < maxChartWidth) { slimMode(); }
    if (windowWidth > maxChartWidth) { bossHeight(); }
}
function doSomething(){
    // elem.style.width = window.innerWidth + "px";
}
function doSomething2(){
    // elem.style.width = 960 + "px";
}
   window.addEventListener("resize", (e) => {
    checkSize();
    console.log("HIIIII");
  });

function bossHeight(){
    boss1.style.height = window.innerHeight + "px";
    video.style.height = window.innerHeight + "px";
    logo.style.height = window.innerHeight + "px";
}
function slimMode(){
  video.style.height = "100vh";
  // video.style.position = "fixed"
    logo.style.height = window.innerHeight + "auto";
}
function hide(){
    video.removeAttribute( 'controls' );
 }
video.onended = function () {
    this.load();
    this.play();
  };

  
  //smooth scrolling
//   $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });

function openPage(pageUrl){
    window.open('https://' + pageUrl);
  }