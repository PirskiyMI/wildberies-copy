import { FC } from 'react';

import { Icon, toggleSearch, useAppDispatch } from 'src/shared';

import styles from './styles.module.scss';

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
