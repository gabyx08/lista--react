import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tarea from './components/Tarea.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {nuevoItemTexto:'', arregloDeItems:[]}
    this.manejarCambio = this.manejarCambio.bind(this);
    this.agregarLista = this.agregarLista.bind(this);
  }

    agregarLista(){
      this.state.arregloDeItems.push(this.state.nuevoItemTexto);
      this.setState({nuevoItemTexto:''});
    }

    manejarCambio(event){
      let inputValue = event.target.value;
      this.setState({nuevoItemTexto:inputValue});
    }


  render() {
    return (
      <div className="App">
        <h1>Lista Tareas</h1>
        <input type='text' onChange={this.manejarCambio} value={this.state.nuevoItemTexto}/>
        <button onClick={this.agregarLista}>Enviar</button>
        <Tarea tituloTarea='super' elementosLista={this.state.arregloDeItems}/>
      </div>
    );
  }
}

export default App;
