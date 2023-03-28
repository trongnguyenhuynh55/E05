import { question } from "readline-sync";
/**
 * Hàm kiểm tra tam giác đều
 * @param a Cạnh thứ nhất
 * @param b Cạnh thứ hai
 * @param c Cạnh thứ ba
 * @returns true nếu là tam giác đều, false nếu không phải
 */
function cntamgiacdeu(a: number, b: number, c: number ): boolean {
    let ketqua: boolean = true
    if (a === b && b === c)
        ketqua = true;
    else 
        ketqua = false;
    return ketqua
}
/**
 * Hàm tính tam giác đều
 */
function tamgiacdeu(): void {
    let a: number = Number(question("Nhap canh thu nhat: "))
    let b: number = Number(question("Nhap canh thu hai: "))
    let c: number = Number(question("Nhap canh thu ba: "))
    console.log(cntamgiacdeu(a,b,c));
}

tamgiacdeu();