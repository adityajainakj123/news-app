import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href='/'>News-Adi</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href='/'>General </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href='/'>Business </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href='/'>Education </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href='/'>Wealth </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href='/'>Sports </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href='/'>Crime </a>
        </li>
        
        
      </ul>
    </div>
  </nav>
      </div>
    )
  }
}

export default NavBar ;
