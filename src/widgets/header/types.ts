export interface IHeaderLink {
   icon: 'cart' | 'home' | 'user' | 'burger' | 'heart';
   to: string;
   isCount?: boolean;
   label?: string;
}

export interface IDesktopHeaderProps {
   count: number;
   openBurgerMenu: () => void;
   links: IHeaderLink[];
}
