// customHooks.js
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api";

export const useMainCategoryQuery = () => {
  return useQuery({
    queryFn: async () => await getAllCategories(),
    queryKey: ["mainCategory"],
    enabled: false,
  });
};
