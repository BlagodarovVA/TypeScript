function calculate(a: number, b: number): number {
	return a * b;
}

type CalculateRT = ReturnType<typeof calculate>;

let anotherRes: CalculateRT = 5;

type CalculatePT = Parameters<typeof calculate>;
type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<<T>(arg: T) => T>;

class Example {
	constructor(a: number) {}
}

type T0 = ConstructorParameters<typeof Example>;