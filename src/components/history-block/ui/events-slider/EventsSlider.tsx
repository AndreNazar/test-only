import styles from "./EventsSlider.module.scss"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { useEffect, useMemo, useRef, useState } from "react"
import { EVENTS_HOSTORY, THEMES_HOSTORY } from "../../constants"
import { IEvent, ITheme } from "../../types"
import gsap from "gsap"
import ThemeTitle from "./ThemeTitle"


interface EventsSliderProps {
  themeId: number,
}

function EventsSlider({themeId}:EventsSliderProps) {
  const swiperRef = useRef<any>(null)
  const containerRef = useRef<any>(null)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ITheme>(THEMES_HOSTORY[0])
  const gtl = gsap.timeline();

  const [currentEvent, setCurrentEvent] = useState<IEvent[]>([])
  
  const updateNavigation = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }

  useEffect(() => {

    gtl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentEvent(EVENTS_HOSTORY.filter(event => event.theme === themeId))
        setCurrentTheme(THEMES_HOSTORY.find(th => th.id === themeId)!)
        setTimeout(() => {
          swiperRef.current.swiper.slideTo(0)
          updateNavigation(swiperRef.current.swiper)
        }, 1);
        
      }
    })
    .to(containerRef.current, {
      top: 20,
    })
    .to(containerRef.current, {
      top: 0,
      opacity: 1,
      duration: 0.4,
      delay: .5,
    })

    return () => {
      gtl.kill()
    }

  }, [themeId])

  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <ThemeTitle currentTheme={currentTheme!} />
      <button className={`
        ${styles.slideButton} 
        ${isBeginning ? styles["slideButton--disabled"] : ""}
      `} 
      onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <img src={require("../../../../assets/imgs/arrow_left.svg")} alt="" />
      </button>
      <Swiper 
      ref={swiperRef} 
      className={styles.swiper} 
      modules={[Pagination]} 
      spaceBetween={20} 
      slidesPerView={2}
      slidesOffsetBefore={32}
      slidesOffsetAfter={32}
      breakpoints={{
        720: {
          slidesPerView: 3,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 50, 
        }
      }}
      
      onSlideChange={updateNavigation}
      onInit={updateNavigation}
      >{currentEvent.map((event: IEvent) =>
        <SwiperSlide key={event.id} className={styles.swiperSlide}>
          <p className={styles.date}>{event.year}</p>
          <p className={styles.text}>{event.content}</p>
        </SwiperSlide>)}
      </Swiper>
      <button
      className={`
        ${styles.slideButton} 
        ${isEnd ? styles["slideButton--disabled"] : ""}
      `} 
       onClick={() => swiperRef.current?.swiper.slideNext()}>
        <img src={require("../../../../assets/imgs/arrow_right.svg")} alt="" />
      </button>
    </div>
  )
}
export default EventsSlider
