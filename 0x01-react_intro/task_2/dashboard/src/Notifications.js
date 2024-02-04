import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
	return (
		<div className='Notifications'>
			<p>Here is the list of notifications</p>
			<button style={{
				background: 'none',
				color: '#3a3a3a',
				fontSize: '20px',
				position: 'absolute',
				right: '2px',
				top: '2px',
				border: 'none',
				cursor: 'pointer',
			}}
				aria-label='Close'
				onClick={console.log('Close button has been clicked')}
			><img src={closeIcon} alt='Close Icon' width='10px' />Close </button>
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
		</div>
	);
}

export default Notifications;