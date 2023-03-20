import styles from './Nav.module.scss';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                className={styles.item}
                activeClass="active"
                to="Company"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Наша компания</Link>
            <Link
                className={styles.item}
                // activeClass="active"
                to="forPartner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Партнерам</Link>
            <Link
                className={styles.item}
                // activeClass="active"
                to="forСandidate"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Соискателям</Link>
            <Link
                className={styles.item}
                // activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Связаться с нами</Link>
        </div>
    )
}