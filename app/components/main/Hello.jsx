import React from 'react';

class Component1 extends React.Component {
	constructor() {
		super();
		this.state = {
			liked: false,
			xxx: false
		};
	}

	handleClick(e) {
		this.state.xxx=!this.state.xxx;
		console.log(this);
		this.setState({liked:!this.state.liked});
	}

	render() {
		var text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			<p onClick={e=>{this.handleClick(e)}}>
				You {text} this. Click to toggle.哈哈哈
			</p>
		);
	}
}

//导出组件
export default Component1;