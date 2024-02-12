import { useMemo } from 'react';
import { IFooterNav } from './types';

export const useFooterNav = () => {
   const customerLinks = useMemo<IFooterNav>(() => {
      return {
         label: 'Покупателям',
         links: [
            { title: 'Как сделать заказ', path: '#' },
            { title: 'Способы оплаты', path: '#' },
            { title: 'Доставка', path: '#' },
            { title: 'Возврат товара', path: '#' },
            { title: 'Возврат денежных средств', path: '#' },
            { title: 'Правила продажи', path: '#' },
            { title: 'Правила пользования торговой площадкой', path: '#' },
            { title: 'Вопросы и ответы', path: '#' },
            { title: 'Проверка совместимости', path: '#' },
         ],
      };
   }, []);
   const partnersLinks = useMemo<IFooterNav>(() => {
      return {
         label: 'Партнерам',
         links: [
            { title: 'Продавайте на Wildberries', path: '#' },
            { title: 'Курьерам', path: '#' },
            { title: 'Доставка', path: '#' },
            { title: 'Перевозчикам', path: '#' },
            { title: 'Партнерский пункт выдачи', path: '#' },
            { title: 'Франшизный пункт выдачи', path: '#' },
         ],
      };
   }, []);
   const projectLinks = useMemo<IFooterNav>(() => {
      return {
         label: 'Проекты',
         links: [
            { title: 'WB Guru', path: '#' },
            { title: 'Трудоустройство', path: '#' },
            { title: 'Цифровые товары', path: '#' },
            { title: 'WB Путешествия', path: '#' },
            { title: 'WB Stream', path: '#' },
         ],
      };
   }, []);
   const companyLinks = useMemo<IFooterNav>(() => {
      return {
         label: 'О компании',
         links: [
            { title: 'О нас', path: '#' },
            { title: 'Реквизиты', path: '#' },
            { title: 'Пресс-центр', path: '#' },
            { title: 'Контакты', path: '#' },
            { title: 'Bug Bounty', path: '#' },
            { title: 'WB.Tech', path: '#' },
         ],
      };
   }, []);
   const socialLinks = useMemo<IFooterNav>(() => {
      return {
         label: 'Соцсети',
         links: [
            { title: 'ВКонтакте', path: '#' },
            { title: 'Одноклассники', path: '#' },
            { title: 'YouTube', path: '#' },
            { title: 'Телеграм', path: '#' },
         ],
      };
   }, []);

   return [customerLinks, partnersLinks, projectLinks, companyLinks, socialLinks];
};
