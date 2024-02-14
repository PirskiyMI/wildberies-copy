import { FC } from 'react';

import { DeleteButton } from 'src/shared';

import styles from './styles.module.scss';
import { IRemoveProductFromCartProps } from '../lib/types';

export const RemoveProductFromCart: FC<IRemoveProductFromCartProps> = ({ clickHandler }) => {
   return <DeleteButton clickHandler={clickHandler} className={styles.button} />;
};
