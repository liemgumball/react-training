/**
 * Formats a numerical value to a localized string representing itself
 * @param value to format
 *
 * @example
 * const value = 1234567.89;
 * const formattedValue = formatAmount(value);
 * console.log(formattedValue); // Output: '1,234,568'
 */
export const formatAmount = (value?: number) => {
  return value
    ? value.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    : '0';
};

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
