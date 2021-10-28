import React from 'react';

function NotFound(props) {
    return (
        <div className="not-found">
            <div className="not-found__wrapper">
                <div className="wrapper__status">
                    <span>404</span>
                    <span><i class="fa fa-search"></i></span>
                    <div className="status__message">Oops!!! Page not found</div>
                </div>
                <div className="wrapper__emoji">
                    <i class="fa fa-sad-cry"></i>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
