const tips=document.querySelectorAll(".tip");
let tipperc=0;
const customtip=document.querySelector("#custom");

const bill=document.querySelector("#bill");
let billvalue=0;
let error=document.querySelector(".error");
const noofpep=document.querySelector("#noofpep");
let noofpepvalue=0;

const value=document.querySelector("#value");
const value2=document.querySelector("#value2");
const reset=document.querySelector("#reset");

const getvalue=()=>{
    billvalue=Number(bill.value);
    noofpepvalue=Number(noofpep.value);
    if (noofpepvalue===0){
        noofpep.style.border="2px solid hsl(10, 100%, 50%)";
        error.style.display="block";
        noofpep.style.borderRadius="3%";

    }
    else{
        console.log(`The bill costed ${billvalue} and theres ${noofpepvalue} people`);
        calctip();
        gettotol();

    }
    
}
const calctip=()=>{
    const tipvalue=billvalue*(tipperc);
    const tipvalueperp=(tipvalue/noofpepvalue);
    console.log(`tip perperson is ${tipvalueperp}`);
    value.innerText=(`$${tipvalueperp}`);
    return tipvalue;
}
const gettotol=()=>{
    const totol=(billvalue)+Number(calctip());
    const totolperp=(totol/noofpepvalue);
    console.log(`totol perperson is ${totolperp}`);
    value2.innerText=(`$${totolperp}`);
    reset.style.backgroundColor="hsl(183, 80%, 61%)";
    reset.style.color="hsl(183, 100%, 15%)";
}

const resetbtn=()=>{
    tipperc=0;
    billvalue=0;
    noofpepvalue=0;

    customtip.value = "";
    bill.value = "";
    noofpep.value = "";

    value.innerText = "$0.00";
    value2.innerText = "$0.00";

    noofpep.style.border = "0.5px solid hsl(185, 10%, 45%)";
    error.style.display = "none";

    reset.style.backgroundColor = "hsl(186, 46%, 29%)";
    reset.style.color = "hsl(185, 10%, 45%)";
    
    console.log("App Reset successfully!");


    
}
noofpep.addEventListener("change",getvalue,);
tips.forEach((tip)=>{
    tip.addEventListener("click",(e)=>{
        tipperc=e.target.dataset.tip;
    });

})
reset.addEventListener("click",resetbtn);


    







