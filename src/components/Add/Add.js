import React, { Component } from 'react';
import './Add.css';
    
class Add extends Component {
    render() {
        return (
            <form className="Add">
                <div className="info">
                    <div className="name-container">
                        <input type="text" placeholder="Who paid?"/>
                    </div>
                    <div className="amount-container">
                        <input type="number" placeholder="$0.00" min="0.01" step="0.01" />
                    </div>
                </div>
                <textarea placeholder="For what?" className="description"></textarea>
                <button className="add-button">ADD</button>
            </form>
        );
    }
}

export default Add; 
    