import { StatisticList } from 'components/Statistics/StatisticList/StatisticList';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <StatisticList items={stats} />
      </section>
    </div>
  );
};
