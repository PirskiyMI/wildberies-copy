import { FC, memo } from 'react';

import { DeleteButtonSmall } from 'src/shared';

import styles from './styles.module.scss';
import { IRemoveProductFromFavoriteProps } from '../lib/types';

export const RemoveProductFromFavorite: FC<IRemoveProductFromFavoriteProps> = memo(
   ({ clickHandler }) => {
      return (
         <div>
            <DeleteButtonSmall clickHandler={clickHandler} className={styles.button} />
         </div>
      );
   },
);
