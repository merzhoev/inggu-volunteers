import { Card } from 'components/card';
import SettingsImage from 'assets/images/settings-icon.svg';
import styles from './info-card.module.scss';

interface InfoCardProps {
  firstName: string;
  lastName: string;
  patronymic: string;
  group: string;
  faculty: string;
  birthday: string;
  phone: string;
  email: string;
}

export function InfoCard({
  firstName,
  lastName,
  patronymic,
  group,
  faculty,
  birthday,
  phone,
  email,
}: InfoCardProps) {
  return (
    <Card className={styles.infoCard}>
      <div className={styles.infoCardContent}>
        <div className={styles.infoCardHeader}>
          <div className={styles.infoCardImg}></div>
          <p className={styles.infoCardFullName}>{`${lastName} ${firstName} ${patronymic}`}</p>
        </div>
        <ul className={styles.infoCardList}>
          <li className={styles.infoCardItem}>
            <p className={styles.infoCardItemLabel}>Группа / Факультет</p>
            <p className={styles.infoCardItemText}>{`${faculty} ${group}`}</p>
          </li>
          <li className={styles.infoCardItem}>
            <p className={styles.infoCardItemLabel}>Дата рождения</p>
            <p className={styles.infoCardItemText}>{birthday}</p>
          </li>
          <li className={styles.infoCardItem}>
            <p className={styles.infoCardItemLabel}>Номер телефона</p>
            <p className={styles.infoCardItemText}>{phone}</p>
          </li>
          <li className={styles.infoCardItem}>
            <p className={styles.infoCardItemLabel}>Электронная почта</p>
            <p className={styles.infoCardItemText}>{email}</p>
          </li>
        </ul>
        <button className={styles.infoCardButton}>
          <SettingsImage />
          Редактировать
        </button>
      </div>
    </Card>
  );
}
