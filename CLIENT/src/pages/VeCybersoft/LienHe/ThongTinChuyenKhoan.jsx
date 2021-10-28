import React from 'react';

function ThongTinChuyenKhoan(props) {
    return (
        <div className="advisory__banks">
            <div className="banks__list">
                <h1>THÔNG TIN CHUYỂN KHOẢN NỘP HỌC PHÍ</h1>
                <p>Bạn có thể đến bất kỳ ngân hàng nào ở Việt Nam (hoặc sử dụng Internet Banking) để chuyển tiền theo thông tin bên dưới:</p>
                <div className="list__wrapper">
                    <div className="wrapper__card">
                        <div className="card__img">
                            <img className="img" src="../img/banks/vietcombank.png" alt="vietcombank" />
                        </div>
                        <div className="card__content">
                            <p>STK: 0071 00485 7814</p>
                            <p>Chủ TK: Lê Quang Song</p>
                            <p>Ngân hàng Vietcombank, CN Kì Đồng, TPHCM</p>
                        </div>
                    </div>

                    <div className="wrapper__card">
                        <div className="card__img">
                            <img className="img" src="../img/banks/viettinbank.jpeg" alt="viettinbank" />
                        </div>
                        <div className="card__content">
                            <p>STK: 101001109473</p>
                            <p>Chủ TK: Lê Quang Song</p>
                            <p>Ngân hàng Vietin Bank, CN HCM</p>
                        </div>
                    </div>

                    <div className="wrapper__card">
                        <div className="card__img">
                            <img className="img" src="../img/banks/acbbank.png" alt="acbbank" />
                        </div>
                        <div className="card__content">
                            <p>STK: 55.77.45678</p>
                            <p>Chủ TK: Lê Quang Song</p>
                            <p>Ngân hàng ACB, TPHCM</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="banks__map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5096836443972!2d106.67765461411638!3d10.772220662218574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fca39e3b493%3A0x865af6a617c57d82!2sCyberSoft%20Academy!5e0!3m2!1sen!2s!4v1632657655300!5m2!1sen!2s" allowfullscreen="" loading="lazy" title="google-map"></iframe>
            </div>
        </div>
    );
}

export default ThongTinChuyenKhoan;