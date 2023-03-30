import {Formik} from "formik";
import styles from './CandidatesForm.module.scss'
import {FormField} from "../../../Common/FormField/FormField";

type FormikErrorType = {
    name?: string
    workSpecialty?: string
    phone?: string
    email?: string
}

export const CandidatesForm = () => {

    return (
        <Formik
            initialValues={{name: '', workSpecialty: '', phone: '', email: ''}}
            validate={values => {
                const errors: FormikErrorType = {};

                if (!values.name) {
                    errors.name = 'Required';
                }

                if (!values.workSpecialty) {
                    errors.workSpecialty = 'Required';
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
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
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
                    <a className={styles.submitButton}
                       href={`mailto:andandrew.k@yandex.ru?subject=Отклик на вакансию!&body=Добрый день! Я заинтересовался вакансиями вашей компании.
                           %0D%0A%0D%0AМое имя ${values.name}.
                           %0D%0AЯ - ${values.workSpecialty}
                           %0D%0A%0D%0A%0D%0A%0D%0A
                           %0D%0AСвязаться со мной можно следующими способами:
                           %0D%0AТелефон: ${values.phone},
                           %0D%0AE-mail: ${values.email}.`}>
                        {/*<button type="submit">*/}
                        Отправить
                        {/*</button>*/}
                    </a>
                </form>
            )}
        </Formik>
    );
};