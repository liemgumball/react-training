import { useState } from 'react';

const useToggle = (initialValue?: boolean | (() => boolean)) => {
  const [isOn, setOn] = useState<boolean>(
    initialValue instanceof Function ? initialValue() : initialValue || false
  );

  const toggle = () => setOn((prev) => !prev);

  const reset = () =>
    setOn(
      initialValue instanceof Function ? initialValue() : initialValue || false
    );

  return { isOn, toggle, reset } as const;
};

export default useToggle;
