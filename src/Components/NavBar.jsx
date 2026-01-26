import { navBarClasses, appLogo } from './helpers';

const NavBar = ({ view, handleView }) => {
  const setClasses = (viewType) => {
    return view === viewType
      ? navBarClasses.activeClasses
      : navBarClasses.baseClasses;
  };

  return (
    <div className='flex justify-evenly sm:justify-between opacity-70'>
      <div
        className='flex w-4/12 sm:w-7/12 text-4xl p-3 cursor-pointer pl-5 ease-in duration-200 hover:underline active:text-accent'
        id='home'
        onClick={handleView}
      >
        <div className='w-12 h-12'>
          <img src={appLogo} alt='logo' id='home' />
        </div>
        <div className='font-mono text-base self-center ml-2' id='navbar-name'>
          Home
        </div>
      </div>
      <div className='flex justify-evenly items-center w-8/12 sm:w-5/12'>
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
