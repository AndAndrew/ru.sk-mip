import React, {ChangeEvent} from 'react';
import styles from "./FormField.module.scss"
import {ErrorMessage} from "formik";

type PropsType = {
    error: string | boolean | undefined
    handleChange: (e: ChangeEvent<any>) => void
    handleBlur: (e: ChangeEvent<any>) => void
    value: string
    placeholder: string
    type: string
    name: string
}

export const FormField = (props: PropsType) => {
    const {
        error,
        handleChange,
        handleBlur,
        value,
        placeholder,
        type,
        name
    } = {...props}
    return (
        <div className={styles.formField}>
            <input
                className={error ? styles.textFieldError : styles.textField}
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                placeholder={placeholder}
            />
            <ErrorMessage name={name}>
                {msg => <div className={styles.textError}>{msg}</div>}
            </ErrorMessage>
        </div>
    );
};