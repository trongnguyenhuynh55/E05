import {question} from "readline-sync"

function cnxinchao(): void {
    const a: string = ten();
    const b: number = namsinh();
    xinchao(a, b)
}
/**
 * Ham in loi xin chao
 * @param name Ten nguoi dung
 * @param year Nam sinh nguoi dung
 */
function xinchao(name: string, year: number): void {
    console.log("Xin chao minh ten la " + name);
    console.log("Minh sinh nam " + year);
    console.log("Rat vui duoc gap.");
}
/**
 * Hàm nhập tên người dùng
 * @returns tên hợp lệ
 */
function ten(): string {
    let ten: string = "";
    do {
        ten = question("Nhap ten: ")
    } while (ten === "");
    return ten;
}
/**
 * Hàm nhập năm sinh người dùng
 * @returns trả về năm sinh hợp lệ     
 */
function namsinh(): number {
    let namsinh: number = 0;
    do {
        namsinh = Number(question("Nhap nam sinh: "))
    } while (namsinh <= 0 || namsinh >= 2024)
    return namsinh;
}
cnxinchao()