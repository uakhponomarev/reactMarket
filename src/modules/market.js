import React from 'react';
import ReactDOM from 'react-dom';
console.log(React);

class Market {
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
                </div>
                <div className='market-carts-holder'>
                </div>
            </div >
        );
    }
}








ReactDOM.render(<Market />, document.getElementById('root'));
