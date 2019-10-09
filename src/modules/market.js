import React from 'react';
import './market.css';
import Cart from './cart';
class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        };
    }
    render() {
        return (
            <div className='market'>
                <div className='market-header'>
                    <h1>Market</h1>
                </div>
                <div className='market-carts-holder'>
                    <Cart />
                </div>
            </div >
        );
    }
}
export default Market;








