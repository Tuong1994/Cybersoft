import React from 'react';

function TamNhin(props) {
    return (
        <div className="wrapper__vision" id="vision">
            <div className="vision__content">
                <h3><i className="fi-star"></i><span>TẦM NHÌN</span></h3>
                <h4>Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực</h4>
                <p>Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.</p>
            </div>
            <div className="vision__img">
                <img src="../img/member.jpg" alt="member" className="img" />
            </div>

        </div>
    );
}

export default TamNhin;