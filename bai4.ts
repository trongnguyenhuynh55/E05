import {question} from "readline-sync"

function cnxinchao(): void {
    const a: string = question("Nhap ten: ");
    const b: number = Number(question("Nhap nam sinh: "));
    xinchao(a, b)
}
function xinchao(name: string, year: number): void{
    console.log("Xin chao minh ten la " + name);
    console.log("Minh sinh nam " + year);
    console.log("Rat vui duoc gap.");
}

cnxinchao()