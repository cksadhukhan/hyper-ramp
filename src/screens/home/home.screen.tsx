import {View} from 'react-native';
import React from 'react';
import Screen from '../../components/screen/screen.component';
import Text from '../../components/text/text.component';
import {Header} from '../../components/header/header.component';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <Screen>
      <Header />
      <View>
        <Text variant="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          deleniti voluptatum modi? Et, eius doloremque, repellat quo velit
          excepturi, totam molestiae numquam tenetur nam ea corporis non vitae
          odio. Natus.
        </Text>
      </View>
    </Screen>
  );
};

export default HomeScreen;
