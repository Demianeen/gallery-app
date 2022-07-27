import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { StyledImageProps } from './StyledImage.props'

const StyledImage = ({ style, ...props }: StyledImageProps) => {
  return (
    <Image style={ [styles.image, style] } { ...props } />
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
})

export default StyledImage
