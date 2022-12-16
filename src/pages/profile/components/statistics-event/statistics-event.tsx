import LocationImage from 'assets/images/location.svg';
import AcceptImage from 'assets/images/accept.svg';
import { StatisticsEventItem } from './statistics-event.types';
import styles from './statistics-event.module.scss';

export function StatisticsEvent({ date, title, location }: StatisticsEventItem) {
  const [month, day] = date.split(' ');
  return (
    <div className={styles.statisticsCardEvent}>
      <div className={styles.statisticsCardEventDate}>
        <p className={styles.statisticsCardEventDateText}>{month}</p>
        <p className={styles.statisticsCardEventDateNumber}>{day}</p>
      </div>
      <div className={styles.statisticsCardEventInfo}>
        <h3 className={styles.statisticsCardEventInfoTitle}>{title}</h3>
        <p className={styles.statisticsCardEventInfoLocation}>
          <LocationImage className={styles.statisticsCardEventInfoLocationIcon} />
          {location}
        </p>
      </div>
      <div className={styles.statisticsCardEventAccept}>
        <AcceptImage />
        <p className={styles.statisticsCardEventAcceptText}>Выполнено</p>
      </div>
    </div>
  );
}
