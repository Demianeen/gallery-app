import { useFonts } from 'expo-font'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import StyledText from './components/StyledText/StyledText'
import { RootStack } from './navigators/rootStack'
import { store } from './store'

export default function App () {
  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return (<View>
      <StyledText>{'Fonts are loading'}</StyledText>
    </View>)
  }

  return (
    <Provider store={ store }>
      <RootStack />
    </Provider>
  )
}
