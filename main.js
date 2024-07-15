
let elem1 = document.getElementById("inputPass");

let elem2 = document.getElementById("input1");

let elem3 = document.getElementById("input2");

let elem4 = document.getElementById("label");


elem2.addEventListener("click",function(){
    elem1.type = "text";
    elem2.style.display = "none";
    elem3.style.display = "inline";
    elem3.style.accentColor = "blue";
    elem4.innerHTML = "اخفي الرقم السري"
})
/*
 input type="" عاوز ال  elem2 لما هضغط علي 

password يتحول من 

text الي 

فيظهر الرقم السري 
*/

elem3.addEventListener("click",function(){
    elem1.type = "password";
    elem3.style.display = "none";
    elem2.style.display = "inline";
    elem2.style.accentColor = "white";
    elem4.innerHTML = "اظهر الرقم السري"
})

/*
 input type="" عاوز ال  elem3 لما هضغط علي 

text يتحول من 

password الي 

فيختفي الرقم السري 
*/


