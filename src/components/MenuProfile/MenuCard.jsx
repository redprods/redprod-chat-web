import React from 'react'
import styles from './MenuProfile.module.scss'

export const MenuCard = ({name,icon}) => {
  return (
    <div className={styles.menuCard}>
        {icon}
        <h1>{name}</h1>
    </div>
  )
}
