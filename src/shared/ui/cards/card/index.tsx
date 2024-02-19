import { FC } from 'react';

import { classCombiner } from 'src/shared';

import styles from './styles.module.scss';
import { ICardProps } from '../../../lib/types/types-ui/card-types';

export const Card: FC<ICardProps> = ({ children, className }) => {
   const classes = classCombiner(styles.card, className);

   return <div className={classes}>{children}</div>;
};
