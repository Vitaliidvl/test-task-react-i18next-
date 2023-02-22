import React from 'react';
import { useTranslation } from 'react-i18next';

type ProfileProps = {
  isAuthenticated: boolean;
};

const Profile: React.FC<ProfileProps> = ({ isAuthenticated }) => {
  const { t } = useTranslation();

  if (!isAuthenticated) {
    return (
      <div>
        <h2>{t('profile.notAuthenticated')}</h2>
        <p>{t('profile.loginRequired')}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>{t('profile.welcome')}</h2>
      <p>{t('profile.userProfile')}</p>
    </div>
  );
};

export default Profile;
