import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uploadAvatarAction } from '../../../redux/actions/HocVienAction';
import useClickOutSide from '../../../hooks/useClickOutSide';
import useOverFlow from '../../../hooks/useOverFlow';
import ButtonLoading from '../../../components/Loading/ButtonLoading';

function UploadAvatar({ uploadImg, setUploadImg, thongTinTaiKhoan, thongTinNguoiDung }) {
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const [imgFile, setImgFile] = useState();
    const [previewImg, setPreviewImg] = useState("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const formRef = useRef(null);
    const dispatch = useDispatch();
    useOverFlow(uploadImg)
    useClickOutSide(formRef, setUploadImg)
    useEffect(() => {
        if (imgFile) {
            setUploadLoading(true);
            setTimeout(() => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImg(reader.result);
                }
                reader.readAsDataURL(imgFile);
                setUploadLoading(false);
            }, 1000)
        } else {
            setPreviewImg("")
        }
    }, [imgFile]);

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            setImgFile(file);
        } else {
            setImgFile(null);
        }
    }
    const handleSumit = (e) => {
        e.preventDefault()
        let data = new FormData();
        data.append("avatar", imgFile)
        dispatch(uploadAvatarAction(data, thongTinTaiKhoan));
    }
    return (
        <div className={uploadImg ? "upload upload--active" : "upload"}>
            <div className={uploadImg ? "upload__wrapper upload__wrapper--active" : "upload__wrapper"} ref={formRef}>

                <div className="wrapper__avatar">
                    <img
                        src={previewImg ? previewImg : thongTinNguoiDung?.avatar || "https://i.pravatar.cc/300"}
                        alt="user avatar"
                        className="avatar__img"
                    />
                    <div className={uploadLoading ? "avatar__loading avatar__loading--active" : "avatar__loading"}>
                        <i class="fa fa-spinner"></i>
                    </div>
                </div>

                <form className="wrapper__form" onSubmit={handleSumit}>
                    <div className="form__group">
                        <label htmlFor="hinhAnh" className={buttonLoading ? "group__title group__title--disabled" : "group__title"}>
                            <i class="fa fa-camera-retro"></i>
                            <div className="title__text">Upload hình ảnh</div>
                        </label>
                        <input
                            id="hinhAnh"
                            type="file"
                            className="group__input"
                            accept="image/*"
                            onChange={handleImgChange}
                            disabled={buttonLoading ? true : false}
                        />
                    </div>
                    <div className="form__button">
                        <button type="button" className="button--gradient" onClick={() => {
                            setUploadImg(false);
                        }}>
                            Quay lại
                        </button>
                        {previewImg === "" ?
                            <button type="button" className="button--disabled">Lưu</button>
                            :
                            <button type="submit" className={buttonLoading ? "button--gradient button--gradient--disabled" : "button--gradient"} onClick={() => {
                                setTimeout(() => {
                                    setUploadImg(false)
                                }, 900)
                            }}>
                                <ButtonLoading />
                                <span>Lưu</span>
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadAvatar;
