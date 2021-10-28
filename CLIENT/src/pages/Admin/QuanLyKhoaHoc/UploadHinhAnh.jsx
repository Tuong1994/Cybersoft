import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useOverFlow from '../../../hooks/useOverFlow';
import ButtonLoading from '../../../components/Loading/ButtonLoading';
import { themHinhAnhKhoaHocBackEndAction } from '../../../redux/actions/AdminAction';

function UploadHinhAnh({ uploadModal, setUploadModal }) {
    const { khoaHocCapNhat } = useSelector(state => state.AdminReducer);
    const { buttonLoading } = useSelector(state => state.LoadingReducer);
    const { page } = useSelector(state => state.PaginationReducer);
    const [imgLoading, setImgLoading] = useState(false);
    const [previewImg, setPreviewImg] = useState("");
    const [imgFile, setImgFile] = useState("");
    const dispatch = useDispatch();
    const modalRef = useRef(null);
    useOverFlow(uploadModal);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setPreviewImg("");
                setUploadModal(false);
            }
        }
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    })
    useEffect(() => {
        setImgLoading(true);
        setTimeout(() => {
            if (imgFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImg(reader.result);
                };
                reader.readAsDataURL(imgFile);
            } else {
                setPreviewImg("")
            }
            setImgLoading(false);
        }, 1000)
    }, [imgFile])
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {
            setImgFile(file);
        } else {
            setImgFile("");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("hinhAnh", imgFile);
        dispatch(themHinhAnhKhoaHocBackEndAction(data, khoaHocCapNhat?.maKhoaHoc, page));
    }
    return (
        <div className={uploadModal ? "course-upload course-upload--active" : "course-upload"}>
            <div className={uploadModal ? "course-upload__wrapper course-upload__wrapper--active" : "course-upload__wrapper"} ref={modalRef}>
                <h5 className="wrapper__title">{khoaHocCapNhat?.tenKhoaHoc}</h5>
                <div className="wrapper__preview">
                    <div className={imgLoading ? "preview__loading preview__loading--active" : "preview__loading"}>
                        <i class="fa fa-spinner"></i>
                    </div>
                    <img src={previewImg ? previewImg : khoaHocCapNhat?.hinhAnh || "../img/code.jpg"} alt={khoaHocCapNhat?.tenKhoaHoc} className="preview__image" />
                </div>
                <form className="wrapper__form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <label htmlFor="hinhAnh" className="group__name">
                            <i class="fa fa-camera-retro"></i>
                            <span>Upload hình ảnh</span>
                        </label>
                        <input id="hinhAnh" type="file" className="group__input" accept="image/*" onChange={handleChange} />
                    </div>
                    <div className="form__button">
                        <button type="button" className="button--gradient" onClick={() => {
                            setUploadModal(false);
                            setPreviewImg("")
                        }}>
                            Quay lại
                        </button>
                        {previewImg === "" ?
                            <button type="button" className="button--disabled" disabled={true}>Lưu</button>
                            :
                            <button type="submit" className={buttonLoading ? "button--gradient button--gradient-disabled" : "button--gradient"}>
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

export default UploadHinhAnh;