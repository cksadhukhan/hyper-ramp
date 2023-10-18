import {Image, View} from 'react-native';
import Text from '../text/text.component';
import Minted from '../../assets/icons/minted.png';
import User from '../../assets/icons/user.png';
import Hamburger from '../../assets/icons/hamburger.png';

import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftIconContainer = styled.View`
  gap: 8px;
  flex-direction: row;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftIconContainer>
        <Image source={Minted} />
        <Image source={Hamburger} />
      </LeftIconContainer>

      <Image source={User} />
    </HeaderContainer>
  );
};
