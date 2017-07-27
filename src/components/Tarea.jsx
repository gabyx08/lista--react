import React from 'react';
import ItemTarea from './ItemTarea.jsx';

export default class Tarea extends React.Component {
  render(){
    var arregloDeLi = this.props.elementosLista.map((textoDeElemento) => {
      return <ItemTarea textoItem={textoDeElemento} />
    })

    return(
      <section>
        <h2>{this.props.tituloTarea}</h2>
        <ul>
          {arregloDeLi}
        </ul>
      </section>
    )
  }
}
