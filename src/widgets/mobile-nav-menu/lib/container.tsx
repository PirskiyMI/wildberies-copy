import { useAppSelector } from 'src/shared';
import { basketItemsTotalSelector } from 'src/entities/basket/basket-item';

import { MobileNavMenu } from '../ui';

export const MobileNavMenuContainer = () => {
   const count = useAppSelector(basketItemsTotalSelector);

   return <MobileNavMenu count={count} />;
};
