import React from 'react';
import { NavLink } from "react-router-dom"

function GocHocVien(props) {
    return (
        <div className="link__sublist-2">
            <div className="sublist__group">
                <div className="group__list">
                    <NavLink to="/cau_chuyen" className="list__link">
                        Stories
                    </NavLink>
                </div>
                <div className="group__list">
                    <NavLink to="/cam_nhan" className="list__link">
                        Cảm nhận học viên
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default GocHocVien;