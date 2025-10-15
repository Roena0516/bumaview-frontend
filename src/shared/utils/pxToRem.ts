/**
 * Convert px to rem based on 16px root font size
 * @param px - The pixel value to convert
 * @returns The rem value as a string (e.g., "1rem")
 */
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};
