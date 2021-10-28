import React from 'react';
import { NavLink } from 'react-router-dom';

function LoTrinh(props) {
    return (
        <div className="intro__road">
            <NavLink to="/lo_trinh_hoc" className="road__inner road__inner-1">
                <div className="inner__img">
                    <img className="img__class" src="../img/class/class-2.png" alt="class-2" />
                </div>

                <div className="inner__content">
                    <div className="content">
                        <p className="content__text">TRÁI NGÀNH</p>
                        <p className="content__text">Lộ trình cho người trái ngành, mất gốc, học từ ZERO</p>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/lo_trinh_hoc" className="road__inner road__inner-2">
                <div className="inner__img">
                    <img className="img__class" src="../img/class/class-3.png" alt="class-2" />
                </div>

                <div className="inner__content">
                    <div className="content">
                        <p className="content__text">ĐÃ BIẾT LẬP TRÌNH</p>
                        <p className="content__text">Đã có kiến thức tư duy lập trình và OOP</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default LoTrinh;