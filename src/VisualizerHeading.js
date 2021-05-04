import React from "react";
import "./VisualizerHeading.css";

function VisualizerHeading() {
	return (
		<div>
			<div className="heading__wrapper">
				<div>Sorting Algorithm Visualizer</div>
				<div className="subheading__wrapper">
					<div className="subheading">
						To change size, drag slider. To start, click on the sort and then
						click on the visual.
					</div>
					<div className="subheading">
						Click a sort heaing again to randomize!
					</div>
				</div>
			</div>
		</div>
	);
}

export default VisualizerHeading;
