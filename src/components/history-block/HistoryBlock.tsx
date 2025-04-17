import { useState } from "react"
import styles from "./HistoryBlock.module.scss"
import { CircleSlider, Title } from "./ui"
import EventsSlider from "./ui/events-slider/EventsSlider"

function HistoryBlock() {
    const [activePoint, setActivePoint] = useState(1)
  return (
    <div className={styles.historyBlock}>
        <Title />
        <CircleSlider activePoint={activePoint} setActivePoint={setActivePoint} />
        <EventsSlider themeId={activePoint} />
    </div>
  )
}
export default HistoryBlock
