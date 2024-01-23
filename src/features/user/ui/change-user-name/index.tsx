import { FC, FormEvent } from 'react';

import { useAppDispatch, useAppSelector, useInput, Button, Field, closeModal } from 'src/shared';
import { setName } from 'src/entities/user';

import styles from './styles.module.scss';

export const ChangeUserName: FC = () => {
   const { name } = useAppSelector((state) => state.userReducer);

   const inputProps = useInput(name, {
      isRequired: true,
      type: 'name',
   });
   const dispatch = useAppDispatch();

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(setName(inputProps.value));
      dispatch(closeModal());
   };

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <Field title="Имя" {...inputProps} />
         <Button className={styles.form__button}>Сохранить</Button>
      </form>
   );
};
