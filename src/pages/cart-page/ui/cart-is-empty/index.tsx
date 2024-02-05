import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, Section } from 'src/shared';

import styles from './styles.module.scss';

export const CartIsEmpty: FC = () => {
   return (
      <Section className={styles.body}>
         <h1 className={styles.body__title}>В корзине пока пусто</h1>
         <p className={styles.body__text}>
            Загляните на главную, чтобы выбрать товары <br /> или найдите нужное в поиске
         </p>
         <Button className={styles.body__button}>
            <Link to={'/'} className={styles.body__link}>
               Перейти на главную
            </Link>
         </Button>
      </Section>
   );
};
