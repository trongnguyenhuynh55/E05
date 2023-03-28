import { question } from "readline-sync";
/**
 * Hàm trả về 1 chuỗi các số nguyên tố
 * @param m Giá trị bắt đầu
 * @param n Giá trị kết thúc
 * @returns Chuỗi các số nguyên tố
 */
function cnsonguyen(m:number, n: number): string {
    let dayso: string = "";
    for(let j: number = m; j <= n; j++) {
        if (songuyen(j) === true)
            dayso = dayso + " " + String(j);
    }
    return dayso;
}

/**
 * Hàm kiểm tra 1 số có phải là số nguyên
 * @param a Số cần kiểm tra     
 * @returns Kết quả true là số nguyên tố, false là không phải số nguyên tố
 */
function songuyen(a:number): boolean {
    let ketqua: boolean = true;
    for(let i: number = 2; i <= a - 1; i++) {
        if (a%i === 0)
            ketqua = false;
    }
    return ketqua
}
/**
 * Hàm liệt kê số nguyên
 */
function lietkesonguyen(): void {
    let m: number = Number(question("Nhap so bat dau: "))
    let n: number = Number(question("Nhap so ket thuc: "))
    console.log(cnsonguyen(m, n));
}

lietkesonguyen();