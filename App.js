import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div class="App">

      <div class="Header">Spectator's Sources</div>

      <form class="Form">
        <span>
          <span>Source Name:</span>
          <input class="form-input" type="text" id="name" placeholder=" "></input>
        </span>
        <span>
          <span>Source Email:</span>
          <input class="form-input" type="text" id="name" placeholder=" "></input>
        </span>
        <button class="form-button">ADD</button>
      </form>

      <div class="list">

        <div class="list-item">
          <div class="item item-number">1</div>
          <div class="item">Presbo</div>
          <div class="item-email">presbo@columbia.edu</div>
          <button class="delete-button">DELETE</button>
        </div>

        <div class="list-item">
          <div class="item item-number">2</div>
          <div class="item">John Jay Mouse</div>
          <div class="item-email">mouse@columbia.edu</div>
          <button class="delete-button">DELETE</button>
        </div>

        <div class="list-item">
          <div class="item item-number">1</div>
          <div class="item">Water Bottle Man</div>
          <div class="item-email">flipper@columbia.edu</div>
          <button class="delete-button">DELETE</button>
        </div>
        
      </div>

    </div>
  
  );
}

export default App;
