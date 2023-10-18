import {ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Screen from '../../../components/screen/screen.component';
import Header from '../components/header/header.component';
import styled from 'styled-components/native';
import Card from '../../../components/card/card.component';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from '../../../components/text/text.component';
import RequestCard from '../components/request-card/request-card.component';

const Head = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RequestHistory = () => {
  return (
    <Screen>
      <Header />
      <ScrollView>
        <RequestCard
          varient="mini"
          type="awaiting"
          receive={2944.56}
          sell={1.5}
        />
        <RequestCard
          varient="full"
          type="completed"
          receive={2944.56}
          sell={1.5}
        />
        <RequestCard
          varient="mini"
          type="expired"
          receive={2944.56}
          sell={1.5}
        />
      </ScrollView>
    </Screen>
  );
};

export default RequestHistory;
