import { question } from "readline-sync";
/**
 * Hàm kiểm tra số a so với b
 * @param a Số a
 * @param b Số b
 * @returns Trả về kết quả so sánh
 */
function cnsosanh(a: number, b: number): string {
    let ketqua: string = "";
    if (a === b)
        ketqua = "Bang";
    else if (a > b)
        ketqua = "Lon";
    else
        ketqua = "Nho";
    return ketqua
}
/**
 * Hàm so sánh số a so với số b
 */
function sosanh(): void {
    let a: number = Number(question("Nhap so thu nhat: "))
    let b: number = Number(question("Nhap so thu hai: "))
    console.log(cnsosanh(a,b));
}

sosanh();