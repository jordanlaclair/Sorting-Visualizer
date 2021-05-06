import React from "react";
import "./Footer.css";

function Footer({ setID, setState, setMergeHeaderState }) {
	return (
		<div className="footer__wrapper">
			<div
				onClick={() => {
					setState("Quick Sort");
					setID(Math.random().toString());
				}}
				className="button"
			>
				Quick Sort
			</div>

			<div
				onClick={() => {
					setState("Merge Sort");
					setID(Math.random().toString());
					setMergeHeaderState(true);
				}}
				className="button"
			>
				Merge Sort
			</div>
			<div
				onClick={() => {
					setState("Home");
					setID(Math.random().toString());
				}}
				className="button"
			>
				Home
			</div>
			<div
				onClick={() => {
					setState("Bubble Sort");
					setID(Math.random().toString());
				}}
				className="button"
			>
				Bubble Sort
			</div>
			<div
				onClick={() => {
					setState("Heap Sort");
					setID(Math.random().toString());
				}}
				className="button"
			>
				Heap Sort
			</div>
		</div>
	);
}

export default Footer;
