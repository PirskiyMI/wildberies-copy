import { useState, ChangeEvent, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

type Props = {
   id: number;
   value: number;
   limit?: number;
};

export const useCount = ({ id, value, limit }: Props) => {
   const [count, setCount] = useState(value);
   const { decrementProductCount, incrementProductCount, setProductCount } = basketActions;
   const dispatch = useAppDispatch();

   const decrementHandler = useCallback(() => {
      setCount((prev) => (prev -= 1));
      dispatch(decrementProductCount(id));
   }, [id, decrementProductCount, dispatch]);
   const incrementHandler = useCallback(() => {
      setCount((prev) => (prev += 1));
      dispatch(incrementProductCount(id));
   }, [id, incrementProductCount, dispatch]);

   const setHandler = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => setCount(e.target.valueAsNumber),
      [],
   );
   const blurHandler = useCallback(() => {
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
   }, [count, dispatch, id, limit, setProductCount]);

   return { decrementHandler, incrementHandler, blurHandler, setHandler, count };
};
