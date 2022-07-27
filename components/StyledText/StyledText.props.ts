import { StyleProp, TextProps, TextStyle } from 'react-native'

export interface StyledTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}
