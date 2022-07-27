import { ImagePropsBase, ImageStyle, StyleProp } from 'react-native'

// TODO To check: maybe delete `extends ImagePropsBase`
export interface FullScreenImageProps extends ImagePropsBase {
  style?: StyleProp<ImageStyle>;
  // TODO: Add props
  navigation: any;
  route: Record<string, any>;
}
