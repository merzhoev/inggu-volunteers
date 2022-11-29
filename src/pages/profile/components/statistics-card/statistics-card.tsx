import { Card } from 'components/card';
import LocationImage from 'assets/images/location.svg';
import AcceptImage from 'assets/images/accept.svg';
import styles from './statistics-card.module.scss';

function StatisticsEvent() {
  return (
    <li className={styles.statisticsCardEvent}>
      <div className={styles.statisticsCardEventDate}>
        <p className={styles.statisticsCardEventDateText}>окт</p>
        <p className={styles.statisticsCardEventDateNumber}>19</p>
      </div>
      <div className={styles.statisticsCardEventInfo}>
        <h3 className={styles.statisticsCardEventInfoTitle}>День Дня</h3>
        <p className={styles.statisticsCardEventInfoLocation}>
          <LocationImage className={styles.statisticsCardEventInfoLocationIcon} />
          Магас, главный корпус
        </p>
      </div>
      <div className={styles.statisticsCardEventAccept}>
        <AcceptImage />
        <p className={styles.statisticsCardEventAcceptText}>Выполнено</p>
      </div>
    </li>
  );
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
