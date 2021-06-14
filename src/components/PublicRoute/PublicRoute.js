import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import PropTypes from 'prop-types';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
  routeProps: PropTypes.string,
};

export default connect(mapStateToProps)(PublicRoute);
