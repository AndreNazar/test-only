import { ITheme } from '../../types'
import styles from './EventsSlider.module.scss'

function ThemeTitle ({currentTheme}: {currentTheme: ITheme}) {

    return <div className={styles.themeTitle}>
        <h3>{currentTheme.title}</h3>
    </div>
}

export default ThemeTitle