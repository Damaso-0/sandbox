import styles from './page.module.css'
import CardsCarousel from '@/Components/CardsCarousel'
import { H2, H3, P } from '@/Components/Typograph'
import Carousel from '@/Components/Carousel'

const genericCarouselData = [
  {
    id: 1,
    name: 'Card 1',
    description: 'Description 1',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 2,
    name: 'Card 2',
    description: 'Description 2',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 3,
    name: 'Card 3',
    description: 'Description 3',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 4,
    name: 'Card 4',
    description: 'Description 4',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 5,
    name: 'Card 5',
    description: 'Description 5',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 6,
    name: 'Card 6',
    description: 'Description 6',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 7,
    name: 'Card 7',
    description: 'Description 7',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 8,
    name: 'Card 8',
    description: 'Description 8',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 9,
    name: 'Card 9',
    description: 'Description 9',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
  {
    id: 10,
    name: 'Card 10',
    description: 'Description 10',
    image: 'https://images.pexels.com/photos/3600814/pexels-photo-3600814.jpeg',
  },
]

const CarouselsPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <section className={styles.section}>
        <H2>Cards Carousel</H2>
        <P>Carrossel infinito de 5 cards, com transição automatica.</P>
        <CardsCarousel />
      </section>

      <section className={styles.section}>
        <H2 style={{ margin: '0 30px' }}>Generic Carousel</H2>
        <P style={{ margin: '0 30px', marginBottom: '24px' }}>
          Carrossel infinito de 5 cards, com transição automatica
        </P>
        <Carousel className={styles.genericCarousel}>
          {genericCarouselData?.map((item) => (
            <div
              key={item?.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className={styles.genericCarouselCard}>
              <div style={{ zIndex: 1 }}>
                <H3 style={{ color: '#bbb' }}>{item?.name}</H3>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  )
}

export default CarouselsPage
