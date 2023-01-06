import React, { useEffect, memo } from 'react';
import { BackHandler, Platform } from 'react-native';
import { connect } from 'react-redux';
import { DemoApp } from "./AppContainer";

const DemoNavigation = memo(({dispatch, nav}) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', undefined);
    }
  }, []);

  return (
    <DemoApp dispatch={dispatch} state={nav} />
  );
});

const mapStateToProps = state => ({nav: state.nav});

export default connect(mapStateToProps)(DemoNavigation);
