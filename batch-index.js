import {d4, d6, d8, d10, dpct, d12, d20} from "./allpips.js"

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

getElementById("batch-d20-count").addEventListener("change", (event)=>{maxHandler(event)})
getElementById("batch-adv-range").addEventListener("change", (event)=>{rangeHandler(event)})
