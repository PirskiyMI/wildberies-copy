import { lazy } from 'react';

export const DesktopLinkNav = lazy(async () => {
   const { LinkNav } = await import('./desktop');
   return { default: LinkNav };
});
export const MobileLinkNav = lazy(async () => {
   const { LinkNav } = await import('./mobile');
   return { default: LinkNav };
});
