import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: '400px',
    padding: '16px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '16px',
  },
  button: {
    marginTop: '16px',
  },
}));

type LoginProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === 'admin' && password === '12345') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/profile')
    } else {
      setErrorMessage(t('login.invalidCredentials'));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
    history.push('/');
  };

  if (isAuthenticated) {
    return (
      <div>
        <p>{t('login.alreadyLoggedIn')}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          className={classes.button}
        >
          {t('login.logoutButton')}
        </Button>
      </div>
    );
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6">{t('login.title')}</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          id="username"
          label={t('login.username')}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={classes.input}
        />

        <TextField
          id="password"
          label={t('login.password')}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />

        {errorMessage && <p>{errorMessage}</p>}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          {t('login.submitButton')}
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
