export default function sketch(p) {
	let items = [];
	let w = 16;

	p.setup = () => {
		p.noLoop();
		const canvas = p.createCanvas(p.windowWidth, 800);
		p.frameRate(60);

		canvas.mousePressed(function () {
			p.loop();
		});
	};

	p.swap = async (arr, a, b) => {
		await p.sleep(35);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	};

	p.heapify = (a, n, i) => {
		let largest = i;
		let l = 2 * i + 1;
		let r = 2 * i + 2;

		if (l < n && a[l] > a[largest]) {
			largest = l;
		}

		if (r < n && a[r] > a[largest]) {
			largest = r;
		}

		if (largest !== i) {
			let tmp = a[i];
			a[i] = a[largest];
			a[largest] = tmp;

			items.push(a.slice());

			p.heapify(a, n, largest);
		}
	};

	p.heapSort = (a) => {
		for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--) {
			p.heapify(a, a.length, i);
		}

		for (let i = a.length - 1; i >= 0; i--) {
			let tmp = a[0];
			a[0] = a[i];
			a[i] = tmp;

			items.push(a.slice());

			p.heapify(a, i, 0);
		}
	};

	p.draw = () => {
		p.background(22);

		for (let i = 0; i < items.length; i++) {
			p.rect(i * w, p.height - items[i], w, items[i]);
		}
	};

	p.sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
}
