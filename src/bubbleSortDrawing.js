export default function sketch(p) {
	p.slider = p.createSlider(-50, -5, -10);
	p.slider.position(800, 10);
	p.slider.style("width", "20rem");
	p.slider.mousePressed(() => {
		mouseIsDragged = true;
	});

	let values = [];
	let w = 10;
	let i = 0;
	var mouseIsDragged = false;

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

	p.setup = () => {
		const canvas = p.createCanvas(p.windowWidth, 800);

		values = new Array(p.floor(p.width / w));
		for (let i = 0; i < values.length; i++) {
			values[i] = p.random(p.height);
		}

		canvas.mousePressed(function () {
			p.loop();
		});

		p.noLoop();
	};

	p.draw = () => {
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

		p.background(22);

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
