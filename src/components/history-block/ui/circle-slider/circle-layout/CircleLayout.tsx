import { useCallback, useEffect, useRef, useState } from "react"
import styles from "./CircleLayout.module.scss"
import { calculatePointPosition } from "../../../utils"
import gsap from "gsap"
import { THEMES_HOSTORY } from "../../../constants"
import { ITheme } from "../../../types"

interface CircleLayoutProps {
    activePoint: number,
    setActivePoint: (index: number) => void
}

function CircleLayout({activePoint, setActivePoint}: CircleLayoutProps) {
    const themes: ITheme[] = THEMES_HOSTORY

    const circleRef = useRef<HTMLDivElement>(null)
    const [showTitle, setShowTitle] = useState(false)

    const getPosition = useCallback((index: number): {top: number, left: number} => {
        const pos = calculatePointPosition(themes.length, index)
        return {
            top: pos.y,
            left: pos.x
        }
    }, [themes, activePoint])

    useEffect(() => {
        setShowTitle(false)
        const targetAngle = (-360/themes.length) * activePoint
        gsap.to(circleRef.current, {
            rotation: targetAngle,
            duration: 1,
            ease: "back.out(1.2)",
            onComplete: () => {
                setShowTitle(true)
            }
          })

        gsap.to('.point', {
            rotation: -targetAngle,
            duration: .3
          })
          
    }, [activePoint])

  return (
    <div className={styles.circleLayout}>
      <div ref={circleRef} className={styles.circle}>
        {themes.map((theme: ITheme) => (
          <div 
          key={theme.id} 
          style={getPosition(theme.id)}
          onClick={() => {setActivePoint(theme.id)}}
          className={`point ${styles.circlePoint} ${theme.id === activePoint && styles['circle-point--active']}`}>
            {theme.id}
            <span className={`
                ${styles.circleTitle} 
                ${(showTitle && theme.id === activePoint) ? styles['circle-title--active'] : ""}
                `}>{theme.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CircleLayout
