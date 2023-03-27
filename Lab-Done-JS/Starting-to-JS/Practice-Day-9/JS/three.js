let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

function add() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter a number.");
        return false;
    }
    c = Number(a) + Number(b);
    document.getElementById("result").innerHTML = c;
}
function tru() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter a number.");
        return false;
    }
    c = Number(a) - Number(b);
    document.getElementById("result").innerHTML = c;
}
function nhan(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter a number.");
        return false;
    }
    c = Number(a) * Number(b);
    document.getElementById("result").innerHTML = c;
}
function chia(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (isNaN(a) || isNaN(b)) {
        alert("Please enter a number.");
        return false;
    }else if(a == 0){
        alert("Cannot divide by 0.");
        return false;
    }else if (b == 0){
        alert("Cannot divide by 0.");
        return false;

    }else if (b > a){
        alert("Cannot divide by a number greater than the first number.");
        return false;
    }
    c = Number(a) / Number(b);
    document.getElementById("result").innerHTML = c;
}
function trituyetdoi(){
    document.getElementById("result").innerHTML = Math.abs(Number(c));
    alert("The absolute value of " + c + " is " + Math.abs(Number(c)));
}
function canbac2(){
    console.log(c);
    document.getElementById("result").innerHTML = Math.sqrt(Number(c));
    alert("The square root of " + c + " is " + Math.sqrt(Number(c)));
}
function lamtron(){
    console.log(c);
    document.getElementById("result").innerHTML = Math.ceil(Number(c));
    alert("The rounded value of " + c + " is " + Math.ceil(Number(c)));
}
