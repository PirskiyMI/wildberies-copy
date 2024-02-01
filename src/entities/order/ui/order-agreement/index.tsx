import { FC } from 'react';

import { Icon } from 'src/shared';

import styles from './styles.module.scss';

export const OrderAgreement: FC = () => {
   return (
      <div className={styles.agreement}>
         <Icon icon="check-mark" className={styles.agreement__icon} />
         <span>Соглашаюсь с правилами пользования торговой площадкой и возврата</span>
      </div>
   );
};
