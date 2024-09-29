import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <h1>Slack Clone</h1> */}
      {/* Header  */}
      <Header/>
      <div className='app__body'>
        {/* sidebar  */}
        <Sidebar/>
        {/* chat screen  */}
      </div>
    </div>
  );
}

export default App;
