import React from 'react';
import {Query} from '@apollo/client/react/components'
import{gql} from "@apollo/client";
import { NavLink } from 'react-router-dom';

const CATEGORIES_QUERY = gql`
  query CategoriesQuery{
    categories{
    name,
    products{
      id
    }
  }
}
`

class Navbar extends React.Component {

render (){

  return (
    <Query query={CATEGORIES_QUERY}>
    {({ loading, error, data }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>

    return (
    <nav>
    {data.categories.map(({ name }) => (
    <li key={name}>
      <NavLink to = {name === 'all' ? '/' : `/${name}`}>
        {name}
      </NavLink>
    </li>
  ))}
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
