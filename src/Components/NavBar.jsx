import logo from '../assets/logo-1.png';

const NavBar = ({ view, handleView }) => {
  const baseClasses =
    'text-base font-mono hover:text-accent hover:underline hover:underline-offset-4 hover:cursor-pointer';
  const activeClasses =
    'text-base font-mono text-accent underline underline-offset-4 hover:cursor-pointer';

  return (
    <div className='flex justify-betwee opacity-70'>
      <div
        className='flex w-7/12 text-4xl p-3 cursor-pointer'
        id='home'
        onClick={handleView}
      >
        <img src={logo} alt='logo' className='w-10 h-10' />
      </div>
      <div className='flex justify-evenly items-center w-5/12'>
        <div
          className={view === 'about' ? activeClasses : baseClasses}
          id='about'
          onClick={handleView}
        >
          About
        </div>
        <div
          className={view === 'skills' ? activeClasses : baseClasses}
          id='skills'
          onClick={handleView}
        >
          Skills
        </div>
        <div
          className={view === 'projects' ? activeClasses : baseClasses}
          id='projects'
          onClick={handleView}
        >
          Projects
        </div>
        <div
          className={view === 'contact' ? activeClasses : baseClasses}
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
