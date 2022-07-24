import { TransactionHistoryItem } from 'components/TransactionHistory/TransactionHistoryItem/TransactionHistoryItem';
import {
  TransactionHistoryWrap,
  TableTitleRow,
  TableBodyWrap,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrap>
      <thead>
        <TableTitleRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTitleRow>
      </thead>

      <TableBodyWrap>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableBodyWrap>
    </TransactionHistoryWrap>
  );
};
