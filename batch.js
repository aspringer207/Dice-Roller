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
const rolls = {
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    dPct: 0,
    d12: 0
}
const d20Rolls = {
    total: 0,
    reg: 0,
    adv: 0
}
function updateCount(event){
    let el = event.target.id 
    let ct = document.getElementById(el).selectedIndex
    console.log(el, ct)
    return ct
}
function updateD20S(event){
    let el = event.target.id
    let ct = document.getElementById(el).selectedIndex
    d20Rolls.total = ct
    d20Rolls.reg = d20Rolls.total - d20Rolls.adv
}
function updateD20R(adv){
    d20Rolls.adv = adv
    d20Rolls.reg = d20Rolls.total - d20Rolls.adv

}
function rollHandler(){
    console.log(Object.entries(rolls).map((x)=>x[1]))
    const rollData = Object.entries(rolls).map((x)=>x[1]);
    let r4 = rollData[0] === 0 ? '' : `d4: ${d4.roll(rollData[0])}`
    let r6 = rollData[1] === 0 ? '' : `\n d6: ${d6.roll(rollData[1])}`
    let r8 = rollData[2] === 0 ? '' : `\n d8: ${d8.roll(rollData[2])}`
    let r10 = rollData[3] === 0 ? '' : `\n d10: ${d10.roll(rollData[3])}`
    let rPct = rollData[4] === 0 ? '': `\n dPct: ${dpct.roll(rollData[4])}`
    let r12 = rollData[5] === 0 ? '': `\n d12: ${d12.roll(rollData[5])}`
    let r20R = d20Rolls.reg === 0 ? '': `\n d20(no advantage): ${d20.roll(d20Rolls.reg)}`
    let r20A = d20Rolls.adv === 0 ? '': `\n d20(with advantage): ${d20.rollA(d20Rolls.adv)}`
    let resultArr = [r4, r6, r8, r10, rPct, r12, r20R, r20A]
    document.getElementById("batch-output").textContent = resultArr.filter((x)=>x!='')
    
}
function rangeHandler(event){
    let val = event.target.value
    console.log(val)
    const advRange = document.getElementById("batch-adv-range")
    const advNum = document.getElementById("batch-adv-num")
    advNum.setAttribute("value", event.target.value)
    updateD20R(event.target.value)

}
function maxHandler(event){
    let selectedMax = event.target.value
    let countSelect = document.getElementById("batch-d20-count");
    let selectedOption = countSelect.selectedIndex;
    console.log(selectedOption)
    let advRange = document.getElementById("batch-adv-range")
    advRange.setAttribute("max", selectedOption)


    

}
document.getElementById("batch-d20-count").addEventListener("change", (event)=>{maxHandler(event)})
document.getElementById("batch-adv-range").addEventListener("change", (event)=>{rangeHandler(event)})
inputD4.addEventListener("change", event=>{rolls.d4 = updateCount(event)})
inputD6.addEventListener("change", event=>{rolls.d6 = updateCount(event)})
inputD8.addEventListener("change", event=>{rolls.d8 = updateCount(event)})
inputD10.addEventListener("change", event=>{rolls.d10 = updateCount(event)})
inputPct.addEventListener("change", event=>{rolls.dPct = updateCount(event)})
inputD12.addEventListener("change", event=>{rolls.d12 = updateCount(event)})
inputD20.addEventListener("change", event=>{updateD20S(event)})
document.getElementById("batch-roll-btn").addEventListener("click", event=>{rollHandler()})