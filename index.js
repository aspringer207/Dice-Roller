export const state = {"adv": false, "rememberMe": false}

document.getElementById("advantage-opt").addEventListener("change", ()=>{state.adv = !state.adv; console.log(state.adv)})
