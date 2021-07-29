import React from 'react';
// import LoaderIcon from "react-loader-spinner"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderWrapper } from './styled';

const Loader = () => {
  return (
    <LoaderWrapper
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      {/* <LoaderIcon type="Grid"
        color="#000"
        height={100}
        width={100} /> */}
      <div className="loader" />
    </LoaderWrapper>
  );
};

export default Loader;
