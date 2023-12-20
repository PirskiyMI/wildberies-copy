import { FC, FormEvent } from 'react';
import styles from './ChangeName.module.scss';
import { useAppDispatch, useAppSelector, useInput } from '../../../../shared/lib';
import { setName } from '../../../../entities/user';
import { Button, Field } from '../../../../shared/ui';
import { closeModal } from '../../../../shared/model';

export const ChangeName: FC = () => {
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
