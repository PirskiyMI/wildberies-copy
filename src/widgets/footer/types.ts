interface ILink {
   title: string;
   path: string;
}

export interface IFooterNav {
   label: string;
   links: ILink[];
   isDesktop?: boolean;
}

export interface IFooter {
   isDesktop: boolean;
   lists: IFooterNav[];
}
