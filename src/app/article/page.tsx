import Image from 'next/image'
import styles from './page.module.css'
import { H1, H4, P } from '@/Components/Typograph'
import Quiz from '@/Components/Quiz'
import { articleQuizData, articleQuizMultData } from './quizData'

const ArticlePage = () => {
  return (
    <div className={styles.articlePage__container}>
      <Image
        className={styles.articlePage__image}
        src={
          'https://images.unsplash.com/photo-1701799327106-1958bd6e81c4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt={'Page image'}
        width={1000}
        height={500}
      />

      <H1>Dolorem earum assumenda quam natus quae animi</H1>

      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed ullamcorper
        morbi tincidunt ornare. Elit pellentesque habitant morbi tristique. Nisl
        suscipit adipiscing bibendum est ultricies integer quis auctor elit. Sed
        odio morbi quis commodo odio aenean.
      </P>

      <P>
        Feugiat in ante metus dictum at. Et molestie ac feugiat sed. Feugiat in
        fermentum posuere urna nec tincidunt praesent semper. Ultricies lacus
        sed turpis tincidunt id aliquet risus feugiat in. Commodo odio aenean
        sed adipiscing diam donec adipiscing tristique. Purus in mollis nunc sed
        id semper risus in hendrerit. Mi bibendum neque egestas congue. Iaculis
        eu non diam phasellus vestibulum lorem sed risus. Sed adipiscing diam
        donec adipiscing tristique.
      </P>

      <H4>Que tal testar seus conhecimentos?</H4>
      <Quiz data={articleQuizData} />

      <P>
        Tellus mauris a diam maecenas sed enim ut. Aliquet porttitor lacus
        luctus accumsan tortor posuere ac. Vel facilisis volutpat est velit
        egestas dui id ornare. Etiam non quam lacus suspendisse faucibus
        interdum posuere lorem. Augue mauris augue neque gravida in fermentum et
        sollicitudin ac. Vel orci porta non pulvinar neque laoreet suspendisse
        interdum consectetur. Morbi leo urna molestie at elementum. Sed
        elementum tempus egestas sed sed risus. Justo donec enim diam vulputate.
        Libero id faucibus nisl tincidunt eget. Massa massa ultricies mi quis
        hendrerit dolor magna eget est. Tristique magna sit amet purus gravida
        quis blandit turpis.
      </P>

      <P>
        Aenean sed adipiscing diam donec adipiscing tristique. Tincidunt
        lobortis feugiat vivamus at augue eget arcu dictum varius. Placerat in
        egestas erat imperdiet sed euismod nisi. In arcu cursus euismod quis. Ac
        felis donec et odio. In iaculis nunc sed augue lacus viverra vitae
        congue eu. Porttitor rhoncus dolor purus non enim praesent elementum
        facilisis leo. Et netus et malesuada fames ac turpis egestas maecenas.
        Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.
        Bibendum neque egestas congue quisque egestas diam in. Consectetur lorem
        donec massa sapien faucibus. Faucibus nisl tincidunt eget nullam non
        nisi est. Ultrices eros in cursus turpis massa tincidunt. Felis donec et
        odio pellentesque diam volutpat commodo.
      </P>

      <P>
        Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra
        suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vitae
        tortor condimentum lacinia quis vel. Sed vulputate odio ut enim blandit.
        In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Eu
        scelerisque felis imperdiet proin fermentum. In mollis nunc sed id
        semper risus in hendrerit gravida. Mauris nunc congue nisi vitae
        suscipit tellus mauris a diam. Euismod quis viverra nibh cras. Laoreet
        id donec ultrices tincidunt. Volutpat maecenas volutpat blandit aliquam.
        Et pharetra pharetra massa massa.
      </P>

      <P>
        Lectus sit amet est placerat in egestas. Volutpat ac tincidunt vitae
        semper quis lectus nulla at. Sed vulputate odio ut enim blandit volutpat
        maecenas. Mi quis hendrerit dolor magna eget est lorem. Et molestie ac
        feugiat sed lectus vestibulum mattis ullamcorper. Ut tristique et
        egestas quis ipsum. Vestibulum sed arcu non odio euismod. Diam donec
        adipiscing tristique risus. Neque volutpat ac tincidunt vitae semper.
        Faucibus in ornare quam viverra.
      </P>

      <H4>Um quiz?</H4>
      <Quiz data={articleQuizMultData} />

      <P>
        Proin fermentum leo vel orci porta non. Massa massa ultricies mi quis
        hendrerit. Bibendum est ultricies integer quis auctor elit sed
        vulputate. Venenatis tellus in metus vulputate eu scelerisque felis.
        Magna eget est lorem ipsum dolor. Vel pretium lectus quam id leo in
        vitae turpis massa. Quis eleifend quam adipiscing vitae proin sagittis.
        Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
        Convallis aenean et tortor at risus. Nunc sed velit dignissim sodales ut
        eu. Lorem donec massa sapien faucibus et.
      </P>

      <P>
        Leo duis ut diam quam nulla porttitor massa id neque. Massa sed
        elementum tempus egestas sed. Vestibulum morbi blandit cursus risus at.
        Sed elementum tempus egestas sed sed. Interdum velit euismod in
        pellentesque massa placerat duis ultricies lacus. Amet risus nullam eget
        felis eget. Mi eget mauris pharetra et ultrices neque ornare aenean
        euismod.
      </P>
    </div>
  )
}

export default ArticlePage
