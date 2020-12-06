import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWord } from './compoments/HelloWord';
import { LikeButton } from './compoments/LikeButton';
import MouseTracker from './compoments/MouseTracker';
import useMousePosition from './hooks/useMousePosition'; // 自定义 hooks 可以多处引用

interface IThemeProps {
	[key: string]: {
		color: string;
		background: string;
	};
}

const themes: IThemeProps = {
	light: {
		color: '#000',
		background: '#eee',
	},
	dark: {
		color: '#fff',
		background: '#222',
	},
};
export const ThemeContext = React.createContext(themes.light);

function App() {
	const [show, setShow] = useState(true);
	const position = useMousePosition();
	return (
		<div className='App'>
			<ThemeContext.Provider value={themes.light}>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					{/* {show ? <MouseTracker></MouseTracker> : ''} */}
					<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
						Learn React
					</a>
					<p>
						X: {position.x}, Y : {position.y}
					</p>
					<HelloWord message='jingjing'></HelloWord>
					<LikeButton></LikeButton>
					<button
						onClick={() => {
							setShow(!show);
						}}
					>
						Trigger Button
					</button>
				</header>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
