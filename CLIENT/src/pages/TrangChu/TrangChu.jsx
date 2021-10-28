import React from 'react';
import { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import Banner from './Banner/Banner';
import GioiThieu from './GioiThieu/GioiThieu';
import LoiIch from '../../components/LoiIch/LoiIch';
import HocOnline from '../../components/HocOnline/HocOnline';
import Tabs from './Tabs/Tabs';
import RwdTabs from '../../components/Responsive/Tabs/RwdTabs';
import DoiTac from '../../components/DoiTac/DoiTac';
import DinhHuong from './DinhHuong/DinhHuong';
import Background from '../../components/Background/Background';
import DanhGia from './DanhGIa/DanhGia';
import ChuyenHocVien from './ChuyenHocVien/ChuyenHocVien';
import LoiNhan from './LoiNhan/LoiNhan';
import LienHeTuVan from '../../components/LienHeTuVan/LienHeTuVan';

function TrangChu(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="home">
            <Carousel />
            <Banner />
            <GioiThieu />
            <LoiIch />
            <HocOnline />
            <Tabs />
            <RwdTabs />
            <DoiTac />
            <DinhHuong />
            <Background />
            <DanhGia />
            <ChuyenHocVien />
            <LoiNhan />
            <DinhHuong />
            <LienHeTuVan />
        </div>
    );
}

export default TrangChu;