let slider=document.getElementById("slider");
let plen=document.getElementById("plen");
let showpass=document.querySelector(".dis");
let stren=document.querySelector(".st");
console.log(stren);

plen.innerText=6;

// if we move slider it will set password length..
slider.addEventListener('input',()=>{
    plen.innerText=slider.value ;
});


let specialsymbol="`!#*%$)(_+-^&@~";



// this function is for getting random number between two integer ..
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
   
}
// getting random capital 
function getRandomCapital(){
    return String.fromCharCode(getRandomNumber(65,90));
}
// getting random small letter
function getRandomSmall(){
    return String.fromCharCode(getRandomNumber(97,122));

}
// getting random symbol 
function getRandomSymbol(){
    return specialsymbol.charAt(getRandomNumber(0,specialsymbol.length));

}


// selecting input boxes

let btn=document.getElementById("btn");
let cap=document.getElementById("capi");
let small=document.getElementById("small");
let number=document.getElementById("num");
let sym=document.getElementById("sym");


// main button for generating password.
btn.addEventListener("click",()=>{

    if(plen.innerText<6){
        alert("password length should be 6 or more");
        return;
    }
    let password="";
    if(cap.checked){
        password=password+getRandomCapital();

    }
    if(small.checked){
        password=password+getRandomSmall();
    }
    if(number.checked){
        password=password+getRandomNumber(1,9);
    }
    if(sym.checked){
        password=password+getRandomSymbol();
    }
    
    const funcArr=[];
    if(cap.checked)
    funcArr.push(getRandomCapital);

   if(small.checked)
    funcArr.push(getRandomSmall);

   if(number.checked)
    funcArr.push(getRandomNumber);

   if(sym.checked)
    funcArr.push(getRandomSymbol);
    console.log(funcArr);
  
     console.log(password);

     for(let i=0; i<plen.innerText-funcArr.length; i++) {
        let randIndex = getRandomNumber(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex](1,9);
    }
    console.log(password);
    console.log(password.length);

    showpass.value=password;
    // once we have password now we can check whether it is strong password or weak password

    strongOrWeak();
});

function strongOrWeak(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (cap.checked) hasUpper = true;
    if (small.checked) hasLower = true;
    if (number.checked) hasNum = true;
    if (sym.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && plen.innerText >= 8) {

       stren.classList.add('green');
       stren.classList.remove('yellow');
       stren.classList.remove('red');
    
    //   setIndicator("#0f0");
    } else if((hasLower || hasUpper) &&(hasNum || hasSym) &&
    plen.innerText >= 6){
        stren.classList.add('yellow');
        stren.classList.remove('green');
        stren.classList.remove('red');
    //   setIndicator("#ff0");
    } 
    else {
        stren.classList.add('red');
        stren.classList.remove('yellow');
        stren.classList.remove('green');
    //   setIndicator("#f00");
    }
    
}







