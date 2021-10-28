import React from 'react';
import { useSelector } from 'react-redux';
import AlertContact from '../Alert/AlertContact';
import FormLienHe from './FormLienHe';

function LienHeTuVan(props) {
    const { thongTinLienHe } = useSelector(state => state.TuVanReducer);
    return (
        <div className="contact">
            <div className="contact__img">
                <img className="img" src="../img/tablet.png" alt="tablet" />
            </div>
            <div className="contact__form">
                <FormLienHe />
            </div>
            <AlertContact thongTin={thongTinLienHe} />
        </div>
    );
}

export default LienHeTuVan;