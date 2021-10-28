import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

function MoDau({ thongTinKhoaHoc }) {
    let { tenKhoaHoc, hinhAnh } = thongTinKhoaHoc;
    return (
        <div className="prologue">
            <div className="prologue__content">
                <h3>{tenKhoaHoc}</h3>
                <p>Đã có hơn <strong>6200</strong> bạn đăng kí học và có việc làm thông qua chương trình đào tạo <strong>{tenKhoaHoc}</strong> từ Zero tại CyberSoft. Khóa học <strong>100% thực hành</strong> cường độ cao theo <strong>dự án thực tế</strong> và kết nối doanh nghiệp hỗ trợ <strong>tìm việc ngay</strong> sau khi học. Phương pháp đào tạo nghề chuẩn đại học Arizona - ASU Mỹ - tập trung tư duy, phân tích bài toán giúp cho học viên dễ dàng phát triển từ dev lên senior, leader và làm việc tại bất kì môi trường nào.</p>
                <div className="content__list">
                    <div className="list__wrapper">
                        <p class="wrapper__title">
                            <i class="fa fa-user"></i>
                            <span>AI CÓ THỂ THAM GIA ?</span>
                        </p>
                        <ul className="wrapper__item">
                            <li className="item">
                                Mới học lập trình, thiếu định hướng và lộ trình học tập
                            </li>
                            <li className="item">
                                Trái ngành học lập trình, chuyển nghề
                            </li>
                            <li className="item">
                                Hoàn thành chương trình trung học phổ thông (12/12)
                            </li>
                            <li className="item">
                                Yếu tư duy lập trình, mất gốc muốn học để xin việc làm
                            </li>
                            <li className="item">
                                Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ việc làm của dev
                            </li>
                            <li className="item">
                                Thêm nghề để kiếm thêm thu nhập ngoài giờ
                            </li>
                        </ul>
                    </div>

                    <div className="list__wrapper">
                        <p class="wrapper__title">
                            <i class="fa fa-graduation-cap"></i>
                            <span>HỌC XONG LÀM VIỆC TẠI ĐÂU ?</span>
                        </p>
                        <ul className="wrapper__item">
                            <li className="item">
                                Apply vào tất cả công ty tuyển dụng {tenKhoaHoc} ở vị trí fresher hoặc juinor
                            </li>
                            <li className="item">
                                Các công ty outsourcing - gia công phần mềm
                            </li>
                            <li className="item">
                                Các công ty startup - khởi nghiệp
                            </li>
                            <li className="item">
                                Công ty, tập đoàn trong nước và nước ngoài...
                            </li>
                            <li className="item">
                                Có thể apply ngay vào Fresher, Junior với mức lương khởi điểm từ 7tr5 đến 15tr
                            </li>
                            <li className="item">
                                Nhận các job freelancer về {tenKhoaHoc}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="content__info">
                    <div className="info__inner">
                        <div className="inner__item">
                            <i class="fa fa-calendar"></i>
                            <p>26 TUẦN OFFLINE (6.5 THÁNG)</p>
                        </div>
                        <div className="inner__item">
                            <i class="fa fa-clock"></i>
                            <p>156 GIỜ OFFLINE</p>
                        </div>
                        <div className="inner__item">
                            <i class="fab fa-teamspeak"></i>
                            <p>NHÓM HỌC VÀ VIDEO LUYỆN ONLINE</p>
                        </div>
                        <div className="inner__item">
                            <i class="fa fa-list-ul"></i>
                            <p>20 CHỦ ĐỀ VÀ 30 DỰ ÁN</p>
                        </div>
                        <div className="inner__item">
                            <i class="fa fa-user-graduate"></i>
                            <p>CẤP CHỨNG NHẬN</p>
                        </div>
                        <div className="inner__item">
                            <i class="fa fa-dollar-sign"></i>
                            <p>LÀM CV VÀ KẾT NỐI VIỆC LÀM</p>
                        </div>
                    </div>
                    <div className="info__button">
                        <Link smooth to="#hoc-phi-ghi-danh" className="button--gradient">
                            ĐĂNG KÝ ƯU ĐÃI
                        </Link>
                    </div>
                </div>
            </div>

            <div className="prologue__image">
                <div className="image">
                    <img className="img" src={hinhAnh ? hinhAnh : "../img/code.jpg"} alt={tenKhoaHoc} />
                </div>

                <div className="image__tags">
                    <p className="tags__title">
                        <i class="fa fa-tags"></i>
                        <span>HƠN 30 DỰ ÁN và CÔNG NGHỆ - SKILL</span>
                    </p>
                    <div className="tags__list">
                        <span>ReactJS</span>
                        <span>Angular</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>FLexGrid</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                        <span>Prototype</span>
                        <span>Ajax</span>
                        <span>JSON</span>
                        <span>TypeScript</span>
                        <span>ES6</span>
                        <span>NodeJs</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                        <span>Express</span>
                        <span>Restful API</span>
                        <span>Tư duy lập trình</span>
                        <span>Lập trình hướng đối tượng</span>
                        <span>Thuật toán nền tảng</span>
                        <span>Hướng dẫn CV</span>
                        <span>Hướng dẫn PV</span>
                        <span>Kết nối doanh nghiệp</span>
                        <span> Hỗ trợ tìm việc làm</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoDau;