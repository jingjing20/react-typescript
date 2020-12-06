import React, { useState, useEffect } from 'react';

const MouseTracker: React.FunctionComponent = () => {
	const [positions, setPositions] = useState({ x: 0, y: 0 });
	useEffect(() => {
		console.log('add effect', positions.x);
		const updateMouse = (e: MouseEvent) => {
			console.log('inner');
			setPositions({ x: e.clientX, y: e.clientY });
		};
		document.addEventListener('click', updateMouse);
		return () => {
			document.removeEventListener('click', updateMouse);
			console.log('remove effect', positions.x);
		};
	}, []);
	console.log('before render');
	return (
		<div>
			<p>
				X: {positions.x}, Y : {positions.y}
			</p>
		</div>
	);
};

export default MouseTracker;
