import { PropsWithChildren } from 'react';
import styles from './page-layout.module.scss';

interface PageLayoutProps extends PropsWithChildren {
  title: string;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>{title}</h2>
      {children}
    </div>
  );
}
