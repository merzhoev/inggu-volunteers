import { Card } from 'components/card';
import StatisticImage from 'assets/images/statistic-icon.svg';
import styles from './points-card.module.scss';

interface PointsCardProps {
  count: number;
}

export function PointsCard({ count }: PointsCardProps) {
  return (
    <Card className={styles.pointsCard}>
      <div className={styles.pointsCardContent}>
        <StatisticImage />
        <div className={styles.pointsCardCountContainer}>
          <span className={styles.pointsCardCount}>{count}</span>
          <p className={styles.pointsCardText}>Мои баллы</p>
        </div>
      </div>
    </Card>
  );
}
