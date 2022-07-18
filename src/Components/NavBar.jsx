const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex w-3/5 text-4xl p-3'>Kenny Chung</div>
      <div className='flex justify-evenly items-center w-2/5 border-l-2'>
        <div className="text-base">About</div>
        <div className="text-base">Skills</div>
        <div className="text-base">Projects</div>
        <div className="text-base">Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
