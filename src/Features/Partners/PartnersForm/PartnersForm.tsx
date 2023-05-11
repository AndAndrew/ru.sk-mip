import {Formik} from "formik";
import styles from './PartnersForm.module.scss'
import {FormField} from "../../../Common/FormField/FormField";
import emailjs from '@emailjs/browser';
import {useState} from "react";

type FormikErrorType = {
    company?: string
    fio?: string
    phone?: string
    email?: string
}

type StateType = 'normal' | 'inProgress' | 'error'

export const PartnersForm = () => {

    const [state, setState] = useState<StateType>('normal')

    return (
        <Formik
            initialValues={{company: '', fio: '', phone: '', email: ''}}
            validate={values => {
                const errors: FormikErrorType = {};

                if (!values.company) {
                    errors.company = 'Required';
                }

                if (!values.fio) {
                    errors.fio = 'Required';
                }

                if (!values.phone) {
                    errors.phone = 'Required';
                } else if (!/^[+]?[0-9]?\s?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.phone)) {
                    errors.phone = 'Invalid phone number';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }


                return errors;
            }}
            onSubmit={
                values => {
                    setState('inProgress')
                    setTimeout(() => {
                        try {
                            emailjs.send('service_ds22a3p', 'template_jvsswq4', values, '2t0UAOVoQPjZ94uc5')
                                .then((result) => {
                                    setState('normal')
                                    alert('Отправлено успешно.')
                                });
                        } catch {
                            setState('normal')
                            alert('Сообщение не отправлено. Что-то не так. Приносим свои извинения. Пожалуйста, попробуйте связаться с нами другими способами.')
                        }
                    }, 1000)
                }
            }
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <FormField
                        error={errors.company && touched.company && errors.company}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.company}
                        placeholder={'Компания'}
                        type={'company'}
                        name={'company'}
                    />
                    <FormField
                        error={errors.fio && touched.fio && errors.fio}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.fio}
                        placeholder={'Ф.И.О.'}
                        type={'fio'}
                        name={'fio'}
                    />
                    <FormField
                        error={errors.phone && touched.phone && errors.phone}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.phone}
                        placeholder={'Телефон'}
                        type={'phone'}
                        name={'phone'}
                    />
                    <FormField
                        error={errors.email && touched.email && errors.email}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                        placeholder={'E-mail'}
                        type={'email'}
                        name={'email'}
                    />
                    <button className={styles.submitButton} disabled={state !== 'normal'} type="submit">
                        {state === 'inProgress' ? 'Подождите...' : 'Отправить'}
                    </button>
                </form>
            )}
        </Formik>
    );
};