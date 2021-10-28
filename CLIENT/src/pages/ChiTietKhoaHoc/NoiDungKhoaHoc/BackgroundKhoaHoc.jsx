import React from 'react';

function BackgroundKhoaHoc(props) {
    return (
        <div className="wrapper__background">
            <div className="background__inner">
                <div className="inner__item">
                    <img src="../img/mentors/mentors1.jpg" alt="mentors" className="img"/>
                    <div className="item__content">
                        <h6>16</h6>
                        <p>KINH NGHIỆM</p>
                    </div>
                </div>

                <div className="inner__item">
                    <img src="../img/mentors/mentors3.jpg" alt="mentors" className="img"/>
                    <div className="item__content">
                        <h6>15</h6>
                        <p>GV ĐÀO TẠO TẠI ARIZONA - MỸ</p>
                    </div>
                </div>

                <div className="inner__item">
                    <img src="../img/member2.jpg" alt="member" className="img"/>
                    <div className="item__content">
                        <h6>7</h6>
                        <p>CHI NHÁNH</p>
                    </div>
                </div>

                <div className="inner__item">
                    <img src="../img/class/class-1.jpg" alt="class" className="img"/>
                    <div className="item__content">
                        <h6>Hơn 4200</h6>
                        <p>HỌC VIÊN ĐÃ THAM GIA</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BackgroundKhoaHoc;