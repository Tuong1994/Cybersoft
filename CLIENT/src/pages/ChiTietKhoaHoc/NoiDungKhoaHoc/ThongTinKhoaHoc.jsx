import React from 'react';

function ThongTinKhoaHoc({ thongTinKhoaHoc }) {
    return (
        <div className="wrapper__detail" id="thong-tin-khoa-hoc">
            <h1 className="detail__title">
                <i class="fa fa-briefcase"></i>
                <span>THÔNG TIN KHÓA HỌC</span>
            </h1>

            <ul className="detail__list">
                <li className="list__item">
                    Bạn đang tìm một nghề đang HOT nhất và mức lương cao hiện nay?
                </li>
                <li className="list__item">
                    Bạn đang tìm một công việc mới theo đam mê của bạn?
                </li>
                <li className="list__item">
                    Bạn muốn bắt đầu một nghề mới cho mình nhưng chưa biết bắt đầu từ đâu?
                </li>
                <li className="list__item">
                    Bạn cần một trung tâm chuyên nghiệp, học xong có việc ngay, đáp ứng mọi nhu cầu tuyển dụng của doanh nghiệp ?
                </li>
                <li className="list__item">
                    Bạn sẽ được cung cấp TẤT TẦN TẬT các kiến thức để có thể ỨNG TUYỂN NGAY bất kì công ty nào tuyển dụng về {thongTinKhoaHoc?.tenKhoaHoc} qua các dự án vô cùng thực tế.
                </li>
                <li className="list__item">
                    Bạn sẽ code 'Sặp mặt' , không lý thuyết lan man bởi các Giảng viên vô cùng tận tâm, cực kì chuyên nghiệp và vô cùng dễ hiểu, được support nhiệt tình mọi lúc cùng với MENTOR hỗ trợ suốt quá trình học.
                </li>
                <li className="list__item">
                    Bạn sẽ được rèn luyện kỹ năng làm việc nhóm, kỹ năng tự học, kỹ năng nghiên cứu, kỹ năng đọc sách tiếng anh, kỹ năng làm việc theo qui trình, kỹ năng thuyết trình và kỹ năng phân tích dự án,...
                </li>
                <li className="list__item">
                    Tài nguyên học tập và hệ thống học tập vô cùng lớn và chuyên nghiệp, bên cạnh việc học trực tiếp cùng giảng viên, bạn sẽ có các hệ thống để thẩm định bạn, hệ thống Bài giảng và HƠN <strong>400 VIDEO</strong> đã được thu âm cực kì chất lượng theo dự án để bạn học tập theo phương pháp hoàn toàn mới, giúp code tốt, nhớ tốt và review bài giảng.
                </li>
                <li className="list__item">
                    VÀ ĐẶC BIỆT bạn CHỨNG TỎ với nhà tuyển dụng bạn có đầy đủ kinh nghiệm từng trải qua các dự án, điều mà Doanh nghiệp luôn yêu cầu khi phỏng vấn !!!!!
                </li>
            </ul>

            <div className="detail__question">
                <div className="question__wrapper">
                    <h4>{thongTinKhoaHoc?.tenKhoaHoc} LÀ CÁI GÌ SAO MÀ "HOT" THẾ ?</h4>
                    <div className="wrapper__info">
                        <div className="info">
                            <p>
                                Bạn hiểu biết về công nghệ. Bạn thích làm việc trong các dự án đầy thách thức, sáng tạo và bạn đã sẵn sàng cho nghề nghiệp của mình một cách nghiêm túc. Nếu điều này bạn cảm thấy thân thuộc, {thongTinKhoaHoc?.tenKhoaHoc} đúng là nghề mà bạn chọn.<br />
                                <strong>** LƯƠNG CAO, NHU CẦU CAO</strong>, công việc an toàn với rất nhiều lựa chọn, rất nhiều công việc làm thêm trong sự nghiệp phát triển web của bạn.

                                Sau đây, bạn có thể chỉ cần gõ cụm từ “{thongTinKhoaHoc?.tenKhoaHoc}” trên google hoặc Vietnamworks, ItViec, hoặc CareerBuilder, bạn sẽ tìm thấy vô số việc làm với mức lương không dưới 80 triệu/1 năm và có thể đến hơn 300 triệu/ năm đối với những bạn có kinh nghiệm.
                            </p>
                            <div className="info__img">
                                <img src="../img/vietnamwork.png" alt="vietnamwork" className="img" />
                                <img src="../img/builder.png" alt="builder" className="img" />
                            </div>
                        </div>

                        <div className="info">
                            <h5> Nhu cầu việc làm ngành lập trình</h5>
                            <p>
                                Đối với chuyên gia của một số lĩnh vực, việc tìm kiếm một công việc mới có thể là khó khăn, xin việc khắp nơi chưa chắc được nhận, sự cạnh tranh rất cao. Tuy nhiên, đối với những lập trình viên, những nhà phát triển phần mềm, điện thoại của bạn sẽ liên tục đổ chung nếu bạn thật sự có kinh nghiệm. Ngành lập trình nói chung và {thongTinKhoaHoc?.tenKhoaHoc} nói riêng được liệt kê vào các  ngành có thể kiếm được nhiều tiền nhất. Những bạn đã có kinh nghiệm với {thongTinKhoaHoc?.tenKhoaHoc} được săn đón và mời chào với mức lương rất cao.
                            </p>
                            <div className="info__img">
                                <img src="../img/salary.jpg" alt="salary" className="img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question__wrapper">
                    <h4>TẠI SAO NGHỀ {thongTinKhoaHoc?.tenKhoaHoc} LẠI HOT ? NGHỀ {thongTinKhoaHoc?.tenKhoaHoc} LÀM GÌ ? LƯƠNG NHIÊU?</h4>
                    <p>Giờ đây, các bạn chỉ cần gõ từ {thongTinKhoaHoc?.tenKhoaHoc}, các bạn sẽ thấy hàng triệu kết quả xuất hiện. Nó là cái gì mà sao hot vậy?<br />
                        Tất cả các sản phẩm website, cái 'ăn tiền' đối với khách hàng chính là bề ngoài của sản phẩm. Mặc cho cái 'beck ăn - backend" nó có cao siêu bao nhiêu đi chăng nữa, nó có cả triệu chức năng cũng không quan tâm luôn. Bởi vì cái mà khách hàng thấy, cái mà người dùng 'sờ mó' cảm nhận được là cái bề ngoài bóng bẩy của nó và sự tiện dụng, dễ xài của nó.<br />
                        Do vậy, muốn sản phẩm nhiều người xài, nhiều người truy cập, anh phải trau chút cái Giao diện bên ngoài, phải làm thật sự tiện dụng mới được, không thì sản phẩm của anh bị dẹp ngay, và công ty anh làm 'sập tiệm' .
                        Và thứ cực kì quan trọng nữa, đó chính là kỹ năng năng giải quyết vấn đề, kỹ năng đưa bài toán thực tế vào lập trình là cực kì quan trọng của một thằng 'dev bro' , toàn chỉ nghe là học ngôn ngữ này, ngôn ngữ nọ, mà kỹ năng này không có thì khó mà lên chức cao nổi. Đây là sự sống còn của 'thằng' dev.
                        Mà các món này ở trường ko có đâu, vài chỗ thì lung tung, CyberSoft Academy biết được cái nào là tốt nhất cho các bạn, cái nào là học xong demo được, trình chiếu được, khoe với thiên hạ được, nghiên cứu chuyên sâu lên được, tự tin với nhà tuyển dụng, xem CV là 'hốt ngay'.<br />
                        <strong style={{textTransform: "uppercase"}}>VÀ LÝ DO BẠN {thongTinKhoaHoc?.tenKhoaHoc} NGAY...</strong> Nhu cầu cao, lương cao, linh hoạt, được săn đón nhiều khiến cho sự phát triển của nghề {thongTinKhoaHoc?.tenKhoaHoc} trở thành sự lựa chọn tuyệt vời cho sự nghiệp, cho dù bạn bạn mới bắt đầu cho sự chuyên nghiệp hoặc chỉ mới bắt đầu một chương mới.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default ThongTinKhoaHoc;