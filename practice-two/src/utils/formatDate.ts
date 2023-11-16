/**
 * Formats a date string into a localized date format.
 * @param value - The date string to be formatted.
 * @returns A string representing the formatted date.
 * @example
 * const formattedDate = formatDate('2023-11-16');
 * console.log(formattedDate); // Output: "Nov 16, 2023"
 */
export const formatDate = (value: string) => {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};
