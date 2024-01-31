export const classCombiner = (firstClassName: string, secondClassName?: string) => {
   const combineClassName = secondClassName
      ? `${firstClassName} ${secondClassName}`
      : firstClassName;

   return combineClassName;
};
