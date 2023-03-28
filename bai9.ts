import { question } from "readline-sync";
/**
 * Hàm hỗ trợ kiểm tra phải số nguyên tố không
 * @param a Số cần kiểm tra
 * @returns Kết quả true là số nguyên tố, false là không phải số nguyên tố
 */
function cnsonguyen(a: number): boolean {
    let ketqua: boolean = true;
    for(let i: number = 2; i <= a - 1; i++) {
        if (a%i === 0)
            ketqua = false;
    }
    return ketqua
}
/**
 * Hàm kiểm tra phải số nguyên tố không
 */
function songuyen(): void {
    let a: number = Number(question("Nhap so: "))
    console.log(cnsonguyen(a));
}

songuyen();