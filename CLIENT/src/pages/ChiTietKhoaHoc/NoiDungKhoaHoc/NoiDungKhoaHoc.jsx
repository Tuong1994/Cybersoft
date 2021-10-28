import React from 'react';
import ThongTinKhoaHoc from './ThongTinKhoaHoc';
import DoiTuongThamGia from './DoiTuongThamGia';
import MucTieuKetQua from './MucTieuKetQua';
import Background from '../../../components/Background/Background';
import DiemKhacBiet from './DiemKhacBiet';
import BannerKhoaHoc from './BannerKhoaHoc';
import GiangVienPhuongPhap from './GiangVienPhuongPhap';
import BangCapViecLam from './BangCapViecLam';
import DoiTac from '../../../components/DoiTac/DoiTac';
import QuaTrinh from './QuaTrinh';
import HinhAnhKhoaHoc from './HinhAnhKhoaHoc';
import CamNhan from './CamNhan';
import GhiDanh from './GhiDanh';
import BackgroundKhoaHoc from './BackgroundKhoaHoc';

function NoiDungKhoaHoc({ thongTinKhoaHoc, paramsId }) {
    return (
        <div className="info__wrapper">
            <div className="wrapper">
                <ThongTinKhoaHoc thongTinKhoaHoc={thongTinKhoaHoc} />
                <DoiTuongThamGia />
            </div>
            <MucTieuKetQua thongTinKhoaHoc={thongTinKhoaHoc} />
            <Background />
            <div className="wrapper">
                <DiemKhacBiet thongTinKhoaHoc={thongTinKhoaHoc} />
            </div>
            <BannerKhoaHoc />
            <div className="wrapper">
                <GiangVienPhuongPhap thongTinKhoaHoc={thongTinKhoaHoc} />
                <BangCapViecLam />
            </div>
            <DoiTac />
            <QuaTrinh />
            <BannerKhoaHoc />
            <div className="wrapper">
                <HinhAnhKhoaHoc />
                <CamNhan />
            </div>
            <GhiDanh thongTinKhoaHoc={thongTinKhoaHoc} paramsId={paramsId} />
            <BackgroundKhoaHoc />
        </div>
    );
}

export default NoiDungKhoaHoc;