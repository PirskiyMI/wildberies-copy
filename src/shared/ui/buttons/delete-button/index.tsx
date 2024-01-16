import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
};

export const DeleteButton: FC<Props> = ({ clickHandler }) => {
   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon icon={'trash'} />
      </button>
   );
};
