import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   className?: string;
};

export const Card: FC<Props> = ({ children, className }) => {
   const classes = className ? `${className} ${styles.card}` : styles.card;

   return <div className={classes}>{children}</div>;
};
