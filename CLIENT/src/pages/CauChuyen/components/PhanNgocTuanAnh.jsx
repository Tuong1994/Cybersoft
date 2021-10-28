import React, {useEffect} from 'react';

function PhanNgocTuanAnh(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="student-eight">
            <div className="student-eight__wrapper">
                <div className="wrapper__content">
                    <div className="content">
                        <h4>Câu chuyện của Phan Ngọc Tuấn Anh chia sẻ khi học tập và có việc tại CyberSoft Academy</h4>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="wrapper__img">
                        <img src="../img/student/PhanNgocTuanAnh/student-13.jpg" alt="Phan Ngọc Tuấn Anh" className="img" />
                    </div>
                    <div className="wrapper__img">
                        <img src="../img/student/PhanNgocTuanAnh/1.png" alt="Phan Ngọc Tuấn Anh" className="img" />
                    </div>
                </div>

            </div>
            <div className="student-eight__img">
                <img className="img" src="../img/student/PhanNgocTuanAnh/2.png" alt="Phan Ngọc Tuấn Anh" />
            </div>
        </div>
    );
}

export default PhanNgocTuanAnh;