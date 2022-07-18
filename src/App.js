import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Content from './Components/Content';

import { useState } from 'react';

function App() {
  const [view, setView] = useState('about');

  function changeView(e) {
    setView(e.target.id);
  }

  return (
    <div className='App bg-smoke text-white h-screen'>
      <NavBar handleView={(e) => changeView(e)} />
      <div className='flex h-full'>
        <Main view={view}></Main>
        <Content view={view}></Content>
      </div>
    </div>
  );
}

export default App;
