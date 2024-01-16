import { FC } from 'react';

import styles from './styles.module.scss';

import { useAppSelector } from '../../../../shared/lib';

export const UserChecks: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   return (
      <div className={styles.checks}>
         <UserChecksTop />
         {windowWidth >= 1024 && <UserChecksBottom />}
      </div>
   );
};

const UserChecksTop: FC = () => {
   return <h2 className={styles.checks__title}>Чеки</h2>;
};
const UserChecksBottom: FC = () => {
   return <p className={styles.checks__label}>Смотреть</p>;
};
