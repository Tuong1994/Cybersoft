import React, { useState } from 'react';

function PasswordField(props) {
    const [showPassword, setShowPassWord] = useState(false);
    const { field, form, label, placeholder, disabled, icon } = props;
    const { name } = field;
    const { errors, touched } = form;
    return (
        <div className="form__group--password">
            <div className={disabled ? "group__content group__content--disabled" : "group__content"}>
                <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className={touched[name] && errors[name] ? "content__input content__input--invalid" : "content__input"}
                    placeholder={placeholder}
                    disabled={disabled} />

                <label className={touched[name] && errors[name] ? "content__label content__label--invalid" : "content__label"}>{label}</label>

                {icon ?
                    <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"} onClick={() => {
                        setShowPassWord(!showPassword)
                    }}></i>
                    : null}
            </div>
            {touched[name] && errors[name] ?
                <span className="group__errors">{errors[name]}</span> :
                null}
        </div>
    );
}

export default PasswordField;