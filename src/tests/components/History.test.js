import React from 'react';
import ReactDOM from 'react-dom';
import History from '../../components/History';
    
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<History />, div);
});