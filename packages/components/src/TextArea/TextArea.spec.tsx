import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./TextArea";

describe("TextArea", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<TextArea text="Hello World" />);
		expect(baseElement).toBeTruthy();
	});
});
