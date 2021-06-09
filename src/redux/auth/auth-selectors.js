const getIsAuthenticated = state => state.auth.token;

const getUseremail = state => state.auth.user.email;

const authSelectors = { getIsAuthenticated, getUseremail };
export default authSelectors;
