import { renderHook, act } from '@testing-library/react';
import useToggle from '.';

describe('useToggle hook', () => {
  it('should initialize with default value false', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.isOn).toBe(false);
  });

  it('should initialize with the result of the function provided as initial value', () => {
    const { result } = renderHook(() => useToggle(() => true));
    expect(result.current.isOn).toBe(true);
  });

  it('should toggle the value correctly', () => {
    const { result } = renderHook(() => useToggle());
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOn).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOn).toBe(false);
  });

  it('should reset the value to the initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => {
      result.current.toggle();
      result.current.reset();
    });
    expect(result.current.isOn).toBe(true);
  });
});
