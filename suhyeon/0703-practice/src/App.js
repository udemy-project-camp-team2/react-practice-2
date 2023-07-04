import React , { Component } from "react";
import './App.css'
import CounterContainer from "./container/counterContainer";
import AuthContainer from "./container/authContainer";
import TodoContainer from './container/todoContainer'
import ShopContainer from './container/shopContainer'

function App() {

  return (
    <div>
      <CounterContainer />
      <AuthContainer />
      <TodoContainer />
      <ShopContainer />
    </div>
  )
}

export default App;
