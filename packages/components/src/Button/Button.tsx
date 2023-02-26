import React from "react";
import { Button as StyledButton, ButtonText } from "@bennytestui1/styles";

interface ButtonProps {
	label: string;
	onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick}>
			<ButtonText>{label}</ButtonText>
		</StyledButton>
	);
};

export default Button;
