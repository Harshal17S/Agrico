import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainRender from './pages/MainRender';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' Component={MainRender} />
          <Route path='/profile' Component={Profile} />
          <Route path='/Dash' Component={Dashboard}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
