'use client'

import { useEffect, useState } from 'react'
import { cardData } from './data'
import styles from './index.module.css'
import CardCarousel from './card'

const CardsCarousel = () => {
  const data = cardData
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex, data.length])

  const cardStyles = {
    left: {
      left: '50%',
      transform: 'translateX(calc(-50% - 200px))',
    },
    semiLeft: {
      left: '50%',
      transform: 'translateX(calc(-50% - 110px))',
    },
    center: {
      left: '50%',
      transform: 'translateX(calc(-50%))',
    },
    semiRight: {
      left: '50%',
      transform: 'translateX(calc(-50% + 110px))',
    },
    right: {
      left: '50%',
      transform: 'translateX(calc(-50% + 200px))',
    },
  }

  const getCardStyle = (index: number) => {
    if (index === currentIndex) {
      return cardStyles.center
    } else if (index === (currentIndex - 1 + data.length) % data.length) {
      return cardStyles.semiLeft
    } else if (index === (currentIndex + 1) % data.length) {
      return cardStyles.semiRight
    } else if (index === (currentIndex - 2 + data.length) % data.length) {
      return cardStyles.left
    } else if (index === (currentIndex + 2) % data.length) {
      return cardStyles.right
    } else {
      return cardStyles.center
    }
  }

  const getCardState = (index: number) => {
    if (index === currentIndex) {
      return 'primary'
    } else if (index === (currentIndex - 1 + data.length) % data.length) {
      return 'secondary'
    } else if (index === (currentIndex + 1) % data.length) {
      return 'secondary'
    } else if (index === (currentIndex - 2 + data.length) % data.length) {
      return 'tertiary'
    } else if (index === (currentIndex + 2) % data.length) {
      return 'tertiary'
    } else {
      return 'tertiary'
    }
  }

  return (
    <div className={styles.highlightCarousel}>
      <div className={styles.highlightCarouselContent}>
        {data.map((item, index) => (
          <CardCarousel
            onClick={() => setCurrentIndex(index)}
            key={item?.title}
            title={item?.title}
            image={item?.image}
            desciption={item?.description}
            href={item?.href}
            state={getCardState(index)}
            style={getCardStyle(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsCarousel
