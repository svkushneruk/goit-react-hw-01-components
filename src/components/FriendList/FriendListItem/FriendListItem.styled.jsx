import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.3);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${({ online }) => {
    if (online) {
      return 'green';
    }
    return 'orange';
  }};
`;
export const Avatar = styled.img`
  margin-right: 20px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
