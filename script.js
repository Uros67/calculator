const display= document.getElementById("display")
const br1= document.getElementById("one");
const br2= document.getElementById("two");
const br3= document.getElementById("three");
const br4= document.getElementById("four");
const br5= document.getElementById("five");
const br6= document.getElementById("six");
const br7= document.getElementById("seven");
const br8= document.getElementById("eight");
const br9= document.getElementById("nine");
const br0= document.getElementById("zero");

const plus= document.getElementById("add");
const minus= document.getElementById("subtract");
const multi= document.getElementById("multiply");
const divide= document.getElementById("divide"); 

    let numA="";
    let numB="";
    let operator="";


function operate(){
    if(operator=="+"){
        return numA+numB;
    }
    else if(operator=="-"){
        return numA-numB;
    }
    else if(operator=="×"){
        return numA*numB;
    }
    else if(operator=="÷"){
        if(numB==0){
            return "Error"
        }
        else{
            return numA/numB;
        }
        
    }
}



let displayValue="";
br1.onclick=function(){
    displayValue+=1;
    display.value=displayValue;
}

br2.onclick=function(){
    displayValue+=2;
    display.value=displayValue;
}

br3.onclick=function(){
    displayValue+=3;
    display.value=displayValue;
}
br4.onclick=function(){
    displayValue+=4;
    display.value=displayValue;
}
br5.onclick=function(){
    displayValue+=5;
    display.value=displayValue;
}
br6.onclick=function(){
    displayValue+=6;
    display.value=displayValue;
}
br7.onclick=function(){
    displayValue+=7;
    display.value=displayValue;
}
br8.onclick=function(){
    displayValue+=8;
    display.value=displayValue;
}
br9.onclick=function(){
    displayValue+=9;
    display.value=displayValue;
}
br0.onclick=function(){
    displayValue+=0;
    display.value=displayValue;
}


document.getElementById("clearB").onclick=function(){
    numA="";
    numB="";
    operator="";
    displayValue="";
    display.value=displayValue
}





plus.onclick= function(){
    if(numA === "" && numB === ""){
        numA= numA+displayValue;
        operator= "+";
        displayValue="";
    }
    else if(numA !=="" && numB !==""){
        numA= displayValue;
        numB="";
        operator= "+";
        displayValue="";
    }
    else if(numA !=="" && numB ===""){
        numB=numB+ displayValue;
        numA= Number(numA);
        numB= Number(numB);
        displayValue= operate();
        display.value= displayValue;
        numA= displayValue;
        numB="";
        operator= "+";
        displayValue="";
    }

}

minus.onclick= function(){
    if(numA === "" && numB === ""){
        numA= numA+displayValue;
        operator= "-";
        displayValue="";
    }
    else if(numA !=="" && numB !==""){
        numA= displayValue;
        numB="";
        operator= "-";
        displayValue="";
    }
    else if(numA !=="" && numB ===""){
        numB=numB+ displayValue;
        numA= Number(numA);
        numB= Number(numB);
        displayValue= operate();
        display.value= displayValue;
        numA= displayValue;
        numB="";
        operator= "-";
        displayValue="";
    }
}

multi.onclick= function(){
    if(numA === "" && numB === ""){
        numA= numA+displayValue;
        operator= "×";
        displayValue="";
    }
    else if(numA !=="" && numB !==""){
        numA= displayValue;
        numB="";
        operator= "×";
        displayValue="";
    }
    else if(numA !=="" && numB ===""){
        numB=numB+ displayValue;
        numA= Number(numA);
        numB= Number(numB);
        displayValue= operate();
        display.value= displayValue;
        numA= displayValue;
        numB="";
        operator= "×";
        displayValue="";
    }
}

divide.onclick= function(){
    if(numA === "" && numB === ""){
        numA= numA+displayValue;
        operator= "÷";
        displayValue="";
    }
    else if(numA !=="" && numB !==""){
        numA= displayValue;
        numB="";
        operator= "÷";
        displayValue="";
    }
}

const equal= document.getElementById("equal");


equal.onclick= function(){
    numB=numB+ displayValue;
    numA= Number(numA);
    numB= Number(numB);
    displayValue= operate();
    // If there is a error to prevent it from adding numbers after message, it should delete message and show us new numbers
    if(displayValue==="Error"){
        display.value= displayValue;
        displayValue="";
    }
    else{
    display.value= displayValue;
    }
}