import React, { FC } from 'react'
import styles from './styles.module.scss'

export const ServerError: FC = () => {
  return (
    <div className={styles.error}>
        <h1 className={styles.error__title}>500</h1>
        <h2 className={styles.error__text}>Intarnal Server Error</h2>
    </div>
  )
}