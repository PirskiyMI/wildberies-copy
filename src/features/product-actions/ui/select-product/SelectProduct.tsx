import { ChangeEventHandler, FC } from 'react';
import styles from './SelectProduct.module.scss';
import { useAppDispatch } from '../../../../shared/lib';
import { Icon } from '../../../../shared/ui';
import { toggleProductIsChecked } from '../../model/slices/basketListSlice';

type Props = {
   isChecked: boolean;
   id: number;
};

export const SelectProduct: FC<Props> = ({ id, isChecked }) => {
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
