import { FC } from 'react'
import { Icon } from '..'
import styles from './styles.module.scss'

export const Error: FC = () => {
  return (
    <div className={styles.error}>
        <Icon icon='error'/>
        <h1>Извините, какие-то неполадки!</h1>
    </div>
  )
}
