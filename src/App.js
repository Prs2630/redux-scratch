import logo from './logo.svg';
import './App.css';
import User from './User';
import Homecontainer from './containers/Homecontainer';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <h1>app component</h1> */}
      {/* <User data={{ name: "poojak", age: 26 }} /> */}
      {/* <Home/> */}
      {/* home component ko ham yahape nahi use krenge directly we will use it in container for redux */}
      <Homecontainer/>
    </div>
  );
}

export default App;
