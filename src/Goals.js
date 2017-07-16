import React from 'react';

export default function Goals({time, goal}) {
	return (
		<div className="target">
			{
				goal
					.map((goal, index) =>
						<p key={ index }>Current target: { goal }</p>
					)
			}
			<p>Duration: { time } seconds</p>
		</div>
	)
};