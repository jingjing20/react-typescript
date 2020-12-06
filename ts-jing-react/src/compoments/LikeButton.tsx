import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

export const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0);
	const [swith, setSwith] = useState(true);
	const position = useMousePosition();
	useEffect(() => {
		document.title = `你点击了${like}`;
		console.log('document title effect is runing');
	}, [like]);
	return (
		<>
			<button
				onClick={() => {
					setLike(like + 1);
				}}
			>
				{like}👍
			</button>
			<h2>
				X: {position.x}, Y : {position.y}
			</h2>
			<button
				onClick={() => {
					setSwith(!swith);
				}}
			>
				{swith ? 'ON' : 'OFF'}
			</button>
		</>
	);
};
// export default LikeButton
