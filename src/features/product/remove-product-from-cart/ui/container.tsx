import { FC, memo, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import { RemoveProductFromCart } from './ui';
import { IRemoveProductFromCardContainer } from '../types';

export const RemoveProductFromCardContainer: FC<IRemoveProductFromCardContainer> = memo(
   ({ id }) => {
      const { removeProductFromBasket } = basketActions;
      const dispatch = useAppDispatch();

      const removeHandler = useCallback(() => {
         dispatch(removeProductFromBasket(id));
      }, [dispatch, id, removeProductFromBasket]);

      return <RemoveProductFromCart clickHandler={removeHandler} />;
   },
);
