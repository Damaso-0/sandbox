import Image from 'next/image'
import styles from './index.module.css'

interface Props {
  title: string
  href: string
  image: string
}

const Card = ({ title, href, image }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.cardWrapper}>
      <Image width={200} height={200} src={image} alt={title} />
      <h3>{title}</h3>
    </a>
  )
}

export default Card
