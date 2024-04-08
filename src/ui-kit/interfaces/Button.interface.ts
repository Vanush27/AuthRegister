export interface IButton {
	title: string;
	disabled?: boolean;
	trackingName?: string;
	loading?: boolean;
	onPress: () => void;
}
