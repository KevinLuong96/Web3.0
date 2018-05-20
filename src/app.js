$(document).ready(function () {
   var text = "hello!";
   counter = 0;
   var addText = setInterval(function() {
       $(".intro").html(text.substring(0, counter+1));
       counter++;
       if(counter == text.length) {
           clearInterval(addText)
       }
   }, 250);

   setInterval(function () {
       $(".blink").toggle()
   },500);
});

