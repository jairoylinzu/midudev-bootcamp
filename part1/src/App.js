import './App.css';
import Mensaje from './Mensaje.js';

const Description = () =>{
  return <p>Esta es la app del curso fullstack bootcamp</p>
}
const App = () => {
  const a = 5
  const b = 8
  const frase = "Hola"
  return (
    <div className="App">
      {a+b}
      <br></br>
      {" Meche te extraño"}
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='yellow' message='De React' />
      <Description />
    </div>
  );
}
export default App;
