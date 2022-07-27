import { ImagePropsBase, ImageStyle, StyleProp } from 'react-native'

export interface StyledImageProps extends ImagePropsBase {
  style?: StyleProp<ImageStyle>;
}
