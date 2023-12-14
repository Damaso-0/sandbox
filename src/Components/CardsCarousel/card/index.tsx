'use client'

import Link from 'next/link'
import styles from './index.module.css'

interface ICard {
  title: string
  desciption: string
  image: string
  href: string
  style?: React.CSSProperties
  state?: 'secondary' | 'primary' | 'tertiary'
  onClick?: () => void
}

const CardCarousel = ({
  title,
  desciption,
  image,
  href,
  style,
  state = 'tertiary',
  onClick,
}: ICard) => {
  const cardStyles = {
    ...style,
    backgroundImage: `url(${image})`,
  }

  return (
    <div
      className={`${styles.card} ${styles[`${state}`]}`}
      style={cardStyles}
      onClick={onClick}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>

        <Link href={href}>Saiba mais</Link>
      </div>
    </div>
  )
}

export default CardCarousel
