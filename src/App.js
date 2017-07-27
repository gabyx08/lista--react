import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea from './components/Tarea.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lista Tareas</h1>
        <Tarea tituloTarea='frutas' elementosLista={['platano', 'manzana', 'pera']} />
        <Tarea tituloTarea='verduras' elementosLista={['cebolla', 'zanahoria']}/>
        <Tarea tituloTarea='letras' elementosLista={['a', 'b', 'c', 'd']}/>

      </div>
    );
  }
}

export default App;
