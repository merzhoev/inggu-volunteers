import { List } from 'components/list';
import { NewsCard } from 'components/news-card';
import { NewsItem } from 'components/news-card';
import { PageLayout } from 'layouts/page-layout';
import styles from './favorites.module.scss';

const favorites: NewsItem[] = [
  {
    id: '111',
    firstName: 'Анзор',
    lastName: 'Хамхоев',
    createdAt: '3 часа назад',
    title: 'Мероприятие СтудВесна',
    description:
      'Всем добрый день! В начале октября в актовом зале города Магас пройдет мероприятие СтудВесна. Потребуются несколько волонтёров для установки оборудования',
  },
  {
    id: '777',
    firstName: 'Муаз',
    lastName: 'Холухаев',
    createdAt: '5 часов назад',
    title: 'Какой-то заголовок',
    description: 'всем добрый день... Жду зачет...',
  },
];

export function Favorites() {
  return (
    <PageLayout title="Избранное">
      <div className={styles.favorite}>
        <List items={favorites} Item={NewsCard} gap={30} />
      </div>
    </PageLayout>
  );
}
