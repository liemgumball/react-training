import { useState, useEffect } from 'react';

/**
 * custom hook to fetch data from a specified URL
 * @param url of request
 * @param options of request
 * @param recallTrigger used to trigger recall
 */
const useFetch = <T,>(
  url: string,
  options?: RequestInit | null,
  recallTrigger?: boolean
) => {
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
          signal: controller.signal, // signal to abort
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (err) {
        // avoid if it's an aborted request
        if ((err as Error).name !== 'AbortError') {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // abort the fetch request when the component unmounted or updated.
    };
  }, [url, options, recallTrigger]);

  return { data, error, loading };
};

export default useFetch;
