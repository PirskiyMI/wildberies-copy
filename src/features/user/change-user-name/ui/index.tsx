import { FC, FormEvent, memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector, useInput, Button, Field } from 'src/shared';

import styles from './styles.module.scss';
import { userActions } from 'src/entities/user';

interface Props {
   closePopUp?: () => void;
}

export const ChangeUserName: FC<Props> = memo(({ closePopUp }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { setName } = userActions;
   const inputProps = useInput(name, {
      isRequired: true,
      type: 'name',
   });
   const { isDirty, value } = inputProps;
   const dispatch = useAppDispatch();

   const submitHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         if (!isDirty) {
            dispatch(setName(value));
            if (closePopUp) closePopUp();
         }
      },
      [closePopUp, dispatch, isDirty, value, setName],
   );

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <Field title="Имя" {...inputProps} />
         <Button className={styles.form__button}>Сохранить</Button>
      </form>
   );
});
