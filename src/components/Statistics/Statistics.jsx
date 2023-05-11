import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import { StatisticsTitle, StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <StatisticsList>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </StatisticsList>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
