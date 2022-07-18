const NavBar = (props) => {
  return (
    <div className='flex justify-between'>
      <div className='flex w-3/5 text-4xl p-3'>Kenny Chung</div>
      <div className='flex justify-evenly items-center w-2/5 border-l-2'>
        <div className='text-base' id='about' onClick={props.handleView}>
          About
        </div>
        <div className='text-base' id='skills' onClick={props.handleView}>
          Skills
        </div>
        <div className='text-base' id='projects' onClick={props.handleView}>
          Projects
        </div>
        <div className='text-base' id='contact' onClick={props.handleView}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default NavBar;
