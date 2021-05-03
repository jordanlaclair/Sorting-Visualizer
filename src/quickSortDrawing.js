export default function sketch(p) {
	let data = [];

	let w = 16;
	let colorState = [];
	var mouseIsDragged = false;
	p.slider = p.createSlider(-50, -5, -16);
	p.slider.position(800, 10);
	p.slider.style("width", "20rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});

	p.slider.mouseMoved(() => {
		if (mouseIsDragged) {
			w = Math.abs(p.slider.value());
			p.setup();
			p.draw();
			p.sleep();
		}
	});

	p.slider.mouseReleased(() => {
		mouseIsDragged = false;
	});

	p.setup = async () => {
		const canvas = p.createCanvas(p.windowWidth, 800);

		data = new Array(p.floor(p.width / w));
		for (let i = 0; i < data.length; i++) {
			data[i] = p.random(p.height);
			colorState[i] = -1;
		}

		quickSort(data, 0, data.length - 1);
		canvas.mousePressed(function () {
			p.loop();
		});

		p.noLoop();
	};

	let quickSort = async (arr, start, end) => {
		if (start >= end) {
			return;
		}
		let index = await partition(arr, start, end);
		colorState[index] = -1;

		await Promise.all([
			quickSort(arr, start, index),
			quickSort(arr, index + 1, end),
		]);
	};

	let partition = async (arr, left, right) => {
		for (let i = left; i < right; i++) {
			colorState[i] = 1;
		}

		const pivot = arr[Math.floor((left + right) / 2)];
		const pivotIndex = Math.floor((left + right) / 2);
		colorState[pivotIndex] = 0;
		while (true) {
			while (arr[left] < pivot) {
				left++;
			}

			while (arr[right] > pivot) {
				right--;
			}

			if (left >= right) {
				return right;
			}

			await p.swap(arr, left, right);
		}
	};

	p.draw = () => {
		//black background
		p.background(0);

		for (let i = 0; i < data.length; i++) {
			//for pivot
			if (colorState[i] === 0) {
				p.fill("#F46B73");

				//for unsorted
			} else if (colorState[i] === 1) {
				p.fill("#D5F7BC");
			} else {
				//for sorted
				p.fill(255);
			}
			p.rect(i * w, p.height - data[i], w, data[i]);
		}
	};

	p.sleep = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	p.swap = async (arr, a, b) => {
		//how long the delay is
		await p.sleep(35);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	};
}
