import { Pip } from "./pip";

function handleTabs(event){
    let id = event.target.id
    const myTabs = document.querySelectorAll(".tab")
    const mt = Object.values(myTabs).flat()
    mt.map((x)=>{
        if (x.hasAttribute("active")){
            x.removeAttribute("active")
        }
    }).map((x)=>{
        if ((x.target === id) || (x.id === id)){
            x.addAttribute("active")
        }
    })
}
document.getElementById("quick").addEventListener("click", (e)=>{handleTabs(e)})
document.getElementById("batch").addEventListener("click", (e)=>{handleTabs(e)})
document.getElementById("custom").addEventListener("click", (e)=>{handleTabs(e)})