import React, { MouseEvent } from 'react';

type ListProps = {
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
      <p role="alert" className="text-red-500 text-center">
        {error?.message}
      </p>
    );
  // loading
  else if (isLoading)
    return <p className="text-custom-gray text-center">Loading...</p>;
  // fetch successfully
  else return <ul onClick={onClick}>{children}</ul>;
};

export default List;
