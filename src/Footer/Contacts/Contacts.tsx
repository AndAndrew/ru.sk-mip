import styles from './Contacts.module.scss'
import {contacts} from "../../contacts";

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactItem}>Phone: <a className={styles.ref} href={`tel:${contacts.phone}`}>{contacts.phone}</a></div>
                <div className={styles.contactItem}>Email:
                    <a className={styles.ref} href={`mailto:${contacts.email}?subject=Добрый день!&body=Добрый день! Я заинтересовался услугами вашей компании.
                           %0D%0A%0D%0AМое имя  .
                           %0D%0A%0D%0A%0D%0A%0D%0A
                           %0D%0AСвязаться со мной можно следующими способами:
                           %0D%0AТелефон:  ,
                           %0D%0AE-mail:  `}> {contacts.email}</a>
                </div>
                {/*<div className={styles.contactItem}>Адрес:________</div>*/}
                {/*<div className={styles.contactItem}>Реквизиты:________</div>*/}
            </div>
        </div>
    )
}