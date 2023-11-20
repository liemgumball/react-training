import { useEffect, useState } from 'react';

const useOptimistic = <TData, TOptimistic>(state?: TData[]) => {
  const [optimisticState, setOptimisticState] = useState<
    ((TOptimistic & { isSending: boolean }) | TData)[]
  >(state || []);

  useEffect(() => setOptimisticState(state || []), [state]);

  const updateState = (optimisticValue: TOptimistic) =>
    setOptimisticState([
      ...(state || []),
      { ...optimisticValue, isSending: true },
    ]);

  return { optimisticState, updateState } as const;
};

export default useOptimistic;
