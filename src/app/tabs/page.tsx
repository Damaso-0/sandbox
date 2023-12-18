import Tabs from '@/Components/Tabs'
import styles from './page.module.css'
import { H2, H3, P } from '@/Components/Typograph'
import Image from 'next/image'

const tabs = [
  {
    label: 'Neve',
    content: (
      <div className={styles.tabsContent}>
        <H3>Neve</H3>
        <P>
          A neve é um fenômeno natural maravilhoso que transforma paisagens em
          maravilhas de inverno. Ela é formada quando a temperatura cai abaixo
          do ponto de congelamento e pequenas partículas de água no ar congelam,
          formando cristais de gelo. Esses cristais se juntam para formar flocos
          de neve, cada um com um padrão único.
        </P>
        <Image
          src="https://images.pexels.com/photos/163756/park-winter-russia-city-park-163756.jpeg"
          width={1000}
          height={500}
          quality={100}
          alt="logo"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    ),
  },
  {
    label: 'Aurora Boreal',
    content: (
      <div className={styles.tabsContent}>
        <H3>Aurora Boreal</H3>
        <P>
          É um fenômeno natural espetacular que ocorre no Polo Norte da Terra1.
          Este fenômeno é resultado do impacto dos ventos solares com o campo
          magnético do nosso planeta1. As partículas subatômicas carregadas de
          energia, conhecidas como plasma, provocam um espetáculo de luz quando
          entram em contato com os campos magnéticos dos polos1.
        </P>
        <Image
          src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg"
          width={1000}
          height={500}
          quality={100}
          alt="logo"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    ),
  },
  {
    label: 'Energia Elétrica',
    content: (
      <div className={styles.tabsContent}>
        <H3>Energia elétrica</H3>
        <P>
          A energia elétrica é gerada a partir de várias fontes de energia, como
          carvão, gás natural, energia nuclear, energia solar e energia eólica.
          O processo de geração de energia elétrica envolve a conversão de uma
          forma de energia em energia elétrica. Por exemplo, em uma usina
          hidrelétrica, a energia potencial da água é convertida em energia
          mecânica quando a água cai de uma altura. Essa energia mecânica é
          então convertida em energia elétrica por um gerador, que funciona com
          base no princípio da indução eletromagnética.
        </P>
        <Image
          src="https://images.pexels.com/photos/2635595/pexels-photo-2635595.jpeg"
          width={1000}
          height={500}
          quality={100}
          alt="logo"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    ),
  },
]

const TabsPage = () => {
  return (
    <section className={styles.section}>
      <H2>Tabs</H2>
      <P style={{ marginBottom: '24px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        reprehenderit.
      </P>

      <Tabs labels={tabs?.map((tab) => tab?.label)}>
        {tabs.map((tab) => (
          <div key={tab?.label}>{tab?.content}</div>
        ))}
      </Tabs>
    </section>
  )
}

export default TabsPage
