for(var i=0;i<7;++i){
document.querySelectorAll("button")[i].addEventListener("mouseenter",clickFunction); 
}
for(var i=0;i<7;++i){
    document.querySelectorAll("button")[i].addEventListener("mouseout",clickFunction1); 
    }
    function clickFunction1(){
        console.log(this.style.color="palevioletred"); 
    }


function clickFunction(){
    // var audio= new Audio("sounds/snare.mp3");
    // audio.play();
    this.style.color="white" 
}

for(var i=0;i<7;++i){
    document.querySelectorAll("button")[i].addEventListener("click",fun); 
    }
    function fun(){
        var a =this.innerHTML; 
        switch (a) {
            case "w":
                var audio =new Audio("sounds/tom-1.mp3"); 
                audio.play(); 
                break; 
            case "a":
                    var audio =new Audio("sounds/tom-2.mp3"); 
                    audio.play(); 
                    break;
            case "s":
                        var audio =new Audio("sounds/tom-3.mp3"); 
                        audio.play(); 
                        break;
            case "d":
                 var audio =new Audio("sounds/tom-4.mp3"); 
                 audio.play(); 
                 break;
            case "j":
                 var audio =new Audio("sounds/crash.mp3"); 
                 audio.play(); 
                 break;
            case "k":
                    var audio =new Audio("sounds/kick-bass.mp3"); 
                    audio.play(); 
                    break;
            case "l":
                        var audio =new Audio("sounds/snare.mp3"); 
                        audio.play(); 
                        break;
        }
        addAnimation(a); 
    }

    document.addEventListener("keypress",function(event){
        var a =event.key; 
        switch (a) {
            case "w":
                var audio =new Audio("sounds/tom-1.mp3"); 
                audio.play(); 
                break; 
            case "a":
                    var audio =new Audio("sounds/tom-2.mp3"); 
                    audio.play(); 
                    break;
            case "s":
                        var audio =new Audio("sounds/tom-3.mp3"); 
                        audio.play(); 
                        break;
            case "d":
                 var audio =new Audio("sounds/tom-4.mp3"); 
                 audio.play(); 
                 break;
            case "j":
                 var audio =new Audio("sounds/crash.mp3"); 
                 audio.play(); 
                 break;
            case "k":
                    var audio =new Audio("sounds/kick-bass.mp3"); 
                    audio.play(); 
                    break;
            case "l":
                        var audio =new Audio("sounds/snare.mp3"); 
                        audio.play(); 
                        break;
        }
        addAnimation(a); w
    })


    function addAnimation(ele){
        var keyele=document.querySelector("."+ele); 
        keyele.classList.add("pressed");
        
        setTimeout(function() {
            keyele.classList.remove("pressed")
        }, 100);
    }