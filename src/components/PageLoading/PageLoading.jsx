import React from "react";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types'
import "./PageLoading.css";

const PageLoading = ({style}) => {
  return (
    <div className="page-loading" style = {style}>
      <ReactLoading
        type={"spin"}
        color={"var(--blue)"}
        height={70}
        width={70}
      />
    </div>
  );
};

PageLoading.propTypes = {
  style: PropTypes.object
}

export default PageLoading;
