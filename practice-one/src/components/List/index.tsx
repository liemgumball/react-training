import useFetch from '@hooks/useFetch'

type ListProps<T> = {
  url: string
  ItemComponent: React.ComponentType<{ data: T & { id?: number } }>
  requestOptions?: RequestInit
  updateTrigger?: boolean
} & React.HTMLAttributes<HTMLUListElement>

const List = <T,>(props: ListProps<T>) => {
  const { url, requestOptions, ItemComponent, updateTrigger, ...rest } = props

  const { data, error, loading } = useFetch<(T & { id: number })[]>(
    url,
    requestOptions,
    updateTrigger
  )

  if (error)
    return <p className="text-red-500 text-sm text-center">{error.message}</p>

  return (
    <ul {...rest}>
      {loading ? (
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Loading...
        </p>
      ) : data && data.length != 0 ? (
        data.map((item, idx) =>
          ItemComponent ? (
            <ItemComponent key={item.id || idx} data={item} />
          ) : (
            <li key={item.id || idx}>{JSON.stringify(item)}</li>
          )
        )
      ) : (
        <p className="text-custom-dark-gray font-700 m-5 text-center">
          Not found
        </p>
      )}
    </ul>
  )
}

export default List
