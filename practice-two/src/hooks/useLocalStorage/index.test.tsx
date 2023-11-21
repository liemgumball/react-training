import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '.';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  it('should return the initial value when no data is in localStorage', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );

    expect(result.current[0]).toBe('initialValue');
  });

  it('should return the value from localStorage if available', () => {
    // set the value in localStorage
    localStorage.setItem('testKey', JSON.stringify('storedValue'));

    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );

    // check if the value same as storedValue
    expect(result.current[0]).toBe('storedValue');
  });

  it('should set a new value to localStorage when setValue is called', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [, setValue] = result.current;

    // change the value
    act(() => {
      setValue('newStoredValue');
    });

    // check if the storedValue same as currentValue
    expect(result.current[0]).toBe('newStoredValue');
    expect(JSON.parse(localStorage.getItem('testKey')!)).toBe('newStoredValue');
  });

  it('should handle initialValue as a function', () => {
    const { result } = renderHook(() =>
      useLocalStorage('testKey', () => 'initialValueFn')
    );

    // test function case
    expect(result.current[0]).toBe('initialValueFn');
  });
});
