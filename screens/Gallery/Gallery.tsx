import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypesSelector'
import StyledImage from '../../components/StyledImage/StyledImage'
import StyledText from '../../components/StyledText/StyledText'
import { GalleryProps } from './Gallery.props'

const Gallery = ({ navigation }: GalleryProps) => {
  const { error, loading, data } = useTypedSelector(store => store.unsplash)
  const { getUnsplashImages } = useAction()

  useEffect(() => {
    getUnsplashImages()
  }, [])

  if (loading) {
    return (
      <View style={ styles.loadingContainer }>
        <StyledText style={ styles.loadingText }>{'Loading...'}</StyledText>
      </View>
    )
  }

  if (error) {
    return (
      <View style={ styles.loadingContainer }>
        <StyledText style={ styles.loadingText }>{error}</StyledText>
      </View>
    )
  }

  return (
    <ScrollView>
      {/* <StyledText style={ styles.imagesHeading }>{''}</StyledText> */}
      <View style={ styles.imagesContainer }>
        {data.map(image => {
          return (
            <View key={ image.id }>
              <TouchableOpacity
                onPress={ () => navigation.navigate(image.id) }
              >
                <StyledImage
                  source={ { uri: image.urls.small } }
                  style={ styles.image }
                  // TODO: Add accessibility
                  // accessible={ true }
                  // accessibilityLabel={ image.description }
                  />
                </TouchableOpacity>
              <StyledText
                style={ styles.imageText }
                // accessible={ true }
                // accessibilityLabel={ image.user.name }
              >
                {image.user.name}
              </StyledText>
            </View>
          )
        }
        )}
      </View>
    </ScrollView>
  )
}

const { width: ScreenWidth } = Dimensions.get('screen')

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 25
  },
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  image: {
    width: ScreenWidth / 2,
    height: ScreenWidth / 2
  },
  imagesHeading: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 25
  },
  imageText: {
    fontSize: 15
  }
})

export default Gallery
