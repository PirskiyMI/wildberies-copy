import { FC } from 'react';

import styles from './styles.module.scss';

import { Icon } from '../../../../shared/ui';
import { useAppDispatch } from '../../../../shared/lib';
import { toggleSearch } from '../../../../shared/model';

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
