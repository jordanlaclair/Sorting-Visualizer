export default function sketch(p) {
	p.slider = p.createSlider(20, 50, 20);
	p.slider.position(800, 10);
	p.slider.style("width", "20rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});

	let values = [];
	let w = 50;
	let i = 0;
	var mouseIsDragged = false;

	p.slider.mouseMoved(() => {
		if (mouseIsDragged) {
			w = p.slider.value();
			p.setup();
			p.draw();
			p.sleep();
		}
	});

	p.slider.mouseReleased(() => {
		mouseIsDragged = false;
	});

	p.setup = async () => {
		p.noLoop();

		const canvas = p.createCanvas(p.windowWidth, 800);

		values = new Array(p.floor(w));
		for (let i = 0; i < values.length; i++) {
			values[i] = p.random(p.height);
			//values[i] = noise(i/100.0)*height;
		}

		canvas.mousePressed(function () {
			p.loop();
		});
	};

	p.draw = () => {
		p.background(0);
		i = 0;
		if (i < values.length) {
			for (let j = 0; j < values.length - i - 1; j++) {
				let a = values[j];
				let b = values[j + 1];
				if (a > b) {
					p.swap(values, j, j + 1);
				}
			}
		}
		i++;

		for (let i = 0; i < values.length; i++) {
			p.rect(i * w, p.height - values[i], w, values[i]);
		}
	};

	p.sleep = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	p.swap = async (arr, a, b) => {
		let temp = arr[a];

		arr[a] = arr[b];
		arr[b] = temp;
	};
}
