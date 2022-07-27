import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { FullScreenImageProps } from './FullScreenImage.props'

const FullScreenImage = ({ route, style }: FullScreenImageProps) => {
  const { sourceURL } = route.params
  return (
    <Image
      style={ [styles.image, style] }
      source={ { uri: sourceURL } }
    />
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    flex: 1
  }
})

export default FullScreenImage
