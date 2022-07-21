import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Content from './Components/Content';

import { useState } from 'react';

function App() {
  const [view, setView] = useState('home');
  const [project, setProject] = useState('hexle');

  function changeView(e) {
    setView(e.target.id);
  }

  function showProject(e) {
    setProject(e.target.id);
  }

  return (
    <div className='App bg-darkest text-white h-screen'>
      <NavBar handleView={(e) => changeView(e)} view={view} />
      <div className='flex h-full'>
        <Main view={view} project={project}></Main>
        <Content
          view={view}
          project={project}
          selectProject={(e) => showProject(e)}
        ></Content>
      </div>
    </div>
  );
}

export default App;
