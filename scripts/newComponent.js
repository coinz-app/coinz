const fs = require('fs');
var path = require('path');

var jsonPath = path.join(__dirname, '..', 'config', 'dev', 'foobar.json');

const componentName = process.argv[2];

if(!componentName) {
    console.log('Please provide a name for your component!');
    process.exit(0);
}

const dir = path.join(__dirname, '..', 'src', 'components', componentName);
const testDir = path.join(__dirname, '..', 'src', 'tests', 'components');

if (fs.existsSync(dir)){
    console.log('That component already exists!');
    process.exit(0);
}

fs.mkdirSync(dir);


const content = {
    js: `import React, { Component } from 'react';
import './${componentName}.css';
    
class ${componentName} extends Component {
    render() {
        return (
            <div className="${componentName}">
            </div>
        );
    }
}

export default ${componentName}; 
    `,
    css: `.${componentName} { }`,
    index: `import ${componentName} from './${componentName}';
export default ${componentName};`,
    test: `import React from 'react';
import ReactDOM from 'react-dom';
import ${componentName} from '../../components/${componentName}';
    
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<${componentName} />, div);
});`
};


let remaining = 4;

// JS File
fs.writeFile(path.join(dir, `${componentName}.js`), content.js, tick); 

// CSS File
fs.writeFile(path.join(dir, `${componentName}.css`), content.css, tick); 

// Index File
fs.writeFile(path.join(dir, `index.js`), content.index, tick); 

// Test File
fs.writeFile(path.join(testDir, `${componentName}.test.js`), content.test, tick); 


function tick(err) {
    if(err) return console.log(err);
    process.stdout.write(".");
    if(--remaining === 0 ) {
        process.stdout.write(`Done! Your compnent '${componentName}' has been created!\n`);
    }
}
