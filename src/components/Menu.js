import React from 'react'
import '../style/nav.css'
import logo from '../images/logo.png'
const Menu = ({ activeCart, changeActiveCart }) => {
    const menu = {
      'board': "płyta",
      'summary': "streszczenie",
      'author': "o autorze",
      'publishing': "wydawnictwo"
    };

    return (
    <div className="header">
        <div className="nav">
          {Object.keys(menu).map((key) => {
          return <button className={ activeCart === key ? 'active' : 'deactive' } onClick={() => changeActiveCart(key)}>{menu[key]}</button>
          })}
        </div>
        <img className="logo" src={logo} alt="Logo" />
    </div>
    )
}

export default Menu