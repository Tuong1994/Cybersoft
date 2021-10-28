import React from 'react';
import { useSelector } from 'react-redux';

function ButtonLoading(props) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    let renderLoading = () => {
        if (buttonLoading) {
            return <div className="button-loading">
                <i class="fa fa-spinner"></i>
            </div>
        } else {
            return null
        }
    }
    return (
        <>
            {renderLoading()}
        </>
    );
}

export default ButtonLoading;