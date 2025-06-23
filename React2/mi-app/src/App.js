import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola. ¿Cómo vas?</p>
    </>
  );
}
function App() {
  const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
  return (
    
    <div className="App-header">
      <h1 >Welcome to My React App</h1>
      <h2>{user.name}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <input type="text" className="form-control" placeholder="Enter text here" />
      <MyButton />
      <img 
        className="avatar" 
        src="https://picsum.photos/200" 
        alt="Avatar de prueba"
      />
      <AboutPage />
    </div>
      
    
  );
}

export default App;
