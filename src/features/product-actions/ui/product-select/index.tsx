import { ChangeEventHandler, FC } from 'react';

import { Icon, useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';
import { toggleProductIsChecked } from '../..';

type Props = {
   isChecked: boolean;
   id: number;
};

export const ProductSelect: FC<Props> = ({ id, isChecked }) => {
   const dispatch = useAppDispatch();

   const classes = isChecked ? `${styles.checkbox} ${styles.checkbox_active}` : styles.checkbox;

   const clickHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
      e.stopPropagation();
      dispatch(toggleProductIsChecked(id));
   };

   return (
      <>
         <input
            type="checkbox"
            style={{ display: 'none' }}
            checked={isChecked}
            onChange={clickHandler}
         />
         <div className={classes}>
            <Icon icon="checkMark" className={styles.checkbox__mark} />
         </div>
      </>
   );
};
