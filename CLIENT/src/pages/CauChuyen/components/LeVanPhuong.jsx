import React, { useEffect } from 'react';

function LeVanPhuong(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="student-seven">
            <div className="student-seven__wrapper">
                <div className="wrapper__content">
                    <div className="content__img">
                        <img src="../img/student/LeVanPhuong/phuong.jpg" alt="Lê Văn Phương" className="img" />
                    </div>
                    <div className="content">
                        <h4>Câu chuyện của LÊ VĂN PHƯƠNG - Học viên tại CyberSoft Academy</h4>
                        <p>“Chọn được ngành mình muốn theo chỉ là bước đầu tiên, để đặt nền móng cho ước mơ cần phải biết mình phải đi hướng nào và làm gì để đạt được mục tiêu”</p>
                        <p>Có bao giờ bạn cảm thấy hoang mang và mất định hướng trong chính ngành, lĩnh vực mà mình đã từng tự tin lựa chọn chưa? Những chia sẻ sau đây của Lê Văn Phương, hiện đang làm việc tại Công ty TNHH MTV Việt Nis sẽ một phần nào đó định hướng cho bạn, hay ít nhất là giúp bạn có thêm động lực để tìm ra hướng đi cho sự nghiệp.</p>
                        <h6>Xuất thân là một Front-end developer, vậy khoảng thời gian đầu khi bắt đầu học của Phương như thế nào?</h6>
                        <p>Thời gian đó, mình bị mất căn bản khá nhiều vì không tìm thấy sự hứng thú trong quá trình học dẫn đến chán nản và không chú ý nghe giảng, mình đã bị mất khá nhiều kiến thức. Dần dần tôi bắt đầu cảm thấy hoài nghi với sự lựa chọn của mình, không định hướng rõ được mục tiêu của mình, không biết đích đến là gì, mình đang theo đuổi cái gì. Lúc trước, ước muốn học lập trình của mình cũng được hình thành rất đơn giản, chỉ là mình thích tạo ra các sản phẩm công nghệ giúp ích cho bản thân. Mình nhận thức được mình phải kiên định với lựa chọn của mình và học cho thật đáng. Vì vậy mình quyết định đi tìm một môi trường phù hợp với mình hơn để học lập trình.</p>
                    </div>
                </div>

                <div className="wrapper">
                    <h6>CyberSoft Academy đã mang lại cảm hứng cho Phương như thế nào?</h6>
                    <p>Điều mình cảm thấy tâm đắc nhất ở CyberSoft Academy là được thực hành rất nhiều, được trải nghiệm những dự án thực tế rất bổ ích, thiết thực. Cybersoft đã giúp mình lấy lại được căn bản, và từ đó có thể tự mình phát triển học thêm nhiều framework khác. Ở đây, kỹ năng code của tôi được cải thiện rất nhiều, phần là do được thực hành, đồng thời cũng được học cách tư duy để tự mình tìm ra cách code hay hơn, hiệu quả hơn. Kiến thức mà mình cảm thấy hữu dụng nhất cho đến bây giờ (mình đã và đang theo học khóa LẬP TRÌNH FRONT END THEO DỰ ÁN và FULL-STACK JAVASCRIPT REACT JS, NODE JS QUA DỰ ÁN) là kiến thức căn bản về javascript, ngoài ứng dụng vào công việc, mình cũng có thể ứng dụng vào câu trả lời khi đi phỏng vấn.</p>
                    <p>Điểm đặc biệt ở trung tâm là được thực hành nhiều, tuy nhiên cần rất nhiều sự tự giác của bản thân. Mình đã học các slide do giáo viên tại CyberSoft soạn, và tham khảo các document của mỗi framework. Thường thì ngày nào mình lên công ty cũng code 5-6 tiếng, thời gian rảnh ở nhà code 3 tiếng.</p>
                    <p>Mục tiêu gần của mình trong việc học lập trình là có thể thành thạo tất cả framework có liên quan đến javascript. Sau khi thật sự đặt công sức của mình vào việc học, mình nhận ra, muốn thành thạo một kĩ năng hay kiến thức nào đó, rất cần sự chăm chỉ luyện tập code nhiều hơn, đọc nhiều tài liệu tham khảo hơn, luôn đặt cho mình thật nhiều câu hỏi vì giáo viên ở đây luôn cởi mở và sẵn lòng giải đáp thắc mắc của mình.</p>
                    <h6>Bất kì công việc nào cũng có hướng đi đúng, chỉ cần kiên nhẫn, bạn sẽ tìm ra cách!!!</h6>
                </div>
            </div>
        </div>
    );
}

export default LeVanPhuong;