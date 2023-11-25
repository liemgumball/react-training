import { MouseEvent } from 'react';

export type ListProps = {
  isError?: boolean;
  error?: Error;
  isLoading?: boolean;
  onClick?: (event: MouseEvent) => void;
  children?: React.ReactNode;
};

const List: React.FC<ListProps> = (props) => {
  const { isError, error, isLoading, onClick, children } = props;

  // show error
  if (isError)
    return (
      <p role="alert" className="text-red-500 text-center font-600">
        {error?.message || 'Unexpected error'}
      </p>
    );

  // loading
  if (isLoading)
    return (
      <p className="text-custom-dark-gray text-center animate-bounce">
        Loading...
      </p>
    );

  // fetch successfully
  return <ul onClick={onClick}>{children}</ul>;
};

export default List;
