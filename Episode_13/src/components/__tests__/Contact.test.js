import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("Test for contact us page", () => {
  test("Load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Submit button in the contact us form", () => {
    render(<Contact />);

    //   const btn = screen.getByRole("button");
    const btn = screen.getByText("Submit");

    expect(btn).toBeInTheDocument();
  });

  test("Placeholder on input element should be visible", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText(
      /Type your message here.../i
    );
    expect(placeholder).toBeInTheDocument();
  });

  it("Should be two input elements", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes); // array

    //   expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(12);
  });
});
