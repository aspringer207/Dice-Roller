import {d4, d6, d8, d10, dpct, d12, d20} from "./allpips.js"
const output = document.getElementById("batch-output")

const inputD4 = document.getElementById("batch-d4-count")
const inputD6 = document.getElementById("batch-d6-count")
const inputD8 = document.getElementById("batch-d8-count")
const inputD10 = document.getElementById("batch-d10-count")
const inputPct = document.getElementById("batch-pct-count")
const inputD12 = document.getElementById("batch-d12-count")
const inputD20 = document.getElementById("batch-d20-count")
let countD4 = inputD4.selectedIndex
let countD6 = inputD4.selectedIndex
let countD8 = inputD8.selectedIndex
let countD10 = inputD10.selectedIndex
let countPct = inputPct.selectedIndex
let countD12 = inputD12.selectedIndex
let countD20 = inputD20.selectedIndex
let advD20 = document.getElementById("batch-adv-num")
function updateCount(event){
    let el = event.target.id 
    let ct = document.getElementById(el).selectedIndex
    console.log(el, ct)
}
function rangeHandler(event){
    let val = event.target.value
    console.log(val)
    const advRange = document.getElementById("batch-adv-range")
    const advNum = document.getElementById("batch-adv-num")
    advNum.setAttribute("value", event.target.value)
    d20Associator.totalCount = event.target.value
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
inputD4.addEventListener("change", event=>{updateCount(event)})
document.getElementById("batch-roll-btn").addEventListener("click", rollHandler())