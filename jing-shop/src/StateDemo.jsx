import React from 'react';

class StateDemo extends React.Component {
	constructor(props) {
		super(props);
		// 第一，state 要在构造函数中定义
		this.state = {
			count: 0,
		};
	}
	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.increase}>累加</button>
			</div>
		);
	}
	increase = () => {
		// 第二，不要直接修改 state ，使用不可变值 ----------------------------
		// this.state.count++ // 错误
		this.setState({
			count: this.state.count + 1,
		});
		// 操作数组、对象的的常用形式

		// 第三，setState 可能是异步更新（有可能是同步更新） ----------------------------

		this.setState(
			{
				count: this.state.count + 1,
			},
			() => {
				// 联想 Vue $nextTick - DOM
				console.log('count by callback', this.state.count); // 回调函数中可以拿到最新的 state
			}
		);
		console.log('count', this.state.count); // 异步的，拿不到最新值

		// setTimeout 中 setState 是同步的
		setTimeout(() => {
			this.setState({
				count: this.state.count + 1,
			});
			console.log('count in setTimeout', this.state.count);
		}, 0);

		// 自己定义的 DOM 事件，setState 是同步的。再 componentDidMount 中

		// 第四，state 异步更新的话，更新前会被合并 ----------------------------
		// 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1
		this.setState({
			count: this.state.count + 1,
		});
		this.setState({
			count: this.state.count + 1,
		});
		this.setState({
			count: this.state.count + 1,
		});

		// 传入函数，不会被合并。执行结果是 +3
		this.setState((prevState, props) => {
			return {
				count: prevState.count + 1,
			};
		});
		this.setState((prevState, props) => {
			return {
				count: prevState.count + 1,
			};
		});
		this.setState((prevState, props) => {
			return {
				count: prevState.count + 1,
			};
		});
	};
}
export { StateDemo };
