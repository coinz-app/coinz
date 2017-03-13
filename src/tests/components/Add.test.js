import React from 'react';
import ReactDOM from 'react-dom';
import Add from '../../components/Add';
    
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Add />, div);
});