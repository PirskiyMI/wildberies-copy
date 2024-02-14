import { FC, memo } from 'react';

import { FavoriteButton } from 'src/shared';

import styles from './styles.module.scss';
import { IToggleProductToFavoriteProps } from '../lib/types';

export const ToggleProductToFavorite: FC<IToggleProductToFavoriteProps> = memo(
   ({ isFavorite, clickHandler }) => {
      const classes = isFavorite ? `${styles.button} ${styles.button_active}` : styles.button;

      return <FavoriteButton clickHandler={clickHandler} isFill={isFavorite} className={classes} />;
   },
);
