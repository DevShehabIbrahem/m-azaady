import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};

const useGetMainCategory = (categoriesId) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDynamicallyChangeSecondeSelect = () => {
    const getobjectById = categories.find(
      (categ) => categ.id === +categoriesId
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
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, handleDynamicallyChangeSecondeSelect }; // Empty dependency array means this effect runs only once, on mount
};

export default useGetMainCategory;
