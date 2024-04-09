import React from "react";
import { render } from "@testing-library/react";
import Button from "../Components/Button";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

test("renders button with default class and children", () => {
  const { getByText } = render(<Button>Hello</Button>);
  const buttonElement = getByText("Hello");

  // Assert that the button has the default class
  expect(buttonElement).toHaveClass(
    "bg-gradient-to-r from-[#d82947] to-orange-400 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
  );

  // Assert that the button has the correct children
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with additional class and width", () => {
  const { getByText } = render(
    <Button className="custom-class" width="w-full">
      Click Me
    </Button>
  );
  const buttonElement = getByText("Click Me");

  // Assert that the button has the additional class and width class
  expect(buttonElement).toHaveClass(
    "bg-gradient-to-r from-[#d82947] to-orange-400 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 custom-class w-full"
  );

  // Assert that the button has the correct children
  expect(buttonElement).toBeInTheDocument();
});
