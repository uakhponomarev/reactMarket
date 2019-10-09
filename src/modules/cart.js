import React from 'react';

import './cart.css';

 class Cart extends React.Component{
    render() {
        return (
            <div className='cart'>
                <span className='cardName'>Card name</span>
                <span className='cardStatus'></span>
            </div>
        );
    }
}
export default Cart;