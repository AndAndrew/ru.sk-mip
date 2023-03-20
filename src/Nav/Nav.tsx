import styles from './Nav.module.css';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                className={styles.item}
                activeClass="active"
                to="Main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Main</Link>
            <Link
                className={styles.item}
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Skills</Link>
            <Link
                className={styles.item}
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Projects</Link>
            <Link
                className={styles.item}
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
            >Contact</Link>
        </div>
    )
}