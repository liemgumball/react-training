import useFetch from '@hooks/useFetch';

type ListProps<T> = {
  url: string;
  ItemComponent: React.ComponentType<{ data: T & { id?: number } }>;
  requestOptions?: RequestInit;
  updateTrigger?: boolean;
  onClick?: React.MouseEventHandler<HTMLUListElement>;
};

/**
 * List of items which data got fetch from url.
 * Render based error, loading state and data.
 */
const List = <T,>(props: ListProps<T>) => {
  const { url, requestOptions, ItemComponent, updateTrigger, onClick } = props;

  const [data, error, loading] = useFetch<(T & { id: number })[]>(
    url,
    requestOptions,
    updateTrigger
  );

  if (error) return <p className="text-red-500 text-center">{error.message}</p>; // return error message

  return (
    <ul onClick={onClick}>
      {loading ? (
        // if fetching
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Loading...
        </p>
      ) : data && data.length != 0 ? (
        data.map((item, idx) => (
          <ItemComponent key={item.id || idx} data={item} />
        ))
      ) : (
        // if data is empty array,
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Not found
        </p>
      )}
    </ul>
  );
};

export default List;
