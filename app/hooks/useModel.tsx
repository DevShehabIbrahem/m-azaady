import { IModelData, IProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useModel = ({ BrandId, modelId }: IProps) => {
  const [modelData, setModelData] = useState<IModelData | null>(null);
  const [typeData, setTypeData] = useState(null);

  const handleDynamicallyChangeModelSelect = () => {
    const DynamicmodeltyCategory = modelData?.data.find((items) => items);

    const arrayofModel = DynamicmodeltyCategory?.options?.map(
      (option) => option
    );

    return arrayofModel;
  };

  // Fetch-SubCategories
  const fetchModel = async () => {
    try {
      const response = await axios.get(
        `https://staging.mazaady.com/api/v1/get-options-child/${BrandId}`,
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
        `https://staging.mazaady.com/api/v1/get-options-child/${modelId}`,
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

  useEffect(() => {
    fetchModel();
  }, [BrandId]);
  useEffect(() => {
    fetchType();
  }, [modelId]);

  return {
    handleDynamicallyChangeModelSelect,
    typeData,
  };
};

export default useModel;
