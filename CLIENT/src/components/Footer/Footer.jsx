import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layDanhMucKhoaHocBackEndAction } from  '../../redux/actions/KhoaHocAction';
import FooterContact from './FooterContact';
import FooterAddress from './FooterAddress';
import FooterLink from './FooterLink';

function Footer(props) {
    const { danhMucKhoaHocBackEnd } = useSelector(state => state.KhoaHocReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhMucKhoaHocBackEndAction())
    }, [])
    return (
        <div className="footer">
            <FooterContact />
            <FooterAddress />
            <FooterLink danhMucKhoaHoc={danhMucKhoaHocBackEnd} />
        </div>
    );
}

export default Footer;