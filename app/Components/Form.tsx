import React, { ChangeEvent, useEffect, useState } from "react";
import SelectDropdown from "../UI/SelectDropdown ";

import axios from "axios";
import { usefetchSub } from "@/app/hooks/usefetchSub";
import useModel from "@/app/hooks/useModel";
import useGetMainCategory from "@/app/hooks/useGetMainCategory";
import MyModal from "../UI/MyModal";
import { IUserSubmit } from "@/types";
type Props = {};

const Form = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  function OpenModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  // States
  const [userSubmit, setUserSubmit] = useState<IUserSubmit | any>({
    main_category: "",
    sub_category: "",
    process_type: "",
    model: "",
    brand: "",
    type: "",
    transmission_type: "",
  });

  const [categoriesId, setCategoriesId] = useState("");
  const [subCatId, setSubCatId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [Model, setModelId] = useState("");
  const [processType, setProcessType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [type, setType] = useState("");

  // Hooks
  const {
    handleDynamicallyChangeprosesSelect,
    handleDynamicallyChangeBrandSelect,
    handleDynamicallyChangeTransmissionTypeSelect,
  } = usefetchSub(+subCatId);

  const { handleDynamicallyChangeModelSelect, typeData } = useModel(
    +brandId,
    +Model
  );

  const { categories, handleDynamicallyChangeSecondeSelect } =
    useGetMainCategory(categoriesId);

  const hnadleMainCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, main_category: selectedOption });

    if (value) setCategoriesId(value);
  };

  const handleSubcategoryId = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, sub_category: selectedOption });

    setSubCatId(value);
  };
  const handletransmissionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, transmission_type: selectedOption });

    setTransmission(value);
  };
  const handletypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, type: selectedOption });

    setType(value);
  };
  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, brand: selectedOption });
    setBrandId(value);
  };
  const handlemodelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, model: selectedOption });

    setModelId(value);
  };

  const handleProcessTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedOption = e.target.selectedOptions[0].textContent;
    setUserSubmit({ ...userSubmit, process_type: selectedOption });

    setProcessType(value);
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
                options={categories}
                onChange={hnadleMainCategoryChange}
                value={categoriesId}
                label={"Main Category"}
                mandatory
              />
            </div>

            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeSecondeSelect()}
                onChange={handleSubcategoryId}
                value={subCatId}
                label={"Sub Category"}
                mandatory
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeprosesSelect()}
                onChange={handleProcessTypeChange}
                value={processType}
                label={"Process Type"}
                other
              />
              {processType === "other" && (
                <>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Form User"
                  />
                </>
              )}
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeBrandSelect()}
                onChange={handleBrandChange}
                value={brandId}
                label={"Brand"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeModelSelect()}
                onChange={handlemodelChange}
                value={Model}
                label={"Model"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={typeData}
                onChange={handletypeChange}
                value={type}
                label={"Type"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeTransmissionTypeSelect()}
                onChange={handletransmissionChange}
                value={transmission}
                label={"Transmission Type"}
              />
            </div>
            <button
              onClick={OpenModal}
              className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <MyModal userSubmit={userSubmit} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default Form;
