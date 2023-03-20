import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={styles.contactsBlock}>
            <div className={styles.contactsContainer}>
                <div className={styles.contactItem}>Phone:________</div>
                <div className={styles.contactItem}>Email:________</div>
                <div className={styles.contactItem}>Адрес:________</div>
                <div className={styles.contactItem}>Реквизиты:________</div>
            </div>
        </div>
    )
}