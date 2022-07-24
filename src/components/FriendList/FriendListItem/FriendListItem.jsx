import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  Avatar,
  FriendName,
} from 'components/FriendList/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
