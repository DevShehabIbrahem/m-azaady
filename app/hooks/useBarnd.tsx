import { useSubCategoriesQuery } from "./useSubCategoriesQuery";
import { useMainCategoryQuery } from "./useMainCategoryQuery";

const useBarnd = (mainCategoryId: string, subcatId: string) => {
  const { data: mainCategoryData } = useMainCategoryQuery();

  const childrenCat = mainCategoryData?.find(
    (category: { id: number }) => category.id === +mainCategoryId
  );

  const RestofCat = childrenCat?.children?.find(
    (category: { id: number }) => category.id === +subcatId
  );
  const { data: BrandCategoryData } = useSubCategoriesQuery(RestofCat?.id);

  const DynamicBrandtyCategory = BrandCategoryData?.find(
    (category: { id: number; name: string }) => category.name === "Brand"
  );

  const dynamicBrandCategoryArray = DynamicBrandtyCategory?.options.map(
    (category: any) => category
  );

  return { dynamicBrandCategoryArray };
};

export default useBarnd;
