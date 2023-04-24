import styles from './Header.module.scss'
import {Nav} from "./Nav/Nav";

type PropsType = {
    location: string
    changeLocation: (location: string) => void
}

export const Header = (props: PropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}/>
            <Nav location={props.location} changeLocation={props.changeLocation}/>
        </div>
    );
}
