import PropTypes from 'prop-types';
import { NotifyTitle } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotifyTitle>{message}</NotifyTitle>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
