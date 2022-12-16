import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { Card } from 'components/card';
import { List } from 'components/list';
import { StatisticsEvent, StatisticsEventItem } from '../statistics-event';
import styles from './statistics-card.module.scss';
import { useState } from 'react';

const events: StatisticsEventItem[] = [
  {
    id: '1',
    date: 'окт 19',
    title: 'День дня',
    location: 'Магас, главный корпус',
  },
  {
    id: '2',
    date: 'окт 20',
    title: 'День дней',
    location: 'Назрань, главный корпус',
  },
  {
    id: '3',
    date: 'сент 17',
    title: 'День день день',
    location: 'Назрань, медицинский корпус корпусНазрань, медицинский корпус корпус',
  },
  // {
  //   id: '1',
  //   date: 'окт 19',
  //   title: 'День дня',
  //   location: 'Магас, главный корпус',
  // },
  // {
  //   id: '2',
  //   date: 'окт 20',
  //   title: 'День дней',
  //   location: 'Назрань, главный корпус',
  // },
  // {
  //   id: '3',
  //   date: 'сент 17',
  //   title: 'День день день',
  //   location: 'Назрань, медицинский корпус корпусНазрань, медицинский корпус корпус',
  // },
  // {
  //   id: '1',
  //   date: 'окт 19',
  //   title: 'День дня',
  //   location: 'Магас, главный корпус',
  // },
  // {
  //   id: '2',
  //   date: 'окт 20',
  //   title: 'День дней',
  //   location: 'Назрань, главный корпус',
  // },
  // {
  //   id: '3',
  //   date: 'сент 17',
  //   title: 'День день день',
  //   location: 'Назрань, медицинский корпус корпусНазрань, медицинский корпус корпус',
  // },
];

export function StatisticsCard() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Card className={styles.statisticsCard}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Мероприятия</Tab>
          <Tab>Прочее</Tab>
        </TabList>

        <TabPanel>
          <List items={events} Item={StatisticsEvent} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Card>
  );
}
