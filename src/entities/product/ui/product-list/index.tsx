import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
   children: ReactNode;
};

export const ProductList: FC<Props> = ({ children }) => {
   return <div className={styles.list}>{children}</div>;
};
