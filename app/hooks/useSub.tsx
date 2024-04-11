import { IModelData, IUserId } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

type IProps = { subCatId: number | string };

const useSub = (userId: IUserId) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<IModelData | null>(null);

  // get-typeprosses
  const handleDynamicallyChangeprosesSelect = () => {
    const DynamicBrandtyCategory = data?.data.find(
      (items) => items.slug === "process-type"
    );

    const arrayofTypeprosses = DynamicBrandtyCategory?.options?.map(
      (option) => option
    );
    return arrayofTypeprosses;
  };

  // get-Brand
  const handleDynamicallyChangeBrandSelect = () => {
    const DynamicBrandtyCategory = data?.data.find(
      (items) => items.slug === "brand"
    );
    const arrayofBrand = DynamicBrandtyCategory?.options?.map(
      (option) => option
    );
    return arrayofBrand;
  };
  const handleDynamicallyChangeTransmissionTypeSelect = () => {
    const DynamictransmissiontypetyCategory = data?.data.find(
      (items) => items.slug === "transmission-type"
    );
    const transmissiontype = DynamictransmissiontypetyCategory?.options?.map(
      (option) => option
    );
    return transmissiontype;
  };

  // Fetch-SubCategories
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(
        `https://staging.mazaady.com/api/v1/properties?cat=${userId.sub_Id}`,
        {
          headers: {
            "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
          },
          maxRedirects: 5,
        }
      );
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchSubCategories();
  }, [userId.sub_Id]);

  return {
    data,
    handleDynamicallyChangeprosesSelect,
    handleDynamicallyChangeBrandSelect,
    handleDynamicallyChangeTransmissionTypeSelect,
  };
};

export { useSub };
