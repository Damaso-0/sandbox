'use client'

import { useState } from 'react'
import styles from './index.module.css'

interface ITabs {
  labels: string[]
  children: React.ReactNode[]
}

const Tabs = ({ labels, children }: ITabs) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={styles.tabs__wrapper}>
      <div className={styles.tabs__labels}>
        {labels?.map((label, index) => (
          <button
            key={label}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabs__button} ${
              activeTab === index ? styles.tabs__buttonActive : ''
            }`}>
            {label}
          </button>
        ))}
      </div>

      <div className={styles.tabs__content}>
        {children.map((child, index) => {
          if (index === activeTab) {
            return child
          }

          return null
        })}
      </div>
    </div>
  )
}

export default Tabs
