import React, { ChangeEvent, useEffect, useState } from "react";
import SelectDropdown from "../../UI/SelectDropdown ";

import { useMainCategoryQuery } from "../hooks/useMainCategoryQuery";
import { useSubCategory } from "../hooks/useSubCategory";
import useProcessType from "../hooks/useProcessType";
import useBarnd from "../hooks/useBarnd";
import axios from "axios";

type Props = {};

const Form = (props: Props) => {
  // States
  const [maincategory, setMaincategory] = useState("");
  const [submaincategory, setSubmaincategory] = useState("");
  const { data: mainCategoryData, refetch } = useMainCategoryQuery();

  const { dynamicSubCategoryArray } = useSubCategory(maincategory);
  const { dynamicPropertyCategoryArray } = useProcessType();

  const { dynamicBrandCategoryArray } = useBarnd(maincategory, submaincategory);

  const hnadleMainCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value) setMaincategory(value);
  };

  useEffect(() => {
    refetch(); // Refetch data whenever mainCategoryId changes
  }, [maincategory, submaincategory, refetch]);

  const hnadlesubCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value) {
      setSubmaincategory(value);
      refetch();
    }
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Mazaady form
        </h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="">
            <div className="mb-5">
              <SelectDropdown
                options={mainCategoryData}
                onChange={hnadleMainCategoryChange}
                value={maincategory}
                label={"Main Category"}
              />
            </div>

            <div className="mb-5">
              <SelectDropdown
                options={dynamicSubCategoryArray}
                onChange={hnadlesubCategoryChange}
                value={submaincategory}
                label={"Sub Category"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={dynamicPropertyCategoryArray}
                // onChange={hnadlesubMainCategoryChange}
                // value={submaincategory}
                label={"Process Type"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={dynamicBrandCategoryArray}
                // onChange={hnadlesubMainCategoryChange}
                // value={submaincategory}
                label={"Brand"}
              />
            </div>
            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
