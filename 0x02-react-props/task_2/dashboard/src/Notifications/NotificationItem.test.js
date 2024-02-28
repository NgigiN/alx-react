import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem'; // Adjust the import path as necessary

describe('NotificationItem', () => {
	it('renders without crashing', () => {
		render(<NotificationItem />);
	});

	it('renders correct html with type and value props', () => {
		render(<NotificationItem type="default" value="test" />);
		const liElement = screen.getByRole('listitem');
		expect(liElement).toHaveAttribute('data-notification-type', 'default');
		expect(liElement).toHaveTextContent('test');
	});

	it('renders correct html with html prop', () => {
		render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
		const liElement = screen.getByRole('listitem');
		expect(liElement).toHaveAttribute('data-urgent');
		expect(liElement).toContainHTML('<u>test</u>');
	});
});
