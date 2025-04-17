import { useEffect, useState } from "react"
import styles from "./NavigationButtons.module.scss"
import { THEMES_HOSTORY } from "../../../constants"

interface PaginationsBotsProps {
  activePoint: number
  setActivePoint: (point: number | ((prev: number) => number)) => void
}

function PaginationsBots({ activePoint, setActivePoint }: PaginationsBotsProps) {
  const [points, setPoints] = useState<{ id: number; isActive: boolean }[]>(THEMES_HOSTORY.map((th) => ({ id: th.id, isActive: false })))

  useEffect(() => {
    setPoints((prev) =>
      prev.map((p) => {
        if (p.id === activePoint) {
          return { id: p.id, isActive: true }
        } else {
          return { id: p.id, isActive: false }
        }
      })
    )
  }, [activePoint])

  return (
    <div className={styles.paginations}>
      {points.map((p) => (
        <div key={p.id} 
        onClick={() => setActivePoint(p.id)}
        className={`
            ${styles.paginations__item}
            ${p.isActive ? styles['paginations__item--active'] : ""}
        `}></div>
      ))}
    </div>
  )
}

export default PaginationsBots
