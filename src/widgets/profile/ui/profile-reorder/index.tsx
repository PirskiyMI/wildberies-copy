import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   title: string;
   text: string;
   className?: string;
};

export const ProfileReorder: FC<Props> = ({ text, title, className }) => {
   const classes = className ? `${styles.body} ${className}` : styles.body;

   return (
      <div className={classes}>
         <div className={styles.body__content}>
            <h1 className={styles.body__title}>{title}</h1>
            <p className={styles.body__text}>{text}</p>
         </div>
         <Button className={styles.body__button}>
            <Link to={'/'}>Перейти на главную</Link>
         </Button>
      </div>
   );
};
