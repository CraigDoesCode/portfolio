import { render, screen } from "@testing-library/react";
import { NavBar } from "./navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders navbar", () => {
    render(<NavBar />);

    const heading = screen.getByRole("heading", {
      name: /CRAIG NORFORD/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
