import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  flex-direction: column;
`;

export const ProfileDescription = styled.div`
  padding: 50px 0;
  text-align: center;
  border: 1px solid rgb(60, 186, 236);
  border-bottom: none;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

export const UserImg = styled.img`
  display: block;
  max-width: 100%;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const ProfileTag = styled.p``;
export const UserLocation = styled.p`
  font-weight: 500;
`;

export const ProfileStats = styled.ul`
  background-color: rgb(76, 152, 202);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const StatsItem = styled.li`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(60, 186, 236);
  flex-basis: 33.33%;
  align-items: center;
`;

export const StatsLabel = styled.span``;
export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
