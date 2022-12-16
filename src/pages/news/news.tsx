import { List } from 'components/list';
import { NewsCard, NewsItem } from 'components/news-card';
import { PageLayout } from 'layouts/page-layout';
import styles from './news.module.scss';

const news: NewsItem[] = [
  {
    id: '222',
    firstName: 'Кемран',
    lastName: 'Точиев',
    createdAt: '1 час назад',
    title: 'Мероприятие СтудВесна',
    description: 'Всем добрый день! Я джокер xD',
  },
  {
    id: '123',
    firstName: 'Кемран',
    lastName: 'Точиев',
    createdAt: '1 час назад',
    title: 'Какой-то заголовок',
    description: 'Всем Всем Всем Всем Всем Всем Всем Всем',
  },
];

export function News() {
  return (
    <PageLayout title="Новости">
      <div className={styles.news}>
        <List items={news} Item={NewsCard} gap={30} />
      </div>
    </PageLayout>
  );
}
