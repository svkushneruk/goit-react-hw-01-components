import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  UserImg,
  UserName,
  ProfileTag,
  UserLocation,
  ProfileStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <ProfileTag>@{tag}</ProfileTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescription>

      <ProfileStats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
