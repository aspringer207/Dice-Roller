import {btnObj} from './btnObj'

function buttonHandler(btn){
    if (state.adv === true) {
        let rollArr = btn.pip.rollAdv()
        console.log(dpct.faces())
    document.getElementById(btn.output).value = rollArr[0][0]
    document.getElementById("discard").value = rollArr[0][1]
} else
{document.getElementById(btn.output).value = btn.pip.roll()}

}
const state = {"adv": false}
document.getElementById("advantage-opt").addEventListener("input", ()=>{state.adv = !state.adv; console.log(state.adv)})
document.getElementById("d4-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d4)})
document.getElementById("d6-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d6)})
document.getElementById("d8-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d8)})
document.getElementById("d10-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d10)})
document.getElementById("dpct-btn").addEventListener("click", ()=>{buttonHandler(btnObj.dpct)})
document.getElementById("d12-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d12)})
document.getElementById("d20-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d20)})