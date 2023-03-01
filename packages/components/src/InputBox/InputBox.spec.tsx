import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputBox from "./InputBox";

describe("InputBox", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<InputBox text="Hello World" />);
		expect(baseElement).toBeTruthy();
	});
});
