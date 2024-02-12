import { ReactNode } from 'react';

export interface IUserInfo {
   name: string;
   nameFirstLatter: string;
   mobile?: boolean;
   changeNameButton?: ReactNode;
}
