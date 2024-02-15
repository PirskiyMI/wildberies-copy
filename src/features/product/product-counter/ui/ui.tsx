import { FC, memo } from 'react';

import { DesktopCounterButton } from 'src/shared';

import styles from './styles.module.scss';
import { IProductCounterProps } from '../types';

export const ProductCounter: FC<IProductCounterProps> = memo(
   ({ value, limit, count, decrementHandler, incrementHandler, setHandler, blurHandler }) => {
      return (
         <div className={styles.counter}>
            <DesktopCounterButton disabled={value <= 1} onClick={decrementHandler}>
               <span>−</span>
            </DesktopCounterButton>
            <input
               type="number"
               className={styles.counter__field}
               value={count}
               onChange={setHandler}
               onBlur={blurHandler}
            />
            <DesktopCounterButton disabled={value === limit} onClick={incrementHandler}>
               <span>+</span>
            </DesktopCounterButton>
         </div>
      );
   },
);
