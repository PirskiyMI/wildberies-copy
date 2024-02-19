import { FC, memo } from 'react';

import { classCombiner } from 'src/shared';

import styles from './styles.module.scss';
import { ICardProps } from '../../../../lib/types/types-ui/card-types';

export const DesktopCartItemCard: FC<ICardProps> = memo(
   ({ imageComponent, contentComponent, counterComponent, totalComponent, className }) => {
      const classes = classCombiner(styles.card, className);

      return (
         <div className={classes}>
            <div className={styles.card__body}>
               {imageComponent} {contentComponent}
            </div>
            <div className={styles.card__content}>
               {counterComponent} {totalComponent}
            </div>
         </div>
      );
   },
);
