import { useState, useEffect } from 'react';

type FetchResult<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useFetch = <T,>(
  url: string,
  options?: RequestInit | null,
  recallTrigger?: boolean
): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); //abort the fetch request when the component unmounted.
    };
  }, [url, options, recallTrigger]);

  return { data, error, loading } as const;
};

export default useFetch;
