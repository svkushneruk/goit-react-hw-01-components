import PropTypes from 'prop-types';
import css from 'components/Statistics/StatisticListItem/StatisticListItem.module.css';

export const StatisticListItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
  );
};

StatisticListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
