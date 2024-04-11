import { ChangeEvent, MouseEvent, useState } from "react";
import SelectDropdown from "../UI/SelectDropdown ";

import useModel from "@/app/hooks/useModel";
import useGetMainCategory from "@/app/hooks/useGetMainCategory";
import MyModal from "../UI/MyModal";
import { IUserId, IUserSubmit } from "@/types";
import { useSub } from "@/app/hooks/useSub";

const Form = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [processType, setProcessType] = useState("");

  const OpenModal = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // Change state For strings
  const [userSubmit, setUserSubmit] = useState<IUserSubmit>({
    main_category: "",
    sub_category: "",
    process_type: "",
    model: "",
    brand: "",
    type: "",
    transmission_type: "",
  });
  // Change state For Id
  const [userId, setUserId] = useState<IUserId>({
    main_Id: "",
    sub_Id: "",
    process_Id: "",
    model_Id: "",
    brand_Id: "",
    type_Id: "",
    transmission_type_Id: "",
  });

  // Hooks
  const {
    handleDynamicallyChangeprosesSelect,
    handleDynamicallyChangeBrandSelect,
    handleDynamicallyChangeTransmissionTypeSelect,
  } = useSub(userId);

  const { handleDynamicallyChangeModelSelect, typeData } = useModel(userId);

  const { categories, handleDynamicallyChangeSecondeSelect } =
    useGetMainCategory(userId);
  // Hooks

  /**
   * Handles changes in the category select element by returning a function that updates the userSubmit and userId states.
   *
   * @param {ChangeEvent<HTMLSelectElement>} e - The change event object.
   * @param {string} name - The name of the field to be updated in the userSubmit state.
   *
   * @param {string} Id - The ID of the field to be updated in the userId state.


   * @returns {Function} - A function that takes the field name and returns another function to update the userSubmit and userId states.
   */

  const handleCategoryChanges =
    (e: ChangeEvent<HTMLSelectElement>) => (name: string) => (Id: string) => {
      // Id
      const { value } = e.target;

      // InnerHTml
      const selectedOption = e.target.selectedOptions[0].textContent;

      setUserSubmit((prevState) => ({
        ...prevState,
        [name]: selectedOption,
      }));

      setUserId((prevState) => ({
        ...prevState,
        [Id]: value,
      }));
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
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("main_category")("main_Id")
                }
                value={userId.main_Id}
                label={"Main Category"}
                mandatory
              />
            </div>

            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeSecondeSelect()}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("sub_category")("sub_Id")
                }
                value={userId.sub_Id}
                label={"Sub Category"}
                mandatory
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeprosesSelect()}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("process_type")("process_Id")
                }
                value={userId.process_Id}
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
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("brand")("brand_Id")
                }
                value={userId.brand_Id}
                label={"Brand"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeModelSelect()}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("model")("model_Id")
                }
                value={userId.model_Id}
                label={"Model"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={typeData}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("type")("type_Id")
                }
                value={userId.type_Id}
                label={"Type"}
              />
            </div>
            <div className="mb-5">
              <SelectDropdown
                options={handleDynamicallyChangeTransmissionTypeSelect()}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleCategoryChanges(e)("transmission_type")(
                    "transmission_type_Id"
                  )
                }
                value={userId.transmission_type_Id}
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
