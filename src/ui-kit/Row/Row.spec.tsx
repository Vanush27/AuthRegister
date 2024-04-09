import { render } from '@testing';
import Row from './Row';
import { Text } from 'react-native';

describe('Row component', () => {
	it('renders content correctly', async () => {
		const content = 'Some text content';
		const { container, getByText } = render(
			<Row>
				<Text>{content}</Text>
			</Row>,
		);

		expect(container).not.toBeNull();
		expect(getByText(content)).not.toBeNull();
	});
});
