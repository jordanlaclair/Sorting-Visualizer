import React, { useState, useContext } from "react";
import P5Wrapper from "react-p5-wrapper";
import mergeSortDrawing from "./mergeSortDrawing";
import VisualizerHeading from "./VisualizerHeading";
import quickSortDrawing from "./quickSortDrawing";
import bubbleSortDrawing from "./bubbleSortDrawing";
import heapSortDrawing from "./heapSortDrawing";
import { MergeHeaderContext } from "./MergeHeaderContext";
import Footer from "./Footer";
import "./App.css";

function App() {
	const [id, setID] = useState("123");
	const [state, setState] = useState("Home");
	const [stateMergeHeader, setStateMergeHeader] = useContext(
		MergeHeaderContext
	);

	var mouseIsDragged = false;
	let mousePressed = () => {
		mouseIsDragged = true;
		setStateMergeHeader(false);
	};
	let mouseReleased = () => {
		mouseIsDragged = false;
	};

	let mouseMoved = () => {
		if (mouseIsDragged) {
			setStateMergeHeader(false);
		}
	};

	return (
		<div>
			<div className="page__container">
				{state === "Merge Sort" ? (
					<div>
						<div
							id="myContainer"
							onMouseDown={mousePressed}
							onMouseUp={mouseReleased}
							onMouseMove={mouseMoved}
							onTouchStart={mousePressed}
							onTouchEnd={mouseReleased}
							onTouchMove={mouseMoved}
						></div>

						<div className="merge__header">
							<div class="merge__header__wrapper">
								<div
									style={
										stateMergeHeader
											? { display: "block" }
											: { display: "none" }
									}
								>
									Drag Slider to start Merge Sort!
								</div>
							</div>
						</div>
						<P5Wrapper key={id} sketch={mergeSortDrawing}></P5Wrapper>
					</div>
				) : state === "Quick Sort" ? (
					<P5Wrapper key={id} sketch={quickSortDrawing}></P5Wrapper>
				) : state === "Bubble Sort" ? (
					<P5Wrapper key={id} sketch={bubbleSortDrawing}></P5Wrapper>
				) : state === "Heap Sort" ? (
					<P5Wrapper key={id} sketch={heapSortDrawing}></P5Wrapper>
				) : state === "Home" ? (
					<VisualizerHeading />
				) : null}

				<Footer
					setMergeHeaderState={setStateMergeHeader}
					setState={setState}
					setID={setID}
				/>
			</div>
		</div>
	);
}

export default App;
