// import { useIsFocused } from '@react-navigation/native';
// import * as NavigationBar from 'expo-navigation-bar';
// import { useEffect } from 'react';
// import { Platform } from 'react-native';
// import type { ColorValue } from 'react-native';

// const defaultProps: Required<INavigationBarProps> = {
// 	color: '#000000',
// 	buttonStyle: 'dark',
// 	visibility: 'visible',
// };

// /** Handles styles and behavior of Android navigation bar. */
// export function useNavigationBar(navigationBarProps: INavigationBarProps) {
// 	const isFocused = useIsFocused();
// 	useEffect(() => {
// 		if (Platform.OS === 'android' && isFocused) {
// 			const props = Object.assign(defaultProps, navigationBarProps);
// 			NavigationBar.setBackgroundColorAsync(props.color);
// 			NavigationBar.setButtonStyleAsync(props.buttonStyle);
// 			NavigationBar.setVisibilityAsync(props.visibility);
// 		}
// 	}, [isFocused]);
// }

// export interface INavigationBarProps {
// 	color?: ColorValue;
// 	buttonStyle?: NavigationBar.NavigationBarButtonStyle;
// 	visibility?: NavigationBar.NavigationBarVisibility;
// }
