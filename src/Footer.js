import React from "react";
import "./Footer.css";

function Footer({ setID, setState }) {
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
				}}
				className="button"
			>
				Merge Sort
			</div>
		</div>
	);
}

export default Footer;
