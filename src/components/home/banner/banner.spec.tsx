import { render, screen } from "@testing-library/react";
import { Banner } from "./banner";
import "@testing-library/jest-dom";

describe("Banner", () => {
  it("renders banenr", () => {
    render(<Banner />);

    const heading = screen.getByRole("heading", {
      name: /FullStack \| Engineer \| Educator \| EdTech/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
