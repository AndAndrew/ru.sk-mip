import {Formik} from "formik";
import styles from './CandidatesForm.module.scss'
import {FormField} from "../../../Common/FormField/FormField";
import emailjs from "@emailjs/browser";
import {useState} from "react";

type FormikErrorType = {
    name?: string
    workSpecialty?: string
    phone?: string
    email?: string
}

type StateType = 'normal' | 'inProgress' | 'error'

export const CandidatesForm = () => {

    const [state, setState] = useState<StateType>('normal')

    return (
        <Formik
            initialValues={{name: '', workSpecialty: '', phone: '', email: ''}}
            validate={values => {
                const errors: FormikErrorType = {};

                if (!values.name) {
                    errors.name = 'Обязательное поле';
                }

                if (!values.workSpecialty) {
                    errors.workSpecialty = 'Обязательное поле';
                }

                if (!values.phone) {
                    errors.phone = 'Обязательное поле';
                } else if (!/^[+]?[0-9]?\s?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(values.phone)) {
                    errors.phone = 'Введите в формате "+7" и 10 цифр номера';
                }

                if (!values.email) {
                    errors.email = 'Обязательное поле';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Неверный формат email адреса';
                }

                return errors;
            }}
            onSubmit={
                values => {
                    setState('inProgress')
                    setTimeout(() => {
                        try {
                            emailjs.send('service_ds22a3p', 'template_1qk2x55', values, '2t0UAOVoQPjZ94uc5')
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
                        error={errors.name && touched.name && errors.name}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.name}
                        placeholder={'Имя'}
                        type={'name'}
                        name={'name'}
                    />
                    <FormField
                        error={errors.workSpecialty && touched.workSpecialty && errors.workSpecialty}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.workSpecialty}
                        placeholder={'Ваша специальность'}
                        type={'workSpecialty'}
                        name={'workSpecialty'}
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