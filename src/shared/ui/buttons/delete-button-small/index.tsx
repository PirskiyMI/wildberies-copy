import { FC } from 'react';

import styles from './styles.module.scss';
import { Icon } from '../..';

type Props = {
   clickHandler: () => void;
   className?: string;
};

export const DeleteButtonSmall: FC<Props> = ({ clickHandler, className }) => {
   const classes = className ? `${className} ${styles.button}` : styles.button;

   return (
      <div className={classes} onClick={clickHandler}>
         <Icon className={styles.button__icon} icon="cross" />
      </div>
   );
};
