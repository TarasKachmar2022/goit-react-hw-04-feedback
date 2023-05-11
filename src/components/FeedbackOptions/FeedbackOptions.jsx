import PropTypes from 'prop-types';
import { OptionBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <OptionBtn
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </OptionBtn>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
