import React from 'react';
import classNames from 'classnames';
export enum ButtonSize {
	Large = 'lg',
	Small = 'sm',
}

export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link',
}

interface BaseButtonProps {
	className?: string;
	// 设置 Button 的禁用
	disabled?: boolean;
	// 设置 Button 的尺寸
	size?: ButtonSize;
	// 设置 Button 的类型
	btnType?: ButtonType;
	children: React.ReactNode;
	href?: string;
}

export const Button: React.FC<BaseButtonProps> = (props) => {
	const { btnType, disabled, size, children, href } = props;
	const classes = classNames('btn', classNames, {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === 'link' && disabled,
	});
	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href}>
				{children}
			</a>
		);
	} else {
		return (
			<button className={classes} disabled={disabled}>
				{children}
			</button>
		);
	}
};

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default,
};

export default Button;
