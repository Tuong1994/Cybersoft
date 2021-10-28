import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavHashLink as Link } from 'react-router-hash-link';
import Cybersoft from './Cybersoft';
import SuMenh from './SuMenh';
import TamNhin from './TamNhin';
import Background from '../../../../components/Background/Background';
import LoiIch from '../../../../components/LoiIch/LoiIch';
import GiangVien from './GiangVien';
import ChuongTrinhDaoTao from './ChuongTrinhDaoTao';
import ImagePopup from '../../../../components/Popup/ImagePopup';

function NoiDung({ danhMucKhoaHocBackEnd }) {
    const { danhSachHinhAnhMentors } = useSelector(state => state.ImageReducer);
    const [imgSlider, setImgSlider] = useState(false);
    return (
        <div className="introduce__content">
            <div className="content__sidebar">
                <div className="sidebar__list">
                    <Link smooth to="#cybersoft"
                        activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Về CyberSoft</span>
                    </Link>
                    <Link smooth to="#vision" activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Tầm nhìn</span>
                    </Link>
                    <Link smooth to="#mission" activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Sứ mệnh</span>
                    </Link>
                    <Link smooth to="#benefit" activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Điểm ưu việt</span>
                    </Link>
                    <Link smooth to="#mentor" activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Đội ngũ giảng viên</span>
                    </Link>
                    <Link smooth to="#programs" activeName="selected"
                        activeStyle={{ backgroundImage: "linear-gradient(to right, #227df9, #7462f9, #df3ef8" }}
                        className="list__item">
                        <span className="item__link">Danh sách khóa học</span>
                    </Link>
                </div>
            </div>

            <div className="content__wrapper">
                <div className="wrapper">
                    <Cybersoft setImgSlider={setImgSlider} />
                    <TamNhin />
                    <SuMenh />
                </div>
                <Background />
                <LoiIch />
                <div className="wrapper">
                    <GiangVien setImgSlider={setImgSlider} />
                </div>
                <ChuongTrinhDaoTao danhMucKhoaHocBackEnd={danhMucKhoaHocBackEnd} />
            </div>
            <ImagePopup trigger={imgSlider} setTrigger={setImgSlider} ImgList={danhSachHinhAnhMentors} />
        </div>
    );
}

export default NoiDung;