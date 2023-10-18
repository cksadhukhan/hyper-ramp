import {View, Text} from 'react-native';
import React from 'react';
import Screen from '../../components/screen/screen.component';
import RequestCard from '../request/components/request-card/request-card.component';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <Screen>
      <RequestCard type="awaiting" sell={15} receive={29764} varient={'mini'} />
    </Screen>
  );
};

export default HomeScreen;
