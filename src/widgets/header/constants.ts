import { cartPath, favoritesPath, profilePath } from 'src/shared';
import { IHeaderLink } from './types';

export const menuLinkList: IHeaderLink[] = [
   { icon: 'heart', to: favoritesPath, label: 'Избранное' },
   { icon: 'user', to: profilePath, label: 'Профиль' },
   { icon: 'cart', to: cartPath, label: 'Корзина', isCount: true },
];
