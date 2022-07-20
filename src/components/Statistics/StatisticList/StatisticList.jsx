import { StatisticListItem } from 'components/Statistics/StatisticListItem/StatisticListItem';

export const StatisticList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map(itemsItem => (
        <StatisticListItem
          key={itemsItem.id}
          label={itemsItem.label}
          percentage={itemsItem.percentage}
        />
      ))}
    </ul>
  );
};
