import { FC, memo } from 'react';

import { CounterButton } from 'src/shared';

import styles from './styles.module.scss';
import { IProductCounterProps } from '../types';

export const ProductCounter: FC<IProductCounterProps> = memo(
   ({ value, limit, count, decrementHandler, incrementHandler, setHandler, blurHandler }) => {
      return (
         <div className={styles.counter}>
            <CounterButton disabled={value <= 1} onClick={decrementHandler}>
               <span>−</span>
            </CounterButton>
            <input
               type="number"
               className={styles.counter__field}
               value={count}
               onChange={setHandler}
               onBlur={blurHandler}
            />
            <CounterButton disabled={value === limit} onClick={incrementHandler}>
               <span>+</span>
            </CounterButton>
         </div>
      );
   },
);
