import React, { Component } from 'react';
import './main.css'

class Main extends Component{
	render(){
		return(
			<main>
		<div className="Img-blur">
			
		</div>
		<section className="Play-page">
			<div className="Cover">
				<div className="Set-Cover"></div>
			</div>
			<h2 className="title">Welcome Listing</h2>
			<h3 className="auther">Aleen</h3>
			<div className="Play-style">
				<i className="fa-play-style iconfont">&#xe603;</i>
			</div>
			<div className="Set-volume">
				<p><i className="volume-btn iconfont">&#xe6be;</i></p>
				<div className="Volume">
					<div className="volume-total"></div>
					<div className="volume-now"></div>
				</div>
			</div>
			<h4><i className="Set-share iconfont">&#xe605;</i></h4>
			<nav className="Play-progress">
				<div className="time-now">0:00</div>
				<div className="bar">
					<div className="progress-total"></div>
					<div className="progress-now"></div>
				</div>
				<div className="time-end">0:00</div>
			</nav>
			<div>
				<ul className="sings">
				</ul>
			</div>
			<div className="litte-Lryic-page">
				<ul></ul>
			</div>
		</section>
		<section className="Lryic-page">
			<ul></ul>
		</section>
		<section className="Get-style">
			<div className="search-bar">
				<input type="text" placeholder="搜索你喜欢的歌曲" />
				<button className="search-btn">搜索</button>
			</div>
			<div className="style-list">
				<ul className="sings-list">
				</ul>
			</div>
		</section>
	</main>
		);
	}
}

export default Main;