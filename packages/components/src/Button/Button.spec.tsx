/**
 * @jest-environment jsdom
 */

const { render } = require("@testing-library/react");
import { Button } from "./Button";
import React from "react";
// import "@testing-library/jest-dom";

// Mock the styled component
describe("Button", () => {
	it("should render the button", () => {
		const { container } = render(
			<Button onClick={() => {}} label="Click me" />
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
