function xinChao(name: string, year: number): number {
    console.log("Xin chao minh ten la " + name);
    console.log("Minh sinh nam " + year);
    console.log("Rat vui duoc gap.");
	const tuoi: number = 2023 - year;
    return tuoi;
}

console.log(`Tuoi: ${xinChao("Nguyen", 1999)}`);