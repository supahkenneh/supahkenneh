import logo from '../assets/logo-1.png';
import { navBarClasses } from './helpers';

const NavBar = ({ view, handleView }) => {
  const setClasses = (viewType) => {
    return view === viewType
      ? navBarClasses.activeClasses
      : navBarClasses.baseClasses;
  };

  return (
    <div className='flex justify-between opacity-70'>
      <div
        className='flex w-7/12 text-4xl p-3 cursor-pointer pl-5'
        id='home'
        onClick={handleView}
      >
        <div className='w-12 h-12'>
          <img src={logo} alt='logo' id='home' />
        </div>
      </div>
      <div className='flex justify-evenly items-center w-5/12'>
        <div
          className={`${setClasses('skills')} animate-fadeIn`}
          id='skills'
          onClick={handleView}
        >
          Skills
        </div>
        <div
          className={`${setClasses('projects')} animate-fadeIn`}
          id='projects'
          onClick={handleView}
        >
          Projects
        </div>
        <div
          className={`${setClasses('contact')} animate-fadeIn`}
          id='contact'
          onClick={handleView}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default NavBar;
