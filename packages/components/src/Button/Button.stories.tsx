import React from "react";
import { Button, ButtonProps } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Components/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
	<Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	label: "Primary Button",
	onClick: () => {
		console.log("Primary button clicked");
	},
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Secondary Button",
	onClick: () => {
		console.log("Secondary button clicked");
	},
};
