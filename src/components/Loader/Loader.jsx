import React from 'react';
import { RotatingLines, ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="112"
      visible={true}
    />
  );
};

export const LoaderApp = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};