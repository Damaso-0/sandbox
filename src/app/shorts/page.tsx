'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { Arrow } from '@/Components/Icons/Arrow'
import Link from 'next/link'

const dataVideo = [
  {
    videoId: 'https://www.youtube.com/embed/aXq4pmCTxT4',
  },
  {
    videoId: 'https://www.youtube.com/embed/aXq4pmCTxT4',
  },
  {
    videoId: 'https://www.youtube.com/embed/aXq4pmCTxT4',
  },
  {
    videoId: 'https://www.youtube.com/embed/aXq4pmCTxT4',
  },
  {
    videoId: 'https://www.youtube.com/embed/aXq4pmCTxT4',
  },
]
interface IData {
  videoId?: string
  playlists?: {
    title: string
    url: string
  }[]
}

interface IPage {
  params: {
    playlist: string
  }
  searchParams: {
    [key: string]: string
  }
}
export const ShortVideoPageComponent = ({ params, searchParams }: IPage) => {
  const playlistParam = params?.playlist
  const startParam: number = Number(searchParams?.start ?? 0)

  const [data, setData] = useState<IData[]>(dataVideo)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(startParam ?? 0)

  useEffect(() => {
    const playlists = {
      videoId: '',
      playlists: [
        { title: 'Tech', url: '/shorts/tech' },
        {
          title: 'Start at 4',
          url: '/shorts/tech?start=4',
        },
        { title: 'Sports', url: '/shorts/sports' },
        {
          title: 'Start at 3',
          url: '/shorts/sports?start=3',
        },
        { title: 'Music', url: '/shorts/music' },
        {
          title: 'Start at 2',
          url: '/shorts/music?start=2',
        },
        { title: 'Gaming', url: '/shorts/gaming' },
      ],
    }

    setData([...data, playlists])
  }, [])

  return (
    <div className={styles.shortsPageContainer}>
      <p className={styles.shortsPageTitle}>
        Short videos {playlistParam ? `- ${playlistParam}` : ''}
      </p>

      <div className={styles.shortsPageVideosContainer}>
        {data.map((item, index: number) => {
          const offset = 50

          return item?.videoId ? (
            <div
              key={item?.videoId}
              className={`${styles.shortsPageVideo} ${
                index === currentVideoIndex ? styles.shortsPageVideoActive : ''
              }`}
              style={{
                transform: `translate(${
                  index === currentVideoIndex
                    ? -50
                    : (index - currentVideoIndex) * 130 - offset
                }%, -50%)`,
              }}>
              <div className={styles.shortsPageVideoWrapper}>
                {index === currentVideoIndex && index !== 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentVideoIndex(index - 1)}
                    title="Vídeo anterior"
                    className={styles.shortsPageVideoButtonLeft}>
                    <Arrow direction="left" />
                  </button>
                )}
                <iframe
                  key={item?.videoId}
                  className={styles.shortsPageVideoFrame}
                  width="315"
                  height="560"
                  src={item?.videoId}
                  title="YouTube video player"
                />
                {index !== currentVideoIndex && (
                  <button
                    type="button"
                    className={styles.shortsPageVideoOverlayButton}
                    onClick={() => setCurrentVideoIndex(index)}
                  />
                )}
                {index === currentVideoIndex && index !== data.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentVideoIndex(index + 1)}
                    title="Póximo vídeo"
                    className={styles.shortsPageVideoButtonRight}>
                    <Arrow direction="right" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {item?.playlists && (
                <div
                  key={item?.videoId}
                  className={`${styles.shortsPageVideo} ${
                    index === currentVideoIndex
                      ? styles.shortsPageVideoActive
                      : ''
                  }`}
                  style={{
                    transform: `translate(${
                      index === currentVideoIndex
                        ? -50
                        : (index - currentVideoIndex) * 130 - offset
                    }%, -50%)`,
                  }}>
                  <div
                    className={`${styles.shortsPageVideoWrapper} ${styles.shortsPageVideoPlaylistWrapper}`}>
                    {index === currentVideoIndex && index !== 0 && (
                      <button
                        type="button"
                        onClick={() => setCurrentVideoIndex(index - 1)}
                        title="Vídeo anterior"
                        className={styles.shortsPageVideoButtonLeft}>
                        <Arrow direction="left" />
                      </button>
                    )}

                    {item?.playlists?.map((playlist, ind) => (
                      <Link
                        key={playlist?.title}
                        href={`${playlist?.url}`}
                        style={{
                          backgroundColor: `rgb(40, ${ind * 20 + 10}, 120)`,
                        }}
                        className={styles.shortsPageVideoPlaylistLink}>
                        {playlist?.title}
                      </Link>
                    ))}

                    {index !== currentVideoIndex && (
                      <button
                        type="button"
                        className={styles.shortsPageVideoOverlayButton}
                        onClick={() => setCurrentVideoIndex(index)}
                      />
                    )}
                    {index === currentVideoIndex &&
                      index !== data.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setCurrentVideoIndex(index + 1)}
                          title="Póximo vídeo"
                          className={styles.shortsPageVideoButtonRight}>
                          <Arrow direction="right" />
                        </button>
                      )}
                  </div>
                </div>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

const ShortVideoPage = ({ params, searchParams }: IPage) => {
  return <ShortVideoPageComponent params={params} searchParams={searchParams} />
}

export default ShortVideoPage
