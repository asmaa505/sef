


// var multi = function( num1 , num2 ){
//     console.log( num1 * num2 );
// }

// multi( 5 , 6 );




// var x = 0;

// document.getElementById("btn").onmousemove = function(){
//     document.getElementById("div1").innerHTML = x++
// }





// var input1 = document.getElementById("input1");

// input1.onkeyup = function(){
//     console.log("asmaa");
// }






// for(var i=0 ; i <= 5 ; i++){
//     console.log(i);
// } 




// var num1 = +prompt("enter the first number...");
// var num2 = +prompt("enter the second number...");

// for(var i=num1+num2 ; i <= num1*num2 ; i+=2){
//     console.log(i)
// }




var studNum = +prompt("enter number of students...");
var arr = [];

for( var i=0 ; i < studNum ; i++ ){
    var studName = prompt(`enter the name of student ${i+1}`);

    arr.push(studName)

}

console.log(arr);