import React from 'react';

function MucTieuKetQua({ thongTinKhoaHoc }) {
    return (
        <div className="wrapper__goals" id="muc-tieu-ket-qua">
            <div className="goals__list">
                <h2 className="list__title">
                    <i class="fa fa-bookmark"></i>
                    <span>MỤC TIÊU</span>
                </h2>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Nắm rõ tố chất của một {thongTinKhoaHoc?.tenKhoaHoc}</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Nắm vững các công thức để tay nghề luôn được vững chắc, cập nhật công nghệ</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Hiểu và nắm các kỹ năng cần thiết liên quan đến nghề {thongTinKhoaHoc?.tenKhoaHoc}</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Nắm vững và vận dụng các kỹ năng lập trình chuyên nghiệp</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Nắm vững và vận dụng các kỹ năng làm việc nhóm, chuyên môn hóa bản thân</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Thực hành và hiểu sâu các công cụ lập trình/ Teamwork</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-check"></i>
                    <p>Nắm vững và Thực hành kỹ thuật code, kỹ năng phân tích và giải quyết vấn đề</p>
                </div>
            </div>

            <div className="goals__list">
                <h2 className="list__title">
                    <i class="fa fa-bookmark"></i>
                    <span>KẾT QUẢ</span>
                </h2>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Bạn sẽ được đào tạo để trở thành một {thongTinKhoaHoc?.tenKhoaHoc} chuyên nghiệp</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Được truyền kinh nghiệm "máu lửa" từ các Giảng viên chuyên nghiệp qua các dự án được lấy từ doanh nghiệp</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Được đào tạo theo một LỘ TRÌNH chuẩn hóa qua các phương pháp giảng dạy TÍCH CỰC (Active Learning)</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Được rèn luyện tư duy, logic nền tảng, cốt lõi trong nghề {thongTinKhoaHoc?.tenKhoaHoc}</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Có khả năng phân tích dự án, ước lượng dự án trong thực tế</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Vừa chuyên nghiệp hóa chuyên môn, vừa thông thạo các kỹ năng mềm trong làm việc</p>
                </div>
                <div className="list__item">
                    <i class="fa fa-flag"></i>
                    <p>Đáp ứng mọi nhu cầu tuyển dụng {thongTinKhoaHoc?.tenKhoaHoc} qua việc học những công nghệ mới nhất về {thongTinKhoaHoc?.tenKhoaHoc}</p>
                </div>
            </div>
        </div>
    );
}

export default MucTieuKetQua;