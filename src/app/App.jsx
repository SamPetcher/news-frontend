import React from 'react';
import Nav from '../components/Nav'
import Articles from "../components/Articles"
import '../App.css'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Articles />
      </div>
    </Provider>
  )
}

export default App
