/**
 * Formats a numerical value to a localized string representing itself
 * @param value to format
 *
 * @example
 * const value = 1234567.89;
 * const formattedValue = formatAmount(value);
 * console.log(formattedValue); // Output: '1,234,568'
 */
export default function formatAmount(value?: number) {
  return value
    ? value.toLocaleString('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    : '0';
}
