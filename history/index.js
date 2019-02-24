import { createBrowserHistory } from 'history';
const history = typeof window !== 'undefined' ? createBrowserHistory : { push: () => {} };
const navigate = to => history.push(to);
export { history, navigate };
