import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import mergeSortDrawing from "./mergeSortDrawing";
import VisualizerHeading from "./VisualizerHeading";
import quickSortDrawing from "./quickSortDrawing";
import bubbleSortDrawing from "./bubbleSortDrawing";
import heapSortDrawing from "./heapSortDrawing";
import Footer from "./Footer";
import "./App.css";

function App() {
	const [id, setID] = useState("123");
	const [state, setState] = useState("Home");
	const [stateHeader, setStateHeader] = useState(true);
	const [sliderState, setSliderState] = useState(true);

	let removeHeader = (e) => {
		e.preventDefault();
		setStateHeader(false);
		setSliderState(false);
	};

	return (
		<div>
			<div className="page__container">
				{state === "Merge Sort" ? (
					<div>
						<div
							onMouseOver={removeHeader}
							style={sliderState === false ? { display: "none" } : null}
							className="slider"
						>
							1
						</div>
						<P5Wrapper key={id} sketch={mergeSortDrawing}></P5Wrapper>
					</div>
				) : state === "Quick Sort" ? (
					<P5Wrapper key={id} sketch={quickSortDrawing}></P5Wrapper>
				) : state === "Bubble Sort" ? (
					<P5Wrapper key={id} sketch={bubbleSortDrawing}></P5Wrapper>
				) : state === "Home" ? (
					<div className="merge__header">
						<VisualizerHeading />
					</div>
				) : state === "Heap Sort" ? (
					<P5Wrapper key={id} sketch={heapSortDrawing}></P5Wrapper>
				) : null}

				<Footer
					setState={setState}
					setStateHeader={setStateHeader}
					setID={setID}
				/>
			</div>
		</div>
	);
}

export default App;
