import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import styles from '../assets/styles/components/IconButtonStyles';

type IconButtonProps = {
  iconSource: number;
  action: () => void;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

function IconButton(props: IconButtonProps): React.JSX.Element {
  const {iconSource, action, style, containerStyle} = props;
  const imageStyle = style ?? styles.smallIcon;

  return (
    <TouchableOpacity onPress={action} style={containerStyle ?? {}}>
      <Image source={iconSource} style={imageStyle} />
    </TouchableOpacity>
  );
}

export default IconButton;
