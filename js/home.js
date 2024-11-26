// function show(){
//     console.log("did");
//     let h = document.querySelector('.btn_content');
//     h.style.cssText = `display:block;`
// }
// let click = document.querySelector(".field_btn");
// click.onclick = show;

// let show = document.querySelectorAll(".btn_content");
// console.log(show);

// let button = document.querySelectorAll(".button");
// console.log(button);

// let button1 = document.querySelector(".button1"); 
// button1.onclick =function(){
//                  show[0].style.cssText = `display:block;`
//                 console.log("works");
//   }
// let button2 = document.querySelector(".button2"); 
// button2.onclick =function(){
//         if(1===show.length-5){
//                 show[1].style.cssText = `display:block;`
//                 console.log("works")
//         }else{
//                 show[1].style.cssText = `display:none;`
//                 console.log("no") 

//         }
// }


// let button2 = document.querySelector(".button2");
// button[1].onclick =function(){
//     show[1].style.cssText = `display:block;`
//  }
// let button3 = document.querySelector(".button3");
// button[2].onclick =function(){
//     show[2].style.cssText = `display:block;`
//  }
//  let button4 = document.querySelector(".button4");
// button[3].onclick =function(){
//     show[3].style.cssText = `display:block;`
//  }
//  let button5 = document.querySelector(".button5");
// button[4].onclick =function(){
//     show[4].style.cssText = `display:block;`
//  }
//  let button6 = document.querySelector(".button6");
// button[5].onclick =function(){
//     show[5].style.cssText = `display:block;`
//  }

// console.log(show[0])



// for(let i=0; i<button.length; i++){
//         button[i].onclick =  function(){
//                  if(show[i]){
//                     show[i].style.cssText = `display:block;`
//                  }
//                  else
//                 {
//                     show[i].style.cssText = `display:none;`
//                  }
//                 //  console.log(show[i])


//         }
//     console.log("ok")
// }
// button.onclick = view();

// ----------------it works--------------------

let show = document.querySelectorAll(".btn_content");
console.log(show);

let button = document.querySelectorAll(".button");
console.log(button);

 for(let i=0; i<show.length; i++){
         button[i].onclick =  function(){
            show[i].style.cssText = `display:block;`   
          }
   }
//  ----------------------------------------------------------------

// let btn1 = document.querySelector(".btn1");
// console.log(btn1);
// btn1.onclick = function () {
//         show[0].style.cssText = `display:block;`
//         show[5].remove(".btn6")

// }

// let btn2 = document.querySelector(".btn2");
// console.log(btn2);
// btn2.onclick = function () {
//         show[0].remove(".btn1")
//         show[1].style.cssText = `display:block;`
// }

// let btn3 = document.querySelector(".btn3");
// console.log(btn3);
// btn3.onclick = function () {
//         show[1].remove(".btn2")
//         show[2].style.cssText = `display:block;`
// }

// let btn4 = document.querySelector(".btn4");
// console.log(btn3);
// btn4.onclick = function () {
//         show[2].remove(".btn3")
//         show[3].style.cssText = `display:block;`
// }
// let btn5 = document.querySelector(".btn5");
// console.log(btn3);
// btn5.onclick = function () {
//         show[3].remove(".btn4")
//         show[4].style.cssText = `display:block;`
// }
// let btn6 = document.querySelector(".btn6");
// console.log(btn3);
// btn6.onclick = function () {
//         show[4].remove(".btn5")
//         show[5].style.cssText = `display:block;`
//         show[0].add(".btn1")

// }

