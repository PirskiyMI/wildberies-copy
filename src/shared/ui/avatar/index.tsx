import { FC } from 'react';

import styles from './styles.module.scss';
import { IAvatarProps } from 'src/shared/lib/types/types-ui/avatar-types';


export const Avatar: FC<IAvatarProps> = ({ character, src, className }) => {
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
