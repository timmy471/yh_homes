import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import "../assets/styles/componentStyles/pagination.scss";

const Pagination = ({ dataSize, perPage, handlePageClick, forcePage }) => {
  const onPageChange = (prop) => {
    handlePageClick(prop.selected + 1);
  };

  const pageCount = Math.ceil(dataSize / perPage);

  return (
    <div>
      <>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName="pagination-container"
          previousLinkClassName="pagination-link"
          nextLinkClassName="pagination-link"
          pageLinkClassName="pagination-link"
          disabledClassName="pagination-disabled"
          activeClassName="pagination-active"
          forcePage={forcePage-1}
        />
      </>
    </div>
  );
};

Pagination.propTypes = {
  dataSize: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  forcePage: PropTypes.number.isRequired,
};

export default Pagination;
