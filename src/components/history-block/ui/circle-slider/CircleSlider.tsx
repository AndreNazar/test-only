import gsap from 'gsap';
import CircleLayout from './circle-layout/CircleLayout'
import styles from './CircleSlider.module.scss'
import NavigationButtons from './navigation-buttons/NavigationButtons'
import { useEffect, useMemo, useRef } from 'react';
import { THEMES_HOSTORY } from '../../constants';

interface CircleSliderProps {
    activePoint: number,
    setActivePoint: (point: number | ((prev: number) => number)) => void
}

export function CircleSlider({activePoint, setActivePoint}: CircleSliderProps) {

    const themesCount = THEMES_HOSTORY.length
    const dateFromRef = useRef<HTMLDivElement>(null)
    const dateToRef = useRef<HTMLDivElement>(null)
    const currentPoint = useMemo(() => THEMES_HOSTORY.find(theme => theme.id === activePoint), [activePoint])
    const prevDateFromRef = useRef(currentPoint?.yearFrom || 1970)
    const prevDateToRef = useRef(currentPoint?.yearTo || 2022)

    const handlePointClick = (action: 'prev' | 'next') => {
        if(action === 'prev') {
            if(activePoint === 1) setActivePoint(themesCount)
            else setActivePoint((prev: number) => prev - 1)
        }else{
            if(activePoint === themesCount) setActivePoint(1)
            else setActivePoint(prev => prev + 1)
        }
    }
    useEffect(() => {
        if (dateFromRef.current && dateToRef.current) {
          gsap.fromTo(dateFromRef.current, 
            { textContent: prevDateFromRef.current },
            { 
              textContent: currentPoint?.yearFrom,
              duration: .4,
              snap: { textContent: 1 },
              ease: "power1.out",
              onUpdate: () => {
                prevDateFromRef.current = currentPoint!.yearFrom
              }
            }
          )
          gsap.fromTo(dateToRef.current, 
            { textContent: prevDateToRef.current },
            { 
              textContent: currentPoint?.yearTo,
              duration: .4,
              snap: { textContent: 1 },
              ease: "power1.out",
              onUpdate: () => {
                prevDateToRef.current = currentPoint!.yearTo
              }
            }
            
          )
        }
      }, [currentPoint])

    return <div className={styles.sliderContainer}>
        <div className={styles.sliderWrapper}>
            <div className={styles.dates}>
                <div ref={dateFromRef} className={styles.datesItem}>{currentPoint?.yearFrom}</div>
                <div ref={dateToRef} className={styles.datesItem}>{currentPoint?.yearTo}</div>
            </div>
            <CircleLayout activePoint={activePoint} setActivePoint={setActivePoint} />
        </div>
        <NavigationButtons activePoint={activePoint} setActivePoint={setActivePoint} allPoints={themesCount} handlePointClick={handlePointClick}  />
    </div>
}