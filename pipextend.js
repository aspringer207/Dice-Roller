import Pip from 'pip.js';
export class QuickPip extends Pip{
    constructor(Number){
        super("d".concat(parseInt(Number)), Number, 1, Number, 1)
        this.name = "d".concat(parseInt(Number))
        this.min = 1
        this.max = Number
        this.sides = Number
        this.step = 1
    }
}
export class CustomPip extends Pip{
    constructor(name, [...cFace]){
        super(name, cFace.length, cFace[0], cFace[-1], NaN)
        this.name = name
        this.min = cFace[0],
        this.max = cFace[-1]
        this.sides = cFace.length
        this.step = NaN
        this.custom = cFace
    }
    customFaces(){
        if (this.faces === undefined){
            this.faces = this.custom
        }
        return this.custom

    }
    
}