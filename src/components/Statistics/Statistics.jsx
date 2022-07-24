import { StatisticList } from 'components/Statistics/StatisticList/StatisticList';
import {
  StatisticsWrapper,
  StatisticTitle,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <StatisticsWrapper>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticList items={stats} />
      </StatisticsWrapper>
    </div>
  );
};
