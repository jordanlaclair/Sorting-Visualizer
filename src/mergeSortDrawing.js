function sketch(p) {
	let colorState = [];

	p.slider = p.createSlider(30, 200, 100);
	let slider = p.slider;
	slider.parent("myContainer");
	p.slider.position(800, 10);
	p.slider.style("width", "20rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});
	let canvas;
	let data = [];
	let numOfRects = 100;
	let rectWidth;
	let startSort = false;
	var mouseIsDragged = false;

	if (startSort == true) {
		p.start = () => {
			rectWidth = Math.floor(p.width / numOfRects);
			data = new Array(Math.floor(p.width / rectWidth));
			for (let i = 0; i < data.length; i++) {
				data[i] = p.random(p.height);
				colorState[i] = -1;
			}

			mergeSort(data);
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
	}

	p.slider.mouseReleased(() => {
		startSort = true;
		mouseIsDragged = false;
		p.slider.hide();
	});

	p.slider.mouseMoved(() => {
		if (mouseIsDragged) {
			data = [];
			colorState = [];
			canvas = 0;
			rectWidth = 0;
			numOfRects = p.slider.value();
			rectWidth = Math.floor(p.width / numOfRects);
			data = new Array(Math.floor(p.width / rectWidth));
			for (let i = 0; i < data.length; i++) {
				data[i] = p.random(p.height);
				colorState[i] = -1;
			}

			p.setup();
			p.draw();
			p.sleep();
		}
	});

	p.setup = async () => {
		canvas = p.createCanvas(p.windowWidth, 800);

		canvas.mousePressed(function () {
			p.loop();
		});
		p.noLoop();
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
export default sketch;
