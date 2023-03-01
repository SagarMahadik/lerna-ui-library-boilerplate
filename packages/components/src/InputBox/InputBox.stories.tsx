import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputBox from "./InputBox";
import type { InputBoxProps } from "./InputBox";

export default {
	title: "Components/InputBox",
	component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args: InputBoxProps) => (
	<InputBox {...args} />
);
export const Default = Template.bind({});
