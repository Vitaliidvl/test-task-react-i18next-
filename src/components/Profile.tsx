// import { Typography, Grid, Box, Avatar } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { ProfileProps } from '../types';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: theme.spacing(4),
//   },
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     marginBottom: theme.spacing(2),
//   },
//   name: {
//     fontWeight: 600,
//     fontSize: '2rem',
//     marginBottom: theme.spacing(2),
//   },
//   bio: {
//     fontSize: '1.2rem',
//     marginBottom: theme.spacing(2),
//   },
// }));

// function Profile({ isAuthenticated }: ProfileProps) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Avatar
//         className={classes.avatar}
//         alt="User Profile Picture"
//         src="https://picsum.photos/200"
//       />
//       <Typography className={classes.name} variant="h1" align="center">
//         John Doe
//       </Typography>
//       <Typography className={classes.bio} variant="body1" align="center">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
//         libero ac mi posuere bibendum.
//       </Typography>
//       {isAuthenticated && (
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <Box boxShadow={3} p={3}>
//               <Typography variant="h3">Skills</Typography>
//               <Typography variant="body1">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 euismod libero ac mi posuere bibendum.
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box boxShadow={3} p={3}>
//               <Typography variant="h3">Projects</Typography>
//               <Typography variant="body1">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 euismod libero ac mi posuere bibendum.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       )}
//     </div>
//   );
// }

// export default Profile;
import { Typography, Grid, Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProfileProps } from '../types';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  name: {
    fontWeight: 600,
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  bio: {
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
  },
}));

function Profile({ isAuthenticated }: ProfileProps) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        alt={t('user-profile-picture')}
        src="https://picsum.photos/200"
      />
      <Typography className={classes.name} variant="h1" align="center">
        John Doe
      </Typography>
      <Typography className={classes.bio} variant="body1" align="center">
        {t('user-bio')}
      </Typography>
      {isAuthenticated && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box boxShadow={3} p={3}>
              <Typography variant="h3">{t('skills')}</Typography>
              <Typography variant="body1">{t('user-skills')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box boxShadow={3} p={3}>
              <Typography variant="h3">{t('projects')}</Typography>
              <Typography variant="body1">{t('user-projects')}</Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Profile;
