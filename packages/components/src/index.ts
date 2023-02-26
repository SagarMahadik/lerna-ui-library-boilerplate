import { styled, motion } from "@bennytestui1/styles";
import { Button } from "./Button";

const AnimatedButton = styled(motion.button)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	width: 100px;
	height: 200px;
	background-color: #000;
	color: #fff;
	font-size: 16px;
	font-weight: 800;
	width: 100px;
	height: 200px;
`;

export { AnimatedButton, Button };
