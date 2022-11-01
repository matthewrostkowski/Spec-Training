import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
function App() {
  return (
    <div class="App">
      <div class="logo">
        <img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spectator publishing company logo" width="263" height="55"></img>
      </div>  
      <div class="Header">Spectator's Sources</div>

      <Form/>
      <List/>



    </div>
  
  );
}

export default App;
