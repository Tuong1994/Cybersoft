import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachDanhMucVaKhoaHocBackEndAction } from '../../../redux/actions/KhoaHocAction';
import PageLoading from '../../../components/Loading/PageLoading';

function TatCa(props) {
    const { danhSachDanhMucVaKhoaHoc } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(layDanhSachDanhMucVaKhoaHocBackEndAction());
    }, []);

    const renderCourseBackEnd = () => {
        return danhSachDanhMucVaKhoaHoc?.map((danhMuc, index) => {
            return <div key={index} className="wrapper__list">
                <h3>{danhMuc.tenDanhMuc}</h3>
                <div className="list">
                    {danhMuc.danhSachKhoaHoc?.map((khoaHoc, index) => {
                        return <NavLink to={`/chi-tiet-khoa-hoc/${khoaHoc.maKhoaHoc}`} className="list__card" key={index}>
                            <div className="card__img">
                                <img src={khoaHoc.hinhAnh ? khoaHoc.hinhAnh : "../img/code.jpg"} alt={khoaHoc.tenKhoaHoc} className="img" />
                            </div>
                            <div className="card__content">
                                {khoaHoc.tenKhoaHoc.length > 20 ? <h5>{khoaHoc.tenKhoaHoc.substr(0, 20)}...</h5> : <h5>{khoaHoc.tenKhoaHoc}</h5>}
                                <p>Lượt xem: {khoaHoc.luotXem}</p>
                            </div>
                            <div className="card__button">
                                <NavLink to={`/chi-tiet-khoa-hoc/${khoaHoc.maKhoaHoc}`} className="button--gradient">
                                    ĐĂNG KÝ
                                </NavLink>
                            </div>
                        </NavLink>
                    })}
                </div>
            </div>
        })
    }
    
    return (
        <div className="all-course">
            <PageLoading />
            <div className="all-course__title">
                <h1>TẤT CẢ KHÓA HỌC</h1>
                <span className="title__line"></span>
            </div>

            <div className="all-course__wrapper">
                {renderCourseBackEnd()}
            </div>
        </div>
    );
}

export default TatCa;