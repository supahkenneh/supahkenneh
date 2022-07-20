import logo from '../assets/logo-1.png';

const NavBar = (props) => {
  const baseClasses =
    'text-base font-mono hover:text-accent hover:underline hover:underline-offset-4 hover:cursor-pointer';
  const activeClasses =
    'text-base font-mono text-accent underline underline-offset-4 hover:cursor-pointer';

  return (
    <div className='flex justify-betwee opacity-70'>
      <div
        className='flex w-7/12 text-4xl p-3'
        id='home'
        onClick={props.handleView}
      >
        <img src={logo} alt='logo' className='w-10 h-10' />
      </div>
      <div className='flex justify-evenly items-center w-5/12'>
        <div
          className={props.view === 'about' ? activeClasses : baseClasses}
          id='about'
          onClick={props.handleView}
        >
          About
        </div>
        <div
          className={props.view === 'skills' ? activeClasses : baseClasses}
          id='skills'
          onClick={props.handleView}
        >
          Skills
        </div>
        <div
          className={props.view === 'projects' ? activeClasses : baseClasses}
          id='projects'
          onClick={props.handleView}
        >
          Projects
        </div>
        <div
          className={props.view === 'contact' ? activeClasses : baseClasses}
          id='contact'
          onClick={props.handleView}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default NavBar;
