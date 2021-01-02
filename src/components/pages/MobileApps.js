import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CallToAction from '../ui/CallToAction';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg';
import integrationAnimation from '../../animations/integrationAnimation/data';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

const MobileApps = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              IOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employess, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Forward to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ margin: '5em 0' }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : ''}
              variant="h4"
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : ''}
              variant="body1"
              paragraph
            >
              Our technology eables innate interconnection between web and
              mobile application, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : ''}
              variant="body1"
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users thatn ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="h4"
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              Our tcutting-edge development process allows us to create apps for
              iPhone, Andriod, and tablets - all at the same time.
            </Typography>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant="body1"
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across al devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ marginBottom: '5em' }}
      >
        <Grid item container alignItems="center" direction="column" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={swiss}
              alt="swiss army knife"
              style={{ maxWidth: matchesXS ? '80vw' : '' }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          md
          style={{ margin: matchesMD ? '5em 0' : 0 }}
        >
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear=one-off sign"
              style={{ maxWidth: matchesXS ? '80vw' : '28em' }}
            />
          </Grid>
        </Grid>
        <Grid item container alignItems="center" direction="column" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={engagement}
              alt="app with notification"
              style={{ maxWidth: matchesXS ? '80vw' : '' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
