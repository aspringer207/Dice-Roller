import {btnObj} from './btnObj.js'
import {state} from './index.js'

function buttonHandler(btn){
    if (state.adv === true && btn === btnObj.d20) {
        let rollArr = btn.pip.rollAdv()
        console.log(dpct.faces())
    document.getElementById(btn.output).value = rollArr[0][0]
    document.getElementById("discard").value = rollArr[0][1]
} else
{document.getElementById(btn.output).value = btn.pip.roll()}

}

document.getElementById("d4-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d4)})
document.getElementById("d6-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d6)})
document.getElementById("d8-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d8)})
document.getElementById("d10-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d10)})
document.getElementById("dpct-btn").addEventListener("click", ()=>{buttonHandler(btnObj.dpct)})
document.getElementById("d12-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d12)})
document.getElementById("d20-btn").addEventListener("click", ()=>{buttonHandler(btnObj.d20)})