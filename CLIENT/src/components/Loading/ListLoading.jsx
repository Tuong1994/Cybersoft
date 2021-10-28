import React from 'react';
import { useSelector } from 'react-redux';

function ListLoading(props) {
    const { listLoading } = useSelector(state => state.LoadingReducer);
    return (
        <div className={listLoading ? "list-loading list-loading--active" : "list-loading"}>
            <div className="loading"></div>
        </div>
    );
}

export default ListLoading;