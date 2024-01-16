import { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
};

export const FavoriteButton: FC<Props> = ({ clickHandler }) => {
   return (
      <button onClick={clickHandler} className={styles.button}>
         <Icon icon="like" />
      </button>
   );
};
