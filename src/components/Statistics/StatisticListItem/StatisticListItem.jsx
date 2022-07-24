import PropTypes from 'prop-types';
import { getRandomColor } from 'utils';
import {
  StatisticParam,
  StatisticLabel,
  StatisticPercentage,
} from 'components/Statistics/StatisticListItem/StatisticListItem.styled';

export const StatisticListItem = ({ label, percentage }) => {
  return (
    <StatisticParam style={{ backgroundColor: getRandomColor() }}>
      <StatisticLabel>{label}</StatisticLabel>
      <StatisticPercentage>{percentage} %</StatisticPercentage>
    </StatisticParam>
  );
};

StatisticListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
