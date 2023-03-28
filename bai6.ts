import {question} from "readline-sync"
/**
 * Hàm chuyển đổi từ độ F sang độ C
 * @returns Xuất độ C
 */
function cnchuyendof(): number {
    let doC: number = (5/9)*(Number(question('Nhap do F: ')) - 32)
    return doC;
}
/**
 * Hàm in độ C
 */
function chuyendof(): void {
    console.log(cnchuyendof());
}

chuyendof()