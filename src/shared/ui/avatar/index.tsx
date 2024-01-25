import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
   character: string;
   src?: string;
   className?: string;
};

export const Avatar: FC<Props> = ({ character, src, className }) => {
   const classes = className ? `${className} ${styles.avatar}` : styles.avatar;

   return (
      <div className={classes}>
         {src ? (
            <img src={src} alt="Аватарка" className={styles.avatar__image} />
         ) : (
            <div className={styles.avatar__character}>{character}</div>
         )}
      </div>
   );
};