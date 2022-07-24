import PropTypes from 'prop-types';
import { Transaction } from 'components/TransactionHistory/TransactionHistoryItem/TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <Transaction>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Transaction>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
