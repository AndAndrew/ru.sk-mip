import styles from './Nav.module.scss';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                className={styles.item}
                to="Company"
                spy={true}
                smooth={true}
                duration={350}
            >Наша компания</Link>
            <Link
                className={styles.item}
                to="Partners"
                spy={true}
                smooth={true}
                duration={350}
            >Партнерам</Link>
            <Link
                className={styles.item}
                to="Candidates"
                spy={true}
                smooth={true}
                duration={350}
            >Соискателям</Link>
            <Link
                className={styles.item}
                to="Contacts"
                spy={true}
                smooth={true}
                duration={350}
            >Связаться с нами</Link>
        </div>
    )
}