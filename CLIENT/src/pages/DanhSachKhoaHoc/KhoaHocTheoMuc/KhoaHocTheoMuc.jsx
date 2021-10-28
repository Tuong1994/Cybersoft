import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layKhoaHocTheoDanhMucBackEndAction } from '../../../redux/actions/KhoaHocAction';
import PageLoading from '../../../components/Loading/PageLoading';

function KhoaHocTheoMuc(props) {
    const { khoaHocTheoDanhMuc } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        let { id } = props.match.params;
        dispatch(layKhoaHocTheoDanhMucBackEndAction(id));
    }, [])

    let renderCourseBackEnd = () => {
        return khoaHocTheoDanhMuc.danhSachKhoaHoc?.map((khoaHoc, index) => {
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
        })
    }
    return (
        <div className="course-by-category">
            <PageLoading />
            <div className="course-by-category__title">
                <h1>
                    {khoaHocTheoDanhMuc.tenDanhMuc}
                </h1>
                <span className="title__line"></span>
            </div>
            <div className="course-by-category__list">
                {renderCourseBackEnd()}
            </div>
        </div>
    );
}

export default KhoaHocTheoMuc;