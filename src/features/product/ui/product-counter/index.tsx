import { FC } from 'react';

import { CountButton } from 'src/shared';

import styles from './styles.module.scss';
import { useCounterActions } from '../../lib';

type Props = {
   id: number;
   value: number;
   limit?: number;
};

export const ProductCounter: FC<Props> = (props) => {
   const { value, limit } = props;
   const { count, decrementHandler, incrementHandler, setHandler, blurHandler } = useCounterActions(
      {
         ...props,
      },
   );

   return (
      <div className={styles.counter}>
         <CountButton disabled={value <= 1} onClick={decrementHandler}>
            <span>−</span>
         </CountButton>
         <input
            type="number"
            className={styles.counter__field}
            value={count}
            onChange={setHandler}
            onBlur={blurHandler}
         />
         <CountButton disabled={value === limit} onClick={incrementHandler}>
            <span>+</span>
         </CountButton>
      </div>
   );
};
