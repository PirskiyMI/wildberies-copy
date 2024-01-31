import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

interface IProps {
   clickHandler: () => void;
}

export const DeleteButton: FC<IProps> = ({ clickHandler }) => {
   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon icon={'trash'} />
      </button>
   );
};
