import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactItem}>Phone: <a className={styles.ref} href={'tel:+79377990856'}>+7 (937)7990856</a></div>
                <div className={styles.contactItem}>Email:
                    <a className={styles.ref} href={`mailto:info@skmip.ru?subject=Добрый день!&body=Добрый день! Я заинтересовался услугами вашей компании.
                           %0D%0A%0D%0AМое имя  .
                           %0D%0A%0D%0A%0D%0A%0D%0A
                           %0D%0AСвязаться со мной можно следующими способами:
                           %0D%0AТелефон:  ,
                           %0D%0AE-mail:  `}> info@skmip.ru</a>
                </div>
                {/*<div className={styles.contactItem}>Адрес:________</div>*/}
                {/*<div className={styles.contactItem}>Реквизиты:________</div>*/}
            </div>
        </div>
    )
}