import { FC } from 'react';
import styles from './ProductCounter.module.scss';
import { useCounterActions } from '../../lib/hooks/useCounterActions';

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
         <button
            className={styles.counter__button}
            disabled={value <= 1}
            onClick={decrementHandler}>
            <span>−</span>
         </button>
         <input
            type="number"
            className={styles.counter__field}
            value={count}
            onChange={setHandler}
            onBlur={blurHandler}
         />
         <button
            className={styles.counter__button}
            disabled={value === limit}
            onClick={incrementHandler}>
            <span>+</span>
         </button>
      </div>
   );
};
