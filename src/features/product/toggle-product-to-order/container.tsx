import { FC, memo, useCallback } from 'react';

import { useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

import { ToggleProductToOrder } from './ui';
import { IToggleProductToOrderContainer } from './types';

export const ToggleProductToOrderContainer: FC<IToggleProductToOrderContainer> = memo(
   ({ id, ...props }) => {
      const { toggleProductIsChecked } = basketActions;
      const dispatch = useAppDispatch();

      const clickHandler = useCallback(() => {
         dispatch(toggleProductIsChecked(id));
      }, [dispatch, id, toggleProductIsChecked]);

      return <ToggleProductToOrder clickHandler={clickHandler} {...props} />;
   },
);
