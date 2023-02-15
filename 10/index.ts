const currRate: string = "1.07";

const fetchCurr = (response: string): number => {
	const data: number = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		console.log(res);
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.02);
