document.addEventListener("keypress", function (event){
    var key = event.key;
    switch(key){
        case "a": 
        sounda();
        break;
        case "s": 
        sounds();
        break;
        case "d": 
        soundd();
        break;
        case "f": 
        soundf();
        break;
        case "g": 
        soundg();
        break;
        case "h": 
        soundh();
        break;
        case "j": 
        soundj();
        break;
        case "k": 
        soundk();
        break;
        case "l": 
        soundl();
        break;
        case "A": 
        sounda();
        break;
        case "S": 
        sounds();
        break;
        case "D": 
        soundd();
        break;
        case "F": 
        soundf();
        break;
        case "G": 
        soundg();
        break;
        case "H": 
        soundh();
        break;
        case "J": 
        soundj();
        break;
        case "K": 
        soundk();
        break;
        case "L": 
        soundl();
        break;
        default: 
        alert("No such key is on the screen!! Kindly press the correct key!");
    }
});

document.getElementById("a").addEventListener("click", sounda);

function sounda(){

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    document.querySelector('#a').classList.add('playing');
    setTimeout("document.querySelector('#a').classList.remove('playing');",100);
}

document.getElementById("s").addEventListener("click", sounds);

function sounds(){

    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    document.querySelector('#s').classList.add('playing');
    setTimeout("document.querySelector('#s').classList.remove('playing');",100);
}

document.getElementById("d").addEventListener("click", soundd);

function soundd(){

    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    document.querySelector('#d').classList.add('playing');
    setTimeout("document.querySelector('#d').classList.remove('playing');",100);
}

document.getElementById("f").addEventListener("click", soundf);

function soundf(){

    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    document.querySelector('#f').classList.add('playing');
    setTimeout("document.querySelector('#f').classList.remove('playing');",100);
}

document.getElementById("g").addEventListener("click", soundg);

function soundg(){

    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    document.querySelector('#g').classList.add('playing');
    setTimeout("document.querySelector('#g').classList.remove('playing');",100);
}

document.getElementById("h").addEventListener("click", soundh);

function soundh(){

    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    document.querySelector('#h').classList.add('playing');
    setTimeout("document.querySelector('#h').classList.remove('playing');",100);
}

document.getElementById("j").addEventListener("click", soundj);

function soundj(){

    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    document.querySelector('#j').classList.add('playing');
    setTimeout("document.querySelector('#j').classList.remove('playing');",100);
}

document.getElementById("k").addEventListener("click", soundk);

function soundk(){

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    document.querySelector('#k').classList.add('playing');
    setTimeout("document.querySelector('#k').classList.remove('playing');",100);
}

document.getElementById("l").addEventListener("click", soundl);

function soundl(){

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    document.querySelector('#l').classList.add('playing');
    setTimeout("document.querySelector('#l').classList.remove('playing');",100);
}
