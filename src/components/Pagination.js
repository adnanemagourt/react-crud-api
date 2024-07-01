import React, { useState, useEffect } from 'react';

import { Form } from 'react-bootstrap';


const Pagination = ({ pages, setCurrentPage, allUsers, usersPerPage, setUsersPerPage }) => {

    const chooseUsersPerPage = <Form.Control
        type="number"
        value={usersPerPage}
        onChange={(e) => { setUsersPerPage(e.target.value) }}
        required
    />

    const numOfPages = pages;

    const [currentButton, setCurrentButton] = useState(1);

    const pageItems = [];

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);

    for (let i = 1; i <= numOfPages; i++) {
        pageItems.push(
            <li key={i} className={currentButton === i ? 'page-item active' : 'page-item'}
                onClick={() => setCurrentButton(i)}>
                <a href='#' className="page-link">{i}</a>
            </li>
        );
    }

    return (
        <div className="clearfix">
            <div className="hint-text">Showing {chooseUsersPerPage} out of <b>{allUsers}</b> entries</div>
            <ul className="pagination">
                <li key={0} className={currentButton === 1 ? 'page-item disabled' : 'page-item'}>
                    <a href='#' onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)} className="page-link">Previous</a>
                </li>
                {pageItems}
                <li key={numOfPages + 1} className={currentButton === numOfPages ? 'page-item disabled' : 'page-item'}>
                    <a href='#' onClick={() => setCurrentButton((next) => next === numOfPages ? next : next + 1)} className="page-link">Next</a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;