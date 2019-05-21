import * as React from 'react';

interface LoaderProps {
  message?: string;
}

const Loader: React.SFC<LoaderProps> = ({ message }) => {
  return <div>{message}</div>;
};

Loader.defaultProps = {
  message: 'Loading',
};

export default Loader;
