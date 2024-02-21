import { FC, memo } from 'react';

import {
   Button,
   DesktopSection,
   Field,
   useAppDispatch,
   useAppSelector,
   useInput,
} from 'src/shared';

import styles from './styles.module.scss';
import { userActions, userIsAuthSelector } from 'src/entities/user';
import { Navigate } from 'react-router-dom';

export const FormCreateUser: FC = memo(() => {
   const isAuth = useAppSelector(userIsAuthSelector);

   const {
      isDirty: nameIsDirty,
      errorText: nameErrorText,
      ...name
   } = useInput('', { isRequired: true, type: 'name' });
   const {
      isDirty: telIsDirty,
      errorText: telErrorText,
      ...tel
   } = useInput('', { isRequired: true, type: 'tel' }, true);
   const { setUser } = userActions;
   const dispatch = useAppDispatch();

   if (isAuth) return <Navigate to="/profile" />;

   return (
      <DesktopSection className={styles.wrapper}>
         <form
            className={styles.form}
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(setUser({ name: name.value, tel: tel.value }));
            }}>
            <Field
               title="Имя"
               errorText={`${nameIsDirty ? nameErrorText : ''}`}
               {...name}
               className={styles.form__item}
            />
            <Field
               title="Телефон"
               errorText={`${telIsDirty ? telErrorText : ''}`}
               {...tel}
               className={styles.form__item}
            />
            <Button disabled={nameIsDirty || telIsDirty} className={styles.form__button}>
               Зарегистрироваться
            </Button>
         </form>
      </DesktopSection>
   );
});
