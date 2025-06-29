import { useReducer } from "react";

const list = []
const grouby = list.reduce((group,item) => {
    const  key = item.deptName

    if(!group[key]){
        group[key] = []
    }

    group[key].push(item)

}, {})