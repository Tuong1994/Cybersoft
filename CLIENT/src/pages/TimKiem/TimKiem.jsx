import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import PageLoading from "../../components/Loading/PageLoading";

function TimKiem(props) {
    const { danhSachTimKiem } = useSelector(state => state.KhoaHocReducer);

    const renderCourse = () => {
        return danhSachTimKiem?.length === 0 ?
            <p className="list__text">Không tìm thấy kết quả</p>
            : danhSachTimKiem?.map((khoaHoc, index) => {
                return <NavLink to={`/chi-tiet-khoa-hoc/${khoaHoc.maKhoaHoc}`} className="list__card" key={index}>
                    <div className="card__img">
                        <img src={khoaHoc.hinhAnh} alt={khoaHoc.tenKhoaHoc} className="img" />
                    </div>
                    <div className="card__content">
                        {khoaHoc.tenKhoaHoc?.length > 20 ? <h5>{khoaHoc.tenKhoaHoc.substr(0, 20)}...</h5> : <h5>{khoaHoc.tenKhoaHoc}</h5>}
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
        <div className="search">
            <PageLoading />
            <div className="search__title">
                <h1>KẾT QUẢ TÌM KIẾM</h1>
                <span className="title__line"></span>
            </div>
            <div className="search__list">
                {renderCourse()}
            </div>
        </div>
    );
}

export default TimKiem;