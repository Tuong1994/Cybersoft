import React from 'react';
import { NavLink } from 'react-router-dom';

function RwdVeCybersoft({listThree}) {
    return (
        <div className={listThree ? "link__sublist-3 show-list-3" : "link__sublist-3"}>
              <div className="sublist__group">
                <div className="group__list">
                    <NavLink to="/gioi_thieu" className="list__link">
                        Giới thiệu
                    </NavLink>
                </div>
                <div className="group__list">
                    <NavLink to="/lien_he" className="list__link">
                        Liên hệ
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default RwdVeCybersoft;