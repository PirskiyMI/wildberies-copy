import { FC, FormEvent } from 'react';

import { useAppDispatch, useAppSelector, useInput, Button, Field } from 'src/shared';
import { setName } from 'src/entities/user';

import styles from './styles.module.scss';

interface Props {
   closePopUp?: () => void;
}

export const ChangeUserName: FC<Props> = ({ closePopUp }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const dispatch = useAppDispatch();
   const inputProps = useInput(name, {
      isRequired: true,
      type: 'name',
   });

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputProps.isDirty) {
         dispatch(setName(inputProps.value));
         if (closePopUp) closePopUp();
      }
   };

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <Field title="Имя" {...inputProps} />
         <Button className={styles.form__button}>Сохранить</Button>
      </form>
   );
};
