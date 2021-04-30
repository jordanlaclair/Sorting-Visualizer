import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import mergeSortDrawing from "./mergeSortDrawing";
import Footer from "./Footer";
import "./App.css";

function App() {
	const [active, setActive] = useState("mergeSort");

	return (
		<div>
			<div className="page__container">
				<P5Wrapper sketch={mergeSortDrawing}></P5Wrapper>;
				<Footer />
			</div>
		</div>
	);
}

export default App;
