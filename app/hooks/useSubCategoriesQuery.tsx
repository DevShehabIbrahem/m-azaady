// customHooks.js
import { useQuery } from "@tanstack/react-query";
import { getSubCategories } from "../api";

export const useSubCategoriesQuery = (Id?: string) => {
  return useQuery({
    queryKey: ["subCategory", Id],
    queryFn: async () => await getSubCategories(Id),
    enabled: true,
  });
};
