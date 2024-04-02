import {d4, d6, d8, d10, dpct, d12, d20} from "./allpips.js"
const output = document.getElementById("batch-output")

const sel = document.querySelectorAll("option['selected']")
const inputD4 = document.getElementById("batch-d4-count")
const inputD6 = document.getElementById("batch-d6-count")
const inputD8 = document.getElementById("batch-d8-count")
const inputD10 = document.getElementById("batch-d10-count")
const inputPct = document.getElementById("batch-pct-count")
const inputD12 = document.getElementById("batch-d12-count")
const inputD20 = document.getElementById("batch-d20-count")
const batchInputs = [inputD4, inputD6, inputD8, inputD10, inputPct,inputD12]
const associator = {
    "d4":{pip: d4, elem:inputD4},
    "d6":{pip: d6, elem: inputD6},
    "d8":{pip: d8, elem: inputD8}, 
    "d10": {pip: d10, elem: inputD10},
    "pct": {pip: dpct, elem: inputPct},
    "d12": {pip: d12, elem: inputD12}
}
const d20Associator = {
    pip: d20,
    elem: inputD20
}

function rangeHandler(event){
    let val = event.target.value
    console.log(val)
    const advRange = document.getElementById("batch-adv-range")
    const advNum = document.getElementById("batch-adv-num")
    advNum.setAttribute("value", event.target.value)
}
function maxHandler(event){
    let selectedMax = event.target.value
    let countSelect = document.getElementById("batch-d20-count");
    let selectedOption = countSelect.selectedIndex;
    console.log(selectedOption)
    let advRange = document.getElementById("batch-adv-range")
    advRange.setAttribute("max", selectedOption)
    

}
console.log(sel)
document.getElementById("batch-d20-count").addEventListener("change", (event)=>{maxHandler(event)})
document.getElementById("batch-adv-range").addEventListener("change", (event)=>{rangeHandler(event)})
