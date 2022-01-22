import React from 'react';
import './App.css';
import MyFirstClassComponent from './MyFirstClassComponent';

function App() {
  const textJSX = 'Hello, JSX!';
  return (
    <div className='App'>
      <h1>{textJSX}</h1>
      <MyFirstClassComponent />
    </div>
  );
}

export default App;
