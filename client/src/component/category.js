import React from 'react';

class Category extends React.Component {

    render() {
       const {data, categoryName} = this.props
       const currentCategory = data.categories.filter(({name}) => name === categoryName)
        return (
            <div>
            {currentCategory.map(({name, products}) => (
            <div key={name}>
            <h1>{name}</h1>
             <div style={{display: 'flex' , width: '100%', gap: '4%', flexWrap: 'wrap'}}>
             {products.map(({id,gallery})=>
             <div style={{display: 'flex' , flex:'0 0 auto', width: '30%', flexDirection:'column', justifyContent: 'space-between'}} key={id}>
             <div style={{width: '100%', backgroundColor:'#f7f7f7'}}><img src={gallery[0]} style={{width: '100%', height: '400px', objectFit:'contain'}} alt={id}/></div>
             <p >{id}</p>
             </div>
             )}
             </div>
            </div>
            ))}
            </div>
        )
    }
}

export default Category