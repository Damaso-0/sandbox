'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import { Arrow } from '../Icons/Arrow'

interface iCarousel {
  children: React.ReactNode
  childrenSpacing?: number
  className?: string
}

const Carousel = ({ children, childrenSpacing = 8, className }: iCarousel) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)

  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const [itemsSpacing] = useState(childrenSpacing)

  useEffect(() => {
    if (sliderRef.current && leftButtonRef.current && rightButtonRef.current) {
      const sliderChildren =
        sliderRef.current?.children[0]?.getBoundingClientRect()?.width
      const sliderWidth =
        Math.floor(sliderRef.current?.offsetWidth / sliderChildren) *
        sliderChildren

      for (let i = 0; i < sliderRef.current?.children?.length; i++) {
        sliderRef.current?.children[i]?.classList.add(
          styles.carousel__childItem
        )
      }

      if (
        sliderRef.current?.children[0]?.getBoundingClientRect().width *
          sliderRef.current?.children?.length +
          (sliderRef.current?.children?.length - 1) * childrenSpacing <=
        sliderRef.current?.offsetWidth
      ) {
        setShowRightButton(false)
      }

      if (
        rightButtonRef.current &&
        leftButtonRef.current &&
        sliderRef.current
      ) {
        sliderRef.current?.addEventListener('scroll', () => {
          if (sliderRef.current?.scrollLeft === 0) {
            setShowLeftButton(false)
          } else {
            setShowLeftButton(true)
          }

          if (
            sliderRef.current &&
            sliderRef.current?.scrollLeft + sliderRef.current?.offsetWidth >=
              sliderRef.current?.scrollWidth
          ) {
            setShowRightButton(false)
          } else {
            setShowRightButton(true)
          }
        })

        rightButtonRef.current?.addEventListener('click', () => {
          sliderRef.current?.scrollBy(sliderWidth, 0)
        })

        leftButtonRef.current?.addEventListener('click', () => {
          sliderRef.current?.scrollBy(-sliderWidth, 0)
        })
      }
    }
  }, [childrenSpacing])

  return (
    <div className={`${styles.carousel__container} ${className}`}>
      <button
        type="button"
        ref={leftButtonRef}
        className={styles.carousel__leftButton}
        style={{ visibility: showLeftButton ? 'visible' : 'hidden' }}>
        <Arrow direction="left" color="rgb(var(--font-color))" size={32} />
      </button>

      <div
        ref={sliderRef}
        className={styles.carousel__slider}
        style={{ gap: itemsSpacing }}>
        {children}
      </div>

      <button
        type="button"
        ref={rightButtonRef}
        className={styles.carousel__rightButton}
        style={{ visibility: showRightButton ? 'visible' : 'hidden' }}>
        <Arrow direction="right" color="rgb(var(--font-color))" size={32} />
      </button>
    </div>
  )
}

export default Carousel
