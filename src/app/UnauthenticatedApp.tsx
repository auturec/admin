import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import Main from 'routes/main';
import AppLayout from 'layouts/AppLayout';

import { HOME } from 'constants/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const UnauthenticatedApp: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <ScrollToTop />
        <Switch>
          <Route exact path={HOME} component={Main} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default UnauthenticatedApp;
