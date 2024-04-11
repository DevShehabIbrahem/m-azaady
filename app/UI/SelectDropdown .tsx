import React from "react";

const SelectDropdown = ({
  label,
  options,
  value,
  onChange,
  other,
  mandatory,
}: any) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="select" className="mb-2 text-sm font-medium">
        {label} {mandatory && <sup className="text-red-500">*</sup>}
      </label>
      <select
        id="select"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options?.map((option: any) => (
          <option key={(option.id, option.name)} value={option.id}>
            {option.name}
          </option>
        ))}
        {other && <option value="other">Other</option>}
      </select>
    </div>
  );
};

export default SelectDropdown;
