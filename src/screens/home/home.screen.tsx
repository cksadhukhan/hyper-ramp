import {View} from 'react-native';
import React from 'react';
import Screen from '../../components/screen/screen.component';
import Text from '../../components/text/text.component';
import {Header} from '../../components/header/header.component';
import Spacer from '../../components/spacer/spacer.component';
import {BuySellTab} from '../../components';
import Button from '../../components/button/button.component';
import styled from 'styled-components/native';
import ChevronDown from '../../assets/icons/chevron-down.png';
import {Image} from 'react-native';

const ButtonContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

const SelectedCoinContainer = styled.View`
  background-color: #3a393e;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;

  padding: 16px 11px;
  gap: 8px;
  width: 123px;
  border-radius: 100px;
`;

const HomeScreen: React.FunctionComponent = () => {
  return (
    <View style={{backgroundColor: '#232325', padding: 20, flex: 1}}>
      <Spacer vertical={10} />
      <Header />
      <Spacer vertical={20} />
      <BuySellTab />
      <Spacer vertical={10} />
      <SelectedCoinContainer>
        <Text variant="body">Etherium</Text>
        <Image source={ChevronDown} />
      </SelectedCoinContainer>
      <Spacer vertical={10} />
      <View>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          deleniti voluptatum modi? Et, eius doloremque, repellat quo velit
          excepturi, totam molestiae numquam tenetur nam ea corporis non vitae
          odio. Natus.
        </Text>
        <Spacer vertical={8} />
        <Text variant="caption" style={{color: '#FCFCFC', fontWeight: '500'}}>
          Conversions provided by Coinbase. HyperRamp charges 1% for every
          request. This is inclusive in the total receive rate.
        </Text>
      </View>
      <Spacer vertical={50} />
      <ButtonContainer>
        <Button text="Create Request" type={'primary'} />
      </ButtonContainer>
    </View>
  );
};

export default HomeScreen;
