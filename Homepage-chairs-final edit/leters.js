var i = 0;
var txt = 'Checkout benches, rocking chairs, and other niche/etc chairs with the gallery below! '; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("graphics").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}