import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {this.setState({clicked: !this.state.clicked})};

  render() {
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <Link className="logo text-3xl" to="/" style={{textShadow: "4px 4px 4px #aaa"}}>Vanessa D'Antonio</Link>
      
      {/* Menu */}
      <ul id='navbar' className="hidden md:flex">
        <NavLink exact="true" activeclassname="active" to="/" className="navLink">Home</NavLink>
        <NavLink exact="true" activeclassname="active" to="/about" className="navLink">About</NavLink>
        <NavLink exact="true" activeclassname="active" to="/work" className="navLink">Work</NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact" className="navLink">Contact</NavLink>
      </ul>
      
      {/* Hamburger */}
      <div onClick = { this.handleClick } className="hamburger-icon md:hidden z-10">
        {this.state.clicked ? <FontAwesomeIcon icon = { faClose }/> : <FontAwesomeIcon icon = { faBars }/>}
      </div>
      
      {/* Mobile menu */}
      <ul className={this.state.clicked ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"}>
        <NavLink onClick={() => this.setState({clicked: false})} exact="true" activeclassname="active" to="/" className="navLink py-4 text-2xl">Home</NavLink>
        <NavLink onClick={() => this.setState({clicked: false})} exact="true" activeclassname="active" to="/about" className="navLink py-4 text-2xl">About</NavLink>
        <NavLink onClick={() => this.setState({clicked: false})} exact="true" activeclassname="active" to="/work" className="navLink py-4 text-2xl">Work</NavLink>
        <NavLink onClick={() => this.setState({clicked: false})} exact="true" activeclassname="active" to="/contact" className="navLink py-4 text-2xl">Contact</NavLink>
      </ul>

      {/* Menu */}  
      <ul className="flex">
        <li className="px-3">
          <a href="https://www.linkedin.com/in/vanessadantonio/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="https://github.com/VanessaDantonio" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="@VYumi" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="anchor-icon"/></a>
        </li>
        <li className="px-3">
          <a href="https://twitter.com/VYNDantonio" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} className="anchor-icon"/></a>
        </li>
      </ul>

    </div>
  );
}
}