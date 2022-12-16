import { useState, useRef, useEffect } from 'react';
import { InputBase, InputSize, InputStatus } from 'components/input-base';
import { List } from 'components/list';
import { NewsCard, NewsItem } from 'components/news-card';
import { PageLayout } from 'layouts/page-layout';
import ScheduleImage from 'assets/images/schedule-icon.svg';
import styles from './news.module.scss';
import { Input } from 'components/input';

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
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <PageLayout title="Новости">
      <div style={{ backgroundColor: '#fff', height: 200, padding: 50 }}>
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Электронная почта"
          bottomText="Почта введена некорректно"
          placeholder="Введите почту"
          status={InputStatus.Error}
        />
      </div>
      <div className={styles.news}>
        <List items={news} Item={NewsCard} gap={30} />
      </div>
    </PageLayout>
  );
}
