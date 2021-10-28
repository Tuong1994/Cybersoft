import React, { useEffect } from 'react';

function VoThanhNhon(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="student-six">
            <div className="student-six__wrapper">
                <div className="wrapper__content">
                    <div className="content__img">
                        <img src="../img/student/VoThanhNhon/student-10.jpeg" alt="Võ Thành Nhơn" className="img" />
                    </div>
                    <div className="content">
                        <h4>Câu chuyện của VÕ THÀNH NHÂN - Học viên tại CyberSoft Academy</h4>
                        <p>“Tìm thấy đam mê và đi đúng hướng ngay từ khi bắt đầu là may mắn, nhưng nếu không cố gắng, dù là người đi trước vẫn không thể thành công.”</p>
                        <p>Võ Thành Nhân - sinh viên IT tại trường Cao Đẳng Công Nghệ Thủ Đức, hiện đang làm việc tại công ty TNHH Techable đến với lập trình vì đam mê, theo bạn có phải chỉ cần có đam mê thì sẽ làm được tất cả?</p>
                        <h6>Định hướng và tiến triển việc học lập trình thời gian đầu</h6>
                        <p>Việc học của mình lúc đầu khá trì trệ và chưa có nhiều động lực. Mỗi ngày chỉ học được một ít và không hệ thống được kiến thức đã học. Khi bạn học một cách không có hệ thống, không cố gắng tìm cách ghi nhớ những gì mình đã học một cách hiệu quả thì việc học sẽ trở nên rất nhàm chán vì mới học hôm trước, hôm sau bạn đã quên. Ban đầu việc học của mình tiến triển như vậy, mình dần nghĩ mình cần một môi trường tốt hơn, một môi trường mới hơn và có thể mang lại cảm hứng cho mình.</p>
                    </div>
                </div>

                <div className="wrapper__content">
                    <div className="content">
                        <h6>Tìm kiếm một môi trường mới</h6>
                        <p>Mình dần cảm thấy việc học ở trường chỉ qua lý thuyết suông, rất ít những bài để thực hành một cách thực tế nhất, cứ như vậy, mỗi ngày một vài dòng code, mình không thể tiến bộ được. Vì vậy, mình đã quyết định tìm một vài trung tâm dạy lập trình với mong muốn có thể được thực hành nhiều hơn và học một cách có hệ thống hơn.</p>
                        <p>Mình tìm thấy CyberSoft Academy cũng chỉ là một sự ngẫu nhiên. Sau khi tìm được fanpage trên facebook, mình đã tìm đọc rất nhiều những đánh giá về trung tâm. Đến bây giờ thì có lẽ quyết định đúng đắn nhất trong quá trình theo học lập trình của mình.</p>
                        <p>Ngoài những kiến thức mới, mình được tìm hiểu thêm những cách code hay hơn, không bị rập khuôn như trước. Và việc hệ thống hóa kiến thức được học tại trung tâm cũng rất tốt, từ khi ghi nhớ được những thứ mình đã học, biết cách ứng dụng, nhớ lâu do thực hành nhiều qua các dự án đã khiến mình tự tin hơn rất nhiều.</p>
                    </div>
                    <div className="content__img">
                        <img src="../img/student/VoThanhNhon/nhon.jpeg" alt="Võ Thành Nhơn" className="img" />
                    </div>
                </div>

                <div className="wrapper">
                    <p>Hiện tại mình đã học khóa LẬP TRÌNH FRONT-END THEO DỰ ÁN. Những kiến thức mà mình học được như HTML, CSS, JS, Jquery, Angular… đã giúp ích rất nhiều cho công việc của mình tại công ty FINDSOFT. Tìm được môi trường học tốt hơn, dường như mình đã có thêm rất nhiều động lực để tự học, luyện tập nhiều hơn. Ngoài tài liệu học ở trường, mình thường hay tham khảo thêm những kiến thức khác qua https://www.w3schools.com/, https://developer.mozilla.org/vi/, youtube, ...., mỗi ngày đều ôn lại những thứ mình đã học để thật sự nắm vững.</p>
                </div>
            </div>
            <div className="student-six__img">
                <img className="img" src="../img/student/VoThanhNhon/chat.jpg" alt="Võ Thành Nhơn" />
            </div>
        </div>
    );
}

export default VoThanhNhon;