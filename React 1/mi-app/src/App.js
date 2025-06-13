import React from 'react'; // 👈 Importa React    
import logo from './logo.svg';
import './App.css';

function Wellcome(props) {
  return (
    <div>
      <h1>Bienvenido a mi App</h1>
      <p>Esta es una aplicación de ejemplo. {props.name}</p>
    </div>
  );
}

class Mensaje extends React.Component {
  render() {
    return (  
      
        
        <p>Este es un mensaje de bienvenida. {this.props.name}</p>
      
    );
  }  
}

function App() {
  const name = 'Elon Musk';
  const welcome = <Wellcome name='Fibonacci' />; // 👈 Elemento JSX
  const mensaje = <Mensaje name="Luis Gerardo Xutuc"/>; // 👈 Elemento JSX
  const objeto1 = (
    <h4 className="App">Esto es un Elemento React</h4> // 👈 Elemento JSX
  ); // 👈 Declara dentro del componente
  

  const objeto2 = React.createElement(
    'h5', // 👈 Tipo de elemento
    { className: 'App' }, // 👈 Propiedades del elemento
    'Otro Elemento React' // 👈 Contenido del elemento
  )
  return (
     
    <div className="App-header">
      {welcome} {/* 👈 Elemento JSX dentro del componente */}
      {mensaje}
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* 👇 Elementos JSX dentro del componente */}
      <h2 className="App">Hola, {name}!</h2>
      <h3 className="App">Hola, Mundo!</h3>
      {objeto1}
      {objeto2}
      
    </div>
  );
}

export default App;