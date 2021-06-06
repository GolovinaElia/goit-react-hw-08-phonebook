import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, contactsSelectors } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label className={style.filterLabel}>
      Find contact by name
      <input
        className={style.filterInput}
        type="text"
        autoComplete="off"
        name="name"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
