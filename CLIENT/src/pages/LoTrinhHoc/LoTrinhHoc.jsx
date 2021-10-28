import React from 'react';
import { useEffect } from 'react';
import KhoaHoc from './KhoaHoc/KhoaHoc';
import HocOnline from '../../components/HocOnline/HocOnline';
import LienHeTuVan from '../../components/LienHeTuVan/LienHeTuVan';

function LoTrinhHoc(props) {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <div className="route">
            <KhoaHoc/>
            <HocOnline />
            <LienHeTuVan />
        </div>
    );
}

export default LoTrinhHoc;