import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "https://staging.mazaady.com/api/v1/get_all_cats",
      {
        headers: {
          "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
        },
      }
    );

    return response.data.data.categories;
  } catch (error) {
    throw new Error("Error fetching categories " + error);
  }
};

/**
 * Fetches subcategories based on the provided main category ID.
 *
 * @param {number} mainCategoryId The ID of the main category to fetch subcategories for.
 *
 * @throws {Error} If an error occurs during fetching.
 *
 * @returns {Array} An array containing subcategories data.
 */
export const getSubCategories = async (mainCategoryId?: string | undefined) => {
  try {
    const response = await axios.get(
      `https://staging.mazaady.com/api/v1/properties?cat=${mainCategoryId}`, // Use mainCategoryId in the URL
      {
        headers: {
          "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    throw new Error("Error fetching categories " + error);
  }
};
export const getOptionCategories = async (mainCategoryId: any) => {
  try {
    const response = await axios.get(
      `https://staging.mazaady.com/api/v1/get-options-child/${mainCategoryId}`,
      {
        headers: {
          "private-key": process.env.NEXT_PUBLIC_ANALYTICS_ID,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error fetching categories " + error);
  }
};
