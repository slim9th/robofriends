import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Card from './Card';
/* import reportWebVitals from './reportWebVitals'; */
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
// import {robots} from "./robots";
import App2 from "./containers/App2";

// ReactDOM.render(
// 	<div>
// 		<Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}/>
// 		<Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}/>
// 		<Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}/>
// 	</div>
// 	, document.getElementById('root'));

// ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<CardList robots={robots}/>)

ReactDOM.createRoot(document.getElementById('root')).render(<App2 />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(document.getElementById('root'));
// ReactDom.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello greeting={"Hello" + " React Ninja"}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for exampl e: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
// registerServiceWorker();
