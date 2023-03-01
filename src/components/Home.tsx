// import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import homeImg from '../assets/home.jpg';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  select: {
    marginBottom: '1rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
  },
});

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const handleChangeLanguage = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <Box className={classes.container}>
      <Select
        className={classes.select}
        value={i18n.language}
        onChange={handleChangeLanguage}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ua">Українська</MenuItem>
      </Select>
      <Typography variant="h1" component="h1" gutterBottom>
        {t('home.title')}
      </Typography>
      <Box className={classes.imageContainer}>
        <img className={classes.image} src={homeImg} alt="Home" />
      </Box>
      <Typography variant="h4">{t('home.content')}</Typography>
    </Box>
  );
};

export default Home;
