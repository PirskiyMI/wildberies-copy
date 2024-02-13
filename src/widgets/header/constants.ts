import { cartPath, favoritesPath, profilePath } from 'src/shared';

interface IHeaderLink {
   icon: 'cart' | 'home' | 'user' | 'burger' | 'heart';
   to: string;
   isCount?: boolean;
   label?: string;
}

export const menuLinkList: IHeaderLink[] = [
   { icon: 'heart', to: favoritesPath, label: 'Избранное' },
   { icon: 'user', to: profilePath, label: 'Профиль' },
   { icon: 'cart', to: cartPath, label: 'Корзина', isCount: true },
];
