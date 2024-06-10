import SidebarMap from '@/Components/SidebarMap'

const data = [
  {
    name: 'Tudo',
  },
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Sobre',
    href: '/sobre',
    children: [
      {
        name: 'Instituição',
        href: '#',
      },
      {
        name: 'Equipe',
        href: '#',
        children: [
          {
            name: 'Professores',
            href: '#',
          },
          {
            name: 'Alunos',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    name: 'Contato',
    href: '#',
    children: [
      {
        name: 'Email',
        href: '#',
      },
      {
        name: 'Whatsapp',
        href: '#',
      },
    ],
  },
  {
    name: 'FAQ',
    href: '/faq',
    children: [
      {
        name: 'Perguntas',
        href: '#',
        children: [],
      },
      {
        name: 'Respostas',
        href: '#',
        children: [],
      },
    ],
  },
]

const SidebarPage = () => {
  return (
    <div>
      <SidebarMap>{data}</SidebarMap>
    </div>
  )
}

export default SidebarPage
