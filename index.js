const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
// login


import "bootstrap/dist/css/bootstrap.min.css";


import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  return <div className="App"></div>
}

export default App

import React from "react"

export default function (props) {
  return <div>Auth Screen</div>
}