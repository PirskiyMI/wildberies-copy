import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
   className?: string;
};

export const Tile: FC<Props> = ({ children, className }) => {
   const classes = className ? `${className} ${styles.tile}` : styles.tile;

   return <div className={classes}>{children}</div>;
};


