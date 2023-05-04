import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactItem}>Phone: <a className={styles.ref} href={'tel:+79377990856'}>+7 (937)7990856</a></div>
                <div className={styles.contactItem}>Email:________</div>
                <div className={styles.contactItem}>Адрес:________</div>
                <div className={styles.contactItem}>Реквизиты:________</div>
            </div>
        </div>
    )
}