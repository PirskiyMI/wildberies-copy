import { cartPath, favoritesPath, mainPath, navigationPath, profilePath } from 'src/shared';

interface IHeaderLink {
   icon: 'cart' | 'home' | 'user' | 'burger' | 'heart';
   to: string;
   isCount?: boolean;
   label?: string;
}

export const mobileMenuLinkList: IHeaderLink[] = [
   { icon: 'home', to: mainPath },
   { icon: 'burger', to: navigationPath },
   { icon: 'cart', to: cartPath, isCount: true },
   { icon: 'heart', to: favoritesPath },
   { icon: 'user', to: profilePath },
];

export const menuLinkList: IHeaderLink[] = [
   { icon: 'heart', to: favoritesPath, label: 'Избранное' },
   { icon: 'user', to: profilePath, label: 'Профиль' },
   { icon: 'cart', to: cartPath, label: 'Корзина', isCount: true },
];
