import * as React from 'react';
import {View} from 'react-native';

function Gap({hidden, gap, horizontal = false}: IGapProps) {
  const finalGap = gap ? 16 : 8;
  const styleAttribute = horizontal ? 'width' : 'height';

  return hidden ? null : (
    <View style={{[styleAttribute]: finalGap, flexBasis: gap}} />
  );
}

interface IGapProps {
  gap?: number;
  horizontal?: boolean;
  hidden?: boolean;
}

export default Gap;
