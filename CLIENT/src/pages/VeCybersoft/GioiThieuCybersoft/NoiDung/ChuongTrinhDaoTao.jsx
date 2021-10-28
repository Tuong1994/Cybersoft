import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layKhoaHocTheoDanhMucBackEndAction } from '../../../../redux/actions/KhoaHocAction';

function ChuongTrinhDaoTao({ danhMucKhoaHocBackEnd }) {
    const dispatch = useDispatch();
    let renderCourse = () => {
        return danhMucKhoaHocBackEnd?.slice(0, 4).map((danhMuc, index) => {
            return <NavLink to={`/khoa-hoc-theo-muc/${danhMuc.maDanhMuc}`} className="item__card" key={index} onClick={() => {
                dispatch(layKhoaHocTheoDanhMucBackEndAction(danhMuc.maDanhMuc))
            }}>
                <div className="card__inner">
                    <img className="card__img" src={`../img/course/illustration_${index + 1}.svg`} alt="course" />
                    <div className="card__content">
                        <p className="content__title">
                            {danhMuc.tenDanhMuc}
                        </p>
                        <p className="content__text">
                            5 tháng - 41 buổi
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
    return (
        <div className="wrapper__programs" id="programs">
            <div className="programs__title">
                <h4><i class="fa fa-th"></i>Danh sách các chương trình đào tạo</h4>
            </div>
            <div className="programs__item">
                {renderCourse()}
            </div>
        </div>
    );
}

export default ChuongTrinhDaoTao;