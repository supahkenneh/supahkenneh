import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Content from './Components/Content';

function App() {
  return (
    <div className='App bg-smoke text-white'>
      <NavBar></NavBar>
      <div className='flex h-screen'>
        <Main></Main>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
