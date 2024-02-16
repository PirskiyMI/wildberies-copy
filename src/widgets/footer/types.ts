interface ILink {
   title: string;
   path: string;
}

export interface IFooterNav {
   label: string;
   links: ILink[];
}

export interface IFooter {
   lists: IFooterNav[];
}
