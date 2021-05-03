import React from "react";
import "./mergeSortHeading.css";

function MergeSortHeading({ setSliderState }) {
	setSliderState(true);
	return (
		<div>
			<div className="heading__wrapper">
				<div class="heading">Merge Sort Visualizer</div>

				<div class="subheading">Drag slider to start and change size!</div>
			</div>
		</div>
	);
}

export default MergeSortHeading;
