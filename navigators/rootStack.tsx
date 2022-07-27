import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Gallery from '../screens/Gallery/Gallery'
import FullScreenImage from '../components/FullScreenImage/FullScreenImage'
import { useTypedSelector } from '../hooks/useTypesSelector'

export type RootStackParamList = {
  Gallery: undefined;
  Image: undefined;
}

const Stack = createStackNavigator<RootStackParamList>()

export const RootStack = () => {
  const { data } = useTypedSelector(store => store.unsplash)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ 'Gallery' }
          component={ Gallery }
          options={ { title: 'Recommended for you' } }
        />
        {data.map((image) => {
          return (
            <Stack.Screen
              key={ image.id }
              name={ image.id }
              component={ FullScreenImage }
              options={ { title: image.user.name } }
              initialParams={ {
                sourceURL: image.urls.full
              } }
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
