import { ShortVideoPageComponent } from '../page'

interface IPage {
  params: {
    playlist: string
  }
  searchParams: {
    [key: string]: string
  }
}

export const ShortPlaylistPage = ({ params, searchParams }: IPage) => {
  return <ShortVideoPageComponent params={params} searchParams={searchParams} />
}

export default ShortPlaylistPage
