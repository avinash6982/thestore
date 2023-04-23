import { render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";

test("renders learn react link", () => {
  render(<ItemCard />);
  screen.getByTestId("thumb-image");
});
