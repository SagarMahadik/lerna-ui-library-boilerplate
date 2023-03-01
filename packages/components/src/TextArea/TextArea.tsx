import * as React from "react";
interface TextAreaProps {
	// Add props here
	text: string;
}

const TextArea = (props: TextAreaProps) => {
	return (
		<>
			<div
				style={{
					backgroundColor: "red",
					color: "white",
					padding: "10px",
					width: "100px",
					height: "100px",
				}}
			>
				<h1
					style={{
						fontSize: "20px",
						fontWeight: "bold",
					}}
				>
					{props.text}
				</h1>
			</div>
		</>
	);
};
export { TextArea };
export type { TextAreaProps };
export default TextArea;
