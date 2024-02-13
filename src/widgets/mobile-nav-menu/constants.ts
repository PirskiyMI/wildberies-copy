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
