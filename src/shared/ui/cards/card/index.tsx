import { FC, ReactNode } from 'react';

import { classCombiner } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   className?: string;
};

export const Card: FC<Props> = ({ children, className }) => {
   const classes = classCombiner(styles.card, className);

   return <div className={classes}>{children}</div>;
};
