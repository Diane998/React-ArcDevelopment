import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from '../ui/ButtonArrow';

import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: { marginBottom: '5em', width: '100%' },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  learnServices: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    margin: '0.5em 0em 1em 0em'
  }
}));

const Services = props => {
  const { setValue, setSelectedIndex } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        style={{
          margin: matchesSM ? '1em 0 0 0' : '1em 0 0 5em',
          textAlign: matchesSM ? 'center' : ''
        }}
        item
      >
        <Typography variant="h2" gutterBottom>
          Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.servicesContainer}
          style={{ marginTop: '5em' }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              onClick={(() => setValue(1), setSelectedIndex(1))}
              component={Link}
              to="/customsoftware"
              className={classes.learnServices}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt="custom software icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* IOS/Android block*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? ' ' : <br />}with either mobile platform.
            </Typography>
            <Button
              onClick={(() => setValue(1), setSelectedIndex(2))}
              component={Link}
              to="/mobileapps"
              className={classes.learnServices}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="mobile app icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* websites block*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              onClick={(() => setValue(1), setSelectedIndex(3))}
              component={Link}
              to="/websites"
              className={classes.learnServices}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={websitesIcon}
              alt="website icon"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
