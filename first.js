const tips=document.querySelectorAll(".tip");
console.log(tips);
const customtip=document.querySelector("#custom");

const bill=document.querySelector("#bill");
const noofpep=document.querySelector("#noofpep");


const value=document.querySelector("#value");
const value2=document.querySelector("#value2");
const reset=document.querySelector("#reset");

const getvalue=()=>{
    billvalue=bill.value;
    noofpepvalue=noofpep.value;
    console.log(billvalue,noofpepvalue);
}






// const tipperp=(getvalue)=>{
//     tip=billvalue*()

// }
// const totolperp=()=>{

// }




tips.forEach((tip)=>{
    tip.addEventListener("click",(e)=>{
        console.log(e.target.dataset.tip);
    });

})

    







