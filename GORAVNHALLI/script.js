let menubutton=document.querySelector(".menu2")
let displaymenu=document.querySelector(".menuhide")
let first= document.querySelector(".first")


let press=1
menubutton.addEventListener("click",()=>{
if(press==1){
    displaymenu.style.display="block";
    displaymenu.style.animation="come ease 2s 1"
    press=2
}else{

    press=1
    displaymenu.style.animation="go ease 2s 1";
    
        displaymenu.style.display="none"
}
})