import axios from "axios";
import type { Skip } from "./types";

/**
 * The base URL for the We Want Waste API.
 */
const API_BASE_URL = "https://app.wewantwaste.co.uk/api";

/**
 * Fetches a list of skips available for a specific location.
 * @param postcode The postcode of the location.
 * @param area The area of the location.
 * @returns A promise that resolves to an array of Skip objects.
 * @throws An error if the API request fails.
 */
export const fetchSkipsByLocation = async (
  postcode: string,
  area: string
): Promise<Skip[]> => {
  try {
    const response = await axios.get<Skip[]>(
      `${API_BASE_URL}/skips/by-location`,
      {
        params: {
          postcode,
          area,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching skips:", error);
    // Rethrow the error to be handled by the calling function (e.g., in React Query)
    throw error;
  }
};
