import { StatisticListItem } from 'components/Statistics/StatisticListItem/StatisticListItem';
import { StatisticListWrap } from 'components/Statistics/StatisticList/StatisticList.styled';

export const StatisticList = ({ items }) => {
  return (
    <StatisticListWrap>
      {items.map(itemsItem => (
        <StatisticListItem
          key={itemsItem.id}
          label={itemsItem.label}
          percentage={itemsItem.percentage}
        />
      ))}
    </StatisticListWrap>
  );
};
