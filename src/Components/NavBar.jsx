const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex w-3/5 text-4xl p-3'>Kenny Chung</div>
      <div className='flex justify-evenly items-center w-2/5 border-l-2 border-black'>
        <div>About</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
