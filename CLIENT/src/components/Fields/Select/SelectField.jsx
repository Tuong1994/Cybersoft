import React from 'react';

function SelectField(props) {
    const { field, form, option, label, disabled } = props;
    const { errors, touched } = form;
    const { name } = field;
    return (
        <div className="form__group--select">
            <div className="group__content">
                <select
                    {...field}
                    disabled={disabled}
                    className={touched[name] && errors[name] ? "content__input content__input--invalid" : "content__input"}
                >
                    <option>{label}</option>
                    {option()}
                </select>
            </div>
            {touched[name] && errors[name] ? (
                <span className="group__errors">{errors[name]}</span>
            ) : null}
        </div>
    );
}

export default SelectField;