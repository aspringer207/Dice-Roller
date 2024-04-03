const batchInputD4 = document.getElementById("batch-d4-count");
const batchInputD6 = document.getElementById("batch-d6-count");
const batchInputD8 = document.getElementById("batch-d8-count");
const batchInputD10 = document.getElementById("batch-d10-count");
const batchInputPct = document.getElementById("batch-pct-count");
const batchInputD12 = document.getElementById("batch-d12-count");
const batchInputD20 = document.getElementById("batch-d20-count");

class Pip {
    constructor(name, sides, min = 1, max = sides, step = 1) {
      this.name = name;
      this.sides = sides;
      this.min = min;
      this.max = parseInt(max);
  
      this.step = step;
    }
    faces() {
      const myFaces = [];
      let face = Number(this.min);
      while (face <= this.max) {
        myFaces.push(face);
        face += this.step;
      }
      return myFaces;
    }
    rand() {
      let x = Math.floor(Math.random() * this.sides);
      let f = this.faces();
      return f[x];
    }
    roll(ct = 1) {
      const results = [];
      for (let i = 0; i < ct; i++) {
        results.push(this.rand());
      }
      return results;
    }
    rollAdv(ct = 1) {
      const results = [];
      for (let i = 0; i < ct; i++) {
        let v1 = this.rand();
        let v2 = this.rand();
        let result = Math.max(v1, v2);
        let discard = Math.min(v1, v2)
        results.push([result, discard])
      }
      return results;
    }
    rollA(ct=1){
      const results = [];
      for (let i = 0; i < ct; i++) {
        let v1 = this.rand();
        let v2 = this.rand();
        let result = Math.max(v1, v2);
        let discard = Math.min(v1, v2)
        results.push(result)
      }
      return results;
  
    }
    fromArray(xName, ...arr) {
      let mx = Math.max(arr);
      let mn = Math.min(arr);
      let si = arr.length;
      const stepCheck = [];
      for (let i = 0; i < si; i++) {
        let j = i + 1;
        stepCheck.push(arr[j] - arr[i]);
      }
      let st = Math.max(stepCheck) === Math.min(stepCheck) ? stepCheck[0] : NaN;
  
      return Pip(xName, mn, mx, si, st);
    }
  }


const btnObj = {
    "d4":{
        pip: d4,
        button: "quick-d4-btn",
        output: "quick-d4-output",
        roll: ()=>d4.roll()
    },
    "d6":{
        pip: d6,
        button: "quick-d6-btn",
        output: "quick-d6-output",
        roll: ()=>d6.roll()
    },
    "d8":{
        pip: d8,
        button: "quick-d8-btn",
        output: "quick-d8-output",
        roll: ()=>d8.roll()
    },
    "d10":{
        pip: d10,
        button: "quick-d10-btn",
        output: "quick-d10-output",
        roll: ()=>d10.roll()
    },
    "dpct":{
        pip: dpct,
        button: "quick-dpct-btn",
        output: "quick-dpct-output",
        roll: ()=>dpct.roll()
    },
    "d12":{
        pip: d12,
        button: "quick-d12-btn",
        output: "quick-d12-output",
        roll: ()=>d12.roll()
    },
    "d20":{
        pip: d20,
        button: "quick-d20-btn",
        output: "quick-d20-output",
        roll: ()=>d20.roll()
    }
}

  

