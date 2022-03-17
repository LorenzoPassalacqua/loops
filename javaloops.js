function count(){
    let Text="";
    let x= 1;
    while (x <= 10){
        Text += "<br>number "+ x;
        x++;
    }
    document.getElementById("number").innerHTML= Text;
}

function loop(){
    let Text="";
    for (let n= 1; n <= 20; n++)
    Text += "<br>number " + n;
    document.getElementById("loops").innerHTML= Text;
}

function random(){
    let result="";
    let x= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   result= Math.floor(Math.random() * x.length);
   document.getElementById("ran").innerHTML= result;
}