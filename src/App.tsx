import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Home from './components/Home';
import News from './components/News';
import Profile from './components/Profile';
import Login from './components/Login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
    },
  })
);

function App() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              {t('menu.home')}
            </Button>
            <Button color="inherit" component={Link} to="/news">
              {t('menu.news')}
            </Button>
            {isAuthenticated ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  {t('menu.profile')}
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  {t('menu.logout')}
                </Button>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login">
                {t('menu.login')}
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route
            path="/profile"
            render={() =>
              isAuthenticated ? (
                <Profile isAuthenticated={isAuthenticated} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/login"
            render={() =>
              isAuthenticated ? (
                <Redirect to="/profile" />
              ) : (
                <Login
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={handleLogin}
                />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
