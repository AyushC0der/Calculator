var textbox = [];
var num1 = 0;
var num2 = 0;

let oper;

let broken = false;
let backPr = false;
let eqlPr = false;

var txt = document.getElementById("textCnt");
var butt = document.querySelector("input").value;

function Operator(opr)
{
    broken = true;
    textbox = [];
    txt.textContent = "";
    oper = opr;
}

function Number(num) {
    
    textbox.push(num);

    // Convert textbox to a string
    const numberString = textbox.join('');
    txt.textContent = numberString; // Update text element

    // Convert textbox to a number
    const numberValue = parseInt(numberString, 10);

    console.log(textbox);

    //console.log(broken);
    
    if(broken == false)
    {
        num1 = textbox.reduce((acc, curr) => acc * 10 + curr, 0);
    }
    if(broken == true)
    {
        num2 = textbox.reduce((acc, curr) => acc * 10 + curr, 0);
    }
    
    if(backPr == true)
    {
        num2 = textbox.reduce((acc, curr) => acc * 10 + curr, 0);
        num1 = textbox.reduce((acc, curr) => acc * 10 + curr, 0);
    }
    
    console.log(num1);
    console.log(num2);

    backPr = false;
}

function BACK()
{
    backPr = true;
}
function EQUAL()
{   
    var result;
    console.log("num1: " + String(num1));
    console.log("num2: " + String(num2));
    console.log(oper);
    
    if(oper == "+"){
        result = num1 + num2;
        console.log(String(num1) + " + " + String(num2) + " is " + result);
    }
    if(oper == "-"){
        result = num1 - num2;
        console.log(String(num1) + " - " + String(num2) + " is " + result);
    }
    if(oper == "/"){
        result = num1 / num2;
        console.log(String(num1) + " / " + String(num2) + " is " + result);
    }
    if(oper == "*"){
        result = num1 * num2;
        console.log(String(num1) + " * " + String(num2) + " is " + result);
    }

    txt.textContent = result;
    num1 = 0;
    num2 = 0;
    broken = false;
    textbox = [];
    oper = "";
}