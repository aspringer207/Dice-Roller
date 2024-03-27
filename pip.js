// module "pip.js"
export default class Pip {
  constructor(name, min = 1, max, sides = max, step = 1) {
    this.name = name;
    this.min = min;
    this.max = parseInt(max);
    this.sides = sides;
    this.step = step;
  }
  faces() {
    const myFaces = [];
    let face = Number(this.min);
    while (face <= this.max) {
      myFaces.push(Number(face));
      face += this.step;
    }
    return myFaces;
  }
  xFaces() {
    const shortFaces = [];
    let face = Number(this.min);
    while (face <= this.max) {
      shortFaces.push(String(face));
      face += this.step;
    }
    const myFaces = shortFaces.map((x) => String(x).padStart(2, "0"));
    return myFaces;
  }
  rand() {
    let x = Math.floor(Math.random() * this.max);
    let f = this.faces();
    return f[x];
  }
  roll(adv) {
    this.faces = this.faces.bind(this);
    if (adv === 0) {
      let x = Math.floor(Math.random() * this.max);
      let f = this.faces();
      return f[x];
    } else if (adv === 1) {
      let x = Math.floor(Math.random() * this.max);
      let y = Math.floor(Math.random() * this.max);
      let f = this.faces();
      f = [...f];
      let xface = parseInt(f[x]);
      let yface = parseInt(f[y]);
      let result = Math.max([xface, yface]);
      return result;
    }
  }
  rolls(r, adv) {
    let a = adv === true ? 1 : 0;
    let result = [];
    for (let i = 0; i < r; i++) {
      result.push(String(this.roll(a)));
    }
    return result;
  }
  fromArray(xName, [...arr]) {
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



