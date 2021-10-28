import React from 'react';

function InputField(props) {
    const { field, form, label, placeholder, type, disabled, icon } = props;
    const { name } = field;
    const { touched, errors } = form
    return (
        <div className="form__group--input">
            <div className={disabled ? "group__content group__content--disabled" : "group__content"}>
                <input
                    {...field}
                    type={type}
                    className={touched[name] && errors[name] ? "content__input content__input--invalid" : "content__input"}
                    placeholder={placeholder}
                    disabled={disabled} />
                <label className={touched[name] && errors[name] ? "content__label content__label--invalid" : "content__label"}>{label}</label>
                <i className={touched[name] && errors[name] ? `${icon} fa-invalid` : icon}></i>
            </div>
            {touched[name] && errors[name] ?
                <span className="group__errors">{errors[name]}</span> :
                null}
        </div>
    );
}

export default InputField;