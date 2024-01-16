import { useState, ChangeEvent } from 'react';

import { useAppDispatch } from 'src/shared';

import { decrementProductCount, incrementProductCount, setProductCount } from '../..';

type Props = {
   id: number;
   value: number;
   limit?: number;
};

export const useCounterActions = ({ id, value, limit }: Props) => {
   const [count, setCount] = useState(value);
   const dispatch = useAppDispatch();

   const decrementHandler = () => {
      setCount((prev) => (prev -= 1));
      dispatch(decrementProductCount(id));
   };
   const incrementHandler = () => {
      setCount((prev) => (prev += 1));
      dispatch(incrementProductCount(id));
   };
   const setHandler = (e: ChangeEvent<HTMLInputElement>) => setCount(e.target.valueAsNumber);
   const blurHandler = () => {
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
   };

   return { decrementHandler, incrementHandler, blurHandler, setHandler, count };
};
