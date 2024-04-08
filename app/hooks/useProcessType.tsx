import React from "react";
import { useSubCategoriesQuery } from "./useSubCategoriesQuery";

type Props = {};

const useProcessType = () => {
  const { data: subCategoryData } = useSubCategoriesQuery();

  const DynamicPropertyCategory = subCategoryData?.find(
    (category: { id: number; name: string }) =>
      category.name === "Process  Type"
  );

  const dynamicPropertyCategoryArray = DynamicPropertyCategory?.options.map(
    (category: any) => category
  );

  return { dynamicPropertyCategoryArray };
};

export default useProcessType;
