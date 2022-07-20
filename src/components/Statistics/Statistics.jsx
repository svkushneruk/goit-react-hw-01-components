import { StatisticList } from 'components/Statistics/StatisticList/StatisticList';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title">{title}</h2>

        <StatisticList items={stats} />
      </section>
    </div>
  );
};
