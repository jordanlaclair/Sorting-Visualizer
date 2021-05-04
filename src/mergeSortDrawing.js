export default function sketch(p) {
	let colorState = [];

	p.slider = p.createSlider(30, 200, 100);
	p.slider.position(800, 10);
	p.slider.style("width", "20rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});
	let data = [];
	let numOfRects = 16;
	let rectWidth;
	let startSort = false;
	var mouseIsDragged = false;

	p.slider.mouseMoved(() => {
		if (mouseIsDragged) {
			numOfRects = p.slider.value();
			rectWidth = p.floor(p.width / numOfRects);
			data = new Array(p.floor(p.width / rectWidth));
			for (let i = 0; i < data.length; i++) {
				data[i] = p.random(p.height);
			}
			p.setup();
			p.draw();
			p.sleep();
		}
	});
	p.slider.mouseReleased(() => {
		mouseIsDragged = false;
		p.slider.hide();
		startSort = true;
	});

	p.setup = async () => {
		p.noLoop();
		const canvas = p.createCanvas(p.windowWidth, 800);
		p.frameRate(60);

		canvas.mousePressed(function () {
			p.loop();
		});
	};

	let mergeSort = async (a) => {
		p.copy = a.slice();
		mergeSortSlice(p.copy, 0, p.copy.length);
		return;
	};

	let mergeSortSlice = async (a, start, end) => {
		if (end - start <= 1) return;

		var mid = Math.round((end + start) / 2);

		await mergeSortSlice(a, start, mid);
		await mergeSortSlice(a, mid, end);

		let i = start,
			j = mid;

		colorState[j] = 0;

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

			await p.sleep(7);
		}

		if (start === 0 && end === a.length) {
			p.slider.show();
		}
	};

	p.draw = () => {
		if (startSort) {
			startSort = false;

			rectWidth = Math.floor(p.width / numOfRects);
			data = new Array(Math.floor(p.width / rectWidth));
			for (let i = 0; i < data.length; i++) {
				data[i] = p.random(p.height);
				colorState[i] = -1;
			}

			mergeSort(data);
		}

		p.background(22);
		p.stroke(0);
		for (let i = 0; i < data.length; i++) {
			if (colorState[i] === 0) {
				//sorted
				p.fill("#D5F7BC");
			} else {
				//unsorted
				p.fill(255);
			}
			p.rect(i * rectWidth, p.height - data[i], rectWidth, data[i]);
		}
	};

	p.sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
}
