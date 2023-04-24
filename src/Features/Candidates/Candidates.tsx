import styles from './Candidates.module.scss'
import {CandidatesForm} from "./CandidatesForm/CandidatesForm";

export const Candidates = () => {

  return (
    <div id={'Candidates'} className={styles.candidates}>
        <h2>Если Вы в поиске работы</h2>
        <div>Информация для кандидатов. Заполните анкету</div>
        <CandidatesForm/>
    </div>
  );
}
