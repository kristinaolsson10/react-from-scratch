import React from "react"
import logo from '../images/code-pub-header.png'

class Header extends React.Component {
  render() {
    return (
      <header style={{ marginBottom: 20 }}>
        <img src={logo} style={{ width: '100%' }} alt="logo" />
      </header>
    )
  }
}

export default Header