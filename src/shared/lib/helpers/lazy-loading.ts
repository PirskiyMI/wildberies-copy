import { lazy } from 'react';

export const lazyLoading = (path: string, componentName: string) => {
   return lazy(async () => {
      const promise = import(path);
      return promise.then((module) => ({ default: module[componentName] }));
   });
};
