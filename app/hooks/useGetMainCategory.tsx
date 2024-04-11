import { IUserId } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

type IProps = { categoriesId: string };
type IChildren = { id: number; name: string }[];

type IState = { id: number; name: string; children: IChildren }[];
const useGetMainCategory = (UserId: IUserId) => {
  const [categories, setCategories] = useState<IState>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /**
   * handleDynamicallyChangeSecondeSelect for SubCategory
   * Returns an array of subcategories based on the selected category ID.
   *
   * @returns {(string | undefined)[]} - An array of subcategories, or undefined if the category is not found or has no children.
   */

  const handleDynamicallyChangeSecondeSelect = () => {
    const getobjectById = categories.find(
      (categ) => categ.id === +UserId?.main_Id!
    );

    const createArrayofsubbCategory = getobjectById?.children?.map(
      (child) => child
    );

    return createArrayofsubbCategory;
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://staging.mazaady.com/api/v1/get_all_cats",
        {
          headers: {
            "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
          },
        }
      );
      setCategories(response.data.data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, handleDynamicallyChangeSecondeSelect }; // Empty dependency array means this effect runs only once, on mount
};

export default useGetMainCategory;
