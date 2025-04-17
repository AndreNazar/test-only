import { getWithZero } from '../../../utils'
import Button from './Button'
import styles from './NavigationButtons.module.scss'
import PaginationsBots from './PaginationsBots'

interface NavigationButtonsProps {
    handlePointClick: (action: 'prev' | 'next') => void,
    activePoint: number,
    setActivePoint: (point: number | ((prev: number) => number)) => void,
    allPoints: number
}

function NavigationButtons({handlePointClick, activePoint, setActivePoint, allPoints}: NavigationButtonsProps) {
    return <div className={styles.navigation}>
        <div className={styles.navigation__pages}>
            <p>{`${getWithZero(activePoint)}/${getWithZero(allPoints)}`}</p>
        </div>
        <div className={styles.navigation__buttons}>

            <Button type={"left"} onClick={() => handlePointClick("prev")} endPoint={activePoint === 1} />
            <Button type={"right"} onClick={() => handlePointClick("next")} endPoint={activePoint === allPoints} />
            <PaginationsBots activePoint={activePoint} setActivePoint={setActivePoint} />

        </div>
    </div>
}

export default NavigationButtons