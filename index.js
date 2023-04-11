// document.querySelector("button").addEventListener("click",handleclick) //if we use ()
// // then the method is called as soon as it's adding the event listener 

// function handleclick(){
//     alert("got clicked");
// }

function checks(parameters){
    switch(parameters)
    {
        case "w":
            var crash=new Audio('sounds/crash.mp3');
                crash.play();
            break;
        case "a":
            var kickbass=new Audio('sounds/kick-bass.mp3');
                kickbass.play();
            break;
        case "s":
            var snare=new Audio('sounds/snare.mp3');
                snare.play();
            break;
        case "d":
            var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
        case "j":
            var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
        case "k":
            var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
        case "l":
            var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
                
        }
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //ananymous function
    var parameter1=this.innerHTML;
    checks(parameter1);
    buttonAnimation(parameter1);
});
}



// document.addEventListener("keypress",function(event){
// alert("key is pressed");
// console.log(event.key);
// })

document.addEventListener("keypress",function(event){
    var parameter2=event.key;
    checks(parameter2);
    buttonAnimation(parameter2);
})

function buttonAnimation(fpara){
    var activeBtn = document.querySelector("."+fpara).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+fpara).classList.remove("pressed");
    },100);
}