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

// let show = document.querySelectorAll(".btn_content");
// console.log(show);

// let button = document.querySelectorAll(".button");
// console.log(button);

//  for(let i=0; i<show.length; i++){
//         //  button[i].onclick =  function(){
//             show[i].style.cssText = `display:block;`   
//           }
//     // }
// --------------------onclick------------------------------------

function menu(){
 let menuItem = document.querySelectorAll(".home");
 for(let list of menuItem){
    list.style.cssText = `display:block`;
 }
 }
 


// ----------------j query-----------------------------------------

$(document).ready(function(){
  $('.field_btn_collection .tab').on('click', function(){
    // get the data attribute
    var tab_id = $(this).attr('data-tab');
    // remove the default classes
    $('.field_btn_collection .tab').removeClass('current');   
    $(this).addClass('current');   
      
    $('.tab-content').removeClass('current');    
    // add new classes on mouse click
          // "tab-2"
    $('#'+tab_id).addClass('current');
  });
});

$(document).ready(function(){
  $('.allcategories_s2_2 li').on('click',function(){
    $('.allcategories_s2_2 li').removeClass('active')
    $(this).addClass('active');
    let tablet_check = $(this).attr('data-tab');
    console.log(tablet_check);
    $('.allcategories_s2_tab1').removeClass('tablet_show');
    $('#' + tablet_check).addClass('tablet_show');  
    // second tablet list 
    $('.new li').on('click',function(){
    let tablet_ch2 = $(this).attr('data-tab1'); 
    console.log(tablet_ch2);
    $('.allcategories_s2_tab1').removeClass('tablet_show');  
    $('#' + tablet_ch2).addClass('tablet_show');  
    })
  })
})
