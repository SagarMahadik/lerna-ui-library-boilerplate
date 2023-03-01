import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";
import type { TextAreaProps } from "./TextArea";

export default {
	title: "Components/TextArea",
	component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
	<TextArea {...args} />
);
export const Default = Template.bind({});
export const WithPlaceholder = Template.bind({});

Default.args = {
	text: "Hello World",
};

WithPlaceholder.args = {
	text: "Enter text here",
};
