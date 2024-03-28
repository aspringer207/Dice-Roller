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
    
    if (isNaN(this.step)) {
      let s = this.sides
      try {
        CustomPip.customFaces();
      } catch (s) {
        for (let i = 0; i < s; i++) {
          myFaces.push(i);
        }
        console.log(
          "This class requires a numerical step or an array to create faces. You can use the 'CustomPip' extension or 'addCustomFaces' method to provide the pip's faces."
        );
      } finally {
        console.log("Error: invalid step and/or sides.");
      }
    }

    let face = Number(this.min);
    while (face <= this.max) {
      let f = face === 0 ? String(face).padStart(2, 0) : String(face);
      myFaces.push(f);
      face += this.step;
    }
    return myFaces;
  }
  rand() {
    let x = Math.floor(Math.random() * this.max);
    let f = this.faces();
    return f[x];
  }
  roll(ct = 1) {
    const results = [];
    for (let i = 0; i < ct; i++) {
      results.push(this.rand());
    }
    return results
  }
  rollAdv(ct = 1) {
    var result;
    var discard;

    for (let i = 0; i < ct; i++) {
      let a = Number(this.rand());
      let b = Number(this.rand());
      result = Math.max([a, b]);
      discard = Math.min([a, b])
    }
    return [result, discard];
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
