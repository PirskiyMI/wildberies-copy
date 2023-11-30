import { FC, useState } from 'react';
import styles from './ProductCounter.module.scss';
import { useAppDispatch } from '../../../../shared/lib';
import { decrementProductCount, incrementProductCount, setProductCount } from '../../../../entities/basket';

type ProductCounterProps = {
   id: number;
   value: number;
   limit?: number;
};

export const ProductCounter: FC<ProductCounterProps> = ({ limit, id, value }) => {
   const [count, setCount] = useState(value);
   const dispatch = useAppDispatch();

   return (
      <div className={styles.counter}>
         <button
            className={styles.counter__button}
            disabled={value <= 1}
            onClick={() => {
               setCount((prev) => (prev -= 1));
               dispatch(decrementProductCount(id));
            }}>
            <span>−</span>
         </button>
         <input
            type="number"
            className={styles.counter__field}
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
            onBlur={() => {
               const countAsString = String(count);
               if (countAsString[0] === '0') {
                  const newValue = countAsString.slice(1);
                  dispatch(setProductCount({ id, value: Number(newValue) }));
               } else {
                  if (countAsString.length > 0 && count !== 0) {
                     dispatch(setProductCount({ id, value: count }));
                  }
               }
               if (countAsString.length < 1 || count === 0 || isNaN(count)) {
                  setCount(1);
                  dispatch(setProductCount({ id, value: 1 }));
               }
               if (limit) {
                  if (count > limit) {
                     setCount(limit);
                     dispatch(setProductCount({ id, value: limit }));
                  }
               }
            }}
         />
         <button
            className={styles.counter__button}
            disabled={value === limit}
            onClick={() => {
               setCount((prev) => (prev += 1));
               dispatch(incrementProductCount(id));
            }}>
            <span>+</span>
         </button>
      </div>
   );
};
