import React from 'react';
import {Query} from '@apollo/client/react/components'
import {gql} from "@apollo/client";
import { NavLink } from 'react-router-dom';
import logo from '../Images/a-logo.svg'
import cartLogo from '../Images/cartlogo.svg'
import { FaAngleDown } from 'react-icons/fa'

const ALL_QUERY = gql`
  query AllQuery{
    categories{
    name,
    products{
      id
    }
  }

  currencies{
    label,
    symbol
  }
}
`
// const CURRENCIES_QUERY = gql`
//   query CurrenciesQuery{
//     currencies{
//     label,
//     symbol
//   }
// }
// `

class Navbar extends React.Component {
constructor(props){
  super(props)
  this.state = {
    dropDisplay: false,
    currency: '$'
  }

  this.toggleDropdown = this.toggleDropdown.bind(this)
}

 toggleDropdown = () => this.setState(({dropDisplay}) => ({ 
  dropDisplay: !dropDisplay
}))


render (){
  const { dropDisplay, currency } = this.state
  console.log(dropDisplay)
  return (
    <Query query={ALL_QUERY}>
    {({ loading, error, data }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>

    return (
    <nav className="d-flex navbar">
    <ul className='d-flex navs'>
    {data.categories.map(({ name }) => (
    <li key={name}>
      <NavLink to = {name === 'all' ? '/' : `/${name}`}>
        {name}
      </NavLink>
    </li>
  ))}
   </ul>
    <img src={logo} alt='logo' />
    <div className="currency-dropdown">
      <div className="d-flex" onClick = {this.toggleDropdown}>
      <span >{ currency }</span>
      <span ><FaAngleDown/></span>
      </div>
     <ul className="d-flex currency" style= {{ display: dropDisplay ?  'flex' : 'none'}}>{data.currencies.map(({label, symbol}) => <li key={label} onClick = {()=>this.setState(({dropDisplay})=>({ dropDisplay: !dropDisplay,currency: symbol}))}>{label}</li>)}</ul>
     </div>
    <img src={cartLogo} alt = 'cart' />
    </nav>
    )

    }}
</Query>
  )

 
}
 


}

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export {Navbar as default}
