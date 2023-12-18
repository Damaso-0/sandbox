'use client'

import { useState } from 'react'
import styles from './index.module.css'
import { P } from '../Typograph'
import Link from 'next/link'

const items = [
  {
    title: 'Carousel',
    href: 'carousel',
  },
  {
    title: 'Accordion',
    href: '#',
  },
  {
    title: 'Card',
    href: '#',
  },
  {
    title: 'Modal',
    href: '#',
  },
  {
    title: 'Table',
    href: '#',
  },
  {
    title: 'Tabs',
    href: '#',
  },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <aside
      className={`${styles.sidebarWrapper} ${
        !isSidebarOpen && styles.sidebarWrapperClosed
      }`}
      aria-label="Sidebar">
      <div className={styles.sidebarToggleWrapper}>
        {isSidebarOpen && (
          <Link href="/" style={{ cursor: 'pointer' }}>
            <P className={styles.sidebarTitle}>Sandbox</P>
          </Link>
        )}

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={styles.sidebarToggle}>
          {isSidebarOpen ? (
            <svg
              fill="#555"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="12"
              viewBox="0 0 256 512">
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          ) : (
            <svg
              fill="#555"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="12"
              viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          )}
        </button>
      </div>

      {isSidebarOpen && (
        <div className={styles.sidebarItemsWrapper}>
          <p className={styles.sidebarDividerTitle}>Components</p>
          <ul className={styles.sidebarItems}>
            {items.map((item) => (
              <li key={item?.title} className={`${styles.sidebarItem}`}>
                <a href={item?.href} className={styles.link}>
                  <span>{item?.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
