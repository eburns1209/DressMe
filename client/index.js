import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// define simple component called App//
// class App extends React.Component {
// 	render() {
// 		return<h1>Hello</h1>;
// 	}
// }

// bind it to App div in order to render it onto the page//
ReactDOM.render(<App />, document.getElementById('app'));