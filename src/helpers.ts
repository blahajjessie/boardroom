import {Board} from "./board.ts"

// Id check
export function idPresent(id:string, arr:Array<Board>){
    return arr.some((b)=> b.id===id)
}

export function idAbsent(id:string, arr:Array<Board>){
    return !idPresent(id, arr);
}