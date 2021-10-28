import React from 'react';

function DanhMucLoiIch(props) {
    return (
        <div className="content__detail">
            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-check"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">
                        Học theo lộ trình, có định hướng
                    </p>
                    <p className="text">
                        CyberSoft sẽ định hướng và đưa ra các lộ trình học tập nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.
                    </p>
                </div>
            </div>

            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-chess-knight"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">Nền tảng tư duy, cốt lỗi trong lập trình</p>
                    <p className="text">
                        CyberSoft cung cấp những nền tảng, giá trị tư duy cốt lỗi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.
                    </p>
                </div>
            </div>

            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-fire"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">
                        Mãi giũa bạn qua kinh nghiệm, dự án thực tế
                    </p>
                    <p className="text">
                        Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                    </p>
                </div>
            </div>

            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-users"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">
                        Teamwork, Scrum - Agile. Mentor tận tâm
                    </p>
                    <p className="text">
                        Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong qui trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.
                    </p>
                </div>
            </div>

            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-qrcode"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">
                        Công nghệ mới, chuyên sâu, thực tế
                    </p>
                    <p className="text">
                        Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.
                    </p>
                </div>
            </div>

            <div className="detail__inner">
                <div className="inner__icon">
                    <i className="fa fa-key"></i>
                    <span className="icon__line"></span>
                </div>
                <div className="info__text">
                    <p className="text__title">
                        Trao tay chìa khóa thành công toàn diện
                    </p>
                    <p className="text">
                        Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DanhMucLoiIch;