import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Pagination({ perPage, total }) {
    const [activeBtn, setActiveBtn] = useState(0);
    const dispatch = useDispatch();
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageList = () => {
        return pageNumbers?.map((page, index) => {
            return <button type="button" className={activeBtn === index ? "wrapper__button wrapper__button--active" : "wrapper__button"} key={index} onClick={() => {
                dispatch({
                    type: "CHANGE_PAGE",
                    page: page
                })
                dispatch({
                    type: "OPEN_LIST_LOADING"
                })
                setActiveBtn(index)
            }}>
                {page}
            </button>
        })
    }
    return (
        <div className="pagination">
            <div className="pagination__wrapper">
                {renderPageList()}
            </div>
        </div>
    );
}

export default Pagination;