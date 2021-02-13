var dollar = document.querySelector('.dollar');
var views = document.querySelector('.views');
var slider = document.querySelector('.slider');
const toggle = document.querySelector("input[type=checkbox]");
let priceAmount = 16;

toggle.addEventListener("change", function() {
  dollar.innerHTML = "$" + calculatePrice(priceAmount);
}) 

slider.onchange = function(event){
  var views = document.querySelector('.views');
  var val = slider.value;

 if (val == 1) {
    views.innerHTML = '10K';
    priceAmount = 8;
    dollar.innerHTML = '$8';
    dollar.innerHTML = "$" + calculatePrice(priceAmount);

  }
   
else if (val == 2) {
  views.innerHTML = '50K';
  priceAmount = 12;
  dollar.innerHTML = '$12';
  dollar.innerHTML = "$" + calculatePrice(priceAmount);
}

else if (val == 3) {
  views.innerHTML = '100K';
  priceAmount = 16;
  dollar.innerHTML = '$16';
  dollar.innerHTML = "$" + calculatePrice(priceAmount);
}
else if (val == 4) {
  views.innerHTML = '500K';
  dollar.innerHTML = '$24';
  priceAmount = 24;
  dollar.innerHTML = "$" + calculatePrice(priceAmount);
}
else {
  views.innerHTML = '1M';
  dollar.innerHTML = '$36';
  priceAmount = 36;
  dollar.innerHTML = "$" + calculatePrice(priceAmount);
}
}

function calculatePrice(amount) {
   if (toggle.checked) {
    amount -= (amount / 100 * 25);
   }
   
return amount.toFixed(2);
}


slider.addEventListener('mousemove', function () {
  var x = (this.value - this.min) * 100 / (this.max - this.min);
  var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(224, 65%, 95%)' + x + '%, hsl(224, 65%, 95%) 100%)';
  slider.style.background = color;
})