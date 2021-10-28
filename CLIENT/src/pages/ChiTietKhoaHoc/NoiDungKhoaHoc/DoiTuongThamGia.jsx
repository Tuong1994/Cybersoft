import React from 'react';

function DoiTuongThamGia(props) {
    return (
        <div className="wrapper__joiner" id="doi-tuong-tham-gia">
            <div className="joiner__image">
                <img src="../img/people.png" alt="people" className="img" />
            </div>
            <div className="joiner__content">
                <h1 className="content__title">
                    <i class="fa fa-user"></i>
                    <span>ĐỐI TƯỢNG THAM GIA</span>
                </h1>
                <ul className="content__list">
                    <li className="list__item">
                        Bạn đang là sinh viên năm 2, 3 hoặc năm cuối Cao Đẳng hoặc Đại học CNTT.
                    </li>
                    <li className="list__item">
                        Bạn là người đi làm trái nghề nhưng yêu thích CNTT và muốn theo đuổi nó từ đầu
                    </li>
                    <li className="list__item">
                        Bạn là sinh viên IT, Tester, Điện tử, Cơ điện tử, Kinh tế, Ngân hàng, ... mong muốn chuyển nghề
                    </li>
                    <li className="list__item">
                        Bạn đam mê CNTT từ trước nhưng chưa có cơ hội học và đây là thời điểm bạn mong muốn được tham gia lại từ đầu.
                    </li>
                    <li className="list__item">
                        CyberSoft sẽ TƯ VẤN LỘ TRÌNH cho từng đối tượng học viên và các kiến thức cần chuẩn bị để có thể tham gia và Có việc ngay trong ngành này.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DoiTuongThamGia;