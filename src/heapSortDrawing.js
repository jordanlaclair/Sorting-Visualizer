export default function sketch(p) {
	let data = [];
	let begin = false;
	let i = 250;
	let complete = false;
	let colorsState = [];
	let q;
	let s;
	var mouseIsDragged = false;

	p.slider = p.createSlider(200, 1000, 250);
	p.slider.position(20, 10);
	p.slider.style("width", "10rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});

	p.slider.mouseMoved(() => {
		if (mouseIsDragged) {
			i = p.slider.value();
			begin = false;
			complete = false;
			colorsState = [];
			data = [];

			p.setup();
			p.draw();
		}
	});
	p.slider.mouseReleased(() => {
		mouseIsDragged = false;
		p.slider.hide();
	});

	//these three functions are for mobile
	p.slider.touchStarted(() => {
		mouseIsDragged = true;
	});

	p.slider.touchMoved(() => {
		if (mouseIsDragged) {
			i = p.slider.value();
			begin = false;
			complete = false;
			colorsState = [];
			data = [];

			p.setup();
			p.draw();
		}
	});
	p.slider.touchEnded(() => {
		mouseIsDragged = false;
		p.slider.hide();
	});

	p.setup = () => {
		const canvas = p.createCanvas(p.windowWidth, 800);
		q = p.createP("0");
		for (let j = 0; j <= p.ceil(Math.log2(i)); j++) {
			//assigns random colorsState
			colorsState[j] = {
				r: p.random(0, 255),
				g: p.random(0, 200),
				b: p.random(0, 255),
			};
		}
		for (let j = 0; j < i; j++) {
			//if there are errors later on, change this line
			data.push(p.floor((p.height - 7) * p.random()));
		}
		s = p.floor(data.length / 2);
		canvas.mousePressed(function () {
			p.loop();
		});
		p.noLoop();
	};

	p.swap = (i, j) => {
		const temp = data[i];
		data[i] = data[j];
		data[j] = temp;
	};
	p.makeHeap = (j) => {
		if (j >= 0) {
			p.maxHeapify(j);
			s--;
		} else {
			begin = true;
			i = data.length - 1;
		}
	};
	p.sortHeap = async (size) => {
		// move current root to end
		p.swap(size, 0);
		// call max heapify on the reduced heapSort
		p.maxHeapify(0);
		i--;
	};
	// to heapify a subtree
	p.maxHeapify = (index) => {
		const left = index * 2;
		const right = index * 2 + 1;
		let largest = -1;
		// if left child is larger than root
		if (left < i && data[left] > data[index]) {
			largest = left;
		} else {
			largest = index;
		}
		// if right child is larger than max
		if (right < i && data[right] > data[largest]) {
			largest = right;
		}
		// if max is not root
		if (largest !== index) {
			p.swap(largest, index);
			// recursively heapify the affected sub-tree
			p.maxHeapify(largest);
		}
	};
	p.draw = async () => {
		p.background(0);
		//to start sorting
		if (!begin) {
			p.makeHeap(s);
		} else if (!complete && begin) {
			await p.sortHeap(i);
		}
		if (i < 0) {
			//mark as finished and show slider again
			complete = true;
			p.slider.show();
		}
		let horizontalRes = p.width / data.length;
		for (let j = 0; j < data.length; j++) {
			const item = data[j];
			if (j === 0) {
				const color = colorsState[0];
				p.fill(color.r, color.g, color.b);
			} else if (j < i) {
				const level = p.floor(Math.log2(j) + 1);
				const color = colorsState[level];
				p.fill(color.r, color.g, color.b);
			} else {
				p.fill(0, 255, 0);
			}
			p.stroke(255);
			p.strokeWeight(0.01);
			p.rect(j * horizontalRes, p.height, horizontalRes, -1 * item);
		}
		q.remove();
	};
}
