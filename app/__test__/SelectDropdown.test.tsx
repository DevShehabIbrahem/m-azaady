// SelectDropdown.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import SelectDropdown from "../Components/SelectDropdown ";

test("renders the select dropdown with options", () => {
  const options = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  const { getByLabelText, getByText } = render(
    <SelectDropdown
      label="Options"
      options={options}
      value={""}
      onChange={() => {}}
    />
  );

  const selectElement = getByLabelText("Options");
  expect(selectElement).toBeInTheDocument();

  // Check if options are rendered
  options.forEach((option) => {
    const optionElement = getByText(option.name);
    expect(optionElement).toBeInTheDocument();
  });
});

// You can add more test cases for different scenarios here
