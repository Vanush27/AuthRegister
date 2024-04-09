import { View } from 'react-native';
import { styles } from './Row.styles';
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

const Row = ({ children, style }: IRowProps) => {
	return <View style={[styles.row, style]}>{children}</View>;
};

export interface IRowProps {
	children: ReactNode;
	style?: ViewStyle;
}

export default Row;
