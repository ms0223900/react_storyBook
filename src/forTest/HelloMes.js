import React, { Fragment } from 'react';

const styles = {
  heading: {
    color: '#345',
    textAlign: 'center',
    marginBottom: '20px'
  }, 
  logo: {
    width: 250,
    heading: 250,
    objectFit: 'cover',
  }
};

const WelcomMes = ({ imgPath }) => (
  <Fragment>
    <h1 style={styles.heading}>Welcome to</h1>
    <img src={ imgPath } alt="appLogo" style={ styles.logo } />
  </Fragment>
);

export default WelcomMes;
