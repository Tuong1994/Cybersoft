import React from 'react';

function FileField(props) {
    const { field, form, label, type, placeholder } = props;
    const { name } = field;
    const { touched, errors, setFieldValue  } = form;
    return (
        <div className="form__group--file">
            <div className="group__content">
                <input
                    onChange={(e) => {
                        setFieldValue("hinhAnh", e.target.files[0]);
                    }}
                    type={type}
                    placeholder={placeholder}
                    className="content__input"
                />
                <label className="content__name">{label}</label>
            </div>
            {touched[name] && errors[name] ? (
                <span className="group__errors">{errors[name]}</span>
            ) : null}
        </div>
    );
}

export default FileField;