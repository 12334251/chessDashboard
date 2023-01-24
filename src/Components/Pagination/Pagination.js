import React from "react";
import _ from "lodash";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ itemCount, pageSize, onPageChange, currentPage, setCurrentPage }) => {
    const pageCount = Math.ceil(itemCount?.length / pageSize);
    const pages = _.range(1, pageCount + 1);

    const handlePreviousClick = () => {
        if (currentPage === 1) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (pageCount === currentPage) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    if (pageCount === 1) return null;
    return (
        <>
            <Pagination>
                <Pagination.Prev onClick={handlePreviousClick} />
                {pages.map((page) => (
                    <Pagination.Item key={page} onClick={() => onPageChange(page)} className={page === currentPage ? "active" : ""}>
                        {page}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={handleNextClick} />
            </Pagination>
        </>
    );
};

export default PaginationComponent;
