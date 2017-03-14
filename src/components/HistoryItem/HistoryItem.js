import React, { Component } from 'react';
import './HistoryItem.css';
    
const HistoryItem = () => (
    <div className="history-item">
        <div className="history-item-left">
            <div className="history-item-name">Danny</div>
            <div className="history-item-desc">Malibu wine Safari</div>
        </div>
        <div className="history-item-right">
            <div className="history-item-date">Sun, March 12</div>
            <div className="history-item-amount">-$130</div>
        </div>
    </div>
);

export default HistoryItem; 
    