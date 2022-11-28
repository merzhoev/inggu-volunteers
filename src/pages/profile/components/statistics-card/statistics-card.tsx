import { Card } from 'components/card';
import styles from './statistics-card.module.scss';

function StatisticsEvent() {
  return <li className={styles.statisticsCardEvent}></li>;
}

export function StatisticsCard() {
  return (
    <Card className={styles.statisticsCard}>
      <ul>
        <StatisticsEvent />
      </ul>
    </Card>
  );
}
