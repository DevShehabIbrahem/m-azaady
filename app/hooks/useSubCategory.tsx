import { useMainCategoryQuery } from "./useMainCategoryQuery";
/**
 * Fetches subcategories based on the provided main category ID.
 *
 * @param {number} mainCategoryId The ID of the main category to fetch subcategories for.
 *
 * @throws {Error} If the main category data is not available or an error occurs during fetching.
 *
 * @returns {Object} An object containing an array of subcategories for the specified main category.
 */

export const useSubCategory = (mainCategoryId: string) => {
  const { data: mainCategoryData } = useMainCategoryQuery();

  const DynamicSubCategory = mainCategoryData?.find(
    (category: { id: number }) => category.id === +mainCategoryId
  );

  const dynamicSubCategoryArray = DynamicSubCategory?.children.map(
    (category: any) => category
  );

  return { dynamicSubCategoryArray };
};
