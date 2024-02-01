import { FC } from 'react'
import styles from './styles.module.scss'
import { Icon } from '..'

type Props = {
    Change: () => void
    isChecked: boolean
    className?: string
}

export const Checkbox: FC<Props> = ({isChecked, Change, className}) => {

    const classes = className ? `${className} ${styles.checkbox}` : styles.checkbox

    const checkboxClasses = isChecked ? `${classes} ${styles.checkbox_active}` : classes;

  return (
    <div onClick={Change} className={checkboxClasses}>
        <Icon icon="check-mark" className={styles.checkbox__mark} />
    </div>
  )
}
