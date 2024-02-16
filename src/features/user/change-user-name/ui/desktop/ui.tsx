import { FC } from 'react';

import { Button, Field } from 'src/shared';

import styles from './styles.module.scss';
import { IChangeUserName } from '../../types';

export const ChangeUserName: FC<IChangeUserName> = ({ input, submitHandler }) => {
   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <Field title="Имя" {...input} />
         <Button className={styles.form__button}>Сохранить</Button>
      </form>
   );
};
