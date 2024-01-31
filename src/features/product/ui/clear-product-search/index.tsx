import { FC } from "react"
import { Button, setSearch, useAppDispatch } from "src/shared"
import styles from './styles.module.scss'



export const CleatProductSearch:FC = () => {
    const dispatch = useAppDispatch()

    const clickHandler = () => {
        dispatch(setSearch(''))
    }

  return (
        <Button onClick={clickHandler}  >
            Вернутся на главную
        </Button>
  )
}
