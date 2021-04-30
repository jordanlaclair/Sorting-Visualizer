export default function sketch(p) {
	let numOfRects = 100;
	let rectWidth;
	let data = [];
	let startSort = true;
	p.setup = async () => {
		const canvas = p.createCanvas(p.windowWidth, 800);
		p.frameRate(60);
		if (startSort) {
			p.noLoop();
		}
		canvas.mousePressed(function () {
			p.loop();
		});
	};

	p.draw = () => {
		if (startSort) {
			startSort = false;

			rectWidth = Math.floor(p.width / numOfRects);
			data = new Array(Math.floor(p.width / rectWidth));
			for (let i = 0; i < data.length; i++) {
				data[i] = p.random(p.height);
			}

			p.mergeSort(data);
		}

		p.background(22);
		p.stroke(0);
		p.fill(255);
		for (let i = 0; i < data.length; i++) {
			p.rect(i * rectWidth, p.height - data[i], rectWidth, data[i]);
		}
	};

	p.mergeSort = async (a) => {
		p.copy = a.slice();
		p.mergeSortSlice(p.copy, 0, p.copy.length);
		return;
	};

	p.mergeSortSlice = async (a, start, end) => {
		if (end - start <= 1) return;

		var mid = Math.round((end + start) / 2);

		await p.mergeSortSlice(a, start, mid);
		await p.mergeSortSlice(a, mid, end);

		let i = start,
			j = mid;
		while (i < end && j < end) {
			if (a[i] > a[j]) {
				let t = a[j];
				a.splice(j, 1);
				a.splice(i, 0, t);
				j++;
			}
			i++;
			if (i === j) j++;

			data = a.slice();

			await p.sleep(25);
		}
	};

	p.sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
}
