import HomePage from "../pages/index";
import { render } from "@testing-library/react";

describe(HomePage.name, () => {
  it("should render correctly", () => {
    render(<HomePage />);
  });

  it("should display page title", () => {
    const context = render(<HomePage />);
    expect(context.getByRole("heading")).toHaveTextContent(
      /Game of Typescript Life/i
    );
  });
});
