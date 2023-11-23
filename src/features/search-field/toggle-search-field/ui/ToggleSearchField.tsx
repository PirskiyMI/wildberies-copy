import { FC } from 'react';
import styles from './ToggleSearchField.module.scss';

import { Icon } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import { toggleSearch } from '../../../../entities/search-field';

type Props = {
   isOpen: boolean;
};

export const ToggleSearchField: FC<Props> = ({ isOpen }) => {
   const dispatch = useAppDispatch();

   const toggleHandler = () => {
      dispatch(toggleSearch());
   };

   if (!isOpen) {
      return (
         <button onClick={toggleHandler}>
            <Icon icon="loop" className={styles.icon} />
         </button>
      );
   }

   return (
      <button onClick={toggleHandler} className={styles.button}>
         Отмена
      </button>
   );
};
