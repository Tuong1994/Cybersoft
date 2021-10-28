import React from 'react';

function RwdFormerStudent(props) {
    return (
        <div className="content__rwd-student">
            <div className="rwd-student">
                <div className="rwd-student__img">
                    <img className="img__student" src="../img/student/student-1.jpg" alt="student" />
                </div>
                <div className="rwd-student__review">
                    <div className="review__title">
                        <p>Học viên chuyển ngành</p>
                    </div>
                    <div className="review__info">
                        <p>Nguyễn Quốc | Nền tảng Cơ Điện Đại Học Bách Khoa</p>
                    </div>
                    <div className="review__content">
                        <p>
                            "Tôi vô cùng hài lòng với công việc hiện tại của tôi tại Global CyberSoft. Tôi đã chọn lại được đúng đam mê của mình nhờ các khóa học chuyên sâu tại CyberSoft."
                        </p>
                    </div>
                </div>
            </div>

            <div className="rwd-student">
                <div className="rwd-student__img">
                    <img className="img__student" src="../img/student/student-2.png" alt="student" />
                </div>
                <div className="rwd-student__review">
                    <div className="review__title">
                        <p>Học viên ngành CNTT</p>
                    </div>
                    <div className="review__info">
                        <p>Đinh Phúc Nguyên | FPT</p>
                    </div>
                    <div className="review__content">
                        <p>
                            " Tôi học được rất nhiều từ kỹ năng làm việc, các kỹ thuật chuyên sâu và kỹ năng mềm tại các khóa học của CyberSoft. Điều này đã giúp tôi tự tin rất nhiều khi làm việc tại tập đoàn FPT."
                        </p>
                    </div>
                </div>
            </div>

            <div className="rwd-student">
                <div className="rwd-student__img">
                    <img className="img__student" src="../img/student/student-3.jpg" alt="student" />
                </div>
                <div className="rwd-student__review">
                    <div className="review__title">
                        <p>Học viên chuyển ngành</p>
                    </div>
                    <div className="review__info">
                        <p>Nguyễn Đức Thái | Nền tảng xây dựng Đại Học Bách Khoa Hà Nội</p>
                    </div>
                    <div className="review__content">
                        <p>
                            " Sau 2 năm tốt nghiệp ngành xây dựng, tôi đã thấy mình không phù hợp. Tôi đã tìm đến với CyberSoft và nay tôi đã có được công việc đúng mong đợi của mình tại Viivue."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RwdFormerStudent;