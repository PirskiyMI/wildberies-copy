import styles from './Payment.module.scss';

import { FC } from 'react';

import { Title, Button } from '../../shared/ui';

const PaymentHeader: FC = () => {
   return (
      <div className={styles.header}>
         <Title>Способ оплаты</Title>
         <Button isChangeButton={true}>Изменить</Button>
      </div>
   );
};

export default PaymentHeader;
