/**
 * @file        src/lib/osint.ts
 * @author      David @dvhsh (https://dvh.sh)
 * @description OSINT API interactions
 */

const API_BASE_URL = 'https://osint.dvh.sh';
const ASSETS_URL = 'https://raw.githubusercontent.com/nitrous-oxi-de/.github/main/assets/txt/flavors.txt';

/**
 * Represents the structure of a raw result from the OSINT API.
 */
export interface OSINTResult {
  name: string;
  data: {
    status: number;
    data: any;
    [key: string]: any;
  };
}

/**
 * Fetches the available search categories (modules) from the API.
 * 
 * @returns {Promise<string[]>} A list of category names (e.g., 'Username', 'Email').
 * Falls back to a default list if the API fails.
 */
export const getSearchCategories = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    
    const data = await res.json();
    return data.map((obj: { category: string }) => obj.category);
  } catch (error) {
    console.warn('Failed to load categories, using fallback.', error);
    return ['Username', 'Email', 'IP', 'Domain', 'Phone'];
  }
};

/**
 * Fetches "flavor texts" (random phrases) for the UI from the assets repository.
 * 
 * @returns {Promise<string[]>} A shuffled array of flavor text strings.
 */
export const getFlavorTexts = async (): Promise<string[]> => {
  try {
    const res = await fetch(ASSETS_URL);
    if (!res.ok) throw new Error('Failed to fetch flavor texts');
    
    const text = await res.text();
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    return lines.sort(() => Math.random() - 0.5);
  } catch (error) {
    return ['find anyone effortlessly'];
  }
};

/**
 * Queries the OSINT API for a specific target.
 * 
 * @param {string} query - The target identifier (e.g., username, email address).
 * @param {string} category - The module category to search (e.g., 'Username').
 * @returns {Promise<OSINTResult[]>} The parsed search results.
 * @throws {Error} If the API request fails or returns an error format.
 */
export const queryOSINT = async (query: string, category: string): Promise<OSINTResult[]> => {
  if (!query || !category) return [];

  const res = await fetch(`${API_BASE_URL}/${category}?query=${encodeURIComponent(query)}`);
  const json = await res.json();

  if (json.error) {
    throw new Error(json.error);
  }

  if (json.status === 400) {
    throw new Error(json.data || 'Bad Request');
  }

  // We filter to ensure we only return valid hits (status 200)
  if (Array.isArray(json)) {
    return json.filter((item: any) => item.data?.status === 200);
  }

  return [];
};
