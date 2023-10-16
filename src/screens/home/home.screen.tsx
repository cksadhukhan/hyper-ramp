import { View, Text } from 'react-native'
import React from 'react'
import Screen from '../../components/screen/screen.component'

const HomeScreen: React.FunctionComponent = () => {
  return (
    <Screen>
        <View>
            <Text>Hello World</Text>
        </View>
    </Screen>
  )
}

export default HomeScreen