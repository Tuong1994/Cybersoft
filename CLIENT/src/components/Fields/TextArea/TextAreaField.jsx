import React from 'react';

function TextAreaField(props) {
    const { field, form, placeholder, label, cols, rows } = props;
    const { name } = field;
    const { touched, errors } = form;
    return (
        <div className="form__group--textarea">
            <div className="group__content">
                <textarea
                    {...field}
                    cols={cols}
                    rows={rows}
                    className={touched[name] && errors[name] ? "content__input content__input--invalid" : "content__input"}
                    placeholder={placeholder}
                ></textarea>
                <label className={touched[name] && errors[name] ? "content__name--textarea content__name--textarea--invalid" : "content__name--textarea"}>
                    {label}
                </label>
            </div>
            {touched[name] && errors[name] ? (
                <span className="group__errors">{errors[name]}</span>
            ) : null}
        </div>
    );
}

export default TextAreaField;