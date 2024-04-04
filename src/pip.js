// module "pip.js"
export default class Pip {
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
