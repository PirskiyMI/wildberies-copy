import { FC, memo } from 'react';

import { CountButton } from 'src/shared';

import styles from './styles.module.scss';
import { useCount } from '../hooks';

type Props = {
   id: number;
   value: number;
   limit?: number;
};

export const ProductCounter: FC<Props> = memo((props) => {
   const { value, limit } = props;
   const { count, decrementHandler, incrementHandler, setHandler, blurHandler } = useCount({
      ...props,
   });

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
});
