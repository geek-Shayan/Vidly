import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    // [1,2, 3].map()

    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    // console.log(currentPage);
    const PagesCount = Math.ceil( itemsCount / pageSize );
    // [1,..........].map()
    // console.log(PagesCount);
    
    if (PagesCount === 1) {
        return null;
    }
    else {
        const pages = _.range(1, PagesCount + 1);
    
        return ( 
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map(page => (
                        <li key={page} className={ page === currentPage ? "page-item active" : "page-item" }>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
 
export default Pagination;