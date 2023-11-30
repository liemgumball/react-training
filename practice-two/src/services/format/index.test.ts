import { formatAmount, formatDate } from '.';

describe('formatAmount', () => {
  it('formats a numerical value to a localized string', () => {
    const value = 1234567.89;
    const formattedValue = formatAmount(value);
    expect(formattedValue).toBe('1,234,568');
  });

  it('handles undefined value by returning "0"', () => {
    const formattedValue = formatAmount();
    expect(formattedValue).toBe('0');
  });
});

describe('formatDate', () => {
  it('formats a date string into a localized date format', () => {
    const dateString = '2023-11-16';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('Nov 16, 2023');
  });
});
