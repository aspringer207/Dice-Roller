


const remember = document.getElementById("memory-opt-in").hasAttribute("checked");
const state = {"adv": false}
document.getElementById("advantage-opt").addEventListener("input", ()=>{state.adv = !state.adv; console.log(state.adv)})


