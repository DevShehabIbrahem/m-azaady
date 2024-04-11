import { IModelData, IUserId } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useModel = (userId: IUserId) => {
  const [modelData, setModelData] = useState<IModelData | null>(null);
  const [typeData, setTypeData] = useState(null);
  /**
   * handleDynamicallyChangeModelSelect for ModelSelect Data
   * Returns an array of subcategories based on the selected category ID.
   *
   * @returns {(string | undefined)[]} - An array of subcategories, or undefined if the category is not found or has no children.
   */
  const handleDynamicallyChangeModelSelect = () => {
    const DynamicmodeltyCategory = modelData?.data.find((items) => items);

    const arrayofModel = DynamicmodeltyCategory?.options?.map(
      (option) => option
    );

    return arrayofModel;
  };

  const fetchModel = async () => {
    try {
      const response = await axios.get(
        `https://staging.mazaady.com/api/v1/get-options-child/${userId.brand_Id}`,
        {
          headers: {
            "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
          },
          maxRedirects: 5,
        }
      );
      setModelData(response.data);
    } catch (error) {}
  };

  const fetchType = async () => {
    try {
      const response = await axios.get(
        `https://staging.mazaady.com/api/v1/get-options-child/${userId.model_Id}`,
        {
          headers: {
            "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
          },
          maxRedirects: 5,
        }
      );

      setTypeData(response.data.data[0].options);
    } catch (error) {}
  };
  // fetchModel
  useEffect(() => {
    fetchModel();
  }, [userId.brand_Id]);
  // fetchType
  useEffect(() => {
    fetchType();
  }, [userId.model_Id]);

  return {
    handleDynamicallyChangeModelSelect,
    typeData,
  };
};

export default useModel;
