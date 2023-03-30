import styles from './Header.module.scss'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}/>
            <Nav/>
        </div>
    );
}
