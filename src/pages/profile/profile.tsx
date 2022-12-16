import { PageLayout } from 'layouts/page-layout';
import { InfoCard } from './components/info-card';
import { PointsCard } from './components/points-card';
import { StatisticsCard } from './components/statistics-card';
import styles from './profile.module.scss';

export function Profile() {
  return (
    <PageLayout title="Профиль">
      <div className={styles.profile}>
        <InfoCard
          firstName="Елизавета"
          lastName="Кодзоева"
          patronymic="Руслановна"
          group="ИСиТ-21"
          faculty="ФМФ"
          birthday="24/01/2004"
          phone="+7(988) 829-9337"
          email="lizkodzoeva@gmail.com"
        />
        <StatisticsCard />
        <PointsCard count={36} />
      </div>
    </PageLayout>
  );
}
