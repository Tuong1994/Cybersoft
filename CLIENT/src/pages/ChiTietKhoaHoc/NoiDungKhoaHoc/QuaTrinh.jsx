import React from 'react';

function QuaTrinh(props) {
    return (
        <div className="wrapper__progress">
            <p className="progress__title">
                <span>Quá trình</span><br />
                <span>Học tập và xin việc làm</span>
            </p>

            <div className="progress__item">
                <i class="fa fa-retweet"></i>
                <p>Luyện code</p>
            </div>
            <div className="progress__item">
                <i class="fa fa-lock"></i>
                <p>Hoàn thành dự án</p>
            </div>
            <div className="progress__item">
                <i class="fa fa-pen"></i>
                <p>Hoàn thành CV</p>
            </div>
            <div className="progress__item">
                <i class="fa fa-list-alt"></i>
                <p>Luyện phỏng vấn</p>
            </div>
            <div className="progress__item">
                <i class="fa fa-check-square"></i>
                <p>Ứng tuyển</p>
            </div>
        </div>
    );
}

export default QuaTrinh;