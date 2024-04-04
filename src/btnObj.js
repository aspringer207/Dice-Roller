
import Pip from "./pip.js";
import {d4, d6, d8, d10, dpct, d12, d20} from "./allpips.js";

export const btnObj = {
    "d4":{
        pip: d4,
        button: "d4-btn",
        output: "d4-output",
        roll: ()=>d4.roll()
    },
    "d6":{
        pip: d6,
        button: "d6-btn",
        output: "d6-output",
        roll: ()=>d6.roll()
    },
    "d8":{
        pip: d8,
        button: "d8-btn",
        output: "d8-output",
        roll: ()=>d8.roll()
    },
    "d10":{
        pip: d10,
        button: "d10-btn",
        output: "d10-output",
        roll: ()=>d10.roll()
    },
    "dpct":{
        pip: dpct,
        button: "dpct-btn",
        output: "dpct-output",
        roll: ()=>dpct.roll()
    },
    "d12":{
        pip: d12,
        button: "d12-btn",
        output: "d12-output",
        roll: ()=>d12.roll()
    },
    "d20":{
        pip: d20,
        button: "d20-btn",
        output: "d20-output",
        roll: ()=>d20.roll()
    }
}