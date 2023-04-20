Ext.define('MyAppName.view.main.CustomizationController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.CustomizationController',

// const overlay = document.getElementById("product-shape");

// // Click on a color

// var el = document.getElementsByClassName("color");
// for (var i = 0; i < el.length; i++) {
//   el[i].onclick = changeColor;
// }

colorChange: function (e) {
    debugger;
    const overlay = document.getElementById("product-shape");
//   // get the hex color
//   var el = document.getElementsByClassName("color");
// for (var i = 0; i < el.length; i++) {
//  // el[i].onclick = changeColor;
//   var hex = el[i].getAttribute('data-hex');
//   // set the hex color
 
// }
var hex = e.target.getAttribute('data-hex');
overlay.style.fill = hex;
  
}
});