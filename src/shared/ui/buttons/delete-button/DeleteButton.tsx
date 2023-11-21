import { FC } from 'react';
import styles from './DeleteButton.module.scss';
import { Icon } from '../..';

type DeleteButtonProps = {
   clickHandler: () => void;
};

export const DeleteButton: FC<DeleteButtonProps> = ({ clickHandler }) => {
   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon icon={'trash'} />
      </button>
   );
};
