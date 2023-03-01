import * as React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
	it("should render button with label", () => {
		const { getByText } = render(
			<Button onClick={() => {}} label="Click me" />
		);
		expect(getByText("Click me")).toBeInTheDocument();
	});
});
