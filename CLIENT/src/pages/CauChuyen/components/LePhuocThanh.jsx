import React, { useEffect } from 'react';

function LePhuocThanh(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="student-nine">
            <div className="student-nine__wrapper">
                <div className="wrapper">
                    <h4>Câu chuyện của LÊ PHƯỚC THÀNH - Học viên tại CyberSoft Academy</h4>
                    <p>“Khi nhu cầu sử dụng app trên smartphone, web nói riêng và công nghệ nói chung ngày càng cao và không có dấu hiệu dừng lại, ngành lập trình cần rất nhiều những nhân tài có đam mê và sẵn sàng cống hiến.”</p>
                </div>

                <div className="wrapper__content">
                    <div className="content__img">
                        <img src="../img/student/LePhuocThanh/student-14.jpg" alt="Lê Phước Thành" className="img" />
                    </div>
                    <div className="content">
                        <p> Lê Phước Thành, từng là sinh viên Cao đẳng kỹ thuật Cao Thắng và hiện là lập trình viên cho Techpro, một người có chí cầu tiến, biết hướng bản thân mình theo những gì công việc đòi hỏi và mong muốn hoàn thiện bản thân. Vậy câu chuyện của Thành là gì?</p>
                        <h6>Lý do nào khiến Thành quyết định theo đuổi lập trình?</h6>
                        <p>Lý do của mình rất đơn giản. Mình thích tạo ra các app có ích cho mọi người sử dụng. Và cho đến bây giờ vẫn vậy, nhưng khi đi làm rồi mình mới nhận ra công việc lập trình thật sự cần rất nhiều mảng kiến thức, và đặc thù công việc của mình rất cần kiến thức về lập trình Front-end. Qua tìm hiểu thì mình thấy kiến thức Front-end rất có ích không chỉ là cho công việc hiện tại mà cả về sau này. Mình nghĩ theo đuổi được đến bây giờ, phần lớn là nhờ sở thích và đam mê.</p>
                        <h6>Và điều gì đã đưa bạn đến CyberSoft Academy?</h6>
                        <p>Lúc mình bắt đầu đi tìm một trung tâm để bổ sung kiến thức về Front-end, mình chưa lên internet hay facebook để tìm kiếm gì cả, mình chỉ đơn giản là hỏi những người bạn đồng môn của mình và họ đều chỉ cho mình CyberSoft Academy với những đánh giá khá tốt. Sau đó mình lên web của CyberSoft Academy thì thấy trung tâm có lộ trình học rất rõ ràng, điều này mình rất thích, đồng thời có một khóa học riêng cho lập trình Front-end đã đánh trúng vào nhu cầu của mình.</p>
                    </div>
                </div>

                <div className="wrapper">
                    <p>Điều khiến mình theo CyberSoft Academy đến bây giờ là vì trung tâm cho mình gần như là đầy đủ kiến thức về lập trình Front-end, đồng thời khóa mình theo học là LẬP TRÌNH FRONT END THEO DỰ ÁN, vì vậy ngoài những lý thuyết, mình còn được luyện tập với những dự án giúp mình có thể tăng khả năng tư duy, nghĩ ra những hướng lập trình tốt hơn, hay hơn. Và như mình đã nói, công việc của mình đòi hỏi kiến thức về Front-end, và cả những công việc sau này, Front-end rất cần thiết, nên mình đã khá yên tâm khi có một nền tảng vững chắc cho bất kì công việc lập trình nào.</p>
                    <p>Mình sẽ cho các bạn một vài ví dụ về những kiến thức về Front-end mà mình được học đã giúp mình ứng dụng rất tốt vào công việc: HTML5, CSS3, JQUERY, JAVASCRIPT, ANGULAR, REACTJS… Và những kiến thức này, mặc dù CyberSoft Academy truyền tải khá đầy đủ nhưng các bạn vẫn nên tìm hiểu thêm ở bên ngoài vì kiến thức là vô tận. Đồng thời ngoài giờ học tại trung tâm, các bạn phải luyện tập thêm ở nhà để tăng khả năng ghi nhớ và tư duy. Một ngày, tính cả những giờ tại công ty, mình dành 7 tiếng để tập code.</p>
                    <p>Front-end quan trọng, nhưng nếu có mong muốn và có thời gian, các bạn nên học thêm về Back-end. Trong 2 năm đầu, mình sẽ cố gắng trau dồi và rèn luyện Front-end, sau đó sẽ tìm hiểu thêm Back-end để trở thành Full Stack. Trong quá trình học, các bạn nên cố gắng trau dồi kiến thức và luyện tập nhiều nhất có thể, trong công việc nên học hỏi đồng nghiệp và không ngừng tìm hiểu các công nghệ mới.</p>
                </div>

                <div className="wrapper">
                    <div className="wrapper__img">
                        <img src="../img/student/LePhuocThanh/chat.png" alt="Lê Phước Thành" />
                    </div>
                </div>

            </div>
            <div className="student-nine__img">
                <img className="img" src="../img/student/LePhuocThanh/email.png" alt="Lê Phước Thành" />
            </div>
        </div>
    );
}

export default LePhuocThanh;