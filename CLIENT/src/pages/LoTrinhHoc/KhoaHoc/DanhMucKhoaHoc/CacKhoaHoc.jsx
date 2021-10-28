import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTheoDanhMucBackEndAction } from '../../../../redux/actions/KhoaHocAction';

function CacKhoaHoc({ danhMucKhoaHocBackEnd }) {
    const dispatch = useDispatch();
    let renderCourse = (index) => {
        if (index === 1) {
            return danhMucKhoaHocBackEnd?.map((danhMuc, index) => {
                return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="wrapper__card" key={index} onClick={() => {
                    dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                    window.scrollTo(0, 0);
                }}>
                    <div className="card__inner">
                        <img className="card__img" src={`../img/course/illustration_${index + 1}.svg`} alt="course" />
                        <div className="card__content">
                            <p className="content__title">
                                {danhMuc.tenDanhMuc}
                            </p>
                            <p className="content__text">
                                6.5 tháng - 52 buổi
                            </p>
                        </div>
                    </div>
                    <div className="card__icons">
                        <span className="icon">
                            <img className="img" src="../img/program_icons/html.svg" alt="html" />
                        </span>
                        <span className="icon">
                            <img className="img" src="../img/program_icons/react.png" alt="react" />
                        </span>
                        <span className="icon">
                            <img className="img" src="../img/program_icons/angular.svg" alt="angular" />
                        </span>
                    </div>
                </NavLink>
            })
        } else if (index === 2) {
            return danhMucKhoaHocBackEnd?.slice(2, 4).map((danhMuc, index) => {
                return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="wrapper__card" key={index} onClick={() => {
                    dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc));
                    window.scrollTo(0, 0);
                }}>
                    <div className="card__inner">
                        <img className="card__img" src={`../img/course/illustration_${index + 1}.svg`} alt="course" />
                        <div className="card__content">
                            <p className="content__title">
                                {danhMuc.tenDanhMuc}
                            </p>
                            <p className="content__text">
                                6.5 tháng - 52 buổi
                            </p>
                        </div>
                    </div>
                    <div className="card__icons">
                        <span className="icon">
                            <img className="img" src="../img/program_icons/html.svg" alt="html" />
                        </span>
                        <span className="icon">
                            <img className="img" src="../img/program_icons/react.png" alt="react" />
                        </span>
                        <span className="icon">
                            <img className="img" src="../img/program_icons/angular.svg" alt="angular" />
                        </span>
                    </div>
                </NavLink>
            })
        }
    }
    return (
        <div className="list__course">
            <div className="course__wrapper">
                <div className="wrapper__title-card">
                    <div className="title-card">
                        <img className="title-card__img" src="../img/course/lightbulb.jpg" alt="lightbulb" />
                        <div className="title-card__content">
                            <div className="title-card__name">
                                <p>KHÓA HỌC Part-time</p>
                            </div>
                            <div className="title-card__info">
                                <p>Học buổi tối và cuối tuần</p>
                            </div>
                        </div>
                    </div>
                </div>

                {renderCourse(1)}

            </div>

            <div className="course__line"></div>

            <div className="course__wrapper course__wrapper--flex">
                <div className="wrapper__title-card">
                    <div className="title-card">
                        <img className="title-card__img" src="../img/course/lightbulb.jpg" alt="lightbulb" />
                        <div className="title-card__content">
                            <div className="title-card__name">
                                <p>KHÓA HỌC Full-time</p>
                            </div>
                            <div className="title-card__info">
                                <p>Học vào ban ngày</p>
                            </div>
                        </div>
                    </div>
                </div>

                {renderCourse(2)}

            </div>
        </div>
    );
}

export default CacKhoaHoc;