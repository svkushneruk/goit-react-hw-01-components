import { StatisticListItem } from 'components/Statistics/StatisticListItem/StatisticListItem';
import css from 'components/Statistics/StatisticList/StatisticList.module.css';

export const StatisticList = ({ items }) => {
  return (
    <ul className={css.statList}>
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
