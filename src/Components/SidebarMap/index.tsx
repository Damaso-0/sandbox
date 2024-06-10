'use client'

import { useState } from 'react'
import styles from './styles.module.css'

interface ISidebarMapItem {
  name: string
  href: string
  children?: ISidebarMapItem[]
}

interface ISidebarMap {
  children: ISidebarMapItem[]
}

const SidebarMapItem = ({ name, href, children }: ISidebarMapItem) => {
  const [open, setOpen] = useState(false)

  return children ? (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={styles.sidebarMapButton}>
        {name}
      </button>
      <div
        className={`${styles.sidebarMapItem} ${
          open ? styles.sidebarMapItemActive : ''
        }`}>
        <SidebarMap>{children}</SidebarMap>
      </div>
    </>
  ) : (
    <a href={href}>{name}</a>
  )
}

const SidebarMap = ({ children }: ISidebarMap) => {
  return (
    <div className={styles.sidebarMap}>
      {children?.map((item) => {
        return <SidebarMapItem key={item?.name} {...item} />
      })}
    </div>
  )
}

export default SidebarMap
