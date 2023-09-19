import useFetch from '@hooks/useFetch'

type ListProps<T> = {
  url: string
  ItemComponent: React.ComponentType<{ data: T & { id: number } }>
}

const List = <T,>(props: ListProps<T>) => {
  const { url, ItemComponent } = props

  const { data, error, loading } = useFetch<(T & { id: number })[]>(url)

  if (error)
    return <p className="text-red-500 text-sm text-center">{error.message}</p>

  return (
    <ul className="overflow-y-scroll">
      {loading ? (
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Loading...
        </p>
      ) : data && data.length != 0 ? (
        data.map((item, idx) => (
          <ItemComponent key={item.id || idx} data={item} />
        ))
      ) : (
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Not found
        </p>
      )}
    </ul>
  )
}

export default List
