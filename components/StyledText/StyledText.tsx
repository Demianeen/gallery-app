import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { StyledTextProps } from './StyledText.props'

const StyledText = ({ style, children, ...props }: StyledTextProps) => {
  return (
    <Text style={ [styles.text, style] } { ...props }>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular'
  }
})

export default StyledText
