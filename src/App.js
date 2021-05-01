import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import mergeSortDrawing from "./mergeSortDrawing";
import quickSortDrawing from "./quickSortDrawing";
import Footer from "./Footer";
import "./App.css";

function App() {
	const [id, setID] = useState("123");
	const [state, setState] = useState("Merge Sort");
	return (
		<div>
			<div className="page__container">
				{state === "Merge Sort" ? (
					<P5Wrapper key={id} sketch={mergeSortDrawing}></P5Wrapper>
				) : (
					<P5Wrapper key={id} sketch={quickSortDrawing}></P5Wrapper>
				)}

				<Footer setState={setState} setID={setID} />
			</div>
		</div>
	);
}

export default App;
