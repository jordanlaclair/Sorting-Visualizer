import React from "react";
import "./VisualizerHeading.css";

function VisualizerHeading() {
	return (
		<div>
			<div className="heading__wrapper">
				<div className="heading__title">Sorting Algorithm Visualizer</div>
				<div className="subheading__wrapper">
					<div className="subheading">To change size, drag slider.</div>
					<div className="subheading">
						To start, click on the sort and then click on the visual.
					</div>
					<div className="subheading">
						Click a sort heading again to randomize!
					</div>
				</div>
			</div>
		</div>
	);
}

export default VisualizerHeading;