const rolls = {
  d4: 0,
  d6: 0,
  d8: 0,
  d10: 0,
  dPct: 0,
  d12: 0,
};
const d20Rolls = {
  total: 0,
  reg: 0,
  adv: 0,
};
function updateCount(event) {
  let el = event.target.id;
  let ct = document.getElementById(el).selectedIndex;
  console.log(el, ct);
  return ct;
}
function updateD20S(event) {
  let el = event.target.id;
  let ct = document.getElementById(el).selectedIndex;
  d20Rolls.total = ct;
  d20Rolls.reg = d20Rolls.total - d20Rolls.adv;
}
function updateD20R(adv) {
  d20Rolls.adv = adv;
  d20Rolls.reg = d20Rolls.total - d20Rolls.adv;
}
function rollHandler() {
  console.log(Object.entries(rolls).map((x) => x[1]));
  const rollData = Object.entries(rolls).map((x) => x[1]);
  let r4 = rollData[0] === 0 ? "" : `d4: ${d4.roll(rollData[0])}`;
  let r6 = rollData[1] === 0 ? "" : `\n d6: ${d6.roll(rollData[1])}`;
  let r8 = rollData[2] === 0 ? "" : `\n d8: ${d8.roll(rollData[2])}`;
  let r10 = rollData[3] === 0 ? "" : `\n d10: ${d10.roll(rollData[3])}`;
  let rPct = rollData[4] === 0 ? "" : `\n dPct: ${dpct.roll(rollData[4])}`;
  let r12 = rollData[5] === 0 ? "" : `\n d12: ${d12.roll(rollData[5])}`;
  let r20R =
    d20Rolls.reg === 0 ? "" : `\n d20(no advantage): ${d20.roll(d20Rolls.reg)}`;
  let r20A =
    d20Rolls.adv === 0
      ? ""
      : `\n d20(with advantage): ${d20.rollA(d20Rolls.adv)}`;
  let resultArr = [r4, r6, r8, r10, rPct, r12, r20R, r20A];
  document.getElementById("batch-output").textContent = resultArr.filter(
    (x) => x != ""
  );
}
function rangeHandler(event) {
  let val = event.target.value;
  console.log(val);
  const advNum = document.getElementById("batch-adv-num");
  advNum.setAttribute("value", event.target.value);
  updateD20R(event.target.value);
}
function maxHandler(event) {
  let countSelect = document.getElementById("batch-d20-count");
  let selectedOption = countSelect.selectedIndex;
  console.log(selectedOption);
  let advRange = document.getElementById("batch-adv-range");
  advRange.setAttribute("max", selectedOption);
}
import { btnObj } from "./btnObj.js";
import { state } from "./index.js";

function buttonHandler(btn) {
  document.getElementById(btn.output).value = btn.pip.roll();
}
function d20Handler(btn) {
  if (state.adv === true) {
    let rollArr = btn.pip.rollAdv();
    document.getElementById(btn.output).value = rollArr[0][0];
    document.getElementById("discard").value = rollArr[0][1];
  } else {
    document.getElementById(btn.output).value = btn.pip.roll();
  }
}

document.getElementById("advantage-opt").addEventListener("change", () => {
  state.adv = !state.adv;
  console.log(state.adv);
});
document.getElementById("quick-d4-btn").addEventListener("click", () => {
  buttonHandler(btnObj.d4);
});
document.getElementById("quick-d6-btn").addEventListener("click", () => {
  buttonHandler(btnObj.d6);
});
document.getElementById("quick-d8-btn").addEventListener("click", () => {
  buttonHandler(btnObj.d8);
});
document.getElementById("quick-d10-btn").addEventListener("click", () => {
  buttonHandler(btnObj.d10);
});
document.getElementById("quick-dpct-btn").addEventListener("click", () => {
  buttonHandler(btnObj.dpct);
});
document.getElementById("quick-d12-btn").addEventListener("click", () => {
  buttonHandler(btnObj.d12);
});
document.getElementById("quick-d20-btn").addEventListener("click", () => {
  d20Handler(btnObj.d20);
});
document
  .getElementById("batch-d20-count")
  .addEventListener("change", (event) => {
    maxHandler(event);
  });
document
  .getElementById("batch-adv-range")
  .addEventListener("change", (event) => {
    rangeHandler(event);
  });
batchInputD4.addEventListener("change", (event) => {
  rolls.d4 = updateCount(event);
});
batchInputD6.addEventListener("change", (event) => {
  rolls.d6 = updateCount(event);
});
batchInputD8.addEventListener("change", (event) => {
  rolls.d8 = updateCount(event);
});
batchInputD10.addEventListener("change", (event) => {
  rolls.d10 = updateCount(event);
});
batchInputPct.addEventListener("change", (event) => {
  rolls.dPct = updateCount(event);
});
batchInputD12.addEventListener("change", (event) => {
  rolls.d12 = updateCount(event);
});
batchInputD20.addEventListener("change", (event) => {
  updateD20S(event);
});
document.getElementById("batch-roll-btn").addEventListener("click", (event) => {
  rollHandler();
});
