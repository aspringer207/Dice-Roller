export const state = {"adv": false, "rememberMe": false}


document.getElementById("memory-opt-in").addEventListener("input", ()=>{state.rememberMe = !state.rememberMe; console.log(state.rememberMe)})

document.getElementById("advantage-opt").addEventListener("input", ()=>{state.adv = !state.adv; console.log(state.adv)})


