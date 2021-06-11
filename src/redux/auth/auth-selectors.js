const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUseremail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUseremail };
export default authSelectors;
