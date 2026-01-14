/**
 * @file        src/utils/cn.ts
 * @author      David @dvhsh (https://dvh.sh)
 * @description Utility function for merging class names
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}