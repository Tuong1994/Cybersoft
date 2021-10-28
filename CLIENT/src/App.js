import './sass/main.scss';
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import HomeTemplate from './templates/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate';
import UserTemplate from './templates/UserTemplate';

import NotFound from "./components/NotFound/NotFound";

import TrangChu from './pages/TrangChu/TrangChu';
import LoTrinhHoc from './pages/LoTrinhHoc/LoTrinhHoc';
import CauChuyen from './pages/CauChuyen/CauChuyen';
import GioiThieuCybersoft from './pages/VeCybersoft/GioiThieuCybersoft/GioiThieuCybersoft';
import CamNhanHocVien from './pages/CamNhanHocVien/CamNhanHocVien';
import LienHe from './pages/VeCybersoft/LienHe/LienHe';
import TatCa from './pages/DanhSachKhoaHoc/TatCa/TatCa';
import KhoaHocTheoMuc from './pages/DanhSachKhoaHoc/KhoaHocTheoMuc/KhoaHocTheoMuc';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc/ChiTietKhoaHoc';
import TimKiem from './pages/TimKiem/TimKiem';
import DangNhap from './pages/DangNhap/DangNhap';
import DangKy from './pages/DangKy/DangKy';

import LeAnhTu from './pages/CauChuyen/components/LeAnhTu';
import LeDiemChi from './pages/CauChuyen/components/LeDiemChi';
import NguyenNhatDangDuy from './pages/CauChuyen/components/NguyenNhatDangDuy';
import TrinhThiPhuongDung from './pages/CauChuyen/components/TrinhThiPhuongDung';
import NguyenDuyThai from './pages/CauChuyen/components/NguyenDuyThai';
import VoThanhNhon from './pages/CauChuyen/components/VoThanhNhon';
import NguyenDucThai from './pages/CauChuyen/components/NguyenDucThai';
import LeVanPhuong from './pages/CauChuyen/components/LeVanPhuong';
import PhanNgocTuanAnh from './pages/CauChuyen/components/PhanNgocTuanAnh';
import LePhuocThanh from './pages/CauChuyen/components/LePhuocThanh';
import TranPhuongNam from './pages/CauChuyen/components/TranPhuongNam';

import ThongTin from './pages/NguoiDung/ThongTinNguoiDung/ThongTin';
import CapNhat from './pages/NguoiDung/CapNhatNguoiDung/CapNhat';

import QuanLyKhoaHoc from './pages/Admin/QuanLyKhoaHoc/QuanLyKhoaHoc';
import CapNhatKhoaHoc from './pages/Admin/QuanLyKhoaHoc/CapNhatKhoaHoc';
import QuanLyNguoiDung from './pages/Admin/QuanLyNguoiDung/QuanLyNguoiDung';
import CapNhatNguoiDung from './pages/Admin/QuanLyNguoiDung/CapNhatNguoiDung';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <>
          <HomeTemplate exact path="/" Component={TrangChu} />
          <HomeTemplate exact path="/lo_trinh_hoc" Component={LoTrinhHoc} />

          <HomeTemplate exact path="/tat_ca_khoa_hoc" Component={TatCa} />
          <HomeTemplate exact path="/khoa-hoc-theo-muc/:id" Component={KhoaHocTheoMuc} />
          <HomeTemplate exact path="/chi-tiet-khoa-hoc/:id" Component={ChiTietKhoaHoc} />
          
          <HomeTemplate exact path="/cam_nhan" Component={CamNhanHocVien} />
          <HomeTemplate exact path="/gioi_thieu" Component={GioiThieuCybersoft} />
          <HomeTemplate exact path="/lien_he" Component={LienHe} />

          <HomeTemplate exact path="/tim_kiem" Component={TimKiem} />

          <HomeTemplate exact path="/sign_in" Component={DangNhap} />
          <HomeTemplate exact path="/sign_up" Component={DangKy} />

          {/* TRANG HỌC VIÊN */}
          <HomeTemplate exact path="/cau_chuyen" Component={CauChuyen} />
          <HomeTemplate exact path="/cau_chuyen/le_anh_tu" Component={LeAnhTu} />
          <HomeTemplate exact path="/cau_chuyen/le_diem_chi" Component={LeDiemChi} />
          <HomeTemplate exact path="/cau_chuyen/nguyen_nhat_dang_duy" Component={NguyenNhatDangDuy} />
          <HomeTemplate exact path="/cau_chuyen/trinh_thi_phuong_dung" Component={TrinhThiPhuongDung} />
          <HomeTemplate exact path="/cau_chuyen/nguyen_duy_thai" Component={NguyenDuyThai} />
          <HomeTemplate exact path="/cau_chuyen/vo_thanh_nhon" Component={VoThanhNhon} />
          <HomeTemplate exact path="/cau_chuyen/nguyen_duc_thai" Component={NguyenDucThai} />
          <HomeTemplate exact path="/cau_chuyen/le_van_phuong" Component={LeVanPhuong} />
          <HomeTemplate exact path="/cau_chuyen/phan_ngoc_tuan_anh" Component={PhanNgocTuanAnh} />
          <HomeTemplate exact path="/cau_chuyen/le_phuoc_thanh"  Component={LePhuocThanh} />
          <HomeTemplate exact path="/cau_chuyen/tran_phuong_nam" Component={TranPhuongNam} />


          <UserTemplate exact path="/thong_tin_hoc_vien" Component={ThongTin} />
          <UserTemplate exact path="/cap_nhat_hoc_vien" Component={CapNhat} />

          <AdminTemplate exact path="/quan_ly_khoa_hoc" Component={QuanLyKhoaHoc} />
          <AdminTemplate exact path="/cap_nhat_khoa_hoc" Component={CapNhatKhoaHoc} />

          <AdminTemplate exact path="/quan_ly_nguoi_dung" Component={QuanLyNguoiDung} />
          <AdminTemplate exact path="/cap_nhat_nguoi_dung" Component={CapNhatNguoiDung} />

          {/* <HomeTemplate Component={NotFound} /> */}
        </>
      </Switch>
    </Router>
  );
}

export default App;
