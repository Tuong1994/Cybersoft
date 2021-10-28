import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImagePopup from '../../../components/Popup/ImagePopup';

function GiangVienPhuongPhap({ thongTinKhoaHoc }) {
    const [mentorsImg, setMentorsImg] = useState(false);
    const [usaImg, setUsaImg] = useState(false);
    const { danhSachHinhAnhMentors, danhSachHinhAnhUSA } = useSelector(state => state.ImageReducer);
    return (
        <div className="wrapper__mentors" id="giang-vien-phuong-phap">
            <ImagePopup trigger={mentorsImg} setTrigger={setMentorsImg} ImgList={danhSachHinhAnhMentors} />
            <h1 className="mentors__title">
                <i class="fa fa-apple-alt"></i>
                <span>GIẢNG VIÊN VÀ PHƯƠNG PHÁP ĐÀO TẠO</span>
            </h1>

            <div className="mentors__content">
                <p>CyberSoft tuyển chọn các Giảng viên là các Senior đang làm tại các công ty, tập đoàn lớp như ELCA, NashTech, Global CyberSoft, KMS, ...giàu kinh nghiệm thực tế, truyển đạt tốt và tận tâm. CyberSoft nói KHÔNG với lý thuyết suông và vào học là phải CODE mỏi tay! CyberSoft luôn training giảng viên, tham gia các khóa đào tạo tại đại học ASU - Arizona Mỹ và luôn cải tiến chương trình cũng như phương pháp dạy để đảm bảo học viên học tốt nhất, code thuần thục và phân tích tốt, có việc ngay sau khi học.</p>
                <div className="content__images">
                    <div className="images" onClick={() => {
                        setMentorsImg(true);
                    }}>
                        <img src="../img/mentors/mentors5.jpg" alt="mentors" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setMentorsImg(true);
                    }}>
                        <img src="../img/mentors/mentors4.jpg" alt="mentors" className="img" />
                    </div>
                    <div className="images" onClick={() => {
                        setMentorsImg(true);
                    }}>
                        <img src="../img/mentors/mentors1.jpg" alt="mentors" className="img" />
                    </div>
                </div>
            </div>

            <div className="mentors__content">
                <h3 className="content__title">PHƯƠNG PHÁP ĐÀO TẠO</h3>
                <div className="content__list">
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Dạy theo dự án qua kinh nghiệm của các Giảng viên</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Học theo nhóm theo mô hình Scrum/ Agile</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Được đào tạo theo một LỘ TRÌNH chuẩn hóa qua các phương pháp giảng dạy TÍCH CỰC (Active Learning)</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Rèn luyện tư duy, logic làm nền tảng cốt lõi cho nghề {thongTinKhoaHoc?.tenKhoaHoc}</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Tập trung thực hành, phân tích dự án dự án trong thực tế</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Mentor sẽ hỗ trợ cùng giảng viên chính suốt quá trình học, thảo luận trực tiếp trên group</p>
                    </div>
                    <div className="list__item">
                        <i class="fa fa-flag"></i>
                        <p>Phương pháp Flipped Learning (Lớp học đảo ngược), CLIL (tích hợp anh văn),..được vận dụng từ chương trình đào tạo nghề của đại học Arizona, Mỹ</p>
                    </div>
                </div>
            </div>

            <div className="mentors__images">
                <ImagePopup trigger={usaImg} setTrigger={setUsaImg} ImgList={danhSachHinhAnhUSA} />
                <h3>MỘT SỐ HÌNH ẢNH GIẢNG VIÊN CYBERSOFT TẬP HUẤN TẠI ASU - ARIZONA MỸ</h3>
                <div className="images__list">
                    <div className="list" onClick={() => {
                        setUsaImg(true)
                    }}>
                        <img src="../img/usa/1.jpg" alt="usa" className="list__img" />
                    </div>
                    <div className="list" onClick={() => {
                        setUsaImg(true)
                    }}>
                        <img src="../img/usa/2.jpg" alt="usa" className="list__img" />
                    </div>
                    <div className="list">
                        <img src="../img/usa/3.jpg" alt="usa" className="list__img" />
                    </div>
                    <div className="list" onClick={() => {
                        setUsaImg(true)
                    }}>
                        <img src="../img/usa/4.jpg" alt="usa" className="list__img" />
                    </div>
                    <div className="list" onClick={() => {
                        setUsaImg(true)
                    }}>
                        <img src="../img/usa/5.jpg" alt="usa" className="list__img" />
                    </div>
                    <div className="list" onClick={() => {
                        setUsaImg(true)
                    }}>
                        <img src="../img/usa/6.jpg" alt="usa" className="list__img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiangVienPhuongPhap;