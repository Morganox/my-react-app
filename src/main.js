import React, { Component } from "react"
import {
	Route,
	// NavLink, 
	HashRouter
} from "react-router-dom"
import Home from "./home"
import About from "./about"
import Soulmate from "./soulmate"

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1 className="title">Single Meet Soulmate</h1>
					<ul className="header">
						<li><navlink to="/">Home</navlink></li>
						<li><navlink to="/about">About</navlink></li>
						<li><navlink to="/soulmate">Soulmate</navlink></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/soulmate" component={Soulmate} />
					</div>
				</div>
			</HashRouter>
		)
	}
}
export default Main