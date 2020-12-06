import React, { useContext } from 'react';
import { ThemeContext } from '../App';
interface IProps {
	message: string;
}

export const HelloWord = (props: IProps) => {
	const theme = useContext(ThemeContext);

	const style = {
		color: theme.color,
		background: theme.background,
	};
	return <h2 style={style}>{props.message}</h2>;
};
