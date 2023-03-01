import * as React from "react";
interface InputBoxProps {
	// Add props here
	text: string;
}

const InputBox = (props: InputBoxProps) => {
	return (
		<>
			<div
				style={{
					backgroundColor: "pink",
					padding: "10px",
					width: "100px",
					height: "100px",
				}}
			>
				<h1
					style={{
						color: "black",
						fontSize: "20px",
					}}
				>
					{props.text}
				</h1>
			</div>
		</>
	);
};
export { InputBox };
export type { InputBoxProps };
export default InputBox;
