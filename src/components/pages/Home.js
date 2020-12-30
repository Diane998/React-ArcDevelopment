import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from '../ui/ButtonArrow';

import animationData from '../../animations/landinganimation/data';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: { margin: '5em 2em 0em 0em' },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    margin: '2em 0em 0em 10%',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
      maxWidth: '30em'
    }
  },
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '5em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  buttonContainer: {
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 1em'
    }
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learn: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  learnServices: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    margin: '0.5em 0em 1em 0em'
  },
  h2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
      padding: '0em 0.5em'
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid className={classes.mainContainer} container direction="column">
      <Grid item>
        {/* Hero block */}
        <Grid container direction="row" alignItems="center" justify="flex-end">
          <Grid
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}
            className={classes.textContainer}
            sm
            item
          >
            <Typography className={classes.h2} variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimate} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learn}>
                  <spane style={{ marginRight: 5 }}>Learn More</spane>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100'} qidth={'100'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* services block*/}
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
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button className={classes.learnServices} variant="outlined">
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
            <Button className={classes.learnServices} variant="outlined">
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
            <Button className={classes.learnServices} variant="outlined">
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

export default Home;
