import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.content')}</p>
    </div>
  );
};

export default Home;
