import React from 'react';

function GiangVien({ setImgSlider }) {
    return (
        <div className="wrapper__mentors" id="mentor">
            <div className="mentors__content">
                <h3><i className="fi-star"></i><span>ĐỘI NGŨ GIẢNG VIÊN</span></h3>
                <p>CyberSoft tuyển chọn các giảng viên đến từ các doanh nghiệp, có nhiều năm kinh nghiệm trong việc xây dựng các dự án lớn tại các tập đoàn trong và ngoài nước. Có kinh nghiệm trong việc chia sẻ kiến thức, phân tích dự án, tận tâm và hỗ trợ hết mình để học viên luôn học hỏi được các kinh nghiệm thực chiến, học tập kiến thức mới nhất từ thực tế, áp dụng ngay vào công việc ngay sau khóa học. Các giảng viên được tham gia khóa huấn luyện đào tạo tích hợp do đại học Arizona - ASU - Mỹ và tập đoàn Intel tài trợ để áp dụng các phương pháp giảng dạy hiện đại trong đào tạo nghề chất lượng cao.</p>
            </div>

            <div className="mentors__images">
                <div className="images__item" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/mentors/mentors1.jpg" alt="mentors" className="item__img" />
                    <div className="item__button">
                        <span className="button__link">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="images__item" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/mentors/mentors2.jpg" alt="mentors" className="item__img" />
                    <div className="item__button">
                        <span className="button__link">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="images__item" onClick={() => {
                    setImgSlider(true);
                }}>
                    <img src="../img/mentors/mentors3.jpg" alt="mentors" className="item__img" />
                    <div className="item__button">
                        <span className="button__link">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiangVien;