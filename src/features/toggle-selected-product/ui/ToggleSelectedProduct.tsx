import { ChangeEventHandler, FC } from 'react';
import styles from './ToggleSelectedProduct.module.scss';
import { Icon } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib';
import { toggleProductIsChecked } from '../../../entities/basket';

type ToggleSelectedProductProps = {
   isChecked: boolean;
   id: number;
};

export const ToggleSelectedProduct: FC<ToggleSelectedProductProps> = ({ id, isChecked }) => {
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
