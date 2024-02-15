import { lazy } from 'react';

export * from './burger';
export * from './buttons';
export * from './fields';
export * from './preloader';
export * from './link-nav';
export * from './logo';
export * from './error';
export * from './tiles';
export * from './cards';
export * from './controls';

export const Avatar = lazy(async () => {
   const { Avatar } = await import('./avatar');
   return { default: Avatar };
});
export const PopUp = lazy(async () => {
   const { PopUp } = await import('./pop-up');
   return { default: PopUp };
});
export const Icon = lazy(async () => {
   const { Icon } = await import('./icon');
   return { default: Icon };
});
export const Notification = lazy(async () => {
   const { Notification } = await import('./notification');
   return { default: Notification };
});
export const Price = lazy(async () => {
   const { Price } = await import('./price');
   return { default: Price };
});
export const Rating = lazy(async () => {
   const { Rating } = await import('./rating');
   return { default: Rating };
});
export const Section = lazy(async () => {
   const { Section } = await import('./section');
   return { default: Section };
});
export const Spoiler = lazy(async () => {
   const { Spoiler } = await import('./spoiler');
   return { default: Spoiler };
});
export const Skeleton = lazy(async () => {
   const { Skeleton } = await import('./skeleton');
   return { default: Skeleton };
});
export const Error = lazy(async () => {
   const { Error } = await import('./error');
   return { default: Error };
});
export const ServerError = lazy(async () => {
   const { ServerError } = await import('./server-error');
   return { default: ServerError };
});
