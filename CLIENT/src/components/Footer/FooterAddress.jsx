import React from 'react';

function FooterAddress(props) {
    return (
        <div className="footer__address">
            <div className="address__city">
                <div className="city">
                    <p>TP. Hồ Chí Minh</p>
                </div>

                <div className="city__addr-list">

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            Trụ sở: 112 Cao Thắng, Quận 3
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM</p>
                        </div>
                    </div>

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            459 Sư Vạn Hạnh, Quận 10
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: Tầng 2, toà nhà WinHome, 459 Sư Vạn hạnh, Quận 10, TPHCM</p>
                        </div>
                    </div>

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            82 Ung Văn Khiêm, Bình Thạnh
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 82 Ung Văn Khiêm, Bình Thạnh, TPHCM</p>
                        </div>
                    </div>

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp, TPHCM</p>
                        </div>
                    </div>

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            56 Lê Cảnh Tuân, Tân Phú
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 56 Lê Cảnh Tuân, Tân Phú, TPHCM</p>
                        </div>
                    </div>

                    <div className="addr-list__inner">
                        <p className="inner__title">
                            6C Đường số 8, Linh Tây, Thủ Đức (gần ĐH Cảnh Sát)
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 6C Đường số 8, Linh Tây, Thủ Đức, TPHCM</p>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="address__city">
                <div className="city">
                    <p>Đà Nẵng</p>
                </div>

                <div className="city__addr-list">
                    <div className="addr-list__inner">
                        <p className="inner__title">
                            103 Nguyễn Hữu Dật, Hải Châu
                        </p>
                        <div className="inner__content">
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 103 Nguyễn Hữu Dật, Hải Châu, ĐN</p>
                        </div>
                    </div>
                </div>
            </div>

            <span className="address__line"></span>
        </div>
    );
}

export default FooterAddress;