import React from 'react';
import ReactDOM from 'react-dom';
import HistoryItem from '../../components/HistoryItem';
    
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HistoryItem />, div);
});