/**
 * @file        src/utils/format.ts
 * @author      David @dvhsh (https://dvh.sh)
 * @description Utility functions for formatting text and data
 */

/**
 * Formats a key string into a readable label (e.g. "avatar_url" -> "Avatar URL")
 * @param key The key string to format
 * @returns The formatted string
 */
export const formatKey = (key: string): string => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};
