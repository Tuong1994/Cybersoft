import React from 'react';

function DiemKhacBiet({ thongTinKhoaHoc }) {
    return (
        <div className="wrapper__different" id="diem-khac-biet">
            <h1 className="different__title">
                <i class="fa fa-check-square"></i>
                <span>ĐIỂM KHÁC BIỆT VÀ LỢI ÍCH CỦA KHÓA {thongTinKhoaHoc?.tenKhoaHoc} TẠI CYBERSOFT</span>
            </h1>

            <div className="different__content">
                <div className="content__one">
                    <div className="content">
                        <h3 className="content__title">
                            Hệ thống học tập
                        </h3>
                        <div className="content__img">
                            <img src="../img/computer.png" alt="computer" className="img" />
                        </div>
                        <p className="content__text">
                            CyberSoft sử dụng hệ thống video trực tuyến và hệ thống LMS ( Learning Management System) hiện đại để hỗ trợ học tập cho các khóa học.
                        </p>
                    </div>

                    <div className="content">
                        <h3 className="content__title">
                            Dự án - bài tập thực tế
                        </h3>
                        <div className="content__img">
                            <img src="../img/computer2.png" alt="computer" className="img" />
                        </div>
                        <p className="content__text">
                            Hệ thống bài tập - dự án thực tế được áp dụng vào từng buổi học. Ngay sau buổi học, học viên đã có thể code các phần của dự án, bài luyện tập chuyên sâu.
                        </p>
                    </div>

                    <div className="content">
                        <h3 className="content__title">
                            Giảng viên - Mentor hỗ trợ
                        </h3>
                        <div className="content__img">
                            <img src="../img/interact.png" alt="interact" className="img" />
                        </div>
                        <p className="content__text">
                            Trong suốt khóa học, học viên được hỗ trợ nhiệt tình từ các giảng viên và các mentor. Giảng viên chia sẻ tất cả các kinh nghiệm có được từ các dự án giảng viên đang làm. Mentor tích cực đôn đốc việc code, hỗ trợ sửa lỗi code và góp ý code đúng chuẩn.
                        </p>
                    </div>

                    <div className="content">
                        <h3 className="content__title">
                            Nhóm thảo luận - tương tác
                        </h3>
                        <div className="content__img">
                            <img src="../img/discuss.png" alt="discuss" className="img" />
                        </div>
                        <p className="content__text">
                            Ngoài giờ học tại lớp, học viên còn được hỗ trợ tích cực từ Giảng viên, Mentor và các bạn cùng lớp trên kênh thảo luận và kênh chat cực kì sôi nổi. Bạn luôn có được động lực học tập cao nhất từ các nhóm thảo luận này.
                        </p>
                    </div>
                </div>

                <div className="content__two">
                    <div className="content__info">
                        <h3 className="info__title">HỆ THỐNG HỌC TẬP TRỰC TUYẾN BỔ TRỢ</h3>
                        <p>Bên cạnh việc học OFFLINE ngay tại trung tâm, bạn còn được truy xuất hệ thống bài giảng, bài tập bao gồm hơn 400 video được thu chất lượng để phục vụ trong suốt thời gian học.</p>
                        <div className="info__inner">
                            <h3 className="inner__title">
                                <i class="fa fa-check"></i>
                                <span>FULL TRUY CẬP</span>
                            </h3>
                            <p>Bạn được truy xuất video 24/07 trong suốt thời gian học tập để xem lại bài, xem bài tập, xem giảng viên đã coding sẵn các tính năng của dự án.</p>
                            <h3 className="inner__title">
                                <i class="fa fa-check"></i>
                                <span>MENTOR SUPPORT</span>
                            </h3>
                            <p>Bạn được MENTOR hỗ trợ ngay tại lớp và trên hệ thống nhóm học tập xuyên suốt thời gian học tập.</p>
                        </div>
                    </div>
                    <div className="content__img">
                        <img src="../img/computer3.png" alt="computer" className="img" />
                    </div>
                </div>

                <div className="content__three">
                    <h3>LỢI ÍCH GIA TĂNG</h3>
                    <div className="content__item">
                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-graduation-cap"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 1: Tốt nghiệp khóa học, bạn có thể tìm công việc với mức lương không dưới 80 triệu/ 1 năm đến 100 triệu /1 năm.</h5>
                                <p>Nếu bạn hoàn thành tất cả các dự án và các nội dung mà CyberSoft đã đưa ra, CyberSoft đảm bảo bạn sẽ được có được công việc xứng đáng với công sức và những gì mà bạn đã bỏ ra. Bạn sẽ được mời gọi từ nhiều công ty tuyển dụng và mức lương đề xuất của bạn hoàn toàn xứng đáng từ 80 triệu/ 1 năm đến 100 triệu /1 năm.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-user-graduate"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 2: Được học thông qua các dự án và có cơ hội được join vào công ty outsource của CyberSoft</h5>
                                <p>Bạn sẽ được học thông qua các dự án outsource thực tế và có thể được chọn để tham gia vào các dự án mà CyberSoft đang triển khai cho khách hàng để bạn tích lũy được nhiều kinh nghiệm làm việc.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-user"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 3: Được truyền đạt và học hỏi những kinh nghiệm từ các dự án vô cùng thực tế từ GV và Mentor</h5>
                                <p>Các giảng viên sẽ hướng dẫn bạn thực hiện các dự án thông qua những kinh nghiệm mà họ đã từng trải. Bạn sẽ được học hỏi qua những kỹ năng xử lý vấn đề, kỹ năng bắt đầu một dự án, cách giải quyết các khó khăn và những điều gì nên tránh khi làm dự án.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-fire"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 4: Học và thực hiện tất cả những SKILL cần thiết của một {thongTinKhoaHoc?.tenKhoaHoc} chuyên nghiệp</h5>
                                <p>Tất cả các SKILL được học được trình bày chi tiết trong phần đề cương chi tiết.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-apple-alt"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 5: Được hỗ trợ ngay tại lớp học và trực tuyến bởi Mentor cực kì nhiệt tình</h5>
                                <p>Mỗi lớp học đều được hỗ trợ bởi 1 hoặc 2 Mentor. Họ sẽ hướng dẫn và dẫn dắt bạn các bài thực hành, các vấn đề bạn thắc mắc, hướng dẫn bạn tạo dự án và thực hiện các chức năng trong dự án. Các Mentor sẽ có nhóm trực tuyến để hỗ trợ bạn những lúc bạn khó khăn khi học và làm việc tại nhà.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-hdd"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 6: Chuẩn hóa toàn bộ kiến thức và nắm vững tư duy, cốt lõi của một lập trình Front - End chuyên nghiệp</h5>
                                <p>Bạn được cung cấp toàn bộ kiến thức để không bị hỏng chỗ nào, bạn nắm cái cốt lõi để bạn bất chấp môi trường làm việc, bạn hoàn toàn có thể tự thích nghi và tự tìm hiểu các công nghệ mới dựa vào nền tảng mà chúng tôi đã cung cấp cho bạn.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-bookmark"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 7: Nâng cao kỹ năng phân tích và giải quyết vấn đề từ các dự án</h5>
                                <p>Bạn học được các kỹ năng làm sao để giải quyết vấn đề, làm sao để phân tích ra thành các phần nhỏ, ước lượng và giải quyết một cách nhanh nhất, toàn vẹn nhất.</p>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-tint"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 8: Rèn luyện và nâng cao các kỹ năng giao tiếp với các nhóm và khách hàng</h5>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fab fa-accusoft"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 9: Hướng dẫn tạo một CV với các dự án mà bạn đã tham gia lúc học và cách Phỏng vấn ấn tượng trước nhà tuyển dụng</h5>
                            </div>
                        </div>

                        <div className="item">
                            <span className="item__icon">
                                <i class="fa fa-briefcase"></i>
                            </span>
                            <div className="item__info">
                                <h5>LỢI ÍCH 10: VỀ VIỆC LÀM SAU KHÓA HỌC</h5>
                                <p>Hướng dẫn làm CV và Deal lương, hỗ trợ kết nối việc làm với doanh nghiệp sau khi hoàn tất toàn bộ dự án trong khoá học</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiemKhacBiet;