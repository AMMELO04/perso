const tit = document.getElementById('title');

function displaytime(){
    time = new Date();
    var t = time.getHours();
    var h = time.getMinutes();
    var l = time.getSeconds();
    console.log(t, h, l)
    document.getElementById('time').innerHTML = time;
}

 setInterval(displaytime, 1000) 
/* setTimeout(time, 5000); */
/* setInterval(time, 3000); */


let count = 0;

let one = document.getElementById("one").onclick = function(){
    count+=1
    document.getElementById("count").innerHTML = count
}

let res = document.getElementById("res").onclick = function(){
    count=0
    document.getElementById("count").innerHTML = count
}

let two = document.getElementById("two").onclick = function(){
    count-=1
    document.getElementById("count").innerHTML = count
}


document.getElementById('subm').onclick = function(){
    let vam = document.getElementById('check').checked

    if(vam == true){
        console.log("YOU ARE SUBSCRIBED")
        document.getElementById('noaccept').innerHTML = '*YOU ARE SUBSCRIBED*'
    }

    else{
        document.getElementById('noaccept').innerHTML = '*YOU ARE NOT SUBSCRIBED*'
    }
}

/* let userName = "";

while(userName == "") {
    userName = window.prompt("Enter your Name:");
}

console.log("Hello", userName); */

checkwin(true)

function checkwin(win){
    win ? console.log('You WIN') : console.log('You LOSE')
}
