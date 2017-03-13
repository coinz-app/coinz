import React, { Component } from 'react';
import HistoryItem from '../HistoryItem';
import './History.css';
    
class History extends Component {
    render() {
        return (
            <div className="History">
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />
            </div>
        );
    }
}

export default History; 
    