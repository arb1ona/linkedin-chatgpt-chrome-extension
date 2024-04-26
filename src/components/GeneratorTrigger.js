import React, { useState } from "react";
import Generator from "./Generator"; // Adjust the import path as necessary

function GeneratorTrigger({ setPage, resume, openAIKey }) {
	const [showGenerator, setShowGenerator] = useState(false);

	const containerStyle = {
		position: "fixed", // Fixed position relative to the viewport
		bottom: "10px", // 10 pixels from the bottom
		right: "10px", // 10 pixels from the right
		zIndex: 1000, // High z-index to ensure it's on top of other content
	};

	const tooltipStyle = {
		position: "absolute",
		bottom: "100%",
		right: "0",
		width: "auto",
		maxWidth: "90%",
		padding: "10px",
		background: "white",
		border: "1px solid black",
		boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
		zIndex: 1001,
	};

	return (
		<div style={containerStyle}>
			<button
				onMouseOver={() => setShowGenerator(true)}
				onMouseOut={() => setShowGenerator(false)}
				style={{
					padding: "10px",
					fontSize: "16px",
					backgroundColor: "#ADD8E6",
				}}
			>
				Show Generator
			</button>
			{showGenerator && (
				<div style={tooltipStyle}>
					<Generator setPage={setPage} resume={resume} openAIKey={openAIKey} />
				</div>
			)}
		</div>
	);
}

export default GeneratorTrigger;
