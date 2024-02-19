export interface ILinkNavProps {
    path: string;
    icon: 'burger' | 'cart' | 'user' | 'heart' | 'home';
    label?: string;
    count?: number | null;
}