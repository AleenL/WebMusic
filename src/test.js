import React, { Component } from 'react';
import './test.css'

class Main extends Component{
	render(){
		return(
			<header>
				<nav className="Title-Set">
				<i className="Set-like iconfont">&#xe699;</i>
				<i className="Set-user iconfont">&#xe630;</i>
				<i className="Set-vidio iconfont">&#xe6be;</i>
				</nav>
			</header>
		);
	}
}

export default Main;