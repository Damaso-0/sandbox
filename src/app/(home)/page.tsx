import Card from '@/Components/Card'
import styles from './page.module.css'
import { A, H1, P } from '@/Components/Typograph'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div className={styles.header}>
          <Image
            src={
              'https://images.pexels.com/photos/9668272/pexels-photo-9668272.jpeg'
            }
            alt={'Abstract image - Colorful liquid'}
            className={styles.headerImage}
            width={1000}
            height={600}
          />

          <H1>Sandbox</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            ratione. Maiores officiis eum soluta atque <A href="#">inventore</A>
            , dignissimos ratione animi eius, perferendis hic sit fuga dolor
            quis consequatur repellat at rerum!
          </P>
        </div>
      </section>
    </main>
  )
}
