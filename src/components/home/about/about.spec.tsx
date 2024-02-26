import { render, screen } from "@testing-library/react";
import { About } from "./about";
import "@testing-library/jest-dom";

describe("About", () => {
  it("renders about", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: /About Me/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
