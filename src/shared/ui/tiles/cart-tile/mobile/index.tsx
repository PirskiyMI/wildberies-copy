import { FC, memo } from 'react';

import { MobileSection, Icon } from 'src/shared';

import styles from './styles.module.scss';
import { ICartTileProps } from 'src/shared/lib/types/types-ui/cart-tile-types';


export const CartTile: FC<ICartTileProps> = memo(({ title, content, clickHandle, className }) => {
   const classes = className ? `${className} ${styles.item}` : styles.item;

   return (
      <MobileSection className={classes}>
         <h2 className={styles.item__title} onClick={clickHandle}>
            <span>{title}</span> <Icon icon="pen" className={styles.item__icon} />
         </h2>
         <div>{content}</div>
      </MobileSection>
   );
});
