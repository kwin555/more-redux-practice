import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const getButtonText = () => {
        return 'Click on me!';
    };
    const style = { backgroundColor: 'blue', color: 'white' };
    const labelTest = 'Enter name:';
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name;{' '}
            </label>{' '}
            <input id="name" type="text" />
            <button style={style}> {getButtonText()} </button>{' '}
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
