import { StyleSheet } from 'react-native';
import { useTheme } from '@hooks';

export function useStyles() {
	const { theme } = useTheme();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingHorizontal: 16,
			paddingTop: 16,
			backgroundColor: '#FFF',
		},
		logoContainer: {
			alignItems: 'center',
		},
	});

	return { styles, theme };
}
