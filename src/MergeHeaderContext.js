import React, { useState, createContext } from "react";

export const MergeHeaderContext = createContext(true);

export const MergeHeaderProvider = (props) => {
	const [stateMergeHeader, setStateMergeHeader] = useState(true);

	return (
		<MergeHeaderContext.Provider
			value={[stateMergeHeader, setStateMergeHeader]}
		>
			{props.children}
		</MergeHeaderContext.Provider>
	);
};
