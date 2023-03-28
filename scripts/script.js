function openPopup() {
   const button1 = document.getElementById("getCard");
   button1.classList.toggle("show"); 
   const blurOn = document.getElementById("body");
   blurOn.style.filter = "blur(4px)";
}
function closePopup() {
   const button2 = document.getElementById("getCard");
   button2.classList.toggle("hide");
   const blurOff = document.getElementById("body");
   blurOff.style.filter = "blur(0px)";
}