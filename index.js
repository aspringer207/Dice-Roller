export const state = {"adv": false, "rememberMe": false}


document.getElementById("memory-opt-in").addEventListener("change", ()=>{state.rememberMe = !state.rememberMe; console.log(state.rememberMe)})

document.getElementById("advantage-opt").addEventListener("change", ()=>{state.adv = !state.adv; console.log(state.adv)})


