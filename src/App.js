import './App.css';
import Main from './Components/Main';
import Content from './Components/Content';

import { useState } from 'react';

function App() {
  const [view, setView] = useState('home');
  const [project, setProject] = useState('auxbuddy');

  function changeView(e) {
    setView(e);
  }

  function showProject(e) {
    setProject(e.target.id);
  }

  return (
    <div className='h-screen w-full flex flex-row overflow-hidden'>
      <Main view={view} project={project}></Main>
      <Content
        view={view}
        project={project}
        selectProject={(e) => showProject(e)}
        selectView={(e) => changeView(e)}
      ></Content>
    </div>
  );
}

export default App;
