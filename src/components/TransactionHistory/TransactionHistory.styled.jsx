import styled from '@emotion/styled';

export const TransactionHistoryWrap = styled.table`
  width: 450px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  td {
    padding: 10px;
  }
`;

export const TableTitleRow = styled.tr`
  background-color: #38eeb1;
  width: 100%;
  th {
    padding: 10px 0;
    width: 33.33%;
  }
`;

export const TableBodyWrap = styled.tbody`
  tr:nth-of-type(2n + 1) {
    background-color: #38a5ee;
  }
  tr:nth-of-type(2n) {
    background-color: #4226dd;
  }
`;
