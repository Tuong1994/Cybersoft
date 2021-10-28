import React from 'react';
import { useSelector } from 'react-redux';
import useOverFlow from "../../hooks/useOverFlow";

function PageLoading(props) {
    const { pageLoading } = useSelector(state => state.LoadingReducer);
    useOverFlow(pageLoading);
    let renderPageLoading = () => {
        if (pageLoading) {
            return <div className="page-loading">
                <div className="page-loading__icon">
                    <i class="fa fa-spinner"></i>
                </div>
            </div>
        } else {
            return <div className="page-loading page-loading--opacity">
                <div className="page-loading__icon">
                    <i class="fa fa-spinner"></i>
                </div>
            </div>
        }
    }
    return (
        <>
            {renderPageLoading()}
        </>
    );
}

export default PageLoading;