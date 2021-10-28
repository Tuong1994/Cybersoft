import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AlertContact from '../../../components/Alert/AlertContact';
import LienHeForm from './LienHeForm';
import ThongTinChuyenKhoan from './ThongTinChuyenKhoan';

function LienHe(props) {
    const { thongTinLienHe } = useSelector(state => state.TuVanReducer);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="advisory">
            <div className="advisory__banner">
                <img className="banner__img" src="../img/contact.jpg" alt="contact" />
                <div className="banner__content">
                    <h2>TƯ VẤN LỘ TRÌNH CHO BẠN</h2>
                    <p>Chúng tôi sẽ tư vấn miễn phí bạn toàn bộ chương trình, lộ trình để thành công trong lĩnh vực lập trình với thời gian và chi phí tối ưu nhất.</p>
                </div>
            </div>
            <LienHeForm />
            <ThongTinChuyenKhoan />
            <AlertContact thongTin={thongTinLienHe} />
        </div>
    );
}

export default LienHe;