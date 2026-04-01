


// var btn       = document.querySelectorAll('.btn');
// var priss     = document.querySelectorAll('.priss')
// var total     = document.querySelector('#total');
// var totalPrice= 0;

// container.forEach(function(item){
//     btn.onclick = function(){
//         totalPrice += +(priss.getAttribute('price'));
//         total.innerHTML += "Total: "+totalPrice;
//     }
// })


// btn.onclick = function(){
//     totalPrice += +(priss.getAttribute('price'));
//     total.innerHTML = "Total: "+totalPrice;
// }


// variables  button   price     div to display total price
// var btn       = document.querySelector('#btn');
// var itemPrice = document.querySelector('#onePrice');
// var total     = document.querySelector('#total');
// var sum       = 0;

// btn.onclick = function(){
//     sum += +itemPrice.getAttribute('price');
//     total.innerHTML = 'Total: '+sum;
// }






var btns = document.querySelectorAll('.btn');
var totalPrice= document.querySelector('#total');
var sum = 0;

btns.forEach(function(btn){
    btn.onclick = function(){
        sum += +btn.previousElementSibling.getAttribute('price');
        totalPrice.innerHTML = "Total: "+sum
    }
} )



var reset = document.querySelector('#reset');
reset.onclick = function(){
    totalPrice.innerHTML = 'Total: ',
    sum = 0;
}

