import styles from './VacanciesPage.module.scss'
import {VacancyItem, VacancyItemType} from "./VacancyItem/VacancyItem";
import {vacancies} from "../../Vacancies";
import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    useState
} from "react";
import {ArrowButton} from "../../Common/ArrowButton/ArrowButton";

type PropsType = {
    changeLocation: (location: string) => void
    setVacancy: (vacancy: VacancyItemType) => void
}

type filtersType = {
    positionFilter: string | null,
    salaryFilter: number | null,
    placeFilter: string | null
}

let filters: filtersType = {
    positionFilter: null,
    salaryFilter: null,
    placeFilter: null
}

let filteredVacancies = vacancies

export const VacanciesPage = (props: PropsType) => {

    const [currentVacancies, setCurrentVacancies] = useState<Array<VacancyItemType>>(vacancies)
    const [sortDirection, setSortDirection] = useState<'up' | 'down'>('up')

    const filter = () => {
        filteredVacancies = vacancies
        if (!filters.positionFilter && !filters.salaryFilter && !filters.placeFilter) {
            setCurrentVacancies(vacancies)
        }
        if (filters.positionFilter) {
            positionFilterChanged(filteredVacancies, filters.positionFilter!)
        }
        if (filters.salaryFilter) {
            salaryFilterChanged(filteredVacancies, filters.salaryFilter!)
        }
        if (filters.placeFilter) {
            placeFilterChanged(filteredVacancies, filters.placeFilter!)
        }
    }

    const getPositions = (): Array<string> => {
        const positions = vacancies.map(vacancy => vacancy.position)
        return positions.filter((el, i) => {
            return positions.indexOf(el) === i
        })
    }
    const getPlaces = (): Array<string> => {
        const places = vacancies.map(vacancy => vacancy.place)
        return places.filter((el, i) => {
            return places.indexOf(el) === i
        })
    }

    const positionFilterChanged = (vacancies: Array<VacancyItemType>, value: string) => {
        const vacs = vacancies.filter(vacancy => vacancy.position === value)
        filteredVacancies = vacs
        setCurrentVacancies(vacs)
    }
    const salaryFilterChanged = (vacancies: Array<VacancyItemType>, value: number) => {
        const vacs = vacancies.filter(vacancy => vacancy.salary >= value)
        filteredVacancies = vacs
        setCurrentVacancies(vacs)
    }
    const placeFilterChanged = (vacancies: Array<VacancyItemType>, value: string) => {
        const vacs = vacancies.filter(vacancy => vacancy.place === value)
        filteredVacancies = vacs
        setCurrentVacancies(vacs)
    }

    const positionInputOnKeyDownHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.currentTarget.value === '') {
            filters = {...filters, positionFilter: null}
            filter()
        } else {
            filters = {...filters, positionFilter: event.target.value}
            filter()
        }
    }

    const placeInputOnKeyDownHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.currentTarget.value === '') {
            filters = {...filters, placeFilter: null}
            filter()
        } else {
            filters = {...filters, placeFilter: event.currentTarget.value}
            filter()
        }
    }

    const salaryInputOnKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (event.currentTarget.value === '') {
                filters = {...filters, salaryFilter: null}
                filter()
            } else {
                filters = {...filters, salaryFilter: Number(event.currentTarget.value)}
                filter()
            }
        }
    }
    const salaryInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === '') {
            filters = {...filters, salaryFilter: null}
            filter()
        } else {
            filters = {...filters, salaryFilter: Number(event.currentTarget.value)}
            filter()
        }
    }

    const sortHandler = () => {
        if (sortDirection === 'up') {
            setSortDirection('down')
            setCurrentVacancies(currentVacancies.sort((a, b) => {
                return Number(a.id) - Number(b.id)
            }))
        }
        if (sortDirection === 'down') {
            setSortDirection('up')
            setCurrentVacancies(currentVacancies.sort((a, b) => {
                return Number(b.id) - Number(a.id)
            }))
        }
    }

    return <div className={styles.container}>
        <div className={styles.block}>
            <div className={styles.sortBlock}>
                <div className={styles.sortTitle}>Какую работу Вы ищите?</div>
                <select className={styles.sortInput}
                        defaultValue={''}
                        onChange={positionInputOnKeyDownHandler}>
                    <option value={''}>Должность</option>
                    {getPositions().map((position, index) =>
                        <option key={index} value={position}>{position}</option>)
                    }
                </select>
                <select className={styles.sortInput}
                        defaultValue={''}
                        onChange={placeInputOnKeyDownHandler}>
                    <option value={''}>Город</option>
                    {getPlaces().map((place, index) =>
                        <option key={index} value={place}>{place}</option>)
                    }
                </select>
                <input className={styles.sortInput}
                       placeholder='Зарплата от'
                       type={"number"}
                       onKeyDown={salaryInputOnKeyDownHandler}
                       onBlur={salaryInputBlurHandler}>
                </input>
                <ArrowButton type={sortDirection} onClickHandler={sortHandler}/>
            </div>
            <div className={styles.vacancies}>
                <div className={styles.item}>
                    <div>'Много много много много много много много много много много много много много много текста о
                        вакансии'
                    </div>
                </div>
                {currentVacancies.map(vacancy =>
                    <VacancyItem key={vacancy.id}
                                 vacancy={{...vacancy, salary: vacancy.salary}}
                                 setVacancy={props.setVacancy}
                                 changeLocation={props.changeLocation}
                    />)}
            </div>
        </div>
    </div>
};