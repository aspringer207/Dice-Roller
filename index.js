import * as pip from "./pip";

const d4 = new pip.Pip("d4", 1, 4);
const d6 = new pip.Pip("d6", 1, 6);
const d8 = new pip.Pip("d8", 1, 8);
const d10 = new pip.Pip("d10", 0, 9, 10, 1);
const dPct = new pip.Pip("dPct", 0, 90, 10, 10);
const d12 = new pip.Pip("d12", 1, 12);
const d20 = new pip.Pip("d20", 1, 20);

const buttonArr = [d4, d6, d8, d10, dPct, d12, d20]
const buttonObj = {
    "d4":{
        pip: d4,
        button: "d4-btn",
        output: "d4-output"
    },
    "d6":{
        pip: d6,
        button: "d6-btn",
        output: "d6-output"
    },
    "d8":{
        pip: d8,
        button: "d8-btn",
        output: "d8-output"
    },
    "d10":{
        pip: d10,
        button: "d10-btn",
        output: "d10-output"
    },
    "dPct":{
        pip: dPct,
        button: "dPct-btn",
        output: "dPct-output"
    },
    "d12":{
        pip: d12,
        button: "d12-btn",
        output: "d12-output"
    },
    "d20":{
        pip: d20,
        button: "d20-btn",
        output: "d20-output"
    }
}
function buttonHandler(btn){
    document.getElementById(btn.output).value = btn.pip.roll(0)
    
}
function sortBtnEvent(event){
    const b = event.target.id;
    return buttonObj.b
}

function handleTabs(event){
    let id = event.target.id
    const myTabs = document.querySelectorAll(".tab")
    const mt = Object.values(myTabs).flat()
    mt.map((x)=>{
        if (x.hasAttribute("active")){
            x.removeAttribute("active")
        }
    }).map((x)=>{
        if ((x.target === id) || (x.id === id)){
            x.addAttribute("active")
        }
    })
}
document.getElementById("d4-btn").addEventListener("click", buttonHandler(buttonObj.d4))
document.getElementById("d6-btn").addEventListener("click", buttonHandler(buttonObj.d6))
document.getElementById("d8-btn").addEventListener("click", buttonHandler(buttonObj.d8))
document.getElementById("d10-btn").addEventListener("click", buttonHandler(buttonObj.d10))
document.getElementById("dPct-btn").addEventListener("click", buttonHandler(buttonObj.dPct))
document.getElementById("d12-btn").addEventListener("click", buttonHandler(buttonObj.d12))
document.getElementById("d20-btn").addEventListener("click", buttonHandler(buttonObj.d20))
document.getElementById("quick").addEventListener("click", (e)=>{handleTabs(e)})
document.getElementById("batch").addEventListener("click", (e)=>{handleTabs(e)})
document.getElementById("custom").addEventListener("click", (e)=>{handleTabs(e)})