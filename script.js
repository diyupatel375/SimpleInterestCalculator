function calculateSI(){

let p=parseFloat(document.getElementById("principal").value);

let r=parseFloat(document.getElementById("rate").value);

let n=parseFloat(document.getElementById("time").value);

if(isNaN(p)||isNaN(r)||isNaN(n))
{
    document.getElementById("result").innerHTML="Please Enter All Values";
    return;
}

let si=(p*r*n)/100;

document.getElementById("result").innerHTML="Simple Interest = "+si;

}