import React from "react";
import "./VisualizerHeading.css";

function VisualizerHeading({ setSliderState }) {
	setSliderState(true);
	return (
		<div>
			<div className="heading__wrapper">
				<div class="heading">Sorting Algorithm Visualizer</div>

				<div class="subheading">
					To change size, drag slider. To start, click on the visual or drag
					slider.
				</div>
				<div class="subheading">Click the sort heaing again to randomize!</div>
			</div>
		</div>
	);
}

export default VisualizerHeading;
