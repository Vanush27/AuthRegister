import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../UserIcon/UserIcon';

import {styles} from './CheckmarkIcon.styles';

const CheckmarkIcon = ({
  width,
  height,
  color,
  testID = 'CheckmarkIcon',
}: ICheckmarkIconProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    testID={testID}
    style={styles.icon}>
    <Path
      d="M10.195.469 4.031 6.633l-2.25-2.274c-.117-.093-.304-.093-.398 0l-.68.68c-.094.094-.094.281 0 .399l3.14 3.117a.27.27 0 0 0 .4 0l7.03-7.032c.094-.093.094-.28 0-.398l-.68-.656c-.093-.117-.28-.117-.398 0Z"
      fill={color}
    />
  </Svg>
);

export interface ICheckmarkIconProps extends ISvgIcon {}

export default CheckmarkIcon;
